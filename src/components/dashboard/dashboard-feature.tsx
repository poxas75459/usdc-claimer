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
    "2UcE3q4HtPxx6qbyM6tcXEQHHic4z7nCwje5P5QrY3CTDSbGQqRBTGqa6s7C9B8iJyJV9VyKg7GnrV4EiBkomMh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8sbGQaCe7kEuzFNeMs8VngHoZ5y2bSK1o7THkJCtjK6LQ7s1DWZRmp5zTAY8mk3gC3WmHw8KA4DKSJ3B5CyX7m",
  "key1": "3tZ3wKykmA77MiE7vtGJVBVYqpzR95oruyDrvxkGJkXZxBMZjoJWpKuBjRaFL4VRkJpJy53ucWKWor1zYMTHniLs",
  "key2": "5QH7kCC3MAmfPm7UrUkvcBLRPYGTiCHbw7JAKW7paj7MjjMoQahY7J15iNTEFrjGtRbZSKqpUwD4ACVgfgZWFkHx",
  "key3": "3GynscLk9QHY3Knd1G9ZPceguFfkc5DbiqnV7WB4JDeTGnCLaBDTmNxHQM7JK6F3LipZiK7V5jZaCbJFFcYjrXCS",
  "key4": "LvS1yyYk5U64U6Kg11aNNdkLNYfMQh2YmUQaXXRrP8X4UQU5CJKUPuhkmCDs2AZNtNRt772CL6MJ7nY951v8B5x",
  "key5": "42vVix6rC4Yi81eL34hhyfe1bfiicMtFYJUmKVcB4y9r1mkhKyqvy2cBz2tYtgq2tqEph6HTMRKRP7sqsDr11DUm",
  "key6": "2YZ39v1fvpKc7K8fmUkCkVwFg6CTBkzf3bSqj6KTj6Bm6VH8HNVXT3Ue59XeN2tiorZykFRvVdQoUA2PyXRy8cT9",
  "key7": "5forJomW1cKmpriXYXEnkPZAtwMYUdjkVmvY2vUWfsZ9iAY3K4XghUETNEbLeadDH62kTGGAHJxyv1wmLmUK18sh",
  "key8": "4a3fsqik6fQWEq4eqjEFmfkJijQyPJzAiYR6jBNCGsPvgjWwdyiiBXg8MsZJyWmxDHDYyHDyMmdCApTNrockpfKk",
  "key9": "wvdh7yGY6zf1C5XcFGtrhymUDRu7Nuq84jRvMwvjHMANSPMx7inB3UX5KJMn4kHfQZG9TT1CGbEEppgCUc7RedS",
  "key10": "53BHxbXFJNDoQhZZMohJ5t3EadQG2nNgSxdTmsbQhzFFWufcQuroTcX8w9CM74Hqve1YPaCq8ahurr7TSj4cfNVc",
  "key11": "4fCZroTLwvbpUBR4s4t1qEFUq5LH7trrwHYQztKZLzddd3FwatD5St7A5s9BD7UvtrnF3wMq7JiDDXGjPxmPSjtw",
  "key12": "4rSwmRV41e3tCUqNPzoUTGboSKU4CsGGAHcjEduhP857PEriKaMCZpH2ieHTGsDRVXNMdRhk6a97k1FoGM8SPmvy",
  "key13": "4RtJiF852UBHwA831ariumNgDSpd3uW4dNsBBzZ9Nwh5WXbm6qXiG89bvUK9kLxDpsqnewQEk8UL5HVg6rFn9ZGu",
  "key14": "351pFrMbeDhMr5ixP4pzTL3Adx526cam7Rn1XCgsuVkDzihq9RrvV6CJH792iZZoy3zVWQYNxxpbwtq3vQWrqnNH",
  "key15": "34TAS1odDFfEoaQB9WqUYLipAjAt4Nojbp3HxTm2bcH56hLB9HYZgANa64pH6s3Q6eBD3vwkFM4AfpC4RsZyjeNb",
  "key16": "2CYCWWBXhZSmCv8K8fmtS8u4yLxBULoPCcvHevYsnGU97Y6SiBiZNso4sDRFQbBFGnYjtWW9cKqTirgJ9pN1ofGB",
  "key17": "4L2qtpU591bjAn8SzjfKnwmgc84FM26rvMdMWk15iMULDWPHzDNkZ7LF7hmLqR5edPFjXide1vczEuSURX94Yn1r",
  "key18": "5rVXfqCDycGLTW9bue5ZtupBhX9siB5bBUKHvoomvfJD3FP69apeaYvedfDpeEpgQ3SDZJXXfdXArZWQTnAuuLhv",
  "key19": "3BpctYMXgvUiBdFBcdKioJsjhmVsC9HfjVZkSTgz4RwmenEPgdCKbyE7Czy6SakHJUUGrLfQ8Fr6vS9pTkMR27dV",
  "key20": "2PuVTnfCpdBvCGDQa9bjrEtgqAnS8aP8XsEMMk4hYBnVknEqtAfswrA1UjTtiRQQJhXTqLVJgPacaZYFGuRA1uAV",
  "key21": "5cNMRZRyN8wfn2GdMSgbtHFfUtHqNDPbSYSshiiuNVYnN7NpgzmKc2kk3veSbKm86tGxKkuTZFBvJbnnxxn6rEXd",
  "key22": "5fiNurE4wLoC1iCMRnjvruGjyaEMYCTfnEvhMuDkgxVCY3WjHM6pGDCguYszJ2rrE75VdfmdDn1ouNbigGfrDsk5",
  "key23": "5Zn7YPUciSRL3hjVEwGxZVvhPnDiKkRhF2wixb52tE4VyH21zDduxs7nf17zJ2mtBntgyBGtg4n5iqPdyQTzpACd",
  "key24": "5RxN4qder9y1zLXvgpUjUgFqXo1KRpi6GFyGZ7Aj5BLStcj6i5awpJMq1BKk1JRUiptMqDLbNyw7dGHaBLjiM5M3",
  "key25": "5NTfSSy2dFM4RGN2jDE3UDs9gCzcScXr6TgQ3zm3dCjdDLjztgfYQuEAmwXrh9KYfFrpq2jEiqVAskWhb3k3pRWa",
  "key26": "4KuCMFT2uQo4DVRLquAmm3x6Y6sULrjFs7AKAGaEvDQxsdiTQTf5h9rV73oEsGzHeJkwzkeHjvHhFVkHatdHsSSs",
  "key27": "4z3xjqA9BL4t4hLhWbfqL3BJvocLSge6bj1Buejrte9iaefPYsZETMRDnocrjJ4ofeQrQrsgJZGap5cMhfow4gzn",
  "key28": "3oQXn9PMKzZsDG4NxQfV6XreStRFwNsnb5NDng6UbbrNp7aA776QTJbbVMsxYQpCUPaMpLy5vV21hx2Uq3ptrfe4",
  "key29": "4Tme25soG2QoP9tJBS5L1tRkYSC3YEz22nCSh8iAJyAJy2FHSc7WP3kvJowgRQDsRAMSZoWUZtuJcUG3JDKLZFBg",
  "key30": "Q8FbKJaoz7ZH6VTaBTQ9EM9ZCH8FfsxjBdCRpbYN5hiR6UELibUHiY5APB6r9NfZqA4P8RyGN4HCMuxyvonjzFJ",
  "key31": "4BYuZFKc6twRTN4QMP4u2MNWittWiaiYcuasx3Q57P2zzQnapJ5cc6GUMWwtYR92AjgP2Jef4vQyGTLkgstLhMLb",
  "key32": "Nc6vCXxXrAhi3AGhT5D8VEYCKNfGzCKJ962jghKycEZ66fuFdumt7AwDy35WVQVQZaEK38ZyQgKzBAtrL78K7uT",
  "key33": "3oFgy74ZYiWeL6qUk8YVAwoa4PfrBHCozFvVVYoPV793CmMZif9RmLQqQAjw7zLEob7gLrPGe5tqEMndzrzor646",
  "key34": "3QnARidFgPnf3DF8UeRyE9wMLjpWnvVFBSK46zq3RPLa7rDLiHh8dT7Kb67QSNJX2qedkppMSPF5CJu7wFyxaLfS",
  "key35": "4fGXwkSyoNjeCbrF7r1sQeKtc8JihaNcnzDG3Fq1nbazS1tDvedcgFXreTg2BZAEpCui5sVobnpFDVwLE7LiEG7Y",
  "key36": "4nm8Vqcwi3QxDiL6HTHadUsCHb4qi1y52DBgDxAkP18bE7nUJy547cWKdFBEFZZkY7cVaUez8pdU4t3n4uTkMfDE",
  "key37": "4kudZMwMxSb4smSGKyqpL5cno9xgpWjpTjp5BB19rQTWCVLrZzs7gMAZXmUguJMnPoNqN4UPeZqMC4VcdhVYtTTj",
  "key38": "8j3gAkEvCmooDagovtapUiwLtA4AGfNxoAcEQtRG9roTnnqNePjQfEMkaLgPcFj8JwTS81WYJZexzSY6rba5fPF",
  "key39": "5UsmhvV4CkDcF3wAX5s1nWBfzpJuLxkRzYvTxCdsBvr17CPxjfey4RW25SbGQssxS49CpqBtYVqaNALhjaYGovkH",
  "key40": "2VmdsXr69thdXMFUWb5oaQQ4z1ApDVXgb8NbcfzZrSsSHmfqu3GyzKxmPjjjeWpmWynZzVRJtgnZ6dPdMBGi95SU",
  "key41": "4s9ui2yEUzr3HNgGyghvxxtW1Lu6ULPib4zqAt7cmQEcTcaerDhMvJ746uU6U3oRJNXW5m62hGxS6bHSASea6viD",
  "key42": "61EGa8EVeBnXnjgk1jjBBat2jm5ruMCcu9TuAkYBqDbhi3F9nqZNFW8sa4TEEC5mkCeJKsW34jTEDNa1rVcAv61n",
  "key43": "h7P7zH6bKHHMvFvrJUtNh7tEQ9b58pw2RRSuUee7BLMUM1HY1cJb2TdAEY9sjvU5Unyktuy1ENJx8AMtuBmMaoW"
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
