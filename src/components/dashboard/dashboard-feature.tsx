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
    "4PzNZs7p33Dfzx7oNeAMyks6ek5Sui92dkczhxSRJkD7xEzPeWJA1iRRP5EjcqwxM6KkniyXR8RaA1obYpQ8hdwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zdz7h79FLGnnXYrR9UGriLxCpns83me9gGWXWdC6Pa8yZSFd4dPhw9tTfgohPyNtS9oyGFuTS7EaW1kjD76ZVoV",
  "key1": "5x9QH9VTVXTr1y2UgWBcXnYanm51A2dvavhzq9F5GeMhKDo665rh89zfm1zUrpzdWax2REyKXBTDevjSc1zHoAcb",
  "key2": "2KRGUMeJc4hxPftVTaXP2BTqdM4u3HzZsYp8Jw93tNrrv2pe3AD5C9teqsoXF6y3uv8zVLPgDZ1JfutN5jR8gpoj",
  "key3": "4Dtp21BFaqTwXAYZhag4yXDfZ4fcgDungGsRuYpGZyprfDk2FJxwmJsmCx7c5L2xL8n3LVG9r2iDZs22xEkzVCLU",
  "key4": "2ghWj3MAoc6nQvihNi5aJT1BWLGfyWRt6DVRUud7gZ9YAkJX2fkvCTiZQg82UFCKU7AUKFDJsEtS9uQnb9xTF2WS",
  "key5": "2vbKtgMsY3ym7nvJeoVjTHD5qdymvfSF6Df5HedTkZH6ZudJMWqWEvnAbbFNHwrZgMNAKPqQWBRApmodUozfhsfF",
  "key6": "nEbDXQTgKmmhYYFipeWNnZHeTf5NXBo36YYeQMxYGJmN8b8Pc4joMtFA92KVERC1szDF5RWrve66AR9TU1EpY6e",
  "key7": "2fAjGA8zDmq3psAYrWonAdZad3fV4oqJWxL8PzYxFLpPUzxACx1ZC3RidmYCbjN5ZQ6MrtUyqDPw1TtPYmBgJfG",
  "key8": "5adEUY4WZ4KQ8pHNZv3EiPM87VioHteA5AcVCv6jDKj2QGB3oXLKbUa3t5Buk9dsTFyzHJBEepCQVQAqxDTaWvnB",
  "key9": "42T2swn8t7uxeBE6NChic8tkyQTMC97jGh8qiryEoDKh9yEzqkyTiZDXdf3rwswbzGXbv4AKuMzTeVaY5EAFktLW",
  "key10": "2wnjmTmZ4dxf8cePiUTpKR4E6Z17NiAQQ3w5c7z6wfMzqQUry8ocnikUt8nzsE1MWau6DWpRhE3PQXWj1SAJ3uBg",
  "key11": "3gdM7VsZB9KPRRX9ax3NN4XcfSq4yWWw6uFsbPZnPzqGJcaasj6Znq5j8fvTPd9FY5UBBAr6wnKAaFihPm7qy2Kn",
  "key12": "21V3h5w2KTzBnaywgvdzei9AR4YqxPSx76LTPfyFm7FVTeYcgYSkMDwikpLeEMfkjk4wNpVVfb3yBN1u1kfXSufv",
  "key13": "3dJ2QnAGaMLrEc7Khj3HBtaUXdBbt2SwtS56bEVbS1wpusMg1rMJ9pR7K5ZezmVGapxS2qJvocS1MEn9T9ruV3oU",
  "key14": "5xQksfbmcLXPt6rfQx3uKBGwNjM3bxK1QXFkvrXjBJ7Fd9nZw7X5iVHDvCHt8mpAScmrbqjQjzN3RJ6me5rcEH8a",
  "key15": "5ie4FNcwaqtGUCNJAgufwwL2DDintRuP7wbZXHF621E7Hfn89JDoRLwZaEKeWrQhBBBkDd6LRFuFfb2n8sXjLng6",
  "key16": "BNKbDiGJQQWx2N4JqfDitauDWvkStXsdAyrS6nUACfwMBJZzAUEh2a7pq1HcpxVztYkw21VCv3omtAooFsHAyaL",
  "key17": "4S56a4WrSmUDLb9PHfqcd3WhNTb5qfanSS6H6VQ1UDpnyXu9UpKpPztDLPQbbi7zWk2VrnGg8iYCeQasZx3SG77w",
  "key18": "4WqXxf1trE8p7eeSxNXnwkdUQdZrp6h5P3CtWW2Y4HPbn6DVa1xmZyGB1SH4QPBshEJ4UhQyaTbRR6wFqfEYfZ8x",
  "key19": "2QmdUXwKhogYNULZft6a4Wnu2ADEkKwmxg7HX5JDcfP8fD1d9iTCN3scozqaEgSVGZMmTNkEepGSXVMWAd2awMJT",
  "key20": "4DCLawFasFruzWASnoW9XfMikBEmPXQ1YXML3v6Y2Fw8ybhEY2DuMqFn2z14ZjRQynnVT41rG3txx6rPiCESYfaW",
  "key21": "41Wkt1LcMpZXieEBHFYQnPU9FcyLE1GVbc4FdTcBL2ddH1HzkyDx5hcYKqVmoGWHB7N4o4QVB69TR2J4HdcyyE1Y",
  "key22": "3A8D3AEmG5RixQaBVdkwzESG33d1bvQSzGYndgSaXDueVQ7iQ7uQK3ECGDtnRL1mszJmwxbscssafRxRsmY7qNJD",
  "key23": "62c92xAYGoc74tTm1FCr7exsjzzj7sHeo3Q1et23gfTYLYZ1Hmjk8xBNLb2LqZMh7CnBzwrzC5ahn22SrwWfHkG6",
  "key24": "5TKLefvS9Y28JpCPjfkBT52TQuAZhAs3f56pMERavkiG7a78VzSuYFM3JdwadiywPEQneTPjjvCid44hdp6TLRuQ",
  "key25": "43p5VzxrPJfb9k4yGdthZtKTysj2tZ3MPRWcBgPDSXRRujm5HtRbYpBCSySbkRgfhAFEBXyPgfKDFNjk8zG8pMsz",
  "key26": "2fuTaXkc2RjQ1biHTwneBAtr9a3dBFk9XbcY3urvZvc1QbjPN8QjBqmhbmcxZeTqF3k131JxCpQ8Pst21bx262TR",
  "key27": "wEa3GshCYLxM93vV6GPFRf1Fi7ChoGsHvt8GTJsv5wXgQiZqup3mLjWKCB1dCmXXRGGz9WzqV7PAd1yFvunDv7F"
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
