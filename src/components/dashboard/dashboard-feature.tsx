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
    "4GyXZ5fhqJYSExDga15d2TEvNQrUsQqAyUoNZMmkgNNCFCa3ksfcjJNjCA75jbZH3CCQPDucrgdfQo9fXyoUdeJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atwkjBjTQiPywNiUrfXtn9L5EXem38TBdDDtW9Dtu6YbkkgYuqyTeneg2tirBKBzWDicUNczRKxp5bjXMQtX9Yx",
  "key1": "2k2aN9DNoMkiQdfL9KoG4EnH1USYbJse7vzv5DqAftboZiT7umEmWh8wjze4CzuD63GvJ561TPLnZ3onBXrAuaxX",
  "key2": "3puNeLcyZhEZBwd5cUdFkL9hrMXU45BeYo3HiVVFybVd9YzVmgtsqdecxX79xZ2G7vg7ohA3TAwUmrJv9juAUMRP",
  "key3": "4jj2e5b5PJpyJ5zaz6SEFt16w94bvyD7tWvENbht2ogTAtGZymdgdrmH21rTYTJvAHFDhkkXW2itLTazduChwFnK",
  "key4": "5NDBE3gN9WQfjknJ68bV4Zjf3zzsqPCCyB5JfNbGTUVpxHoknFJAYYNKvKEke9DADBgrHD6h7LeqZWr7DAdCw9FB",
  "key5": "3q6QyPBbNgCQ5F4jprTQ6x5wxHCum8rWQLohJdUrTTj1Ysw19FYEmqbzEGcaUdGCpR7Mvnt6VBDKwvavcEjSSh7q",
  "key6": "u398KGRJ6hwWMTXDruz24uJYE2QbhgernzUZMwQrk7gRdoKvKpb7BzdmJUWux5KVZUKwiBsQvd7d1UT8EuUf1L3",
  "key7": "ArqSTxFA7p48F2HMjrGjA4Rioyo1hb8FRXWn17nXQ2stBxchFPAP94CTYnwfwBhuAhsRNrXUS9hdWookbgoxUmy",
  "key8": "5MJNwwrfUBemicYBbLend1ERPtPMgpuDHQWFE8gkb7XZcRAsC1z5gvFCXubT5bnCjQWep7PYC8QxB82GhAXR2MKa",
  "key9": "5xD8SWJwm8e9nqhy1ik48h7FTpdoLau4ptTBdJwygdtzDBtBLNZAyeWUwBsXLKQXjVwvTrharZ4wEPHGGoQxCfxm",
  "key10": "fPk7ni7Ty2MzyGDQDPGNn4kfSgdPB9QkokoXyEB5w1aRuKmMdVgJM3ieBJSg5hXdHZRx8NFkdq5YNepfqfdadUZ",
  "key11": "5jE14hpDB2bBBhYGXtvCH6sYBfLXUpoiwWzjYQkox5fxAUUmxjautBs9thwqonc7xqdN9MawDkirhqLeqH6biRw1",
  "key12": "QGgMnJHpK9U2MGMaVnPvqB5ZJZoGQe9YY37gxEUg7Xy21iASvyKxX9CWzDfaTBhoy8TJmTfJgHs64oTv9z3VsmY",
  "key13": "4zbKN5bGcK2oGiJJKGowXW1KKkmqwx8kPpV7BuozTCoKoT3Zp8s5GwKXeXwrEjbx7CiqLbis3s863zCpUp9B1L7z",
  "key14": "ukW4avMeqHSZawCWn8izK5CsNTk2eLZNz92uxnEfgTCQ25nfcKUfxn2fUoBraTjKKjUomx4RQ9VziWH5AscFBK1",
  "key15": "2pVgPCQULNFvCJ95zMTZnkRUs5Z1ssMwf4GnGPeKZBfkmDcJJ9k6GdLmYADko4Ggze8DABYkPZ1g5Yk7hXLnYVYh",
  "key16": "3pbKaCBxj4WoBFubrVsWghPVSaSdne1uqQKEpzsPvz2p5QQ8po2wYuhJx8MSYRnNE2emymCzjevKWu9qTaKo6rvH",
  "key17": "CZtKxH2acic2R24nMQsiGLHUEr5J3hL5BLxEszVbgNHAqZRNbA56DnXrBhJqNWrke81B6me5RBoNhgDkRGFng5s",
  "key18": "1nsk5Mu8FmRR4ZEDDyVoyFn83YoD258e2PiNJE4yFTK21tfkhV4Q3fG5hH5tUMdpjD9s5eSUmpLcZKYXEt6XTpy",
  "key19": "3Lby9yVnBdz9PaEVWgRj4ZaG286XkuAgZuK2s9RAbUWYbFyc69JpmnndFEyy2KFzDz3P6dDDhCqHARKvU8F1ndjC",
  "key20": "2iy1Aq8mZwwtsqCpxf35BPWYvxHiqeNvtRHpDnB2RSr4i4dcEUvxrCWoXL3x7fp34RLKeXCHoYbsQ1ppZhksPXJ",
  "key21": "JfxQY2zhJkDUdibiW6M6mfEQzowPThNYsi2BpTe5WddX8zrhRBxvtN1RUeG26E7rFdAXfqGcVo3LvwkYJLmzWpV",
  "key22": "2Un1WVnpqC942cnitern3cLTAA9hiJfsfhSFUUdYL96fkjcMPeaMvhb5pccb7M7fDiwQyVp7cveL7guWNffHHavu",
  "key23": "ynbrAfryyC8Ezc6fg3EMZ7C9gKpqPHcsAcosVA5Sp2WkuzwKuD4cKUymhcQ1eR9ZUwYZLHZvr5MvQLRWzqanJjL",
  "key24": "ekL1kCJf7DNKJ7RyxSUcx9KCPJRr4QiJ1HUjJKwCrCbAzmJLipyX9FTiZS4DtF66Ecf5hnEwKn2wzCNu4LzyFHk"
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
