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
    "uMTb4AnytGGo4zsPrp3hKCG4y3k7Z9pHM75Wgs3aUHaKKGWY4Nz7Dj3U33zYRtCE1iRHhPj4R6bMhNi8Fun3qQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeBR9aZuz2Sj2CxWp7uEnaZEX2bNLQJTdhf7ZugNTQxKkECExitdiQcfCWA1atrpDvQQetxwXfsKMwxLQ8DnofA",
  "key1": "4RdzPpzioh8JFnsyKhjjKEoEm9m75kP3Q4zakJzHyWitBVW2y6NVfyJqLrRY1wZUy9FUR44C2sS6sJAotgTN24Vs",
  "key2": "2sPgkmYYbM1RCMUdS2mJP4EDKytVu7FKach1yXfcCeJqAWPjvxtvdoi6u3LqH8vFRwZkWWj97jg76JKhPNtRyoE3",
  "key3": "FVEsnaMR7pmb9UukW4GSDZiB3YAZDHymGV59H722rts9foyS4xgUeuGkML48T8agWKCbCLqhxQWcDikyXWt3E75",
  "key4": "5bdfQTC6KZKCm2PzfjkRKmFUXtWDLmGxmP6mek9XmQQahT8EP2KRPHpp25a5uoiqGvtkjGL35hPtPJ3Mad2SWQqq",
  "key5": "3xsCUskSrmZDuGQ2iuk5VzFHLabnULPUdj9sXGijrxuhxzNf578TXva6F5y6T8cZVrRke5kcmwBvvrkyAt4x81vm",
  "key6": "2iUyqe2HL7m4cnhd4wxNoo61dLqLBVwBCfc7FyB7y8UHfUWk59ToUJiGG5TGWLetzbVaVJcAbncAnMNZVAREbTUE",
  "key7": "3GiW41KvBbq2NEojZqwcbyopEoKFCgU8fXnNLsob49MemCT1PFxM2Pk5U8ar27F2NgZHw2mjs4ndfGhTxm8Zx8x4",
  "key8": "5a24rft6n8RrafnG1yx6Y9XqJsMotGD2e97ZuKBCLxYceWJxZR2XUDrVxNwaoFKQMvKBW5vwz8fRrMkycoo6nrbC",
  "key9": "6VN9zFCY2prh952LS8cKn47LZ4qYBcq5CCPpaW4XeMGZZ66Ck4SaNS2WPPSJGBug9m3q9LQ5KxG5w2oCmQwK159",
  "key10": "4AzhNHwhrX9kJsxpnxcYL9N2V48b7W33yjGEK5xe8ghG5K62zJ61RMwsbvKBcTo7Fb3Q6wxjPne59xUa3qmHnEkp",
  "key11": "3iJDVaCrAN6edfbsKSnvwZTt9bFhMg7XE6UsaZe1g8hMgHm4wZkYtWCrjqZipqtzVFY5RkS8rXNzxnxAuWBEcAsE",
  "key12": "3RuKS8QB9tth7ja9zi9Rw7QKYSCPMSmrK4iEuFND3tZhP3k79sphi219vdC7F2zyqNnWoMbozQ4viyhePvqYXxrq",
  "key13": "5W9vixvSLVB2woHJFsNrhx3voVZBfByLi8QW1uGvcDxpnZi1fbtjVQ8pQyaxjD1k9hrVkCMoZFWurgj9mXS4Vftq",
  "key14": "Q4eBjCiFisK8UziQNuuZV3fv56kc89FbidmQuM25AvLWtrjDA9xLTHsQ6wPFXt6ecGKkC1fdDuEdVQ1LAjjfpfm",
  "key15": "4iG6R5jKhn9552iHsizU64vUD8Yn473skReSmHB5Z8tvmTpimXnPR9fhQ5JK2T7KxE5os3r6bDU3SACx7y4tZjzm",
  "key16": "2XdpRCHUyE9uxhjjK94apwq8yKoixbxYvKuza54SBFNP9mMyQx2zw67ju5R3938ppb32vgD5kguqib8BzmZ3u1Vo",
  "key17": "4EJvhCtDdngNZ5KiirDmJR432pdVSAcZjEMtF5YRQi7GdFpLQ24nknkAvCkMYBySZ22oJ9ifAe3vj35SfYnuQx3F",
  "key18": "m38MGtUogurAEq2b8nb8vjUBmp6dQ2J44d1xoBRGh8r2fXPsBN2zPJxc2UvaakcYqh444fe6B5bCVqLFQ8ieyWd",
  "key19": "5K1f7rGvS2ESgnymrwb5gM44UYrKpSE8n8Vc6KM3i3GESqva8kdtHnxKZCLVKreYEbmG2dXHoDKM1Gyg3GcpKSB4",
  "key20": "vwLzkmNY2T2JRrwKK8U2gc615TYJhtEKA2Xe8UdN4CKiAhdoZpoo8hjVF9FC2QTDDbN5Pqb4nJPzoBEEjour5pp",
  "key21": "3UjEXAMowU1WaD5q7SPDB58Gx3H4NYnqCaRLA8nu7hpZLZvi6gaPhfqTYs4vrWxJihG6MGiKzBEaiUXs3mbhWeRK",
  "key22": "4JmJdk1psRBVsEYyGffULwrkkRboWcDVAtVRof35NwpehdCNfiMTSeMx9CNEUj5NgxbnjTdNhNDXzsKf2J55KbYn",
  "key23": "4pczTNw6ytJNGXKQbS4HaLABogGDyL5jagbsPm47k6VojYGh4CjPRpxhnLqMHJYcWN35avwjx8rLtkQqe8SPNC1W",
  "key24": "2oMPAhdvpVkzNmFA4D6LNQx5aSmx5BA5tNyfe1pxog5zAAF97E4mydkjk4iRc1Bm7MhP4tDi7JijQZLeiPxqvi4u",
  "key25": "3YoMeGU3xD64MhRDKS6hRx8ZDFEuYL1fUU4XWb81M63UTwLpbrTwuqx4yJ7NgkcLegM3q8uiok6K7tWP9Lc2AFxQ",
  "key26": "5Z6nhLV1NaVG7ELAVLScy6PiVDFefz744yJoZsYqSuB5qhGp93jN5iHUHran9svgv95B3MwftCnMETwPDaVRTLGA",
  "key27": "hyQdGjvD817Mgq2TDWkFFz6uNAds2RFt6icMn1cyK72yGSwzfcCuekxxymb4ozg4fuaPEjYEXATeg2WcBTR83kv",
  "key28": "5wrPp6Dkmfxu8x3ZB6Far4snDELfMPan6MGF34g6zVnL7NbwRLhXF9E2AHqRYygzDDiXFrDdXAz7m1BdAS4TyWpK",
  "key29": "5eTqL66ynrQVNZwLtSEJTnk53bxrNAymFcsQC6LsZULrm24SjCqqBhpNhG6XX1DhcFqWA5Tvhj3DekjEkcq7koRk",
  "key30": "3NdCfUtqEdxiA5AwwVK8DiZWjbt9bUsk7faEbYELMqiFPA5hLXfGt72nAh3dHkpHfiZWXC7gzECnQf9JDTGG1774",
  "key31": "hpdcW3zXw6UedKtZCzCYZn6r3Mq5wEEZVfXo8B4ZV1rSP3HCx4f9LoViXFSwT7h3zj5x9LLqDatJrjpApM26kaz",
  "key32": "2WsCufVpYv4GsZndqiMdPy9o4F2XW9ACLFq4dTEgwsYFzutpArNborV1p4jUEWJpwfyD2b3k64umA9TGsVebA9zr",
  "key33": "2CSiPv4fYgoKvZCwAVvypiqdbyoCQdDZ1CT3iBC4Z5pYwBfmLCHLHX69yegixgTBN1L2T6kiZVxVUQ3jFQA1yjj7",
  "key34": "aqvb93pdjGqksYQ57B6HWi51LAcpY8yB49QuZwJXkx2Js7u4UDvEigZjBm42TvJuka2Tp3U6dAyUhSqzpE9jecK",
  "key35": "5xgoVEGZPudGFfNFUjmsLWRc1PY8i5vH4ncKHhsr5feWKwaVZVUQSZR5iFFZ2oXAxGJBtG1jQZzbCmAKaXZiwGBC",
  "key36": "q3zjR6KzbDtwSEJEt4u82pgGx2uFqcY5Co8rJDarakUBuD2NgArLc1wTUb7kxQMS2oar6YVCTN5EaF84kDxfRUJ",
  "key37": "3dsXuUzPboGWsy8EpTQVpg3J4qzgK44RdTT3qzjG9ZWHuygN7ovrQyQZRbkDTtZ4NjjBBTTW9hDNEgPws1Lnf2W8",
  "key38": "56hLdiJevkewGGnSWU1qATsxp3yu5Gp6Nw6CgQ986WFTuRU5EsFdjDpVzYzbCF8txjubHdbd3rDCW8SCXKbMHhWc",
  "key39": "4G6XsVydhpymVf87d429uEmpexisNQ7eC48m5H2ZgDrMPqsc9pcTfnfS95Km1XRGhpC3Nh5wMPV7QxFbXBicPocc",
  "key40": "5igx3MzNCVmQrnSYPuugFFn4eKqLBqTgcbTsyzLvVTBdGnfAPz21ugQvZhYfya9fvXEmkmZmfsv8iyoB5LagYVsq",
  "key41": "x2S2QhAtiQCsvKTdv9doe69EiDBrbDCNVvoGJ3dYvUPXtZLL5P8g66mLgwkpnmZqPWxfEfzsg6uaNZueyeh5sRY",
  "key42": "4YDmoxnHygcr7jyqsNfhxVoUei8GwUEeYSZEj8kUZFkWBBBRiT3yrUiqafXDMR2Y4uE8xrBzwxcqf2crcr5pP79F",
  "key43": "58JWz9CYViHTtiqgtPLvv4eAp5W6tCPDLuN5j8FgSxKupXHPEXxKohuuMtshsu4mLeWiqS9J4Sku7ZrYSdSs5iKj",
  "key44": "5Cgn94TXjqyBecW6xmQsp3CD2APqZxcPZ4b8DZutfCQqG61nhhQXNW2wdACTXZhvLTC3B3KJsNLiJqhfLhu5guvg",
  "key45": "3DHx5cpENETyGeNKqonYhnkYCB5FVTm1tffeq7irDSb1ovh9LrDc3r8fDNExFsU4ran5QYRJTbZULrc6TfRptsY1",
  "key46": "4QViguobMgQV3anmwpEx7WM1RXzf7uAvSH2SiBG3SXd5UuxGuRWiDND7SGs2inJf7NTcnyco7FnvdmLiaLRm32X6",
  "key47": "5cZLsGD6XMgUC8LyoyXE8WfE6RF3oYbd2nvMvyEni3bXs5ysnTP5greWxkT5FnqHnetxxSb863eVcSLKkaEqyoVu",
  "key48": "qGFesSU7snLzrQRW74F3EHgvuZcunSNFZMmUCKS4t7KcgjWkUDVzh7Q5LLdf5EhFh54gX1NCFeiMxFLDF8XTrfa"
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
