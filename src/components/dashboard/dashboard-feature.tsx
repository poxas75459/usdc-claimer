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
    "3yM3jL2Qy87CaiqTTMcniSLVJvuUe7vv1Q9Yv27z199MwdLZ7jHEka1QCcN2Pf3CHanZ8rQGMEyzStCt8J76LtKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKTpsXGSFFNhsJWtsiRYiMoo2FPFpJD4zZg3vr8pCwFzxJB3wS3hfiKTwZVdL7cWZL47PsVh3LWn7F59XK8Lpwp",
  "key1": "2wNX2NstxJimx7uSFarQQZTWeusvXxBeTwSf4fPRGxFPyNsSDagFgYvUmhum2fTrtWvQS8obVp72iiV21WaWPeue",
  "key2": "22HgkgKKs85TWtKJZvrdPZCzs41ncqJ8pUhK6HbPpteaKb42bLsnBSdNaoZoBVLR6tbeW8ih6xNwiBJRtybN1fee",
  "key3": "3iTjUbY15KLhGqQJDumVhxEFh3ycgYggyfAVi1Dv3Fyw8DgwEJB4YiciK9NTVZXyddpUFggW8Den97ZcHAHDg98k",
  "key4": "26fwEtd3RMLWUcUs8N3tWGNwyyVWXKxV5kNkuZqXzL2aQPeDwmvkfa85C1uuGxtaGt2JwGqR25Mos1VZj4KCTBn3",
  "key5": "aqZqW8rZtZPieWD9Xeztgyxx6W9gAwnGuxMtbZWpcjohYeXTiLyxtcARiU3Z74qduXHCD9v9EUPSAS71DxiNbos",
  "key6": "2XKMBj2dg2LdmB1YjSTrfiinMXazP1p9hmgX8VupEQZAYDJWk5b5TS7xDC6vz2QTBL92rySPHcZwbUfSpKNfDKQW",
  "key7": "UUYuQ9GhFsqEcRvwHMbRYJx2bWfpz72jYUBY3LpjumiedK9sUwZW6K6xxTAGHht66zRmEUqxaYM8nKVjUV78qVD",
  "key8": "XJEU7VJhJUWsvSTi6iRk7Ya1WXj9K7irnvzFbXqE2DhtgzcbNGKiawnNc3dADeombjrBRGaEP5VQ5pTZmPPHCQU",
  "key9": "4aDuLYRaHXN1wavZWGTzKeUMvz3NBeQqWyWepkjqsNTrfb18pZGbuyNpS3fCwj3bkGC82Xf6pdNvvpSamidP8KZo",
  "key10": "3teQEYAgaaqA2Stfet75bg6YoFeJ42MEf9m2x8nSKp8UzX5yFBGK68rTeMVyUSyhALrFrfj4oBHw96gRRZunAP7L",
  "key11": "22PhVQCex261PVHw5hRQAHFN1JCzNmt6KqiqfBTkY4EaiSeGdZDc6MFczW7DhTkBtow1x7gt52WwbKVHNKTavAT9",
  "key12": "2Pyo3TcW7UMcsAWGU3M9UPpzaznywy8sRVvdacDiB7gqjzXVx68PZk9t1Km54uxRW2Btmh7gfU5NyNaEa21ry5C1",
  "key13": "2mvhNA63rJPgQEs55m1ABdw2Wwe3vPa7SFfmMYCbDNkqufCD1wk1rkbPzWBSVUVjyARnANtHpFuk8NVKubSycpRf",
  "key14": "2J6yAFSadBUMvPtqMQFJKrAn8m8542EZz7s5RAoeiirpA5EnXJRnsK2nYNsYgHQLPQoNeo5EXwgeN1m622kjgTFL",
  "key15": "51hW32W6A3FG4M9SFJrpSiiCpzFK8QzXF6E2jRGcU17YVHXEzu2c89ddxDMr7J8hADcpcuQrbMUzm6p8CgddpZxp",
  "key16": "2ekxCnXQTycEFtLEwu3VprE9cb7ESpHcHF7zxbnidkG3s8XXhErSCBqFLkk3UWB2poaE2pBGeMA9ogUa9Hb4LbsB",
  "key17": "3sVP2AbbKvmiLDHGMbKPNqun8g9bxbz49tvEXnbacG9mmfebHS77ukczdir1xqZrmrAhJHuQb7Q89zG9YqKmZsar",
  "key18": "59o7o6QgA6tj8U5B3BpUVp9Ncz7f5kcnUdkQtFVB8a47gYc1uQh5E2bW8eTPM1NkSmJksrDZ1aQa8sqFuqQk3JK1",
  "key19": "654hq6EerBYuCZzW5kyKDAWh7M6MxfrAZghdSP8agkk7LzHJNi7whdGWH8d1zPyYdvio31hifRySQ3NLphQDGPUs",
  "key20": "5eYB2gSoGXvnoXzVvvVTjhNXjtkcahUAX6kN6sdLAJuUA8rE4uWBvErQLh9nhUErpK8TUsDJ7ALeALNQW853GZM",
  "key21": "4JzGHnkFN5ykJr5tbFdvQaFvjTuSyfxo1sRqGPDELPzb2gTpAsmfYwHccme1kvuzx6uLndo5VY4ZKzfU9TDgJoaN",
  "key22": "3YAAWRBSEgKksvcSzTWvSRYVdAHaLTdhzPx4PuL1PubPX4DuEeb9dft412jNG3hW3mfUvkKU6RDByQ8b5HTTHQRi",
  "key23": "2g4wGAfFESyj8NdwCviGP66HNgQENL4AKW8rQSrfGkiM12LabuWZHKtZPh5NEKTavf9ucNmTqxhrp2nZFzDed88T",
  "key24": "4W5FJDBG2WdzcaEwS68Rj2YHa33RrCAEJK2M3SghorLbPP9hr2AS1fUHpPvBp54z7fp6ifH4vksvagD6YVkpPF3e",
  "key25": "2s8et3b6fqMHKy6b5s7y7ViSFY2cJodfUK7i2js8x8d3s3szAWpoX8d5UvQcD26jwVJz2PyBxGNTCHPEE8zNJ5MC",
  "key26": "4kqeM4MRH31bbSub6UAQD4Ha8WJ9zrYQ6LaZM1vXDEs57fJUdWjLEooBkKbDWGfGVRuyYEu3jBVJkH63gHGgEgiX",
  "key27": "aUDhoqWAtjbHFD5siGaCSPE6RtSYt1ENWVQ4GwfVL8dxf7zEq4GxNLev4cpXG7GnfoKNMcGmd151KsYeZqrxBQR",
  "key28": "52Fe84nwYBZ7XpbqPBgHGH9RFqihqe2QbwwJUsPV5fhKrC12YvaTzmq3LqBiyQYHEWCgjkrMh8ZtDPVGpyVb99Mu"
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
