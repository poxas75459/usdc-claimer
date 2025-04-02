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
    "3eorHW6vJarEjH8Ha8tPMLR82xp2boU7uqM2E8QqZqSEmiD5jKrRpAv99XhqkEL2aASbsDFMqcEfhmTQCatqAQvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNxY7siWvnbjhnVH3LSWmHME3kBbDye7ktigRQmc1mu8M8R3QPRbXcu4Jhy3hRU2kFze5kzFWLPD262VDpGcfFc",
  "key1": "4KGyg8HmGXyB1kBAYkWDRKoTpAMHEgpPstFM8D8eLZnDmWX7GGkgFkpe7uQxdRpiqSuY4qGhApYarHk1jZQXhgAE",
  "key2": "2Pc1Tj7XjsHbFG5VxN9icGueUQP89QQTvVUh7UQZZ8JHFQjg8CfhcWeZZ9pnoRVgG3pws1BawjfK4sRyV6p8opHS",
  "key3": "5xAcYqHxwsv7aF2Bf8svvd2tp2bKaLPVxB6vUmTaUNBZMCfwi5rA2gi6x84LSnJfDEQVNrvpURFssyMkYCdPPS6j",
  "key4": "4W6yxMCb5tdWdRnt2rxvGVshdESYRxRVicrFm4kj7XDVrscCY3QRQbaYsYknvxzTtrx4JLJZ38GszbWjWj2zxjnS",
  "key5": "4yViz11gQP5CPT12qhcJ9JQFrDtrpYc64pJ6XwkAYSmzZE6M22mUR6fYRupBGLvYzDf58i4uh6BGMBUxiZKS7Kv",
  "key6": "Jmkbcg25EvmVdgH58kzHPJZ9yqKwKgnr4xSPAyTBzwKnjqa2QDqrEapsTJ7bKR3KucorggLAN56pXarCKxpu1ss",
  "key7": "MwxYBZsfuWrErFdWaEf7vLxW4BaSQaHD43QRytPCVmqMCpRBt5mead26zPkpKS7tjCT9HL94GiZS3UD2sdahZoJ",
  "key8": "4naEd2ocFd35ApFPqqQRUoSmWpum58a9VbcFYeqEdn4KxwtEXbnL1LQjZrdJETQFhVnbeq2Mtnuj9io97WM6XMYq",
  "key9": "4iGM9LoMchZ76TXufgwRHAZKyLUYnWKLevhrYmGjuDa5Gjt87d9fJy4Cu4k2Lnagf95S66nNp7hEsZXeDx7JTqza",
  "key10": "2ZBicYkVYMxMydgk48NkVbpzHZTJNuJNAqxDwRqUkUTGdpYnUcMb5SnZR39dUDPNbGsCJh5SUdbiPGWK13Fy9v1T",
  "key11": "5cotywvrtakCTwuEiVuTsrhMP5JsyZdw6HcKiYUjCGDSYerM16aCppzFcXLhKc95k3dZ63NytoCWuiEmSJTNiMPB",
  "key12": "4ayDNJy7ntMhBvNoRtkgicFstAH56mKLuAtpA11PTKoJtEyGWJ8ajhFv4kEMobvX1SMiQ8hLUVoSziNdsxyKKk4N",
  "key13": "YuRo5MczKkkURSJZ73HHsWBgTCGLeSwcmy7yc28BTijnbFGXD84pY7kiFkdABEFvB9ZpsjPbbXvXarz2no2fNun",
  "key14": "2G4izUXj55hrPgDQom1YJSEg5guaGojdarpCcuQ8q7EGALFRaj2UfbtiUB8ckU8zb6pKxX6QNq7KbmN4RkMjjAFG",
  "key15": "rE3of25mpmZeEhicauHJ4tq51nVvCgpPwCXjhE6MEbR3jP6xkQH8KU8eJFZ75fWXz1aoUe12bF9BKT5R5PeXhAB",
  "key16": "9csGGvCKEEGRjTsdVk8uTQ2JyxCGVNBeuASRxTV1Gn9MrYm33rAP6QwKJWVQR9srCPb3WGCiZKWRvt9g3wS6XeA",
  "key17": "3ej9NY5CssxYd8UD9ysYiQSPLZoNjKUxVwiWgH2bYDxpkwhXJvDfCH1o1pg8oeN6XqQWoPpmX69YK8CVPLpBbtnF",
  "key18": "3qv3Fw6ouHVpYHq18iq14AuDtzdEy99wYeMHcu2nkggKcJvoitAN7QZFbYtheJ4sK4bneKvAeLgFbnoU7q3hGcZQ",
  "key19": "2tSuEK8pQb4tMin3A6gcHHNRSYhvSeenh6L7L7HbuxSSnvxt8GtuyF4hVU894GCcFztYPcrkEnCT8yMsFMiZfcJX",
  "key20": "5ToZgb5yQgFYJN6WU1httZEKoGLsp59BeXfHKyMcPRbDPdBuotwF6ec2SrT2s1etQ3ScNDwrGLrStNeUyA5jbrPe",
  "key21": "2kqiymXCLQh9C6XWisYojRgohvyiVgTGFbU5izN4yPUKUB1PGmNeGPAPHE4Zxr5wKfhiR2UypN6wYKKoH8GbANCt",
  "key22": "hsTSm4ARMvHnyKwk8ziuRNo4d9C77bFyNwePw14293EkTxe2sWbKxpp98LDrUD86HVo29cgk9B4yVADNHmwv5ar",
  "key23": "4M8BP7JYTLp2d7R2fusa6whzWL5f17NLZjmx6eq8aiaQ1dQbhyKcbxknU4x6pqEXtQHFhwQtXjrtnHRAtpcd2MJs",
  "key24": "2BpBAQJi1JYesYR6hmstrPBetew4anG2RvXQWy8seNXSwLWwVAhUojarwMbajqTQQjfyNzvU7qoBDEtB9688ZRcV",
  "key25": "3YuPYWxbNtM5HLKBUJU28LBABmMV2M7GX5Dt6yatJr7D29JNa1dsBcmkpo7FsAgxGCAEqs8PsPxwtTLCeQmNWPxZ",
  "key26": "3n3178sE8G3mkHJAFXZvdZJbdc8tCffPXaEKS3G9hvsKd5Rt7tAsRso8kkBV1gphLYsLtoKXqRPXr3nqe5bbd1oo",
  "key27": "2krD6nf6j1Vbo9LuwsbtXVodAJP2Lnwmn3yjahB7wt7Up6eFptbgtqR97pnLXARPDLY1oeknXuG5zgnN1TmARedQ",
  "key28": "QwXqCKD9eSpNm3rf7E8px6vpf4kPUV11455vSRJkSLWZhbx4TusMj1PNNLZodWepxq89qPJJAHxzZqyUn7oDZfD",
  "key29": "WuAFy4JwM2ZvHXKrUNQS2iXCBPBXTCPhtrkRDHHgepAmehUV63Fz7AXCrf6L8tYw688Doh9Sgbutn69GxSE6yxq",
  "key30": "b63zj5FLjpe4yLyzbvCSLq3nfWTTrQtuteYS6C4QuJcFfAxJpZVgw9R4acdJqNhAqJj5LSfkJ6rxKB9YFKnw5sw",
  "key31": "2FHNFXkq9eHBy6vzryNGZ3bVx4sAznsRKNsUjKQwN7etqUjCZk8rixPFTLFEgLxMnpgWK7JL6FQ9p3N827GpMjnn"
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
