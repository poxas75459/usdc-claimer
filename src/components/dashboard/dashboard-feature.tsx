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
    "5De4m3KiEZ5KaB8gk2wRsZBTBEeipSFNcRaDShjqUMGR7FvUuVYzMn1rcmD1aeHnqvGPafG3Gx5htaQrgJ3h4DdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qeugwHriXNWu9GwGwinAtdK6J67zFUhyzigNgUnPzkh5g8kxkEro4TP1gYJiaKp4HRUj6tuXostQw4iNUzd1D3",
  "key1": "27UHGieiipSkHycS24JvRFXtKwN47WVHu5rGkaU6dQFotQBuRszmicksjcYnXghvciHkxskGX9sAaVEjpwZYLPbP",
  "key2": "5ZudDvZH2LHkJmF7R1T11LoBbnpfdDeG3Vxgt3e4KtrfmHpAPR36cwXSEc4NqyDxSzgS3PnJuzVnHo4iKLHVY37S",
  "key3": "ZswocCVdoE6B2s2cSTuDLwTTUrGQmdMQwD6zJXETp2DBLEer389ohGEgEU1SNBCasZ5uhKboM6xuJXbTwtm8qFz",
  "key4": "5GEpLA3f9fdA11VJQwmXE3DCv5XonhMLdSyxuebVbCtV1rsNfC9CqtokYFmf9FCuCxeTtg5NWTrqHqzuodG7eF5G",
  "key5": "4KTLE1Ca3M83aQ4MVAJXXLqrHPoeQSFcKVjgPW4AxHjnzn1yA9YF6kPNiPhvGW8zVzsDDtDfLiE5eED8f2JSZgFY",
  "key6": "3yjPQZTw6C6uAxxSPhdeu4F5BsAaZ9dmCH44jzA1Kh6wAxzAupRBZk2hm68d39AmMtsp2aVEHRLNoz2CX1Bt4ej4",
  "key7": "5w5u62Ma4eC2ctHZJNUX15MvRoEwJzhgq1QX6fDtgzwubDoQeQNQuhLsAMfCszjVtapm29RW15ieDw8E1yGseTS3",
  "key8": "21U2CjDGVhXEYbguVqmfyDmHqavUgsv4HCGh4S6xqHp1AJWwHQ88cAJ2UFQCfjAdXthv7Bj6Qy64E8XM8ZU4g2pq",
  "key9": "4yrZ1yvhppTWvRMzcd4Eap2xEyG2vi5HZ4C5Q81rkJZeVDwfHTfWFvFvSBDTNusJ4qcZYAecixehtmGqxb4f9cwr",
  "key10": "2Xgo4Dvf8KVZNd6wwSqo4qLZErXuf5GCXp9pz85ScmezJsT5g6jKdNS1zi7jq3Dt4gpFjyWqZWmawb6funEX1Eqr",
  "key11": "49StrBhCRh5UmMcskxg62HiaZzJywmdaReswW5mPwyajswvh99hGei7vMFM49LM4gwQFNhktZtjhJVuC1NcJQoq",
  "key12": "2C31UDspekd9fwgE5JVhQWYm6YRVEGHYr3oAF96PyJ9iy9N7ek7TBMxLotzzH9mdrDzf8o6FVUQry6E7FY59G92y",
  "key13": "2mqTiMoXLSfMnDxywNFLTmvhzd7Mt3V8VXhPWAtjuue1JVtEmLZoqm13NGvPgshzE3ooBQ2AZdzuXc72yfSPydZw",
  "key14": "2cpQZr3q8jwkni7wtCkTXvzPe3nSv4EyHiG8i5dTWgoEiRgK6uyVHg1GHQEnN73emURTVCqjiGf7LDLMfnuMohrR",
  "key15": "56eoNndstyscxoAnse5JaJFVdViSu6DR3QhPeqrnGuoAvo6cUjphg6EA6iE2cC8gsQZhM6SEiBta5HXKgPcBt6ML",
  "key16": "5GGKPbgBUKJvaNx6KEan8CaPcchBfjx78ws2bCPzVJ6Wf6Ukonom534qPiQTahWT7cMBUqceGYFYeUW6dud7SBMN",
  "key17": "5jmebShUTx9ANtdBYCRLf9ZGtqkrMPTxW15NivWiMf3o5dHN6ZpZS43UnGyyrS9qAQyHkAyoDxUrknPi2gs2Pked",
  "key18": "5qCUa8Mk5tzuUwhQHZy55yD9Xbvv2arZ4Ar5V4QZndvr4ULwbuaDfswfqbktbsT4ZS4JGVTzM5PG8bikKHWcN7es",
  "key19": "Tdb9J1tMgQE1oQvUTmyxA2cUXXPpw3zbXMVsgJuN1nEzg79i3PUoTKighUGF6UtxRv5zBQV6PkBLknDwRq2fEJp",
  "key20": "2sieQfm5qzDjC63fabPYkRhfGFaD1XFbo7Ycu1MZmj8Uo21MCs1H5VcJWWL4cbtpWAJTz4Z9RFxEGJmaGVfwtrD3",
  "key21": "xgNFp2KSPznxE2hh2fK6RxuhZXeUrwmvUyZ2eJbJywaAKb2jWMUSStFJuxrzLS4q6Bp7snW4mws4wnDGki2RyLh",
  "key22": "3wExnEBch8DstENcK9abHYPfTqBcMJnTA4UAk3WNT8f2cWjw4ARSC8Zr6FKHZgQ2eCj3xJGujuoPYJ9LXinH193",
  "key23": "63ko6suqc3hZfpLbzofHpM5Yc6hHGBkpyUXUGvWKxip488NsgizQkwBaj6QkNgjoH16Eb3U3UJw8mU7RtNJBw76h",
  "key24": "wixrrsjbZTLs4fRsBm67W42287rQHmKS2z8quhwpeL8vzSAYVEUkFh2DzkvMCREwmkCkym1mie22j9FFFnGwtCU",
  "key25": "b6DZPz5PwjA3BMZhg9CdKNcLFLkJd1LbVVuy6XMC6xMhL2kpibD5ugXtSPZFyZKfW86ciMQSJBTWnWz9Ginh1rE",
  "key26": "3NDz27mA5McFptWYfYVF6f8wpDbtjcmW35mf2T21LP2yi5BwLsdJAso3s1JbpE6efQX8W6PxFbvxRdarGady9rxj",
  "key27": "5uDcC7rmzNGGxqJYtuysoVvFZw7N12S43rAVH57LvUEpveZPp6Er22MsStyBCDgS546aKafJ1L5YCxs2eRdjk58M",
  "key28": "4LQpckaxLU8fuVoRBT7NEJ2UsY28Qh3m5NKuYqMRiBvDQTFZGsSvohdsP6Wqm7nB9YigoukZwCk8T21nsCWwTDEh",
  "key29": "4AUsUdVLvgTJT7sLhE2A3MMCUbp6cotWJAZamTqroEGNoGaoyjGEmqgYSzXvzQTDATbbhMRyWbvdhx6vMiiwTYST",
  "key30": "5Ey68AS3qe6NqYTb5QLJjjMocuEgszHLwcRoHd56wydbdzUK7k4P8gZjNMK3CyfHpSdb9gPk9Rm9RWbGFkrbWMs6",
  "key31": "5RzJrspodgNiFVHFHHYVdiLiXYXvaQ7XRLsptmDnGRNqP5Bk2ys9coX9kNWNPRcsBFu4T9c5kGSQy7ryqQn7ndMf",
  "key32": "4cesZnofQCuqBWHJkz2XQKXdEGp1PKC4ELvtV34JiQoDob5LEMQxYV5ci6DhbPe69DuuSwWtRdQn4rukfN75Ws4k",
  "key33": "3UrLQgcK4QWNtPtn7LLJ2uWL222i6sENz9KMX3cmhKccCMcNUCtXWETqVkaV6PHcrF5gG32Y18Far3AK8FbzkG6E",
  "key34": "5nYophXeEAm3bCnqDQePqWbLVTEZKkW9h5hSWyEKsHucpsn81o6d4T8PwLxNF3cFds1NfqA6fkh8Ny93NLuK9Wfr",
  "key35": "3k9DN7aJka5TDzHSNRYBSA36jaNdH3YCKeKe4JPoiaEvB7os4UxjMsyV2YvUXZAfgt1hm3VgUTLgEcAk3ABBikAo"
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
