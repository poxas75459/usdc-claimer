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
    "8oJ5WMySfiQyPJrfRE1AHNa9oybtb3JGKcB123QUj5TCtuncMKfw97xk8zBztVWEMtKB64TM1cif6Cj4JSYzAfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XVrVmpzjJZtwKkBZmfXhWhjCdvDqj7Xt6dxxQxarxbjmThg9c93mH1tpPff8SjygfP9ZkiN3JrdN2DBedHNABom",
  "key1": "2nZ1bmtD66XWGFef5LvBXz9RzX6vxWzWj3rV1cx9DCPRbYPXi7BK71ZSW4vqTBP3JYbMvazC6YQFSNqR4adPZ3Vj",
  "key2": "itHRwzf69qdBwhFcZZcWDu8xpeE3ZyQrtoa6VmKrwhBPc4rjxiVS48fGkFLqBm4gCTfBc4a23oiVVusxYgi5Qhx",
  "key3": "37VYqMschXaTPNP86DWewRJdpdpYPDpw4E67EicydDQ3mZqYm5aa48Cd3EMLiEcC5mdQS7HQ3ChHcRf5tFYYGBG6",
  "key4": "48fDQsyGr2WwQsT34az1WZ5Hk5DPPkLwgkHR3bYsu4y2hwEjYc5jrsHYmZFQxkxVVRMrUQDwrA5ZC21ze3YeXLVs",
  "key5": "4AeSRbW8RoSsLNYvDxmUPQfi9pKnVoNeCR6CeToDNtS2wQqGTw93VJPVKRHXmYp6iZdzUzXG8XoGMrZcaiJLFRLc",
  "key6": "2SZfKtJRXnBHzh7UxnFAhrKB853wt8dLmvQi9UjE89WFHop8mLpLLckjsFq9YSq716qKXZC6kKUsPLALXJFMPPwK",
  "key7": "2veFN2CVdsfAh6fHW83iQcn5wizTyzCy4HbdE4oh5ygkoGhLhzzLeKKZ7vMgrxbMmkDLD3c9GWafeKmpzYpPqtn4",
  "key8": "4suXyTpu7zhJkDd8EVro23nDV8u28xSEdHspV31Z9wVTPaKAgvPCHHwkSbk5JD38SS68qwzNb2n4QrYSdYnPP9BP",
  "key9": "4cwPvSRSUH5335Pq3LJaGG6VXenWaTYV4om3xvfCKzNTeSUJEwNF7xCfMv1WjSZUdU5Df7UhYCdj4GsCqaZ35EwV",
  "key10": "5tG656wFg9sSEPFhVxrHTSsXWGMMdcKeWUPeErBi9F4QREsMGghuYRnJcY9pSucwPDv87eN84FVoo6mkCFiM6t5f",
  "key11": "5TQhUrN12ncwXrgULDd73qwWqpzF9xV7Ve5CrcAumimCv2ccafLdCc8CL485rD9o6A7cKUCthE9BEUEKQWyLs3dx",
  "key12": "29pDvX16ryrinC9uCYH5WZArqjNSkk4AAgTJkyk2fCdJVrsEfvgPAFvNU97zzP8mPqd88gaR9xVHdHtZnFCFGmh6",
  "key13": "2WqAm9vnUWaewJVMpsrSkFFJGWoWHYAjgSgiiEphJADmkoAys3rjg8Y8nArDm87175CWi2FkRWD9M39gmYRMJhzx",
  "key14": "EzN1ZGsjkK4yPtLkmPvC85HNtCUcGrgWKRdeTWwvR8kGPzGZZ4XF7fXbRSuBtRGyKu6L4Yygu57i4QFinC8ddeX",
  "key15": "3vfNbRZT8YnzmgGTCNVo9Xsw7P33aX5xCDMkt5Bf5va4vGF4Piw9SjpmzibCBZy9s6vUMbbPXNhVQsv5AkPMPD9K",
  "key16": "2UDyqTWWXBov4FEJwthjD4MFdZnSttu2WRrH4we3sR4k3bjuwhtRjbkH29djg23mNbRmZaLc3SAezyrT23vHKV6p",
  "key17": "zz2wtuanG8biSfDVAAEq1Bf2GkBPqoyRRobXzCGLM3WdgQrE2T4bn9Vbx6Q7AyiPvJnanacv3Y1gapGQXpFQhrq",
  "key18": "54bapFmBfoPyCib1y3Lqgqjiojtri1DaPAQHDo2d24G6SiSsJwwuJvwD35FdhAJUzn18ZsuVBKFHFSADsjAFX7GA",
  "key19": "3Npr8d6sLLeoSJNauNRA6mdA1gTuxK6xiGgdwFqKNNFDRhkBfCDjbDeRU61cvnvP7LnGnNNuwK63qDN31VHa5PZJ",
  "key20": "4RSGUp6UhkCmi352479gE6t5UxRZoALK2g1Dnz5heVrPwyKZciPxKKL7rjSw38wfVfKtN6qe3a2HdyywCKk4AL9Z",
  "key21": "57SBjSkpuMoVjiuqEAyJGw6D5VBjUgc7JbWwQJxQLVGQHy5tH54U1CjfxKHCh6CFkyofDUKGFsHVMu1ECfEjkR1j",
  "key22": "4u7E36sa2LZpCiLqk5VBcsDypB89RhVMRvsdSU15xLuuEmtcQoRBRT69tt8xgGvTcquYbdfWdTKCc7WTojcoMYsK",
  "key23": "5e7w3ZL6NfTLWmNpXiax4nzEqc8EpeKubSfLbvm9QvRKKbNZD1UNLzFknnW8iqDVrauRE82Q4QUTQkKsLodQpauk",
  "key24": "aNuY1ha2PvVRyjua9r5dGt3GRyb9jAxCwoWvifmCeRB3sohx7pKnJdtysNm8C2HAZSxFqZhA3fvdLiLLkV7sC7D",
  "key25": "nNByikHwurpTeXri5UD39AMvwVwSGFXp22bvBxfj2PmrmqZpjVn1iEDKX913j7qXJjRSfC23S8uP5TZrgLAA72H",
  "key26": "3jp9TM3hK9WxLJTZy4EYekMjv8odMn4m47zcAZNYfZtaFvchVEjA4GTTqVHtRK4PNnSU1PtDrCxm613UYRH5fDwK",
  "key27": "5oWMe7vJthzf98WmfTwGj6NfQp1BM4BCcGMf8kjTCZFZZxzCPbWKRopeGVMhPY7eb18BQg3M9zn3zUfhHLSg4nMB",
  "key28": "2gQ2imPHQNrmhQd5nN6hVi2qd2ecRC3RwRii4zK5kTt75jhHPWuv3VcwasysantatRCcZGY2QW6wyUEnZ5uky1gw",
  "key29": "3rJQxoBoYn6akwFp1xofQT8dZte3usPoBZtpqg9EHGA3XmQeBVr47mo9Xe6PNGZstXFGcN7cDdmoyRtGKef5LpPd"
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
