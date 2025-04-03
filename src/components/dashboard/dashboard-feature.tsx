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
    "2ENuwAi1bUg4LEx4aG9TnZKab89tHgTY4YFxvQXTtTDVe6ZN7tSYu8e3MH42H87mESBmYLQnzF9fKAk747Jqdi48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeFsSYxUM5nCUUsez7iNE28Rs7AEjNu2ajLZR365oomVkddb7mFtWnFcmswDy9hXk3JAADn8PNMcPmjW2xqN1Ph",
  "key1": "3dN1PHCdqzxHnzbBB49qQmTKedn9Weygvfz8wLUXAJPoLHGWZv6ciKxzhz8aVdde7xLk99UNVtNodj9777Wjwz3r",
  "key2": "arZGURtBVNANeVzSwdaz9D1WFUxisnkbPzeH3zjsJytAh3tv61hqe4nSqWPzY54PmE41YeiLjc6t4Bor2JjXjiN",
  "key3": "2yVuBj8vMsfCwQrxH3zvrG61czS31Fe4ChyTt7D3Zen2L9DctQZ3YcuegHLCRDDtzYfG59rW9dUhEg46V7ecfSBi",
  "key4": "4dkUpgLtQkUJ1XK8vPomKsDGwdeR7rAEU4H9y1mX4ALkUtar9wPApboHakH4zbd2ZotDVcZsjA9xZ41A3UYHLpZJ",
  "key5": "2F64jjEeKzz7JAj3yFeJ51Nf4Th8GyVDNvX84ma16L9UoMuZ1fk7dCMKsA76Kzr4GFUekruRBGmhXM6NWgwAQXEq",
  "key6": "3hxQftsPVLaRrxcRcdjVhWDpir5o67EVR147B9wJkUgNMYCvDepMeyjFRaf427nN3XZb5SDNjC35P1oU7cu8cECh",
  "key7": "3EoVvsxMHTrABvhXVTJDCe42ENVQJZTWNLXs658gcyxSQfeXezdkPzgeFnagtpjXxKf1ygaEpR8Afb2CVqeUjAvZ",
  "key8": "66KwgtkVV3udMYMzSfJMmFgJwwPKzPdR295kwHEbkSHq4pcCs22uj66skj8X1vRe7bhpZuqgfw9XdbXRJ1pxLFJP",
  "key9": "QiHHdPMaCYGLoZ7sPEryJuCikLogXC46NCpxXizgyohDXiV6Cipr7FGKxH68UyDxQa3EdtwWWJVzJdVQYqMN7PT",
  "key10": "2yneAd7vLHZSPktkBpNczE2MNvxVkF4a7jhVUQBzADZorBs7Zz3deBMSsBKTBmjNUfwMS4iaV9Zgvr9VtYeGJxHn",
  "key11": "3A2tZDNYNQzayyRAqp7LBeu7KS4bWN7LAvTWrwBFTKiaJedRd1MmrANwKAYP7E5LxGCaxzMQivhKyJyidu794DVa",
  "key12": "La1hMHmxrbtDyN3oSxCnFJixFAXwugY5XGFE46BVTrEQ6ipcbwUZv8dWUUcMXbvbGu3eAZYenkePinEh66QfdaK",
  "key13": "ZzVGBTJwAGxHqZqs5zvTYN56nXcCWj2XGoVQJ8w5ntVUd12fc88BHTH7B9qRWfU1ffe7KvXrtDu7P3mNwJv7poF",
  "key14": "4zXcwPa66EjShQhUHWhqihmLKbq76Z95dfyPTWXbcBMnd5YYWEh75u6C7L5GBNcswCqvXjgy9sr7ieWvY3Gyg3Xm",
  "key15": "r32SPzE423MtHrTEi3cPNKHZH7NmbyYpvp51Noc9qNj2g9HihM4fWG9V6qEYQkGy5W7PCBC2bKBwEAo48ufRHNb",
  "key16": "YyEbXGvcHDgZN8nfAnACU87W9y2G2hTyHgPSYTAEoCyyTPSadWTE4V4VhaFcUJDx2r6TcFERpK7VhexD1Eet2gi",
  "key17": "LyKi5nBLXTcUt33eY2fjyxVXrxttWRodCtqYaUfnG89uMdDP5PwL5qz5egxuBDgQe8Tn7iJgPqe9ZprvQDPPb88",
  "key18": "4CoMpsBLSrVLVp87CaxdPUAMbYhAaTJ7r1T6pFtpvYJvQEHK2aERPJji9HDuFgs21r25hE818FFgvuZdv45SvA8y",
  "key19": "5bPtwmnMz56UdsyxpfNDPdtghGXkgbKXYC2y2Up9DZAopeyjbib51TMW64eArMR2hufamBkFgjwJ3KvjYruMxXUn",
  "key20": "5m4pMrdHZ9DY8kRCKj1pmHm5zCw13S3Mn8kLQM2pdTSbUg2rvxAsDuQRLY47vahjMwxRbESw8Af8Ef9Gr7x9SP2r",
  "key21": "3pTfuPWgZmoPe6wtEZWtP8rwUJ91iLpwiAYMYZ5zhNkPJEt9JfiD6wYvsKdUPKWABY9LrzejJ2bNpYswHPbzdaFJ",
  "key22": "4Hxpfkc6Cc35Ww8EaKmxWGjR5WStCcDYGBmExCu4VFn5ABNjHJqMZDozpKimzwBTdK5m4C9o9uBsExdi9eiPNyP9",
  "key23": "3N7FP7fy4yQMfi2CJPuwoDWByMAygvmU9rpux9KVU4wWcAo4rLryjGKpjcrR1FYgMfRvvGuv86T4nx8t1tFwh9S7",
  "key24": "3UfQEq67R1JRvYRMhhrtdytApXcSJAmNFsMYQBiFFxsPpf9Ky5jhHusMZ7ZgyRbA6uNnPb278T7JMpxxfk3PiFCy",
  "key25": "2c3zpaAgy1qua3YoBdsoRTCCMDfBqcgEZBEA16SQaFHuBFmMCRZZathqHZHqdjo8a86HmiDekZ3rheApMtxHsuqJ",
  "key26": "2uzxnn1kSx6Wg46BCmBzbvMyq65JoB8VxrCW91dUcot2WsruQAS1fVBo6B1rf7jumqBmehFN3cjpsXFsAo9wTN2N",
  "key27": "ZornBBEm3r4Q7qJt5ocWwP5jinYveWT1XDDSJLB5Z4PZMd2ZGog3aExxcYWNxQVrTKDG97vy12Y4QRC27L83Xtt",
  "key28": "Gizwt1TtsHzAKRZGXkemC5UCMob7aq1JCgxbiGFBq9RwLsi4tisKkiy9pKE6dv4zPNBERuuw1Urk6EpG6nqjJEk",
  "key29": "2qSXi1GUuGQuwewHpr3gV9HBk5oHujaC3rAEfaimfFet8UQSuxe9h69YC4JafceWbBSrVFooAmLv9JDTj6gwyvHL"
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
