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
    "3CPoTwP9f9zMg53EEkujEK5T1SnDrFFiAB5zg1R2qr6okzi1oNDMPfAZETv1R6mJSJ77WJj5V6778MTvQwyC42A9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yfk9jFnfFjayjEJ1Ff5h1xBRmKYg7ab8iScV8jnQ18Msg9ga5kfPohmuMyGinacc5ifKneh545Cm31hyDB7qinD",
  "key1": "2iYMMofqrR6pMEU5QXXHq77u1gm84Wbs7c2teN9UmezBCMrExDWHaW4wn2SbUtS18fppsFGEkh3gSmnNy3vwsUT1",
  "key2": "3gjdipezKMFPaTD9bNBuBsFcBbuGb7PKygHNsnX4EASsfNZi7HsdGy57Z2Yr1Wehz1n1rsbTTkBHqWQyDSH4G7Pg",
  "key3": "2TaY6j3GCaj7HAMpEe3Lsq1rqcESUt9Ym1MwLCqDetQPLV2PQYd2bDEBJZM8TBS83cFz9ji91bUNbvi3Mo3voXDP",
  "key4": "5HzUvpep9cjhS25cLeiJDncyLMP39uXXJS6V4kocWku3i2McZPtdr7wBRENBS2td2aMj2qGgKUu2R1uAUjC2vkJr",
  "key5": "2HNHnQYcynued1SaxxH3UPVETViQeuHQbt9xgEtHGNoiGHCwS5BTGm1u9FaW2e76RnqkoGm6EGcwbz76ERvPBR2J",
  "key6": "BcYijJQRehpqs1iexF2J73WrXd8hoMGiodwVng6t9M6R6LuSvZcNUV9hXaJNA8Sq52ghiye93XTjUM2UQAb6S9D",
  "key7": "5qsTAFg5kF48pTRnDWnyJCzMGAbmJYySfqfW88ETmnFsEyPCMDkroZFmMwEgWRJ3DYzJULgesrR97GqJwoCUnf4w",
  "key8": "4c9sxDSTnbuY39kegVtPdeyzDGXBq4EkiQvkhFfDVMvuXAZXWsETL8Gsv2bH1XLC2GdaSsQ5HQAzVZuAkqYegFms",
  "key9": "2TChEnnqUK1SwCPCxDSopj6YzKovW9KLAkpuoLJvw3cW3n5u9hG4ymL3BCgAYwnu7uRSwnzKA7NxSPH8162tLSKE",
  "key10": "5K2ksdiv1LdCK68qDbRxad5CtyVxoyzL27M3Kczms1bxc6eP5DjUNCBSzhwpmqwFkVDVKvesi2fUfVtbz6HynCWJ",
  "key11": "4ETAB34qMj828SCPoh8mmevXbYdtxmMW2LX1uwLzsz2PWm4foBjhCSj1X2TDvcTyhdkgmPoEaRRiVggutK8B6HE8",
  "key12": "3THPrzssv3r1udAREfCmHsNyxzNprSmztdBjeFN6hrqjBU8QrXvZL4xVw3FHRNK5eKUCg8BmPsUPsgDYmcnqWjLk",
  "key13": "431LoLqWEJc9wRnzqkt4qbN33J2836uNSmhByip9yuxS9ghPV5tJR8FAXtDKetFmMWGUqzUKCqmaJ5nUJURV2wxf",
  "key14": "4t6pPisCVrSHc38zwv6SpucseEVbBc3Mwc9G2c9urSU3LPbgeypbbDMtnrsSZtce1AFAq4onkbs4pTRFChYkiPS5",
  "key15": "48ugJv956vkaK3qjqAXvXMP9vkZstNBJVPsN1z8frbGjjcFz3ZLxbZFZ8z7A62N83c7gggrzYmxR7Wy7jXEMzhpg",
  "key16": "5hfPb7LEpMKt21fkDSmYXchpeykirjjRELRswEY1mvHR8R3Lz7ASwu2JdmMqfK8rfSbiXPessTu3rr9GVtmgn3qF",
  "key17": "5j3WNahkcPZHQth4WxeJvvhT3iU5H4PSTBTvHnzVUmhCK3pUJwvufQqV4rGn1GSGpHcPg37GPoMWtFycqFtmd7YM",
  "key18": "24utjhvLMwUjjVdJsqXz2J1VfC5YyeewG58BLW3zDkDV5jfUq6AqqUq2mt1gBov5w4bEE2WDk6XgynCzYa2p2umd",
  "key19": "4JCnEt4QD4A6rnLCTJR5AZyxmWHaK5mLbTTETRW9phWGcstWQmM1sfuru7uyo1G958yVUgCxJ3DX5bsxhb8HZsPA",
  "key20": "5FnyiPP58NctT2aAgUNAJ2hvBUjHqike1kfhXprhNnKEQm5D9WT235qmo4f4W3XEnfy2j68czBixxZKGDyHvhtcH",
  "key21": "3Tn4uNBW9Fh1Gqt2Z6SUjDM2zYrZEG5yXr5JtneaqcuvbrYHXER1C8wtif7dDPMyFkGhFnAwfSEQmrZJYy1wcFTP",
  "key22": "duT2wCcuUgXWnWbAhW8HVHsq3sUDJr7nhG8RqUWatPfWszvmXAAwi1JGkb5UaGyzT5RRXA9iBL9wf49TN4y25Ne",
  "key23": "2v3htxMyv1EKt7uCnFUwMV2MY6rRnV4JSBZccEnbQ4ESZK6nWtcxYbJCbTCKgiQUohSa4q13QEKnDcQjuFyh6iSr",
  "key24": "BbuS5UKP9krM6sZPagRjEkgykkccDX2WqmtaU1TmLxv8mJaoBjdjNBrPhEBpiN4AuxNYK6CTRTiKvbi1hUUDpKN",
  "key25": "39bAXAgoMTDcPMTHQEauFHWH8b8ziyKjGt6JRT2zvCJ3dXszXjK69SfaC1HaEJYZJaZeLtktRvZz41c4Tdadt8C1",
  "key26": "3TgZC36iXazQDTUSGopPYTBhWSZiAbpA4JX63BZm1fuRc3WSYd3QETzeR3SYSc3gmsWUEXsiTn1YptWkZX3eeAYR",
  "key27": "2Rux1uFeerwgnzLm518G5WNvTrt2qU6ttoBVopa6gfBvpxehAerriM6idCoamhd3ihZpuEDjZ5u23DDZM3MLyEWK",
  "key28": "5aBjLVGpH3LibxRzWbA1i9ebd77jhdnroNG91cB3LtxxjwotVVtc8GzChQspPMxSx31Kr3LAGd7VUPQCCdhjAVcf",
  "key29": "3yvKQhweNkPhkbQsz7RduhhAQCCowjC2QLAKPeeoQfNgWjnzuw8nBybmoEG6tMeoivv84BfRTRh3Af9ZawVVpFqs",
  "key30": "pTF1vK54DsPpqd7VWQMJTJBkbMihDUjrb9pGGFYyLkBDGemBKrQyzG2yjuQNB1XKutxpUpG2QhvtNyLmU2pu4C6",
  "key31": "27aLtQdRVUzRXLa3y5yfpwFZXT9Qcqc943SAxp87j9cUb87AStLvm8zVq5fU7kCY9rSQ7exg7hMKArEFz8oSnnZP",
  "key32": "sYJTvUtoqqmtr4tkQ4YPrU7SuJEYMp46PVVWtJartXr8GZQQcWTU11zzs6oWd8g92jzKzLv9M5QMdCrfBqECDWi",
  "key33": "3tqQU5dUox85HLUNhxrWvHq4DpXDdhyMLGU3jUkwKaKyogRSfeZjiFYd7FPqQCwCxdrxTBQNC8EvU96fBHMgVR1B",
  "key34": "5aQDoDoyvnSJokrzQSC9qzVbog1scXgx7AJ26JiSpT3VqQdsA4R5eF983EUrqhWJoVYe7FpFMZuFJ9GpDJHPhHyu",
  "key35": "ayq4s2ExmCMPqAN8uEHJK6zcxmmroD8HqQxDRkj5Lzq7carsVcyT8YVxRpk4YJ7kJqXXuV51V9dEeHd3xgPpa2z",
  "key36": "4SYueGoFX1gfWJbPkEUKQNUe5Ga2fqN8cqcHB71UKKgeL158EWdotZLKRQQLSMFF3oCaNWdD8n6Qc6QqWnS65JGj",
  "key37": "4DLzVXbLkwm7U21ffPyZHw74bRTtDYTwAQTzXoTub7NhcMLks2BhL4i5SdgJFhP5KH11TqxjXwv3yUoGpLqkVEgM",
  "key38": "5PZrH6NjQ2myP8gHgXbiDzKgQGGWEnZTokC7bHg2WTfFh9a3ha3YCfjH9mVwmAgZ2oAjHPXsEoQ6TxxrGJNRtFvf"
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
