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
    "2NV641tfb3rPZFsxHfmpx5VvHMhM7Dhu9UxX91mLWeZdXWivZLvjRH2JucxbUbp1oHFdmgpqR6Y4QZ7VBUbbvihM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5HpAo6XzhgLprjXTeCFjRfibyQpCwGaphayfnY9aKY6jYEXfpVsJTku3aSAqLK22xnKPcVW4AhxqvABL74Mart",
  "key1": "2nYBDZkxLL5m2zkrsCf2QPzJWJrs6ycpAg6rqTq2hmerc7hhExGETtW4eYgJKNmgenCzsbRYfjhXxRsoRbn5HQLt",
  "key2": "2TKMWRVhbPEfmmNLQsritqaaGZ7XH3kDebNaHhDcpFb9Z9YsWSEPdHMBEu3g6E2cTenrqtHmBKUUcCaSyoSsU6kP",
  "key3": "xNyQQoZxswi6ariUng1ubKPKZPqHboC8p1cFNkZhCfQM6E6VtkiSNLXrdQtykp5hsVph9rzgjGAEMPvE9XJWHk2",
  "key4": "5L24v6AGfqnDbiqYSvfpC7WWHZ7PPSokvNzEcLe6iweTf68CucosAKNRGiu3m7ADcpz7B5dex5txTAW8gnfd29Ny",
  "key5": "kFqSoWECdgxREmMg8ZGiR1gMaB2YaPG7HwhyU8Zmj33ZvcQPQhVPtf1X4HakZTXnEfhkyAqUddD91C3vwed1jeA",
  "key6": "4dwBF5XVAgnPQ2bmgEZmBAEpGmfZaVAg1CWoM5Hurc8ZMMnHhQZYrvZa5h5iSFFX1AkBKeCgRzDZTrEH7CNf28L1",
  "key7": "2JooLF8gr7Bfa4RAHpjWVYYTBPnicHeG7pEJ22qkYgtRUc6vBZSQbgFLyGFLAGayoQEqJ8aryaBTasrjnvesZahp",
  "key8": "31TNGENsPjDjLNPncdZ6WCnDZr1fqHhKav3UnrDy27ENigWNLYY7nTmmVARGJKf69FEV3JcytWZiFZCFigQWkAXA",
  "key9": "5NAtw3qLpEpKT7EG8nGqbSVviXkmut3JNSYw6HVHVfrHT74EG8LWPCoMu8qhcTdBaHKqV2oHvbUkKcvUCauVUTAs",
  "key10": "2ui4ngPAFKCaRo9z7cmWodg2qKky7V4EUEi2B71Yn2tcYv9d9w9L2eMh5kqzn7wdr75S2F3Z2pPCCJQhPyFscQKJ",
  "key11": "3oumPE5GGGzzjB183fNyZAeRm8TkTagTYBXWJBPwZjvqGT6ruvgoPuzxzd9LFNBn7rczviC63HGXvqLosEcimMoN",
  "key12": "qrRNaEfAuq566GrodXXwJf7d64B4dDqQqPxg9k9Ltwq4ri8pEAgLzmLuPSk2r1qGH49Q5LH9XYvzAR7u2YmF6Kn",
  "key13": "3yQiBmGgw6Ldx6t4UoYm4dmwCdAq2PyQUrxw1QzNu8bb1dsnoTRQ28FXUgqh2pRLK9VZtsgAEkv7E78M927orkuM",
  "key14": "4R5epuv8A9qfEas7d3iDoAJ61bPuxFoqaUxrrTraNS8ESJT7wxGkv67hh9co1GaiShTnDKt2345xskFRQ3JmjUcU",
  "key15": "5MW8mkzWSxYhYw64YD7rjyncCwJG5RkgbqF1H8HUYE456icB2YMHea8xNAdFrnnmLvdmQUUrWyBuAsyNtkWTJs1L",
  "key16": "2zZdbBFTkcS4CqKQBpj8ScjRwiJmuR1bFroyGZUPNZPtuXpidFEeNiyHL316mQxLUZaSrvNxe4c1BkMdhEYSmmfg",
  "key17": "5vrVKCazuaz7uRnpAesn5xZycV3KmfReVpesiQN8ZKEjCDdCdqiBWoXjZxBJASqqrtmdiLhnkuJcTqwFY3TSqt9E",
  "key18": "5EL4ZnzPaKHSox1koXV1joTb2hxvmnKzTgMgLBfrDckBHJJVzxHZHpK7vr6sw7C5Dm68yvCUfFaGXbyxc8uHtWpC",
  "key19": "2EkbANFGczxAYBqVxruDLxYtnDrcmuh6u1RAoSXgBEd5eoC5Ech5kmNRXqDXxQR32Q5PCG3RkYrKuNMzXin5vXfA",
  "key20": "3mRtYT9bSMV5cwJHMfbj7eMXmUU5QVeYxbJqwqJgW2RV4TE1Eqjog7vmPu44Eug7qK19Wpqp8RttioY66Ees6hdK",
  "key21": "Wx28JxUMToR9Pzze6MC3ubcvsDwQdak9jG2g5Ed4hmF2xiPW7gMyQJ7Rj4ttLGrqKL3rWkbgJVitcLsf43tHZqk",
  "key22": "xmZzak3K2MVhhd864MCEBk74CLT8j1Tffi3qPVwPw5nDVjxn8BcQoAKW73yaHfG43ySVNdRXT7wtXxvfQrVWTe2",
  "key23": "3eoYPGEvyoXwSjfPeJmZCueujmpQwnu4D8a6QGc19PnT7Ywe3LUs9WhxsmCuhJWLVeXEF7KKefsPcVvNqAEgNTZk",
  "key24": "5c4rijuuUVp9rxpXfPqf7hQBQh95YwrpoqepPrUx2wF8JVTo3Bcok8NbtS4w9nSg6u2tia5STZxKKdW8VXY3pjTr",
  "key25": "62wzGs3PVTiKKUY2rP7cW51pSEjU289WkyKkd8WMPFDqydMPm42iBoXYYueGta3kAQTNdHXd2d8zYrFUzBZRJ89k",
  "key26": "4Xi3KTgmpyZJnUD8o2h77PSKsVbdF4YR9GZtNSk1NsDUkkdAMoaCcEJikEn6g7fHdS6JGmKMPT84M2BJzouSLqxf",
  "key27": "2qVsF3MM5qAxPTSv4WCqeEbDTAVBLcAWidpd28CTWhDWaD9r5G1EuWkmpA79pVajsrYDXYUNAT9KtRE5AGQKXV5t",
  "key28": "4wYuaJuNQCkt9bSSX3uueCrqjwy9We5VcxoLefuL73j69mFDttn9WU9aDu2RiKsSBvSk198pKwafq2LmkYGycru9",
  "key29": "5PQMyhyZrsr98a4xybKB3vyBeRovjEZb5VfNwBd61X9Cbf4SWFU6NSgqtEKqjnf1ZNRp16zgRvqEyww9aWrxcarg",
  "key30": "58fbS12tR9TgoMrFfdParfvWQR4XjHcAHcnUwBNeyArw9fpQYknk1j9YNpDTXY91eR6djfmMxeKTVTgtrG5Xd8aa",
  "key31": "5Q4iCnbxq8TV7HrTh6bpyHUdqLaQw9eDCKD4tPEdTmBv9obQCFxn1quXABWbhDTHDrNTzNGdNUr8FntzTyK8SaKt",
  "key32": "Bt46xBajNLHaPbBENLG29wdW6cEy1ybBhKNC5q6jTsDYpWQc1S6MfTRbgzU5W2hCyRc8942MzAYu8v5SjDr5bux"
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
