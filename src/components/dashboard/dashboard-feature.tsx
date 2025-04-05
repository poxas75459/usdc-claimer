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
    "5F1hwStxx8WfA4dmNQgMfZz89tWSRqWLnmf9ZErMeVRnQks5hAg18USxzidmbDURSn5WZt8oXqsRvXLmW5Fst7q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcEeCRyq8jBu5sjDAWRvBDw2w6LqSSNPUs1ZoHTrCE1iAt3uPUutkj854ZtEzcSaagvZ8BqP7hhjL1njg23QSir",
  "key1": "3auoTLYtwGawRxTVfn97uXTzUCzFQzdL6bjqgX8eUWqmihCCUdom1zHBQPzCLEcgh9DE8yeb9sfd3poeeaRW47Qj",
  "key2": "2tDiwnfJ5AawyF3UJcKKnct2xCSS5F4X27HhasFjnyTEFR3Qyx9q2Ux6SKMTuLiKTZxULKwgKEefQtctY911NsAE",
  "key3": "3RCVeG546vpPYhpLENNEVfUtCL6xuu5onMXNU44Zhtmt5CVhzxYxgefZUp59Bnhu8aMtMuQTUDaH5PAmE5uCqVJt",
  "key4": "2v5JVBpJXCHKv4wjKHkBaoNZtcnzuZzti4Xg1VAFVrD9UVznfv3NMKKwmndosbKcMiXNAmMXnKWNS34vijn8CDyX",
  "key5": "5rbbrBywKCxbQwqSF6Cr2jbyAp4gLFbhCR73pe5TU37tfwdpekhN2eExXaAuT47Q2ZmoXFiTUKkpZ3YhceWBjaQb",
  "key6": "3p22rng7YeRvFL59SzCU4CqPjtfp3oSDfi6VcC286HpSDjsHWGNMFjtvTeY8EXApH2mSVXY9jtoUiuVs3svj8zv7",
  "key7": "kwxCp9e2azo43iCQ8nkRJjQVWdHb1pNnhUaSZN7gvgwVG8FFm49GbCUfSbz81xw6YEnXJDQcThVZL9cEUBEWeWd",
  "key8": "5cmyu1k1iVxngL5FH4YHziKdbs3vRAT8GENqsE9Y9Af1VVNdaYioRwK9dcG9bKxMGuHGRF8ybYfPA8vB2kaoZxbi",
  "key9": "2s7tnA7Jbdk4guSJs8eu3LrT1M2PcBgYBZyGWCstssQXg3qLnCoQyVqGonUPuyDRwuCHYFpsUrYYqfeEjoCgqzAi",
  "key10": "5HsNVSQDvogEfsHWJQLs4ytikbvV9NNMKkpTwxk1VxmzY5YjYGyB74YEkZnhFqkh21L9SmXhowyrQJ75bQrn73va",
  "key11": "5TwSYkXMkh8jCHqZibF965w1u49KurKxUemUQehcsxoMB13fDXiQDd4YfVzDKBx7AAoSNrL99MxsD2ooe9B9hvLM",
  "key12": "3L6yhQ9kdbDFP5FyBTaCoH1HssqkTG81RCuCgeu9TTcnipAPrAsmz3NUZayEtfN9zJLbtYhiVA1vNpevA7JTt5LH",
  "key13": "4g6TkUQvoqdsdZ7McnQNhiqn9QUGRJMuagM6piPnAqSAE3QY2eaoa426dsnvq96PwSRRbMpGahtxhgVS5F5yZrT5",
  "key14": "5f6i9d1UirdyrivVDJqi8BB1J9vLG9moyzWBG6WVLsFYRRgcAhRcLtS9tSkMNpXNtcz4bEhPCJNUttxqXLC4QYf3",
  "key15": "3EWbNBD3VhUWC7uG3ZyTeNqzLvRSAmTUh8qakU76qr9ewbBEsSynU6YB5HEJTyW1ywUjEA4Q8UUtn6vn5tLEGx4D",
  "key16": "2BDBkGq5gRWjZst9hvUS6JQ1DxFf5Waie2ESosQvaK3xgB9x6ADFGdof7DGmRkFhqtowXore1fkFNpLKcr91zdip",
  "key17": "4ps9zn37Wiad329FzWV3YWtxyEevPttQiSDF3dC3jM1DrDtigT6ZhNBK7NXbCAA5atvTzuuhrmwCHG9zuDyB98vb",
  "key18": "2h1Qy1zjLpxKtZg2cMopbGPVrqVnuSMRZ3AQ6G65hVGkG48kxRrjbLZ4NuRAKDMNLhdvYdt45dTnRf6HVpNJKVho",
  "key19": "518mRcs7isxCPmfZAKeZ3jbYhNEKXDWC3AjZgxfwhBJbbMro1E3SrEk4fUWw7G9UDNd1A1Kiw69MQvb9fugc8tUo",
  "key20": "2yz66nBgAxHn9u35BWN2HXDLiHwh6oPhGNp3R89cPkBnCSTUFrk8ZPSLJPGrf55fxVPhqAsKsUSvrYhdjpicpBRP",
  "key21": "46L3dmW8qiwsBHha52yzYrmH1nb9BwQVdVSMeqNpWYFq4DTBTEmqFWdtXKHUDqFc6Xm4ue2cTvbb6nAX3aa4EKAJ",
  "key22": "5VK1273u5YkWY4LWMPKD7DTMeZxomWQJ8PzGMBWCrk7irpb49x949EXuA46FoSzLV6579zMf8sFVht7eqStfSR4N",
  "key23": "45tnYjUphg8bNFsCcictXzpsyJsMaTLdpXrQoXixytzYVUehRixoKah1XnSRkzBaLxZkW5x1jAACtkkueJ1SdjJy",
  "key24": "4YxhajBYdNojou3NGw44hG6VTz7jF5sQq6qbU33rwuFvZ792EBKwyH7siEaApxhHaqQRQRL14nL6CYiK2JxXhgRW",
  "key25": "38rN5vyo6VMKHSLdrJ6oG6aCEqvSKK21uN8NeJjXUpMQN5pCuJtQKHUKDs3ubdvRMa5Wsdch5jGvp727zV7hsRAy",
  "key26": "3398Hwgo7TNuHmfKUEwBQDdpXyyEWvE1rMoFPx57uL3FJnwM8UwGtj8e3R737sFdogHCaamn5yaH9nwRDzsnU51B",
  "key27": "4MAaZeXzEsksFSEX72Y1xpCZ5oPxynBYVqKLgj9bpzFiQxJv5q3ZSrE5EdmduFe1fH44it4tac6ZWWfjYMgtgrLb",
  "key28": "kZGKibMCRiNvX56BstAwEUn45moUiQoLQwJK43fK2XXC81pCEyxhggkk6w68spFxvZeN3yxEcthQcf7LLank75M",
  "key29": "4L9a9VHRzbV4qaYMw9BD5Uw9Cxn3x8MwKgfqxrFxMAdEUkWSiV97dwUnjQ7a1MyAMLSUzTBaT7w3g2gFAZ7xqgeo",
  "key30": "3MWfDeWKsY8iL1fnVv8sHUePoFZeg6LVzyDmWYCsYqgsvYhpbLpXp4n6sQwF6HWNQ13faxTAJtTHxENZhb6oKWns",
  "key31": "2R3cmRkstwwpiCGuxBZFQvR1koJZ1o5jRnQzoYoB5RdPaWNLF58jQtwXUi5anoHHQ8a46evyLvn6mzXTNqJv7w6z",
  "key32": "5tFSvMF3VLvCiZ2Vi9B6ngiM9c1yvxts6JxZgbm72EW4NTP1ZrzX3rbXJwqdcGe8vqPyWytXf6q5sz1A7W5r7t2G",
  "key33": "2yFbYtrEPNSCKSYCZN8QfiCFT9V2qT5VPxgKgxJi26MVkuNHfAnNbeEu5h2jac6psbEuoJwaMdd4Uhb9baK47eCF",
  "key34": "2ediBcWPGsXy2SsDVT6GygJHrRTN7tCY3i9HPjDGXAmpFACroswCNUi6fo7piYvVbgD6M5fHXVuL5KJNtmoXBKeH",
  "key35": "21YNyyGzFKQZ6imyneY1q9SEw2ySUymEbbyjUfWCjWV6bPsEWVepKH9AT4umUQc3xP25tvXbu5Sc9mfw7zPsAxAP",
  "key36": "62GF5Sfc8wxpWuJ23dvchfy7K3k4hvgcT582fSX4E6jvkVVoEpuZ9gBux2jcUZsLJGnrG1WRmMNtaVJ7JZU96Z9U",
  "key37": "4LMznnZ5td23rZa2uwxJ8uERz8QhsGVyzW7mdnA5NWSHpUM1CbKUaDfimSuJHVDWWGywkCy2QLRbsdotuzwp9Xeb",
  "key38": "5GTm8YxcXh27PE9ab1sdFQLXGcKXU9EBGE6oCTLHBy4HEjvGMAtk2iHbgunXEjWQkuToUkK3ejThoV8YXRArHPFq",
  "key39": "5v38Dfjvhfv4YiwfHk7VkFCnHyy7aUPGLnfUabwDfy16JRi5fhjSLbFbDbgZgmA3cgNgxD3qwSDqGXP9qBAjPG66",
  "key40": "MSfcZ5YCCCc35J9cun2cDsFciJsFAQL4M5a2C4JjEoUTYFwXJ2CrURy91Uh3BgC734SocmCi6bcr2m5ydaDYMVZ",
  "key41": "4J5KtMrwPMxZrtxy7JCJGnumv2M5WpLQdKmWH6SQPtpo5favH7UC15upyCxoceDXRVjGAFo7DHJiRHPmGNs9wCia",
  "key42": "4WK5ehtSYca7VZhSWhgdd1zqMytNhYVb6FfpZSUKFJ6NXb2C18pXf5Dc9fSWqxC7jumbNp5Fj3jro5VD6h6pkXvY",
  "key43": "34QHhVESdQKk7hxtw4Gom32PcmyoQ6G7FVcVKCMBD6iZSu6EkR6MUoKskJEVTXpZCNZ9apKo9tfwAvJWo8oAJekn",
  "key44": "FB2SJvVhx3MccMXMUrtvXjCwPUQgwj9k7Sfd3j98aF1wJhYaZ6bn4UwWyszcrRpp6kqu8Psfeqztgx8PbVcER7f",
  "key45": "2YNVGW9u6DwHicoq7kXsp144Hzaas4Jw6Uyg7j6hTFwGtq6Vd2a1we73GP4xx5VYCHSy2adXSmhK4LjxUxrzpd6b"
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
