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
    "zihZk869hD35JjyLdLeUBQWeVqgDsbdYjQV3zShZRDCEyheGyXC37e6hDgPttqoj2MAZCXG9TVfmWQPdAYAkc9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vT9DC8AvqdUUzznk5wh1c6LxcAJJebjP4Fus591HCRArKDe9CUNRTmViucT6eRZBKRWKRYrEv1d295Stdg6UjnW",
  "key1": "2heZvMd2srhSq1uB212r8NSBooxt3VfKSh9PhPc2FZySmxVH9QycKazzZvkc9RU2nmHEcM2sw6NRSeGCJiGu45Uy",
  "key2": "3kjD4C9GytsBxJUPfueLfdPBpSDus1Jibvm5NQbiAboGVxmpC2JFaEVPx4jCZ4MDmgqqX519cz7NuSWXnXxYxUSc",
  "key3": "21YbMYD1CtWVbnNTbVFf4vCNP6bqZ7ZtMjXnczFXocn5NjzYHtGWZCCMtJ3cn1egC786U743R4D3X1qW4QttdSPz",
  "key4": "4bor2S6zDX68UkBvTT9wKKfCSsbo4qswPrmqFiibaUiodm1xgB3uTpE8LYWNczTbyWuCdWaRtXxj4t6peY2N7Nw1",
  "key5": "3YF99FeLxKWQ8htsyJvGWu38rCcgpR4XdgTBdrgs6oRSJ5E17Lugdy53GiNJJaHLzwp25ZmUWS2pNLxXenHcqXdb",
  "key6": "23g5qeYeZF7Na1jyRaSWVunQBNK38QCZDDKftZoJm5BG4DE4UsBJBLzomZfNdTBAuEmNBb5shYPL8r9igXXTDTj1",
  "key7": "3VJg7pkTvskPUTYGtPUqmh68RcuNKdCUhtsQ9r7q6XSbBL61hND1YybLDa5bxhokjs582WJgPsQGQ9dMGTAeRFu2",
  "key8": "5rwPz9uBC8wW7Kg4wo1eiGJYrEmpoL3SrYqCxwzLaewMcBajTqfm7wJy6jDnWN8rX4SkyWrsL1rEw9TnvB3nt3X3",
  "key9": "56fzK2z3bv6B6EmkNHf1UAHJzMyQff7dj93ShjxxET7H6NaicFUzsvA3j6SoQbAn7MN1RxJjQcaLGm3Y6KGiMgkw",
  "key10": "49SHF3HCS4WTocE9x1VbcCT1fdbSRx7m4xAd54ZmoWin9zxHGYgSZ95ruadnFh5iTNcSYwYG7pCRWCoeg7xyKMad",
  "key11": "2j46zk1Sisxyh5tQCLutULKtkGATVFMrToqrQq1NwEyU6TppuEVmDnyfLJfNpBfcZvjofz1dnNBQw1us4zBUvjDW",
  "key12": "449SRdhqdTCjjtCnENwZ6qaYGeRrkwUnFdLgqDrw76pLHRznW1mUqKQCAgKNNVk57dngV2LMowy9oXDCm1fMLVVb",
  "key13": "5PuBwba7CpsjkSqzAwNibcWcNQRRNW4c1UJ7uVs14Egzn3H3TbqDT39iQ1sAPcv6Xxbuw6VDG7JSPrkAj7T54aKf",
  "key14": "41Vw9fyBoEgF1oERkrCkMY76AjnG2r4JfmiY3Sj85BjVeAqEtZjSe93ZpKs6RQWrJ2JPmN2FpjwB8BnpEXLReMAa",
  "key15": "P6j1TMDW8ckaFds7MvzmfJWiRRTJqd47Hht5njsi3drKnRHb4MRsUmYup3amGaRG1gJAa7ca9dMrk1JmMYb6UgK",
  "key16": "3Go1UR89P3Dh6HeNSdR7D7JkZS2NStr3tey7j62Hwr4Amdn73qc5e9kQzcRKusnypzYdu5SKNgKU311zqTb7nc51",
  "key17": "5z4w3NMp7ZEYGewXv2Z4fzmEvw5kALa88c2CApn95HyU5JrDU3vCWHHA4a6hPiYRUN6oXRP7Uqd5naF8UaiooYYo",
  "key18": "4hoFMDTVaSLTdtk2wpD8uRuBvCChwkU8zs2LAiUEkkpwwe3rhJZeiNtD5EPMLtqPC3udwRJuqhxjTZCm6UnXSgKu",
  "key19": "5CxdW94qhizCeTeHyGAymg4ErrdKY1BMyTwVG6rmuYWMYMikWiAZnV4o7u4MGKCLqgGy4TbwEqnka5MwjynSU5YL",
  "key20": "2kYpkBJS2XEUUVNLRYxSkv9eUWh3khZCNLkrAzHkhRJpMF7txEMGoy2c9Nm443bHmYQ2segw3TJsWw11qGs5FqAA",
  "key21": "4WTGqwnQ5iEbxGM4TGF5SFmZ6f1gKnWDjXkRrUCrYAuSS7G5WQAPUQVV9E5vatSbiy6Co6RfXB9hCGK2AoN9zmCQ",
  "key22": "5kSYB8QRvuACFwBaHopAavcqMYoDJ713KRSCA4xBGXABWgg2F8ktGn6XJhVSxyLYFCVZqWzN8618wewS9JNn8tAd",
  "key23": "4UiwSihmeMTVCHkFZ8ccZ7xn3iMUGCDohLsp9y4b3XnxqmWgNRMBaAA1q2UZJH4Q8Ss7mkNFQ7Nyct4dr3ah4nFG",
  "key24": "rwdBr5s5V1rGZAC91waXNZKNtZFpsDFtibyJi4Wq3WhggCeb6ruqKXnsHKsTaS6FYXc6Wtt35PBjz7RoyqhwC7m",
  "key25": "vRMzwdo8vAa1cFKQjkrkYHKuYip5hrZmiMTAypvcPGB1CpWnZMtysXa94wm4LscJRLf7vrE2uYRTjEEP1CRqFuT",
  "key26": "3AuTGW8o24FvF1yUr4HC3fYjBq6P4Un2AiQaZnEw9Y8HAZsoRP4A4j2V94qgBQNg9k6BtViujKheRAnAUo9F1Va5",
  "key27": "38dqQyA6MmKRUC6hp1jKRHke59a9pLGWtDnZtKUjcY91k73z6qFH8vJjL2NFc5Cn46ZsuE1QrRQDn6H7aMNnS74S",
  "key28": "5EkV35TbmYX82nfvv8ftHCbK27R8crFNXuWx9GXAnJkRLx5pf4Ens7JtZPMPUemQxHA9cFMvvGSq7vJqb3EfKmQT",
  "key29": "3jek7pfYAXNdDZUxAezTwpJHDWzmdH7eKQuxXrs9d6nZSMkdnk7Sg4QeJSftAgGpv2r9JWL78HrJ2xzmn8zYEHcM"
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
