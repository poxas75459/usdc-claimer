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
    "3Ax9jWe42gxKnwcigt7GhEyU7KKMo1eGH46hqPf9vDGvjSeVA9y744CqPkomvcoxURQL7nKmLZFszbKaFe77h74z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yRSUaXDURmAmR96kyCsobbpYvUtFKbeUpQ24er7KdLezgsWqxrU2zBCAApNZiWAhgok3GQNCnySZHxb6xwxBDZH",
  "key1": "4UpqBmoEsPiJdD94xgkBJcyVEdWcyNG5MokZQkFDdivCAuZrX2CHmMQ8ZNJ35SmQJfgudMTwMrQnDsjGcDMzWB2F",
  "key2": "2LqjD25NkS2mwwN9u5ecdZ2ZWHoSZMQJZodHRQYNBgmGy7kp7XftGCkdoVS6JXd5ibBxx6bmJe4Ts1WfGoqczAhG",
  "key3": "5PC5uYumxVM8DrUTiDmLxTdxUGvhi3ftNFTVhkmRz4D3LcS95KjvwHjZjNZPQWmnNqWtp3xws6Qxq2yByBj2zYGY",
  "key4": "5wWGs2WymMYRCHe4XWAC7AyRc4KZ191QhKwg7TbZZC2e7mgH4FWdGcFpX3XPuygHALepdKe5qrxY9T5YE2Rmggu4",
  "key5": "275cLXmukkcgBxP2yKwNxVtXa8gUyMwtoP9dPCaiomEBd8Z6QYEJ8EAt8PXzw9G4nAVx1CrpB9HQwy58GGQz31MX",
  "key6": "pDkWQFdYxqjhUJgN2E3yNGpLdyHJYdxhFu1C73DHgQetKnCS1My4wyf7bvroprJeV2sLnKkqdV313WTzvSmrVrp",
  "key7": "3VRwVBt4GmD1qd3kNQ5Gc3WMEe9EqZhjyTxfJ1H2AtZoQim5BPrummV7pYcXGPTRfrm4vQmYb19hg7L7UqzTedPT",
  "key8": "5D1qPgHrJuEokFr1FzmWiScPBaUYA5cpUYhBZPE1dv6ErWQMuLxLyWb4j3PZJq9pqarfxjgsxon3Ni5f8SBHUy1J",
  "key9": "4coYq4St72NosffsesCBoV8S3t1McprA6UtysZybyFCT3pLZdkrNRWQW4jaq2gWi8yhMNuA3JcziJt3eQqUrbHZi",
  "key10": "2Q3SSSAUg23AvrhctPU684e98jrM3bQMaAFCecs9KHCp59dzfN41h3ndCFm5qSkGDKLZC8Rgyn1CU9hPvGSQav8W",
  "key11": "CwuD9Gj47gVu4dyBAXLsmvpgp4C6v78sopZZKG38wRMEbhbnSBFBeeV2HpEDSDoUjRKn1vpV6enF991G2uSvdTw",
  "key12": "2BJEz2aY1Y8G6tX4MgqEDY7qxi62BPWNfmgXs2fZu3iwevodtXpg1k3cRwJ6YuqJJEv8Lxfc1Dm51rx4UdF61ZJB",
  "key13": "5uswAxBdqRqa7f5EbEPbuemxPrBKu1RuoitjjYdyPyfyqYgMCzx87ghDakcaqDyh97ztkeHghGHUMjxu2DkYkk31",
  "key14": "4a58qQucY2NhU4UeYoUH1Fagu2k8V6TaHYQcFrA2KC63B9kNuEJAiUuJEXahMWaUW9tv9q4pvuNKfPaHyfegivGS",
  "key15": "2ggBFyqnRWFwxrWA7FGieyiJaKwwJPf9F9PUtqnH8n3si6Ef7eRfJu1ZyVAFnTmkQRSsPJX51zJKndd9avkJtxEX",
  "key16": "Wcni7BrFDp76BS2tiqFtp6SCZxb6ihCL87jLG71HpQQmFZHSswKSSXRVtA3L8XyVPryKE6SPpXSjVFr1G9kwNoo",
  "key17": "R4MPF9g9SkJwhfhXXvDufSRxUEpTbRnKFQTmpJNKLPzAC2YRmPJSJJLoM8AuD4NB3rHYiPciCq2zWskBWf1gJ4R",
  "key18": "iD6YWX3NqFGtKsvuQZ735s2pfytmnnLvjKhnLf91vJfE9NwYsEMm88mfCYQZw2YCSoug1JiKY8aBzzaNC1WJ7zw",
  "key19": "4HwsWGkK73hKFrPAkedJ1uAwVnUoZgUzWeh1jCJQmcYpAPLDoqzGdrWjSniuwptdK4KU4c4nURehC5bXwK6Hs8eq",
  "key20": "5GhwtvQ2sAdMXg7HphoSgedwHhZhn7Ge8v4vh39rfKsvchgoTw2kbv4HigoVwrqBmDJrkNkBkaB8R7dzF5jAfjm4",
  "key21": "49jf6L7ehWJ8W5PngQJ5csMhisNtD1mMS31tXQsbQRRCcGDnCuvLX9rzAZvRhGmMqF3kd3SE1fCNsnkwJeAp4HTo",
  "key22": "2NhQrXWQ2xuKRE9T5y4ApVQgNTToVRgUh1nPFb1SNx9c2KqBFeeRquniZkkMSEwG619HWWXx9ewPckTN2wToHTkv",
  "key23": "3nYL9ViqeQ7Cm2DdNUHKCk7K5gNqgZfbBwWnQ7joGyxBk4U71dtKvvQXNKiufRePLXunwgU6dTPk4Pro77DRPkap",
  "key24": "3NzxRzMKrrqP4jpdN2YR9zJNWNWUNPTj9BfbtixmuXJMeEHFhqijAUX9TYipPKBZVjucdZWdNfGE5qmu8Lbjf9AF",
  "key25": "2dLJgWJYKvC6CE8JrqAdyYdAUct16Pp1p5G97kc9SXtiaxk5ahMjmypGKmAyEaVRbDGxzRcdoNu5bBDniCHAJFLB",
  "key26": "pVsiR12MqUzFQZrdBteLu1ufkqXRGYZRTUwLNwAcLai75hMn6JZP4WjNmng48e4J3AXgKn8yiZom85dBGQec3FE",
  "key27": "2mqbUJ9fCXLXu9JtG8UojZLYbymw7fSbmuKc4ssVdQbkQuAceGZQpQMbQRZc2eWnjG4SoUDZYBkuWqWfwtRe5vBW",
  "key28": "2FtLWwE2HSPGYaFhVreGcqQSzFdiAGwLeZaVC145cLcdC5W4jhqoU4yCeTCf4mzL72c9PGM6KJw8QPUaHzAYQaYz",
  "key29": "3QN1GsgNyHfGVdTp4va65X8ogyn3mf7Rvkmg3T8LGVyJiy3JvGyfHmShLeuPikEZDxgWvHfeWEesjxVNL5b6ACjx"
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
