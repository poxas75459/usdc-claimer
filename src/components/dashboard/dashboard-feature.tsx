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
    "5Jfv11vTxQdZNaZPwgH68pUcZpMcoiA5hsXVtaQbF7FzRQo4XdAjUq4PSDUf5vnUqDm1ViU3pvDgKJMJiCnFdqFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JtsiBes7nDnBGC6DArmC7HrcU9xougb2Ram1d3CR7A3AvZwN5E7wwnmCxwzDuaSzwig8nNsiDQPzJKtKhQ92gu",
  "key1": "4j7R397NpextKkDk3a7CxDpyasPhognhn5yh8W7JHsGVQ593z9zEBeM8D1yEFwiNdcCb92V95Eezur9gYJZFrqtK",
  "key2": "5x77o9TjFD4955PYN4846cQckMaC9aEm6DHvYF56bC32jmKVh4HWkqHSDefj3uEK1Kum5uXJZXCG8u5e1j4PdAJT",
  "key3": "5anwnCjMAmhCGdjH35KXofjxf747kV7p8F3EmMsAPXAptHw9v9g2v958614PjyY6z4L1v1XPRwaUrBAZJG8HDvQN",
  "key4": "4FFXuUCJBkP1pDgHYoH9JDBqFBkB86uN1MX91KBJaCq3Wwetf9Nbkc2UZQpX5C1ZL86fBm6ocp3uS7ZNXxKa7wUt",
  "key5": "5sVbZ9Z7ELbD8Mdm1kUez8H3xDmytu5act2TGRygCfUWLaBVGv3Hv9Pf79y5qqZwttFDLKjFQ5P99xVCjcC916ZZ",
  "key6": "4dFn8xQGsX5dgYMKf8ZcqnimWDLQ3WncCegN4MKDn8VzRTeytu9tmvm3NurwSCodcNUVxU1AGFgkr2dAK8kPpzmr",
  "key7": "99RnyiXpPZ5XomeRNYTyuPeu9rQuF5RnnCtb1rFJ2iqejKkiB3S7XERp9UMcsgHJaWTHx3EXCLHo3Rq7dcqt5ci",
  "key8": "35m1U3nSDz3FL7dXaUjV16phGoXGiA1MEAA7wJpLPBpHoxi6ijVb6o4T1Ts7DRAEvVXg2ep4hhRvFSqmCaE3mAdY",
  "key9": "3giRY7kWDAoM71cRotdj8b2pU4Z4L3q9p5pqCt3aJV2g9viy9QCTtapTtW3qDZWwc7wWovH8aCVWQJnLWGEsCu3H",
  "key10": "CjRvMJvEbbCHzEMLh6m2kdoNQPTMXUa8iRQTt2QBrr6XCLgRWDpKqbA6yJerz8JBuXadHUxxBizvXGZiAydtRsA",
  "key11": "2ZBaMSJqSCneKpZiBGSnQNMG6Caa3aqfo4wjfdLGz1MD6N2umzKwiZ6f9peFspAkpBJQSgzB7he8R5CoXtoXbH52",
  "key12": "AMLnzuuTA7pCw8REW7Yh9scpavmvr349B2qxhMaoBDf6QpmCcA8asHoWLEphkZH5C89Ar4z61LQ5dNYY5etiNaF",
  "key13": "21vQm5n66nBkX9WXjaKdpcs2oYw7GbeFHx9VS13UTLLcKDRwvFzctLSKWXt4DbtaVoMgqJLq8KCkWC5iBubVi4HB",
  "key14": "dauTtqkpjcVxR5d4bTUKaBS3Q5t9JaAGaVyCscxrusRHy8s4p62WYy3jiDxR9fS5uMVnV8cYqh65CHb8KdB96zU",
  "key15": "3EvMkiWshbGBAj1Dc7MZs3wFoMAynbfRwZJRd6FrZVCeEYqKkBSwbNyHxxNvkLT3PGk42wbnsEYAvrPWZQco2j6c",
  "key16": "5jVX9YLzH5wFyu7qd3eq29tvWbz61sAw3xdy6Uhpdh2FV74q6TuYmdxWGjWL8X5LF6p4i8EZqz1M8zh9grGsKEQv",
  "key17": "3FRgQg23ScnmmhE8bd4g5rdeW9kjMFTH31WSWEGAuD3JusJSCgDPo8UdEdyphMnMnDW9CJL98eY2yxwor1ZLy9oL",
  "key18": "m6hiSERkYSpLhztW4wLBf2FhX2dmhFVffW5B5HdNauHJq8Stsy8e2MQAxRyKeSrwtaPJkEZuu3XsJRHreA5HwXW",
  "key19": "2myDwsi7DpRntfo3GH4KZXsgPa91S9MnjjcWCb8bqw42NWufSzZQSfvQMMboNc956u6xReEmdMscPUgef2caLN5M",
  "key20": "4Eok3uBqTSUGmLhDrhmDxURf5JQEzctPBc9Y5pXK7mVHJpDjdP1FfKkxvUFU9AfdqCk2cmDY4CHJZNSEYspNm84s",
  "key21": "5iowmS1gvqYnfQz4Hb6LEUPjqpTNCNSFZ4k1pov1rKnSFcgbsK2eW4P1uZFbJ4uAPXtV3kSjwerTyh1Vn7Y8JkQ9",
  "key22": "4YMU3BPhNQxtmqyxAE5fa4ZkeevyqQg5GGCLjAjX9W8vCqmkDNZdftPHgUFGLPvDtqzz8DzrUtQyXCMXxrxohzun",
  "key23": "65USqmwUoPcDfLxBRzq4Qd2ZZSDWkSTgqQhxCeQFFR8XwSinf5z9m1fy7UYPy7W53yEKneQKy4KGzP7Qd1fNfhog",
  "key24": "3Ztox28CEnu17r4vEBcFAnW1WgAxPp73MVUTLaWqiJc2pR1ADKckAar9DQnZyekZN1p1NeK2anJ4jqCeNRRudjTW",
  "key25": "T1azvzgtkmJF5oQyHfpX4BLawC8g4XxQeE9v9q5NbBevQmQBVjMeJYAoJ2VsJVg8TGcNmNVDttJKut8ZDf23T5t",
  "key26": "3fKn5EjMzGUn5dcEzZx9tPBux9JywyDHyEwAXCLyoDFo2xK1ke96JG4LY4r9f6itkw8bfCtca3PWXH3ixDUARMhN",
  "key27": "3j2ezFDSBFwKQYHDTRP5ehKrnRAMW4CDmEJfaWp9CkTY2qVi7sEQE1anFBxho1yKqhTbDbAusgmVkwkpmpap75PW",
  "key28": "326PAJ5vJ2k4mHDHe9EiPfUJEwZpTbEyh7Ws3bayRtXMncqoqJgLdPSvDiB1USddVf4g6QCaZLk9sBiptceTdoK3",
  "key29": "48S8GwqG4zMaD7nVKaw2Ax6ZNZUbND9jhai3vmDEZLhgo1VC5UWBkTLKr9418BLjFdj8v84HAXYVcugWXhUeVJk8",
  "key30": "SjxynD7BDfghpDikJX99UNnYKykbSAvub1YFC3vbMt5EGaykGSEndZ9mTefTv35GsirpsHyPzE4MNdhCKnmRUYU",
  "key31": "4UJA7tPZ5EMVqE3NFZiPhvkeh6KyANXZESLZWisT1Yhjxk2tabH4RK4eS4HMABK8imTLtzzRHKjLQxZay8f3N9ak",
  "key32": "2WQW1BEKJ3N66p1YEscUTZhpZva6GwULFqYvtChZZzH2xBc3KzG3uxcTUk8rXuabfscqKNpCxkwt9SMhTAxK9URB",
  "key33": "5uNVJXU4CXorM2s8hnz9FDPhzCdgj8ErYHNFnfPZtemEttU7vLwPVJzT47bCxHsqkcx5KJXXGpVSmxzT4c2bNBWP",
  "key34": "5sCnsru8bJhoHZhYEJh3WykSqXZ4JaCpp28CLqJ8xE46Y4N6UK661npkCuERFZCwZu2XdaNmZTMSBo5xZcfGj6Pi",
  "key35": "x1EdudLowG1P9357Ag1zJkE6JYhjSY59kpqJ5P6PQtgoiRJ6AmuSxe8bUbFtKfF3YBPTQA7sKCVpvX1QX8KxgfB",
  "key36": "3vgDNPS7Bd5JpZyu53Usx4Rsqwj6bN5hkTftFHVSNt27hynkhcsdmGezz4ifEEPdCjW5bnGEUGsg8DNDimkxiXEK",
  "key37": "65mm1WF8DaNsm3aCxFDnCSTuMAGUa7sdZqY7JergsVe1xmEMHiz4arL8vaExh6K4s1oF3ioWrATSCKH4hWnxRTic"
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
