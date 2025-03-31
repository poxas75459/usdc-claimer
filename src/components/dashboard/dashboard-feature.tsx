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
    "3s1CPNuPYqLnZh7RNzjE43w1e1iWhY1wvfQzE6okkiVo6CHhSTX3iLWj5dnvWopVnoxBE2mzDutrcYC4mDPo8zCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiWSRUdGXPvM36QuMaHDvJKfRL4QDbbvLPHF2HhPEkoBJJs55W3bUSSzK5JfdHTezMNemj56Yv4p25mkqEb9w5Z",
  "key1": "33nLRD7HSHWGfXLtaB6qtBD5PkxknZmHNwD7ZgsDuF9Xy9XRr5MkwGy5P57S3FeQmpf1UaM1fv5QW5QvJewkhd7A",
  "key2": "4w4MGSZdom7qbaBqAVRoDHTSqCXagh8NCXD95r5FraxDE4Zr9bccz95yuUapdPJMwiWVVrAaArFx4b2ZoNF78nbp",
  "key3": "ZhUCKn8BHozuebPDDermsj2ENeFtUVU8f3THVygkwuqekduZ6kwT2zs6UN1MkM8QmuKRmh28GbrreG4qwy6sVdi",
  "key4": "2TbP2k7pvsrUwoFk88WiuXPSw8wRZ6JbPy56cy9LvajgGesZwP2yEoK7uh2BEkm2j6ZokVUMMhgJZNQRmRQU3RXt",
  "key5": "4Rfv3r9dSpokYFT1PENZbKygtmc5g9P8YYLYaRmBCiB947ZgMYA2uuESUi1wqGiq78vvKoM3mGpvLCAWrRGD2eQf",
  "key6": "4o9CZerTUQ4Xppdt7FMDXVEkNe13pha546LpWbEZ5DL9Dws1E4JE6hJQb1oGZAkMDwpXbNhqQz4KvBNcUYBgYNHX",
  "key7": "5oU5BmPCzfLHFBETer7FUVxZwk9gdpHmL8eU74fyLL3XxMWEWmRZrjP3vcHsHL5VP5BfmRpwgwmeubEFkQtCbKGQ",
  "key8": "vt2LiyKaQ7Va4SGZwSGRHCpSLkN6Em5xD6MtsG9T4puFeG7rTUnPUkuF9vkaW9sNL8yhCvtByPNs4ZdU6DCF4ie",
  "key9": "23T6mc9MUxoW12C5SzgDZUMjPMGihwUPYPEDadpGVfGYyNWbKDQix9TC6g4xgiYsK1icEGaWZnPppSzwauQ1azxb",
  "key10": "4wrXW51nEwRAWybA99GNWZ7gM7yH88GeULcF2XUzUUSBeJa7LM9wpBcJFNouFnU9KnvXvtVSA1xfvcRGfLEqG9gN",
  "key11": "25YPeLB4pFXrQw9wvaVFb56Z5oKYBZ3ocH4FUQwfprKh3xvQyyRrXLivTBYhwBruATsmLyMu4aiNLJJzLYk9hVHA",
  "key12": "5kAwTfqHM4dfk2CpNqWuBeskW9GbRS3cu5qJh1AaXvPBciBLpHqKnDptNVUH4fFdSdAdeifNRAFYCD7RPXkXPbfQ",
  "key13": "5BwwUBS7HmyVWUpB46xHTAZXwVYjmaVwauyJe7BgvrNwzUW8GGfCX6MdibeNGsKiMwjrPguy4HSQVf77hvc1v8pq",
  "key14": "5KV2JTEB66kvzpq1yTcM8TfvsuoTGrBaz56kG2E88eHMEtyJ52N55Z4LWkEumoYGg5rLPVa57G1Hm3LgAVkJArsG",
  "key15": "L9fFg7r5tGKW5vTZ7FMqSzXDRcehnSy2quR4UbnqYPPwh9MwQZPrtqzC7Uu8R7DwpdRm6dhmPehnCM5FoX2XRSq",
  "key16": "3kq7i8ZkTWMj5PtuJmfdpg7Ft1SuEky18EoCWVfdhxVsr2Tbp4UJV1VrjSRiPddwtvsgAXgc4TweDSC84hQbKzf3",
  "key17": "5w43rbzkULEea9ofU43RWU6r1sAcYsmt4PSz9BJNho9cWNCEyb592phk3SRh1iqV5quj7G1qmg5aihbMpQ17qQ3V",
  "key18": "5ir7yd27di3bmJASiPUKc3H6zjvXBMnQWdJmZTPnx2E7pDYut449PwizN1n7jXS9SrXToYNCC6YxNc6wi93DNTeT",
  "key19": "4xNms94jLheMLo8uKvPoxcJRXZYw3hvFRhaTYRZKPRxC9zdfHh8R8Nv8J8jbv1nEqKdibmJHL3ieqzDXto1Ujzeo",
  "key20": "7ZgtdE2QHFx46wh68sdKJS2pNGCrMqYyzCUEj8MJJYM7wyYbVmfkWKxGjPbKwptYzyQwWYSSfXRKBoBg9ith8JQ",
  "key21": "3SbJ95eP1eUhsKVQiriswa3g3p2eFXtGVJGAmC2vaNkN76FjLGPNqD8avPYJWLsfVECHgSpbuKB25pvPcr9fyeFU",
  "key22": "3SLpH69A5F7Mmqf3PDsFftELhKqMyUmUzMPLU6iPqWK5E83XDMAhBJjRLmyCkHhkv7mmcHWrz1ZxMo6krLqCCTTc",
  "key23": "48kMV8hcPkmED18N4QtavuJEu99MDnrPUscAwF7yGbheQvCP7pCjETST4A5m3gj6DscGUxEC2ZnrX6JbpX6ZD72u",
  "key24": "2M5vBgqwtjBWWGDBs1vrwKmpq8uBfikH6mKMW9vgn9NgN5s1oAMCWrP4VN8GfMqWhyJATn5eTrhrssAnq7gqrNGw",
  "key25": "3WoFUPQhMFvXvJnbngyYpL8p2Kg92BUKptnRVExQWqHyWH3DCzWEJTsfcmyCYmCN8apCu9yCVmKmE92b4acnTxVk",
  "key26": "5diBfFj9u15nX5PJ2Z8KD5y7C715vZj9dmsUC8jb8wQHVLuBiyuHXrk2k8ahTfZQj4SXLCdHRFucL6ifzJp24y7g"
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
