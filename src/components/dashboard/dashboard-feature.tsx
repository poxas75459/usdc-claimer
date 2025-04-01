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
    "3nAJeVzH7Axn8Jg5gkhBGvptv668WMDTZqacqz7X6qtXdWn3QxXC8JHuRNouGzW6Z8D6jSLEfzu3kXVEVv25g4b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuDg8Kc1ZJU7dsgEw8W2fehnKxKAhcfyzfDdmLNhvS9B1qvbKtMMXsq2B8Mzx4rmmdfY869Z5iUQh5Sspdp1bJr",
  "key1": "5XBkiKQ2n4jR42fVb45Kj59SZCe8enniUhoeAfwQd6voUNyQ4iFKZWD9AD587A6FWeNNJ4mddzvU2hmpjw7Fg5GQ",
  "key2": "2QsmDFgtAQut6bjAYMvVnjvL72tQfZ6Ez6AoYibcN3wrgVQcmoH82g3vFq3Xw1iEgGAzFSc1jsjEfobKC7AZ3iYn",
  "key3": "2AFGpedr4gpQ2Qtye1L7UVQ1PRf5MypYdDHcnyXJLicmjaiAFSc1Wd9HyxxyLeQ25nqSF3Dknpzcmx6u2amgZ3w5",
  "key4": "2MMKVvASK4FQBRrCL9FTQrzMeDJY8A8SVhDheEvFHmQfiuX85gw56W8BhCRooPQVyfEokHJ6MErJfWePGRJoSyGZ",
  "key5": "5ytWDzWqvCyn7MueyBcp58mxKtJqWHERTVUCDmRGQkBKYpHKWckJ6Y8oeQjqFJf1J7nxxDuGDn7yQkeEuAbkmwqN",
  "key6": "4xLJRAteQi9dm1Vwn4CR8BAXpsQsHFpw88pfRc8xJBHYGZczDA9AYzAfFbg8BYcooPkRrNzK8LVZxLZYND4ZjfdZ",
  "key7": "4cYCwVjFXtyj4TgQhbLmPPtKbErt6VyQnbQ3vNxgFvbV25SZtcppbHjmTbR4NWRaLpSTthH9BUJDFVdzChhiii9g",
  "key8": "2uqEEU2x9qQHaLmWkz4qrxrobDgDGgWSFk1E8MCpd3pZzWNbG79ziAYzdHdJhQqGUA99gpg1Gj1fUWWMyqHTMH7p",
  "key9": "5CQn3JFfvw33A7i6dS8AzGGKNyVTZpuzky5EVLdErs5PA7PUUyaDsytdnwoEApVwfbWxmcEtWtgv8hDLNeV24VtB",
  "key10": "2Sv7QcLknrgZC3i6uUxqXjSkhKxqLCjvR2T8vvnZ39W8n9u9kKDiRr7ox17bGtthXRuefNNetPiBY9WqaSva6S1R",
  "key11": "4iNtEWoZV1YuUs2v1aSWP1S7qSzW1uiqzGoWuQtKvRvh94dJzyUV1EQ5awZyBp1nnX8rT7iqB9tHxBfQAxGiSPNv",
  "key12": "4sXdcLdbW8scYNT5jC1zpCzn16rsiJX9BaXwwLhiTd2KWXF19woYe7qwSD7UDYDbWTEsHVCvo4vBPWk1SkZ4femi",
  "key13": "5hs69YabVZFimWu7BgHKA6UZv8xQ6ApQCZRQUpr1y5Xg2w8M6yMegBuojGceGHckm9Ea2bMfk8VrXQBkVQo8ScQ",
  "key14": "5mwFk1JyF4MdeX3heVLZQ6KLj87Wb6t9ftzft6YgXsPkHLVFDcfGf6EDKDN8J1QuRCMvUUyd9L1XUgsqHR8VCJgA",
  "key15": "FvpbcdsFVSgv4DYE3HAZ1GvwPS7XXZrgfnBLscvPcnukFrJuFu3Y9nqRMKysNTVqr4gwvUTC11pLugpsgg5FNvj",
  "key16": "4eUbjfbnzk4UpGjJhGvXh6a3KL34cqmvzJzfSDGpG1kkA4znddVWxJvYfqNKgXBwgL62VRyV5tzBP8ve6pGCXT4j",
  "key17": "2eRmwAEkcr8Ne66KGB6HcrjBTzdwrCPaLnTcreGXBaWkiXoEkYRmbqWdqNiUYWKJmeji7RcDz9qvNMM6RnVHhx2Y",
  "key18": "2H7Yca9pnhTDXLcXqV92gj66ARimC9m7wiE1BYs5FS86bdUGwKwwJAdgTN1LNnh3FLgQEJ31vECeeCmLjc153qwY",
  "key19": "48Lv4tYzqyQDXEuzSJm4w52b6nUpUnuBsRkHEUdmCNKPLSTKAN4L4ZHcRq5YQa5XEyefo1hQpFXCHXGfzVKPUDUQ",
  "key20": "oFeyTcPSKo2UFvJ68nUHheZYZRhVkoUh47B7LQK7EteR9S3Aokx8bgxSB1wCfq3GmBm7pzokvXmFuKGr3cRAu4w",
  "key21": "2kT8yKe3L9f9tSMUVd6sSvnDcrSeDNzBGTzSJyHFqi17zMRnMTF4veKwfkL9xotjY88wvANatgASQwNKmRmZk5kE",
  "key22": "2KJFTsLfd2VBaoKc4qxrjTuZHYjgmUKV9b2ekmNWazGJAPZSMaR23J52ocxgyVdqVmdnhng2WGoP3uKeNMPFGM8i",
  "key23": "5T9vKs2BmVME4EQxSnDs9RXWFpsCwgMv9grmx6LgGsXBk4iMokvmqurM6cxPSaAUMJ4veT1DK9A3MtTrtnvh1KXN",
  "key24": "3q56SaiPoXXk5WbEuWCUR5ftfbRdJf9hCC6sTGPvmyGhKPqct95G6vpP6koqUyc8CNfPaTSqcvJg9DzUdgCNUaYM",
  "key25": "2RoLuzEgivwpy9G7kMmHW1HZSGC5Dn5F1SbhCtVotg8g5W3ha2m7pEA6hMAozPcKiLie34rVkgwcwRuknRqYMgjn",
  "key26": "2XAVsLTroJxjXKTdkAjr5d6n8thAscUhNKnQTxBsa9pUADBfCYGTBFKRrtEkyXtwDNH5uFbFYG1cCFKeyTurMGWi",
  "key27": "3pa8tvDEYxePHdDfVtxbvkmpU9TwEyu5dFpM9UBqruJnYuNZ6GGMMqHLT4yvxygEUTRXvoBHGAvT1mh8142sNhSF",
  "key28": "ELnov132ivFGbTJCU2o3yTyNJZo2twGF2sCh44SC23gxSGrnJ18pgyo4kLQYoEydRzTPxHNJ1QVopfk7CMe4izs",
  "key29": "4kC7SEBBas1ckFErVb4eDCoKnVtn3ZBN7upkhmkNtScLofXCC2tWXQk6GdAFcuyMdkNUTQtTjHKxdJpEWz11iNB1",
  "key30": "6RMgzgjRuCW61uK618S8jxxEwoAN8UjNkHF8oGuad5kEVmH2rcVVc4hHcwg6UL2tAUhXueqvPt7CbTNp2VUxNRM",
  "key31": "5N2FpmJdb1ceJN3oqZs4obqBis28mS3WeiUpETecwYVCXZGR5Gns4Ho2PNCnLgxx2HHzKrXFXQsUtjdkos7pwkme",
  "key32": "2jacU4ap8c1g2VdEtm16E3p7vdCYnt7vRzmswNiWwasXgnyRuYTot3yE2tFU9pBdtzUJhgsT7s4zhaFs8BE4ajg2",
  "key33": "2YdcXTvRVffqU2pZoiHYtxZ9err5sMJKHEq39JXME7geKhm19YRn4CpS7eci9dU9goCC9EpjNKpEhRpNVykWd45m",
  "key34": "3oo1BzvgucHYNm8Y7pLNjnMqdwtsUfbyay9tNZWYRxMQcfJ48hakQKfkojh31Y11cfjxgRcyDPjLc8UEYsqdE8kz",
  "key35": "5rvEJZPfuudCMVti4ALmxiYXU6eVasczoDLpLDsGcXqDUGo9Az14PPZD6o8PWGNjW7RXgeEpKZiLDHnkVNdH9TK6",
  "key36": "2J39m8uyXT6b5WuYTevm9LAQCbAysPRnU6mnVTqRUE78vx33sRHjhUZWq9mB5Nog5KoAwRAfF8xBLiF4YcBgwVED",
  "key37": "4qbTXeJ1bvuZLLwV1zXATGPj6nYUJnTe5aWaECCfw5dipU6zs8TqWuuTJk98RFmX5vs97LcRMu3vq4SUk56tGTz4",
  "key38": "LtegCRKt1Y3JuJTrtpok3ctEAkdppYG28gLrmvF6qEtxduyUy6ncyakpkFjg6qZ5RCLLWX3CBcpA8S5CTVYSPGU",
  "key39": "5WjjP7BkGmUQjppB6FxL1fta5LyjDX4wsMv3rvCXdPo9n2UMY2UHH7tDUSaNmBSJCKntfDVJsTPXQATgn9y7SYBL",
  "key40": "4E6ba9zz7sS8vLSySZuj3jcCuwiK1piQfGDHQwHhRkkpgABXtAaW1hVEZjRdwVssbo2MeCjuQ6KGgMoRq1ZBZtrK",
  "key41": "4U9Y7QJtHhYasdZapgKdScuRja5bg5bbg4U5xrN4BJAuWUmdYkrV9K1GGydVGRv9vRYdabqCdcogtE4RMwcR8TFG",
  "key42": "5Y2P5ovFB5r2qD9RmhSTysGiD15trGqoNKdcuMpY1ffSR7gRqoyNYiX9TNodYLFgivDiHXNQh5jRxCZqdERqNfDH",
  "key43": "58gYEbgu416z9w3tcNK6gBCE4Wc3ebzSUGod4sXh96CqZJV3ePetrEzeQgu3paaRx9CJm7f4ZLFEUEvQB6DTqe4h",
  "key44": "2bNNDVaiFeVgzMr8AWBmw63xHoMNsSJcAYm2xK518GAfYPyJs1Uo8uPLBgwYzEBWYy1QdzxZeNk2cuM5bKSgFMWz",
  "key45": "4atU1H6EeVDhqp4VQs6q8XZHYZKDcQUw2aRnKVNvDqyMPTFR5vNsMY5cXd9VjYNbZAxeoKs63h3B9a5L6XQfeDu5",
  "key46": "3qAXwTULrt8ZK65s7YCEUaXkjaG3bjfhPqx5k6KhQ9ZNWBcjcgmyPZfiFbpsnSgvqUTykwZWunkrWdpBqutgxc1f",
  "key47": "4TzqDk5mzzeAm6v3nnAP3sBf1NAvfeGdUKtxGykoMNSLMnTCsiDm6qFtTgp48zAXFrbkhSga5hZC2Mg2hSZSjbvH",
  "key48": "5iUC6dmD7AjChna5jCjw6uLkrPaE7nHTh65KNiVWMNR1f163Nr8DwyeYyTBjTGW7ya7s66xzkh8Zi547wSaFhGQt",
  "key49": "4PsYzXGYVpmoChCAcJtnoEzfgT37LfCiDQEGe2PTFGrCbDsJZsEd32DDhvGvneS2KEp6PCQBZRVpcteus1HBpCUV"
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
