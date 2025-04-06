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
    "3Mi465JLEp4JFiVTXFYG59AqgAMkDVtTAhZkGoHC9VFVCDtQ4fktahhnHX4FNHTp4i4HT87DxkMvULTEwaegC1YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JfVXmx1hDNdrWNWdTomoNfFF5CKiGHiFBYvSU5jiwGkeuiex3mXHZiYJyjr8ivBkei66rx2T4tM8t3H7uDXVno",
  "key1": "65ZApnPRtkZVAdbrKkcUi9mtj5D9otwhA2iE66PpWp8WYXeX5ypvj26wLhonB13x6fNL5cH1VyiuvFCZH4fHwSts",
  "key2": "47e1Z3sdUMtxX4tXfy8XqwJfncxEjchpe9VZKQNXe2novchJf77rp1ERP74odFsgHVC16nLqxNWaf64cF8qnV2Qd",
  "key3": "3aZu4BoeECaxTvmrFq58thk4NmpoiDbLgwSaZb4jh54G4b2iwYAbgvpgd1wyr9unAAqpKnLpr2FLPvghUeVyfCjh",
  "key4": "5RyFQbLH35djj5VmVPbuZ9ZzDjwCT1wZc5UzBjjotCiuQQ94DuLnKQ2XbcT2PYnXYebYFpGeNUbsroq1tLDvQ2UR",
  "key5": "2DVe1LEicecDY7UTffEFVNERWSFwPgrabH4WA8kATqo9iiiVgBfQjGdHTew2ujBq7MhVcMByD5SpZo9LCcnsb2fz",
  "key6": "4nK9V7rgqS7hw3CBLo1rrwfGEjhF42VAss6nyUEvh3QLEkxHmH44UmfWEqcJEgjyGYrAGZEoCXVSmCJgptQSPXUx",
  "key7": "5bhnQ9jc7rf7fTGaEdBMRa5Z4VMBGpNdEtuSqTq1XYicK5LStkruSE8Rkefzbp2Taho7XLW7RkbSRDAYJzaxzE29",
  "key8": "3orZSaQ4frhC5wGfeK3LmihtJUCSfBcuYWCtMDSsBZT1tP1r6eyyKJT8t5Vvn68Y3RxL5HHjybuUAUjQGGYqiybR",
  "key9": "9rCp8sGL3AensgajwiaCM11rMJe3dUa7Sy7PzmRqhGGGA5TQzhYZP1jPWMouuHb2kp87wGDe5BGWYLDPBGhCy4m",
  "key10": "64soqEoiBPbe2wjskTWPfaAJYyGSNnEYCVF3uAPyqhMicKnR4zJEuxxrqUWBAAGrxzECKyVgv8dCPAeTUfNGKKnJ",
  "key11": "4u3Te7GFg8Mg3hyM7ZoBnXiWHZgzaHbAwxYPUEMA8qw4jsukWpBU659wXLPaJHP1Wzj7ESbPgTvs1PVkMdetb5vB",
  "key12": "4XdGegg1FDUumAuKsWQR5M1g38WSL4MWx4s6uS7StX2FXeQ3qS9m11fJCfeSwb95yxiCjvXjutWXXLeYnu7cmrGY",
  "key13": "3nJGa8qQENrHs2wvUN26GqKxTWK2yXk7mb3KvrKPdZ73zfBSWtc1pypQiVkttFfbFR6DibRFuhd861DydDqFbW8N",
  "key14": "3j18RKUngPzcdDURqdpVxnxh9ZxNZwp5KY5vwsD7eogkq3h7HWRXqntVVaRcdryzopcPrEU9Lo5n6w4X4sd2tu6E",
  "key15": "Wt8EeHVWMcTqar4RaGArZYWAduKnkDuYTFtq2muxenFctXy5bHRAW6QEHEZvfckoQTVmwq1HHyGmQ8WoCynRjxp",
  "key16": "3qkMghLW9YqYZDCPZWkebSgi7uRXPX5BdxLQLVcyYHvv87E2AvY5kBeSmhskPHUcaf4GcWC5s9Uk1pryhFufeD8L",
  "key17": "64xYWq5hBNhyfrqF4SqTQ2HzTpRH4Acv1NsD2H37YVfGaLJx8KBaKfS9QqftkSGM2cgwB2mVSoMUHaACTZiebjiA",
  "key18": "YuhjHsJo6G52zdeDV9FWnn59MHkHy15Z8KhN17wqsUfByG6b79UonB8jMssYqBy2AYWyZYj4tbvNiiuD731hDDV",
  "key19": "5zjHPFNFPtHBVRfUMyfHpgtCti9hEP9B52E99D11fsAhGB8txyL1MTZWVWnSTbWymBnWe62Au3vCgrfrgHHAGgsD",
  "key20": "5PohcanN9ZrC9or9YXU4kzeLCywPGbZv27VePufRRf22eAkDpjWaQEKe3CyGvTCERzC2AUZaahCvB5XpiHXbNmxs",
  "key21": "5etFowLy2L5XNxFpM6ZM7UgMobZyRXHTK9TZTboxYeLE5bceVJPzFnsMqbaSWipYi4Sg3uKyb1EF8BLuQuc9Az4k",
  "key22": "FcwrEQb2hfqTz5buy1VAkW7esJJtNEehxyGTuvvzqfmr3uDXBEfkSMheph595SgBWo4eUaW1X4cJkYoiMZfQ1L3",
  "key23": "4RTB8stQgtg7gLd62SDUTmYpLqeNe2GBw3KvtZhz7xq6PfuoNFW6SAbbaJiz6ZmAFaSnUYHGDwZKEB4St4oCnjnk",
  "key24": "63L3kP3nkuneLwff8M5dHUPfAYvwANihJYVES8JdP3aFyAmmrWrq8v7R83JBJ4qkqivwZ7cVGFDC1Ez1AAMSrxko",
  "key25": "2X5RGPYE2HHYDwyH2jUgYurb3xiHvmmF2CKWbZHgCHtaERqYZEoU939vHbBifEMvtqoVRepGPWUSm3ampLzA8Bdw",
  "key26": "4TcQRPMrY7PZZd3cUQjbwTR9mGibZRZQ5RZhv49FunwGTHDUJwZ4tXk6zR2jdzzYfd5VAyuczNS8kgJvb7vbDudE",
  "key27": "4t7kDqCKkyJ79vaPh4kQ3wVw2eThnAKduMDmbHGkVSMJAUP1Xz4byhDNfF44Tdj6gVaftudSaERsAkZVi5eW29yY"
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
