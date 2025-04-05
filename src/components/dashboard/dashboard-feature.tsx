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
    "5i6ux36XdcfjAAZyr1ysCNcfpWVCoz53ZBcbnJjtfQbtsrNkai8Zh1fzpVaBzCbxiQ6kKN9w9sjrG3rMGbQCz817"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5hjMC3LEhsbv94k5AL2VjJBv6Yn6gTdu2VFiB7L1hwqTHcxFr7VpKV8ige4UBWA5xsGAENNbHmZh2ryqywvGS8",
  "key1": "2tPQ13JbMqcQ1YNK4BAbPEB9efZbTh6koL29ghbCpSAeE1hsXBufJEW517mWxDmxdNLAEz2AmhBw936gZLi5uXu5",
  "key2": "41YFWprLtEj58rMcN2DrhYe5MQEyy5nQwPx7qGGvLv6swAm7k1gavemr7fxSUwTjCeysC3J4dWF7zeTxt5uDxrEZ",
  "key3": "G8PZQeriKu9mbPfkRDVg1gt4dtCBDcWVJ68D44Xw1BbCyJfFhMe8sopqVMbivRAHxiY3Erc7nG3HBhYx8wSwQWo",
  "key4": "gZs7cnVhvKJe1tNFC7xouKG9CHzbuo1GKutUPT6EB25PVuwjuZ2Hh6K8m8J2o7wrJmoFVrXZZx1MM9y7H6osr2Q",
  "key5": "5ShAWMAMPnqkM7V7cfPdgeLZpssRBPXnXa93VtpWHS4h1rT8csMdqHgQNCJASUoSQ4y2e321Squr7D9Srf3P1LVk",
  "key6": "23TpVoDypJ6ZGr3sUgLWKj2igzq3yas4BLmKCHF7G8ynFEzZFsuJpRrcQT7Di5n3pWSAaXFr7ZTzE1QXt5Qsn7Xc",
  "key7": "2BK1Tc28utUBiHB6vhcJZfPS6QqYkQFgUpxf7BBNnh4wBPTm14v41TCkWtHB6nUquWQUxH2s6DKGa38SDBKyM31Z",
  "key8": "ZrmJ12oxop99mak3J3RBFCyNhr8UqGYxjJA3oL3N3Y9HM82kSvfAeKEYTwuRFYPtAR9KBtGmLm2i1ekXLhGdPSo",
  "key9": "58Ezy7q5eHzwweuCHBnfZscXgSP7vnQq1Ce7nCzw7LvWbXK27wvbymRenv7i9KjPT2aK2SKcDZEpUkeiBqyRcN93",
  "key10": "5Usn35HgvLbJ4yk8297zbjuvRku9mPwU4m8cuy1xfvwQLYLfbjbUgweqvw7J2G4yxQnyM5v1Exm3gMBAPdMwJCR1",
  "key11": "54w9Mrps7S5gbstqWKY6WoC1yHtQSMipNrv8fv8JmHoyjpNnEHnb5jWjChBje6Nt4kMPjpVY9P5e9PaU5qjFwyUF",
  "key12": "5kcAgDoGLvbBwADQAs8orKyb2n9RedgiFJAsxa6gx7RunNccJDgvRaPLg7CoMFGZugmdHpQuNTmDebmUsXcdGGpY",
  "key13": "5sypbbaBK8yQmWdvnVFznpJyQCHzw7SYEz5bNsHSreT7CDtTfHPezsg5dgkYkSUrU86qhuP82AU76nVRhPV77eCA",
  "key14": "33jK118Nonzms4CvkT1MLHXMNUG3x1EZSZ8XesYewCJpMcvnYjnTpgBkmDDnAoNpeTKbe9djdqM52xgDmBuf1TaK",
  "key15": "4zMMU59QdCDymKyANPk9oKokZHapgZz7d2x49VrjiMpZwd49xHhbFTb4B6GRs7EamZQHzB4YzrNxQGKYqH7S8Enm",
  "key16": "3UXey3Epyow88CFSRv311sPepotx64e8XpHpQza66zfNqvGPueepViha1aaMLhqnmczM7LmZgu6UsqrmDbHUsz2W",
  "key17": "2PVYN8fQXupSc2U1USx1zVivVpVBqFgJj259RGJQNXc9AkMCAmMQVWgeyJ7xUMJs6CbnA36kWVH2prkm8R8EmbiJ",
  "key18": "46bXT4Vtk2LkUgZeCKuEtsiyCyuztBDDyywE7fLVeTA7cCvfZmbsbhgaZci8tKP42c2APqPUtgG9bQFtV1Se64H6",
  "key19": "2UiSmPTbB518BGoy3U9QJZNZKCPMSssfN3j7x3N6d4rp5q18edfYXaF6NE4X6aTcHQXdX4RfnUwjVRpjUufXxk7g",
  "key20": "7fRpnsxMziovjcUttxyX8NjwxxQFLf856ntC465xshKHXSNDfdsoLiwndmr4WBgUACEwjbRMcBAGfXV65BjsawR",
  "key21": "4NdjQLDwN4g5xWFbBGbHZrsFzQkcnntKhiBAJiUrM9MEBBjbg2ytUyv7v8YH4BvpCazBsnHjKdB6hmkS67pqXfRp",
  "key22": "4dwsGEfN8gujAJTZA4wsbHLNZtAgGKgcwN3QrZvk3nhLtKS32akP85JLL7T2Qa5EbBiERUF5yyfhA9wfM61Tt8nF",
  "key23": "4uZPqCEWWFCG74kRefABSEeb5rdZq7fTsYZAL8GPd4mWicUKk6yh1AdL3stQi9QTE8L3QqMBu6YHLUPW8N3Mafbi",
  "key24": "4W8TkQB81ECvoQh18ongjubyzpcUW3FNKU4ub7Q5hqGSZfMifYuPb99qxqLpZdKkry3efdQZT8LRp3QVzqsC2rnS",
  "key25": "RHmqACYaquVxxmj6fVUWPMM1rTuTQFxaj6ncLSC9BVzQ1vMGFdP7UYHVCKoMsKJSbhxZgqoZ17gap2mPX9PHEss"
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
