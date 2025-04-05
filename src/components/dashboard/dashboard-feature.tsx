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
    "7BFNZHHDpPRmhfYedwpeUZ78gN5tcbFgRNuaCLhbj2UQAeuci2UwxdEVrL6Dnnr7qS64ZqtjN49DRr1kBBSfy6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWKgTxFR1FbCvsiWYge9VFxE915LeaqadzjVUHws4xYNs2tFifYY3Dz98CC3qeMxZjgPqoVBza4uskqnNdQL4x7",
  "key1": "4PqPSwTn6oHS5onwbnbhQsshhsT5XnGJz1V8mWue4xKcadQbJcYxwkNkSghNP2mp39X47kCtqQAUpZRxR9vKuviK",
  "key2": "3tsbwMcXHXrxTR5D5A4rcVfs3wXwPRkJ35RG5dn92LcLDBtXLTRfkBDEdbTFCgab4c5zVGfDp1UYuVzv2gsQCuse",
  "key3": "4MHMKKukhDUzypwNjnjcK2eaJrwPDDVP8gRHHadWkUJeXLdsMtSEup1sYK4cr5AFAHcEdQrUfgDTg9rfLbeu73og",
  "key4": "LaQHDJHfWwS6BaScXfxZVWyc9Scacm7RiWQZZifCreYGFooEjvK7aJnhWCbkvwWASzCfzVu6Tkv2gfdK65iogJp",
  "key5": "4qr761jrs9oEbiVCTSKYcKSRJHXPDaXFHk3mYf1whQEVeXgiMfbV9bPUuLS3WvUpUMUXajacDSMg9iVPT2MzwPME",
  "key6": "3a7ZMN6gXT2Ry19xE8gdzhonqTfTETfjYbyBckhbh5w7NJMUcuqawNTuhouymHeE6CYXicBDajb1Zac9c5cn9vw1",
  "key7": "4mKbKuDv54aGEem5uyBLuFHGxFZLxE63zRyL7pSMtGrgbfLZessowgADQ1TCuL3nfVDkd9WJfF3krg4gik6AyaJe",
  "key8": "2NrBj2HXSB4hVPh8FiQSFQQdUgPDZEfmN7tMfbKBkb2zkqmeXY83DEWmsTejgGAjDVwiy8dDWM2Anhi6D2CLoC4b",
  "key9": "3a1ZjSP8nJnsP2K4jUdpTFZQUfk4qxn3pvr6brDLX6EqBP3UwyFzRaVqRTfJ8fPcSCNuXCXPRbj1Q7Ye8q6n1TAt",
  "key10": "2Zzng7xtXr8HCkkK7B4jaSdkEXVpYd7NJFEvjvAmJQCC29MgE6uw4HJv9mKqqNYZHFhKH8LzPjLj9MWxTPsUa5Qg",
  "key11": "4ArLKZLVnW6Eou4RYC3uhTCJpF4RFKAjCdqQdVR4MGfYFXZqpx5F8rxEHLpxkU91dyvRDGgog7PN27PAW3em3EA7",
  "key12": "4XVh4GTA5ntwGnLYiMmwAFEi6qU4fr1CoTMDjCcY24QuHvyjPAGiECwj5NCSpAZ7viEud2w2CKbxfYb7WmjY1cUV",
  "key13": "45mfZ3NtsGCgwm7AHQ2qg6kX9VqkqDSa7xowhbsBLCHqejaiNb6cUx5Ue8daBMEPCWBWwK3RYv8xQ83ReUKmvwmx",
  "key14": "b26RF1N8aSViVvqXm61i3iEhV7sNrDvdQtYSPKvrYyHXH5t7DE9VFojtLPhjYcVtnDU6T65vGCMWFDV1VUxxbxy",
  "key15": "5UbwsM3sCsdBJybTMMRbZnJW6J3ARiBeaRdeGDp29FZRDKmBai2aHszSHngnhf6C5VFhifzs7n7kZGUzTxoj8CN7",
  "key16": "3hmZprbyoDdBVymbcDzLhBXwE9V752tHzEKhqjyXCnz3DZ7A5m6qokCZ66Nj7wQR7JZErHeKJWmW2QK7gnCdy87w",
  "key17": "26Zt1o8vacW1iay22F1TcwQtJ2pmiVE7mY7ZRDaBuNNdQHUJz1raYSNzrQ7iFudDAMS3nYgpMmpvX29NAP4GsfmY",
  "key18": "3vE7er5v81u8zMrnFwM6Uy1W5uG3pKStHzYNz9Ux4t5FttCfkWNoJoiURMRdKJLg4AwW8VxTpZakcv8P4zm2diSB",
  "key19": "27HzPc5wVbyh6bHFZnx4vDRSebU51w8P5PU51v9KrHioocp1jUpZrUECY5Je558AcCT6gqY59xGEDQqKqHEnHXLk",
  "key20": "3n3CTomyhHfV6FrSAnpcWWc5DwzYgxGWx4vJEpwBpyMeJWET6uuzGbvRRdrY6Lz78WxqfpC4n5f1rKQSPodM46cD",
  "key21": "9Qq9uvCVixqxF5Ypwh3hvjcsCT1AppY2uQvLGZqBuWrHw4JkKCULayPyRFmCz56pbwgigbXXd9tNVjx23ffinuM",
  "key22": "3pANXe31iLS6qX6iygnujDDnYtdE4EEKcjvBNWBUPnnsnzWt1FG5uw4PeyvWgjXnq38AA8r24oRxri6BRnCXA7iW",
  "key23": "m3YsVR5NEQPEfWp5WGdhvk9gMxDfEDvjNeMA7GPpqzCTxR6ugUgwQ1uShZD5axqHvWGsmdZuyBTYngEaWvKCbTa",
  "key24": "35YdtatbJZ2w5VsBv7ihoMFzjvyidYQLVHAMEaa379p5okWPztus26hbbjQqnHqQERzefiCFCEYHmFc9P9QzeqpF",
  "key25": "y8PvidAUvGECnkEEThBJ2uofk52bPNWhWRvDFcP2hzBegWJZmdVWLkHvzF6ddTZngaJSeDZc81U3nPWTZ7yL3tJ",
  "key26": "2mRZLFzeMyhuC62QAQr7msc22Z3pEVhQeMQo3RCxJ6dR3UB5YFFksGopqWC4jnSxgi8zsqeCaHp93d1TvsQXRtmX",
  "key27": "2GiVGXqLiCqaKU8omvjQjXHmELuPkc53Zs2foZ1z7xCongp6dyocmjEDB6qTPzHvhMYuk5DGLVvSsip4pFE8us5a",
  "key28": "5JiVQ4XGpHYWwNp6ZGZksrn2AYpRW3NAP3ADMhgChVW6AgbJfm4hv7VJ7PBb9mDsWZTyap2ionyn5uFbGXYaEC3P",
  "key29": "324rCeMk5rETbEwbXgHAkGVGruTTPhkZ8rotmi19Z1rMeR6VfSuKyGNeCRoo1QVAiWpmKQSC1Fkuv9Xafu8ab8J7",
  "key30": "5mYKaF8rqXkD2RzxheVerd2XS3PHAfZawZWCzRE3VaH8hT6mTVcFosWDj22h21nBT65nVPMU2cbcupLDCVG6AuuD",
  "key31": "4uu3kkq9x5yp9gehcwUw5NwJKeS4RGnwK3ws2GunSu5fWaRyTbKuo6tiZFSRS2vyLaCBBcUc3wYgbo252XW9Ajg2",
  "key32": "5Bipm7SwwvCUYHaYJjmApjEW8JXt7dNhSjDgqHYkdKLdd7dYeFprVALfooB8eEu9QWamsVi8oeQ2nyvR1yMqE6A"
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
