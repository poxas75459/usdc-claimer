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
    "2A82P2HzwkHf9RYe2APgUHScc5P1cqRc4H8cWtT4PcQdcWphperCDrFoHU9p6xaBv6XhZDy6qDXGX9jwqxy9Ny9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1HTneQgsGwVbmrFsVNQgCvetzD8M9dFhmMnaBWZFnB5uYJT8BrYmuq26QD1dnnnxp1KDqRALEi4Awo9vBvnzqC",
  "key1": "5AZw7Lp1PfLCiSTkQ42HkKYb27sLK8LXCj2KL3cSsLdrddGCuefYUwd6u9o7BbEDrknjyWEZhGZ7XiCo3P24kXp2",
  "key2": "5EW3NioCGbK82WczeqVgiCaRyEb6iF8tZNm1qxdiKMn2diwRD5SZhVRUQQ5L9yCP9fTzLSw3Rk3pGPdwyacYxSC9",
  "key3": "62QY9X3NofXcygZa53BuoURjBMyq9zBXKKqfo4GhnL5dM3U8wZdTYz6EcL71XEDsWdefZPVNecRrh4hyu1SsvT4g",
  "key4": "6EBjpo55TNRYZcpTP8GPjxLCBZmDK8TSqAJuFEFv1KoGCbZBzVYD23MsbiNMitk1Hr7C6iQ6JRx898V1dWNqcjc",
  "key5": "4TmHAsgtmJpRgucv2deGLEaYfPyQbzkDdzJxLXvoEj7Vid1xqm5QgonAJYqMpL5d8tfHH2sRR3kKTL28tVyvUiAr",
  "key6": "5yLiq1DzKyYZDJveQV9cw9R8SyV6HL5sWuqXEVpRdoq5NZyG7Xqoyhoxq41A11EX7Wq8DF4XXp78nuzWkpFGjNiY",
  "key7": "zSR1GVAmsNZ9GiektUUX6tbz2ETi714nv6zCm2zmQJaCSWsvj7yNZgW1pV2FuEbtt8kcWyizaJo8dcuyZdMW3EM",
  "key8": "56a79ATJe6dU7g8iK3r6B9dLmsuPsK4M8wuwLGRhK6tifZDwJq1YWa59v2CNMWr9FQdiuKVRU12HJz86BvS57Bzs",
  "key9": "5o9jYjWRs1cqUM1zy4C4Piz4mAVi6QUVrU1G6VnmGCH7Ajw89zBRTci3ChQoiLC93yDhNjG8ETvD7Yq6Y1v4aEVK",
  "key10": "3KbaQUpWwyNewmNkfPWYcFrCybiZpCoryKFH7o1XqSvGfNZZwVVnRpR5aM3gtbrbAbFu9GtgdWBz4Jzk32yVLR5G",
  "key11": "4QVpARZAC6YzQMXXPMXCZA2PUJ5EEEdqrUavcrn2dYWEWyJmZ3wNC2qKmS2oXX6r67XzCnn9svPMPqBZZ84xsRmA",
  "key12": "3Eeb7Uhf7et7upHRH5yAVuVPB7vn8qVoYu3DVH5iepZ2qi9M6Hi4bD3oEqbcq14CsPRatLFvNDkutr8ap9wRsaGm",
  "key13": "2WKPgCwHKx5NJ1GR5YJ3ndr7PVQjrWnhs34q79DownbJRR1Aha7UHTJTUdohow9o6bu7zf1J65jKqhpuozDeiwEg",
  "key14": "ky699exVEH4iEF1LdR6d8nCKhYAUyHcSKoro1hvtiy7sed4yUZcVLC8U7KFCZLkoQMFKofWrACSeykEaV9Euax9",
  "key15": "GGgiMx1dUDhYWeFjAc2Ujd1iZZoHCUamTr6aBVT2okJ6ANryVoEcCHgVh3DtvyRsTPEcs3v5SwpRSNAKpfKPqpd",
  "key16": "2jCpmWYBjk1JZs7fWtXH81X21emyGvte9zNCigAAMLG4gnmexPwV4Cq77Lgtcgr5NH7SMFTyMTGAsLjzwGwM8BZW",
  "key17": "4uvDK1shFu7kY36w1JWAJfohrDGs3XpA9wJWAQKCZBTKB6gmTXCKdoLmy1MNU8YkfxMvxPjarddThycbDQo4SLRT",
  "key18": "46heLPJ1vQFq5Mh2UQhUUaHKHWywgta8iAZ25fArzunkCpxVRmbS76BCrSWVATtGzf6ecPR5t1ukiKNUcA8KQaUz",
  "key19": "5hsBRhETp3KxBRNWEikd5abHTLSGySLZNNbiPHpUCYuDPxq8APi12VtSr47FZNvX8FHdh4aQWQq1dbZBDj5pfx4v",
  "key20": "43PrDREVmV5PktL47qvUuZGLmRqZmBPmSmRD4fYh7U6A8DfDDbD2hZRuRv4ZBLZttaFnjJ9ZoPyeJtqT4NZuSd7Y",
  "key21": "5Ay8jCnLrtcNirX8yGuEMFXmD4VcbkeQ5RgEnGV6q35acve13oQzncExMaBqLqHbAhEHskaD3mUhYCWFmuLCU6Wf",
  "key22": "2TqjLTBhV6c8r7jgswtz3A1EMNwYpWEcQy9fmE25PF2wvjZzChHNUCmTyPGiz1cwHhqV7tiwQq7EeW7pCKEEKQBB",
  "key23": "4996SmGegmeTpnTTQfyo52vcJkheFp7QhLgNNqeCWHQCJMqzyZ5zwnHnFVQMpjVZT5Bs2UDfWDWcsVQWeQza5D3i",
  "key24": "yBQ2qhY8thmiyxKeEQ2njMWMnb2nA27kjbVdtB9sf9QJWQ98dYorMUGQCjC6pAvfuJsyp9JutsdnEwq4r81bpE9",
  "key25": "4BrmvCqLzETH5V7oqFcTNrE4nj84LdJ4w44srbdTFojGCooyKFJzN6GbYWoDfzkU5j64uJUh5oRqjTdohCmr8Wqg",
  "key26": "56SLy7yRZ8pXinbUgDkGz6Fe8tvyGsa6b17iSpyuuTSmjtSjoVcDDDyUbJbippNjgNn9hsNz7Z9ZSzLshisPLQMc",
  "key27": "4wty6nC2ArTgbK3MEkBpFn6DrCEnDASCwVoDLih1GNJzd5xteifCDKkUABqRR9eUWMHhxyQnf8v8mNbpcmC1NmA2",
  "key28": "4TZ3sgNZJh1qcwsnsgsLwDZsHgmwmYcJKcLYKSuyeJ9v7MTdxxtPkRgakQCd2xNdVYgCmERUWxRyHKgvVtbMkRRY",
  "key29": "3dWvNe9eqqZiZYSFmzvkWSaLT4r4w24xiJSdXox1VD4HqHAChW82VbM35o5WUGwfyZugKnpD1vRbzH1pxHR7wAWu",
  "key30": "4YNLzVngViWzkzVvhukzdvmHZT3WX1p1uMt2DgnJ3w1jHqMPzDQ1TT9iUZYhXduUQao9c7yMxLs1WJtkZHBVyGQA",
  "key31": "2NWRK3wpYcWopdVysKUEeGq4xmwcAnD1c6UJLEtnD4uXqx6ayfSPRefDPuM3nAbcs8w6d3WtZPJP9sYgpz5v6qEM",
  "key32": "5cYyLFrFojtEmVnBQWyoWa8wY8JxZrFtGhHSfZWWg6HZuz4puZ9yJKnMNR6RRJtmQrYBZiLmkYgzJniPB7gM3fpX",
  "key33": "2USQEYtYh7dAaebaJEpcsCvLq9vk5TqtTQwPmyoq55QZUs83MPYSct5Xd2864dYitHY9iZBkykNDYF1ejcDHxPQ5",
  "key34": "5GESRwQ3S3afj3v7SSJTMVf6oSb7SRi9HvM9k7mBQtfZjg39ni6V8F4Qy6BaQuAwQkBcdiRrtzXim4qZLYdoSn4Z",
  "key35": "3Y4wEQd3yy5AbFNiUfqbyvXsrtFiwT4BYpQZjXxTD7P2oDu8NC7Ci7kqdtyxbLywmmZLkpUsTScG7yiV4wyV94vr",
  "key36": "5b9QMmF7qWF6WbzUkNYE1PKXcAV8XUwBMtZ9ZrD8JEAqMt9dpZQKgFxTApqdJXjVyZZ4s2zP1hn27BhpoSqvdtxS",
  "key37": "3rjxCp9vD6k1w1WTWDo4ytQ8oaFay4NwPGdxBK58tox1S61xAK5oYgiwdR4mwP9w2MpAq7Atx2JVLMaTH57MNequ",
  "key38": "2hBC97pThZHZHY4nEEBA9vTqiv6SCCyyu2MME1kn6vj4crvRWfkawggVNUxY15RL5WkxHDmHnMzUSZPMFW7ZvY1k",
  "key39": "3JAGhU4ZfuLmTLznzJVSJgQvyAAdptZ627asVXFzEFdzKL8oUT9AJ4As97q9coZHNu9dbRZLoXx64j8LBHZBka5D",
  "key40": "391rn25BNoAvmxPP6GNk9LABZx1jNQEptcE7g61Hm9dowbXE9BXf2WNLBQn6LDdaYU4tJtSy4psFmyKxyp57Wk7B",
  "key41": "3HG4fy7VcmkCVf3gGjpB8nNrHvUy36G3ZnmP9Jr2tyKJULiTyZjhGvPT7JAxXqfBtfshtxREzh3G5LKWAVzjvZzr",
  "key42": "rcQ4dQtJviNGWaCznuzahKFLrKEfKBwsN92Cmx8L7y5sKGQAPUKFRmJMkeX4x9XBbtmg5zB1mQF4BchJQKNwL6x",
  "key43": "2YF8UenpqrSmmt5vjxAK2btPWCAPd16uiCPojWBNqHpRWW1MrJSRDTTB3EVYK5wWSEjaovQjetXUHfRgK3RJ3s1D",
  "key44": "2mcsxuxg4deNfY4u2Gv2thJcXTmunVTQCmFPcfXTrM6BMGS3ix2a5k69BzkycNSJM6suU1YnWT6tHGBsxoL4jM1m",
  "key45": "52t8aVLvjzhgNoZwM5fyYG1zntwNgcgyupZ3T6hmsa83QwhJjP3qs8DNmaRJaY1RzD4Pv1C1BfUYrCavZK1gDanu",
  "key46": "56fsWP68jUXrjmPuq88fASTBCRaf1hPh7hkqMYgMHZ7MisZxrCQKvjNmSbrXpkXY5KDsZAegzH9gWok71S74gyq3"
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
