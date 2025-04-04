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
    "5jhc2oC9i5w4t5bjwnP4psc9tT3zo76afDNu7K7jT5SZdcN4WUyxteYcDGKyAi3V7cAWDk9HGS64vMggqTSCueTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yfV5FsGxpfjYzVbCfxXnnaV1FomJdEn5vRwZ3QX8VzVSzQNt9dHnVh116jaszQeFppHoGHU6dhboi22qeLmNiD",
  "key1": "67Y3YZWHPD8X2sj3Urzwjh8KLG9A4KxZXpQcHnTXzPyZ3waDMJqTF8yg7Y7jesRpU5CcxVZSyE2X7zbBKbJVNY2S",
  "key2": "4WvRwhMZgLfG1C54aMdNvek9JJ79whYKxkEzrij3VsaoyVabCE1FBvyEkLXNW6TBNM6dZV6VxNcAHuZdegYvguj8",
  "key3": "4XMpWWG2we68S6jmzECNFdqt5tdHCW1BdkPGkVcUnJaAXNiGMeyUqPUauRRdFGwKXe7mWv5pwhgEeQBANG8U5Uvx",
  "key4": "21CqnCJjaq6HD8KDGwUQvZvrS1w86GXDyqVWaYg1HGT8aKxdRxfEZuF9KLJJustnKsRF1XFWLqCwj8YgDo9XYbqe",
  "key5": "2oWv4vgKdCPFJEN26jetHZCkXdw7Z59SWazDkuudH3dSoD4pmUDKQTAt8vTAsFfwuUkdVKM3fQea6ybm7mhxFUfn",
  "key6": "46XJQXMDkvFZ7j3miRL9TCou6x2yYCJGHL4stH67UgbiivthJtYRkrGBYbCdeEHij8EmMUGW43kVM5Ri2FfYwEa5",
  "key7": "2zboRitbUV7RMGVHhoRX2u3Vzq7GPPMwQtqUuKE7HmkRXoTcPJwU7Y14ktXg3GNEMQjQRjXhArF2ioQJWM3HFdS1",
  "key8": "3QNyT896otKjMNmf6R3MyaKcmEXn7XuU3UiWPdDY6wZNcrv6Q7UySoC93CM5RYBRc1rEsQHLTUMQmm4JcKJA5FfC",
  "key9": "3MRMM62sCqUa8kWJcM38pNp4F3BcVtuYDZJnz51V9tAbTu2hbGUoeaVjcydosJp6wEA6gSqDB4DHQZSQhYeCESdu",
  "key10": "5GbA4bC8Mwv74mqNxNGbnsc2G3nQjHoCGGyYJ6k47drmUcjv1ytLrzRsVZ4Cmya6Tgf6wUshxtFG42iyDZbqKrni",
  "key11": "Y716SpuLABz258R6Ux1RGfuy7o55NwfPTqq6E36mAMS7FUXbcTNpEEByGoVDM3pE5qzWWEtj7e2y4ihnPWuuhUb",
  "key12": "BnzScfc8fkfdpkoU95RecBSggaDkW9RrpW2WfmJExDxK4h1ss5DqX569unpAqFGUuvzHKT3kaupwzc2Xue1qY6p",
  "key13": "2gnFT3T75PBk4je7B3LjavMx9ijyAvBtpLAa27Fw8dKrXM3pzkv2W1bXuMMuAqWUZA76bt1rq9DwYwJCfpH3oGjC",
  "key14": "ihEEeX12oJNAqsEB5y9fQL7FyLfUf4NLRLBatMSneXLGRnB3jUS85Zi3rtdUdSkviWwz8n3UsFxdkMMkrZQYMr1",
  "key15": "4SNo47nSkknFBYPFQ8UXYuFt6MYa58ZEQZHXK482bt7LfHouNjkThWGkXPRrWAbwV3tWfESXyZQY6DCYT3M73PMK",
  "key16": "v5RPWUBxoBvujtFEbbFBM2KFvcCKhQDsLmemwQ4xNYdjrGVSHCXjvCERRZpPS2YGuwXJxHvZ42CfaYB3ygwBACh",
  "key17": "3UnRCLA1eJ6JsimXXF7Cw49VLLPgowyp35prMkHho44BtcoSXi4EA5d8DEoGhomPveZurPStyNG7TUCasofYYYAd",
  "key18": "3J5wYRP6BbMwe4FHwSjXECMnwQMca5V2ZSdFgQcjCJr5puuduH8gPpX6ZWhy13ZjsHuPVDNoUet2areLJvz6j2Fa",
  "key19": "3ZfxPa3Djt9L8wnp1X5sL7KSjV6YGZQo7htbYeGb9RPYWpjy38MKTzRr819GBrne52AKxpeUmvPdcLmuzuEbDCxL",
  "key20": "2QrF9bRUu4NnhS7GPdjHEXvrNaozwzGfNWQkyBHXxDWmykYXDnNLzSRxDFTyD2WCC6CQwq9pcBUDad3TQb5B795Z",
  "key21": "3uTEUyJ3ygPW54RSHu9qTZyVhC8AzS5pw67uf5aGMSnzxd5HpYgYuJHaVH1761H5FmfSxP5GJ4r7QTifguYs2oPa",
  "key22": "45X6A3w5YDs2CwpTmkdr3yWJB9RUi7hqcqo9HGLNzSkZUZeJNFJmAnV7yExd2BLVQnB55Yoz8xyBrnFzazLaQLzb",
  "key23": "428a1DKJ7MJrhuYH5mjtKCuFAYYd87H31buCzeUUNiPehcLAyDx2CTV3BA2pMDoKf1N6eFDCTS2fMMvqxQbvySb1",
  "key24": "5bgEAHYeCEuw37FNKaE3xknfGagsCUkVQti9Tm3R9TbCo33tL4vYX5QVktVUiPwi95mMGUbcBE4Cw97QzPobe451",
  "key25": "5Y311rtVg2mMJ4QCcAwgPopsjrfWFHNHqQpn6d5QYy21tpMyDkeWML28vxzB8W5D3APx5TRawpj9bVn7MnfUH7SN"
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
