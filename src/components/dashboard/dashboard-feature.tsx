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
    "4ER5vmerjWqNvWCAxmc8YifP5Zt4hkFa848Z5c5SwbG9q2RgZQzzqTCBFCRx3sFB6EPTwVG4JxTXEG6u4SB9k2Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtKm55G6KfBnnW27eaRZz7X2UePRGRtpvnoDcgQba2zkQJedQaZahLeSFybAPSb4HFr3F8VExwsWXxeKVvAnH4G",
  "key1": "2crnuCNPf8m6gKH5STtp8gPVurzw7GeVJS5UvQWm3bexfnzNzdrbxDEGFXnSrwkR3Pm11jS44Sc1dYPaSyB5AskF",
  "key2": "5YRT26t1VkcPfJxVFkGj7BTBmMU7uXBuSg2GonFJFayYCGgDeMbhJJdQyWpE7TquLec77WfySpQyDnVmH2q14DXP",
  "key3": "3oYVMotcy4f7RSDzdK6apoUTyGQ9NFrtNt6CdW3k1432tLokw2tYuJ4oUsBWnPHBdPvDnfPAv7E5SDYatPXd53Pb",
  "key4": "53Z46josB3zzHrQGkxztbT7hws7uYqm98yjWBB2nbqw1CKbi8Qty1zSSrXcwLbC4BEWzZb5NrHSRJHyQmF8zyWJ7",
  "key5": "4TJx16W7W574HuFBFVPDukTfJTB4hVBkDoPFtGRua9a7Y362YoSfcyyFEsXiPqdp7VZstomQ1XP8sboepEj7ip3U",
  "key6": "4QHcdVjiL2hArS6FzzevNP2H66SbHxyFX5dS74ZCG37qXtwLe8Qi7BAxmLmxWn7JyQbMcviDeAZQTKN9swUsxB1g",
  "key7": "4WcNLooSinp1DakRu8HJyVGvDDFeKTa7j2v45ThGecZDzUUYikKdYK9Gz3PciR5ztKCG5EiRsG5PjW2XTwcxzLAJ",
  "key8": "5qiftQQwk69M31Z5ueqyyS78UyDSHSbBiVmZdm1ckvBBgBwWLhouC2uC3hcAAAWip4qss4FFTingsEbB2h3TyVe1",
  "key9": "2fSYAA6PQzM1xadxfXBX6arLmin9gq1xG93nGBnYcXFpb1d3SdPC1YHWhqrZTFyEQiMJqtMvgg8y7b6RT33Tx3ph",
  "key10": "4xtneCXdFbxjfpS1RDTPvahLtuerwN1va1vdHW9A2hhLmwhtHEGWd8BUc1X85m76J6SwV5bJXs4qjNS5p5649J7S",
  "key11": "38JUaz2BEFyXSyCvEeP84vneXbPpC7Rok45Yvmgh25hMvuwLiDnGGm5rMnseUsByxnVF7WJXMqymz5td2V9amVP3",
  "key12": "5iLwEKor7rKMdqygpJB8R4jG6p8EmRd3m8zitvrci2bprUwtAGVJHFBRYnuDenJgsBYTG5ohmCGsy5eYT4Wdd7DQ",
  "key13": "C4FMJ51TWNmSqJkSF16SVR5TthPRgo2juNSWMUBkBpqsHvcVjuT5Zgu5PBAuacgcfqSSobnBuQQ2mXdLmZPMNpc",
  "key14": "52kAXT9wi7MtuoG5jc35D6pGdbBpA7dha3VEhGeio3AVkpKz96f4RqjbovnjsUhe2A4uPficb3C7hSUjuSbKieoS",
  "key15": "4zZqE31N5ZAxcnfyqdTWhtMihYRRvdorE8JGzUS39p88YcJ6AQejJrUGoxC2fTasZkkpKH9ZYNZwQcZiupbFbJYd",
  "key16": "4k5PhNokMBVmVwQdzFU3kHE4rQQZWJWB2qoZrRYTZxVFpdcGRtosAePKvGC1rcTLvYZN8EPzx5nVqPuJHeatJtjB",
  "key17": "2f4bB7im8XNppGH3xFuj2Gio8ypJfTDh6dzYHEfjwtcRMFpiFoHaANhftAUoGKzuZw2JvRekRWmwsBs12kyZP1sV",
  "key18": "57rmTtoAXYFSRJ6rzKgDAw8rV7vVnphJ9kjV1B2sv799mNF5Yy3kFMzczSyigUyAkkQt3cLY1NTP2qBVgpHdw8Z2",
  "key19": "4iBdvhkaeDSur2KfV8hX6mnGzJjoxwAcpHxwM81ApwFU7eUpZwXLoMwjBEbbuyX7d7ZovJBwhLUT77rPxpcmy7mx",
  "key20": "5UehqabydhnrhXjQjGvWRqwhxC8fB3F5KUiTmRgRHm1vY5DABCpjAv7pnpH6kuhvLKWZSCm9hTcCErFrbzHXJx5u",
  "key21": "3ep67rJ8Zai4Y9Px26qxB5AVzfBTmWeUSHcqm1KxzppMYigNvjR2dRxjpm4Ssyv1cKrXWrwdyDsDfrUsJCyrj2LW",
  "key22": "39574ReKWUV9uuZPVEnMMdQoTmBzug8uVtjJdVqwwAh6HqskvU3knnN9yse2pLm7rZovgHy2tVcD8ZfUEXVgwW22",
  "key23": "2CRqzpi8HofrvD2LmXAAXxf1E1MnLn2yF3U9uXePZ8qCkac5rU2t1GDEr3SLkwhXe1NkZeJdS2asZb9uwbcFX3JP",
  "key24": "62EtdAo1jPGgduWppoyL9m1wWLm1SumwbYZpHx8a3ZZQ523Uzs1Tbo33umjBQFBzokzHMCtVJt1VzzivrskNMSQa",
  "key25": "2f1ZzRxUEDdKwbLQ2SB9gz4KsG7mKJFbai4g66RnzHK87T11C2M7iRX9rwGomxzAC3szi6Vy6n9W1gJ5M9gAmoDu",
  "key26": "66h4LXyjsLrQSMXerBWkhpQToz1bv9CaRgiyFFrbjhMMu4FgGDnj82CMGKmHpXYxnLvDYmVsfPLQc9TbgRVg1vy6",
  "key27": "WLiANosxsWSpbx3LidcsbgPf6TF8iQUWYzreTYMmgybb1oUiUJppLRXqAwMNJisTjdqYHbWjomGodvrEaqhxUUE",
  "key28": "27mxCmiGX7P4JoG8Ers7aTJX2D1KCsLTHLPGA9gJt6NPmyHKQVeYziVeVi6bXrccnGtFUBgii2j86E1iXtmPMzg4",
  "key29": "65cWKYZP9bKRSYrLeegHcqMoUdtU2WnYtAJH5TXm1Tdt7KQZcad9FJhfPqK87uCgqtbtmCaU1EkRy2S4mcNJeD15",
  "key30": "2gEzKbLwioDWhBsMx3NjBKrD7pTZLAY6LZwEBs9TC8P525ysrximeYe4NpZYHGv9oGkAhFxBxifHAD1uuseFnbK2"
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
