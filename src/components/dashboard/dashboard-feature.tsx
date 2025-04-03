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
    "4ymBZcTXNz6nyjgeyDGkYBzVyedMoYgqqz2FCbba7ZKSmQ3Wk4qfrsesypj9WK8qoQ7y3gbVSinVtUcmapm1a2MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CH23mENSkq9EmoxcnHR1UnNgA7DRgd5w26QbeApFXxgngc6nXhikm2AP2rsKedyjHnNZ4k9kBd1AhVEXM5qLVmi",
  "key1": "wXnUMPB7gZDjEov2RwUWRFsGTsiDQRKqUXmttNmVhqzzkpUzrdCbQjqqfTaZSdYRQ6zo5h4ZXT5ETFkevfQ8i9t",
  "key2": "5STVCB5aTknPoazAfJ2raNTTqbHNtmUunLrMvG7qsTRT1P67Y4XV5B3Z2iYtzrD4QLhATMhvrbrS2Ern9zhqpeQw",
  "key3": "4rSW7oKhgsbfvEsDyHm73b6xYGtPjhW6QvVZLHvGPH3eXPZGqexZyeQ2hpxKRusxqJmeGstA4qBum6vhk7y9RA8k",
  "key4": "B318xGo5cEsSyf2LXTLh1BfJqcxkCXCPPSK8xBNpVj6eD2dqHgyC9jYqGCdY7bGZMpMgX2DspjWvjSC7Bb6BBzC",
  "key5": "4STducDUVKVgs8aNQuoqe96wee4dkDM8XNBs5B3uZTBptZ1AAr7C8BHC6NMuP7nYkPg5B1wT6P2aPyws8dyKDq8i",
  "key6": "4TQdKKwSLvHu92YEHmurxLL3UL8sh49CNrv4RsxtXnVWd9CpRQc3wiy1PaCv4jDgjqv9Y5CCvFzRZFeePgUxfiZk",
  "key7": "2CgcWPwCwQ32Z4YChfaLuqLf7nrVSFUJxFXo8QXNYpEnojPr2n354NWuK53djDVs2Avn7cdJ8w2KgMzZVp4HiuGe",
  "key8": "va1Q8FmsWFZkrTiMrUWxyot46Z4tSMuV89qwW2WQFYYUDuY7sX8mESdKTDTbYN671HoeAUnQLzh19LVA7kzacpS",
  "key9": "5eVoLwUZwMiJHBWuq6NQEosM67MLW2NAgewgNLqah3Ba4EppBPL8Nw2AwNByXKTcTpCmYVHGdR3AcDrcPfrC77zr",
  "key10": "31suYdZHWsE9QDnhvcMuZXpLgFbqagQ1edP6pEm2xgarkvtQPCSBKKJaUcfMQnGrvixSeE8UFNVSFRBamRRjzfKt",
  "key11": "67UUCqRGeRGrVZdmUJfpEoeMSMnR7xsCBL6LfuNx9PDDCQbr49oT8wZytYE2fCpcuKqFzcV9G4vE946Gm7j3YJfv",
  "key12": "4B3uhu3VS1S3KjR5zDsapBswX4BmzYkGDceXg9ruhRKRrqfUXP86w5gBF5hHZHpmdBuQByhntryYPsu87Hbhb17S",
  "key13": "5XCmat9pLFZnJoMC7q2nGa82ALwHJNvF1gNa6p3HUPJfgvpz5d5uUk93wHmWA22Hn6eEYB4QfG66xtuwuRSPcHkD",
  "key14": "2q1eN3gwHVF9pchW9YqckPSNCMuyaJjXr2WLDDtXwjpZfukPxsafKcSjRhmsSXksU7nqAeP2koTxQQFEUjbQLzyQ",
  "key15": "jKto43HPYsgXhhnz2rWuqdxpV9JCAisgY8WfmKuzR8HcuRCD1ygSt3osQaX6BMq7k5NSLkE8eLh6bnvykGRcGGC",
  "key16": "cVqceGgfjvkHSzmFdo96s7JXkMDrhYqXE3AZTztSkEoV8wtiULSbNkwdysBqQHduTpiNbz5SEuueQMduawoMM5W",
  "key17": "4rQyeQ3Esk8gj71KDRiEwvVoC3nMyLUg4JdxVHyu72oGukpBXbhHpZYuyJDSTp6QcVFVX1dcTWYf1pr4hDEpjAsH",
  "key18": "WLm8xwKUjeA6rFYMkVasTfuCxosgxen1Y4v6JLcts13n1BoKRjDXhsLuPWaCiEPCz9oj8upGUfpW7DAJ3bwBYqw",
  "key19": "2TWDA2AeTSApzx56hT4yWtC5VpYnQDEQuqZp3rF9yAxJPARJpdKwHxonje62bfo9zbZUBJB1Qegda7zHCwo712wJ",
  "key20": "4UY21KeuQ5ZsuuTKdchw8UCUwufm4oic9R4xic9dkpNfytAq8EXAQEC4na4gN8WTBtWz3ebudGXkMqfMmzCGA6uE",
  "key21": "2tqV7khojQz5XGm5JTUDBUmqrwmoCkEM635C5iXFZsco5Y1iCqh4aKAHZyWUwcCofmr5fe7jvuuh8zTrtTLpJtMB",
  "key22": "3avUnjcXKtEhNFFj4KqaRP7xnG2oZV7R9Z9CFabRfaH36zWLMm7Nq2zznW7Z1z1JhS16bg392Ck6SCY36h7WvAvR",
  "key23": "5j1VsMZ94TYEpFGcED1gGRSxnwK87ZRZ317BKuFUpaQDHiZ3NfW2bDPCjMCdjXJwSnuxPSyZ9hANfSK8h2N7nyPg",
  "key24": "2kzi5WgG85vFBAo49nBmkM8vnwx2VADuPSJKzW9KBsWknpGRMM579TV6N9BhcQLoQ13eAcpgC25EnoTwgqpBwE1d",
  "key25": "4hmbaHWmaMSdX3DKWpJTNpmGUT9ZfGzVi7jbZTaGHc98C8YHrzi4rt61b7YUax4zPkBMMVWQvhEsxCL27s66M7CH",
  "key26": "3GojhAdAMMfHWygbRCbwddzgNySdqBisZLQGqDAFHyD9hr96vWxPxS8pXgrGeFLCf9YJu1Mu72jKXiRUBAtu1PLc",
  "key27": "2AQ3AhR2cQzF7nsVg9NjsmZN9FiF3mq3tvpnNPYvoyp1wh2NRH78gTh1aHF2wQytAztpgRAuFeAKi9T3Y5c4Z1LX",
  "key28": "5WwNw2KnAko9VZy1trd7AjavHMZ4DFoKB1ttWwKr5hucXjrA1EMKGJRRGj84U63R7xNob3f76zGsCAvwUjFuXUyd"
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
