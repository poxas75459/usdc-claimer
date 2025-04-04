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
    "P9XWs3cHwjGRgeXwMgMSaoaHT1stkVJjwpae28sa98m8v8t93wxvYhaByiFVmhsJ7sVPpXbN6nDUznt24rNDhSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yAEcThdtbvDCCcvUpfo4QdCE13fBSxF12UQB4mH4ZTjaCmju9gLfqqo4zBrAff1BxstZibZhLqzhnc5aeGcwnbE",
  "key1": "3pnxmi37dxtBvEtjMFzzudGfsQmy7kBLDzSk3pCMmkVEnfvuH49yJ3aZCwMHK48SySrS97TMtT9TcKW9sTAHpinc",
  "key2": "4nMJkDViFs6LisiNvTAVNVBrBXytEX5ySwtAbaGCFxhySLxiGwB3cf92t9HhG778mXyjupUWuCtYRkzwVUAp8SjT",
  "key3": "kigg3Vv18EDwSvFpqCds7BpUTKyKCH7bTZUwx2ny8u34dc9WMXPBpJtZF6nNHofZSHhSP6jD5FZvYmydK2owqQj",
  "key4": "3WeRGBYER5bhScRyvd9cawAKQktdCr2NrQu2Z5YUDCBuyyC4pJDCRv4bJWiFD3rU9s4AucADXMPLzXr1WimzuHdv",
  "key5": "2RsYtywKr7iMFx6G5ktJKuWmAD9phXyt3pEckQFJe7yGpAVSsBwwD6PhbbSQ8aTEtgvRKRkFLp1rJHt6BhafQCNx",
  "key6": "2bzB1xbb4wYSQWhSWerLaowpkax7prGD9ficud36wDdX2GYsnH3ZBDFcociPoqeSbiEiAKYo3jP6sTCZ1gTbYGSU",
  "key7": "4XQ9Lr752wGr8Qs2ygAkUUrXGMF5JeLi5dV1P7vf9mTqpcWghCkQAxd1GCaEjZJJrQ8Cpo9YuN5QB7kPFLgjeAB1",
  "key8": "3gZECz8SQKWYvhCtoiefTu23q4wt1x53SmR3zrFZcNaNVbDr2fhejMBe3dwRKL8aLj8KpjzoAgSS3gSS1tHL8qVS",
  "key9": "2fBPumsfJuPTC4vhiUJTZdpX1bdtfCcfAyXYnLHuevSBUX1BHT4SmvCnQ9MVuTX15CEzqwnmFBe19WQMx8FyGL3M",
  "key10": "4Rnqfb96kUrwqCRy6Mgwtfp7Y4a2moaVny56bbWo7YFfHAu8B4c3doLnMd9Soe9XfmybydXBgE3CzKN8yQamzm9N",
  "key11": "3nQjBj5DmBvGDq5JcQ4w4hTzf6pXXstgWSHMCvYBkMXqGSpUJUPC2Xfm8BjGMGLaJcsEQ5XA8gUmmTNxJbA5XnVn",
  "key12": "546B2pPxQ1TZoeCEMJiyH7GSZka1pHW7fxQfwPEPope4S1yK1UrxzSM6YyiAEF6K4XSSHXerZFw7b9xvTfk1VjEc",
  "key13": "5ZGQ4tLcZURRqm72N9VkPyKmDHeLpTzB5x1e7YFFPdUXMBphCeiEpdTGtH1ccRU3o3gECTqJTNPcoPkF3f6DZJdv",
  "key14": "4VdkbVKEpUgRQVpUVYbfKaF5KGBqP3pv8aCPfdtee1fVZ5at27osddTvyY9547kFrvUD9wJR3H5cBmZSPGemStqG",
  "key15": "2xMXjtnENbR2DD6aD2QwJWFvTFDQrtQo7a9uzcaSc3rArCvuozbpLFd3wFZUQtzds3BWKsC1DHL4uQKuH1ZSK6VJ",
  "key16": "2oCiVEPKdThecCpaQLhHEnx3CpGVG79G8ZSowpcA5fzHAFKgdDwqgLM4TpQGiexarWzw3EUzYhok7K2wo81fEJa2",
  "key17": "4BvWEqtSSgxS7ZKkYomQA3HRtUDnJ5zh1DKfxZyGUMyfTdDTuLzREibZT2VKGySysSsPoeW2pL8dCusPYMbPyopg",
  "key18": "4nywDbpiMCJKThzzfzBV7qrE2hLJMYUUUEBpN6b8vDHJz6mB3tKVJ9Wq68BxyUVMN7DawvdyMKqSjHgGXFaNdvhx",
  "key19": "4i32mrpwKR7C3fzUvm8K7W8p1RtK2Fs38AUZY532r3GJhwZcQYvrSPFnG5J5fDuUd4DCd6edB3MuJUcwnudUbjYn",
  "key20": "4Nr6o1N9zKhiqFQvRsm8zK5cxBiczEhhbSjMafkcpwv35nPTLexPZGJmNcta8QtdP5KV1RAYpYLLm3D7zRfZJMNY",
  "key21": "YQyxF3NigPSf25Hme3LJyxMv8wdsKwxC8sVoywBDjNjpxwnm3tRbVcFyCH9wzJEuNrmFUmaCmxZwv4pW9GW64L5",
  "key22": "4aqhdsMmTWkmhrCj3N94dTPxjz8tzNSL17eyxvhedDVkbCjok18ZgtWCXcHgJ61KAU6h7tbCKRroj8ZrWdY3ig23",
  "key23": "yksaHrstVs6nPR7UwcJqV2b4n8Kwmar4r6QznGsf3EWR2Tqt4AuiK61sHEHsFYkpLEsJtc8hgkDta3yszCf5RXL",
  "key24": "3vyKhKvecqVUV6hahS4Xqqwy1kJVxtGoCUNXCUHnycEa6uS4yYWc4oQ34Z3Y6A89BwidELWwpQUfVyD6QTH91qUm",
  "key25": "4MeawouNW3ojbjvZZgPMhdY9fAXG5Tv2gJYK52eHd4gUKJg7ESdfR7PQfNyavdLeKxD52GSD82N2qBXhS1aygKJV",
  "key26": "2evVRLVrZMDAGNNAwD832pSJb5Rsd8PmfvoJX1FyXfg9TTrCcL2MM9N57nVGfjEZ8TvEUJSEATBXGZW3V3wT1mjZ",
  "key27": "3ghh11J8WLtqp2qaPKks5eVgR7yP4KSd3wM2DVPqK2ig1nYQsRYLhQqq9q8NZ1JUNNtYGnSS9KJKQrFWoJq3bgrg",
  "key28": "5CEWL1GCoNfLbTnoA6kaU4s7vk1vjgux4sJsrbR8afywNKozQxiygRucPRCYsKMr8xShrvJyPXWqntQtT1f3FxMT",
  "key29": "4E15tdMjyVWzr2omR1rPrEjowvpicyHWD6s247hqsx8bgJ5YFq7vGXhi8GbguuSZZEaBtBWGMyPuKb2woWhCBHCt",
  "key30": "5cpenyJHedy92YLReqD3vkRocbZQ8rZT42iMJwSbn8N25nLt1QF3MAwfoy7bTP6Q7ZFKC5iNB5DV7MZkc8h3dzNC",
  "key31": "5BgH2S5cEcJQq9duYWEr75T2JWVce9VzfcYp5MTWHGvDNBMTYmUYHri8eroXZk6wUuJXomdDXQHwEoZRrRU5qs3C",
  "key32": "2knHFpsVDrsa1oSFmN3zhnn7M3gACiJPS7Ahq8UjfGmV5qkWpfiekk489XKte59dbMhQGqdi93tkHZPAqyfT8RYH",
  "key33": "2C7dBgxfi3STEsocTUjxm25DdctKp9SFn4EQm1A1Ww8iHosQmxFXJScwQd5DM9o7qHJ3Zgy7ZjdpDvY9qXKDhrBe",
  "key34": "3gpUXHDCJbPd3e2Sh3Bk3GaJwbCnVd3tD329eLYjNSwCdK2BcmsY29YFCwZqjbBGYruukZyzi1oavDxo9bLVPYz3",
  "key35": "3ZdWbHjt54XwQCRW9cyq85XfSaUdwXhx96fWUiXVoLxFAk19sP44TQ1y29BSXBAVit2N7gDpGEzmdQtuudAecCUP",
  "key36": "21HREEcpB6vct9gAWo9i1Cw27pNeAKsvLPXZiJ3Wwm7Lu73eTVGmVKyp7K99gi3uf93y3dNFESgvju4913wsFVTW",
  "key37": "5KYBCHRqK2N4cSmJ7xT9dkf1nPKAbG24cd5BZE8YWWuaVcYmPydjZDpR2v6xZru2oNXVRiJt2GgeuMrBJnmKy57c",
  "key38": "4FT9pJ1La1DwzHALnGV5fF5YDfpzVwjjKQNHNxz5bSxqRYhhjnkGAxPs3XEWpZEQuKtxqCaCWfd4V8oY5stcZdz3",
  "key39": "2EwEufVN2DLmFSBy9wQDgBXCw8Po31FcLvpTxoGYSg15DP1adapMddfoh9ZkFEcWw7N7JWq33sTbVwraAKxTCwvu",
  "key40": "49MVUiyL8PRUD89niWTpognuNUKxEARhifPEwPVv5fDk7MSfpQHf7uVTv4c8349qjH53qGDKq9xGSJo72QxdPX8Y",
  "key41": "5XkycHxaU1j8BxSaHdabTeh28N5xUxeN1jNTyMvjtQ6fetFmRvoHnsHZqCAY4YesLnTtpUu41MHiSuj9qBkEhfbJ",
  "key42": "3eUhpWYxwjUUjDB7Qfd3BA7Y2dNFA4yCkzunA2NkbECiitm95fF8c7ocv8GfwKbaRpjDYiPra9FKfZunF172ajqQ",
  "key43": "2gKmz3WcTQCA4RaciDQrPw4fKNdUSk4jEXyhZtPipkVJ7Q5QY8cz7qDxx7aYS2N1wiDRj1AavnipCSj2pkJNBJ2e",
  "key44": "32DQf6YKuGMJvq9R27bsG5PBF4BDJaYfg9zHrGieHt7U7Aj1KMDvyGsAZsMDJw6WqXUNtcLKWSaDR6wJaheDkiiY",
  "key45": "5271WWQMFncfMHwCMj3BU6BAUj2mMFRvik1ovuWtCpjhRDPMdLbN4hcrRLCEur6WkaN2BSfkz4HpdMTo2Eoef1pE",
  "key46": "63mHdF6Q1WHwLKWbzX9dg4fZifUWPWNyG3ci1EGFjsr5o1UoTAFcFuX7VfnTyps3yETu8gM67igkYiET6NDQx5Xr"
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
