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
    "6413xKKPyN26GPFzLZazsK1e3bVwGPbHZiKziaqDBbXEQpVrWj9qvjaJimhkJi7YyJe4Bjy1xPW1p71S3F4hLXRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sc5MqytWqEoUuiWsf9ccNeVrQFzjmFccStekdPBZR5zZ7kyFYuTY2PKs4ZB6ksDFdkURRw9grydGSJUo8GaTfg7",
  "key1": "5s8s4sZFPCVDH3Nsdm7476n2m4A96u7fMiN3NLPrZbnkzB1a8kXEBaBLmECeh6qo67FThZspoyEqisRBuir4UBNS",
  "key2": "3ii6tNSSsYGMqfhyShiLGwt2ZTyMwaWJw9DPqknFucKuNQ8S6Z21A1y3mkKbbEnpG3B8vBpocWAQ4aUReSc1yPx6",
  "key3": "2MqrvMcS4LFYtEM49hJbqSUD3XikWg3x6Tcj6p8nmL5AY2E2B9vaHvmEkFCeB6kdu22zDhCmdbZhRrseNKTApbYg",
  "key4": "4xsS7aQymUvhphHMYF9FjAWJP63hXwdnPn1ZNxLFU2SHdXwVRwqveGxEWh42gHjbF2REEAQgTHF3EMKYcKMG4qsq",
  "key5": "iufjhTxekfFH1u8yFyrigL8WyCzj3TqtHzdzKRFiXro14tNbrSaysiwDQJ6785hC8CTYbCpiDtZyB4irrkGPPuz",
  "key6": "2VJHjMh6KBeQWBoQ2NhZBkeBmdJ818VEBJs9PyA6LepPdU1hyR9wT1ZV92JpdDE34eMrQkuzuyDvKFBp6fdVhAff",
  "key7": "3h76DxQ6a1qhorjgZADRtAEN8xC2Wv3wC2SVkfxLKLMKZhD9Er5mp9kjWcJZ1nkeQNUWg81aK4WhVui9bYeYmqse",
  "key8": "3r8DsQ9TA93QBfTfpLrfobrxo6mmwcwzMGiNhjPjc7v7A43uj3yMf3EEptkrTgv8Uh6gdd5GVZkgFxxuJpVr99SR",
  "key9": "4kjuhX2ZhU3CR5tqa4ANHm5ewAAfd5ucFfsvFw18W6t5QEMCwQRQNzNzZpsFTZRVanW48qcMH2zfybrTpexVD5Aj",
  "key10": "G8LAQQN1tx7bRiqngCCbAFSqYv6MKidMDaxgAxpPssFvMGbsMa9EVfKKiXkQgokqVRiddXARDyJhA9BS7v4pKPN",
  "key11": "3TgbJeMjhXPz4kkpnVB1dtN2hcfvR9FGkXvqmSjajBxf8XovK73t1cpWEP5o6aBQHQSnY82VyzjwQ2LwjExhp74R",
  "key12": "3xeKXRfaogF2mxtp96ZwmGV5m4Ne6QVSREtakxQZGQdWujEKRVedUdoPv1oFHHnGi9hsbs5Su6rKR9bk1gRUmQES",
  "key13": "4Q9MC3EHZp6w9DTJG6D7QDaEPvSKUjvmuch4zhUxQWtZBmc8Nxe2nEWER25jhJ3KkfALvEs2dVBVg6ftFyNgB2Rs",
  "key14": "5Qy3PjEDsWg7cqgKNX6DUPs5DoxxcL6RrHbLRm5gmNkomWWyZX7e25ncDb4Zt6zpx7e68raDAj5zTLPymH7hcd3N",
  "key15": "UsHoVXzMsyqajUTch31ZVRqZHvJHzcc6NyjNLQ1s5geUV5aYVCp4QXKV4H4qyqS41AgjGjTRtw5pMpnQs4Fro9L",
  "key16": "L2m5UcxcF1HgCWr2nkQuGCV2T1QXZUzW7bouBA5pxmX23CwTaQmz4wytxcqnEkKzv3Nkhct4WN5W9YBjhe51UpR",
  "key17": "3ebW7gFk5HKEfme6f5t5nX6sKcfY3Zh5J4U9aYT89KB8XdEDqcXAwr9PVeSdgJKc3KQWzmKKbe2sSmhgyb1aJbuV",
  "key18": "5LPvWVdwkzHVttGJG3rFahCAC2FsNK3DhTf3bs1AGBG8ZCqfoWve4BQn29xqUtk3oa38VQuLxcub8f6uACfM8KWi",
  "key19": "3d59y2FmvcvaACS3mx88PTbY36zrd79XFRLsuUhDsCTeD46DZVa4mimRrpaEt6Jm6eMoEn8CgsG593dWJasQgEgK",
  "key20": "47XByHHsb8WCPtza3cuPKBp7K5GqxNvwpMYsdsZ56KyAyRmx6gVySkx5xqodrL4T5h8FM8yASP1YamdVm1TzB6tj",
  "key21": "2Q7wbbDaNYEKxTd9G1ZrYtPL99oD5MCsUavDDK4jawcwn2Cu1K2cAQGTyXXA2PPm8xKgV34v21qxkTq7KHPVX7wQ",
  "key22": "32VT1ArSmLpeX2yUzvq2WridJW4FUt2BW2gW3dariGE7TDikVwnk22tDVvSZxrq5PmJY5A6SVgTh8mZSzY5rF8xn",
  "key23": "2Eck6esdUZa7A7Eu1x2Yxxa6fdBVxvmLQSch5L7pv31jHenCddxrteBzAgMRUbeuw1haBwmEpFFYo2NrsXBUeS6f",
  "key24": "5dirfFLhre2doyXGTZgnBJHV7yJT6HWZbo9B41LbCpQcr9VVs85cfEbmKLvBy1aSbiKPSkAqe2TpPVT3oi79TJg",
  "key25": "3MiKyMT67kygbN9vxxbjynDEumKrXsGUdBLBtGFXCqRPTbbFAeS18hCaBXAhKQ9yk5FdCFbaPmwuFh1GQ4KYUxZk",
  "key26": "xME4nSuKWtifpBGUHN4ArKrbgBn2KSwngFptREMfyv5rVAXduqPcX7Js7jzPvTHurzYCjXVRZnH69ePxwchxEvn",
  "key27": "2rtaFJffY92VpxuF2E2XPyzZiKq4tysj98QQrJSwHWUH1NtrmKZzipeUWNUBJL7hZz7cm3B2jMevye1NgEMKNN35",
  "key28": "4mTvcdbPwnXCesx2DryeCigNdWAcEAW9pgaodx3BVyyYqVjMK7ts5TPWRr7qpH5etWkgux4KZsooiL9RiKp3v2du",
  "key29": "5zYLWycJAPQwWnbndeHn7fZJmi5RxBkoa5gxc1N8nU7TSSrnwJL3EbQZw5WBpBv7UsMP2YozFmrg5WoWhtGZWeK5",
  "key30": "3T7vBHVkccJHFZYhUeDhdyJk4ivhbcJyzAZCqThUj8EWv5D1hK8RBtitnaA3BdrjbjoLDBi4cUkXyzVqYcvqWXES",
  "key31": "36gyFpMhMswXiTyn4jLQzfd1xvwkycqBx4g1KqKPTcJkssnAY7zQvUYW5GhC2ZCAwGsU1zHLxwzRUav6K2dmPimx",
  "key32": "4eNzAuReWFxfk7mC4uSV8GXTf8n1r3uij93JbvjAsfsGnpAoSQxwnDXyQzQbgegQbCP8ZCckHNDERfHjgQ249wj6",
  "key33": "5iapYgkGB5Mm7XGTwUmk63m2weRF1fzKnxZJe6vFisKn1WD9ttKsrMHVq4kmePq3kycVYoVkt8x1yrvwpNJjehKv",
  "key34": "5Rpa7q21fmVwPxgcB4Xm7Z8SXsNNTXCAXifVdp7jncw45nG9KJ8UGWefErve6ZPwUqm3uq8EsiJyM2BoLz269tKa",
  "key35": "5J2g5KqHNcq5QaPCuohbXc6eADX3vfS1UiLrDc3jVKzZ1GC85pRfCJ6vHYfCYHTttDmZ3CmuknHaBDohzAQEUKbU",
  "key36": "52EkZg75cbQmBmg6gWtEErzFMt7qbonjhhzjvRKmF18m8tHaKu68h6x3gty2f5UFD6MSBNMYJo71NYrxt32N4pNT",
  "key37": "oLiDE54fJtT1mso3EN7yALMWmt2wxxriKa9HUe8nqKHJf3gZJ4ypttzWXC9xrED5vYQWhP6j41dFCUmb6qg41P2",
  "key38": "4c4bQb4Gdvys5xEXjsAMUakQJEzwEzneiFZmbUWfhGzB4D17316mJi8HQZF9YRoF8RTJheFW4YYoNWupbpsMFNs3",
  "key39": "53ppSF6yqP3NifVfY6NBUEJRQyG6A6de7VxrNV9T1k2MYA5HyVrSi75h3K3EcdFLPvi5CTHcdkQN8YiPtXGjzsnG",
  "key40": "K7omuMR7zMaU2K4LaQGkZGwuz8VWjF6G6Uz9i6HshYs8bEeCj9URLQRBwd47dZbwq7vyGEqTDbjh4w3RoH1y81S",
  "key41": "4LHC4ZoTUnhXAFKzWqxZ1XSoKJB4C1dyMWCdxp4KG2c4Vu5RF8juBMxLVbHzPfYrAnBn6AAUzv5imQBizMFBJyoE"
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
