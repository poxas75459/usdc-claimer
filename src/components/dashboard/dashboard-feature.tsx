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
    "3QrxGZCzVnhwDBuffLuCWJTNweK3XTuU5w4KoGKWpdJr4wnW97vEmgASPBGFhhbPUR7Z7ShAFJgx4V9NMLKFhBGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXzpf26AxDxJf5SPhTbmdVANzeJKPrasr3fgmnA3djbgFoSHG7Szwe8V7nkqruDJ31ycrdW7yiN5GtoRTYQKPxR",
  "key1": "5kBnJv8GYV5SkKPrsDx6GS2MfjuxncL7u6LWzNMrqbD421YQR9KqrtmKW5mDS6rHcFCdbXJ9NMiowaogYvhKH7ZL",
  "key2": "4m6Mb44ejir2xooGoLxzhEukQdq9BHkqeNc6r3Umzvoxx3zdvtuSzCV6ZLuYjDZAPuQvEdCwVemxbYo7Bkj6nzEY",
  "key3": "5ZfKGQkKJo7aKeU2TAFbis4MtmvQfvKRvwBFQiwqyL8s7E1trbBJoHuxh8CLix3eLKH2DxGG1ekry33yej3uENgW",
  "key4": "2Xb7E2nwyCAuXCXfR76EFdtYx2LhtfCE2Yf889Y3BcwikZnXmYfrvsXm863C5nhUGoQDauNvcbi6Z3hW42wNxoTR",
  "key5": "4B23xQ7KW8NbG9TuEaQE9kSsQyZng7dvouYwrLUzueN6dKxSXtPwfMsRWKU1hyNMMa9RraSYNJ9nFit6kchxigUg",
  "key6": "4dLoUx6LoXemyyyXoa6ShrqGGbLvvZAQrhtwc1SmtNfAAtL7E7CqS1hpijdt9JwySK5fX9x3R1985wPSxfDJtUF6",
  "key7": "KsugyubaretMtrqTeHiqcEdJjZDVoehnjHpWPegnSpUhW1nJvWW2M6jNdqw7yb6PT1oqXgRCH2mDYTaHy8NHTzE",
  "key8": "3EUnoHm6eXLu3qVaPw6so3qJ8ej4GLizET2Edq44Kqvsj1nYsErbrNWJ5MdR2ehqhYanfur8GmRy99AFf1exHtu6",
  "key9": "2PdJVHXxJA9mLHeJD6LBFQUtt9a9apKLWxjv163zB3SmXZQN3FJMN5dswkFTsk6Z3EpUEKBYSGKcZ9eftJthAdWK",
  "key10": "41jyCTMj5m6pbuERXZD21bCugP6jg9SfNRriM6vzxdMDEXT81uKHbNhgwL7FDC44EaoXY37anD1cC7Wa61CeGNiL",
  "key11": "HfsRPFcKv2HzzxUhcdUqizZGd9ngSAYFwVX22jwHmcBw3F6F8Q8g17Urxr14wfP3yGsG2ZZp58CFMtVoHAeidoT",
  "key12": "61dTz5UyDrAdBTQvWCbKCA88HUF4yVrtMsqK58PkSrAcon6tm1bjzDiTyMk9DYeNwNLaMWJrpzXRCtStzjkoGhnH",
  "key13": "58zrSSRYTRouZxTf5pC2k3SQ8EXHPjQ6XGPvVgpiQpSJtcVpmkemE2KFBNvB17EvsqDwV1eK3HcFaRwtPFWpnfyi",
  "key14": "4v3LHudTn3iG9p25m5fKiVDSGRi5FC6Q8onhKVthk4NLL3DDjuLMXcCJ9wWFGxkWtv83pwttsp5kQhSHH7AVXuGH",
  "key15": "4HqM81wrFYz8v6mW9XPZ7XonAPC5K3EmZXXMv7UdXB9E9kNAo9xYFVrodFzTDP5Ts79b1UYiqydc7AHmEuwos79o",
  "key16": "4ubrEYRqQpBo2vYP7L5CNXFHSTevG86qVEWLV7C5p9JhGxnByaWbcbZJEusKqxi2WB4DW12Sh4XR1zhKgwh3yncU",
  "key17": "3ybKrF6enSUMvDBLcUvqd4uw7vaxbtn1WGfevYN1EvEdkqFEk3QjPsvhw2kpVmZ4t3GCeNqL2NXVGLdTZRufGqUy",
  "key18": "21VPJS9iedouWZ1rqFbGFFyg7w98UkcMDLUJazUMwCqJZzEFfFiyshA5fmY7ShyeRP5sojy9WmTEsYSwmb3GPPfo",
  "key19": "4T1xqNGXqANczanhN1b1vKtUsMyaafXznGoFcsSxxGEC4zJbAYjJfGZ5CCjFvF3iX1Q6TbvFuiCrZJLQQQCqL6a7",
  "key20": "2tJk4rACKagc13hu9nfuqgxcTe1zoctzxEn2cuQvdP78PeXE79g1mrKbw6nH5sQtiYxP2CVRFEF646ih3TsahcFs",
  "key21": "3jRJJ6qBWomL3qTKTVuMEV3wjosy793NnY2665XX3aUQKkw9wkd8Jypz53HhVcfWB1bboANYCFDvi6MxzvZCaCzu",
  "key22": "2HEWd5mKfkGLF8kbrxbSVouJL8LBZGUFG3xHR86njmxwz2smvAqzzdwEPh63mrZbDtN9tPE5C2oA1kUoSxWaFmnM",
  "key23": "2NfjkVWjPoAiRe1oawRx9M4ySMeuwPGAw4t1UdKKFix5tEvR2SYbToKcukg2XciuuwzfM4qGTJk6cmHkvZJc9Rwy",
  "key24": "4FeFo4PjFAHdPmgEeHiiJhhPxy2JuuH3H9HECiHaAzWkYosCYFjb1MEr7S5EyjYrpsJ9mBGuZ9Hx7noxzPMrHXhH",
  "key25": "SP4WVg5exwAbPWadprZPrep3Ke85LB4mMp9LPLrDVboXNaysA34bN26b4Zuvv2cEk6TarZ9kv2eGTtez6DWhBNM",
  "key26": "5T6n2Hpx7tsrTp7WhS1BNYzrMtf5xccARsKrkLxCkUKok32ZQBmPpy4vsj5vQrqSsnQwcvV4HE7u13ozJXt2a9xu"
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
