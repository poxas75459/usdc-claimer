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
    "cbZxN4fuojmT8f9U9xJfB97RZc3AF46ov6dHug16WituRujbDV1a6yvgKh1ddnDFhew3rqJrMMo1r1Hm192eJTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63D99TEqs8GENU77nWBPy1GvFzqueSaF3HXL5k2VigvArsj5274wHCxMp4rYvpNQ97BKPJYocdBewVmBrz9LGojX",
  "key1": "2zuzfvdF9FEjXmRKQdjT2qbdczv3v3XLgwShNA2jDeFHLVthpDCaN5JoQsHx2okajZj6T8SnvCpTQSzRHZnnaM3Q",
  "key2": "sso7dnKRQ5TbNkksdqZtGTxdS8a5N4nZgsRhut8sSnYBVuPk3z55LRcqDhht5PcPY5r6nPvKWXmLicD5XYrjhAf",
  "key3": "5Sj54Yi5tnQgWZUaMQEWy7sCyQc4tBFb6xSRNi4yjyuVzFNkBjmsiDZGuZysEE98wnjF5xQruRZhEdE31LJ869sr",
  "key4": "3Q93DsEG1t8QNXEn3iUJUsa4YAkVkQYsCHCuGZMPc4rbiibLiam2okUnR2nwyo1p62Z8U59Bjr7SwMFBhvNL4oVu",
  "key5": "4ggcWMZqis3MmhYUJFpoqn7W1SV11zUhWLNJJy3wNJ5w5HH9EhPp4N9FiPPgBZ38UsbMGjxzV6VanPHqgEoXP1PG",
  "key6": "383vmyzYA4TUWRrvS75vSxBznp7ssWdfg1iJno1rB8LH8Sk46Qpu12UzSQyYap799kFm4aLErw5gf7xc3dv9D3W5",
  "key7": "4WfR4F424gXjZwsmpDVCs1nARmB3QUPeNtogQCb3aQgLJUoZe57bezNg2xqh5ze7ywH2HuDHS1bZ3Gmpk8z6nrPj",
  "key8": "4swnhrA9nexgQq1nppvGU5R9czBq9NkBEnzt478v9ZgNpT6MoeXAGLf8LowNLJJpwcvVW4DAUcS6ueMwBdHqV5WK",
  "key9": "4QVGXFvwKvUDfXWhLDakyX1vBo9y8akF5y8smaQ42kKLviWC28CL4PxX22xkHegdBxr6sywi4GsZLLxigttfdkgc",
  "key10": "3WKrRQXLbAYHwmxB2ooAqpdT3VsycS18TfHEpRCuEYxciq4FPwpviZJuJ9FZJzaJvgUUz1fJyj4gXfMHF9hTFYri",
  "key11": "677p2fYbepJkbB73DBJCvLnjgXKeMTEUJTAn5NvpGPMy2iemxJCsRi3vAysiH63vHfBirckTETkFzbuGYgSFyZ7U",
  "key12": "2bED5hsDWDc2V7uhRY9Ae1YzUWV9ApfThFgcKfcbV7dTmTzUstoRkRDBFogSZ4zWyoJF7e66tCScyE3nKgMWkDNw",
  "key13": "4KsV1QjbBqsxSqGpM5Wn9LNioKy1Xip5bN1UetG96iSdyTLkgRm2tXfSWQUaW7YSs5BX9TeqrL26Dsr7uL8N4eXn",
  "key14": "5RB2vtW1x5scEtDtuJNVeWvtUEcmqyszzphTa4KWfGHbDR9tD2UfrZogGWb7qQ4Z9u6haetCfHEBRZgi571mL5TE",
  "key15": "4AnHjLQo1uDMz6PZj8h8jGghfmXy1gS53Emp13Yx7tCYQ5gMqt9HMFRV3xqPCzwakkpBsSuT8JDQnWpKS7emYmR8",
  "key16": "5MWrD1Ln6SAgLtqy6Bj52NeP4cjaqpzBxtxuvgAYRypNryAPHaoEcaRDLFYb44cP76F4Q94xkdjSNE3YbsuVTisq",
  "key17": "5nYG6QddnDHfSz7LPEiinhjKzA5WW1GoRxzsbAYJ7eH2TPu4i82TjkGbmPVYcbiNESUCeLJ25crehCSeUbKSJsaS",
  "key18": "3z39np4ExwerneAJBqh8BUtPdE3QqXTMNi1nzHK6uq6iFT3AuLxMqxYiJe5rXadvQUnkB6xrbXVN44Gt2TCu8kR7",
  "key19": "2W7qM1mLHoCRqtYJMaZdzrUszffyZeW7XiqncSEmz3XQcDaoSj5wkmrWoF4Zrrz4oFpFVqNCCeeWa6Lim2Rn1pxZ",
  "key20": "3xtwhEYj8D57tVeSDSSUCJrNLdw7u85nUTPSgT35s1K4oDA7JfwX2fBHUbg2n5pb7Z3KAze6V5cfdwGjZdkhFK3Z",
  "key21": "2kBenyvAedg2dQkLLUoh6mSH1LnKNY6w5UASsmiKSk1j41e7kNw3WbERnogELqYPd1EmXMo4zL9eX4QJMvEFfARs",
  "key22": "UhXaRVUguJTYMCToUbb8sPyjDbjyqYcdf8SHjmVJxUtFreyMe1N4RbxEBr1p9E481j7oLDwR4uaWYJjVFUf2DPf",
  "key23": "5w6pEhB22QUyMfFxdL3DcXuDj2KghRMAnm5xFE7Ut7ggn9qFXpwQzpCqr6Hz9fiXZt8PJHz3zu4yzhrwuRWE3Cqh",
  "key24": "rU6GnjksHNS7pmeLgMnL88cSmCwuL1ignZycqaDxmTAbkvCFqQR5c27pVfipabShU1fv42UqbPVaaDhYTWBbVwv",
  "key25": "63Rs4BDDHzC4RuMrfjYQ4aTpTAFTMs6qfC6rayNpWpoQFH8r89MPdRemVcxdMVJZQim5hgnqS6X6Kzcq5xVNi6vM",
  "key26": "2rZPKbQzoZJENw4Yp4fjRnTwUHqKsDuDecw1tyGKR6hNRFqnMkwaDw7carG5LtjQbSkXDneehTZyTqhrL6PzonKR",
  "key27": "9QXZPtyX85wAivRR7wgYLp263XUTB4QDXcYbbbYhSnrkVAPC9Vaie93xs3JDcntjyMysLvvj3kRLKSA5GGXaSsp",
  "key28": "nFggdjvR6SsSYWepzmaYqDdHBHkbhe8qAxKbxbBqGHZ1PcHUZ48SSTGBSovzFLXdfA8Du2posfwEkZsKY52DRJS",
  "key29": "3mpBPEvPAG6ytV2UB7P9d3iYeExa7t7rsFihW6dStUVJ8YMNxzw5DRvyicKbKxPmfCeEQRFiafmYNxY6RnvAF9ak",
  "key30": "24cTG2ZRMn3ZSnGL338Twt9MCiqMA6eKRjx7B3qBsV2h6zFpDq5GAd7zPPCUW8ZYEauXciDVZ3rVWKuSZ4DTGS8X",
  "key31": "VxNLAAwdc9rbLbLx3G8unwT3p1Apt8cdeuvJNuS8GU6dQWNMwaBvyCx68Dbfs5VuwAV9RQKTUnDD3WoVsnbBpmk",
  "key32": "2PwBTgFQEvaiaMKJN3ba4zpnZ3xAjK7XeoQxUttoNmdbzkRw1SizmjaTjXu396mnG2vGPhdQEDFoGUtcdQytdbV2",
  "key33": "3sj1q93HKkZmcqAM5wYGLZY8cNYCUUAM2MKFwjCQFFXeSrjrpkQpsRGecqZjWx66Cb9tv6mVjAmHyjPWVdwXJFLF",
  "key34": "4N9w9nXpx1qyJ7nqA2gaTYyNrnuzY89cvokp3fV3esPtRSbZCt2Qk47rfPvRyNnkZmfQTPfjXFVBbNWHnDzrrz1E",
  "key35": "2mDrsRCj5x4wk4LHcydvvyyf2xko91DJgkAj9wayLxg2nXo6HB1uBP8dGrZ7NCKVP6tVuddxpLDJtHkhKdKQoPWJ",
  "key36": "cC1ed1Hc3J6k2ZMocGqSHXbPFXq6JDz4Vi41ybsyssWbL4LRyW1Wz3vBa4VhTULzfRvqvjdkUS2NBVwyVS7JLxG",
  "key37": "456xpDTDcyHWArULJ4E3fZTy6R5x1K6WvBbWFhejdwpJGw8wRK2mea72qgZwAGpVS29UPWZLyZJvswb6Kuo1Y1EY",
  "key38": "3Cp4LKZJD3KqqnS48ZYDXGhD86JZ5dTrHjg1iWU56V7KGq5Js9TaAThajuSM9sJyJqzFrxjp9ArT5TdmtbyXRaan"
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
