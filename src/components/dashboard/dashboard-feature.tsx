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
    "2655YqLrqkgD12HFJrdC2PnNMxVLe5S2YTCAo6KLrrZeNJaarVR1iTpyWrq2ecwe4Yt1BHD5Y66PaKrx1xJ8bMYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUiPWDrvsWUB5yQYumBLj6cdcFUSPMaQovsZqyRB1nUmbDYX6RCrg9mH5ihqVS1wo4iHPiStdgWbZQYVo5VER7B",
  "key1": "5qx5AeUgjtXk7oWL8Mf9Ycw1Dp1p8qSrFLmrWMBtYiduC8KCYkS7CN5CSTMDaMrmmFmtJrscYDvkb3vGp6p4nS3z",
  "key2": "52jfTM31EshXtyGACgBwwT1XKzNKLaW4zhzQ3NT6BzSd6DceWL4igpaiZknXaqtCA58mKFAoketqY8bvNJ9ija32",
  "key3": "2WLvWn5JgAuD5uVkkMdJ85GdKU9Me6ESsUZV9WSiBk6NQvTrF1k33EV4kGr1YbNEa1cyX4LTzqMW7RGPamP8qyAR",
  "key4": "2t8jdqvb7CDuFu2bTwwW5GwpVk5iH5cUPrwewR1F5BiFb49REc8CL7QxApKFvSUZDrvcuLrsTiZcoS5Tn19AcknB",
  "key5": "KLzydscPZUZoUVyKhoBckG6GGLVBpwBf2xjnS9D8GQgxC72YwUJpAhyrTehj4BguCdMrvCvz7BwepjNknzLvF2N",
  "key6": "2z76zxr4vubyr1VRWiTx758pexkg8WZzYhq59tKspefbNGpeAHpENKF3oKcQzkdHEhVphXCd7wsJoiNkjgVkHCLA",
  "key7": "zaBZtyyGbYxsw1f3ycjJCCxDsw5HcSFZVxxoxCDhiYSQCbULHxRBahpw6hwwCwCdkgm2pVzvmKNt5ZDYycmiYP9",
  "key8": "4SRMPx7EbURYTxiLWpaM6Whiu5TRkNJE25NVoofBnr8893cwvNbhvW35ReJVSsE2fJnbmKhT5A6SGYR98KDBtj55",
  "key9": "5Uv47KSS26UXFzzGfdEVs1RdAxdD83tAFf7Bmex9HfwLzfYYRjRqHouZFFjbBfUfMVuMMeRF4tz71D8mdzhHLtWR",
  "key10": "5eNrf8udvS8e196dNitMdnW22UNcKPtJGtjeFSb5CURATNciSWnsvMN78ZbUPCMDPc1DQhFt1YBYKUVSueFRD96w",
  "key11": "41USMeo8Q45We3Dqa93opGNm755T2PFhKYWC4fqUW25ELPUn7ofg5dPWwz5usa1bNhWj51CHJM5f269CqK98orni",
  "key12": "5Ut6kGrwXpTeajaxamGyUbVqjojt2DGsNv5rx9gbq7bTgCZErXLKkryykgCLVmxRUvoGtXwqryprL681zDDrU6ry",
  "key13": "oLCXYimNboKRkaMphRYxmiyEys9GRwCy5Gj7ZZxAYEHXxTPe3BGr1RM6rwpHvCs8gUUj29AV7JTWVsqAMmkiXdV",
  "key14": "4STZtJWVDHarsWGgefX4CPWHHMCNXnrMHDbnfYaAeeL9ge8oJw1cjUaxKT9M9ge2iDLLNwSjRchc5gXUJDN8oFim",
  "key15": "61Es2AF5wNrdU3kV4B5PvS1LJAvFYTJK2fU6xJB31mSXsxEmsLvtbnAD73LcN1J5L3sfEH88oZKKPzpnmVsxTEMY",
  "key16": "4xMPtnNSqhCVuwugmyAsmA1CkEc1RD3xv8q6MQeAJKHoWfPH32juDhNvxUbCiCaAKhnyTgLaT1EiBsfZ8eLUH43k",
  "key17": "31GtiyxvBC8YL2Fh54sadrXWuJof9Bpr6nZi6a2FgeY81ioxg3nAosHdUGvc7jXt4aHwsJVZcmuKKHvx64kJPiH8",
  "key18": "2DuSVK9tM7LB4YwBMtxJ7SqbtZcZ5wD6kbxmjqezBKyeWoyKtx11v1sKy43qy6zk4erUU5xurAyKZr1KLyCTbdhC",
  "key19": "4PEkPjKMrJMcVxWSSqB3ppFrckZrZDtTNFsZcTCnrbBTLhETQa4GSqemZgszAUNdEDyLJsH7r4jY87BKKqfosJ4y",
  "key20": "3GTrFHJmDBsn9EvRLNWMeUQwHk5FppHjdGskB5iAQQTNSogvb5ttZXrxPSkRiDGqnUpNZzdfZNTh116BrNSP3ji2",
  "key21": "634VwyPeycPUVZWwKEYrZxwvHWbjitUQHFj4ssbJGz1MKHckEprgrLs5gEYgqf1v4T1eSffMqyGX8XntPvYwc5UT",
  "key22": "25cnPhTBjQfte4cGY1MxDYzLwg1StQ1YM3gu3s87GfWiytb3FLmsnTXqrfb7y9q8qVRwN5uwTDAhMJtNKGv6h4y8",
  "key23": "bdbpSzx9EQ4zvUkMREGfcwBkPM3B5bLmVWgeaPM3Q8Gi9FLAdEtfzDU3xcePAbihQvSnNabJ9Z6Ut5yYuf6VJWy",
  "key24": "3yhLWqtXpY7fqnZMwpXUy8Xpkk73pKb8dQw4UyPekzMhQTzAc7NKRUP7AtDk6abMvUYCNeokzwDV9N1ErSZS89Jp",
  "key25": "4hND3vhr5jEzwAsR3eBnAxSMFu22HvsKQpQ6csQBptG1bVgV5wJiqDCMZAXysN2zeLy8iFmYjiYWJa9NL5SFfcCD",
  "key26": "gDEQSCcDGTKVVCEXKYqWQNDC3AoQSp4ZDbhUQsfM6kZBwE3ppcro52GnipNtrxkwiHZQZWbk7xP7KZW3VdPH8x2",
  "key27": "3CbD2zzvvRCxmaXCsVEBc1KANZpQbizVfubwJWzYjjHQAkH2m9ZLs6jjt76j7RBCS8UqX81Sdu4VF2E7tzSdtMD6",
  "key28": "4mkXgL2CLbQLdMuGswsL5AABWgsvePDSvQniDTC4tccdtfDWygZ7W2fX82Mnmiftvs2Bps8cFpWgGx5t1gW1NJCn",
  "key29": "3WAMbY5LMXsEK8bLGdLuTeSAmwaEkyjFQ48kWCK5MBngz6Bp45aK58KSSLf11WxqxgMhzc8a1YMdUKt3eMsrFdiP",
  "key30": "2cmx3dbJFSx4tzyv3NkEbfh1dioQzKzDQTAs3W9ed5wVvBi6vAv1rzMadFVBjxAPbWcW1azGTTPt2xGNfyxgXxaU",
  "key31": "5NEpMdQhfAdUKixfb4BE6NAUWD5haZsVBR9YjFnMaXsVSm9QytCXiU6xqqk6sDxJvyjdHHYh3psbY4SDd6U2fav1",
  "key32": "5hSh59exAuP3pTadQA8i6hULcVSDbFkzzDPpfi5vre1py4x1VWcERq7N7ToMx6zTu6WyFGxzzLm2LMUaufmJp3MA",
  "key33": "2xBaH3tPKRNegWW8fQqpfhoYo89ZUdXACBFqRWdRJ4BmtTKmUMTxUikVPB8KUwUtVY1MTqkqAVrMpTHTWY3pq66y",
  "key34": "4DmvcWKJx2TjuBLVd57BRSUwCKwSUfF7xqShHwPdcE7CAk4KDG4EEN1aWTRmoZrtms7NNW9gUTNn7i43a1mSpB7m",
  "key35": "4H77xwA5dC1nAf66SAbArejByYJ77nYhiL6rwzV3FHLzgv3asdCw2WFBetYGJ84YD71YkMUQynpt9C9P1Wj7zMa",
  "key36": "4GZQf96Sik5T9mYnuy9x59awkJDwxBNDBUGpWu3KMeMCEtuNRyq6uyvSjS74SoG4nCjredkJDf7d7LfW6W6WSAVR"
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
