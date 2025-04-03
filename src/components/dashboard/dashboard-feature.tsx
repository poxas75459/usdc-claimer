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
    "4si16s6CuGkCuU5c7do9tkRJVVAxRXZTFKbng3PvdRsCLvoe71umptF1W6eXV1v9RZKpN6L1EoZ2uxUmGoug4nYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sEytpnkcf97L9o4vupxQtHbFmSEUYMTNDnKKegU8nXe5bDfsMvMghgyubou5kPuMBeQcY4oEDviC7SGwKMQdmx",
  "key1": "3NKkF9jLz5W21YQ7abkyv1CwpCDo81a7A95uFJXJ7rW2XSs5Vki4jZi2LjwPEaRr5o1AGTpMLgpChYLni52mpHxP",
  "key2": "4A8MepZ4N4h2VxVDkXEk2wXzkknKvMnyaR2rYa1wd1HDEGqKUdwyRX5bXNnvifqYJu13JwaKLM13nNfdSW8h6k3R",
  "key3": "9kzDgK5eSPEZxATYAv7uppsQH6srWYuT3HgV7tsSVHeHnExUkCXQAHrn5kD6kDrgHnZ2g6fNck8iPCFrRQhyodk",
  "key4": "2veeABKNc7Yx9vUBqSBUuyiDWeHzdZY9yCPdpFFwxdYHRtYjsrLNCdbio9k4jFPaRhXtKH1CaaHreuCK9qDPXiS7",
  "key5": "a8g4DTvEBw4379Wdtw49ambavRfRd5xNVdjoRwn1FwL5ef6NXvDti4u2WKVhc7GXYWkrMEKrM4nVA5hBqByo1iE",
  "key6": "58eHdRCnQEwnA8hcozUC2BQPRYf1Rugtva1SsZKJXsC1fNV8MJuyBZZnt8DjoQTesHSc3PDNRJuPJXwjKRuC93x3",
  "key7": "27zRMJG598Aqo9MKqasJrQM6efsTRaQRx7KMtRyBV9Vffax73cwijaWXpkQvq3CFX5HxwqF5bseppZGimXaR3Vzi",
  "key8": "5SPcJHYcuuSk75k93nJAR4coi7KzKf6LjCGvSVWytbHfF14wjUkZpCsCjKENvedR2GJDpjFndFEbn1WCioyZ2rPs",
  "key9": "5Wyf8iApy41YiUyyq3PqsJ7fB5dGmPNMkohJECnPxjSzu896js9uiyHfFEXrkxxUP7qsXsmBp1PFnUDP1nGBfpYc",
  "key10": "4PrHVS4EYo2qq1iM1XE6CAyAMBByb98is9AGACKs6Bm8BpKq6nomTY7bmhXJFg2WQQ6Hg98kywrdXbCGoGEMApPq",
  "key11": "4PkPb3xJPGwHnq6qiN3ZGZrKLMSkTF4P6vvV1WmBmhGpUz3iwbNXQfWywDgb1VbD3b1Lu7KekJ5mun1i7kTotfu7",
  "key12": "5tjPAuQ5jAtZrxfubAvL1ZvUyL3QPdVKguAvASkvVwxac4Jt6DArBwArxQg66CovXR3aVuiTZAjW1nHYYu5hWHMH",
  "key13": "4za1eXD5g6DMHvnJ8ZbVdMARtX1jGZKUagzdUR1TH8kKJ2CwEZUUNLj8z35oaiE3ExoheDXGi8Sam9WUP5m8q753",
  "key14": "64kEDqf92ZmMdpwDPBFVF5vhY5Y6ZZQU7DR3ckJSZPMapo2CRy5RVhyq9y61m1mbAawQ7Qdm8XfPFRtWrULsbvwR",
  "key15": "333MeNkw7iXyL2AtsuYU5RZi8sTsxBdESLfcvRnygrQx9wPBaLXuahEwdcaFZxZQzAJF67T9GBpRsQpQVjKSbG4h",
  "key16": "pdAUnvFo42rbouRTLpLukDHHc5kDDUPqNqvTQ67MGrpemBby9iaerDFGebxxZjqSFZ8ag4YAWpVZ3AwB5SJUpsY",
  "key17": "56bXScxY8K3Tm9nJMKSSp34Pihre4DsKmQfv17VFaFcwjNozhfDYDy5bh4aNct6FqbnJFU6tR3PBSLEPm2sp6dYo",
  "key18": "5y78qvPMGS2MMkcmzZFaVV4bgHSLzCDUUVNa3cF2dQYpDz72HKtPNyb5e6gbyGw8u8oMxVCdPw8BgXjtpjTBsmjV",
  "key19": "oXkQ7v7PxtroZ4HCPopmZp1V4VyEAviqT8ss3y5yhRHjk3aZmEwAoN3TqXNtPdCLWXE2dbnoY62j7rvhpmdXX9P",
  "key20": "4BZrTmcMpYjoibUq7mXfviz2Ay9H7thXSNnnWEn3axdTNtMehckC778jx2rcoRsd3U9MdWAWxYAhs5ptkhgohcHj",
  "key21": "3YUXK7S5L4E28W2WaN3194Kj11V6PBU7ebcdyfFbFYyg3Nfi7PN4ciTJUu3bzoDpR1LnNkw32QMMvDQ9o4SraA98",
  "key22": "4nqhEQuwpFX6tjW32qjLmTq888PAKvGnfcKpqSk5jdJTAw9ukkz5SmRLrbaWWMFtxCrsPGMgD6bBSfSscmykSFEv",
  "key23": "5nMuiXPfw8ar5155fxGysV18FijFAkjRfBuEy7SJWMRMsvVyfawQPpKRu75QtcXwhVWKmDJW6vCxeSLY9jr1ahxY",
  "key24": "3wdVLmikfhUDyiyCCeZYzSwe6xbddd9Tbzi95QLnH9NVTfqn1MQeGcLFVTK32REzPQdCAQ6zVdLefr9pNAH4e15e",
  "key25": "5JJgpE5iuuQxsv3hWWsG9qkzPYscTPcWS6EKWjVsbZuFRwR5vw7U3HFjruHJRzVDJqiXtdu5MZ3J7QD8GvVTzXfx",
  "key26": "2DwmgHETvdmpPZ9iBiBsyRyHJKX3Ar8L8PnSQEyRohqjvoeniPAGeTR3uZA6jtKqZKEUSm8f1MjGeRZjo9icULXq",
  "key27": "TLsK4mkvcBUCZTAYEhEy3M6Hzw9tDVDEQPZNhENh6FqFbxdwm7z21sawVRHX6XDtJFoeFHZBrYFmjTYvohSg1PH"
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
