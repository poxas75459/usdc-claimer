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
    "2c2y3ygZ3KygUQE7XGKfxjr2hYEKoDu1gmLwG9QFcmSRXrkPWo3yVXhWkkntgmUDQNsrLXdGeoWrUj96RnNd9cM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqiiy5KirRoEyNaBXZPZLmd15oVxDWAWiovudTCp9hPqe419HHK4umDerB5w6qHXVv9ft7gYpgAh1hWknwfY5FN",
  "key1": "2LDXFPH1U2RFYVCpNCfPdT59gRUbEtHKu2f8stj86xKgrSFSBzKvqSV4aZmSxYtavFQDpRhRmUW29hAGdSjYu5GR",
  "key2": "5yxrobSGZC6LSF3XQsHgP5mu7mWUsTmXox1SRNZgsVvqUjsYSzZpQVrcYDf5G3ER3rq7R7dvPiUHkPCStZqVuGp5",
  "key3": "3UfvxWnkZZP3DsejwFqJZYA9bEeL9Bz9Y38HPXDiC4v1Cn5xUYrC1yVB8N34U2DhR1gVPTZetexjSKF9mpAtQTve",
  "key4": "3djeH6gsDHHTFh5h9BAiz7U4saTgVYRaFENJgsgGZRnmVMwNAMWGm77JsrYKVBaWm6AAzofHXeg6jfgQcut5V1TB",
  "key5": "422GXQ1SexZ5y6SF1LpCkPGuaUds8iCjTjuJG1z4zqsJTpDPh8Ls2EFi9ej84E7J6N4GfoWJBpsJ5MedRq9gitxw",
  "key6": "57pWxRKVDiK1mgLAUvUkWHyDuNosTCPfnzygdFZxHBtdeyCovWn6Yt6qaGQTAN33swySEkDxQ96QTw4bp2wnVk2Y",
  "key7": "42F6ubYHvfus813maRAwg86zetDqejhs9NDbfJpfzuAXxu6yovhVfLqt6qiB9rswvUiMnfHYirko2u3Y5U62qfA7",
  "key8": "5cdWeD17VUjhQEusFoQBf6XqpVpSQsh4nufF5k1TZT4bZXKRGcfey2LUrw3oUhza2Dsn7p5Zb8vcTnGZ4buAMpwF",
  "key9": "3pF6AJh5tGKosB5Hnsus43ZfvDa2nQgKgBrE7vjxzsH1fBNh5UCeiuL47HpfT4Y4fidZoHM4JQTYERY9SgyvfEKc",
  "key10": "3gXgu9HHpyXD4Ea6zn9qZBfFGX6Ugkc4hZZcnwBidbcFvGHJoRb18FYR15fnEcrVqXacpkvMwYgfvoHYDN2aHVSx",
  "key11": "5fqEXGqaur3ygxb9qDeFF2wJsvD1c73W69fvaBaw9mkt17ijih1XrjqgmXYx1DxduJHNY6NujmGVDi5bZpV8UGU4",
  "key12": "w4v78RDddAeViWTzQSELRvNYtGKuZtCnF7EgA9Q3S88VEVNodc9gFeLJYqhx4f8XncgEGte5WebfXKzZS1FCc8T",
  "key13": "3d1u1BmjwqgHNrANPgY2ZbDxbij9DwGhJ3tKYS6ywF4mRxwRyXxXBUZZyGEddG9BY79eUw7Kqm6ueizduw6oBRdH",
  "key14": "4Rxhi4gr3fUpUumkpG4oNXQvnSs99qPJsQ6YAsAxXXRbz2SFXWD4M729m5NZfTbVPExfaKbTh68vVa4SY5yDKYLb",
  "key15": "3miU22oupcRsah2zTPAwkLSdraGkqwEnpPboTVeD3Q6BpZCxaLB2BpNy8cP9HbG9mWCLPK49eSwh3bWuLPBcomLA",
  "key16": "65HRp2gESzEm82mMGQcbKZVDJx9jEW7Lh7m1tRybSHNih1MDyWNak3gvXgGYRGYKqb4Hs1mmhJwpsJ8emsChiWhu",
  "key17": "5xwcBuJmWe7aWaHjPx5e4cGZeUZARJbvk8AGnDo6eDNJUKwamuZdi9ToQGEQFU7WV4YdDi7WG1oGywE6o6BRw1vA",
  "key18": "55XSTQQau2EmyoAAt2iM51uZAhPMurRKmFJhU4vgDSQMcmCPpR5Eq27TDxHt68i4HpWqX68Y9vyB3mGGpcWFBkVb",
  "key19": "27PkJZwu9YDJjqy5vaYmsGbR4e1B65DFetMDHEzZoyU2Sfv7tQLeC2ftDbGSw9HuWykMux85kvhxEM7efLx9Brv1",
  "key20": "BSXxpENynKLUt4NkL8T3SDhGJDV1Nr8KYQuGiZkYEeZTBmcJ6P5L4WFXkNmSDkBnCT4bGwgdBTWBZWLuu2xvwVi",
  "key21": "32PjWEHQDQ93kuAYxMjmdDR2WYZHGLTyry5PnnaY6xn6MCJYLfB3ahPJqHc8krVQ2MsucVbz4uUbY58BfZjk5eDR",
  "key22": "QfGbGos16ioDGizCc31ATdPhN4VDuQtL4wngCFRexsuhuRZF86Qtb5bUn9kLJAHgSj8zKesWWCCSMr2SBkccds9",
  "key23": "5iZUqfjeGbhSgrhhRrKJMSnfRJRMiyhjkzY7nhgPjr398LNdCJyGVZfAg4BQTYSxKakbPfxxHdUPur1NZ3KJRYAo",
  "key24": "2f8Z9qRF2r7sAcgu6hvGXWqfXQ8t3ncbwsaqzf6ZHYYTD7ifuNPc94Uv57DbcGUt56kuZyk9kh8zqxqTdUucTBas",
  "key25": "564z79HrHnUt4KMeLNbNRQNRFfmeacmDoas1qbPYaP8ShqFgEmsqbV173evuEzud8dTwCWXPsafkTkDzuwRRfVqq",
  "key26": "2bc4AcxfmGhig8iKH6J784AdNczD787rW6mDtd5SFKdpzS4H1tJgbXkjbur3UC2Wat74R24qoCVLCGcHJ6M49Qib",
  "key27": "jEUyeYeUqkHHBz2fdF2XFkSucCoU6xzsLZJ9KfM9jecEM34J8WCrFaBT7kJHJCXFKFHERLj3faktx9nY9V9RXD7",
  "key28": "5SmLCQqAbowcE5C2hCD6ertKhiiiWY44anStUnRYgRVUrjubZgj5kBZjJPp4XL9BZ2DUCCDGxuVVY3qJmYnCJ6ZM",
  "key29": "42zcafrUb9v8EhojduPCMYSkmk7uJYtNFgYvkGimgpd21XCE3K5k99QFeBX5GS18za8UJATzcB4xSu9NLYrcCgR3",
  "key30": "5QNeCUBMf9mWRXiuMk7M9WaW8VTuzsAT6eksjcioad8m4PJjXMefoacWRfB8YLuyTs6GvTMT759W2Qsq3ZGoNx2s",
  "key31": "snS26ptNaNaaxz5EzThrHXtcsLrBNo8sUmJCJmnF4Row3RnHiGLEmJYBy36zJkYV6RJFpJ3gtAHfUZreXgfjthQ",
  "key32": "2Eeuwfb6qrV6tKe4zzDxPCtyuMZuNrAefwg5EYjRVa8nLrEqBCvke3eqEPMW5a7zuqnLtBbwpkykrvRjkkkZPwHB",
  "key33": "2EdUy7TSNFWQYHEodnL4ckikkfZzcYoYHKnNZNT4tfP2bcTnvM1ygcLsybC7dzEmtkJtREzyL3SyMNcibCqwFn5G"
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
