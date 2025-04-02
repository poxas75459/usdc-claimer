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
    "Ar1ZHpcYvF9bgkuS1sbKK7tTVBMTBCzyP8QkmKDBWJLrMGgzQPUEGQ73ecc5k9xuvrRM6Tax5EEBfkfyeQL6YmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qfmByqpEFdmv6n1TiYvRuHH5GYkDE25GbmGzYcfBnCvexQ1Lajj1LKmQMwgerir4kQB6HW6JBGkWcwGCXFDxP9C",
  "key1": "44kZphbFYyVnyhDasHFbMCXGETjeNQrxisefYs1oGxC5pnaU7rsjvpUwjxQd93Q4geM79mYY4xCAcAr3amRbydsR",
  "key2": "5B6uAHA4koeTPeMsALJfUdM4rNSukKP4ZHNJ1CvG84H7F1nsXwEZQ5qme2h3nqfsSAN87j3ci2JjEpsgksJKQDz6",
  "key3": "fTJCJP2Vbm3woLVdzsQNgCoNqdrE7EQvYpvc9Tjquw6u1aJ88QnAKAkVDL9zxFFFMCMYyBhn1eEKn9fHtLM1YQh",
  "key4": "5Jfi2hd1UGq6tgN14qjktH11FtEu4qGRe9hDmbKxbBbJa1DdDe3P6VnnCfaQtx5T1UdY4f7fbvzu6zxo4t3NG76t",
  "key5": "wQmXra7mqUZE3xstdXSmj9cgMZ4rgvzYgwQoRj2ihgzQLiBQkLpMG8MfQfgFNnrpMJcJVwUpbiwm7bntyCHd43y",
  "key6": "3m7EULBXQzF6GrDduhYaTDzw8xdxdPQ49BjURJYASCemTUnxJcA1bhJ1eRUgkK5mZhZ1yYoj2PutHNkfq9LH5Q2M",
  "key7": "GiBSYHdhiWg3MeECNgfpUbs6AnwKNZESqeM2bEAuh7k5ze9LrkcLev3h3AVapeG9mdR7UHKz2M4k4aPpsaPGbt8",
  "key8": "3HhvTUDpZTUGpS85bokNsrdkLVrmLRgWo2HesrEahGAcQS8zWDTzfhywRkVZM47QhvwbGU3V9Nbpikj7NEvexHJi",
  "key9": "45e9q3QuxHVHvsjqVGfMUn9CUxDKsUGSUtPi7TMrCi36XFG3Yz9KwCZhvHQMXaTeqj2zLdE8P1EcRyJeE1c96EZ5",
  "key10": "2KeugsAyh6daZexNJM1jJjAM4sz74DxGsRC8s2T1iVbpu6GzeKem9Wfe8Ec6RQ1rhwbacs8gjnHLCQ5TZFsPHDZx",
  "key11": "52kvqVBGrtkfJ7enmUh74UNGbFZor5FC6GqMbcvgD2xi7mifdkmXgDFr2RwPqJc9XXwywiD2MRtZHFDiVmmV4P8P",
  "key12": "3zEj7L3tZYRPCbABmfd4TAXpVK6KuAfg8nED5Gcr4XqG9HUX2ddb9dXZz6AemMCW5uGaDtBj6HWaZddBoEg88dKa",
  "key13": "2NMEbVNPVyPzG6voCY6wqbTZtkyDcLm4nGotnXudFuE59wXVsxi4vUHXNyTr4GycwAQNvAMQyuB1DqX3fC8zSdaf",
  "key14": "dgxPuE685kSyQMRu1gvAkVEcs2rbG1xqz9wqW73aBBbrT1wuFa7rANAubqFqRosaexdUoroK78tLrPhjYt2MuEf",
  "key15": "3vHuSB6n2r1SmAzRtcomwQz2wZf4rV3ictfxdnZcMyP5dfDK3dKqJY5KTQky2wrnLSVvGYWtvPgCZSsF5kmceyMP",
  "key16": "23tdWLJ1hhTyvJ4cPXy6Pwq5XSxbcCUBStMqUMPcFzgREGsc9BvFHVZWgMVp5VJcPCLUuUoV7uSPca7jzCGzNZkD",
  "key17": "33WijpLd5zu5nypDwjf1tqLeMkxcoLTF74d59NCe4BXk94FKudkMTF67cnUNPfMNER77gRsjTRkvSQyEhpUYa3iB",
  "key18": "5evvDnki1jMjAzW7igkTkSL6owNy885PAjgnY16CH8zSBrriiezt6EHNMAupxwQgAVy84mkRnf5kmYkvzdbJw8hQ",
  "key19": "67q18HbRYrGyUeqKHiPC1aHGcaeeTV1t2AyHbyjbGFz14K2Cf3VMzs2mYhxrQizHi2piouWWWLoCsL4Xj8muCVce",
  "key20": "5DpezjVBrKT2nCNAoxUqq82MNKJWhBoyK8u4nx21XnNCDbxkJxefZr2ZFPMYhYoByvky6aMC6tVhKDryqAtjVMxq",
  "key21": "4GT3Gggj9xwM5YaPWhtt3Cnfp8dc7vsioEyM335sqNvmhkG3NjRnAJWyKUuiCdPQQWFP1EBbMd8ev1pP693fYuDo",
  "key22": "2Loajwm3gTV3PajTAzFMdU14SNEkWXHtUWTm1yFWpNTnCDY9DiyJyquj4MmBCmokgSzE4UeQtU14pjQoJsEj5G2f",
  "key23": "2RsbMpGN8eDsrvE1Q5JYxV8MkaYAxApV9s1GA6kWpXaArohFHDJAkKEudjytoh3iKkbh3pu2VWxDNC7Nsmn4xsAB",
  "key24": "2G1fHFe7Tozi3FkMTJSvUtzJU7ZcdmWjANySWGDrVudadFbF1yz2VsKEhwTNX1xYM8JyDr7Ft7m3BEBWDyXuh9yR",
  "key25": "2YZfjqZesjBSpjSAdbtBMdi86eC9rtPcjA7LEYjxd565iw1kLVUuVsZD5fiUkhiJZqeb7GXTpfzGcQsffJbr2nRj",
  "key26": "5oNuxi4DmE1An5e7KWzYgemcSVJVRSeSvKGJ6AP6XdcDJoSFfPhUkbnvYsMAdFC8quPB9dvXBoPmefmPAy2MhsCT",
  "key27": "4ZKHPJHWjSJVRo31cSDpzsapyJazZPx7P4Jbq9s3sWfZZgjgLG7ybunP2m8ZHKJnMDb8BDQxhZa5bdkBh1FctoVc",
  "key28": "sEu2vSNP2vLziKnXLFkKQTY3stS35245U7TgZZnwq4wE9SNQQkmFX8a1zrtq5kSvj6N6qz6FQeRSvbQp2HK7yig",
  "key29": "4q7js3WfDZ3ACeNLrNa7u1Ko7NzdnRF9JzYv8zLqed69tfBVXmoFrj7qh3UduzwRfzyqvBhiVCSnAoDzfbaj8U5U",
  "key30": "5mXC8gH2UwuiDzorGMsk1ZS1AsoQCvsJT3F5SZnUL5R5FocdMSe5sehuRFB2syxFGqcvG3YEt6NUK1cgBevBPnxP",
  "key31": "4uv1pVmCDLSVLwXmYRCxdcN8aa55jqj8UFqBBVWL1PeTBVFRyvnLTvjt5jycyxnBWKzCM2APt3mF2Ud83BLuqkZx",
  "key32": "5R1TdUKC6ewZGiRooFyhU3P6ukCGwDnXcsyVS5EXMZwYMWxUUWEkhT224Ttrp7HLUmLLQ39r5vmurz9Ktv1voafo",
  "key33": "3ZF28Z5BCmGf68oG4NrMgDZFC5dCT4kDFii31aQvWXfCG8maWfm2sqARAhp4GP3ZvSttuWqeD59QU5k3tS8xDmZx",
  "key34": "3ZCwb2awmJ4hEuSuBPF5amSwwukWUmFXUyGGXhaG2ftNc9RcNWSkxwC3JyrQeYRZKb9YFcfUHMRq1z3PM9GNNtXR",
  "key35": "ANToxsAims8WdBXY74GaahrQ9YsDG7f5AqATFy9JgfVTRGxKAPsz3Kq15AhMY7RpDhFpnYonKH1HGHeXFxfkLeq",
  "key36": "5Wszp9VZfzczUXK4MZY15upsWGRG2GzRZqtXB4MzNFLDYXXEcBzX88bFxs7AmJDsjWJ359NPpeuo9Q1Hph1K68Kp"
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
