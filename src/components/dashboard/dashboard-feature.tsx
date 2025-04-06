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
    "2Ljf5fWtdZuuPk6mx44ukjWsgBW2N81486PFhGcmfx5GGsCAQSjaYJrUpF1xUKXSSDZZ2WWGqrBHouDGQ5aUv9ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hu47DTrCGd4L2Srps6a2EVdTJFX5roXraTMyTcgCvTiyTQm8JRtQEdiW9KCE3quJ77nWUbCNUKk8Sz5ma5QBVn7",
  "key1": "2grdUbYw5jphNnVTtT3Ci39P2ix8WP39uGDTxLNy5aVtabRrowgik5ja9amM4JSx2BPgtDMiVgJ2ovJG8AL13Qqo",
  "key2": "2e1k4qX1fCbwXjyKNG9uC9nfjPiN7JbXB1NubcV3m3fVceHHHLFhpfX2Kxpt6fpT3JncaKhTt8MpYmWmpituKpoT",
  "key3": "49fzXYp2VJrHLzz2Yik2W3NjuFCtDPY4G8NK89xAwBh3DJ5G7WAGmm1cmYHSY8vFSrTdNun6yWdDXHcnCU9pnQPv",
  "key4": "4hNGWkmuxVMJorboe1JC8StPcNHEr9kYqYheCydajbX1rvZQUdt9iqJJajTfZqMtR6rJLsnE9xs9vLuJZv996Za7",
  "key5": "CqZg6bFZhSKPFVGn3YdaUBbdqe3Jr84j28d5PZUbisDK3oNsus8ydBbfW3V7T5ThRgoSDisHbCBDtwYBPMoDjnj",
  "key6": "5mgG5SbMaNndVJdAtvdfdXUZTiJaz98NkXxNvEWPpuL8XbtArpYrNgYaSgf3ndmUEtuFRMpGr5LCxeELAmkopwCm",
  "key7": "2nESEzd8zBKDHWyDwvaWSXBvLRYVpK8tJ8q4cq3RS9NwhjBJ6fnCP1KM9mGmbP32QUJbzDX2tYTkjsSphrJypDsL",
  "key8": "5gaazNq4gA2mTLNU8aHpzDBe4VKpnMY8KhsgBCmfNJLWVQ51CMy71PW2uQLiar7wMHi7EBoSWYknSYMi9PUwrQZS",
  "key9": "7kVvUfEQzi7EpfwrxNioRejcoJQZgcaHbLgi7SwY2Mxi96GHbjHmjRev72S5df1BAdiLjBF8Htf7PTVkMCuJ4jm",
  "key10": "4KtzA8QXY3G4CE4Z4Whu3MzwGN1vb6LhKYd6rYKNMwLpA6cKMNupMEYdAqUZ7R1hVAo2js3Ae5166zjjpbsiBYJ8",
  "key11": "4cQ3zH95BA1CmaNPku7RHx5ffJ826EfDHAQyWgjQRi8zvtyit6pTtvkiYs9BVL41CcRFeZF5jefthExqL9NUzNBe",
  "key12": "5HnWgHThFhwZT7kHNhV92seNbGD5Vx8SHwpmXcViGQFfDXZcw69CN3v7kJUqSLJBe7p3jscQkUrGk4ygc8r1Rdhu",
  "key13": "3cGZrf1Govqrj4APrC3xjigPuUa3wKwmXhycUpa3CN3Bo1eyRqMNCB2waseeQFWGJT9c4ZvUn1idtsvSm3QASAW2",
  "key14": "cLekWDTQyHwobpk4byUQGfHXSdLnHbQ8nUk15cpxDGEa6pVu7Qid3P53AY8tFx2a7ULbsNih5xEntrGzkvnSJvx",
  "key15": "3RgpCxoKmVHzK5xhQMj1ZTFZQBATBfGhdL1u8T1jALXkaYJWSARKWr364vSQGVPpWTs5jZHfsodyqBsvWr3pyuWe",
  "key16": "3oHpJJgSbDdeo64f5s3RHkh4ia3T9hjjZub4PuJigGp3Q6yg34yfGPTnQu8Kw9Y1H23vWiCFwNf6BNqQyEhtGzwn",
  "key17": "54PrEAFFhixK8AycJ4t21FoFCXGHuPU6x7V8rHcdeDuNdSn5Bmsx1hksah4AUG1UfTZr84He2rmThgAMJ5UUXxjb",
  "key18": "3YUZJnGjE2uomMmmCRRrRsyT3Z4istDTrSdobdDRbFWAq61xGc9v93avnuk2LbUfGicWXMXG9Rnzdors9FowkBj5",
  "key19": "4NvEe8NEYnmXZZEF4yrQn1TRqkudyYpZZFs5kdmfu3gXTe4LhfK827PwLnViom2GC4uEq43bSnWDfRc9rRXTy8xP",
  "key20": "5jb4CQJJnWox9zFsNpFNtine6kthe3QmN2pWrcidQUodEfXWJLqpMd1wR5Lrhks8i56eJvEjZZdsFGn18FRxR6p5",
  "key21": "2x4DDNLUzzh1dE8dHxBGdRgiKb193pCxNspKKqKW79fNrZBS13vUYkFxgQiU32FqgyopuA1NEVMUQNtDWZsmR9UJ",
  "key22": "2US4B4SMmfJ2JWhayFzve7c8Khasr3bdkR26Q2vXpkjytfHAV9Fh2nk434cFjSYKHz5MBv8fEndrmedBshxTapH2",
  "key23": "5GkoNVmGt1pEeQ9LtNYkjcfraJwjD9tC4HYRaJxEbkBumKsQFJ1eUW4pjB6qoXb6zpgtzmet88miVsMdiGMER9tW",
  "key24": "5P6Zvk9M4imC7tTWNGALzsPwkwxDdEfkfJMTg2somKFquFmagq6ziEXyuBbwnKFbtMHELoxTYtcZnC1Kvf9FZqfF",
  "key25": "4kkgEdHfu6JgoQctPMRaK2LYPsKmt8vkThbx8qnDUYjzVugSXffcRSqssycs2PWyDhrsmqb2kotUX5mgQKFvPFyg",
  "key26": "3Jfi6zRbc2wB1hpHzPgSPztPdKRRdAwX1mcoJrWaWyME745sTFrE3mDFxn4wRckLTUkGG2TisKr58B7HQC6BsXCD",
  "key27": "2eH8zabS3NAgLkdHa84mDQBZrUrsanfucJXwzyETstDs3UiK81wbLBGJRPhvb2L5qX13Bz7v7ynYzkZNLgzt8nLs",
  "key28": "iYQ9iUavchs1Ud2U5ehz2uanwRKeZx4U238C87BzsZkATBbvbDajpAYuKEAScz9b3APVZ6ecQtqy4jgWJGP4Nhq",
  "key29": "2q2AdDLZZrWhshPNfad4KzAjVGKmBJcqtfxyckTShZKDzwAhxieN2BBqL1EKyAFXnzheMVPHfeG3JSTWuavpgkE5",
  "key30": "2387iTLXDqB64dhFjybRG3KFKCvwSdFEcu5E7uzA5W4a76vqogpdTzKPgze8H9EW3DdZgaaAFUAzEVM6yWuGdti5",
  "key31": "4SrQDBWTFLkxtUXnBdi2jyEKCMSd9AHf9uKQo2spSTaYGjzpYn5sZLK3xbBUYNstSDSdRJ2x6ECx5wo2AV41Fv1Q",
  "key32": "DffKyV8gvwjMA5SBbmwXDU1v36kzeQAvBCr3TL3LFMeCKHQkpbnY8zMSkJH2ejKEthcs9B6her6pbiQLLmQAoNx",
  "key33": "FMzBJqkS42bRb2VTDrELUEev2G3guj17E8T8GSyPXJx2S3sMAdrAZsYHWh59pbK3quv2rFuXoHJu1rMccUShdTY",
  "key34": "2rb8CtCHEyiGvTpF8BHERXn7nWDehatBktgH6CAuUhcb7LD6HH9BmB77DwzsmSptW6XDSSPqth4DQNsoL1PcerR9",
  "key35": "f5oe6NUWCX3anXhg3m8p68Ub4B2ttAT9iDxtVL2Wo2yh6xZi8tDYRxcvjBKmCdxjx5cyzDyqXia6RhzPZqcmuqx",
  "key36": "KnwEjDtDE536ts7N7JXDubA2hCq5q6ntX35uzV2y6KVsQAnZCtuTogLGTDUMZzmheYXUhksKGkpDA6fKAa3GtEZ",
  "key37": "32EVMX9vW9R9MNLvthTKgGhSySz1Pu8gy37sg47MoZQssiF642QwdfGaQ343tQdgWCyPXvaGVa18ZwNVjj3sqhx8",
  "key38": "i7CWwQPzQFHRfPGdtfphQVgNwB6uJkukSWXDzWwGxqJEab3Cn3dcWeP9bR8GwL4ZfEhAVGvhUCqpf5AjjP3gshU",
  "key39": "67X13GFhNu2DEg2x9Td4d2BgGJjGpScrUBUmwpk6hfmgcPbBSHhMD2XdtyJgm21zgm7EgbufmS7LCvywHoVu2Xsz",
  "key40": "4ncXCKpbXfVrDYhNRoCQsm5HDQYTxyzvhS7Syaiov5sF63N5k8VpS5G61NTF9PxjoF3g34jae5TuL8aS7G44quy9",
  "key41": "9bvF4sApPZuSBGDnRhEdqiUt37671Yib1i5ShyJsd42fm2WZNPu54Pfs4fMHropNWXwqttrZwidtqQmj62kCWuG",
  "key42": "3WTTVhKn3ZVgUff5PaQ1Jj8jn3Ng8JCf1iboq4pD1EfRhVfHkichWkUuUMUwEPHpyzsyJuDQrkcY2UR9bDVRkTPY",
  "key43": "2UdREBd3bdAm1vwfJk2mYCSBmc8rk5jnDLcgh9eMcVprep84XfURaFKTKd1jMZGH77821KLCRFV9akaMstWfC83Q",
  "key44": "3UJ3JBCpC5nSR7Y7S3RTWYUTVovy3GajvuEiPqadRwYYL39zbRnMUD4k8b1FDsRjswmY8opD7Rzi5kNd5QeYYqKp",
  "key45": "nLVzaHv9MeZZfd3RsmnfCr1HFHkXrjwsvLH7LgDHSAQxjirxx8Fj1WGWf42JzJQ8uwyfnNJomDtqdscR3ouKzh3",
  "key46": "5RMUJ51UGmpVvppVXaSxbTe4oGye1qBGUycLq1JdAT8TybwDWPWSAiGWrPKg9fnJFw54u6EWwsgNSJECQBcGPrFm"
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
