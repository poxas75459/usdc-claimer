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
    "4r12LiqwQXfKhQjLFeB39rZxtrK6AbjW18FoeVdi6VwAHU78cazGhQwmYaXAmPJzZ6jQZM81rmD9gzLYvP8NbMeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vGrPLDkNMDRFgTXegKhv6Rmg9vGCJ4VRjGzQpH5qG9XP53DiX9eT3vzEBkvtygJiifYH19Lb5A44eJWFLX4dDB",
  "key1": "59iYHFVrw5SsfhqH8oGvUNLbsg8CjmjpaB1ERbgHgBBmjYUNAPuUYxvzN4cW8C8L5LYVRNqQSDVMiQDd6PMsJXgC",
  "key2": "o89D6mMyEVNjPo1MHzyDuqtUgRekjXZkMeXNqPvm8UUo8mHq7vgPkyQzBrD5xF9QtPfuFt3zsZd9jDkCzZi35Ns",
  "key3": "EKqoyQxSLk8LavuK7m4xrQAa3ddWdzfCeoKNJbtdvimt6ApnAbECoHXZHDqwsmSfvSLBJZtdHY1KS2FGmmRS8XW",
  "key4": "3tf65TLcA6PkZFGBBqxy5ww9a9a5k5auGSjPVbVFqPSXjf8DyTDZtnNxWBrm5Zg3NBzbzmr6dFWPhf1RPLkLHsPY",
  "key5": "5yyuz4eDqm4vKajwF5MVQjTpteQs1JoViPCJ677sg53chwrJS9HdiTf1VwB2GCGQrUQrA5XUUPgFipJw8jH2SNNJ",
  "key6": "2UukivUqLd4AxtbW14VjCHfDhUWVMM7L4iDZPN1jdGUmyfqeenwaaP7dJF6nBgRbiokjkLETEuFeHURompptfWkZ",
  "key7": "2wth28un52Akg1WrYVcQCY1Qt74nYh3nW9gRSpv9BcdpzXdia9zLJwwhV2VQt45nnKZythLbizoDRYcsu7RLRwPH",
  "key8": "nocxyZLa5Cd4Z9zaGUjXTnAaFXhrvH8TRKGE4XdX3NDkNZPLK5ZwNNhYrjSm5ovq1wPMe6AMZWZ8p4WhLvztNeS",
  "key9": "31Kokv4Mk24YxkVk5QQq1uPXXu3hT1kbdiAhcVkg7HbT1AfmeDmXDxXeSvWjSgQcuhkxDV6xGBSH743wsvrPcG7K",
  "key10": "2AceTfCMmX1BTtmecadnnKn9v2WpJax6gEn2QDxZAodjAPxPfbv4wcBoLD3B7s8CPuGPjwVA2QxVBKgJ46DxL1LZ",
  "key11": "5hHYm3f2QvGxCtj956DpBxt3L1ahYfATBLvcmRi8CcBSB5iSR24M55KParhUaWeA5R7bCrt3vDSY5gbRTFCmcQwe",
  "key12": "5A3L7x9gb2ToEyR7WcXF6UCuZ7UrEMYpKRnAAB9ivcWfsNiqysuXeFxmBswfZVBPoMgdQq7zSUoaNadMiU68STB3",
  "key13": "3XpaDQZa6meKGVEoEvT6ss7aFVdyf2A9rcRewGbdinPfVQwEeQaUvDnxfSJhQohQBxoMNdQD65UopP7Akdd1srjJ",
  "key14": "4n5R28P8Rgie3CwnRsF5o4eo17UsQoBvTzwpmkUGH9oQHp76pbw7RSGMQU9wFW6rnAaHivoB2xQWrFeZwKG4XmWU",
  "key15": "3tsmuPs2vRnuPWhW1xKaFUoXYs2G5qB3QBPBHiyKPQZjoV4y6VTLbRv2EMzipoCiwvHivxRdw3B1R5cKuYV1wHxF",
  "key16": "3hGrTE79YA9XyjDxGbk3WPVSptLKwjLAjkW4B5jbf1VBC64YFgoGNfCAEGSxrhUoAZQjQhzdsc9HECB9m938ZzFz",
  "key17": "5iP9CxPdk7HHJeFLAWYiffS4aaf5KofWD1ti8r4xkyNJJVT5Pi6KHinSyW7LvyGpNEFqTxVFNT1PWJP5n8mfBoVM",
  "key18": "3QRSgnfvxo5euSEjoiAiDSw2xxDSwQQHkBgMCHsfh1nQm9r29fWke35JdY1mhnnsyPFoM6akdi2iUbzafx4UiQmd",
  "key19": "2g1ug54KvHDVuqvehE4VszCvwGpYKpgViFmNc5XLp1YAAsH9sfbXbhP8CiDmrtV2CyzndvCcP8VFeGLZvyMe8jNG",
  "key20": "2FiGYxfR616i8hbAxC1yQxtEUZsBSWQUg6xu9bwXL6bNRU7NkrpvfLEAk6hnutMsSV3jycX67ftK12of9Dk4bmgB",
  "key21": "2gXtoNDWQWsAKQYMgWRddFcRhgxXb9KXnaBMF3n71Ktb1HgJH5A7tvoi1xQZEuPByMJLTntFSyNGTazt9ENyucYf",
  "key22": "4HjtChwoa2ucrseLQTuocFM5YN6GXKmezuVT7JHb47mAEhYV4dG9tXPXu44Tf364WqVLghXbPGRvFzK7sgufWKzQ",
  "key23": "3uQgwvfGLo9ZxuWXxbuf7P3PvKS7wnszetCXCVDUsKy95qSjG48uvo1vxpGr3MC9xQRpeaQBNMSKTAywpD3PBu23",
  "key24": "fx3xWMXdsVLnJokT1sZEEdbupTy3vpT32VGYibGFCzVR1ioGRLxizP7UEmhqUN7CihWktnW3sMhziiuVLs3L7Kx",
  "key25": "3fJA378jDDXRRyMPRg7DQZhQXNBxTePp2veTMTWXn8KohwJHea4tMp19aXZojDd9khCbM4SYpTrniVu37ptTkSHx",
  "key26": "3pTeKFbuzkhw1TNKqu4ZiRZh3m4cHTcEgS4pnixcdqoTN2ukHPwPLrCnPZRgDjfUUpnqz22QNV69czNKP8Xs5T51",
  "key27": "5hs5EmVtzD1aCUjxdkAq5ftsAckWdtSeGBkpHpFZgAVsetgXuzbxyGmKxghoV6GcY8hMBFzDsaMcyzVfSJEieur6",
  "key28": "3YEZeTGqF2hBW5cAW2TPH1b8VWKtUdi8b4MYZXdsP18NiTwKsAcZsagLHjqY6NpDbGz3RsPh3iurGmCK6nhDHgoQ",
  "key29": "2wkZX3f8LTbLTp1aM5Q5eMWRHAedLDA5kWNegEswhss8FhFA53LtoKRfLtuzpga9WkfsR7BhP4sbmE1T7HCvbvsQ",
  "key30": "JXPqLArcgre4uHP5hLRyUm7avpyhvkHzPNqsxiZKVShskDSH2q442YnkdwnLEsyNpGrZLjvdDnqyU5LuLaw6oZH",
  "key31": "5WGriFAaSP8zpd8wHFm5R9AzRV2SNyg7SYB6RsoCTXrKVA8WW9wcfAuhoWE7kcZzCZwDWFfv99LyvNq3XBt42YBp",
  "key32": "ZWMPyFSqjmWjArDhdJzXRKF8GyjvfSH6jvpHvM5PeXUroRCA7zHSPbSynpmfKooi2K3sDpN5S3WBiHciYfM3zjZ",
  "key33": "5fNcpRuoorTR39Cpbmon4FN6ZoaDafBmiShVKNnarxjjkPdxcSYLjaHVN2awt8baqTH26uk1NSTQF4hdaeEtafjF",
  "key34": "2NiEpUkFeujgFwc9aWKFUbx7kdL51mQBS4KpKGenKjD7Geej2kic8Nc2yKSGCfxvbZ4RfpkKqvcGamsz5y7qVtQd",
  "key35": "5yXcb97dJ3KjXQFLjHsNZNUYgDM5Ho8r9L3AfZCRe9YoKCbqiZStRVQM6p1RFobh2cLXvwHN6LCTQzHwbhcaKCAH",
  "key36": "31QEmsyQypRCB4NQFj8wS1FxzMALsmbBu6KbBmf5h5zdQhdaMdESpu4zM3GpsmR7FoNa1vZN5tcFFG2UtHvK4DoP",
  "key37": "VjPzVFW1zKTwegzfaD4bZKxkKJy4bivMTyU594HxSWRyxZ9Dw4gALkTH27zFTiwVH7BLMkYpvzA6MVU2DmRRCAp",
  "key38": "MYsD6XQ54c9nkHojUyJABfR2LsTQkJ6v2MpwxjkjMWnk3tBKMdev1AV58amoWnqYY46Zrm8TCK7eni65rcfSUaT",
  "key39": "naMnZWELjgEVoibyeS8TeBmfAm7qnWzSYbVoUHeBSNkUdLaih3PYCgaJzR5ZCxX1EwiD4CdLfxK8NvU4LoXGNAd",
  "key40": "3QZKzf6g2FpNS9TFeiFDAiddSv8fTsyZTuPYUZoDo4DMFixAqgNarkwJRrhaYjSsodquqirmfTGacGRPs19MRoUQ",
  "key41": "3P52EiYrQV8XFtvbBQj3dg8rLwjQ6HX34QbjtZM7Q9RubJmgnj6qUsE18GxxfzQkALpp2ideEUroK8rA7gwv8XMb",
  "key42": "QTdvo4He3g2Eopkm1bp6WdX6JrQg8zGMh3p5KSwqYgue7Ua2z2jzpigSTW9r88cvUJBUHYPHfYVtvAJAjFbdDL2",
  "key43": "4t7hA6CNfyUwhEENoiTQbuZPu9qGvsM4KMRLgtvPKFvhfVptXdV5BP2AkZUiD1ZpN1KUdD7UmMK8fRrVzA7JQU2S",
  "key44": "5er4KyrnXdc1SgR4D7Q5D3tymZeBcm9wG7BqjbSNhHSThuMhCtRq9Y6e5dbiytCnUgNFWDGmKqJ8CTy1g4J6T3Qq",
  "key45": "3oqK4jGCGzKrjJMVSNVTMH9jzrR8vjvvjG6SpvK1zLPWJpC3B2KzQeuLmC9CcCFuifMbFu1J3a1RZbeJoQopsXcj",
  "key46": "2AkZ3p9R4hDYKZFHr7uj5Vq8uX31N4fB5J6U4hpterxjXTS19wxfM8gdfukNa3D57NkLDipMFd22PmJWbjaazWVU",
  "key47": "2rGoW2bWfx9gh59x3nrgh11HwaXyUDrWFkvAQNHtHLrz4cUbvCxgyqWxHYWcunrTDRu21L5A9JQ1fya4B1YCJGDn",
  "key48": "5kW3wr5nMKGP4XGk8szFX4rF4YrruXN6NRXMeRjnafXgf7UZqngqZcHC6nFNzTvXPqqG1JahbQEMcnN4SHUkBQvf",
  "key49": "2tfapS4Ax2WE33tSKq7NveMhaEB9WrBfp6kpHZxX5TXxC2LeJMEWcuaGaUZZvEnDawAskBsXzB9kkjDz3VUwYKpi"
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
