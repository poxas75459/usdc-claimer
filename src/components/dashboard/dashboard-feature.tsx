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
    "5idA9KXWEGaomVrhfUgv9XPmrtpTCcpaiGWrCMUvobmETBGLhCCVteVoyYMoHuKgrDHk6uvLgt4XZy4T3YncrD2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmdBhkikiMd3kG3vWDnhXPfB56AXm7tVguVMDU9cdZaGvuqxZUhFqUVhS9b6ktFQCQ8xxz151tZZYAoSCRCLLVC",
  "key1": "Vn4p7Q4MehdQTXGj5HH3YXVhVXkS6oj2miuzZTPyNLvqiGaZwT5kQiM7VHCg2enuzxMU3s29fm39P5QxqPCMuKk",
  "key2": "33QeTWitDNLK65tZGbfLN9SfGKmXwYNQdTQ5kscVi8e2oYLm4SXxzz17JV2PRPyKkVhyS7ZvmbJdjxVkNKGnRFLB",
  "key3": "2ftJjgWMAu615aAcYbXCw5docZ7szQ5mhaXnQgxmr8StBtxfaRQ7YfTpdzP3z68BU5vX6pSDyeUSRDdyTj1k1Uhd",
  "key4": "44a7o44ohJZux7o4jRwsWMoF3T1ni6w6gaezwXTattke8fqLKfe3nUYhxNVccYELr1tVTUwHaywwpznuhHVB19DA",
  "key5": "4MyPh73ME2i8W31c36Wk97P2gGfLPumrxDU2BR3cbgyFTq5K6FVGkrcVp6iMX1f9HWbshDVY3hvgYW5ogf3KVgz7",
  "key6": "34q2L8M6mbjNrunHGWaTZG64DdjrUfzxV6sbpaW3AWXFXhCcHEQ1yoAnZntTqewmZ8nXTAMazQUaxYyRA8PnwMcx",
  "key7": "G9tjtHxeLfoF2DPEmmXgsh1ErrHWcS6CcuuaFJgriJ7H14Tb9dSmvcYijP4Jk4NxwLTjkQcEtxr9kFLHasQtqCG",
  "key8": "rH4jV2R3PhmvEUAySyXTg61HUpW548NnWjLNGE9sGrcPorL92iijvi9N1FmHsYwVvtiKfkA1i5psQwAg2JqGkeK",
  "key9": "4LfFxCZHzhfKpmEBnMg3TreN4R8pyxqt2TDfy8WMreKT58HQ9ELxhNtMLQ6cAzopnmt6TzmRrn1VZUJSkkPVUmEQ",
  "key10": "25RrcNejYLP1Jx2M4CiGbeVBjEXhqpf3iAiaghXBmCMQmsSLek4dK2BXFbuBf38DkRVvkd8m5RhKnwPirp6eygKd",
  "key11": "58TY9LgVdBrhmMGpmgiiR5Shy7oignJdNHytPZgf4FKp3vPLh4NHAF9XqXAmQDviz8WrDKJdU4d8JB6HLquUW5dg",
  "key12": "3wajpsaqiVwvMgZA5LJQ4PDesQorNvorqE764cDb3zPyBmj8qK4Vva5gmbhaQRq8G73hGnUm6kZdpcK9xQYG7BNw",
  "key13": "eN2nLJbE34dXFXmCyYWDDTfZYHeVych866of5Nbgnx6exBtBfzMfs8xrKUXoKg1TF5EeepzHTsbVAxm4cN187V4",
  "key14": "5xNsLc6UcGupQa1oQqKknGxxByR9tbDE4QZZZbyufn94mJzzrQkxRbvwVNp4n51sZ3ZToVL1HAXDks8u1hbD6yfX",
  "key15": "4gsABBmxZQFrrp9hXCFNNy5yzkA7WyXVD6BzztyoVdHvdkX3Vpe24PN6UKfydE5We38HSVknECVAeM3Gkr3NHJrD",
  "key16": "61kDEK5RxSQpEFdjWu2LTMnDaPQN6wdSbFFE1Lh3VBEqoSJ9yPDkWyHiYTJw1LkscrG2knUQdXeVTtxSBgUJTpUw",
  "key17": "SDmnazksyqGLcotoC8x8Y97doenGxxqHx4eHPuMcYqZb7rCJznVyVHygc7iU63uMd58yQxN9pd5i6t8SCpy6bqK",
  "key18": "23phr2exJnuojsh7g1UW21soa1xMczPcwJLdbZdhiMh9KGjBN1AviKmvJ3tjyMuNFb2YSCnfi4SULaERWPCuuT6P",
  "key19": "58aDdyfkykHN6cy5CJMWBKSB3XwVsuapfNZca8md6Xu4Vjc7ET51kwzUNRFwgidooSCD8S7xfhpmqwzB4Sdg7Ud9",
  "key20": "3K6wfhdShNoK8MfSggZfP37iucw9bSugU2iuR81ULXKSThkMQMftELEAc45eqP5JAwk59FSa7JtKtwAFhgX4SYzU",
  "key21": "2pvTxdnvTuK4kKUMam8DFBDox5ZzQiF2rqJLPDzqitdPZSsFwEVxtGVtx1UfEofK6MRPYvsKbCFrRAch2QtEcG5c",
  "key22": "2doLr7HYvJawHVvkRuzcLxN51sYaTy49Ej1ZseQ75xgPtKmT6awvmcboExnw5AwFYkCfPAVuAYBcfHg39btbHVP2",
  "key23": "5Fs4YW1baA2UJUmnoFpGxNF3AdYiRcujdS9nGoAWyQXzRQUKYFwkV6ghP3F9Dq3WTGzB3GXf2a9oVtgGu8jNJArU",
  "key24": "qX9LFTc177424HXcu4KL1s8foPERFuos6EZzMfipkFrzBpxwrFRn7dF6o49zy228cJTPDP6gdgA69zB9mb4MX7i",
  "key25": "2q3L16oxSZ1dhCCN6jbUoYE3MenVKuU4Aq1kNpS9rxgw9qZcSGCV1fZTEZHBgXbmx2NXmw6hRtQHKUUWN2SVCWcU",
  "key26": "3iLJZPsja7EhmyJii2en3TVCib23dN2HS3Fh3iXRKQsZy1aR2A93R864ZVX9UfuL7oVXsACn1s5e9fzJyqZ6JDyT",
  "key27": "ksdZhFQux1FnGrKqybKJq8QmRHWbBGCCCTAtASgZoEn5UfXXJphrEtHBmfdxvoatxw6HGFiwiEbeHff2Czh81dD",
  "key28": "4wcE8A56hyghhsmBxkVnzYELVcTXKSfLtQf6KzLiLeX5FPdB2XBKMhiqcseMrr6S1WB5bd3jCpW8S2qXFZtZnYv3",
  "key29": "4eV8CKxet2B65oH2jVK7VxBiTpEa9fqWJWLL8uScRNaTJB2VfQoR5PDDpkCKri9e2VhAowvRcsvA8tcANk6cphHG",
  "key30": "LHxubsfxnMCPe3xP1NnLS7t4mehFTzThsz116cDrk7sqKsUm1wnKfWne325YTTnEXXn38kYq57NSwcpR4AeQ2y9",
  "key31": "5tz57MqvtmsAdNaFxkVUJmvu7W71Yc5s5TTxo7Hc1na5CXSt7jdBAR8iUBg2ec5u3FW7Q2vicz6infYW4VVLKb16",
  "key32": "VVZFkCaWhvEarC89mjsG8sLBV3ostH1UvZsMA2XEq67ghXFzVfH7Kwd4su1Pg6R7pbuo1fz8nc259z7pa9ZNUbU",
  "key33": "5JYrWfu44gkxGHQoQn5mK6rNm68DyTb7Pr11kS74Gbe2zkj7xiPbrHxqDRuYY6JGPQyV3yJDxPzp3ajXUx3oSAi7",
  "key34": "4P4QKSUQkGp9drXnFSMSpGmxBmoWQZPtaAYMqq59VxxuWtkEnPJHBZgdV4Rc7GPbkPtvQ9q484PMefvVsAacNjUd",
  "key35": "G5mmEG9bohSgcozUaWZyFvCT5WYFvRrNGTvm3RnhGiaQkwFXUCDS51oUTAvrsuzMBkqcqRcDsV4Y3pYbJ3QqM4S",
  "key36": "4iGETYyRYNp8sF2SfGjyVCbsVpxe4G1e7CxwYM5hgYUSf4bRzybMxqhdYSjbCc4TqQxGsHwvxrpHUsi9XxrWxRKg",
  "key37": "4NFhd9uuvTekaZ8U2XZwYF4fqqDaSohQkprYJHuzJ8fA1JiBHMGeg3LxnnMHizu6NjHUJVfJ7ZmAvYEpAfdsKgYw",
  "key38": "5xxtFVBx8d9ddS1hJCRH7wdiXBrb8ccs4o3rbYZCah9G8tiNzJXSh8gkg69td3sdN2Mb9RVyfGW4CzrasPzvgfnP",
  "key39": "4y9mTkNYxMCDD7hq7dEvoQEyNPNNEwdP28peudQ4oJx4F2MHagZfkUamJ2xhrFNXLLJQgWxR95xX5xjsF8kFDWP3",
  "key40": "2uA2opzyEarmAXQetDAdkzME1QCP25eaivmccoscMsGekQQntJMGMxNyVQaJhRXpJ37WGEYKAn5sMb32MiJ5xFVV",
  "key41": "t1bsPMevLQLRsDPErMqfTevXvtXrZXJY1dgvouAAZHkDLMsJqsYuG3pA7P6pHuBTdMNGdoLKXNHQSB8sgbXPDm3",
  "key42": "2gYMS8pTntBAAS7znhWJt6qvcCSX4bnDQ1Zq2p7xTtwzPAqRYYkpbVXjfCXBYfFmMB9svH5wYzk7NhTgp23SmYaJ",
  "key43": "3ZywUSBHx5DBdnXQsWhpqXjEUCuog7AwdVesBAvzqrrncTubPVrKaoTDbYz6ExL4AjBaQcr325yC5uPYu365FEJj",
  "key44": "vtSqXZPCVUBGwn9wbg9bbfYomowLBmBhxMw6wXajTWrx22LMoDH4MYZPDFmB5gEWWSG8q7QtoTqLm22zfqKKPBq"
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
