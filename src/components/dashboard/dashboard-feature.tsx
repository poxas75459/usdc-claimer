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
    "2DTRTSBwaAZWuaNt3h4ixHdZNj9dSu3uLV6YmRaeoDUrwVsw7gJrqb4KbRTGCK91Y7g3munC2D8EJYpBYpFL8zqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tW9Mo5xA1PkjaovnU8WhQn85d79evwMRu6pgDyGfhopD9Z5fBPkxbB2Bvr2pfU9hezavkGz8PpT5be1tKu14quq",
  "key1": "3VRwnDrRNXmNQZcwXH7aSBcsKqEuiuBqoC4Z8DEwDMLZagwrHDhTk4zUEZE9TTKtKjC1Mh4QoaEqNk4S7rV7w7Fs",
  "key2": "4M6kv3Qs1hWq8FoHGZ334EY96yYqtViMAus5PpoRVrCjwrnMRyA1xPwMQGqqPjxRV5oZmwFyYQUHH95yqBApaQJz",
  "key3": "2EBTWU3C98d17hgidAGdrQvmpQoqa6FGzqQX6tweAVba4QjExq97ExgHUAhoFKkZeh35RhnJeSpvGbiu42zG9PMR",
  "key4": "5fksCmDSXzVfyFHxsVmEefxNKwijtfPB4N7NFw9vBUv1knxp2K9w92r5rZzGSF4qQPbQ7RvXDznivdX1YBgACgeE",
  "key5": "5GnbXp9C56RPKNMRa3bfhFNQnrwQYKz21qga2Z93XwjaENa1hyB59MACreoRmNmWyRMAhVAFpo2y6aXK36RhTezj",
  "key6": "57bmyEP3nwXbSaBB8uVQedRKp7NMQq1R5ZDKykbSjnSHpVyj1yRJd7YwAnHU2UQFhACdtfhhMpSmkgh7pciimYGA",
  "key7": "5o7yZb4874yQiwTYdWxCejPh7UYA2N1zunexq2CJNHynUhrrv9684igQrTJeUJBpAwPWNq1kBc5vAeQqsnx2ywhB",
  "key8": "4WraNxtPpJWs9DEqtRsakRnZysHZNqkfYtbYFsprPrKRHLVrjwmhTUx3zi5hPZqyevjmy6SdJaM33Y6UWEbTK2g1",
  "key9": "vTu37QmSsh4hNVbPsKcjNEixR6K9GWcMrxTrdSeFYnLEfheTG8F7r73fUKLCqLAHGrBZ1P2vRJ3bcWb1e7hENAP",
  "key10": "9Yj8G5XPQX3QzXzqQA5UTSZENp9zZKoqWwrbpUFdT4v9aTWUFq4Ai2DyphpUk3muBqMkvSJk2P2gPsnzS51AUJ1",
  "key11": "3Mdssw9VLUqdL5wGqzzRMs3oEtifkVs78HyK7kAP4LJfvq41uHRWfxSS2cS32L2Wo34EuCvFHxBXVsrS1UEJEJQu",
  "key12": "4LSSXTCKZZEnQchqQ9Q6tGLFKXJnEzdxrJoLCcWLBDuGbM1ycqHP3ZCtFLNctjDsRk577pGm4MasL6F5nZBVQQuz",
  "key13": "49pcSaWN9pVjDK7gwAhJaVbcp8b5xKiVmpDSSGc6bPKAs59UMcubvZW2dwoPsqpa2t6QcM2CJbUM9nRhcbjWKVRV",
  "key14": "2UMm5srroKLiBuURwK7SQmv9uBPtCUtg3SCqWGdZFNPqVqFdP2qSWuokgzqKggUWrbagxH7pVS7ntks6X9KkGwsw",
  "key15": "2pY1jGCt7K1QdKYeLoFjRU1gGYxr1Cy9xnjMBQEG8YvDuBBAfSZQHWzavcQhXjaSLzXAX4K61khYdA3gWH3Dim1K",
  "key16": "5Wf7aJgRBqJUQhGNgNAh3ty68MqEmZLxhJZ8Y95AsDBCMV4N4TnqDhCfFtro7LLSsCYYPExYdjskN3E4TbpaayCu",
  "key17": "2SvdzbektrTbCvRps4M2JhjuvA5TLe1cLLccVU8TBLnLg2gB5pwXvbNrM6i6D6LcaKmpbj1YBkQodH55TE6nnJ1i",
  "key18": "62T3bJi23A6LtLc5KmiA1pTh2dHNynV4Dtz4b3RBZadvWassVx2KPQ9y3yZ6arAQoE9GsbJv3wVx4aeQWwgsnRd6",
  "key19": "4UcyeJhBt6nU3DRrgAGgva8Q4mr39FSupwAxKiLCjZ7Qegu3pH8McFE4nRPL4YA3vxMDLGp46vK4gpYcetdrnDJK",
  "key20": "5tdqZkfLYzNY6NkBMyBuXNks7Gk4QjE9C68jTfdAPKDRzXby1KbLTZu6Ed7mpeez8LzWHc2itSxF4xXQAQj3L1FZ",
  "key21": "3hmEkonxXBuAY35TRWqq84e9p7j4BiLBU2p1ryraAH4tyaaB4dPeqJQuU3TdiVRP4jZErojB8Hi68tQrr83fxwPj",
  "key22": "ZPW9u6yHxoViSGH4asVj742GQSRbVCBGmj6hTjnzWBPxSMGBdd2u7oz9YNbxmxyb8ei1UGzWXJDmwgFfWySbhCU",
  "key23": "4dnANkXscMdJQf8wPZhpCHtjBj5Sbv7M9RtSJDHhZ8CivWzxAC6soL2J6bBnmAscjJFvEjVrZrueUMb7f1Z9W8Gs",
  "key24": "3AiTwNm5v7nd6YByGmtjiwPxQU11r9oNuPKbkgHByhwKhKpdjM5S1oCVDdmNs9YbgLC8SF8dRdx3qXwiGyZmiV1f",
  "key25": "281JdBKroq6UfGz6vmtCrwzsyS1bLN2VCVAGrvtkpaZNgvGjxyuE8rd9M1AwJVJYm28JA73tpUM8esNoXB9ArERX",
  "key26": "YXL435mb8YwUyz1AYnvJvNgWz98wR1eqPZKXZQcbLaFJmkUjyKsayH35Sq33r5yY49rH1gkht9Jczoo1ngxxk32",
  "key27": "4TJtkRjmTuS2Qe2wgQArsVtySKmv3LxWuS7gfrs7HarKsS5gQH9Rz7QGjWhooSFRTx1DkGM3RzYccP9VdzjhsKvV",
  "key28": "38tGZepJ5CNFhWangZuLm369fH71pHsMmnvuzXfiWi75p8NjyZGphMaA3v7prGiaJaiSjEhEt4GiRptZwvAb92XY",
  "key29": "4ZENF59ASNA2nkj5HMMz7ksGpEhL38rne63nUt5UE9i9pH5ySRxX2VzCdwjbta48VX6vfqDEyiCiSLLfNUMMd2Hu",
  "key30": "2W4udayRQfovFn4hv7oQPfyhWaaZrWqAKuuczh4YEMefB7P5WQjJyA8ckeRaJR6cfqyoJy2ZTo6NkE7g4bgfgTjG",
  "key31": "3q9BLcEWnHaibomf57nEYTzsJ836w2dd4ZYywSQkpS2TrEs1fUKrZcEC8m2JT9t24QPG18bZuELTYwYH99buHVw8",
  "key32": "5naByHXyJGW1WXASodWnbEZrpaqfhGfhWGzsiiMgGa4dyzhAxsx2zRCtYpiNFR4kbfTPihtvpLL8CAFDTHNr68ab",
  "key33": "2pa3BjXTpYBekY7F6FXjTrrfb7mfSrDNo3T5iShiQtZatgKbvfdDfshDbj4hLBR7HcfEzaJp5jcvm3w82meiGmwR",
  "key34": "2n12jmkD1S7v8awzBLLrk8aV17yEux1aCY62Cy31oozjtvHK2ddsTwp1mR44qjE5TbMqLKwCgg56cauZHAr8HNHS",
  "key35": "4rAokwb8ejMiHaNk8BGju5zXPww8cTTM3HAww9tKsqTDUdyX8pMwx8VxP6WyTHXchAbejeBbVmYD11oZGE638vGU"
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
