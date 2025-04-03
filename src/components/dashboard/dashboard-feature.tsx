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
    "2VkrhwAjcrW1ZFetC5XoosRFEVRXSDjZ5JhVuBRUYLWeGSDeKbmeD3wMs1HyahrLUnv4RuBbxppNrh7xFzR8XV6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKqwobZy3GpDkjFxW54j6VFeBosKujmMkJGx2LhVzzcgRaJ4hBXgVzz8FEj5Rrp4sQP7588VKKBu1iXxgUk3cho",
  "key1": "4vif6SbEyKXEfTxxFyBTfADqeghbRpUZsWm89y9D8B14jq676fyxv1sKDJ8N1fmr2eoPVv3Mo7ks1CEKJ1wxnxD2",
  "key2": "fLsuoaVEZ1ub3NrRaczyPVa8haWAG9m6SFsThxLsYULB7wBPgrkYSh3cgHKdDppGwJpNthNoPRoXTDXSmAcjdth",
  "key3": "323dP2RcuSPuHS8C7uoUGkfpB8uzDxKU5gsgH29xSZ57dy9BZYVUfaK33tnwD9zZByvJuvrfG4LiDjhgrsiigvfE",
  "key4": "3owAaVRRpxTifCDny3WYVcfi6ashjQkRq1mt3L8Ryx2zGMtf5C3LzhyFsHKeyreS3FUdfqrWYieXXJMBxo5nRXyu",
  "key5": "eHgrFqW1s7aNR3zLWUWtvY9NpjQqwpvbrEjqDmZ3CyjANWBfeqQQcwsJGWEcnodEscPtduqMhjnzYyKw8vmKZC4",
  "key6": "XHwcEgcXj2FLpxQumgft9r8RcUTr5bGbwGhNCVEcvYgvyCXmTVtGpnwDZxH3MCwPSUd4AnPMvf9UssePxPF1inB",
  "key7": "3qi9rAnSY2eiXsGANC4GwjotC2UyFpCxQzsorTswKM8dcoaB38ScJLABb9XVQqkwEx5nsKfic83jqy9ztF3ZHFJ2",
  "key8": "27EWdERemhMuneakW8tk748jZa59N8BghrtePiPYmmHz25axfY3Fcjwc8gbehx3ggt16PhRBuVnmKMgQs8EoGtSX",
  "key9": "6ZFFEWF2cKGyoAPcXgUYmuDmmytHGt66RWgKL1X9p8bv7mcYG7W1DCCiJ692QQP3WDvLmKJQbkumQXqfwiVzF6c",
  "key10": "5MAwKxQZegzGNeVKHwET5Nej3wftYRaE5xQcq2gv9TSeDeHGZaQqrUV7smoDU8YADLbwE6wt2NFq1YrHk13gBE2U",
  "key11": "3HvHJxRpnt9MQ12kzw4Q97PnCCUbFDDi24hNnAKZQZyuh8qXRsMYrEHVHnTDyUqd2QJzEa2Ls9TYkHEeEoLB1Qo1",
  "key12": "3EzbHJEX6G7xhKDDfCUcqeexCAsW34xGZCAUUzWe9M9ZUWQqTqH3NvkBWBtJCtyxSaL9NBQ36mEgwWPYYEWdPTES",
  "key13": "5ctcDXegk4JDLga9PN4jB6x54Gswr33v1yX75G7jhPJ7FbtD2iJJccqYahrx41x7PnLDMzLFpnah32CAKDZRgqzm",
  "key14": "7WSQNi1crwh54sD44Bovk2qSMfMJ2aLQsFCoEDvoDN8Ynsj2AGCLuJSbZ8g3goMsyBnyZFRXcMvG18zEjfhC8Rp",
  "key15": "APk55fLzPZGLS6GukLGdUBpjjBWnfMptpTc9Xona1kzMFZEd4fbLnCKz1KnPipYKnrVyJXGz35vVPwRMjSJNKCW",
  "key16": "4CQsj1kRLSHNFrXdg4Lexy7TZA6hahSSGigV2ajoGNwZ4crN7uRLv2RPUGP3QY7Z5MA3KsYeo4tgUTc4Qe41kozw",
  "key17": "2EQundVhx7XEivB8JDKRRJeEzBGqayTuanKNxNWUidhCcbM65DF7aSuYWvzNbbzEw5nyA7uKVYNjzaCexGnUpG62",
  "key18": "4mt7oo6VAa4rni9wbJoko7vBhiNDwGg5Q5HvHay1TDS5ovA1wPirmHiFH4QXSA4ZWmxDtCKxAj2DzZGQ9XS424gE",
  "key19": "5wuF5cKarUpzt4kSfKBM62yCekpJqYeTi9k4VUuYNSoYrwpbWY47yTRXmh1VYb328GLGkn4HY8eqUzwRr4cL3LKS",
  "key20": "4BWG562PpWaNGFUfLEUqj4WziBeKWZKE2PvtQbzNNxSUfQ8orn1YbchD2CLNcahbjjZ3Eb4Bt9HHEYwLEB3R6kMb",
  "key21": "PVABx3QqBj4uT6dvXNTgYHYyq4H5ahokcu8Hv6411rqNx6g59ksefGyavXoxJShtzJRTQTXEfdrqQT7RUaBa7SP",
  "key22": "2vjYq1W63VjGGzuWddne2VGpW8ZX11SZWytbYFFb2VnqnZSdSWS4R8NRZZMehGJGmLCUX9HtEhiLD9zh7UwuQaaS",
  "key23": "46AhpWQbKTc6WjgkY4a1w6ttZXJYEXrgHPg1f5FPQT2q4HXMhzX3gewnAwkQmxU1UgoKFb32GAGGqYqUi6vXXs6M",
  "key24": "5v5zgAj5fyLL65ggwR67bieyWgTwY8hKD39puBMRFuaDAbVmWZGAxTYoAXKinxXFt8YdPiRn1Lyi5PJDYSehjPQJ",
  "key25": "bwSxBamtxzrJtqGfHZH4zuk4xSfYW7Gj89mHVvNotgujMfR541kJpAkGSYQTxib8DhzBPwHSWiWYJSoJCzBVqrg",
  "key26": "5RrJ7s16dEeCmJtgFBay8gmFXvuhJX2qjht69GteSwUyNbTmVg522Sx68xuenBt3qWHf4tKZKbkTpa5W97fYZD57",
  "key27": "JwJSH3cvnRyfrr3VmAx2gsRAyrvXviJRQoeBm6wa2APqRjEkrh3ZJH8rZc8aznX32JyWYbxRiQMkYinQfVeyYzc",
  "key28": "4kAxsgN36qD5tReUXfnvAz2DY56281o2qWCa54i2QCK976ezhBt8UkjV8wUxhqbv9LKAtt9ayYvSUwKwPheeY7DV",
  "key29": "27BFswc7L5hR6dLzM5Ync62hc8q9iWnGDoKCqXPva6JdAKJJXaf8K8aXwCte3vzGbaQDNXkA7GGq78wH7HayEDUL",
  "key30": "5CiRW4yjggxWWwradigSXQvWnyiz3RQGpQYLGiLWJ3tesNVfKrKghUmEsvU23D7Xy7FQ6FAjNjgi4QqUeoU4aEd4",
  "key31": "4BeDuN1Jb7JbJ2V73G8xDrqsdVVLf6tDE4veVG8EgdVwabLk7HhUQZWCqRWzd4eJNpx2Cveaxa4GppsoSeXpTK17",
  "key32": "2zHHr9eKpnKR6rMq4TNYyjb5YYrhE5DNJiv5ZTFNi2V2Fh1taEr17Pghsn7W3CedBRDJ4bwnFWpY9vRt7oRWjJb6",
  "key33": "5nncKq9tVNAN9EFWxTyXhvso2GDHhxajjyzFQsuuHQ758uC1wdADPRKAV2GqDqmonuPPfVDTfnxHf2tPgabaSR2d",
  "key34": "2BkB3BWzCXmrAQKJmCVzuDbt2ABaidmSnDFNdSX2Uuxur9rCZxJ5sfSoJEsJNdZRfYKsRPUM6kYmEBXWekpv6E34",
  "key35": "3D82AcqMFwv7GDpLkKZAjJGY3KQ9hJcuyWGueQa7WKsDfrV2htACM88XY6iCiPASeAKwE45ahzwayyUawfHrsdxR",
  "key36": "CW5KpvGazTc6s4dvnx5dx2q3fNGtM9mhxP686weXe986kv15EiSTKjAJ3DoyS4BRMTMis81y69ovmxNDBhWzSuH",
  "key37": "5eqSKecfDYem7Q9tUhqWuBXY4Xuw6fB6Bd3vCamUV3NxFire7L5j9SxB4NXDDd5Fb4iPCqbHC29kn29qW7d9Cxqj",
  "key38": "5Y8VqMGkfWDsskUceyB94McSjb4B1pySDdW6QZ6pMYQYVv8g3ykoZARGGbXbc5YweF5awieNZZXcMCVqbMPA6Tdx",
  "key39": "3qFMTqbFwvpirAX3LVUTejFeSYkTmPuA3eivWTifXbMUeUkfqSzXp7D2CFoG8ekXF8waEQ1vtLKnoNCEZJwKZWYV",
  "key40": "5PfFT69NzXvjqQkP2iNH5ADkhLFdC4xbpGXsGZhzoH4254efes6LfVvCpaAyAiJV8aAfGGQ7TJTN6vL3pukt6oK8",
  "key41": "3cFSEe67xt9iY2qcUpttdfaa89XuTJCycERY467MKpHmL3Bz5YKWh9F3ANTcKnHYEtRwDPpbZcZJyy6eEPfkYAeV",
  "key42": "XRzDFuywTy7fcirUBmz1aRox6Hm8jgtzzvpmbVYQeVLALD2cPTSx7F6dnCC9nGzU92GwVyKNk1TSMvLFMVxfG9E",
  "key43": "2woG2r4XTv4UmE5Xfcf4DFckaJsQSGHJzSn5YnStYKFnLmHvDmggJZN3WfWNJT4Rz3QoCN7v2SaW9BxG45qRGkw1",
  "key44": "Nopq9tj3bhkhji8iVgz7VMRLZ4qbHPc4Qdg9WburLiTC4WZfw54sewkUqRPdkUkxwsWD9DZYhE514XCJkkakyAF",
  "key45": "VXXxNBkRARXQpmbiXJkfbp9QoZnjhA9cSCg7ydzM4wavGC3Jaitqk4x76y4VzUcERZRZZewyitaktcdAMtcKh6p",
  "key46": "5v2efgfLz3mWcsLtGF31THUk9D1heqST4XJEzZzvDY2PoSYoQWJx1GfuJqYJt6gSEkr78WUv1petsd71DEuQGMBK"
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
