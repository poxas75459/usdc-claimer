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
    "2KV1JFqk2zfmpKHhKVeLs9UouUonjNrs9whoyNBHSeif2hzBXo47n3rMV9bi2QiLEX6f5nGW3qmfBe41ueKus9AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFH9YhqEii7q8NFv38S9JpVW5sFMkMF53ymLRLEN1UbkVu3FN7eWtd23vECwSwT1T4JWXPoa3JbzrUSaxrYbQYv",
  "key1": "2KzhmvcfzFX1SJBmKHg5F8APap7QHCFUXK5DgpStTxFAincviHyvuYkGzti9JnyV5EK328mGQRz4swQDS6NehbvD",
  "key2": "5GsHNP1cRyLEhG479zFZkuSxoQd4V16T7aAnPzo4w2xfiRudsUTp9vacia2GjKw3243bBv43ZtekVTChoPK9rWKq",
  "key3": "2h8pPhbw7aj1wVwyeQxX7x7XEVbyb4TXdcJp42MyfK7q9ptZjZokxPSJnFsQcXfS7qBtyCiK1fszuBDnR3mCdvDB",
  "key4": "5qEREdJAGeUpc45EnTzJswxX1chTvWWm1Gq2QhgLuyN22i5GMRE9RUd8Pnz9Ntm4LYd9jeE6uvBdg3BjWxi6NqLN",
  "key5": "3Y4r58EFenUNDvfbytQjY4hHKUkQRU7Cbmjhr2XuwZscjHkVQK79hnN25dDGnMmNuyreS1PnZCWG83KN54gZdyiv",
  "key6": "4LPWckWDuJUr4FZhyD7VH7RS6KFN6Qw7zcebsVDXLs1ZD7gzFtrouynnBftCRbGtsQw42NbYWy9YVPcaDTuHNCoN",
  "key7": "41AjHGDmtcBXTqojzUChfoc2xw7JMpsh7zeZJbhwsTmG5PZ33YFpyGEtA5ZAJoEXKLNVi4USN1dKN4S8eGJS9qBM",
  "key8": "5bCKYiTuQ1g7e2eFdKeApxSg6RysuHGcTKmzUByJxS55diZgcUAGbFig3hPRjAzm1bFfrGBtFFk4MFjatVwgjT7f",
  "key9": "2LSHw8qe4JCgN3znJHrGiiQbzq4DjV96C2JVkxEZU47rQ7R48c42kgTC4LN1Dpc5ZxwPd6UsukNhoC4geDk4yqRJ",
  "key10": "43mFjizRaB89DD4manv5jggdwGNxh6wUHNttoJrmg3TVGZWVmmwUJfr9Br1wSkUUibGsF4HutbuEgTpahXWA4YCp",
  "key11": "3uhKQPATVwavsQLKBYKQ8tGJQY9dKQPtVoSHq4oUGh3z1BJutQNCC21QrUeQtADZ9FSKFoZCRy9ZY8FeyqEsRE6G",
  "key12": "TFUtUARjiYFAUMMbNLQkx8QSAE1sB3fXn5pYofgpdB1gEkj8qeteDUz25WXfsAX8RGzpuqzRYsVEEZRbt8EqauC",
  "key13": "3tEawiGzCYK2F3HCUj4DDjGD2W6xLeM6bJxTPc6jvWjkHK4KBn3zfAwkrmp1419s4TgKxzjmcAqQy47nfyU6TYyp",
  "key14": "4XXVj33RpmHoidAWjohEqagFvDasKna2bNAP9n26aVioLgRotD4PWGiZ3Vu1pzQpgriJEt3z7cabHKovXGkFJZdj",
  "key15": "29cA7w5CKSgNochBbV8hQGSJkaCyQgRaMGLym6RE7zgem9BAga69Jgeg1uMGTXKH8BdfhoVcYnDEfoGXVP61GPm7",
  "key16": "2g8bzSHpVR9HZDDE1oxinL1kgJCNUALFQfdzVqJYeAWTCifnHPaNaZAXjUo9Mas5UCHz5M83JCx7FqcNMqydTufh",
  "key17": "2QQuxxGaJzC6ejha5rZztwmRXQywUwG33x4F432gh6FKhp9k5F5V1Pkq9DW4D5aZkBNarbx83WPAvW2qTrp2dBxt",
  "key18": "2vtymkVphCU2KuDkLYZQAZeeYCxJ4zxL3YBNTXLAjebAKpeUc7ZFvwJRs4o7EJqYgPzXLS5ZNqMD4iXGesNHXsLg",
  "key19": "8BK82RVBtriPVEeZjmC52EqVn7TTfDWLBrwfacmyQn97iaYoiurYN3DD4THJEh5hMiQRy3rnEqq8e2PndiVoJ48",
  "key20": "5GQ9dD6DbZUKQY6WGcinH2QJs4kmAqThddvCFtj3VuvbUsCTWaAyH35WKb5CeHdxbdaDQT8N3xgXA216Hdy3rTKt",
  "key21": "54gRGftdqpngMoq7XocZXGHNBn6CyrdtSt2tkMHPfYy7ipRnDDH6PCJneja4JYMbDncm4dXYsHmhRUobZcjiycr8",
  "key22": "2ayPDWiXctgSYb952o3RQvYn6oV6DEuvTFHXUzzzzULqhvwQc1Z36WwEPRCQr3jEGTwDyApnTVakEg6P55STTEYv",
  "key23": "4gDieGernRmMRMGK1nPsqCGc1ZqaRUMgRihJKibkitvXPpQZ4oQgDAtuNvp7PG7rtTd3SE6KecH4yogUYcRqvJGq",
  "key24": "5qMD9PYkVRqR1gLXPxHUss1ssdqnmvcNvCH41ouU6bDKTVYBuzC3JhYX7RkBrfq1Gu1bD1x9RiSNoRwxb1y5jiFv",
  "key25": "5XXg3SHVxa29x5XGpUSWeeFcmkojxKhQvXZHsbn7MzsGgi1qUnpWj3Je88E8qtcDnpPGQmmHY6Bahpo8s7D9VYT8",
  "key26": "3ci4gh4g6soJYm6frKbr67TNX4kSLZeyhcy9xJ5qFaFFpwqcxHqBJSVD5UD9Bq4nmPLYwpeLEpQNvNEHtonGC34j",
  "key27": "3AZWTKZuMpngHCR3verCYncHrPcqPmJ2VGfGznhiiarX3ERndBDD2KiDCbnwVnMgHha4FxqdwaR7HYgjKGaTYp3n",
  "key28": "32iKhVZeb9paPNwFQy37vS4YFjaZeGjEin6UgfcAGcgzLPRSmoR58674d9FhSCsr5Yoswy3BW9MowUmv5PrNeCMt",
  "key29": "36v5rqkrjioFT3zSEReHYcWtBbHUP5D18TV1MuFHTBdfPWEGBgfZqeD17zeXvkG77L2Ytwc9iM4eyDbM746wi62h",
  "key30": "2974DeZpBPJTiCMutBV4PQGZRS7x2UETmCtmYz2vzdyQn1qtUrSGYm5xCsDLASv1cJyTwhwNbJ2fhbeYwoaCuX7g",
  "key31": "5cN3zYBabcB1eRPe1WLRNGLKoA78Q2F2xCQKGF3B4eRqc1Z9RZDa8amhpszECVDg8Pw2REMmEtV1a8Vbbn3JQceF",
  "key32": "38D6Hck7KNRZzDTxBoisQGRYAi2wyMgJvg55YhT34caiQzCaDH2nVrLcQRa2gvGe4HrSimX38C74DhQVZoWqwsXh",
  "key33": "4WUJr7LFszudp7scAq5NDUy3An4pekxtgbt4FpGNJ1jTc2p8Fgjr53tSSchZuC3PDrK2meyYoj3wQ2duz5p1torh",
  "key34": "5C4g3B6SFAD1ZLXm2dFpyQvtoPhXbwBsMHiHmAcagCkmyWiKBtaNs16J8ygLZ4PxasRxMW2GeukV2nZE22bjMHq5",
  "key35": "5MPw2yJLGhEUiFX15MaaTuPEBfwXB6j58aFxhvy3NNH9bG3AD51p8iCDB2CQkQLhy7mBGVu6G3w35GA4CJSFxVMq",
  "key36": "2w1hFAQ8Ui36zsmS2QWy9xsdo17JJPaJE8sjgoMTgedGZQeJNESkjekkdvmgNBrnR4KCw2s2QoNhWm6PNodNmV1K",
  "key37": "4gdkhP3JmLLZ9iYEHR2tWrFDwcWxhRXD1NhUgCR5y8YWdWgQWymzSJKmkQLrCZ3Dp3co6xjPnjBfFVsH5sMrr9Mv",
  "key38": "2LB5RFsBLXsiVzEmU4Mw62c37F7ZS7qpE9uZ48UPKkLf14FpwKziKuZmMCfS68oRwj1UC8iohj7wGvT4XsX8Nccu",
  "key39": "GC68pyLU8joNRQ8vv7WvfcAjrdZMntYRaQC6gFNhCyVZHKaQc8YprsXQspC21a5VQs6SMZs6aixhjVky1SGqj9p",
  "key40": "5PC9GTH2At7SoYiHwJ1wt9nHuAYchWwGkayJNT4DK3osFbEhfDDadsYWGk9aQgBzoRCuXUg9G9TDy8P1WFMyqC6y"
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
