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
    "2WT4b7hY1dZMkCwdH6qNzgqVBfQ5W5m5omhzT49ftGMNRG3BeFAEDCn4n2aEzBtGjVCZd4pkaWpR16TTjcQ2enT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3BLArFVzw6gaKkWQobapiBryMMZg9EUckxFBQ5cg3wAppdz68tb2cu8CcehWNZ28BN2Pr1BdE2BmAHBxKnuMVD",
  "key1": "2Q2BzR1DxZF2ZV3cUTuou6co8mCNpSiLgCsrBrViUunzEZq9pGjUn9FgTP7wZwCnKdkRu5sLyWDhtLeNLojmum4M",
  "key2": "3Gq7P29p6bKE3GpGRssCBu8QnnfSYrhkYg5Epavb1rvN1DW9sUwFqq2HbnU5TsY1qBphTHBGL7GcvZPbcD3XvfuJ",
  "key3": "3HQq93HY1pW5F5aYbs7JteEmGBWX2GBZcLUnT3JER2icjciyWDbEJHg4zDjMe7kTRXpaQEyafKP7LZ7rEUxabvry",
  "key4": "99LuEchRbDNVHE1pzHhneRFx8Vq6ccasTBth4Hpfn4k2hbmT2zaZ9AGqFkG5sLqqDpajZkJf4epn4W6sVnwXFnK",
  "key5": "3MqXbwxGSUfwuHy17JGaNySEjeGX15jK7yWqE3p34qFSJpzJ7Am9zXEWdbnSdz5WD9J5eg3ThZDx8onhmubnxbHu",
  "key6": "5sPRbcSkuogiX6Et7CTuHonCaSWeTF6NpvpoAy4Yq3LendQ48M9CGxHoHFuvRnEt4ykrBVMpXrjdJHCqqiqcSUq7",
  "key7": "4dHGKpwWfBWhVZgCn7th3kzgFj9aJtiskteRgKzcpuDJqz9VjX2JanZys2dAGeHhvoPCUNhXoEAuzR4Ef11XVJJF",
  "key8": "3ah18ZQ3RhwZLFfimJxE244hSuKfxH7aNhA8FsmMGyNmNH8SkRwvSXLr3EVAFd9gPzo5a27NeYY5yvZ8ca42UAxe",
  "key9": "5eHhhL5wPvZ7qkmV5i8UQWwxSrsfXoJsUt9NdxarErMVhxFJ54WEjXvvuNyGG1LxAvhLZKkofcLCt5NmMMQsP8nc",
  "key10": "3KPkDc6zUhP35Fo8KqorFCGX9jExTyhry9He8ZCA2gJC8DAsG35GiNYsPuQ8K6nM2AuVbX3xjPARKg5iEG9ua9Bk",
  "key11": "2bbPXReUm1wjtadhYULcrrAQ1ay9m5e22RWrkAiPsoGUANPR47YsskUcbUJV1CjD9FfVnAVYxq79Xq4s8AgpkpqN",
  "key12": "jnAVeoAkAbqtn3i37r64xYtsjk5hth71eCTytWUb4SpfmwJptmb9g3VSG74ESB8UMxENX9FAX8Uk5wUJoDyZWtA",
  "key13": "4hQhq22oUXuwwmRcU9JL7wDqoyAVy6KR6CPkjF8vruv1Dj7YjrSbe1DFix5N1sdqtALyhtdUpfFGnVSnWmmrZLMe",
  "key14": "3jSoH4i8NxDBz3WjxvHCLZBintZ4marExKDymDpjZGRg1CtEM7rSwX9tnUoft866TUDzmk6v7mUC9npdr5nXCfcT",
  "key15": "Q8ZHQUc2FtzkWnA2rHoRHDwtEnS1f4JmB7aihmmSuLyVQtBMgQ6jD8f18CS76Xcivjosfr1JvSEEh4cC7CkX6Q3",
  "key16": "b83WKpZ7CYEbS4Ar3KGpqwuGFwew9ZEd1r7ttzYSneFwF4TNa3arU9DgcTJFNG8kDWFzsaxCcUgeuvHnHqscEok",
  "key17": "4vrtcjNtfcfFRXyjNXS9dpJQXSg2WjAxUNNhepGtiMByQ3WqXjngWaGuLm2Jg6A67oLxAZFxT9r59neTyoWawopQ",
  "key18": "5TiPg7kmN1qvYftYEK2nREBeGpa6NkKauj1UwBCdQdiDCZ5hW73JZCSABro6iSzePajzCXtFmexYeZ2MNQkbwYMo",
  "key19": "5VSFkje6zUhZ4RcgWE34dAePBFxLUXERxCegFLwyP1GWUpj28Wr9g8u3797dsLd3EDj8vQqLgTuFGrQw1KXHDN42",
  "key20": "5ZaPkLZLCVEziNkRnjFyCbiSFFnoS1AayukrDY23FK1vNXVAEbHtVcmpuBo57WJ9ntax8cWfQYV4taJ7GZQLC6BZ",
  "key21": "35wJ9xLzrcmwj4N6Vov6z4cxyHmvnz8n6hx62nrVFH2rahu9yZeAqn8BFMTiaBPJwdnprLwMMJxHx4WrpreA5T62",
  "key22": "3cArJhF55ZPPrZSNHiLN4m5Ha7fGgpNjxvPL9BATuXmP6rCw5rZ1k2NNRX7DwuydkDdVimDp5Nzzhpwi2dbvrUJR",
  "key23": "57ZmgaWTP4JrnargXNjWiycSE1LUjTzUSs9xA9x5vfwtQAKqf3mqFTJjN4veBN3m8UtDVdGhJc5QZQyk3xAdNoyh",
  "key24": "3BteWy8DupQpENmsNBJ5m5wyoTHEZQXM5wzHCYCvhUvY7L1WG9k149eM66Tr5j3TDjoMQJ9a5B7P88MTDJysv2i1",
  "key25": "5pTcjJNzT8xoHQQKaaVygT3THNqtY4JLnmdWd2nGYCw13cCVr5HUfuYUC4LZDBeR6ixdswNFM6wfnYU9eWbXE4VN"
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
