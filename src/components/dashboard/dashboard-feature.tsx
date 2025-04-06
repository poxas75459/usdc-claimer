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
    "4U1S1Stm6FNX8Drn9qotfLdxbWjyLGbmXimZRdbx4ed65QzNbRM2gqBh4jDWPumCUv1AoofUgLQoVAt9b68Qabpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmizJxatpMoe8ifFYZ47WmYzXPH4smk8dnwUVj3hu3U1VSbuffVJ12zF9xjTNZxDL5dnBTE7wJfJaicvLBPaMua",
  "key1": "5PbKnn6S9xdW1KSvTEbwzs1YLJZ4njQd7oAsHHyDiZc5adUm41s4GXYshxNcLH7CPbEqycARKzm6tYgvfVphBdAt",
  "key2": "35qR6KJmscKD62TqYX1wD5ycxPA1QDJ1eABAgb4uVpdeaDvayDye6k48547e47i9gsvxCufbbpx5WG8seeRZsTxn",
  "key3": "4a6xPJNpkYy1rN1oVMDdmnCWMoFxESG1USxcmFFVTvZbGfWB1Pd3PCpqoRbwwsd5aJkrwkoLRePtycsEpUpqd2WL",
  "key4": "V68Gy1BSW5onYNKtyi65CNHcxRLF8ZPfr8zoDc29WjjB5hyQHXKvSBBysDDr8RPsUEcpFK3DyA7FxtMB4CpPSdh",
  "key5": "327UXDyBGNatRhaPBLnZYtrNfrtnD7RqE91GEM8HjKDZKeJrGpoJ2qeo7tueaE8XnFtH95r4Pr4r6L3qn2CUedpQ",
  "key6": "5HjNWBK4FCtsN2DQhEZDroJqpWz3zXiPUVrNKx1LfHRP3qAtA3ed6TMen2DM75fUq93nKCPk9P5GxPdj3ABX3HmB",
  "key7": "y7CS4wqxqTBFc5BdJyWcdNa6p9QuQMjCUbDwnhrkCtV9FLqtLTFt1dCxBEmQAxfTebyQhrj4j3WTKRmmTezspUL",
  "key8": "48d1ZzMxKjsKEMqgjs1UftEeAsDmKndGWbN43MLh4Zb4CdusxAXSkJGur1bCvmPEeSgdUEnWD4jmciSkmQTQPdps",
  "key9": "FhF3pvGPQ4MdhYyYCBav4PpbdK46hSDMBCgPjdu5WmWwAN1HQyjphgT8HK6CTctC9LXdRvXsr6DbrUVYPTHcSb7",
  "key10": "2Lz9V6Rk9KkduGaER8tCniDLxNPGJvxEDrb1qD1BVvtwwQQhF9aALRr5ygXKsaCd49kCxN5B86s2Z44JpmjXUqnU",
  "key11": "4XqWdvNhUT2oDbWTjj5L7qHhc54xfXoX3JDTW97QPbw8KDZugo8VE5jxxsPCJJkTxF6bqPWtSvRQgSDNjLAVkkwR",
  "key12": "5qEYqjkJaaKskJK9hToJmuiBEu25uWhZi4E1WcwDQZj2VBNhiiFZJ7Fv9Satkpzzb2CcePCNBi2zHMKin5recpNC",
  "key13": "62iXEvw367PffhzGekvRPPkW2RVaJ7JWyeK2LN76fJLPsSteboqrjWhQtHjn6xaBPasSPMsbNA35aU6UojGsoJ7s",
  "key14": "3RjrCUfUCzbcdZ5vaFxhsyR3gQ2mQtpxGeKR4oXoqRKT6wgfwtAfFUjT8tMbXnopwg62mBSEGoRvcRwsQb34BC5K",
  "key15": "2PnzZVRo7ZRHNWXCj5LQWs7pqtm7tRzr9LPzr4fR1GAnmggXh8bEG5G5t3HHcwc85hffFn4ME2JSNfHBPu95Qmfe",
  "key16": "4mXN37ttgsbVggL7ok43FrKPbxUpRy7KJbypfrmNWXVptSTkuRG7RtRgA3WjYkHL8qgLQWXqmym6a9MKW9BGZz1H",
  "key17": "2kcdmmJh8JaszBsJzrU8KwwQyEkh8NrYJWxe4r2sh6Kmt6YB2AL1rNLtDP4q7fXxhy8gWxSJsCjwXPteso75sTZ8",
  "key18": "2S7f8oXtECEy7P645DwPKrjNMdWuP4UcrfVGgAsB2eeRv19j548SXD8tPB72NqZxXRp2zJ2LRpyRJ31gdBjcCFFH",
  "key19": "d5zERNfjSqekKJMdjjawTTMC3p395t1x1etynfrq6MmE4C9BbpRiMA7DcnBxfCggwNXNjsPeQYHRLxnmqbNpqKy",
  "key20": "52e5UiHNgtnteqUzzo3cz3RoFZK7mqfVpKGTZEUkKxveZcPFedHBtZphvcEBrYta9NgmtQ1aimXbpNVnqPUm94c2",
  "key21": "5Fye9kNLytJ3dRwE4u43gaaBFcbNrt8AzDHA4PUefQ6GmojMBb43nCuZ1g18izMQkDbWr6Y633UR1fgtpvF9Sczn",
  "key22": "9BzHYZqHiKTBU54DKkYTPwZwpeWiawqAX6gQTjW3hbyEWaGNKKgWsf97a7XGz9fnvEZmVePQSSDdUiNhATmDyBw",
  "key23": "5yVUz3Khjjyjm8MbpDxFGLYtP3DQASmnRopZYE4uCfQ4Me7G4DiDh4XQ6zCAVWb9Hx682E8buGrdWhhZtTXzyu9V",
  "key24": "36rHs89A2i3tCjL8sFhSZAXnKoHFJGo4p8dZ9JYLmW4HmNq5Y3QjzpMkzHPn4ccyvpsEcTcSzCLXVQscw7s7QPsJ",
  "key25": "48DHjkUvFREaWomyF8hqtRHyUhokpEh7jAMf3gyFqEu627HMKFXL9PXNjLEfVLiwuibpwryPftsYHUUu42g5i2Gf",
  "key26": "2L9f5MnKbp6HsD2b9KuiPXJSnK97LyacVeBhGStt7VN7MFKSs4DAUezH1QieZFwQ5Kdy5rDamEwBPy7RowUM6SFt",
  "key27": "2JebPKWD7wpruA13QtWpVVtjqBNNNGuEgs4Nea3H2iaUAtDDU3TBTFXyifipDCbFDubPMbsfWrTqcpRSth3d9SoX",
  "key28": "3pEdXisx7BvsJXLjn3ejVFsVnL3tNoRbDP4E22d13EPN8F1JrGbbCWcwdJuvaWaXeUnMvpZxyRzu2r9y7vBJbp2j",
  "key29": "vZkh29TffRLUgW41UuSCjGP5zWDxgY7ejPxhXeMNJ9mpUtAVDDRohtCDyFWKRjeWt8bMczntaW3GKsTZUXFLkJj",
  "key30": "5XQJYndp5qPwKfHKTgkYrYMkHvCPTSbdbdH1XLaRnnx4iN4MPguH7rVePH7A5ajYMHxB1Fb7PguLxY4nUU8ibvrQ",
  "key31": "nwD89w64r94kq2N69wL7CjA2X3PZDjjXCpDvmT4hSVTrqby47UkYHyTBZwXQNBf2zoiQrsnJkQQKiryzaUM24pT",
  "key32": "5nEgj5TXQdSkKyguxTSR6UK3HcJdfzoGvHFLLysaTha5h4TqFzETpwQE81jwp1fyaTm81ComHMTM8utZdRvwq8cx",
  "key33": "3Bq9fS3vA6aoAiKxabDDQzjJfmc6xPbuipcYS7e6iRVE99Dc8hQNGfyxG3onhD85rfv6tVZA9Gz9F5yqpmxmsuNr",
  "key34": "34KA2mfarp7nLw9R51DNGTYSna1imWLPDSy18Keo7zizjUd43JWeYxb9yo9gvRpGiW7QSW73727UdUyf7h8bse5"
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
