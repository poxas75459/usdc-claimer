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
    "31hgfUrAW96w2nAHAZWVzN6nFwRCom6TShjtbmHFpXQRy9yUYLqUgRn5ucXYYuYHgHQjNmS8eZEhYiB8jp573WCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492N7KP5ffJpcs5E2r7L92UFXx5mJAgVJBeMTB6627rRaxRGRihN8q71zGzLh69JtUfmJ28ieCuCP4oufhNwvS8R",
  "key1": "2y8FnX9xx11wEGvs1kyBJnrn2hPbSFfu4zotJVXCvUHYJatrVaSozGqt1M9yF1fGpUEL21c5VB5iwSq5qd5JeHuJ",
  "key2": "2QYwPGf3yE4YkryxEZ64MB9UJrQvyA1tmjtbfUXhaRUcsP12u4L5hdqQimnoNhahv9b6oJfGHiwdVLNti2hKyAgJ",
  "key3": "njz3kuGJ8NXxEGzYdQvTe9RpDqQyHcLiHvYFch9sps3ZjNvDRATuykQvU5F4RXbJhZkAwHoQxify7bLNuzSzGV1",
  "key4": "4xakfwKdAzy5a4CGubwwM4sr7Krd1F4CnErqoQ81XEHxz7LVnJ4K4dqgbXScwGhyvF4qL9PqPrNyWYVL5ZueZbcR",
  "key5": "LXnjpqacvGxjekAd6vbR7tNzNj8n9o1osHoouSnAZ1wHWm3QEY8V4bJno3qNRXrEgF8Bcn5PXMTz8pLSdP4WDzU",
  "key6": "2xmZZ8uAKSfqodaFJp9GsuG88yv1zXUwwqhSiNevWqnAYL2f2SKkuygPQn7to62QUy2MYF3vQ4YdcehYwCVnnYer",
  "key7": "4ivuRVWZTqUKe13BV3kcYchDgx7cPB23F1jSyD3YxopJka4R2D5PiXgZBDR3Lz3zuZeYjVz19iiU9Sz3XBdSrPZ1",
  "key8": "5toNRvoDNVrARx1wuyU7kbhRAUpewcoVJqDVnMRJ85aD9jfc1J8tDdK8d6kUGSiBmwrapmaVSxBTp5X1vHp2WceW",
  "key9": "eB9wjPCJ719AVUKj2GW5z8yFferpmvXx1uLrhffLD8BnS2gMSaG8YSeiEiw6rhvzJriFvzrP6yi3KyHtK57ZGtG",
  "key10": "4aU98pRLQYELefwRADe4oUjek68vZvNF4C4YNXVQNxd13d4QM3MFyLpv19DSKbrq8ckoTEE422oiNHddS9Ejkztd",
  "key11": "Xohn1LSKwmdYa7qfEGsmaAjzgFyHqZKmmai5FT4YG2cEWS3J2j2YJRypomkZBje8DeChm9YHevvGBHrM3q7Mp5H",
  "key12": "2ymhpWDvNeKHJ4XVLHGumUnUv7e7FpTuupYqnt1HY2WPZjCVRQgd5ySkB5gURAc8VM9gxiqgexukQ9XPGefsFAbc",
  "key13": "5psoREbff5QALkmwuTgYtEDqmdnSMdtNvG37ewCBRxgaQfuZbiMRkgN37SPJvsCvFt5KF47R43geTfmjBG1Xhd5c",
  "key14": "5fHyZyh8qASCS8MXwLT6TMvs7tCF7NGo1TSTvUsQ5Tw2AdSDw3j5nwNtPonGwWYWdHn1pRfMmLFzPwAdzytTeUiS",
  "key15": "4jJiuwAh6Jj3gztqGk8FPnfa6FCtsEwJU2p2QRUNgkSupPyJww7nLzZkNwGrT7sAiLFtAbk66dSSsYJ1Gh6x2MdZ",
  "key16": "3dtZHGnADypQRiU1sdxzJZUq9a8SzE5cLii8NavANEa74shJMXE7vdG7Ag6rQuoF3qeCt9HHCpP8TJuPMcK84sjG",
  "key17": "3XyTyT2wKyUKEigLtnMS1WhF36qEXsuqsPznJjUPtSwoe5ZRxgKvS9u9wzkU9MqsNVevXtuUAvoXMta4yeHW4qp6",
  "key18": "2TpnKJmfneYEhTKS93c2tDFPHhpwZA41by1e1eNFLrjJh9NixXuyDECzdryutiYyAd1HXeiX5pCodk7YjaXwLGoH",
  "key19": "49Hi9EY4d5pFUrJ7QQPrjWgRPcKCN1mAFdadthP7abnNHnP1qGaa18aguPQXfJ38gELzFuX7hHrDvY736ZmCxdU8",
  "key20": "2f6pYMQ9P2EhQbY5ujbXm7HTwnUht9hgjXwZX8ELCmfVuGWCRENgSiRguX1zDCVE9ewmVFXnBFkmAbC79EwdHpbL",
  "key21": "mnBjrxFDBTYmTQmihKz3rdL2YCn3Jmyj7Mn6mbb287SBTUZzZkfACjJgaMcGSaskv8DcSfuBaJzkMu2ChYXEYHf",
  "key22": "4EEt7aAvbmQovYdrYDb7Q9sp1HZykPyyE1GYwe8fkje8w3CgsLaPWuh5pvXBB8a7oXLZPdCKNn8WiWyTSyLvdApQ",
  "key23": "4PBz2mCAquUTfs9Dx3BHuyBREaPYe1xJjHLE1tK1nvRjrhaPaVfZw7n4b2KVV4BiUUV6kMJMqgemw1xkvbuUwKX4",
  "key24": "EDX3Qh1NAKrDs6N2LQnAhBeWRDJQNNR7ifN4jvQ4tYhPLACrCEtPBoZZEkg1tQBDxKtrwmhB8vcjZoKNj5WutzF",
  "key25": "5f8GG5UrJhBVKawPjR6x5RoJwZ4Jkkjq9T377ivpJnR1WFZAVRiitPSDhecXwhAFDhEfvV1bBC3PVpZNMAJEt7w8",
  "key26": "4992croxwaxpbx5QEGdEB8DxzxK5dWfw75tHtxkmefzr3i136L83fhTF9smr53uSkqExX8iD37a8io6HroDr89YP",
  "key27": "S5RAXJZDMVipihF5jK7d7fJjQnh44YPpTBp3VFrxR9XE4nL7rFFd8GftqXtep45QaRnTyWC4JW7bSzuys3sVqDb",
  "key28": "22vy8aZUH8cCq93HumtB9Zvxg1TLLsgzUrFaK4GQDTKiseH7Qar7xh6wqdWsCrRWSReGMwAFSS6hJYXXsQuvS8f7",
  "key29": "4LMTuZvfGrfXQiDevCbdGEznvWU3LXykSpMPdoAxeKcnqD7HSPn1SRQ1LSQ2PoTrbpBXy65bRpeuok3zFkDVkCCR",
  "key30": "9dedWQovu6nQP2Dwtzym6Bxd2suiQakKBfTzeUhAMU2bGBQ6SaVu6iGWrAn32NpFKxVPYuuFpQrUiA8BPb9S2DF",
  "key31": "5JhPAwMuNJ3XKro19Xyzf6UXB9Dv83SHNTzGob9sQEjZvKvnJomJmYD3r9iLha3boNLxAUp4NmWR2ozcYXhhHB15",
  "key32": "4LQPqoU1LNnVFw256ULsAWYtoRTtejWFkTK7Z22X7gZ44HpYWre1mAuLDd1A2SBsXgzbECWW5oP8GbjRRMLvLMkd",
  "key33": "hCT6M6ShbYaws195mdm9WZPouQzt9gXSmN2RmtARLph4EzxixgpML8JFRb2bEKygajwKVnLcGCcxXGbXLmfmSR3",
  "key34": "3aHa2fWFbHoY4xToYiF6bdPXtyi2h6kN4WJjkdghDMXxUWCXuFpJQ4SPq62RGcHq4HPWnfWPH7HeGxWzjWJhNmUm",
  "key35": "4xq1azU8nngwQ1UBoo3x9HEqn1tmCCLkRrzw4Lodm78fa8aetiKQNqMzF3JkQ7dkokRmjycyBvRh1kW1Gnw9tqgc",
  "key36": "2cyGbJyMwBr7DVgKM56wan6WdQ1pdq4HhUec6Sq2PwL4ugbnFWfHJmWgs8cEmittWXpn1StHpfH7ydP6NTDLtjrT",
  "key37": "2L6qp6nFyTvcnzPoyPTUdySgag54pLzdj1CjTFiyQ8LanhvYGyL4DKTD5dygEPMEYW1RaX5NYB8d3L9Gx4qoPpvu",
  "key38": "3V1UAqmPLqDcL7dTTD1CYqDaWaeKVSCoeStdJD8FrPfbkG4ssdQAki87dUmgoDCd7JwY8H2fJQXW3jc6Dj4vXref",
  "key39": "5E97q1Wzbp8TKwY36B3e6twtK61s4pbVT9une2rCLXyRV2VumNv84SUZJjULBd11siMmZRTKJLwKEpNayTHqpWkc",
  "key40": "5tWBmyVBijBQu6Eu5Y1DxyyWnChge2Axg5rgsmWXfu15uH7KRHCXKWDbRTgqPAyJj3n2Un7PfbQCSPKw2Y9qHNFV",
  "key41": "aWwJPbSR8Swrt7zb5qeQvCubjxkdfKp3kpQdEdPTDgJB25D8NkZ7KybMVQTiongDnN1eW2yeWuTzKa9tXnC1rJr",
  "key42": "5MFnqfATBb1suAGZGzCTZ8HXV5p55Hm9ibFQWvVGr3MKn6vo3yWMSVTrxcMh6HbUksX68ZVDRPNorvLc8rvu3M9C",
  "key43": "4tT5uVtWAwiTFnsjuf4jJYy4mS1RdmjmjhMsjrFACjZSELU1fdEExkAMbD9xCZtGYf4UFpxaMex4HJeQn1HKZfyV",
  "key44": "3hjgZKhmVSbxfe2ih4UmvrZfQ3jbxpdwt7Xn9ogNCUVs1GKKut9AjydrSvn9F13vUWhXHFyuPy7MF4Jd8FmmyhTn",
  "key45": "3wJLJYxPoh3KaLcAAaszLLZNSQJkdBNhDgLYkVp55dr5TqCGy8M4EACFqAjcB3gsPijvt1PG6NhdCjjCjra7mLwr",
  "key46": "tXqnizUfMgNaMRurL8aFc87xpczYRydCgTeAqVD5XDbtZWKRWzwDfUXXQrDEomENXqCUkAir6Lm9aG9qcrRnHAX",
  "key47": "4DJxAJuNBCPw8b8FM9fBitzYdWLuQqqkS8xA5UFvJaF32qZxvGyeF8naFpKqyZ4kZDnEzbfHXBPRJasXmcgq8yq2"
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
