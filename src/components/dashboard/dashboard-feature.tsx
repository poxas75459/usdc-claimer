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
    "4g654iv6ayx2zNG3mCboW4ePwVSKzGfkBQmYvK4jKBoKebrgBJU6FazkkHVpDhQgUwDNc95xxsb54rL1C8WRjdza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WiDZxDGfpGALddt3YY57N5QKhpgN7cGYHoqystUxMeaXFWpa8zkz5JJZgJ9PT2uCGoYwxc1PwGUR5cDkU7C5oHy",
  "key1": "281xu2jG4D5dpFWkq7VKi7VLj2B6DmPTJoZmpTBqA2WPTe9EQH8cVfhutVqZrFR3fWLHqEzrgNg8bhadHzKfvQsq",
  "key2": "5eov6JwwWfyf6DySmmiGpqiDwKhB3VZ9HRCpsMUJYReSRkBQyx3NKm61US8yE3CSW56is2XNPe8oX775udUzapN9",
  "key3": "4pxq8ekSVdn4WV6tt1ZLy27s2W4xiV66vu2DahErDypGcxagi4D6H2LFeG8PmqT9UTFcasaRxsD6tCub9Zh1xf95",
  "key4": "2H5mWpAuPvfaS1edyvWRoziR1ii8Cy6mG2hSX5ea9qcNVpEDyPe9UNFt66fbPsS5WKx96wrFJZeHHkevNsJfy8Yd",
  "key5": "cf2bVa2Yay6keE5ctUpVoLiZwGYniM7QNXzkP5rs3qwZVyvcETptoNciKTwFw3w8F8ZJRYDq9NLLf4vkSU19Hg3",
  "key6": "5Gqh3QFSJsydHYheddbjrpWY9eXPVXEzxrtTqHBfz2zXNE3JdJ8umAxYkByJBdoZQQUjTEWqu23FfcXzNyX1r86S",
  "key7": "62VD22RHpTK13vyeZQxhpA4iXet92cyjTVnFwaRtN7AnuPAeDeWzSmrrvq1dMuPBGysShTh1HP1pUUA7MxYibLeo",
  "key8": "4gd9CdNebzqzF9bZ4D7f9CJmmVCqX8z3GcvYmUtrKiaprCuqcLrY5GdhYPWY3J196esZx3C11tP6d2EQNQAjVWwA",
  "key9": "5tbe8corKjipjn3YFGEz7ZcbATjhUqUYXffHr3gGnkYYYFnt1uQrvEUZzQjPEqRvsgNaRwVS2swmUe1TGLt4Zbqj",
  "key10": "5MPbjjsZHpkWfNRvD52wFSTip93GTuz9NgmmrJC5ugkJRJYZ5wKyApGbnBc26DSYDgTVGU6zc633FGpCYp4EpLyC",
  "key11": "4n5X6zPdNKWrKkCFr7Rec6e93fWLQ9uYKpzJA4dz2Yj5KfkQdb1bViZR8sT4AjkLAqQQgktWrCBdm1nDQWjxZdTo",
  "key12": "2pVHRHSm6JyjGZgb89nrZQzjvT8p6L3L3KeRG9U4HK7WH1CnQi5bo7D3jBBzehGXvrthBCczKtD3TjHJuxQRjed7",
  "key13": "2LLtRTdYG8hwW2GVEMCbyR9n9RWut8C8CYMFHkmykPrewcxJoBQN3nnj2EkTdLPwNFgCGyXL1NC4CQHRQaXdDD6N",
  "key14": "24c7eeNoSFyEp6AymjM6CTTZYEDHnZta3Rk4rkL3giLzmDNWk2m7N6brZynApFi41mJ3ZMPJjCBjdb7Huzr1ENtw",
  "key15": "25wzEhZvUMS113BnDiRcnKjTpjStkdPRZ7hhXTWvm6FqtM9k63zLKmP5sQ37fTeNt7pHgHmzkiJyfh1owhrMr7Tq",
  "key16": "26H96Dc3w9Ubu1qw8GqioCVqF8d31BH5uuY8iMd6uHscTjCkGaZwdJ8hWzCaNeaeXadvVNc1U2x1UT2RPwShCi3M",
  "key17": "vgMx9PMyBJ8rUf49iywezy26rA6q5L8CnnNUFg8UEez7T6gNytSi1tskRjfbDboUhPLrLXVigR3ttAHPv2yk5hv",
  "key18": "GfbFwxH4DyvZX54URTB1qtNH9cUHfTtyPYreBWVqttrQQyXG3JgcP9USV7ZpmArZGTxExw2LJKpz3gW8ed5qmDJ",
  "key19": "3XBsogrprUFBgnuiqtVmQ6mAi7kkFNMZLFeWjJeN5Xu8LQX8AsD4MnEZHWabRjjZJEcpfjkqCTDUxPBfVHvgDAk5",
  "key20": "23xKx8fyWasD8z1WgjcbRFNmEVRxeAtHFV2Vsuwuh45av4Z9ZEJYHMUMXxgFqMBg34irVwzs4XUWs6cSKjqPKZxk",
  "key21": "5zzRitVo2YpTg867DrZim7Tmu8wqpkaJTK7XGoR4EcB7UUMmTXpp7wqVJ7jq9KAnzF9zDMgPPKwPh3hoQaWAEHVu",
  "key22": "34fuBj9CyQ37u5ADXivdEwTfucdnhBYfGyBufgMEnK36nvDafhiNBA8hBfqCxMjmQpekiPucJtEoTgwYyiYhKzgD",
  "key23": "ETbu36KG7Nqk7L5u3PZsqnV3QznRz6hv6Nt3AWWyao1U36wSDkuHpfjXANkNBgvJqkfoVCdP4GeqKw4taFUpWkw",
  "key24": "2vcQZbw8diV8XH59XbXNyeQz7DGXctykNyimMS2kAo9KqtvYFSkzrEuLcSGR56v23y4QoTHYAsnrFijC2TVwtM3k",
  "key25": "5Z5iYsaYJvPHhVS4FNzk527pEreKskbWkvem68yQXqhEepQAKrWYEwVsZyJ7TFWZs7pySM8rrKSbhHrqthxvjRKd",
  "key26": "3BJ7RWZNAaWQqg58vwox7HbaCAsqDXJWpeggx6BFL32SbVF1egm3xJ3WcSYmFCN3mqfzmczYaSXuL2DrCAVqAtAr",
  "key27": "4F52qQPRvtvboYePWc9aBsQvVzKDDu52wMTYBXnpSatVFN1yuBeKPtVTwmm4KpXLMmFd7qEUgm2bWarHzTkvRvts",
  "key28": "3b4WpyeuZRP6tLoS6k78Si51NTCQWhpxkYTw93oYYPsq3G9BQCxhZaRX5RPumWwUi4JKe1xqafzRM3yWUFDP6bMM",
  "key29": "2UC3PV2kVxGQgJcnHsidpfBfcKbDVXQv9354joxD2BT5nbbnkAoLes552ijaBUkA4m4cHeCNFRbwjnATwNsm12vx",
  "key30": "5Lvohuv4sAuWWdsLy3RLuwn9udYZ7TS5qJkcAfPfSP4SC5kG6D48W69tn2cbEJHMXGKxj15PSmv95GSJ337g1Auu",
  "key31": "3HBPiXzdsh5oM33hWsLcYKE66JVAwAX8Uadu1RrTRXXACrkMzCR3DX54YkzsWpv8yjL9rpfP6v5JwBUzF18yyrXz",
  "key32": "4FM9TP5JpqvRCNYFR5qnbTD8QmtxtfJfUwVX9Ch79fByjfywM7N5zqbtsnfHQWtJrtSe6auaT8c4HXti1zuxmpaM",
  "key33": "4sb7CQZQLWUkcvwkF15HEe95R9NJuKSaYRZSp92EZgwvt22xNSXGvYfBnYewoxnGB8DKRaEuRnRVi2GsT17wHUPw",
  "key34": "2mJMqvg923cDGq3AYPYbdeQV7GQ8nbnocy928f1bK3mafq4gPNE2MjwiQemkHi2LTH3JwKCC2Ke9xqk6TxSbYVwQ",
  "key35": "2NnoNWFH93g8BVdgsmoXKPioe6UNBwKXiF2T6Ki7trUcYwacdbKE4pfLwsmnYdV7zbsrpbkRHD64X3xvkWvpMGs8",
  "key36": "3KuY8Y3CsRKGrZbLYHEdAHQKZhetWQ1UrmLDmkTqAHLrPYyB2MsydZuEGkaU42cVXu4GWwFhhPr27XmScsxFkgZD",
  "key37": "5XPnqVRb1rX1wVHe7dEui2XLbA5oiGVYbDTCqLDCddZK8MHjVaopctbqeGT1D4t53AojrtrFhKCdYCxiZusqGZPe",
  "key38": "tQRym8UpBDoqSNdrbzmGVTMQYxQdpK8Km3QTgS1uHZHXgZvTfR2eF5rqw9rc629vfYXQ9pY7rxPivDxAmJEahiC",
  "key39": "3iSS3KTQaaGhE8tUe3rreeV9tpGQpPrU7PUjUqS9o4mRPpc1EieVcR3uyCQqWTaqUbM8T8cYYW69spq1qnDQYwTK",
  "key40": "mHoVgJVJgXXMjFsks3zoWSLzbQ4LtWAHKjhW2Q6oyLChv7eGn8mHH7Jw6iADWysp9wPse7a4tVAxk3p2RgKsze6",
  "key41": "488LAE2dmgpUfyGHeFKsAUZvMeE7VZNEbGmW5WGA1yHEbs7tKySw5CUXn5ToDJuVip52o43p78iQfE2BCFoh5QNR"
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
