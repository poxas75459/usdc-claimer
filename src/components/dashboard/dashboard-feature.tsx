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
    "zz2zjfUqngjXpejAxvMMpYYjAVbmeThG4wM5tcUqFrQ9rVfNLvq9FhzvNQZLoXDJKf5Lu8AVvn6sdxWiXGs3sfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXomJfGQgG2dtX9k7txBd8hMFzzV1QHLmf1KYwHq2L7ar1Uk2edEZ61dmrUmm99ib5CGzk4RmNMHuecZZn4MSpt",
  "key1": "3uareLCwH1c9vUkjGK6FAa2PzDVG54mtPUCMqJkKVBiCun9wKxivHcMGFWoSzfkG8VbsCYq3PVefLzeQiqwLXVqR",
  "key2": "4xRJBqNvpCQLh11X99b94Egu9YhRovPKBnHC2BGc6RC5zjzMeVSQnTL9peqUh7jQQtrtWF7MuTSxdBQvaC8q35Pg",
  "key3": "9ZstqhZsMR5MrP5Hh38Q136pcyDGd53JwSwmFemgyRJY32PWs7qBHT6pjtMCLVRwP2373kt6DbpmzPCBXfErXdS",
  "key4": "5yxwocjPQWNxwjCmn8UAM4RPZVVqzUSjxuorQSnV45KiiorPwHGB6nY7nVu6EGdhQDSNdZT4Sn8GS4Y3Vat1SCiZ",
  "key5": "4tkPv2NNHgenXxdZ3ykunVtS8gYiNCdQc4kXycgEuMDQ26Kpo4Tjjg3VpJuEo2NBBHdkhVekYTXexmwbvK4iJ92Z",
  "key6": "3BQWsWRFyntoGqAbzZHyv1TteuaYiugavko4B4sGGpfk2czC3VFhZvmppDZ9FHoog34PP7TNwGG21x7ieGAbr4eS",
  "key7": "vVooMCkZAQdSjtgo3625hHGMzMWzz6nFSeDTZ6sTUALJepgy7fXNBEg1UiwahwVYG5TC48ApUwgn3Bcdmf9MgXD",
  "key8": "5XAhwxrF67pAeVeCBurwgtV9TMPAoQ1vEBw4Bb1CvATkQj7oR1gQL6Fazt5Kcn2ndBSxvVH2MfktSKwijvRqEUZ",
  "key9": "4T4mqFTSgETh98AsHQtGDvCZ5Pghpps33N2tkX86chij8dj4cXSKKh3pgvf8AFog66J78VFPkeDDsrmxxtihAQyt",
  "key10": "4h74vUXUCX41HBkd7PPDpkhuoDHAmnhxKz9Dc8k47x8qHr2GeLY2VAkdFdEiZCif54TqU6r4SeP6hn7v7ZgHDpKt",
  "key11": "2JZJKAE99jvtkcgELuY1sSXWsYnwkhPQqGG75vFkBcAv5JiQn2W9Y4h4okyP1dkpwKMa1WPTNGMh9cxAMDwZY7Ef",
  "key12": "25uYe9nG1sCeC6S5sxCwKYDMmuhHUd8UJ8SRvLVxaoRQEF57Wou2gqV91pEib1zCwhAqEhGNwVFgR5a9pXrExMA6",
  "key13": "4MNENPs5t7LdJTw6Qk1LfjVVcZ3ajMWJS4GHkutf4R6ZdSuGiNPtVgdM85qRLpksVRk7iTM6zerTqzYd2fDRugY6",
  "key14": "5BMyJPauV6ExyD7hCnTyy3HzU1nZx3WnChgxX9wiNyfzT8VHVS6zSen31KaCc1ZxgCzj3aH3YyxxyJWePv3BBjui",
  "key15": "61Bi7t3iQzXtmpTpdwKjpAZ39GbiuTzPWYpsKCKTwJzr3tjmETt7mJiMs1XDigYyqaFsUunSTeuANk8okPvwB8o9",
  "key16": "5vX7bK6WSaidvjHQ3NLcFQ4YRA56QGXv7VEdjKFmrbc2zSKA78mCT2ycU2pmHzukqQdVe916X8xtJqApLdyTadQx",
  "key17": "2kLFDk7MMZetScqkPq8jnp2WpinWygDTSzqegawDTfgGmJ3oiXPAcguDDbnFSX59xYvexMqvswwCACYzVQUd8aun",
  "key18": "2dQiMGPsgdT3Tmfn5aM1pLz6wVn9ws93UtBCfNC5NL2jQ4K2xE2pdp92dPHd6PZWRpphgsvxSRUMGPS8cvVMgpTp",
  "key19": "4HCgGGrg5xZE9SCvmrN6hrR5ryjV3yDdeRye4cCGfBVi3knmLChpLksWR7weXhELhGzXZL9WKZS4LEK5UAVpJuv4",
  "key20": "5qTaNN4txZ4n4Duzhv8oaRa8qKpBRoT15EGuK3pX1XaCRuC1Wfsu6i2Z6sZ3sGJDXesST5ys97eWcs3GhAArxmCA",
  "key21": "4CGwN1S4ZhpugCs2A1zjZUdDerM4BdWeQCDLsHmpRoMUSKfz6o2YWGmsYgUTzmFYc41FsfL1dBQV7diENmxWmHxc",
  "key22": "sakLo7Tn14SvUzZDwTeTJQ4CwZbnmMpiEzk9arrVW9TCHZezsbSvs1NKbAowhtGYm1dkr8wbsrzorh8GVUkCuM9",
  "key23": "4rZABNS94C1J2mNCqa3zKvWbT1R9rjF6Mz2bM3V9Rp59q3r1CZYCoFCdVSLGirwu9fgeNWER6AmvHZtJgZvk92Yj",
  "key24": "2YLvDsfMD5UnJEQczPQFzFSyxXVb4SSysCVWKfFg3JHdm6c3H6pGn56AWfL9cetM3zCtXPhE7Gz5gxbVnYra6kAh",
  "key25": "3c9fkPvUBh9QVNfpecuZcxxBV2gry5nRJEUYL5NgE9XQZ4SjDv1tP2WSougTMqQa96yX9iGfKWirhCQQ51dadmyd",
  "key26": "5KrdZTu5GqG9cvq94v5vTtCfin6fSxW4QTQSskiYaAkPW5Ls7BhjiiyCcY3AGkEUXa7U88jdEwztLrB5tyYNXjWE",
  "key27": "VbpjMgctTesdLnKVKxppjhBSJKEkgtiwo5LpF8L7WhXAkyKp7zy9Zu3uPaYvSfnBjiNCDoCyiG6fyZn5BwMKJwg",
  "key28": "4ZQcw7LewwXXsdafoS8jzCQhTYpvnyEKPMprof4625EKHvEes69HNd5bsxQ8iJuaUcemN6JcW9cYWvbP49ow5H7g",
  "key29": "4Z27ZUi572nJLC9rkVoG6bB1bRaZnwTpKmBT2CLP5satwZwYu4Wmxy4Uhcr6x5hc2DL57mmY3yBHTDQxDHR3yJX8",
  "key30": "u4mgXCMozzhu6TXJybrHhwhnZRMKXP9Uk7JA8cjnNfc9FHwAmbawL8uXuiHp4UTZa5skNuThAzYeaQzhGog6nDA",
  "key31": "5LwWDjCHYCaGXLx3SE7MFGVBFAyVV4M47bjWXneZi6F1pcAj72wKdy45S8WpD4vPY78CVN24EB9koWDc3oGm91fb",
  "key32": "hKKHCaedDUCY7BqWEtWhEUhMcWhMy1TJKFeGdPmJMNY84P1YdGVsKLPDDCUB5qpYM1XCHpdqtkjdZ2seV5jFMZe",
  "key33": "5BKeRpuqeStuGHsQ7jD46zvw38Z7T4hhrUs3ZnJg3dFUqSGRg87ggVN6KQGk8aLKCwcAMczdgkx77cotu5YuhNXb",
  "key34": "4LvYqZbbisAt8XDiaADXMMyo6waQg7W2wH7rAXi8QsWLu7aM2UUGGPFw1SHAP1iiiicBGL1QrZEUj7AAoRkcLDds",
  "key35": "4WyauaSv8k7NLPDSeyAzHwTDxKvAxhhH3DWLVM9S3chGV7k7wHPgKJDHc6mkXKx3ZJzMtRE4p6aEBo6EFrBMbhu6",
  "key36": "2X6qTfkoSGGkKKxSUiXRacbjKbpPvmBBbgW2JUD8d3fTpCjuXppcfpPzzKdRiQhbKGUgAg7tvFkGNQg9fpkBAtyH",
  "key37": "23nT96CJedS1pWmuLhAoUFqiiz9zNqFi1Ax71JTg9Y99ai5LXR1cfnnucDm2ucwbW1D5TUD7sYG8Ndy6UdXq34n7",
  "key38": "5hfbRWee3C7bbGpxaP9k8GLzCeKn19AVMqFfHqMsTs3tkJDk4s3hfyySzZ3FtAoQcCh94oE9mxxhiexpgT5YpykN",
  "key39": "4fW6iWomtYQomUnkPXYJmD3tuhbsuQHGAX33dvtayPvBFFsGk7k9YK4AdEz4CQUL3gaW76HMjqxQDiAvEHTnn86J",
  "key40": "3qFJUcUvGamSnMjvsNfepAAGVHRxsNC7csYqmu31khhsukPx2qD9yRD9tr9qcoNN38cDeCyZsf8s4TCMYyvSkuoX",
  "key41": "3UBkHEyFYDiTxXvBzYEcp5S4wDz9NpZLErJqQARhoM8TRusBXhrGMhT4hmjZNXD5LjqvPKELkd2qRtero2mkW2Ud",
  "key42": "34LXpJG5yqBagfDmyXKD1icbxPJsH4Un5GQ7eq8zeeB233wNkYxPPEFPgaPFcghodhK7P15KMQc934JCTZXHgG1Y"
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
