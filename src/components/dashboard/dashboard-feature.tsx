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
    "5AAvKn2bDsSswAoumfZaL87adKMTY9Q6wdjp4pUnhGVL9hH9Ha7n3di6EhV87R9A7tcrAYKdY2cQuL1DouAdyCYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b8jbpzXRmwQw2jc7sfoVx9YNJdqxgwQeyxvB8gcQKXotE2tNE7mMapgNprFSC6btYLgLHr4JeovRngX8YkkDk7W",
  "key1": "3dT4eDNKRzaXHF3BN9DdXh8cifKUk2mFtCj69Fy5SXoZ3LzUrv2Ui2owhL5MtgUhiQeuhW7p51FbKqGqXL2SdtVY",
  "key2": "3S6cBqDsCzJXVCPbcQ9LmCm13jyAFcj6eeChBV8SoN3Bz2eWRaEzLcnHxYq11aV9QcgDbncMH1kUs6W6d9qd5mTK",
  "key3": "4TXztVnYxJEw2wpcJGLamzWL4HjusYTdPHaoVAf2UP2rKBjeHByvZ88KHF2LP8G7NrU7yEtfHpV9uCLsgonAA4Wx",
  "key4": "2Vr8hfs1CpUrBJM3drsY7gb1d44DnfehtQPjG5sXDKmAKqSX5udtvsBnEWu5z6CV2M15aAvQav2U8fj7BuzikrL7",
  "key5": "49ecTebkdVZ1v9v2nq83VexXAdu68ZeURgFimdee3GVD1whVdG1qkVWwX4vzBPfbSTHdtxrJrVMQ3ZMPZpBjB6CN",
  "key6": "4GegDb3v6t1RiUHbV44BHbFyZodqpFnxFryoozEHa7Fzt3LmsrqgVR7etr9zvkVKHF8NhvMrMx1BZHUBrtXCUUh2",
  "key7": "4suaxeoeNTi9jddsuoZcSnEXoV7Rk65xer2etnsgSyHEGv5TDum9ChJ8yyAHe2WsYaXvXGqqyJza6i5NUtJBtDEj",
  "key8": "3k8AHgy9SJxQU4ZRgzJc6bmCUK625MQ4PQqBcbcPm1jrxB9onhpEoKTN2TDi82xHCz2xeBAEtKXHiKzqGE24tSBY",
  "key9": "41ji14Q64fQWHMvcz1T7dZ9pW8Kb9AbPX5UeARP6FrVhBFNd4zA1fj7hcY8miUtHfeRdDQLczTyQ8PfN3CYX2hR1",
  "key10": "32d49BavvivyBzS3biNGXN5AoWVZzKj3Ka8rwNaHQKNeAUwaVk6o561YrjLsHBybrLE5uUM3hgi72NBRKMhGjCsy",
  "key11": "4awE4fbH6UfBUqUTLJB6Xvtn5ftLrK5NhGFqnV5cKLteX6zbkspbEKYS5T6b5ocw32Z4ySqec1hRe6zUg5rxKPdP",
  "key12": "2kaXAR97SzkbN6nj3Mpmf8hxE3KhicYpJbqHWZfeYbXyxH5Ldr5hPbCqYVQ3RPw94VtKUV6cpQkodtsTrkTGU4sw",
  "key13": "3qkPkK66GTHZb4T6r398AMW4yLpRRLv2gnhoB1YMENoXkEzqeDrUgYRGrkx4yxoUVp1zqvEp4y5BnSYikVEfCpFS",
  "key14": "5s1GbFjGcBh3DTxBsgiJMS3EupwpFSxVQ27rx93RSiUdwgqrfENd7Zf15AAmHsbvgKBHcEsARAr56DevXbM4XzKa",
  "key15": "2xEFu3P316ohB7DJPE7AuQNUot773twijZhWmmUUCeWBbUYVxrqhomHtrwFFyPiYHgZjA4JaCd86j9NySoNcJcPM",
  "key16": "2BWD4KF4Bm9wT7QH1SoYYtmcVv2tSWgyiemuZncv1MwASwejp3dQKk65ak8TXCgRTky8DcJFe7q15dJtW7sJX6Ke",
  "key17": "skYnf6sbfeJXGVwJKAE7F9tBzWHpVSbnjj8X7xM9QxJ6udUnbueYPrBo4zaagAgWki2fqbG5J9AgCRNj16UbHCw",
  "key18": "2ktN16xUwtsXgUXXJtiwYiEVXrnPNhbwpVAt6JQaZ7ZCSbCwfWxZkzvqPEEdK8BjS6bxsDTVnVcXsPTbSN2BuFbs",
  "key19": "2S5Tx4dqNf81U1Uu4KxNHizyCpSksVYHSh5NSkGAN7yPjW2h3AFcW4ezAWJDo11bgo9fTBp93zNAku5vzDBu9GdU",
  "key20": "4L6EVhwkJW1ZnMf8jZDZGpzgFJGbwb96AaeJRGPXpHfdPy3t7cbyjEpsdcoSf2yzFcKPtzARrRqfvQP9eAXK41WQ",
  "key21": "3FaDahJ9vW2MsNht1iiUUeJrikFrbQUYMrPxD7cdgbxiti3HYKoY3tAmziyU6u7dy8HFEJ6ycsgoz9PLaiKsTb67",
  "key22": "5pfCcncPJ1rxo86WByEZ9oqniDYSi8HDWPQKiXMcWANkPq6CTZUsF6bMiWz857PyZZi7xv8BcpjnvQNzBJaowRtk",
  "key23": "47F3yTrawvawpqFrpudtrqdVUCz5iYDzvmxKiufBeGXFuyhVFSGxy1ttLiWV812UUrq9MXM1Cfsw2DFbmhqWG6RB",
  "key24": "2RrgaMopmkmsqjAisbStLAPrPNWVnhWnoigN12pAL75kPenGNbBeRcsJTgTjsqXLQdTtGVXXcAKq2GPwSUurV1kF",
  "key25": "2NquCEMvCmwE12vLjzQoMaDrFNdGPxgmUkkCYLc3S6sras5wLgKDhUYcMTej8Hp7YnvvY9sBSnaYmRqX1UcTB2Wm",
  "key26": "3pDmVNgDSTXAaLPjDLDxdK7xXeUmoRDxfPdv9gguMa83NqQrESntnjFWJW5vGYxo6yk4kTq1E2FZVGozrTVsJzQ1",
  "key27": "X7jEhLgt8SJvR7BdLpmekitCuyZRwT8keR4SBCPXcR88kaQEVsHbdVq4PnMmiWUT9vKF8srQ3XRfEHZkWAhzag6",
  "key28": "27LCcuS5M9fjqVQ5Stipq2kVZFcSHtqs7RKCjzvdqAKq8LUEASAVPTCo15pQuG1Gynf7jSDJiPbSfXjCWeydxjym",
  "key29": "2h6VCebeweAEWRkB72jjidqrBV2aBnjoLUpBsmPnmCH6BMQXygUo95uD35uyHtt4khwxucK5ts9nVkuagmj84SdV",
  "key30": "5egoFzfCokAdvModeFtptbCQ56KDn2saERkUeQBiNYLawRh56qf3P7PsVSvSRrcubihbBX29UZyukuzSH9J1Rik7",
  "key31": "vGa8tLQdtNakQUciXuK8d3xyiBF1BZhaBuoz4vFce13uGSA7q5z7F43osR4qsRDSB8xAcWoUURQDx4ThToWMJmr",
  "key32": "44qJiGAxJi6p6SsYkN5zx8mXptM5kJdeqYxhPAmC9d9YQRqHKrCsPC7KiqYBey1m5HYPZw4MRuXRnf1MgFrc7teQ",
  "key33": "3oe2xhinxoVNQAPzRVLqpftSxzKkw2UhCLt3EWKAYqwneMHr4D8zzaQYucKtxiZPUufpKFjT7srG7bjr6WtFKbdT",
  "key34": "4gEX7XpqhHNrhiZLHL48dXiNgoGdQh2FZxnsVmn1mvSkPPrTR5nSC9Fp4kgF7feoNaPNkSmCb37d8gukGU5wpp1G",
  "key35": "3je9bTsydWhSNjJVfvvjup8GK5LiNj6UVBG5c9ZjoR1HNscQTBuRkuBUst13zTFakdRVnswwqKqGN4GUAiQjYgJq",
  "key36": "vp4eF5tYQbUm1XVJjyNtgyKwMoSK7VVNnpgS9CswqKJY3dEPBRdyTghB8o8yGGyxQhuCoiwxxoBpiEp1VU3Z5BZ",
  "key37": "55Nhx6LDobZwcXrYvmet8s734FTA1WMryZaAruX7zs2L9p7pDaPi8wjKxUoSGnVj2L51VMQgAPtTqsGT45KK6AFs",
  "key38": "5DWLTHfkF73KxgytZ1fg3ZJ5mWS98c93G4eMv2q2QqWxLr7FLX1V6VLg2kH5ZkzwGY9t7KTvyeSbZo8sD6yBbCcd",
  "key39": "iyMcxrAzMLEoMdiMiGYpVhbw2DEpJZ3MAtK3hmF8VMtRBPEySayeTzpuMwgvwWB1ANjvxQo9KQWyDCVXNH5ic5h",
  "key40": "5vPpd1ckM4Hv3F3GxB5VMGeGatJSRbydTnLGPCnbn5fZjiVj2iDVdqDUE6g6jY4S5wtYVGtLZhkLjewNb4LeQECo",
  "key41": "4ZF17pHBc4KThqHUef4k4sQP2aGS8dotyPPCb9AL3vxEXbrnTS8qQNE3TRWtLtikpKtVS5WzYaWkfPZceVbiNF1D",
  "key42": "27D3MtGjCGzUtp3pyadi9F5agWkuQDWR6BujQDH3qvj5UcBkiHfstXVs5ytvFWeF5Tvf2zuT46AcPFkzxycn2qki"
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
