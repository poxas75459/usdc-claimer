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
    "5CY1F7DBFaQ22XnffSiQpZZxYxMYD6J5vjZwAwfm3ndGZiQGSBnhhXjqToTQAZ9rtCNBv2ktX8M7rz8vcfaGkY9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LUhBBeWsnRv6xE5roKcnAroiiVynoEhBD9b99isTBn7pMtGUiytvBPrDyW6eTXdJUBW1oJ7CMY1zMc1zbRvNebK",
  "key1": "3jfqUt46xPf8svgrU1P6GjyK2myFJBgNB4ELuCfEBDkf3L9Ggcq6ztPtZci368g4JnBbKzsTuAj3kafhm7t1MsAz",
  "key2": "gkwQ863rnwVAjy9ZH8NNxghWJV78o7VBkRSKwUa8mzNKuoLTktU5Vm4Afg6qLb19nHvW6UzYbZZ5ypTMhGN8KgQ",
  "key3": "5qiufefG8dgqeLwpck1Ea2oXMNahoYBaJHiCHean9NzJUijYZLqp45dgL6tjcFQmfvJj85jhGqHSJATpAjrExuEw",
  "key4": "2i1EKRs2VEfBdWAwQgv7mq64iGf6tinbFX3ptHzK4H9w44LdnfFMCLQkjgYWTKSoMTvCQ13eCakkjorgRVTCYN28",
  "key5": "3tgYNacHgRuJBReipiDMuabttonkRJxv38sdK6UsgUKMnzNVcSRaepbeXvymh1diBw4dYu2v8Gebxtkx32oEuYJt",
  "key6": "qikNGHuShbnVdrFHV5sqHNQd12p2snX5PhfrcKE1XzYamBmdFV84nSQpPc2bXMmWMEPfCBLGKGFny5mTx6W4xbX",
  "key7": "5F9s9dZpBujva6RojZZyzoetukpFNRqiNUoSWDsoaUJijuvXoXBJsUfg1rwyjtZ69KesVYu5eWt8eFDZ7dFyswfM",
  "key8": "2E1g9jrdT1XVtmwF2yhJdRvRwm7ku1kFkrhPVPHFa5wLk1qb5TZF8y22iCwB2oTqkKtL7SxaQpDk4W3WxhVZzGDi",
  "key9": "2R4Q1CUjNLvuNmWutcx3sBN7tFZPy7cXxzybJNbBXXvaZKkjs1fFd4DFmSDzVXDqDAvZxMqDQmC43zRDhhurTHTr",
  "key10": "2paLK7Jtnb5S98NJeeEkz58d3K9LfPmhr8h1c4DDTdZx3EEB84p46qjFywvjXoYVAKdmTdvexNEe4htu4ms2aExg",
  "key11": "25KyRsURiVddwqgbyCqHLurSnEyAh7qHMgoem77NZDwhGjZbCAVX8ce4QJ2qV1PAqLauCD12mZMJGCyHm6aBnedD",
  "key12": "Gh9fznLxvGKKy2CUjbadWGS85Kb6jdHcqb7TxUwJSnhKTLyFmmPSxttUDwKJiPSVAPedUEny7o17Xey3GkZEtFk",
  "key13": "3NDyK9dGtGKUsYmGfjJBo9wjcHhSDHA15B93gbg48LH3KTRvRA77hTRmjXca6GzorUwyHTivVTAijU23V4uzH8wT",
  "key14": "22DnkbbUCfmM64iB5xyttZDzDKz3zEceMfNETpbfaNLgh7eYxdkKtsVnBPGwC9juf9bHUfgAsQ2xh7vZT48MBjNa",
  "key15": "G1odsGixEa3QYVgPypKRRZwn9g2P2yhNnePAphtGpLkJxetNw5XZWDaKeEdbYwAHYJxe3eLdW4AgjfmNbuiZhdK",
  "key16": "2QYk68SfaJXf4amKRy8G6dNMxm6Zij7zyicf9zugd6sc5umaZY6bBTgXbywQsQQM2a3iaDASK2FboLEhvmAL7rsJ",
  "key17": "3RUNyq4qSXSeuoUykmW7ERGofnppfyPv8xUGL5tWDi5zReYyWGLPQVY8DLrNajarqv4oGCPpLwyiCuMW2uk6zVkn",
  "key18": "4emk7hFdvyUozZ9Jw42yyaUympk61ehJ4zySSYGMEvT1Kv5BQ36dsr964VNSHpAS7tGpCR7qXvcQbvxTTxFZffZf",
  "key19": "4VWQQi8ZjHHj4KHr4AXk9xP2rLeCTYKoe1HkdZJbNAQbUHZ3gvDbFxjisRNMcLW6xg2TBCpVRBhfBCFZypX3No4w",
  "key20": "2wGAVpf36ko9gKJaK7W7E69ZD3UHBjL8C2CtKpLWcpHttLfkdmxDssbxPriAor1jQhmhih5mtrk9m4BiF6wJfALq",
  "key21": "2gUmWKj2CGDeCZN5hhTK6ZURWZVaM8QkcAvgwSYaF1hxYEiXhTnp5TPz3boYQ8RSCbFF63TLkuAEaTqjmPwe3HQZ",
  "key22": "3TEyJd3S1eskShgHoR6jn9JJbvLGZDe6sZ8FfzWdcATZZFGG5t4zLihTJVpr8LFDAbJheZNATWzDXrXULXasatsd",
  "key23": "339JiPFX9ia1Xq4XVmuQ9RN4ydS92C4ZuynFYAhdWrovpfTFpkH7KBFyHYH8DwfUKfxm5iBSsbm1WLeikjuhwTvV",
  "key24": "22XD5ZWL8RM71C9Gb59srJqrKj8EZWpuW1MFX8wRzKgy7NxeptWGVZcwsatHK1isGYwqDkSJU2vWnCZWRBCPXcKS",
  "key25": "4DVjwzGuQQzbc5qCHsT5vV3CYqJMHb2exHto54PVnGPFD3vJ9Hn8hKSQHqe7DzyQWiwrCSmN4ZiRat4oLXocXAT5",
  "key26": "6BPLAPSrhCVvAeqURtCQQKcukJQBZo8xuEauooYBwwPwxm7dvxSJaXZdMUsx4udTsPzkmCMkV8dtkkgMCBX8SaT",
  "key27": "4a3DypSggXUtKHz9RpEJLGqEBdGtHLH68UWEAfJgdKCSRSAZmMqWB6tyWDBTqRUMVwSUf5FBVP2Z3doLBAdGvZCW",
  "key28": "3MCy4tWQ4WmzU3ZEUmPpgpG6BPN9XhAS2DL1rFyFoK6RdYQwsWAGsuTzBV21wzfWYjrtNWMDZhcDbgKjZ9NdVXfY"
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
