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
    "493NwhFkLddcoXKnrbWg8XAqRuB57bPLYTjQsjJMbrU1qWwTdTZokFtqQnttdL8BFoVs2qGbLC66QkBv4xW6Nmzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCzVoZGtsCP31vXiGjZWShmz1LGybWVvX8mFyG4ao1zsp8pTMi191AARw24TFt5mFrGXmNMRe3E6cd34tfL4Pwm",
  "key1": "2Skw8aAWt1YnwKbFpksZLcyo4vF9G1XFX25Jbb9VMFqaeZ3NiQheEoNMjHZpQo66TRH1AzX679CM7vd49ejWGyKy",
  "key2": "56WRrWWKmeVbJQyakhj3XQPNG6cLoQhsAE8wG95MEXm4sC2sHmqXaSUBZoE7guZFtH4Fow8xC93qYGJrgfEuX45g",
  "key3": "6h9cwoWQYC4pVHDX6TfAh6FNqGBbny7Zf6np6iRazaSj9T9eTZbJpSXoGsjQs9tVD3AnA4ta8rWLFT8JQFpx283",
  "key4": "5MEAqBYvjipzbtK7ub3qTZ2BSgixEAoGYmJJ5iEAMvogVRWd5nZyyT7dqniofsL8r8grfiG55nxp3W81spuvkkLr",
  "key5": "22m5bWoSubSewzsiWwHUfDkrQUNeaEerBGF78n7YBJYTrufFAaNnE32GAVEw5NDs366sGoA2uPZUVXZ2DvyNLmg1",
  "key6": "DLymPQ7WYQYzEGZVQG7tfPshyE1893fyJofwg4QTgKSuAncrxowUXLUREwBfscRi6ve4Be9f7AQ2KNH6U9hfeqW",
  "key7": "4ULZriXq9EPhAGbLTQFvztCdQ2bzQNkBwd5jBYQ2mqteo7uhJhmaRvjawBko3TxCenEWa7jEEp9FrzQmtWKh87Gu",
  "key8": "sWDsjijjGkSUFa7QGoyyVjRwYK92WmLNi2cBapZhG76CWqYvKnYmo4DWVHL4hmu8JWjknVjwBocWMHqoi7GnMpY",
  "key9": "Zb6bqXkNhuH2DjPfj8zVsG13gtjE7KsCxk5KWP72X9YzJiMc2AmHfEAkUrPcwrrFi4cdMPDoZM7MP9688vfumCF",
  "key10": "4nEPQVL4HvEFzhoaGS8GkJpz61o3ZStXGH8zGDHHyBjNMuFmFRtaBKpafRULphEqYs41eQDBqosmqwpqcG8Kb8LS",
  "key11": "KjbS4Yv6Q1MoHpKcFR6V3SRQ75rchvebqxioUQD9iRXd8GWS3u1xkxF1vqojS48FaQLgCFQbDjfVY1oSs2u2Piq",
  "key12": "4TdUrC5bx3umBWfJve91225ddgLswFexLFD1NbZ2FxW4ew7N8QCJ5MptuZUDNKd2Bj6WQafHKxPCUW8mLKimHC7p",
  "key13": "2JCE9fNmgYa9HJtCxnQ2R2T8qVb7PFWqBHhFmJaX9beVvNegRLE6qLiowtxd64aP51KzRNZLDqeAAVV3Mw5g5Dgs",
  "key14": "2KQ24EgAF4xhNdrk3YSq1CJ31suJsTvcTa4AnkVCBpdUu3sUHbxfn6qoPeLnm4NJ8Js7zbCfWkgz15Y8FseyigCK",
  "key15": "2jphwHXZ7GRzwYDJ9m1J67Q5pTJNLtDPmfkhbEGoUct1r3hPShq2oYjdQF5QqD3dAKsPxqnR4SYeQYban3zEjm14",
  "key16": "WjabyajMr7xG1wghMJ8aKwQgHkchReXaPTNKb4maH3Y9EUZzJDANJPhMuQ6iLucuHd2XGjiZCdPMyzRKJi4YPPA",
  "key17": "3urJZNpBqc82CVjGTd5H2AJAtNxC2tQ2SvbwXxAKVWDcQExck5KUUf6NEaLTb2osuH28djfco7V9DwCtHbNU62Km",
  "key18": "5razABghgfgzJUbLfp8JcmMAfB5PU9MiPXmhtmQBwz7ps1Nso4WqyfBjxojKudSSYXuZzkhKhUk8PrKfcW7h4xK8",
  "key19": "5jxQYRUkcn5i6Sn8CTD1VUG854U2iR7un8sBJXpHvQJspocxpXUhEMVTPMUYTV1Emp96kKQEHVX9nMKfKyLorNSZ",
  "key20": "22Z15pmkMcVUqUk3RbySyWgA4tnRedDe6D2AjBUfN4i7fMytuhoLJaq5LCkkM1yfQubs3evnuujj4G1MPJ1gSS2v",
  "key21": "2GGsnYSpVXcGTxxagU8abnBrs3W9NC5rMEFuvgrZ6W5f6CXy2GSVJYFch5LaM3LwwuxnqELujSySxLogTnnYEM59",
  "key22": "jqPRVkJKNEqNaVshUvH6epZVzUZEXRuDsChz7asiLRRrSVU762C1yB3NsiRxV4cNRPGseqj7pP8UBN5n56NpiAs",
  "key23": "x9XMSq9k9zFwXdDqZ8aHSSfGAFmJfkYiWLeBwzExEcxhieVgRZPUWmvpnWx2yvcySgWfD5sFX9ohqr8hLbnYRmp",
  "key24": "MekLgGEXRudyckgY2kNwjGdWqNGSJoepcPn77YKTDN8a8HPxi69AxRjf1pW2uQTRpsYLtkRjqkFvMLXoyqH7dp2",
  "key25": "2i4wVQN2MScv9wR2Vd3PNo57HGuJj2DMVCKHLV93uaef6jQNBomgEed71vnVFKipwnckUpx7x74hCqM93CghNAnX",
  "key26": "J8eZkfMPnbAUbonxuNmBtSNRvCxooSPM18S51NNHErKMsA5BdUAx2qvsf1jJEtVniKMqwpkrY5C5z5b81uMnUMm",
  "key27": "5VLkLZzmDTHD2Acv8nJHyR17rzPXCzgaksn2PJevSyaJgbpwEZQ7dCvTMMp7twgVzaLoSCUq4RMp4YWqGsBK14ze",
  "key28": "2KdrGmgDC2dM2cs5vX4tMveNJ2MPR2xNMByjazr7rhvNY5PWTw9zAmFh4dFw2GUBDYAvkJRbtx3zfYGqa77FULE5",
  "key29": "2gtNxRsMfQgf31JGVF3HoT6yyKwNVmK6heDrjhGu9SqiCn3iuteS4naVHxojz4udUtSEhVcMqdijVheaJgAWvH5s",
  "key30": "MNCyuB4DTWZU9Ut8HodPNPmoJXAk7qc2qf4vU1afSYtR8xoQibiyUMFR9wjZtrwgmeB81XyQJgXiP6L7DbkYkPK",
  "key31": "3ehAtRSoQnZSC2wTLV4ZWAvHy3wemhBkuZRD9d2NVda458u43bdWBbSqoSUD1NQmZ9JfGRvFkjjSgP3Af2VHWUvv"
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
