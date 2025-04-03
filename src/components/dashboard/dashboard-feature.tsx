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
    "2THCBnC7DaDgGm3KbRBvZcu7reLwyUe4itAij7xc7b76DdhMWrabEjcyGuDLMkoj7Ed1qQkWbAkTgMBbHkPKhLNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kaNZFYiWpUwdLL3wnYobFzQF9zLhLEHNd9y4rg87uuUB5uqzsgmtRB4yPCSQqSQici7oLmYgkDvovWkVKYQw2Tc",
  "key1": "4pLdW8dYE9MN9kHUMXjdTyQTrfB5k6X4xDf6fQe1pG4RwHY2i9SkWJ38t5d2RW3XnLNoYjEMzksYp27V3EdncwP1",
  "key2": "4ue8mPEwdsY6TTeuHQPnpeK6Evqkw9p64Co4873GGp81pyqMnaw9ZebArX7X8ekWjuczWLeoGiJABMaQGjaFjicr",
  "key3": "5meNwExSu4ZhECFZm8pijUxjvwMzVNfemjWH1bcS5VdKiM2Xpa2RiAwBP6XmJZhnQtfUKZQwYrbQPFmYRrBSgCtv",
  "key4": "2oSGmnVz2SFPPAX9PiMi9RfqXkXKEyZJbCMgxPk7ko8gUBJArYuoPzb7KBBGEwSy8qbK2UsWhMUz9bubWnLoMMyt",
  "key5": "3qTSW45DShaqmmNEMC1e4WVyWms2NWnX5nsSRZ889QDZwNvjN9vSmAEQJp4X65fGrnNcMFb9BTcGUVRbeNzoinYq",
  "key6": "4iv2c77U9PeLBB4KHapGBtF86ji6jDZVkrdMpXLMgKsNDvJ85hwq6v4gR5MoxJ6gDvJJnvYdEkA1NGGS5vM4Ae9L",
  "key7": "D2VRXx5RFvNH9b6AHynRVwCjLiMB3JwwSANJRmQWtW6PWVG8bA3mffhDyzffPA5e7UBHwooPSMt4cVRhDUK3PqA",
  "key8": "46K7YNPrB8zimgtHBF744TskAdffwKxcbkR4Rqmmo7vCLoXdHpvpoyiMsc4K7RfhfdnaViqmAwmuoc19yMqs9Etn",
  "key9": "29whTksQZxmwSokaH77oXLbMJHp4xVmzxptvFEqz9N7Xcy22VPBJ471tTpyW3mWRHsP8w5fWYeMKqysbXHFa1Fzq",
  "key10": "4RwYBCE25UFhGm9cmanGiuvHMwiRsPgda1WjQMzXtow6Jz4Z4erXyZmBZiVaDQXEzbHBf4i9PKhjo5AiVDtt4gLH",
  "key11": "fvYYbiie9WBKQn54wPabvipowo1fWB4YvSytrBJD5GBvHcFn3gm3qy9EJQuVj7i5sRxwTrqv1871cZkWzHEC7XT",
  "key12": "KwsQV3p8gg16FWt1naTnQ7R3dB95GCu6Bey18qrMZAYAXLtB53r8rsowdVBiwGo5y6PDtgDtT4YXGffeVMJJ28e",
  "key13": "5FiZ4n54KEYqo69TB4VA7yniHExECuNvcY5DVmkqW9C9n6ZL9Ye83Wva8zTPnK6yfJYsVwxkc3XY5yfBHCwkAQ2B",
  "key14": "4jUJBXEaCRKZDrsMvtGpvrHv7K9GYkruAQShagGh4oUqhrzDs7nfvf4JFgxweemky9inyJkup6FzmiJFwGKTgS9j",
  "key15": "4ytesSTvwc6zo1Wpe3b9zGwHLKPKMhvJH5SY5bvECiU9jDnzowDu6e4pEu8a2XFeSoP7Znr7uFS9zVwBHGHdroxR",
  "key16": "4iCqa4mmZJa59j5DnjWLUtMeajLXZKqVVebsSFpAX8oysyEbA5UMKHKqF3MK41QmtbyzmfVn28EjRWoYgibzYzxu",
  "key17": "2QVsNE7R41hwUJTwV7bipGFqHyoRPRtu3EZK8HKjrgncrL6rH1xTFb92Mpv3iFsocuerVHVM4gCJi1B2RZLsm1ZL",
  "key18": "3ns479zL348FfoUWsY8SuVHfsMUxNXPCfMeKpL3y535cCRnGWpDEA6FSfQgdemYnWxQzk47AdEP27VKLy8Wc8yR1",
  "key19": "35cKXZfRZJnWMP91bP8kPVBE91vKixcjf6V96QhWh38TS7LCS5gdnK41f6zQ8wcDLP373vRMZVWbTyLLnck7HWXw",
  "key20": "5oznA7wKC4SrkjRk6YaJWoRQdiTtwsNzzFUD55CXBA8ouqrSEMDVdsMSGFn1KbL3s2kgA84HrG7MMb3vQwxtZqSJ",
  "key21": "3ziyfZBEAKq3WQ9T52VvTyxDZgmpZXqkiWPKZzoSyMoH7iTGhkaN6LsK9QnVh4SBjbAC5q3MDPC8Uqznmv6Pwgz7",
  "key22": "kzR5x5t8ucmNkX2FbzXGUdocMxDezRaLdj41LKYNq1uxi3W8uCJS87qkBXwBmLMz7KrZveudHBPV9pxFUZxutTX",
  "key23": "7QfVt5pBBRqQA969pNx8SxCSYXSAbdVs163PtovVMNaxyAwsbz5GMzQGmoWUe6fBLRSHVeo8bkEk7cR2FrcegLC",
  "key24": "wkPfZYUHTrThodnmTBvJ5Dc2NK7DmuFc6jdB6244FcB5qweUM732sDFftiQoiSBQFN9jW1PscnUL9ayDfvbFfEL",
  "key25": "3ENymX6DADqFHyEzmbuJLh5VBUq3NMZivNqciySBDNzRAkBrHUcWBUycrL849CGJHMESyQoKL9yyECivnJJtczsD",
  "key26": "RKGLcTdNpFofSCSMj2CAPv6PDKAmzYRypRQQ1HrW9ik495CESY9jVSUU5nR7G6pwTZjLe2ZVzVeVrqLkeUputZF",
  "key27": "NhYycXR7T9antkM3y9ZjtGXyPZAZiTMYnmsNuRQ89P8bNxepTXFYSUavhJB9DkWfjGZaZeMt4r3cBX9xWpNNgAG",
  "key28": "62Uwcw1V4SMf7NsNysNRQhNWAjRM2UgdkN5HgDZ9ck5KtoAftX5BDHSKKqZ3QvumD8qXqSAJMyxzHg5e4oTndRUH",
  "key29": "5bEQMz2YYd4WUcR8M5y3mCw1VQuoRbH6YVj3uiv8SzfaGy4W2mpLd1rfYPxwxTyicgmqU13GP9HP6zHfiSHWhk9n"
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
