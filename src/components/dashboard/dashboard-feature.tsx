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
    "5S3bfsLusJVqA5nvzytoMo2oxbATk8VcATHZpat6w1QUnP7gqqWGoZyFxKcQNJ6th62JAyiQuddXAe4xCeSg6Y4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25opmfA5DHkBmsCu1EZciH8oQhpmASKp9DmFVwcBn5xtjjauy48LhWwaCLt7UrhmFAB5iUSoGLYo9QSoEuDNschQ",
  "key1": "4LsRgTAH1uyUwCSXVpMLmwkkxVzTBidZr8yjedrcbFiLsjdYPKFW1QA3jNhDphfvkWiAGpGLoHW1BbCj235N8QAR",
  "key2": "qRsCMzinCpkLfUWgEAfUuHvSkjNmQfMWdNSLp1Qmw8bBYWJces6ZH4DqSWPxHsLMG9CaWSTpkg8NBncoZ934Rbs",
  "key3": "2p19zrEFhbu2bggxDLhjJgwh3Jy1F1NAN61YRobH47hNoGd1qtVG6W3ri3iDxipM7ZSQbuzv1wJE4AMFepzRkPmM",
  "key4": "2ZQfwMUZ6BVR5WJqJGcFQds2bica4UcwaLswVT3Ug8y64CTHNp9XXmXfB3eL6CaSA7TMQPzcoLrr7pcaCtjDjcHm",
  "key5": "665xq61DeiwcfaYvEFcgxy5fzAktJJ2KRsgiCZu96XrzhRfm7c4bMLqFu9seYd5UFxW9V1u1F1iELPoGUaTZcacq",
  "key6": "4kvJqPKnHWjCDhSca9Tdf8qehNnf9s9S6J9qYSNjg5hUAZZHvY3N1szFdj5RqWwM6MKkrLRyRipShFWMkgwigGJ",
  "key7": "LZxmnkzfDk99cmcJJDQN83cyQwoqCU3TM9RZoSiqLKapwLd4CuTwB1j52zmLXERpL9dpEmQy4CQ1GqqyKCdj92V",
  "key8": "bWLnxWQKfktkFsHRyu2SN4XtFpz2radBbs9FEZz3Ay3UZnpK5o2tPW87fhkQjonDmYAEtUqzGgyjstqHaRNmyYh",
  "key9": "WcJADBJxc6XmQ5mdJZvJ1sUsEKrHrvk97vaAPfsVT98Y5KvtRTaJiEANkRdAf6qgDKdXdLP113qDsP9bkVAq6qS",
  "key10": "5ZwWeWcMAbLGVi6bVqXkNEknPMsEPGdXY2mSZGZNZb6jLELGjTcMY1H1BJDNr93He2W4Znq6sKDjzMq9jr9pqeNF",
  "key11": "36QGNbLxn5Qyo2Z5SnGwRkZPxf3j4JUsAuw2qgBDuA2R6mnZARdrQVCgpWv3gNdwQeVJytUCzM31jWnDeajuX2td",
  "key12": "5rk19SMkpBFEA5HZ1hSqscNWbhf8j32cF4hVF2S2HjtrhoC71W2mw3RTr8ogHZtMZYguGXKu4HuEqFJdcwiK5pMG",
  "key13": "9DsteNmvhvrcGRMTZyRYLJz2bRQVqnyen7Px5wEsraQCcANdTcJKL2dh7XfsTwjtf6DNaiPaaHHYqNsCDGKZskz",
  "key14": "2QjpZkzUkiqg8idJEXUtYTtU4AXM2vvsJNxm1roX72nqPVrgdgoya7eBkc8cFmLRsKMXHzCQvEqi9iyfKqUB2PiW",
  "key15": "3tjSRsNMnUMXo1CrhaAsf3HQqB9MxMX3meNjtcpKLqyvEiUoXe9rTXC7KkZeVpj7zEHWm9aqbeSD6P2MYmwXZMsG",
  "key16": "2d5BHzA36f9e6FfTNM9o9XpMMULWcyX6y5vWGEfDegEHptAyjsNdXrZ4mjR6o2QR3B7GKK95WvtWoBWA41WLGJ37",
  "key17": "3wddzFR8TzioPvGYxCQBmGpBG4zS5Eoh1b8KrRiTUZrmteofhJtieKm7ga5FwSjX5ZEaQ6swDP9FE3D33fmTpEsq",
  "key18": "3e88zzWGfMCXPYgNMkjFCH6N2MwJHfmsnYAQc1BNPgrJBkd7Lq8woB7bLCKGzWwwAs5kSgAz6AWyWm2WsgNtJ645",
  "key19": "3fFmyjagujHcD77UaUzc35iKucW41E5eVS1HvxDsPZgS5E29KA52kbEwVtDnC6gcPAt9s7B3QVbUCbtJTw5xYRo6",
  "key20": "jKXi6AfzCaymxkPq2mpzGnBZT7RuWexJHK3Enp7ywt9iWR5nRPEL569ybMRZdqXCzWUq5uu3vbTyC1JbwEvBxo3",
  "key21": "4d1ZjwCyrfwk5SdrfiX9FWZJMQKCmEyXXK5dNAvvdfmPupb7Vu7YAVY1VnGX1s6NvafkhZGarZKex6Dg78UJ5E8q",
  "key22": "zyAS6Gup92tepgUACwinqfwc58c4aXm2rfwNNo78zPg3eZdVgSUbtgixQBRHEaCGSg2qg3cGYrMBCXKTXYLMAuX",
  "key23": "5Y5KbWbRR6eCTTv2iDNdrbGNPEPnLPterFCLRvyYGXwKyK3TZnxDchA1WDd3u2Qi4rgU8dv8MEHxULZozSRkqeMY",
  "key24": "2U8CfX9Pfkbxo6kG6B1nmLtVdup779EYxEU5LqmEZ9gLGqru1oR8gHaCp1p9eETYncYwSuouPC9kBJGhUB1wiKek",
  "key25": "huTXoLy141NnacVK7jU1SGhJR7Jm328yz7zWVjXD1PTQvZt4WZYX7D3X3xTPhuaeuQXtZWhPhDUxXimASj1uzM2",
  "key26": "5DexoGN59gWayUeKmJC9rZAedAioP3YfPEZwbLs4M7LP1pxXC1ph2Afrzz3s7ukvqfPdh4pU25uATDyLfCuJgmNE",
  "key27": "5gYXHtaw1vahSfYHgRpcvQAfC4GKX5cgDkLddUEWKrzkTCSEivqZhdU8v2mSqGNPJ4iborjRaMWNZYiAtXnqbV3s",
  "key28": "5Z51uLmpjxybbbpofjMVL5CNQgpoYrGgDfajQrj1PcUzukTAi7jSVhfVJPdQTJpQDiarAJvq45Q8RmqdD112SoAG",
  "key29": "3UwHJdojtfVTExoSMMUo4YmzZn6JQnhNC5FJhe1aYNzjhs3MJWRXBnraTRpz9pSpT5DCpovbks67asMtbMkBXFM2",
  "key30": "3M6Ea69BGr2nmL3yisuPAjD9ywJfmYSRTks7xLv2kN64RnHxtbDA6D9EWQZSWUVE8kZ9ydEBGwFL1m7gpukN2qEw",
  "key31": "2LwEUDbNsxzJrdifvmY3SLPqhW9ZNyNfco9x6QoycpMrV1VfuZP7UmvL2PV4JXtUsDkanhQNoPq64BkHzPpLgQEb",
  "key32": "3RR3zxcMt9aLBCLMLCmD1QTocbzoXFehwK9yCvsNvK1JapuDgHSrZFFMeKG4Kc1oa6uAq77BqbDbvEDoSJa38Vo4"
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
