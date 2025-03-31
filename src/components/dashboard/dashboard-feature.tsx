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
    "4W3FjKjV2Y6RrR5ABAYdbQjcUSMUAvBgLTjHKse2PyPx4m5kvfBAfxSiauUAh31aJekjEWxd3ZJXifJ8LpHaqzu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mBvnm4my44AaLkTXSTQCKR6YZxHEtiq9zqNcHtZ3TRFp3AEearmh7G1jJz8JUUs9Bdn7rHtiF3JLCxXhyayegj3",
  "key1": "291PzzoqHk2kHpq6ZvyRApwEh4dv7HUbB6UeExgoVye5icacsHJMkxukCFik3iZTMCMn1qsCwimVAgujmFFiEB9m",
  "key2": "3FL44heaooPLPHhisvWsx1ssBW96m7cyYNMSnKvFUtunPUzMr43bzMUkqtfYCW9wVQP3CsfGEaiSATyh8reYufGb",
  "key3": "5tt4GEufYFhGNj9frw9nLUweCbp87MApNJgytoiZfJtdyKrkEpzkj38dS84bek4qabZgydHXnFZqKS6EUkfKWtM7",
  "key4": "4PSNjCcAAdoXM7bDMZq5Ghc2PzPPWX9CUCWwRczRU2Rk8kXZpyeWtrwAzACcC8XKJbdurRqEpYSZPZdRf5RJHttz",
  "key5": "3cWJjSLFDXhnm7ySwdbSzxEAcPihDTqqLpmxmREYogRBFTwsGaF5htiwxnjxgPmsw4RNjKacxMMU64pvPmsjZi6k",
  "key6": "e13wgL1uyMxJLWX6CdxjPQn1Zo9nWFuPbLPjafFqPvfrS9fuuourJt5jTFVwdYnayJPxrsBRfMtv1hEruzMRo9F",
  "key7": "2PSCrhewvWKZkGiWHzNKEck5S6qwY12UtdJjaRe5PgsJe4NxVcKiFs5rTfKMasLdWZAwznfLkTYqocmSsYsussf4",
  "key8": "5V3tFVqQmHN4thbdz4KZhc1ht93hTmzyJnS3ob74k5QTySks8tUAuZe3jVdxQAYp2Umb1w6t61fsbae98UYtd96L",
  "key9": "3DqvaGZXQgsQ4V2GvhV9PGHiwus91MSpRjEQZz2Xx8BhBEjMN6SGzcoajQZgWzzqRMUm9RU1SsnEadsj8hChX3sr",
  "key10": "5TZM1GFBUZBWyZTJ4JDmApv54SPBcJdJ6jcY9EcrSTEiAH6RqX1q2WgiEjet3Ppe6825zGTbC5J77cJw8dnZi3Qc",
  "key11": "TTfGJcCtjauJz4QjWXdHcUdSonNPUfJxVEDr6Ri1ZrZDQP52Ys9HfjWJamwwAiS3EQLPQf4RLzH1FvoRt7CcEDw",
  "key12": "55hRBLcJFWaxVj7JoMRsgLsWW1LrKs5MhaUrnNWCgPhNCRM55B52QcyqtHMsfMxMR6Gh4MaPTuRaBdPEKx4hn4vV",
  "key13": "XcNg27efCsoWo8oAmbTGJYhGjPXgbSew1dQ7T7sudvcrhD7fRuE8W9D8TQkKyqB36zvjnbNiZfHpacDS2oQSJc2",
  "key14": "5xErYoMce8AMNkKVd9Erf3b6hzEmBngbhWUM8KS1S8fsDWPuExi4YMg5S8sKRFAMA4rZCLPfoKAx1AnK9CdkEced",
  "key15": "5Zf3seh7MhNdWV7ZcKQFXDDCMYhWHpVVJXHJxWsTTPobzzhaSXz5JQ4JPDEMXh1Nn1FVTvXagWVDpvyjHvvT7ikV",
  "key16": "5hkxMJZfBvt87caaS1eeHUMrH8gtJk1H3MnraNdYaHwsgfchSEMcbeUd7ymbgJYYTHH1uRRSkFa8WVXRcDMT1Nh7",
  "key17": "556agxUxVELf1z7ZgnfSFz4wFiUCnVrSBH3AfXsruxsEJPGoQdNEuT8otCUUg6dF9D8AaudZzQAJGkKaSPyQQU7P",
  "key18": "2nHBY3cUzzZuvxohRkwfmzL3ibVuYNyeX5ogEFEFbVb3VPXqAV1wXfhKLhckgUsv6PF5TiUKndEN7pYy2jBhKo4H",
  "key19": "2gy4CVTtaUCHzcYYTrXWQAwDQeZNWhdDxUjCYgPFfD89ifcrJTidY3MSAdMZTLXjaYq1vCMSbGJ7PM6CY7jbwgEJ",
  "key20": "53kCDjFagMmYNbhvNgMbuFqize1bVBuT7jK6KsfX4Xk5MBydpkhF56ZKwxouj6vzhCopkUq8LqM19TbfWWYeAU1i",
  "key21": "4LSuYLcRkpkSPBbAmRzxQ4HxnNEQskR7wCXUgWraQGEqoxQasgJkfnGdRhem2L28GrFw1ceNaKir37AktQEEDL2p",
  "key22": "4G54KK1oJNsT4VbYx6kMrzxZX7BQVuV4go3vQRkxmnXhfesmNH6FTZaJ1TH5z8zqGVcMfvGxH1dUR3QCgUszRsE8",
  "key23": "4T6xWqsBrbH8j4aqSFA56mSetaNSV8YJuD23nHgHGEnbn9Q35N44V3oRdhn8CkpJpJneDbdACVEtFFAS61ZnZetb",
  "key24": "u3Th535FWBKQXyDg9ccRdCRKF3vpNacGiF5XjM8D8SMVQUAGRt1BfA64RUdpn6C62rTZyS8hQj8BjpwEfeSCnc6",
  "key25": "3ifYC869BGs3FALrJFmV5h2zFn4R7v6UKAViFvyyjW1NA3dEcdMrKRRUJQ2AkkWXyub4iF8dBVi29BokUuSF57tH",
  "key26": "2T87iHzGmFUdMxS3K8tmtSKzXcubnaZHiBiEX3ofhmJNgmeoi5SKvAu9fiHUtSGhbiPgdCJMV9pAjetBZ7F74Fgj",
  "key27": "2RsEzp1X4Up5T85PGg1fNwdmiewcAGmNHVtcbyvfS4tWHaBq9ajnEd5ZN4andbHAcfgQnfDTv8rT8bTmcKFsSaxg",
  "key28": "4XahsbPJS7kfmSebjM78Je8VVBTiVsDiwmGTj3TQGXFhrVWUNHqPdmUVtdYsKxjysWZBfcz9J1Q4P1EyxEVvXGKo",
  "key29": "5XideSCFWV5Cti9EJL4kVUod7ZfyHWi4xPvB7jW5mpxGjmPcCNbpeHyMW5oWAdGt5PDuRXuRSmPbucLpg59amiPU",
  "key30": "LfbCwTWSxkh7PTiWLLBqqNLWJs6dmKbJit2Cs2CtDd9YeGLfEMkbAw53LUfHsA5k83CSN8DpL83t7Pes1haJDpj",
  "key31": "2MHKSLj1dpWcYE2rCrwNSijkP1dwUyP4EZmNhNGkjSXghF36QpyhkXyj1QauYKggJoAZZ5rEyTaiekQ9owLHXRkp",
  "key32": "uYwERTL2S1vjosotQszjBy6d5wgNyFMMcvws1QC5ok2CNRpSph3cw2Cu5bs7eNKCAvHkBvdjTwSigzbz34rQN3p",
  "key33": "3ksS8QrUmhLZGDwftrFQzPEe1yvTjuAieREcsesEij9C3c8stfCeCTCUe8m5GgQFWk3LnSwjHtz5fSw4GydvExQP"
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
