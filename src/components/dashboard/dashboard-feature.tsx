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
    "2mi98Hyz5KapB7JmC57D2VPMFyYoQJpDE54x2Ybe7zyvRqZDhfRCPtu6jtcfddTeGU1h6ZEHQx8xdbqUCXTwYnMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cuuj2D8Hs4xuxrS2FGgbP6Fo44rZgkqSEjCbjgxvbSfcxNr9UHeWFex6ytZJcU2UqFmfXGRESnFzYZyu2CBRC1p",
  "key1": "2Z2Ytbgo338KDcNEWeBaWyge215ENRgpE9hzw6C6g3Gd9CM8uthA9Zc5JFwx2mmxt72vAERBH1Ds3ikr3MJbbV3w",
  "key2": "5rQSKe5Wsesu989ZDYmfHBNwkD3pm7t9nvBcxZu8hTfJLNAT1fmwagFDoqHBrLuszgjC19VbeCnLCNt4pMtwi9ju",
  "key3": "46cKm686iqxuQTbxz1Abo6jBWZ9KKqimfWugzn7cujeGWVBo6XsPdTuozS9wuHC1Cf56uT2YEkoEpW7n4aAi721y",
  "key4": "4XTfjLJrUKY7togZX9MahUK8tneeNKCvnyX3ayd7fyNUGf8YrtwcFFEH6DdRyKajEy2a1cB4k2minkksmrwUnUh",
  "key5": "U1Wufdf8TsScj6zM2KpRriP9snH4uGtQE3fcCR6V7F24FzNcLL7gr81FpWLS81YGVDAWRXgkpyMTwPQrt3L6W85",
  "key6": "5JTeuH6geh233PEVxo2ACZSrTwb9itGyJSz1urPav89VFCHSiJH7oujRHzCEx3aaZeh9MZ6UmwiPcXkLdq5pVATU",
  "key7": "229gZbuZApdo82uZFRyzLkw4FP5TazVqK2NaB6pUomUZwwZyGuUax7TB4t1T5eKzzCHpG94fidDgKiuxSh6NmjhF",
  "key8": "4CRuB6qTauEgTBSMxchyqCW5ZTEYNYyQbnwfQhh8htjvibbTe4vYQF1gYx2Gpdkb28vjuUHSXCfynoUvxCfywPoY",
  "key9": "2zPf4fWf1nGreXVProLp82LJjB3FDHDnSZB1omtJQ9ALrLis2QDLG1wGYQLiFXW7GpVP27re5t7NT2hNYu1iCsW9",
  "key10": "4yKak7dD3qbkdcs12vwodg15JLV2S35kUtT5ejMdzMe7pWEnZhCi9zzMy7QwE2gGn1djjzpnAqs49zacXRqRT7zh",
  "key11": "5XVP5H32CHPAU9XPAEhTZU1mo5mVXaWxqgJUrocyD4sU8xdSYerC46FLZVdW6hed1boWr4pWTBQNEiPQEKXoMcXF",
  "key12": "29KVpWFYnJEYvcAuZcaTPTjVr9mjTXQKu7MBTusLQFtCraJBiU98oR8EXXNYzX8KEQqs4D5wxnbCquCewS3em3sT",
  "key13": "2RNFxqxFuqyWv2TPAbyjuv26qKjfVV5MftxX5Sn32v5u4xDnB8BeuLMHvX317znAqjCvTj95R1UoN8phjuhcWshE",
  "key14": "26TMoS6Ds1YqgF6md6dEsH6mkRjeTfrZ8P6DfSmkPriCLJ3RWAdv6twQvgEqqPJCyCdQDqp47H3CBfSJReYWauw6",
  "key15": "1Ku14kFi4DYPRoYrYeZcVQ9w56hhrkBieAKwAyfZZ31Hp5yUG69TwcMNLx6eBmAt3UC2JAAS2zVZL7rgEkmXFqW",
  "key16": "4Svuby9v3nDuU5SfLPAKSwggeLJzCehHtACVKGL1yvT4nmgosUFDHAW9zRKt6JcoWtKg8nZVo98FjrbTG23qL2ey",
  "key17": "E4ghPWqzoc8JAE9rTQ7cVenD2vWszmnFB1LQef9r7huwn7emuHJcCb1tYUrNjVm2xjxj3E1iuME8wheBuopTJjX",
  "key18": "3eyRCsibErZxotT89BpEf69UD63VadYpBTfPN4GLCymkJTQ3W454tpuKUf8xRWVASeoH89pYoKqYLoDjUuvb4H2Y",
  "key19": "WFHDkoPPLqEbE6XHhBc1Gaf1JHWQtTTxANFNyYjZkv5thQWwj43hjCkq25LjQzpa5NwZJMKU6iH3c1CUkXnFYLX",
  "key20": "3yF66pGe9caMVt5NzekhvojNDXEPhbLDVdw9UDyZAERiQRvTe3NFDk7d6RRE5YoeufhHub46ZCmPXhAEhk22iJJf",
  "key21": "2mQ36mq3583LBADYeJUKmpVYoStwxmNNF8AoEA6W7YrEfsR4DiLWQ4e9Zfc7XFFXMn6S9ivoKh1cXz2CZFsFpifT",
  "key22": "5uLN46pFQ13bbTnEfRpPkFpJJdREZr8pSnPqVeuMYdoRJ4pSUTCQAYXgHU2WAb4tZNJiKb9dQUYbk9qrG2cmggcW",
  "key23": "2EBbk72Hb49A1nQqVJRfzoqJPovCzMPsQ6T1NwAMJ8v7ZDhfimeYVM9KxmA8nEwRPGPaMCzUmqHLizuz5hiSvBrT",
  "key24": "3EPkvG7qjm631Pa6yC3CpPz7tqnTNfhLmswpeVnAgSrEaQswbpzycgYMppr1EZX2cDZktWmhknmAwd9rHWKZa6zk",
  "key25": "64tFX1E5ZGM37NRqnpaRwBtbPhw3kHBMy65T1BNHJkL9rVGx6N3fDreAbsPZ8yf6CB5rAnmuAQoLBzE2pdTdxeTL",
  "key26": "2DdrqywAXwVoYjFgfE62r8gn2guMPktbmF8mjJvztGN9LJWfPdritdYtSKkSi8R1JoBzmc99WFtBrhfP6hSy2f4r",
  "key27": "63x9BvzgLuQM2e6VZH5MumzsxX57mwUG672u19Jio5CGhK7CASXrw5QMHnvH5zPzPihRRfEhUxHVrV2dg655kigc",
  "key28": "5PpEuxuH3qg2QveezcDRtcNiL2k8tsQ7MgEkzayLQfYF729BDfLtvQeVnjnAk4jZBkXXJG2xhwrToa9TjbnCDfBd",
  "key29": "u4R2bDveLy8J6LZvhjtAUSZKGL2TJDg19U9BTG57Xto5G3uEvDuVYod3VmEon9ZZFKgCyaBhpHksFVkmk8FCyJj",
  "key30": "3FMzTHKBwYFaBABNNeCXhBDEnybnCWbnvBicdGmTvR2bWTVMRBbEeLcCuC28Hsi8hFass5adzSQNzgBaHD7dyywM",
  "key31": "4Y2dmnrRttDgkDmg4cW1xHx1yA8kFWJe3wHyHUo6qnVpr4AYaKxgaLRXCTCEGNwmV1gNRBribGwqULRiuZS68osJ",
  "key32": "3QodCEDNGnbBHo1HcqiWRjD1dDbQQA7aGQDjkc4LfR3zKFuxkgHvHV1qqeAfUH87f37pYoPgkmFVGW1aQYTDsMRC",
  "key33": "4LYVuttHukbU6nuGDeU25wSHcMy2xvQKggUh6NW6aiMVwXZLgZQ45Fu9Qv6dDoBdaAt2GQmh1LNuYzfxmfDoDFGi",
  "key34": "3fhjjMA8fRcF6MMQ59fsnqoPh8aK7i5Tg6jDyUVire7ETcQdZYuhSBNpMfYDqzajLcw8u1McyqRV7PUJfdFw5wNZ",
  "key35": "5mgHrfkTsXUArqFU1SyTUi2QpDroJwo7kvoapuVeCBM6cE1tbF9Cpr8jS5LiHrApmzt5GDPUnuReLmTPv7VTEPEN",
  "key36": "2Cmi2EFqhTNUZnqCDdSgVpuUXFHcCjvKQ1QvaF8AjmQAZWZqRjvsmEDWQ2gjdFxPUCisBMLGY4wBPT9VBoCbMexB",
  "key37": "3UT3cCRN2HRxSzsGtVxEa9LxXqf9XR8SKWsfp5ToUBxhVoWZqyUwgHC4D1br1UXBBVJBUDLsFQeJmhx38ATUL1T7",
  "key38": "2by59S8isUU7UeFsH9JQdZrPZ5NxiJYEB7jp93Fo8UzU48oa2vWGVfieQoR2A84o6jmaXR6bETGLWDXtGk5Mp1pD",
  "key39": "5F6yW5mvLmYXngwqjUCXL4qctgX12vTsEPXs2oeK21mtuPASPtkVM8kuxLu4NdwaufeyCJjjMXYSMtpuNxpnNoWF",
  "key40": "5Vt1rW44WRkeVzCNCrdX4XG861T8e3wFxjEtCT6bzpY2dyzDMba6zXGN6winSkQqULXA789XQ42P7rLVHzughco3",
  "key41": "4TmvoLRoHb2b1HGFBiF2U9E5TqJPnmB7UYMNWRLpr4A2LuHLw9FT3eYTp6fLyxGJsrcpu735hULsU4G6N4hWwo3V",
  "key42": "3z9i4UZUvPGqPu55NzUsD7bMhLLc4uPd9gyM5FfZuqBJUbjPvXUheEx6ifAN5KGd3mBYHakEeH4Fgv317LbSqKaG",
  "key43": "3Pv8h1FqdJJdxckQY8eV5mQpfG95W7bUw81M7kgpApyjJA7uAVgV4BzMFRr2Bm9JUZrFV5qawQMyo2ocW5fSQa5k",
  "key44": "KV8hgUpsWiL7AhwBvwMt94K4US4fPLicvfPEGxq2B2LC8EZMuCnUQUfJ6QXzxSUqnYXsPuywWUFk3fc5FYGCFjg",
  "key45": "2UoWfpiuete3XQLekLwbi1hHEzppERiyTzh4phyvYCNPchmCHvJ95jXWp4hys7EAFGjFzQpCRXPVd1JyWLFjcaZ1",
  "key46": "obC2kQ6uFrobHCzhQbscnSKvwKeMqMFvs8X3KrrM12TYokofSFMbpw75c41SN9p2rHuqo5p6JrXyVi5pWVKXvGD",
  "key47": "23bY3rdfZCn8JDbCWvBXodisQ22ZP12p9xyARuokeTdiwJ2H6kREuHrbQrnviVVNhso3wfhZk7c1156bJY1PohnV",
  "key48": "3J7FrJuvo5qLpUnGqyaXwuBnHemiBR81ogz7HiFa51zrvHkmRcK7TCDnJEdfXKQgpMttGChbwa7zDNDRH5G8n3Vu",
  "key49": "UBSdt7NMHXue2Jj3w6rZ9cqZfwauuxUooKQQjqg1nfpTykRckXotAjGgVmsU2vHNRXGD6bYde3kzAimC87T7yG3"
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
