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
    "i9hivkh6e2BnYgybXe6kY388Pyo7myPPZb6JXz79uqZx1Yp5SRhLosh3SgWajmgCpoe8kPVTcMUath3xNckXN99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KqypfYXm2bCrTfMx4is2tdPYvga6o5FQA8preFAoJKwBX4R8QenEZXrd38jxTr1rCvcf3WXj1CbCTgg4oAqb6y",
  "key1": "357XYJpopuu9AKVzsHu9Lr1m9Gcw3GUcp3zKzASurPoJi2fTJ5QdUiebXpXiiX15WPVdSYgv9AhwvKPsBd5vwyrH",
  "key2": "34Z7A3WdmWx5iR3XLpoSRk5X5JKSempsYWUF2bREkZFV8EBtEFrn7GaUxEVMAfifU2trmYxTQTs6uXMQhPrhkTwc",
  "key3": "2gSm3AqnDxic7ifnPM3JKjTJaWRzovWKnehEGLH2pxfCtTjNrxTSWG17yMuYZuF2Hp1TgKrtrxoX6g3sdGhPCzWq",
  "key4": "2apSTe3hky3SHguAheAMHcDcELAqPwhx8H4RSuLH1KbHCw2rQFXuUFZzhAqczu2ADxvnDzk9G8ooYW5QzQhxbT5G",
  "key5": "2NrEpeUQ3EAqg1gsG13bZpHnBNNm5E5rYozKWydGpAmRgT9WGeDZu89p2ehqaYnchztAG5j7JWz4SMucrba3zCJp",
  "key6": "W1AVshEucyr5VvVb4e4hTdUDrqHXHEA3jEY5QngtwmvV17a3dvwCKWsKMJz5EYaLBrzKceMsYegRigr51VF11t5",
  "key7": "5xJY91eEfY59wUmzFveKkrtybjUsz5YKRpEtqNSSP8kMQvrgeaiPBc3AnHG5LxUA3dMvd9e1Dis44YXLprU4PW4z",
  "key8": "5QbLbLAc2CkHgMXYwveXCWtR75UxJRo46X1LVFmTds3zEeeEE56U9BV2bGhTxAdqQ82LjMM1C8mfAg7pxWaGi5TU",
  "key9": "2mNw9w83U68QScxtDVDk7CULwzWaQrcE7XwxbvJp4pWtMVri9fQfcSgY3y6FnqUasZobFbavBkwifU6x7xRwzZLC",
  "key10": "3pNQnBWZDMHCQwmfKRrkjBjxfh3vFdzRhXb3Ctjffd3tTvRD2hEMmMZSekEjt229Wzhmh9DKZrMfpaNbyE2um1mE",
  "key11": "3sFBXjiV969xzWEZ4HVMZuN9hjE5d5RcTz2bxqePiSmJTRoSrMjoTUHyo2q4CiTRZhJqPfeJiqWZQy6CkVDbe5Za",
  "key12": "63fqh9e6HGDLtFVdVChmJKHar1PE5FHBFY6993W4HqZy3HMixeNbPemYU2U9TE6CPwENJdAjEWF3xu9GoJMUvboz",
  "key13": "5QepM2WyvSr3zhGgf2adxiEyc5UXPdVveL8SisDXFa638FigoGTLgxcMXnYhKaKSYSyx5CNLXEBwDdVmDxhpsDRV",
  "key14": "RWoX5TfMnYeyGsQL7dX171ikJNLWqgExmKhGYMMvG5g4TKXHiigiyJ6oDn1jRdE2XhmJTTUL4jzHtLryTrBVKoZ",
  "key15": "2MyipydPn82VpZu7E8oMc1ZJpdKiRxX2zKjkBTaWyfYYhT8NMMuvCZxzNMhZRdcho8yeV2DHSDMJjtzt9XdvANst",
  "key16": "22fb5hw6BXnZ6RCZ7nhfBp8zjFs9i4h1SS1SZB8LnEq2FYNAQUhiCunrzqBNsak5gGKg4Xve6gF672VwBBDxHGoJ",
  "key17": "2tAKnNJK58cxKb5288pRwfiZgYC2uu2WoCQQqJe7pTX5HCY6kigJweyFfuFzB1TtWVjeDLmuVSc9MDzHTieR6M84",
  "key18": "2wKHSY7QDM4Fh3hPBXCsn3CM6m6Fg5yF5tqUj23yKP2uiv7MN93EpzWjbZ8Lfn9AggvDrD653NC4uARdGboEfWjM",
  "key19": "3CNUUx3pP3xTihRtBLCbRdMTpYAV7xhvxE4LjCuVvHqNu2Nq65KTPn2mUMPVmMwY6tpaxheq7YAh2pst9QKxmRGQ",
  "key20": "F4HKQ8nLxabMRED6UM4yBtNMMeFYgRDD1QNf1tYEBBysc7gbMXw91FyccpQrK3ZxZqMf6HRBvTzPXM8MLawddkQ",
  "key21": "4ExxLggqtiENzpvJ8Ch93tdeYKYCGkjJ7ngwwCv5nZj7oCMhpzBv8wnXcwS7VYzk6yVD64UQCoKbxyKKQtVc67sP",
  "key22": "5bBacuh5d4y4RukLLTwN3BxYofQ6BUdn1r1Ph1rP1HsUAsCHtcLWTyT4CHPnAdFmLFpcYnxVB8c5KCJLCFtz7Pkv",
  "key23": "3KnBCaLxKB38Zp5gfEH9BoRikPVFjboHPaMVK9HSym3RqEoes2ijbhtQCBNPatE2dQrZHup6jnDGR66xb95SNNPq",
  "key24": "3GpKgCTF3BZKyU6t4bubih83WgqRGfSWtxejsiAwmh5cbJ6KMNWez1SdUA6YP8odxM8bWvsqyPXQNBqSVwLUnxVo",
  "key25": "2W87HSpiwuXJCpGw2DJsREJiwQK72von7KPLtVAcoNc8HGfFsut72RpaEtCRwLtHk5LVrom6VPSz4z4yebRMa7pF"
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
