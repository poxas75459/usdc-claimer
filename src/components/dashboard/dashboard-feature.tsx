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
    "4xy9nF8tUFR9r1DxbdFcPAtnPd66p2ALmxKNvKGxfFwzJfQVywzuC6tpuo1UKuRVhDbe8fTAkD9o1ZV2P7TBQ4tT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CpyNS1HkfrkHPcWDwfDLrRXKZLdTvcwZrqhHTibTxZhmrfbuFSsMrRKsTHMg3YyWNYNZ3RQUpWmieTNx6rh6e5C",
  "key1": "3WXpmvd1Vm4YWtUPNSNzGotapviKKLNaXHtytCCa77LoaB4LUeaksARf2MYzAsEGg14aTN15juyNWzg7iMBNBLCY",
  "key2": "6ugoSsQUxmzixNmSB2HD5AuSFkCtNgMy9cdtjt1P7yPs1TaX7yhp8VPtPffhmUCzNA286B7aXSS4qwpsKFctwaS",
  "key3": "4iQBSdUdm29MemPjJ54XCVxDM5xcsDbiVVQPVDNwvmbjMnbxuBTgfH5LMVPRTmTb4GxXfnfNw31DNd2Gb3FrV94q",
  "key4": "51THbhM3XeKcJWZeTKCEAzNjCnftJLTyf7WnfmhCcfytuLCJDkvP3JSjtEPeYr5JhU5rX3wFmkkoVT1RQ4SY5RUu",
  "key5": "4GSmCRbesrtzGv631U7GXsPab7uFk3Fkdfks4GduvHhmWs1H21m3DXywmScuizngHAGn7wuFcaqPGNTedM5MjAn5",
  "key6": "43ca2kmBZ9LQL6TaM7mDmY8fNT5cvyUjuDFjPYWiKtfTRfz899Y54nzoHdTibhsFLRF6boZof4fjBDtkfnpWW8Tk",
  "key7": "3LEewYZSvLKbLYU9feK5dqYG5qA6WwJbmraeXncpgi3srYHJiWmbski1gyE4hwwdc6DMkBYiMLwZQHyuVYXxwwGr",
  "key8": "5yptqJcBubf4tNBVTTJs7XoDCwy4NcB3cX4VZtdW635oP86rAYkK5PgXEPUKv6gUvcyt2UUF8EAtjghpA5dktSZ9",
  "key9": "4Z94KbWmhtfGVc74BAGvt71Pk825HUFSpecKjHXamTT4ogNBq4FU5AmjXzg36otNpmpUmut6kTybCsrYbcHai4uC",
  "key10": "3QkSUk9VioZBhtTLnjQZUFNhD75zC1tLqMd61DPxfTRsBfzZLW5sFHYEaoZYgAGkhGSaxuv7zMJzY9HGE3Tpvbd3",
  "key11": "LHaU2tJaxGtdJaFngugvmnfAyLDY4cMhKfEwEaUwkxKqjrSP4kG5MxNVL4Nhib77DgLy2e1xfBMUasrsmyc8hgU",
  "key12": "3tRqUnPSzVdKznADdhJhx7ikKjHfmmAsttUtHRsQGzoKRcxSzmuLYfBZKfunL3bxEHGV6RkvV8rsqeaxMpZj5k5K",
  "key13": "52yXLKU7fYvyhzcT8M9QRmr1eRpXm3kLt1BUf6GLSHwyXueWodSNDikCszMPtR4xQqB5ouGmVquAWXRkb447speF",
  "key14": "3TpP6ZQ8xit8UfEgkZbwwcb5XVwpcdAng4wHaKBrMe6DvEsk2eFPx3WcFD8KKnbxBmrJXXdKHAavn39MU4eMDPxr",
  "key15": "D6ufPoRLfZ6Ld98tXzS3MfYFKSd6vQ4NpaFzzT8U8WrSBF3UpVM9CBQi7G5h4tzE8cTMCLWX4cprveXe3MsBtxe",
  "key16": "2y5muQgB6Sv25bvAZ8yG4AznzwW9vWt2BCkuxHXo1ViRaDftyWHkgGTD37AeK4pGqnDJ5ZhjiZPUbnFfbxSi3RFL",
  "key17": "2GBSqkBNep79yHTfrPw2XYVb9Kby7VLKfReqeJgvCeNNdbTM9cHhPdtDgxmBAZdegPoxhVA5YSgdVD5ySrY7d77s",
  "key18": "63TnudRNJvEK9zUXE78AVuzFadogmK36AxPzTvoK3Usz66aEbTP49Tn9X1BNFxLbk7DbdFntzVeocT8E1isRApN1",
  "key19": "3tK4uS6UiLx5VezvWE29d2EaRpmZcPNHoDuaxtQgWAWAqYLSZaCNrN3gj4qdPUuZFaFkY1WD6ETTgXVfDCDKsPDJ",
  "key20": "5Qf4DdY1C5H1QvKAq1WUHqkgoLoE5VjgV2N772p1kW5wDkDsLDxwfhECAWYpxFadxXmHqGa32vR7ugjHrHtqgTmE",
  "key21": "4QbmUY9eFqkKCnzEYDk1VJN5x19kR2qR8DKvxz8QxQHuosL9eWxN1bRJt8g9XHpWwgyCmdudfPFeKmpVv2ssRF17",
  "key22": "4Gn6aGuSuMuhbyFQN6nNqNd8dcnGbacQ8fAr3GFyMtvCfkDB7tDYHYMJiveuC1b54VWx1KGykKXx7M7MZwLXKuD",
  "key23": "5j8gGPPHgDBe8q1RfHjxdg97xecLyod9RxbDWW8VwkNfif9RiTB8hcH9T11EZJg8zVzJ5j8dteeVLtdGRtwT7zgH",
  "key24": "7ZaroBJFo4AHtmGDVAB9ReVXPTHRXK8QYpuVHQV5FYSwpu7GuRpbiqQaVRnctxTpdnjUqhXLLhA7Wxi9z5ogvva",
  "key25": "65YjKPaidC5WFbSuDcrFuNCLqoo8TzQiJmjpHAX9mUArbroPnKyj4dUFg8CgG3vmXLshTtWsoLz7M8UBZVb3f8By",
  "key26": "2Jus5o479dmFQ1z3q9rXMs8V7pFRu4tCzobc8XxhiV13S16LsbYXJgNv14RYeCdByj5ge6QjRcy3F4mdsZVGYE4R",
  "key27": "37fiH8zx2MCxEgVgD9EK6ctqgSKc3PeH27eoGEbeqTDAhd68zfHrBc8AnVmz4PYbSZbDkHBCSqoL5z631vShBLd6",
  "key28": "b8XPwPRZvKLq1TstR3zB1kAX8ATFe4t2c9dipgxzMRgeF3fb3ZafGbJv4AnqXab5KQzG32CcekV73AU52rQ4SUu",
  "key29": "gK9CXANCZcgAk6rMqeEMFQXfdQvqP3GMmxya9t7cS65NiME1QWttrLLhdNffYagDhKGJcFLstyRDxAntokJHdkn"
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
