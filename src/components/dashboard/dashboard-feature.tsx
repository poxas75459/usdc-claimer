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
    "jVNApMRyxFKZ4WC21zdsRCcubM6DAutV191k6VioZ3Cb3RbBzKtR2L9Ssc9sLWy5WLdGJdaE9ayCuB6JEmiaYTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4qT3YV4W4cUtb9N6Wri4GWL9ar18N6Kt1Qm1nnXuyrxep4cHNBPjv66TsvFdYWTo25dWztp8ETg4xn6Kr6uQuJ",
  "key1": "Y8FrUEJJsruVPi4y9r46mTakL6UZBTZ2wwLLSknxcuo45NL44HPEzTuXCNFYUH1vGnUpom8ENe4A47ndkMRmKna",
  "key2": "3c839VsRJVHFBxe1xG4SBfxCrHECoSugoDf6utHmgQPgvocq8qHNvDFq4v4FqfwU73kbrZmb25YqCUK1M5gT4BPV",
  "key3": "5nbhKoqVKqa1XqZ6Jrz89uR6oSGCT2EVuCDs6VcKFhF2FXHn8QykuN9cWSgXD84byi7C4q5u89ojZ1gpg4bMsFrj",
  "key4": "2TpsA6crii9SUY8g7LJchMFiNjPXx3KZCaEhPguvqsPfjRKEax3gNm1V4tUaVm8nvHMPjh8vRLsR3g5G4U1Kh1pp",
  "key5": "ouNysgW2SHK6dJVCWZNTaNcn89Uy9UNEaQpWPLS5bYVzLg62pTKYtnKwLkhZSZnvwHwduDRLTtTN6KeTbd6zyC6",
  "key6": "3QoXcBfvUzLz9deaF1pC9Uc67Xgu3wxXXhNgyzMQmPR2YA5KB9MBuF3SiQ2XmoYBXHhxBtngmcfVUdgchvqB21je",
  "key7": "5chugfDn6PRt3Gpp4fpJNp6JLvxQqn3V3xcaqfmdt2heM66nAT7x7R5GQFLVsCngMU9H8UfpZ3MnEFSzDda1nY4d",
  "key8": "3jHMfQLQRY837gqVNs1wucUWJrCimdvZDbVCH249eV32BVH94EAhZcRVgc69KSTet8d3TTuUD3WYSuRuZE6ViqVv",
  "key9": "bDwGGedNF91mcLDXAjcgbNUzJQ3u9zEkeJSNgVNaF2jMF4JHB85ntWY8H9npwxV6pfTx6SZLrzpwVF3PuzwYLN1",
  "key10": "4sB4wPPxAX8aRjis7HU8FFmFULnnRqujKstvuHaLCjNqZe3YrmYmPPiMfeagXkdEtdfHSsA6Ngi6a7Yfp6U44ia4",
  "key11": "5WuAeKZmP9zkHMnKgdJyLxZisFpW87o2HtjiSFQueiiMRQc3xTVMyKov3MZr77VDhU5AhJY1Ys6TM2cnDK8r5QtD",
  "key12": "cFNRxBKQkELULvbzjUqTN1FKNrdu9Lu7J5R926Xiaw7TzydYZSWmAkc3HcJZqgwK4WWDhNuYMrrFaC46gkT5JW5",
  "key13": "iqBficjSiFHScFrtxDkQK5sYZqt1naHcg9gKoPBB7qu7P9M3FekkcQcPbyKo61kVKEcAjwTGNkbTxTypfTPSZ7j",
  "key14": "45rmRp6Xv8VoPPH18qch1CZTKoHWimq1o668psBp5hZSy9ouDU7wyM2CUgkF4sBDkrc1jk6YzQYfHzz2qTvGzCNb",
  "key15": "4egdcPuh6Ak9wiGy1XZFqPRfHocDGT7pLw3uFHBqzLcGh6f51SHFZkQbP8fLjgWNt7mfag7VnaKFDQKtucJNoVj4",
  "key16": "5HTDGbNiPfEnhzDriJg8FmGYRng2fYjTcnDGLzceBrdK984V5s3jf4JZwnGDb1RtDycK6VX8fKpENqVsWFKKM98F",
  "key17": "61cqSnAVqgwSfqUZMpvdDQhV1NETKv4noVhrPMTeGETqW2fX1wWTpXVxe6YvziJgmzkzgwF9229S1TppYCcF9gAK",
  "key18": "4PSwiW2hyvMVCFvJBQZqXfJQeoQc7cfrSrJEeuh8RETkcw2Zgq1PPydaGjCwSqYGCCjQKumpzWokQ6yfAawYe9qo",
  "key19": "2uwDP5jQtDCtY2vs8MEV8oTWdM67Jkt6EtSNXEfydxd6QpuR73hMsLnjvumSnvkvcK5NLjMwSGjjT95pjFXRuCkb",
  "key20": "vy2jBsjBDuFpZF8Kpn8S5UijDStNuMk16MTbkZdtfPvMxzjQ5oF2jNYb1y5WwaBgfv9bmSPf3oUCMYXr5fk3q5d",
  "key21": "5T4FUJz3RLzNR1Y4ai8z7a9vt3h6Cv6eVHemZEfmwGvXhqLwDFf9xVUvtSfT5DeBfhGnmYaDzyxjc4om1fjZBpzo",
  "key22": "5SjnxjXqyjeqtXTF7qWojNbdpxnwpCTEYS2iyepnyb4YXiufW3DA3PzWeci1wUM71Tu9yey3XfRjqdFNkQZ8JJry",
  "key23": "38Ltv4u75aW37En3fidWV4rMgXR6H87B6AaVZeBNdgkTSe477qMLLEkN3KyNBq8k553DsqQBKtVr13mRLJGmsrps",
  "key24": "4bgkCjaNoqUyJ6injcbXtUS9fzu28zUujboQpowPQmm2iBDvoDitvRQcbcGh4NrguDzh2wH9iJrnw2TGEM8XM4kb",
  "key25": "sG2PLt4JRGgahhutH83n4XsfS14U2Wevn2WbtqXGc9Q5XBmJv7xyMMchcGAEXtUyCNhkt2E4SoKxQ6ctuGK33Az",
  "key26": "4m3BQV6ZmCd4jifk8EyfQUZi4U28vVvmegbJhQ8SEEcdn9PKWLcADQEK38kUBDJBVncqaJ2CHGHGJsxEE6KYgmnb",
  "key27": "57kDp539eSveDSE3ZWHHWMosTvZzZuQtPxUkbDsWt4n6UFoQW12B73R9KNuatrKRasU9w5Bq9gfjVPkudwwpJWBc",
  "key28": "22j6hQxoXrG9yckbkFEEHUKaWxpgpRvdieJ5tCVMvDNPQScwNor27xiKp228i7Q3tVF8qEt8DUrhUnCxUjbFiAqZ",
  "key29": "U29SS9ZskZT2hemjDaDxXjreFvLm3EWKYCoEtFP78yiGBKHWS6Xi7FyimbxB4dCh2y3mKHppV657rCqKjJP4Hmp",
  "key30": "7vV6Y3Z6eDf4bMQpiMPJTC6PthSzaojGC3NQkZvUshrrechSpvEdSfEBE1Gd5zm5siLyccrK5VKksM1VcbDiSmo",
  "key31": "ELz39HVMAqeTDUmPYkFRZpeGCQSkQRZkGMjtDzQkTLNiCGhLYNBVByAP5aKtXK5GttzDwhpfxmZD6cMcPSaaUCW",
  "key32": "4Cm3RPP4pxWeXKnrSdQLZXtjZjH8G2RYuHmAEJW3WhPhAvaCDVTjWeBbC2jb3DopV9aeSsoyGLEyt2XokoV2FJTo",
  "key33": "3RwyTTBKoSMW7gu2WghjgRMUTjgnAN29xq1qfCHX1wDDQ6MrpriB9ajhDeMANeDDWPWFpYWjiuWLPbgrmozJZLzG",
  "key34": "2bZgGkHNRARthzJHG48P5VM3GPq6uQpDpZWHzYaYXpeo9FCCt44RGJ3yzbDeYp9wpGzhREg2ZczJ2tA7a5neSZwq",
  "key35": "iCMqJGqqQWzC6QNTyApmiGJk1WGUa2QFbGF5Rw62A1zsPxktC6uKi9LMGbBLV9eqtan9o1CQH4UsoB9kGTEtX1t",
  "key36": "2LdBxa9HC8RcohMphvmW3qpa19WiZyrCby9h2zu3nQjY5FRL3HToHUUFroGbzAJu2nsFvstaP5SeBAoHonDHsAo3"
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
