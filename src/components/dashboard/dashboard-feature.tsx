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
    "3opH6pCrbSVqjjVY4ewe8ewmU2HfWH1U1u2oHpbxrs1raMmSg9iAVBw17Vk58chLz3F9dhR7pNxfGkmfCbDdK9Bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kaDbnTsUKeViVpzXBvazJ4iHAxpzGiGBrZm1NtHnyTE5VipgFWxmq7bGZjE7KLxptgqv8tS6ctcWoGAD7EYEWKi",
  "key1": "2nk9kvYC9v38QTsf2gcKS4szpG18rUiW59c84hAJFkJ39Ro4EPQjsAu7weHhPFZfTErExaU4zLLSyqsyzBH5LWSW",
  "key2": "5QJE4EWihRve4jGtuZKSJ5osvb5utSTuS3e6uRPpb8B3d3dGoCTWxhXPHHisBKs5DARNCWRfuaitjF1DXtqffoQm",
  "key3": "29VL7SnrNjnZYcgaegKJWWTw66DunUkkLANTXSJbtyzX8HQMuRhc5Fq3wzdPauri4Lb5VAqwfB4pgpqsHjcEigcQ",
  "key4": "5MLnmnM1LhMyd1gENnv8HhptgfYVkbPotBQsshPDKhZYr7zDpL5DjY9fzSncbWFkdzGJBiGfZssuNgC46mxQoYVU",
  "key5": "EX6SAxZWctrB6WRHqecUfG3BisVmJwTCmcjPKLwooe9RfVzC9fsNKEbAN6pH4oeQUXdiKczc4JducjsyGXRCsxn",
  "key6": "5m7TGPtLFKM4JSUgBbD3hiPj5eedoKwuoQ24JgAmdhNwngyC4fMVFBR9sgQJpCv3KNfy5K6iKJ3wx7Nh5i7otU3f",
  "key7": "3d2zckcvMyHjv4tVUDMfdSip6P62G4QHuibidCRKLWL2jBxvHHwXFW5k9frvMhmzefg7WnmEyvvG7YL5iCwZYSLT",
  "key8": "cbUwThHUpXvGKYizZZwxrsXAQ9miK4MgHp6YN1249T6dExTNpRW7dtpYkenYVpwTdK4XARX8kem1wduYuewJ6PF",
  "key9": "2KiYzDdGeX4MqvFd7dw5ZVJsjWReD96Kw79rHvtSFqLcszPs9UK24iKPUABbpBZRsTvfMZjEVCLTGHpt5hrWfUW3",
  "key10": "3Np2aLE1fpGA9eguQ2jXvMRpibBYweY6BC2Va1de95CLrsFMsw3EeGLD1mwomSdHi5uGJXcBht7LfQ13Aoi2sUi9",
  "key11": "4mhh46X5EmQzswpxvR5XRXzXpdJA3eqiSR8MpeQkCUT4ftWM6VqFqKDjZ2RKUSkWE32e1rSCqnLkhcCUth8Ryw8u",
  "key12": "5pChx2wWeVN2TN2QedQoXAK3v17azHSshkydbi26GuUeDFpZvSr8WdcmPEwweYLVVqTntk6ekyHR7NyyLptoXCPq",
  "key13": "4SEiMdiEdExBR6iUrYwB3JkZ6WG2TdYTvdxUriM7b1vFjHHukwTYkBNb1vjgPyuw5APBP41ArzTD6CfrLvpvXkjL",
  "key14": "4Mk7TTDG3VrbUPRqxDUfm1Q1jBaxpxqnHkr88qvF4gDWoQWBkFenAmvCN7TjXzehkdp9LvAUUQJeR196js33eBCY",
  "key15": "4XjUsvdr7AT4GQKznxMBujiaF4g51PWUPwqpCfD1yh1RayTs7ehFfVusyJYRbKiSHwvnbUBiUiMCeToyUnNSQqPG",
  "key16": "3ZUScUgsUuPeypS5KyFaqAjAXo5E8KADHCEnB6eMLgMAAdJQuD5JvBco4Ts71bFE6U5NYBqtXhVg5FmLcAHcbCkG",
  "key17": "2CbgQsJdAy9YKDMKfP7pHAFY5QZhdKMYknEj7avph8cmVayJyrNdymCvj5Cdku3EQ6sUykydcgvwLCTBQtG3J8nU",
  "key18": "5QqFSJFaXMbScyE2TDWvpackHdGWqXYSRsYVkkwjfQotb9pckgrxF9o2x3B9EUMvVpDUDBPM2MGKDMRpjyLXZq27",
  "key19": "63JqL21JkvZZiKYfYWb6NBHhajqkYRwr7Apy1zKT6B7JG8qrwDbwfepH5YzBDTQ92ToYQjWRrb4rnPk7e2iKJwF1",
  "key20": "5jhGFzoyUowC4a65hW2iDfaJ2WfBmprtNS8eYxwcd3MhmAMAz2hFQTV4onLyG8R6v5dE9RWGMeSHqQhXa4AZNsY1",
  "key21": "3HdHQfyC9J5eQcwF6wtzmeDitU7hc8nGZ53T1vpALfFZMYgh2qW95K5sme5HcHtKN5bSynLXo42XFyRQv1bg4HX",
  "key22": "2XUZ1k7buN3nz61nfMPqgDJWNfzTw8HVaCeWx1tw9eZbM2myucw4ygAZAinzvTo7QnHNkp4DVBAByHAbvdm9osRH",
  "key23": "5q9qQyUWt1eB4QcePLT3jrSYxCZjppVDeEEY4nxqVjxisdp7a1mEefFKpVjmEKY7ScPvhJrMHLnK7V8yNhB1xTVA",
  "key24": "5vThVm1438EbwAnoXYFsmEthz4isiC7hiknU6atqtb2CFcoDztkTLxgG2nG9QTof8nhRcQ2GD3e5gfs1L9rfZAfU",
  "key25": "3CKUnqcaP7JCnCNdvd6u9AkVuvRe9omFY9akb8XVzvg23xJeC17PuQ1ZoJqE5q43kRFzdbMjveVbpKSHCH7gcZvw",
  "key26": "5xhWWkUrhTGw17YPZocpWXRvtw8xdSZuFWtLUxxHzeoS2vi9pBxGKwUFCo3ZwQXANDKccduH4rdQdvF6fTPrED59",
  "key27": "5R8zcWj7BykD6ssAoZFgm5U2hE3B488XAb2Ys3xJc4cqFnBpWhbYKBtbQfQh5mELarJ9BCrXYjNBYnn4np1jC39Q",
  "key28": "3xn4MoZWgnt4M2DTTP2JrjUf48W1uRwCbuRNDYTWSfRCgtjKF1BoniFNSfBmCL9AkxiotASopto4NbpKS9e7kEJQ",
  "key29": "4ijHwpQ2vGq2bJxVodsYzub3v7JbVxe8etEa49a9dVu46Q8seL836TKorAjvSE4RZ7aa7XSgGyhbyox7tCeyAAiL",
  "key30": "ZVaEFsmAQYbpXefSEHZMeenSzZEvsEBQZB956nm65EkHiyQqt1odqL9kBQbAygMS4AkpqPZ7DopH9RtLYooPK4K",
  "key31": "2f1xBgRXrBH7omo9GWbftD26rEty3UVQh4uoytvu6ydv16UVJ2N87nQ6caszB5JwmLKfDuwMgnsqejea3hQ5ZmAQ",
  "key32": "U6XwHcSQmxAJMxRyDdc5yyWJxCoqEWapCkG4FBSBTiK7GQjJ71dACQpNm3mKHNjPVE7bEHrzusX3cq37gMoX1fW",
  "key33": "3zY8ZjByUEh7KuWS7vgTMUc7jt37jMgRoQom5LjXBNuSPuLS7jDjytjfgpS8x7BJe7SuwcUFfMuBWC6iV5Fm3g42",
  "key34": "of7XeLDc3uqV76b45Cuk6iwSkzLPnK8527FbS35oNXcFg7AYz9hA9xpPt7dxpu3sQ5dBjh3vmB7PwgPNUfVzwGP",
  "key35": "32s2kR7XzDq8DnpfxFRVg9mP6Jgt7d17dLvNGgUn7vvd7NyeUdAY9uLj39ubuqurQkzMQsey5sJT3qLahfvTcMLx",
  "key36": "41ZdMhdiGxiGQQFGeE22ZyBNQcZCa5nrDQy7F1ueHR5donNg7tCYdhrTeguTh7mVGE1kmovrFS3LTRAUy1e5jvzA"
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
