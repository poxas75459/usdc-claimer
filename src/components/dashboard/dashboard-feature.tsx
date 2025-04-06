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
    "5EAZJEHASrXLpnFeNzByQStjVPTNvL9JcYi92QnfS8CKihHt3mNKbVd5pkfVUV8eBAyyDszzwv9miemoiM8y68uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMXttNaf9EvGYtS5rfCyHp3coeRbwVZd8MJnDHbLF3N4SaeBwDW4vsH2YwzpzqAcvjtkxZStfgKzk7zgz4cqnww",
  "key1": "5YdGc5A4udngc2UK7H17EweegQzPpJSDtf5R7WYUkdwUbjctjRtvy5Uzu7wURDAEeiHUKoGr7DsTDXMT5SLaeLdX",
  "key2": "4QzxSJNeex2MH84jFi5YnV89g4Gk2DjNxUDYDcxJazDjMbjjwzWUq2CM1Q1HLAGtyJcz3VsdRSxqZ1MXR96tdj76",
  "key3": "3aVAvc3byuk6HNcGnDrPxg283fvsxpHu7Aw1LaZrNSaSYVKZDWEFWovsNzbmwty2VWUMKEnKxcuuC7iaRSKSCwPw",
  "key4": "4UnBnJP8m8wjH1SjtwBFQM22aiB2AB6tZcM1513gy5tKnsbAbGucRNZbLU97H56jKTr8jjsr6tDKx8oC6KGwtNBX",
  "key5": "3FFReyAiXY4g2APqbBXe2wstEZASc9ZYoxP1vL4iAeNKXCUmhmBMyNTtt9SyDK2aaWMMSjAiYfMJUsMaWfHA4pGq",
  "key6": "4L4vDdkrKR4j7dbKQN4MX6YxDCAsfYCHx556pYpCrw2hKgxQSd3qLNZAKUtRTeYEmfgGT4UTgsXzRvRLH7KGPdXk",
  "key7": "2PjUBeeVCgBsxGTCGuRrUZeFD5YFMPericFpMDhctRXaNe43z34bPAJPaKpTRwbmQpyKDx8Wa2Nzv7y8LxBmQtBD",
  "key8": "wjXuvi7WeK5pMJcgwaziJWTHTYmvxyXL8mXCBgkygGnTuYKfvukXuUhM5zyf2CEgMBcbtZCE76PaeHDS2LTcCBJ",
  "key9": "NgY4gCCyw8j5A6AvMgTN7VSDKuGEavfzbdJk65XcDPLMFj2czdMW8tFDfrpHKm5zcvtUwi2ibk6TEBq6JpFCiV5",
  "key10": "3RcZUdBkP6oNeLgoa9yw7k3cZdhctcd1tHm7D53FGqeTCmYn6Pzxpo29rHACqVm5Jwg2rxLm3S9tL9h8SFgGvBb9",
  "key11": "21K3vXDtC7XLTwcbT9KWTyCw9ZSHdW4pV8c5qS1q27Juif4z37VtEzFpS6of8tmapx5ni2bLy1Lmu4kT1shzh2L9",
  "key12": "3v5thKxenDWzTSnuvn2HHyj19uMjJ4YAfAoxemi5iBABiMXC1Gs7swHtLc3bZM3tq3iUPZPt5aHZX2q9gczTa2M4",
  "key13": "3NT7foHV6fcXdHAsECmK3W5DFSyjEgd8zn5ceGwpMYUiQ9fUM4mDStqeCxuCyMWwxMN7CGcqAdZwk7TtMG1H6hQ7",
  "key14": "2kciioyQM89JNQ7A1iNNoMfSSaPQoFDHxKvZ3sTqMikkPd1DczeN1NmhAKmASa3mmHimJVCdgoaQerWsKiUcRk2P",
  "key15": "4cwELiQhnfA2hjNXKE2uQvYGwJwGQezF5dLfnrjx5nLFjgzhaZKRtpNWht8wiGLiQA52QjUrX84ToGfA4TLJUFwW",
  "key16": "3UFsE8Rw4oFHQuxQw7jFkCGFuJExz2MtmjGKNSECsuDbE9Dn6pVf2wtGizsTPDTUQPQ9fscKTN5aZtvmXQSQyKaF",
  "key17": "V1XUusWHF3XsrDaVZjry34kJfoNoa7NUPcGGP9zskc1Mdah7sjQE1AQtYAZNVRDRJhSmvyWijzJMV9M6NdB5kc7",
  "key18": "sASppp9JbMs6v9tubYjSuJzfaNhqQRjiaqb8JFgno3oHMZ7zoC6dmFeCdvRUrYyGkbo4phPSntSdqvoTXtn7tRt",
  "key19": "4pwM1y5TW8z5XAQHsSfMPkBkDXopvkgqaBTiE9Nb5vRTyoAj9asaT444m9fMcyae3b7r3nVB2uLPHdSSHLNF6wFo",
  "key20": "5p2kNNzt9MWZLJzPhQ5Eo14hBMpJvvrW1xtjd5MMf1eExRZ7G3PiY8DsvUyzodiLEJWSJw3t9sXusPLMSNt9SWFw",
  "key21": "2i3y3geQc11cUB7EufRroZfmAdLNxcjo3FPYfxVrioFwZf1EJKAdgbDw9EeF6wiugyZ73ZnezA9nFe6rMgpDDUY9",
  "key22": "4acrqcBnLKrrv4Nz9z8Lfz63tQfdsxRLdvKqfz6ki8m9ywg5Q51s3eQRYr8kYwcfb5ixgPbwFsaRjHfRSJrBNrNc",
  "key23": "3sMNYXU6tsAqTNiPLDsyy88c3XXiNJtRHC1hSuncCXCX4ZZntvQ32qJCcLbfXuNYzpVSGR4JLB1FnaFT5dpBQjSa",
  "key24": "5zWsRtHMrdsAUYLoDP2bAWHDiEbRXKQ9QA5QmT1Z7pN6qZz2swZPNu7Pj56maGrdvy2bPLvUDJC98v166JwQJXhd",
  "key25": "4yvbmp6UBSB4HamBN3Ki88862tvdStpG5jEyEekiS2DTcHX753rS8mgdH4Q2wHU92fYK6ucX8SWxU96Wss5YYGtW",
  "key26": "3Gvj5sLQG1z9xFqRzCDH7ZW8c678CWTSbwkETk3XkvcCmMooqAqpa5Q5FZVun7sfCzT8fGd5E1AJRWmrDcK7hzXe",
  "key27": "4Xs8mHvkxBDKbDxEkZGVMepQoYCKSA1cpYzy4uovZ5exvS1irJq4ULjEGvUQ6SKzqog8eAYwyZQYqE8hXXszVLqh",
  "key28": "1279E2DUUmD3nLC1ZFg1SngfhXq8AYthxcEmNpTUBEJn19xNWvsjqUjK6jGvBVNbgYSp6z5fEQTSEinouKyqGvHT",
  "key29": "54hnwbzDF3uJ1cUr6VKrFpJz9ZuHp3ugsTLqT2qA5UA3ZYu7hKpvMcgVuNd1HXHzGDBnsiRVVdaV3jazLj7kH1wA",
  "key30": "3AvqqU22ChzNJo4LfJRnapjmXxXoRjJB7SRnmGeqyQrKzS18Ndd4SzJMzs2Jw8ToN13dcyztyaDNmkE46k7jQFXz",
  "key31": "2ePYBAszc7ZgCbNUNgPx8fFStRaGMhrF3hag4f3pJ7MPhmdEy65NYbSNnVV7pdMF3W4MHFV9G4WKfguCxwRoVmqB",
  "key32": "coP1wLuvWz1L8fraLxL8YjxGFYjkedbEvVrzu6WzMgVazNWdVdemcbcAQajQmczuF1uofr9sVjJSXpT8v7UstWS",
  "key33": "5q6FzE4mHvRAELh1X6u1pdaNjzchS4dXyEHiLW7Z8ZivtFyxBH1kEpm2sJtNFpM8yqkx46c3qc6ewJPnCcfVwSAL",
  "key34": "2yhhbMp9Um2VEu6JaycbixMh5o1hfdhqYbVNzgDycqbXZ7dpLsRyUzRCgtsrYmTLm2SacDgf3MPmcGkkapFBi9zL",
  "key35": "3HveGiD7hwTpfaykWFjJ4bprQKRBKpruzuT9ViyvbULCzJaZihtonkwUvDiXHxBNGe5xAeMQbgrV48GeJbgVivef",
  "key36": "2qvDGVc9VyUc8h7v3twbnRhWZosFmb9t35EcWqGFRCPeRubDS8WT9frhNHuAgnE8crMYsaJ2No5S7aML9EXRMtzF",
  "key37": "3dFHuDNxt1zPZfoT6RQ6gDnSU2zPvWfMHTNNjTbDiTmBvZB7HY9do5QZNXzgyZpRYATqWNFCUQzmx5iRsFk6iMYP",
  "key38": "2VE3ovBpWXWkG7zd8D5MMpqzLN9RJSECASNDBcHGhe5H3FYmPxmqE3Eb2jAdCjJizxHqbBL9X9xLWFiyL4wGc7Yf",
  "key39": "3nVUWrs8JTA6P58TZ619pH2tLNMWRNpi6aM6v5zzjQM5VW5kKvFoyrtk7djH4xci5BSVbTuqAwx6hYWJDBvLXX4T"
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
