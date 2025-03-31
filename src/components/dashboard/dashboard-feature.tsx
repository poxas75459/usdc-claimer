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
    "2xDTCjvcYkUy8obGYPd6gmzqQhiLZyTvuKT3i4x7YTBTeNuq3KAK9Vpr3BJKn8AcPJg8a1VXseoGKhpvJXA4L8cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cgkqsB5gVfeZgCfxG1r76rMgzLuEv4kSSNqFfPy6MssndxyBMFtrBy5BF9r9UtWUG67c3x3yFRrF2SJYAyZbu5",
  "key1": "2KcxiQ43cn7hZraP9KmDDJSCUniqbmrJJ7dj2CKth7LfU6zo9epW5UoBaKaNJPL4wiY7C65i8ikLe1BQt1zDNVw8",
  "key2": "4f6yexys6CBJ5xT8Gnm1HSSqReSNE6Ewb8SrwL4wmVo1BC2szGt99tduLN4Pdxn18Tk6j1UpakT96E2dgEK4FhWq",
  "key3": "22eWvJ5PxZoKGmYddG2EBKfGcJuJsxyfTD2VsUFHVNm9Tpj62HtC3i7oC8Z3skL63yp8UzDdWRs6fskgjkwExUYd",
  "key4": "3vSDWVrWtTwjQQhXydHCvnZg2WTMDYZjTDdadMaWYT2xyvR6CKLe1APoR8pjySeiUqeTe6t74kHXL8uu5zsL59oo",
  "key5": "2WdUHDgUNjBqJNKBsy9CAV5Pq1eiLWeJsjJDXGNUzMSXQhmDx3xVT8mNtNVfP2yqKU9FC4g5UuZkda1NJ3J2ms1U",
  "key6": "29tawNPXHkoGgMBUF9fQJE47KRWd1AJkg2SGEnhktorfvLHoXUWjME7ykwGxLqwEJuKtab9Exb22ak1Ut72etdvP",
  "key7": "4jYpB1FTsip5NS5FCss1Ch2MLvoFKDHvkkFkjAULknjejinM4tGCUwBZcKepZYxVJxPFAmWFKWX81Rt6V2Q3UWNN",
  "key8": "4evzA4cQMk9WCLLq5qxC9tApU7R6Y9A17dDjyT4CQwZba4zQovPm66Xv3H55dNQDQ7EqX69sG87oL4LQ5eTrsMyQ",
  "key9": "674EEaYGJZ5gd7DVHZsSUyJpxjRVCyswvZPJbuxug69zvJiBuqnWN1w2xxpaHeteny66dUnBhG6fxuVR4NB6DbV2",
  "key10": "5gYnakiiDniZAxYhScRfkLEcFVfVEzEgD26vcNvYzMAGRwH4qGzSjJ4ZP5rgvy7AJe69L8SzDxPDd25qC5AMcowA",
  "key11": "3NRCZXgXzuLjLQRCGwV9SQ5kmn116j6ASjb1irySdWT7U8QmBFXRDZCRGV4ZeLs74U17u84qfS65dHnGeKVmzrjn",
  "key12": "rJJRYJDx38KGJL4SabT6rhrrnuAMjbgKg5Kk7fQSqXAabAFnbct1Hr7ReTTmb5nWpTdpBdBeog9dz72MNnzQ3GA",
  "key13": "9GG4mkMmPLHdhQ5j15gfF6H1aR7wdiGKixx7QAh7womzJiCQqQcoD98ihL48LDN187ef6kmZHnJFEzDPzh7YQKP",
  "key14": "2xcBryLDK8fakmyFD8mMBQCc98RXijXAVp9AeSfjrQE7ufiwruKpVWSby82dGXQsWmi6KTT2p2vPMRsjqC8XSAYF",
  "key15": "3sssCwkveiMWF8bBbkLdQexPue1k8MzoicPWsjDACKpbiwwMY9TQ7BZDvEWfzsTNCCiPPy9eDSaoEix5SeWvAi8A",
  "key16": "3epmpLsokr3TV64iaK6uDdQtH1FABWKqkrW5PASdPVTE7zsuj38gnBdRxPBYq2EX5iDJyGzfhNJWKAhGxQQsfmzA",
  "key17": "3CU2DeXf3TN97tvFvrso9HgitFHpqWccQNdcuJCHUKtyA94dD1tEeavpERXdyDTgiWYZuSiyWKywsktLuCMXF2B2",
  "key18": "4bBkRg9JDLaF84MwKoHhM9y1HFs6MXeGsab8zZTaf7yWdk3KHjBgs1QXXEn1iRu5QgFtmspuJH53EpRYMVcv6dn6",
  "key19": "2HhJHoK9gMk9aukwHXDCYMbLbanVGM9Gi2fre7KGwyLxWE69oFwswQqzCSE6YNtYS6uhmMFHXRA8J6cZ1px2sYeW",
  "key20": "3sz1z2XkR2odthFnwvgxK4ecLwfPB1b2Gc7k2F4fW8MMgM6inN37jtX5pXhVN9uUtFXfkHq2EqKiSHMApvmuRhVb",
  "key21": "5vZmvxnb1gspndNNnYvbqUnpp7uSi8W2zz6QCkQPCeNQaH1LznFySLoxauKDwS382SD79X12CXCBsrzEM1wTxWT3",
  "key22": "25fTWPNMy1SJGBxXj8kziFaaDpQsbTETaQC9xLsmyPQyEUMEZRCsFiTLWs711JhoDp3qZbkTzjmXHUrigfbB8eQy",
  "key23": "ZjcGrvTtwCeW1NKABeHwgPGgZwLcxziaAc8yqUAHvxNcVE41CDUj2Jbve5ff6P2HQWHhpwrTVnqe85oyLa47XR3",
  "key24": "5ucaeFoPFnS2v5TZMcZ5CJwnanxxknw9oMy3MubAwte8TZJLt5MY6GAuy1QFMGWy9svzzcqzRXHpbdJEt2TnQb83",
  "key25": "2QHUnna5D43is76LdA1151q6PBnfKUJt7XxycqVNg9etRmYpy99GHMTaKHHjojNZNGWp9KR6XXdCz5QeRDkmPhBF",
  "key26": "28PwL3dviq7AyChJUGrQsLB6Jjd3DK51UkzWZTJW1kz4fMixFLJuxaJcykbgW2NGwF57wMK7474xv138WFipuRGh",
  "key27": "3FFY5fT3ged6RtCKE1PXEF3G2k6xFFSuadJm989yk2f9Sbs9DhwpS34U6auo5RTEQTzeSX1urvKy286NgXCBXKSS",
  "key28": "4uwK8KEzhsHu4rsdsXzYLUGFxvKfSu78CM5MZL4A9HXJzV4XkCUU4vZHDyK2mpGBcwEdgTRrG2U2oJrYxCdzZC8k",
  "key29": "54msreXR3L61ix1u6tJWinwR87WYMfJ5ThrLroVd11yZqi9NK68By41b53ajMPKZ9e37sV7A352osp2ymaKUjEbU"
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
