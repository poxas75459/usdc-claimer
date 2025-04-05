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
    "zjEm5zNu2Jgbz86Lb8gPFdRg8GGsadB13QBkiqy4DKefqD5AMXkVAV4Mz3UMb7UvpsG8E7CR6uosaV7R9HWQDsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fb7jeDVbusVVoJEp35E8wCwja9uyKS5kdaCa5voYiLiwadhnLFNJXFoPXqqBPsHi4k45Y9VRfqfzg7WCzq561cU",
  "key1": "33qSm1urcE8kzQUdnXKLQzHQ8C4TaLbQ1GgQgKbfLzBx8rfVWXzxu2R6x3qsPPKAdFjZDYN64W5X49dvhCpLxjsp",
  "key2": "2LZWtGFLyQqYAZmniey5FiqRketaLjhm6ATnTd3xiEZJzGp96wubarLsorxSzieGYgk7XnhfuoEyyyqeCctEtmV7",
  "key3": "5B4fFbGFUrF8bDz3vRx6SVNUvYrdqkfkGWoUftaaKsmjkYkPvtwaeNa6tWaqMSFySsvwdijP8A4sy3ChfGhH7MVn",
  "key4": "n4JWZFBwHkwyCXnDjd1QAVrVBkrdbphvdrvZqdD7hUdqPGkd7EEk65sTYfGKJF7uhFohvrRLTnDVJzcD1N71Cif",
  "key5": "3aXjdmhL8pM7woyevJJniM2CRmZHArFL67SMsk9syYSWMJmg2xG9UEQdnCSbUEDvedspYA3qjJLHQ1cYVD1Nd27Q",
  "key6": "3NNCjhwTrAsjimaM3PupU2n1LHeuPB8hNhqL9vQHjdEeHJrVp9CysrsYekpstr3rnRVCvn3VNo2zN5Jut86SQgyt",
  "key7": "5Cgtbnjr7YcQst5Av4oC1HU7ZUzU7ogPA2Z8HPTVdTnjutanUUsMNGpApWC5MWbfwinHY69KvtJ6G4dm9azjX7Px",
  "key8": "3sFT693QZfe6a8kDLNDhzr4gW1xy7mT2wYqRehm8Eh8btn1zKGvBraxeZ6xvGATCxKbz69gL16prcH8etmQFcimn",
  "key9": "v66nTC8YwQvTYKVMBobY98pC9F6K44PhcSGdoDsLeAUPmpdkFwZXjVxpr5GNrL7RhARvg6qSHbpw4kdq2aThgRU",
  "key10": "3WhKPbtEEAvfAneQjc77XiHbfFQJvmsqt7H5e6nx1AEYLFqNBjgnXsaPh7MCF3Tmw1kEYPpzzQjhjunxnwhmzSS6",
  "key11": "4XUaf4RUaYf5dqX66tfD8voLGnEkr7sA2kKqiNucADG2aWc6cnnqBBcCyoosUy8EDZCQ57cZX7WmgmMiZfEwdkFd",
  "key12": "46KdqfccFz7duYrsUs5CFkYhZBGG99zWt4WyFD15dvqQEU99yg4bWDZE7bwGixfVrXpesw6MX9uvHsZSDjpvd7UC",
  "key13": "4AZscwDXCZ1vNmCcxTpJUsuy2ZNQ1NYo2NDEqmS6L92jE3E4FB7ER8wiyNyeEti1bKSnbDr6c8GGLXwYdWJWcf5G",
  "key14": "kStvCNdM6UCfiegfNwrTp8yVPDQwPmKds36MesnfXMDa2WexsVQ7cSJqzhEd94c4Q3oHVxGRZo6tMJt9xsnzvb7",
  "key15": "M7DYbbtwncQY8cUksjZXueJCNdjYrCs9desJ7i9k3D85VBFwmCuWTZ3aKcuXk9EmNYNhe26S19j8ah3emxMHqAA",
  "key16": "SLuCvmXhR5wNmED3JN2XFyifSWZuibuknkHwQQmYUYMiSPK5v3kN1hwg7HXddtd5Ls4CzRxgDWtVA7xzzcoy7Dp",
  "key17": "5jj1DiCjhdgPxnyWgucTEkDpL9f57g5y5JXXAML65CVSQ1WRCR7guzQyCTQPxXPk13g82WzLkar4z9yjUY1Yo8SZ",
  "key18": "5hkpZZkEnfKqJvhang6drVZahjbuPNnZJH3ezgHZzLVVHa3qhYGtibJ1TKWsMZmsi77vdRyDijdAbuuz7RTTsGvh",
  "key19": "27mC9hXGAniYpajvo7RDLXeGwND9caZtFWBvu7BRUC2tuwm6NQSpx3PSDFgCiPPgMjwyHJ59LWG9R5avHhnQXNSy",
  "key20": "2erzmvNUYcaEEshzGfmTbMkrngatRR63vuLAYQxgdthCWk5C72ekvYZWJvocL51YRDzTwxbPLsufmtKgqCeBpe3y",
  "key21": "2x9idLxR8tyHkVUsE28LcfXT1fjLezniAuZ2t1KPBRLn5URtR5qcG5ytazXXbZ7yjcPQcxwGG3DxUdeBec1Hr2AU",
  "key22": "5MiDWjPTgX8KocRtHvHttAFzi4i7Djrsyopd241YcvQp8jBR8Qe1q2iKLuzbwpwEBrFMcFe6QqLiFstjPr3gx1Jp",
  "key23": "5ycXP1cPXNKqikfPhVdn9ownvdJAax2aJ3NA6QD9w6wRXyurZgHsCZAbG9hNALkKJeJYWBDUbZR3UQDX4UNMpuQR",
  "key24": "3GxxUo3SrJtqn4hhSs7oLiyu1fx3XES7kunJwydxJdikJhLgPJk72EtJNEaR1NUGvhSMUbfzhiUzpoN29YBgQdZV",
  "key25": "4trXsyiYuy8oSBaz8KUhuFwd39ms78fz8ozwvQsKFJVNYK53wTphgQXPXAdqL2vvUdveXV6C7oxKZt8L3y9JxDgc",
  "key26": "5znktMsTVQJhmvZqtVidDTebD6sjptcsfpqH2bejiXVemYd7J4DqTZ9eWhdmU1CXFHQ8q23HFBWd5eCdGxCn2YmM",
  "key27": "uwc9AjW2Qqtqajk8ZrCtNmwoygWfgRmEVgvR5PBHqwYiNZBosP5uo9Ve839CVr16gbEaHjQrBty8GwwWG6FnMYM",
  "key28": "4kQhjaewQbdEsLgXuHLvX3dDDayAWWqQ5jXiopwnkx7h8ssDUK5UKoMFjr9s1f16TEYrbLKZRb54UXGUJ7DT2972",
  "key29": "2CKfJxjYZTJAKN4GdCSdwUSyv5CPBChJJ3MzeVvUZ4s5yTRmtXLSjAyKFT7NaLbkKm39AV13XaxaMq5k11pyhmZS",
  "key30": "3X1gFvAqe7E9xromYLEQVmSayHmUoBwnMDqT6ReVwJ9ui93KhhgsKns1x47Vix3NKyi2dqSPrYs3MzLxy4thDovM",
  "key31": "2zU2kyCjC7KHpHVji76d2GVg5sEmkv9373kqfRpMmNzCLn6EPMxUJaTn36TWemNjN3eYp7PqMRtXRnBRv4DvDpTi",
  "key32": "3sYPrX7ANDuMRkv5ExvxCojjMB7XHA2PVBCSwNUsqsnPsstP4qNeDo1Ntcx38MdgsDrSSeMCzZKfX55Vpztq89T7",
  "key33": "5iT5Bj1dCcwN8xt9sCZ6nnMe55aQUG5Wu8M51o3kUHz7UhEgiKjG8DZFtYK86ZbBzzriQUDLxphAh56cXSQvBxbV",
  "key34": "4vEw6CY16nkzdRUMS2ne2bd1DTD7c5WqnNrb5hSW5XNPjPmBF6kccSzXFQcQNAaNMPH5MiQVbYSjfTN1SvzTNEqL",
  "key35": "4z5wKWjjRXhonpzrv89fuLoepCcyc6D8rcLXCxQ3qPRHvVXTepPemZBcfcTXqNXDZmS8UfCWBihmZZAffH1KdMco",
  "key36": "3fZWFFvkU4BTJWEFJQLDMpqJ2H4rsu6xQo732Tfg6f4DjtujpbTFTMyxgGFkU2g8mMDSmMXJRwEHGhsaEUztSh78"
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
