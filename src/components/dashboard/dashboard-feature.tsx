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
    "4p3uMt3WqHSPv3wau8KbWiVq2LbwjzaNeWwQ8XvR1TvoKrMZxQWui4ZQNauKxrt7aBzaWc228vjJkVb89oAjrCuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zXxd4nLZiLrJAcfHAwcUqc3oyv7j1RH7fNvnQ23WS4aNJpuBkBv8MK2Yeoi6fGU27bcboQk6p1XiVHKnz6A9kQX",
  "key1": "3YKx3RtYB4oUDPDQoUcbvJKKkUZSzFajrPc57cUmtD8KFNoMDQEwtkJLEjAsmt2mzjWuTEWsh8fLxMDnVrgexNsi",
  "key2": "5PArkx922zGWfBBcSApdd4kY26uCnTJYZAS9PucaiHLEqcTXrKasg1ZY5mdvid4HAGLWCgEq1m1e4yXPFvYgN51c",
  "key3": "3ijFYj13n8MF2bU6qrWwcFcGsm7WarbXsG75sPX6WEbxv5Dh5BKrgCM7xiYJNz8WzNzGZs6Rrga1jpE7jMqc1Xx5",
  "key4": "3EsXZr6dGiihBZZbPqpP5hxqasM71dVpPrMWd8J3HMcu5gtX7E4j4fhLfveGD4Bh1V7kXzcoCfqYQbQ6rCGWK57C",
  "key5": "2qcVsvJCgAK2dUjKmfEPXbdMKiEwsNJuKuppvKCrmiTzAEgvkGXJRWGQBALj8j2MM3qeACDVq8nV4EVA8eBx1Xb7",
  "key6": "3u3LREmiUYjF9tYk2yjHkgiKbNbDFJ7ar2sCYF91uRtJTg1yJGmqMMGEj8ij6AYxKYTDkVv57tZKJWk3grJQHzb4",
  "key7": "3uAhX3uAnYbz53USicXVEqyeTJt4yEoeX44ktLsZtcti7YnQ8ZcRE9Xz2cnpZjxsmVZWn6PcaeBByCWutGxLfhGN",
  "key8": "2Kx9iqiWhJwQDmyjw5pPk23znwtbb66Ho61XiPB4KMpVZ35P3yeoEzSWjGa1xPE62YAJgLq1RdpqR5ohQDLB9amG",
  "key9": "3c34EZNnc6EYCEQuKQ63vmcB3khSjZGgGT9waTSYRfz2QbWgQ18CD5g9QRYMyGpqSwswMBcM7dmUMFYmSaMMLfWP",
  "key10": "2KS6zE731FcmMe5atLTxrWW24yLn5hxNWZYiUBXp5YYnt5cDxzPtqUn9yxc9iCyhM7pwL91g7CuF5M6fh1Da8dmD",
  "key11": "4Ldqc595K21QQmhJaqaVxSXuKhmLmGvjdV6hYBx1MeeGcjqB5uBXxMhH3fDAn5MiiUtFiZYnXYuvVxHnXt57uw4x",
  "key12": "3XwSp7z5wvyBZSsCDDDb9YgapDfQo44GMmmkdME67zBmEFpCSJbRGP9VHGy5nheqd6DcgP2L7LXzSm9EDk645Rqg",
  "key13": "4cYjpp5JqGLonBq2SzemmUvjJAkF9UHpBPaLvNiKfpX1JHnuvbKcP14tRgqGWqmgMwocHB3MotxY57DZ5Rj85E1f",
  "key14": "5jANswWGWWXpPrqDxsBxS7aDivmdmUXHZYextPaxT1cYcGwdDy3JULmPsg3SXa5dvGtvi4c8b648Xv3Cuez2HVRE",
  "key15": "2L7Y6c4FCrWtSZP29T6uHUbWDZuj9sLoAwE8uAqtvJMmnGfcLzDWrfRrm73T72sqGLjJWL9G4RKRj77Z9KHXsJ3k",
  "key16": "MGPdya2zk5dV841XVRhSjbmGYDPPoHGc4ALVoPe6eNNcnGi5MSeLejxXgE2NLEroEYy2Q2tU6NtUPkW8L1hZA63",
  "key17": "wPPAAuFxp8PGZnU4hPjGX1DoB4bEcWKpzBnnxxkjL5VvPapqQjVKD3iANkz7a84juMiw4Jx7eHfAW6GgnxorZQh",
  "key18": "B2RKccwCr4uU2LEvdUACo7eMNWLgTDrvnrQr82nzbrRPbZJPgsBVejCq6iSrasB7y7o5BsDDzF857z5CaTMe13M",
  "key19": "3gKSeC6ccV1kS2zZ9UkYK4ZGgbrrhddj5K3hSm7s8CK9v6zy8v6s1tkxNZcAceXw5stp4h2bEaUWw9F44xbKukgH",
  "key20": "2H5i1xQ4DEQt6GSvZLgQUfcpS41c5Q1mvX9DSq2saY9eGpgSDYRVh8rLxQAREiJKDM1viN2r1JQx8m86X4eFsjip",
  "key21": "3K2VmvTJeasiNujXeEyxNMySGGM4HL6GezU5wvxAQD8WgEnm4LeJrtsozXvayPW5CjXoMwuJi5GtGrywFSg8bw2o",
  "key22": "5nWDmV6D88GbyC1FdyfUwoshz7uWc4G7A4u77cpPht61Azo7s4NsFcT8B7fVnSfKgwLALYpN8dzBqRUpCdJn92tF",
  "key23": "42R3GK78iWUmJRt3KUSDFrDC3VdYJ7Lq8pgcsDT5eqTyfbBrZmDMhvqENmxt3seBAmNhdErsDv8vN8VcL9tdsr7g",
  "key24": "27KfGAUpr8cenaqTNQxD4yhWcSrxGhBZHiiUSZfccJk8CWNkufXLih8HaN29XGQn5tqQYHCqv5y61693aSsNCbtR",
  "key25": "619JiKG4NKtgKJ9RnZRXdsDHyrsTn27UgWPUuueaiH8ATkfsEq6dxpGomguH3GyhHFzLvLtzfw8fqNkBMujGPZKd",
  "key26": "4FheVBpi5Vf71kwywNVqcR6PsJRFDXC57y5H2HspjkEE9GGYCk2wjqLKiV15VHBifAcWkmDfdEDucfKi6KRUiGYJ",
  "key27": "5jTZVsEbxThC2Sw4B6QmmsDCudoBN1upCEHXQKrrorjoNQ8KxSZDdEiYyReBRctjDsSeUPcKZbVzWhwFEBThpqnj",
  "key28": "5HtEUoYE7JMLb86ruBEwTyxfhGvULFcGdLNxcTUZjgCL3oGkZCvMnfisbsuDLHx9zu5vQvF5fAcv8vg8HZ2kLE3t",
  "key29": "2YRPLwwM1TnarsLa1MQxB3mTTzycLDTxjsUYi9LQttfq41KWCwGoz2wAHfeYHVzKeNaEw8kAakNJRhsv4uPiAK5c",
  "key30": "wSvPBLNLk3o5RawVZqCYT5xZ4HYNJ3K3hcbjKCoPBA2xpevVq6EPRUfTjRLjPGDLQ5DPaPeSRhHxuc4wFawTDRa",
  "key31": "2yvFSBBBpYNCVX7SEbVhpyEERXSF1BsntpGcjoQmkP2iaderP8evMC1yzPunjXLJumFMqersvbGTrcMyete4nLKZ",
  "key32": "dbD7pv7hzRkr9V6DrXJf2RQe5r38bScDtXHJYZsKgVL2xf1owbGXx93h8Notk3prBCL8iuf7Rr4SFA6fzCaHp64",
  "key33": "4qKxLVMguZTu6WNzcXre3oKy1dLwEt3uccHxuCsmAgmVoqtGZWWbJ2APBB4ex7TF8dEwxtXcoHvXEvvbcThKFiKf",
  "key34": "5rt93qfrMHYkk1B3e9x46UB8794eYENcPDR3323sm2xBZ475fgoMpqhS4XMiUhdnEPPPxTwXQg79L5mA47J4M2Yq",
  "key35": "8NFM7BTtfiRwiMErkyNy8yDPQ39uWbo9RaTuVpxF3msC7Qqh4JejZFn1DGvEigexHS2DXBfF3CV9t29pmpBQmzU",
  "key36": "4k1F6qM3ETTBFNrSqj49FJfRsqwR3jWGEmifTQBNtqn3LUDLTYfnH4mEkzKN5uZ8Spf4hWoYEqNP5jjKsEkHvnDD",
  "key37": "LeFF35HddXd74azYv3mjPEYtbHXTYMg3eSVcdrkx6DRkASq6kD92QfQdtLJFmgueeHtroS4skSGYFGxrvVWgWtQ",
  "key38": "5mHyLLMRvz2Kaj7kNQeQrsRWD1QSVxPbRc3yGQap9tRzAFNM2FxRMbgFsywQaRXNRicPNaBiYYprCuBe1bZk4Q1m",
  "key39": "4eP8ya1R7BNSmUbYEK28eWQ1ABNTMz18jwCJsP1TEChMoeMC3bLBiEwTgQRHiiSCWz4KwquwR8d5rcbEpUfgHa2Q",
  "key40": "5D4Fj31YEha7bQZAyh1aGKQKbYsNnGG2wt1NHxfZfctmSE8MjrDqx17dci2PJt5TtGzbv9frNxCVhTPqZsQ6kecf",
  "key41": "5v89h21eFQ5SwAK7mi31y6ZBBWE5ZBGomq9YLS8UePzRm4SUTBkajYLtonREDb1vAi7gr1J4otdWs2XqZFE7Cp4R",
  "key42": "37sipfzMPFjnHBQ8xSoKesxVCua76ejCrf2dpm8UFzX4AA6wn85yDL2dGWwx6cp3qrVswQgGGVrYivAJxa411fP",
  "key43": "3ZPyh5Ey56PwHkkxhPEVryquyabtmLxZAa7iXfTEdDj1P4j7fySpq1jnW3pTL4A67mYemGGqFxoYxiWmMqWLKCY8",
  "key44": "4PQmendT4pozFNWapsA2Un4SmA7QATx5yXxxbXcawr49sg1Z5fWmDPQ1gX8aBZBzSqMvBff7C6wEbbEVMrDzaS97",
  "key45": "4PGsrW18VP11foJYtnBUKRFkksDcJohrgRQ8v2zswnvrqfWkmtR9htWRvVv92r1VrcZosX9pbuwEofRweXs8Yhef",
  "key46": "3EYBEL46efhkkAMhtNMeYtSkX1rTC3aXSnLoyNSmFqwrrNRxqEqMGJmwU1J6W6pigk25uZo8ZLNyeqeVcjy7QouR",
  "key47": "4AbxLkDbetvMFM2PjmqaAEwFJspfCQwLXmobssSZZx61wTZ17w2QcgCDpbxrobiP5eVHchAqNSa5Bw8dbYE5ocsx"
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
