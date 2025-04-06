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
    "8AgmdAM3WwubDnufjhW8mtfFSWwLCTR4D9zZw4fYr5Tf89k3M4mjQYYGnudpX6UneDh7hps7xGTUqmJc1SZFYFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4UjyYzM5GgXz9ABXM3sT8jue4AD4WjReNJTcEasteVtQWnd2n9Kq8dTZVaxkQvxunM7yhDAf9KRJ7ixJaKZk77",
  "key1": "5xZuokhFASKMKhiVtmZ6xytGQTdq2uhtauDmrezvnPbU1qrjQgmTNFSJF5MJwvnoQoSFjrNebbT5Sg44VFJArPWW",
  "key2": "4XHrWAGV7sxiaxBYKpjgDnqNbPJahq26jWP1fUgMB8H7W6g7t9FbiY2BFJRDfPyrSuRH91DHqX5qwWPfU9bvR5Um",
  "key3": "5CM9Jn2JM3x6zDHuiRnV54yJse13jswK9MLw1LATT8tGZnzAQQ9JRBWu6MsjPmmp6mVER6WwSdGycuj2SjjJYEAp",
  "key4": "3D1KEGepaZBNqqCD9vr5Q4jxDRuT1wWky9XK2R9uSaFzKru2HK6aJDQKeeWNh3nNPc5SERsDWFPKk3VkkeVGzEXc",
  "key5": "54zgw4y1C5LTV9WHDA9Yv7pXf4YUZ2KLmJouXcettUeuh94go7SDLxTWoSn4rxiXQ8cv5MfDyUd7ZekpHxxh8ZvS",
  "key6": "r7TWrdXbD842xWm1Mfrn5a2t2VYYTxhAAneMS1TArB6Rn6uVfsnmgTR4zZs2XvnYQga8E5scqx4SFEAQ9UrHryN",
  "key7": "52U5j6xy3WotgnPDesGyVDp9bdjY8NinCxKuaAjcq35yQq6SMKNzuM24L4h9sk7XT3doavQPNeCSg3qDFjprxw48",
  "key8": "3esrNGs7pnPEgwbJEvd8978QEDjQM7UCeP5gkXexcZtxbMNo9VGtSFLCogy7dVns9oEdp8poc6wnvBJafJWVzVYY",
  "key9": "56drxLBYKt4AHeVVjgvKmyTKLb3NVzjBY5UDujkP4kk7ZGZ3iHjRLUWpU4nhSk5ehEN6zSFELYKfZJTbWGuhvwP2",
  "key10": "Z2dJhzDb3rEaHdBTswh8Dtwsw3uS7ZEDVhsrr4GhiFk2YC2RyVNc9SztUHrPGAuHkwWeCa238W5PSHeaM9fLL9h",
  "key11": "5jrEw8ByuCSjDeYEUZWpS8RjhT9yi52p1LNtsoFTRhfMtnb2mcf7why6VvzDBAcz2UxJ6HYpFAV3Eq2aTM5K7BCx",
  "key12": "3LFR4oNJpEruUu5B8RJXKae7W6As81EPkMXwDU33raYfjsB1znfHsRnUo1WiNLrHNkeupebqYkaJBFWNTwo5Rkva",
  "key13": "4qfJGGuKVrQqB2ugLKqHhVuzYaNedeQXK2PrJWpSMoDCbLfqWm9kTeNbDXo6jftVfeLdMRvyqZhqZrhC1FhmurXc",
  "key14": "2mawGRwfPtf177UuK3gfR7uvQHEgf5ZjMrNoqcwRa31cxeXXoWgiAsHaME2GWPvx2Tby9zWysNQ88Ko2mdrFaPmJ",
  "key15": "5SaJAoKS7vTGkUnqvEeY2Qn99L3tRFiWTEmspx4AUbkkBYu4u5derNznFhH7Q9SS5DRio6kZ41jLApSiLaidm82w",
  "key16": "2dBHMWWhnCTHYueJUAvbqimbftabRTuQLJXAGQm6jBqr7EZQsCEqKLAmuzoMs6qoyXjrzW17juewHQiEbEwLQPbC",
  "key17": "2SjXoAqp6yyyvdqgzZxAXVJeXnt2qpNC8RBEKFq5pz6rS4rnEFY77mgPWUr4YNWDLfKxaGngwsEJxYrhs1uJQ24n",
  "key18": "2sA9aLLPwb5eRktGU3U2n8kxGh7KNUiTHkaUKEu8BNgUPH1zABPLJmf5DA2MN9ygYy8A5SKmHFWNJJMrKj99YN4F",
  "key19": "4axwP8tA8sJRcEhANM4jQg7vSJz6whFyoXiRSCan16ESqbgMibqQFpkWtcZrGe5mczpo5exV89AvBsLvAPKqm41G",
  "key20": "2WyayKUWCCVJMxQgrwFJ6t7oZQ72ntnVMUQTXJvt8Azz9A87Qou5XoH2UHSPFxtvYpUVGzzMfhbWki4rZ1sPgh1Q",
  "key21": "8Xesj99a1b5cxKacgT58LVMLsJd8Y1SShThBruMnru7M8ADaSWWijAzsLU8uNrQkR7A41F8EqNPHPQYzUkubQS3",
  "key22": "4SQNiqyX8XLhsAre9BvGQeSiap8XT6tQdYRfAipWBr1W2xwquUttNsgEZxutWznxyXeMc7PLFtodNTecKqSA82gZ",
  "key23": "2CJ7ivtcfih8aLPeYsjbTio1J6TWQJZNvsyNL8BhXkpfZVxeiDggonLPSvMgQ1oEwxdatQgKfBKMQRASLDqdNjH",
  "key24": "4gLQskFyez5mD6138fnC4S7BymrkJZmqMe9frisj2fE6bMaEFpVrPAhMvjaxaEX4axE4otMuXsoP2yNF4GZGmQQd",
  "key25": "2gr24ssePCMsMsaS8MiyVf9cf86sAt6g4cNnGuAjTv6iwpFTzWtT1u59TQEm5YJ6yMic6ZQMQWYEYK2cbpi1o6Zb",
  "key26": "5TstzRLKDhzbT4W3bpTNCfpuZtmDn9uDaNBfQX65b32eineLLJs2cErbF6Y4VWDn3stjsBgxdMSXf2AqZKyNzpHc",
  "key27": "61733dh4NVmUPp6tYqw6xtkEDQ1DgVnB1RUbNUoM2Lj4jXjKGzzpx9C3TVk4RsMZaYzudmQXszLoBepvQ1Uty3F1",
  "key28": "3zAE92YfVFqrU1UKDo25sXfdtmmRPsSym4onYQJ7KPfVrpePSHqXDRmNKSjdUt4Snsc3wUUAqMABw4Z2wJKvYZ1p"
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
