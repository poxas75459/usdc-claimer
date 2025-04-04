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
    "2fUarhDu2SKSri6ryCPgb6h51bKw72HzTfjFMPe5iUd623JPGqLxmkhtxxni3kXJaQ5WGKMYuwCAtkNo3wffR3AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FzG2B2ogr3CLG3DXV8dQXH2LmtBS97MLt4ohaCme8eNUFU75QgTQrfZtJzpVHP3rX1QPe3p3AG7j3qscnEW1Uzw",
  "key1": "MBsBeFvG2r8FU7aZi4FA7zPAS4tsy9sNxqgawR9PJan78ejZRtvbN3yqeZmDU5SPU6TG92SqPcrz9JVXXYHRp4x",
  "key2": "5tWknUMGf482J94NRyb45vHDd7rTS6tH6McqBqMHxuBVsM35mACFa4tDK5sbxhkyKuTQ6Kn38BSsa5S7amEN6yzF",
  "key3": "64Zzcc2jtEya7SrMUKkBuUS1gWmufHyh1ApKutJ6TUQy9jEnSGxBjQGM5BxsdfHoB7FjZ3DqthDqbg7FfXDsMxsc",
  "key4": "4cCtiyGuVUZ86c8JhH6EmycDmpRn76XGeE1rUqmusEiUB9SJxgGCqwf6L9dbUptfayiZs4a8xh7ou1xQ6yRh5F9j",
  "key5": "4KeAKH3B4sVZRdyY3Li5S7kE79fXBcCthbfRFJoAg2jf2Q5NpKyT1MVtTjyrZqfpNckdLudULqN36mRK5Fo8keKi",
  "key6": "4EWj3X2gF51seLAq6LJuLQb9kjUSechvxzp1MdAYKwnMZdPpBJWjJW2egMdBhbu1ijFurB1mk4FU52HsnmkeAX3K",
  "key7": "pn5wgRpDz4NU2k5BpopFmpMspTPTnAS6wGNeKnA63Ybiz4PAxYa48kFxoLnxLmLjDDYHfYjpKZBcDJuVYa2GcJ7",
  "key8": "kA4LW2aKe81CPozX3hZraCTeSQt1ZVmJCKaJY4nY1zGkdzgwYMWFD3vVFJNyuNzLCaUqkZ1ZSzfAT5Ka3bv1h1f",
  "key9": "5Yfvj4La7HzS182mJjaZP2e8S3krkPQgWVB6onY4jv3ND42otsURosp2urHjZ9sD5pYUQBmHmAC8pG47DVis6Vr3",
  "key10": "hkH39t4aNxr2meHi89yc6CJKPU7wu3HKKVgQ8G7KCR1kJkUnxeYLLUU21msbCWBXmZ86XprBBSeU2NXnyg4pL8C",
  "key11": "2w8wuBAopTvPvpYBhAxVXGjxFLMAKu52DUibkwJp23JijJ9rwHPjsgj9am2EVbgDcKhdWopBHbRQTEX95PyFG4qV",
  "key12": "3sM9P8y9RYbe3TjshCYu3c1E6LCeCZGJ1Fn8riXNzZjBL9RooCwPDGmMgXyUhriZGz3EVuQgCFWWm45N4HSqnQMU",
  "key13": "4oH3gvjKobjPVdBwt2e4xw2kxMDSEraDoFjkrwxSXegbqMbn1WVbBNPgRtfTJMFyB3mk9n1VruBybtANaQZndEPo",
  "key14": "5iSEsmoHK4jGvRyDdko3gc8jt6S3zXEdaXjtFD7dYuhGMJuXSdYgTSw6eeGmH9x4vyr6HxmUrHG2fppMTUf4Jc63",
  "key15": "JVQt79eNFrV3CHwVFCYWfXcxFi9UEgWaakdohguxkLMbYWe1xctE9hydJV1wcSMTRUUqt4edhXtYiy5uF9gTJ7F",
  "key16": "33Z2m7dm7nV6hM35u44yLANxNAcDhjcecvFyNxofvP7V9gq8uZuMDksupvnatTo4RijCmMoajucY973Vciqy1jLN",
  "key17": "fGDXQrKt9ze3fqCvLkLz2BGiTTpb3xewtbHudz9VaX6KGttRtneTXq8M9rCaTj4WjSeVKCeXqd3E6ht47osM1NY",
  "key18": "4hJc5rh3ehpt44ktEwcBGdGhcjw88NDKCuEQm4GLrSqGF16jMsV75rHUdkZYJnD698Ac9xbVfCyhEzwZ2NCpwatp",
  "key19": "5Kff7hWPdFPnGx9Gey7WHQKjsdRsEYYnLo1DWYYCmaLAJXMg1Xj9HBJFC6Rqxew24wNMrnJVbZp4TnCdgdugfQ2M",
  "key20": "YKW7mdpz6XUoARDnfdJ9Fs53XGzL2w7Nc6UKTf1oXttyyy4x3FyTjTidzFeEV7XiLg2p2yTEF6ZkCQN4Q9vJyCC",
  "key21": "2e3RZFiaVJiiXhAEFURQgFRe6ehfvr6aAV6gZYYT9ktEJejbeEcPypG3wfba5pbfbBqkHFPuHj8vbiLbFbyZgZhR",
  "key22": "5Z4Dc99Rs1FS7kBMzQ4NU3asSPu5HfkCUDqLVBZc2Eivq8hWBnhLczyw7fULyvyeAPxyKNUyHWRLqhyZxe6sYBtK",
  "key23": "NBMJtNLfSJfLoqY65gaX9ZoraqyySqcv5i53XgvTE9WcF4UjjH2M1Kifm3g1d5TB98Pwbxo8TBmtA4ArtZ5heQq",
  "key24": "3irfbgnM3iXgQ87n1DryEjdapPUcA5c4hgzWSvbdgvcUqfMZFU3nz6LhHyT9AqwhipimJ4mZBaBdGJU5MTopURHr",
  "key25": "Yfevj6pjJwX2zabRmb19PN9msn4H6LRFXxs5pHj2jCPKZgb3VKfGinsryCXsUfZBaAJpUv4moA3kFmjbMsbYYRD",
  "key26": "4sxiTNGvS4QrDpGcRnn1fe9bAvkkZ8HG4hArCKZZtguztd5S1aHbrrRNpFcLEVCKHBDqUQtdBLMN19s1H5sP8LCC",
  "key27": "4hwZL8zoKUJgxT4iWm922eNKJ3q4vdmcML9styhQ12qbMeo4sxQtUeRbSQWpW3tVTZcRfFAyZDnpUsq7X9CiGgiF",
  "key28": "2ZWRkweNDjqJYhFFyAUyi8WkbirxowattToxSsVVE9LRXR5cf12STnTgw4MgsaLtnwKGzXFq5xA7LMhpT2SSv2ib",
  "key29": "3cz4LGRZVFkctZAFrohuEAznYbzc48vydkKLDPWWy178b4r5twA5kAs2rNcDwcjw7kp7TGEu8GabNgfJ4Bxc5vaz",
  "key30": "5U5Y73La6xxEWR7zHmU143Q9NLsYYKPA3kPBJySzbg8svbKvKx95X1oCYxg5VUPLJUHRsuWziterpAGPK1SkbkAR",
  "key31": "TYTMXs7upSUiXrRo3rd3rWX2uWpobZ3z2UM7jv2F2V1H9RYKfbG1Sr9jbFdnrnXXZ78r5UZueF3jvFkpoeEn3oN",
  "key32": "4bm4kBPWDQjznv5CrEWMPKjbwM1ih66ZEzmjN9HrvXE3QrKqBCycoGjZAcmEAkBh3X3VMxRszwmcv9WyJinQiDk6",
  "key33": "3rzFjScbPC7e7cxVNqWiTiQ1eUhtRn5TQrz9dhgXgQrfUSNnUvVYUomngyVgtemMTKSaRrX782sQ6t6ba4ieSYQn",
  "key34": "5zYTiUVaJ7TGz33Xea2kevPExBwd7mgE6N9ejCLEQ7SzBLQa4QduZ1nR2YPVmFvJFJxySZwki5fTmZfPRXAbfnWL",
  "key35": "3AF4GFAjKHga2JicZMz84YrY5Nho2uQ99XdqaCKHSsVqF6MonBAqkQrzBixkCrAQYQZ2TCaWrEwGEVtuS5wvEVrp",
  "key36": "3rUc3TcuFEvmVtkxjMHPAKT6pyLu3xG3U4ZP2Ca9xYzWvzeock9nAjXop5jSrPjzJ9P51daVDR5a4gmJKnTnrzLS",
  "key37": "31i5h5aPrDFPhXBf4HyQ98iMQzQzWUZpBX4xtiqbKAHJei5cyuu7hALJiXwogJRhj8hUt1TUkQeV3ZcQSyjYjLEr",
  "key38": "xsSTab57eBeb2wFoN3mFbHL1XrDcL6EuQCdQzFJkbhahMH2gw48fsEvRTNXCyeZqYVrBeiFz6jz5oRuAyPB6Az2",
  "key39": "5JHcfB6uRJfyoBXaBjjmjN6WXSyMSCLNdFeHT47KwTGQR4Pz6NatsLRcVesV46tQfWbENv2LidCG1Po6XqEi1HFr",
  "key40": "34xFCK8rZ2YcaxuVxFPwdg2GyKmYnkN5DrBzkfF5L7XsSbZBYpJjHw98B7jWsHVhid93APuRdPynppbiD8ZATWha",
  "key41": "5Kk2ThBCSgymGTfoA5HpnhNMkhNzZzdK4rszob6YyJEVYGpP2QZ85RFgSuC2tpdbQFnRNctnt1ZSFVvhTCj4Pnic",
  "key42": "5sNBU31XkJbRxUsG2FwpCdUiuiSuc62s639wdDDhhe2KsqgdzqWfBEU2uE3oEMutSdtuCjcgjag4HHHCoxuv8mRm",
  "key43": "29sKhbk2n7TxoTav7AhP6hnEV6299e6sDAsJvFRq4P7g9rw1FqUpdqAzRZF3HYMWy3ZB7N7BWDHxkSXwAXNvfpdL",
  "key44": "24bJ14VVyxFE9sQKDfg6ZyyEfPHcor8QLMkGeRvvxAaZXdxZs5m34u1JtVxuEgdPudiAmpB6auoKA6XMxVguyVDL",
  "key45": "3omYGAeSuQdjFdk2EeXM6nvkTUDT2iTZJ35uDBJqg65zLb1vUGCGExRjka5ynque4P1VRWX3cAr8gyx9ZKnTFRv6",
  "key46": "45bdivzKDN2A7kUTpKCjDADiNbgog4T3tVwqSqDR8ZofupuYKwxcWKBW7p6F1aKMsJPPG3jXhLutq73n49EANthW",
  "key47": "4GjyYobuNkrH8NYZShK8yMX5iejcZDYz8FfoZS8kThKgC1UswMK9yxzqo3CpAgsW2Gk8RKrZ8Lzc35JTuKGm1VHX"
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
