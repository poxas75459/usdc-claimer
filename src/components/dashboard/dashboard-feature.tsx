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
    "5kf8sbiDMyCVXkJBCei65MV2rUa62eiaPxa3dx6kXusyoqGoJsmfUBhia3GU3MB3dvHiPpUFVL8rHcWjX3apJbSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38B7FuPBoByrqhXomQzYskk1KPoKwmnWgptQdeXiEhdpNHKn2Y7RbMsaXAKcUyJnp5qpTnpGxrLRYPMk9qR78phZ",
  "key1": "3bZdmUuFB9CHSVNqvJKVY9X6XRsBuXrBcpU6gaxKMEtTUaYaQoZ1QGkXTAufvpTQeZhB1V2Cdun8anDNR2i5DgK",
  "key2": "3FNLpBx6Lft9YpQoBrRridfozskQ9YABuCyt3TccdduTtSDEW9GRH7bFZpvST2MRb1eScEoLw3RhQArbN31dScxm",
  "key3": "QJDcPQtDh86scK11cPrUNSTWrosbYFWgih45XrmuzPHUPYDbmAxPb7MSsuK5D5a9BWcEjtUWdiNSf3t6iGpMki9",
  "key4": "5Z2wz6BS7edrthxrKhyu7z4uHqy8j8kFx3zhmxNmvJ7Fu1opqxw1FTNsMPGnqxWXLLjDVhpwTdvU2pBe8y2ZRCdr",
  "key5": "7zP6hmiRQRqkM9qVf8etd8C1GZ1YK9k3VeSRFPQVYYbtj9MNedvJSxaeYtsgogWYo5p2TQt8d1GgcWD1WnvMBYz",
  "key6": "zcpGvzZs7tzijmvhdfKba9bMrbWxbrpwfayq6zNgGua8ez3gkLrjwyVXEYcfLwHfbJrsJNRvT1BzayaVuh8NNqj",
  "key7": "2FLw9s25gEKXdQvpKEDi7VfJo43TDwBgUQFTSrxdoiabxiARkqMzEE9eBZqSaxq2vkST4zXCsqkCBjgkhXec8TBe",
  "key8": "2t1AWKAHMGAPw2N6GKGGVs3bMEpP6muWCG2cgjxKjW434Zuvnb8mo7ZC25pL5nzLagp4gPFpK2GQNbihHoA23zhF",
  "key9": "36Aui19LRVjyjo2ZqNbJmH7BqjWi9TnV2VMK6TpUieCGoKYqLFsPhjCfbARz97rswaAwdtRNKde7iPbYQ52hBqE7",
  "key10": "2F9JZT5ntqm8JdEAgahbtfKbHRGoksnGRBr1bLxSyTFtCq8esLuifDeezzibNg2fFtT36QKvNaE2Ajs6bUkEzLEo",
  "key11": "4777HpWsqJFmfC7uXqUaQxbNVqLSeh4yUoNkoYbeKmtnjfkR1QK21h4pTTBkpZCxjmt7TdfHi6bVqXN58kG3B1zB",
  "key12": "zWJsM52Wo28JMUFt6LxxwrUeWckkZjHpdRvgUYo51AdDsoqpXDWhvDSJ3LYk29kZ1RMhSAKFS9zGmipM92H4MJo",
  "key13": "5NbejzPbZAnZVFcztGvgm8vSkWVHifCUNDFTBn2KubxcSDdiZ9rGE1BWqGinC4Sj27XskR5mmP7ALb7LSozThZKM",
  "key14": "3t3beT6hFiXUyvirBQvPgEUv2UKF5ax984xD48ERoE1Ais3hYxFUyy3nHsERAfgJcT7JxmVoi8FNjHpbcoCBevs",
  "key15": "4fnBqNik1TaLHsTdCLp2ycpLGGpQ9Ba3cmyosYM1CeL3ig8byzUht8iSiTFjqqARKQJufdjzEv7YvawQMU5R752o",
  "key16": "2pzyMwToL4QNXokx9BW2wwbbnSaX8dfg3FjWdJqc5q3WJ6Y1tqphdr3CKUan2TchU62uszVH2Vurb4PVeoyPcJJX",
  "key17": "4x9AZD5DcBQ7bn4ttGjTo5bwDX5UCyoWqXHTde4TAvNoWLyXgQc2gXwJ7mCtTbqUrGMdhSEBvWN55cZx8KcPNYL8",
  "key18": "3WaVbAubg93FVSkKqboyfvXZr7GPDZiCBxnnsNdqj8HVi3v2XN8pwvY9v7gttSM6xBFsUC1DR9oUiAZVNWFs9yd1",
  "key19": "3AE2pU9GZrDbTs9SQ42Buv6XB5kDz3XQmBarcb89GeSP4QSndGdMzeweWz6ecSmo8ukBKpF1fiSaAo2sybYekQjo",
  "key20": "25U1TkVWXe8vP7Nzmv6GYr7YpwtwHbWpzfVwc25A7nFUvZVrpEehrvntk9qGb3ANpeKzvtHjzzphEd4VVrVTt2jt",
  "key21": "28QhnNQEEkm3rE7Crebs4ktzXYrCP2CBsecLAMcZ9ix4nRLg31RxjoCKzBhTGeLHB9fLUHoz54tFeEffpLZUitiJ",
  "key22": "2jU4oei2qAJQ3htGDVLBBWfjk1onA4nbLAHXyLu1eMi1tGy7qTjPEAAp3nvKND5QEeVsdUs61SwAzTkKQgk8TyFR",
  "key23": "22oLCwmH8nQNd62srsZcuqUFH2iNbeGypNZ6x2pNDBAn5Hrraz3WZfaLwf7Hgr4Hg2JnS26jnVRdv2cJmBxnUK2z",
  "key24": "5J5szTZcVQUzjNmanzmbD8D12GKVixWzzG8Kysyd9tM81hyNXoS7JBu1JbnM3yNcPtWZAePQaBfhz1AJya1JPkre",
  "key25": "5ysybZBssB9d2gDiZQYdc3F5BMZUzoCBMYB7wDoiqTAGuHRYFPNy46gvcCUYAuzhXHgc3kxcbFQ44CFYnS7JVLDn",
  "key26": "5ZmV8q8sg8ywerGrzDPqTAa4RdzaMn1hiWsEi22xVcp2ALr1FwCcNTg4ejfRWhVoaisT4qazLuRNCFrV8XuwU6To",
  "key27": "336Xi9x4Sv3416sKfBSkLR5pq3qoLe9u6gjDGtZJQ2sbajFTibN8gTsPY3eNtr6dX9kcRvqyB6XKiD27XgkdAKWY",
  "key28": "s2fvLCjvRVBE8LU6dpXDyxYdJJKXuxoRhziP5uxjU7GTKYZDuY1vVUBqeA33mvuGa7MVPm2TLMBGLGtxCdJPUNS",
  "key29": "236kTWkt5Q4dS8UvTPbJFzBUR3jT25LvfNAmQDzzGAhmeShkqBfeGVmJYgHdkABwKJPBrTAfL6QZc6iFJcphRe3G",
  "key30": "32akaCya7EGM7EB5bR1RkptWqMe72NJgWuXXxkAwxiM9rv8wyqsXCG9naqGAoFApyfBXP9CZandUCaNuQ9usfERj",
  "key31": "2rgTcTRXpJ7RZYWc3eMdwQxaYuzh4wR5KxXgeRUr5Zax3pFcBwLVcnchW1xjoV6yeAhWTBQEyvoLFRjgzC5Uk9RJ",
  "key32": "5Enaq7c19ndjhs9h1HKyXngoH8sTSyTo6iiGVUfgSBES8MQxhauTUVcftStu5YzgWEwQFiE9HQD13x8aqYtq6Fs6",
  "key33": "3BRn1P3CmkJ9PJB583Dz5d5tWVCnb7PAvS9TkgJbkE1gwHhvgbGTHA64tsTt3RdCjQn5zPKgAchNaGCqJx7Ktoff",
  "key34": "3DSJ8UKdX4AZxBVrBQ1Eke9zwNQrZcGfdnUviq96nnBR5xEv8bzmPsVvVwaZCexoMjbHst8Sh1K3uLxH1irWPYzx",
  "key35": "Zv8xRSDmpFaTYadeShn3qUaNJrrEUaV1Qm2iUfnrcx4W6Uz1vf9bFT2MsDR1FHNKHkoFTgEayKr6sGbnDLxxk9S",
  "key36": "2W1DfXoP65KpLSzrGqZ3a6DsxvJMPqrdJyXZEiqNnQm1ppMpTphBp6mdeY3NGjbLB1qot6Cr58caHnUSWUcgynKY",
  "key37": "5CQTfPbEfYwymqi6wkL5XnWKLMg9kGB4Hpn2Tn2r3VQjHbPTA3mDrqFNhTtEkiitGL9sJm12zM8YiGSD5TvrqVkG",
  "key38": "5DQ1kEig4yzhzuJ2S5K6uj7VaJzKHbYFhyFNHjP7q3mMvXkcoFixhCTCqHHSwM2BNdqn8ZzC33tKby6Ansm31aDx",
  "key39": "5Ju9VraZdTrahdQcMUdmqdkpu8cCJHcLA19dHopz1F3AKMidMjHkuxwBMEUmwyUF2xU9pGgWhsxGFiVmtVr7UQHj",
  "key40": "uV2pETKZRtW2kz5DGLwvZ3e6Pjv3HXBNw9hhoSy5sDjn3daKX46WbBV4XLbkvAwoHUeVY5pycVPaRBkCCrWs8de",
  "key41": "5f11VFPmCVoauoJuM5frRkCnenXURwsmawYddqgPQdzvJEHEhyX1aJiao9hoW6d5Csxgz21fuTyGA8Q39qMskWJn",
  "key42": "37GUhUWQbBYRuESjUtC5TCmygLrAn7eBCP3EBPz9h9B6LUQxanG6AufHnVf4hWCeZECe2f2R8U8gyGNYRhANnSjv",
  "key43": "5gvkAxeqf88gm8QU96T5dcYw4QegX7x3JvvcfwtjyMkRWtdK74XphAaFHwM7XYBFGHs128TLDUf4UuCRSe3zS64m",
  "key44": "5GtKPUSqbFiBAf7cTbVktaFWjpV1rbriUV1S8jH1a3iwFxyxci4rwAjtz3fFxRdoJ1VxtUP81XRHM77VR11d4mYC"
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
