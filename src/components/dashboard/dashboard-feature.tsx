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
    "3tjS51KfkELJHxSzkFKsyKVfVocZiRJnK4rUFmxqkS6eYEPxioVvBF3Bt7aC5vL1bPCWzRGCT3GeRVWoJEq7wyBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y4ywgYiQ1f4vwnSXTpkrmCFJPQM6J6Bccufuzxg53paZxVjo8KhUAPDR4E3U69ydF62gg8jCjUAqbqrfumzGiiZ",
  "key1": "5AeLH6CZyUGS3sntPxpb5p7CrF9r1AgoBxed27AS3hQzoCYzeycQ77DsYBK5uVkKRQBTBUSoMcYxQcT83MyAnYTk",
  "key2": "4tckp4prx6fPTwWQgJoMDd7nRdoRsvmEU6BqFs55YC1ibayBgQKZF7TRfWL8PdxSzjNHXQZadoGtzxtwYztZV9VF",
  "key3": "29pyv4Qgfi48E38dq7YYCNsFdYQBujdfgysDpWMPP6wRRRkeutvyb3avmWrCcNwgjNZC835BGQtbbPjFYRHKrvet",
  "key4": "5pB536kSYPrxQQXtSsjZpjmNJPn66YNZkpmv7ybELhRFeXoTuVi8m7ogdqSZ6MpGjdVeUMaTqGiPAyPw4xpck6Wn",
  "key5": "5RCBW9MXhSo2efe7xcmqxDTi9dB18RPSjo2XTFHMQXbVL5q9G2iUPzHFXUxqoTjvLMtsPA64ED4J3atnviWt93HJ",
  "key6": "4s61DCaVXSMm2gTrW9FN1suwMRcZMcAg5zcjevwxjZ42wqNXPLjjhAKWiX9rKtcn9awJCnamCcerXSB6XD33phM",
  "key7": "4wfng6pv5tp7Yp2N4vr8f3n4RR4CMJzYVWXkCpRfuu94jtT6zGobHd9CFs7puzvehHrJzjn2vX6rheuyfVY5i1uw",
  "key8": "2sXVhg9VvLmwxb36hdUvpa4n9Y7XyJYukuXcgKjQrJCgo5JCdmK9dBJTnV7qz9b5xB8CVJDkxU2UHn5EVaGosgdV",
  "key9": "V88muSM3DP9U2uVJ52u5FxdV873LiSqaRBob1nbsM1cPhLQJRbRoJoSnJ74HerS4JQA4eMPpEfQYRN8pxXH7AQM",
  "key10": "3fu3JNuKn3S6LvZB74LreV4wm6sVBphCkMLbxFnQRNbY7WjwGppbnayWSoxKCaMR68AZowmq498eYjAcM1oXGqdB",
  "key11": "3xcGeyQBGryqVo4jxYjGUGvfK2h34MeLdqo1SpyDEMszzu9pgrqe61G1umGfcv8x8bked2tumn5g2u7S9ctXmrXa",
  "key12": "61jnri3ALuaY2Z1NNT78Do4zrkvdNY5oB5m8TeG14vvFnVgWQMUf7uzwFbkCRwRpTXZbvXGYVCeANJr6x73YHgDv",
  "key13": "57b6NKto6gEoVggrYdJhRNvWe67Lxz5m7JzE6UYPaUeBqpLnYz3BJodGeUbjqKwhWX93xe7w1q7N9RyU315mo3SW",
  "key14": "buh1rtoDGrpejgNmt6ueXjgT9w2V72W3ZcN1TRKf28YVVauMSmsmS8EC8XKkVeshFfFHUKM5ArRE1QDXwqVrTB9",
  "key15": "635eXktvhACY58WJQ7DqgTu9A7Rk4XLmvC8TZ6fwHkhPN4yeFEDzDeWQCkFfB2UWKCyg8MoBkWRiunPNxGMzx1Tp",
  "key16": "JGZdpWFkNjpBfsvywTGS6fapN5Nm2KCLT6F2r8YRFgKEjztcHY5CszKPiUgFDHFYsZL2kNjjb6Ef9ASoiRHyXVj",
  "key17": "3LDN9Fi7EAYWufYBAVkpYdTEERd1L9aGcFTL3mvaNrypQgqHu4zEpoUdVT8Vhv61YiTWRn7guYTno8FNywyT2zr8",
  "key18": "MJHxcTex59v3mrYqVCATuQK47mVeLbT1WBHeUN1ctjFCpnGXdZ8YxswnkxKnzrj4FxxNey8Vn4j7cwQVJw4kCD4",
  "key19": "4kuTLe8aFndibQgFJsGBB9m1XVvKQn7cJiGKoixEp1mbogWaLF1c6y3hVCmvaUvwesLmHHR7ABrGbqweEDTgPaCE",
  "key20": "5MAb2wgG9H6r6edygRvBoukitBj5LS4KYqpAPdmp2nn9qSSYghmKGe7Efz28LHHqpJmEsFPupYc2uSQSEDeHA54m",
  "key21": "2GJ2jUtpaYoP1rRLZNwQoRZBi7oAXQKBD6RenWuRRxUzc5C7XGKYmmbkfiN5CSFkieviq67RyMEmyySZbtyKNQmc",
  "key22": "25Xe3aReb3feXojXyko819aP5Eb4AxyshXtL8QffohAx5EsJSkRwvUrkA9rJBpANNBSxvtoQ3Hp5L2N2QfwXfP4u",
  "key23": "Q7CDiEg15KgxsLuRgfM4Hvv1twe5EzM6DxjoL1kx2sX4qvcma1Tod2pVqY2zTg47qt4qHeDapgj7g2mnBsB8wm7",
  "key24": "5vF27KHu88NCsCf5Rr9ymdG24jDwcYMziiX6AGJyZXgudjCcR31QRW48aUpBAw2oR6bzexM4NBckuC27mhLjJNhT"
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
