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
    "HKyGQSspJeZwmS1chwL2JVKWthjvpmrZjFoueh74iJi5TWSa3z6NNJPEEky2STKXSu4ETUo4yqkW7BRAxx1Ykhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzHfQug8fzJE4PKc1N6LZgTej8qWgKULCaT49SZ8n1ogH4b9vWkV6gWhY5Hnnpobs9Ek7tWBpSbsy7Z5p6SR39t",
  "key1": "5zGjg3zdCDpSVaBvo2Tg6FSxmGiZ56NmA85rWUkaYiNrWKgTh29Sifn7owDeXTeNdw3o9QrMUfXx4eVoUFBGEE7Y",
  "key2": "4XxRf94iWYphknYunHNBnHT7DSp8fui2ANL7UE4okCQ6GqLEbEuwkryAEthz2uCqKySZT15m5y2o7afdgcssSrDT",
  "key3": "1RYDMswhoChcHfsXscgnZvotsD6JUekUTmzhUgvVCENtR9hkNRsd9NhFtceokpC7tPMurYESdMxb4VMViz5fhSt",
  "key4": "5kLxQ4etWggHCZ9G1ieqdAJXDuc8qzkjjF854iFtk2pbcsqoCvrtFsGaBDSxNWkDU58pj14p2fvhjSUTqdPzgDhX",
  "key5": "3fRx28eLPgQYfzsfVXyN9nPfepe8tmMZyiVNg69ayDmHUFSbSQZmLG2LqfnPEGwz52ZtndrtJqfe6BmQvDxmDWyS",
  "key6": "5qYPUCtpaFNs1g8hYBDEAQrmyrfXr4Rz2E5Q5Rzjhv6EGHrgQz2DgGZNU6DUpFuVSgBzf9i9VAix7mQL6tKd87ma",
  "key7": "3UQSYa3sgKBMcCFw8oEHso7JtbXxx5ebRGLoMsUd46MCXwAffibkNHCFu25uG7tnwMMMvkBMCDeeHzmqxY7eDg6Y",
  "key8": "3khbPviXRNbH6XyZNQX21iVmwbxgP7pwar3FfvBDT8gN1EBUvg54ugYbt918zWpdqBv2NykHrFrqHziGh1DURBdN",
  "key9": "3e4Y9B3RmFhVX4HoHn9dQoo15GEauABUN6qmfPqgfr9FB6uDa21AwDGdTXpy3jTYqURKCBNh2XgYfERgwowpLbuL",
  "key10": "4LHhKxtKqxftcdX9cfoZ2deJDHdqMaePn2bcZJazWjvzPFRUZAogBLEaVTuBsCXarkNXU49JHJiAFhvmajdK6GCu",
  "key11": "3Zjzz1bQLpAZtRjCGhHxenLRQErfL7Pb6CCK9zUf4K1zDy565RCRYiQ81CzaMzJAaGP9WQQGjfNdsYpUW6HKhqvL",
  "key12": "3NdrSRY9RWWNEdMjTREp8UgFsCgP7SEmTpDiQxQsfK5s8cou1jeaukafDshsGCJcJvtGvpHr3QhRBGwH7GwKd8Uo",
  "key13": "5P5AXwvVKz5vD9zxbgE9TP97Qq71xe3yR8dt9f8X55PCybokbNRJfcVbksq9f3F1yTxmu7pdr5psziHtbBYiMmhi",
  "key14": "3NPVbBUWE6p6jKSf7LpGnegpm2AwnDGwCmFFZ3AuduftQWahxVm41CHqRi8MQNXTePaiAhr4HxHg3kyQSuw5RWW5",
  "key15": "4SUQPKbYFF4gFLYXwv2AP5KpHrV4qzbA9ovk5nhBLxdSSMrkCqxHVxhZf5tpwGjHFAGjzNc221dLinhDdezcVC55",
  "key16": "gL8cVnFRUyESN19SUet1NsBweq3PiC7v4eJm79xpKLii8DxXcktyzY6qQkDGVFTgUqjNB6Fa4yYDacL3T73bb3z",
  "key17": "3pVc39cUyPBVKNUGKChgaC5fy4kGZF77NcbQsfZRZaANMeHGB71nUDNBoVGEBQGugzV2t5ZZz5ZrfoZuo5CL7f5E",
  "key18": "5bHVygKUwNsMSk4LTynrWDg6mgov8acH5cCR4oTc43zfb8Jv1ewVX2PJxXewMt9emS1w3rZRtHCsGh3To9THfVsY",
  "key19": "q4Khp3KgwGctiEz1Xoi6uzc1b2nc7hby3BdHFXb2PFrdmgVmNeJwk1foUUUVb6KNnzAgd2YHXMeix1D6DiS2ynV",
  "key20": "61gkC2A1TPQWypP366xUuLavz1EZMHhUnUsBYJuoxeDKmwLhrShyFXnzu5P1C66wQwbUTipTPgDT882Ccd2sywFf",
  "key21": "3zEvij1vdyo7DKa4kCVi6wsKTf3hj8npUzLEPCka644ijhZCQumH8YHc11B3tHVgKGb4yeVUpbEyyCKpw4r5npNh",
  "key22": "5rDRLZeT1J7UGmyZCyaBZxvobqfXMKUStQfjUodiMPLnr9bFqCVZsNnFTCHtJGqSZ8HaV8f9SwRNTUGSPoWKiiyq",
  "key23": "4pxbzrLRuX942Krj4pXKxz6qE9oj2ETtYsxwDfXYxUyUEn4FjCarGYMNKDKtuMaS4Kco72dAEhhNR2kDeEs273Su",
  "key24": "4X5oAg4g4SWmVFZi7XUAjdWVFMi56o1qFbhLiwGELmCcF449L6U4Uvn1gVcXZYKUxydw4UEAgKSQxEYBJzgeHtvW",
  "key25": "2R92erjpAXcyBUmmqzPZ6bcq2bqinAq2bsZd2EqsU6TYhdSAei7ey68WPgBDz7T3F8zegVcDA448PdtJkv3W9KqW",
  "key26": "4s1R7b229tdwevbyjjK2WY3gAGtbwNCZhhdyYsCQkZC4QfLukg4WdpErfeToDR61hbvGa9Rm3eviBTNyc2MUUasM",
  "key27": "3avuLZWTTsX55pnQauQSEfMZ8Sco1e9sikjpQvQfCE5h7fo3VFcLHtJx9ug39wru6UuazdWqVyUgNvH5doKc7u2G",
  "key28": "4GE9RJ2QC7gSZnsPQP5kjRLniV5eybJgeCQJ2CJzeq8jDGpCZBAhr1YjHESXTbXgxwEAQwY8RHo2QXBH8cYTSja2",
  "key29": "48VYV9FGn5U8iL5GAioTWLb8fiPeMmE1SEMQ5LgnvUrrzQ5BX9p7A1ZCYreycEuUerRXPMGoq8m4tm47wG91RWkR"
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
