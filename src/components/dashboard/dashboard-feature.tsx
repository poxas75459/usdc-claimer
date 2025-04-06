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
    "z8b8CoNqMAc23TELczmN8ZKmyNBEHTAqiVJbaewCngYQQD7fbzP3NdccXArmQBabyVtGD7GN3BMMETizcit29iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lhw11hfc12aUizfJLDJbWTtLbdSLf8PUcHjbHV6MQf4Nhtx88uvKG6rWCXRCDFLmEbtBwinGVi1GGohT5PCRrWx",
  "key1": "55nV3MxcpRFV7suBVCbVSYxkw8AYy8wo4VM9ApWKeTu5nW44dgL4t7ibeTeEiA8TeDKC9inTkDNbd8vCyJD3qJdf",
  "key2": "5D67X7WNRfPDnrPrhsFowMM6vcZVWjmek3qRHnqikUjoaQDNikgvz83iQAWKk5MS5zm3veeSNRcCewpGzFZ9WsqA",
  "key3": "4nRfcxTCxfGzXJr11fWGUzrDLjXL57TBBuJC6dogoeEXH7pjPmKZCxw3Ze8AL5ai98mXLcdZ5k1EjRA8YYLF7Zt1",
  "key4": "5R5ntodrUe1mPfDui4wxPt9K8PBj5ndpTf4BtkhB7iPc6hvbfwQ3fY4JbANz5AdGi9KwNBQiNCrwAq2T3EB2Y9v5",
  "key5": "3QyzkYFJ7aru5ZfyZUW2JMY7WWCW81Acu3cvVGfWW3BhsCKa2igzWeF9vQVJHncN2kgZaiSqsdZ9RASNQqtixYq7",
  "key6": "Mq8LJp9cP1H45m7fo9CfY2uJomsoNQxyaaGvFdV9bUFnmPJeFn9g5tf8TVbpqenQn82ryLz53Z2LdRjRgp2kWan",
  "key7": "2a2C8on6WxVKfBTGMFkq9TmqgAJC2TbNRRBP7dVaWtQdENqDXiuLjApc9ztESU3dwgyjnjzVNAmxeQgJrLj4tcii",
  "key8": "3ELnqtE1MGHi2quaBUXG9WgbBz3NJ2P93d8KkciRk3SPnSySbwXdCjwUnVoxaKccyoJM2Guz2d18LLeoNNPVmBsx",
  "key9": "2nR7ZYT196PX2fjptCDCNEQrRMk1dL4tVmUEu7us8Zd8XGzWPEhNJQCxf6J4D1NgDCy3s3bBYruU31aU71uehefP",
  "key10": "hz2vXrwoWqTppFLtgFgkKmpBpFhC79tvqkw7vxiUDTVAp9GGjjcicudaoyathLKr56fZyFuVFB5cESSAxiTiqhD",
  "key11": "2rCP3S8HH1Tg3VGfgr36HtbCG7wPxRFt8vTMfBCunhd1Lo52UWPQPrcP3mT7DUYJu1wzk1uefiHp5wfzgb7ngVvS",
  "key12": "5mSE1VmubuALbSnJ5oden62H3MMEyM24xr8ZWMpHFP5bQGYZ35EkcxA5DXb5bAWxnaWJ4Hwhgt2Npe8wTuxGijAv",
  "key13": "4GRif5k4dXCwPrYc26xkHDGsmQfXfC4VXgDQxyLvJFHHkeiY1DV2ySg7edH7ZpfPFuLE68cNWEBYMT39sMwWR7AQ",
  "key14": "3VCeyxsxLTCXXcRqunKHEUcgthT47HA4XiTncoQpD6fi6Tswep2Vx833ViTMCfn4DovXuw2SiAvi3DATFXVkEzdV",
  "key15": "Ti495MGncmvgdFgR2aEPLaGwJPae8pYZHRzHKcazpTZYTLDDJyxqZSFv7MsuNwCZjkP9yHrRm8vSzuCEvJEvdPD",
  "key16": "4RLToxXuZZA7ysfRfsugrbwXsbKTL839uMvuDs3jKSpwye5tfcuPjaSoh8hfdMmmG4gQQGbuaeNSvAFNTnWgrktP",
  "key17": "28dA9kQEg37YPMDn5FddbRpb1FENDBX3hzkj54n9592fNE6wykxqD1DUQPJAGv6PyYYvCzj19NDvAYhvjymk7D4e",
  "key18": "3iGehK9aGQUvqpupA7cjaubU8kbo4MJu1DeAEbrJpNmzrfmEDK3iCdQBbC9nwAS36zatwHUk1LfyXPUUpT5tLhDr",
  "key19": "WvGWasdTBNNzJcgVEjjdeurU7R5AaW2F4vN8ZhtzuSHEFQgKctXz3wMAoRcQJ6pHmAHhd6PtkRUFzVPcdbzQw31",
  "key20": "sPDoX7upTXXhAqNQ1ihn2FHWN5TmChMUUfoT6nCYDiGJ1bsU45MsjssBkDJaXSM11vhyZmPgEZA9sZtCeHw62By",
  "key21": "66LezjYcuWpKbQQL7TAS6BeSTrwKFubvThUDDYH4vRabQ6xSaehZ7N6w1oZyDgMtSz4ST1pBBye6VWCwFfViKRWJ",
  "key22": "3UYhsRm4wma7yXKu1hjpMq6ndhQNmbhQuTLgifX6VxGHqY9Td6Wfsk6CvHMPbkEUWqrzxaLaHjuUTD1eWnAskkX2",
  "key23": "3fwf75De19oUL7Cotb5nkq22D8T8k7aFHJk11ozL937T8FqhBqv4mMjyGFiqz2476DLwP8QrkXayTBFA6wcMh69v",
  "key24": "2K2pqH1pp5Ja4NjZ7zUuyWpFSLWWxgbcoYWncR44FLeJqEB5L2mrH2GwFS7X6UW1piCRvwSq7PrnqLWyNyjn6uNg",
  "key25": "3By5atNd5VKhw9WAhqSru35thf7AzD448eUpJgivrtQwVNNFd23uQKsvqiqiW7mKFNCDAknXSEYh58jNuDLN3hau",
  "key26": "5m8GNfstq5yTnpQNn1MaSqxnBHkyGvnf6zSHN66nZqv4VT5SNkZ2CL461nhCpbwNvYTLFGpF7bSYLrHm9zBzJCcw",
  "key27": "2DLnFFMbW1DuwA8RrMUGv8jYcoBesbGkFkTKX3MQBmggUsKYwm596YesoPU7cc64qoGeBAXCEZQnGuYBmJ5k1KPw",
  "key28": "4NVrzcy32dG3U5t9jb6Sc1P4y5HRqf21mYaTDnvkktAQaq4p6Lr1rndu2q3Bwkjximfbc9o93Sc5i4wzvFwvBM2f",
  "key29": "24ELB5mBxpGTbUqxgWquPbGMvUEkK9fvXvYs5XiernWSZbfyLsFS6rnjtQXhvxerkYyci932s5i4iHhoTU5WykCc",
  "key30": "2biBSgriVEPTBXgD4DZPTBie5T6dKmifT25SoXD9om1hPdZgxyaHVdPoG6WZuG9P9ANKhNB3Yjuh61GXaWX1eze7",
  "key31": "2BsF8HQuU5ZNh7FRpSRSJBpzYNceSnFs5o5ecgtypquyrvSYzfMu7kXkAv5r2ssonduhLUBNv1PNnBMq1xTTsbH9",
  "key32": "C2Znnhb3HeF1EvbEsAWqq8xeA4pVa5fHdAyDNJ5em4EytScAZ9Ri7SHkkyrmiBBVnaDX4C8GzzcBYavJXaPY6VW",
  "key33": "4fq2tyShi1wpaunAeNbeaQMcbJXFcgrA5MbFMgnapnBWLUSLmRPetxTbkzMr7xgPD5SU49fdWzytLjjQqjcJMGtK",
  "key34": "2fptSWoxaaWXFB8nUXmfdAreWM4mTCkep9sxTgPv9tdNHwShPh4Ljjsa8Uic9NDcob9URQqRV9wPzjF8LPyqd6Av"
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
