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
    "56rNkMAW2y7dkY22M1iz4HjtC6NWje7idyP5JwFMbP6zKd2rvEHnNuMMcbkmUrtT1yxnPP7qQ6DVfkUkCCtMg599"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bMa6tb5o1QLgWRRssMeeB1N8y2LMbjb24Pv55rDbzrGSEXXyR31THgZUppoKvHrNHNJoJ3HDXpf83GCD3FGE9bU",
  "key1": "45KHXeZopoiYDTQwaWVJmXX1rWWNgQ3w1zqYG5ruAqb7xvLyarrNYcMiKSuFwaDPE3xbhgK6tJGMigHTCMg2n6dM",
  "key2": "5RkR4UdjiLpRvPZo68GuyHhVn34BdZvKuos3N3b8wdEEPZeyzkidYchCbTKdsmejmuvgicsvox4QLGqUtpNcD6gP",
  "key3": "3FhxZsiW4nSmSwSJ7PA1vtjyEZvYaV1zjovFcvUkfq62ewkRkNvCmNsvCUUanY5DiV7Zi2n43933NCnj5ZSYpAEU",
  "key4": "3XVfzdGmAei3uzZpgYbZmPuFaWYD5cZBvPKjNbLA8QYF8TVFqBHC8d8KjJQ1UGvnUxLcKW3dv1vWmVcb6Do3rwYn",
  "key5": "4LwtLtzseLpa6JAaaVxDwaMwNrGKhs9fbhdAAPsuYCUNDErHEeogEkWRqSNT7qQ1iTSgXScXJGJit2rwL1v6wRPY",
  "key6": "3zXYsBi1BoPr6eYscPqz2KJJRPt7k4CysbQV5KC4jo6sN1MBDxX4f4HUgeyT7GEs6WKxvqPX9BWykgYnNXZzDiZ",
  "key7": "4vbErYBqy6judVTF5NLBMqZQ793d7V9Bg6m6RGAroCPmQCoDonUvkauRnjYipN4YvkXtJTYtPjrmebXeg4rPAsqQ",
  "key8": "zfzB7GS64SU53jvH32YUQ3b4av8P5vzGhEhNWn9PqnnWAcf2DcEMUdqrsvHgHUaQ8gXw3rfKMoV393TaFfXuEsn",
  "key9": "2cNAXD6fEZTRG4Rz7umtfWD4zLtkxvtQyyqx23h7rkKZ4ErzAJxa6Wibcw47NokjUeg5WdDE79KZhBn6teNpRjeA",
  "key10": "5G8AHLjGsuG1rpeAfoayGmRr1uLEEx2qZy9RQzdzHJCCMT4pmfjoi9XNpfHFmweMdR63ZWPoUVgCfnsxgaw81VAj",
  "key11": "2m3FfLXjiU8QdHdTgKrzfYck4icreyfig6oJtwpwXQrZMP34u8r8Z7ZPnzXxFQ5zc3bxqQC8QdgFkBMSmJZ2rXJi",
  "key12": "oszR7GzLwRFHPjyn478DQEkLVrNPmdGH6ojB8exncJ7PnYThnmN2c6rrrsDVuLbjo9RWC9Ny3eY4AAYy92UvrQN",
  "key13": "4wbxShmrNjtNVC4po8nTggfUh1jonjhQGfhxFtLL9f8c8mB4JkkX3nSUWhTNYA7Ef7k4GZJ2scmQ1LxW8C1h1TrX",
  "key14": "PFK97X9GAfQj8hg7YwYj6jBeXmDPaK7S2g4mWEmK6TXEfma7iiepWuP78djWWvVFunjU7nLHJbd8kFDcjwjgk3c",
  "key15": "2xFMFz2aZHatABxS1DosBUWMC1wKJoARfYE57GH2caXQweYSgnELDqTH8UQFcg7tfn3s5ucBm3azL44228LcSXvF",
  "key16": "2zt9DyToB7hX73S2Vgr85rNpQVeVjf9JVy3ZGsywBxm8b6sbSHugGXbKbw5yTaeS9mPVwN2YSf9b3xg8X48rc3XW",
  "key17": "4F4xTHtA7sX76rVo8zSpRrRvANfzQhkQmAZhkvREdW8vuM2WhFmjGVsLevbv1RBDZQoa122AMLWftS1zKz7YqtND",
  "key18": "2pDoRpdi8veboz9jxZp2tpvM61GP1towd4ZHhV4vNn1P1CU2dKPs8s9NPU5ZjGziVnWbTLPALFcM2kWgJ4j6rnC",
  "key19": "3ZBth25xjEaB7fSQ25cYMNwEzHuDwQ7LR8uEt6gYXQGkXP3aPiamzM8ztCRBRMho9p9X9v3cpPDceEGmL55DVDNe",
  "key20": "2qu4PC2h7xHiR87aDgqZryv56U8vGa2GBTwf4wTnaUKXsi9i5F1EJ4G2XXk9gEFiWBaHy4zWBtA5xuWzGkEkBFex",
  "key21": "V5bxx2HWpwmmgQMriSDCzyc4qZBiT4NDmX9znKNtqDxqtp3616kpfpsjzHRG5jn31VAwo9ev7eLFHXV1RyFhY9V",
  "key22": "2zhmx8ifGnRzRx9GCuXyghk6E3rbTG8pgnQR9z13kuzgeTfM74G9FioXV9pssHKHx4yXd71ycgnrEeyyHfaC5J4H",
  "key23": "2nG3wfSLmzV1EBdBPNxjGK4JQSmteAsPzbDL2MZoqdB9E13EDujtbwB3Gy3G28NogSu75bFprXm4e5cDN2apMgNm",
  "key24": "jBkiFLNTRCxsRwzsSTKwJjrADcSVvJDnxzwWvzZFaCUvu6knc5Xh8byCpfRpBd4ywisnS3CtxZwmBbi7HaENCKS",
  "key25": "3MjZFYv5ZusyPRfAvCXn8dh6JS5R1rKjmAG8UBFZd1Z4Bt3qgmt8gQMscHUjctFTUvu67sVT5UtEzfGqCgv2C8Rq",
  "key26": "yWZfUDkU1enUJAt18jbjXmiN5R7cS9eJrBR67mGKhrDxLRJq3P3xf4B38eF2dPBXqVG3nKodUV4toyYRAcotSFA",
  "key27": "5CMxwTMd8UGdskQ9eVnqiq3dRUbSHjMwzF1xxqxmMk3gEG8S5R9rR6NnfwVeX8E1Vj5N77mSZsGt3v9Euz1p1pdz",
  "key28": "4MDMxTMkxyButxyob1gQzzgcC9ZdAEgb7khycaXMU2XUVzQX2P2ns88KCZ6zUbByqUaeVNL7nvYLKATKxda8r4J6",
  "key29": "5qKdyzCpAMCm8YBtME5t6cN3LykAZAUtkvYWyvkY9MPbV56bWcC62RZd6XecDJaaeg4S4N5ivdCvz46UPSphoz8d",
  "key30": "3ZebVDZMDMfxkXPCdgwretdbpkdvCbYvGcqCntfYDe8gEAQUWPc8UZ9YHs7HA7BUTdXcfkAofD8HMLXBGNhRe8b9",
  "key31": "5PQeggU1YqSR1wFTK7BqfZ79Wk31xqEhFJcFyA4p6vip1x94CiFKjQFEg7hm2tQBHH8WMoJaaAC58mXDAMEKQo69",
  "key32": "2p569UWa69EvjSNmuaLjWf6q3FC74PKb1C6PapnPMJFfWvGoJV58mfWZqArN2MyH1zwnwoJBXKRXdhkTnNZrFNut",
  "key33": "4DnxxpsrAWPm8rfTiGWWa9JyvAU4puy629QTdagDR65tNDaXSMH9QEfgfR2Pw56uV3fTwUhDiQwwhWaChEdGjcdy",
  "key34": "SjwA7C9kCoZrhUXhD2bv6DZbeNgto59MMUecmf4Vbh87331unXPQa9XFMgkgRYwHZH9fCBmS4ddXDTNTvRWcCNQ",
  "key35": "5LU2BNsX7n4LNgbmGLsWFH8dhGHhUbXLHvGhCcBMU1Fgqun8ZPTfjMb89Bg1hoDNgzgaMXzmaSpmwmYSEWUnprRo",
  "key36": "ekmvWPftYhGKjK5ZDkBvy28w18ssLvMVAF6xGyygDR7Vps2oe2dRuHKq96Ji5Ga38W1EtnbEAUk4ugufcHRLFF4",
  "key37": "2aT8Bb7vYDttfMo14a5YA3NYHSMxkGXyNB9t2VQ49HkFprWJ532oG7JXpY2RsjjqRWZLjupLYr7eYL9aenbE88T4",
  "key38": "Gip6e6sRPUH3nrd5LLRbQB9yNvi5kBzXefsc1AgVsdojZfuYgpWMEagUat5NzENo255GqY1D2RRAMFnb14oeJVi",
  "key39": "41qpfRsRyFGbMimBQZLXWvoxe4nsjx9vVer6C1yoXHJi5AfuQAv3SW7rpQQG1j8dwWJoEqn934R1jvfaQQQHXsNt",
  "key40": "4uFnCavqbq8es8z2iWzcCerdetzo2R9xK89toNE4HpwYb8e8yTiCRooV6b9zj6L6fMfwhbQecgQE8LNKyPCiRVys",
  "key41": "2VeXQUyRsWvx9zPY4TXMjGzM546Gfu8WxZN11kqym8CLF53XTpPApG6GUSoSAYhQvMKWwRUrJg43QUYaTUTpo7vM",
  "key42": "m9pg2SbsE2j1Gc9eQAbjRpJikw6d7LSQH9qYnsZYgsgG4kr5BrB24y1fFCyiw4B9NyBWXfLT7wQkmzJ7GLs8SJ4",
  "key43": "4BFG8oNDJNbsevrLiKpJgrs3yN62EB6sSez5pVCUVpGTt4z6zv6zboadJmRp82LEBwmuFfqXcLfGe2qC3UyLtFnr",
  "key44": "4NBCeoVKPavy4rr2Zs8PkpMNGRMXUaDn5uNiejdAG3KeFXDV4znvrSDEisbBN46mGz6CZruBTxZSweoofXaLKVak",
  "key45": "2jKg6AUUAytW2vn66QvUBfh5LA5JCw43nHW3sxyzP4GK52R3e59SxxSq4cryoWisBCSZShcWSQAubah3tKDr7eBx",
  "key46": "2jWjkxTnyYgeackZ18aSwhNS8X7b5artmVjE9pHAk4yCi5ZQqu3BVojzPaX2yAPhq6T4XCR4FUQiNCRjXVh9gNgv",
  "key47": "4sJ8AFomsYvUDX3ro3o6vTNhxRgfrMnPfCpci3m2zVEfSqcsrt2PiqgdV6qdjhvwVfKzUrbJKwWCHqj9kk7ofdP8"
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
