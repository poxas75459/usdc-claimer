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
    "2mz5SUBAWALMdyn6sVjuHK1mAiwLX5dhRSfgJec9us4qNoHpCou3ZwBrBbqawN41Ewf2eEfNH79qeeeg5aDWiGei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "McEFBfYpnAjYTYwpu39BMHtYu7Pu6oF2gzmNTQSoeqgwjoYzMWTWGXpEN2vEDKkN5ELYCZ7QwLBktsGrBSdssee",
  "key1": "3AxVF8PquyBmUS9XMwax26Y3yNWYtFegyxaeWabHaswZzS3mwUJHtywGTUWap2joq5LXksxFVtCuGRxd67xwwyvq",
  "key2": "4rY1ng1ksfkH6ZWSPdr7it5ot9voPpToC5MeAYTZCXcgdtSFWwwY6JfRnkfq68eyrVx1Bp7GTXtQXYGuqtDx1vz5",
  "key3": "2P9Jjx57fQ5HAhJ3EUG8d4puZ2sgi88gSxySJQ1drTqwL4V1TeAtXUaCQnncyApA8xdUT4tCHUAUwUQSqJtMrF9A",
  "key4": "4yF3y9nqmRhuQhnfwP9GVJJsS4KMzs11RozDBEUE3Nv5DhsPAirg1LGKBBTEu76yzMxsBF66fTZpFvZetgPnyA4",
  "key5": "481rv8qxZEKxFGv59Hcx4X9Dosxp5nkY853tiFmXfPbaA6cYQfZWLgjMDZAbSrezHKsyvWJP7xzCkHPJJSQGg9sj",
  "key6": "5oLe7w4N7z5GnoGG72XMQzherdrRPG4FvfwU6iCqqWk1AD4sErTfnaTQhtYnT1JdMoYqHoPxAcnVL5ux6tbSi2H7",
  "key7": "2JCPmFh9cFZcgSDadNn8sE7pVAJxJVQiTW4wfQxoCxgoETAn4GHyqQdYinikvrfeQk8rTbKXM4PNVGd8hgyDoyHu",
  "key8": "35hgdua4sTUZmrL99Qh9GjR8woDuM5CynouArECK5ywhSjYSQiQnKw3XfpkTcL3tKdrqAPaKdBihgqTMdpLNt2it",
  "key9": "38b63k58vC4256RH9cHzgrnE2QU7zEipeRpVcou64D9AkUBGvc1AVpQpqovnSLHSiJhqzZQJ9T8uNrh22Hae41cP",
  "key10": "53C5cWFLv5zQ4pfoSo5mZ5PKtcsE3cjS3q4hDoas8hiz6tmkSUwReS5Qk8mAfkkvfuUTAxhLcbzW4zKp2hfSoivE",
  "key11": "3W16tYU7UvXn4PkFGob9zCgnSy3p3EwB5rR133LQLN2HQxKN2NFmrMWsSqAK7jsnxU4Y8PCnpCKkjzhGJyUSoHCB",
  "key12": "2ihL8AupUBPMLdBcyegFAGKb7NPHsBF72XvyZPnx6CR9L2XewQrFe16aPZnuSfwRYuiY5GYrj68V8266f2o4569c",
  "key13": "62aiKdtN8EH7b4RDjRc3gEQhRKZHrBnALWTsk6Y1yMzm9mk7BrPq4G7fuC7AcruB2FVgb1NsT28eYrRTXLBFfMQF",
  "key14": "4Gf7gWWFjq5zMH2xJ6eWpnryvUSeCgMjcVRcqu6Q4N3fZnKFQ8L66MxvqWd9kDrSBVPkSyGCioZBysCo2qX4Vwv4",
  "key15": "5DhJsJFW7SfJnUzKwerUp4xa6BVTpDSZKVeCtS8nbYdg6779QL3WvaoqfbkcSTkmB3gw26K6GGF2fdUJpsk2ebdx",
  "key16": "2iNJRWkR9443KvUEgtzeHDUyNJtgzjJg6Nshg1oweyr4VZ66dC4rhdL4zC3uCGJ4tTFaTocynhsS34XdHCh6ED64",
  "key17": "CViJ1CTBgg18mtPN7NWQbSY32RmF1ZY3nJuc7FMYDbHAG5dmSCddQiNFFZbVMZfEW51u25DCQLM95XkaBNhy36X",
  "key18": "3iSaSVScuCUq4j6cjxaNpPSdCrqNtwuPR6mXsewFcsfhB1JdxarfUWzLwRHsEjuvw4dHkvdbaE1tm41SDu9e7Xxr",
  "key19": "nvgpxNCx3NJKEX2XcooZvoPnKWJTWjPqbzzh9MedsgyGcAvehz3KMGqtnc2Vi1X84QzUHuQo3AR2qTJTa2rGVbA",
  "key20": "msEVfP44498Q6v6aGNqfJz5LVLm4u5i7Pc5TaeyNZgChPeMrYNNU8mLEivymtbje5knPZdskv9vHDvTM7V62t2T",
  "key21": "4GQMRrBoFcd3NWeUCARAdeMPu5CwYfPEYCn798RgV2JdovUn9i1TcPSb3A9XyGKmE3YQKZcFUWjCCzrfwCUfQqEY",
  "key22": "3uc8TJid2YgkagWqSKH6gZM9Fv7HN4hSH8UjNwT5p1DZjSWaPExPzJbpVB8spA36GyqHkCcDS8xzz5oWaNLojif1",
  "key23": "3uiao8aLLyKQfdkr9oxmqVRbKNDo4ajZZZ4Svt6KNxBZx2pteZRmcKDhh1RA7zQhuYV935F13i47zE3C9ycYG7QJ",
  "key24": "4jpXEKfmxip3QucAE6UFdEhygpaUuUoBZfECTq4eAGgaHKrASzNtSZ6H9M35jqqZNvDt8TLCiaXWBqKpoT4yhHmn",
  "key25": "qtDkiGFQrquZzPDkkhf7k39u7NDXVQyxNaNDHSYwP7EAbgaCykmp9MWTGnDFXTcrLKXpHcjDoVZR3yZTPBuNWpQ",
  "key26": "4nzejyT3tEoGHUx62Aavb9XEvgPvDDV5LSSBLH4SUTv8j8LB9FVYMpeyT2eQDzPiYjNZhVouZGufU3tzNUG6KQ5s",
  "key27": "5Nm2uMDJAHn8HZyDrNJMwy6Y6KkdGRF5ZYtub7WzGJVD3GSo7J7FC6yN4BboJnqdnofL8q7gTJdQrQyjPe6rpPHG",
  "key28": "3V9TiGAtLdxUJMh3CPAoaAPaG3ThdbBQT6dG2ikgDv62Y41b9t6NGPsc3te4BwwVMnyPgc1XCh7VCBA6QTG9HAgT",
  "key29": "3nYagTxYkiui35pNeBkUEnsi2kSt8NAis566pKfhq7CZ98uQiWkm4P7xQypSpTikHTUb98SeCcSQMdyEi3UPAMGw",
  "key30": "4LGYfmWipoe1HS67o8NUixszuvVTXwnw154C9Uhn1kahNAHh5ugDCjFmvcohujcgZt2uvsubrHUsGhQAzxSu2Vz5",
  "key31": "5S7jiXA9WVaeMH8Y6X3RkpcvKBmRx6SCoyS6MrFfJezXkne7WTHncDosEinpJsfGiNB39jV9z49gAogJkWSGQK7Z",
  "key32": "4tvQ6ykNhTFV9JeB2nyRR1JvuqHwXdfWVvHzGLV9tMyYfr2eXTkSKJAvvpCZeSNc5r5msWsghdPm7FKCKv13tEZs",
  "key33": "5tfGmXyGXikiyvfm6LHXBsHpXVwGvuQNQxMbaFQYcxMDbsGrUVVeh6BccZ56QJrZqGhFwF1u3ep6yvzCYExMfLuf",
  "key34": "4ekmKLkBngGs1gD6vPXaydJ8Mx6pCvVjJLzT3cQVURF9MbMxkk3SP3tmkEKVmFcVfHsjnRBcrNov4YsExQoxRtQK",
  "key35": "2aeUUoHiYvRvQekN7bKyo9qeHKrgkug8aZCxaPnyLA53abZx8q6XLJ9mutgg9CxEXrcmGydUvqrzTfdoT1G29pwz",
  "key36": "26j8sCPJKpusDqBCUQhmFLXdyxbw9GFbBMeNNn299vZwJ3zmAY7GugPiRdBMZWBn8aSpGNvLs7WZNH1S4Rzgacyf",
  "key37": "3jhd1gQfTKgcpPsFqYVyeKHsnwaXTMwgTB2LgwSbbx4GHEPvKBN6dJsCG4czWGN1rtpBZhFQ2kCZJsy8ZxETRKbh",
  "key38": "2fvNE32Q7knxPw6ovX8zQKc2mM3ZdmxtPN42W81zZoZ5Jurt1sdc7qYbsRoaVzwyA8MaZFU3ThkiajgdDicqUE1t",
  "key39": "2yhBEd4tQwrzQdt23eZq4GZWCEJvVSeCT2KXbM9SrP76zcMC4QJy8kauj6Xcndvfoz9WxN3b3pPUvmCXRFAiqy5s",
  "key40": "4dPsPWXD1SfLbttrH6e2zMuK3S4YBcSs2dvceRXy1fro1N7Qfv42MrGDHonzpeU8C4iRjZZVQgWy2hRuhoWTubu8",
  "key41": "m4K36KKwAPMVwiuMLXR4iHJzMKBDWHKqx1hPvMJZRmouUzLZYzM9gjRTZkuLUcwyRXujtgZqGacZQECKoYLqaWx",
  "key42": "5vyVZ71MEmHSGRHjSG4Njv9afRVJJWSQcsK5Kh7WinHmP2dTGv7SbdtyVifMcLf28pXZi45MZrvxsQK91tQ4HK1V",
  "key43": "2t1Yfb3Ch7KLoGc1DCunM3A6S1o87HDAceU8M5vc3gY44UrqX3vVrSpgWbETps7naP6vDfzizkByGm1q1QgxTM6p",
  "key44": "4V8qcXc6BsAL6kP9mTm1UYVV7dJnfgWbn4EMvjiZAY4Tq8jmw7MVVuZB7W1cgpgn6RpAPZZT9yjaV7XfmgmmLaZo",
  "key45": "2mvgGcgHkX7QPvRYauLZ6Qh8XfyPmcicCo3hjvTSHvi98Cd88vSmiHkFtE5Px9zb4uAUo92AEEBXNm8Eoy9Fud55",
  "key46": "5i78CbumskdEFyga3kHt6G2ndmX3SpP144cjyTnwvKswc12Cu4Xv612uu1oZ7LQV9izL8Mg6NZhqbGCaYM8UYimH",
  "key47": "385C6obtABfJ81gEcLWDDZAAaeJ3VndqwPVq5B6UrECBCokT19L7w3NteGxVGdn3415LkrQihbPBcPuSf59pcYuX",
  "key48": "PtkVxGqSJPNuLTM6UA6mAYGX6pgJMN23YGEVZiKHd6irymTEtKmC5Eh68aZEu41ReCiDSaQ5fpAmf9kmrZc24UX",
  "key49": "3D6nkfJxgDEULNWh4kJJsq6LLL6TTQXzuh95cCLtYabVEeTjTb3PMSigW5vQKu2fyXuSpYhFpHGMQMkx1gNFoYDc"
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
