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
    "2ueyyrDnsvaBWkYkjCBiPhLsUVE3Yu79VFjPeF9iKseep5VBDRLY3B3uZzGe6iXBcdpqkEcnA9SAatfwkXttczqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNNmaP8k9NhuS7ng2sCPAGmYmqqZefYSkg6GjGMgcCtG44VGTeYes8HuFtLRcgdmNEDbUviLhdjyBoEw5quceam",
  "key1": "5ov61JNAcwa4svovm3u18mCkVjYtM3to6U8GZqRynmkrWdRUQdTiEriLEf1XjRmeS8tHsxMYnNRAekUEyoQfX88L",
  "key2": "4sc9URqM6xU2TwHcruTjS99nyZe6DgrTfJ8C6TtCjM78VeywxaPQxLZnxxS62QyujdtyfW3SfL77hXqupCJKauUK",
  "key3": "2Hrkt6FUavrvoWAD6ExHXJMu1CC5QMQboDXeuLxfQ1st3qa11xx8BSupS3u4tMraU3NsMCKXUZxpq3cL6dNy5Dms",
  "key4": "2h9D44MANTPaS5jmV6aA4DyVsQUNAKoBcJzNMWbu6pbGseU51ZNqnyKcrZBdZtRNb8L1H3tV9kkPdnSXT8EExK4R",
  "key5": "srTVFtrF3EDqihx3nwxKrACmRk16pgSrqbw1ibJWdEBzBwu63WDga4bukhHi4ejaBBBMPAyQFwejnLpvkRntN35",
  "key6": "3AMJ6U2zhV97a8ccBbWopNnUx6sPbhwvuuZM3nWEtFRBubycm1bdR9cvbA9QT19XuRez5iVc7Zg3c1uguVdhXB8F",
  "key7": "3qS1A4rPgnpVvPUEhHmk6JgEZ3UVvVte6qVhiUnrLuXSLQ8VV2KejoTDUFuCExEK3ReHoXe6rcdY4WK5Roj61vLD",
  "key8": "5FRFoJw5yutLo4BpNGqPG5SHaM57aDN14EfbDVx1XDsKZYGX5RpmsFNr5sJDqX8nSjZMDh5yjYr5tAQDeV5tPVH1",
  "key9": "2S4vNhNZ9btyi1HN7u3aWsRLZKHsNzW5GJzzSSVugWw67NwJ2CR6YvBdBBu43Q24FwR7nFqfLxZLzBZCfrwZy7RH",
  "key10": "oYKgX7o6976cyUuhT5KvQC7pcRhunEqifMsKegqhoBuKPzsUAeer359e96nb8U3gXJ1H8fsEHJ4Dfuz18fNQ5Ur",
  "key11": "49SHjLpHNTt1jmokUcmJJDeBuo8nX8DECVxNsLjdfnFKbdRh1FqfYYJpAd2Ff6VvT3QpxCFRM7bD2tdE5J43qUNZ",
  "key12": "xrU52VG9ftR3YYYg125bvdBDktpfMKVphusBcZQSTWXRmyUAJCQ8FMGp3WabUMmdHVDtz3UkUxbg5F2EkdFYMXN",
  "key13": "tA4yxqFeJVdoRyyt8pTSmvJ7jkoQ7rm6aXVfVwwGW5jTdpBGq1dcfci8o4t4b6zZnTa3ojUXqgGY2Rhk28ngAZ9",
  "key14": "4Wby9aacKQ9fD9JWz4Gow7tbv7tHC5MorMECsojsnS7iw5ZAxT8K99hyfM62ac9B5sS8LVdNFXNCvKrGM3KHb9pw",
  "key15": "3kUw3AiEpm6w8mcVGkhtFCaERcN4DvSMDeW4ejQkMjYyesGJi9wu5VCcMwmoPsxd2gGopXEp67F3jn2ePvviEB4D",
  "key16": "5E7vhw3isubx3doCw959ipsmzao6sKcWCMRJVdiqAXFxLVw8gLWWpuECS5NZ4NtyVzkLyXfg69X4GaEkxHVTLMt9",
  "key17": "5wqLwpCSM3vRzwNTt676mcdMkXyNFWUjC61WpywfaKgRMkjjBKGMxv7r1WCNYJYfwvrvGB8yJZik7YWcREXeYNnE",
  "key18": "s1ooYewjUvxYk4c5SQ4QmfYgJRGsj5UJJSnL2sAN86UtEX5HMAMeWdN44iDeHyVCsAUauzUgc2q7JypZY4TbKZd",
  "key19": "3f25XGGiK4Rzj5nxQLhX65HXLdnEgRsKvZJ5oSgu19KuK7i3kWww4c6UoDhr8Wb7aEaLKN2tEkdMWAmsCTFoHZVF",
  "key20": "622gPhBJVcRhHBMzXA7Lk1Dujo6CpUxWPApiV5QTg3C1UEmCWhAXJYYct8PTiKVAub4GB9U4u3xAdZdQMznd5wdb",
  "key21": "5igVDobyFwVHjAmudjv6REZLsH2hWK9pi89keu5RBDc1Y1GboFWcxyK6b6BCzeTPYwfk9QDVGCvvA3KKgph5KPV7",
  "key22": "5gmb9gTzU3vFz7NLgJQua7B3tdK1qcLLpCJ1FVGJyzhTZSpnnPneev1nCycARjrNcQLriUBYnCk3e5wC4hSQ1cKw",
  "key23": "DguNbgfNRaQEtKAwAjHCSbnsrCkm6HNgiNpq9tPUjHVk2Zixx2X4jtBQAQkg1Tg8oBFemW62Q51fARCs1wq7qYk",
  "key24": "53yEnuzSuLk5BnXLnZzBkqT2CqjLtATPPHuzgLcevqYa35po4U371B5bm35uT8L7GtBBRAe8FHPjjvw2vyWZ6ieb",
  "key25": "2bhNBaFYxEwdLRAyW5TBqUQHUknXYFVfDwMNuCdmVAhbFDE3DSaKbxKd77Qr2CMugVZNW31pnhgfGSoZuRuyu7xK"
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
