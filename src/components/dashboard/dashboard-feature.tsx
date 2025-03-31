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
    "dAwRn9vE6f4UaKryDFwPXbgrfMQGUkaYteUatZkeYNFmtikaPHKUYrDALiDbNJ3G1MRVCRYe7miZHMmYRXRUken"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dTVvSpTuSoBduXHyfEHGYVocLMTM6bQoD6EEBoaJhGhNyQyUtLryA1nncVo87jM1XeFnKbLiG5sqdhgCqg5cpMb",
  "key1": "2eA3Vmxe4v59GhhUw3bb3RqbSadyoK8JGTc84FENdfBc5P5A4nJ6iE5UbPC5auGRUcAVS7ngYwCF5wQNwkdwG5oP",
  "key2": "3hKWNtNjqZ2c6JYWJQATAEe8XwGEAtFNcYguQKCwRT66LLptocVj5z4aMqSQumkMGiTrmAqkU7o1LEcKhXtAz1Vo",
  "key3": "dXxLPotT42PYsNQBL5PakaBwwJijP1ArRL32kcpTfDktmkc2qCZ5r7zqTnreUBCenkT1aPFmS1VPyJpqtENukqu",
  "key4": "248vFS8DYPss8cDLcJ3rHWFeE5KSkWmGkDXS2b5ysrbtRCYbEVJxZ2ozT165dg1xK6ojGofz6WtVPzL9RYzknCwn",
  "key5": "4FNBaFXuz8Xtmk8Bf1x9SWfGt1ubuNEWKsVoCkGJW5px7dXQWjYiog5nU5ZpWV5w3P1Y9R32pdNDgUbBN8X56umc",
  "key6": "5hunmSrGHcWhAnNodjbVHHb4zfcT4q9eechNNTovBEsstrPY8XwD1XiFyxbKqAXWtN7q13MyjoWdRffaPn2CYHUn",
  "key7": "5eZJ697zTe5a3DVEnpUHVR5gWyLdABUH39rhxmwvtDKJHTBjFfBt5GqimADW4uDps5tSNDFjgnzTyZKrCgXPetjj",
  "key8": "3z2C38isZR5FnFHSRRLBHiVun3fuZizkuRNWn395vvbpxpz5oZ2VR9WSUQ3Be39i5fmLzDL4bJRzwK8wLFSVcdC",
  "key9": "2avKFngjAcYJanqXY59ZoBQ6CMvr46DZozVDBVFMLFmcWonuk9xd2XkFe357E7prrJjcpvmWDCvZCMn9xtKW9CG2",
  "key10": "56Kf69nFH3zvbwcsEYv6J8QHgUnhzkeg5bpVx47xR7rAHovKCZPSZeD72kF7dErrjjY5aowkKxwqZJJAkNR7rSVF",
  "key11": "5q5ZxpbDKchaZ8U7WfQm7y85vfAyXDQ7AUbEwo1WxupTo8wWUphvwF1fA5QCnsFQbmJs2eBwBGocTMGRkCaF4mcL",
  "key12": "3aqQPJq8KpAKimAD6CRsGxv61cvFWX92BmbquPqtv6fNz3yD4sKiF9RNPyWcSMG3TsdNN7X1zqPBPGxUrUeM74Qv",
  "key13": "3L4kpdouidvzbwhQJPxbmQacPTEeWWoa8ZetqGV2tVMk28Lpz7oDmREqHUUhw5FZ6iWRxDzg8Z15VGvu6zK8dGWG",
  "key14": "339uwsHPZ7daJBDWmULjUHkCVSVPms2jigeMRZDYKef9JJVQbs8nWFFWZjqDhgqkRg3UzMiLvjfJzMfstfReE9E6",
  "key15": "61CsqtDTbfGYjDU8N71eKC8vPCZq1rQjQxycGMipn88uL7oVg7L9D5C4CtRD8Sd8bWzgXoguYoFfFnGGsRUBCd9z",
  "key16": "x9q5MGjjFoB6iYGppv9Hjo966DjRgEVWm6igLQimWaB17PTrRpKfXPZ4z2ecKhZo5Rya1Uk1pQc2E5EGbaAiSZ1",
  "key17": "yufsrsmzYzKBMo8nmK5T2WfSWRxb7TaJ6q48f6VhTSrT2cqJygQqDPfr1Yz5p4r7hcdb3fW6TghwM2GfUt4AnET",
  "key18": "47AuwLhK5yQr9Mtd1kojCiYimpADtBtpBzDXSwP6FaHxYE2BrrYwv7wsA7GPeEx1pE5qvoEXoCiKVexdiD5KDSXe",
  "key19": "4su5Q5dGzwrHm23PGZFdYRP6Ff5UEAh3eqPDGjWyZGJi3DiUmefdSJAdr1Zv8T8tMPPsifACgW8XwBp36awoAriG",
  "key20": "3QW5E1U87dajbZpWcNSqBQtMzKQsqGyFVuEfTWgTYDYLcEYHW99aq9y2ran99gmBasiAhcvtknHt82nPAfSPJKG6",
  "key21": "NZvKTYXn2rSt4AxuFLnjNwJEyvPh42YQbJeHNutFF4uwaUHE3YxFSuDVztyZp7jNWpMxtJP3KbkMLoXwbUfTdXf",
  "key22": "mg1nWt4d7T2qe8Nnu3DYnt17fJXnwjnM4HdEw516EJznBz4weCyMJxLqpYPhT9G7N7vYUNKZzgXUE1SShfVQ7cw",
  "key23": "2m7wkvZtjS47iQ3br5MmtVNLjj6EsSeBdep5wyoZStKBmesnYDUCxmxXZGVCgPdea8Bt8ifRhsZCmydpAPj4zgbz",
  "key24": "2VoV5JeDCXHTFpcwiAWQvGhe5dDhXNwjL7btDdDsyodzXm7WenhMsEtErBHNDqQuKPyirdQrbV23DTUBdixsorfG",
  "key25": "2oBswYwdDYkMjCV8MNTH1dJoDmYJSUR4mDjsQdfZww5t7cbAyyy9NxwgafWcumoLRvFpRY4sMmPbJTtm2WsKWV73",
  "key26": "22o4GJBeA6mY6TxmPLLhCFuMZ6LJm8eLr6zfuQyoSNq1cWDcJLHoWMdXjGEYnswo6vXFGpoqyQwFXrkVNUegb1uX",
  "key27": "668AoLPwHSeNd6yZ3y65V5Wt9Mtjb5zqiocPy6armAmMgez2XZXwVTTEvjUBHZh52KdNzanBTKUvTGhVtofUTqNV",
  "key28": "2Nd27FsDxr77DotLx9LYXAEuaSELuhA6yGzGxJpP44F2FWzypKjsmChDBrKbRtTz39uXb3QN1PNdZ5tf3YQKMP17",
  "key29": "tvxucRqm7CFG2gbXVit1CaZhcH9ry229JwvLEWy5CVdwgbUDLcrYuvCqpSeFzJnPDSftKYzCuAprmVw6XPHjN3Z",
  "key30": "2khvMbfAY1tTXz3gxXFYRe9rXcd8QdoeEUzYFdSEapjV7sDuLtAKxrwvaTaKQG7hFmrbpri5XSiajZTTp5KGqrT6",
  "key31": "kP619fivvuMLhSbKStKe1rYSVQXBf3bzNWMqe78SLx5cHvvsztiKWdRHwocGKNm4oVJDjrzjenR4FvcKpaox8Gw"
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
