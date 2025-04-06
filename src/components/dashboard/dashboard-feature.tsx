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
    "aixagXzcPhWb3e9b2EcHkXDJ6mDuhxnXcqpSmSxrehX9TtjQaRmG4WtLYPjWMy1uTvMDHBZva3ZMA5iobPRcokK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kugVoGgTXYBfJxkUMmuqXB1cULkFzHwpgYfpdFiANk33TmYYJ34kBeeAmZkSnV2t4qPwyH1MSrRR4GBWDzvqqV1",
  "key1": "5E559Qyy3z7sD3Ah55vEw5cxQKticvgZTvGvLU6sZQ6VCCTfcsJ5KtDB3qFFtVMzv3Ab6yuwhtyRWpwEyEghqLR6",
  "key2": "HdJoM94S3rCZ2rXz6bEDDYRkYvFpdgpVAhL8VT7JEwWHLcF2Rt7ZoJdLx2nnSMJVvzqdQEirmpa97UPqKeVLmZc",
  "key3": "4GgkzZzrhurveW8VPta74rB37tij4Gdo3Dk6BWqvtZZekpATkDJ9oMH77h984uv9eMoGEuU2Hfc9YVs2tRoiHG9A",
  "key4": "4hSo4e9DSjkhKCf9bL51FjcdsEUp3QSY7oyiLu65mZFjJgTWCHHtDKeDkeUuGceJZN22GMyZgJ4ekHvfc42S53YH",
  "key5": "ULEHH9BfRr7VmjhANnCp1ykKC7gr3NxkesC2h2m3MchNHc3wAzHsreouc2t1WtHzLBbU6StB8irdJ8U9rMkMkLH",
  "key6": "42yK4KmekM5Nk8ryp9L4b9y67R2fcgfEHXsk5UfH3YFiQeZhmxuR6F8xBpVsHGe6mpG59tbVEb2cr9pN7CF7GAjh",
  "key7": "2scZtYoXYEPqydXLPLgrA7zSRCSMpGffhtMUR8kbJB2MCKf61C6XVYhZ4drGMgnKJb2c5KtMY8vZDSv7FYu6ZS7k",
  "key8": "SByaCkCAjC6daoYj2LRSLscx8op1vRyBav8vQDgww1YSzCDTcx7yp9xFdP9767t1w4NXzghXA2SgW9doQUVd42g",
  "key9": "3QVcBkfHNiutSCaS1ohntBtjc1LqcWCkCdKgCFhUUmirV2ze1auCZgQqYgrXFwTbqphynhFpzhhvniPzLXSVW3qy",
  "key10": "4h4NYRotjRccgCzpYVQjhZUJWaTdmrTg4H6cPqZ48jEPYAQm7dsErbTycp9FT6jY7pvskByGJEMmrEbujDipzotn",
  "key11": "43RhaTZETBxhmpE6h2UmHCXDEWgq1gcDR9PRLp7XadTELVpeUxnbM3f5oDajCmAZBujNHtAXQSSDrm2JurBJJve7",
  "key12": "5obkf3pNpPcmBjzxfZ8vH5DFs2FLfpuUY48c8mYiaqFTxMz36vSMspzLWwXD7JJDmNeaFuqkaDXos7LhCo34moyc",
  "key13": "3N9iw6gojJfr3xjEHSFXc9W1FdXLThJVe3GKFdsPfERotn3Qu3D7YYF3nGUyYyHy757ShJ8mvjMLD4v3TVbsqnaU",
  "key14": "hVuuJ6RurNjt5ZFXqRYAiXwWtDwHgqY1UST2Hxfnd6HFE8ia45PoEXsAESXC35kLt4683Ud8xvxwzmkpSKSZjDD",
  "key15": "uhVMXppVPMV9v7tPqH8QpjwioSTeqTyH8hyM4FHe6mvzDfn8sFihUzddykTvhSWSJzK7rL7gEMECQPN9d2vni7K",
  "key16": "8GB5SBycp1QLjpRA4aejJXUh8uuJ4r1q9MWTYAr1THyt33eocuHCW2QnDR3zyi1ujgSYKT4retwsLMhu5XG9LNQ",
  "key17": "DCuG3XrdrAfFD7BhZSZa1sv8YB9w6LtwyCGMy1UoeYSqBtaEC6bozw4YN8m1Wbo654Xv9ZKTk1y7PUnVVhUSj3w",
  "key18": "4na4ZTaj4UpEGWWhf1UPJhDCGAS7xvk6M7Dg2Rd13fTyahWoocE1yWj1jViTxUPNquYaiBwooBpUZRg9n2UTWcCY",
  "key19": "4t51wpTme5DGTiNoG465wSb5pXp3wtwghN2xksJrwGV11eL4Tpxzq8d5smfmQK4Ce4sfquNzL9aPwxDnGsw35ooR",
  "key20": "5xiFwbrwkPRyT5Vaf3zd8TbuQgBtWRSx51iQfjq7MawKbpwdP9uwSBjb8UVpt45T2aNtfJrGRf6XhnYJ6yb2Gi4J",
  "key21": "Wb5w6ssKuYyonoVVUgZJ2ksWwvSYG163scxfh3z1gcMLowjuRb1WZbM8vKBfR4nqTNT2WbaZeLyL3HZT3Dj7Psr",
  "key22": "3RBfiP8rdkmycvJ2uXRmnutAJsj1tQ9e6CZ33NF6HkXab86h3bEtW51MfKAmTtjaETBkGrEUpvagvkLFQ8YizxMC",
  "key23": "51UVCgVwxcV7HSms97qhWWXYgqtchezzDnQ31feMfmYQUsoHvc7DxrpktLGYajsmBjSWLLjfLJTJrcrELgNGpH9W",
  "key24": "3pHtmDKCT85RTXmWp3rmiZpvcKCuYvHGdMefK7WMY1j99AuKGv3Qrd2MgD3sT4eSpxvHfruuKA3si3VnvwwLhQFU",
  "key25": "4fLuvSZXE6o5f2ACCLNVWsKdz7M997hFsKDczPyxDgmXFbZFHE47Zm6ihxFYpx8YMaVJZzCzs6pHQLTYzgRTFaK6",
  "key26": "4vhciBXDJbZiHyrfs5ir5E8oDucDZAH7Bw7pij8mc76gCcoRbqbX5rNt2pi2S3YnyqPutwDrnJmceDHDEfsfUpEg",
  "key27": "5fCERE8WERbu3jyWLEbF1h516pjZ5Z5ndYMvAyAeyNMnVc8PpJZTWZvNYzfGAhp81PE79Hkg1NF7bJKv1cCst8Gt",
  "key28": "2wtdXoKiydKrkJaXNAUGNckgMcioMXjZ6CNWYpYt2swqGj4eDEXXmy7ZC2UW8P8fJQkbbqasqd77HWR8wEz12u8b",
  "key29": "25rS7eujkus14EYbKzhMyrYj87jiXdLg2a7VcmGpsodpLpQFKYK5rFSero8LoJXDGfnWEvwy1PbeJm9s43cTJGnM",
  "key30": "8xM2WFArWQmWt6bgcbM6GT4jmmCQU3hzh1sSrt87KH3V8nB4qSQLVrqCgwkTjkKz8KHeyDXCrVbFXQEiBKJzjLT",
  "key31": "2tkbH46ieE13r6wJQYQmcFWBcHArctDSvppVGaLBgxDPWogrtuuScdpVWtrpbsHT5i8iM9KP31mZoQpJVPyNsvng",
  "key32": "237ZpK5XqEKkmR1w1NQkST2ENF5YgLHrVo1wSaEzVbdsJoNGSFUsx5PnudmjBTHBXbmLCXdqwtTQQQngSXtSxEwk",
  "key33": "2444v69ECx7V4qeR7jJjsdF2Rsq3JEvhRgYGo6HcWLGJnVoJfpTKEXxRr3vhwpeoXE8YbDZVtHavsVD9H43AkxYp",
  "key34": "4cAxpSFZYmZY5ytMpLxXuT1MXFMNvW5dccdHPvs4YjUscZ4CwjoMXawtzvTAv6K8JVy5Cqn8qf7m9h9XVkUnuH7p",
  "key35": "21qRDd6ioJ8Xox3M39HFjsf8jxtgXNYAqSvEyb7A751zqzdikL9uDwanXPpHckaTen8uusMYwUbUzEWBA49xo41u"
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
