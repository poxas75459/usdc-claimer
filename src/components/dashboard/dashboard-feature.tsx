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
    "2Y5D8KjRWmR5xr7Q9RFUYJAddWkDEw6bcMbEw6JVgyp71dg43wopKEN6ciXjKLTsrWTZ1NwdsMqL4kGfpJoZb5JS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eM38tpKMkm4H2nukLR1LcS8BbaSzivkNrUXU8jNbSFWjmyhHefnDKz48hpHGL4j5BqgbyBeDMSLgo1sXp4iKoh5",
  "key1": "4y2osgMMyYxLJ7B9hsHjawoGaDttpbZiFCco3P1tzCEvyhudBvaRgLRxY8jQservTRFGWKG1YDHhPcuCGCGsekcp",
  "key2": "4HcqfTStsuSKQeHAo8c2DkUxeVcofpnxTxF1wYEBXrjFGTqybpzSmZ64LhHZRyELLKvM4t2Lef4fJ6RhiyPBtpoR",
  "key3": "4j524QJuD1ztHWYCN63WWAywnD7upNmRevtdX7G8U7b5TakfZM3uL3apvWKJinSK3ywPm8vvCsZ8b9Y6SVJgy1Uh",
  "key4": "HAiB1ak1uHSXqrVeos7c1DVf9WFkCx13H6R9Srpw3F2fnmdxTUm6hG2Hg3i94ySgfo2QHMuwLCiYfDAMiamS3Yt",
  "key5": "4m18xqTHmeBYsbChepFAG6RE4rwAyWLCvJjo6EkypdRj8iYGHihRgYibdPfgv6LyvrZWUQXe15j1uBAQwQnb5Lj1",
  "key6": "m62o8ydCiA5WBVybLZBxABk9CeT1GH7mGVufqe57wJPAA5onG3UtCfvUzCfArSTsLtQrS5XqiBYELwHiXEsj8Ke",
  "key7": "3fyC5HYrVii7FY6iu6691KFSc75Crk5jRWfSsouKDTABs3CevbjfMbWDEaEMqRqmo4ymSCw34X5AP15UABzMocrv",
  "key8": "2g6GoFfQtG2C6ZfPpkAFCT2p55URnRPLCq9bgFipA8F1P7r9mRTNcf4uZJJGQNQpdw5a7myP4py19oyDtsMRKi7o",
  "key9": "53zayAvBT1h7N3EzVWcb1hdzC9Wy2QNd3rdgXqej96SZGNbTa71SukPcB4M8wBXPELB6Rjgv4A9iL3dP3y1AajgV",
  "key10": "KanF6WtzjHhKqSTiUr5FaMBcuc4M3GJ7PLuRe9idKrJ7rJam6ffr9TVnmodzAQAKaNtdpBACM2EdsYy74niguLS",
  "key11": "pgVA3UkVFJu9hkiaTVCLFtj5S1eqpeKxpk1G8J6ZFwViwF7T37wB1Dq2FkGFAu2NqfRdxHLah3Digkcuu45nLWy",
  "key12": "3VFnARqPMJmVz44FCuFPrR6pJNXRwN7Js3GSTX971uq5BcxneXLhF5x4RKZCEMwhJC5XP3Bb5haSN4xr4wPHEUeY",
  "key13": "2ssxQgbfEJM3TpEaV7pj9rnGxn1ucQtDQsqG7vCKdt3nsmNKiD6R6LZmhJd62WCVxkcfMfivCsTzkuEsr9MBa993",
  "key14": "5YaGBAtTzS1Ui8vL1xNGygbGEvkBDv1KkKzTAVEBKbmcFy2smwByqcb6giMEvFmENAgqgGjhFFDvKhB18bToLjcX",
  "key15": "4Ak57tEHaE5sbx2idShsk4TZ4pdS5LZWAPEvUoboCWLP7GG2snsSp1nqQvd4PsxaXqLMBPMox8ucGpXKaoNpsoiJ",
  "key16": "8fmpzXPgznFvmCNw31FQnTAGLCqswu5wg6urz11oEYcf3vio5DWBd5BjPJwwA7igbdmk1aZo1iSGqLHyeDhDTFN",
  "key17": "3EsSewYtVeafc5QcUrxzRt4TqY9f1yuLDaAv2ZVxmNsJsi9KQTJ4B1VQ8zQALqPCap7WhaUdrzA9p9hYkU2Ng4q8",
  "key18": "2bwQuHoWXirYbMVvPjuqcCDSgXVo4b56832K51YEm6ERog4wDVUtMFt1b9TXSyNFsNcdmGZVW9oXf6wyTcKGPCaE",
  "key19": "3GXhNYTYfBABjkcVMEV53E35Z9LUYTnky6wT87iskkEZXRuXf6RZfmsjUS6myCtG6qawQ4XB9gVdp7nMG55S4n96",
  "key20": "5FLBkypZQvrXz7nAGCrFwyiSqJ9BpcF8cvQxPtHjt2S99XwWuRhExP6ASPzMEwq1LsHsGYgFCDzZtvCtpu4Tci3",
  "key21": "4rTEGcwAvr8yKtnfELZ1iHNWntdFdyx7VushbCxANh2GuNco8Ne7tchJ57ieasVyG1rhxUqzQJVEKQ3sr7rS4yHY",
  "key22": "4oiTqZLTizdNVxAr9hmQsrqb1QYjKXMQ745hxRcKJ9Q233skTH3mVidJFuMvAGHRrLaGAYZ4LEaF15YdtnA6Mkuk",
  "key23": "2vUNhkig8LNHDs4coVubgT8a8SqXVRo77fkrJ3sh35vC2ff63bCNuLhDmquGwtZXGQ1ak7N4KQoP7ucBEoCNVP71",
  "key24": "372GfpKrwgMdFouHEXKhFcRzEHEuS6nuCtUuLfCSv59ZKeTiiPwQ4kdN1wBohJyCbzdh1SJKszRBa7HfsRqFrg5b",
  "key25": "3ZWSRDGAa42MzcBmsDeEWNV5483rPrQGq2yUGzsUE44NGxFyNwBYgnENooikTLuyb4gQGUSxAEUdHh9BDD2MF8HF",
  "key26": "5yuxVtWDXx6hhg3dCQp4HLrf4WEhXKUCCThWzntw3oNeb2Vx4AtUnDkLv2KWfNkkHix497p5qRTEEWntqM6Yz3g",
  "key27": "3fCAKW27P4Bxca674H6fqeo7UmuzDtMnwodVBAsbFPVub8PDMNysboNn7da8vPavdst4d3wbnRaNhmWP93dgTL7F"
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
