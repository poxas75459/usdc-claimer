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
    "4bsboDYZyeq9G8hV1JdJAw1Vz2HY4bFZWpemgXE3EgZjo2a76uXG4gVJJe9CdjNphRZnprQWxPbEJxV6nhbnUx4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n53zJLBz1qgmFecnw1c9byCDAxzGqq3Yh2udYHXfrqnBNuyZq3KVZovZniRJC7uZyjCHtHB2GTnpFVKheDFYGpg",
  "key1": "4crAWyERgagW1nDFJWR56KNzmrHw87oaWoLVjs3HZ3jhFYteH9JDvWQoL4L25kg1SCtg63jFSCY1x5C2v83QEFSe",
  "key2": "4jXKjWGB6hJEKucGPvXHrYR2JDYxoWyhbVVfatBLNTdMppvBrbJjHR2ng2LRBBT3Jr7BUrZooTfST76rwqAhagjV",
  "key3": "zVMKMBbvkJkdqRi8SmbQ6fvWHVNUka4PHp3jRPxGKpmsxxfVN9SBt64sH53QGNbG9AkTF5yWR7nQDaD9H4urQHW",
  "key4": "2byVYtiXikXwgwuwMBYPkKmdgHo6W54C68iqvbu4t1ugMPfCW2XdU9B9JU9CSbHvb4wyzoxrLkRrVjYGdvsYTMgs",
  "key5": "422nkd2kF4j1B77sdpXirEG2Wi2TPSE1dP6j1i4ucFqiaFhR7xaPDQirnCPLAvUWiVXkpgQz4fu5MSFQ63iCLzZB",
  "key6": "44aFG6fFW3QQMGk7Bhe3MnvHspeKF9NtzPLoicNXhSfvy4Qdejsq4vTYaiNnChhMPBnPaxUkhzrakhLmdUm7QLai",
  "key7": "BuovGcVvh15KnCrqscKmDsozGX4Xmta8aVMJBJjtdmEr9vAzgi261yTMP2RUPzby1T5xUE9GbFCPRe5N21HzzKy",
  "key8": "27LuUpH3Y6iiqWetFhGeXDQ56HtVsttYXdCKGWHEJFTxucdpE1LGf6rB1Xp6DvLTLAygdvgHtpEY6mh2J743Guaa",
  "key9": "3EEMsmQwogDMdsAoaMrEzaXLyNar5CumcNiSm4Pk5WATMCaRKzA7Ky1wbWSuvbporuP7tuGKb7XpWSC52Y7SjnNG",
  "key10": "5JjLsgQCqLe4r1t9g9KWpwZ8wURTWh8XULfmcy3tZHwqTQ3K9Yjvz6AYyKr9akRBeZsauGvCne4dmnsiE4FsoUVT",
  "key11": "5zroJrsKeKRA9VWEzrwGSkrR3ZRYe1khc6b34qokR8sXxtCqyRQ7psR2m3XLuJ9TXwVzbtVDVqhMiCwdRXJ7kGi3",
  "key12": "PZ6NQTgqbG3Edh1M291JE3qPHvDwdqqKjjEVDtm5bLQeCWxkZjYStMNk7vjUdnzjxeMEZCCr9DtxobCWg2VpqLo",
  "key13": "QhFsbweVHHTPnfpcN7kWQ12HGUBU9ftC5UmLr2nh98NDiVjAz4F7z1rZwKevEZCZkfCxd9eLW8Ld3rBopmV9oLQ",
  "key14": "3nM97XpLLzu9p33WEmoV9GuP3oigkKBptZtUR3TDxgQvdgGXGG1CJVVPCUX4BVrELwSF5zUaam5GftwjuLWPsQXr",
  "key15": "3tFck9ZBQkrcKDqGe7pqbMvuD4Qc3W7Lt2SpqMGMcba8qgimESYwjtorAwR9sLg1YuoXuWgqxV33qvpNWXoee7QH",
  "key16": "4Nwn2hg6k4nrUg42a17RGfv9mmYBD5rrieoYLJwyWBm2kFKZAP7ALSrVv2iTYG4nHANVrwUVFGm4Uz8yHS653DnG",
  "key17": "4HdA6jn4iQ8hUFU4JbxfQFTXki5WfvVYdQ8h89wEe863KyDMVV31wHhjhFCqvDwx6v93WpoUVyE6ipEeokjYC1cE",
  "key18": "4kvJi1Zf53sd4oxueW1DxpVcqCe5vEgz6PQKy4PoZ9fs5ad3hxJQaNNsMpuDPm8umKzQ8vEqxWbfbj842YbFw8oo",
  "key19": "2PdUksjiUfNd7LpAh1M2rpwAb5AdYRzBrP6Qu4Ly2oTdUTo2oStQF4SWWeusKW1FKuHCiGpAF6JtMW5KrUwCH8Hm",
  "key20": "3K9ujUo5vHH6VpcoZHauPSwsFhzzp4mo3NHsiF5Kuxchh8axwD9Z8rDyB6dDGZJihDGGw8nb2VhSggQd1ofNYjMt",
  "key21": "5PDVNYAosz4oH7FJyw2VzVc6pAPgfMTLkuoupp6AyhZqCpV8LYJmL5pAtsnEuAynRTH3SDUFCqMXm56RyMe5a4sn",
  "key22": "27G1JXDXTmhivc3vzS5cMG1wz2MdfFoBC758oX2GVHwtPeDpDp6GXjjh39QYkXuJFRuDc5xLuTVWkCZbfFXhcFnv",
  "key23": "4wzCYh7ZazH8LuveCYb4XHnBVcPhBHWUcVWPjhtZV3aRg7U7c7GhbMCfPF1pgH3e1FzGncg1TB18GwWMvgLn3Td8",
  "key24": "4qhXftwd6cKuNAXR9WvtTXYpVn9mMLkJJFHCBDaCj25gyfhvnqwgAvrewAkyDujLix4rMsY2z6R5y55JC54jozaL",
  "key25": "3TLy8LWPtNBNZFGTipvCdJpStYDjJoEkxeCyVS7qS3RV6Youzi13uZVyhZ9WXVx6MvdhPVcYGAxdhpQCZa4N8m7g",
  "key26": "5xsVBkKy6ws97iL5xGo9QyvAz2C8tJtgwFc8v6Mii5pbYH5rQzfaUNFzZqFzCpCkx94R5Cb7MHec7Y2YCU5ePq2V",
  "key27": "5MvKuxroV15wo86WeG3Mria9kdjvwsrPpVxCbtbo6Rv2GsTMcpTwF1LaeVu6uaPfrVdVr13vkKEKaAWkKgwAWKRh",
  "key28": "5bN51JtumvLBZc5GYVjjA36PBBbXkZMv8iLfsK5CrDQhr2tGQtdGbkuaJvVMpgEfBaUS68rcpa5CNUnk8e2mA9ca",
  "key29": "3Gnbh9EvzmyT8gadiDtKPKoCrnGCjQsdPupZXbUTVJe4mZvWqur8G1VFR9bG11DnJrRm1h7Rd7jU2zLVvAspoaTH",
  "key30": "2obod5nPLDtiw7GBzprMpxFShzq7CKs3prNcwogpCftSVp3rGJtYFrsL4hrr5cHZNzrV3j3aW7Q7QJKvTccy6Ani",
  "key31": "4fJjQnrdwekX2yL76e2nB1aPuw3Hcwa7ZGsCzoLakzAkSfACZBCZL2TXbqgS1ifT88Jy9cKxLFYuuUeudVYTtMuz",
  "key32": "3axjdtM4rooKvHRXcazH1jj28TE3rZNimHN49UGPUtrsGLpMiNxhFt2uchVYEQmJHxpHwCgUxa7fiDvEeumpjUF",
  "key33": "ZpHuTtENwWPZejVZdfaAPyMpF8GNVPZzJjDwpsddQ56TkRdZE2wJfQuGFeKyQpBEQLimWufmhpPBWCNX3dJNaT3",
  "key34": "qfwW8kqYYskXhw7wkRWx2JyRhdDkmd6ZJCoTbQ9fKbbtFMZksvEWVjATB9a2VEuW7EnSaof4TDJc22p9LqZzzKc",
  "key35": "4U3ydjGx7mS8TE5ypDh69scSaumWGoWTqSaKdJPU7ngY3gWB6GoijBSP4w1obsXAA2hX28hE5wYn9DWSWGQgDA5b",
  "key36": "4RoNzrctmbbeXsLKJ7sYZSafwg1c3zoh3Ah3CzsooKBsqBGyCBG3kZn5k3nqop57sQrTyCJ14SXXYqkRKLUzeBzk",
  "key37": "5qbx5YRozkVVBhxWH1eTuQdP4JHv4sQWY2M8EzgFWWCPikku51o13fT6FGAQQHX41ggRn8ZkaUwdBUaa7NAaJ86g",
  "key38": "5V85kmm2tFwwpDo1UN3a2WduJEC2amNskYe5R5U2FuiDD5YdqZnAGTrFue7fqx1cXTLMd6k2HGR4MG7nRFemqvW8",
  "key39": "3FEMCvBBi5cE9HVZBUaPzNsupvF4KMGVY9sEPzkK9hsGQhxA8juDJMLWR47tDEwM2QerZYeAWouFbW4KGoPuDmxC",
  "key40": "sPPsbQRgg9kA2zN7qirxfmMxKP1qSjXqzK6LzcBuc9GPuVXJW9Bu5GZ5QdANXk1oWe8a7icMrxhGDVrhk4bVyP8",
  "key41": "4EGXFWej8a8MjDqU4pt7s2tcXjxnTUcVGLhfuGYpt5Ku5ocjocdRuNZovRKipX2wZtRnA3fYa5gN2UJzW1pni3Zs",
  "key42": "YZETmmb79dQMSQ24g6X5bYZBce6Ky256ZzAeeax3PyLKWkbeaRG7oBZi61LLxtXb624eYTvcETqhPmh9kC97ZnE",
  "key43": "2zc6onkaY1oZiaDNw1xRkEDRppMcj29t6x1XpkchEzZqEPuuKLffLLkfEUqW5X1j5FYuguoTKnde57Kv6Xg5MjFP",
  "key44": "1gSANuXCjwx3bE9XRQyrx9Hy1phNnd1W1XCc8BwieoQEVjaGMCLAb58WxtmeB9FeFRmPAgQbVQzLhwz2Fc4d3B6",
  "key45": "36AVLfD93dUEoNdcJN9FUCXdJzGmW9x8cFGKwe6Kx9xHdeizG2UjQmWttTW7CUcPHwGgenqtzyN6o1rT8nsvGtKp",
  "key46": "2FHXTXWCstsb1apjLsqLKsbod6G4tzBQh3W3kPz9LCeYTcEATYSQrWd7HxtrNhhGHPg75C92VxmUK2qeWxccANYA",
  "key47": "267nuFnhtUbJwp9UxVofNJKjfDZw1q8892Tb1ToJVUq8UYTqeKY8mbDQWCyY6pLqYZQzdVqUSUyp8hYKSqCjbUEF",
  "key48": "3XRxmUDvEbNDY68uGQ6cKK42kKSp91gzwKji2VzZ5iRm1gobrPAk9KvJaU9HaLiGG8TyA27XbLAgCyDuEBxB6Ffz"
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
