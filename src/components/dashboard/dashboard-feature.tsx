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
    "3PhDtdK4moeoeuzzhhGeNdW6B3432QCbUapAb8oKcfNrEC8nVbbcfWqHX7WuLFwStWXjinwdgdgpVk3L8uVaS3aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UY1HG8u2jNiftdbKYu42Yipi3npQMwh9CotceKrp4gAEBeJ2sy2Dc1Q7KZLqefvvDXFUJACs8dAQaowKWy6a2wE",
  "key1": "27yRDCn9PSW6qnfWs7N3vAzFJVUKV9ccAqMSp8Z75HjJhSWxsd8WjevnvsY5JxzdaorHsbufCgYnAayYR5V9WaDH",
  "key2": "2pz4HMYvuZrQ6M4VLrsDhXg6P8yEDSuaePT8Bf5fqWQdMBcrBb4GRoD1UdyECtURXN1xGiyMiQiioWdFSg44PDA",
  "key3": "mspkrLwhCabzsdRSxEuMB3Z5kGbEHJALKScQSM5FsWFPD3uCMvuxpFF1qiQCExd7uNcCVbe5d19fLUAqfk5KkTY",
  "key4": "4QGiC2CuY3L5EUZzQDbx3aDA1UqeJr3ES4SX8K7PkgAnEbyfkLRHSbKQHm463m6D8PCB4ofHqRmE9gabk7Wxubj",
  "key5": "3Kku6G8FDyGXBucxbsHJpH2qjE9MD5tBwCEd8ijwVzhbzoekEQuLxv9AVe8WJV1Dw9ukwK1weSFCUUqwJGtngppU",
  "key6": "5FW6frXaG4ynwZt2iB97xZ1KakMGPCEF2FgjCdgYVaaKfH6L2YJqmHwz8wiMXsroq2795E7Dekq8tp5Uk1pdmF56",
  "key7": "2CDTzYUdDACbdA4zB96fLLVQR5rdtFCUQ6iU9Ya6JF6KReDGYU1cRBmBS6Q69BBMoY47hDrjHN9VBddEJKGYAHjA",
  "key8": "5QhQ8DMEV6erLV1iUX6ujE7AoZZmYgJL1uM2aJyScuH2D2NXLRZrjyRpgn8iwYa69LQXS9eKjJk46JZyb1zD4sdb",
  "key9": "5s4nF8gWH6KPtAkJuQWNHvT3XftqrXjDzt9FYRB4zcSsAfFGXCeyawUWSZPa9w8tYrDPzZu3diwqVxnn4cDh4oo5",
  "key10": "BnXZptdAyK1S8sWjHGjxq8mbcVpb9HmPMRtaSeiLA3niofgyodhPXZGYicoTYZFG1fB8vFcQZtjfHsmf6TJjvmJ",
  "key11": "4dQ2tWjWEQhNxcPpJs8QoruKoRr9WuFUkrs9w9Gr9rGjLgYzSazjmt1a59TKv6LZqBaXS5TFnhaLDCzxPJoYDbyL",
  "key12": "5FptneY9Q9g5JPA9dLyDh9nySjpUaRj1HezTVX6QJu3MNzaaDw3HpMa6QrLnciMrru7FpjstZK36hkUbq2ZZE9XJ",
  "key13": "BKHXqVftsSCqeGmjwgUysjhh4teMYZ83TzmLWv6CfE9hY8CNywPisFyDq7RRyhHaxaEUm9DtFYrRtGxTQ3YtoSF",
  "key14": "4Bad9SnBoqTmwkXx2ByPJqApzNAKrwbzHNhQFZYRV8Vx9c2FeYytGKqcEnM2M1An2X71EMeFsZjbqEKjwAun9TWe",
  "key15": "4sFg5KsK8s6EzcnqjRLHdEqCg549eZBRNjyMqhB8eEJsE77cSxSqnE7ciQbeuBeT6WHa5iYmf7c6gm8VeyBDy2Lb",
  "key16": "4CujKK2i2LntZT7opSu6hENyyaScqNctHkbcoDUsGEEd3fmxFNB1Wog1KamnWdDAZrnxZb9rXuT988mE4wGqhjQh",
  "key17": "3J4SiUFt9eSXuLbwSqF5ySBm7disBZZXKvL9BpW7CpFHsZuBbKycc72v4z2s1Kbi9TsRzigZ76Hc1nUpJ8SxPaHy",
  "key18": "nhpDpkkTUf2S4MepVKFNpguLLWKG9NvLt91btcAAXMxc74ixUzU7fTbfzFkMhV2xkfwnTFKWT5j4YADX98QxXR6",
  "key19": "62Eg3NY6XzEQqD3cMu3BUxB587DdRaLKaQZuDyeYczQqfBDaLLugxbzUvLp22ZpSsLRB98ttQxQAdVTtZTpoTJC4",
  "key20": "5c9oDm49evE43JbDXu2zUrUk9mFSiE5LfC8gDkEtT6tmoSt2Ea3AEvRvetLYjumGTHQLqnZG6FafBHMz76rSqpgj",
  "key21": "3QP2WAsMC3LEMyruxd2oWxiJM3YY7mGEbpvpoDRsM8h5zBK2NNJ2Nbko1KsnwbKVLgN4pmDQhp1GyQqWza8APCwy",
  "key22": "2MqJbRKabaspj9yCzRsitKmSv9J59XSpvE65pqJ4kDgNNNxjS75YE8SPJsqZetoqfwK2eNzW5U4F7SoLTFS9Agw3",
  "key23": "4c5AMNxPauY6GqnBRcwST5AXGsZorAiHZ53sHTeCJsVccbNDZuJbBs6iaBk1spjDaGKvgrs4BfDiRMLaRBoU4Gfz",
  "key24": "4dfyAjmaZn4RTYCU1KD7LFx2y92rzE3zwuGtxz1efqAXBB1hGNe37RVkp5E9euytUnyTefiTHQHNcreWWgFkqL1f",
  "key25": "2LWkt2bQoroFzLEc7Hr8ZEVCi3yWu3RKAQqCjU7jWByzmHBGZgeVEaBoLctaYbTDxf51GpsbExEt1eF1MAVztSRU",
  "key26": "63LKkQpr69sA4X2wf5DuEK3RHo1TNHHtv8uMZDgiXdNoxEa1DgEdVWGcFXuXXktqvfXegjTLfb926TrVETCX7cpk",
  "key27": "2ZQTfkcEJ3tZkmWy8bEUec8UsH3df3C6cWo1weRDyj1Ti8kz1PRyjQLsfLHoxxrcwkXvCAVZWEABnt2Dpig83bMB",
  "key28": "1s3teXNUXHwLC3GsTyGHMqbq17iYSmYDBuCzKXKXrjTwASx39P7zCdwxUJNsFedt7ZHk5PuNBwzB1LHuFtfoPfy",
  "key29": "4GsxB8anSbCQU81jvkzAHRgC2grajV1JBtQEvV7hs7e7D7LZsS51Mm4ox4oTNrWaSkSLpoBjEDb56bxEqhfZqn24",
  "key30": "5JZvPyzUWXifmJAzDVYS6MkcHmbgymcTw5wpasFgGzvhPS9AfFVDHyDj698BnbUsxfdrjBHsriAxB7RDQ97EPDWp",
  "key31": "5FuHSmg5tHjaLwyxa9XaUvVzDiy2KiMz9utpyWNveUEFD21tZFht57mLKX4TFC4VkJLLAsU22oqGQZt1LKesAAd5",
  "key32": "FHQiK3VaR17SscfkH2o3xaYadtVjHJgbwmvMmPWPPJWRsAwAt3JtpDkaSRiDVSRyACiHe6Yjjs6FQRCgjMhk1Vk",
  "key33": "5pUzUQfcSoEyrtsmRAaGdvGLhjqnftshKjj15uRR7Ho4PtDf1bbzTpHiatMLzysrnzBcCFRL2jRaSdUqDPD751Eu",
  "key34": "3ZZwcUd7PAz6U9KRu9mSTFpXq485aL1vdmCL3i9dfAhkyDirbyC7gTWqme4JwS96ajtiba7m1M6NCK8xYFqkmV9V",
  "key35": "5Rh5rU7UV1gN5NybSWEpRtidTLgS9ARyGTvg56Cq1j6BPzSqgiCZrL2BmtyAKedeKKtmbYZDwKqU8WNWYuucKP3X",
  "key36": "4ChbPrDXV1RJrzMWhbEEt41bssDsXAe3xrA1DDRoAtmqegn9KfDDJJ32UMrJ9jfxumAXyb4wvdk8e6RCiGQuxxYL",
  "key37": "5HEAcfZHcguqyH16zmjVVnbYg7xZyHLW2YHHFE2G99ZDeqCWXYE411Jaj29o6Q39NL9fXoKNpLBe1B8aKaX454ci",
  "key38": "2sAwm8Yz3yXKAbn4D6eK4zhnNBsuMfJucXBnpePDGBoEC5WMvnRYK3Zb883igovwhYj1FSyiATt9vpBuoQyygcBQ",
  "key39": "4f2MpufvJvdyMrD9BdVJcaj9fXmkC3n6BMUHwBbiSBmSeXhP3kcWA3yDZ3FcTFZhFkSRP19DyS1X3SXZtsS5qtGu",
  "key40": "teUt1dAzvpDQ9uYxdHCqADp4KRx4kRniEwQWihZwGGMpFh2W7XeyLrnH3rpxDWV4NMy9ykmH6JLYtYSKRfstUtZ",
  "key41": "4Th8cELNRpeBNTEFR8xQFpbf9pQoiNrkbJFaPV2JQszPR4iw2jbU461ZzPR8rP7nchxPKyjHLEx3XYnA9StUHReH",
  "key42": "MfAAtrAXC34c4iPmcU3A3KUMQKXSt8CMjnrpd5MbjrsBedR2viJnbRpFMYCT7UQsadj5zz9howGD3gW6f6XwW6W",
  "key43": "5KPaw4KsRv5AjhBGF9uRrMwhj6ciNMmyRVRmGvj6fXiFs6v4vszE9bwDWMAWrv9xB1QFHrVqxYpQ3ZGNoii3oPLH"
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
