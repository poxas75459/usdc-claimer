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
    "2oDK1u5LUaFzoABAvQibAUkXgiLZnA8rNtQ9mBrH3WexbZyC79Qj5zqoY9vM4maE4LVNUm6kjw3vWXf8PzJUNTCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCnhB3qwDsGo7aAXJ9ifXaKfuNUueD3jRLgeTVKia3qGnsua8AoM95caPFF2fqR3vSDq3NPQYnAwM9csiPn9324",
  "key1": "5kH9eVgtLdzBhhQ8Wuz1VZ4whELZsUG352hYa97KhrGqivkz5EzGqKAuYZimPF9eZXLLVLEP9SoW5brqPCXoBkLC",
  "key2": "5BTz3Lx88ZucYXGhz6mKMY4ak4gLzwTFuPQLkkhZv5migitEADRrtY6VCbDEhfLuVS4QzoMN74BSWutS9EAXivBf",
  "key3": "5MUCRZULbJCVJHYm4HyHaxJGKHKMPo4eEvk2kQ14bESzb1UMbkFSq7b64ZyUSR9rHUJEKEbnyx8NsXAX1tUBuYzT",
  "key4": "VEtwZwP32NUqxh9ds828e5ZVisMboeoTodHUpxW6gtvBmWzpxSkQre5jRUmYQTe885KxKzU8VMxZatZvnSwjzEp",
  "key5": "4YBCHKybDwCpVP83SovXsZuQ6ZzY5Cj15hrzhmvZLSuFCSCUGX65dVoGHCsS67R55D5qy7wjsBBfDCgSRUSfs3wD",
  "key6": "4N6MmDn4tUfVeJe7D74EfSex9xzZCEiqZ9a6eoEdvGKsMoY9FCuRNQLMdqmoX4DZFK4TpPi1VCVUYNYoQMRvL3mo",
  "key7": "37WZQXTXp7ZAv3zSrHUfStSJfVQH5KKncSzVKBDh5VuDY2TfuwLMgijxMpX9L8JeyKBj7FHj8YX3oWDgGLGv3vW",
  "key8": "QXrQk9aWgRTxcT78H45LRBAWpi1gzqbtyteTh8wDJAmc43HDCH9a1YnvcriiRupqpPYKW1R6tejrrrLZ2zVd4Sj",
  "key9": "4RM8NLp7uBqoDvYFbg1r1pztXYFAsmRyGeMAnXPnnrZpV5XCuv7KgniPw3vDVaAKVAygJuSDWGBvB6MoyNwo6TCU",
  "key10": "4riRV9R1GRnEnXL4vF6rp7fkBdv76GQy28rFoWWsnUCPR5yBGdRXL6mF7jkcSGZtzLmGxzvBuR4iLJ8afF6Bn6h1",
  "key11": "wAxeRxA4qT3cEWLqHhPTTe7TK85swNkcziP4rJmNTCU4944AqHr4kWrDaMiPzy6EW3t8mSnkTaCashkmEPJRR2R",
  "key12": "5iSWUyg3TCYieQ2qhLDWpVCCyfMoCU6TgdhFpLFR2HNavR3Er3yERb9Mx7vhRZvofJ6igkjWcgqcive7MmJqsVxT",
  "key13": "5KiAtxnAv1d7zeyzSJiD2AzjpBk34xMmtTw8bhnYyvLGmmjHHJWcYZa3e1C8yCcnzrjB4go6FZkRjecPabWXwJKi",
  "key14": "38HvsGqVP3ey8UDfoZZDwHUkvMWg4op9K8qiC89a4jZ4FirsNgkrsQQukYa6fxHg1Pibc4tdZksaJL4XaykqUJKe",
  "key15": "MnsjDmyAgqHawwAfMkqdrLe4bwcA2HWN9WVg45A1zRESQRzdNwj7ebbbxHEbtyn7Jugqw8RBCvPRGoryp4oq8zN",
  "key16": "56htxCkPFNBHtXj2ijoYTrZ7sm9cWXZdDxSoSamtTK6nbZKaM6V62tL9tGre6ogBqj3fgACdbvSJvHGvZ1TJMHGY",
  "key17": "3S7oRDDrWUMoGdDXng8iGWpc9sRaZHkz3d76Ptgo2RD1VP9nkecWSx5pSP9nhaFjvNmhCfbZwCjV2kJRg76EGoVw",
  "key18": "34siurP6eUTXLeamEHkfwbJNEAdNoctkQrzGiReo8c6hgMc1vnLu9TbfmwNmnx3QLUsMGtALvawXytKDpYbybCS1",
  "key19": "2LNG6oeqxMGM3qs4BmnGJjV4TaFQkaxfb8MQPd1qvwhaQke3J1ZL31okyTTjcoBShKBfsBVUEzhDntmD5Qsb7a8L",
  "key20": "3nhsyde1WW3UYajwTTNFFz9sGnkMBkcJABYuwxTt4ChVL3K6ruF98qT8ceqJmGQm2qmkRPk88o238YxofEkNeQhd",
  "key21": "3yp5CumezXiAgGSH1Cwa43DVcavp1b6zsjUJL9zKoWbbRpoSQs6Fcj4KJy57RDtLxbn2r3qWGbLK5p2AGXGqFc4M",
  "key22": "3fEfC5FWZafJCwVtnxhBLjhLFYokYmDDdAecinNBYxU4yyudUjfxYEgY83TG1DgYDZ2tj6xGkgKY4jv5PNeYEdzX",
  "key23": "5dDkAdBGHDwQVfxpyZodd9qymYwExGmN9HgzKiRjpjLAZSws6wdyuwzNCxj7SkNA5pckcXM5AcJTCPNXCEpxoG71",
  "key24": "3HDrmjzNVhaN1Tybhzz98wzfnt315Jn8uk6r2rewm8sQkcodBX2Az7LcBWVeXdaUcpq9XJZjAqj8Fc5bZ51nTTgw"
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
