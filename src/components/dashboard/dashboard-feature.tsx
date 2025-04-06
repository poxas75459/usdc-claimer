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
    "4bF4tr2sEbK69BbkvMfwtbU4tzFFztDqc7sgbJQZ3MHKGwWmH4Y6FhFLphAKFb1ZoZtr2DD6kWLkNZbYiWeCWNab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uRZHkEY2LFfafeJFPvwZYLPu4nBiv3JofxXSbUVREU1wk8F7sG661aqWhH1vhnAd2UUa3F9NckLN7oqcgy8FCuh",
  "key1": "2knzCZVH11RH6pWnitQhTpzdLn9naea2v7kaw42tcEnrZBpKPAD9QKYAY3rXCRz5ng991Y2JzJPfAPVyVVC1pRuo",
  "key2": "64iZkWXePXnrLqbPYHbS9VUBce9rPhRDqNctEaUDjf7mBEKaaaiZzk1JSqAjWN1xkXv6iSMbcFiDJoXzXxwtyV45",
  "key3": "4u3t3YzafcuUnwYsTqiqjXhxezeVwZVx7JCwfhVkRwPu2EsZnjDBADMGGi4tYVevYNraeJkN2Ud5DfRHxik6Xm2n",
  "key4": "4ZJdi4qxzRWzCvn721LHAuQrxkscBWnkggQXJY8RFVbtLMtn271zSFDZsM61RjHgEfsEo4crqG1c1ZeszteaodJz",
  "key5": "qsyKqWkkGvMAgY826MheR45oLEjiCRPe6NKMe8XbWQmoFLJw4Ep4eQTsGuaP38ns3RZLnYzntPhCzWqdKFW62BT",
  "key6": "5MS73BSzJXqqv3rsuga7aBtEEBnueQ5zdrFUKtwLN9em4EU5j474KbDaPZR4vorRMrMJhWUSo6FRkFy6uBgJYXwN",
  "key7": "59W25tA39rUgn1W7szZmeL4YXQPZqvmR9X8gDxX4LGucuf1E9u9tJjy5g4psPn1AvZv2eRHTeiRjXM3mXDENSZua",
  "key8": "23eJuTc8p4ZvRg2thTuJ8DVSr7RzAAbez1oBzd68nvh1kAW7JFUpQkyEiRaTbJikvRkuhrETP21GdrLae9rzVZNW",
  "key9": "2aBqioRs27MnqmaCHkWJsjjoH5DmswLuYjx47CFdPcbouZnrDphqVTtoYne13VHwuGc6E1XwUAyYAQKWXr3MV97P",
  "key10": "3sDLo5TZkMXcP2EojezFBUmXmg9vW3gjJgRC7epSDNEQ1QMd3F6vKXyMRMtSj1H4FXB1VnaaRiqYb41eAC9JGJAW",
  "key11": "oFhHjMgfq8zWRbHrnWZxp6jcQ6QpQshotDJnGjUYD5dwoRXHj1utbhjiiJWKGz2HPgChBxv1UJjd15TqWPSL2V7",
  "key12": "kQbyfHDYaT8wCo7cULYovpvivXdrxWwo6HU7gEf7ax22VYD6cNNzqijw9kxip77gJmxa59VvvY1XYjEJPNHQyxs",
  "key13": "4fNM6SCr8RXtgMx1u9UTzyedVJ8SnWn1vTWNhwHnPywbDSM9wpGGABjrpZEthiYuBKTdh7cHjs7Pq9myP4YzF1gi",
  "key14": "31RRaSfHBEVkrzSpYaqmqx9L4JS9GJpq9vhiJh8HFLGNuVHvVp1KPNkZhwP6NxQmXPMBCH5xoCgG19qy4b6n8Pos",
  "key15": "33PmbGeL9S92aiGSnevoMu51onahstwpBgVQsrAdbdMiguVZA8NCFqWsfGc3xbiymW4g54iULJyhCMaqHCY6hW5t",
  "key16": "UVqGp5Hap6zErMi6572XsoURHL4Ea8wDi3LSpVeoEqT6RvNMMuL77DRyahwwdiCUVuhxjL3XTFN7PhCSMUN8ubZ",
  "key17": "4Y1oPruZD5bRttBNrfgor8NjXzu2Z89RJbPXVuuF8kBtGYzLYwJtKqmb4Qz5npwXSkiw1S7dXm1bigcgigXExmAJ",
  "key18": "3XaShWdwdPgkfBkXzh6xuWf1jpTU68Q4bFSL7F8uNTGyUyRpqxc3CQpSsTL8fXsRPhEjyCWFpH1TWEmvoSd9gfoC",
  "key19": "4JPhSgJ1jf75HBadfKbpmBLmrBDSnzAryQSvP2eATuMZ1ZA3iHidiLHkrHYEhSj7Q6CSWvKge9RXeSmaVfwS4qM7",
  "key20": "4gQm89D5oEPL4vcZSbrL259UUoutvY1WqDWdvbufHtodUUVWoJyw79B2r9Y3C7hkp6qpNNeXhwvTsKxvqpaQ4LP1",
  "key21": "EPDioJAHTTSEspoBkPNuwYs1GgQxiQ1xk8qcEm51bDTxWZGh8k1a8jFzzxgd6XfPq7rhMtWjUyU1JL1G4i6Kczn",
  "key22": "2us2XaBo7SxfTW2RW1hogVgJ3EEe3PTmRc3HwxPLStHWGnJzQMmTfLbqLnXSZdEwkADQQjyqHu6pGSHfmYLsMUum",
  "key23": "344Fk4zjLAxmrJfvGyeghubiELtG2yVgAAwnHGfeSMyLc9ND6AwpeMxAUFpL38txNcB8CvaRzffo8akhAbQ14giw",
  "key24": "4RrKor81qA9436rev3ED24RtfXqnubWBmE8qrovEc182PRC4qL96TpzvB3cUQsR27Wvy2JRdrkK3yBKr6r2Vicy3",
  "key25": "oekkF4oExqMKB7npMYo9T6tQqdgXgF3Up8FoX2VGQfS1DXAXQK9v2LkuWQNscQm95eAqa4Uf6asS287wWV4sqNH",
  "key26": "2gyJA17bitNYAWiofLxMeZ2gp4yy19h3knRTTmbdad8MnNHNMe9kP2BjdTyGKSLVBmPJA7bmX4QaJDc49wByBkMS",
  "key27": "2LQNgURvcpSxHEg3QPji9GadsrMn754kGiNpAbi93xNofqRvJorEH7NgL92gtC715USn2t2o8wZzCHvY7j2Rkb45",
  "key28": "27RpCoQ4T5LHuYaxhStf3JJvhjmKqU38kyy9cx77CV7UTBJWALkMxQhuxG7UfTxob9ArKiucdM3B8ki7irm1kz9n",
  "key29": "3Jcz6ZrznYwMVzfaTfHMgh7Sf4FAKCoy9d8vCkt8GmUbA6dFAjUNLFstActXY4HAgKQ57yikzemuMAsqX3mH4xnr",
  "key30": "23cmXojMW62As7q9KNAf6VRR9wuYvL1m98QXT2DDekekADj4uGWmnjfx1u9jyhSwMtMawPXexGyxpusKMPV5nxXp",
  "key31": "uohsk9f7kspnjtYfo5shpJQULxzdL2Usz5SrTyLG9weWAR7PMxk9eGymHwb332yFJhhxHDgyoW9jDPPP8p45DVx",
  "key32": "5M8bemYUV4akAyQWeakqbERL1FW8k2EpDSBduHBZruQ2sn6FGUV54mu6dV7q14bDUPCLWoEewGnkrF37m58CydBL",
  "key33": "3EXVx85MVm3UxLuK4FeJg46M6crbJMsXSm3B1TFbiuEaPWzFEP6PE1htVADPBGPP5YUUpu7KFAyG3UTLWoPxiMZY"
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
