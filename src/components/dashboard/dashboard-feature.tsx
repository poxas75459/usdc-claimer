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
    "2QSFYZxMjuoLvk81N5HribJ5yBbEBM4UGFg9nF2cZFXwtWi7YReoGtJZv3ZFVM6gp1fD561xXnGH144WXhoKBZR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lri8g2yTsfh3MhMG8tkiN84VE6Yh1tdQcJMyDdfMi7ZfJ5k1afFT9jwaGLP6r3L1hDnEUThAhMUXP2YRkgPBngq",
  "key1": "59d74xVvt7y5n4VLoqNJTkXPNERfvc2gjfbbfRqhTN28Let1iZSsN7adHiKPoVDJeADzne6rZGyFQ7RrzYT4kzAG",
  "key2": "4xzAHrRCYsmQEt1LTSWDjbW1BoCbQAKeAMyKpWURHiZs3ePtzgaDohhJZuqGqj6zx8jhqXw7PV5J8ii91KD2FGq5",
  "key3": "34HrVYiHWa85FT9dTx45Cv3n5BRXtyaw3TdbbmBkAaDhQE6CgcmaYFA4cavzuUvxfWWrPhcLeVQpbyo8vTMdZpEY",
  "key4": "31nWmuxyGWF9Xgi1ZYxuAYzPGK5GGCuM8n2uXWeH9dnVuWr4owqe8vAhyrRDEQc5tG9urcXR8TLqhUdbEY3au3uK",
  "key5": "Za94cur8mmyK2TNrZqSAyGS6U5xkdUNgPYiMZRYcp1YGxJfHesdnKYJzSAsWApMfTfkXGEPqp9Q8KAnuV7Kwn57",
  "key6": "2cQTgbXdbTXB6Eb4NMvub181ggKPvCMG5xCEbU368NZXip97eeRUm9zwwhGS9sNr7bQRrwhjkv7MS8D4LXYudTx7",
  "key7": "3M7PKwX4MQs59ovynMzHAH9ksTouQymoGVCGVzxw49yai6VH8HimKjrs5jy2vECKKW8d8poiH7ByvyGSscFHL4n9",
  "key8": "2G9RsVWSkzrVsSUspY7gQULGCC8HqSXfihDw3JNThUWUedGfimvqZAbkQgLRBmJePFcM4gBLZ4veUWk6oNoHYaQC",
  "key9": "3PNfsa9F559fizoHqYhHjXhMHSeVeae1R3SZ2iEjD5vJ2z2mRZj87pRJLb1UgH7qKv1e4G6ksFpWVohFKaxZ9YF",
  "key10": "4NSDKmg2JbTzXK1vcZpkHwicXL81BysXPp5st76aPQQNpyxpwVEoe8WnA7M5LvKdtSnBUAYPu8wjrga3kFCk5TEL",
  "key11": "YUa7n5Ew95aUQDhVwjuaAcN7YrvhsMUFFNB1z8vMzzAjvhAtLoxH5rR1q4Mo1iZPswWLtFmGnFR9wcamngv5DW5",
  "key12": "23pmx39NFSgXszj3q2Eep4EFjEALSe1emSaRAWfN6qnEhxeYVKhSdqj4gpeqkT1j3stXrraWhQD5LtzBTLBRE3c8",
  "key13": "2WMP6JkX7UvyXXGsjjQ5jAPo1wbxLX4SyDwJEh4JsgfEjsFcGDcV1RNy6S6WK5XQJQag73K5Cgu7UT2joaWUNeVX",
  "key14": "4NYdMsQfDgi4NmzhdoyKdU8phi6RGc3vGuehstqjC61YJKcSgriDoB8jL3ghUcz53H1k8Soy2iwj3GAJ1UZViyeK",
  "key15": "3Meq5ziAGQSc2sBNjsj53v9oTAva4BruziLSNBGGySEDhEsmBDz7hT2oWokZaKuSGQRkffWZmeJKQkU5wsoDfpG8",
  "key16": "5V5FoEywSCMAMfUxkNr6fdBpFY29P3s88bLEDT5fCKtJW7rmEP7K6zvh89gTh779ZajCQkCCLu5Ty7wdAF7cbRbK",
  "key17": "ixCmqZ8yyvTtszyycqZcX8GxA2Nc1WftLQ6JRzXa96BcNZnnqXS2Dodd5GKyQbXJKwuSmaRh2yZsgKYKadYF8mV",
  "key18": "7Ti5Kd5W9ANPbnVHK5awHKQhWYsASfQH8ciSTtAVXcp6vBSXYbfUPy2gqnQLc63TzKutjZKwrrMTewUt5HJwJo3",
  "key19": "tBytLB2aK6iJ6UkJtY2XHmmssQnaMMkYaWsBfpjEWxbGLRSr8RuqyKGLu8idm2dXjNYS8arbQ3kuV3v7bqbUQFq",
  "key20": "4NztsEksrvj7iG6Cd5v9KnNHnsG3fLDTJxGw5VAesxZjf1eS4aJc3iQ7KyHh9e9XKvVY4ZyiUBfcsHXRB72VpHk4",
  "key21": "4SRryNX9iswXZKgc6scn27F839Z8s8XtxnYGEHS8aEYsTyLzLZwjcgYHMrfW3knjmAxPjsPC8EPuE54k8wEFChrW",
  "key22": "5KPe4fbPNkiaBqjSvke3jQMpADLHq62faUGHR3pXuQuPwsAkNnooimFbyhD79rgjekrTirZ6BTYmCV6G5WbgfNkJ",
  "key23": "53eEpEKXHLPFSfBn6nWqSHQNjiYNh8DUWNt9bW5TMGhDTVbwsCGy89KC8XcbWSDQYYA7nsWMWg4A1SgEqV64FXwG",
  "key24": "2udg2HdxYRsW6eEY7j92qxcpr9iyX9ZyLw4w2PCqMUTA5QivEn2Un9XWdp2TgFzgTzjTyiVBY99xNWRBSfNDcXbG",
  "key25": "2ktm171Qaefjh1e8Z7PdNfiUPdB6XyQc6jBj8Kkcfjv9f7bbr3B3JiT6oq9jPwv1GjwnLmtC8fEzLDTEvadXSndM",
  "key26": "2A45zgjs3WoUc16CCpoF19hYpmnKiP3z968TwQUkmfFuu5H1D4yr5FaGhPhHfmPFfFiSsJxfr9Vz4EdBtHGYTQkk",
  "key27": "3d3pS1Bw6d5fpF8UQqyUYchWGy1mCXjpYo147VPnHQiFU497YSXTn8RB89cdCL2SFJoiCxm6A3XnxQSkDRTwGpsM",
  "key28": "49f69QqkQDHTGrQjg9AqAJuPT6bTKjxR7tVQDyu1NNdsBX99gGXepHZUCAzjM56bEwbwEh82No7xi5Dh4U2AjnBB",
  "key29": "2owV9HRdUpud8uUDqoi5Bpc3CPfp19fVFdBrcr9u9yYVE4B9KYQK3EBEyVZV6UzkR3SHgTwATN9hXqTz64d3sJo4",
  "key30": "3ueNTg94LLnhpp9CTCrzMAgTWpQe9knras1TuBwT23KtcHphsD11pLCqkh4uWJK3Cfkh3v23dW27DLYyLTKcpwCh",
  "key31": "5kFbA1fZHLtfG6K3mnNqddof9WZ66J1CdPWZa2tiaBC3CCRp8oEKGmpEDyAmnD778gPQoHc6YuRJspBWCueWMhMr",
  "key32": "4FuGRYRNH5SnEzP7mjAgCocbAp4TnhZF2hmVzL596FmQzhikGn28nLS1Bq4j7DYsHdZCMCsGWEhqaDbQyBrMMBT3",
  "key33": "5igMU5H7SM1e3SEd3pemVm8U1deY1btY7TEvwoVCSAN4a312ETL5DtfZKCJ7VnRrKGf9g7W8diaX87vm4kJN89kd",
  "key34": "2CxpmM45osZuHSpCgR1Z8gZc21Ty3KwZW2ryRQjUn6SMVH98PZyZfaMe8qDWbYhLe3tnbZnaAKdUtuZ2Vmrky7iR",
  "key35": "27Zg1w5VnLBaCFBet3fQwvhWsBqq9GGXxQPof4zo5KzAMuPfC4dozYChfJ1h1cSrg6kJ4M3ZXBnXjdjn4j7o9D6U",
  "key36": "3Vu83yD9JBeQNm7nUfs3QZzirGRsobdXxZfKixD2JijxuHxV7AXGQUyDmJgmNFyAmnsnwjnv7BRrTfjotnCm5DYQ",
  "key37": "3AU5DFgQT88da88TtQ5VHbBtqbHfoYZbJR42MvzWsNVzRj4H7ubjB4gxNP1Mqw8pvKDqXpGLeYqRvPZztqPtKr38",
  "key38": "25nsuK2875dykTA6z456rPuaR1BRiFmTeYqefjd833QJPw5PL71gcjdC2HBDaEKvihxKtjnmWJee6FoRRSgBU4m7",
  "key39": "3bYtgWLBE9RrjwJ96CVNbF1yGJT1TaYPGEbgVoMLuptuXcrctC4m7EAhjaWF22XBwEFgnA7zxXJa6uJDDyjBogHw",
  "key40": "5VVZdVxLj6dMA7DgXemE8jV5T5RPjkHUywK4NiuTsVTXLsprYmZqsrTKhbuytnnoLncTfXr7kxmqknPu5gzjTgGy",
  "key41": "3dCsajcNTaKx1BvukCe5Ub9eSZr92f9ccgMDAufDLmVpuCyAv9g4EMYxJj7MABeobmBGQYu6GFJA33XbSZ3yqUV3",
  "key42": "3pHhX7L3CaL9XxYB9cyr35H8VHpEPjpaAvBigiRZ6iFPuRqHo4bw6i8MXJXE2iHXzY5HRw8zDqPyXntMtPfcZCzR",
  "key43": "2YhhkbmKbHXTGVhk1g7M52gGxMe2Piq4PYgUtCp7Q54LtcoFfiFSD95PjdrEcF2nwsG7BzMcFAHJ8TN5Xv23etES",
  "key44": "3qUzqQbX84z76niGvVFmDSWctqZTE1Z6LVishmDhRV9uV9qkTnpNBxskJ1LQdMHTzjoe7W3dhmontYVsNXEAbJjU",
  "key45": "2atiCXkzQPW8Vs13qmAtUjtUfkMRJ81fmbS2gTYZEmVxbKr3vp6LBCi6Ywa86kK8wqExM3JGFikqxeRU6g8D9aHF",
  "key46": "2uKtnTEbVT92nbXwGvEifcJCBxGne2b66Z2cQesxsd6fhxsBdjh1dcf8bTcheqVUh2SghkeJJJHUJmr9YDSoR3j4",
  "key47": "5vvMoQNEvEEnWU5fKHEVt1a1EnnWC1pDJo8jDjgFpNVQ7CkrSHCF7YXA6vrZtYfbCH9qgVQ6zhmyBMZ1poX8WbgH",
  "key48": "qJC65SvKYd7Ud8FSKsWgvjobZ6Mh2ogw9ButkZwpAna9ttko1c3gSmGwvcdLDQXucyKpmLazEFJkZVWx6rafFAd"
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
