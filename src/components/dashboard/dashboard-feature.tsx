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
    "3JFwZM6Yimhj6b6J3JUwCyE9b8T3NjGSsPewBJ8A3yYMmDPcBDNx5mat3n4coRVcWsQUEc7YgnxG5Gda9RMq4VWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNJ6ak5vqueA98dXNywqcNxJHe5z9L1DBUTPT54EZMxqq9VeeceimP27N2Q7hYponVwuvoKT6M3FJBsLE6pLsVd",
  "key1": "5XrzSwPPJKhJtRVH2oivJrRPM4uprfnMPN37ajDpmLZSC28pzyjXKJjJ2TiwuksRgW8JkzEz8dm7isgkCArLwrPz",
  "key2": "4Kpskn3cM5k9JcfiowFaoLTqctLgFX1MyZzjUiZu6YWcYDTYDQFYk9pME2QCcpYKV3ukeDNCgiQRGB5JRVuxE1US",
  "key3": "5sG5wB69aoBtcC8Vj2gvvrLH7usHnu6kkJdvVgS2qMcLCm7yRtaHCFPujVe5TN4Gh9fDQSPKoNz2nTieBTEYqd2t",
  "key4": "454dQ8MT3d72AZcinzqhUeWoh7QjsY3pfxHTpPk64j1cWYiWAPRSvQs3dkYmySsGYwF8fLcAysSC6N6S2ECjQ134",
  "key5": "41RYJhWoFMjcZvV5Y3pqspijopDUTdyTuvnhNX7HBu3uNomy2XNxbd8uA2oTA1nQmnEmLXDW4T3G6tZ22Ruy2pTB",
  "key6": "Uck6W5TbyxdtQnB28dDapsf7DMwbBnG8wH3kZ3raDAGwDVfPi9aerjKwinw5hfkA4kq7S7hovfSfHGqJS7LMgdC",
  "key7": "5yv5gHyU4E5BzaFuiUET2seTjhJ1QzBdK5BhZjkgXvKjintNAkThmXwA3GoHqPm2rNpkpqNrcSmXbwgPFmgXrkAy",
  "key8": "4Uajhq9fbtEmWU5UMVyuZkSFAABmCeGbrS9RTHnPuHSUAjYJX8eeoJpNrenafxtx7LuHerpz9nrpomShhRCFCwpo",
  "key9": "Pf52yzcdrYk9B2Sdheq6yuzEJkCfzMKFg58B6Er2sapygPpLpJ8bmNF1ReD1tj3jj8ESA5nzD9aw7bRBZxRcqfi",
  "key10": "65e7dGhNrgcydxQD7bBAwLLTWszcj9dZj61F6PRf3C8VUwQ93KE5XNTVPNNPLt8bMnU2w4ogpU4Fag6bRDNaYahM",
  "key11": "2hsaMCESJpyki3i9UbP4W7GBrgqYyMYoeYtx12vcuCq1wd5uyRxkTgBtaNfZ6K24io3Bfzjqq4VvNehJCQWPjwVa",
  "key12": "4N62cGhMtMDG56F9sN8vgYJsuyJy6PppbAMmqe8swShen3RT5DmsPJCUw8JMx2qgQoE13duEEN2xHsGM8vHfJdCZ",
  "key13": "4Qcxiptg71m6YkAi6kqGXD4Htjgvm5tztevvGvGjQS5v5SvUecrmLkJJUbTyDygDB37ijugQQXSooPKx3ESxXhjz",
  "key14": "39nvtKmbw7MBX4Nz7d3EAb9ovLrjo36TFgyiAprek7bmY5RKy2mW8jsJftADKoSftn47S71DrPnErP5TSGSUUVCW",
  "key15": "3RoJsHH2Nvvd9PfnUhMH8ZRSCubei5EAcReK1BWy5cNRZa1VgsyqKroRAY1tv8Hdv7ujnBfgts7Tb6RKt5dLEJZS",
  "key16": "2FAzQ2Xe9AXPo79f558F6MtVKktnq2oEb7ZGEGNKiRs85oo5RF8aVivEhdtezThTBBvNjzzsiTEqdCQ75C6c85G1",
  "key17": "4kCXmmoXiiBiWrB9Dkhz6aigtydHzhRrRXCizFBa74pyhqWvbvteKUVzSUDz12Uxrymum99G7fq5cNBPpXL6CFyr",
  "key18": "2i5RK35mBquqCw7NYYu2shxz5muMQCfhJH9PkTtZ9mM9exE5VQNoTGnqUahejw3DmF7VtZ2MeyTYCe45rwjHHvri",
  "key19": "eCEMv6gwzJ3y3ryeFX2ywh6vs5BdHTCM1gZNES2LsAw8Jmvie93mWWEUegoUaBEbF5GGDcQ5bTEnThvXTvipdm8",
  "key20": "2x2UhDxmuwV3tyowotsN628HpTJKzu9Fdp5SuNmgz6k2diPHcZVTVq5u3y5jGTP92JUK6vzTJPMt6byTsxprBvzU",
  "key21": "56ZrLa9xipTH6V2kApGhmwDXuB1vAwjj8XKjz8R4EPPs5a8LZbuSkuXCX3GFVHc3QFzTqpZyLhKHk1xmxPWyQreo",
  "key22": "e1xEgmEsFtVSRBVcSwg6Ba6ZHGoYwLVAUPuB2SNrqKefiYGWJ49xVZoCRi93WPmBsSNaJgQ1aBigXHkvJj5vHQq",
  "key23": "5rSnzSdUBzbS3N7HzpMYBcK48WiLQnGFBfPAp8TJjwh8qpdJEY55RArbLy3h5WRGKfqcwDjLzmK8s69PjTZqoZbe",
  "key24": "5rpwRnZYf7gZQj2Rdu9e1S3AWHCZww79zWi5VGto4QH3EgyG59AoFzh12tLPvhdvu2GMcZMahwho1D6uHuQDNFRn",
  "key25": "53pMxwKXvAggk8NUVQJwHNgxgEXkMdY4sXH6cWiF3vJkNQn2pYcMpYNds8qC7LGEsYQfjFRe71qRVH7fyKZe3wwP",
  "key26": "5mZwxJ8muHqiDFbc8NgVnskip8dBP2Wun1QBZpgJ1owTetbiaKhnWRXZbdwccJtX3GZnHFFNBA6DrDDw87werJrp",
  "key27": "6XhRTKBpeaUAWdcsq13b1njc7piV5diHJjyTLV6FNzRR4WU675NsppgnMjENMoEiDQpXRerHhKro7SSqzwDvDwD",
  "key28": "5jdFcinXhPTaEjwhmiMfEyV2uqAtR8Q2ff5FdaxZu2g3K9MwikuR1PZ1FfHwBqUCBiLE7GdhNDPMN73AiWao8MwA",
  "key29": "5K64wxG9FyHAkqouQUgcEyPuD8K6tHhEgQhRbZvjnL4aNNtER7u3muhuQBmMMNnwcKamDDadkqiiU15HUwqHT3LS",
  "key30": "2VxeoVbEj5KguicGya6CSbgzWk595a67ZnG3ys5k9wy3mc4DQwxpg2jGAtvzsw5iHWHYNDa3aQakgzBq5VsaMNzf",
  "key31": "2up8uYyLWC6TjjX8FPnJDTfsgJHa8YJCPmyw7uhb7hn66rYWJYc21yCvrZno3P3yddJ9B6Rx9rvTojdCXgtV7xes",
  "key32": "5zH4yZjGmM7uPGfajbNJRWD7mhczjWrRcT5AubYnfidtaW7bBYQzbTgMTBHN4tmeRxfHSRmZesoXYxBwLoKkqCJP",
  "key33": "52xroNDEwEiN2LmW1kZMLJGXZgUs7pQk2azr1foiHbWak5d6T1eme1A69iZP9ZMDorpvs6SWhGpGH5HJJ2mwFQyD",
  "key34": "4enBuieWzmBTD8Uaw637bfKwnYwmBpZpt6EXAtLVZbMjpRhEDnMbCyV8eEWDeiVkufM6rW736CLaDjKeuLjAujXk",
  "key35": "2PV2V7kVDnmMSJruyMmjYDTc6Ka8DhzqP9fVdkZrSLpbabAjqqdneDmAiMrzhSjuNFMS1a1MdNAzpkz5EY3WgDzE",
  "key36": "29QXWjpV4HWNyUfjpfcTRBa957SDrGVKmsEWx7MYmjtzy5msXjsvdr2NpBxTr4W4MwbE49T7EfboL5AGGrJpLrKV",
  "key37": "3R7vgKefhze3TRvnscDvu1As2wtW1zWtXAMfdT7cf733njoFL3Hku24HQZcJeYRsEf5rqXEDzenxRLrmDFRCSUd2",
  "key38": "3bA6ztobgJFFLUtQ7FbwFw8zk25DhszQbn3cxghmC1QcofXr5Dx2YQ7gvcgovqnqUMGj294y6KhW4PpsyhhYYLsF",
  "key39": "4Ni45mCvVjZ7VdC9NEwhGkKCqMeLXGzjKUfRAP5yQYZa3oUvwnRaEwChhJBDTGgWg3TYkSVbkKv9SVHwcfqNEu5p"
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
