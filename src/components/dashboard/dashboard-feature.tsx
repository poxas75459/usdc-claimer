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
    "3Z7Yk6kebYXGuZQBnnBqYospwFL44y5Gae3nUg2pnpkeQRn9hF7p6QoDsptAP94S7yzgc2MU9aDVokJ15ag73jBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utUGAexbDE1W57BbMqK1FP94DBmc3Ae22D9tqkAUJUQ6mZeTq2sMmzZey9b2RJQMLCiWJbxomeYoxKpZV4FAdPB",
  "key1": "59bQ69AaxmJkn1un34FoQrq59bTka3jGcWRcRYnwC7oq5tmbcN6rfMZRFwJ4z5WnSiGyZGqLyvnLasEFrFVyhmQU",
  "key2": "5BVD54QpgMbyMTLE8jWkqKUCQj2PNrw5ZVbxRZBmve714JcvsHYicPhnwXdrW4T5Eagc7youySHNJZRdXjsFR5RV",
  "key3": "brS4ryLD2Nw8a7zu9BUqn5g2M1UXVJTzS81z3j7W9rHFzhXBS6iuitmjxZbxhgKEn6U7VWrRJi3LpoU7agt15tL",
  "key4": "uKiDGczELUgPN2r1tJWrkhqoWmttYV4X2h8VAA2joNVcJ9MdSLAyXK7W58NVkgcvtXnohsC6tm1EDekqu7PXWir",
  "key5": "57j47dBPSsgtMuT4LzNvohKVMtQ6Fy5MwGLwrbC29cAdWJRGB7atvaEEqiGPLePo6DAs8ZjfdbRftGVKd2sGhEdi",
  "key6": "3cEbkYtmQo3Mmm41DZpPmvUsQF5CgKRhbcTJtLRyzvSZyshEis62C1jV7u3vW4EoywgZP4igu9N1eR6rBoNrTshJ",
  "key7": "2YmT1fmBcKyu8J5qQVZ7ZR1NrUh8R3ncDoxmB5j5fASGxUT4bVDu4yh7VyYLme693E3QUsdTopNa4azbAMy6Tjxv",
  "key8": "5PauVLSZzDUbCScp1agvDuRtdPgVYy1QTyMf2ifQRHTRoEL3Gf2LaiPWFrFiLK4MDtETTY4r6ZF79RonHC2gqdE7",
  "key9": "2KyH7ELtzMixGc1ejP1fmzToyhKo1kXNLPV32seiVKR2o1KsRaKnH2nH54Lx8cGfX1RKy1uUqTCLhpU3LyxsFZhh",
  "key10": "2XYct935TNgtiyRUEajbcM6TGqDKddoq2NcvzEvvfPK7q7tmYzEVtyyrLrh8wUjHfARX9GiLU4GULD21fwXXhz8g",
  "key11": "4itsZkF3mysxVAyTUNNTYL1TBRmef29dea2qkAMGniwZGEFc55RH3THBsw9Gg4nrzAFANt8yiA9nickM8SF7X3UZ",
  "key12": "597ta2yH6WmAaBUCwU9y9vH17Q8J3aUBW4iUGQNJu7VJzAusPnSGMjj3vf38TY72LxHaQie79oGFwAeBekJBBTXf",
  "key13": "5KTgz27wtp3eNuXNG7d9MwP2eNKpchtk3qBtPK31KNS5NFHnG8AmfcwBs1zDPo83KAL8azSbLebRzVV2wPRxYjaz",
  "key14": "2p1eb3z5ZmruWLFqDDD5qSHu79PSm6xig9brBMYbgGTbHR3XkhV5NgcLur3K41SpGXgwLTCxj8Mi8fmdUZHoyW9r",
  "key15": "4K5ZDA29qzUgNvJXkSaVjGa1CaTHdErig9KF2ECzMfQYmXkud2iTCusF2xLXFCDAEN2op6p9iV73juSefykmHg4B",
  "key16": "2Ppn1kG5irmuw1oQ6kk9r5UC5Wcb6v7YYteYDLmovJ5Sra4EZmxuEgRPpUQSz9gcaDS3eVuYFRuDNqDJBHirbpVQ",
  "key17": "31gKqyNjpNydr3mCXDas7H29FUoX17tBLSPWLbt2mjmWRt46kZiQVYdT3GqN5Pd1XbEYaywvcuhH8AZnvAYzuCT1",
  "key18": "3XmEasLAErkk2W29dpEeF63MmTQTiWd3CPBvxtSHzzQG4Ma7EZkASGQCUZxqj4UTuoRYeKfJ1uqpcjfVQMQBso7V",
  "key19": "5qdEdJdT2fdrWn3U8p1FmUUA8x3bJcsAhxLvhmDjpuZ6pMaFdwSeLWfaRta6FJ5jeKVa2PdPLJZM8vrMD2MTtYM",
  "key20": "3PgoTmkq39HvvDYcCWBAmQG9AxVRcLdtRuGvhEZy2Zf79aNSWg44ppCitT54WiD3oGLn3WdMQ4TCwfUuLsVqE7k7",
  "key21": "41ZpMha5LaXX8Z91xtXkmmoK557aPa3aUtn4Kq5CXK1hRmhAwxVq9fqhfPHHpUY372y87uX46ruxof5YkhbxcfEq",
  "key22": "4dpKjGCVVeN1is6rHp5RXvHQHrEAA6uudoPmTwvJZ8okSdAYgXG84FK1oHVdrdJS3ymwNMwMWZu3VMsfvhy7TMtg",
  "key23": "2vxDmTACNawnx6dvajAtB17xf8ibX7cc42F4uWR9pyPitBhc9TrY6nheamBedwfqgBmNDY81c2AR5i3dCDC3heDS",
  "key24": "3tsRxQ7E3u79hKXcepZtZ4oK2M3UvsutJvqAVyny4Ut85jG1s9mG6dcvcq1e2wBD4AXzqCDai1VMpXR5gRfZ7LYF",
  "key25": "Dui2E85bLQMvAAKaPGKNczyHTaf1rFuMgmSV9H1TPQDiJ8Cz3QjSUzMBLmVXA5n68hhTceauDdffXTEtthTHma1",
  "key26": "2WWzQLjicLqyeRmuSYfTicgpQqDY2zXtU2AQneGdyUM1oAF4KbemeSoF2Mwxf6orQXSjQzTCM7Xoi3acAZ9hEmTu",
  "key27": "3KAUNEqpzYAGHexnK4vq1YzJ1rXtij9R3cG3pyoBMtdMVSWkHn7daZ8bY15N2nXMiUJMYrhHWiCTYZiDkpbG3GsL",
  "key28": "n1v4P7ZovCUyd5twfEML36hhRMP1ygq3CZNG8HSJwrrbZUVPhVmTH9fVMio6ZdKdMSmDdhHiDMyh6QwZ1Qwg4tB",
  "key29": "3tUbthTECEtukMz8EKZjes4Kg36ZJdyNjufxtNyhAuAAfLec4MEQmnUsewocfiKkCe5hGKjaNJfnwMVRZL4stHm2",
  "key30": "4kykW8Z91Cm6JmuzQdJyCKKq1KGERCzg5bME5b1Nq6BuEnfb7K4yGBuBeCvFNBRar4etwN2k3sY1H2yWCjJuFLHS",
  "key31": "3HMsrXMJRezd7jrXpqfjnhsMGPJHznwReLNZb8Y5JW3ZwSYVBTZp4RPnmSjKb4zLMQqERh1MkzETBxkTgDcwSBQN",
  "key32": "wQ8sKm1HZ5oh6o4J3xTCidCeGc5rpy5mipwn5BJ8CaPfLYjDGfw5Z7pK6VYVQHbpKsPPghL8zufwJjnbucL9Ey6"
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
