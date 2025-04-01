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
    "5nRLTX678ALfAENVszhJNfGcniehjKKsy1F7m5Fc32BWoUTNDUGet8Rxervzy2wNNSEV3xBLRvBhffTiuW9wrtkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdTTevHMEJx5PUL9EsB15BH2o72cNP3v2t8CUyLe7QLaSdxsMrLzv1jEWqPhHVqips6tvzxLPoMwzbvaePxrm3f",
  "key1": "2Fi4jTqoymgGcapwFdZLnnj3sXETV7iFBrVVh4qKTNDUH4Wm7MHVFVgA5yBjAoztuz5u1nsjhuFYk1kbXHnZvvap",
  "key2": "45Tr57ENNdAvu16kLdyXs2Sstnwc68fL4SS1ra6o4ZBYY6XZieGk1ZGAhsCAyb9ym71hfw9mJSFqr81PbHcbFTAk",
  "key3": "4dUL2J33eLBYTVjfYp5e48J9vcq9aNdZyPyFdybtvKp4L34auypknJrA74vNycRSZB8F4ug2UdLyKcXWekK1Gjnk",
  "key4": "2LdVoboEAB2cD5ReVQst6NwPtq2DNbC58dGEJEk7hR4EkAaXXD6QcWW6QsurktWoceh1cxCiVg6MGP7hNxpLx8Za",
  "key5": "3qRKnxDcuF8eoqBEAG8c1kWKFvtsXFieeRLmkGt9YiQwxDNUgR3VtHZfhLHJRK2Z3DMnHfnsPho4BsgjFTyme1hV",
  "key6": "Cy3A9AsD5xb6NDArDUoNjYEdDJwEE2JSpVm7BCM6i4LWBpJvruVDUTWmDmhy77rkSrDSBP8e5VEcAy9oZb5zPG6",
  "key7": "3DGxBKdxMWVU34neZASxA4XwrCpk9WMy9oBTFLfg7A8mBmVDexVGCCpfrhrtd688GWyeSSnsJpLzQEHjEKzhfs65",
  "key8": "4azXdDV8sRRsFciRMh5vD8Pk1MuAAuzeTNYXnxYkZjEiGwekXwGeGHzq1CLoadhy4zPnRMSFSXeT1fsyZFB9Y2pa",
  "key9": "4fojybv3JRjrK6cnL4FQkxz94fiGRdw6vxqY7XFLjsvovXjwXGbFBVS47YXcKREvfoXkXaBBxhfVHu1XjKp6tyvf",
  "key10": "4eXm13H9TuVe17FC7YmRVS8Xcg3U4pbENz19bEAMzfkAjci4fYyaEi3pcHDkShM1afW3MQ2WTXQvGMCk5L6z641s",
  "key11": "2Dz1cu7ae7BfKfBbNJVPTf2614YWKt15eFbfCdCS4ziNvRFdUKTq5QyLS5NjTipvfauBNXrGiRvNAX6oFnFyWPoP",
  "key12": "5WbUPRhu3fKcabGatE5gRcb9xP9jn3PPBMoDZiJWj7DuipnV8EtYAXguNfT4pjnhj6rAtETPHrFRZRMsEFXD9vaX",
  "key13": "2iqiXztiGpXZZkiCdxQ6EvNcQNsHNKXsRCXpEt2m4GkrkbuX2qDwrX589gYGu1ozdoEDyCJsqgjqSwG8HVq1co54",
  "key14": "5NAGrDVxZqjnPk4sDg6vakMCtsZx6P4R43fZzbM2BNS38soDiMkbVPud3fCjkDkvEw4LefgKXgKXJhEZ5d2wALbp",
  "key15": "4ubXKj7u3KxD7CaqAfzbxuQAMU3LGFcePuRwAZih74z6EX7NBcx1tzHYbbKmjs35uzxnxhnWuUdenfCDFz2QqJNy",
  "key16": "2emW1TLV1cDqCYWG7AkVFMCLRcGQMeHJ5KvSaEMJEdxmEJGdQBmVgutkY8mLgLxWeyN3qztGEB5SMcmBwiSvdvrw",
  "key17": "4Vajwt1o2Q1B1C4KQ2FiFiXGNQxaoqfhJ5x4uncfbp92EMzR7p42ViAGJVH7p9nKvBbSupQezn1dYLKCADWMpRC6",
  "key18": "5WcM932GVSk4tcMS9NpctuxtzQyJVqFSb5iDD4sPEzbCRtLgQ1odzGRMoWx4GDq38xS7WitWB5EmKShNVrt7GF1D",
  "key19": "5AHKrHqpSyWK69hjqpGcLqSS8aGArquRhpmhQrzttRyoDUZAiTwZu4JxHRN9s2c9KscUuVFMvuSBXLaybeWwDV6D",
  "key20": "4fShEe28Y1cnUeXYiaygmfTV9bKNaB8yCAAehKERXpAAsc8DAoC79tXe2pn5PEuBnA2QZrvySjsD7cA6hCQSiCA7",
  "key21": "2J3GuemfzvWXBQ2jkH8fWvUBJsMAcenTMioRUbqcN9MjJDtAsofDk7wMLYLR7S3XS2inCVHxDnTZzTYTn247S7dY",
  "key22": "NfxTvNraLjXPEoajyvCpUhfH6kxtX3vKvsy6c6nVcFhq9HixLsyGwrvG5U6Nji3zveVpXN9qcd2QNpfDEtjXjq5",
  "key23": "kBv7JEjZbC24hmEmG9vAgGwXJtUHGtPir1yuRZY43FbYSy8wV1Zr4kpwXhGUVSByh3z1rcVyKMSscLX3FU1HJq4",
  "key24": "4jQy7Uexw1K43QVEVfgq4zBHATz3i7hkBeWodp1TfE7JKq3cDar3ND6KMAxEWATo39ctUdme5wx6SHXX3LDfMvD3",
  "key25": "4V1MYvdMUenP8d8rd2odKezy8eZp8bkf9xB1rtxGdEbH5bnysfKCNDnUgXHZLejq8LS2zZsRQPgh5gMxMjamAgGF",
  "key26": "hzudyRZUccxiZiDwRDGdYutFbVjLciAYbHtj7nfZPXMKeoWaUrc1rKZaBW6VUyMhqKrRx3UP693tWyQsTj4jbFJ",
  "key27": "28K8xMztFuN37aabQivsgggxCevK59zVLdRzVYM6vhQZAxGvdA3KWiQZYzFzjVRwDdyicx8NUDeJgmJ9aVa4A3Sg",
  "key28": "2rZ6kFP9TE8nXdd2Dv7uxY6nvHQdGvQXwqKLMJWtzfFk1Cf1JeQt9U24QYaqQbhNCUEFKXfY9YJMynZc7N9G8KQm",
  "key29": "4pEFPPB3hJukcGX4oMGL3opwLtekTRXBm82hurHr518ZWaRvpPjigkYmHNU5ZPe7ci2dE5BeeLxTnnpNcHep5ovP",
  "key30": "3yGQT66UoP2hKv5ajB9NEHiExhh7rtCLq5tEmmcGKKxWc8VKw1bPigWSn2HqE9vgefnUcai1tELSkVen6cJQt1D6",
  "key31": "4My5xALtKTAnPnDiAHJ6LL2ZVd7WHeX4rq23j1MpBDPaGtN7hqTEXGqKk5NQekbmv4uAzVdFDDhLmcTU1DCnSUUM",
  "key32": "3AV4GE1CzctNkUJb4L7DZyUg9mmQs2iQCaoKhEtBEivghkLVNWLpXqWsFejyBw46Egb1iGfv58Jj5sKAPpACtaLL",
  "key33": "5PE2W4LNmaMvo1BARssBp4wT5pUbXANkFJPjpjVx3bhBRE1ubfT7KDHw3phbtPvY8ZkoYvJ4Jp9rE1GY1TojzeYw",
  "key34": "656ddPLsx5wKdp1cGHjxZHtMwXBbi4qeuYWtrqsvqMGKfEwo2uDWwViCUDXGmRzjex42Wd1PcWyoXwURprChFtRZ",
  "key35": "5Fz9jGxshpRzxeaSV6Tpn5YHMcYKbVcLv87bBK9mBJsQyJt6H9gML9ZU5oPDYtgZZxTxQEGmyRUpgHo8PxJ9zDaU",
  "key36": "5jjMVtLmbLKbWxnYydz37rtxH9fAE6qASZ1D2ZT5G8KTUYu3pwrHnBgqEHRtHNVdsMwDdEKaKiNKsXgvPWZWbCih",
  "key37": "2Pnoakmcg2qifFawPPF5DbeRdsZZM9PkTGRP9pHWcQxEzZjZBbTQT3u8eFyH6RbF9ZEdafwerwiiFF59XF5ZgWvp",
  "key38": "rurdmEM7AJLxGGbeKmtiUfq5E5QLPGZpzFEz7UcZ3NdB4WQz9xPwHMPNtGeiE39mHJXfaCpLF7vTgw9JUK7j8wD"
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
