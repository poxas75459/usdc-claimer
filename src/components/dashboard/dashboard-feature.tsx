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
    "4BgBg9xGfX9j8iPzrARSsccsqmYZqH1Fyho8imeeKySQm4icitFdA2obHs6FhTP9YgktmyoV2JeeoV635rj4FiEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxbwCRekkXeannc7YqmM1g9pXfdF99N2WQCrCqzwGd8rgnDh1iifCgE9LRVZtPxpFxg8TXF3N3LuZY6R3r4bcdL",
  "key1": "4kse4mg7YAbkhDAuosAh842jrGxtoyCvogyGb83gS7aUKYKcLuKrrUkfhZYEeMaYnbAFSWoKaQVEwuXhagzowiNy",
  "key2": "3ZuiVWV9eCddpTZ3TPgbLvSSDwpcnSAc4bgrDShKEKf64AmYGtzUGzn3qz4Cdj8rnG7EdfzrjQwvWXUNiJ1QYhWg",
  "key3": "3QELJK2jNosGkuCjjBKt8BXLPuGYdgLKBLJ1fMxbWMBg64B5dNSCbhDjycbEUmEPKoYFNQQC6kPBiFfSnoeMcRqb",
  "key4": "3EDGqwNsU71ikpQcBkudexcixqZo5CT8EDDbEAjbXz6qa48bWQKevimLyXsUBFeQoauxpYPhhBuwTL19YoTENYbV",
  "key5": "u38JGDJprrgjLbwM13r4AvMg2GauUVY8LyQwSRJRkxCtiCd4YG57xBAdjzMAkTLVXdgd4XVPdGBJt8hegMTBHxB",
  "key6": "61sYRbSscWTSPaSTbaZsdAcYXXRygUi19oCN7yFEaueEwPuRPHXYXVUsxuBWkXLExRKPKijVt482R7kyXSRYoouv",
  "key7": "EvR4pLwY8QwY7QquhzodAfLzGWi3T5qbBTiNfrsfdHimGnTryvc5VQ2s61aJLN5kZm4n7R756313Jq7YUK9KGQn",
  "key8": "st7SZKf8NRBi3wXSRAkmqdp578YH8rkPg8idBczdWZS8zPPrXMjJdqjH7vi6zdhiMWBeM3KPvMxJ4yU9ixkw75P",
  "key9": "3CexMduKX1vTVRjSKxmkRmhA8oNvCHuWYvt5VcTsym3a5887o7iERwYTMmrhHLEinDc24a2mqnV5nGyztSSGrrAj",
  "key10": "5UQ4Wf9DuxtGTQgTxd3V2F7BMiqq9KLai3jChfQf9C8otkFxBiNLxaenR7wCnmaieQezR2Ruskh2MQn8EcGdxW1P",
  "key11": "4yKsUTq3M6svhs259ynLBxew7EP8pv9cvkgL294K7EZ8ZC5hcBC1djda2Y5CRxmk461cHhwbeNLwRzwR48vRRMGh",
  "key12": "48AVSuo7upF9V2Gzaq91Zr2e4fvLJLvDpduf95nZTwSU59d7WdSTg4yYinUawHCBAivmEy83HveAtkzUcwpUR4r4",
  "key13": "4KQsMBFn23dq1hjnF8Au7MswQ3xpnBQEYrCPcEjxcKoDVd2atWVqNywG9MuoCkzJGajkqazTW89htPZ55ziaNdAY",
  "key14": "2p4HbrTiYstZGCxYrQN7cbYVZEqebj5WG4QvbdmRoGXMcWbJqw1ZhN3Q4ZoV5d8DrL1ybdgU8RHxD4YNR4v8HYDD",
  "key15": "3VeXe2B1odDaeWtroYSk1CerezYGbSYzRVo2MxNnD5yPpMtAsyVTsCPvQHatvAqJwWAXzdoaGKaeet4vPRGEUqbq",
  "key16": "5qjdjb15p21sJW1XopGDjj5F6CPbZeziQFRfTdLjhiZvRRs4399KYoQM3fV6AJo8Zi5Jt5FinoeRdyNPD282A8mx",
  "key17": "5wTXyF1UyKCk7Q2DL9SUBLH7jiGFNCjg4tYGAmZwNRfYju8XyuNnB4vEyvpmLdaRNdM1VGbMNDWBU1wdSGiAJS9z",
  "key18": "3B3M9ubgBnfRAy3RQ2cE9Zg7qXcG1DV9QGjvpdpizYGrpRWr3Ya3qj32CxEuQ4tifDCvGpnM8YsC385BdiHKjcyV",
  "key19": "4wCYLMkMkrm2a2DRpCt1z8PkiNBKmziU6FyoVK2D9NoAG2dhVQeeM8HHnJeKdTMRXX4pRBgY58KxUNxqwx6veGdF",
  "key20": "iNwKxxusXa3wEsd1CeAV5WFJCSRAorZYafLDmgBc3CmwwJWP4DemuECEBwMDoZMYpVBwVq8x8t9DxvrmEG3K7Ax",
  "key21": "zNFTC4Y5hHZHzeUeUbGkd1LgqWpii2ngAesYjbfeyZzqeKMvYowb5UZWMjC6KFvp2GnHxdhz53Yev5LtZZyAe9L",
  "key22": "4TZitwCEj87p4ui6knzcvGx7HGpZzUiAj73DhJf4x7tpMbmTJ2D44qecRePDAMAY3xZ9Ke4NPSQTQCzWLmw1UYJu",
  "key23": "5gutASzJXiG7AsKGUmeAV1JQCQyLeRNK5B9xzCoMPyfjVfuP1ZrHMq6yBB5r6QkdNhLgzNSujbwwYa2mP7SYorKX",
  "key24": "5BSfADm9hxLCjNLxtRemL9tw2zM7WiRyEcNcEaAQAEoC8CYyP5FpY4ni9puSQxwACmLX1vHZkE1P4C31oRjdctC5",
  "key25": "4wo2EQjahznnPe1G6UzGV9H58ZKCe1mjNBzyoLKWEu4esZsF75cfsCn2q8jydzAqwbhtSzcrPkRWt4mJhMC93XD7",
  "key26": "4hVzkKJH6evBT2jRpPRCtGKbGP1A1mqAWum85kw4UMQVrQmVPjyBKY7f36ibga4Az1WGNxNkuteZ4krGNfNLr6Fw",
  "key27": "4DkAkdqWoh8zRF6wxmmoUhHdmkaEjxzsmGGyLzZRtxX86L1RL7c9L1KTx7QZNenebZS9pscrwecVyXP3qnm5rAAK",
  "key28": "5b8jFBdxgeL5HU2cf1iqnxfP3b5WLkraSdeRasYXMWomuaSjMfAJbL7LNF2eRUvyiSsEqnco2s9f6zjykBgQ9YaA",
  "key29": "4NG1fr25wsV5m8eAgohLo2s4eHF6kckz8VTQuNdcqvXborQxYFCZx5Q1t7qj3p7m6mkzp8gFk69PDgshGnD5xs8i",
  "key30": "38ZnZMM75NGr7Rf9oHLJn12idyR2pDQQ6nso5bWBXdLBb6kg5RknEFGA3uaUND1XaKXS9A5jE4nsw9mjV53Tmucp",
  "key31": "3J27H3x1w5S3omU5yM9cwbPE277Qh2jEyUvopak9sGqNGi6EsyE3NbeDxxmGWMX2FC5vCbrTJuLKdNSX65oh5vCV"
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
