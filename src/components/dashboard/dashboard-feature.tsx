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
    "65MzzpVs8gnW4ick8m9kv6HedWQMBFiiUWSq5eXUdLp3h7558bP9GNdoNrdvFT11RHeqMjeN7svkoBxUNBkbXAL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BAtsdxCY6K74khj3eGMDY7h6SvpUAqrz2Wu3Tfdy7q2Lj379MLweD6z7Bxck6iGJFTrPk7PT8oNPP1iFsoGAmSm",
  "key1": "3CVcsgFueobaVUPXbfsAWSY5ZyxWLiAaaUVTSibzj1ScKKWQDbmxG1YFPMGcR3fYRjVr4GajsypkpCMf8Teej2Dc",
  "key2": "2r4aAvPkmGNDLQTN1rnvN5eHXmohEdq5QV6rz8ddH2q2Ahkk13ZVkSCNtf8p4sHmYrxVEvQgWykh4jvhyi5F3zLY",
  "key3": "3FKvtTrGYDhm3HNYLKAd5FcYCPqUCNZXWD7SyxdL2qzeNzDd7H82yKR5svcWL5MYDn3e8Yx9LAUmTUxJCKPtzRoN",
  "key4": "2A7kC8s4N9bBLjXdT3djE49Lb2NXvrBL93SgpkCxpQQdUgHiwUi4ytidsK8m2EbW3awePeR7fHidHrxbALXMELr7",
  "key5": "2S6ueWd4sucoRFtzJdvKsQZ3RneG9sr1Rrw5uavCugJdyiXBL3EzgTmf2jwXrZoiSDiRnuDa1vDF5HXpb5CoJmnW",
  "key6": "ogxLBPSYTjv3NyeemuWADoJkYzq9Ja5M6hserVpJkDq46BbxUKGXuYipZyB87uZV4Aj5uPpyyYxTcf6s8ukcVQZ",
  "key7": "5gfkR8XjfvJQHrkWgyxdqoRVBfeb5hLSjAQ89BEMcYTZJ9naGxB5VxdyH1EGw5VH7ax59gyGnLeMpo6nB131VA6m",
  "key8": "5b4mhQXoiP1tQNsMcGGQhoj7azQziKSjpdihC1jPYFxf7MVMrgzYFj4hwcTmjkbLdJYqks2AjRhk8mQFPV3sYEQS",
  "key9": "Hie8PNnjnH1X3frQCwashfwstDHx2Vwmn1qjxNuR5sepGeD6cj2vqrjQAcAf2RAuN4QA8LDiPYPckN4ycwZsoxL",
  "key10": "5uDrMHFbuh1azsVc6EnxuPvuAgsL8meF1y4sWB38bgToexMjMcShfNVTUddw2fu8bKzNHMgqYKg2wzyaQuL6orKn",
  "key11": "5wajfZrnCmtU4jBRiEtZqjoDFpz2caPHiyTVWovdARph5TkNHbJDs9k4kgcJdTe3Wo4an2UTwDfL3sqoc6ArFyAV",
  "key12": "TDohkVaaW17X5mAVtW18UBxW6vxEbrQRgtTzddDnC36YhyRBDaSfVMoGKy759AHJgxspXoR9Us2ySRG6Dy9tGWY",
  "key13": "2u4khi1DcLy9cfpsa9w3tCPrNgpDoFnCjSK6CN2yumUFbP88KRGkwC6Gs9RtLEdHfhQM5Nm2mscWeXWaZycNMVmJ",
  "key14": "6yvecXyy4b7YRSHqSz6GyqYxqi4EQKhUT4nWK9WGJ6F7a68EmVeAeWT5ytrqH83qVjtJSfWi3t6tJjAwG8HCLUj",
  "key15": "qbdKbYRtBrBx9LdtV8fd31yX7Y3kzcU1ZydTKM7VNEx1Fpf9xQeyd78U87SUH7uXf4XB1YZqeXgxc9FaAkh8YVf",
  "key16": "5KzAYsgKKWiqpEKj8b5KWqEwLmtVWBxV8DEgsAjWQptV3wuLf5D4KUbDZTaLdVBJXuMXJjZkZH79boKoAv2ejSvE",
  "key17": "5wvHoa2kbTiU2f1hBaD1cNsovbhX6wdaANS3ZpjLUbEXvjUzKNAGcMLGJw1UsPbXMAJKG4u3ay86qvApvzT7GkDz",
  "key18": "63fGYCeRBG6ZhsSB6Pc76tf89tnTqUrAsmfRqNpevwKQvMjGKEEFAyrf1wjxL96iLvd3Jp1DPzoRDAmsPZVAMX9Q",
  "key19": "WK6wiNTGJ7xXgnGuQwXaxXt2iBPJ9H3ZmhMZdK4FawQXPJ7E7mvEM5hxN7UQUgeR4czaqvznDf2kPVsaJCZWJD3",
  "key20": "2cY4ezNSZTrtFLGQbqTSHSpYF8ZPQuSZjT2WBNN5RKQhLo49HHYZjHKK9T8xZVShkmEhf8kN9jgrgG2SW1aYTdHk",
  "key21": "qJ2GX8Y5mDrgdQoFao9u15yiHZhnepQUnfTL5RiyFRPPL8GQdRXn8s4kVFd239TStUPC7y2LZmz95mm5GzrsKYh",
  "key22": "E1PkhPEuQeGf9Z3uBUF7UaEnGrGjtdWZmUwYfLjUjbW7sFv1TQVuZoucn7Fh7xuzvbCJvTFwdrt6bsZpptPHipC",
  "key23": "4joLowNtBKLDmdcPDKHeVjiw8M5fEuLyZNQd3NU3gRCBXWzwW1jMLwH8TrQx1Lf4jMR2ULiAq7oVQuMDLvcMFmr",
  "key24": "m1r5bjc5fkkki2vf3WHJuNcDFMLM3cGHyfNA957fyQ1AxHQDknhQVJJTkeC4cVBwpFGJSnk3KGt4K25VvoieKdg",
  "key25": "24eR8Zig5siA1gL6RnVcbScQxPQcodPTpqb4huz3eDSzCJURWJ98cHrmp7d2L9qfwt2yNPXMeAyjfYQ5bzfZmvPc",
  "key26": "5jr7AK4G5vmuSEAyZ3TwKQr8Dg5opZJuLnR5SwTKhixjoEguGKSUj785hWc8beUMmw4bEQ9vQg8tbdNiYRcg2tpj",
  "key27": "4hSrNkBqkiwwm9PtJ8bjCFM1qTNXqQ1mL7nbZTGxKZrrW1qLaWU7eyF2wBKosiiqr7PAmwVab4iBV4XBKGtRiaez",
  "key28": "tWLuN3MBCoZrttHFRYNPbEDB1eXMnGYNVHkUKxk81DTHyKoeM5n1wwcvNTtF57U7EKwozBj4UXXYjFfCG16jWjZ",
  "key29": "3qG8EhSWeWbBwURZ26toaHoDy8THyi5dfN1kgeV7oSuVQw8GpHcqHBYhWQ2zvXS8NfYFmhk23aHzDL3Pv481ejWm",
  "key30": "Hf5pDBphMYJPwzQm6UPUFcawDfMpSNaycCyV935AC7muURt9K28WE1NRLzG1FgnjEhfjcUJEN7HZ1Gc1teGYq55",
  "key31": "5b3fL8nHBCmSX6RRWsoSycEL5sAhekNwnRJukDMgvw9a36sUcXQobKtQweXmSxkeEFP2YsdQASDyjW7KZ3tghjjC",
  "key32": "3F3En6bnWtimkt5mTVRxYcQtLynHxD4qKEdFvGzsfN7SduMTdR2V9sZhzyPpGyakUo8pVdWnzPaAKpt56urEAQaZ"
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
