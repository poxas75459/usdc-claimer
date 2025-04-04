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
    "5KDRS1eeVJEirYX332oc7H9qbVtWyjkyECtUAh6qf45kmXV3xT885En3PFdXzPfmaNWqaGCm7H3WDiLNHYHqs5iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sD2iyc4sb9GWwgnXADJLcBRGXZ1x1wNkzSRcvG3rafMzFDAEyr8wU8P92YG5huke5NVQ7LJeXzHGdAPC5DPum5B",
  "key1": "35b6Bzosh5EMn3TD7JK3Z2sBdiSvape44oraQ4ox4sDnyycCQUpNRdLzUGQU3cWEMB5D1NEEnjWhgoTBM6WzSo6H",
  "key2": "3traMi7qZRtKDRE8i61FAMb2muCksFo4DByJkvfkPGkCqiMKGEKyGXwLJfpYziRe71mEzzGqbLXhGEn7vyrR5uCF",
  "key3": "yBVJwLyKL3JXhR8FnXobJjusT5aiaeF53sT1vUFdVXgk6zexrebCpv6z2vsHRnupd6VAoux5ZKnMBhNMKcM21CW",
  "key4": "5Wv5uZgcLoV1kMhLb1FtQZA12zLKBEtcYpwy7G7fMxKqmYj8oqLHSwc8hTfkLQXQCvz6Zv6DxT5sn2ZocCVvc7MW",
  "key5": "4XHscDJdDwESEC1zt1SwP1phDpqTJaMSzjDXgzbqC4pYk3VaHgvg5aBGLvC3m9eXrg7cVKeeyYVtsPfoMmBurYD3",
  "key6": "3rgbiMukbSDFYfA8UpMJZ2RocP93E74JxpBbCMMy79BQxorDCtWq6CbmYxbCH3NrSzu7puf2wAp5a2UgvF9MqDEQ",
  "key7": "3K2Cs8jZxAtmve7srmcDhHcnLzy7Z8xuHcc8VmrWR1dKo4Bq1GtwaqbuP8vS67QLUDZFX5Lg6JVRjk1wFhWWjUS8",
  "key8": "3ESdPZZ1BHkTVp9oex41z4zjLGMATrmD6xHkbmSVs61WWukcscX4rPnRMZZRQCTbW38nSDLGNBHbfPuNdqXmPJ7q",
  "key9": "4KFG3fvH2iCGCWz1Jfn1SM4Sm8NXNq3Ec7vAtZS8TbwDQbvkhsn1DghRMMFMaqwphBGuLFdpAG6SjPkjoR6wW1AW",
  "key10": "5wpiNxRMz52JTKWGc75h4CzLqg89oU98EUHSuyEuHKyQKoY9e3U2pVBQddgHG1oWDrxUh65YYULRJaRuWcjApqCw",
  "key11": "2dnbqAPiqmitNTqVb2wKTHVGydcrrLimhNPxFgRYXp4bGSvqtAw1aizkShK6BPXtsivU4tYaLVP3nb4WWv36nHPm",
  "key12": "5PYhvJ5SxwHhbjnWQA2aLttgenY3o45uWirkLzaEb4PxdLW3o5kqCy9qMaDcZ7w1HDzeFRMvZU8b8hHHyW3vdbGS",
  "key13": "2GpcWC13w7HNJ6zs2GeHkkZfZvMapfbvW8bec8ENQJwCLiDgCSZLSdK8d7EDJdi8vWZbmUvnRy8ujmTqAhbhDT4x",
  "key14": "5WAptQwG5ikguZXHcgwdBGVo8WfdyMZjBHdxqX2Qmxoe9YDiY8f34fbmEQSSBvgXYGXfgphc12QwmZ5Nex5sAAve",
  "key15": "5h2NzuNwSDUcCAQnEw4nncicA2cy1ptQk1PQiW3zfaqtC6feeZXneupebSd34EkizhAftUNGFbsZLDR92RPvKa1k",
  "key16": "2Rw1rEqSs3cQ7sUPhbyUzfKHJkMDLBMjsrVUrrvq87cj89EUS4mZY7rexXAqqg4MYySaTo8UQLShtGcYjHWenJLz",
  "key17": "2iMXu3eGoKSvw7UTNGK9oLYQBWpMfT1AzwNAcsTovHdDakznrzEyXGcppwp8rYX5Bd7A1Vab3HTuiAr7NDXBXbQ1",
  "key18": "2gvznb8kwp2j6oXhGXLBWdmpPXGoLy7kf9j2CYQkmiqKVtkN9xqnz1LQnoHftyKFvKewACbwF7XsYrofgrPKMd9t",
  "key19": "4vkfHTrRKCgZoXc1ncaEn1JEsCPVW1XAaTGPuvt7Wd4hgV5eg2JfJxiWGJbjnJa4Dicdi9pvhc9sWhquVShf8JdL",
  "key20": "5vLkbKGymYsBgWHNyp2YfeEpJ8SPj1ThUKYK8gPh2NY87f5MqT6bWLQWZiWxYm3bFbMw9ACrFrGpD9qf9FX7Vutw",
  "key21": "5urtw2UpVW3DaV1SELscLCWDromxRvrjubAVWacMarYGgBpEPZALMv4fofGt9wECHmMYmebaDQbLUQqvjD2Xra9m",
  "key22": "4gpy8qudjQf7B6L2h14YS99LhSFH36pFhyuS6ajnkbJa2PhMV5ETyRJWve9YkYW5jVhFoL2bu8BDVjNyM2Ps1CN1",
  "key23": "3YpQ2c553kbf4gowfY2jdfo4paPS2fM1mGDUP4cnGg1bZpLasdGeVwDqgDKbZuRwVFrNkMSicSEMJ4Ay7qwVG1mU",
  "key24": "zS2DabBnWTRnqxKrBgwCdyak7jWuUxGw5HPDdgrMygbYK7Vzw6jQJuRv7ug2nbTsSLDAMcXCrt3HkZKu9xZno94",
  "key25": "p9zhWRQt5KdU9jrRM7xosSPphtiYn2f7TygaU2QmB2ydZ6zdex7Vr9HTZQBnDE6ozEhA2p4YGHBhJNaj25sPt7k"
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
