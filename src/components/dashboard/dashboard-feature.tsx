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
    "4QtHVmSLtNmu447RtL9pZmTWxGksXB7mihhQzT425tYPFzHCXFKdYeY7Lwm6FEwQuVsDFMApUBUgPpsfKWAQMZK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCttfAYw2kKDgvuUhACVhFkjdg2WAzhoh3uGPL5XkNJ99xsTs333meKEFWaptoDVsKKaqRbi2Qk97iw5rUiWXcJ",
  "key1": "4NEJMuDvFnKscTDZYtymzp948jNuncbxmzAZbT6Xoj4roKoG7XJH1nEYRuw4sXBBaARdhSm3zhDcndwZoKW3cS6t",
  "key2": "38rGQAKT3UjtMgvrEbmFYe72eT1zgqK1WxaH9Ba8ioR2XhY76EHJn9fouanDzzvn8BTzWRxLoUGNxCDwDXauuhDb",
  "key3": "43F1bZ4tvj2GJcSxKxeqd1QodX3qRbPFh7nUbDkjmEqpuhzNTMiQUNPxT6mWSvzRV6PSBcviD4weViszx9rPczLj",
  "key4": "251ha3MB97rWtFySb8kPRJ2fmKaCFNCzfjP5YRiPPSzHZ7Phm1d9Dw2aBqTgDAyhw2dQk1ts4kxmydKqozWgusSJ",
  "key5": "4q52T2QnA3jPt7m3LEjMfD9o3yowjMqrLuCECbqxq9ZQzURTDECmzScJVCrqrKJX1Zypchk6YzSViXdS9aCYiUF9",
  "key6": "2pNTGA78ZmKCzAhucGaRDqS828rZLMr3cZf1trYEBnzxknVffURWErnVvHG5yPGpMuwchCk5TdnabyNE6tYNSjj7",
  "key7": "2acxMZLDwwRnZU2QcYvuVzzSKzBDbkPjQjKaQodqzW7xFsycomoGStCTh8n6rzxV7mm1XuLexSDotYmriWmmjyyh",
  "key8": "2sFRefr2yBpYyfWHu2ScBim63nGkuzU6wid4t2XqxNJLnApyY1jX7hp2kEYW2QcnPL3fwuHq24ZNKxUHT1CAr9cA",
  "key9": "21CV4R1P1UpjRibF4peXyy44CdCXrNSg3mMYsmPnntbjH9yu8XehX3euTJ6dPseXjg55UELx1BiymZHNGfEnASU8",
  "key10": "pr2gX4D8Vk9yGJHQomQSSjFv29E4n47dC9f51FaiNC7JFJmxiuf9qZBTEssdFS1e9Vvcr3DV5UNjQPMwj6bFFMW",
  "key11": "2RTBJZA4eZLiaUXkgu7dhhcy9YKD1bpzYtHv5xm6UaYtVpgQiDox3VtEysqPzp5txVMmWjeM2dRa4uKe5Jm2TzcG",
  "key12": "2oaAr9RJG4J9Fy1VGrrUVhV4mjLRDPX1WpSwvJGLy933Ev6pRxWtwCqxszoXqFF8z2X7U6hhAZTDUWTJBNjtrX4q",
  "key13": "2Dznufhr8iKAZKLXojTy7gAjGPWNgqEzTkmPKLKAFzRx7NDxPgAbeYMj1CH3XJVbNDmU6TFJxrR9LZMS2vG6rEWP",
  "key14": "4wpXV2xhdDiyn4TvjefnrEwV7knJmnHpKLiWiym1zcKkDwpKirfva79NwcvQvFjWMRJaLJMiXYEk6CwNAVJeyvQ3",
  "key15": "3S5nhX5rhnB2B5BfRKZVUMm8RZ41zHV5mbb17XNdeWX3QHhmNW5Vw82HUsDs9fQZunHznXbcj7iyXqQmtFXSVDoy",
  "key16": "4Dyrj92aU2DoQrDT6qGzWmL87FAY2Qj9dtXnGe5mE6qS8VwChMQ3dZVrfqdDvQMgD4GXV4a6buPEbFr4ikaUtHRD",
  "key17": "5RgaFd5W8H1YP24xD7BuEMjSRD9776jjz8G4jF7Er5Fyx5Tx3N8tMqDZBaotnqaE6WR3Vmdtjgg3ke4yZJvEumbM",
  "key18": "4gVovmFp97onS6Ni8SGoxrcQSuLE7w9eCEy1bH4LBWgracWdb2grH3Xd6bH5p6zmPfZHf2zkGVbqfi8BJps9ZErg",
  "key19": "5pFMmnA8dSUwHiMpyEjst8fcCdYCVzA386NuvXfWjCHdXpJoxAiGWe6qL82Gna3zPmid8VkAMtonSfmMk6UVeP6J",
  "key20": "HFc3hRnNe8vE9LkZaP6PhoZvZMXqABiaaCE3PL4qH6jXpPGhRzn7ESkKau7qfDnCDvgJKL9by1ushSdQy5NBxQ9",
  "key21": "5DfFvr6zNyXeuaKsJuWPjHzPuQHJMJyCkdP2f7YWBpfwzN7Q58bxkeEFsncSGfYM6UJGf87PBZ8NgtKxaCjaDofj",
  "key22": "3fx1TNvSf7dvKQsqurinvNthbkMYz9RE56YLB3WhxubCfLSh3KMGMzcxAH9qNZX5xyjZ4qWJUeYAQmwywpgSvTwR",
  "key23": "55FZC8Yug6mF5WTGmKVDzzZNifs8S1gQWuUPHAeFQy6vZUWfnHFsUgoNQwNHXwDzTdLeG8cohyvZu2A6SAqPKsFJ",
  "key24": "5sceR8JaMHFAJmYAFZPCGdQST8WcoHpZ1PedtTRx9L89xxXZ3gjiAA9RT8wxBg55CTxS9yhqr1KTyuDBSqn21b2q",
  "key25": "2wujWrLmqN8TAw9PWQHQ54Gq2EPuaeZxAPZhP89Ng849rJFzmTWB9tDVeG11VSxciYaMDzZuGvqshKqtpZ1YtabR",
  "key26": "63urR1Tp5piVB58iH2rvPXqE6oD6KaXBib4aTwm2Zx1DeRSAunTuQVSMkKLxRf9dYAbcKzKHbHDKCndih3ZFFGkQ",
  "key27": "4fN8J7TFCWk9AiLmjY8kQQ5BodiH6HfGVdFcsCCr6Vno54T8o5zNNq4ktCJ4a9WZP385SbzfckDtF9h6im7wWZQS",
  "key28": "5RpwnX5MuTi4QCXrae4wGvSXGWK7LKkFx6q43JrnTNXu7iXmb47vEBDqRbumSruXFoj95gpNoDv1wjp2PcbH34q1",
  "key29": "2vQT4tKQAtrRodcQY4QxpVJcNqEfa936xjj4CbVfUpBusAjhggfhUZwhFbQceGif7Z15vMGE6HZ8f4buoBQda4sz",
  "key30": "46i2LBXb3A4VLwfA4LhthnEijfypu2nKH3Gv7ddxYf1fQSAxg8akp6yMTmzHHhr3jLUoswuyLJiFPos4FmMCM9s4",
  "key31": "41WNwfhbey1MsNZmo9aQvw3Zj83ruhJgfpQUG5hnbb4DSBg5xuzAm42EKF6AubQnDMzj2mBFYZMRsfbDnUq9aFuf"
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
