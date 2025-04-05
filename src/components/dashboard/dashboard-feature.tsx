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
    "ZpQbYqy85Q8hXn8LYLmALErfiKHjRBPy2jEkSKrU7pUHa8a2XRBK64AtELYbVJsJ7xnAq4FdX1XkSvtT95BLYJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3e7Fb6A7cxVBzJt9vzbyacbwx3xmqNh7UdnsN1sU316kPcJQSBySBYWTCbYXR8C4tKHfzY3kenX9grkmpAynD3",
  "key1": "2dQ7pat2v6MMN2SQettvVSPGgohY4zowXJ9FZzwynkoyerBMN43X8fzKbJ2sQPfqRJeWVuXuWhCfNe85dbTXZmca",
  "key2": "53vUA6ArxBFatJY6cBVRzG5oPf2fmSGFHGHwWAiNU4ie5mHEfTn6ctkFHbEii3kURsbKNNjjCG5yQxXjffW5yxDa",
  "key3": "3J1HbLJjyGCcpocMgW4hspMMGM8uyfLaxRsiBWcT9C98nwitnRnXj8Qi8vuLnWdUEezHCNGoZ4fMbQiomGNbooxN",
  "key4": "3dGd4AekBvU7EE6HmR6N9mDjBWwroEcwqtT8dy7v61vDqt3vCDa27ntpi2gx3MVstC52JCNtfbHpzXurYHASSHRu",
  "key5": "3GrvLuZEY3AFGN1yrNkFo9tQukaTtXuYDDgsg2B3a94kLD22ZhxGPGjUynSCGBXPGgFqs3g4mkdYbE34rGro4hYw",
  "key6": "4WHt18WpFJjpq2JTLezSMTkr7Z8DJ2w13QfaaVz9iU5g4Zb2ffcmSruHhjg3riKZUXGpr7fR4b2ktfgcunwz1Y5c",
  "key7": "3MX7UMy4Uu1A9Dhm8A4hn2pHuVP1YDpexfg4EewegvfD7MtdjLGyxTJaAZHjskSYkGnHupZaJKbSNHVcjmGjtJd9",
  "key8": "2y68tS85EVcy5pFMzz1pZFi9Rfi7zH6sp8od7mfrbfwHNXk6n4LTaHSLxkkFBX58eBEJTTBC9arGUSVXi596K1K9",
  "key9": "3ZcYhayc6V9UiHo1KqfVisGEiv9kiAhHhAhkGWDw19cfNvPcVy1TApnBnyRtUSKMnDtDf7uZq4mKBnajQHzk4p9",
  "key10": "2SkUGaHvbYxdnurJfrSZ96VfwrvyRHcdueguFyvVhceUEymqx6HMy9TK59zdcWn8S1Z7Z4L1FbeMHcXamvA7z25p",
  "key11": "2NbQQV94txn4KFDDSM5jvRettnfp5XgdrtRkq8FTEmK6iHYvzdMqyB8V8H6xjYMTJskZS9adQyLphHNA8nx6MLx4",
  "key12": "4BWSPMHGTtMzPN88AFtRzJ4pMpMTTGn5G59viCkojEZR9yfnfAyqVi82AEuAzwd9pbGWoDnTUNg9WEgMmedpJ8Ks",
  "key13": "4CJ4v8mZV8qa2QuFYaqKqvbHxnU3zu9yeJ8ARVhTXFTpnKUkHQZX8EPSw5HmdMB413RmGmgdYMbf2g1Sj9cWj42v",
  "key14": "5Ywxm3CTx1MxXcuuentNorki7zXypspvmybpiiqDcxDW7yLhNXgEerFSRdGwLpeRRNa8nNgCP8zS19VbkwSMHgsL",
  "key15": "5gfbEdDaUzjS3GoTFykfoYu5Rz9QRmfZZcEAj2d6pSn1BbzFRBbFKJ4QVzBcNRhRqzHV3VjwKB3ZeEbKE8RWuiDv",
  "key16": "PYbpkzWH4PbUdFEHcPdoEwJ46udQrZ1xZgUfnmAFEdFWZuksDCsxKsGY4NyaJrSxvoz11ZvYimgy9wR6WoHKz7Z",
  "key17": "5CjDNb3NirhsG5yHqNmqobYdauP8LNeiuUhaJEKkBUfPnMvZVgSEKUHuMJSiw5DN6mY3EMeLepfyEH7Vn1xJXRpy",
  "key18": "3DGGFdneJVEn3PoshMGhxsJmzoLMZgAU9rZxHKPvUbnpdKVajwMA3oNCRWueAx9WMaEyDKW54jduDPzHEWwntYNo",
  "key19": "47v8svJTmnmAPsh5sYRhL3tB4Awf2eY82Mj3eucMn1FUereb8XHBZpCkcZCgxpT9X6DK2ks2in9rWU24VfJ9K562",
  "key20": "4Cr6ipQFxkcHSqNxF9EFE5DHfnktJg92QDGdorPdAv1EkAqNGC7DNZqZa7TcQA6MHwRM4sXTwxVQCjk9LR8pi8KE",
  "key21": "2EXhpDDgfS1obtXveuXpfTMGjroFLvpKwDvJHsN9XtwLaTWmso7zs3MAgXD6LTeWz9tPePhrQ3qi1ybJbpjLRpvN",
  "key22": "4YpE67RVXPYKQh9sm6xY31EGux6DeQPnEqtw8fZQWY5EMtv26yNXK6gpbAfws1HpykbjWSQDeRUjdNLEff7FcWC1",
  "key23": "mMWq8Zjw1ebtLzkWJSTWEUYFXj3AUjrKjF2gGQHaqoY5q75Emg1eTC1Dt4NZez3DJRauGESf3FTsw8iMgpNa3dm",
  "key24": "2Uriqsy6we9StwweQEzPBysNk8MhgiWzHNzaXjiQGQVZi4xtZHciTwidQ8fPUPptTreZDxPveci4rfEE2pM2QwPZ",
  "key25": "22wnxv7w9321hFo2yvQZTQrepHZ3cf5DzSSDeXrTWgzyYTUZZGLLncPSpwBZAitKKa7wbf7CeXURD5VHJxJhfJe8",
  "key26": "5pPyojiSmZSWx73yg9F8pmsitFDzb2XyjsCagdTPgKJ3M4hS3ESrSAu3ZFDtRP59JFBGEAbChUU4rGrLB2f8aELX"
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
