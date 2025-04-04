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
    "4rouTunCJp2QFw6STCAsfjLJSiQVdSRRFQ4uUxL26Hx2144BeAPRyhZG3JDEXHagFAboXYEYRujdBdiUh9QU7zQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hdrtrMH6cQVzqSm9CdJaXoM1sETBFX812adrUn61PNajKYr3MfJk2jpzbHpQFJLpY6NzzjUEwjHhvTatwAiyct",
  "key1": "p5Yg4oXyrhyKJPvNHXxMgkYRZK4jQjE9K9FmFj6PiV6xSDAUxUB6zURwsHPFdQaNePLvinB5Xo8uGibn5kMUDw1",
  "key2": "3hdvmTzvUAkzfeZtfAq6zZ8eTq1M4KwmTXUUTBkPdqwt4DgGhAD7DyB8rQEndFpCG6xUz9FTGYtxVEzSHXqv28XV",
  "key3": "2DLFLhaZpkC11eSZgtReLXCfCTRzp3aQaE8t4GMB16itpqiNSNQ7vspJEoYtySZGFNh6GCXnHE1B1Po2j583JaLk",
  "key4": "2gZqJeitit9ihdRQV4VQEi5scDdnkV227QtYVd88NtgVVZETX33AqjoWUnrZcn7XXgm7vsWqJeUM9uvbMYryjkD6",
  "key5": "4yJzhrnkfxSH2GK5e6YgvtTJh8oiRGpudZE13usHpSFuZZD9i9F98wdNHS1xfrJ6XdBA9ySDPVqkVgj8Sah71pJG",
  "key6": "3qaQF4j5oGVPuZYaiRgjVNctTuDrij9PwNG5g6zeVfeDeFyM7FZ71wSx6LCxe5hZY8n5UZ8puLjYfxR8dMWpReNS",
  "key7": "5CzB1zKM6PBK7cX6G3GKNz5C7Dim1kgxYftrDhNr7i3M3DYctDJY99iWutCWAvhAo72K7GhBPJQ7R6b5ffNbZbRD",
  "key8": "3qtFV7RJ2TTabPMWroFEi7BTLPotMc15cjSF7Z6FgJZqGkKXUGUSk3Tpweaa2uNJnqwzkpTwudJMtV2TpxKpQEbW",
  "key9": "2VK1f1tx7DS3ak1HcYFh6HcBy7JohX8Tsn3KKkdURi45xG7uPDMGCorZTMGmqyQAScBrxBkeK5hANb9tk8rNfhJw",
  "key10": "48XHLNNHZaBZMFByjYSY79Tb3DUHmEw3oNhCvazPPvds8i42XGDYaYMroTZdGFM6wv6auMwnvhCuWx3ToBoog6Zf",
  "key11": "4zcYAD14xpaP4WY6M3jUf7Wqj2JVy2jvyoEKwEk1bnyN44mbBtuDqpWwPdouWbvfBZaWoY7Q96ZGkwSE5r41tPB",
  "key12": "2RH8jsv5iTVRjmbpx5Rc7nedjJek4ad4hBcBGyUapv4Rgkh5nAzdVd9gstpJ8Ei68VzmJYNbdAw94sDGKSKVp216",
  "key13": "3UQn5An5AbrhwRJSjsmyFTa55qKL69BfUrXid78BVu6Pd9SMwGqUfFzxEaBZrkbyyPwNdJCyvsYRLh1WXQ4iC9Ty",
  "key14": "1V6FMDqirq4DMQ18rdkWvmB79hroqG4bw8j2ow9Z1zFArFUqiRqPRrNpUBkUfyKPFvdR4cR5v2Qp6GcPgp92q3x",
  "key15": "38hBcjPPwCKQnKDRVFubFiHrWbNqFFmLwMxfNFpigQsqGndeX4Ehc1oKuYHJXtwnkrYg7DjZi3GaFMVRBe4kvUCn",
  "key16": "5knWF7hi9vQ5gLYgu9M5j6WhvFHgkMqai3TgWJ9DVw9VrXHYCAZ3y4drCj8tPCVWLsTsQH7rR6x1PxRGGdZ9SxVK",
  "key17": "5riQLq2816ynBoL5Ug1BQi2APYzh86o6ULgRrdi2F6U8UFdwofq9a3Av9ywvALrxQgVxEqG6SnhxHGvJEkYBpfHr",
  "key18": "4smF7P8RLUteiCWC87jKzsVXQMZrSwkpjGmLrwYStdkJr3H4M8JESqn4HFDpNk9bR6RtQnjjmjTumSVcpTLdSVAB",
  "key19": "4g8CMEjGMiw2BnMqeSCUwC2waYZvJqenYPUbqb7g7bFxu9UirXGHrn66yB14v665uPViq8aL6HjnGcWnG4kKyxCY",
  "key20": "4BNEFaRVUbj3piJd3nGAtbobRGWMNzFk4S5Vrvj2vNPTX1X66qL4CeNsG46jMHDfBiriNhyK2B9WfEi7yMahbTSH",
  "key21": "4BREhDqWkKmBZJJKAgprsNwGiRyvaDcucKuenzhwm7jZo3S2L9cFwjgoGcAUTHg3e6FZT9WM6Jow9EzdC2o1jbS6",
  "key22": "3S8nCejjxzYYsRmzAavkarNc5LPiBdS56xkXqpjEbw2B8U4Psk76wQzsKcMuXr8nN8hWyRVv6yXuhsfDCfySs3Bi",
  "key23": "3TeNYjBufAZiTWn6SsdFA5E2jppfHcg5jL3MsshpfGWKLc37QwqU2kNU7feB1tZT1k11KPCWqKzvjYeCfEEvKbNx",
  "key24": "5gu6dTTBFPLyZHwTokHmr69wPSzKaptFxyDVycFVEYjbn9A4DsPUahVFXuV4Jvr8fTyzEcNtACXrq2GAxW68zxZA",
  "key25": "5B4qvbWJPjgFbt1yNxRPWzx7z9oyLvsKk8RTp1fq1Sdvfj6B1UvRKrfaRRBNhh7veXSem3XVEqaiESQwE1XTDWvY",
  "key26": "YLS7i8RUaYpoimbEXAFNFe5UrQDZmt8rFzauPzpfyfpyCmCK7dTYe3gxWoESPLsYgSNua8tnCzRpy8P3XSuJYGz",
  "key27": "buuUDhoZg9SVth4ZE8qEJcwmMxXpCkAX6gZko1hhWFPXJ9J298AHppTRGweu945WdGvY54pjKsWpcyW4n3yMVpJ",
  "key28": "wTZUw2WSp34XoXwNYVkHdnp5S2vySR1FQx7mktTiUu7ar2NWnuuBGXJUL1QRjW8Dz4NzXgYtdmrELHVgKoiFH5z",
  "key29": "3u7j2vAk5XMByZUxavyA1Pog8LY4nfQV6WH4qeypYuqP6LAys5VM7ebfc447Z86L1E53LhRb6LiXDphWgtPmYkh2",
  "key30": "5D731scmN9rpjJtDcYxVFwhNeEmJ4HBRdKbxPV6H81z2zjsoo8ycUjJtn92Y45pwnibvmGeySXL1cy93JrrwgRxa",
  "key31": "4RYufGjUVTK7gFUM2whJarYLpotb7jAATuJhV4tzKU3cfnHC6TTdDhsH2p1kenLq29gjwuru44EEs4ZYeFKe3KkU",
  "key32": "3KgYqqggvNrvfL8gv6LxyJsyAGbHutcTiwd3WUpebJmVdXNTU2FTXRjLWmycnRQF56kBty8q47L9C5xYHdzpuhGS",
  "key33": "31Fh6uDuXhiK4eHxWuJVgKY7tCMQ1VVVgm7bPcmVJZhqbkofJmgPvjZRok9iq8JCyBMkMUAhTaEgUvS3YaWVa4As",
  "key34": "5rsYqgWnkSxLT6ogjbU7LGhSR6M671u7rH9MXejykj2MaZeyMdRFgFsgKdg6MqyAPnbSmuiAJoePbdnTxsjCoDmZ",
  "key35": "2CTchUTVkqSihM4HyaXsKumr78thNaP2NCy2A491QuLwH7aNkoQNXsaqtqV2fXepJFM7nUVhTmyfUziHzARNgiyt",
  "key36": "442MmYpusCp9DXkZQW3EtSL9LFbbifiVtej14w26yMhFYt25oucTjAHCdXzGTJyfoF7kkSyNt11NAy2ajTWdA5JX",
  "key37": "39JXVMbcmBZgPczQL3BKdMaEhvbZNpgbXBjin4gx4pHX7CcNZ8BV94kzGE86ZqwNCyynkKNYNdfPCL8mqUqvKXUn",
  "key38": "2XWDip3TMqV3YV8X7zjzR1yWaSrMDRQPAdVyoaCxZw8o5XNRdZQPS6WyM9KRRnBydD4Jav8F41PDu91yodih5DhL",
  "key39": "4Yq3cWmsKn5433zWWtBwwNDZZHKXKSw9s4yPgy8qTuKxSreJfcbGkP1iX4gw7jCeDiKDQBSsPTUs3pDv3mG1txCP",
  "key40": "3eqip75W3xeDPKc6Rf2Z1YJ2kg9yfLJ1DFBP18vcycfsYy25xRZVNR9UFJ9uFhTGzQRm999sYmD5AqMwiLAjWiLi",
  "key41": "LJUvRP8x73AnidVgoRMWPc9ZUjgAUQ7DgZefvgFmgwBDUsLyhNtAE7uaByC64fs8DwFXipE1ASJK699wZd8ZkoV",
  "key42": "2VtrceLHKquRjerZKkMVqd3QsX7daqnBfwb9ofPEZ3RcJCPf3B4Uufn5szi8Bdr1CQxLvJPQjVV3jdrbZ8qXeQ57",
  "key43": "3V8A1Q39bGdG6uEiYKyQ57BhEdGkZuvFzD2eLYZqsXDYkmLr7p6EpXYG1EZL3Cv1GMCjLM2fMurDpdnBzULK5wQk",
  "key44": "2AfvRvxNo6nr56A4ciUmwvuYw69PmLGf4oy4ri5KxNpiz3Krff7dVcuDNvQh54fofqBVuju49ZETaVXpMy355EJV",
  "key45": "4T2StYZLeewLbvb9wcjj56h7s8d47Aj3r43MauYAR3QfFdrktRFT47Ye5Hj2znRfJmtZVhNNKsXTijBYqA1KQks9",
  "key46": "3SaLnb8k6cSqhhpUSc16TGNTfNVxg7nUvnHdjCt9bXrJNMWFB147EWSNGomywoWKB3YCndLo5Wnqs754qLAcHeGQ",
  "key47": "2yPK6D5SfNCFcnANpnfDdffvWCrHFPdJ8aRqX2Fhd2GHt4bRdhxYoKVyUFNh6U3rLuRYGBUvxFAzNYBES2yqqrqJ",
  "key48": "ds9GnKTmJHutWyyMjSTUAoVLYm1KLRa8jFwK1Vq7erYhymteXJJLAzb6C4U3tLNMbETBAceUD9obH8n1ixz9Sce"
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
