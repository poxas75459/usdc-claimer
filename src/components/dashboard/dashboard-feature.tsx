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
    "4uRiVTmK2nfzFmyxBvE4AUmBA6Tif6NSoduDYu928mGze8XYJt1ZneVm4bCeMLMJAfTS4ZUyLH8v2XR6XdM7kqXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hcJqWLttMQDcNC4Ru6AFRCj6B22qnZvRVB4sxnqj5Q7mLR8r68NQwds4MsaD22aoojnUjF1J6MeNYvrc9w7DYK",
  "key1": "3oy5DXoNmcn7ZbEdUc69afLCqG2GxCv3dZqJzqHsXqYVJetaP9h7juAkYYsfrE4Yif7ZeUEPXXAf8mdatcoGwhWu",
  "key2": "5Q6PSMPfBfW88BqqdmA9GouUma8Fa3dfKMkaHEApxk1YoE9cekXwho77qZSZ36gJwHDQ9LGMdNZqZPYpxA8pAL7C",
  "key3": "K7ie5s9VqFmY8Wn7wwaXS8MqCdcscUD9gt9a3PsAyRPJ9yUa3wqGbpwDSQEsCbwhjmVzidvRyWxBCqRhKF8LBZc",
  "key4": "5uKsrBgzKV5E9hPDEh53D4LjBaVzGCcrdcTBCa8aXTYYYxb5ceezAFQz66tamdYHSanXdqcAt6rfKETrg7QcQhN9",
  "key5": "62ZUqDMZ4FF6JBWrBsxPHQCnr93JxrTQCnqj4CHTeUExvBYUP13BKLcdYMqqrotYXmmmUSULZa5h4d4v4ynXGH6k",
  "key6": "3pxU7f4gG139tV3EDEJTPXwhhUvUJZqZAurUFTSiQfhTjGYbSs2DTDsHC4USqr4qx2FBy2JM8DhsYiy5hJdk5odb",
  "key7": "2pfm25tirvWSx82NTy9xXgexJMvfNBANKFpSrz239ySvbQEoq4KN88bFbRN91HqSL5xFVeG9xe22acZTXzhWkBvs",
  "key8": "5RTC3bKTw8LUyow7e8eQPesgY47QM8qBuwgHfyrM5WgRXYNYWeKatmNyLZVM1RmtVLzk4QsZTu3FpJ5YPXcPiBa2",
  "key9": "4d81HFyLXHu1GSwPbqK8dTbXMQv1aqxg2vEfHzeZqToqMxcPhX66awqKuvcFbpVQjBNeyHTvezLjxDFMd3HaiTX6",
  "key10": "27g2JazyBAHhEddVWAEpV1YwF2GBa9fyi53sGBrLN8DHNuUBjg7WSTGyQhEDbdPMUXRDr1or7o346Vyin7WTfh5R",
  "key11": "4w55uagPrX3BaFikFRKZVQgoLDLuQNhVmBEPVp2KSGHDefSEJ7MUDTd3sCgFrVoNtPwUbFSDPHjM4N4R13Ezwguy",
  "key12": "4vw7rhwaMg68Ks5sBQJWnuCiskDCZL3A6mwybcvW1DWFNkses7Qf2EtQ6yc2GrpLv8V9cbSd1rqubtdqUk78RW9",
  "key13": "2Pk4oeBkDHq8vewEvEmoY9s519BGmst446Q7CBG5uLpmfnACq9AwVYvP4J8gZXhY5BGsYEPMUYb1LipPP5yhfnus",
  "key14": "3j4X39GaEWj8u1nrWuYuJGH2E4MpcMPB8FEKXCju425kG6E8ayKr4hLsSdAPC5Hkt2xTDpQJ2nt2SZV3tZodmc2g",
  "key15": "45vFSKK4AjzAr1FEGAuCHMmKrDQ4Cub1aMkz5VaXQadFqyNtvghzaMeZMnwEdFPWEpBQhaY293Ef1fZwQfFxumD4",
  "key16": "5aaiVCPSYWphJuqCFUcpUgbAuQ7aXPsXufMAANw55z1Yn1FQ9cWtNuw9RUiJQ1mc13YRibonEaRZN43Mg3E79PwK",
  "key17": "3T8biuHwYVchrSveqBSqERJw8hLSaLo1sz73J7UHi7L2rJmQgiqPue7eBjTTchVUu6YVGC2WQVuD12ZSpqNVB8MD",
  "key18": "4QNpKpEsQD4eYx1uz5sBMcJ8fL5yDhKuWFzxSvmPcqhvrssxnoz3rvfbxmBhNK9sbT28SWZpg8chkc9iS9wte89w",
  "key19": "4wwgo6eEr8BivvxnVRxPxUt5DyWs4342A8YVARkycohpUFyAnbgJSotQjjCYWUc8J7Kq1Cf4F7ifm8msDp3KGTDT",
  "key20": "4fhVbA8AuvfbzrExYzKzNBFXkHc2PMdnHQSi5UsxDN6QxGDsNbvzeFePuTN5SLJWiASkPMiQ3G3NfbASDK9818Xe",
  "key21": "2QHAAjNGr6MFPSVaRrsVuXGf5HmYnresjY4GF7CZMFonqeSguojxCuUJMqnPt71h8L41VQAKgitBdECtNKiRRJ9T",
  "key22": "U7rTEkGSqLG2PMi6oU35MS8xSc3UqeWfkhKiQimjojkWBBJYuNzE8jMgRfHSi8CWW4YuGJTccRkRf8uPf5LaPVy",
  "key23": "qZoED6bq39G8aS756ngwGFQ3foUJZ9YSD6ozRMhDpSCE69BbazJLt43wVmuoD6hP4yrayFCVr6sSLWPnuhFv7nA",
  "key24": "FgwptgzQsbESF4svxQaqTEu9LzPfNor5e5sMM9ocsRath8oi3fm6oQainEau7C9JaBT77JN4dXoLi7vAL5xyBZz",
  "key25": "44pJpvVmZAKkYMG6UaE2UQTyBJ5MqzdYJSHkKBgos8r9co7LPhUVd9tSe9Ft9P2oe5fwrNNvpLUVo8WYfN965nHy",
  "key26": "3K1qnAoZN6hMbPi3NHFHM1uYQXPnZ1irfGBDEQKPZA1LktgcyvpicbbruZAaiMaERd2Dz6kgae6LxDYYfYFbxYEH",
  "key27": "3JayrNm7JavWr5TQmsFzNvbYXrrcG4mdz8rZHHP96bpxGRRhpK5Pei9Dsyr3Fcgf3Jz58p6juTumT1DY5gsbBoWP",
  "key28": "2TZR8DLenUvLDdSF4CMaAht7MHpU9VjHn1fxqj2ySWJvTdnfvDQveD9ePSKy5uxYhGiJwvGhi7RjbCsDTxtj3UvL",
  "key29": "E1H7cqJr4HPn6rnxav9mtpsN4vki3VpFmsbStvaWjhtqBHFiq37Sa8ztWMR793tYp34GMGBTdEUw7dpoa8mjXMK",
  "key30": "2qReufx4RUM6fYdw15qRHe2ZydYttTEFzXi8q2YE1NDKuYnVhASvskew7MX1bBuwQ9f6ypoCouMVM71CxRC4hZxG"
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
