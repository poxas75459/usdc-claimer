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
    "3LcaHDxvvqyqqpGF6hQZ5rUbYnVzGUFBdKBSDqRhDpyuL4gV2bk8rZKXxQGT1EPFaicoC3X4uT1APjoDbsx5Ck1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3MHmNjbFRh2uFhhUhYwJy3DbMESxFj2Xoe7qvKCsmfK1ZcwUGXc2bbuKUfS4NWefd5zfLQEuQEVBSKUwowfyAx",
  "key1": "3CfqXXp5cLV6Scvdb7PgjqGd6mg9DYD7wX6Jt4FWbtxFt3gZhQqN3NAWVQtH59Jr7tftyw5gsTubBuSKRect9zTa",
  "key2": "453Ao3ix3NWUHStVtVvv2bXXFZptLrE5c2n8eqxHFjQ1V4Da9b2jaq2gatozpCdVXjT5vHmLNp7SCv9XggxnY6wY",
  "key3": "5XpA9dgxkW313AsbwX56HGE1JsG8JW3pLgLyREUJTLZpbMvKofnr83f69Zom8cD4ZuN6UiDX6wqfJkMU8idQTKzc",
  "key4": "iL3tqhFXKv11KYMTWwUMqeyveQYpWhTHgzFDG137cgzRZeoZM7o7BaC7FR6p6bLmiu8gkgdmAa8Snrg9bzbh4ff",
  "key5": "ecy7WCUaG9VC4KU9mYmtnjERZ3bEY4LXph3yafDidNJXUN6Pnfk5C8FVdJQWv9rZqAHB5HD2uy5qNrmKpcM8mhC",
  "key6": "37pgM1XAnwoBHkGZQwq2Na6mcHorWWYbpKN4k9mzt8TvE8LsLc7JUddkZQkxFY2ybEx8c9UTFVu81ZRVXPj4ZJZb",
  "key7": "2nVGK8qfHazYSNX4DxDPxsv85XoH2Dq4TKqFjzk3CdHby4YuYZNfCYfq4QQ7U8V4yMrw8znW868YUewEg3C7burm",
  "key8": "5bdFwBrZH5fVFeYmksYA9ojemBFwpSve11dr7pJfC3uPAYJBgX16wW9DZhyBg6QvALekcVhefhmLxcUXREJ5d6YA",
  "key9": "27xbRTrVFVT2jbgU1xb7oraiJqMjMN9C2CMpAt6rsR8s5gp68ChQyVvxH8ijBTGtokyuu7sZDMsQH6se5m2TWswa",
  "key10": "2Kfjzz51tu29AuzZf66RnZfpMHD7YuiS76CD2VTZPRT25dsAS27YKUpKG1x5Uj7dxZeVeiJV4YnQUGGfjww5tC48",
  "key11": "23wLEXYSZyJb6TiBS5uv1PZ4ZLNUb2519wcbYTuYW98L1egL4ikqtCTgV5ChjRu6GCEZTEGc3A278PSEnBce61wd",
  "key12": "34WV1BqW7gr3yTawDPXsH8vLnmDAvT5Pm33wFyqVrS6RPxBHkvQjgqEvZ83ae27fyz2kFPBGJmbXCPSNuWnWRwBS",
  "key13": "Ty2a5ZjAWncsSumMYkSu3txh8oZB1n7gJktsaoeCQPgQRipqxJnh4g9eFZKT5YuDkEe6u8LTv12crV25koZXs7u",
  "key14": "5ApXxZUXAQkHefSXDDed4c6Q4edhXdZGN13LqEuPYDDfmwLjj8G4HQgg68sSohofjjguAUywAp54uPZ257tYAKEm",
  "key15": "2LtabeL3zpKitnQ7u6QGtWFuHN7kC9sNxiLXMDckZxCKo3uLZNapSvT5QB9sdqPHyuCaDNEpcL7Td2HPmBUQh3ZV",
  "key16": "5gBh85pmvVQuX6pkTn7kC2ekPuuYNyEdSYptLVxq77zZDmHqRVgY9mYJxWEEQNE3p7BKAXmU1h62jS7tKg4nLRvz",
  "key17": "2AjcfgGKWu4bsUgxtC3X71H3fSZ9TBYW9gzJzCvD1zrzY6Pk4qvMHcogcUJRNoEzanEksonhdmy9ok63qfPFrqvc",
  "key18": "3h8PUfjrN5s9qMvtdZcgjnjiWjZc2inTu6TZNc6XrzaVXFi4L19uUfX9kb96M6BzJhkC758WTvUUoRTfAwzguDBj",
  "key19": "2o7Ym3GHEYmkEWGYxJXuTUsUovPgE6wXbNDqTHd1Kwh1K9pE5cPQPpEpeL3afC1TbtxdXwZ5vgttDXhjrQZ9oMfs",
  "key20": "3wbpvqZzFDnaA44dt7QvoXzxzWtsMrJP8iKjtMoSjdh2ByFVxydLkxCttnQkX9ktjbqxki1nLTKPw9HVZtJ5xJxV",
  "key21": "61P6LbAXw1Rdg1949KqxQVrpVYBXPEa9i151eRDRpZHTJpzc1HvkHVpVUj6sNu1j1y5Vh219x5uwXX3rAcpTSUec",
  "key22": "43SNc3dZk2wEwGkdGTEL2Lu7gkpRXkU2mL4tyH3fcmebkXF4sHrNkLmdr2Yw1sfAQQcKCasdKWA9w6uni2mySJgB",
  "key23": "4B3JyZHckXRphpPus2GVpXW8gTUyVZLbbqRJudBf4wck3TcxqnZtwN22NfPj6EgXGDhSAVWD1oiukbBMBzMFe7Az",
  "key24": "2tn27qyU22cgQvSW1CpvT5ypwLXbzpXrJmZMZxvKo7gsk18gH14mBRLWJ3HMwfXiZxLGW1GktxhwykDaNKiFFWkm",
  "key25": "2vP7Resi9C4yULt4ejZuTUrdwNopLYCNsG2V7m8Sf5uDaTmh9aWKFsQCzTNXTrTYadwvDC2ScM1ZVWMxAEBqet2o",
  "key26": "ouVwYBZfZq2FhQ7qfJTwt2HHmdF6JafGgytGeQPZYfmtWpSuKsYwwzpa284hW7TotevqyjXS9yYZMKtKGCmYDHQ",
  "key27": "2rqB2eXx59jumjCVsSxnf8ZY676tdsBtANh7C9jWNmuBUjoqzEJ519pQKM56B8oYvEwSm2JDBfRPY5RzY1vy6VDg",
  "key28": "3UVUBfZv1J4P2eRKbu2gnFwUifWaPB6cigHEbn1V2QBg6j7GGxWi1kbjBMMPbvmDP9sMYG5vURJvEkazUiNMQzD9",
  "key29": "2H6eRd3gpBntbYscrFopYGyjXD9eZU3iQzKF1CYnFaRtoQ2DZ3jMMet5bF8qDauKwZVPLJozezDusvGkY2XBpCdc",
  "key30": "2bez3VCo2N4VWmWneZuK5QEq1MJQaWwabXNGc6ghhwUMeooKURmxGwWuU5t8SW3M73uA6nbUTQuHppNcWiRABdxc",
  "key31": "632Fi5nwEx3LHCHoJrQfsZK42tYqoBmf3qSXnWnj8dvbqbg81phyJXqMYA7JuF3mvZjj3ypJXnaGZRiU5Qp5ctFW",
  "key32": "3mdfvqSoEmvwonpMgwp1dM8CM8a1sKvAiLjV8ew4o6Wn7XC78R92ncYE2JqnmebR4vfi3PHeoeTJQLV8NTCJQoxa",
  "key33": "4GYvUah1NpZnEr7MX3CSpsrCg5WRKxRdq4qEHLuJ3ZapfvNNK389KpuQAB8MFd6SACAojUJrxCqYybXGN4isEDmf",
  "key34": "48RwxCtiUAsrKeLKwR6Jfdy1KfwBgfwAkLWfrZ3KRfYfUeqCDbE4hMqsZjASK8pCpVE1Aj1BdXCbZAhgkE9YFT2Q",
  "key35": "5Hp2vVbfPVxPSx9gVGPa4vtdUZWRYCqiARagpvJvb3L2i4sjxG2LF6bSrjiPxdba6gSzkGZeCnHgoR2CYGQXTqWb",
  "key36": "3tEBxVL46AimY6vL9adYiKwpfrrbY2FGAHVk4CPGYXvsbZe7toKTJ13cE7ybAH8A98cgQEUQX82pasFeDZMvfr5N",
  "key37": "43CSMGTmAVjKZGFJnbXNdEneaszjvDcRG7MnnbiMKCyD3qSHRosfhA1WHugDxabb49P1hkDodZqfbm5Q79Z2r5Si",
  "key38": "5chddMswSkDWgGgoC3SzH7w4axnb8fCFuKuckJf3cd38ogor2RR2ABa6vTW94kLDQ65sBM14gc6eB4eSgKNWXsB5",
  "key39": "5diSsccQg7KQWBiUCxKR3jCmyvS2LhjjdpZUAY55wHrEo4a3ebiCqfvwDfMMyJgkkqvkAmJ2jpcECZZ8sibxXbit",
  "key40": "KwnpNNXDdVhjKvaatHVGW56iNZpP215YTnF4SgupxYxNWHL4VGwvsmJLuNC9KcdxQcg8XZbjSead7yncevSuUvz",
  "key41": "4GJTJtCQAvMaM3Fnvf2YDKMR79Y2RMfDBw9eEoR8tyoCdEFSYdkjRWXHDKSXn4e7uPi85wqj7YXHjJTbcjkYwKvH",
  "key42": "42XNPC4bf7XRvkpJoZsUB5vxSLrvd5VjTxwhs4sXsLYJttrWjvvqpQsq2MpPEpa67CC5sPNjjegG858r6mfG1W3u",
  "key43": "2JPDx2BANFeqgDFmdn1heysZaYFq6RKvzPT4Ugh29SjQhJvyLkxKZXstF2sCdqqThiWwPkbpnHkFT8QcAAcHjohF",
  "key44": "4v4Rvx4arKLipoqQuaAYTeYsAsCntBpKnZQVAyHUT4LsbjjE98WZ61vUtRZVmpxxsBnNmhwiDvPHzLJBwtAF4M28",
  "key45": "xpM4MJQMFU7HcYK5Ny9WNBR8DWuN18KUUMB1ktqPjTVfVKFdsLRRK7YXVquTDSeUg9d9Kg7PisJBEcD2jWJRgJG",
  "key46": "2k7SDGPKFfLhZWctE5DeYRRm5BVMPs4nMMbUV4BcLpiwg3c6opYB1rTxpnM5fZjc9oW7VRo36Y2YQ7EQekXL6Wez",
  "key47": "5swzHkc7aXczR2w3PypYHyp4RrxHcxAHLkDbFUgZ6LRDbCAkTyRCGn9PgutPmpmXdqe2y4Eofb37L6X1ZPkVTbLX"
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
