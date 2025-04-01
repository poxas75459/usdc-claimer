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
    "29TKzPzjG37w7Ymfe521Y5B5o6LmZ9Tez1igBULcT6dCZWnyTucteFJ5KeYHiZmMMpRtsPUThGbKMC5uEiMaXkHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vq3WULPGe8z4khoanvWdimhk9oADVL8YnFRr8sX4FV23JJRNwc8B76juFE3qeoxG2ernFLRzs8UL2BNzcXuZVPt",
  "key1": "rZ98sGeAok3rDR9rsh4Au7NPrkaKoKgzmRBFHZw2c17yktXFEF5xCJCYL1yfKPPiZKjXQv5VxUayUv4zKskC9b7",
  "key2": "Vh5rBWcRSPaEiztFfMozNCqZ9hY376HL5fNoKKxzBRzr73MnNV13h2aH7ERyFSMnsEAAtTdWhNr7ieQvp23HuaZ",
  "key3": "3PCTQgWrWxn48svqjmnLpx1Q5vpL6a4c827AboC3And3G9ak8qNnFdKtwjhRqdK2i7EVPwbHYrPdCv6fXEf2q58o",
  "key4": "4P341eXQnJ4mXJBcrRxVnjZfUUSFsCBSjr7EcXCB8AXwYPLz96uQFmafRBu9qkWQWe4kjhk1R4Xm5PRubeKr9ZTp",
  "key5": "S4ov4F3Q2V93W5ma3iS5FTo9hFwguxpNYHVdfrTucaQGANUe1o4EQY3RzKE3cgwKkxJreSzTyjaNUaJsRqaJGjU",
  "key6": "4tKw1YC35LXxstLGVA9NPfpP56eyB9RsKQr5D75kmBn7kiTyy9Ep5VTkLzPm4anjsdHCKZcKQAG2aNC2KTQqkKhc",
  "key7": "ZUz7Jr1FTxhKkGq7S82dPiJ849adiTXcVHkQze39B1enm6npsFjjP66AQPVR2uummLmWqShrVYrkUwGM1Z9ckww",
  "key8": "3G7rZqVL3MrJUjND5GySAE1LEd3NCDogm8NLh3g3t8ePEorwgn9xTnUMA41EfwwfHBkhHXwBwM57mh15VmbkLCWh",
  "key9": "5e12y9KrNxbDMgEFgcwFTAQByQqvuWMcyxHdM758DqELBG5dUCFsJrb73tvcaFVbq14iRwR9ancgL1zq1afCKFZh",
  "key10": "62FvsjFwiuhj4vE7Y7hTqruoww8NM49YW2br6yRyzuzY4FuqPrrmC9syttuGSG175cuY1S6zSnViqLs1DSwN37zv",
  "key11": "49Q1SBefYiY6rKn1megRK7tCofCoQAUaZsMygMjLAvSi9bmWNHCJU4piV8uYVVNakUYNqmxnRh2C8ph5haqREh56",
  "key12": "SAmj3Hj56CLvkfZTMWbCfmqgKUYioPTBTW9nxjb5gwZCMGa57tbeT8CHxa3VD3vqrsJX6XtDoVMAQvKopWJkjxy",
  "key13": "4gAMYsSwQAYpa2cTngGjqWLwMBjBK69N5Khee3e8fzxaiyWspjYoTxpwq38rcoT6Yor8FZoEYWy3kKmmqyUSgDsT",
  "key14": "4vaVFeHLLVWbZvLcVWm8fnVDPdyM85S9rn4TCjrBQQ1T6inGH3KFwhRH84gGwwFjb7jjSPWeykx7h6uRfJubK46P",
  "key15": "3iAT3Xuxd5WLQaah7mrQKNcWu6jkTgvsACmZYK9wZAsKRX893pGqivJmp3QLXz6Hxacg3fDzgg8hnwRQuJG7xcFs",
  "key16": "3kDWYYM9TA5wsSeCiScd2TcEUSLfFmv3ET9Rd7GS1fFBTCS8aNUBd79ZkLpZB6CFAjyGEWDBLJXm6gfAHXFXPh5x",
  "key17": "4WRu6hZNbchiSvH6LHdf9zXp2bBGev7sZbZKwqsVv24AGTzfmW5T1y8cRbahwvkDQ1vs1Pd291cteNKEUP6QbDtN",
  "key18": "3JiwPqYyjz98ndEdvngyXtL3hWK2J5QaRoCPmaDeznZRjvKG9MwiPeyF9exeHASwtWTfLCAFMwk3zPAonuepm7j9",
  "key19": "XKMT9HAue8LQv1CYwjdxtGr3QE1X96WYwte6NxnqYLW7T24nN4asrsFbkTfHrzvfUotZ1RGCVgpCRctJiRJWcTf",
  "key20": "4CtD3GCNfhJjbKFR6Sh2sGM1NuJst6fMakTuDo4jPpHR4YBXSseUJxszChg2bZZP4oMiBruEaz6CfLKGgFamYycF",
  "key21": "s3aHsW8vkKZWTKnDwXK8T8unxrbC34k2JMjZEhrHCU6kP3EPVjFXtxicAgAAvoZVgRiynY3uKxGt683qknxVNh1",
  "key22": "4z86hihSWXA3CHVidvi51N38T7ZLsP2pnCnVY3WCrc6VEhQfszu4bzsc9vcBEoD1MqabCpih8saL3YREbRtV7fi2",
  "key23": "eD64shDXmS7ijmUs2UdCHPyL9vdv7oD3gQDJJpvpBRj8UzpEqZN7WS3Ate9LELXqGHMor6ynBUqWcYG9c1SyHPr",
  "key24": "4NWyXhP7zcptqpfWoyaPLYxCH269xhQz6quj1etU8V36G1KHyf4PtzPpHurQDUsHedLnG9BNRTB123CK4BQCLcsf",
  "key25": "4gAphmhuS3crC9pwqMJcyfroR17h9bSvu8yXfGY1HGA8bpoRzRv4qqgzvKxkV2toU9wWUynHnbmg3G25k2PVakVq",
  "key26": "dwNtCLTxbhfrU665q75DozLATe62jbVQHF9yTY5XVHAPW5APf6fxqydf2DVuqVZvicF9G8kwyit9Kk78QrxeGZX",
  "key27": "5EEcTqJySpB9bE9vgUs6h9AUP6GGQgHhXa9fmkJTEzorZ125KZXkGm1SJEVKBmLQr9J58VKjwqzi4mxh6Yf7by6b",
  "key28": "4LccjB3ayX4T6fkyNgx7XUZxs7mmRJDGy6LathdEcKjZEi5gH858RUjyDXVA3FNbhfWuUmsJWSrgYFK9yqf8AABR",
  "key29": "4JKqLGQ14gR4XXmiPxUCoHCSPJQMJcDHR639EEK1UYtWXFSDvWxMDU5W6fXzDd4eJzZpDPd1DTiRaGuAUbptra6U",
  "key30": "5cGimVh5Ch8CUWfrjpVPLGLNvhzEtzjjkmMj7DvgPFjgYcxqqhogkuMv7NbxNmuhRPR3Qear7hWavQGjBTQovp2f",
  "key31": "FeMrwXAvGK52xBczd8gH7i9Z1J7Ykt5qvrRXZXWLKaBGtAPgauhBqBM6DyTPvcpm8JBbeT4UieMgqMD1ZTXFH4t",
  "key32": "4s4Td9s9k5esJ22ifmHMkxQC8NiMPzsPuroccnC4R8hv5b5fN7FvCWyBP5medVytQoY9Zd2DEZYgZjAWmmKbDGoD",
  "key33": "5zsqxvtSBVp9F7tH3G35iR2Uf6zXpCGNzMWKuNfUWfGNQMgfzqMrXqx6Z3ovMWFsHtPQUBzKHjGhqQj8fZuVDWoB",
  "key34": "4Dt6DUmg6RJteP8rZydHfKS6hhoXkAcBE4vtpiE6e1foLYEEnVXTfoSjfz2y2CemYWV9JxQWnz5xrXeVma4Lyv4X",
  "key35": "3gQWUTrgdp2z2yqynbTBNCo4Vb6C1tPzPpw37vMdhDTdqm4qg9Sak1MaeKK1mfrGHEcZxu4XbPji6hkSJ3JRcghR",
  "key36": "Sz65oSjYZZFshP3LWfzEW2xJr3nBVDXfJnHGr2NsyocjuPVBpwVjmWY5wQvv89NB4hqDHzPcGEu4iTJaBJrFtnC",
  "key37": "DFjTk37xSABWQv3JJpeeTPXrC3pTUemcudr756kULxGi9aEFooPosrLAAw2zp46QkdYWdofgAELh2JFsZ4dXxLU",
  "key38": "4jhpnuxaLVRdEJ976E8kJtQWcHVnifMaDfkLUWrEptERzjSKyBJg4SaBmWSwonf7smPk8WDyWyVTQ8GgcJg77jig",
  "key39": "oeoUgy9HgeF2o8YTDhnH6pbXmTPoi5dAmR8HX3bUXPR19TsV52gwZKek4MkFbfJX41Mun5MuPR7mynSHTYVaEpG",
  "key40": "4Hs4pEB2ebqWEbeMLTr5ebSXhdAqJCE6Ui2g9rGNKtEPe7dtjp5soukRRBLMMTE7hB98YGdzCbpBWPuj5sayhytn",
  "key41": "2K1aVACb3bUR42n88Bn1nFYCS7Abfa6Yjt5BjaeLLvHBJJqhKSbPxLEx5HfXPhqiQCBNF1smT9W4CPrqipJpDKWj",
  "key42": "PpuAThPCrSpRMgVkvVtDHu7oCMpKjmdG1N8k8Usc3BCCfju4sBxzCocLJSW7xm2Y5GNqtG5dSTNZn2sa5jmFS1Z",
  "key43": "2igjjUtqiD5g2w3ZcJDvsotXDP89XVppAjM5BJzwpLDyRtNHKr7186HUZ1Ho2AfBwQtj7aDg2fVNT4qu1y3KJmaS",
  "key44": "3peRUFS4j38KZVnRUjR1AG13UN8VRwxME2LFvygsskRWNdfsnkahXsJjaaGV7FdFee7o8HhBBgA3iWZHREmmdgAT",
  "key45": "5fhnyHfbZrySt54BJJNqBPq2g6uFxfxGAVV4ecvEkXdeRD5jhDT6kbeBtj5UASfZuv22D8Ax4T4EfyKYF1jjEtJN",
  "key46": "ogHTzrwYijCupZPkbpFVmV9UgLCJy6hup5nPaJV3B6AkPi6u5R2stasJG7ZQimMWqewGg8cuNWKW4pr4kw27XLV",
  "key47": "4hzZLc3fH4pnmvyawVJ6szVwPtYcoDf8hveH3XS7CWzcQmqEZKDKayBwTpZnWAD2KYPzi9kXZxUr1m7XRi9Wi9XU",
  "key48": "4gjNakcLVSTUEt7oJ9FHFNP9Ev1YrSDm5XieRTB7M2rkY1dTbPydkSqUuJPJaab6hbW4frkVzw9u4KUEZ4dc7LPS"
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
