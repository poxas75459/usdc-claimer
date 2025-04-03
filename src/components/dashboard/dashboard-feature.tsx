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
    "Mexw1nuqfGPHotrW1PB6G8dzUmqiTJVv3hYLR95skmWMmm51yV6YcxQM6eXNNTpuLgX9owfxXQHdooRtTYzaPL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHoJV4V882eLRhSgZ2Q2hwDZfpuNQhAJxrTHux2nzbnSVKHZC7afFS1FFKjJSxqVSenXd8JtekA1amugboDUdvu",
  "key1": "2EdcGUtUswzY9JChQyBYTVrMCdYdiapQ1aLZNSsgCrYNefBhjQ1Jm6ANj1v8NE4b1hBKkaaVBjMQXibskMrSpTYz",
  "key2": "5D4iBtf4HrishChQhiJNY9194bWxfGNvARHT8HD4k8i34jKdDGjeHoaQG5LYfik2R6nkTcJnxemwkt4Bhx8L9r4C",
  "key3": "5W38cFjPWYeFUcNed9tLseTYjFJtCtgNR5uZPMJMcGCrF1iePAjuSNnqF4dFHq1LqfMfDnAm2hmVoSVXLomhBNvc",
  "key4": "5M92N7RMkHzPGuRBMSTmZz8NcsrxnQtT6Fbv4ir3SJpMn5cPYvEVbCZRBYbCrX2GyZNxDMLXbnVT93gCg2rktA2u",
  "key5": "bymCVN8cd2zy7hBQ9ENYQhD1dChzwAbihvhmLuMik5B8x3wjBWapNijz5z9WQETfvkb2523vD2MQxkupVyLCqu2",
  "key6": "4sW1vjC8MAsTUhCAHM3o6m8aQzsbU7iazcXCp9Aqz7CzjsxdPGGk5QLibnXyyW8aS2mi29yVH5Fsytdf9pkms5vr",
  "key7": "5BhLaFLFPPfv7NSxhP5Am2wtzRDRburEo8UL2fFHZLaszcim2U8Muxw98NkpkBqiEzjy92g19jPyuhQrb6X5wF9Y",
  "key8": "41JxN3m2EcH4hrsSK6F7vs42SqNHN3YYmhKsjiNvHG9dntXq5B83jCKxGVZtZAmPEnZ675TWwXXmS9p9mLgiKrWT",
  "key9": "3dQkvUDoAtoGDAmzhwvDDFUPebUPaDLCDZz4xoptd4JKrsnKf1edaZWwtC4GNCJK94tqwbbNF9e6RrLRvEWVtMo3",
  "key10": "5MwJjmJzhUCPqGqSPhbunPpYELvSp3XpLLKUiANvXDeoxN9gBZ7uEGhaCuf1dYpGtdart67sDQJdaSnFJkAvEMwJ",
  "key11": "2fWVXwoMfncpbsT9Vjv6MkJUmQ8QxsitCWvwgNpL6Z9ThXWTYveWnULFVjrKARbFkCVK7PrgX61FkeccE5MQ9Jbe",
  "key12": "1mFZJqV9PGwShrcuh9XPgbrHMi9tiexUKYcxfBPM4ypQFfyz7vxh99GX8XBBArc3Txt52vTq96QQ2GY2uvMNFJX",
  "key13": "2wKkVmEbEA5B7ivJGGoUuo17WCdKntBEcsZwEMWG9Mo2Lu6rCmtUigM4HpZ1vK5nbhruqZYvgTucE8wBzSu8RRPC",
  "key14": "49aouJoQJN9kyELhQ7btkfx6CUyrqh6xXsVuYSdwpJiuxcuz8smURjxxauj6feBeA5eCVk7jEJj3aeD9647YYezo",
  "key15": "5Z9rt2op49N5WoEb4H1n6JZWfqV9Emwhr6UtKMZaxGcw94bp4caoSNoj2gMhx7UYu5A3RpJCeD7jMiCmEAvdzgZB",
  "key16": "3ZDFBUWoonqPWWuyzPMAEe6jvALqT56hJwqLjv28EK8BemoV52ZAeZ7N8875GE1tvahg5wehXkdhZnNoPHSguB3e",
  "key17": "moWzFGk3NffHEAupQMPr9fBDbxebeGsSZ9G7VZxaZm3vej1HSwFc7Bi5R1U4hV2r4JW9PaKtHAK1BDRqTruZZQ3",
  "key18": "2ZC7FphWVYJojJzYqnM7Afi78jzurWKV7YLv21pqcKXzB3MhVzk4pG133NSQBXTPFh8Sj2YCGKNU3NJU7BD18hGq",
  "key19": "9RuUb9LX1cfsJxJxaUvGLTbnnZpw5rgw4WEK2YBjDyUPuzrmviv47CKQwLfbMmzxn7fyhBBu2jAuocbGpVbytYL",
  "key20": "4wWC8fvyWf8ARKY1ypVV2pfPw24QtqR1pWUu7izktbcpPGNyrBVp8YSqcgxVt4hvnqm24aj3aTcnwCJiSCvwCqxo",
  "key21": "GTnNidAn7q2dGGZeVTRLvCgw5YsHsg1a2pfKRWGAXakBmt5fyhqqNmFTiQzJFT5KRCDEpw2HEJe1qiwT7EQHZrY",
  "key22": "3CLK1YRS7bCxPhHSnA2MFfDn829jdnG3hsf8xXsawBjyjhUDkqoYUSMW22QxiqN7SHavzdEGAow32vTPk5be6Eef",
  "key23": "39e6NWxnHpi9x7rSP3G4mUUz8D84anFehAAoPiyj71XXWWiipeQrN1z9kpoGsL61SHCzDdht8ubtDW9C8iBB9Q2f",
  "key24": "2YiPgu7XvYmfMGhTCQNsDPGoXDmESsScwRg1pnU3g7jHy6iZ9HAu6wZQ2vgwQF52MiCdWWfMehXqHUjFPMUBUN3E",
  "key25": "5tqWFAjkDCrV6GqVuQK2Fj1xeugq7ZKP6FLsnzswkAhfhDCeMztKwgdTeh88yEvDFhdQ4vCPea8nwT8YwtkSoWmF",
  "key26": "1a1Pe7oBqkCQeh4nGT7M446oCsBrUeU6dUfVrKSAkuFiMF3u2a1g5MjUn83xcxRKVnPb1z1uDTkvf6MrtXjicTX",
  "key27": "3vhKuDCHNByoNhMeeJNMXEbrsqrBr26e8r2LAedpuGMgpa4RtqeeD8zcs6NDGtua9TisRKX5fR9SxJyxkjQ8sCcC",
  "key28": "517XNazozxy17gvkaiSp5Lz5DAZxSdxpNk5gegaUJvmAF2WxQMk6VguGub3vMp3me2yhHtBdXFkiP5bEGhNrvsb8",
  "key29": "2TD9nJZDS25S2W9FdHMWT2EKCb3LzZKboigD3kSkoEqcxCzrn7hHuQWdnzx4C1TrFppmVyc9h6tvHTdY3ugNvJwc",
  "key30": "2u6pegaXqZuj4D2EwJ4Rs9VqrqmeUGhRQ9k9KfS9bDRw39KoDKzdXUG8aipiRp12tdcc3AbzWzKEKzCj6p2kN7PD",
  "key31": "2SNsmTTkzofVEhn8x2m4Zot261Deicf5cjCLe4DnuJ9hK9MCSt8sja7t4XoRX96T9GHjUayKLLUMgeHFGKxuxGJ4",
  "key32": "4ZnTC8q39DZ7aQqbFpkc5X84KTXNPQyfdE681qYqjiQTjexAZfJgofuwPAajLtjbaj2aSE9WU44NgyVqxnLBBoAb",
  "key33": "5UwTLVAh1nw9SNVrbJrgvz1hfuutsEUJ3ndSEhmeZFyaeaiGHKsfGpziH8xPT9eMFD6X1oXzbmWwtov8stQW623y",
  "key34": "3wgTVmkP4FL9EVRwLhvAuBgkGStcnuxLwznjnhkQpFrbJPH1o77KfJXdx69fAyxCimZhtqcE9vTUHMoSCGsoZvvH",
  "key35": "4u5QNQX92xdpbo4ynV73QHJosn6Q7PjVdM7arYzy7DXSTWAyCoRr9S6SRPd5d6mQrYsJZa3dQT8F3xwWfT9wnFte",
  "key36": "2ps8LFDdPKtdFEwL7Ngr8khy5aLrVBBiyHv17qwWHizJtaDwUdGnFPhyu9tikdCpqy4phRfq9LRsu4te4sm7XqU4",
  "key37": "29RfHzaZmZJfpPJRsSVmcKZj4dKXuBGw7bScnQGNEx49q9echBCGQmWKU2uQnhwB7UmvghthG5ti8QF26eNtmxKr",
  "key38": "3DwQrBtT5cw3D3kvLWgdKZY5bevH8q1WzwVhaqK2mCcufg59WV9f7aFrgYmDJQzUQcGLF6hJQMkCGrFUK1RKzoEx",
  "key39": "2ynzUGhDPDjwmKQDTbdjnRaFLRntvTLcVdd3QJ56EdXcyKnbkJzh3Ktx4yJUAvLsTyecpcF8nbAh7yfd1U8CECiE",
  "key40": "3JpqGoUUm2fe5fug8x8BWJuV66v4HajYbvSpVpDddwbYjydKa616TFgAJJaaAPPQFUzjFYTQ3u5yxwZmjUWGRG3P",
  "key41": "611xsesaTeCFhVGnY1q2yhgGmAuEXNof9U9uJei344eGgjiUPrmUTTsVXvLtDUqp6xrsaeh8HfsKohb9zaUHffwx",
  "key42": "4JNAaKq4G5W5pzcS8SWbvDVfwQRqR7q1JoCz1BhM7xHJ96daEtM1YCWxkJFd1R9aaiHnoyUmAf723HcHENwShRnT",
  "key43": "3dN2dVEZ8ycBebQ5gN7aS5JoxDPXMSi6mJX7QvfqcdUkMhscpSNkGTeaUE6HMC24MFBdLn9dKiTRScTNf3Ljyy25",
  "key44": "4ssbaRuhFpmNfySpgpkR6TzjLGGjieP9zhRwWiNeQ5qxHpuHrkxCAaX7RKmyZUrs6nT48HBNrfEeo8JPJj3FJhC5",
  "key45": "4sr5enReo54XTozug1n8ckXQQwWL9dWYca6AbYygU5Q4bE3kXdx1YaWRuXEBDoZLvvm4TXBtZo1bUUaJU6Wn4a4J",
  "key46": "2KSdKW8FsHQgwUoePoVL78ayjN1QpnD58BMntSK1hzRSSbNYCQm3Frq6aZgEMAwycVJvDchX6MUjJP5YXyWPWCjm",
  "key47": "2KcdxMNsfsiLRJJCCVJTUF9P9nReQLx7RZBRv7x1SUB6csjDbMgrswewQvyG4bhC8ur5iebBZMzSNoZ456uzBbP8"
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
