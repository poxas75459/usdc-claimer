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
    "3t1KRqsKRmq38423WRvgoJPeFhx3UzmkF3NFNThYZ4VhTU8BP1zvVZbgxSySJEP1cikpTZRTXmwhpANXyrrEY6vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7K2yjw4kwkUNpMWtZ5v5PAg3kPK4Xyo6p8AqTWZMHXPdpM6HxgoiZt23YZhmiKPTKZeaUix2tM9gskW27MTgTt",
  "key1": "4ULUH7pWMcqBJf18mg3ihi8RNioQt8JSzkRUbqxqvmDAKwWgb1xR3zfPgtBEr51RmCzh6AH8QrEDcn2YHnASpAqT",
  "key2": "2SBQR8AWLk3uYPZB7D39X2RqcsRB5rG3q6wxs9Tmumb7wyFZJfZrpG5x29C2bsCtyexVR5cbuRkTCe6ZDMavRD6z",
  "key3": "4Q9eFsucfHe5xvULURukwTyvT4KuJyBrJw5LmjGEtxZC4idNiWDkAc2FtWqdR6rvLYfgR5Ex1PdbkrBgT3uLtWX7",
  "key4": "5bG7xaMwky7LNLkkFqp9MmpJFYbGPdsQnt6AU3gfmpeFaC482yPJ6VyuWLXEwVcWQA7LjAMM8gtHQmJuZwz9stbZ",
  "key5": "3V2dcSd1cDAYc1jrkFxXqH4yYnhovqWA4RsK8QVnnSoTmUpS3otVeGuTfVnVUEWWR196arAvFMxhmuqfaeV3JDu1",
  "key6": "2aCNYLYsxvgvaPJmZFYkGfXVj842GMvadKLst6ELnfJRnEHX82f8SXwoTrni4kjTz1hvofzfyiJ77qonSZQ1mhRM",
  "key7": "5rFUJPtTEmha4TVZfxiUyjiDzNjY3yPxsMCH9Gtdchmicna6P4A56i2JS8YEv4bbzvp4X9fbtkEVm1WjQgfLxGbW",
  "key8": "5V8vyiwyc7wm2HNpzDcw5pr1DyQYMPemSeo4eonsmJ5CrWMtoajE6XVYMekoG1CCUGh6suqour7UMXjSznYJcNrs",
  "key9": "qmH5NkWmACm6HxLoiVuPf2Aymzg4SvT7H3YVVwPkwbp9L3RhNd1VrfkT8EDQYfMWMgNuxHihFcdfj7ouDDiXj8L",
  "key10": "5G857XuZrJRypTp6fPKkNQv2gzJ4FJrABdbpfu4xYPcbUStm4tA9zGwMSATuPEQHcb6rFJcZZkTuh984J4XfSqa",
  "key11": "4cAK475pReLYKKnWDwctYdekDvtfL4RYfssg2KFQCCrzfDf7TD7qLxa14DiEKZS39PLfXqa4AHeeDtgBajtHBMWh",
  "key12": "4n5Wy5foqqifSTgKRn15wVUhzty24rKJYmzXqK2umRWLesDT57FwRx5dKAxE7ggR6G92QUFTCA5tvqAkKsctrXgZ",
  "key13": "4mPtQfE689dy6BcJgtS5qfCtYXitKQR19to8odD4Kp4zCVf4BbgHkxPvdqxs5TTK1r2a6yTSnZVacTJT4C6mvA8k",
  "key14": "49A9yng8GAv4EEj76cUCvhQZ42waCW4D5STtG9FEx1dVr7wAZYvsNwsvCuXbQJcvZCuCSawLruSgDWqHW7hvQ82S",
  "key15": "4H1652dshVRwN7WCZoeHK82EjenLnBA8vsJCWL1W3LSLfN9yKDLNxdUG1gKv2N5mA1FqrXdwaLL9wC4YqkBRmExc",
  "key16": "35yxKDQMSDwhuBrJK6B7gXky8A2qc3VtBC7r41hHEap9gunr186jx8mVV5EC9StYDwXFficy8KoxfqTcs5Ykxj8g",
  "key17": "FDJVEacB8GG9dkFmdJezyoN1aMekrsuu4Pheb5xZSLackxM5AzYGZVTDusNePdCyWVRGRW3vMQhUeFdKt1QdDBB",
  "key18": "3NwaY5NcETCxPmEn4PTR6wvNMeBbpYcP4sBDEYvPLffK7LVPaufDPGDB7nGZ7xFh1qVXYJCLyTmYTcMmcVdC2SJx",
  "key19": "pMBb9HL8GkLH6uj5UogKdXjdTZzFBoy5SifavtCFRnXHLvZd5NSp6rdycC1EJCayw9jTbXAD3Kv7UcoiRVAc8eh",
  "key20": "EkehBMMrNercXLe9HJybsFseVNMM57z1P54F2JqAgUEJNxVwjZ2zFihYPoapZtkvkD1jVsWRhZEYummqt6RUo3G",
  "key21": "PQyhg5J132RLzmderu8enBVMe83wkDuzXQBxTmfhGCLYRWmb62djxSBHhZjgnE189oNwyWJm1ybiuyzm5w9Cr6T",
  "key22": "5VpshkHxo88spWEGRCfmwEXMKjXCCKZSx2HKVC173yHg1vCDy8HCEcWLCA6EE51L4cwFJpEbgv6S3yL2twCHJ6mE",
  "key23": "2T2RXYChdenjnyJScNR65qPfGJEyTPbrgQgasxLjpdRD2NVUYonjJkqy97R6NSxR9pqK55PNz8ebU45gUBznU2j8",
  "key24": "2iz81f3vhRCS4w86qquWvihTRFNczkwDQjB2CM9VUwmNmjCiaTuQL2Qe76WWeYWTQqNxTd4Ydf2fKsZ8iB3kXrTC",
  "key25": "5ZsNe3geGcXgRkVdHy9XvYRrn6bfEXrmxsYiEXkUuE4mGJe1oweTKb2YXRLG1kNEJNTpxjJPkavck9T5AVrxquYi",
  "key26": "5cEivvLaRzuTUc5pyccMG9Lbig1igBQoknbs4o2GqTDqpYdDaB64SXkTG4jKbJb2yqxmDfZiuhAb2BtvXKTHGAq5",
  "key27": "3Bm9y1VJdDZNg1VcQFRvWBKXhxBHkrnSaxf9zY7UeihEasEPmPRNngCUxFe1Uc8RFwggMmrDuaZ2bNyHNN65Uz9A",
  "key28": "5SrqWWt3BGVNh3A5SSanzpKGEKny9rWim3XkD4G1k9cVHbh7QnZrtjqzp1TEQZKhWmtcz81qmqUpg8aLDNSQQuXd",
  "key29": "668tqLyNEXYzkKh9JMoQgTpdgeoy6JhQVzF5RSpesKUnamZc2dHBSL9gasFfmPBm6rzbLsfvi7JssRYaKGduqQDX",
  "key30": "4s5vrxn7cLC7EHKUSCzh65kpAexAR7QYu1sBa1JBN1GGdBieE9qgD8MS4wK5GZVyzMFxx4xctT9rUwbiLm933vGP",
  "key31": "3PWaUhqW6jp5wc4eV1QPsnoxCq7M9mdyS3h3ks7woGD3WJ9v3sR9xhnXBUFLtRqHGomNU4cAGt8BfWgUyJKmobr2",
  "key32": "VF67m854uULkBGVc4Y2iUvv3SGGcWvnWz7JFtgy7Yj9x5ZF73qyF3nxSvimD2PxQr6MWMPF6yfA42CNPmSjjQxF",
  "key33": "EEwtWz8E5QxU3rdguyXzYQaXTZvMmPYBH7fsypJcpiHHFCtPvhUt7PxWRSZuULcEwZXt9ugyjKTirEaLvAqdNFe",
  "key34": "4eE8TGiECD4UJfMMP6zxxMp9puBJX3tH2BxaDreKomxkeQUGsHmyLa7xdsgrzFoJXA87FxRK3FBx6JmHjHMmixKk",
  "key35": "4o4H2jR4hioRoEC2kdwLSnjBnsobWsmUYZF1uL2QckxmeXgEWnqb68azX97JKLFHNJ5kntii5ADtFKEs9EWA4bB5",
  "key36": "4moDQDm3VhAg2mnPQvGeLS939oTSWksBHcQ57KfVxK1oVPQ3P4LXaMNVubdPoNwLvzLQBiPvj1BSUwy58ffC4rDA",
  "key37": "4dnUFBoeXqggfN62fka72vRMAHCJRh4xCbhpwdAghaqoHFdPS1wFauHZ5aGw6zEo67YnbyNGrxTm6rBxZvSFH7JB",
  "key38": "5xozgeKyeimXhmqvqWVftvZX6t5GgAnHMuXavpZAnFi8v1y9A51aaT6NtQFRXzNvbMD8P8dYA3eEBDB7HtM4bTjS",
  "key39": "2e2gAitgRbbR5MRnCRkLgvr4rbh9nd5u216m2q4H8fUeKdNZHw42RMcsM6mEaUydg7jioDXC1MF9Cs8QqPt7uZ4r",
  "key40": "3bH86hHMFibFEJeKdoUnLDuq4XfCy3MQMGQRTuz6hi42q5MXqkQWopV2YCHKs74D5f1dSKu8U8pxnpPKyCHhR1XA",
  "key41": "19rtZzENRghYN6iWgZci2RWRUpUp8SxEmTDQ3dneq1Q8ePXy1LDHJzTwyB4QS4LjPkeUkCsdb1MGfykCSDDoLp6",
  "key42": "3HPjV1LTnz8r5qd7r4XgY6yo29C2PJLYEYTqUmbo9LoJhucCqZ1SamVyxMqU7sxebtw6WEhVnCkErWemFfdBSAdG",
  "key43": "jjs7YyBKDqcfjTuNTaSLbd9mDvTLzwfq8PqWe9Fbq2WexoZXtFJZeFRi9Ptc2XcaS4aefxu12uWEdsY3FgDFA3j",
  "key44": "511oUSqqq6SBxvyZxTmZtRZzUhVi7wp81LsR11oQdZ2B7nfVxGuC84QV4tYWwydjPWE8PqikYyLpHVvymX9Yfyg5",
  "key45": "4f1GK2Yq673YUW3yJ1cbztqtTaEt7UYMeHWj2aaBXjSu9EArqxAiidiU6KumSSYL5zG7ZrRjLiwX9CMYYsQf9wAJ"
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
