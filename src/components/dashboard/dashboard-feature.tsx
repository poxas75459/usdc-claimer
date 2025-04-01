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
    "5ympgmmyq62nYVF8WyWCaRJfCovVq2uL2L3zRpXfj4ZZDcLa2GphakxMSDUEhmxsYx3nng4HPBng9xsenUF5RyPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZ7A9ZXzgUbnTVckSxFXnSvXRrQPPxA3bVjPVXGJH6g1oFQQaoyznipRsx4FewwT2CiAwug9YPSXkHeJgDvFJd5",
  "key1": "61fpLSwCzbYyGjzDNHRr1RHW3oxozDro1Ygcz8WPJxagj3ptGyx9wtJ3eYPb1M1B2e9xDXRaadqGsSrLMNpcKRKB",
  "key2": "5hztLnf18SAQC6NFc1skFNtG5m18nrDCzsin1oBv2CfrvghjT2xmeRiDhxtoMLJn3yKVrTmQJxgMaZLDZ7aCpEne",
  "key3": "5U4MRTa6CuX4Cugxt7VJpLJELUaYsZUCnRHfNGqZTjN7yfJYnKgbGxJ2ztba24Xx9j6JngxzYZsa9xbW2HJkoems",
  "key4": "4zfmMQeyi1vnAbCwdfEaqv1joyZBYPFkv25N9vZwTzsvBSiyeBDnHuMgvPxFDrwYTa6kzGUDXzmrBpZbXgteLr5D",
  "key5": "EbESbyGjUNjsBg1maTi9sG8yLLvcvnCerutsguW5uHXUQmDQWfvFvDkL1Qxx7YkUeirbNQuiCHNhhva57UE8jRX",
  "key6": "3XHwZCoyMTt6otdSkbqTCUX76qYGiwTBioXKuFK3rk9ap9deXYE5hWFPwbyR3sf3nVBuY9j1gZz6RCaMPTGhWyHU",
  "key7": "5eYKgUpGxnUj62gFd1fsJdEwWsS8YEWAWDZZ8AC2WbcsNedx59tQNVm8FPhux3sNKryx7DqxjDjUxh5pjAzY23Qb",
  "key8": "4eeQQmdbkpyQtLrK7qjYKyK1pa7azYHm3bhSp7SKbJr4nb8rgUpjB3JB48QPRDMRrHHBnJPxFP1yBsZp3xjixCqS",
  "key9": "39L4Q55UymLz4P6vQ1cWgatZSJojCFZLHdDHrmZVhv1FT912FDuhzuhpZdczaLwdTQQa2Msnbcn6u5TunSVSGBCr",
  "key10": "5MS4aB386tR1oq5Fpx48spYSKs1Ujp8A1t9aXBwMbh1AjsZnSECKNEEnBvtKN3a7ttwJNAWEabAcGvAijxDFv3Da",
  "key11": "55FpPV9iVyFVdiyqFjuKGmW8KrPPusLaXAdB4YS7N5Rm1HmGCyyrnbx5dudT2X4NQ8YiTX47CXXhhEWdMAyyr3Ns",
  "key12": "5QRhkgAL1YeFrPaHP9EnkG1TWW4dpBDd8V6gdVSAShr1s21N5V4sDBaqGmLiXBewG6f3npFVrmHiFwDdHbRj94Q3",
  "key13": "5QMQjFYWKR9q5QtTrPJFCGAFRQF1jaomqYBizfVUMUnYM5N4yg3dXvH8tBmmdKo5jqpa2xGjxuv7Q4wpdFKCf5WR",
  "key14": "PPa1P3SHPBUhLq9gZqBCtZe5mnDHdADXvJJtQjQSKV5shNM2MCF973ZKetVF1RNL5e5mCnRPp3DFxrHuwGYt3qy",
  "key15": "47tTiJ37QnxodTdroc4gE5tXgmvRPV3W3GHgJdwYsVh6NbE7bgBZsyTM4PbCCcakVCDPZUcEEEx84hjHs5q8AjPi",
  "key16": "SRatBdNndcLv41NzCUwvrKrqXoZvAeEkLbm6g8EhBMgWV7dDdtBLaAtdKrpRUrnAPvS8ngguJ3srKnCgyiuB2Bu",
  "key17": "4bS8sAfuCzihhECWLhHdjULjFN4751EfCFdF88mkWzCYwpN64QehzKeSuwJw6rya3eSKbGonkqn55hS2BrLkgdc1",
  "key18": "4Gvm1oY6fdoYCJJ7Wg6yV9oaPatEpgCQEbUmoahzx6cvzDKR8ZEwajoTRH1CoohhzYy1Z1GWXM9LR3YnF85TQ2zp",
  "key19": "kxgMRuPJxcVwg795adCbjztSefD8jipgEFpNc4asUxgpZWBt8uM31tXRBjGebivUajKtTwd3q7nKTLXK6tgmT52",
  "key20": "uLUmyiVPqJncLfENjomiSm6trGVGsxYR1rt5qQm4btjQBHAhHjPCPSXCCSC1NKw1VqpQmR8WozGYEKEGuVdzXv5",
  "key21": "4frcTWEgZUT8442Nm7Y4yypHf7dnmpuHeuVdhbj6cRh4AC1vo6BLUHtfhNwBASXdVqBEKHmfjTHGtWsWz9UUQckB",
  "key22": "2anwZHwv82Q1YrYDE1YLa6LzgeQjW5H5ctvPjuNbZWwdsD2ouea5xb94EBM5UA3wcjQVSSBBTPFsewtEaY2h2beb",
  "key23": "2Qx9bjSePQNSqxmPtvTgRwf6ArX8X9dW2c84MM8yYB7H1XeEdnmkcEGQhSu8vzwYM4MCKysLf2joKhbGK6Yczfca",
  "key24": "3ozDKCi87WyMM1ehRL6NuVG4VNd3C3bEmUb4y8NUZxikiQPGyP56TNKrgmaznTC7sv79HJoek6uVxzvFmYKtnATg",
  "key25": "eTHSDvuXZLMdxDXey2JKZse6gR3v7iQBQWDk6JY2Uwb6swkVDfULxtWvfPJoQpbKadD3pkcT3SEcsZLWc1gyJch",
  "key26": "55qAfX91pXPGxSYqPmCpQfB2XtJF5Pj6NsfnpjPJATJqJ4HURDwy3ATNhvRkzkDMiGNeUzGhS9G5fAGNNemK6Q3W",
  "key27": "2BBa6XBNsgL3FCzgSqyZncW9jMCycfciA6cErJWqM9gP63HgYu5ozfRn9Qw5fBgccFfu8auXP6gW81M2dWx4ej5a",
  "key28": "2KXqCFnD9HuR1z42rfwAfEwZRjjJTx4Un5eYAiBqeTikuMWbBb2Ydf23pknxepT9jpqdvWWmaxKirgZjagSj2PbY",
  "key29": "2E4E7FTkPD1ewbNHEstCiEaQcdPPab2y3kL67tHGjXRdv8NRaUgPgaG2Xn87vmf21kprQtLPULRG5bSDQLtJ4PXN",
  "key30": "5zBuTn3341KkmthariDgzCmoiCnXXa1bFPmzWhrERDp4nvU95pXjHc7aJRc4Z7E5kYKfBDnS4e3sCaPeBx53piGb",
  "key31": "58TR34Y2YpnYyrZ6hFDjhz3zDmXrpDCLFLktYYQ52WXDpH7ovMdVWRZz4zR3Wo5bCvgBi67XCCMnCe31TBjUpdy",
  "key32": "62D6RfSuRBh18SH4hnac4rVHH284gM4u8bGnV6kNELa4xFeEfKKTkwfkCdhZBprsgJewcKDunxJFkcjtVkNRhPeM",
  "key33": "3b1NcNEuobK9ZoXjN3isPQhammEKGVyEJZ24chQoeoKqJsmCMp4PHtf6eG4Nvsk4YAJfagrnfD5br9CSccfXccPe",
  "key34": "2u8xdPSgqfrB7EtR987UjAE61BLXcntvPVaiNGQYkx2KYG61a6qCWoojqvwUvtf8S5KVjixj1LnGfCC2p5r9Eo9p",
  "key35": "2ruNzEukj2PzCydMnzSVSjYZwqq6r14uUaJEtvNiPPVFPSt3KMorPWRFec9UsyEcfFtojKgSpvNNuLu8mtrhUxzK",
  "key36": "4fDJjg8DbViEVbnr5DU7WixTYHb9U31KBdMaMDyfRW53eg8RGzpGtwuv8JZ95YC4ykTbFe5ANYSXiYqvp3ipaxJP",
  "key37": "YWpxYvqHGoupnuL9qjg4eM75oufrXFFe3959LjEVVZa4qtzaiUQBKp2UTB1JkZTLPfRnAtzirfMu2F7DHHMUq3Q"
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
