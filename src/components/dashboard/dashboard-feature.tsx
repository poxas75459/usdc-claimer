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
    "5jzA2KJb9zC57827EkfCMwMPm8f9LybBMDDNDpQgXRQdzGk7gXkdE14zxbLDq3sQBw62nsG7LeNgAPWZ7GTNtQxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMRM1igcSbrSgABz9Xgrxk6XpTp1SyyhJc6tVba3r543CbRrvFsTgbuGVFdkYxibqe4ytQKmLNjLowiYQ2oYZW7",
  "key1": "5zthXcMatxhoZdf9kRq8fBZ74dffWcRd5FFgMQS7Dpp4kmQicpyKs5wdwgWzW8UBQJ6ehdXZJ1kuea2eC9ie4WSE",
  "key2": "2uJAMVFLF8LbTnwFyqeay3JoMPP3qw2SebK7oWVnZ3rWFkv1YNMLhsojj8uTmY3vmtLMTXouAfsmrsnKEXK6z3vp",
  "key3": "2Y6Losu1o7iBnzTvXV2Vbn9Kgr9rgtYm5F8HCDhW1TJ7KnChgJfzcH3U2NzgmHS2DjP5DmNDD16yjvW2AVDkyCQi",
  "key4": "3myDeY6wZwUpekqqsdkzqYYue8D3eLX8Pyd8A5j3aC4zLQRAHhCrssh58wKwJiUrCYHHWmnZGDc5gsw5GhwwMxrR",
  "key5": "5DqXJ43dWEwBSZaqmWnKvR29j18bdK83VaDG7wdEmcgakJbcWTyeNZk2fhwYBraieinvWQbndKrMuCbump98Tu1Z",
  "key6": "3BbK1VUJaecvMxMHJW5seg9ozwcQGk1SDUWQfydLTMvHz84tgXCJuC4x4CmnjtmNS4LZpz4B79ZEC8cazL3SWhZG",
  "key7": "53fnEKbLxfAAmzb2QvaMfnsRbw8HcjHZGEi1AsH8fcWpK95YVjorBfBZG2iWX8NXyY97MtCvzH4TiADei7PphWRA",
  "key8": "4NawNrjkZ8Zsth1epqnaBmU9933wtCEbwVg1w7khWsDKtXKhQWL1k13iSNS7op9PEKPvXb8odYPKUffjqxAnR7W1",
  "key9": "3KpJDFWJz7svZPsFf9xSq4mY4vZ9BKaJ7ZHyL7XmeSuQNr4A2rFX2MLMAtVdBvLm3RipqS59jJJhKfEVm3LAQAEn",
  "key10": "5S1CZud9VFRGhswEawCMxDHFVCKCgFzXaVLBHhQaJSZNCKeQugTKetJwFD15FABvbzUoZ42v8cexuWmGuePuhEgZ",
  "key11": "3kvbB4rUi8J1BXRFTtM2ntQYTqEdz9gMiFtAu2LovWk47yFkrLnNMiXevHQyBDQ2TcQRevS7Px5e9rCekWQ1WL8i",
  "key12": "3HjXYPrMDHpFHesuwzEWhnD8qguHivXDH39hmGHfBcqnGXuVxkMgUKzJKtHZumYTLjAV8uvdopPVB2sJa2heSuVq",
  "key13": "1q2vUrDrrHDAqK4RGVNj8EVuhJ6SGD6ncBvxLWwRTQVg7ELmFo18FSnPxMJPkDFkDy1x7iwpxA1FrYtnMzL8vpE",
  "key14": "4WppvZZ4fsuQtR7qk5dPUJJZWW7ZpW72W82WoPuA9Dnx7X1hq5piaqoJe1dwA8m8BbHYb9mEnG85VyVJ6GScTjkF",
  "key15": "bjCfTdXJsMKyDwXaWijQu8jxneuvRywRqMKJzkawmvNmmeA8CCBpg2JWT3SkZwqrKnWfm9XSREbUqtWsRTfYt7z",
  "key16": "4MZGyvg7Z1UF6FSkgGycjdcNzKtQi53dixX4BwQxQoxVQsQDHCePVDkLDM5bbe9ryFkxwJCtzrZenZiEGq2eWpGy",
  "key17": "3yLrr14oWPgreD3Ye8tE77zNTSnJgDMfpeTLAWy3hmqCPiazVCepz6DGnxpc8g7gDeWx2PvRgAg4u8SMqevUpWVW",
  "key18": "5Xdd95DANFzj8vETdveywFJXzDUqGE8tc6xhYr1uxKuDLBhxvPVjQf6on9jhCPNrLZL37esQE8s78S2eo1rXPLKa",
  "key19": "2SLShTYtbSwf8JJix211pw4AtTSzdgQh8MGcmqEg71iXos1FTzro5Tig4MnzQNG9JgxtzAWTSLQia6SuZE97ypEa",
  "key20": "3FbQTB9snbJr3MnX7BkzWspdXBmPHmtzK87XmvWKpjycaoHFCGDXhRCjRnDjrcwaXor3D7fJapdXB5Kx4QkY1tax",
  "key21": "FFTmEy1Yob4nHEX3ekMoyN9p2SF6x9Km4EqgxbHefaGoLzEgJ4tMDKR9vck6paitRG5kEnzr9dByQDZwZXhN4rX",
  "key22": "5ozv6XLFvPfeLaJL99vfThHiF6bL4YsFcBpYUTFTGPm4pY85Gz87tt58gVoFwGkQWivbame3XB22JD68rDYVHNE6",
  "key23": "5rNa3oQewtz3yKrMFPXwuSToHiWWeh8V45JFjjDaMs1atoSLjY8L6wWjfGwKj7p8FVc5jgcSz6m51EEtC7ztaGdE",
  "key24": "3d23i3a2uyTus9XPvEtmCGp5fToNd8TxX5DYYTV4SA6zywoG9deZhFJnYJ1u9GhKEfk98QToZLBfAPHcPFny6UJP",
  "key25": "2x27hMhCkfaY5e76g53Pk6QS5aEjkBJpeJZZDaW1KB9yR5Y2De7rEqbWnPjK81dUiPopJq46LUXQZAPfRemgBvnt",
  "key26": "2aK3yYSWQQX6HmioTef9CHQgscUiavy6f5Ede7zS3zf3vbnRFriBoMw44sk1CVr7an5ikDrRfjbhD9SCP2U79Ktd",
  "key27": "2cGDaDBbFUuEm4KEphoNWktmgj1Y4jJVq6sAUubmmr8TUXK2BBqvAuNb2MLHc4XY61CcySAnHp8VdtijwLNpwPQA",
  "key28": "5kUPd8xJyGAJcKFHdFFtcHjdCqN791AdeBiKsgW9XueJd17rYeLYSpqZjASGaJLuVrcY94yKbdVZsx2zHfLNaoZV",
  "key29": "358f4AkGZiEUATpivVYMidPg1gh2o7ub5TcuTXzN1CDSWGsyhi42Y9AHrrJFymnYsq8K9CQyoy7PFuiiRgLzKJzz",
  "key30": "5wVmoFk9V2Ufx9Lt4BFLkch1d7TxMcEqRhxRu4Bt6CqVzN2MmU4GTNTDx6gM6zah7jqLGTX6YfRP2iZmsFc7Fk4A",
  "key31": "FrPZERqPkBgUaSxfpFkZ6ggbWpv7wTw4Pq9nhvk7JTkVSBa2fVHEF3oGQse5tfkWftUDgAdoKeMPyQDUtyGF4U3",
  "key32": "3NmJH4raGnH9hyWH7wzszxAdcrGT2kj9DtM4fokEwyoUVNwfcHSCzcBtEKfsqSky3Rd8Z9XV2PkKGnR13wQQkZD8",
  "key33": "XFYTHsU1NRhki6wn7kzZKrvnndii5bWwALRFVC7XG2f3RWKe8Tk5jLbKbPyU9trAJXc8tL3MnjvFeunWDBsSfe9",
  "key34": "5UMvu8CT2THeNZRgHyAasWQSvxAuJVFSupVxL2fMY95DjniVeyd9fW1kB97E3NEUkenR2ibtjZjLVRGkXFQZhxim",
  "key35": "67U9ee1rHSFCUYvVqCZgLy5SeFBfzZJbByGepFAAsK9yerAAemcmqUq9RcjLtB1qBzWiW9Potb8NMnMqYmp43yq1",
  "key36": "3BHL8vhES5rmTVC5qdNyc3BjV47fvknuywoFteGNszw77NrzLhiuepyV2V1ofLJHwNHcAe8EW5nUMiV3Vw12Fs1",
  "key37": "sgvR13rXdr3zPDBQsfS4oZhNFvbQCijWpEAfmdgVnvjCrkkQSTbCJy5GFJNS5TkLmZyQuRsm5DBLszMhMTQoe93",
  "key38": "4nmDH2f1Ldd7fUnJBjA7ESW53AZcCjcVoHd9hhe7YJHwenTvSbjxgqBHA4wcHr5jE6RJP5NowqxNCftiw3tVTQPE",
  "key39": "2cWw8s7vn1BiM58ZLpZk1Cwq6vZN5CauBqA5QxarAPf2UE7hEHbyDTQEuycjLAeqQZwqs4QCgiNsSoj7a3NH4uiB",
  "key40": "4J95UtgLpUgKKN4cqoPnH46Qg11otciHkn3SSUvUfX5kgPJFvvbNnp65c2TJymtc3ojfnqWNaGPinWcq4JMR9fNh",
  "key41": "3CbsdiGbTQKXWPNtJCLHFnLBmQ77fAdfVjRvvQuxyuTTuV4LBz8e58ZTvNiunWoTk824FGuRiJmavXa5A4skMPrT",
  "key42": "gB8G2rRpYr9asXAspTnemfAnE521DqkX33RKi9ZXesgZ2zX8VuHZ2Vo5yTMprpVFWKro6ZemoZkAZa6gFH3GJtP",
  "key43": "WxCYg5MpsYE6Mkaxka371fQNXdSqP7kPz6izs5bi4ZQrZ8FPNGR8RDoUBify2W6mAB5x91kznoFrNBPANoop83u",
  "key44": "8qA2YJuqwHSmQL8mDte8VHt7hcyoHx1bXDaBGAStL2zzQNeLAwj92oQo2rwEbeZxt68hizsjdq1AJn8RbG8E5wb",
  "key45": "3q73i1h6mqH7nuh5j3mqfmPw4YKMeVDxVvVJs1r94hJSNUfF1UKQP3hzg5J1XFW9GXLdguTjSDFJe2VHTwqXMTBA",
  "key46": "4HSe6TAsLYm15n7aiJgX6Y4Fpe91UkvDeYNNqzAScSEDXXHk9j8SxCsJLESiN3tya7vWJ4heyFEe6FmPyQHsNfXC"
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
