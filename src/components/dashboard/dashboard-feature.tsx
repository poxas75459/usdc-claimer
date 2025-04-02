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
    "3Nd9vm1KMoKQniAEwFrwCLsvbjbZDwSafCrgD672BMyL12ydmNRNUdzjgmKau8Lwv2UAFrJMt3UeYAujk4wPhR5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRo8PPbEFU8rLasPqPcfqr7uadhrg6ayUei5KmMFy4JqVGuhUquWvbbojYghcrP8adu6JVv2NfcAAgjLFT5jUkL",
  "key1": "5giVQDeQuya4YTb9fkXDbRUbPcqEY4L2D8cnPweiF3kZkxGKE7CscYQ7aMAnv8fnsprZhzvNC4w3ekZfHbuu9f3u",
  "key2": "59qZmaXhCFPi1vZvrUi8TwGdKJcidDPLrAqgi4dgHkLiioRgeQBeKtAav9NTMYSWQA32HJRmrXKcdeJnoeGrMNUb",
  "key3": "3FUpgoufduWRubgjiYKVJyJKud1MUCzd9bdg9x7Sdxgt9uWAERKTd68LNCPtvdMG1ouhwxKrLJn2WbfK164ugW3C",
  "key4": "4RU4Wz5Sojmjpu8BMQ2N7XiuJg1bipQV5kd5y7Dojsj6NiwQso3NN9AETBPxGe9GzjNGLeYhbZNsoXgccNGw5VK2",
  "key5": "SqioWF5z8oX96L1rndnVJ6SbHGoJj7fu5znrEVZtJjHZ8uDjmVJ28nEjyLavBcbYe74RzwWiWM4AtzPSsXWSkrA",
  "key6": "3pY7A4wNsmRBXtHwLfuu3g6n5p8bphzAMHUiNwzXYEGQVKJFPNeQBkSntwNjRkDchAPTb2FPGux2Tec4T4UCmzHC",
  "key7": "3pWMco37wQ6LYakXDcLKGRLHT8xeJKxbE5MY5GdseZvS444AdWZWyWW3ZxjSAZbrzaTwGc4yJAR1nYfg5sKuRKUE",
  "key8": "sdQaAEFwhgEG9jhYDJrMmiExnrcmAPnGQ1Z22ntUfkWZB52vHR78pQ4BzL9icA3TzZxZV96rNQwxSNT1KLQK7aN",
  "key9": "5sULu4txZMkRnMRYPPgB5D6g4AbsRs3YyiT85q6Ec2KhJkobdwCLHuwi5M8xaWzWhQbBaQNWoKD2JZ5tc3GMyAad",
  "key10": "3fHvdQ77iEoE77smGasNsReEbmFW9S3E9Vr5w49uFW9ZKA3f3BX7LeGf6LbJvcdtpLoK7yG6WymRGNCPwxT3qw7F",
  "key11": "5BnmkQaB4b2u1e19hhHPRsn3j5EJevRmetcrEaUu2UmzV1199aVe3fT3nqUxq1w8kmqYR3okTNWwWtYZNjSG7ofp",
  "key12": "4GKrsanZFmfirbLva9FXUSD9teQN5PFgqrJsGrruB5BRqfCpnxB6UVncxYQb9NbovKBd89StYXx7yehWKRYP9R6J",
  "key13": "2trPEEdxp6tDeYFVGzNzr9bTmyjnuxFGX1EHgWjBM6jLSQUCMokgPVnw1EpNZoSmnGmrSyBJSghULeuok49Cpqn",
  "key14": "SRhd8Uwj2oaqJnCRFWEMF8FjGntdNripf9gATZWKYYqc7EygnNtTie918dL5zZYcKybqUBd4XJFzDm8jMMzLRj1",
  "key15": "3ypaCoXuMeQNTGYYueZH5mxLeWUbj7wo7DBbDEvjT6kK8i2iaA75pVSfegLB54Jm9sTPwbedSks677waJFvHk4UE",
  "key16": "1oY8cUZkZEubMa17bhHRhQBmUqZAYrheXrB3uf3UFrjYWTtEapbdDBeaZckuEsX6YPDA7VxVkpWn2sF3jmadGSA",
  "key17": "3zir2gDQChwghDctcQQNUnmPhP8BjcfE3p82iDHnLK5K7obtykn36te7PiMosHtaEvecGqcgqNnvgU4Nw4K1am1w",
  "key18": "5PukSnyv1GUWfvhzLTdZHR9muSocGtsWbcPS7WqL5oNdsBepuEGaXoHvH9YcSjyABivA6tMUQZy75P19jxhFjLB3",
  "key19": "pRoWNMDMgphMvaNkYjPyu169eedYMx1fsRZCP8pzM9JAG35vspTUZXWGVos5KBeqaRScBZwP3EoCx8jYYLrN6tP",
  "key20": "29LmB3UMFNDEHKju9DiiqiLw7CEpKR46YErLGnWpZxbjLbLNF5PrdrNYrjocLkhCPu4hbgpP2zerSVG7bqkkv6ey",
  "key21": "3kuDSSe4ggYMDfiujZRZBDSuj8QPzbUJmJ8deupx2VM9hhRxf3iSesvk5y9NaJzPFaovric7KcmRHkFzvC2K8Jrj",
  "key22": "2ty1HBG1yMVvhvsq1URV6AhwgJ4Lj8wziUrCSpUHpiFihM66miQCm7jPNhWHeGRCETKMywxkeWxR7eiBWu4bLe7x",
  "key23": "4EBuA1uYotnqxYZGA7QjiLcw4UdbmzaRC5Snni9Q8Bf3tFcNkr8vVaX33BG1mUrF2onaTDYGtnPMz5arbmQjC9JQ",
  "key24": "2zSiRAiMctSGg8ZXbuv57Ds4WArBXjqtF3f5soaANnMsEavZ79519kTJy468Zmx6njD7tSMJGGcr18eV89SoGM3D",
  "key25": "8FgzLTVh2HrAGxQijQHLE5Xw3mAKN8FqzkJrDoDt3nG4hneYVZQkdwUfkQ9Q3SSPLj6AXUiizihs4MFbuKMpyyW",
  "key26": "41W4ECkB6yVbYM4Tu9RBqMpzo12aTLxfHX26NJW96TwPcCsG8EZBLu17JXcgCz8asSRFCs9edUSW1sw5A1J1BL8L",
  "key27": "4zwufkBVQ96tsQEYJn2nUNtCsMzmbp53HXwU7NEJFgUCbqpW21rcggkUE1ytd8q31HYyKAjboEPv8iHVpKdoyNuJ",
  "key28": "4GPg6xBgDvufCoyHpffxppKdYs6oAuMp6c2vPZcEnf1UhY4ZjxYzJ7M9BJhJZkqZo7GP77dJFUDMf3ECJZDhb3GE",
  "key29": "4CU1eKyfUVHGemiJh5FUAfNZHQ9Pwv2G9igbGY225M3aYAPqYTpxjfp6Vk64nGXoUf8wk3B1gbyMCuZUNr3da9vK",
  "key30": "3eZ5aw8CoH5KgnRch89ah7noAHDJHy1NqcRUb8nww2RBVJtwc6BfckYKnfBawm3VcqyknXprbYwxiPhcZ3r8kgjp",
  "key31": "3P842tLkuspHBz9xhXPpERkqVUpc2HRKpxDvZsQQJ11tP4YG498hZVT6hq4y7YG6w7ayjubnnS8QEgEk6MGgs51n",
  "key32": "46RnSUtC1NAJxUCa8ZJwkWZjS15qqqUbEVwkCzZbkRf192sntAh1VGycoeYqorzGsAE1Xu9uyA2tAwUpBAaXFqTh",
  "key33": "56VQrVrrQfVgAzLrQnmuUpD88NQ66iSM97EtmUrQ5e7ZVg3oJNguLWAWBjKZHSWvB6vM4GegV1fcY2Xk88EQowvK",
  "key34": "5ZmgzQxManKjYweoYowgQSpXECCBw8yq3JQcCCzzq2Li5nV8u2q7d37yLvDccCPyyif5f22gdx5DFfBvkdMfSJ8G",
  "key35": "4J4ML2B5uMNcztmHzYTmTkYCWHRRrjoDDUXWKhgPXzXA1NKqtBfFrHgUsWJKx9HvaE2dDJMruMzmjwAJqFQzmRdn",
  "key36": "4t5u46H94Trg7oBFyutnusBi6o7kdsYsoeN7GmvcFZb3aViY5PzL3VyMoTR8dcSVcMzWj9PHonst3A7FrthXsgoB",
  "key37": "49KgrZb8y445VK5jWe7CC985zomeuiXAkMrPashHSSC2L8BTc7iyZrunKhvokdG4rMrDkiEvPyFvXSFFPFj6yuLL",
  "key38": "We1nZxN5XcZaV1UUjegMKhsLkUA9Tvxv1qVUFN99GMZWFAjdkCn48RpcEGHvKc2k692FpMc8VMinUyWqFBQkSpW",
  "key39": "4qNYgdtjc3BgXwUswEx3vPLwKvVGXWWyZAk8p7Zznt7AGPkxDq9aiLrYWMJYMwYvuiJ4oAKe2DdRWK8QMmPnsRVJ",
  "key40": "sJ7a6pCHdrDApqHSs1TphYfrU7wR422fsqZ1Qo5uGz8hMpv725EgUjuhBADcRgMxm4rdtW2NSUzC84u4sM6Q8e3",
  "key41": "4VvahdHJkjajzrsT8UN8W8B8vy1BMhz3uGG8rqz1MnFgCD7E2VozDbGsTP7UmcrZhABu267fYT8QGWXozbeVXvi5",
  "key42": "4yDipjWTEpEQzwnFFpNmdPXVEyX2pTg6ttLCkiXw1U2yjkW7ZnstKmG5LTpm9BbQXup8LwMrs8TZN4TvvMBbv5NG",
  "key43": "4ZRKcvZ32uBTXCUiaJCMatkEGBXL2byNYrHc5YSbe1ntfG8id31uduTTAcFrgg1uwF3pcMafCrLsFMfBRhHzULc9",
  "key44": "2MaLUE2b9gr6o1TgzkEHkGqjGVjbXJKeQpcpmGq5NnDmrfAU9XiUiLpUYv64XpD6tj8ERPf6TRtsgJ2n5agcW8oN",
  "key45": "2aJJJeeSiDYwBK1o16fzE3mdkzjRoQErEyodnRRKUTpUf6mNrkNJo1314gbPrPeFKjAuDHmQT2MgtYwzFy74i4ZC",
  "key46": "4HWDB4sEqCNiz3a5UHNQhZvjfGHdsutVWH4yGBX9YVUKqkwNRYuA9TSyWHJkoXor9CWi4HFEpZhyTitHxbgNH3CT",
  "key47": "4wGb5Qqre6ysDGTJec1xZQ3tCt4QNYExhfKPaQL5w491hsgZ2bMipFGAN4LZJ3qjbucq9eK3DKEj2YoxWmJVPBEW",
  "key48": "4eVPV3wZ4MHjXE1wXw9pA4BxrSV5vCmhEu5qLYUPxjz9KnoRJAksQg3EPczho7THF74oBXg6bihd3JSfQ9AxtWDh"
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
