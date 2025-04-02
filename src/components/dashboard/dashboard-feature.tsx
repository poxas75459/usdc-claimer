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
    "2U6NAMmBckguW9kFMT8kV9gC3DvXEMnToz885LG6SeGNVaCkeUY5Z2QUmd7pyfnr1BcBASTKB7q4T8mdMq3cSBWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24EgVwGDWtSKAmYkZ5VtuxgMeUhhJZs2nLPRLQGdcCcvBKPKM2VXP5bLgqbavzeh8Aj9TNbm7PxfNf2DNh3og2FP",
  "key1": "5UwKsLeddf3RnJgzjv3pfsGxModf1gcdygbhB3HNZnfoj9ZJkd13uWkdNi147raVrQSZ9Y6dXZwdahAPXLezsLcG",
  "key2": "5qNhKP81C1oaEddXjcZP3ofMtHyrHjVMtwQ9PoBYeJfDZUnMxqn89G6exCpxNJksQYksctRVkHNePPau6SyvESqF",
  "key3": "55j63B9i8Ce377Hb1zrsoVP4XjtgyfUHxArNqQEa7ZuaBhoQngUf2FNoRQSpdd4DvCpFD8an8o14jQbKm1G54XXp",
  "key4": "4DzZ5zghScQq4L37YW6oD1dwU8jLDgAqdGHY6vSL9NR64maN6NdNZBp6fyNPJcjkiXgCFjiE14FPDCVL8Ni5wpeU",
  "key5": "2uarWmhSSkQTqLLgUvusCT55a4SS5yTAyhLcBhVq3ef1zseFMtRdzf2SBvAMYHCbHWjUDNn7qnUhvexk9mGS8R6i",
  "key6": "eTGcgG2QuTF2Vm6hEKTyWAY9xX9qpnehNFXDWiRNV8GAsj5W9c7zyiBHe24DHQquyemsuoM9efKABrjwCdBYTKu",
  "key7": "drGLMQ5n2WHTuy35yJ8YkyS9D1iDLCa2xxhjAKDm21Ps2PczpMdscHPdbn1GuhXGReBh7Xhg1FEcJKiR6RLYPVz",
  "key8": "3PNvjf1xYhQNj56A55X9zqTERNZgytGg5vJgesAqibG6jq3e7qEG5Lm2RBnYb3kWYC33uL29Tprj8aExWQVh6wz9",
  "key9": "4YuHXgH5ts5wue9MDw1JS6HdjQ51RD2zLxpFurM18nYf9uPSkGFnEpBpVfv12FXc8ipSeiYrz1wV8dT4aVJfbNEh",
  "key10": "5UPbVVSZxrUgJfgFUvKMHHCk4GHCeV91Ro5emXS2i1oeephTkE1uVbNrMnt6qp7dmu9JgPa3jBB285PDf8ybvNj7",
  "key11": "5iQA7FgBXFDpBey65BMCGP5eeFLRHgcpGSbQB6v7WuVHUDa6uBQ712wqucd2C1MHmg1aWbH1u2aR36JK5BfxUJuS",
  "key12": "49A5ZjfokeyacNzCuYKa5uKKmj4iuiKDCWYoAEj6LDzw1CYwUtKMgeXARunjNcrdETL5KarTq4PoFMUUJWCcYb7a",
  "key13": "3ghZpiKY71UDyBAC5VPZFVThphwWmtdzSbf2zocDgN8mER7Myic7rfcc86bJt2rvsj4q9AFwoyRGx5ihZXxutbqf",
  "key14": "2CkyXgfWGaCcd4TJbGbefkvxEtAnAMZzt6aS3R1gYpRdp6o3bJxGrVEGTkUwXhChKnhVXWMrYZPRjXDanuiv86yN",
  "key15": "5Ysu3AaJjTf7eWj5TFMWhVf1hJFKYuQWYtXZd1w1aYtymV7JWuAJUA6NW7j8TnPGzUZiGZyNqDjvMfasqahP7PGw",
  "key16": "59MeNmjRUz6Rm73CGQZCVEBnxYFX33Wi5Vk8hXtCfd4LHEDcnohP3dZzBAGDvwYjvo41VfAsztEEx1v63L8teZZw",
  "key17": "5D2dwsn6HXri3hScvbnx9rSJYdXwGEEx3QLjHfWvo4PBRp3iAThsVxZkBP1Rsn4SePkbzx6CSPWDaUtWHawZt58d",
  "key18": "4s4MYZoMj8kBbAwzSxUFeiutmZDQQBMZArjqj2bxvLj6A4pKVrp9azcnqov363sE7ogAQKbHNDNFP92DWQGGbVfa",
  "key19": "GiXecyJhQqyRYVLrmKgvrZ6W8ATrPYoXJddh43zdpjZdsHWcXkDbkzAs53SiP84YhxcwcjyrKGWz5SEsrWNA6Q4",
  "key20": "5PGnszhC8HA95k8ahis8uKmjJ8osDCbJSGP1KagnL6Rjvp517qdPUgmVE7qsC1fi1SgYxHviGzhYDvenZxwtwoZM",
  "key21": "2Jk77PfNGjrBbhi3MECfUeBTC8FXkfwKiHkXsJvTUjX7jDnB7Q1zUHmEDw3gSp9vLWP5WPsNYDuUHkWbMZRG3RcR",
  "key22": "55UX2PioQpHy7dSuy8XopertJhjJSJVMGyvimCnMzw46Kx5pAVbBSZ19GhPMQjs7xGgzWFoKs61z2uJC6ax5AD8m",
  "key23": "LzXGzGxrJwSU1AWHcVEfTzeRabksnhPFRiouX4WRbGjTXSgtRfmaHDKFiqFsvcvM4SvncucMy9KxVB8zfh73pwK",
  "key24": "27x676jWvY8uFsCW9h27vbvxBFzqY7PR4uP4a7GhcDcg9UtJto14ox7Ba9kre4GgMs78R9R4G9fo9ocRD8wja65S",
  "key25": "3FgXRMnBRnrDa1XQ9LkKi6viMWENpWRMftDJrmUywbdmiC4vwzAsL1A3nQ5jjnXafK7ABroJ5jg5CqDJHmYLJ1dn",
  "key26": "2Go1eYfBNxxkqdinQ4CCrHTzjvq2PbbCwbvHQMCNyPbtid66RDRuXPWtZ1QVnQKZbxCd9112gtHyKpv9LzGoc63z",
  "key27": "3Vd4ZG91pzppYMhdnWTqyWbgMqHytnSQurzSN4FaiyBHf8Z7mUDd3tqAFyTh6AHocrjf6uEGPET5ZyW3kpDjwY7P",
  "key28": "4PADvisATkovQu1Wt6drid79xtq4H7J1DDppPaS7ocd7Hd6ng67tbXC7GW7KChsczrzMJ6doPJjpzsoCSAcg1VuX",
  "key29": "36Lstii81Cv5mqqvBqsQaPjpHu82iFHdmYkuezCpcCrRv1VeNN3PGu1zBoCgMseckwRzJ4Ff1UqbeDTuqBcjhb2f",
  "key30": "95bjhy39hH7JGLKwfNW1m8xeZLxeyz8m8w5huakYr82Jg3WnX8f6h72Yuno89yjCFsU2a32SMbpQp9bm3PyrVwD",
  "key31": "65ioMG4KAk6wAH6Ub26K5vF2RdErk45U5QLjUxo6yAdtELg5p8Rhq8KioTAzTmJPiGMxwYiWUhxEVAYsAjPSBXUs",
  "key32": "5z69V3PvSqbyCXXsUYFZ9j64dKeoWFU2QGfnpa7VetnEeZq4vNsGqyLKTWN1hragetJNz6GsNRMJZ4sNADDoY8sP",
  "key33": "456L3tAaniTd2vgARFovvY66v4cFXuj8Py13tTv3e3u8x1weP68C9L986goaVrhLKgC3eGEykLRCxAhPEtQfnYQn",
  "key34": "2Xn1SfNtDAoCg69RDuL2SLWmoD2HRRe6hvCtBEwUc8Qo4Xr3x9jksk4HAggtRNUCbDscLkgqwdeDkKrkv7w9GnUr",
  "key35": "3xQRgRrXyVBnZjoCAG1GqHz4ww4AnJfHRvJxbPW4LwDZHy9FB9T9zkRhH7gemT1SKtSZpQsBf21cMBzgp5ZftYMw",
  "key36": "Yx9sXkwVcejVLahJNsZDhAVU5bHyXoP5fZ1a7yQau9zRW9QtCH6o9Sk52PvMhWXPNym7AAketzvw8ts6EzZcpd5",
  "key37": "4bWiVfgVSFjn7VA8UxWGcthYcBJ8Ln9yAHsCtd7zJD6MLQkk5UwvcPydTgrCQUf4KUwFuYH5aHQeNkVV4fzR448P",
  "key38": "5tQzRSwpu1ZxDGoBTLwWTVhzQmzWpC86zgY6BXGEvCx3mS2CgyycFT1JB1e17s6H6V5cH5f5yDFoqAdMAt5u4tce",
  "key39": "2QsozM8rSRx5JAb1obhy7rG8xYtuvsB3MhevSxjbm7T3rapn3BA75wfEjDxzZ5dWVWvy9gHyyc2hb11eSZLPPfNS",
  "key40": "3tWAgWvTSHAcp3Uj3kveXmNpJvpKQZ8YhR3u711Lmim3UzEVGdM6nzrm8Gd49ka5hJiskMPsKi6u68xuiYnQnvvR",
  "key41": "47kgnzr4nWeBVXdvzfzRhAmA9ykgfG7Skh7xZK3tSDt5AgJA7xsLtMNVdyS7Jb8PEESBZw67zck4yeGDY5gTKfFx",
  "key42": "5Ewj4Bcufvbvs6ZpchACHxETwAL8Z2aJCGDifdgs8Joj5MbCuNSGZPnREFFhPHAfVafhsV17Ju7Q1qR7i7z34EJR",
  "key43": "RNBRCbhLuQLWcoZEpQQKbqaHTWXVFcpUmuGeLAjRwBaPc5sk7Ey5N6QJZWKer2xNcqEnh93Rc2RSbVZDQn92ZaQ"
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
