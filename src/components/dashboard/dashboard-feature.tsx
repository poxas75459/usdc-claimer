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
    "5zSqtjqXJwu1q4YXYp31SaTP4vnieFiHBrKLhDCuSM4v8XiXYqEziQBgKTi72YCU9Z1XXZGvCKXy4mzSe1su8hCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rtyGMeBQWuvyy7zSuop8P3s6SP5YZZaZdLGQJWaLS47C3SUb67ZDnDX7iF72tbg3BDiWfr2phZPhzDE6eXoKN1B",
  "key1": "3GFdr4JjyhQYexAcnc2k1dneXxUmcQYsxAXpm98uFPpDrKpSWdsZCEL194QKM1rsXNtsWa2WZ2o2HBriZ9T3xGZG",
  "key2": "4dWVifuvkaoK3PhRSoDk7QrWgNP58fiFh7PC9pb6habWvowBhqniB2JWPsmnLJjwY8igrj5x8ULQ6NTs7vZpfNxm",
  "key3": "2zPK1onzCs1oHVik2wAh4GMFk8tKpF6Fq6FBVBkpP3qSHaGMdT51g4nXLrMad5MvuRbaveXn31UQX9uBbs2u9PkW",
  "key4": "2Yh18pofxUiFh9tZ8vnUXpoTY1RaQ751P2QoT5toCGrejW8R8ee7XeiZ9rxEC9pxBiYdhR7fA5pFR2VDQp4jzgA3",
  "key5": "4o8e9Qnf86xtwTFw4PQPDE5Steb8Jmo8NMWsrMEH1wiYQF2iQbSrZDLYVuogPNuoY3yaCAxkofFKXNZSB8KyAtPu",
  "key6": "4u2TNCwMZ9RJjzHDV4zTVV57eRVBaK7shvFu62wcYciSX78ephHAXc9FvszQRg4r6fuPQCagFjhE4k9rw9r6JDaV",
  "key7": "2BvxiXnthoEwbjqwDba1kpk5bez88ZiY2FXJYvV4Us22raL2pB19dWstHmHK1TPAZPyvQPTYnhsK57SxoB5NGDHA",
  "key8": "4L5JPzypVPXcDwMYK5aGj1Hb9NYijURJG9qSxCNtSFcZX9VLTkCdPPFzibi2Gg7LoTZtbiMvzwFP1KutWiYt2U44",
  "key9": "5xrLDDQu3xQvut9VNbn4pv6CyWT6gNtjSvyZFe5P9SX6qfW4e59VUMKjiqC8LydHeBHSQjPBhAEFjMEoyjZ3KZ2U",
  "key10": "2DJqAFsCwYb9qd3SaBNVytaBs9X1oZoFWjgNumSc16goHeTCU3CtWV9MSuUe38aq2Hw8Et6s1Jhp68yUgeaT2Lhn",
  "key11": "2Ecqi45G9diPoBF9tukx3WeNG2YpWgzzwyY6Aj6LXKRLuR3TQQ7japGVM167XUhm5dCkyjcwukWWpaoSjyPHt7Pz",
  "key12": "2JsxCSHE4GkPCQv4wykRorEbAsNebNStBZ2WLPdfZTFVGpUS77Y4r48uiBqAXMqpM8BXJPtsWSpDySrWmnU5c3DL",
  "key13": "3hVPa9rnejVdZqLYxn3Mt1XZrebM9ieLSKzfFfsq9K4Ct4dmu8c1sDMpnGJNmJCRRcbUiUfkCYaiy34At5x9LxvU",
  "key14": "5geBtXvj8PLotsoMHUdjEg4j6NEPNRutyejEk7wrPnhNxhbKRgBrkusEwBcGqBv8kt3LV3B1zncgHSJXhA7HZ2kv",
  "key15": "4sSDkir6wUE35evVHJUt6YJXZBDm7dCkdnRVGKJoGzV6KVSUKuRzYigZaws8UDdU2K6VfFkkKDv8bVWswWSU7pRz",
  "key16": "5TK4XvcxCqP3GZ8sBn8qHWTzDrFreQKMnQ7jDoN6KQigrDyXHKdXN7hdRjHKrYzdSdfSB9BRebJeUeKrouUBXoLC",
  "key17": "3c4JQfMua7cZLYtw4gSHvwnZK2ER8rGczHSvN6gyxuKcVxXxaFDxrYLqcYfaJyj3p16EXNckF8HmMTNrtXwZt8Kg",
  "key18": "3v2zFbSzcc7r3Ty6fRm77tzsQtPeENGKGhQwdbUBQTheDdunnjNCsc9JJ3DqughVCLcdB4areFsSZWVxsqq8w34Q",
  "key19": "4dkAsB6Nby3cnqC4DW3tK3K4UTrP6Lh4kU3psKPYjfbQYZC5ZWjx3cQTm6d8eJ5Y63YkoYjxKM9Azku984PbL1Ce",
  "key20": "4XRFfG7aub5wkyjQW2unrdfHeMpecdnnKeTtQFKYB4axmjzkc53HdzPPwFJrwT4rdF5SfgZyCqmB34SFFHehx6w1",
  "key21": "2ZPBo4W3n8K8nAxfrsKKmn1LYy4KF8e1nm8beDsy7bJaPrVtgaUKD4yiwuaMwkx52nWK1DRFkDtYfZwuuPX1r3pG",
  "key22": "3JE6v43VENbW6C9i1nNSx7ZQk3Lhwqu9TLuLhbNxd99gTCr18KnovGMQWXTawVCjbBCxgrLWjstVKeHEhx5iUU9T",
  "key23": "3CjgtSP5vSEr4bVAitDX6pRK1bUNVqW9DPUBmKnpFnnQAXg8YuqK6URAGTw1zuFUmxgB9292qiDZ7sH3QJdgSUHY",
  "key24": "4jdVFm4hmZ3WRuea4cgCi84X6bcSzeVw8fKYjD884jvYxXkznuqugSH7T4WZg4iPxL96nwjHxLkmRCyWpfTXrfuL",
  "key25": "3G8a2TR8dnRAF99tyDDwHC5tnE8pa6zC7F7bABQJLBUK6LkW7X4TPJFfqFGntGen1m1gfjDTvaTxVAvNfZ2z9sx4"
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
