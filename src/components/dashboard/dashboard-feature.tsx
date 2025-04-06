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
    "s8HU3mkgCJePaT4U8HVhZzBUBjghooHYC2RZuLcb4Z7jweTasZ64oE5hf7ZBoctUNgpA6HSpsfodP7ur7Y9bnj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Um2gvB4oGFFUozvRFhyC1oVh6vdcguPmtSFhvcGfuZ1ctqTHd42ABwrEaV2hBswepnYZgeYix7oR5VFsEvuHeAP",
  "key1": "2hQtv94mR1BYDjJmaMUNSsFFWwqEyvCi5GrKXX9mW8wwjHtSEsH8nrrkPDqavev87PFTSteD2bKquLCuzQeWhdrX",
  "key2": "3jUpRFsYfwcdjZeVuabRLTQcf4Bm1hEaUqGgWnSa1LJCWYWiT7AvBHnrrmf5h5sYRuhNy43rdmfwGTWQoZ9x9bbH",
  "key3": "2PrqUbHKniEaFeAPvCVQb2RMYscAJPzuAPnPywNyrkBESutFFBdyVcmLRvJ61LKBAD6xbUYjzMf7hhcYr7asVVC9",
  "key4": "2tuRS5QvzTohZQHhFB41XtwnUzWdZE7CzQQSFXuTryE49PxT2cMR2fxdWoTL1EbJMMPn1iCJYnWUuuFhMsBAAEFU",
  "key5": "6XSfz9gvaLQJYKWLYos2YBCvzRpKZHXYuRBXSY7qc93HZnDereeoXKckh8XCvwBCYhsZoKtQoPKLDkLMXSMpd12",
  "key6": "4ArJJ52SzYutgDQtxqFBm4NoRvGML7hac56NzEydA6dXpr1GpKGSh1TgYSje5c5Ud18pzvP1cbEkSzSoAfQ3NdCs",
  "key7": "FNoMZv6MqUZce9zfPAGex3JBUBKqptfcUNt2wTuYRNSDy33w1n6yqqoEg7H4a3qGY4vD3RyWhDLq1wxwqBwXMMi",
  "key8": "3B2WoWrpH8rQkPac2F4VP64VmTbU4UYNAwqiMoY44S19fxTzFbHz8hEEAN1hp2w32NiLfUazuULL3Ah8T3L7A9cx",
  "key9": "62GL8yy7WJQhEifvPEVLEenWx7Aewj2B8P4utLTCvukhNUtrW4VxN8D8MWhLDatLY72EosxFoxBStACMLMa71DSp",
  "key10": "56McqZkG5iRwhQkmDXcu7uaEAYCabovbQoN9J3Ay3ddiJ2tWErB3NnsAB6VfuLreGfYUTTuyJRqzg8XuFC5iAkRF",
  "key11": "4iHDMe4nc9nT4UWD5tYQ246EeNN6WobHSG1sUjcix6BovdEbC1i8pbK2p8L2dXJXP7GRmLX98jdyTNiL3ax2kpWz",
  "key12": "JGZ88mqKrgpZpEtdjS7Da8qf7okwejfWQjMUxWeiS7UM3bv2N189pYo2jzJMZfqMdvUbHtRmFi1tJB5BGN4G9So",
  "key13": "23w5vQnwWHdLJ8Ww7ae67iEBFfw5kMoaF5Vdivnuhsv8pzGXEQBTtXGaAdp9U47QQCjGiNR27kWFLnwtKLqMB7v1",
  "key14": "3J7firkQ89qY5frpxRU5c5FVPt2r3RNPB5w27pecGZAYXVCHasFzdJNThtJQRXqcoQnBkMzPJiKNNazjWgQXzjzV",
  "key15": "4aZqtJ5L9jdGfmZVr6XnjAAt8GjxtrUxxuzNQJpCRLKA3cTUkh5Lm7DgbGM5nSzFjP7geBPstoqwPkE5sEcuME3H",
  "key16": "rixNcVT6aikKaotGxcp76Ej6JbcFYHvnLrVNHiUypR29rQScsmtGF7M4sBdEn85dR7QHfxQY1zCLgxM9wwG9Moz",
  "key17": "Jd1Q9zTN9xcotzYzNM8nGKY8Q5ocq8wGxJQSaVHUJAzU768XyjzvSgtKD7i4Xt4BiVMXFmCAMtW4YiwNtaqP46Q",
  "key18": "398KwRaaogEQym5BwGsMSSKUv1erijubr1rK8jwHkyxT5aM62wwMa87xRFRCN6bHXJzjojmDE1q3Xzsi7P2Vyq4D",
  "key19": "3f7kssbiwCvTaDwo5UYfHDQk7gFAuyqbtxs2K6AoFkrXjJADoWgZ4VJjsP7KQ2dS4Jcei8N7dc3rS4hrNVJU7xy4",
  "key20": "3F8GdTT5gXtLuZsyBnHNsCxcpzwSBd5ESV5SQHFSqsTYCW31N4MxziAMhq4vjhykRMHNgg7vgkqxpWi2ojx3CWDU",
  "key21": "4mNYJkPBSK7J7bKoXw9h53YJxUwAK3TdyMbTR2C9vkRwzjKupXh3d4ZmgQYDrdF5sKW87vDixgU4KCYVS5kpeFxy",
  "key22": "2QoDxqA2bmFiHrs3dmsxMAoiC4Cd4ER6EyHvw7XXpCtqp7AGGWQEwMnzP5pt7xuUcaNwd9EKNAWSHz8DQ9U4u2Ee",
  "key23": "Kz71ZF6VFPVxJ2a7VieUMNpS1Z1VJT1dC56Vhe7BHSxTm49XcLNWVKNVniPDazTuQhvAoTLjeokRH2EXkjE8e7B",
  "key24": "3Dgw5B4E8qq4niArVM5CmKXBigqW37DH1fFKf6RKDW2sBUzbnjC3jZDTRfowjmFUJ7DWYNqGb7Nd75oBGx5N35jy",
  "key25": "2WNCHb4kLD8syk5Dwi7tqMXWtMaZcbVpxN5bP7yBPn7yVXdrhf9kdQPjpKn66G86dPCYkRVucoz3dJK46cW4CRCi",
  "key26": "y8KD1fX5znL5kvsh592Wzn5VeAco9ZbbeHd8P4SFJgdAJoou2rNjdbWkRed2SKAuvLn9fyYVYTNQyeVQwe4ovnw"
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
