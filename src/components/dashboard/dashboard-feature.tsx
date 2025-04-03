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
    "5zvW1mzp89HPveRgfNyuZeV2AkkDHA33deAHYEGJb16hFemCD5GmpKoeg3U8a37J9sfgLHrG1rZHBnSYrmJvkUod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHFpNGSwXJuEDuNphqiHtMDSoh9Tt816kkfJFUsVT5Tko31Q9C82BscWxCSuPcnzcwzyNoofXrKM9CAHbfvxf2J",
  "key1": "5wu7HmRtaGw8WrmXtgaUKGJ48xiJN4nWM6KZUtRGh7M6GB3uV3qDGhtGXhsycRKteuR7GoZkjjFJgsSo9SDGYuti",
  "key2": "2RiyL8jR71iDhpwoGaViXtDieUY9dJDJeKsuqwUBNfR17TvWioRjj8tG4mPr4uPqhgWyFXBr2dBow63d3yMw4c3e",
  "key3": "2EVz2YEfhXw6HZZ8HiwwBBUK1ncXqW8fnuWaQPSKBkdxWpsbbb8QJ5iqp4PmHastcMh6S32NsRbBJx2YhJssJLsF",
  "key4": "4Xi86f2MLwJVtFJZoYbf4bLRYaEYJuEcrNJS8bopgCt3mzxh7f5mgZshs2AXV1gtNkneTtQbBymsZM99xHYPFJxm",
  "key5": "36zx4EggmvbuwamDTc1Q1TSA93MmpDAT7DXB2JprtisdbDL1pZv1Gcp4zkGxMvwf4k4uhf9BjbCMpmRF3rPNX82H",
  "key6": "2rsi22gfzFVvtJbTXGs21rQ1T8Fb1oNuxw8dHyb2CT1FL5Sq4s4MGqxtdvtm7M9JNYFg4KpcR8KJXEVj8RnAyo2n",
  "key7": "3LXvh8ZwQZ2VyAedT4yNMwhVEY7c2diiLnFova7M1DeThYRxJQ7p3p1ox16Lvn9Nc6k9gdUUrvJHxbTR8sBeXoX5",
  "key8": "Qob2PyvhGNR5jesCyutKi6a88D5dd69AvmT8LrZWosYqLNQgD4xpLQjzwYdTYDtSsmVHEDzqhBYhRzGNsqf3osM",
  "key9": "4f5Z1EQVBFzRLAoT1rH7ner9nMWHFN59xYNn2n1Tqo1MaG5VNMocMg3mtrtU8BRcWTcjMxnmctf1KKtH2g8EXUA5",
  "key10": "WKQho7Y9zYKEhbEeu2hdN7MsG4ymVwoGuqy3LDvmcYPTuPwthzdz646bvv3sUayamEkqmBHhkbs486sHAzoVFAt",
  "key11": "2AApKJPmKJMDKQPn42B3xbu8FY17rbuopASHWp7sYHGchtNiqerZRUCt5G7AsLPwvdaaTMXqC7M2qPrSKpJbtPuY",
  "key12": "4y8pL71DNs4wMXrnEfGkxQeg63AphQi4mbyuMAxppjckmVqnCDaTndWrUjU5pUSnkYFSKgrcpeXqJqdt2oLRzHv3",
  "key13": "2YNdB2druDmB6AsL3bhHbKp93XdjMEdjtT8gDWEC8cLLnardhwU6LG3X129GjJTWWeTM4rFR5d9PnTxSkSpmH72G",
  "key14": "45VmVCjYXGye4KoEKmvAnnjQqj9LTEiqud3bTLEw2G6LbAk4r6dayikCQs5getbm8NMAXuo3kMw1gMposvjNws9A",
  "key15": "3fJNfCmx69TaDk6hspFgcFiYfjn6vBPJyE1cDSxMRndpDD12xTnfbLBapGx2h8dfCHuR3ZPAFzbD8MshEa3kH1ww",
  "key16": "Z3Uq9GLYfocQZSyqJfcqz4doHvVgVXKeA83oazKfD7As3xJeA6qkvGusuXVM1hJFyvgBihag4woLebvk81pVN1y",
  "key17": "nv9bA4tVv214V3yoFRHeYK1Npfss8tjZHwd9CMig1tjFN5rjqE1mcDFVeA2VbFHFHCuuFeJL4ojEBLvQZTXoxVM",
  "key18": "2PpEfp5A3i3vNrcV2Z9Cyyrk7WGxwRnqizrMZQNAcdTobfo8LQzub2U6eH2qo3jbihdtKqBU4uKSRz2ZLQc9eEyq",
  "key19": "9KWmGnYZn7BzbtbT5JBTPbBjL73n1XuEmfwQ4BiNb5QRrnN1g9cSDdCHLMrABhPxUEJhTQxAockEauV8vVYBZYD",
  "key20": "2KZKZzH4TRk6k5oSBZG59hGfaqRiniJRQ6kk1YARTEnd1BJnCM7PQdgAxaa6tuD9xcyKMCtxbu5V2dD5kqvwCytj",
  "key21": "omsv1x1cGhffhUifQE3kSbn83orNFH3NUHz4fY6VYzDX8g7GRzR2QAZtKmHyfRxosZ5Et56rnsQp2hHhPySQYf2",
  "key22": "3H6LjKne5YLhi67BtiQiyRX7o84SMgwfKMU9aYQx8fVpiB6B3vQL1fMUEfL379cgMzXAiYAg32yo3REcd5GXPGYv",
  "key23": "3isVJHZfhFGe7PBvbeqPN5xvMPEZgC16dqPXjaR3KL9Jcr5XZLMkryNWZcSo7x96u5uqhjHsTk6Umo3TvJ5EF1ZF",
  "key24": "2zHhfP2M14AGHNL14aTUiSxJdFg4iDULqsCw9MwHaQZeVXmBD5iLBFFGsuyoDJwbmnyr8AE9ggQPszkV6Fehw5xe",
  "key25": "3ZsAsNRtHjLZFd2MzNeeKfasax576u3btBbvWPyjhJm4stjSGbZqUPdUGwB4iQSjd6FKPrMfpeYswhTit4E2ULnk",
  "key26": "57h8Pe9bWhZQp9CcxbgVSjqCPPbDkJ5LS14so7vGmJ8ScfYTZi3QrxDFFvf6M3qurVmH5LXhoaTvZjPwzWmWtNag",
  "key27": "2PE2N93nYfPpGuhd3ZQ9sac4tVRe3uNAxsCGH2iNa5X3UaaUAYhmDUNdfTGFzyjh6GhdxRPiD1Uco2bZsWnJ9u27",
  "key28": "3un8CvWwB4znDy64KRoNGtB57LAMyRge5VXJ2sYGFcGqsKrVm4j4JHvB2SoMW7k646RfbsnL2WA66CwDC3DnzgaR",
  "key29": "5ZCmKqSb697jsVdgasoH3x2ZXmNpQUpdkumH99W5fcN95kE3CCT7atr8UBMYojJqNgWtSABhJQ1GUbyKvVg8ik15",
  "key30": "4WWhh4JRdekJzbBmVFvS2gdg69L2L9HgfcCa7oCABHnfoxu5tZbvfiGBvrDJXf9PPVZFbbbUg7rehtiFFCovdw1x",
  "key31": "5Kufq6oeKHG2q5i72KHT7NS3u28ufHHfuoJFszoKFQKE6fyKWAk91eqP97vFQsghVwkWcQ35zpTxT7B4Cen4jTm9",
  "key32": "2tu2MgkR65DoVRop2mFGp8HMppDRyG98mwLuCbonGXhU7x3c9mKhqZ4ShZwgGfH4VnRPVB31PhZJYdXKiuaWwEU3",
  "key33": "5QcsTvMUvaG2oNJoHKRug9GA3ZmJNXYKWjchXNKgttDaGX89pBwNYthmHEHYZve6dFFuSmYH2f9NiKK1WmbpJtfo",
  "key34": "2CsiU7NK2VJwcgEz9chNkrLRynQFUWd2hfWuzndNGJFYEnq2vHJaiN8xVxxdfHRnW1y6HiPEsCdvLakQ2ZLDJfbd",
  "key35": "31Q78sajm9y6C26o7oioGpM7KC25urpBNpwKrDkhR7zY6R6JtYggnwwXn6JtLhQ8ZqPC1eTyvrZ4gkhVuX7jRPBM",
  "key36": "496i5LpRSm9h6AtzeVwQSL8ACQvGZavBFva4VGhJyBFawmx4jt3ga2YjAAbJn3qQ2Z2vD3upc1wcCiaverjszkyQ",
  "key37": "zQJL2jNzmjrAFfELjzpsps1pc95vdaVZoaP2H6FRHvo1kD2MLD2tqmt6BEUB8gkqwhA1TVNc4bD9nscjzR5aV6h",
  "key38": "62yoYRbqY8m7AemWsu3jr4Q7vpkGAiBFpMZjgWLFHhE3CZmMtKnetwNyEHpfnkKuxpu4i4kjPnx4nx1jMbhtrYDP",
  "key39": "3BrYKwxUYnnXhgWvpU6hvPxtmS1s9bTMpAQLtmiRJyGgvxs2dFFDrD3RpHENYrvztpYixGvycfwvotY6RFKfaDzC",
  "key40": "ktgxbiqSMmgQCdb9KPrnnJc4ZAaan67tNHMa46eG9C8xj1mMvQLz5uGThaCbohsMR5oQbhULpjWhVPaFDmQLBLE",
  "key41": "5XEcwYb18bMBnn3CWenktHSxfm2WjYoZn4JmR9Y8jyPmAJLp6KbSehhUDPLLwoPCowutMo8vwQBb9mhvfGpsnh8Z",
  "key42": "2bES7XLk8iECwf15x7bk8wWBKCBFsUxC8zcdfodrAWtNDqURBS4kYLup4Y4KeZwvmiJEVUjjrmJ2iBhWHi1Js5D"
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
