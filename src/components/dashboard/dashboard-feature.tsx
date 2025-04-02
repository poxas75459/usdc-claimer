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
    "3QX6Ccb5iUgSkvMCJd67PX68vPzXMfYnLhrtwmEinxR2sve6X1EgHULbjMHv8QfraVy1NKPQfbQasuWxySc7f5g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37aX1SeuJj3s9HidemsT9ahW1BfQJw19HYrGVW6qDcv5TghiE7oAkynWtm8XAHrKFoHfx5oJ49n39pTubwhMYWdy",
  "key1": "2jm1VtiBQQwF1Zkrwv3SCZNV4dLTerxyQXnac5ftB4G4bbysaFh9hdTcHoa87Y4c2UHAJiRwkCuBkvSftVzVxv9X",
  "key2": "2cNtLgYyA7CyTPJbf5W3iENzcDespECfEwuoFo8QD5tB1xgC6BNA2ctQRdKJpgh31F4xtmNjNCudGdbvsCvFrZZi",
  "key3": "21PXdzcLqQV9GzVK8UBdaspgzFYgM5hJxojQXAuhKjdPd3Y8UhzeBSbbb3z5yM8CLo4XWTX5vYghBxGtcfm7Dw1j",
  "key4": "2wdWemzPkWsH8LmQbVJ88tSGfy6pzsVMPuzpiUpfmtf2dsuYZoHxSLgfvcBfMnn7AmX6cJeyhoimrNShPrbVrnFS",
  "key5": "4AKmrkV65e4fd3kna4TAYKoDzuNRszmfxJPCyAip7YmUi6jDXu2JBGnBcgZcY74RdNtyLKY2Xmdbo1C2aKoGnL9f",
  "key6": "3nXS5YjwsJKty8jyEQFrd2VixtnXU4hnMByyKMrhUVeiNHCi28RhZWS3EtSxgygHsyDBtPUz4sqXYEbePWGUK513",
  "key7": "4RMwxad8tFo3fceJTUXzrSR4WR4ZqgcyfR6MbrQxweeA6MDGPpDrK3rgX7TnPuo7kzsAo2a2M1EDso7PQ4nMScxS",
  "key8": "4t8KkaQCzzu1kocn4ah9n88hKVXUavtVdK7pRM6oKWDpm56LjTC7JyoAYmTx341T8HXhnS8hZEu9KydEEddMq9id",
  "key9": "y4oSa3fWK4uvvBPtUsroCoKeSCBcn5HqjRQTixna9nc5kDGQU6LSwTV9v3KaBgx8tivCweBD4X45ipan9sxBQix",
  "key10": "GCFiW1Po4bfWch8sWCHoGk4eU9uEumuUh555JFk1zCy9DhBURe4FxqAfUuQXDxvWcbcFP9XrpmgjqvWE2HJuRHC",
  "key11": "2VM2tzmfm2KfPqoP67sb2kuJeqEir5pWxP3ee6X8Je7krnpmMUo8VETAw8g4U7RfYrz7P6rLvk6c26TA1wZL5k38",
  "key12": "4qUSjs4G1314ykrk1EyHLp4dVxGaGaCU6eWT63SnxJss8yD4gYsvyLVrRaCM3w4WwKn3m9zUz95J12DbYUewkPPk",
  "key13": "261fXvvkWaJe4qGRHAMqP75GjY9RXMt6m3wYC3vzVpRiEpayPZ2BDA86UG1c61FX3yPUg4w8hLXKykkCoJW4nKzc",
  "key14": "3PsTjooKhRhhp9jttbNnqguPRisF9Q8xD8fyxcUsLu7urNxiyWEfHbsoLEYSrX9DWRJHp9fgUTLR78GgAJaVJtHF",
  "key15": "2hBiz9X226agdggsquH8d7YuVk4HhqmzyGG5soL73VLrQ1CHexQnfCb4waHcTAiFkKdVEV8KYCgKqetyW1AGYJ6f",
  "key16": "y6HKTLosS9BnFsqLR9s2YXAoQaKG5hdwM3gkiagCt2R2a3cDwzqMzSkyXhdUp62s6rZ6AnvbrkyVyr1Bcb5xeKT",
  "key17": "q7hM6CwXCJpbZ61Exj6wNCDkT19rrECuu4d3tHZBVSi9woWjyJinQLqvTcUB3MDawgEipuzPkzDizGTgAJm8NwN",
  "key18": "PAWMqfdPqtKgXxA6nJANc2qG6hZuAwSj3U3deCptGwhCGyTKYFVbn3R16ibrL4J3jaHUEwBF9z2CZLWPDg8mWcK",
  "key19": "4SnTndpTvx2y45VPpaFjaTo5KB9Kbnry1DFS6eeKtwGWE5uW2Mz8mEYG1cNTnY86xv4sJFeKfuBWLX7NMj3CthCk",
  "key20": "4g2yiXifmSyk68ZWk8p9kAJNxCSbCpkHGWGYvGX8dP23nmhCiRtqbVWW4quQoT2MvkNXDrnCpFhtsC8yXL5pJPeg",
  "key21": "KZ7K94Mqzqo6RxwD2SKMAXsNsdDFacz54z3Low5hbiTQBz4RizcdrnZRtvYFWof8pYogNMvHMRd7ZiAm1FRuL1c",
  "key22": "5ahRWNw4W8E6PnkxxDqUczjdEicLkDzSL4QGUgMZjRNiU6tgJgy8nxirk6GvBhzHrYBgBWwLZ42dwFUNWCc4UcJe",
  "key23": "4KWu9poj2E1QB6TU6hkvm3tVhKmyDaNPjKGZcq9TNNEiEhHsP2qmN3zcNeS1tShJkif2u6wTk88erybSaWM8yEAm",
  "key24": "3FWdAQf1dPApEVPitDeZ7NFSSKHsMkJptMjY78zXdmizRN3usEL847ycwKzasL3ne9t4AX69cEiJUt7A7uDxr3kN",
  "key25": "3gmgnELqgHnWggd13KZUN8CYkxBpPi5XjKHn4QNjyMpRviaivqjQFUbEaspF4PawBLxp4Md4qpwtjbZ8WmJGuvk9",
  "key26": "64orGEVkPHMtmK78DxTp74ESbsjVhAPyg2Rxs3oWGCQGGBSMcCTXg1qzBYGLmNJfxUZKrFwymkrYHonwCuy3zdGx",
  "key27": "2qcCBshPvLr56nm1iDCFLYJL2qS3fnjEB9eUbvhYVuiEcZRvQV4dGyLDnZaa62UQc2FSwnVAneLf7X9NEaGaxqVV",
  "key28": "214ibhdULbAfJaargtPemJD23dk3ymUJ7mvCqShVscbAdiJWqKamEoWTJdVDm9WFxrhdjzRtuSPNRXn6RRmqnBRB",
  "key29": "3nD7BCKZCYBNKHVpp1JpLc25BDgaRa1pFHpLKg6s1io1XvoHFAFF4uZvq1h92TaWouRTS3AsNrwtXcvq5RMWedRe",
  "key30": "4rqqogkP2TnrgMiEUfbnFoY35fEFTpoAZMC15XcamUL3TA6MUMdSPCzYgzDFMq9hdetcDV1hy1dHJ3keJazqQVcX",
  "key31": "53XYrX1UhNqYczEKLESLxzj5GGM5rGait2YqmU5QTFwkVLX5PSoBTGxThxeQMvKQSDEywFYGms3rpYsn33WatiAj",
  "key32": "LxQAziP9XdMyy2eUcy8uHfr1joYEa4ox5pZPauZq8BGAHv5ki8vBNqqZB2u3S2fajiupszPw8ZSpnB9DV6hicRt",
  "key33": "26LJosdmwBuuS3BdrDPZuL1QLQxW8okKzwHqedcdwSA5FvwdZbs5adEEA3jyjoaaHw6ye9N7LwpQ17sjnf1q7Xk7"
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
