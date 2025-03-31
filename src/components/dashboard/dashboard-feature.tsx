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
    "2nVU7EwbpvZDga9mf6RDfiyD2Fr3SELnmvx4az2dkvhZ4PzByWRWw4Ws9FwqLCdyVSfAFzfiYo3Pg7eJppJ3LyjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TzMj1AMk7hSZ8ax29mN6rQrFpL7ZuwudJRfrzQBVhxzkqxHNVWthQRNqUpSxw2fPz1HkG7BeTqFzqP5kVT5LkqT",
  "key1": "4TJWtjZZRrYk7MEsKah9n4cTqGrZ82Tec2bL2SpDqnT8eyPwvnGdJXJEdLafF9VtpiiZTjXkBLNnhZLx2pVtLwjH",
  "key2": "4CBFGRckidghSRbFvLmpHdBiWveByF23ZkEfYn9iABUym6faVW2FUnTzKV3WvULLPD2eNAs2212kmPPkTKmWgM8m",
  "key3": "5bnJAYkrE3g528njFLvRPCfTQ4kT9c4poHnUFLKWgvB4fsdF7xJLpmJhFLBmDtFkBhRuHJ8P8wRu2PGxBNyapkHB",
  "key4": "C4djKJ8895X5KpPJV7c4nwKeKSKyg27MDqa8AxgieNFwc8dcFriLAr7DAsBYY67r5ARV526eEb1B5KikkAWCvZG",
  "key5": "43ocMsw71zniKNDCkdVrtGFyvRZFbkM7g8T2mSDocnpjvzkMbMgiMzxYRAMzfBi3CEDpxcvQiS66vvhBw815vrL5",
  "key6": "54iW35jhwoRJRa8YLYkiFkdL74UtcQ1qzFWZcSWQtULZAGBXUrTU3Ch95sv89yPNEHTtT3WTXFWRtUko9hkBtzsK",
  "key7": "3gmVpMM7fqFwF5tPisDnwRKWYcEgxqH2g93n43m6adbmeFoLZJd3PdE9rG1jcfdMpmJ1Ycy9UzVnAo1zLWVUsNR6",
  "key8": "3TwC3MYje6DGpDXoqMZJszmvYjJjhUDdiQMLz6vxrhSLgimNTh3Td6abFPuLgyaSuefmuTShtdbJUSLpwRVeKJAq",
  "key9": "3MPRjFj2SBHWsAcujcs4Yrgp7EA6VHYB2tek3hpcE8EUdNtgncAaeuJ2heC7kRFF22coQko1Xbvheb66UhVQvjxm",
  "key10": "2SdrBFtUqG1BrHHLLeyUDiX4WkbCMaCBU2Ue8qMcnTP1rUSeyyGBDrBpbxKqruTBEpV3d6wCKYr4FXoTipcVbVx9",
  "key11": "4Uq4f6vEz8SzXmfK1ZRaoCF2erbwjLY66HeRAA9UuXsQrPBXwYYa5rF4hwdq8ofqmC4hFfuzoWKJxGk8L8DG9MWt",
  "key12": "3y9pvsnhnjRdghqmWnJS25HnQNitsYixyohzbtAUu5cePhfR64ya3GLqssKZ57xvK5t1G9ax7hYjmsKDwEZz4WiM",
  "key13": "4fAsYvQB87XvjpbTeg2YFCy9YsKwa543MJoaPwVoGRWZd6CH8hxtEKoUgpuks4kc2r8WvksdxXuqFYwWCHwFNKAi",
  "key14": "4LWkj6zjzxRSqHTXGpYXtjsMFYXAbS6cB35D2C6XbCawbLxkEGL3iBgpaLqXkQyNCGvEnFRBP1DwxYFSdR7RVx7Q",
  "key15": "5MY5vJT75yWSFoifACqJPACH8LxF6gkvm8YET3rEyBn7bZqoUquFtjC39GVBcXmfh8KMrVNSo6mx4nyZLMjZpMuM",
  "key16": "5cxB4JU46pzuwaDmg1jypVXEZrxJDg3yVKqWqxc5ht8q6Vme7zDEehVba6Q4DkHT3J76bSbycW9YVNhm72GbcgMz",
  "key17": "2r8Ti634MiKAmijw5pe6jnZ3GACJje6bCTJtt73SdQqB2qeTygeEuv2vwPFww4k3pTkvs7y6wrybP3YGWcTcbxKZ",
  "key18": "2SeouuTe39ZLXTzV1HZTwdGRDecwcDvqj5VZ33yC6svfsdaCT5YmfQ42ou1zirC6zxL36x6dXNnMngBpKh98NFNZ",
  "key19": "5CMSPZTcxhpXWX69pkmbf1W1i1FrWu8M3evgcYL7Sn3xBECmZ3qeu6FFoE9Md2miWAiTu6RpEW855jR9ryUSB2MQ",
  "key20": "47FUx1kdr8WpPLm9fDFLUteASkmY9rShyC6uEAzfMg6hWcSUn3iC1V7wWiNvdrnc4huwb3NamC8RAhbDWuFiGiNC",
  "key21": "67uvFUwYyzuRjeRTa32Bw9PhjCkN9HyARZhkgzBvodwnuc2XHNoppGLZbzCgnKDKGUHZNW59RNGu3cnqafwFvqa",
  "key22": "tZPA3iA5kEwdxbUApnuybPH3rSMYKv7nLuDuQu6LrMAx3piZqCaYaCotpzfiyGSC7EpyrW794C8YLdBgCbBFNem",
  "key23": "415B6QtSW4SSevuT2XrwkXyYpPYspHLmAW95TKTJbDoM2HjU5vcJSK7BFujVHM44NXv7aZrDk3TQdVGBtGsAadtK",
  "key24": "4onJ3sZLfAma1Y43DNHZZuKKJCUpspzWzHh3koCWxGBGrAfRahBC9daRat66xTVcU7W8g7NsmCjWcvkfWNwqt6zU",
  "key25": "2euPCRS8Y1DZqF62fxgZUDGoMbkizwdX3Csc7wh1B3B2j4wgz6G1HjcJmdi5SczaXq56Zi1Ni3PDBVcgWkCorfz6",
  "key26": "57D2d5hrj7KFKXne8KPCJ1fKBBYzACBE54kavzY5bfQpYKrRx6Sv75gwfopUPWtbYKy1FCnTANrixevaM7fxBKJ1",
  "key27": "4ZwYZZpH9UzNWeAHzkYJbBpgF4hked7WqwLSADv5LJeLi8rJURSfdNNYtDtV2JQ585zMdQfUh9yqKvQYESM37Vg1",
  "key28": "3BnHUuKHCUokJdq1KCTNxskGvY113pG8fN6j1SaWKKDGChuLJTe3pd3u5vrreK1WXam48mqkawB21YuKzSmz7ZJ6",
  "key29": "5MBdbJ9dsTLDhXnMdG6CPa1icbKx8uWPBcQCWrmsTSL1sST13orznL4BB6VGtU7FBeJv9MGq7FKwifDLk3RMsgSC",
  "key30": "8sT2g9HVdWRXwyyL6USNRu7fmaXAmX4Cj2wBmYcJLx5267UP7Tpi6PK33J33JbN8kT8eJAnKtnfCpR1rH2K4kUy",
  "key31": "5M2azRApkVHucjLUhyQRV8fhZVXDsNdwtzr8zELzXSbCt7TuCfH5KJd5AtM2gCWnWb4vPK6cTGWVX9MqbXbUXaCM",
  "key32": "3JWeLzXvAa8FML2PxBqGZVhKR8czy1uVJuGg5Tp5DtkUhwYvsb2Dy9RrFRPRYnK9nm2eQ6mT888ELJsxJyeVHen",
  "key33": "8WFigZocAgcsPcBBDUxSjjNXTQNLVoJ3AwsJ9bGM4aZkApHy53SLnXbXuTMVeoVV6qtWo6JXMHTUtf81jiitots",
  "key34": "3mr7hVG4mQzP16FCeUZPvSeeVN2Ks57GJhpeHkTsGLwe1gmd4HApsyzufhGdbSFwBi5EKynERrxvtifcqwpTjM3Z",
  "key35": "27qmug4ZpnqE7RvCY4tD52EBQcueNm6RE4i7fkjdE8bA7f29wiamzd94kcparN6cAqN8uRyRnwRyUU8zivtn2E8y",
  "key36": "5zVz1NX7KL4tMZDBzAoL1d886RF7BXYCfjTPzkaD6uKoyFHJRY1yKwwfG2rwhBSh1sYgTzkfdFzCrm9HgFdHgroo",
  "key37": "3zogefYuVaF2JbsTySPcy5nW9zS2AJCq1GGy8DHCXaSt6zk9kvkVmreoED3pDCB3Rt9RqXZuW4u1cGhmSrLXDngf",
  "key38": "4oTGM6b27ZFL1n8zHuw6CgvLnEsyPtvQR5z1dAjq9SWt2tW7TT3U5b6Hucco2xvxDHhvUxJbSvvXr6xVznSRnKZy",
  "key39": "DPuLUBv8BZ9ctzjpfDVError12CgNZu6Hs3jhyoQDj2q9CVb4BCPJfC3jWUAp6cKgyci8ebC4E4n5qX8Sa13ush",
  "key40": "KSrP2Yo1Dc1gyb59Ai4GpUUDSrgDVRxCcxtjon8w4WcNTehm1SVLqRYiqcbT6qHwzbLQia5XkbukZC9MvQqrjvj",
  "key41": "JVyYCi8mzfvqW8DdPj5Xke4cUpPyFXRvZP6q5LsdxprBp8hkUtFwhzBwHQxf3aqUMKdcvTPobbNKApNeTv37JT6",
  "key42": "123cdUcqtdG5ELf6TCrgng5tRH9VR4UxdEGeSZL8jRtEcwZiX1zRvCNDgFmNtQ3eNBNW1NC7DT5WLRomb59V3297",
  "key43": "5WpCFfZi6poYMyhvaHFPRfXt6nm6Gxpr9gZAXjvpBNKo85rX4gxpVrZXio66H4UY6521u52M8vKXXZUSiJepVZnp",
  "key44": "5jVdWbridfqQwukAgLTiCY6yNFE83ApT1bhADPRiLncCytG8wxATCM9XLJbQ5YV3J7pbqppNrwWpcKPheSnT6wxY",
  "key45": "4Mf6sqvj5MdkirTXKiyytTYYU4bc5q1NbfvnSwLPQp9YrkWXh7yWHYqUZd7w6TdDe1UvYo3EKS4322tne6z3A2Q",
  "key46": "4DbUUzVaZcJfUsJahfN8SRkjzFJS9aEq9BbxDLksyFgRsCtALEK2J7949mRhTyedLzQKyxNyAUZjnJUmTf2gNC8d",
  "key47": "tULcgbfuq7NxoQDFPu2etzmsiZQMBogqwkV9tMzLC2qakV6Er37EiXSMDPxs2uciyM5b76waqEkTk8u4UUfiHEf",
  "key48": "5TKq4QnWVmdkiynp38NYynEdQhzSN4Wwux4vRkfpHvhrYCm7q6EkL72SF7ko5UyZvGi74gvQApYuAFDhfRgN7neV",
  "key49": "2T2CH6Tg7eCsrWUcSSfkQ3uk1rFSRvDvq712Q7bbX4Xw1ctJX7dk4vxmxduYtcUcFipbwGW9o6G8taa7mG3Bbxut"
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
