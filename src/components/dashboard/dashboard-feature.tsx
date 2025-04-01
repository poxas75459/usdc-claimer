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
    "TiqMFs5EHoqZMKQxu5W6cPCCRmZYjpgAHeP1bZ1xXLyGLkUwmdZn4Umb3Q8XkypLY6gdm1sj9YAMWzeyMyKK4ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQF62HZTLo65Z5s5bkbeCMaCiRd1Lx9JPpTcNZWBru5iRkFdDGmmygg4Ljq5jdn4d4ixczk1gBoiGoM7TdcnnBs",
  "key1": "2asXRNeUYGQZxyQfsjxCdXgvPnXhUkzaxMA6Hw5tGN2FBSDtkJUw4yE8tFsvmkrYZ8oB4qXbaeHr7pnv7ujbaT2Q",
  "key2": "32ao7aoDCkwwQuPKR7cxJyqWUcfk77paQEHMN428Lai88pU1ycNYE6mr794LfzAGQCWr15HNTeAsuez6az84HT7z",
  "key3": "3Qy2ejsPTjdNQteWVs4t9CSUg3YjcCKMBVXF3LAbWkCJvsXncKYPNFdmQUToVjFVjRVdvWB1V7yfzrTuugUh2EtR",
  "key4": "24pRFJW3eCUzEEj94Qjs34wqhnEJNzac1b6NawCAFYffgcFNGrYy5BgzWY8v8WDqLB5qXD1r1xxtEE3wgJXyBN1q",
  "key5": "26pCEhot3sjPs9CXRPBX2gJ7AyzwHJxPr9ZQSSrL6Rf2nbzorKavR92EmTj7yTUct9Swqagmfjpey8VvGsFqoNRz",
  "key6": "3J52dZPXmNM6R2anHSwo8dK5Yowms3oGjKmC3UF4YvURrsgSAuxeAP7titexJSZs3X1TSNEhSCB26gv3JbPbbdjx",
  "key7": "4MgcEzH5xqzuNd9SQ2xV8CWbSTzsrcqewqpo1tMSz3qGuoMqa4J7Yr1D1wJ6uBJuerQo8hygNSza7mnU2AkCQJ4t",
  "key8": "oEXd4on7Q88P7qW5oCLcZMYUs3xVhH8UAiahJWdR3QsfQfj7ZcUj6T2h1u3cctzAeTfzpaNYgHEVU3R3MPU6kfS",
  "key9": "32wF48JRtfwYu5bCWQFSn4pg23EVtvPz9aB1HF16Du8SvBTd54yJGSUzgV9bQZcRry8URapu3NPXYBtmsFhE9qKo",
  "key10": "bbLVcZapbtEt56bJTgNpraBzFE5FEUpr6G3KNs3Xvc48dm8CD5pEo1o73v8Cg6WwQCabJZ6eN2Zet5ZTV4J4E4o",
  "key11": "3VwJgz5ZeJTQcbEd5e6FkWt3xBGT8gAqW9TQbsLp9iWbVBTncwd2QQYUoMeQDfSgMrNMScoAkeYvCu9XFj57TEbL",
  "key12": "4ii6bAsETmsx6agq5LsXrqQcbn5jw2Eiuyhx8WFJTqg4Q6HGRkqM38t8Xi36eqPNgbv7jy3QVHzR4f869v63XW2Z",
  "key13": "5F5SP54pDEbcLyykwkgrWfM6eumnaNZHqFVANgDAbbZ5iz8zeSUvhxABFhoRaC7sK8gWC8nC7iWXQ85rN7kiGzfv",
  "key14": "3q6hetwEp37yT52ZDun8bJWh6Wgrz67jqREWvFhkSQ3QMCeNf29F34VNnYJmckdEpXBZH9VVef14uKkrDsCDWBuR",
  "key15": "4u8Cf2sEgymRqytFHBBxVSquhks2LD5SNatiDYKSFeR5ZZxdxEP9ZYBSEG1gLtMHCUv2TKN2tNE4cbcC1s1dZA4a",
  "key16": "3zQ7X4YoJ2jiFfuhPm5obZ2TwRZjKkur1PfhmTw8zn86E8q8qLQ9vk8MdHKaS1z8NVs3mRszzaZDQeYWWdpQ8uWV",
  "key17": "2H4TN2bap4UpYRu7yRJZrjeBUMASPq6nJuu6Z5Ku2aPHJW3mqX7YFQy5cEksJASrwB6iT3kV9rKwdRDsofMDCNW3",
  "key18": "2hxGjoKFJBzAV5eWYrw7Agoi491KcJtcBCoM9CDGD746BEXveoDj1dhoi99H5bHQkhpr6b3w6bWcCo3QSodjjE1R",
  "key19": "3yRB4mxf1wucxQnzkFQvRzz6aacZf3rG7bvu6UMdRKcupDoiMfByF98SHdnG4CCedW2yDF7FCXFvTrFwAUxNWboN",
  "key20": "mtzF4NkeELmVcDcpXFL7DQGB83DftgmMYRNxj3nekExLuWpynemWjZse5uJLVcSwsgbiYUWZtLuNokSmMNYFdn4",
  "key21": "b7f2aBMwFprmMENUAXDkAGDtf9YRYLVx9koGLpJTMaLHxUKHD699Xsjs5YY6STejSoAZq4TcXtKqmBAk4r3XPQN",
  "key22": "5UJrk2y9aU4cWJ1wTCWRJeFYJrYhNRkJHvcyriumVQGXFqc2KjDks8Xfd8kfGiuykr84zu2shuopcY2qVj1NhRq7",
  "key23": "5xYBrgeWveK3ut1gUWxsB2s1ogx6AmVKju6RfAsd6Je6TusMZjRAx53wxY7ZTbCheDY71gxYdfjEgnScivvVBLav",
  "key24": "2hys8TNN6YiC3tXQQmoTmVGZ6J47bM9gqhAN3rzxbdqmSPwTEboy38StjWYMSHL4rpH2DkRTDencqMvEGkLcBQpo",
  "key25": "5uALvgWNfCXDsuo1f5oCrUr3xuTfpFEA1WxYq4PHv82y2NatDzLvatj2CFRzSG8mreCRJeVpbG76xXAJcEtLawaT",
  "key26": "3xtEifh94hVnB8jNRAc9XqxKiiaanQie2guCbvPtBF8d7f6cojN3guVEQAAnwo785QAnxx5rFHZXzXaBzkHEGQTz",
  "key27": "663gfny6VWYoJHpzMbpD3CyaC6vDR2mDbTDwFa8pK5nZVeBWnoTks4Pecoqdbx3Y8YohfR2rzEYHH8jy756u7seZ",
  "key28": "4Hv1hCWpCPG6XLhKL5ZLPdPDav2ewEKjzQFA3dqkkNf87TQ5pk1KE7LhdNo1qh7wBuZU2wZBrJ9EJcnRBbzMpG9h",
  "key29": "5LHxzkgEtCbPahdXAd9MJnHViTuCdVpk3vDgMothZEseCnkDMfgmh4absWAKSwFS9LtDJNzjaEWzcgjhmixA2aHZ",
  "key30": "4zuaMBrseTb2pKJZdzcaTrj9sWcuDbui94GJNcbUyUsuLsjGSkEEtq3c9FfymA7gPzWBVCorfUTADD3QEPycmbHk",
  "key31": "5zhWi7VSimXQRAB2f2vN1g3Ab9MSxqzAR8b1B3JebB3ZPE8MqKKazVUzgDPnbJEXAVA4EN5C2cH4gRbYJe1Vw75j",
  "key32": "A5gkDMmsn1V162rXae6sEs6pS33ac3spZpcU7NsoCUwjGZFNxMiQyEsC1KSVaFzBhzdTD7ER38pwS8XxhBJ2a9S",
  "key33": "67VJne7J9J18wwCsXe9wkkAwUFcorsZNvmr39hsty5eXm1AVU8KD784swAUMHsUKX1sdvmKxcBb4D5ePErm6P8MZ",
  "key34": "55mn8PZ3dbxdCUGuJVZZ2zFQq997HeprAeW2CPSQLMe4ZzPT2YfeomfjYbwHUe6p53VfvYikn4Y8ovYoQMAQyWFf",
  "key35": "5QMJTgeanFy7Spt5DXojp1smkm6Qeob8VeVXCwCspW8xGtUrVyZehG9phQU7RvisRJsppRbxdsNgQqMhNsLZoF8k",
  "key36": "b6Rb91Pn56inWfVjrNMwnYCQ36R3vHqTSqUgZirDktzhNPw69RaCBRpQfeQmAe5D24B6gXmAe4B158eywnbYpbf",
  "key37": "2RyTMZzp6dZfJ57Xs8mGtYrsME37pP98enos6dZvosCvm9v6rKaHJCJnvmdqFaxEfjtTHSizjwfg7r3HypFToqyn",
  "key38": "5Rqhm2M5XvsWaZRLsWkpn7pn4deqqu3cGR5YvJrJo7B7CagnWBCdNoJdZEdB52XQm92xa9utKSNzgyZEhgTQkWQj",
  "key39": "27Vnmx8o5DhMenk68nosEVV2zwceKN7Lba5LJj9ZXgXYKnp7d5Ybc6mtHeoCBa86pWmDeEZ4w7ofwQky1EPxijfW",
  "key40": "gVpw7R1G4o5GLEjjvrgCibjYLUGDvnJee5X5MH84aknNZtt5JZU41WYNBmd4LW8nJfxEozYVXWspbv9f7AyDDub",
  "key41": "2X946YabWssGDY61GA5JhESY8uQyMxJ8vgU1anLpSYZtd7q2Me3Wo5aGKmTGdGvZB8dmKyDuCtWzAFZGVuMZJwhL",
  "key42": "5nc76FmFT9taPpRt9bqszWYTFVr7NxVjsf5zE8JtvczM2P4bhMAnt1VFJPZws8qrpMh7RuZ1Z2YNvbizoQCm4whu",
  "key43": "4zRQjkCGKHp8cLcvsPoN6qrgMj7dVdk6Zp9HEgPLsP7XPcHmw6MofFtmzcGfHCoseE1E3dXetnVQ1uA8qNV2Nfmq",
  "key44": "5HijfdxC534kDZHJXgSeXtuQF19AuoZbe6zxBeBBRJnCZcJft63miEb2oZYnrZkbb3cPLWp7qGWBKWGGiSXnGRyZ",
  "key45": "5YvPTSLg2iy38Uohk3Q8yUoFZtRvXFTin758TK2FVnx5P91jQH42kWijbGkjBwtN8ofAiPC1ccyQMaRFHRpZvmbZ",
  "key46": "5pDFnfQk4eZjcf7iee2n7mFDZJB25W3KoCozcvfBBfu5d5xrYHyEJhjjNpE11LUMuj2B9jcfo6ycWZdXQ7asR4nb"
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
