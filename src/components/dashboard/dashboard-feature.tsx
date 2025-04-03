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
    "2s9tH9CTQrEbyFfLTUAG3U8W33n5ULts7kgH7asiqaax9fEqTG6kUMBeSx3uivNr6NSsvT12ybnPDy3Vrpa19gSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gpx4ZvnYwP9BW4GaiRQehaU49bZU1oYVDPq4FCqE4DVZohUVFyK4EJnAyjofuod6wnuF47fXSounN4YZhQ4E7tT",
  "key1": "3Xi25Vu2YYU7ijG2zUKVrhqKw9kMsHfXDN7AmXCjRJ1kGv1Y2bNNN8mnjjhBpEeCaMVWDQSR4RZZf1tikwv3LKfx",
  "key2": "5LQAYfabYq75yWZuPW4s99FgQWZoEnhwqzxggVyJyj8RZFg99zmCu2484G8AfYZUbT3DyDZGvuc8HrywjaKXuRDc",
  "key3": "AQqiSVveMQkcnpaQndcxiBYoYwAxdT2MSDN2sys7yzzqrmA9hdRgkB14ycp3CqpcvzfHovsXhyLxh5R8vfV4hz7",
  "key4": "5HyNbfcR2TtH6SC4V7atwfp3VMAdzCLtx6ekdA2QDHqLsu7cCvwEPWe9uZGkifCa7cSHjUYt721yEyi5H2paLoq6",
  "key5": "4QRK3vuJgz7uHJtDHnReMDyWkGmAb5TVDK9YQoFhuhP4TtsuSmzxCQo58S9DNkvyk9CzcmhFPkVUSHVDEeaWtJtc",
  "key6": "5DRAhQwLAAQRF4YX29hYKaeA9URFYRnDPENGWkhNSwPF3R1zGHgkngbKDDsZnuaKaMa35NhXMGXrkvyFeYUGPogG",
  "key7": "5KWFAM8EPgxoTU2EYpLkbgRTCQvAo7wXTQUizHeiicmBMjmuy3jeiEh9EHSxFQFcQo16NrcU5689c1CQFwaypQbm",
  "key8": "2pDfRPQMd2nXjQdLFVT8VqpwBTdPRZTAMre1iWmpQTYZmb1sPWULcp5sw5qzkXDGmYvWNdadoVDa4zmvFCa5ic9J",
  "key9": "4ysYoCujpk6RLLv9NdZtZT4e2LQYxzjoRXbkEDrC3ZM8eDuT5Ab5nyVtcswNw7C7QRYEwo4AUEihCZJKfFfFZKS8",
  "key10": "5JBPJLqjdjaNRpcgSyYz3S8rKtjECKHSkH2KmSrTHnPntdzRcCMKf4tNGkc97Ccu9QFZSMsHt3byiPH9rDJEDHeE",
  "key11": "4MPYDV75972EDPSvERKEAjVkPRwLUYo9ELCbk73qMBJbt5KXGbHMuzcQLqHiVhqwZa9rpAM6xspaGKuZ8dVAXz3G",
  "key12": "246jDsVfDq8F5PFUK2FbEnD8ioanQN6SUKc2iyUPm8ZH6StdNY6zczs8CLxrnxxqg69qa4e3SAJSuCwRqW43j4Rn",
  "key13": "nZviDcz1pZEozQbssx44jC3xRdNboctaY1oCcK9oeyTULRTy7pkeN8GHUAn1QUJR6R8GAoSu2PDj7cKRwE2MtQN",
  "key14": "2UYR6SJzsLkum5w5HmwF76vcQAHZouEYoSVyAdGpjjWXmyaZvLX3chhppuxtMMEusKDLnYfgLwFgiHV22Kps9Mhb",
  "key15": "3X9uR92kVey36WSRTkU2K7qc2o6CMwhypRartfUh4auJVCDWnL1qayABHmAnWPnDDLBJRABa1RDmciR9AqfVrbum",
  "key16": "5fXAGuy4ukCZPkQqLUFhzVuyQQwmBQVEET3u9Jdhnuap5TALX6sQ3tVTKmqeTWWBBs1h4Xtn1ZPMR4ptBKbq9cx6",
  "key17": "XQck3AGu738M8MkhZX76N9Gd2rLu6FC3n26b8UgNYXfmjMjdbdvgidoVRnDBrdxZvPU4QN6emUp4UTn85xZ798q",
  "key18": "3DuXWvoH9dhPy4ArPFiF7Ma52AxBytSesBkEWBwcuZNyAGxpEvr32n3zawTt6t2QQJoW29Ab7t1tF4FeoQqcFfxM",
  "key19": "3tVGDHDu4tywt4Nh4RvJtZZ4jFWHcNTe1fSf4qHAFpdgLyymJuCr9Z3xGxAmTaPeef8aRHMGvtaMuQm96dv2Ev3W",
  "key20": "4PJgJaK8C32eDCGXPHoLmgBVybmibonUZDe4xVFtvRXrGM12kDsi6HSDBaNW5b7tV6S36agbRK6nmsErLk1ju99d",
  "key21": "24TVkK9eJ9kbHpsByir5suEuSbs39gzKBrQM1Sa2Cgi29S9oqQuiPoZ3xZ76QRSS9eZuzT6x9r9QxGdGo3JUMBJt",
  "key22": "3sNnjFchxWxvVaALc6c9fCJ5cm9Uq87CodAgwnocJSaBTViBVV44xfzFmUZFs8cUfR8K4uPWcmSdEifxD2zAXzs2",
  "key23": "5xRemaKMZJTWYPNXaSArxP7G9BstfsgE5M9D37taBpHmGiGLw5QUCKEJDCCoKCJ6Tk4QY6bxnb1DdYctFQLogTCQ",
  "key24": "4FjacvVLbXzSY28wEZen4dVAy2xrwEaU1r8eiAgSDpFnkQk5pDXBr5TksyoDUjK7f6Fiwgxmxfv4MDVN5Fs9YZ7f",
  "key25": "4xFb8kRTWL4yeqLENnWE5zLReGwjn4wBkxW7RdFf1CjsRjwab6kFRH6wsD9wApjdz6VbANN7XcWP2AbijLZR8q8c",
  "key26": "4cuQpCfRFmCPGPeNikvXP5m45s6PWM2FF4Z68VbGK3DWdcr36kxyf6BYL9XTfkpXbX9d2YTfhKLcnawCMkzqFu4i",
  "key27": "4ZkknSqA4LFifLETU6ZLDsPnCq9CE4PWGhaNmcYdxiFsxeBdCyv8mpGc4frSt9YyipPuRhkGLBeDvWRGmSU6tkMU",
  "key28": "5zDK9Dz2AHbvdfntGnL4tyTiMynGJznp6TsQJA4XanBEH19F5UAPFxZDzhz9cV4Q3g5MrbwK998xTm2TSuZY3JRx",
  "key29": "3N4sAPTiWX1zvatQ1GoQZs7MMiX5FPQ7twKYDHcSgWdYTx2Ckoo68RnWF3XEeQcfgxmMZgk3YvBwiaqSsaNyo4fH",
  "key30": "2QifzGLMfZHSFWjUKtJUCvv2XNjv8KyUo61ys16ZXYggq8MhyZXBxoeacAz5YyjhURBvHNmQRnkYTu52o82juBKQ",
  "key31": "62DTDQpvj7twzh8Nvu2cTaRSxYHCKhHokAJp3Fi46pvh8ryU2hB6dtpammhZsVYRuTXVvyvMawdPiL2vupAP8yJj",
  "key32": "3Tz4VNwYMqGnVpqyKYMgcRDqeJy3p7tMLxGc6PDuuiJwYFu4E9JkXGVvQN84UdYtakoytJRUGp4rv59UYkHzC8kE",
  "key33": "QUheRsaFTSnwFnWsAgBmX5JcXhs2rwtgKjSiaGw7hsm7qK2MWh9Wnfzx7YEbbUKzo5YgvvPDJj7ThNtQU2bd2uj",
  "key34": "4zFDUdnYW9KVSMt4SfbsutWn3yZf21fcSW96s1w9c8nWDo1autKcq3aT6jarYAQmMXNXc1ZPPdtPGsuxgSLqjBL3",
  "key35": "2guynRAwhavrDhyNtc7varC3hjixZGUMcVAi58pJbnuiTSfYscZJ94qRg5dkryMzsT5JY3Jgnhe1k1uBi9kPX9EL",
  "key36": "22XwyXJWbKjiHyR4rDokq7v3GNa3NioPRsYvzUQNKmdMqpCNC3RyAQR1rj4wjT9bu6S5XE6XQdtZ1iiuJ4q6cTNN",
  "key37": "EA2FPxqJxnK4KJs2Z2TKBeKEJGRDdDHKEjWY4bvBXA4R1vBzqR3W5RJX9uTvrK2JNRV2FCax4sKaixGLWQypmKr",
  "key38": "5k8mwg7MUhKvGrxma7rfUWbc6eNCRhyhKEGMddBFBSuLayii5sFpW8BaGrXUkTqPxNUTjGifL2tkcEA4r6F6iRuS",
  "key39": "5f2XL5HQ4GaUvpwVbiB2Wm5Trdss5bwMFkrropixnA9Mww2ht4rWXNmiaZmkohKPVV91wV2Qb8kWemsSQ3CiLxKK",
  "key40": "55McUcSWZtrxU6p459cpsYWkqRkuSrCJwqA2yWEogFcyNbG4A5GZjC32xQ22sNxF1QHsR1xXTFFaTHwmSbFzuJZo",
  "key41": "2VDMpQJDgFUBHxwu3MwYyQPFTxbBhLecvr6L1uDse794zEshfqNg1rDfiPtVhaquWRXz4pv5Da6Tk2GDeZkeLdVp",
  "key42": "5LUpx2TweMM9jYxiVuiuMEusCeufRSR4XHUnngRnUsPg1zB2oFUaPcyWxyzqdLiUC4evgAjVMukoFdc8t4cvCWz1"
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
