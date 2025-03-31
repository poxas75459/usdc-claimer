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
    "3Zc9km5pmCFzQPD5PTy9hgYn7AxMpfKHjj6C8xmg1JLnTSL4kx6KNKsja9pUUQnNpAQBZY5tCHu5kn5fSt2CUCo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hS6RGdLYXSyERGYetFNBu8KKmEv2sNpEwZsUgaiac3iSgLLiLuooBpiNbiaNxNovzrLvTq4FXGqcZKR6YVLEiEW",
  "key1": "4KoxgLBKQeo91WLAPmB9FqRFgEZ1n6jtCXykxuw4z6BL9RivJn9dagXZmRR3MtVYZcTgB7B9Hy22EoP26ahZJmFC",
  "key2": "XZgCJwmC6ybSNRuALfC7VtEu8Ehdcupt414q5SqncgFpwumhs3Ka7efASXY6nnDdz7gRnGLVewiz1TJiLPkrczp",
  "key3": "5kF7gh9nvbNiFMbz6wnTLrAin6rn85ERebKYPoe6q9MehnPyH4ndYpiyNZnf6aPszCrqJ8F2ivjQJbbr5oLqKQx8",
  "key4": "PoTeigZ56J2KWVeJzjNAqYaQZszaju5wGpk24ZKko17rLpxXngmw1BPoaHkkjwF3uKGqjD3EN5Nzzcj3kZeyZoo",
  "key5": "4EesBuJzG1r2hdPPeqsQBg5wzNaQBZX2CenTPFLPVFB13GRQ5JgQwqfBNYrdCGXF8hocgkTYPogFV5dSvnQArdk2",
  "key6": "5nu38TMFMDvDhSAeCqZp8QkKHZBH7qhRgbQYTFcDvDSxGoXnKEQ4gmBmpLvi5VbSf5afF4FZwhkcSNt42R5Rdv2b",
  "key7": "2sNyby3Fsu7qi2F8sgFTrfnUvXAzyzwkJNyBiSH3eh23EDppn3M8NEQicsrd4gWQWGBGkTmKiuTnU3WjciBhX4nr",
  "key8": "3aHEFZ8M5ZueEfvnaahu2kJUqiGFbhWELzy7evXeSsFZ5uCREXfMTPozP4iK6Q41C7mwT2jR7njs8iQifhA5Vhyj",
  "key9": "4gBZUPdJdwPPKUr9KeuDokzsP2H5V7n1viAkNFX8y811nV9nNf37v9D4tdz18DfRw9Tew8uAoDHyU3i8hVopYo8a",
  "key10": "5XBZqB3aG3KFFV6WhrsGSG5TmMh5yMZJAYpqyx1hy2jRkCZE744cfWzLC2gwDAwSuk3XeMz4cfa2KUwsbAnzbC19",
  "key11": "4hqpJrgCWNVUgwAXEqcsujReTiuNFcxUj2LqDrUDyYipr5HwoEL2FHbZ2mVmjYA7HiC7HVwcYAkZ3jSLXom68oPf",
  "key12": "5sXm4Zwq74kvbMEGuTZcSENnCQHwY39knrJF4UXXjniMGXZ9o8ybfBkkg4XTPtdBtV87rbe7eyTjyGaLxX1KWaQd",
  "key13": "2PHZsdodP4d9NcGLDKiCF8NoefVDW6PG8KdNnBkYnStAekgaCxJ9PqsEYAaCHi3zLePfVQifPj2Ac1sTBXk91mDV",
  "key14": "2FmrYTNhbZifYQdCCLWivk4ZEMkLv7NoMbqPa99ScZZEjkVPGtXv6M9ZvB8CTkXkPgUnCvuDQE8wUKLURguMBshL",
  "key15": "5P7ycojhcfY7kMiHzPS7rPwzePUcKHEvLQUdnXtjvDSCYKzMiVQ5Fa3bNwQRQCgJPkiugHxN8b4Vac4DzrcGa7ta",
  "key16": "4nu18NrTw6xc64c96wE5WRpYTSKiwPw92mTReFAQDVnFZfRYX9dZEDhPjR6fZaCBg9pmmt4emf6r5MNmneyktVyj",
  "key17": "4B6fHebi64VCMRDr8REPR6aoS4kU6jUJabbcyeEdba32jtrkypivXB1bSLabgc6x7Uge192BxabEZGsPnToRcitH",
  "key18": "64kW5BSiSKodX6oQPuHWqfaLLmSaxiVaripbPyD5GLsxr1cw22dib7jK29Yyj15rtD5WYdWag7h16zP19P2pSynD",
  "key19": "3St8V4j4CtjzrbqJVPrMGkaL6WKDa7RkFRKgjRy3aUu2DLd64kNAxBp8VPWJr42sWNMTTT5VKCosEqkaAuaGi2eK",
  "key20": "3Bhw3kY2HdkDWzeTJRmJfdmmNC7d23Ph3QSJU4RJmmdJkLzHmeANriP59JxSfhRWJxBdCedJjUvFPRY9UdE2itfY",
  "key21": "3AWtTrqdt5vPh5TesnBZc49z7J4i1gk84MWztD2P57Bk1N6V9yoaV7J3PyGa2KYJatAtcuhefAsjrTs4ViJNrx6o",
  "key22": "25F3jA3Gt4o28mRWqgFFFKDTJPviG4cjZe8oAxAapdBs7hNXbbDr4Z139VaBaTuJNVwGrewUaKwi986oA67sSsHp",
  "key23": "61MCeYXoDmUNAkCRr2ywSTW45CXoGksHrRp13P6M1RrQ3qVLheALhBpGetMCjthg7nXsAeFwmPdYZbpeBxwYuaKf",
  "key24": "5eKsBd61VAMvykeNvMqKiLLinFjUZqaN5yJKEr4kCGSEVYUDR8aWp31EMai28N8gPVNghRngvt3akz81dxCWZBMV",
  "key25": "aAb8G5FEwC2nqJvbS6fCUkmeD5EnwLKacNW4sPE6pcHo6ENSkYp9U3ecBh813HLRR2huLxsPtftDygnRQUZhTFn",
  "key26": "3f7D2GGYXcCQELNXBReZWXaMn8rcpATH8zbebwU5qApYgwKp4XP7yi6GU7SH7bbu5EXRdvp66vgJgKYGfGMevGfp",
  "key27": "3GRcyDTxDZn7DnrZAqGwUJUw3T6WcyEau36M7X28x73LjUYJuoYX4eRb49Q3KTaRD6PKMWyVmZcCfce9Fn1DLey9",
  "key28": "2iqQLsQtUKJB8d4VjeB12VL4qmnhsEZjP5Z8BRGhPFBEmPmrx5UpLNRutM3cR3MDrwqeu7FcKAqe78tDdM2v5hxb",
  "key29": "2A4FWeXemDK4WhAbBSbicUw2jX3oDiSUHGG7WjpsAJwHnmm2jWPpEvDFifoUo4duh4RgQ3aYRTzuVQR5kz98C9NN",
  "key30": "5RU6hhn46WrjakTockz6MNu3qC93mWevQsV8eRVQSvaFJRyzvMPBM2Epbo6EFJXTTfj1NbX9YxrrqvXhdUwpwfbu",
  "key31": "2uMRcb15kFqRte2rbmC14DGUuivHm8Cb8NqN3WcFdFZD5qZvfx7zRTTASbKDhqSD7MFGfRKk4KzKx6jXi6n4zzfi",
  "key32": "5HVJmJ19AVF3DU6HEZ4Eafx5E3WQs9LdvxuJLPnSAty3LU4szR5Mk1fGK7q2JWbW9PqCmkAX4ZEmUKWcoTX3SCzP",
  "key33": "5KDyaRidHyDeqSv79rSjGRavbeQdQtJtghDjNTG3wvDtAsCgt86S1suMjRA4ZNqH3diBNxU6GLq88282zUir7xv3",
  "key34": "6pkwuT8sNt4ygHN97F4nuFgtySKsjTJBW4f9jeXWre4rYiiAvDNroABPyw4eMZusqAWmma5wpC9oAdD6cX8vMM7",
  "key35": "24gaxVobzsANzenEu2jahqNWRbsKiso4cwkgj2w8RCDF97UhNxAaqNxwBqgamGDsRDSFznLkUxsFyRoEM1FLZzYA",
  "key36": "4QFJa85tuGsy59hF7hoG7snQvEmZojHA8GahXsFE36DhYmMbnKXfsQtwqVgPGn9bcBsSw8SPMVw8FN84ftMGBAsq",
  "key37": "2D7BhwVHiRD7j9AZPkSnsdJZ44XUadjfwh4Nm5CRJxuqc7Kou8FJ1DRNww9zFxWSn8ZofFcaCQGvZtXgYZp5ihKb",
  "key38": "du9zQZH7x9vGFvVs3Gn6GcShahsJXYRjQnKVePfehCRZbbc4Zyy8hCUQ9ds9c9potWMCPSv59F7udnvrCHXK1JZ",
  "key39": "3v29X2RmZrgDmn6AWDcqZ7D6KxzjC2dE2vEKKqZGthJhoXTWPKqyDN5mzuVyxMEshVceNqVaDPGGYSgMgJZ2S6Ae",
  "key40": "59Gn7tACBpQjBkzCkr2f6R27hymrLavihujTriJpyq8Um3svweDdytsTaTyQ6N3iUkD96ERgMD5vTTEuGGgcfJTi",
  "key41": "4mXhfi2YVADDM2dgqjphkKea3H8Shk87DukEx84F3Hj5uYQDhnG77WgX6SyzpwHQz9PhouvCUo2FHyhGYL1MbaEZ",
  "key42": "371iCY2MX7SdzVv4J2mUDKUUGC5rGHj3mBA57TC86hRusN1SRx5CwJfN15NMPJLBWokB1c5FweZKY4qm1BmxCA7s"
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
