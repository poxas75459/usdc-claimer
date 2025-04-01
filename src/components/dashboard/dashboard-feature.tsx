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
    "2mp5x6YygS31org95YSYFDg3vWPowg5KXGsFGrUezDk4DVVyoMRzZNZwCeRoWFPpEeEWozDGMSpQSTrTHqDHsS79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23TS8iyhTeXc2bdw2RVmGhK3rNN6AqX92kvayJ8nwtGQobTUSPv2F9YhsWq2xcBxPn2sLzNd26CyES2Hm7VvhZ8F",
  "key1": "442jhmQkjFQKGrteVgqGXBwoudAgMdSK5s1Y9LRziXukkkoAvmsiWjzSUDqfBnDX8SVDCkZLKH2UCCC2GXHuqPWe",
  "key2": "iT1toLmGXK4CbWbAotYcaJa8LkKL852rkVrqBSsnCiied368jFEArzmrrihrneK2dUGiNi3FuPKtM5CkLUuiF65",
  "key3": "ghVPL3TK8nzHkS6QX2EezEyAboYLpGSjB4RxzVusKGA8tiCiZeJaCmJStHNehPqRtvuNLpmxtWmy8koDc39ciAg",
  "key4": "NgpdSAmktEHq66kakiTyUsMnFKn4z6BfJAwzojx9NeSakxLAUwqjnYGUxrgjMAWh3LkG2WbgxadyHLthPeXfjAZ",
  "key5": "2DVxWGdKocy1FaFGeWFzsdqZWMxCgpfUCiYRhiM2eDUAfvYm6yLxQTP51TcuaFQ69XCL28LN2j5Snc12fdA3p5Vw",
  "key6": "5wwcNRCSFuEkfRLagBbkyqoqsfEiKjjwoJ5cb6Fu45hMB7cToCfexqxjukocr4GdaHU9TJjySEtM9tWA8ZkvguWa",
  "key7": "3kKJoraYz6Qttw747KhgEKZKzLRrXV9gjZr9sjYeSmNL8mzHbQKji8XVbuBmj5hVLZkCpxzGxJmgzVEBL4nvUq8B",
  "key8": "4ifXQEB9ugxbV2qkU6eeUhkxzFfLncMefgeGAYnEaYejseZM99rXaJDyryKUyfTywCZQVFaFuBsk3JXmXYR4msar",
  "key9": "5Bu4CvKedrAtmmUoZCojPNhDunYM6Tr6vfuVut3DXGVip1qgKPMphzW6yGRj75BzD3TX5wekLsLTjuuAitrPcT93",
  "key10": "5MCLgMbEqi5YsUBormHsEc3te14LfyHU74qjjAHnzdQXZb8QjviUqenx8t6JFJ3at4WymhXdGfdCsofHBZCPyB5",
  "key11": "9iPLZKWjjquuKLbFvCB5ZWY2VzA6YWPagpHyiRS2N4YoUTRL4xnRER9rPPXCMGLgkFxjNiDMaz15kEdbdQSnkvp",
  "key12": "4eq4d9ck6vHsamX9HQH7R61WUbNSe1LspfJXJtHUKp6hf8hw8rhkbHxc8RUySwWAtTuhiMYDpwcqdNoXtos2gfZS",
  "key13": "31qrgttfKS25Ej26ZBgZmLs6DoH1Q5rtBjsQUweBz7J7iFsqZnS1nVSSBRhX1qYkz17MfLS8U3eRj5G56LU1YUCe",
  "key14": "5SmE3wqvXgJ2tVC57aVYoWsxwV59RzpjcFDsnaNExcwZrcYXp3rj2tnobYCMkzfHGskEV1RCKUdT5MSphbVBXTm9",
  "key15": "3ou5D4yR8N1Utss16pU5AwfrprinnpX3vJQsRHwqz2bMP9hm8HZrETzjD9SZtZ6P3wgzrhkhaWV2tg98L6QAqzQF",
  "key16": "3RkRfEyEJrDtSpBUaB62qSRTweAesQWEFe6mXK53WiAbGoBiXYct83uj8umbspnEuMfTj6yZ3EoEdUCFgtFe2WFk",
  "key17": "FzYbsuttG5ySNzBNMvWnDAiahoDCUN5g8yYufxrWZgkQgxR2dLjoNoNVP3k4x2H3RK2HyXXmjg8dDzqgsZJZNPH",
  "key18": "3Z47r7j6pdUBFE8WGbGYVccQsragkJeAxaAJZjUgg8JUdEaXDhRTZgqnE4NzSAu2yXNNPAMDv6Z7tADuNiMzuHsQ",
  "key19": "3WnBc446WZpZhao5JWbmUSu8Ps33ZLLTWqHGx86tHBkeRg9cD2xhNRwvfc38Es3nkWseZRzcLyoLYmaJoz6rHd76",
  "key20": "UN1JEnczFe5bfxFbAsy5pGgD1QPGwE6BsFwMcx4NnWVoJos3Q9oCxUqvTVUF8Vk4XF86fFjdVy45z6CNCdmdRz7",
  "key21": "4tHTdyJXfwjic3FuqDnhwSEVJDmSPueNTUNJy3a1QQkMe8WAA7jQj8zCt8TZ4SCJ9VUf5bWt8quJTzWdQ8Mf88Js",
  "key22": "3BnVsGQUVaNHuFCF6tURKDNQzY1ZsL4RjoCvG6gzP6Q2jB7Nkxc7f11QUPBa7FeVQEx3QPn23xYaw5JqqFpXWpgd",
  "key23": "oxF7bngP8p2pxv8x2YKKTBVxkAQ8o4kxbXMifS9PQg4EyQaqCPKb5Unv7G4fM81vWQEKv6EJzKMT9mcAZG19oHM",
  "key24": "gub1qfgddctU8JCaGL4kQZkvWRD5XLayx3G618dAJuQGBBY9tUj4xPHgceWMESSgdA4h27DzQPrmbgkysn3vTdf",
  "key25": "5dvvwz2f6c4Rvyze3rsJpgpMHhAkZ91RnWEgn2JVrKvoQkfpRJLsKepLWfM11rG2JwRKTQztK3TPVC6YTd3RURuW",
  "key26": "5rjyPx1t76DKi1nGnN7tuyVt5yMtDSPi87b4Vy5LkHTxhK7Pzs3sZEkhMciTcibMe6gvfqLjL5mpXnr4WLGuttMg",
  "key27": "3WwT8t43DtmUnUb5sBf2pMMH3TZpsC2HWXN1RmUF2guBxS3i2Dmv8esibrqrgxvTrs2bNdD5Pc4ekWR6v14qxLxh",
  "key28": "5QXXbpibvx8gCmhjpJKNFTnjjKtQy4EpzdeEyd6MyaPhy21moAoVPWYsuVsKoXcRb4iYYQTXb4BpgqQfLG1o3ifo",
  "key29": "QbCaesGktWLvneSrr9uA4JnKG4XDp9gbvCvLV2PDfBtrBJzcMPJwvcnk7Mdkg5WK1133JY3Np1mT18ttC24hjEy",
  "key30": "5wUXw9o91m5juNc4gTJfWnkJSMZ72B8akavY1Pw2ffuCKeDsS96kUyhr1pLRNTtDrfCvdMTsGTJmRWASGquNSZjp",
  "key31": "2r78VQ2e1WghRMd5ZLWEDjPLVq6MTYz3rGFu74AbtFYgVfZpnfDqWNfMF6wptAYpXKbqyckxRWfEbsodPVni5Lbx"
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
