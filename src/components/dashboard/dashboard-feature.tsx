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
    "5AkivkKyfqkSAajVdNC67wnV4tUSXKfwqkKeBBEiAP1GKpDtmbxMT4o49Btqqvn7FGRGNzMdM1vY8SNpudK236qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R9Gn7VXLa7K8xDmcZLdwsQS1gpm5HRzq1CV1jbG51zAQwBkc1g91fgZiwiLt77BzEuvSNzNNPFxTXCp5Z4fbJAd",
  "key1": "3ZSQy2D2FWPn77hGAXf9Ayd5CFpdvBG8EGQesQQhpKXpbkAkdFWemY53uBysmBXA4bt7Mf3mXs4vgcbDJhWZc2az",
  "key2": "3q3xPRqj8DRfnwKJjZyMFJ4VVGwwonXdHK2NXZqDwrnMFNqYXTuqzRaggDekGLkNPngBkWJW5tQ6pV8aAAvudg76",
  "key3": "txhuH1TcstjtAEjf79cq189vRZtcSF4MMLH1mxrQy7KXKiCGceqJnoj9CaEiit84Sg5bgrURYAHngu7Aq6mX9L5",
  "key4": "TX8eE1NNLgLxheAm31wtk1657Xo8KXesmSkuMj44RZ23ycPwteX1Ac9fLxZ9AaMcJdHqAVeEENhjidgDZwcjcEo",
  "key5": "5gUqBXwe5VE9vCnwRzZHeRfaPaiRmpeaB4n92vJN217WEjo28SWqbFmxS5JTWnNeMaamwAyzPBawWEDXsgoCTZsH",
  "key6": "3kAL9wkpWLRSnNct8pkLvwJyvXDPWnuqGowxiPC2eqWTwJKC9TfE4byswcDvme9fS4E1UgBiYdjArLpqmzdeV3QH",
  "key7": "45HTvnRRo33GqfDqn9B69nyWYjwTYXTcj3ETPo2Wk9L5xG6GQ6ZfijWzxVVmxZMgXNqjv4DCuXscpKKKSRU5mptY",
  "key8": "QhPFtmLzwZHZCT51BeWmikjVpm9CpYVbJfyc63mjzVgBU4beKAS4ck3eh3aV3Q88dmt2joMqEcC3w43cEfRBi71",
  "key9": "MZFo4fGSfrkjrZzaDfufbTiqd5YBSXRi7W6RvsDE6RiE28ZLybDitRnGmSrk1nLLFSqo4E5zm7xKVMapATVK9K7",
  "key10": "mcP4i6uPxYt5Ee5AsrkctzPrjiK5wt5SfGC8LKKMBKhHELuBi2RcPYANLYP1qgnocDE5HhsWEMnbcCFBZbfcLtw",
  "key11": "37w7zDK8G4TUWBZU9raV4RFdN4gCnuUsWwmvQyYPRso4wDNdaVKoiSFfTBPKT2W4emyUaNjkgNN9RpuY1sJEQUVk",
  "key12": "2Y37j9BhF51XEnNqHXV8PZYX2QscAj38b5yLhRPxTbdxaBEPrTZjbMwKcQ3dH33PUgyw2XAwmNAuFJUvnRXXU2co",
  "key13": "2WUekRggSX282Aj2kRZa2ziyQGra8KKYez6tPwuNZzGt9CmiFJeambTTvsBQikvmrndtN9LF47GJY4Ha2QwNKHSa",
  "key14": "2Kzu9TriJcojHbwQcJ1REKtNu2Gy4LJWFuTdPpovL8FvuK2pX4kmsk8d6aF9S5JH4fvfoGUk8au9GvQZw4zWc4tB",
  "key15": "471N8tjPKfxKxKexLiMdNEZfQvmTY3GsHeUdcfqauxDfg1yjjCNLeEwGMr3PnNFPXBzfwku2mgxTZxMXN2thshxZ",
  "key16": "Gvx2TVjVwGaCxDHryL41c3PhtdapSYsY5vJnimnXC8VUfH6M7j2qtsyZLoHZM9FRnNkbAr7wWqW5tvcGKhpxaFX",
  "key17": "eEvghQ5mpsSu2fTGhAvzcjAJWzTSbZDbRZwPN3RYef4UAHHHWpfHkQevUUPjLc55owhtAjR7338ZuWVR6RyRKLc",
  "key18": "4k2UShxZVt4gyVGH1jxhfUWuTrhL5ALCRLCD22gT83pps3X35oQ7qCcFkRoFhDLAwKnqn7DK1fq85uM6Wx941od1",
  "key19": "4eK57rUvg1airFayU9h2XqTEw4UQse7vmqKFjKLu4P77FCX3qSB88wGQd1zYPZeEyM5VBLBAheM68Cs3HfT6uzzn",
  "key20": "54oUZyuPnrsPD7suPs8DAmdZvqxLWPojZi5sS8Ni1Cy2qHQDs3gqhndK4a4JmaQSCWo1nHE6ejqE52vv5UTkeruy",
  "key21": "2NPf1d7xX3QgCCrcHKmqXMr2Ksbi25aYUctmaJTphiUSHbSXxrxGGz5cC8T18K7go5MXzEsCuWPksJuiYJVGtRmq",
  "key22": "3JdUf9SeaKa1tiRP7iQunPjKVt9KyRrdgcQLtBMktQwDn3cVLLat1tJ7uuvWvD7ifG2NQjpkUt8dxuzmC3qdctBK",
  "key23": "2eqAFmsJd2RPrEvHUbC8Crjk28LJePDFRQLGSgjGkqhFkiUSZTuvvtBJfUmpeM3b3eKvUzaiX6kZ3odgcbDHe3B9",
  "key24": "4C7Hvu5sqijU3JeLthBqA5KR8zi4fcNLEFkf7twF5tNVwToDifdUUvsQxjCcFd9B8QD88tbuUumhgNo31pVA9m8u",
  "key25": "fXK33fXMxS8oVmB1CT9z7cbs9JCWAV929gvFM5GNbhEjSw5q2ddoh5Zi6Qtq9KXnwVjxTiQGfyvXLbDiWLcYms1",
  "key26": "3gcTpYHhcNP3C4oRU96mMPub6TrXb2Zz9EEYrBqFfM79BnWpjFzhWqcySmmQr9wCZri8vtyVFb5SGsgrPKR6iUNm"
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
