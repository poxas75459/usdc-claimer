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
    "PvMorVqkYwyXDyvspg8vamuptZMzYRhfSmQpdrVFsQf5Hx6ybG5auTuBixKunkDB3QtK9ozmhYe7yYg6Yhxe8Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crebLY6MXmQfRRyLdJiTB7Qs3856RCVi97qY5Fahzstv6vEgd5gKDU1VDFCVa5uZwVhX918dMexgyCD5dKSmuqQ",
  "key1": "2AfdiKwC55fBTRoqiMK4cyqZGmxUeFe6dgrHfbox5on6xBGyCTHB2X73HgDXuMmNPHRNbRSCn6fWzBDoGvUqyrnw",
  "key2": "2sMuyDHsB78AJAYGr5Fp5E1apy4XazQZYtwLm2vBGEpoF7DDfuZKYsYV3gmYAsHQ79Tz3V92cLHLcNLRKJ7zWQrg",
  "key3": "2XGkDoVGDyV2FFkfPv3ZVLgS2KbvYizL71mN9QNRPYJfvroHyx11ZLy4V6DSwpvgLvQm2Vqt9g83P4DiX8GHuDgz",
  "key4": "on2Cz1QNoX93uZhe7XqaYj2NwXiz4G4bSvFLtuy3dA9eRifybTrbi1RA1wXmoDdkKj5GPuu8PxwwQoNCnnq2QVX",
  "key5": "N5wEMNwzKbzSvCTeA8VosX8Zaqap3RSy94p5Qzctscp2hmVYJz1vS2KEgGe2vfCVZhGRMuErPLUV2iNmzWzJ9HV",
  "key6": "JWDFBBXbp7WpenGzhkmx5keuoeqezWcA989XyZP8RnF1ttVojRTiAHg53twJfjwNacsHGHHNqjK3YmV1JWp7aN6",
  "key7": "6RrJU63rDqykAvgmemakND8XdwZoRDG3aDKNFVNMnqi5X1NpkTj9c9AnEWGBXaXTzTnHSDXs2vMjjN8yi8HYcVF",
  "key8": "3WUzgWcjeG6tRZtdPsDQe91QoJU8ag8yxT5gpgLhV6zRFTbvkVMNHkK6Fas6eaYaLSyCVWSVQUe3URs3WwphDY6R",
  "key9": "3SjWSoLHbCwHixF6t8P5ouEz4XRDFdvE7AWhMbQAqqAdDKsS8Qsr7LzaNtyYth7gwmN2uM5Sj8LYMaJ7dPkvsyVE",
  "key10": "321i69ckbeXnNtvw4HDWfkS13TnQmBc4b9Xb3JB4bDC7s1CDff368XhX7mpQ3HULop79b5ZTwv6VkRS59YgBFURU",
  "key11": "3J78Ar48nAqLBi2JEDD1pumwgvKXHpJfhcM9re7T2hSZRNXt4ATbAK4sfLTB9WX4TiyjdKSyVzPeRoCHS66wtenr",
  "key12": "4uWtgmJsxVc6SyyzTxMbVWfzm8y8M91qpvfohJxRKfDoRBg6P7YysCFBs1wcwouJCYncmeBTwkPvRKdRQeKGBvDF",
  "key13": "2pfQ7sP6aVjiE45NzcUMeJfTBmBu4zu6reGKnJUrHNkyKMHuZGCcPG6uESvUTJC44cJXH1uA5ajG3SBRSosqNXV2",
  "key14": "3aAPf64tSGVSaBDvSpamr2XLD8gqTu9CnyQT4DGGrXioXEfr2cDzjYmqNZNFXKKKVhUdLA1Kxcno8jyookQMSrVr",
  "key15": "5Aa4TxsEmC9RbfF3WdTwxcWZfxAELgfxSURR7kg5e7thUs5a7dNG61rgnHbXrJ3sanT4GPQzUBY7tUjNeiPZKiHc",
  "key16": "65kx8a6Lmq64JLvUtSM1H8jUjPdemQcZVa4knChiyeuvdfviDgxCpRXN9ZtGdUBytMot4LD1unNV54mqXNqhvupU",
  "key17": "3St2KwfPKiFFGdCGNgFhMeSzTbzyt7RTaqeUpgR9nPCMDeAUXZHjJj2LdiPDVHN23bdLkrDDa3qVeqy41Z1F27kz",
  "key18": "4k2J1EYjLgdkKAC36CVK1Bd4JnLmub2vVRB8keirEnyX1yqd79Nk4x8nSYdseR1qyVvDzLhyf47sjxYEG45vDLbK",
  "key19": "yY5wBfdXpxA3UD3vHDJEsVT5BRcAgpK2TA7GLZhqqatfHxQJJHLUNB6hd9X71zhQLSsoGJLdeotDNnPr3xy757a",
  "key20": "4o3ffYnXb7edboEJvRY8KpEAwViqaMinH4xcdG62DJFNES93Pgwv9pVe1ooZjxTTjJXRtSc4hWQX46hJekQhux8U",
  "key21": "3xWjaEFFYqGHkehuVsPVVHoP3NGXJi9o1yyfaK7wGFhfRFxL4B363YBLksbxx9nmBSQHZwTJALbmAvsSCVvFsfLd",
  "key22": "hhuArDu7UJMndwUCpphqp1MaqNnBTKyQCgtJUTdzVa9LDkdorf721SMpcShEfBCamkNXMstkJZFnQ628LvaZBTW",
  "key23": "5gE7My3LuEKWsZ2WTqB2pHCNWnWji8q5mJYpC7q2gFcVciX7ciY4FYBCCR6LFsJuTvDGxdwrQyLWk4PsibrEe2mW",
  "key24": "3BtvTMdvM8gCm7McFLM5DgARsvnA3xCqBj6P7fgJ2kFELLkgYGjt5Yvmeh2TdEZot3V8ELzoTVsVSw6cv5cpNAN8",
  "key25": "33hq3xhLtSMn1yEKfq2zp7fN8bYmQU3DET9GBCX5KgeL65WCJ5Vy4zZYoyCEbLCBpHZQr8TWrtp1NG3DXu4Sr3pv",
  "key26": "4d2pUQ76tbTTcnnc7PPKCsMG2j7LTkfaWxJZ3zTAnW8rPkeAaFBWtcm4WPyojugmZzaBr2uPstjoUSBZLH5oLvre",
  "key27": "5proa5EnVadHwhQ6gxh8uE8qoMDDsqX1YkXfM6FGCvi9dEb17C5GprChBDgGtqaTBX3U8zioWMbDAjAc5eqY2ZYh",
  "key28": "52cFrFeJ6hjqiwMtaGv9fGnaSZ9L6FyYgK2fmYyCCMMSwuj4RfciY9XLUfZSxRMbsCMZgD41BTQesyogAvnh6VrN"
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
