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
    "59Z9HbG785tjADaxtyjeHKbjzVNYatCX4uJ96XUJcJSGntAJkbRAbxD9jpe2bEjDSyNMtL5C7XKMsymjGa4Pyv3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3don8wFXWnKDKKAUTWHwxne1UNwAeJDaD7Yj62hxyy3678yA3C5wCey9kdcb8B4VCMzUCPbAZkTkFwYFUAu3NVoe",
  "key1": "2Bj7rThRWWfALciMBf3GrJSCcAibP1xaJrb1UmKziZRqSpzrq1VxCyYSCquvDczqJb3vtmR3kKNCtiBY4yvDcewK",
  "key2": "2Tiut71WXLcvxxcS7KCeVFCyx5tPUyyRC2VUELTNedjT8XNhVrzwbwNM7gFhGR5UyeBNd8yi6zatip6XkKAo1pos",
  "key3": "3jek13m4nsxHQLKVa8cPjUtSXKjPRAyQjcakgYWuMyLJPxLyD6q7RnvVFX1AhF3XxDwESYJVwCNNu57fZm7YMLQ9",
  "key4": "38JLVWpbiBEhySDMNhDVHmZfnPaWnusWFgpLRWgTS2bARZcVMEEmNa5zCYGMxEDksza9xFXTAML9BSX9xsBBe4Bj",
  "key5": "4AzDDno4bLJARi33nPZrBLr6GRiaxbYUxZyrxscTMumkuqBwfvRYMxZGc1bMJBmo2ws1VbiN3JKcbLPXd42DvHG2",
  "key6": "4sNmZMMSsfoQEHTkijFLbuYXetdDwdcPbANUWc3cbK4gXhZvK8HivtfYbSeGcEnF953QdTrYvY6nZ6bJ7bzrvviT",
  "key7": "4yeHEnHzG1egFNbPGSd6FWFUMeprr3SUSrP3Yxyd1gNCKAhTcbeAVrEsm451JZPG1tUmfU4j5mCTc9k5FKr2xGrL",
  "key8": "4e9543tzU1CmtPzffvefWx1nHkyGTs5Umxn8zbYFyKYBZdNf3RzkyuoX2qVcyHafyWDpkkvpVuJ9nMKsxZnFGR2A",
  "key9": "3cXkfqLKT3WTaviKskLo92kvjWdeoY2nuXBGawr7h8e33XQas38yMRJc3aZWdgrjLVpg2hehEXyko8NQwrUu54Lr",
  "key10": "DVmnTMnYwLoZpFNjAYaqJFZwFwGxNnVYsy53x4wPWbpJMUeEGf8NZvGiCYFeonM1dZ6mcdGtJgmBAsWGi62qRMX",
  "key11": "21ytXHrKiyR5GUASC2CctEiucJRyKLV9vsqxXvUbahgemwaCnMy3EuUn7P3AtWBCpjGG7i13ye44UBTPKSg3zVK6",
  "key12": "5uWBFqGpVPUaZ197gyBsmRikrmf92xrvecPp6TqEqPZ4c8hFZLQAyaFVyxLwx9edjy2V8PEjAJMtiAaJoX61HgCR",
  "key13": "rV5aYjGUXesC3A2tLEVtu2uVitMxvSvwweTJ5YFMoy5yuccx1b6H1sj2bcJedzUaDXVQgVjy6eecxDcBSPLZokc",
  "key14": "2bY5N6HPmstgNNVnSfR5FLUWgKwqTJrXtrePSwiCGP6oJzBfRFUgXALdeG5KRs1EyfgY2qub9TpyeVszZTLefRhX",
  "key15": "4oL3SvEywDX4pmKHesMvWFoMFKUkQ4JAYgcrioafu1wa28BcSWWxLYRVPyZhR1aYRKp2j9EjZV3YLKkZSX3R6JPM",
  "key16": "2diTmrLNET9j8yp7GXBLY5pk85UfnX5FEfBqLxLrikCQCVWoQDSnAX1T7uxrihUVMx57oktxRSUUX1S3Ate8XEKi",
  "key17": "3JgwUwS3ShhC9BKCBt5Zr2SPPeX2GTfv6cQHmRmgBmfx2AXbTFnLTy4wPMFignNEXpUFqphwS92hAK1PeK4gwwk5",
  "key18": "4fPq9NKEVUBLk2cNVRpnGSyowVdP2qRFpUMNgpVgswULKh6ScbpDWdvhEcYuQSZfpKs6mG8nindAUcHa2Wztf6A",
  "key19": "2k1sS842vPh55LeccTgxSB4p1xXDEEoVp16J5ps5pmxe48UQJKq23nBLU3FuQNmugn1bRiJxVfvLbmbcJdoNvgLf",
  "key20": "2ccH1yGWk65iTRdPCqwYtf1mzD99mvfoEn2Tc1D7qHMdCFLdFvqjrRJmvQFBRHdhUpQz1vrQezVPEDQMzyzo8Uzh",
  "key21": "3Yh2JpK683cPW4kcnTxwosoyMQzVvSkybXkoMvvZJyzpGYVpheazmzGq6bQP1Fem1mahF3XDSZs17kqmTmn7PbkP",
  "key22": "2jEsHrvpBfShUZ14E5HwsXsX93pwh1vmkgPy1H25UMGj3B44AKq1JrNdkvnodC3WYwYGXRAafCSQWu4RfGXAiv2r",
  "key23": "ioNufdddn5xWLAhqbNjkWuvr2qtW1bPw5DGMSEfc9NuQniX675ZXMnYaAz81ZgLHfp9yCJt3SHG3RoWEXkJNDrK",
  "key24": "3GhE32hCq4HdagxPEY3z2NPfKR67bfwbb3iVeUD1Vbm67b5ZzcE59FWA8y4vW4uXdLRKdWyT8h42HeGqwcGnzk7r",
  "key25": "bWGJEFhZ2jHeGRL8EZ3rQQ42L8DMAxNbXYMPUrwNq4HjF2tVhiAoiLaKWamNguVxfnh5AYCMKLMd8iBp6QjAfod",
  "key26": "1zKo6VCxZqLVHLBR8zszKVSHB2S9Kiwb4FPMSmEKBAvQ5iR18kW5UxX3g2aRxWczpmEkfMWLaHEZPbN6KQWpc1y",
  "key27": "LFANZzDX7ZPqF37yiAFzHN8BQoDJQtuwwXbN8jy2vFL2cBuGmCe1C6k4JFc7ZVTDPTwa3G3uFHzjABQKYr8aXM7",
  "key28": "5p6rtgFyyhoC1t8foxetDxdsUG6yCX3eiXCBnZvxzPGdJQ2jRNa4Kvm9YKuTRX3Lt1kPSpNr511Y6ySQ7CrRXRTR",
  "key29": "5eaHweD92a1n3nio6yTPVN26xczkmZwjEjD21Hrznh2Wu8jLbDzHnRqCP6dGgk47C9pLMDwnjA4vgckv1cYFYvSt",
  "key30": "3exwPkQpoTsER8t3JihCW5zJfA72y2ucSYJt9xYden6KbtoTx8p85NksrEoioqEYA5VxP7imAfwb6pA5BxsJzukn",
  "key31": "3MKy6CmaMnsQmMq4khYDXaJtTKRFjLbkaJD9KWPcYBEuMraLY51LUUQSYazgnQxGVdBgP8V3FBqDCpwCyoAYTHHi",
  "key32": "5zdZqsM4YTWm6ngLX8u2oacYvPLqniHcwY84ATdbVTXWRCerURkXq2fdV81AfjFXciaCFDgDAKwLbsw9gMhfY9FF",
  "key33": "Mbjp37EJEp2rSxaph8xxHRSHSguFPpGDB6GxjSJwmoNjiBugnxFSgEDEL2bdHucVBJQLyr9EcHYJykELMDf1qGm"
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
