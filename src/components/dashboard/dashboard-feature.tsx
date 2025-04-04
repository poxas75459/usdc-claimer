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
    "5ccdqmipHPVdQR3g9HLFbzPMuF7AoXpUyBDcwHwg2SP2PouQwEeQ5pYBQUH9UCocszKVUHo9PK4X5fvgXTz21H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65DTC1JHuKRoBp5rWZKYngdzHd4UsUChLYshzDQ27TsKFQ7grtV8y5kkKAqepQjKSeZGPbBAVWhjdWYnzogLwLmk",
  "key1": "3xUpHQGLStbPtd18fxpsQqbSuWxPU9dJ9aijGVsWqb9JVejHuT3LnLn52rD3Ey6L7BfZn96LT2i2encC5LCGmxUJ",
  "key2": "2HQHNAQY3H7FgVYdZrpEPTUaFrgqUJKKVPsQp1zTwaU3x3NJqSdzFR5mTwhaaK96GE3ULxMLAb792mnSUN2RNGmc",
  "key3": "4N5rBbLCyNGTScBmD66fYWufxmf3sTRdD73nbGSYe4J6T7oZfPukXcNNAH6dLiXv7GUucvfWAVEf9X9g6yQUB25a",
  "key4": "55zQpyHx4x23sgXdmKrg3w9H4pAHSVJxman8RzZrenzRy7C9pire1X19UCFc5HqPM2XR2nKcHbcJmrgisS1U7J3n",
  "key5": "2ACMDCqdMwKxz2gYyECSXJ66MHCsA176HctkkCnj1VNLMJN53HYTzkm1LijzcexHyu9iYmNa8momqNiYtPY2ZMJS",
  "key6": "2dPddsPc3bno3e61tiEgQRjHgMT1mJ6gWk9WkGfdhr4oYnyT8vE5EaxcUqCoTnWof5azj27QbuKJg5HqKaKZWdgk",
  "key7": "2crVhiq6voCExaSLwRRrGmuL5Uzs4VYTgvfmKUPnAeVtN6oMuZyF3Z4tR9hUnNCG8WnkLktM9eRVxSY2LoTxsWuJ",
  "key8": "51zWzS5G5FNefUooRWGhdP2Qy96PL9Z8k26oX3rQTtpGwvxSgx63r7WmxPjEGpVjcN4puGzmTBzejH3TKD7sBiXn",
  "key9": "5DXffAZn4N4j54DMoJ7oaFa2w2QfPNcDny28fj22ytnidxvQpViY4CniS3bKMZGXQezXVR6yhBw8PdDdsnKiF69o",
  "key10": "57qjT4KZe4JZyQVWEK6vqLGBCciXQCMf5rXZUdFpdWVGc31FQrKMm7idAxJy7nznWXu69Q2Y884jJf6BkzHxB5En",
  "key11": "2YUwWBRpMSBgzL6K7TGEFFNPdBMJaG8rswCjFKgmgSEZVFPnsaJLuVXx8MMVyKucEps44wXz9a9wAGyBuX8NnPDV",
  "key12": "4Bojh4hqECnKYwmdv4QkrGPKfe4Jy65HFajhV4njvJMPs7C2hUtrBnQzQSweji3j7fwmhCiFAjTDqVJTU99sdBkk",
  "key13": "3buayYohhWbP7KR8ZGp2Jay5nBcevevXFutfUTP8cvpuS2r3fpJWrQ8vvdSVq5fEAnPAjx3kmDJYXW9DD4ZdMCJ7",
  "key14": "3emLH3cnnWefkk6z7zFnk8B7dCMzUucHW9UPvEhFAVXz5YvzH6AWZKmN6AnBMwYL964TWstwfdd3UQhUjAPFKmAx",
  "key15": "5yS7GvAW2BsVLej73B7Ji47oS3ckytnXggYdtbBgjYeXx8GWGCM794vmKKfJqrPVuMKh9LbYkd3mDVzTZLkVo6DB",
  "key16": "54MKRYggMJZfabw7kRJPsAnrPeT3zscF6dNdDShVeSPWbinb8DEx6gJ18fgA28wjEDNwgryHY5Mc7nS1JVLk6k6P",
  "key17": "2Weo3uoydiWCQXcbrpHgWpd7D3WiWuEck9QxoDj8PKe6jxMHPbDubXsZz412prAerzeBaviqMcsLGvufEevVgeEV",
  "key18": "AtWpGkgwhKYnvq9Pra6Sdq9DKNk9MfNxiUkUnQuRLn9CBuCR8wiSvhUQaNhdapoj4uWwqo7D3svUAMf4FqfoNwc",
  "key19": "5jteiqB3LgwQByCQnX3Hs9CYxjhk8zrHXjnQLFPmrcUsVmPo993DVV6fSMg4H1bpbbJS1rFSLbjGyeBwVhwRzdD3",
  "key20": "yL15A8wnw5X7LK6kM78GESXrSpSAQZAeRdgtrVd7MVcmqcKFoP3d8Ne5HMLuCRETyf3TKA6tRxWtaHPoZxVMVhZ",
  "key21": "5vzgYk4vg25aDwDrnqvJPr7FBYgntj8kX6vmX5oSLNj8DJwmH3DM5frNQSRMMGfYJaqS7XJacKWqmw3hLFE5bjwY",
  "key22": "5ZvDxbwdG5h7fugNdV3TgDP6SDCfuWZ4Y4AFDs6UCqaigwekiaz7dEyEwLzUbtCXnBAJsexfmThooDA6PstTKH91",
  "key23": "5jXv5T2s2p5qAfAue6Fp2x5EcMX6n9RXXMZGbMpgy5upoUSgPvS2CWbxt8mu6C4t62A9eG8AT1NHqWXNS7MpemYN",
  "key24": "KNGR5Kk1wNmzwFFox8nnuJiUit3xcWXYCsGsibcpbDdzjve9Yk4GwoP8d8WXhaaFgqRfGdG51UeTUz3qmGYXYWm",
  "key25": "nfDhaMgXsHyenvyJQbnrmMNfwutjD9c9ePmABKqSuRUpVxJjnEPAqJdtzHwEyyss2WWH5opHdR1iGSqK1GpxSeJ",
  "key26": "3hTH72cr4nt9FkcynMBqw1r6nw2UMX5BQNfSJTS3mWUtkGQGyQS61crbcRqEBwLCCxF21exePQSbb9gpoWnWr3bD",
  "key27": "5vL8t4XCrHF6mTeGoC1yYS6pDMfbieovXmbjQuGJZfY9FDKodtmwZF11REMu58Tg9WKLS5RmfepBX2RQ7igEVBCV",
  "key28": "52ckVMtsPHsoJPhE2HLZGztc9NUZfFbpd1A7MmcEAoX7ApJBfjV2SjXBpKJFipEqAXYCudTgcPJKRFNomdWs18sV",
  "key29": "2Xjj3vAsEK938yotabwkXJ54D79kUi1aeKgurBzFLiLXXvsHrFxenwhSmSSZZVKKeUfZwFiAgdc3LyGKiU9V7XdG",
  "key30": "4pardfHiqm8kwKSM4w8sWiXzbu1rwshTGaR9EVyGVht6jUeLJsQMrRRMD3jXTyhNCXYXNq3eHuPc74sbfYqtD6py",
  "key31": "3eNpWs4N4tSzpXQxAYEyoxsD5TqGku88JdiNK7kwwGr89TSkhJp3TPTbVtTzausvt9QgnnnidkACdwQaNXoowPaQ",
  "key32": "5budaaNoffQcvGSf81uiS83QFijsKRK7aJfegjS8jTmdETPoBaQq3utEkDG3HLkjhFFwCogWVoHDvjrKgyGwGPfC",
  "key33": "4Np1muZNFPWK7WHjgLUtPXuYC4kJpUTBnvLG8vfcJfoH2hDYCbCpEWiXBjYSckpfZ84ZZZyRSjSt2Uh1ZJfZyMyE",
  "key34": "6421u57uZcKmjySL95LRtEFhvniiWHY4kdoKrvMsBmAFH18GMHmsffcYfyKifmAN4N2stKXqxy8DotTmwEznxbkj",
  "key35": "3rUxnshpZc9mjtJhZ5bHK7KU7Eg9dCBZ3EZYjcC1o3GUCq2UPifxqjpsrkEY8rLZF9SKTWJJFtdNZV69nSyxc6zr",
  "key36": "4K3GBfY8axaqhnipoSmiJtZDHAKbZKRYivYkC7DdZKx88J2eujGCVh5ySmB7k3jGUAPyAhM47SZcbCfaayuDWx7C",
  "key37": "4gav89NfoNz8aSqcVwESft94BmuH2Qg5Xt3P2sDcyotwdgw7tPg1UVAA5N2MrQdagNDjapJPpePS1KLaznooewNN",
  "key38": "5aDda6gQWw2gHQM6EJBW7ZQuQByZPy7GzAmkw41fSfBJVR5JV1ijeCLCUgToXxMGsuF4LupMqPZQZ1o2tKeY3cF6",
  "key39": "2u43dyFhyjGr9BeJTrhRttfnB8g9PXcWEWmjmGrJTFk7gsJ4q32fPpUiLwdiufregPhk8QAx6abqzYnFqJTVkTFy",
  "key40": "2Mz52w8oKRdEsBQhnjadkF86CWJ126ZogrNWLgGNE5g2HXohwhj12eAy9mWi7ycpT3K3SvFSV8PxnzMWPsogAVh2",
  "key41": "4WZBJWzFjTq4jJC3Q4FwUqV12YDLV9ZLu5cemvQs2FuhBztyfNXQcT61oBcLZjz2iLy43rEoFWPPXZBrmXZLR6N",
  "key42": "3c4gKQhJGYpXngmyPpAmZEnQt2jQn4yVk67WBWnxTtnBZP7hkhw16gP11hAFXKJtdKFPrciWfmySejFQ6QS2RQr5",
  "key43": "4Hc1tXSd13DEkF38haW3EXaCReADqhKEWoqvWjbcWdkuhUk6wi6Y87PgzZbeh1QtPRfn52s4Mqv7FM49iBJViy14"
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
