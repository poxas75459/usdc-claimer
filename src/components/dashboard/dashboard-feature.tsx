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
    "3UhmuSFNLh4kshLrHXrKT13vJ6QZ5LHgBkDcPxz481DBffyuhtb2bU773PAqnoF8Tdf4kjchpdatNnntufBpxCXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQKrYDEAXj3yXku7iV4sR4oToGW35CnsLVMvZRj5aACGxnu5BRPcWhS8ph5WeufU4QrSuNfBve46hxuxYrcB8ax",
  "key1": "4FHxEZpcizfbHLFyMxnrgX58MAL9QpnqtiyVxMWcAVsWe5TP46pHKaqtu1eazPJ7np75V7e1QYwszr599JLTme9M",
  "key2": "4n6uWn7ijWgCDhdyD1iRPTkDWLcKetTaE1FedZwkmhgbs8Agpr8hKcLtyqcqBXxrYF99ryxJbU8bF4skKGESwezL",
  "key3": "575Fi6GKJPf5ZHTmKiDk9FSE8iLGNVtTnqMtdn8aqdFVRBieWcMm9GQpmqZDUXzri8FjuRqRAw4YHZwjMifZ7pEh",
  "key4": "4MPHJbcsCJsAq17UEgpXYwarWhptKQ3r5v79VHfuKxJjKt1GuD88KiWk7B7FS48f8bN56bp2iNaSMx6qZkDYTUEu",
  "key5": "5JtJsKBmGLW5qicnHvBWTek6oNKYg3i8cteGWvyAyn3YHbaMFs2BT9Xp3Y7FA936F39beVPfGEeWLfij3cMaRb4w",
  "key6": "4drMgRB2pZNGLnZGh1vssepjHYRyRHTiuearBj4bJUkQGuL3L1FFqa24AGQWmAy1KtpQ5Jeff6tFTrQ9uv6EPpZi",
  "key7": "47wPhWBC8usAfQyVtwk4BTb4UMrsYMpYSfC1VfQAXXnU43x6hRZrvNeAKhA5ebt1HEVTTcRJ1r4mRAoLcq1VP1r5",
  "key8": "6SpkSaRXwVPCW3JgNVEskzuU7qDNUjEvxSPR2CUQQh3JveeFWEVdWigyUtC7xwNA2e8KSTkwkhBhgwhMBWCrnAW",
  "key9": "4CPBwmC9NAjWqK78NisCJsGXZH5F6YCEpzD4i2Wjcoz54LmSRYQp48NSegXVXxnZj6S56cXzfuFzrrNKa4pzTHMn",
  "key10": "3vJgTkmUpDEKxtk5BPHPtpDCvmZJ9sGTVQ3KtkRmiypKQHUJXFtu3aSX77GAFravN1CYMEoZqQFz8kwGsR9BxwAp",
  "key11": "f8QVnYNoNAHP17CzwCwaGL6dixv6yjWZ4H7ZuqdCp7XSU9nQdzkLxLHC9q4CmhLJRyEYa5gR48dHrKSfrCTJjEJ",
  "key12": "1MdjcgCHQFUAD9aKnPm8H2PXdYKEDvGgGfZhYekW4xaXR3QoEcmNsE67hRhcFhRtvzXD9B6uy6eATXknX1J7XMm",
  "key13": "3uWm2XvGuGhLV5KVPzew2ft4XtXJ7aqbMGS2H9AgmvRGdWrMfDp3Wpj9qoDS4sddHzakWjUfef5XnQjb1pj72X62",
  "key14": "4Z4nictKzTZGy2FxsLB7F8ZzxCZVAX7uhzVezyKsaVNM896Dj2BZA4bjZz85HLofyMbHGo3twhWDQpXfwpfzGWQa",
  "key15": "5zmG7DqqSfCtg3AfpbbRXZcioA4Beqw6s4YbU8JCnJXfeYPSna3c1rJBLrtji4j2u8oAmNsefMUJj5jy3xUYpdVZ",
  "key16": "5fqJd6Kz1jWSbjUd8BjYNfgPCphrYbczSbLpVskCm3ghjz75bxhkSGKFrntzc2vJumfDyUn3CGanRAfxSRMM49uw",
  "key17": "32g2aAnkZ8PjSwP7vwQNuy6GCwkV2H7xMhMEUpdWiGSBUrTGhCMEngMnZttFFS2GkpXqGnYT4QgY7HLXLrHVahYv",
  "key18": "2VBym1BjhV7YZVXopErrLfbDcuiWUj2iiNyoR8Z4KeW3VmgGM9mEmAPb5Y9AuSn3MrESS5t3ZMziBtGnusmZ24W8",
  "key19": "DHnbLpWQHbTAyoPFKbxo2s7eiw1U4jsujEV8hKdonavmw76rBxTwsWxvjiguPdaPrkw2JwtpBoHEYb48XsCoQsk",
  "key20": "2MZV7XFVoBEUhM8xmoiwoV6US296w7R8wax7CU77vrJidw2FDPgwpW2G17ifghpm3LkURH8rDgszVYSuAvKn1nK9",
  "key21": "4nN1Hy52R9LEn6iapsXRGT6xDG5wQdi85EmeAtabSdaWhd3sEK5E5b8YPMX1B41jPuxzur4WL5iB4FnpaNS3UcF5",
  "key22": "4FMVGiKvNtWVogHN1rtax1pHHMMMegyvLW8mKf4wAhkrMJyruRLkxPG7yVxpCmw44t9pXsPNYcuYXr1CgsBzfsCj",
  "key23": "3qHFQsbHj6kDaGbE5ctR3MSKuqViym6eXi5oQBX4iN7kBFbKKM2Cdq6GBDqjQ1BvaWfqWi1CZTZsY57vEjHuoVyD",
  "key24": "2qHBLxGXx35dcDj5sWFfgkPzDjLP2v8oeWwq9V9TnANHhacBSQXsWCp9WJzNW5HWWE7cZzRzUZTEgxM1afFybdDd",
  "key25": "65Cuony7UW946pjkizdGxkdP8D3tbznBHBHveVn5KEWvBjJQPKE5o8YqjyYEZFMm8EivqVV8MNZwEL22kpsMMF3Q",
  "key26": "3MM9tcAQhh9HSJfFrUu3i7j2vsn6AeVtyqiJoBTDvWEKPZCwup6JHdNmgubb6UxPTSGQm8UaCg46wj7o5M7FFdtd",
  "key27": "MkCQwhtoXz71aUWSMY3ekwGUTYP7fCP9uP3XPm5a1qJadMtqtxPHpcd74LCTEsQ6vfFH4EqMTzKRxPAWJQhF1ff",
  "key28": "4LxMUZV6shaVgUXTiAJpTLBHLi1AsjkFEQe4ZSu8uHu9Q78uvSsxYC52oRMv8NATVnamT92PRwirvzd2Mob8qJZ",
  "key29": "5QF8EjSso22mKHkbCzZr2vrz9c5vGMKCJJdnJ9kkshPmGp1rHVrdKvxbvuUxK8uDHGxyTo6onhcajjzmrJFbpteN",
  "key30": "5KfCpfoVexYcnJH5V9yNdT2cZqAZKJ9yBVXumjm81FR3E3G8K9HkH7XqE5P6jktwvvRc9ca2vfDCCgqo9fvr92RK",
  "key31": "2YrSfMQY9ZJGnMDmgKZGVhVUKXbmvYyRpp5ab29Sc9tAL8QeXVbfR1R7zqJSrmPd7EkNTLuHQyNr4mza5UuW6xpg",
  "key32": "UgVaPouWENnH16AdC9qKFPCUZwShzYrzpn2GyvJM4z3cvAnosiykF7KAULgnnthv1YZFXdehY7TqJqNAym9Wvun",
  "key33": "2srTNWiSKPi8cijFzH5y2Q5xMtJxM2UgekcKzFnKjJrJdTib2kVqD9pMZuucuJuh6qTogfj3tSuWsQdGVWtAeNd1"
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
