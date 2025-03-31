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
    "vtHMj8M8vNkvUmsLtjRMnV7Z9p1MCVCNWDdCYdaaLzVcJsE62Ed4p2GP4iwMZX57PGcVHWwCKMnRvzFvqX761P7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eb6xfXJiHbZLqqKk7J345kboSEzzB3cPUtjHUY4sF2PRxMtU5jrUkNqSGRqNRkkJJBB1oJVU5fewx8VzS5LqtLH",
  "key1": "MTqAv6BtXztQU5NLgK9Spst8a1X5xJkYsoZKDkkRaUAjj77sp4aLxwqtHamVgVxPez8A3UfwxpfZWiJ1mDvWf1d",
  "key2": "4fxYD8MDBQsJazFLWD7rytgK5XsBbfpVPEffPEuQMfde1aMs2jZGFFeJws4Yp8imEjzMXkpTcru5R7JYfo4EiDGX",
  "key3": "2BqzEW1ZCRpnfVXxxvRZMBNzkjsgVjoxKgrVijAxwDrZkhmtd9gSsai9NYvuygNoXJT2k7bXuZMwHx1TJv6GkTCs",
  "key4": "4oHkBKJKhzZ6NzcWAmBUGw3Y3SuMsQTQJxk2TKGw3AmJ5WSDWd9A7nv2nBXGYxmmq6DdSgbBd7ySVCsEWwVGqJjY",
  "key5": "4A53FGeA4xjX1vN72XQbNLtwhEtTVhxCe6mFUkxHUj5f7tqus3PmKqzLzbrC13Y288FKiDW9q3Z1eU91JU9LULYL",
  "key6": "5S3PnQNnkvvEhP3jA4Z1g6hNLYC4NGsBWjVyjsoRKEhdXy1YtyDHH2Uznsgs3mL8f353hYoq2Ws3hzjyd47b6giW",
  "key7": "378EkmgoMQv9HWnqcrWgsaLSNPPmAfU1MJP6aRBqMjJ6BaNoN8JAbCFxSXoMWnWzNUBfBV33Uy8h2C7BFuR1N6Ce",
  "key8": "3QeJk4CCanPknPXb5e9r37ryjD1aHKE1dT58x11KNGt7AZZWhVu4JRchCYmBp2tt878cZrsu9PsxGo7yLeTj616M",
  "key9": "5mggiRzztm7r5sERYbYowFHsnE76az7LvU9AmJuuiRxuvFW572GsjHcBovcqWT9D2Rkca9QmeQZ3eKE5HKm9eBJw",
  "key10": "58fkQs1cKJMGsdawnc6QKBL3EhT1dHrpxvXHoNL1CmLnmTB7aQKU5GpWLGNfbq2PdPt8FWA3GkNqbsPMQcZdurKi",
  "key11": "3GCCzSB4jH3sDZn5yn2aCpKHRSjFyeKTcuyCUM1mnZUrowZPVMVBsQLot8hMG5UrXa5ZeyKMVktnymHNTY3WrPcx",
  "key12": "4ac8hb8htKCHMSecKkqmMbsGDpyUGoTjPUPGGDR1rAVaVgTfvUy5X5Eb2wwofxcTzjGLjMJyVCJF9NFBn99tiKEV",
  "key13": "4DzEVX3BRZuVPCgvBC9jibzVUphCV6x46emiVrkq9P9jMiGpo6MDm5fyxAj2P9qwC9autrsmYfsCqK5guTayYUiy",
  "key14": "BqDjQKfDQK9BAUMgVS3JiUmonNQDRNLiAfuLruPjAjU2NeZ6V1jDx1uoqYh2TZbF1acifJyQ2xV6zgLNhiLKXyi",
  "key15": "MCwmXaDeFLQd3e5f882ji4sf2Z2yUuWx8v1dGH7z3fAjxbbMic1Lmkn3KoDFWsFcomkcxoeuKkfyvn8uEEJKU1d",
  "key16": "2DTE1yEECfQ4gkjXQKMmynXKTD7p1yjH4bDFF3TYZyxG3mthvrHoxtmAucNhjXucuWqEgMY2J1DgrVPfZXVSKd1B",
  "key17": "XPm3Bv4FjUAkxZy9uVRpWpD9vvC5VawgTFRn1jWweQZQaA4BzRyVHCc84uP1hJuZWp5uCMFj2bGtVoq4D6oh2Do",
  "key18": "4mcVhKTRBSbY64Ve9mzau35BUkaNPjcc462TRpar35N2DYR9biGex2aj9RQBNUhyLh9ahfxMN5dt39PwzZJJCjYT",
  "key19": "2LwB9EsVBVebZnwjCgnq3rTsjAVU1qnw783vMRG3hV11p5aZNMZ9votoRaUymaT8LBK6sfQfi2JRw2gx3Qzoo6yE",
  "key20": "3gpN79QKV4mWoDyVLsKCGuSnJjbA6mBK3fnKBfM4aPKLVtLM1vc18yuoJLjppGTRUVP6bYsBHPiDS39uPgo16hoo",
  "key21": "4LHwNXFpgR5LWn6WxwutArTSiEP4croRRSf4pECW7UVKqMrNTMKdn1aED3UDy6Mp51kfpBX4ACr8XpMAUn8HL1Wt",
  "key22": "2J8te4UfhA6eG4WQEBaYLUzugrV54k9LxadiXb4551vxjTbMgXKst9kJw9ygGsPTZmdXNiTsWEQg65QM4TGqutbB",
  "key23": "2RSWoPfBaFsTbihyKt7z6myMqgNaB9wkH25LbzkenBdBCJcg3sVUFLeqnVnwbNgCKkXzvHsgvkHxSmcQRFfVHExK",
  "key24": "57FEnAmW9xjbyqxqMn9ax7XEZxn4GR7qzWoKBFSR4pK2gJayeX4uTYvcEJx9TXGXdybXytLUHzGGS8Yxohr9d7Wf",
  "key25": "2guZMmPuYeToTpRmYNSca1iqL7KfkBBvTJy7fg8bjH9Voy44QhE4iKJzoFznr1TAF4ABk6ditFuVyPj16HsE3cSW",
  "key26": "58ugm1uDZMsRqzXFxhwdeW1h7QgqjmG1P86NmYj1RfqUoUTAeBXypq6nziNKpmA3a8rjNno3USGmFhVD7wRAjQzg",
  "key27": "64fX7eKrUuj5nDYRYtaaTTAZEUKDyCw4sD8equHZUXAsUadZL76cohTUaK3xBJFJ1KvRGDNvifV5Fs4x4AX4AGoD",
  "key28": "24zMCLyZnrTUKHits3FSun4CipXDTEXaKZJxqeC8Bhje2x2ZXzDVH5FmKB3CfKeE8hT43ZYhbNZ4SRPq1TbYtoBS",
  "key29": "67XcgBShiGVb7dCoi1Be8nzTcA9k7YbRM9bm2LdRxBMPDjK2PctXVJBmqKa7yjHZztdL3CJfh7qQQsXDedSwJWBs",
  "key30": "9WQnajB6id24Gdn6nfa7M1tNvXFyBM1opzs8dkDHzqaqdFSnbbBzTm4gEbJuDkyveRnQ61T2wqJtauFCx82gw1g",
  "key31": "2mcibeebgqDicJPmwP3dyU8SGQ4jZYQTKw4xcYh7ttEpvNMEDpS2ogCxGXwAgPmBvsmJrGPGWQRmoMrGXCb1BD4U",
  "key32": "4K1UDdJPqR1FEkvueqMpxFSxstoPUTaRsAbBwSKkNmcCD9jGKtATuAunxXAn7Kk2NmChX2jtHPiF5h8LrKE6Zd96",
  "key33": "3ft2xGtpE9enSwfEjgEcBwYtycR3LGAET1frutKRm7w9ZEkantb3Mqot1WGwMMCGcYeGkxNt2CRLDFNwXNU8KP3H",
  "key34": "2kv3te1mqmZdTX9Wg8GKurtLhLDXdoXmhRnar5q5y3h63arPFiK6vcaSQCsdszECoTS8fMD27v32xR6JTbUMxwZN",
  "key35": "2Zix7WRXhsAMBMAyoFkdRyPgXpj8gdBLevEjK2RZL9Z9DXSBNqwkgCDG5K41AhQpsiNXYjBorcjzfi5Za5i8f9Rz",
  "key36": "3Aa2DmdQEMAwsNRHkiA7dh6gCnELEg6m1mVXLpZT5kW3i13J3QePzi5P9EfgQ5UTmmSZ1Zu74MaWJE658RiVJskP",
  "key37": "4Hrp4waoTdB6hSJqdmrYumkk8Gm3mooS6qFMsxVLGGQQJ75HMKmKMr8hYVxEH6kLdygNzSqxbKyVuyJqkuob4q49",
  "key38": "4Jigg6EJCysM3myW5wjCdoc4jWXqUmfnkJwhaqe7XSgfqWMWWujE6Zdj265pTNFAmCNJ8B7RA7xzvEHoqL36KgSC",
  "key39": "4QAHHErfsftFCcP6a6tCEMFTLE1eY4T1NudhzteN2ahV1vgfkRGFz23jhTrpaTWhPyVUMRSPnhpNdBhyaGham91e",
  "key40": "3pDrNEPyyi99BVaKUCSfgt1faDE9AX1sbmhGKC67v8tHMYBVZJCi9pMnVFqGgApUX2evBfh645U9fLj9SE9xXQKo",
  "key41": "4TDAsMrCcyi5BHUvZoB2rVbtpEeaJkKL5nf7eF7nKDxMm8fAD64sBPSNmnLofXQYpNkx3V9R2WZPgqHKWJqzyYd2",
  "key42": "2VPoNuYsvFgWJVWCJkqhwuhrkt6PUEtsGcQz29tgztjRkaywRLJrxqWDskpkLepXRQbcNTSwyJzgJAimK9HCBQ1i",
  "key43": "4EsG6F7VgA7pgA3G3LYefkgzYdAkftsumaNBqgHiemEmwtVDXx5Q5Q87yvuqUpw47Tz345WsqK3Xz2dZ9WrcwuNf"
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
