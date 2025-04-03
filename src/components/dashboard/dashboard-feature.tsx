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
    "2UgX68UPjr8n7MXtDt31K69NeGuq1gzy7YLtF8EiFhEjpmdWNsSLGWupSMT7BGxmnN9HkpRFPfQra91N1xEWLDvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49cJzZqP9aKYGt8HcvXnwvzstJPB6aqjZDnCb6EcktDkQaxkKxdnNsje7f8gEKTYPewiDYYPSZZ7Du3jeNfbhaF",
  "key1": "h7GUtqzfdFZzknykYcFoHxAqt7SF7iYGa8qjKdeSmxAs9ErJc1UwLAjQeD8ommZYQtZqjPS2255U7gejxV8hxce",
  "key2": "5JzZ5CqLizAPCdCZpzfskVtSDEimaJ5usSqoo5LdtwzqxMYR82NyxFibJ8AH6162QJc6Ec8WeAhd3cbSdpbz8rKz",
  "key3": "25W6SHSvgXMUXuaTNqn6n5mFD67MAJQjTJGYrobTy8MSD4vZAFEM5mkwNUgKAQxg3jRbTveW3b14LQBhvqXS1Enq",
  "key4": "4bc7dhjvErVJWRSUPD2JjkXs8JZbm86iTxhWcf5G5nrofo8NDWXukz4Z7uwYwAc2M8Tjd2qruM8DMGFkomfkCx81",
  "key5": "2tUg59yCtk1hUKba2Ugjnw7RUFcanTXUaXWJjE8adofjz2eiAj5rJaUwiJBvbpms5jsz78XsTCQS5USnQbJMXUHq",
  "key6": "BcQTHQgTKvDMorQwt18HXKFov81WZEkdEDoKrV5pTPdJ3MszSSUZKCJ2z2PpLgCqYpEZBdZNzpWxQeVTG5Rf3f2",
  "key7": "DkNUBagJzmXZtnbuw7qgmtbkSNU9DtDHZnik3AzqXWRKiSWtmyj57HKHnm9UsnEcpLmCJDLWgpiuxD2A2QZkL6T",
  "key8": "yiz26GiPYeEAXfesWr6czAhTHt4G84QMSrZmdi9MiZcdPPkMsJ1RcDS2ExL8MX6P4UKPJ3CLgbdYZZvhwg8D83F",
  "key9": "5VDYzoTvzj19NpShKQYrCYQxXG4YZFUZu4nZpc5s4Hg8yEGvWEjt5Tk7Nw2FyxHWRJC7NZ4jc7R6GASzZWGNLYzB",
  "key10": "2bMRnfvWZxd6sfducnWqQrfxtVHcFMrDCY7ejsrgZ5bpJjYv4qjDA2ZkxaqEuPcqYJxucTvjvxEH1KhurtSVtCvB",
  "key11": "uQ3CQzVmngNc8gXGscDuFqLaTZAp6iYeVBeYsEvkf7qSEP2FEoBb4qeh66hK2eBS9CpPz7MSjKYF8icM9iaiBcr",
  "key12": "56TKgMsFxJLoAyeG1nv6xR5EtnKUPwB4sZ2bZ59ZDVbNQrsSHEd9oUfMdiDznvxsUtTewwuENcKkstejmaYRXECu",
  "key13": "4FiaWJU3o34P7WAdipsUDdAJ4ZbWUm885XR46HbG6bsbHadmFQHXMUdg8CkUDqtdDHMQPBZMFwTQjyZvgf51QQTf",
  "key14": "4sbF9btnB5EwJ9b5UThpXZo9Pa5Fk7ewE2Lrhg14Dzouoq2qsN5b2JeQ8Bu1HaxvQwsBpGXneuXdxqbh59sPr7Du",
  "key15": "2mG2CXi5U6muha83J4vuvrqb2gpd66PPme5zgCmaRPbJWwQnMsvfjnrkD5YgKaFN68jGXGwKQP2fNEvU1uwpovhw",
  "key16": "VAsGNNAS9ZS6f48ayA6raZ4FWJnSBmfvPUUZqdcqHYUK9n9FVVuwi7RivLdJ1uEAe4HAPb8eeqxhtQa6BPFxBzo",
  "key17": "4mf52fToM7EEv7Dh8sW7stvJJjfDrvzGw4QG5Ra6A9u7vPwWr9GFfLcqQJfm5UezCcni9up5Y1GFdqUZiKNdxcpw",
  "key18": "2PDqEBJWGzQL4RjBhd7bhd5r3tdGacGtHMVAyq4NcuEmPQhkPCKUYahbCzyj5VjUc4QfA1kXK1DMVdTstSpc9pdY",
  "key19": "65BJATN5Krz5SfBuGEJ5ZFLAqGEetH6JtFadjyPoS9h8TWwZoHqoATTYorKqvxWDGhu79o2wXrsrhqcnXytJcth9",
  "key20": "5ef8cCVAEZezzsRTmTG4CxSubYqJWYoWA2PhrVswT9xAmJ17teSzUXwTmSckfVZPAeDXMNkimi3XxUXRJ9Zpm66S",
  "key21": "5Wp1Jp56JTmC7ahCkLBCznb487KKHyv6LCyoN33B1e2pU69NQRfrA8uU1T456bPhhUyEX1vB9FSA9ducURKQ11Ck",
  "key22": "3GpxrerYieC5vEvg15mUSCsNihPCk8N3GDNWoq39L6p1fu3k1LdzyCkzUxF95WNw1Gy4q7rfyiQsBxqsySXfExY3",
  "key23": "3X4trkq4Zekh4GuFNaCcGBqNiU9jCENpuNbW39FWaD8Vyy5HTPDEhkRByKZRjr7mZe8s2A2ThwcTtNrXrLXjba9W",
  "key24": "5oR8sW3BUFhyMy6QrRzNKdqYmWs9g45pemLpFJTBxfdUEwXEWS6svQawzzmnMmngf9EasyppmTb3Nmz4ysep9bpC",
  "key25": "2c6AfNNFVU9hZ2wdWadKjJzJMPmMhgz47zpSEFfu5cRd5uq9g19vBuqckik33stCQ62aeswpb6SH1MKvM49z1XTc",
  "key26": "MGkhzcgi32BmCZg3wrBowi2NxLSQxaNa61tdGU5PbxoF9XBK2LZK8VcRnVJGa1YQHiY1xEnyKRhMTKqZEFwJWhv",
  "key27": "2znsAMC8r5x7KURcGzx78LwEMdiiKvqd8dLYmvPNbmNc7PwPeq8vKh93BsQG6vfwZGszVakw4R9rQqVyx3nnb9ao",
  "key28": "5FCzJ72aWETUu5RMfYA6vmwMhaxg5zxPML6PBRE7yoQ9536eWoyyFUzb4YHVhNtM2zxL5bSgVZkUJKCb9qBFRMWj",
  "key29": "3C9u26Ge4GcbguBNJNoYmXe64bTxxvgaPgW8iLWEx5UAzRitEy3e9PuQt896VkdxRAzS8YPkiwuRf9odo94Dia2L"
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
