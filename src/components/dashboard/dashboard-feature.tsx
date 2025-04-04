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
    "3eG6kFxj6oVDyGgZikjikXMEMUmxxwSy7RL6s3Rqhz2qsyG6EgNgcyLWxPYsuwJvPnHrkvpDkc85P6F1udXc194g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Earr1UN1Fcunwb57Q1UoDnMk6DkFFNt1a3wS7Jt6ShboAJ3vWH8nXiDsZUKHRx8U4HLX3s92uChVrNWGgauwcA2",
  "key1": "5ursYgsVkuuepozspNLtSsDswfRti6CDNAHzdL1YRaFz7PoDBRCPJHsRxSDsjm9Vc5Bh1nBtFCz5RjA3wzsQCsxq",
  "key2": "3p8UyW284fKSYjC9zdT1XsjV3mser6ZPkSCn2ek6eNN8oMRRxMjVnEqsNLSqvyFtjQAvbY9eaJvVMqwRosp545iN",
  "key3": "2JwJem6sX34WvURxpr29MoKtDuDKFA29N3GxrqCLGrHyL3yR2ZsCaQjETqeb61s5MY9xkKCJ1zCvtsu9Zb1dv1CY",
  "key4": "5oUvmcwYoLybsEdJAV4jWXGVgdb8YAUudMD5sWqr27Wse81GfcHjfnLyiASJu5LjB9FC2tNLfSenFjzXWU2zPvkP",
  "key5": "2GQRPfdx4mtDTy29fPfwy3eXziHXBYTeKEQ9Euf6PKKmfv9W3FUhnDR8oH9AHUqDZn2MUWcXvNecVA9nEqjMVcBQ",
  "key6": "36NnGzgQPf5pVfMSHqd9d2hLsmifZoHrtDUPpYGZiQi9rycev8i2hkJmS7khG4hKwC4ra3PN41LwKPCkYcJ4DkQU",
  "key7": "5M6pqptQneBW4s7e8qdxuKmty7TYy3hCQHcT3un2T81Zgyz5aNPkk8Xf3DpFcQoPdD1X4HLFcxnbfCES4YA9gAqc",
  "key8": "66W1MSo8RDJyVeA4GE8vvwsHLpdUKaZHx4LHt9BPhLPbQ12ZdKuT1dL2PqsU4WV1JAg4TiqXmiiTxgNcLDLxtTvT",
  "key9": "3fbciojaCJLEN6RgUZkQqPBjEDpTgdQVhrzNuWnaCUR1rWUQ6PxjFoegqu8oeWN1oUgxJHrcDgKJaZWvCbmdURdQ",
  "key10": "2EpwGDe7xhxYgfmtLfDsTzAeWK5gmmQvkhqAdZABHKPoGdoS5JZF4wy4qbtnnVUTByHLNDENYYQkBg3xSYzULZN7",
  "key11": "3FiNsvjdAupZGNK8icbJTNA4QBwadmNkee3JJMJ1NrpSpv8g3V2QKbp8aqLK9jrnkyG9EbX7BjCjyBuYfHRZby83",
  "key12": "3LAjcnw81oR7KcGFZdm7gfSWehokBKaQynDdszoYRq1rXatESAW2pdb2YTANAsA8hNV6g1tADCcxpENh6VBSxNmz",
  "key13": "vdu83PYFBEaK11P8wqdEgXqusDWBHpmoUcZfUyqEUd1fi3pzwmjK65RntJL83Y33tqL5sDbr69ZSgpAeuqR3p7z",
  "key14": "3xCExBcajShZirphThqBuQ958BzzjhEHP9626tA85MEfBkHXioGY85RVeXKkVYa4uzhgHu8zY4S3vdCWEidJvQrj",
  "key15": "UiDnUaWrv82ZWjN59diouT3J4RYgbZQqVdbZD8EYZPU5HsSPKzzWWKVPEZceMeDiceCJXgDG87K6wTTMAPgzxpP",
  "key16": "4rQp18ZLG4JFF6zHRkuPQMKRUdPfxfh2Xio3ksSMaAN5pMfdgHGTuHJ7pF1JBdB51xDaS6wHJaq4j9qkwy2TFGHq",
  "key17": "38Tyi7KguFnJZ8ZinBoV3PaTizBB5c87ax92jgF3m6n7bZDXJdUMHW2fhbZnZeU9h4A8RAzXWKJnQCPjF5KEW621",
  "key18": "FMTxocJuaGg7yZK54n9Dj3GqLS2DzvoiQQX5a89bhyFjiPEDFTV3gP1tz5jdnx8wZa75LWRC5GHMmoviH7pmLiL",
  "key19": "d9w7tExY3ENY1hkhmVgzc7T67qFPyjG13rSkiNsaFxxW3g6nxhvifQPqwRoG4CoHdmE5ELGMKrXnwuw9k1SKqD5",
  "key20": "PNAV2eo8ERxmT57XJEBPV3Emf2xqyrTm8AKt6o6h9UbHv23WBekvqR8GnZDVSZ9PA4twSDHmakZR2kPbPy25B8g",
  "key21": "2QM3GGMYywcqzK6cBvbdEHMgtQ2zYzmeoZyjGVuJhonDP9QbBNBeXpdHcWBqyuw9Nrw1SLaXpmwoDW85ZbDiNfiE",
  "key22": "2gC2QPRb16dMg8ffXcavmMxKYktepsY8YKwUGXNWQmusp3YCKk2i4TEiLev2ZEw5MjDW2obj59NnK8jwcCZezUMt",
  "key23": "2CSxZMzdbgZAuB3PjEVyt5qdDBcf5KWKcbWRAxYougretd1cusmaLtFXpQGqWTntsDLwFZf6ToBsYmPfm2ED1NQU",
  "key24": "4s5SQd3aTyoVsfqVsjSmFUQLa6xKTN6qGqV6CNiUGfk7os9dzWPAAV8B9yX787jYUnf26tkTyhdCeNbRoGA4HorY",
  "key25": "wbej8RJXADnaEBvFbtkLdCNbDMQcpxF3xhSoEACQtvyFfrorQvctgyMY49tANUD2sqhTbkwGhcGcSoQsy5MzEJV",
  "key26": "4tsVatTbemadCefaMLUXdtTaDidUW2DWtmeUTU7xw6WKptrfBpyMPUZX1bEb3PzBHq7az45KM6vY2oUjWmR2kXMR",
  "key27": "4hTj8s4UV6ohT5uD96Xvr9Qs8xgbaXwRQtKHUFUitWtvAkDhcCYvU3NZETKd7bu8kG915k3KTqSb9bXTTpgVJWdo",
  "key28": "2B6YodKgrLK9D7GVGmrMbubRjC5aBwqY7LD8rWioXaaAhoPW2UwWWAwfb9p6QZASrshUaT8LFfXiDQtEwNCMh3ni",
  "key29": "3Sks1HWhBhrQ5tcpepojsAAwVrTnwX1EhuxLWwbBxGd6icbTNWKd73q4eL1uY5pXWVHC9ncSUDQ5K6ojiKmZWYjV",
  "key30": "27Y4Di12QdQ6qtsfp6AXJtsX5szsn9JMhzpsxC1cwP5oHAU1zk9KebCYG1bDYZiN25u651equfRAVvNnyGzjBYU2",
  "key31": "5gmHSHK7zmPpP8ihhfM6smGkH2Qb1DFUPr5Ur8uL9FV7hFZyDpMUqNEdeVN3tUMh2M7GwnqBNQEv6hNueFsytPNC",
  "key32": "3mizgE95nWZw3YutxQgnF1wbaHMVKujrT1N2rCymrGcAf2d53LmM8YCcNnQ55GisvBUiVwd1oaSpb4b19SsSrkad",
  "key33": "2pGrRA6JsoFV6t5r1TtmpxsXTesWhTjCn7TPTNmXNyGFbGxEWJaRWbM8Lh9ru6PWiTFJKYb1KwZQzhxE6pKVeohc",
  "key34": "rzit3H1XP1vWHwtPZ2M29yvVWgiLrH47LPFo88YToUozufmzowQCxrF2iXKn2Cf8aRw932qqPZjiXn5ypVUf3d2"
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
