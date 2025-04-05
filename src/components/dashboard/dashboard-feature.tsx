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
    "2Day7fHqice3pebZ2kX9gU6ujUpmVQbyyQwYGX2j9XDY8MYwp32R6SAaM63q8S1sgtMTAuKar2jpVevxdYprXCXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ma8DtNgTeVjYtjgwdfdqPDYDWpnjWPikxaTJ2ntsrtNnmjJKdcfYtZyptkFWf542qYucyBtugvL3Z6xWQ9g2raN",
  "key1": "3mSbsHCu3QS41yYQiwBm95FfYKq6XLDpyRohzM1YukQdz4kbB7Z64qhcJcG4KK2kXn5iQD5XBcd3n3LLQbL9DbFX",
  "key2": "2vRaJX1rYMPgBWmpJGFiZ8V6c5pNUMBVcmM6TM54aMJwhVCNCJnPMeJtASfd7j7k9xrGvpdKErvMQJoYYZH2hjGb",
  "key3": "CffD2vQC4Q7431KjURoKUAxSmrdjZbJh5J9oysYRyymAgDcVAuGV4xdovDyrCSan3vEYYGp9Ek7WXA3q8wgd6NP",
  "key4": "2CvPZ7L5anq1TxStyo8nHpR2s9nZqW284NPqrRvjV9prSvNnizS2JbRa3jfmJvz6xZDZSxBPKHFq3Xy3rfSFaiAY",
  "key5": "4zfYpJi2Ek9Gqz3KzouLKPVtFPQw86hSUf5S1tb2NWNqqZrD2ZpXjLv7uKJ2pbCUzJRyYDByPKt9ZjduvbJPLiPE",
  "key6": "q2XEZvFahQt3b6JPAtxKfsuuDnUeY6Tv4LLduTB59bB8zWNHvH8MyVigdNqSsCt32u6SqBMUCfrQUn16wTW2WtW",
  "key7": "3nh7sNPreXGRSB4rUyDpBdwZ8qVxxXyMPszwEFwgjzmLsR2PLk9i5BPYw89US3SyE1dUfWo2twiuNowzyHGDVrpn",
  "key8": "GAJfL5N2uadoJPgRGohVYxY7fUTGc5RgGhK3KnPyHRvu24osE2t4svEiXg7wCh1jnPTLXnxsSrt8g4X3aW5qUvx",
  "key9": "5gDvsrWbZiHANuDUNk1bbpGPdUfZ3ZURuvX2YpgiM5KGf5c32HmJvLSvEFVoPgLNzQD2nVVi2KYgVywFXHeH3K77",
  "key10": "FrHeSBjmesN2uW2TwTiXPk44MgBvabPoUno2u1Zx61xjqkiYtk6pTLVYSnLGoSMjpFDFp1tJa5A88RhLrRyGVpH",
  "key11": "3gn7DnxaPBwEYWcom6bUAwY2c2CxBfb9M8kuaA7TH7fBwLiNZAB8xyZ12nYvZ8Vwpou1J5GCadMN4pupDy9ZWBAR",
  "key12": "4Hz1gFCvN5PQTrAKLKwh2uyPT5z5oxsH2mAoVsa2wf8UCoEFc6BWKhSAdDj4c4UBCzjdryGHLsRAf9RDe4KDNB2o",
  "key13": "4zyXbsuDHiqc4ri3ui6iiMExa9HnYipjSUqZ8v8fdE4fJC9GDBK3bELmf68Q7T1cwdJLFHks2NPGQgGEMcRqwDLz",
  "key14": "4tjKG3QGKQycS4cHPwwMMGx4JpcR5Aq18xWAcTp8MR982jZVPMs4D4dqMb3iLh3oFbQSccoodWjQ8TUQRysZoiNa",
  "key15": "2L72MjfKfiV7wVBYoDN95q9NXVHgiKWSfn3PibGZirv2JCX9pnDKCMzCeuF7SxBDkzvYda4bKPBPvsQgm4CNhDcs",
  "key16": "5byE6WbC8b7eNaJNzEbtSR9j6aPPK1vNYcN6tuRdfcHBWDShZ5hWpqevtHvNRicZDAtbtvByss3Ss91YsbAPm6k9",
  "key17": "3X8nLSxHmGndY5Rz95nfbWULj1Qqfo6DAf3UagUGtsM3LNgrtetwK4syn26kjKVYhBdakpKk8iqUNnd8fDsA7W1V",
  "key18": "g8gPXWD8tw3UchCVyypJaxtvpAySzTVXq12juXUrWFcvm5gTMJFjgwsAM1aDPNEqKFcREAGPidEpFLUbvKTn9ny",
  "key19": "5RhaN2TNG5MiCWhLCG2GAJ7bTVQzwcbNESyjtDft322Poj2X8ehPkhzsLm6HRCxfbscpqkDS9mMWU5SeTkmvUt9K",
  "key20": "3LyCoZsZdgMjYYkAAbu7pqofiSZRYdddU2kQa1zNQivHUDVBBUZJdkHqsPz656apYSZzaaNqCHxJKnjharXbyYzp",
  "key21": "xMdJGVFA4XMoN2GK6gPWJm5H66ThPEqZ2YnVHo4nxo2owCS1EFPeV2XmQjyyBFqbb4Py43KHnyaTyPXx4STTaJP",
  "key22": "3D1hQQETW1ASUvJggizJuC8iphRJbAPbCiqCukV79ihmkhnUyqBg6z3ufxSKERN3oJATV6ZuUqAKoaARFbiPRtiE",
  "key23": "5F9ZUs9wqSvEoe4zG8u6GsHjJJFH3vwdZFysLV4WFF87Mxbq8i6hdiNGNUKzTRVsKdVUg3s2XmKprhYiHk9s6VQ6",
  "key24": "58gSQdWzvrKMc4CfgmgcRx1DEcXniVjujdbB9AGLBgpH9Qetv8d458evz4T1tjAoy7V7DrJPNgT7hJaFkkrKLHpv",
  "key25": "27m2CnLjGHQGMfRejn3ox2Nb1YNKTHGvSmMLqPTpU4AUVo2TsphC1z4cYwrWp5k8CeWVZ5NSzaGxmjeRF6g3pp7F",
  "key26": "5VgH9RLrpe8ooWK3KkxpvXaecD9v49cbdxgjH6zseiyes8xKXU9igAc5GxrbxAuoazVmr4HYe2DvzGYjxHk2TvZ4",
  "key27": "3UD9hKcRrjzhP85Z9gkx5ESFXKSrk6cLSDxPVVmdFg2rszDvxmaXS7cdmvqHrujv4xvaS6gX9Jrkvwu7JSRzeZVe",
  "key28": "Xd1h8NUtPVqF25VtL7LHDUzcoLD1wWdf7AzgBUxzCenAXaL4o24TgABPJmE6HiweTm2ATehGGBS7bfQQB1rHrwa",
  "key29": "QD26jxhxeq1Af5c4wZ83JkAJp7ZHdJJkiLaxnZNwQyJwDQN96dnv35CKHhPoha5PucN8Tn4DFDHQHBCGNewhQkt",
  "key30": "5X8mrMx2n16xiJyzrpovHoy9ijjLEL6aZjWdsqNBXukfis99NUsa6S15WUE6YP8qcwuB5NQ1dD89p6hz1dDDj3P3",
  "key31": "3RV7i8TET1oqV6HEN7ntaDyWJa9q5eugZG1vR4oU6k8j2wVBG27K1Rp3pM6ApYkKpnVXZD3FJucE1Wr4Shgnt1RJ"
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
