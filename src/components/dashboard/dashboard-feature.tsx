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
    "2nrmohCkfTH4Qu8YYi7qCRnL7P52wAvcWPdzHWchzmoQPEPA8xmoSSKWxwgEcBFtJUQWaVukyPJ253Sj8LNWkmbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXefD6wL1D9H949FGvwaxTNxwEaHD2Jqt3gJzqrxF53eneMVdE8ezNvrpoHmBjgjs8z6gCTLs46GK3QkxwnqhrU",
  "key1": "5cM8DBaNSh3sZ257zdGnTpVZ5ZAZNrfeWS7fxZpqQ2YtmWNep3HKnghdk13PZTBvshwCTXkjJAmTr2zZyYuMSAYc",
  "key2": "2HLxake9hfVTPYiYBP4r3m6aHye9bUpWejMkyPp1VfpuxnJTJASSonYranpCUBE4EUboMzDpm5WN7xeE98PPU8A8",
  "key3": "5bihNwGZfjKRGYVbDozZcrhgTeeGE7hRqNgkcChGwQUYEF2NXs47ZAoLCj2kU9CdF7UmU1oWYaqDohNPBSsKGivZ",
  "key4": "nXrZs1JYgdXe6FTWsz1vwnyGH4GLp2LMuCJfukQX3Yzyq5ZH7o93gitNcEj3spwpEQDAPxPbCGTRdpVNSpxhdyi",
  "key5": "5SUU58uo8zUHMB7yE6qb2xNgZYaWe3QXvqSSXSg9U1mW3fFh4Uf51TtZG3bGVusjeZ83WPVGgtbAouw6M9ZFcYxU",
  "key6": "WWYPEhTm7nCFRoKk2V56gxLNWuM8LXLWJw49bhNErdAZQe9Bm9eqoVh9mmk8hKXBszV2jhrBdihkVGWJfHTpPeP",
  "key7": "tGUjNgLRhGL6p1McWA6iJ93DsBtQi8dwYSYiBH2TZjEe5Lu8nL8De76N3ysVSEZjMe6j1752PdNGHTnHCfB94WC",
  "key8": "3dzRFJhB3D4MdsYgtgAhJQ2ECGmUaYG3Cao7zjHdNAqWddwKopGMU7x9eJVxQr7KhrTG1outeyvZJeTahhJKhh9Q",
  "key9": "5TM6NydyTymwh6Dk6wsYdyJ5jrY2jq7AB2m8hVQoBc3F8i3v1Q1t75Axfvxh5db8AMpxEgwrfiryc4buKG5qV34m",
  "key10": "kuvZq8byeEkg9JTeGnhJsXKKDpjrh3QLpu8uqDqREWwdem1584GjXS64j2vkQn2Gvuy4qRaC9Dg6CMKrERS85b3",
  "key11": "5JoYJahd45Er96ABqt9RjFsfYeUge4vJU5jUrVcfJkw1GfUdWB8Rrj2ZfLWtpu2ocoEKfqVCMTSxVqs9bH2BgXNG",
  "key12": "2RXxsa6BtA3BXrMu9HPBYXzuRTmizg2rmGZCZVNS6dRvgvVfjJWDQzTXi2hkzb7M46v4CTzvemMN5PPt5J9Z6bip",
  "key13": "3C9mg2iH6SSoMmLQSgw4phKM1d4higJrd9yqTL1QqHLtkiQ4GmHRehyjd6KvVAVerZcXaN19jUgrAVe9EV4n8N3B",
  "key14": "4Hzi9AUytG7abfLz9W4c9ngv3wdx5Tmpi1cs8RLFkkz4An23ukm9SHXrRjctXD5Sg61JGKf2GCCkopEf67pEbJhv",
  "key15": "665ZmFXrBbSD9W7yzePGmGSkac8AiWkECkhMx1HPRkx6KhLFU2w42Gxc4KRvf8RqfoaS1wZkWSjJGYscpz7gJC75",
  "key16": "3ZSPzQ4fHXXudeBgutQs87x3oitsahb6V8Qz8eYXypvD9pMyiv9rhfpPzVUX46qGR59h88W9SgLBJu1jwRXhSEA2",
  "key17": "2BzrJuSWgiDxM9hRqGKRFHV89tZRv4xibQC7zPHj5y63nATBThxLruXpARedEkB9aH2i4Xxtmc8Tkw4Hdb8AeHG5",
  "key18": "3eVAt6q4572w4JXYMfcVJ6ktQdFuEpDps4z1TkfoLsozUJyHLV3aqFyMJX36uSX2JtHB5EFcmxxMC6DaDyfsJzMa",
  "key19": "5G5cWrG6fsqXAthxQLjBMzWV8bn4G7m78HuSXnuNPfRjRDwJFeo1gcJkZArjKBnDHb6QfWurMuXsTyuLfwkdAKP4",
  "key20": "qjg6DyTpkDcECVBruWHHRKyAwYmDeijnFxX2aXmzUounDEJPkLzj5moo79tnDijjq9v6JEgvDLn9CKuU69BZT5b",
  "key21": "nL8VPN1EvHAgkuWceZvQRLFrRjHLs7HiHtfftiJwMeAPytj3zDZ7tVTxX9k4W5w9vhCfxuHFm1oa3Ds7VvdUp2c",
  "key22": "38Vf1bxSUNSok7xrjirCun2772e1XYmBR1EqBvZHnRbQVVMGmmHECp9pVUDwvzi4ZH7YE11MW9v7ZaHyZAr5UHDe",
  "key23": "5ojhxMuCUPW7CNa3KMjXSYqYJUF28GnUotScL17JynJbJ6TShygW672qXqS59DNjPBKD8dUqxsCNR5JgVD6tLE1t",
  "key24": "4f2oKj6ErTjc4k1QZRaWHFqNFZENiU1cnKqqjTXooWECTzo7sxthuMbMwprBH6DS7w5FHQNr6Q2mhgwtrgBtbLiy",
  "key25": "3GCi9rskaYgok6RN7S8a9MCVuMPfXzup3xzhGaNcMsR1v9gS6ZyxKZWRs9LhWst7XTzCBpmtTbj49GfN8u9Qtxwc",
  "key26": "5NNaYnPE5tU51hY2b8MkyrgyFeEuYD1bDyJWNCAugmKk84EkV2bH2FQwfb1oSE5xREnLWXpRLVVqe9zmYv7uSSfz"
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
