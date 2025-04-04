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
    "62RYwFBufrFSwyx3YmVswbS6EoFvUDNUTYvrMAvrN3iyADwCp96ug475HxyDfaKoaHF8BHqD278hWq3QbQcju4NP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBQyfz6Uj85ahqQRJkQea2zxbHDWysYWRRgtxG4BJWYPFmgaYFF72LKjZcfEeMFYbE6pY9hTEduhuecv8wCeGWd",
  "key1": "b5Yi69rSE5nn2VKUeevhXsHPtL4UqZmub14RM8hi599jNwuoTUeMY1HoVyv91CSvyqWGz2xi9jNYbWxR8LTZpKS",
  "key2": "5xyzgaDxH4LmzpodssLtybL4EsfW8kk98R348JbrBEHCH72X5d3r7wmB1i1seyZFFcCbtwb1BjpneM5YZQnF3pR4",
  "key3": "4Wg9jNVRoWcq4g45APuFBn4c82dzqXry9cWnGY8e5AifxV35DMycAmqjHv35GFhNZXwq3ES8Pmui9vLP3MRa34NR",
  "key4": "27sJguxFUu3CTuDxmM32Gb3EaVrUztDn5FA6gv3mNCENY5VYC9KLjLRiFqJer8ozHJZ125eF5r6fDAeNREiYTATZ",
  "key5": "54TUdSPLobrD3oNrJWjXNPzczup9635nYKhRD9LGuoKCjRVpS89sZ1Ai2QBfSv7fN8TSPzig5owvktyP4Joyt1T5",
  "key6": "27V42gwdN5sEoeMLLvpjnyjReES3kMx964WQBRT33YPHeYiUkSzFFFy1zJKfq2YTJfh2T3C9oB5w3v7UJv6DRFNN",
  "key7": "2iUb86phbeJALjF2H6Hc4ZtxZhrPQN6tDJMHAAZnEzQDfbZe2UbUJFTBiSUNuEwgxTFW5BnF6JiFtq4PFYzu36tH",
  "key8": "kxwYP6fV5nEkYPAT4CT8eFFy5BTMAJ5xcHmHSobi5jca3grHf9iSQXWFCt8t5Be4UsC71YeTg5nzEsppCSBRihm",
  "key9": "Bc6bZzE2bmTR6pFyAduR8thZR9ZXWRoZbZxCLn1T6U8yCCTCA9C5e8pyF1aiFKHCRMPuQYYQAVSPNmGqj1zwbtf",
  "key10": "3LJTjtVJADdBdxyRXQSGnj764VTW59oXtoJ5zHy2HmXxgVc746fzhVLJowesCZAGQrDpsdw4zuQa4u1Bok2UNqnG",
  "key11": "453g6Cufa9jh6GF9bfy2Gc2iEECqGaLkh5jdQzrqC2fKihEQWSNBMh62Ukkbha5CV6rGLumE31ZCv8iMyexoCwd4",
  "key12": "cY2Vu7E1sYmcTAfnUwvhHW6j4m1hHxTNXnEtvZ5N3fTj5WJybaEFgMLAaaenAauqntz3Xrz38CAU14HeV7Ck5JK",
  "key13": "5yBBGSEDVpBDGB8mn71WkVewGHJxScHyK9CkS38PixU31P4rx9D6oB8tXBdcTNhd9vTYKPapdiDc3t7KYH8vYi4f",
  "key14": "29PUMgzLfSwxnkgSLyvaXGSH6MatNuaXDebg44XwLAnvWxTYoH8VuZsUbypWoVWrs3cMi5fFVhqFbxzVwSXDV6PB",
  "key15": "9MVbmuTFSGVndEF261MSYKx2wvmmeSfhPJ2jPXf7aVLmBtW5D1ve6BW6X8s95CgF9tuTeX9PceGQ3xQuAyLrg2E",
  "key16": "WifEfQ8FmSsaTdnUTnCBF7gqzQQjehF6wyB49YZRnmtX9WC7kozs9nn2ySfMekCJ4MENFp14HaiTueBDbpezQVN",
  "key17": "4QnL8NdkUyqcvCov9oanJwvWPgPbMvz7btQFQYZWEwqtq8agCuDpXiMkVeq5HWgPvJCx9dszkA4YZfxeufEtubg2",
  "key18": "4M2b1xGCpMu62FrNAk5CHSnSou7Rcy1FVLigmB5BeZdAMzLMZ8JL7NKu8fGn3GJF2d6TXKWMR5L2sQ8Fn9k6Yxdx",
  "key19": "3oLXzY6RurFsUNrbsBnNi26TipGrpNyEKxCq2JRvmCVkkbHXGYRms96sXyM9ojwtoPCe4rBzm5yS45Qzd9moskhN",
  "key20": "2qoh9d6K8XFDtakhWAELFiXXNRQdBEU35q5mPe4YB1HgPK51WvSRJ7r9QLk7hL2NttBCfD5JrwA6PvmGudesp1Db",
  "key21": "4C9QkTTjghDW6k6W3ReVzbqeFnmT8zqVFkXZvmDHYX3jbLagUU2LEQ5SnA22PkjjJejMJuyANzXh6cNeJr5YTo4m",
  "key22": "2KbhwUXXL7ieEHYbcgxpLTBbggAqY5WKi2igB8n8h1uR8eKEBeMBPi7rrsk5FgheYT8fPi1xonZLMBUaFFA5SbNu",
  "key23": "uQK9nGEkBewNYZJj3dQc9wDRTdx81PjADAKZKn2RiCqLgVuB8EzSizDw2u3kVUVekgCnJ82ravj19WLS9B4VopD",
  "key24": "5hZmMqvVGpN5AZymEr6oxLKNLHWkMDivYJPfs4wwhT6Pr2z8tzTtetJSsyg4DWCBHoZAhFCcEcnTMod2j1sHH3fs",
  "key25": "26q9hUQvNpxtqw88SyFxqGvMb16o6ezMwFA5GwTJfdcV5FUYJsGGah52PmPfbUwWpdgaUkqszDPU9FBkK33252y2",
  "key26": "62pkZ2r3nnPuyEKvvyrHkYhScppMrVcuZcux6iCaeFcfxtxSSLFmPbytBPsavaAkJVQh1Bpwo7tpW23uVhXupuKa",
  "key27": "26TMQjTYYbKo4vByry4SXHGpZzL1is6oTMfeepcREMMczcc4Erq1295RvxqtdcGDH8SUo4VApYWenfHCdai51NKN",
  "key28": "2umpaNnxdV6eFqDKLBudeqqapUVYe6T1RdTtrxa521TRBYkbAEmiaquXYgXF5A58WYH3taFTjDTDZKEs4rAe56ND"
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
