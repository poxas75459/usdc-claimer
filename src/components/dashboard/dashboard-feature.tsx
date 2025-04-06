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
    "5KR5wmbW7QDHTRqBnGKXrFE6r9zzweHjkJ6wjspap6pg3Ycxmz3PK7VZosdvHeAurLqs7LZiVt9ZA97TGWPwMiWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDhhcazFkosgtAAT7yKYgEGPYNc6rAeBj3Rtn84HLxiSvL8X2ePZk7uuNj8K8SCYKa3dYm5rcTvyGF9VMr4sYC1",
  "key1": "2QsaNXuKNhEKJyTUSiMJPexFFDoHeKQLtMJ4PPB3EUXJGwaFM9ZPZamDNn4ScV9MmtmuP73QiEBzxN1vPHnbdN9C",
  "key2": "5y4i5S2xLpemTw9Sbpw5f8fWtTQrjp8Ebm8sUXAkZWpGwnaVXdUNcHBAjnGKWbhzoKxuatRxQXY22nzrxSqN8LGV",
  "key3": "28LjghANem6FRYSsc4GiLFpjLofVxLuZwo33pv49SKirbCYNXEcSYGdJs6rStY2EHqwoqABye6ionfVPwPDfR6hw",
  "key4": "62V8FiL6t9Qtq4vehX1Uy7ue4DtUh9XnvQ8MVfDT1YDHFnSGXaYf5yk3Nk9exAqapghMahvzZcDBjojxEpUyhXmv",
  "key5": "5W6Fyt9WzPLLXiGsbgBTTePU73ZqrZXgTMzwktcb17FEzcvjKdwy995SKoJE7eicB59vMZXtRXn4MevX3ZNCnGhH",
  "key6": "3v9RaY7GMVdeft4e7CRudLZCEj6CNcH64e9KiumBHkbTFFyenphoSevQDc4Y5LnUrCom77aBQSTYx1RB2cy8Gtx6",
  "key7": "5NvmWF54NwXyDNNEVmD7KcSup2VuF1zbbEpf6Js9jRaM9kxLEu8d4gfP7KFbuDPKVt4KFgWNsC14Shoq3cSBgvj8",
  "key8": "4vb1EHZq9NcYFFNQC2uYqhNFJAXs8tLmvPWBm3TjzjYH34Jxdrzseb19xCU8hByKvQN4YJxzmjsqVqgVmzrjxa3u",
  "key9": "3GLM9vrRPD8BNSHJ6sBhQkv9mNzXCvu3Y92eR5bYSbRtvsWHnk6yp9P88RNC49ecRZ9r9xtMqG2t9SJEhBG7XhSy",
  "key10": "4FXme5QVRMKt8DZfWgeBubGGTzrzYQXppxuGfRZ6YWS7WexcE7GQuh759pF7Js2b9BM5CFf22xE94quAksNQgvWx",
  "key11": "631idaxZctaHjKMfsQo65aNSankvLC32UNqH58weAf3VTrVucazP4zUYMd1dYkkGCJ9yak3H91V6omjG92EDQ2fy",
  "key12": "8981AjZfkrGhhfd7ySUEhXguHzpFewxV2TYGH4ryHPKXpceVnhK8Nj7MZ4ys5gs1cSj53tKiWQduNBTF9kUgLd6",
  "key13": "2a2LmGaBdbywy66p6x8cHqnEGa7FiyUYYKfjoEDwQq2wRNV5Gf3q1MnFmVU5bFS4bUGDwBK4UeTaxtTsiLRGei72",
  "key14": "t6NQbPSHQs4RcRH8qtSHq8uN62grrkT1RMEC9jH6bjwsQkXB9ysLomyjcsdZY8GqA8XcY87E1xGwwhVo8dANtZy",
  "key15": "5kPYZpD34vW7DbpVhZL6qVkYqi4rXbeVHj27R9JJDP6GEVmXRtpMb7hNBcCdvg3PgFtgKhKo1o19MH2ZAn4XGhnw",
  "key16": "64XjcxkVjLiSzfULLZN6MzzcpVoFjXaWRGL19M3ocUPCFk9sKgueBLtZpYMFhjuWjzGFFxsupypjBVxjBpd28yo6",
  "key17": "2h3mhvzxzmxU5HUVYmY51y14nKSm6s2b5A5WzCjHZGNgmXvVF5898t5GSWgcXRDPheeDPXN8FxnrvwgEVuQkk551",
  "key18": "2QeFEBPB1U4q8urKsxQ7kPizmnV2wnP48dwevgK5HAQX9FNW2yWodZeh5TUVS7auMcU9iNAkZ38hR8VX5GJASp9Y",
  "key19": "39U2N6K4pTBqwdoPfWFHbB6VDq21bJqxrs54AYMxEpo54psG6s4sKrFPRYxx2cNPuXEdeaY7XTkBD9oYPWqmF5fK",
  "key20": "26o1EWHoVB1paKgfTbekYYXoadf1rukqgKyWoWLn5VqnkPzs3GEZkPBV7bxDGM6kJcH5GUZTiauu54VQ1pm5hUr4",
  "key21": "2LghVBNTCeX5q5Jat85W5ZZcMSqMGU9mjzgQAVbzs3vByt16u1z57DQoKk2iCHMxF4arCSLBuXvASoiCiaj272Y1",
  "key22": "36zzkwfxz6tkfyQezZSMWNGxqA3tGBXH3fUEtFVfPR8s3TpBym9tynqdKWc246BiYMDD1oUuccoz7sRunQXbJXi1",
  "key23": "4FAjodrUw1nsDE5iKGwnXB23RSHzFkctNKk45dD1jEjZBV5iDgGUun9twsbg2aJUZHKKzNCakDyBtUL1qN63Qkji",
  "key24": "5gLkZMush6M2CkTdS3pCCnSVwNfe41TEmPv2fact154FrH1ksPeGwnEyPXo53Z3H8xYnCzgTydUMWBRfUatWmFyw",
  "key25": "5adAkLhZoox1QJvvoJLLYSpauta6LzrAfyYEdtWjLLLYHoXbNsb6Kr8ZqiSJS8ctijMm3TpwsDrakL7H6r3FY3zn"
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
