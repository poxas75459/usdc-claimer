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
    "2ovENxAmLG5fReDxDBDr3VgszhSwiNHy9a5przftc6F8zFVVKatMedeZjPwT3XiVASdTow7gwHtn3P5cX61x6KKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4xYviihwxo5SJwbhF2KW6myiDvskYToDpua8SMVvggFPvKpLhgmMPuDUK9xA8fWRW9P8kdoiZ8kLvghpsQRt3E",
  "key1": "3vhEx5dVsHfRCXwDbUQ97mXUmxZeozfUHLR4Dq6pqbb6e7Mh5T1osuK667mEt4SMuuXgS3mPvAHQdzTKT3bdBuwG",
  "key2": "GoEqr7wZZojhX8tv9tuKCogR7KZNmDqQyiEwBHmk9wFJMntDTHjTQk1qHJ4ergqoRVVVWHguXXwWpRADpquRbd2",
  "key3": "2E8jh5P3qkFyDUiZvynCueDjuhr6fZ1spxddS4hfD7jqC71kTUeZ3UswsBgGhGtvMt7fPWefDWvBjLTTdk5cxz58",
  "key4": "2vBY6CMswiMgPjDrSNrxPbsrQyAzPu2dLc67shcr5f8SnMivfwgU5PNL7EHWdgLqccc5CkbsqfRhoL2XnPLfL9VJ",
  "key5": "ehj6XZFbQzbvwy8uEsceSVbBwcfLwRPjWaUiHVXi3g49D2KKqMYf42f287VSXHEq43cN9N4DcBEZt7iecaBa5dB",
  "key6": "34HaeT1vW7MjAkKwXx8A7Bhxiw6YYab4X3mxAZqGtHxMoRT7Cy3BAFbMbk8quBv2Sh8dLdkw5CxqpTNLDdiuZ5nJ",
  "key7": "4WVWEP1psx56fWPpToojAYfH8GmZFPBVr8h9DyfqRjKRFpmfP1DTtuGikV3GJbFvH7mUZkf5z7i6dPTBWumeB62b",
  "key8": "4LDk4QaA6ByqckfNXijANLd9GDzX6tzrFaCUG8ECXtEbw6fd85j4Xa9rCm9E6KANb3Nnkn7AgcgHvRDADNrGmZxm",
  "key9": "4CgikUC3kkpCM8MDNvMwH9hAd48aTy42Ns4CYsuyAMCDR3EyNvBZMb1D3pcraGk38Wm5ZuNDcFEVRdEfhRMmFrBo",
  "key10": "1Mqq3UXXZ79tTLgqocq6mXdyhp9Dg3kn7jFTxWmbrn1Vwo9GnezpxxterUcvinTtCs7scrxJ718psNErv6wgrs5",
  "key11": "4H4ni5xtBhhsHABs4ETsxo7b2hgeKa55XYDjFJntNvhPgCoZumZPDj6Dnc73f4cnKKg4NPCpyVCBAq27eRDRmeeV",
  "key12": "2tLMpRxkBLTCfukHYVdKKyKXzBtbNNPQs4adrdra4pjdk3nnGZXLWP3bbvtf3oSxJb5XUsAMjk76ZTSq6veq2R8C",
  "key13": "4LTYHZatuFSnzmxG3GqRS5spZEQ9CHGabALbmCajPHvUw7TookE46mYmiL4aLkrEJYqWyKCuctNemPa8kHkjkbo1",
  "key14": "4fCdUK5gk9UojVyYthmFAN9eitcGcbFZd2knhKQfaotX5NN4Km4vxd5iu2YPbkmRJB463iLkjbFTcMVP1nBNZsLp",
  "key15": "PMfTjPES6Cbo3YJMEsJcU4Qp1pjcwam1NARGXieKAkQaHGKyJp38u5Nz45HJZEAcqKE1DKjTxivV5PLhJtC6akz",
  "key16": "37U2NpWABFi6Y1mA7tSKeBvh3CuKR69tDQMXdnNuvceMaJJ4TNWCUW2B8gnZ74CUpZAn9kvfDXxHtWZ8ABDU8rxr",
  "key17": "5ozMtHHD4DdbpL2kJG4123hBQwUa5BLnCuWEJL9Ambnco2fy5ptupxAxfjSbxvKgKDUW8NXxAWDgBUr7sgiiXnac",
  "key18": "oCro1VT1omENZusSMbyGhZD4zk5yN3UsrVBmubWoe1b96dZYCaqyWvBdEyzvmqb6GKc39V6nGxAcmn9BwqjgDPu",
  "key19": "3GWKv48uwf9eYp1XcZqv3p4eB9MF4BKUbFwrp7RARysN787GHJ7tzLwk8HZGz1WXXJz11sf6dqeGRUQJbZ1HJvdc",
  "key20": "224cZUbuxp12GMdzjLmcW6pBpK7yAgYZAY31wqi1LeSpHsMyTb7EQJRgzHef5BwYp2B84t8Bd6R3YwFNS7UgrMEg",
  "key21": "2usQnodYBfAMQwuwppD4nEu29eQiXSNiLLX9Wv5TUwCoAsKV7MQBURtyriHNiHwuXVDqHKppQcsi6ayjpUPZCMzq",
  "key22": "2s8BAfG96FXHCQd8kj1PqwHHBJ9rJhws38c8jkULZmcieoNHP294DTdBPDiCmtBXpqTYGjLxkUjqeav6qJLpSYVg",
  "key23": "4Edib8iKQ7FZAQe21YeyfSSu99egJynKPnkSryS5bGrscGJuyXzZVDT5MF1KZQv2o2pLyk1GnWLzau9eaBzhY4Rd",
  "key24": "cVjVD59LqT2aLHXt9UMsr5SFL9b1qvpRXCnfcucEzR58FRYB3TDKCgkb53FZNaxQbSCVwFNK5Mc8jcr3Nq5qbNb",
  "key25": "27CvXT2fjtKWshhUZdDnDXHRaFi3dxo8iae3dKDWnnqZoDncxiFtbx5kB4YPAee7G7dDgo4uNWCdH3Nus2xd2YW5",
  "key26": "48NToSXjAZSSbg52uePJb7DKdLo5tFmeoyMeXZMnDhFyAU4wJEKTNnVDHF245iV3sPKdh7LgywqZDTyVQh1mkri2",
  "key27": "4awXFGkQQfpPz4hBUcGNJFh6inFQihLzeFhgDGrtpuLh4Y1hPwCCQ9g8HmepdGBiuy12zMb6dYYueDuHcessJ3yb"
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
