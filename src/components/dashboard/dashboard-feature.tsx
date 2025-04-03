/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3Tv8C4zgJR9NsmGxY86s2FGaKazX83fJsgGBwJwj2YDUzALFPkuz9w3ri3L1mVUAV5jW2nKzwv4G2yaJXCM3vDgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWdT62Fg5SH2u7pawHgyMeMpmxFhUgvHzLW8c5VyJmqTmLVmyYPJL61jnufokf96XjvVssPS1dbTi7JWDG6u9V5",
  "key1": "3RxwyDe5fcmJy5LCoCiAV2LKEqHQrJ3ELxanDxncMoB1waEMTtSc3P4LvMnf1ConL4qAH5SkkLWw2YvpUBBdVFcc",
  "key2": "4qrg1rEzta6aCtiEGyyNww2qtPdkPaXhJKwCFciYrxARYeiUYhHtsMCd2mb945ketErYh4Q2LCZ4TkhdX2ZSEuvp",
  "key3": "5ktMuXdYjLLXL2Sea2oDkGY4xPE4isq4w1sM2beygVRLbeZnXL5gYTL7vcRm3FUKVW7A4oNNV3Uat997e5AXCG3j",
  "key4": "4RQwd6QJYdPrL9W5Hswi6jApsYnxA8KwDFSkPvGSSKwwEhe7oBEC4bEJZJ4yV9gUUST5VrUuUxaxSBcL4LAAkZLF",
  "key5": "2sVpa9ipQiuBhhFJuYCP6UFGmbHiv6VymJw2GZfYFHLSSigdtXBNvrFduip2N4bZvRvbAJ9kGGZGiatBd8uvNGKZ",
  "key6": "2zxdSywAad2dd898jYLomxZhwGjuSmekVRPEugntj3UNufWus5GxfFQchSsjeDYrveY9Ww7iXqXZsq9tU1Vn4i69",
  "key7": "2sMXFftYS6tn2yzKYiYByTZn1YAUVwWvaYHKFdAfM7KFVnCeGsLEuKu7FrF8M3AgNc8gSN5nWaGnxaJR7eoDay51",
  "key8": "5MLezwhtmpC21HEk8EBxW3Ymbz5EKm1uWwzTQ1MVViuyxoyLuN8LJRmoozi4vgXPjGRw53N5raMsB1wktffppFBz",
  "key9": "bZ8esSjpRqUBwkESKeyzgKqa3W3DB8Ry1cKCfqMFHMimNTNH6HjZtyTfnppfCuPM4AtgcfmXnEXJ7UybFdtPT6Z",
  "key10": "4R415rKnx7ZR2TXmHALT7JNxrB3nDMiqtSnEhM1FYF8qVrghpBfvv5ss2jzjE9db5rBtqqDahgHNDYwy5274A3D1",
  "key11": "4nxXJ3ByjdREipEMGesJB2rRLfzaZMPRq9eDvePDgXPmLfcX3qAnF7kgomruGr8hCNXTZnUewKtMFQkQfBLTMVy2",
  "key12": "VgnWZjCN9dpSSFS59VQgYJYQSFwaScJ86LSrx5CmLLCx6R41oxxe6iGizSynjWCReZDidAf1e3zdRMXEmy2MrLr",
  "key13": "BZoqn4uZ25u8q4qRjbwSzhMC5e76DZ6XWJuVbRjb7ch1j4nm8FF12ReoLhRFYHNNGnLaLuutBjkDZCAr8JhHg3V",
  "key14": "4tqTxAVmrS9MEq2aTWwdBaAfm4FAENYVW1wbrxVoUZpp3WF8s9jy5xntLvqmrHqr3MXdebEFDQNFENEgdtih7B47",
  "key15": "4grJBFoRCgwLLxB24fvmQbUryppxYVK3rBQQihu1u83y7vQ6mySeYPqNLh5CuM4NG6mV7DGv3bR1WzctZGVBosNp",
  "key16": "1Q4j83d5mG1YtyrMUUYP9eNBemiV629HJS5TNhuJjTeUsUH6CPEyo36fCPTjQ2X1ZW3shhbp1MQak7QA5AzXmaB",
  "key17": "54ipKAyLy3wPPqwRoJqpe85n7yNroL3NTcr7PpxmXimJY26L7wRB6bWR6LR2DvmL3baaembf3PBfrJETmRbnEs4X",
  "key18": "iFRMZ3ZfWs9BaG6NnecTzEg2pcnNvh16jLhasitdFa98s8zsduwvq3bnyDoNTvCHT56MsV3SD2XoAJuNfA3k1jG",
  "key19": "2WkaxBx5ePBKJFYWszNkEia4FzaCTL2fHgusguGXBPcHc44yAtsqfH9tUuKVgcNT8Yh87Kpg3DB3nvsZnnMzN2Fe",
  "key20": "5DzzV4L8vSKMiPjZRYYb9k6KSBStjekJZ3XxWKxHr42d1iyJQMyNcWNWczg9GXp1d3oZG6ag3c8dviW5h7vX9j8v",
  "key21": "3yNiPTn9RVGUmGwKUFcAitQQQ57DWYaWx46zk2mkwT1VmnJU6ZvDsypwWauXDmgkkqeSwBrQ6j2xf8qZoeVHxzpY",
  "key22": "HNxz6WiqNBWUZYK7r1wCkLCoR6fHcABrJ2ExF4a7cP9Zteg2oei7eFPnSBSgbMxoReVTpa2zdRt55pBbei7N6pz",
  "key23": "CQnVLPRh2pmLNbVVQH7Hcj2Fd68WZrRedANwzB6YgmuwPDZE3yNkA73pSsoWgVMQbNgFHfLzhzBQhS2cKMQyJje",
  "key24": "4jJMCiXopAWfVHrbubsHXg3WiKvyBXZkZaksBMYBejpuJPoFK16vt9gq85tHdCsgEtDKjuiZKeAcHLyuu4UNcXBr",
  "key25": "3kLcTX2WRWpDcYfX1ofMRFRjL4os2MovhGQ8ciz5MmHKVvziwPbw7kD7jyjLCrMd6SULNpPUqqCszvfR9sV76HBV",
  "key26": "2d2kExo8TaJyYoF1SK7BJHfaJqV26uGmmATSZMehwxbrV657xys7tJqKK14b1BVL3ccVdhEBbM1ukLtAWn166JCo",
  "key27": "5ebFXgSkwXHhQdWH3K23Z8ZgoK8n6Krr3so5LkY7GxASoZoFYavy4TfPcNGeKdaTsP84F498GhbzuxcTpMmRnLwL",
  "key28": "3JSF6uL7hEQwwW3VL3e3rxssDvAVazHaWbLTejuAG5poKLT1VQqDPnqQGghkXMJMykm4mGBcn2pteBjdBn24WxgL"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
