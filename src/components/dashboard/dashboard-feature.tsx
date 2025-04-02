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
    "5Z1VwyJMotDJEKnpsfakxbmW6LeCuC5YytuQgf4PvWseQKxcFyrTdwxA9NLwhvjtmDmLJwrtLdr5R4mtaAVVP6XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYGJ2q22HzSBLrWxTS576Dq37F4sLWBL6zNFdb9b5V7ium1rpyiCKQRhyAGJNJQ8fibcLsijdYpbViiVNKwGEw5",
  "key1": "3q3dxHTZ7p2FHxDjyxpkxofTH37Ay472ijj7erseUjWMMTo2LgzmVfEXmjr1yQU9KLouy8WLViu8fHuZFaWkmsdP",
  "key2": "3XSvT5KC4bUb1wLU4n98C9fQozndjoJuRoaXEXpd9f9uryLS7gVFcQRT23CRMqzC7Y7G2ukXDbCcTipJ5jgf4Wz9",
  "key3": "4RXtW4NJ9UNsqXvzFXk1b7UWcVZFRy1fW8VtdBk79VM9jvVqJbpPsSuiHX7mVxYYtD34oVTBtjFoVJpgjDwYZto9",
  "key4": "3S8cdsga9K1g28hEjimVTNqGotFUPCv33Br8Pq3CJW52pknDcjKZoLykEyngbJNFJRz8WXHbsZomkvMjPiNB38Q9",
  "key5": "xe7AAWDaGivSd9wqTaUwggbtMYe9VKc8fSRfqKQ1NfLMvSyJqy8dkRxkpSqC1YethxvYR9e54zS6aWHQ49txR1A",
  "key6": "58SPCX3Yvt86dCLwSEdQ3AtQ7t1f5kD9Vppq79QtiABfU4d9zxtghYqHZmndx4hVMNKZscgKSBLceDptKNDu9VPK",
  "key7": "2pvyp6Kxg9nrYAzwVjdt5QPbJM9BBLbCBAB3mneYm9A5YbBMDZEFwpEGGQaQ4pXvfQh8xD6ubBBgdx1VKvAgHosm",
  "key8": "5m5YiEEUFrPGf33g9JimApXtnESpPRwPsYroKt46qfzFNYTRiM26zoV4Rmz72RPTpwVBmDYevp1hTtwzLouAg8LE",
  "key9": "32oZ79D9sUkCotAmoHa2y2Caot4jYrZXz5rCXBD3VY17vnNfDywbByXAQasYajv8SR9MBHtbJbsshNsgeYTBd2pm",
  "key10": "4wurM9j2xuxJJTYZbU5hJhZnj47dTzTE5NXjkGkqyLiwhwqo6RQ1KJTWx3GNpuUAXPfVSyF8J7QfZRQE8RTWqGvb",
  "key11": "KuNyR5egcCid58UN9SVhJaJvu6Kg4zEFu8V3phnYfRGJP5nw3jJYtubLjsFXTJ5KYccANbcQWjZU8cgX285p4uf",
  "key12": "2FLM9NtK1xRxpCBeEDJaYcvHtZtxvXX7jifb5KMBuHWfL6KQjSQPLZGzVFJsQbneDtnYC4UpHTqpS2cUKmj5twL2",
  "key13": "4sasNbUuXUUDir4M3DdWQt3FeoTnWWhmUdtqhroVhoHP1MiFvZ9i86tMnuxiB1UEPpYkj1ZiE5qxev5JqcTM8wMu",
  "key14": "3xUK1n8tgwJH8uVoU9AziQwvi6UNdzcmxENW1wVvdnjUNMFZZ1mgXEg1NhzETd9sfB662ckjwqr8h6KUV687ruCN",
  "key15": "5V8YunsEJng9DsULEMFyhNXAeSHiRz15MWhGrHPS3PPtvzR3ZaJpGThpTohdnVKPkYBG9hGP46CYKc8sQpbkn9Jg",
  "key16": "4wozGFUy5r8GhMtSvo3YFsb7zz49wZochCYXWEp45Fd5PUSTJmYk1771cVsxeowfTG91BKTKwwngw613xxxemVaX",
  "key17": "28xaLPPnW53jTtpDR4SthjoCzrmEmxn4GSnCoGFfxKTTz9ivPPj9jxT58Jd4SrX3EZAfQXVQeq4ycru5S8uuDjfe",
  "key18": "3HzQk95icbBaFEyWFG6TyzZEms1tWb2KxZmKNaMp6hP7wdUKuUNDBexK7AVg6b9Af4YuVhQqnvpgRd3bhDCyMFPz",
  "key19": "3MfX6R22Es4aZRzznky8Z9AqS8YrCYSKUpPM3H8rsajMVy6NuDtzSHBH8EAVPLwMxvwNJutDdrMRDstrxyzWu4T5",
  "key20": "3n75XLU97BDULbRLaXxDJF2RNXgcuCpheYLMtzR7uc2hAjseb9vpVG7LAk9ppyW4K31dyXBR1ouvmyKpiicuMHwx",
  "key21": "2rDNXzomdSLLUq8M5PpNh6oY3EAQNSBGyEhXRdtbSBberJuE1FvCRnM7Z2XWUvpcpZBDqrLsf2oQb9rRCa92YPv8",
  "key22": "5fJoRdQ5UUKGBGipRgZ4xQ48XViCUe7zGRNfZjMh9B1GUs3rVLtvsEfPX7QtQ22GB5vXYrmspF73ZahdcR5EC1Bi",
  "key23": "5U3SRYhWgZYtnzshvC5pvDjGdZXsGWHv773YhV6rkVii1zcUdz63LnQN7M7zVcCUysGDuPnDJHeF4Ewfxp4UY2C1",
  "key24": "4iR122hDPKgBS9SxXQx7cfqz1HWNoMQGCbnJQK2TU1zLymPxQKYnhCZrMSdRaPaxxBVSRPvaHDATLqi9v5VkJF1x",
  "key25": "2AK8pwQtxKhxe5CGym7s8FS1KtD2wtNSMbhTs4Cxvv9LrHapbh2fHE1JJY3Y4Y5rd1EBj8B3WZ3Bwp6SG7VjtQjG",
  "key26": "3n8pLhZGzRnRueMMyUMSxdXMfJaCPZfmxReMPWn2EKLLsD7Mjc4AKF4PpjsZxkm6Kq69dAHW53QsAooUYuCxCJBd",
  "key27": "czhKqdGwyJiDhwQhMHMXvaxvmyd1BoGXRzfomzh2KGAEbkynXx4oRKk8sbnuoxHLn2UA7KNF7QPv55YnyZKvzA8",
  "key28": "3tvX2MqqK8FLjeRDpScERLEo3JjZTB2TAdTrYMRtMHALdxqYUeLLsHLAoh8XB63UmBVUs4DydK52Xj4YDhQHAvM",
  "key29": "28QqgRVDzj755UN4q1j3g2DrhoE4WFnaAPTuo1ATmRpwHqRJ25E5Ct92UTWirFyuzByatNbZsyzzX7786ZSmFVnV"
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
