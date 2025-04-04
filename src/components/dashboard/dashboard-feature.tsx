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
    "3CEtH8vnXQk8mfkNGVvbzuqVUdtBFUahok2LRgfaPR7uygGMsdUTu8nV9TQDcuaPZaTxtj8GQaVjJQsQbTBWkTbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aiXp6TJ1xLbW1FWWa3UpiyDbafJv1oAeEHmYZnv4uC68pRT8ipibzKDwC5AsmpVZFxsk8PKxt3Bgba1gCfXCFaY",
  "key1": "2ymbMBP2abvQ7nPHpNG1qGNvq8SomtaLGR89e2Cf6KkbU6DPEoJATmpWM1zUUV6NgTeiicYqPWpb7Q9QCdeQCCj",
  "key2": "2fx8yZcwRpcqsGpfeS33bajUTAmPz7KLZstoxDitk3s34NXDFEYk44xwGET5EMZi2p7rPrjTYtQD9mHfTxQVD6o1",
  "key3": "4VsCBAfK7ayTny6WnmNn6QPHrnoFTGZ8tDaWD9kCH8xLG9chwo4v7jc1D5ioHzxw8FmS3H9qyvjHnGSFERtFVoPN",
  "key4": "2sU7ZaSua8aq5baw55649iVAVHaRAcqWydwNbpbirmodRNKGdgLJohd7V6JG3Tb929B4hCgStDwuMxBckhVwFGuB",
  "key5": "4BJD1wwFisFuQmd5pwiQ5FQZjD8UFaisg9V7Z6kRPFyY5n3G4PJT3cmVqHyAjdSdLHMRzb2bT5UR4MM1jt2kAtfa",
  "key6": "3SexvqjzHxnphLSorYCkis5M5e33DxmXgcVRZzZwYT6drckGvHXzmfyYTyr9a9D1nwmRBhY9SVhRnrcF4JPBKwmM",
  "key7": "5dvLANN1eBMiR3G7XuDkJo9TQaynAiUronY8bBmisCUxjt8PnDQr5pUXMnqcAWhdDXH1gNfCD6eWZHWzXyrwfguR",
  "key8": "XiSudJAmYxsgoxw5P7URG74feXhJY3JRnvKMvr6F1pTjkL8UVaALBo8zQd4wDFwZzHSwWU6MwD5qyoZx4GFApUk",
  "key9": "3bcda6nkRLHqG768Jm9N4p6PqU4vJ4qb3Epx7fphV3xePo4xw4z7fXfco15q9v5pJdNisc7sJHsYMDycHry3F1PH",
  "key10": "4r6vReMwgeDTnbcu7h1asDru76eYLoro8XKWM4Wsr6aRF11VUdQTjxJz85Uq7iAMNLe5cJJXNqKenLAcp9D4ySgt",
  "key11": "5gHCrqLxd7kbzBhJGGYCpMgTbCjcN98j3sqUX2Cu4wWQq5LQ27qQLYmsxwfKVtP8ph1UDK49bg6QoCtVEwJSh9db",
  "key12": "5z3xZ2DbEWjMFfAMmWJnHEb13F7fJMiRU5bWZap74FkqSHPwnAgFBTvqGBVrF45PNKWiYpA1SC4jaggF4d6JyYxd",
  "key13": "9DBsUVmiN7FaUn9kVUjZTpvJ2mkB6qwyHAg9JfAP3pvm2dfLui4nvjsednygf8T2Jzo4Eq9m7NSk3fdrWzRRiFU",
  "key14": "5SU2nMMCRZit9k1tbMwa9LnjmSXr7iTwV5vwFLTHNLyaxEBGUB1MgizpMbzUSNUPcVPytuGDFeXXed69QZ8HFf6p",
  "key15": "2TVEb42EEHGnh28QrvUwqdDDbBw13bdbngzbFAhR69a4nxUvaLSLE5eHYNpPih7bvugN8oPa4arQj1GpnhfDQtTr",
  "key16": "2ZhCfPwvAr3xt8zh6B7VHq3aTDHChSA1Qfp3ow519Pz5TmDJcdGSWrDuPQULtG2N5pQrfZEcXBMmEBCTvw9aSfUU",
  "key17": "41ZprBgdHebCav8mesDJJgSwW4eVzgNVjxGu2pFH8XoMPRnqexnDZgDFzrktNAi4Mx7vpTq7k8SE2dZsWYkYFecK",
  "key18": "24jzwoyMe8smVbuMfHm6FjCr1bHJYeud4jXRpVRHAxhrEewNXtLmJccLFbfd7dQffC28oaDYUD77LuSTzc9j83xs",
  "key19": "35JkyyEBSvqQNVx6ZDayp7uV6p8yVAKyiY9PiSneuuVdNFPjsEE6iB5FxA3cb23293ShiXDqbfMDsxCPr7voVXHN",
  "key20": "5tkUeBX677vZ6KVJzJRMt5yorqPrSV2wsvRFgWvZtCTJkP4x883sHusqWbTerKwSaYPo8uaNuuFdE4hDWSfVbuwN",
  "key21": "Gz7yaa1a4AX8JoP9mDY7FDX8XxWaqdqJoT9i476ZGxqKPJnqsb7sD4jNTkvDCTm1GonZjw47epifNG4ZW8PmR2r",
  "key22": "5nbXgjbVe3z3sPh7EhSoULmoQzTqmnymcL6PtKx96kTxSTyEWAEUdM8QkoifGrWJVUYtm4Dtvu4HgjuEYYr74ANa",
  "key23": "62EJsmSGq6zJxNF8NnNnVFKB9d5Da2kRvpybW799YYmdnPj9JidsiT6Q7wVvEh5HPwgsRcHSahnqnLDi1a9Gf6cM",
  "key24": "QQHyb6dctxwLDFMjnV45jYvtxorVsqH5QekfYoki6uB8pr9mMSBEBznQb3NUHq3ynq2SQBCU9pPwi4fs7xxDzDB",
  "key25": "2gvPU47aPVb5bws3Fdq1nZKYEysAmr2zHmBaMmraGZtV3bcNX1YuUiJgmxjp84zELWoYcNGVWSaSYbMtTPcRCrKQ",
  "key26": "21wSP4n3zNnxG4AEPaNBWArL8QFWRq5KDHopwUzxxQyBufTfCFw42Hzpx7ckCjPb2EjxSFkrozhL6tDjjvkh7H4Y",
  "key27": "2zKMRrH36FjGZcsm7TbHXRubWGmWMR73fcHh4geUYNLhQ9GL4Xvo2TxoBetoJj23k2Q73TSLzKoTsApveBBVmSRb",
  "key28": "3hEEQY1ercZca6HBemY3WLct9YSF7BhQnAXP4HNe1QzBbW4jG7C5Wn63BUBUXT241JajrHSUXrFGCQoAAszNZgho",
  "key29": "4hEs9LEDFNn8QV1Nr2qtBiN5tUqxnw5EqnR8suy6E7REVevrRfHnHE5Z6HBQq5U5EmC14fA1yhp3Fy6gjqSqLJL8",
  "key30": "2bJm69wGUcEWjwoLNwZmwhcACTWGM1mEDS4f8Bp44YDMo6yVwv96XZojCVkWj1Ci8PWwch2RmXWe5cj8hP1VajLS",
  "key31": "3963MrYBAH2HGEZBw858sj5qN1xAzPgN5TRCcyYwwtwAXVxTSvm9VTHRqctQWkMmERQur9zxfygo9zBjvXBKKH4z",
  "key32": "3ytYaueGmQASzKYcfpqY2yNHKDggjKhR69mUwmdQZUKQskAGH234fRPxsbhJivyQWP1BxBZaAVWVWZYEUgjgRPsm",
  "key33": "3wAdeLsNDVSFnLYGg6rsA4GfqrqLZZQGch2CwCpPzo1AhQeRdYCC5WBueijTZTfRHgrSEthqiUWZ3dYUd1iBdn3c",
  "key34": "3Ay3Mp2EyteFmi4BdCVzpi7hg9aotFHe34dP3X59SJVuiTYcbd4zqcTAZSe1gcZ7Tzn6DdebRQJsRHriqXWiuXaF"
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
