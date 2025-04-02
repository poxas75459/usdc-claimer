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
    "4t6psa2fvtNHikM5eoENhSTJPx1HRFNwLAAnuYc1pyEWiGjY3MoQ3RpteAaAT9g1qLSQyRv1RjvHFrHunxhFoyon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVKQzo1uSqeoG5vpj6MXbJ8qjC3Ypha6ZHHg7asaibvVWSMw9BcM1BxxnM88RCceAhcnbVNjFRqzBsM81wysET9",
  "key1": "4GX3WD5HLTPPs2wCEHWmrQDJBNBJk4Crh3ceb2YvwoiJzzY1F1jeQn3gtXfuXsvZMRBcWVL8WBiYU6e2J2k1WVkG",
  "key2": "2yA6jSnh73RveizipEyXJvGtWHNJkdJZQSwwwmQWDAoDxQHS6Du5z1McpWNfPD76Agxdbqp6faXWcYs7zAWvvvcs",
  "key3": "2E1VyHy5mQqDiyTek8XZ7matNEis3ViJzwuGiKtfvm1eH8iE2ErkPRVBEDT1xB4cAt8YvSEKJZR5j8rSuMRd7scV",
  "key4": "2wmi1PyfwX4hMG4fCaEBtqVHBS4MdwoQmwJFiAxvWLDRg3k3md4yDUhgSJPjR9C7LZhP53fQcKtYfs89oxJGH9Sq",
  "key5": "3kKTPc6gTvYXi8MP85wy8SnRZyqHEsyVU5RmmSvHer2zEAn6dLB53EfVYi4ymG1R7zBqAq4RiW81iADHeNZsTdKC",
  "key6": "NSohz2wsiMspo1x7xzDohygcD5x5FqMt8k8iqdyBVeWB3PcFSq1NkyE5Te77fgXak61oEzuFJCx6LsvAKESbxqJ",
  "key7": "2M9cLFF8XxypPQw7XZPD6EUBb7NjHGH7nCBi5j5shLZPS7DLdSb2MnzHEzB7WLX3CqMBjsrfD66SjLAQiaghFtjf",
  "key8": "582kUUUZ9Cg1VTKipUiBBFEvw8HJRytBQtBtm93sz1x3MCvqR7vS8zHU726YTbu8L4PtXezQzQayvL7ZNwL9o8qu",
  "key9": "5Ksq1r5ibjt2DWJbsTp1wGzpGz9E8X5mj1qxTPr5hT2yTSCEZ8oVFb1p2M66ph56x2bZA5rCUWpsqAWtf38oxG59",
  "key10": "39FYdfbFcWBFpabeSCbV8JArdUo4WpuGa3B5LPMLwuv6t8ZrGzrmEwxLYEHrwgEFCeQzBphekf4GKRXFZPbGfvFB",
  "key11": "h2JQzRqKZdfnwYWBVCNCGsaVRua6Fs94wSBrVqe2JbWdj4KdmK1kua3RpzS2yxZHfGqdqLq3tzH7Ys9EueSnF2a",
  "key12": "3HXtJjrzFKWcC8Aa7bfyVpeE5dUA94s2DneMZkFg3NvdVbpJyjXnW6FdagQDvqGDrYJaFoL6GENnrwGDJUWFBB5f",
  "key13": "2f5ioeofduCKm6aAkEhizgX3g6wVDhpF6NmihDbtNK1UsZ8No3itgY5auf1JVqMgi8YriSYKahXA78SWPAZXTTKY",
  "key14": "H8fqeSTFgeUsnsJwpoo52ZJZ5dmbs9EnFUL6413yMqDURUEetFrp3uB9xqjJ6uXi21Rged2opSxcxkYxQ3LwJ8r",
  "key15": "kJRjyivDUn5JipzUQ3DnrByZ52SyiUbD5vgT5VgExaTsQgWmZkZD91LHfPeivCq62VdB3SEWT1jVjtMBuzVF4t9",
  "key16": "2XjTLR5kkBZHc35Sf4a6oGxe4G4BG1KfeiYyR3gmAmJBg8fYCHjZMKiZ7DD5DZySyprVC2EBuaZAtF9cdzfNSsgX",
  "key17": "wxbjESqKJkr6ZFaHvMPCYNNXfFCh4NXe5AsXtVJterUuZ7dUekrNm3YbzPCV9ATEDtvXfoJkskYFy6HmmNDwCxB",
  "key18": "3QehgPPCmD6C6RjeAN1vngawKJJmQyBAsYcYaYaCc5Yg9dwtAwMp9GQx3a9KwxdcfdBQSguwxqZeJD72b5YauEEt",
  "key19": "4aj2nF9Hur6QwCYqdgLYXx2RW3kKnczvScgzqzm3XbjGZ9hwydydafuak8VMFe6Qh6WTGbjEc739PZtKxJzkNXTP",
  "key20": "2LSYNXuTBzgh3RvQup3Zq8m2RJrmGfJFW767ZmBiPwqq5Rv5FTc9u9xjbfw3e7FevwaeK8EhUtmfneNXGwZ8LnP5",
  "key21": "2E8WguqR1BAZdMsHzD9qYiSyKN7WTA52KzAJ3nGboyhDBUaKa2iHKRpwWydT4RAhnLzSa3Fd4YMJZBVkHGdjvgZt",
  "key22": "a81zSjjqoAQEi8XzY9YCPbGXRTa7muDYnGECtERoBHkzXYpZewRsqNCcVR7yWEHdsHMQEFJ6ZmRH9yWvdFzKVcs",
  "key23": "6KetVqci8uWpg3ihdRwF9Lszmeg3CBtm2piCedi1Hh7Zfpue89oKB8hpKC2NReXiFDRv2Rx3XFmgshhf2wuJ78u",
  "key24": "4tSq6nRJeazQ9GwgxtgnLa637CPvcPmYNZEGArHTtZvHKD9WezSR4qmiMsACv2ghbc8kyeyMAonFyNLJjWFyhnRH",
  "key25": "4ZSzbjJ65EB7TfYcDxbkkta7W3w7CdTmtwiVcpqXTiVH4zPZBN84vCiAHAKVs5331y95HqJcBUfin4jNzQ8peA3K",
  "key26": "jSN7v9WUe5KS14BrmMtmRqCQQdHXhrFRwRRQZWC3sFxMJEptjNik67asUt2BvTS7zTKWvdNxN4zpG7nUFULz9BF",
  "key27": "3UfyqiW71r7tNPsgPxk3xXAo54eMDNHj8eWCbzZWcc9sf6XXFGKqhBk9HAFj8TnzcK24YBysGAaygbqspEEykHiW",
  "key28": "3RGGGxqAHcZXgLQo8Yjwnf8Edrq5BzQ2UgLUSFofAzDrfChb17d9ueMeAf2tMfWJzsSbe9XuczPQd4j8hta6sAys",
  "key29": "2GTTwTeu326vaWhKpreFvVVa8WeE5xrYMroM1ETpyWdquS576UBMcXbYBjzSBUXtH6mHK7iKpvkaUavysNTYtrpc",
  "key30": "4eEyWcGXSJknu2cCAN7222upD9epsL4iNJBF95gypvWZgfz8Ha86jYwg4c94MJCh63iQSQoksemXRsiNPneQ6U16",
  "key31": "4XWa7Zn7gPaBZ6jGDLWoRFGarFnfpHJFSVg6ZRLrx22svhc1kgftkirx4mQhrurJ1bnQ74eV4QYgtB68VN8u3zex",
  "key32": "2MqUhyoN5zJuZFQ5x5fKKDqozu91V5PU95reN3HJXvg7F2wT7QhyFfCs659pNbpwBvYUpbPXVsVr88VsrQj6Bm92",
  "key33": "SYM4EX4zHxZeGef4psFDxqzUrEhUaCMrQqGTkjqAeRBNosTKUzmmoXvdWvRWpJh4WSezrVuZnVAirGjV3i9g1Fu",
  "key34": "3htiF87SGmcidUDWB5ofFzhzANyGWvQSQCoCQHZUjmMCs6nCmUy6JvVKJbtTLo3Eq4avsW78FPt7KpMhiALbkYkd",
  "key35": "3NTwnxM1ECvCiAgEK5MWWLTDPYLRbi3PqwiWmYKXU2C4VjrrpL786HioqMMrDAvN1Q13K7BnNNUqhhxhsKVyDnAm",
  "key36": "2gwDDz6FC4cyMcuQg1PHGrkhmk8mwDHzdCoW6GR21A7zEEdswGtGu6L2BNptug1kWRB8obgSXxiYx9SwEYGoawyH",
  "key37": "2ZcwSU58aUdb5Z8AGpHNB2Dr27RyTvz1h8Udx92459EgeSwKXwZESKRw3vFtJA1ALUaRX9emRAk4cqQdGd5v3Xd9",
  "key38": "4yxbnooUgL8dNF9JzG2X17YNsg53bmtiyUQK8BUwT9xo8cd3jeKtufkHEgnKvfHNHaZEESdY4Q1eHkqAnbVGAjQ7",
  "key39": "2ZBXxrSxFkVjVo4Ye4tnLi8ne6nphpUpkLKtuYfGv1SDBp9SHatdo7tEk3Yd3sV3EGQoMvzN79G35tQvbSvq1Bs6",
  "key40": "5xX4AkbyrNWVks5ivdfVfirHyU1PteTGB5iH3hjjN65ByhJFmiRueLzNPN2CrUhmoq4HmULXZF1EYAnVRoQZHzqe",
  "key41": "3JTAotQfz44pUZ1ArN96xygBRmSK3yJ4A91t1G47645vnwEui15esAa99w9DBjjuoioA9Ly1ZHKzoB86wveojcHB",
  "key42": "4cJNkXocYoh52BwhVcRoNDJLeEkZT5tPExMrRUzAtuddnW3MFGKAGUMy4J97jAMxmJn3pJLvP4Tajb5hbP6MBnWd",
  "key43": "3ajeLbbMTH81aHUMBmLoMo4123mQPXnAQBsP1vjV24iWXBenV4FVPVue6Pt5NJ4LXtwvfGiTZ8SWCeSzX6ftpG5g",
  "key44": "WxoPFLa373u4f1km58p6kMXW4F38V36sSkDjajveHfAmQ2N9mrcWZ5fyShszAyWijmJNVHH6FEwkWCeAws8oqFa",
  "key45": "3JkWpUbnBxvopnk6tX9wkKsf2jCVZKekZTdvCHyaYir9j5RgTnYtzFiYTzZgMTsy4GjnaMPY24Ydab3Y3XCoNJZ8",
  "key46": "3L1d1TR9JjpPNmTupJy524nQ5vabqyNzPgzaSzC31AidfSt75uxKWsEmtvWKvxHscS8WAqwepAWg7a3QZ9NA5G2R",
  "key47": "38S1qNPVnTrrW2FwEpxvzEsuMUs6syDu95SBPt7fizSwnZ5LWuykHZWop4hCtYJFKDxbAxryc5j35L1GWLNd1gC"
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
