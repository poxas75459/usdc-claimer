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
    "2BNHUapFH2CFkzQcuhFzM67pwfE8AgB9GUbgcQ4cn9L9xcBhUkHpHtzttzQBzUkygq1AUcVXvM51nVUnmmHiK4Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjuBfzBo2imNRcGeqSXG5pqPSG12Hu7zME2DeTpyYd41cE8V2euniXct1tXdRTvsdvjyLpTv3MgXL2dZC8BAiT",
  "key1": "kLXtmCEckubPkommxotdpEhvZBFSPiYPwfAVJd9JNJybDXCZeydzUduTKUaBSx6KXkZ1Q3D7FDfhNmnKRrgwNKQ",
  "key2": "mVByjV1qeDC1wYa4pQVYtexLkFpCC2oV4ZsXL1DxVtqQPKetJkUBNzmKGmKRTLd7n1ytf6ZCXSyXKHPq2WcPxS1",
  "key3": "2y6poCASh12L4LLj95vnPkU19bigA2zdCutfbDrcuXzejmWLk83Xz3vomrCTxU7ZtekWcwFAqBhKLbVKXm6XDnbm",
  "key4": "2yvBRBTRTkeJHamWaJMKPUww3YRozXbYEXsMmsU7yreK8usJEd2yESzvnFQXisCMpZ38mbjB6RWXGEaGCMmX4pEC",
  "key5": "BhX8T7xMBzHcDrp9RC7ZxJgKXMLwzLiVPhTs6iLXcHZ7g4XVaRfB3Zq8dPSMauydqoyX777kHV79L93jvcbqF8D",
  "key6": "4RsdzyaoXSEH1sGiVJ9pNYiU5kuhF5Hrv3WPzzj8em4MRJt8FFbTPALhXzWNLup2QdQhK4nb1bq9YqFjYV46HVTD",
  "key7": "3bcrYJUW3kdbukA5BBV35GE7cikErhE2nLP5zT5sgPgjp4seMgJ7bKyMuYHetdoKS2WBQpZ9cEDY1CnA4UtfkxrX",
  "key8": "EcBsFDvmwUMmjBLAoj7y18rAPRzjrfc6HD2SJ1NJhp1BfoogtY9tXjDufeGMz4hEteWHWfQHa4uQ5L7ETy5gjwJ",
  "key9": "4mqeHzBQ7k6izeivny9remyy6pUy62kBRhP1drL1vntMqgf4pmLfDK9fqJagvZuvJ4P9ZcK2kwQdABZn6xUMfJjT",
  "key10": "51rrBdTktrCJegoe93YYhdvXQRCL5k2c9KQmJxEjPTeWNmadDu7RjT7bH7bJyAM2pr4i9Y9VU1dNAba2RSKE46Bh",
  "key11": "5y4VAvTFVVG5RsY6LjoAf6o3FoXtyXkccEN1155YF9D1MycTCi4G3cUo3JKDqJNLs7mpxo448Ed8c8QADSJ1LmRm",
  "key12": "65K4jL8ZgRxFfTuhbP7jK7nTqWRxcyAr1RPsgJwHo44XeZLtvr7wHeZ9eYRvcGwkV34qaeuXHyRHqoDKk5Ur1NHK",
  "key13": "3WUAPJ5WjR6CxePQ5zCm2Cd9YCgFhZEye88VXma3ptvntyc7hhZmPB2vHVtpTxbW6iNLUPUshSJp2gtAxs7ijmBX",
  "key14": "2NxjAQ5Qj7Ec1Bxts5838ZjNR1UsXzvB3j8yER5EFCHpT7v7VqsSb5Kv7FHpNkEsmHeaER1CRfzr1nSUiRym3anF",
  "key15": "5vaNm2QkaVeEmMSBK2UuwVHivKTorPsQ5Y7mUxxTEehmyVBCKrzeKqUfjmz27NB7gz4s9mji1bczusg5ptQFBbZM",
  "key16": "3VM5Tane6JW9VP7RUZZb2nKGcEY5Goxy3ZfLrPd6Qv2SThSZbKpEDYRKteFbn4NvUwxbN81FvQqv1d2qbT3naD4P",
  "key17": "2gHox2mYKn9v7bCwGJQNUBUAWoocWonngsFVURvYyqhfCNVvPSuAwkvaaFrUifUXM9Wa1Q3rCDpeKdNpWS4rNYxV",
  "key18": "2GgNEQvRJ3N6d6xq14uexHWPh7RoMt3onrjYXJfj3HUd834Fp1SSbVCBkqz8Le7Hv71qnskFKN4tTtPNz1ax3Fsk",
  "key19": "5gi57XY2SyBLiN81yNRZsccNNgr87BbAzK9y6y3QLCyHufr4e5zZMPE4gwTuqnPgfBzQ7uAnb1P89HuFVzkqdUQg",
  "key20": "662MBJhyFKQN4a6JN1ioPjSSKcSNTeUAVhrjXA76zw1KwGBLeV6NsDYhjdGSmQWzhSzRsoaERvvJddWDyWqTUFkS",
  "key21": "5K9QAJRLuK3JCuiJaMQoFGLxNZv6inyAD2NiWgC4ZRAUDXcd2p8XSGTTK4sEVMcLuXk2Z4Jq4zTEqozFMETAocfD",
  "key22": "2YjHoXgEfAC4CJTusRSKpDBKCEotr9m2wxULRfEotJAWmRFbZmqQkR3sCcVKXSwwSko2HGFjeBX4acvw28aDNm6Y",
  "key23": "2vgTdes7WAPhMUzyq9te1T7SdMUpx2B7urFYWYCwGHs7eyf83rWYH7hKzERFtdtyvpe6k8cQixhKQnfqJBpE2mvf",
  "key24": "2AmEFxnSFgWoCRDivYZWFmyxQKeSa7ncmZE22ggiFVd6EgAQJinr6viz5zJJ8z9M2BXexMDt8MEbBAHf81tpob4a"
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
