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
    "2nPJFQfNHpnD7zBDatQJz47ZJVSkPrrjhvHdLdzs5oaGsqXCT2J5Zz8oC3WkBKJ4j2nxUvQdDpPLDFefs9vzTDDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tTueuFya4wzpRf46ihJqghiV99uWGc55J8cR9rt9ymyi4vQ9CNZGQhXpDT6cZgiHi7v6jdUNhB2xRvhEP31QFdn",
  "key1": "3X4HmRiJ6CtAvoLx6FtuiWPBwQTFCKZmnYGpay7cuQu7ATweDcSUXcRsEU2kDcM9tNsHuyWQPFbFzfAjDr7jvRCK",
  "key2": "7RoLKUTK6U7U59jYqCcqP9nGMeayttgeVtJR5TB9YjZbnetJW8bfNpWG2BAdJtfqQyAhDrESPLVz78EbMFG5t44",
  "key3": "4Ld1pPoLZbaj5BJ7XX5sMueABUEYB1n4ubL6nhzj4aeTJERKh7mJGLqnpwUhxcrUh3CiaUZ2uskFac4ueqahNkNi",
  "key4": "5L4yTinLUdfhaEp8px6mM7S1eyz4vv7kJD12iBDeLhjFkP35EwRk8UeGRqo1TKsTi8aDQuHbNbHntqCHVtLBgsWJ",
  "key5": "2tk2Q8wHLfFWVPWPGhCrMdSgABDveoHEbbd1fx2UdB7oFUV4xDvBq2Lud3kdGfqSw5X13unotJuq2zEG5nWEyqFK",
  "key6": "5xPNmu5P8muQNMWoprdRGgDt4ZTPZZsEuUDqsg17Q3itRLnzoKo1jWeGj7gTQGhmuqZ169ESTNUo5CV3ceQ7ExRs",
  "key7": "2MoLc9QbJuUVcYfurZ4EmYQvemow1RsjDZ4u6UFfbEUxtaAZjTSjga55ki2HTSjJ7XHCiDoixgBSKT1vaknFxZzV",
  "key8": "ZR6yvhroWYffz1qEzZWJTv8BuSthLV5uVUc12zufeN69oXNkGoURo3qPMB64F9w5jRieu9ziVmDaRtiVssJSNTd",
  "key9": "3cR35zXXvP6QhkbAsDu9BrYo8dbodbU44sQmJDFFEk9uNmmeHHWmwLyyeCJyJ12bjzdupNgRwrt6LJNgkc7ZZhcX",
  "key10": "45ZkS9KXFXNSAnyd3h8p6Dn3x2idPJmkN7No9gbwUvGvez5qjKiyG4kNGS169Khp2Gntj4bih92sU1Pv9zUwj7PN",
  "key11": "5tdskRfUqaJ4AsnrEoum5kwV39JcsUTbXSePwPwP1Mtip7rxakLaMYBN4fcc4Gi5KXzE4HGSHcq1smWzxfN3SWy6",
  "key12": "2RbdTbTRoBUk84eT1hxkdYGhUbA4Eufxj8R8P9x85z7xYF98VCXyeV7wUdw6GTJ1iNyDc9KX5cs4FLkJECqtcHgD",
  "key13": "2RRq7uEK8PoQWnV5LY9kY7ancGfQheLHDTBkiLjAtsMzspLtfcnyUnAXLuRqy44V1txzA4s13GzYKNgeKqJEgsUt",
  "key14": "4R5u4UpFmVCYHayrezJxipoX9CXHDyFhJ3QEAPG7EUwt1gPAkHLEfNdAKvCz9E77hPfoEkaUEkehhoVYh2wxXu4G",
  "key15": "4bR3WqoF4jQFgrM1yB2yKJ6k7LrvT4wdDMuNk9rqWT8UovrupwTygS18s5FJzbkU6BezJf5VHSwoLHgxfzeinQqr",
  "key16": "q4HQi9Jsr9ueKdqMJHto9mXTP5QfXkmaE9ZSfYDV4xd9jJV2HQB1LqCTyfMDri2eosQiPBERa5Uvtb1kNCqmn6u",
  "key17": "2ZXS6rtxfbhKkUR78X7fpiy8Jsy9YhpKaY2XkbLjvGX1r3VHMWKYRYQ1cgEvx7Uckd9Tx6YkxTgvK65wCfgmW9DX",
  "key18": "YBNSqPwiv1vFMuracmudt8shtaDN19wC7XbAfrw2sW97ceVLWYE1rToebnQYdNJPVz6RChcfCyBSw5QFV2U6hCN",
  "key19": "5hGSKq5R6KQ9fnFReRUjUtFihcf1oxbG5MfiYqG2cgcTZcjDoUGgpCAnA47e6VDuJgNt5PyA5mrLdKugAfH44vaC",
  "key20": "4Z5xqyJBNv63Y5xShSGU2hAVyWquDegGFv5N4dxFeqKKqCSd2rciXS6J78zV9YUBQdRrYFGtrF4xiPdyS1wfr9QJ",
  "key21": "5VK4wUD5teSbxV1DPWXitvodyXRS1mkSxX89obeTyy51DoyArcNsSvxUy7aybmAacstZhZbd5seSGax8YS1wnuq6",
  "key22": "54Xf6pHq7F3w7ZNAymy8b45bxmGhiTgKRXS4wFvevmPJbTmBpbXkzQjikCnhUtdtiXajX9ee14cEtiBkX5eSC7Bz",
  "key23": "21brENJt9uwy2CGDWxmc7K7jgt6oCo72NSPMNBFvXnQWNxGxWFGkwMyNCMLjk9McHhBdbocPS81K2ixFYp18svF2",
  "key24": "T1w6pKi25fUmjNUft9kYRJBnkyW3yXvS2pVreScGznm5tgKVbBu6DwKCZrQiBWe56QyVNC4Noz5DiWw7N9iAwpC",
  "key25": "25GBLumMphGQuqTb1m1yNmyFniCNmGv1kbvPWVoorBSNMy25JWcYaVzXwzS8KnZSiP55Xer2kf9aXR45f9paqYM6",
  "key26": "4eFzHZW7XsAW9u65PPUQv6jhVnnm53JAPTSLw1exnbg1y4QyqHbeEbS7UTnbEsJW8qCaPBjVseq8VfWBsYfiXHP1",
  "key27": "2aKhqSsFgEhJUkW5w7aYPuKzaDFJQQaNrT5k1i2mjG3kRtsiXgegvz6ohQqN3panXuvJL73rfPmJJdyUYNtPWfWs",
  "key28": "4sJvwTYxnkcTeTGmTLCvhE8EsV4nCQiDm2MSGzmFmhfn4799eDqVnyWEzQsgbYgVrMHTYK5agCbPrgCF4WWDqKbw",
  "key29": "3ASsXvCW1xvToyh9EmXadqm7HGDL8RaM7WaEfsXrNYezki4QHMtdFbzBnFTY8Tvf7DCvQqYB8LaC21fNVDEj52te"
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
