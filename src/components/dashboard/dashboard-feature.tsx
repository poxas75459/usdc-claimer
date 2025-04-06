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
    "SuBxNd9MWyV5dBNYimjtYEM3nr9ar6BFxq1MxT2bkkZ27i2KWAsYLvueXUrZQRep4FQXRf3wMHXVjKdETysjViU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJ5JdTV6RSNac5tiYCWSv1HVx8P8Yh3wDJBm8uiLc69zmj45hmGMDMSk3EP5v1CpherkXiV9w5FQJLWZKLknqBZ",
  "key1": "2L3cjLSLwqova71189hNozp5oV3AaUusL11nUbfwtAZQq9t3L7jZKoEbH4pmtifDLNphuKPMMd51aEJmCgQfRKP8",
  "key2": "4NwXxXApin46DD3M3nPr1g7Gi6Z3P1cuWcYqLwSSty2ySc6a2ZcgoN12hDkQKiHgLmLmoNV5BeQEti2VyX3C5JEV",
  "key3": "5mBgUfa2xxM4wXP5WZV4PzrUMhKYignSNX8GhubnYKkpYhcHnXUr6HCjsf6CTEVYzdCwieykbZD4Guc7p5inTvKW",
  "key4": "2VTvrcxzA1z6xgSyfa1NQfa9GRP6VWfEYzNqjGTPPL5FPAiTzmn3xaEr47gsivkZpwY1EJtEZ7UMt2NMH8r8D4uv",
  "key5": "y2yhC1rFa8uNbUUyvd6mYJC4U5fP22qk3sMHiMYfaPiQHCT9nRpXViwo3qBD1X4Q8H8WYgCyBALUEuJPtDYWQCF",
  "key6": "3kuZriEwi4Cs8JrYRDTAMiM7eg1Z7QDT9sBeLGrKL4zZYBeQMP28LDdKYtrK65AYC1sSjXbib9h8zERYvfSxTGap",
  "key7": "2fc7cTLmds4yYyML8sJDxS6nQgpFM6pP1cQ2R4CjPAv8AvycxJE2aZTkzfsHKfkNtjH1up7GthDJuEUfTN86TqZo",
  "key8": "UN8L9wevSwXkWEVG3N5NBZMM9MCgxihphzFbBSXqv6BU4MdwiVv55NDmr3wcZStkjuSBRipo6WREvc2AG4ofH35",
  "key9": "4kyfeF7xxwC5EGBUKRi5LekkoB36hbMVfo8fctZewpj5dQ1QFWj1KKUuA3Vh8pgzLvaWh7UtWByysDar3hMwaAoA",
  "key10": "27S8WjEM7tKFCBM2wNLxAmnXCVXRa39RFZQkjDqXjTeZMXLhP77X6P2bTChJSMWkJdLMhxW77XX7e6QAZDBZ1RNm",
  "key11": "5idgMtwGwAXsZNfD4CjgaTYaB5pg1skhFmoDmKfhtvyUHpLtrC62gsCsgeUdmzur74vSQ1z8qeH9ydCWxDZoRK7E",
  "key12": "2zJdwFtxgSLFyP9mPKupgDtF4jnMP8rRSaKC8SLoWzg4AUq2CQchdK7aH2LucBXKBcLdoJnsqKttnw18t34a9LVS",
  "key13": "3s8q72SsVn5BxtGsqe9YA9P9hoKiuL6JRHSAwAXWoyeNDxayoxrAWCgmKmEMHVv5GB9SfzP4LE8aJSvjEYMDM925",
  "key14": "2tjkpuG73RaCT9muXPnsKgTqwLZATFB8n2gRw97yT9Exb28psxm8mi5dGWot9ZWk1rdHHb73Zj86nDoUtzpkkwcL",
  "key15": "5aWLPk2SdRyqhZLy43WphmwJveHDdxdxwL4QdvcGk2UwUdtLtyjM3uN1nHQrUZ4XRL6GGEqzYysiwqkrLwEGytFi",
  "key16": "4LE5UqXkuyfVjPdp9mu9Hewx1HZPa7wK6Q4G4TW4dMeGvbiNxkoU2nCnJysXfCwhxznaa5oGQNik1mduwWPAeEoX",
  "key17": "2sc6omw4P2yUFgmcvA7Mk8bpnQMyckAo14E3TE5rh9P6A1Hqaq2k2PNZqcs8pghT2EKaHwQC3Dfhxahosw7Jbxrf",
  "key18": "5acRGZm4Csxt7Gz26dDuc9PXws2dGcjSZqHFh8Dc9c8TDFUoKuku5aSg57k6bZDgw9hLRoVPs9bz8y6hGc4kDbSL",
  "key19": "5vtr1Aex9pNj7gkARyxxvfd5xGfkq2v1TixdsG6VHgmWX5BXfF6WnnCUr9qSFA76JojJ8cFhbLrYAtMazm68mdiG",
  "key20": "3iprZHhbkrFWvCsnH194QQLi8sjpD2TX1GrmTaFdS3spPMsFeZcUNFq3urS4EnJ4Lyrq4CBr3YgGNHg2cW3SCvb5",
  "key21": "2z3xfh4ji8ZH8Tpfmc9jhBDSS9PpjBnB9LXwzy5fgzA8ERrXHjGTNDPRVU4TbhtZMDZtoyxggY2g6Uedhj11qsEq",
  "key22": "666WEpk9MoEDw7w4w4BHxbLAan6E5QWjnNyfmckGHhadduQm4Y2nikF18ENRTEnEhwgVN5hdPkkUusodwmgoqq89",
  "key23": "2mtbuNxrCehAZiexi13bNadDTadBgHkiakwA1jECiiUsJ1kBRQEZzmakDTs27Uj1zer7RJGWtvfZntnQpdu1mVRB",
  "key24": "5314gXL61CFLfRf8AyfFdjGdJYm9q7nLuLxCcQvXQvNPZRcrJ9DNXuNXyvjd78Q2FVYY7KNABdAZ9VT2niLC9dLP",
  "key25": "4nKshdHUg8LkdQ6GjuMmPAKBbCpzJgtnKfxzfyETB1XsC8FRhjy1p4RQzy9Wb8SBk4pu9wyFzXDfHQUhhEP9JP6b",
  "key26": "5YywYveb3PcehmLCiWNmQDKsokRkFYTinPJExkWtAXSH2kYRdNw11Tn4ajyYM9G4qfJnET4dZMaRwwqMwMJSvNDH",
  "key27": "4YP41uTdcbBmdztaSHzkS8yEzjhdtSzs8V9Zb8DMhoK6HG7QLY8XnpFchYknz6z2KZEdR5uBX46fmdpTLv8DcJQF",
  "key28": "3kf2vHxrsZtrEXeSZqs18fYmrabEqu5MAayVRftsUtmDSF2mFSmCrhGBZFvS4Go4zDxZer5o6EC3S5AJWtjJXTPK",
  "key29": "3HxXcge186yRaPgTFzh2sGvMX8YrEE3rUZB5541JavLXDYtiyhhTyjehKARM7qQ823CTsr68FdTXCZNEwYL8LRJ3",
  "key30": "2KGczWkxDMYzmEJKWMdNeuGrr7YFrcX8sqsgDRWWLKQemithRrrALhDjzPNey1N7a2JuY8Vw8ixj1TabExhpJLF4",
  "key31": "2mYS5pjffk8YY2Vv3rMe3BRwhFQduXfZyuqFbydVdyYdLHnDjbWazVtsgAyFvPFhVnzncQ8cXDmFjNHToqsps9mZ",
  "key32": "Msx3nS2MEZVD48LWAuZzghNfZ646T5Hw27bt2nea82bK9h8CnFBzd7enzf9cHKfzd3hvBds6vPCA884QP4HJrr8",
  "key33": "nFzaKWfiZs8KKunoLRC4nApct73F7vyyoow4CrWcggAXS7hiLsni823Gym7ji46xQM9bMZXT7x6PpuSnPigqDp4",
  "key34": "36V8yJTiSejTXpL5GLpV32EkKifGjn7vVVYPrJEGBxhNZikT11kwv6o65TVbUi3MUNEvL2hmPewwxenaS54Z4JEq",
  "key35": "jUBnSJrboAq414UFXXe7dZ5BXXqMpdefFb5XqrBXHs3WskexZ2S4z2koFV92YQQSw143GpmqWqHfTt66f7bYoQg",
  "key36": "CAB8e2MigTK7RaJz9qfJuYURPDAfygXKur1ShAz9hMmNpXPtSnBySfTUkHeENNkuwbYQ77EMUqDo7dh5ibNceCh",
  "key37": "2yydk9LXaAJ6xCnsBUieA7ZUowEDqUNop9qjpTSazJRbi7m1pYy8XdgYPdWW2BobXnN2GR5fkT2htWTjuzN8AcWR",
  "key38": "4KJv75BEYk5Q1LgYw7f3ogppiAePNCZuFU1Dy8qZXj1utV1S8RqduSmzyP9nXRGGWCmnCgWKThNHY3CJZMQE5kNL",
  "key39": "4GBtoFX1cpr8URJmgZfwrLTNBhosbuo9hBrHbTbWi6XJt9XMeUV49E7KByntaxxzfSJqBuBKALULK6WzPiJiWAGP",
  "key40": "BhCucqfCePucPcD9D1wF4zwfWVsnQ14dgUbL9NGXSMQE1hby53zLY15Yn1TanFRiSR2DjJQmYGJqBkrBuJTmZ4n",
  "key41": "dQorkcswHHyxjZAA1pF5kTKmvGv9zcSgRDFeKzMV9Eby5x4skgVZRzBRnLWnA11NcNv9rvzMfv6guafgkoiNVf1",
  "key42": "3T4uPzdM5k79YC8D5YNPBYiYzxuGdRR1pwGkx8yJn5KrfSkomK2RuGEheGFrtMsNXud2kSdWcFEfVvP2Mds4arMC",
  "key43": "zC8VyR4HGEHiL8FVJpf9qEhLxwu7vZ94QSTF4c2AP4rJi5Bg469eDBqievd1oKqmjVd96tVRC5iQaK56JjepgDc",
  "key44": "2shjpXFjUm3pe59upx6zCJS15pZSAgEE71tdpfVRfCU3sRAMRRXqQ6XmkaR2yKpnf6XKSDtbrJCPDGmra3NKRV4B",
  "key45": "63qAGKUYGX2rSqqrPZeUQ2KEDvrSwVArxxMSGW1H8yvmTffaTosffpnCaWVuktEFip89HUNEnN4Wud6sypkCoKxA",
  "key46": "2N7C1iCFR1XpyQ4uaQ41PA8owiyrUPZ6kcUHnmAKZ8X8hZbyomh1nP6dWvEDBn4yxp69qZMVdRHZuLtMxUG91dnJ",
  "key47": "5UohMcS8FjSLUmmEJiHMdNQuiS4Bsi7PzXusWyZkgsWosNvhTv4GKsExqUgX8o9MRYaEsDwoQN5N8NbxeVXjwndh",
  "key48": "5kBfesr5GgT5oj2qvEJyVkQx3Vv8mbHrx8db5ecpQQu8U8cVtg3gRXJsWHW4fTNYb8XGXGwj5Ap8x4WZMh7SNwBp",
  "key49": "evUCvTQrH6KemuPoRXEPwu7TtJuhijrqdgkua6iKoAXcArXoRvxNXrudc2WRMW8ugwGWzFkjKsx35yNBCzbqshW"
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
