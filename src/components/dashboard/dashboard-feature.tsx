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
    "3jPGkestxBY8T4RqyBfnJAMXENxsQUFZWeptW7Xy9WKXGAQ7AVjbqESUZ4VxVZGyUJPyba8bXzWuih3AD4DnaZp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hfWjjehw8TqBMpChnoAkHPkE9Jd5cdVafWfzc4rRdAs6gA5MDX84ScQo2T7uiybjC7VYeTJ3ostr6Uk5DZK34kF",
  "key1": "2KqiJ5EowhfiD4hXELugNxqSvWzUejmeGmLTNEbsd3Ax5FyaR6ATmhHGgwqMSqKrphptZtd4mpvDodHH6r3YxGyP",
  "key2": "5ZLE4eZ1JfYmebhn5q6dD5xP6SUqrvYZc9waDetfT8oBXTVEx1emg5Z6hcpKYwLKeAWy3Qo51ZLPTCvhidwFZyyY",
  "key3": "5ETSYjsspovSKAT6RqxUb54qWaFcZd7uncAuL2F9ivBvEMZMUr9NNjb5wZW9r2mwrHPf7r4QqdnD83ySTTS8pb6Z",
  "key4": "Sr4vqw2ErupU6PueDkR3yvMoDRz9gW9osGVMvHUhWcf2SEeW6Xvwtr31LNXVgdtZ33wTuke9yrX8qXoWWLRVT5c",
  "key5": "51yX4PiT9Yb8jW1G8jQua9FyQEXmpPCzDsBoE2kXaM3WgC4r3wE2fEkHGGuXEySk8UaXYxyrBAJ4rhPwVAsegNyQ",
  "key6": "4Vp2HMTvBfFoa9JCD3FT3K8KFBmNZYaMzZC65JUbd4W7UkixRhyxNGB7Chf6Dvr9MQADrzgSv5iSmmWTuR1r9awD",
  "key7": "3uaBtKiszFUvRZ6D3w1mz5oZ96hcUoPTwpWA8tPXtgi57d5pDLjQpY8QBLFfmkSLWqTtBZQVZdktnhkz8GEV6utG",
  "key8": "4SjZ7mCjj8b4Ags91HLBuwPhtVEEpRtokaqRRk9X34Gfme91Cics4TQKgxdJNMQ7H1YnuSmz6khjEyD88NWxQS7R",
  "key9": "2VaDXdENqGS154E63wfWW6dQAz1zKhsJBxbT3366DvPh7wYcovwuGUjZJFxLteFSdHk7KXBDwz4m1pttKeYj1LKZ",
  "key10": "2GWwuKkiBfkgLe9WpiThM6p7itNoAW9X55qiKLdVFHtuVQU4mTrCJgcyGYRF8eoA5Coj7s8S1qCKfa6Lc9SwoTyF",
  "key11": "2h2jJWv2HgSYS32vepDrtyxx9qPXz6JTopbcS3sjv7AkW8P2AyWvA2mQS53e8U6SRdqXytGgfcqDC3gLZCtv91zX",
  "key12": "d4QuNxUVGjd2j4x24UnMdRttEzUNEbkeXiMiJ5vsRCer3aFzK5qL25wSuEnvk4tWetj4T25WaXeygFUrTs6p35F",
  "key13": "3iBUftPnjCmfPRqcptXWAhoSiLLkZW16yzS1hXTi5B2BAhH85sSSR5FHDJ7QgSk5CjFFEAXuQwtMACpPSCtuGHro",
  "key14": "ERcWfENm4AEDRRsogjZs8YuiyTwHpD4SwWqTT6kM2J1M6xnRNtYsjCBzZEMxQaaA8JE8hJP8hVFZYvVF3cw5hFk",
  "key15": "ZAwNqAUTFjAygtwtcXpoJG36wBnkU9N1MKRmRzNy3n3JF8vNSUFAF8MVMUrZDnzmdNQQRL8u34FseiVr46e2JuG",
  "key16": "APcBPLt1QN2FWKSie4PJzkL9NpnXLui8CuWjmGFvFbu1JdaFxs6on6B7LpMxCEsQoS6PAVr43tsJ4KKJ1Rr9iFM",
  "key17": "96CZfY93moCRS9ob6mFroKgFAG69wyN6e1PnR4EAQjrLSYaWMeFsTmNe3fUTM7eyLoaEsSDX5WfU24Jjb3T6ez6",
  "key18": "5veAFXhCCZyCbdbL54qCAPAkgmxgqjcQV9AnU1H4Ny8q2tjJUigjVomtZKHXg2rkwSaLFCy6EuTWHs6Up3pyuCr5",
  "key19": "2yZNMnbXxcxuHr81eYUfnDGFpG1xsU1ffVkxLMeAbFeqaaonQGpnTkFP3D11vWsqYdQZQza4NpCqHDNkZFd1FQe2",
  "key20": "2aTJLzuqceuy6ghSc3zToPFx8PjCfVmbBw5CmqsvbRn31evkFKfAZqaDzrv4oxBfSKVYhvVDAM3EUvRz2jFRigqB",
  "key21": "67jZAS9GbKJursxUtdyAMDTenE2yMeLWHzjwXn6RUhik2SGywAyjD5MBMHB4UiaENd4UToC2AedwLVFGaBj4SEpZ",
  "key22": "5wjP52yq9WAiXAX71aszs2xij9fmHWmFumCym2E4c4RJj23EzmE47vT5sRFyWFnXBKn76G9GrMZxVDcdYhJ3sgWr",
  "key23": "TrYBwFEDx6sDmCVLnAgxLhTEsVWjcmuD3eZVjQsWkA3envDK828Nzd2Lh352Ef5SNSTyycNNaG6FiqmMWk9RQdY",
  "key24": "kvR21fd54qjiZ7BYV2XUbAAR5KirnvLPGteJGW3ESjVLfffPG7zt3iLQMve6PN4ta1rqmjssio9wfEqWG5Piywz",
  "key25": "YXmV9ccTwyaJyQY4kbnbSubzQFfS4NLwrumidE3LRFvCV6ZChqh9SFn1DcnnLs47GucbSeDMGoV7FwKAGuor76S",
  "key26": "5rwYGsgyKMM1McUYaz11w2JzS3oA5m1EqJVECG8LF5efRM9qR1NNrgXEH7CqKsrAzS49bRz4t8MzDMheEafkdPgF",
  "key27": "zEXL9ydhxgncDP6mXSswu3CJYKnxHmnGzBHUKQd9sKWMjC8r8U6DdLvQDbDtcF5Y341snKRZduo7vXMistegp7J",
  "key28": "3oR8hbKjHpo24a9FBjBj9pRifhvHZtYg4EDW3tCfjobQCLhD9NiCroyGv7bfSJgKPQYpSqsr5CS66HSVKMuKkqr4",
  "key29": "5prQk2YEYsBGkkaoSWPkG6z4HpnxW5H4VBARdaj5n5xFoTKdfPjpAgBuj8tdUzeUsnV45AYEoNHhdhEkmL6BNeLR",
  "key30": "LsD5LUGUPZAf78V9aWzjk1WndDWB4T3No7cQggbmCKzju6n1pqym6UvFWhrGDRa3U3eQ97EiZTrPyBaUF63xoD2",
  "key31": "4QnicgFPvcisstfzxbYxBq5HrVw7qjepvfnk1XfCBBMDre9eCftLMgGyL1KVSJ1p6EiE5jhTKXRBcszLzXNr21oU",
  "key32": "2rNf4ycY82fZvmNVBJSkdmhuC7AM5Rx9LQpDaD3JTpGJr2v8TEZRWMAphxqqPrz7RR5odQ3GMkBkPxmDsGnWgL72",
  "key33": "C9NwvrnANtxP99uCqJZjhbjb7XXrKvQ772kJBqo52MDkA2FaU6URis5rSxVAMNvAp3Zs2NmoZEnA1jYKNJfnBF9"
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
