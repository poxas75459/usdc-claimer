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
    "LGCT2EF5SpitkheiohhvDCYtbXuWAMM6z3ahh48o7tiQKhBAwNBheZBmo4u4CUUfvHDzNGZQWFRw6rrgv8ryZjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPtbNew7qcEwEom36kRHD6nyGKbkWgo2WbnGwmMgnmLSaJCykpwM7HHSAQUtoij3ojmueKThYgAv2o4SuNx9u4Q",
  "key1": "4ww7SiTRL8swWaKvKY3z3FC23GhcsgZuAB3ougZxU8mg2ozotdQzuKqyZcTosU5rNHCv8b69Kyqjke6eypcVbUmM",
  "key2": "5V24RWcPBCsq3nxRqW7CViyE7S1Y8LJJhpV1n6xJWrzUBbwdH6cNh1PyRifvg8MkB66V5iwm9hc6JUzmYTyHwNZo",
  "key3": "3rfY2QM2UErbiuJCn4Ar3HvyjVtUveVtEYBjuaSAqvMJtFbogN7VutmQ72KtEK8DYojvj2FKLZEJj4vyyr8N6WVF",
  "key4": "2r4yug4eHkRNUeADJy7ZswuUPKpDKKPkeM4rvc4NnhahpAmaoVEivDNLnKnBRbyoaYSRJzi3qEBunheHAHqkQvEs",
  "key5": "2HcuNxNwycjhizhhgkLkQwahwxg17A8KdUfnidR4ocpQK8QB31L8bAk4FvWpU6gu2bmRcb3JnCLUWQDPqW2TbbrB",
  "key6": "69PeMhK5EXRL5UUDGApRfG9TwXWfo4SrHw3tSWnwDdwf3CVC6Zq1tyfgwvdwWpmAHf9G34iPhQi7znsPR1sZkAM",
  "key7": "4HdWqFyUQhjv2PUDgxHtqpqDMxfyLYhwRJLbgRGBTcEPYbTtQp87cPru9N4T9mNYcrCM3KVHre9NKjnXerBK5Nf3",
  "key8": "3mbT2hXyTW6B9rVZZseqUf3Dnar4zFGDQjMd6LLsyCXCmnw9jAiyXyT8sYZgsPAqPh2fAcpV3z8T2uR4tovHyEdG",
  "key9": "FnnUmG1tTHHd36v9rjLDhvvdEQ89Xq6hshVtvNiA4zAGLL5ds1DNRbQyzT9r51yJmZSpFJZ1v6na17rzYK3f1FL",
  "key10": "2x6Umu1r6Wesi9AwP5BQzuLWgMLNoxD9K6ix66mfjz5GXYCc5wArWbsz2As8o1EQirwCRnxLTFhJaEFaNSdzEtN8",
  "key11": "a6mVNhT5md9ytx1n9i9rw2u58BwA7nAWcbvHPwXR69LZkD4bTkzGePmqKdyBpF928i4BbxPxYCdMLJHG8uGgE6N",
  "key12": "28ame3aGDBQ7W7wKee59BZ2pKFcmu3EGGpuRcdrVMRZK6GxCz7fA71wRjS5Hy7WbKpwHQWCjccXqdZ8kGuhAyf4K",
  "key13": "5m6nqgdaegQNv6nbhRu3VEFGS3Jx8AdioehHpFvJ7LJBFn5brJcrBCRNsqLukgeQ6nnUVvAp48v8suwKJeSuHyZN",
  "key14": "2MMRZYeC47AQ15AUyNoGSfWJL5jJfpfrBD5AXs78E5Xq6dD9rqTgweXFe56YM8mN529ZD2DYJizWmmKRzKJeT4gM",
  "key15": "4Bfu9qtGYen6Gur259B9qGEu5n9ieG7LVzrPs582UVb2kpoMgDLwKZE2978CF7GkWPV6HF7NbLL9wYjZi3y11G86",
  "key16": "4hUAgiS9pJ1Rtmpp8u35ZE5bYkEyXkfefBeN4mtc7E2isDrTGqKztHndDodzVvhKPEXCYs2jBoBqXcRXGYYM9bvc",
  "key17": "28vnJreWxTnYu8shM6jHuCwgN54SEpkAFzvWSGVQ36wyeH17fkTM6FYtmng9C8DJQyLXKkT7SgknAdVFAcMYT5bL",
  "key18": "3kwSaGBEB9HGzRqKw6esbgQCaWpRFzVLrePStXH6eGfsN24F8TTVRrW5YAJqEJSyJANwukU5ZVgLKWmfgKmMq9Lc",
  "key19": "5SGYr6BfFvud5exyMMsbg5n6rGJrkGmVx5jjppMPqdRR2SG7kNbtC1Ude18utz23fvDsFPMiGjDWb5Eea4xxi8uS",
  "key20": "4ieYhzCyhm5yX4dSiNjffeZBiAXGaWpko5Do7DZxXyRo4jFFEuwZfFUspv1UP8afm4k2QCZYCLAw4BEnhWWjdLgw",
  "key21": "dNEbNvksMwRSyRXd3yt2BKuhACMvh1Cp7aUf7RLCTgkgURGmPxqQBRxkc65izXsD1eKfdJLMBuZeMEZANruvoHR",
  "key22": "5KHMpHhPYL5B5NqPVKBMGpTADF7BA9oEdB5u4G83wJYWbhGwFAnRAPm2aaj2TyAGdW4ehyGLDQFfJAwgFswfLV7i",
  "key23": "3wifm9B686BERzTjMRSVqcRFTGsRuQKHL5chWD83ethCFxFC4CN4USAKk4AeYmTTG2DBpxodwwtJHfwdYs3w49D9",
  "key24": "55njDPJwhZ76FnrQGE7yGZyZ3XzXQsRfN1p9tVb1ZeJAcLeVcV3mbPdXRjjDrsj49PjUcHPh3pDzP895McF6ZWpN",
  "key25": "55fRXpkXRxpyf5areLT4MBwLdMZQH3hT1yWHmeM77aCVrQ39JSw3ugugiLt1U3HALm78znKvJHn2zraLCiBGEYfU",
  "key26": "5NJmRBePszB8JPgKYmxMH1sgzxzct78T3nuALVnQXZuLPetQgernpwc29AZTHnJjqz8jjjRBwezfttuPrq7H7q2",
  "key27": "b8MHH2mwLwxNMXDZGhJ6vXV4QWRW8MuJwRaG8bVaZkYquzGJW4kEdGLNJrngS21YcejqKyW4rKCDQfDaJfonGRV",
  "key28": "jqBrdbECWPVLUBiiGLnSPe4aYmv7ZabQHgK75fzyzh5ycMwD7ZbDFDjkXiHBq1DGv1zBez6ibK18BU3h9go72db",
  "key29": "eHbY1UGdxyGGqafPt7ca76nKZDPxGjrvjucN87uoTiUkMfG3bqaFGgB4FMuACJoKe3n3Z6z4FeRkDtNCqfKkiwx",
  "key30": "46jE7UEpoQ43hAv4aUPiJJfmCZKJodt4K2bVvxi5YK1C33Q1N7h41h5oJfK5aD8XYBgBcHdNnXz1WYEp92y2r9ft",
  "key31": "2m9BHJ4BdBfzuToqoLWRjMJvgB99hLJtL7LH44aPzE7iQjXaMcHhLqGU5LEvyE84Q7d8PFP5B1E4uPVwBtGWUzAW",
  "key32": "478HHYbDPgpGWMU3FG3q3xCFX2jkVc4ZSiYEpLDBTB8bapjC9Z2LdZxgJn579sb5qCiC8GdkMTT3TybNiRMBcrbT",
  "key33": "e9JU9fcTC9NqndxzWQSNQUJ9bcxQZQnVShvsd3i4auX1KQuk8XgmBHrPBhCrtFSeUvLUVxKuTe2dE4GeEwFqLvy",
  "key34": "5gaQE5BCHiGuTdZN6Tv65MLja3JuqzRHJimdJ6TdeASBVxaxdx4CJhucohPG8PYaPESVkHHtUe9L62C56SBbtHd4",
  "key35": "3toNgjURQY6xkv3Quyy53sQUW31GwELFF3radf2vqkfbvCYVx3WvVR8rJJnKSgUADj85WkXXDr1U6XeN6RiysddA",
  "key36": "LmdmzMkQih2j2CPviYBuZUNMoPQ42zoLs4zhzU48CWx2yCVVkJ7qCvncwe9X3BjMojj4jWgx1yfoQALVpD85RLu",
  "key37": "38YrA3pcUEwDfLR8ibLH91nDptjvH7RdsPnYG96erYgFzW7XbPHmJK3uHF66yn2VGmnGFhHDbenyD5jErFucsyrJ",
  "key38": "2L7pMMxds5oASTogpuVkxVtwgZ52rTJhLQrvDn7Qd8U8fvbp2f97a2QvejriBc3jCESb82zsoKYc5Piu5w2mnjfi",
  "key39": "mWDTsWqCPYyoHuqLCpYB4e5ujxy8VJ1Xbdi8ntGCMpFZ1tzyTa9UdX9ydpXLnQqtEeuwGS5QQJobY1gQ6GxEXkG",
  "key40": "2EaPyUS6t9WDYJnAHseVijRehy6ord3AbqHgCF1dQ2n7nJdNXQij4khxzCht187uMN3nBFxWFPcPjenEz5tR9LZD",
  "key41": "5aWSaDGq7AEti27VuTQFH47m4Dt6hoMcRPh6Zi1UC1kb9CtJJna2xgm3xx6P4qumG6GaDd5H5H4WUknhMbeCNaoA"
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
