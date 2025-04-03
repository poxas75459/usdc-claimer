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
    "56jHXCekYKjpx39FHwmvYqGxYVWc96HDq1xx8SM2Lo3wthqthdGBLPviKjeRy1tVgUWj3cxkDLuLimAx4TwYJBrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hEUGjbBr2TeVsf7teZiCV64LxRqFe9PqafuFtSu1aEgQTas5MwyNnxGZMG1GKvMRiuw2RorFKRGVnHavsugmLN",
  "key1": "36PfR9S55VNLyPUaxfwtpSRc9cYHbnsSNCDZkFoQtraoi7qXNNmxZbHWBeH7NqK9hm5gj9Jrz4fHaLqfdbJEytdx",
  "key2": "646KdDpvNz92nPXyy63ygSj7op48EqmXepDzEEj7NYbgeHemsfo59dPmC6Kgctxu6sutcg58e6bZay4wkRuncxHY",
  "key3": "2fpCC6qpSvhx8KKacDdJLALDwmJQ6j1L5uY2f7aX8LuidVm6AMxpcS8JsMoQaYLh8dQFsJtz5HFN1JyQEtKrvecM",
  "key4": "35Mwu3CzxYGhHocxAsdXvoNoVJnok8p3z5PLuZYGBwtutzpJx228UfmwG7L6RBbi65yiUrbC9J9J9uBkyjVi67xd",
  "key5": "3uYiKgvrUbAbz4e6T2WwQmVWyU237PjpfHLUTAxgGvyiii5eQwacVp9SwgpaUXYLTY2kp2T7NrisbZnMqi5BHZ5B",
  "key6": "32vhKf1wQaMySPt6dcwjmqpnWxXbmpnybfsC3qyohvY7epm2Q6FCAdnX2tPEuFiqN1Hr9tg9JwqxFV9B2DknG5fQ",
  "key7": "5rYTk6wnNyddiRiDVi4DLxrddsXamBuh78pG7meHzPMYES3MdVF1zWhZcvnQXjRrMx3bMcFDfaUNUBycd32GetV3",
  "key8": "3xTRmbHky7MGvRASsnX1rXjWW8hSJuMbbYwL7zhWLi9ghdxya9YWGpcDWGQEgtoMw91XXF8GLn6GYP4GMihfWq2d",
  "key9": "3bm8zgb5Ej47XeYH3TPwxUbmfeRS4zA2CbDEroHXdpdypjBqUqmAYkvD7P7LG2z2dcXDr9Hb9yAEmKrdDgMefFqY",
  "key10": "4ib8G7JP5hMxibeyzNp6u2nYTxBuRKF3Knzhcd7VjuWMCxE7hdPs8MSXcVMezvZa9gMUMTW5uuLpz5LAs877rC6h",
  "key11": "4iHyABj9TexkBzZ82V4hygeH7gG6Sz92PFwPkwcd9DKF6vnMeGcdpi8dZSP8k3gnBQ228jQH9VSyPSUrWEWYAjHm",
  "key12": "23hiqa61f2nbRZkLWLoBTkrLrkNNPbFU5wSnwLXZJWXHK7Ary3znK8xxnpLyNCmdb3hiDFBgihv9HNPi3koFSWqt",
  "key13": "3Fx6dnTLBD2pY9Pxfe85jKNfpv5HYzypcaJKf8p2BhvXVsZatdJZMJxFgRbaD5QGHmf48XPufdfzzcfb1QyEFagk",
  "key14": "RKdahqD4MmA3qD2x5vuotvD7YeL6GR1imSJAFhrGZ6KZskyQK2gwWCPKLrRkvCTaFKP8poufCtW6maUP6YhBCHe",
  "key15": "4hM9pEenv6vfmJaHLNQStMC528mL1ZPHTfBtuZiiwVBGgJxFc9rU3hTARmVdDHo7EY8bSuc7TkTU7Q9nNFLyo6Cw",
  "key16": "4ZHz6nsUqhXsywXVFfvguLXkzw9APUquabV9smUzb43EzumxJtkEoYAGPfPAjNk1Cc5nkDkKMq67P5QjEQDs1P8F",
  "key17": "hynLn3ksBMApDVoy5n9M95dRaqqXRUeW1EJFjZxJjeGtAJxHB9xacLefyiJsCxA2CDX3ucWo376REgtYqH8H7gd",
  "key18": "3KHuGCS4ZpgUQfg28QCuEfDZeYaDTP1EUP3ne35F8cN1QCMivAfSZWuZKTuL9tPG23irN16sZBSpBerFUAhUL3Y",
  "key19": "3NLiRGHLvFBJMQi8bEinNdL5TDFDJCudQ8X8WE61EemFum2awn4fgxzHpvycwhbXffYR4uBBPfTp4peQPqrosYKQ",
  "key20": "4eN4rgfkCzwGmmj8RK4mZXzuLjSC6NUScR2zuyT4h5UubNw2z8Ce2yU1iHG93PVcc4zXhc1UwD2F2biX8uWzRa4t",
  "key21": "1i5SR3EiN1U3YHXmoFGxeyrfEXVp5gCpkMMd8EeXumZ5qVvKuo1hphxPk9qfnfhqhjGkbknPqU5AoRQUN3Qx7YR",
  "key22": "3rs9zdLFw4geuW2yi15EhCDofUcQSyai2jJugtW61D4XCB7nYoe3RjQpfaQfELhsW2g21whduxfEvhJt1YfwRcHY",
  "key23": "4pqBVrfWbCwifPDMC4e2ogYFEea8fo9BqJgYe2xUY1XWidn9a9REoVMYXVvEm3ZsaHMVkeXGYEMitQquykobp1BR",
  "key24": "44LBFQpePtMteKfnKCg561zG1iScWLYBHoJLhKALKXXBMjcatj48qGn4juvhLqL7f9QB9xBSwvbEPczBh9QowAZN",
  "key25": "mJHGUTswJCcFPTZVq2njNvTEYppstFgXi4J5tCdsBihWUAXD1MYMT6d4SyAuBYSAwS6gc6DYDVohZ87DKAySxGE",
  "key26": "4TMr8TXfe4uDzjeRt7NZYfJSo1p5To2nL6RmqZ5xyg9iQ3JWZCQt7juJft8Aj1bpCr38tdyXHEkhEivctXHsuDBf",
  "key27": "4Y7oP98dM1FQWFrDxpDbcmTLXDgAfX7qHSAP6BNmzesJ4iKCb92moymB6Us9wDHAr9HQn4otBKsXMJH5zzQ3Tb72",
  "key28": "2Y3aDHYWHQ5Bz6NYyitRHGgASVQ2sEgtNnXNyEzLi3m2bEKDgRsMGwF4k71LEiNCUHh3qT4wzPjT3G1BV8HfahYd",
  "key29": "5dhYGvUygwjW5HRLsgR95iTU8LA3Pa3rAad6W2eG9wqsPZhcBPP953tRxbpn9CEMKtqKp8N7kaqk6jU1zxvhJ8yW",
  "key30": "5azuxvZbHLh9SUzCVAuauj1RgBb4pRAwt32usF7yqCRh5A6ssmoTrakjZGH9KPUkq6gqWviij2JvjDFEHLmyo2Q",
  "key31": "47QTT7SxvFq4Baf5eRTDxUY4P93xY6hKxvX9QKtGcKoEFknH3VZn1FpieQujcmasNn4LGem4WcTT4Q2mRA5zqGL6",
  "key32": "AbCJoVpavSXm8QDC6FN4aJzJn9yjbRwaAjNEBHpQkkzMPCRaQZqb6rpeGy8JHYaQBhWwYZ6d2D697cX4YFrrWkQ",
  "key33": "5FqtYsd39rNmKR6wjaZeZPZ3woXmURQBYPBAxXVzQ43PB4PXfassef7JAyQUor2JkKp6Xv9iYeL3w9XT96w5frSU",
  "key34": "3UewLQwjBqw82u5zs1BiCEVjkF5Y89eJYWndNENE2tfcAEEy4it7j7Htj9rwE8B2gxmrhiH4NuxPJnqC1Wbe6EVr",
  "key35": "5pVAYtZJBBs8PJNDuB1GP6PcVC6fZMbExicy1DErTm4FwcKr4HxseK11p5ADinfVuwxV8jP1EKuHEsHdwpCGJZy5",
  "key36": "4QFrbsEKpDWxnm85vYvQDn7qrR6YWb1tsP4pamEyQGfi5Qe3gnckQZeXNVSVuFejKANgXEXTwmjJ8dea3eP27ei8",
  "key37": "4p9NQxybGtwJZUbJDCRqTnC8hqRFVHzet1ZK77Uvhcy1aFAif1mGfHX1i1rW1tvSavfGbimXKi5KUeJngiDdBgXe",
  "key38": "RqNZo2wjvsumnSEVz92UBU2ShTSYniRuSgv9XJVd2sTfa7vrHHpSaX2iNA4BtrRAxJ83Z6fPBzwyf6VyXJVVkD7",
  "key39": "41pL8peNnotpYf8gCVzCGHoTM4JSFQtH8u22UmotaBFFXYCZ5A4mfixi93reDEjo7GbFr1QrBbhFrQysfKDCG6s2",
  "key40": "5dxPmrBs6Pu9bR2idfti5GEpsDk1ouXsNg3dADGVnnPXEhUfD23wstgi2FV7tFik3Nds3sGAFoMc5nwwHy7gWxdt",
  "key41": "gaACsaNr2romRWAXkY4DwuvnhC7CayUHqksmm79ZYqnqgEaBu4SreWvo4FTP6bGZVTsKoRnVoKbBkmFurYRfG6j",
  "key42": "3n1CbUDbEwFw7rTVTVK3wbMzK1SjGqQB6uAwPSmYhCvhKoD7uMxoWbV1beTPpvH3FHdRnMv54um5JdMzD1gDZKVj",
  "key43": "5N8TNo2PUyfoZEue5C5oeaixAz8z4owM32cV2kDkYsWz29evS541wWQigeYgUPYHEQHiKuHti8YgCaFFfpGm77u1",
  "key44": "28WnjS4hqE4YajerzeH9oQTM52EPmbfQ4MZLydqvw4za9GNBH9zD25uWUP5413YPMCZwJ9LdKuCSeyZW3RSySYvh"
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
