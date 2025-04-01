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
    "ibK2KZDYDs31Ys3rJRC4qtxuADBUvH83BTdGY1dLYygD4sLNhsjQeKyeP6psDtzaXcKkSLmdFwVPKPuGpRxQggb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6HVdsFcqUhMtQP5fiCHShCntfyq8PfxTNP37aBrMTxKjMFJYRhkYxGsNtzgbeNRNYML8WmG2aPW6UsjxsiAV8z",
  "key1": "2bTcjpusXZVQbtTtBtNxZrPdwLwSQPFnXeyzC2bRyXamyzeAZa7JUvhWek7eSkajTjVRN73nayhRQpVTqNwGox1R",
  "key2": "M9KkXP9eH2YMpkEEnqzJLp3xv8ogfPbHVyJAiehshveHcxHVXWN6Ng5AxSc6mep74EJNXz7SPhYSw3ZG58V1t9h",
  "key3": "4KcxH6xo1YA52yRMt63dGWZkzkfyhgEXXwEWnRCrvJK299ST3jvFUFE2ZPQLc5oqfELHWewZR1d89StYjSrxNRyD",
  "key4": "S7uMAFCvqTXv6JTh6JsZMNgsdpp5XapX46Kkxjtf43P4c4sKfavNJy8NnTMTTR8vwGXm6fpS5mN6x4CGq4jN5hL",
  "key5": "3wYM3vQDf7u7J8dEGN8AyciFbtXkY2rzBajxcQCwHjFEArSF8t2sAXbL5FCBvR9BohX4AdkKPJhVgLRXbC1S3gYu",
  "key6": "62K6AokRgzN2mPdwutEk65jPs8CUWhQ7PMxzawRA7sGPPkatFvHF4h3cNBNnj36XNRyPqHiTJXc5SywQtyaRBn45",
  "key7": "2iFG8J67eSNcMP7Wdh21Harzd8c4kSpjF8rtSuSPR5mhDBSV7f4QwTvinydG2jGGsCWMq8tAD9KXpG1wF4KPSJa3",
  "key8": "5xm1K9eUpuF1dsA57mURq2VB31Mk6AaexTwzuGezgPWKhFyuzy8f3snNp58stW5tbfjT47Z92ei4XnEKcwg9VUQG",
  "key9": "TnN9fXRtvHuC8ent46AGmfmSX4uYoq8KtPvpJ6PHcWBThu5dxvprAwEoLFXzuBE7HwRWviB8sCgN9YphrVagmJZ",
  "key10": "2XB1iHmhXbKKVGz394NY71kgKmj4LC7CgQBYL7pnQLaqntffsDz2KdjmAFhYDHk8W7vSrNbu2s8TUFbZaE6VP8RU",
  "key11": "HV5RcveGGZKeQzNXNhDuZaNocP12EZNhBeyYVDvCrMjrmTGdfPLeYGBnf99bDXE4zrWFR5vGZNL8oYPPKRejsf3",
  "key12": "51AqXaA7KqFq19626eHGVqC5RZmkR9j25aHAeqxnmW3eL41xEVmmXGvPJTigsMZzTzcHU5j1fL2b5rQi2ghhas6A",
  "key13": "3rDAYPwbW2Nq9hD4xxa2t648EMxSvEkQdabTi6vcUPvodcEsz6YCjMT55UyGe9n2faLbyv22UozGuYMiXK1QKwcj",
  "key14": "5KZVu92GLszJrcpZh72M49URuZfXpMCDrChkoeMfzVGZ47AhGgFHwHXHTnfEmcCvC6xneRSX5d1hBTXYoVtPzUCG",
  "key15": "4ggpE7qK5WLsbZGAfPJfbQbyEFpXJoKa64rro9EcS8KKcivM1XJVAvRmbhA55iyTnNQKKZoemg9w9NAQ2Zm28Wu",
  "key16": "5LLDpq4Xb4iAxfUSX8M3svT1QC39RVMptpsHB9vdQrXBhKaqmGwQs5FsqLvnac3j9UFpqq2i4DFgc6Dp9yiianN2",
  "key17": "5wFhmSGQF39b5XHeGzF94tCpfUkw8w3K2o8X77U2CRh6DjbUNpv1KDTGGs43jotMRqbSGBP5CwZUpKXuCShMLhFE",
  "key18": "3qRYYAqoFKrQh44VEBRvu16jwJQ2qAj47pzuJ2pesMZoYepT6nmcPo8TNaqMNYAXPiWWVs9xLZE64M1BHPe4yADC",
  "key19": "2pztQ6fDTUbprsFbAJLEvgw85kr7GA5iygMyUY6Myyx4qq5rdXEo6xfpv7ubERkdczyjmLAnX1vkJagq39gZdVo3",
  "key20": "2TLZ5YsZMRPabLwCPFBFnRrbUf2dQ13R9bAkUrR5gpL2VQB8e5Ykb7u1Hrzhi1RoHeVTH6cgmEy3wMuMxeDPrzGG",
  "key21": "3MwZSkuvs9ccTD45dFyu6KzWro3cD5y6cyisgCsr4cpReNMnqrmaDwuR8guFfjQyzfeH4mHqvxNyADtM33vLtxXT",
  "key22": "2ALkk9aq4hwK6GyxCtCfTKCUBWoZaTgniugnGrveVetLNdhoYV1ZFogWqRCqtDsALtTZKiKXTUxwxrwnwAaWbJzP",
  "key23": "62JDopBddpGWKf31UpcuiSZ7XfAr529UuC7DMKWB35QcoQqMDEgFuVvmSfb31WsG3yzsc9pCkJGJvMivNr43V95v",
  "key24": "39RakV8dBmdBKQpptYRBvjtWY7dxoByUCoWtqe4xYqVWyJ7sgqNcVYG1W52kmHBuRGfxGF5RWD6yF9Hv63fx2kRn"
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
