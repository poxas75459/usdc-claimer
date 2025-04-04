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
    "Y32ooF9Xp5rEBxh7yuDacdo464DwEMkhWK23vBAXhmbYiwaFE2QREh4Ui5HhfFSNGvgW531CvVp944H8vwgZGWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Mc84FHZ23KEveJ9xcWoLKjSKQTBLs1Cjf4DCqDpLfSAoMs6mgmktwRuRSZhUMX8qRE8uYuzYSWR9bg2DQ3rGpi",
  "key1": "3EyMxVxxB7Ge3HHFkJCyvcarpG3Gs5V2cThsHCfBcikyBJcmwxap2y7WuCcQXpLmtA5mgqkHgxuZvo5TmPJ8guFe",
  "key2": "2QGuFRB2Jgqdc14i2ZUf7xVWAx4rLEnWfB2hoBJywtvdTkJVoQ7aVDqR3SggdG1dajiGZgewW2UNDSMDSNtUhBJv",
  "key3": "2T4MVEkgeVdsbKMqKuLJxGev8BxFLyqqCaeUh1PL76x5e5YeyvHc2S3oWrHwKRUsaQaRcwmjhsq6NKs25ch31q6K",
  "key4": "3RUvBNoYbwzJLNz81fa5oTxMjUSJe4EmnPMcropHiz2j3FDt2yPcNcGJw37ZBPLZDwLbzj9wErCokstiXk8tQ865",
  "key5": "65zRiuZ9edkKwtkuYBuUnDMqcFTh5E1htopP2UXzBGbMuNeEZApsbXaN6Wm1aBHZ5S4inHnVr2NJJn4AMfSSrnVj",
  "key6": "2cxPHqztCB3Xj2zyy4mkiXqM1L4X792bYzM9LhK7ihM86PCZPjM2fufbVfCdCXUxZgppwBqMgZgrSfRjds3E3X47",
  "key7": "3W6ArBSwsZXiVYWcQ4tDJFnvnKFUUukHTMiyHJDUzkabH2nAPiFzZU7MN8Z8BBT8qh3FE941QpjqEbZbPxJCVvFz",
  "key8": "3rLo5WxhcJBQW9xG2oX8sR92nJuKgPonYPCS4XobY1PgACK1emdMkTdkQdP3hX4Nr63UA6wXSiuLkxt4yUXJm5hP",
  "key9": "2UFYnvuw3nnGyUgd3n87dQ47WrPzjwMS1dtbpuDuKpYjwxp67MU2NHxytQHUgZredt5JD85tfoxzubGuiJ9jDAdX",
  "key10": "E4q86gKopunG91Ai8eMyiEK9XuSTVYfkxKaeJ6QMBiJ7ugmSmMAwXHYcAvsxVz4gjkreDRW17Uf6ausfyWspsjv",
  "key11": "yZCHTFQA9kVUxQbLMFdUWMehpcxz6jGejiBDko5A26KHu5ZK7s1rtfLRoHDyYVAPGLBjt3Za17HHpNhUAsdm7H5",
  "key12": "3v1pYNnGkFe4XSJ5cdA9UxdLtDfCub66XF3nNonL6YwXP33yyMx1VnvF6VNCsTS591EH8ks4gxZF69PGVa3ZzTJy",
  "key13": "4wCzcoGXYrNpyQ5QxHaSDwXrKtALxcWUgi99K4PoA6qeoEdw686G56FSKdPqQRwhoFnRNc318tM6NAgHpHfCf2ux",
  "key14": "7N6KNrZchvZLQL2D4iwpBCq1XFL5qRG3r9CBrZS1MmFwLo469EVED22d6sv6N8HXhXDTJBrgr7CroTqtMCq8r3G",
  "key15": "3gj1tNxAGupwZ93idRAPzvXwTN25fA7h5uRSnLfZEPwRfYqKVNNhJ1QsoNhuVb9e7fPPb9q6DW3GUN6cuDotYqJQ",
  "key16": "4LbxRpBhtb8YmysWfErnsqKRpAUJhWiydqKRKaXaQEvNfEHtVgwCewJAbzvYyEWgpburFgmesQyHA6wHA7xY2cKm",
  "key17": "4M3N39fQT8mY1KvuB2E5F2JqQ2TKmDuLcdRTYupoSREvtB3ZnPbrMTGJB5nU8MtE1B3nfaQxSjKiG2fjP442XfCY",
  "key18": "2kFqD1NjwCPj4vH5ATcPiBeaXzgHed95U7vhqexssrED9WkHv3SvkXNuGrddJiKD7TocFuw86FzoeSHLqN7SM6JY",
  "key19": "GP5yDvMVFjvVyis3iLWP5o7r3UgkF3Qx4uu1Q8k4vbF9gHrtJbF6G47oNeZ5pqkef1Fx7GvNa1wAL6x9ogUqGAW",
  "key20": "34oTafGjjY3uHEJxQfX4PGadQobBskN83ibdFX3AE2SM2EfB7bW3n47tC1gEXNjaSrSskLZSn3TbBemYHv8B4zsS",
  "key21": "A1Qd5EoftFr7oUBuyi37i2MyxU1P2SDjRfiF9zvfWZPJFHGrMocnBRYPJozmBYTWpXnErMTQK1DqoveYVhT6xTP",
  "key22": "2FpqGRDVCktse9FJzbywxxLp3XX8931UKuAn6CTcGjTGRj1ta4iZZPyzDAHkNuA8f9uo6zmhKkS5M9bjeGh6xGNH",
  "key23": "4bQvstNgYEPfu6JBPsuxji4GVis5xoLMbyf9ZUxPLwpAexjgL8saHuUdY5Xq3RmT5W8rEtwgXDDBJEpfACMVH6xd",
  "key24": "4oMd84U9fJ67sy7JxqSaGcaz5phpMsswh57jkeeQtVM7ks28vtLgAMt6cfvygHHobCoSGqjh12EkqAqRiyL7V1dG"
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
