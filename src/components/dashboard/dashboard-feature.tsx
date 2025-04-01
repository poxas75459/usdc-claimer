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
    "C4nQYMByEtfPr1yYh3a9mvhN1iVedR3xdLK56wnq5wLsaCSkBjfsMTKnDU21rN2g3rtAcHnsDJUwrsZEsDQTuAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dv5wVefQueT9qD6KA3aSAunMXBiL3gMbqxno39uXjR4JX688kD6u6TpPwquLfn2c1vECqqLVfWDSAzLqgyGsXvd",
  "key1": "2jQfyESphD7y9TAoSpWQrBmPHpHZhUvK2BLfFCYVMNMzR96YevMcX8ccmaVbPFv8ZQALpD13uokqEAu8oivc2C8V",
  "key2": "4aeG4HvCdECYNh8bvBq3i2UkMztx5oTs3yAnpZPdqd2uFFaA8UQvKroQepTb7GLSyAvJbp1P8meJm4ohDFrZicNu",
  "key3": "CFvsr15A8nKuAoEYbXVt3CUdKhyegg4wujV9D2fAx8Msj8gT18Po65pYiUkgW5y1Vg8WqgGDw4jRVkHUCKJTzok",
  "key4": "rUimLFsYBso3hV7zaFo5ohQMnAfkgxge6YwXVkuCKHXksdXJK1c1oNdHhcEBXAbX5ohAveWZTVCn4zFhcejxGXJ",
  "key5": "y7J4Zpw8qiJcZxPc6kkEvWus6EQGKdUeFuHfUcRmmrvXjVgrDjGq6pFnTMnWjVeGgVeVdSkmp4sAs9iu1HKva1P",
  "key6": "HXyZ1oMsjVJ82QfkeMbcfkedGFCNP9aL47HpFqLntmNzfvkrqDLedkhnbEMymz5TaRxKtwRi8jByveyWpMPszXs",
  "key7": "52WnxRM86A7D5VHf1eB4wg2oPm1HHFBRiXkdTD9kK22fev859dsAXDnV7t9SCpodkxhhWCrkqQpJmRFfMzg9dd3L",
  "key8": "2RXnTAaGsmEYEo25S66PNuiiA97XiBpQ4cCRgKRWZVptHVMWhLTtwNxD6Ans7s6yJrRYvi6gB8ahUPnQ6cqbDGqx",
  "key9": "2DtFRiyDY76nkJTWYJ53H67sRyx5TJEofAC6bHBJadDxnTL9eY2sHF2mGDv4jNKysdXMXYogMrZvzXpXKYYSd59m",
  "key10": "3HMP2uFVGGhEFbKkqHupQcyGeuYXxBdHTwZvgArvBxNx6ajMnPgkc5jxqdargzycwW2usGb9nftcjeN7k3oJv31e",
  "key11": "3uLvNMUsF2sSSnsPjKs4VVHzbfAkLoF7iAKLCsc2VT5HyjLXyhisQJqVVSmcip3NNprAFHaXk8q1YkSeEaWzisSf",
  "key12": "54mQ7cshsSmzjg9Sn9rrGSB5uTq8ft8Eig9tv6EBMSE6cpHgwiAEpCGFtEW8BBXazPBZ4Ca4g7eyWuFJ5MCHdcgn",
  "key13": "uLrwRAyoZztmGyNDXhJBNkohe1QGNDX7GDM85vXW9ixLGkPUbbcYzgB1rV9KxErbjGd4QyxQbJGPwsXUSV4MrVC",
  "key14": "2Y8wxU7f9EUqjFZcZYyYnKNf4D58kpZzm2JY8mamrQwS382tdGjA11FUTNdfTzCh89TiDugBdsttSTapN48jWsb4",
  "key15": "5ghBzxWwiSraaL6nkPUxcHSGiaN1FBkusReRy9nojGWKdQaeSGcoz2yfhDuswcLGVM2LCQy91HDLSBKo1QVZV4PY",
  "key16": "fEJ7v5ci6PcoshBBrdxNd161QuSmom6QQ8FKPR5BK496YfS5QyTPNMLGhGvvDznbGJus9Dk9gJ6yjp4BtVzrjyZ",
  "key17": "4Ewn3sQqL5yAMBxVEWV8LJN7qQbs7chp8XnC6tpEcFu7pPHJG1EptiGKWEchr9VjTuB3Nb2d6cYwkbUinDkvM9eN",
  "key18": "uaPwdVHxsL8hapQU82P5w4zLeoxuKuLAYdCvjLSjtA2U8mhtuRnJdvMonHTCDmxn9TvUdRp6owouTzgeTRC9GWh",
  "key19": "3dgkVAyDpdTnZibUQg8uf88z9P5AXxhEDBMZiSQ5XyBHMKRk4S1VZGjzH4bxHnxE29uwbz2aS2KqxKTgcjzQJ5zi",
  "key20": "33mx2HBwWVYYAzpkTahr7Gda7qMekyrHPrMewWjTsuc3m6DfQ6xbLMD531Lkknoxccte5Zwx7ooHa2zeJJftc2T",
  "key21": "3qzvJB9i5BWjggMDSfs38fMiEZjEFi9v71RbRh8Es9MXdYiUNQ79UvqLvibEFyeZL7QHyfkB69K7eSc8A32mGqhF",
  "key22": "2FutGU6Qw8icLikK4nmDpqVWVQrQEPD8th3Y6WSXnTV8eSVPCFazcVRRPXBgve4vPR4t3mohjPyrR4DZenefK6xv",
  "key23": "2V82twg9ej5Ce8yXz293DUR4jjdPtCcxUcAY5VnyazMYdQZCp4jTnKoiB3YGH1bMCPgAB2UMac3W9Wit3QwZS9FN",
  "key24": "2gYJCitTnUmEvQ1oWe6iCpu1sPSmnZBUVRfW2LaXmypxThio9NxVbnYKt9sxpj7gsTEDkMz6q8STxycLArh1aPge",
  "key25": "4pL8ruG1dWuLCPPYqHwbHn5L6UUJqaPBipbfZfMTBCJtEFy7zMKpjBKNmrWbjmPAnPKuXMAakrrAk2PWqfvqyuyZ",
  "key26": "4nQYDt6q9aviQ1qptNjudMp9HahaaySRwJG75q1Ei37W1CXXonsC9in369HDNDvsQNiyUgvHSH1RfituZKusomiL",
  "key27": "4LnUvqSaruECtTAHTSnST3BGJTfBRZHkq824xmkHPmhS6YR4tX4MEx42Z5Z4sfa9SnoxJSwXu4JFEKw9NFhquCpq",
  "key28": "4XgVmdW5MHxmJA2gBx88u5pfUojF4nqJDQBswi9kimFtHJ1uhWXGY39FB2JURNxcePdcynxvhPs57dNMo3U7KUfN",
  "key29": "33xvx1qvpE1ka6GLWCuDoAM7AkHrgUnWpgEWbZYwCayGX4hnTbvZPBfWDS3bjRQ8Psas2UegzahSVc3cD7qzJMGr",
  "key30": "2Y3q26Au8afWvczneTivUpwPE6vKzhKgrVF9DLawfjB2UwfABHuLmnFwCzJ9g8izFXkoaX76ZTMZoHirbuK7VH5f",
  "key31": "5gwkNySzRGpBKauXhijAJmzDQqTUR863La1BBuZVRbV74Ebyhf5GmtdxiNnwQum1oVfDdnGyye2VRd48TLfBieUP",
  "key32": "7SbQpFWiyK7BwNiaJTvr4x4p2uVuTUcgCcq1NKDjj2kZH6mDKPkdbxX85bEzxK4dsczf7eZph8m5Ro9kYVJh6CU",
  "key33": "qzgFLGkHzXoKiK77A9aUU5uhLbpEdHWksMScdC2aLQASN8ZPcvh8Kf2wkSMwHe3rbSGZe6fVEkKT9Y1M6gdxwXg",
  "key34": "36mKwkT6vWWZzJstqHtQ3xMGuJjUHYP92rt8FS2geSTv28rv71zykG3GUGtSSS8vc7zq7bd5wcmmhWc5hH44x26n",
  "key35": "F5SFmWidbwrVhLYPnkDsDrChVLWyiKgPvMXkaHAd5KRTUHZkRYqDuAked9oCMYWw38Hmswnt3L8RqqssGbApVcc",
  "key36": "4iMKeYz5GqeG6ds3APNe4g4uqh3A15BBcK5zDbrYrEbgQ44Dhb6Su9CxPA2SJ5SEKsvxXvUq9zkDSmyEPA1zLEQc",
  "key37": "4CSnr6K4xgxB1Cb28pp7SiHmWPBa84iyc1oozwk5LG7ERYb22VBQatP9eJUYghV9bbPPZxCswiGwUM3TcrkPMZHi",
  "key38": "2q1kf21K6AX2hBsPTvfjx4VsPGegQVcateZjwjcvnxGSu1o9S3aH6HAGpVZ3r2hJBHAz9sPXsbT9EMYCfVMnrAUh",
  "key39": "5LGFNu4TJ4tKJ2kGpL5U1MNTTbNCNE7grQH11c4jsag58JagMAP4nzXBW3wRVCE4J3aephfckiXRxLH45ZqjSzLK",
  "key40": "2kz5kQSQS58FtRCrv2P1ToXmEnub8bfLpW18ytaWDA6J9Uk1upDkJ1vK68wd1SNsxLfZmqAG8xVRi1L3qspcR8iA",
  "key41": "27f48BAeWDhtxMZhYPFw9qqozbL59byvQkqsJ6VxVKWTmvA2GwCqvFiJ69YHE33TSUVEXjv7hBzanaxdTaLhR8qM",
  "key42": "SWijxWTNxCG7yKY5VkrgjD8unLN4PL4Jsspv9woosK1SPQnu7XKBew5Vw22vwJtsDPLoFa6NaSBWDgDpZvE3Z8B"
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
