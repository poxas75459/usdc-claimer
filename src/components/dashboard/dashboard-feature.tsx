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
    "3TCrBAekzx6xA2bqm7ECs67gnmADuiR8cELqpDsRqrW7cG32NnShFnU6snAdNQLkC9FMXmsfd4e8aAFY4gosHMQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3se35ZHLq7nppe7CMXPRt6sMTwoUfPxrb9RG6D3GUuniv7rH8XBC6AVrVfD5YFzfKWmN3j7hrECnWL13QpQ9mNdg",
  "key1": "2m5q8Dh4i7tPKWe6LsSwtCTxgEUZqxyCP1xvuBNDmAwCNbGkBSxLaxEGWPnUVkB6tjWUkAfQjuUaf2czxCQeFb3H",
  "key2": "55ryHRM1TfHdm5E4cioYLNsH5HTDW2NqVgR61VhuP61KfVX7LLyUVux4xzzK7B1kfGeVUaEzAvP91BEubaWFB5G8",
  "key3": "65BjMFKh7C6BPuXRoz4jbFpedWAAaxkmAH6YBPyVy2H5SuZP4iwyeQvxX3TyU4V6QAaK3H2o3gRuqHtB4tDmF4G6",
  "key4": "4r1XDLYGHBpKSpJzm7NGbEnjdrMccgqtQdjGLksvgy7rrrtTeesEkV7LxSAwuDpY1BDxY2TrQUybPJuA9FPH2Kei",
  "key5": "3gxMRFwc8iK5yF5RSxmBACWbzAuQiumSbDEgzScxCSXfNQr4fNPQFWx4eAPMXMHkwo52Ra8uQsbWF8EDvs3JhVtx",
  "key6": "5nnYQVsPvYWt76bCZXgbRyDURo9MjCBN1tZT66YJt5QNE9DKgsVgRQo3gxVSdtsAAAfXP41PGaSiA4rsmKEvmkJ5",
  "key7": "3gH6czq1r4mw5CSLniqELcUHDZpLCdS93jL3XXdV3VY2SpZiKkVGKBdhMYdQtj6FUuvbJekydCrL8tEozak2JfTd",
  "key8": "beWGX9e24MiQofDCrr42bRFCeb4dBKR6wYD9nc57RGxBqUGCMQHmAPr6NUAL8tybcEv1iZrsGsy3ngtesRDqWZG",
  "key9": "5hHJGcRBUGE7f7P4cfa4MBQKo1GBGr1euxd1PN5wCuUaHnNkRdEhigvcPVRuidgiJ2JX7kefPpgnj9ziYD8biuAz",
  "key10": "43sDiwroiZ6oZCLb6cBnSuxUEBAz62kBReodjRdhUvQykxw24c9VZ9rKyxaRhDASy1DbihfXAipWsP9LosEBkhyt",
  "key11": "49nYvoDrSdZZwVFBkva6YRbDJBidX5D2FGiEVZxKPrpA9MiDNFHmGffj8XmFpQ1WLM4CqVHGAHLgwrY6kWbNVBa3",
  "key12": "5LVwpJTt1MsSfpDgk1AsMLTworRGvH3XiLSNS917dmEKUFTLURdWdbJn8hx3yfJ9tBaxxSPoywMaKyn672mywWX7",
  "key13": "4KCZ9r3pjdc3neTejpiyZAoznSQKqft5CuEruG3dxeis4TQ9Gwsj3mvmV4qo4pB4GnK16LUAxc55fqRZePt7GRev",
  "key14": "5oeP6LvU6agjzE1Mq79PKNDusFZrsffHbd3ayV3bm5esVvrZj46kuGWYbSjTBAzvgTaYYydGkuxzpdFDehzGbVxM",
  "key15": "3YeGJMBPvxaZKAfs5tsS1khwvFJQCcVokGNgq1JT2W3wYzf2guyu2LrhJAmCPhAQRPrdrTbgKLiccjDDb9FD16gK",
  "key16": "5jWusQpD6F6H5uQzXgHbqYVQnSbyimKM5539MXqsAEPy5rZauYXbtgaEYaeesVuKFwtFNe1RPQiLWX4baZ6Cwosw",
  "key17": "4UoKjuAfnYcToURcnwTKwXjxWTqgtw2PtgHhVqtVardqhyxeJn38hpJvnV7YDdjb5Jd1pghNw3LqumHRt6oa8NE1",
  "key18": "4mDd6iZCRHwvnzxAnVq3hvSZ39A8N2fkXLVKqFFDq4tx8KWwZRRLZHxFJ4qN4aY1Lb37iqg2rFDzeQ6d9pBEeP2s",
  "key19": "5CNvbExB48SaY1ochEUnHZU9ELoYsX3BV9tpGSE515HSdi1nY9ppe6XxZGeWa6bGQfycMx9YuL3QRwr65n2TpAuu",
  "key20": "3SK3R7KFfJxswSCQUS4LyT1LEdTRF8YUzkq1uUgr1ZJ9htZjXFS6XdqzhTQCKEdfhGU57LWAmmEor6UAmg1UiNKv",
  "key21": "4kuZCC6UX4YdvHH9JWJtcrqGwGAmANAgR5SyaY6nTg8TLR25RSk7BPSXweH8xH1fBWkUS8gK2Q7txc9mF6HJCyoo",
  "key22": "3YnWPDi424eam7V6oGiZiPjMwybxDzNQhQPPzD27awH1Qy4eqJnJrRbaEnzEjaUAMZLtnRF1L52ABRqKa3Dqrux3",
  "key23": "35ZJqp8izurDrfoDPC3W2tbgun2ST7FaFUCRdudxpnedngzjzFTTywjW6DzK1R42iX5DaxEWkFNhsrBQkDSobW7v",
  "key24": "Hme7ZmthTUHoAwS4eUi7AKBR1FtmwBpCUZ7if2aeaQCjp5FHQqrDRSxvfESkn86NLuqLK5vj9WnCPPGhFYLSCGM",
  "key25": "5D4XGpayWpRdpyuwi8VDWwdr8ew3afEkpGvRq1kcSHaVwqTtHmhz8jfTM7o4e5jCkVpbkGQAMPvnC72WraEhMXbw",
  "key26": "3SSS1g2Nx6M4DWPZuYBvVPyA1TvjgAPFcmQLt5bkiwXEgmFJhvF3Yp1EN1FRoyBhBFuwtqLYCY87tuDPR3CJxXBt",
  "key27": "3PDyDZLUGwrk7aibawq1KA5N64x23YnjaRzQre72xmBsPhnpdmMtPnTKrTsyw7k7dAD2bS5KLibQL3hLH1yhAY2y",
  "key28": "61y2BbbcQ7icLRZ9V5dXoUv9c9AU4uA5pcPzKfGZ2oAvbCUmBqAtbFasNwHAkoke8Zp464USGJqYQTYDsUf7pAD6",
  "key29": "2YsNLzrtGmZef8XAvyiDE6ftvrx4HEV3HkHu7aEF5RGW1cBE2hQgYcMYq7wmAitxjySnBjPZBsogkq7U4cPYKUyH",
  "key30": "5mRhY6prMYBjqzVzdN1GNvx2ZMKx5ZR5CBwrwmNVXG2rxGGE28YcKGcBXQXvK6TvBrRT89MTJBUVFJReueNNJZtx",
  "key31": "zoCF9V6urZzSrdCQXNmrzhHyGM5dZ8df8kc7EKkp5rB7xfk1WkfwKet6XAiufqGCwds8oucmtHtwhKqYM4v4GX9",
  "key32": "3PQXydfJ3krfBh9VHijf4Aw57tzKC41aGo94HxFpkK97QAnApdD1LXssPXqHgXQVWhFyPe2ErtpgEL3oXDXSFxQF",
  "key33": "Yv26eScPh9A3ebFNHZPmVo5WyyDSKYW3Wiubcjumkd71vnkEzh4MgQ9ENAaznbFcr9CXJDfJ3TmJcXtTX6CpJCZ",
  "key34": "4S11eRgPcpoF92PQCYyxSD86RyuZ6MuzHniEMaH7NZC4WQriRafmM9PPi8c21EDsBa1ZknWFqe1KGYRK5eaeUta3",
  "key35": "5zrkptCaWqPNExuDjDsJJNYXix19MnFjCmZFcsMhMuYfjNHaezjxNGpaXpYgJAA8EcR8L3mU85Dmb5C5p6Vpvpsk",
  "key36": "3rBZ2D5hfAY8Fh7Acz3GXJFSS6xYzFUH1MKsJ4a4DarWGLEb3aonTi5R2aAXNCEofwh6Av9tXLsFuCcmMpeJ1M7o",
  "key37": "3bu6E3ebYTAt9ZrNKhUKwEwU9Xw9eh4KRhEikB7HHJrwLqAvpGMmLeNm8fG6LKJHmJajDNwrX5vmmNeBWAJiW2ib",
  "key38": "4JevPkFNDQaghcpuQgtKinZmshkM5b3Sm2YjZLDUbfB2iaxVqvEfNqHJuXeGum1W5qFVYLzRDhpBDgNLCNnXJcqP",
  "key39": "LB92S881T4CpH4LNhTRUVouU2Dthtmud9wdG5ADMWE9buJKoahLvhVTecwuwmQemxqSUUvcEnz4sCiCdeY8kmd6",
  "key40": "4VESTAYWR59oov5Dx8VBocR5CMtmKTB6y54z9sAMmPQwswsyrXu8qwLYuj3RhTcewNcNmMhUMuYSxfTxRjc8GPxA",
  "key41": "5NpetBggpDpnLudQF36oPe8Rz65CXB4pkjt4sZNdLsznUgqPWLJNBpoP9AoG57Mg7Vd1sR3v56y5nn9uPytrAoPy",
  "key42": "5ndvWAMpDZzYNtK9jCi5QR1TXoKjL2y87aTHKHjSiSwNH8jW6Fr21HnqHw9X3JoHUnBF37WuXJXh4T2pjazNK61b",
  "key43": "2m2QxoPFYGoHe2qXysXS8R9GgkEBVVpjtzGDT1iVcY8cSKsR7Jgk9TTr9kkgRyoVMZgYE2gTFJy4VpHnht1TXUFa",
  "key44": "3frnLHsUr9sHaNMaKWbythaoSf1XWRkErZoQ46B94Ahb5C8ntLajYJpgVESqRUz4SAHTBXt7woKpKdX6yGRN1SxN",
  "key45": "4AHTKKebCbXa6kHjGgfW18pZWCbMmEMPybEAkQkPmkK4xT3b6rYXxT5KArLFSyFpPrEnG373MgETHb5tDensXdo2",
  "key46": "3K8cum1P2tsxY5epM5m4BYJo5c4n19ijgHdYpVKFXsgAds6YzKkpWKDahc6Dw5cU7bt2TMRZuCharTxBQA12ncxd"
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
