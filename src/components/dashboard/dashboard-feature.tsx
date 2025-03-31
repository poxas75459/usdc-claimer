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
    "4UxGq7fiWpxvq4ZXfrFAW9wnPbHgR1J33AT91J9kdvz3k8LqAjEAhdS7odngYgHdApCTHYNXGuoXSCMirnVt9bXm"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5ACcZxVzWnm8uY4cMq3EHiThFL4RacajfGXdHxDBo8dvmcKdBsUVTpFjwu9euh4JJKSDw7RGyr5ZXvfrYffMbU8P",
  "decoyKey1": "4H51dZ6A9G5i19FH56KWa9Q3SwLrosyXQEmLrZqjoapd87vWLoRN6B2gjUkYiazjFQH6DwEcTnnQsxzJ7MAShvmy",
  "decoyKey2": "AJPL5U46U5SUYC2DEVMRPS6E6VUXuR6XmExXnByHPGGkr81s2UBBoNxAPeb5RDx4AbZbsuHyiHhDC6n6VaWydJU",
  "decoyKey3": "3f2HDNmnpnmdMb8FHj8jKzvVu3RUfwgfneiViYa5Mm4yQhpKtatq74PE968mkMsdjgmc1pQFiKcfGjTEMezgACPx",
  "decoyKey4": "4rPK7nkM6j6DCs6zfzn6bWf3Tr1mtyu2VRo7DhF4eH24bX73ZxtnfBXJ1YnBpvXU8QWopWSgyaFxVqS86o5UNLMA",
  "decoyKey5": "67AStogAiUUmEnfPWQxz4MZ8AZ7kBtyNkT1K6Kwv1oeTjTCLWkGUkvC2UhGx8MXWiMkvTdV6T4hFTjBpBvHpy6CH",
  "decoyKey6": "vavrcU4JcxgsyASVTHaGNpHTUhTkraMwEpDyKVjYJ8b2xvcirLxwwai29jD4e8dRvoFMYVkGyoLmRBo1TZNbCPc",
  "decoyKey7": "3morEtyDw3vx3QYLP46HTYbNFgaAoQB5XHqcpWsQRRqHMkUq847bSfEk3KBMhPMeZ2Z9w1RdsCVfFcF967JXUgB4",
  "decoyKey8": "3ho7g578MLuAr5uqD7uw54pZapUszoqJFB2MhwE9KMzDwMbWfJZDa9dBBUqhZKk1NyEisNp27dkhS2qP7eqihmoz",
  "decoyKey9": "3SqMatz3UNRn9bzTBmesSw8KvK6mButbsPZrkSekZXrWgKJ215xUZLqKrhAZg24xQXNdoTysxBDBRt2CQhSS1Mw7",
  "decoyKey10": "2HrpgWMnZgojzLouiBg1q77osn3UwF9KPZxhmRkq9DsKkgm2HMsnrYXe9MpRd3UWDahRuqE7RLvZr4sQ9KmSZCjx",
  "decoyKey11": "47n4exvDa1q1q5a8W1iSp4YrLhNi4XkNYF2pB3B5859rNYYPe4UEfVHDvb1dA9ECJmzQ8pTY9RunWwXWRioZVwuQ",
  "decoyKey12": "4P2dqdVjKjmH1ehL6ddhYASxYSSM27YeaoD8toibbwn4cFiNHFXLhEb4hB7gTGc2aStwcJHgYvrfCPzMtbkVWtxH",
  "decoyKey13": "2viGAW6NZyz2pukLZicpQpWjbb1bR29uDVsTNpgjhBCUpnNzQPqz7gSWtTMAZ89nGAobS8iByuMeGi64gycKwLMM",
  "decoyKey14": "5KHWzk32GEhYuAnuzaWMGvbKsHJhFgpXRtnKyzJn8upkD15ms9eeUmdtfYe9397ZSftikooZQ9UHC88e5UHtTo6y",
  "decoyKey15": "2qhT5a9f48Tms5hrYFXr5yXnf4QZEkKKa1bHU6uqAASuuxjaeudqgWNb62xBZZ5uLdth9o9UoawQu4FXj2g6td7M",
  "decoyKey16": "5FPxYDWZ3BEt66JGoakAUFvDFef1MeLob4i6FUZ963jNKtbNTiKTnxyjVUKTgNfvnKtKuqerv5rkGswvRjiaUxL9",
  "decoyKey17": "4QqA9rGHSBDnBAFVyFtWtGxiXyLDVXyY418SJrJvaZDJPeDP6hiWPzRQARfYVBaQ95MUc6asZqmeg9gM5GKSSnpR",
  "decoyKey18": "5WomaZGiKMKAxHjMDBWmXQpggNjYWxQCPXKhvhFqi3u953oCXr1XKwL5wA2e38tDaWUdnrr2Tb2BfYEnzaUp4vU2",
  "decoyKey19": "w2FrgpGsDpdAMAsyCC2w74ug6vW12ys6yrmPdoFUB3tbx6WKgjLVsxxjLSRGT5JCh4epioJUi1cEngbkcWBbhGP",
  "decoyKey20": "5sT695NG3EWAkM4pfhZH8mhiaarHwmPjv93z2zirgtXVbBDc8cTAJiXa6HUCzYH3DurzQ3oPhjxvM9asNQA2M3wt",
  "decoyKey21": "2ovByt71bXJxeVypRg85a8fGvBTuKHffKxK4px1tAViUeZuDkgCD2WCwEH8S36pwnTBYoLzQVynYcDr1DWPuRvzw",
  "decoyKey22": "1oF4kwMV3jecZPbr2HE63kVULFuRDohqRHxUc1RfzK6V2T3UcFFVQRbFvzgtyxHZxr5FayPQ4t9zfd1KFCmvqPp",
  "decoyKey23": "2toXn8nCjQwwPeEpDJdVfva9oZpAc1pBPjkwFznxzZJB4vsqMGZbeMBCRtWzQh61fR6MTeQxt4vfyrboZVpg15vd",
  "decoyKey24": "51heP8oYiuvDQ3qNgZJ7UvLXn3LXvJsUb9X5PgPT3PYPjTnbNAsciQ6HibDqLtis8quT2dW5iVbvCoZUZHt1QVJJ",
  "decoyKey25": "42wvewipE4fc1ufkYHwef31ysqhZnQEDeqYwwVboVS4mTZWSNJ6DU9AXKxFrCmkRT5kJRvUp3YJDZVe4UM2Wywsg",
  "decoyKey26": "5m95zTkNdQctFh6N9biQjiQLY3fGebsMMQdqwaV1PYY87ukYwKqRsSzrNiXCtHKHzXsGeodn9hjQTRtNC8pxTfhe",
  "decoyKey27": "5Jpgs9TefYwxWNYqKsjqZ4tBci17gWCe3h45iSKSjVK9YcE7AdiraZMysknX2h95QTz5ceY92kj14cL4KKGUcHdW",
  "decoyKey28": "VBa8fsc2QRewQRM2qssKYNfHpE1z4coRy1rTpXRsHkv2hfc4FQLWPMWJMVXNF8fawJpSeUYdYindhgawGqTBkq1",
  "decoyKey29": "53YuwJ7Ud5yJjcZnyyUaKam8RGbi5i8DhGpNQNbECH1KGBbkxPeTKySxaqovu5CSHpQgL5EHXWXbZjweaHFR95PT",
  "decoyKey30": "4MYhK9xknUvA5SYxsePvSCbC8wqaH1xTzXHGjug4AwJtQF3zCXccBVM3YGFmkkJwX1d4F3tN7oQNv7DQVDQbFaic",
  "decoyKey31": "4AzycyYwhLpjYQjXJ8wpvCx7ZpFcvwCkwZpHfPBowxNbtS32DFJpUqNLJ87CP41Gy5rZJouL15a9gq3FtSLxdLAA",
  "decoyKey32": "2XBpPHGDw6NQjCuSRD4dvZqS94cMfhqe9F3q79XNgQjbDfB2HhVu24h4w36sB89fCYUDppXoXYh515NELwfKd38K",
  "decoyKey33": "2yqnCCSQh2MrEHRkjkfztKRWfoGfCRBFXVWvpDRo3Yjj3b2KzSn5mZwAH7BYcC5phB2VxXbZh6sH6UTiXkhuhUG3",
  "decoyKey34": "2KpwuhCnNboxT5aLSocXXExXPJ2KatY2gW1Wce7MuZmHYUL37mrSdoqziS6o6NPHxdby369raiyUeP53Rc4TDMGx",
  "decoyKey35": "4uuPwsXFULMNiMoDRvQDLsZJ8Nc8QvGtNkTMhGK1Xjw6y5oPbFXvyRZuHau1b21Zj98TisLyMPQ6rmpMb8U2j8E",
  "decoyKey36": "bd1xf5NXxxXdEwYfPWNfMeCq35eWiM1qsVAVaomZGSvWSR6FHuu2CaLjspBT1NSAsat5EVXFBEKRQxj4q6S38f2"
};
// DECOY_KEYS_END
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