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
    "4RYq8FtdQv8SpCQB7LeyNxgz1JHYmCfG8Z6R1a6QqzDVNQvVNoqf9cRBR7BAJqpQtyUYESMDpqzyW89uw7PAjtCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HahYdybCCbyoBXbpgra3Z85ERpPrRvmQ8gNBxwUFWLRWD3EYKomvakSZBbhERdoVv3Nbn8SMu2Y6Gcfgm9icQeU",
  "key1": "LmS6EK3YEvxzCCKuMGGXRvMctmnuCZH2RJKdgMou37w6UTVFUuLdykTB5ZTQo7y8GuoXv7uLBDyvg2kDnC6DpNE",
  "key2": "2ABHXSvCixfa74vzWq7a6yAsc7UKNJ5ZdBNkNKB13LgGNKERDkKTGqv2nPaUsj5tPqRixWhxoxCZ9mjjYkwddzhg",
  "key3": "39n3e6bomwUzQh3GC5FCobrMuZCTNuW9oNxJQygdWVb6adiAKFWtnY3WGVMUHEEzPVZEfdmQ1wMVpMaKJo5ZGBE7",
  "key4": "4UbZbNGjPg9oB7eumGWUqn6z2C6n26qFBX76ybgRmU27UiX6LWHGKXiumbad1ngA3341zkjQ8rPF17ziaJNQsi6p",
  "key5": "5bTorVSrkS8c7wyj5mo5XcPMrPd76F2VfVsTpXwoF5nJBtXYsJWD2rjE2NigAW6d3s8GqcpWrnLj9kDxZx1kmsbo",
  "key6": "3YVyWpoR2jiKPPzG3SEMY3VpXZHm5qdB45FZTs9mVxvKjufAHMnUNEfjHDfXEsHBgth7T6Jm6mqSKS5XCRFGWF8C",
  "key7": "2tEBbjjWGBL2tac1wDG9EMyNxi6bRzk9N8DbuPxWbPjLcsK6sqk6miKcKuT9Qx4JaioGcuqsPBsQ4znoj4NS79pP",
  "key8": "5aza1jErXRUmu2wgoPmLrNjDWvPwH8pFiXbRP6QmaRyQ2TkamB15YvCvWtL7CiFwFtn5VfDi7bNPzHWboqqmAkNm",
  "key9": "2Kff1TfTb4Z9rrHRjV8ymNrWGHikehwKJgifzFYZESPgkNDE7ZMuTn2vXgYBaniw4py4ZGHBt57QhoUav5K5VD4T",
  "key10": "637ZZVsMkwuZsoNbmjNmaKbtJ1Hc4BomQ4sYwGeJdiSVNRa5NwD2ASavnZLKifMUQu5UsHRAxXLbQUqVPvURhacw",
  "key11": "4bTgZanayEVhV54yYpSr9RLGizZhHm6mA5s4mxJB3R3wUtfQMhQhCDuSWVvZiTHV3GAhyyu8rWo8vVyftzVSKNvi",
  "key12": "3RLM7WHEKTFNT7YH1Xm8enKg2YQDp85z8nyUSCPpJYCdQ34YmEsYq7STA99AE3Crgs9jyj7stzApHxCHy8dtMqHj",
  "key13": "z7vS1PX7cQyHf8FKa5j573cjrV1NRoHWooa8MN72Tn38qr1KxtDizVz1JtcS6MctbQKq2aFoXbNt3RXb59cPJwe",
  "key14": "3JfTrCoTeqVnAsB4tWBsbC2J3qVL5BkmThuLgPR8RH2Xk1hKzwEvQhc5TXvSAvbfgzZxbity37racupfUcbEgUx4",
  "key15": "2iCFCgWmz24miNcygfRM4A3RdEmyRrhcRj2xaYZFzXqmbGMy2YaAZfP7Hz3jyqbHs7DoVJhwCUCMxdidnmpiPys8",
  "key16": "2yGBF4jCUuYvabLPxhUey9dV1evzkqZpE4wVViGfcg6HHEKrdJtCk58jVN7BDM9Bs76XSYkEx6chQrqqpy3ZJ7nU",
  "key17": "jwxaGj3hM4HNXVfYmDFfWjEvaqY9CuvLpWakc8DrA1L7zSMDEBMYqCJ2phoEQrYdwGPiijMY8heQUWd945nJsu5",
  "key18": "2FJrgW8riNcL4ow1RY5JXH5W1VG2Kzw5zWA3v4PN8YyY6nMeb3mKgYg7vDPyQsA78AGSPndcseGVFTwMvg9GyRiY",
  "key19": "66htHBFXGXEt6qBvS2thZucQuAbXMCmp8M7s67XYVj1LZEtW9zsJK37jaUAydKrXDoCybYf68eyZ9C1T1JCriRoa",
  "key20": "5LHVztkKfiwtoUSKMqR1zzBDv9oSbazxFaKNzgJ7k1DtyyA8TzmjzLhy35YPf2Fdy9v9CQJpceUCCiFaFrSW5kEk",
  "key21": "2g4MaB6UA5p2iiKB5cxRg22jpoQcUAQvRpV9Leo4JzgpSHiaAshwqytgGfJZ7vyinX2kXHvRRgJ1cNDiX9qP7sNu",
  "key22": "RVxFTDPexe1B47WT7zYAuULjPhiVBzjuMmAQh4ypWFaPyUBYkwj6qbUPS25wEKqaoggX5g8ZgBXqCD5emvqrty3",
  "key23": "5qBu8CxkVbGJ91jizYqCKu9uUEirSUTPdgwxSdphwSREC2xqCe6TP5EDWA4euenDHCu6G1Mbzth19jFiQ5UTptpk",
  "key24": "3HapDUj8EotPtwmsvEkzSB3zipYQYANhEc1GSFPcBrBRPvithz6QM1vU47PPpJkCTGCiVHfDUNAcvCRGgyLCmLPP",
  "key25": "66hMUVH6SCdP4WyCmfPDYMgdmzkhHryXvfBErSkBhyjSxoacYwdYtUaNkYYE3uWsW63ps9ZzqJttcYoMit6BKeup",
  "key26": "3ExKWGnnSWMoDU7PvtsSfFntibikoKsAoxnUJx1P9xdnm9B5V2aaF1FjwuSfuzfNX6NHpvviLHrmgBk8ZjpHNyRU",
  "key27": "VytHjxbzpLCfWShwPd8xZpVhHKpu2FF4maY8yNeXqL5w9rDinKkwjXGsSyVDq4eb7qkQK7aKFQYLJ6XWGtyWCyn",
  "key28": "3eJWdCEhJWtrEC9Ztee1kD8T41cEVv6g8KSLHwgdkyHEWYzxVhBvxUbzgjAFUmPs7MEXhiZ5pFpcCGQrW9HfdoKo",
  "key29": "3pweg27F1JGQAT36B9rzfpFHv7ZnToGQ3xkhKvUTmH5VnonSn2yQhpDSUeEgw4rjjJQzXi1gi34SQALS5BvKvJV9",
  "key30": "28ngMsXEC5d6t9avqUYziwxgGkNQ6LEbc5md2GAZtpzNYC8h1s3PmqjcMhQg8fwyFTZubACAxbNSjqwJZRZgej8J",
  "key31": "2kTLKk8mwSajz6MYtzA95mZGEfCkbG52QkYtHkBKGrLqdvqzbBNM34UWP6W5V2WATtTi9aZwGbxfdwKtfWham2bt",
  "key32": "612dowBVPH7QUQok2YPRTMn8zxdURg2CHqrAmWLUyhSvgpsvHVmXbmrVDAhavvjviv73VqAvcPAh9PM3Pd7UneAU",
  "key33": "2czX5vdRCCREjbYCJPUybek11rs9K8kK9Jn4qghraiquDBRyrZRv35EVZypu9NAbThwACDT4VpErTRZVQNzaDTXH",
  "key34": "5vfU1b99L6zUvDRReymFrrNJ8BYNhxoptNnKpApV1JyAhNH5chKdxkut7ZvRjEprhtd6GsKhD3UCgJNtkZtRd1Ms",
  "key35": "4ggUgPLSDB4rmjbsEp6TYVbRY8fEWixA56qyRayUssYisJX2dCFsdXUVXj8pQXrYySWVX9LLDUfv2SznDdr2fjUu",
  "key36": "4GUfEj5TYSm8qHKK2PVU5Vqn29XRtKuxGUef43zzmTXTpnnGbz6RBuHbrMRMfUEaow3YKA9rVH4CefYjtuqveFPp",
  "key37": "3texM4ZC3pZNBsUWfYp98wjemp4iZd1tyHZ2U8bV2xZFZvaJgfA7UQAeKGX9myQ5jkbEFh7Dws4ksc9YHqZymrAx",
  "key38": "3KLrhH8aQnVpJwN6gR7hGQeHzxr4DmrEjjgjcuRxBs64UFVyGe2KzubK4M6g94GujzFqDxzkWdMhSPb6SWSmmP5K",
  "key39": "2vgJXmMp8JoBnmBvagbAb1Fcm7mec988us3HmoEa2KJ8VEH6Rdqfrso3R2cPd49pNNRtV8ognywoZ2qABy2SyYkz",
  "key40": "RP5c8J7pT1jAxCu4sp27nmSENhqmYEwhndA558xGZWaYDFsxXFA6LkzDnbBQJBayNEbphJQJgKy4B3qgA2wsPBf",
  "key41": "3cJ8onb1NvgqEZTs3o1VGhdmadZ4qxDBnKYEkqqmJsk997McYPR5URdcnyerP3VsYNMfiyWwimkZ1Ydr9P9uGVx3",
  "key42": "dQi5QJdp3W5amAwAdwBRkxPRqiWCWCsKHKTZTyVQDEVk1eVu9ntVAA8ScwvshxDqyoE6GF1TgX5pkB9R3fb4pJZ",
  "key43": "t16C9HpJeAmcfidCC417gnVKm6ZoEuduhoL68Aqgcs5xZH9we514bXwTZDqzDhtBQo2XceoDHGpr4yMG9hm4FHq",
  "key44": "5dxdZ4KW5aG18rLrfiNaNNN6H8xxaDoTJKtsU1qJgWuxmW1zZLY9MFbxMQH3wXPKz9YJtZhnPTiEvjsmUF12CVnB",
  "key45": "3F4QvyE2nJqzZXUn45Uyu1iChDHsAsxu2kwAsR4TjGUPRs8seioCnhoX442LkJ5N4dhLwAGtb2e8ppUyouB9BW5b",
  "key46": "3rByrmPEi7PfSwL82S7ppEyqkDcyHjxCxX2HQkDXVvaZjNBYzioYbNSGY3pEqmLRyzVCaC2HvAQauzkUYmaoNbY3",
  "key47": "bTHXyijaA32CGFrmwwwwqtfvs6my76Y53DM86o1vZXt8xUUDzKRH56UZo4baKSsPmyjXvHKkYmpdVqjQUTpEYvp",
  "key48": "4ma9qhwq6i1MSB2s5d6CJ4ERxUZvNc3VYhH1QZyv38iQZeWX2aiEgr9xXxpb5LmPeaNY93MC4baAnZ4AQ7684pSp"
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
