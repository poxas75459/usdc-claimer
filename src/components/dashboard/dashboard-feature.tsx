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
    "4TqN2TNYKAoh4YEXDyT7Um5bPDbQRSqJ9SVDPwsW9A1ec43nQyUd2CFq18RpXC4fG6LYsWPgyEmkuQNFu7dgpg88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXCTSPvYhhqZ8nnTwVg4oKwhBWnnX4umBvX4RgXDeF4H1UrcqHDNv6QDjGLtN8XgyzqGLeRpwcc9pKCMr8Ee9HJ",
  "key1": "3FQMruoUJo6iRPJ8ge7EiEtYdgcNrdLDsxStZKBbZYMyQDZ1AqoXBffThtWf1gf9CGpfmn56tUPJk7Zsv4N9GNzZ",
  "key2": "52pTpCB7cm6ggaeYWSozXyukqg8JNHUWSRDL8u4EgTxDxXJwXZMSZbHroXUCB6k8BYjG6sui64MvgJJcNG5YB4bL",
  "key3": "5WkWb6GDFEmHtQv6SpYGz8avMn2Td8jd6FKcCNwMWcsh5Eupm5m2SKVYqPRkxZqDRudUqXH8FoQ4x9wKx9soZ3HM",
  "key4": "5RdwDuVxXnVpqMLdezMj6qmiu3oo8hmaY7gcrMkPY9yBi4mbfYHrbwgM45qa8w1TEceLavASwjZXms2KzMLjwtw4",
  "key5": "3jaaJS7o9QbqePeBFp1mtNavbCJz2Vu16jJTTEfWvppuhQjo7qo5af7b8BKeM7Prtp7PBdbUJHJNKw5psQssakk4",
  "key6": "3KxoRsPNKmMp7WMxbSmftDXXADushr9xqNKTiDtqZjMfrViBnbQoQS48MMtPM2csUrrNtppth9vynrQBmwGyPF8s",
  "key7": "5zrtGh8JtYwrcPSRAyJnBGwTZqsTzqo6VfNyBiL7VgnDEh1yLJufmG7y3QS4paZ13HxPA8MRgFHuWG2GbkiLZXp4",
  "key8": "64oTzDbc4ZGirJMoGvDUqNiJo7LthcBV55ouMgtvUKRMtpiNP8XFYmfyapaxjTgvGU3Duacwxn8ij5stKMJmKPBV",
  "key9": "4w7E7rT16Sjbyxogyy4mpJbdd93LyBTxFrmUH2M5yMLkoKRogcTYisfyptKmMLwECjivbqiXg7znv3ppo5qHwGLA",
  "key10": "1cCbojqMSTBqKX23ZP1JFGZejbjCXLkjEMT5TdKeqVFVJnskgVnDk52owTSsLznAgmPj2scwFdJdtqbEiHJQ4HY",
  "key11": "5GiugcXPMqNXK82EEsuS45XtijpxDdPV8wxRwy7jGyN9pKutGCuArFwXwJsAQCD4wUbYBxQyHr5pEyZqzd71Rbpy",
  "key12": "3mu3Ym4ZxAEL9nzmaeYcYMCac96qLrD838yEbEUfsmt8crEdkUB9YzahWdfN6rcAN5sMrC53exaCfQYrKtza1G8Z",
  "key13": "3RG5aGGehnHneVA2STKf4QcmwZ3EU7VAgXv3xmV83BB7Lj3ycS5tH3F5vrDC1XHdvd74CtfEB1tFwtxSi9pzb8VV",
  "key14": "gVSCdRAsZevV1LFYETXMkx4kf3PbGXy9qAGJGpH1pjN3MxnfZL32gzuxWjXdh5H29TRkasmsrgskpS4Gv2wmE6V",
  "key15": "7DG9uwDUHvjwnsJWXscpZXcH4XPk1mHeyTM9i3S8Dv8zX4W31gy2D6iU4FPKDL17eXJ3AG24hxeLszybw7J4tE9",
  "key16": "2pBnfJ2Sjq64no6zpdBcHEXYfi2kz47jLH3TYMoWFDpLByYDqVtVYvK7Wc7SccZM5x9JijJrPkWhbxuY1ivRpFeA",
  "key17": "3od2RfSzoc9Fi5GGsGkUCLEf6q6GvKFJsvyHbBejdarbDLp9ymf5gr9Hb1p9jiR7WQfy9V263nB8DniZArpaVLX",
  "key18": "4HzcQ4K1uyqRL78HyvniQzUEnDcMrtxUzmtb6t845oSjoZ4FnWvSTNZnfMc45htSSeHMwuPLHuA3vvy5Smc6xJ5n",
  "key19": "37Rn7UqmtVRx1RwwNwSQkbFUPHEkFn27TGgVNdq7Le2giJMNxmNfF2jSttPAmcBji1fMsyPo53aue6LjytGpXnV1",
  "key20": "5gM2NjGeBhUaYkCU9zcERsHr8paYo8V56sSWvj4MtNyHdw6rMYjq2fUazZu8V98zwtzWKu7J29T9bXhVd5ZZeh1h",
  "key21": "2cmCBtyP493u1Xk9Ndzpwym7z62xX4Qb5EWSt4EETdmcaVmE4a1iazbHfbj51i9vqSCewZj9Urzo2HkR31wD8UYu",
  "key22": "4g3xhXJGpYoFaSdYe7SKsqompmVh89TYV3NBWtPsRLpZjB6ERRxroV1AvZCSHcXMFXECT5SbfH2wh4fojoc9ef1W",
  "key23": "2ZALtFVhjkKRbM4pi7xFEak9PSRcNK1We1HsYzT3mbRu56bh3QuzVMUXXgiM5UTwtG5ae2dFWswuggrWYNyDXXE1",
  "key24": "57ZpcLX38vppuzhr3snukmBc4syX84THRfQccEZTS9CyrhV7T3iCZn71uKyJLW4c3MAf1KspPtSsJsVBqaLfYuvZ",
  "key25": "QJhzwLvvmqY6hr6REAMDwRbSr7qFDE4p8zRwEgNhuW8ndAD9EyNx85tg2mhxUkQ3iWVe1w3zdjWBuJowucj8raj",
  "key26": "W5kwNu2UBEfytdagBBVf35mRzyMmBDuH1EGmqYy1nEY8wAGiiXpt5FmhQgkpX1yzCW6qM6UuwRZcjZYnGaAXUgp",
  "key27": "5coZZ9XJdt1fgEJYcuQLJP1uGqPYS6H1XcSJ34GTQu55WLz6r6rFWycRi9X9JNn9KVy6VDGXFYx39Zt9ehDx2D8K",
  "key28": "4Y3Dt5ZGa7thKQhHhMGHC6DHDMjkVNPsj92vav3dPoDp9E4PmAfQKe4aX6FsCRWTVSDNtoyWEkG4bQpdXEpYQTcQ"
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
