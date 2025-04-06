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
    "rHwFJ5mWqHq2soDMLvVDr9BPCnYF5npv4czseRX1Z7ebKnLUfju9LKzWrqmFWamhPX4odaaobXpRBjfMvvxEeXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7bUR9MDZFzb7xFqChvvXkRm6b1R6S9yXStcrmSkdjeCv2o6hTYdFGAKeAk8AWhsRK5PKYB3ZKYCMNnSUhPjyH9",
  "key1": "4ChGkKyqdX8DhR9RX9o49B7ibTU9AsE2YyJmnRebr7vsE4hbybKCZRtV6b3bf9XDW6YboQumjXCwpp2ZAL7Vvxpr",
  "key2": "2wgWbrqjf8YHqP8UPAJesDE8qThM9jKxZPZwFfbdW42nqXBncJETYCrKpsnrQEfRzaFSMsY523Gra1F25Tx8qUkW",
  "key3": "2rT8KW4QWu6GzPwBBNZFjqyvaCobQh1tzWH23DAoypn8ZQkvDXAkFrnikkemaQ5djd7H48M5Adh3hHvqS8pDNdW9",
  "key4": "5C6jQAwz9S8EJ7Q8rwfc7kHQ7MGrWm4RrMQ24Ch4JxThHFx2GHQLFA1zdfa6NfMKRoHgWuK9Js99GMDHFi8We6CV",
  "key5": "2xbwWuL9KejPasPKDuSxBa7vRSMveAkVnEMP3K2er6FwX1Kx3Der6Rkr8B43Dqdmrr38AbRjdWPJw7U5iSG7UoWQ",
  "key6": "QaAWD6k66RTfyHY5HcR43oAGnpv7sG7LcpNscsPaHP3i91o9AtnbSLY3bFg6GvC8cgJdVePNfFHf5D6vgFzKqQL",
  "key7": "odSVVXfHywByecsXe5PWF9QiwFVFkn4ccAmZork6LSAitjXmhoJzdFFG2spdvbAqZctcVkQi8dR62vmBXdaXSMh",
  "key8": "56Me4TnBKjJmVoHKVR4CWVEP2JBPQ24BUrsKv6757xVonf8cPb38RnbCLU11jxhPEJoKP3prLnSKgLV721xKkJzb",
  "key9": "4nUu34ueYXFsaExDbt8QjNHA3C6BnTwySNJz4wePbrE2sWex7zx8s9w8zRDzKcGL7PsVq9cX5wfNEhe7af2r9aST",
  "key10": "5n2yHb2k4J3pXo56NxKdcGkui7TXRHxwdebcFKoCHz2aaLBWup6AsyhTC2bJLFVJRRRGuyakWUMP4y9ZeKtVavUy",
  "key11": "2tKggDsz45zQwXUkGvkbxAbrfuFckrd5fggiPTqvwd2QYLytEcBbip5pPGB6PNb3wWyiqazQ1xkWHrSHeGFXiWFc",
  "key12": "5kMJbaWEdXxocGwdo7FQGG9VSybu35Usfq8L8XjtcVo6oN5qctPygEhHxMfHHPVqfVr96d4gbANp3xhMsf1NQozG",
  "key13": "2iyP318UXuTV7qDdMPr6ZDdb3rh2NrnXrcT7NnibRagMVCwQRkVcromtFaM8wQFSNbZtMSCGX1uYbTigXEaMf78A",
  "key14": "5p3GuALVMp3xwmaYxiiUwEf46fsHDp3Lj3wAdVQtiKrGnwLw8YsBiReoQAAMQQndrq3Mm3Vi8Rsv4fMY11tKTca9",
  "key15": "aXzjnWzLPwCEZ1zMgspp49R4zcYtPa6i2AEtt5fjAGftpAocq3oQWs94WoCifUMx8J8aX3vnk1Dco4udSrUgM1V",
  "key16": "55vJT1T3oCqt9r2qiU2pXx5gKTDW2CztmsJ2NoYuP2xTtokQcQomfFh4oVb2JW8eXacg1r9nzcz2aQCtLZYqUi8D",
  "key17": "2KKL44HUowXW35af6A1hkrNEN7QXwWCxmJLaUQ4L7oFHgrnWdaGp6S8QgwT1pfoYEZtVzdpfGsCwUtm4frQ6KPB3",
  "key18": "4nHvssf3r2uF7WnxSEm3GcYzVh5SdWdKvAfsZDWdGyQhxLSGRP7whB8VfAT6wk2shhhivWaeQQ2LTJHRfApGJ3G8",
  "key19": "52TZj4wEnAUhyQyKpSg6i4E24MMyprhm5HV8LGpcqCknZVGkEBAL5hxSLXePGeHycDCCsENr1GzjYFiXDwhP4QCP",
  "key20": "2PhYFm4VoaZ4d5wQ68VFovoFcrAyPKLH6SgbR2GxSefkCU3iyjHsCTx1HuHs3UzRYjZBaGDdWypd9613kzeAxKt7",
  "key21": "2un9CkEue1c4yLmK9m5UQC2CBhq8DHcSVrWWz2EM1Ya74Ux9GJ3wtaaEWzU2gMgpDGpmC3mj4KvXj7wyEhDrfjYC",
  "key22": "62MQRFT1nUtUKyFhJezUrY9UTJ2jDWfgqH5JEDQyCrqPkN4ib1WCrb4wRJn9SFckShUreJh14A5XvQzMBFTGFcSc",
  "key23": "5ixkG24msYXLP4SWwJzf5h47sXWdH56FY9b6dFsAEFnu2LrYN9dJChE5hfhUSKwYqXzuARsfiL1KGg8X6Jsww1Va",
  "key24": "5LvYXetx9Nz3uYzoYWSiuUjmx9hMg3v3QvZiWP166HMcAVP2PLRSCaehsE8UPYuseNweh2fMZx4FdVBFdmtb8tb1",
  "key25": "5yedKU8we1gZLamiZ7AbhDcBFHaErbp56snnsdvrAAXPU7uyWGFiipBKQD8hHKUEKtYG86HfiJN9wBHrfTL7k4H5",
  "key26": "C82djmpjs2rsaAUqGrKvqCqzEQnucEtuGrJbPoFaBizDM6QsUJEstFtLHoxS7KJqKgbLRLEzVc43xNqBUD69TUf",
  "key27": "2yLvg2Cy5i8KvkN4LQyEfpBcAgUj96sEhv1LmVcRPQBSmQcNtMmRoVTqgyNskyQmZ1pechHEKqdQuywdqBXzfEPu",
  "key28": "4rUZWsL8wSToPGtL4dXroMmSuhz9Zrp7BqP66wFL7UZr17tskuGJ9kdqk5evErjGt9oHFfHob3LkDF6hoehHWihp",
  "key29": "4qAotR7YidzLvSvqs6xSRotF1EwomyYfjwGWokqFQDjs6fWg5SyVJ3DJHbWo88dhHGQuWSStzRU31pBcLBhvhpvk",
  "key30": "5i4WRz1zT3bwr4ZvK85BWm9bnRYNkVAAyJDVRRCSx2muHHUwgQVo4wFW5BJn1NdjirectS2XJ2SJeB95mJWd7rUa",
  "key31": "4AQj5YnGEEGXKTZJ5bNsvFaSZixY2mxvBLHjX8tVbS9wEfGA6jmcbG7hUw96kg9Ty4MQrVVTMnWi74jwJ4S1uofX",
  "key32": "4XLcnXU7oPjudXo8xKWbUJEpSWZzvSxL5Ug8EAYSXrmxRnLm11TqffpAHvU6qP6gQRSe49BBgqG5P1ZQSTKnehjV",
  "key33": "5nSmtrwFqE8LH2m9iup9shwDokTb1tzkpTsva4mhWdcL9Qqvybvyt8mSachc8L8fj6nUY9QWWUKCQqF1wt2n2thL",
  "key34": "29bU6qe1EgewnxG9Ts1QwAWXzEz3YZKuKit6J29uvM1VLQABmavjwcap8jGmWLBAririTBPyxfbXbLjWskbU3NXQ",
  "key35": "31NR7UgALMBPH5ABEVEo6X4HNseSc4eVL2SSF3AFH3RxRvoxgTCAXcq5LguZ2tp19ayJj6Zdyyf8n2Ey2RwdfCtL",
  "key36": "DgcGsKX6GLcEcbTGuWnuev63aFriK299PtLuVpqxVyjYfmYQfRzEwZDZ7qzvjA8kqtdVpcLEQCVrYcxQYU1SRfc"
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
