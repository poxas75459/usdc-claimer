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
    "3V3AvS1ocXr9QrfCajT9bGyNAev8G5hojCcmFPCwSsRjWxzsSuX4E5NZaDu3imPoHCU4VRECZPi1oVbvKDTBz7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39MfPaQETWbBJD7TZcHpXu9UJXZ5LcZy2KTz9i7NR8GXjHeyCFt2P21zhxfphyyLkkPVFCrV2nDuDrGyNUf6GvhM",
  "key1": "2Z77DUJyJ8gNFP9k8iXfP3C1cyvNbqc2XqZLK8TQ2Dq3vGNyWsGAMDw4xNMEJMmQo1g4w7a8pxuitFSWf4GMB4eV",
  "key2": "335sAp5CLRG5AYwxuCKEsVkdwzmDWFW3ZzzRNr2mTdPoevHgM4v966ccqP2EFJnzHnWqJwtaSASFfM3NeVYXmrde",
  "key3": "guWFJFwjf88YE7firBebrqPe5v651w1RRQ8CBqkW71agNVpMENNomKsZsBEkbEwYpiXM1UXGituS22zD5Myuyhv",
  "key4": "5nc81NCbH92vDQoJZYxyNegd7ZNJfGzqZjk4Sa4gVaGHK7fYiQnL2hsNFG7iiXhVghoQmzxo4r3gA2o6LfU6oEcf",
  "key5": "3idh84jJQGkKxHYqkfw6hDg74tpGMo8U9bTeZBR8szCkF6k46AGrvkwFis29YQpMGJRih3phnnqjuPJiXgREmZUW",
  "key6": "4UYjitmHJypqShYMYCPr1chBPGmD6pSYGeQC2waLijDRCViMeTjhuEMtBByqBKQ6VJJGzDMnhkATzdcDvsH4NTTH",
  "key7": "295Q4iQ7E74jeuUK21pNRqM7wGihjfC1T1Jx4UkeP9bGDkUzXycjFFxPdnRR6w1LESnXkpeaUh7ZbYpJYe9b62UR",
  "key8": "7JimKjP8BM7hxdeC6NmdVaZErw52VLCks3WRh6rq3BFW1chVtbauqMA8GJ6XzMskasm3iYdfdKBrFXqz2zfrkQ8",
  "key9": "3y6h4FfmBLtWVFHktbkNDtvhj4YrFbnMNsjW394c6g3xmcxAtc6bsqxX1WDiyd3a1MwgcoiFxkJyK9MgyxE6TPrF",
  "key10": "5ur2dArArpLv5Pmpcci7UbFB9G6deK2sJx2NX8a8bpcAx8HMp4ucF97wsJbFVxn5JH1vNLMj9Zembpj4rMjVJR6X",
  "key11": "2fQefuNYrpvfgqNHDoXGfw5W6XYPSyWRT6dKTEr9HuHZiYXo1xB1rLnVrfu7knjFYVKPb9FqUM5gDoPTN3aWRJ9J",
  "key12": "21dUNa6vc2trP1wgNkBHYyjeETogkTVrcLHxE84Xg6ZCx1vu6G4k2RpxjNkEk9vukCYxpVNtYW9qYpXDjrTkWbEr",
  "key13": "3bXLb9LJiSh3id84M3dQbaBRSzByNikbtVLVExQmkvNn1SqQ1z2nw127wJZFezuv5kjMG7n6254aLP78rR7im2Q",
  "key14": "3zfY5qU2ejeDuGWWHFHo45caw3J45ULJRMmgTWXZyabKHsf2Ndjb4yYjUGdJ1squycbdppz7DhruaVFdapqE2b34",
  "key15": "3pyS1jEfyMy3RQua3fFYcvS2m1s2jSKbWSNciELWeSDimLEvMTEjVu6wQ6MRn9BBQwLf5hZ6c6Cwg2cD1nrYpHrh",
  "key16": "3Rt4dbaJBPjyeusxBvWzoJ1iBEiyFZJbSY6Vj2GGAUnnxcac6XPSwYotZaFmn7cPBxsPZWQTWxgdnUYbGHD6XEj7",
  "key17": "4RnKMdKF14qjx8KHpFtuK3BE6j9hLVgFJW1TBTPmUTHRSDPL4P7Wf24V3JJbBkb3AALPgQ1mrDHAaXV7JAXrrgHJ",
  "key18": "5L74gDCj9eQjKB6yX34nn97ntuijtrQEGw5BM8orgwYiVV7ZuMJeBNs5KgCXWZNrDS9PZG5Nk8vCmVhDLKSqtou6",
  "key19": "3zTH8h8r2dPRBjNu4YYCV6RqaUYHzW9vSRdGTv6L7FpjpowsNDpneBDKPSKUabweDYH6oAzNTUdsQzQSgY9gBBNE",
  "key20": "3fM9CVetayvj5Zpzkj1xPmM1JpgZE82u6d4KuF9CyHnDVYLFjfFhgmmdJJmPb5TFufFfg6kCWy5pz1Vuvocizpmi",
  "key21": "3oDLLsihsjeEbNKSBxwu8dcr7aZnGCbfmsXqnT78bUuzusQEPsYneoByJqEgagKakddjULdfZxm3jWCU7N25sHkv",
  "key22": "35jpaRQ89L4sMFSfv25xv5WtywgoktohMgorbXLC5nsFkDpmKfKAvt8os6cqPYHNMEpUTJKEWoAgVtPuqyHLhSnB",
  "key23": "2EBfr9SGaJXJT1rfcXfphxP2ntDyNZuDWTc5FEekqjUb4b2eLafDZPvt97Fu9GN3ZXo15JdmWWewPBQmq1zhSwQt",
  "key24": "64ffZArMXyehsVcQRC8fGPiBCxbrsmab7crLgUAkgUf4DAc7WBaCgLQseZA8UqZppuDFZGTzd46U7X8yyvFz3fYM",
  "key25": "4ZMRVsN6fqFePh4BxGikVxnUCFZB6mdLXSPbnz1TQDV4HTDs81oDSnVAsoycZqNYw2LVftTR5mBswN8fvQenF5QN",
  "key26": "36XkaTys1JuPiZJvc6qKt7yg1EyTLsY4YFdUqVRqx5DzDpvQCu4XJm5R1Kg673Vf6aSmUzkKwNPm34NitJEkQGM8",
  "key27": "3zXa79ywSwhMk81LyT5K2io7ZB4JmPDQU4FxqyqaBPCrT2CSK12d9a7Ndie4tJgpKSUAWbFkXfvxXUdob98WCziN",
  "key28": "2tHBnoZsXihKcFnyHKv85GERfymfSBfWbD78kfQSw3vyB2i86iyg2vGeckqANqfciN7LTvyGXohh4fWm7vE2UpHo",
  "key29": "zwbvoXdSzMbqgyvfduajZweNA62bUMqdEMsRixgywgrkEbpnNy5SFx64pnHDcVXZFZehhuKWV22M89JtbitYJBW",
  "key30": "5UL8dXUBKaDQrrY62Raz4zhc7Gf7ERrgKZu8CmVpzic8FYzXeGj6oZ6drEtFi72qGi8eSLockV76uRa7ocgLZy79",
  "key31": "d16erMfE3EpRTaowTQqXPeQyR77nPsS7DKfJxowpZkCNXD4CCvsG55jRv3pfJQV1dyuBV9f1jdvm8pHjaXrgufh",
  "key32": "4Nms24KjnMtAeenpWW5arR2mE9K2hG8vZ2gMWBujqR7B7heKdA68EDzHfNAtGvLJ2inzBU63VNfmPAzCXkABikUz",
  "key33": "34opmMZ6yBpVB5DxsAcP7tFGMN8uHRmobgEdEd5EsojTK6uC2za1mWTt3b2dJTcr5qiD5Uz1s1Gvztex6S5oPiNi",
  "key34": "5DALNv5cDQnqzbxRvhqkh2ZVhrBaB7YVw194tGfbW1tkArGPjWQZXQHDZRQgB1KQ4NmE8RhZ5Zs4f12PeXxpRida",
  "key35": "musnAHWvGGpx3hNKGQHEa7KhMvcDkDf5DVx9VaCHtTUzMyKsGvQoXNFduZ2AHSP5P3VD9u8Vtdax7pLPuHKuXdv"
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
