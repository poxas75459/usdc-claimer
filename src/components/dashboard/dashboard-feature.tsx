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
    "4uy1NDWazMgVQYQQirCh9AmkmsU3iXDxT1AeFZHR4G5y1wEkaMA98ddc8JrRzZKDBvfdy26Dt3FYPXdYtryVp7k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gnQoh8LvELxeExN4Wwqy8TbU2QnGGCG2v7F7NAXdCMS7CVQSYYeXpNEeyzSUm5KFikseEnzzzKXB4f4Mj69xfLG",
  "key1": "2wVF9gzisgEpA7tDZFLbhdZUYR6qsZ3ZQJXYATzPPR9LTndMgdDqDeDhjvABoDeJx8dSphwTKbZZkXjZpnMgTtuB",
  "key2": "5eJCfBtWJwNTdhfUd2m2YdchmxfTGxAjGef8Fb42FhEnWSmj5ginqmcUGichNFjTx7EpMrjyj7DbBRLcWkTW6PPs",
  "key3": "5uxnmdsh3VjyFffaeQMUDBt1QadbhrVbuD6kEcxWYogFZY6wyiRcbBsQLwWY5nA6jcTzVZ1tZdaxXskNW6aFXrDb",
  "key4": "5Us7pdBC5nrLTM5i2Qe25iK27KC9qd8qpnRt4a7MapMJCchhw3UUSkcF2bvzCzcSq2Dj2hPCYnkJ4vwdczRHEEa9",
  "key5": "55VKiAjrnm312AMeTA6euFQBoWASQzuJmnEfx5BkccncsgsfK7maJYbNEyd88bpP6jSaUgWT3UvEX9uJU4fkkodv",
  "key6": "29swR5DJgtiWwWADytj4XR5Lhdgndyswo754apLYhPoUCYdhLC315fHSjsidUN3ERa4TjXP17FGp383Meq5kLfcW",
  "key7": "1Z5UaDGqZ8wiKKbcA9VWKSb3z1e8wShTnjZsLnELaAivibUpV9AkA1EZQjbUqVB8zpoLPn5JouzoHHDHgy3m2Y",
  "key8": "5ZcJ6k9C3M1WxiaKrFm2LuB8SXj2Q9fRqkSK3SCkdbQQGVxUU9YVH16PDiFQxudiD48PcbEyJq7B4cgpQzJgCqfr",
  "key9": "3eTrCvn4YrpUgnQWAdrCJsZ9EvL37Hta2Zx7KEwqWzqNZFdQp7uuFaL213c6RkLyA4R1bh6my9Qvx1g96yTwsEYA",
  "key10": "CuEoYN9AQqBpEJmu5jhtH4NpxjWw7z2GWzraVwJihYyKjxrq6zo4FBB7fgE2FouAgZ4x4iBNqTqogZcp4HijrxF",
  "key11": "59J1UPvWfd8ofUS9QZERaP8oKBRx2rRAArQSuaBzuuSv9rzUdjm1EZAF84jD25cW4LuPhycETpYWn5MQa2ygsyrZ",
  "key12": "4vux5WwzmnXPXs3eAqCCZ5UrspRDubhnPmQY1zC44DPSV8gCf6T3iinpwWWtFGnG2v6RMDe1mSV4vmJaxfDs53pN",
  "key13": "5x5tNmvbzMXpn2EuE6oiHNpH8boLbCdhDurc9942x1dsESfi2R8i65fw8zPhwTg71EDxVsmB29NSGu1xtZPiJRUc",
  "key14": "2bA9C6PSg24mXfoLNE1DfAYKgG6D2te8NfB9aAhQSYN5QGd6ESBDRtVgGsGRMPeBA5FbAeQnBgh72sMtkbaFAg88",
  "key15": "48swHhJACbPFvbuJjikLe3cza9Mv5G4zLB9hEcpti7gWX2fmjhd742jGv1NTXacbS46jrPCsX28VvqDbeo6Qzaxi",
  "key16": "4jHEiUeqyDH4ZxwMCNzE17mHSSccDgdyACwWyvuzGx4YgdWzkC76216bNRmh8KDXJZBKAmQEAkj9ek9geZGfRQ7t",
  "key17": "3jeaLhFzX7PRqkPnSBtYBz7WoumbNHoyftE1EdrePKfp1SndnzUi1vNG7oeimPFN7xpCwwGNQTDSyesNeTL4bg82",
  "key18": "5x37gdoHs4nCx6145PoRjtg4sqge8Zv56VUeF6xhd9pHdRCB64nf5nhsw3TjWK6beTnCieFap1vHjXdEHqMLgwPr",
  "key19": "vmrERLDkTcnQ4kStDTZpC1PZ23PqjSyyQ3n96oRMxt1fcVN8C7X2Gkapx5JvAUVLyET3L5Px5yDicfsc1fYsQWY",
  "key20": "3NG9XegDMYTPNKxRDVx9rdw4REm2uKtRJer2YPf5W4w2gGwhjYoYSUAmkudVmBMCMWqSEkeTzjgeVwNLE3WXQ93",
  "key21": "qYWrsgN813uCFDVgMoJ2DvtDYSkPy6UxuxGufuaJ5wfrtEx3GECsjLT7fJwBQYpNLfxY9z17PiCDwPLdCNC8TtS",
  "key22": "aiBqgqhfkX5W7CXbTh2LHR9bAP4dkFT7L3EFcZbfx2nSD1EFd2hXk6B5e3rJKqpuiWbaPtzwoHoKVegEkHiTh6X",
  "key23": "5T8Vy58JbtSKwAphdq3yRSEhbPgJJtaC9YSGc7CgnXNw9xEuqCXgnkX6xgKnJTWQj372YGu8qHTmn1NnCttDPkEy",
  "key24": "4c4azgwsTQ9CkG49Z19hJEthgYnXhmieUswj2L4YRvitMDEsqHpDsgoA7YpcFJ9fckADvAxSL6SsnDoMwsYw45ox",
  "key25": "4pBaMW8kgazsnD3Psi3qf5xpcGgxoTkBmk34fUZyS876V8nswTbNytL63J6VsMcQSeU8KmnjzgLRS6TWXZSUwABN",
  "key26": "59kByMCV6aNKF7hydRAT9MYKWCY61LmaEEtGWZCSYYjdwyJMcXHe1FjoMYaT31bjCMxGmyGyxMhno758h2FZJisY",
  "key27": "58Cc8zhMbbNWwpb6ds6MxmDePcGuYZnjYwWJ3JozGKufz7tyYGuTSvUWsXxmiUndeX3RUmoEh6cp9uiiGHQH13Bm",
  "key28": "ih33Qu27rGVaEQDLmtWBjugrSxxmFhFMVEAphS9qc7aC7B16kjEJ4UEH7owsHFSxt5gCouWuHUKxz9uTJvAJgK7",
  "key29": "mGz8sGmvb38TuoNKD4fJR8yb3ZTeVS3SfxJ1GyvUkvzpYFEoSKSqbqNmjStTjfrDxHXz1senwjDzBxVBpm1DJuR",
  "key30": "5mdPFQcV64LUP3YNZ2kBLpZfm874xFHdceLwk1qZHiPo4QJSaZXyGscnpJdKZTCnDzpcVWFGKMAXKJQR2EY1XHBm",
  "key31": "3SBp88zaJu6LyKERtxk3LqQC5p9QSt2a7gVXsDQ3QundDJDMGiqBicPMBdwzRxiCPHt3cxi5bUd3wEcPnPLKysQq",
  "key32": "2ezA471xGj5etqTnh4hoPgshz14GNJvuWcAycTdVhTZrs4DsZwbXHT1j4vcLsVZ399DvfDz8UbhoSgBAgTLcyBNe",
  "key33": "2jxEiBvDnMpyk8fVBL92MKVUAphBurTaQVpH7MhtsW9iDXsLNQehLTv1macA6MCZnjez5uCFkGuzFfbi6NEHmY2G",
  "key34": "fM83NCufYKMY4mjCBR3auMxz6SD8vzRUmCgLdZgZ5D9uXwdQNUkmrgdsDhZaJqx4xYfX3GKj8SPEjXJNcpEWCVk",
  "key35": "4QeS4WYFPiYjknaoWmzLE11pA4sm4i9XCNYZ4Cmx9tYqK1Eoc33wk3UGQPAAUCAiFVdH4cpb9a7fy8e5BgoNLJjH",
  "key36": "3NNdSBEQJeWZ9ZUcwCD5RzcEgPVYUZpeK2woyBFBcZY5Zd89YFhGKxg7hgaqydJi421eD341kQ7AE1VKtjBapHqX",
  "key37": "ZbJX1q7j8L1mvZvyRdTbaTBakCymrhZwhpSoBBt1dvA9pMKYPAbUpdBgQNBKcHLpQHkM6Xq1hQqCJGi4zVEKuTN",
  "key38": "4i8D3seyD49SaETTiJM63hB6VgNA25LV27t225RyrmznGLvQP5rgqA7SChgykji9RAvBUqa3YvYBLfyTXGPdjBae"
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
