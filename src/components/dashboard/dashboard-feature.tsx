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
    "4Tf9wymz5jwSE5nrAWc5B95wVNvkVgRrH24tS8N4QvABxxZ2prj3k3ozsddrknZTjhEHCUeREVptoYQoEd8XRt6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55EADitzvHaXaNq4tbbnkCbVLX6WDi9iwXekxYuxHkBndofdg1RuWENeYuKSYFwnAzZeva6ryaHa6z81EBQLVTkR",
  "key1": "2ieoYiCgb1nMfRpgwGqCipcszNDpedd7siytkf6jNiSsgYACvAuBe9YLTg31VCVmCjnh8KRffnF1zRgj86D6mXFd",
  "key2": "4iYm7dCgPCGV4DvVHGTR6xZAjt6xVZGBYEAZ8Ygn6vDbvE64KhiyyAcGDYyePRVA8AsdJrSG9EB11WF8J5cY623f",
  "key3": "Rvyycu9hZbRsYf2yk1p2MHdyu4XYHM6HxDxwY6wNT11NQDxrjsQaki8HeR22m5W22dWtEw9K2mEyRygk5JqGUCt",
  "key4": "23Y3RDr6yFhL3bbk2QhZQFm2dBSi5wkG7qAGjMHN8bL3JB4VkSXVoVLXDwcMsL3JPiasCtCo6Rr1RSjjwxgXo1Xs",
  "key5": "4o18VQLxzh9gnfaBBspUmKtHPi5dkH9eBAjZmNPvqFUp1pwzMiQCTMgvifwQmPgoPqt4bmCCgby7LwgAh2S6HvgJ",
  "key6": "2WJWjVKMxeeNo54GJowrHfiaceHG41SKUwqT8TdWNFqrJC7SFkBLuopa9AyaW1aqPrHDGBxX7T6U8rnfycwTkMBk",
  "key7": "3kkvYHSw4xwkqGYWRCVYgozRLRGD26p6rKfW3XedBEw5av8acHd5FkWKavaubq37xp3ohCi2umdL5VFWXruDZKJi",
  "key8": "5BPMa3kgU165R9jDnFFfqqrQGeZj6VjYVMAGChSvcdz8QfGommRt2Gyp9tD1tnePXiXnaB1eVytAqUKKaY9R5icB",
  "key9": "4gefEgGTWTHvASevs8UHev74Bfbmht91LfdQP3SU2PCo6wohxz2yYDvkU5rEmrvp1xVrgWb1hj9KasTg5aVveubK",
  "key10": "3jZ5QwKSVzrqZk99A4T3ibxmxjvawTGuGbPR73MiNT12LFY9Cv1bERQj3jDPnjpTXoMWwyQjUHpwizufkZyTnE6a",
  "key11": "4Q9iJGcJkPKJMAUKtHopaQyceKr57yyZck2mcp7NB3foT3tx2D2XHm35XHh6xEbdkmhcEV8yqbbJGwsTqKpmPeGX",
  "key12": "4JHrS4CeAwcBrLTmeAHXUfquukh6T36EYMHiAWb9BTjQFwqVwhULtuQfcPT1sG6mZWEM7558axVFMLEAdbDGs5Jf",
  "key13": "3RMxq8AgrQ9PY3Swb1Bp8ThcdQvovGjkoXM1gjv6d6no4z3626YBeGETYoeWkCQXhg5ugBaAgs1YPiEu1VuZq46K",
  "key14": "AekK2D9hGh3KJHnc8r532z2pcE2eRL1WXL4LcTMyA89ZtsYBhkMmtGnCEi2TY11zyXjL9AhsXFzgDbypW9tcZWw",
  "key15": "4XabSPZPVkTK8pUbgQhkcGCL84EC76CwdfeD4jh4oKDF8MawBhfgrti2BvtoTcRoTCWfKQGr8F2br5yp4zsK7sdt",
  "key16": "4fpSMx2xktVGrYaJsfSK8QvB61dUoJk7TdsoxtSEt94LeY5myBTerpK4WBKW7BfTnuub6T2LtgyRLu5zChowUZst",
  "key17": "2br74muaYoRmPdnzDAe23xCVRq36Ys27vKg7KGPV4f9c3dJgN5QaW9beoojxafJnRybf9GtWFoFS6F87ZUwqVj5T",
  "key18": "3wCmVgpa9PtxiTCbm1vP51XeJ9BxTrsjEngTPKK2e4QDamC3g51VWPmYppFtbTyMWSGnhVBswzUdN8XksGykyYtG",
  "key19": "42Btn5pjhvf9tV8YSk4hCzjbUC4MfVYmbFL9Biv6BV9s62tgajyXsXtPkr4g7s9TW53Nb8VBDvUHeVZzdpUGH8KW",
  "key20": "3wb1xBcWqa7fFNPftDAjk2c5mLFBAaePwg9xweF85r4cf4hrKuNZcRUZsKB23bz7Z5w7gNx5hNfJYqg3YTx8269y",
  "key21": "5mYJW1H5cogviZSxTV7BXVAPeQ5Fc8JSBXFUbb3Yr7cGxcMBx4GisRiN9GCLeDzo5hDkg3m14gCBHR9wLZ6Gstwv",
  "key22": "3catLXYr7H1MvPqXFrkoRWrsfb17GsLePcst6GNq1yqcNYQZJRWm1kPBFTgWptdaLgvmDa4cD5jGoLxLWENnNQtz",
  "key23": "3ZomG6BGVjNfcotfNA3ygisyLkXE9bZX5MyBs8ai1GyMP3kyBBjQMsK6dYKLpHWLmz2m3ECraZqXzSsR6gCq3JER",
  "key24": "2BeaUQAQPNgyaJ1HeVbPJ3e9YrJJisKz81XNPoVvSuHg59CHRSD9wySvDzzmzLp59tv9Bg2Asf9xLaTZyqHQstaT",
  "key25": "3KWSuTQxBUFsCr8bXskqqbsCyicByjqvmwW73TMTSVhRuoGduNBbx2hP6ARdcotuQU1RrxxQLiwyiPX3eXbcS1JJ",
  "key26": "345hLNqfomoRD2EWenzwMwwj7xXivD2qehZUboxNB5FVbjMZUuicAvMbSQhgpq3or6E3s4So4eMHaxZpqK8nFR8W",
  "key27": "5CSgVawvEJFYfy2UhKfAG1wDaumnZwmoPSMAqvG1CVRWFxtQ6oQ9gx8q1pqUE5BXosZ95CK1qcME9bwpWAEUW8wt",
  "key28": "3C37U8R4NdVCViFvTDwBFnpoLo9vPPdvBC5DpiaQZfHfmTKN8N6E9L2ibeWGP2kwM9bjwSjuQUu8u4vU85UEX6HS",
  "key29": "2L3hcUxxHA3cDfYHeLxopShSjCLYBgh5xbca1SiAstSSJjLfEGZobgPZBQhFfNng2H2mHXYZDv1Y4nARucjU95U",
  "key30": "3QcKiTWzpQbvnuvFU8DXiP1RjYxYUq4XuSFgvamSCxYadg2PvJtsSoDjV1FEGEBaFyqzRmSVgyV96XCjCWgc4ccc",
  "key31": "63HmLXRC94cjbk1tJZ8Nn6nyW6Ds72kUuE2rrWtby61E6m8iv1GE1SGbymyPUoCMZA7dc6167rpeWUUaAx4RjzaD"
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
