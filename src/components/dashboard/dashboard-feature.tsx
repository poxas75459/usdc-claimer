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
    "4jbhA2k13zQJtUnpX2TT81EayqmZde84Wj7wCcvYKSfpksHVntgPaQvR95F1rBfn1siXDDfDMsLDsYrvBMQYSYX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VadmYBiH1zGF5BNj3nbL8q5rytRTopwRConA5GrXBP2hUqCoapykYoU1oDv2pfwMZmpnExA6ufy3xgwxprm87V2",
  "key1": "2kYLi9imzPZEuzDnubrngCXDMX8A81h25RoSgzc6DQd34B9m571JogswSwnw9RZn9C8LykLX9uCTsiWLN9XAxnZ2",
  "key2": "4N9Y4VyCdA5vMRDiKnDZBTMS4sRuaagPJF6SU6YRVYndUthtV6pcV4SsVFzt4L7zGwzfS2ifN6UGdU6m1ZaZoqMR",
  "key3": "3Byy4unrf3WxseQ8HDJ7cbEWV3ufZho4XJiDzpoXs2xMDEdNuKoyFcHiDs7mmGEghma33MjbUWwkneHbHiJ3VY5c",
  "key4": "4Dahb1PpyvKnAiL987MmXzzCfzupuWZckpTzcfn5FcamytGgBXhNNSePNMULuihWXvMK1azjnRLs3PnehYMjrUj6",
  "key5": "3VUGujsm8tfwvDkibcqN9AkmHwY1BtegfVcqqAnQfGswo7inVxH3a2U3GazNWExDM6tghTtEA1221e1xJhyt3xz8",
  "key6": "2eFmK6X5yTm88ui29FuKE1umeRVgByabwsycwg3XuaeahBpdHzqThrLFJy7rQkzUtmK4r3vxJkQHSav6E1bCg1Vm",
  "key7": "5BEyBjuZN4BJcTc1NgV1VsHTmGE9nLADGYK8dU91cwABreVuG84SS3CqXSv7Msmcv6sGscE8NyGEeu5mhktEynh8",
  "key8": "ifYZUaaMqmEN5WtAaT58TgCKnw2WNhvdm6JbjpWQ8HBpPAgq9nmTFa5gk6KeCXurRjzWNeGmuXirPUx39PzLT76",
  "key9": "3yzPgtAqFeyWbsZVeforizhBJqzRhk6N7e7QkEVVNyVmbJ3spnmwabMX1ca8PcXoAbjAEgcZnD2Nh5PL45UFkG7k",
  "key10": "DsKxzDi9zSg5Z65vmWtBbwZk7nCYqazE9pmyRCBE3yxnTPPoTwdxJs67aqZJLRovQ3xZZauqcfLTs75jXto2z8c",
  "key11": "3uCiyJQ2n6ijDRRwanW9R1twptjUr9Y1bxox71JvSW4rinyfc5v4KBB5Fvc2GnfZs3LcwZFGCL9YLfdKYsnP7KMR",
  "key12": "Z1erU9kcWhZssGhmz9hdQZGkibU3C4SHYEN138jLekLDorMYDuqw8V73RNmG4FGxS8cn9NjPQgKsjk6XrwMxGXm",
  "key13": "5oFLxNZbqMRe29WdnPmPPjpREA99JAiq2eL6rm4KxYrwUJQqFv8VjEXATp7odQP8brxkVatGJnyPALy4C73Xtfm7",
  "key14": "5gVLVKzorJFMv5ifQRiMH7WjWuhyLWwFDmahmsaTqqTYCywypZdYKU3rgQLgGe9KPLHQJY6pyrBe3WAN4DQCbisd",
  "key15": "5j8ni6nNfGZMuvCeG9gTDE2WBpdhVYwNwDxWQQ2sYcNzvG4Km2Kd1GQPzRMKJwgyc87tAY1zJQFyiAK6i5T8J64S",
  "key16": "3tryzMfxFDSY8wKFpWWdjrK6xXKzpjoNuqmvAt8zdtRKS46SPZ3kzqbm1MZfyWEdnDEVyewnDC9G5CnHBZhnpRuR",
  "key17": "3QxhEzJnTNF1cUALKK71wLeSB7RS7vG5W1Rtj8MA3A54Ar4Kj3MgZXxVYJXygJucgeTLFCKArvigLePfCMs4f8xi",
  "key18": "3Av7XZYcEzCsRAJKzxHqmkUFv5q9TCCaczyhB1nmKrMarmrRQKWPWCtD6hXZkZAS82mL2oJyZcFAiVJT9dPQcggK",
  "key19": "ZDGfc13WvYXx23k5tgV2SSQmUWwf9ypueNJguSAx21Z2mCxRFQxQFupYnwnhna9TX9x5KNG2F4EY7rgM2Hb2cFG",
  "key20": "XQCUaB82G1AL9fzkfVF6LX6SpA6Xv1wm8NdZ2FTP8Tz9DQPnnmBAcGy2Qic9kUcD67vUvn5KY93djNzRtzEH6kU",
  "key21": "47Ypi7ts3yTGayxDx4MN9VLNQ48X8j77EdFWChKnyKsW4xBwLYgwznTT7mGLuuNiE1phHESV6kjbyScKE7q1tEbS",
  "key22": "2h2gDZxD96UQZRJ3zLaKkXZe3K59bUKpVjuYpbXQ1FbS4QT3oaL8U12hsY96LkoRe8B8S5PcZ6dLrzZ6j5nSTxgb",
  "key23": "25fSNSxUoKhS9CMbWSLmTw6Th4Md8BJj1fXjcqPC7mPjuM6abHmHXk1y8j5sR5iyH95JdnJ5i6vtDLiLSB7BgYZq",
  "key24": "4tBNuJo2iSTAyZMTWbufzZabdxmD129sZiSkTipopH7syqDJz3iMrEBhErNZ59vHRvP1g2z9fnYA22e9V7soqbU4",
  "key25": "4ZVeyqVS4DRLGLsLYpQmaNDWumQ9GUWiQfA4V6aciDFH3MuUyMDL5vwdya3oAASefMRknc7FAA5cDMvd2Hvh46p",
  "key26": "3qofs6dBVcegknmqQZuduMRvtKaL5xBpmv8KaEExeY8xynpyS7w8Dh1dTmWvspGG1hbq2fkid19AVrSvsy7tpu62",
  "key27": "27MLzXJitiDhaVcgQaaxMkgX3cTo3foCTABANyN53YcmbpaQpZ295bsatfUEvB3o2cKSzf77LiSUPZrTkbANBkAx",
  "key28": "5Z5PXakMKWEYxZcuKD6RbCWsJycke9jn6pNPeWQXLazQdhDcdzvvLxFzV3gsp7PZDDxh4hs4k73BekSreh3aofMo",
  "key29": "5aB6CWP8wq4UcAXHzYXcELnQaJM22yj3UbUfcVGUCGGDDoKEhWyo4K5xJTB75rTGbB7tsva8CTKUXmmefMpGqAoQ",
  "key30": "2t8v2bRr5SNRzotRvtQ4eAyRbWFQeu49aTJ6A398t9F4ugexrD2H3YuieGWMucPs3wNG83EGtAhLy8cvtwZE9E3j",
  "key31": "2td5xuWVvpbm3Ay9swJPDaiNybTbN81wCZvwoaATsXuQB5issEvF3PjypK8NZCugaDEUACoeszZb7fTZf9j42po1",
  "key32": "2fRE72HJC2HsxSh9v4sZ4K3KVKuS5mgPkAw9uVtz1Wy2d9Z4tyTXy4fFCn8DGkdE44DjZbjWZYHbm6up4S9qq7v8",
  "key33": "5M4QZeNEZ6HYXoJGPACQmpDTHVq7Ue45nvbJinZgqMU1eM1BJcmn6xDqCb5KQzWnBWviupNpNC5yvVuPtDAL7gnG",
  "key34": "5okVmYkKABWEiDgvopTYBmh3kwXsASFgYtkwAsTrKqrkM5R8NppMefBEmKEbbL7tYKAgX4Wy7VoZt6HZqj648zXB",
  "key35": "3nH2BAR1HvGjjFLirtpA9Wz9GAN3Fvpuubdmy9FLGqdmRr1DZVkHLxKFgvnRzUpPGXgGGCWtf2Axdnd4QiitfMiY",
  "key36": "5ReLYFptQrPgeMP7cvzpq8VVQNFbpSPHYNvPTFZk5vKXkqQ3yZ5L1MrHaiYqspiTfgrJFG3jV9o1iKaXVhCdhBnP",
  "key37": "3MGGxJJgd4Bx7L4xJLZvaanUKeQXiZcTbeMKNzS94kAns3wC9SAk2Rzik4PHyK9VERTwSpmStjvxRBEPkdK2EycF",
  "key38": "3qxujj5n5ZuLaVXKAcw61xPutCVGPond3CeMmEsxmqCikX3NKAVJJhzeuMEoafdS1PXPe9LENTGb7gkAHYmgDSsr",
  "key39": "434kGfwusTiXLDuaV7ZJe2CGiYVsjdFjoKPUirR6msBDPrSKZoKQp4N2mH4YgNHqnGwxPNd7TTRZ5Uv3EzPYHzUT",
  "key40": "5TrjRiZNXNVgVohvXmaRqxLt9SFz1XzhLbaXuysLbdZn6Q8CJJehy5ix7RKCiUAyjHVEdBR83d7zrafyY1vVat4M",
  "key41": "21kzFQMnUft1CptjMGq9kmwPvsCv1GihYvavZvZTiBEvd2pP5K1f94hm7G6zMNPGoKYinuCXHD32Z8TsvJ6TJPkh"
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
