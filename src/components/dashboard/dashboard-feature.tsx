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
    "2LPuZ2xdcwf1M21DyCEsYDfmv94CeQ8zw62QwFHpRm8puQ4GHCPhQ2eDhS484UQEH2GREAeDYCXhe5RbCgHwxyuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y3bUW1ZDFgExZsyyYJYpapoDMact49u75gxeurg1RaCsP2fxhNjppxucMzWFdxckQWAoFs5TEuibM5o7gSD7FAT",
  "key1": "3CEAG6L3GWqsas4x9fT2fm38wEvriwWDuCrBjmiLJ2TcUXP4vg664cLzHfA9norwGdjqaD22xEETctYLtBo7cVr4",
  "key2": "3qbTNznQ42tCRuR9KA8Mp3y4ztS9UWp4j4HV7yeDQnGiYDi9zoceJNuF3H86fSSxkM7Y9wJsHLSWgeYn5h3KGABd",
  "key3": "4TkfjUkuNFJVhGVYvemmp1uachFcmNjeUELB9np9YpZLpYbhMaiANMdR8hqquBYTNMaMEphVac4yYUTT7nLVbLQx",
  "key4": "3EUP62BmEP3KaduQFhxRtoMjBrfs4CvSHP4xwKZarifX5sGLMuqMe31S9KAG4xro1LT661jgZCJVBDd54faG46Gy",
  "key5": "5rFe5At4MZz8q1aPRs3oQh73RrcUGFn7GubcjdAQJThmKweEj3PXGTsjqLHuFRzoZidRhXNxzazcqEuRpwsnEBmS",
  "key6": "51fQiRj8AQWiWSGeT7HcLxkRPmrbn9D2BPfwD97qmLBT5Z69yMguJpp5yutDQwbxH5z3PH9qBy9XSopUUx7Jfccj",
  "key7": "5NskCh9TdxFM7b2DrXNS5R5bX4DCUknhmTdBPQHWeQR6Ue7d4dHRoprrqX2AdwsnSZP3XY3n5PmUsTHgeqmpFDcU",
  "key8": "H2PQJAmgjqCK33gJrZ9uyeEBrHDtdk6UHpvGs6uSCUVGC1GEoywfNtWsiPtSxCaLynfhJrwu9rx6fCqdTnoWDXL",
  "key9": "44U4nPtWa1A2FvVVPCWHTY5XjyQavmTScrWE2ai8SkCDRBk4Us1u1hQ2M3g2ajMSGypN8F7Ydao5zvMruC9N6xGM",
  "key10": "MonASk9aCGa6Z56Tr6Vi8bkRb8y1LsYZZpBEcbfQMa6VbuqCotNbiUTRVvgvL6SRLALwFewe9xtyeQrGfkDk4sS",
  "key11": "2SiWb5Uws1FY4VsqK5aBa7KxfQ3sebJrWN69osavWA6ydjfiBTYL1ErZmp7tvAznQCAPjm25P597vsP3ga1Wyxd9",
  "key12": "bhLrBfCUGdg8ReuEP4omWK7ew5AnHo13h42GTzhudXxCpHWdsQtFbpfzo7d62hwJLz2SqRK4dKmn4YWQ4Pw87oj",
  "key13": "2jxoptMbWcuKwLSqMhyhGZgQMELTjm8Dc2aWSF5kiRT55hHanEM5n38nazn7ksi4zWHkFsJLCFzW8SXTTaKg4t9A",
  "key14": "2A7mz88awQJnDcysQpP8t4oEWXPJU2RcsogdEWcKfUiDadjbt8dsUSU62sWvzWfBUh41KTFxV3NawtZHxdx7ZefS",
  "key15": "mqjUYrMw9DFxkrAkDgNx9sUQuTLcGgpTxmBbeiW49zQqKFFsFxdDi7YQnWQNax6Gd61FNEyPKKr4Q9T6uoXnarB",
  "key16": "P8nnriiEQU9vEfgJPhCnADEGETQjqz5MsbkaJ9emZKBxVvwF7WVp6puhJXMYuYC1VbSsAGVnpDGt8aD3vtd2kNk",
  "key17": "2icx8zz3v3WMfzqNizgcmAggddATVkkDCW7c3GLV6BpF7MVNcVZWycJhYW6KQrqAYqou4AzCWtfgLHkuziKxWZoC",
  "key18": "4K7ZeUao49jo43hQkv4L3WxXjzpE1zBovaCAsyUX949gzxirnrN28VaPV6tpkKzRN9FmxUKxdBTUptNWM5ibBztP",
  "key19": "3pRmB1nKUq64aY9fxhVPTsCJmYCuBHNdGv5a8TpktxCBFAzanhAFtJVszjY8jxGEA7ijZN113UjcRN2cWs82KD5N",
  "key20": "36PZ72R3rbNPn3HdqYuoRUeYZDqRcn93p6txsHpT8hQArvM65toPCQcRaoRHFfTz8XELeYbrvN3kbqzVmCMXeusD",
  "key21": "w5FGzc4qUwH491iLeH3f3jQFZJbSx2PVy9TbVxEH87KaFukDYSGEQgb4YENTWbUmEbgcVkQ8Uvt7Dx6LqF9PaTm",
  "key22": "29cN9tHDrBEsRdWZbbZVHfeEFbfWvY85FtEoQy5xpUu4uSGFaeUNUuKr9pypKh4zLy1iVD5zyqXgpQrVcN1ggzFp",
  "key23": "3kp86sjYwWK9v4daAUAdMrLQZyado2ngNr7jBBbRvYrfP9pcUdGYPsWWEu1pQ5KfzjqdY479oCoP8xd2xbNgHGPc",
  "key24": "4T1B1g9emGKNrvNsoSw85gaNvxpjXnsMmTovGydh7XuoeUPL5wY8mpcf1LxrxMH6QBoXFtv2Fw1fv4K3RCvqsvW9",
  "key25": "4Ky1ZNKB7EAzfTbPvGRe2HnQhXSDutSuZ3N12GqmUQ6MpyyuF9CE4faaQzs9upCJKq4HCjyj5iAd9JtLekiAdtmX",
  "key26": "3ca95N9pomMUpYjfpf5beRE9JWMikmRJEBbXCgNzvSi4X5DvYgmZ6dRBSQBdUJASnyCwpwA8D2tzApBa19T7fnAZ",
  "key27": "47fhv1KH2NptFZAUhM2GkVQzDsjUhc7GFn8YekzFEQjrV7Sz3CUPGucBdfYMbPNVcoojMkKGkvvvCu75fqw1WsVc",
  "key28": "HX5FS69Q9nHcEZeqTT4VztCwqmY3rLsXvJcwM696dTkMszZ9eYHWfm6LLCAypMWsh6zg65KwQN1G4YrWtZpEvdX",
  "key29": "263TzNuAjMe2TFKH4hjwFrE1ijKjvUrdeN5YAb6JXb78D5jokBwnrjGFF54dF8VWHLDHikd7aBnZZxFN1Hng8Mkr",
  "key30": "2oaNGcm9KGMntXPzA5ZYmibYG3MYV4H2c9pniGmiuxuTXmptcoXA4E2HgCcwDxWkS72wAh6ChLEFRm1GheqFqaKj",
  "key31": "3FNE8i8VxPFthwXg9GAHj4ydKQ9eDFww54A7xPcufMbjg2UkFgWLunc6xY6oDm9PSphEdZ7UqAdKH9azq9GswmYt",
  "key32": "4nWqJdzrAS6bmCyiu8PCwtGkAen9aXhn1zudcMDDW5b7X8DXFrx7CnGCsboFaU4kAEZcD5wPrFVASkF4LuEYsfHx",
  "key33": "5ewnAmpqfYQH6FP9FAAuL446ZR5MAz81fLvNrtrFLXTi1HdDXvSWmRReQLavKirdQjPbwP8pvTKv5bPH2yipWDN",
  "key34": "5UN5gbrZ1cqH4ecoxWbGP7yBeUbLPjEnypvNE6wLMQSJeL4qDufP2uQAJ1qWg586xLiyNJWXPQzuD6v1WDUz8xJ3",
  "key35": "2yWNd3KH2sd9VFWi2H2CBxtTkCLDYTqD7mjXWYhfzydT1V467ysH5faE4RJKgAxB8Dwqw1myqmZ1FUBBYn3nUj3n",
  "key36": "4f1mjB9w6ZH1XxYTEVjf4DrisnPbEbekjnQmeo7bhQUBa5X5VmZWECNkUuvayVNXvyxYCXusw5HfSMUDAZjhWh43",
  "key37": "5fhKu4CE1E6CbBj43UyPusX6kiTH9gWR2SoBXjfShSi6uZ6QFdbx742PkGC1aEd86jRFAEmVKGQrPcswqb4Nx29u",
  "key38": "qaxBDqdNaPSonJbVgG6BWvRVU4LSWnhtc7wffzYHiiFcoHdvR6h5YFwDzE7fmiNws4TEEPSKvJXtagNBGGFL6T9",
  "key39": "2XyGrJPD1p7r9PT2pZtnb8Hot3eTa5rnxq4Q59zHCErah7YESBGZ2GTtybwcXGwWkthLhXiiaoZBWzZwrxZt2dpo",
  "key40": "3kWA485GQFXb4F6o9ngAa4j3uUCoBsZejePBFYbwvpskJudYn8jrYWd7seWMbMnf3J2jnKa3rYCJ4edgqkzs8bsS",
  "key41": "3ZmGFGXkxy5gWKZV5rM11CAwpypTsgbCDvJHh6ze77yNATfn44zUfmLjZWKh2mnLpfpmaCEiqmfhyg2y6y38EJBa",
  "key42": "figTvxnjJmfxK19fXMhHBR8tANFGxSnSsikSPzXbutXnXJMamHkaMMFcQQ3pFXDSZixGQuTrQRyE3mMs1ugTdMW",
  "key43": "4BpZjEkUK42tQ9y8X5SJLDwSx4hbD7UitrrXxkf5yu936G63FTXbAm9eLsdt3nnJ85AE6Ctr2Upwz9sncahir477",
  "key44": "H1fgar23g1YvJgipQvd3GkNv7qdzSo58GabC7iNM5773hwtFPZjPSoFbzhd5F6goSCnhEbKSio4wqxjJhyjzuG7",
  "key45": "3ocdHZ4ULZaiELRDzcjTexkf2HMTsUs5BG2g3qnvvCUhYBugcZARkAsWzN9synqkVkEDTTNKNpNCXhMM4rJyGz5r",
  "key46": "4wVYHrLB9JLEMFh9EiGm5FauvzKWfmvZ1mp2Trf8RmTwJWsZiqvFNvzh7S8E6J8eBeGzQ4n6A24eAWSnUTukxS2D",
  "key47": "MUPrzwQuoeZNxLNkGYDVLEmCSvhXFQFJjLqsXyvkg9cYU1pFreLCT37YXUWCXHZzbA9SSTTuVqq39aqBriLr7tX",
  "key48": "aYXFBxcPs54zLVqy4mtWGLuSw4UiYa4irLhQEXEgpKNCacVtHS5KfTAgtpPhR8cvUmG3unwBsKkjy3QztWa6g2C"
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
