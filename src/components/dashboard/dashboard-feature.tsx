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
    "YgLecptwCPDtXYPhMwiRs7UTpwGUfVsim9WWnL7hv2kjhoGXxkroHeYquPgwtRBsVHemGNFRkujB8UFW9fpNPCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hx1kRnxjYMjnnCXHMJnfUFRvJFJs5MtU5XLric7KLCFFJmEPtHBeK69SAGCxcRx1xFCPzKrR7ohJJB3bMjq3P1C",
  "key1": "5K5msK9haLrdfxydisqFBU8wQkeb5azmbuPQskxMUvPh6tXDNmX9mdk25MEC9HYHo7rDs4tAzm6AhjfriKdAGFt7",
  "key2": "5izowneyvWdbCC4xGyoi1WbPAn8vfJB2LhohQ2WpRPSU11xKhopETxWLcuaTbgwkSiUGMjuYM1iXSeZ3LutFeP1x",
  "key3": "RdX3stpfrkrLt3ejQXWixJcKVDwUpYmzRPd4XrDURb4g7KZLACRYCsURc8EEAz7VV2BJK3ApScBALXnfo9Y57JM",
  "key4": "2HivzWzYDCnxHM9cTQm6yzBYzWJv1L9iuW7GhcHM3i7kSinaLA8Ex7BMaMzJqtYggnzWyFgcfmwwdw7JpctdKYqt",
  "key5": "5T6NekPGFxpKvuyuAgJYwGMSkZApKxGoaLBveXV3xMSqcNB1kxRJQtDvdaZKRbNK9MumVosKULPk64fc2f3ynvFY",
  "key6": "3awVxWouKJZ1Yz6GiGtY1s3sGGHKMy8wggAWG2ZCYbR9oeYp5xg2KjT1vdiDzZf8WEPAVjLxBqqWUUGtSainBgD4",
  "key7": "3FXRNGeb4nzBjrQErLzt2YX71r8L2JiMynmhcrziC2wP2mqGQUrvTn8SRg5YbdABcBfoo8ZsCcW2xRnRsuKDVzqp",
  "key8": "3H1YCEmpY68bcdzDc7YdL32RSibG38xp7WBSthpXZARaCAaBcvUwXd3oUU6qYR5BBqRt4DFpZXqLDGBQSDzZHRfx",
  "key9": "JxwFwgfnFoUmLYYiDf8pLPHeNn97bgwpDzCmvFoatyvXvHfyLWGqkrdM4C9N1Pfv7FbkcoGjzWERVsw89cYGxgU",
  "key10": "5svZ547Wn8B98kZHdMa3j3NMjztftXed8A7D4Q44iAVwmcL1JciaHgP1zCFyuKbwP9Zs8yeY3wkX6U4KfiuNkdZg",
  "key11": "4zG968c7w2phG3co73faJM4cbwrQUrdaxEtxfGDan5scAwQ6Hw4LVvvBs5eFaEtWyBAUc9VJN4NvAo2Jy6zhLeyM",
  "key12": "5RdWsuuauHtK8Py5fhcsQYdkSWjKBERrAz1sH32uwp7P9NJk7Br2QjYPMGJodReMZJrvhD5DdRFwdKiMWarMzZjx",
  "key13": "21y5SwmyVJ9iBkEfvY8RHbKzFqgPgXt7VBU8j5mQ7yy5158gKjebVzPqiSKmghaYMyHFPGUEyAGmZqVXXmRTieyD",
  "key14": "2HWiKi7F2gDaZ1mbQ4GLM1U8RGbaR5zYvS61tZf5sPQpUoC7na94jaVyD8qAftdpQcHY3MxVyPKL82PrchLiyVxd",
  "key15": "5tU8x7p5fq3ivDcD3NYftyNBQLyHPm8etZo9QfbeeyknVkK1zjJZqfFBzXstuVjhoLyH1XUa2Lybet64Ft1NhgvB",
  "key16": "4B676dk2THHMRNR52BRdR7hWck1XCnCr5U4sp9oHT7gNhUdLognY9WN4iG3ADaSbHt66JBs3EH2XBsU1RbVbQdRD",
  "key17": "3yRdKhPbzE6VyDPhPA4kX4rBjgrQUYuctA1xvFitkBSkCRjQEJZ7dVNAXSuHMVETVdh2EiuTuA4J2Y3V59d36VEZ",
  "key18": "5qm4LdZikD7p7ZYN58oYBq9YVkQiGR9CGDDhSJXuHBnvsUucHpnxHHaCmXHRPNYYKq38abKt2AzWJtHHsQMKXmmj",
  "key19": "5KdQiP8rpwmYBgcjkyGxyWoczbxc6qz41ncE14aLhb7FmJGpt7FAvSut9hMFcAwrZdvHmqEN4xHCYh98tNcEkpUo",
  "key20": "66muGvyTEk7gi98QPZ9Pxgi6kCa8G7nRfpDjgXuhzURFnYed49k7SXGBB1UcqC1n84oVpWDAUmYTZ4zp5rHFvrso",
  "key21": "4z2RdxsBCeEhkGaKszwpsCoPPmVmWb6zv1xeVc63VSJqsky7QsLxHBc57YvEAYzwuNJ3zKchTMBMZCmNDHguhBYt",
  "key22": "qdxbgiJf8myvioKeNpeTw7WRyxv1YtCDQo6qQAFzkeV9YHaeQqBt3YxmH9PhDnADEZAqKgy5AiCH9kf7jgVPogx",
  "key23": "XQwVsCBLafMWsyzS4rbeqAbjG9XKAduXYT3tq6AYqiwnTikZbsTMfQi4sA3M3QghpNd3mf7p1ri6VPL6gbpccg9",
  "key24": "2be27kyECF4j6L9n4Bn4qj9p9RVWYidMSxPiyMwP3aZ3zzFwd1vxzDhaZ3baRsTofkFj6umHS9SSG1NsQHPgmgPd",
  "key25": "3h3dmEsa4RnNH1TBSL2QSDDE6zZrcuKL8kmhwoxoms6avpFX4UgRHdZ4Xk8vp4UfA4M7eUZwQ68n3fPeQ6XGebNu",
  "key26": "5ERkvZoGnLna7hzkSjzLtkLXPLM8jnTKqN1oKp2S3K3DZMnKHrdLhhFMwEgMvpMd8UpGSpYPVBi98cpXgHZhMVac",
  "key27": "4KG4PfmoE4e7d5yMssYnCvfzrYercfTpAHReE75Tj5cRray4vQsdgbSUQ1z45hb917RQfFHY1VcDquzafw4EJ3RJ",
  "key28": "2WzBVZvqhmRFTrzKVCv7SS5mrpuYEHN7tdY9obh6qPDWzs4k4LA5QhoTH322CzotFsTB2u22a16vQqGVqK1pRNqL",
  "key29": "T32vcga6z3m4Q39eMrbcZS95us2mBKrV2akbyLiLH5jp6xCRWqyzMPLZnRRheesmNGqEAmkTE9pN8FrzSRscNY5",
  "key30": "2UKSif2uU723recRK91CbWQ839shMuGNEWgiVn54WLir6pupdUjf2rpWzfadZPizkPk3JBhZF3mvhmv5zxEU91NY",
  "key31": "4U5bwbmE3JekM43fnquwLxc1by6u5zfd1gE338SiWoHumtfkoMzyVq1ZNkrVzDRxCwkj1jCs8TQYgSbcDJkmuvvU",
  "key32": "2KFivhRbS7qGEhGNSAP5amZHvGidNqRsZtgHHFcZcnuAf3yWiCKL3QR6xKPR7ecMbWx4UbCWRVnhMApsuzE4Etg8",
  "key33": "4bka96jx1EfNjRecfbKLwnFxe9AXRNtexF5EsPoVKNsKvwPNjHzueegeh4yW8GYk2My1P1T86AGTswXAHuyuKzUQ",
  "key34": "3HwHgTKG7ZyqKPkUw3PNhvQD7CmiFiVKKx91M3P9qUB8pfD6TeziwUsNTXTGyVE8Q33zrGALVPmmTMTq1Kq75mCs",
  "key35": "3tYDCH6HpCnegR5xf57dEpFwjFvjtd6yvQe9Xrfzk6Dd5fpfQFRy14gjdajrQNFcSbN5Etn1Mm3UbnmjvrCzBMaE",
  "key36": "4aFbCykZsvndUfuJ24ZPZttmExWfM9CBqTsmjenN4pPhYVAUwCUpDN6NfFmaxcKS4NxLBmRsSQrd9WDqzY5fQcFp",
  "key37": "4yE4jefzjH37HjRHFHhtSV7FmtNC1zLP7hsVMoPYBvjeKGZjGE95S4Nb4NZnyJBbACRrsbH1SGsDDPBABpS6Sgow",
  "key38": "51UmGKA61WuKRnJCXhX7XZhHeLcwhy3Hq4mUS2S6gC37wpTpkHKB4RmpdwA2hjUdCjeJsv82vFoFhtNvVeNTcki7",
  "key39": "2ejo3869HikwfTKLZrBoPGFDmQy14suAmHbALVbReNBUPGJc5up4dkWuajhz4bJTnm39y8SJCKCFUASedLxYJHXq",
  "key40": "5yFzxou5J5QJxYnfjUVcLsRUxvhEELyBVmjfrs6xNvmNkiJRwW37d9PXHDqSNMbuPLhbnoJQYfiJ2VirQsDxEAXb",
  "key41": "qhXQVkEnMCK5hg4gv9CGYJP3VtjXcrLKPfx7iMbU6Dm9VHgDdw1psxDJZntk3hYRz82AfNf1XcYzmsinqUiJAMQ",
  "key42": "3cp7rg1yBcCTbtWeaX15jjkWBew82fJVjdERXL1LSfNrNVVEhqYJeQ3Go8VATvdTSK1Wndv9wxPXzMVmkDBUTmzZ",
  "key43": "2pKk7C4xv118u6mE9BSMCPGeHQUbpHJCJxt9S7DsD68HoLRKCvnsZvEo7vYBtarzuYWsCmGtaBwudMMnanMNMpD9"
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
