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
    "51wGogwLd7hEjX959NqXLEeX91n8sJexahxqy5Jr7a3LEY2dxTAWt2r6M5jN9P6wo7JqFAJCsjdqG4KuS6Uo19wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33exJtVBzbMFR7swcpHDVQpCCq2s1wQePtStT8hk5Rho9PWHYVEbF9vz9PzyB4yn7Ww9sEZ7k2WPRN32wLETL416",
  "key1": "2xzzW5N3mhPjFz4T6JDJBBL5p3UExpyrpGhdm9g87JE5VBgtFM7R1dgVJWUMLXs8L7jNYKDE3BBYRbXquBw3f5Vi",
  "key2": "4EaFqwoorzGe39eYdfntbYhn8CwmKAvZhjS6fSnMvd8TEV5hvohzFWgU6QRnMWnsgU4xxyt2AiaPjESXDmQNTUWB",
  "key3": "MZvMsDaWZJEincNvGURFQ45t6eQMAHa6khKQM7F2y7aHTcsGGaTQJCVMLnqbEnWrufZT7wX2tyFKmN6cvyJQvnx",
  "key4": "3i15QbsWxT738uVHz3DUEpoLJrfycqS8vSatWXhWjtUmYisYHe7LE1nrQnf5HvXe6xNthr4x5DUgsQNiZcBnqwrx",
  "key5": "3HzoAz8yyYHMsqiEJkRdvehjeXufbf6iG6Xf8zAVfQg1zNhiL67Du2WmqABigfXWtVLP6UpLgPczW3FR3YVKhCae",
  "key6": "29c26cVowyRXTefz8xTbQPLWrcMbnaLJirv7bAFaBRKcBTpVperdDUHShTyQBnzCogbHrGshQW7a7VYEYmqWNLEg",
  "key7": "2aU9T9yQUTn3Uz9P1geB3Coc6t2yzuPEf8CYsTJQ66xeekGDh2ZQjKsUfHN2RZ8Q6pdhX1gJTecsZBq5FK3TQAmj",
  "key8": "3XLE8NtfTBr3sVTfoBikCW8nLfUbBBa1AqC57z6Q6N7dFSasTbVaXavgQp4DA1y35XsFgwAcyfeM2rSW91kypbHP",
  "key9": "5cUvbPj3KBaRGgfmAQrgf57kCXJjgBABydChLMwq3duhzJCTg6PinfMi4Ksjvj4HGyaSyJKpboc92dAXB7B8hQNz",
  "key10": "5GBjhmkBwP2qh8JQmTPjo6kPa4EeGWBCMkmCKuYTkY8eoexR3jh6Ym2op7umAC3szFhDEJtZzoTkNbnFGJYvEGnN",
  "key11": "ZpQeL9v8BByhA8zX2DBDD1a78PFFhwmH25uZGjpUnrdA4xxkpoFawuXSQa69qjYwZ1zAcF2XmwoonDahUBrf5QE",
  "key12": "53hMn4PRsYrqGoz1ow6rFM5ZmCRbhGwncW3VAkowPKymagFnyiimJg47eT8P1S9Dnisn4knE14WK1y99Y9wtDs7S",
  "key13": "3bec5SRefXTmh9v3tEENMppUyCsiw2reePwXJFyQ7FiYnoTqURJLdSHWLbB3x5unExhhVX14wnENWJU4ZRYyRg77",
  "key14": "D1mETJA3qyjvogzaEVg1nH8fPoHERMUAGzcq28tkUFZWF93WTA1gWgSqNXf3qkCVPHmeZP3JGYZKLC5rioAiiz7",
  "key15": "d9SUZHFVMbLutmJRaWhQFSMnDq69G1d2jdAH2HaaKknjpjQQEHq6bq9AeykpaJtBpcGJEJt1ZSLzpsm6NRW3Eb6",
  "key16": "5h7A5BQTXemqp9uULohcy7koxaHzXykSX1WKFAsjBP6Zfx7xsZ94YsGFR7WoFfukaDHUeEVhhV2VzCGxEkwrkAoC",
  "key17": "o9AeFoae2JCSm15AStqmapb7fueLuc4d5y69eW4KEDQ4knsN6aE92EcByGiK3v18tzUR9nsbAGXvJkerH1qEMaM",
  "key18": "2ZsJrDKdGBZkGhsk82ntAyfR6wHVc2mLb13J3XrX5XLHsA6ob2tdSf2XmX4BwYQ7NkSTPNStPp9k2T56sWhZvGZZ",
  "key19": "2f8LLLN7oaFGk42KNymJGJDG6gzALRkmFzZFqMWPSWSLkVzMaAnbvQz52Tnr9GweN45HjUdHhgZ42aSKTegfxmiZ",
  "key20": "2ydWVA65CJjvdnPKjB5gchcgVqtXNpDtRZN53T6o4UcSnWvJd8CKNJm1PXbxkZTw7UT9vAPtXF43ykBvYfuzPUSc",
  "key21": "5tzsw5AWdRrHBGt6m6uQxpQCpvuBzTY3vFHFb6DsNBjH5a1ckAYsJ2pWQSnubraEwHhXejbFfoUCQBWpqqtr6EDz",
  "key22": "62egjkdRcuMQo93YHbqpzxxyumeW6ZZqpVfMPvrpRiwR2ewzwDSZJwLRiJ63nfutdERXTeNtgqdghDcGyhvuy74V",
  "key23": "tD81kDbSCfynto7yTpdNFihH1RTAk3QrNzAVjTBmbU4eJdG7rnP1TvjRWstPF8VuhBfaZtBnbCXGt2LEGx6p2Bk",
  "key24": "42u5yWdNLppcEjkVRDzmcoYmuDmqR2G9GG4EcmisWDd8v5tNfXbFHdwXiv5JckWm9HxAPZP8ixKcFvUmLH24wWkt",
  "key25": "39cZKYJ1uJmzTmWkTRF8BeieopXLE8sxhzusDmacr9PktmdUfJEB44386Mjh3oK6rnCGwH3Kc8L21jcgJ3fvWXLg",
  "key26": "4Nc64whZvQewyzA6ZxVMKGmsSsLiibK3WbiT4DZsKr6Acp4x5F1SvPFwarrhg9HKonbHmysrg5kCm39i1FNQjvfs",
  "key27": "3wDsUfqRQXmSZBKmivD7peg3D6Jr7pSwyAECJLJ8em2UPJC8347xuSiJnLYe76K8xqNQdgq18erFdefAeoY19eKq",
  "key28": "4axBrGH4fdVTRsfHrry3YKSSrLXauQLD5HxzCWkbxkxZ76J362kHrvSaaTYTS36UkJBWj3VxEMotPEFkg1yceqRM",
  "key29": "647aT3nmeX6s4CTeYaSudfgRQLXUDaiE8bU2N5yDdWQYA4XgHQHbVk1AbvCB2vkyAXbFWdV21EpMWNr31PX8rLk1",
  "key30": "2DJFozyFCAkRkZKLihCnvJUynPf548nC49xaamEHCqkhq7KYv6Zc7C3ZT9qH6aUwNai1Ai4gpMERcdQhf76R6BKB",
  "key31": "2H61Z72fVRpW7g589k2uiLkiSWmdW3ttss1kpuHbJW9xcN6SXxoDmitSbdSyGk9UoQnMnVEyiWwCpghfQudqgPs",
  "key32": "4ueVnjPZNyuTmNLNz7NPeETEqMtTwVL8s7bD5wBFBz6dC4YQKMBBR5DR7b9dGce4HuCvZiJ2zxjEPyWPeWNCicVD",
  "key33": "5ZzHsAaPf3tKvEn2TPzCF8EwN7zebJqhgEuzarKf7b2pd8eNVWNQwGcgjtqo1LuYMbABgJR5S2kbASCYjF65zfE8",
  "key34": "2yZKj98x6evWc2zFuQ58tKYiSUk26qgnh9xpCKd6VDU55mXQA9FVdHKEArmTNaya8aH5cCXbSgf7iHqQPmJcJXsA",
  "key35": "24EJ54gTKv7ve6W7nWXauw1u8Cjhknmg31n4aq26KgmFw1rWDuoKzbzEECa9R5zYCMqnon8apRydjyLzZvt3CSBP",
  "key36": "4VN2gJD9b5drkTWYQDDKEo1UN6KJxgnyywJRwvpXTE3LKEnQeucBLH9cv2pVnEgNHZA224n5M4Pz1UgQ5JQToDGV",
  "key37": "5BxE5P2UZnYUJnyMrRMtLaJWDJrE34QizjoFTXYpaUaZxMobxLjMjHXVf9QTtTSbKDH2R8PedTnfi7Nw3Gv3yNhy",
  "key38": "4hCgczinYaSHZt17sWwJ8iuoRzB1wbJvho7EuUR2nQv8xNzTwfuFA3K8AETijHCxPMLTE6H6tPiC6kw5BSt6rSfd"
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
