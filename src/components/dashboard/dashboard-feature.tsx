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
    "3dbd6BAcM9QB4oi3EWefdjmaBAiR9pvY1PR8cu5L8GT65316PaXcgyxDwZ825GC7X5g2D2ActSP81NWzafKFmEXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tbpSPPQULrAcjBs7C1zroZf7UMp6i1maDAdeLMBfnezNXg7dTpiA9uX1DadM6TzSvp7vymT9nQZG9bUVZdmBxis",
  "key1": "4QJ3SqqsyVffXuK4X75CG1CpU8cMQ9y9fB43n3pRKWNycdqk5T4rtArSgbwysjw6yZkdbscWNigWb3ifmcSjyqFM",
  "key2": "3ZhVeS7UAeXLSLBbn4hf9Dn9zAZhzXQR2rC3mdrUfmiHxRBjQZYfYPXFW2VWVLVPbeBdnMaoH9eM6G4xYMKZPnR3",
  "key3": "3YqDT8wCS17npFoZD6ApGbnnprUqrc53z4arBHmLa1MDcXvizLXtWEZXeuiyFd27zcZHCofcU9UPPwzbpqhtRcZ3",
  "key4": "5rk1Qi2Y6fdRaAHGDdiFCztsJpq1gtY8m9P6Cx2oeTTs76hVt1fHafgGtxXXnEbuxVLBUTdBtDq6zoxX6Gyu7v7Y",
  "key5": "3hLdpY6cZdc2fyLCQpiNKecUAykdsyJoh7PLQLbUGRysbgTEfqvMrWDxFcrJn8BABGpt78T54MAWDuHv5hzuFxtb",
  "key6": "3mMZLwddgVSHs7eNhiH2FcKq9DVuMvj4oyDMYLAwvuYACp3hhb7Rac8XpfeZe1sAkBemyUEMnsbQBHcpJhwceJBy",
  "key7": "522XXzGmB5qVsLj8U18t3knxgGFE1NbejSwchM9zQtUmbzrdmFHpCWPAzR8BmF2kbhjGaWMYE6VQooLYTJseWZbi",
  "key8": "2vcmsL5vC9zPEcDrpppamZafF3xRUiq4N2quSeXXUhQ15shphhiuvhspFSUzmVkMRn9dAJW43ePcsXXwHQTmVhHV",
  "key9": "4qARXaaaQEhYWfVRCg1sXkkeR8BzQC1be3NssAR47CfNBVhDXy3DCJAdhXhsfAhgWHzMsrarg4uSBwpkgs7FvaUS",
  "key10": "3Y5eknmVynrhtUrqUaBsA8cM9HSiKfMho6kphnASadAfcnB6KSdUgro6cD23H1dpTZVBjVALYUMf4EofA7LUeURz",
  "key11": "c86ngYRDqRHUB3VYSViopxfGmdLU1G7re8fSFrjHUKmyVGtgkCYqjTghNP9Dvh5ybeUpgWPFDJZsKKQVuNi3QWY",
  "key12": "5mBD8sGnb54tsDeRDu3f5JF6TETX4jY2C5LqmDwmEX5KfNb1oNzvH91exMGka2drYcv7GQ73f4E4JGwodJWJJkD5",
  "key13": "2yVmoxzbN4QJyAeAdmfsCzdc184FqFa7LaJChGQmjhkKihcMuaGXiqNN6xiDGydrNQRT2qDeMiRm4FpYhpC3aWfR",
  "key14": "29Fk88H4cEuumXqjxAb9bJ9C3ooHXga88soXv2QFJWAg9sU81JTFotkFF1Sh2NdGamFML41xVQFbsU1Y2my1mnTo",
  "key15": "2YQ8ppoZT84ghEk46mjUkobVEvmLVAd3abSPr3QzBwqXt1VavtCTC6raptuc5yT82A4BuhFGf7fCV1MZcATDmGje",
  "key16": "tcwNosW6qusL6fDpj9hUDXegGe91TSJAg8tPBLWeCc2SAboNjejGkruc36bt8JActo4iiGXMzWJD7vEhww6Mqet",
  "key17": "4fsWtHQSu1h7yAkwdTwUN2af96CJMo1jq6j3H9Kfd5vMBnPZG8t4YdBwccfsTgzX3c3XgbqVj844UgnnabtjooGU",
  "key18": "4tbunJZJH7YXjeKYtNTFTFt7hkqgRm6gkjRE9uR7RQGygY4f5MPZA9FzPQ1Jkut1mQW5QuYRZGqv66xXuic63QEL",
  "key19": "4xEuFzr1QK1JpU9EhjcroNCxrzbGWgc8BXDLhbmkS12sUJz144MRJt16cstTpooyKimRrYSNYWAYsAws6Bj7HxEV",
  "key20": "3aqf7s6exwCu3LpTDZYzgagfzxzW4is8kQTYzAuF54A6iFzT6k2s5JaGp4Vomeer5YN2Pi9gHPGXkGwzRsHDFnii",
  "key21": "5knBhJJNTegvXXvCRCzTezMbn6A97GpcJDwVwKoDaRvMePh5EQPUr2uXmLjU21o8vnY8PzEp8LAG35S2LYAC1QP4",
  "key22": "5Ge6BkU716QFg7Yw8Y3d1HcGx58XrPurbVLrra4rDBhmVGJFrhw1eEoYozRC97HxLMmwE9M2xrUgAUmC6G8zhu95",
  "key23": "2iuMhsmiAKmnVQKe1QNc6bbdK3wbe9U6PkKTLdSjFS2tMNtdU2hQTS9oKiVzcumYvMeztrfyLoHV8bZzeopWMVfB",
  "key24": "4WEDwMezjUt4s73otnLnxRJkUzmjtsnSLriWTT3Lu3EFTvtseu8FUxVbughDt6gS8rDx1pGwL11pVwN8A4T19eam",
  "key25": "36akxi3Cpbd7a8AJtgFjaKY2efjM6hTSqFpK3bXJ87LT43YYACyWPAgC5axGZkRAaWSQQWrWioh8aFHPP5HHJjsV",
  "key26": "4EEGSn7bWdeYGLCWgc9sav2CFAxMbC5sTpEgjPiJueapvz8PjRVLzdfBoL7ZpQQvKmDifgBi7QVNgJBXrZxz8LLy",
  "key27": "3iTGTdSUFBpogn2rjXo4oeNrRz6NbgwS6ZrZQV2TXcGiPrtJ88saX5t7Mkrd6m2MfktsYndN8qBNeE6wRx2FYVhD",
  "key28": "UARo1eUUCGpjAgmNvdn29AcceRQ2xqnKCZ1dk6ueqTDyoNJJZnef8RumxhFvHzyM9s1LVsxPBZod9y23vBNbwdz",
  "key29": "38vkoKoWntMLzgMFZuZMcDkwmEqVTSj3gndChKfwg3tbz9QQRnh88scYt9QZZxcB4WxFA892g9XMeFPb7U8CjPKP",
  "key30": "3GXevRYjCfEx6xoGcUkQf3M6QzrhJhK7PN7ANWQ32a5pCdzVTg2RuNA6TZc4iDFrKDwBBSF4FkgENxcffqmU3Mqm",
  "key31": "287SW8UoN8zqBgrk2U1wtnHBN3fapM9WBdg6o66Wjc55quutfYCpwgqFGC2XS1n4jhpefRgSgH4MgVARepEuSe7K",
  "key32": "4NysBPA1bNXfwRpQaBUy2jphSdLtw2721CeG2RfNLxgJPWn1eDUmRT8HPEepWZHiDeFAHQz5jyEUV6LMa5FjsMsC",
  "key33": "4vb5ochDnd2iUnne5S7agZHK8KXc5MJ3KTxtmHLJdhiXiQu12YkzhLfvKYS1WsMCeLVjCXThb1bJHKVMgmj7JvoS",
  "key34": "6sPBnemwMYJ8dEz1rKrKR7iKsmMH6XfZFrSmgFPrf8X77VhyxmjhVGoFF3jKVBikM8wYquBFxQYHgWWbrZcxPJ4",
  "key35": "58kiWRdHMqhP9ksV6G6pzgUvZ85pnxYesHvgVYNGAQ4kMACHCdzJrcY5dRjpXQQXqTxTb7V3WvQQMyVXjbxsfQ4E",
  "key36": "3tmY7uMhHM5faLXw1APJxxkbF78Ccn6YTUEmQkTmUPCQSgPTad7xSh9jFhw3M6F3eBXc9swdnKrzgDdv2aVjXyfD",
  "key37": "41G1ZWfUXT7ECwUv7qYMLTVz96FwhZEqahEk5zjfiWs7QMEvPWg2HiG6JxaWAty41ZYR6iP4d3tRLp284wuaHXko",
  "key38": "uRvDNFdNnHEYAPsWopsW8z2ikVTbKzWyjtm2VpLyoc8Z82r5jhPswnw7wN9H6DHJhNBwvJqUG3Aqw2aj6zBuknL",
  "key39": "2APX3HEd1DmRPGscgxhRVzCHx28YiTx7aJucVJDA9r6M5rhtY1dUJYsY7nMQ1nnDep9D7aAFNLYhYug58rDMvvdS",
  "key40": "2JRwDiZ2FgXxYA1nuiTN95sVvP6zDTSWRL5LSzGeWqHR1wowhnBBgCJYYTMqGGNFDxEUWDCSnz9X3C9TW9jaA18e",
  "key41": "4UiH7fojNidhznadeYxAgUp2YbQD61mCgoJU7SsT4EoaHV7fVpBLquc1ez88GnXWr7J9Mn1YPLNx8s6phKpASGnE",
  "key42": "36xGxE1noU8JydSiJptqQkfSuvV4bpY5kuFdri1fC3ANE7983YZwdXYt9AuBaJrUJuY7Qv4yT6FZm5CEhf9KLf3o",
  "key43": "J6sHoWfCzoF5QuFSbPFxQYPTtzgrJ8AH5fgp7RVHRGfbgGZyG246dM81MVxy9ePMkaTV3Q2WnQAnsSgqWd9wmZn",
  "key44": "5pg7gMGyUjJtgAYGL1f4EFw1fBdy4CpRkGYWxRWZcAAfW3Rkjj5zao7zKMcJw8xfaJvKMUdYZXG5wuUmVmKKHTmQ",
  "key45": "4xj1KzaF33FAJMQoz7qp5mqaXEznpVS98NNcmaeNv3WrBKmGhExffNundg3XsYbqwfbfRbFUevZfqx4K5xPVSa2R",
  "key46": "2cim5a9fDAW4b7FEn4vuhZcmhKa6B66jfJ1NC4MXXMdx98KSqq8pRQ1aBJc3pVq8fKD2JVxDhuiLqnZkNDTqEqPP"
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
