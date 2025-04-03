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
    "2rUq2rMp6xSaL7TH4bGCo748un1U3e97C8ui18Xd5HUaNLWctMxiZ58P84WhApdUE93TD9rSnDsmxfKFD7fr48HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RSZPhe2rkchsvvZ6KTJH5vFEJScKwPxqap8HtU4bqr2vVKNSZmywB8jFjrTDaKW1KLPAPLJ5S5zUqJx13XU6iq",
  "key1": "2Fkzv4TGTZ79wNZMTB6so2XqWNxJMMPqNp1ky12dbbg59vz63nxp44b8HQ9iNtkXqSxqgnzTDHCX33FExjhQs562",
  "key2": "2D5AZvBcqSrs2WJGwtvCABPRqiaDUwQq8UiXqrBYKs7x8eyKCoe1pbi15DgNqxAW88reQkY2WeTcexcVaYeP1NJP",
  "key3": "65RQp4ohw1zzquJGcqqRcfRTYPhRT5fbPN1PnsfMih9EAocGU4SaEQyrKKYEUPp8CVLcTYrPDtvnbcxyaQoH8oPR",
  "key4": "2qrVGhqy56gNtX4swj1zNPpk2J83XNWHnqdFpLk5L5wtBu91e5LhaDs7AHaGakBFUcqivsvaTwAGvjm33A846NU",
  "key5": "2UuPickdCNxdwVmFeiDCc1EMLjnkEyJZcVy8n58Jc4YPZxziHsFaivpnFLCUoKonjKBqWzKya3hke1VQpTwt5mcJ",
  "key6": "5ADMZ2L7aDs3JoYLiBf9orRuqvxYPZ1dFELcAGCP8mj7wJSF4VGWbuzZPX4qZxwrbQ6GxK5G2mKQyyZDt2Q4goiY",
  "key7": "2UyEtBQKNzLSP95nCcGySerqYdVvneVyHcpWAQ262AvAtcrX455qKXeLfUFhqhQTHZZQPysDpcHpvABvyzY3otmj",
  "key8": "4kN1uJFXXRsA3v5qBQPp9HWGLn3mNGp4bChgFdCwp5CyorqFjD5RSMdGyKCp3E2qwVwRV9acRAC7JCvWsxooeztD",
  "key9": "43c5xoskfWk4GQrBoNVQAVyDDqVERGiZhVPqzwsDkbCQrzDrgpz4zF4sEpFAe9abuZ6JZYzzGoNmUerXKsMZHGf3",
  "key10": "7r9aVwUkm5vYBdQjsH41bDSuroCrpd5wMQg2DTWGKumMU7tXp5bVViUsRhoubLmfzeSRkwYTAr72A1sqjHjXoKN",
  "key11": "4LGDbRZBgndhUu5ajugsD6rpwUFaQNjoaG37g6frRDnfHM27tCcotWzagfCqR6h5sCTGDZ26xHwBk29tQBP6ASEA",
  "key12": "9Vgf5XPkjibEcBFkcJHYoN7RQURMAWV9j6oYTQeD2unrHk3CHCM1VoBnzjxrSZa9YCSM522iLDcgiQBr9mvQkEM",
  "key13": "3AvcqppwSHhvakCSd96LyEUfcURiZtP6ZndhCDz8nRZs68kT7Ls5PQJEgzw2ZHvfhzxDC2YyUS9ERZYD6Doi7hg2",
  "key14": "umqp5gxAJNUto1aYhu5wUa2QPc4hXEcgJkisYoaSVA7X6XtwJCWLEinKbjbwau3udJqWR1qPom7SG9dBiyBRxzL",
  "key15": "3yrdLSc5h27tyTvDF6u5f3KBVe8yPxjss56sUaUrP1tZSuFVrEYZTGb1Bp6AjG1HL9sGVoovz131L52xkXtcAktL",
  "key16": "4zYZ7s8WLDj1TqkwULrJMcdGaae14TUwpRsu9pRW9qGkTAQnNVC5PywC8K6ovdFB5Bq6AsrXL2NYDc2BSF1wYog7",
  "key17": "5NToPNtVsYoTjEHaPsV1SivcZQy5Hd7WjWfp5Vm3ozunET9zg1HprusAGGf2nASQKECuHY2YHEPvHa9x9J1C1Nhz",
  "key18": "3nsZefpwuD53yafjVMyHMmqJVuT65CXsvKRa1Tjq6mPoE4T1MDZJS8Rwikpco3QfeMGhmk5Bik4andFULmHWpZLQ",
  "key19": "2Vqojun7L3Y9AzPLrXjoa84gbPRsS5CRGAJXvxJ7Uag26uu3cweTNQ2uNenkGWZvVn6wzWAAVoAchjxLPu6WVew1",
  "key20": "2NZ7kyrZY4bUJHZ1z3pLd9BhwCR2UqhnYyNSNBz9DLq66ao4SMMXL8fkyokvc7dncuZNhF18Xvqp5f8iyEKoj1aX",
  "key21": "3qEGr2hbU5U39HWjSegrbZ7Td6jDbc2eSLcPpwn852BjxNUvA5feaYWv7vWdSZPbMiDNriKCHJatrk89ze9E6rpS",
  "key22": "4cVHrLxuBP4QFuMV6UomkwpfXJfxJKQzFHCTR3nT8wxTpGnsxjFnBcq6tuKZ9WVtRMGzeHZ8m8m5mU1brAuTtL8t",
  "key23": "639RvsvP44Q2z26P1gtqgYY3n88sNDDo1TgUdJEHNymb2SFGsxWcbhS4xZNeFhfz4U2Y2BfEjNdmbEwFtFpPBsHF",
  "key24": "5cEpRk7ZCgLHTLP8pA4D9GXdEhotvibAAbaT7UKFbQRCPqwLkvxqTgDXVQnbGDsEgYe7UArbsHBLkJ3NpAKuL7Ut",
  "key25": "3J7CbsiPjSJvkiWWz4uau3rgXWcG7F9uYvxb9ruyC9MLLQHpQCZjkfpnDRvmapT43cFYPhQ3EvfFMLZ7ohHSpd2X",
  "key26": "2jMD47ueheCFKMtPCHu1NUAfhB7jHHc4GhTrxVAHdMXSxqgiGDELWT8zVLnQNWn875ASonXeLRqW83FtYFtYUSPr",
  "key27": "3ba96u2kwAzFU3E4xqBpZxARqVNQDBhhG8eqjfHrMQGqm3Ec6obH1nc3nXyihni5wwuy8hjamoHNaZKDNsTdyoo",
  "key28": "5ixDzb7rFmhBVqrJYyEctz1fkb1enzetLq1vWGeT2wNz4bfCoDsQztVkRcEiFrvEgUG1N6LAG9k96oMoPQyhLWsm",
  "key29": "4jaLUfvMrjB8PvXH2vuXBYFh4PA1yKLPA6rGGBC1FJ3mvz3rGv1ovGZ5wDxb4qpRuhpy5sPWh8bLsHoRBnoNhG7P",
  "key30": "32w9Mvsy7NC1Dp1CcGtGfiiEo23YGByjEw6rt7zgy4vqrgFSbhR9R69CiE3eP3SCQ1ZuHwrLjDr6MG2gtXubekm8",
  "key31": "5FPqonW5DtiRcamcX73vPx3sTrZ9cgvGBCEH3Q9suenTV5HhAShvwygXfpchTkXGJB5HE5gGWZRGNDYfkgMCbL8h",
  "key32": "2gwQMUBF9yxZKS2czrYA7hnAxUcEQoE7dLQWrLnN8s1hvJJHBq9pZ3T3zhXvr13artCLNPBi9Cw59PofifSsL7wb",
  "key33": "2kVbHFnDNNAV8N9JNJso68EqbJNsb13mLesd4rzwZ8UiMgDojoe79gqFVurZati6CwrB6Ay4DGVcuD7ZAd2pUdY6",
  "key34": "2z8RrzwynfhsRSfLHmukudETY7h9pB2zz8JqBrgoN2LVcw5tdwWmmhhehmHV66JPR9qsSthZaGENaxGnpqoKz21Q",
  "key35": "GnP65ZzJd26pqx7gDpoaoUpUk84QsPL2pCPh7h7CN5WqpkqNZ1xJeG4FDzq47r85g4V57mEZhw5XQSsTLv9NRVe"
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
