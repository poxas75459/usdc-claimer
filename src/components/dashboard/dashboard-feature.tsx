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
    "4zhhTWJHgvgX4G3B4o8SenKMz76d5z3wEtAM6xBfgWRRPiKf1pnLvjTK3Lk8XZgFxF3bZgS9qWZkddnmRq3DtaVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUX9cSshkdUbrnnG88LkHrhsRsjL2qH9hPP4Wq1yQK7NfdHuaNsCTwiToDCtsPFD7oyScppZGbt3D2tW1Rv9w9p",
  "key1": "4FC9ibMfV4pTroiFK1jDLf9oUBN1rL5zn5AyskfuQK7n2ankRQKVqd246cEu9tycFZCY8atuykacbpVFUP9sXSS3",
  "key2": "4DrDaddiXBEaCA29CMXCwXmqYvi9TF3zwgm3x8JXE9ffzwyGP3iAmUJixcDsYKVYkv3RBREKP5E3QRnyPgtxu82S",
  "key3": "2DYtMT6LTRufBFb4X8PYsPuEmNcMBPYfYyZYVzMfWNjcAVJkCARCFW4bkjmB4BbonHvCNCrQgppUUHncgEMah46J",
  "key4": "4sggyD9xsF41biabSwaCuc6xJmaQz1bJmP1jnuDWbqUeXT2C46khGLCE7r199t7bJoEmNHgwxgTRqfu3zqPr2hV9",
  "key5": "28GPBk6kEtkESBKFFrYteE4cQ6mcm4BKcQaQbBNGugK5XFDe4yMTW6RcULtnfh7myUtjwGYUfCNjs47KgYvYrQGy",
  "key6": "4D99vKtAqEoJ3JbEg5Nj3zkCUAtkRXhFkTfdj4FTjaxCnDbwop8TSSNmfd4DAonpssFBZKV435XowkZvUXztsvhk",
  "key7": "5D4eFDW9Sd9PDR2wp8kHQR3xmtG7Ee7m6M5HBxc7dynL4q24iFbyqHHwdqBxQAUVnMhPqFKzDUowV5mbyJ6QFf6t",
  "key8": "48EzNmpcxZ6v4UxCUqV4S2mES4QfLA7WFjqw5FNtCLkmksxCVMhLjLc9SVM9pDEVvAWwy5xEAFvYHtJR8ngBE5vL",
  "key9": "4eL277DSe8k45oNaVkbdqFkg1yxKLvM7j9RR1L9myGSBKB1dFiMg45wvJT5pusGgFJwyENSt1ANfwnfHQyZuFhr2",
  "key10": "4Qt5ZbLDzmXqdwmhJSttJ8Px8htxwS65v91tdJVkWZk53NpGhLHju4WiHNrgLv54QP4dDDnVtsf12fz6asfpGpiK",
  "key11": "5Bk5itBvm4HW4qUAZzdMVkPGuSxb2q6DtqwHVFhStnCKFmmWU9228sk5jG1pmF1c2Hh2UecCujuewHXtz6X7ZMnV",
  "key12": "5cXtJBuvdRaG1JBM6Q8BhhLD1AJ5ScTbMdrPURh5VfBRzAeSJwcS9Nnwr3EyrBRa1uitundY25b2JteLpwavwnsW",
  "key13": "5J1txCt6P136f38c8vocyDMvgB19uk9MDWBwtzPhkAoXpRAzDHVS3Vy7RnwprXyym3GYaysHQAv6BgMrs4JhXJkB",
  "key14": "4xQtuHLLpg7yyh7FwHzDn57WGNmatkXbXzFKg9VsTS7NVBiXceASQt8Pscs2sguHAKTL75c5XDu9y7LCnun2bBg8",
  "key15": "3Cc1JaGav7yuqHe2rh2Veb1Msu3qkuvMedG1U3M9VdUCA8AkU78h5bMGjMEnb4xsGq1zPn1gjqFwtGadapMjrS2r",
  "key16": "4Q57YtnrEDaMeBsDhB28ZKWvUMyVuWNvvexB9jQEPTWvGoqLL1otGspCNNTYnfrxXeqvAxwcCjm1xQa6Vayf8Ddm",
  "key17": "RrDk2HVqtfAru3ZKdezUfoKa1DAHuKJpT4S87ozWyv7DWCvxQUpLk2m8kcAXRRpH5tXSx4agjL68csogJcpL9fA",
  "key18": "4re9MFY2vxPAz8Riyfnq811m36CKpmiZHdmwfZ5sLpHqRJA43yT4uq9uScdBViRRq5omVfDWScw2FTFaWHUhUBfq",
  "key19": "42vmnhnMaMG48fcyLiY5RenbJ7uX8F52EJH9zGNXqCTis8VLHUp7oPCurASNnScx7GbYupD5M5ENNUwvsR64dfcF",
  "key20": "3FHAWTJq3RAZea6qSaEkXVbf3io55h2MaTQtHYZDuAEmnKLadzqXmEJ8KFCUFzvQHsTE5prFwLzxCgDoVE3hM1vJ",
  "key21": "426yhT4VGCWgbQHPU8LcMyTJ6pSN8dMZ5jVQU8kPwefAMGDurqkW8gvQiGiGK6JZu6HjQ7QcpNZXLStfXawcUuX9",
  "key22": "4nV4MZjGcEKBioByokXtdFaSXj21tvw9WjKNdbEjwTXfSqMYdT18tC2nME7cCgrJbSmNZSF7RhSDYHZm4zuwFeEi",
  "key23": "2AiyKe6o4DYKJci5JVSLT4krechxDiHno6wjbvSbKP9dVGZN1m6WtDNmMB9JzLmthvAkyJZBd59YJdikUpGswQZy",
  "key24": "qQWHVgQBMuU37rvvgoFFxyAEkdRuSsedmLXxBDe2Wfz7Cv5uthngrpt99qM8AQJbsnBjBsnc4WpH5iy1tDgZCLX",
  "key25": "2TuoF9uuqpFkV5KzKNMUBpa6dBs36gPuJqzQV2EwWirXAcKbGZY17zcDt5rzmCN54K7X41MkfpNNp5ha2FTNxSxU"
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
