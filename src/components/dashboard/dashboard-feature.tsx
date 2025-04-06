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
    "94Tx4DHpEC3wrLvZzJCNQ8Qf7yTnpKpe9RMMHhDWbu85RYYbHcsxSAAYcA4AhCUumdqEgBZiFp7pNTmupfqfqzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZR7XpQqNNc7NedCWWCwDTMxXPoiWrkahPNpJ4u8v4wLytDct3ckXSe4L56To83GuAiD2dmdVxazxiZY4P4gCo5",
  "key1": "2NffgPjv6736aXoyXQFRbEkeAzPz8x2j982WDZKcotnksw7aGMZPwqAgjbrfPUoqLetohciF34tWfQ1XRgQmxVS1",
  "key2": "5NwnHvTYe5Zfvt7K7R5uVggRzq7N8biSqWWcBfPFJAXxHbYTDoECJTogX6aRvQECFk9HcNCHdWLyd95mqYzu1V9T",
  "key3": "3zY92VHp8WVaV4pr9W5zBP73nEoxkqNP5e76BD1LW8uwgskV4SsbeYH9usybe3sBALdoVwSAj4Kq2AjkccaNWq6T",
  "key4": "4GSq8e8XEZMyc6s3tHAXQq68oaADtL2sJfczp6wgwuRoyJJGitT5dLqVy9PQUGB73sTrzWTkHtBrVwb6Gj8Ydora",
  "key5": "1TySWn8jWi1qqwRgU4VuT83RXDa2vbxF5n8euan15k2Uq9GyqQXgktVgVVjmM4pDz3jXjyrN9njMrzT8tZHWuVd",
  "key6": "64LtRJVLjgvNmwnRw9XuiL5h4d5hKmXCPiUjDrKDiv2i37b6YE5ndmsTPK2DVfZyL3xJzJ7LhY1XE79R4Eu47SmT",
  "key7": "2VrKKrspMgR5i8QvS4yEJRfHYvtmW8rSP6BR3c71ienxgbt4J6AiS9pEAgBBartWaZ1PoMGePfQxAz6KTig72qST",
  "key8": "4KLefFfwkrbusXMCoApBAE7Ev5AJLUQkKkSySwefTzdhf9U11dZHP6Ea77ydei2BqhZhycfaLTrm5pZeaSvKEQTZ",
  "key9": "3BDqXC6SZsqRkCrRAv25se5iXZF3DzarYbTmHwPmVSbMD8DCx2iffSJkRgGtCc4JSMSfn6SVCbnUYTmszerNyRyv",
  "key10": "2kKx757s1LTT8HLN2ja9vH4SEg1KJrALm4WHXYxq6nKABvYzhp6Q6PyWw7XHmWj5BPDGbNxjbYsnNnso6jg9A3KU",
  "key11": "4bmHMLqRqBp2TXuy4UWDTxj49D9cvGeh4UQvy6zHVqEjLwoajPVMM8WG3tXwb1JB8K6CikzvAKwzYT1v18rtpKkZ",
  "key12": "5UzDe2kgvFoKhM3HZfK8YZcu793QcRoW9jFESfkbWPMH9228Z2VMXDFHwU4m6VQ5J47ZRkXgdb9MHRW4LpmY4iZT",
  "key13": "44rEuDC5W8d1PN4zCCB7m4ZLSSvFLJoZqssAsWTKUbmERxhjUUmfwvwy65uDTW96huhzhjQY7WajjWQAq8jPwtQf",
  "key14": "5kpEyC1Mjo7LP7nis9Rcdr37KTup5UbVK2a2idbTL1otnVUHNQ2PXN63GiJoT8AZv5Y12Qxyynahv9ZEvSjyMpqo",
  "key15": "5RjCYxvziCfENjuG4ZEhL2qqvTjQNZYWqzhgsmhJdEfHadFPWYBMUTcMX4LqZVsKQgMZnmGzm6e1G2emUJr9MS78",
  "key16": "5S55ckGtKXZ2QcAzCQXuY4eNn18vbo7qRzZu7vNtwJVAbjLc9G6PmxQSZ1uqGwL9k7iFHCQvegZFLvzyMkzv9Mmo",
  "key17": "2Uf39aDMQCsiwopBV4rjfYQvKCJCdptHrUtUXa8eodrWxmUB4Wy8pTxjofhiwcLQEkWDDUnURPzk7ksM1Am5RHdf",
  "key18": "XZCWZKyTBYFzXgjpqPc7souJkpUyqYsGMmBxMhUdSDBtpF472prhtUAc6PMAUngmj8PPqSF4H9gk9dZ7tkuEBxq",
  "key19": "5UA3KvCtN9qMXeehDBBiRwjzvkJethA8DTum8pdotvyH5EQLNgFP7WAVCXApfkEztH5eQye8qCpuhLzUipfyZWmd",
  "key20": "3y5XX8BFhG26t7ynTRJoLkt2CUGNiEnvNBUrZWDXn9hpzbck6PbU4tfS5141PLarwSzDu3wuTzqFYR9bgFXb4oY5",
  "key21": "2otbjEwnTW7SrbS8KJvuWMxL6ovR1EZNRrAxQUGNjJso8HNajBGehRADamFtUmLEo26U3M2bnNWJGUZYDf5sToMu",
  "key22": "4ugKZCYUuVoebhMcwdoukasSe9TdzdZb9hZriAGNEix1dBQ39Je8wpiJ5X55CywDMqfz12oyJqCCxnBff5Ly7yaa",
  "key23": "3NrAjLqu45jHRuwUhiXRp3v2o87VNvB7owVPwkMJvkT9SpMee5MJAWgWhRbmWzwgdsN4F4YKwLqU2SwMYa2sPv7",
  "key24": "5qzXDdz3bXVuh6v9fxyTH4VRHKz9UQLvjziseE912FpDzDrTtkwQoWGN5G3fR7wVW2C77WZHgCznjfFX5ECFgKFy",
  "key25": "LT2zhbBcQsQkhhbsfK216tZ1zPN1RQYULCuaHtQgoayeG3dxSXCF6ytxKwhMz2BGbSMYJUAaQQP5aSnCDEHfMjr",
  "key26": "4izmiBt9DLh38hMtpaZgXJeLr7yHFSVGortUJrPi1ewTADKQaMjo2CMFsZ3Bha8gZRu8qwHbMrvGZWAeYjufXq92",
  "key27": "X5yo4K4XieLDuJaTiTYW2PUYiFSVHWbqeqjoax5Z8tBAH547eccffk9UF4CTdusKKytaFSDW9Avc3acQ1PrkAsC",
  "key28": "27qvgndQ9dd8r4wgX4G2EhF2N8JaGm3F5ufPm9kysrpg7yPF2HJi7kYnuGyq4ou79HzXUk9SLuXSMikcDSoYpTcL",
  "key29": "2bKXHPeAYeMzc23NuvsndHSF75iqGgCdMMFYZ8HLuf96CRRpm282aeN3MCtYwRLeUR6wyZJU7ZNwyCN5dyRYFKmV",
  "key30": "2UKTTV1asekrJFwFh6bGCcQK2ScVEMzUsEHdkEggNrPHoKyaaTZSC9qYVeYSDuYZP9V2DuwRX2Dtaxn63RKaWFJY",
  "key31": "e941yYLpAe4Z1ZeYELAV8ay6svHs3eghsTboX6GSV8nZpRS24zCZVSPmmMuah9ZQWHVzJiFz1RqKRf9JT5TFKZ3",
  "key32": "3PXaNpy2uLaFf7YLtUJHd6RinfHptn8fkckPcRQSVxfXdy6GUNjGajsjk4F9t5oYmP6EE6rpVjpw62Vm5Khq4YRH",
  "key33": "47DFkzukHi5P1pwxSbjJ6tAKmcjRgdinvSSDHM7EYQZjiNPbcB3EQXkoXHixRMUoHNd7MdYCfYMUfa3KnGz8hSKY",
  "key34": "2m1Bkcrd3Y7xkUYnahnpGF72JZU4HSxrz7vxanKKu6ViarbwtQYnaaSE8LG7Canf1ny36UoxkTcVPeCwyk2Dmx2y",
  "key35": "EHu5L48uMb2TN4pyWPnQqtKMmwtwTWYJpc1KReFeZCU49jmkAmrb4ZXmqvtGpttUK5Q6zZ25DKdhXD135Tj1i36",
  "key36": "u7xVZRphhVEX47XKrz8K8mZ6aaiwjqFNcxDwEQ9UY25U3KvPa49iYwATqmh8ZwnesBwQe78HikQ3T7Z4EWS3fnE",
  "key37": "2CaNJPdaXNk369Jh8zfQUQfvZ2skTrUCKLzUkPAZTYJr4YvTYatQWg5zWWN7uwcbfvTrNnDfKEvfoEb4GaLoVS2b",
  "key38": "3oSNRraE93hj7fhLkZ7CsGQpQ8sLc1vuk5V2Y1MniqyaA1wpcV3JCd38Mfn6N8QUguJ9XPbArG2FtSh55u1E3Hy8",
  "key39": "2ATA9TuuN7PtrqnPre3XVRmvKPHJWtjCcvDvrhYNHThuoM5ZB3c3umWNAnJB73Disp4b2oAfKvk1y2ciVARJRFtw",
  "key40": "FXhyrDD5UJaBS7DLwNLTeoRnaYvSRSYPWj5LUfMEm3nVvkZmJdLhK8uXisdBvFbiiYnb5DiBWW9pFtNix878jeS",
  "key41": "NgP897bA9YrtpRUYgMmCMsPoaAvHENG9FNsaiDrE45N6pJJsk7qxPJK2BJjBvqwyHPkcWTrZhK2p7ce64UEHmrv",
  "key42": "5pBE1ptVDAFNhdtAhmmG1ehz8GjdBmy8YrMUY9K9AnMehDXqCYkGrSZ2Ywf32An63XBeYf9eqGwVpWD8JesKjkG9",
  "key43": "3A5qAiZcEXSbpRz5cxHbcTnyg2VcG3sDZiaeXyFN16mgV4fEksb3N6CMFt48a7EAeRsbgchR9nC9KyHVnUeXyJEs",
  "key44": "44ukR7Wi2HffoA8ibKwwC238WVQuGR6FKq7TSVTNJFQk9wxWVwBgGsHjoTMkAMmVqfYTXjMp3x36tBDYm9NbPWNN",
  "key45": "4K5XxXcj5iZhrc9CJeuUNHC6mbwiE4HFE7NoMHHYC2KVF1KxTQKpWAPnaiYrcGSV3XzDLNcW7vHDar9r6WU85Qsn",
  "key46": "QoTErzPkJEsnNkZA3NLeGf9AgGZF94S4r1oLpLUbCcKNvt2LfG6cKiVoBU6CTTE4rNamumwcPiJY49WVgVFCnq1",
  "key47": "4MsDRaXNBMxk7y2Bu5yGLTPsnWAxA3S52CabLAy873b7mymeQ9DRoRvJZWqxytbDuG3nuJ3SiDzqrM3EVBhxQSPs",
  "key48": "5LJ74DZzpPxeDDErQFKosjBvjBkbaVnuDreNvqw4hyRndT7Un81cBKPU2LzGvGrL8iBKWzXkMHXo8tKzphPjdkXy"
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
