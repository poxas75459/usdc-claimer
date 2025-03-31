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
    "rCvTkZmbuvUjaTCC9rr8fMS1XE9TsdMzyqKffiB6ehTMvUojmSMYbdmDVuJXjkKhNUxvEis2Y7PxuxbMw5ut3HR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJsV11KcKxbJX7xCsXcnKEPs2mghcy2UMaVLU12jBTja9J3LvmtL92uMPQp8hkAqJKWCyRGW9Ev77ubcdYvEnbq",
  "key1": "5BnQ49ZAQ4PwEGYVb2NRtKuGSosdsmwc6D8auWBjeo7SbFdGnGEkfhngybFKgD5bq9synWkCzuLWShZsVCm6nQiJ",
  "key2": "2qabyMxhcZP75QnNYLzCbS63E358npqtug2yHzQzsStjjYJhFkBRZmdoA1pM7HgRCKBJ4tdcKht3ytGq4tZeF3w1",
  "key3": "2MfttuHxrdafC2dnG16qQqeredx8mdC9GvsxN7bvjZHPyzK1pq6T1FLbp8L7F1iYBGcWDWxYaNmZBUq7oHEwHwkz",
  "key4": "3d5w9oDJWArkKw2tMofvcxpjdRGacnGEHqbjVn7Qx5RRZEYz8H2JXFy2dPE5DtfkGfnjneDaUpVmJF98ZTsMAYqZ",
  "key5": "KgDojYoujfcKBwrpS8ykHru7RbVCjqJWLPUGXKkSAmgxqAKQ45rdWRVG9xAbdrw9HF27Y7w3UGEFtaCio7XQG2a",
  "key6": "4JNbYB9pxZ39eJmNWorWzC2T62RrEMvgeHver6CEn7Y96tDqiCZJZpF9ucof45WKzkbcsyeqrVYbjV6mP6MGkoRa",
  "key7": "4xy1tKb8JNgAn6Wqcuv6QwsP3V6R1X4Jgm2HrJN493cZz9Ep666UjfwHTm6Tv7sxw95BQPKaUfjqME1tbHyPQBHv",
  "key8": "5tDwjtc4KHwSFTVQMPRPPCLUpBdThfYBqMiuWoGyhHsi5VgJXmXDABVzzYe9gf5nmPas8qb4TZyLmfgatAisvUKv",
  "key9": "oZgSmtVvh6o2pFWazzrzSw2qnkP9HLBiMQXwZrWriQtAE5xERzoLzTHvLPLaarSwnSMx3KzT6gx82YpSocxAPou",
  "key10": "t33h3b4KPBvyDMUkiH5FtTF8ty56wSJfSigxCS9XAGcZ81hG1tc94A1ntSH7cjBwm2tvLXzmjxN2cMPUZa6Wh8f",
  "key11": "3vrBHnXN36ZsnTCH4pGypi8athPnUHXQg8DcJExkhmJsBKUcXvSZHsW3PVoxdHEjVhjQ1zsa1Y4eS68oQmUGf48F",
  "key12": "5n1dmGBSeR4veePyoZ1bEzWuegqzYVaHS5PEa2igFyKRpxkd1W5gUst4NUsivxoWvCkbQyhAFZZ2Dbh23uYsfDBN",
  "key13": "4H18nJJGFSTWB6PTXEw2EF4XWSGUoMCmXUt43C3JA91d2NsjyKS3KevDD4wEEq5h7PwretoMYqwQZcqqWDe5qMvT",
  "key14": "5tX9wBtVsEom4VoSnBsym6R17GfRpPBvrDTyM2pACkY7U4rwmU4zJs14qvKF2WCqZR5invAMaWMERotdqjksBcrT",
  "key15": "MeT5WMzAFnJbXTa24Mjb46QGAmD36EfbsCsLagMvjUKTEux5Avp8RDJoXUL3WwNQraJVUNd8uqTqxu7wgwD6SMV",
  "key16": "4BG8QcMXghtCT9V7PLqpEBXGRu8HuufXdFiQv7ThMo6Wt75ZoSTepmH5qS7zQf5CHmZRg4N12Adr9TyxCRZU8AFe",
  "key17": "45qMbYMSVgVtP8Ynz3wLftrmfZEJo9yK9gy1eDoaVHFm6oyuyE6kVJ6vAUBba8Qu2NhnRxQAJeKPSzXoZoavHHpe",
  "key18": "U5Y1DjS5okWvSBABrWpLpTcyvZCpJ26zEVehDsZxvVkG1ic357toB3YbneWqCbWagCZ8bdAjRfHA4r1C5a9xA4H",
  "key19": "2H24c7tEBoUmk1kzbWUEqAXf1s51xZbzXy4Jq5GYoi7q5uvcLVTo1zTqBuj9MXWHUKoHiadMWozTjZWkARmwmP5u",
  "key20": "93fUdtLMJGs5Gix92zp8upNY5eNtWoW6A88qT6Fb71V4REgqFKgzXTr3kepBMSnck6FqeoHq98ouLsUYaCSZGUj",
  "key21": "tYn94cKcLCFsk4B1VzHKNVGweMM9otsbYkH3hwjj5GY4hmbqHt4cos7Exmvt9raPp4bFkmmxSNV4tRgJwxxhW4C",
  "key22": "2nhi1hmp4CT3zeyJ7GQJVLUnjFBqxzWMkw4E98YQ4JuCZsx3wK9QqEP88rx4LPzXjvVvAmpfsyRJUSppdgBTYU83",
  "key23": "3zxgXr86JvYPoyfx7HwEfWeA4mgeEgoJQrhiTGPyETdZ4vrAj88fVaKnVrL3ARAL66ZMhwVbk8m5vRu5aKe8moLJ",
  "key24": "sHfnormD8ykAS9YEX3VkLWwafXmkSEGYU5TkdstXUQjbRp1GCZU1VN9WYQY5S6xJj8sAjGfgHrjXNCYzJoq4Zku",
  "key25": "64GMVSEZE2cKTgTUMxTSXwPSiXyzGaJq7NRUtwZ94X7jNdfpFFRPYmxC5HE3FfBqyEQSMLfYmGTHJXujBchQiaND",
  "key26": "5J2278uZHdVBcijc1bTAuSqAjBZs8TzyGPuJEacn54zKnoycvuBv4zf3eiKCWtXkY1YZQwkFQ2dpMpzotQFfNvqf",
  "key27": "4CVYhSKjtoKWnVFbHcbNpZQMX8fjxym5RC1CGeDuYnvkpGXx2oCD6q9WEByr4ndNiXMgCFvShJMBKUZdC5ZJCJ9s",
  "key28": "5TimH5jTQLVi53rXCr7ZoJ34dViq5d8XJSSuGf9Aq96di7N7KCs5QjgNsmfzyDLsbw3CN9VsDpSLhCKNhtKsZGWp",
  "key29": "31E6obCNEQZyWJeEhXKiudRAVLEUNd5rsqSTGbWWhQ3qtFhNda5LbvXVH8zbPtzQ27UnxjeP6VfjWaSNpjpMu2ka",
  "key30": "2YvoBUubQuYHYC1raoRRFkrD2Ak4e8nszoKSHsVT3Tx5XVXW8At64V3EJU5L1MSjqkQTLqoy4V2rnEqAW5BC7gx6",
  "key31": "4ZR3aD3cRrW4HcZYa71UcxWfaavkPBLi1ZjoRb4nv16fcrXw9BmDr47TE73hYmwB3S2tBvkLBNfeHMYt1HCdRbtG",
  "key32": "3TzNyHWf2dGMMqThbrtq6niSn7X3XCyWmeue49nci8ANvGYzWYxha7JqT8DAn9V7cw59d5zaWAv8nt2RyF9sW6RQ",
  "key33": "5ThAUtw5EXp6hfdECGYZmYoubZsT61cng9upVtduy4VXCg9X4sD5vDPns3tC5QjAZk2wbcgGhUBBapqyz2SK9awu",
  "key34": "2GpX59CPkeHLJBhucCKkEcJ5L2scqHixfJ55LgVDxwWk1JpMCCPgKQtP7UHteQfa9DEXz8FT2xVieDaJsAd8QChk",
  "key35": "4HVeVb6gFTPsGERTY6Dug3Km2TtocBgajjYT4YjXs3ZSAWTus7hrxnXbqENidiHUNnNpk27TH47XfhtiHZCLdUDB",
  "key36": "433yUez8XDSZHHsBCkT7uduEe4bmoBt3pAEXMEiMULZoTDk5K2wzfBE1woBrUMmi95zjvu35tvH3Qnpd3DyUoNHp",
  "key37": "5KqJcpPS3e21UipAXmmW2oLq5cvi4amUNL7BR1Q7WDxAo3bVU8pHAfkKBvV6srwjBM8ovLbv2NkjZsLR7GNCUKpG"
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
