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
    "5V3brt6EyJ54uYZra8EATL28gfReVUpDUkciMdfC67ZnJTCKQ9U81KwyiVd8XJ7svMCvjzQr5PZSW8KtRRDLQZHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61V49nNEavxJPxQppbREoy2QoR1iVeH78JjbNvchghyNm9Rzo9mLcpdKLtLQ1ZTDcrMdXgdLkWHDfzFsnyyAf8zy",
  "key1": "n6DM8E5m8FbtyBLAVEVEayvvYHqW8xcmFwhZ1LrdHiNxSvy24GWN6ApY25van1v5vw6Cq7BDGqXvQwBj7TuJ9qT",
  "key2": "4iXGkGoQRHdLz87VEMaH95vjcfJj7EKMW8JGpuwdHheTsxRr5dpTkzsejuav3xHmzGdLMq4yhXnW28z4sctoi6Rg",
  "key3": "2HRpVrYWQXkHXSEqBsAAJXg8JNqSE3RKRXgwQKE1trdGaoCRbMWKXKdx8rCM6Nuwa7Z4hJ6C3VBP2nVbzkZ3st98",
  "key4": "2Y9JCJXrb9knNUu5V4Kx5aGQc8VknEXdXT1XLXycb3K8Y4yVkeUkD7k47VJ1mTHWY3Qq5afAa9PA8fam4abn9jhv",
  "key5": "49rm2dm4HxyGRYc7koNaCid86VA7AY7HXvrjLkK6i76m2pyyD1hwCm67qSfisLBBuyoSVCAcWmjXAAoAfWvZwV6w",
  "key6": "YHNh1QvjgEWiXPAQXiDzqg8gmRRrYzta5dRwpetTNAQfU5TekiWgFL6kB44ZvZoZ6RiMBLcG5JvGsN123nSxcTb",
  "key7": "q5Zgn1GtHdzL5uv2WXkscvjuEpBktHjN3dPEAMtXpsurUDZZAcKWrHjKRYkJABXpgHDMZju5ci9B2Rf5AEQZGsv",
  "key8": "3N69pteQbefAkiWusfari5MetKXRG6VWGapnEy9Ef5vZj1YNwdMdvfVNkRHbbLA2KmQVjKDViRRynkuMQo94tG4",
  "key9": "29XAjmxwPLRokcmEqWvxJknKqSwyJQvD3kU92uCbn3jAc6dR6KyAfVy5TrHwY9tJ17DBmx3v8U13MDZKZHpVvTsv",
  "key10": "4qeYr8LXwR2niJGaJXk4kaqPaNJKacz5AuNVASVkrwsZy1s73EZL4r21gPeDuEyN8jN7f4yS2tGPDZ2xEcYbeaog",
  "key11": "41fdXR5sMTxg59GeF7NDa5G6VWxxivAuBdzSAq9KZ6k6Jm4vDJDzaRx3WbFrzzPRT4BdRkCejatkQ8UFajDeWmQi",
  "key12": "3M11iGJy5PKpLsHqmC4ov1invz3bcimPDFjRcRfcjKM8PXBRBR4AeExDHLtqwDxFnrvbbxfZNKR47XzKVBv3WYUX",
  "key13": "3WLrnAmAw7vpMnKB9HTqkeeeLaer4cuqAyRZq3pi99Jgf2L5CBEGHX83iRtFg9iWJWjNg7VGD2gu6L6r11vED8ji",
  "key14": "3gCFKUyFsPhMbnJrgqYoekUTaAwfd8KqdxpSoWXMhBp69iG7pzV9AP3jaBhEh5ArvXuWzqTfkPqT7VyHjBxD2PA1",
  "key15": "4SKu6v8TkXxoPUdRARGHHmZfJreyPqaSxXdvokbRPLcpKAvFCrZ4vjmi67z7MVVr999cLD4PUi1KTFV2VZYaZWmM",
  "key16": "UFtWV6TbwbHN7V1NKYpkwpqJFv61WnDZLg6KRSWxNZtiHXGmxDdMYuYmFbipzrFL4RYixezbZqipxVnPkWQUhSb",
  "key17": "iwRB6vuSF7rJFgZQgzBNrLFXzokSme8CX8xXb7Uf5S5f4mZ1aipBRRxuckapdjMHF63rkREnzdSSmP1U7nTDGem",
  "key18": "5NaeHoNf7QXn43GNEZmxFY6yMg4Az13TxfXrBun4LbWSizFxLzzPiiTXe9jt1L6ehGtNXepToYKoEL2eSDj9BHmh",
  "key19": "4RpDbcqgk1VrxTuUhd5UU2uMQfikzKrUgQ23DY51MjXzoxJTwxP6zY6VPjMJ3Nh4cDbsWeFkcWaP1AmKYvqQfCkF",
  "key20": "3vWJfrecDNfvbpWCfVKB6ZBLbnpDKmfix5rgm5NFFz6U6H6yhFDQxWLLL4ovLAKqrGXvTk3CRCHHKcaTgXq71nrK",
  "key21": "21AVzWrxeP2eVRAWfnupKdGCDUocbr9i6e21drtL4dBHzZg7VYHfCpShMfnQEz1CC8PcfGqdA24dc8heCiGuyMr6",
  "key22": "5LbXFYvJUjvCcDts27muV57jeF9yidwJgfDJF5ov4XG23Ucmsbaez9cqFH8cH8DoLhLR8p5x5KEvRbwrNo9J73b4",
  "key23": "41NP5SGoyUYTmvufdhToLnTmQpB1fZrSzd1h7ocvy6bqZ3mpSeLEWoXDo98ecBbtrpzwF9L3q5ZjQ91Gptb4AkaU",
  "key24": "47tCqrY2Lzewfp1sjaJPknZpuyhEb6zvw8Evs4ANTAMLX8M6ty1fAh4dXJ9eQ6nj5kVEwwRUyX983PErANj46STS",
  "key25": "2z6kXdrVYbP5ufwdgXLH951oqeVPhEApgAK4ff1jJfE8ELAA8FFNFKb1UkVAg4Uhwg4XBxSP8Zo7WqBZREWfEYsw",
  "key26": "2qqndEHBrst7py1qeFjhBaZ3NCinLKLmu3FvLKPxs8XpWyyv3sW7SbWHi964DogPWiTQuPjace486Ar2EwRTEpHK",
  "key27": "51rdaSEYpqcDnVkvJAQS28KsKYXxg5xrfDJJ8uJTetcuiKpYYH2LMugpXgRsatbr6TyZ1DtVYo5z98EzoVF7zJ3c",
  "key28": "3842XKqYkWt8CYTLv366inUzG7Y2wmmFbbq9FGw9F16RtDwYCDyG7crdjsy3bW7kmofZHaJaY8j9wDdKptpQ2juo",
  "key29": "5wokdZxVSweWwR6do7j9wwJGaetsSqdW79r6ji7N5UUw6Xc5rAdKVvhPj7oUJTieuuaunf3bv3wyozy9nH2J3HC2",
  "key30": "217g2SEFmDWkA9W4fRxt2Uuh6rLnYVNFUTUYbBB6EbUxmrqieba1wntUys5GLQjUhJFXBhZtshPzgq7EJuw1zuDt"
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
