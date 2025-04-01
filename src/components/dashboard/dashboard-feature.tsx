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
    "5CZaWky94XR3aPo7317mDa3nPxsarfKySCfyC4GfLKDzbcEHZ1TrU6hZbEjcxcRitEnzaoqmdY58EN9E667sbMFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bArLWVTVsyXxVwbWumRtnvZMtPPVnJgnnugBK4hqe6rbavrEqPw3jTPLXLwJrUqTgmGus74KxdcU6V4aTiZ78Bc",
  "key1": "35GLcRY4wArNsWmn1Qe3nXYZkf6tpnfw6R9EvjqxKDpmtxzE73ok4nZccGChyd6jjzvHb9BWVnZMXoPwNevSQpNP",
  "key2": "2pzaJAMp5wLqibucLwxxm46arQKSvf26pKQM3V5Kyw1EtPXJDTbDuauWdZqYB6svwNnsj8hTtqY9RqaGg7NW6Zyg",
  "key3": "2DCxcoKM3bvhXSjjaYQfbUk4YPxdCUbisr4fRvGNm1kwe7F9idNgPSrpZm6KiMUq5FWWke1cYwFs478J4K9j1Fwf",
  "key4": "2aev81q2DkZPpTsbQPxiaG9zXdpEYkHjeNqs3EPspauUu4MJnwD2RFe85qL4mpGUfPKxGjbZKrmMtNTLv75vg41X",
  "key5": "VMVcahZxCAwPAVNzje4YQjpte5gqEpGgzSX2vLUgvfWS8zggTkJiDvU3ELexjMMPMzJqiBZXufJ9rP2bXPy43PT",
  "key6": "2CVo57ypePEZheBzLcwN7RisxwkvwLnRbc6G746smtmDnqzPVyK9R8Nmgwx3bw3zk1cZV5ESijAGNLKDUVYxKJRu",
  "key7": "M4Fp1Cc1x1PnkFz1yuyZ9rHQiiqA3zEm2q1TsqwiwCfFW2yiUTJbZcxY4LYV9eeXRR4DRghZgWCnnNKGbMg2WzT",
  "key8": "5FdoE97FhXf5yqBj2GiFWshG3jVNRAJ1PJmccVfwqpg5vEYfvhRkZV8JkTDoAArVbpXB1ut2dkFXRTes65ntAe7z",
  "key9": "2jEkZqhmSAsAo5yDiBSXjQZXSXXFrUx9wunSgYhog2Z5R6yTAwLNtzqEWJk6giHgzD22G5sPU1JMmV8ALhVLPttH",
  "key10": "5bwN6r9AsmtT2Kdc9dm8qS6qU8WosHqBTh26cwxGTA675zFDUzxoswqyMxq5oTbF1a7bumLzuk8oBAJTF3oe9BTQ",
  "key11": "2Ta4QeFe3ZpBxtz26oFs53F2VsxPyL6JrFjYbD91KT4j1PYz8RmzgZR5qhQdGKGZ1dsb9VgonaT9bTcSASVXdKEa",
  "key12": "61Ucm4grjKX2ThpqcqoevJfFv8299S7rrCa9JcAivtmcQ9RfVYHWGv2kPgggpUgaYE9WGB9txfAmUasxotizodHt",
  "key13": "4dmheCCsr1rwCL7h7ygKZK6hTWWRg3U76XBZJSUFtrPh5SrSpPKwVjA7eDrw5ckVdhgLwtdn39wE8pXg3JxGcBAm",
  "key14": "4qnvpZqNjLMUCFbKM6hs63vbtfbHuX7yuQHFuHkxrSwv8mMTWhGPfLXK9pVLiUddQEDMDitVQJ8yXTuL1HqttxEn",
  "key15": "4e1mB7GSiPGkmFZ5wpUUpSbk2ieR4hTZoyQH9Php78mVQEM3gA7SCCbhfdMWx4Vu9Ys5YsZtinojL4Xg5yFipRcf",
  "key16": "4vxGg994YRf37QANaTLhXmT8noZoekgaDcbCG69A2xzaHtLBuDErHAt3ovhCNqH8xPMWaD694wAHJ3gVDc3EhPpV",
  "key17": "4sgV56bpenq7K2ZquX5ouBtEdhGXJEXk2kGNhrXjvWFrsDLY67NDydKJpEQUmcAWDDS6SyEKypaSMNxoBoMTwNRH",
  "key18": "59uX1qZtLK5BqyTwLwmHMAa7YwhzDaymEGdMQ1H9cjPGk7LquPZ38cvXVUhtUr3hrKV9hYmyaVAMfEmZoToovZ9B",
  "key19": "3hVy8RUHyjtzJHMQ2cWsbgPzsgPsTJ3B9thW7KhniiE9Q7L5W3dKV3XuDor8vyCRAVQ4h7ts652Q6M3MGixKgpdm",
  "key20": "2jAjiQJigVhQwPZhbq5fpWcBpYtWjzPKUhRTiZGDSQS5CsscTXs6GzdZEiehtexca56vhf1PXgcaJVpPD7DfmG8t",
  "key21": "5Ud8ekqR5u7qcuNeWY2uAtoKhpAaCuBC4b7nQk3pJsb1Ai59CKi1QqCuPNZCuxo8Giu5zwsrngMGmoCYEDAjFJDn",
  "key22": "5sXHWCsf3t47rUw31XZz4mVXyVYBG5jiuw2iiGUvBww6PrbTNpKc6Kfy9gPD8UqiTFi6BkV2dZ6qUxwRhoth9uM6",
  "key23": "BdhQ4xfGfXVBj1f8vAy8tyGPVMhM5wyrrz1pDAyK9d4eTa3ssLdJkZWF9UTdYJroj4rEo73w8DiRZnvYgpy6QkD",
  "key24": "3ucmmH29cs74hDNs5w8atbdYzyg7Z8zxJ4ipUMEfAuuGpfnp3V3aUeL5LGDi4HijN8kdUZ2kK9Hxenz8c1cY4tDU",
  "key25": "S9sw9XdHAjXBWpVoQnsoGWeHRfY5ZXbTn9kVHGouxNqNzVCEp59QJM2ZFKvGmkqcvUbes9Dq1x5TZ5jySYrpPTV",
  "key26": "3HieDeiER8rz3Gvshyzn9z2JZcWnBjYtw2x4e28EbSU2kx55cH5k58TVPcBNNCejcVPSrgBGwPV9hJUoagEupFw2",
  "key27": "5ovPiNCvcfF9DKDgDRBwqyPefC4oNN1pKxgRDyUcwRd4dpQ9nXbCgAndhDXgANhwQA8iqsbUv1LXC5uAsQnnkXkh",
  "key28": "tg9XbSqFNRBvhmxETrvfqZicA1a3qxFnnujz3qtttmxL3AsrY8SmpW5UUz4STnk6ZQeeHYPVR8iFWCzdxT9NPuX",
  "key29": "3iPWJCXDEVctrTsUP4WBeGaVvTJV8UAk8UEw7N8uJqssA5PqHoFnFG2NpPk189FmfGTkGDAjGV2Jypzi1RbnYzhE",
  "key30": "3VKGqkVVsUUb6cxi6FvrZZHxt8de753bqdhgmGVwuVvRdDNbvkEde5rt5n1mSh9ZEjgNLbo5uDkxh2nM2JH1cJ14",
  "key31": "4uQ9baBwi1QMaKVpFr7n4WMD6RVFpv1eLJzvLPggw8i8vnk8wRKym6p8diiQR9bLmUsgV9dx8NVXbjpHuBzb8thd",
  "key32": "4yF8qPpnDvpgso6Z8zdxT5aKgTCaYkSBnSfCpAiRpFc32zQ5pvpbM1ry5dMVaxxB29CFVq23qZXgt9Yd8PjznqWm",
  "key33": "2ifdKwr3aF9H1ygcX29XveYCFPK5gjgDpfETs6TiQy6ZcTtBjpv9CC1286Xjojdm8Ejm2r79VPJV6FL3mMbZKSWq",
  "key34": "3zkikpoixX4xR1j8Cv3EYzetgXp3gJ53SsAmXQdxsyonusgGMVarsLBq5e9rgxBfw8wcdXWExhj9aL1Ls48XrGT8",
  "key35": "2n7yujbFWjeWVZAdwxvvLTdRiicqj58FvXT6bBng4SfrzjaqASu4tBx5F3xtwoDmgjNsb8nGeUAhyD5EwimY7Pr",
  "key36": "KL3w41L65zsXAyngjcmNTvyN7XFM2Qq4Hvx1dksNkbXAVukx926hwg5hrwEgpv8hfj1mG6yoeRB86S3rP3gz2PD"
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
