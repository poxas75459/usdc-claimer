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
    "41frGg1AJ3Ho3XCzqZ5h8X2M2zYKCQ4Ru1VYWaoGnUzdnHy1EVzbGnDSxCEzwNh7gaLNCRoV5vQaQCbS4W8xmCpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtMea33Wqyqz1ZnToLCwq45A97q9dsvS2gPBQjGshtqhbJdVWvMi8pzDTsqkafVGbHBTybbqzx3z8gZyXDissZt",
  "key1": "53JycUgsezmxhCCz383Sqi1hHPBwAUvg8FTAwjUu9c8ruqgxN2tWrC13EandmFcdTjtXxWfidhtrWcmXgJsi78Cq",
  "key2": "4KZJtL8PNbDJRzw9tDW89yek9LrjAZLsmT72Uzmjpes3GMFEjmusYFB47S4igzrEfwVXuXDzHPzmMpRjJSYx4EyV",
  "key3": "32SiMv5MsPMCfUhJ9RkkM82avXKdYzWV8RVvKPyyVRtfXSk4j8iL6CGvQc61CMrvdfvcE2Mcmq3XFvW3DSVzU2aR",
  "key4": "36Z49cRqLbyztYvz6Mn14m7xebmyCDrEjcsADA2jaJyNkLBD5neZyH93hzjv6VwHbT9YzRX9jmxPsobuRinLWTGx",
  "key5": "4Vwn8zNv7BmHAiqMr2eqWrFLEjpvQnb5nXqgEp1r6jgS71iTQtiRKjtrBEJNdD42nxuPCzZ1UaSw87L3xFWWan6D",
  "key6": "GJcEc4PtAt5tYmho4W63ZWVjgbvRYF2DJiGv7jnSjzie8GwUenQzsuxPckLw7ZffwgtZ9SCTZCNKZke661dVG91",
  "key7": "Tg9SDQAz7Q2otGKqwiKERsKEWhpEtftpaebDCbbmF5Z7Li5ZDP5KfGbiaECeFecxkhBxmRY7mYnopsCt4fsDbWS",
  "key8": "3daKDK1VLkrGUtrZN6byZCCEgTqqbSzUPzWGTJPheHrtdDPcoHU2bmfd4DdtC4Dg7ecKjoeHcqneDixjY1TaYN2n",
  "key9": "xqB7ZnpJwgheZ1RkASgzKMomJTD2VoSXAZtFPGxFJisLu3maSmoPV1gpefj5qoBc2oq2oseVaW5KMoAy9k3iUEp",
  "key10": "3kESLq7bUB7zMhTKsoTNoBmYN6go1YTDJFsEjurWFVQn1CNU8Px3MJizHu3DmHw3p57i7jSgoCo5zbNqLF445nsn",
  "key11": "msU1fkUNzsZGZEjj35DorD8RQJ8QVtko6HGmQ3zCkeCohFtvhojtNmMfY1Lo5WEMDD4XV1i4NfEmDTbYJkLvigL",
  "key12": "2qkMAbMznr41eHYjiXoZBFUtq9UtFEVMiQLCgUT9ThhijZ2REE3dYoR5gjg8ZvwGpPxKHAn4KxxBTDRJR7Jm8r9W",
  "key13": "eWvUz77EHbvsj5K11MoApj18kwKAqF3zEcTYKpMT4Kf7PFbGyG7NQQW2vGQkJR1n3q4RDkbQJpxNMvFXmhrNyaN",
  "key14": "27Y6Rvwpb2QA2V5kiwxW86m9AW7BJRTBX9jw9PyWJ8Ybssk3ZiBeG5gcVc9JTGeNeYw7Pkhgv6Rt88ZFNbHBTc1u",
  "key15": "u2cST4RMfjctxr9euovzpFu4uSgXLERxaS3vPwR12qm6QWNnqRbjEwXdS6F5u5ScMnjvVQ3a3sy992YMi9i1v63",
  "key16": "51ky7zpRoB1ssj69xHtwvo6HDV4F3BAbCW3HmsEL3izzeYTYQdzz5zx5P6yd8MjF7gQRnvCndLFTpAh4Ea6MxGc7",
  "key17": "3izcsAUpnLunBYYSrhLsHC9DPwgpPWtkUQfVknmSXWCyMHDNesPKEYa2uaZfg5dkNMoQTdK1cukxihJGM7L9zHjX",
  "key18": "2sM2HiR9K1YPMVDpXQ98TXBYNBKMYuDicARcFBiTK6bGEX9ing7ESuJga9b834F9nMWEM8aGNxeYLsvGQ9vaj1jy",
  "key19": "5uHAc13YfxJpRmWAa8UJVs7RaCRx6Jw4P7H6genLFWAUm7f93scCkwGZBdMW2hjoJMuZYFsNJqpyjYwfzECnj26T",
  "key20": "2CRFfhANHA5nAjp9hxPQ8Y8yXLXK45TbgJb9Ts5KGR9JEifWHjfx33epuM98auwFzedbjcv49bfy72hpNJBPHQrM",
  "key21": "X8E1PneoxdosqfjQpXXeAAEGzoAyEU1ozfeoMWXVaCpe2wM3HhKpPcWNRrd1W7o2hJnMqx7VobqXw3exhUXKS2u",
  "key22": "5wkhoEhpU1geV3pYN9yXMJdpd1ZwmYhJmFbwHN1XgM5NWFZfkjcaRUTDeYdLcMAGgpkMaac8vGPcbTAUmA1fzS5r",
  "key23": "TdZ67PLkj9nzjLTf4bVnsK8UQ1QeAGk3XaEh9CSr5nbz9NxCR48n6zLxWDGHYkmzTMXhFQY7HDX1M3DqrhtwCA6",
  "key24": "5KkpCUYiQT6jvpbao5po9VYRVfnNUU6wJv1QAUv2pdk9paL94VcXnkSr2moStoXMGeqvrfrZLjppJZridLXDmjwD",
  "key25": "231R7SbdkPSNuptAJuCLUAuEa63KCBJbSEiQVfQd3LjB7rygZobyYfC7gfJ9ShBn3vsUVPccGMVoCXuQcrEQhjYE",
  "key26": "4ER3Wjz8jCywrLJL9AtkA1ApNLgcCmLJgJGvU87GuRZ3ShEnJiyPeLkWU4BEcdZg7Pw4Srh8FMtwdcui4Z9bC8NN",
  "key27": "3PzqUFhd8unNNMn2eN179qWoa4rEv4PAKgEtSWB46U3s1TZkZwCWKydDa89wDoMtv9G5gq84azCHaMotjPLJpuWc",
  "key28": "5sGLbAfCB13RyCgehMTQk7QaqQkBEyE9yGym2Ab7hH9CAmmnkY6TfcU2YT4kBtuKtn5B8rbzYneJuTr5iTsSatWC",
  "key29": "63XZdM8FgPXkaFDAj1pvkTBtehLq5QEvF6xa2VqVEJBXv74kCy1GcZc6dQs14dqaHXtknkf7orquw5FU9a9zwHJA",
  "key30": "4RWdS9FF8rGLEY4XSMYpUAHNyFYkov63VRXMKRRgD6xdkUUeXGkQTgvXwfcvn8PydaWmfL2pdr7T4YBNPAPMHgFy",
  "key31": "3VCHw3CmTb2LS1A6b5cn9FcAK9YMf6g4pJyTLAXMCmkz9sKzAzSFUi2nEEDgkJGc7TKvi3SvrpBU8NxvmVfXygBp",
  "key32": "fZSZ7EQXbnZosVLtUZJaBjiGa9Gx4dquMDwT8cBMc8cBxeHSRmstuTvNzp5XEXcr6kcVcXQgPeypPFaYrXs6Uqv",
  "key33": "5PDS9A6Kqc9XBziHzD9SnNe7u4uLp9j6yNXPaiCYZFXJ2ji7iPBR3wcr6qDduDUYfNsu6JdDtAg2s7umcd48rDYc",
  "key34": "V88wb6KDyx3zYnteVyN98KcEoEtDMyGC6Zr6AGhC8NXYDUavBoW2rJz6k1WZi1ZsDCcLkY3QsAVrUR327ytfmj7",
  "key35": "LAyW81V5A35joEinxZ59JRwkA6GHgqLcUBuBmA5FjyZEgYMyhfUDqPNg3fqqYeY7FhEnHr78FxGWYEhvRzRXpSL",
  "key36": "5MkBf47TqMTfyeXaJrh23Lwu9xYFZgqKPFCrtKrEUZJiZC24GCVx4p29ScE9GV9EveUkxj2sgNtCLEES5U9LhUpX",
  "key37": "2SvsnwBXEezrX4Gc9KibUcWkVUu4U2E4Ff5Ay3kVtrHmN6r9hWjF7DA8vLyh77hA4ga3NemB7HNDBH2aSR4fu93s",
  "key38": "4JhwfAAXh5WdgSBx79zFkvB1oCzXfRoqFc8E8x1qVaqaD9ru3vfqU76KnKYMWJbZSKoDqWTurzar2G3xFxzkYcr2",
  "key39": "2RN4yj7xxuMx6J6jx4zLf9YT5Ym8ekGqX6T7Ds4ohQ3Cc8vZZBCXvSLKSd4gKPJviQHDsURYTFrSbmeVBCopctCk",
  "key40": "2gLD6rpRnHEXoonVMDG7n4hphghSw5EzS8cEnz4i7BuFa8jbj8HDMtzFRVZH2zc5EsDf4phGxVZfodjBfes2EEgw",
  "key41": "4sTQ6rWVrdHjLYjuWHHwKRmfzDtbVZtHMwKu8PURxQeBaEwtxStxdPmGwmkyQUTLmoyfH1BXhdxiv4kvLG9csr9B",
  "key42": "5QE15CRGT5EnpGj5Fbw4GVJDxH2KTATrUwNW6FrAEbFZVdYPGvaJZwygXL3DRHsGAcypmsw3Hi788Da6GED384hg",
  "key43": "j5rJqJKXqraEM4FyEZFqgB5b2CxNwcwfkL42j75AagzYZjcLrkUC3jzySMXMM6geDq76tDNvNKHCWHGXA1VDGbK",
  "key44": "6AZiQvSVfuX2zCoDXkKzk1SyPLffbd9WjEfC5DhMsfvQ2fQ6AWFUuHPSEpaKF79n8NmbZht4GuJw8NMs91FJib2",
  "key45": "2rmK5cQV5Rt7FnEtyN1AT19o9cwmCtbLYKB7PyhDghmn9QBYEdwyMj2PzxVL6X9yEsxyBFrycajiSThDe13PwQx"
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
