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
    "3X1B1eYXp5TfocaYNuNExvdCr4Hhg9huGpuUv2rg3tRCavWzr6YgK9oMwTBACwKfPUr6AwQ1zKid7MZAdn4fyv1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527Yq1kUEDrnotv1976g7X6CKu2L31ncC78Rc3rgoh4MCxj5GSesQYBBufrzeBun5e9tpkJvXCk4nitum7hGk9Rv",
  "key1": "3QaAPWfKkyMDzHaRbYYHAhffZhaSYC22k6K4oy9oBETk6XPwahNXKdFZ2SSHDiyGzXNEXGHxkADsrRRvBRozhXjX",
  "key2": "4SNeKyk8Zey8H6nbCFdhDr6F8LJ45E63fA19nXcjqXsqKDVx3H1ZSkn68otAryN7P42o9989fs5NTP22CgYHiJq3",
  "key3": "ph16YkrgaWb5Jqz4wSKs5M7VSsskab2gooaqd1MNziwuKGkPpwbogJ3smMsqrjFLgtPQmKjEWgACgNCcYLAoJCf",
  "key4": "2TA33wMasD6XjB7bMFWZEia8yMbjZP7NBPpFT3jNjFHGk4jpJXpf4NaUpn46uALUF8xTJAYk6xmM8FGAkybQktUF",
  "key5": "3QGzsQ6E32wbVMNR7mTC8bGYUeM1jxbFwLmvmgSCBc9afGsHCk7AYH91e8BUB5Cmh7bV1wd2AbeDUD491NCHMceN",
  "key6": "NFhNCuM5T8SiWfA9kTrjy92yrdLQt6nJSLcnrztkhdyE8DyDSS1JTvzDgeGBDWkfwsEB1zzb4beBDigYTKXT8Sa",
  "key7": "TExPxbefafArB2xuZaxDoUeKi7BgnSJUewyQv1aGjwpSdohKYXxbzQQkN4MXhYZdoq8fTwSnkSwkuW3VapfEQpG",
  "key8": "2dKYU9pvjyEmHqdqZyzTh5PSqqSBdPzkbuY1jM878HhMAoCegvV9ngmN26FeHcqUgbQoJ6wS21kJrZbUJr8Y8MtE",
  "key9": "5TcJBzDiKkKFcYAtH2ghzns4dWLbsrmo6aT148XmkkSusPw98Xeo6wJp4oXXXLDw4qFPR2ZLgY3CnPsCgg9co5Tv",
  "key10": "4Jcbn4P71nveZMky7RojrfAonvinH327KgAbch74fD546PWuCxiHLNyN6rFmgiM7WgnWqtbzJhxQtzuszf2zqNs7",
  "key11": "Urkyvq2LqD7jtru75pqTrypA3dpXR2NLvHboSELGeY5GkWxo7G9wwdRr1SWzEyXdXPVSWM97Fg8jhaSaQZuwrkk",
  "key12": "XumtnYH2xcQJdmgLuoQX7CNgSBn4qMUf7Ky1p2eZybxLmpLjuZ8ysc8kMkLsw9gec7zp8ZLKpgejUwVsc6Z4SVd",
  "key13": "4o3t8VFgV6B2Yw8BPVadXYcJdorVoML1yT3m11t1Sntt9aokPFuCK9vFhy9chjBE7D35KZBGmZ8pMLEW8ZBCHyvR",
  "key14": "2DHL2qgKTCeoDDqEu9Shcd9vX9xQ8LUtUz6HAUWZjNvmdZrZosbYKkBzRLkDfu5zBzvfJiskskzC3RWaC8NJto2m",
  "key15": "2RVf1qbZPFvP9tRFeRBKa5rX58XwjQSeJMEh92Dxgg3yGk46ZCCLZ9zthut6gfTqpxrQH2KjN94JqoH4eY81xRGt",
  "key16": "2Lu9gJgEjL3VTWTnD18PHyPFAVLwMp3JKiY1yhSPS96udxTJFcmwhSQyWbMd8ocNDmVCQbujGt8zsxVJVQMhVJ9e",
  "key17": "3LmVLSmG2Aw1GgEQywecAtngKE5vQb2MstGiTBx74Q9fb75aMqojUQAH4NzZDAotBTYMRrJVei9HxjoF4cMovucG",
  "key18": "25HcfmVSkR2yLqpTYoW57H6Cq8cYKD7HUEb7s56xu681jUnkKP85xnRgn7ucRpxpRvR6hdctYuFhSMqCpY4DgB5V",
  "key19": "81F9fAKPVADyGTNMh9Dz79WMKLtkZDjGKJXCASE7v6aQeW32ieRSRFBKw3T8x25GymcZuAuFpD5gEAkT7EBcwbf",
  "key20": "4tYz2jLwWziBVjJkjf2LZHFq9q72SJ6votCpKih6y9u8e8jx1R6D6zTg1o21u4giRWfu5RoyRjwuCGgaLv6XmVa3",
  "key21": "36KbzQeG3gFL4Wt72yfTn1ft7MVTnr4zkg4g7GiskCCbFxRGzTs6BYAnV7y5WafFux5QnS52W76HJmMMLhwrM2gv",
  "key22": "2jXBpNEda1zHUnvV32ytVoSLF1eKAZAgQnX3g3CqPKnn1tiZcg537dhg4BM6n6qnnXjX8TL4JGBEZ1wCqR62gKFV",
  "key23": "biDCZbEXahg1urJ1R8ad1mTWNrHDaekpjBkW8JcrFBWm38wnFCoTGT5rnQanXGTkxzyfrHs7nnAZfsMfURF6Pbo",
  "key24": "uF9EU1eLsczzV4yFDLhCxekBHAyGpcm9DY4dvQyS4a8cnzJ9FL6qXBVLPYzvWg7z48pWxsMEDePojnXrwrJu87q",
  "key25": "ZtfQ26efzGXz4c3q5axA2sHtCwBtbKXtFnmNMPzyBYnn5dSxVYhDo7qBRqEswFgpgQiatDBDtXNMpm52hqMVA9D",
  "key26": "2WT8xjkoLzmvEwirpzfqRw6MdkCvFQ5GS7gZEppHcybFA4Xx1VJAYx7qb39uKbxsPyvcnLNCyCXUaEbq25YEJeWW",
  "key27": "3MQjo9d5UQZ59xYsK3y2jvw6LvAJvfN8J3aAqKKRDcsyJHhxyUomtTRTZXehsbYePFXLme6TZBeS36ZKEkus9VGF",
  "key28": "2Ezkjv7PCdizsf8NEgzHvfyAHpDebCNk1LSCeLPHLFsGHJaMetbXoG9LSKys2dHWFHEiE9U6ARjqY1zSuwVGwpsK",
  "key29": "4v7dVK4gHKCFRn8cGzEzw9Q3oCJaHFmbTRgi2FdLFA5Pwf1Ghd1gZ8Jk4YdmGcjowVxqAMeXFoez7Z4PPHLm4EJ9",
  "key30": "62ttD1yMjWEXce1eWwLKkEcWfHxPA1E1H2KXDfkS2bXTHxyCfPKb7W8bjD2C9s4LQrt7zm6qM3PVMrhqiSFzpD1",
  "key31": "2j9JZaPCRnXzGyBSCC9Dp2N2wjrjBrZ7hSyw2vvRUys3qvMfXVoQjcznNKeYdo6VwZAsGmdUrVkZQMxUNPSixU6x",
  "key32": "2jjoRQjpk6uQqxPwfeTKfdSxJVLpZbB1GBE3EfsjLiWMvefZefBHaXdE8VEkwZhZFxsAB7pViFu9pxND7nUcdc3F",
  "key33": "371Vv1QWG7BBkfLWFFeTKEnPAUWCbN6iUhnjpAA4qmUG57FDR8MSRuHz7a7hEXAYFDF6ajT8YncPFWyAzXuvW1TV",
  "key34": "NJLeSTpwv4uhb2o3YJ1UCpNfsrX9q6NzbTvsD6KMtSoBgRAzf8uFgYpZCkigsJmYGb9SPJoRRivnzrwo8Moce4T",
  "key35": "2gWPgA6UWzyaUMUVVzPQRPa4barqE97xfee5s2qx9CirCvKgiQmEKahSSuyE9TTzQUt1dXXHnFj76yTYUtzRjUGS",
  "key36": "5asKoxycKmW9ZLbrb8c4dzr21E9KGby1Nofs1c5MXNT7MUn4T82csRgubaGQaWrpnrxz3RTnzrmDSsfAtELV9ANY",
  "key37": "3xQiFYnwU1Pgcnjn1YjtPm7Dx5J2Uu6HU1qm6U29t7tbBAkzYmRaCYcSEDqAuvQeQzKUtM3c3cagf2JnUwUD6hBH",
  "key38": "3eCxWQTu4SYNpgL7pw2LqAw37h2S2PPfAkiM9tjZtP9mVfUxd2PRPx4RCZJVsNJm14714qLFo4GViiasD5EAkua3",
  "key39": "4nafm2zQXS6f9T2ct9Admtw5ob4X6kL5UDkHDxyor6eR6ZZ7JVHyd95MHmv7Rn4oujmEFCtWneKKsrBqyk7191eC",
  "key40": "2jnN8H2A6SJtFtshb4K1sbQizKEoJguBxgGxtMHe898DcrpqkPW7CyYKrFkoKTEMJ1FXxbJ9Tyo3rnoTkY4wjuep",
  "key41": "5P4kcHLwt5gJKRsxcykqybuncrxvsN5fAs36yGktfDDK2eU1SXuqUbwFJ7XyJNboUSWmqHVwLofX4WgZxV2P9JyE",
  "key42": "3Z2uF41gaTyYsg1a3DbvT5pff7NmmX67gjoMwHVuav1zRjQ6n7VhogxQUL1C9aTZk7gyVuDT6MZEUEBcU4JhALJr",
  "key43": "4GNPokBD91K4vkRAYQuXFy3QkJV1DCYmEL5BGgKAjQtgppJF8iNYVZKZXKRHBZfsYiRct3jLq4mu8gHkogpq3xv2",
  "key44": "RYxcHNHf4BfH5KiC1E7H6jUCJn4BoJ1Ep9RK9oHtMtBnXxFhPHfkZ3oCVGxMwH31uuRDpcdzzhvcWfDp2cPBUDg",
  "key45": "2R2in7XC5h1P4ZCQ4jGa98RZSBJKWXaRFYwDuX94vthH6hy3bLZm9TMKA1EHCtaPHPvg7wyinct4Etogn6yuxdry",
  "key46": "3592HJ5KsQNcZFjamWvBvYBG66kjm2tUZ3aAxC2SeXwopCkH6EbbaD6u8xe1bJWXTXqY6GChX3iybL4iQDDznw6c",
  "key47": "wpAHRtD3m13xr2peejvkp1PshSUSNTp7r8EnWMUQnHcnMVs1AMzxExmg5rgFtQdBPVWTRVthb79XmVuQAdbTSV9"
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
