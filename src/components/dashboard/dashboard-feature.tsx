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
    "4FQFHdu9cULbAkQSJMGHRZJJBztJaZx5CezULEFAPVieotFjEvmUAnzwFT8RByyDhvEHjnMa2niWvs2vmubukUWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oT6Q33jrfaAujP5pnAVQkswJ3kBFKZx7Mf2dajSD3F5nQ5xtZhdj3geqPvv7k4WhcGAVWMcoHr8vF8VMiBrKGAS",
  "key1": "51cWHhDV6ksmakHSm3yN3iTV6LB9YT7W4pVMLJV2DGvBAEmD6E1fgDSuDNidQLgW7FSK6pKmDnK2YRmS4pSrKdZN",
  "key2": "3b17WFTpgty7VDqjgm4iMpUH9nH17X8z9LR19hy8zRKABK3K2z418qMwB3H64suZnR3aMMXEjVND5tYQZMFykx6g",
  "key3": "4sbXxV6xmSscSLJ4E5JRGgreH4ZcWwpHvFQfbQFhxkLpz5iuERy1iyf5thuvhAdbLCbDpdcdVtZSSusJhcmZkPH6",
  "key4": "3uQSYnnSx2vYN2JZKRXfZMmyjd1APDX7stqgbbhn64xbMtUmE3x9HXXfm3M6MXHgBVFE3VsCsz4Jui4GWdSLEsgL",
  "key5": "38M82CrTYzDHw9Mi4PARxGACkuUHV7k6FTNKMpJfjHRdHegfs5EsjcJZYmiLw8aB6YXo5dwhbzn1aiJtAxKHw5GC",
  "key6": "5eFUTVtNynKhwVvcS6rLimtMxFHiqTcHUZojdr6SZNNZG9XNBMaqyhPjy5J1XRoxdZXvHcn1Yfu7uDoRZnkWF9Dt",
  "key7": "2Gk8SZoV9539mX3gr6tEDgNWyfwLJ5F27NCXTpcFywTPfxeUWUgLwdZfe51Qva6jFQiHAFSoa5PM65w6aZeLYGHr",
  "key8": "33HRoygHrjG4xoCvq7PT9RvgfgydHMNRC3YptbdZxBo8EqYDqSKyZb9UE6MqukVgeW4YcmrDoUsXx3idL4SCUWDL",
  "key9": "3LaZ8Hs9NoQV89LdhdXMGYCiAXfayAzHZM4Vx6nfrCAW4HJyUGfeLQsoJVERKXwsWDLdrcae2BTMmEHNRCQuZ7a2",
  "key10": "5TtG4XDSt9XGFM248o1afydo326vpEMWmxV68D2HJLEQDj2yxzuK3s2HwuJc1rAAYa6ygaoovfHncgKdCST5hd8A",
  "key11": "3dFaqk7WdK2G8yMibcD8PkHf2S5LdWESQ36Ggu72qpoFWNTGRDt6byDt4cubs9urFoLu1DG7FA8rVuQVwjDdcCnh",
  "key12": "xwiqfAXFFss2PhJhhTKLeVbn5c7bvu4DwmkNDn7vhz7hy66jf6yTsA2Vw4fN7GY3f4N7qPmdPSH7ivFfo2dBCbA",
  "key13": "4iprGHLNFM2CfNA6XVEtcQ9vB2xiu2Adj8frDSFDBvD9dRwDZ6A5pPrxdzJEJqYwoaBYpwTQJpwdaBMh9mb8L2cq",
  "key14": "3aU4qVFchgjwFbsc3htYQKayvBw9ey8g1X3jjPcdaq8iqk6aG1orNPXcF5VUN8azayywgBbVc6P7ZsfEdyU6rbJp",
  "key15": "3yANNeiuffvLny56jeFd8mTB7EKV8DLTDzuAsih6bt3Q3qGThh65YYYBoCbh64DZFZynRo23TpoUshA3XvuUWS9o",
  "key16": "5F4BRRfpfg866vQM5bwFsT2P2APKc5wSzDGXDUwxSw1qx4srxQpsQMySKVzUL85pvMT4oBS5nRoQ2GAHdYnfMvJH",
  "key17": "3Gq9NULiKYjQoWVAR7Qpxi8z1P4CTaPDnfnpNQBeUbiiotd1fDNnrHMwH4qydUMgFoW5GRhgncGWG3pdksF4yFCK",
  "key18": "28tju2tnPTPv23XznH5XxVFBtEVfetP3nwtKaHM7eoypS17me6bkwKqdfhdE7AHFgmv77SJtyafGEo3CTorRVxTN",
  "key19": "4ENrLxKtkBcqijzCbJ9GXwhqftvCXYYTY4GEkJk4fVvAzh7Wj6yVNftwaM7MYTos3kbpVKjNGCZwz2JKJvTxRRVX",
  "key20": "Me4hdwfCji8nyoMABymHnxRXwavvnFyMgP7EQpaddCzdqDbNsVDYCd7hqomjs2vVYmREePk8ruDSDwVkAx7RDf3",
  "key21": "469vgLZNSt2iotaLHWc68rRTiqrZGmXZzX5E5PhX87rkYPMh9ssQ1syY62pfZ3mDWUEGPuzGHANjoLf2b5utgpBk",
  "key22": "3gkeUh9u5DTvooDdBrhbx1CV4JUNp7XxxpsZeNZtQDYS1kazvmpjyxiRn1uHMHpixjhKCiRcasWND34Tg98vocus",
  "key23": "nYwYgV5K9QFQ9zpJkNQtRSp3wHSTvhXXvYb431xRiT3mZHU4Z1BafFGLpcubz3EkmeYk1FJorFuSWWefo6VKJid",
  "key24": "gw2RukwaSLtcWHqNeKiS9gujpzVEyMMhruEScVhFbvH1spDGwGC89VAPDnNzdTSTbknU31YzCaRjYNZ53gvgtse",
  "key25": "dBJjQ6Wss2b2rAKAywLoz4ZF4Dq15ozcEQJ2Gw9v96uJMMsx5tN6tBNrBCwf8oTecTHqSTzBkFwxk6khE9hZ7Fe"
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
