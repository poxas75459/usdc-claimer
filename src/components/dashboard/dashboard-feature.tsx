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
    "52t4cTcfRQTxuVjgjSBPiY1Uvoms4X4hwd8bXxVxtjUVesUSesyNUKHRxoAhXNAMzkKuuuxE2zBL6ifTJkyYGuLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZdJ96mCTtudcuNqKtxihj1hDFeuBPckZskxgVFa7hVHgrS4Tg59Mac8eADqfKPc8SVDe6LFPZpNiYY3fjSBVCx",
  "key1": "p5o4du5VzwuPM18Qhe83ZuaJuyjnHZrk49ew5GLJhT9arQRGDJUmMZXFiBr4vzpgE92hA7G14Y7erKNoHyVmmj8",
  "key2": "37nLP1td6FeDBUermPRwLf3adkQnmYnBxKQZ4J8TRKNNLv4gNcmEkgcRQLzJ2DwTazykLH5vywC4G7pTbL4V3Ygu",
  "key3": "2662EJWg2fjdzBshe8ApLoWTPfb8H9sZsJvqj7NK7Dsea8H2ZXyuiLcUomgEQhpDX3qQSnHDZjWnXfMyAVPFaw5J",
  "key4": "43FQ7vi6o5ffLc2dWB3v9KBKSW2g3GXc9NCbp1WmoMrbEUUXcs1kHKYb3AUMnvrsHyAqxVaxAP3vzks9ZicK4bV",
  "key5": "K5cRJkXeN4HiciaKN8DGQ3nEY9vaU8icq7vN7qB84BdSCPLVtMo3bm72QNBCATHDr7ZqUELE7uU3esZ9AHJtQgw",
  "key6": "4h9aPkuAtniaxK5zGBBrzB9P3Wa2s3ZTKMU9yPCLm9vipsj2UEARCAzq7Mj6t86LZucWn9TZjBCPcyH9gAcwWGc6",
  "key7": "3knKKZ1zb4DeFDkde8TW7k5zdFhEaEtT7Mkjm5ue8s9wZ5ww9ycfL1dHynErvAy4r3kgRCLbmbPxY4erZaXTNoqT",
  "key8": "3W93UjS6EqGVRk627bh1f3ksBEjHDSjokwvEobE9VXZyp2Vc1Y791vp4bz3Gc4512cyvFmzfrJkpM2cVgJuvdeYu",
  "key9": "2CHaDj1RGjCAFhmXqCDm72zKpR9CuQD1MA3TdbCsmn7fkGSZjEoVGrrL3LVKA6WMNC3N93wE3R6XcojcbHBv7mmj",
  "key10": "3qpByKbdfeAxCTKDMzfznKTAYQgpULBZtZsmmY9J2ENWaFbE6RcXQaPHHihS4GkE5neVT9vsSBFRjDkBji91TVPi",
  "key11": "5H3N4E24ZDgT74gqhSubiiusKRBBKGVQu6eg3bVULop6ETVhAPgGK8H5RM2Q7QbowL3LVUVrMXHdat4YzzmBoNU9",
  "key12": "2mivnCq7f6srBiHu69NAMaZWB3C6Jp8yrW5urPDAkH48aC9GBM84S2xZaExm25f8UZq9ZpZumoBpE4hh1AYHHjGT",
  "key13": "5Dq6yoehVartWmaCR6QVAKAEUjX68cV1mrm1KBQ9JqsrQKbMoe2csGH3h8FpFVHSYCJX7EtwFytNdERCRdrSQyp",
  "key14": "4qGqiS2MCFg5rHRwuMgoYKw73Cns3fQz4oSxqBWUzz5pJRrmDamDgCBhyrQPVrCZES8Ds8UQyioWeRuRLUWaB3Yr",
  "key15": "2ygnQDuTYWFk6DEKVES4qzR8cnAhtuWDkuZHPejiiQQmracZXjEZzH2CRjCC1Gqpc5vrGgTtCcfw2YmHcNLwB5zP",
  "key16": "2nAdm6vwiSQMrB9kd8KQQVxQsvanfdUT89bfgPaS2hkNDZMpkiLbNzYGBLguPMujomt4p4P2KQ8SeXK8DK3odYdN",
  "key17": "4BFjyJJSFpjj6i8gvTu1jtjQnHTqiwmznubkZoZrmNgvhdGTTHQWSxA5fKNRJyK8AHUS1iw5JEcZPKZTonwfPgmo",
  "key18": "5r1t3vPooP5rNzw29q2CBAtjbEjCgZaGgnJhuPWcwqbTiCSqy4J4y7xUF9VjMbEAW56ySS5ywCNBALVDMteWpmGP",
  "key19": "5RWFQP3CPbfYAaWghPaqvgYHb5SA6UU6SEyTUNQvBuqMx1Bb8WhPoUsbsDkVRe69RcLRNNqnzVaJiaQEtpo5nGF3",
  "key20": "2zCBqys6FcdWH4MAtDScYACmMURPp5B5hWrei2VyuUJyhwHT5RGprEGqemxuWFceg3nrTDP9ETNuSUKYJo1M1d3j",
  "key21": "s1qtu2PV5GK6rvUwVKbfdtnSjpLieF3DBvnVuPCG4UStudqvgxDx83ckXoWppK5qLtVmnUepPSt74CQHHktu8Ku",
  "key22": "54z2EZzPVxxxeSDAzmQyRbD2f8nQvjf2Gtjhy4Ksn9bdPQfKf2uzz65MfBHN1kahehboRux5ocTHNqZikGTJCEYX",
  "key23": "33zXjjhDFf4Ku3SJEezAKpGFJdtHCDprmtPcA3FnDuWtkQEhScesVVDy5Wa5Lyu4Hknj3YBHWemyyuupbXFTjKZX",
  "key24": "4y9HYUuF5fs48kY5rd7vKdaUJWLyZdHNZ86hhB9SJf3LXqMhdru5BrfSmM8szyaUAuRgEP3gjapqFFtw2ekQK8GA",
  "key25": "38xgxmkTPep8CHbdQuSNzfzQx4HHnjNnVV5xcQrq3GScZFQqMpRwPbR9j9Dx7Yg9odvKUmsVsaUqdsR3EVMTgf1E",
  "key26": "24tNKLJ7zw7oZ2f9nvEx6QBus5udbcavWCrhXvz9YbttwKdU1v2VHfrxFpVqG4K2SdMdphb4pGxyibt4cD6sZTwJ",
  "key27": "2JaGXJhcUPa7rRRmAp15g4R7CKTXj5EfNxCtHrfgD74himHhMCivxU4fQ9XsCzq3KdkSk4aMFc9RznFS5Reqt3wV",
  "key28": "3zMMF35vR6ovyVC5Hztq7k9JU37tXTMRKtpwmJNs8Mh4ekka3PxYXTEikCip6wrt669jT6SfXaP7PhQXPxqMQEVq"
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
