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
    "3ytFLCdiLLA8KAmtrYGGf83Sxt42Bky2ptUQZ6vxoLQhvxkpBZtZ7Ss9ugftT3iQ68UBLFN8WEVut4E46N9FUU5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NwP81hDWEMH5Yvd2t1HPxHJiSqJWwoApiHkQkcibM71D2EJ6pz962PqAcztoFnA6TgXxQXSrd375HefVUYT3LF",
  "key1": "2hBh7jM1LX6VZtEYDSYtHt7PsQ45415dcMgDdowTYtHh5xjaooDvVSc3RKeX8duXDTzo2Eve9NX8KhATjMTbTE5z",
  "key2": "2Nmi6CUhza8zWimjk5umntJ9ZFqPpLMFHCCCsR7VK3daMmoLoBtafEfNdkGU3hiy6xwvdfmp4cr9vmgUb8gYY9zJ",
  "key3": "33HWLywK7zTKqLnxzJuSEGeduTXNeTE7oCXtVWoi3gUou2LyepL8Gtw9r9cM9769i47VwkRBhJqW1BLdqLEuSsSH",
  "key4": "5Du5imu399omSGKTroNQjVdZS6NuuG7C6VWQ2exQkqcGP64n3KmR9FktW572HasSoAGufihsmBNjiaqm2kyqosPz",
  "key5": "3LCGnosszU53PAj98NcQiwuPAS2WqLBRDBzAsNFJjTeuo4wAjAUnF73HPdtT24Q8jt4gMuHVC2G9tkXX1nNG9vCZ",
  "key6": "5CMCy1kLczeMJw4yRvfwE9sZSbEtGYXYfzR29R5KASamf6EnTzoPbZGvW1BzegJfZdehBKKABHX95c7QZH8WzAUs",
  "key7": "4T15bCRxWeERDM3xoFbmpsS9EKMRCMUwHFGo3mvWS6YkMQJKAqTsTPhD8ZmjfSfvRJiNfuwG9qZYg7Dzg8u5wseo",
  "key8": "23kQgH2Vk3ffbFBnrq29bEDRwAAiJuKFAeVsZFgudGTh9o876c9MBMa6f2zGtE73jLUJHC57doiPskHtsN6vXibd",
  "key9": "2EiWBfGBLSZjDSWcejPhgDNh3FpKLK24GrHrrfAkQfaCBs6DNVwJULGnA4BzQejBVq3b1WEZsiGMe6XpzN5p5mLb",
  "key10": "5jZqtoGKdAPg1KovGrE945yGh6hem1U8stPDZTSjkrhjjffPnaau7TsnhzJxv9tJLr3mfQtygnzQKZcYrqAo8hbh",
  "key11": "3vsC91W9swPspRXxvuhHMYaoQ31cPRB5bZ8gQoKnKJq2m3wMdvX3FtW5z2tjYmn6zcFTSasJqkTzS5GMjaow2N3h",
  "key12": "B9xDRyQYwMzfMTnEQxu6k3kfP83gD7h5KbnodBQpHG6Txd3oUgEGJqefStZwtSr8WoWcyYrYMBoTUHsmx9hnk6L",
  "key13": "5oVvgvQDEvDC8ESvJp3iay1tPf9ww2M4AntDKmsiM5vsJozi9vWj2uQccb2ggR8hvLhFM67aD8VBemegVWhdJtHP",
  "key14": "muAc7j77AAp7EoxLV9WDSDGd198jXNcMN7fC3PMHqL5LVf8XNv6RgfRscTdQTZLyXUfRmX2Fz3eZSweq7XcFa1J",
  "key15": "5oq5BxZg8X7bGqNggQiKDEUdEnuTTxnfQ2KqrnEjQ2N1bh1RbnKRQcQoNDqdnF4LX59bu2bwoeBQWYfJyJRSZJSF",
  "key16": "4ZcZUwS6d9pkEstiwZe9R8KhiYZ7WWP29UAQf7BLZUurURuQ2zgUz7xH5X3uKU2h5Y3fhLFzLFnwiyqagCoc1FFm",
  "key17": "4JT16zryNqMb8GGfsoW4PXRCdHkTTPKjZEtFHEjeVHgx5YxMnB8tr9ju46iFKyVeof2URVTrat1bxzPtnZx5URv9",
  "key18": "4tDbNPJ1yBeH1x9mKRvqcResmDf17mZegaY62Xz6S8sotHwCZsFCEv6HHqhvcmUa9883UCnV2wL5cEevJUNmGM59",
  "key19": "5rZ65J3ekAZuSD7pzsnxYNgRsrAukvCj5rqUxq6rZR6hK7AoN8kLTPfqj1wW9HpYVJWo5tsucs2pxCHNuZ3ZKxqg",
  "key20": "5xjvQPAzPnMhe517ck2mgDieZiSyrQgV6VMW4jvNqXiFg6nPNcJuhRiGGzmVosFHsSiBEE9kvaUxa69SPvkThc8B",
  "key21": "4FAMNoMNNHQQ5Fe7BdDy51k3RPxYVoidfjwkeoRUHxcr8kef3FQ2mhhwz4GkkMZRoy8vocqSBmXLNZhFTjRbrfb9",
  "key22": "2LAN63uwMFeShQfHetktpFnQpyBEpXsCMBjRJ5jK54HkzDKEaC73YF3g3nSgQgcdWmFzXeHNY4tJMhHCM4pePqnQ",
  "key23": "54E8tqyhRbMbbwkGnXaNoxGAWzryBq7ZEwm9bB8qL1CTdGcyPuh9dNgXHLw6cVbyWJXnC9Yw1y2TvPfKrhnfWtCV",
  "key24": "3EvR8wsUkH4w2SuiCdSP9hEVpQTDDwexwcULMKa38JQ8aEsQx6TxUU3fMB1PUXBrJidRsxTrcgoYTw93BVnfFinp",
  "key25": "4aqp77wuNfDMJS3W5zpbBffuW4WCSpuk5jNwk2CVWLkSsttrEsTAev1tXGrEb5GhujoZj1A6X9PR6QKaPbtYTwx9",
  "key26": "9pV2W8J1oNGSwNL1rXfJiJFzjiYh2qZyrB9hzsFWTCwXHxmqabEECaPZmQieJUPYmtEpdbJ6N7CcZYYgqbY8tFZ",
  "key27": "4bSRbdGPtwgATVxhEbSLkozhG7wFehNDtKhMGxR2TgHcUVpbHCnhLiQ4ykW93eZodNkX6othdFDRNMZRN4uMYZcQ",
  "key28": "5mi79zTx4gghodQFxbxL77pTDWkdzdEWzM2fxBs9WsxZ9wVxAVf1pArYdm3SebUxMjq47cYrFnDA9ZzY2QtDiYkp",
  "key29": "2ffDVDV6DixqXVQceY8ZYer14bKDFeJQT4eiZpbcZ2fjH9N6ngcmzV4xzGiWK5RKka4W2f7rRQ6hFXvPkhgJXquH",
  "key30": "fhykKDw8y5HNBtMwsdWUYdghrEH8XKsHhsSj8vjYANKNFnd3Z3wVrjezPEW7H7oxyrTi7sUeU78TLu4Fsw1u42u",
  "key31": "3qDC32vatqHKpod8xgwMcEKACpypzsCvEPARjYW7HmNQCiNPrTFUqyvE9CRSVbAXXQrfxmYzb6Ppz3gRR3JzPoac",
  "key32": "2jvRynRofDzePRbg15fbRUiCsTVyuEpZL5TxmfgHvmJCKEiKsrGBCaypyoC2W1RyKPoCR3HycZYHN1oen2YdgyFK",
  "key33": "4PsfbJfADn68p97ewermJEjmYFFWqqjed3KpwSgDKih4h9CJK64nP8HqkHvziF1JFZ9cAJjZqmnwUV8Mz8BRT3zz",
  "key34": "3Gqk1VNg4FCvsr1MCo2hTZuKTv8JSnqpdDjYsLxHLUffaXKy1nNTox24SgySuG36YskyMKYcPJzx6i3mtZe6iaZs",
  "key35": "56atyVf7xBPx2GN3JesLgpfVVCqrtes31vpoaL7Lv53sZ8XFEBPo4cYtQkzDAQZ5M7PYkEtm6LTvBSkYmvfBSNSB"
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
