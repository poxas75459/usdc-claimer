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
    "4myCG9VpVduwAFLFW7mDUKizPNedS8iYbztMB6ch3fun7apwUp3CFM9W9Radu2GAdYjdXtTsD8BuGi1b7fcdwCSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfkWofuu1LWpNQJ4KgatgCkX84ebfUn5KbTeEGFQrSLrn8WmX6zqSRewqZcWa9zoBEcjh9hBvmBNCpH4ecM4kdD",
  "key1": "554NLZ7ad8TJxFnvKKXjetgHoQXzMJEWbzqGmyv1WV76nBNvb1wfbZkwbcoQYN2c9Qz8LapZXMyiPyemMsVNHB3g",
  "key2": "5MiaJMDvRSP9xPnpeoBqrUgbcgCUiFGoJ68uiPxqK9VXwDhodNV4KPNraWRaPGrFHuCxKCaLh9A1dJM4xFHrtWCN",
  "key3": "2Whqy3BvQ6wScHjkCH3cp5tbuCxkF8hxmBQzmUC16vanbXNeb33aMFNsyJDja5vedfSYMGzepJQMtxUoEFgeoztS",
  "key4": "3Zgm3icx56SSYKSnvXjTSaDyB1MKiM39b2zLahiAa2sRHRDmQcgg9WPjVFidT5dGeoHYFfUwmuBQ9jx67zd3vNrN",
  "key5": "3sgX66arcpU38rA75jKHvFxYLCriqRoLWxQUc44pe3VD9Ee84sK6LogXGvn5U2hfo6czGJQyLkghJhtv5BFRiccc",
  "key6": "37P47r9H3kZCHbFu4Y5nQoPzboVmpztaMLhVtUYZ2wcRPMefLJ92ZjBP274GF1yRnayVFTzaawBGKTUv2hoHc4Vv",
  "key7": "2TmkiBhrZqK84LkQXMfB865pJQiQdND7bA9cLFV7gMEbyX9B65N7i62cEDkzkUcqYRNpGqWyQgAfokYWVuaipxD2",
  "key8": "21iJDrHabNcMSjmLqhckmcHdiCSiPL8iwcdRPKvHdATTjAswctAPayDY5KYdjn8j2u7seBGSNTxMZNcrQS7ASssg",
  "key9": "3sGA6AXHrPx6WLHX88nEYa7Z8aQieH1yjiEKwMdwiTDTBoFpxs48YnS3TxEktxyy3e5StNQraURXa99HcqeQd5bU",
  "key10": "xxd7Yft5N4SP7vyKW2s97dL68JFz33mSYU55Sc2G3CDn3kkBGL3e4baG5PbKUivBqrbMszVQCfGQHZ69JbLhUhC",
  "key11": "2whgWhCRtmui1J5vsqFeC7XBN2yjzLZ7tEzSTVyHgWjVgCSg1FoDTx91mWv4uacbv4BYf8poTd9bAFTmgesnLg5G",
  "key12": "2sbCAHyrenMBsWs3JEgRpGQWnpzn4UFQiTPaPod4gqv3eE2wGfcXHhasnBhDfgGYeZdwzGs8th9gLyi6LEo3Eb2g",
  "key13": "5wbnGrXKgz7S4YFjNYE7dwiF5iZA6Bso9WAP5Yv6rsCmGgSBQzJTYPxtSxwfh3iom6XfJPDx1WcSqKG5Y4UqugHd",
  "key14": "3FCa54mkBWb8Ec12NVAm2eTdmQWGKomJ4r2C1pt2hBHrPhasLsqwKTrqFPB4oB6wJZMYDyTpjfvvvewbQyN5rewF",
  "key15": "63x27QhxLWSmzQLDrmdnpNUiM5hnzzQund1uLvvZEfkfTAA2KC2Wb67tXJNjkb6bUwvLmykpjLADgXLesuoy2MYH",
  "key16": "3q2DN2uYQZDXQcJ3eGo3wmsbhC1bT92vgCbu5j5juUqtkyMKpH1rxS2YEqn5Nrx1ha17vQkxGBsVwJMRssik2H6s",
  "key17": "2KXU8u7GoBSQjvqBTyUqYmRxbSJcw8vWwcxuQfee39geY6zfAt4MndTMGV5PzRDNLE8Ez8zy5j817xwvV9HsZJ2M",
  "key18": "2G4UNFCFCPTbVUST4M7SVMvx7ZUZw9Wm41pjLrJ4CXkDGAWUNST9yJFs5hPzF1HFMYcnDX3WKazscPc9Uq9v2Th5",
  "key19": "5zP7vMHqqCRArHpGvCJfyJyUtPbHX66P94dMSfoCvUMSUYLELDJV9pukXrvdg7usg3Q6Hmn6zLyNqvJSCdAKEAxr",
  "key20": "3G3WgbQfqRQxmSY722MHbat7qyJFCSTqA8mpUJEnstFYgKNy6VJuScAVS7hjLYFs4aLU5gjWd9FtsSwCkNYmREzh",
  "key21": "2jeDQ7eLzppqMbrL8r8P45mh97GWa4uSmFcz6scDryk8qqSF1L8jw471mD2rW3sspvAG2XDQk4B1u5VF8R8ymjMj",
  "key22": "2zPPjmj5ZfJbhmwhNf371RmbvR6hScVeRAnrhQeAF7AoMTu3wbz2EgYkS3WvGg6kbvQZhr9G6R8AKr5ubhCDhNNE",
  "key23": "5K5A8P9coawfZDxkj7ByAdNLRAmcbYjftgvrAFnCPK5VVEjFdTBtE8TY9ttcKuFjfBMv7JPZ1TdzRwqjUAPQU2YC",
  "key24": "55wGixua7Hpi3zXG8V8ffNg4ShmYZHBeRBMYkuK59g2RaYruzdvpTGn7HfL9HEd2oJtj2TXcihRXAfGwuQHUaqDg",
  "key25": "3hLJm3NQ2x9MhKHnZQzyCqxEnK3sQz74FE5492QUvTVio7xtQz6bg3PUt6ApdSkTJaNLfqNFh3TGB9VmRQ7cytMb",
  "key26": "3qJbR3hC8JeRZE8rF8KcugxLJympJo7DvZHo8GqjT2y4fL95smQMdEQGg1c2NCr4GvBgzaFHJ1tawcr3PTR6BA4Z",
  "key27": "34fn7DXqFDK96vnn9iFdp89fGHyt7sTbkk2iidgpZjZY5EeaRQjRVkWnZ4KneaERKa5HYG8oHnXBdW6mdXw7GRV",
  "key28": "5KXdToPmjLWwnJEAGwZDrbXaYoCUs6EW2RVzvq3hpk4XNjgMh2HM5kYai3GjzG8NPu3pV1WaWfzxKAiiDAgmqAKx",
  "key29": "4MTu1kcyqmVKXzoRR14eKqDybjwqdYg3vYDa3pf7o9H2in7ukYgDZ18gAzohQ34HCFyun1zdFavEWyJPFhkr2Loh",
  "key30": "3xo3QvNadozYygEBJV7uZzHQEuYqWSewuZ5v4RfSHLzQ6eo1ih3KSkQo46eR25Auo3JnSPnr1ZQ66dkyc9J5nbdH",
  "key31": "EWPmo4GoiZjvaM69YpvRvY7fjfDQQcqcKLraBPxeCdE3kjBKTw2eFC7S2nfidDdxvgnNhvYXcSLk1GQjdy5NMzk",
  "key32": "5JBuLkz4W6BXcYhmsQYLNr36rkaHvfGBFNUQtNMaBucZWYtFrkmK3ZXgs3Y1XGSL8ayEzNHcNcbX1Myi6ALQFNuS",
  "key33": "2bWEU2yn4vaBMgxyQKyHN8s6diupDFdfq9LjQxGwSoDNfVGQcoyHESLDrb98RGoWtVmZHEi8AVd6aRKjnF2skrf8",
  "key34": "56ruhd7zGphhuB3QhJY2zy2d22an9pwX2AumMFYLpr5ETCkpArZuvj4hDp5T8fmmqiWHVGJbVCDfsW5CG19EQBu6",
  "key35": "26dDmsiDLiX4iyx7S97MkRigz1RprcJrHzN2RHp6RGsYnoa7XQbQ9j113dnpRGRqBBafUnFyNhAphQ3w5ibLCYSg",
  "key36": "41gzzqT5iYW5sxuWq8bZZ6wsWqx3i9dCdLkW1FLz8fvSt8k2fWmSo2EQp64Uo6VnJsqjAx2kPd9AkT4WkEgVpcn6"
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
