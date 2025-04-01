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
    "44YYVmEtgdmnMa2EDL5SR9ae9eZe6Ezjq9QX5VTRR24QrVjJc2ZHNZHfDVYLbb9ceexCXtY66pYKjzM2TSbYabax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GxcucCXnWcuoDquiB6RikSBxBKq4f296VWfFtgywS9T8pKtiS83a8sA3UW4xZyh3MUbjZEtpTLfMpTXWNBXz1M",
  "key1": "2mYgPZxiA6GwVdme7SbukWtXF3Ebt2TJKEXjp9AsW4U2zanTbZ9HENf8HUkpuziBM5Yj5jJ6FEDPhJ6vkwKWXvrx",
  "key2": "5YBPUgyVu17mvfT1mvTbhwDyejpUBYpjVvqK6Ehsj5jDJGedo8jnzBJY6fdqnLjXedbJZDyf7tuk94pyvWqN4PPE",
  "key3": "4fQ5yLLezhyeYhzkAjh2xiNtQ28a1FwjKh8bt9ftFN6GNwmRj1JQu4pzqLPhuBWZHqn4Ae7MCPoXJTaSq8x4oYv3",
  "key4": "3VruLCh9TMau1ooX1XkYTBtTtLkeGHykagvzNwU9aqnt4kyKxMAgDEg8V1dtcSEf7QgmZpsDnZVt6RTtaq9XWqPx",
  "key5": "5wZcy1uvQhTVoCd1wN9zPDAQAUMVzrEUNyB3ckDReFPuq3aSKaYmvXurbLfoLLec9GyeYFvxx9ntkocxUewnY3wc",
  "key6": "5m8nMDFZ2hmzRuCkbo7BvepAvGiyA5XohW1uQ43bqeAKfP8j8ecEhrzEihi5pM3DWQ1s9pofLCCur6bRFHrawKKt",
  "key7": "3Uf13Rz7MrkqLKxWpypbhBhmMxBLpyLon2kbueuY34CJCVfj3GMdPWMW3nbVv9xpSLfE3akr4QCG6VVgtxd8S4rQ",
  "key8": "2sa1Wn73q1eAhvEwR346FTPxWMqrku8HZmDqRPBydF3DYuXV8jysQRiWPPi4XvPf5PRETYFrd9kPtJP1XpNCmKvE",
  "key9": "4KsxJ6Xp6z9vfrKZ2n6o3SQnbxsaZRgQni1pPmRdMvBayY6XYQLFVoT7TZwxNrE5rJisNG37qGpgB4B4tLdoaHPS",
  "key10": "eLrrQV3g17bDHPnZMUvXnZhSq5E6bE8oQhiAEa8PsuFwDBtbq71vvNXuxd4o3UPqztyyPTK7jEY9BvVBDNVzUPL",
  "key11": "45aYTdWkXn9cwBf2EryaPdoN9zVedBZ75SFK8vPWznwo7yuDTYP4bzDuQ8shPPp2hqbmWW2QE5xitaCiazDvFnXW",
  "key12": "4RJCM7UyhnTLcaxKmmvqMYqc1S1HrtwZ8rNeYzfc3w9hCY2UANzrRBpi6mwV1yFLix37n97WbRFDjfNFUxFXxb78",
  "key13": "5rcQ1S78ZzpEXervdfNJoX5mJfbc3PQ12MJfTwgiJXzTnhVZRhJJiyXeoNscJQ7TaqEf6Bv6havbvei5FtLxsLGL",
  "key14": "4fsZFLwBt83WaxCsLdXJpTCmBW52w62MWtqSmMWhFsMvuW7jhunfR83ziWHanFsJyxkVZhzDVdXre4bhX7hdQanh",
  "key15": "6zMmZgN66eeUABg8A773o5oaok2pSrGkt1sq5zQMeT95zX791NrCaME7PehtqfMUegauEXtbLcUutHiQyRZDUr1",
  "key16": "5ciRrAaU44FifoEQFMJanKFg6Y4h2kpYQH3ezqr6NvNfbbXM19pUXFuZq85FHVRanvivCFd2CvevZox3tZs5riKG",
  "key17": "5oZEPZk6WzJhDqbCxAbk8YLWCRadBLu6TbBoFWgGhEwKPFtrziBUgwwq7fVyJzTnoWuPb8tvqo6Es5CY2zQY1j7b",
  "key18": "3hvB6YbPLLG8zA9mfek8hUNmUgiZaghJsYpfU48mEu4PsoRFPUw9BAHJ3FaZkTsL3wH44a2ZkjkkEDjYeFMvdmyh",
  "key19": "2fSo7aGfKG1QdYR6wui1d5sQBTp1HM3cZmVgFTwxiZFVqHnSx4GF7GMSDmcVEBDLT3mAbkyGmJfNpwfWZgPst4VW",
  "key20": "4kWCv7QD9i61DqmGSe8RK1Cnu8KStUp9LkcDUBZ1BNKa2YeawvsAeGxPMDR44BKf8r2AdkoZK1YV7L5Et8hSjNnW",
  "key21": "2N8TY5MFmPWt9ysxgET6hscRzsvVf6haQKSo6x9qFwtyjPbMsRnpsYQP4zH51JjoYx2W3AosE2GTqGZFDStoB6DU",
  "key22": "iY7WwphwKzLSQzLC9rNfmyTV2hJxq5DCU8NCfm8AWxYVuySPE3SFSuH5uTkpkFY86esMSqs81C5aZQadZCqqn3D",
  "key23": "kTWWuuAeLHDvB1fgdkVZGvcjX67BXvnCJhCuB61FfrMtXoD4DmFYQrkgaRhNjKLXTDRAWmTEve7hXk7aijy2zqX",
  "key24": "7MHo1QhVFPi6oEPckxh3ZMhfuWL9aXqph4MeodZK1qZJGUTaj44WPnNyo7BiyzMNKBtQHy18QfGFsENQ8VBfnP2",
  "key25": "vHJcgmNtAFqrYsGJ89qziMFSxfKHf42vV45rAXqkeetsWvmwd4urmNiR4xpptdCUQEMznpQDJihuJKSVpWZuPV5",
  "key26": "4c6FYtarfzJAZUZ1diyknsBTQAxR2p6cnMEj94i6iB5kVCFVao838zg1dkNii5ggyByXsSFn93MsMuWjDHQJJ3oR",
  "key27": "2ijqK6Cxt1JYrAjW5HcnG7cjuAptvRyUQXJKuM7pcEdUSt2WMyT1QXHt9JgejbwjsnEQRx8AZCVpP7jNXj826zcD",
  "key28": "4mrNssz6CKzFC7rqjifx6RcPS6Z4aDa1G1D8MBLxC6fzAz1t6s9cKMHRkJAbxazdLdxKKeFg5shCpzD9vG7FZKze",
  "key29": "2JHBTkB2nH3n1dLJEsNMaZfmxRxBgBUmwX2wtCpM2C6Jj8tjYni5xzQYNvszSn4nnxfNEhaQ6TdnrDX6SJBQ7yjt",
  "key30": "pfa6R643mKD1JmhnAeWWCJ6SXtFHKBspamuS8ZboAbdhy1jNAUE633CyhNdMxc4wxGsJpVYm7Z2v799u7rneUzC",
  "key31": "5zJa6sKshp5ybBYA2n8sFoTsiSrWhSfz9a74FQp8ZE4ffbqWfMYpvkw2zXfb7CRJ5naYGwSyT23nvoo8CbCaHoTT",
  "key32": "FvcXWj8jwagiCAVHdxDkoaojAG1WvrnTFuPnxVNqvA9Vg3rfxRkDeCu1FMsCTkoGYQD9S7cTNhDs9pdDm11bTwK",
  "key33": "1Svj9zsnvnXvw3DR2ZyoR1mQBsqw2gPZL6WJedUTCWNaa92dDmCX44EEdva3kEfV7R8Uwcdxaqwizft8K26pWAQ",
  "key34": "skGXASR3qTSQ8uibai8YzfQAgDPJqcuGXUKjvGEWTU9YTs91HhTBXDjbz7g3uoXPgkmxKqH5KEFNtvb37i6bkKi",
  "key35": "4qTQx663MqaRP2tWNSzc6VB8HZPet4WRfFpjGbtmitH3my7Y3NCYkVzMDoh4hww5YP5vfB4yDBeenthtKuX67bLM",
  "key36": "3dQBdJCgW76DQ8gaYvZdSCT73BVKuZXymRpEypryDRUXsWwk7gySKXmP1AyWZvecDw5uzyrbgFrKquCbrMFYnF3L",
  "key37": "46uwDpPNdqtwofGn2Ndgx7pna1tdUvkJBgQrLAkL4ty1AmGLUhBKKNA3J8B7JC4eEqPTNcoTbgkqp9mZQvt1E8t3",
  "key38": "33ucML3t4QHtkPd4ucYKntg6DSK43PZTtREgyWSNbBsEGasmnHbs2xpv4PGBfqb5nRZ3Vysfn3s2mEwP232CvzVv",
  "key39": "K23QWS9dVAteDnuVcWkqwsuPLm7CtG3u724YsEbR22PwBuNGpiHYVLGpui8pR9FcakxU2vtGDb5M9bwnfLASgMm",
  "key40": "4nwjp6cMfAjiPNh9dNarsxDkTNXqEBMsHW2LkUU9K23XLhGayDkMYFe3UEg1vh3sgfcuq3BBwXwFn2eNtf4gLg5w"
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
