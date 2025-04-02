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
    "46aKR197hpziTa41Hzf7eUyuue7sU7957ycRVVGACUtdRakgN9ShvmSKaNqZxyHsbXRzgtoHzudxCHcDzx8EGtzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4YwCYduSUz7xYCcvXPy4wmDvVnXf97syWygY8vuZ2ymZANHZn7s4PEwU17GWnVrGPPgjoFvgkjnN3P6tHpPSHC",
  "key1": "LZTDSmzksA6zokHFYGXJ4TnEW7kvpDE8YtqVyrNgNyTr331EfV9QvX1zi9cAHgdrrM7BHxVoPxa8RynnrUnj4zz",
  "key2": "cWctoWAhT8nccuAq2qgpUZix2Wko4BRPzk7fskCsyeankxLp1oSuoytwouv6MxAhypgGcZY3x8SQd7KguDXgYAu",
  "key3": "2CHymXxKEK6tUyXqtQPdAffB3cS4xDbfxJxVVq6Fe5WLUprRdEfbtGhFFYRZpmMAmTTC42GxV85RwVceb28ifZA3",
  "key4": "2m5i3K9KocEMGcpRzy8Ljq9qJMby8KMowhoW8BvtZbYs45nmxUHZXsKoWfaugwWz9iKQEuxVXV5qFLnBGAb8u3x9",
  "key5": "4pcPTaqgmH98rWX5k77usTov6w76PQxJaXcHfmNZwqddeQgKT7Ltdti33XeTyUvBUsGf5enp4j6vJ5m4jZxsnXSv",
  "key6": "2Zchvu4Fp1JgbhoMwNbUemwyLanospmyBs5CHDPDbwFdxe19Q2DBuSDuiQEPjGGroYA5D2pR9LDG7n2kgfAguMdg",
  "key7": "3rDNZACMYzairXEgi6CQQPt71xfXYGBVpE3CU2rj3Dp2o5DiTMGY4BYx3d5MLtWamqTPPo427LuM5x9FYTuGpjhE",
  "key8": "5c3qZ13i8sDSFxAxvaXDb5JJ8sviWnrf9pKCsD2xzWHYAw6FqEqFVgveyShzeybZfS34Yijk79kdSj1WtJfFo5CQ",
  "key9": "5T7DW83gpVmWRXaGeGCTUgbCD4DKHRgyPV1T5mW1vRPaDtZXYqrbNginLrcQysgCrV2srYATXcMvSoB1ktwHHdko",
  "key10": "2TvbGAZiZtkgo1WKspEN5WtNYxu482BtSsvR1XdZBgSPAaro7zfgTh6Neitz7kAUEDY3ymtyFn8jhfvad7WYZPzr",
  "key11": "CeXdHEwQg7kjGY96P9Q6ohNhq2WmMxS9HWEd2Vr5YJ5nbCdd3hHx8btiGhvdkpEox7pqBMxS3z6ELejfjtbBJef",
  "key12": "2f747dueKaJZeuYY2z4maMSKopxyb9A8jJPU3eGMUGMXdqJukmugLziDiPXsGxE8h8zHJALHMCaiFKcss2sTBfu8",
  "key13": "2pmXSaZ9i6iaPfTumUkasjLFsTL3YMY7UahgSyAi4qaNZAAckpvHLWLF1bVmbh8zdGgVxvKP4wpH6MKn1YTjCrHT",
  "key14": "5xuZwMZRxQUJBCL2zKS1dz8zjyYVDpCGQmHg4hKgJMgYZdkEuTeQeAKN2wg2QZMD5dnsprebVVek77czMMaLSEfm",
  "key15": "5Kr5ENfgqQMbGBQh27UyxzpsEXk6MgqF7UbsKD4YE4e3jKrMwSYj1UHUzjkZZVBTWrvsZozbmcS6uP3momanfwv4",
  "key16": "2EmEgYoeoGevVKn53wMTqMYbGfbdetaTBYSDtWTuLRBtznv8arSF2vuAU3uNjNCEQdMbVAb59wYFSzwLVDcekJvP",
  "key17": "67GZG3t72J8etcUe1CPTMCkt1pDjhmGV6Lh79RMxQJB1RtEkay5aioSK6XNdUDWpUCG5FUgckannv3y4aL9FECZa",
  "key18": "5p9SLrTeNLzzFCtcThK4SJG3z8ihyUZpbASqwmhgsT53P3tmaCMijyPaqPykJkbEM6LoLLdbC6ab8jtTZtRRsL6w",
  "key19": "43KAAy6eBK6Dx6oBjHuJAGgc3BXrbnANEdxa9zhY9WtQ29QasmcYvk6DADokEwH783pckE9NJq4K2xVUZ5orokm4",
  "key20": "51uKf8kN2KqcEWVD7kUrCSxwhd5JPVL6sgWiJn6nSxU5xDM4KmWJkt9rmPMsPQpwG3iF4JnEWfn38QySTVkkJZJA",
  "key21": "UxaS83NgPDUuCwuLGxcFYpVM4kwiNsbyti7Swvgb5fVRtaSLLYANANykFLaP1Sek9eHHYdyqLonEaNkt95Zs8sD",
  "key22": "3eoBA387GbKZPjQk3SHuZmZnNdRFmgRSwLzzqCx6mrDgXeH6M3Bqh1VY91fC7W4djXmFWW3pov9ZE41VVHT9uTdq",
  "key23": "4hpELJE4nwcL1CX7LiZqciHjQcUfpHC4vgcfE7YPMsXQzHrdSECWzemmXErNr6ZfuFQ74cjqYwFxWwejA1DNAQ2Y",
  "key24": "3NYWBtohDiiy9dZbGqgNHXwf8AX6bFriy4wK3JwijJrHuhh9UHV3bxSvnrLXeULaSe7XffuGP5BhYyytTV1rbUqe",
  "key25": "3BxoNop7ak3oBandNgxHhmXyaD179MptD5yirQtWX4p9s1ttUrut47DbWAB1VMrbPanTxghDYRbjsu1aquqH8utk",
  "key26": "3UdnhiyvhtQsYT3supNHyWgSqyHuKPx1YMC56AcJi2q8esc17shzoSEm9k6EWopYb2LkuF7jmXwMJYSY2Dwh8Y5j",
  "key27": "4XbCL1Lsrhm4rgM6ShCzm7RioTQ7qAgpMfe24gpxnTrnLMf1ue6ZyNjxoaESey9vzNL4dXMX52dX5JqV9RT1EbpC",
  "key28": "2gJKapy7oiwrFZJGSNP9GVoX7xhzbvAdZRJ8X2bx4PycX7BD9ErQnkkELk8fMJeuidQMnecip5f9FPmWgxGfSXgR",
  "key29": "5WXdJKMcNFf5H2ANDuCRJ2CdVpHPdHaWchwXpvC4rfM4qcPsJtai9zxGt76h3LdrfRpJwQbqxZevdRLCpSqf3Ur9"
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
