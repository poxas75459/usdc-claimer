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
    "3sWFVZJQxXS5oPSrVR1gCPa4F2i4XF3nWk4kRyC5dMUAaLDQMDdGBE5oqFHQmQGFgmf8QQkUhMgaZBeUo4yzRDBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43B73wfJCKhPsk7yvn8kbPaLTAf8rwite2MRt2mGfQuiMThLE1AMPW6TGQ1EBjV94R7ffFiH2ZtHErocMk8TufkP",
  "key1": "2Kbd4b5KDmpavwTcyq31iHvLNcTodKzXaEv9ozxwsTXEuya6A1r1HHu7WBmsVTd752bbv6iGPpcuYPW83NzMBMKe",
  "key2": "2bxJkuQRRSqEPtrKVkW1CQWTCMPREftLCwUiigndNYvGfdJM9kQ31AfGRSW5G6T4evLwDwfQDJWZ3JVJYhppsiQ5",
  "key3": "5QTvHjUFjZ7QRKsiLg4sQnoM4y7CJug9KHbJGJz5Y5keVEgSzr6B5EawDD1TEWmdDqBbvaAtyiRZBehNMTNLEGaS",
  "key4": "5cDdetTRNNHGeTPy7eyqkmiQUho77BKR5xMWs3ndcoJ6xJNByi1UMmciA9BK598Vh3TmUoE1uJJoXE1XQEgPEabX",
  "key5": "eoGjaKuifvd2XnKdnMkftCSqu5aAuNj5sWoru5kRD36g71x9Y29z55MLnCs4hWC6SdixZ8J92WciiNx1bQ95g34",
  "key6": "7EgY6GAGTjU5qB2hftkDZBnFCrAkP2jdaAnKNemy7b7HqH14YHv9pDUkq61Pp8gARPBELwr4s4drLBXbnWpiDDP",
  "key7": "25tLC2jTisruudDdb8qc6c247nCcoKqSq27K2sweqjZ1GNK2Z38MTC27stg2rW4pb8VdFDiRkhHx4H7XYxg4GATg",
  "key8": "2Q6oQSSGUaYVtnXkyRvRKMdaJbJfc5ABMhYhpnm7Vv8jEG8CT1xLrBRifCYbK6zRavnW3Txijvx6pQY7fFxtUzxz",
  "key9": "5KsrPWmHfSDAvmnWijT4853euCHNsRYvCvx7sPgczhZd8RAb3AWP1YHcF3NgTKrp5T5VZ6gfK7Mmz92Qqqr54Nkq",
  "key10": "35wRbhagzCtBQeEV4BUKxdArQZMkktU2FNL9f9e14TBZv2fy426GuSS9RtLjFqCi9YF6T7xKJn3ivKFtj1xn8CJx",
  "key11": "3bRnYP8QGXuZyrXWe4uMDJcCBiLpRNiJ6PEPrxqb9H1gUiRyYKQUb9sWmLEGQhWoafhws5MwMiq8XFmtbxHNLJuD",
  "key12": "RX2B3gbjRgsEddnLAATRD7XTN9pCLYi5upZnVmvTokZNkNZh8gZFoQVk2HrZyG9YkAMkYQRew4m4EJLRQkYJaB9",
  "key13": "29c26QwdwsnX5KgNfR4JA9mWbkcij5aftorFFFdNYQMttf8p3TV5SziBi9Nb6wM7YyrnhjvTbCbzhBLXXU4iVvsu",
  "key14": "KKX9b5Fgxakp4PF7nnHiPTsQWHJEkJxJ7Hu5zuqASP5T8uaULEo5BZioWaLWQShNorFdHXKucLjPsoJW5KZGgWc",
  "key15": "5efE3ThXWGYFV1xVkXTRUEJfd9FCAFsRJkLrQ9NBVqHdEjuC15srmZUmAzd7K3R4c9GfjhZwg3scXpRRhCz6GsSf",
  "key16": "3EbvkorqK1gGPaD9MWWz2CSJhh2iGjncbMZaqfMgzGSaFzhAyrSpz7hXdRZuzHYj3FnbKmyjbBeGHJu3xiDGBFMp",
  "key17": "5qh88MhAsBwmBxASKngWSVucoxW8UASGxk2VUEuJn34iLMZrJRLJ4EG6Amr3wjB8PoMwu2bsR8YfpzU5e8TQB8Km",
  "key18": "4Eatiou3UNfo7FWP3vThE6Lzh5hMqMYymLzBuunhz15fDjc4q7tyhEDJ6guT9BnaBUmqwQHbNXhCuqvJDKVBFtcf",
  "key19": "5opJVdQS6X2ELkfM6XydM74cpZec5fBhgsRvK8shqPAiDJmVfpXU9iWULY61sxhgK9n2zjR5SV8byNervYRHfaYE",
  "key20": "3c9CMC9hiX4TkaX11d8Wtr2b36aA9jVacqR8zvt1XjHLBwjzZp4ZKAksYTuJnjZUUwGv4BZgGByWTdpceQ74NnAm",
  "key21": "xkQ6BX8588qX9KDooVUnNV6SFCZ7XDWNqhXREmguEC3u8xbGMw3Ekbto5EGMNxYNavyPNo6y5hJJ54T32Nk6k7T",
  "key22": "GZu1M1wMhWJmASy85Bvkzr3NJRwDat5yvfzNZwEsSM3gJswuhuZXLHzxJDJx7he8ra1MNcQ3mdojkC9Q2uh5tGp",
  "key23": "3eKQb2JnM5GY3dYhaiMCvGFafuyu7F5iv2qHsaXFU4n68aACFWqEHGftmWYakL2XDUyqNpr2WEH7vBwV2VFtV98R",
  "key24": "2Po7SomnxsisN3rZpjpqsHRUA5VU4cH69nPHVgctHTj23zHigjL72F8MD5t9wfjAFMsbJi5XHDGYH5rvQ8pWqc8w",
  "key25": "7Vq1wMSqvumciq5bt5Yi32q1DjNAkh8nx7eeJ5UfYUTMxjjbNuNgHggJv8ncUPhupBbN3JgxwBCoKj1Wb3H6f6R",
  "key26": "ZexwwYDWDng87aKyFzvgJSLsneTo3KSq8TJ5dS3fnajft3TG36vjBqmSYdkkNph2PzJMtaeTzTLMqVFAgdiHCRg",
  "key27": "4Ja6L9RfVoxSmAc4uvKARwXGcXtB5RfGmKCzmgE6Q8gHiCTiqZwrc4piysbEFYyMA4khuddCut9ccRaEsoBUhNZE",
  "key28": "2FVcpDcWRNjwMEwG8KUp8g2SJT8QdrfQLkcNpjpHQUKrUdUQX5zjgCR8ndxJhzsNV2k4f78yzHpPsWezgCcXJ2is",
  "key29": "zhkEng5GT5PRUKBCRK4EH5XquAyk7c6rYdHnWKjtCgQ5qi4QdTGeV5f4encQRWstziF61QmoG1XpXhMT2skbvSv",
  "key30": "4YRCMfXogTvyxXo2UGbqNX1J7seXPLoTzPjNmytXdPB6oLPeohBBZcC9ooQx3A1rhPdtqV4cS3dyffgHj9824fJv",
  "key31": "3yGSKFLKbbYaxLWNYHATvR6eFVArVzixxacey1r113L4cA1J1D5rZ3RoVr6ByLKUq9MAGtnaxdwd96YjZeUUa7CY",
  "key32": "44CSKyZSo7nYThcWo5LhkoP8Ts9nvQ5kK8ADCeFFWsTig8FModqk2kAksV9EEsn6regbdUwznmaLVBEcED8f8cxM",
  "key33": "2S9WmgYNFJBCctMwtPJorqzx11eLHGu4jAujk3F6WBRT15FNFMJb2VK3wqZKBMAhyUmW3C9Tp9amR3c53y8Ua67q"
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
