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
    "3z9m71ZdwULtczDNwwLNpyoJMK8mBe1MVy9Fx4W1XbHkgRFccgHKdHfhxk1zMGVJa8mNoFvdMVnyxaZvHM9DkVi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gq2CYJzmooLsjYk6GjYA1h5grL76xwjLFq4p2YkmE4yhYYNFy9pRaea8dP6ZNj7eHwqnUtpRsRtH5o3sBvJMoM4",
  "key1": "3UfbPTBQbcxB86dffxVAbvtfrmRc479winPPPaZaUfWBVeZBYLrXxCnMd9ZLVByWAMuXiySWc4WN4TqJ92AqPMsq",
  "key2": "4xnqAKGi8SaxogJtWQv7P7nTmwQS6KqUKNVhAiswynC4vH345PBfif9ydSvmX1R5Z3RoTG8JtYqvGJivKL57b21L",
  "key3": "2BvU7y1iXmppYxgHoWFVFjz8KoyXMbkRHVcDg9ZrMtfWH58idT2RBQpwSTMEbTBsu3TQouQFUNdetpup2BcFVvUc",
  "key4": "3qEqbMj4dtQQLbs5cyEuN1j5mJxNm8CdAPZysh5j3VsJWSQDCkNW1mauLQE2e78ZsxkbLqMEfNJWdG6EykG9v55r",
  "key5": "5fcxhscZXumyt9eKETEvSSGi4KqULuhjTFgMtWrf31Cu3xwP11k1DtGWyL3TrGAFyevGDKoe3PrSG5EmyWBHqavE",
  "key6": "48UfRAqTw76zT954YvLDDhXLmp6bfGWZdNiSp7EnQbjevbuu55SrMHZCgKmow3qjHeJqqg4Qime91d8x3k5PkyUP",
  "key7": "4hbAbGqT936UHQSkHjifto3xJAmLeF4K2pQxqJRvDqeZWpnE6FxKLbYCkjfPt4wniWfACAP6sMQwAuVXYKDp3zUb",
  "key8": "uq4nqptLzyqvPnq3bp5ux6y3u77RJK7x3rCA47wDetssrsvCWpGBReBhHYpppdCBioxwpfus5VYE78X9kb1kE1j",
  "key9": "5KWiHSStLRnR4PkQoBRgNf4ekC5mLcxNEbmd9xszuwhUu22RUrxZVMfDLdKotDELKouXqDvBAcVDs7qjFHF8rLi4",
  "key10": "4d4MSTcb362zjwWDYFpychzJvDwPQtqkJWYTbYGW3Fp9MWCrbG3DtAo5pZ3SJHjKykbmuy2JpBfvS9kaz8yt2hc",
  "key11": "2KshXsguF7MVeLHiGYAMezsdktmkHQCoTMb8QQXKt8tKcrk77XGv6zR1ZE2AEq5bGqwNwbrwXckHtZiui3488Zn8",
  "key12": "2ndHuLE9jjiyCHmErzpkL8md7VNNDCaXYom6bkB1xRqK512vvQAHj68sxbicfz4EFStBs2rf2fEbxdooR5utneTQ",
  "key13": "38Lks2scR5coqwWZJCBX2dxQD3unbhmgNJrbsAEyF3VyyJjHoTZNS5BMAoqa4TmGLEXd238DsWAkffFEktWubh5b",
  "key14": "49UYRME4PBgnDGERpLTbGgzq9DzRZkdrF9ddB4VLvMq4HpmoRjmpr7aSnRVTkdbbsEYFdcXVfBrhQmQrb9jMHZAJ",
  "key15": "3WuUrEAxnswJDFF9PuzuhtTiizXkkATZCREfxCz8fPY26fSuJbrveqsbbcRa75Gr7XvJxg9q72rKTduAwJ51EVN3",
  "key16": "ez682ZaY87ZS7owuHCcCV1dYeKDRX3AuFDc4UaNyk1xTok7LukUUWtpeGq9ejctAZGaAw8F8gJjo9df5gRkmeRJ",
  "key17": "42UijL6T55WZxhTxu3x5Q5UC8xteiUrCFS697783izr6hFsTqvSgGZHTUa4yAf7KyywMNFumDdPcKTShUMzRx1qT",
  "key18": "2Q8Pa28vLFk6yhC3jYfqJpBAKs8RTVjmRBKuMZNcmCh2NmH71cvcBCNCdgy6Pjd1XXwK1GCp2szAnLKvo5RoSvFG",
  "key19": "21VLiDmgkSD3UQsj7zXnvw5jbvdjj8w6wZB73NMq6jokR9V3g25pMAH6y9YVjMxrQsWVDpzTr7Yu9GCNtXmETKXu",
  "key20": "4wWCmwS8trVn1QttYSosohMapr6xitmnP1zGxpQTJ52kgusM2i7vFHPxMya47Nppp9TqZzG2fa6UWXaKS6vV8pAs",
  "key21": "4dQfs5axHkjGaHt4BdtXuhz8MLzKtkTTReWc89CQaG4Uf3RzYTCVRUVX2ZE2HBowTXPX8AxL7WPTejErXWQrckDX",
  "key22": "2Ad89WJcowjd2WjsrXPEUn6mEwiuySCMcmSbw6PvMD6TJNtxcx4f7gVaPbCmMnfdkXVnmbcjHFUTdLnXg1SuSQKt",
  "key23": "QCqJiHVg7FtKepCVcSJSCDYcjMZyWjAoEwxEzFY59KdUY1tAxZBurgNwYA3M5isdYhgWd79TehFAqxDEfXN7qRC",
  "key24": "3Ey12uLdKKB8F2JwhZyMa31bMm4gRK2TxNaBRVqgFJ7sgLBqWEYfWZJpEud8hjtKe8DqkSDDHttq1ysWPrBw34ex",
  "key25": "fnwnnyBAcEAMZF6uHQ9CjfETYQAzBdEQ5X3wsZ24vRyZdz2XaMBadfnUMEoQnG1t3gtcSYubQ7q16BtFvDGRGAz",
  "key26": "oWFoiVZUzaD8oYnhANVig6gTevbUZzF53GsBDeuXaaXynFx1RTDkMAuuu33vUhFScSHLo9SjpA5NwykBMdmTU4f",
  "key27": "HKrVJAyh2WNTKRC78HKUHDpDLe3fTKQxEktzzc2E6PMAbZ6bo13Lse6CAsrY31aQF1zwh9unq4H7LySdF5eWvDE",
  "key28": "5koZpYi3KaQHKs9Cv6iErx3bn143rxZVztrEPsJjy2u8b1HKfNLAYiF2Q8dZnhJHmi2DU4p46CBhechMxjrrvxA",
  "key29": "4LorgDDrCCCSWCxyz11fg5UNAAUbdEqhzorfZMmA7CFriCVYbSrjEygbcp4NKv6i4o87jFaPJEVKDMQpwwquwFS3",
  "key30": "4Jcg1tztfd5GmL6GepKsBQcrHkM5VE6jMtYHw6sizawzLVuG82gW4XfNXrRZUg3DXDKsYCmDikhkoEW8mCwm9mxP",
  "key31": "656XA84TyLbLKFXphgb7T9S1YcCLUyudEjaJ3YsgySm6PKGH8kyfBdhY6XUvo2CgeXyNYP716PJAdpkvHaNK58dL",
  "key32": "3fpfrRfqcdV5SwYRE5bfqnjCH9PAhWyTMQHNaPuY8YjET4VxdgGwXk9HuYsadM8UW2WVQjLJRWTTxHGCzYRTu7FB",
  "key33": "64x9bieZEbjxdQWdGFpEZWX6jFBRq9Vpok4m5MKx4oWHErFs8SHsJ2MFu4WK9zKHm39XNGYPXazPDdfaNbo93Toj",
  "key34": "47H3GSucDzaZ5V4JYrP3Rvw9X9Sg4xP6fGJBF6ux9sszx42MXFHbpjb5ARjAEnykUtiaHDFMFQLprrK7mqWvbSEy",
  "key35": "3RLRpWu42xzeNmLp2Q1q9ovLCdfqNPcWdXFFKyL3EnrdvbpvzYf7z8B5dn89x14ZRiFXVYvwQ38erQFG4vM18mmc",
  "key36": "NreVyLeVaJDYdi2Kf84VUyMSPi9KQsfHDkED4uGPMDDswRBDUz7mcTDvEsnWjdC4x45YFP44RFHbxakDfL3dQaZ",
  "key37": "5BPmdXWZMZy8YMRzsotmo7911J46MYNdoRhMkVDtpBq2RxL4eRUmKB6nH9VaSGiWNj7YsnxbgsfiLcUBfWe2uSQh",
  "key38": "QQeBLVmwUST4ije8qHNmJdM9KZjadUtGa2RDdwBmKYGxRWtwf8dGJAw64EFHvnP7BiaM15EqpvSyL5P947byBsU",
  "key39": "2kLfJs3xGLeicdR11CYxwz6Avkzs15xVYaR76SqpGqbrsmEJ45R2Dp4WjAkfZRee58xYRUz2LSjof4a85sDRqdNT",
  "key40": "BZDLCpYVP87Gwrs57H59XzpCn8Vx9SPeHM1eXtvpE4qsjG15qDcHDtaGFxtS8DARfkDyjA17BqqUJbFaRkE1Hn4"
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
