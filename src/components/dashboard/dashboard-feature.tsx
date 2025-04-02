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
    "3hePGo4pQ5mKn4r8Y6Z1egR6xjvUaG6ZFQ87SHAi3nab5RyoXZg4gpGTJT32TAURPexaJtVZBtcwzDM3zwe8WpX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WrP9EpXLNNd2QEXfMKRDdcCxj1xsXUPy27QTMisZZVtb4AmrkEDUwaViUmLcTvvvUJA7WPrVzZsiuNStXenAwUa",
  "key1": "2LueSf7i1Nx19sKPHCiDKGzqck2jtMNLxZ9d7dh2Tr52TJXxNi1kUurG3pL1BnUvAYoLJyjVsMQEkhrzmMLR1Kyw",
  "key2": "2U8n7rzN3Kpj3JXjnQN5VzYALZKjYjdjT1Pzf8Ej4bnnhspy857Yx8qwwFb2mkuTnw2VtR3nY5GjfcgQRAZr6c1j",
  "key3": "TEtpaCMdRXyTVLcRsR7d8UrNNMLK7DNJLB3QT4VT9NmZmhPgoH3uoiwUkwesccti5XBKfaZMwvQpwZXE77cgJeU",
  "key4": "2ueMGYBqpwLHTJyXNYeF9bk15zVNknUobEwfj1h5w24Ee8dY275AhjZ9LgjLwuXcokFqdKMryqPL3dv96naccLUv",
  "key5": "5MX3EjTF5CGSdcQabsC4db71TSdv6M8uSDxxzsWx6hYVApus43rg6VmYf7W9UnEVtFHi5rDp9Kwqe47cZL1fcBBk",
  "key6": "2b9rhUYZ2fRmefdqvWnFyBBFUetfm2QbFNuGtSdjGA6sCyBrSeqq6gwLDNRcnBonyzyknfza3bkGcVHAS8nA2pHo",
  "key7": "5v1q6ZbpTW4MmrVEDGP2wx5A3uRWFQ8Pta1gyEhDzYq9MpATQnZQqNmZVkAWUHGZRJ3gGZ1qUEgnnmHXRMrtyRAo",
  "key8": "4EDBqxv3jjc8iCXdZJmHtTquSw4s8bhNuPNKYUG2LnqfdVTb5dymuUKjqqjhwQR8vraCjAiisfN1ruw9oT5M6NVn",
  "key9": "43grgd7Sw4UX2Bc63hndFBQiKm5Jd392HrV7YGy8K7QBKrWCvoXSwRVGneiaxN3KDGepZ8gv92fAhEquSJAsHekC",
  "key10": "244ZB7ZLZHuFB8R1ywyRxJY4TRFr9sqh3hAdvmT5SmzC3XGxfauk3B8nNC1ajUCb7HAGizAbFbat7eCAJy4mTpww",
  "key11": "2yWkMjiBh9JBNRTUaLGj7Un5CEEZCnxQARPYfrVv9odiaAAR69h4WEcBzSVCvC8xJrfp3pnwgdGPXY8tySwEZwmq",
  "key12": "2GBbWPxJzKXy96gFqnyDtBCKYRkip8mTSRHB14QWKzBHKmNumtP9gETc6f97ki9k3UQb1V3CjCKb1PNdhNdCJBX5",
  "key13": "2ECV3XEPJHfxy8EzfiFyDXzYn6tcstm8TDshVWCzvbRfNVncE3LdBSP1JZiKZTHicy3ZjJtQy2zb6twDmbQ4SoPw",
  "key14": "61amULNe6Lf5iTqPwyqafHQxodXW1mQoxPfnZ4QgcvceTtjywMifHyCbEvAHNZu8BFPkXhNEf66tCNb6L3HkivNr",
  "key15": "62xAU67hkh9yXupKWravj97CN6LDSSa8LsMMKALKTcMhyNnccPSzShxEMrztpXTffinuifg5mRFkLM9qwD58HjFM",
  "key16": "wZDdRFU4LuefaqK5rjXhK2Cipnc2SE9zuPuxBZc2QqgKACoPtf8vThfK3uT919zjWastpmEHXefXCCgeVQUyZFG",
  "key17": "4Gs3z8nJVE8ia9op4ETrHsCo6yyqSVw3myqEePa3rGJWoqNwjCxb3NBKrz9FEkXfv2wKgvwZ7aC7t9NfNUSAHKRZ",
  "key18": "5YwagQqqEcTCnqPgqy78xHrYMi6Bsjq2ehRmHExJs4hBbrnSXzeHRgMenFFqjxuwG4Hwphz9BtQqAvkGjXY52vi5",
  "key19": "4SAjTte2rhMnqbWDg8i8CvdN4QH9DpJxgbGGR1ZKDPBmkDzGnB7LWkVGLKh7uqhJFXJhh6aHs8MzepMQzqr8U7yh",
  "key20": "2DLYQPtzeK1PozkFipycDT1RjGcNuwN8EEswapxCBxQqZhLzRH4bmXbr1DKgM2miuokUjYmPJ6xF5sW4nhKdhjWo",
  "key21": "4FrfyZMZL8N577uJTP1ZaZ2gdsNYTvG2e1Cy29kVj2QwP53Wp1WK4gix7Wgm4JFzu6C2jj5RHsF4D55oQxSNeUw1",
  "key22": "5vt4MTsfVznk6wujkfF3oif9UMrXGAS5E7VXQGFt6ZUo8cc13cXDvvLV8XxoRRV26cJQkP9Ka2SiQJ8WBkM55hCF",
  "key23": "zYUTw7znwJ91xHbwrvkUVHKTmmALvAt5fkPwa4JfmLYygzid8MXAuAcXw2WE7hpQsLcLkpFTqW7DZ4Fp9VaUHZD",
  "key24": "4zsqvjmSQY7vQGnqwD5arYqpAYtH926bu6vZsNf6phJf4SPwnm7oZcEXg3N22RJ7ABJCyZxU4Y8LSueKjYrBtSi7",
  "key25": "4i1svisBJdpPAUySfqpo28PjN83yUJLSmjKSt2r8PEZoZvra42HMjq6cj1XZMWyWZLtsmCXtSy7TCmXedDGZGaBe",
  "key26": "4PCuhsCbnDw3p6Bz7cRye1g2bLpZBjfcXTnKLtRmtyEYpuoo5m8xNofHs7wKxhrSXNeSQrBHDW6bwz3Znhi5tHhi",
  "key27": "35ZFgqqnyhJtX5WttHucNmd1gcBrbhHg5BVn41q8bAxToazMBXCX5yP6Qaxm3xFv9MP8VpaDQJag7GkRHtamQtSw",
  "key28": "2h7Miuuz8ng6Z8Qedrc3XEGwzKJPA9TXLLcD75tysoogVL4NwhDnfZqKGWpHEzy4dFGzbXffUCyjsG5SeMz7o7vb",
  "key29": "4p7RHz1fmmZZZh5WFxrHdwnfoJHkzMAo8bPySYNv2n85VXQiSbVMC9HkKGa4Nahc489BADYtmb7MFVEBhPGFWdfk",
  "key30": "3LWkTSAG5KAjED1Ksr41g9vQqoQayohymwgakdk6VUcB9UhQi3pbSaZXxBPF4fE8J4TampoKSTCKd5KBK2hUdqGW",
  "key31": "2sNZmrh7e2fyh2sW7CZS4CEdbmDuHewNDYQGH26WvtpZr6zBSiuc6c6MVRAaj15PUjsmR3EXBw5pHUqTEnMYBBcN",
  "key32": "4dw1irdGiqXBnropkLNYieX9vjZFwwX25kSydhCZ5RCghecat43cuLESpSzQQBjgmPvndfB2ViczMh2Rn1z6Goso",
  "key33": "55vhmMNbnWCNjbzQrMyBqBkFGTdZQLEWxd3XXkbMHTqRgaJ7thAgPfythJzor68ppCxTWfTZhfaZsKpZsgJm8YpV",
  "key34": "3hp6MqtPBp9Pvg1qpBnZPix3ScFJsLsfs5p9vnBKDBA4GmXe4hWP7oKj7FmuzSyYnPXeFHbURhUKpzfgAi67QvL7",
  "key35": "5sLdTzxCrwrxxvae3TQa2co5G5BKRiiXKfxWcV7y7cAFSKVzm1p2XbTW7SLdmVVtKAMcNvLgBgzb1GEFYQF41opS",
  "key36": "25FcHrpEnvqQD3YJ9JHtC6hDezAxK1e1oCpxFVi5cvzT1h4S7HeZ7opQLodNBQVWuPepdUi6AqZ74TWf2aB79cHE",
  "key37": "4icpamiSz21iEuNw2c5gcF3JXSQz3AkLpsHQw7mUDT5BPwefWzPu4z8Niwa9XvoP4bzUeszBQoXwE8UqtWNrCqiB",
  "key38": "BwAqBusZFuuEHhnaCDAP1UaLygzQMMRujfzv592aw17jrhHc7DGyEvFbZeh77CEEsxgd2pvGSdtGyHnW7SXcu2c",
  "key39": "pbUnz1fJTrnm3M2RH465aWKsvSUBEBwoyXwXg2szf8b4ZKQxj7wjbMc8YBjGhAVpeHSp2Me9m1WckxHLySXMaRu",
  "key40": "26zpLWJjqFiLy92mCoYp43tKp5HvT5Y7Ze94nNNuQngtsxSxp3DhEwAY8SsXaEMQr2KmMruuMccmSp9sUZLb9DfL",
  "key41": "4inJ8HdTR72jo9w5YSf5W7wWJjFPd6iaYgX7vq2YEJ69erw3Csdv4UvPDtHMbeRs8Wir88UUhCGegn3ag1wuDSk2",
  "key42": "26QzrHekAPBCn6W8FJxX9R3f7Nc6QDSYddjBbnRWkxAkJJTdeAV8W3NLrA7Szfa1QEn3GdLPTxteZBEgRvNtWRfn",
  "key43": "4DpKUj2BbEv8kydJTuc8CbAzWEztHLvNDU7tXWKfJmH7Tw47qFwLoN6PUkNgwPGdBhsmhTP6LhxnfZCkBAdPq9oK"
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
