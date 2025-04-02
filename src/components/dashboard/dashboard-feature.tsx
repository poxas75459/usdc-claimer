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
    "4N7Vf5yL3ZtmJLkahnQABCH8UkNAVoS1Ju17cxpXwnt49niPP97AvEXe3bsxw1fkvdnfLyb72Bpg8x8qaXkqNyBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGVvLMLr3w9jQENVjH5bcSj1TvHShczFFE2WGFdrwmddSJezatwPXFPauKy2vustQoAgiUK8oFkBcF9qvBJiQEb",
  "key1": "4krz3q2bbjib8hkXTaqD99BGB3sAkrmtM7WYjmauZKRhcoSmWFC9wUYxAMzPP5CDgQq8BnTqmVPq6CzK9Gg1rznY",
  "key2": "2W2VwWHwpe44rrSbgKcoUtGCriFodoui7rdfxb9i3dfupDrX4ZSaM2Ba2JpdianyNA6n76UkfwiVPZfozqzQQhwg",
  "key3": "2UoXnLM4hnDQ11yxAQzb5ZAR9bVXTEi1rAG3pKqXyJeZYQV7C4Se5EXQU4D8VUWhxef4ExwfTKURPopM2J8393xr",
  "key4": "zdhsYbNFWDTw324AbByMo1885fezXyjE9PGJo7sv1vsH4SnPRQcJuz1Fx9AaWtEL78mGST47BLXBNv7WrJcfFHK",
  "key5": "427fjqZCMGq2xwbvEetHWgfwXmdE7QhBsG15Bk5fGwsdmfvP5F21yVF8g4AJAKopwnVeJrUF869ek8eVA2e9LvyP",
  "key6": "3DVPZ9K9hGLradFrsgH18p49RdsPDZWG9Cd8xd27BmxM8b86YhDmSc8FKd6rwYjJMy3x9GpPy1JvQwa2mv68WpSc",
  "key7": "bwnRyXSarEnLSSzjSFBpgFbpMEx7dB9bM59rcuNpCdXFSktb1SLmCPQZXKW3WYxkmRcwFghHDA7RWAYkPkauq5X",
  "key8": "342KbGPq1cnVhjjtDSymF4hzgYbcW6Z4MaxkEKPAiaJUU3fS5GF3wewZJB9fyZ52oSrCHfQghsugNMeHSH6aD83h",
  "key9": "4KfM85jdZTuMidYFATQKzDBhkb4vr2hjZ7pMFnKtVVjKpThWyUSGGyis84gqo4vSNDpFoRG118tpHv57NfchnjtJ",
  "key10": "64ys8Ya8PxzsRX4gkGEdm14KciGmoHtKTVkU9YzTVP7sreSBV4jAV1Af3hg2sbBYqPPVzMfCDdbUEfzuc6UnPaxv",
  "key11": "BDxkHjoF3DZToDajy72AsbjVgS54n36PZoNKsX8iRJ4H8vxH8JiktvzUuhnCcRqWAkUyQLhydPZ7tRGzZfvYkKM",
  "key12": "2CxPPsfUfqALZ6fhoVsUdQHRcpsk7yXCaKpcjM7Yp5m7pVsYM59T5MkZzxRiSX4zbhW1So2MZ4Aa4ztdTH4w9tCz",
  "key13": "2d1Z3atEArnbkxzJTTku51DLsv3iMA2ULfm5DRvBSNQsmQHPN7Z1SA1W4yqn18bvUvs5QREKqSsUDUE8D1wP7DSe",
  "key14": "2fEmhi6emBtmBwwrcF7zLhzPKzE8CmXa1QUXQKFFW6Eyw8TmYqJaJ9SNY8MQTCRJrGNtd8qHaqBXnJtN6X8Q1Ni4",
  "key15": "4T7W7rdJuHpb1QiFtgqrTwGFJXWMA7dHwkxdhZiS32Vo7f5ezXCttztwfwNdoDuMnHC2vv3SjarBCgjVZpQfELzC",
  "key16": "5Hw1CEmYP41PpjPdoAhwHeKHyAnjCg9VfWzhLTkLgjcHwYx9ULFxza6Mr9Zw3NcWa2AJgrEZVw5ekoWZXWaU14AT",
  "key17": "2SZfJBKw5HbYEMJFkDjkisEvdvN4txzz482Fb4RpfnMrfexttvWY2pu2c7g3oigJ5uBkf3QgotTp6yQwQbx12GAA",
  "key18": "5RD2igw8muX2GhP9KMHncDPet4zASVXhojvm5CNpbyHt56Kvtz9D7TBMvGh1ib4tVY956bJD8RF2zgBAHsUsA5qW",
  "key19": "2si87M5i3TFxSmqfwBWjN5FU4vqwc8RiZJFhd2WiTqTZicn6WvC2TQNp5xnWSVrLG8nMXoAJfKutjwg3T1n9NQwC",
  "key20": "3no6oCWFKF9QJMqE3evBtbbB9vMXwy3NJRHBpiCWzFD8hJKofhn6x9cjEPwAugHuEaKcT7z1sU1NkNaA9u7u5NwB",
  "key21": "4NpnKRGgP4gCnSmh5EUwgnuoArKAx8Cn7Uy4BhRyVa9ViANy8ufyqLrUrqHwpafg4BBzJijTwByNkjC1hxwtWjNe",
  "key22": "2pENjbAjVr8FT8iH1TxYPpk5XseTXbUWVNm85ULy9XFu1axsukcx1xFNdpWfaf9GGogpCXe5B4SmKUyNmtfXMR9o",
  "key23": "286n3VVkKiFzUYkv2viijj8v48MxxMvoKcF4bVq1fhcHuzzDawGCRtg8DoqVhdB7ZVRXfUmqnd13LEkSuLg7UsWe",
  "key24": "4uGnceytxg9qpCQHkpbiKTnBFxaK8jP3b6pzNKybDVRysQTTSajVKMMkY9u5pVsccVbvoUP96GQEcgV4f1H7EAp5"
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
