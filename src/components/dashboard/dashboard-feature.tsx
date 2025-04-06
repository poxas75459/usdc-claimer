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
    "2FFjfhNf4TPJbGpKUShkUF54Gbv13gkVpYtipEog58dUh5D5mN9RKjNj3Jdmqw6gFBLUqb3oztfRgBJ1UbLJ85nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMXf3Hotp31xHPaLouKs1FwRzkVSzGn54P9doFbpYoJufryvuHZJE6BGyhucyjrXWnkpaMj1BLnkkNJcBMYUGWE",
  "key1": "2k72WmLfiym3VLRe7A9nzSPHaT9H2K67peh9BarQnZU3Bqj93gZruJvNhM1rh2E7cAd8BJRhkhHkwc7v1NE1kpJQ",
  "key2": "2bjQUbj8EydTJ1KZdxw87CnEkL72P4qLJM2zy5vM6Wt7GmqqyR1a8tw6iHJXMpButARuw9p9wRrPjXnsiqk6tvJZ",
  "key3": "5iZJGfRAdSPNgpz3qKNJddrx15GnSe26C7qjnfX7TKszTmUQKSuFEVnmSSRJhA1CG9qDyk9y2HjjosX4DhofNmE",
  "key4": "3QzxgaoLyHUVbzD8AFtFeC6aWsPaL8X1W5BBTK3ebBJTzPVug7dJARocb6zAusVA1Qm4j1H9JACQKRgc1PeTpYzP",
  "key5": "pC7HNeZWgDpYKy4YMe4qoihifh5SkirJTEB9MeR3nrgzHSexVSmCqnam87pTQQj1tWzhbiqiyhfRujWPBGyz42P",
  "key6": "utUAxkm5NRFTbC6gWNSgwr82fbgjy4EXzj6e3xQvuVDNZ7jbxMML2Dp4Sc6nsZkdGFAdmBD8VQXGRPnoV7SGVhs",
  "key7": "4zVWiFLv8QqrZ9es3cqXqjNkHseBzCniZXtUZMc6nLMEUnRUnfZnv3LXqPux5o927up2aJnDgQoMQDS93ZvHGXub",
  "key8": "4SxGsp56YQr4xJC6YKDcdEVK47zx6k6n6ZuQm4275tZjM4L9YSinKTVPVa9srDYdevVz1pWGKs9qCLwrBhBfsrUr",
  "key9": "2NhQjeVpHQzF4eZEUwurZboQfxXDAtMgJhgjvhHi4qR1GZa6j5JRZtZ718PcPTg6NYCmm9QAwSBWoaXY3t5EvfaQ",
  "key10": "2G68tiuCmQLmxpdgnhG9pShtuZYyZ1oANUtpWRg5nuM2tmFvVubWpsosMzPP7sYrnpRnUVJWYLR1hRWKhgytZ8Fj",
  "key11": "35xBtn2w4xc9d1AGoskFhgB9cLZmJEW9thcFvzVCgQJqoKoCzZRPwJ8yrWjC7R9rrKZPuTvhP6HWNkVDTy8SnXw1",
  "key12": "BhiBb3SrifPMLovDrqeD14PTemu1Kq4tzUKoxn9i4Dv3MMp5AUc6Fmg8jfZsZUPe4UEcs8w3Cah1Fb1YFDP4NrN",
  "key13": "3vc7fkxF9v9PyoezHWBR9dq9vwYoLkgvNCKineEvoiM9g4PhS13awYXMpxWv59mp9Nkn6b3vJtWy8sfVnVaJCY2g",
  "key14": "4tpE3fZ1cJEWrrkJkZ5waqeiHC637L6gZHq46xizajWXc8Z4nT2jTxCutyL1VUasg8zjHo7sdqNgPscA5jR7mepX",
  "key15": "N9GcuKN3RDK458pEwu9VeVn2a6VkEejj2fVdvzZvdrbTxQoYP7gjY9VsUYreC16cPXf2agxdPRdy7aVpxqjrkun",
  "key16": "5eFDzVNE6bMBLA8XBDDuPT8u3WuyZeoCtNzrsJXxoCjxKBLC4yieWSFW8YLq4NomnprWuyVsGwxdm9e13UsygqR1",
  "key17": "2naW6Z3rrFqdQsJLcBgnJ3fMGJngap3GtApXioZjMXQ2iDg7RB7Chi3AdJ2j9tQHtuCUhHS4X1LULscJnzuyZwaG",
  "key18": "4Q89BxQ4mnFnnChX3h8HSDqTV3nhHMoR4pbESnE2jXwE9QxwfmM6389sZqU2EQPuKLqq7ehcHiFRiEbJ8e53JBy",
  "key19": "4wJbKpj6CexeAdvJTSPJWn8yQ5kkc28EPoy9oe9cFjwzRaNuGgNYywcoRXGLS1yZ6rcp1J4WFxbt6hnta6mMvgAb",
  "key20": "4Kg1sKCBSBTEdiwQSWuY6zJbM3AoMSUDd8TyycPPf7rWnvhoJ1Fnb4eNcABVU3NaomRt99tV5surxjKCL2mQhEHL",
  "key21": "2oxLht5WbfxpY6NnZ22wzoY9XNDA7yEXKi1UtddKRG8gDyfpFXq31xV4TdFrJi7V4Nk6haGhFCe3KnrwXk1w7UcD",
  "key22": "63y9PzwH2V7BDzXKafwSQSKTbkJ6tiELVeqoPxNVR5mRosXUR5TSgvUYMNcmyjCXSKycrgHLi2TTtAH7P1dgmwzT",
  "key23": "6iXVmgnofh8VwPWMyrbTRsHEGZSN1xDTMpup9zvBre4vVedKRcXtcVaK6FsjkTbyX14jJYfh5vZ35nDGwJqhaap",
  "key24": "C7Ct4515k6HwreV6jUGB1PbmLJg8cTfaUTF6hkaCuMkDzPBWWRQp5n1YuYptrPQWyKqwnvVdfZ5x4XK8TJUF5ec",
  "key25": "25SYjKPn75P2fw8aPFNfWpnoKi42rHHEcpHvkH3tXTTh7WFXz84NiseVLoy7aG6M7nrKFjibeK9KbxqnaU92Kdo1",
  "key26": "1qYXX2z3RKkwr3Fpr44qD2TmQmchEWueTgvESux2EFKBeZwpEJuBeFLz2J3RHJGoFZjjY8gRfdpJCJa2itZF7kB"
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
