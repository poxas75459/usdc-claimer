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
    "bG4Fc58UGENp4jbJLcDgTk25gGT5feYFdUSjS1fq7FF9ZWWutCtdBdDwHaUHpYeSGKCp52JuQ8Ddge3ajpYmLp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PuNKhRkxwbiZGbvSWpamqM2N59FSCHmvPWbJiYgi4s2mRrQsHGbEfX5vEPSRsbLiTaS1r5GS7rNiXhZCLp3ZHB",
  "key1": "4UxLpA75ZJKhPXpCW5kG3WyPf2LQuddk5op3hRXfKF8XAx2e6B2KXg5ZnwimLLwz3EfqiPV93NPUrBn59cMDRyCd",
  "key2": "4Q94BMp7CHmzmuwbFWvsP4FfxqGvTq4PSfT4ApeWQWWMBXo6o6gy5rsHNAvW5XkZZg6hfXCPAWhb4xVqKrnrUgAk",
  "key3": "4XQFHfo1Zzpc46Q1bRRapBQ8fZRGXFKKiXkP4JoPq5SJPPx8HzHbHndPv23RnDxA29K9SGiSkoWKYZhLdi5ZG3vi",
  "key4": "AtHo44mZU5WjnW7cns4hY19nVyTNsPpxPMzFm56a2Ebj4jAwXsSdpS4iPy4JEXcSvFkVv5LHeiETytq6rrvk54b",
  "key5": "5mbj7hvTnCtgXJJ5B914VeGszocmw47o8tpEoqvPpreAGB2jjJJPPGKJAyVU1QpDVMcuwuS7ZJrCTVh3cWkoX7PK",
  "key6": "5LSC1h4XKt3Voa6p9M2qN5XchiLE3w4YYjhjcUrK4YLdJ9Nhvb5VLgWm5eBuzC5ok3UZa1Vo7MDeStcFP6fBWc2L",
  "key7": "4zNsLAFSRj5Kwm86GLbWaRLcYgcxWsz6XesvSTYmCJwMNHruhKGBXbWzi2LXPwNmtwQVBzKVok8XGibh3Qe6DyES",
  "key8": "4ASCg1yCZLHh6ABUgJkzhunPYMPb6PHRWET85db4kTNquPoJLKE9V3tDD2PsfuYEzDo8vRaoyRoVdrtv23Zj4piD",
  "key9": "5574SB8Y1taNAe5xQU5Y1yMam375SzkYQXdHhjtdQkuku2VKZoohcvZo65mxkP6tiF5CaQfcy2c9LbSNACZ4BFEF",
  "key10": "2EGPRn1Kir9DU57nuFwT7iu3XpAuH3SemRgzosqjXXRy3dvHfSxrWb1zJFse4jHGVZfQ5vrnF9QPiNW1KWsWKoPU",
  "key11": "2MPFck8BZc2UaPaQSG6yE1WmFDDLs26GJDTc1YFgef7vZcLxHuvVFavEfgJvGPchYdXvTvP15spfNbevL396KnBk",
  "key12": "Ru7DXT1egtXoX65kGEiGHjd27bUfVZLmFq4qprzMzoPfWWqpVC2VSBbQfH4z33CzxtY8tMNDqQ13XXiS9rA21LN",
  "key13": "4H18XZpithGY9yDv15Uh1jBWvjgXErfj59wAxnSNSqyt6vxyV6Pgovc8dskpGBxVMNisSi8zCnTqWLV2HnzRhTjg",
  "key14": "csPd9NdJJyQ6D8GnhMAvjSM8V2as75yWBB5H7cpNMF6bceVsSqEaRjDcr5WWnje3SH13qdqXNgS2YwK6HaJi6FZ",
  "key15": "5DSaL1rdaofWd77vh3j827sz2MzvyzdPrhKYzJd4nLYyf5zrzYPXNKJmBgNJxUrEvZPndcWt17vuPZrP8x8BZLuG",
  "key16": "3p1MkyT4Q43fwXWFMRxTpvw1Sb8zwkLxnoNtEvw66zbqcbkyKSccVnFCcty6MjbFSRuoDGnJZUQPq4KxoKva6kJA",
  "key17": "5YzTBMbWR7GgX8SzPihZuzUkJp4Xn6kCvgVqmedjUUMcAUbrktWbH2w22Q2gBSP35griEb8DqDL954xELSEamjpX",
  "key18": "5h7m6sbybhy4ixtNU4p4tNyz3yFKj47gmx77Nv3kjBZ8CPYhyzyb1F4Q98zhEat186jHpB4yuezi1fGJ5JpHY89v",
  "key19": "F753WY1JMNMeWwSVRD4bTAKjPBosYHESPZNBhnFcgp8AofGSr4k45H1ZhRh8T9eaWna3ySv3YYuYaVB6UzxCvyQ",
  "key20": "f7SQkHSrQRyF2C8fPRej4nUeFGKqtEnMxRhHVwsuS5VKLM9kpAmbLAW3HLpqMvvCTJm75g5zuxtWF4wCKg3A8wF",
  "key21": "4yBEkvAmqShKkUsBfajrrMkJJfRhM2JaPeACcZfcYVNBjuG4FxJCQjTPPhcgKdojFgprf9bUGpn4ZZZqT9ZzKhte",
  "key22": "5MYgLSR9Z79HJzqQWQdrey2WJhwrEzy13bh2bknLU52PWF12nAubcqbYEaiNfbwp2KP69LSkSPwvqMucEk4kfbx",
  "key23": "3y68Z2uqevZjwgr8FpJ4wwzwZS8WWxaKhju5yc1RmRaqj4yZB4G53ikELsj2d5oN2uQgPcBxxCcbegiFaen2fmfK",
  "key24": "2EuwZHUk4X4GiDsVJgfcvrNRfYk5xWkH9GFz5BsRPiQf7cb1W7ikS1KvGtnkgqumT7edAZwA5gmLnfwJ2HJgbkRc",
  "key25": "3DyUfAkhFoc3kRyPw5cUMiXJwD8WEmVWR4yAQt9CHWzEmvPFx9QHFuovtpKJDe2siQWNzbV2vyngWGrygNCnkws6",
  "key26": "5hpChHvMLrj6bmAYCPKC2PmMGU1TrY3PMStoeT838DDxexVGFw9VbmhsVCs698posq5j9j4QfZkS1wHoRQz3RjPu",
  "key27": "3oJ75NGgZJAMCdPytGH6S968VKWReo1FNPACWxzkKWfxwzaid9vwhyg6NZYy8cgZCpFkhxVnkUR6j1B9oMxT3X9a",
  "key28": "4UTVtNJq5uPCFGhzNm5ANkYx6ZrceGbgY6e6NvaAAjVzWJMNrDH2eqRNLs6HF4a7q6kJuTQWoaGQjgsWJv2vwiJv",
  "key29": "5taKpjU5KHityG3zHLNh6JMaKWMBym7rh7ibJXaZFwqCpH6KwdAfEVp89nWVBhApogQobktuBCcMv2Z7HRgTsojK",
  "key30": "2rKpabaz9VTfstVdhGUftuxjuKanekgCDK6AdPpiz5PHRckNARAqnMwNvQ1TJD6GmbXKfqSxMBsQ15ZPdj8bRqAA",
  "key31": "62f8VKmNbgwuiMMrjcrAcnfDysD9m4MSKN8TwHxNHebGecC8LS5h5bB1bMAyybC8iUcjwHRsfrdDky9iTJDomjnB",
  "key32": "5aiRJhL4QgBA9tiakLUsncJG1yTDhtqhEpL2auPHZm7XDENcUz3xBhEkSKV8n2FCMSZBCYUJqNEiVxHB1qXcEJaw"
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
