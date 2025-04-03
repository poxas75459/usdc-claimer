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
    "2HkVLfCU2gj5jVnxs8QfkyKyVj8jxCrKsTd8zpZK13easd9zacpcJTj7BsyJFxXXEsUL5eWkae5nKvdwQutcccQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVDb9AF9GGxciZgVk8b9VYh7hbQfVqeSu9LYJo7WJhk68Po8b9szxLDcv5SksHJ5cQTGE6QZnjh5S5FnxUEj1Fq",
  "key1": "3fLndgcP91ZacEichZk7paH2j5sZ6kjnqt7SmDxUkysK4kkWognzi7xG5jFhp33Xy1dZdQKPqNN9oAaUaxoauLv9",
  "key2": "636nt6YXCix4CitdzVgsoz4hQ6wD8ddUivv4vEqjAbWYWdsxLrDu7eWsr2jGiUDmeMiouPyGUyuUh8GAY51g3qFE",
  "key3": "3CXm2tsQW1uDzmQ3q1sGyWkbC2TVMtVT8XaG7hhR7y7jhmBXn2RCNpjZ69U1Bhyjj6S2bdAMTWB5VTTUVfCH5YfX",
  "key4": "5VwPqYWzVSdTXKUtDHFBZ7PHZoQkM22YGCEq9V2g45ET9V7QJscEB56etnvHFcPEHVH2QDjpKTvPnoLf7FnkrqdW",
  "key5": "4YqztJjKcvNi2sCZJoAmdCbYyfwDo8RjsAN2CT6V848uvQFq8zveHxcFjbcL9atmq3sMZWHKYS5qMamsTBWeD6Bf",
  "key6": "3JGUep21HSrMh9aXqkwDQPGhjCgehhiZKhnZhn5YXD1zE7QaKfnSTEEo96gZyqqYawnY7xRirUCjnQiqnindaiaB",
  "key7": "38eKyw9iXtZViHdykiaUP1VF5EvsRGbrVKg4LqaRwk2wPnK4GMahoUx3pCHGDANXJw8M5MQRH5zkvPCv5s4fPQsm",
  "key8": "3HQVMQK8Ho35yKhPmGdZPWrL4zNTAQG1wWs3GEwhQ3zRVH7Rru2v68NyHiPh7VMJZRyT2EtBwTsaBq2FzuTSdd7F",
  "key9": "38J31jQGj43u16PMi55MrL359MS7chfBpNVnFwAK39xG4RizBBURQ5mWmtZfxNWRj5gBkKdbftHaetkTNn5gu1t",
  "key10": "3VsigsVxcXVjXXecX3y2d2DNTXCB5kuwE2XCXYpMPMTbrw9HPyaL7hTLd5gq6TYSFqJMw9Uctjtxyh5KewV2ZeHD",
  "key11": "3ND9HsceH7cKYpESJJTtAwVoTRe4pvYzTegLAeW7sq32Da1JKyvCcmQkFg2DyJV2uC4ReDWepCTfaFTY8u3dR4Jt",
  "key12": "4BVdvDqg4MxoVdmayz6boM4Cn2dP82i9FKjCwQt4pf4yGDRSvKtKnscWUFvf1Nnhd2BSJhz23NX3gaM7WDa2RCK5",
  "key13": "2Cevmqxiwb37VaDybPkoXqfo9TyaCLS4sig8XEqH2HihBw5sdwoeE7sUPmJoaQRj6k1kEVeDQe4i2RXtmk1YBYpm",
  "key14": "2PmWKHBdsgSpSRg7iZYmJ8XxvTNgBFbwTdFAn1LuCi8WYHnH756tUQQsDrzam49nwpxrf9HJRwBqahZCs4KSPo8D",
  "key15": "5R9DiozDEKKEnJCLHgB1VRt29mqLfv4K4vEf2rPSjLPSfvEpBXXgrcurC8gmYSJRaYuSdBLGPS7W72RgiYv6azMH",
  "key16": "29RKHsHpyy6CaxvbVK4rX51gUx7yVdJct3hEsJBz3cp7My19LpoFHU8QegNbM5BDWFGJnKtPARTH7UcZGAV7gSsg",
  "key17": "3MYr9ceqw8xMoiicdDe8NaNQBkmvxzCVQBMTCTznoFzrs33ZLGoKdgvDDM4Jk2wMgD4ihbtoNbqqQrvQkfhWZNSP",
  "key18": "2pqVKVh1LJWkEf7BqGR6TM1F2VZ1DENkcT57fQJUDJQyDxdcEsY8dADWHNVh3JfTxXsn98KhEq6JtGMYb8uZWFBB",
  "key19": "2LyhrmHLxAyDNNNhtcCi5HJbDy8D97KhEw4qCfbCAEjodNsZsKRc5jRr8b5s7XDspoJo6Qa5nKW3EuXQwPAAUNsm",
  "key20": "67QG3Xdqje2yE5Z4nZqRnvDAiLyQZnxJVRoiDx7FwXaTPEYfmfMHgMohzHk3pAWhqiLmbkeqxMNnYU58iBT92Qke",
  "key21": "tRuHgXbKomp35PJMaoM2RkdxEoKhqqz6kwZo5KqpK2bhEdUzmsS2niwZifaYcvsEAXRrde7ZtbarsJA2x7vtd4r",
  "key22": "5RgSvMNY46CjWp61dVRrzkkGs3qH7SgBcbWe22RMCufKeCJ1MZM3sEzXWeBkETrhUHGSZjyLGNeFujd5bxD2MgfB",
  "key23": "NuMkdEcBmaUcCAJWFbonepggiALj3cyV8mbyKiSKJqR8MiC2mG35D8oSGgfucRryduY8VnyvCmXUZBDGADfJVe6",
  "key24": "5Jo4TQQqEALjpNWbNmZfwZ4o3fRbWctk1mr8aG1qjumrzSmPmEZ4wbDTDyRF5FFe4qoPDC35KkMYzSYQWoJ2WpPy",
  "key25": "ExiptUxuYbEsbUkpZgu3mVkuHHTvbZva9iJYFeQYPqzp1uUMcsf3v253awTFHQqAFW2upJwEqXo1HQ4iugfv93Q",
  "key26": "5ZcgFk3CTnNALWYbB1ay98Wnu6FZe25PtTZYx9BnStpHVtdtNwB5KAuBGw4vVZmgfWgXTGZqU1XvpVqRWVGW2nbf",
  "key27": "3feUjpDuxpxFgfMNuGTSrBPB5pXwnYwGyw4cEtMoFQUfRSAYtx4jiRJsFF4DWonFUBim54A8dXUJvZujLCJj4ui8",
  "key28": "64dNRdJrYBfEc5u63yTYfJCe2ia9YkKvMuVTzPr89hhs3zeYtrtQQFmQis3TFDBvbsXWGTH3842XeuULhxPjtFQb",
  "key29": "6hiBk1y4qPYeDE4JoMnpD1i24q5s6VCUTtYguirbydtqEtL9ZQKXQMbnYBiaZ9VPTJMJEoBU3DydgeKXHYbZ28N",
  "key30": "3amwhs9Bv7n7q9PjQvJYMn1XMFHeFWnH1DC1BJqpJJvwt7KBpY3s9w78H7PYVxauxopVbgDApKYbpDFoP9Lo98pX"
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
