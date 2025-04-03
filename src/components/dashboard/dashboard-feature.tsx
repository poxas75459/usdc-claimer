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
    "32AphAfsW1HTgvZCoDjdP27myXubBUy3Eh8f5urKy5dZhbo5uU29YcLHyec2HZgWhxPFjPWL2wABE2MoZ7v1oRdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mR1gt2xz7vb5LbDVeYHEn31Kyvaazbi7Z3EAfxHv9NiyNPmzk8E7siEXx8dh2rEXRp6rMPe2agAxjebEdoDSMPJ",
  "key1": "5bQt4A2X2iKNEgxxAGzqUxebENtVZC59U1aHCCPs1hEW5TEjS1TM2GJFQUQ5jY1bP3fMN1eMpBFxGKGPMbDF2Xae",
  "key2": "5k7YPQEE7H79TXuN5DQCdrv5LpjHYGFhESE4D7vQStJYZCxPVi7rc94Abmue6i88xzextwZGJkguhMRSCASDxyEy",
  "key3": "2ULsEVbKWQMXB9TajD7zpB2A8wNX3cpJVSdy7US9jtGYgLa6KJx3v9zQJ6m8XZzq7Gg7raTcxPin3pyKFbkzVKvc",
  "key4": "3uRCeAqZ2mXvfoD5z4YKZyCbiQC6LQqPJTj8oiZU4BM9AJvmkNuzLese5ZRbq9vxNra6B3VzXquWBk4EsWQfKf88",
  "key5": "rAQ52sQ4Jhe8xwuDxxrBi1tqQdrMensB9TN6kTzPDN64RZqvkBPW5xgirtnKocsa1utKJJrXsYHnKAtUxkMt2in",
  "key6": "3K9V7m2wAbGpCAjpPhFmpDbYV3tSN2vxdxVxnM36tTEnzE93YaCbwQnnqzCcgTCooZLii2sMyPUnEdG6NtJ57gEm",
  "key7": "5obff8gyGhQcoVVAoSHhgk84ipbBvtwcmhZUVvKiFHywCjz2gQDbc5Pkrqd4NUauAY4qRuK9Bn8HjhmQsfjCNJH4",
  "key8": "3DDWndD3z9cyLkFHDwHfqewnGQ5EjpdvN8nbd48Txd9UfhiiLPFcDcVTpFLeL2baXBztAJxVQrwwdaszpdxDhoLK",
  "key9": "5Ghs3FFZf8ohozPbnj2DZJsxqVhS119rcLLyHsALhHMz9zL4tRZQ9DKuQyDWhCaZhsXcCEuQ8YVmq7xsPLAg2Ex",
  "key10": "28fzEuBAjWFJy1H5MZSeG5gpne7CPDpujUdvux5zpu7rWpHZbxsBHDnQ969Yc5kC6zrMkwcST3KQ9JSFim9YAYJq",
  "key11": "KQExsFFH84HyHjeRe8YzU1kdy9DpBRiN2ptYj9CcLUPUbuMrPLyLhLi7kHRbxfMuxd7UQxJycDrDzzAr9shYvCP",
  "key12": "3BSuyVeowXpRkr7V1Rc7ySsPgCJukvs95gaL6PXn7kiV14RcY22BE4p5D9gGVqQoQPszhsVDEmT6MtoSoJ9cL7J7",
  "key13": "xVuoeAjpWPwY3n1Ctzeu2b1HbhSHKkUtLBU4BEhyQFZgjA1BPXAVfafAYnZLf2HDM19LrNqpuEVWrApwJYdo4mQ",
  "key14": "4BacRAw74949xeRUQMzkSKp5xaeoy332oBZHdt1D86QSVZVCPoSnAbtvQ4oQGwpLChF7niJCXa41snid2AvQ4Utc",
  "key15": "5guzmmGBttc4Qyo4Zbhmfjs5nbdKjrPB8R4vsWkBxRp7Tp75RGU4gaRiz8pDEUm2oEppq9FnZ9Kuhegarvx5KtcF",
  "key16": "5WXVmAXkGS1Lf4u9jkHZXWXuWJwVNLz8suWBzAaZ8Ek4xbwmewwKrU19KvgtbxuiuMKhRVssrph3xoVQX15kwjRZ",
  "key17": "3k7CVL164P3b96muh1FzLZHiSc5yxBHR9qAjj7Br73HzsMGqVtXfqbvuP94ajhG8qDr6sjyAcsfcpKPbYa85gW8m",
  "key18": "2kdjFBnVBGatfnRhcq2cL1W5G1gVHQUVU9qSyqoCx4Zq8U77Yh65fmtd8WhjrFraopDWF3pWQQNGPoQnhvp2AMkk",
  "key19": "23FqHbTMWSXkhsexfSUtze6bgmyThuNG7uTZZmkWbwwtpbnNLBmkMps4cEi6DDz4SvsDSpBnFHYFGm83keFMguwp",
  "key20": "4N2K8geVi3Npt41QvtZaAWsCamBuYAUJEQcMeaGi9b37P4kavd6Qimt7pYCEH3VhEGcynTSy6L7snpnNaDyNseAr",
  "key21": "2X6GCBpqBCcfvdTX6UPDpBhvcq3vNvzjY7xJdGu19oVyirWRJmmtCqy6foGjebHtTBYfh2DaQD4pVusupcvgHVrh",
  "key22": "6C8RJn5iGZBG4YqZL232x5jRtsJUiEwqeWZSbfJJ4Qv1pd6EU8WZzYEfA4RWprRCtDxbKSq7XD5Dr5Z2KGp8tKa",
  "key23": "2gRDVW26RuhCwWmETxxkAnx7CMb1By5hkqPZdPALFDiD6DyyKgxtAu5uC5hATEL2cFaV6emVheg6gp7cpN23S9fC",
  "key24": "3cpSE2jMmZ5t3RnGBB4gioHn9Es23LvEUBf85HZ9y5tm6kxHgi3EenBuuacbwr9VCBnt7EHvYqvVwQznPpPzuAzP",
  "key25": "QTcDWmgRNWKT9MVtxdFshZoiqoPFQgj59P6L5e7pQHrwVa3MCG4gcG7dnUb3WwPPYveSTQixwW8BTrsA8R5fowv",
  "key26": "66idXThyXmPj6u1cP6NXXpexeST4B9ypWqsujZYpLoReojZbH7T5V5A2kZ7vRnzKvAGiCqLViiptQY5h54j38rba"
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
