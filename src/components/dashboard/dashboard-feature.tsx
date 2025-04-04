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
    "3mke1xzURbFFuL1bigWD7dtT1Rz21D8it2YxAsNyxrdTNg9yw8s82hWJGMaNM4PPTMF9c62gmJwFa7bCAYuqJP61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K2aD4PMgYteMm3pLHyS3ZsZpLFysVWv3U1gYLU2MgwfhB31LkpiKpmU2Ub3i2BRdwFvs5tfBJj4sscDzpeCsD6L",
  "key1": "2LhSZcPSTWZGUoEYnBH1SLkdVMoPzRYU7F5doUb3GkCErUJMdw7tzx2LTmpjj7V8s2uyeH7QGy4jbGBoRp1tj6Dm",
  "key2": "4T2QDd5BTyyfpH2ic12N11cctPVQdYyFygNm6DjDg4UYmD3WmTHwDZqanqjsE8tDbjzhko6uL4QhKPa7QWnDzzau",
  "key3": "3vhVNjKkcgTihrxxvBkYycVjS5BkAgeTvsbfuRBeYzsAAop7xWB8VEW9RKTd3vgtxAPab6Tfvr7LjnDBFc8L35ym",
  "key4": "3BcvAzJfRKf4drYfbD7ELbqozzzhs7wqaMr7UCJPmDQzWGpzRNzEugUB6wkSw41HHR2xZK7ZJxPE3jWnHJrEdZwe",
  "key5": "4Hqgt7CvZQzqNUxcv8eV7jzxYr2YhLjeK3DCwBUkWmKLZX7pFdjntEarJnXHHpUCuymYkGrgdncahqVToBaV5vPE",
  "key6": "EHojXZM5BSM9iwnhWJJyfXwsnsLcdKThb9HReyXtqH8eB6WZEmpUb5C2Cui5sDLLzzCKoYwhcu3EYvfjqd6LVqg",
  "key7": "3fKDksVfPvVGdgJcze5HE6ij6HXmSFstyCJ9KGVXgVYhdeMRyhLHpqyXA55QiPc87o4ssBqiXy6knBvC6YaAMzQ5",
  "key8": "4v98J66bgtuvyr1BLJqyHqJcH9iZ2gtEjFAcCm9A13jABhaxW5EuZRXyWasixS2AYuFoSWFFriSwUDLNnWP2JBmu",
  "key9": "5TM9WfEi4jUWbEwKygBUy7Ssi3VyMrrPDCkiqBEt2FS3Uhm7zJDXK3gCRW5C2H48YX8H48mj6qZaxY5wqc4kqAG9",
  "key10": "2ruXoZRFnUedtZupuoSUmnv67TdQyL6trx8u49ytWrxw53aD1hXXEN6Hsqc3feUJWdotDbeRtob3r2DDyVZgP4xp",
  "key11": "56SMur1BWQGU5jLK6HTwnSfnGRqTqngt5wozTjyhaKT8GC1H3VEdq5ogpnajbf41WYrJ59biFKdNthHWSEtmxnxk",
  "key12": "4cjbUWFzM11j6ZqTsXZgp1MvQb9aEYadDRBkMkMm5EVruRWGCmkk3bLeHG9izpKvmKpAg1Sdzuzx2DfWy1q7WruW",
  "key13": "2cruAYLKYgseXyY33snnDaJ4huhzsmJ5HFqe8Ykf1zBLxoxWifBy2Cn9Eaan3XzTGSwj3fCqcz4wDizBQmws3FXc",
  "key14": "nAsUbhtoH1eWSVMQ5EHvhoc1bAmQQhqZht2ecmzq5LpsV8VRb4z6DAmP7MZDgU7tj9jt14tvjWQgnzmMrAZ8P1h",
  "key15": "5mxwii9sqbeAM1zkGVqMGTgQoL51x8WJK5WU9iepaubcWJt4x4VTXxV7Hifuu3m2WSX3s7EocRzNQC9SMiyRqpVo",
  "key16": "4EweAAQhGWxqfNU3BHosvpGFgMnd53DkuQA9oriMeb4RWhPJbma8YMLfnkg3MXQgWnow3g3ecmR4GdhY5i8KY692",
  "key17": "3gC84pqM2XHX2E6bnTjP6pKpgUn9vnyDWsHLgmBFCbRBcaQa4hMykPMepUeFj6eXRKk8qkJS2ECvdhFfFnrpkdWF",
  "key18": "2e7rGR4BmDtr2YicyPUsXSqXaAK5XQFgdygTD7JCtKMQV8oU95rWX1ebCkCQZQsAhFrGCbvrzLgCbBpaDihrmbFg",
  "key19": "4B8K6Q6pLJ31iQb87N4KyfNQ9SyKjYhcEw4897kfGBY16rkBqSN8BCkJR5sZD97LQXRXkhb9SJGf4DV2PSw67xyp",
  "key20": "sAx2TA5zhmhbeGkdffYYUFYisw45pibEXxTjSRmB7oPwzXu5euGXbU4XjswfExFTUnNZwHQ9sbfwhe3S8neMFFi",
  "key21": "47RG54UzJBpRKZPP8zrRhLMGU9cNPcsrWsANRMLNphndjzM7XbT74qXgMsLEqaYtioYxAPyPMrydUBYAfYV2pBQz",
  "key22": "2TEVoV2k879FCapxjroiwTZVdaGF9H5eHb2eWi2Ut2oigKTsAsE4GLfRogueFDYepfargFxk22NAbePqssAEMhQY",
  "key23": "58WQraM5svfQ7GcGVzHZnoNgXVUWDxS5W2FnBqZC6sShpVgrJY3gBtf4RHWpJscGdqSMPZaoAEjXT2XbdoaZS8kj",
  "key24": "2eQVL2WujU68HbG2ccww7V9JzAgEuvnu1q2bMUTVw8WBUcBpMDzzxBeUfg57FwyPZ52mCQiBqcBcrgaQKLhENjCx",
  "key25": "333LXC57FpzjubcQ25aRnVYw2MbZQNnrNHAitdaDmywMzTZunXS7eEok2rphHKrKQroYhGZwNZQRqknV2PkMRQZq",
  "key26": "25apAdD2PAr2XxSkBrwJUwQgg2rBb7eWAFKw43c31y41QroimBavbBq6yKsandjnN7YjF6PaqcJFJTQWsCq1s46G",
  "key27": "WGwuibc8yfGVyGkvuGYbb8RDApjpMkqSzeUpxaTEFc2GRHs2RoSzJGURgJZzu41JPcu7kuzwihtnMigF5ruznd1",
  "key28": "3b7xjJpVZtQJEQC2rozq1wJjmGSkHJ9NBi7feBKusSHiZyvftEWfSQqbR5Tcnw7pyBNauYRahtHncSgvspsFF1F5",
  "key29": "M7Sq4FLsSc2eRszjDCnkiLJ25UgT9FgYJ7GHTpNbBiqTsQ9xxmdhyrr4dxpk3DNeK6kjhrRuva9p4zbJ2dVBjGQ",
  "key30": "3NtUnwLN1Bfu2BfAgLSiHDo9BZ3wfa5bi7G1KWB47GccWHrFWP9GBB8Y7dr1LZzeBgfi77QAVjzYatfyC1uaE9xp",
  "key31": "3UY5rZ1Neu8h5SZDN7xZT5KDGKb9ZhJtepBi7Q4knuHfxjqT9rFNoVyY5PRW91pQa6Udxyg71royV4iHQJ5qjPGX",
  "key32": "2n71gDxHQsfeXr1aY2ELtnTeS29HLaTsJfRnMVnsVRVAMzKk96icW7UYm3aUJKjHTqBihhWdYo7WEzyxqKoCREZ5",
  "key33": "EWMb9CZfXbjq8x3DsUGXKdNuxHgee4QY6eheNrnDya9hxVVGpFJBh6AZ2xR37mVr4oLyxmPHJV8iKJD1WuWPSdz",
  "key34": "4RBMxxVgMgdGQReKXR3d64KtcFBNjmtBgD9Me6Yyww9Pb8JPzPi8XMeFur7ohTSMt16W2vk81G6xaPYhDXAqKeyF",
  "key35": "3NokYMtSyqvj1yJznSFpqTD9os4LbJobu3BzPUJ1SevnBM3RzSK1uFizxEvNKryEj5VVvHtYDWhou7Wyg8ABVBRS",
  "key36": "32VScDFygnU6YdQ7UVe5cti2qRKcSERhNzwTLLNbVftK5BDhj7YvARRdhhUvg2cMkrLUFG96rKPNWPuxdEydzHaF",
  "key37": "5osKH8MA8HaDJPyuCjUZKrFTTnxykkDEJQESrLgeyK1dSwXLEUDxKDkWwbYJSKLGS7NiaLPHeY6HRcbzjgLNZUtt",
  "key38": "d7bbFLH9eBKyobLr3iByACQ9rK4UjUzPG32mG4mzSSpFA2NZwDNYYExnmrjAXFj7npm89QwRknDNm9QzdnidhaY"
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
