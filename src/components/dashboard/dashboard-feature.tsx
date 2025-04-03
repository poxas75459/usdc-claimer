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
    "5SkXCrLVeHdcC5fFqMtLzjLKnb2Q2wwuzEtiPUgHygz1SXyMhrfkX3sbfLbJdB6Bqrj9k7hwzYZVH8HAmyt4NMkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j21a2GPoozZBHLm7F32oPkaZZnLi3Gp4S9Y1T4oxPfwEJn6PrpUZFxZtGswq8gtovNrDwZUXMEM72tYy8mab6ZN",
  "key1": "4NizPXM1srnExD31hmgREa28pmioypuqySQUVqgNUfCjayjfuUsmvZnh3t1dBsA3jdwCyXKTFiw8tdC9zRwDNCFz",
  "key2": "5WdCcP8Q2uR9RtBN2iVLdFnXS9Xe7R1u4kxbwBraakUS8j3UsKTACdXpkoLgeW4bCWiLaTooLPubL7PZZbi452Yc",
  "key3": "3KeddU7rFQoafzp8eykwZhq9YK3jds2KjxXvjnmf9ymbuGPNTrkRapuvQBh9jiLVs3cDqn5F7FuNAo5XnDx23unb",
  "key4": "77KEQLT7quhCNV63FGE51BNsGDxBvoshhNmw98RZDSb4hVuSyZ1gTTt5SPYqJWAzarRo2j3wnJL5LMo32KveEte",
  "key5": "4vJCpboKoc98YzJRauThxRckH8tsXXzjYJpsKH34xx8Xkmk6DnL33ErfhUFqQxRnbxtR1pvVJBuhnPWmRZdTQBFV",
  "key6": "7L7qboSKUkZgRaBEnPeXKv3kQEK9VF4DSnAbFrfAo9F1nuR48kdNucYWzhthWYvPF7zsNxBPNw8o3w9yL1vFSA8",
  "key7": "3JkWLAp3RC2Nts61HHQjRazX19KWYDUwdR9w3duq3u6ZfYM2CXYAjjx25eVmPUSxPSvMyJ4fKkjN5DTvWtP8uzYQ",
  "key8": "2En8vFwKsmgrgyPRYfjM1SF8Ce6zmBh3MhbhAcv1aVpPwgeuv3H3DpT5JZt3UDffvNHSppgfDYoueE9R2wRvuRHc",
  "key9": "3ZTLjHDE3ReXLDjVDDvew6N8pU9Wa6K1vPBmrBQ4DasAaGn448ubqPtXtNcak8Hfp6v8YkTP1BVpCNbDWGRRFT5K",
  "key10": "xmtfKSwij8kH1ABmCEbS7gp7jrzCxfzwguAjkMMombcyK1nKnKPgQ9eXzyqNMYJnL3WNaVB6fq7VmQXY5NLEodw",
  "key11": "ix6yyFhm4nY8pMefU4dcReZdWVsGcx1ppvcgvxs3MkBMM753hNGncJV8NLTzie1DXKBELqve4cvmuwzbBvaXogH",
  "key12": "3CXcZi4pEeDVZm91bPHNvQXCNzr3Zz9BqNJ2ejG6aJYxyVXyhjA8fimWdBqt2Xq4pNM9RgSMJSTbEkbbn8bvTySz",
  "key13": "5sKkMfDaHHhS6uYLU9P18RGbtY74b2buQwx3zEtCEmCqvbv5rNCgx2zDP3jb49PoTKvQzuwdmKAxUJpJPJ7YpoEL",
  "key14": "55cTQXnscAFT3zgVti74KL6YtxDmxhe9T64BCdc7EeSbjTe7fF2ZJG7fjG7YbWFFzHDq59zDupjvvojWahJXjvw8",
  "key15": "3sBgveTtsHxyqCyAN5UTXpwgQL7oG8DFghstGbFyKczijvWbbz6sTaBkWEMuZrkXQz52bi3Bh1JWtLk6fDEAfMez",
  "key16": "kwegTJaRJgF3CDUE8RUU5kYqe6Y8nR6VkAN1bRoZiT7kqfu5GZBjCX7S6w57y63H2xPjbMrHE5Rt3fxycqdKADD",
  "key17": "5Dkb3uNRQrHgq6P3ChJ2nah94LTW5fR9Erb8f6aJHodAFFozBo9pnrvnur6LBAjtz7TR7XLqXRfkSJizp4Xmjfz4",
  "key18": "2ak5WmV6qTUfYiVeYgcoXpeP3K75GFqtLrrcwDtHf8NR2ujXm2QQVyn3H7o7tHBt7LKKtfeAumDcKKuTPcQhe7nG",
  "key19": "324vCFv86ZJfHPnFKY3kGo4vkynPJ8P8a4KbFHwPX7CsJUesvzNMGTLy5GNzY9dtEYa5joCZhys4CjpQZ1Z1cJrz",
  "key20": "5A6XDcrVRrYHHoaw9LUy3cAt1ae2iJ3xwfKH85KMZXktAf3YYfnEAmUmLEk9tzxJqx7QtwSLXu2eniiZnzxuxsy4",
  "key21": "ksm16fL1RUd9DW1RVJvDhe3nkVYeqtgCwdjfm83qFM1y2C8NG1Ju74kFN2AaFhTCBKxmaUeeaqjk5FXEMCApKx6",
  "key22": "5PWTXH63kzu8jUWaDtNqGDfS3kyAv3Gw2UMooBJeC7bZXsDn2QPbUKieuuta55K22A1SUxBkUMU7D7UverFLWSwt",
  "key23": "3M8eZ1MyYy4ctEB3hUyp8yxW4rY6TdaiAQ3Lvo51xtMkkimGg3ovqoGeLtVbLyH7bc1J65X1dEFZDW8aZpHfahUo",
  "key24": "5oDoRDxDXBjFS8fEYAjr7vVk3iiQkQ4VSmkXUJvehVKF548WKZd4fpN6jHjssA4HHDqVmHNMNZzZ4PmHscnH4kr7",
  "key25": "2vc3rQKRsLNjzMJjgmkqRrzotfpWqqdBifQRkYysKW7TLNVY5WC9Sa5rM6VEbhK43L5a6iVAmxrxZ47DffskYxnz",
  "key26": "38o421LepPrgH8s2bJwNBexRY2WuarGyJvWm9afvwNhtFk2kbgZdM2Tf19mJ8mTxF5R4KyDYExrH6ev4exrAh7ro",
  "key27": "24qihAJXun5A5ig3UwV5UapnCJngKK1tWeMzqqu9PAJTUqub1R1ARikoKLV8h4wdKEHw4qr6btM9SKkdWscy4x4j",
  "key28": "jWJK6zcEKir6DmZkqjjiTgecyJZkaoEeJ6av9JHJMysb35JGD2fq3Z4sAQ3XeAd491AR3W9ehDpa7e48d5HNETH",
  "key29": "3Af2C1TNRXPBQgNAZfQHwVS1T7DV4EHbBaELmGRhnziQnkdwDKWW8Bc3nDb47tJeHrvjhm1a7Pk9H5XFwVunzSJW",
  "key30": "4LjeEKfhVBYFvffBVcCCeyKynLDN5cGva9zV4kLbgBCiHtDS8vSPkAwP6qMzB4gor2yUYzSJceFWNGmy6puETtPY",
  "key31": "2UHw9xCcmD7iikRvreWTBtqK5Cb5EhgVvYEdwqseXJ3CiifGS8QywAab51ZifxwcMEe575hSupAkzptn6VLgNZkB",
  "key32": "67FMtnywMxjTV7LnGWJN9E5Wf36c3345Wr9VcTQEVAuHG8o7fs3S4ccSynbHMUEWj8GR1ZCvGBVTtnboFFcyqM5q",
  "key33": "3MvaYR2snYtVc3NyET7UwsfzKgF9uqDuTXjmuYg1cupo2p7KGqnZANpaWMoQiH2wRMb9xccAU765TXe8RSn5WA6Z",
  "key34": "5oWGeLLPjF9vLXXHcoq1rL2YMonPduazifrr13EyEv45Ybaw4BL9oCszZNueinynwxAcrkjuqYe6s2pUGQiVBHhd",
  "key35": "5shp53wyCv6LnfKnDKoaHdGfxGnjJutRrz73MvEnBH9ePsDCQMcX4qFnQKYBLGVnuA6mE1YtmPSYwbbtEgCSoaPD",
  "key36": "54yJgVwvFF3G1NnasFo8JZqx93Pd2wFjAUoHKQGZWWN1pm557ti3rQpf5zPCvQYVghXMjEcGypcKgSwYuu6rPPKJ",
  "key37": "4PTvJ8a2pVX6Q4eXdeVqevhZvFpKiyeV6JWn5tu1NV1JQr6ppqB1MPFV8pZM8ZNMDBRG8aMBXBtocvDTs23mjDsM",
  "key38": "4qBaQurobqCctP88jntsmstQGU4t3F17EV4vqDrpcXXfJcHsGoPbhXvQK554cegjfjfv42Jfu7vibmjiTXEwvN9x",
  "key39": "3JvAthCbj3wwNcWSC9mjKkX5crvRWuXq7oBjS6hfnHesnyKbGNBfXkGagkDBnN3ABoQgaKrBq7of4Gsbhx6bCFHi"
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
