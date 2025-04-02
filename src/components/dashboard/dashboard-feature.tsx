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
    "2LZxos7yshoiWNqkPp55XX7CerH6zcXc68tzLodBMgJYowcFF1W712LrdGsMoFComgtfwpNZtaaw5dug6Fz6oAze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fYGduBiNt1x3NEwwPTrfnnLwsvArwnP3ZQphQMQLtzYTZb5kKP5bgku6uahuzi7fcVTvP9EfqS56RfjSFDiPL7J",
  "key1": "4472RmbfVXBEyd413CpBqgKraHSqYnXuDetyRTrzzDE8dVvK5cr7XdZgRAYMvgLAKBUxcCXhbVYXfFVRUwbA6YgY",
  "key2": "5SDF6S5unjEd5aVazseTKGW9NE7fmz7qApiKc1d6Mfcf8yTEKmvmeb15sdHP2yndrghQsEu1SmSbcaZLReE1UzQj",
  "key3": "5RidCfXju46eCqcDyLnwXNEatUqiBK4jMnBDQupGXu5sEJ3oQS3HXbbi2ZbRsLHAkQJW9utLpubKhz8HkXkzFAM6",
  "key4": "2tMyjk4Rwwh9sB7Vsu2Qg9w67qhozosKa5wKYmPPSo19HzjEpEPLq5XTfkdjk8tXEwYVXZVdJD755V5AuQLzwkgu",
  "key5": "4xDrvp7jrCCNdQ4F5oJtUXULNXC23nQirZwRyGSDSDQ7fC8X5yjXe3kU2AZsF6L7wWe1JpmrtjkgDYikXu3XczQo",
  "key6": "etprxjMw6jc9k3sxmKWKSKkMPELqGFV9tDWCPPDYNET96mqkmXNK51mXjb3WAXWP8Z7iAVLbrKBfBrwiR7U4zeC",
  "key7": "5YfyVmDechuQKjgm9uqTx1HCV27LJ9pjQkmKs7qWwtztKVRKsj8YBuBqiNVAfJExqDh1dnYSQ3zHwSiheGTyoDAW",
  "key8": "3y1fRdK25kDnAxvgnep3rcry9s9pepHPe4t9caannPSyFRKG2PZMJq1bKDoeP69GohoARq2UgTimykrLmo9JMrcK",
  "key9": "5HMnwEpzJukf7wK5Bq8HFtzvkUTp3x1RrczUx2nAefQ3urVCAnMExYTZbQoi6RjKNAkBeMqE6PKUxLP1f21XEi3F",
  "key10": "iQse2wvHwoM9ppe6BEg4tS1GvZHA39JiyfiS1LNmQ3zSYN7U6mkvXgsJ4mvuUDLZnLqP674nd8BHnPkHEEY96iR",
  "key11": "2AcHgRKig1cw1fmYoSp5yHjDd5K1KiQhcoBa96A1z3Utwj4TAEJbSxvSA13PmmbhqPzK8MxfkStzPD67mEMZrQ4e",
  "key12": "2fDM3sqPHzYXpf3WA561BFNpZRqR3MzoRgzKanjgyWptLCpkVxNnHGgX5yhPigvxHpbC1vnyUcbC923NwzgprcGK",
  "key13": "246djjgpaZK33hNnDEe4h3B13BHPRS6BP3zWqaniG9r5Q6ZrHFLUzN6qgGVGF67tQrMQBmhEWcCHHCzMWCBiFPKf",
  "key14": "23wGfudo5hyGhLH1rfoawyXL1L4rgBLtYTzfQqV5zeN6pcN9Wg6Q89jKzQiB1GnZUbydzM6VCzoccPwhczo9cBzK",
  "key15": "5edkJqSGJUxriqMvGkTymTSSDZsCf5fRopzpus5eof6joLgdFs9uJR34UaZ5kbSBWdfi4HmtBQ51Pk5dHsE77SN8",
  "key16": "3C22UwFpNuFXp93hxX9mL57ZVxBjCLKvwp7iT1doY4VfuTCS6VJ57jq7mR3fidLYshnKu2EqdKJroVAWx9Gtent7",
  "key17": "AFoQHqT9NYcqDaDPtFtgLMu8rpXyFdpYe5WcSa2F28qt6o1q4sZWtvJvTcGXt4uF1DRpE4EtifzagvxkyAX5UTh",
  "key18": "2zGCi8GxxVse2bfefybGUoX8yYVjpWeGeb8FaWTVrCwfWC3KmsD4PxjBzxXy4jSiDuYn86tMnZmPksh58XxZp4Pr",
  "key19": "yfLnanZuLaub21qYpjVN1AFQw1mpUMPQcKdb3tGqYbH287cBJts7kh48jLkvKWy666E8LvtBvG79wqvaVjFzNew",
  "key20": "39FYwFjNXfBzjzc47t2NqfmHaUZbisfHLkKU3DJkGnUoH7jvr5aqWhGM6y3b6XHv211FUcXEmCfyd8SPSMA56HpU",
  "key21": "2ymkGSGKBMGsK3hDXXi2U7qRmkxFM4vbapj4TVKkkS1zaPEA81cjUVn5tJmyRWmFHdf3GeEsPSh6bVT9cyfGoa81",
  "key22": "5SEAdawxiGKes6PpkhWPmQuMKEatm7KnEhZinhphAerD8fe5qkV5cmZN3KMYwPuji7eSjDZiH194V3frkP1Hv4iC",
  "key23": "2feiDxwGCW37xocQRSrHWj7BGx1qNDfFVaazFTSttjqUnbAN39iJryrXyQ7oJ6xYqFsfKmpXzy8ucMsz33bQdpkK",
  "key24": "k9rGuv2oxQiuxek9WDbeSiyty9vmwwm4uNRn5CPN3CrovMwT7tKrQr4pcZ5jmQ1pFqpWLnxJ73tsubWQ59nRCWs",
  "key25": "3ZqzyQpS3tiNYkZ8MygUBHWJ14xwKy2TXnYEEazwrCqbb1sPuSKQbPeQVJYye5E2SapQUsUs6yMduaAu7wNmzxpp",
  "key26": "4TBZLf5ZiUYRXYzexo4zp76Hp2LPp7A3LvN58dPkRXpFgZ9Bp7EtNFLGqYfbVmivVfSeaS1myHJaffWVJcn65vBz",
  "key27": "KqPq1sNc3midqA2dHXQpbtzpYg3rz63MvzNmWZVA2GX7RjFFPqAGrazucwRtqW1CMih2hYJaexeb4UDA8QACLJW",
  "key28": "3Aoh6v4W9Z5i32HpYEydaCEXJyp6Ctk22jZUQ1Rh5CUMs8zieuQjm1dXBGpquFNkNfyzVkzaX1LuueeVPiKoGuy9",
  "key29": "3vWCHE9m2TyeJEMxxzvA7Ujs1ZP4XgLxcrLUX5ac9GaZY532yefu6DeWJxXaSGzpdcR4EnnojnVHcFZDXPDFKpqR",
  "key30": "sCPJnrBKVVktj9a3Zs1SSuQcuhrzCGBxgs3HVufhcLx8eQeVjUtpg3LEwLzq3GTsjXwVXpErjeqSbNBG7Z5HLXw",
  "key31": "3s7E7d8cwJhh2yPjCqHPgmJFdQL2rSfxKFovUTzR5Sohqq8haEGjoQ5Gq42mBhoKUwMjbVA4TXFoPpZkxZve2cKf",
  "key32": "5NfdvQcBJa5s3tGH4S6ZNuCxkwxzkymX6LEwMoj4Sx69QA2rYoQnLHAkztsPie4Y2RUvvDZEqevXt6c1nBnHArHD",
  "key33": "AhuXYu9obyMhy4pMnqUSGybE17P7NhKqBkrYCgEF6Zex3kdcXd3YcmGAFam3LNSYTZoCeLeQiLsQchaTKF9aRKD",
  "key34": "3426Tz96rqtFJm7pFt5amCJw3tiNYUD97w1jeMRbngLkYL5obeLhmHqbf77bNNn6fmrX4vy7e6YsdbogCdeGJvTo",
  "key35": "2kkRpFH7i47YScN1FWJTKFWdk5ebKbHMkRykTndL7enD9jMEKiksy1HkAGci8Cwt4N6dr3R1B3Rgvncr8DPgdiia",
  "key36": "4yfBvzWVDu3rfsPKp2bYnJKbCP7pA3iGtv8CXoq1cwMXzyTUgq52S4PJDXnJ8XH3PdpGe58h4JXYZTLw3pmjXNg3",
  "key37": "HMX6YuA3m3nYJtm5PjD2iUP7UAZyjuryKNqrFYSgsved6E6LQb7NREbELhEcFjQ7GqSu9u72NdMNe8XyeS6euMZ",
  "key38": "4dReU54ogyzUFVDcoj3WHEzEtsNBjZckvqDVYu3RukL1BfpECMcKjWB3xFZKU5JxDYxByiaMXuKW2NZyLB8pd4um",
  "key39": "32B5DUwxLPGcMfZohyKzGZPYYithKKwqSgb9zu6w3B33fwrwynE7orq4Gn1Vnc6oeeRtvKvmJTkpMgLAXD5cR4VX",
  "key40": "2sBZ3DwP2QqcVxTmH3eEHnvPzAFXERHHhQRgynq5S1N6WsqH8JYqx1Acb96tsbbuEzMaymXDuLRyMt86HEtT4oWm",
  "key41": "2xn761FYW4hpA3kjfEgHpUELRwt1gABoo9NzYhpjjsdHG6pTvyK2GvDc2mMJGbzUbJNfNhomoewzM52uh6UrPEvt",
  "key42": "5hCpA69hPA5tDn5PQspTir1NY5JTYUXDt71YD2xgx4rrVqgSvcDFTZJa4bRQZ8DZLEBfDvc9HziK9f5jBxG2jNEn",
  "key43": "4op9tDG1x2w1gYP9L4WqVnXmEpJaMorBpegVksGFa7B1yzaWCbhoT34sgNXFMWhwn5pZMwnzXQgsEhoFbg3aNPfB",
  "key44": "2cNXq6UY9AUVxFKGLrwns6T7HkdayhGZJgYi6vkGwiA1gqUxBKsixWZyb1r2MomJVxn69MvduqQwHVKPSUuCFW3d",
  "key45": "3EZgLWgn27jiqvb4bprHJpsqSXc1xvzxS7MUJNAtxjpfEr6fcochsoxVxJyYp1diWFr6EVUVfFGJN8hogNEXhRX",
  "key46": "qYwhwgYc9Aefyr8wEJGBm5D21GxSMbGBytr1g5MPfTVfj8xDNPJFuL3KBhvYkJMyFfJ4azBYvhLRkHALEEMD2XU",
  "key47": "39jjmZ7QmoauwyN5bXdAbB48s6XXzRG7HGeJSmDtbJ5na7QfPWzuqsSR7Txmfw8WwszW5k4hFUcNGicd4SPayH5y",
  "key48": "5bLR3x92d3oyjY962X9yH5hrAjZuwddqmrcnYgtLGjCe42tUSNQVaaMcWbzpC97trKgYzg2NGrMcsoVEae12Hi2e"
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
