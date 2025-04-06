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
    "3x5rJ8RnESHF9sTHB76N1oH22NoHah9WBCuUYuBa2rSriKvkgpusxw7TXGnkqQ8QTdyA5tFF8PdA6QJsDTeuzAhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtPKsHx6gmj5xfmLq2p8Fr2VWSnNcBjM7yUTgp4oFS7uFVXxT2bEd6uPDVzexqcFdSaDBMMyFCiB2HcKfWCXcBW",
  "key1": "3ZwFozvoRuj76dMHbsSdojVGWchzfTZtaRsfs4TepsqCpqQ4TW6BxKSwQnUdpweoG68S7tmG9yNepPKbTrSyHCHC",
  "key2": "49SVt34v5asiqxtbHXAwLD87kW6xqk2YSEva38KCLQD6dmPqChTNcBTTzbspMDiyqd9oGF3aZhGoWS5KLpW7Z83D",
  "key3": "43RSA2ugFnswEPoKe6BDTJad7vfhDav3TL6cd7jUAk4v3K2gSocA6tWMP2nZVTZh5sdiKmvaKTuDiG5CqMmJT5mx",
  "key4": "3hrGeN6smXd73UFTH2bAh5xqcUGf8pKNUEEWpcrVe8ShN5Zt4BZgHoAfewjqkggqqY5p5jcUVoy41XSniwkTYfRy",
  "key5": "6vZgK8NDZRxsAGKw4NsSUW1T8mNNzyyGsG5yyRbB1nkskinxMwQx7vJ7eLMbHT8yNLuReNeqf6VX8kM47khZWbR",
  "key6": "5QYYMZndkamr4dKFFFxdJWRxrQ9P1AP9rnnA98B476ZeWh9sHrm1nULzyEaMYDQa6eVnHXGeKyY1CgJyvWi3rgdS",
  "key7": "5DykVNXgP2DuCxT1mGCdjAft5UXXvdGG2QqEKuF6ZJY8ga2mYmUGpuSduKWAKDBBF1tVAmmSJp2fMZgTkGw6cnhv",
  "key8": "5iSvttTMC2ReH6uWeajuGUrzfxoahZ2wPWtjDovzKDvoCdfgZoftFyxdUugYbe9nJ8z8sQPs3buESHx9CZkNoJck",
  "key9": "cbGjg9yqzpPoGQSrJzg3EDJB75auTyViqbwWKMErzTctQRzJREExWKEofc4Drsk4rDrPi5dmr1guUnhuM3pXbT8",
  "key10": "3H1U1v6evNtxo1w7pG7oxXcD5Au2L7qVJVTxD8RVXL6noD8aDS6v7L7qatcZvLwT7iXJQupXYHcszh8PrJ2hCUfK",
  "key11": "Qp6ejqmJeQVHWgMrjiMQPbdK3jagvqrnmxVMRd1S9acqmemxsAcS42BUECFb8shQwSPEXBjC5EGdxjsWxdeqZ9m",
  "key12": "3YFs1HrjLCQMNsfbekVZRTmLkfxvV3cPgHDQVKmWTp8f14v9YtijLLDM5jZMLzvfWQMk6aagnQLD2iYnCHeWAfGi",
  "key13": "54YvkWdpvXiXGRpT8rqtWrx833ngcTaR6A4A7SueTNUzEuhpJpjrXsm3JZZnUzqhmqWcFSzNeUepM2GkybkrzzDN",
  "key14": "48PES35JNwmoYv1hJhWTteKiCsko7htTRdPSXQkPUJo6zrXcao7uz7zqLPvnndnKWAGURS5o7enYQCpFrHTkrHaC",
  "key15": "38S42QSwVFkvakBMHQ3rx1tAQU5U4N8Yepm1U1AjTQkr8NyTmLNnhSAQ69AMPPqsc9Pcpgfggd438ACMNwn3nzc3",
  "key16": "65BPoz27bPuw1jCzQHsvALmzzSqTKjoGZVq9RzTjvNMBdF9RtduL9tVavhrNomPqUZqPZcsAYf3kSCFMurrZuS93",
  "key17": "3G4nwrrnLf8QvC5zMdh6khyVKjM6yZDSv66B9q3SM1tp9kvGDcvG5neTteKdKNWqC8bZ5CsYX6KdXZuW3zZrkzyn",
  "key18": "42WAqvgRB5XpuuppfsWjTAbPuK2kJ2U5KiCagBm1KkmJ7B88E1fmPbDm2eN8hG3dScQSUeAgxFaB8TvFEmPh8bic",
  "key19": "65AvqpyepfXRy8kR2fR8yAQFjnVkKgC57ZbTFVNxzSDYj8UtUoTdvvnneqPXrEzQxvAP38tXqpZ4tr9fp4NLQ2an",
  "key20": "4y9vhWFSMo3UcJH5kyq3vgpn13Gfj1R8GdcyZ7e2ABpe9cAoJKwQY2GW5qMeR9zMEHLCnNfWhSfGBfZTnLLn5qUq",
  "key21": "61XsKbKswtaCfNAGAXpipfASNS2bLW4iodRdDeBFTyEvG211d9JGXTVfntZi2YjFRFeqgzkZeoPGjZLV74yoikPL",
  "key22": "QoUiLSapMvNomHiAszdwNB7Xug9s9x5F4dS3cw3tvWRNitnqmghyJQNM2XSpMQNkjghm83WihXe1b4bvMkgyo6A",
  "key23": "58M4Bt8VAm34UArmLozUdNGzSVMUyZMN2rQDqELorJhormHURAde8jXRWz4QC8b7Rhv2mDexL4b2BEZ8T91jN7nK",
  "key24": "hAaSoRLBZaYbEuEaj8XYpNBvywixMwaxZaNsczMksdMSn8vNLVYUAjEj1c53hnvS71zDX9rDbXgr7Uvran6nvz1",
  "key25": "5mUzRXSmQwgEwYJpzNyMjhKeGUYWXHPzcKBP72AVzDNS5HJRedNxx8kBHVZeV2C2H5bLNQc6uMnL4Z5YTb4e4irZ",
  "key26": "2RnLUPjzX7UhQZyvFPJXuQ1TMTqBNGP5s1L1vFYWMf2L1MhRPrRMbuojGSut5AV5umJxG5JCVKvNyNj3Kc3U6dBe",
  "key27": "3e2AYhWARdFfcKKqnMPy5ngUWQ6y2bqZF3rPPxGDb9x8ZUTWCxAkP75zaZFUFwoS2xPGy27uXc71byVPyFVSirJC",
  "key28": "5HkhoLEQWTWVzeueA3KbqPe7Rgj9E1M3Qv8eX5SHWaTdFqdGpXw7zAyoBXKtGwD1HpYYWivQpggQ1Q7kCvbofyQu",
  "key29": "2B16BJP41vXBdTJXBBaT1uvEEcgricMEm8xCuiCrtW36Q5qr8sWJKSQBMXeXXcdq895HfhSMQQAWMKRnzTv4F7Rp",
  "key30": "21ndexFDmpV1PP1N7GdEXKtjbk6UrjcVj5MjFS2dB2DF2TkPX4ZJD3vcha38MjY4EX9juZkZtAFHYsYJ21EmJiVu",
  "key31": "3xcrxHF4gfgNRRx9eZL5ppeUXExLQtANqc7mN7LnTV3Ky1h8jWkVXx5iZiBxzJcfFEvCSz99sow1ckHbyAWDWeaF",
  "key32": "2ygooVdY6gYZEkgYBGXukPkTQz2LpJexLiUu26yXNJHz8xLArsPEEtWwGf397t5Uu1E4G2ofCc6Msw5igpSWSq3W",
  "key33": "pS3EMufpCJdqXCEq2i6AWDfPziY7bvJLggFdHM2KEWSNGvepUHWwkSDAxGPDoqjV3zQXRqt1wa2Qh3UPjmpBirG"
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
