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
    "AafaZzF6uLvGBLkBtcEDbRrKkyauxWRFtNbVzb8Y8kiH5zzoH5E6yKgCPeiVX4KxniN7N18pyiMjFTTfvrX6Ltr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i178qDudFy2cAgQKNZkxc7o4J7mBX8fb8KkbnrfPtSMWQWVro3uT7M8AU2jMKCNjRCHbz3nKfJigyPg1hoRpDeN",
  "key1": "2LFGGn2qNnVuGiJiQAL3GXkZD3H9zTJNoWyhsLadm3Wi9iN2k7scjZEhWJCUWPH9SfTWrnKcYUSupMZE4bXHyNno",
  "key2": "3vzkn4SUbaHoZbkEeUaKBR4j32nFmXDdiWb7CjBtqGeraer2g2v6tXVgf2AnuFu6rpjR3558RnWmc9jJDdwiGeFZ",
  "key3": "27tBZ6SpwUvGEktD3bG3u6Ke9YNn4xxwTA2Muj7YgKkzuVWFcqMLsyyF6poh4c6dD2qReEV1Arb7YLoa6GRdadHv",
  "key4": "3igTu5DautbaJnDuiMYhEvurG5J25iNJmjwaghwPRVMo8xwzpko4JwqCkoJ6tPDL2kxtoU2YLv4pvPF6zPHHVe9F",
  "key5": "4xWABQMTCJVkAXiQJkKoMb8KU26pum6pTwmqnZ4CiRCsMkf9snuGAniJCdxzdqCEYiRk1Wcp3fpBGBho9DZyZBCz",
  "key6": "3hMgnZ7hLmcEAmeZSsotVQ3cMQLMqhxbHF7YMnrX6gESYt9NtMzG5eV5sXH7Y2iwdSPC5ZJf6Cb7gttQdzVZZuoJ",
  "key7": "5DXa5qu1Kwfkjrv7LLSy11fkRPrhzoX7nXgHPhoUQbwqusSemysXqTKoQM3eL9aJYzTSLho5md3jqwXManfTYDfp",
  "key8": "yMkhHssuBcfqFehLoXRRj77g5qG4iwKNtEQik9oiadth9UoV5b9WRQgjiSTtVZADAPZPueUsp6TdYmuSD4CXVH6",
  "key9": "22GGiVvVcXdfftAxKf65AKHbkVCP5pkJX3LVPTsN7vcbmoSqLUecafRT8atu2JJ4fZ2iQyHKoVzeZbmDbxrEV6Rh",
  "key10": "2gCv3biAXtTBeLUm1BGAR6LYDx8KC8F7Qzg4rkzAWfDk6hFaeoMWXJSk39sweusbQeagW15G3RqRi1Mws2jqbzfS",
  "key11": "3zsjPj6b2Rta48Jc4GgYoMcjoLQMnmQcnQuimJ8cmTbqfefQdzLaDwYq9RP4Pff62wXbU7SVzrgtoja1YX48VXtQ",
  "key12": "3CqQvh5c4anEPJwTxTLac9BCCScq1TShrJ4SyXbw5qfbU9s6iD4XpPVxc7LCjA9Ghvp1YDHTZt2dFuuNhZHHzEim",
  "key13": "HdaVpuHSpHy8iLncwMmouCtoeBeEN2nLc8FN36S2oZ3D35kcBwwg96Mzenjv69K3SYtEDHafFjLb71dUPrhAhob",
  "key14": "fpTFRNpkQUWN2TaTzbZoEdjqCN3uBTQNHnnts2qKygg5wPzyw8tpkmFPPVocFuJtXn9BZC6x4LvCBJ1kfAoeYHp",
  "key15": "4489Skan4HCrPNHeYAG8nCkfqvy1f8mswP2cQ7Kso9VMXcDEYds2kGPy8JwceqC4orLh1Utjs4CoubGgbnpfisfb",
  "key16": "4AQRSY4uF54LawFGMQcfFKREwwt8CKvswakWtyy3JpaCcsSSZ2FdgDZ9gWoUoyrrnZpNu5KLC6vSegL9pofLcyni",
  "key17": "65qJMAVHCJyUVoJkVXPUrMMUG53GZBHufRKkC3ieU3b3hVycj57uQs86MD22DHNFpMU7Fyt8JzyTsSYuUWC8yQLj",
  "key18": "NUUFP8u4HV8GNTb5whUCUet68mYFzXvkNZD7wbpihXTEywNCrxs83Kos44q6sRzqzzFKrNrJXiETa1N5RijVtrp",
  "key19": "4yNc9XDKaLMHctN6Q5u8VfdFaa1KgGfn4FRqNyQtEjQzEPfvLDvwti3M9pkEKKrwLQcwqyFXbiri6Y3Qec4X3VdF",
  "key20": "2WoGEC6BJhdeuV4LU1kkqh4NZzBuM73W5HJbj8TLMxmSVQLTqiPanxS3CzYLBpnMCF7c3t9UFGfFbegd9BQjudB9",
  "key21": "377viLePjxEHhB3JbRzpb7mfW7SzW5RMXKZV3eohkeAAzfLPL6zrWYsgR9XnxhF8hKnKQUiE9pFc6SEgNtPBADwd",
  "key22": "z4tbjENhr5yPD1EFPNL1B9i5wbNS9ZyzQjL8RqKbSYxJXCiZS1KXVojBDK4inTuvkvvZKT5bsZx6XGYreGseecA",
  "key23": "2foJ8pqFDx2wLZ7YWiygZUgGDe4MyqrgLQD853y1JPDeN48jVhz91Q5YSMrwgbx6HfKjeBwPAeRWk7KefssVRrJC",
  "key24": "wr1i63QEWXGt2yULpTSZPdq2AwzCPz7nfsnLYT4tCGDHxMzmhhZcveaREEfuePBuccbxEp6aWHzg4fMNvM6ZHt9",
  "key25": "2KqafLYbMaGjyn29ByqdFRraDFBXVkD3d3rW7hATqhfzft4wUCCLZnKZboodbPpLQRDyUKKWDQadSWKiNigxK17X",
  "key26": "4Q1tqmVyo3pFXM7WzbD5noXEVkxrCdnw8vxBMXwYX5Ahq9x3QFfv8LCNB8S8r6uZo27Ve4Xk11KRpx7VrqTjD2Ev",
  "key27": "5kajsRzUByBfFX3vEBPrUX7n8eSxs8hJuj8YfrnijZStbF6v84xTKDnKqy2AEJBvPywDVvYPbWYececsnFnAQqpn",
  "key28": "4L9q6pNM6o6tRNX5Kb5mLRvUhshPhqoketfJKsVxbVgJUQxbk7qCjGVM7yxPWMZrcjFNrniwanckuutokBoErDQc",
  "key29": "47BdjNyCEcQvu7AYUc9fHsbWkru8Dhd7gsj7eNSGLrfcvcMPH5Q17XioKSVPaDRQFkE9ZYgs8pJP3SqNWFP3GNPs",
  "key30": "5K9WwtgzYk2p5qMGEifv4h68rpiBXwTcVfGqV3qvhkbpz1gjG36bVx8b48cdNhcAURHZfrUwqyXrhdnyiQRb86Ce",
  "key31": "3s3gcbXB5jErRQXnTdwN2vi85GuQ1kDoF7iGcrn3zo6kaHNEjGD1BzaQNrsvuVdWJQagK4qd5zgwztm3Qe6dbhwj",
  "key32": "26tT9Nk8X2W56rn8cw8T54qbK3PriBnqok75PUbP4zFqdCEw2ZvXa39mkuspb1iHVDEAXXkYLuyHtM7MFKurEXPi",
  "key33": "4eDeC7xpLTh8BExuogzXjFrFZLABLx6EGEnbvVHoLF3LZGSWEsFcj9BRDQ8MbL3E27R1Sk1pgGW3CbUi3rpEbS4M",
  "key34": "5tudC1S6QjDAKzRzrPMshuxRMDbyK46vRdv4g62ADu3tiAF2wBaX2wXRcSwiQAjWaCg37W47vujgoGw13uKy4kcu",
  "key35": "5GHVkFYvMRSd3Y8mKEJPPe5ZaE538Uwee6xWEjm8DVCNhfVtjfegrSN7ktock2Z4nnYX841z9yLGZ8hHbr6UEFhQ",
  "key36": "3SbYddWD7Tdp3PJGnMaYZyocoEVaXT8Jpqw3HAxG2yPsYYPbnssdJkLSh13opc4JatuVfffwdqSZ8DYpDuLuumF7",
  "key37": "5haNAFgU6WrNZpafAg23rFW3SgjYYEE5qvMGZZFhrTXxcNyLjKtDiGnoeQEbmsuwP3yi8rhejq2oDEviBwWCjwZi",
  "key38": "5QJPDnvMfwaZZpRzHKPr8WW3iJuAwXvcjeRMG5gszCic2qCxA6ZhC9kbhrye2qkiJpRcPUoE93L47KTTfL5Rspq1",
  "key39": "sqtotEM3tC1QLHa9booFR7FAoiKe9gtELhmHZhGhtLax1KDPUfmV6NhmDRH4u4z2DfT8tejwLUKseHvF69QqqBk",
  "key40": "2ArdtN96cS6KVwJnLNKde5qLaxuzbhLYFT3X3M617phtnQ4fRG3PvrpYzm8hpDrtMwp1zGKENpFvhesX6Vifz3YE",
  "key41": "3PfG92Ybx3Lp5Tf7LfCQWaRkmFNzJXsy3hijQCTXPgniEZhUHKjMVh275qBfWqKad7UyHxziucnBJBAUZruV6UAy",
  "key42": "5ej76mRo1udXkPT6pAotMRcFyYpEvuSKGJ74cVNqYZdTCXWsuBoNf9mRUSi4e8n4UZwFGYPqFGHSrZLSJ4uxaZim",
  "key43": "2wqynF7KBqYSaeoR25ZWaFsF9os2SaiBxomhNAQtbcKg4rgkuKrqAWFAYQXuTbA3HLMKnosBbdrWp5gWZ8ABgb6p",
  "key44": "4wwL2S2LezrGG8ZXgTkjVry4a1XZoB7pwADHZonkP8u3CrYg2hUzEyrf3kwisdhy8Um2aAU15ycKTberPTSQXoyy",
  "key45": "4NZofZpRcmq4Gzpds6cCdtmPjbFuvzmBL1U8s47ETQLLVo4BJTNWoKrbqN7akwJU8MGXrC5eY5Ky7nBBNQfGTkKG",
  "key46": "2ZCxMYv3oZKCwnDQAZCfNRH6qJnAGQ236gMyuo7Mpc14AdnSQAbAKyRwFiPprM9Hgez47e3hqYDH4zMXoDR3RoHZ",
  "key47": "28Wv8v1RRccL22YbV3KhCE5xGDuHPD7SamWBkr1HGpLUvf7kCXCzuKfPtSMAu4hV5jN3BKgP4uaA7rnw5GnCCr2q",
  "key48": "3ziVxDHgiw9uCn2HDSxNbVHX499qBcBGe2aHCezSeWvEmHQFBa8wGXGgtzkhbCAPJU9nievZ5m2YxJJmUTPtAyX5"
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
