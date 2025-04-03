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
    "3AWMMXCvJYkEctyCB7bMvV4iHoaU5d6goVAR9uAyaLSMXEyH6ThKMkeyKReHWAsfYdNbF786JyWPenQrqeT4ZpD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgNRZgJGVMcxk4LYM241rPWYCJZxK1cdWFSnajVdGerUCq5d6n5utfgfUimhjAQuZzgEGW33haFdZxw7BuEGeVM",
  "key1": "38Zj64kumjNEM4VkER1MYkhf5r5GHgMRWbpYUvAZWG9XJh59WUSaDjQyzvEJTpKxNk91zPMy1RCHfchpsaMBfqeP",
  "key2": "2Fjw3RJnx3KzrUoUawBszSfx6ToT7P8NV4SxNy2YLUC8Yss9Nzc9MjTf2FGjhGm7DrDm1nPTKhVjhnEQDTpbciQV",
  "key3": "22TJFtFRZCC2QiM2tFgeDoNFDGzLDEWAyJbhkWhrCWEhuz457f1UbVJpXjm9jKveJYi5ZCyUKB5KCkyZUaMDXLm1",
  "key4": "3CskmAa7rYWfz4ZFMrMHMGGQzdRd3Cpw266WkgvVhKcm2Lr1ueE9waQruoz6fq27DRutiKg36kAzgzxJtEEFu5KA",
  "key5": "5UUPK3GtokHrMNxZh3xM9vPYWJZNy3Abm5eVUchd4F1DqDfhffwFtDiCdkBQcMtJv6KPdRM3TbuAQ1FM4Mo4r5UX",
  "key6": "2NDmhiFMGb6kg287dBhqmerLXzW39oqJhhcz9xJcLrQd1XuuTxedy2K6cLb1oaqVVSYdVo1djshsn3151R4MaxRp",
  "key7": "MboxhCqRtX672Kz6B2Zatzyy25RpGKwVB6FD76vK3zn1kmbf8Y285qBVtZcwhBnPsYNqAYhWyEWadXxeok2Z9Ed",
  "key8": "4pdA7UZ6CTiDG5zpKXrMGpF3TPryEiwcVaZGHX8T3T5tz47Qx3Jpig4fqc5QktcbRktCG9nGNjK7msaBk6Dde27y",
  "key9": "4f6BjjNGjss4WZC7FmgcCuX5NRqMn6EdFXcMod5RkcY6ZcZ614PUBjRUQ6GkqLuak65XDRMLNmwi7FZYUdBQTMsX",
  "key10": "5eS8vVfwFy8ss9cgjMwSeXBKUYwmJ8EfhmFJSLFfn96UVsi2pMrW5L9JU9JC9E9pY35jXXkCJsKxP7bK5jFQqobP",
  "key11": "378LfR49rgj3Tj44kYu1CsiSuWgqfL2bduMNAHqoRHiUyD8tTUcQf8KZpELwBHGg9CiWZRoFqgZc2M2JktMPQDZa",
  "key12": "57uoM7ErsXf3PfzuuaDGx5dSFZNjKZ648kRb66jhK5gunLFseJJwCsuBmeETNNUakiSC1JL4KKCUjjXbCekeoHmZ",
  "key13": "2d71gGGDwSm4mzrg5nkLuioppGQjm1AHGWTLcWFUZGBHL4k5Ch63gMxvcufafJ75bmm89qvoRrq5menagyk3ABYE",
  "key14": "2Hf97Q7SBJAmVAsKNL3Um15kcJvQft1MLMRBcg6cDsMhdJzxSPi5yWNiMGqtMaTEzwtC4iXw1e1xkMxwN6QiZFtr",
  "key15": "4RZuFyoF7nWN3pMduvnVdzEBC2KdEYwEsvbK8H9ZFpqMvc49DxkRsHiiYkbBF1sujLRFWJ7AwiiaCzyaGCBNQKya",
  "key16": "2nMSJzDApBYhxXkT1cc5FahUW5dHfhKTyTy42chXedtEUwfr73hunejsrM3HUJNPTjqdPBvs6pnSpvtCYNXwEk7R",
  "key17": "jgGxxaDuuf6EVgUJM9KuxH6jBCX7f2LvikVtkD9ayhr5Pz4MPDB9J1PxVHwg27DAoWNg9obH6G34ufVMKVZig3P",
  "key18": "2omkgq7ZoYM8h1f1Zg4NgYAAFYyywTXTQ8WxKZFukYTcrD8AcpyWoBuPmEsWLEsKjWQbaJAejZrNdFRjXjW6WRyy",
  "key19": "bhMMT5SfdvPFprutU6eCyeTH24mpTGEwgmNjPrzJmF4jLJUUJQY2R1TsreuytvBtZJ3h2DGevdPHJf7EJKnt4uG",
  "key20": "zuFkqQo8cZKsBW4dJXjdNG7WHq3gssDtbkUvAfAWihRZq4As2jjmeLMDb1j1zKVpZw2zAUd7GinYEqQ6kmk6xBk",
  "key21": "4GqQQ6c6ohgY9BH8tpFT81RYNTPWaA1rnE1xxLWBK1k5dmDmgG48YA6AxVzDum9cHg68omTH9WqHSQWiaeEE7qD8",
  "key22": "Z5NgfDyzxUEyoyBeacuUbF7LCUHfYXbDsMNt6TiMHwxJMtJvX493RSvqk8L16ebi7dnzZftocAoV8eoTKnvaXwV",
  "key23": "3rHnrhq183jUTX3ePPWYekfuBCxjd8R6xHhLqy73fiJ9HvLTbUUGRYq27WX29hFEJ3j7Y56JPsYt9S2XgjbHyGSt",
  "key24": "35rtJ9287AgPH83hFwZuXshnbEXKEPzpcvrNx4qJA4dmJysTUgZYbsCZZBBVarCeGNYM87Fcnyo4QBkKXKHarrHS",
  "key25": "5RzsWNC3DFR3aWDngGDrjF8GRyzMuFsfFLhc89RYsGXp968yKCDse3pbeNSQgJ6swsXKGcVvpo7B7Wsz3U2bq34M",
  "key26": "3YVXud3uE7dpPwY51eXhoHVRoezWvpkrc5nBfvW7EcEC7o2cfxNbgM8d3wsbanogYuY4EBsRVfXVTiizPGqdwg36",
  "key27": "5JwixJS725q9R4FkP21H7UaMZSkV27oRsLUw9Ep3Gu3KWQQhTBVaQz5Hbe42SSpRkDs4KxYSe2r4KQ3wxsQCrCjX",
  "key28": "3YsejhMbtyRjvyvaaKF6VaJfJvPtj7hEtT6cYawaDbYcrCrC4eDme5BqSr5LB54PNQmAow8ec5Haj7HdLFRhgLJT",
  "key29": "mfUwaLYKUSM2AGdgt8AH63b6rShCdgiyGvV6wMS8TbQ3twernno7CtogEShjnjqe7eLuoAX5Q9dGFA94VVu5QtY",
  "key30": "3SBLA4mqDBe4FymEn8KztfyzgTDiz3ryREYLJJ5mssRPkpanHA9JMSHy5zfgqAyhDZdRCHEgK37LwsSKhJAWTq49",
  "key31": "4K95MJqELmmYcPGP2u6vQWSVrkSHuqq7p9sxYK4UV8Nozk3L2DS1yU54wmqEMXfFt2X7tFHe9HBJNbZbQ4xfgpuD",
  "key32": "2KiwnzENHwxgLc1kjLouwrgoMsbfp8SHuxWFDzXHmoRUPsAA3BgZ9ST5rFm7u6BcF6oCcpa6iZqYxgpWRG3ixLdj",
  "key33": "5w9ZXFKA2Bv4ty9vkm8eDwWc28hNLqZufzuCdQaP92QjPcX6ryqDhGCEAJwuwH7Me17YoengnqH6dyoXdds3xB5F",
  "key34": "2xKw1bdHMB2ax4cozp1UAokZ9APj7ourEaXQaoiWjzBb4SYMAo4sc9jRUfE1TVTSZ2hTnuDtj1gW7MikFQ3wbCXp"
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
