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
    "52CNNT1cTZHa8pDQ1RmCqQ1HnGhretajRthGYPr8H56nM6MSLG6A53AjbdghyWeU4YbmENjcwr3h7YTo4oYb5evo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668VrYoygHFX9sY1NCJ7V8squWsUfdxMDzQxdB9uyYzXqoHbcAPQUsYiaPLkR1NigipCXJ6Cv3tZVcapUYhWi2Es",
  "key1": "5gPvbyDMHVtea6o9hG7VT3ouD2jcKfejKcXV7u79QkYXHYu6muqM4pu1nHNZRP8J5gC4iGqGLGuzQfqPgwnNtSW3",
  "key2": "4vZSLF2wMn1XX7G19dm9WEdx3r6vBwQAnVqvcnCTumy3pqiZP82pyQG3XEVveswWPGmPiXNuTTSydq1MYhiq1u5D",
  "key3": "55eUYtNdFVveqsUKBcy6kPXQRdZPKbeEpXBmDNgB8QvGa9nDchxoYLLdzq8qPpuguykAqreg7pz5f3FWDoRRd8uq",
  "key4": "5fCh3Msnk1S7a2yZzDxhpcfpjLc8NmSUST86jmGRpGwR4VPUpjLwPkAZhmeFJUnRctXi6eoN9AA5mrEKF6Aq1WuG",
  "key5": "3ZxPjFk1qh2VCzrqHaDFzpzj47NEDFvvj3QyEMHrX5Dz334ioNMdrdJTmqFtS2Hjvf5qm3ETUThXP4q9R19RcJCr",
  "key6": "3E83awStC1s1Y3haDLhPSrfjycRHCxenmoUcPyo7LavfPDY3QHC3zH7aGB4whTBDB1S8Gcde4migBaUE6nA3nGFk",
  "key7": "5V7QboXcyVXsk97JfuGrj8GFcd7JjMCHbmhxo653gEaWcJz33ufKn9YXn2NfdCJeZXkaaqSsQ5afARcjBvjFdbaY",
  "key8": "wtpg1Zgk9D77Pzq1eJttbAUX2kKbdmNacX8HME7ouVwXbK9zoGK6xzHiA5qMTyZNSV5jVRPy29q9Uh52GpNi381",
  "key9": "5LyfqgWhNoVYZ9PJJE9V7nKUUyMUApDSserYQdYpsyK6NikeG2ZM9JDh3AbFVDWM9iJAb9T3kWPbk8JeLFKg8Xzk",
  "key10": "5qWWZsTxBjdA1MvafPV4F1NXD1yyduxd3Nf8pRX7vFRVWoWhE8CidK13XRK8Kv4xE1795z2qieW6ALqkJ3bmRjRB",
  "key11": "2hKNTLPBD6kqEvMhxgYD6FfqwTFbZHnoLU5Q4UCxC59wSHuq7t4nKWVGwGNYEAortyNE2xUSJPw9t7KiFikTkFhD",
  "key12": "YKGapiJEZvjdpLKegfFX3xBwWHPr44qg3itepwDeu64YHPL1TT98LNMJ5BwBLCzt2akJsJ6r6b29i2WnDSe9yNW",
  "key13": "4XCUKUhK7KUtgcHmzpYrbRDBRwEjwCGU4yB3Es5aGpEREWhDjk2kMGSj3T331yFn2eKnxM4nPQj1DNqXJvDA3n7u",
  "key14": "YGXNzVXiVdZvyXYgM8UgG53B9jfs7Ua6s47XP16BFfmjkeX2gZHRpj9iNahqEc1AT6fiZT66XeFYvHB8zzXiLFY",
  "key15": "21pRpUuGRGyLq597R5C1ZfBRpcrjzURvBgJQcwhHWBQBTqFRZnYxb6Eak2R92E5JeoCKbQ3qTYwg9ZVJ2z6exUap",
  "key16": "fEgdaqLb4CAjtphwbvLzCRcF6R2UkyEzC2qShQtrrrqnbJaN9xKpHBi8FPRSoMMNpsSEuWr8zgQBEc4pRg61THW",
  "key17": "2tEFiJ7DaNBhapnE8cVzmkyL7gb8VcfiZd1YcJLjFAcmVfpQ4KiqrT2Fy2tPBVnxM6wJqw3oz4RUtgYxGnAJogzj",
  "key18": "2wmmWnxbgzB6TfRhogezQWcFAa33jcw5tK9VdsZ6eVcE6GPcRgACpdGbnch6nwUzQVZQj72aVA2kapipMpwauRPp",
  "key19": "aQiNrXTM3GcSfPA7XZSMi5JiVBqtHZYDwjLxU43PzVwsz1DrqVdtpyRtLhGk2m4hmcY6h8PcBNpviJjuPY2Kuzv",
  "key20": "8LWoj9QDJiNZURZtvKHj3iXTHb2c1P7cCqLfT2igZrcGdZxbLWMRHvPy58fUhukz8q8142k1fPc2PPGYPar3ZJR",
  "key21": "4k972VZNFd4aZdFdDRf7y4FP8BV5dx6C5e94Nnj3vPhkG1HBtEZiMYiSfRN68hjy2MQW6oPmv5A6Dc2WVnnsX1TA",
  "key22": "4KxbiLDF2YkVTSNW8mbYxKmEk9QX65trzGmKTAF626M5yBQ4CXBdRE4iXpJkJGkois4oQdpCBTgDRtmdf3kdaQ85",
  "key23": "xjdVpUwobRGkEQBouURjY4LAEGnkPWExepFwoHKAGpMPmD3zaU5vRc3Ss5HQQmTwVK3wNKViGT5GDarSz49bXH8",
  "key24": "5KDk1RFfYs1fg4Ex8ms7z8P5C91HUS9MTV6NMcpCVFKEoghsNxXLaoGs7z91ieV84Yu27NgvtGLhcz6pmMpDwbGU",
  "key25": "55vwZ2aVo4UwLyjDt9Q5JmzVp8tguFiPvBk9WFMPX4tnaKSmhQsbkitxeYK7qycraDPTQHjPw2jAiix4gMGbNo7j",
  "key26": "35vi15vLvzTpbqvQdoVzpZMB4oFQjtgWPa3tEbtizr1CcMDBtgCiNEtLs3jf4s787YekL56u4RZUcGVx1mhwG8mD"
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
