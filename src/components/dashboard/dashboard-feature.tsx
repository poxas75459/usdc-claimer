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
    "4roEH8pUnsJCdvYRhDQiXdGSQaPZAFMt1cZgVyUoRaGJaVCiswtAnRc2ztjedVjHzczL3tqdpJegdpEpdHkkM3b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqL1VaMoCeoKV2cNcKwoyjRxeTxEgRg7Q79qA7ybzJhmN6C79U1q9Ye6AoAstLp6SxGtwsNxG55g4b3PcZiLjYt",
  "key1": "3BbwJRcrYKEMeDgtguyJxiQpuk6sqLMZYoy2PZBw7rMRykdvXasCzSok2Vk8d4MhSAmmdkKQpq6G8jkjAJYmUWRj",
  "key2": "4BXvCirUiQjdNNHsbDV5zsTmm88a5yL3YxDWCrW8fAMHhbRntZkrnjAhSP2X6jJWxpQmNZSN1J7YK74ADzRVrfu4",
  "key3": "U4X7tK4UpQp2uXBaScyfU79RG76q4jLc3VanjsQnzaJhvfhhD6f1gme1C9CukXrnR8UA7afhDEu9MDVLaRKAnRP",
  "key4": "ehJzaf6d64eBr7gtaukeNBwNtydV3NuMBF5D4FNqfQGXUwQiA41mpxpkbn866r7jRa4yM8j7bsTT9DGJ5bdsfjV",
  "key5": "5zkRUEhEB9cspq9eFgcN6PQ6n2ouXbs3gtqNsBqHr1VF7HxhySpXHAiZvyRLE1Zx1omvMMXwvEMWc8HU9ZCbcZ6i",
  "key6": "VbJMV4x8MSuBQD787hUYHh5tH8Tny6eRq7Hu4pY1DMaEFio3FH19Toeh9jpPamrAj4b4qGnHFxWhBtaECwrJQpg",
  "key7": "4wJFdy5iBtgWwCxTwQ7AtAf1Sd6bkqPv7tQn2pV2LtoseoyoXD28nZPoigT8UfPBgVKVivPGWdh75r4zzfihixoB",
  "key8": "cck5685yAimr1G4fJf6Zxj1xc2xyHJhN3fHZ1PRVYq98x667jDSnJwp76ZLAHnwThBSntAEMUWxELyszdHhzQrD",
  "key9": "4czHqhNtrSCx19GbZNAUmedGgi7CsYkMgu4c5Bz6uZZe2At7BWm9bRovEY2J9qrr5Y5PEZLqek9qe7ab9DPAodG2",
  "key10": "2ooFykufHyjnNUw8tHsgCmdFrLQ3koj2GRNez6KM8gFXkGckFgkQYKxMhUsdTyDHwUTbgRZzyu9kgGxkVv4bpwpp",
  "key11": "SDBsbUCwPR6mhGPvq2X3PActoSH91s77GCdRpKLn9bB33G7kzub7h6cuCzg7aR5VxXmRMvYcw62GUnPiGPBsvko",
  "key12": "4e9knLXfn9V9Zi6fb1GLd4xqhQQ7BQx343SfvnvVGNNVJPKR6tgGBm7z3iafUePxB3WJmupo9YNhRQStshdNZw1j",
  "key13": "2Qf6fS9a14Q6Kcxo7MktzF4AzKYq5MACdCDpjgFp1TC9uLwL7U9JTYgBGV9iFRs6Y9ZRvnTKpQJ6xq9kuPZNzhbb",
  "key14": "43hnLnK6HLEWE6ThSW7T9rxUK7zyMndP3gTVoc1JNxaRq2XZ5E9Gk75ti4vu6UzRC1LBZ6hJYgir6q4Qk78faFSq",
  "key15": "34dZpWXko2tUk8XeKLuiaCSYCicfLGA799NcLrEHcTqDV15vx1d6ip4AtKrH3WWTrQdNEKNQWev37TzYDqgw9Pzc",
  "key16": "Ghx3qJ8CQ9JLqpoBL7Dvpuzguw5mHjxHoGy78vgdwTKVQHYdjiL7tk6ukGsbjqwjfLWpC4z1JxWR8gRziqmt6su",
  "key17": "4HiW8hHZmybbzbtbVcKL5tRnBB8YBmJ5gp7JF63eFLXSqRykNjMTVhkQS4Qggg8pckaZuSLb8T6tn3ADLmFTWjaK",
  "key18": "2kRPHSaMeuDfErLCvD5iqLVrXS6B6qoxKL7cWrv4XDJtPYZCoQKY3GD9Ze2cGbV9SQudzScWiMxq45ceeVAzvHvQ",
  "key19": "3KRuWyEugWS2ZLxD2UXtaVWAeRBS5JrTraqyUNnK3DBRhMRj9Mqtbqbv38MevEM7Bskzmbwow3LFqQ1oXs8q7tBa",
  "key20": "4sRB5yQe9SSWwNgYPvEQj9N2F8BEaK8RDsFMCv2dZYWjEBGaXXCriTLUrvtJuxA4deUjKmnZguEmTJhEXyQmWrEP",
  "key21": "5jbYeCt8BBK8GiTQXASXNvn2zsRsKvskNDkHi5qDvb1JLfQcZeuF2odLwjabaDSjqqbmPtLGEZc34SBsMVSzFiE",
  "key22": "gVXoH4foiLy7h4UK7zoEFPMXPqqarQMiEV8vrdNtFzWwg8J9uYk8jAAVkKAZVTNMwGkDBGKHTwqir1KC8bgQbjX",
  "key23": "48ZYQab4gsQyvk34FoS2miABc2Y4GaeJqxxoMvLW9H9XR32p1vrFQpMQRvKqBNdrzVHemgkgNHV6vz8uGw5eWsbe",
  "key24": "9wZaDQLJjHmFkRJxNNSN31MT7Ph2q2qYrDVrovZSdKJVrXKWtdYGRDhm254dMpP2SQ7DA46GRHQQo81CjgJ4iux",
  "key25": "3yUfprLa46f1Ddzvaa6wxdj7pRLTuQ3hKCGofXHZR6jvVWw44JVbZtppvtNLHH8gdLxtCBuJn2UyMsAUFr8QrJ4W",
  "key26": "2XCgQbrmcW9hivyo4qrutLfwET9tCihP1RrxG5JVJ9JtW9yiPqERntNDdo83gy7j5fyCbdwfsWsbMnS4ZKWCvmzY",
  "key27": "5ffnP3koJTsYjs4rcAgpdmeP1qPWgPTHeQrpirreNa9JptaUk7dAm5hxxog9sxFPFASsurauD4ehiFmnm72g8dpr",
  "key28": "2EGFeh6dtxbZgLWjmgVuCn1EM36ZXSnsqK9ZPaAj9hZxLh5iuXwujhWuo1SGmrQCotNdCd9z6F4zee8KBmfjRas7",
  "key29": "5u9EXp3KBYaxV8drDEJH8XUSYx7XoL96gpPTkdQKPEJyb5Emk2f4AX7sxwdF1cEGxWoU6TZS7uA1WvoEHK5TcFZ6",
  "key30": "4ofKyhDXfd5v3ykboBKwn678Gmf3kh7FFvHnKc13UxxPeh4eNpLNo4LvwKzsbkeJ62c9VNxAGb3wPB2EhhmzyLbH",
  "key31": "2DDUVXkHRF9MQ1dS6spkpFiyy6XZhN7qBZq6Z8o7gjsGbmBiUdUHAzQKSzoxHGbSn5L23EXXDxWDVnc49j83a4rv",
  "key32": "57jj8d5pjhAoaz2eMk6v8QCqr9L3fgnskfHcDg4D35u5tH36oR5CyRczT34xszZEZnj1vfok9uQrrcTBRyvzVSMU",
  "key33": "xPDCTJg4e5pYCAXFgf7mzk8BD3jPJGjnkk4uwey7G4zcHbnSJ5V6BSTjqRjJYKd7V3zUg5wSLybpVSTfipNfGo5",
  "key34": "pcgdxVVvBJMzH7S1uRVeS2ePcG9Ne43CjbRgo7GXQGVoTjghBKZ2LeTtVh3bHKqSg97zdgsDx9a1wJnFsrQNsuj"
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
