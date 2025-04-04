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
    "2MAzEuHC75mHwyXGDpX5Xca9PZpib2jF81pt3bjg4zp3V4ykkCQrkpdbbGiPUxMpjBnZZsCHE8ptJhHsVFeY2Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bXkHvgcJjrqMaiDcpbeAQdejimtD1YVnVyuXaXVnuyq8QLNG7bsHq9U9rQJvRmfnfuJEsTv2Pe3b8fXcN6aJzm",
  "key1": "MybjxzBP6ECVQ8Ynxt5jc6KP6kt4exWdB8ysGbnza6b97c3vw8hzsHHkAsjtrmofkVMnq7hh2UzEiJ4ak34SC8u",
  "key2": "zwpbioVWd7qYz7USHbhG96hCDEnyQEWK9VEVz1x2tJ6J6hrQFspa43GohsGRLKPvwTsdpD98hdYoJ8UaEcs38JX",
  "key3": "Y5eUsUFGAFn3zN2KnUMgqcUAP1etfMRsXJAjBD7fcnBjyoenath1YqfB9yUjJKSjciFLzq7CyigZmbsa7EqW8Ms",
  "key4": "42kogZ9xoqsJsntH2fncxqFYzAEnyCENB7w2Zztd38yjfR9x5ZbsU7CtwzuvpCj17zxCQkAGP3spLEJniHPjxEHw",
  "key5": "QatZ2rwA85qzNxzLX4gjMb7Fjnd91EqXuLzSP4ZYK3dXN6HQ2tcrscqsaAFTX6srTTwc6NqiC9YiSBeALyoG1KZ",
  "key6": "Ndg2ySmwNusMUYEw49fDyPkdnzKLXoPw2NFabtJPVfWtMCEAwNeGFTsg2ewjEcAbfd6kAZ6HxUZGnYD8qw5j4p3",
  "key7": "45getADWhxdeJf1eQyg7YLRkMGkt1rNFKsPkuqdLM8cEZCkxDedLFtTrFUWwyEDy6kezv8XRwtpPkpZtHpKnPfRM",
  "key8": "5md9Z8K2mB8WNSVV9uo838o8B9B6DjJcrRCWnstNhD66PUoxtLr13KhvqEq6CETTjaH83TjXQTZ8VRkq56uLKTWg",
  "key9": "64muSq4zbWe45MTzUMr1v27YWty8uwWzeLf1B99jkY2bye7Wr9P2JaVqdi6FmBN2gvXGhY1u1mLF7fUrvrJ3AZtQ",
  "key10": "5TUqPY2vCuWL112g67Ta5NU9ySHFpUETBLNG3UE4WzTLARo2npKqPTETFBB44YTeafvsu8AkxsNSj8CGpfR1szk5",
  "key11": "XtUm3yEmEqPHVq9U5popsSuYqRoj75XJi2sgUU9vh9ACb7nUMQ3CE891AvaA4BbBVYf5XZ9ysuyWzRRbLGkAYv9",
  "key12": "4yi8pLZ92zMU2kFz5KQL8axURC5oPvSVvtBQF9CDHD3MYN33oUPNjkog2LkZhQoEsc5u1knG2wvgqiaWpgqJkzRU",
  "key13": "66N1aJHecjJGHa1QR4FCVTUg4Cy1r4S4zWJtSqZokKK9cUvVjbbUSNmZTtzTDoCxsPyiMj6LLxhk9fJshg8Fu2yy",
  "key14": "5NL3nWzNCGdQWJGktKoWDSJsNU4bMcddYyTEB1TLgcLyhnmDVbd29X8WJpa6hSQgsJbrjBRkzApeX9wnmGmhzz8t",
  "key15": "57TN4ffx98q6PqgisfbeNAFyRwyQJXUSETNfcAcMCSMPpCg9WzR1a87utJ5nZ6MQmrTkQ9qmEr8rEqF1YhRoQZWS",
  "key16": "53GrTgQ5tHzzHxWWTQC2Smp4iicUMYPwABzd4E4KB3DhNmSUpoUnpePWduhc6QJK2hd5wSMWdBcxP3g3N6iK942Z",
  "key17": "4fZJpg2azyzGpjeCxGanezaojmqafrEXN6uQCXBXJv3CT6wv1HDVjHXbL6j3Z99R2UgpfGfJ6ARLnkGeJKYxcHJu",
  "key18": "eQZcfbMYe7aCzWuHGRy8hhzG5GyjC85gpK6Abz58GGS8rYzaNmCfV2F9LDjjorzCrJ2CrCtWgezW3RVxvfRotu7",
  "key19": "5TsVFDnhJhuZmbS8oXEXfK8LYJLukVg9Cby5kmQzvKpGBugorvzG6RbqRRP4krrDVfATTBQPB9CjAbsSPWkMv7PS",
  "key20": "Ckmzf9mgj86B2EUmS4TwtTJEcgaRGiRReQKWZatSi2fGeVfDtrLDX9N72Vmwarc7KhTbrTeegW5e5PAPTZ3fvSX",
  "key21": "5zudYrbSi3Fcf3CoT3CFQWFJwAmW2mqv2rvGEdZkATtrvmF3qu37BoWHKeojAjjRSa7SS3CvygQhkSkQu9xNqnwh",
  "key22": "YHT3TpqQsT8zLwHZ45zmyac7kEcANoPvFeYcBdWG4bFvejyYv9CbC93Uv8uc21bckcSo12s83ECWNyT5BN7FK8i",
  "key23": "5RBMFTbhsdCihkVQYvdNd9V89BGKsrd1qSxApew9dKmKqhPD5zh2ai5Md1MeieRzMZAoJXBuwgkjnRNAEZZg9fFi",
  "key24": "5N3JoiomGNvkrYaagLNde5UHbAvKERA4irhZuV2rhvV7SZV7foGjTBUoxiDRamdRLdAYiUXMGWLSiw27jkBnFnfK"
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
