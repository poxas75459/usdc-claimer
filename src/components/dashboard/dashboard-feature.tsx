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
    "4muanz45VVh1KVs4QZsUfpwTV8BTP8W84DdwKY1ESYFWRxKy8j71SmgaXo8wLdq37xvYWLQ8xhrsSobES2VQ4h8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcK7zr94Xqska7K5nneZPScMxJkbnv5yNwhDHCDLqdj4LpZFjhpaPUXYWxR6essoi4LtmP5nwp9c5mHM5siSY9N",
  "key1": "34Km85AbdGyVSyk5om3kqNgsD1oCXA362MdTehvGNSYZwLmkqwKPHXJRRDF6gy3nLE9dtRL1KQexRjb4KgMXspE1",
  "key2": "5fVH5Z9MpMp8zyBKEZStcxGYGewvWR9bVdmcDUKKGtjjFxszacbbX1dEVpiBipnrdp4YUn3633jfVV57HTvcu8az",
  "key3": "4Cyyk6LNWKBpW2mcdsb7Cdkn2DdrWTR15q9jawTaQpHrg2nSBbS1TaD32vhueuqam8A3Ze5RbLus3h4zPK4JcHo8",
  "key4": "4DQiWGFoDKbVihdd1xzsfYvq5y3aax8hJfjsv2i2XADqgT2FEJAEzgFBqUEah3vFcxLxEEMCuMw2X3v1AFsBTR2J",
  "key5": "2eT87cDQgVL4rdKkRQKMUH45oEY4o4mkUhC1ubUQokXzcykqUSW8oBNutxfNSzMNe2ujkbpPR61tXXxawFvACZ8j",
  "key6": "2RwF16u518Ag77XcV2GKwm8RooJDgHzbSBJ84h8arAvVsEMUpt8FVr9q7kSi9EuKmUm7J1dzSLeJ1oRRrz63sNUA",
  "key7": "ghNSR2KKvJdeZETnTJQW6kVJd3NbetWfkXyTVizPGGCNaRLeQBDUiYQ2oyMJLGvJSJDE1Ys1pPw3xTsc5vriFoU",
  "key8": "2gQ6E79jL3b3zBwygatuwmYFTDQTBwTtKwP8PLEYssFZ8WAuZUYzXggSs1Q2V7dMKbovunsBqXw4wEt5zSyeppEf",
  "key9": "c89REcmKJdKJUqXPrbLj8Jy3zYhaKZozvPnL4vgDhojAQwLtk7w42b3T3s6C3apaWbC5XJBZ9WzzSFnEqwGaQ4k",
  "key10": "5eSwNSaXU1NxvePW5GKUt1Nnd6GwjNm1Z7ytLJGswXsHdCaXvezL87wEFC3Szt3xn1bZt6Cjd83Yvz4pStV23yHi",
  "key11": "23XDPy2firdAL7oMoqFj8yYMqc89AM6AU2KiKppFiP2UTHfwixXE1kU54ZDkKj1NPeC5c4i5wdqTdZUuSS7wDpLz",
  "key12": "3WLqRfTVuwFkJfPEbcAUKtfX586ozzE3MU8CzsnDkQP9hkXZfHeMKh9MJN2wvDjzEFofNWSRFu7CdDKJUy2RU6Q5",
  "key13": "7KyMpbubSuPHXJCF2HkV2uN8G3zdjzfgVz1LnaMGWHh3ywDoGE56ndsGhThwPxyR3zLDMnf3P3fM9Ng1xYtgmdr",
  "key14": "49xSeCuVQkxfTLCGMi2ZEqgGJJn25jnKmQbTvJbrY86cehpn1WBDebvFNnpDqigDpK6ocNA777YvhjTLx2YQeptq",
  "key15": "zwu3gHFwc3zq4hFRU6HHQsS3c4yyWqUbFW4BwuhPtJB3t8sATQDPTaiTt4wodhSoJGWcfUaoBMk5VprvLf3w6QD",
  "key16": "5ysgs4DpSERGqnVFiRxUS3mfszwyyZRQkXRLj6BnrxBC7TzB6W8yRCGJc1mPQowZEQhtrP9RGqM4Ge7z3K4ZknnS",
  "key17": "5soQmVeQp4G9VUwqFeELpx4MZSmpXUkBMFZeV7LKhG4iRE37NWKZxqTShY1RT1En46tbZEjnNeMsrgExp8uWaFBc",
  "key18": "53ExMx5saSnzfcxzn7ecgu5agF83K7KjbTVWQXFZBhGsqDarthrCE4g3VzXBCBTSkydsLxYyfF7ckWTpm2BLL5te",
  "key19": "49UsmPW1AzNiQ53WgQhqEBcTF9SDhZufDjaBJwnns9WARrDWAfhyQFTiXspWND2fwqh53XyUNpDH9ScUYWE1YBzk",
  "key20": "9mfaCQjJztjC5KCaj6AyYBjfs1CL5uEFfxwZKebokN43WJ89Ea3wRvjBXg7sXyv2pJ8QddZy5APMPnmCQ9KPnF9",
  "key21": "3D3rE1ZTdba84hewQePMu4NwFqtENoGvhp4W971Jo5EgGAteBRg2K4snDMqCpr5AnowY47rVUPWk2eVQkXHBdgEW",
  "key22": "5DtGud7ufkiR8KWQ6Qh9MZHc5nYnXbE8KrDjxVpmaF7YJksGrqvDZb3tpegLMe4EXcvqmC5mE6wvZkJ7FxhQdrHv",
  "key23": "3grELZsEVae6bpdHz6rPsFUQqF9wCGv161qtonmWdDFe7K9cdkT4oTQdt7potNQF7Adw11e8VC9chViE4YEupmAw",
  "key24": "34vaLScXd3MsE97mEA22xxchMu6ERmbS4nPT161JnMWizrzf7L3QjjSfKDqXnMyHGowQisd83AyLd3dpkEnG8vbL",
  "key25": "2NpaodPuF7tR715tHiVQDRbipQDeGoJ3fsiMbBFGysCH3Tqmta6F3VKRxKmwKaM2m5mXuR4Joy5pqg4zu5atc13v",
  "key26": "P4o5CHZjE3ovMMJKVfZ96skHLFQHjULaVEriRQ25bSnsSsbrkunR5iDnAMfobEEAtR4Xbx5mEehSNE8v5KUPzXT",
  "key27": "2625ct56HViR87jzQFFtFQogQWGzctPqaGNXv1M7uPqfopX8N5jaPDah8kj21eeikkSik7FDp4HpAvJuESRux12S",
  "key28": "5Z9LAangiwo1af5sstQYTyXDUHs4oM74urQgQZT6rouELZhktiTsbETdJX9K3y3kwrMpS6UgtjLnUrakowucod4z",
  "key29": "2yueZ1Ca667rXVRhz4h7WrMLtWWKx1KRfPAYTnUzWmyqDZDpDYbK9WosNoPXrnmgJzLLASpw8XaAdcmR3DRAcmS9",
  "key30": "4jkBWLukULTxUobTUj3oo9tKM4jctHCDeWuyCXV1pMcRPfqmQZy8kS1qFpZMdVfD6ykkYv5mkaAGbP6TX946cNdU",
  "key31": "3kDLA5PijDAQxTdqDwBCW8qFB1VniiiNqJ3yw99XZSNnHkYhhv5ykahk8iXkeHQpucbqgekmZXFmAWc7Qat1tyqR",
  "key32": "c7NMR5GeuzqVuKWwbvNiFuRNidL5sH7zboY1SfVcuzEhy4uXZRj6S2xgaWnbJ7vX6VVSpnPgtch12Rh6XdiKYki",
  "key33": "3qyMXQny64DkxZbJfsheGHFkZsXTVTyfKY4D3kFgh3SY7rCZiX1LUwiNbSA5zCY7nRJMFngR4TX9Kj3NDW8bSxzL",
  "key34": "S3xi2hLqns3KhQmyvrUuUaENZWwWT7wzckt1uZ8oHDuBWkaM8XQGMtVTgjP732Tz2tMyxKFjEpp37nqS6Sz4rfC",
  "key35": "5FyNzw9HfKLUYBTrgKrsKoC5opMZi1PyiC4c6GFF6nqnkbwEMcVAoDpKD39wBaCpwPWkZfCUDtRieKnbbUQqgw1M",
  "key36": "2xnX7G1m1eiRhRwVirRY4MXL2kS4TyYSmNSesYZ5EMtYiFN8z5QzRkn9tNXqD4cnCsQ1CwSRCfwkyMLQdDcnzT4e",
  "key37": "3wMPJj8XkqVbnkx18Qnp5EHVQEfcjbMCtCCRhZJ6PSmKTY6Qj7mFAGTEVfwAT9UVdRK4vzEfkiEdfcsqU5iTMPN7",
  "key38": "4jeEyv336sSVTqwEEmaU5HRKCFjRJqrui7cYr4gUtcLxbgmuytH4snuBVsBzxvdWR8p8NWEBUQWWmdFXu4f8k7fm",
  "key39": "vTbSjTwmidSbWV71ZuiWV7YxvLQLBJgv1A5bRHUyFd2GPBBq86y9zEpHFCVcNRExwuv2weLiNxwfbjnmbP7d2jK",
  "key40": "2eXen2Gq5ryrPWc35XpSCiZMv7w9qKsDyBRARruixBtvG245PbxbKz9cYthnGNuMHithjGKpntEhnyvT8WbtmoNc",
  "key41": "5yPkrAsAsq3HauMbHyFkPsQFTc4RvxvW6TtB5fAw93HAuHGRwMXoDHbudyLZhz61BS7fswDuTcEworv4GJcCvBVV",
  "key42": "4hMRkdrhVtFSka83v1o7MLCBoNgwEKo3wvQi4bh7Q1ZdYDuvssvsKiGXtf7SfLT8ZxKGgWS1pBAANizAnH2mp646"
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
