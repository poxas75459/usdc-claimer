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
    "2h9rnWMU753mZiiNwAugq2X5R6xYWK9jJkKxY99czwCAAgL1j1iGczUqmMPvbJRAtCfJgmUGvtixS4D7Sn2JLWNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gQXNBnLthEAmukiW15XUu69u4C7HHo9vvBWfSHxhgezKTu5RZ6je9kxDHGZDpoDAyCp42jA6JhoafkWo7Smnjq",
  "key1": "29GVmj3YD7KckUi1FZgSpFeBpNbp8o7WDwBpJzg36YCGuUQdPyYfe8XQXYVjL9NmNgut5QRKyAuq4gxEx4m44Hum",
  "key2": "4c1cqoD3oamUENaDJQ5hP5Hz8PVijuwTcm72MuDGAMTw7vtHKMbx2iaLpoPz6jxiUBwaJJMtrc4Hz2THFAXMnsuF",
  "key3": "R9nEChWtaJTnncxmqormK7EWU4D1KJ1UdCerXUD6UQpFXwmGox8QnPec2rWkkczn5yapqTotKNFoTUUeStFfXiP",
  "key4": "4rNW8ZZiezXTSE9Fi6iMpFp6gPu8n3Da7fg4oZNyCQgFKhRGQLqyTeWFajDEcqZti56Ds4YZZAFKTnhKYUL81PWi",
  "key5": "2Y4nk9xTvNthFZzvdUKeppsmXtFU83JKzsDt7FrTEm2G7pdnP9pHc4M9aXo8WsBqFyGNo8DNxRGFBUNaVwFe3Tai",
  "key6": "4f12DQ6tmHFPH5wygVJVKe5gDojSeiJfakTfXd24EbudXBPxPA88kpj1q8dV3DShiXFUnPvQ7bKjUE96aQbkMWji",
  "key7": "4kfoHWi1NM4VpFkT8RjT9nt2mJLeeKiSKrU4Rf8w6RXRc3VTaVfSzLUv8P5Z517waTpJ3746fJSNxeoCd9Rv8XJv",
  "key8": "358ndFrozcFfmCsHNXa13ymMPapbnQ8jzp7CmSnk5D7kV9tUvFYTArT7BRW2JPH4ZzA4jwwAdoVkkLouv3SDqVQx",
  "key9": "Wk4tYPWfzi3ifwMh3zMVbJuXetHwFpyKgMbhgCkDprMVgPvxUSqNK4L8f836T7TpsLUGmd8ms9qPt75RHtKRyTQ",
  "key10": "ysvapdgw27F5nZ3EhMJfhzUHqRpAvCmi7u8PcrHZoPKS8ifkFVwZ8stdvYKFVxP3qzANncht2U2fPcgVz99mmt3",
  "key11": "3vuwCz1UmVUu8qwEYv9q98D5pfpE6nQKRxyMM8o7xttefujmWLB3XZyNywMQf9yr6A2zHDmo54xJPbkm6oJeoL44",
  "key12": "5q1JrPe6rakoN2rTB7g2TiWokWMFWCvBHywzUmwsmYB4XoZnYHQeDVpDHdwyrNaegfz2CR1882QapHci5vqMZbgX",
  "key13": "58c3DLDc4PgTUpyBFLmzifB2TAVuWH29LTxuH46VqdydG5JcqAaq1x9pSVgLp6c5XVfcGBewkTZ9eVG6VfrUdqCU",
  "key14": "2BYt23wA6mgF3yViR4dZDD7TsufUu1Hdsba3oVnMeFgh2KTdZE2tzmLoHSp4D6qus2s8injB6KtfC5qd3H8jtKyA",
  "key15": "3XYGzpfpkx6Zm6syctzwz8dnKnWcLmbS9pjPoWTUwkstTrv6Hqya3mu5SpUz2uWeFbWKKagPSwXt1Lr8822jEuu3",
  "key16": "55m6PR4T8jAxE1X3h3ae9AfHcM2waUBoBupubzP1Ud2r3Zny4t5bqDZomnfgx8wUc6MytiKQAr7yGq6CTs9jc7Hz",
  "key17": "2EqL48gL5S9sVVRoPEnZmcpu7DrQk6B1hWALPDcZPeqqebZ8WuiqE78KkDBqmPyGJJ9CczbmAPUWvFtT2nexpJa3",
  "key18": "37MzEMUXPfSytuki3mJdf15Yv8cjvt9yGAUq2LaCpWCymstmknnyyV4zX8x6PGupLbomiJ4kJjJBMWeZdZWuCT72",
  "key19": "PmaZ7bCtySwXuBXCPQ1iqxbosiv6n9cQo4HznLwxjKfCPBYCEtWD6Atoxi5jZ6oQA4xLVPoeakucYhLBL4qrJVN",
  "key20": "5K1KZ4BaGckyvGJjYjgjXxoihwBEYe7Y6mVUa8qfBmHMcjSfVX3Pb8rnNU4APiqFM2RgdmhSKfv7kFwuzwM9mCFM",
  "key21": "4tFyv2heTRMsiKJ5p2iXPUh8a3tWw29Ybu4R75SKdYE6UfVK3Yc3WbhM958vWUyF1QnmVsXPYr6QXeBwH7Vs2hgt",
  "key22": "5vHbpLihKc7q418wbguLwncRmEpMQYJUu8km7aeGGZjezUCfybk3qhZs7K21djtWXfvKtF3hyAhW9Lh1o5fD9jHn",
  "key23": "3sgGqQx1H5UVNiZSS52DK92d7qoTcDB6BWo6iMftcsXaaLCbGWtSEscNf3ZmMtwRuHhoerzaZcPrJ9y8tEEUaMmz",
  "key24": "5P9dzBDVaaBfb7eRupFoeS8vehvk6RWLWVDjBw92SBHh62EkahVZxQz1DMfd2UWHVvmvjRgwmswtcqwN5vhxhDSs",
  "key25": "2svjF7iDtn9uuuAqDkiWWaB88KUp5EAMZF4gvmBe8QgPPdyo7QiRchcLezHSz8PCVEQ64ZTboxtf2HFQKF9MLJsy",
  "key26": "TthqxhyMdMtEoCVhJm1jFcQq8CBSWK39J2x9MnH7C4jRVWknUtt2YJ7qLMzgPJXgH6kfHDqT9TEFqQxcbtCc7nt",
  "key27": "48j3WHcZexar2uhd2C1J18GfhWpszwdh3i7NTAw6JcRJz21B2iJdvR59vv6w9VkAtx79xZN3NAy8rDFiPZhRsFvQ",
  "key28": "4QE3EynCmspqFMU5EWkqqngvKwbuhvfGzNscuNvmLsGbPJXD8MbSRwEzZdit6CfWvY8NzGTuWQM3LA4ud7hw41Ju",
  "key29": "u8SmCbpHsewQ1e2X8cn1oV2NHRr1bYzgDnARJLmDcAumrRZJqZeC6TqLPJtDuh7Jntix8o9zQwqiuEa1d8zkBH3",
  "key30": "2VxN4YBuoiNgR8dz9QKb6x9fMqJJnkjwsqtNGMKzDChmLcC8cL15ES2gZFbyZdzTohLwAVVbXCMPEnDaP4hCL1GM",
  "key31": "3v33UMnSfmcAhc6qQsdHgoeRoUkotRvZ8buPm6t5WHoHEe5XcLx2a3MjVmcwyuTvxiVPUno3qvuDXLdFTUU264aq",
  "key32": "59g8kvxCdM3n7Lg11U2bhr7iXNbuLcw9RndrehQvu6rF2VfxyBTmdGNY5gnCJuFHy9VDTwDH3uFuwxrkfoMWTXq9",
  "key33": "3NtmmegzpCKBJ67JJ3mo7QSszbArMvsc7v1uVAADt2yGYeh4RH5FTjQwjysz5Ycozh3Dqi466AaVS5ZrcS29TqDj",
  "key34": "4ndZimvQFgGQt3XMAuoHHeC4rn7RsZtVEnfVPJzbbtKjCbXy4cw8Pcm7MsZheYJNgW2vq1TDXthdQaynPaB9mKTG",
  "key35": "24hMht4ujvJjpCB94vaeK5mMYF4rf1h5BX3e2wN7ckg5YRndHSFmwHyT5nwD8Z3BVLTVPvaSgzYm7eW92BDDvfqL",
  "key36": "5U4f7nmXbrPWP3xYJigPXfqfEem8Uuf1FmTTiZYzVWAoyEKm8qPsVox4FfXRpws84zeGPqWcgYwRtCj943KnxAyZ",
  "key37": "5BEecrf58jqn2u5x439J5YUtT7v1MC3NUNpYxbu32YLwEwAJHyDZHJZhBvJAwbe4r6188fRCMB1CpVZW6h77HgU8",
  "key38": "2psDbz7rBhv5xXLgoD5QCWwwTjfbopk3mYEzKBvzAVW1JFZWbZo7F81U6aQjbNxjVQ7Dxuey579wkFYSQfJ5a6Ge"
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
