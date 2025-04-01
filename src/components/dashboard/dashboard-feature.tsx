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
    "5CBYAAdckExYqTgvGG6mj5dqm8YzAByom1CEd53uvgbs3RdHDjXHmtR4whNGpvhCcyLPBW3b8NAmYHETwVsFhZEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPDrKMXwEW3zr5LNqCnFkWtLWjKZU3ju2aEqTH5Mk5vZa4KgEAHx4GUj7f6NsiCrqwQxsXgfaB39C3TGoKAFBzH",
  "key1": "3pvXM6hhAgBTHdnTQydZ3ShmAYJt3iDgGbdhuyT3n38mnSCbQCv7PakRp3PNkdGdczP9Wjih6k8r9eKcYP3sQwUG",
  "key2": "NF2zWmFVTTct7b64LeG6rfcXpYnJ2J1FJPp2JrDNm6zrhPgc9NHnjgTg7zAdwbK7p9guisERgJDGfM4FMmkSUuX",
  "key3": "5XDWHD2P26ZaSybcrrGtM2knx7PXTwYVjH4RWAfSnd8c1hKBUXPJoXemAnteiw8j76cxogzQhjwtsodrDMWCzmfV",
  "key4": "51DPwqvmW4gcyc3LQEZfc95SB4wScWgu9zpEF3KxSbChTW2mjDuBjCkx25VpwEHo7KhK3FbS4GPJAqyMsg2FiHZA",
  "key5": "zkwcieuD8yzGskR5azWFAiwRLFk3sVt8EDasmGYxQvb8ywMqwMagGarhEspwFAEQec8HSLtCud6GQ3xdJjpJAt7",
  "key6": "4QP9eoz2kbBRXLXi5kVpw3Lf5n2G5nEGmdNzLutehN25fUQo7BEmwbhRLv5mv4dY7xi1rtFoZMuHLDDXhD44GhAp",
  "key7": "SyAQkF5Vruo5AFcZrs3bACfp74v5WQ5gFyR2uUWjP2Y5kMaaBbLyWNsHdmVzd7TrJZvNcvpxjhBZcLLotaiVfak",
  "key8": "3PnGbDBb3uMSxtMqLAQ2Aht8BtDwiDmuxe1BC3sMfvawuZcspPMxxad6dPxBRvJy4mwQLJxWHFXiEmCTEhA3dWtE",
  "key9": "58hrfmUgYKwfEo9fVeGkDo4Qxnnz4HDzBUv2epNNNYDouinJQwjTRm867QzZs7oP7uAxFfmMqGND5j5VscMJHGSQ",
  "key10": "3wcwLf5nqSw91gfyNaRFidrDqHde2SSSuFv1NGsvzPhFuQCzf3WrdU45EB57RE2FUhpSXSpJ3R1LSbcjavFMXcFC",
  "key11": "42egR7mdJLqqCVzYUGYaxiQCP65kKUWypDZcQDeB6cNcixZetuprzfwPviyxHmYXcm238BcC56iCAABGJACEtcoZ",
  "key12": "jPZSxQ48x1WDfsXEmvZ2X1AQWhQoDo4xqKFhng9CUz8Z8GM9kyVRjca9t1biR22mmFqfB8YVb6QUaEAgNotK4ab",
  "key13": "2CTis5wZQHr6bVEAtuyqdotNz7XQy9efV8oPbzBiADw36EV3nfrwrY5txs92WBth3NRJfiBmPYj5rYvvSP333XHu",
  "key14": "4Yar4cSki4fKzMX6wagF9vcgWPwfMBLRZXeF2CMHyJN6KeWdiNVNFwLDHxRw4W2KwxQ2wUm1s482Zh1Jc9AB3A9r",
  "key15": "VzyyjUM4aXbyRQc4ziQbZ2pfkddLoev54qgbH4xhZ1Zzxyx68oEBH8JbtvXkRHKtVjcNuyHkDCDppfNkCy5TDZY",
  "key16": "3RsBwoeeBgHZnNV3QRzNA434jcFjBftadhhy2T6iDXSgVzLKxc9jmFerAFdbhiieWsLGf2bgusB8g3ydRBof6mxQ",
  "key17": "DYDhc8SUHgFHQdUbu5zxtRbX2RMs33jhevPDTGoGV8qgPg4HgeGpLGfM4p3HZ9aUWC9XVjhJTNh3i18385H2EdN",
  "key18": "2yTCgaxr7CSNq6EZbamwgRuKgVo64ar9m3RCPYgfZ77z453EAHuBWjy4NBCSP7cKcUCom7Ru7pVF3ZmRxSYeHjeA",
  "key19": "2Efrf4xhAeQHt3pJaLGX5NzfG1M1H7Ro4EiETHv7LNSWDrD5JuNgLB7iqLP6m2hCeHP9wH3dyc8PDEMXzY5c8bhE",
  "key20": "3UE1KPz5Z3QMo4Lv2jJjUpZteW3H6picJN855mWxPEgiuftXgrg6gyecHcqC4UooaJw65M2ixPTXx7jhLX9ZLRYd",
  "key21": "6551aPnRuneB1GFY4yssugnU2kdQq4N8YMDrjEKe17Pj2tdyFtKzmWMAbc8ceKPBua5MpYXmLrv1uH8Nwum1y28n",
  "key22": "2ZTN6yNSrsmpN3EFh8jCPU3n8GkpfgHsVDDM62Xkj9TsNwFgMR8mX3CyogJ6V2VQcB3xFUhqBNEGmgJ8xnPNXVNQ",
  "key23": "5Tnk8Th5YAi9B7JqHK89kdPZUzZpsSYh9Y3oErDgGLH5W9yomvLiLNY1TRf1hPR1YwgkTSNEvCkCATFxpfm7u2Jb",
  "key24": "3qi7Lqo2nCHM7AKjy3G17VuC7E3pgQ8oWQKrYCADhGiXtvRg77tNd4Z1c7bWHkKNm8LQz5uzuyaZh1zqULgD46xA",
  "key25": "NWwRzxQYEFahCcj3wgorRrefjqCQ33zEBLG6Rb3mHmgJFxDR9LA6oTrBxug6P17iD49YixGLxL8YMa7DNuNF3Ky",
  "key26": "5a9b9C1ZUmUcxPQ7n9QiCCPmgm3Ec7PFezLnm4QdQTXD4fpzpx1A8ThebMh4bRri2Cjo2V84jxNomQnc3YoouC1p",
  "key27": "3bJNaTQDLJLjcq9G7ik3BnynDRdk46YDgA1tXBaPNYvMND1gDEUbs16CYXQW5ZEYoNJeZasVq8fcbxJihgDz9uB5",
  "key28": "Jmt89yGxR2LYNUHyS1yJs7Ed4w5hfA2kdpCrbtvHHGtHApoyMgwAuue11tp6KDKzVGkAsJ3Ztom7ER3jTi3raHF",
  "key29": "4rGS9cTA5dFMwAd3RETJA3YiHM8Me7TiFqwYBLR3dkRoR55mqob9xzEqrD65nSetrXTavoCLfCTAPthc4hPLYtKY",
  "key30": "2Q14DW8eMCzPxDhyxPH4cJinJnjZXAqHTikDFVabVfseiiqhJQyjyahXjVqQQbQyX3axPVikRvvcPPXzD7EmRXGw"
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
