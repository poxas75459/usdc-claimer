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
    "5VrZGnWoeQYRF15tKatDRXreDVjUVqwmcbD3qdX633bB4pqufWzVFzmSSnfdS6AkNvbgr5hym4s1fK8MPEEVRus9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "241wTCvavtkVbTJJg9x9YRizmJa1s8MP7WJov2nkkPGkvGQAPw9PpuEizjTqob9kY1ZjJTKqTHbZyZQpQvk61Fvd",
  "key1": "393mNimHYkjtL2fmLy3eyqSNM4pxYt8f9vKCkQhDbgGaAzVLMRBBYKMvD2MiCaHYRFYRpyNQoQQsT4DBZpTYJZXP",
  "key2": "3hcX5kA6w7v6nfTUHFsoe2eZ2JLjayywHiTyaPo91RLNYz2w61KXh1g1DJGPygZeGFpA4YdRW8DaREwq3vkXnR9U",
  "key3": "5UF7EEZMD6iBR3kJH43MXpQ8qLdwRWCmTQQdPa712eDnyekspvqKjgQa8n22kERft4gieDnhwtFnj9bsGnVJhir7",
  "key4": "jzv1VVzGiEd3jzZkToCTZ5GavSXsuFiwq2SCq3Ad69rVNGb4UUrg1TAcqD6245rAMCmESGR7GNZPHREBUGLre52",
  "key5": "3MgJJ2MfnJi3LFzDpeMQ8t8uaF6Qz9uCoH3QqmgfYEVixmYkiQEXKAPEejnDdoPT86Go9hwwUMHLx4qxDzFRCiWn",
  "key6": "spd2V85aJTZsNzp7nEN3ARa4CkNFGVwtt9tA6pzPno16ia88QYduqTcovd1ruhnedHFBTLgQbNj1zgVnMmun4K2",
  "key7": "2VN9iCyn3ATqxbfVN6Q8LQ8n9KjnXfMW13jswhudwN97zKjc5CecUYkkL7dcB9NiXioVW8q3mKzbTNqCugmV3kDw",
  "key8": "2pMfJrg4UoWviGPjVwxPWGkFjdhSC8E2UX9yST9KYtqnn1soRKUE6zQShG96pxW4eLZ1ntVSJkFUeGRG4M6tniN2",
  "key9": "2whRfFoBZU3QrcYwDuV56SZNyv1shjKuwvaERnMGM5EpqszD4nmTarkHtfVbb8nMEgkDwBKhfDh7XfdWW1Dbfg44",
  "key10": "AYoGTFdcV5Lg7WuP6wTjjoFboBaHeesVR6TEnxpMURmce5tvExoeHX7XD7HXriVpmKNcNB84zyrYg3R7CkrX4fC",
  "key11": "2QjRDFWYEN8YcgNjnGfzJCD7vudc31pQTDE9vo9d7qByVLUNJJvr8F39qxuWuN5mhgNPrDZ3NBYBt8QZb4PjJ5bc",
  "key12": "4AXVPAtwU9ERprkP4Wrh43fkhGuCL9cwkha5y3MgAHZeBGKG35yHKmfkMAoFbTvjHHhPHuRArracdwAx7h7Csk9n",
  "key13": "4RCWRx8LDgT42VqFQUwBVr6iYeG8mYiHtT4LHyxiqJRbv7nP1X2kKyodMUusKDFzpnTMgdqH9LmNHhbUQFY1jPv",
  "key14": "5UFJZm2fpdN87aQ5RH7ppSwTjd87isxCDcjY5ouG7NZHgSbSzuQtMvLSpTSn1hhLZm39pzLmGbb1eTCcYQF5DAR9",
  "key15": "5ppk4cAuou8DCs4St9y4iyedncMAQNrF7ns42WBvz4AJhQQYiiDEwbCAcH9Xn7K1iFkjLG7KGmomg5HMuzHRMt85",
  "key16": "636YFVj1tuzeXcxwVmgiNxZWfDuMR3MyALXEkp2yngSBpoDYzLzEcsJaLUh4CbxK8ByZ7Edhgc4Kj3m4xuhLw3pU",
  "key17": "MxKgKbyNpw3UnUUrub6QYo5B8NcQKMTZ6W2C6XQhBrhKtkA21WXEY5vvJG4uo5eUQrudMdLDp9UfiB1GHCxL7V2",
  "key18": "4msEBiUpqqDWbkMhQEB1dKfeGXbN4qpUsNXHJHZSJJ6E95AKzkUR9Tcj9Wj5X92bD3UxAy4TfYQHr6k9DsvRNYaU",
  "key19": "26JF3wvRX8oymi7PaKwb7Vvd93yBsE9Jp93WGw7uSbGnKexgy8iTWYgtkQMSuqAi3KgwzyQ9PUszBAPcWUpSqJcJ",
  "key20": "4isyjsBhGwG7BFipWVjj5Lm2uxchnDkTx5NVWCEHDgJZHA672VVzcNtrJqXzhjRQeHbW3LMYRZ4Ngj43suiqVpcA",
  "key21": "3uirtmdy4xPcok28oatZE5ocNCaox6miJqj5FowaQKSy5mjNKDv52AYXtWqpaqr8VotwCGtJMKRUDh3ZGz6GVgny",
  "key22": "cbmdfLuQb98vnqp9M8cKm63cbnkAEnFEdJ1cn9pkjcpv8FqyRt2fX2iKsppJkTQtVMnZWTs47nP5ewDRuDGd3Qg",
  "key23": "6DAgcdk8W3vEP2F9V65qtCqwA5Rc1HyUYfTNyURVCkdDfkkikTCAiukG8RfEuKDjAjKvM9KdjhedNruRV5kaYkj",
  "key24": "ro2Dq36xxuuoa4nM72Wyke1mncTkhhnpnKhDDsG4CYKDftoQV6b5899aJ2QBKP25N9VEvopCwhNoto371q9gP4F",
  "key25": "3n5oyB41Xd3wE1vSFj7dCyrcSAcKibQkh7xx4fGuEVkf6z3NDpxovtoWqfGNB3ZEjBffaq9a6bXP9rv9mCaSkUCR",
  "key26": "3Z4iHJXsvHJdZkUhYePYW4KrKGx87KdktGfwqH1UZpenGsX4VbtF6j8VauW1tVSkjfz7tifhiPUs7G3yGmL2m6p3",
  "key27": "1XTPdnN36PgVygJ3upu3dHvZ5W3CMxtSrJuprBkSoir94VnCHAmmtKnNyWrUNrQv3DipsSCEt8GZW23BBJqnYen",
  "key28": "51JdbsPJLZw4jvNsFa92AveyM6s9Bb2iDppqJHjwA3eMNSZLbvGjzMcUZiYDqrWF5NUhgJE2a7ircikV5BwU8dgh",
  "key29": "3eYyBSZVeoaATiHm51EPWLCRs76xQtp5fqdKNBqhBmvdTaCGhq5fGVrFxvCHkMzyUwgm5GcYt1XkgnDeHGBscZLt",
  "key30": "4CnHebMbwpdQzfNvvncEVywAd3XPBes2tvsCDMdgeXGKbsQfnv3hK3yxYJ2xkhddZTwzzrqNG4WEYA5dXAV9i6zh",
  "key31": "8gq62PFE9hzAwzfu7fvtnnC6gbirEdarB8QFCofPrgWn7xuG39ZskmJnVvuu7k6zLpW1NsRNBdF5yFk3b48qYoM",
  "key32": "3mkPKDxWXgaQH5ZAmqiRaskEn8vSjC93FU7UDq5LwwDz2aJAvo36MJ1NtT6S3EeWDYodCFNskSzbakrGJ1UwWMSd",
  "key33": "4NUgw9qiFc9xwmEZ4WhY8FxH3v4HBipREZuAzS4f5G6mp6wG8ZDpW6yoDnWC7XmMHH2zsFJi7N6PR6m6AHnFKXH8",
  "key34": "2x25KdapVXDqCPb6Mhx97CgNCDV7ViuB9Ck2xqXgF3LFrFHoCAPcWkpGnfusnMsXaHPb5zJdLX3TakQx6qYMCkxj",
  "key35": "2BXc7iejd1FPkpH3cvCP9G68n55mctWMj6bCuPsXcuA5LpWSD6dcWFuL7GLqkNFMGYvfhVwjnwiMUmkMXviXK64u",
  "key36": "3b1gzdQkmnXaaCtdYcM1nku3C6h43rY33MQpiSC22ptG5eoeneamic54znW7hzJiuE5R3hgJYeAXvEiibVN33KZ5",
  "key37": "2qFbDkEgMp4SyWojGs9oN84Zgp6rYdYWvumCepXPd3ZBP8gxD96BZQT9KRA66QvMQGSSwbhyqNYGWUGuKAvBJxVv",
  "key38": "2QwJYzXJSruvVwfaxXcLtMfCi3VgPrwc5gCpcb1uTRVobmZPzgtK1sbsaMzwVHCJc4dDoarfxGh9EM7wfx4YQHGM",
  "key39": "3UJPdJpwpLerpDxGJigdtsFt1d7k2DKmYeSCrpf8r7MKT7oGUZ84ggSRVYCSZJcQZVpmZnvqJa57mabTsFm2umW1",
  "key40": "5h5Dj3E5y9Lzs4Xhy28q6ZE2UtGZwQZsYBYJJoT2mgBzHX1a33AuKthB5juGTMg9engeVRgjpVZziyjQZsQRCngU",
  "key41": "2EaSTHNR3eJo3D8xDa4fqi4warrpt78ZTJQZZkFj6sv5YmFbiU1LgWB8oJJsqL68JNQynxoKHqsrc9WctLoGu4Nh",
  "key42": "5gyXWufeGwWEv5XKyk4Qesah7g5jfn2Y2LNZU6Sp9DtDTobDHtZbV3g2dUkDbUQLJHU5yZW8TJ5Wn4HoAdar9Rx1",
  "key43": "2FBBiKpGZ7EVqN9AUgReCcZsaLURnp98hFNSsgTdN3KxaGi9T6p4wqa9fzvb8wgZkzKog3VLKqfwPVkDKVCVWaUJ"
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
