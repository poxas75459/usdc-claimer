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
    "51VvDRzU3NyHQpDukm1TSRV3rwXuXx8fcqtg61puu2KnKQxMyXG52tENzpXR1ENFm4ot1fBW3eZoZLZnLA1eEoW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFftDrEc367MBEAMs9Zd29VBrSqcFeQYMyPeVgP6ow7jeRjSKgkMwhCAUn12CKrASn4D1wDgkMWnrTPu7UtaRXj",
  "key1": "2QHGAHD6YpzCrgpUGyGnNrYHbEDGxuYgJAFzMdt4gduc6T32yMYkxvJ1mSxD8UPiANWFR3enqbyi5VixcNx3jH7T",
  "key2": "4FYWwbqJbhAECADFG7X34Ph1BPQbDBDZbNoib8zFgLgshHqgfX5ds6g4eSEBpSPxUfJZ3Ltj2RTPYdBTe6zobARP",
  "key3": "34KFmgQAUuPyC1LgLwh5ReuCUZaxgwQbirQbVCzUbrud6AFYMyCDjYF25wMLomx5qZFKCBfwcpbWYcg4FbvbkKJk",
  "key4": "2Nq8Lw5p32NhcrmmRCiDoKsqGuePwt8nQmWGUyHNaSMf3PmJ9aJneoKQM9QXUW7BC6eyQKakWB8RK52LnCEfYGiw",
  "key5": "bbkMY7bSanNBNwyk1rQs3ZuZLbqtCQfZttF8tsbdHN5CDkwWyW4w52DSQF8y8FYQFg3QiQ1Kvc6uaD6Cxfbch3d",
  "key6": "zBRribAqE1WEymP3vkRKwjLujRYjzGHS6E6HycN3qYUFb7pwzynov2ZHDfUvM9zrWXcasLJajocKm2RAJXcnL2V",
  "key7": "TKixegVX9EeKTQacD4auYTmpwoTkcJfDWUvWgHhFdDMJfKf428vXrkEqNjpS5qc7GUdq2biQZjxi5ZUmDJJJLPM",
  "key8": "mKsdLihcWoF4o6mo27y37XwK3CGhVUQ5JuoGKc73PkPdUemDR6oZJ8cFXsjHL7yeLjLECTZQuRGdLpudFnC6pr6",
  "key9": "3z8GaqxhJXKks1pCqpfgzD2yivuep2UMA1FgJgLCkSpuDZB46PJ7TUPmgGWcVdFgFztKDkiyex7ikGfEW4DRxCtL",
  "key10": "2mvBnaEKWWy9e9x7hJemH48hTzNERWztJ31sZwwtGybtkM4cwcd6M2iy5CEUvT7nGUGhEjKHDbBD4k24oHuBYSWh",
  "key11": "WDAmvcx4aSt9kKPFrZ61XuRQuo8PorM5pj7NFcnAQQzobT9hRyzM8anoNjzEfe5EDUo2sdZJRXGFMqF2c6jKBQ6",
  "key12": "2TfXvHPaer8vJNjA1fzewLoN7VY8tTwokRfU2Yf6pXuzy1SBr6paBLUkSAJNetDW1w3qgurJ8ga5zNHTy9UtCQVV",
  "key13": "3FQpG1zf4NT77oYKX24St2BD2yS5kxNDEXap7TgfU2813AKdv7D6yS85QPCaBz8DwEAtHa36bZchAVMZ5onZ1DXe",
  "key14": "5ksaM9uhgZPaBNyhzhR9wFojfXqw3PmgiUjpHoFRzYWMtW9sXoUxzPhKjnmLwGz6D7UKv77KLHKzVqQJyKx5gxAC",
  "key15": "22acs5PYJ4Mt8v3EDSo94Esp1zKKUjSggu4RVv3zp9MyehsJN4Cx39Jjcke7CfkgG5bHRhmDwRNi1LE1CzyKfVRp",
  "key16": "5t61carSzUyCr3znv1gwQQ7eATLoK6rGNK2c98czDDURbxoREr7vP3RPi7oCNmAgMwJ65TR6QMGi7mHfYsoV1pN",
  "key17": "x1pqD6tHW3rFmdpUGW9wfdRDLWuA8dFNGfKoWjzfYT3uSxyDP4LxwTwyS7n9XoHZpw217vJsbR73ycqezBKDQSn",
  "key18": "STDAo2jbMeww8NxmAMQRhimPrMn6DgfH9jVsi9m7N2xeFUgLD49UQ28Ro2xBHGiw37wjmfCWnuQ8JE7HKdAWQ3K",
  "key19": "3dMacwHutGXVw43SNXLeYRVxMVeGjVWtaKUgtiUbt9DSE8tco4ZUccEHgYzSs6WCXcyf3DAzz1G2CyfVKaQPL6aU",
  "key20": "21w5knh7SSHHdnAxwqFzXgtt9mM1MQ82pTr5RQNh5QHd8YR5GoKyrNmzMK9ZQ3Z6HinCbHyrmBBRNNk2GkDLv5FV",
  "key21": "4jVULnmp8PWsHqTQRbN8BMAbg9YmD4fVX5Edt72eKK8kCtAzixhXD4kFFZ1dTLMSopqDPWoCNPTqD42BYYGiNNQD",
  "key22": "3HgXg36ihNNLvwAaGqtYzP6i98L2mpzvkehRYEyHvbvRZh47xbgE6iDXcV3jT16pAqkiFbM42UC3wg2uFs5NvJ3i",
  "key23": "3emBBfLTdvr1rWBU7TGACGBtUjSma3ZiXpF8TX4ZVicuWEf9SALgxJmNq8H5cNh1Xk7rThxB7feckpr8y3opJ2tA",
  "key24": "2qE3B9yaSk2wKWwvKAHRyv2td54iCxnZVV9FdYZ5FiW7PuAsLv7CQ6sUMcVFoEddd8L7ngQLxffbpL1Wj95qTWHS",
  "key25": "3SvM6ZjmAyBUQRfCj6iBmvg8T4STcZNTKJux69KUkNPyBS8tP18sAvzYmiDT1Rq2kNxZd7SpTqa3K2ipQBq6Zepw",
  "key26": "3Epz9j5zKhZksX3dk7RaHxHD1CF8yBFCCwTi3KRG9XAsU6GU61RHd5T25vJ8ksoTS594o6YBf7tQGoWG9hoEed45",
  "key27": "5wGevEv6jzxV56NKyExczSHQkVKNJZjZoQZThukCvZ3ez41Ktcr58CGBiUSR32UpQW1NGGVPFEuui9Ab9eStrNkE",
  "key28": "4gcXoZ4wAKLY43Zm11Jnda5tZxFBDqf3rJ8RHmHdn7VqtjopCBa9xNfUbGw2QoYbF7PcViyAt28vHd78LmvWanri",
  "key29": "5XSKbZ118MP1pY4MaRBGBhmdUZkoSHL1ikY8UricFFCFKQbH8DqbCyLxRs9VWiJjbEoYuLzehtS2pL8udRpsVox4",
  "key30": "dKS7H1zNRneBQEYbQBnY2wazQWbe1KbTk6JxLE98rrpDPHYfRCoBovHScvibu9Z9nSPVsU4DG9JY9asDyJs5Vsd",
  "key31": "2HGnRk99QMz9jTYPJaez58Ns64WLgj1tq3k2Tqg9w6Y44o7JsnY9kwcsijsor8uYyZL2iwf2cvyYweW3igkmjXBS",
  "key32": "2HKZuZkaoHSBjHuVZWBf8YF2UMV4qa2LzYB7k4gytv5FRnWCqCdU5YyKtz5JX4hpvuaFpn2W1Tx52bFz7qZn211u",
  "key33": "2U4oWLwPeUkA5B5kiLrU3AtsBSnPmswqEbSFfn9kMobp7Seb13PfxHAHZp3HdvdjQqKJryX2qVmXHafAsNzoPnqM"
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
