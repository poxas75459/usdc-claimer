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
    "mVg32tC7rVTabpetpRCgMW16EvfzmaGRyE5hEP8BzcdnAmZMHZ5MLgWj9U6gQbVTqEkeUUrGeT2Nd8nhkCti1XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U9B72ju58A4nTtakLTJgYTqUqMNueJufRmhJm3SgZ9agoaSY1ss3vPtjpHTZo2Rd9bByBWN8U6XReoLjd94dzSf",
  "key1": "JzoaRL5wqzdVD1MakXQ2DpTrrzzroSBXLpWfR1y4xXN7t58WvmeNek4AZNB4biRE5sgru8AvrEDumoMpok1guKG",
  "key2": "5wg3mQkQvv2EU6gCK4xF3CtFZRpvY4bC6Jqj48XghfYWxMYApzbybCsFtpnch4cnjkJeUhzgNPV9kA2exMa3oBJH",
  "key3": "4rGp1kLaioYfSBrVTd6bKUHeRsuMyKMjhehP2jzyp2aoWcywrSQ2CtXgwR9JfpBXknNP5PnhsV8kykcEAZt7LThj",
  "key4": "2J1xCdoGmucXh3UxYJCXHsUnAQuT6Pv4zDTawmwT4EadqA3sBReYKxd5vXWgs8ExjuSt1JVeSH21hDd1UsqkzzT5",
  "key5": "42v3DYpS3uahEoi9VTKVNzP4WRWxMaxGCDXtxvXDZm2VtKUc5zqjD5oFnnXFYLxZgJYohgmdva7JYtJr675zzcRH",
  "key6": "QkLbvqx7y3g5UVVSmHPbvAxgMoBMFQLj23RLys511CnGLxQs2Jd87hRzGGUUpsioftjnTDYDovBcLgheSjkzTPN",
  "key7": "8Xbhe5BZXW1EgTqQHRwe3h1FfsyTrGcWSvJRirRZZNnyxeVj3WtgWA5HabHbTtZL1LxsW8AEVnkedPp8Ntc6tsg",
  "key8": "2mZcD8AA7WEjiUUyJbhEpHDWbYY2rY652TKQjVtwQfoshULG9DeYAfa52BLUfbpbZuh5JRzZFbW2B5rCUEfvdiwi",
  "key9": "3iPVYrh4GgWRCF4CdguBrsPCfSDGQJygC9DX2inxnXHgwuEtZs1oXAw3J3Hm5nvdnxz6FRVxGkNwovPba4fFvwQy",
  "key10": "4yNsA3S2MnHgyDut9bVDzT926Gk518BZLcGMAGLCBLVSJY1Yfq7FLkAPNwkDAEKUW8nZamv7N3r315YsXgvveCJP",
  "key11": "pC23ZfW2ZXQxcsFR8aMVcA3JWQa7jtGbbxFgqpAU8HdWEDKSeuh7m634J6PQtZs9rkXoTcBTnnqi4hg8kTmPc5T",
  "key12": "5Vut93dd5r5pnuX88w7QhN1etj4eRqBNPRidK7VEAJRnier2CqxRtJbCzB2SriLozZMU1Y6yr7NH7MNyb6VimNUG",
  "key13": "5FnzmdhD1SNxSs1f5DhrurWeUTVgGD5RmJgEARFZx1T7xCxjYfa9giYHY2WJQmaGxVmBPD6NZ8TtDmATqX4T4A5F",
  "key14": "4RytHLYegL6XK6NXQKs1ARvw75FkKUAoBCFiM9SV2qapyfgJEjiKrAGGjwSFxv6uDAt9aow85RRnRhPcJer3yxL3",
  "key15": "4qToLhJP8D4bcvyw2UaoqG6cAN3dXXjTfMLiBtPm3va3jue3GffBh3JhcdY3t7z5bAc3Ns8C5FFcn9e2n17Gvsja",
  "key16": "4eCQHXcFNLqc91XrHETC1DkVecZhd7pjAX1fu9DGiFzVjLtTv7VHQtbystgTMkJaB2v2B5ontnMrrnfAhcdWrs6Q",
  "key17": "5wtsBfndQHx2bgd6gzbnFiU6x9aeoLCTgbxcmQPP9RvSrJ1UotyhxtcbUppCVZu4wYAak3ZtYxUmvfsi4XhNgqBa",
  "key18": "4pSzX1wiVU7z4UQ88yMRHqS9LoffchZGu9oVkPuwXg6ynVJv8p7XmcNWK4R8djxoEyZSbxaUKuaY1WMr9o1SBfNy",
  "key19": "TdBe8UG2cjEUg76pcfdJZPgizDFhRv5hqnVvvs6oQ8nk2Hab8Yx3HuYSoQRD3Y9meEB21QmJs71gSkKewQ6Rd7B",
  "key20": "4yAMi1pdyYeqtK2WbWzG5Q4zzNrLo3vVg3S6WSTSRDjb71qgnd8yXp24mx6QEnCZG1AYVQzafb3S72Kx29CJA5eq",
  "key21": "45rpoxfqff5MkA3JmAuo63Toh24GzAaeRMuM6LJB6xWYSAr5aFEJzSXfEajDj7N8VziVcbFs8KyAUyGTX9ZTnHx4",
  "key22": "4Vch7wNS1csMaTkNWqAjvk7jiKEWR2obDbB67EJhTAWQrCpDUQFH8SPm9Jt1Mn7Ky87KzqS44obedp9xi3K8A8XC",
  "key23": "4sqGTMBbfDYZNtnaW48LFtkCi17mGTZwrjZf7XkKRXgLkBKFCxP6jgmEdN3HoJ2jP7MowWBM2RayK8HFJNt3cH8K",
  "key24": "3SXcSUnb3dBYS1JpmiuU8dJmaVWHNPSA3UWznrku44WqgPBpS6GNiasYy8fpyaPad2f6czoz2r8Ty7DLjUwK5KXJ",
  "key25": "3xheHJuJX9Hbxomantzc8tWNCxqFTdQpZFqcU6LYvyCNfgbcXx5FWHHTa2B7Tnic5D4uABN8FD8yzdwdZrccQHV6",
  "key26": "J8qLSBiJDmFotmxbz7HM4oGKY4LzS4hdE1Bj5ETamDXwekYVQWmM46S1tgunYJRFT4de5fvjqx4kKBqwujAR8Nh",
  "key27": "3rH1EZVn56gZbogMAKmaR7wwp8H163NrzHbueqXMM5gUdpGDyRDAaXinQhycyzJW9zxURv3BfGZsns15cwojEy7H",
  "key28": "5K3ZketfJ3WUEcWi5aej1oNwEP6QnBdJy9BjKN2C9pwd7dSFPSG57Fm673EpeHqELFK3cPgYReqBrJeAWkee5Xb6",
  "key29": "5J8LxGDs3sqbHWF99ekgqb8LrHMf2hf9qhnPVD8WfjgscpcqqZM3bcyimtXZEd4SqLuwu8zf2LNQZUzUMhEpSTyZ",
  "key30": "4mX2SVkxG2Z5AUzC86Q9JKpfiCPRxxLSg3JHNVTiRw5gzbiPAt7rxW1VyFtcwKL3pLpvDRcKLZUwa5FKCHGNtscn",
  "key31": "3Pa51kG6AWrj1VZidUpCHUSf83WAsGf9BPk3m3QkiACx5hvAYADDXHBD23YE9Ei3JAovFQmis6Wgqh2spmhQX4dj",
  "key32": "58j3QLLgAY3iXRptjGxnn4cuhsabBbERmqwatW8MLeX8di3PDXXLxweYac4mRj6eSeKdJ5KqbzQNwoZnwV3t91uA",
  "key33": "3KjkfZ1EuraYEaPydkpfTVXCXt9WFmgoUzzvMBu9twQh7TGTNQbt1442SuagHX7kraV9C6SALvMa5YXtTLPKCzKL",
  "key34": "2SsmzJRQw8R8wmFczmDNKdvneP9Yap3YzfLq8qeW9ywmFgNpSfymqSx4AHcduZ6BLrifx6gQUWbLQFpHAF7RSXSi",
  "key35": "2jUh8LXP6rPgNxMfFkaKHRhUJvA9pPxCZ9yHKwZ3uHAxxj3i7j1q5NFajCEgMUcFTZ24LhUgxHhodGheSSbVjxRQ",
  "key36": "4vL6TeksqPBM6U7Ds4yoHzZ9vUFHosvSPBLmUgyk1cnVmg1iSFFMYNk8tPnyvou5ntKJ6XUkXAb3XtQqcUoVY2D4",
  "key37": "4jxyJMZXMH9yyD7MGreXFospqxJSSbazTN4C9CYoEGfmgHEQz5itWFaF7vB4Mcq7LQDtdQQBKnkX1xeQJ7gGFEWk",
  "key38": "3f2LvSbKzxkCFc2M9SwDLXAPPBpbRKJ1KZse8Lncc7HwngdMFkcZ5vPHrGfZfZhTyXPeBKqHEaWMWFcpza8Ebs6m",
  "key39": "4WbHh8nqSBXEVjkUFT4u8Ft131zQTrcTRvK9gPmffSYNC1mLERKL3FpvYCQkX4RuhHHdNNkHKJm5SwY3fmaCMvuv",
  "key40": "2VXybW3t17YNcpXcCbytVSDoEcf1cAhdQNyaoXkvRG46Xw91AkfMGwxgDuvLAwMVi4KHfG7csv1Eb75FxygUf9Bv",
  "key41": "4bGZurWERcDuQE8cvfnqtyLFNY24wotMBE44T8RZZaMnkHYLdWcLr8wtrm8grUDuxEXi368xTaijVdrGYkfReyyy",
  "key42": "5xpNqD9N3HBKDaSVrUjTzUsyeY18f4N4HmSdNFMpCVtutTgwziUiGwfpAK9KTGPg1mjwohKVf2uqs4P13ScDQBur",
  "key43": "3ZJ2xW8pMgroZNtayiFTMaGiTfp3JnzcGxbXpPqSfkn7CZnEShf8DtviLoZdw8rko9sCb93fRedPoAc4dSeQhzRR",
  "key44": "3krENthGJvZ5osLTSsrJrV4mQ4GtmdbN1BcSKh37ve9YVtFzj3GXFFdweJYrwdjD75Cpjiy2kaBiXoRYj4b4fiw4",
  "key45": "31XvmhLtKPkQkWGNMkqpR6nMnpeAWJYnx6kLQFBmTnaNxkffvmFtURXsKKdTjwS8sVSCbSokkEkwx9HWmWwDTFjk",
  "key46": "3guotKopfbznVD18RzNjMndpKnpT8givpKAHfPn9oN9oNJcRiv6dxv7fmKPS315VQ4LC5uQFENushyFEZy33dP1i",
  "key47": "2UJHEg6PAUTqHG1eGNq8Fv8GpejYbB1zScWBNa8masXPfTuhuvexYQ59z1LvSotKt6nJgkZX5rAEnYUwCVcwMmHY",
  "key48": "34dL8KFPqWH2tp8c2Jt7QUf9dRrqRAZkA1i1cbkpf5Yj9cqqpXH36hKjnJ9qwm96v5WUdvj3ZTDHv4XKjYCMTw62"
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
