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
    "31rwLFuuSWTnmLQAB4tB9WFJvEUeTDrqQ9Paq7kPBSP6oftS43Q1DqtPxsAQbPvMH19azW1ggYH4KhGAeME4xb8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5UzNKRJYMd2fpa3jSA4QPWgBGj3msNSd7zwFGLyCBLWFW97YcTCYQQ7V3ZXqjxVH1QcpX4Sp2JxTxu8UZEGoem",
  "key1": "58YcWLvpoJdgMjEqh7kV6d34ohjoM8StLXPMojH1JNzB6shDkj3BKiJjgQTJaeooEz91tW7E1V3gvzpUBmEi8GiS",
  "key2": "2nbvV7qV4XDgtC3jmaUpLZVjf22AqQEueMRxBymV8hhZcBmriFQUqyCgQDpWxMb8do6PZyGuNH8UUYvaG3QvDZ5u",
  "key3": "phHNG6jQCpCnwEmUYF3egcFVdoTg9mNK7JVTVEenp1rc1c6Aqa8iRb19KLidH6eqJ1b2MaxUH5Jii16PD9NF7VD",
  "key4": "5CWPqqXGsXYmrG7XssQTjGz7zpy5vuhX6g6kzhKW64AjCD5oLuWiP9jX1AToq2nquNvyGeShFNLzzZhPQk3ogNhW",
  "key5": "5kaoQiYXNqF2gtAhAuB48QKp7FRQbHJztoXMj93HFjhB4Rvc8mFfUZbvNjDL2R6ym4iweAnNkimQTYaN3mdig5bu",
  "key6": "65ymYjTdmtfxsjuzdndDCACSpcvHv8XQYgymnu9A6mHFENTHc7YCsogh1D4Eye2QoNCGVWzqsk2yB7tysSTUXXt2",
  "key7": "2n6LsaBxFABswP7GVTwDwXQv1mS8BSzPzrr8HkSHnvzN99dV87hSDTPLqLcxk7xWQdfJER3iciriUhNj7eXjNTdz",
  "key8": "4aMipHeVdddcDeHZ9jJF39m6g6XyWCeUvTFzy1H98vm5Y231N7GgtUDHLnF1Do4PRD15oQC7cXUt5HsKXosXtvsC",
  "key9": "2x2AT5Y3Cd7UT19LskH76MZMwCZUzqag7AEYAeZ7TSqMwJQKnnFnz9oTxxEHD6x57g4b1JNyPqKefZ3m9VSqVC3Z",
  "key10": "ABrq7YjjcN9s3SPFTWgfQFQYbFH3UaTYR1hqHzLCSGdHDjY9HtrmN15xahMthavq8DLMD13Atrnr54GGVieJJqr",
  "key11": "5yhvFtPaCwVnGkkszNiQYhuKB4ToYLb2FsXRvM9CCfDzVGCSvz48mZuiuZaYc4aw4SEBgaeYBYmSDUMBiGV9Bs5",
  "key12": "2Xtfe9EDnVNZiqxRE5s2ky4iSmQj6yZvttS6QHgdqrxTeNfNruhCgfvzyHNoLNNNQG4ExqDUBpWQBBu7js1Y9RFR",
  "key13": "29CfubxY7W6TFM5nJe5Wggs6kh6dEPGMsaK3QErpMtzf6njjAFbi1fFQexhAfMJThcFur1iN6wmF6FzZiksMzgKm",
  "key14": "293JVXopap3pXQAT5ahGGsRPQkouLU8ox4SjAt6vLz3viKhUXBa8nJRd3tpVNs9t461XQ8zUwjM4ukdzdhss5Pmb",
  "key15": "4fh4s1VnV2UdpJSMs8uSTLSqXV19CmRwXoyTp5VKzz9Af6BKTYcdWBAz7KWkJLrrYCjKopBUVP5YeR8MRaJXqRHL",
  "key16": "3e6VeJNb4btWXeD2TxK2vQjZJf9wJDrZa3gPS8iTUuKfAb5nrNcMURDRhoNFeGEUha3nyoDu9YFAKuc5Ab7EfLgf",
  "key17": "SiSgTRacvoupVKQqCqCYcyx98kGzTKbLgmwxU9TSeeiWZDSnwJZnZuLzaVzJAzt3h45qVDtKHQhxnv8LyHgZGRe",
  "key18": "LVn2Zro77AqToZSUDZrigKP9eBz1omB4vYCoFdnYzds4ryiPfZVESdFYbzxo1GziqSV3ezgKYreKhF3TTevaUAG",
  "key19": "2ysxALvUJYXkqqd4UG7zTCmih9wPcpMtqapcmmxgUtcJHZJCMvv6nKgudnEQCicTwMn6fV8t56qiA4HTKPro7PH7",
  "key20": "2XQz1d5mZJhmJroLUY5KWP4FPcdBw7UcJe9hwbiy487Gh4zPtZxmvZi4HZ8YdVRwS4YV1ayw3ejkXfhHcn64YbTZ",
  "key21": "3a9La8hV4uaD4LdTC6Wo8DtYReP2CEBMSDpL6EvqgXmYAuQ9fHtsAmEHu7PcqRcQj81PnZX8dc1DcFemU8deuRWh",
  "key22": "5doFcZBekjvhuJa2Lp9huv5KK2WdSKKqXhSenZwWrpkzdsdDkM1hvf7Sphr87PosBan718wFh2qemB1Tr73FqdQK",
  "key23": "8tJbERHEFpk8vbeKPob67KDhdBKy6FkdcwMAUwHaMHdEAZ89QUF4FvixK9HjPFtVz5iBByQ7ivpDG1rqvvMiaSx",
  "key24": "4EKhipS6yQopUM3gwh3QLAJ255H6SCFd4kQg3r58HCnqA1583tygTrW8Q3SLCG8BCxfya98bQwYNVN6HitDLRVQM",
  "key25": "3h1fMVeUufreb3fVwffDhVLb4y2XsVv2m7giSqVFT258MGCdGuqFfTBnfnLAmt6gZNmNBPHZysVKuQoF76yz2kDo",
  "key26": "E9fgyfnuRfEUcCoS9nWL1gH4HHvnoC8eNxSLNn2RiizMvqpGTkp6SDNBtFY8raDF6MyyrCASUpGp4YmJdE3GWs2",
  "key27": "43TAk4m4nkdm1BP1JEopHE5Tw7vocwf1jCvxucSayiVt6tpAY4yhfcSekfryShMT6id3z5pYSdaRFU4Dw8S1a9gW",
  "key28": "58GGtK4v7yT9AwpF2aXPtSZbdi4B3HZyiZwLjfKfFZqcRhRCbLBwE3iv7piQS9vBGTGBYBh9rqfTFN4wRdD6H6wQ",
  "key29": "94qniKaCnyzjRumtp46Cw7xbSTXU3XTtLK8g3isFfQmKapLJiKKeQPocZebuS8Km8w3kmFZFnu6YxccgsJ81cYN",
  "key30": "5BAH7vinZKSBPU1zhot2ezc2id5c8JEymcH11329nYWwJ6tkXqb4PeH8yeRZo1ytPuq5rhyDoLQViaJGXS1SiHaf",
  "key31": "5PGUJSPDYbUnwjoAnBxxQY9SAioR1bv4CC78QeL184Vfv3jonEUNFNgNf1ncCK1naQeGEEWF3ompApXPhVuKqRnN",
  "key32": "3a5d3d3h5Sb7Eci2FV23pq21pDwjdCusRaeHZSpisujrAntVkWWqpA1qqWixmcJr1xUJbHarh7fabqwNyNSr7cm4",
  "key33": "2uFLELkLsYiea8XFga2vfk6MoFBUi2s6viH6GSnuskkufexj4DzbuBJGMQmNZKcpQaeVWNhNHxpyXiZCMTWiu8wm",
  "key34": "4RFmNj2B9FcdygLa5Wo2yKe7BsqNJaau9SZTJo99d8n4WyRC5ZhhQhKRRcmWJ1Ggv1o9NWRATBrWYNkZWtyPg7td",
  "key35": "2AJevYTu8Rpa4wDmXsPJvHr5MwXWMVzy1233aQSVsN6Qm9Ptvg1A9JwLNNeS175kH5dHZvZrv8NAZMpDYTm8wpjV",
  "key36": "3WPvTQM4DgWrNMiXL583S1vcKegBCPiUZhQgm7STsUGY4y4eK6QaFJw59qcHwVAMTUPvUWH3UhsoKnDL3TB9byCu",
  "key37": "5cySDwDWr3KXLeGP5tQmEaTvnqZwzyJ6EHwqcgg2iwNaBKW3cmXsZB87rrvMUE7fnGpGv2GhGKofjBADPNQbN2Ap",
  "key38": "3RnzUg36zeE3PCsQn6kf62ZwLLsRDWs9vrh7oGdQMM92eAkrRRHemiTCcK6tUGHymFpHGvkUS9ysTNPGrMZGEdt2",
  "key39": "5fK1oFwwg5buPnjhEwNrTK3YEt4VaYZ9QqGRiC484igfbGjQ6b9wPaJ8c3wZFNihNzw8DgLK8iwhqCUt21PxS6Ui",
  "key40": "xPRueHkzhGaNaBa3va8doLsudeotsiK5bZh169RmEMgXFULPACbdWbLh9RQZA1LUh7pnSw2CJG6nXDSyfoiT9uo",
  "key41": "2Q3MQn8RgVJHJwXBkuhM2H4Ada84MJty2GDpegYr95gmqNAkN1aG3ZvhcmmRvHN3PiCg6wXyv98Hbu3ffvL2ByMC",
  "key42": "3fpA8a9NjwnCtGhrmNWdKCzpJFu1qKHet8wWaFaSj8XhPTWaqtrLxD3zjZp7duUEr4NxyGevp9k1YxMVcTBpUmmu",
  "key43": "4aHqb2mqzRRu965L942MPVhc9Upm2GrUjSr4JMuYKZLocq9HKCoSKKUGdiGYhNGsN3rC6TzoHRSddUAyDa6zp4L9",
  "key44": "23nCwcq5VWQBdki8ty2SFRPz9fKpBr29bT7cfBReCkd9AYVg2cANCr4qKXpfX6wUgUrBp1QqGgmUoUjzPUgpVPPh"
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
