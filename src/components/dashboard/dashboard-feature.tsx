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
    "4xoZ2Ly9cAPfxy6KcrBBKYVsooQwPGwmpV9rsfeKbp55Z8tNGQ7fcp5brvwWExnFdi5zFdsEEBV49ndau47211Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bVAJwgjgrcuHrHJkzzGAvq6FfUg4ckFv3DefmZNcVtanCeFznp7kvqxeZ4rZc2KmPedNFB8RMxyFKR5uYc9ikkZ",
  "key1": "4CSSi6Whaq8rPcxXoUKVVd2VqRHAsmb5Ukp4JWMtdP18R8cmFe4cxQ4QqoteheUQTB2pPTGkpLaYLivTGE2mqGcF",
  "key2": "PfCBsLHnocoHzcZBHk6d4o7JKE2UhTAAbu4P1tMhTtyKWZWd6DUKBeDY4fFyh3LFR5QRb6VQ5wFHb41VdLffWUD",
  "key3": "4JHMTDbjvBZ9UgpBrGVgTTZXFat8JCvVWiqhT5QzpJV5VguePSjceQq74rS4C1YXiMxG4fWid35r6rKPJ7HtS6pR",
  "key4": "482Y7ocw2NBxZ1gbHPZ6yqwvatK53gUSuFDV4twPe18j3E5w5hqnNKYh8Ex1xLjmumqt1TiEYn93UHmaShEY2r5i",
  "key5": "2i3NMCCLPCYQ5XwYP3DiPEisuMv2X1qzQn5FAy7kAw2BHHMq2bfsXP32sxdtNJ1ZJUTWEgEMwUP1TGEkFW9t1Tzb",
  "key6": "46FkGiZZBrJSWLna5NFrMqTcXfiH9phM8ySoh7j5vNevZRTrYiVQXZNgJ5sARjnp52D9Uw3iop6vLSbZBvsGV5Qz",
  "key7": "3UDgkiPPdWvFRdDGbD4AK3GppwvBeMyLDUYjrjpMuuTuymiDwVywBc24nJhaZEprVt1VM3cBdLzMjTvprZL6M72n",
  "key8": "3GMqsg7RvFsGSfhMNkSUA1P2ZGBLb8VLAb5yo8rFeVmjVwYct2LEdLe2ajSYhpABB3vsK4gui12SmX51kcjUNV1u",
  "key9": "p5v9it6Ffbw6v8cPUdMtfFubPsdSMVkJPBb5mweDws8WQUaWqqL8jJQnQ1Vr639TyorP6Ls1Zd4SdRfxkCv3mCY",
  "key10": "3rBGSxTHMaQ6PUiYY3AeEMkEm8r3JMhntNN3AqdApK9GqcXzCvNMhm5aP3BZg8oURyc4crfmEueXAQGiRn7bfvw4",
  "key11": "4RsN3RDFxDQwi4DpHfuorEgPNdVa8fB6fX7E9AUU99tk7hGYzamKjQHDo9GpdB4uV3gNZBBKX9qu3qPgLjcjjBco",
  "key12": "5yatQCTPCPedfnMQp3tZd2Rf8bhAhZ3KqcxfycJaP8TDBt3Dy47tg9nnuNYyebfv7DG7dxPdWCYk7vtt2qeoev73",
  "key13": "T41cruNnL1oUHreu8n23QiSDbEzyvATGfCtvzuzbRT3JZqBvDyUM2QvRyjqG4fEVUBGfR8NzM563tDDum5AbN5k",
  "key14": "3dxK6rHMcqhf5C15yZHcYd3EH6XNxajdBtvzwzrXaTPK5jvWGG1WUJt9rhVX5rGXNHircNMgk1nEj1ddSUcU4Mrx",
  "key15": "3nCFXa37sKP1usp5eXLEhm6cY3QkbZru65kALXcCYeXhTHp1EDTSuZiGbwixqSycgZwKkyLwQUo241cy97oCRZP9",
  "key16": "56sRJ68evJGfSN4AUKuz9zN7o6fUM14fLCuRTe5b8p97C447gBcRB9pB3cz7GmKXvCUcSu72tGyXZqjFjBLu7x14",
  "key17": "64LyNqBY2qS5Dj3zJPrfcKqeD1rw72YaDS3uDkAdHMiK25Y5cYTQQyiJNMqGMJ9LUVcmg6xf16VA8SvCNWZL5phU",
  "key18": "37pqnw8iADr3XCtPU8PfgE1ZErnXCx268nU9y78pGRJJxNUioDKXngZVtZvv8w7rEoVB3M4Fb2hsM2gxdz4UR6qg",
  "key19": "2yMy1TeQ5vQUTxxFd1epV2XN6qdEWXez8vuaUDioKSxmNqFv4FVAH7ad6iLBstS3oGL68KFMwusKm5nXkUb1nsi2",
  "key20": "588utCPALjtSUNLxybnh2WgaAmwHUMB54i3njeMWWQmF4mXN7Yv3iy89HmCvYTp8oJskNjKVay9pVSpftFRfcByM",
  "key21": "52oojojymot9cM8ubRisxyQ1DpL7Pt6a7L28DHtwdtoNRaJumdrRAfc14WDgcq27g4MAzrHsGyyB2rSR45rN7buf",
  "key22": "61JdMxaYPfmq2PWJDw9J3HRHT8Wfey19yVRiwGMM4LEF19V9FM9hv9GR5dygAc9eHQ2AGJqPDwDLTd1d2iqaL125",
  "key23": "egWHp9vLLwtLpH6TM7gb49jc73dfY6NNB4nnpPrGRA94pcBJYiTkY3zq6cJnXv2MkpVaSXQyDVZ9aRmepufBpVz",
  "key24": "3oQWz6dM3vnFDMnimJU2kypAqDSNx8xR3Y9J6e3fBc7bQaU2SrB1VmQeHmYJ3gocZpNhtqDjSRRX8Rfkohj41CKP",
  "key25": "3wn7Y4DnCZtddsjUsiPYRWFuU8YH8mb1tGJA5jwCKa7w3AdR4tyEUJZf8MChh2A2nNAfVQaYUNhK8rUh3Fm49Kkj",
  "key26": "3gKSEMR8nbzV5bRdr2sBiL4JHyqhi1Pn3457mUEM3RARz9NtY4jmpbfQwLxRPn5AKjduE557E9hLqxwUZh3A5nYp"
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
