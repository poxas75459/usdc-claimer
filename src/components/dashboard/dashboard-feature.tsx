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
    "3R4DN8SR9qdGMbv4PgrTosDk21A4KCfhcbBHQTieQBwf9Y8eA1fy7LL7MEHZPEZGXzQKEwsL1GcPPYThf6wmB8BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8QxMPY6hNouQn5EuVydcCq9CyBcU6T92w7zepEzjpBV3FnH89Jjv8Um9S6pMFRsvF48CZX87sDmAqKgaQb1Hyh",
  "key1": "4QntPSfRSAVehqD1wk1qatNLSX4rvr3bayfrJmrWgkSMAUPUps5omLb3ZiL1mzBVv34UcwpVnsvypPd2jjKVPp8H",
  "key2": "JRNxW99ywz9fq2WZzs47WGivFKZpvBTjFk9d7saY7tSaWyq8oMBGVYVdTTZfov274zj3QAVfFGUbs4Xy3daj5AR",
  "key3": "EJJQdv56QJbYk4j2TAy5eghmTzhsQFFvH6oeX6BqbLQtLPhUfdkU3Hdg5w2hAopmdvixG8SQKC4CTV8z42nqbVv",
  "key4": "2hYYN8GGW1jpmshTAsfYoDDnS3btbDC4jwpTmeF1vFUYmLm9vMy4Se4WBJ2dJRaEL12Hqft9MFKdc6WPWs7frgGe",
  "key5": "3HnZLeiEwfdjQnYLsQm1aNHmsVnLHQsYmwhF2MWoPqC1HExUQScA6JuvqRpG693SXKQwHh9tLQosBHxrfNkKQ77N",
  "key6": "5ryJyLRXhypaFjPRXVx5svq6K1D9itACN48aCEec5abV6fjCKDCo39H9eVBJravQHRdmgPtphtPvRX6zQTfvo2po",
  "key7": "3U5E7mpMzTGukQGjMd8ezKRsi75AxU6VqtgAP6fQJx5Gn6Eqb5yxJ4MbzSTuyun4ypfbKXKnqKs5oSmSFu67JXFJ",
  "key8": "4dxyLpwKbMg9jaSAdbCdttDKcT3deN6KkoEC6cLF3ekwJW67fuUm5KXNGtDgb3QqAnbgooM44ZkBLD8Jkp4SHRBr",
  "key9": "2U5bHCENiPXc5R8264wz7CURmxoLdegDHHyjwcyyWKsc77Yttse4i4HAz9gZT4UPdzcdg78KS6k9v2sZ1Ja8KrTt",
  "key10": "4YYedRU7X3VaSm1qpMtQqo5DtCTifc9dtwYTtrncmZd9myPBdmru9iBDkNrGJzHALL1oKoZiqBgWrHMrAKZNd21e",
  "key11": "3RQ2BF4LM5T77Y51tUxwT7vraLpCVvur42fvD41U9XkBiQCFYhSAWyA2nphNSsYrPJkdesEM1t83mMbDXeSu7B2Q",
  "key12": "3z9RyJ5Lay8BYs2ajxyfKT12KajFy9sLxZ3aRztKTDML23jQzmvKNen7F9eog2V9VKraNvC2sqpx3ENj5mFXaHqv",
  "key13": "2aL64CUsTJ5aFvKkjg6aKe8QKFZnS3fPYnqLvyGr9si2omU21hJK7TmLFQiyWEypU2GHHLd22pkG9Adyz3JWKMo2",
  "key14": "4uA9kZyETMvFSYPhQroGvrtJSVJ9hUSvbdCJd6osCnXey75ytw2kuYDmLXRWMi87LVQYai2V4xHU8jt2mYMFEAiY",
  "key15": "584Qe6NJkfDta9AcnCnTRDdwYWNgXeihCzwN1hL739Gz7UvvG3k8F4ivuE9Bbq5rN9ZhntfpKQ3eteri8bco8Feh",
  "key16": "5N7m5RvoCRDMvRTvwzC47BqTW1LtUBSiYEDTaYmanQLuouD7G92jzJaoGb82P7uL4B3PHKnwC2V4xXo8v8Gd5Y7f",
  "key17": "5gxArXLkRZbQKNp2EKX8wpYmTGFoTcF1nEVCgaXPPyP47Z4bME9LoFwBiFuDs7AibYCtGEoJzfpoKS9DnzpR1zB7",
  "key18": "52c3udoND9JjRh6JJUUqty9FjVpkCrz4vxG6bdMNGgFYq6grejBEWTq7TwYPVMcbdG6SK4HbeuSUW8iGvaSPoPCu",
  "key19": "5a2X9twNXRXanEwCePUHMfGxdNKLweRVQ3zkSUfbmGHKDaW5gntMbXj21qbn9pTPRUxEoAFX8HcKJq8VR14U2m74",
  "key20": "67fFxYTWnYRUTHkzCHu1p7rghgqG5UJj6hwMMwjp3DFQb6CtUCEpcWCNTLCrtNxFRMWdf1J1VNt9AUDCtJbdLG2p",
  "key21": "4nvN5VBSxsggGoWoGuy1RbzUxpnWCYVdhrpaYPChRnt4fnwg2v2cXwYK34xWTHkR7PkCgzTVGtV2gdUfi8vAgfcg",
  "key22": "4Jx8JybLG6LQruMETNg7DJbjWo9c4hivLmYK29unBrXiJ8CeUUsjj1LF8T86NPrdM7RPSwTHSHbKWgXq61eGz1s1",
  "key23": "3d2kzQrYrztGjgjaxNAw2nJRoD594RPME7coHYbcuZ8916naVV5FqSe7wFNEgKtimeVEBhSLWE75FCMbcPwyX4z2",
  "key24": "33xUYGjK593e9YcRkXrS4hzPbu2AjC7S7ArKMWz1ijsBXZrNyTKfG1dqSYKVMW3NtmyZRS2nQBHmBhZgitcdmKj9",
  "key25": "2HjmH9oCfoD2ZUDuffKpxa6dxE2gA1wPwAqx1xsuiqUhYGbYYQjFxLBVCSxxHKY9BU4cQwp3rtsPkFUrvFju8wYe",
  "key26": "ezYtnppTetzfwWjdQFPaREhASbKLLr6gSi1tQy9MfPzz11dcXvCyRByqHv9txhrAWYxvXj6J4HcGPrMKtY1twzw",
  "key27": "zmVJqpimPmrxqsnYsnJkPkebTZERapMfaBDwNzh8C53JfNc4fh4dEGducSoFdo8wQWpkvbNaawi24xNvt4FiNH6",
  "key28": "3RFMDY7Dn3ME7RczsiKJr6eG5ZUXyDBE2SBjRvFwGCkhBnKPDBb9eYXAfKoGyosyth3wDr5heSzamVi8F9Zb2kX7",
  "key29": "2cddd5sFhC78JSFgAJT7sRFHRo1CFpmFJG9EhSdfsy3JCmKG8vcxkTryXbFbrbuo2bhix9AsNt7fhBghL2vujDuF",
  "key30": "3sLbHKZ1RUPk13sPmyx4KqrNq5zVBqELMbmbA9aehZRkMKh5XF4FUcVj5QPqQEG4S2su9QqMMkTyPSkzgJzSgQY",
  "key31": "jptJprT2W6ZieoJ9LMQkx11e3jtBToEJfK6X4JpAywVQo71Qv4ucHgGUerHsU4a114GFUN8Yrpfxt4qWduvsca3",
  "key32": "4d5nRL8W3FJidCUTY7WrGvZiXKmoPVda9mhnz22Luy4GbVTfKE8wsoSPdibHeJsAFFoB9iYArLdfoDueeFNVFfmw",
  "key33": "23SD3wrrvbuPMMNxwkeFP3qBQxUdq3mTEqRWD4z4CT82zEhCzM9w1QxzBtHCPD4LfP5kdVPcrJjSFoqCu6xW3UWX",
  "key34": "34mGxmHXkxdPmXtvsKR4Tcz4kfov6U78yb4WJPDG5sEt2M1XmxUCr8EDEpq25pYmiPNGWaGKY6Xq9iGBi2u8Z3w4",
  "key35": "51bCWvaLfmeBJeB3fbAHYfxqAvrizHFvLCw3PMJhkHQ7AGgAVJccpqB9kGF9cpFiJPUDihDyGijzsY6HpTsD7Yes",
  "key36": "WLRKRneVvX1UcH7TQSLqxsGfUzQLKrhsTPx7LHJWSc8hx7MVz3CyNTGW9ZSQEFUGcgeezqRvGEtkMSywdzU8mEn",
  "key37": "fEGQXqbmqSNsayDAbrssMBXqqY6mEdm1NMZuexpAUHTwit7qMbjuGVcAYJPrVNDedte4X4ocRGVnnrj2N6gqr97",
  "key38": "2FsPquekWmdCC9SD9Xys3p7t1EuVKi969oSRZmNZHEDzfn3sqJbaGTZptyDjSBQcCm2oTYWzGXgZrUiUG6v7Z4Ta",
  "key39": "5jZWts2vMm7Bb6dcat7tZpmenw4VRLEk7Gg2U7m3NfnRH6J5YPgeVTRRpv7sKgkSMhdCNsemxuoLNhnJmMqf1Zf4",
  "key40": "5yvrWgzzyJ15UM6RJx2M2NRGtCX9j59HBgyYt1Qubs3aq3CjnU1quXh83XuEocZbymMShK1SF9NqA85HhgNEZrbG",
  "key41": "3qqQwq5Stdry7hgdxBwtLgYQcDwtTM6UdRd6crcSdaBzeja8tZ8wYR5Jbfp386KXCddRurSQfrYCkJWct14jNgZH",
  "key42": "2N5CfnX2KK9tCe3K77PUc4ChhCZEXTT3SsFNVP2xm5h6owX511jXeSJmdKVhQtTk9cGmmimgQSQFf1XNGvAx6cse",
  "key43": "4qgF7bDFfVNKSBkUMDeBfxJZEyJnNGeq9eWKEkLdDZNG82E51KwHsLF1yE28oQAKH6gVpip3w1Hj9Uf1EF9AALL4",
  "key44": "22FgXHm9ME7F9kZFC7o1sAJf2bxcZs3bvHntvBLguRxigyR8E7PMVwFnczKUrWJ5exwAz9UszWswKP74G7ynQ4A3",
  "key45": "2avWgErpf2d8k3kDanXzGKtPkhfMWCWXg1dgvbQoufa4pDPZbfmAY6ecfYcrVYc7YZBTud5QH2Kw1qSkcXss864v",
  "key46": "mm5cqcoHKjhssy9hH5DGQpAePv7wuCqEsBRHMyw64eiRxwWkQf9k1dUvdTee5q7FRuAHTFpLsHAmNdzTySSV6sx"
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
