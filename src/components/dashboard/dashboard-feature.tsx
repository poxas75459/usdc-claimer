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
    "5JguHgnSBCshdC36uSrTAevSN9o8RYWPhmvxwLnBvSakrymvERPaVUditrcA9kWoXjwvhHd5M7YHP9xHosGtTKMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDCDJcxj5sdx7jZhKausomPAwUZDxY2WpFiTgZ8hga6GWeJ278k8hb5foFnnKDXyNgEPmNRJbZyyS1hT64UGtUt",
  "key1": "fZp8fwv7eqvPAbQiXzRUAmM4RR43fVSK6Lyhpmfuzq4gEQJneNjrKCwmiv1PhJpsXq1Uf2gn98GuGkvXPGLWDx9",
  "key2": "3Fb1ehw5Mfz38euJc2qXGNDNTzPRNSrWxHh3Ga65EDLJ3i5Qv1CpJL31DhUdwruLPKEbUzm7ZPcESjtqpK85CXa8",
  "key3": "TcG8QNAqo6kieLVHkiKJ31ysxu67iRkaLb7DPLuRvQbo88hM5zaeK6udLT7N2jBhqktS8bWU1RQtiTMiQGAKySM",
  "key4": "GtCHJCMB9bx7nATamo7VcwntQd3sQK1LCZXDV6jxfYrZCd9cyUHT1UGpJ3vRf6n1PRVzxKtoQaancKrMcgLC3Rj",
  "key5": "4sYsvVek1cyuN865Gu7VxTUfo5KgaD12SEZnbGUymg5kSW7Qmc5Ni1tL4YMfm4hdbW6HMKTTzPV1Zg2CGXrJcyLd",
  "key6": "42dnCMfKCFmJTDqvPHuWjSL7Mq1PCS7H9yr931YWE62mbGxDGYYEW4TZYzT98jkZS9SfZvCN9UNYhzbW7F7Gh7jQ",
  "key7": "64tGBGJaejG64c1W5mBfmWk7BCxmNP7KJskfb9qsvV22r31m2zKZn4ppPLqBzv1f4VGgN4drs7fmUyL1MuZC8obB",
  "key8": "3cBDFHuBzbHpVz59rTTnY5CGqA2Bt6RJrKQeSUcV3gaFiMjti6JAzrTcP9Eo55kY8E4E1ufMaNCwvHdUnsFgrBRY",
  "key9": "3zVuSzEQsZNteXdpsg2CM3xhVqfj3aoAJ1WahjiebYm2em229RNueLLo4CT9pBkwKuhMex4LWbpdTBHbcqZn6B9t",
  "key10": "5o8S6Gnv5AMqucmhvEL8iQf3z34ySbwTWS83mD1ufrsNnv51t6YLjFtNWCgTHJ5sYLgRpJcjTrwt7R5MTk4CDkUi",
  "key11": "522nykBkDx7Yp9uovf18YANCbyVzJWj6brDeQEL52GVkWtH5zG34zEGNPXCCBGeJx2Jg3g9FFagJCQxkDtXFpJAb",
  "key12": "aWReXZr63xcRmfF8kCnt2MfJiecp2kgY6M7H7XBcSBh5pZJeABYQ11WEBx1RaWrgGP5qQsrSpQYnD2aA12i2Agv",
  "key13": "21muBSfQU72ZeWeD13qbPp5PfxeTYjVWUJLoVkoUFs3gMHToUSJdtiosB6sf5RBLSy5djf18ZwdKLch6nRkvxDxP",
  "key14": "4GB9tqFWsPmgCGvC7MjY5KquXzhYgTzt91MzcGcYJykBqDfha1QzstkJ2iyv1ddYpCx1kDB9yj4g9fwVeunvUb4",
  "key15": "2M6vwNz2w61gZsmRgGY4ieToqR3atdPoVsWD4smkkscgZDiYKjpkcZcCvArDCKVp551nqWsGm2NpHYKqR2JEWZWx",
  "key16": "64frdJBMVvDjjTtsDK9jfuCVJqTYdH9o8iKmJMemd81sz1dpFbJgBZKjUubRgjFxi8evoXzEixMx7Wdz37vg2wC3",
  "key17": "zSMEvTuQcaxYJoGNELrH58uDRu23tFgXqnUEPApzMF3KoWhrrYpxXVVV3UFxWHKN4HDJV1bxw5S4sVSLutCCRx2",
  "key18": "3uaYpQ5XVazGfUx5Yy2Grj5DJ2VbHCMNktuUJnB361fvpwYuDny44BLD49QxaGDzMqY6RbDSkG6QE7sEJoCJ3UxY",
  "key19": "43Wmxy7AShfUAviJummfJhAffLF43fgQVZHoADJdMhvQ7ePk9u1sb8ghFR21xVHXK7NxsX3HZhxQeBjka1qTTouX",
  "key20": "45kNcecYHx7fGtrGkKsiDcYYey55KoCfYDZhJC3XRUHhENN25SC7AXCkWAvxzKZts5ei3poFogJVGv6tNnSmQXcu",
  "key21": "4TgUqq82s6sMkf9N3UYhT2gUazUmLcECcJYgRu53oGYfpeSBvzUVippF77qFcBKz5HiEQPJ3btthJSNrPGeBxWxH",
  "key22": "43UtJ7MH8fZwdfD9S42X1mtntH6pooUdQRA8SA2tmhET4T2NR96mogdFYqA5cPnfCAShnnYjrxe8cVbzFWcSwxFb",
  "key23": "5tkJ23b35nfvfcNms5VzqfYipi1mUPgDGkvcoi5bMzuudzmw3RyvqdQ1p226JHyGdCHrDhrmzA9nPzDXGaS24v4p",
  "key24": "28HHraTgLGcPzqdsmGBm9oPva4QQFdFoE2eYbrSV7kN99EC3seadyxeYva3bx3DwzG3ny3xubsDEAs1M6rsEaE79",
  "key25": "38X3AbstRapKgyuQR1h5NNskHLHeaLo5Q8YWaujREBVg3GCj6mWFa1JucXP836Vb7aesLhSq2zT5PXBb1NGdmZwg"
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
