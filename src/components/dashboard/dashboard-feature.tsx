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
    "3ojvHuEUBoYgFAXBgiJCWaVmiFZYdFCh1wCnRTVJZHvSv6TYgtn4K55Vs9b1WRKgZPCby5hFuBZbMpkzPaLw75U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6swpyufm4PdAdbNHBkJsfnHR2enMtoU1YVXPGyYF3aviunNQVkGQQLtNoPzBxprWRiotgMWyQpJAgetjWUB4eE",
  "key1": "3MmkErwuMPgdKA1Hi8HcR3ZZWYKMZXw6z2bzAJtTZubyk8gUpQq86sLvoTR3sgsgajVPQTTFK8QUprKYawpQSWW9",
  "key2": "TAfMNnZUdeBekCdmvWCNGsNX2KSDs3EVM9vQ74nPPwsyeSuhzEgf3PUCc3VdQVgGBE2zhuCSPNGYZj9MtNARTR3",
  "key3": "43hRPWu525tbWSKGvjRVPpzkpmJhgN3fnQJn6BAdZi9oVnZEnM11sT6fYcf1FWvD4gj7xLNE2tHU1shAZVEo8Cvb",
  "key4": "oLBoXWfvrZv2oT6JKShUbKLrFwgjTSv4Ux9KMvisZY4W951QpMGagXeKMHSZNAeMrEv6q22ZnRbi7hZqnmvxV8h",
  "key5": "434SXMBuJga3yBe9WPZ6MXLYKbKRJ7EwPDppEdVwfLwTKqFL8UtbwELat6CqDhVyVvMSXCR7oW5rHsEE9CLyppgu",
  "key6": "4jfQms1nLTtKuRT6Q17ZGkrbgndgfK9ZrCiY6XQiyiyiaBNz3Luz8uoFzkb1uz4CQ5pLMyag5FMLrdUB5KmuRrCQ",
  "key7": "4eevCR56nLP89qLtY21g2RpozsMq9FgJeFqyWfnQGX1M4vg3VBHSAc3HHQMGJ97aYuCuWba38CehH1iFYMvyVmxd",
  "key8": "XMYyJWXrXcAYuKr1gwUWjkYq2VGfSwaK1d6i7oCw5a5gMtz1oT7BCd1RPVRSHGNymZ5C4jZ4auq5gq4NrYabCDb",
  "key9": "vvAzXjV4TK2tN8JfVvxV1JAyuvaAhafHVcSu8qZjENwpdAsTYPTNZo6DJehAEqdskgd8DsvXS3vdt3QSMeJGNsb",
  "key10": "54ZMuCTZDpW3Ah9w2xVZVc5MRijYkE6LG3pEnR99syaNEdXGa1AdSuMhZzQdLY8dhYYDLWkERMVFxnhns7X26eKR",
  "key11": "5ukB9CGzqtP8LFZszbQfqU61Rrr6sx4cdyBzqa61NbhJN8dQ122vPwgnXT3pzQmkVnBTGPcAwUZUgGbvtu9RokSK",
  "key12": "5qUVgQ8wSuntkriVDsdVNGxe6r4Z76SgWMAAQJym6aSf1K4bb6vseun1PvAjLmM3LhExgQsnjmuvRdua4ETZZskB",
  "key13": "66SoW3napnHqBnfSkasvD4HuJQ5mCyp2jocoiYdKJnZN4YsKo4wfGVNYf4GgFjw8qasBCdjE755gtRUQtebdbjds",
  "key14": "bBNKHZZLRa2xVyuSjPhhsdpZLDEsQNwrY6mXq5aET2THfkGiGWhHLTzhyZ3EZYtQaPm2bX2Vfk5BqY3FfDh8U39",
  "key15": "3REcQqwPTxwSdJ5TT89GmEHe6ac1HSCpQqJaYqneh2x8zj2gb86hzCaDBaAwisyEE5w3oC8hEovrLVW3AYv9tN54",
  "key16": "5HPbucLr7LJZvDDFq9ajgCn9FjupUgKKBCY5G4bUK2kVKoB8PaBrHzCtrjkQNhhMGBR5E6Lf138AYEW9zh7xittu",
  "key17": "3XtGVoGryDhqVB2V3YixdX1k4QPE6D3CiXfi6Sq6Dd2hsG3h1KnKFpjp1iV3sZqfdeKhzfkMW1aGRto4Meyh18i4",
  "key18": "4wk9EzqMvNvUDuMW2W25wdRjX4XF1Nirmw97XLhkaLWAohSULh9sfU4rz2MHTj44ttzT2uCxXAkDfSV1Qdxi3U6M",
  "key19": "4uUS75ZZZTntwEN38aFAd8Gf7qzHtv1CM6wXUhLw8D4wM7jY8GARvV3ozpu8PWZZMAHRihNKhzZ3uXCmchjyCMe2",
  "key20": "3zdqrG1ofHzdUi7AjGCZeBfnHAUHqdJdAN3vqc5gDhV5nGBmYZRPoco8SnPi1eRa3AdUGVrpFU5af6hwDhiag9s5",
  "key21": "5oCd1ashXiY3TJvKhfTgiy6VLs8WDxKRix7U3ktR2VmZRFP6upZLEQ1ucXM2JH2PEfekUNKkiM9yzfY5XTQdsZgc",
  "key22": "5MnL78hCVgWC9DGeczY5SFh69DRma3tgC9BwpvUXYNCiKfrRskFSS2uhcKBKQncAtHempAyGwF8UoPTYyNmRcPCf",
  "key23": "2QoffHrKPGmoLqZay2R78QiBGkLFj45ZVHo6PsghQ4e6JvuyzEq4KHSqZ4tmuNVAMkME66GKPyUT27Zhw1hxcPNR",
  "key24": "39Ppy1n6xRSMvd8JCKyDAaxkvUALtmD6qnp5wDGQN1ix3ZwNyeNoQtJ58tDSWKZtUjp4CoWEETuYPfgsWrQehHCr",
  "key25": "4ADubaQHDRLsCa5rcKWDaA2VsPnZSq2PErH7u3EiiCAniuGFmCtrtCepiqit8yGZJnKHc8NMaYrLAmEYxg3ua67e",
  "key26": "21F1KipP3m4BQVaLWjWZEuqiZr3Pfie6F7TGfEeGbr9v756QfeFe9kbaAHT4mjZNsn1MzAmRXFyG1D2PuyyPYhoV",
  "key27": "67bV2pvhdhQPqakMmATg5E87ZRRYvHkioUak3JGLDRu8AVkeGRBwrzHzd6AxewCKsjcqXgG6jjHFFdhcWMhgZZ7y",
  "key28": "2t6zsY47Yt3dRajzEUBNXQn7M6v9fYLj4WPwjQuSVicmfBTMdbiYVR66MpwaaLxJLEhJB9eMpfo4MVKk6sMPPd7g"
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
