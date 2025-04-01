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
    "3NukZKUXSJoTie5xeKcwBRqPfhzRL3qfez6nZaYbkxyuG1YA35nMcBoDb5wfEMoocFNkcX7tuqf9p5eMWN2BiLFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YLncs99Tj9wYHoW9mNwJtE4RQwAbcdLEEyNRMQE5fQC5ijaiN1RLUn4cQngmAT93Px9eawY35JVzD6SR77pYNZF",
  "key1": "4BadVxJaNjjqY1xjkh5x1BmF9sVu9g1YboW6ftH1fEB8FusCWkeewDbSK7jWv1HVezDbLnv9WqSGhYYK35ErHmJQ",
  "key2": "33QyPtuRj6yYGEn4wLtqWF5sm4tBD35zSKhXWiwbmTqG5bQVmqDAbxhTRfkU7SGvHSnpQYD7269N1qTKYYhd9FiQ",
  "key3": "5DAwNnko52BaSZxWaMxReEocx8NEEgx2erVgJZ62zWBG2b6eU2C58gsxQ4bJDwe4WBiNGk2YMiDrKUcCcfeo1Wmx",
  "key4": "3baMErBsYektp5AhXowQYaDDL5cyUeFFd8iYqjvSdbHXfXUyg9ZrYwrnEF7xqw52T1qgqrp93mhuxnQn1vF14z9M",
  "key5": "2ptmaQGTCHQAj7WQ968upS2jpzeW4BSB5C2grHtuwMbvAwQE5HGxqjn3M966BrVboLVra6XswMAUZtrGqJVHfaJ4",
  "key6": "3YAaR6Myk1RqQymWStVx3uUVYAQF6LpGDcxYA3T3iRFov28eRaNUnKvAX5vfCLiM99cmh53c2auC3fbAjmBBpues",
  "key7": "4XvEFpQJdmSqKocvdFLC4wcaQZ7uCNtwUMrdLob4q5des59omE4ndBiPxjaPV6XGUgpRZEinbUgtCmsR7kn3kRUf",
  "key8": "4dVox626ksnzX4R7bTZKFUQenonT46hwsGJr6M9D49drSkSvTfpHPM3yEwzdAaD1qonbSbfFzVmsAn3c9uikPj5K",
  "key9": "5uvE7Rej5NQ1ZM6RDMdSETdvrcnhxnUS5nwbeTNeHeLVgwF4PU98MEHZrueizfbBq76pAiG4pES6KT8DkDNg22p",
  "key10": "2MniUcgQ6Ddt3kSanZcsEYsuDT64mfGr8mWJfg7vkPyUcgp9eMEuv618xUQGgnyEbsh3GBx9rbeBw94o7r8ucnzp",
  "key11": "2K5BJQwWJZfJ2Gajcphsk81Zt9yPUDZtaHgJLvwRZwKh7XG4531z7B4WDy1PmE4ugZVR95HrwfARAsBfJ726qhjS",
  "key12": "4eQduhHrZnkMsizJ318fsYKgK7XWuhsRv8a17feNhFXQ6A5KPPhdJ2bAWuBTrP4eyLGRHDXmBinNYqdn64oRDK5i",
  "key13": "5zCxcq5wbJUdZd16BGXU6YQhy96XzvaCJntKf9YwnKazhtQsRMBCyadVMn4uW7KU6EgcHedyKxdf3WqQSTwGTZhU",
  "key14": "cV8tC7Y5PH6fJAtQH8ymm1fcyNbtkXadjhbPkV8bLDECfG3N3HtiRgBVUs4Pm8J6UvxixqktKfTCKqNkvSf5ySg",
  "key15": "ZBj8u65mVz1kVYpRAUFr1Eyhkt8K7LFggNPC8LMbXspgrEGpMTRseXhzug8DVMsmBo6J9EUPCrGKNPK25Scg1YZ",
  "key16": "2jdrdJ5suodFRZRqx9y44Tgza7mmUxHYLfFzkCY9BHZdeaYfxYGczsNUj12F4HX77UZh8K7ac84Tm7AeEL3iC7sH",
  "key17": "4GZifB6JziHAGewTFyAKf1ziC6FpHJRvfxWvm7D2w3AcKdJyn3xDu1z3Uy559nCzMRVRAnkqBhPv5RKFEpRfYLXC",
  "key18": "5iFQgP6fje2p2op2mG9yG1UMXPUnUVaCJHzDVCVNtW7ZYoRa1ppYRZ9UNJihQ5apueCJPK9Zgz7PGtsxVnMDn93q",
  "key19": "u5Y1yDi9CcJmwuQAEenz1wkdWhtdNdeaYoSuPNXbhaWD6LHa71c2sLah8VyNSSAUQkC2wTUeGtfxSC25nvn4ySK",
  "key20": "5wvGJkPt4V9XYwBRVPN2J4ie5XyqaCkXuQ4Pv5YLToLkmqFf3gpaPgRnxkpCCwHiD5GDkgsWiRwSYvbnti3A3GVj",
  "key21": "2ZhmYWyi9P1QYTdhBESFvWT2jLhoncmXWNmCwhtnCrRhtFEy1VqU4jfVPfJo6GvtcnbJQK3PEeVtpAR3HWiBHhTC",
  "key22": "3VZg6XqexwGBfbZrE4ZGUKYyctac6b4GPFnMY3XffGjXeingi6egn8bsRFNMPCBkAnN1F7iTrCrcYma9exjiGAcF",
  "key23": "52wbkQdFDS92DAx3ENAJCdtwpAhzB4BD3DHvYbAfqvXKc48cTUWpcZqMKfWTxZL558QvPm5Wzn8qJw6KxWGo5YtE",
  "key24": "55xgopCbAcTWYb5wjPK9ToGnViqobSBz3is6XWT1Y89YEoeXioRGvRSSumprQqxQmCwLiCwKVBhruRT5oSqo1ueZ",
  "key25": "37qCBxvSJbxb5Tcmxnkj8RNZArgb5Txy7sTSDDSxieJaNyggbRK7nzZcinB27iMCdUpvkhwqtdEpuRtU9fWe69Ui",
  "key26": "3FGx5r2vS7ptFRdsZp3CjnEvV31ensDvb8X3hMtBPk4vmx4fTDeSXeSrsPHwkYh8cFTnf4mNP5zVTDn7SDzHGgNJ",
  "key27": "2GVaSVDBxNcAUJwrDYVphWTE9mDHsXhvyqQZxpXLQYsd5JXDmHBwhEd8Y1Gibfg295v4Y9TZ83tX3d6Y2aMRtzAW",
  "key28": "2GAPenGy2A4wvzeNn4kkV6qigfmHG5xeuWTFvrma2aMPUHy4oLuWN7HpEEHwenuqeSi1V2JWrUjLYrcetT4gWdD1",
  "key29": "22DSCT3tcdKVTems1nnsUyKqXQNsE37z1hJzXhc7i1GpdHeyfsFu8K55x1fk8CuwCGduDEStR6mTxqDqEHAXHS1w",
  "key30": "2FooLsq6FJkDE14gxx5iYZcFTmFtdbL9UaAqyxzTMevBeNPzWrrCzWEnCTQsbiwu8iXsRwSB1QXhnEMeu9aiUCAU",
  "key31": "ZFv8y97o4Ph5ixUXEuaomZxU69sD9vcNx1EPFsv1xsZU56bDsyn19NnP4CTDSjt1Q28pvgHVeVAK8u7B3jt4BJs",
  "key32": "4Lz7frLGAxkhnHGVnEsqF9U2JP6NACXvrqjg3nNsu9qgTa133ZC9NgpZLX8CbqAFYGsRzG5twDMU5CsFYfLuEsGW",
  "key33": "2JikfzEaz1aKQ4DNBVxFuf2m5TmycS6XuzX7k8H5ZwBUkfMqAm9yUKCzPuw1gYh6kvt8d2MSQFo6DTSJD6TwbtHf",
  "key34": "5mLAfnDVUVNNBVUko598KCjHH7ZXeLGreHnKXHL7ohXvC8heRgp1tLFgDmCH98a4xN1VYUTNeteDLoioTUk7pLaz",
  "key35": "3XhYvAY8D7azdecyQVmNKYZbLWeGZJHMyMqWQxD3ChCrKs7shEnr17h1u3heXZfGfpPVyAQEhB98UKsRU6EBWw2M",
  "key36": "5q4BpSaKTfVwVNF7rMjTcRvbLb6PfinHKgj3k82j87iPoNJxqNq2Zkr573R4m4JdoAK9XxJrYPBNokronyALBUWY",
  "key37": "2a4GjxFMZxDS1dLmVSataYqm4zEt4tNqxHkTcG7JyzEyokPis6r2DmJAXBXeehncvTrtNYVLnSuWYnyXxkURUTys",
  "key38": "4iQB9xnGQXGrK9iVo45DQgaBZffLzCv96zVecT6HKcuoWzxRvCBKcpWNyNjMvSWrv3Q8u4PoXM9xtPNrdqxZfnxt",
  "key39": "3EnuqaDidVLfiL8Af5JGUiqNL5jfkmBZyjYXqbZBZt6Rw8XuGsUvYNGfgTzLja2rR9zQB3cgZme2bsqTkYk3ougw",
  "key40": "cSFa5t4pH1bwPDzANQ2qKA2CezJvS9hhocRjoUy1Vte3Xb5MTugTQ5igZz3BTuqMF6nmHMYc7Za6RiKPedxZ5Ry",
  "key41": "4LUAVGvY1gGoXaFXAnPV6mYoyYTN8Mr44vQXxQDshGQ2rDJk4zr3KTk9Qk2HDxoyJEYuSd92B81rq1rxcfRT9SvF"
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
