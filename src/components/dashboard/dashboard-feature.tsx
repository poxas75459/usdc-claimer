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
    "2iQe9uRtNxAN69FJ8YCJ1KFsjVu883aaxmguaYJ7Jt7JKjgVdKxUFk1ahV8UNEPoZoaY1raHbp1k53E1nt4YTxx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcFtbSBwr6irGSYYbNeGh67swYYq9WAue1tLTPwKJ1UPUaxwUs5ecDHPXbm7RzY8GELnFqU7oLzr4JfTzsfnBzr",
  "key1": "4ug51eq8ZfRLF9YgzKryPtx11GBBWV6bhuocUWeSJWyvvY56U1VPNochvTtGPspD3aBo1Zw6kVFc4pzwFeKA3HMd",
  "key2": "2XQN4P7wAB7oQoGyagQxPq4kQJNEx6stCsXUUtxEdRt8syudsDVLEbuBrCxyzfXXqUSB7oxzsc5yLVy3L6cbUAtz",
  "key3": "3BFfUeQu5aAKaNhkJhbYJ5wC1E5HC5mswyFgkKx4iJVhG9yksxywJMYaqTQVAhmNsfjDKvdDEHYrvvNUsn3E5kHA",
  "key4": "WZ4p2umHUddn7gcqHpg3y2BkmEpCDuEurFy7ZHTvTCjmRZrPJmaXrGGdtfgAPY8TGuUG3BYHqpL9KJg7mYUj17T",
  "key5": "5z7PFYgyYApEj9feZkydaqAPMNrF7Wt86xU8s5dvPH2v9tk4oGDgJLFkZCrJvEUN24GDxQViheVbQPngfdSUme7x",
  "key6": "55VKV4meZ26A8pSTo7CcaECWwoHFrNrbgr2T1rTZwjrcpmmLsGn9yGuAzyLLC8PSzkw45ZAcbiP6ZL4aD8AgfFSR",
  "key7": "hc39eWTk6hErae41iVknaX27921YNVaysAvcED7XU9zEaSWGMGnuFuVFpoicNfSAkREFpQbbn6xx49X94mfFUxQ",
  "key8": "2JPTjd3jq1WF34Dbuq1acHmVbZZTFy6JUck1dj6gxAKp7gmvLocPih3ESmQf3Erk1engcbTLTavLsGNufKNZViRu",
  "key9": "5hQQ4xi4aMAXBPRYtrB8EBgNeoRa4FnvdfkZM9HYhfAmow6cBTpHstposKy5tBFk1t22r7mg3uRT82R98jwsa8W2",
  "key10": "4NA2mxayATgKEETqMNzu1peDxZRnW8jLcbUHwKmFGESLVcELM6rB1BCGsPbzki55aePMEFHAzDsAkBtLxPvGRPtM",
  "key11": "4BytWdVvQsJr4DJCzyFw6w9GqzMHm3zR3LNmCd7bsnCdDV9r7iiLvkDkDSuiphwUPjTfLa8h3KmMfsk4YzPXMakQ",
  "key12": "5JPK9f5srmjWheyHF48hP4wUUBRSHgWCpxmrtVJW73SzqfSz6AjJN4xrjynz7v2esvGWh82BsYwtUPhbKv5VTtBm",
  "key13": "amNik3GMFGkoKL4tpJqVDn1iJCaNFecdZJCrsynGdR4iLgvxjZUPUvN8GNgKWT1EtJLfqECZ36jsEieFXeKnvaA",
  "key14": "2LfZC5zmk127A2obbiqJ91n4nJkqaW3aJtKSNDzBdUxskWKhcRMkC2v3NTfNwgTZyKrWAN7QFcDEkNNyTGXhEAwk",
  "key15": "d7H9piddE98YmNf7ndqv2hL5KZoShf6b7uoeNWp1RJFWowZntmbRZFh9ADM4JeSNJKuSTw94ijLHPVDZWSmJjRU",
  "key16": "8BLQ1j9sQwEeXj13zsAaFMFJPre1S8qRBzn7qLLxw3zkbt79ndYjF4roEcRcYm4fGfqusbHWH1Pww7pnmUST4Ks",
  "key17": "4RbqDBnPrxZRUK3MPiAEddpSXTmytN2HYWWoLtFKrETtGPZhFLGr6Ry9ieZNdkaBpugRiBm2Fx3UoS7qPccWuuGv",
  "key18": "3q5f9DDx8UmYvJSmTBRUKaJHKJKSSC5ztv2dQxp9gB5U2YwzLU7XUf4SerxLwyPpXUd2KRjEAuKZd1XCEuhLyW7U",
  "key19": "2sajYi5WMtEx1q4ZqMZtuCDdMoCnNdpZqYFDx13sC6JtChnH2PGCgbF6VYUBswux8cEnXzynSha1rHTJzpMAVnYS",
  "key20": "3Zshoa66g96kybYAmiH8TksCH5QWXAd5TMWzPNP8xyZ4wk4FrcAJJsnXV9o7t2xHg3HMowbioYeGTvaHdAs9iLX9",
  "key21": "4UPDa7A1xumfu28CX7kLgZWpU8Wjbq3VYEYQRW7xzU3ENmMWQA7cQ39bEpx9t8PVFn9dVu4r6ESGQEg2RLZS5nVF",
  "key22": "PpSD1kMUKWdJZ8NbVmAzXRzKXxJjUoaEQWEQsvFYVTtjwtE878QaWwz2yBefcabYvSYiRmyTz8YitqnK5t6npiQ",
  "key23": "5NRDopw8Yvsxz26et951y8idvWA6JmFCVwTnHhixo83sVQo3iUrto2DXDPqZkao8EBeBqYHCzstrhwuWtzZWYTzb",
  "key24": "CA322r2fYJE3ADe3HpVrg52KvqgrAFxPEkSMRuPQ3dL3uJxzvV1wcBfgCtDdZDRBTPMKdsd9x3Dk4gjbxTcTcrX"
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
