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
    "2dyLfJoawWyK2jYG672MNJsutQKy9ocaJHiaJG6R6LavYMnFXFSM4P5EEkf4SUTFgfe9GEhA6JS1seAUHGVvABss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fFVDVBJ6w9sqjjjV5sHKhGQ97dAv8L7LWxop5QmmnAofCQ2xHDUanrhT5n3czJ2rZdmsiQUsLJ8YTERsf34PKjz",
  "key1": "4CYKZdK9Rzb1HwycjscZFKpVomqrcbL7EWC6uEWUJqKU7NwfNiS1EbUuKT64FZJbPwNsd3hFVXH8bnoey9aoeCmV",
  "key2": "2yJeA14E6JmmBvvKbxRbyjDuh6sKy1cdJdMzUcmKAiMLzMYi9JVuqL8YW23ChKBjz94iAUbT3AQMen4dBK9UQkNH",
  "key3": "5jxcSAjoMt9j5vjMnN9CdsVpnYY9bPJPpcckqrwGXYRERUsG41Boe5dEezKZk1aUCzeDS2u9JcPR8RQqwj4Dms4c",
  "key4": "RMBzyghzAckrZuW7bGc5PgmwCeCJ2eyyQMQHmCsb3vPM44xAjKr9WYFDrZx4rC5xDQ5ZYGQEgmaRQVwaTXpzjhT",
  "key5": "63Jb1WibHdcdEXztqETEFtBbyNVKKc5JEWKqhrqVkwgqMNsHfSB4LALaajXm3KeuzfkvB11v7VSxs4qcxLjjNTJS",
  "key6": "2dHnBAN5PH7fjyTpXUWgsEo7LezR825e7A4Fm3hYuzRcAWsDucSa7KDuAZw2gndTXx5U3HVUCFR47xkURGXhoLF2",
  "key7": "5zuR1uHvNeAJxTjdaWENoLKzSX9FffuiWk6fAUv9qXDGpAEF9RvgPo4qKaqaGPcsKR6NqQzgDmmJRZPWdSWfsXyR",
  "key8": "5Kw5zeEbNkL9JguA5zcicgaGhdc6EnC22tcPhEjV7LvH2bUBe1toaNvBYE6kXafWm63dVL34X8hqXq5AXGkTu3pH",
  "key9": "3jccaMgJmwfhA3XfunQBzSMZJfwWxvRjzvZ5G3zvhJjcSQp41Uzfc1ckX78GXaWXSsgmwvWSqZkae3xM36CVHLhF",
  "key10": "4ARFaj5HLq7Km5xyUMHRnUXTzHo68SwJ3jBGowx7sHPQchTWRtiHoBR8XSD3kLHHo8NjcN6X9XKVV8mjmivrwhtz",
  "key11": "4jrd9Gs3yCsS8Z4xKMSX3QkLjCVJmczYYrB25HEjtnVotcZjzZKRbch8VvRqKVjtzT72JzTvnYWchA8Z9i3Gvmmy",
  "key12": "2VGsx4PMqakekDKxjNXAqMh6qsBFHVW1msoBXwmYqywf8Ms268UKHEZ7APWt9eca2g3RDe14hevpWEennTdBE5vQ",
  "key13": "3Hyh2jnpqHYkADPR1966V33zWNjbKzVW8QNE2EhfydjkydJSD2kKtjKogD7E5KpU1Pf9dTMZ8KcmhNosAc6EMwWu",
  "key14": "2wCDo97X9z3aY7yze5mUjz2sDiy6oenw9Q3XeGhM8Tdwe8adm5JDHn3XhQvrPNMY8CFrjiL4F37ZFy39mPADXvvR",
  "key15": "r78vAHjXe7dYq91KrkraHnPgqBeUVc5S1mVL5R1eZ1JLitEhBEacHynij7V5W6vJpUV8s2XKhea4QytK5jGZ9rc",
  "key16": "1sFANgJCLkLMqnQ21JC3UxsYjNGzA33ofZ3Xa8b39ECNgLPSZGJ2NmBC1DdnLdESnDRtmdYEiRXBJCkYw5TBAyt",
  "key17": "2PnYjHEReQsTNhyGJahkCJaUdhxJToq74F7aZNSPeZo8NSQTqmMRVWwZnk7aMuvXEU6xJTzswEVvtL8qTqNEpDWH",
  "key18": "3JbkKSFdoFUV3ND8NyDg2GFBVC3qPVs3VDejVWZL1EHvRDkr2jtHvbqW3kM4c8AvUWPRvnQcye5PqwkYNbNWczX1",
  "key19": "4etqb1YTv72vWPuVdhG9mgguYRoY8zSxAsFFK8EpyKu1rNVufB48aqcJjMtsPtDd99pPQR9uBoT9CuadAtnyp47U",
  "key20": "21DhPUt1bYWpcTDsfC2YCnz5kyyUJrhmuVwCMuSipPx9VjNpMrVLZ9j84dQ1zbT7AmLHauu7XvqRPpi3PnYwPEDg",
  "key21": "6554aE5TRancBwMkYsQGQ4GNLTN2N2mzH2cRkotijc9Q9DKzumHec9etnGCAW12NwhNog2UFLfKDSzXyebKxpo63",
  "key22": "63LzspzWPXVG7vdEfNezg6rWWw2LXh6LdEME1qbccP8zoyjbk6EgEzpUwQBryztQdAco1MXEa6DH2Em8vWWWr6z5",
  "key23": "5nzwMibHwMjAan7GamGz3raxa5LP2xGvNHAqg7wpTjtAMwFUridbX7WbuqsMRpkjm4q48uMdMSw94UVMYgvxPpEQ",
  "key24": "65SDd7vPNf7NfpMypzwWdUePsgxP2WZg76NrMBSFFnWAUu1h5GY6xW6QQBLPWqiC16mm24NPccF4Ag2Pqvg2FfSb",
  "key25": "ZNkmca1QV49qAHhN6R65fcKuqZ8wVxAPk79VZY2Pt6P5934HSyAAanVTQjnKyyMAibd1Ea4GA7BMbiFLNpKv86j",
  "key26": "2xBcLKizNs5eFGjC5eg49Wa7XYQ9H3Ku6tQRB4HZhTd8QnrzMghp1ViJHEygX4rP7PU3fPfstNVnnzBWAJapS7oz",
  "key27": "5LcUiFpCHy31jUGnktvNizBvLdQ3rKr1njMiT4hkrbqgYMyxt2ruUFYoF9apbmJ2iNswGUYTHBvBgLKriJuyuRTA",
  "key28": "417CdQnZUPNh8LP3pnxfysL5URPJgVqZfnS9aZErfBXFdXEvdUXNASJcQAAfUvNc8dkR4XcEcQJDVo4Bq7UpUXbK",
  "key29": "Bjmcjfmpimv3fRch5HQNksGTQJ1xvZN5XM56Lh3snGm9Lo1uEMQihec4xy8JWWHBaR4yRUxWA3E7q8HUd4iCLkq",
  "key30": "441uHuqauBV6Jgygy4zQEt3iSNrKdY8f5dyvRpBBsxq4SjZFBPXjeWiirC5YAz325gqXS9PoSPaEQihAKHHCBLdL",
  "key31": "y6z34arbS3ppzWQ7fPksw3i5v8JJEWJodEsxKD8JeDeuPGXeKneXchTaaS2EF8YgmuCYSXSeky53WxB8G9CPNkQ",
  "key32": "2wCy2sf6pgYN5eUf9crfEVtNNze99uVDgM7tJ2pq9jwhpgXwy361wN4EoA6H61Mg7eP2rrVzZp9DLriHfvGC2pTu",
  "key33": "5SzUE1KmaYQRj2Av12D9cuEjmVsUmad4pLheFTX1VuU5oeGu7SSvUVrhXfPpoY3KTiAhrUZ8DFUvNh6VZ4q8Y7Bw",
  "key34": "2Gusu3eYrGYPquh1QM6TdCiEDMuF2jMDXk1wM6trrWWhxjAtKbox2cJzm9JThFpKRkHkgBSrqZo1tGtbafXmiVRS",
  "key35": "5R3rYA57bK3gBDQ11hyUQhub7mtq6FSvsvsGxw6wLX75dJg9FJox654o2sC7KWor4yRFhzA2ZU49GYkqVbKuqdre",
  "key36": "5YKo4kNqCsoxyn4jR1xNNNAeYBFYPwVatcx2nU6fCSiFijGuS21MY1VHoZcmyFgLFbqPaXfMhuDg2cwbZQZhTMxw",
  "key37": "2Pb8CDDJsdMk9RjQ47L2vQZc3VPAT1y4cGWk4z4EW3cDqSiaGqHapbm87LrfxtUfc8ZGVJxkiSwR6jyC7YfQeGdT",
  "key38": "spWkX472ExEJFoyk1UyVtaY62W31d9mN5JLJfpn6UQoY1eUSE7LCPSVYGdFFcD6aLRuyXQ9r8RhtfLagt23tU4K",
  "key39": "3DnEaaFRka8rtS5TBBpbQDm9SYi8wUoJUHUSWeV5cAjuF9Cs7AzVTcPdzhWfvgPtmssGR71VTPbHJVB2c7iRzDwe",
  "key40": "3NFdsDrxVh6We6YF3cGasNVtMzKwgz6HSBrDCFx5kFHYbzgfhAizwEfkB7PCtn3K5faz7kGBfNoKuDhFxusHhfMN",
  "key41": "5GnW3nBtS8XhG9U8zfbkq6By8KpqH7TwQvqx6qCyWSfbrTLVb7Jgt1cqCkcMSwNP6Mgeja4ndJLJBTzAPoYnzqBF",
  "key42": "5TZW5k6LN9QP4LEHadkNMFPYANM5wdCnkctxrfoUxdKiqz6wgFj4PDemAwJaCPq2GNH2vE25MAJR6u2jLQae7Wqs",
  "key43": "5T274kQfuUiN3zXNCBKoS6TrRLkN4QyzvMM1gw8VLKVXJxyYsLZt4pK7hM5m56GCUwBbFd77irC8DMGe5g94qiGx"
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
