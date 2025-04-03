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
    "2VFhcdyewbPHw7TsxnUE3RETMaG75RaJHHBawQDrPZXfNaM9LKLGzvq13hyN2Eh11MdepNcy51gW8JiHCbtRKuxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hMUtbJHPE8GfzCq9ZgsjPJtW9Fg5FSe6BaKe4JjqCahtg1QKxNE4sS9FbSZ1Sk7p6dje9AFQRohRGh7c7gVpJMH",
  "key1": "oJ6eomMGWVjut63nZjmtNV3Sb7wDnvsn1vQhaw7rWzouFKjmuoT7paqKUTJDopxHzGVLRvu7iM4tSsbfwPfTJYi",
  "key2": "36YJeadMNjBxKw8osFRnUjq9qnRBK7T4WP5nrT59KuQWgkgW1kRvHcSpU6P1Sx6txLMBfmFqqVvdSDRVpDBXfViU",
  "key3": "61E9rS7ra8T9mCyj8uzTUT8eqR8Wq88bQ7LRV44kAL8r5iNi3hbzr2ACSDZHVDYuj6zFe632qU8aTJrLZehs4fHw",
  "key4": "wKPc8g93AAA24eUN57XEjN5GZCcZLYitBPmzDfJ4hCKV9khPhutJub6tPexWu9auFp2Nje9GnDuWAzKbRyrVpwm",
  "key5": "DgbukRqYNT34nwPUvCAmEBA5XbsWHM5ZBQPARoVcYZTXrVRXX5JRJvAgNwuvCx3hyWB4gS62wLfzjGZsuhahmBu",
  "key6": "5XUScwn6QJdzQ5Bxh1XEA2ru7cXqMnx1XBbk3mcoF3kDtCUq55wkzwF84g5wQXDUZo7Bt42V4N6Tj3apgDrYjDFT",
  "key7": "5gLbfjkDMQYGm9AVmjpMKS7YR12WjZQVy3n6mKFn9PidsEmw2SYqa3sCst8GC2t1YT7usFrxdVrPMZG1LNBEZVMg",
  "key8": "2cCitEByfatJ5oDgpr5voTTAbdaMnf9nLRSFxJE4fwmYchPYkqqXP7u8nLCkkoVg5DSs4mRWZJs9LAUEipKSTs7Z",
  "key9": "EW2Tm9RSof9zhXPPf4daPkh1mhEUNGciSMmpvtVTdEZd9KawG4WqWQawvtgjQcy5Bf9e4xUCBq56DD3ZvdjBgyH",
  "key10": "38MzUT7yAyG3viM69Bpx6eiARQ9ZPz3mwTYTiMRgkRcXVA1U8X3RHoreZa9iu3sDC4EYxo7UfpDcS1S7o4fa1YiD",
  "key11": "P9PDD9P1TSELqddKB1jS7XrmJn96dkHqCzBBSp564hRRB3sV6uCbPcHoG1GMCJdAv9V2Ri8mFLgXPFtrvHXeLMZ",
  "key12": "4885qwUNZ1bvsH7QCQ8Wo1LcFGzZYDnLJUPYT6NyEz6sRxTmvDCxsenF6iVS5aAen7TEBdzgzxcrVwhTzVTyBR3e",
  "key13": "4SSc4txdQ3XzVQCY6bvQ4ZxwSuG4gKaQ6PJVHpFQzmboYjYPKzxyb3i8ZQywRxefzcLc4U3nSgyDU13vtsoxdAT9",
  "key14": "jxNBa48S3KNGAaUh6XWFGia8UEJ652BPVk7BXYy93ukg8Zg2pEWNxNyKFibH34As7NNYZPb6pibxstAJf5Vs6x1",
  "key15": "3SKDurFYHhgbsDL92U2uuunErw4RjU6nfWhfFWPnwZEHnB2ydfUispx2sG5dsH8QXWfUodPCTixWUoMEoXWcrz5R",
  "key16": "3nGKaNZJpKKpcbmjzQw9f2qpy2uEJL14hUsKCywiCkXgFkLpeaRmMa9c413ks1mnaAeNUmSkghJGWZ3ZyqUiuEGw",
  "key17": "3GoL9Jnip51zaY9KrBpDPVvhitWbrAawpzocC6pcJYFNR5yDVAK7RQbBCMk8DCwesRvhxYdxgQmfaWrfP2F666AW",
  "key18": "4ZfnTT2tX3W3JeFdQbVJgyku8k387feBgiVQoTuM8DMud2tvotvemPcdApYkGJZDJWaYdoqBQT3nwNSbtRfEttFE",
  "key19": "3n4ksu8ww8eShw8ANjiWSHtvCWVnfboBZ6VkrsL1NgFp4K1h82sm618b7xvX345DcvEu6KNSr9r23XxPxEqJF32P",
  "key20": "66hY1xRdkrd4BhUeRAw14s969gw4USWxFE9Fmkn6vA6n2u7W7rxDZVW5qMe6GHKHbUNhTG5fonBLkMJswYvRvhUo",
  "key21": "5SNJUUxG9PirjUcRRJqoEMYoWQhFhLVR4vZEYLBfuFp6gHKLTisf1Lty76yXJvPhqBhGkPsZpj8vxFsjk4bF2FpD",
  "key22": "ANHb4HrVy4KzRcvgaPmcCA5RABowDa5t8SRM66ZJPaheriNDGfxYrgsSazWxgnVuGB6MW3ot5SuBEaEARhe4Hww",
  "key23": "KTgk7KCMKw3sFs6zLjjvBcXmLPr2drtraLSzzmXPtTQtXnj71hwFXU5zUP7sGvVibJeTvW2ocowCtzpczStPRxx",
  "key24": "4JVkgErXajdbpDqy1MfXSKNo4dxxtyKCwrczRcSJYjMufmcF6J1Lxkqcu1WACPzB94nWcLaeSc37mKE1zisa3DTh",
  "key25": "2haTeDnM8iiQx6Y9mZQAdM66PmTEs3t3cKiEeCHCNTaytX5FcKX9x12tHJDNmDYZGJz9WmksgHBoTWTJnxhbDjde",
  "key26": "YqS8e5ducEfAb9LtdgmXhKWTmdu5Nk9rAHdnGPgpP33Zqq7XCVCancxJYJhD1GM1RjkbbVrodh83NRpF8CD6DnU",
  "key27": "V6CifdYqBqcASqshLYn9gAeJrALYbNdp4NPeqQFvdKycDo2e27rovBs8NDHNKBS9fzdPMs6JpE4JwEVk4pycJhG",
  "key28": "2eXv1b6nEmG8RUMjH6yeXSjEbCGHid65mWzD2cWBywZgZ2WW81Ur4knmmjdrVw5qSSDtiy5SPdgZCaTN9XFrXqKR",
  "key29": "5W7jTy3iugriTvGKKwCNiFGFHvXbmXvcasGieKn2doE36tFLErD4vuHivVrtGNP6zowQdYVxreGWvCZvApy8Mrxo",
  "key30": "zpKYK99nAqbpNqr5Tx2pU4PNEy4xgLF6eaG6oeTcsHH3Gse1bTjfJbLYe5uGxuknme1ojBkwVqNQHnDQh3tXuow"
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
