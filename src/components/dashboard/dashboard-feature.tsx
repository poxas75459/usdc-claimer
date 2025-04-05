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
    "8QXVSfov9zWvvosfikocKY3e7WgxkwG8brmjFLBRfrRmHJgd98meKJzzQhyceUuXRjDs3cWoCVyrcNagMZ8ZgGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52A8mhYq1Zktsnx5DMq6knnDPPvPSFiift6BkoDPiW6ACpneMybfanK77J6pEnew9GeM3Ly9TAQW1N7CsxT8RyL1",
  "key1": "DPpXqqiBJqr7h5Pfwaxax248qGQv9TwHHDnZ385jjLhbFpcdbaj2SLwvyqjHrjfqdWFNDCNkHtND6z7tTnhJjEW",
  "key2": "4vJi9nmPTwboA8wH2oarz4b1q8QBmzMyV69CA8B9zR2JYgSqpdnhFfHwJSaQ3c8mHEaVCetsZqMSzuYcche7B4Gk",
  "key3": "qV3ozTiXzM3Cyhtsjvn261gfDqSbLxY95QCoANcTrGuteMF86giVj2wgKhhPaY4T88ZW8r11aUdzQQbWX7fbzHL",
  "key4": "2zq1WDCMoNqX4VppkUfRx6sNHct8oYke1WY2mt2hKHfWmAKe4wSEJLTzXpeArr8qTXoMNiBky7rJBACZLptZsmxQ",
  "key5": "2MzTW9aNcuvGJDMtxdtxY3rZ5b56w9q2ZvbUK9fvcsSb1UdAou4DaYgLVapYBvawjf3jjWD5pKqXuscvactpmaJA",
  "key6": "385bU4FWDtzJyiCkwDuUw2Dk6yifJFrxnPCX2dogXnucymKNbvqXsbaQymAfUNmTcYmcWoGsgjFszoix3ijZuPhy",
  "key7": "3Pr6oAh4FggDGM6KSS6QnaZRR2ztPWRPkGtVZH1jGkzNbXyYKLM5TwAXNC1difHPsbybKHmb7C2VRb4ia27Wse68",
  "key8": "44dTmbJ89Cz6pSCx2rqMXce93XCxQa5AygEqYuBy83JJbsmpjHc5Bd6yWKuj4zQDCQ8nCTRnnFtQDSeuiBiBrLbT",
  "key9": "F265gCT4M796SUACZbek8q59ykSwvsE4udkLGRCJdLL2bcKM7SNaz3Uv2kEeL7XgtSnAerun5bcAkCjTUyhZHKB",
  "key10": "2yDpCkJJQefRDzX8vhbn9eRkDABGtFtMgXNsbR9wcjLq4FS7b1Nn9ZkQc7Lo2uD8esFXDSf6PLbSP5bC1fRpcc13",
  "key11": "2PaLJNZCApRpUbXSWseue3Z1seTET7t8XrEPiB3mVRtshyknXFw4XdQ3J6Nc4CqfdsGmy1TgCVxwKbKgvLvBTd5t",
  "key12": "5Ck4wvqdDR3aChmfMAwUPyLY4jS49MvYE2QLPUjUPZ3fF1JjGUH8TvWo5E3nUoPfsc5kCFHDYs1qUb7kgEJv53Md",
  "key13": "urfB5nZK88BQLDmdg56kZHaW13eMHAxzxiHxb9RziDMXAzySCUY1S5yMdZUb96dcivvCTjhosuDyMWSob9VKte3",
  "key14": "cuqEf3HCpQCHGezqCJVqPbtzQKm2NCXKaVfdNs8AGj8qBegZDSucER6BeEnYyHajUPcYrU5vCeVbU6dYWKm3ni6",
  "key15": "4F8rHsLX1k8DsHFTqi5XneabQYEeTGtVBWDhDeLfWkQjykatN4pz1ZwZrCo96YNoF8yivp3oFoV2NJS9Vf59cxaH",
  "key16": "21fFUpkWx6g4DmsAuBW3TP5fbCNN9gq1QyqgkyFNCibdeCmuHe1x51qgLRau6NA4CHDCLe62EKbV4UjzY5H2L3XT",
  "key17": "4h99DoX3XqaSZUecWbvHNpbng9EBgbEfJS3wjuxXM4miERytfq1ALco7mBMuJruEzgqtUS8Fc6pDBMRb3on3VTns",
  "key18": "2j4AMaA9Gcki3syZMsjvZotpEzXeUUvp83dQa45thFAViNJ2gUsGgBLGbCvtcpFqnzJdqqUG8qUJgVkqShngaucy",
  "key19": "4BHY6JX45sYmVr1Q9bvbppok8wGRxu1fsnsBmzyC5iSqHKyQmmWX8DadgAvSYDHUYo5PrssuZA8HUfHYyv1JVvBL",
  "key20": "4uFDodXc6RLjQAjXSKa5VX8jb6Tkedmh7RTaUL3XPRH52u9w3xFmNi2hQguSoPK1P6rrYwko3mrKVbnc9dbdf2UK",
  "key21": "ekPUSGmKcLxMC9tnPd9f2dfx3jThbu5RciseghcQgyDXXUDRPQKSPetpbWmbhvjVwuzdVQgNqXNufiGLok7Kn7L",
  "key22": "5CPw6m3ptLGTH7CQ2YyySAjBJ43HKV5r3bb4B6HCq14wz6hrg1UQuUnwzUQ2GMYurpctvYmAkTLUvbQW7Y3hwQR5",
  "key23": "5xgPbbX8ezQKrsn5XWfP8CEsQMDcqdgoonFBjZ4vUuKxVefLazS13mi9YS3toYgS336Z6c11RG4ewQHzxvgfYcMU",
  "key24": "sMEnhX7Jz6zVpjNHFJsedbwCbfXwBdhvuMXcuFVeZXzEqevZjvd9fPqxmi4Bc44KzsBdzo5vqZ2oEm9mbcJfKCp",
  "key25": "2NhyCe2HoRvKxQD2qm25jvjisXgFEw9pQGq3GP6cCk4QxJo2C7dUq4y9bQ6hVN3AGyB6DnQMV4sxsStSAepjLyjg",
  "key26": "mfSwDpq1LrxyToShp5Ti25KXQCAxq7wCNpjjFMutnKCpP1W3hXZwyZizncYH6Z5vmCuH9oHF9ACJ668M54AxAQy",
  "key27": "5kbeGGJnb8VofiEYgUmCrxVWnNxjFfhmuppzYX5dt1CiDPAwFnD4YWx9yTL9KSENa4jouaoBDbWzZDdPWyHkQ3Y4",
  "key28": "4aNXknWQQcVoJ9mSnXe2NGmMXoRoRdfXRtRfZw2x2KsrmNNNFUbbB9bJNhpaYFzAZv258iyho5ce6on3niJhwZYd",
  "key29": "5KTcpUFdnTRiD2ikjevUCRqvzdkCAZYonw7jgt3UYekuSNJjSkmaBYu47M41uhL7PUrTucp4wV8G14sJYn26By1M",
  "key30": "39burna79Y8F8CTmypXzX8GnNa4nA9D1qaeXpdpaTxDpe3Cu7iGFJE8hGo1ipXAPbiGgFL9pE1ZL7R9Shf2YthV1",
  "key31": "4fMJQx9hNkqXPWE6i6JWGqRbV9wXTqu1KMiMcfVobryZMF6ixYqpfTUirCXhyVF5zpDiSN8Diod9jDPQeWBh4vFf",
  "key32": "5veMVbUb8EK9AEg9guvnrQLrTjE5pJeb4MKHPSAaMG4sWVe3nGKq5MiJSua3TFx3pf6Lxirr1ZvPZZ9wMooMgnT1",
  "key33": "5j8pncGELuU3oNzuuLvTuHobUgcUHjV7vY6zSwLBsaySDyUXzcCw2PFDtvtJo16rSsa8kmrdREapqPAwWDxc3244",
  "key34": "4WxyV9kdLsVhLF62VTBxgoh6n9GAGiqaxAFJkP4k9X6hotpJR51U3vT5Kx6X4BKUYKk2wwpiEUQsx8kifx3eLe54",
  "key35": "3ui3HkjoYzTB1j9wJPRZmYTZTZBMoeDRSMaURm7sxUXmDh2L6n7YzmMXTEPywsDxHDKY55qksC7ko7ZV6kRDgLhu",
  "key36": "4yD3fJsRw9MX9FMrvt4k9vGjoNd9suy9cxa7Jc6bkvyvKFa6hG4dAZ4oiWuZrBwSo4Rq9xYDyiP8YoXPwCJ419hQ",
  "key37": "2V7VQDE1LVVCxWkwsmQwc77tyDR4Te7yYzbQhFsC12GJeLFYMtmSbiSWwPVTeBNMMcq6E1y7pzuzdkesagKUKJDX",
  "key38": "3aKzVKYubDi9Zf3ntekwWgPeuKeczBg4H1FqRdeDqVezi7WtBLUk7azGmsPVLeV3Y6694sWLnJ4bcjHXydkuu7ja",
  "key39": "2AMuSbu7KW7utSg7Wr5Vtkd3wFZJTMr8kwwxk1VZ57HUBbqfFvGe5cwaCKLqGkycoKxm5XTgapKzURLVBhvtnkR9",
  "key40": "5A4fUUUB3s1uZRZTV1mKv4rN7mZtJjWFR7Gu3eJC8Jgts3hCCGmHngHn71z6cwWm9RKLS53WkTrUmH48q3bBHFMN",
  "key41": "51HNSTKBSDhJeUvYKNzVBaQgZVwNKJujTzaHouz3sYZZcfa6CtzyPozwZpjQVV2xBgcUM5skzmd8CBdDAUoLqoD4",
  "key42": "2WdbpYwqx22P7qDLFQV4xLDLGDrPdegvZJLi1vQGvWyG8QLnmFquDqgRFhToEppfskmD3jntXQqnMHoEsEgf9Qpp",
  "key43": "32AA6pMkQpD3FgiCFSXxA9KMX7HMMbTCBbhu1ja65foUZTeaXMhH8MGb7xS8Lfihx1NfFP82XV64ENje3BS3xcy4",
  "key44": "2czYqRiHTe7aa9eJjCeSYHdowK1KbHUYkVA3xHJMpWEVzcGxJGd6bRTCqDgT8LV94BL681raP2sy8UQrEebBRxyP",
  "key45": "2vsHJZSFkcwE2LtkioFx8VCAzfMio5WH2C96ufqFQFZmApYs3hYFWbJQvMV6Wp9R82bFec6TgVRXVq3ApHqLDTwt"
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
