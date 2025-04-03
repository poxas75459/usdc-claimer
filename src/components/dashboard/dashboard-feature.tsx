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
    "44Phr9pz6psqFhZbaDKntYRdmq4Qbmunu8V4Mm7wPtz4teTxm5f3rSiVZQrT13brCBXZut193F94NJktANZgTBRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGDKGs1vPbBkcgmzTyrNdpbF2RLQ3KtUv9a91N54aiZ8FSUPiDgEzVhgpXtAEmsfRTwRoATXd5SuT8yN66iBirA",
  "key1": "2iqoE5oM56wHySME4ASpBdCTVrdbtrbKqE9eDuxAW25ku8qowDEYCFKXXQNfMCrmTCHasPgZhrZhtysZZGWa4smA",
  "key2": "3CZhZW8wTs6upS4hnzibSQzxKTPY76ANt49p5Jhq631h83dmyLht6KyKdcm1mi53Tz4pm3fGoUAcCX8nE7GE6vYh",
  "key3": "2ux1DPG9W7tJBquwso2zNuPu67MXdAWtUUZjChfvswtmR8fEEZWMP6SF8fmSeBx7xeNGjYNzqHzn8ZNvR7wjz16p",
  "key4": "2EBoUHtEEeaTUWGkCjFesAvvk9AKFv8dYbwxG4iEWU2Rqtauyomm3kHRTeVEhnbAo1fwhNrTmjCHQwqhtUxLdeEW",
  "key5": "3LNNHTLgugKD5gs1VZcNcuJvwy1QtqJPraMbbXyasAkQoReLyU3TcHvnhAvjGbiVpFeY9uY5vNtRNEDoBQWYE3ZA",
  "key6": "3ZqWy9dLC2j4VCsFbvcWzpUhQZnBNk2BygcoQ85pnynzf7vPYJCrYyhXmN4uAMNT9PyQYNxedsETJamrfPizqzxc",
  "key7": "4YmTE68PgGRfn7WQMozKpGeVx7YqSaUMBN7nYcAtkKEY7CsfQjfriRyodmfgJYWZnxo5nY2X9jv87qj3Xpxgg21m",
  "key8": "4er4gwZQWdgVbddAoWUX6pmrXs2vkvh6rhsxJ15oD5CgV2m9FD6XH7RUmD94yntis11zFdfz919bfSvNu9rErE6y",
  "key9": "2UFQcHwh2aZHntzHh7L52dcva2RU7aw8jU9pKgCdxtykQTYRTfzwQEYy4J8dtJvdQDKbrwxWp6bZ48ifg7hRgATg",
  "key10": "aAWeSEDaZUeePU39LTf4bKSrzAHYq7oYWyAYC6htfjbKiDvs2xpF7odzA8iX22AF8gsyRorgpgHauDFpzE3rFce",
  "key11": "2c4HPiU9trSXRRToqcbexw4wN5tc4YfG99bqKhpPhiCMePtWiG3KrZZQNPC3yqGgMkE6GPpP8Wge1XPo8x5BJECq",
  "key12": "4cXUAeMw9gaVcya75VKPf5nPtTB7GGT1wEo2aU4smiBHLtr7GdT6W66ED861r9egm9gGTMHQLUYWLiYCL39FAkev",
  "key13": "28sEUfBQHQkxrRyJcBw5tgBJYQWueFJ2HXSL7UJMAQEmmxqDZeKWUNJqcGAa7dNRz5Vcr8KBD9wwYPnTqJFVJ4KM",
  "key14": "2GrEEebaDHDnwk6fCakzimudXuFD2irZgJ73YThtyEUTdSjw2c8C4BqR4rMyvVfSRJpU1cgE5QxUh5jMqpNNZCdj",
  "key15": "5NAJPw5hbfpigpJkz3ivxzkbx95k9NY6QtBqxDarcLJDpGJH2e93NSLAnPNWpGdpv3csMwgtW9F6gy2uxEFaWkNk",
  "key16": "4jn3sDX7gxfNnmWjzgMt3ztwgnaKKPrFFHbopb3pab4xm3u4QN1vr2v9tPk6xXafPknpexhkgoAYi77LqurQpjn9",
  "key17": "53CXs7XXTbGHooCf3766RhNPKapPLxA8PTo3k2RGMDuy5Qfu2f7jg6hbVjJHgxjUohSwqD1QpKUvwDeVJWyzT85v",
  "key18": "S9aAG6e9RY6MXDWzz7UnRgYrqAxZnG6CniikaRch8wKfoKyFSM9LbMLUDwuWddYzwMUa139FtVLh8RCKTC59jkb",
  "key19": "5od4xT8tA2UEqGuXN2s7ZHR65hcY6NoiyudHsmvcPa38Y1wsdJMUvYsXca4TBN6hi2nnxchsjtZPD2SmbqdGy1hC",
  "key20": "4zwwy3hjLTpZHAWQZt68hDZSYSbcrkmnABLnSSEYSyvTrj67B88WqjgxcNjPvZmjHDnCuHucxcKbQ8JECRubUSnb",
  "key21": "3873u6jPH16hSycfc1yC8SVGZ7DWSxgZ5LbPAKBAmTJ1vWhbN8ADBZ8t55s9LoyGRL9xYPm5YYA52wg6Ccju8p4d",
  "key22": "YpWQQiSeQFHsXkDaq6qe4kVpDMGrV614QPTnyKNwdxebzNTXyZW7unmrxFhphwW5Q8Q7tEjB4STsVMHL5rp6aJr",
  "key23": "5rEnWFkhCho75QE95SbLnUUd9SFEM4khvSe6NAqPYrDBzm8vKmxEJfSTK1DApgE2uwqYij7n5GAtnYF6PAtUMaBi",
  "key24": "XhjQAdnAzZGZv4dLQpHTMCZcKhFvqyg446CgiTMXC5VRYvxJa8ZRAUUZGuDeacPqAWEix4woxmRgeo3xaSSZaZE",
  "key25": "5n1uokkQaWNk5he9TccxJuKdg5WUiMTWqr4zBuZxtiAgtU2JcwjsDqJJ2exUpN1eLUs2bqshAg68PVuFtb67izL1",
  "key26": "3ecvngbRMdATNNtFYZp76fFLvGdaUFnAmisuBs8xSYDDhUSfw19e7Eqq2rqNH7b4VXvZuxtPgS6JvgYkVUyZwfh1",
  "key27": "39rJiTNDttGkLuf81qTtuXXyMutGNGgeEDGrUAiQNJ6wkoBwps8Yb5ZayKmE84CJ7WUqaiYYSgAscwe1Qe9sDTge",
  "key28": "3eoX1Ftpmq8NH6soVimEnQHoHCJeFa2adC9NmSRRjVQB1F4JjxCuVfXZ1HcNfQQqrSAg1m8yDPc1oQtkL9cpd6kR",
  "key29": "51p74qL4YsSud8A6auD2YTjCGsy2RXRLLeQbUffR6b9N1dcTMdx17VVuWd1sA56mtCFBkuDP5zcWGdex92diMNji",
  "key30": "3qKJazX7PFPH9ycqhr96ciKSR7JGbycWUXPb7P7GSSxjwZUo8JEvqpt9PnHzdkQ2G1d9Fsw3THAsDfxcAivBEUZv",
  "key31": "4Y1gc18fQRgM4XkkCKxarMDieRcoFTVnej2rGv9mr5rweZ5YTnSFGVWWViNA3TbCTBpKVpdNzgy9aF1fYJubmwFz",
  "key32": "2zaQtTgQgEEwcvv4ytA6r5cDhTbecFopCxzmwTXBspvxKtY7qgGJr7AfDdi3eMZMBB6PTPPXCi2c3RKrJqFsWLBd",
  "key33": "ux3T6ddtxrtEKB4bZa2RBXxN4ecnEjXFmtKCaRaudvANPNheAfwTb3KVBbjBAJevLHXJ2ccJe6iBZzSDbLi6JZL",
  "key34": "2i3vP3MxBGVdeD7HqFxUQbpEChhbmUenX8wcnw8waSVMMdTiVRrZtkVmJKKLqjKwWycSL3hD8Ed9PF7nPKWrSrR3",
  "key35": "1jqnjpq8SQeyxCQsB3UECSdkeGRRvpz7JZJfi5jGMSs67Fvt6FrffZo39M2JzBTg1ZDwaSD3bRVQ8PsNHPBGHq",
  "key36": "3wDPY21p6h5VKruYZBUuLkdq3KU5wV3AwZepEFTgdLURmw7UUiKgodUaLB69R5kMQUn8zh16HvHDB2QaRfHX21k3"
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
