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
    "4z6dNJ8382SnFcJGcC6ASmyWZxh8v9CQGHWgp6DfN8qNXdjPEWDeyiXams3D74aat6Vqg8QXaAkJAiWWhos9VZyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNj7R67a7zVmoGophUREpiYqvjm6i42E4mTgvn61hQzqMN96WVKmD8msyVgqXDGpUq1Wo1JF1RwT4pm4tREbfgS",
  "key1": "3dJaYukm6ahiwttMKErgqLeCHSKdDZkMW8m8rdU66uECz9CUyV13TWRH4ZFRegZMqDJPsY1YGP9A4iqG7WzHrquN",
  "key2": "25ovmhgvgFnjuWQaETsPvaGRzPXijBc8LhY3mNQmogpoXNis5EeLZcqPqqQFd8wqCArTPGaEdF3ERrReW27jTTqF",
  "key3": "ZnFuyHNGr5FGpb3J3WDn7c5BXmjUbDz35K3f22qNpNHp3L1UJrSLoHsYDEkx56CmJ2XRciMRfhkPpqt4PnATATz",
  "key4": "4mk3nut3Ruz9NSCuoW6pszKYn289oDCmb9dr5Mgb4MKsqWNbK18udNPgLhau3BxjWQZRkKksPRAMr7tdF3TjnTfR",
  "key5": "XcUjPwLs8doqyPbd4HgaCDBPZTuxvFPPzRxWETbJyWN1p2fze5pSK2qw2P1n72mEPEQvb93cRfJL7tMZzMgkyFM",
  "key6": "3DGv4dKowHvmZre1h1J1XjLPdmZYfw56AvkAzJJT8tH99kWY5W59m1v8jCjyKG8DyMyvDnF85p1RSDfrp4FYcjn6",
  "key7": "5wuB7WvUCUDQrX4LLSvAeVKZSSGip6CMsxNSFV5PJqMxswxJiQcMYeEVDvduGJfz2UY6R3tDDkcm8XkRVHDTqHGW",
  "key8": "3hUBXyWCSm2XaRAjSLYUtRQrvVu411broTZJtPAxM77AMVvxfjUaxy6PE5VFkrkPcf8Ftv83XD33EjCiWpGjFRN8",
  "key9": "2gCHeFp6TaSfunvC7nRVJAxLJwDxsUnHqETwetYWQJsLTR4Smq9Un3in4xtxZQ9XeB1jodvWxY3iw9uDSG9GCS8P",
  "key10": "5FMDXnwRjqdkWfKKz9T8yZA2p7ZiCgNQnZmbz7rivX1LBD6qo6XyDhpBr6kppTYwa6UgmkLe29jigXcp9KnPdSo",
  "key11": "2hPeSdu9Rgx9Wfprfetrb2fMHTf3wL7ghHDqvUfXtocaVMh5oGAp5542oWV17GqbRx7e1J2v93ber9dnh6emHVVc",
  "key12": "3Bf6kor8Hmkne5zwbWtSbfsznfZ1nkDsP1aghdVsTzJXAfuRc1AaCYR1We6CSN9JWXCEQ8fJ1ummw7Bu2AsikTQM",
  "key13": "2gvF268hpcba9YHrsvQoEKyH2rHn9dufa5QdZsq53wnJFhEJcz5s215pQm48NZMcd6A4jYdLPn5Uk5hy8G5DNycs",
  "key14": "2g5HWwnwHa6DzyQgyB5e1TLKq84poaprWMGNsbdhKX3eVQmfHTQZdD2CVFa2iawXa9y11ev2N1KTdaDQcK8ZtR6d",
  "key15": "3FFReJS6Q1yhaoB3SuAWrKnAehe3LPSo6o4rWwEukiWvSDLzRGmWwcGJj4jscTnRyxQieXrnb9fGsrpUD8rZv8Qe",
  "key16": "39pa2q6UzYpfz998zYXo5F2uxKiWAeNzSp4rnK8U763hwwKwSss5sCEjrpnvnWrfDwumgoUyXzUHMaAnF3pHgFqe",
  "key17": "5SF93PxNWSUius5ftZhCWjfNfA8NxcFtqEm7Cwxz64PwLMcAbaz333CZYSu4S4z2zA6XkvUPcNLfXdztUyAGjpuP",
  "key18": "zNZM8VnbNzx4pT32Dkk8KgdFLRQMfqAGAR6uuFTokikUf5U4iSyaexL5CYonFWeyCoiXMU8ygbBTz6shkpmydQ8",
  "key19": "2qCjmoK6tnqcs1YTvKadCxSUaUMFT176aBoExm6FR5oioN3WzGk9pD9PdzcyFUUSqGege5RTc25VHdCzc1jFFvuR",
  "key20": "s9ERP4QeHT8bGCeLEkeSsJXNriQYBes3FNqkSJUf4YfjYZ2uBs54riUGhMmk8B7N2zyNNY7foku7VPdFLoSoSpD",
  "key21": "4CH4Q2s77C2Uqq2pQkiqk2Zrvh8MFNZMMpyQ5hFFnK1rJwc1wrcKtYqZAKsnSuAMBhJBXgecdLgJJrEHERrqBVbk",
  "key22": "URg6JEQximBPzQ9agioyNYBajEPqAaYcNjMs5rCbHv1sTBzwCTExYh6b9JkTbH1iTYQYkxj8fei9cupNnRN2mF4",
  "key23": "4Q31mZkehzPsMUVYe5SHfr1fgDXM5c5hxzN5dRFxUsTu7idY38M5ZsZ3g7TRtXj4WYLN445yonhcDVpwazseArW5",
  "key24": "7V5pbiq2UoQwoHEDCdcCDtKH1hAjRmBvfSJwGYNJUysqNYLLFouMEGNKwcFB47sBuomefmHF1NbKYgSKv2aLboE",
  "key25": "3Z8kk5cNwZD1DzpPu5H3Nca2d3UmWE4yqSdiwpX4iro6RV2cF7rZJNdjewerSgdYkhhknbjCSmanKLQsjiKhjHwE",
  "key26": "Tder68V4rTzuQjsniTPk7hUHongsgrwqxomYm6Dz7xiK9USgf8SoyGn5NLJvJVoSZJ1bAieB5WGSytbYSatxfCu",
  "key27": "5f1uszq3jQUF5989nsG7aQPhcE8aQ64pcmqF6jv6AGrLwH2CsgZPBmXw9axFAkwPYkkFQPxSXFb5b8gjEdwTZG3w",
  "key28": "2peQv6bYgiEWDxXdmxytWqDp4pS8iVyDt1X24fAqnMZxSCLBb2ARe7TmbqEfnnTLqTkJwpxEcj2V3W9AUunZXmiQ",
  "key29": "61cpS4DHCdrFLmqGsk9XE7mr6pBYS4KqscDgeZjM4ks7NEnxPSUBcaKLorbEww9B5TRk1P2uwkE2YojzW3jQE7ks",
  "key30": "3ypSHbtgEQpdkS66umSSxa1ypsLJf7WSnBYsjbwpvd7n7A9Sp6NzFe7PSAEMfud29HYDHmQ8TL9rWp7HbmxTwqw8",
  "key31": "4YqLFQ57rDGAgPf2hx9DRbyJVhHcBvNjkwurGGx81UKNmsmwbAijWiFneYjPKTSKtnanp2D245p9fD29QB7bCS4Z",
  "key32": "5Af7KRjXpnaNeAn5WCe6N12sCgu6fKMyjiSvpuFTr2e7BMkCKi6Eoe7hbBgNLH2YyTatSWZWn2ZCVbbj3pJbnSt1",
  "key33": "gpgXiVE2PAZoq4arTM6dbGYuHndFW4jbf3ntbxYMABdBqBTLfop6sZRLTXuzejEHqFADvopuBAQEyAJP5Sg5Lsh",
  "key34": "5tNFJgn3sE4vYxeaCf3pw2SM6KRkYim5AfpXB692gzXN53R9pv6xftAWDsYeLKua3o5sKmkMkbjuM8hojsbM2qsM",
  "key35": "3kDDHf2b2ikByuVpY4rLdXePcQuZWLbn6RRF2auMHducUeLkPnXQ3eRPbsHcXapEL3ahkpmbZ6n2pDQGxTfGxacg",
  "key36": "4RiuuNErYpwGXYy1kESTqxV69dCRTpLvqWbKQfYi7zafof3utBc8fnEGj6bHZgsABiPqby4tzrjc9KVoAbiQoRLB",
  "key37": "4yfZnH5aB1AdydbrSS1YctKd8KNpjQjxmf6AWMr5rUE4wZCY5VCvibGPUof5gGZLmxEii8HLeYU5U6xQLFrRJmuD",
  "key38": "2Hn2qBYC2Gv8UBQKfhCc4JRD6Drbh4DWV8D3HPRNeqeds7wSjyTPa1wJxpXa3H8qf5Honuio7jRtZtTpdQ2AgMm6",
  "key39": "4PQYnNvVAKxGHTfH3Fakq43Sqrvr6tWb5nfkvNPuVoP1THyeac5Zva4p2tayxeBgdAPjC6YVYrjoSGkzoXdXNmZ6",
  "key40": "2G4Vg7ZqNdYxx5VriwU3zFTgLGtGgf24dDSP7CH2MrGehTjsBBswkAnhwjxZjCbXYfqNSKRiPAKjZuqe6izgB3aS"
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
