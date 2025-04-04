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
    "5FLqgEs5mRroudisw1i4cdbQ1xZLF2y1KZSaJVKxmhyQyQHBVAZRTaqnvq7A9Dx3oYv6FwczxHLMboTtbZ4XW4ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZbGEmRCGr9kUx9GHX6n985czBje3zpdtvpECVomw8A7gDChb2FCCan88BJvKXgSsBK5tHcDZ3YYsSCtkGgBEYm8",
  "key1": "2sfnGHtjnPFbD3tyQGMZzFnRCQpNVTzDY9dD2r8b6ejqdEiVkpptBpnQambeGxbhgzxu5Wa4exbwbdZYj5kuaCVK",
  "key2": "3kLSgBdZxNJo9b38ex1cpd5JM2nGQYzKSdM6tFG8f5LMjBk9wkF6NbzMKc2aGdFjEM6PUviv1y79EdCwczsSPc9q",
  "key3": "2Ebtu9VSkA4vkUTbb1m5kPQE79ynNm8JK5g5WgiQKVmmgU5piDe9A3xJb7dubA7T1AbhNNfUNT5VWyDNSrNkcYtr",
  "key4": "4ckiz3DJVdZ4YEtWtcJ8Dn95Yg27zfWGkjrypz6ip5zzmfH3cU89zfKcD7EHr7UVj3fQbCyKoUz99oGTDfSVNnWq",
  "key5": "2jmiVCuF7h1Ef2pTx9DTxLSTdidS1DqgbRHs1XLrADAPeoxT69c6WRFTRKrUehqjvE7v3MERKhSDXTYm4czxjocM",
  "key6": "4Jg9NomebuiJDCGWvjZ7nqkEGCwhSxrpQdLZBBedP4pAU3h41UJaEvywmrgk2ygCD2BQkhuG3A1tNSAiNW5edEsB",
  "key7": "2GQPpXsSEXTy9CLTFnoCKW94FKVFCtWWU2hfmPafwCdKxoXVumTarkD6o5Tar2Z2ozEeondrP49mzj5ZRvWWVArc",
  "key8": "bGYiP2bwahjbyLiawfvhiWXaL1qMwuYquH9L8dAZsvNb1AHHjGQsPEq9KBRGf9kH4gEsnqRucBmK2xvQknq85BH",
  "key9": "3JJSgu25BqebpjuiiCxk2KvFkNEG2yxY66NXT4EgN5undrksNLj98cxN7dPLW39ixds2faumhF9yErMbARwxMEFo",
  "key10": "mK2mSPQ6LTResMPiP6w5j2JuynP5N69QmAuKK6wpqvjCwRj2TYE4q1ANigBHx8GR3zvpHmeV7H9pwJJucF1JPE8",
  "key11": "2S2sP3bboQATw1KtVqSYZgdaDznTJLoLTxmTuye368jJ4MxjsULSNAJrC2aPAXCLJKL3Bu3XDZnLHQdHCARsXLWf",
  "key12": "49M8Duhi7kyHcWUALsRbzVh3D991ERvUqTiVXpGaPSderbi7FbEhJNVP5Ui44hD9u75rAr2hkbNNtkD4TLkd65we",
  "key13": "6AxbLyApjRvGnBvhtyJ7ZcWsw1GkCBcnxF6Ma1g1aiyDcoEiojvbQ4dvmsFEibhTtjL7t6VA71TZqvEur3Yai3A",
  "key14": "2bveZwNA8Z7WzSRSTY2eqEv9Wj1kVyrKiB6jHpzC5wg5G6CgEuJauwLuKhx8ynh3BDDLxvXXr5pnHu3oomALdmJo",
  "key15": "3Au4Gw9srQtcFeCEQrQA1tZVBBokVWt43tmvghTvCUarLEnpLfKQhCAw7WHeq6yPjD7phGx3c6KXm8XPpyx9JiVd",
  "key16": "3ewEnK5Ar2MRq9ePJhx6b2yuyCCd5DQbbmmXV2a8RRxF99APksri8JWWxnBA8nnW2ncVDuqVzyeCF8mU2VpQFkeK",
  "key17": "5jpaQewfuEmc9GA8aecWxdK1Uf7BUSNkW9Df9CdYcBTeAp2KoVQQVxP7RZRXmULBWVMUo8HmuCKZB6PvPpydACPV",
  "key18": "3WVUEuPFnY1oS1xyv9LWi2ogc5mys777nEycu5GnYDPHmiTgnVPdh71qW7BZE3JoJenr7XPyXq7jS3XG2BE77bqM",
  "key19": "5uEP3JXq3EzGNgc7Kyvcan89HZh8xGntvM7SKyL5ZDvuWdXnhYULxPQetiY4X7FgpbSrHUHyUKt7pLTa43FoLPeq",
  "key20": "5XZK9N6iS3f66dxHaNiw4RoSM5YAF2TzEtUR3XGhzpCymtkjE3QN9awHpE35qFHGR6W3oEySCj1RKmkSziuCLdDf",
  "key21": "42AiXcCscGJ1TttEbe5SAPxhsKdNZszewAUVLKn2Fu6SZw2Lm7XdqersTjy3wJDQUbfQXHozY6QjqTFoh9Ew4bEr",
  "key22": "5mKVqyTP6Ba9XFcY6DFx2hELNNzkFJsWAcw4qeJTeYw9WT5wJY1QdtG1H5imqFMGwVXFfVDARSYAxfx7TUedBC4M",
  "key23": "428gapDmjGdUyp5LRTvyPkU2sJQvWHc1nHJZTbFJRZ1ZmXfuzsqoyptGUMrZrC38wxrkRWAWVvFd6USvTwb3k6xa",
  "key24": "5C36aNFkkZhBy93duYyTCrpLJnQjUE8bMZy2wVWBMWC5QxkuF4ATMzMk4wZDisBHqZaUHnWCR7yxY2dhcq3DjBnu",
  "key25": "5kBoygayWzhetj2L192jqzbavHCTBJwffkU8RxN3FLCV4e2rt6yfzz8yobrmhGnp9jyE8tZjJEbzGBNKckCwUX8C",
  "key26": "3i3pJfypSyJLDTH5GTb435DwPWzCxjATqc4WgQEF6sMFkkCx3uMXxkxmhnCrkaDYQaePTsU5boE1XvcqvywferHi",
  "key27": "5Xui2djo6uE2eGtJiz831Wmyacm74STPjvFf29MpKSbW7jDxXCxK9QJQAtknY926wmK7Cg9uPDwEmG8Zw9Z7tFGn",
  "key28": "5gdN9E86kpjjq35S3r4jLDhsuNV79x81CgTJW6UWBeK5LtPxgee2XN3AMJFNzoEvHUsMardSes3F3TV6VXPWa4gB",
  "key29": "4mbzWKZ2TYumMhc8bkyMk3H25u1HpVXruT72sZDLiFoSbzJXwmqma8U75XYprfwWLm54ga6WXMtkn847oG3wD2kY",
  "key30": "2yBfpeMVEvrc9SKLd8wmbBgQUVWbVJpMD7N7a459RAAdEC2GYieJ9NDrg9Pc4AcXJSovEP5V91w42uG8LejRrDvz",
  "key31": "FJHprh8Lyui1jVWYh4sZZhbnJLaL5jhsXKDWUYeepznXeKrBNTxa4TaAYRk7Ei5eSPMwcyRgr2WQarYygbW61Sy",
  "key32": "56Y427Su4qLuS7aKtrF4SvvEdwG8jDLbtYDF42o6egpr9zjxk7hUmygSFKPo8byHxHHTnVwwNiTh2bywwvsFvTYE",
  "key33": "CKkZA9zbtLjYQWS8AiRRxTcRoc7tGgnjJFs3yYqmj3ujws4z2xyB48yG51muRzSxQ74L2TQDRt7ovDrU1TqnbC3",
  "key34": "4utJ49BKQT2qnhrm5T8kRsiAGpmpXkTyGgyP22dmbLxvyKM3B3Vf2aQCNWd5iac7MvMRqHqxWMCTDoDfrFkYtJtA",
  "key35": "596EAVRoeBNMaYXuXaP2Uu9hzjTZc1961bN2hkyANPh7r1srz9QEMqybPrDRcVL6TJTT9UHdXVh8Ug8nvVa6feHQ"
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
