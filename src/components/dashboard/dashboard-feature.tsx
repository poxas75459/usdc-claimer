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
    "22Dg8rQrCSbLQGLwbrSuhJwtsiduPZeDd8HCZEzh5vJVjsCfJ45tLUMQT8SL5Pk8cymugvykpuGwrWJd5aNXCvue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vV4JTaKyjMyRYD7UrkbeSRzCzPgSp9UbZ6jCKFHJFjuZ3d9m53s6YD3iq7JUJggTszGB9jZJazwhP412Qa1wCU7",
  "key1": "3ox7vjeuB4edG8n9bcf5aLhNMoXYhEqVqfhsCDcLbiveN8ychWGZZXSsroUTxjAPm2ivCGL3gESDkDP18cwjX3JP",
  "key2": "5bBgqnimUHuMNieHArYZytjupyj6eE5qJnppH6mVvr68BQStHF1GX3DxSMwoQvKWfKqgFfDepKzUtKNGerVnMwc7",
  "key3": "5NguFUo9wQZv2RppZYT3vc1Vmk2yRq5r2gQ6FRZfTWvjuwZrPXaG4dHYBUJQqPtAN8osebhqu1MQHabP4qKwQebo",
  "key4": "2uw6MF8qpiBzT5nrrdBkZEtVdan3wP21S54yrHkfWhhd1skWEhdfNgiU84k5CDhwkgDozFfJcASMAy2kWAw9cB8C",
  "key5": "5g8GF4KVSsXKhq1nEGjUFDq2mCkmCqbRDaeJkguFWab2MbKjfSo9UeWLEmcAZFPV53VwgQadkJB5iXagrPe2L4D5",
  "key6": "2gjEt96uKvL1pXw2L7L3t4zVgFqxq6ensHCBvGZu4X7gStYUjBkVkV4xwVbjG3HvTYoZKEB4C7Nd4hV9L2azF8Bt",
  "key7": "2rWZKuPL3me8wqdmaU9h8PqDrMYXMmgdyYyuZV2QJ7xe9wU9iJNj5sdcQaT9KSiEnXSxi8H9qY53aXdn8AHF3EUv",
  "key8": "2LCeXrwVvq4rhq471Cx1b54oJYnZBsueC8rDLkvtAYyekERBQkHrefjdZdiymHikAM2UmMEcpAvm7wHRNUKfWGag",
  "key9": "5e34SuigKz36Qn3pCeztLdUBWV2aTxL8Cjow5GjcsGDXTvvHXHRZvhR3uQDLJxWRDUz4bDJ5iX49F513ZXkXbMAc",
  "key10": "2ELFw29yPdF4KHNKogC6yDPufK9ZtrnzFai6vsx1TQ6oGDGE48CTEYq7cpWcFne3VcAJmBmj6wYJ5Fb2Q27jwQJt",
  "key11": "3VNfvrDpLLCq2KG7TFztf4ANXrgRyDDwjG1eXkxqFwDurHSruV9F1iuM45naKfxz2BRyPJ4pum7ui4mUxz2xmJGq",
  "key12": "2yeZ2FVkTimBUoqUBhFJehgPjkHqmhYQRsUFfeiMMvSQE5uHxZdmxDYPj8sWPiyHyPZWkU61NZT1G8zxjL16dibS",
  "key13": "9FLty29uKFJ3GdGTbphLV3PRnNRWev1oW1Gbz7q6ZsuRdENHbAnnigpFQcfLHdBaTjja1tut54HqhsptDsYFL9J",
  "key14": "2E2BhXp2cZ2YdM7etnSvw14mmqMDXksd73YkyawCeWDDDHCmbmPPTMYVP3UYzMTPc9LqVFh39V2ruDJfwhgk4tQr",
  "key15": "5jJesJxT3vm22J4iBpJAosfcraLyWubDvqmLPscV2BgeEwFoJ7wWnFM6UqVGmUwLWPSQA22nVyL1wqdSRyoGisyY",
  "key16": "zXXgqifMifnxGsYTLehrTbn9hsNJzqZpAcckw2s9tWnQAyfYWMnZ3PgiXrnURyt45rggPHM6b6p4XaqoJV2syRW",
  "key17": "fRqQEoTcdfezBy8gn1PULiciNbbWDpcB5n84XD3fZcGSSgHAwkPXpTRB6DdowKUUQFYEweg7NFhRg5WkTZiQ9jK",
  "key18": "odsX4pPiCQVhvgSZXhMrQxQFVeWiRuRCw2WRSDCwWyNUPBHAEtvWi4Pf5GQbF6okPkt3AeSouVr5VFVfa1uXojb",
  "key19": "5MhLaW1Y3pGnuWEtsqjUYngSxbh2u9DjNSYGd2ufMxmMZiqG5KK1ArtQMQXv7z5z7Gus4qRgL9HKUAcKiyVPJ1gn",
  "key20": "36jpGZ36WLMc77ewRHBjmZidkMJN1iySSx2ifzuPnoG7ykMMtoRsQ1zBbGPj3Dpk6K3QchYQZime18xtZbTp1sHe",
  "key21": "5taFbpFSHQjgqac78jw37tHPBLk1VbGfVNS13DcXcTWsXKRuswhD67fKvWsdMU82Xo3UhPXpLAbg4VKNpKUHKbPf",
  "key22": "SC2HW3vEEGsQszyp3FSLbL2UdtzpWsrk4wQvVsZ6Vs8FjQ4XFvFgyAHpXYNU2F7R2cndMcrpE6HTj7wRmGCPsvs",
  "key23": "2v3PTrZbMXyMVhwkTUsr7715x2BQCXGHAPfLfmEdwSyDbgG3gxKiPt29a3Er5TFwKwtbJBnEzRZUAAcmhwyUswTD",
  "key24": "3CRKDTm7MruZWyU4oGKDwkK5e1DkfooYPYHCDC1oiUjphHsuSbdCeHNw1QkMCKXn2deKy9Gv5anXcmVCv2vu1S8",
  "key25": "2dtQ9TqS3uhVsXTxjhmPqtkGW2NbU6zTR2f97gtms5EMhUzye2jKFpggK1BGdcddrW1uUfNHjRXqQwrvWNoZmqQU"
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
