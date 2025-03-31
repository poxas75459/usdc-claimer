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
    "5Vtw4EbMg6DEoeGHEyoWUrSg9KHUuVYfTsVFFukfWtB7rB1gfPf533narf5uUFEmxMV2T95hiLH5xP3eL49aATfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwvgeS9Z93rLnvxDS82T3bEm2rtk8SLDVniAj7DxjyQH4cTXu9Efj363HuzpN33mtYdbivDv9hyVanzyooi7dCT",
  "key1": "5by1RMb3WHjaeJcFdif1vmABGsNx2HQ6yGjTGtuzHSUCi5rBPf3Pn8sSyryJEXnHgRiXBgQhCMEALhc19Jymv8vj",
  "key2": "5KGxssZLu5Zt4eNv4VTXBjKD8xH3ya7Z3nKTCLy55poCzfPves1kbzdxbYm7sH8gQ9C2DyNoKHGLdhcXFZvConUL",
  "key3": "khtfDC6pngW9yo5T1MUWVBkbHLsYJEWzsg2mvFGna222sTjRpBy8CW4FJAHynp8JZw2L2SbjJYUAYXxEBZPbK3o",
  "key4": "2b3mRV4vVDAYYm65QDQWZ3fGkCBJY1qX41bTzLdGkhYPgfPzLJvmJ5uK3pVR1UXdXFNHMinGS8h7N1ufa6UMR7Ui",
  "key5": "64y73LbSxTdxWZuMe65hXnLcsJ2sUZuJPjRNdfhB9K7fbGLsRmE4wT9x5Qnv1kYv8EprjDw4V6TU8CafEN3aCpm3",
  "key6": "85hub7TqTanwvWKP1FTDuqAK5dvonbTyJoaFQVTT6L9jjLr9jQdZF78FGNschBo49794MjPn4EEhLJVU1f8atb4",
  "key7": "5oT7hnPHoYowdqjhNhTvdvvUd8PupDZVoTwQRHZXhaEr2QR9hx9mkpkakPHUvHywCGk928HTnUJKgovgNVVDR4DH",
  "key8": "4XkA9seBnU3dUXJsHS9sprvoiUnuQU8TVLudxUXyFcQNkhLAQ7wygwmdmMSrh9c4uiKaiTftZgmbeSxT62g6SdHe",
  "key9": "3BhcetzwURGVawUHms65rySwkCcf6uHhHEBMtfEMVGLocNmqWE17W4vdZd3Br5Kb5DTKdp8xjvHESX7JHjTjHt61",
  "key10": "27DQKNvgFrnw7qyhc5vb8nAMiK4LUWSQcf8Pebnd5kQragpLhW26cHGhKTEWtrdrrHc8Z69Pm4MxagyAEF4oN7ii",
  "key11": "3AwcbL8w2QzA3icP9M3KqoMc2VbapNybQUojHY5oJSspb7mLriBqnScn7zVNadvTct9xnKX6Kekf4ntmZUZuq2Du",
  "key12": "4FTRe8hHZ86U3hc7RovCNVEbvK81m5JuY3g22VYFxUnBrCXwDdwFeprwZHNTfQ62ae2mX66oNuTpFEZJLs83m9Ak",
  "key13": "46s4tjeAfT1fzRp7pSpVMvwN6fqVvkBiqnJ6tzfgr51PqZM1Jv3AAwudxx3kt56oiNxtZJ8bjmX73mrKcUnSa7qt",
  "key14": "5LMcs8vRUDFn2fCfNwkVcW9yCu1FZgf5DT2HMTMoodLbdyCr1J3q5byZp3JBro8MoU2QfRWuGyDE8ug78i5YCeFE",
  "key15": "YkFrfkRAzRtsMssT8Apovyq7CfV2LEVAUpNn4a9wfgMWRmH3EhEihvvoMj6swPCamiDgrvLdAYtRrt51Mo1cDYr",
  "key16": "4MiFH1n2USsu5XeRrdAkz6WgVioDUZuRXwN1Uwsiq1Pc1ZeMJfrMHV6o1GoKAWD9LosTYbmSZqqjyTSp8RmoNE7y",
  "key17": "5yW2z9sD6m9ALyRdbW4vBXqxfjMh5PtZ4xXQPrDQkTGQzty9cSTNyAG8VfrRdX3zbuHmkjuEbQRx5AaUCWzoMcej",
  "key18": "4kGMQLKUK8WiqMjh53QBt818JAcTQ48Ue4J3ax1u1ro56urJeAkKB1nVSX3KH1Q9B7JoiVqD7Mcnogb6q2XPjHYx",
  "key19": "3r8dxrKMmkSav3WaxWn2C5m3d4sdJUqSEW9vk6T7cKH1s9ATWrvFmHCFPUbiYKCHdqPkChfgLUcckTuibZhhxkgs",
  "key20": "XMCp7LMkPiiYagwurLQeZ1awX71DMisAkLQxLXpPACkS3HgNvQ5hzuavQQNWxsny3DzeWCqyrxBNNrwg5Y5xmRt",
  "key21": "3tzBdbccuBpeqczCvpnw47Tw1FNe7EyduvTPMX5eBmXrDQeY5d3s6GyhHHe1Z7yoGaGSPkQMHrdHfQrdK8ZwgrDL",
  "key22": "2XkapNL2pYvc2w869N9fRqhNZeVjuga6YoSiBVspZuczbeMbtHiy3Czd6e6fA9S5d2ZQQgMaEe6N8phKwPAYmdxg",
  "key23": "2ww33rdMUPY6NUWRwsYtKzj8nz3SjGpNWuppSotLmxNqGBUChgNC47kgzPBMxs3vDjJicGzBem1FfMnx16dur544",
  "key24": "Hy8jamQFTLCvHyd1MZYVPpXedAe1uNrDxxgtbjsJTLtKoLWWLz4V8GvfbmMD5WEcxydrnBQBjgZU8oRsSJJd4sq",
  "key25": "383x9t2kiUbnW9g7UmBWuW5m4A7aGuneWunTgR3f8DPXuqfifgpY55URrPkm2mhx7hqeeBg8cKuNCDbSjSnujUSb",
  "key26": "5jAkGbXKRVjjVPzQujBMqTKD8pd2dAvhLqkhFSckx2XC7XWQy7R2MSUXJNQepMSessbV2WprQjrayvKD9t71rg5V",
  "key27": "485w96YPPpbGMVYzsLV2zqtQ8qZ2dCnsBPeGwtuimFBzU7ofHNeJ4sXQJkoCQFQqXw8hMRs7zPqKm3qaZhki4SAH",
  "key28": "53bumRSVkyNReMWxw2NYQn14J9M7gf84PbKiWjYfwPTe1EhHcTiUasViejbmD16cUYRrjgz4C92zwthfFPw5cW2d",
  "key29": "UTNMgvw92BQKgbEFM2s7NMjpqrmTicEMv5t9hq66FPVQWdY8wxUpNxXmbwqY56wMhZnqXdxK8RjLawWKhusvfAt",
  "key30": "3Hb5ma4YBwie29dryiKrt2DgfXNYXVKHGzBP9PA78yT97k1rh9AkFGLjBMjNFv1nEsyNnYvW914QMQJNWSFkZgjM",
  "key31": "BsTUMrkFQ8dEKooVP8VWbwychaCu1tbC3W95gXJL4X1WFXifQ8Xvd8k7ygDWaheNebWSv4zZurbiqvAixYqgL2K"
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
