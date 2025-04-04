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
    "Tyy3XWZx1cVdyadERqqotVbyo3WyfKz4u4ngAt6YWcoxnYTWZzm7kpPCB4SdRVxABp1t2JsHgKuYdG2cevuJ8qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2KLgX8BVZuGPhHgtxLeSmRAEmWKfvcNTjWfjA5mScVkHXRLPH4564b1GpCG4dzrfRzyEjw3mBkupeB4CXCwjSJ",
  "key1": "2yQWVp7GNAHKw8La9LWyKYjEj6qvzdkRpZXZ4Qj4cSww35Gyshn4BH9gA11jzGgPT5NuwBVSC1pfkqCpGvvrjSGp",
  "key2": "3tLuateayJKsLRBM8PCXN4zY1npJ2xHfN7FDRCFe7SQ2jGz4tGXSs6yFkcK5rtjPLzweCxwTFaQVxZwL36fhQYPm",
  "key3": "29k2xa8RnSsfDndqWwxE5h1wweVpXi9SCWGFy7JhVvPATSiNxTwzsRthfzmuWsNQMC1q9ujeedXuaZrQjbCFXryJ",
  "key4": "RUnzLztF3awEHbUyN1MuvpLJMFGznRr8iG2M88iaPK5VUgJn4AjvqNBK3XkXPbAFnFFxymT5XKGVXhvNCLNzp2z",
  "key5": "3koQLnok1jUzCBg9djJSnj1tSmeBVzbZZF5Lj8HYgS6CiMogQdR9qdPKV71JhUpHbDN38yNcVeiLD6k8uMjspAxc",
  "key6": "4CSZ2bQJszz38YgLEq46HxQhTf3osNZQ1f3sa8XX69KFz7cHEdA8BBzVJXANtYoumxPXRCRyQ6jbr7mt71kxjYak",
  "key7": "58nHEkdV4LFE8h91gaVPqa5hsWaHzCjQyGTNt3buUzNXiBxkoFFWcYuyAtzpgbseG6YNCNU5rSRcancjMn11Ttyy",
  "key8": "3CSfPZyhBx6QwY6brxrcvyKrwGizmJu82iLh3DKZKd1DWsfKtJmiUDpDBJfrdnFEGD1SPnsYfnKK9hM89qL1LUhW",
  "key9": "4dcaQP3TA8cDSqJ5H9R98iTp3n8q5F5WnfSw2Fk4aYr1tdu83gGBLiw8pKtE2q2FDDYskKnxMyrojrYi6xXb1HGS",
  "key10": "4wTW2eoYJr8MYyEx23gxNDNS3ALMTU63Dy5dFssK4DnvJRN1KHED4Htiv2dwLmeTicPa5LQjhN4shGefC85do1Hh",
  "key11": "fVDKc1iPRgjWbRPxLbtMjvqsVQnuQZdABU7Ydxrb46gh2SWtvLKuNxsKPCWB3v4zFsi3S18zAQFgb6e3TKyrefV",
  "key12": "neiUEdE7PtapiLktMY1Xj4kBSdyYrS97E7Xd3Cz6Fm1DwwNpdgwLiKkgQ4gzkqLPR4smjDqdDfutZZFZ5GBrCGF",
  "key13": "xrXV6jcBZkwAifjKZJ1h8e9tfM9aUqJ2jT7TahLx3GhTbPWyLrNLkP95vvYNotFHcEPVZqBMmiQLyzfRHX8wwVe",
  "key14": "5idgbe3Y47KiZKq6dW84CcfQRDA6xksSLkRBpYyjLUrNwPBqws7TnxtWqmANTMw8QyV2keVJdKmoxj9x8d1UWZqk",
  "key15": "2w3hTjiMpBHNDs4FzW3d6Gp6SZukjXjihQeEJguYxmBEsMd6pWC15cAoiMBHQNRWtxu78oefLZPsk7c8hwwMKZ6P",
  "key16": "2cMbfiWz9j5E9aX7eCsfbjeiWnvL9HRiPVGz2fDQt2rvBmvvFvbQ5frvPMqUB8zMvgYHUjRhTnsc8WyQDwxNZHww",
  "key17": "5YZktcb7F68Zf4q73utPCMejx5kgZPMoqR6C4xdNExKFfvtixvnGXbZPRrbT6bgHKgja6b61AZ54q5QTifKBddSo",
  "key18": "5UuYoAjsPyTLetAohouvfxygWrbgD84yoA6pZSLJo2gYbYbvpEtAD3xuYkJ3bqzRjPewy7NGSkg4RA5iKF7w2vMP",
  "key19": "4rd84PENkf2ctTj6aPGhT4UrxW4mKCHbkn3fybeGamgGUjPpR1Z3S3wXj8fPnbEmpo4u1bJo4DFGeedvDimWE3en",
  "key20": "2yxkPooZoTDPv2bYJ8b7yzDs9oAa8VUUeR3m5rTqBUkc3gqtdbFou9muknFAdueQL1Bs6tDPT8s3vegT5kyd5jmV",
  "key21": "3o9S1WgQrFjAo7ojoeWnrsXF5UEh5XQdsmiDEAaE84cKPRMg24q1zSR4ePENpX2AQgDNEWnuFH658fAuLA6W48MZ",
  "key22": "4PKQZ4b1NYSjtsWQYzp4Ee3TFzkcz2Mbtz1nR5iE9Mvj8ASznTm2xzdxj8FhefLjCH4ta2VB2NtmhZFWvUprKHra",
  "key23": "vCu5uf8X83heMHYEpQk2Cd5UuGQmJQoWytQQGvzPKiEv4Kt7nkPPStNpbf5wn3dUpKkfHT5AtDmAxNNRBKfoS5x",
  "key24": "3H43XHC6WegaLe1yeK6krytyZCo3AcJ3jBRkwMKqxzRpJApvMsDNDhp77s7iG1pcn34ZKvXadEGQ5rsVSSwWVBFm",
  "key25": "3pafC5w1eFeE3hTdxVN3oMbMz7oQk2JGYcsL9NnnSFRodHPsiAVaVmj85KHbLxQUFQBG6444j4sZr1uU8KU2U6Mz",
  "key26": "66UBVZsQWB3hAcxAAm35xCzFwjEnSHPpEdhz2m4cS9dqSkeESmdRu1Wp4cRhjHCyqcC4LdGeCobNTBv2LMCtgGWS",
  "key27": "561RgSrued7wH5dgW4Q8Y887SJwGP1wFz6VTGgAEdEK1ANN68etXL4QVz2sKKvqet1W2nPa7etUFVV28HL6xFeVh",
  "key28": "5S5TQSfnSFzKwdsXwpSWyNscUX1e5mFvV59GJGanEShhKE5vkpyXJMMj6n56QswUiiYav4B7EHZBiCuqhvn9QPru",
  "key29": "3ppvtRn8hKoiXZEXgCLyykogAPhup1Z5yfm45RgMviLuKTTo88KCjmzefoWzatRY9gZ38gMMJyRRJywSn5DqPCFg",
  "key30": "4yvLWJ6H3F9NnqopTJqycdXmJB8voFy1uUxUURoxGQopVWNeGiSQvRSxNwJQZVFoAokbN89KQagWcye3qSmhi4dz",
  "key31": "2CsWDBDfddMtD7n8X1X3jthYHJ6Evc54756BygZBTwW68MTzWtvtvVJw1mt2TN3FmLky5DtfrP5d971GsDsejPi8",
  "key32": "3WLMYKYLwyiTEKokicn5WKD26H1LEy5oAxy44jHtwoMGFa4Erjr8XZjKtJzY7ySS7djVi4ofdK9hUcXX5NSSJN5R",
  "key33": "4raYqxG6t1tQiyZNUx3EWs8FUFN3WmbTnESP3Pid6aPxNBT7rJGxP9RmJ3aDUgdFee7VgVJDin8vMnMqRSTekoyT",
  "key34": "452468huMfe1wvp1uLL9DS1eTJov3BkPTCpdACr84dQdZgxLsDEYyAUr1HxYF9LL613WYJsfLJu1kQjjFSnZDgqN",
  "key35": "3j6kG9Crf4W4SWBMoQAsNphA3yciRaMWuTDRCFZg7RrfUYnmRxTRBPXnYB9b4fhiyv5GRbndwFbVxyopJrC5adoH",
  "key36": "4pmrDBL6Q4mvwtq7HCyHXz5dP9ab5TYa7ck297qXrftgL9VaqYCKK6gUSTMbhVLyisLmQYbrrVyJTjMmLRcRvCJ4",
  "key37": "2ZkpZY9nXpEo99XoZ41hMR27e8vFg9bohgFmPfheiFRkRCYzugRjyeXZh6ndE4UUxBa9ahSw67q6fCjZJiMuiPsN",
  "key38": "4CiMaJfoq2SYmbeucabxELct1Hn9BafErGSyiLFEksJ3bQTXzuST9z1fk2PzPL9CFNL1TpsoVeqzdNmkyYrZUeLZ",
  "key39": "2x7hoKPWnzrAfrnmdcjkwPFJzJusm9p8dQrSDRqeVTZs2QhFaDGaAnxjQXwwWVe7L7pCJaphH7ScJX83f77CsEtR",
  "key40": "2vKiYJ7K2ChRhM3WRt3fSJ4fd6p42jDThChrZX2xzVPWhzESsGWt7xCucHiALdootz9jxnrNQM1AUDhSju1zNK5Z",
  "key41": "5qb523u8FiQNPLQaTe97ceR1DL8u6FuPgKTisXv7eDi2QWuJus1FhRLVRZc4Je68PVTDbKZH3jLoYJY57jf5cbdn",
  "key42": "4GPndVpYd1NETFzQWL3T7wSdTLVWcMfUtXv6dP2QUWM2eALbvyjjgvomH3XuEa1Piyo7s4ZbdvBpqQa1CRh24fwJ",
  "key43": "2H8wo3dmkxDeKbFC9yHn2HWMKyhzf9YDhr1nsCUFpJdEgrN4dL8wkForoc24fXeTAk3CpYP7x5xkVQkPBN2UkHwM",
  "key44": "2V4jG7pnEquGUFGXeLNg9KTEJdNKL75thh1TgAafGw2mbCFb1kWXyK48kdsr3UccAPLyHQ4puAu3J2gGRTw6ZaWp",
  "key45": "3FCduJP2NUjS1iTFvvwswoKgHEFCiwqFxb996upaF1JRzyDVDS5HUoSLQcqzKYFWjHSDfSw9kVH3fn4RNx7bzXWR",
  "key46": "RTR9kmXhXWU5fU1Pc2LH4hEeNi7ZFmCNG3QgiAXYH4hPhAsLk97AQuoiVnJKzNBs6nbfCUnmVxEJHwx6gbHycCY",
  "key47": "36nH7WQfr9dAXKgynTQXu1YyQfKc4pu2rS4UYUKeUY8DiBeTE6TDFmgVQReBwNpDp9j5KpLad5Z1ei9pJ9nimmiC",
  "key48": "2QHo1GPPGFkyreuiu2MDBvJtTQnMe4WHQgbh3PoLtXh5PYGJinPFaKSbF9pXo5MYtjUjiYC1GEt2uAsvESoyLn2a",
  "key49": "5q74zySuJgL7iyBeQnWu5nyX4yvgNTQRYUYVwWXij8DWfJ6szi62rR2EFxVsvrcXftv54nufbGpbtopw766h6aq2"
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
