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
    "5pvmH2xGEmpzsBiJj7GVofYNotLbSNR3JUmPnFJf5Ab6zrSXnNYKQK5r1TrhwPxin75ixw4ZJefZJLfdQmUp138E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8k1KH8RydQbX67G8CaBsLDQiAQMi9GBc9cyNLiYxpFYBz7qqDxbSDM5tw7y5FUeEAzW7g6XE8FPgLSJWHBo4SU",
  "key1": "5wZRufqUjs5iZdCjZsUP2wcDjV42SfVQTEWAyJxoPrfQP2nrKeaTgDgU83BezJgmCVk9DHUgGqT45bsJctEsbbT7",
  "key2": "2z4kf6LFfTKPcDukU9cMwypXP2SFbiozxqwcofkLqbD4MLwjbdFzh1ZSc1EeTTnqJVeo1ztDdFbCXtzGVAGwLgSA",
  "key3": "4ytfgQLDtjbEZos6ftE6wCLxMbiYPYr8Svbu1eBREeNrarEbzjmVRgUkZvm29oU8j5qqYRnUifeB246HqE7bkWpG",
  "key4": "615GArMAxGQWNXgHRdxY2sZqQo7JPmWPU2BsT7y1ifUKs6VDK7PEKax3yM3rWovDgE2NiNFKSQm77PrFmVGjhkFr",
  "key5": "2j9eLnSwFTr6foygpuWDBGtNqei2WYtm3kzAFy8DJnAg7hNqh9b6ghhffMciDRmLhsdCzv8mLMMpEGWiJpzqGRBo",
  "key6": "5NmS4ndj7xHyUf2hyF74JS9T81AvaXs3iZPs3dJed3APonrgiuFrDJxCYYZmCX7My2LB595gLc7Bs4RcRnQgnY3U",
  "key7": "XeVQAQKx4zJDVY21ZriBbT6wqawAUNZ9mALEbdx64H78UKknUnQ1efeWoe45w8SizfvAbnMM3dMYsZXMeeU7x7J",
  "key8": "2RN2FNni4RLc3FSdJrEEJrdUxGGHH7H3mZTKTHv4BpyPtiKG74jQJfnSRoD1U36Nx8RrQ9GMiNWh5DkFcweAGp5e",
  "key9": "3u81zx3fdmiv1oMHTrPMgqcYBfuJ23zGtfcPUjvvZCbkAJXqTkxFC2KhxHdEKGMZf2Wa4MBkqcrENmzneyYQDgjz",
  "key10": "WAqw5N7U9rj4J6U9UaCpZ9fkfgcuPPZC3Lqko9eB5w6fC6hV1cpHbYfx9ntvxip55eFGxSXqb1tqf9jWjmSpV91",
  "key11": "4TmMivrGXxMVYitCnXGimA8BZdjJJ1V9jNoyEVkzoEdbBMh5Ccp7vDyr51Asxz2DU6PdJVwd6e1mWxjVsVEqbcyk",
  "key12": "2gmoU2xgLSdLhB47AYh5qe9kaefJtnKBaSpVwtNL5i8R4u1A61zyQQfkNSirj664u6wPjZC9vSxGJW9hi1ppUcnn",
  "key13": "3SM6WUdBtuKGtoU4rNvPkNyYF9qzayh8KnrJuu1NhCX14sgUBh1XfcUTMmkrKxgNuQ3yNcUdFTE5DoizZci4WtRM",
  "key14": "4wKE81T7QbqiKhPvcrBN5EWRVR9UhXu6oifvCrxjNaAPNkdudL7ToT6S3C4tH7T7WU7YV1AX1TyMSf1cuFkRW84j",
  "key15": "2XXPN6cFpzMGNGtuRegzu32ME9VdvGagBGD3k6C2WdKbmD559Sb13v8cee6QzUqToPkhL9dTj6ZkLhZrJsTDmCGw",
  "key16": "Uw2bV4aEYnRtPw4gv6sR7oVgvJSfeynu2enDsJgbJ1av3688w3Ugpaqjcm9nrFbtLD6xkiJau9xrY3XTwDpyQiy",
  "key17": "9p6G66SK6kLJj3p9BMCY5UympJMftFXex9QYp7WS5VZ3txrKwNvNRqjfGA7iE76YgiVbqfJYJbUMygCeUZ4hPqC",
  "key18": "5h24buQEnN5j152F6U7vxA55AJUFakuxGy6LxjnuqUKEgnLkSrE7S6CCPtArRivDtKz8sfQPGN8UsANaqetXAPHP",
  "key19": "2FMTqa4HAn5isMvYNfMewLkFZM3pePZcy9FedcMs9zXb8MoTFaKXGzRvKfHi834PbKH6D8gf5JvtjRUrE8fpM3Dv",
  "key20": "5g6uvbqNxCkvGiK6ZtZ3i2pYQ7h4UxsekpjZtkhBars5CobNhX2diFWepJSePUo6qdJnurcK6tZUVTsm45KxTqFq",
  "key21": "493VPkNNEpLpsPXRCQ5sbeUeGDG2fGrqPCGxCebUXkJsvrLnLospAdZZZ56cj9Tdnx1ea9zbZgmo9NhNLCurvT1L",
  "key22": "4WwkTojqVaZ4uSJYN7YTgBthr9iqYKNnVoAHBMjgV6HQRUBArVhVgkeLWEz2CoXyVsCbCo26ZXf6QWXY9RnhSFe7",
  "key23": "3v1XX2pweneaCaqvwnaG96n9YLZqpqwpxsmUUfFbe9G7gRF1ctHerrKc2ZRY7bUVc1uCUhtKrxrpPnXWgNYwDwgB",
  "key24": "3gVoo9HodtwdDJzzs5EJxhAcnRCUmk4bxYNwAExdfT5cZCw6eKxVe77kb6qKULK3VCDZvSeRpWQ73oarh5TDyBT8",
  "key25": "4GdVxv1XmunvbTafpMWVgR9CycqjzVXEscJW24b4WcoJAn7hYMt7vJwDGHN1xf5xkBWLJdVTS6igAc7QLKYfapje",
  "key26": "4mSdz1z2N2Lm4cwTiJMQDc9NFNT6gviBCBVRRtcgpgNhqXVsu8LAQovwuy3KYGot1z5uuYteQHNDVBt2nuDCTugy",
  "key27": "jM4ZwT65PPrbt2rG4xoDpuvS1s7fgDwTNLAYP2mvr53g5yJmay6PeMcy1NU95Cepmr3MWWBZ1XHkgLYy6UJBTDs",
  "key28": "58HjPjqau515SUG8NRfWErMhbL3eMj2uq75BKmZWZ9N7PVAHYPMFtHScSKGhUDNJfttVPnxLMxPJSVG1FVzPqXEx",
  "key29": "2dyYc1teW3i1tyxAQcVFXyWn4goei1p88KPWrQGNbrDZN9x5w1YNRHeipnfLRo1rPfW8mjUWkLLEQaQLf3UbdgFu",
  "key30": "5vMsou45oe3pQqu2aZ8z9fgJi8pe4vejpJjyzXqTgPb7gVLJszRi4WfaDxsN4PARfsnDekToNHp25CgGxJBz7zkG",
  "key31": "4m5sswY2kmCBrZBiLwSGbyweURyoqhhgEc7Bh4BZ8utdxXiRvrcq3hbTPGTFQtShzxngSbU7dTPyiY1ToDZ2rsHp",
  "key32": "4AjrowWEjgAJX27XafpPjvpdypYEjks4sKFvGFSH3jHpRD5aUEHbEoBemTwjeLM58FvDtbkMZjZXaVP5TqXPxJ68",
  "key33": "4Tyh8dK92cntJ5B6JoVvg9gXa9s2fTE7WTGvZX46PR9EEMyWbE2q6LkBVdahgGzm76NZhqzqCDp4oKpoNVo5VQm5",
  "key34": "5S7erhEJ1wqaxHEbw9uYm2qUk8bUYgccTpCBoBVAXzKiNgQjpnHtwGCdP9mKUKpnFGGWfiYTpieEoVp1mGPyCrf1",
  "key35": "558KjYFryNM2K2hZyd4LfM8QrwtkikE3APACbHZn83P7f7w7dVLBiE7KUsiiqNeXWziPx4BMqrfftCP3M6kEzTt5"
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
