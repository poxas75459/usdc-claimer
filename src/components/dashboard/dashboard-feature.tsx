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
    "icgHafCxokg1KLyx7FGWNttvEFSErii16b5Kmx8fqFcKkj5hM5EqAMYexP589HVnzX6fzUWatKLFoQ9QSyiEpUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXkZyeup6JrHzjdVJMsBqGtUcS1Ujt5mD7tbE1qoPReMCyceW8m6ppKHCLthkVbGjnBFwUswZbdeiJ3FKb6CPJ5",
  "key1": "2nW31Ge8HQLVnts7Kk9KE1B9wo8REPyRACbRnc3aTEUvRAgWtR14b9izAiefSRWfn3MBe9Jz6spbpgcPJBmbAsjG",
  "key2": "3VQg2A1Gd3NhJTBBkHYMcFxwe1MyicGWyZ4svGpX1GyzWZSJWXmXaXfa3YfWwMNfinqSZQNqyfzK6yJwa9QeUZmb",
  "key3": "4GXoSZ2f7wwMVPKbd4EqpUW6rhnLsQud3XZKcrnr3vuYL77Xa3oveGW5w3nfByNzBXinCVzm9CF2wba7yCYxPwCF",
  "key4": "5ExYduw6V2R2Ytrzu6bTLQfPLtsHqLaxfNbJsp5vryt8V9xQt7DUW32oLvTbCLvkmLdHNGdMtwofwezKU8EmpdHr",
  "key5": "33JQbTRWLWhXgixQVX3h93ZACXoAz4DMTtbCxT7Zewn5RdLEzKkYXUNjbgSfs1Na6qsvrSQzAH1NMLpRkccyeYkC",
  "key6": "5EMKaMfGhHUAjnJmJikHf4yP3i2eQx3FeLjcGFgBW6Ltn19FZkxYqL634wXUTxebg6R3TDYfGVEVnAVNnYWcToVq",
  "key7": "33M1Vjp9JigBY1FUqpAWQqe4tqwv1zkMApAUFFG866VpwrvEeP4R3Xi2uZrygpWvTt6Xmou3EQjvKkc3vt3kJUWV",
  "key8": "xn1zkA5YFt6Vzsrd3pV9gQMmAFhWoKC9MaheM17DCBzESQbvNmkP19tDvMbe4fjDszv4r6BFoqvbFDDy5ADtGFs",
  "key9": "5Xi3FqArxGDo1w4buuo7Rii1W6toDZu13DKf9F8KgWGDcop44oKbbfhNaYNRm8Purotn2USzp5eJ5Dgd3R7Rfu4i",
  "key10": "3JpWHia8HcjSLiF8f7aopSjReuh1r1jGwNPdvPnECZ9izSAiLhd6bRenYNmM582ESvXjzVMWWvhwP6MnjVWsLgkg",
  "key11": "5Vz4EzuE5LgMZq3uDWyfaYXGx89knJJKikf5Eh76aTDyZAPvQhKX9HwC2VgAdKFsVk2fnsfBAJrxyABW25R9dUVN",
  "key12": "5pZR3CRYBuSWzL6Lwsv4aBgRPapdr26Geg2FSx6EvXcukGxjEWAHwPveUVubve1bktSAudTyLZXGJAGmZ1jhygYC",
  "key13": "4EEwK65VqmHoe5mB8sXH5C6YnTTsf26MPyhQHDXy4BgGpyFeu7C7zbWerjojYZWPgo4NJ1wUXt8XhaFjFGREczxM",
  "key14": "4JNPw4QhFNck3VB94s7tnRBobbuyQmpDJBjU5t56HLxog9bZe83vYF2imv5a7wrthYMgWVEGFfWfQGydYauPUVQ8",
  "key15": "fQjy8AXBRAxEoYcoFfUDqDc9qoFuvPPX4oMzFpazeHxe1YeVJLyJW8WAW3tqQyNvYmmUZ23nfbktTx33dj48tz9",
  "key16": "4j4G2giHXnTFvcEZbUmxsAM2BJaztbYCLBDGM9No1KoGPJHC8i1DV7tGuUxBikNopzuXfCJ9cAVreqPXFx1Fw2TS",
  "key17": "3nQDQaFLEAx8UHYHkBJoc69Fo9DMYGeTunEqxyoxQdJazTuepbEo949Fqy8ZHofZGsyQHLepd1YoMdTkjSB3oYvL",
  "key18": "2Hmaams5iRaKAoNdt1YdgpYv9r7hi3iaBSr3o7jeNHY9wo1suqzrrH3NiqyhVLqgAD2faHz7T5DXPbqHrS7JUCLt",
  "key19": "2ykB57ie1cfm6rJnuoT4LshK8Tn8oiQqmLw1VSyAFyTwjWTSw1HDe2ec51nSg3x137pq6LAHifubpg8mDHbYh74p",
  "key20": "5UhPTNN8YSbArodyP1zrMUgxt7DaL5DbupuBJhMZJtfTZL2xdCBtrgm2zhtyB8Utw4Q9byacWnqcrXDBp3BVhzH1",
  "key21": "oerJTtuuqdSr1L7HZRNQbePrBmQvaNR5C2F3usyisokDarvU3f925toypQ7jJ4tUS95mp5HxBrqHHkjFbDE3vF5",
  "key22": "2kQxAborQiHZndv891ESpXgDy1gq2R2ZX8he189aU3yquJdtwh3HZMdUsZodzh92i4MyuX8xvWUjBGC6oEUaS64E",
  "key23": "2pcU7vMM167yyvC2ysWNG45xHsamXnvUxtEAAjQsjfiW49m5sXJzk3WFYUFCZqDzr5pv48bf6SaG5RwXU1Pm347c",
  "key24": "psT8BgPoGQV5iKdGZ8H1xQNxxDzo8PqRJDicsMGZeaeDeh2iNs5Qbu4N8JBWavrusLaUmmvTis13NAo5uYFZovY",
  "key25": "57WpPmGTzzzzT3rEo5QbUMaPqs4v3sZWwQsu9inX1CwTAjavs6JRvHBzMLbPisgBE8VqMG37zY4VXauy7KicKFGS",
  "key26": "4gF7qx7Ds68JzqtCjHTMGXSg7UJTVez9U2CrTmEieQ6y2K7FU174pH1Sws1dEkpcXmpLMPWN6aqFnetuf2T1f9Q7",
  "key27": "ofP84ztucJLV7q2fWTCqVmt7GePwnNWZ84YZYfT3kYy5BLA3xQhgQYdmUsX4eYPm9BdpsDi2siXzYQA9khtNMmD",
  "key28": "4Sh6kRUVBw9xvFLC9ooV5aQHb3Z6JE2qp5VJisDZZzgw48xSrTHTxPjcLLZAhDhEV5ujj8mEaLb9r1TJixPqvs3",
  "key29": "5Jbv4imw7hzsLCRt15GBPkP6KTmubh3ReP9ZTYtdYbmTohkV52yvfqqaAHpSZCJFtqg7LVH2LJ7AMPY9dDAUWRYm",
  "key30": "22gKhBThR2QVeyo3hMdiRV4pBxhM7rGQFN7Q96EM1tFUisQS1wHzZPr1aHpLUiMJoGR79FJQtuPQnRD8SbsWrro3",
  "key31": "MyPmBgFHH7h3nu1SoUUAUVDbSkRFJTZMXGZwTbmuTqBRxpghHrYee8NF5zuZy941WkzWZV6ZgtB1yRMKUnMXK4j",
  "key32": "3GoQRZPvF7AWKHxo2XzfSxtwoUi1qie4dcMCDaBzKrNYbbnunpHvtUGjFDRPajsaxS7xhRJk54cmNbbAkbptCVsw",
  "key33": "5CjfV5SCoqy5Yrn3maRi1TrD8gwVEchw2xYyZHUn1UnNUY2Q9PUWRFjPReYnEgEirKrGKqtCLXR28p76hmomjCZP",
  "key34": "2wwx6Z99DaCbGE6neqAjdKWpu8AGVvWobk4t9tzok3z9QN2EQZoKrYW9WxocbJidhp4iRvkxXB47ZjHQYRAviyJw",
  "key35": "4KSE9ZY8aqisG6cXodVEWSyaw4oVBt1PC9yiQr3er4PFwZNPcSRdSEwzTYekGX1Xf4rPgLA3ASqb2NdrxTZc5ViR",
  "key36": "5g2gknyPqhLrNip425xH449g9uu98LJB7ohkY8w5hFFN3MD8F19RWdFiNMmF91pXEQQ58voWBNEyLWVcqLCKT28q",
  "key37": "3JGHs7EAisZBTu7vSN8WTu5HRMSiDpuY7rebFakF1yBrc6iLKQAT31sa3Afw1LMsfULJ7mzHMhuLCVtbRvPmMFxk",
  "key38": "2fPdkx7HvdrFKAy3gwPsa5KfZRj1ymvPPooDz5ioJrssZnH2p2vSYQERrtg8uAqZHd8HovevwbAX9njBS9yYeNA3",
  "key39": "3RLy5VGSsyHrqbdjzGiLa1xv5jLu3UA9gaAjL1EyTp7Vk2xPx9ZuapLp1rvfsaxeHx8TWsV4zi4maVGu43Hgnwk7",
  "key40": "3q4LyPWkiZLPYnEPqwJgxV9yxPCS4FE3eNmTNn7QsJ6Nb8cvZzQWs467JSpoEEgRhSwDeytaEpc9rm7Bg3C7bLEz",
  "key41": "4ETbuqewSm8JkteK11iFbm2dn3aQEv9ymx9MmiH51WUHXuPHYgSG5ham5fWYpEPQD8a4aQ9FWsywVxBu1b4s2Bvs",
  "key42": "1nxLgxucEPYmPDALHUyUmF2eTd5zxJJjnNDGLEpWuBisQ5QgBFiNE62Vd5Vf4P6bkLo5uJpDU5zAfbqPrFXnPQV",
  "key43": "3U7VprRc4XFbRG1J4isM4QMPXRhBuprW5jZ1jSPB9h787CeiKXzaPMZXL3Qgy1VKLSTfEXo6MveRFppFYbCWZeHx",
  "key44": "3MkPmeqyD8RJHFWijQJSv9M2a8arcuEoeYozLmwT6wrMnEX4GqcvRqLFcc3ktnKtm9zYRhg9SWrssqrnAMVGFDS",
  "key45": "39x6Jh8oQpprb7HwUG3PtKbojjngpL4iEZYwBGpu88JNKFBNsK2m4tPhEaxF6TmAg7ZtDxPbKEgU9ZZ8Zwm5qsgd",
  "key46": "4gzDWLLvt4gYFfBfCfxRndH7pxCCk74gGVgJJSxtiv2BpoNY6prxKPchRpDQeMa9P9GSYmTGAkWCApANckqp2JWd",
  "key47": "51qPxfBeBevyQaMy8jvwAbjrpzemxngeZE7yFjXLmuewf6ewz2hQn8iX983YHqC7FRrjMmXASRRpF5vS4XbofRB6",
  "key48": "61g1i8VvKdrAXs52kCdn1dGgJQUvV3ngtbQWsHmaivqXXm6mtKukHCroj1qtZ2pF9YJbDMrdao71ftUTWkryZNJj"
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
