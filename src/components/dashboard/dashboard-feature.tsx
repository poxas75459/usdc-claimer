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
    "aFK3EGnsykmQ13eH8g7mmwVKmMEHanY6R1f6LrMRSVbpvevTawRPMbCSZSEjtmG7EYdTwA2jmnSW9wDNDR6LRSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7eic4xLiteX3YwY7WZSyfWcktruyVJ9BTZrKA6VnTCiVM96zcCMGB9m2AdmpSRBhVnGAP5wK6dgUHdULcG8pVm",
  "key1": "4GPF6ZtkyGJMnyFPKBngS6FG7eedjFq5qQZFv4RYBzVAKLDJzEYn3daWj3XbxvEwqkxDpyhRyhfqvwdUoLfCGKoe",
  "key2": "562XF828rXAFTdF15SFGqzgFpJdBS7nxix4KW4C473kErRtFB3LTaPaky3rSaQ2BRBtooYZdS7pmqa6QF9bu31oB",
  "key3": "53FATAJcsja3EprDdzGGYMVUqrqpcUVeLHfpE5zzceS1y5PBGP6mHjkwvTjqXNsGm2f1kQiUr8r4iQLhiz38z12s",
  "key4": "3SSttJoTAnj6HVvYvzeTppfnxSScnFy1EBRn5vae9xTJ27XEme9ZnpxpoJqHbdv2kPMUhsL8u5apUKTphhvDw8R6",
  "key5": "4brGLmTrCX3iDFpb84gzx5tmYz7KPJq8j4tFvGZHHrpt5dnTDm9mg2jdvrJ4FVsPTH7hWLYDeakYe2zLH9dWaNPJ",
  "key6": "5qEu5Hx8BK6z691ZcqQp7Cd5ZrrUcwaucwhQphuuGJ9Yb2PhGDuyC7HUdtTNEbowjLFZFZZGdvZoDosMb3i7eFE",
  "key7": "2pdxxpB85hfa1zjXviBc2kvja568kGZGtTwPDB3vsJZePEyJCTozJJAQE2ewJz8JZ4DdJVDoEdLRY7aNQaFesmmf",
  "key8": "54v8bwKKzJiZ1FX3GZXr2ozDxgekx65Lpw5U6NmGfT3QJd1Mzifs1wWMSNpQQ83wGvhgDixeCSMS3rBejaC6ADuT",
  "key9": "5eBHCs2qmibZrqPVoFMCgKPe2ZNzEMhAbUXtm9FrVZ5nNiEgJMANN8R7Y3ipHf1uCJM8GL1Qbits6X9ofprv5Vb8",
  "key10": "4DjenhNxNvrgpXr4JPe2GLRyetvaQad7GXVd4nrEQ5z5U875qfPkmkm8ufcGqXXXdusWxFiLz1kms8ABL6AV6Yvp",
  "key11": "58MSpiPjSsufL2QwSnJjvwcC8w1N54LU4SQzDUTVQ5di7RiUq1c6epvpiTqg34X19zRorBuErdFQKTuVPvH8tfrR",
  "key12": "2qavNC1Emrmovdb9z2G7fHqG5AW6j9SW8BhpYtG8BB5Lr3BgdqCjVh7L2wsn3Qp4NRm3isemjmpdcRKKFac1SM4p",
  "key13": "5ebvpngZPbYYZ85GedD6efH3KaXomXPCxGQJnbHUV8dDQDLyAXZ9JfhN5yE67ahVjK1NNjJvV1mcCKBXnyHg3DJV",
  "key14": "eQu6qY5LmJLUepJa7zSGav5VtJeVp4P214cUXEixfU7KPc2HUmP6wmE11VAxWzktVTmmETa4xPkfhexjHEZVXsA",
  "key15": "4owdpfWVJQ6g7DNUpJDShLeozkPjtZsEjTiifbBiLBA52eYMnYDkXWwEK7UnAb63GURK3pS9dXu5NNkoExmrBhYE",
  "key16": "ixw8r61Pjmourzv2zM7fjJZZQPKjYMWAq8rs7LW21xuF2DdRbNuxsPawUWVqhv2AxfhGjcJpcn44RzhfWLbKaDV",
  "key17": "2VdKPkcs5NCDDCtWUu1Y5ELJ6SEzkYt4hVUkGenCfYZ2F7jUrKuVkUqMWzMn1dMXN3f8ukzJcC7A4RLiad8TjTws",
  "key18": "28JkWEvh853Fxn2VytRJV3jEijSbfuPTqbcGaKXNVBNCnRsv8m95vnJ44pqxPKNPd9sKAUB9iiFvDpoZKcn9TDNa",
  "key19": "5wQhjinr9vYbGVr6U417kxgNX5SqC1buHcjD5kL2AxA8hBSvb8TQJguLwxvtqEpHZ8SoWgv6Ta2PKiPLVXqzENiW",
  "key20": "ug47oQW2rAsE7VVuZZdFESUnrxy2RwwvEu3XUjdVjEfbLFPkMYQ4WNhwcfT8frogCeHV3vHtSrMv5a5CDGkZCSi",
  "key21": "G7he5ftRKqMsuRhPshsNVWQpsjSjGGcj7ckcx4iu7mVcW8fyodVM5hghPjXZo2eWaHtFhnC1WtquQfLYaEqu7No",
  "key22": "51oeiTEQwRdQqHADs5VUVF2HrVVrJmC3kBAimq2v2VzPSKvvP6mvrZNQmVePRNxGjbxjAEa3ct6F2h7cMr3rmtfz",
  "key23": "61vaG7PujBbsLKkp2APAzLXPaB9ztSSBNbKg8pu3Eq5T9qGKG9J9Du88x1s6yTQN6dpvxZty2FLKNuukATGzQKFK",
  "key24": "5x1VYVLyPxXzaW5jEFjnZxTbLwT3JH5vv9XcZesVcm3xQ1SDQV8sZjwcP9gYcdHPtsLLebjS5KqM1snGLLPQ4dT3",
  "key25": "36cZVfQczXt3CimCDgnTQhkH6CzYq4wLNPkkJpRqanMMyS2qWnRaANLb3HrcBCzf4wcB42ztyJgwbhry8ru45sH2",
  "key26": "5Y3LbS3MUNp1ibFnpzeAygt45tSrSgfipb6B7jQzfrkNAbWjFBq95Hj7ctLz3WA2Nk4SqTE15siXmwAPZdJGZ7zp"
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
