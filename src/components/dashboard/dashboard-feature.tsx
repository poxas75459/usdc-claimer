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
    "TTAEjHiR2XwCxDBYsvC7cFrNmVn6GM7HBDJk9BYtjUfMgWxQi1XhAqkckG3MKxK99DX3m3ydAe9w9zoR2Qd8iMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NxS43KXyq8UdgC9tRq4GEA7eXadrmRbtqsgvNWqDxPCYA98J2sfFfZ9JhvaA3wq4SmBXdwXZUiRjivJgWMW5wAD",
  "key1": "MpBZuZiFUofJ6GQN7z23xu4X8uV9RLx1zTaaav621Hj7FLDXJibGeuv2Gr6GXSeq1S7PoadfdnxUiN8ztyr5abQ",
  "key2": "AfySz6dMyT5eyXcFbsKQszgCRhtiEnLELp3npK9XP4VRkisQnXd573Vny2TcZK57wDA1w9DwF3tY8VoYro9pfKr",
  "key3": "43w6dfaYdN1LNA1TE53fSjoWaH5E6S7sAmqZ5GbjBkfG5sgX5cKv3sLKmZfMKkdkgkNchMyeQZHpLNs1fpd1oY5s",
  "key4": "33J3jEPwEdgpLcGPWawdJMuHyQo169M2iSLhViXHZYfEJ8if6h9adkRxDfroZ47dcxUo3rXEVhuP2SBySDnsKKxV",
  "key5": "4sMWhBtnmvwn5yYLSZwB3jeuk5piduceN6Vv8wPVwciHpcG1pdxyXJS1rC5ZraswaKzQ9k5ULrNRFhKMFvDhDfcH",
  "key6": "4RXnMZUF5NFtBUCSFkT7kWiWuieHEv4uMrm5BsA8PPzGW46F8ioHLarmRPWLtJwXbFfTvwJ9jU124kVggW7jUKQy",
  "key7": "5y3Mz4DAtPX8xdmTAz2KuMrCCvCLsuSvETf13UvFpsH1poD1Pih5dP3BzstGP64e3JyiFCC8pvdQVVyaznSvn99N",
  "key8": "42HCyHcRSmb8AVSHdGiTR2MEsvvU3pYz7cpxAnqTn4YF572aqWYKAxeDgvsNKfbwFVdrWbFognwkZ1P4HZNbjRaL",
  "key9": "TEKuaJK9f5YP8b5Fu3AiN5XSpgyzXAbVKJDhdrPMPeDbdyyLNpqGprBkW5qi3o16QB6r6hZQdHY4V8hnc3qPUhj",
  "key10": "4bZbSG9T6e5DnUD4fRpWzvofJvwSuz4gMaAZcXvNm16NgQoYJoFt8E8vscJPNKbx2L56C9oEeqSfGcdM3pRdSaNo",
  "key11": "5ECCUN3HVDQ6NLmch8pEPhgJBn1gywXE1GyS4uPTBKpR2aWaVGbHRWjdM2oDdMCAdiAmKVy36wFHHcmSBcPnn2Qm",
  "key12": "5PVna4rKw7SbSPwrXvWxe4akDe9abcBRcMvZzCU7KP5pGp9zLiZduS9RHQwvdpqnax6uzW3VzxQGmLTq5k21vGDM",
  "key13": "sQxTEyCErvH3LSEeDRPrPZQ3fYo2wbHmhYY8nX2cnsaMCvn2DqJ5XAPqbzFppjHsR7t32H9XHtvqPytAGahUHCi",
  "key14": "mqB6dwXWjLGfjTZN3x6xJLynZtgduW913Yhj1Tq7ZFq8QmuvjGB5P7mFk8pFwdStfkc1q9Jd239fNTZcg3Ge2aN",
  "key15": "X1uFcjVi6NSkv67bi5KvCh9wuspfGDA7eFCrvd52TgjHEGLTGzv9R2pEaTvgM8v7v24GEKMXE5xjJufmivDkinz",
  "key16": "3Eim4A39GbMzWXV2YoysCG8mrbp7AhTCN1SSekPJNRVDw3ZNoXvcAw3ChRrTuRDr2wWXSQm1b4nKSbWkrQ4eVxP9",
  "key17": "5WS29ftbsyPEZecNyxwd3npNF3ZYb9obe5sTztZfaM7rP9h3w1dU1AUesfCDuNCm6GUus5oDYhUBN6MAJutUvoGr",
  "key18": "3MAvcmsBBE1xFYyAESnGpaykrHwmo3vXPdWFPGrVwV64Ry9dfPKKfCKHmfN8PiaxafjCs3u5fsSCP84TtXbdqG8Y",
  "key19": "2SEMd56fz8unRBVJovLVQT37DXWnt3i6JKExFFcYWAD4CSh3L7c3kTU1SWZUVS9mEdZu7Fif8DdG4NQTFB6DjUnK",
  "key20": "3d25JNpzagZ2uQHCNt9GgcMAoXidwy4CpjwygS2UitsoeXnrYgHGU5MrxTqKVBWUDSjzxVGfiZ58XQQiGLTL13NR",
  "key21": "pRYTd8Bb5ci6x7vmHzj3GDWhddAtkXNqnybWwbBGHGY91nEmyce4E7WCi9hAA3GkUao78smC3d1Poa7VCrNwCAq",
  "key22": "2RGKzTiemju3gpViv1jM7upCET4UQyZZRyJF2fuPDyqNQ65qEm4z5EhnBbDPAg8yeG8hG9YA71hjoz4bC6V6bh4d",
  "key23": "5WAyDBGVsNEPCRHQSPUvkphUdVAHp4vnPw96WDVa5uUGYGvf8rWYyAkWg2GyEZBGJvHvg7bNjDnrcQwy7NcFcLQ9",
  "key24": "27Zy6Sjp97JPNSLsmRXC2RkkK8vubYGL18EFdRz5LLt6Av2WVCRAwCUjpuGv7iHa56CHVB87BEV9QU3tXodQkscb",
  "key25": "2orpxBebRpD6PrZ9HkyGSfdHmG85XaAUcatasZbdsvXYPU1MfJZk446Tshg7pfvBdJ4cw8y9amWN83PNz6ParecY",
  "key26": "5qRTGSFdfRF1PA8jwmWP3tnSAFmMD4pkeuvGpLntHC1hk2D1CuGuBqxUeu9xNezn3598TVYDYj7XxTjGV53ZeioY"
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
