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
    "3WcsGbpik7rpdn9AzZH8mcJjtCSo1bYVnCmaXzBaaUYpkkTv9KLb65xfRnfaMLM1Pz8MqdrdPf4kpTSC78XT2Z8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zkkPwwZVUweJiHyT3D6EYA5Kcf4SjqGzJnxUE1cC7noi48LMqZqPmumLiqWQ4aFN7egHBwVyAhxy2co8gQVeg8",
  "key1": "2TjufPHczt4cqMivWwJmGoPQwc755LeFHJYwCJsjSs8Nc7oXXrZcSi3C9LwKpxZsZXwcmHteuquacdtFT8zsfuso",
  "key2": "2buM9YPzYXa3vVT4QKuf8CQUyKoMsBNAofwJD2k1mATJEeDF11uLCDFunRMrBhB1VXbBKib1zqjpdsW27qTLziHx",
  "key3": "4V9yjAazZrHGqu7woQSyDQy4UvxYLQfra1LQzRtXmeDRRXqBzogsj7zQtzfLRdsJXSGYXJUVuHKDbqrvYHYn3qc1",
  "key4": "3n7zpdoqmoj2fXxaM8FRo2HhSq6r36Xj6tTyGoHfagxeqvohnSqoJu7Z14JC99oz4sAQCPqJuupjizzqjJSj1R6J",
  "key5": "3he5HfMisyP3AuHVJrtCykow2vzngGfqbLZxLrnZQyx6cdpzu13R9NaWwT95WiuSNHMPXYRHwvdiTnsQLdaBGuUT",
  "key6": "2xs65wWneq86bXdCUc9jh9XvPXDs5Qh4BJtWvsMrCAaQoNUQJyk5yer4BiJukMramgrQKsibBqvVFuR1z811Bs5B",
  "key7": "36VJGXgzUVTu9rXLLCeYydaEvv8YARgY7V9FF8NejjtMy3rUHuyMTdnZ31k8fZFRz1tzuG7VAdFzmgJpic2CxF7C",
  "key8": "2P93R4UVjTYQ7wCP6wSXbVpyQJF9Ju37txuVs7nC9F5VZKWxJmqYBqQeTxyhPqhZKpAuDGBK1SNtKuFVN4QAJTaa",
  "key9": "48tmcSHSMKnB8cKibiaG7T3ppirgbTBKaBbxjvA1RzoCGgZMEfVHiR2yZjfaPawB42qZj7dQFNNRqUc3ahCHVAjJ",
  "key10": "57kdkYYrU5Nz8V75UT1vmGgPp7JQdpED2K2UjCwYrwND7K8Vx1bykn7UZJzPYuoVmuwJzZRJF4qU8S6hdJiSyhgD",
  "key11": "2CaCCbtc4QxPWjdeie6LuztoWdqnF6LUyniPiSXrzuY7WHvodiLqYuoUmCG9PLibU95K7rCcvpBWmsqnJp4XqWJW",
  "key12": "Sqymf3ho5HmSvmyCyUcvYcYZsin3UWzMf8WEeWsgKf1roAogD49gE5ykov1QyeshSqMMndQDuSXXs7hkyf7HNSn",
  "key13": "4WmoHaxWm4CcV6K3owZ74CZYvMY8Ypfw56oVyNkHMH9gfkkfcBicNBsynZn8vCrumLZ5Ra9pF3iosZ3zKRXLfYWg",
  "key14": "2Kni84dpWvSxtECCeFhxv2g8WwUdEV8NQmAH9TV1frnvENT7BZRx7S17cFJTbeFdeTTANmRMSZ8AUVFHr1VW6m7Q",
  "key15": "4b1FwTiH3f6iCv2rPAXUSiLu3TCs5z76CMje713Pnt7RLjYiTPvfggSYb1mWppyGXNc3Mosa7YEAg3cXqHTVufTL",
  "key16": "4VtEP8XBQWCVwf4FBcciCgDAhd58M2uA8bRj32CHcCdMEHMiFxHxinjCKdA6xnyW8kjvZ4qrD3Ek6nwN2vBhQLJH",
  "key17": "3oVjcabbya3XfUrUBMRUdkHf2gzNG8WgPZkaqtvGMvuu6poNtG7k2nwA1LBgLdTkB5JzM4su2SPK3TbsshVvqQsL",
  "key18": "3GKAFnq1rbzMLancbFRUb12bNGFtoBkznZ2qNdqkFWXCnK17AfQUFsyzZv7ucfQoabFWGMtXQXvQ3mXYqQMT3nGb",
  "key19": "3vRCySAbTnCkYX3gz94aZT58o6okHYbVdxJ5iwoCoJwxGD1dpmCaCWdX59ETyrcSUBZ9eucpREjhNPsK86khrati",
  "key20": "4EFEvtBqBwULvPwZ5GrX1ofU9dGPGePZWMeWkLrK3i7bSbdVRyojsQDvvF2mvj3ghNhZUWMx2kibDrbUyCAyRU5A",
  "key21": "8zG6b7MpSF2w1NxKj132PTqDqkTocPeNrEGU68ZyGtTukASktQjwQVDUMH6qXTGQvTY3XydxyrqgKr1KTJJLa6D",
  "key22": "5W8HVZwYHMG7tk8GuELxanBovgdqs7HpECia1nhEBtF3YKtL8RgoPVC4t1e4gRk4SbGQ74ueae3r73LKJfxh86K5",
  "key23": "4rNviWw6XkXjXLFaQ7fJA5z1KnQsrcgQ51qhwMMgVxKUXSwhrib2GoUZAgD622mFQfHU6UrZk31Bk3i7RD8zTE6z",
  "key24": "24qSuZagHeaCBzeqcK2PbvGiRpBFebjEPnTLyzZsr4HasG1VBxwiCtfYbpiDDgqrt7UijxG8AGh9UiL3pZTn4vWm",
  "key25": "5ukreq3udDpUYLyoQwgHvCJVMPd3kPPxkVuZBA4Mysta1F6vJ8wYYSR5LcYt16erpf64WZKVwzRFosiQpPGGu6np",
  "key26": "3XrbEHpHLf6BH1Xpn79HzCxebninNp1KniB6pRQDixLbuG4uFd7h4vmQU9oJERA8dYWmE9Mqgyzsoiye219mQaoq",
  "key27": "23zqJTZVin3byvVS26kdwsmVgph22VUgejYT4vXFGnY9Bak9unKxcecoLBD2fZkd6p9GnqWUwU7nLRXVYEmp35nt",
  "key28": "3mhk574mXcGcEZohuNJ85qkx2ZuXGmkiPP3N6X4STDYPJgAJspWvcaf9UQW7q4nhmTCnYMZLJ2YBpxQJBQskLUik",
  "key29": "67aK2VsBR2GowTXDpx3jrz7JTZ3sWg1YoBbLzERaMtzpTW6mdaR8uF1cF2kQdpvMDhY7XA3vcw1avdCLz9t22cJy",
  "key30": "mtFHa7VtHUSV9Ax9M38VSM3zMagEDAHowRLSCCpbKERsbh7drs4dKLtUbtDmMoW4AyK5pxu7FN7axN5uxBbb2iv",
  "key31": "4wp1SjfZZ11s8Qm7s7QAfyNW1c3Hk1YoryJE3KUZbNciBUasLZsMyc9EfwRvDy1rXEqckfz56tSHuY6peEdDCwSp",
  "key32": "EhWNUKZfttSAstWR4xHtyUvPwkpR8fVGDQSnMChh9fgAYTUcmkGkV1jTkxDgNFw4V6Y2uEDobd7yhq7KdLze73v",
  "key33": "4UP45mBZp5p2PPgPbbEQgqbt6EdTH7imAH2nWCJhr5TzkzyK9B5B2LtHyzVYG1Ednh3BdQbWi9bkEqczMKyJeDfH",
  "key34": "37MkFMeChqFzGMDHrafvng5CgK1t6eUrNS35tanShsDgzJmF4nDGB2mKN3hw1779KqNS3vuS88iFNcoNwGxSYtnt",
  "key35": "3Gg7DUSqgJmLEQ6EpboTKSAsJRYVkeZzz2e3hPnUwmd8RzMwceGGdya1RvQoCuoXZZEWoVqeGXnhbyqn4U4L5szo",
  "key36": "3gGmmjb3ZwAzVaQeg86E9eSVodjMa8pZNEHgUVhubykgJQazjNqW33cSzENLXoBUTWHPETNY4PQAZ4dW4qJjxTLA",
  "key37": "4zBnfPEnnETrhbKEHrPXSEcqdnwgLWGicCp1xsRi99W1DRG3WDfmuPjFCGjk5NU389j2UaSUuUr9Zbxo8y4JRYvf",
  "key38": "4w6suYcenG1Rcg1D29gZeZEVKPqUbq1i47NXzyLBWY44iaDkvwueLpgbqtedtwEYJKqYKspByvZ1ae1pfvq32xK3",
  "key39": "RNzBiAGqoxB7xTRyZ2jyqjDdoxmwHp2hryzPQubAvVoZCKC7DKpx8NbwbeGNYRgS8QzXESUWept1B35SEzYEtw5",
  "key40": "5EmC8y2r9d3HbvrMidfi9t6TTH8C5dmKMdN128AFPJxx7Vuk65GvvGupxqSmXrbKcUQg8SVDrQCVdkN3C5AmUQFe",
  "key41": "5Y2raWMWAmdEtHNRm6GMJubq7jAkYyXLyc3LG6aEduGgbj1ceSEkLuNcxAKXghjZtuNXowR7GVUyV32Lk5V2RbCQ",
  "key42": "46AgsnnBLvxqFzbsEURUK4YjwU727C9e4NFt4eEqLbYNf4pSEi2SbmSYffoyTbi6AFuuatepwCX6wDkuQfqZojhm",
  "key43": "5MEfwMhPMLwoK4kGjrNcW4RK4oK64wSxbnWzTrHxpYZZenyVnxFiT8q1RzffJJREtCh2MAZyavWN4YxM1oVDufbW",
  "key44": "2u8kJUePDJTuxq9ZMkfcUpPhJQk8R4fS69phG95JWRdwQcJycrt1uv11kQRykk1v3sodU75Zy4nfL4sc3DBPaMgH"
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
