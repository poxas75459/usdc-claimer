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
    "CdYPCsFB5uDDF1AdZgQBZdJHBkAB3kgaVwU9GNjkw9LG1pkhXvptkH85BLxyXqFKaq4izMTCHLxQMrsPgApGHFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQMnM2KQApawns7ot4EXNAnWmRAUm4C2KR8XvjeygczTnEhcZYdiqsmJSVWhDJ4RmyS2rCvZVP9As7rPvEfpMXY",
  "key1": "4cJa8m4tWRmvDL6tJ4inAA6oHGLVPD5oua6vreSUg2ab27QeBVhuNY8c8vhTG51KiCNwuxDT7fYRRFpP3XB8RAZr",
  "key2": "3P6ged7bNZDhivZwbw9ADMenKkyVagDXcLbmuqde1NcVtmDsMCDoh1xoBJik9ESk6ATkEEdbj5QmHZfgbtWyaZcc",
  "key3": "28m66diw2gdZFK46KhxRyaw8b7S4BTxBYy4QRUGeVZxYyRTs6w78vBMXjdeQjW7FXubfJxNq9V55sY3wcacQEikt",
  "key4": "2jmbGZfF6dAoPdmHqSPZVToD4jW2wtPmv8LwCFpifegNq4QomcAyFGSHVjWuDJJafFgzBzKxmhxaNLEu3Xtr8RFR",
  "key5": "4q2mLwMm4mQzbQBdEsXAASndgeHGgjaRK12iNLsPy4BaDpeGZqPj6MvJcCWjxKwCHXsspt6famQwZrraJSD5vcUU",
  "key6": "4zpoeM1bHJovNmC1WEQj5br4fAyDXAxWvxuLXkRFHRBC4ciPwUC8BcwtMhthKDG9gVKmvwPz7X859CJYC7YhGDNH",
  "key7": "5J8okTqT2ALbPDeEbGofLW1EY8o5XP6Ejn2gQGiHKopXcs6pj6nM1yZC39UiU3BdsozHRN83QUsxobbv3gRLZPqP",
  "key8": "54GoXPWYB4Uods9DXBS3Tbk48z68nQgJP6y6TtKfzFhmsJQEwg3E1DHNpjnqKWzHjTeC4RoykqsmhfAvQYWtYkoB",
  "key9": "2E3D7jLRARSFRpjV1o8RTkAQ1nMNdi7716WNviqZSMDunqetaSR5FA6gjxZHRUu3fcVY6FTGwM7M5xvxUGj6wwap",
  "key10": "51wxpjumEPA4pgKmfWYac8KTQkUaYNd4goznPLW13Fdvo3tiQcDd2b9JcAbfyatLw1Fam2CffDtWjNzW1DtuXN5V",
  "key11": "5hTNWResRPqX3FY6tdvfhMUrFcJunQr6RiKCntqwYUdXLubw8xgEE1otRU5Ujj133na7a7zduzS8C1FWqCVvv19p",
  "key12": "65Yjpep1i6cfARAVKnGRxKs29DArYk1P28srLJKb37mKwesniXQDA9hwsZxdgh9b5sWmGRbbXCBGYNWn8UFPr87H",
  "key13": "KovDxsBmkHsoQRM5YSAJ1q4xJjh6ze8BrgYJEwRL2UgeJTJSs8j1FrYncWRexcyj7GRKw5muYZUd8hDjxmaiGSz",
  "key14": "48nQYnq4g4hxBpdxH1wuwhbqkjN4k6ehAtFAPzdtT82dM1xz5do2xGRSAoQy5xyv9kz5QPVhnrEM1etNG4f3DKZ8",
  "key15": "3A2Wthx2G4fdJUda1TaaBVPfo32jgApcqUJtKJerxmApp5qnjKnxTLRD1zXb2eCVtKM4Wpuf9pLKx9Jg1f6XV39n",
  "key16": "3Te8TLv4RSv6raQDFFqKuD878gciQtgyJxnaH2A7fne45d1sca6SeFAsU3QmxSBqw8rCpTnaS2tMAo6KaiTp2t4E",
  "key17": "2mfMw1kseV4BB2Rhs2F5Z8sYPJFTEGmfNrw9YTEtvnqf86SRwU5ZKxPr5V1Wubm4qQyW3Y7YKWoGh9izEJhaP2vX",
  "key18": "4KhdKgAYtieSTSyGWj17WNQ4uUGHHm1ksWegzCwz3EJq7bdH29YVKXd9f6e6H1LBP96KvRyN7koYnRfVjhnCcRsZ",
  "key19": "65KwrA3zdCZJe6rGSufNANFmVCVxF5VAQB591FYaN9EwEZ4fZ2dtv2uTN6KQkhypviB7YFTovDmojYgtHzMF7j4e",
  "key20": "5pMir6KaQkzCXgTq7eLgbx98h3hs88AcmtDAk92eEL7BPtknHQb45XURU7GrAgaus5ozic6tKGoM1ntbUinGiNuq",
  "key21": "ty6Wj1imDELzNFeVUb6ggPxnhGn2n61rdQZAa3USL96To7gLSy7LiVqHxirdnM2X9CcBGz2hcgHD5LuKFo4bp6A",
  "key22": "rZvKV9VX6jHfpuSupG6RHvy45FgW3Ns1ChEb4LMPgst9ZUPY9eGTUsTuz3kVe7hzVTwvj3dGxFyU7DKjPjMpe5c",
  "key23": "5N8k6cJc2fJdCK2KCNH9EoQux3UFeuSHT9A69LbZnuKE6BqfFrXcr3HNX1MQ3GcyP4afAasyhHCUN9ymLBaQeedh",
  "key24": "5tj4cTVrpqBL7LJqZH6YJDqBXP4b4dztBMCkMuc8hSpVSDDy4eFRvvWTFQD2teUvaDV9SYxdd9iKn9thwpkR4iu1",
  "key25": "4ZURuPiRKvvSpgXswYNvhwRj7sXgD7xV4sksp7cqgas14ABgxCLBcd9gq4hnuUS2ZBAFvY2kMT9YhTz6aLcaaVpa",
  "key26": "5bSsFpEEhXdY71bmD8tZ586paqG7Biq1d9bukvQZPsRRnYUZA6CKGf3x4FPY511Kv1eUwmfVg9PPM59UjZs43XVp",
  "key27": "4zW5h6EMbVWxauozt2yTkp3RyuTmJW62NfrppkdyXoG6bcDuq69drKWt4VEcT3fyUJgskQQMjoyVotzcx2EkQcHU",
  "key28": "56wRvnvLpt1Z2D1eH5piSLgvGK3miNH96bZwGWzj1qjWybtqcGmcqBF8hcErhkGxeTbc3LeLFSikPCmJXgGHPuP7",
  "key29": "5cHCxvD6d99eSyhRmoUdt4xVvobcCAuMiuRKy2A6uYgT7J146t1zvU4HzGujF4PMGbqNG2gYEGnrYEV5rKdjAbRo"
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
