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
    "28QhtcNN7SgBosU5mFMWvviQFiVi87NS48UZ5MWyeQ6EnbbK7RTUTiBqv6uAZHQQcCCUVPHncyBwpfgzrKnRkwzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLRedpqDZLm4AHyVdjARdzRHo13eVexBoaekvyqkE7RuLYBWoZTpP7ZFdfinxmHU1gjoHR26UmJ2CSUkrRUSGbs",
  "key1": "51bUyVVPAqQmiqXctJgn41AWGfP4o6akHDkLjsPUhd3iGEdQYp7CmjcEi3E3tHJX2PBA41d5U7LE1ZNYW2HkWitq",
  "key2": "4VvTR6e9MZmrvmeTd4Do3AzNPpcWanha44z2fV4mK7TS2cK4ZbphVqi3Ewx1zShmqKBo1CWFzKCeR8yxdjJJC9Kc",
  "key3": "5yhkHTXYQxKFuZzC4baWiTmRi52ZMCTVJqD1eWbhd2QtLfxvQibMryaDmQKF7ihMksgG5s4Au3ueNy3uAewkTfEJ",
  "key4": "Fma5VxDdjBmz2YxgGNSmaMv1SUmBoagaLDHQWDc63Le1mXyfM77dvNUNwez9ecBuaQtq4gGUEXe6XZpSBigbN8h",
  "key5": "3kC889kBipUqrBi7yxMh3TFK73eepc14tpsUgEuMa9Tr9JwXNkamMLSphKCWDckKxp1S95WrBKjNsBtUHyiVubNm",
  "key6": "K54K9f1bDpVbqgavduHFXYUZXhzGs2oauodtCT6rPGyraxpDn9fW6f9Nyk3eqUDwMVxAWGPG2pQur77UcBZfqNb",
  "key7": "4rmuvZtFSXrgMq2Db4eTqATkDtbbTqC2ZPjFaKLUbRk5Qng5GQa1ji9pyHEeF5nezEkPe4wnBD4P5zK6ahWaRhRa",
  "key8": "3ZrjzjmNNeRma2mbjPFx9ZvHKQGYLc7jPMkPEaE6WvGFQVvTWrGYvuuTkUvCPhYmTyv4dNmW5qZjKuadadxNZ3NJ",
  "key9": "3LPdvjM9jT6BC9oNfzSaxC6sXHpicGe6Zo1m7M8ixv1jJ4GBiSLYhxA8s2uvBK5kkQH73YKrwA1UPyjZ6fKeiQ3E",
  "key10": "nbcFUpoGsU3edF7w2xAbdsdeUi5kLeCD4H8jGLvgiMVKu3aftt5WZwzB89dJbUSX2WaXyrSmEXnhvaAsR7Cb72h",
  "key11": "59kqk42iHem2BGLiydJgAUqG8gUe6xiDBYdpyNTf3Rycu2ZC4jSi2VanGyjopDX3eV36KtRkyv2GNLXnv3YKmnoS",
  "key12": "5VgY4k98AocYcW1AiQRpdYwraj8RQArKj9d9eczsd9FnT57KqiXGJyXXUzRimXNKhsLgKVUpDCsTGC5MujR2aWVP",
  "key13": "2jfNtbPp6rViU9918X2yUC29cnf9pq9HZdE7CpTMGEtCgfk94kWAkusWY2qphqtWQdW6TDVNiSFnF42tiCRGAu4Z",
  "key14": "2jUSbaftoTkYeVw9XdZVFLPM3WoUyN4eR2KTPzYGqHWDJYkiZ1KSiEeBcUFiDvAUGJzEs51s5BJHBdt6rMXRN6mQ",
  "key15": "5DoBehHKu9dnFqtpZZPhPKFRLSvUko5S36odhnXGUwLurJyDeQ2pRq17psjPbUmf53jZT39RWQ7dHvXcZwS4pnXz",
  "key16": "2suDT627pQEWwo8KESDQBoAU2JW3aJXkFgJRQvFmvQkd3qpHAaTT9A48RhSr6qXRvkjE7pHPw6SGxZ3EcZ47PnPp",
  "key17": "3FfYKCR28N11ZinZH9DkDPkxC6T4mAX9EUdDTDKsmYvEnZCbbxgZbSMubN68AS2VFKGyaXA3znFqZSWigU29nwJv",
  "key18": "4ALLTPyqT9HNghmMtwhc1tmt1wHk1bdLhsGMRYPY12CrTmz8SFwcsDdhNwCBDbGwAh4kCCBeAWdJB5oN7SEpAMFi",
  "key19": "E3iCnm5hwWYRxDunehMoZPTBFgL4msoJKmZmjDowc66YDMwBSCNHvkUkD32rCMMTVJK6gowF3JTkbd82MzhTVG2",
  "key20": "4LoJ4hxSgHPWkJEfxU4B9iHkGxba7kyfjk7irUbi3bmMGEx8Uq7KthpajMbcQE6AiD4ryHLWXtBLi1FqBSoykeo6",
  "key21": "3xQpRa9Sf5fDsKZDWBMdpvuuqgaf9QYh69TbW5jLrTxUp9eA9hR9iPvFpv5XxRNjEqpN41NjYqM9Xu6YmDqQ31gE",
  "key22": "rnAbKPBCN9dq9Q5n2NGBzQteaXpWTGvUmYcU2ZcSxpoDoh882YyJXoAujEmxwPf4Y1DzBJzY8mLXUVYPijq8hu3",
  "key23": "5qw7aoBs8ckd57X2uYnawUM7xCkpfe6dw72nobsNNwHhKKQoDFqJf2DzcWs6WGBfQuJLobLgJMdLu1UAfsy5FZZp",
  "key24": "2NhCjeM7mFYrFxKcgCuEY3uwZspuYEtBYq2zCSVZLA4n4HUqKyhX8CPLX5KWSBynveS97oShEhJo11cLs6BZofYq",
  "key25": "MACtLvHFVEkEYvt9mTuf6ZtNqLdip5Mj88qoQxjB2m5oPjzTR2ZQvvyQUKiXi8CSWXMMVKrmAgQX7DSNPA99SE6",
  "key26": "4ccFD3oSBnXHrFx1Q6djqCprg5F7Gu3mLA4FLCLeBGXiBtoXnVFogC1dPXs5rkk4km9LsjqpWb4BtcS6tYpEWkTT",
  "key27": "4ANzeBgoyi6qCJoKFNmCQQTpwnG4qiRB8KXDDooSHbuvPnCCctPqxLWNFvFyRkLiRVxKqL7u2oD2JdFjgr9opAin",
  "key28": "5ZYcXUXpR9GjhX4BMiGs1Jd7mg5BMQ3QeQrseNgpuP6X6cA4cVYJLdbAxVutCP7uRci5REnvyscpgoaegKAJAKop",
  "key29": "hFnvPYcRDr3p7LHVwpXRDXGisofx5hp8hB1y4dYYaCqDkDyZyNKbbAnmkeLhPVDWc6w4aAjQU1pooT5zKWeSi65",
  "key30": "2SR2CYHqAktioQRfrwHXPLmkoqhkTUrP5QBV6k5MLKjQ9irSi6hn7C3b1JFkZQHeUn1wQ3WW4VkRGxV5B18zx1Ts",
  "key31": "snLwSCCn9kDsDWFTn4j1Zar9BqgFEd3EcFpgpX1nSAMV4oQ46UZfqphrwfofzaYCWdXuujJeJgLBhCUp5aF9wfQ",
  "key32": "23zE5CD9zZhWqJbokLFEQUzPtzp1dwebBDS9bLjNinUexdxzkB1f5VoUoCtCpwkjrmXX1LxpgZ86xjzkd51VqTD9",
  "key33": "3mBsZQUkwqyfppK8wJ75SrrjChS8dRUei1XMGwigTmJxm8Sur6xDJcSiWic98gyrPLWsbCaSVCd1iBwgHUz6BxwS",
  "key34": "47LG55ZuJTCPW6nmcGdX2YDMfQPUvd56NLs7ndvDKoyivky7GUvhhETbKC2gtvbViJbfPUkDZJhnE7rkzzomLrD5",
  "key35": "2ozEtHtYxoR8KdkKiNbnw6zoi6fY6zieumTXWqd8U6f6nuyw7aGdDtRE6Xv4mbxuaMhPkvyTQfvigM5PGmMQC59n",
  "key36": "5tc9mSNzuyt4ndcbK7hcm85jXAJ4JyjFwicEchh9r1cbPGnunx9awxQchkafyscxygBcUso2a4sc4akdkQQWtj8X",
  "key37": "4354Vw5Adp89iMnB7DVBPVkca77aS9mzbN7mvR626vLHmFjrJS8oedXbaBWfMkyG9L3YNhnQRAjeNirLGjiw6R9D",
  "key38": "KXtdAVk6zxhCipEX3wWG84ymwNrYP6Jsy1MFs9JNswEPh7crzs4VhkW9kmftdX9aaM6j8EUFYv9SPr91RirVNUn",
  "key39": "uopH9L9fVvpg6Btx5QG3JAe31cs9oK63FCQzbpKhBKbazoTD2a4Ke9mXXy9pA1YzLoxYBokXoKyNxfpuTDs67Ue",
  "key40": "3bCwkAicyx2fXWg8GzYZb3Y3cbZJWhiDti4po5Xmqw9w78HXr961iGJurqZ4vw2EziZyKsRL3WSjAxPoRW1aQJa7",
  "key41": "4RqYcodLNvkdYvgSkiGs5rjxsb8gFZGEnRTvs4MGyXgCcZ6itzricxBdyDa7Fox98dgjGJWj3EhMbLyS8rKvmUQu",
  "key42": "5YiyyF1hNcraNG6jcfbK3kYzNPKA2pKVpJe3RTJn4nY3Gm12Snrc6kwB1ZSe52yyxFteVkwPQAJeoKJynBibKGTo",
  "key43": "26WjRcVJUPJzppF6kCsEoSQuSgDw3eETUvtLNfXQcStryrFoBxosGaDwsmUrcfzSa2Vxkryv8A9FW5Yp5BgCfGzP",
  "key44": "2rYFnY4nWFZvNeAML5u6UnHPSNLRXpRAG13zcvpifD4JfVqQKKvfGKAqEqtfQsVkbV9rGPTMXHa8UKyjLhNXRvvn",
  "key45": "cfJv2T4aeyVBYVcnxUWQbzxHoJ1uVR1px3a1BPQF5QLogcFiENm2vzHKXvpzDddz5CSNWtePE5kUoFdeBybJjNQ"
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
