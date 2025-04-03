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
    "2YinxzVVDijnP1WysvwLDuBWDGYB52Bbjz38m3d9D75LrrsW2deXTdwwM4C2txk5fLjwp4Dfomf7AF1n7gGtss8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2niohVLVeiddaUR9JcKLPaK2w397RQLie3vZegYa3vhLxtJFKha9e9ZmKui14mEHRhK6H5TB6RZAchij6FZfPkK8",
  "key1": "3wgJaCTwPJppremQHwkQbqNitB6WV4y9kLHrF99s6LSqEeHCCS3QQJU3ZgpdWasVi28fn57GMp4nNqQDzFL3ULY",
  "key2": "5u9NN1AshhGkgYNaKQFTmKA1kKxKFUuYFoGfBYkLdCGVYVWtHuczUc4Z1rCQgCbKcZezzB5GdFTxdR3RcpHxdEYz",
  "key3": "3JoL9RWjWZed6WEHFmqgF5BzjEzQKkw63Gna4TH7XNUKrGpb4H3A1iGoxcmGvuipqUipaQsFqBGdrfFEqnsFrpAg",
  "key4": "5L9rNwrTcjZ3diyTXgVveF1DgBwCGrHWW1fCeGE95vfDxzkSqYhcipBjXZ9rL7kr83m3Mk8K6xTk6BUvwTo2ftd4",
  "key5": "ojgQAbab7CoFGo9Ut1dVb2vDsgiQTWpNkcakKPQHALtoqJDTwjwBrzsQbmu441Nts7kgAoNRCMZ2TpgZky7tGRc",
  "key6": "4C8K3q1VAe22bMHYAgHVkWr54vJQDU7E6QL3LZt7cdixYyyGxigYsQqoa5689GMgEfLuLVpQXuKC4XwaxbNq5pLm",
  "key7": "4PXgMjZkLPeb7XoFJsgUgGQugpMyabGYK26QimnHqAtyt8kXrwRvgXZLGbeGsNH1qYAx1b2p2HoAw2YCn1DvF5kw",
  "key8": "rQ54dCL9UJCpYryQtYBLzUjHBsoU3w2gNPXQM2uAiCv5hdQ9mMZVBJtHLS62TZ4fDFB6T3a1S6x7sHzo3JMsSx8",
  "key9": "3J4mH6mbw653PjcatHFVX8GdzK9MqFbUXojUhdhya8WiKppGoLqVLpF4hoq2jGPL1u7dkoe6XikZk3fwNmDeqNqp",
  "key10": "2XZY5oF6HHCx3mokzKbpyt9ovrQUdd3WgmstiBbUUXAYdBVpYgGRS5NWdtu3VhMRobiRJun1apHG64kLMVXvqKqZ",
  "key11": "31pDTPbbYtxrU3Q21BV6khjWhAp5n6mHXdMcfLSomBX8NqQrp43LnGv9T6F4fTSmzaSVTtzvAiBBU7yABmP8ZT71",
  "key12": "5ezQBYaqa6Js7QitEBTBG6FbfH9HkHCVWV8jotezepvdnaEm7QusQjKzgTdcsJ4auQW3ivATHssXr4pzCD59rNRR",
  "key13": "4x11SwKL6asGFGLVzNHmHuFZS7ZxdA9EUxgNpi65eMV2m1vXZPj6Nto2hrzjgWTccjiua6BFGE2Nekgabh7FvB9v",
  "key14": "31a6vFoGfAZrE2irqnfzs1bvvXzYRVMqqsAvCz8gABecZqKK4itUZZkb2Gw4rHNBFn9CBWYEhz6i6K2m1bqmnTUP",
  "key15": "5qUprCjRmtXY46RrGP5FC1BJa3EQJ8BuDWWK5UnvSBBPoVNhTZ15KyqSxcephhRJyu4Jkn17AefG528RMd6iy3wJ",
  "key16": "5yfymputQtCBHJtimh3dMfiZQJZNkFD9J4iA1a8aAdkYcUzCocYcW79noTZMdRuacym1eoBCxuHhzmf3MURWawbC",
  "key17": "55p7rvz5fRUXHoWKrTAWpNbaZ7uNiyRhCiNV6aK2M2ZmvRhk6YCQ1djVt7xmzZ6gk6GiEFQ93S8LvFcrS7fhCRw",
  "key18": "odBzWNdPJVVyZe8qNGUfWY7eLXd8mdb6fX2hgUQfF5f4C8GK5fQsiUjPMKAyHHFs4NHgJoVJBizczBahNRnoHqh",
  "key19": "5CoBPDcxa3spaZwJJuAbrUJSVyu65DLkAeJiEXkj5RuXqfN8fFY8AS53Du1n1YTXLr4fDRN5LWzT2swqELqNwqf1",
  "key20": "44Zh1RMwXiUW5yDAUCT74rhiyCtGbt9SDMgPpnsrDtuz6Bj3jB8jDYD4TxAQ6i4DwjuCh9NStNGdKPbYamULfiPN",
  "key21": "5Zbf9ohxzbD5W2HXViFm9ifW2zEmKkWfLVTf4itr7awQbu3HfSMcsjxzz1sNiocTfwNcfgYzHmnVD2QPAU74aQ7s",
  "key22": "4SZawvf44SdHAoCh1NpDBra5Dw8GXg4RmFbBnQSm5g82yim229zWUqRZM1pHXsSiChk2m1PS67rFgTKAMLafVunz",
  "key23": "s1ombtTd6JvK6Zktdmp6qBaU6NSaEkQJo4XMCSx6siRyqV3DsZVuz8mNStSM4JuhctFf1qLBZEeVDwHSUhQ7k8y",
  "key24": "48kMg4sgkSdiRF4KNEGxU7xf9HTB8tkV6z2mDTJFJW27VfcFkMM3zMwHVk6nNseRixSHWKkZU3vUmJTqppeZQjvT",
  "key25": "X8V69qM1n5hkBcuqcGHX2B2ee8JZqwB2pxCjx8Uud9Uynh45bj64Vkp1L6Q3Eceo8KCg15iLBXQyQLkaEMghs17",
  "key26": "2omVqHrKB2CzPtQz76HkQh1Vguobf7ATU4V9ARwsLjRY2EuSRRVfh1RAH4gJpx7Pauyo15inEPZCtLTXSXEgGJFK",
  "key27": "27coz8gPvb4UzAVRVrc4W9NypUXhfaKFEzJ4P4Rd6YupRFzoxwfFZKyq1DNRTfPMtSDqDKRw6kGdkCysCcC6Ye6B",
  "key28": "5dNLUf8btgtGEQSWqMaFqU8knTDSzRn5XMnJvnsftCF4CZpjmDhJg6Dwsdt6EL5JVcsw8LWPGqUZt1UJRAw7Y2kf",
  "key29": "2MVxePA21RgXFrPnorce8Ztd4gWjRjedrppTTXBEsj2AtEhtTzXZoLkJBCQo8Z57Rh6oKBd7qmY6L8tdoJNTUnY8",
  "key30": "2XuLpwSWK1zLUJTujUexHLftjNyqQY48URgGVLD7LoESDdHwE7X4bodxHf6pzMSp7ZmezAYg3bYpfZqS3hjgX6Uw",
  "key31": "RzDdaiHhCfaXDFJ83Vyv6U23Hd6PmX6dkqmCPTGZQPzvjPFb3CTsDQ5DcGcejnb3PKsWkaaqyRqYehPAYS5cj9E",
  "key32": "2Hf8TTtJ17XhW1g9HsUVr8AZvKdDoGmJT49hWNBUcbqf6Q6FvdL5kAHnaCvM4dVwqFPctYFMJGjgTvkoS9jK6ALU",
  "key33": "4rqYySoiPprFRvHgXFA3r7B4DUt7gEnMPCYuTP7J773AqioaxGYUHcjBoHXx2a3b5wAaVbprUHvD8ke3xSvDX3mz",
  "key34": "pbrxDiRUUecaL9QsX5Z9f8Bzp1TykF117n9gxbJVVY6VJy1LuAdhDHA7Hxw6urdHzSwjATAnESayA8cSD37ZUo2",
  "key35": "5sHiwBvidZePBb8nnpSC2yDMkULLuqC3eNd72cr1RNtnUgmj8GGXVT5Ei3Uhk5XncFi8zSuBc7e2v4LK1M4kjgJa",
  "key36": "Fsmbk7b7K2rs69xYJmAWLsfNFYUctznJeLDjXfEDFS3qz1PjiVyBnxhQR5pcsC2fziqMH8n4MRWySB8XedwJg2E",
  "key37": "eE78tgUuVh8FsDwFbEe6MC3oZ3UcUnSHKTgvvkWHcqaqpTJQCtLU59g2mfd23Nmn1uFZtC5FXniP1fhFsrSLFj7",
  "key38": "5nmXuoELZjSAV6bWfpBdUHXVNnXk5HHTWRdP9dHxw9Rd5Tv8hso4mRrj6HZHpEbduxAWZSkT8fcwA1iY4k8kGtsE",
  "key39": "g5v3Po5TU2JZs1Nu9KqNzcWvyvgnHyZXPdDFFbr19Yh3A1Ka1xMtXNA6w6U4JseATMQ6U77J4VTSiNKnpSYZbXW",
  "key40": "2UZH3mi2PRiTGguTUoiiok9gXYYdLMK7gQLk6mnDc3nr7BB1YUtmYEwbbcAzGvTstRa6JACcVEtZMwW27m8wd88r",
  "key41": "5pii1QhRRiULRMALkWrSEPeniGGoAMy11TXujf8zKJyrWhFwC2g8WrGJVizy8XxAxz6q8YKmw2tzUiZLETy9imN8",
  "key42": "95rkupMS7gv8LgBxUXwQsvcGjBuLnVeGkB9XnjiVddXfDpjrEMqZ6mGs8Kmhzp1tevqnyJeq7ehHtYbMMzrgFLJ",
  "key43": "22mxZRHWN2p6k1BSdos4DniZN9Mdes4xGTj5KH4edKc5eK8vkcQfjucAFDcnQoYm3iDgiYp6jAUwtpFyrW8dzb7F",
  "key44": "5PnWHe6HSBd59uE5TMzymUCir2P9UjjYzL2EHuTXmptZDhsEkmxxQPTuCHGUXoKhBLLkakwr4bcK9u97gGSWm5X4",
  "key45": "4aydsK1aXUCs4YFXzfo4ySncxHa91r5YCppcBTnymB5g9KiMuRYqiLMgLt7uTYjCAJExwrmLmgUGx8znofLMFKjD",
  "key46": "3Ciu4gJqNkWrx95xo8xkBWEPFMT53kpkX36PdxM3pphiApR7wSTmY7RppmD86NxwHcyiZHVq6qknT9CcRwPFik7v",
  "key47": "4HfudwNFCAqeQcurP3yUKvk9JJ3NkHYU876CTEwnKyurD28J5hGmgPv6xaLrWiKSA7nSfz9MoPaT4v8ScZ1stsBA"
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
