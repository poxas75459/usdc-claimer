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
    "3PXxWMeKJAWSQbN6JRFJXnEp2JqSdkXbUTSdrwqD6kfifXJgWjGCg6fXPrB88EfZJpcMQs5aJzDEnAngug8bnViD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TfYLx2CpA1joZrniEa9ATV2zUvNNdBn82bfCrPFTVJQdpBxKimWViXzQiDax2xBQ7SQDXKQESWYrBfcUMDv2nR3",
  "key1": "taoBiv8NGmV8My1fvagVtR4QRANKMF3hq3Nkzp5u7Gx48wATFeUYVeAGc8wes1DeWJc3R7GAaMCkdd2nfy3fKgQ",
  "key2": "2LDJ2WhcDebHvm33BoVXe6x5wNjwAhzPspT187EJzE3MhZFEdMfvhBvVpux3H45zD7238ZGPSMHAKumfdYUdSiUV",
  "key3": "346gqaGrc7mpWJT52JF1NEjdK9YR4U5LhB3XMnE7X8YA7C42feosZ6ZqTbkLe2ykZccQxP9YDg9UkEBQEh93pWKC",
  "key4": "3qVXJPyJs8nZ4FujKhWU16HDdvByUFeXqMLaLcaXoo7U4bi1RyFJrRCcqTXN3PmL5xmGk8kiUcNyo4ho4g3h4GL6",
  "key5": "5kjUDAk8HvbqCUmAJycJHqtaPqEN3UAka2cwJjDgnnrP1gBeSdYo3z69rCHRRw6aHFnUqLXA3R18f2JyZE7Mti5h",
  "key6": "2vXrrCor2AYdXhp9XY1RcJahn9SnppbJLSrkfPMFs6ihHR2qfzx2rDAN6cwwqj2vxMdGGSQp8qxnKTvwoeTjhBZW",
  "key7": "3yCGZxyRV5NniSTog9zjUDdfRX37W9qYjrfYgaWNxVkhBQaFY1vmQeh2Gdz3ZMrnfSXwyesDtFHW1CzemBUyTkn",
  "key8": "3m9XWwjk2NDjH9Y2jG5sHgXwZtk7m8cJX5sfqyEmz7We7Q3jVrA8KhXM8618ts2aKcuib8mTF4WrveehKcdp84HR",
  "key9": "pViqMQpfcLGbweMD6ZJKAr9RadKT5qCPtmBAvQUoen6dh6v7VZxAdGKqxzffKb9yZHaZnX6XTVifNGDKUWGDFur",
  "key10": "3bFsbcMqedjxzbwiYMKEFUc9p73v45ADFzYvQhkhAx66UKw7dRUqXxXz2iLUZsgTt9DgWGa2D5kfnLBipKBcmN2R",
  "key11": "41kyNJ9cpftw68pzTxuh9WWs6Bwsq74CkiEvyA5P8zijomH2tSXiQgytkfntRiSm51dG9xRBfRjPZD4SBn7D4JTn",
  "key12": "2T98mujo3deRSQi9CwKo3N3kBtwmHF7baBxg9eB9CFnqoYYKmPudbKU5w6eitebHc5QSTtYfETg9bcnu8dbbX937",
  "key13": "2ApLcHMKGXSCq6D93YRfSwPJw8c7AEoQALookX7a1RHKX5zWKFA9jCeENXJZtCnSQh8MLn8Qy5zv8SWtt6vVazeo",
  "key14": "XHbXpi5wXb3NwybJZPZZCbBmVo9qjLLgLRt8AaCtXc16AXZPrmGURzA3iu7jD6EsYx3dbCyV3tQp7NSzovuzTqJ",
  "key15": "5NKbod9gfRxEMYARpb42d2YyHSQMfgQG2UsE4ct73JqqE5WqNEazK7MfjfhRj7oUJ1GnBGviWVXV3J94nMDfWqKu",
  "key16": "ErZa43iJVVYRmLRuAMGhtcdetpg4NoM4Uu615ibsLLW5Zy5ioyFa7h4eCKefCQmYZToDHxbToeZxyY82xNP2QN7",
  "key17": "2gRfhPQ6Thdub9mS51GcRWpP4LzEnxKFSEvTFbe4VAGfSx64ZJrjEjmWWtgDrqN5HMw6Ri1iACa6RGoNorkCqNWT",
  "key18": "2EBPW8GxPmSvqUrRkNqpL162ucyb9DgpYbz4nQEUTRaT9R2HoD6TMyJwrL15BTfuMXw8A5AKh5iJm6hjT7raWnGb",
  "key19": "3Exc2diy7CAnhLdANPwKL1CF96PRHETzhS7qAk7Td3uA9KN7joYxdQehbqWhPnCCvCLBJLTMsbezvPNZKXAvEML6",
  "key20": "4GZqsjkpFwHUoyZKF2UVWRxe215WyKdYehjDkDu6mu88K75S9fhgzAcVop9So9E3NX3aiGJV8W5S5i8DNrFMUj28",
  "key21": "3htFeC58xDfPuasJir2KrpmsZYEoac59wFN9AeZVmKQhQf342vyo4QmXZ8VQi89TQ4V5bXDkfCSVe16oC7sskk17",
  "key22": "5xZsBNPnhhGbqK3ejzG8SHjd23XcaT8SqD5P12vhaPpJFdBGhPTkioThH537RfDmAY6PyY6wSw9wwW9Q4Ed7jVRV",
  "key23": "ezucpn4veuvypFQAMJdN72GvJh1qLVXHWmpqgkh2zCyZBiUjH4SavxhgJQ7BXgEACnbjyAT4VBULn7Xw4kd37D6",
  "key24": "46C2yJuUFttzANPaeDcwEghzgJ21vFrsE8DztuTm39ZzBAp6aBUwctVTarRmNjJrSK44s6y3MXmnEJzBoasqG9Rp",
  "key25": "ZxA5yBSJ77eoxBcbHK854bQzCb63HPwKEKdTstDKWeAJvaJH2PsBA8828CdEvoe27htbdTtwGChqNkUaJtE7Ggm",
  "key26": "cKYCYLBikYc7TZFu7LrDxFfDh76btS3hmDpWRfNjG9JFLVdbo44UNa5BW4vzsYv4KbY35EqWdQHvqdB9dy4igtF",
  "key27": "4mQ9Eoc1VmY6TRdECBeSQQDX7kTGCipp2e87dz55Q59NWXuM6dZWXJKb5LkVHmHwr88yQwwFRAHPf5paeSDzHAtG",
  "key28": "tQXwBoUpc8fCcjp3LtWPpWXgPLb2oFq5NEb5jLDxLemCbJpRbATkbiX1cM58qvQm4YdViWWcm98guNEJZR8c4sa",
  "key29": "2XxKEWZaH5DKvKSwY3AHkUyYL9gPpcmUUeUgASQcMXgkPmGRrEDQ8xVchY1i7Z62DjgVDij4fq8qoa3A2P2G4VzX",
  "key30": "3K5ErbG7fEasSmEWwDQ6aQ4zAXfuHrnb2aWsYPGUw38eRBAspQ7RA3uiRDwn2UKVt6zqQjnQfDCBUdk3w3kF6r8F",
  "key31": "3TKuitTRmAKVdWrRgpBeYuwf1Jiuzz6eaLGza1bdkj4ikwkfUc5UjTpW1wNjLQBKFWkHM64hwyjZztUyU9T4AD8P",
  "key32": "2svs7ACA3wnYMfS9FZqF8n6Wj7AyywUbEqMe7o3vdmUyyx45fQNRPMKQGiv9RZfhW8xrPggxduVYTiNsdv3cjbqr",
  "key33": "2eYRqDA57EpfPAwvDbWieTns5JTzs2GN5Pk6o9F7Efkk3zJsRVVjUf7V8znNrLqEzjaVAbaezhwLz1s7rgSHipCk",
  "key34": "WwSQ3chMUnfYMyfe4ZcV2pwg9NgwJnugdoft88mucT8EnyVKU36n7w4N1fLEmDNhYM6ZDKaSQ4JfA7DqShQTmSK",
  "key35": "TuBgoSthBw6Pk54P8hM43eVRm31vGvs1csxgmRZhNL7KrvvVeiPaUAML3x45FHZ5STEqorYLkrsrrTQfVDkD5PF",
  "key36": "3qZiFj7KPRfXfpynsdTXxJ17hB8ki4xVgKHBam2WLn6GPDxXgpVQebQY1SyipJmGbahLGyRgR5ibmeFkYrsGeZhg",
  "key37": "2cML6tbwEVe6qLZFPKm44cCyHQKV1YRwsscj4xdZMHZzejnBLzYZee85NzcEcxpTXBYfrP2qtMUvnX639x6Ms7xs",
  "key38": "5kVY2zGL99b4A3KUYXa3BoGub5cLyTtWFao52vC9oZNseDXu3AewLB1KfzapZ8tWt3GwxEafVvvJypFLFTRGgWmM",
  "key39": "2VXokCRDU8phPVQ4tbP6DmSJD8i5cjrH6woYZbEVrYXsP6K7DR9kbK8quESHC1zCNoYfoxhHSnscg3YWrkWR7cnV",
  "key40": "2xKswjE4UEYEkpWwme1n2bfUpLTVXcwPiyRUqtRkU6PsLqZiB5z91baHTtUywBtPbuHV7DubXQN9y4CCjEfeCa6w",
  "key41": "413PKSm1n8XxBqPgey5sEjBLkbNVPaqyreYm7auLkQWrMAz6wLsvy5kn1Mg5mj6Ppq3g7tSgnKqLrpYD4Rvcb86s",
  "key42": "269ra8wgYfPUP7wLPrY7WRa2iC9M9aFdspbQvS5AVmEnGKHqpQt8r9Lb1JV1Rj9TWLqCaTpCPjTLeDXBr2wJszZQ",
  "key43": "4iy6JegHD4aN89xZ6zvDfq7MktGz11bYh9fAAHXgeRWGQEjvwKJbaa8jtDrSh5pneZQkjLXxQTaaoKYzcEpXmB7",
  "key44": "5fmENAm2qNGCYx3JB1osTtMEhXaitKZDKPVniE1Wn4pE7NymKFB24vWvoNie65QNvX92n6oEBCpogD3MpoTm6iSn",
  "key45": "474S1QdBpduh62prxH7XFsdb4Zd6d2wnKES8PuToaXFXtwRoyA24NtSyDff68JgP91CwrnA9YrHq2hcmUB6DD6Q9",
  "key46": "2aF85rvZd95XVWv6eLpLsikq4PpXamvd21rLUguJnjDCt9GpqT27t2dmwxX7KkFn7X6XfkBdZCGr95WkWvo2GnyX"
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
