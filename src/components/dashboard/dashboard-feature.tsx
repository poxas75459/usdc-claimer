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
    "4KRBt6AYzndT6TRWFHvUQ3MUYz62MMFZSGF4bUU7jW6oBVXiPVW9dZxxLBhAvSo66z16XqJ6QctTHWjN7GtWLKUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JeVppHHXuSMum6Y6QQvp4PSisxfHB1WRig5EyXULRVLRkNaU1FfRWvGFeBNDWcEFCtEpSxe8uBsjByzW5nbq1C8",
  "key1": "33fdtMpzkXyCLkG7F9PE2qBtgwkHibB7RkBEiRJZ1zir54yY6Gj1hsvJKgEYTuHZpsV41K2tLLkQVAtPAWib7Xss",
  "key2": "3mZcCrUQpDcy6sb293rNWnN4gQWam8FGiUi7mb5uBxUio7RoHwjVBPApnnUtKz3krwUg1J1fAv5F3F4BhXdFryH2",
  "key3": "2beWige9hhrXZE11KMpaSfpJ1Vh42PFRi1WrSgUDFvtHMw9qPcPQVS2JZNBntWPXdSB1zxYcMcf92Fun8RAZ21ZR",
  "key4": "2AANM3iPsj8hVpS87SGzkgwMHsKrn1CHc2Wf1vnGDaReHKyBLU98GhjgQYdBfwzRkRaB7YJts3djTkFFGfJb3xaK",
  "key5": "5GSEByxJKUezoHGH7ZgGiS1QMpK4ZX48NkLfMNHZV9pPC2RLYdzRpaBeiQTtuDUaU15MrDp3EBtGkvPL5PXQr2ov",
  "key6": "4B4FX9K2iHzypMDREuiks9X8v7Dfx7YL7rkMFEnnc4T7Av6a9m8z45vQMCDjL66Hbthxj24rcwK49hUTiYjR26ar",
  "key7": "3Fqx5QwiWWJdPNvVBZPv9kw8w2sqsMPGHiCsb9mPc8ao2Q6d3VjKDBNxwFVpdZ9y7wMiYJg85nNL1Z1GmoGTzWZ2",
  "key8": "35KQ2axxyRQDjNLa37BBgMY1fKsFgcTpUehRbCUEEUCYj9uKvUsACxzxeqnBT5pou9UMkKnqDWA8LzLkq38rXyuf",
  "key9": "3ecW4Sa46uFLB5psHoy1aBBvwf8HQVRH5aoyPe4F72ENyupJnFGLypM3WbkGtE73HyeMUTuQXgXQC5qCBVmywBD5",
  "key10": "q2ZAe32cFj9faVEzvn8hXkg2c31Me6sxpSenFv2GtumdPuKPZpAHUKNejNXbeUkwbNdt9pCD8Ne933FkigQqjW6",
  "key11": "661yXRfEWjpFWWFuPjCCuoyzQaJ6hXnvFBxt3QffLahzHTmhbaxgr2HX5jiyoPAtstkgeGd4WjPMUByw9d82iDTq",
  "key12": "5FxYkiEL8bKdKPcG5BJBncWJKPjZzmj6RdzJDkLwofHU8CqcfrNWQaNRWjEe4vQeXkp3LAZMTHJuZEopJpXTK1WZ",
  "key13": "2kFVS1yZAM3VMBZNTLMB1xXGFjqNEvzfAm1hdFRYcLRWbF2GcAaS9reRzAfkAtVYdsLCwKL8begvbjZmx5JiYb2o",
  "key14": "3cMYbSDorHAwLyYsLCbTMzbTJUwWwsWQnWZzdxVTo51PemjUtxX7Ny9gXKRRrnWDCT5A44vwtGDi9C2HfPFCJAak",
  "key15": "3u4L9XDPY5RvjNYz6ZabmpWtvBAoPHSayJrZXr2cUdyARFUfHZS92DYtFViiL2excyXG9qTjEwmHrUGr8zMV6Qxt",
  "key16": "3UTHXzKfDwkKXjqR8Xrfy64U66hQDRtcfa9a57TKyJrJ45mJ1R6cwiqMuJctra5pqUnSBp1fRfxGYzU1fqsMYu78",
  "key17": "5Woh2MThC5H2RUwmUrRArKwvWZUdGrcPDGKGV4KbS2z1dtXGvhfgJBrSXnvaGDPNALuEhYeraBF6pVLKfvqa43qy",
  "key18": "66D63rd5kcpF6fDT5TpNjAyohQT7KhVEHeLXT9LhK7ReMEmrxY3Ntk5vDfxa2HBQrekDvT5mVRZuprndJRRJVagS",
  "key19": "2QaEH4TQ144B4hWGwCihE2EdnrVmvK77ewuL11FaaQN1rr4kTy23rugTztv6DC32FQiqKU5ZjC6sy4FWQ4xHzkZk",
  "key20": "5mJvGyAKDuQpDZD75MC6NZ9k2xj7X2xSXFhS4jBGvnHYBmmh7CjRru3wQNygFDVUgGKX72ptAf7qFe7QmjBpgYyf",
  "key21": "5LoZrwNNYCamXsShqnVA6YtEmDuvDbHWEiAnL8A83idhhbkzkkwMkiR1tmU55yBw7RAXE1v2UZTSta8wiG4iXw4h",
  "key22": "5ZmkqZLEHV836j31RodtgwRDvC8W6DN8oZesf8yhe3L2W6Urba8JG7RCMTPoeyqwEsJUiUmfCW8E8yfpT4RaB25C",
  "key23": "2PNK92dSd4j5vDsG5dihaXQVYS1HZ3ySxRgthBSWB3BQifJ8LUgvHhbXrUrFJ1Z5YNEp4Lo1eFYJRbdc4W8hNVvT",
  "key24": "2kn16cwRUR6eWjg2PmGmkJdNRrmpMmnoyDWaBYryeiKLFTGTTCk7BxUgz8eo5ARUJoYLqayLF7VY53yBJ9pPWpAX",
  "key25": "4w6UWZjq4CabJzmGfruuHfvUUFiS1b6MRiMe5kV5WEp1M36iMAhFQs6D5Az646Nnmv6QhftpPH82eAcCFFycJbGL"
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
