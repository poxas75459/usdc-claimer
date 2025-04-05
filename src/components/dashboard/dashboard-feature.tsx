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
    "5L8Vg1z2LGyhg5eyoNTSWry3FpAVV9tCyKNkA7s2eXW6pM3B3G8fsG4rCVxaJeG11KSg5AYzrGh5ANiFmJjahFGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhyAQ2cSh4Tv31kK4fpbzayAH3qxSqPFFUmKRUhPZFPv3GNDdMC5FXRy8REb2j7hBVjWUXkx372P9N3Q9xDKYrW",
  "key1": "2mekgm4FVNYLJ45wnT27fqtCa3voJf9efJDK8SLhNPtGC865KGYZbzLxYM9e6Mq7VVevH3eaR9GUsj1dMtqowD4w",
  "key2": "3tgvL3mJYuYFghQeDtumvagJExrS4bjAAxBdrJuFkEDoSpKB26SMxzATUMxQY1gQ93H6xXuHy9vhKRhfKfUDWAMK",
  "key3": "5HfYWx9DVodYXhMqvqCB8t32LhMc5FUgrjgDY6dfotbWVW44cbbqEo76EzpS1a8rLbgTsN5Cmzm5122nX9LrxH8",
  "key4": "2vCKPazAXroa92gQczcYauNAxiMZ15A5EjtbhVusFtAjcYZJ7bxXhdcafXeLA8Mygaz5sth2Lsz49wbiudVCsMgk",
  "key5": "3rE1jHbtz2rWzUACXFm7AmjuumkuqPBvQqJASUKcjYvRMJPxrLFSnk7xJCaLw6WATDiW59C6k6q9LgLWoB47n91B",
  "key6": "36P7cjSBZxcmm6S2CrJoo4VhLSDgdgmbBQb3BdScu8wekTpRmhSfxs55X1PgH2K1UjPFGKcTgVm74nYRKTP8vrAL",
  "key7": "i7pPm6AM9jrPapFmc6ytD5ronvskwvfudRR7cm5JLqFj8dQfRSoA4Ddr9kHgRnuAAXvD7VemeFmoxnXuWX5AcPr",
  "key8": "4srM1QkscJPq9wfgBV1xwbdejzanEkvivUn5A97YGk4qD7UbnJBA2WXkNrhRwWSsxMzG8RKq3TaKK9NqHqssvtGD",
  "key9": "5Zhi5Q5mAwmWo61LNWWrKpfBezi1mUo4X8pRJ8Tj5w33cDBcrycYg6RmUUN8C4rDfcopr7aCsyxNjffM6zRison1",
  "key10": "hgGyLNjgoVmzJdx9RJsYT9aq5Ytm9jjFpcDkKuPDR3FSjYTkJuLGFdyvJw3mvMrkTENcj8YJ6raf8BoZLaDCkyt",
  "key11": "3tXpQVZkFUQJah3cqRnXVxr9mrF1dfcr2hq4WA1HExAUGQD1qD8YD7AdEZyu8wA4AKcuAx1i9w2rCqt1BmkGgD9R",
  "key12": "BdKtHQxxfQANqE4Dyt9ps4unJv3mYWqFMF18PVLUc4JEt3DguaXAN1ZxWnwh3zr7BkA9L8igSHNuCaKBbrhufEf",
  "key13": "4jKUVyUzUd5HS1PJYkb3r8Fwfadvmkn4Hoef5K8GnofgDpLAsBPvoEqcUwVn9VyzXbdtr6QF4mSqgJtgHRDb1jk8",
  "key14": "4Tamdj5fh96S5yHgKNRuhA1HC5duR9Sug8aL98LdJusheFm7avyKLhvLMSkxFW4N4tZwV9kL9N4DaV6eCYAh1WAj",
  "key15": "5fwxq2fJGcZXAeosm58rNiVfvrntAE9TagLcDcZdjiquzQn6m9qUM6VhiiTJRkHobge5FzZYzvDAxVCC7PM5mx1e",
  "key16": "4dH6RnM8m5HwNRuXoRtcELfPJaKE63kuAwqYh6f5vdM7T1kHckE9voBXxM2mYtNghij3cejLkjDKcFEToCjEG4C3",
  "key17": "eHFjWNgZ3FMPJ9VfUcccZLgdXaRe7f7zVhLR4QCHZ37b5FYLDg427XbrKasR88Le2HipR376KJE7jKHEsvk4oZE",
  "key18": "gg9j3Y97Gt219AVakGumFw9rRnACad1mZN2b3zhtXVH3rgheLdRRvmzcdBJAnFXsxLEpwhow9dJVh8EMeXquS9P",
  "key19": "2nqbewjWgmaTiVbhV9qor6J2h74XKuEKzY9QvqX6pJ6f76QXJfGZpa1oB1UnRvMvmyuYM9KoQfNYQgD2piaHQhWw",
  "key20": "it7mT7xkgfRV5duo25P6BUDj92sPD4doswsLohS8w9585RZb9eKyk46PEsPvshgoK64qZovuXuZC1K17ZaD4t4r",
  "key21": "2AqdFs7tahCchERUVp5oTCQp5UuRqwSqzPAi6fG7jyfzox2GvruzH5JwRKnhVAJU9KNaWVZHRFvsPmpk3UnPSm1Q",
  "key22": "26s1ou1Fvkr7Sw8ntJFfSVzn9zVSN4UJCLXT41ocWGpmUeS1uNrChxpav4btBLpMPDSzjVCHdh6BTnmM2kRBcr51",
  "key23": "4Nvx83z39aRqorc9rX3UipcYTSEoxfydPDWFnamjTxpwjoNLuXpbCPZH8ffULdYyXxrYjCVvuCE51UA4ho95sx8N",
  "key24": "5Dd2wQVra1DNNiJpAh3rP35CT4k6hiKL2LxGzTZq3dVLSujp4NavVdMrrd1rVJQYA1aKZvNArdfgcZvt6EG3EY5e",
  "key25": "5sgoN32TgRJRccbNMJtTTkFbZYQ6fFXDYLN9Cib4HBE9bP2oXtfuLyB8Jxo9kq3beCcJEJKZM68hygyeZLf4T77W",
  "key26": "2MzoFjuoiuaVxHgVybpBVZvxNofd8C5vYX6pbfBVUvTew3Q73kf2SETTRV9ed7Uem41z7qqZ8ineMceismBpyDCa",
  "key27": "3F6NjrrtTt8cYeBTSwC5P3ZUqYYbXQURxeHjBPJ3kYMicfejENquHQuWZW3h5PDD48jzGceSb82HpoN3pw8BFRSD",
  "key28": "i1f4UK3MS4zxtLkyxxvkP8hs6daH4EifJ9odiDPuTPDuhZo8vn4GgXkWX4sa5EBLmidQxtVqcJPNgnYmss4NshV",
  "key29": "2viTZrDoeEmqVuTwYTgjTNhxrSj7oKAyvEETzNitDwgE7EXCyMabdYp592VLu1ukCmUgToRDjHn5NKefNTMNvB4e"
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
