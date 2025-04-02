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
    "4W9qC8M7TFLDAPPsP8qa5J4NaxpuFagaft6TPmDsHypnZ6yziiHYnqBQmbn2DPSSuiBSFUNSwTDJuQvhQbQFPV5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvD4aFSzfo7vV6kYtC34C7mA5oEWsm8CViCdpJyd8D2zTy195cyMm3JKpEzvweGiYuaTUX8nz7meJN9jHyEWHJJ",
  "key1": "4QaHXVqdZYGobhZvhXWHrSC5tLJqrSHRsUECFeZqFVb8YFC5MLBiAQd2C1RFALatVgerauB5W9HAmVGnGngfWKTD",
  "key2": "2BUye8b1Knbu3YHj4khpcT4TtAeZqFqNZpHmDRKZtB2toKxsEB5JNWnTUNpbgiK6dkuaGTzSJdW6yS3EDvuHrjDC",
  "key3": "5QrRHfQK2PMP4RYcCEFaha6RiDh8Ur37Z5msE7NE7DhMmC8Wg1FwFy9k3n4G2RNHxS4Snm1fMFkDSzUALHzfKww8",
  "key4": "3tiS3DeKS15VYGXMhfTsDsrhGZGV8VCjQwbiMDQPKemSb5ucJUe3kf3d2SqKrmJU3rxoPWR38BowKEhBsFKErxeL",
  "key5": "5yUeQY6ZPR3vAry742i55kq8JoBJ4ww6JQLVSCEBq9jfg7WFzXQTXvzx9hxUSsg6ryqRFGiNwbAmZxSxAfb9Uqce",
  "key6": "qyx9vaBSBLMDcp8arfohzD45SbTMCQpnBxgxS49xrDQryoP3vMtczCkXNQCxeAx27WJqq5s1Uu8i8DzUiympqUX",
  "key7": "3XkLXuNDcLth4ViAzetwr6XFP1ZKUj49TXDJUxW2sBHam4iB9MYXXXr2eTQd7VnPaq9HKF3CTUxwEYDwWKP7xzcy",
  "key8": "48jaFaeB35d2w3jK5bd7LQowi31MFKTFvsoJ4L5GK5tamzBPbFd7qmcj25KGyuadgRTV5cV66y3P8oWYPEST9aEu",
  "key9": "4N9Hdb1qhqota6exrEL1KWLR696Bpak1ZEFh6cv5z6Ci1SaRXQRhuGq5HPzvt3xcKMTAQfHn4Dktrj9rqdrkymwx",
  "key10": "3m2C9CYKXz2EBiMkKxtusBTnbv6yuH2VQzKrqqysu3o4ThQEjxQemHFGh9nDAyi1NyXipjb9MXaSeYjveBFP51Vy",
  "key11": "2vZgQSM7uurxkSPzHy8dmhs83MgzsCnfivKm7w7rADDT34e1QAgL5HL1gAKR8esDbb67abUYnTvi938eJWz4oLSJ",
  "key12": "37ho36ATG1yRemnhDcbHFgF8zokxLccSCSTYs2AfRozRX61f6ZWMVvB1mFGQdpsAit3ikQekkZebVvB3vEK9hCvg",
  "key13": "4mrp6QXimS8i1GxvARSjs4zJaxsW9uxQiDNBjLCLd356KxnYdw6cTnp76pZBqUgJGSfemBYXxgykkG6jrM7R3KWu",
  "key14": "3TnRGsp5GPy7z2YuuvHCFmqoQN2T64mgpn3Wpy9r9baxA3w8up1R5p3XTsb1AU1YnQHDyF5zuAJav2t4gW8Er5Xv",
  "key15": "Beeg5LrEyavXyPNDKVFpy8nSYHpmXCVf92sdMgCrVH4gzhN3zbEgBnfM8zUujvPnqR62o8u9qESaanhvGuj5ZPx",
  "key16": "37thTiuej2evkVvktrb6L9d7S7hKhNb4uuiS6v5PAERHzfMHCN2nZbHkT1Y4rSCM9Q58nzxLmnKmrf3MADBSb5Yv",
  "key17": "2YW7o2oQmdkFHGREH3ttzCu6ebLDw7id8dsrJfBsUFehjqNkC8NrTuYJ9HoQzxgQZRrwBGGP7YrKLzqKWwWxdZih",
  "key18": "RgfWj1ikgTVpuDwpYbX4aZYMzdS6eBW22htBotrPnrkmdefAoUn3KVkMnb9MBLVQwqrDTVDQto5CXoECZg8dXZ8",
  "key19": "3UfGu5h5wnvkGaC4yR7qA52nbJdhXt2MGb53bsE3XFxaLrcdXKzfDbMUjSswBCaEx6GWaX3Q3nkBWtYMcvrRDQjc",
  "key20": "5fn9cMqRCHMeMkkL7RPaPssfUEnw64CgB959nq9qriXT6k4yXoUU1b8FEh8MA2Xpt9ibrcH3zXHXCwn3Ymg29Mxj",
  "key21": "mMQQRJjfrM4Kz11EehTH41PPVMxiH2jxkU1QcfZRwccyi2ctphZSTxThqniUiFfsvKjSnAhGfKeKDJCfVNmXnSU",
  "key22": "5kbTo8pJrx8TQ24qvUCzNxsmZNf4AHNVQwE7vqYU4zhidFJinLSDoMBQm6VpP15JN3q3UaRQ1DbbAzdkMFxQMWVN",
  "key23": "3e7GUyEh4mB24Gt8BShvaBuFPzaS1kLaqN27KYkRMPVoJqjmadBp28TQceX5b2qZ6AN1buZ2df4PHcs1U65TFbXS",
  "key24": "WCLi3cmZv2bq8Dr6WGPXJKf69DDUMqECHSPLyLEK3Pdjzin1NABy8NdoiJjgtip36y32f5gVUMeKFZj5cL79dSR",
  "key25": "3B19uqar6hHbqXZ2CYcMmbyPvHmwepceEwjNczNnwCj5tzxtV4Mur1vqJJZ13qi3qaDkBcimx2R22vTcMYKy21Uj",
  "key26": "TQvWxCfRkSLax2eFvZWbHDdXxVw1XD1NQY4K8xZ4Qu7Tkcb1xVNFGt8nAaYKVraZ7TEcvTcMwQnrKJdbpT7KfEk"
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
