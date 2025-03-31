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
    "4YpoxvcbZyCb9bSpJa9wVDKG8dVWxpA862B3wndmaCu1EyzvETYRaTghPp9XNCb2tKEPnY2sJVFSiab2G7oC7zkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVzy5DfXRHQ131eYW57M56kfyz6KUG76CoSGoH6Qg4Y2aGuL8pM35aqjfMdXpdEcGetzoc1azsxEg6D5DnEdLn4",
  "key1": "5KzW2DRJS4BFq2mgTD65SdiFe6wqEt1cs4DU2Sg9aWcVXwZhKhmzqpGgXeWTN52qm1wotzy8YJ8MLog3RcntsZ8j",
  "key2": "622nXR9BLkECgLrBEGZHnM3kkKgrDfS6buKUbTQFgQuY3ix9FUYpUAbJqMGTBo7usfhSrcGVba85gqPfMPm4JrPc",
  "key3": "5eThqz7bRZF4GMJ6hReYMB37kmehAYkiMBVu1Uzjz95GqkiwaUnx3Q8vuoRUg9Cs7q9MpyUkNSMgzhMRgTYjbNAj",
  "key4": "4rH1sgZhFnXVEuwQzCUYEQA1SiAdgkYtU61VjNT72JeNsCoE2QiNeTkEUnXB43Z3gwh6vTejWTgf3dQqwd1w9NFm",
  "key5": "2kSqyaT2DtiSwQj4tQByYhYqXxJiuZ4XKkYkHMN65ggcK1gEo433F8PkUjLv93i4orXmTbSZfXUbZZDY59uiptAg",
  "key6": "5D8gADdxik957JgisH2o6hiTc7iVRwS3SR9RZU3HFXCGSmVJ4g5wHnWFnB6BiRxaGpMSWr7FwXYydekFXeePc5iA",
  "key7": "55mDUSMrgRTJrKc7Ym27WetFL9D77WBDZSp5xvjzxBhJgtu92RHXqXmZdYKKm8BTwkSpQGtseJtBqBPgZNHVezCB",
  "key8": "47NsTrnyLazQrEbwfi778WCrnHnkbq9iietxmgdRBa1Ns3ZzEgDsS9M8o164ECq47jmAWGwYwj46a9nLCquFAhSF",
  "key9": "irmFca2Sbo4R4t31LdfB9PJDWEtzi88LX1r57L1DBSQtivgyjzjcuDJHjGXW8QMfQK1FUYQWa19mrejHgXWRFKs",
  "key10": "sPYQS19SLomFab9HBqH6RVgvf5PDf74SHfG94YbWeKWgucgQTkZVELLU96pMToP9Fm9UXtAK78SPAcq6Ct7dX2G",
  "key11": "3hLregr1gcaSgZw3kuUS26KZEgtdQWW6JHbn4R1f4bU9dJ1aFh675rqKYUfSr7NaYevyqkXTg2ehSzqPLB55bcNU",
  "key12": "4btLFkXSgAoX78qDFkYfboLPNCSAjiWUEi3h4rLRBy3zMCnhAokqN2Wz5Tz23HrimsqrGjLcBZ6nZmpoBmuAMfXb",
  "key13": "FYv2DgbttrUN3z96xu338d37tedEgKzvNpMbCYRiVLZ5wzYYdpbforNNYR8xpk8LGrXFanX9tLZK6AAg9bjodJ6",
  "key14": "sPtiPbT7CJcLhfrzqUL3rXRwqavBKt86rNdwUMVfDnrhmrjhRTPt7B52Y4rCKLxBo89nfzcCYy3WK6S7AdwyBJW",
  "key15": "4NnJLrp9asRnQPQ43YjHbSvmakLegRngzbDLhic7r7k6VyUA9SaWB1hvM1T9MBaiuXyRh9GH5TiAGXoSZS8iNTx1",
  "key16": "5QLzqVD6CrD9tcV3mSqDHKMo7StEo5Ck29TLGnbxwAFRCqnQ7oEfk1epuS6HX73rvP6mpEqDGZCrv7VPjcCy21p5",
  "key17": "3hBb8AUKDzydPFG11eTwUyJFt9JkMBRUvuyquguFf6xHmd3f2fywyHKqRX1em6Z4wdQsiGYPmBFjx7M1SMH2g16G",
  "key18": "4D9amBruGx1rRH163CJFfhGkqejnRwVh3Ubq96DwxVMzYAYrNhF5LzqpoCC2fHmPL6r2XZ7Ejke6SdbfgLJmzFJc",
  "key19": "4B8CV27uqNyGNjT4GAyWeJn4udpez9nn7o61sjonQHRRsZCBfLfuhRw9zvcMrCAxtwqPLYMYwPQ8MRk317Zzr3mL",
  "key20": "59SLFpcrjokQrrMkmccAKoQtUXEEAYSav7JrPL746te1a1eBXRrMVvxvUuz5rY1apWSLA4S2obekVmqwoMywbmue",
  "key21": "42vgXY8Q3pkgB5RTJ4wNxkNrEeTNnz6crB4bFEmcuUi41iswVNfadACNFziw8kycLXfRnpKcb7fA1y6nWFZDkSDz",
  "key22": "5cRKUSwmBxowZrx33GefAcjNTPZfb1hf7rsPaXdVvQQQYEPEtXFnvDRqVA9VYdVkHnSAYahSCvnYT3oGZcGLpi34",
  "key23": "5mTqQDiCoSLaGEBf8eW8WBx2uAnVJqZVRTiF3XjhpuSbF93MBcUqekcYUQfaq9bEX1Syt8EjRFpFJwtb5hK7zVx7",
  "key24": "3bGdNUeEM9gkScTG5dNxu6ZJZuSpJ8pU7gmduJZUDP39RigcdHUCZtVwYXzhSGzJk8P1r1rvn8KoTiW8H2BQWxai",
  "key25": "3VhJNAB4hbofhhAY12QEii4kwdfPQCC7oGwpi1Ci7s724nVawYBAQuMpTZYCAAUyr2paDaL6rzv8wpRpZE439Uhg",
  "key26": "3TzupnmZRkas9CZeKZr5zXDTNXhQ2rtj667D46rhmodPg3tGa8mMNoGsc7TyJWBxPyJLGsFjBocpNNBqyi82Y2Rv",
  "key27": "4Ksn6Koq2sRnDgjFwN1qhRiJKuiTLLVEbVcuHjcsXSiozR6MRnyKGNZaVZQjQCC4eYdCANasbpm7zbfeg4kB2G7c",
  "key28": "kYgseJGgeQzHq32EvyJYAwx9nd6p8hJBEWncMAYyuB8FWZfz4uQE7WPjmiP4T4oxdSgXaTt3EF18W8m9Rz1orNK"
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
