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
    "af7igE3V6LMPBnwxxmk9eeN83szsQcvuRDut9Y1GA1qhu4ZPPViFHKHph3WjdFxCwjh8JCp9ACt8ckv6opR8b8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34fAZ6whr8pKxkc7NZJ74LfA1zkDfGqt1gRypgj6bvH3hFhqc6NVna6t9mZncBh8q1TX8KbHuxchXYR5Cz22jkxX",
  "key1": "26337EXdxojffYvKgKuiwhRcnu83aspWFardq9ucDYqiNpwfP2Sjzs4chZRso38sqdqMV7C6puwQ6ebTm2mg9hJq",
  "key2": "5UjLUujFcqSbUk8KRatTtsW9sbGi78Vvtjrcu5koB6knA5syLmYaftvt4pzrB8rXxihE5cLDBNAhTM4RetzrvhYZ",
  "key3": "i43PNTBsHXHFUzrZ8cupYP3PRYSKYzSybE6dhZ92nt49fTWrsi8rTUm2fkQMq51XTGArTEaVwUvbcNYg6V2ZnGT",
  "key4": "h2vF6Hm5vHPrpkChogZUZoX2v15RE1YbUTty9CgyMdeYMAqS3f3Lk7TouQL2SuJeKpAzqDRWy9jQFgCT28e9FBF",
  "key5": "LN1min9y7qYiwYNKsfnevQ6KXPvDumqTof5GY3sBBC4VCNsTwMrKgidwtMM54KKHUpZ1mswvmrY2LYVGpuzwqKE",
  "key6": "651uk7Tj8vxWfPzbtXGXihdBQ1bE8Gn5iVuFmtHsEuuzNX8VTMnRY3BJUQ4necehvXNH8wad7BsYi9LrMbjBP9SH",
  "key7": "jdUa8N1Qkh59pJ3X4UozSsYvMdX5RSdWVt1wn3QWaPW69k4EPx2P8x1TjJNAgfPyf7DTcVN9gVoGVRb2pS1Cvau",
  "key8": "4fBHYGkoZTLX89Kh5z77d7iEz3H2B5BXmXSRVpo4BgSTfxeXEX34EDmbcBrxCKqUxqfPstiXWsznHbWfTN73mcs9",
  "key9": "S1bqURsmmxEGw1RcKp4M9Uya9FNsXLViBf7oNqAqBVJNLWGPqdRyywPaVFkGK2CVaACVSYdRVtwfZjsHCvPSgzM",
  "key10": "5n56EaTREYD8Q2Hsih2HSPWGP98y5yntrKZouerCUREuCXuLRFimTN2mLN4HTb5dHcag97d8H9cJSeJ3BfsEugvE",
  "key11": "4Qp68PuQQrsPBvUqgisLgHNcBSg4cpYVChUWdca4MQj9uwEUYjktYEQbjrubKxWuhcu9FN8hDGh4tS2aVwozL9y6",
  "key12": "RshPsJkYUyKnMBfWC78TetHpq5jGGxhg7MQ1JVSSU96vZXCfrWZmGsAyEYyrY3AntBbsGjHGBBMrFUoCthmo8V6",
  "key13": "57ZMStXYDJpBnUqVdRh2SQY13Eq4McKwZAs86axh7aMZpnVJyu4Rvc5idNH4uLYbr6TcGqskH6DuUMQ6sXnoD8ZA",
  "key14": "2U8tXnhQRWmXE55vtMyRMmQpa1XmKC1QA153MeVbXqR9GWwHkkUPf7AfJRPssGJaoa9qvVjCkUaFFrFPCfJccL25",
  "key15": "4cYaWFsGX1Hdi9PYutV6E1gdjxm7dgLRQn1jdvRxSpr9q6sCfUWofygxEHLVqTj96RESXA8xYmiq19zdkBzbJPms",
  "key16": "22srM8H411FNHa7EjHk76ha28uDXB4gZUKqowp754pejtGbaNiLyJyNLvJ4x1XMTXZ9zvitJpGB1S7eiLsEiruSB",
  "key17": "bHLZjKoprWk68EPzzPgkwdVmw3monQZLPfrT4cHvhjqYXcgkuw1gztVPc1SpuE84MMhis9Ase4LxwXu4h7rLWHM",
  "key18": "5dtv5VZ1fU1px1wrwxyhiRXMLVT1uaPVegxaB98xxpqSe43UJHjTh9Wh77q42L4DVCmU82juTfRGuM6s1FUcL41h",
  "key19": "42A5SzdwjCeQELdVJDotQic3R8SLoiBwLkbX6MvczQmLxJC3t2o1S4iZNHtzdZqxeVBrrgUzqhvj4y1RyqiLQnuM",
  "key20": "2oegWcfQjJMXX9a3JgCYNGitbocBZhq5gPuGfnJiZMgtd5R5ZSaaducXgWgFFzdT3iddHP7os3pLsm7jSh1Unebs",
  "key21": "5ZHfG8viAwZ7zvCNVtcV1AhqkGQ9mrRNzZECCoth9stcf6oesPUFMioXmuL3Zhde3ndwYn3MtGKgTQaRhEm75oq4",
  "key22": "513R5JJ1ZzDKn8nR2AanYaQ3UW7XaJEdFfmjJN3G1iLxaAymPBZHK7JHuDujuiBxMazhUmvA6XeKFecgUsbuu7pG",
  "key23": "51PgNUMF1FPSxqNv93cddCPybcZkT1bxS5u72C6HLJ9GfHffwwPAa35hv63yLaUoWgBHb7AhLn3XeXYsxmLUJUPo",
  "key24": "5ZbKJfXKRi9KmXC5wcNM4aZ6P5cKut4Nqe83x4t8YMHAxadydu2HDKUUxu7Cz28Ekh9pykrM384oMdJ5v5ZEGacp",
  "key25": "wYT9Uvqk5aPMEkWS14abkFtEQAteoebGxrYEEkqbQWYPTPpo8W5XeY7jdt96U5R4q6qj142fWVRCVSh97d67UQR",
  "key26": "5bKQEssFPbyuanuBbXqYb6DN36AGGkymo9dM9g4KhPbAUd5qnQV4xTUUNQ5mhPNc1yqstAKR5d8K5xiuxU6z2RTF"
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
