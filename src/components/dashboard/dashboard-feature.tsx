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
    "5HjHnLF7cwvMzYi4cKttVyXjQumzD749u73TzmEoVYJkxatqhNxed6HVea16Jd5PhwH3fY4Eu75P5VpwUh4543Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ntTWhkfeNqTCByhp4Zn3hrvyEigZdhN8d1R4FgGrdJH9qwvbXS1qAqXhfPGEX17uTCQ5ghqa2tFTS3fkspvw7N",
  "key1": "34fmCRjS7vd2ydjdBrHnZQBX5VLPNg9WYVGSk2w7rMXnc3wPMbEwvDq74pmjnryNeRTgwUv4xUfHsBed7rit9haq",
  "key2": "w755i4gr5uDMBTZguRN5yfWX1diYTVtEzMe64gXvBoFq8oXsBxRCNdppD7P5AgHeutfTUVyKBDwGWRxiAxcJFV5",
  "key3": "4kLEi1koiSaPKmRD6tvcZtax4jZagfGN7YQfTxrMiXBGipBYFFSbKQdS3eFK9fKLqDB9T6YKYDUhdQL7RiFw4uso",
  "key4": "3pAX2Wbn9Y2aW9U3oJeb5AjLqYuC3B2Dmhswka9NU3qkdBAjtUyfnuTiuF2uxH4Ms2b1G5AfdMfAgnkQoycaCpsq",
  "key5": "5tWPvqWhmVHgUhR3aKWFJvhJjaNveNdYrRWH5bq7UyLcqJTateyQ6Uz4k3UiVhiSvyXhWNnqtr8aNrGBWhxJXF8k",
  "key6": "41PPiHsNjbMzP88iZi1iLxb4P2ZkVaHYnx81o2fMuLzrBb4nxMjHtwfijKtZUuNHvtDmFwzCci9CcdYdSPwe2EjX",
  "key7": "5p5RckSGwsopKCCwjA7zNCGzF6m9sLMrvE1uEBLzYjRTesNAYTDp1Ajpfid8HS5vzUnqxH5eCNV7hLEWvWMm4YLQ",
  "key8": "5W9duasWw87MDHxdtAh62HyPuqASkUTRLWhzMSzruTJKfX3k2wDCRLwxw9kQRZZfMQcmtsrP27bryf376TTL7CqU",
  "key9": "43Q2TnaPcsRVaStCnAKHVdoQH1wWPqeeJ9QSwJLMGSq2zzuvTWA3NsKTHFHtFvR6Xea7mcP4np5rfVFyrws8NJbt",
  "key10": "S9mnDKRpT6CtDrJuB9cKEdu1sGg8zbeBEUMXgVdhJYBpckqKZMPA1FSgPushnma5wnkkd6S58ehaFgr5o3exBsh",
  "key11": "2LXBvDxaBKFgZW2hQVqg5bCD4A8WXymdAZXJFzbKi7bYZuaRh3Lthb6UTeixdsUe7E2xTRqELfLGQNnXKTePZ5QW",
  "key12": "2Rboq2KbjyNGFcRm8GxmGuJ5MjMhf9Mkgsae3zbq3tiycGue6WcKQFmjrEVVDFmnkU8osmZrGd6Urxome8EVwPoe",
  "key13": "7qhjKRNBdJHSFTaFWcDFvRiYTUmYbFNGLJCcf6WzPy97jQxkFZz7PXZMxamejmhTZ5W56LRb7VFcQaY58Qw5zAu",
  "key14": "ELkQbV539djKYt7Ks7nWvwYLPZ4XHa48QFeJYWsh6tEvYyU6yNxxJU22uh15yTo3xVvy6n5LajkfBVtLPnooFpF",
  "key15": "VUEWpe7dfYDiAXVgqM8Jq2efyyjQo1o2PHqfRzyMmBjFMJvfvLxhH93KHwyFfNcEBp7Jdii8aDi4giUokdnRWEg",
  "key16": "3Lxk37eYHR3vzLgZfz6zppkwbLbfYofMxZWWYPMezGSiyiTSYa18o99qqKf9jWUSLPno2kveFH4tmF4AuGmBMJtN",
  "key17": "628ofV356rWR2NM8KMMpZFU8cYmRUAx3wYshua3bKnTQF2bxZTeSVznZJVAsNTTHZZ3v927Y6kf1BG2mL1DzY3se",
  "key18": "45DHjyELVJbmScSUXA4bfwbmEidpXyFTmEqM6mofwoUcKHM774dB69YGFMQLdTwhdLKnArWTSRRA3pFXPQBeSs7c",
  "key19": "2mXveiAyP1BxKwnH78FPuV723PK3kXwZt9APxGP2J74gmmrsXiEREZXt9Ph45gq4YdyxeP4ZT9v4hiWPu2afZu4k",
  "key20": "5Bdq6RaaLmoVzq8mWASM4EyoeFRgUmPbyVR3ny216e4YRHdoE2faHgj2xSSohJEKh83pReqCZx33JumeDPAgu2sk",
  "key21": "3EjgvVD6xnyFyJbeem3C59tWfrseTB1X91Sbfye1PgdPuPfGcgdB8VZderXKmFGRhzE1LBdqzohv1egWLK35qVTc",
  "key22": "4u56gUGjkLDViWucoz9kG2S45iQ4B3xZX9zf4ZB8NnUTuRh4u5P5rSEsy2bFNKyMQQM4bWWT673E3EQmuzfCw4kR",
  "key23": "2dtwjB5UbByKby55Mcx1e5SmUascH269zUTp4fjrNjztHUdNpiRm6xgvb9yjJ4YufuQgQXJE4aPiU4ez5NrKfNmz",
  "key24": "zUSvmmjSgcngp71VRPS7CJ7HZc6yc9gN1aLfs22SKMwhFWGMJK2XM2vdtkL6WExggidWBhQKGkCCgUbqhCPJteo",
  "key25": "ZwETioiz6KAGWBus2ZGnVe4XRGDf6WWbxaRETUPXre3eLpaiykLTaA9jofVxxgLF2oLvhCfiWUHd5RewWdewbDx",
  "key26": "25yi6wQRsnLfusKUapiioSU2FjdVbSCeXZiV97DSrbyKWu3Y6pKuzbsvYRo4YAP6AeDg5PV7NswCFnmGei3jYTx9",
  "key27": "2ejswyACSfH38ft4GfdPsF7LgSGSR5nKwUhTHQMpDFbYJvDbMXKR5NDx7rfMufJf9dCojQeWAMrXfr6djzcJs7ga",
  "key28": "3sZtCb8qVg2WNo4e9cigACigTDr2Ju9snaPZcQecuCKtoq7DRWazvQhKJZuPHJWHW8P2xLHHefjYvmbGdhwizyJt",
  "key29": "qNLkz32favxeJenNEgQxKx9pmD2FojLVCnKYgS3pbNfASidzqgRUKxciNWinDHg34dB4ov73pjEmFUvpTqe5Gsy"
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
