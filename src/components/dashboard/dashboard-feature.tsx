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
    "SNy58YqN8zi3f83mQ4ZbsDBx7YQ9C4uR2LbipTDbBz6HUdqSGuBAGBSLBMAC5dTtM9v65WWKCEhhZyJkH3LaePn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGnybpUewbFs4qwqhKpcu79d61vPhhfwpFNUpL3mypJQ37nET5HDq5fjMNjo6HtoCND79e472Rk3mRrKZrwroe4",
  "key1": "4dNWVKUYn74raF6q63HsnZjW7SMRZfYQxvX2TW4igL9QAGqxJFVLurCqwdY1p1Mf6dL22NZxnrfD5BZfDeDqsaWh",
  "key2": "48K4z5eUcUJEigj1QW1bA4Ri4deA8AAEFHa58QQJPgNbrWjcmX74woZ3b3ZuWcM5Z2zTCFAt2XjGrjepw3aGezuQ",
  "key3": "41wTRCFdpUJ2hP2jAtgzkLQFFwcmNtcvdf9Gr3qosubkwjqM2Cd9wYb2PiaH8afMnrBVuh8HABA7LDM9pYoBhxjd",
  "key4": "bQc8PvQ4iKCc8omXjrRGqNFH8x2Et9PR2MPvVdQ2v3b4wkerFFGdtQ3j23XHvPm5J4qCQAs5tzwFS2aqJ3WwumH",
  "key5": "53Bfze7G2Zjc6yh7t9Hq4mWPJ3QV5hRz7tQ3muRzFXkdFmq4kZ5Jrex5RCB8MRXQM9ZxD1YN9nsR9BgczqiXuNUX",
  "key6": "42jkivX5K8exLFFMy6tcNwFGF4UBCHYcnUY3pwsWNMU7LTEpLnonqPWbzZjDfVFnGmrWSToDtQVqyvEcKyhmY2ui",
  "key7": "4jkJoyXv3GHFriKLkGYDu48sn3TdAwAesKT1h71T7wrMT69tsEiAimL4J31CHoKieePbGxkL5g5AwtijgoAc3j1m",
  "key8": "2dGh9axf4LMv4AEYtwrUTG9uTztggtMhdF4ZL1w6GQ4kYAxg2Rxkqs51Rh1p7RGn3viVe5D9mGLuWnnpEmyrmZza",
  "key9": "2AwQ7MNNQkresJF8uB3Ycw3UYiEE5xzyT1AQipbp7taV9K6SNyX3tFgekodR6Vk8CRkGb9qjiBhZ3NbeaHX7Xj7f",
  "key10": "5bouPP1UEKJYy6du94DXzaN3KS1vLRGyHvVgbu85qDXRUmwEcgyAFbsq114XugMNquHzfppz29kLALwphfLqhS8j",
  "key11": "54ydFzHPVEeRYBUcRHeQbFHn9vwynAVUvUeKPTnNdBqojfcKbuAUYMx1KGaty9Vy1zVioYyVYToPLRDnEnfWzXRa",
  "key12": "2ghhetgFY9uTcgfojDYS15E72HiHnVJ4aMx5S8MZTtjLZhFvQJxXnV7YFDeVyBLPiqRWDKDu5mnNAA7k216sX4J1",
  "key13": "2d1onwPsJnRoEFPru9irzDnRNz7DxQG9RDn1gVdxopXChrPemjupvGVgvAdVZTrLafeZSTU4VdyErYH6zxFD2FZ7",
  "key14": "4mR64Q54s4yVfiLtwtTkG8p4wL6NyojP5YAqZgyyUZ9fvBokAg4Br4p8sAfSwfhUZ99F5iwyXCZpLAyTJs6jZDzU",
  "key15": "phhXEKdX7UtQixNtw5Z72dc2Na7eWS8miU5EKAjP5xMS431u1wetp2uZ88C9Q8jyPPAi9GNWfVr1Admy2nFNcdU",
  "key16": "2eBaa3q6E1Ctb74APTKsuhX1gUu3BxC6xXjtEzVrMedLA5aLrSdcYTYaMBTSL4Doe4YV5xKa3NJXNE6aoaDx2YMm",
  "key17": "5RWYUQnUA6QYQuaXtizhmFHFiyFnDM3vrcmRi6YLc6tV5kf4JzonFB8Tsrwg4Scr9G9oAFSdZeAn3rnjXpXEyBg5",
  "key18": "35vVCHYayMoVjGU77UHyZtZREM8AcGHQ11CY4xqNuFXQPvt6dFpaCMBo1TghomPnra188ag4NLoSPo3zaohFQSjM",
  "key19": "2eoK6K7ZFNgJHA45GYM44WRd1kRm4kC4fGfdtT1scrt3xy2zvrvgrwDueLEZjJhKWrSpSR7nirSfoyEgNzi9pxyh",
  "key20": "3VGYoYSYyZiHtEMEQSn8tgfzFq5eBZW1gjMVp6naRMCFMpEfpv8XwJYHfFA8ifpMsSwphPrRnvcd6X9agYftMiE6",
  "key21": "52cSVKZbqKdqjQd6GrujhKQ8uwk8vX5VBB9GgjBxTp4NWdL3cZWKhXvJfykD4dUbf2LpdWe37aXWGSMTxnm1VuRj",
  "key22": "57sbEPJ8n4gT3YE8F6QdY7npMNZpbGxud1EECBBtSZoPzhJ8iNe99eJzGpyficwYHWGy71nTLUCvHnEZ5X5VHXKD",
  "key23": "3ihL193URyHZLNR1FGBoYYBhDdzufNnBBHqfDRCbaH49JxeEq5JbBJH692Mb6P4gYSubx2zdH2s5QepHrxXNnavj",
  "key24": "5c3LrBBNMAYxe8xNPBd4PnCjmpQ2EjKVVdnBs7Kb2rhH9Em458TPANfxBbEWANhFKPmugqxFoLquecGqV886WY7K",
  "key25": "syZAYCh6WHLZMUpvV8hpsRn4ULP6qSp5Jq42KDnFMZJaevB8uExDtTvbpVfSRkzhsZJXyHu2UKpnNkgAPbVhHpL",
  "key26": "63PVEANhDCeBrCrCMsgKe8NZszUpPy8B4D2gRsUQhDDpc3SFGNXw9EYUTRZBkiwc6JNpsWGwpED27a4ba28ModC9",
  "key27": "38cP3y4mpkTzH2s2aVKAVausCTNTzTKbthA9wheWtUf78rjo9cWRHgzESksVZqxgShUGMztErMYKJnCFK2nzsR9n",
  "key28": "fU4eM2vrdELvjT9uphnQmPzCDQAZM4Jw7MgaQwJawRBYGiS8pC65ptHQBQYNfURph79h11qaG61noAj7M7aEvMv",
  "key29": "3ohfXWQjkzsGThrdWhMEwPB9BtHiRTGKebg3LgkaHhEH7yuf8rYk72oPyQPvEwD3rAxsRzDTuvag3cXUJ9ZRx23q",
  "key30": "2MKpKTXQhjhkWN7HGCWYP3uEgm45orBh2m1qcZB94omH72QpBbijRfeSmRK6TezXG2ijUtj552G61e1Yki7iLqiT",
  "key31": "44DPpG9PTmiKKV3iPWDx8erw8LMRcD9C16WvP9UCvZPBKLVUKDQz6f7BQrbJfSsrWnTiotX9ozBjVGYGTHf9keZH",
  "key32": "5TmDwD1P2J55NpknzjjJHRp67PXR7oc1UtyZPfVyNGMAUMbxLGqfi3ZV3GUCLKFjVLKpkMxDNJxUxr5ban9Zu9NG",
  "key33": "2jnXAT3yYCPnKGzb11wCZQsXNuT2DaBdAHJGhNJwsyV9xdkY35RU8NAYzpqcp1JXndoZDLTEtJGbTiG74h5PLs8y",
  "key34": "28Tt49hp6LfcJfzF53PsTUaYxUEygiabTBcsdFRvRW6adGDAgNYvyXYSiNrr7NtmExd5QDVvqsFA5L1JLKVPwpXQ",
  "key35": "7HcgRjWBZ1S58i3H6vWAwAYqrkZYWYn9gJd5T1MRHAKeAXX6a33CQedooXszXixTXRmKg5NpcHfvruMgDH8cW4q",
  "key36": "457N9Frk4kPqdLE5JW7wxUYe5d2VaqQmS7BaZcmDwbG72k5ydF2SGtCR1Xq8xGHsJ3HzBN8aziGqXCEHSVNw21pk",
  "key37": "DGNBsMU54V3kPK4XYMhNhnzVEM2L6jiGdaxWwb2E3KeTCZLkPCvmkh2XrWatBwp4TV4iatorkGPD2Z7KBmQWojY",
  "key38": "3WhDW3MsFc9zSSue6Rv2VVniFQbsvJLtfrBgDQK3KV2QNLga6kB64y4refBDkny1HRckYEEjsSqr4QW7mbxypXTB",
  "key39": "R59RkqxFuiBMgMFmqeeut7QJQRQFK8q1yggA9jXShzncqdZYA7ETsKKq36nADe3BBHzqKcCSWVN4DwYHRXNWwiV",
  "key40": "458CpgWzaphpeoSZuEVJADKtj2wgsGU2iRiupmguLKxawYQWjP5U4Gu1rj3AyPTFcQVkQcgY4ek78w36auSaLhbp",
  "key41": "MXjGYdEvi3wdtjKG8N6pqMv552WTfXeLH1ZgrVAMAQhWiDLDQwghMuyMpeMuEJXkdvV4nDeq6PS1oyWZ6USdZDH"
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
