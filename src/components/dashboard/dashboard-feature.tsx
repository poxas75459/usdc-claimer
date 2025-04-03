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
    "kejg9EeDF9Ppy2cLhq8mrn2w2mhutzTtHWC6pg7GzFt3Y2GTwtpkGungHrQ8kgMvAPF2srfn1EXM9qbYwsqQmK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QeVCwcDSF6S4S7noY8rkw5nPsGWJcEAWGCsbDdQmt1fUyBTDN2kGYBstW87McmfiehevGGEHEhQkQqcuv4ZRYD5",
  "key1": "5YNe28Fq2tykqnRaLWeLauGRG4gbZEyuQjzAenrA2ShQhDUboovh9Djay6CJkSwbZ7ozhhTxnPPsyxrgNFccrcgZ",
  "key2": "3uRuSTxuPw9HJinFaptj9bxXfBmUCtzRa9TY3UAGy2bQZvpZXTKuqqLwZdVsjSsLQe3j21GiXbYLFtLdwW3Yh58e",
  "key3": "cxGkeiDrhqwVZWGZUMiQHCBvM95EUqi77EiUDsDng6KBGi1Pt637rJ2PEJ6HjLPFeWWPqrn7tBU5UMDud6UBz4F",
  "key4": "jwG94eSrb9tYvXrHVtEa9aLVuEcS8BFhV6ADeFCcsqS2GpLg1U869J5oKiWroKHof3Fkq9dDBAdeWMUt1xTBDtR",
  "key5": "2TUJb7yMGtXYBB7kDAnkCkHmJqPQMevqxALB9XxAGbNnJyDAsiKB4GaMLrrxNXU4vkxhUiNJxXSvDaXo3Ay5b1EX",
  "key6": "2akxWutP9PASKCmbmztz5EGaEduAxLkJoVbXiQJr3Zu3x9uGSxZyQgHBnpYAgcbH57nZWu3JGkCCAvaGcw5Lj5S2",
  "key7": "DcYkGz8cpHj6UwZBpQF7W8mggTogeUaP7L6odFpVaLSzsecdiXbjSbAYMkYE1fzqqwri6fp2zchehemjWwnyPeX",
  "key8": "5z59e7ZT3KNB8UhZiTYge5qfuARQ6UuQgwWZSYGsUaCidPm31emJKuf4TzDBeaHDE4aCnAFRWYZE4JLEQ46HrVkh",
  "key9": "5TQJ75PUnvLedBCW8WS8TkbJ7hcdShCMh5vTpLTWCZUtdJGkmkf7vMbBrowaekwFPKyiykMtnnKt71ibM5WZzzDo",
  "key10": "2258EADEtafcqRGintX7AqKyr3GJeersHGywyTw8GpQ3HUrSHSsR31HjFDufU23r5Fsvj2UruZvnZx4WZJwVL8eS",
  "key11": "wURymkq6E93Dx6rKLbMSkdhNg3adWDZxqhirfXHR6ZSvKiFiCtMWBp5tjdp3VJnkHbFC5iLfiEQUoY8PGxphNYF",
  "key12": "53Fe9PYWT5XUzVEpAW3XRSLuxZGcANwTr5mUZNiAofe1URQiXMuC5mwsYAjwj84Tz8uWWiJqEoJwj5YvCf86M4mP",
  "key13": "4hSVDikcJUobtVgc4QtjQ94VDaLRcCTFzWub3eZxHewPxt16YiRXH7XGZKAWYxgXNFpJNCwZbzNpieXNKwhgbdck",
  "key14": "2QycCNbJkQkmRcPSf9LALefPgyiq3TXGA5BvNosfc8uGUdtCLQS5GTpcWWEhLRPnDQ5eUj3dBraLkSTDNaJDEteL",
  "key15": "38taQjoUsH9PfPPeZo74nMhHkB9QNp2ZD7FHYCF2qHAgc5EPz5Ppdu99GcGnVv8Jmbee68H9bvAH8wj4AExWX2W6",
  "key16": "5nBNqyXKYCLE3hrD9yzX2NtAVoR1UWQtSwuwKW82CxEAhbLrktWnEpao8Eab2B9aGQZ4aXi9E1eLYtMA2DyYXPVp",
  "key17": "3Nj21vi5auVBrNTW5rpAHvsxHi2qczNJfnED6db367MjM3s6Afma4gjgDhgzYSANnNBBEAFXjTx6L8pBkag9uPDH",
  "key18": "8UuRzkWEyLwomMZhHyX1amnwKZtXEG1P2X4rxh5EehJXTFuCVVgdSASHJei5vPDK1YBw9PdUHKt7oipzmdbGmRT",
  "key19": "ufRxZbNWfaMfuvBueGzUrCSBNVj8w2iFhh6Db344biYQAqDE9ThGsmgZ9EC1wvrMBDKmH3ikRfRq6kK4rZE4wMJ",
  "key20": "28TeDVfLHQskqEppg4kjyRrQoSL8aA45Wyn8hRXxdeQJzwndYvb1bZRwJjS9DW8EeyWgRNDZKsRjocB6zqtSuSjC",
  "key21": "5gb9a7om4mqdeGbyQ2ceLezgu9gFqGj5xvcmFKc2faUfVgNkEy3z5NDAzfkwLTgzpy2dxxiEpepNDqrX5iUFPaWs",
  "key22": "5sdY6e4MsgMceNPeLscTLdbFQD8U2ha4EXq153c8qM3mAwfw3yu26HujwfY6tJvEPZhwWFu1r4QBcndMtHEnmfFV",
  "key23": "37ufrti3YFhSKjNRqLDWHVj7FZqsS8zoUNLJ1NTS57MoBaNy9CM6ihkhVqNWAk5LCwTZrfMuFEKVkSWg5Z75f2J4",
  "key24": "2Vagy1CRTVtZD79Tfoz5okQwMjtjvmgQ2Ekrd6sMcbvaWSmGEZ1rGZo4whyVEGiAybvFn6HnD8xoxnXQQqv6MvGm",
  "key25": "4mU68gkeYGzpzvUXVXZffLUxgZQLPA7P2jEx1ZmuzUoiwfMytRVF1Z7ecBNYfom4GKL69vtMne4woPQSU6PuLMcy",
  "key26": "5QRM8VAvPGTPTTmJk2X8s7xB6hupdzH3nsgqpy3NcnZXA31ysiSRFri9qCoXm5XoYCz8sEEqPUn4gC4R69WWNedB",
  "key27": "4Put73vW3McCPg2xizDnuEDJSoiXWierbtAvGKi2qAwwEgVCgQUhAEddHgbLEfijuKJJiSmzbrsygKJdPYoW24jB",
  "key28": "4QqAAE8QXyp5Yh4xS6gaw1cPQSGsPjHT5HT2Q9srYaesf8AiAd5VufpNzc55YgYQVSSrpC8mG2wgkXxq6oPysHhd",
  "key29": "48VhphV7TMCZaVkASsa8XtcJu3DbyX55AfKeKreE1GzsbdR1rtVQ9qELPAW8TBPBXmz9A4xvM9dvEZZgFgBE3ZCy"
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
