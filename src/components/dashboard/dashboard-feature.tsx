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
    "5BhHBbdqCUB52BnWC2cZayWzKBbbCQGDkPVvCQZm4W1aayJHMYu9MDvhZoyk5qEdaURL1ZbPwiDuwMC7xrRFtM6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVg7X8RNtRRxqpQNrErjYykH8nNCQipUKmbJN21WULcgKWAjGfrpGoQBeZCHX1mS4pGR6yQvXeWGFvBL34JErhG",
  "key1": "2HafLdb2SiJ6ndp7xNXAXZnUmctVNxYtdCLnA4qHMRFLzjdSHJYEgT56NgF3i7XuJAbWA9xzKArcfCsv3QrNWiVw",
  "key2": "2f6SF2fFuj9Dqbyv2iCJhHRFRT3rtzAYu5wAPmfRhTAk9DrNNLaRFpxqQPxffyQHPRUKD9eN1RDLeQ94qSv6swJG",
  "key3": "2mWoUc6KCafWjMdEXKbu75TiW6KMvEgqhBng2PAknJQ9VrwBGuzTY6iEN7fNFjjazobiBKo9xGJLFZ3MqDaQekrf",
  "key4": "4UCLvzhvvVJ24gk3DC875cTgh9K9GVHYh7pSveLmS5irj4ZXAv3Bv7Vm7GKEh4dCpgNQhEjdw5rCAQsQZgqm7DaA",
  "key5": "5ksJj1JS4YewS94W1ikWyzty9qgZEE43npx5uGrZBG832dGuSDN7qXWV8FftSSyk5DYCYQXbkiwN49wKYARU5Jz9",
  "key6": "2UZJHbwr2FJBx4LX55uHhsD6QBGsLttR9zc7Ae7o1scudknPV4qDDeFbCfEKqMewd4r4bMZgsMYctN17YEDSSQN8",
  "key7": "4JwPwkebjzfj1E83Y3RSFEe3eRxnbNuE1B4N2zQt9rVsEEfXUfHT8rBGe1jG8HVzb9USj1bctA37A37d7sdPVTFB",
  "key8": "2zn5u2Z7h4yMpRFTDpk6hoCxndcm1nAuDyBg2vELBUXSktvispLKv83vAJEVn1ckJqw77HYWP4de2H1Z3UASYmni",
  "key9": "auK6gSbui3dTv3jooJZiHWBojtkoGVP46GDdF8LXegsMLwiYWjip2CeJWSdPUHGefgcsfDXs4DaPSbQWahjKmkx",
  "key10": "CY1W2s56a3Mu83ErwxVSZk6nRfiVui52tXAeZ9GxUDAEHZNR413i33y1b3bHkmm3C48tKiv8ZhpKKA9MxvSdnig",
  "key11": "KkhYxXxiFamGSvff5bbFdwCSzxacxAe8xPbdqTPgp1yF8pv2QcBDeh4ZMhkhiVPZgKYke2fMCC7nb8tF8H7RPL1",
  "key12": "viUUamM6ipyNisDGwfF3EidQmnb1fheQnd8X4Spa1iSBeEvGxH128EYhHnh9hCiN8ZMf1jtdyA37zeUrHN2xTUL",
  "key13": "twHhzVhhrzWoxUX2Wq9K9XGhHeFMAdeWn1U8tC8EPkYksGTtgPpqvPCGDP1zmj243Km6zcKWszG3R5N7NdQjX4i",
  "key14": "RnbDskNrthMebGJBXQZAcvQp8ZjG1CvGCm3rzgjf8fUNb2pV3JXdz5SP1rUjzubJvF7kHvc8AmQ2Em2fMMzQ87f",
  "key15": "3Gj1QfFTtXpXfLjMLtVC3sKQAnVLHEzF74EknSwy9ZQ4Vww5zxLTJ9T6TVd23LzYcmpp6xwZS4Ct9xSR3fDG1TDM",
  "key16": "27UBgxUJNdoZEdQ7SqzNfbdPoU7cjgArXyc51TvhoKtio54aw3MmkyM2wb66EH8YwWQJe7TszTpNtNnyqiiS8a7r",
  "key17": "5j1J7N18Q6CytR1EssgxoYifArCuW4HVDrJKjfmAnegpBk9wmP7v4oaMN9uqcRH8MJdV6WkB2cd2uGpxvdNS26o1",
  "key18": "bRut7YnERjd2TohULaYcLhhGheVMBCSg5mMLhidr6B9vrdpwZsXoKphqD8Ri1q8U1TQ6KFEFAz9pQXa3ZfHQt8K",
  "key19": "59sP5E7gTGz6hsQJM36GfLTt5Vo2zJMs6ZqDQSK5sWHYxo3JiJgBzqhg5UEAMMZ51oHbCTArAfuepgbWdCfbmyTs",
  "key20": "2emSBmFgejLtPDQ1LT36DFZsztWf9egVqrZ6ARuKNCQQC3gDcX7NVhy1B3USeHYbFS89cw2tLNAfTFF9HR4BciqX",
  "key21": "VKK3ym8rhXfka96d8c83iiFjdXQTq139j5wTm9D9jEr2hCaHmz1UjdMjiwfB4kGGWerXJFF9tjTtrw6tRyNWotW",
  "key22": "4igb6iEQp7K6pkox15knFirJrs4azSvVykaVWC7JWoMj1Zir2mVoYmdwpJKN5idqJq7gaGN4iWWMstnuykD2cbwh",
  "key23": "2GMha7BeEjS7kkYRh7X8jT4ry6LAWie3m8NVUCh9ovnmJbJY5AKTJabQBQ3o7dMWbucArtUPFQJ1t8JbBAAArEJG",
  "key24": "5ezX4T5eJ7PwMjrooFFcekdiePWGnSvdyHtHCcvAGU7EVsXB2h12mVy4n3GRiYvbEZcqneS58Zxtwo2giHf6XKuZ",
  "key25": "2ChrUuHrTzAjZ1Lpj1EiqtovcWX1ASe1yBXB1hYNR1nCNSaDiECtrNueL4Ne6kVq7gpMSn8LoBsdNyoL4tm37gye",
  "key26": "VQ83hWtdpUvkDY4w5jWzhnhCZqJxuRJ5SrRxH938CUzv9uWw3K4S6hcpsfA4JdcR8CS9FkCbDW1191sUf7ZCkq5",
  "key27": "ESVsoHCkXL7xEmvaCaEkQjL5GiboouH8z3uFquKWHgUrqE8aLkGn3LcUco7u4dPJHXtLexu3rGLbgLLshG26cei",
  "key28": "3fnj2EFNxNhyW1RHqtibRw5cyzBaP6HZ4SbfRcq6pvAHmGeLX9HChmtBchrU4Fy3BiEjJ3ZKkedjV7oVnYy77M8y",
  "key29": "4TX36ceKZmDfb4dMLF2C7ocDKCZiQHnTb6crzWfEMfbMguZRaNZvGzE3VwvYtH44HiKRnvESrKVcwYZDdGjSNR9G",
  "key30": "2jwYXhcKCr9Gg7kGzkkdDoeVw6CBNzi2BHws4pQXEnBjkmJVS4jtMKvJFdKqSbkXyXqK1aJ8q8dXr2GDzALWUwm5",
  "key31": "3n16mivRZFrxtwbtvy9F3VNVNgLYaEgALm6CB9U7abSmKpuxeT3mZ4RgY7zqFFomNFy3MQSdR5GshptvUSFLe2RY",
  "key32": "4oW39bddTHE4mJz1Wjyg3TGYSs526NaMwz6ihaBBnjKuWtVDJ56TXPk1APv4SgnbpNqS8RwdmTDBTn5yPkegkWbg",
  "key33": "3UbmV2drL5AwgkkGCFj18xZnprvxJKw5DK7ULTVHsxPisB6yqUyirHqwfTYUB2DSgkyx4uAoP16WeNnzkF6e6y3c",
  "key34": "2bRaof5wUnyyMN8PLWkDD8F8c7KR5MnaZTvmq28s9kSba251cYsdktn8yPwkCpQmw7DJd1UTTcMmXsYQrTtZYv8v",
  "key35": "yEaKkqCNo2qas5s5jgRtmFQCnosus77MngbdpLpMFSbPUcUj5kEeg5s6mmhnAqbKMf15CPLMJyLv4hSXJrKLbdR",
  "key36": "5D4eFdt5n9oGGbTJvxJ4J9coteLa6wZgyW2E7iyZ8o64K5DWzwM7Wvr1W73Jsacprp7Qf3FRM1qrRqYNqwRGYXXJ",
  "key37": "3vtU8m49cpTfKQzw2nFEpwuS7k5oyk4EvUukk4vGD96KUJszci2h9ofBmCSKnKaBVe7yh3tMPLna8Ep2prucvh5n",
  "key38": "j7JYzCe1FDfy57tAHJU3p2DHoqzS9ryF3ExhmB4dGL4nka1t28mqgPg4fsgG5x8hzGwjvrMz5ShJ8rXbPXTGvyp",
  "key39": "4dq9aHJSzSzT76a5ZHstS8sZD1xmvXa19Q2ztUi6QLTRMCA3roTCVcfVvM13exNdtPtFfR5xKf9t4pii3pfaoqfD",
  "key40": "5zfuDW6ADT5bWuXUrzR815qqokuG7qyAuKGLNb6ShmnunenimHZAvbuw8gN5dJjzuRBMm9N33pC7We61UG4d2Y28",
  "key41": "HqstUhT8WsSYzj97G4SY7cBnPWTyGmPFn2cWsYVGJUjkwZLrCz9FHSQg3jcGUpLp9jWW8iiYWFuS8kAUJ5udm7E",
  "key42": "5B3EvNysQDdQazTgXNa6m3hbyrcEtPTwKmJbQfUpBFeoXhgQ4ZUYxetZgAiSpVFWbyKdFTeKb719J8Xb5Jxa6YLu",
  "key43": "2N6VKW6FuBV6e4N6NUD1d6Q7uUbeZaxzR42arEd7jVPNr1MTgkHJ9bZQF1Uua9bdu56fwLkUqyXLCjYisgQdJ1ca"
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
