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
    "5y31tEFxFBPyrhP6QgXBkdZYkB8HqVhjnSRz2YjkHQVcLMpdrq1aJ1tzGEkFJ3vHgpmTyDWJzWN75TzKgZycevEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25j96MyfztQGCTQeSNJEDyb9B6NAdiVzyHCdJxRR5h1aoEft7arDt6gHGqAe76E9vLUjavSy6Aaoo3PCnjvjdF7a",
  "key1": "5RvL2td8zNY1pEudYMfi5NUAWD9xgW3UjxnEcnn7heuh3b7baur834W9RT6Er43viApj1M7RLAh1C3SMaTsAd6qM",
  "key2": "2LnD3xCmaxra3ekPwuWDJgiuiALF4b4qBo9ZQpHsx6wfcpRe4aiogYeNzo5jzmBnjePCQchwGiwW6BeVc4Mk2MfW",
  "key3": "2tf8qHfeV1JCx6ngqEQV8LK9ppbshVJPkCr365mvWJ3Lo6nu6sUfNpBRq4fyiaWL1vVuxxy2jM4CpZFu46tzc5N8",
  "key4": "2QviLGds2NB9WGsG5oUhZ3R5skmPgv3QDGusaGBV9CerHTjfN19fYQc8P9VJEFcwao46SZKfqCaCaP7AruhVRxwP",
  "key5": "3kK7NV2StuCgsFtM4My6fmMntcqSrauXkAkDkEwkhrgCBU4yo3cALY4iCtF5TkekLXezfBxCnWrVVocRCgc6oAbp",
  "key6": "5JT1uwLFFF5KZaoWgx9ZJbTSpBAzu7Jtfe2XFRSqoyLquZXAs23wD7maXwUgyN4YdTt9KcR7JrkRMiC5EDgQU2WM",
  "key7": "4NKSbWJxNAQm7RSYBxrUUkKEqfyTBitbBxopahpxYgP9YQStPgEBt3qJKkfC1LyH5uqWYJn2nUmXsYzrZU5H8Rhz",
  "key8": "exNxevgWMBftA6xLMDZCXJiXhDAjSPHrFakxVSa93ZeGnrP5PjDJYMZsTvqBMeN2Gqbg13wjo95TMq1D3L8kEDf",
  "key9": "4bAmCbH4HQP6F2tootRx24S9DfBSMZMaurC74P5n1bMf8F63cNa1mcSQChYNRXkXcmuEQqXQa2trjggQmyTwFv5f",
  "key10": "4PcRMAjJpAq9HxhhXujWtNJ9f4xeWL4aEUgzSyChY6REbzfZ7hduGJLkXHk2K6FexL1USRmg1uaSjDajxLkiKZFR",
  "key11": "5ds41pkpLTMoizMVZneYRrwCeGZbj8UnNpRdVqGBkM83FspBAN4jPQmExR9pGBYABa3RbyjkTBgmxjxSvSDjqL2N",
  "key12": "3xeG5TCs3azY2q1sfpqFyMY6Yqfy4VRAn3wuwxCioHS5kxh2syyuFU1A89Pu8Z4DbXd1NuoNPV4DGtcHV6kYSJzM",
  "key13": "4JTb2PvwciTwZ3wVC1fbJ5Xujw3zCGsbY4XqEAxepyQLVPzb4UN2wsp1seHD2TJAGUNxM2Q2HLJeTf5eCpapX7BV",
  "key14": "2WMerdGy3K7y6zqjgjknfSL77DBiHG8ySadk47cAHNjaeKWi3cLVkqJ6QJpcwim1e3gMJAVsh48FTytpXQ73QA2M",
  "key15": "4Q1Bugt84zQE8zoubcHqqsbHS32nrZ8cv9D6nLPWVGAKef5nTUKkLfRgan8eyZJrTKuz779oreo3aUXwGiRc7EXd",
  "key16": "5juUDKJTJDoqmRWu9DrELKoJnSac1wrhMxTnmqkh276dXjRRce6yuLmA1yH5egm58GeyB5W8MVQt24vpFmL2c6B5",
  "key17": "3WBftSAeAHP5vV1QFrKBRx8Fc6BUPpqskeeULWtVoxEqnwtDmmVRq1JMAheTGveUEnFuZh1aeUAL5ENQUyGLPKpQ",
  "key18": "4Y7afeq2VwidtLadPwSdMZ5H9vMWDCU9f6LcrAgpjsBoTLSdN5LdhwyE42H5J794fdcyBaYYKW6435HghFmC7VmZ",
  "key19": "235ZZCMCfZtH72yvivZ63isFoyDPXbMXPcBth11VS5KWJfke8ufSKBpHrFL3UXqL1Ve5f3SRfQXXKeyRjbcHjpEx",
  "key20": "4CtNn6vNr3iWRhDUjHuDyP3nNKTmom36yy5dZcip2BqPrsHrCKWHpmfj28nmWr5DLekwEP3NU32ijgdukNN6AkYv",
  "key21": "qQXwJUjV8BTggnPmfKcF2eQZ1viaiLC287Hx7cWfFtppvsX86UgBXU2k2oktu3H62Fvhc3Bqjgi4nLGKiZP1rfB",
  "key22": "464b5QAPsrs54eEEptYRJYgxnopBzzz8YjhmQZD4ra7KVQMisc1uHLsdZ2Ro1CQMtHBHLr6TJdEC45v542BKJaDk",
  "key23": "5HFgCkT3rDY18TkRkcM8oSe7pwJU5d4WCQ99urPJY4rJQkBnL8pChzcfXmC86MYiixcixYDQWzxVH1A6xUe1RhT4",
  "key24": "3mmYCLN6mwxHEpwT5Lq5MpGiFiuP4QFEzcKmUfm9CMJw6o83mNwuEvGxpfjcvryFvdFssPArjb98eFeQeo8N1zXS",
  "key25": "3e2mZEUSi3Zr6BZNGHFnT9j1NVVnLee4umMHXhSQpx26KCGotrHJjTNf6VN6BBg8iqdCSJE9dPfApoHTJX71DfjQ",
  "key26": "HknNEezXk8b9AC6h2SCmXj3U3bZwxH3Y4a3vXGjLExHM6NzcVkXGGEBLpjpH4ZkziGF6cYTmg2CZ3gCEuJF36om",
  "key27": "2YquymGRv4LnZFisHbgxLdCNS4XUHcB4dJuwb16t5vWXNoqtXa5Th4NNCghhhkFZsW6yZCJ84NQPsW5kKLvuhxCB",
  "key28": "4euyCpJ7ahu9Fz4VXwrjeQdfqPeWjkRQB7SWhxAWjpKK8vY2V3eZNUsMix46q6U9BeQ2vU85axSfnfV2yp4VhqoQ",
  "key29": "2YJ19omFa7NM6QL6RK6rQSq4X868tQ2kDZYByyvDaFmCq2GFk2r6Z3DQiZaaEKxvRWLaFJGDRuLDqZd9UEky7DJe",
  "key30": "2zzBFLJ4tdEVF4wrUAXfSXoGA5RPAN8yT1moK8zv7Zqqrq9PUYLR9WtjkUhpfA5PTrQsdm7XwPzSbmA4TaFu8GsP",
  "key31": "31STJVT2MmqSHd2zpGSsZDR4RYr4yXGYSypaBDcKsnjD6mYJVXkEdP9BS54Hj2oAsi4vVVrvRsLpRxDinJw3DhEA",
  "key32": "2KTCEcnStYbetE5YAmqNoeUuhxZTxGoKG5RQauc2BFWRRweABckE1MAQjKruuhHK1x9Nsv4Yqs5vYXVMJSEMDqxz",
  "key33": "j9o5AEbHyUd8HD29Yhvpdtts2WHfpK1ZLyQcyGLvbckGJkRLjzCVzX2pPGSN2BgV4eYnytFLwLWejDHJouD4Agy",
  "key34": "2i8ubkniUoGFvEVm6KAdsiLEnhcoqdtFPNe6PHbLTLzmAFiNWuGxckQiApSvZkfAJWtzVSJfg973xNnWMTZyaoGb",
  "key35": "2qGpqs1G3Fi5rAZnfdaJ9LjFNySqep5qbaokNQmiFvDvwGt2uQV2RESXLQcdNAd6oiw9KzQcTBNLCqCokPNQADqZ",
  "key36": "S6ABJEvFxxyqFya71cNsAGP3qmB4uGw2P2GSW4QY5Zju953GgaaodDQA7jzFgKJVwm7bQkjcwvR3tycSfuKB3yF"
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
