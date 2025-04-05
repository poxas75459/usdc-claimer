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
    "3Dz9A9MjyewnAHa1GoihHSA9f29muaLTtEiksCdU6ntCJtDsyuXvM869EZjW9MTYocuecxzFQbZ1mczXEmmbBZhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4CSskEKcv9PA9xkXLeaBc2etMvfrGwr5kH5N9bMN6cjyPFyJuWS9t7EUJdwCjg5uokur4hK2zFncv5Gx5yutxx",
  "key1": "5SyDm3XLZX5uzwcbgruqvHtUyZFzH7LfH3sotFNqNoC2Vmos1DNcNaRmTXZgH2LFawiiUz3LBz2TBb5kFuff3stj",
  "key2": "64ywKuCWLT4P4pc6fVKqtBGWA9Ut9R6oDHxWMTjTms473ktQYpRX9SfFMFjxjp9TbRWs2CN7ZDUpJdn9Q2x6BzKG",
  "key3": "4nNqFB6MZsRDrR6hJyuLkvyuc57KhrK3CBrc2dn9Ax26FhqdR52e3gMQ4kbM5J79fM5e3nW5srkicACD8hsTz6CH",
  "key4": "XezJD2zNhsPY4rKrNpa1LyMbDx9GSGQV1R5jR1EG6BmTKUBgYiHwceGYM2Ki3aXkvMbhR8vQPgKUxVBcCuv9f4n",
  "key5": "61gkc7BQk54bJHbUewYxEpz97cY71znepcDQ1YaqkVAtPjXH8iE9szHXDJ9oYCN4uNV44yxtD5k54ieYgodbmSWY",
  "key6": "63DdeJAEVLeCX1fRS3TiFwQsTN8rYBGyHRZvzFWnvX5TZ8sYDFEH4EVBpawrjXrjGAnYAkzqVg1N3zwJoisTcFfR",
  "key7": "5e1Nq45Cb7KYEQq5LqxQTgitSKamRpDSVfiKMTpAPz5yfUhtRPCte46qDPVXaH2FVAW9CN4ix7axSYxZvWr2Dpg6",
  "key8": "5Qpc5nEmziTjiEW32mrUPcYkawGYagivhTAtJjkDfdpsakbswEa3gYh6DdVdygYic6UnhpNjUAnHqsAypFgNLvwN",
  "key9": "5Cu6pkC8rBkTB2nvqx8kQdGp5yr9naYrJibWCVoc9M5RBvyWYyTbawRbroJB8j8wqEsDijyfLTMhwsYxDCiAQoex",
  "key10": "4LPT8ZwTKNZaY2D9Pf2DCuYc7qfnctrwgUirfq21qJs54qkFgmxRvKhreQSsnd4vGyged4GP7rN9fAroVsWTYzvG",
  "key11": "5rhvaQueJQ7vs45L3pex4gHTSZBjAH69efMtpFVsKAU1QwwYD1n3S7j6vvEJha9m8eejXHf6yFvCsWb8jUABWM2T",
  "key12": "3h72H6KuLviUPfkxTGDzdT4D11y6S2FgCs6yT9z8eaPRzTDU318brEw3ZhxJirGsf1rtHQVZ72TzuCRLkfvhXozH",
  "key13": "7sW5aB6YNXDDVPpcg4So7VMFGH89pLssUyxDDbVqkMV82qsuXqd8KjK9XE5VYAUe29gmNZZZ6QzpJjUjvBbvTM4",
  "key14": "3kbuhVsXrDfjpgzpZkggwPiFyxCJUZAqydweL2jqYc2LoKFyXx7Ps55bQegmKRj5tdfcpukP1Ent1McoU9nfBmGy",
  "key15": "5Wo9NgRAbS7t6EohQH6zWv2dfYFerrb6JmgzJvEdCM91e1SJVM4G6K9v9k7y71VNB4Y4mMqj3uQANXvy7cUir6pk",
  "key16": "4h4XJYokXqzY3p8bLHnqQakDUrqJs5tGq3Bm78nHnJuasqdjmQmgPbjpkAf3vzMydT8LuuwTUprUhq6BXot9LJ11",
  "key17": "64HRu2ShBbkdpSNweaGsHz99Ut3M3TkbTw59u6njfzMsiX1xavVEJ8A7vb8yDWpujFR2wKmrLF8dM7FNEFfT8DPt",
  "key18": "JwNvRJVKcH4C8tjZ54ZncBP7Xx5p5mzvLSF2QZimNnyBjaT6EAZszXfVCcARX2CJF6TT27Kvqzc7WCtEpTVWVMf",
  "key19": "5jbbbmWXnyi5t5JwcSujoAPq9z71Gau6t5mRn9jcBgzAmg6cE12rF8wGmsAMv8hQDz3fV3xa5EgP5eN77pXUN4fr",
  "key20": "2MC4v33kNmDnf8AB63P6mFQtuxTprFP775a9u9RPpT4sgvKDtWhTg8rQJBCZZYFWhknLZAqbDUkKz6zGA6KjD5cg",
  "key21": "4tQGZG6fTwCqav3SC21xRHrmZf5no6BDZMTSgDnjkT9JzdR9YZiX3mD6PGN24W9xZP1H7smNAU54V1rBVfKhfWYU",
  "key22": "uzNVF5XymtG1ospDEeZhNt3LgZRfTsVxNb3rKbfEetMQc51AsDQCQHdPsccyfqqZ8kkVYy8B5sbCbEeEJMSTCzx",
  "key23": "47R2exJS8XBYX8aAhTzii2ar78n4m1y2n7F2drS1aANH1dMm2v3XfaMwSqtg4mjKA5HPit2hRiTzzjJjdGHFprKp",
  "key24": "28KiQRt7Ka9atd4F2woifZXxmSy11CtuyLRCFMYVwHM5TQpYzAYzQ1S9NoGZpcXd3odFwDzDzGwhP7zvLFvKDV2c",
  "key25": "3hCn3BXRjdjskNcebUXG4NwjGTi7VQVt1XDnrRkzjsmNc3va43ihbAQW8RJF3z8QjhGbkFgSS4kxwUjNsti2L6zh",
  "key26": "5LwLbjk2oSi4h8EdHh2J6HiF2Urw1FLmzSTDTJubYMU74c1hhupLsraa1t5y2WALtnMJBGYdLUtRXsoBzhjJ2dJ2",
  "key27": "3Kf8cQfJoqBPcu1oNb2rWS3NNT9HNYrDo8GsSpebQJLwQ3HNr3ChMwxWwYcEHNoyfWZ5fxK1prUGN6n8pzT3qBfP",
  "key28": "3oSJEuWjZ2iuXKynhsp7VYRgYKzpRwPAcZPwiG8STztjFWUh6NbX2c7HKNbHx3ojREPNSGqvw1SSt1DhBVBEPep5",
  "key29": "4kqthxK2ZEqgy1RCX79JigDJPNg1M1HEVVpE2JLSAEpjiHXkjdpZvBD6tuCkfRb2VatpDnxp9rJMqeZQBfGyeRtB",
  "key30": "51LehJ7rFnEm5pgjKmzsh6F3Q4FAb8xr8QnayKY2GwTidzPiZ84wyDMNwbbNBg9q1CaUNDzMLhMAGFhokVHkFowB",
  "key31": "5xYtPfieBaQ5wNjDz5VH7cA8dNV8UZ2d5jfK9VDMcWP9Nve7Qb3TbZprZ3YGsGXPWbgtzMRBe5kxwTSq6r86g8xs",
  "key32": "4aSVdCBmyqyWda34fZAHKTfKitzRDoXVQ8F8V2hDAvxgXnfeWhGpujmxxGaqLqSTT8Qe3XQmeBPr91tiSgAySLKE",
  "key33": "bR5dRbETm5zhwv3UFMUKR5ZLHHfTVW8ZjQtT3wAmV4thTN2pYXj3TWpLebFGvfPoJNmvg1Mu6kCDUxeKm4SGJkQ",
  "key34": "3ir5YSQGqs167iPNeDSyQEavP2TxtjUjAyZdkRtPgTmtX9izj3aMjrNbxiTCvK1GVtgPFqE84SvPeBv91XcADpED",
  "key35": "4X33j2PTH7dSyeZkXUzsVbNQfEvantKtLc1JvuNSub3WW1MqdoCwJzKppvSeLiQJvFZDrAwXChA4oY2NgHqFWMy5",
  "key36": "3Wm12Avsvi5DaKqKdfLoPdBmnnihj1joMVvv4JFtDjxBWGiSTf8EeYC1jHDJDbrM7inD63Z9aK5EZ4NQRrYQTzKM",
  "key37": "34pDopFKEHgXS5ofKUNzp9HZToNW83bvB9fGnxh4hT2fHDR2GzihtwKK1rzPVzPGGfLLRuZcu6hA4qYLoUwY5FqA",
  "key38": "59AVrLHFJHGcaCHw7wtNRVHeJEbACu37jNUzCyCicoDcERWJhFMsdWr3XZMKXF3E4FHcKTc62a7VSQrKwBSfAo2K",
  "key39": "4tpCzf8gg4efK5kYCN9mHx5YbfYefSQrAi2NoTkuT39Ps6F7turukRjGhHdPDKzt17YarPtESxxsoootjBkR7Gz6",
  "key40": "65GKYZYFq86oCRaHiATREBnfmLUXCuSjiAs58JFrWBmjV2osQ9pQhjLY2MmYsru9dkZ5oSxpHYezpAAocv3pAMGf",
  "key41": "58wVgk6MuE7h2hSueR6QE6KGU91ywttYURdsj5SwuMEL3SuM859DFBmXxkdtZdA6dbTskgE5QBwALoWnrQaP3Hn9",
  "key42": "2Ee1S68bGdL3f2tRZ8WNB9QcugWBkENbg33Mhfr4R5VtXtcAe98nJ5via737MUtQdj63BVPjEugkQqiAzCjAwPJF",
  "key43": "2pCcLbgXS1ZDpVD3JRuoNReQ6eWpAvP4boNVBj1u9RpdPdmuuRJcsX6ctGsKovBtQhgTVUkMBo6sRG43iVxkTVYU",
  "key44": "2yfgNUQRagvPny37Ko49jo6nD4vibwQ3jBzDGumH8k7pvvWFQETGkEeEFx16WwGNPDPJ7kK1N5ujYoDJV3XcaZ9o"
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
