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
    "3Qs5URStoTHBiWLWGttxpktktzReD4y2Hbk7bEmmCFwGPRYbkYqTKpfnJSeezvQefQs7hY8q8PcpFeN3QuEk22td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQNeCwQheGiBKiP8B1LJQkUKjkZo7TMHnRZ8fNjY1P1wUEEH8cyq6VdXeJT8yfykpyY8rzpKZJ5T74MP7oJsjq3",
  "key1": "3qwGL18sxz3aKVSV322vZ8LM7C1tT2geHv7WzHKvPV61btks5gehMGtJMqHqjr3e5eYC1pDMp6P1zTKykC9Foev1",
  "key2": "5o8QqRyyoCaNRrbsTuprWwPzryx1mVwSnN2GYePZBck4wTFhhLGofAoZCunptCygiXAZ7KkbRhnMSEG4CRXDTwQS",
  "key3": "3Mj7GPj4ZNnsBnGGwHBjfy3g8SbMMQ4gRbBSdfb2JrhBNxhAP9EujXjDXM8yc7tDrU9jcoVDtXNC3oR8C1DM3ZtJ",
  "key4": "gBWy7rApXqaCxsCNDMN4ioCSTHy5rVuPjyTSQ2NJyERrN1SSuvidhufujHfq2TfcaHxzPqa8i2ky184MhERqhB8",
  "key5": "Q5fMeXV5yFNgJ2AvRgjb2N6pnwBR9HuJEtHuq3M4CWWgWTKZ8Gbcsno2gE4biGcHTbZgpJx4nByGWZUGG2p8chd",
  "key6": "3QkVUvsqjPBzkWoR5fiNp8WLeShJUJxi3jD45idAFxPzqNRoMm3nb57cYUHXbrh4WDyX1YySBoLyEYY58GYks1q5",
  "key7": "8GHvSwXyRuS96qdxtgUaQXv9diX92ePYrZNvniRRxwUugNbJYFEZ5QWhAvQKpFp4gBfoCn5vSS9PB46nLqCrysa",
  "key8": "5pz2VhV7Z61oK3wLQgc1rkagvTN3igFBt6HvrRPdSKRdzgCAtjSTx561e72HTes4twWMR4ma2e5v1cSpuWJUXbZS",
  "key9": "Y81VdPmvAQWw7sgKBu7B7y7aJA5a7qVoqAARZh4JtYn8iXXyTnrGjjsD5ma1GeuZx2Jih96ZPugxKVGdqHNrAFQ",
  "key10": "27bFeEUSuxpE8HWEL8yykZ8h1VMVEYqYhFLyZpNVVkWs3pX798rjBcRmPZgJYYx1BMcbUodmeMZGm9QcLMF1fC9u",
  "key11": "31RpJnkJKWSWWV4zW5oFMQK1n6PG9yzQMBfMSviX9fwMSZnY16e9XB6Y4KwU2GPuiyxaHfZt3vgfBNqjJfPs3ReU",
  "key12": "3qBHapSbLZ5rQBSoLTREbrqAMi1dLyRBoGTHMdD6q4xV4BQd8sDg5tR5QqXdPkuyaujdiz3nbct82JTwiUmcac92",
  "key13": "5nMHGrVZhtj63pQPFAjKCXBZ8osJzZWjMTkLvc6hfM41nhP48ZGSsD2adyHj3ym6WNpsWNJuLeKaVpxgFvpVzGGB",
  "key14": "3m7jAeareQKBKtbm61TmUb2Aenb2MWwiWCXxpYAH9GLY7XNMbatkVn7DKjmXwJTaDe6VZUN6MMLWzg3cwVudFbw8",
  "key15": "4PFjnYJnCJXs4tkKta2dGbHj2m7aTLmdtBJ9RyUkJzgVPy34VFPMh59G4UiHsK5D7Jsa4w3MbPzDtk9XUZP222GU",
  "key16": "6wyPnhPSqUigiAKAJA81ToETpQ5STY4xYYGh9vALR1zU4V975feXZCHvUZdgENmS17FcqcVL5neYkFajRcuorEL",
  "key17": "2Da2tQ2kkYM2WwCPzSTcJ7x6itZ1QANHEf8BBCjn4ar6s9s73kr5guEA3SNVcikBZnvWEzyKavgVvtca22kFcWMU",
  "key18": "2yPSbXqKzk3AHHk9ENq5k2sZ3YsHUwJsx3MRxgLEsuqQRQ5jPsefBshgLSeZCLtsq6dJEr7o77zJ1DaHEkVZrc1r",
  "key19": "46RXZSdscCNWXdjaQFUnvCMJD7aFtv2rnHweiFN6gEVso4zu9FhU9DMw8wrFZUfNjoyzY1KeafR4kt3Hs4bd2V2f",
  "key20": "2uZVXKr7gjrRfA3pM2dMA4A4ANuzSYppoEXjSqpj9iKFRL9qAcKFcrvDP6KrqRngsUGGJ939kDhifcnqzNnFKDdX",
  "key21": "3NKNUvCVxMvFMSAWcYXyMWZ3ZzHbqp8QTBbH1a9BAfBkDbxEesa1fB6txd9fqhzMhow44dX5jVNTgcEErMWRt8rL",
  "key22": "4MgpfrKwJTRFoQ9meLRpCwTygRzSQT7Uv1JWksFPuWqhgCDJ8KvwRae3D4sc4Ba6wYTfZrGLHgrNW46wtKnjBqyy",
  "key23": "4TruWzfsNHhYm5h7GcYf6VgtDvPS5ur4sxaedib4GH2efASGwjzDSacUTmDBFJfX1Fs1Aa6k813ChSf25B9BjnXK",
  "key24": "2viZ1qY1XK1oLu9ouB2mjJbdb5jGeJ2bxDNSe5JtMDCPf8eeifXJr48TVx4Fyph48Nin22giCvSvomeoKobKpgna",
  "key25": "4oNhEZjrKqYuEmwKvPNyN5kbvDSCtBQL7SZCPZT9aKT5odTENH954kX63ZC1TbJtxowCs5iXkTZE9oMmKen95rHs",
  "key26": "KxmRa72aArrma7hQ7i4QqtsdnfN7eP9thFrAqzH4ufWogg3brVE5edvphWfPY6obs8L6sfXZacdYYr5WXRbVigk",
  "key27": "4WHCPyukzrUCa12eaKEkP6jz4Di2z9DvfeEo9RcKQubndTNNosBh6wMw9EhvEnmXqkExEFr1aunnDwzM3xwahrC7",
  "key28": "2kn5D2Mka9QH3T7kpZGD9ovhzjDBaFZPYW8YS6b7zo3yELm3orivY4xXtaVFFaeNigyR2uS37Af2NRapXUF8LeqP"
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
