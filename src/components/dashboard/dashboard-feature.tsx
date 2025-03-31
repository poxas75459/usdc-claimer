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
    "2zXpbo6JhMhHArZzxN16twqDegwMSu2DpdNQsDwy6YmFyZoHbBgQ41A6HUsfL3vhxNwV3A5zzZ5oFuRH5m4jzzp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3pEfNMqKbgzzZntMzzGhUVrMMaB4uko8jK68xmEMia8PRhoFhniECYTn7wP3QTKHo9Hat6DG1v2gm4CNC4EUVc",
  "key1": "5gDw8NGQQZeDtQbTiLBJPLRXSmT7GKVZK9wHffKt6WKWbZBKLe2YZvcsta9EETZnCBGVUaKVNPjfAWMA4PRUkoMv",
  "key2": "3jg28Mcf5KSdeeQVXa6tNUb8FFP3RT2QVPYcRwfaEkWNZiSZvU3UAX7VR2yKNKX8jCNBMWtfRUeUXfUw3AbeQxvG",
  "key3": "3ZsKpars2Q2y4ndKovrHZypZY2hTXntqszDASqrtfa6UY54qbRL4tY7StCtcHpEzxHwDG7aaXgnJJ3SzpBZk7udw",
  "key4": "4LmvKvwAhqxmgp6uGEdhqZd8su6YmPE2QLAdfMUGWve6uyCsB81dTVQCb9rLxCMZkDhYkKwMrv9ES74LwuaHiv7g",
  "key5": "3KWMGPXT5i2ixvLTNUZsSLu3T6KDu3aUVUqHeyrfeqjj4CrLsY1nxy8DJVBR2LX2GDxVeUauA9ugWHraL5A7qz7k",
  "key6": "3cwEdyV8J1YUh54qT75PvNqH8PefZ33UaQUd7wqCfGwaqdoPB6zMUftZR4ABZWouqhuwxToCddZ1Uny6SjoSDk6z",
  "key7": "5rvJJXGcMnwfXtPyP19JhoBfyKYEi3oruHVHkrSxT3YkwFhvuAin1c2tjwc3gPudL9GLH76LVKUF7DiM9nv7uppv",
  "key8": "3bVfA42M39KDF6o6C3G7ZtHJbndm7bswTw8DP36i9ZCqTzDcE1CKWtTSXbamEAjnb4bfjwfTx62TiKkMhi27vvS4",
  "key9": "LJM478vYx1k3i5NHsh888mGkFEXZasc5CbtdRbVrXbqk7LGNC61zMnzeXCmAP7q1dh6ZuW6vLUxBF8YmEPuww1z",
  "key10": "2C8rNPQDSb2T3jr7wjKRh1hFuqorezcw3nSEm6Ffbc3YRsAFfJiTNrTnr9NCAojCVS18HP1L1je16NCiJQ8Fysfi",
  "key11": "3AJfGDU4otSieratPxYawm4osTNotfjaZUDy7ATQV7WokrG34dCg2DRvfUZP3BkVUuHU7hcXNedEpkM154qmwSCz",
  "key12": "T36JZAE9LshUmTC5nKBSM53dqJV9j5g7kEQduPzLWzD6HCvgcM9P4zc8rrpGs43rtP3YEcVaC1BZc1ws2nhxgxG",
  "key13": "5iswnDqALkSkwAnwie4EWuX1YFCbuX2ZBrze1ccnnzKMkRkw2fDsH8EeHyMhqRBVE9sUTZAS6tz6kucPUU16VWwM",
  "key14": "5zRCXKhcC7qyojL47QcdBnhRhwrarJJ95C9PWezESGB4azLmGod1qJTJ2qyWnQS68vdSa1dN6h6HLLcsT2Uvm3tJ",
  "key15": "61zY5tWh5buLzJinx1qVniVhUvGddNzQzf4B9hRSjNcwfXC1HbGShpFj6z3KJNQGX4pT3ZyDHSv3XphasHxWGt3f",
  "key16": "5uN7i5eF4Tb7NAS9ktqRkXWu2k2jUUtL8DLz7JzmzDXGjeSBtooZu5fGh2vgGViqkfvDn6ZRmu9Jq9Z5QSYJc9DW",
  "key17": "3vdzYQYjWodHoXzAGF9hT7Ggp6XNgFwwAk8zUCScZogAgp1PyFKQKHMK8ernm1vLANLEugZj2KbsSGVyojnbzD9M",
  "key18": "4EHGNnFDRRxnS9boiiiwioEf11A9bxGnod9rRYF8TVyA77wV76qH8MCo5DEJZgk599Aef9gPdEE4JVb44k6not4G",
  "key19": "65RWJrvbUwK4srRFY7nDEKWp57sdALXfxVUu9YdjXDUUTdwhW1QMb7vfDVPi7Vrr78sjLKVvrARynTqfjor1wK3K",
  "key20": "4MYEKvynRvMkNk4iNNc7PT3XuqiPdF9MG6N8oSn7XFTZFD1q64DkRdYKoxd1zzxGdUN4XSMHmbukf8vgbeeJNKAH",
  "key21": "4QUWGciw7tL9FU4cCvgSRfRPw6SDMPt6j37T7T2BmtmFcv7a6RFfrMWyqoqGcfSaqxcMZi3zNZ2hHHUVTkKY3egq",
  "key22": "65EWHmME4qDPM1MRmxxELBpz9PoPmDtRpRK2gjykDY3LwARyxLKLD7DyWwH23cMpdiRJ1VpdJD49tACF6U769k9v",
  "key23": "4sWhVEeqKP3KEHetqgnm3Tb8o2exbbJ5FX4wQYC96upNJfLmUM9tty8aqcRA7wS4cZszSjdVJJfNyykC7SkvYtzt",
  "key24": "3HGLWbBkHKBAYh56vg9bjQhJeqp3uFmN3RMjc1vCFFd6ZMWebUofAvGWS4cdknTK7K1rz7LwRy51gBJEjQAih4Ev",
  "key25": "4hBXpquSNgN9Navx43C34o2uBfbTX7GWwusZWXjc1BxT7WugB2c9JN8G18vKG8E748gnA2rY6zaVQVo2RezS4Bzr",
  "key26": "gJv5pUZjmxBKhz7gpq5tiKiKcBtbUrgKzdJapFVUoqav9jvoLTzMzzp8sMYbccCHBBpehFgVEsupDP6BNNJRFXN",
  "key27": "3Tgs2JxmhpVt6vAgK2CLHNr43vM9tn5Q6EQuvUveGHBVKG95AWK85bPeFVRaYAxDhTamXRE4Z8FRL2SeWcbiA5D6",
  "key28": "YwqFj5uTyXYprgjvLs6PzHZvF8bzJJenNkyiKBSdQHDSXkELx1afsPXwD7wqz29junGUhN4ApSuhCrLP4vukyrJ",
  "key29": "4uJTyK1aSnR8L4yJ5Y11RvhQky86RVGTJA2BQgxzmefyPksMWRUsAnyDpXNvS3DJak7hgtaAvyDhiSzicAHmx7tv",
  "key30": "2pEEN4yFy44zqVuFuJ4nTjKjzqQVEdRCYVvzTvyzNgpBkN9uxkmAvijh26beZX7KcQom7NA1xsyLLDna3D7JHydZ",
  "key31": "4BTVfsH816a2WbUQgH1XBbdi8uoetkistGMN9kxYNCeFukzsSNTwA3ZdHuM2q9oX4DXfewExKSvV3Y3CvdRBMDXv",
  "key32": "5DB7BuQw14woyZ6iQS1uKADAgc6hmXuH67umqtCsDfF2KRH3iFR959hHrFTu2ZmZ1yQ7qbook3oGw7Ai5UE4tg1h",
  "key33": "2FWgJuva1sHfm4jtyfuqn3CVKxCz7nVsRfmN5TTbXUi5pRQq3Uf4P4BkA5JXkvMSdJrAPp39G9xVSFf63njF5s4B",
  "key34": "vKyY638fsUHHeKhYzjJjZsrq6T8Z3FWK8vSF75sgLr495tUyBTknVeMTTmJAajfdaNCeE6iKWqKBimhCRchG3XZ",
  "key35": "35gVQS3EuLDxSYuHxi1Yg5b3h3rG1HiT2FwfeocnSGAhz9TPr1UNB8Wec85hYJJg8SoQfQCBgFF5LmGWQ39JEmmn",
  "key36": "3k281FivoVwArRFRn1n1GZ3FyLBeJHnUTRF4oVz2DBc8KX8A5xSQzaHwVRFwSBu2a2qpx25cTbHF3HdqJ7trsTBJ"
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
