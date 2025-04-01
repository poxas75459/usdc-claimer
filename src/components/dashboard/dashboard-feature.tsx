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
    "4zFFKkVCEnS6ukydJvRaGEKiiCGdTSs3r4xsoBMzS9BaiUCwt1mGzRqYWQdsp8dnCCRCUpqFedksKhGKnkvyWMVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBJ3ZtcmoR1cLMFaYs3HsRYE4eBB5WDhnJKUJHqxFiTmGk8KKsXYcwQDTMXELivitTJGTfcmYK64wYupXomJKXs",
  "key1": "5dEskwtpkx2TGDtwfabxzeBWxisZyrryfhipEnGa1H52ueSt187WofPB7r2gedPAr2sd36pipupnPQvPU2yhf4v7",
  "key2": "xCeenqosALaYHkANHiJ71AfjkWmoxjgpdP7ZiG4Mq98w6duJxZ28Qw9k8AWvaVDmncN28Zk9rxohQ3oZ6vYpjWr",
  "key3": "3pFE42BMhDMUHv3qznuziq7koHrmcm4NDjhTsrBxz43ZcghjP736yfavR7S6NX18KGmZpqhHNNLQ8ZwR7srrrUC9",
  "key4": "35uvY2jtLfEcVMBMSVWRmbzZGPB8pCFqJcUPTuRFq8jArZPNxxumoheMCR974UPERAWxxLcq9BuNZYiCiZFxfsaM",
  "key5": "48BcDJ8CojHn5nAVsvJGLxnQMmNZmBkrtrecKQqy9R1rXWe6shkXcrPenBBiBAVNrtbuABDpCzUT9cenY84n94EW",
  "key6": "45iv78aG3sWJHZGfJNT4XKxb9xr3peTcnX28nCSrQxc2sNkh9TQ8tV55tQKgGJLSTigNgQuZbKm1kQqHCv7uKfyG",
  "key7": "58UPaaJ2acT9udf23NaLhLF3RM9HC6UTkJ3sXdJtZeba9nLa3zd3Ba3DrzDcGSkAakA2eewiZ3WaH2TvBTLebm8R",
  "key8": "3EhWXZWTVXf1YYquhJQxdYVCDs5hHJTSGV42yymHxKBTcAD7G3dtsSj7uditdxVp4Ngj9Gof5kbtkU6ZPc6DRj7H",
  "key9": "44pfHZH8Q85CMLEXTrdHR2zNGSbixJtXDVrjGs4uS7d6ft9mh6wXnbD5LnPGUvBePPttxf1qqNWiBBuMXmUzpXUd",
  "key10": "3BmrSPWzP7maW6TP9tHWrATAgK8XE369k16WeUcY3eoAiypEYZzKm9uhKSKPAuqhEKH6RqSKiuAgfacFmbKH9tqi",
  "key11": "5uA6wv1537bmS3bdfsg7Jzm9fGpWn7eMm2sXxhwgWLNttxTV5EsufNLTDxKboBcLnvzR8rhU6LWdEq7NpS8iTwXn",
  "key12": "5sha1fMa3WoYZsb9L4ytVN7w5Pucc8tn4nzGPMf6gny4gATXrYaiaFiQkDChozF2upegmLgACidHUKfgQgBxVYfh",
  "key13": "5iU6qHvGF1aNGkbYfdfLXDRz16ruGKEpgUG1gPTF8o8g168M2wHU2nMXnu1sUiP36s3bpMHijuSccf4ZsMNWMHkL",
  "key14": "gwHugyoTPKaVrxU8pGEiMXzmHb5phkvmbqmCaYfRWps9CtmPiXm2zKjSyKBsADyUi6WJGb2NZ6LoJMGDQTSJDnU",
  "key15": "28p7RmPGS39CTcnEY5LqCdEybyzfTN6MdAGVQ5McE7zFv38f7PKzAd2TJRvHZm5oQygm4To5VjZgYa7Cvs4J6BmC",
  "key16": "3MitxVgqonEbqXvaok75sbMQjforUkbQXY54hMxcAfXEJ5eEdLnKRiiAzo9frpztkm9i4S1nmRFWodcicARwPvp7",
  "key17": "3dmiiEdxLoTWHnM2b9pbYMAqk5rPzCXfBHE2Yv4QA2qqtZSns8f8rzqnWih4ww43K3LCb9kcFbLT94WF4rLHwAnu",
  "key18": "2fZS7VJDvfYpJmNLKUH1iFF37HaDVjH5GPyFx9FQcFkCPr6tVFAXPj993dc8E3tpVJHg2gyUuseH1YgtnUyJqkKi",
  "key19": "cPnzZxDSeBzQGgy5BN6TjRGoTAM7gZKNCaJt59LesWAvapipxPxB1CNBJxMse7dSE5oWafWJevLWu7RrhUt64vQ",
  "key20": "2BrE9qM4Rv4VtyfJYivi6kFS58S9oWHX49ZgHNNmgiV7ycJbCpJDnBfapbwxDndMnSBAioL5TtMerKtqynroZEka",
  "key21": "5nHdPYRnmtKyBA85z28Zd3TFipExtYBRzFnR4AHZvqFnvKvcQhTFPkE8LbivDBWsBCXZyy8N6pbQTcUoq2t3bZ74",
  "key22": "ToKhRqqhwwqU1dWqqT5uEVLhVqws1W4xpptUV1oT3Ju1XUTGZpbbdQsjH7u8uXvbkKTdhgFDJv1oxjVrmsAdsLw",
  "key23": "3LHE3gipjCeA8eDnifkqMcdvvMu3X6XoU6cdVuMsbBH14LxQaFhHoc9Hioia3KBznjngWT9Cf69uYnuGkfmn8UCM",
  "key24": "VCYjwampNnas5Fvu8aYbBbTYf4cosCrtky7TGmMKV9qAPNteP2TuX45jqPi39RZrgN8iLyJz5BscBXHvC3ZRHGf",
  "key25": "3Rm7hqpDW6qnemRfoSZ3d1VkUtak4dwtsKNjBdrMyBmXudMxNgqQfCQGKcPWzb7s1uMfDScsXzSQzdNBKFN5PKgX",
  "key26": "4EJuy6qvw37TWLCDtCVZE3kiRLLkP24Fh7gvZcDF3XSefbwkyns99qFei9bJ6fDcAVn65cVJ7yQjhKENyT476RGm",
  "key27": "3QBjrP9QSauvY8CoPaHkYrXd2wGFjoDEcBLfgaNYSi86H9LAh3xFNHjo7CMui29LZKY4pXvEX8U1iZyqtMN29jxR",
  "key28": "2N5QefvsWqWHHuBD8vnq9x3Nywqbxr7zjVYkkx3NzFWkduuGywzNz8z7k8ySB53PNX7LPJV6zrv25MZrCiMDry4X",
  "key29": "3hibqFqkVQBtFDv2ZvBid4c7emhZjif914fu9Joq8oU4ZTzNXXiDBSzS8UxR8rX4hoiLyGZ6n3gdWJNRxGrMnjU3",
  "key30": "ie1pwykdNAQ7xyWwfH67iTaZnsnC9ztmkmxSpPUzA2PCbUu1tn1mEH6k5zqdjqieRZKVwe3aD4EMJorxTsU26h6",
  "key31": "2TRUp6C2yvKFtEFUc8yRTyhF8sVVbocnUWLtBhDcWj6D5ZRCPWGmS3wz2LFFLT5xc3UhUR2QQu4AQFVVm9ZY2cHt",
  "key32": "3dCd7oELMkjBJf2NWE7bH1bT3yP48dqqUJzg5wVo589exTeTwooiirsxTnb5rFEvqLxnK6su8QgVWydCxk3v3vfo",
  "key33": "2hjGobGwzb8kszfWNkXgNprxmC5BntJP4RmUzsSTwnAGGCv2J1C33wgjDBwt7ctdv6vDW58VGshv9jLtP7BVwe9P",
  "key34": "2vZSytESAhwx3DB5DZ43ZMxA574Vi9MkAtmBay6cDr8v3Yu6RFvPgBfggxZMQptLSEC4cZJWmjknQvSkA6sSz6en",
  "key35": "5LEarxT2fkvJXxbYuq16MwGm9ptrPuTHehB2Wcz5S9zRzaUYvQWLMiG51MyyQZDtCMvMJmEDNGY2LooGJxKkHhQw",
  "key36": "4ajf5YEFxxpwaVbUNyPXpiTT4Njn69jjQd7fs3Tw6rY21fqoRd6DWdKWQ1brNNndRW1XnBedDgxeovNJPNKRAzUo",
  "key37": "5TU6PKoZ3FcQKYEJheuYvqmNfVLdmThLqjootFbnoG46pXJUbpwV8n65wkd6XBrwFZadXqBgn7ULajsBjsZsFJpo",
  "key38": "hex3oZjDUS2bG5ngW2omDxxpZs8uXmvgEBrGxbcjGBucdK1guFpNW5x8bgHBQw4xUWtV7mK2xzwfA1giGUMkhSC",
  "key39": "3ZSexmwLxXgzHRE5xHskrs32B8G5bKB9zwjmm4FgydWXaRHBRGUifkf69EEdJUq3VraS29JwbyxyjhGriXRFCGBZ",
  "key40": "LR1wKH7KVktojQWJgkGH8Yd3MH2ZC1WxyRivMEeA4i6sPgjrL7vbaco2Mgp7mNSHa696qk151QM3uphsmgAHy3Q",
  "key41": "4xSeqJmfkij54YhTGJNEc2x1vUwcnkyAP7QPW6PRHszJuhQVh4K2SCMYRgFxoD2UBywJYwL2uJYsWojPPuRph6U7",
  "key42": "4bAMGxCbpnCNHm8YgDApPeXxjWmS8XqzhctL73sjLHiUy4ejAV8jGqDqYHJaL2JzhkriGdxEGzG6R1pSDhWoWFsq",
  "key43": "5kosV2iC4iZtEh2gD4z7cFFdxcvg3MFaWxwJKwRU2KfNf1Ftjq4wD7UEQbYWrUk5JGHWQrMMtCbYXFjZL8ZRjKqv",
  "key44": "5bskBRTFcHoWv45L7FeV2tTxLFwYq6Y4mqTyxr4icN6yWHavAfsKH8KYe3xABwRMvqHmn4m4SBAbEoWuVPJCShUf"
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
