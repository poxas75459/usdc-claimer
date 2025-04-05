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
    "5U4VAfmxhBBCWDXPzqzuXUYJif7CCFikE5d9jNTrncG4EE1b5KvFYkSFXjS4ZQuPHkZ1ZHykbLTxvZ5BgA5g73h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcUu4r6qHnrv5feZNBHVtQ7EaYJSZjW64vaAy9Tv2uAKRGLanN5zNzf6sxXqSQovUfFjagTWw7RauF35P8Axpgq",
  "key1": "44FVua8bneJAfV6mqcsjZQmTzhGYaQgeSn91F1eY4Bu4W6GXVvwn9vUEF25wG6UNgdAXunsYjnQjac6aRxmP5Dya",
  "key2": "52ffDyfmMfu2N9QDX4gsGJr5hF825AeYmcYU9JmDDGQ1pZUhhCzF3EWLZ9rzr6iVSXbe8eWoop2kCtsuU25wDLxZ",
  "key3": "3FbQDev6BuAKzPNoFMgB3k66FnBCQjUMsHGYNpMi1gX8VoHdpoCTcvop9e69PmtrH4ZKgbKzPv5dxb6HWqLYnCH1",
  "key4": "4Azx4jSNbpuj5CDBLspKhJKV4JTG6bh9EFBwd5RWFtRzSYLRkLDAhhLT9FSbx5XD3uRFt7UeCrtb7gFUAqX2XaCn",
  "key5": "UkwanDCNfiAM27msYaUUbgbBRoejiMAN3GGJAxp7kXddFibLriYbmwdNGhGgfsGjrwV4cJcUhYYLdzzKzJG6oid",
  "key6": "HNkueHEsDNbeyHHucAuhgdi8XxH6rV29yitXR8mQiD9z1mFJLdhdf1KCYTu9X7sauK5wJgNkoLsSK7tQupBbSYC",
  "key7": "crwXxbkMdUawUYgTBAdSNXuqYaQG2aX6UjpKzSVEeGFLsexDFMm9PPHdG9wR26r8nAxpEWfrsqC3mHhkNmPJi64",
  "key8": "4Sk1GQxQFxVZKZeFnwnqTcDLAPBr3EtEuT2pfkEU4r6MhM9Bmc3FGWMESB5i59WAoGdBzVoZSwcVXSMTH9Wj56Ka",
  "key9": "4ZogPN62WCRkqq3KEhiXp7nNphp2PFgt3ccfaeuJ3r2jx39jniUb5nv5dsLp7e143VsxHLsgZcTLBpXniS13McPM",
  "key10": "RZCj9nXHu1oG79k39EBNfdWyKyZ96McvuyvDEcoRYR3Wo978d6mDENEkSSkhKo8L9T5BhtNhzvtUPzyhLa2uNej",
  "key11": "5kUjoHz4X1B3ogi2DbdNvayT1EZGVtvtb9SPRMjb73GGtoG3DbcToizHnst1uLBQM4h4JztraWkf94xqjfnbuSG5",
  "key12": "5yyrbLTP5pFLhWFZoWefAG4g6mbRSJRewFYrRHVAgje7MMMfRmhTz5Wbr9mEmXie8vq9k2UYSKP1Cx3pxNX6ao5h",
  "key13": "24VBvRvcS9YBDtrFDfRYPbJAQuBXWXVP4bf1etyijDG3kXjJEQzryC4XHYYTC4nwJPmn3m9TVUA6bgiZg6LHEBeF",
  "key14": "4KWhMbQH8ELrnGrHXYxQQkiDzvhshfS5cT4M4GJwkjNfZ8YJPE3ADQ4DqF6Aj3SiXBGmoAr6Q3USFVpGJf8AgmpF",
  "key15": "Li6P9tC2uZs5K2MyVwjrELhFAdKN1FthCGr5W1MNX3grev4vRZTcSgtx8n6uxqE2YMrJHMChjBAinQfNm4UTQnv",
  "key16": "4gRYfkKRqhQKxKYEE9FFweiZiGeTTP5GZFCoCevehBRovG31aYmTpfYNiFTgqbxpHobgNVdHgX83XbL64EumyTdG",
  "key17": "46uVCsE51UysERYftkbZHaeN8JK6czXrdjQJu2anod7nRPQP5zrM5rS3R1YegfXAWveeUoigsw4fE8nXDtC79auh",
  "key18": "5sYxeZsJ2LTg7nnaxtPfid91G7oLexEALQSxpugHskbM4upFfJbVwDJKRccqThE5VCxD5RpkBSkM2x7qxZMtfLV6",
  "key19": "noMXFQNBmV7wzLCTfNyzKNjwCzmVsUbadAKiUWHFiBYkwD9TQg3wimNJjB2kJaxzAyMw36z3QdMXxf6QJ7J4Rrw",
  "key20": "257F8h4i58hhSoSiNPLLLgvH4NJQyEVddrFD9V1uPrUXwAcdphrkXf5RsQ9mCHm3GfoSa5M6iwLLgD3rTzo8v2b6",
  "key21": "2eCJfsEp9VV2VUZJLK7xiCUWwy6gQnZNum4Wmwf6qio4LuKymnhDEqDoq9QiW8nQPfChj191PP6oHja8geSNRzeC",
  "key22": "4vBGwDNwwizn6reZPuv6yNUuSvw3A31mJe83k1nReh2fA91aj7kkjJn5Y9fDSohURGGfebdYtntbBzbjLEPTS5NR",
  "key23": "25UU31Z172WbFT6yvudi4bwayuJ7UHaZp87ZWgGjnUZr7J34YjniL7ZiXvkkRM3av8mGdRfoWJfJ2q7hTmnL44N8",
  "key24": "fMDUezGaCuTxeBcHQWz6g7e9FewvUezcukB7YbkMSrFZ5e9XuZUAb31qRYHN1F7WhaxC4w9km61bz73mEbwYSj4",
  "key25": "4wbPc8GDZWvcRtBwgtccXH6vMs1FEBagko2q528sPnsqYR9cMrgx3zGofgTaJufbD5nGwtLzMdF5UK3f7kBwbAyJ",
  "key26": "5uaZTFcGMY9NoK9hLVEpJeFHYyCAMjY1XutPqbnawMNvccTveEhDM8ZSCtdGGGSRGP8eiW63mkk6ocm4VndnF1z2",
  "key27": "4NmynAz6MCJnYVycezR85UtFRfU8ZeqMAZgzJ65etSLjTEmnWwDPsGgALD3WkVSznTNjqSHdcCB55R1XyYHCt5N9",
  "key28": "5YqUxRGEvAbUXR5xPSQCAoeSxGDj5BJkxG3N5mmMrrd86ogca6v6ACNoHi96oUoZd9pQbyx7w8GkMacsEx4uczng",
  "key29": "5ZzauuR392SShkNDTpWMLByuDveZH7A3EMf3Tfekk7giC337jWXvyJob4CHy8fsD5ZRS1tw5i9Am8q2Y2Lpg5KbP",
  "key30": "mLX1XWhei4K4DPXptBYxg6xg8qvdRn5yANFksSoDenQn5vwXeeCEAREv3n2UWGydZVFSGSAVJVNvy3ebQf1XmvD",
  "key31": "XtxGprorH9g3ZthErBwAyJGRATCAyRdUm6K6spZEimVcaEUahtUudCzrTnAXvSpSasnrCESyGEXntrGEocMhBxg",
  "key32": "5HQJpey6JG4NC7jSxDV6TR2dsKGQU5UkfHThvfSxUQHFDJnRUAnAYP7ifsPkUZ9x5W6XpBPbVUTi9UtxNphviLqR",
  "key33": "4Cy32Ra1K25iFNpAopKjKN8dSYmL7iUaHsjYHKhCkSEzGT3rQuXZKHrEG71pP33TQejxTrC2pVQqS8zrwVSMBHo9"
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
