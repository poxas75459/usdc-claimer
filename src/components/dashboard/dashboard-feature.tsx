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
    "cPGfGV9W5m6xzAqj3EDJyJW9KVT1Sst92fUdwWjxSoHExhphsLgJ5E3diWdMFiS2cMbcyGVNtp2LrUKiAgWifui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XgTpri3aYc6RnsDWZBeLT7N3bx5LuXS8WAaCkE4Jbncbsy5tWZmBPKENdAfNPgs1e7yc17rndbtvUxBZKRBpek6",
  "key1": "3N7ziBQfdfrEX54obfphk7vuK5cWod46Nu8EnmWVcWgPjwtHW9C38oax3shZQ3SAzr85JiiEHj8cXJCDMsXm8EJ5",
  "key2": "5RegdeiiwqnxNWEhCFvLZ97oYZk7kw8EkLZT7cBuwwMcrHKtraZMcyM7ff6R8rzQh16ZDZpXMhiRg8fVFpKBrQ7F",
  "key3": "51apLzB2FibiuD4mrT2grF8BSmU5mkNp3VXLwUQEbPrgrs3TTdGE5HKR3XpSaft9ED5F3k4cJvBmzGejNNKCpU9M",
  "key4": "5sp3qCzrGiNwUq5cyMiahsT7UYhzrfdoVxkdKfwghsPqX5hbWf1sqcshfWfGcwB9RzUNs8AUhSpds7SFX6vCBkUY",
  "key5": "5r6srfKHs1TZ9LTJX8w36upaH32NyjsEDNZKh9utn7BG59indzQghSw5Z688gqW4zV2K5JPJRc97qLaVNxx4da35",
  "key6": "3dszSRdrWdKWSZWyArK6Mu9qsAw9vHnBu4ybkhNSBE7KmAgxtHLaaK3kWN82TceuuLdqaVd7sRLSHxWcHm6yppwk",
  "key7": "2Apy6xzZuECsWx86164coAb3csjwoZLpaPMEi1eHUSZDxPQGeNYTofvsCqsCmwZfjdNeZPQAsYy5uCU7Fmh1vWev",
  "key8": "51tKPfBAo9opggVxbwDXuHY3mrxFrx8Hr6nJAj1pvUZkmZRZ3DhZZDdrLaaKgCoUcvGobwcpWUXBAPsVdhTjmh49",
  "key9": "3RFsRWPuvv4dGSdQjP3VdSAL29ctp5ozFFN6zURq6BnipkFLsWQH5Vk13dVBZZm3w5qcyi46JCQgfHdAN5Yyeqq7",
  "key10": "2Wuege6j3aSe9KoSsPSf1kdViueDXhDA1q8Qc1bWe21RkTNgQwDqKdKpoucUQ9NgxpPWkg7wEjyGANu9cYACStWd",
  "key11": "5AB1R9xa8rQbwmbiV7EG8Mxbj4sBPvMDpGhNhjXE41gLVA9mZaoMyQUNeut257oi5UvgPovMpL27hBCQdQXkUF8C",
  "key12": "5CjWx8wT99zrE3dvsBDRcs5WxyEZ8RQyAv1cqdwEfhoQwBjfvKCGCqDreomYBXdczAAeECkiqAVEoxe3V22cKa1A",
  "key13": "59PZtXn4Rp4CyKBGi5SZb89gq1Ba1GGh6d84hZrDWtev6n7ToT7YXsCJtJsESp6rF2qCi8Mdx5UsA43RW2Fstofg",
  "key14": "5aeRhUNVAPqMGZNimMmTFwpHkWSiwyWKadkk25WeVZKakJEKc74eiXfnFf6eDgGqCJR9FoFwBz481LgmeeUgLkEJ",
  "key15": "4jdUAsqBEYjahHkSTKPt7fuTbgAE4rfYQ4HEr7xKGVjvQAeHFW8yq8nbbYjmPbSUygbPHLq6kbpxx2S5Pv7bDc7r",
  "key16": "23bPM8TG4FCfjL5HzgG2XWReERE4LAMTrrpKeSFcBrY3kYJ8GMkw6csZm75pBt8Shf2YWRGusxmgLLNUKZPnsioV",
  "key17": "28GSUPG25UGEdR8YjmuJnSrvNEzBUr8rgdBQynKX25FWCp75cdgDz44BG5JVRCR11KvueFLT3RmyCDmt5Esa5wF8",
  "key18": "73eHCk7k2q5NeCh5bZMQnvK64bLjBKah8W3KtjpSQya6s51sPxRa8TANwiDMArsnKuxryNQ3xfVcPqpLHyejP6x",
  "key19": "2vkRDfKn72WsFDXixEbvMTUM284UMNHmZtAXtmLEghGSaMyjhBNvhoEZd24Y9cdmoLFSwAvsJQyKPsu42sifJFWT",
  "key20": "3mGDevqXPU72C7sCat5c1fWWJ9tAhewPNH6TeWx34dspaW6okurMuDfJ9hpYoJ3JxuPxRnVRDx4hbp6C1N1ESgUB",
  "key21": "3jVxBou5Bd79S5sgYHPnsWApQ7KqP2UU5NMm5k4PapR4Kr68KtyZ445GEmtcTFZTeQKaKxBzCB219LWxvS7CkPyv",
  "key22": "52pqgM268EgeCALdWgeNQpdQAwaWC1nZYJ6UBLaVa3QrKqnF9MkCFd4uCU5i1N8Tc1be3iCk4iC8VEKmoMqSXtW4",
  "key23": "2BTwSRKr5XkU7usp1KY6s8azShRNChgURSSPhNutEvRtuQV1PDz6K573sbeSN3DiomJGiKxQxtLdtVnMZTcHjAcX",
  "key24": "1VALgeLZ4oVGhafqakUPm7L3cEL6k8kH4tudZ8J1yR1UjQ4QjZN5a7FV2tTr5HMLzefeAqZizTVMHnmxEZZZnR",
  "key25": "5n7E7ykNR7XjWjkEMHfS4kWHMexc3DbKCTy3XQ2WEmGYdP1XkvnPrQchNaNUETbseX7PXgCoAUE5WzoFoUhyW5z6",
  "key26": "3tqdkCkiPfMZmu4wNSkAh99iUCur6LnNFNsWreb2o1z8sdGe1n5MpSDBxBp2KPXqKx2FgLEUqx7rcEgvSJ1TDg2G",
  "key27": "4EUBBwMST6NjsPjiFcFCUSKks4gw559y22w5DzM9MibRvSW98QhqhTw55ffy9Zcxu41hyywjzpSwYWtm5GadUV2y",
  "key28": "5kbMNeBagTUC1P5KFuYr6ua99Fatk9Mp2mwGRLGCcS8VPQf4GMmiyTSCSbpmL22v6qZAWffDrJVBaZBegPHXYCkb",
  "key29": "4RR2SNXjS2by2Vw5n3quHrsRYN3gek1QzZue2s2wi75txvPrrFQVtmVhL9m4VyWMiHQEzsaY9aQuER2PtdwXepsc",
  "key30": "2Gi4BYzCWXLKoDfAANkuQtwVzp64uFpThK3HG3BvYwnzKBGvJ54xUmapkuiwgMLVc8uPvfk3dAUcExBvPWnhPPE2",
  "key31": "Mjki1drZCHGPC3zHjzmbo9oTiJpdNq3aV8A7DQxAmMQALWDymyxPzYnZGGu9q4M7pFchf9i87BWZBz5pBgEX15T",
  "key32": "4cdqR4Ad8pvHvFNSsVtrsmXfxq4V6SUdXhseidZBAXpsfaLmkD7eRvHoNnAuffNBnckPBYbJNepwnMGa9cwhkw4C",
  "key33": "TQRARbUYogvgr5TmjfH932H9zRL8RcEtCJ9HLZFD3RDEVJX8GVLsNAKU1nMfhkioiALSzjknBvBg16Hnrn7SSZb",
  "key34": "5pZKCVonVJ8spMfz7hb5LJEbomhQ4jddBY9NFMvoa7hbECkPSWQeU4pmvWdQbZo92gB1yPm7trsby3xKvzNcXG3X"
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
