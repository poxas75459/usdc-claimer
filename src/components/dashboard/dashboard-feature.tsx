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
    "CHcXHkZxb73FJzgjeP8raDjL9TNa4V1iWkLXkykbCqAcuMbUi3JCgaQsRdNGNc8HTFAWcFHthGNFc7gTGkge6e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ms7i8wpRKKbxxwt2kbzMGWzhzEsSgvmzDbe7dKKnRhajDnSn9FUJ8d4K3xusbeb2dwPM4dNUVhK5jX46aD4XiL",
  "key1": "2YzDv1mTYbv3cTse4v8Fm1BnhiJfH7eRQQ9uTMFweTwuEdBTQAwbJP7Q6tvyLL7bTtdpaxmyRNjjYMQhZZ5ieyv6",
  "key2": "2EYpBD5ujHeP261uFwPRkJhbgyq1u8vvj7v4sLN6aa9Ui7iaMNJfptc2sMrjxMf2qtvfuSYwC4y1myDkVTmAVF8D",
  "key3": "3L7jSn26AsmnK5dzwZyvuwSUSYv5MB8sSp8Mg5rJTFuWs8TbqdPjyaSm5yq86n5zojzRyB5iU2XF5qraBsWtE2jr",
  "key4": "46LzGd8ZufNTpniGxN8DRhWJhrsZNuTwnXd9uBPPdpYz5WLfeUzo7AjkdKjhUP9YpccCPHNTsHBk5zHCegMAbPrG",
  "key5": "3e1sXCj5RuZbqE9M1QX7ypkeSfXzzvmDXxRbijzxsg5Fvuw1LxGBCWYptwpSxFfjQ2C7QpMZxv2ThUcZMq3dpA9Y",
  "key6": "5E3cKKXdKUdmk97xEVhoZ3TqdouBmP9JVhfAFrn3pdmpidCjzx1hQWGkTeXUqJfBuoqXF9pAbhZLv7umZyTK84rP",
  "key7": "5UjQNBycAVZc2hsrFTy1KvFXzt1N9s3r15bsJVgRq1vS19eX9q7DmEu9RUqypnbEYfc2M88gfb6TQhqbJkZWgRv2",
  "key8": "2WFL1asQkvPpufPtrTLwbm9HrDSDJJbAJZBhztpYYbDKQag4upauh4L8peJZy3crq4V43jpN6pv4u1xbAKHpGCsY",
  "key9": "wBKEZSg6TtqJrYfoFvaDbXPVXRTpWHmoye2PYrbfZh3j1956Y4MTLs6dqdRBFBn93EK9HqkRVTBmEXN4gH89f95",
  "key10": "3Vvaqafmvmw4Yot8at4tbhEA3pu9cPAfDGq7YW26mc1yYkdQsVNo2YuLkBrCYWbkgT36ooLdC7rvD9Y48tVaj321",
  "key11": "28Q6J3n5MirbZ77euFHx8VMUs3CyjqbFSpLepx1AU1j2hwYdrquCejKCT9eaFoVXo3yjTox5GiwPosQQVwNYNNFJ",
  "key12": "2vzqsHeSroW5FpVF6YKnWBUaucNSKBJzRoH96PCqHdy1Uue4u7y451Sh8ZtJzShL2BxbM72xjP424QyMEmEXQGZL",
  "key13": "ayuYQCWHgQaiSyw5oMKURzmpL5SSLW5XNBM5Ab8EACVLp4mYDd175BBsaMU7vz4w3Fu5rS7yaP2btbCqdAwLEQm",
  "key14": "64zDmRisxTeguqof4TYXBmq7LpRosq4FKiDF79XFdyBCkAPXHmz1LN7ecwDbcwhCsoVtwUadCnd9PrEJiPsU1kvK",
  "key15": "2smNufdYtw7BJrdRDjubAM15XqtHv4r12hyRAkDD7gdJUZsKJUA93HqyTbf5NxygvTdZMrUngd3BEPWwVSaUviho",
  "key16": "3rtopxArWpRiJ4ju14iHLgwCsyn7Xq3nbdwA571eMjn1wdGUnrfgw2RVFi1ja8fyHd3yYydLoniGF1gup2peH4h3",
  "key17": "4oP7vfSWTD3YvRmYt2rsovmYMmXQvMoJz3mTeoF1FzcasKRgm6Zgt5bwrk8ji28GKteZFpq7BsCWz8LwSvFVtSVf",
  "key18": "3aoWXqbQuxqaeS3F35HdsktgypZcXXZRk4ZpiFG84DbirQxnT8bA5LYM2GNK9sx5qtygaDQh1CG3RRmTpy7qGJmE",
  "key19": "3dovREvUoxU2NREBWjXS1n6btNMwc4UJU3QoGa5x3zreUMeN6m1rKSVvszhY8EJcDmxrhsA1DF1YJM4TAwf9fZhr",
  "key20": "4Uic6GMNaFfnTwGieQrG6rqCtfNpDm6YRkP9SyQSTzp32yMEF1x2wHvrg2oRvuZ6Xt7SnTYf5nX7dxY3pQkaTwjy",
  "key21": "2dw1Aah4vDm4daSQkorvSBczQFrDdzdQjRaT4BZaKBPVE95hLA6BGE9yPWL8k12omJXFWw2pzw9j1pRTMkiwgbhJ",
  "key22": "3QCrQ4WvfMz6NGt4DrCsV8yhxNcBSrWbDn52CFYs2Z62hc4CxxiRdiWxJracfv9ZZMcozDv9pYqdUfU2mGKgXVd6",
  "key23": "5ZmjkdSWyPG6pMKAxddY6hhDTyRC7QyAU46ho3RrbmpgdhzCbRws9KteWGV9gURbp43TzKeiiT7wnyfvtT6MZedU",
  "key24": "5aKFZoAYhovqrZo4UFruDYotCUMrZ3rM4UrP5dPDGF9P7jzZL1gxLZeGZoWFs59Tgw2xcBaUwzC2KH2DKC5AEeGh",
  "key25": "45FrP1dsqr8Cj7jfdPLuDD5u8PWLbYsZTTxCgsMUYjop1v4do9xSeR2arEUYk3HgfCcwsE35vx7oyF4WhKm1YqQy",
  "key26": "rQwFVF8hLjjk4ArNR9GYoMXJ3nA1uHk6UMCfDamvvqth4Y9zHvnGpPXqbzfKvZUQnSGr82ihjYKCPd8nGrev11F",
  "key27": "53xEr6MWQHX6Pp3DMrWcyZ434vdfQJT6oiRto9puHPXETWA8FkjPgPVfTVZjTkzaEcunQCLWWrihkrC37kRcRma1",
  "key28": "5RRMsk3t8t2xHxWLXxZeZwvb5w1P1NRinrrhGPmRsxC3jEkPfYoxp4tdsZ2cp9BoshLkxBVSUj3LVVcKjk1NJV2X"
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
