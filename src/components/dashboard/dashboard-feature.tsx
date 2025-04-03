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
    "5BGDXHP5Q8jwwvBfzy7YZYyYevRoMNHzfVYqiYWtXTcAUa2pistqBz7zHpcpJtEthtVKmJzkSqHx4TDwjxXxn176"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUSVXJb5vpQkVc3JG5eaBavFMG2nSigHZrv8Sorzq5sex14NJauH4ck1KUc5rgZDBtFrE6wre5m8BVeF7h39U73",
  "key1": "4D4kn5hsqq6rx31ppztuSyeSNDeBzKgUDXDVPPrN7er1nk949u9EvUoai4YiDHhHPLRvA385RR2FAfkUMnzxPeia",
  "key2": "4HWsVWRswtizQ2ii2EZKeMaY2YwuMZmCq92ktDBzo2hGX859b1STSy6td52eLcr6QSZ4zDjKaEPtmykDmjK85zJ9",
  "key3": "3mxzFsaj9Y4h4cpFQcrNNizoSG9z2yeBDcisnFkPn1bVZvW5HFGTAQBZS3oE4aryzCuYPytLcDn98n6XTtcCxt9v",
  "key4": "2JJeStwyvmbwTAw7BBttV4zAHHxfn1kfFtcF2bM1xsmbggmxhZpENQbbKqQiAHc22uwLWXsoLuhksJzCrVLEkvwm",
  "key5": "4M6NGFriUQ4k71WK3YxYuH1wXjBUvJU2ucZYvaiDGMtb5oJzZYQyoD2v7ft1Wu43LRvqVpSvJry8NPQq1yigccdz",
  "key6": "3ANEaM17y3M1sgPF4P5DmuUXs57ud5exXFKV5mKJ1BQaGCELiuNzmSoHyZSR6Tt5mvbyCXQvKNaFqukeno8YjtYT",
  "key7": "4t7sdoa4tL8iosEpVdroWao63isiGEGvmDkRFYENg9DjvsgxsRsSGWChbCFWXg7TbxBgYiGJc1MVB5kTZJyQxRpg",
  "key8": "5vvs2Vzmcq4bD7QWpp8MDXYW7PFiTxDCtixg5abM7xzPCS517hAQAL2TFrXfGTBd34g81sDEeGwYkNCxZdHF8Zda",
  "key9": "58XSN6NTQGRdHMsycFVmxpFnAvepDdmLohDYa8eohPq8368MTfSdswv5bf2cVvjeFKX1kou9oYJRfVvmKccHyJMo",
  "key10": "3VYwtcwCkTAj1VNLRB4S9um2hzMjwwAm6jxRcYjSgEk5bhmpxyaSYxSNKe8do1KUhvmNKyBEwq34kD36HMSZZCDY",
  "key11": "4H6UD2my7vZfChiFgyNDoBYqF4Q6HLNz94KUsM9CTsxUF2cx1BzwHcUDMq91UHgRz9H7vPdpXq9LSMuc6HdoaTch",
  "key12": "5PaZg71aAV4wad1FJZ4VKKdYsUb8fxyyewhFQ2SmZrnZYsDwrDsnnrJm52Lx5YTzgd5DhHgu6ZbmrzkQvB4YkN2Y",
  "key13": "Q6eUKv22jbBNrigYH87TS8HfGhyzsYEzea7wMexstbpGwgdrwEPDSyyJsXVn5XQpCQRVK3kbbQrcGorcHQP7Hj9",
  "key14": "idyYMPsAjXtH7D3CfwdqK6EufkSqdtEJFg8rwdkbQrunAVFhZTQQYTJWMYfUdG3oAa5VZ4y35W81EiWu3HEJiKE",
  "key15": "4AGj6pjghiDvmBW5pCRf4B4dVVPnESPqnrSn5M2JT3hJN8P8RNywr1rYGMjKG2BoDCWMHsAnRzGFhVAmmG2UNrCT",
  "key16": "4gyYqVwiMiuApJLvbCCfqJ3VkEGvsgm76SUgSQvuUvG2M1pLXXQAxUtQgMgwT8fPaDJcJ4yS9f1BGYD5dPSwGitW",
  "key17": "3fsB4eigZutPo3gD6xmy7xfFKQdESs2VsSM7qHKkKadQpx4x5LENQXfPL7czSc8uQHHrELGEWowc7GbJd6Mu1npr",
  "key18": "4tthdULmKzPSF5ENU5JmK8ptkiCKKvNJbM8PqqRqfXtw7vtdzmSEBJMdsjvU9tZH6soUCpCyfRyQpVqTuSjQdHY9",
  "key19": "3uDf14Cf6cv8KHJcPXDsgQ5nBKpAjoZFVFtkVJG2nkkcyihuf8p5fC7ohfqn7jwv24Tsd94cuD7Dz7ofnT7AA7rd",
  "key20": "2dT8fT51PoBZSp2p36zpjcq7cGqkqzzKzwQbq622ZueEXcWcFEvh4gvYd99BEwXHgQ21a9RrqeGuSiJ1BsZMweYo",
  "key21": "5bcHVUZYtZoViK4kEN6sE4rTPWGkizJxy1t9RrGz2X9XeoFEuTp8GNGx6iUPs1ausKjrwubVkBUtimp19GH7REge",
  "key22": "vyhTK4vnDYwdkzfvLo8GAAVwkw2TBQqLMVsKCfj15pDHAm4p4ZGKCrCJWw5R9F1g8S1wR2bx8RyxhQ6XC2cp11j",
  "key23": "4HjmWRoRL3fArWUFg83EM3pkMJh5BEyo8bykbK3JbP2AdCxYQ17WpDMWqujtoJJbVrn6Gensjc6jSKKjcBxSWfXM",
  "key24": "2tb7ffH6eMbczTbRCDSRpRDVVhNbMe5qRH9JswYLHipzEBEmVZpZ6w9hANGcMaBVP7PWC48EJr24fP7SJJokhVfw",
  "key25": "4sH1H6UrSg3SgusytXGXsHY9MYwcUXKqrxndcmnkPEYZXJ4wwzUc512gX9GkoDsa5tvckAnT2zL4b3nifV1mMc8P",
  "key26": "4bBPhYovQzDy7jsLWptGRhjCP5fW7vnxsgVbuWzwQYAM1jL818g3ViyGupyv8MuFc63gvKzreCwDMxtagm4DvdL4",
  "key27": "5ZLGJyiPqSXu8W3UWPSsPdTS7prJqh2uyjHP1yrpeFtKk6M6uDL4aayRGvdRsjGYq5176Kj9wPoyspBcXcZ39Pt6",
  "key28": "wKAgPWtJXnNgZfhE36B8TzXqAAxZyQddBzNWbjebFVuHbjTXKkcYoh4kbcmWRBvXn2RFoXSt3PKjsCw9r1qXoCn",
  "key29": "5a3goSL4CVWjcBvwdduANZoS5N8KRZ2RV155Ew7ZoWguseXby45uZWedEYcNE67rfqyzhmoTNZ8VYtwQn2HuaVFc",
  "key30": "4NPFBVAYEd5k8GyZ523RMndJvzMMhUhCufbJrBxGZAowGnPGbv13juvii7bjUKEUgYDyQBuUCoM5iiLbcZsyyQyC",
  "key31": "dSgKV1RBqD6UW2oruUx18QJnpBhFh7459jLN4SeLDGix15zZK1sAiPiEDTmpPtN4WH2vikrBc3SVcHbbBtui45W",
  "key32": "2Le4rY91pZpZY9ZJVHFNeeUS6HFFKAabZFEb22xJ5MwuoDVk6nTvjC1CVSVwxAzSijgTiyyZft2iH7hapUUxAFM",
  "key33": "2b5NQcMVfEBQ15eaJkWfvtkcN92aBzU5hjWArGmxzMMp1Rzo7saYRuPT5A2K8u3h79q4mW7XJu3qWmtQMsoMehn1",
  "key34": "2yf6fXdkL4nw3cT4rfSUcrN9hbx6eh5eFv1amTSVxpisJwbfbJryGyC9raqpcCi1XbEibrV2CxGyPbEBLMFYjyQr",
  "key35": "Se3piowARSMhFFT6Zid5kVoLzdh4AkCFNLmbsqqCyEqo1jPQMzHghkk92GqwgoJWwfN4XqTWfvxNi9SfG1Z4p9t",
  "key36": "xiQhuDPiqPZJhWK8fMY2vLWzEnGZuEM25MQGBu5fYTZ2ddu3qSbBo35LuHXj4ME8Wm7KRKQdauj4245QEttbTTA",
  "key37": "34p5h37FUThJh9Dhdu7dgXEVkjJKKh2pMG5Nq2Uk2CMFYzV1ntXSS3ktx2tUsXNccsAFXaVvDGgAVmYiK2ztTmp",
  "key38": "2WHE9hAvGvijm8UxKdebABXXr9QeSpquihKLot6YDL5wnTbb7PjqakzAXnzAM79xbySjVtVxnKDyq5fFDMndjfFn",
  "key39": "3Qhb3nSsCK56Y73JKgdAaup5gdGioSrbUg4aEDAZUaJVvkdK9mGNqx6FJi8uKLtHnMEpDT6RZ7daGR3fmUbA25uU",
  "key40": "5pmXLKB6t3cPeFtbUuke5QqRsjBVC9oenJjZxLrtE75MXwuvbEq5ew97d2bxDjQrpPBQBLntTBJbGbQCqcW8ixf",
  "key41": "28xBZyP13TRoVQynZUbFyBKAm5YTrTNdQQkHhdjqnTVUDNozWJFfrU1CVYThKhhGEiiBNjCnxrJiFzhdEfDye4H5",
  "key42": "3HwkU99bhx1Y26BtYA7tAHmW92KmSjAKey25EZGubWdw81aJTyxuntubWyp6ffGdR45CgNHwUfAmuXo9PAeKTwzC",
  "key43": "2cfkskbFbb662Fm5gDDxAxHxPW8HwCptigaMidps5zdoy6uPpmgRibCNrpvzGMrkoL6DYibsLRy925Da7YPZQqp4",
  "key44": "4r6AB1zyAXuFsVwVKTeVNVPrK8fhGfnCjmHz4XrK63N4tCT97y9VeD74ECj1Uz2QcmF7eB7hbUf3ez84cCseqb4b",
  "key45": "56ZRCM6zbjPVkfYzmxBdHrrBPXcdK5myi4z2mZkxWzmSGSbSwcUYzfB6JPduquBCJ2FSeDSjiiisB8tnMMHzZLjK"
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
