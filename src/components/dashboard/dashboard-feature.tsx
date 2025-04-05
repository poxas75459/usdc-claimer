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
    "3QUUExzpjwcLq1RCEF2rGL42cC6xNH4jJD3xFR3VcNEzWBvmSETn26ypFQ9sVNKhCvKnvArzryFMqjy5Mve8wzNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTDmJau8nzw3nfw8kXrD3nTJzNd9N1UqSwc1M51KFP7Nr2odvtfisozmQvet8y3PVTbXwZBJP53b7AKgb1Eeiox",
  "key1": "36e3jbnSdRDqeXa9aVvmgw8cVA3fLPrQagrrCyfoLjQcA4bnD3fiXKHb6vceiumyJEbuhQfVsRHyGkCiRqcZRet2",
  "key2": "43HVS1SYg7nHRvHjitLLQQG26TUFEaVqxbJbS9Y8wJJMwcCMg4gp3YAiNgj2VmzMdFqSpycsmiPF9AF8n6fuyH1A",
  "key3": "4uJySJYEgrBDpDum11KihY32kdpP6n3vS5WKV5swwEmuki3m2PJgwK6kM99frph7zNf33WdFuDK2TZ8eCJwtUyrz",
  "key4": "61vQV4K6w6BZtviKyWHzNDSMbT372sp32Qt6WdkB9s4WYbvVz1pxPjtn1URdRZ8XZ72WhcK51zhVqYk8LgBZ4EGC",
  "key5": "4rEveZ4T8s3yQLa7WuGBe7Z2nFQEnhSS4KvRSGJcFa86JZLLKv7YSZ8WuyM4Ax8i4LzSavSmQVe3iEVU64ZmzgTD",
  "key6": "2PsZUP7YtLRMnysa85Xr9Q63AcZ4g4DHVBnN6nVB4NkpKmstzUJVb8uAZcYhD6Ej8h4cs7uR3sKZnxiQfDXvhHsa",
  "key7": "PRkwUU9SvpLUD7VAGgvZjjr9Tevxuqqh6jkjcMo9qCeoEzTm5KE8X4EtLo1DeSNTqhEKQQ5dwQeSjwioH7QY4Ti",
  "key8": "3jqDtCNTSSw455HgjPngqqrB1ZNJeSRscMEhVmveLWGNS539uhU1frHhy3Sv2QCN4NP27UqeXNVcnb4q6r12h9GF",
  "key9": "3h5Q6CcEpi7vpUHiUxt79kPFLSFFeAKYdRceS8Drxo1h8M99Vh5HmCHLGLnKEvvZobHQRuH5oBFuBeGEQe1ZRmSf",
  "key10": "3D5xubydSuu18v9h1g9WPbaL17FuP9tN7hJP4u9mCs157JasxRvtPeKyovtYWM2bH259NYmeR2da2xn8WjDNTjh",
  "key11": "5Jw6XGcxxpnuX5jHAbbRzG9MvNkNhAyqsSGiwPonKLxDiZN9MpWRx51z2Yzqa5MnKWZ9Z6kKuAYNwAPHsYota1zS",
  "key12": "5Sc2fPuMaGnE64NFrUbSct3WLu7gUhccF5rwdwUBKX1CD7yPu7qKmTnKS6KCU2EGCB17veUBNWBHnaFJ1hudg4Jk",
  "key13": "5moWUeSNCP6uQKWtH4LyKHLJFDnQPy9cK8ucW5vT17afgfdpz3hz18tNbVqr2L1r2brZm7FNKLEKi1fai1JVDnDz",
  "key14": "59PqHDgwPRAHfvpsugJexz6pq6vPjbQNRnsoR5ghBfpRQnTnwQnuQbTqPfwKkkAnSPJDic1xbU75VHQpsrwyo7RQ",
  "key15": "bnhErywt4iqp8UqbvnjW1ZGmtBCc6msWdb8AEVvJQTJHzXcA9VSVvYUWjKNLX9i5LXGq1rND4rfhaNuTFEr3n4o",
  "key16": "2Bjdbvkujw76ScHWWfm2s2xvcdqfYzT1pU2nMqEuc1iPJ9T7YSiXsjPQRfDdKZVDvay2Gnhzp7UZtofnAcgDhXkB",
  "key17": "2FwumNM59RxDd1npf2ip5iWSbxG3TGxs3uebVvt2kEszfXgmtCmcYaPjXkaHFSZf1QDzbLyYVUqhbKbj4xGGtUca",
  "key18": "8JutncPjbdvFTmGsaGoGjYCqgdfYVCWyeTw66K1GVYNBLo3YpHSJpTm4QAxQPKyqTgfpKsmjZSeZKSWKiuPVZR6",
  "key19": "5veGzFs7xYiKzBzsD3BC8HR7WVSCpDcPkQfNubknWzZMApU46JaetrCkNmZNd6baJux7YTiBhmP5Q4m2R6V8TJUx",
  "key20": "2V2jKZmA61ZQ9zfsAhkykpZibEtVvEnb6Z8Wx9UZ3dShgDnykTwYKv97vVP4wXCYSKK2tVrknizrUM9KCALeNYCb",
  "key21": "dE3etbJAeit8CoWjE8Dgs9DaMm9eVchzeFpmr6GBkXq67HyS8q3fnMsZYSjCQh2AhuLdrN6VsYZ1GmhJpjVPqEQ",
  "key22": "333dfDfxAi22GXr9ea63eiug8nCtKdieRmyjNXhbbrjYfZ5JVLDLMsimahCSeMuKvUHq5s6HL3QugMW7dUxrFDk4",
  "key23": "2rxq3X8qduVoKohXGZhTEFcDruqpmNzSXdxgB73Y4k37qQopN3z5hcDjxVBv63MkgPXFXN41mgkGSFLh5bLYtyqy",
  "key24": "m4B8Hfem7mRWKYT9vv7U7npNHRoYeZ9JwdhujHBptzgyL9FxJPbaCL7G8udMhMvcXnLL5aAjdH98BepFzNqTVhe",
  "key25": "yGUZjCe8mrAAEvUtqRndFrG7vWQbD1QJ3jbNoWx5BoggZhbK8qVYGHqZkS7VGh6S6bi8X5K1c579C42iKPTk6xi",
  "key26": "3xYkxRcQkNMiF8MBgbJ33oYSyFr5CBD3A3MVQKQJJ3kVyFy3n7nbfqaT3N2R3UjzTWoL2MrdjnaMYefKrnNF9Gbg",
  "key27": "5s3o1hDUmGNg2Dvd1BRJH838yp8a4ViWv8df62V8LnXgStGSrbyoMoEMtb1kt9CcWF4xYuvBWgDWSc3xFBZaPYd9",
  "key28": "5xwkZF5Sed7bvaYUVrXSyd9SePz2DaRSjdNEC9EmRFzDijSe9UDVfDMzr62FMBG4ZSDJDKvjfbnurHnhNf25jCTt",
  "key29": "4TzExh5AKmXtf7rb7yMwpMaomGgfjiE8yy8xA4PdyYMa17CKTBLuK3W7knypuszTBoCmoMxvSxCaJZadsr2ZpSfD",
  "key30": "3mQLBMYswcxTZxLfacCQLft7Rc55KHtNq5F8kph3YsbDCZPPLViwwFsrLZnQedszSfN6cZgMf526kv4hqhQapZkd",
  "key31": "4Wj5XtccbUfViYmR51bjnpact5wtpUEDq5zJM9MaRjpnSYbc6fhgPdvcCykvpUr1JZHkk1tV7xzayRbdVCBB29oQ"
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
