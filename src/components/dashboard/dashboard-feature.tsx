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
    "5QijjJUnTEyjPCozyVHPwbZTZ5NRxghM83LMfTu62ofAWNYPyCfJj7kwwFf2s9mabw9g3A2mZroACqbWNqPy7gBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38i8TZV9qXePaKWGCCoxcoWAmDkHbMtFCxpK8btyPHY84ceRaRGp1YUAigNdoxpmDE2PRx7w2rX51uvY9Znm7PTW",
  "key1": "3XPbQgygkDMo3w1pEVia1yiX1GTfQpzD83PHsgHthPk8xRszwat1r5r7PCzbdoVS9HrkuqDNvBqEC4G9uByE9XnF",
  "key2": "4D2VjDyQY1zTSaBHyVf9A7zHzeG2pdjCEbjQWd3ecfJmUZvSkY63W2S53HSTxUDJFLzvMPdEDFLbXdAjuXKdfdii",
  "key3": "4KXLNe1hnfVwLyNcT1CLoG7imDBvGA88B89Avuy1D4bCTUcyd6JREgnorWub9dLuqG4eWT5ZZ44b5KyocK7dYVeZ",
  "key4": "2bkh14uY3Gi3vQRK6PA46W8H7NfiAa3hammTzLqAxJSpM2VvDEjZA4UF2JLBXqrvB7ntGG92N6uHap4shQF8Pw3w",
  "key5": "2mnyB5rtdiAbjvNNN5nb2g1eFjexoHGvmiuDTvy5nRfhdww7RSDDRL9naLR4WcCrMxPvQpaP6TjCJe58c5gnD13H",
  "key6": "Vqpu56grJVHf19hY4eoJdLnLqLbwGN7C6obEe8x7LBMLrGJpbVog231v9TvifVmM44FVGYzBvLQ1AcVbWcYbpDJ",
  "key7": "v5WPrpiR6TSjheoY4HZ38UWR24aDvTaoE2TPJVgLs7SkLRXn6kieEQdwpKVruRHwPcxrnnQ9s6d4GayiGrN2L39",
  "key8": "2RbwHZpvdVpFkqinbwGy7pdcd3K2WZXrTvq4jQLRTLGM5axy425UvaBPK9Ty2coY9gesQkLKePTWCi39qarAPobP",
  "key9": "j31uZTtDyEvBe9UksuoeejyLmoc5roEma8QbPqDM9yHBDZDpij7wyZpYLi6nk4vndYx8gUssmX4curFATjN7nRE",
  "key10": "yJfcBWxno1b2k5S6pSpaTbsLXnXxZuzV5eS9gijAwHKSAdGwXTsa4YPVBDSyHLCQoZzM6E2QMQszpeGDyEN3U2Y",
  "key11": "27ci44RAASxfRfJMY96MFmdnWdk9pFJhygAF3REmupiv3vU4AJF9x2VaWAgj5nJK3y9cNZA55Sowm9YbStAQzjxe",
  "key12": "49j7LikrKxEwUrNXrriHgXuizYUGWRd4AHGntFwSTdGZVR5xi6RrYBoYHPQaTYmm5x9qJW1Kkqjpb6ZaaNF2fbPU",
  "key13": "4uu28T1BiPEWjcZJWYn8xYP7bb72SGHFkY4UoNMtrDxZBuqJToW2Jn71rKnGYpeN8acRmVnYCTVdNHcrW4TNE1CC",
  "key14": "3qQz6gJx4GyVPa6xUFMfWB1YNnyrGMoxk3JJ4ZozYP41QwMyQTpJEZZsVX7pmoTB1wJdRUnqMMkqHXBMBcSwrWFE",
  "key15": "2sWrTNX5t2syGpeiHpej7iNBmahoxXEuHNynADYVTmh4WDtDxcoMgXsrFvFgNEkbkhD9zx5eyV6y5fBSdbgSM7ue",
  "key16": "2CU9QP7MoHiHk34EhUoYMAZ9KpPLh98F6BRhx3ZctLmaNBzsmHrePE3C9wHhyPgeVV4p46RDaarNNnPSwDb84NSd",
  "key17": "5YBGZLp4KE7Qc6DogVYka1XzxLNzJovRjYJBZ3GLPK3PgUGHSbEvjegYq9msuSS4xN9PwoWjTTZ69Tn3LxbV8xri",
  "key18": "3q1BDvw2jG1YzW9q56p3jtnqBQcgCfKJqQ9XphzdJJJGztrihcwCpNgXWWM7YbKEmvfJsjbxYnGFDLo9j57yc8SA",
  "key19": "6579KkvMGk2C7rCVg99pPRRbBAZffoVPBEA2h78dpeLiLnXgshbnpeM7VxmhMTgdwHVMH89eXATc42uPqnffUWKJ",
  "key20": "2Eq9QrvzynY95VLsmEAY7UcgMdiEBnbWQxbPRyRrYd6vuQUz7LJMuQ68HCqGdb3aoph3SSEq7PS57jpN6gz6AEna",
  "key21": "Ty9hkTdtbmCm7giQ5Y69B3X8mn2jEBJTXE1KAfSTGKBSneGip7akeHB58wz1maLcN4SMYAjBqJuF94Ga2Pw4YCm",
  "key22": "Rqbhy4QbiUeH9Qg4ooC3Rp69vdex1ryZ2iY9AH3cugAhDBx99TKkjcyLMV2sqfNAG8yEykmR92Ndxu4ADTgVtAX",
  "key23": "2NUsjStRGNAy7graAAtKnnCrJWgwhDsp3K6xTE4wjn2pv2PzzeHgbiZPCk4CLsXaFdFqc1ADDNjhzqeoUAgDEeAJ",
  "key24": "3vcHau6S1seXDYJHhjRyUqahytswhV4bQatwRH8AtnHbPpQoV7pFFVArw8ZZMUUeeGJMAkgLvZMQKoZ65PWLDZdh",
  "key25": "oei5WgrQGVU82YmahQbJ4gqyMTQmwc7SGimiBcUm8CK5h9m2ZUpCvDrUVn7qh5VHTadi7V943t7YgE58xLMxoYM",
  "key26": "3L73S29U65fqrbSEZLxeSqRxS8HGJzTDvW6LqEhX95hekiAbMg8Nu7TXCiLzU4dCw88zQkCh9PTPnVR852mvxg87",
  "key27": "4caRJfQxknoTGVidbd8z2PGrMDwoPpknfMHdWm6D1HWSxuQAFGkHZL1BLuc7UmnVPdNf2nGizuxvizr8eQDRKnDL",
  "key28": "59uYTQbjRht9FpK5ztSyDgzzM3TVeTDXfnnXuhLdSynx47KXDNmMkKuYKCvU7pYghr2XTofy6StgirntkKAnGiVB",
  "key29": "2eK96m6Dr9tS1upf5JoSDjuz8i9GS9Y1p6772inZP4hfaFLrC3DMH4re5S4PJdkK5tF6q2HuHobHNBEALda68dWF",
  "key30": "3CBLcV6EV4MT3GoaVNXgoD4dV86iwMr3kjM5cbL4LKpZuyurmoMQBZN2J6C9KeQwf4Su8hWWNvxoQby1WcoxUvki",
  "key31": "Eo11h8eJnLwrZFWp75Q8vbvV3ncnVRMpHR2GwRiFuzZLurTYf1zHK7spRzjVe6nz6ZC68mZk1iRA4BKoUacCizt",
  "key32": "4hYZJdLUhHTTAvJSUk3zYZVTCU4yZbSLL2U9qGHZdnDwwr79JxyNDnLa6C3cVXarm3Q8EcVjFGPX5HAGGaCsWgd3"
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
