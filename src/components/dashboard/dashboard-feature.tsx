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
    "2xu72cCdfrUd1kRtqH5Dkdg9WcgzAkC98zrQmyt46UmyweHkVUNu8vYhXj8oqHzeFWQRSFZWD2J6qWDnVnaKwm9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQmPWVcVRdGpBijQkrBdZLKviRrUfXKboPtDKNwBviFFDtqk2zVYuR36nuxYf9NZycSaVqEhfawKMGJ2iLQKUgM",
  "key1": "33GegZKaEY3TGb5zBh6n1FhpC4VGbQdtRHrSYBZKWVwVerQc3UokK2YHLLEHv3auvVPSAcd7WjQTZqkPiqL1TGdf",
  "key2": "5juZyUiE5iHiQBXge4Uh6CyUg7kJ1bKfSEQjq9hM1P68cPQooAYDnCoa7vzkWgJmJD4dbRuWrCGRxrEJZFmtfWri",
  "key3": "23KyRhHumCEDAeWrLRPmnsZMY1pYDxtQp8TaSBLArpvhRCkW8UdXYBkS9HuP1TMpotGXhE1BA64MmSFLRgTTnP82",
  "key4": "2cHWSJxVAsVkPauNN92YuvEkbb5KzgorP3kSFsCYN68ppAw2LQjo6mrwDZMvP4nU7dWspmEEuRzwa3x6pJmZHm3J",
  "key5": "4QBNgX2GFC8Fb9Wc473vbf1GkNvjLoJrNh7Mo6rgyvmZhaTtSuNLMBKTwFnLU6e7G41qedSMASDxg2KXaSpi3785",
  "key6": "2ihqPGomHUJzoBXwnxQuGnWbbiGpiPjipgJzSh7bUNbAhLkYY9WEd27gvBhsfonnpx6HjPDuHRYpeBAvFPpkbQow",
  "key7": "3igaECvS65VoSpxfNGTkX5bexBwjUx5DJhVSzAp3ygJEaqsvmwPbqcFWRuMQw4dQ67szb76RKCYBX9nWpfjxiAps",
  "key8": "CJE7wtPUyUjATaJVm8teoYUraNXrRddwHnWRwMoRT7fvK4Es4MabWdeZ1rX2N5dGKg9TvxgvKoeLSAJZdFR2BCh",
  "key9": "5EQ2UUwHBAAWie8YNgCsJst8TEWbzShYacJg4x2vJ8bX5jERVtSPhWbxx47r4oYHq1EXdoaF35E7KQi7rw7KJumD",
  "key10": "4awk6vZZJmQjmpfkG3uFKqpT8QxLzV3UivFdzHruf8NLUYmdbiXh35C9ndGsK1rsRTuJpxGHbkucbR3dh7gxejHE",
  "key11": "39FwXqTZqqGuC8M95FfrrQH9utFEyfhV1m8329WA4CjazJHqcyYGvkpUxnuKfvSce7dxn8T6Vm5upXfRrz2ZLbZs",
  "key12": "5fUSkZEeaYtqv2Qi9y7GYeqDEwiMzn1BpPSXEXY7MBPLPasaoKCNP9BEunuqEFCgZDQ4QQ286hNfi5Vw6yahpAau",
  "key13": "5utGSqcuzqXNYgnoEr51DrT7ggz3UXcSW7G88eoMSfkcy1YdpJY3Hvir1AxJMb2Ku93KFwHbSBzm1UZrqdcFmrro",
  "key14": "3CsGDgskFoqdn7YmXH8nZprw9kL1ML7bKMRJntUTqC8hWLrpgMKn4g1jhAXAz5YqWdngsfKyYBkEftPnB78Jvx5d",
  "key15": "3VqzjH6mNogHP3Qxbica7xZvLsuqBtpCCkYWK61bXrbYB1XfKmmUtLEcEM1V4hrESMPW79ot62mhXXrw8hLeZ3AP",
  "key16": "3E7dvNxmWuyrqBn3ofDRkpgFRLDTnWNQuCYmp7AAMmetsURvsKQCLFc9byipZXFWNZisV1kzXL4XTpsUkGcrXmok",
  "key17": "3m9vSaJRvjXtQapWtJ9MWkRHV37KpcMQZiU2rJ9TWkWLpXABKKZAYrBv2jC9rkQRpHqZZhr3YV3ZUZhwZ5fYC4Ru",
  "key18": "51pqDK5qAx3Gu4mxzM2fU4g7Lvave4obP3CA11snRLbc2yqNmBuCTy74RaM8PwRbVmMkrfpLN9bjnKngYMSNy4qw",
  "key19": "41Pzg8vVv4VDaCy9FBU1hPacDP5k3HwTgqnLFFwUReMzMuaTWn1ueSK9LxJe4p2N7ak1bBSABTZbxXQhm9v4Dzbh",
  "key20": "3RrjPxRNNdpynqe2XdSe8gzUvSuccYxkbYqaztCag86rm5sw1SPs94BRj1eov7WYXA5ieXTCVvBdHoEerhVrfqjD",
  "key21": "5WKmH86agWFxTuzpYFbnBzoHoP7vYGsb5A2qRm9A6Ga8zEmQU6SJgg8F3Mho4GsVCPXqEyDAbcESFKCVtSjZc9Pk",
  "key22": "3oYzEnRpg1zCKPKR9x7X8ng8sD3Ag2mF682uurgh8rXxz3Y5rApAqHT8JKMFG7DM1mijkhynoqDyE9jPEbgsW5iJ",
  "key23": "3xMhxexYwuECiYpR7PwWXTm7V4F1somSre6N45DS2KnWFWLGSvjJAouEjVGb9maLKfBnbwuRhbcANCtmYVNAqEXE",
  "key24": "32HQ5hNiRkPnQsrXBr7iQPsVRg8hesdu3q3rnPmvejmWgCu8KHQDFHkcFrw4CnZg4GcHvZ9zED35VSP84J72pKvQ",
  "key25": "2wiaL4x4DsnLKHVfrucc3LtbGsuh395MM6Kid2yE4dpnPc7BqK1XGCqmwSkZY63zCj56FvrKFtwJvpA1oHXsbSpw",
  "key26": "2zMNP6C7sst3uSaQyJRtSEpCz9UcotCH3JgGNEhmyKQzG8ASTmViPuHJqsWHo47LJ1A8MitwLL93jK5ikpXTRHYj",
  "key27": "3F73fP9CDTQogd7h5sXN1fYWg87YcZ3CPCxybvEWGiYtDwUKe9ej4FjpPE5z8DxVXwdHWFBidXo1EABTMPPDjeKh",
  "key28": "evSZTutk3Jx42PCwqVxg7vtvDe5MxfbMDesfj44SsGNVyJvpDZh1Ld5DyFzrr9kPPhjhCqdd5DMPz9KDcskDJZx",
  "key29": "A4pFC9BvoMau4PexJRRSBEgj3V7R9QjbFH2u8vbaP6jqkTDVtdnmGpJ6KuCotfYewgeo5PopA6Hx7NrkWD3LqQu"
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
