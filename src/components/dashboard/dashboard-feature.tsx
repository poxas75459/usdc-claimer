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
    "5BNq7tpSfZy2fV8c8oxwAgcz8DFM8Wn8vkgSAcS4GXW2AorsurcSdnqcpsHu48vF91FUJyR3qDykyUcEwkXcStAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36MhHjaqkhovy9bK9NsysPfsUKmC2HV7zP6KwimovYMHS9pBTxrYWn44KquzvTH6QAWpCJc5MJWToGYDbwozPXnv",
  "key1": "j1vEwerAc7SqBRrbRkbPaDSXKV72gdHJHpjgiUkMR1AyVm4SbSfp2PKk18RtzHKAXU3dc6WKauq4SX2n7avLM2f",
  "key2": "4igQERgjkWBM315EXJY2CFYE2GRxuUxiyRnRRnyCq6F4ShLPEjeDESabtV55KJNxRqQFyiHQaPsumrZdgdvBCr3z",
  "key3": "64ss5kr1tWKGYravVQo5qr5EgwePwMdKCCKbZGe8ghwKqppkZFzEhPX6zxR7LS3Tz1MXNdjh2arnYCbhyCHCwryA",
  "key4": "4ScQKPfQjsWHPeutagM8WAPNg3fyYnNn7ysNABnjwTJaP4TChVtXrxYdBpVFndoBxNMymrdesVrzJbmge3jMrVPB",
  "key5": "54BbnbHynrvjNoahwQqnvrfT96SWTgmDtpXCGtu3xsru6A37Lqx9hHen3SJwcX7Pfq6aAh8brkd9hWYc7AscBdLZ",
  "key6": "5j1CGGJeoTrdXNxPjXSXzwGqERycnBp6JtaA3UhKTXsZmBRXnegyai9YgUuL4VbrrFKht7jFYdnQYbkmbLLv639Z",
  "key7": "ZqTAgWNreUsBrvJ7YR7KfNHrXH24T8rY5tnZCeaHEkdS2m3G3hpWQBTN6XYcetjeXnJJfaeJ2Y9VuviBmBzZmfQ",
  "key8": "4PYAYFQd71pfqu9vr52UazHYhmEggxw7fvapFU5Pmjjk5mRyV28bs7J9s1yU2sBZV7LJaiLsvnHCLbC3XyewHMbx",
  "key9": "C3Uyoq9w1tj9LnUsgGnp6wmphrb9iNUySsTA9GwvnHXFhhvAnMWTbSzgJZezRnXhbte3fbMP9GAY1Jvz2vkPxCo",
  "key10": "GqPUJgq9FWKEMR66KSBXMsjTQNVe9eUbcH27iAniiEB3NTF7Gv9CrWKrRjf1pssCP7aiahhTH4JWE4AdnhRWUTq",
  "key11": "29mgbRZke8BGPB42VAHgrFFGfXeMXnj4zZpx5ZYGuu8DtWRWX8V91vMmbjynCNzmXmh6QdRcPYT5x6yvsVJahwn4",
  "key12": "3f77EQSg3DBFVuwwxkezedYRvw6Jzs1JeD1MJ4XbUW8LEP5L8aHjsaZyViG5U516n1zkPfxjYoxVFErZeVw3Swpn",
  "key13": "5A18BivWJbRJMgnHoAAF9nHrkhGpByLFtPnbDNM8rCy2Cfq3BFNABu1Ey1Nx5eAB1YUsKPuT7tcZAiZaGoYVx7QX",
  "key14": "5ejV3HpZ8dVGjeYD9m4v1pDWe9rYmNjphwWHUoCt8Fk4PXNk3U5KAmb89Ryzo6LUJAKkCNRkDCXYmBG7XUwoaLqp",
  "key15": "3huYDECzGpnEuYaMjSWUu52baU1pPW9Nw1PzNMVXC6RweERaBNswdRj3c9KQujaq4q8qsMmgZzXdnoxvkonGWWN",
  "key16": "2tAn8ykuWcWaN5qXKb3ooCBvUDWd4gbJU1pexLyqwU6iL2ZXw9pwdpWScHvKmDxG1AaDisAZ9HpQzGKFFM29Rrcd",
  "key17": "2Xqe9BiUGbnB1v2D4esdggEx9LgGD6MRPL4As7D4ssTkrw8cB3Fe1dMkZT8ZhYiLEPyay58xeJDUKeqFhjVNtb4J",
  "key18": "S8MgHwpFoW9NHfdMKGojM2c3wNqi7MeY4uQ7qbVkCd1bruRRY3EwzckfWmkcMvvEqiN96RsvH7RdyPEjJExXYvc",
  "key19": "2YCerGqZWQPADVzFiYgN5XqF7FpCNVxnj3QLM7wHfqeLT9XQApzVDbprAc2bZijUMKFBtCyS1mLecoeWVwJ9YpUn",
  "key20": "5i8nv38U5YhGZgEkV1MHkyMgRPxq4fTcNkZGnZBDieYRrnCiDSnVu7saLNbn9Lx4DJPpu5WMXh6Q65np4cC3JYpu",
  "key21": "4QZVdrQBfQphmCXHLQtf6xYLA6Bs97dYXJEP8TrS4KU6RXzKSwMM3Ggxb2yZveJdEBdpaHH2LEReCT9M5LqHzXDr",
  "key22": "oGPnW1utf88MarkTvY6YQs4uAwuHf8owpTT4AKx9VS2cWCU7RjQxP8hzkSvtUTh4Sf1kyWCWcUyyrMSeukj25wn",
  "key23": "QqTusGdcCBtQJrj7vdo6oastqtQUbz21UAupt1kN14DMaUVnKMJa88crAR7mw8KjY8mxL6Fd1bmKA1kkTtHGwbt",
  "key24": "vqgZwHJEFkxaWsHimop1BaPS2XSxNmZgDPoZ9jCMgxT7zCzPCnjSwCZcKohDYwinMuuHTrfUT3YtM2vnPtfoPuP"
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
