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
    "4J266Jiak8kduRbncQtonrBGaRb1RsV81ZWETYzbCxfhj4rKLVU2ECGVdsDkh75R6JcwCxwpmV6d2PC1wbsjgqUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yoDf2yKvNaoLcLyWCMjRRbuKGpMuSxdMZxbtFbA32bL9G2zxSZcQWQio3m9W36pnZzx1nRcPWuQ4MD28EEa8Xme",
  "key1": "5Tu4mwoZzw9ezQ4HWyZhEuR4MF5CTbjqyHGcmyqhQPDLBEPFyEQezX9rzG4S6Z6Jq9YHX7gZpxbC5pBtHRHGiKbm",
  "key2": "43CwWmTufX1jgA5CJgfN8KcPPp24AgNbG2L3B51URwv7LfNn29Q5xP6FKKugUmVMFEjE2BHeBgGRy5J94hmBB7MT",
  "key3": "394iWtGcM31d8sToKGvCtpBp89nbHkrCGMaEt8PAwZw6BMcTxgqX1Dapfr7CZ6qu8joQteSntSfHT8mk8avWUFq7",
  "key4": "5gnYVJHkk3AhXNddGq3ZeGXRAK9wtNHmkW7xdy5XcwG6qpYYMwPXtsbCKk3KDQEvKxgYLtsAo5qWCvEM2KkEPzNw",
  "key5": "5dsuSqE1hxGPRyoswTMR3gzxUFSoFKmjTF8YwdoLmtyzifw5GSuWJS7HmX4De2uAXBDKDq2FqFnC2AHJmor9JkTo",
  "key6": "yz6PnVpMRVzRZibn7rkdGCNtYM6weVeib51sMzVsdC3iQTq2xGoPSn8VaPvajZjFT7fVGD9QdZH65UkiT3o4rK3",
  "key7": "3xgDtaXLmrb9C8VSP5ogvF8FvHAPihkDeSQLh3ExJ7fK1YYLSikFnWgKtCYLmVukEn8C8Qbki3B6cZoz3w7jmaPw",
  "key8": "WPyeHQEridQr1McR446KSCXjFNa1QFEW8cowvfR85SESpAcghGfwwWDrPV3hZ5FWeCjQe693FAVxsyAyPmsbxXN",
  "key9": "4YDZfwXURDWALK5KCSVJT3ifZ2UNvqtrhFWSBhZFC3n6k168XuCat9QLp33ZVW5rmuCMBR2xEKhnK2vAfxL2doWq",
  "key10": "3zUgL8A2QeuhsoxK3ppxAFrj2qCSy38DZJmo1MnX5tBdkvCDcHDZHurJJXxcfh18eLVJQogXJYj5MVWTpwUk5JPB",
  "key11": "5roQwffg2c3fTyU8w1Sm8oYLvfSk4mLiD1uLF6sKKmnDcTXfLGsYifrvSNShdPoMH4qhfP1rJzRW7yJkK4tXJXSP",
  "key12": "kDqM32yqF4WYFXsdFa8sCdoYi9H2yK76vPcZwXGvskdR6ZatKdUpWsvEzBtSNcP4xPJL1yBL97XJx56hoz6UT1i",
  "key13": "3THsgDWuXwEC9uqXLewg6D27RyS4wSKyWeCsj8Gf6UN2JAVQEo4ir8Hq7Mp91S5hFzMAhgt7j1DefULBDrLWJQfn",
  "key14": "5A9wVZWuvxXmUtFvCJUpv8DSRUSwmiHandREhzA878Q8jXjjtALhhbr5w9t7mwQYSemUBfaRbeQbdiiQQqEdKV5Q",
  "key15": "w4XdPJRwG7aGRi5thjCjGDWh1xQz12tJiFVKocnGkaSPHvSUeD4xzSn5JYJDZqz9pdcGTVtjZsdsWFCqWia2YfY",
  "key16": "RZX7sWDbvhuvCQngd3GDf7cePw19XTAjn8ahkvZQvwwHvp2aCCkh7QnqwfvFCxEMWBSKFq2cMAjLoJZuMZqeAYj",
  "key17": "2Xp9W5FrfVNcmwUoDHHyaXGaprxWvjM2wdPecezMRh8yW5Uxx9wNT7sdChZQBbcH25nRmshFvYo5RxzStxN9Raoo",
  "key18": "556ybhttE1JTojmaYMdHCZupRVmZJmdrkspa55333k2ZN4BfWHKia7eBwGLDhVBfXLCoDtvSbzLesLZefs2nJNrQ",
  "key19": "5CC6ApzQqM735hQqkBCa3zxzfd6RuRJ9giJg43YvJnPgMRWNcm11w8tNSJsYwRk9V9RRXbubwA6iScpMNo9yDk1p",
  "key20": "5v97WzC2pgQYYNoALJGJkpDYKzY6suvxV67KQKLQULu7LNNirSDFjt9PBtjhpiQ2RJZrS1EmqFjBpZTztVHRbzyx",
  "key21": "t56VxcD8KDKc7KBtV6fkvwULTEEpUBdHWQZERgBqUJF1aAFzkvFEoEttWN2LMfznvQFogYkGXt376xJpRRrHCSc",
  "key22": "669Au7ByErZtSWzhfwgWufYJ6pp2KJY2VFviVyFS7N7QQBSFdM7Uc5eJj54sgdu1gpqYXEsbujFrdixoex3tqHhq",
  "key23": "37Dsk96meG2u3TQjtYN8HZADEtLqUvAwb8MyBPmMBgRH6eqo2efaeRcF5E2hQ7AnNh6iBKP9zjd71NNJpUDHkw5e",
  "key24": "32ZMa8pWoBWp82WfdU2vLuAUr7Rm5izu9MmYTf2FLrESEbr6Ru8VdSofwg2Ld13eYtVxcnt4KStyY5D5XL6sZ1nN",
  "key25": "59F6CFxvmUPouVWD1Ec7dJNhsRqaEqqwoJUfbz1fKLHk5k3L8ohCgUVesu3CoSj8aLXXgnSgwnECrMWfXqHJndjr",
  "key26": "4CYKsfgPnzLkS7Qmyu6XEHXmA6xTUG7HfxFMJx13JjNpkTyWK64V8GQMnx2mBD4cGBssaSn1xcDPjSCZYoPCQV4N",
  "key27": "4pjbfySRxGiCWVUyJjdXn4a677szSKvBV8TshZ1xKiZNeL9Czn95LNhWJC7HkypqARfJDWz4gAcJJ9CM3nTpJszq",
  "key28": "PmicmYUkdWovkHDz62PPB6Ef8G2Nq8GR51UHF1NMWi1rW8P5jNsUMrG8s17ugPxQSPTrrpYm1c9xANZjnywBR7D",
  "key29": "5gVozzzyyRx5UAcKRz6guM9NB1Zs5bHUjwZMM8CYr9QgdVZtHcHTmx7kLAiEfvMXR8JiQxGc6PPmFDzkVt5CJWzn",
  "key30": "5Uhmdd1xSgQNKmcBXPEsX366QWH6tGuHSjcpS1FS13sddTfWoYjaPvc1rCAaaMTGUV18Svvi8k4wRYsuLQbtMcW4",
  "key31": "zmyXRJpm7CJoQ6bbcBnbbmFiKGQeXemjqjr8L1zr5AdrWbLTgkXTYWtDLscwVjWs7j9hdGvVaswY8df7da9kLYV",
  "key32": "53avbnT9VoiguTytqdBqbr3nkK6JbT28NXPmWYw4eHUUSgorpmPU61WzJ6iKtNm54nyXu56xeMRyRYJB8ZDfFy9e",
  "key33": "3LCLFBanj4TZC46JZ8MeAqhRcLmiwJLNPi13D2nTj7oparZrSt4cUWzwABpiYfhqHEa19fWdSmFUrac51dRaADGq",
  "key34": "5sbJih7iLjnD3EniCfRpKAqctN8ur3om4pdsAHvQHsQjHdLv21ft2AYmedjH69zwzf51cVbcS8R9PrDHoKuoonc",
  "key35": "2yA2p4qtJPT7vWPUYEhKjXMNnAbXsSoacWCJ2zAN7AjCRLZT7J54hGoahJBVTWMpmELYSwK1thVhXgg6NE5etaxj",
  "key36": "o9aFG3tbFbCEMxEbeWYuSdQD8VSau97RvBtUiEMYqog6kTQfhvSW4DEtPufxFfnejM7FLZwuJbbdmkXJLjqHnBc"
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
