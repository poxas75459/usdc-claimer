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
    "2unTcjcoya55LXHja5V9JbUpYpqQAutFoHQEKr24q3xuMkk1P4fqZoUAA5PdJyEDV2bihMPBcryH8bbtfCL85QNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271kEzmLAt7dUe2UzE761eVqyqMkQFsNaCzoHbcroZJZ8m8ePpVVD9nCLToc1vpTZp42oNQXs9s8JDAxwV4yxoHA",
  "key1": "VArQ8KeZ4VRKfU1LMSqW1obNBu3GMPSfyLMhbjB7M9kGiBke9BoLyixmNhQao5gDDMQg5TK1aLwdDqstvtSpDU1",
  "key2": "3u2KJg81gZhnusUq8iNCqnsP3iMtoHAbACEWWuBia2abhVmmTauyvkGQqzdba2z4Etx85toDga3nHRJ7dVgezjVs",
  "key3": "2ffy9QF32xEmfXbXnJPob6nQhPkMgWEZVKPRqYwdtoKhdJAgQUC2Fq8AXZSZLNyrGukn6MtSSGWDo8joXTq5kcpx",
  "key4": "2sr3qeuzDsgm5UXLEejoYfco9sXJu4Tv1hS6HMsAPCr59KXcDc5WXiXQ8Sn1NCDdnchwGuc4BEfuBv6mdeFKxhgp",
  "key5": "2ejBoujxKsrxKWghsAqDkvpP3CxD1874SPrnm3NGnBefnamFzWgXoHZNkm8GAfobqnkhJLfMweaVYwRmuHuL7wqt",
  "key6": "4x4NK8qGUSYgvgwRmukcLWaFxCeXet6FVbdmsaoi5oprhR6oncSWfWVdAj2q2Puz597eztnnFDyAN822jMckrpNQ",
  "key7": "4bYZwU4TyuokW6BouD4QNAHhpVBWgthgGwsCBNJZGnPxqCDM7hBQJS9RgpXJEyVt1a1jEoAdjg5gVNFLmN3fzDhB",
  "key8": "q5KM7F9UmxfVXVLvGSvF8Td89pMGkqY6smnrdaweXfibza9mLqBDUnP5ScRn9uMDtwdg3y1RfVbQ3J3hHmUda6Y",
  "key9": "29qwLJcHPoLeDR1qF5rWBMnBH3jjAC5vSeo6bVv3h3dxmsknGiapgSkYwmZMBoynA5je2jJLx2rq6TcvLRBLxh2x",
  "key10": "64qqujXUqkfiUjYQcVUkw4xzMhuT186dEBk5n6rR6fuV7VPuqcoREWJaHS9ba3J11r8gW15c6wij2TcDzbhS4aDu",
  "key11": "kKY5ErU4fkfx3CYborxoRLVBzLejBNu3XLutuS3o5y8j4QjhmyHeceRzJhVqHWr6oo3cYQnLprJidDDGF4RAYXs",
  "key12": "44amicBeykxydKPy3o66MtQv686c4XueWGN1U61UDNBKRioBgXiJ7UvksLcTQcaew9amVke2DeMYM23PJopwVWks",
  "key13": "3WVVNb9HSLycfFcS36d9x8U3FnA5jkA3SqGdTfdzLFYwDN9YedtNCna8Bo6Ngon4WinaLayEYdoLV8Mr4xGDTN5M",
  "key14": "5azVUwuakwQEKDx4TeGVR5pBiG1ysGSoMeRVJStJWo9MaSWokEBZqUoya6D8Y8ztkFBBVuPai5fZfgZjmPKHkdRk",
  "key15": "4kwZhUyLdNfVEA2vHixG7zJ46xUarFFje9EmhXjPj3Z9LNVj79Sa99ymGtRhwkq4ekDuuqruTBXDXkawyB7z8Y9J",
  "key16": "4dTb3B476tcYcq7rVP7R68ZNFhGfSiy8iPzqXiWb4LVMS5rdyf457YuiY1XLCfz1hQDYPB72ByH1mi48Ewxby1Yh",
  "key17": "5wnkekjWeGJdj2Yrixk6cCx2PLQ6oE6oUdEjdmBbeGiWoNab9yUB8Nvn8tMRkKrcj6DGKLnwf8i9eTsYoCjrg5Bd",
  "key18": "dqvUk8ZfsMJrmTyu2hBZw7jHbeBPuAb9HH2vGnjuSiCcrdho3okpH3VDmDSTWGp4vUWTwEUkBhEjfKG1Zfynt6B",
  "key19": "245RGMAZd6azuqvSgcNB93K9WY99np6rXsitJ3AnFhCBjz8Y9GpbH5RnE4SaRF5Tx9yKSqeX1Rf3kRjo7JZaJ8TF",
  "key20": "4reGjqAoJ2fRZcdLPpnbBDzfGeH5fxq1goXrrjqUshpefLzmogezUrSi8VXsz7UaMV2b6GxVaUSZYmWzzVP5VGwc",
  "key21": "5coHeEdDNrFeGpFwqYqsP7E5hD15i69qmMVPLD3WXyseiuryStzsm4HzrdZoh6t61moUNJp7DYWnZS1C1aAH6DVu",
  "key22": "CMFSzHiRjAXHmmZh26n7syKY8ELLZ2JzMtkdpy1E4HUk1oj9WHUXZSNgzhcpMF7cFKqJcw4DzR9BpcpGgSkXppZ",
  "key23": "5VJSVgthJA373ibqu567SvnaLpPnf6Jyph1S7wwPhTroS7oHRQiwnmXP1w5AsYnYk3t7cFoCU45p9XPMgcvvK5X9",
  "key24": "485XSR89cGwvzLA99HjcKQhHa2KfuypQSiSXUuBjtqRvuCJ2iSsj4Xqa2AafiJksXFQfccPmyvvE3ekHSQA5Z76u",
  "key25": "2z3WrXwNS99ZZZfzKG58Dvyw4jzfhkZUePKG71fkDnVvTNmmNpSaDv1F1dj7PVridciW65jNNn3LjAFyj7cd93X2",
  "key26": "5eS2PHPmRgqgBdCrK2AdjMWHbpFgxiwSiMzjbyvLagFYEKRvQgmXcsF8a6J659mjPaPxVeXd3EffaziLcb4TXzNv",
  "key27": "4ye6St82GrTdJFGwC26vcyoHiynkrtXaYzHiBpmkqxv957EstnN4dVSABJUxhLYHoGsveAFUHnPc5bEcaWYzhry9",
  "key28": "4549UPxQv6WqdVpXRAUjeUk2CSa8wVsQaqFZpzTVbTG9guXrRfBv7o81iWLaLEfF32sAArM3jjvsBgL6g2ugax4R",
  "key29": "41cubsJtzKYG6msJnAdZRDT3maYgFD15F26REkrQZPk5dFnYcS4AJGq1vsC41nhAnensHKwPq5F2PiQKEnJxxCFr",
  "key30": "2x3HRCrTKm9Uqkym4caLhrVKS1QefxgzSrfNfZAkMWxLEABSjACqLpZeqkfEB84oHLEDGSv37C4w4D9V5dtnHyUf",
  "key31": "4eMV2ta6UJTz96ho2ZB89uArpWZV7XUpi44AVe6y4SRUPePCbFszfteFZMuqzqN3LjciMqPSS2Qs8sGtTrBCJ2a",
  "key32": "2yoUM27zUEDMDfDrsHR7xcLFoftnBwZtJT1vyeF1ZXRkQ2TPBjU6caUUzUf2aTQDrotjFCE3NWpuF3bFMLoVoyqn",
  "key33": "5m6mN7S4jfyLgtdvSocULoMz9NmNGXjwu84JZMMVRNsePEKakjpBzbpz1ivDgYPEM91skXQQhuyukG45wgizfLyR",
  "key34": "2ujW2BWBrLBGxvDUpw3gi6oCWLc4kiS2iWtF8WaJnzK6gnjsMtEDnijWQdt7cfH9Fqq688xWeHYnLJryfvbRYvcA"
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
