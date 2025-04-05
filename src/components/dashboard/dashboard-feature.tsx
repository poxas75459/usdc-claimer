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
    "BVFrrYKSgieYj9vL1A6oPGR63Lur4sanSKDCw632fWy31tk6XvArPeLriQ26J6rwuZJNuXuC1RT7Vvd3x2YJQLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYuZuUv7XdYiaUN2f2LtPoUxomAC4nQctudvLHQt9GnZQoCrazQiUfGGwpii7uzaxNU3ZfoZRJHKisNfsE4ZUm4",
  "key1": "3Tipk9HFEU6ZeYgF4mpxsvrW5hdKsDbdSPzZdZLUq73quxLvVMJHzfWvgkYFvZtnPMp7JZPsyMWGEdpBU52Jgjs8",
  "key2": "guPu8ErCpPqyE6GoXZrbsoewpwitH6ugyztaY9iXqcYmxNWBQsZtnpvcTcc5GHS9PfRrqLhB2iQk1xaYugg1HAv",
  "key3": "4a9PmEcoqxcGf7tXvn6i8UJvGuBUsY4Q8nb1VLtZLtCbEAuw7oD4EEm9KvMJL5Lm3qUwp3YasAQXzFfjxFn7QbBd",
  "key4": "D3HVVHmAGK3NMdcAZXj3EU5rx1WU731zQPcnvfVmbdEeHZFQeyCFs9YreLx2dcFVpRqQPZv9QCG9yPF6k2G1RFp",
  "key5": "5DFEhnjJnZPVKfNhfWPibea7uraXRCER1Cwkm38BYzenkPXvtsfGY5CDRNH9QCdoENwpcs96CZ8XVm4kSjDg9jwU",
  "key6": "DSLx8fPJqR7cGeHhsfaiKoEhUP24YtJtz3KGXCPLErLKNzEAopyweBfDkDQTQonusdLSz21HdR4ERFcxP8njGp6",
  "key7": "2QyAq6EryFmDADNjjCz5jdBcV6TvnWt5qPiTeakyxHyNycH5gmQgafScgQUBQonBTLU1uahVnB1tAZrDHGrBcjMD",
  "key8": "B7y1dM5dTTjmSbnJeKNAresvx7krWnjWqxmL13Bp9HdZ9oWw1Hv64jFoqFgj3RmMRsVKngjWpLbXLESN5BoDnB3",
  "key9": "24UTFPdTrSNMbFEkqMUpvcZyPSyEXfG5Mx1XtGJZBEihPYMpumLCcdFaXQCkcD1TBYzkvZKLiDc9muEkXxXrwLMu",
  "key10": "5mC519umpQefEyuQ16CGe8Z4gdVJmStoYXQYfSBSMMZ6jACCLVa8k8yFAD1amrUvZdFJAnPv4SzL25qLr96TcgfD",
  "key11": "Hcopt4uGgjMgjFYtVy27ARgfLJas919w3n1cSznpHVjaREPsnoYS8eojWET4YTKvTQ4Efw86rDuCtzKkG8nisNX",
  "key12": "tMGTxRLVRuaxNsuewcwWeyGCkHo4keSDHHmbbZ6iXzedaiCRtGKVocJxHG3XxgDtnDzvzXF7ms7WL5qNkwKSx8N",
  "key13": "4iQEUisMcmiMZbyy1pe3KpaMKZC4A9CiyTaWg8pegkgonesDz8RzkWUgomhtxYcSmaPu1c6qjCbkg9m17tDLm5iV",
  "key14": "2gQPgK4p7HPB2hodJds3fsCLuK66BQ4jYPdxi2gqsDaNCFxrYbAPhq4CGe4m4AUjQU7E5AKSDWDffERqu6PP85H8",
  "key15": "5vDgMVHmV6MVougsry2aencCckk7HiXNXs6NzcRHQE9AXAgnpJ8wa5U8Mp7xvhBU3uKZEAU362JTr9BfV73fL1EB",
  "key16": "5GZNafMfi9JWWQBkB5Si5npULz72iD8fBDWd5oK4b6zj875ejDPa3ddCrVNf3yZ8rnvN9YSTdxiNkszxDTp4KGCS",
  "key17": "4NMKiGitQp4v3p6SNR8KesxpAN66ooroFM1aG8HWyPYyjqRqJQg8vrwqxejT6KShz9o5qWqQzwjwhVP5jKo8GeGD",
  "key18": "5yhcaZhjgg2zuwW4reGYH8wyPqGKrVSzPyGUdHqahratzCbF8AJorgG5Gj1ADsaugVtUV29BDrkhAB9ucMdPYc3u",
  "key19": "RT8nqn5Hu7FoNpJzMxEhCqWGXkiyEKXHBdS7bkvdf8oRNLFkqAwnET6TCnK4GTY7T57MLhqVsbJN5HSPteBRfvH",
  "key20": "55QyRYcCWRQH4dj2MmFffeH4gUVRtpFiB719RUabVwYLa6pRQt1WNn98q2kVAbJq2ggF5dsy64ubV2oaYYtjn5tj",
  "key21": "5f95wK4EWnApie3TKbUVYF6XxQBWtnqr67gafR4qtxvTHjfi9jvMLceAAJrq8nKDzoTf2qY5SEGJjSEL7eGcFbqk",
  "key22": "3ynnjHYsmRcqyZEUkz6TthWtoHvNDGTTaEv2DPbYvk7vqKzpFk4Wb731HkzCuQAV63HiUYLh9VKhQkTHDAi4hrLE",
  "key23": "KXH238XyoToGJGaK3hPBn6f7UJPacWzUSeeBoxdXEjc8ukwGE6oBBiaf8uXntx553bU9NhrEx7wBDrER8mTPjuX",
  "key24": "3rWYjvtaPGqpf2ERYdzQS1kykUT2kEiuFwzEBZnB6x5zi3zbVi42me7gAb2QbVdTw3p6J7wcN5f5o1tYMhP86Z1K",
  "key25": "xgNNnCx4tbKQ7GGuB5GLpr5RL2jQv3Px1YRSntReuREJBLPcDGoL9uQShQg98eP2DeN2gnL5jLmZU1KSP2oPv5g",
  "key26": "2XyKreGh7D3rcsodnNRa15fE8PxeXpALzMF1LDWYGCmgJfpweLPCrdQUD99xmSq4WX9x7j2hLAAhs1Rbht7W5sTU",
  "key27": "2o6g6ia8JiCqRtj4fLGeemsp4y2NP9dCESannU3WESo2XRTBoWPYMGgRPvMsWSMAbD142jmHThx9BQWz15HTapF4",
  "key28": "2cn6XTSNtgYp3hacKMqXpV1HvwCSHK7adphQQzvDsHBVRPMDnetbCacrYivKns1FLQU395M2hVLF759H64UQAGEj",
  "key29": "ByHfiuyWoKQEtDUUf3Zzpb6mnL4JHdXttDNmn14Cd3CtJSvFNXhD4RGg76VottTuQMh7ENGX7MQwLUCU2SXsgE7",
  "key30": "3FjZzb3qXMyNnWNQpxDLbo28CQUwgdQYjRZV5ngsBGPbihDUhrRXuhzxEGGyk9KRrrqjou3QeovFEn8DQ242vx6f",
  "key31": "31XeypENPjKo3zt1vVwGCHTjNofpfozTt5F4sX5jRT4HZUQ3C3jh21rU6eZ2VTwMM8AUAEr86TmLpH1TxoYWWcbA",
  "key32": "5TotogW79U6mTmLbr8geKs8BP8sgJzYRtLKABEKAoEcXQAqA7b3jvBsf3hEHR5uVS9n3zaW8aG9rfB9sPSMnCDLA",
  "key33": "oRFPqoUZTDX4Ur66i6DSFyaYvmaoVwmQiVg7vhVQJ3aiLzpywiitTuZPfcDtc3NPYw8zQwWXJS8WmCaRQdLKQvf",
  "key34": "n4xuTWyJjVfvRBprbbshvakEvw6cUfU56mEcWGx2rJ73QsGXHa9oK6ivuN2L1mYvPbxNGtKq3jxdrWNHbAnofpc",
  "key35": "2WWYByPEp7jfgrASWShjYZGtovYne6Rov5pZ1EFbyJVky6epHVLzt4vDrrb6MhqXa31vuRy5ewVLyPQCxGBBq5Fa"
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
