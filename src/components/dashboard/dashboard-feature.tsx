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
    "x8RKLUeD2z6PL2vqKA1JKme2UF2zNRxjBAq8yYbN3XWZTg1iU3jqP3AnsXoQdVdJW5Ho2JthpKszWcaq4LsLe2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ayMD2vYBdRdTBCCRVe7tZ4KMMcUTtDwPacCMkg7MNTcLLNFgsRPsWityd2nCDzUeonjZuJgMsdi12GZVwFZhmG",
  "key1": "2TZ9G7bB2bBc4dNWTKG8iVTdrUDCbV41GZuSBVBAHB697rvQkGJi2shgLTACAHApgsrN1kQfYCheNLxVor7cRmxs",
  "key2": "3oFTzwqW8AT6ABaha2Ac1Ps1taeKGSAz8EsCc2YHwwFgNjZn852MrLaVn9zSQoNknhkQoeiEU4Fef8gQJUQxC4qL",
  "key3": "kMHiJQuhcQk8WMUh4uHo4P6D8B9rg8VRGgvptge8EAK75SmmwoFDVFXPp1FFszsUTYe1uQfMB1U3sF1Hd16T44A",
  "key4": "2t2iSzAZpXyL1hnE8cj4MC6XdWZrT15wpTiMw48bLvSzLTzch6en6CAW5a26NhTfht6K7oxEu7h7V2Sn75spkHjv",
  "key5": "5nvGswe73tcyw91r5swc9SCu8XhJYE5z7fbN57vUKKX7BtBi8NV2cG37C2d6iSpENtU44ULTyNhvXN4QTY1vPeNx",
  "key6": "3VtrcLATp3jZijJddQ4aiDv2qdSCC2BXKBx378igikxzzsdcdcsPRyHowZ9tfppWG2rVw651NTKswdJj9vKceuGv",
  "key7": "3DNz6yuR3Jassr2MEvviyMbdREw5Uky53YvV1s3FsYrPDxDDLstZ3DbExjDwyshF5BGbZCxu4yBHtvR9hKsVsTjN",
  "key8": "4cg4xEY3gTGsmzxNuC8uEP9Jhq5FXkDchHb4paxqA8LCUfzuQ36woVuNB9o7ma6AxGZrhKGgwQpXGi81k5ZfcyvG",
  "key9": "3sBkCPCSvcAWoXnzcnLH6DaHU4oFTUSvnKCmnszg9zFapFvEyLwGkEYM1JJwzDeRFaiggy4gWmJGvB5CLbPsWKEi",
  "key10": "55LoNJr5LknG82rHP6GuuSTFaefZBpx9Svxj65yj9mkLQtfWooqUkD7pcbciyoXSShewg3ZFwi73VuSwC8bUdroc",
  "key11": "pGQnFse6TsoxPSEKBd2gLfaA6Uh93YTuCy8e1epVK2zKswjZ9wyCLdTDwEq8cmYfm6Xh9b3aE53VYb8y8PSudW3",
  "key12": "3p6uUuhavSiSQAANtpk57L52XvhmbJiu1g56tud8LDQs5PtfUJJc3PxUCmnUB9Vj92qxHoB7zi8vZ8UDT1HFfNQ4",
  "key13": "5QCWZ7MQ1yWLRHhnK2Dzdxzt6DanPTdg1fpYyZrBjxif6iJ2Fx68jZaAvgW15CqxEkoV2Qb27oUT3hj2X7dcVLNv",
  "key14": "2PnKeXzbRHRrcyCY6z9Tkx9hN6c2ttgfePePTofHLXQphFfduxh3Xy7koZHtCsRd8ncRiX89UYTcbEvmVcnUG1gM",
  "key15": "33fmfZUKqu5gZ3BqV1r5mcdVLLxyECwWk5UczGDCTn5DNQoLepq5PtEUezakt9SgBp9DkhV5WznbrrqAqyXpV4JV",
  "key16": "5Df8grk8w6KvKdTbWZT7pdCXPtsw2aHSnsEMNuw8nVE2bjiHDpB1MHXYnNXmAbHuYXiRxeTfm9nc23bTQYgkWdQ1",
  "key17": "4zpxqd7iSi4uhQ6KZKinLXkFA95swRT9KQSfq3j3WZ6tm5ATRUneQwyrr6qRdzraCDABgTPsvu6UjjWZQzX4D1o5",
  "key18": "5tG4S6pDsp8TiDxk6WiDvVqPzaZVahJgoudm4Gc1LrNeRC3Q6uYqgJTVZB8uJLFgWpibPcFF49vi49B646zSrWvW",
  "key19": "3UNmNdC9fpCNPu3t7DHvhrm1yAtSqLx46J691nzFfZ1qGghzWUpP3aXDqJd7hPdXC6dtCFjKUCtdXe1aV1FBWKRv",
  "key20": "36YXmPBhu6cEVPmxCz8HjEwwDBdjHgwQbXF2n7fk46J3Z6qJ9UkZrqN1Kr4qiHzr2jicHmZeaDn7oLcMA8VdoP9w",
  "key21": "5KYG6xHQStjPPzNP8gouPfHCmcEJuhnNvNtE3XeLYEnRa3U6grtXPq8LodRnSRXe6ZomQYfugyBKft9qBSKfYH9A",
  "key22": "3yQXNayC1DPJGR26EdKHAi5R3gY2ATerdcpnA9eM5JCf28GK9sJgpSgsrmc4dcZfwAF6W9Sd89YYhej8YQg8Y1qN",
  "key23": "29Z8kwNZziTM8b77CZzJkdTkshLbAaYWjxiY7ysDWYkhBkgdh9zzzvKQ4VBdRgYB9f2n35gb1sNA7XjAmA5hnRtU",
  "key24": "4Wqnbu1GwVwXFri29Jqmr6A4aoR34Z1DH4wfdeKKxVmM5bkXhv1wAHBEhvJwhhUDuSwcZe3EdEqwykss89hextJP",
  "key25": "4C9AQ5HLrmhrPZM7AbTGV6un5yNEDfEanHRGSgoegkf7iF5hQLxWCK2jT4n73cj17BHubcRS9YGn7EfR9ceHUKg5",
  "key26": "ADHJ4wfEHzdXFSSE7qVyxrfoJXbqNErLYiF84NzApMfTWs3GP5hrfejUYzR4krdutYu5sy3zV65N4rzZ89VnrFm",
  "key27": "2MpbMurM8yTh4fa6EQrrcpkq6JngwB1WYWBAzxLD5H4sAxG46Rz7Xf8eznpUNHHghDEsAeNbHWEshLMcz9R2Qo93",
  "key28": "5CbbAU9PZh9ip1uM7jiK3kABn1GWumwfxRHHKwMrEBtG1B8SpfgQrDeVfS2GAqveZydxF6Q9y1xpxAn9x9T1e19p",
  "key29": "4s65Tg8mFxBUzSskP3NxbAXMWhYZgZsAkUh7JGa35UP79LX3DP2ZMozeUPUwvamYPnAdYgw5RoVJjVV4AurF94mg",
  "key30": "X9n5wRZzmwM9Ufq59RZLtDvni21ZA9TPXKWVFbdoVnXjwyexVjHbRP6rQ5m7mmxy3fx4xJmTrUyhK1VXR56GzZc",
  "key31": "2sN4SGra41x3xcXXeNVueSKrzEyTiQmMky4ZPSDFFf4MS1xzPcXwkd2trcBYR3XPqtRWfjRj2mQv3xxbPbWz4TbW",
  "key32": "3mASWjg8p3MHspwYy9tvnfXASq6Doip2z3eyHz1qpVLDBLHv2F9mKGJFhvhxjsSqTjCqkd9DxxPMq9ZQqCdhJzew"
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
