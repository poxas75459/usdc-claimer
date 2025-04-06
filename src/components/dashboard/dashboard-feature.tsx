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
    "2BoBnQo1PyvHVAEi3csV8JMs2yiRx5EFm7wGxw6AMjd8ukN9DyiY8FZZwvDBA5KJ24wSe7YJQf6Xt8vSqLz5vdau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Kfm3EivjsWyTPuaYJPvCA3BMJpYhDNuKvx5DEPaZ5dkeV3YVZbEYkkUR5Y2QiLo7tfuH299PWMdENLpBzcHHet",
  "key1": "5tykgsFp1reAY6cW1eKnYCuGrsn9FpuZCMm5zXdMxbzAg21koNGDvUcEKpknzmqgfeacPpxQpt57CTR67zJMemUV",
  "key2": "4PzgP7aej23QoxtC8cbiDiWoZkbJz3PmcwWNvdTLhiMEjYaeT2XrLeZK4MNq9PEGwEN1yRsqnsMnGcYhwh3qaTeD",
  "key3": "H2mex4HMwDwYruhPE3H4D7avbVhtV9QeQjfxrhGeigHsjmNW6JgrGVNkbFDfv5jw5RvaVEWtiGAb9JgGkY8fJrp",
  "key4": "2LvErFdjfyTtqUjkcqFf5R9zRJiTfxNu86rr9Q4fCsxZFQuTobeYizUtqYW4bLmkjMfyHzbTx23PBkgLAwhAE4gX",
  "key5": "3ZZCdUqP8NFpeRzr2pXLsnyAufr4ZQNH8j33BRwQq9FZu34Jq2aWDVTmcMMZ7rx51Nu8Z95TFzF1L6axqpH1zgX4",
  "key6": "3fChwGY2CK4cEECdpoiQ2sb34bggDDUdvVPWN7Mwjyov9MbvKXYHtz6qkCjD6vwq2HfEeMZ7BPXGZ3Y1MoPHa9Gk",
  "key7": "5ssG8NtekQiFZFM7VDpdtfEzPuwVALd6PL4aFDvZE1ebZMbdV3audVrfwRssNudtbhJEe9o5MvxAbmZmyNAs1n7n",
  "key8": "2FAFdw7n2Pi4gX4HcqELgwea2JiqtG4jVGozLvz1MWXGEF3Yfy7anHsQdoCD4LoAKkosZL2NUdBwuSKzhdSpUyNu",
  "key9": "3nfkeLiYKnjA7qYAxGU1vAsS5VdQNjUcA5ZH8DduUUUchWXSCHTFVLaggzRNM1EXZ8jJh8vGvxzGchLpwRKbsv4",
  "key10": "4Nsi6vZ1jWYfbLvU3qGR5QpEE6w8kJUJBRLtMmFkTmgaUxKKiuuWQxsdqLXGDhtGA1qAhuuH6FjdntFmKeP21E21",
  "key11": "2JSFcNoFxdb3aaoV5sBtNxLi2dPV9x7RXeqiMVaquQ3akhvfX2sNZP4n5DGEhby7WUGgsvb2rvjgz6MA1yBzV69k",
  "key12": "4ULsLUioMoH3Akxhyj9xg1327TsuW9xEUrpLwv6yPsEz2qFMdsLh3XMkVAeMep8Nex4HbJ8n55BYcRK73JeSAXHV",
  "key13": "gy6cGDE1Lq54YJETm6Xv5Qff11UHR1sjaUiZKcB3LGMvZ6k4Xn4H8W7FZcjN9ov3QSzuok7bpBMndKyXJaE6on2",
  "key14": "5My5a18R5z9G35D7kABXGdfqDh7yBvMxfAJTSMBFLqne4iw73FeujDq5VBn89fBGCNa4cwp5pXBvLwfyv1zjaqfe",
  "key15": "44fKxTirGxzgrU3yQZ4a97SQYM73J96VK7yaoETsb9Tbs6jEUSBUbUa1HAn2oaV957hh5MfmHAbsVn5nMyTuouTX",
  "key16": "5U4cFyHe5iuRbLZcCrEfbV92QPMhzscDKFCgJaixUrQWqo6PD1hPyPVCYJx9Hj36g7T8YkimgR4jXnSHSVQNQBPb",
  "key17": "mTYWDca1AkxVN49gmdAUKN7aLDz4ZmZXcPudDAz2giYipq8bdPQXCzWZZp7wskHYTTcEkspxZvtjHQxZuTRSxG4",
  "key18": "5HxZJXkQ86EESR8cZM3HV2YncW5iumbtCzoBfreFCTcbjE2nDobnConHtTAbgbNej6tT9HR9XaNDESqxVfi5jrsk",
  "key19": "3woKDzeBx4WFxRsULCAtSkfBnHGdfKDQwHs5swDz6bgsymkqU7RgG7eTRax3zEo8r5SZCYZ4zfHtiCLFTF4wCih3",
  "key20": "5xf587hKzVhoctDkZDR4M8uwiRjGff97Rbp2Rn5gZ1RytLAXMnLgrMtsN3YvVcPk5sdKUne9mG72z9GPQU2AGBSD",
  "key21": "3Dyt2muhnFVHswDjeLALN3hxtVo3i3KJ7dqpwyiWAeduEG2aYbqkvC7GSczzoP2fnKbtncttBMaEmSErmjfVVT8i",
  "key22": "36TbjZRSwPTEwKWXqvrMUA344WrEt6GQGFuvp8wA3ZZSJwPCFs3LLc3wtQxzq8eDv1Yi7EgDjZKpQ186SmLRXwQe",
  "key23": "2oLyT7vLjwqwnV89RTZWMTnmzmDkqHKGT1AMMw2qS3pHfJPMViDedTNBKNjWt96xzVYR6WP1BBiVKAV7nMdzbn4A",
  "key24": "3gCS7fSJK66UVkVLzth7bSZsV8f66z29GZepANPvtvSF5PBeSZh1diRdgYb5BsbPZCTHgn6zJTErMZzMTbVRcVYm",
  "key25": "3gHQuvJ7kyBwUhMKBeGGqQUtRjeFfLm74iBjiWNYcvLAbyiXAL58tBHmzCNkrhpCy68qP3UKp92Emx4Xzzo4TadA",
  "key26": "3pERzftEJEPkSNMkpBXiJ7utg3N6tUWAoP4pre5UvT71NrQZSLDkj8J1Er6wuQn5DLigyjh71ULFDuCpDxLhcQsX",
  "key27": "5kYWzPK3NkUi54YBc5uD2dS7Bvxtp5QZKKFQuxspyJ3bRALXBPWjUWqFyzVgdeXXZTGXx5F9G87K2fCyLTNPiFJ2",
  "key28": "AhNPZGYSHrcMckqoTPRKRh7RC2V6DD7wV9aExZn3sRzEZkZzALDo21Z1dyjwQUgTMVXf1EfDKe6PyNz9kfJALMZ",
  "key29": "Ss7CtBbuJwzffNZmjUMNHtybcw8pQQfQ6c1ffjrip6UQrgXDv4aLwCr8mip8asUcoqkUCF8j5RKRVhwVwvM2CcT",
  "key30": "4yozABNaNpx7dMpUC1JdQAsXkYHJL5WA72cGHC6h1ZA6qcwYJ4CeTyHk1Nu4KMievC23mVD6FJprHxc5HRfB9HqH",
  "key31": "64S5CHNY39tEba2Q941aB49dLyUb7cE6Lp5yLhC5w2s28wWPKTSVdw5zbrtH56JXCvoPtTob8nxVHbm9KUoRGCut",
  "key32": "3KsdCR9KM8mBJDRccgwJKgjSeiLsUyzvWrL5Ev8MiqiuCKjscCd45YERHyJ3AGDLPaPtQnn4w5wQPb6YWYeSfjyW",
  "key33": "5eABVWajETDpQ4KJEWnQc4SK2BpwKL1WwmFrpdNtqUu1AtnJXvoBS5zfdAKhYuYpBRXRZpBuwLm4VHgrsGaFyoKM",
  "key34": "WvGCYEzbHhykGgNArjF5DSvKqwCgCtg84cPEqc4Ltavgw8TFgi4x2VxQ9i2UWLHMPYJL61yXTpeku9aUxSF9j8m",
  "key35": "278UNm6ciBogSocc17ER2n3DDMDCqkQ6vcUq9qveo3fbvyPCDixwaxeGwnR1V4nDDrV13HEcYCBRoG98uYvMGgZA",
  "key36": "47RTUqhnzDH89vDXZXVtFmxh5wyEvyJg3t6cm5oGbLJ4RLxJ9zrWAgaM4nfTuuZbfzpm7nix35PwK6RMR19ZZ2Ty",
  "key37": "iQFC2ZNbsobn6cyqLiGzWth8orBg3SS7FBTPDHL2DRmHbkwQdVeZgZu4yi3Z7e8ekFQbpsgjoAhaCkFdV3wv8oo",
  "key38": "45ixHmhw1jn15P5i8w4XcFrMVh9nmGc6dpnodJpxDUf41QCX4c3tkJu3AwuuFhNg9XfSRF9JEd1VZPc9ZzJccBN7",
  "key39": "2h9XjbnQt5MW9NoY2E2xU94AA3uNJyL25ecXsvHTKC383dqiXTUnSrVMi7xQasKEPHx3cs8UosLHwkGoSjRqi1re",
  "key40": "231iCJgCR2186aqZhs5AwXMDJZrPhdzsRpAz42kQpHW3tgTQBHrHRbCQrGHfCxiWPjAwRZVdiTNjUCQxrSKh5uLq",
  "key41": "4sdT4wqJEcpeYgh5So27SLZnnu3Jif38FkfoGAYrD7e2yiWxF5dsvhhor8qPFkjNp335fAHNpaez2EHNd23uioYj",
  "key42": "dJLHxwGu8AcJpKjfv8p2koKuduWmGxZKzoFCnPMcqCEdv3fjt1LzXFvTF3G1koon9tDxAU3zPPMFoFzN72DmAQS",
  "key43": "xPn4Dn9bAfGQ52awDQnoGRXqWWTgnKzyQsW7HsfFr8Cm1B2cbTAzRvMNAoUNYTCAovJxFLk893L47CNzopnB6r8",
  "key44": "aH12Mc7AfT582C8AH8cDLZ6fFfmHr5uYAPdTthzj28pWgKo9w2kuVUdLekFn156QF121UKttRYPEyNUwyX8AKdt"
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
