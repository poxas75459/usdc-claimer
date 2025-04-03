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
    "4JngZvY8Qy6pR1AJTR2rcGDHfaH7aseCH4UhmJ86mmfLdGS9upqypvNUSKDW2z8jU3eezKrGvBe6VAgQNsWJqTEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sdJ7k17U5kQJuwQzwzeeZDKC4kz4N2hz7bCqrncopdAmiKjfaTZzfrpqgjiKQkXTPa1jF9JyADaoBnZzskARQ12",
  "key1": "2UqYHceVXARCPRtD4z1RAa667Tw2QT9t8vArFHotyFNeugoB3HNccSBjW6E55k2t5oLj2Qd2VGpw1u2uvYttXoy8",
  "key2": "4wFKZWPTQgBqcu79Aj1x6dgxyxEv9HZ6cLeqqJs5v3n2T64S9RUkpx2kai1Qu79EgofUijreqnN4zghoUJqYR77K",
  "key3": "2oLGm93m33qpK2igkB3dw32Xhnzo4ji2XHRkwdac3jrhi4whY7moSzjhWrmPzxXWPViwSMinbsGrgGBMCh8fYbQk",
  "key4": "52MkFqx35Gy4LhNo1CpQVrPtETNkrrjkux9pEW42QxjTaj6YhvGtLJpgzsZzJbwgT1zL8TjuZ6a8oB92NGLTTXAq",
  "key5": "2m74CfLDCMxNDgWKTsNYF9Bt3X5AzsWWdpVzMSP6b9ciLALuP8mrfQ9yNHAm7ne6D4Cnw9VN9UsdVahqrg6g2HTE",
  "key6": "573NH2Pq7qkqY9bcbjdaPtQWqf1q9aTwxQzZ6Kcjmvojfin1u4oK7d8KfJSZkp3Xmb4iF8SHYSfT8nWGiXypb2N8",
  "key7": "4yaDZF6bxryHnCrzesg1NgBxMrhmfb75hixj5XUZtVxDbcPMu6mANvNcqMqN4waNe426qkNiosLKkU7mJWCVi43N",
  "key8": "335czi5sYow54t6rWJ3n7viB6JWeegxMt8Qo61LydCwCbqz58S1drJNvMYobqmYyADYLH53cjqMRstje3YXqB1Cu",
  "key9": "4js7v7DvmLUimtiDgQAJMwAUs5sftrmDccFJtawFgWYjMSzvzdmZdjMvPZWGzhAsR98hC25nCw7MrSh83KQzA3hG",
  "key10": "3Boegw6tMzVeM3qnq79iu9tQBiBr1pP5coMcdDryLyxUVai1mgcb2kyCS4LqUi78kcLctv2VYCGEnCLhh1SsyQVe",
  "key11": "4J38N1ZnCJgqtTPgcuzL5UAhPx4QZ2rGF96PWHN4oCxLmxRRHqKXhPxS18cQyaQpXGL7Wx62udzFEnrudbt1Qoaa",
  "key12": "42d231eij3XS7415q4BSVVFF4tzZdcit5ds7qYKHRp93seF8TVR8mfhJdk1AV8REY6WnrM8UE7bHFbP28ijgXjS8",
  "key13": "2VAn8mg4gWZCpmFUkiEYU798gkYRwwDrptobJqosJt8qtBVyUKxudzLXiQcR6JM3tgMZ28ESdRpWozLX8aSArAhU",
  "key14": "wEzRrqzowHnzkv31nNuMjrGGQNeQbqaP3SUEVPKmMTqEiaZx5zFhrpMeVzr4E9UMoL28aJP7oC72HvC2oBbacTL",
  "key15": "24CNtMdjbdP8Y9gmVSGzRgEcarV27skquWmrGX2egTY1b9XwfqwVuRFx2kWHqP3AXwQTJrzHu8kLRrW9neFVF98c",
  "key16": "4JMsyTUe2a8LsbBMNAc9pdJohJ597HEhWQk8EtWaGz99HBAcJjLgMFZ4Vds8u2LrPsDgYvLBCx74FRyif9Hai2Vi",
  "key17": "4ESYXhs9UihyNVz9HtHxYmY4MKuVA4RPvT39sGug6tUFXwsDkayBStRex9WUf8ZBw2R12ttfeRzH35RNq7XzBtgC",
  "key18": "2biBwy6L8bygGKkuzhwEAYoDTXojWjSLikK3WtWrJixtbEqFfi9LhdKzYU4SwCG4jemnfhL1zQVoSG94dPCDDUdQ",
  "key19": "CxZZSYS3V7onXFA4UJRg7WhUA39Qnmsx8ifux3CWeqHfeExoD26CfvPooJUt1Arf3zo2wm1mzL7ozAKivv45EnA",
  "key20": "3KYTVcJHbm14ynxzgghZDpBG27HkZ5rLcNw3GBdqCPoL3vTm5YpoGoYqn6ynpvbotUgivxdW9y5hpLR4vmXAnLCD",
  "key21": "67QGsvKNbUxgoEKnw3mWp5ymuQj3P4DsLiNBEd3HMMsSq4JMh3ETCtF1BKsA73vZtu6fizgYFHFSoscT1ZKSqRn",
  "key22": "5itbJDYoXPJg4svoRRsiRshKKpKS8xC6CsvC25x1fUqYmfFwKWv3CZJa3hLyXgmRjU6riP2J26V2qTDNMyq2v1u",
  "key23": "2jeTpjYJYKPWp8BGoCN8n7JFkQvDJUViNSHxWzmJYsWR5F1aasHqEyp9hEzhe3bcQFtgeYjDGvyhKme6FaYStcVg",
  "key24": "sga4YzK3AifAmQtdv2QLcSrzq4FmrGgKFzX5QoAuC9oJNo4Pd1xR12Ro6yBe2TnvN6rVZEFj81NRpym5fVmaC5B",
  "key25": "2ZF7WSjXJoWo2iWM1ZBje5PKYX5V8vZfq6NVBYWfoPJWukbbvNFw7FusDDNCX2XywFiptMEFy64uhDERaj9khhRv",
  "key26": "EHepSjf92ZaUE24CFmgmjNvUMnHhvjHrW6ctVNbwKFzrsFqa78wFpLj1KPvWFqXvLd5ALQvfs3DDqf74UNrEFbF",
  "key27": "5yXMuqc3XVSmEQivY4nPwL1GRQEfs9AY7QNaHF7tr3kvgTqs2PqDdGseJi5XpC7XJPnodmaARdd1NLHMzpBuHEpW",
  "key28": "3ZMqfxH8YSnXpzX3GTUXUMGh9ve6duTkfsuvSX83zrPvxG1D4ZUTFqXhuN3Usc1UBrwExdr7CM3545wb6JvbBCtY",
  "key29": "3UfMBc5QMJVttwsbMH1vL2YErvG2RS8U7917QXRXQZRVEp5VZ5LHQyMPSjnYmVcsjApNqL6zbPMBhnyikGg2WZZp",
  "key30": "GYBgErAB4jRpfLxbJDQkC2unLLJpN9xzL5oXQFA9JDD4wbwLPmzER7bZxxZeTXwKuYbL4fmJBLzFgfoMU2Zzk6p",
  "key31": "4FuWZs4yUVUmdBxv36EWzkKExKTYeMibixurToaivb4nZuqLS18CTSMQeSYgs7v3yATS4uNSRbDS9RYDFzSGAb6k",
  "key32": "2Kg2wxmz35niXuRDL85hS2rqr6TxFvHYXjhrGHWHvXVud4kwQM2LcU7pVakfr7bkS9iDiqyJk3u2rvftG7WyTWeq",
  "key33": "2HhN976dhsEgArP4XLaLuGK3UdPPdkx1ZiDNUxuwmZncjZbEDakZTbjDBLPteJXDAVK5UmdFbsc6qkCzkGMex4M3"
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
