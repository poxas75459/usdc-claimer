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
    "5B2DjG6a92YdRfSMpece8TUSdgQ5HVFegqzbszisfNbLGBrTb1HnZWtPzZi3D1N7daEi4aS9YcHWu12RmHB7K7vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pc1A6g6YLVyYGUdCQrzVJWeRFzKuhj5E5Dn5rzE6P8RTfQ6JwbStgqszcXpM1JJmoosK5iqcJschxeMefYfCFYz",
  "key1": "5NAFzChG3LbYJyGRSjo6mrf9Csv6dsKNMsjTiz846H6xMU6gZgNDcZPKRxxZicdjCDRz2dcxWYUWqHCRdgXec45i",
  "key2": "5yqxG7yunYiSHmmy18NJr6Fxb1najNRLt9xa1rfL4iFDCQAkJDCAxuJb2gkvaYLfBQuTGaa945ZswCPNryyUKtfz",
  "key3": "5JcaSSyJcLBxUwtPXe2oBiEYT5NWLRMo14FTNS9hgRanbRuKogMMEbc9731NuaiT1Hguz91zv1rP7PbK1VJJzauk",
  "key4": "pxJVPZa7xhah6kT1ZiCichGzzGuWp7oE8L5trFGMWjitr8z5CpEmkgi9riP4gHWJcb4DrEyfsLTHrWbwGwFBPk9",
  "key5": "4FFzTcmpm5gbH96oBdKi4BXW3tSy5K25BtHt44B3tfQp2SagY89wRGxPYeAtRSrvn5H4PosEyrwjhDDFZ39dp1AV",
  "key6": "3PCY8KhZB6zTHDriVPaNNwp36zPdiMNF7B2fEEXuMG9uAxr4AzirhBjPoByKhyfaqkZcB4dFzGciGewJmNnRt9mH",
  "key7": "4AqyfgPKaBVwEvQg7CA5aFtaWbhUtbDLEawSCHRbsQChF3UEFhcuDQhi8NGz3P2psixHcAM2dpAwHw4fRPDG7BrL",
  "key8": "3mzB796jJNNk9QeuRmKMvBuCWqPs9yjBdgwxa1TW8Ry4H1vjYNWY2aXbMrmhyGgojneWZToox7ETmbj2hB8JBzri",
  "key9": "F5o7WUmWMVXXjoYQKjauRbycAWjHxKGWXuCF24Mspajc77xTazAtNxq9XVvArnbViRLtAsNxnPokgoMbvLvBHjw",
  "key10": "PRTMUyaZp1j882uhdg4YgeQS2sKXzHLUhdjNj2ya6p8p8r1CWk3j6RV93dhNLqjEtGJFHRSQ4AE8gBcrTVc67iK",
  "key11": "2mBEd6qUvRzFVWPNuFnYXPdv9LkuRcG2rSTBzoaJL95YfixJ3mWFkQYbT1AD3m8ss2U9tYCCXecwz4esL3HZaz3f",
  "key12": "4nmU1i8zxS6wBp7ureFPzsRXAEaHFBRsJfJ3V16dagih85899KBxRyxcUyFtKL8fvJMyund9CRFNA9QjAS1TBCgT",
  "key13": "5kMHgmamLKVevy5sbUUhXopKudMNpi47LL8uRLaWVc1H8A1jGjg77mmxdpPoiHw1htmmJMdtxw5M41NZeW9YiK6U",
  "key14": "58hxCCQwi7X3FNDTPd4PpyRA2QcxggoP2nym4y2da4SanB4KskGuabomZxy67VLo2gRvYe9CFfLZ7SMi1JSfPqmU",
  "key15": "2RrRFdXMxHBquf5Q56nT3qM2gV3wBQThNfkZE1rcasfJjsmrtRGHncy7MGTsjHejyYQueeXYqbWzSpYN81M6pPWL",
  "key16": "56RWK8rzeNQfEoWrKQZ7KbY9cBEE5C1pVcjMrHHAj72Jsjgb8bbBR8CE9P8XBPDnowC35rz2ESncgbdWmCH5ecdw",
  "key17": "4fHhGBkxEQgrtgEDNaXfWPwV1NEvp8nKuayGHg36tmqAEcdT687VBFWM9TxvbNJXpG6yFZgRN9i4b8nUG6jP17R9",
  "key18": "DpowxnMemrGXREHv3c7shVPNxnFFTa1wSUamvhgNfMwxzRPRq7Co8pNN5Awtf1RQL5ECFa1ZHRNUVHHrrkoErRr",
  "key19": "21RgXRkosRPJNUfwjezfdtSSwoFXmrz7UgLYfeKhfzRGnFvPnSaa8p5Abg9TR9uiAkVjf71FeKswWBay7bkrwjC2",
  "key20": "3paNFvvoB9d41SnHMTcB3XZSyJW6Auo4Kr3iB42sfxgFCLDTyPVL5ZDvT5mdG76wpPwzXjmJ4GS5i8e197LQu9mb",
  "key21": "326EXMhhv357KCf9UpyRGtGrzRU7qiTYorU8sa4Cf8gCBtoKcSiU9nJN2ssHv1Q8dGwF7FkvzNT6Aa3NFhTtZVjB",
  "key22": "5bpajkePupJGi7ucAttanNJ5A6MvdgnuVjbRwzPFtK3SAv3oC1ZA5CYE7xsxB7vhBDLUiRriFYA9WYUNGNUESonH",
  "key23": "qGZPaEfNQ7huqDgM3mYHZGf4K7ucvUbcQfkKTChdstAuALCzWdzR1jpqPp5ej2ktqrm2nKZcPcS5GNuFeT2C9uf",
  "key24": "UREVVxum6QjRQkX7MxhPbmYEQmje4NDZPPdui9QDjv57swcc8PLfnevjcX92uoNuY9agCe2CzzwuRvaMk9UrjJ5",
  "key25": "4A6qw3RbWA4UyFXhSmesLRaGWr72yCtHN2L9BPHcRMcAYbZJ7qcHHpdfsdrvjoF55YFWWSh3hnFBbCVpK7guJ3NB",
  "key26": "7w5PyU7rtyvQ8XioubLYsRW6jyEuxmDM6MLcNB1EwnRkb6UCTMz7xiNTe3GRieHwkd9TYVtpas7pXokTarpiwDQ",
  "key27": "48yRmxtbwkEjUhHnZFsjR7sJQsJHEWSuk2pU8z6o5stMC1hLXXS7b8SL1rzgxCuvHXGs7pG8Bqr4MWQX9joHM1Vd",
  "key28": "2poY3H2opuLxrV3ajUsN6Q897h3NLSRzCJKzEhP5VBAKPPE9p5rQXY2GGz9UDteAXXPoJKu3rEw984QETywkRyty",
  "key29": "2FurBWWrgRnVUejpCnwWxRxrqXBTAFJLKai82F7HgckEYTSdYfWqVStB3pudfvfsA4uLearLGsGJy1Jc74uroBqB",
  "key30": "2CfnS2sq42ojhUSfD2FjfaBvNRFBdvyP7x5CAdYt4jFp3YCNFV6yvSiL2CQ6hrEnd338jEiXgewskrUhzE5726b9",
  "key31": "5VLJ5PMXJVmk8hH6z6W2FgqECSvxGHgEQdpWyVXuJ4HHaVB7faZxtUmJw9iM8UHQpEJUz38bKgpDMDwk1NDzT9at",
  "key32": "4LPndydAFb2fdCwAovdAghRikA8v6MzEPSKSjs75daUqC1e99ug5i69Fqyov9yZdPnWN5wk6NdYVP1fibAmN2udd",
  "key33": "369CWmkf7zG6a75DvuNYygbyGthxsce9E8VyeZ8LKmCxus8CXjmfunv112M1hFMx2NsxgPJcsuo8KEEcPuWMUvTW",
  "key34": "2Amna3hxRs7cjin8LrNcQBZEvdEpRAHrNftewEjkwEpP3jSnFtqyc7mUNNcBsPjUJfp7uBUmmEVSuEPxdSgjK8jK",
  "key35": "3GqZj31hZcLonopj5TsU3uDdmrBCpsN7J75cRnhqh8GRL39UrH2X2oMWFgHP2ifCr7Z9p5iSpdHsDy3b2hxe7tcN",
  "key36": "5T15Gx4CWu97DiHj6i7tRTu2E9qdQ1tHKLb1CvchzQZ7hR2Hh17a6VAyE9mSZfG6MucDf2Ykcinkw9cYUiNS2j13",
  "key37": "2kXutrPfTtwRuWM3h8twRVGgVLp2Ek7cxzECkDj1C6fPq4PAp2pGvfcNKb7kgbYHoNDHkKsQ9vT5trTRuQTSivaM",
  "key38": "5Sr4nZsiBriALm8ZbrEmoPtrmGWDCpasdqWpXAB6mUyBiTotr2EgKtNifQTRKUrvBDzwHFG857A58Z1vWRd2jeTy",
  "key39": "n4sMiWiKXV9EXTaGiMxFGxQJgKqgH6dbTnfeFikkCpJeGjjBno6Ym3SUpESkynsrGPN1qrZmwoMQy2U1wGzpSPE",
  "key40": "3LRB6K12QpN4zRkKgQW3GmZpmCn4n25e9ER3L87EB6AsVgVeHL3KFW56GfNqLc3zinZK8ZZiNYgVTnUnaDxDcnnW"
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
