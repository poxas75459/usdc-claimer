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
    "2hd3EF5FoWTFw5NZHckmXSX5SGCmYTThMr6tSFuFdGywBUymqrUo629qDHYnQoqGWijAQxj9BnxfUci9hLYQjW2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNr1HM8UoUmgJ49Wvii9TmvTtDL2vM5bgKUcp2e7PPPBpCHyaofXK2keciUkVzAVL1pyyeJhmYp5MJPTfdfK9aA",
  "key1": "2CG2tHp2Vm3xLHAsKm3ncSY1bXvw5NCgRn6yTs3kjvX8vmRNm1b8qNShFSVBPPzSCAmLZJNQ4mHXDEwMoVstaBa6",
  "key2": "4rqeaBkegNn8eG71G9hgkGS8g4C8vE9rZQw5t7tFVwk5pAdHYHvHf7xkMTwiFoZX9XwYrAj7YY2QxNv6xbFMm78K",
  "key3": "5xfzuwutEkce9Z4gAjDdbQKCSPkc84nodnKzmPmV2D8PA7CbcsPZPxJTMHUjjUxi7G8qt4XFPCyYvVqwDSwnAyz9",
  "key4": "48RC6xN8KYpD6Jn8HXxShrhMKR9v5QFTknzAJRbEqABbkY4ffATc27KXJbmhU4tCSpVTAKoPBEf2uuoEsEEqqbp7",
  "key5": "36QY8GkuLACWK29yvDma7o1YNZ1VNptQvDrhkuK3NZusq4e3qjR4HLUN3WBnzWtStpVLyqkQZTjAaYzqqEUhD5k8",
  "key6": "3qdRqhxb3tejpSjL4KKixnjiNr6qq1NaRBeJ4UzeZueXH3yAuzUXkAc9nbaATZi2MLGzjvEhBCNiYNmZmMxRrd5G",
  "key7": "sQfBKGLHVEfdcccaQqXCaZvs3F8uKWs1nE2EdWNq6uXLfj3Dun7z4G56M6dh1TXSy5dDfzj5HdTt4PYgiCsNJyR",
  "key8": "36mrjU47GYAuPhpdKZ9rp3YvqmR74B3FyNMp6PQgmHsfCWP2F8bE7mCkXdPwNWcLindSz4eW4Mk9kiUqGdBjPQ99",
  "key9": "4yNdMRqv5q6LQFEQUVfNk1YndvyqW1ywvA8zEgjuRfgQRRCeZtsLNQaSAFFjtxztZizvBiuCARo2xraH5898wS7V",
  "key10": "5RhoH8SUPjzvUuG8xvYgAZyxQhvwNKXDsBUBQyEtXYWBLj6LqEt3MbLFsaWGLGKLS7skZ9XtegnFgNCo73UCxEDh",
  "key11": "4hizYJvdMHik5xxSoo6tiBWxADNquBkZsXPmr4d6dRMdytB3dUNJTEZa27ki1cKrnb2evWrAPuMYXkVxvtXCPpgx",
  "key12": "5FmDFFwpA8AMRkacKHrYdLezrvJsk62M9neGxFpncL3ixPMSuKYbfBbj4X4kjo5fk5Dge4etMokpbtBAYdNViZzY",
  "key13": "47jiyLC1wZJhKaSK1eoxYvu29CQKxsd9orq9WJZ29XoypAFLMXa7hhFszqV31YKZa9L1fYoD1SdRFZ4yTrYCaZNb",
  "key14": "2YLHQY5EQvWZVjAE6Za4Hf6hBLT1NMbbZJ3UPkEmXrRGM6QpSnbs8zT8LP3UTKuWk52p5xsYz6Ch9q5oRqZkUTxi",
  "key15": "61N8fBZQf8GS6PGfaeGbeHTszpHcLr9q1myRUh9nvk2eTVMjCpPDsCtjEyKCL35UdPxaE4r3Vw1NCuw2CLrbScna",
  "key16": "5FZRajdaghdsdNK4i2GTWyvHAaf9Xsz67CkfTrBdkMuy56wnAcpDNMCWLs8RZi2Mx8NmYoojRrjQBRRFgtZjDqCJ",
  "key17": "42EBf3aqaznZ3r5u4A6VKAmDFtjwZ9X2cEnVEaTqBEX6RQb9uLGhGSVrjz7kWX4vdFmZ7CHcFtQX8HvHZsX8b6Tt",
  "key18": "5gDM1iiag27odPVYiZuoFDUgd2aechYS9WU3FShYKvkt49q3FnaFFmd5uAGcBzRD6KquwhaX4N5QVeeg9tSraxjo",
  "key19": "ei8nUxbVrE5hScmic6cCL6rqr7eJnZBMWJwKKpa6x3hB3Ta5NVH5XVTpgqSdduVzZSnUM194ZsgrsfZcXiFWawd",
  "key20": "5DTaPiAs9bbSW8vSsKt7qYeuM1h78yY1Th2Zj79r7oeKuu7jz5crWPEQCRbBZGx9JZb5RJtzwL6xJsS82yw1DmHK",
  "key21": "2kBJY8cAPDDWK8xuAMeinAH37uHyVm4KBDMKkLx87VFJakYBnK5RqzVvpRzczQ7oJk9F4Ag3z5M6obzsL8rJBYZF",
  "key22": "3ZUineS8TRB8zG8Y9ysTbw4HPEbuwCJw4xmXUJcBAw6j6UvPvtL7bbmAhf7an2w7CdN3WLRWLViJYXjMB2XF6he5",
  "key23": "28T6uA47AJ9nzqmHKwQJKeniK7qUFxp2NdKWGqzVcyNmd79QJPjetPzHXyji2ksDLXqaqM8saZwRFyMdUbgmMFWQ",
  "key24": "124KL753McxRZTJXYPXNrK5muapo7twW38muNqouNLjoZzZSGBkmxB5mM5WvXsrECnqLmhCETko4aa9EhZSoAdrN",
  "key25": "4kgJ9Mj5eGdtwuxzCDtMpaQwMBhxwSUXm6X4i8MpYUJUmYrFKbefj2JCxS2mwL3Wif2NtgRowLFYntpJETyM7A3s",
  "key26": "2ctzVy5rBdngaaZciVPe6hWQJiSoNiXrdyaFkCmD14WjwAyc2iKHHpe9XRw7wNNBdvrz7kLpgT7cEVJM4ooGSW7E",
  "key27": "5uCYmiP2VhFWZ5qsf2UFswLkcdGBKzKeDqyYNdsgYyASbohfVwmQT7HQfYaJwhGS9mEQU4H6pyKRWuKKBPe9uS7G",
  "key28": "4YGjnHehyLJp59kvT1dotgeDXZ41uvA445Q6AW2PVFZsAY4HT28U6AnyCJxw6SkjqQDXboSMiFEKATHkaycLqGLS",
  "key29": "654bEhDULDuTdAk9QKBGFkXdXekSKmjphAtLthVXbkfiXbvrd3EQTBatqFwtSepKkwSjXyuqTpkJRwz9P72kPbKH",
  "key30": "5KPC5fS8iMjxEzcUSrgPopP3gMfkYtjUqp181PSAQ5tjijE4CgdDnuKFJKLQTqacBEVhGh3tNR2SNB99cL2uS19D",
  "key31": "2t4BFGrPyH1X7RotpAPRPw8zTBynD8FQnUZib5w2zkwG9htj6zzFpDq9pU6LreJ96uxJQYnY57jpk1MkiCAmr7Ef",
  "key32": "3uKbV9ALJQNgaoqfhgDMkQiUjxrQWsQYSHRMm5rUg6rxDLQhTaZXzRhzjhYSY8gELLojLQReh5kLFwb7jhX79Ery",
  "key33": "vQFSZoUxE6AU7kNPmCPgMiVNASektYkJMBEirZC8BYVeJTMxhPGsXTvYb1zVRWKEYt4NXfNtHioW4y6aNRDLwga",
  "key34": "2T6ow4fXWFmCCDAKjYDkw9uW4fP2m1XheJEJpxUn2fuCq1MKbnTbnb3TPxrC5KkshKk1ZYmFZMvoH58wPUnorEhe",
  "key35": "5Etth4v2dUdzoMKUCQzFyyFSSrfFcLhXVqfFbQmc9xwzqCu2qnPqT2hHjzcDdjwTTX8ChteavhEXgzeYNs16TH2K",
  "key36": "jqG6oGBnFq2wAaJCs7AkixdygumhVwdjVaw72s5hFSXa2srTGJEtWhmJhUapVePXbWv4dbXuWL53tn84e8zfZD6",
  "key37": "otJEQRZKRZjPtxacDbw1z1DDKjia2hnZHpEHGSuREgi8JZ2kVWuDHnBU8VKbbLMeUKiyB2FCJoWtgicNoiCFZEC",
  "key38": "5e1FLwp9aYKKCBAQsfC83jVq8tcBowk9n27HarvtfuUvPwcRWdUh9rr9RZSF1fXRJQMK2gxBxYTYBe1LTHw1Bo7R",
  "key39": "4hUyKvSCyP19MYPqRnVwA3ExCWnL6MMRNpo6L89fdvFWn2P8Te2DgcJmXtW4vguE598vZXcRht9X7AaFz5XUjuke"
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
