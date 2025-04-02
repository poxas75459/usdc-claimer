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
    "2dSk4jyBLpH5Z6UkPaHX7zDG51g8Fqzb83eQyT2p2p3WuNRjnRmG14Aa8HiFytnCrdAkAUhbXRA6uVaR1SvJtFKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Skmw4i8LZMQyZAH71Xcuq7qBQ9ZQuDB4V2kpiLRVb8i24EFir4umNVPrawjJvG8Q2be21z442FowLrAa8vFwnnt",
  "key1": "5hjco4JAtaJXTBGpuLcAFWwMt8urQExQnuhuDMzVnw1Sf7LYM7bBq2Q4qhYGyHoDDGRz5j3DWC3hUxwz9uA6Yx4J",
  "key2": "2fCEKtPaeED7UToBeTZ2mfVRA44QzVUuuonSyzo9ZfCYL1NrhZ8Yx6durdzbkcNAiErf2wXGo6Yp8PmHcDtPnfu7",
  "key3": "2j5M9sovqWAnWsHUQBzmnQGWx5hjDbpWwSJ8tVdtca8YYffGfk4SWLQHh9vZNT1rQkaHQBcWxLmxLrSyarGL1R4H",
  "key4": "525wsFQPfuDomWoyE4B911f4QBZjv1RXHgRwWgbHDTHDttaAMdhc5pQWdYZh6JRqZppV4QFPvK2dUAFScVTyM2Bz",
  "key5": "5PSd2XnMKL2B55XNynZE4RqJKCLAKy56LVSvaoyc6LaPQquvSf6sBTYGCP6hrkQ3ZLKo9WzVyjorScQSiUQa9H1r",
  "key6": "41xtZafzzdvphkEUhtMcUEAqmZyJ1TgGCFBwC1SGmTKxqcxe7WeMj5vHhYoKXJns47UpU6J2jQJCxHqwTRw2qTrU",
  "key7": "FuzsDFwXTrtSXYbYtNgRGCF6ptXAMDAXHiXivGGSCZyQNB9XPi8DGG7vXFUtFKEimcT1idNz3MHrL8oS9bZ1AvF",
  "key8": "4x8ZxDRrZqtzfwYDoCvJss4iZmNPr99dhPFfBsC3758VdUvHjt8eohSBoVeEkfayN99ipgeJvRuxJn8HrAS2wvbM",
  "key9": "tAojYLSqqwrDWFj6QsRMCGyCZTtw879NoxM4DAckHjrKqrcEZXayEPbD2nEAwQk9xFFPzKpGkxvjtDmAn5mVeLW",
  "key10": "4upBi8rd5xtgqtRikeSNNewmGvLkbuXnVcuBxpgx9dxiAQcbVEoEYThcVNdXwoDJy2K1JwBNp9PmCickmaPHDGoo",
  "key11": "4Hemtrqxos71hqk4yq6MYtAbpoLcmBqUimXG1cJw6uC4iQaVatY3r68SiH8BnyinmjofXz7nUZK3d29ZJkNSkjr7",
  "key12": "24g3on8A9JyYLCxcoTEFiG8aXkioyjHo8EDR7Z7wp9rK89QTfqX6XCjNFmEVuB6w2Vd2wg4n5Q6fMWTf87sMHSuD",
  "key13": "NZXfCUuBCopCBiTXiFjJiEj5aCYQLwgxivVFTkMChJMLkt7PrAdTKfHNX1rECetkKBGSVw2i8TEGBozEyRqBqYF",
  "key14": "4C41xroNyF24umj62BjApafqSMSyowWe3nfNZXzSpCZo1opGrH1cbTRQsRj2XDrtFsQg3141bu6B5PAS1zBWxnCe",
  "key15": "Q7qLzLUMe1QnBrSGupwDqGDbhdJ298Met8awsxHwZn7d9aRp6Ycss5L6qTDqesw7KB7JSwJLwm9g1FfUrmnHaY2",
  "key16": "3qByuse3oNoNPNLKrhwQ16tNUYkm1GLUKM9sBHuaj4s1MBNCxo4cQfPpKbsPixbVZ1myeCHniMPZEVCvtRMhUbYU",
  "key17": "3vx1C4rEuvj6P36sT6A3WbxZKKK8QBveGgQ1RUZvywjBrKqnsvXeioCrcuWE8ZHGnRPiWqwnzrxzQKG6uzK7GphT",
  "key18": "5TaxtCqUogxGEv58UBuExFgBNpvmVbFXRfqKddmAkHPZmNo5jWi2WJVYtByTDc1mC7PcRdTtQSdnJZ8h1wqPcaSd",
  "key19": "3tt4eCnXFwvaPT3in54nZpGugKgnZQozmdBmMnzpqx8WEnp3hS4jVmg6GRCNpnuiBoBgdou4q9gSFWYb4dSaKRBx",
  "key20": "JTVxk9SRx1miTeDAWkA1XNy5zVCT8SCyWnBRY9oG36pyRQrQyen7pR8dfHfq4nZKCk8m5VE95SHMGE43NaUx4cH",
  "key21": "4WryLSeP6LxZjCyYidwz1jpxkayYwHi23rFPauZMp5bD3QoJrodjS4ozMkohvw8LDqTY6impHfULsai22ZxaLRgG",
  "key22": "3i1iUJF5e8Bv3nWr2BG62XW7wHB7qgdwLcepwCCAt9L75ibp7nCnwQwzwuBicmjQxxAbXrnBvWnArH4EJ29X1hR8",
  "key23": "4u1p7N46Ux7vbBCKuckHgy1xBWSeQGnCtrtvo6aPoJZtmaxuLcqmqq9D38i4EE6riarKMgg1k8himAYp5Xn6yQHx",
  "key24": "3BV9FUZ1K28tsbPEhMwwHUpgbmPb6k3vpmGbxyUhWVJ14MBPCYvEEefqBJ6LxvMUpFcJAc1k6AAGVBs9qyjZ2GcU",
  "key25": "5SeJH5QbHDvfyGnWfQwd7by5rLz2nTPJdNJ2BEeCnvZ3osoCkTbxMTZsr8U6hJy5JXEKdvcZgURXbXewmijWY64k",
  "key26": "2ALyf87y4njF17pRoxzgrcnXaDCEv5RF5QqMQB2QbvPGpBbCVqgrodi56i4gQyv9F9B1g3nPsLxSmddCue3yhChn",
  "key27": "5ZyXfZmpQpJyrCrFH7bHz6AJLzHyjxfd5DXw3RW39mp6b5fGrhnNGuRBttxg8y1XkumvzRDYXa84nvVA1oyGqxjp",
  "key28": "5sTyniV9WGngf9rfd2cfn3TAKZ4DjYNnMjuKUhrTcYxUL1NfJjYzq7bgMs82ox68X5k7kYEu2e9JmZnPr2PtSmC5",
  "key29": "36JnLVqHx72xv69nKBKGf2Q5ZvbJa4HYMdmAcmMDGYz3CSxJZtoDBQDkReuZCX91GCpJJrt4VRhciyyVk4Fd3zk4",
  "key30": "3SBrjugmkoRw1pCszWDSkCfvvmPdy9m351vohVKtcKMrBLJUr8yk6vKiFgC1BWgaVrqHsWkBUfNX5p7GMWQP88qU",
  "key31": "2S8DJXAVQbNJ7EZc5VUxKNdAXh8TKGNoCQ8MbKwf1y9ATw3Bf5LDjbqeVeiLJJbYsogK3XZWUhstHJMYkwKKB1Gs",
  "key32": "53gDYp3LR8beEkn9tWsKqtpHHhTESaAPKVzWCVdSxCUwgTgny28aLzRFGQwEGZ21VSLh6Lov9TAyNVxB3Somxkkx",
  "key33": "4FLWRJ2anzzgmgMzZy27DJAfX2ZUmU5Z1UTxrF3K5jTVMheXJgf9fxi3YschNnw9DmUaWLK3oSjuvP1xvifs9DLS",
  "key34": "3sN8BCKXz4s4HZt36pLo4HzyAvGkwtTXiUGBgwaTMRaTYaW4qLKaEitv4fAuK1oAq7b1r6eRpPcmZZMWjkJcD3md",
  "key35": "2EhMDYNuErZRfJHbwDFvh76nhEy4VgiQYuwsPYKtCFJhk2dVQPu2V9VxweEo1TrKLihrGC3Qdf4xD9EyWyvMATD1",
  "key36": "upMYpdVdMAFTsnY8BTCtCVFmECaDenwRkuitJFM9mpocnXDGRvudChcnREzV5PWjPUYLT2kurhEC74xJHwegJ5n",
  "key37": "2LeEN26veXDgJ6grydDf8rsXhx3Dc6iL7iE8aohi62HmnigF23ZxnP8yxwLCmtEQbnhEkd3ageC7yvvuGFrXMhyY",
  "key38": "3UT9TPoG6ygPTPDYyMKuN9rE5ezRwBw9wXJgLTroXpWbJHtdTvG2QsT6N4VFYBTTwiQWgXQhVawR9rPQmtXETs8F",
  "key39": "4Kqf1VtSWqonkqp4YxwSSKAXhb97cZxe6DwAdAxyKvJxA27DfNnATD4bGwvzj2HNE5YfQbcK9eMGkYvo33E89RfC",
  "key40": "5vrMrrBYJBmCSjrdUrUYkJYhTDFmzKvwg4y2pz7PHoXXNFagQKnbz2hhmZnGsZySWDbpxoAucWkbbdpBe8qVyxfc"
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
