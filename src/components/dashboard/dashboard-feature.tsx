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
    "5ZDZFJ4H2ES1CdjSKj3TG44DHhmrHzCJ6ofzXxopTnNFr1Z2FwJLwBdeK4qxC2bKvk7svvVKXUvxYDNTEiqz8iPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydYQ4RTkUM6DTLShcQATLHkBJkkkC8pgohLZrw7PWpE687se5ACTDGG9Cs7oFciGWgGdxUDpRcVeBaxnFTSFbVZ",
  "key1": "3HJGyScx2voWX4vSrJ2ebbd93K1Sw5J3xvu3KdKgKFvz8ffv1MNpyWX4KT3riE1jAvDbUUWBATsVPMSRe9sG6kNQ",
  "key2": "2WQVjkKSWjaoK5nN19t2Dd4WiEQtaZZjFmyLe9GS8rwo9zsHuJBZi7zvZy1mQTZNwUHV3VdC3vfcgbdCoHn4CBjh",
  "key3": "3u5B3dTMdHXx8exHvzXn5xZmErr7XKuy4rAwrkFQY2fto3S8EvjFez6EMJoLbMnYETFweLQBEPHfR14kw3wqAWQc",
  "key4": "2ywnnx6BMTHCTPqE7ZQHMJirEhQucep9gmUyLG38cN3y5xvcCuKNgkxEv8oZryUmwwkrQLrb6mPospqZ4u3j6cgp",
  "key5": "4gAFvqJ5EKE7C8mHMGZg4QVbSsAnBwRcXiXVGJTQXiTg8r4RehRGV9w5QzK3V5Z6vkxfNXwAKzVhCHUn3Sgp9aX9",
  "key6": "4vLtxrXD58VXLmjymQaWWgRAodt5cP58uGf3bocj7NYVmyN7EYRGs26zusSm6eD1ZgavrDYeGRMoqTVnKpE6tdnv",
  "key7": "wWJ8krY1dy85hkspHSFEu7YaA4br91hWMXC7ADdm6ZZ62UD2mg7w6YrMR8ufa1iAEeeTkrKN4Lzo8zLo2Xz3oH1",
  "key8": "yfdLnjLEeFdkaxvRszR3axb63p4sz3BeLnfeEAzihTg4d5YFme8N216zVt2BCMdoTvZ2mXepuef9vBwNCQVSC7G",
  "key9": "4faSKzHVPgAdgTf5Zxj7qLf3kYFRGd5DmdAAXpmcruzVabmdsgVn5fkYUcLshRk6RUw95RZ9WXEK9jwU93o9wMxh",
  "key10": "Ekdi2Lvu7kvb58A7C1vma8hcGERWF7sEj86FEfVNBaSvshhPdoPLVsAPrLvMQGt5RM5AHkd6NgURQZXULqNtoQR",
  "key11": "5YV32xzzwptsTCGR8fZxbdsVXSAuWhg9PimhZgTtr5nYrV2hkY2sFZobYYNBGLrJEvNGpqJsEF9LxtNMhLAqKavn",
  "key12": "3o5cpPVFCwXKBPn7MqRFd4Ts8DtJPLixR4GrHvhPifk2axivpzzhTg6abuCN74HL9MhENNG6w59wcRLp89JZQSHs",
  "key13": "3Q9StK49kq767qhHDZvptE5FHBQ7LproYBd2neyd7q11XbvHVbsjWjhnPDEwuapRjuqbknpyiVqq8iZcmbdJSUrw",
  "key14": "jjNWwU24x4zvnCFpCfFMgBoQLAxpaLnivZVXAT4EXakMeQZwt21ZYweg9e63cn5r2BwAPvSuL4tu9c3Q5U8CWdU",
  "key15": "3sLXczTQHBbdQfiqNxFsT3jF6KGMdSmYHEDXLhBDm2VgTBeivymqoicZ6ZVgaaxrbJDAgDYkbDwDLWPBkYNFXAsi",
  "key16": "4qDsi5Wo8ggDcRznsjvvCiXApg6LTi6gshtV2DMm1WZxCqr41HkPPVaovnX73KwbgnnpNqGRoRYiZX6dsVs47eru",
  "key17": "KNo9fJNrnhJSAQnoMaQc9qmYAFegeijFPY9is5tX8TcKZccdARapBW9whxhvGyKX1PatuoQvrJbap3LnzgqRmtB",
  "key18": "5CfTEgpoYiNtfFnykTbG8GU3yHfQEXtXHrmVZAxr6g2DkkWX7KDca67PMCpu1sNbXzwrksAg3AX7Shw78fghBcF5",
  "key19": "JTPaiCgD8Na34MJEGdTcsPj9ss9CPs82Cg6hUyoxKhPJKjXkknzVnxmpzdMWdPJ2B2keJvq47XuorXrkC3aVrnk",
  "key20": "2dBpLib92KgozhAbDWZwM15VyVsUEnrk5eqLRk97ynSDsv3sasKEjYwJbjZqTkrabnppyHM3H933vzvHC4sggTMT",
  "key21": "361Crm8TU8D13tnmqJe9ToKkxFw9P7HTUgkNWjaSEd1oo4h7iZCQVTihspmgAzu9JGabCKJEdoYyaX2U7xs2arLF",
  "key22": "2UanZtYmQTt18nfb5sBxDaXTMA1aysShG3oXawQWckMdFwATHfmiFgnuzokKwcCjueu25pZqPbDZtkd1trm6kgnH",
  "key23": "5VSpNwNG1XmA55EmKTF7wq7vv3fHKK68qMdh7Xz1FDXhycmJvQLK2gjkBZCTMqjjuF1rE843y5q6uox1vm6Wyar2",
  "key24": "4tLEJ1pWJvZY3NpHoiThnt6rTfzRupJ3ewWnkihBFmtZjNSxXZGFyZN9sWXjJ7PFmQGFDGN5Zc8DXmX76KG4mmHR",
  "key25": "1nxTre7tnEDG2gQCDHvz6dAyCjqbzz4jUPLnskaLsQt2vP8C5Tzf13rTa1489fgkHpgWcjVjTPXj9bPorPNewtd",
  "key26": "2di6dDfMTs662AYYrC5DcyFjVTSYLxVoxvXKNN69CcksrthBfcQEFTWhXZvNRpurAs8bfdHNS6qfUhvau9jzQ7F6",
  "key27": "5CZuonT57Jn1V73bWVVAfzs1cNZhm15DKFzYh69mFUwnN7KJd8bjoUf9YkAHq5JzRqbAzs6493WRi2cCodS91xWJ",
  "key28": "2gQnE5Y8y1PkReponBANVnaJJ87qmtNEAXnwPdwh9ybWVG8fysWKyqCs5B9wYvhs78rW4J8zgPPQn17HY32yj8Hp",
  "key29": "2xYMQAjpuUsopzARmQWGHTKRRMGK1U5k6hCp9DN5TcFD8ykWN4XkEUJVh9KMGghyUfgaHCZyTGo72khJPAGjDkDC",
  "key30": "5aecTBmyp8njnUgrBYeWZP5b3Rx3u5RHBJKAhm7zkLxZeNuyPRmJAiwvrqq3rDqb1QxefstopsC1ks2M3GaRX1Kr",
  "key31": "3MRLinfpvSP6ytYPReKY9Tf1C57byf9a6PzxJjr76XBvAodij4KxbhV6BQ5Cvz36nD7vphdhuMhsybSc85gXa8Xd",
  "key32": "3XJuo8ZWoUm9aAcDaUAuXtaikMMK16XSFfqmBSkVayHDARZ6QuH7TXEtLbFEkPaN9wJqLuhvXc3LJmQCXs4FZEA6",
  "key33": "53stoxRqHrzyx9EtD2XpnEEHsbzTaXtRx3WSvrQapxyH9je6kQ2q63YenEDW5x8jTbnenMdmtom9Tgph8n2vE9pv",
  "key34": "4exfGSVTJXiZGDqrqXbT59R6mPdZsn6GD8qNdrB6oibQT5V3sHhLUjPaPmcbRKDD1kR8QXbwWzAFCS3M7XVDT353",
  "key35": "5yidLDAHbx8NtJwtU4JNzCXMTnZxM6M1ptasJw2QoLFYYJ9Nq7Jvq74ruEheR4eAmNp46TcostTkpwJVCBHCyfkw",
  "key36": "4UipFatxXbe9z3vmdwVp9K6gMhnEDAiGq9FSAU9mjj1kSUz492hQ8AfR6Zu2zAu1tJ85PdYQtTDiiHaRSD7yfFXd",
  "key37": "5xk6DYmuWQjSBSsNvhn2xhXvddhzvGFXH88sVXR3PnNKj8mygEaTXW1vww4QH2gj66nP4xnwdQMWQ6GiWbZF778s",
  "key38": "3dsZYgmZMjuVVMToLxJSrbfeiX5v3Uvke24gmDLd1a4rYtsx8JHE6rJtq9rzkrKUpygdrRs9F4ckf6o1ovv3WKN8"
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
