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
    "88EMaKAAzZWVg7dcGkin9YTjCjg3Y7idWrgZ3sh25fkH4Rk83rYnR7y9PBhj6ukJVSarhujVXeEBfVuKqbe3YsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fkQDwrEn6R1J5RmmVWTgwChmf7VEfK6EZwcvAgzL19KnVQjb5o9a6NxeEGap4XGywV1ZrJ2Mkf2hips8GGf7ix",
  "key1": "3Jo4yf1GCfSEb6gGoD49AkFwxTUVRRSCnaKwtbT7aZHo9vdsrWxPnCCshGpv7yU2vZNfP1caQNQdri9K848ypbUT",
  "key2": "4caFEY4xHht3EuZ6rwmkoBSofbjb713mECHveyKvWfGWeuAEacBaHp9T7V6JSg9UtRWh92617qSxW4SgezDFTXfF",
  "key3": "CqZvYm4k94sTYJr7xeigqMS4wZpD555y9WFN8QmzanCjyvAGRK7sc5W5wA4AYhmiV3jfEcCVPsju833FkW1SBi2",
  "key4": "MopAuENT1d2x8hjuvY3mcfVw8xHyfCrm8UNjCajpXghQQWoNGwQuxuTCviM5qswdUrqJwGjPHtLhm7nA7YJD3KR",
  "key5": "3q2spY9aKQGFYAcbwGumaQ9UFNKyc6jZzDsvvzp7i4hZ29pNVKteA3HBs77uwhuweMKofijJFWPn8CmPhrY3rbsV",
  "key6": "3iLfhAstNzzAigu7fi7hS7vy47c27tR3CoRRcYoFcx6wTDb2Pks5FrKM3Ch6Z4PcF7aYNTC7p3zmTQhfvD48gcov",
  "key7": "3B8sBpCJEsUCzYGjcdtpeipQdTTAvfjdWwdRvD8epBYMFCz3Lwc57hZ5vHpb7qsQWgED6DV4RmCPnhtJfokE71KE",
  "key8": "51tLnphKFmxK6PHHnjvGmZveeEuBqi66FR3JJSWzTFdBiijntKjNQPvSoWGzW5HQaj1cgyjoDJ3Zc3Ht8uaPbnMo",
  "key9": "Q637Wej3g4teU5sGKwZhmwAyiiqjr6RShdXsy5GjDouhNNrsy9M5TJyEnnvHk3DxVnwKhbjuJFaTBhPfkQg5zkY",
  "key10": "4wNchHfFt1H8SVRq8kzZAb1AEbqRhposNsnoEYvqBxtPTyRKs7bdyRfKs6YyW5yqEQetPhMfBXwTHkhmPsA8DHJq",
  "key11": "4SmMxAXc8jKr4HZarfPAAdgaVba5ggVEQyx9xSXyFmKyRMB1KiEEGytQSPMDAFxY7SqBNCxAKuz3rXmwXNWdX2cY",
  "key12": "44qK6PtzUkQ9cj98SnTZ43wXdrSvHDEg3LeZ8gYgt4gQzTCCVAJM3o6Mg4xSyRwakVDHXB3pgNxo14gvLcruDwBx",
  "key13": "2eBx9RCtxnFRTRYJqdgnaH8WWHpkFeEbdR1gsT4ef33eH3RdajUnxsr1khNCKvFm7kzJVYtneqGQKRRHgRkwZ2Vw",
  "key14": "JrSGrnZyyraXWQzMk4LWAEpNkfRS4ffDVhfkksVc8QoSS7LJG6wcq7e84yGMqakXHW6tQ7eeKbrBLZ8znJ4w5sB",
  "key15": "4cvpwM8o5D2MAo57iBTBXVceT6FkYdXs3a5jCH8KzfwApnrhV168mCqw1eQQvYRxBbagCbFgVmPZLLhpL48aYCcf",
  "key16": "3gh3UgBMze1Qdz12oiAhy1S7CY1MMZz6AidtjR5mXD46hFXM1T4MaFmnuZKiXBK6gZPTPsayfVf5ZszFF9UjZ3hm",
  "key17": "2ZiU3VYDw8QtMGGbEiJcPXcmPJSfypDPoEJ64F9oh4MXgEbmRL2DCQYQiWRNQjhNKaKdVfykAaXDLtW6Kc6Aoy2h",
  "key18": "2joENEQSRd1C3EMJdL5WdxEnVyRFvpbwrNywVd8XpaTzwMo3Y81KoBarJ2PpP2nifEv3NH3xjngQa4WHkcL1zYNF",
  "key19": "33NucpjLzzHyTtA2jJZFUXV6YRXU1jDeJtFvpR7CgDCtAEzYSyCXzjM1b2rje6uiYKkiYmRjKyXvUvUh9HNNuwCL",
  "key20": "azbpc2vmrpYiW4GpmqzaQMTongfhzx7N63kenz2YBgGjEztoz1zyC3U2KQgsCH7xBdsJysnSwJq7gXXySuNa1QL",
  "key21": "4u5X4yWCNQLXqzoTGx4fqx4txHPHJhsH9E2MfQeDwoG2wsDMB6dHS8uRcB3BxdtECenj4Lto8KtGM9vDyPfVVqHW",
  "key22": "5VfXhCrzYgGPxVofWAb1sNpjtzT1vRCvVaoWTb7DSbHRRrS9Y616qCcYNdTcfXDWjcAXzSWFP9LYjD3scnHG2GCU",
  "key23": "2LYCG3DFEnF4rxdNJvP1qGsv5VrmJtAxJUNxgmKQtc1W5WdZAofqeArXFKokRNADBUtCVsoYRmTPZ5j8FFAeVttG",
  "key24": "2vmRhZNWtCwQM1UQ9QfWJ5RxDeK3uo1eUC4obkagWtTYYjXG3kzvqEjrGuffNDs7q8JrPsX8QpYe36Xd86GQ5oG5",
  "key25": "mtAxvWM7X2V4oFi6m92UrnMyXBPFAtLvuTzcCU5TgWE3bBsAhLM8sNBjGyLNuv1zroovzwUW3yS3t9663uup7nw",
  "key26": "2MwnjPnYgxwqpM7KLAX5SpW2ib5uDXhpWPoXBbNBTfQEPsY9WQHk7Cs1HGYF4ZMzR45fTMRMvQyXtWBgEp5mrXQx",
  "key27": "4V31uffDPUg984jtmmGfyVtNJFcvavhNp5hXKguQxTjnkyDkWkgzNPYhE2j3DgkWowTHiFEg6w2jgdudW8qfYRuA",
  "key28": "56ahveS5dS3myzi4Mo2ZiFQozzjbZMMS1y8DTTCbwE2FtSWQubRvLcg9wghqPE9YAkPS42DxVE7SiNt5GvPgcGnA",
  "key29": "MGWik9rRcispMZg1FtdtKbuKFXfFbJSdJ6iPTAsN4TsL1fh184FeGPKxNxzzmyqcZckXayHVaTSFw8ZS7Ms7co3",
  "key30": "3SZg4pq6yML7Lxh6LeqGfqPe5fNNhrVnRBaNniw8MTt4qrXSdGxXKDj3RYPqYJPZYmryD7Hx24LAs3Kp5dGYTB3g",
  "key31": "4GUkHA49ts7y2sk7gRCe376z9BECNTf3seXQnJvpCpUm5V9pX7Rmqcfg6eRdsaGXbWUzySX3cQJcy7Foqn8aNu7q",
  "key32": "83EinDvz2C88Gt7pLoyux9JbhUFNzBoQAwPYCzYYSKViA3VWN4ZkdJdM4eRV7XaWtuZXTEzykgXitKsFkEZGTkm",
  "key33": "dP1dkiobRHDwvUAM6Dd9UhQ9no6j2UdXXe6DGzkVXCD9Aj23yXSGEUrsB9dBwAUwuBp2L9fC28FZC4NDwcMUCU1",
  "key34": "2CVpjFmkBjgK3HhmTmRPd8XigYCJJ1xFtsGgQdH8UmKCAwS1MJt919XXLJNVmvXaBkh59srjDdr46Rz8HZ4QybuE",
  "key35": "3ZyeiR5ifwsSQEqQSyDPDViLcABxWqbmZ5n6CZx8A7RTfFssVWnNDmD3RcSTSASttWF7k67BhmweqjXzGonubn5r",
  "key36": "3T8mKnMJFsSWrVWDTE1ACTDMuoaHXkFEkGavTNUxAdtJ14b8V44gtPBSUEnPAiUxoaQqT8UDt5ktqmwGpmKeqytf",
  "key37": "554DCV4MGF6frv47oyK9gBgzuLJnPjp68VNGP6Bid7thGWoM7mcSUQvDmTdYpSG4RsVESdE92bYmVDfKHoG7Qvdu",
  "key38": "3JmmtsGPEPxo2yFw9RpXAit1sF32hz8cfuvFJgE8CU5cSqRZFzQDZJvSjGuEhb4PfEuA4FWnWTGkpFPc29cHpJ3Y",
  "key39": "4pPefyhT4gc9ph3ivmQFAPjQ6Vz13eT2CzXQ577bgB3oWjnZzzJpB5o7ixfYRZZiv6EJSQR9U74sbq7vW2dT2fLP",
  "key40": "2apRQ9KKEBnoEEh17Aadt6LiT4PzTSH7KWpxLNmQp72Ce29S2VBj1QSDwK5UgH7VEqzQKPzdDejH1DhwhHM8vwyw",
  "key41": "2sBo2JVws5fFccW1Jjqebttypg494uJmhTJCZ6wcqHr5nPzCqxLjo8BBAVbMZd7kcYiiz6PKX4HWujRaFpEEqtEv",
  "key42": "2DwvU5qUagG8mjYANYh3Wfq8uNpodYxVyKo78CgmBAwMLwBFkG9LvPspgHPwprtiwnapbcdZRX2ECyb1F3KJ3f4N",
  "key43": "5SczYf9foYq2u3quFvhqfR1LpcqT4zqgfUJUQxzzriXAYkXL8gT2gXVmpyNEF3k9NTFPLdMiubQFaZDpy1yvoiod",
  "key44": "4jiTZxDsX6YLQtTzQvJcr9Ud53Si9X6DJsPTpbLpxx4Q6XoPLgu1E6Fy46yTTYqWEgQsAmXFBaVCqqZhDs2mPzn"
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
