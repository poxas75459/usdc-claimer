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
    "3gc3QFTSQ47ZCyiVmiYGL8GNdXAZXkLhCwKdrtrHX6R2XjyeaQGbZB4kHeZWc5NEFmT82F2tczsFCRdRuT3mWiHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44sXqD27BXoCVDUfpsFxEoFJ1gPWg4ePkz5vKsPB3d7rcNpBtPz9H8E62YEKJ8emzRhmGpPBVGMzELRj8FYgM7cB",
  "key1": "dWxAbtCZGK5xv7svnf7PWRx1hD1m5anqDd8F5wcAuFt5ovziJkMgTfu3scYTGUXnK2AagQMkTgjNUmnJJbs7SjE",
  "key2": "3HP4rbr1CAWRrwwGp8N8jnfRm1DUTJUzna2yXHY37xkdFnrNM27vS5nBXYWvFnqgh2hvwAstih3dqgZcGes3oraL",
  "key3": "4St7jF3DFvDx63DFZqqdZkZTaRf2kU4JoPoEDQQfGfr3evfHU5XRBLH2hW4DK8Kw1yU52nki8TL14UYKi9WBbTEZ",
  "key4": "549yMLxajw6DEt6KduGfjJWVpCEZkDXwMgN5wcWjv8Wc5mfx4RzfGNKfGy6J7A9sVZowEmwCf8csPSLx9m6Vr25J",
  "key5": "4pcxYMWV8UviByL7BJeCCSYBq1UM8wGHRwFYMmbh2b8PCNNavJ6pzfynxaFTQ3xezk2vmGxr2QUU8tuiqoMY3Nhs",
  "key6": "5sv7QJboHDT3rJDCExD6AhR1LApqRSiCz7LYmMxmYyVTjmUtKugPt89AgQbdCjWxnpHSoub6ACm6qLfvUcNUEuA2",
  "key7": "4YV8wbJ2Dic9CH1JD73vWuN92ZxjznztofV9CP1Pe1oz7hfx41uCuynAkV6SrR9hqFTx9LQNq6wbKw5ZARMJXLqD",
  "key8": "55DBtsZQ5eoLZJA1eu6QcSnRkkMFKm3w3w5NgGL7cbFPDGPmL2ar3jPprJmuA2egRUBT1Rh3BnPDa1GgGhjaB64W",
  "key9": "3Ex9ArmMTkUDNskSfciz3RxmS41qqfUGEj9GmTg4q4PH2ZHesjxZua5PyuFHKRqYyVVfRh6r3V7wjxG34xfpXg68",
  "key10": "ZUegKtkVv6ao58foE8Av1UtztwkRJ47jHWiz4QYqZ6xVziTy4ir3agpccv3xJpogPPaARjM5drmWAMTJHfNAN7d",
  "key11": "VJqQtrZBqgZNJrpQbaSsfVeR918T8tomGzUu6FSacXQhwj3N7vzuMPqPsNo2NnmUFc3UPNhspaqZUFmDBQ8AcaX",
  "key12": "qChhP6c1MwgV6d4VBPdfjhDBsFZBReRxkh8R2n8tPtU1YXzc6dSyxATCEpebCcDwxRdw4NK7G5a4sXcymQhNcPt",
  "key13": "5W4suJCWfvteYZkjeW3RtUZxpgJAaG1MxrUbskJsT1gFovo7haJAYJQP17WD2EjiHyLnebNZ3RExp1pE8MTDNYt3",
  "key14": "3Xer2KQEDoECoRs8cHFSu1aNmbz8rqPpYEkwy7urkTE2cQhLUjZSCAkqK6mt8y5kPVwQd35wYyf5ykDufYbfAuJ4",
  "key15": "5kMHPcweDdsL8HQMnAWMdT1nDC2uTpUBr4ULZL7etTDZ4bLkTuqaSVGYsYoTkJJYowv74xLRapLsgfT8hCZUANPD",
  "key16": "5kzqoUjTPCjxX3tiJis7qNVsVuWY3dWupdh4DoZhvL2oYXAXVtcnhi7X5whd3YBuhKKhyN3Dqimksg5jpwMoAZX6",
  "key17": "Z1bhZZz7B4asRVKyrUouanaNg8P4eaN2UU6BzfGBUB7G65F31NW6LCqhzaRDE9kTJsWiHzFiiXdyCBjQmX84sq7",
  "key18": "5MWfSt7BKTJPJQkzMfocM5b52JaZdnKccQ5cBH4vzYPr2oRMu7X6h4QkLg2cEcrG3iGobwwgmpkCUovprz9exagR",
  "key19": "4q2JpEyYNgd7ksEtHV5TxtYmfDyFTuoTmyNdKHFTdQc5S5NPnkmnDnDcG6JAcWZBNHbT8dHNUGvRbkAbaHaqyuHF",
  "key20": "4PKBt5Hm2dCvP4LEojxXAJXDvUVRLsxQgkWSrTJHamgckwGft1RytevSz9EoFUdyHFW7EYpu8t2sqVxrsFvXWLyj",
  "key21": "36GYg7HYph3xbsUPkrB7pUBoTHBkwqvdqwQXRcKbyLzRqN8tA1RXMuz64DDqV77KhKyFBU3eWFJFYdMfFohjExz6",
  "key22": "2ZL9rWAdtYt4JtMxZZQg32Vb1VXdeR9AKkTPfFao4Ub5EUFrZD29cqxYS3Gzw4vw9pfGehvTtcduwaYoQDTWLp54",
  "key23": "x3BPrgEwshVAufmyBuEQoEVhp7Z2KreJs74mR3umM1zTLhSYFSnFVzUEwZaKU6TVo8aqVAm7QYxUSSvN97Enr6L",
  "key24": "3nLKZDi73Q9L69dYgiuvZfME5w5KHH4eAEmVbkCpdj5yJpZSQthfD2yGL1LtaHXMeJzhaYARApp4JjFu88kaGuLY",
  "key25": "2MTLrYv6H2tsjooLhk9fHtv5SoUo7vHquGijQVMGpRARPTmbu7rwtfUypNorFWj2LeQUZ6rmpbra22cc6NiY7YRe"
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
