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
    "34TC6Hm7KddoQmTFLGCdApgAfFeeRBEMQ9KbginMBBJvKv8JZ26QBcn128L7p9MJ1TkJBGr7MW1aX6ekGdiUXLck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWuiRPp83WVSmqYR3GsGagwR15o5j22Xp9htSL8aC3tatRpoSfAgHegsFU5YiTX1UBNj3Sf3U9hc8cVNRenjDfx",
  "key1": "Kzz1edX2oFPm8KSV7iwefWnU6MbMTwsMGjWmZSfYgn7Ra7jQo1E2aP4xJKwAuvKsLGHzAjBJBMcB8ynXW2dKAKr",
  "key2": "4rgUXi6KKhm4mEmXU71MD2UU8GQ5gfTzA9S47Z8PmcMBH3dvPNC1g45PKFj8VmkkufTA11S92BLiRCdbYtUJdc6p",
  "key3": "35nbuYnQbpj5fFhqhftfs3qJzUnnrhhgFAa8pYka1udDXSmStuEBYwEKfhUipbw3LiK9MzyzJ7qYkKACvdVuKBeV",
  "key4": "3rTL9gAxDo4XASxXC2YaY35ra64hbSG3bHUrbtuwe7tZvx1hZV4KjX9zP3JvYGwbsrGD94YZkQzEqNoEt7yXWnHM",
  "key5": "5C1GU8ot5kvGSWQXAqQmpB1fb593qGGQzKEGktR9csMtBHg4RmjxxZPm1FUZRZJgGe6TwhLjyeNTrxysfzcfsqrt",
  "key6": "4KCXECSU4yvrz3xtRuwih77yT2wCZV7izid1v5JaCsZ3pt5uhwha3eAFtTARcbqte9aV15cHzXhtKpPLyvnEEbRP",
  "key7": "2yGn3Q47ttUhSLK3efLM3EXTdrHC7mnbsnQmZyzBy4qtZPSEyTn7FArkcKJdSSXLBFxGaNBrKkG3CDrwMf3PPUb4",
  "key8": "C14VuAeuqunxJi5UFeHWhCuCSeLuGTbe5xwUVKFHy3dhre72afe4adNFmjnSBRoU9F6KGSnDbwALoCjd5bhau1G",
  "key9": "2UgQadpAzQvBi6nUzszvCAFjFMy3FkC1UwhNeeh749yEaWpTJVU27ovv8ypqU8PsZvrwPd8Sedj5NG8cCbzopWP2",
  "key10": "37HM1JJYB9gXpoAV7yM3GzaD2fkRaiJVbRoLJbPuBu53A5fdhXo4kV9Hi49rDVrxQjHC8rApqJvcfJfJZhrihWuW",
  "key11": "3ixX2SVmUgipofaMDo591Jxh8hSryvbkmd5fi4it12DRTyoUPAxVRg1f4rLA3QwJcq3toqxq69wcMWNGaHUQLhLR",
  "key12": "2aai63n2a5tLDY1nQaEvJaPkCwmtoXyaMCPyRWHNCicrHxP53o1rn4GWLjTAGjaF7481tPjssxzJd9B3grHMC9Y9",
  "key13": "5oAZRCcivtyyA8r2QLXpeVob3XRwgWfxMdYgZ3kAb4hLHrh2QFP5DNqPQk245LgH5xSR7aqVdzfjZMnAfYK17ncL",
  "key14": "39aznAv6vCHk9RbTQyiEqFNS3ug1WLwkQYzuXsvYkFmrJvEXzbrLVqULBDneFwmXz7Bz3ip8jnQxshBPthuv2PhN",
  "key15": "5HAHmPAe6yEbu19E3Ea4oVRfMhVJr441MCaTo6R7AMuLKUGugMMA1H9bRGgxtCaHGzEgzXPgzQiTx31ytMhag8Zt",
  "key16": "5XeRBj6sXqh1Rt3JY1937h4rRgbRYR8qpasmyjV6p36N2t25eUU1Aqtw9dq93UL5xGqAZ3iT92T1dqHwp6UfKwTJ",
  "key17": "4r1FNGsbDScjnSW6umJdSw947MN5SNhxw4BPB3HczVXG2ciHW84m3HkkCZFaxx6kd5ugF2VmEQwxjqPAMnjwczKB",
  "key18": "4Cay8j8o8MT6VRM6VcwRYEbF298v5tTD3yiX564SS4XUeRWCUm4ve5FrF2uWpx5ABYJpzwH334iHT7XMVQxPJkwx",
  "key19": "7zcSgeR4ByZu8QKosGJXm2hMamQ2vf4iPbKcc9jvFBuEhs3W5nA3d3QaY4KQmdejjJk7rUntbM6ZXKNqEy1Qasm",
  "key20": "3tvRb7DD9GfJma3vVzKJG11JwRJLfBgzNhZMtoYRgofTs1y7UchVheXwy6d3f6ZogmPsueJJ8TtL3RQfMgsmEwJQ",
  "key21": "2rNWsj1gnZhby2cZkuTScsLcNG6EzPuV9b3oo9fZRM7zF8g6y1dUVjoPa2xfACiqkNANmoMG67Spf6CBa22Psqfm",
  "key22": "2uVbxA6XQCwTWm5Z7cV3Bf81YiGfvGL9y3emcqi7hts2LfLb4w25T3cY8mDUugqK6RAMxukYhGKJeFo2PnYpvTx9",
  "key23": "2rvXsvzwpiiufku8a9CB6tMfHuDeLMQuGTaK9vChX4q8x9SBQFwfwwUGUPNrxd4gnZ8BCjgqUmy3Uk6KUzkZnzdZ",
  "key24": "4UqZ9vsBEEQStMXvFX2CReB8PxRk34s5PdZ9wznnkpA63iv8vSFEpo7iTvAohdNaRYVjsexqqG2nzyJssiuguAc8",
  "key25": "5aQSsZxjcjJF4hYDLTv3g5WtnetQe6F2wVGHYARvoeRK2JW7WB94HGA96ANXyZDZHuAFRncLnda7HHkkGZDbjXSd",
  "key26": "3R8uNb9Q4fq4q4B3QTUp3zhNLAcq1HMrHg4TjfhwDETE8oTNYE4E2Nd5cMQenfppKc8qyUkUAm1eg38ZbiScNYU",
  "key27": "BtA8ehxEHvGPaa81qaKxCJVL722SrKUb4zs7JZcy6jn1bpAbHJ7gyBhjnZuC7vCLUpXAUbRSwohjXuDkqoomycs",
  "key28": "2niDqEYtiEYoWUhNMKsTBwNLL8HgvknavSoqYaspqDWiihxRhXMKYEGPR53zoG3HmNe1UEvqAqGoL9U3u6gXYFSv",
  "key29": "3mdbVK5oBjtKDdSt6uVKatQnmJNaaNNhw9miGnTrixBm6ivYC3W799F5eQ2LPsUdvi4WpZyMha9iwM6PbBUL3daX",
  "key30": "3T49BEaqNhefEtioai8xhPkAgZ19kV3wJSWTGjo5STpV8SWSKYteiSEtzL7qaAsxr3iuDzasDfPrMY4BZ3dJowP6",
  "key31": "4K1h3TRzA1FNRVKhLTZy7aSSa9AzGV2fdUfcF5Z82DHTVn7i93FqJVgCCFkdaGLrwoXCaQst8pB13BvxnWyCEvj",
  "key32": "3HzDYs4VcRisrE4ZfjLj4A3UigQTQ9jV62xhax6VyWE7xgxZsUC1tySvWNqKjb5GD17x3yx9FLHWkdEoLuCR9JWb"
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
