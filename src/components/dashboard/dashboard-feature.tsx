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
    "5guDTXvTSaamf45R7DR4qwhSjgJJjmqiRk1fBEidYptSLVr2U1TEw69sKSb9LgdnzcbZ7p8AifxVLuow5CaXn25N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oEYYfRrev5CGha642bb2hQ5PZcipXcuMoQZ8BMWUtFEbv7EUFk1TV2qj34eCHKDYJDPttraTZLXfi3K1gAwrN3k",
  "key1": "4E3n5JB3PowEFojwkDrMHqZsy2TLxqcrkmLJodMdMQmzX4NRCxSCiJUJvj4HVnYSt9chKj3K87pukc4YHko2n2Bd",
  "key2": "wNFjt6YBVhSRAtqTwQ4mZDQJAUfXMGTzjTbfUYMknGGBqaz3CiT3zXBVy1Qaaqa4DWen6jjcxpGjf56ya8eyrJQ",
  "key3": "2uyu9W7nMTDJX3ugVuBhrT3sJL8hcDRS7agmhXvgqzgkc9uUpNCv7JoYfjx8Nyv115q2rjgqLce9Ghftsy3WH5SP",
  "key4": "2BZKtGPDpJuCu1GuLDbhnbsQUxxfHRGsRBwSwJgFfR9r1NFePTmyQjZeL7tJShZ2aiPabVMYacPJbphyjggnySpz",
  "key5": "34vDFpVY1gEh4dpN1Fp319eheYDRvGNjWyEhq5fr9xbMzvxU7bGYqU5DQnqGJQDZRGXBBALyWgzBoXao2oNU18jP",
  "key6": "3Zqaj38xhyx8hpMrgXyjaJDEyHgQm1koWF1eA2t6ZSF9oiVXDfQkRDzMe6GAjAekC9DdSjFzZBrdVkxutut5XniM",
  "key7": "5KYEWiknJni4nNADkDsNaJjAoBK718nwkVcYcjY2C7oLnFA7KDP17z17WksZab4BbPDa4vaEYUCN4PpGbbNgQJAj",
  "key8": "4AnLyLq5NRRThmGYH7uA8Uhaem1NNHrTbA72iyiwWYqi15MxSg5PzYv8VgyEjHwhi7ujutoeVM8Gv6gAzi3BTgbB",
  "key9": "2unUsRC6w5uDf9PJh5sw7Xu1XvZfxW7NKs5jiNwa71Hh4exaRvKcf6zsTnuCimJ3CbAjAkwkFGSU1V8PMDWKCnQW",
  "key10": "3niEXsJneffFSdEbf8M8PFdn42UXjVB6BKpMq8FkeXqZDQaKnZFkKoUfZMkEcQgBgYobuPa2XPuvuUXcx8E8xtoK",
  "key11": "5YXjQrP6r2XT2jvUS6CZmtz3LCxyMREnJQpdpCcUF5WCqsUiupFiMfjeSE3rE4xdGdZiXsXAx6G3NgGkoiyoKaFy",
  "key12": "XQgZWLPnio4KgQMeCTnc5feSnsPzZeBegWqWDgMS7Hvy4MpAWQqNvL4jKeZJ3wDzoC4ZzL74LNoETHdPD2kevJS",
  "key13": "5GDpx7C88H2rQS9khPAcJ5DFcZ1cZpWoacHNQ8zgMwtKJmaxTSu6AbTpYdr4Dds4FQWHKDxduwKoPr823xV1qrMh",
  "key14": "59HFH3Gqk9Ft3vA1yWLiYeoVgSCxuymUH4NoiPnGrYbPvW5s7mAhum9fjavp1YQYnF2nVxej4i1fyTENBUvokusu",
  "key15": "4jzFXRuuzW9tx4yexFuBsVDVfTYJoChe6Ja1Ki25MhajQj8UWXB5MmHKSPp3inu8KLjVfiRZuwi7odWwPqB3ZPR5",
  "key16": "23MDtCgn2RfFnriYLnsPwQUFPWcAnDwfPrCLtxxhUaDzADiJSg3E8B7hBFQVFE9HXgXjg6HXKH8pqxx8BuziQv5x",
  "key17": "2nZmtjWnwENhtf4WoGJcmDZUekR8ytc1LxqCAhGg4jnY7jNMjwsPvczpjFV68PZFwvdVTgRRUQMMtP3Ax4sqrVRR",
  "key18": "5z8pPAyFVDxVXiU6sbojvooBTZutMkuaSvR6YognSHZUGeRqjYND7fY2rTgvjC3rGa4nyGPASz3JvJHRGF7eFBJz",
  "key19": "LLZXH6LG6pp9oCFnuAPqKGJR8KV5Z3T1qTtE9cdkjkD5PABnCwSkN3XvpwT7CuGr33zM7EftQuzdjtMoe7NoSiB",
  "key20": "2wmTSu3JC4sZFxc4Vrcja5RWz34LXuBKyKumdyrYzwj2E43HDUx6ubKcvb4cTN5Bt7DtcFH5VEVAj32CPLN1a2z7",
  "key21": "2bRC9vdfHwmkyKmL135WNfxiCwvCWBqq1NovN3iCn1BKxYykewWYQ88jatUNoLVVzZMQecXe6X7D7dFsPo9bopne",
  "key22": "2Qd1dPXSqwykNbt6ga9wqDKZyJ2DiezkaSQmmv2dWigzoNvrehDPJQ261WzMuwJZXYxw9Muh3iFP7Z7HGM8hJPkm",
  "key23": "2UnodLeHTRS8jroP3fdi8SSkdoZquwXdKDWmcj2EKzanK8pUX6ujyf5DJzDpNaTC9yWiGjD7qsinpuVjs7J4WsC1",
  "key24": "4pB9VJPjHk3GkmHCoWj6YDRkuQGqLhBkxBDQnNULMqPJTxCFzkGkJw8A1jfz1vUq5jeytDCscXfRu4KRDEZL4SGS",
  "key25": "3AYHG6dHDTPN3oqj521WRKEQPh1DT6JvuY3K3KPrXLEkYCe4mJsq697eLaUiLcntEeujSFzqm7oFnEoaSs5zF144",
  "key26": "2GHfQ9PdH2LM1d8J1bF4Bo1ziVo7sFrmUCnuLxpb4naQQK3LCvXyfnU2R8U1s7eEcXpPr5QPhReCZBS4g6KDqcqV",
  "key27": "5atoHumNsD8Nvw5gGd6dYbGhMM5ro4pyTmzfQ4Ah5Jf78rNzW9f3RsXpgLkQ9JjhmouLwK54UtNqpVVdUoTyowdW",
  "key28": "3wBMjSNRfRGshLWppE8HAi4k7u4VAnukhLiSeTnVX7ao1pM3Wqu51czTG7VpokbRkUT8xDQXKbZNGfS8qibKbRc4",
  "key29": "4FLTSTo2psLLpkvqzZW8dSULa8uP1c9PQv5V6BmUnuKnXTEXrfiV1gjd9gCiSGKShQZ4U1Hf2MURHTSXQPXM6Roi",
  "key30": "4dqrU9XpLB994cFPZCoEmmjNYwY4hVh2NRLFec6LBh4eQ8FhcqWW5XnA2dcqQPtJq4WNUPqfdpok1Dss5t4csBAL",
  "key31": "4GPUYCMbrhKLfYEa9SeGxYXBhWgTLmUusR3xgh2bCfP2p9cSLhG4hFmcdJK6eWxCbJL36jW8V1A7zq17eAttUsLH",
  "key32": "5Cvdn4ySNWRYP9y196U6D4MjW9EnsFDUcPhyU1tTdAWti19RVbYNA3mpjeyJ2hKdYfiFwNzjkXNAkn8oxPDcbC7g",
  "key33": "ydwcWR9AuQ8zZyUwqWSTaQLVktLMxyRFV827g9hVsuFWh4TFzBQ5LSdvQ8J8ApC3LSGYWn6RmY65MD7JwPdGjpB",
  "key34": "61e3FrwsCqPnajPqqvEgt6MSYtbXVsHjviAxvpqBmmVykVjr1Y5x1tJyFpuigAc2CZbCAVkmqwoNys17qJ6HD5Ja",
  "key35": "5KKUxMWbzMmFEWEgNCMQT3uQ6xpPDVtycv1eU7a7UHZJdazKyw5sicYGMsUja3yD48u967Sn3jhQPRSwdKe8YSm9",
  "key36": "NMRuLR7p2axLPnnQ6nPcyp12rXTyi54rVvf1qAuRzzuV1TePibiiwHy3Y8eXocmBLiezhJemQay8XMbjc5mJVjK",
  "key37": "55A4L55EDbG5BQPzcadmjyiqSdCQCJHm3pNgjjLNrp8cabx5NfPoQjcqBjEDo7w5pybUgTfGcPVKQpVmwJWq85wf",
  "key38": "qe3TQqv1Q6xb6QCKjEQFL17qMcftQXvCmUqv5NpRj8EdHJMxLetLaoNjLm5bs7kf9XmKUsSwaryxLw25vpKQDut",
  "key39": "2jdzeneMkD9daFqZxq6XyGzJeoiDYVmg7oBybiF2d2AurGbF36j6UDNEaRpMkLm1VdWxNUr63hxYFvw3KUv4uPYf",
  "key40": "4YTg6hsgXNRbSHiCG9EDPk81i8iFq5bBjnUdRRb2246NEmHw23J56wDM4WBGd96qrUCBS72Tmx8xKYyBo1QVopjP",
  "key41": "61iZMxQz8Cs6AWJkhLQF3ssoS1VLa2JQrXE4ykXCeiBRyM8r3Tnurrr9hpKFgQUJmH811YbKuLp53fYt3yad5cq2",
  "key42": "6eWvpxnbzwzqAfDHYhXfqruQKWH8TEu2Ks9v4dWZAaBYuzRYXZn3phYaoCvCeQcG9YTmSGRHErRq2hLCSdZWkye",
  "key43": "4rKSHACKRsWhrzrVRCVRSqXCg94nWkMcNS9g7Wb7pfCxtmjKf6AUMYeXSZkvA81Z6TMqgS3MQ2egh2xceYgAuMr2",
  "key44": "2DysinEGn3twSWAZ33aj4rh9aYh7PKEhWApVREwf6SoVReMmX2bnuHmrnfm9JrgFgJsUPiSsgdP1GMM1cZGDE1gW",
  "key45": "2pNn8BXykpU1y6fZkE34eEWwzD1T2t4iBJmiTdhNiHhMZh3yMReP9WMh84MfNrV1UsuRaE6ZNupMU25P3PtiZ3zG",
  "key46": "4c7r5YupLx7p43fiwZrrLTUDJQCxdbkS9F9pVWWa3Td7nWoXw7fKP5yYFqM14FssT8BL2zsrvrpTJXezMhDUkPfq",
  "key47": "2ttszotmc4qd4MdE1goF2FV3E4cmFBtPMuiiQMAMUUHuhtNUMr5xK2UZWmgE9JQL3wdbfM11zXx6UUENEz7KBSyD",
  "key48": "44AMKXivyToHeD5WFjMyecRAFuwB3vgX7xosJ4HVVdUXYerZUnvkj8bx5RLRbegEiRWeas6BGFn4PYf1o5eQ9uVm"
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
