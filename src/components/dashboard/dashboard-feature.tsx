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
    "352jreQo2bvxAW1JbP87wH5im2Cxquf8gvSs6sPdrS8jaVnEfcCWxe7Ztgafvw3uqxRXv8Yqtypue8o2CkTwDYkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHJEvvYqQMfairUQNcaQicQhMfHk62ryTufeuCzZpuZ4tBzTzi39DG1KiMzPNjH6BN5ygL6WjBxw9dgrGFoD88t",
  "key1": "4nmNJFXEtG4kSiarmXA8uLhLErq27yrm9Bx1BXGqRB75EVm5G8mGa2TsJo8KPbh73BaBUTC1rVTTiBXwunHYmZpa",
  "key2": "59fuCovKRHDzLbJ7oBNSMDvn8GGsiic6Ayx2hbSLg2KbLEimwZ8kunkcpKZbA6ub9n6HkHG4QXcn2YS3oJW3tUoQ",
  "key3": "4cDWdwnJcuAW9s42sMqJ1jdvGKJaqeJZLCsk2Saz4TYRtHr32awagqzCtZBfLapovMFES79Uogz3mwvurhEQHwdS",
  "key4": "pbQESQHTDbXiQd5zGwGjBjHLV5qmh5bS5hSydu2AzVKWr8AcqVwzuUo15KkUdGeyDTejxApaJG2rrBrYfspPR7Q",
  "key5": "JQCxHoZsrDYKbKnCfHcL5qfAUrMSKmtUMogcPvaw7kPtJLhGhYpzPZS2fgEESnyFEnqomDKpbsmq5XLoiU18n3s",
  "key6": "5LY2ect7QfpyKVzJ3NRtqb2tWMiCgnFuowLLsupnKsfHvJUbJF5LdUx3cp2B9ABkA5oGxc42zm39pcoH4xozXYqA",
  "key7": "8zGuWuBaJuwZBs9NuE1ZvAYaJMVFsLmt7XZFXrP6LN8DUE4Wz7qxKGNGSpWaxT65K7GZpAexY7qfRDLDNur1Psz",
  "key8": "fjpANEWzoq1zPWzquWhiTTVXWNMPzAmuD9ejWgBM7QA8DaBfie3trA1zsgywtRNbakfRHhCnhPEsP2CzDQp8sc2",
  "key9": "49FeqDmuqK4vWfhuEfmRgqi2cdmaqoRhkyGD1Vr4NbkGejzuDsBRxWFk6KnMSSSH1mEoGreFDfCKyaSyFN4swXNG",
  "key10": "4r3Uk9pMWWbNLXoQnte4rrqdU6xPNR4URvQS9Rj42Bxgw5L4LFPJVkAcqKZADswgoK7JwVTK3Bo7qrjGP1LriwME",
  "key11": "5MzQo8pBdhJzZgne3my1f8LXPdcx1YXFo3QfWMfy7NUN4zrrqRcWWoikW9BTBtMSZP37Cxy7sUoZrYtSQphkXz9R",
  "key12": "RrJPwQYDEiQ7hMjFvC1pSQSfDgPFAbEEJvGFfEi6RZztfGBdj2xLFygoPhGom1N8pSDXS5WCB9dPbPkNfECYdPL",
  "key13": "5k62DfEYU2qhbfpkeiShpjHuWHiw5MisgQN5suSs8WL91xTjdz32mWx8PRzDoXvFXTzxzV1g4SR6Yia34BJLGg7C",
  "key14": "YDyEvu4ZHBZtQfXwFQdCeJox6t13VM8yR9QC4XTgekRHNFG48H7i8XCshX5AcrLkHojMC2Ez9KDyEc5dnBjbhUG",
  "key15": "gcZtY4mL3qxHXvxfsKM6WswTiirM7tQfWcuBDnRxqwn8WpopK8TdH78uDvQi3DRLvCDjVU8f7k6eUXxhAxMa4qK",
  "key16": "2q9FgCAtKuTgxjVwCz3HJYjdcvnSa4GDqVWbVi1mdtK1t2YW1M8ZwgwQQ68DoECrRNKWrk7CagW9CJn6KM1sbPAB",
  "key17": "39pGDAWmHpYesxmXf4k8mHqt8ts5JTZZDcsvaPxyqakEBxgUfoGcNNAb4iswc4sBuEH85yxCpHs84bNB7hhBYXLi",
  "key18": "4FfrGQxPnF2raXanXQZ9NDarx6PSFJZ6MQDRZ1oVDXXn5hwUUwdQhriTKbYLp1ZYM1UtC9SBJq5DVshyweFjMXRi",
  "key19": "23fKKdMARwwCf6i3Nua2M2QEabYxMz1HssLGfiKVJJhWSWQvn4o7sVC8hcg5Tun9VGxRHU8RfASkNymPShyA2Hhg",
  "key20": "4zAnysXUbQx8bo5APVH4fxpnoeNtiyS7LoLaFiQGVKeXTDxT8TUzXeH2v6VPoPzva3GWyqRRQjJeJqYqhtkZ48tS",
  "key21": "3QRxirYicJYTC2vrzyao2qSK3EpYJpkKGGqmY9ctKLcPsQZeCFbrNV8PbM5Phfj9dvkH4d3dwrVUaeYwE2vAnugj",
  "key22": "5q5jM13BnPadJzpVVg3YJdn4cxKni8ahvYzKZNe81t3HpJh2AXoGUX78LVjZZxmqZzimdNBDt9vPg4QVDCedURqC",
  "key23": "4fPjpG37VQieBuo38QX3SycymKeNoVpDBDNB2jCaktw9ZS4oykXEvYtgbDio668oNZUM13mKqXtMi8YwQwoyr7hG",
  "key24": "4G52bfV41iEVD5uVxWN3UCcHiF7if3CuDV1xHPGzfCPQ41Jhz3EWCnUB3R9vSV8Hk16Ex7RqTnYThg6WGyVU9JxM",
  "key25": "se6m4oWoyZ3ckAJcEUxodwopXaeke2UQUVG7UUXe8HhiVtdo4ZQ2cr9BDTqSp29cnEd9CpYQM7hCi3hrJKiuJh2",
  "key26": "5mcwrdWopLLs61Qr7Xfr7saRrwjMaD19qPZv9NpAUPRALtRgTp7q5KpZHSNbww4QsAce7zdm2fBaWpAyS6rTzePW",
  "key27": "2Z2NJtPXzRZZn2fLSJdM5BtPGrUQopkSPbbEysJXVBUPnsBATuk5AsNwAquwjaomnAEuFNJeLyRpFeuRBGkekXAH",
  "key28": "59rtgBGWvP8MFEu2xZDkgWvhbcwaJMZnwtNh2qWPV47i8xV1eqkzHJrszW6RWNNjSuoJMRArQ4esV8uwkqpi62Ye"
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
