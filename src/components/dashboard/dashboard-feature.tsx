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
    "4pUGqFPjeb2Xm77SpqQFgDFH8LRpRKe21gwcSvG8QLhtyP8mDk2DCV8kUVo8zk8KacbDvpRyk66FKYTrnEic3xRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YheMZRjeTet82UKT1wkWEGDnxKPjqVDyiVTiKwQ66Mxg4VVifpwyFTRvfRKu2HTHgkPhQmgZjmyqrxXJwVjAZo3",
  "key1": "4RmnTLXhAR82oW4tTgH5YdRHLuZiUyvoJAWFTn2Q1dzt8C1xrb4i1jcaDVh6tt9FwnxCJuUQG7TpkxXNkQb1gAfu",
  "key2": "QeGxtjTR25C5W66idVebRJKr99dNqZ9yHwF3f8jjXqetGNLRSsdxu7PpesV1f85s17xzZziZJVjYYWyCRiPmagB",
  "key3": "3kZHMXa1W2zsnicSybAH9mTK6h4RVJWyfh3GLctYvGjmTfAzNWSJr1284w2FQpTDF98TNnpwmpB1jeWqRZ24bsNo",
  "key4": "DYzTm3EpEzhbYdiJbnYPgok8coxfGzC9UzwZsBrGZEEmgG7jM2K2SR2c2FyZU54YjSoBUxdnR9bKoeeQGfeBwkk",
  "key5": "232icZeTjM5RY3sufVnCZhxP7BxudkBmzr31XUjqceeJG8S8bB7BU3YeGbS7Dz7jcJoAUs1r5t9FjTBBYnH29jwn",
  "key6": "56eMY4MbmZujSMji28cbEfAJ14RKJieWbeTgUWLDnRXZXWb2t5xW4ULF4kiZbyQfcrP1FuGZkz8u6o3idFLJAB52",
  "key7": "5v9Z7qmC25TeJ1g3aGtwJqHYVvFVNzbY5XsRKNVVFup3rGki6n42BeyzWu3VVH7Ueh3nURJz8bbQ8cmbKr5X8Rys",
  "key8": "36U9N13Ht4REedV2yHpiqmRSA5tfNFfrJeXyv4d5KNmRhuUs2MGVsekmUXwffiroNgZQDBAqxihk4sguumnCUkja",
  "key9": "5Y93ECataUpK5447Tv9XQMafzd2YP91eiP5tDeYGbATgaRLxLPtdyFdcnRHkjivhRoJPK88kAt95M8Qg32pzpKsw",
  "key10": "CWkVVzsySCVkTzV1WG8ySNssotGHxWSVrg3VvBvvK9NT3Qw3C2oodoPdQHuGFrLGdqxzmWrWs8ARSi9mZu8pQB4",
  "key11": "59L6o9mD8irvtVEHxqfjydArCTqHq3wJ1Eah2UU8jTAYfPGDsQB3hrqmHj5i6xKY1cNY8t6xu3zHZ65PYWBjxntd",
  "key12": "5NKJxo7cQTV1ZGo3Yhi4cUmooKG9RuUK5Pe8ybEpidVsnTRFqgUMqsYtTgfGyDAHvdY8DqWxyyeLs38iVJoLogsL",
  "key13": "q7UYVgF5p3yMtqxF1rEy8QugpiZeo5Qw2xFGUNir3GQcfW4fNM3Pauae42h2DY87jptUgS5Ut3pEjsR6VFLhGQN",
  "key14": "4ccpTJtCae16gruiJZDsuW4jmfFqhY33MbmuQ5TfPZ5nEyQa4D2MenEkxGiTKBQE6QpmyubN4h7kRjDA4SPDmBM6",
  "key15": "2goDte1RHDcrL4eL4e8Sr4eneQ6JgRQcRgNaXb7NiYyzvctVYKEXGp2vXyV9FQuVNNWaACHr5u6boNvm98MohnMN",
  "key16": "28NtrNc8egFTT6yK54Ln1PtZ17eEJYotxrXMbAAT1DGUMCS2gZspbTCXBrN6fYKuRmNWe9SYg8DCbtyAFJmi6kE1",
  "key17": "2ezoca6XMQPhq55QKmMJ4DBbGSKxoaYEbRiPAkW9SjWs5cVpn2TKXyTjiX6VNeKmWZCybC1EDX9CZUGzLdv5edGi",
  "key18": "2s8AWJcFw713DVxhmeu2BxQaB8XNPpAzidBV5dqF7dtFJN5Bma6YgJdvDvZ1mewnvqU1oNzEoAUGQ3VAMxPqLoXK",
  "key19": "677T6k2bvRBeX8QzFpadyEy1AajwacTx18wtThXCZnDQkPJPPifjzoqhXuEJQwFw7MkCYwza3dqqm1CPswmVAczo",
  "key20": "5851ZmgHRzLgk3BSSU12V3mJ2u9FXdk7bUc3NvCjxdEaunf6qMCXXrcnNZxh3yVC5rCE8fm7HNhwQQkTDcdFATvW",
  "key21": "ZGiZNhLVPrNhdM4u85zKb2KjiDgHwGC4YEmmryVqLVs9fg9pmFXc9QpVgnWjarHyKQrfrGJ3ic2nnLTUu8VTMRJ",
  "key22": "3GKyo5gDEQgyyiFGiMnANMrpV8oc6Js9GT7eYi8Xmd17HqKhT1jeoUCKG1WAwGyD2AkuA9RxgUBFbiCFuj6fqpVQ",
  "key23": "2eoD2HCsfefToyNN8tbgoBXfceR12ii5UG4eWKZHuQS1WEf4mf5bWu3j9jbgBtQT3eXsA3bMCYLevwu9rGRVJbLZ",
  "key24": "2x2RZPnXiGjG93dXdSwah7qTzr1Mn4xp3NRMcRSPJqkN3qe6gB7S51aDQwVK7rPkAFBsY4ugx9e25TpsuX9Vyuhe",
  "key25": "5WSc9E6K5CMLy6w1AMzkgFYgMfx8FnzZVvFC4nXZpX5KaQFUvTbbF1NWXHNHHYJ8rhxipdmMTaqdT1zmYKFsA17c",
  "key26": "59nEJxHJLqQHJP1GUtUt8gebi579aNwKMhryVwqCuEPjBK9jCLCxie1o2FH6ByxPpEJZBkhEkyVUtJaqMpd99tfE",
  "key27": "2Wm1xCaBmHMjfpvLvekNyceZZ4d4nLQfdGo5p72fHgwXxMbRdHo6JhbRLCAgUe7edxRErZHfUSEvxsESesYXSN8t",
  "key28": "5svdeWfmGY4oZrETM1yZvcgyCqH8hoaxh3LGQA8HghALhr9ci8zUh6woxPKENc8RzVL6QMUPfFXCaqmTTSuULPtA",
  "key29": "3s4EfizpEFNszmejk84u7cnSKT2REPKoFBmXE8TCRjTrYJ6HeFKkZqrJnZTqAtLVj5aMuaW2D992XVpkkWn8TbeA",
  "key30": "2bZTQvDW2nQSUUnSZP69aPBxLce47g6rb6N3MGw3tN8ahDSM87tebUtSKkzkfUscggKsKX1StfDUXfmK9cWCAf4c",
  "key31": "WwgNtWZAsNk1ndXQuAk8AtkhfLDP9yZdE86K1djuPTb4uPkrsh3ixwkzB4YgwgBUvQTb177HcyE9RgNzJKhRVL1",
  "key32": "5DCmq7cQp9Az73WPeYAoWeT4jpxxyS1EFWCRHLftBX7mZrq8AMhhT5HC6y92Zt1jTNo5vNRcvkBNsX33WqH8dQhN",
  "key33": "5vT4GQmtSXvZZDMQD4xBRcPeU5sWX8KbjeTQUs7Ynm61ewGcaps4JQxDqXzZp2iiVXEAyKGWKWiCZoZ1Hk53iJzY",
  "key34": "3KEXEQMNVFdwTxSsh6WdQ36UYaWwYhEKoFnAijGobjMCLKNvqC8tR2wXwxFbXnNggxfwU7bcfBuw1tr6zoxBGTQT",
  "key35": "4bhXDGnLuom6inHD5w3RUiAumLw6kfa7NeBt1djx716LXTxdUdyohrWbLDkzVbYoRxoQve11G4MZQWcgNXtdLh5"
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
