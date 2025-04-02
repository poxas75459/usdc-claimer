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
    "3ekDxVh1ifbg9NUYM2YhHZmVEGYiUVhKc47mmZh6XrfqCNSAmtN1ux1cWqaz58FxQg1MkCpVARzBKymkwpKc2iKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cxm74zN6mpX1RmgvZz1fNFS8QKSZfTcaYBeHK52CHxKVzZRdrakY3KEghb4PAheAYHdCYBucJGdwyro1bcXwL6",
  "key1": "5SfFtCkAeJYtmdz1tYRDVT3UPvRHcUF48e7YZc8dek8v47stBptzLqECMfSU6bcuHLBsbUnHDX8Fq5cjhwQ4QMqQ",
  "key2": "5VwAo5S2H8iqwr78UvcAhce1gN6kAE7kU5E6Kqn6bHm5yxU2SL7wknJ4QnDAPjHcHYv6JGh3KoVJWdD4iEKJKVdD",
  "key3": "4JEHDoWchqcnLoVZfpxUCfKXBZAgn8HoZV9Mo38omuSTvbPRL7EbbGNFCMo6o9H3gCrsyYtnxkygK7p8UPz5wdSW",
  "key4": "4UHZf3qd7XBHR3vzpbJK4SQmsuNv9zaEY1QTSCB6TQC9k5QxMF6oEjzd2AjoTiAh7cNNdeCTMDR6aYkxREoqzvfF",
  "key5": "NYVrBXcQxbuWQhmTB7NW5kWU3rNWwzKo8xnThBB2fA42U2CactzMySKY9gZA9FyJVXvP4CFSHBfzZP4vjEKKzfJ",
  "key6": "2bSP5qroVta2GDK6Yq6LYFaVXRPcKvmjhoWRNWWVu6SCca5oARZ7tMcor9osS1vPWMFrJs29rxP5Em5oHE79ZiB9",
  "key7": "a5caM92YTuFze3ZBTYM7qrV14AvMvyiz8S5zmy5qo97Ti4WJ4GfQ3KkdAuR1UB87SZCpgeXhzgJXUowySPm83dP",
  "key8": "4kbPhjAtSv3iy6py7giv7BF94qyS4d2fhpdmcn7qPVTJ5jSJJGVnNvFmYVB436Wzg48T9gjGyLvpANcDwYrBDrPj",
  "key9": "2mJPu8j4fi69Rp4udEjt4d9CkhgVU6dcr9sqXiSVzRwCSPoqQj7gdjEPJsSPmggtfFeir6c91AsntAQuDqNwEbzn",
  "key10": "5QFiRmLnSu11vnktXCt88wgpdzVx1woNAycRjjLfkozTG4xqPmixDf3AXsVGqtRXzD9DFV3eQ9xrxKCVQhJzPHWe",
  "key11": "YToxhGbxan7uNSAm9VG9DbeKkTDYkePi2FBdpjCWnSHV11ZX2jT1eTPN8tjMWDccUq7TjMts7fzzfo54RvdVJSj",
  "key12": "3EamPr69BUvr6VwR9wtGKcdDYF1SG5d5UCMWFePSJjpuzVDdxDnynwqViTgchTXoU9yGrHyr8PoEji7a7TiKrWCP",
  "key13": "LYyZPN1wjK8jEvafzU8KQiwjfUWsk7hn19JL1Ph2BjGzSwrWvUMuUzbLywe2VLgrKYeDnAN2UShorS57XAcxCsv",
  "key14": "283ATgNgvPWBtsmNPDtd2SByg96e54UbFWZgkpUSg6joEHiBzyKmWHBmZBbWgmtXSj9KetFBen5Jrhd91Jv9DLcU",
  "key15": "4Fjwt7mMmv1SQLkEVLoQrU5k2GR8jDEJw9RMvsaksyZqb7mgFxTKdXKPfFeqyamSnTrBdxv83hQ9LsB513YKLkzG",
  "key16": "4ieUUw6hsSXezhGiF3hPH6nSVmy5EiGG5S7RV9e4g7u94FpCFcKXAyqsyzzUVb5UzNyqTKUzUhdpjuvvq9PZNkuw",
  "key17": "3ZrsSS6NfP4yZesHRFVkdBoj7fb5venuWDgj8LUmr4x18Nxk7fWdjscF7yH3bsUWsKXuBEuMyrhuvf8DevkrXMii",
  "key18": "zscxzfbLZ3TvySzVVZzik45YRexygaKWpr4DyUnM6RbFQEtWHCVVKSUE8y2jQkSUDDHeSVtuETjdRgXurqLGP4f",
  "key19": "5jCQ2eGBvNBeE8a4SvFcqxbJxZBgXS88kaowx36BGAnNcD2PpVwh2DFqM3JcZSS6AbQU1DZyW9usvvmAJvwpAzDo",
  "key20": "28dkg7C5SpPL8Q13VAn4qLmakQjFj7EMm3opTuJFkFzBetNKMfoULX9v56uisoai5dN2HcwfTEoJQSPWhMSpvvCm",
  "key21": "4gLkaTeHPuurTrbSuxhsHZEFfGH442RRYwmjHXk6KgeTDZcKnyyBUvuTRYccAorjib8M4LLsydwmuQn9pQgMakoX",
  "key22": "3YB39VSZysWzzG7Avg4cRBkikPUWY34AsUkfchv9VcEjLBghJ23xvZxtGWZNMeoV6Nazxb5Kw81YdiFPRryuGE1r",
  "key23": "395QZxVPZuwhVmSyW2ffiem7Bs1dE8h2UHHin1YyKw5cNtkS7DNvxsnpayfxgNt7SwFjsVQNtAe3HmKzeAZcUcZq",
  "key24": "5hNWcgVMQuAPbr3BkZHutqh5L3Rnk7gfcuyDpqcupgfoo1ZSn34vTYJvs9LPaZzpo9Yq5iJ9pRm9oTsCcwzTNqet",
  "key25": "4Dt8yCQxC4Xh4cqwSUwgCbq2QCcivq4DNKDtyYDBAGVuQJbHUNZvdxZTT46AwRQwCnPTduNYmv2LAaazGY3wPDQH",
  "key26": "298eepbK79JdHSkE4L6KQ1WCMXxxuu2YhhmeMLD9AzG9SJpU6gru4fJEZF4HhGzqEYwB22kjpJ4G9iMYQhJ2xWA6",
  "key27": "RSTVnZmiYcpcGe19KfRXWt16hjtGcL56t8UH9Jn3GDSEUks4KyAKYeSRZc6K8wh3uUBqNMToh9ZrU3aJXdj7yBT",
  "key28": "4nZmmyxhx8hdWELgsTAVqvTUBLZXBC1tGojSqgLBwecCFPs9HPgmfTsZNrSP8Qk8Y9iXj6jrmrXrEeXFvsGggxC2",
  "key29": "4vB3p3UwcXmtdso27kBcPdUsS2d8xKKTi6QhBQ53T2M7YyzhkjkgKaM6KdhazHvnsikPSjxAj5C4Tw4hvve6Mo3X",
  "key30": "3GYdQSvgvbqPY7Q9cncZNe9Yoir1KBJUqUcUv1wdCydUoZRdDLRJuyrS5uAG2aqM7oGLNbJzm4Cz95tX8zj7khNw",
  "key31": "2tCTgEAVFpWQbDmwKAMskvZWpH7fSuu8yd9w5DfrFeAZ1gcJvLFvarkq4nfEHYEjAacn2wDZKUjT4sujPhuKTXVu",
  "key32": "3bomJ2tXG1QmnTtnCakuuE4ireCdbq9ECJ1TzREifpFMzN98bnbYMRRq8H9HLDQS4GhVjqCZkdwgNAAdnKW33gQR",
  "key33": "ay4B9gWqP979zJnmM8PjKqYwP2iJUcqYqKst1rbftdGzijqoE5hrP7VuBcSEijmbe5dQ9TnhsKacHZTiQvLCS1h",
  "key34": "2uwqjERpQtHwJgEe53SGzfNUwqNqNV9u87TTXXnmWcwh7RtsvGNBy3RCUdSYXr5r4UCQpwRWabEXSgMEzQjecuV7",
  "key35": "27mjrLthvYS7X1TGGFgWRCiHH1hzzFXa9JGCDPjGhtwDoS1xB6Xb1YaMWZbgVKjcxDqqzdekPgMXGjG5aj4adk1m",
  "key36": "4RxFhgdNLwKGzfamMWT3ggp7CfQLSYfLqAVPH2Nk7LgqqaZa75P71BUDYnh3qrCKo7cDLuhdgjFhd3jRwKdPkPc",
  "key37": "2UmdVeJLto6cQxUbeoochRYCfcVVke1CRp8rXzz3fnXZ1ZdankMSPekSJWRj6XxqoEwMLamajb3dr1cm8gQW82cu"
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
