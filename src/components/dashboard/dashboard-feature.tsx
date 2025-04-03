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
    "3egvr1Nrvabia6g64Vwqo5y17p5cEd7eNFbhhcMnUd39gNzEvNAwWvzdaNKmbV1vBwVyVWCrZwEm21Dyu48ZJQWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y9zFd2LrZiXdbkKC92fXPCzWX58fh65ncafxRo3Hbi4UcS5k9LPHRM3FMb3LryNpYR1sCqWC8D18KXWQJN88iyr",
  "key1": "4KQNNgra5KvfWd9Cgkaiu2ZA1LjjychECmTqB8f3XerxSiUqbim7RoFf8BXMrMRs5dB9xaL2hzKBCKmFndzaPNJt",
  "key2": "4ELCWtvbFrJNFyeMcorZvKVPLCg6pE3GW8nB95MAjMwRJeyZToTmvVKyT7EvRuNWCfTRsYUYK2UCnnVpoaip67LG",
  "key3": "3VLVatqYMooXW6NPM6YHNwvoyC4ARc93wuFgECst5FZ4X11tL1NyEHnUhGTm2L1Wkh46uvFGW6ih6ucpKhiQqQpS",
  "key4": "49TEX9QS5Hmj1UM8bc8BVriUkEsS9d6oF8vs73YuUfTYBCMyHxA37JmatmQVuUGNWYPdVJu2jt9DmhhcMRtXBSYR",
  "key5": "b5creMnHRk356rqkyGyXbvRvWmJksCCxGeGtHUDK3r5fS4j3HCoFaSBBdU574Lv4LTyhGpBfV7DoHnsZg85whbH",
  "key6": "af5ujxxskfY5sTG6cbpcQh6qjdmnDqMH1dgVrh4Pbsq7iXJeyk8MJ6KPiiZ75Btrt3tGPgdP7FXq9zx382wQhMP",
  "key7": "4khQZvzJT4G2BHK2PBezrP6kvubWWj2MgtuUPxqKgaf5LEwnFNJxp9bWZ6mkBaEiGNcyQAvrgi5mq6M29arUuFeL",
  "key8": "3oUwmMsJuaNJe3wtWswT4Q3tCuuvjfvftkdAsy3cmNJn7KPnZ114yq7245Rdkt7HwtBLBqKomeM9WJuFMuWjs1gJ",
  "key9": "eYmRk2qn1GJXb48Rt52TjT7XHvx2nc8fedwxXveqn3C4mTZ8tYj2F2KokMMBjBR6vkytCTT86UuqQJfwH2ZXH7S",
  "key10": "4YSCPV4LXyFDVxhpHqruVCNUjkc8uHMCD7LdavkfEmutZG3HddXXJQ4C2s4y5UWK3GWgUXLp8ZGmcxuyxmMdDrsf",
  "key11": "4bDSxPVozrPytXSPvV1vG8ngymdtZmEJhWCsqHge6KxTskzvGRCa3yaE54tmCpCY4RnLb3ehS3xaoajw6KMcrKRg",
  "key12": "2LHMDuWk9e42yB8uqxyEGAvC9pzaL3tGDfGhhbhwi127qRVq8xgW5pu35GRJKDjb6GeTb4VPkshzbaNipBQfcBeN",
  "key13": "2ttZ1sY5sEAYqoasDyFRgncsSdDG3Ur15zqkYLWuT1eEjQJcaYtAUG11XKtSf7AapM6Kwzsr1zQjGtmjChaQfet6",
  "key14": "5SGgLvo25YFVQfLkCxsq5ykeA6hXZLdeLm71aEyiFAES3vjLoSbPMZFb95DKU9xZSipdGW8Coe6BtnuvZ4KwvF8s",
  "key15": "5sEmf9c7vaLV6NQiGecJZMmqWgrw8ESkzAWfgU1XcLhQvw8PPtNqgnNtcqPoCz5DJHeRpPjrNEvetLffFUdF7qDd",
  "key16": "3KEYwkxkhp5CKE52ozo7S6ZQJnHCWSqmNV8gpoApHnJVzEMBrAsvtitpe5FXqfZeCvBSBcH5GkFPhMN6rPxJfVMH",
  "key17": "2fh8Q1TAoNFvUMz2GSRtWdk7Hn8oqrVS38UwYoVXXBea64uZgKLTAvSKgd8bKDwRwWp52DbuDJs8ZqmA5yRJszLv",
  "key18": "29fPUSiGiCMtyvpi5VkXdGS3jvXke5mfi3tQVUbVU1b6ZFrt6KEBGoMzRA7DeN9H7wLbGkFKrfiPUmbHH59mWH3W",
  "key19": "4f6MatfLr5iCRtMub1pXDe8zBWoHHUwFNYYsEqwSCd4bmaFxdjJsXra8XjP3jfszDw2DeqzuPFNc42gyLzRLE5Lw",
  "key20": "4U1TGw5RHBsr48A12NEdJEFLTsLfBTf1QQfoXbbhcqbQp38Ussy6dCsH66GbJVyVLYi21iT3evzt7GTT8C7pg5ur",
  "key21": "BrD48JPonzLaaPdHYD4R1gfGQFgHXmnKDDnmpG182w6EUdV6Ss28NgiWaAuVccn24NsQVrEnMMtSzAgFLrBxgGd",
  "key22": "3pSwjrJgik3JEXdLnL1Q9BVgZZ23YpuUvmBN5ChazDSocrGPRRUzeGt7axq3gr2DvJFta9r3EntH72A3LsRsdJjM",
  "key23": "3Pqug6tHZRooitFUG4EjnjLSNZpXUGMeFqPHYc8VhHXuijtKLqSpunGLGhcUzSrbkY3mwqKHqA9eV1dGSeMQMtft",
  "key24": "35ihM4tj7t4Znw21GoJPGauic5V1oq7zZ7NdfcCtTC2pAow1jcMbiGBJcyQLC5q5xb3J5vXuYkdtqvJD4hiV6x1b",
  "key25": "XRNcSMqn6Fnzz7XsBon5VRLnPLcYZAUpaq5dAGNhs8Ba77PkS3oYMSmrk47YRqoZaq87BfGjsJYxTtSU2wYtCTh",
  "key26": "nL9JDtobx4aFCbZm1rgNQXeJtyLNP981AS2V3MSMLTkcD3LNKk2PYzeokPeMmktJ6jUPtWTttSxuAqoJ37sY7W7",
  "key27": "2NBUJnW7Y9zHJ2xNMVBTSnoco4VnXuEBw4YdtSgNjDdbJ2oE8wAuekNsHzAC3kUbCK14sGzqFSyPdADugbicnHgd",
  "key28": "4c5NeeKHwEE7U4wdDAR1uD3WjZo45hSvrsU61j55PX3LfhcQHzNqmzZkc1EX4YXGNs1dLheH3x7HQpgfwSHbrCou",
  "key29": "5jHnkr2u1MBuQKb4UwA2udDi6kDR3DTv35rLsMuikxdcQK8nHLp67baZTEf1EzrLVEAscnURzcsh5Tid11PFsnNP",
  "key30": "3sX3BZmd6e8PyQFtCy4N8oZQB8RmdCMoD8aejpX9N5Tb99jzfAnZCk4tXENndBHJ3gsGg2FF49EuPVbjCHvXNrto",
  "key31": "56nzbqNXuiaS6LCDJVX2bY6Dc3hCjbaZD5ZxRee3HWQKD1UqXfPko4YaGWJAsXfbVAeYjsTkgNFZkWipbqFgRb6a",
  "key32": "HnzFeBm3wg9a3QhNWTmWohU1fvE1eUro23oKzQ2ZRrbw5uGGR6sSMVszLDz6Ntm5CaZ3cHAzTUxFNrUdRye9r2N",
  "key33": "3ujKnoiZYaHPR6wL3WmAYhVLc7DkAfMXqXkiY5zqex59RoYMix53sG2bkpSQiWzQG5jcBT4q8pjEcE99zCqjg114",
  "key34": "4ZbJz9cWEx3J3ziiPEnHiTX3exLSyJP8kJ8anq9PkiJP7vdbwQn3Va7g3FsvWvmhXLLVfKt9fhMokGMS2vGmCVjn",
  "key35": "3qGeH2Q5mpvorcPZPdJV9rsMN6CBdRi2CHtLPRs2BcEWNmCZheeDGkzU4LWVmDL5qvCVTpLL3wPJrbFZSsi4aXcn",
  "key36": "565uA4gHniQXjcaBh54jxzqqDqq15PtcCpwoBXRYgFgdcPqfY9Un82dnCsNTPt8KCCfTTA6d39zEYcsYLiz2PWh4",
  "key37": "4R7YDtntgt7ffsdrSsQNLs4n9xzLoyoc5yz3Pzx1Wnqjkk3TaUyGjVbHDmTcKfC9qnoGsUPogNYyK7cKXcp3QCb2",
  "key38": "2TrQM7sTuvhmyoHWyBEkp3D734VxFji3cZyipEzXzqksEJxetMjf51iMmvkLfV1HkAPBbm2dHDwFKDW6N59vKBDc",
  "key39": "4Ep8VbCaha2qtpXHZgJbQPxiKXjBNHepjSzRF43PCHvoBekGYhip1xmwRDGUiXcsscii9ikaRpcfp6qTpdYLrvRz",
  "key40": "Ycky2BYPkYnxhAT7oAmcyv4ssC3MBAaJsQiCnJhFC9b61VBv1bSJeVieyPue9e1ZT3q3b46YevfyU6MqmPQExb6",
  "key41": "2vCX3MfcqGwVXycn6ZU5hmwP62DUq9JUWWiUN91qUpVn5uybC8ycmFYVUBkvCzQa7GhqzV2AEqWgxRBdV7HK3otP",
  "key42": "5qaS11cnbGqrFQZRFbTyyepg62spGCqFzdPkBmmVgRsJXgiwkW79QLp9oi1qnuFve6oXZ4y9ruVeyzUMVRJBWTEh",
  "key43": "3p1D5dAnhi3pDcy3ZSBo2BbA2fmGQFdmEWdmV1TGApVY9ZcGkKvF6FKfWmhcHTB3QsM35FFZvjEuHmYzMZu9E6B",
  "key44": "4eSs3TYy2PXJGmpKGUtrsN81xvptZqa3Gppp3cA11k6a6nK5CS88p9er3DbfdYHVBKujVfG5ykxuspUWKBy3hHc7",
  "key45": "4YAwRBVhxAdMtuTUitGD8hk7fXdNm5kUdV22i85FgW7N3gZRk32VdH7XVhE4JUGM73dpxpqBR8aTKD7gMpRke1Wm",
  "key46": "586egEgePcg34rqRVmMyMvBhuQgLhLcnh62RjbgoqeNeuCmEG6aU3FrDJWZKTLGsC2dMYNwRHVP7sLpf2bVt46Bb",
  "key47": "4Lc4opNoYE3KouFv399gAuYCbzD4nXup3rnoUURgB7t7nDkA9VsEr4EsPbYGZuMZvCbVJQkzvnxBCPzEWuBkZCE2",
  "key48": "5xyNz9FAstwgzBYrhDGU8fVichMV943ePWFRZE2jaBm2fQ14b6v6Ytie3hYXQURbXtGjyMoE87Br1uY2fZyKTFkN",
  "key49": "5Zx2ZaYJYu1JTp1cW9DczTUwhGcfabpQmFuiwAsBhiZKJ2sf9UkfPgp5mUTrbu124Eh1pNLy9tLCrBgquzwbJn8W"
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
