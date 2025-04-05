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
    "619jhZLVeLfa6KKUZPzbSbXnmTeAYHVozt6qh3o9U1i15EqKV7FxgyGgpcvRxwUr19W64rYC4Kx8otrnWBP8N1MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fnm8ctfSzjB1WYGRsA97TBrHNgj6h9HWWQRtB4vX5hNmx5VZZaKXoAf9A2m2yaDsGd3BHw3iQLMDWCWC34ziNtP",
  "key1": "5W1BXRBU9CDTu3ZqqA53qRBuHSwRPpmaxZ6z5y6mpagtrwY3XY8oaQDiLwiWzQwoSSqSSDaMMnVrBkd3Vz2UjfXb",
  "key2": "4uYikT1GRaRbtxdHDS9LZcyE6EzAksz4eGsztERqenSZACoexiZyvpgn34D9MP8M7L8A1GuF3PN1TtdHAt31QEkD",
  "key3": "4oKETdwzgqE1vkNE6vBjqg61rTPo1qMAQ5GKH5bbsJoh4rcgbC6vSNrHoRm7SM9C8XedMFDWut3NtziCrNkEq8m5",
  "key4": "ucVWkfiZkwUdHk66Au34PK6PT55TMQ436SL6f24GA3sNCqqKggjZXK9TMuScmzGecycUbMNHNZjDcqcMLhS7gWD",
  "key5": "Jc7RAEVAbeSnXECrJM6YqKkc3DNfJq2CiaBZ8GCLs1tPRhKnY9AG8PPf9uZzbwGuBpVrFrLCB1qQqwnP2CWmWgf",
  "key6": "3j64NaeYKXqEd4qKqsRWCrkpzPAvvdGwhX41SSUuCjYbNQosStUZh1MZgwDs4yZs3Lzq6fx8fiz8jt1J4UMbUTb2",
  "key7": "4ewvMt2reaZnC4DAHYwJ28mbFrDeGgxGELwEzpkUTxXPBGhtz3mPavt3WmFRCjuskzUXj4ZBLXpqKSraQswMFwNm",
  "key8": "5fbPenwvLNibC92LNwdEPJdK8uDkJtW1tYMPFukERAgLJmvR875qCqNukRZQs6CQPCEd2mDzKfX9y76HytryvK5y",
  "key9": "kV2QdTtoiKmzCQE2uYRRRBsmy3sd4WBf6QrB2i5dU3yC2DSMYh2qev8peULJAX3GaxXdP7HRWmijGHVQdAmpdVs",
  "key10": "5oQ9khdjSqJdPy29o1o7wrsPLJ2NgUNrxqM2nixQPRP1TB7zBrnv4783t7NTndvyDVXScU9UzZDLZWr5iwBkj6CM",
  "key11": "4qHuaxBJVCLpjLCVMfH6j79nswfe94mRQyDCdZWKcXiZVfZwmMRT3jSMPL9Co8441HRyyqr5ytnUhtBYJhjs8WhV",
  "key12": "5NpAsjhrCRethhzEu5rvr7Ffqqm8XYo8FhXADAQFHyKzj7WDqhzc4unM1fHTVF3VfQLyqfPAJAkhAUFWzssXJB1L",
  "key13": "5Ti8xUq788VkTgVRdhp5wfbthb1K2VqSR9ekBxh4cfELET5kgC81VfPPmQTyRNgpuJkunTCwmmEtCnskm7nkragP",
  "key14": "2fLj7kYEY5KSqtZPJE3T3Ffw7qRPvtod7b3X1wGQ58BXwaY6hsym63eGhbKoQsC46RD8dzizPcez5X2EpHxmp4fg",
  "key15": "4g8F5RsvCdL4DLdUzL6qpnmJ5TDLqTS2ga1rfbiir1oBpYKQG5mwgzB35HaKDEtQxzCXRPH6tWTHH6Q4nFJqQ4Pt",
  "key16": "3VZmNqfdMFZ4zc9m3e54GswPkhDNwb97oFwpP9JvjB986gk6hAUhy2j49zdFArUzYteVpxbqn6WrEsW91uTe5Ums",
  "key17": "49zRCmD52v74UfJSF51188r4igzi9ZD59MS9D5gdauHxs5g3FL4GbPL5Njw73pM5Mz7r9SRnJRjknhvCm2umtNnd",
  "key18": "TQivnxgPULbR8hWZaPBxBG6uvmgpeQV7qYWw91cDRE2NUKLuEgz6DDi8jzhMk4xmgWdsHom5nNYpxNB3FzUewaV",
  "key19": "3tUECiFua2y2dLy2G72E33uBuRdrdy2eXyNB4jUB1yHLEvLjWrYZD6R834FJzeDxDPFfLcqi2MLPfB96W41ho6en",
  "key20": "3fnbB8tmx9jZE42wDzSFjqEoMYfpKc6WgtPjnsqLdBn7dHJnkDZEE8UXhPjjDvnnHg3A1BwFxDmXWw47QPhHH6qB",
  "key21": "5cbT8YXyyjYdnG6nzkGHR8g2G157J8MHfEqoWymVhn8XpCvwueyoYf2h4Qn2SZeTx8joySZQ4bxd8B4zo4J9zGTw",
  "key22": "28VYnWj3vSBcoDpWZYf7GUrW8StKAAV9q69cmeeT5CC54rGLH6YTYyxtknHbWAaEtJRjU48nscfdUoXRdJxQhrsm",
  "key23": "Rx6GSU1EJXEosZymaWt3b8giCEMfaWcrv7E7SMTPZEJfZ727T1trJxFVn7z6QUnmQo2PNu6Naq6N9eYYBmoLDBY",
  "key24": "5PjRETgzyaXi1JwYh9hC5BcaxpUzTBgDD68nzXpHBtKNF4s7EqppZUG4KvCTnPGS98YUR1V5mjAThN4L2yR2kX76",
  "key25": "3JhkAdHcPJbK6Zkgv46C2p2syBcqCZMbujzAJgfDj5vfJCPGKUFMgJqmbwQ8kBXB6BSdPkJKydBqhwA881HPa7Jj",
  "key26": "iB5MZmj5EcCcc3dM1Nb8Wx2ooeYcNPQVBY1Quwo4iaN8p3e1e999RLPAHVaYyYwyuVRLrk4kn5bBMWDdno2QmP7",
  "key27": "5jFHLGYUnCrRHUGXtkooaSFLm4d4GxWu3rJKfoKsfApDB32a2cKTCuxotbXXjZ2Uff9R53kTcWhj6FYg2CzpS1Az"
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
