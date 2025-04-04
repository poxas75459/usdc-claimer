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
    "5sdvNzdwEM9p2dRSfMR4tiqn7EFVZBsHCFpoQZusuX79sUfnQWzgxUcxBjguEnWJWufqnuL8nTB3gx2ka8dNQ7mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNdPkfxU7Ks1u6ELAYLcvzrYmCXZHwBedkx1PGhFjKpUHa1MnBA41pZAWoSeUKKi8yWDaS9ExcxhT8tS6gU3nc4",
  "key1": "5D4wF9ivyFrEbaH6P1xkqqptm6rxzKPrYrSbziASN34uG8etZEMBhD3pXdukhsX26PuLGZ2YYivRqsYeELrpwc6v",
  "key2": "4s4TCMCR1hPvLKoKhAsTBvYqLbSoQ48en5U1bLj4QQeTKtsd4KPsy3H1fbQ5EhqwBRP4F75GoYLiPC6skcGTseBu",
  "key3": "4x8JH52pj73xAkuwp1MWBuPP4nrhn38ESDDUHrciTjqMbEGqudm5d1hk5wWKF4NxNn8Hod3Zp4i9HrUf2VFTUZKx",
  "key4": "4PqEnAueiLM2g1KMoTzPkWKAQbvp4wSWmxAgrVPjuRfDRPn8FJVdonjsHrHqfN2DM8jNgpnLfK1TpFVUUZXVK15M",
  "key5": "3SgSuBFnHrhkDLQYP4FqamfPRqTQZ25W6SfeLJKzBQJnZ4xfoMELyRKZesJeT2KUrjbXxXba9RvXaqY7XaRJ24X9",
  "key6": "HYUh32RSjC2MTLed71Rf9By13qjRdu7mGPh1XarMTMrTVDxMS644tET2v1AScBHsjtLuToZqsWaPzzYm28wrFw8",
  "key7": "46Erocp7hRmeczmMi89kPGPzSV45oSz81Sutc96mgSqyMaRYeb6YLsHdxECp7aig64KN9bAc5SFdn3RtW2M9cSCG",
  "key8": "2ezEQ6cwyD2DU7QBj8eCJ2fVCh8wjEhcFjfiUM1ByafTWVrnLSsx1aHUnKbiSKkv8S4xYzB899ap46nNScqTBuCd",
  "key9": "3ettLf14egaUewkcvSSqRZyneTLbCASAqdZF1DSmH3ooszqiCxSrZ7a3vKSRtrsmaBtvEnmk1LtBLu9332o9ddTM",
  "key10": "4SvvSuFmz3UNt9zoo8XPVpWhcw2rg6npAD1zYF1cXkKHxEhG2tJ6ram1SUVY76ihouvM4Tv7iibdcQhnGRTE5gJc",
  "key11": "4vi18V9VfibowCrhEBrgN58D41tRT6b9c3dHjW9NvYUNxZLShbhFZmwVMuQCBtBhbKAbxdhtFayKWTLkL3NujKdR",
  "key12": "543beVT7fqyqJcX78skamurRshbG1ytJoCpEgaFRroCT1VNmaJE69AHyGfbnuDiwAVYpMExZKpU9ER4FVS8eiiHG",
  "key13": "36NGrtyFbhbLkxfdgPdNFdUhCwDnQWZo1s7ojWixVGCeRa3Y1hkdHFGYg2QobbtMD4VWGfzUiiQR5CrDdjJnF8Z2",
  "key14": "3KHhximguAbP5CX5JUsVAoyQexoePJxS5Lht9oo27CQf4aeYHbUqhkBuWXA8Mqu61sPxNzgLpBofE4CQfc9jdx7t",
  "key15": "5EU4ZLXwCPDj911NrfkMdxDU2MgeFtx9Ti72muFFb8EN7tfsHqzAekXncVxTtrN8jKisFaGp6wGHCTrzENqpx5Fz",
  "key16": "4ZCSX59JdCf5sDu64RFAezy7dwzWmHrwb2NuwGeMHQY3wRgnEZPztCc6wRFvEkRrA2xbvV17aY68FhwoGehQHWzH",
  "key17": "5JAVLobNXt4DF2yk84YuYCXEknsLUN8n1HtDYwas8ohPHTbMzVSVkw7nTyKNwQGAHmUvAjtKmPB76F3MWLnR5K7b",
  "key18": "5AA9mYacG5saLcaAn1YZ3uEssEQzk52DF9XAV8abB3RiLmRkZ2NsBNkEfUfu8mfmdzJvf6kE4SYrzykFEsYfiaiS",
  "key19": "4LenUrjRqCfEEm4abeXaxsNwQgMpiCJDyzqweF71zpGe2d8hDdvDf3jnnJLP8yaP3APF3ntt47NQUxtz2qsMuz9A",
  "key20": "5193TF1wCjYRBa6v9xqAjhahvsFnzUK6bLSSmK4A5HCz1hAzAy9dyfupaUReaET7ogJkZYFSUuK1KEwX5jYmLkij",
  "key21": "21yMPXnmMPeJcX2ehDPgMKECB6YZYPoXYMdfPPqwidhHrqmyEedhFK3dBQtWrFTyJCw81fppT5gtzonaGF9jwfNU",
  "key22": "3kpKYnoiqBGSNABLRSp5iMpDgbABEGEjr8qosfTevAQPese9EYn8cCyRyWPCecMhkg5uafurw1cehVCzLKQe7jCc",
  "key23": "uRKf9syS1AVf4Z88jtgCZu2xbrJmQC4tSNWyvv8EuNSwGM5PqbwCh8NNzbTjwd3hNuL86h6J7S6CsU6jY1ZBpCe",
  "key24": "3RMRGZBz5U6qkFhBssKMMMqC4tvawMDcVvN123jHagW3ZQzDRFFhAKrUkiBp6Gscrko2KK3PYsPhpUEUeigufc83"
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
