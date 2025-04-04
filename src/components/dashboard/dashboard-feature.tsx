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
    "35X7wtYAejzGFUtfVvFQxENiHFUSg1gvN65PWtcDPg2LZQv7A9C6bfbvWDrXybQcMaf5bb8v1gRjJgAmrbnzN2z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCw9SbUUwdECWji7VGo4X7BVeZEKGfA19C3t7e8ufMh7Sp3BaJ75T8X7rBqeGUCkk5QYWLo5oQZDE4niXp9V99N",
  "key1": "bqerfQZNWio5BG6v7ef3WQm7hhm93QSvx8WoXrvMUrQJ2jGHoKUEzQTyyGbkbJh15UnJNeMzbbeX3aZBS91HpsP",
  "key2": "CiBqRy4rVy2yYX32PgJrX16pmgeCuAFxZoNSLwy4YiD2A6h8KQgwGdgrim5Y5gWkmjrWzYmnBDtTnsCMWj1GSSD",
  "key3": "2FcX3hhoYehsWSL7Lti7yRdpJzJGk53uRxwVT8Rsv8p9eex6F9S8aXGYbLYtXwWQueVQvmFzRxkqTFsCbdLWy7rc",
  "key4": "2BQ6RFLeED57CMVtw6U8FEWSmyWBFUYexMZbCysADghgf3HWo7iYYDhE568idehZgvMoeeebt9gz6SLJeV4sR3Zk",
  "key5": "5cSDrnBfFKxp1NKpkH8s5bMbZZPvQt4PRUFpeoR21JGsVREWseyhTZZpqAoi3GfKftGcM66qPX6zu76K2hS8z6C8",
  "key6": "5kQMYgGhDxd3ZRkW2SdsXzsVK95v3W1Vy3mj45RszKhHrH4Yv9Lcb5DzwehELm1GRrpxR8MH6a9LGjhS3JtH26G",
  "key7": "4oEcHNSzWD8BPSAN9mQDYRXJaNDT8igmrTnFFCBkqEPNCRyj3MhF1eHfrNaRhCVExUSfb2K9fn5EvBVWU5y8avV7",
  "key8": "2iQAnzFJEzvMBC3ZyHQrGNt5YUZzCtBoUmJuTC9JEwZLydU7r3bfah1Ea2zPCgnqvsiFNVNWv4C8CuwrPkSvKapR",
  "key9": "cAUoTjWajaZsdcDWoMtTvcArgRqx8CVTNeMzK14EtUfSUebDLr94ecKN2oRX8Mkamk1qXenzwgDUgC1qMJNBgdw",
  "key10": "2fxJEDXQreLg8jD3FJviTYfzpvzNBmLn2FJXVjstNPMZvcUDVg8CD6D9j9PKdrAUvWdzRNCdUdT5xe8UYkKsqhN7",
  "key11": "3C8KusteZrUP5GfTj5su9Awn5Lj2De3i1F8HjdjNDmXCokAutoDYpLaeN1xKVzzhDB8pfXkjaUUTrjqRMojef7Tm",
  "key12": "2xogaweedLLvyGDUWc7W5oKHzEinn4U5r6NcoEaoWm2TCEtBG5LqVbAMiHWZCd4FyP9uuTxeFgvvyvK5NK8VeH7a",
  "key13": "3tBvc3wN6BN1LfHqMcXfiNh2Sb7b8rff2fXGsUGJayhCsHn68k4b7P8uvVXmEp4uuSj9gtaexhqnrnMa7ge85eBp",
  "key14": "m5u5uCdwXbeWkbZ2uW1ZSuh7FGbpsVM5D5FUCATNjzRWt44e8yXEBbSfkE3Zjhb4j2y77dwmFQmy36A5eeZW22G",
  "key15": "3ra9zAV9QfhECBe7FKgnb2dwLy9vPHRXmWaT5DAzEXyhVrjjMYfBRm2FDLVcFpDc9oDY5tiTzng6uHM4qECcyosH",
  "key16": "3VKGztyngmW2JB9hq7yyYikfR12ePxzbNhKtF8H8xsTjGfp6H5T37oXgRT9YUPAR7EsGBCwbosRp7WrxxNAFE5kZ",
  "key17": "R1GbzGgPo1tLE5BCK3Pp3MimwJN9sdsYXwDwySCLy8cj9pAWpF2TiUZE7fzjG9jRSGqkorzf2dM3Y1ipwHtMhC6",
  "key18": "2tj9LzJR2YvYoCAgqPoaGUdRLQAGFGHEB6Lt3SsEP8LRFS8bvx2diXWUAZZn6y7wb9yTKZq2adbDarCRJpc9JyjF",
  "key19": "3G8PjYhe87UC4rf7ConmL1cspqGFrRoVM5P9CCJ2LDtqcH5BBx8QkxaAxARe6fy1ZW4HZyfxFQwv6CYGZKNaQ6KF",
  "key20": "5vj8sxnKgUuBCnUcjknwpPSpnoRq5momAmZcL3Egfhe6wksVAMA7i4CCjLab3PMhib5PJHqopLBYYTXCDFgyjzCN",
  "key21": "373WZdWHga4HgqzbZcyRoS49z1pntkdzuzuwAoYpCM7GWiE6q6KMRvYeC2Nx1MDyhxvEFHzjBD8mCwMsG81wmWCQ",
  "key22": "3kCAgkzYLwKdZdihHnhswgev3PYwpHx4FSzfgtfrG9qAtCtRFTbVMpfTCeonKVJ5G6NnRRXNdFhC9SQV3CZvifdf",
  "key23": "45DAn25VEFfc89e1K7vmcQxoyzbKhGjytrfCnp1GnXPrRMMy53KjyRYRCnLN18PWcpBCciFtQLuD99rj37wPKFux",
  "key24": "5381ESuPWoxvfE7Df2M1zxcZry61BpJTFPkMTfTwozqRYGkvDRxKHGMgjQx16aA4smxpBNQCrgQdYxFgrQc116e3",
  "key25": "eiRBqsHXVTJCzaXJkiwsksFtLbSBs1UVbHSAc2b8q8hBW9QyHog5kvYj6i6X78ifhasv1TDRyhXxkPWmugTRJ5A",
  "key26": "2vdsogg3bJTxdZijXRPamp7KGusfigkewASs3J73MY4KfK2eWgo55NnE6fhqGNDWpWZCS4axN4GoSUZ9uFYSVRtX",
  "key27": "59Uh3eGc1Pv6g9ZwsoN1YZg6koAAXcDQUHt1QpRQTWReuHhJDwaKNL6VfzL7HmveMAZJ2q2hVk5WF6gS2nTtLTLw",
  "key28": "PcbZ1yUMe7zzdF5yttkak71MhuSzb2CMWFoMVBickiqGXnxFLgEKWyn3xkUV27JXZL1RsAqvoUFDaKReqvXFDze",
  "key29": "2dwBoYkaxHu3nNj4uUDn1KjVdMo4UJBNRcGrpSG5PHzEM3JiotvgAmHpGGmpCKD6zT6RaUgHHX8rJE3hKCJQaRPy",
  "key30": "57PPp7WwuGCxUxeeHTd6xm3dMw6ynXmepm5zRWVVWcjwToQ6hqDtp5UQTCBC8Jhd7yag6q3QT4hH5DGwRmKNwJWi",
  "key31": "2e143381PuL3RE4jkpGi7sqQ7d92bUHqogLMb98rsLugu1hSk4nLm1sDGkikEdCXYF9qDQNSpj6U5bVmryWqswR",
  "key32": "5vn5JmHDvDeyc2QcGZ1diU4gME94v2VySgYTXaP1fYHRV7Mks9rbNF9nEaJ4T1JFjVq2cSLW1rPegT9zfwYiaxrP",
  "key33": "5y758v6Ug8mHL7R5T6y2yhS3xSqDedJPPgEEyZWUd4JDVPmSD8Ap3FFNkKBM27XxfU2fcZo7EDGPnZ9GHBqTChsn"
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
