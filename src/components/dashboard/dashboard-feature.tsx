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
    "3miSCSvYb2Uh3sFnKvfNi5rYEyagA8Bi16qNp4Z7DgNxMPrrKcWzxSoP57LRmaCjx3DPR3ejZEYs8rf7uD79JHiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tf2zx1EfKtjJdXxf8UEtamt8Upmis6beSx515a1rtQDTXBgZ1hN7pTLin5WrPgaagpahJiX3ii8v5Jwfu29fS2",
  "key1": "2uQYpCpSS3GFrQj6WarjiktccH6FGPzE7tapcvYxoq4DhYzY3Qmj12c4WDQ9z6LARwwEsVPSJBopb4VqivRrh4e4",
  "key2": "4B7S6BK16zT7oQnYWjV1YMnitD9oBYMSBBaBsKUmaHhHLVTdA8ab7Q9ovDbzg85xxHbNF7AU5YkCKdSakenaoJ5t",
  "key3": "3ze71c1yTQqRaJEXt7TXeB8zf6i3XAk892ui5Ly2TPj3jT4dThngPiUuS4brgndH2Qmej6nvN2tCGvWT4oS33XMj",
  "key4": "dUn7paz2NNSAKx98Q7ZSQbKBpSrJc3A1yoJbmU3wjx6K5NsQErnbeprEgA1uWRhrvUUVinQ2KNLERx9pRt99WgZ",
  "key5": "5Gb2gp7pmW74etRKLLzyDWyituU4tnqwKVNwRF9eAfyCNcKtmTyAnJdVChNXduPySgJyfHScpFyZ2PQUeVEtQPGY",
  "key6": "3v4w6bfNeU4Dfw1DbNMAZv32fps1Rgu6FLsdYRHEUAB7vSrB6eNoRkViFAQuGKyocrnkCP3yw9XiaDTUE2y8HNnb",
  "key7": "5GSuhURLF5aJmVUigztYXm7mxXNwr3nx6nfmkW9njYGv74uuwBKVhAJygdmyYvrfQUfCMZShzwb28ZWNQ2MRu253",
  "key8": "Pg6e1pPei5VC2d94yfjR8WtweKeuREupnfsV57AkRZWNMGpf9yQdMyFgvtxrMcFmJhTPrzyBKpVTd6VZV3Y2DkP",
  "key9": "4boLqRoq4Qg33JRj1t9J79R5JRaaqshaxe7ePmcneVRxJRU7GYfu1W2Npt8WfhU15zL64jEBNFrPk1GaFWjEmaED",
  "key10": "2VqH1Nc1H7ZCEacTN3XJYYHzNnsk8eMq2jDzm2ymhXnAZisn466N8poYuufv3Ru63Z5CqPDeeVH3yVFbRCKfqQbM",
  "key11": "4SXqaNuTR1duMreSkRKEwzuArSEJQ1CoyowquQeP8FDWx5WtaEVLotDrLEZimx2nqSUxS9ySn7pChnbEBkcyjtRB",
  "key12": "2NURprSdmuH5jRAhyW8CzHT9rT1uTpaUPMYXgJptfy7hew9mtDMEzdDXj2SgEzkPfk7jsjB2xP7EJiL1NtHHE46R",
  "key13": "63qnRQ6d8c99YQfPJ39AkmSSAE2CEHkLbSMbpuxJzMPkbrc1vWGjvM5hPqp4p5RZzkf8BgvWTBD2nip27PCyAd6L",
  "key14": "65VFNKyS11ckrqgz9DiBtBx5Kivo3rM8aBrErcL3UkE9joY2HZqHKuPPDqT1CbyDJJJCz3uLQmoSjo2T6u28FXeq",
  "key15": "2JUe7sRYybQuxReUQJXtqHMR3cxSv2tcFkLc9iapqtQ2T5BpwvSFsK48eaJzXYeYYEW5Atji7NyNTQyfSyPEuJE6",
  "key16": "5RK34V8Fy9AiEmWzHrzUY2HHS4yGPLEYJG2pZirpya196HHvLqh8a7gDDVNMaMZSfV5uwBsB9wvvUtJJK1BfreLR",
  "key17": "rLCQbkkApivAUxD9Fp6AD2USuXrbNqEjtkV9XsdcMuTMnT1dpXBbiEGrNqbCog8sHg5fkW2gTHz9EkKdNyvnSWT",
  "key18": "ug7V2JNJkvMTPusJrM2w37uZGfbrLomBVLhGQo3zSnKXwxD9uJS8B2qrpiHnThiWgoLWNNxf6H8Aj8VT5kPCb8G",
  "key19": "3igUGhFJ5KAJcqbwWsBNjE4QwHA1c894KaYqSLs3b9coNKRDveDJaLpBxdYvhFkA62QK1ZqT2ntEuCrSMEcsWQN6",
  "key20": "314gAHSfZxs25XZ6EVpdgpz466LPmMafTLdS3dY1KiujXL1ZrBXcQ8TMNNJoQvBwgapQYzZbLNAS2czpvDMuTz8H",
  "key21": "4E8bArScnQMCTC4ELAujyR8LH6y85Q6kxK4aYSCBmKA9tt4Ud3CJfnDmnyiQAyeZCkUuSzqiWCEW5jaGiwx7bboM",
  "key22": "3NqDFmQeiNTp2Y7ybiZnYMXx8wMjvQ63Cs97TnQcDU9tby6NUP36npLxSFwLx4mcfXuNMyFCuT2jKzCsy6RALL4S",
  "key23": "3Xx8qSiKcMrK3qHYtiUreEFRrHkoTe2EAW52mg9cXwEtdSzSqYMRsJAnwBCn4PTa6faTxf7hYwujqnDqRBszipkX",
  "key24": "g8d3pePS5PXEjJgFHPUNw3R6cdouuZehLFd3hyS1cLWwMHjWj7Znm7sDsoc7iez9V9vRHzga6amDGKY7jPXgxs4"
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
