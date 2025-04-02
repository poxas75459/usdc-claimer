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
    "4nmuPDskaAydXQG5tWNRh6oQVRgiaeZ1X6Jonei3vuT6TDpGFRtHxpLdJy7Lmi4jNKWzCC7P9NLFVeVhHpveU8mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fzcoUBh7cZo3HKAZ6CGa8DuJenokB6bJaZNCuGtFz6qHDEKkBXKce9Wi4SF5jPouoDfH7JafbLPAHEeS6c3pL7g",
  "key1": "544au8sUC1FbkvT9UiH2FCtFqGBRPsSXbWRcZSa4tJiUwZzsRwMPQFsGLaqxEkCXT3fybQKrijCX3a6XzmELb1ZD",
  "key2": "4qNoaPtEQpjVDKR35BUudPxXSH97mAZanKcKoVxEYJkRZnKbdEQWTUhjqfoAhsmjEdE536arWN2pKWevtB9pknW2",
  "key3": "4Z9LTHqbtHjfxypVdfHeeBrBEx8YA14Wex8K6KkLLnz8tLqEqnDyF8sacanux9mE1EnYCFeixmCWfnfsL5tgS9mu",
  "key4": "p4n5DJVcJattCupPcaqVfa2q7jDVSodzwSoH6waLVQBCkEyHigWJkoVdTMtco7XkWUjvUqRYRZbCHpgezMJXBCx",
  "key5": "3fKcwSA5Bimp9qdhAtVZuDYYJMB582zhPPJRg4kdjuq4b223JT82jHBdoUVb4hvjFTheh62iVACP3XJH4ngyCax8",
  "key6": "8gBDXTDdZeBSPygzWDbTQqHXD6vY75Qt2HzrMQig5KfftioKURt2DR6bFND5Up9t299NArVAsEbkvm7ShKR7yHQ",
  "key7": "3Uyh779Uu4AzkLKD9kVcWD4nQGgRHhAXQndrHcw8aczvWptXv1zHFd8hZ6NHvV4vknqPY4K9mzbXwy8vwGyacMqW",
  "key8": "447Q8pRgCfvtAXMp99aSuuDveU7MNFjv4oU7TtwLJkNX6DUm5kEKygvjr3C17iP1c5BXKwsFmdKFj6XxnF41Zh4s",
  "key9": "4J1XwwLkpiPEdTpcyYREgJbZRDRrGcDz3rjtTpUCeaBf26J99pnM2paGG242QZNqabQrRyttT1yJs2enVfpbCtQH",
  "key10": "2c2dE7iWLeT5ut1kLTDxeJujg5MEBVbxLEkbkGMnUc6Q4tpFxkJL3MSEDzWXx4rKsrA3Lmo6MwxPk6dXdRbww2Y2",
  "key11": "45dh54C7T9xz3BQxrGTEFisegCCqvuNbBeoxLRDDjYdMtRtn47EDT41BHvmYVC2QLMhkbXjKFUPnad1cHTfcqJaq",
  "key12": "N1NNPhLR4bF9cpkCMAT4Tk3zvi7QZGBWxLFibj4E8vuViFEUgGsLfzpQbmPhV4bUSx7wrFZW9gDgK344aayzVmJ",
  "key13": "3GUL8VbBKUZmLZFGVCZrWcgawug7CZWVmuBkvpp9xnzrxBX6s3VeZY8TmrJWW6vMtebFf9kymFbiXeDc5K3CoCsu",
  "key14": "4iueSnS3sSodTq2EjhvXxLFkJn2tiELNjFDVmTaCKX7qy8oQsijf7vhrZ58RKTnftmT32MpbVJNdoL6F5z7waN2d",
  "key15": "XxPy8PcxE6B5kPyWn2NhPa38mfvcVpbtU9UU8tc3KBFikZjyartACqztVquG2bvGvvTwuFHzTwVhymZ8W84NzkF",
  "key16": "2SXvHZmJ1TMtyNuzzRq6CeXPE1p1aD6VjLrLcVdMAiyqUCXGMDDCk23btHmo37ey7qW2rLpofkdX1FgTJnFbwoBA",
  "key17": "4jYS9Skgheu5bL1SPmNXvG4Q6czkEcPcdipbHwDDAk5jGUrXUGaUvJXePvVdyjSSBeYxUsu3ZrGfYFj5JD89J77i",
  "key18": "2G5wjKysnexzZGVJr4qQCturidr6yKAZ6eQ5U7abJpr8h5zCANgoBei1uZcf7Rm6Sxbh7VbhYjE9doTGD7SnSFso",
  "key19": "2eYTfcNzxfsy86kcobc5iwXFjm2Gzq8CDdEU8SzfhAqjpmuGMm9chMHzLEWQxLj4fc5hG39ZRW1TRQ9cJBb4QSSi",
  "key20": "4v3cCtAY6DAscYVZPC2ghJj9fn38A1tywL319FxSnghJMTvaNJvtbCiZk3rK48TudSiMY7geHqLK8KMuzMdxouoK",
  "key21": "4NqDZdvHjM6QEEfQxusd7kngfKWJXrLP3G7vNRZGj6UDZC2x6s9MqsoUYfGNG41zvjYo4A91yhjbxw2HnQ46RtEJ",
  "key22": "4aaJRVrXLN3x4ioXpCZDFBNb9WipbQEd8HpwMeR9gWWqL3UP4VafhSSgYbwG1Z8GQdPy3GnnCdizQDtvFECsyyGn",
  "key23": "2aBkGJt7uisE8nZz9DgfdNqDGHRVVX546Cc4UpPd3jyLUTKNPfz43gMVe3cJjfkbKSuKnMpJvyBZbh1fByESYB6g",
  "key24": "28t7mQPoVyTaqMNAXmJ3fHjr2U787xxbCAf6G2Rwc5qnFQFkxT7riM29K4gLG1bupHPTmycS8FkZTjR9cehBB2s5",
  "key25": "5jnzmSqHxgt87LbybYPqvhqin3PboeaeSCTRc1GALkGc9ysGLaFSCgfEKtgdZoYW4ckU4UE42sVbMb1pMTeQcQ2z",
  "key26": "255vMfV6CwqaA3uBpbcANZEo6ZmiqfvCwE2BRxRg8LoNRu7r6WMiwHrjLSXkHVjQvM22XMETacr8Sx1nbGR6EzPJ",
  "key27": "3ATSodyyC3KWVVcEZdqfgwFkc8SQxuLJuqsRERen4G7MBwKwwFevEKKmitGkNhDTuBSetiUH9taKnGMJRwAuUnEJ",
  "key28": "s5NZwgnKHg1WcHPjHTk4CBLBArjSoyRfLBsGoKP7AeBN7dsf6YD1d6VCTyzcwqwnFyUcouPVxNExsLAKExM6mf3",
  "key29": "5aSWmYTXoMRh9AnmbceYM4s85hGCeUL5dYbXPJgSmdv6twJ4uisURSp5hC3FqZv4UQjNbM1bWC5KoPFJseQKj6ak",
  "key30": "3WMuHa17w2PhHarLr4cWYWKkkQdcQd3qY1F3rrAyQHsns6AKdfAswQjLxTDxrGSSV2LPDuCTyKph6FznwHcTZHAg",
  "key31": "d2ntk44yNWCqfjn4bcoujf5GBaVmNBR4R9mtHFptZMRXS1WKFFE3deqG8bhcEj8KjkYuRbmoYPKFvsW4YSELyQy",
  "key32": "4bw5zzecGKPn3Zm8rEMvUVVw6XPmA46r4tGH4xgSbsrBQgx76gDa3NWiJVEZwR6jsXwX5jBeF36pBCDrwpLremvR",
  "key33": "tg1XurSHacZL9j4XhXxxrAFo1ax9TcUA8hejRhVRGvi5ZeVoddzACmbFtQuTriUNHuTZagipJyv8kv5piemEX2R",
  "key34": "UMt3hgZSSxyoTcra2twmmtCFwZfwthXGPpxcdZjk1bAkS4ydykx9kNnvVsMn8UUQx26emYjynXUvRWcZAirxf1f",
  "key35": "9BdfuYGXxXUV8pD2UGyaNhC13Cccu66G6P7nAP7JkPzFwBAh4Lh5tceXLJgpUoK2MdsiW8f4SmRm5hYF86aeK3a",
  "key36": "471RyodA2icvTRbBFN7nHRxaJLEvpPK8a7Q7JZAS7iB36p8kn5GpoEnged3xXY6XQbMSkosrfgkfyawbeQEzAxxg",
  "key37": "3k5CZhkgVknBYeWf8oL6PLc6uamGQNdbHveyfGE9kMRwZVgdmRsCZCwojTiScroxm9TA9hhMeNjKZUn3mMbcJE6Y",
  "key38": "3UELBrWFbsdZ5Yg5jqQs7rxJuQx38YVpFDpJESJ4CMedQ8oERf6deiSMMFdeX3ydG2GRTyaaxPuCgRyw3XaLhemo",
  "key39": "5LBDfLVCSLS3xYaZcTaraeHcHJMVTqH8GugHE7GGbdubczhrnYsZo1ohm3mKtSXFQcYid6XDLq7s1CdrxeWZ5Vjt",
  "key40": "2C8AWqaKhDYohEyCdLTafibBXtG4qNTKKWxmo3mbPxwXhangFb7iUzaQovq5dhQfohfkccEBqxiuR3DbAsvhswZo",
  "key41": "2jh5tstKqfBnZxpk6foXTZ3yhhG4MpKUzenCX3TVR2KSKE6chdRxR63GVL2VFfx4md5tGty1ZUnqRwDeFRpVJHVB",
  "key42": "BbMJpcn1bcfGobcSqGi5QY9hR8y3oLRvhVgJqBHGJJDSE5idMo6WbzBwWYRhqYgKtMg5PaWAT5RJw8ffQzFqmyt",
  "key43": "4ZikUGisa1AqHjQbMkPZh6XvjwcsKFNvmfkuTkiM37ZoNieqNzuEoR3SdaersUZQnbd7mVhmzhrF9D4ivGv3rMZM",
  "key44": "2RLZ9tpoQ11p3j1YQEz3R1zhgbuUs9V1k9Mqxh32R3c1Cq3WhvWV7KnH31sVvmS5AEdsRzpk49MumDzaS9WzTbFM",
  "key45": "ghJSrw37weqEcdzUtj7rfnLKwzYWthUzxu7Eh8FcHC2qDq8DjGrZcwqU45LuQGWtg4f8d2jJJyMoWTCkxuAa3YX",
  "key46": "5w1mUgfvmZCfpaoEpvdLDjqz7jKkEjWaA4WuedstgZLvLrTLP56w6EzWUQret3VeygtsGFsXT7LavYgkDfUQAUD1",
  "key47": "3VEev8WRnpmPc7SHgybwBnzuQyveoHhzkSG6nkzgBroBbCsSJAuZ8kjxpyEFwQw3imCmtkGmMJ22PRiEtVNnMd7e"
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
