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
    "2m79xw9gXH6vPZKkqgGidMRQnon959npE7YKUW3UatUR3xPh75Z3ZPQiuAy36oXtHo7NwRZaXmdFvpUKsPpf44B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41nbjGwQFDuBFdh92LrrU4MPwXCuFWLZE6RosZoQS3DMr2t7VXJSSie7LLHovwH4QyM4s7P98vnhSHLXR6oeMVjL",
  "key1": "2FBGiBziUm66YaaxGPmUDcQkMarRmU5DLCPAwZArgPeTEUCkdZGwH8rsxbiLeYPwsfFPwd5D1cR7MnXZaeFkKbeL",
  "key2": "2Z1RYyeu2HxTJ1vdiKupPkGdPfeEH9su5HHuRjQPwgScgQZWXxtReKtVQJvRBHuTHypmrx5kxSFWv8PiKjDo6zEu",
  "key3": "5q5hmbgVYcyyYQRMgMaZ8ZduaFcRAYvQYWpheyYoqZeZPEbTgBEJ4UPUhZGGtipcC5FTsWzNcNKpp1nPzbsEeCjz",
  "key4": "znLDBBKvuKpvhAq7xmQnAVyupqUR8f8qYrSXf5yTiKvp3HenapXAoPRn47hoXq4yJzqXXWNTGRoU3rMQ7FyBFb3",
  "key5": "4uFoa4w5HNuQCdqJbomesFnMo1HDtzG3CPXgaE9GfudRqfFox2MPxuDxiwzQuMNYfiGf4gYB111eQH3BqyDQKXq",
  "key6": "3dU3nKcLMQNnqpQ2Fd4dkuZC4QiKDGGH8J5xwgkzfxWD9fFUQ1DdWqhty8nqurZXEjuzmJRiPekgQfew3rPj2hsJ",
  "key7": "5qfwanZG7QLHr8eFw9mzUoqPagZw6M9zgkJmqFGw12x93kMywZXU4QWvVngneWHGvHHk6veahEMaDLMo3wfmSPMq",
  "key8": "4LV9VgTPCVqCzpRzCu2kV2GXddrJju4qh8T27w6CUzfmnDJ6Da2y9cvexkTpP3Xyf4Ln2MacDfUd6u4WM5FJ4FHM",
  "key9": "4vQ1KHcHDKVh5LXcRXfh6ed182Q5htovsvUASXFkND6AiUagUHmBgEZJCQpqy39owVgXgTFoRzyZMB4No2jLFggK",
  "key10": "5Le8dpiwSKsXk7J1RcJFFacoBnSSSdxLe8noNUoGCHvx6PpKnABDDroXpJE53EtMbucWw94DtoBK2CMW7tAMNZu",
  "key11": "2S4nATKh8jmgTCd6d6vzierCbPcMrGCX4VFr2bGYaUZDhjcxdHnQnz5dxpXaahWURptSanmq3np4nGTCVCj3Zq4d",
  "key12": "5NFEEijTP6kEjBPH7M6eY1VrQ14cxTPnJuupEnPjsrADLTGkb9wUj7Sa1KuPwBsyBXK48pHWVrQ2uvsXHTDwmFkB",
  "key13": "3cayiK5YF3vPrY2nFgTj2kvh43EyfxrvFDwQy45cCuSb7KUnGCQKJbHN257moCXDBh51PX2aEHazmwy7yNyarTZ",
  "key14": "y6edANiAZmEYPWQWCq3HarLVLXG51iMSKxHD67PczyNTS5G74J43wqd39gGeekn6pxc7kuGdmUKGwawEqw5vWFX",
  "key15": "4NfeHEeY5QE4HCeUtL3zzg8eY6VWUDnRRwSH6jK9qtffMgLjx7kJj1nF4LbYSNFYtSfCv9o8AkSTYKLGMvyuTnNq",
  "key16": "24JBiejtwu9hsbadpzreGdxVkfFTfZbXLtJGTpGaPaWuNjNoB9TZYd6QVFHVaj4VxFb6B28gfjiRuPhd1iXya626",
  "key17": "67ZKfHpR3dScfLvNg4Wo5XDFXpE3X8DCCTi2ATiBQZvHKkMHySfaZ1RKP973U4nkGJENSFs1Vjahk3cxUK2RLfpQ",
  "key18": "253TLgu8nNrphs4aG3Y81BtNn9btGnyWisQUX3U3VimpBt5Y5XzrcKTusSAtxtnYtJxsFkdMar2YRsrzozKFMR3j",
  "key19": "67TVvxXF9knhLxE1VoWDuJ9S7Y1FeThbZ1f8VgP1HXtXiy6hgpmHUNV1FHY5ybVpDqavTuBvMr8zVYxe4BX58zu9",
  "key20": "y9EfKDyzGBDVjQUTTjMCamxznr7JzMT5xMFeCMae17cWqnGErN4vv8r3Ty8FQyRcAjLBjCfThKE4Diy6atXpJGn",
  "key21": "21sfiM4kZ7rZkcENxW5sEET9gT4ZurMprcEyz8aLePFWai16FQ1bVJEtyR2ket1dsUmMRnP9DsijkLMEnadNgWDJ",
  "key22": "2iivvTTnnX559c2UMvMDLc6HVfg6uAvcMbgoXvRC4WC97KyBmDRrZ5Q29sjBtVn1K5MLMTmdfBpUxWknYnR1XEHj",
  "key23": "66s1jPLytq6zfYTqA8WGS2ro6dDetPrq5cC496PLNQ1QjLYXc7j4VxjwNFFRB9t6iEP7RvNSVcQZ9KtvdQ6pHdMH",
  "key24": "45zHStgNehbji8tK4umwD5cQmvLpzfaNUzftyJXyoqHShphrnLxAAFDZyGEWY5LZ4vGsMBLTW3E5dk8UNPNFPpcc",
  "key25": "3ugaJjazfWqauFNVuNchBoj3W9jRpoxviBst75MX3t4hBMUgBAJ8pTqeK7mkELoPjQ24chFqrxth9phYqKfnVoSX",
  "key26": "nCyCuoJbNW1W85qhrqacKiN2vCeYDag412XcbcXGBYRjo9vYpCMJe1zt2kiyvEaLWUNjJwPYQUuUtGVvzg5JG8i",
  "key27": "2LGxzg74RPBDA4Q6co81uJaffyYsUmmFiPgYUdpVA6sanYuMhc6Jz3gJzJXSGeQXx44NFkLv1VQKenNBpBu3ExES",
  "key28": "23aMYVswdfQPZ8iSptmrjzD9i25EJUymdfZPvNDtJaprvfWS5CHSuoL99F1wKtoS8CFZ75K8kTrdDCy2KZy3hABJ",
  "key29": "5ACCrcLuYvmEoCU8XSbDkCA93V1gCuGc8TbKf21jnAjnHcWBbYxK4hTPv9JAMssu4gbDh53hPdFds7evQnYjSy9W",
  "key30": "34A4HSiySGzvcHMgEGjGdNquTZ4mEuPfMLDN8sGBCkZMw6T8JtDyTFtdD2xwqFHP1KuG2BxAmPrZ4awyM9hZmNFh",
  "key31": "4Z6XrdKDvp6V7XSEWpwDpA3NRxFdiAe67eZbFAYxS8avsZnGUrCECooN418h1gAnsD49zGGYjGySi8FexaRoFfbW",
  "key32": "38VJmtXUGf5W3rhehDUxcgMpw4HAg7V776HnyXToqhfph7Yk6wsKuhH48ohW3Tevv1LWZJvt1SottvQo96DBBRkw",
  "key33": "5ErsV615HfpXUawfL4pnjWeFoFxSWv5Zt5Hdh6SJL86XiPUkr3ZewHZB5yu5SmZMjvXowZoFBz25BYH6eCTjGz3x",
  "key34": "jHk9fJCURfV3jvZJUe1BjqDjiruPT8mL6BN8rVaup26xAT7wEMZwV3YszZUgiFE9bAcxpnnsDbeM6yRE7cc77AT",
  "key35": "559FixNH21RYGP2HQGrinDbCt43b7CoRkr8AKJK3VnWmKQxe6hnLYNYzQXDC39wQJQwonrKiVjqqJAxf5mGYCwPp",
  "key36": "4pZBr7pwLDm5M6CJEt14EoqJ6RudL7DN4BrebgiskQFPZ9fxLszuW8zig3QZkRAmxLUmUcuen4s1cMqJCkdrdYiE",
  "key37": "5YGMzCEwxDoRePGC1uBuiwCL6bNa4i8CJcHuYT5D6gxMRt3XMnWiKAfZfqE4jb6nwyUSvcZi3LatZmknXmpYY1w2",
  "key38": "58bz2HfgJxJ72iyMNpe9JRV5aKKFEEzzzseNBFWF1kK7T8XKG7ycNm78gTHQYHopLMHqgoEsGrAwE59S1V8twYcq",
  "key39": "4uovyfNDSq8rqB4VmwFgER3j7rgdvf893w7WBGjVGvpcLK4GYqN8SMp1pSDU1om4tMgwJemT699d1whZM9T1dqev",
  "key40": "5SorokQVi5NWCP8bidBvsUuZ2WYagEuDQQ5psJtifigqA9kc4JqpRSENEacirFEbFAiBhurk9E3DBawTSBHoa8dc",
  "key41": "5UJxWeJeNaUQcDb3dtDRAumYapaDvuRx67xC4ck2UkzJiLJx9LgCdJwi5ewVUiyzdXHmYess2uMWZF83eqjcTSvF",
  "key42": "3xEz4iuXMkKhdgEoYrczxRpnamUnH4sw5oZwM6BaMqtwHrVCnL9dpUxd4zdzexsSm5aCxXgbSxPUkEEah113kShK",
  "key43": "4Gp8j63e2J1nk7p23KwVA87EbCXBCpe2MqK2M17PuPzPnn9uYyYgPtXdSmDVF7hJn5HSEmF41NiXjF5TjvBz24Wa",
  "key44": "2Y63HsGGYWe819wfaVruqc9NgJDc5sPzwspVu6or1h1hLeShDXv8Z3camQihSfp4X3R9uvA3m6uQ3SGWKQFDy68m",
  "key45": "5xYWLeWDHS7FLGQf8tmkLBNDYbh9Dt6kyr9iMP5zZF3UAuSL2QCfLd26ey37B7AKK1j9R75NwDNBboPwGQpRxE62",
  "key46": "5A2J4rNYzH2xtpViuycmLTiq4WgvdsSbkt12Z5wAiXCJHjPQsA9DVTWoteSf8jHxRBM9dQ8c3ZxuqvbiddPgGcGE",
  "key47": "Xqv8UKczhQYbJoGw5kYTVYyoFtxtAuCjYKEt3bqXoNkCXqbg4aa5hJ89GjoT8hbSbnj21qP6zkqbMZ6zgHtCxdo",
  "key48": "3mbkmkHGTAr5dsiTkLWHVGLQgER4vpaV5L8AhEPdn42VTo74uBqnwc4y3mcv7WD868kxWYUMtFvdWKJYMgrf28g7",
  "key49": "5hTLzC1xtHwu3MTz9fb4kXrLxeambTn4n9krzR2SmV2mQvEkaCefcrY2fVXBLgDW2hYEQuVi2ELGuKgtWM21aojN"
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
