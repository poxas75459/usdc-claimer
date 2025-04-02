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
    "WuGs55RQFRQFgnDU5bM71rTea9gpjgkqnjEMgyirn6t69EvE7rRtrNxru7sEYNoackrn1fKGBLKjiaj9fizeaKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owpUPJ6YNeNNi5qGTQkc5x6LMNbjiqQt4pSHSFx9ATMqzvm6TfaKnv3UzcpJvrtGsu2h5GF7FQsRjNkKTFFidQ2",
  "key1": "3uLTrSKF64hCCKtvEwNbXjmVeujBkJhfBDJDuS7Wq97rG54iu1HGQWPxNEcveG44RLEFwRfhuiyufa5s4XNiaw53",
  "key2": "5YTactS6fktLuLUDYjwzat5c3JdRUi3CSi55GdKkvZMUakdWMEJZoTjAvWUVLQCsFxtZmE8kfrJpg8ZMCqqYVj2Y",
  "key3": "4qQZSpsBhPWt2j9xZVFDbKntu46KxXgVPxxu9jQWHVykm5XmnCGHBYDrKKUAerzeCiuxk296uMDhgYPF6n9HJy2b",
  "key4": "iTicCRM7KHBpPQnjPyPMTYJ1S41gUJAQ2iu78qZwpHx2kYTWZv4Vm1Bpi53wMPMmH7zz8XzKAV19FfCFW7bB7T4",
  "key5": "5X6kiBoPY3uCHTm5vRVV3d8kGnTmSf3xWbixenrtMkeRoGfDQJLoFc9jDTfEoz9QF6SVTd75LeZSfodk3iZqmrNd",
  "key6": "3u6SVyukt5Ts1r12U2FPBpPzK7KDvDDbsBu4Pb2CUD9TLQ5N8ZCpKZb6uSA2HRfwyVaTup6YXTR7QVJVoqpsqfe6",
  "key7": "Cf1C8FWgroQB5HSNYr3KF5wS9h9vuYvU5CAMv3BaP1AREvGgvhob9Ju9wtXJqHZwwuUpCGn6z45bwr1Qtzxjjr4",
  "key8": "W6HyAwfnphp617zb1DhQbZphoo7jeGYH5tjkYcvUxWZao2bcy98eduqkppEpt2mcjkXXL97Sc96xLe1GR5aBjVG",
  "key9": "3dB19qnj43V9Mw7bVvkJxvvhDaSWN7JzSYNc2XsHirXbP6UFkwDVVtKntRztyXqQFA1TpW4Hv8S3W1TyDApmTwSU",
  "key10": "5ucPmwt4HeBzzXgJEksnHXwjB7vXpy1aJ3u3sBH3i3dxDSzTxesGDcin8D4pGJsRv7qkmn7L1wxfVhtWra6R1AJe",
  "key11": "vQG7P4PY9Ciq8GEjNC5e3wLAXmhiwzjAgnxFRT2REyCuwDH14GtdSR7E4XS42CRDQQ5GA3mVK5H88Lan155PuPz",
  "key12": "4dh6G9BfH9d6SLAHPfwBfXCidF6UCYbKjgth2LBuCAUWHj9b7KAKiSWvHzm8YKPdugk3uvgqTzEm73j64mQEQwD2",
  "key13": "3BRWf1f56vjAoiULMPezCT564pJVTkJJReUe35iGq1hfuaZ5ZxyJakB2Ypf46YffXsZtMxf7U47Hw2RXDVEjcTti",
  "key14": "2LNk3a6mPGHD6ntZWG8fWUq7PhqyUAUmqz4UGrfDENnAwRcNNrmnKduyNmGsFjhArWMTWaSeVzzb3A5YE5YpRqMa",
  "key15": "SQUF5NDgwBrdBXRrk63KwCqu18snbeS3ZaZ8qbGsrwW6c74bjd9PHFVincGehf6G14Wj2T5g52xvrm6RXErcotw",
  "key16": "3LfvpmVtac97uea1EoViPYKaAQp1bh3QC9HFhJ4t3h5U9D7T5dAwKzVywYyqmr8gFQVBCYjgnVpKD9aSRWjH8fXP",
  "key17": "2wfQG6FCxMzZkjPRuiP5TgmUUeGWeqPRTuBAEcsBgURUopnw39dNjac32kN6B9nN5Q6jfB59AqPEBccVhwgrq1yh",
  "key18": "51WwsqR9Ph77QbHk69PuBDPfKDLXXWNPt48iXBwBmGyM7gkVZSCYDNnRda9VEAUEjjFn5UM5dLqi9heG5tu6FnHp",
  "key19": "62ttaK5gz7BmXDLcV4Wzgn4c8AQapVnbPNjcrjfgLa3gfYA8DnpZoSKwbyeB2gTtbMKgwS4kdGYbiyS2CQKg1Hva",
  "key20": "ePy4gQRD31wZZ8uPAxya6TbdyXFVSM6LGjBuFLmJmEKHMuhpghKVC9a3r2uLAgirYRLEghZH6MuaMBng794v4m7",
  "key21": "58oNMRVhXXSt4noeEaKLDaN5esRMG26HRtggWFm45Dg8WNnuMfr5QXnjnXy3BTDFSiLe2UdNyqSqpxsZ7kShpKRR",
  "key22": "3ZXi74PNTNBZBKQk6AiJE2EMwz1sFCnSpTNbd1kqmbN13C6mdBdx3GpFTNX8HHPD9TvmjNuKXRgbkbZdTFENeH4a",
  "key23": "3SwZ6MhEtfm21RRxJShakxPA27Ch71G1p7gRCDnqdTnEvS15pLe8kZ6Dwa3Uf5ge8Fby9vP3WYHLmn5ExLYo3k4K",
  "key24": "26e7ZKyzMhrfEiwV5dkcY138kT9VhGmW8u1P3SCrnQjJmSVNQjQmB2URbaxyvJb5SG6fwcYna16g1gyS6Zuh6XKk"
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
