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
    "4emSudPWiZLvFnKPTALLqWa3B24oVdxeqy6BmfKZ6W2fsDydgZkGbDD83od8NqfqVj3g4SNSrbtKkL9uKouLCaWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YATYWVL3dWgG8tDsTb7cbtxK9TY2ktHkvCGCU99G13wDc5d18SqMyMeay62ibVTaF73nv4bg7T3hBVyH5aBYS1M",
  "key1": "5iKiYaaPtv1FHm93EJkaCA2w9MJs7XYAxpRKqvPNMQ5fZ2htMHCzmKDA7YtEwqCFUoQqTGDGaUvVqGF6yaRLrcne",
  "key2": "24qmBTXZ9kqdphnbaPno6QTKpoY73qQau8iTTTy6tuMXMk361r1gj32iBzXhpWaHZdsJ1kDL8kW6Pay7hJv5yBm7",
  "key3": "3RJFfUHVqs8PEMbGB6RssEZDJaVogmY5MEWagwMGDAb7tgf2kxgt6grVqSWbqaqLu9ADVKZZDmk2f3uNpbsn2Zid",
  "key4": "4UkrBbuq8r9DTsyitry95djHq7dzH6xyT3yNkdQ7FKkpPdKP4S77PsKZ5frKykkgk6hoh4Hjvz8AYs7MVrp2jmeR",
  "key5": "hCTAVY7JY4pJZ5DThVk1QbHh8AWgThExpWCptiNTvQcEUSQn7j1VPUZiHJJrjcq1aQs9t3T4nnn4GRzqmx9pKns",
  "key6": "2CY3mtbCLzd6YahDbYMC96ySzYYDJifeN2gyJdAkie2wEwJcuQ5pjd5jHNDTKfApoEpuJvyNVdEHz3eq711yWJY5",
  "key7": "5fr4WtDKbPyUqpDBcTkYH7ALWZLzzhMidrxDymvDUygoEHyGs8ZrLwbtfQoKr2JfEDyYoZSqKLAWTB5NVy5vNZBW",
  "key8": "3fPhQYPDmivF8PWPitBycgHk284bpzYW1yFUmP1Yo9RVWMhFY9GjfVt4u7hbhvrNcZpC93Vvh56b9Uo1DYnKYNuD",
  "key9": "4vXWBRn7RNuxJBGHX86EQs6UbgLHybFRmJVYzcVARVfnmwjdHhnKv5QDMSfiemxbJ9xjhvajeiaW5j9oMNr8TXDZ",
  "key10": "4eyu5wXcXYZUMainmZEfSiVLm2WAy8Nbuq5pkE16nLdDxR1TyVZivmNQcv4YPW5AWApVmoVx9s5Bkgm9b7JA8MS7",
  "key11": "4EKoCoJQoJ5VT94PvRhifb36WiEJsAM6aadSQeWqtbBZ7wYhehvr9122hL5tgHuUnVZGFF62DpFqLFKTsierCnah",
  "key12": "492R4duhetS1EXgKvuh36DrxwY4SbHc4Tw3BD3dNKyHj2Y57ceom2MHUMDFA6rRR5mCGTh8yZybD1GTJUnSbrxvW",
  "key13": "5ZMx3kqoWaRwEkEsmxkCMuw5CQevuX8LNjWw3aYENNjZFTEfHXt1JsbBbUgg254uhaQDVfjLiqkBrQfnbjAE2h31",
  "key14": "4LJsykfDa6BLP7duRnMkbcYpEyjV95yDCwq1ihkK8NVNVjLgkFYu92qU99XhVfidZCDKas6QmXAQF93zDwvRnyNZ",
  "key15": "2ujubok6Z5uSFTiKX6Mp14xCrydTYCkXK5S2zKu2wskToVVUJQjC9Jh4KhefbvL46FCZTbajJmPktYSPRd9yqcRL",
  "key16": "3QyfmF4oWtbRYkZuNF13LPVz441s3gow73nqE8DKTeCw3pknzatcGuhLoiMZNfPZ6boNccmZEuSwdZGFt4iTsUZk",
  "key17": "35o9mQAoXxt2xtbn8ZQM4D9ob17nhfTWf9dpFQJE9XN3ZCSu3ytEkQXSbecCa14sW8fePeHyfAL5L8PkGKbtWiSS",
  "key18": "3TEUBvmXR7ZVcQwds5ELjk5RuA5GKV3Frm8AUMLTdFxDY3XqW9LZSwbRGvLsE1yii729epzBk3KqMS35Pm6qxSGw",
  "key19": "2cyqaGELWv3TP1CAcCxPG6udva944uwtJZYnA9mRkqF23XTUJjhTyxGWe2Dj3V1JBMVY6tn79giAKHq538WWQgv4",
  "key20": "4n9RZWoQ65C8eo3jj2xsTxxNEHSVeKqjKG5uT4aNW29hWx4pqVAouT2CNJqS5ahXWHZwkZFByfFAhpoc6PFg4vfQ",
  "key21": "4Wk7DoRQKJdfEqaDrbMcqMBpceQDzW1b1Uyc3xXUxodAWKbDh1s8xCydtuMo2RwgyZx3LF1hihczXwE8TWHZEHff",
  "key22": "9otL3TVfufWh5eaue3YFtcNyzrKqwtUqKR5cW49R7B38yGx5g3KFokuK8BYLRbcxhVXAzN1H78BWuyEpTUCvkMc",
  "key23": "3R8uK4zZEVqzEGfBHEDUaa3VycmffTNq4ELMjUCzY9zph522RNGR1bdzAKoPEXe8F8a3FWRqxXH7vUkrSiufHXb7",
  "key24": "3apCs7MeoJzSc69he1FYaM43Y6RK7jpUwiVTnDDEpLeMRcyGaiPkxv1e7psW393iD8fbrw7AzQNXWY8qoBDeDq5Z",
  "key25": "kJWiLEEWAF3661QUioGHF8wUfiacz9b6UHjg5kvEEZsDfp54GbnYL3eLPcQgRPHJmDXPnq8wRDMKbkBDE56Xf1v",
  "key26": "35Kqiy3ksyiCciburd8PvzcfTaWrHJiurc9rw2MW2CEa9NgWtc49P2eB71C6NUC3Z7nkvASW61s2fdA3GUuRFGJ4",
  "key27": "2t2GpifUNyxqoNpsehPAXb3Lpq2mJYEV2VBwBec7rMMgnSbaY3sWkx5fM5stjBf3QwtjH9KrsjXt3G5hHiMKVwAj",
  "key28": "LhnZor8xJGbXgQWz2ZiGeRWvisMWS7YNFXRUP6wqLktssGr5Rz7AqGno9tWtjz9UU8vVb8YKHwJSN1PzfUkagQW",
  "key29": "35fLLPtj92JGPm4q1scZLKsLvcZGupM24S1RWDreT2SeuDbcnGBJJoeeTHY2LNJ7JEfqBaNTMsJaekA396DNRqoa",
  "key30": "4r8WvKMwMoHfhEtSaPrL5upzBWu5mXd3fc9gZQbnykEZrrn689VqdKRfHE291M6op9mV5oCXrAgyhnT6e1ZK5Sby",
  "key31": "ka5uznnibBirJDv4tG8pp45RaPa9ukVPW9hrWeJKutYrkJfxmx1xfTLZ4HwgGt24Aaersm5jFjwNma2YD5ViT7z",
  "key32": "3pWyfoiUCzmDnP1dZrPdbA1MayB3pUaMEExhjniARPmT6n6XxoZoaedfEYSuoR2CYmb1YPAMW1mqjHbqVckcKwdu",
  "key33": "4y9MMrXWUzw5TdjAHPZ8ag7exHSexcD37gnBDoPEsXNEFMBU3jRQrM92Ld2E3bb44f96SZY8rZoN8ct2y4L9nQPk",
  "key34": "5dhv4x6nsbkNCrJjgwXwnTXAY4KibtBSeQoPb4ZTqeJaEpNx4wTLZMAwS1VWtUVAzewaAm6z38VUiC1k4URxBZcd",
  "key35": "3tmyavgygarCWmYAbbcGAGjDcDvhqrvDo9vcgQwRJs2DNrUdLynZrFpJdiAEHcuxjNVzcyTxwzhxGj772iYazxpZ",
  "key36": "a63xdi9ASXXdR39HEK47UdMa9iMvRWwZx6t6SbwgciWiMkN9yLAZwkatutc6auHExMXbuQ99xbaDGsXCiJWnGQK",
  "key37": "5WxdhGCzKcsBMfNPHH9twy7GKGW8nn4KshaEjQ1LUdJihJe4UPGqdkBBHEAassLa2pkzYzYVqz91rx8yXcZ2nYeU",
  "key38": "261tyKDdk3tx6xZ1LzhFGrpkhhGMN9wG2vmrf3pRbWLBonp7birftgURHvHS62ff1r5LGxwWyPjeHc4hKsuDJsQr",
  "key39": "26Dbac5RFnHiFnvjivBAtyWLhXgd1mUmjoazbxCCCJb7qVCMwwzTucQebfZpQLG5VHJQXhEuYJbzNf81yVRAVuyk"
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
