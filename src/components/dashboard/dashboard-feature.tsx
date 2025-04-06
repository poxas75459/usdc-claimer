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
    "3XZQsFgPfQHmBh66Vw1XQBRpj6AmR9sjcEN2D2Wdq9A6a1qsMDMmqzqZDQYFwY2xnu7izBsUqFrpUmm2gsYBHsfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZEuugswVrUqNFcULWwzVLYkyxzPkhFmd1Phn6kkiDb3RZPMvLcRpJCejpbxDycDjoZWtWKVM5NJ6LNhrY8BYHq",
  "key1": "2rLG8YGLnsqg9qeeFobCSmdCbA4Q5A5ZEcBz9dcptqCSCd94QpXFa54bekjJASphfsx3qxpiHY3RwXGmEfBq2MWN",
  "key2": "4DTkyRnWzBvb2g9WQxki3NJwM2ehiU3uLNxgEfRQLayetFJJghqdDsvRT1GHy9bajs3TyEW6CoQ5k6rGmTLNXUcZ",
  "key3": "tXfYJxJsfDWiJ7dCC9Ngqk6JpWoHfoMaonDHJxYz5cLaAJmPzRS1n4M85C5SbZGPomjBRnT5anmxY3R9Cmb24h8",
  "key4": "4WDWjNk442PFuhT8QLVRszns8pGGEuX6wRG1eefquXvc2JvJqo5F4efy5awzoxtoU9tbRF7XbHr4bsRByNjkaroK",
  "key5": "MJRCst3Y1yRBqRUdxwUQfsPuvVmtzgdFh9Rus92TgyWPnGQFrd8G1VrUWh3nD7uExzukE1yNbRFMXbQDr8Pp7op",
  "key6": "ew1KV622hvAarTsQd3QphTYzZCUvG7FjVGHi6K8DyYtUaBGtidmt6nP6NrChaJYAHytdYKnymWK8CSvneaW2TNh",
  "key7": "5pejSdQyKqttY6Rt1CKh1arGGYRJnvNFrudnq8pPqhyEGfnUCk3fp545QBnhsxt2PJ7HtymsmtfETK13V2vpRQ99",
  "key8": "39JEn8rLjEaignpGCopT8uGHdT4WgsdEpjR46bJzCAWoZ429E3UTHYmgWQzebrM7BV5LHmjQpXyXaBS6WzAS3eVo",
  "key9": "5PcAitzvSyQ19ht2bih4PgRq24aoqc4AZUV1CtGt87k2WexgJPYswRAQB3ji82C2tpp7JuGeXQ3cbBi6W8idJuVK",
  "key10": "2wKnEYZuzPScZK8E2bMoJP9AYiNT4sAFGtZHV69j49BTgRHejLG5H5fm5UM3uJQApLtWqt1pjMsNJev6EUx5JDUK",
  "key11": "5qkqVimKbwSp2EF7MMNYn9u1Z3BDhXFqttWLdBa77XcydpRWxVSdNMJuvryLgzjuTcHySvJSDCtPjWJABamGF7M4",
  "key12": "2sCx4rR6Cm4G1WjWrjwjX4sSPJb76MZKoyHoaaTi3jUkqwy6CgP5Y4CQmdZy9nLHtDN7j4NimrYA9jkhAGCekPWv",
  "key13": "2A47ynxBpDoEUsX9GQKKYtFgiMoCW8QYmWG3Lkf3vh25t8DGM1g63GHnLTJQYGjcgGUnh7TCPr1QGHDGUgx6JM7c",
  "key14": "5zAaXpjTshgpj9RyXuMvpxvriyej9bzo7dT4PF56ZrrtGHHEu4ep3M3kYxs49WiQCFr43JhPysqu16BULjgGfari",
  "key15": "2ds3Px2Evs9QiRXmr1fb4twP4tycXaQVcY5ubXPePRdvv4d13eoWgSwMyLtNj3XKDhieutsGXZUKJqhkUCjyZVtB",
  "key16": "3jqgi8JiWjuzA2w81JteMYRSfjBTMpZygL4mB2P4DbLaSRoWWwH8NJiv5rArTSDb8sBctFUSDjWzKTfLjifTaZxS",
  "key17": "5XxHa2zRuihN2jksk8hbq34GWYPvu7aGR5CL4gtj67s2cBhyk6fvaV7DK9PBH4dapeHWfojVPMeYX29yTkGs7wrZ",
  "key18": "4WdjFsjEqhEJRmdUcxWuAofcnLzBb59gpuSS8sHXKraTf6WFyARopMmaYiHo1fxCuChaggTLX89AZaMWKJyRBnDB",
  "key19": "2Z4FZc6ESihaMMsFtxFsZneWTgpPizFRAFnEp7mQKfx3E8ogxsKcaxEdvWTrrgJ7m25waZJPbtaK5VQbDe5WPzVe",
  "key20": "dpNzdfv366RfGyHvwQe2cFyAGtfFT3EwcQw4jssjexQZ21tjrGc3Fu8bwQWxbEepkw7tbZpm3DBjEFNhDjtVeJt",
  "key21": "2UCUcitSm4r2wzBWJFWB2jPHmMPciZRfyLS4g8Coowbhy7JmmvVLxPwpNxeotUaz7MkvSj9ktkfUatgkgyvE1LAb",
  "key22": "5eNKCPJeRd1n42wpzN83ZdvmT5uH1yKMVu5wAKSU7DA7EeEkMFzefmzoHTvtwbk5vJWSbWFTBQcXuhHNj926H28p",
  "key23": "mTSBatQDrntgJdWhNWotDbWLBazqH7i8Q6jeeJRmMZtwDnxhRoVr6KzaKZrZM9UGTLLjYxHnqfKKKDHHMfdoUvh",
  "key24": "4XeeJ5n5exjzCi3n3h8SwojGfzrtHXqx6vzDkP2SGwP6UA7gxBA6UEjjVKDmyYiSHnXq6kaLtfPKh5i8n2hQzcsT",
  "key25": "5bPah8sfmZBtcrJLsTY7fdn6H8UwgPdVbUn6vCX5ALb2qswxyCzumKzVz6hwVqciGth3ZY7yS3aR8Yd1bTxR4dLm",
  "key26": "4Ep3BZRAUgv51puPTH9ZWs7GZnKyHY3yuu6cKGuL9gvqbzvKdQwUVKzGp3D2qskR98hpiGtZbj7mrxE4Hbm2baqc",
  "key27": "4BpDpUJpQB4MZykaNg6SDXtGd65hzuug7SrY7yoiHD32oo1Z9XzSfjy68b5Kj3k6R2woH7RUJYEvGcNPMxUHq1hY"
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
