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
    "XZam5EpLenzj1aveX9gt6fzkPZsYNP4uSsMEis43Jd2nE4ts2hcBfhcnysEDK418sRNq5YYiQtxbTNBCAB2nWxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHAAhGc8MWYtaQfv5tKSLWw7uMuMV8Rvbfhuq3vhVFuwVpMWJkz3ELbDz5VUnWBRyCbJKmYB5fWtbELWeodAfnV",
  "key1": "4sE6LmHSxe95vJzGqMAnvF2RaEkT99prGEQLxwfvDBj1vNmAnmSbacscpwfvAYE6iMMeRYBKMztaKTu9Ghsx52zJ",
  "key2": "4sN49ugRutFDhpFZwoDqqDnk9MK3wZ4mjSe17zuiJZxnLKuLco5X3Cvs4ACaAzf6y9yD2KrUQkKY8Qr9ua9Gi5vs",
  "key3": "9AxqPft8QhahKHFscAgcYFVJrZjM5jZnYkcG7upAAJhJHTS4qLzqDyUdjVGk6p2UVGc1ALFHFmyy2H2G6DkqcoH",
  "key4": "4qvfEKcAkwztDcaKvi4RAQiZsGWQSZYisqFV3ef2trUzpAYDYobxhaQjiXywBLLHzWg1XCLhfWmrtmxnnwCKhsiL",
  "key5": "4tDtWkZEbdWA8SyhpPbKmC17pNmP8ucfk1KKbLP7drDF1zRFTD9NiNVJWG7VnugSdozbQpCcmDehxKYtfTw1YbFf",
  "key6": "98sL7D7mxdwbVFTVJg2H4LkM2XHJBoLjkgxYs6hxjmRSrMo17qQTL2p2giswqtVTcMdiBytc7CnmTYHM5zydNbs",
  "key7": "5kTwaFVQ7ip3f3iRAfH9cx7WhHRYrRzY5AwUbMcunBqgWWv8ifenS3iEFhXEJCXQsuvh9F5JUcebZoN7bKKC7gNw",
  "key8": "4ZwqA4Gos3xhx8HQj5CeP4YaVKyqTakymvsmTAYkuFVQXSKwDUr1ZbXACb3gL3UCnDrd4SpJBamrsPwx5dERP5AV",
  "key9": "2w9Cg1RDtdAno8654o6UPdNkg7WtEHMT3XWVAyCFEQTpAQu9QAfQ4a8dsyssKjDCx64zEMbTmnXEgEGYSR8yFAHA",
  "key10": "5f2pEhW8CqCB7fi5CRKJ8dCP1uJN7ttapPXmVdhYjRrNKjytDL4xDi9fBS7kPwCxjFJ7dqZbMUZ1vMjxycezTHBb",
  "key11": "xLGZDNGaLaRTkXydH9THJuW6nywk8pdQao8fHoMpHWYdkkS2Wpcd9gX1aJCrjkYyaM543uURuZPjBcppV2B743D",
  "key12": "4UhFKpSt3kbuQXtMRgf1xvB3gco2UaySrRgCSJdo356emAW7pWm9YbgdNnCwB9TEDUraH2Vg4uVC3qHEHDjsU29v",
  "key13": "5JsB5mVwoPjTbtErKT8abFVYUj7PhFXuPxDraqmqE1Tad6ovsGE6PAH4x1bemXQX1axGLH5qYgPdXw1rPnndwW9y",
  "key14": "4PjNUJNSiHaPrqRkULGRXzDVUoU7AX1bEey9bonw3hYTzo985aY4LncxzBepKETHGw5B25XYNVKd4iweFXme96uv",
  "key15": "5PsvVX8ZwewJGqSck8ey6bFgwqjqZjJq7C3NSgZpUkgcf1AFJyDc4e2Ftyjiarxi2S6nTKaQJpMnF5tT2qVSTmtc",
  "key16": "3hXB41gkf9QATNz1oyqWK6BrmdyktNcxJpCmeujEofSah6XsCHuZLoyTo8MVdfzT2YaaQuHLNoTMgsWWNgYt45NK",
  "key17": "4qXQfCHWo69U4wKoVGphnvid4HGmr9yhVfXkDmN9x6bqzea7XqYb9gHNqUgVKxbFAb3e9gcaGuayuJCqkLSsCrN8",
  "key18": "4MT9ddGKz7aY35bYxzG7SgzGPzVBpowJNGzTFLESEZ5cW944Wasm7fgeqWaKsT2p6AYWS3YfFtSB76TPdrZjDUNQ",
  "key19": "39LakPskEN4tp78ngdfWQR32ycU8MYjCnrEdHAf7yFJ6vgkyxHTauqGYfDZGTPrhu55nkt6wvjWRzy4wQFRdJrnL",
  "key20": "2Bbs3WnX5nv1pPfxdnJ8Ve2s1S95jsQPsHf3beUJThxGECHVZ6L8cKKPTrKgjZ5ArtFsX51bPzakQWmxuJYayRyM",
  "key21": "2eMtfk2URdyLhXmNX6er9V5QqBZg4oDDGDmVJKEFqpioV9aBjb8enNwZ4cKiTHxv5Vaaz2Q8mov5Xk3UmNcNt1jD",
  "key22": "5evEeMvj5C44pWyJfhRimbc4kAfiuq6JCUPgQvAPPcZVNXVoat6McD16xcFPz21j78BSRxA3aC92bXagT1tc5w7w",
  "key23": "5F1HFuKqFuGsKCLpzKozFdRCoV5F8ucNvwcSogwUTKusutNMs5fcLDYVvyxTKGTqu2EKHauLnRB1N8sLgGrTk95b",
  "key24": "zJwBiy2FHPKDvUmqpawE68tP6B2nxFKdCdQfxZwB5LYgTvsLX9Fi2iTqEjD1J9y5TZVk9Kgx3K3k1esvkAJYsJ6",
  "key25": "HPNANLrwBH9iupGnWTX3K3rqFffuvVmM7ghwBN3RWcZKaUkUFDK8empMTpa6qg4EzuVnrjhC71GrRtW9n6VY8Wd",
  "key26": "runHsSiErp4Wyq2NCmE3rvyjtbto6MpAfuyshRjvmR84vApaXwPkUwowarboTwXLoKKDZNW86BtsdnRJ77MSMLB",
  "key27": "dmJNMqigB1KuLzhjAtvAVrYUNDp9iPq8qkDBUFrZPBEpLeH1UcXrpSmiBWuXfx3kJU94A3jtsfrNwrYC7f4JHEn",
  "key28": "4fU4DK5CwANqTRACjVZ3JT6ZfMu5M7FHsPajnC8KNCANYtsgGyJkmEP7vZeXexM1AmMaqRn5GyxUSVuRkdQYRDq7",
  "key29": "3YaGhfLNyY4WtUfpvT9ryzoMyPxh4jbQMUHWSB3MFFvwhPgWmtKLCx5sbbDhFF52k46a9yNQjUL4MMcaYRBMEEka",
  "key30": "7sGzvXByy1q1w7AS484vyyCoQEB3L4FmgTNZUxTQgx27EKSNhD6PkmG5dwShMEUK9QjUDnpyDaJu3dj3175Wu6P"
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
