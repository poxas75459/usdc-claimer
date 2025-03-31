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
    "5LEn319YWmMkme51N1duCf1aUQBhSSTA2dPFcDevfmWiszhxuiFAK4t8wpry1jhAq82KdsoqiVf5Hbapt6yiMLwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdiB8nMhkafXyWarrvhaVf7iDKdJt8zn8MpMNyA8e18CBykEWUnmR6EW5tnkR7h2eWyfZ27qbnoRvm7WtxuQMMn",
  "key1": "4zh7FcRizEQfUQfbmb7yn7QPKjqfFppCoHzN3wgyJjQbtJTop6UqVojDLU24smf5RbS5KER3PSrJ3JURKTn38Amz",
  "key2": "5MzsUb65tqcrMefyZA7xmi7PhWY9rXpgKEvHMa4iPE3D59ynegJjw6793tAU4XgbqKqmZrbV62cN5C7vMShPDkbb",
  "key3": "2MmS1CM7Js35Vpuu35aGwKjRbXSDVWDTVnkxcaeKTH45qbU5A4szd7Pw8JcVzKNnL6rbmonB4VZmSjyCiQexnMtZ",
  "key4": "27djZpRBpv5NEvSAVxEGh8P3y7SXm8hzpaWkGVNJLb3fKfemDzhYPL9LqjQ4dvzpcRUiVGKouWY5PvLoVXfiSfeN",
  "key5": "3ZnCp62QUrLLsAoeKRtXNa6CZ2qUcw4jzz4igdKadzc7S7jNQQ3bfp4wXfwUddh2zT1b2sZwdPTqL6SEv2vvU8rj",
  "key6": "4Y57a83gDu8qyZbdBsV5fjQM4XMnkNPXqv5bgWCnhs142gQyYm6XrZcYPbJ9HGLKVknRr58yBb9EVKdPZYwaPhAU",
  "key7": "126AduRSvCpRHzLvZhggFiZxYt63YcARkBANqdUS9k4TZKhngXRkxdANgxP1wdJnB6DtLnzvBPSDJ8XcoLdtRZQs",
  "key8": "3xh5Exj6Zr1Cc1qXz7wkkzVcL4tMoeLc87umsHcfq5dSaNNyPDg7CC92Z6dWVeQSD9HFmxrLujCazjvyXGbZRZQo",
  "key9": "5HFgjVo3BJSpqyaZU2zXGJ2EodddnKehtomnoPWHm64Y9ZKp1PSe9W3DqeavCYmkUbRqTyM9UXYf7a44C1inNYCR",
  "key10": "48GQwswazUckCz4vndcZ3cw6eCRfn1AKcKY4Cf9noEv7hs6tjqT6Wf5oYw1J76Ri4qf9McD1horwaX8C5Qx3iH4F",
  "key11": "5i5JEmMqEYR7CSasmhbxY9ikFEs45i1Dgxgp8hamcdDDZX1weU2cTM7QTQoa59enYA4qz8qddVMc6tiyn146g9z9",
  "key12": "55XMf6rfh1mx5mYVMi8fmPBnNdNP5gfsBsMc5yYLnRri6MTevbiyd2Q34gd8vBUZugTCA45LLTekrjNnksbmve9m",
  "key13": "mytB727FqgskowjMPsb7wvXhWMDLHtvDFKBTRRBFx5uyQhru4CnvDXWtVp35ybWQZ55F3RejVKMi8aB6PuwyShG",
  "key14": "26k3nxUt1kevbQwzkpbut1TKf2U1MAMEj3R4kXVNDAKGrSvBxu8vNJdEWF4LViuNrgdbxKfDYa4pvFohhch4cFtF",
  "key15": "4W2pXkkQkqZ8UvrGC1qD9G2qsAJMKnPL9DVoiPZnq2iBGHMrEg8owzZkAmqoFRBm6fL5BtCrWeKXNwfqHosnyD69",
  "key16": "5S9XiL5fch2q3JiEnkZbVfZ83Mp6X7DSMV9LNYSwX1jFFpvrJMwMaFCCBA5Su219aUkZHPEXsepJZNXeWGNRJTT7",
  "key17": "47ymEMbMhBb6osEneEK1LyL5edxBfkgrvjg8z8wNhMDJsu4zV91DaPcqQkRPmYCtVKMXeGL64xQi5Yhmh8mjbN1p",
  "key18": "5Kr9j3h4BhMk1SzPNaVwhEFPd4qABxkjrqTV1zRRGniV4zhcJh2ZLAGZV3dyAm9e6Mp38CNmuVdPQN4x59M5DneT",
  "key19": "3dWqARserQj5MgFgmKj1N4ija4nZ7zYrWVU2r8uZRvWQc5VDUsf1qFH53erjvb3GRkGsAFHdcu3ixd8UV5SgTFd7",
  "key20": "59BXkTvrxcokXYiP9Ufpw4FomhpH2aDvYSyxV7i7nFQtATr9ED5zXXcfsJDsJ3WkRwpqDkxCww86Frz7AGojxRzS",
  "key21": "vmBqHztujSuJEEQ1cwkeEFURxgXdt41nU4XwsG7tzY7pohipEQ1E4r4f422f7WTME8iLoqUYpdMyXU4ezM4S518",
  "key22": "2ARyaVgUGqNWb39b164z9PBATdH3Venrs9Syq9VaZ9tRPTpNCGySV787kudH5uLbihJrgPRGJvirqEJ1a338qJdJ",
  "key23": "2hUHggB46M9aYHVQSPiV884jzU6c4mRgAeVDqaeasZk6SRzv8eacAy3KnwovrNNzydHbRyWxe8UznGEYcvZEjU7x",
  "key24": "2dPd64gkoWNfS9atoUtFfhbmeMDEHD5LKj2tdvzfkr3EQVd2G5UYi2f5AEDMExT9r5jG1SMFWUZv7bbAkPkaLRYe",
  "key25": "5qp2RYp9V9Xdi1dFbYDs5v1nGjQSvsyLUd64hyBSJRfFkAVYrCMMfCBHQSmHSnWSAhGx22jk28G1fwWoFmNEjMdm",
  "key26": "ftw6rzSBSv5ikNS9mwPbfcSC2KgEh9sQMWQfEbiBZCd2gCXruc7JMrfE9GyZSowzTW6iXocxBGebHf32jiek8aE"
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
