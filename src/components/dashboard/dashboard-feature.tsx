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
    "5mSEuuML8Tu7PKyauyvGCjC1pLjnxp6MyGrdwMBybepKRqtpexQCCFTyjcW4ScE73VsNkuM3zDQmi91TnnBZwRbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJyQXD6UZuheVpSgJbSzKYK4CMYrmJtjbgrga9QxYjoXthGvL5rKiPdBipAKcqZ8Bm5Sx3yS8y25fRisaw26DSQ",
  "key1": "2UMoaSPS8UbgfxMvKUw5pCUjF1A2VqPoTSNsMuC3SS8vaGehD6WnMB3jGjG9wMAnhfCaZUPQJkjgjPoAoYtymj3d",
  "key2": "3ezaysLzSTwXFCneWdqJaumgidx8QnP7uiAvbV3GdTg4Cx1FF7AkKTWB1UWXmnu3arZqwxSdMAc3rKZqfjiphfo6",
  "key3": "5T5nffuqgKKqQhxRUKsjv5pMYd4ts5dcFkbcPtob2bpbng64VoXAES2nb3bJBEwADPiQ9woxEbBrPEvZXP4xdL4Z",
  "key4": "33LHFVDGhPhBoVDjtfQXnJdHQMCbi413BzyLk8piraeJPTysMaCyDyXhxmAr65NL8jHwVtWVm1R2vLSkZbQ9No5X",
  "key5": "63Z1tfn4aCurf7gSWsoWEnvfogoFZkjeJNWUgH3FgUYaXSs34ig3jHTkBsThTWxA44czWsLXPhYsuBJmTNCxnBwM",
  "key6": "4jFS2XJZsJ3c2CypJrroDVzc1tQwdaBNYAZDSpVcvLb3Hf2mVosqdzZwVeGi78SgQLFtwPkH9z8bJ71aSBd8VHJg",
  "key7": "3dxkKk6bfxkTE7zhpos7zDFoucNw1BEH5uBLdb5zc46ahdHngpvqhW5mymvPVbXEKNvWW9dnppfvc9YZbavfCF2a",
  "key8": "675c5CcKQxrXDNUfjXcD2PkqaYgp4RN1EM8GfxWgYoWzk4faYPGDD1wQ5cb2A1R7VkZLswdMuEGFM2CYaN62i6va",
  "key9": "3pC6KvBXGukmoEoyr36YX44kkDN7JYQsHkP1P9kei5DLCA9dm7GcN3Fj6PSz3GJEtk8HaUFXorziStgeieZThtbU",
  "key10": "ZXg1HsjXNAsyTMEV7FD586urHDhAvr7m15d7urLi1QDWrkVVmA1TBF56SQXKqDaS6SPfeKJSPQfw5ac2NG4yMTW",
  "key11": "4kYFxW8YwQFP1aFpNH7SZ8QBfgCoTvXEVjbqEGrJYAdap4hHSLAFqtt8mZafxEQvCL77EPaPHzukaXN4QSqe3MJ8",
  "key12": "3YbtLBEX89ymYjcQypK9Tt2cEnULumiKfLcBn5PmqVbm1PyyLzvBfW4YdvutBgkF2Yoojz69pHPvYdo2M3JqCeG9",
  "key13": "434mkSnVpbnPjxQo7osGYZNN4i2vkkr5ZZH4Uqy6M4bt8jWj4T5KWgKmeq1THVLoLsM7hLHorNE7KjkAuNbb4PcK",
  "key14": "3ou3vsrMbxW6c2tAqb2t3aQT3WtEntq9c9U6ZaNHDUw76ZPVT7TAC5e5v8cocueHBYF5gj6NMLSr3PwoaJgU3KM9",
  "key15": "3V2Pv5dJcjaJCNeMUvYUBdSzZCZt6bhe65FxGrDE9byA9pBd7mgYqPuwXTyH85NAEiYujRTrfF56gubPp9fGpFJ9",
  "key16": "3yKfjsBi5ubaCqT7spTgFpoM8WJbffeFpa6BDEr8DpPAKyqPDe6JA9jhMLt9gwKztTKerhkT4v1GZCiAQqy7ZPpK",
  "key17": "kpx6v3j2yEJFzFAjiEeoF5huPSvNXjqEWe5azrqkpoMd3zusPz5zvHvrNmMgPRphHa5gp1dVgg1ARsTNEpfGNv9",
  "key18": "2toWZciibnotv99WUpnY8Ya4ZFBsLTEgWZLgmwdQipaXjY22wJbDcagnuxjcTpjWEkD1nJ4f1DoKAZGRqXo8YW6f",
  "key19": "95o3DnrsweByvjZYjCmTzTC1xDq7vhoz85gzC645EBGeeGjoYmS9JYEZxy45NB5Zyp3K5Es1FXPpKexVHgW9cQX",
  "key20": "Spw3SQKB8AN1KwwH56qCVrduZ7H4mkEmaDqwed89fqgEcJ7vyzcwYzAMdb9xRNgxoS2dnaFt2mDvSRV8ZpgCEJV",
  "key21": "2pvqJbW7DsU2bydtw46GZ24ZT3iorzqUsQgDNRpsXSBHTH1MWp3PMrQRQh2yiCNWADM7W2FAjdz4CLUnJHzgmX9t",
  "key22": "4tFYm3BtFaMTwmV5Kijrcgq4EZzBe198iTqVnzKVGY8bfHKAGYr3bcndvmQtuxzT2GNnmNf8cooJgkHHeNu3JZeo",
  "key23": "5nrAT8za9Wx7ndtbDv5hJBMwvWom477myJiHJfWcqxvKxijC8qqNHiyo9obLAjxvLykJXjKuMvj3U8e3w61Dq4sU",
  "key24": "5xuj65qhNcRTUMcGxz6MkxEWGqUL5rJpVXC7UhAmwt2Z7ki972HjMWZ7G444fLZxVLoDZARfT12XX1Td4PZGjhBq",
  "key25": "39n98Hdf5ZoC29NgofP1zXPt9N8NfFtm4hRkxVmeWpSF7QmdcDNgTjoR1ucemuAgwuLBu978KJNfvAmFy3uU1joZ",
  "key26": "4Jy31xTgbm5y9NxLPN3u79xpw1UTvsYYEGQRQg4dvfqUgh6kYhdxbsJsJvJHGsPQg9bTxT4BkHbJstPG37o6f5zQ",
  "key27": "4CseAQbBt1YHK4giVgwUwrEDW2Ga66Sc9amPPQotb1vGdFUZVVUSLzbvCMvT9mUHPRMCuAygyMhyXt6bM3myF1ip",
  "key28": "5SqTjCeK7AUAQAHfyLB8FwsM8BrMFMVpPhZ1vCnbvbdFffXeRVR6KQfkEW2bZjAdLnEq3SKo5P58KQzc1ELUEyhw",
  "key29": "4v4JJyfgXsEZAPreCYhUbkKzF3go4LMVL9jtW1ec99nMvytzfRWLybZbryzJrw8EYQ7QCxjxkFyusgSMKGqxiGNy",
  "key30": "3zdG7NaGVNELgKq6QqRPUYZaKDsZo79YNWALdJ4fe4AnED7HagPKgStHhkE1YByLUfj1g5RBwX2qiJrzvJoAavbB",
  "key31": "4nC6cpWg1QRwChoykiaqriCSvEPFd5oXCsTq3ieTvJReed69y9DDmz3ykuPP7rKiDaX1HKFVQSCN1WrnKZuWmvnt",
  "key32": "n6Xa7EsX61p1KC8t3zJ6nNFyhj7bx4ZE8SDC33x6UJ1deMpwQ9AsovtpkpGU4wTV6vqm2UQAXvB8CWCiw7d49UG",
  "key33": "3Vo6rKWGJahksbZQ3YnV7AczUGnmnpL3zZm2968YtcJkD9sB6DN6hCasGeGXejeu1rk1uMPnuF734619p52uE7Sk",
  "key34": "3iiBpSsuGQCMFidbStHPzoTxcsWAm67BGiy6XSNXL374aPsfytEjT2fGF6PxpATJt1jyALkayGgWCwYMNQq2Mpg1",
  "key35": "apWCEKRdAPtbx455M9zqBNEd17WAQuFABEcdfLsVMYhwv32PRbKcuzRWvyc97hwzCehFY1dhy9ofoyj7TMjDFKj",
  "key36": "gk88EKBEXtm4Dioqk1XUAHUxKrHRf5QKFLiznFTa6cwGCE9DTZRMEkiJichEtm5C23UL6FWSJ3ZgxF1kQ6whhGA",
  "key37": "5VjqEk9MrXiMAYwDk76Vdsj87xJpP1jNqCK9HgxbkswvHP7HbTagkENnsVhbjcqkcfYBJhNhUxmjx9s4Q8MbTTFU",
  "key38": "5XuL1DDPscFKqUCNpzgE3As7qRrK81ewkzjYm9y5yi5YH4uriTLEeHLRVwFpoLS6CGEi3UxY5ZYPvQmW5LF4XhBM",
  "key39": "4FeEpwfmEteVDJiQgzcEyeo39i5PgMyiPHy8gBL4C6QZWDSbgmqpvB6q5pmUym99V4RFEbJrGkmAkS3Z6Y3xbLWG",
  "key40": "4cANhTpTE6yQvPCGrwqdEvvNmdGPP4KBxoAUP4MFHvF9CVHL8T9nENbDaGJCZEmVketMe9PHDe5tKWpvhC1o7hMm",
  "key41": "5XVL2AgLUoo8Myu46oTHFbpY2FpSHSq5Ry9JZcTjUkYMVFNFJpV9i8JisQiSAAggDaw5nAkEmnyVUZKC6pzARYZy",
  "key42": "66UitzNJKNppFE7iHad8sJ3qayYBd7ANbeD22w78h9kPgY6AzBYHFLWgQjRCoLJDyLNHdYGYbXgFinvgoZm9VT9q",
  "key43": "8AESWjvb95grX9hmpTDPw6KXrTPNbwNCA1TtxGuwHPN65rpDPv8kBftmSgdfJZ8qqM4wsoa2FHtrANLVCuSaXi5",
  "key44": "TUK13yAAM15bT6FfifinbdofoNaFad6YiJRTkS6XCJv2vV4LrG2tQMyvfaNVq4E88ZuT9B9szSVAYwci6fhnxCz"
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
