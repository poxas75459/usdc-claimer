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
    "24dwaBp3wiVp4QPZ2Qrjbd1yNZhK3AmJubBqcyEQ6ap97DM3gT3Aa21rEnbHt8GjbAY1tayxSBsG5DShdFEix9pV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tiuc4fq31fqtkJCFx9ypF9pvwnars8Gqg1YAJJ5t8SPx9SY3vFpANTWw2npEv3dzKwmyjJiMZ1xio5PJREPzypG",
  "key1": "42tUV4fpmAwy16SZDFNRUPNuXrAMP5TrBmRk5EcEBtFPzd4YE8me4NyQi4pqWqoiFeLucceXZ2BqxwqiNreDbWvu",
  "key2": "2oqwXzxGfbNKGcDSKv8G4FU5KZSB6TtDNRw4z95uh1uZ7bmvg4XWoXBXGVbR3gdHSqgB43k1SCvHt4sN1vSPWNGc",
  "key3": "4Qk9hDTFHPKuNvM2zjdWMRZg39c3ZLJepR9EyXhKXAumovodC32MeVAfFNyuGofaYQM96GXXPUWk9yg5JTujNrZs",
  "key4": "68VqzhMkLKr3qYVuKgdBPzPBPFRciBiStvS3NfaP58sADAZW1ihZkwgZkdFEnhA1PoGAQ9KZmY7eLhsqhDzYTRy",
  "key5": "24zYCib2GUYZAVpkGUYT8UF6MweocCQhD4v6Rv4ZtJSbHDUB5sabzfa6wGABnx8WoUAAsRM7HVTvZrFwiBJ88AjC",
  "key6": "66TniGvFS1QLguA8SMaE58gfcau4PJ7k3iMLn2cfjMHtRNieJKwZhH9Qm33k3KfQU2QCxovW5ctqo6oNZeW6EwMq",
  "key7": "fp34uRpwDtFyAhmz7YGUNzyZ6vrYQBYaQT2ZGWYakscfnMPLWU7JX4Te26fKegWn8KQR71pZsx4mvKdX6C8tGXM",
  "key8": "xtGYqFzg3XuLqS3bAh8Ti3XRvqS6vT87xRiFqiKusCxSqfBcsqrKMmc6UZQHmtThV9Mc5soF1bNaRGKDV5hohtM",
  "key9": "5hR6txdDnFNKczTxZJN9CSNMwdk6X7r1KBW77NzoNuzS16XRjfAqLV2h22pNeYQfqGCwFiDJzoVCKB8DjBcYeNLK",
  "key10": "BzgeL61C7oPJrMc9hHjTucFoViSopcX2uAx5PMZCGczU3DbAcVF7qChFjC61cciTSqEbHyLpoehnR5Y9Lh68iHz",
  "key11": "CGoJvcHXW94fTjhopYisAeqxUhYNRvjZpL9TjP8Ev75oSzGsNHF4cj77Go2vcqyGVH3aH7ezUpTmpChQzYqG9eC",
  "key12": "3rQaJq1kS22cubsRJ429VmoKam5eUiKvuj8knndbRXyZKfkNHjPL4ZWQmYbRAEhG4WMPeKsov9Hpo2wCQfhQpR1q",
  "key13": "4xo89iK54tQLN6uJ8NqBKy1Sag9k4TaHHXQUsdRiCxsirMtVARKqD51a64nJEsU11uhq58FnHHkhR6yE2uWAj8f7",
  "key14": "44a8SyVHeEsNmUZqEzxokfcuzeEnmsRhRYFDN1cq2a65TY6egcCp2gnXUgFfMocxndBYAeyvEJSD13cCFTTz4ExR",
  "key15": "4RUFLvGWkBdJQNzZtVNnF74iicVsoQ6h6kvsUFXSsbKKCF8AsfhuLPaeDcswPg6XiuqZH6y8DZR7Xwu6E1iuh4r1",
  "key16": "5Y1UiSFxB6W8Lvydc2uDRs2uhegejYTVzLRFS41PZrBPxuBzj5cYr3X4V3Jh2g4bPCtBzdovdXswQxf3HPQEqozN",
  "key17": "3tV59Nk8CAkicjWVkeQhtjNfnBDvom95w5L6PpnCHZfujyRWG64GP9zSA7hZFEratuaKUFrekgfqrEhsN7duVimg",
  "key18": "566EgHTpkPZidZK22F8kYtDNQSpLbvbGEEao6AsDPSd3aNQiSR3MRf8Y2YhEHTZqRXZcLoUTM45qCW7B7nPDT2PZ",
  "key19": "2FLZVYJhp7e7acqHnYGF396WX2WAX6VYMhhrnZzUcdSJfdUoqp93ejVGBhHZ7Htch8xSoo38tbbSKB5CAADcdr2G",
  "key20": "2mmMAtELWAWttMs2ZbVcDd7UbVrks7w8jqnaaD8rrmAWCgfVeogzk16Htc7LkodGvhnoVgWtaZTMs3zHztZwJzqT",
  "key21": "ncCuMZRqPKWTHGCAoyHYbGQwFiBfHNbCncFWG9pk6LxuVBhHonqW8L3L9Yny2LtGt7jkyYy3RXsR2DHSVhZdzpj",
  "key22": "234LvyF1jgo7LZQxpUFbqWstpeYsuV44VJs5wqMJ9ZCmDBmxFthSj2RAYczLHo9drsgLoSW2yjje31KWdN8wVvGU",
  "key23": "2t5ca8evPuCW6Fi1ixwzUwDouvTFo8PVCmKiHpjD8VeAkiYNrZrL9ArkK5dHu6CgymDSPPB1jtyTARvJ86HkbNCS",
  "key24": "YyS355DSNLUwb93k15vBKc6aKgq25o7do7hbdCVHAByRcVvee3rhgd8M5HC6JgTifrNdjUuQH3mBSG7eh6JMZVP",
  "key25": "5scU6x76UDiKW11wGUSCRer6JFUcxYuRRDDKbo5F9eeMPS2jiAisMG6F1ENqbpw172SWttYXU25wdLycrep73K2D",
  "key26": "e4em6HHrWp75oAeCX5FXMQgGvJEDPdQvkZ6MCyWSHnE8xQ3UabkaoCFtwQCbs82e7r1Feif45xaoeuj1Q6oiDwk",
  "key27": "5twtxXeofkwAqbMBJA9Q9NC4Gf78EC8ehgzNaTW9EieNaHV9MvokSDJzTDDTXWTJvzB5kGV7fxWRrPNkP2gYMTDt",
  "key28": "4YM7VD7pnScus16nFZFDao1FeTAULRUPp5ihWbQKbi3kc7PJD8J6ah3FLpicxAZaLQNmV46DWDzGaHwTYhARpGzc",
  "key29": "5iFkcoqwpz3Lu4p2w88z33tJ4ZxjXAXRVjS7EXeyiSM8BJgrboWEg3BLwVsY9K5Czgp48UXUhf3xPUwJXtYarW6o",
  "key30": "3n6FUMgWtJAJPE7uxAjXy9B8kF8A2ABAZ1eJh45Wx8KjyXUGcegYYLf3NEYGunEUqoUwwtvVqpUZUQG4UWQxFjft",
  "key31": "5XiwKyDfpusjH6PEZbz8AhfKrkxvaCWPMtwkmqJTzHA41njbXftnEkE3Sr67FmQHZgxYpyMpFPW4cPfC2HWMw4hi",
  "key32": "51bPCd3n4YuiCgFV7TJCkdsHhtV7qPf4oo8AfHtXfGfuA4FDoaG74Gn166HBRwwu4YzL1ctnwT7TkwBYQQdkca32",
  "key33": "64QR3cXBRQwdF5yCiTJFhfRGW3xqKtJXxy3KVP38WDWHEnFeR78D2pwitLM42Ydm7V9pPWrkAwDBHmjTgAwDdkaq",
  "key34": "2TYm3KkiQ1fvMbZHhEnKZ1TJ2hwj6PHec3gJ7rCUqae7FC9PvzfjmrumZZDD4KqJu5vuT4n7ARXnTXZLy7soxEfX"
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
