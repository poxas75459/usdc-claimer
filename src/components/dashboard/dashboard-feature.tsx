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
    "3MiGuN4BTu5hzCfqzv8y2SHtyXNTTYZQxzLP8uwxTg7pd6SHXcT3YKumCvaaopDbjQcE6XeFXTNw3DqY1ocjjp39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vXNxwfMYQqdSnJCRfWwt4VJUFD9sGhQ1cJa5BuXSPsevaDX59eXRM7vPmL4mHRq7Hh7aX16bpamxsCL2aSYGLs",
  "key1": "4pgCKyqJeiyATRxEijxPZttWKSNdrWBRmuQuFchgBw9NMLw3iLFQgnVTf18Jsc3rT1kKm2gJ3DBiEQTawXEc21os",
  "key2": "Taez1AeqpctPu9x6LZCeBHpCzGnaC5MQvWiqu3TzFZU2XMQvk48rCnCMkcReJuPNdt6EtuVYknFC5KEdVwfRb7J",
  "key3": "5dtGpWZuBT8xguLj7QLdesq9i2umzfeUo59jWEeCTDWaFZFc91WT6agyv8Mn7gCiX2fya7r3yr9gYHVs4b5PHqW5",
  "key4": "277K1hHTdpfrJitrpnzDmnAAkUzJeu9CfYXiCJDtgUWC5ZecJirsn9ymtWFAjmKdgNXHrLaemAx5QiM7Hi33r3gs",
  "key5": "3WbzEjmaMSsMVJFjNUc84N5mHvZeEFgkYaj4XQtBSdqD3s7wc6RckqmTLfVuuaHwHnqfhtiK6WxA6rkvmyNjXRBp",
  "key6": "5inmZGVLWWsNHAwcYehDLu2aCBSbioXb12vKJsr1JBpaN836kMmN8dwb14x5y44UsxJSWAL89tasEZUY2mDx2P1R",
  "key7": "iDXCueNY75sh3DrdcW7xbabGSEdcp3WFKSavqDVyp9g8oG57tynQhDztg16ZS4rTmbMbPmmbpgKnbLZfjagy2jf",
  "key8": "63g1L9s9vVdRhgKDcYdHjEWnw7MsbES47h74Cm6wgr5zH4b53VytXGFwJiHSpd1qV5rWnJgHtdf3dJKDewMdJczK",
  "key9": "4YrjgcVPsa8PW1L1ByDcq7gpkQ6t7fE411WZhQMxJMbFi4ZVNAG6wKkmXUfXGhMoiRcjDHF5gNL6SaAhWyj7vJ6e",
  "key10": "3namaKDM9VLs8fxDcy1jGgd5xUojvg7DJezTJSsBGja2PhRtoHt1wGDQxx62xHdmqPpYGJeUPRQeN7zcPFp6Hyat",
  "key11": "4aTE6GuM41CH9NLBoSHs4LSJjgq3CRdMrQvWmYVPXyDDY8KEQr63tDREYPRnFGFt2bQ1FeHByhdV9NqeuChb3enF",
  "key12": "2Coc1wSRFvfMsk1HShyoDJfcxY7QYenr99Ht7Hs7sPB5H2o4UPsFvKCnVYvLQAqvb2aPNEgCyzm5nm1VmGnsJbcT",
  "key13": "zYmbxoSrDhPTf98kuQxHp7KBdWM3h9gXPaeunxB43jWZN3YZu9NbENSJBijx8kGyvisNNY7zAHhZyjrvCxJM33J",
  "key14": "2XDjzBizwaQ1Sy5tHg5gTvtcX4axyF6d4rNtfBkrepKArcpkzz5kPYperoepgwFWzGKE44TEz7mDy254QKso9fdH",
  "key15": "3Yq9tG9DyN1LX3HjFRuvULjbKKXVmv5FwgMmKWEjK2gDY7EztbmZHAndKfzwGR9Zn28Dc8uTd4BZNcH9DWCszp5c",
  "key16": "B2EhLERToS5Mdn2MuJQEJ9nMHh7dwTeze1CNfMCpsjg8YPSjhUFNRyzBSoogUra4W8rryX65fUruKiCJZ3uKgqY",
  "key17": "3WCktyNyPU5kVRuwKKmNfEghqCN8NypHdnBAn4LXSNt2SVSaJxPUo7uFrLp7PHNJiBZMtABbFW1UiSxiEyiL7hx",
  "key18": "2y5mb5HwKTb2kq1siJZNv8ATHJQFAxmp7MkoGD2URFbwFv1V1eXvX5dt4ftjjus48xaV5WeaRpj9oP7ZvDAs2vwt",
  "key19": "Dn5NurTcbu6D52ruB3kaQGh7PYQdUJDUJf2eLgQwLpr157CdZxo4mW4u9XDrPZeu7NYkoPNgsWPruyAUVwryWRs",
  "key20": "vRchDgrPby12e6EqW1ScBkg84mDkm4AVtZVu3joHwRcxfYX41LcYLntpzVeoiCzmhVzrcBuuZSAZTMDYYHUypvy",
  "key21": "5VV8UzdXaLE8ot9UgdGfvUMjyXewQ69rPPpoEp2gYUaPa5HGWt8FegpX15WphhVdLDJ4p3NyXHFHd3Dnb3QhBahw",
  "key22": "4dbe6APijCPTbi5p8ZL57M3rtfRwQboN6hyjpYqsT8HU3fHJ7hVFiBNgApddFVZVZxCQ356tqMMFW9xMifBtVcoP",
  "key23": "2Nxng7TngqTuBeNKDUp6ndiAqp7aShfsDSjna4iGfDZDVN2cTS6XMPZLE71ZMTG3kKtUJsKHtwPNqKYoZuf9WYKG",
  "key24": "2RqZmB7v4D5k3sMdTibVZk1D4ykKtjwFbJPzSxnT1USBFeoUybKLHV6n3KVnAec31X5WFDuzRfVZFeq1z728UUZM",
  "key25": "2U1DWwa3YgbfowD1gU71KEuSGRaCDwRJH5uMoM5NJPcnPkdfKfij9JUk1se1ipLZtM6QSySTRJVvwqHFLCkF5HpK",
  "key26": "5UWVu6m97e7HzE8r8sFcXohVsoPgQCEc3WZH5U8zBBSQbZZo6hqtyHyGCk2qvYaZ7TESTiCC6PG2hjXBufwVqG3e",
  "key27": "sDfrvNx1ejd422ayzg8jJahSaXC1XzuvrxLfRYCdpzbEWvnF4yR7iwazyMzq4ipMk5YRYk1cEMrYVAVTzeX3yFi",
  "key28": "3pGw5sxqRVnV2MhY9ouknaUYLxWZetR8EKeqnRJT4nA2kjNddPksX4gKUyQcgK9Tf93NjN9Mdi4NQhAXkAPqHJaw",
  "key29": "iqofgnhwcoqF84stCrTMUGjVoejhjrx1eeQ1BK33hEk7VQpi1kUq2po6wTjtosDQTWDmjuc2dxdJtiCaQ8yWKrf",
  "key30": "2yxnPgT7WZYWAKZwuqn6pzV1ndma9GYNmkYcUnYccXnQa6hFuV7HhxUDJk9odSn4ui6G2aGwAtF5dsa1zUXyoGad",
  "key31": "sVRDoJctbwkGaCHK5iJnxjcuFJgXVMt6rw2PgmP5iAkLvQCwj4rKYZBWXFf9cMmRH4PxLL6rMpfDE7wA7D5qTAa",
  "key32": "2k1DRYj1WB2tqkFHWoKqjMSoHRJKG6ZJHTNavmg6qVFEhyLMiivVrPbDhxMGPWgJx7TiKX7TfdmKGdRZFP6Mn5HN",
  "key33": "4SQqgSpuA5XsGDVfCSadatTqRLKkGQsnmofNDd9dPCX13YKYYsuLpGhPtjZfJoRA1gFef67iXsMysjbokVC1KzXR",
  "key34": "4J9RbitYg4RoqFNbGXT7kNnoWLG5T2QFqhmddFpTf8GnT5mr5Azom8HE1qmVxP42vfc3Kk7brvcJAcUvQg6eHyn",
  "key35": "3J6WPPHGJc7LNkmrAsiymLZhHSMWABZ1EjvDq7cbUtug9cjwsWS1eEZsGaBzEXmynts5xjHpivJwhSJqyyRR5GfP",
  "key36": "arnRJ31P2SZqnz6FEmt29QUnGRkBghnTyrQkvmH4XwWqAHjbTyE964i9ppQ3Tv9fEUZG6BUZAnBP88qzfhhM6oz",
  "key37": "5f4LkAhJzVWbRFrtGYtdwKW4ZocvcvVK2G1GWnyD9jHfY4RZug5miAMGaic9FfgFWFHRjhnXU4wrc3jwNEtaBwok",
  "key38": "57K1zwkfto6tNogTDhtSHwAs7eL31eiHFTKv1BgiBtoXmQA9bJt2hWuBj9nEXnB3icjeX2n1QaPcS5NYxuR6AUHJ",
  "key39": "cYGUEPvTpsh3q32WrLwcGS76JJseCq7rYCyNYu3tSSvjnPKEXU1TAb8fBEhukHEagRTPUoFjWDjNwruBoHE3WSp",
  "key40": "e2Nz2378DarjeyhdYA1HaczugM7pWh6Sm8L5c2C2AiN3yq49vxHMAsUW4m6m3cRLTcxNp6F2ENNpnAdHnc2Ya9o",
  "key41": "58tNexRPc4LuH4EfVEwLUwmq56fk1eGNTHxizPUwGdfmAQUZuAtALccRotB5wuxfKXN3ce5TUQe2Dw47uWTNNovT",
  "key42": "48Ww3mbMNEFh5T4w88UyFcTZEWHWZBvr1BQ4uuK71V9zwpzFAbK3Jpe5NS1b4oNdvLcvrxZRZjW7Sg1VXqd9sAQg",
  "key43": "3WtyLdrT8k5CWN3YE44QPxSxRzxp9GpLJuaqnwrktEetAZWhJQSfVxgyLmSs7zbA1rakf21gApS7Dm6NsVVhjNMB",
  "key44": "5jutXLq5bnW2gGKvLhugP6hw3byiXja5FWA1sozYv5M133JfrXsA7JKFc1PiPs4gC9AMR1NXHez2JhuE77dU2VXb",
  "key45": "5rXFM39fEwEAJbsPb5DjhsHict3Hp3Q3CEsHVix1C5EcPoWr2DjvAS6ysrSVTALrQnCc5X1Mj357S7vGTgz7Q9Xy",
  "key46": "HJ6Uww1fRvWtke8K9ziABbvm2uDHvVSXgAW2EdYPrY7iZrte2XU3YB9saeAnSe9X5h3MyChtEq2zTppkR2951a5"
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
