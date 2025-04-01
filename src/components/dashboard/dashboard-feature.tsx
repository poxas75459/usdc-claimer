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
    "2amr9cY3HcYrzppJ7vMHeQbQuEbuVD3qZqoEw9ojBuRJdrRrtSnVexc9BDr2phMLurwrzbAFYhizaDMihJoc9cDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSmcaVNufugVQhDbBP6K4MvGQWuFWx87pBy3Vtpo2Cn4nfbATqBaEZCFdeBFYSaqPRQQGPn1VyPcDjCrZUuxisM",
  "key1": "5dAzUeQS8TCJF74QQpE9qFNZ3gy5pK1j7brxF5FUwLF96Ag1CMCBJW4ezbxFmTgqc31KLgV4WoMAd32ehaTdSKGk",
  "key2": "5NSYcUFJQdVTQ6vxhXSX5Kto6Na3mx2LbL46F1NNqtwDsYjkGiVZSowF7tLjsaJK3yZxEbxGJW1BxEYr47esLdGV",
  "key3": "5meU4pPnH5w1MLQRhk8rUBgkbg3DeyiEeRLfPStxX13ZK8N2Yv99L1a77vfco5C3ub8m4sUSAM5aaSTt4sKrur3w",
  "key4": "4U1QCDo7kat4NZyuSY78nbAZwzfXuM63icJEvdKe3bRcRN2J1kwQ63poQKV8KNf46aPwhfvpTLwNEBUEDyx76Zsy",
  "key5": "3NQ6fQkmjvPCYr3C6iuwp6Jd3mMRnP4crhcTMwLYBS7BdFG5iHLRLcvQEZ5QJTh1Cb1JiXKMYnbFyxTSJa8ZLTVi",
  "key6": "2TSbQhsTxxfFWUGxUwtNkwrpHr94LPj1TDKq55J7Ks8vGotEzgr3qD9b2jutG6AiCZ6bmcMRSvVYM9n5TgiYqrpU",
  "key7": "tVDhhqEoZ3W7bDDB7RDb8FY78K7DsUCyu7znb9YztEKj3megFhJ8na7YD3AaYwVKgHWn5wJkmjaaHkjjA7qsLLE",
  "key8": "61bFxEU1GGGi9iTK1AkFczRHmP4mwqqJ7mQHnFadkMHLjmzbai22BGN8gCRF7XTnwWmvS1W1715ugzS6Ew1Dqi5q",
  "key9": "4EyEcMb8RyFCuTKnkeX2rcra2WwzMpvdvdR9RZ3CjeDXBdE99Qart7MWHLN6bHktKd5LVXDigVQJJVkmNcWL7bCd",
  "key10": "28QusUaBEkk33u2GHG5iqKUZ3JpeiN1wKsYawn4opg2Y2FiDeLo9R5UuYKScPGNDXQJzgGNvNJvigVmruYVeo6Kp",
  "key11": "5f96JZJ7fJBF1ATgw4DywiEDgCUCBUfv2k9ohsjXLRhhNqv3D91LokoG6phFeaJH8rCv1WbPnRofsRN3durroeqp",
  "key12": "2sBBUfZrM36BaZuRnPUyQHFyxWxCYWXc6b99LzYdko3tFpD1py8mVxFz2gZbCWmw8j72KCcmNxbFePBgXvSqbNAe",
  "key13": "5MaQ2qxiWAn2cDHXeLPvfLXVk5Bnb27Do44iV5zJiT5qJyD9fHqp4SDkRqVKCGZV67ufkn61UH45mNtqLZ51qU1R",
  "key14": "2XutHN7ucd4AYcAkGak6qNrMr8AoK7XvNxCiAVC8Fwxvk2ht3eHqWp3hnqJVXoEiphZ9fqW4TVMpbEJKUTAxzwJy",
  "key15": "3a88LvVqQRN6jH515kWa5YNddpJiVFvFvcq2SHRWrGPv8FibxuyUo9WMExhc1KRGaYSmoRSzWPgjPjsCBhENVJye",
  "key16": "54NfaTepnzUCiqvrnL1KUas6UbFLBFpjx3EcbQaNJdqrQbjtGorzTZVFSmgN7uaPjwT6mi5Co2w4GPaQ1Tmourog",
  "key17": "3UFPxdcpBpa1vJy4Q2BR6SaGenFivqj2GPNyvgR1v87W3CVsQa3eEvog3UohrKsyUWKdAABNBYPxJFzX6c1FrWfH",
  "key18": "JJFAkQbx8KTVC5Jk4LYnHdE1YfYptBzBUMGyVYoPSbdyBT36wTD4e35gzGeNR3q3nAeLNQoXV2AR4zTHUcSuq3G",
  "key19": "5J2wY6K6tz3ZwNGes3nroY7VZouob7wkxU3zTT2QujJYTrBNqNzT1HdD2NYCiwHUJZJnfj8pU13cxYPBW1SxPx7E",
  "key20": "22SamCP5JLdAuqBQwmb1g5kq4cGHeuf3WVSNXJyUtR4VrHxRjeaqh3ieqL2E5ZdQjXKsvwecZNiBqjsguK2T63ys",
  "key21": "xr75WYHvw3NX7ftGNCHBagSCu6mWByy6niv5yAN3MKUJnXXHSW2EXZFSBS6kQMDq1TXWSL2eN4oHsMe3BuqKGcm",
  "key22": "NnsXhHeipvRFbvqGzVkjmYiALJZCtdH4ZFBBz9WtSKYqEHZyCpYJFk2KsDCi9RS66jkxbw4N6xvarE5NGkwhA7a",
  "key23": "QboTmb5kSeHUvjVbPMq3U4C4NSzfhgeBsc1HZkLRqAoydSgdEv4LrDyyxx4emhCJ8ju4SwaYTLHrwv7PNnqXJ3F",
  "key24": "2v7GSCVwyw7LEgzgUEbv4zQTa9ymNp1hMbS6Mz9jorgsgEscnmXfmsmCVErMMYY2W6EQ9khNfkM9RCYv2XvsgSGP",
  "key25": "4ikWq8zBstLEU4iSrP6PRfJkjANGeWsYjw5KCam9MGw8Cx21hPsb5buZL8A3vsQjQuty7xmacBC9eUTrXzsCBRen",
  "key26": "66mEVucDrJtZDhchsVWNVJc2CRNw8QohZTNZYWv7diwx3QF7TYBSAsuBqrrNaUQXLtaHsCvjQ4aQ1b316pCGZdi",
  "key27": "3jPhYe5UZpqWbvkrxXdnpfvDpNWyHbwqLRtYucKgBHipH5AGnGD5oZaH4BNp2esAcciHMYceJ2vnTnKXu92skqM8",
  "key28": "bqWAHM1iGjvgjDwgVgWqKSL3EXUDStREeH7sZRVkuNdXpkdiGG39iJBaSU2xKzecHg3aLZG2A9jd1o3KzijCz2g",
  "key29": "4EGbjF88z4PbFDBG9tSKNLmKa5o8YRPcWudwYvhLA46YWiB6Ws27AAZb6UURa5vJTkkESDzS7t33Ym6TuLuYYKBD",
  "key30": "2wg8uhawFrsdDhf4e3Xr3eeMLVfHT4kPYFAEV27u98Cns6QbY49LFztA8p8MB2mELdxB7h7C44VaVXnCvVdsMRvC",
  "key31": "3eY1J6NSkUgxFdxaha5FtBJJ6CnABXoXPDMhV1SyQMknZBNAxPjoV7GBNnyYoRDa2mfXmQ8Dm9jJkK8DgvKekhcX",
  "key32": "5rTo3cfFfMXBBSC8JssuoKgcdhYCntUw9rrvbmDqD2nJnkF4zjCwbtkP93TP5UTEKjpJGPJd2W8SsMy9E9zASh78",
  "key33": "2CEjT8sXKfKk9t7jNGJ5H8ez9xhggTwwEUkHSMjMYJc6Gxk8KVuboWePL2G3dTRU9rcwryiAkf23RNLCfYosq3Q6",
  "key34": "4JgHfx61DQKe2nMPsuDDBcW3GSgVuidWpbEv5a458FkwA7itdhCPiDeeK9XyjbBLKvg2m3YdT6er7MjpAgEh7YCw",
  "key35": "25wWWWYx1aaWXwNKMnSN1jRH2NfBe4Lqvaktt9jWKykNYfBsw5Rqwqf9dLRPt7Y1Ez8YGmzfdzL8F8GZ4G46S92B",
  "key36": "3X9vmqV2rqCRJVY4BBXAsupNxc56ETnAkdkosiDoTFWT7gJjXvU6HRQfjbjgzFuPt1gMNSqou2NdDxj2qjuLMDpy",
  "key37": "5oReeaYpZUi9JYxqbpvAAH75TRarod4xRx9KXMzTjo6AvrAv1pTK5joaLrEP7RA8iDpRoRY3euDgG6Sn96Sr59e7",
  "key38": "4mK9BXkjYJ1sexDNVxS6XsWMB5DLfkTUnoahtXENzHkoEgGWvG8FRPB91oK9mgxEcuTuRuQDNyCQHLL52opkonB5",
  "key39": "41dm1mNNU8VDGKVEv7otGzGqAUiGy63fBQdZS51N2g7xay7M6dgqoKCWe2Vi61GpKLgfhakZtFRPF9p9TLTLUQna",
  "key40": "3Mt2vPYtf2gX3N3FPVJZsDDCPGSzHiMndCx96aY9JXchvJmudKDUg14WF9zaJT71obx1xHXpsA6v9fNE5HMqRbjt",
  "key41": "TrbBDUahf9AjtCeJerXiQqFzxK63vEbtypDBn17XD5xiaNvoDxP4BMBw9VHuJisL8b5wwaf8cQtL5YjixDoiNE8",
  "key42": "4hvdx6wBFS9DZk7r4SVfKpDmzepTd6Lp2QZYk5woyBfTSuVkvW6LVuA9yNMWdy1tsLLDyJ1Ng1oBDHFChotZaD3s",
  "key43": "nbD4mWXZ1KovFZmhhd53rVURymdQNjN6Vgh1RQYqsyu99wmbq6F2Q88AWYhtmyTczaypYb4rciKJUpMS1ny8jmK"
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
