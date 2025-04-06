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
    "5TxZNoqkECJVMNYvMtKhotmKutmzTzGV9TTiFpwYvmST2wC4hmWFqohMP3PecYFSGXjudVcvcpNzrFhKjaMxFFmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tu7cuTcXrSacgvKVXA57RT3BFRECmiLf4698SmUcKpEVkcKRCo28ZpthUYmzW58mb8DgGVeTFdiH2NAK4qGtHek",
  "key1": "oYSqBoeBx9aypwCTWVsB84JBQvmQpzBTVfjbE47niSaFcvLKJnKMaTcZy8yzdgicicZWWPVA59FfezmgNUNxCsN",
  "key2": "4XGRqMt5K6PhfuxuvBB6w7Lpqfqa3WscsVVxGs3upRWq62dpzzMkYZ99Mpn4dEquTBdVJV2R5tYariXWW1FkTf8g",
  "key3": "4AKYJS6Axg9XPoPcYfcM8r7azCXyGF12TXaNZkfHJmCe6wp2WZ3mg6kEJN1zYPBvjZrn69VNfJrmAvCodvTCooAD",
  "key4": "2igr9SPqANHnLyj81KembJCZJ91kTc6zYMMaK8AJBSuFtkXP16XDBu4LeicRp11bwm62Q5gh4H7B1Crv4Ab1bnFH",
  "key5": "hz2TZ3fDYZuvNmwZjzN8eq5hQxUskEAVrNpyaqhSm9AXib5VDLLeGxz3SVSkdXHc373mpphMrz3hrxiGkQWUEG1",
  "key6": "3Yv5fwXDpNJEan8CTTx3Sxg3zzYzaaRhWAijwcKtMVh8Vo8JoXPrJnAG2KQ8Pp13CL7t1GLwLQ7TQ7nrwr5cc4qd",
  "key7": "arJw6GJdWWK39uLHmidAsyrmBRaJFUTZMDEPmQfzMUiNiHjCxhqrTsTJf4ebkmi49UxhKkj5ty9uEq4qtbKZtmx",
  "key8": "5pKbVszDM7BLwbuaNCVpwbPALVfzRn8N6gz4nWpRk1YShtq7KUYFRsX61Jiex5HMEoUZCkW7ycz1eEPK86f2tfcv",
  "key9": "569NfSTxvizjVE12Nfmk42dLMv3iNLDXwAVVBaGe8MtrJKyp7Ukh1MSa9tGbW4rEYwqJecuYq9GHmYaHB5jRTmjU",
  "key10": "4b2a2UCkqF9CsbC3s3cJijzN57LGYNWZcg2Eovque7bS7zYcCHzfGKdJoYCR1UsM5fbXMyiiSBiureskrhVot2E6",
  "key11": "63XnyoBTdbCQxWRgJRJo4oEi7aAXrSoGa5pWRkCP76TGG51SuA8HhgtDhaunZ25MzwBwDfxd5kfPChS53SQDxHN9",
  "key12": "3qwFXEzfh8i8VG2gbeUGZbch9Ae3vM8tuDPep7F8WnapqNhWV3qkPcA2MK1kacZmnAD64KAqRcP6AbBBYYscfrM2",
  "key13": "RPVpsETYdBNdu1mnr71VipSdvntj14Rz9HjMYp6XxoQXhiAdtHcd6hAxkgtLqZCoS5gZcsN4MVCp7VhvxpAxSFz",
  "key14": "JADBRTBtfwXp97KFkkBsikVskNAzNLBRC3K43mDT2seCJav6tQ2ss9dGjLjLkpddmSt2i1wj3ZvZUFZ2MAUvkUV",
  "key15": "3epyMgxqGHDDousF2qMxukD7Gfcu22YfxuLThxX2vaFWd7mDWUcerUn8q3f1TYwaCGs41P96RvH5buQ2ZT8826TL",
  "key16": "4pWJppJQxCeg4v2xcjH9qHVG9JoUyEADvkNXby7jsz8HmrUdLx4PhjD64hBbZu1hEUgbP2cnXtedA1EE7QL6LXeT",
  "key17": "2nMhvFZ6Wt7aEEmL7bosZihaGpT5tcQueZC44JMLuVhYjnWVAtGtamqsypwgcqcCbwwCGszdqB8sbeCYFGrkr73r",
  "key18": "59t7ZErZ6ZKrZXSqSZtCK7d3QnWKxMdvgZMPtf8RTZQp8gTvYB35pZcjpdGZnjo6KqsFehS97cUMWDKPUakGGM9k",
  "key19": "3yYqhJr9JWgXrn5tAWZVETTPTzj12YmJYboQnR5yBbmi2STHaxUPaNTWwcKBuy82EjTjvLQiaNTKuqWBrdgFt1RQ",
  "key20": "Yiz9v7USsUnAzYCNypfQjMfffqMYgRn6t7YNj54d3Gf86xpcpVkzE6yGPXyrPGC4m4HnFgJT12JtqJrBdvdyfnY",
  "key21": "2vUgZDSGPyp1voGbSaRocPiYLpcyNgytMuFBcko2CCsxt6t4vNRmbZgfeK8gHNTpKR3jq5b9gTE5hidcon4sYUpc",
  "key22": "dHLDVvUjDsmopzTQxJV1uDL3cPzN6erwL7tncwcoRbe4hvGkDks4PcxVaPeaUM5WGDQUTLEj5TrFGggGUWH5MPD",
  "key23": "3Q4sek6qGQUwXSJTHb4RD6R4EiVU5RJVjgRVKjKYabJptbkDxJu1FKEQo5r1cjPb2JLr2YXfE42YndkhFuqsCoao",
  "key24": "vvfBpFH5qGPc36frx8vYHMtfDM4mtmezW1yr1FmV83koNQFPs5QZCc8AoBmQiy64g3g9Yqd8VgXU7DkP455uCfZ",
  "key25": "4fTUenSe43THA8dFcc8PbNzeTPVJuZ8pt1z3QW82jwPbGXYzRcWQgU8dhGB9CZ2nbnBv8UWGMwhVcTZxuKNzDuUx",
  "key26": "3gv422z8APGGUnxtwFmMGp9Mtw85neWf9anTZj4jD5KRrepMxoS72wVdQdzd3z5axyEgAUoBqBtnxHKotkDvrgZQ",
  "key27": "2ASU2REQ9Nd6JuXWAaw27b6Hx1kGNsqgzAbLyEuCM5L7dAu79MS6foGu1FEi9NKs9k5pXZibqak1fzLzV1CYWLeH",
  "key28": "3itn2fkgJEgfwG8gXGrCjR7p2tuL85CPrM6MoRac9W4JPCy6sDxA9uo21p1iyoJu9Rm9KuMCzYLBsnLeywX5VNKH"
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
