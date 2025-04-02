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
    "uJRSqUysNQA56xXZFNrVMByZJw9h8HddRMWJaTi6QKzq8s5zUKeZAr5g53P64PZH7zmYaDMAdg9YSps6gbBG1PN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYpwABYNXvAeoNkvkFvGuwYnvnL3E4hyrZPRAKEfYt7wwp5EK9egzqiEujPDetWsHeXiA5MxKkAmfvmAMkM2DsZ",
  "key1": "Hq74yRepr2JyuWeTd53mrwhUk4pqLiEwS8HPvxxbBh1wMpAU4WV7M9ycsaWFwvCJzynJkP5QE3f49S4B9faJnZo",
  "key2": "3TtGYed5zfZUJ1PicvVVfY9aGqfagZ5XJJwzbXyGaaD31vNpY16BWB5UrU68qNSb3RjzsTCA6MDWE3y7BiKS372V",
  "key3": "3pcBFm2ZZMF4ra7xSYuHBDn75X4kpPzabAiNwFTwHDnct4pmioGbfw42QEXDq1YmQgKeBe79VfB2uETMSNxVDBst",
  "key4": "WxVHVMHSabLVurpf86NTtpVhGWQrXQcNncSG97nGsWg8eWFiLERpf3SGhRUG3Ke5gmt3FtYY1AKsYQo2bMsanEe",
  "key5": "4TquCbRG5ZYb38XhLDHAxcDzuuuBxd5Ss4EJyjpTPReZeWGqx8b4MP6Rm26hMt88Fm4kpHFYNaBqizh5ZdFShDMw",
  "key6": "5SqjGpJoaDuoTKATZjVtv6T1CSwgRJrfdH6yS7EGE4zqV51WMivP6UaKdL5psiWFZrA4Da6fEDXAr66gy9EJeioN",
  "key7": "4K2CBQsoeF1toSzwwYVLMZ3H3wqPD6CvWCz6xT2HNFtUy73ewG9rU9xKbekgZDsnnitRixMgrSurxguJ9ZRsMoii",
  "key8": "3iPfxr4PET5zhbPEFViJXsGWnTFNMTHnZ6mHzmTEjZDzWJWeNvDaVWchapxV6Jneh9aA3hTcPyh7XtxpqqhehV4b",
  "key9": "3thoWDws6H3t6gJGye1YwNN5SZszdMJFeHRM8KqARdwMJT6KPcZQ5aHJ1ozCDCggYux8jGU5RrzZJKdYY789mHbp",
  "key10": "4P7smC8wfBvz2hCbxAEdyVXsFhX1NDF6cpv93g5Zd8tyRsNxsB3Sd7m2UJ4XU77owA4JszT3gQVgpG9mjBq9YApZ",
  "key11": "1G8MwNGsmdu2zFATPehFgmp14ii84gjBecWtp8HMD9iLDF5fGVdaa6VNHU1C7oy5Nz6BnD4F29T5z78j4ikyxri",
  "key12": "66Kf91tG7YTJsbkNYGNXKp4hRcwkkXLTjhJa1ej6gDfcfRuKw5mrarXBkTAmKX2P3MhtU2rrKUEwj8JS7PKt6vvn",
  "key13": "3A3FccoVMj85LKxMsGWtCfJFr4PW72soGLDUoohKz2y8WLmh8J7CYnEPR93c7kZ93qeEok9eK7wQGHEmgd9nA7YV",
  "key14": "6VzFTn2uZs6AERtfCuJa8Nxi6b5LDwFoMhTFvGhFtyVXgzDaNqxtAhy2gqtFce6kRA4ESkk3qVNZxf61FqDsqcZ",
  "key15": "55LmtWSAc5vd9tPuxGvxhXB6Z6Bmqd2QFHBKXfPs9EQQJUVonHLdZuJceSyL2wXDK77n1Hd9D7dYX1nh6vKbPiHx",
  "key16": "5s5hAQat6Fk4NEUyM1BAdUtYtBErADgVtsMC35te5Fq9JkGbNozBYPfPbG7pMU2d8eSxW7cW6xnQjejZaX6sEDGG",
  "key17": "5MmEQFCfumDnuuPebUd3hpofd2k5E3MUosA4nMMRKXQ4dD6tXktd2TnYKis5Kat9Nnbvt9H9MrbEx5zTGPCcoyE7",
  "key18": "4TfQ81ejYoPJjhatHsvEBP2kPnnzgMHgJabo8eX4Vdrftc2eGY9DzTgky2sRFY5Z8gwWqJdy87oc5q44yZUGLhjn",
  "key19": "23aRmx5LEVa5a79vApLsTsakRZ8AhhtupEAPTodr9PiA63bkH5wk1Boqd3nXKPER5qGbZLfevZ7GCzoWqptBRfZG",
  "key20": "57oAbQAESodaaXPviHx2NGAT8VUguXMPNLToAHPGGWC8ThD6wCPnJu2ZbbSAUgoZJRxJzyMh7fEHRoKj4xwQSJjE",
  "key21": "4ko4kDeKgGQ7ieQx4Gn6r99sX6LJaNKCK8SeJyLMZZRUCXXTtMizXomfoqh4LnXaNfRnc91sPoEVwJ1qG7zwvdYL",
  "key22": "35nf6sMQQ3NWbqNfzXAVRtdNE66MCrvGR17esqAtm9vLb8SX7SQeCGktA3PECvP6gpCSzerSg54Vgq4eAD4CWX7H",
  "key23": "RaemD2UW1o3rvcD7UgKUG33zVXFKLCZguRDK9NZwsUgeREPZRwkfSXZNaDHLBy11dMLT9cbFnJWLWoDbyipsA9g",
  "key24": "6syNfUHoU8CxrpTtjRaUpGA8wp4qeFxu3v8qBSKxLYj74g4UxMcxmKaMrxXHYqwzaprwUDTKHsbCSgsnQT7MtdV",
  "key25": "4bdjotzGRJCeBTsXQ9NHC5WxqJdKtT3qyXfYAREcuKL6zpZvoBbLTt2L4avSu6feyjevzjpbPXCXJDFxfFw51xRb"
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
