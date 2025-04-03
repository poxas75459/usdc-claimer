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
    "RN8Qh9mH7Q2dbg6eHHKG1nZTNut72SSqiRgGrJTTdcvYQC4WQD5qjiWW7gd3AhfzTqm9wmgbq9d2trsKQPu3KPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HpJrMhB3kSzJgREiCu6Dcv97Dm1bR7zQjZ334DrCD4fsdLgtHfbEWbJkTGWFj8EuEzTv8LbvJTQ4HbNaTir8733",
  "key1": "4ozErzrTJPviGkNM7jNE1m8vJLfh1trZxbsHaLwNqFrY6ofkU5JWLz8qKZR5xncfA7MnfcPvvhSDMbn4bb4FLqLV",
  "key2": "2ioESpZUcidhgdCxBK4bMehpzLezpVvB5ffJyAzoszaFedoqCZsZQ3sAjXVaPoiuKbqRPYwL47sqsn8xijyxekTg",
  "key3": "2JHaN7PRdEDE1AjkVRX9uLEm6xS2uFafaXcvFuc9jHDTrVk34JtPQucA4v4MbUGcbnfhtT6RfEfZLjghriRCxgAz",
  "key4": "3NXSUup93owT22m58Xyff3RhF8uiGpr1U8DXeYtPbjnEhsK9WtEkd5ybW84TNVxwFfP7tfQ4mjtGt4YYZoEC8Ui7",
  "key5": "dLBZFwpt1tS3DQXmXXH5RudvKJGP7w82T1PKrqsCfghL6ztPHdWNmb97w8wF7PwNSmWzD7GUhey4LAq29tnXpGs",
  "key6": "53gJ4YPH6xcCmJyjMkRSSZWCRrVMM9tn9igWxzVi84QtrqihWULJ23XvLVQgBtTABw4BFK4roi1Ajh675ts5BuNp",
  "key7": "Siea6c2wGwTeh2siLrzgNuoKWeakZEfTw7c5d4Ezbo9JMrUBmkj9pVetc5dcGDCL1coXLwsuA3BSQinrKyaF7FA",
  "key8": "5WJWYLM1sTpB38t8NdQs4gs5LnUgaPwBXcPMGCrWbmGqcYyo244WbwL5gCtnC4N7bdNTiC5xcHpgvuHzGvUgmcbb",
  "key9": "2ys8DCRtkZvM7YMfNZXevSWeB1wjHRZTGsfdr4GQg2ALmqeMmKVy3SwRjwmn9cjYicCLuKQGJ8htUfbjs9FeaSY1",
  "key10": "4EXMxVBDbEsn12SYkYgnN95QQpmkZBhEnVsZdG3hk2i97UVXt5sbJgo3gsmGckHfC7AYPhpSd5cW3kZrte4N1xSk",
  "key11": "61Tfg5kJdQnXaUY5qou3NvwTC87ySZpyWGwHPT4opKJ3CUMo1tPexYoq86g31R9XnTVdxYPx7KxePFtDH3wMXYFU",
  "key12": "2z3qZjhePpk5BjEREx6vpki9rHdPVeXZCt2LoTLQMH8BE1dk88L3xj3jeNM1SEaYC9PBuWdVQXKJ7p6qpcVJs1UK",
  "key13": "5wA6j3iEdiwRbNvftvyVaYHMmcQSZK6YGHnAaZc3zzH3meJL9saJXuBvwEwNSw8FyPfUCv5nVKTmPF4rS5mMWci4",
  "key14": "4gTcu18yvtiiUNy85RiamqGkoxpbPNFBuYqdZGKZrq1Sf7QgJfwi6fNZLvcJ33pJyGrcRXeuf4gMMKCHz85PvnLE",
  "key15": "2XGyic1r64zh1aJ7eN75cGiUm1D1a1DHE65CXmpnyyLL71S5DG7CFdLGcY6z1MiyCnLr8opfKRRu8XBXQ4yAdYaB",
  "key16": "57RGacumkirSZTboJdrQJ9WZ3nv47NTd7jWhZbsj61mFzZSe6H8fNwvTtvEjiM81q1vM8VTv6axURdw3jYGgMJgX",
  "key17": "3WyDP9dzFuuFZoyrkp72HRnBMoqS9BJvYhStgHqqur2Yf2b3cKb9XQvLschbQX8ZJzpSBQoZyKkpBrwhSDAg6p85",
  "key18": "3Z5DWEbMaP8ZW9WXtW6CzUGuegffG8VEkWJ5tDhYxnnSfcPkDLX4rFY5iVFuC6YAACwXn67vWgkCSpeTULAVbgrc",
  "key19": "1eS1MZmvMai8kNCVKTVyZ8ULZGSfoikJSTXiEwV2BkX22X1z9MYhCZRgtHdLLFeb5wfw5sLyriVCzDDMwTTKFYz",
  "key20": "2gtNbzuBYN9m9sERfYjqM4m3Yfu7dCTAyYkEMNM7gvefqfPaW6HzVWKPLBGPUJkPojzbRk2iVj6EvR1G4KfRifMo",
  "key21": "3UTUQL6MiPtnHaw9pXWUAi6H3YFVRoktvZCD7Ep3jL7Hy7aWRA15iGYtwJC4sy3ayQcZrwmJnabeSLX5JBd1cJhs",
  "key22": "4ZbvPgdvZ6VQSS8gREE1FVod6mm6bwuJ5R7HZxwjuBJUcbJ3HaFECFFXCoqBx23raPgRbEyBJx5xcj6Lj5pEkt8b",
  "key23": "2LEiKUayQwRFCKvpZHyKPdUp1aaTT2Kba7irGtpQFw9KSmD2nH1UFgeJVTXTyVQLQb2191HtFDvskyWMG2hyCAjW",
  "key24": "PRSJ8W1r6sWkPCxgCppgyBovbMLVmaEkKaoPEZZZpVRMY98KTmFZvnTVFNnzMYZUUFMN5mtbVxdtfymz9pmTpWx",
  "key25": "Wnwaxk8hty2PKTHWK99N7cudjkH5KZNt5wgkJj5Nri4z7GgYYV3oudphapifnR6NyqmMXCur4crSjZ8jUhME15v",
  "key26": "5hCkRdoVjXGBf5axst3dZNaUiTQB8F5srGXqNSE7nv48kAUM53DyGXFjpwLnookhjez2pbLM3e6GBiDP6BYaQsd1",
  "key27": "z7G5Av9d9GGMHAo9erPCRzhMo2bEXksgZx2Zab1wCFaLnAgfkiYfpchB7DVZV1La5ercGyJfsK5o97LrRJWN64p",
  "key28": "35nTgPXEgSKA5DmUsYsuU63uBCQkzD76R3RQ3b3Pvem6WytF2Q7WLppnEMYdSamcXLJ5jm1Y5w4bunBo9Sc9L57E",
  "key29": "2rvDpXgAjyrnoHAKFryapZqCrNaXmFxanck4Fipp2mUePVNCnnbsqY9YquhUNzN7x9jEFUMLaT1WK9mKRMdq5Quu",
  "key30": "ndfVwSHDfy9vMYDHaC3pbBpoDziHWQTWGbeXL129G5TBfQBRJC3tWm8YcpTZyhAQW8xFoBS86hfq62fAiveXGng",
  "key31": "EganEVDsu6aGHGC1uFTfxBQoW2KtzYkrYRozXksULqsnUGWJ51GgATw8nkDeH5JpQi2bMggxA9sp6bmvP3EbhHb",
  "key32": "873KhLF9rHYyrV5LRRWtvNsRRsNnqLHLgyWXh8eG329ydAHh8WGEVypaqGJ5m72L6uN42w3WzqoYWXM6h8KaKVm",
  "key33": "2QDKdqcXp2SMdKnwMw5udrcWohQb3274EGQVgjjnRDp3oeDE7QJNoYWTboKAxzHdPNGsuPL5f5v82TBF9PW4QZ6C",
  "key34": "5pZT7M4XzoT6NDVk2fcjSjZkSg9r5p1z2TCvMHwEUqY2QdqVEcwbauEqFZYLMqZPVhEFcU5v1ei4wcp7RfUgMQKz",
  "key35": "3QYFMFgbP31vbkUXZZuVGV6peykpF8pXznfQWE5i3FLTvVBMxNu6k1wSCLwREGQzfnHSJtshzW5HdhSiLhJn87es",
  "key36": "5rbC51SY6svZD1NWdxCzFXtghB4nV6mL2Ee4XBM8gAvqCQa5N767S6r1MdoQNXs1hkb515poqCwQK4nnQKcv89bs",
  "key37": "MFZ6tTty3gtjJsQtpxCTTpW1hTewGWEjZdCF6r8a5WxMVBmmvMeTcLTmpk8EikLvsWPSKMQQmvi3bPZGf9Xk1md",
  "key38": "HNHTuL8MDmWLagbce12FqU1yXyB6Z848V27fEmKssKpMqh5yHeEAeFoUt1Bi89zMiXShZhwrfNLCGh8zgg4bLgn"
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
