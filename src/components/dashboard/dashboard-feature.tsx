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
    "4ZAk5dRPnBasdn9LVCQBQYS8vHLS82uZQ2YCjh2PqqK1zvLmg7iiV9LD8F66NaJiYdbYruTVegxAHP1LJCV5tkj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EEAk7A75vV1v5E5ksxEgMveT8ELAnFcQrFRUxGvPdjqHccJjh1Z8enNpbBycdy9wg7wEdu3spUyBS63bdLBoxPy",
  "key1": "587R1qNGoqoBF3oU2KZKgfD6GunGcDUX5uA74T6Ki9A65BzUGfpXzNFEsMZyWXrgtAwJzmPZ97Y1D3f9MdjDQJct",
  "key2": "2pXX9yYBa7Jkd4ya1ZddhVAYoQbhbb3CnwMrQQLxZfQDRn1d3Vd2Xm2bvf6pWWhDv9Je8U99d9fVU6VEY2XUeQjk",
  "key3": "5PnTYPXVFF5j9WgWtYbBVqYEmuvnuPGcUo1ZsWQYHCwtVchcBb3VEDUQt7Td9BXzMTS81Vd6Y4WDbkMTDht3asq4",
  "key4": "3gcqyuBPSmfXVHx6ifzDXbUTawPakx7b8Snm6gQqwXcQcY5aG1DHgmSUEaZhytDvSNCLoAeXu7GuGdVKNrzKsyjM",
  "key5": "4m6SDSsPmfpuY7kLnfmWgXkAdSEpmYWE73QS3bNFsLLFLw6d7o1n4E5y8sbwhW1cPbc1mZWAq5KHQNt18c9YVsQR",
  "key6": "4ozB6zA4dhtR8jJ2fAYmUZHRbpFKLLYno2HjjSFWeD836M21VACJUttHmpYdyiQMx7h3epQRjLJVSyeW43YAttpW",
  "key7": "6299eANf9dzXAecTkYZJhoHDqPgCMwn2PouCuEJ2bg1YUUm1x9zvGNRMDoMKCtB2cHJEb6j9QMYur1xyuz8ZwzBD",
  "key8": "mBHb6yiJzmGxv4LYHnEF1xB35HQgs6Fa8okLvBGmAJwEGWQxJgbWqd76CHV38qhnEVg6Qu4xDWhAmpmkahKuZs5",
  "key9": "5nh4rM9y4mTsBnYCVNqFZtwHeJpb44TWCx1nBo9siUXEGvqfHrkFq3fdJ5tu29jySFpGpduGjAgzc1nRYKFVUXpN",
  "key10": "2wctHg1ELJgUcnEcbcFKgbDo5rDHNKtKFtcKGeGvmDNcDW19YKqPBq8Vq3XNhpZ2UoR6aHgjDwCnqCNSbdseSYuS",
  "key11": "4WcG7pKfuUGHxoPCuyKDYFgbWYCxttaaVFtLBTK8hY4CNJUe7GhqAJWQuzJF5wvPSGQbP79tineoDEvnfaZZpGy5",
  "key12": "5uksRrCJ8W43PYQmBt7NaD74M2mA9LgiVnm6U7oxByBjBzRNHXXT9QfLEarEa89c1vdxNnrXBJs38YSuWnkBm941",
  "key13": "2AB9k52bEDCGW3jriytgQPwLLNamioAdmZD9GnGfAr9D2MToPcJ7WZX7CdRbRGUyNS6MLWrCo2aygxPaWJgQRLcP",
  "key14": "WpJssrR75XRSqeuH3WGhRiQzbHjREe7ygiHPMnrB1YZty5fAG4RyAPStsrP67RLtb3zARvNBB2dTKJbQRka2yax",
  "key15": "32KZJqsJwoMvVi8eQV6vC72v9p9bs1iwwYXv4YWARWQnGrVAEk2d7UYLY5GK2LtkZ2HNDkstUYzznKvL465Pw12W",
  "key16": "4YY8u57qKCsHGFKWYkoLvszmKdzMDGsUfjPfnc2jVUQJLAzrAFHWaMgYMjcHjjFwcrzJCiFhWJuPeE8LFQd9ufDu",
  "key17": "3PBDN6unmgnBj3Xc6XkX8djdn535v38A7ksMaeWkccFUEhZNV5vhQXsg3w7beYdAG6yWrcKCa41Gn5J8g5Ck36Yr",
  "key18": "3edpPFpGgsXt4SPSCFK6dGyuLVQwHy2xKhRvaxnM8rPCKMygqVk82fmnaTaBr75iGXhjoBZfTpKdTSsKUvNhD1LS",
  "key19": "CSngsKhj3CAjWbxGpiQ1Zt6Cpv6NKDeiNf94Hmf5mmbpjtyeBkCPJAxjqrHjgfeXtnsH594uV8Xejssicg73RPQ",
  "key20": "3NuLFTPfckjh2yCgdKR13p5zYQMAN7jDKBp4MC42Z8yzfJtiwW4abUkHhpe9VLBRALRsi4CWz6sFxT3sJDMuAMaK",
  "key21": "5D7xFNkWwmuffW6vrARe4fGgrHGcAWZ5mvA3nHU2Vah1izrVBQhEmN1cULNitgDYRLDQZoYApfECjUdxgyFidRpB",
  "key22": "3fDVaceHcmPGYF5xhkgrpX5TJF6M5ou77LHdxhkAruxS455d4PMbMJjpvpEpnHVUM1ViHD3tuhEU2Ebi2HmvV5DL",
  "key23": "Kx4EnNWxSX17E45u2ULUtQC8fNSaJwXPn9o14nwpysppZp1PtN7Ys9BcL4rKZdxN8HnnjUC8uZsJ23KoT251tnf",
  "key24": "4bLxcmeQYoeWrbVBVWKJX5VxCtevuR94h17X82L7MjeGSXGLqSnE2FyyNQzQPraWXQaXre8SGX69ibYRKy2aVcGn",
  "key25": "518KnhYk5JSk4PD5SigrQ5CvQZ9wEe53kW7RmrKHDnp4xJV9mcL4QBaPy84HC6rtggp6vSgpWoSWux7gSWebrqa5",
  "key26": "2fbifhdMrVUbtAoaTygshoaptRBckZ7qjj1DPvmTcLgWvCCt8ZAaH3Db61orAkMfSG6je4QqWZEhaQ4mBUsiGgmq",
  "key27": "RyNNVqXaysjGPc3vBDU9a1KUboPZUczFQdPaSwfQuCaC65C3ortgqG5Y7vxXCQaYT3nHVKixEpvT8gK7MnJkhGJ",
  "key28": "4hsWoBftfLF3xWdbQM593XTx7X8qPY1KvJxFANyFdhdjjcHsnLMXpPHwTg1BdLAb9zib7WqjgedhVNHQJzeDCrRm",
  "key29": "4fEiEzM8wp7ADr6rvrKnAhRURm9EdGcpsbGZ9PABzMcmgJWStghC8wiw99bxppB4jAXioPDcg6xZ44fXFsvjYXPC"
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
