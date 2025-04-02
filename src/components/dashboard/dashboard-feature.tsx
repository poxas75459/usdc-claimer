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
    "JYNnDnazsCYUGJnHXSuqQL9WQ3SyxVDt67PVXHyD6kcwnjUscsfF7oeMMDgDngyWJ6QnnQ9mchYGZsCguJrWNFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A436cgsGctyukjhMmfhRWzF6Ywo7AmpYmEdLv9sVMNwJpMhjPnpFfxCevJirH5rBt5vtuLsB6zXutwsSuKft6Jn",
  "key1": "3WRNCiaBAQ5kSmb7f23JB2xuBzmWRQPB24ZCmtwR7MLFmJEK8qAyY9Mxgkc1gLm9865fE91WNYrsMz2gtejpEhTm",
  "key2": "59Y25Fms11Ms557ZxUAgSGs61QzTrct5zx9sp5uC5bTwmJmXmpmXCHi3hJCs2pgMYQP1qNRAcW19zCm63a1hw5t9",
  "key3": "4UuidV4ms8pUuWM9eiJnD9aacx2Ff2xib82T9Kz23bnr6EhMe1upK7Ay7XCBatzRcYRgtW2ZDLBxdNETy3umhrPo",
  "key4": "4r8oedf98fNBGawsAidvNdwPe5wCiir94gBi5a2L5wS2PbpBoc3HTE94JKrCrietzwSVCnxcg4WfHFTkm2aGEB4N",
  "key5": "5sGJhQksTRXjjV83JXmSHDXBbNnTdYuVGaUpiHkQ5AkuwdmPVC18VKKL77xy6rD8eBioU8DSQ9xH5gEfx3CyBiCJ",
  "key6": "4hSWEvqiWE99d1CqLLTujxApihghgTFfpEzmyUKLfrxrcBM6SF5sUC9ApajxoYfv353EpbSiyE39Ux7UCNHtsFuc",
  "key7": "5k4iXHQenpe9A7aZi3zs72vqFoSss2vhidwLgPTWXrp4yPt932yCwd9iWQbszyZWb7fUWcpate8SxzQ58KJSbDVo",
  "key8": "52MCxiiHvCSjUNGmv5tVnnvwj6prBG4pmqB2FfsMAUtLGnKfzfHhKePiWvWWKiMbXBXoWpco5rnNapuKBwpEAjNh",
  "key9": "2AwgqkZvFJ2BG81ZfFnEg4YXDtjf2N7cF6uBkYG6obNm2Ap51oQrtx24bjc2v5j8FVixqg25Nqz6b2vhr6M4jat8",
  "key10": "zaksMTA7zwBVoGRWAgaf9KjqcyvhJ1EGzxu1KFZ4QhDtsispC4ZxffSbDp5gKra53mXAxZpABKRJfTJCJR3Gaha",
  "key11": "EciaRSkQNgYvmndwKs8t6v9d5ZsadidkgciRyYiF8Qov6Hq3Q7WY1UpDiNy9DbyR69D47LRzRuMtTxAeRpR77LL",
  "key12": "4Z6U1mor6FSSqz3ntszjz9kjdM8ftTkaL22kSz75EN6ijHSBvtdeyUUbo4AuSMHDdJmkMQ2DR5ycZh197wrpKEqS",
  "key13": "5yxXA7qRzebbaKcyamVLQyueedAHh9gc5RaVUY2BzmTgGmBcNWoLdyMFuDKEgd8VpxrDcUK4x3wvKHw2MRrsMa1Q",
  "key14": "3mtATFzTrEzaoe5DQu78xg2sP2spLFs1dmCVjmZ6THYGtUhEXSjnJ1jTPHeqoi1MxerbEUDnsjdYS4SPojSFpAPN",
  "key15": "3p6uiYeEc9DKq21wD6MkA6iJ3BGss1YXRfD99KiWpVMCDHQDxyJiENPBF7UdNfcV5cZfx5Jm3yxQ8XK6kkbpozA6",
  "key16": "3Pm1mzccPt9FG7BFPmw46bf9AxvfS69wnX4VZJgvgWB7np1on1sbz14tphFXnxxDjrzBnWAD2icFEF7xTNRotE8z",
  "key17": "3EZqGjgRqMUFho5NNeTj3rP2BNrZCyTQ3Xs7FPu4br6KRBPng6mAjwA3FZcYzktLUFVne2HR1zw9cYoULJQJ4hj6",
  "key18": "5t3R8Q1oEhoEXU59a3m9DxQdguGYFsQoDymvuWNCsTsFHt8GF1aqrHKF5ieB7DezFfpcDr9gcDNFDAwXAVGnCY8a",
  "key19": "s3FXd97yZWG3Lz4Ht2X7uN7sr2hMJMZjZqD1eJpVZFC9oaXDDVX9F2KgnLsFRcSXRyZYSZCw1ViVCfA14JoL5Km",
  "key20": "5tWqTsF9mU9W64dbs44zeWQroBc7hicbhQhuwJJobqmJpbQK6e3zCTZKDSQ8snYxzutZEKRU9rtJCmJfYYsoMsVQ",
  "key21": "49bapAVHjzXtX6zMErnUXA6YsWtiH9u7pRoszWosX7ZyXSsWXd6LgTBB2x4fSSNo95J5fEJpVF4M7h3WaQ9Pp84F",
  "key22": "Fj9GCgPek6eGZmHcxKYmk7uG6pSFZN7nyRZ43H1GqmAcFCgNFqMBnCocWBgjk426x2sbaFutG6S4aaroERE99fb",
  "key23": "39c1vYAxvUEAyGqVwEnuoc3tkvdwCUfuUSdpnh55mvspWjPPUDWrUPAgxaiSxAsJPH8NTfqQK1BD8Q7LAfc5nyPZ",
  "key24": "3oS2fziQwdeoJ2WFnC3evKAoMH1DRd1VWG5QFJYaaXAqizArQv3DKNz54ZSZ1ungTstxH5epWUyNs3XSG718rfao",
  "key25": "AhkbTeD4vL7CPWUjzZVg1zdGrBbkcU7uCiWd6oFbLzj1647UfZTSgq4o6ReKQEGgu2NEyRedMuRYoK4qus5CwH8",
  "key26": "4QyWRyNTJ21LXzA1VnzJRD5Ke7eMQmpFxDQMMYjubutYRa1iU6PCZK3s9xFPZtFHyfZkqqgkbTT3vpHGKUKszRC7",
  "key27": "5C48gEx5t4LDa8ZHB8aeWygxqf4zKjPDrYDxtxj2H3Ur1AomPSi6CXEYpyXtnpfiLWFANnuzYGvGNCr3S566Wxt7",
  "key28": "45PdCb6Ca3cXAdKRAyfvfdMpx4LXKWDhbtprcxGRWbfXpsWum9J85Jez5q3PMiYQsqby7UJTSkcKvdRFszPYmaAY",
  "key29": "3oULbEAq1ZsKJRXJesf4NJ4DxoScghqULEgjjtHyHBKXdrgb5qzs5uqi6Cvc3U5XoYpvK6KLjS5u8WaMhZp5GYwa",
  "key30": "3XRsmf6HVe87JRBQs1sbiYpX5QhLEKY4rM2ZvbFfPUJBBxwgTKjka1cqH5H3n4ku9pcpVtvcj7vAtKHUzGiXEpK5",
  "key31": "4gecjou2sqT5iyBzFz4YJ6rRfCoYWwhzvNKcv42KHfvep5mcMjju1PG4HcTAtV2qkavRqkCwW9QqCcR8aUXrsWJZ",
  "key32": "tUKLCzjcUSnexw3dbhyZECq8xQamV21z32CAhZpDRGG7tFVi3mER4GWeXLeA8eK8ExsRBfhoR61jSsV8quGMziN",
  "key33": "4FNmMrpvoVD7y4LEdHFwSq8G7GeUGKhaYbnFhgDhPAjgvEW6SnQZq1s6DZxen4GSyefTwfBNcouc1suFGWqyvaei",
  "key34": "2ywPVcm1o41sjxk8A9ghaY8W76AD9CU132ZFcTktPymLn5t95h2shNLvByx9wJpWjPUM8Joga2ZGJ3w8sZHqxKoH",
  "key35": "2iWA7cUXs6xk12n76GFCHgdbP8NrDAJThufjbfHVtkGU4BBTb93jxXXRobvxeTked5F7afbfModzPqmYGpMx8bvd",
  "key36": "QM4DrZg4x6MCTVANkZtnbXXtPaYihLdt2XmQX6gUmddiYgc33iPs9Lmv5XtmH6SdRyPtAppxmZnCetg4SYBz7tu",
  "key37": "4qnfQx4uoectUEK5si6dF9X79LezUQEfueMRMkTkEDkm25NqmRaNSKbqFZuiGLJKup2jwPBWfzSquf1HCJkEeBVc",
  "key38": "4ayRGzd5HS6uKeL5PU1FD44BsVdBZX1SyyGjk6p73FjwfyNBKwM74qhQfTmoAvhL54Kd9XEt1xHyYgiQrJiE7whA"
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
