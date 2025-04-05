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
    "5vmakyBGQLxBHgBFB9K58uhDz9GVek7rMiTkVLw7BHRYJzarj6rJHoUF78RN5ZCwjDgBH1qVZUGp1yEQn14KV256"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cWrmkmwL8eAKR8jHsBenZq44j2UFUAUctqQT89jxXMUo77vnKUnEQG6Ai97dWsEuZVoKZ5bVk1K8inaHSWjqHT9",
  "key1": "45HYPUipLGjvimCtDTqMTww5xe3Z1nfijho47cA96c3HiAdqS7sGw21ao7isup7uhB9YPiayYyW9JNFyCzN27h2z",
  "key2": "3vu25kEKHfVNG5KsAam3UebVrkUgDwzj9ViGb9a5iEuqvXcxuon7p26ecEbzaLXCN85rvwGQWcKFQSEtCTLfKuhX",
  "key3": "CXuca8rCV41xvMHa84mTH12uKQCEL87yq1Hb75fy7KphVPk2TMEgpur5PAdtiGW5ZDV4TiTkjzGj6ZRsc9EX6g2",
  "key4": "5UbtYgm7AwYAsYzV6Fgr4JWdLXA9dsHcpPhbaBC4WRnbVsREL2tcB9uZQhK5biA7g1FLLMb9fETa1njAiUe8uTB6",
  "key5": "51RYSNZUwmcdthiSNtkvHGAs4t5WyuKLA64ykzUGCS1MNbzJduenunvCmNa5ibvNozUkvHogLhgoa8qG1P5j3qZ8",
  "key6": "33D3WArLS4HQ7MGZsC93Jb2yKMvvd7FmcSyywdp2R4BHhh2HRQou2hRPmuzCWtuHKv79hthMpwN7sg9QuBmUnozC",
  "key7": "3updYrUsiAiAH9dwr3js8VJVJjHHcWm5i6hs45ZXfzPcUgNjq7ezx4SPEBRHUjJQTXtUgG5j5MW1g8NQ1ANDNh4n",
  "key8": "4idA4nYN6ZCLe4zJLNSJgTzokqu18Qyu6FR9XHepHf7gn9D3rtENTJ2KkxBDZgQnvdynWCrWNtLKU8dBom2T2xmj",
  "key9": "2vzU2nH8gJ4kXJB7oNqikYene75BVyay8WNCLT61kKzfdrEXbVAZwVbHGxQY3NvbGZQCow344xb1RmTDDX9YawaL",
  "key10": "556PzEAAE4GLFNAtH5F6RxdCUDcEyKfGd2qd8tyCGdg6BzKzfHv81wSv2QS2sQkWeEDmrfwiRwJ8ZBsiSf53mbgg",
  "key11": "gEct8XQxu3suAbFoCU8SBiy2tNm2YRctcDUDHfhXpeqiMbB8mvrrww8sGGCcnm5iF3QRkE2XaRt9JrgWJpR2xLT",
  "key12": "vNgAMNdvd6yea6iJuNZ4782SjAX6XPTNtVriJ71gnmfFjAeuSesmBP12UCtCUemx2KEuTGKtRnFPnKJTALahkRh",
  "key13": "4LtxYTdUMftWo78iVsXV4E2MXrT9YyF5JCjjfv6bK9oM98rcNaDCxFgaG53qNyzUBn8a5xfZYR2iADErNn69R5Db",
  "key14": "2d2KMgFbUgreuHefJg6ruEy8EdfubQzg4RxyRtn1x3mVagH6u77UpV4VZuqCnwRbPzEVzgh1y5WzEH89f2VUUgtP",
  "key15": "3STcmEY3EjN1QbGZUbNDPznhBVsknDwpHTrw3mrRB5adJ8oh1QT6rmVJXoy5b6NaGEwRwGtsbkpB64TUJFXYxKWj",
  "key16": "4oHc6BhuKAx8ox5KFVv9LsDAS2ukqoy9LZwovcGQDFcKEuRNFTnRgYeTJ9VuxvGKkRTMVoXZfU6hiGsXuTTw7sGJ",
  "key17": "uCTwQUm1xdAY9P4zYmy1GBsx5Der5bWT33sMdgMkYAEi9s8MUiqfG4r22Gb2CC3n5Qm7Esq6uGqN2MCZpV3pK8q",
  "key18": "4sBH6rcmVy7QAJPNzPVCDfGWQUWXVTa8MftubS5fgjuBuTvrEgMNBW7vxtiL49AYeR9s3ZV8K7zvFHgDzqm2Sg8G",
  "key19": "4H8hNp9ikG8ZjWP2LbQjX62iV5v9LNdki8jJ3oqnYbeUG3TkwC8w7edqtwuyYKEZhZEhaEwiVsVtXw7Ex2ogd9gX",
  "key20": "3NmeG83QHQy49mPsuc6s846kAcrjVV4Fk9ruULU122bAVFmwWjTgtoMKc3NAoRVrCurwu1S9wb88ddiNDo5Lkrsk",
  "key21": "4XW29mkTbPNbwRXJLtP53N8ShDkHjRGegLw2LFKvda6FVJ9TQy6kzUqveavxvUW4pDKXAQjNytkMxnxLEQcdTukp",
  "key22": "4FX2bsaTjSGPPpf4KFMP1W8xpycLKWpeLgoLhGCECE2qzwTj67wMw4GdN8238qWok58vvmpjpbESACav38bUammS",
  "key23": "3NYmTjMzMamD8SYNQzQUXMDGdqMtPQuDScde3zDZu1wENf1hdftUNv91BdbwD4brARMr5WP8Egfc5uZXzpq7b27E",
  "key24": "2K2CkDQRDfyGqHUfZy4vecbeKXu4GecF5kV2YBnD6DeuZVxVFPJyUja64cqruwNkNJL57K1gxAShNy2gnkNvWXfQ"
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
