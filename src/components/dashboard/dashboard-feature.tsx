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
    "2CDY8Xyg5rEZ1VKvPe84rg3MnMxM46Ck3N5XRVT4jNpoifNDEnPG5nLnzSE6TKYMxc8dmvNCqk4aGa6BtjwWaig7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Myoifrda9HNNZ26zuEZsY5ziupcy94gzsSWD9UnwjnSHHrKq9kL9qWC2B2ygvF1kWzWcHsM43qNLDTwLNhqkQ9L",
  "key1": "2dr8WSxB2nqqgjge9y2D3rxsJBf6FE8Ez5n99DrdrRD3FGzCWwhZejyDakAVaLhFD9DVC5VM8KWP3HFf8gu3P2xM",
  "key2": "4Nz8a5BS6ng6ccZABjVVVkPXMPvAJiu5Z1Hhyec64Y1y1c3ewLWi8WweaoPDg5RjCEAm5fYNBY9uZDco47MM6HME",
  "key3": "MZLBxz8UmSCzknqJLcdSE26oxKSZbYP7iiG7Dz35ssJT6iFH2TmxUSStCN75XQwSfe7q1rP2eniAK8c6i9Xkoxr",
  "key4": "Lzp2zNEGA9u7GXJigByQuZTHfy3qW4kGBTNqPn93zgQfQCg8TmuVyJWrS5ukZ9kpUygVvWA9qAFGaYfK9CX9VHC",
  "key5": "581PBwgYx6dNYYWBW3uCbfaMVf8d7M2bZ2mFv6LrsqNgNeueC6Wh4neNdBRAJpm3pkLy5hL32n6ziLkxRubTXu8W",
  "key6": "4mUk71ZzX3oDwtZ4NEQHTm4DiptjoPWhUsqmo8jVyus2gAeFestQa2epE2M68JhbWVjbHrUEgLmFtPZwSBnQqs1Y",
  "key7": "u6KD4exRNyLN9RU1aSsySCfgzXQ7xktJNMg8EyoVXH3Hv2eHPnA1d4H8BXJ6TAyYhT4BBhLjZf1isfydcCs7ddA",
  "key8": "6GNUmh1ciBd23maAjSRisErWZp66oszLAUKoE89kEynwukgiGw2qxwdSnDDz63yDqUb1c5ePotfbNcoaUBH7o2g",
  "key9": "ap8sYyBzLQ5nFxKXoDoiXTfX98iAN9ZkV81DshgYhPxGJ8J7rCRCKpgTf1cC7oW7oa1FkbSQPxKpXqmdc41Tmqu",
  "key10": "5cYR3uRkxwNFs1C8KM7yKktsoaTd5NJVsCZGJNTjoyFH41DPcUrSWi4cwLrYPwdyXXKEwGY6rh91YQ5vw3AjpkWK",
  "key11": "5Y3UQwEzKXUDBKjkU2DmB1M48WHUcGYb9dcdRt87yw1dmQRsSXo3tNCWGHGPWLRWKqifPeFuGbqdZ5JUPUmrHXuA",
  "key12": "3m35KeAn9eNsyuJVPD744kEwULX7Lww4L8xwzWtLdcvVPFe5XWsmx511a5TX3EEJb8w4khrc2LT2swauwhy2981t",
  "key13": "5Biu1kLABtjjtGgnLBGwmzRNra9HuBuEnNUbooEew2XmmKGYV9CAsM5WT6wUKwxp1Btx5SvbAPC31JVfW4QDRb1J",
  "key14": "5wcDsfCU191eSANxNgJrpvq7GNKarKiLZophLg2BFTFA2jaCDRevHup4s2vfWX4G11PMjZgjddS95DLFZYgzkZmt",
  "key15": "2CtruvBMVvDror5wRi3yjdLSRDX9Say9jRBUtUA4SXBo6zfbRcZvtyUw3sWbtVKNgaYUDrSS7aaNxrLpTbx7Bkb",
  "key16": "jSwRTK1WkYPRXkqcWyRJViYLTK4Us8TqwJvz7rUsnKXyPPYDqrDLQPvZmrqf33JUhJoqeZAfybHLQh253Umva1q",
  "key17": "5qndzBcadHrfJF1dYvDbyYjFKyGQz3tfxpTSJmMmZtxhQnDxtAyuV9EvYiYF1bCoFFD3Q6VDAVPTYB57VE5T5vnh",
  "key18": "4vfKhXu3YETLnL8PRkAqxETfAnxyhRK2WLjtrHA3NPgzUUMCfZqR6iGbQqp4syf5EARNbMPBUKtrpwFaqNms6iDw",
  "key19": "4CqozSba51P9J8ciTVoNwSwYoQgioo17CVWkZrzw6r8f1iqdJPyQWejtmoU3TQMiM3YXxhrk9pGy9UJxQcavP66f",
  "key20": "2bCWTnQuBTbo7p2CMcEJiVA3b7WrMUEenVk2uuAAxZHCkUcAYrzpZ64HLGrpjL4aRn2eb2aS1HjrJhXBiiD38ovy",
  "key21": "5wZs1XuP8tEbTekSTzvRorH4CYTNu4mKAUEi9oUtQiZAKNagE1bnZn6xHsfHxUfDDAga8BMtbdZ3HgRPBGrKxt6t",
  "key22": "5eN69AKVZoUAU4ockA8fJUNVfPhfsx7EhZZe5AgZhtqc2rTn5EXtWzkGxpoPiPEEHHoDBfPtn4twcRmKW6pyYYQj",
  "key23": "3Dcrsi1pPmwfcwTvc3t7t7p81JG47LmFQqL8nMAevSUeiCTsqTw8rqx42JzrD4QV6g4X3bSdzRUkfDJJwC7VRicY",
  "key24": "keAf1yLvoYcgrHm7XyjVfGcNRHDuy26fsci7nNHtYT6vjSuqFYrSjPJao1sp9Kh27ie67ayBfFEs9qKCvP3b7cG",
  "key25": "2YgmZRdNoDs1guvFWcxsKvK49SUr6TkUFeqTCCLGfct6y35oZ5HTj8XiWMgyahbm6wLZJLePKsoUMB2TsiiEKW49",
  "key26": "UyeyCWZsRVh4nTm5EhNPrV4CFk7GidFHNnVmxEEBUXjLhcpEKRzjzaqC3jKSwkz7Qkm4eJRa59FFWMjVgorA17e",
  "key27": "mgpD4HDNg1X1rVUi4x4RipkV2c9EAsgs5Z9xiVZiV8KCZBTEurdU1nE23z3TGuaAQFTTFV5cwKHf9bSfZFcgj9K",
  "key28": "5EVu2FrPmq9Bx3U5bcTVpR3Pdehz9zoQq4DZ6w8piLtPrCzr5YqUTq4piXJL1fmM4LAdYrdynEBAzAut6qJSwUuV",
  "key29": "3FSzwHzwQEFeZqKFSpL1Red4mJi7VQTKLGX25JSy3pcfD5pRoEoDAvkWVkaJjVfg97PKHSR9wZTUgTgww6Ed3MDU",
  "key30": "5hMLN8et9xVvXwt2oUtoVk4B7puP9SUbzHzCsBq7UWDpi1q9dexmkLQmEZsGdC1RSJKMuzRpn6RJ8wENKg3mPVzJ",
  "key31": "zmpS4vNX9LwjvozY73CfG9FQaLzPd6EgitigcAmN1StGTn8asVqKevhhnGpD5n2z4uCXz9fLkCEWsyvs3ehnWE9",
  "key32": "3dr9AYG9xRwAmzHAH6xpkZdXPEycxPB1apnhTD1BsC8QWSUMBbUx2SrgjXgCrrGG5q4bBNcv9ZZLwxVPkxTghntL",
  "key33": "58o6mRST5JZ1Fwp6x4a1xZrmuedpNNEcfX5sY11R9RzF4o2x1dEzsRVFNhK1gRsVkrE8JV72Rdhhwzx9FfQyWvPd",
  "key34": "5agwj73DsXrUrnuqVdQWeeKnWWXzoSLmbuisQYx5oqN6Jq9hQ5WoD5QktE5VZFkwx9PVYHj5TjXcJzR9zjA1nBZj",
  "key35": "3GQfBgsZz1oqben84KZJ71wxZGKCA4vyNVBFHnxHatXyWUeKxViUr14ByiXqKEPsED6Z35BTLw8C9y855VJmqhLj",
  "key36": "A2G55zN3WMxfozGVBaPk3vJak9cjFVxLYiEcfCWEt47pAHKPZUC4k9dyQFs8sHryCU9mPetZMjUL87PdjaivowM",
  "key37": "dVgSuq5UpMEmZQwPLYWyRUTSHMBzToJizStgwthf4U4hYGhns14QYoUv2KSzKBjK1GoNndAT7VwXgXmhQXEjW4P",
  "key38": "5rMLHoB9UuLChuuvksMTfhCBvoP4z6ajF3w1VDx6yUiepWLd5zFwGwsL5FiP1tyDMyWUVMjckojzFne3QRPRNT82",
  "key39": "4HTL2SnaJ9wAef23UPCA3zoKpmhJ5uwmL2fSbLfK2osax8tkKAM1vz1DFs3QXMCrcMUzoFPvTCWroDfeDoQmE4CP",
  "key40": "PtfC3bJoFvzaWsQ2drr3uUKgaCeENdcvMszuLUbpBeyyE3XcZ9Cv3v1ZtTftEWniWPmBe4HTNHyBHAD2uygTtLm",
  "key41": "5J7MhmqEn1pKP2zhEpNZcR6TrfNPA6D9PimoK32YPe6s19uKuW4hKajMjw2KjZjw4KC5jkAAmujHyk3dKqCTYQ2N",
  "key42": "4D4Gj7FHH81zr8yeWiASqGruxJ21Bnnoh3Km2aMY7hrBur8q7NybEm4cK2viA8JYw381pUQBEeyP9Wy74Jpn3H5m",
  "key43": "2erSW91ELtYaxXN7rzDt25dwQjjNkW6571LtLHm66wj1aRC8tRV64m2iY4K3W7TE7bu3vHP1TFKWCa6EyBcT4dLb",
  "key44": "5QKdXhRc5YMri8vzCmMbTvB2AdJJh3Vzm9BgNNZnW6CRmTzdAw6rjJd9DgT9KF91CXuxRYdjUzApAr5nHNcgkjiv",
  "key45": "2vooUJ7qAY2bXbcn4ZmidGG5Q9NQoxcsDg1XG74RP2CgawCgJ429YHFMKVir5MWbxoTUsQTae7c97E1tAVb6XFyf",
  "key46": "PUrxc3K5RikYq6PuVCE3VQCrD1gZn3nhaWXBuBZUkvNZFiCTK87Fz49YSxK3kBKkKcQQHx756joEDNKfE9cEmw8",
  "key47": "sysf8Zg47A98LGbY64ctghnYwwp1cLPKUsxtzr1mfiP7L1sPchYhd8VukiDiGv1zBQgxDJBncX1EVoZPwcMgpCy",
  "key48": "5meFynNqKRsDhSwVUsfCxYt75bR2gfBiHL5XBHP34egKH1mVdYXWx4goToTxxBAUc8bLkKbddsbiBrQy4kRYmABE",
  "key49": "443vLBs9XGncNfxfr88zzc2dedEk8y67AN39MHniJn3SjqGG7bQH3ruuCSkBjgawwiJ1T783ikA6wBrDWdeANKdq"
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
