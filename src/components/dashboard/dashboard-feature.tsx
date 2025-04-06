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
    "5HdESvyUxZGPHTq3hN8DKyfq2rtsVRCVbET3QcZvdFakUNhL67HSM3tTGxZK6YCYFQeSJyFANHwpxZTtV8u4whgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jPnMJyB5KN7dVAJYLsNVCKCRNnes7kYEnTctw6zr9uCdKM9WqosB8oUe85wfVFk83aRmCJqCbm4W9tdj5ks9yu2",
  "key1": "5wMHe8Z6zgVo37qnL8fKmRoJKdD6Yhkz2sgyoqAtLSb84G82W4TyBusQ52Lb8xqQ9QJ2Y9V7cKyrhj5N23G5ZVhB",
  "key2": "33hkYNHin2d5dvqc59ttik8GmMs4AYkNeQyBrZKm9tdcQcqaUunFeiEeCrHRGBujRgSYtG48kaEJ6kBxtRsSR1Wy",
  "key3": "2iVrARjCpw9fjsHtABUFNrwzS1ra9oC4G5ZqDMthj2tZr9d56yiYy4D3ENxHaXqPqEQhUAGFWDKZvfi34o3GLXu3",
  "key4": "CMZsggLn1b1hUjDVaR8KVTsiEZTYTgJq4mKWMiDBVXfadKs9fuvdxJFDAtmowkb4FvoCu2fU1fs7osZQU29rHGU",
  "key5": "4MxPBnREzCPZpmyw9WNUzRx1jvNSDFx7JHpXRzD7A2PQiKqJkYncJNf7mdhzMd7PFZa41HAYtnqEfbiqXKrHqDhi",
  "key6": "3Psj7tnnRzu9xGstBdM87wnNEYdmYNXaXJCra7BrY8iT8p6z18uRrBJ35EXSX1TysVYPKjb83xjQ4YqeJPx2aFay",
  "key7": "5MHbWHE537RRd9c7wdyvDiqcc4ffkTvygSV5BYgY5pHfXG5bXTziQZH4K1a3cMxsEqETdtMy34WiS2c15uLKivdv",
  "key8": "497cj2DzaAYoJdnLm71oTybLKiYdnee69kPu82C6uQ2zChLCJT45ekvupwghwXfBXR8gDUFS2DqzQeZKdYAJF8BT",
  "key9": "5sgM3FudSvrPRPmJ63LETXCpyboZVUwZDhvCuRPRwgc71iSR2wk9EV4wUtW8fUp8YSaDi1TVZSE8irHoTC1zbF7U",
  "key10": "3Tp7NbkbupoVWJpRZXbWmqxHf4P12AgFZER8vLaZDZCFzJLRShGkpHgpLgxCL5e7vzEnXQxTDziYA1t1qXnhxXW",
  "key11": "3UK9TCcFfEY1TckEWKgkPYRX2rcoTva2qsVJtUrcePknLi9R4amX54vyRMH35SmAMxkEdUSUHARTFWCPQm3uWqES",
  "key12": "5gLuaLez4AmvsGN3qkaFaTuYbHeD8cWx3LuQWBpr54z3D9XqY6cvu5Bqqk3ESWCbA7L3Qz51RJsCWbhW7ZA9QUWw",
  "key13": "4x69yqc7nh2BnYyY82L9NWbm74A18bJBVCwbf6yprMv26AxQC74jVGguC2s5broSNQFkURsFpibSsHhC9YzorCTi",
  "key14": "4L6fFZukj4ssKHfHBpMwcgm6dam9UFenqc1UUzHvm8n41pvjL9Vdzjx2QK4AdnL1exw5sWoHBeamqtCE4vkF4HQZ",
  "key15": "G8PKmwsEn91YN6vsxKPvapnJqy1XodMxv1F9nCTDQnUavxZJkLadRu3WJrVtr6pm8aQgPzvVb4TbCemaMTQi1js",
  "key16": "bhRafsLhAXB9gt6dSiEQeQ1wWHtCM8z5pM3L3u31L2jEXoEfzX3krCvbbAGyi8F4vaz4FEeKE1n39J6xwbsoUbZ",
  "key17": "2xEENcC2ohzCVg3sQ932Uew9U8TmnDiy84WPGd8kHicFJbSqZA6e4EMNq6hcFXu6ZkGi321hmUBy7icWDr9VEE7",
  "key18": "2b5ofymtyX8LDzrM42TH7LySAgShsV6YD5eXGG3uNihXtMufUX5BEJQVA2BHBkRg8EUqHpYE1Z3wBbiTs9SbWnvg",
  "key19": "2TSSCM89gHL7KWrwn8RC14BqhiXUiLXx2dWT1azQqpC4yXycDqJoy5LFkDPRj6DMprWJBFHFe2ySuSVJoMRxAzJs",
  "key20": "25S9xL7fWPzAsALX5myJJQkuXwSyNpBMtafq7spkGmjLE4R7g6ZwUSdidbuM5qiA21awZbFEzwVk6jth6oYe8xoF",
  "key21": "2CcoJg8qUj8b9v13srtMuyFWJ4yQRXckkozoqu8iF6Vam16j5543CMBvFXiwBVKfVYTKFRkS5HYmTgw3sSWGvbrb",
  "key22": "2EWLNWQTDyPpWdyzUW8Z4S5YWKGW5ezn66WqUwRs6z6QZazwxVbzgkjrCcqmcubxHE7r6unsTWFxmUrNG6RNuWa5",
  "key23": "2KbjbovbhJUY7ThLTknEVNhwG6KddRW8teozwPhjnv62ynGoU9ATFNpWt6vF3AbrvC2E3FQhSVZTXQGBJjjswaz1",
  "key24": "XA5TnZuEeg8QNAs7QL5wUJRENV9gTPaDS4dXAsqifaP4FHdDqUzd537TCkxLBsJYwPsaZz2iks9Q15vqjiX3R8Z",
  "key25": "5KHVtez6cTGn2c5PJgVf56zW1z5XzbKXU1Uy2QrZNFq4qdyJQpwE8oLc2AwNicgtpZV84tSDgbu3AN7yNG4fPdRd",
  "key26": "2QEwc5iHj22Wa2EmmJoMzYHYZjtUBbwpVkmvw9jQK64Dii6DLuwTeW6y3ZZVSvtLuAyjvdzUvD5eNisrpghzAQ81",
  "key27": "4Fngkby2gyuaJpQNxkkHLgF17e3QxJE8FsmuUsR7jg34HSxJKto9MwugKPq5yTjA6xFbPnQMoDtQFCUHYo8vk1wj",
  "key28": "4XopnfHvahScNVnr5aNjZVMx12zWXQA75UAF8yLeJvMRCeZir5HDa5Mn2J5VJfhYDrJXnVYFZZEvMfZ1rMXPJczn"
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
