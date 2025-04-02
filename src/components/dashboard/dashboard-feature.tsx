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
    "3ufx9ofgSbtavXWr16i9q5u8MeEabAYjaEektHGTRV6D3hz4s1j9icwVNDH8eSVW6NGu21NuJS8m5kn2S5vtLmgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ne8m1NqNRVWzLtu4Uz643cotFxxCqgMfBXV4pRGKzaepg96B1qNcZzsd1GY3rUZdxLd2GVpBfNqcU4YEYMw9RKH",
  "key1": "3owaNsnABKrZmkSu81XhuCASocvRMm12SKuwZxoNFHevdw2g58yFQnSSZg6zcFKvJx4MPZk9STFqrVfqX1kr5XPE",
  "key2": "4JdSZJqbAWLYkN4RStmuHWyMuvboL1ynZwMA6n4EEShwzue3L8etrBoeBPagMj8G9kPaRcCe4Knz6Grmd4A1wYbK",
  "key3": "4xj22Ljj519zxqmUSktR118zBGzUS417n5fddZWqZVzmnL9p5HBEFPxMvZD59rD5R7we1TCe2MQbxZZyD4UQ5tjV",
  "key4": "32LwzyjbgxUxvaUDsntwJV8VxkRt7uhyYVtc1toQCBe2943H8MbYgU5ao55n2LE4mMjxGvWoA16TCWmfU6HQuzgg",
  "key5": "39xthHRVdKs5T9vL7EkMihfCd1XWL39TXz8Ve7tM1yg1cWm1spqqNiMHxuNffwcQoaBdj7qDFjqoz12yUPyefhDm",
  "key6": "3zbcW6H9p4DRMc6tY9LoWQ3qTGmL5NNmxoWtqTrvz9SH8ry4qbrBYUaZNu5PYU4pPs7r5PwWYXCUrSnVNbfCL1PT",
  "key7": "5DNoFcU9qnM9Tv5pfosavAdntum2znUwNGTbWVSYxuG58oUhtK8xHvPGKYpNFT1d3r4379bMQi87HdS8yhkPeNuZ",
  "key8": "3nQh21Up6wr5c2MSQ5Lb9Du6PYa8zFRVW6aA4ZS979W7cdE25Fw5K1ZzUQci1NoxMgqBdgmj9YgtkRFHnb6mGPmn",
  "key9": "2u6tSwAENqgC9JjuMvYQJetcuo1dw8JzUiaZYi5BhAJZoqoQgXTAXqJCkBFhQN9GJT6jPe4FsekoFBeYpwDDHC9P",
  "key10": "4zWFsBUD3PvJe8hC6CPPkptUxzmyDDud5KJgrujhc2RpoYeP15NecRW3LUfcZHagMDh1kFQYXLTq8Vt3DHiBZ7R7",
  "key11": "44hMgXSBzn94Ko8YBkbPgk4anqHbnd1KdKqSmmMqmuRRdBUEk14AknSdQ6AH9RTtXHmxiWhyKkzptWRV3ADoZKUX",
  "key12": "3bv26SfJqK1okyVmjWYsSSEosmpe2YUTrB2ddMpqaAfgUEJxP6aL7UGgrB1abGC6jisZwQ49K4pd8bVQw51CkgLa",
  "key13": "5nwV78txe29tAudhxJHF16eGo3Pk74EmafSqSdfud43kALsKncAR4Tk55cByRPresaZMMgJdEEvTHdF5ckt8Vxbt",
  "key14": "2Ky2MyfByW6MUtJYqEhRipJnFyUWkCWqkTjk4NymcQuQdwznf43Z7eTVWyaUWELv2ZzujsKtc2NYLzYJ4tKCSZZS",
  "key15": "5y6PVoc5HaiyhZV4MwroqobqDcTSNTTGAHhvQqtcLKh9Ac7V4yfQytr4biRw5fwwwbFMYEFsSPhmNDjsTSkPbykK",
  "key16": "xwgEYEtPqjxXyRcvxE7ZegVhs5NQVmDCX3RuJK6BaKwrFY55sN8jk3cNnLsQM6wZUVahHLe5MzHJE95xi34fHpS",
  "key17": "5jFcrGJMfNfu3KKhtpv2BmDBF1nFcC2LkKZYgri1ks2DyvVfBajoaaVNs3yHMcLF9igvmGwFMoC2waPk2mqmpJPj",
  "key18": "4DBV7GCS7ZJk9edyVSNMHSviTkEvAHqy8HqpNid4TbBaSA8BRUGhd63Sp9Zm9WMYRiFcAX27kGQXRB7QhxtWnX9r",
  "key19": "3Go8VE7UnzYVoXP61wG21a2t8sJSH94bCDj6qs6AT78mUJPrtPmwdeDmTzW1c5htKZsYarLmqJMLWDTTT8wGpT9p",
  "key20": "5cfD5vDZ57YMVqvxLutqeG2G7L4R94Q6iDdvHFaCm31hNFXDzA42cNzeV18WPVov8fjW854agab21mqKYv8xaZPQ",
  "key21": "3QKzw4vZgBBXQHjs1QwymWHSuLdY8Z7TAxzEo8NYYsFfh9A49Z54y8wko1WYJS7MHxaHJFFmfGYT3n3PyDxNWyuc",
  "key22": "4nBjigtic1dopZD4W6Yu7sBPkca1CZBDqeed73NoRbVwNWgoqvvY6vpf6f1GJ1qi7VqM3CBnGnshU6K7nN1ntV2S",
  "key23": "2YRh1X3DxBpN8cHHjDpFC92ZXqMyiy6UwDdEHQLaKLJvuCLsJLB4JEr5MquLcNnwNXpF29bpJNsgYhKBGvCXGhAs",
  "key24": "4kahZBMHAqm3eMbtJ2BQZYqy8kLHZwgjF7UFwoXEcYxYxPWbbJVYE9JYing3d7WoHtnWdrA19KorsQNFGJ1XxKFt",
  "key25": "48hpNBPfS7hmkHL4mjqukvmyzGciWwy8sQ93oiyJDQTyYU6YSvGDf7PFT18fixwV2N1yweYyc52JjpjUZS1W6TZ7",
  "key26": "2cTfKTYnrpTDKp31d6wdVCrwvkH72jYa3pEGQFgZG7be9gMiZXgaL2fFHJR3Ur1BBiwxzECfKVutphQr3TXFan3w",
  "key27": "vXuVMSyjcpEzKVvz2WLd4fVH6zEcmDSRb3aLRfzgKB1Ytxuyup7fKMfNV9Ge61R7eiqhBGG8884WhT5Hi3vNDea"
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
