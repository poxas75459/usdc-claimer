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
    "7F399Gr7VjRuZq5ZoPmZ2bGSwkk5ZH8zwS7vXZ8mVvCtwGXC27TxQXBdqt7YHqkAdzQh5W57nR5X5c5LKPTq5F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3taqyF3wnopmbaGjxWvdkk5YBD7j3S2Tq8YNPSnQoDFdW7AyiDEPbwXva8Ks4ipyxYab1CYPoRiA9oHrd13HYMB1",
  "key1": "3zH98VRYmFhmmHLeyCyuYHuDEWRwhxdZArgy4UL58vu1rgyxvii7byYaCiEDw6M76rQLxzj1SueaS1KBk8R4Emf",
  "key2": "495yAj5j3PV6WNADx8nSUuqUfoASDjHfUFUSYssbi1Cy8Vf2tV1nupAv5v14X6emFDaJyiS6wa91rrwmwnrMogTt",
  "key3": "v9az8ThVUfZwmzViN8XzmCQg7p9VL1RnSUPv6Zqg2cNhk3zXsiGneBFmRSTan4aSHTApXgudPwjGCNaTbnEezUV",
  "key4": "Q4FL9QxCKxYQdzTWmtwsu7iyVMCAjofrVhN3FSio5xdWa52m7pgWUJ6W5RcgcDLrmqB5ULuDBdjaxb3gdHQr3pB",
  "key5": "3WGqgxkqSeNP9cjnRuRxsR2nNiRExteRwXkCCwmwcq4ooHukvkZDfvqK2495jm37fShrLQgAVPx9SE2ZCgxjGCJ5",
  "key6": "4n2oNKuzwjMMmKtuxcHACgz9mPhqxc12rTfm1TKXXmwZqAGCiT7kTZzoF7HfNWhuhz7ANPGp6XjBKP4ZStu7ZKni",
  "key7": "2Unrre5CGcWMsJv8nU9gpxXccvViWsep86eqnjEypqcyNJQs9jyv1tWgWXy43iRv744p6rbnVfKu8psuEhCHA8Rf",
  "key8": "3mxrrvdgrcfSbMAwQvu25auwthwztfKog3vpv48PiqASwaw7eH5K7GA4RGyVe5sTF4acPiTjiPtcLDaj5VXB5sWZ",
  "key9": "5aqao87Zf36KLLB9JfMYMMWC3RSNxGG1RHPpkavtVfHj7fRdnwvWzpMB6PbNSWbUUWM6SrFBFTAAHiFZuJVXQ9Qx",
  "key10": "t2KFg5tiBnPaxNQN2zA6YwTVrWu9HUjP87dacN1Pf5PS1xViTCyoLkXTih9ebapNckmdH9mgYSsimWPFCB2xoHU",
  "key11": "2UnyyT9Fmbrrr2RzqX4wes78oTL9bkkNRTuXswTPe7krmJTeEa9LDpYZmZBM6MPqt3FqKSF8M6AbvdFdSb9PqYGh",
  "key12": "5WeGN1SwzojSXojbxMA6336rYBzhGuNf2qw3FrR2gtkj18CnEnEazv5gcfnYHxoXQQrEh2bjCjLHCsyqyS4UMaYr",
  "key13": "5Gg9RcCt6AeWa3BXmYaWHU3icShjGtnE4HRAbovJDSLo7Emidq59Naz6PitDJ9JwXAwCA2dF7NaFt954ngmBsXck",
  "key14": "2p7gv9ie2jne4Vv3AnBARSpWznCLNTq1i9b4wZWpEYBQPDx29FrniuUh5XWAAt26xrv92AzbaTATbBKqkZUXAYv3",
  "key15": "3yBTZc7wSrvFiCcuidtjmRK1UPDuu4FFfu9tfpKHoQCiKEq3PBvYyMF67UsBpEH2visN969iRXzhJ1drvGUSW471",
  "key16": "2oDu5uEUKLVtSmE5WZB5B2W6rNumVooWuQgZPsSTgLcGnHkgx3cSGT9FM1HaXYNT7VY2Zd83KMzW3WPtB1gsgn1x",
  "key17": "Dhj967spppXkfsRPxqCX8kYQxELgTNfs1ypZuKKEaGUV1rM8H3UoW5XFdCoZdL5krDwPGaARD6bAPJjUgTu5f2a",
  "key18": "3MUKJ1ctUfNmgJpZHFLC76BZmjk2os8Byhy6wpPVjhRSQfEdmWsyCd1v2rwkSKVGWd9tQkEGvVKnUzDs1Fyynpcf",
  "key19": "3h2M7ty6NZwxhrguyMCXrnR34WaddjBoa2dCsZn98S5Qg8YZyXMFdzcgz72GoR57b75GTubpcE5Vau4q4Adh3WnQ",
  "key20": "3dG5cktjtQjU56Y2CXwMRj4oEKqGwevtWoCah1SG23JLf8rYFrcgcCngi2McD7g5GHTmnnWzJxuSrQswetunjKje",
  "key21": "3jNLxEvPjXfmRd6jjf7CwBsjcdiymHRd862arC7J7GqceenTNvqWZ5wADZ23th19WQpQf9D57N6n6EMaTVxbHtiy",
  "key22": "3UHYMYQF1zwfJY2zF6R4b47g5UQtyFmrUKkw9hsc15u7ERM5yacaJH7efCfKcjYiGgSY8AX3pNXViVPTiHM8qcyX",
  "key23": "21RCtLSfWr2fWEoKWxsM7YzCoz2FgPBEVzv4R1juf6kXSoWgnhPe8jHFSaKhaCdXqXN6bRd8Beqb4YsoFSsx8CGL",
  "key24": "4xe6EY5SnwfJbDkbMR4TKGc4Nho1bybZ6WTqSPiVuNbKsHyUxdAwu9kDrzvNJR7CWBPDRAnApvD4jGzDNdDyx89b",
  "key25": "4TdjuNBZymE8kteEaeUWEjcEo8u6Dzn7KkSjEuf9e2ryh87WddoaQMeQ8dsxNrFAiQzhkK3C9cDymzDWHpLCj1zr",
  "key26": "4hQWAYnzrSg6dKubKBrKxL5MR6VqZykXEvPieWAqNnRWyZYeY5MoqjEcJWbZGJzQNqZaH9J9fuaKajfmNG5oa2MY",
  "key27": "482zcp3Q9PCWgiEH9CeiTj8NqX1oXDsSTuHKxUDK3QuaXMjzmq1uWsXN1Frih7NjHwdTiBcHjujFrMbvUuRKA1dF",
  "key28": "xbmT4MkYak2LSPUE2VH8RzNCSFa8N2Nxx9g5HT5WoTET9iS7EMGSBpYZN9ZKpY9mxTvHHvuektrigheXTDQYv9t",
  "key29": "4hJLWE9rjJYyy4REJqwbTMMTnXzZRQiB55hWL8iA3zXHMpvrX9NCZ5YJFNTtY13yD2AfTRBKUvedqgiX1Tnf4gb9",
  "key30": "2sbS3ggL9tSeDx8ZdpiLFsbY9nfQiZZe717nJaUaTvPKgTnYptNaBT8u84mWJXX7WohvePhnGmdMQf8P49iAbH2E",
  "key31": "58U1LbY7tLDuWysj68XuYWLe8bTESc4tdg8XfffqyryfQ4KbZdPuEpnSwKGDVTmQkexQaE2Q11GGZfwYF4nox3sW"
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
