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
    "5sCaFXirSymp29c2ZTuzzaVZkMNhiGuHTcnyErk8fvdKNSwPAFj1sSo5ozfBZMBznKTipxyWFv8KoLArzLf9aQAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbLECGVwaZxgprFDi2gRE8TzppF2Mqbav3Au94xvJA8Ro1kDFhwuVgpEMjsLsKv4d4HAoB8rU9HJ46kY5K1QJSW",
  "key1": "5XwxuoFcJbebjR1ywPSnCoSRXY9Arg2Wb39zbwyrfbqPhQeDtYtyA8GGMsNpHVX2jCYSPdEXPLknx2hbN5XhtgR9",
  "key2": "4UGQuJGcwkffRu72BJB5SmU1CuvBShjZ3eXnVYAbrBW7EubhWFr4jyjTnGjYvwA3sApTP1skLYxNfjsjDSPegcnf",
  "key3": "4zRUxQuQWTNoGytxUkNdYKTYd4aZXnE6HzZ7W69ycxCfLHoYjbY22CybWxH1y9QCbKDoDBqxjc817MZKzsTsc8yC",
  "key4": "39ubGBCAQct3qsQ8R1GrQnSLye979qoU1iTX939inwmSnXPDTaG7Ae2uSWvCp12ju5U4DSmXcXxWT2pUfbR2eDnL",
  "key5": "23s2Qwgit54rCiVfpZGtWCsLUhYEB7jcKEfYmxZBQZ6wrvHUPnD3PjQjuCLrwwaJiVQpiuDYCLX6PGupxyynN27T",
  "key6": "2pNwJkVK2RFCD8kFkUE4KGy3QY6w2stXg6zhu6sV3jrVgAsWCf9yAshBupQvFtNeeJkKF9G7mpSFDQMV2F1cf5gU",
  "key7": "5xnEx1UdpzA7bLYkp4ecicAkgE58dhjNE8Yi7nLMtrw6itBj2k6sQDksfLrRg5UovivpATyP3UXJvdTNsj5deswZ",
  "key8": "4TxKca616zBrPnNQ27MhGmVuM3bwMCeKTDF7k7UCMEURSNpj4kX7hcRLmpgHKjxF4N6Udr5WTggaRsDRqG1Ed6TQ",
  "key9": "3R7Ae6qtEdekXuUit56zExyChoYQi9M5MDht6Y6aMadWRyU7uo5MDJksyBhnvHgVsUQF4wNgEYSc5TWiJLSoroY7",
  "key10": "3rBiB5CbXsujzrG82poZ1S4rMfLLR3Yj6W1C7D8UohtjdsuE3Q61QDqtvVsPN8Hjxei8Qn52wrR2tDTfkJnGj9vB",
  "key11": "t3eMNAEtpMQKpBgR3GNvLUE9jd2YPt75h6ryQyCUmmyyBP1BEui7wQpwjWXheX3Twjqsd4DxBYhrC3swJjVZKGQ",
  "key12": "2cfSh9DtwViSnDfaZWVjpk8zk7sRQZ8fHaDacC8huizeiHq3mtxyzjpUxVcHfSoqaNmEfHcpphSTL5qQPTDAEf9e",
  "key13": "3A5pgKEQLW2PmoySKyRJS3JxfgPvuc8dmxyBJaBAhdXgeu69TKg3VNAKrxrnBBjR1zjKiBwhsHpRVryHLewPvrVy",
  "key14": "5z8zQCfKTbgTrtUiE39SgPwoMNxVJUopWUV5X2XogfE5avWCXKMoyA6fGvNAHTAiPYsB1gF41DgfndhNNob1SzQG",
  "key15": "3ZyN2SLjn29PJVxpUsEeYatZ8pNk8AhmsL7Hpb9pg2poQoPNcbuzsMW1zYayhW2Kw1sGuuiKYej6kDPPvB7C4drH",
  "key16": "4QuLcRqQZQyNme2oi2js8HtmCwdmd4gs445v8vVQrexaHSeUuVVBTV3HNwPnHoHRthkafXKAeUprUnfFEmtkY2sh",
  "key17": "DHbVDWJxFQFiLZftQw1AvXjBkoXSDZASwvfWEVBBc8TWqRznR5CBrJKd4xX7QjgpexnoN7EgaQhkwdnZpmXV451",
  "key18": "ddWtQzjTixCFgAqtTRSn92oWYm3J4oMzAqK3nXBGeKqfTbMSbL7XWXxE3FVLiRSjbgmMoaLHexbfrUhwsQQd1yH",
  "key19": "3orXsobsWWqWrNkqnzyWK5qnAkfXNewfCsikqNtPAkmJ4BXdxHBYoxMGhcLb2yiT31dJXGX1FTcixFqTkXQh8zbD",
  "key20": "2CrZ8mJWNDzz959yKYaUy7KinaQpaEXnmYLiALcpyA4LipE5Wv2HXi4ypzBmRJxrUQq1m1zLfWBR7DafzebrMbRA",
  "key21": "5gyqWaGFsJ38D5FVAfZLnMYAW1Z5dcKUiNZr8HZiMR5iUzgiGSTmZmh5D7RD6qvQYwpKBPQKhcvMMpDCMNFNqeUG",
  "key22": "2fvyc1Pn66zbGYA6y6iUAAhmMXAqJyx6VpWW5ayWdTMzxcZNc9APjybd4CAiBSunFmM1nTWBjZDCMU1sCGJABVES",
  "key23": "4m2nLoM1Ln2jMpvi5TxgUvuGQhk4A3W2HTdyizG5KeQWUcCGmhHXoWakwM8KaeAJ4VNWjrAq777vBNyHnNC8xQDv",
  "key24": "4rxA12k1p4rMJsekYNorD7JGuWgRhkbuLu3KGecj5KcALQ2F5us9wmD6VpAU7oy8J41vA9kcMyittEkcHVbexHKw"
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
