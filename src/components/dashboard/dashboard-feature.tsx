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
    "5JFZk8gbMrqiFZWEZQtdCpjdTyPPAgdGuydMQyAZ7fsS3PwPE4nUQ6D8bRT7hmD7mhEsPCXt3A4byav8RJbtnTQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVnNKPvp7s6jMsTU4fRtsRcuR8Db6CCijKRFdshkngy8HE6PEZoPNGrFJnu4t4Z2D4H7vnwKYYi6Uzkk95SpCYx",
  "key1": "H7sGd4wA6Lm5ZLZh6xhjmZUitc9FEkz2Wh3pmFbvEXFC61C1FKo8ARFyZVgdPh9nfXwDBGSniacj6eMtU4ySsee",
  "key2": "3AtKo1zvS1REDuGy4WHJZmNg5CFB9XANKKsQq6KAhuqcS5Niv1BhtuLw7HqQuNfeBVxoMG8Ln2voCegTwaFZZXHy",
  "key3": "4ho9nuQ4txG5NS51hHsLTdzvkBhaEmoiMu7MjCgjQX2DcpBGFHK8tLRTSJhKKZRLZ8nRNwWhu6EQpEXDmxdpUmgS",
  "key4": "3seaJRKPg7yfeZrcjPjBEqjq1im49CuhzrETCcL2f2dpwU4XZGiLn3z3RjxYj1htDPDMqHkTPfu2mrSSgbZK31kG",
  "key5": "58fiXsr4KkEhnVNzefAL9ey3UTpGCNt5VqKzBfeCQdGuV8n76LuX1vWDYJNcGte5PQTJwRZM6nX35m3xLSkszF8n",
  "key6": "2zyUmyjmD26y89MdPu4iGqSZuXFxnSgTkg73xq76xDFr1ivkXhv48c4qgBLkY341ETuCA535GGERJHNpbxaRhph7",
  "key7": "KAxt9Rmeg8AYuEosCeKtCGagYFwtazuimDFNYA3x7ZYMgyCt8ARnz4ZierozHhCukGm5D4a97JjoaYrbEq7aBA4",
  "key8": "21EpiK6nLeZBUuBb4voU6AsGNGHgdMWFmmoXPMyaYZCfeGBoKZhgwnnVyDecF1DywzQ6BSo2K9QM8VpeFLScmbqL",
  "key9": "39wZSn4hcBKd8Tf18sr9M76ADGN9KXxD6zdMFhVrWMop8EZuV77xokv2Zydgc91kZkRhPMZz8ZSDpKiiJuRPMwpC",
  "key10": "U4tmmAmp2KQXWM3f7HgcJgQ1ZzNyFNJhjeimz7Jy6XHwfNrhxqA4uxKx3Z3NddbrUc6heJ7gnQPP7zh5tNK5E9L",
  "key11": "3k7pGUeZ6wXnVna8PWx9jvQkQ5bHBjh7ZSHQNq5d1mXBgyYX2kiPt1NBoSXTRQhXcjJK6dtb22Za32sLwimCsunY",
  "key12": "2j8nTj8iWLZBWbTZUSHBxtNEWbab3KE1X1vd3NyppJkju5iU2Z7z5CTK6nMLs5BJU4vh6rYgTxyYEQx1cWUXXiTY",
  "key13": "GyAjiWY2uLJvpaTXrU6X8wYtQgidiMaLTTDQkcborSna3en1AskKeFWkxii1TaJWj3tzaCqQAHvnFrrhsr5TvBJ",
  "key14": "2PSh5eTgGYdCsMLqrfoNZWGemSAXpVcdFXK9xeALTKDBpuJmzyvKpSYrbcW61hdfYKpSAzYKd73dJ97ueDu9HGdM",
  "key15": "4qtv1nWAnbjMu11MoPiYqV6d1xpFjJE1jYjfXweoMRXvziLEAHr2xvzyV91qaZJiAn3joW7RUG31PWKMMbtgdddf",
  "key16": "4aFVJECpqZPMx2bGHYD7QGmDmxs9LAbA1TUPht6Ed3HjX4CbtV28AFPrBDUn9Enwn83yZ1UxXavbdF1DBd6Twfvo",
  "key17": "4E3ND6wk8gGKBpfVGs2wiVJLQA4x6qTNptyKYEzBi5M7P5YmaXLeZiyP4XLLV1uWnzssoSZZdwQ6dqBLKE5hTc6T",
  "key18": "2p1WkMQGcViEQogydTve7qmC4z8W5EBNstnGxoUDCijhDw8igbuaDBgMiUQaiW45sWkMwx6xRaA83dSa1BFEHWBX",
  "key19": "4RaEWn86kAKP9QDd3zL3ybyB1sTeDvrK1tE2mhhJSbTV8NvD1xTuhg9teDBJJE3h15wnrUw4W3zBXYPsAWaqecEu",
  "key20": "5L73bG38LAbFnev16jdLzjKVajb1BK8gxvp6MtWSYiLddKRqNqZarHertDa5LmxyjxaMubLHuVu2vH8a2CodhnsU",
  "key21": "2sS2MxLvaDaebpvYyEYPEtEDyTGMKr4ECpnLe3oKxew9cgCnvZWUJ9ABCMLLk14xGQkq8ubCPAtLRGJ6bonemAtc",
  "key22": "sEKuTUsTv88Am5UVTNe7T5DrHVAcXBptXRCofQ4n32pMdmZekKTx1q4NRhPaUuZszxdsBZZaXU73AVupwzpzvwd",
  "key23": "5gYYskwsojhvjf1iC4vvWgrkCCp1bHYEYE2h1h7FhRG27dNDtz3F86iXoyyi5dZwJLQweJwkV5FYfq9RcYg98nJE",
  "key24": "rq6LCq9Bbew6kVxKmM2HX2Kgdiba4nQm2QMFt19CVJcXurcCNsHXiPj634oFQwEiSbKYuxkjLTydGkWYJ8M3TSs",
  "key25": "51YhwNpruyqtoJPi83KseTP2kPVDknTtnynuXPRfgLGQs4jDoXeyd9QpiLNs6U7ZqDeVPZNHUi9X33iYwyGzg9AZ"
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
