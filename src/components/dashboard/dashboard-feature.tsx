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
    "4BK4UtfM9LYSswsWMGeL5WccsYFaTCGm2YyjE1CPwNGfTzcLkLYG5chBqpeVqEGyhqgxJ4CauSKsufQ8eTUm7ELB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HmHUmFiDGubWniqZGA8DwaFyA1iFkW8Bph7F2m7hp1gEjXMoo9rWpXT25mNG5As2NEWd8TE8qxjF1gnLCCcE6Q",
  "key1": "5F1Tkok68mDabjpVTvUNB5oDp9xFgBwNKZfpAKW3L2FnMfNSk61s2A1U4m3ife3m2PGmUUtdRYnWWjYFE5oKUDak",
  "key2": "4RSqgb4L7nwbhpLu2bMwnYaTQfdr99PtnsUrrn5xEmfsrobuLpa5zkr9usccUghjW46ukgLiHhXNAxgE1isf6A5y",
  "key3": "3BYRUtED3D5hYrkcwusuzgGwQ7jwygEb3cMrwyrb6Ycjcf1HjZQVE7S1VV2WNU2gabhvv2cfDdQ18FV79EEDqncM",
  "key4": "2qTWDt5YY6ERmhzh9vHR6Jf3dzo3ujdjMGZz6ro78rQWrdn8pJtobn9BruSQkuWhmB5ezsZjxYG1N69V289YgFmu",
  "key5": "4WBYhcxUQRDpty2c6zUJsDjSWVDmuxzpB2wLrUYGiDUdekiqjF44EX9HcMSoYznqjmMb2xAjmnHHGTpVDzU3kkEy",
  "key6": "4jCazFjKk3aHN1BUzi7knK5Sbf7zhzvwqQDfDS4GCeVDVHNo2mAohYTARf2BXHiipgKGqpt967tBG935vcXPqyej",
  "key7": "3y33gK4zXMgJ2CQZqSdZPU6qLDHYALDz7x1MiH2toGzyiz4CzC6WzhqF6sAjTs6b55yJs1Rd6GSTQnfK3pXpRZkP",
  "key8": "4NFMU5h6GH7eWvewv9MSP3kXoKDg8m3aWiPkX7WdXXxBCg3BaDNSnCzezADFnCZxGUu5zTeCUA457ZCSZKYH8xSy",
  "key9": "35J8eGdAGv8gTHzTUSpnbwsWs47G3qgg6VakqeVVRkCPPeEMzv4Ba2VRw6NcTiKXS5JHPYajrc1vyD5x4jV73qr1",
  "key10": "5HzZ26ypwQ1aoa2FnJv4KFmemqjEZGFnLL5fh4EAKvHWZ9GxtMKRoZPzVVjxfZZzBZtVxNLSRUvwa8zaXRhiyzns",
  "key11": "3hheKVBFKUnBUT1WWxVyywFW6JQLLMYy4UF1hicey1Re8re6RfHuQC6anymQwM83Yf8xSAcbvThhPDgTpVwL93FC",
  "key12": "5HVG9X8TNFF8gcqZL4ofU4MPhE38E6CYrvjZXAoDB2tvAnyuJqjVVSzKbzgd4mUyZyJevAUJmc5qrHqqpA1nGdCw",
  "key13": "52zjEMcfzYMPX7sq4318iZGfESNoR8q1wgfEWRrn2X3SASqVJ5rKK4AW5rbjXCFU7WcZ9zArfaLiUKCZhd6bjkNG",
  "key14": "2GP7PBbjszZLGpeYHqPJXKVRWXEin3hVzjidvMXvjkqhzVWramoyUEg2Uk1Lv6CwAgeAcj31ffFgXk5cgdfkv5S9",
  "key15": "2ZAzqofFiYWu5de6exwoSvXh42c3j8BZauav8TqYjU8r3NH4zh5TAAjQ6hxdgVseDCE4TYLVTwQFw83Tnh598BmV",
  "key16": "4DYb4FsQRVeCd1Yn4zhNTvYsW5UamiQiHgiMf4tt5KJC1fa3Aa5eatzn2qVjJqjpTwhmZYX4ZgJtZoNzwrvNsJZs",
  "key17": "4VjdzhD8SvJwUyYwhUqZzouNWA1QSwmwNKmqSLiyv6ULuYqYT3oApP38BsiywZMDUcVUAjbV2hGAe6cBr83GZeRb",
  "key18": "viBQEHtVpmEMUVyw8F3SkaNCBnirHvm12ATKJKczSbudVbVCU2EacJrwjjetst457WKHZtamzEUBcW4YR2iL52b",
  "key19": "4QAyKynMUxGAmgWghAwfwVfxYGNyeDo45zFECrN8BrNBsxbAwEmwZUT512mJyyRXXEbBbfZXmi7bXNB7rkeEyQCB",
  "key20": "5RXD4EH8rbju29cEoRf84rDvYPkv1XxYHKRiSaZKUURwr7DqvbSoQ3HL2emXW6UEa3tMXaLyfiECdJWwibwTgw6S",
  "key21": "2YA1rACesF8xdgxc14wee7qa3jZuRCzvbTXrdDvNqFEzL1XKWs2hoK5gM3FhjY1MaMZXcFsjatapnVoZDDe9CQ6e",
  "key22": "KFUWRdt9i6XYPR8HqHXttCn1n4vANeBv6VpZ8EmWWy9CAmbrCUg46tJpWTkqBsj52aMx86KeoxvUv3SLi7LoAgr",
  "key23": "3vdwKoi9eHrtDsPWsXZj5SffCWR6cxuiTTNfTHfh5MnUxaQGeUjnHMdfZ5vCF7gv7w29NxstGVwf9xXzNSLVbX2o",
  "key24": "4Jw396k62A5aJpuAUPZLPWAdaNxe3eYvW4MQGtxFoJyqPDovsLAGXiXWBCjLnNVMxdfa7Rx9pNScqykbwR7Cs4cS",
  "key25": "5hvNTpma88w9PNDoGFXyt5qEskh3EC9qyAYexUFLmZntRa93zsMHJZWfXppfUQe5G17fT5hDKm7fS6pTmVctPtji",
  "key26": "4fzDQJ36BcdDk9kFhmjeMUEJfygpku9B9GbYEritao3bwawotJLJvTyjAJoqmfNv6cGwhHrCz6MeUY65vEDvvwQ3",
  "key27": "3tuJZ3PaKxQobNv5XvJccvaXK6rK1wwapFUwoqBkXcamcrUHxDxfz5qSfRcwThuSpG9YviANozNV3Jo7jUuR4QQq",
  "key28": "3YsiVxAM2hZnhyUjjJCBkuJkuEC3MqMifPBLGoHVsyUgEeJezCswhN7daHhKHPdcXtyYeTCcpHig12EuAccSLo2c",
  "key29": "4vQymjKivgTeSjUwCKHsRaVU1eQ6UpEnYMoty57VuXd8Uk4bNgmm4W4gjp5s9wthqKvQ1eJxLSMS4UAwr3MDNBRr",
  "key30": "5Q3qvgtcmu8aSZdCwDqYVdsoRjZcaUWiJcT5e8rmyvvzvjyWjDGQ33cgaUtQCSqtHZWdwhvWTc9zqaYMxDm2kMxt",
  "key31": "3RaEb2PMFZRTMZSVYxw8ceCD9jvttwPpfTdjeL7aBug38VwkP3LzHtEvdZSdEvjc9NU7PcUXQGSvtanFhpLArALZ",
  "key32": "5hKLS2PiSCWX6SJeP1VG94jbZJurbxzqZXCJk49B5zQwRVA6iiF8PzrpoY8fa4Gs5CQx9W87qoapSDvHzm1MZ2Z",
  "key33": "4z8Z7aKHGfSc9ddqng2XwrsLUiqAhnsc3ZwR2pJ7PZnKo1iF32MAWJZqbxwrTt1j9fSHdL1vAKENbhsjnQz4SB2r",
  "key34": "5LKEveACqMBKYfZ6k32kepLsKxXyXFLMYSvPy74trKs2enLxZtwtssAPQjF71LjYip4sqkjjC1EpbCa6r9j4px1E",
  "key35": "fC8yPbdyyVnrCPv6QiG7Ehb1kGJetuwVZ3Cxcmn9zETugovBUch2eaA1VdRKTgbkKnqsNxMd3FysCw7rcS7CVYK",
  "key36": "dGX2C5pabXpJmGnptkLEGboPGkQJF88iMgjYNT2abSVBfRb4QkjVaBJjQ2KQFiCRfYpX3iL36vJCmfRK9TLaDqj",
  "key37": "5w9YAyeEhRH9AxymhvQDomDaU3PXakQaAVZvCLDmBb2kv7Y9zcZAWozBi3bDatwT8J4WsoCtxLQYhc55eQ1DN6Q9",
  "key38": "3SQZQYSUXAvWQY1gvSb1iaY97PF3XTwfKRFHK2oA16ZLSvhvoD3aqXNdkdULwzGYs3w2SKaTeTQvCtDj1tpVM5nS",
  "key39": "59zv4GA3ZC3WNiDCsVChXgvnnjuStviMVMmHJg4d1H4DFR1Equ2EiKa7Um4S3uY8xjNvhvY7pJSkMVPqgZKvDcpr",
  "key40": "5cCrkscQu41JhiaWoSxfN9RWsnVmog1JH7GDev37zFR5BnjpH4HV4TVBee8M9Xjxa8hXnhayjZ4vxagvdqKk9fhV",
  "key41": "5bMtwykQydp9FESbwkUi1v36tGhyGBWmsT6iGXV4wFZrHzyhhe9dB8YbLXaUQ2bZaoQYBV7kRt95P7L2FZaCf7hq",
  "key42": "5ooMxfsuQg527Wor7PHk9GpX6sjxLouPNWFyvWHpxvR4JHXL1QtdV6o6pjj7RC68Lsap67euP3zKH7RXoy43hjWi"
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
