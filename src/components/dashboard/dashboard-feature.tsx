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
    "2B8EqP8wSzAbWYmAbvCdrLiGm4HMoaYQqDC4TPpSSFXUL5NMbhrNs99wQFj6P6bqo95wqkkUZf4M5mZcNdverawa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sk8vKSTwTzQFP8h9FjKjGrE276Ge3pERjuMGZtKSCgQrhNXNe6eUqcn5TumdYwf9uKrLyFU2oCFmG2CjEN6miJF",
  "key1": "kLhTqknqAPHZHeDCbe9cWXGtZs66TBx7aUohbFs9r7FqC9ad74UZWwixVygqGu86Bhwz1XSwrFBxkHZrbALLPue",
  "key2": "5q74GhXwXocG5uJsatmLJp6g4bawSHeoCvakbLsgFRDN7cQKuWQYPZWkPtk4owWd5Bz3tvPpBRN9BEB61p2mbSun",
  "key3": "4gYTVonLnVfLx44aWwpcWeE2L8E9DwDtFHXdbTwbBq6jTj1mQh4VAzoewBkdKb8e3gwJJgJQzpB3GFEAmSyNFLG5",
  "key4": "y5zqLYDHKMAak4X7T9EAqSmUAe6bXabxcVGYj61pwcpXvHUDXpPoMcXDhLtdXe9KwPJ5FiaGR6KfPLBZXTeRryX",
  "key5": "nhKcu5TTsitzf6MUoT63JeaEuGQHsybXCSu6GFAU5Raj511YiqREdqtPsj3Enx8jgtTWGmGpb9Q5aAosLpidzNB",
  "key6": "2HmFc4vXhDrRupQ1yoWNei5YFoVn1vGgc1RTb41ekUJLzr5e31A3LxW6MNrjHZfH1BTd84kP8vahJgEB23NdejUJ",
  "key7": "5i7SbZXfvyusFK3W7DZJwRBHSZiUSxmQ9b2SPxvsFVxnfykzMK6rAxokxanPU62KiExp1Fie7yKgMVPuup6sCXPb",
  "key8": "ncAZZ4Mbt8JEvDzRL1uvmHJpMjhXi3Kv4D91LUoYAbggMdg1sXaQocDcCGau3QaCVXZzrTfmYvzadQCBAT133dD",
  "key9": "9vBFXK9MuQ3ZuNPSckq2EW2AkHTaMSacmz7j6TKBnv8RTEmsQHCqC2saRehUvfSQKEU426N1GzZJmaQSedvvRnm",
  "key10": "2ymvZgp6rcrXrY1GyBxJB2gwboxvSZRAfZpapnWpPiTobvoYfcuUgF2px4tNHX9BVEvAkxEeGBCrTNWpZ2SBtsC6",
  "key11": "5Vao6xNeYNSV3xe8JSDkWfbNKdhUEL6hzUuwswazdwrrNVYz7MHaR4DBqjDzr7xLFKSXooWWcbzsQJHq6hudL16k",
  "key12": "2qgu9n8XwHdP1FEuk6RY4EGzEbBnxPQpEzX4FQQ2gX4FtBbDKzWU22pPVcqMCB9DWcqsgt99jbYPQsV7fzmLAkwa",
  "key13": "dkVzxzyUmBnicEXQ7Y1xJ81puEfDVHUEUru3bP2WQHzgHqF1eNRNKejSXCRxuc1scqa7CyHrwRyb9jiboSLEGcq",
  "key14": "2jGhWRxMy5FwwKeS1pMdPrPXexSTyeRGAw525ykBNqZTuC24KR73hfAeHUPyAbH9kDMNm1WVDnFHV7GigP7QQVnF",
  "key15": "YVVkQuTc1hxCUq7kuqJULKGo34tiQbj9JgHhpkjd1A4SAMQkv1Kb4FRaB2qoa8SAMLJMwN3HSK3wUD4MAooxbTx",
  "key16": "1DhamG6cTR7vGKzPduiXcagJLRuuDybs3AzR5LWMsaKqDMfka2LXcEcZcgjd8bxiPhK26wV6aEc9ZEgp1QiwhYn",
  "key17": "3RLdUs5yfV9BYrKq39Th8mzNR2F7knspwud6kCbufhE3Sd9DV3EAPWHG2FP4bQPmqouYUeqn8y3Nffb6FCumFpLo",
  "key18": "4wt7RjaWai4DVm4ztZJkRhrjoGK6e4tYaEtLqHupo7bfdhQXKz9FiwejLq17qA4xaiFxdNHEVR9j4kpXN4ZtvP5M",
  "key19": "4JQRbiKJsNd1FQRLfY1zk1MKoLFdtZT2h9xRxbFeUkP3QyYzyfpzgzVjVPjDUTeWNfPT4o4MGQEkbuDBDWx5hAAf",
  "key20": "5RG3efdTSD6H1yHi1qQ4GJcVmB2RyahRP3WTMEkUA1cDRGRwPZkeusiWLdmZsqoVLXrqpnADGvRHuPnK74WeXsLs",
  "key21": "3boP4mtNb38m9tU2TySYthJDWg4HijMtBDgu6F3PocCqwyFtYy3Ms3gn4xipCHRkTgdEWE2o1YyBT2EmQuuYNEEq",
  "key22": "232E3CmpARXZGpM3EtEEYLPQmuchM8NVwrq9A6DzcXxLFQXWZnu9Jk5fyyR2Nfk8gw3qciCq2VDbhh84zQy2Noz3",
  "key23": "3G1PdBNnBeZmJmPGhDLQ8iZ2dRw7VeLMfpbGFpDL8qaFW8ikvg61kqkTqaWokaghmKrbE5eFKTNLqhVHWjDbMFX6",
  "key24": "4FS6sML2gLFcK961kgK1sH2VcX3S3iQfJvhLLYkdt9cYcPCyuDKDSTkKqh437zx6sDE1VAFmCvAs3Va4HY5jZVRp",
  "key25": "2bieUCqy4E2Pypf6wJcwbnt6FrJN8d4iuFFu1ccP97RbDpuoaHMjzZ4CX4T7WLegUyw8Py1quAVVt6xEADo8BaL4",
  "key26": "3htbt84YAn6TQu2UbTTxoiCCyxovNP6hXMZPZ4NEApV9DV1xXUXR16MaRMFrS4uZ5xJmxUKfCmKzkqAbHwo7TZj1",
  "key27": "5Ar8fLRpAT5WS6EKQ3PY9guLQ598bdcTdJm6ECBE5xfNzaewTebrg7DFk2UrApWmttPYbsFP7s1PBpnR7JsH443B",
  "key28": "2nzi8Pzqu7J5x5meTao9nc8kTLEYsDMJfcoNnZv5aDsdqJEV5fVSuygZYfNFjuFsLThtfhQq52hiLAnWWdcZcqE",
  "key29": "3dxgG4ahZpDzf8pN78a91NUjj4cLeW1aVHWBDULbHBRSdzBYd1yanTAxnvjhZEzu7ajQGUBDe8hBxLKgqrc4xZ6j",
  "key30": "2K9rC2CS2ULrRkbbF3VF7JphmAzgeiMCgCm3YS36gsctXNZSXHhEg9UP4q8abpnfujNbpMZxWZhWQG5nGzdfiYTb",
  "key31": "561TPnwXAknmL7uV1i65N1xDLoUoTLXpGX1DZZKFuwEHW6iRVwc5u9LsRLbVhxHEzoCXLgSZawisxVuUUA234vCE",
  "key32": "2jWUpbJ1M3tye1kUarvbZZEWUohtfWzkUuaKVQFCcUs2J2sXdoKU5ZhL375zzUMyiKYFKUfAJNDt6iZZFLpVb7uw",
  "key33": "4fqCQUvRxT1DzBSLNj6RYhm6Uwt82wbFwAuCMtGEJ4TYUG82yY7927UkEsbvtcpKejX7beScoAScgpTpC8s1pBGo",
  "key34": "w5pez5Fjq2Tp2Y4DttVKMjGAaUtqbwR31y5kQwttMLoHF2AAK2XKcpurvThNes2ENCN3j4YahZhM1FLFffMCBxE",
  "key35": "3nDoMew6MyxZ7pJwKYh9EVk6SH4ejEku5JUGZn52V69vyNWTdhf83V7Y2aUz4G4fKcd3Cf4oNYwF3bTSxR7vr8hJ",
  "key36": "3ZXgwg2dxNnurRnhyAGdh6XAdmuE5Q7SmDURyHwVqddDGBJaE7RhoLCTFN4vpymS675jA4LDXWfdQjrSMkki9FZm",
  "key37": "2Fx6rhYnKCtgdQqMCX5KDFFAZYqDG3MymYSjkdbyoDHxHE9JXgPQsYse929ZedZRXRU4fmsC3ckimFY53RPatdmP",
  "key38": "3VLt4uRrUtUms8F5zuC2WtKaT7xuu9UUZXrAZfpcoiSK3J4HUkapJXkVJq8UwY73V6ZuTTTnGc5YSJtWb18kPi5f",
  "key39": "RbxathRCgrz1bJZbZ4eF6XeRArq4SRMBtiPhkVZQ1QdYHCCCgbe2b9ShwnoA43ueLX8Y1DejBVh4And2KHgGrSY",
  "key40": "598QXuPUNJw9m2yxBUswkPKmkhJvkks6S1CYZMgJHjDqcs9gZeXT4fRNAdrz1p9fxNkswRtcQSbdZtwrUd7pJJms",
  "key41": "C3yXcXyqcPfpYukTnLrvbxsaoYtsnAhWvc5SbRGEJ3yPSJPuVBcZreG6SYFdL7sDyUWb9z9aNSCuomgM21cuCgd",
  "key42": "4AMgVaVT7Pin8hJxfZcSdEpVoF9NJCtqsJjpqRR4ScEqkYENycjFkVCr5CRSA9Sw7aVEvaBUpVYhanYJMosnn1iF"
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
