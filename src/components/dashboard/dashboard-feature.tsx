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
    "3teKj89Qy6cV6EGsUdsUA9z2jbJyN7FAXGBcaNNehWeBHingST7bpfEHEUDMxYWCMsW5v4bRrFeckcFrYDqA6dhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GtGZJKHHhx3GTDpTyUaKK2fKqdBk5pv9VLUudceNRjzhPMvbBSy2ZKwXi2DznsCLDhXiXhkR72S6NGcz8LApdnc",
  "key1": "2rgLVWmB15F1aWhZJyeELKVo1ag6szatq4rTWbABDzNo58DoWSoEnqaZreU6HnWnV3HFQJv2DB3wnLxhw7Ak3Fhw",
  "key2": "2suoZuhisrBqQ9JgkXQJS5ZVXLTmn9oaPhSAsoQXbKMWTVLCx6fktJKowY2EdViRv6YQP8nzwkkFikC367EuVM1M",
  "key3": "uz8Rvr8MbZd6SaBBM916uezNTtoiHKTGwffrMzpndeHhdoiK44hsTZ5YCoKyqhmhQKZ9AuBvNpTssUEAddSichZ",
  "key4": "4ZWfogvdL3jJeuvHM5SaKbUQ5xR56qfMeTU8nVyWzUvHE6xJwKvUHzZra8EB2jornb3NF1KpgYfL2AgQEwpefhRD",
  "key5": "2C2VQKSPxD43BrUQT5Y5cTvn3AitHgLgpnteKW8EiZVqzzrEkz6e5NPwPfDRF3BsJV2STiMQhLr6TQD8hockEUKu",
  "key6": "3q3cxEVMBm8ZPMw2bL47LZo2rScBLihG3wk3fcK4CRHV6CSky6kTyLZSpbvAUgvbgQaNp6XDALQQ8aaTCL3yKRSj",
  "key7": "4ZhKayqKDsyiPqpixqTARWURuHY9nLJN79kfGguDQTkZKFx5bgCD9TLXLZJMKm75Q2BCTiEFywrEt4TU56R7YPCY",
  "key8": "fEQcqFaJRaw3debNL4S6HZbWk4RzHgr1oVRppKZro19RW81pYa6rSoAdSC7ySbsjSaoRkbW2e16DQx7oXpiQ3mw",
  "key9": "5DKJYSfKzrNW1d2xR38kBr59G5rchKrzLAsGbNWieF3saT1AyCgmJ3v1cDND1kGYUsndDtoZMAfhSUEfRkG1msMf",
  "key10": "2f6wH2zg2CQwRSMSi8eYzS8RMknRxQZTe9p3qKkzNNqa8qxQArA5jG8eDC42xy5SCPMpPpfhD8RYp4qYoSJ1eLCt",
  "key11": "Jycvi7vcaDDoyjohYqExrodVCUXEE73o2cAhohjeqvHsKZaRaBhFcTRtySDFmKQS3e3q1hwaDz6ufQGhtTZwFZ2",
  "key12": "2AZytkSvahrGcH7pzgu7y8gh2c7c65TcxHMnBmfv8kqiCykBkqmhQSkGFnnEiE5QrdRoLSyg3hhUE16fW6gcBPTA",
  "key13": "3hkwPP77D1bGeu3xCb8nSAZkaAD94zi8SerLu5Ctwzzq7zg8K66QjghjHQbqSXhSVLqtQr7phPQ9Xb5HWEzN5nHw",
  "key14": "5h1aAusZxRWAbB6KepXMPuQSQv1FoZucZy5czubsiVnvCq4ii8ifWJUfwNzL8CzUX8xz143TWVBoE7g2HqS354XP",
  "key15": "2sEKKEgicfMP5dBirBSDY2W4zwGLbpuZM4qC3f4tXFkia2ir9Cxy8KZTRjF1LNuP74NE7NJr6p6UGPKE1hJnqf9e",
  "key16": "2BXeySHaVRPzivrwQBDe4Pdeh41Lg414yjbZKZpK4DMabt7HT48nStGtun4tWic7FZKWbGkW23PjKrSAFjmFF8Ck",
  "key17": "5NmcjwMhHRkJnCZ8ZdeECARUL2NHyBBi6Nk2KPa12pUZKGBaEgMpc3SAGwGNVx8M6QM1bBoRKM1oFD8RS9AYFhUx",
  "key18": "63dsgGQ5jANavwkHTzpP2VbcKpKMQUNR4SPPupgDj9ZugpB88q79PueFLXfikZMBbaBYCuC1K2ehxuVWkcjbaNRi",
  "key19": "3zz4qEDQu4muTmH6ws1D92bNkuqkAwrDtVup9F1TEWWp4eZj1GLQpQjiicSB7fYpCmtHRnBzxczQK84FCqkrbYAn",
  "key20": "2NLqh5Mqa9sdD9YWLHzckRNjvYgH52tD4kBeZYtDpuWd2XMyBN8542GDmYZmrrKo7ynarfdBgkjjzEjPwq8WyuK7",
  "key21": "5MA5wXAXRVLK6ZCLHoWkZoecvyH4bLfZgCjmTkAZoE2bnsGu1TjLKXgK4kjCPipcwcdxum6kmXPaUCEXrJartiUJ",
  "key22": "5whFXddQBAZKv6w7grovMCJHhPkAHaXSfBec8au8G393DrZTXf5EsNnjCf6W6RwE65aR5JyzRpFTdzDDYtYrN1Wy",
  "key23": "55AFPytmmMmJNqCo8oZiGCtH94XhmD9EB4hELiBRKMHcQYKUyxA7Lea4AH299tMECwUaSbEQFRtggULfKjWVS1q5",
  "key24": "mK3wPNiFwwvuFmC13TGGcY8UGqYidmWZ5Z6YNviGZfT1ZBZDHY6LA1qJyQmgPMLGMMXY3hzvs4CwJQvyvyUHP2G",
  "key25": "5o3UiS1KwScnpNz7griWtntnFt2CK5pPGB1jWyfuqtVc4xg1HTymMAzvwKn2NwhyaA72s3repegHS2FWFwb5PebF",
  "key26": "58jMudgdgFphsToAGGgCsBS8Wju5LwaitAjbCe38S5mUczjjcsa1C2UTCFa1ASGDi3y9jrXeEdQCRs6oFxPgr7ZR",
  "key27": "5ngjD5YwXH6vYmYFyQvi7xtQXvWTuhSQho1TgWbx6mPiedCZ2dHHVh8DVk3cgWwRZkzNKvGMuHNrWuYEBX6gH5Ai",
  "key28": "aZGNk2KsRQpWAt6ftt131Jt42GoEveNaXh6n4zrrWRBPwYhm5bKdzpyhqoGbEYUCHYjizuYyTLwRqfKM3YZhwUv",
  "key29": "2MimQmCZwLoSYFXLptn1fTu6Aa2qqx8A8NVc4LPKGjc28E9X6w1SwosAuywgoRyamF2GEV69xQWnxVJ4qvdp1oPh",
  "key30": "5PTSkbc8aiz52KP1dJk2WetzVWpbVo56YY5zHmWTVMwiYTtU54LEYaZYgUK867SkqNrUymFJymF4uepVfHesJDDZ",
  "key31": "yqo2ssN5yCCNg47m9QNosZcRsnQ2cZEVVzJY7YFihzFcqnG3trPg9W37wG5DYYy9yEQDM4YwQEm7k4SNRZd1q3S",
  "key32": "5bfT3aKMUUAfiedhqMn2RUfj9xS4GceXZWTS6Bvrp6bE3oYatS9GRqQsAedSnmcToxRQ6FnzGhV8Tm3r7jkmbx4B",
  "key33": "4LYb1AUHeuY62fARpBpqi4j7w33BdjUsBtZbpNJZRnB9ZmFWTwfJiY1ng48ao4oyizjJL873KiXoFt4yQhkbKozV",
  "key34": "4RVDtXnqAaW14AShzA5hZsBjHpD4eG785VWaF2idXUU5Njh3wwDHUSzVVDB4ycQvRPLFysxabeMJvmSmHfgYddG",
  "key35": "53w2FSoxJGDjPCWCEsKZ1hjqZSg6ftF3YjAqFGmMCQD94tR46AAqrQ9XrU4idw8ZgsfoFeHAboNDmuvg9K1vUnKj",
  "key36": "2NNmvMjBacdKoSHciwSYVWT9VuYgxm1vEcqNW5CfkeHpxUS1gYyoVJqAm36bSBBCW1NmDBNUmYaKFiyHCXuzhSwY",
  "key37": "3XiuFWhcCpfasJhV5cL8xGKuf9M3fdgs9AaEdVmecmDTeon6m38jKivFa3czD1mkFjx8sZFUQUcrMrKbqkikYL3p",
  "key38": "2r3AUp2toq9ttAL4uWhtmStTeuZM5wak4D34d6SnCKbQFiDVRtxcN28qSwMNpQJADB8nGmwMNALYMDELac5inpZG",
  "key39": "iJrXLncusbWyYqzWvgcCc9EQCzvZve3JewtbgF5NkS6NuR6Qm344Ci4dtUB1AbcXV2hmG7tgN1k76FxRJP3CTRV",
  "key40": "4CoZAAzxQ9iQw7serZeGRT7UJFesFtu3xKamfnNGaYNMA63LDoE5tn5MNm4MQFRkGya7iDQPVPT9vpsy1jD3vP1u",
  "key41": "3q35niXPDSoUhXjURGF64QbhgdSNyEQbvzhKLxKe33WC4Kf7RCm57sMEDRbdEqDZKh2egjewEtbZ1htBtexZfjzn",
  "key42": "4g9ddgsX3HmmPCfFqjyydy4RWdzZX79YWEYEZ1491yVs1ruPXDsNvfaXu4KFPSbXiD7tMMxWpj3DSuGCZ7VwyAoQ",
  "key43": "398W31Bv5PVXgc5EyYfFArMhkD1ZhAupcN5AXEsJaeSKYyPnpJH5J8g4avAN9ghACj1rcKvf6tMHNH7n7mn2YN1y",
  "key44": "2yWajHvD7fxvt9sK2bW6kitFT2Z7pRViFLBS7mVRjSTGMBPMJUBbZyZkbbW7Y1LpqbnuJeEkkejaGehaLAqUGv4R"
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
