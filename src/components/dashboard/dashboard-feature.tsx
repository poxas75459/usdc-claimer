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
    "3njtU1K3mjGe7hXLSqA8nHuNq7CeFqwBWkz6GPRFmrAmerXyNNX6roPLqqcRUiLYYzHKhAdkCP2GLjo9Qsju31VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syX5VfWsEJZPgLdtbs1bZJ2GagJQYpoMqFLujnJEhek9oJSAcQK3LnUPdSZfZBmHcLmhzKq2GBNoTHKsqKBRvPJ",
  "key1": "SBLkfWN1yFe6TbJgKTgumybKbPyDQFirHo3DB1jhLMqnPeRQ5p8edb9FN82UXsBhzgSNuwvFof3GxW4nYoE8Mn5",
  "key2": "2iyghp9KvWTqpT1SZRSYs2aAf38oHEGZXEzYMcumqeMguxxiD1uJD5Z72rBdwdHmq8PYaX1LnzMdHU4YKHt3kRis",
  "key3": "2oyyxi4CvzGVkK7DBPMYhCcnaeot5pKkrTLssPjPNsfLXYbyQB42S5uXBqV9RnC4LT4DXAVBHiJ8D382wsr4tX2m",
  "key4": "3Z5MoFbNgqMstK88PNjiuEhyDsECCtaJbWAiUafa72Akx2YG2Bhu7twWK9W3jZB1xv6uQpu87KuaAqXKovqJRHgb",
  "key5": "5DXUiN3iVyrDoAmu6sN1fZNRitncqotpXM9x4U2BkqW319Y21MbZet3oHZDU23pPYw8HQUwtZUtq47siyPuMW3dg",
  "key6": "4Z57dMbsbEG457TBmUwdAE4kdLs2SddLoTpBf5kcjvSZg8ExpLBNHcA4PfvCwweDg2fEQsTU41zgHdBHvXG1V7Se",
  "key7": "efgjFxEwZrubDWEV5duwFHt83V8Max8SS2S6hx5QXUyaBSrrNTtcoq2ddscavP4FMg56rxakmiFG9XviPfZu1yL",
  "key8": "2CC6eLZKv2vAXYXMuxsoCM5JkAnM6MdR2asPzjKUdcAwntzo21y9oeqVG3SbTSAoafkSVXJDnCBmhUtq2Yg23TjD",
  "key9": "2thRk5G98YtvdCLEEXmGjpDYmyCbBd4GsYcTpV5rVPrBn7QiDa4TLEYLa9GNqjty3Qb8EipPjzhVwadU3eEfByEr",
  "key10": "btP6iQ4kUehm9z1yQT84naYXvnfmCgXc32LVyr2H3neuzvLnzfUuiKn2e4HgrRvTEdKnpF6aPCMFp5c5bpt6AYZ",
  "key11": "4V8JNu569nH3DtyNVtpSPX31qgT4uuiyTQRkocVjUHRWK9VgSxUdoJeyqBq8FctfUqKhA5uXzTvWkd3LuqQFjWFw",
  "key12": "4RgqusZ9Qf5J89qHLKbTgGdZLHnQvseqUBtyi5sQYNPWq5JThRmv7cYkR85BpCPdZHqe1CH7vjxZ8sJHwSytAyVf",
  "key13": "4XMMY292xuFBAAHgfh72FhExkRx9V38wtfY355TgSvzrLhvz31BzEf6ij4F3JAnnuFBe9rGnPqi91mSSZgfGTeS6",
  "key14": "1tMuDhotrY1Hr3L1e7sM9JDw4q2ir1Ezp8C7yJ6S6vocwihfexEZ6yo553EhhiAEqRTJXCU984ccunTFFy524X8",
  "key15": "4bnio7mE6YnWzfJTTNYmgfwjEqdK4NJPN77GebY4AUuB8cUVQs2ktBHPojr8xCyNj4GXcnos5wxi9yGERnSy1F48",
  "key16": "2JY4ax4GsgQjVAAvVzofAtuR55wPptdVjUcrgw6v2JsPicJJCWpLY3zb6SB5oDc5hbCTLsCSFLssidfRP7anJMXG",
  "key17": "TPeRDPU5zCgeQeqh5ZdkHpQcbc2vPhzTbmFzx2UQgiCeK6gncuz6PUA83vCMFB6yg8hFvcvqzKEHR4zEWmmeh1q",
  "key18": "2rf6fWEu6eTD2oTuU6o2b6C73tU13SbLhUypo2iERJSZepqMKqWEPg5dN5thyoYQvmaeC6N51BpKFY95dk1FHmfH",
  "key19": "3PXA4nJe86B29bNukw5Yt9NyyHB6rRwmQTAts9TgqtwDHxyuPNVsjKqjE4GMvbVdcn4EXEi7TP8WEMWaYKtdQDYT",
  "key20": "2vnzCZ5EVrnMKq7HP7DmZ6n6GDX78qtV4DTzZrq9c28CSM4aFvTQwBooVVzVMC9iZGiC35k52MxudJmx5rgS7FqC",
  "key21": "58sQPcS64Uo54ehh7XzpUzr8EWZHpCqMfUUt7vsDf8BFEGPpWy5wJok6Cwa14wWntLquGK74BNkw2LWPrB14teFX",
  "key22": "5J4WjEQ6UKuvn6ATAdivR9LqDNsPFdFHvAWqW2vKwNJ9MG2Z3JZaRhcQRLTwnvdoF6oCJf6LMoWexDXLJ7BAo2Aw",
  "key23": "3x6oCSGfA8trcGHfrxCdEjPyidbKdNTPhpgSEiY3pCRuSDSYanXGKfvHqY8RxkQE9SVs8DCxX4SARzMADXQZ9eGi",
  "key24": "2SzenrBNMspxjQR2gLdmK6qfiFoSZ8fBSyRZnCiWDduog3SfTcvf9UCAosnuAqXMHJGHGqEpdDrA8t9bvLCz22Bs",
  "key25": "4Ky1MiarGX4mkqvX3yahWynkiWqwSPqCbVtsExCb2dG6G8eycEUc9MgWZWtLsfd22JofgTNmyWpQoPNzPr3Efkpf",
  "key26": "2a4nWoY4upbeYVD15Hx9kJrx32mJqqGJRUMe9XEQFE7ar9JgZWysXKahsGsYefUq3BpB1GEG6C6pp4AXeKqJWbAb",
  "key27": "4Z65o4c2KTbmfyn7cMtdqpaBMMbJhGuTRuMMRdyHQR7SCZsFSYxt5rrLUFqrVF5QbKUvohFyUEwhThUvgbdvi7Hx",
  "key28": "FhEZqjSy1Q3CeJCjU6aL2U3d2p1jGpuSo6Fs3UQiK7UZG3uJNTBQTZQkPSRs8Ni7ggm6u3di9teRMRR9N2f3twu",
  "key29": "6nwEhDCtqYT66ie2cpL8iijU5cYGmhUsrRwbBgGJduZLftjrEX5JJajos1ihweC2KUjVta6MpvbWndB1XgcfdDU",
  "key30": "36p35TM5JhoLzbjYVsA5WTUVk4yNscJgQzr5R8vDVvrKB48XUVxjhHFqXhVgqkJQhk45AiTwQwbVf6SAG7qwkdWs",
  "key31": "3ashJsU7wKZd287ctgeabhVUtoz5mBMsa7LtTBwotmvkVGeZLnD2wrnSqzmkgs1VA1p9EUUWzN6HXmeArhVmc7Rm",
  "key32": "5JhASQFZADNhKHnE81NUg4qmpND1Afx5p4CoMKLNUQVdsV6EzdU3AfGqUGbpudpFpqfXyRNg2HDa5FVHeLWqUeuB",
  "key33": "5iXbqsVrSnVhEdA96BinLyPZdL1TaMQ7aZGyAjNtxFvfBDz7AMcmdZY4tQ9ybQbvvyMb3gUbRFkfK1943t6xqfYg",
  "key34": "mgaaWUkRZTnHc9CSD1Sea729wi7mCxLhNChJEjGqpTvBJiESNgCn897zs4y3JmbvED9frowsiNXnGV1QJ8gptUX",
  "key35": "Z31W4JvV1hbddU72gpFjC1J6gaAypmCGMNSmgHQhJvJtqKYiwMMbSF1BZPKxG7XYjT6jmSLCeZLDr7HHrWav4pz",
  "key36": "2p3mHQ4uZtwkaFNz2QqvhMfvrTzXEkZyMBLDTg2CDYEG21rndCWYaoughCQwaSG6tCNhyMtzoXHW8tbrTFxRNvju",
  "key37": "5m1iVLTQj9LLLLJL5uM4tJMAwvXWVKqmk1JpLNrzNVSacivTEDJgBpBMFMZNnLAJhJxhY1z5yu4q1iRn1zwUeN2E",
  "key38": "2UempuYwiWJercGRXFQHR4ppkWE6rvcFgyibMCnKPeJzrUgpvAzivrfa2C3WRjDvtXjv6V2wvxZQFeE94vFwWfKn",
  "key39": "5httC9C8RtV4J8tXrAQQNYyuHF935Q5tMYVdbGvZ8yvrLV4dNEjYCgEkyfcegE8crnTS4BftPtpVYK12JYwu65eT",
  "key40": "5HmuEf9kokmSeja9Vj42SF9dos3uDNP8x5SVttHF1kdAwMPQjqVydGjkT8U8JhrXZw3X3AjdtTRmSn1GGh4dtNaK",
  "key41": "LCGubyfuJBPzEYQuc51L5pfMuFrYJYWWkAEnhfXEK2ZyTbB1uqZuBfU54XpCWKx4cve9qqYgfdrsD5wGYMdasPv",
  "key42": "3iAhq3jgTHUjnW4KSMnpkyHb2TMHMGQLfXS7bR8b7PVsiah6XGVTjaVo2kjCecj5Ruq8CDv8wcqzWRDgD36dQHqH",
  "key43": "5iyJ8T1z1AvsQCMMQeL9eNAxZpUxZPhtZ3vk4sWaSjeA1dc8NSGaqU251CmCBm8mHG7uxhnzD4EAQFAnvDz4KEDD",
  "key44": "PbPAgr2d5miardYkrhLf6hLWfiDgSR59qCWZDpxBUZck9CyHhCp8gHk8i3Xf9SKuRqbBiLkKPBTbdfx8NKQUcoE",
  "key45": "4KQVUt1oMWGX4w8nV9dmjVhLtuoovF3NkJSNGqqvz9W2GP1uTyQjDKymhhX2sLEEfaDmxfzRjS16GuMecFahPTFE"
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
