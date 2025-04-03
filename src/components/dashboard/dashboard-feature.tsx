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
    "XvbmfLFuBBHBhKCVYypmCa9rRpRLFuEQmsjv2MVsap8PWq3V1hJDD67sHkfdVM4fdhFjmJ6zF1UfwAMRJm9tBY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VryDWchBCbDJKHV3aP2tjGAExfBTY4qxHZYGAm9NM4147xcQRb6AMYo7iqns5rwATfmfpo3S2QbtHyak2LXQFAY",
  "key1": "CC99MyPYUoQgYpRijHSimN4WiABx8tJ71eYCzMbH1NGhZVZ1KgzuHK9oacjJ4HVLmoVT62GBowLdUcmWDeNUXpz",
  "key2": "2E6n866jQiTnsgbcGefHZayLtWDDiPFZNPWR898F9YevPbrWm9YZjxPNRX98QsfBbqrvybztCSpJnk5AmV88dAeR",
  "key3": "3bza1KT1pCDGgrxxJdBAWWL9wisC2EUybcY1zeHh4jP1CzGAanitimdSe1e8w2wpBguFdCvA2gqFXV9Dtd6qZwDY",
  "key4": "3TUDRDdx7uf8QkiDuQewoCTxrXbbgFTJcGuVKa8mxnPF7dj15eZUZvyetiWPDp5jaL3yMQJ7Md3hoQBwPzsQ7NbP",
  "key5": "342wuDJkdi6dHUBsryX34eybC1uhZb14Ax8kTX95t8Aq5Y3GcPZyx5AV3Pvxz34EbuQtVVYA3xS7cdsaWAEK1dtq",
  "key6": "3kD89siBcshrhiP78pfhdu99GHUtDQCYede7vC85g5DcH9weEoCzbcatfqTxd5FTXaRSmUMZHyfGwmsdS94NXvW",
  "key7": "3DzrjcwLb7hAmcdvscYAur6CtmFLquPY9FqUct6EhfX3cDLn1VPDUAWCzdrZATMq7fQpkF7myjYS21R4xAZq1Peb",
  "key8": "31LtGq27L3RiZN1XFHoiXG7M7m78S6vQ2FqAjmwRithmQGFueMryfVfRQZGEYF7VamSyRLDE62ZsvSR8XasProxv",
  "key9": "uYeqzWsJXPryhkFQtc2VT76yhwGGDqmpaLdT2YJWzk1g9jG3S8HGJXtrwmy9t2W6qtypcnjesaHdcxWA9MsaM9C",
  "key10": "2djceLvTCLWPxerQriN2TP1cHbSkS8dWiqbdUXPbjsRV7bS1qS1jv4JBK8dXd5aS5mZW85BnMqSX1uNVE9JaMdYY",
  "key11": "2m7NNEmTqxLsRKiN4uvyeDEFuFBpGNNB8GrYBUh7HcLS1P3dCDdaMz5Rv5jaKK2C4He83tHs2er4vuqCDsBoEC56",
  "key12": "4Gr1YZd8fdioJrB2WQRMnAGBkaZ2YViz5kMyN6eaT7LTMxe6ysR9VQLptH1vPzpmSFtq1ykyXp4JCJTvW9L3K4p6",
  "key13": "5gVFr8wyz8hSpMyQNdp5P6xq538c7z893gGh7VNfDeDEk7gZyHTbTtfef7UeyL5LF5BgjWFNZZ4qmUbwafR8udeG",
  "key14": "58JAbPtiWW4U2Zdp4kKX3BF3gtRkZYLnkVJ5noS7Z1tLhw2uzxDsKMW7W54QPt2kxvJbiZDu84hX5bmcQcaAWJRZ",
  "key15": "4S2dvXs6fHn8uYbwgYjy7EJvcgW7Yv58Jb2ChJe6CZNneTfusKzenRaUymS1mHYdGn99rkMtPHBA8y1t5CxnNUr7",
  "key16": "23ATpLgyC2KcK9burTEmhgYbCEWVLNhTtnuts9mzM48wmRcXrGcNdn2PSGt85cTTnW25H25YRNRPvvhqNT4SHSkW",
  "key17": "4b9rxGfZwy42ai7eukJouYFF1RMsck2VZqYeqj1LeWmm9RYXny3W1NGVprWLEX9e61ghRn7a8xL6tHqUtgdAnTYr",
  "key18": "5eDsubKbhPskkcwsBmCSFdTkFXCZF5r5hfGRJybZZ8GVj5TkqGbTYsQ9P3BiaZzsP9FSbywABTcmJysADqBf5Crt",
  "key19": "5MMpTsJk28JsRU29bTnDhtivVae1fqVqn26BiQnWusbA9KnQBpYPLKsfBkVL8z4sDyVCqe1aFLmkwqZzjFN56tHM",
  "key20": "4VHJBPU6BmwWKtWofiFhPkUmgou2nqCGRZs8BUpLd8iYSsqWt3uZwkDRBSsUNcQuztJ9ecMqPrZaf6rjMPKYRxSq",
  "key21": "2w7n6wKVMejv1UkYwXpj41aR26C5EyyVaiqePxZV2gbX8R29PAM9UypMoyXXW98VZoN1nZBDCbBNEoJxsiZRsbGk",
  "key22": "3QQ1FxBgBhgYZq9a2Zw6jo1HBs6vMeah3D4EuPbAioQnZPQ4KDyojWVTRLENmcHoqEvovVHshqVSDSnkM3rzWZoX",
  "key23": "ddP9yymiU2NLPVnBmcLmz4yqarXWsA9RMULhM8GkW4bWAxWKxyLEAmce73LV5ACPBs2fqChQjLt6XoDP7HyMf9T",
  "key24": "2Jskoe1AHjK8YxnFDzYWNnopfZKWGd4GtEyjFKpc3GEUL9JtZPVg9bRnPLewUfSM6ehouCctX16HVzDFDmQs2xmL",
  "key25": "7nskfWM2fFg1xjdyCCZZK2w9x6oC1QHvB5SeSACZHiwYznbbcRUH9nJTjfgM71YqYWVbpXWYqDnExPibdEvc1HW",
  "key26": "3iyViXEQH5pDPau4bHSQ3aEkdxNREJzQhio68ZCxqqVaZVgpiMQachRfrGzg9CcrZ6Yf3V9E1ffjxgdi7J4d8UT3",
  "key27": "5iD25iyjqioCWjsL2gfWnpNBGyRr3iJZK7upSPsT53gcjLDD9mnqmTMgAVpsxhN971KjKYMbHbSduFHig7UQYJ59",
  "key28": "5pxuhxwgKQfmc8KNSwge46TMKBXWRhd2KtBwYMTnotfyLZxePMMb84rjgyrRtDVsQmknwifXnSnND7LS1o1YkRih",
  "key29": "4RNLAfPRDjvhmVwbJKT5pzETZU281qc5PuBwp2S1KY6JQLt6ozfPyQd3iN8W4iZDRdGwTgMT3SgM1qAtwjAJmYX4"
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
