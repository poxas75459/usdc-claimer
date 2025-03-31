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
    "3ZZwUSESGG4Wp8yeMozW3Cq4dgWGiCoV82jpB9h8krsdD3miv8GZaJ6NNfmC4vzJFKV8KDZStV4kRUULCJn5AztY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uyapdwdbTYZK3yY1NwF8YKeTbXtnAQhyemT1td8Dt55g4onRmmoiNBM1UTzQyFCoYC8KxHRE3AKouDESm7bFqBa",
  "key1": "25mfLwPnMQj1ta7LvVW5qBFKwaYgp978ybJz7Esov6sL2omPnn3YD2HRCLLpac8HStA71b3teqr1SHu1DB2fiVLE",
  "key2": "3w1N7aiyr866SRcD2HmEeESkeQQTdSbZZcuRzwgpNnhpBZF7CZKgrePAbPhXFVYbT4giRWhZMNkpVdyiriaZEWUK",
  "key3": "2oxdUMn3iTrB7FZE46F538g5qwpiH9GBNtdUGeH6upVuHAB49AZXdxHapSkVpiLp4JqTgYZ4mQ35ekkeQCvufYRh",
  "key4": "4aE2WKCrKiNfe9NKxdBUra7RHs49iUkVVQTV2xeFr6vEd3EpohrQTHeUZXB6YmfurEQEyv6yo58gSuRCba4fAFqw",
  "key5": "3B6zD3CNJL3wALxmg8Zk3XbgzT1WvbdfE138ZBRxiQtUATn58ry1NkoQEeCBjBkXmXtmnUkN4WcvcEEn1ut88FYS",
  "key6": "47nK3h9jJZSQKEwiqicPhUPfoECd5Y45sCYYsgSjkD21DksQiCQUEt2kbnk83Pp9TvvjaE7CG9jCTG1tQhZeozT6",
  "key7": "2RCbZ1PwVTigwV6h6jsgzjnCHaJ82xLAha14qzoyvDz24AwY2oPXdgG55J311mFB9UcTuDabS2fUw92FJDi9HyzT",
  "key8": "4EoeBGtzQMrVQ7RYbBhA55yMpoViEQbRkGYYZjsAcqKHMkkQJFx77EckHLBFm6p5dYz1EKVTq2Z7V4FrHiFvg5Xx",
  "key9": "2SAtyaqRQVYVTy3pRbGfVrVTSQGgmSEMKGs4QCFK5sRLPtsvYhwy8oA5HRVx4Ks8D4jFVvK6rYBCrhodo53CLiCH",
  "key10": "4Q3jAsNyTfkvJsdTKkbpCcoscr8ytH79332HBn1GakPJxcZQDM5pyjCwuPH7AXEBoNmsHpw8SdtbBeoiFwZW4eDj",
  "key11": "3uCNNE4zo49P2jrUfM7i1ZWBfMg2YtVAJ2PiUAXqkrZc6vaxVbkkx188sv35UW7EVsmthaUxeYEBnqyXam8qKiKz",
  "key12": "3kJMd7QXLwS8B6q7bAEsXsXtEWoB1eXBQTWzmPKs9jefi2m2Bp9LSeN86zYdcJAA5Po7izNuAMRT9mpLEayCZu2a",
  "key13": "3dWJ8mYMfYMNw6JjBVfWsyofeHE5gLu6x5kmh7n3PujCXdeMyzUxNMWUHWX8gpPVZuqPsBnTGsfkJGMo77xV7ADM",
  "key14": "4wAQpRpkWGoCTJ3AdUMMYupmJ8JocktgYHLhGPbPFr5FgmgthbxyUMQbJXGatjKTipT4iGnEvxdLbjmZiNg6CqQz",
  "key15": "4t6yriDgzBsuTMm73LifYMN8yK6HQ789aa28hCtvWNANDfxDwoxvUXeBAtmBnKjaYByXGWrLHdH8mWyYJLVshTnr",
  "key16": "3B4KVbM28cfpe99hT8xQZoxoL4ct5QNh5aoxtKphD6cJ2MqMNc5W9PwBLR2CM1qnvcMjaz3f21qiEknSHaNbfvjz",
  "key17": "31P1TrSzgkfgUED65jtKhN8qWgmTKMbA4cXXV8FBJ11GVXtY2vvS72kt5cx7Q9JmTBYLzAVbnhHm5Gcz7LVcDkD1",
  "key18": "4cbBDTRC4gCC17Yw9juwF5MroDL4TqMv3xep2EKbiPUEnk9Tuw7Rxs8AEnYxmo7JwAsqkkHKyUorSY5nypysoFeH",
  "key19": "3QE6vN3ehqoYyGKopsT3Fe8RqySpEpMXkxdWLBMWyTeg38icLHvPAeUjRkXDMd7bYb4Pz5EBTwsGU9KKyZn1A8L6",
  "key20": "23UA7FhPkvxDxcjG1ZfPdEFKvryJZHWx9cQDWDpbGjTQwUuB1J17VzrRSVo2FbRMCXjvrsrULyvvAe7HEA6SBoPu",
  "key21": "2zJMywVRZSX2eGfnKjfaC935t6czRQNrXgTkZcyiQfKsLxZ5ixqDJWY4F7NT1CmVH9kdyYDx1VoNbcBMWsYrBX9T",
  "key22": "5kV5GbFZ1wWGszuV3ieMHc48GVyrWcFr7J1Gw27y93vzVdmZoUzhTJXMKNYt9BrioKB6auYgRXcRumJuvXeDeRkb",
  "key23": "5jRVVYWsT1J3TAq6HxBEqKkoF4rDUn3XLfrNGucZ9mvevZ1k42UTpafRszVmhG1HJneaGZrvchaZQLpPsDPMJjMi",
  "key24": "4vziP7y1BmcxVbcXXdXWc3NcrAoMzXLaVq95EMcygX7tJBcQSeJ9FPHPPYXmKc7WsuATvyE244U26G8tQEph52g1",
  "key25": "2j1DGzGHEDHVNjZe14hfU2QtWApZ27FsbtoxfZA4STLAFeUFkGvQjbrjGpjDKL676dvW3sNRqMNHyae17zTwLNxa",
  "key26": "4dKp8PA8RvtD7E7Bx35FvoytwPjbUvfeWZ1GkGERq6fCPRAFzft7RFNScyap41yNe36LEpQnt3ezqqP71VVbjGmE",
  "key27": "3RcEz36akxnywbPAtmAutMXDw3DsZz8KQefB4Cj6fE6X1hwVn5NRpyzBDPqnHniuJR4gwDQEXP7jzqTcFHoURvs8",
  "key28": "496F7pqE6sw9cNJqy88W1pRvMgkuSYnb3rR2vwLu2MqiUkZVTnHko5FrRPaT8phWqyJv1VrZDckghF3eoLVADSmK",
  "key29": "41P1FZx4MxnR6itHNf9wtSG7KES22a71vucs52FjbD9gnk65YL1DipndJm8jPfTbyUbm1ikZKLD5V6W1W5Tmpwg2",
  "key30": "32m7cQTkX96NusimQJZ7UtCiGgbpXmY54ufHHvipMmHwX2tGtBMyuvux5YkyrLf6KQxzVhhkUaf9co4syypEebs2",
  "key31": "2oyfVUegvq2R5ZhFzseGuqB8mbsSLRBEkfaE7CgnS6dTsrna1Xu8Uaa85V8k835ePo36QoMwTLEWv99kr5gnLVDy",
  "key32": "5W343D5nFMiMP84sQDD23Gx5XQ5w5Kw8m6Du37jhWR2ZSEym485ZgCKjrKZiyuMyNb28V9fjKZvFJSnP9mNkEe6u",
  "key33": "2rAuBzPjzaZRaqzrTYw4yFSQFQWVx7hzfMKWGpYxV3uZdHckNqDQvac5RKfihJRU3F93cFpzd6hDnZmvm8HByGRo",
  "key34": "2AtxsighPEXxNNR9vkUkkzypv7djgP1QGLwXGxbgwxGkWpxq94dZEXaQAtXSmpqf7vPCE6ZjePSQjc6DJxb1Y3pX",
  "key35": "bg1v9hRUx69uDM9zPS1i7e1HQJy7XVnNSnCDE4EBBw6RTDzGbSwkm8wS3QJdq2x5rMpWD7Eh7ZePuh6kynNe1zS"
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
