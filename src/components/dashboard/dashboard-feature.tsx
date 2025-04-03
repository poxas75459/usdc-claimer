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
    "551GvsHVbuvybBdmZnjdKCZnLk81padbqvV4WL6PVRxCRt8ASUGc9xKorpqqEHxjPVg7PkFE1kuEcvzbaVH56XEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4B1rG9Q5rzAP9f6yjDSvZztcUE571W2i3WfKPVKZqRbAE6rZbfnXYxN9Z3sX4dbQejQCob8gvpdPKXqcsem3Dn",
  "key1": "2WwYkNCdaUbxiHpEJ4hRdQDPcgGFofKEGexiVxqbRnBTvuyjio54r2XdbctwEby7ZPGAJDWYkqCLCiuDmt5cKj8H",
  "key2": "5PhVgw4Fxfjv82HDZxgxk4F6nW4xZmCsU8sZ4HZMmVNf14cgQsgtFAuQyuTTC9QvP3waeTSqhUYdqLMHLpHE3sQY",
  "key3": "4xZmnWMPedas55XW2DV1bPEmy8RoAg6fAKyUSELuEyabspzaNC89pxNCso49yPKK1nkkg4HCWXqheW6Di1U7V4J4",
  "key4": "55Zg4wKdXrGPWjdLAAUgZkQe9jeZ31K53zj4iQ8QgE2yFzgJz2ymCrjwSkT84FDiPfada8e4ZPNgi9uGL9bhSDoD",
  "key5": "9CCHyGSTvQikUKNXtFidFuk7aDYsQVsr51MzcC9v9iUPpMLYVMPEBt5UuzbVpixshEJAxUdcVtWnG4RJvdQ52YQ",
  "key6": "5mJdwphYsqvQkme89wwykeWbj7sktBMiQvQEe1PsofSUvg7VkCUQrmKDorF1igFQM5J57N8svGaxhFrTq7WARGXT",
  "key7": "362T2gQxQscWstoRtDhXFwXx6ENSebrKZXa8kdz78kWwmk92z8xYb8g9oZuyopguFmQ9o9EQ6wXLF6rSQJ4TKzXF",
  "key8": "49dVujkjGWxrLxmUybygVNGzemt4Rn1voNFAQyryKvf851Bf1YJtT16dcuBumba4JNMnGaxDeb5GUhinn7M5pJou",
  "key9": "QTeMTyMc2D6ZEaTUML39QaHiFfi3H85pYiU6i7vs9LaSqTrRMNyXMpfxd36MVtSkdxxsBAStpwHM14xkcsqhDxx",
  "key10": "32o7LZ5FB4tADx9mSAhwcmfqpCp8j8DHA749bwNNHNycCZPb5bDRwF55xtuC9nhhsS8uG6hGZvs7vSfPv67gHunw",
  "key11": "52YWu7xaKAmpLE38tkZWXdkzDCvT8MiRzrHbVf8HqdCjKnZ1B7RTgVecyLeSAo7ELxizpFcbN9o8i2NsTKBCqwBp",
  "key12": "2ZBLxisxMqWZD6JyQx22nded7jVNAGAerZJXUGADLU4PMu3GFFXG2ouUVKSy2DuY8Qd4JEDvN4xCMYHB2KAb8YR5",
  "key13": "5g2fDJcu3Uvw1gmcxXQoZuVFwxbLnXYdCYrJdrXBccsocseyeN58L29zbVrfPDKcXtV7yAR2j6DsZQsAbPJ3QtT7",
  "key14": "5wbbbEFt7U8R4Tf4o5nuASfyMahn6aKYx68uaVbE4y6hzfKbezRZPeGCDfGvaJRiFnp4HXow3aEthhZm3sGHxTeG",
  "key15": "3ToAEtkNncAoAwxZzfgk89Nkzb5zwyeuXWt6zMGyFTDTYjQLdtMzmSfGK3SxHiyYgC1err28LfV2yWXd3HFeq4sH",
  "key16": "3eAGvmPfjTGHqKujsrRM2FmTcKSNEH5iTtcBk56kQnpvB7vsf2fZS3k1gzeZFS2oc78F59a53uYJuSrF5wrh6v8F",
  "key17": "4TfDtDTxF78ZWydu1YUd97iN1sDiimWP9rYk41vLpXUcZv9z9XCzgV1gcDWQZf8ztHpnte8xj2TdKKjWUoqLrXk7",
  "key18": "QGkK7ux79iyhBMDidLU6wYsbyNSmnT6FxwbG47Fid4ugkpLv1bGKYs9ptnb7cGX5WHSeWLBKjVqVtUwNRoV32mR",
  "key19": "r8GYAPN4s7j2BXAqCk6BH5s7EpvcmDqfThb55EL7hfDjPwmDFxWe7QWjue5jq6i4k9Wb3EfABaeaPFZeNfemDkf",
  "key20": "2AVFNbFmWPyjwjo1SVmBt9EVwX8xL7AQSy6xhEGtyWV6CtqT8rrXQej2osR1dUQKSpUzqEM2VX2qTvc4YToSxxZM",
  "key21": "2fKEVnrThFxzYePatRekTbk6jkwAonrnaoQTvGtp7W8SJNPSVLJr6A9p3CzEBbe2UhTRSas5g3Km4FFxYTy9T824",
  "key22": "49UnfYjEcTkKnsBoifmuLVpfd3zXV59pSyTmii2bn95fKTh9vvvZcqrK8T6caB1aCYUXVnVp3zsGnkaUfvmp9jer",
  "key23": "2p2REfVU6ijbGbcZCRYE7xRkSV6Nusir2uq9nZrSET2xfQPhdxyanqQetvfTTAC91jCV4qJ3wxAaiLe6cUfrc3MT",
  "key24": "46WR7uMz46YRz23MtHMshZKJ7Rw8SEi6CAXLC5sYrYdmgvoAr8dMuoRSRyy9hHpWyPDk6mVyQpKR8y8i4xWeFtZY",
  "key25": "4LqZFQT67dYPaHZHK1TrFkk1kpZAd1KCAmwP47wFxXCWMcNyidG9GYVwvhuzBNQcddAAm34pzY3bYYm2cFG5utEx",
  "key26": "gywung4eUtrvhaBA3frpVNQQBm9FaQsDVj9iCpkAGoheEjqHTnZkyWHjZKJgvm5PCRLcg8gFZbRkGGbcMwoa6nF",
  "key27": "3sJp8nMkjCPHJAMytYwFr6G3HYRtSe22653jbQqdGDzPECLYyDJH9ZKctzCvnqRGKcD4egMXx7ybX1jtk2XWNXEc",
  "key28": "2dQ3nhrQvGwQZGozwTcnqEocaG4jGAGLd18UcHRTqBked1XfvX3y1kazxESZ8LEBgvUDs666KT6xfhg5MDRZZfRC",
  "key29": "4VmQgYr3WsT1wGip9HC73nvrnY9myJgSSA68gSUT1ETb6XcwD5qPLuw1yPf99hiFvqj1mvbE8h35gQ17JYH9ognP",
  "key30": "2MJyo4SATkb8CGpbwqJ4mVi23xba6ncx78Cy2sh5dJ2cUY2ipM9yuf4uEjWfWVQ1Z4Ew952G7zzHf2VhnfPwjhRJ",
  "key31": "3ACD31dzM6xxCSgNTuCfMjmCMCyfEYGu84mXEUnLwKMvzZPC8nTRxJa9P56TM3yJVh9r2sTzUdFwVixTmCioVsr5",
  "key32": "4DToEHHueHHKtKMpkYQdkoVQz4PiAtQMebGeyUeScCnn5wpcaaERxAHoRqAcCiPxvhspoMy7q3NUnutXfsVwqCHu",
  "key33": "ifPpiYw6gjyy2eApkrDg38Q6nAcj2TnZBQrifn8p3icELXghu1V5af7kFCkRfdXqknx2niFkqR27kj5cPX4Sd1n"
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
