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
    "5E95ymBSADDpMmUJk3ghRfGLkT9yQHc4vcxHH2H3pn2YnrcW6h1Wgg5S8JBn2JzbQQwoFHEtFgFRGQL5WnWZ9uuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Qa7ds5QCFeSMyj7LKD48ecSjkrHViMHuiXH82nLyACzKwHNfbU18VM7YfR1BrD65su85ghKGh7w45ey8LNXXrT",
  "key1": "2QxDsP1U1EteXP6XbjpVj7XdgBXkiAa7bTUqDz84gTzLkh5mHJ1nRP4JWLkqvr8uqVRu2cF1ft1VWJDehHT1bAjF",
  "key2": "TDCEsV1ZhXD3xJU4iRXoFpKouWNKWh7M3Gb1c15hmdppRJ6EeFiPf58fN5dMuoQx4ZGo76qKAxKZ2jjg5t3qwX9",
  "key3": "2TYVvFRDJKQkzDxXeukMacFpa9MZu8SGTQNP76KvG4HwSQsvCa2kr96qJrdCCMZhtJCvypgAavU6yhdMwzzSYiGA",
  "key4": "4wyahBMKisQHQ24HpwVJHBQ5qzZ6k8zn1aw3ZYGMtyMeuQjaUx7cgoijX5YMihxPkDEr3axdzntydcFCCHSYGDtC",
  "key5": "B1tXoQcL8jTwypPq3vjbc2SZMxo7rKvn6YbV1ESjZa4VHL6HoVQbmXnFWjQuodFeCHtHdAG1X5uAbdmSmM7Go5S",
  "key6": "EeDDqsbERsf87icxforMAWUoZ7fZrv9PTJYDpkHYDurnwpHRuMndqCaGz8VxmttdUuR9XA95fN44ZUxLo1GNGkg",
  "key7": "463QM7LFos1yUto3WE97VER4Qt6qPW6KqCwfpCr23BuvhNTm6WQnxAtKtiWEdvHtGJ6em7PE3nfhu55phzhNuZzY",
  "key8": "23ubFQwRpgACJm8VvkFDtESxeFoy1pMAr9FcQVkG8ubNfdartTfh1ijLtU3Uxi4S5mUzk1FMkwiEHR4hs77bjdqY",
  "key9": "4pkiP9BUgs5AHgkjL5bL2uGSQ8F7rccEXRcZiCpSFjujRzC1xHKFy6Y2DLbfxF2ytSEKNxJREMC76XMWsv6EDnPp",
  "key10": "536ZJS25wGotwDGv462wep3V8CMAwWWxA5ejqYe8r5Raqs769DmMMcgDL5spbatzuH3BjVCq6dyh4uJTb6medmuC",
  "key11": "2DrwU7E421ViWAp7ZpuhUvJ2ysV36ngFbaCWnySQpzZko94YTMJZmbc7r8nbq1pa5Vp4KqdJALvV3MbiUL2JL8mw",
  "key12": "4gqEbHjsBKVBJNQmjKN6JiDLtkS51psevKZaSiN44RiETRuJau31NhMZRDQKfxeX18XKMKheDELCCa58mdmzgPuL",
  "key13": "3VCNYdPdVe8RPZVUhcbVZHspAr1aaLJnhopudGFFDuYgsSuYAWgv2JGPCHiWwx7dsBmj4Qxx9fQm5jd6jmvCaEUf",
  "key14": "fZLc4YK5Q6dXeV4aDP3G4ca6YRPApTL8whwupk49AWKNEgjf6B8oCztdiBTMwbLsrS6PnYtJPfmzTfdLwZ7odLU",
  "key15": "5b36afsDM2s4rpChWAaPDVQcNg9J4sMUcju48yn3UXNg7xDZnhPm9i6CfqPD2xrHZ2eKf1BB8zLCXy7t1VEH2Lxu",
  "key16": "4tCTFPRQbzvfCbYcfN6wcgxSQd9au9k2vdQMU54KWmKP92N5qovnvckmbQDHR5nRLkNkm8aDEy1tcvmLPBAfzCRi",
  "key17": "3EAFUqteX5HcoG4unhmQKyvUBwcNQjSpAsvHnu58hqRv1au6cjmqavi68eCDHVY5PXuuTh8VDFnVMHwqd3d5vTbF",
  "key18": "5rzLyzcKijTAzrFGU7KkVNbacEywK8LLxVB61Zps9UbyZEFJQynYZNHUSwSDdVftPvKQmjUiE7q1BfV92kxpJy9D",
  "key19": "3gsp3icVubn36UqpvT66JbgVZvhnyGG5wGshDqGeuQMWD1VwXDo5aFWeZwrC5ptvEez8FXRfchnTkncdMhi6kY3A",
  "key20": "bMxkz2U8oMZCja5wnC5GBiR1ru2b4aUuZJMQDeHnkv87hRhGNDmhRjMm6573JKEFrU1pbR5eMs3VLjguxUv1bzg",
  "key21": "3ycnUn6KrkU1GutpCaXNYLbV6oEXgAEJUDeD77aZ5HtHYN4WUYnyQb8wJ18AiAsW1ECM7XaPnQa6vmv8tD7bj7F5",
  "key22": "5mAvqqFkNojYxHBmuUWyHKKYzDaa5AJTaSnDPASY9Hh6XHvQUcXT2HBAyPuqBht9A8do7gDTXztWHR7PHiHkwfTP",
  "key23": "45cbjHHgD31ekAtFgBFEPYwncb62BsHVG6m6j5q5zzwYiWsPT3jW9t24CYiiKXUmQSR59oEPRgwJkSAhvqn28GKi",
  "key24": "LM2BtiofiHAGMouvrEvjPszXfPvA1NSZ39hmChQiFD7mJVYXH5XNZdxfZjmDS9YvbjPNKM9kzQyiRYxBHwninTu",
  "key25": "2iSicDhTvEfLhb7zA6vxK44aENxefPZ9Z7thn8TFeB2Tk1WcZmLan3QefnW95MeytGwwVUKBqsyCupS8UYBnDhGL",
  "key26": "3ecuoa3Fedc9dH6DjifTbgtCBDA1YJ7phwwMLGtwyV7xeQKmmZ6APwTJWoHYcj3YvoJx2eDRD8WjGSjaNhQfE5Et",
  "key27": "5BemLs1qYvHAmFj5ZPc4XvqBQsCMaCmyDps8xjimiDK7ZoJ7y1AkVWeRMAiXe7VCZ5UHAhjka9ETYYupAmLKEF7B",
  "key28": "mgsSpEMsnAa23esamrJJfaSoi3dvsC7UELLxQyVEKoNYUvCqwkT6DbyY7PzjheK53ee3zYzuh1Dm9fYCqKrZaNQ",
  "key29": "5p3G1rHRpzAttWXSPmtFUfJWecqQ6kv9MyWdgVuKGUDoGP88ydT3s1NbHky9UndDwB2dwudkFEmU6BQndMUnKN79",
  "key30": "5GLXRv2ZVXjhgvp9Q7ZjFMad5XuVwqKEjhNPjK7x9uvHhVmNy2ga62x4GrngUTq8gN3aLfvFeW25RL7A6yb9Rosp",
  "key31": "bjmtEwh9QmnHPc7WxuX3qvo6m5raoEdf4WdiQBnhSFCwMqjXaf2yTRiumtoJ2EKXxS9Sx3AZQTsrVoAWRx9qLnh",
  "key32": "5mmFNmyGhBFpvRD2Kj2beqSSV5sDc1m7x9goqVB1oTS1rHcYfjgcaNYNHjr1YZevitMAKMcxGaPVyZwfzwxsCAy",
  "key33": "64vczs9czjMWS9kLZoxu3Bt6ijtAiLear4aV5rmJ4MbfFv1BbQMUEJ79vhVaEjRCiuVAYZphHctNFpz9EHJo8gpi",
  "key34": "21a1hqD3zjmtMRSUmmfTyZsxxwPQGtJfAyJWZnkYGvVuSGEnM6vViTG4q3qygT4XnfKURnCBmwLGG3LZM3W8SaHK",
  "key35": "3guxCD37cHxfobh3YcWJdBQHN7Nd8mxEU5UNiLwxWEEKWnsgscbVsqnvn6LAVgnBXoVaqDttkW3CdNSvF88Lf2Mn",
  "key36": "3JuaVk5rR7oimThF1at2M2S9A4Dk5DMoztdMBhkqoauy3qEfPhQbexa1rFSLCTenXe6aaNE1dRRRZiFe6J8QADn9",
  "key37": "2gAM9GX1iNkeUip5TBwLWGC1KkcZesPcfF1HGY4VZNcnVSHrahMMQvQEfYvhFGz6h1LK1QijqUx4TBGCdNjjY9WZ",
  "key38": "5vxRzg42Qx7XcSwqcg1TeG6j4jr1jdSywFWcsLArvmGihV5ghZ4c3n3fjHw8253hs9NQMp1EGBWW1gL74QZNpobh",
  "key39": "2uHWv5MBsSALYthcEeQY7pX413aDCa3pHBQm93aPTXubiomysQUtX436a4nM9QMsUtzyK7hqRruvTyD2zVCAoWRH",
  "key40": "F9trpZj8HkTfSA5EVzZQXiLmEeEBDxkZMkgoouqWVvoCvqkSubLgMncLjP8qaQ6xpXUd4B1Z3vRxw6vYKsyt6iU",
  "key41": "5nR5dLwzJFesyFRRNbQzm56g9KubQSLmvMVohdKvdtXbiQXNT5ZFS33JG8ef7CfwnVfgyaGX4kATnGf73w4SkLo2",
  "key42": "3CxdGSTze4zKdxCuGiCzyZQdLLKeetS775bQ9PgyTPAzieZR1qgfJy8fLPC4xvn9SxyTT9JZMtn6AstzyGKvrS6L",
  "key43": "4a6tYSRucKJ6UGMth1UeW28FSw22RHb14amowadHLmykdmU62aVqP1pyVaTL77MNXMmJL8TdfWPfMRAZK5PfGPWM",
  "key44": "3rxozHv6tGtGYHQu2MHCZLXEsu62FcujM2aP8dzTq441RWLwasiQWkrPnDv7HgSxhbk8TiWRhRX3KRW4anYj9S97",
  "key45": "2VNuQLrkosSCbHiQXb7Vv4p69fNVRy7SAz4iARc7RoD1C1DRi8gHDqbAMn59fyVo7VeGav6yYoyxaDpmHa2CnBaE",
  "key46": "2my84Xy62aAxSSQXoxr1fSUJqEfG7uEucdbLmye9Xkh1pWtumi38PjCDwN35KJziQHV9X7JP1cUJE4pZF1CspM3S"
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
