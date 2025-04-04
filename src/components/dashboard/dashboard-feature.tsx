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
    "31fKsqrDfWxya1bM7gYEBUd65njjHvofnRRGquxZmrUmX8z1hzDh5FJhGrB6hxeiAuvc5ZL2zS5wTpZgEvbSSNiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GtYwdUWvUwdRCiQshHGsFX7ALgJsECJFBGFR5MFvtoSGa9SP1fuSt1XopXYs5kt4bEuzjxGxngyA3736jXNQBzT",
  "key1": "2XqEmUNn8HxB9Z6gbuot8NpSJBBsdF7nxZ5Kg1FpWvHhHufEDUYUVtNArCSTunyXoDi7ED9Mzjsg64qjKJk8BTzG",
  "key2": "2whD6q3wLi3TR9ansefmNgcthsoKSzJKVBhhiQgam8DEnKa4hberyirJgjTx4p2WxcNywXcpUv3ff48ViD98HxDq",
  "key3": "5UHE7rjMvC9gNqJHa8fd1vbSsRkwxCUyZFr9vEegnrV5zEUDETagYc6GbUhssUFjHccxuivHqr1zW8NHihYCTWts",
  "key4": "5PiX9gLqNE8VGbSM5uXFcXoSh324vtoPgBxzSWHTCd1rizki9xeRaJ6uNgVNWS3ymntiCH9saF7yUWuyFXGty5tP",
  "key5": "3JTXwGp2MdMmW7qzPDc3CfnuAXQVgYiedpJ3RZneUBUnCQud759VJVk9M2tdLsgFe1MUqdmRoWZ28SbgaDgpN73g",
  "key6": "2rX1n8rwdpNbSdKpksHU3ynaaHac8cRpVNRpFdaWyqVXAJjPeYEhx7nXrqT9f2HbXjFgN4bx1wiHvtz3xdZkYBm2",
  "key7": "4cft9KmCcwLo4MNY4BmeQAr3WcYYtPtr9TLb73peikjmaNtS3oq9NeiGDuxT6po3rAFxjuP3d68vzUKE5f4B37Wd",
  "key8": "21bqQs2JnQDHi9UTu9PSJiaDMtoS3eCdxqSRRgPV8xMiBfdBRKsETfUeVCBhR8FNxooCJtzz3sqdEHEd6zFojA5u",
  "key9": "7EjzsRrDbbCwbTxG6T6YUJKWsGoqkgqPF1m8PdetaZQv9pjqLNrs6xNZMA5WP327hJsVZCb22y8Zaj9hAfZYMHY",
  "key10": "2meSMAEXnPyv35858mrFhR4bqxmVJQvxj69GNqE9tS88R9apFa8GAgMDUz8vEVhcgDkxHD3CsHNaKxN9uy8Z34d2",
  "key11": "4YzvKmuNeyF971GFPFvi4dBw9yC7zXA241pxFeprdqxWoJK3dKF2F2hqTb6eXr5vdC6dXqTgAdb4XCHhyArqFsuF",
  "key12": "2diE4B3dJV2q2kNET6X7z3anY9Kvy6T4ukyzbrX4NiTonjELpafNBXxdNensNjUfoMBKeK9zKtfW1QaafTqzFa2c",
  "key13": "3Wd9j9zYVJfeTmEBmUp8smEFHQqWdGsTKHG3zPUSAUP76ph9PAVfB1z4MyRMWFnfMo33X6iUC2cGWda3RYNpX6zK",
  "key14": "2VJW36mNjrsiwpM8oLi2vEJPHcopHzierSwLntVRL2pQ8UpR1KpjHTbs7AgoA7CWV4P8TW9BWMWpCZVa9gUHBDun",
  "key15": "4jCkEVkL43x9Uw7uPY5MDfh657FDyH6RMpimorCzu961E8pDUDGmjSoGXT3sQmqa22L9YJYVrHYCEZRhHLzDd5pE",
  "key16": "2LbEAPHVbvcHpN4EfN9iTiuboZTq2UXQMNwLCVtjGje56kMkfcvym8DwwGeRxXigkReW8BmZb4d2qeSEcDYx72cd",
  "key17": "5PjXJgNjYsQug6fQnAv7ZACELnnCDTf5XmiZPfoQ3oA7Rm2Zgxzbwh3gPBViAFMMMMgqNhaePuX8NgWaNV82kZGJ",
  "key18": "25pwXfecvdMEkdhYzuBY9nn3zQFLUHT9okWzx6oWoXeKMXshEBWRymgE2QoppSXD2ZYocS9N1wMEDpXPysqSwRbe",
  "key19": "K1UuASYpnWBLAHHWdGedvhF24Pp93hEXHUTCqYUevzow3QQy5KaRnQ1oFCfnk3jZKPKDLcBYLoKh7HTKqJ5PNJ6",
  "key20": "5UxQBcospRyktxSKHwncS7RHxDMXRCFhWwivrVQsrE5hu2ReY5Crx4SsdqQvDqBvWJqyH4Ki3cqjhrCc19cN1uiC",
  "key21": "2UqqRHjBggtYzvV2gjEbRhJD6f26Lk4jPecReSKeQMimxBz4umFS7MFdw4YYhpAzx2ceRmH6bzS2XQLrx2VoXSBj",
  "key22": "2BAo55EDoMZQZja3sqPK3Y38Ld5eaE7qXHdNF36UfZpDRVU5RPCRoqAUT1VyqAf3wHQ8Fy9M2jSw3HNWvqdAgkqe",
  "key23": "4tJ71a6KpXMWZt85CM5KjDwtqPfA3b4VBAdvtPRV2Z5epjeoAJM1vWMUmT2gNAmQLZXta1mRhZqKjoyrgQxxWi4S",
  "key24": "3YdufgMUhpGGZkn9GmdQfMGfngumJSqiXaecCHom9kz8JccjnDyKpJEykRuMSGfTVT4XrRqHLTRGYfiBmEU6dydR",
  "key25": "3RRcskBjD2bA1RNqbqCyuvWmhAkmwjPdmswgSB1hk8RuAQDWVw1rfwn9EPTq3sTVYXUFayxu4jjopANt2wFkDVQv"
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
