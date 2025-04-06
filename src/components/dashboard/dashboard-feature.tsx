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
    "44Bdtu3R3GPdGaUZr3Uqdxqc3jYAvCCyT5jKHe3caCr5AEkXJSNiBg5ZWsWjP4G7FkJ3S1Zy7M7uQgZAwZYM4b8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXftj38DFfhFQ9pdSxThcMy7prmCQMFcKasYszXKQAAToHqdoBHn7qrKTqctyJpBmgxZRZmyH7SGYBcMZnSLHQj",
  "key1": "4bLNFUDYEo6aJnMVg2bKJbLPFsnECPok8BNhDGNYQA7DUEFxn17Qq3FWeJTjqXMX9PCWoz61TKBQ6q3wU5WxQBEB",
  "key2": "UUn6rH4Yzi1bfWp4Syj7i1g3QpiR14i17eufMVu83Zrcp4jRqW4ywU3MCibgvGXnnfC4cgHoBzuzxo9ruM7aJvz",
  "key3": "2HxqGHHPYsKNGb6wRor2gH3H7X6wqwWsGKHUeLy19HdQNhw5g5gj97eedcfMBKYqeB1osuE3JvPorJ8NawHvooSD",
  "key4": "23c51VJnoWb8UT94wJWdAR8fH1nHogpn7SCv14bLcRdXZUXYCK1abLQTvN3je8GKYq1sWc7u5Pidy2NcjngYa5ZU",
  "key5": "bwbfzY1c7a9jAjjGM7FrTnzN3i5ayFVvotKpgqxYza1YwAE9xoivwCYeSv84f3sVhQs3vNQqK6BfF6TWSZdu4PN",
  "key6": "5NnybZujwrYrEdNKQQJ4MgoVnyX932gN9kGctvjtfC8VqzNpVwy6wacJ3KVBNzmfMExjQNLEDBqy5Lr6qYnyCV7R",
  "key7": "2zGMSmoLgfa1dnAh11J6qmeT1TiwDJZTwzpobd1ResayPDRetCDYw8FWXX77KFmeHZSgZkLorCF2AYp7TY86HfxF",
  "key8": "tBDjvsSXNy7aST2WthnAPrq6LaMZCPqdAyKRRshtHwWWmyAm8UZnx86FivGpr9dcC5ULiMAtL2fEgZSZttU3MVt",
  "key9": "4exb5G5s1DbWNiwU7U2Y2giLyRgqv7ajm3Mveu8miEfsSG6B1zm1gUMkVksjBrRD6qxtHX4XydRRgoZMb8ABUBLv",
  "key10": "3Sn6rQAsiRnEsUrL57RNsJTWbuuRvpTtq2udnJ97q9bDG3vKKTD4ocd4yMkGz3KALmnc7QgyDUQ3Ns3sVKtgmau5",
  "key11": "5S5m72dpeR26KX7V7mQBG9vqdiuRfHikPBafmyg3Cfhvk1Yf7ZaDWASj43CgkbQ4umMJodiijAD9Zk3nDGED86nL",
  "key12": "iwEPALHXSDNhsmrrMekyAzCaBbi8TPHrzk76bEAJ9Yktsp51Di9hawT3hQ4zvHWcxVrvtdzFjmzsGJHDfX51PdU",
  "key13": "uE9F9Pi81ubSzrvqrxJ8AUMeXsQeknyDChpnqo7JeBdASmjcHdi7itfmByXLxnoC1GadBZLko8bgzvguZ8kJaxK",
  "key14": "3LQrFTUDpr2CExFgzoRK3Nr1NBaGC4XXvEwzhQia7WKb9YbQAs3dXJ6gBxn59KgXSnPBjBv8QfqkrAro3hkA54Eh",
  "key15": "mQLtN66FQicanydP3uQ32iQGS2XUt6Mxo628BfZHXUxyHKjuNFuKSvqPcopgWbm9nvQnU6CvFdfQYquycBF5mZe",
  "key16": "3WPDw2STD9NzQn87oV5zXBM2ApYNMurQvtvJ4PWggEdVYYYUZbduPKgoBWwLrNw9aw7a8UKX6Nq7qLFYhQcb1Hs2",
  "key17": "tLLhnWUF9GgdigmoyRdnJe8pdAXd8SwySaAYg7FnYsZEg2wLnGePUafVeFSJ2mTjyRroMpNfRETGtgWRsfrkr9v",
  "key18": "FWedVw6ZB3wWgF2ytRAcKvvXzWFK357cjUcTXenYvhzRCKvuqvTME1rgaqM68zL3r4XfToEWTjCQM5iyQtmHakz",
  "key19": "5yoxHeeH6ysKMXkrcCXcmyyv2GrVpcfRr2jq8tyJf9SfipnswPqYY3wqSNu1SkfD7y2QddoDxFRXayiR6EEVDGZb",
  "key20": "2UT1GhoGmTiEZ3BRH1veyjH23bnKnLYUvKQKhQwK23ha7EdorZAkdY3SQzV6PPZSb9oTx4dX6if476o9gYkmaMBA",
  "key21": "3w9F1DeSz6Bi2PqsAou1TktP3NDCuh3M1Zi3NGNJa6n67vBmHTFbW1AzDmNvgBWL4cwW2oN9KPRPsQg6QEZE6785",
  "key22": "4whG4SaXuMcYgQbaSV8KQxFGryhCQsRNHAdANKFbfdX6pZc7hQJbpBRtMEPAhkbuWNKJuYgHsNe3tMxFJkSFzeYy",
  "key23": "274S62bcYcYGs9LaGvAwtrsWsWaQJeB6gU61ipM8Wb4e7rrtZtiqsoPpG3dGM7b7dWT9xeUgpjpRaYC4vJDWQjAK",
  "key24": "2NbrdJ9rrtegDFKrytDM8kWNotqFtxC1N6FDFeveZgCZUgy6iMXDVMHXKLvyFQMh7m8kT2r9aW7fK2KVg2GmRSt4",
  "key25": "3povpiHkgEaxJ8yuwpgRodjFH437qbA8y7vJNFqFr5VK5PBYvgxfzFGuotiqEUGTuw4F9ZLM8w7uNprGg2wGYFTU",
  "key26": "5Gff9Lwusi7xDmL3Dh9vEePzZa8gLNV29zBze1TcMENi6SnBXRjrydmEAKTv2WYS2fEcykqHYMWPTiCgYVxnQZ9T",
  "key27": "fJDXfcdPFKkNJJh4JncH1hy1ZTdW7bZu2LRA93MEguVEazKV2Ma825wpVxKjSEk2nEnVpQxVqNTeooJ5MfR8QTX",
  "key28": "4zaUUHULbFq1Z5U4J1t8SF8fsSoi2np3Vj81Y29kYkQrzYwBgz3K5zRyxAffeVjj2SqxwJgGJW3zQ22GaPABqq8G",
  "key29": "4PwCADZ4TqJuiigmC415j945GoghgqrJqRVVtH6YL4asaf2X7vQe545YmUrDwzHee4GaSdHsBHhxwuepEVKFrT8a",
  "key30": "46eubodZpb3T3gHsc6MhpoLjKHjYV79VuwnaryEc2RPCTxLS7PZxQidc8WuZ98QMHkhjWpb8V7c5Mawhb1YqEjAM",
  "key31": "5NKwCMDZviqajPr53hSZtU8CJWPnxhFuu8rYguzDnGVEasshxK99praC3RC7gXFSPdCik2E4joaSGThhHqzyxFs7",
  "key32": "63Cf6DwsznKL1nTbUwFkZ7M87TuoP3Gsa7Kh5sBpTgJq466wV6eLCo54AF4hHAjrWabZegaZgZFLnxfrBxqLftd3",
  "key33": "4CG1FBWqshzgCvzkytW9UrxJRZmkenn18Nr4YmJZn96PZ8UJKdLmRYzXLsnoGZiGJppaVVs3ayrKhVKyuyyguSvZ",
  "key34": "3hKLQ29uJoRZ8NRJtf95N6kNnqZMuzMFSaUE41piERxQPYkq97byKGMmPLebGcgDaNLChs2KfcKVTdRu5brkDQhT",
  "key35": "53GeDo5EQkcMR1ogENg2NsU2btrkSpM9k2Y5BiC38Wuo7BuizNZo2QxDvh3Gx1D3aPAhL4GfVgVpc3ham8sqJueS",
  "key36": "2iF9Mie26GHd3wbLjbkv5SM2uAWiZNAZ3xLDjASbvuVcivi545upokvbAu8mqwGNiYG6qYZ6dxXpiweW45Qk9XRJ",
  "key37": "5AYWMXx9Ew9z15Rej1XDV9ji4vWbsBAkUH9d9Av5HyN2i6JBUQwB1Kjn8QEEJntDKXhgVZwqXAkoJTzkBXEBMNAa"
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
