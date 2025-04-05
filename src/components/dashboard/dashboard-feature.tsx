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
    "26uUFq46f7iZvyTCdpiGG9WpKP5JEvcJdftAWLZgjoWjgDLGwTFomiMdjqczic12YchXpKJBSg91wydj34cYryrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QbqSThZxRwGAvJ9ykqtLZbzmSR6e5UdwERRoZV8UW1ECNLLABJqTzoQhseWGLoMoBGHMwViaRAnYUkJ9D3mZYCw",
  "key1": "5UzAFDP5PxaXsQMBaxwnQ93oq9nB2FqpDFX2VVPnEBdymssKNbVgUz7Xa7r3d37GaKK198awV58rj6dhA3Gz1QW1",
  "key2": "3RCnDSSUTtUtkk4sVfFBwE7y277eZMiwmpbWCrcoNDqQkwHaMTH3FUCiCD5wJ6vGgWoVawZPZtcY3X66a3qXYT2i",
  "key3": "5tC6iJhMKkH9jKhDksHZH5kbAaHWnn6CdPMqZK6b2dmW8M4gZKjZTt7rcgZrxbgJeVGSNv7YYK58msc7xCNrmzyy",
  "key4": "5Y9VuCs2Pg2RvoqkPfokSJgYcfSYoEXN3pGwkYkiwZ3WJnA2akd4mkRm3JFqpFkP7yyKbufq2EmfhBq6pJeu6unm",
  "key5": "3QNPLo3L5L76HCusgBuHrHVWhi4T9axHdm1NTukzmaab7XA77mfuKJV7hWaJ3SvuZR7q3bLT6bSPc3pticYiaboe",
  "key6": "3HGFRZNby7y9oANUXKYXmTD3JXRRUW6Z3Jjeu117k67AyVEaMv7t6iMEHyVMELUTG54xqWdFtrLrSPwkY8NC2AW4",
  "key7": "5Y4xvDakWp48yxVBXGkhExLKd3sVJ3u9fEHSDCJM9CjmGGBgBzByHvcZ2ncd3BKUhzVf8QuXD5MBRcqsvGZM9PL2",
  "key8": "yV6qszvoPzHVtSdrFoDyM2iBo1igyzSnLym5FwR224uR2kWvLGETPLXeXLzUL4j2iGHTUf72BKS8rXk3CxUopaW",
  "key9": "4hArojgZAt4oxz3ATn7wrjZpnsTyHzu3pbSoQVecBHAfSj3MUvLJFVhXsowVMoE1VDX8hWV6Un9TtLyuGu31PUZ3",
  "key10": "2jXBkEMrKRyvtTf5yiBwkCdUcFkyXFCrCHYtQtbNvQb8QbztunwtxjTydia2mRdVe3k6M5HTaMmK1bm8bW7fA1mU",
  "key11": "3gz6dinBwNdpWRrdjGmmBKiDwoVyPETUomjcmkuf91hKv7RMQyNv7AGnWdHh1AzM9DZ1ZTrmiyaxjin6FxiJjEe9",
  "key12": "2dggK4hvJcBgMH99ETbZwVuM18gX2ZW3ZLVWtU7TDqfQoANkwqrzGYrXD9sdMTQ7RRLJ48XW7rTkqtUa4BqZGuBn",
  "key13": "J9zbeqLkAgfyNykqosVLmvD5qwtvZuarpSzLRWChpUmfZCrF3jBrSbJ7QGLB7puUYzHHV8dE96NJRhwJPAn1sg5",
  "key14": "5BFuzQ5GbtGXE9MrYqau724PuC4a7GLXnXwLZn4HcrraASns5meFmCtFCpmWRUtYi4LmxE2425kzAHpyNyUfSzTF",
  "key15": "5rjfjW6PHJ26X4kbV4kNru4PTCBW5TJbbC634bYpYbHgmuZWUav38YAgLLwkbkQKnGhzUqGRM4H69eWoCcUqQPTE",
  "key16": "5EypZM4MwEQzLhJWtURthXGhAdFZcDvG1KSpYBb45xKPGyYuDdaXiq85YmYnSQNA54geoVAWPMAxiqovPZdajbEr",
  "key17": "4KExrfqmptnRNj4NR1LWY78w4hA9jkELUSWhpB5TzqdmppsjyRtDcpaPF4aF88AXjfkKLxMgU7KmDcCLUDQF9ySD",
  "key18": "3vEYNup1VZfGstFs7qSDLdvPiNHw9gNueXRnfr948fsMhn62bsSHM65nDxuC7n7qnxstUtBViEsTCwjX6RfrJFWc",
  "key19": "5sRyWp5U74kPqQTwnpJPwbomAkkHctcDzudxJWmVmHrtvZuFxNiwHF541YKRQfT15tNDuiqV4r5gZnM9kz5s7nr3",
  "key20": "u1VjxDFnppGeUkXbZXVDVynobQUtHcnz9RVPUuhbv4hSyt9hDUG52npM5HVAegwntyc1Xz18xBLRVFDUgkVK47n",
  "key21": "NX13iesq6NBa4tVVJBGRi2jTR9ULMVT8RecK8a67Lq3gwbBe3y8eUgptmwtoaezjCAiEf15PQHcbpJRTiQtmrqK",
  "key22": "2H74SdmVUedr6AztZtLPmHtnJdCtRcLMANctuyXzY2fG4kLXgMbZMp7YaGixzhGEm6KVLRAonTumf46X8YADiGAz",
  "key23": "5ZqoQzecaNs15hHhmXbmnD3AmmtsQsbm4VZrKTRotT4WYsDPQiehPeusPewhfgL5G1W4jvmdEfUxxCjDPJ3qE4xT",
  "key24": "gHuwJAEDTaSvdEEVfZZzwLHzZDUh6MBvnLWmsczZ3pHXNU3dG9ozKk2oszPfVKGLGR7suhWeCvQnZrou86TyEwG",
  "key25": "LQV7F5Fa8NUCFTx5EkCxaW65dAaaXs4kXGKkKxvLztNwZLKjNzPV2EhSMzEjbL7WR4K8QKwWXvDYwvU77KSsq5d",
  "key26": "43JYDrnc48W4w2Z7GgLjjBnwzbDHtubjaptwRnnj1MZVRdU2h7Xg8jsCMAByHm21QV4YLY9skC6kihTT2Po21LhX",
  "key27": "b4rs8eRsveDMvzVbbrDkQEhbfYtnNYCiS7fXvkjAM1QgNy7erp7C7tXHHYSYb4GunvjCPX8D21qAqAwgebdN2hn",
  "key28": "3cRJg1sEgVibKHqGmGmZCgovFEC4KiXK9NYbGnn9ZsXFYBq1qrrnCXiADUk8ovjZJuoxJ7RW463q4RizgqntTdsS",
  "key29": "4nwKaSwtvHxGKnep2M5VwEnS26juZuMpPNaUAavURoRgAasy45HdcK7Kr3iPXG2Gkwhg6s3MV6zEe4aP3N461aep",
  "key30": "5Ka4KtugUsZiD5ootXXTarKnpdRCyc6pnk75nBM8Pod7hVTyhurqrtQe8HnMp4sFdNtCUhctvwB6vFo2UYQNDb5D",
  "key31": "25kBz6JWYeQ9Kp2mFrDAF36H3nf3r5WUH5MqveHHxdCdK4vcQARibW5TB7skDbdDrKNuVkahiRqoQ3WCB3dUwy6t",
  "key32": "8D4r5LEaLvHFYeHrSFDupWiU3usnVaNaQ72QcX4BEAWvGTbxh9Sewo45LuAheDhvH6XwN7pUEZxukRirYmTRAHo",
  "key33": "4km5NYB5siFov2EkdM1BLFM46YrBLVQndvtxi555jvrYNnbygty6tRaFuhRz5pbMhwabAtHk9BTo9i45jPvRaLhw",
  "key34": "ZN2He35Gz9yXcTXtMPCA619C2aVZJKFuGPH6i1U461bydnmSMLumfcvMhYYGDeiLxDEmD2gVGYG2UKqmuaQCZBi",
  "key35": "65Mf9KjtweyfaZwenXbuoDGTUAQYLVcocY9ndiAMpqgR4tkKDzJRnqM7TtUeBdXyG1uBbjaygZK8JvSJGG4sAoG9",
  "key36": "3ET17kDv1qSCwvmefArroLjQxjKDHV4vX9YFwmL19P7AcJJ4YibFgWXZ5Q2m5HUMo8MDmfuHVNoMDCAuZLjpMD9N",
  "key37": "5kBvPKqaSKJkSdKzwDwfGDH8GvJS8zS6qTD4Y4uUyPgoDHwyrL1WUq2UvSaDAw7AAtrvBHw5wyVDCrbKUNxYdciG",
  "key38": "5c1UVKyynrSA9UZyiALq9eD5vVU7EacaWADVeajxwYooz6QWC8kw57KPWXbDu4jMtjXPCgmZbYKTkk35fP1PPapp",
  "key39": "4gULCDrw4Y4M3562bxHQu8YbYrc3fcCfVvJEnr4qgykxP6UZHqpZcSuatAeXDwQEHkuGfvMH2zMGqAvyCWqzWERn",
  "key40": "3rn92kn1XFrSkTKaSo6ycmVyTUX2pUiJBbFzp3VJV3vLRNvaDmtsywjjoXsAvVtk4bnMCC9HJjLFC9dewtXsriNj",
  "key41": "23DeovmAcQZfos2ivXZVcsjShezupELsn3QunmBqNoGyKrmfLvhoq5Ch4uRtX2Z5ex3b9nyUpMsPnpSH1joMNQt7"
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
