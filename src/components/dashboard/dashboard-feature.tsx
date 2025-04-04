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
    "3Mf51UHw573aY9eUnYunpgnAVTdLMpHUJPscv3EoXcNLRMdkydf9Dygx18Vy3C7HpGKGexpnZRB5mHqhszVfRHyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHwbaWHqnfj8K96nc1xfg5DujigtBAXNUrjAK8tuRhYTbjVmAA5cCm5inb2qQV5P96soimtoFKEFTrF62fLEQVB",
  "key1": "3wJBdFWSXyUJqeVcx87J3b3iiZYWmRU8kR3nwTxq2yWGorzvFsQ5E8EAU2RSjDmeVKksG2qJBLdsTxjcddnMn73F",
  "key2": "41RgFCWvBWA9mtX7i27W4GKLcu2pY3R3X38KwzShsGwAJCd4LkZzjgVch8gk2yMTi2Yf8AyfYDXaSqurGMgjiU6n",
  "key3": "3dm5prHXfcD54mXdHc94fKg4rF4ViTCcWQqaJR2eCPKsdLPWYFYgjMsvVz2MWXWDvWQsRAWCepc2StqQgUt6fFa2",
  "key4": "4LVU2Lg9J4BJuejdMQorMmozJgP31Jh31R2Hfzg662GVVTXiJm7cVWmTCDiqBXSFES2pk7Wi6DUcK4XC9aTsYqZm",
  "key5": "48yjjX9WbcB8eSq5VnLKDKkY7o95CXez8GWTURXNTN1u8sPK5Wq2nchnjPHdqkpvKbkxwpAeFZoHAM4aimE5BcUb",
  "key6": "58CkHDxbttC3Rdk1XeQnfTUMu9KKhz5GiMRdpcGJMW9cbi2LYsF8NjuBnryUVZtCw7N4gizGb4HEVKCU2fKNZg9R",
  "key7": "4h2DxmNMMC8aXS3touhdRDL9JPuVkfUQArNtttAAsfZwrrDTYFJyWudRmH9fu6oS7Mkue9ywYMR9fkhbyQFrUVFv",
  "key8": "5Mz1Fijwcn8RG43wteg32vzoAE82Hd97L4xbsj6qNo3svMJM9hWV2SeD4AihVMmK5fRGeUx7kaZ5wEnSJJBRdeKd",
  "key9": "4Cs8VWbj96XX2wmFZEyynbsZYiJBfETcKJeLLEubRUWyRqJcg3T8qZkkENS2GGFpw1ruxymZNsngvehYJ4ES3wdi",
  "key10": "2EXVeqxkVQ5M2Xis7dVUThTK6rvqnFr6PU1FcJ3Ej3F7DiyAgogaTcq9yfDx3Ht23zzFU6hVQ5Kcm1Agm8mdF8p8",
  "key11": "2MPSEBQFgmwXQLp8XDrUt8LdfKkaQ4jbtEnB8i3VT1V349hpKqHf3qyB89cYac1bk8FYNYH1TVKyQ1bgCDnVigGY",
  "key12": "3qV27t8rTbr7atPkZTAs2yjsMF3pUry3R2mcmNsHSARP37WQ54fzvwWfqsgEJnWcuTvaBDQ33br1wEWU6Sa21qHF",
  "key13": "5wmStoebDo6oUGYabKSM7BdmJcM1mBvnghTS4ZVpCVjWz1wQtj1uL5pqYB4pZcUMDeFo8uk1LV8MeEanqcqqgC6E",
  "key14": "66USJ6aFVNtwWQRv6Q4dyp58VKo4PxeichHm3iW6UEGCnDpqMx6y85VUtAKspEubAuxts4e2vPFDAnNYEpnLgXrB",
  "key15": "2s4dCMbgVhiYgmqQXZz4No73yrEd2p3wgCEEjf38eopiRbSKeyCvGdxckWTzfTnJsDFFrKhsL1qdgybxikXzp1FG",
  "key16": "4rviLUcLPXVR24N1jvU352rhvqwTm9jyPKsrVByPyeiFsTSS4Sd8TuT2Wga67bZiqvHaUwFr87P3ZsgBKRCMY2e5",
  "key17": "29ronxcNfX7C5sdvPArLB2DNkMZQErMpUgsgrQ3FRzA6egacxuxi6coWqBfJ1htRfrCGHWN9LBjHL1US3ZNHfTg7",
  "key18": "34fKQRGo5WF5JS3S2vuptoqEsVmbHbQu5BgAmwWQYDa2Mf9Q8MVfGbGdL1KNk4V1NxeZKq9QZBAtJZiLFAgEHWaT",
  "key19": "5UKoRAivfkyMKJQNFdypQF61LdXcaDu9mcDHYxNZVwd3cin9JUUaSdbzXXQWodn2SsCs7UJDrGRSGdyhrKyXmPuo",
  "key20": "388LRB5QLCpGFkyy4kWWLJjC5YgsJxqcwTYiDF6d8AxNB94XS6A8muw4KVn9vwBVXwSEniwAaKHC1idP2HqQPnwQ",
  "key21": "28ZfqxKzejDXcFXzJMMriNg4k1ucSWxSCYavfpZssiVBPFmzNVQGSMgPCPfUQFP8q7G4dp4QugrJZ8EwaCCP7myf",
  "key22": "3CM8UDWaFsRmxsjY2jaW6GqpuucEjae8uS32CRjjfri2CaVMA7ejfYZJn2xJdWmcy8pTnytw6YwPhFctwf2eLBQg",
  "key23": "525gyJvRC8Qi66dAc1PQQyy28Uhj7iLuyVZ7oze19LGay46D2KtBeZUcA13KG16PNv8TAZmKTjRT8Fwo36sNBwdc",
  "key24": "3n7AegJw3rB21qY6uLKSM5ANU2frxAcPsKsaTryR2tZJKXaX9Y33sMhyA2d2jvymjc9KivH4XGwFKcB9yRT6JVky",
  "key25": "61LQDVLvHXPY9eq3rvei4cRYVFx75UG46ivWW7WDydt65aCGcA8ZESU2kLpuw1VYVXZstXj1U2FrhfeNKrJYGdcW",
  "key26": "2Kc26ZBUQiF9jAahJoaV6RkHqwK57nui7cUAJVR94CPaCd9rL7RuHCpzPH8amPWoJ7jtUkLu4cqS2fHQpMGZtLhX",
  "key27": "2u7UChfQFLVPsHNixb1Y2zQHRFx9hZCMxtt4hrvBZXh7eP7kSLFWWacNNcumA4BbsgK9TgqmFw7UqMUEXBwK4ziE",
  "key28": "5KMWjPr3pC7ym9R9SP8TShmLYBaBe4jRJgWD16L4U1dG8Z5mUctGQyBb8rNonWL58753SwT8Dj3w1ekqkgrRP4SN",
  "key29": "Jyhu2utLsW77w2RbGGra9m5YAU1TavjgpihbpHvsSkvEokbk79sEJvRpWiYtuTx7F5KcZTLLyzafxEdLc5Twdby",
  "key30": "3LVpxtuZMaVkzquz5Zxjdrdxha5L9J3AxDKPBX46sVYRP2BKYe9c12Bp7GmVqUMHc7MBKFpmkvpBgFZmeqUPY9PK",
  "key31": "js9YwQJkgC74K71Ce5eFUCEhWMZhozCjPD3NWqrMzVwGBMXFBx5TGiJt9NGkSVZo4t7BbhCzSagwV6Siuv8Zavh",
  "key32": "3LyEfMaZ4mTR12MiJfLDiqopA8edR7NES6rjGeV7DWHrkzXWooxjzPqz4K5obxL56JMDshVYCtdnZ3czTHRPyZba",
  "key33": "4NDUFEvTLAa9KzXLScaWwDkwL1MtWfQbsBvDshvuK5xs3Yv4EcfS93WBVGxhGdTHJuD919pfiydydwx4fEws1ixv",
  "key34": "2AgQRhC1LFi8VnMHD3tJGsh9q3q7iaJsT6rZTunVfxPAfdwQe5xt51nLLiMx6LPFDKhAPwzpNH5euqKShh6T9dNY",
  "key35": "3LmpYTPwyhLhRMBkDhKDyKaNor6c4myQj231RnzfNeoSJ56AfoGFTVrbygcq1xDrkEgeFNu2h8eUNXHMZGsDWian",
  "key36": "297JZcumX1VEZRuJD1s4cr8iTZ3rNrLoddJQM389A3LaoRAMG7xXMtWDn4gwMaJ6DeGYejhAWC2M8eKGHrTBLi8A",
  "key37": "2VcNbKuLFUvgsjVWxYYhTsUEXmqkSZMrEgQAa89MXqFm2xUSMj4fygzkFoxvR5SrfZYbmGRuW6zs38AS2ToS46Kw",
  "key38": "fjFbESnWcdKeunQ1MAqypCenqkL43SagExSHMvKjmbZRs2prgn3iyrxb9m21UyFJLtBoTfevxbCRbZ74r1EXBbc",
  "key39": "5Bn7CtcyQiVd1f1GMgKFsBTQeAbReD1FRpKHHLJXwykjcMZNJd11cJGpDmBFuR8uEHD4HTTFKmcuzRWZd277SSzy"
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
