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
    "kKw1NKFBLPdh4qBFYTnHedh7KHFKTuudPWoHsX9HjsCkoFiCbkYTGJB4isYZ7bUhP9NxTtkHUe9o7NvZrwonBmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b2gVTMP57XuEzVhSCsnp8hmQSRD7K2jpHCoDpaRD9ndi4rtHESk11RATounsKGZ99sxrG9LmvF2xZKegRnCfCaZ",
  "key1": "2ET5A9vuPaR5jbqhhCuDhynYkSqeMJd1iFGvtRa3GhfxxyUcDHER198HwgeSNU1nb6oMbJekj2g8sKrwmRCvCjJ4",
  "key2": "5AaayihMhigDMBSirtrk726uxMjuEgefADuHge8oZMnJCBSR2VkM3TWCMcL8Z3RWyx3KFwaKEmSBbvLz5h1tCgq1",
  "key3": "3Wh9pfpRy3G9GsnzvWyux8wRKV4oZmBZxzNEEBGagkDtxpzff8Y87HxNxF4cAgEoKxoDUFH31qu6Kx4HmSVLF2XM",
  "key4": "444EBvKdZrjtVJvADTmL461h8T5FyA2q371VLpXQT6QiYim2CbYZQYuqCuR4MB1XXq2vPtDJBP3nEa1ZtzLgntMs",
  "key5": "65sZK8hUdjnWCjCso2yyXndJxu6XmcxuYkaTDXiULcXSP7QyP7j9GBPpegTqPiLj1exB1tHjsBKZ5yYN1sADfNcZ",
  "key6": "8KA9Eqq8F9H7BbAvVTLtNuBJQzZaC6Fqr193a9a8McgCruo5okXz46L9CtshjeYP4XRGVYCRLBGjL9DFFfRs3oh",
  "key7": "2N8B83zRucwtwchDkdWN1o5zR6DRLjGb8NRvFNJTx5GcMHaz7PbKg1EYgUNDtuj5cCzP6ArvkRQMsiMKkb21mYdF",
  "key8": "3pFZ4UmDKjQPG5ek86H1SGo9U3LatFRKFoyTBefQ7UPSgsXjTH3EH6yvqRaobXpT7oTeb7g7NrPmGut1DVnajwZT",
  "key9": "5r61a1TF7zRf6ZFajAPDEqyUBaqJqYG4vVC2M5nTK8u8atqRfqzHW4HHJWbn1CiGZHXJH4A7eUQQMAkdRj3MFznL",
  "key10": "2ydq3dkPz83htYWW39qBsxHWwvqd1Fs6UQY71boDsnac2BaCmvJgw8JJc94dmpLRdffF4TuRkzorzekZRfZsbWbq",
  "key11": "4nDkVivLTLqnHdD1MozGRVtD2wkaPUKuVhj7QqPvqoSEarz71ZV1Que3NAuqC51MxUKZE3wcfhtTHSA3273iqkUc",
  "key12": "2JYmGVNJGZwnzSgtKFdo3eW1TdCU9pHfUKdBU8iPZuLtP6J3bQ6e7iPL4NVwNeuzqkmC36Ysp7dBtcgpAv5Z3k4a",
  "key13": "398ghxTG5ECx4S4Y1fiufM3V6sMmZ1FV58ETcVDDinsvGwDBSFBeU959xeM7qu4ofzUkPokw1LPCbYYD4tc3TRYo",
  "key14": "ULU7H9hC9KEUPpovjmkSZGsQG8PLjJCAJs7qgTQpxhtRfQUQrP3GSk89ghVEXanbUJLKeTw2jrk72V7kpbf3VLX",
  "key15": "3tGyjcsMmZHYo9R47BetJB1rMU9fmkRBYtVjrRVL8yfnoNUyfBXCbVBaPATmbxmHFyoAeef59uDm8Yf6fVVhiZvR",
  "key16": "2KF4hHxhm3nez3gXswV9ickVqxvNpW83Nm7MMA5Ghn4AoAF2YSw7cz5FHSdeQdvnkSMeXdxzoy2kQGGiRUAU5XmR",
  "key17": "6nN3rtK58tLaxRASqicfAB2gRFeGAJ89akriwgQK4uVrBoeiXMpu62PSvuHAAwzPH5x5RSbPNDHAkdf5mPcctfd",
  "key18": "2N1sTXRmY91QMAqL5jMLaoogDRYuPF2vsWswp9XpUdcYrY2TtqpkXd6L3gak9Yroy8nuubmdD8KUcaLBZ4YE3EDR",
  "key19": "2VAF9zVCE7R5vEzwH62jwenWvhvvm8EZuoCBRGKK2xQvsbNd5rrS2Z8Zv9yhxH4STkjTzVtDukZBVocqp1i7Fa5v",
  "key20": "5JeAu6QDFn7KmUeRqUDaZu96skUC4C27QusMTFjaw7psSNrADaoDSt6oD7GWVJb1HdUNFccS3DySeuyxPGgXPTUd",
  "key21": "53gWnf98C7nWTPhqCYNCYDseb731o1jFDuxoQDgePs7HaBgxxfemKsCZgnWMPXMqaZ1DSDwWavThD94y5ijVvqWT",
  "key22": "5Dy6dsoBCmJ51m9aoZYUVVEmnBbDP9D8DJ5XEaLMGdVPzrZUP3wKrviFsi6HDP3tBq3dXsVLLiLcip8E9xAheLLU",
  "key23": "3x8ckojH5554QL4AZ6dF9DUq7CuT3AyHiDej5o8sUz3TmXndMo6qBfcw3qFxtxbDE24ZGkwNu5K3CaaoaYBRW8FN",
  "key24": "4JJMc3GC5kD2Z1VLZMnA3d4kMLeGHvsw99TFYgorRJNxQBnnBqWfegS8qJ8LkLdAhi5z1FQrEoiQvNF4bK6FhxNU",
  "key25": "5nTojv43epqzXasYUjRb8f776P73ePn1EPkpPJbcLhC6zvfDC8QT9TPLDKxjmTGoV4ZF3JkBAfQRuWPdYgvKBq7w",
  "key26": "RZ5UQPe5GFE8R9J8A7wB6iStLXbe7GzdXuoQfdvWsLsHnSFUmNezgnaW5m92dbUYi2j6L26tkH2Y3fSNefze5H3",
  "key27": "nnS8B66LWjds8mckcn2TFBagaDXEe1EbM1KhQAz5J3SqPpcAReP7zr9F3Db1JtidBS4LZyK8Jtv9rULD2aGSm3M",
  "key28": "4kJRMm7N2cqh63i7i4Ff4VC2WTQgJQJU1hUCAkNQgRX7a7CowmQQXeiUZnt4rJRFuyjePLnxr9ZCfbLZhvA5Gm8T",
  "key29": "4ET9SdUkkWRHNwbMwv5edm4GhWRZGZN9ayC88RqJAdPujMbeGrbmGJMBw1CeAj3Vjrzm5J87tg2ZPs67sgzkn6iY",
  "key30": "24teCSqX1vHfuA2TNKutaFrEVXyQDtzNauLMyKuFJq1KJbwqM5Rf4AQxGmP4ymMwPYst9spkaMELfjUxyTHwzqi4",
  "key31": "3tWyRbvhgNwseWoJ1p1pXade9dLrQbUjy7n361EtRUrjLg864PL75UtjBzgev5s44juLYeneHr93VbRgaVtFtdL6",
  "key32": "KvMK4YBbeCU5u986YbcPXRt9ancPj3YZBcSvMbxaLPf2aYncvo1fDgKPabt2GtRrRQrcDzfXBhVQ4CBYYKpuxsf",
  "key33": "2TPYpYD67Eg5JciwH4eCMrZKg2B59AHyZVNxJJ6JwDPvDBEwo3bKXamFC7fCNAb6AdEVELKB9kSmTzSv1uRX1QsM",
  "key34": "48yBK4jhh66DFUcJ2SHc1v4msaFuSMDT3iC7nqBbr4Z3FzpcRp7ULjigQNQ4iX7YD5wTcYAMDUWnspySSyUzmjaY",
  "key35": "2y6PvrTcjKkGommk2AjPeKC9MZ5a6BiC5RKQ9CvdCWMzxaDePoAox6U8AX5yAihU4fV15epWUYqZdiPBuPCNVTk9",
  "key36": "3XpApYBGRzNAeMJ4AyJjvbCTKEzvpkf6ohcSm6G4D2R5bTNtqP3PzcDowkwHdnttQNuqf1K13Vz3ZboZEEKM3HKF",
  "key37": "csaxPb5SPudSgpc9qzJgpgmwQX3j1ymkdzmDXeuXR9oS866c1E5nVRTDtWqwzmQewP6bpKZPwzbs7T7eZt7eJu5"
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
