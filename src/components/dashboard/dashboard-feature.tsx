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
    "xfEpEXHsevqmZnEwqsLEzLCYoK6E3wGZaNFD118qtVX6qoWZmpFS4524NmAA3DUozjw5MWZQS4NDAszyF3jBA8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K1cQLBwos7ubnXa2m6xHaKZFUUSpmp7eE5N4BjBoGHc2ptYX5XHmyxq3Bj64ZxazGw5T91AaSujHAQxgDon2f77",
  "key1": "34tYA5if8iWTdstTUnv7rd3tov1h282U6mm5jDsaeTLcNwtgMhWos9rDRVNm3yFS6NtpRHriZ84r9xk5Y83Qw5vn",
  "key2": "2A56KVYiQYDXGJpAjq7CTUK9fEWG7aMR9grGaHdJfLgWSK1SwyVyarFi6roZWHn9e8aTEkNJDRREMdeCjioMFTB7",
  "key3": "3YGUP6ub7x2LJkLeyjFhp8zXxf1J4gAUrUHGb3n4bwfZMz2ucJVhLdF94J1eHW95qvSNXyzqWy7zaBrtAJuHQpr6",
  "key4": "53mYt8KY8WAFVQ6YfsTFk1nXHmr4pDhjV2dqLS7QF5ZsAppVtiFqqdVyUqbqqfC56BB1wVd5cDWq6946rcERx7a4",
  "key5": "4Un1expyH25kJcN2bgV7EyFjQKeSceYPSF3kSRaQPKk2VJjA58Qw18kgTwTK9rB3ia8ZjpEpmGkNDFd5GXjU1vXz",
  "key6": "mQSPLHRH74X7wZJqdAaeA6V6Vjsq8NechS7fu592DnXDWb61WMcvLfnfys1X9yTwA2VCh7tDa1uHfGiqXR5vKLd",
  "key7": "3AXaqr6CWrZF5mNi4T8CmuUSeTUVHFMu7VdQqLqwFhfZvvhM2suc51jzDeNqYfZgVhf56v6q7GYLY8z3bZNCM3Uq",
  "key8": "387pNwsQ71it9G8DAc3MeeSpkW7buynBma1ULr7SDv2oCNZCFafV5PetmCKMrjFaAGnSBeHiKTf1Bka2vGXXd78R",
  "key9": "5sXHGSEmNziGU2ZfW4mm2WGGcTfoavas5ZpMfFXRpQePT7sCCgRaCWYe3VRSDcSd2598rwH6PTv9RZBBuMs9dtpT",
  "key10": "4ZvpwFy6Zv8WVUUG8QPpCqz9NXcbppf5Jhg4fjYU72HHpeqA3SXx3hEXKaL5UkU5jZ8sLuHrffXokTZ7erYpDmJV",
  "key11": "4pqyaL4LzgNY7SoSxufsuhXxDuhWc1pTpcJvEdq5CVTv55wEg5FmutnXPdAuAUBa4mmZvZRG2ofME2LDYkBXQFNH",
  "key12": "3BcCYCyzRf5e2DAoehpSBHJUGnsKXzVCgYRedXKyPwJAN9ryh2p3i6kVZ51nXBuCN6bF6guBrM2mczxrc6sx6A3i",
  "key13": "512WgDmRAFtf8dbr3jVsi8jBuC1jcQTVXwfYn4fjAC78PhFZF5ZzrFF5t5qtwq9zao7CfrXhS9YRbW4vqp973UFB",
  "key14": "4rnneWu35VvYnGfGgEJSERpf1XREYu4m5p9tVY2UvjMarZoj31CaNUrkfUe841aJEAArN1JzGAdfcg7eFsb7vnjU",
  "key15": "qkdDPeKYjCB28NYYA6FPPxazvGEpagdViJNCeiXjqUVHRbyPq8wKTjeNNAgFXLkF2M35G8K3CuQPEunPpxe2ece",
  "key16": "HoECHyLpXyJMMWvCxP94M9oDZkbdT1pmpt2tCGZg2a1NAMpZFSoVf8c4UVa5JnNYaqtSWqCXVFTC2h2PtU1thmt",
  "key17": "5wfNFShMeW8WftEmdMvWwa5TvpGAKaGKkbYXSwDwat3JoFFZCKqUUGjjR7d91HKF2TA713rVFwd2AQ1F1aE734Lc",
  "key18": "5PuuSxR9gSACyLfrqgGvS9sMYvqHkgLV65RaUAxwNSnR9WpznoKJJ8a6kVEtYKGEDyuHKRPYn8D11SoaNCqg1NCe",
  "key19": "xcjL4KUBYRuJ4uxMGfxJNFkousaBkibC9kVweRzMw9WpcFEamgiT35zPEdByZeM9v5LD1rpt2uvu1CtdgXSDzHQ",
  "key20": "PSt2Em5oymvNnRsD7mzGZUJAkCg8qaf1UAGDBnLXxwjeX1YshT1XCrN3oWP1JRkuDbNJhMgn8AxnarkQDFhfReg",
  "key21": "5Av412jEp83VBs2vJR5eodaFEcT9nPQhNqfKbzCpB9xVrL27ADG5Zif8xM2pt4N5GBaDnByiZwxfzzkUre7dorNi",
  "key22": "5LNr6enQwsBri2vvrvq89L6EozytCP3jfFUsJb1QDHr9MKj3zVuy9NZFfrebxk68p5kvmse9HomiEHA76Ft8iH2U",
  "key23": "2CYcJXLHkx26EhJ8isXS78ie8APGaCXGHh2i2Vu8mpdtwEpW29vjXVWH5ndUC2Sdifr1zxYX5CwSNYRvCPrJpemc",
  "key24": "2yvNanLpNruHb5B1kRQ7xdZivkbe9uVSGK9aXjtxSUpfURV9mK7scy5sxHGjijEtDoEC1kmKhaiGtDavDoaSe4Rt",
  "key25": "4dUrkSraFTnGzkobKLBgkFTj7CBa2pGFukjAQPWV9i3qnwPmsYJfsRtAnF9MvQ1wvAyNELURR3WbFuYaPcNFtRr5",
  "key26": "3SYjnnUEnpjTVkGEJ5aci2QEpDc4kaHKXPpE2cBqS8FiF1aa9Mb597ds8zuR78UgPt3nc66KpfvYBLXGrNyao5mV",
  "key27": "VoBidC4XAz5mhnuzri7FWdxvQm5MJRYWfvQHMmBj1AWppnfZUaM1QtHS5VdgHxeY9RjppcoCmyCKUeeApyVq1Xg",
  "key28": "43o1eywHa7a3n8A2NVTyeou7oCokiGgxYdrXgc83wGh1TufCFRHvZtjUKk2mQJRPqBZgzpWTMpNCPNDwhBF1pniF",
  "key29": "4TUGuPj1xyoVhb2ULXqhZF4VQDQQWBW41LujjM55JNUpUffboEGv7qBNj48xdFpDuZissF79E8fo9ttuAbjCzqKj",
  "key30": "539n2j7eVKQCC2rJSrRv8NXhxeBUd4B4WKdaDpDTg6ZVSPVBCoeD2rdJS5FZfDBFugJBGkQvm2s9cqs7NUvyHU34",
  "key31": "5HrF2bAJX4ymfgQK8FYgTtcagYwanx8x29ze2GeUx3EQTW83g7W5JGNSLxKsW5U5Tyk48rVhx7XXBMdyxoX4ZNGj",
  "key32": "3mjfKTcAQCMRYmxDiE5KcrHmXdaa9UZ6df6iE2kf1MxaogGZcBhSbCHjFPctYRk7Ls9qi4KuRX4jZxRmgvMPtX7s",
  "key33": "3PSYgkUXsUarD242epwiQPA6MUq3oeh9pJYbMmZfin43k3Y61DkJtqUgdPML9sNSKodiSSaycNv1WwMbJpHmaX6b",
  "key34": "4m9xFkK5Q61FZ35xuyaHYEdstbRN7MrmmLUiZJu2HwR5gqNZjQXE5UeSUwC5dYeiAkfzrjFBUY6sWEWdcjmKZLSr",
  "key35": "rRG811n2BYPmvU2EfYSvp3QYE2RNJBNMGA35L7CrRGRAfk4RhgFTLLAKsG99ZDYiR89ASWqvvWVs7prYrxGHeyL",
  "key36": "3b5ZEyZg511AJkpR6JA1sq5BwKxR4vCD7n6LKbzHKLHgquQhtiYGN9NTNZN8fGaRLDd9BHjyX5iXpqf2w53t9RLD",
  "key37": "8V3HpNJtBfwdpcWiTYbcLYYwAwtY1kUzEu5BDuHjxGbhXjctFpbf1nX1W7194APe727XfhBjqMcjf7wPTq4DJEv",
  "key38": "zf5GXhxBGzSiF9EiYp5uAu1ZsWV6dmXqSsVWX5jtjMhbMyzfQkitNa9BBCAuPuZH2VUik5NitdrZHQADx64Hcjp",
  "key39": "4dQidU24ezbfc4weoRvW1bBynh369csvAJpACzjZ2PV7x6BxSe6zmsCMf4vdEHThUGfeUQ2wyuYt9BvARdQUifdK",
  "key40": "vawMVkhBK12y6GFKM7urLDJrYu9ab7ZiusRWhCi86Z6uuBgH6YmdDaH8P1DkXYSyiWG1cMbAVJc9SqffJkQr9hs",
  "key41": "4aGf8ka2yVcY4vS6HebRoLESGbRyvS7sWmcqyDWLZPDNAbjKVqyFRdzkA2pECY8nG3JBMxAUKKQqzR3TWXdQLtSn",
  "key42": "vt5V7PvSqpFjFCNUGtAzuqcZ5jw8AQFpaiqgEweq9zCNixSCmtoQYUoPmPCxMGt7DKS7cmfosWHckDmh8GmnZrm",
  "key43": "4cKDNSNPSTMQN3LMh7i7WAiQRt2cdioMdYM6Du1Kc8k3AhRND1x5N4ZvFkScgb1YKA53LjW44We4iCRCrk4cRvqX",
  "key44": "2eeGnkDW4avtCxatRKwXCD3J1G7JBKGfGZULdcgq84h8PD2TUnJ9MakTPyQfZ88t3zt6oCvNN46cFwSDZ6ZZ73M7",
  "key45": "5DYu98XKVir2JESc8eiVSWkFSiqYv1JnZKF46RVeVvdZUdJ6X7k55b3KVJycayjMamJsPipbGLF62z6XWnaLoN35",
  "key46": "5t5EFu9KRpLD1Z6bnhMkoHvgXZVpeyGuaFpvZwxujA5hQk6q2gf882Uk2UAwRXvAjqfy9oVzdPhWSSe2BMC4bTJs",
  "key47": "4mnXkBqNEH5ibEuxz4w4fDHJyJ8rUDd3gfvYViZWwGepZEC2LVBSiS6MndXjY5Y88BL9uUSCAg7n7et9GcuQbpgN"
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
