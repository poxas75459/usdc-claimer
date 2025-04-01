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
    "2o2moF563MJYKF9jWdsYXV1WwJfJKwmQ4L1W4Hk4kWBTAXKpwnfpQkqm2VpQunS4srZJHc2s4quMdsZAeCsegLV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5va13oTGF7diQs4YsPTL5xoics2aBV1JxCpmr8XahoGzyWBAd1QjZD96fLTAKob542h3tvFYXwuc7dxJH7kP9hmL",
  "key1": "43t4KRNFadLWyggqh8g2rncMazbWPnaRZJHDTdLyPVDXzjHu5BjtXbVKZ1eZBZr7Xbt72yt1Mh5cJK9bfgfxe5a9",
  "key2": "5V2E15rFJMa5Zkk3zUQkSNx25vMLiAWD5qy5J913WzxZZDbV6R2P5dDgX8YQDtNyXEBKtuucHu5P6HM7mJfaVgZb",
  "key3": "2AL6GTZwtQ3zexCUjswGZ4bfH3fJS65j4MrsLPqLqKtz54LL5XBqUDofUBPNUhfnCd4CHsNvopbF9DgYX7hza2QC",
  "key4": "2ycQ4sqLfNmoV4qpBNxoCmd8fBPWETbAt6gY9rByoZ5TiHtesy4MiqAhkj85dsz7z8azozTSuBLG6huKe8RTfeUA",
  "key5": "3XKSQpdznYdMQ87LVgyWemGWY75ZAq3NJ9TnmokTgr7wrLEmz4cG9GbKpmmAKDp5GsmPgQt2vGc8NAGkzAm4eyMp",
  "key6": "2ZiL4tyV53h34eZdx68YD3mdzG8AVXWwk1RSxrBqtgChG5RrC2Xsytmz7ZX9A33oKQ8bifmKf6TMzkPXsLT2DXen",
  "key7": "4EsdAeGAJA4tUwftdmCoxU3WgwjVeSQNeMqveXkfCJnkYA7ywChmXq2AYQvfcr81MCgDDa8vqrb6KiLEwVS8WGEL",
  "key8": "4zrqFFSXMTaiKL4ZMmAtbiZibRym3mtgbhAXu1HyNGEBDKR1gfukHAcv2eQmaSVCxHL53z5C2W5eAgoxatZXKWJE",
  "key9": "5xdSWXjU4kxGdJw5rQssDoVj9ME4so4fgfYv3BzwDHSjnZsMCwb8oKxsTtNB37bXfLJydwSVc13nKFtHUGWb51re",
  "key10": "39tbvCwjdDTiPDd5NJqrRPcu6CSwPD4hSoKAoAnHVwmmBJAUNKu8QwGAF8PbQr6ZWThbsCmwqtMPLtwJvUNf1cC",
  "key11": "32DAJixgKYRR5ZFcNpjGFAMADMCvrmfHKxVi1xbhzPpRGiYSyqj7Tr4V8jgrWJKrQurBfCe5fTmFJcVXfNYxWzWA",
  "key12": "wvbzrNaiGTM3G9oxeSguu8nXMrk2jnBRAVz2SuMct1PUF7Mc6wP9Gc78abCUEUuBj3bK1eEs1iLAuXXWdvzsNhC",
  "key13": "3utrZgd4jYErSKaKbTBfTHrLhLZTZ2JmN3tWn2vyVDqfhuP12A2bDC72rTW2vkMtN4AvTAyPPcWaPZSpKncLKQLt",
  "key14": "3E6ukTZxwP5ssigMozoc3qpEne4Tv8CEfHMY8FGrhnBYJ1fSjzqjybbsSAMfLEbyfxzd3rnwY1qvpunX7T6gfs5K",
  "key15": "8CVBaDBLDNS9PsVRXQCur1UTr1z8QjAKPGLp9B3Ksq61cmCY4FCas2gRaxMoTcHaQUzVzLRN82LEeBRHXjhJKaE",
  "key16": "mtzVpXacNwHriMCFEnjVQkxe6evSEYXRw3xWmrzvxUm5LjKnme7gL55nhUuJ2p6ujyKngNgN7v7P8Am4mcYYkfb",
  "key17": "NgwtrerD3TcQdenTUeiH3FDiC7Jn9xjaZ65dKvBfgKVXRuZoBhdZ5muL3LfV3PKBRHZcuhawF74KWhza4DKLP5j",
  "key18": "4JkEm6rvJmcYMh83fhxgnoHCYRaNMGhppKVnVyAWmXircWokSzpdhXNbnNSBzBDgFbvJsGPF3Zh9XsWVmeNm9Evs",
  "key19": "3859DN7KCVQwKNS17qmcQ1xhuz4v6KXRcZNk9YR32cFYB54NA8TCASEwoXVNreJYymdpniWMgh3DcpEsazCvXGKK",
  "key20": "3RGSmPuwBzJyW2sUBTQ37xKfybvpCABdZhsc13b77b3qNnT1CecfXLc4BP4CHXP369JszRXd8QBB7G3AgjSLbPGH",
  "key21": "2WkcHH59G9sdwvnrGMtQCJxF58BPNLB8xLtDn2aJjXkAD3Knf7WU5YBsHaDctgb3RPnhakfqjH4KwcmSBge5pZcn",
  "key22": "51bW8K2NVnVBg7FCafZbwRxs7Z88fNuWRhhohQ9u4eUoAxD7Zd24xXA47CgzMMWLQyNa6ThuXSGVN355P5H6bkYm",
  "key23": "2PjVrQU1LNNKrhyXv4MnURkSxRWTuzBAU3JxCR1apjAzsJr2oJivn9MrVX74WkZbN1uV6ARVwgqq73HWa2v9mbS4",
  "key24": "85eXha7bLxemx9CyvWsvsHa4Y8CtdK5UKciDy2UBrsQ5AZrwJ6u4wZeWRdxSfvEZWZuBKzvwS6xZNiExHR9BUhf",
  "key25": "3sJF7cfy5ri9YTczi6GjU115y6DUhf5nr281aTEZR7EpKrcPBivuETxMwHSz6chPFgjC4C4BrjK5z1fJ9KAy3iV4",
  "key26": "5pKcRGbgQcF2bH9B133aQMAU9aPDDnFgCHWmXPWYzgcEPKhLTYShhkx92o8GA6fpRMnHiZnC6H2zWjj7FTcgHBSn",
  "key27": "2zH6sxoxZDRj5JxGWtoRaPjuJZat2wUdN1ZWAyBT5KZ6ihqd8T2yhgRcJN5YQUSfJJDiGnnps2bYoCWc3GwY9PMh",
  "key28": "5MYpvEB8haXeU5FYCrmqg6ey78sc57vwNQiE8HTPrBasB4xeaZ58WJHKAn5tBLrSB1JNsEVfXAAqmudFMaYQLLdz",
  "key29": "45Rqbu9izScwYo89UobcvaThcKnVnSsp3kdbTfg9vronDKBY1NmHHnCJBxPPSexFCHXGrgsCWoKd652gZN4ZCJr4",
  "key30": "2BR1tSmUmWT64uGhK3BRm7M7SRBqQVbC1iE9y9mkYB1bBEKdcP5DMEczZBQQYBnkoz9ynZc2aJP3WXUMjmZoh5dn",
  "key31": "4TnHr6HCdEELfTv5CZYQ7dfQkrUrAcFeH26PWzkkjoeD8hNgKaf1cSWVUrHJKW7C76zNQ8kSyegnn9NcdPWQRu6L",
  "key32": "5SQ65UC11J7LQxwmY2bbuLb4AhNcwVb4TubmbWfgUwaqpfKd5qGAhZFt6QFQQsDud863wruz5XYJdVocP7e4uJLD",
  "key33": "4hRChEw9AdHysdQYxCsNH3W9gnka4LCnqKME7EtsCWFzqyK1QTWji4byUjvvcwnJGResPNf8ux7CdoxKP4VLFeEM",
  "key34": "4X5Kj787vJNHhvn1CFY2AJkhsy3gwj28z1REorn9hUg8UzKnwERTmmoxgFN1JgJano3z7qMebT5NGSof7amztbXY",
  "key35": "2eHTF2C56p31Nygprfy2t9ZR2pUs7Vkx2GSugZGDC83Je1N9Tnj9i8vwUfpJwXP9iAK1funAo4WHUC7wVW8tTmCS",
  "key36": "y82QgJJqYeufYJJd6syXZydDzjrKm7JWDLVr13EKQswF5dhoMHJtwYWjCSeLuW3TwmxHRyFK1dUXXrotJAhksaP",
  "key37": "2hSQQrZn3RPT56j6HLkqwbsLRuCCYaMHfuXZvKPHZVR1fxaETCTckvkYoCuvcLqU6HRSHkvvjukZCSj8GE22BDHD",
  "key38": "QBLZ9QcgVsaRxHTn92xFVqsxwdmug6boRBFCkUoHGa7kWktseoWA3he2uVKvbwGwhzroSxj8VhjDPcT26sgscrq",
  "key39": "5NR6Lu3BHZ7BFTkQntkXLtAxHGorFvXDQochKjfyZSsYnDnLoErBvmW593pC5L1XR6nvsBBAPrFwEMNANhXfrRrV",
  "key40": "5CU2Spp7rrFkhWv2BWF1hNEkHoJZzdBfhVbHUtPJi4z9mQURer7X74Z4ibS83ZN5jqaihXAH6HUcbsBpvwsaU6gN",
  "key41": "2SsSTPJPVkFo1v4o2WoEVwdRf2Bqydz2eN3K22GtftdbfakSfw4t7spmSU5DNoVKEAmDA6jkJtC9SWhJcY6xiwxP",
  "key42": "WUXwXQodXAmrVVn7s1XnC8YVMdyBLX1288BiSxnx833vUasQmoYE9EfitubNumh3tSSpU3XfZPJoykQrv1MAgT8",
  "key43": "2d4itPDEXh1YjMwF4RGkEAXBLJQfauCLaKJfHJV6i7TXjMdG3Vgt8KFhU3mEDU7BiVfxes59bpwtT1FU1utPhPJZ",
  "key44": "HUtywJZ4UAmjJxGXbq2Z3RoRxjCAczFzFAfcV9QYKZs6Rim6EBQJ5bvKeAx9fkPDbkMhc9yFcujLMPSFyxxtTXw",
  "key45": "sePhkCfpvDwdwD9es6QUUC4wtKffRuxWZkZMS5MJKRds5jwDpLCCzi4PNQgvAB7dSGKyu2tuFWXRH5kvCSaTAhP",
  "key46": "23ZRPdjQForeeqvQ4HX7Pkd6SSZeBPLfwCCHGsX6hkJ5Myfncps45mv3NMvURzB73vUtPcsNWMuWr2MDPAfcfPPA",
  "key47": "HhmVxX3og2DJnJDBqByXKiRQtE1qpBoxjNwyJNa8itPE8Rde3ZrRV89Z7yeumgQ21BBQL97NSsLbkbiV1tYf8pW",
  "key48": "5FijgeqaqbRj4364TgHEycnXUhykQUAprCDHFj1VheYg5EjEW7hRqHCZubah6GpTqtRdriHrxLbZ63EwZcPKqW6W",
  "key49": "2EzCysQ8XuprokkY1yuvoRQnoy4X12RYktpPYZ4cmwSLUemPjArFSBFQkFBi3tH3FkoSmoi1nTNNSMXBG5enAryR"
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
