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
    "4isDUPEQuuF5zDgZksm1VZtqfAPWHtwgMamBxsy21Z11deLAcA3F2hT5bea9tNwP8Rh7AJjDiFBThcAUoah9R41U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVxqBjDMV9LANbhkXpk5un5dAZGzopXVwLaK1BYcyT5hXh57DtK6KooGrQZScpHUGTgmDiFWbHgA4sLa8dY3Atc",
  "key1": "2aViNRwhaHcGZQUGngJtBFVdmcWu4JpwkTG9RLuzT1znteQp9D9j4X83NhJtGaWqmo5eMdxEfEJBv5vXrRnH6S28",
  "key2": "421pdDSFvcAKiihZjrGxspypWgDmFUFMkqnZBMQsRziuqS7gGfqzpPrC7169EZp1xZFCp1UZw5d5RSmqM7TNrNHY",
  "key3": "BGmddojx7r11bU9GntJvDCWAJLQJPKAsad73FkNWTRnRubYTPjiLM32cfNYEtoWR7wPiZ9RUUsdqQo5Eke38dvQ",
  "key4": "3g8gMyfovxoJYsrbf8ez3caFsdCoM61eERcc2fftYHxNV1RoqqhgQFk7ma4axZ7pDbEFQ8f6HKSpcPrkXQTqFwmr",
  "key5": "4vYvWghKuP8iJJ8dGqJdF3MfawKMioBKDhUd1C14iBgPKuJzkCM4txTe4nfFGjiUHdtPUQESogopLjsxTgD17aM1",
  "key6": "2KCwQJaGBfgx187BTBYaMp8FJ9LNQJXUFhmu8HZaY3AoMoAjFCA23WDEnb6PRiQf3c5YYUMMJWkvc7kb2uckNQv2",
  "key7": "44C3v1Ae9Wx4Aqs1YBu9wGfJSUg4T1bsUAmCsQ2vH2KoUVUNbHFEUAoWTKFaManW7vJ2CayVDMKERwZoQHNfNHkw",
  "key8": "hBkzTTRNAWJxjgTCMQKiAt2LhEZzwEKUrAD9mmxEnhw4TP3aSZkKKRpp6M45if7p5VLC9z6e17ySTq7g9PCUQXG",
  "key9": "2Ng8s5ce3JUwdLDmtA2hBf2PCt13hawzQ6hFhJToHwjVTMskAaapSZkPY3RyVrbGbAhs1etQCJMdCpqxRkvfRsCf",
  "key10": "2tEU3bSHsKyHxqJy1gQCnYY1BGUwZQgkhc613q37iHGfV6s6TspN6vnPZmSQUxxXJURciVtCJWLXPPAURA7KDUJz",
  "key11": "4fAx7gx8Fv6pX1YPrDWR4f7ZfHeD8RnpB6r3ZU5ChcZVVHu41G7r6N79VVrzma9xUnEj8mxUTCWajAMqRDsZkEw2",
  "key12": "Y4mjS6VheFQApQgCBwMB7mn9964D1Srvf966DnJzc22qMxUcoin1jsMBDb3c6LomWA9CDfqvvMXSaRHqFUD9oHC",
  "key13": "4ZacJRVP7pEshyUW585396oazxUFtgTEFn1rjhpfvXoBDPgZz7eyyJxQpunTATbxrg48wWvqN889ZdxPx3stD6kN",
  "key14": "4QdSFTybjr1myXw38sraFyntUJdbFrwReuEZHv7q9LqNXYUeJM7X233gY7hAhEz2655XRRTMY2aqhjBfxQwoBJJb",
  "key15": "3ZGejsMu8593aaxmK7MCmXNqyw2rCtJN93ZKgs9u4euPTJL1N4yNjTTpkPzdehDjN8eN1iKPCwac7iyBrNba5qo7",
  "key16": "5gaz7rLz7JQBZtYnpZRHgUwy2csBDaUzh9VfEnHkKZQQ4PU3zDV4b5foNnyWq2oNiCyrfW7XTZ3JvGFBPAo9gX6P",
  "key17": "45t8jyyvc6bxzxqXKy2DwDGEnsBs5pWrV2HpF2L7caxxC7g1dGVJDQXuZnEwiUhKEAZxTssenCFY2nEVc1L6UoSH",
  "key18": "4rMu5QhFdgQ2RiuGiwer3rN7VfxWMwcWSWZBxnntSRf3yjgxCiHoduWv6dMLmqHeYbsG1UQsQTBGGUnaionaxB76",
  "key19": "289EfHRFaqSGT3bh7rZAXEb37KXkWnyLFUZ9ePnnWMHEECzEfGMJ9nCnjP5H5hhSGB2of12M3XGYSzCcM7q5MZPd",
  "key20": "cc26Qz5vdq1LJcqeMsppaxdZMg4EWbQyHn3TtGL2db18p7eTYvWAP7kNJeJbTy8SVMaThjbFhAGQdDXXt959ND8",
  "key21": "5gu1wC9S7n27vH2u6Cq918zkSSpALKMKvzdtrgVrx5vK3dZs6RP4pTmkSQ6c9Q7aCCMFjnXXA3epzXeWsTLuX3p6",
  "key22": "32KqqWTtSMpm4T7jhrJRarsqXHeXzyM5opJa1GPGJr9d7HoUDJPk1DJePxZf2NMEhMY11pgBU8K3o2QvWE3PEovw",
  "key23": "UUPBhVqu1Ms8FAmEZVs2G1WGt2PzaZ3zzmc1FQfRLk59skagHT6wr8UG6vvdVE7Lf7mT4ngA9Vaw53MZQ21zaGd",
  "key24": "29VnxqmQyR32A8WE8KaH91dtvYnVSDwfqAUMViV6hYhB8rP1DRpUwbcU7rHUrbPv3QkRRHiZoVxRSEwvdvaujYgb",
  "key25": "5uu2P1WzGgNU3BQrHy3T5tMcHy2z2gvjkxsy1mLgcUYYaH22jr6ccFBQcy7zT4KWNeP5XZpKbQf6WF6jzTyCsanV",
  "key26": "4D5qMT3xm94ko9xyp1rrhhLy1F9hq1CQJhfZ9zBFu3GN6usN56rtxhq5Q1Lu1mF5Sc1DKJz5zkkyffHR11MoRuFi",
  "key27": "2fn3rpqDoUVfLTsP96X2jpMZYiHvPjs18rKQR92wxpcNYSEq9DTgLEmqojTtGdFdqwXpLdqnLsmBpDgtUmgMseun",
  "key28": "668mBZNN84xTZs2Kz3XBcqoeptSgCX4dKuyRL8qHvmiLDXmr1WzWbdcRHfpviPBVwBcxZojzCbL15SELU3CtDrJS",
  "key29": "3gHZCkFXSbXY2HVstutU4Lokyrn31ynCSBMth1QYxBaDrLDWqKbcppErkTucZQcV11DE5QDDfRcn2YPjwCenj45W",
  "key30": "c6KJ5ZTDX77iKppc4npAuGxtby9TooHDpJZqcZDYYDxkWSPGqyUBZTpqwS9kmdKhYmyNvrTSyHyu9GFjtCx12As",
  "key31": "5AN8aGw3zbFyUkciDwHooGUEjG24v7cjZamK8GV9DcuX329ANvVLeNbRv47bmCQbXdGqBeafDoYjbYcCgpUVQj8r",
  "key32": "axZvz5cqsrzKUQi8gAxPXWaWz9QhPML3MjoinDd6CqBmP7H5dyzee5VMjesvptbEYR3BmyaxgJdjqyNbAnZtb9w",
  "key33": "43sJtEhA1PgdCb4io7tUMDq4SAj8csyQPLdfere8XqyLdHWTAYg3NwFJD5YT1DgLEV7EQGajeJDG9iyCYrW6JD1b",
  "key34": "38nYFZ5vEDLVcawzNksFg3yCdcyDW4NbLTfYXv1Dsh3bSvUhWL5qKqLhPP6fzQUhjDvGQnHgdmp7uyt49ScNDaPh",
  "key35": "279mnvByjudmjxpUtrA9iXqbq1cDCkoNutATwrEtyfN3hDccLVoTApoK9FhvxZAYXQ7sSb1EFzgFRd5cs48eTrwT",
  "key36": "4jVdSR2p2LQjUmaBVicmXy93fUbJ53ghQ2WgDRuSzznBP3vBzYQ9pFs5DDhKnFv8STZTDSguNSiR6gB6pWcwN8zP",
  "key37": "eXSfMRgENZo2gUPRK3FoKATMXtjhw5DJ2r31udD7aNqfceYycg8a98KnL5Yr7LmrGexL7QbnGT7TtkjTU4iAxfL",
  "key38": "2Ffzh2zFsSg6Wey5hd4SxeK3pgBXBUx47smyDPkU8xgJK2w5n2yLefKCUsMEXX3swQrcXnZWTDDRSTcLVERwqUc",
  "key39": "VtWKNqFMmroAsU1kinjQu9WNKrJN2ZniavZSn4P5GSCRmiCiFAm84AwihxjMv1sYtfb8AUzUwSAduPBmCBW4YXC",
  "key40": "yrr88erMj2LTXos4ftBemT88XqrCJaK77nsTVLoQZxgEXCx6yKeqSJU8B1jHUFu1Y1d56dE52ri5Pi4sPzbYRWJ",
  "key41": "4KoLz8s5EFfnqLbNCX3Xewsnd7bcH4wbgDfZbqsYVYRELVihH4HAe4hgSqG44gs2Yw5B3xAxdAVT41EoW8z82NNG",
  "key42": "2ir64G9NjSYYdaeGRC8ZRt5ZS6muUM8ZhwRb7cMTxbJmoP73jQQbgpnxj4xEkxFmWxwh92TQyFJJVRk2p7kmjYEy",
  "key43": "2i6o9u1CoYyAy4uibgBo6RPzsdVS2XqFuYh1Ggk2rmqhNjUTtzF617tgyZUbodqf8UdHJ75pPs4xAPbkf3698gCQ",
  "key44": "4QurGLNmWtZgeoRgUvY9ui5VRyjDa8xBDW6yJNddxhr3qsjDchVzRbUfX6AZRonpw7s6STcLrja4xTrJcdgWTC4X",
  "key45": "32yv89EwoMX42YKTKehvYhz9rNbENGgnUJoLG6mx3ZRP5vQcvF2fiNF43DBgPJnLztCA7yLTEFbsdRUkJ3kKeFNr"
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
