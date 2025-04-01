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
    "3vt7mYKkFBHWaaMaPo5h4bLzPJfastjF7x7kwLJhfoTHAwYChQc254Q52msfw27GRTMrqqBZPh28NyZAqyZEUyGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CisKPjQSY6pEVVt3uh2wCx5fJkSr25Q5TRcbHvQYV5oPX4Pf5fJuwxbL2bRhXdhPwWBZWozuJEbvQoJz3EZb4U5",
  "key1": "2npRATFh26yq5aLdw8GT7w3xtaA7T87iC9unUDCbwYnsmzyNEbwgthLbAcNKeVju4cEQrKH1duyYWwzQbDAy35mx",
  "key2": "5odR3EXCkwPwfVq8286oXtWnFrQJa6QA13d6fCy68b3cbhrRbz2sjAmedC7Etzj8y61Zv53sLTkdfLfnHUbXFypa",
  "key3": "41DTZo3oNaUFFvMh62MsKTeHFRtSJpE3zGGncUMoobVmoQypgebL72MiRYEoL5gUqthNHRCeSBAmi2piXuB9r3Cj",
  "key4": "4S3k5a2QP5sRhgZ83NwXWM6PiC5S6rPecPEakt98XfKAUCU4XscyqBHT229Z1yMD1TL36CN6xRJXyN1tkhswPbqm",
  "key5": "4WV2ZEmTXf8onhwHJkaksS1Ks7JUVDyMnbcKCLCkDXukks9TWnLbxn9tr5WmZP4VHk5S5iPiYMNjaTXXf4N5FegZ",
  "key6": "3EBfEV8UDGiqGWgsvEQ7mfgRUSkqh7Y9Vh69cH3M7uZJPT1MYm82kUd7sjAXskimvzTKcNiGL8B5cMuFQC1CugA6",
  "key7": "4CncqiVuDgxHT6H8hgJDSToxHcaLrAEMPT546anyAsf5AmGKHpjXUZCXDCogXvRmdH6h7zvHU2d7xWZmHedPk8Zf",
  "key8": "5noZWKSSMiibbHTXsLFehGVV6rzR7F5WWHwM6TYdft3qW4LNdMMeEyEzWDDreCm8YyEARwJ1Wd5VUcNGtkpLRX4J",
  "key9": "4Gq8pEcXauXBFWCoUk34tUHYopjRWp7cTUQJGQ4pB1JbW9qVyGEsx2MJ8GRNBTYE81fsYUMaPgMTbYUxad5nmTQf",
  "key10": "51y3oCo8NgnZnHXKgstCVhbLNkijS6gtRoREafd2eZGcUovXaWWuDmbiZa2KMKaNnu7c6YZdQSvMdQQYRKs9vMLs",
  "key11": "5rtt4SWJcYNKenNMJC5PZbZAEZgfXp3irJ4rwqPm9KCE2KS7ZEnvANW1gsWHXhyBe8zyAc5Mq94qEDJz1PPdJkio",
  "key12": "sLofzwQaGzbk1pR8xcumhWcJY6jW5AfanMwZhjTHvM8P8UmHcfLjtMGG8d3sk2FRbBok8hA9CQuaJk3ZTYCVk7j",
  "key13": "3zNuhoc8CaQ6QEsPZc91zD2J9j1gFgBjXD8BoVkaFQkWeH2Az85T2GnrmjqpLc1DRQKzPWYgsK2CJuFcVDDwwLkr",
  "key14": "22eByQzEULgWtnJymECZH7h9nTQi3nuCjecKyRbd7n9WvXXJBiRp3R45RA7eDu94XCkLwXT91qVhzg8dcFSymt5m",
  "key15": "374h5gUQ57eSQohKxyHwMFyqePYJqSr3T4gdWfJ3xDV3gWkwzrK8xoKVvSMPQ7Rah7NZn9Rn1qarzUP24jsZgtha",
  "key16": "314uLp9nCGorqSeEwoTz3dEqeQwx3rQck3mS27X5vXQyU3MPzjASmJWbcHAFrJUzSgiJqvG5ngowwe2AnSgyuskU",
  "key17": "f55dEa48M4id6joMCq2hQWXhoJbCM46c7CeYzgnWCWhcQT4NoqZFU5DwmLABDnn3JS99nrsPFLM31tjYf9PAPPo",
  "key18": "4jbgDSaNVEd57Hby5w55DqXyYEeKXwtZBRGdzgyMNwHNxEv7hWMRraNJFfHYCbVgc7UYxdtLSbCz3FWSPAgr4EpZ",
  "key19": "29X5cyCVRtb8AQzF8d884LDRNySMkqL4r2sz7UbCdyg9QM5gFFKGmQ5HxrFcJgFgAC6dyQb7rxDmsciaCQ3bXHgM",
  "key20": "uxbMnaU7zVHfXrDcnhvavMzVDYCXcZfgQDe3xUzwd4CXTFtEAf4hVSBcoS6U6Aqb5zWCNXeqbK5v2WYfgvN8uDD",
  "key21": "hycNvSW8DudGSafsQRwxv7AbDcz5PKza6MVjNv2f7D28dJfkvQKNMdSxLmaV48bpP8kBQYhB3dwWxGaCKAjkTdP",
  "key22": "2HQC6FLVxSyHX7nzodxKUpob3BmJv9RpSZk8uGZmk6jqma2dqoNggAPEoeBW15P3pExX1WhM74HQNKyh7Y2ygmsJ",
  "key23": "3cBNMNg9a2sEhfwuuqk2pS3GQZWaWwijBpXKAqwK7TcCamunK27qZcc7tuPTdg2sT1s5K3ovxhDW8eJEHxM3HbZJ",
  "key24": "5qJAoL2s5xqfN9R7pCH12Lm62FdGCSYEPZjA9Yoa6Qgw5Ad7kdqVyspVqVCXBRidZ25CycxqiY5u5JhG7uQFEAq5",
  "key25": "VBodw52JtwzXSupQHC7cVFVLvFYeTygzjFiFJRp2g9GxgtJ21wn2jsRNdBUet76m6L4WoUuBmVakPvKwXh5ScL1",
  "key26": "5ovXC4zuN4e93HmLHJhP5BkhYMv5vkvhAC3ZSxj1Gk3nrzk4ufG3HmSteGaVfFvPXZ68UY7jFfhSzQi3m3pqdNtt",
  "key27": "62ceTdPkeWZsZLhVZtfEJXBD84Fc3rGcUwhnuQJeUShgoFWkHyZJjK4honAscYkJUeF883njc4anTtSDhfaoJNho",
  "key28": "e5f1TwgzrWv2A6toqdAcSU9c4gEFANhg1Zbh3riJTxyWki2FCMdj5VAWzLhNRScKH3ZgF7zAtPyrRJHB3TV1MtJ",
  "key29": "3nibHari2FoKHC2XaER5NAo5Mg199pSFPiEsRWjr8bcBzkDxqViS1dUyQpAzHFWqFoFmF6oPtxU9siAp6j1Dd9AZ",
  "key30": "2cttq8p9rSsujVvEHn2DCpFzAEGF8Ca4oEjD1aNGnUDUHHbTP2NGARzsDjV57ZWHVYGi1LBNSMq4mtJS95euw6FT",
  "key31": "2Dgx3YWpXLGo8RLwSnbTyBkg4gBCL6tdaXhke5rd3ic3XxNb2AkZf8kygPcYb4ntwpJnQxF3By6GFQuvZAAfQUzi",
  "key32": "37PR6yjpVktnF8Ax31ku2euVhdMjqhqyvfX2XXdhcsfQ2EPxS4Aphcap7FB4bpG4GFGBwiMorVbQFaUkqh4dYXb2",
  "key33": "mSSU8MMddf954dQuWVoUsyYFi1SAANGy6vM2Tex2APs9dJUVHtP9AYB75cpBss2B9yw2rx19oe3GL74vipSyFGA",
  "key34": "2juKsMKPESmwQf7G8LtuFb7T3Bk677sQRQJCnmXdVxAhaeVsyWcr1NRijhpWiTN19rYBCPiWSWfUkL2X2KeF4WaB",
  "key35": "4vMGYpju2crsBXyYpk26SUT251obiNoSHr1BjF1gN7F6uz7DSxQGiVFRiBLAsc69Aubn8H2xwyWbfpjWwnwFq4d4",
  "key36": "mmrX3K1scJcwd89qrC97iu1TpTV9DZN6GpHzJ27EC2zBvRjrCqrPUT7emdkccNnnDnyfcec4B1gMJfhPshJv4Au",
  "key37": "YESC7Y3MKKzhdvDepAAncGvxx8p46ruqLoGTF4wteJeGPcmMRDWPsA43fmAjHuzEMXCmdL8DY9gKJydZ1AWDko7",
  "key38": "9fcFweZDMSV1DTs3CSc9fQyXnGJjsNWA8fAbHN5KUUUqj4L2XuDzUvb6x48dJTZubotfd9gMd8qRrAgpU2S1Ft6",
  "key39": "3v3tks2dHKPYv59SVBhnuSnmny7rk4JwWGGrb7kiSw86ppZFphpSVsYYzfEdLV2SuqX5FRZf2ZTDCsiRZg89ewQf",
  "key40": "yMVZpvNiNFZ7s2GKPsNgeNdv8y72gapR2jWG5knYrJbwtZX5opb8KnzSTPW5sw9MejidAz8eKttLThc7Qi3anTx",
  "key41": "2YAjdKWb8CFBTHaFXEahfr3qgSSdqE7JmVCLEDQnxKnEU4zMkbn7X1BYPdnohKDu8zs3vWeszHDELoxd8XDkw4Qo",
  "key42": "5oPkqPa13Lofj5ZaNH96tSwKNWov61cYdKFGdjPz152Sndrb9MX5uyqRMV6fGtjPrPzdnDNLshT2xjjMAEMcjs4A"
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
