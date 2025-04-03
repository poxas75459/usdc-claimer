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
    "23BgvrDxHFVzGD743KBiVaknGxseLLAYCoTJXY4yqbcq63KkQEeVyWQq2f1nk5J4zjubv2cJXSEHqKQin66KUviA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q13WCnr1nrJMo7gTgKtiFg3eAk8n5xx8KyMiqUxfVK2JjBnEVigj8ZcQ6ATQJohdjeX3PYgns1Aww7NosMs9rev",
  "key1": "3aXAcDPFQYfs2Nkx1ZQbSSHJSjvZkSz5YXTogm17HKZammCQE3X8Zp6mSdMDVweZ2GybS3ng9Wdpta611kr9EpxF",
  "key2": "4gzGwbay3rPUEQXtPHrJYVjUqKLRt9jySXSkfSgXuAk8ttdDX4b5iSeExQRXPnMx7XnZvHkJixL772M83scfyUKi",
  "key3": "48rYff8JBG4vchwu74DcxsSwqZbLMjgNh7CCXtF9p8rrfHYeBZZvPrqY6E4CAkqvnCkts1KsCA5eK8y6PvvTonfq",
  "key4": "3joVqg1YDXBgzWWcRnKx5hV6RbUmnpB3STEn7ohuBskFnY8rbVSSFSRpwGWntRuTC1t6ZCrjZLYz8wQrptDPZT8d",
  "key5": "2t93Qrt54uFEMdieabC7HMUGeHeA6iKNLae589P4sfpqrMW5qPrUfHUCMGdKNpM7NkdQirYyRsYMYMhYe7WU3nZV",
  "key6": "29nUDjVfd9hxzwn7CqabTbVdtChdzrpNJnHqENNdmHozMje6MD1kuYpTUZzd4N2t2RLvLyz62qcUZhJfLUkSfnhu",
  "key7": "4tRNqGgTB9mHMEaq87eXKwb7iVLexFtFLLnXHZnWjqH8gpEoVm22388NFt5zycGmcmm56RPtkJaBa3Y9uAjLao1k",
  "key8": "voW1bnnPdGq2A951FEzekGrHSWncczheyHUhw65PZNGEtoedfEZhqQERGaBkKJ1NJ7UMLbTc4S8EYkGh2KecDwC",
  "key9": "5zpk3ghbWdNfFesgqgbpx3suz1fcustcBfRAvMPsT32Qn2dtYLoRFPknVRtXCR8XLJY1BBkEVxuvtuaWvDsKCyVm",
  "key10": "TTmsZbLKfbDdjEySnhNxjYtLVxBfNkerLcXCveNSCwyLHxRCzhwJGfE23fAr63siLBnxsskdpjz7P2nK8qQQq8V",
  "key11": "2addK7n2mKt2cnfYa5Di14UF2rAhq5vuDLACDfQ5AcmAyBCAtmiP59D8RxGsLjYpxFBwyoY78DzNLKA1zNxeXUQh",
  "key12": "3t7ziANcrjRiXz8ZTSrT1jWQvCAVKKKM3tQC9mK2L3ZYqzvEtVd6oD5wRGQzNYx9isnLr1QxfHyNFQLsvjFw7DPh",
  "key13": "VnB3DZYugweD3ezhoUGyjdvAvfnP52eUTpnDuZUyFrg38XCzVzurUi8irKoaAqYmQRtMUHxszAxDh7zGgyJSRdJ",
  "key14": "3pXP9ca7uQCj8zia35Pvc4Q7QLwFojvJxAgvb7dTeH22KRD53811G3smswcUtxBEXjRQmDo6BcRnhWDXwzPbqjMZ",
  "key15": "3AqDEbogUT95dtovr3CEC6rbB5WAYfskT7La74Do8NEuBFg421j1r5y9Vvq73CMoRfnPzGtt88TSzcq4R5A5Ddcm",
  "key16": "5SyJM884FPQKbYvskvHfHKfwePd2iVniNvEBWHr9raCGrgpEswkqot7qjQETMcGbzisjWyvDPxsMkkWtz28WTsLK",
  "key17": "2hW754z7hvo2Z4oG6wYYQxmX7Nr7pCTfnU16iS8CqyPNTD99jeLEMYaAJTzXefRfa9HjEiXp9ZbvxHDoeLVk4yLA",
  "key18": "5KzogCHm1T9AzFqHhDRx3Pp8B91Y1YMDFnVx7PyfeGzaYaGBNmtMG8f6ZXvXnVdWd6W8JueVPENb2Z85SmdKggL",
  "key19": "5HgZPCgrk8zFDt5RvRxoJM26oTDQ79tggz86Q3mcb9YvWiBUBh92Hf8HfPY1LK4Jgyr2PaeCshpEcBczovAPTeep",
  "key20": "dvAx3HMQAAjnWSXndsPBKvhBStShrZGTkXxAGviPqXiwn29rbtbeB2RTexHPqzw4gEN5jhc3SH8MCVFywzuLBun",
  "key21": "5uSYcN2KSuuuLxP7PRT51xWqEGENUdjWEGpD14155F5sCoBYxCW8Ca5urs8vrsQCK171JvtiLJogg8LPSSPKYWng",
  "key22": "5AJxteq8iLuew1HfYg7tmEF2i9Xwod3SU6GaUCC2JbpwywqDY3vZQ9XmSynwsn9BwfNsLGCFCDYAciVjzEjqRCip",
  "key23": "5MktuiTDDgrruUw3EJeq5hKYpPgNH2y6pH71Qw7Bpf6R5odh2EFHdyrmyfaMs9HPYnewkumqYaYh1A8ecMYUy3ZP",
  "key24": "3G8P5ECu8MSXR9LV9eL79zdk3y6EmJV1D6BSarFVFKvQZh9bTbCHM4ntaPwvGVyo6yuetgar3jhZyxti9wT42pTx",
  "key25": "4ASTTS3qNUReDuew4uaDcmysWSBnvBJ69QzWTWRaY4yszM7TDDG4mKVJUMahqHCBKTHUgNJvpSST4RougGV8GCon",
  "key26": "5dZAJ4KPnWszi4w7FrLBBjd4zUvs4LckfXnFkkDeBbkfjEvxLiqAWyEZu3SEAra91ibEzjAL72Ad26gaprJUa1He",
  "key27": "2EqhV1tRxF4o4ieMc5rCJo69tvApaWWZoM7Jbf74vu6mUDoy69ctwajPEXqrA5ozyWDj6CZx3ewDMCsVLKvBagez",
  "key28": "WhA3LmVPhqCLL3PXBiZ82ZkuxCnf4nrRdxfJbrGt5eCCbmjbqPojM4qkuQ1Tz2BEbxGrj6DKEpHEBK1YX55S52X",
  "key29": "33YawnPVQ4rZM8VJ8gk4qh5u6Tem2wbnS8AYMVrwL9eKVUXzXoXboRBweZC85evhrxwiwga6LciZCXe3YP5cqnxY",
  "key30": "uR151fZnX1DRbWXF78quETzGDT8qHbu9KZ172nMk2bNNmA2qnjCUayQPFnemYCZPT3acZz74zVeWCxLFkkdtZSq",
  "key31": "4MFbnjf47ZNDXpDyQpRrN6Yj2VoQvgX3ftMkhkYuWCzRDgRRfp2gReaYFgKgcKx64nT4XpFR6TxWCDHWLNC77N42",
  "key32": "4TCqH2czYveNuTwb3LjAHFrqFthFmG6HkvaFKnWwys3C2KEcWYLwsxUXcpsANHZfHdC3eWNnD1QHy6SrS4rsKYBc",
  "key33": "61SMwxCGDPKa5oBovNsxm8KwermB4gGFs8k2aZS89M1fVsQYbJQwv3UkMmTiL1FYDzabiAMZ9bJ6vctEJJRdVo7P"
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
