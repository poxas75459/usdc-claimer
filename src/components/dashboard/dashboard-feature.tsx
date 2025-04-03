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
    "4dgTJZ2QfchUC2ZuxTuZfBSybnU7yrcYhLc3NjjJi8B7qcJu9ae8BeEkpWyo3YKYXS2G7QXzha2TtZ7q4iLMnFRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nMpRPTRELwU3dBcW93Ddo4HYuJ9SXjjryorb7GChwvUNJvaW7e8RwNchXxqVLPQiPrgtcqZmNQmTnJDqxvh7MXh",
  "key1": "ciheYaEmvyTohhmPzRYFuZTDLGQpbzdEn99iag1ar3Ug872uhxJL1eDcTXTUDMPQbCAc1maTENjTRLGAPZZAaeE",
  "key2": "3ATATB1kPs5zyWKsjKhaEAMtmUFaUXA4XanuSihcugY5DyM43hYPTGVuPm1dECxQ3LpgymaXBjuF4B74JRBgpkGa",
  "key3": "3uefmMn27ixEyRYiE9QWbxg2N8DaDArPpcvUjJ2ejuJG5NnZtU9fof6Beqsjyboo3n7awunXtXDuMb1npBJe16nR",
  "key4": "4vnuaPLjAJvt8dh1ipKb5Hfo39ECTqsDP4vWtSop7WCMFdB3CQsZcnu7LgEMgtW9LRwBHapyJbpTHvjhDQxLpfKW",
  "key5": "4M2SVKsm8LFfwCZfwJqKVhXtv9wZLuf75mB6bEwyB5q4JyQ7ebaKF6eGFsUBv2zrykrNrkpdEaMoxgsF8ptr67mL",
  "key6": "669mV6GuwqksQ4QXJkmsWKc2UYpDw2gnudjrvyfMAEuwSxRsuDhCnW3e442tMUSXoF4XDhRJoBDVmGr1G8NemL1v",
  "key7": "5Xs2J4zWbrdxaAmDuUct1pr7AHW6uNjhVFuaYXqLhdSJEajicaWEfNcGzxaTwfzg8vbjHTUVUoyz7bok92cyLurN",
  "key8": "3kiFvS7ckLWHLb3LscCjgfAcv2jxak9yDJzU3kTddtXyuhEV21rbV9ozHmbgH7z14FGgejS4CNMyPMgPLPoPy2Dg",
  "key9": "2vVpQzf2hrkjKrR6VdQ5vQ45jPfPzWazETpRso5oEhkEYpMPVW36gNzZURQggbKqAWow2LFforsU7TTJR9tFP7w7",
  "key10": "3R9HJAvS11YyeBx6qrZrCDzHEsLpAcHm5pmzQ3FzMeT3AUPqa6vYCdaTbUG8rD1XHoZL52sqXnbGPezHFdpPSDuJ",
  "key11": "2rVrVkpo53hAHi8mdinRBppVDKPcSZsaNxirKxhoxMyPUcMLxtjzWNjq14THUQo7J8B21sHkhyhHLp8RNBX2hrWY",
  "key12": "EUCL2NfkiNgginzBukCBfB1heaDjJPA7RDfjnbwoR7JHNQKGtMJvTJFCsckRXAQU1bzsbqLvNcpAFyGGTFpDtQo",
  "key13": "4bk9A2kT6XzzNepJ1u2WQinsYbXZKBM9QenvamDR6hmZ9dKTKavUoAJ72HKK1UTqvXDDXSM1KJwzTRKCCh65noPR",
  "key14": "r1YeGuuT2922zLdNCdhnRbgaZet17eMBGDTHdYYggJ8AuCfcmc23vwFsWrfzFamz3vZjyLQZnA7V3YHvmWAbSaQ",
  "key15": "67CjqeoZ7LbbmrdbomWSDZqST8pbZSApLxwQeepLiuFCJxitXokk6HAfP7jQnjLrVUsmPvj5DjzgkxtRvrFcZgKK",
  "key16": "5zFGptspRJANCkMvKffXQ9X1pQyVRpM3s3CXKAwUxGdHn7LEEa8yBQ3LbyZRhaVj25pyrRLkxL41wbqieJKK4p2u",
  "key17": "2hLbEhvFsPUEQNHG7EuALwxQsrRDCj5BhvQz5qk8oV7SYRs79Kzdqi3FumnYUkYRfWjdrGsTuxKdoDFQGHjHhz5D",
  "key18": "5k9jHRprBsrdQhcxedVkBiVEvagcPN2fDecn37mA1jm3M83k2RfgrepVpY3qirBEznGg7L3N9pvBLqU5ef8Ficg3",
  "key19": "Rthmy48z4jFBDFAfECZr8SzgmCzFKhWfRVsB9A9XiHDa5F5fryrb1Pri5grZ6F4cufScnkF9TKgomKbkn29WUiD",
  "key20": "4TBNyoxWRSMCJVE84FeVVM7pEV9X8KPQyRfE9kszfXLiknDJHBwk4qbBdVsP4fPiQ5uMywL9ZV6sGynbKjFJMgJX",
  "key21": "ZFWpRJ9zyVX2XHmLBjM1c4ffpWfaJfFD4jKNGkBGPNo3KEXMGv5LBtJNsq7iWXEMuwWskbw2et6kZpFKrhmQVdg",
  "key22": "53qheLR4g1bwc6G9XSmpDwrdaMpL38uycDNqB19KbR64u7BqqpyWzkw8RjJWF7zzmsFJTyLYfqY3bxoPS9NrEwAM",
  "key23": "2eTQBbekr66eTfNPA7uvvbQm8hvPXWHp7h8wqS5wztvKhJRwsRQUH4ntxLdf4x3E57DzM1wEeaq6D7CyB79p5oVV",
  "key24": "5FWa76TJZMMq1FkDbCCTcyGGW28pUHjxM9Rp1RDjGyX7vRoSyUxaVV7RRNuJVQPt7vmL64a26EQ9YdwEacKYCnNf",
  "key25": "2rNGBaHT4FNQhULUsRjwq1v7qcC9mksNXdSidLbTCB72Q7SKRhcFi65YFGiCBH98tH3rXBv5fsnMRJrDXHKqgpkg",
  "key26": "2WFu4gr4gMS9YNdhC6B7UpGbbnGagxZoiJPhyh8TrVMzAy5veLQ8JP8ocByAiTWVSXpjgqVNU3D99LhN8RT3VpEP"
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
