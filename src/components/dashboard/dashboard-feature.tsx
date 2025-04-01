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
    "3nXuNsPVGgGfVfSoLeapzioxw8x5iq92AaWbkNvhrTuoHSzTgzHwcJWCuqaUk2jVKxGLFHUm7A6dA9buDwDim92N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29QV6ygUiToLPZZ3nSTBxVVxaL99gvaSt5jEoR5w415f5V5ZhTdyRnXAhyVKzV3DYZSt42TRHyNWb9L4WAFeidXE",
  "key1": "2GwFkejnnZ63syoDEFytTCk445mv7f9H3kABaMv778yJttqo8kQ7KsrntJqFJFnHuUVVgDsGTWZ8KcLj47pUVYgw",
  "key2": "rPd23LN8Sh7dWhDMypkcAWzs8GeNsL9sLRjqPryTR4xa8Sq89XhvRkttgvyFArcr6jPpCyk2BdRSToxPwFiEfU3",
  "key3": "WQjE457rRnR2CGU6iMQCYBtccvHtRDwf5Hmo4pqBt4SX1vsUM4BA5zRHt5moVVbfDACgqb7oCiQymmJgvePvago",
  "key4": "7UrNyXYhHKBgA3vgwuo2nW7iqtXyNbhRGtbbaHeHZGNp6RgUsnbEKU3LUTo1KpqtyoywKV3ZcKYFXVzKB2hRkVX",
  "key5": "tHRV6Ub6MVVvMPQ3x2buMQdU5Z3qApkWAKqME1JkmuyLnZ4deEkfAG6325kmDM5Tm1JjvmWa1jT57g467uSGkRy",
  "key6": "2aWCVjvhCSrE4shoo8JVwU6dgQnVikjnpMV9rXa1QrT1bxiarVoSesRWkKfkSwesipWGdtwUzf6FRJwYAWujW67Q",
  "key7": "LiqNnFWGbxkwnnBAbodFRRJobagfi7qJCTE8Eue65RocMbmPAfcKmt4q8goLw8QBDwUH6akGRPcVPvdEZAkgz9c",
  "key8": "x61QnZLq4EVgKvnKHBDd1598ujQWriWs2hKUZRSSHYuoGqmWZovSgwSroADnKgzh4TK3tbnif99orx5tnswXrug",
  "key9": "52v9ALd7XYgqEv4XJD9S574y4Hmfngq9nmdEBHjhZVwGLETf9NJQpC46Q3iJUAK8jSbqWpoh8FzaDJNP7SRvA2qt",
  "key10": "5n8noAYu4BxfFW2NbgjjMPG1PuDBudgC7Yd7HgaZpX3WZLdjv4XcZ5Ps3j1CwBvSZzg1rRUWPrYKXXnaZY83rCdo",
  "key11": "4jidwePTiQ2etjN5EFmMxkwDCMtzrRmdcZQ5EHqvJBkkBtMzQkeq97vD9BUnbs6iGRNQLxe45G1xFvF4PyCaEzU6",
  "key12": "3h91vZvTy3vTVsoBLn7KTiz3vpkYDmAJtXT8EEQNx7Je1fJarPPDz8dmpqLRKQHr16CDnPw83Lmnf5BHxkAR4Xv8",
  "key13": "dqxGTyjG1vwJLeyifSF4oyJjthqTXijwbH8SN2RexzneJkEL4VHePCXeybRUc59noCiSLC8uURQQzXPVyvwhoub",
  "key14": "2c9Gu2nyHofvDqMzV7C21MZwdUtNYr1uzw8M14H6MMVMJh34P5obGBA6SmVXLHHUNrWU1QGGUxb75dLEja2FndBB",
  "key15": "5BcCw8wvjBahLWLXjsT3mb4moVoA73JFkkQk3pnnD2NJbEazfZiZRoqKg3QFNKHyFsL8Mj2QvAq9rLiaeQp4pmJE",
  "key16": "5mRnwaZEBZxhsEuMX9cgWExmNAdExWKvTJRa7zfJdM7bVrdqJbEGwdKLA5yn5QG9YRDqHdr1Tu2qhzrtKdEVhkZu",
  "key17": "kYZamRegMHzakedciJktjeeuifcxkB545Y8ygRxAkXNWcbsJMWNoNn4Wgpt9yrkfK5orKURf1X6ekrAqzpmbuRD",
  "key18": "4aYhHMqLBfoE8bj5eas4xjohhChCWswfCSDAwwEFvAViw3jmS4ExD6NJi8oh7qsNAPfkqwofCnXThXE39eJqQ1B1",
  "key19": "4sJ7HFfrBuQ5hXpRmbitJJJSzEivs4ijTjdrneVjniaMY3EkcKxnaojYeW8d4JFSJzV8bxnmUpSS8NmeHRm9dVjh",
  "key20": "2w41uoGxMQyHiZyYkxJqLyuwxHGmKiJZMzstPPg9iR22845TjeDncmxvgS3YMA33yoEv49f46keFo5p7fBpVX17w",
  "key21": "gQfhNZwtXEFrsCxHuxRjaGahuHD2y97GQgDGaUvgN2MaoGhik6Wjgk9VDfaaadmVDCtspf8ZrnPyDk53vsPqZZc",
  "key22": "KMD8L3swKA1RF3mjtuETTh4KTL1HtoAFZ1Sp5v566gzGB8T8fzUiZtf5QZfMuW5B9A2fpf7e8MHsXBJkdHAcqVi",
  "key23": "2ms3uhWGNbRXCEro2CbT7jjXCgexUbPZdt6q9ijswSiMkKYeAjSbzfU4A4uM7ALQMsNRWgtoyFB2UzWCnWjma4ui",
  "key24": "2dDgxXiCWoSTyidFwoqTZzoRe4EkPzBXhZBV6FNxsrqLEruKBLMkdbMfmWojHg8FF6y9YqJCLDbQh4tENUdncK4F",
  "key25": "3xecogYzVNMD2X5giUhxMobGo8a9PscmPdn88GNFvhdW22qszmiYV9zMGbfaFj9sozHSUQnmuiuRs1LFRHt2sc59",
  "key26": "NodpddKL5DU4Ac5ydsMkkz8QvNYhARkuek26GgmoM3oUtp6cFuwHJxtsQztpZy2qcqEn58fqSrdwu3cFSP6qNaK",
  "key27": "3neDzm5ZKsZg91Gp68P6t272G9sghvGoy8YCwqg56NqhigRGniW24Ma6RbAe7NhZiNMg45sLeusbAed7LQhwfUzd",
  "key28": "rySEhLJcSPwgQxX34DVssnwcn9LiBPaiNbHCfw4Qkos5Tpek8YSDgpTWLWEWMzhmzBpdULXaxd44WdQXk3Rycpa",
  "key29": "47trPbbwZowsgQtAsCNgHxj8mVYHGmGq3ij9wQAd5DBbQ18Jv1we86B5nzraknmNsc4ZRfe5JKTmThPi2LGXoktz",
  "key30": "55KfRkYg7Wm5h7wFX2hrTJ2hbNMAjjmtCtQYoKboss3E51VNb3cLCswutf7L2HRnjDPpqbFRyY2Xv8xpth6GvasW",
  "key31": "2JGFTgfmunspVJERSAGV622Yt5KtoWrCMaxDiZqBHHpY2xLdKyzGVZLT47SdB6SfrJ7YEAvqMjf6wCzRy3D5wQtx",
  "key32": "osfvZP3m2KEh9QgkAp6gq9emXtje9nyiiue6fVq1JBqMpGDP7FEopSF7gBc5zG61yfisQkozPDEnAhhRyNs3q9u",
  "key33": "KKNxv476h67SySLkyVrsENT88csKpogNgNNqEBXKEewwHiWLjmwBLCMpwn7tp5Wm5jDG3kJrYaSP3XSwfrvr2sw",
  "key34": "484BnnXhxLguBrXwWYDaxjRMTYQXvyp2CYnhB9ppArQPLT3hyQuqNVmKmkoEHXxJMmLPQKjsGDSAoRsXUUxnWGNg",
  "key35": "59iuvMRAPU99jZk7xu73fjDDFUBpEFVFvKE9qCN1UJtj32uo6AVu9BWcRBHDE8iNcgAPxCRDS6CyvuQNuCx9HjQj",
  "key36": "4ZeHSrxX7XfkaSA8hfcqhpLPgV8kMmmeVQxcmdzy99tmtmV3fUxKZhSG3BEr12HvKuBCzUEyftTeVs93pbx9hrfY",
  "key37": "kPNdLFVcxnKowxVDxXmoP2fEjEEgT6dZq2KdZn9PzgfqRgmVcaXWLeTCyz5GxgrNZKo6RRmMGZuR2eQkkacnfci"
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
