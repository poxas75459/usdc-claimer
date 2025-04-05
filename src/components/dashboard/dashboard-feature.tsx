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
    "PBVWa7atgow3WdbdJiwXSJSwk7ESiRggvandVLjRYMWJhnUARVUKRjAXSg9G4Crq1V3SMqZwMRRg4c3YNBLpjtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYtd3yAEFWmyt1AJDwhwHpMZtkD9EPZ58sRup6kU3FCzXcX2aAbpuuPj8SBSPyVAvKa3GJ3UG8zGPopUNMKizeV",
  "key1": "4885Qr8rAaFKnELwXHZudcLUB4SQcWyEAoUkmzrxfNqGFfRrQL2YqNKtHdQvneu2KTEqHav5bZj7nM6w4jqfZ7Kp",
  "key2": "129DCuZdHPWBUJUowSkQkE7Lo7Kt1KFL5jzSw46GBQ2aJKJJ5f9KwWfia1TmaryyLCSJiAQiTuxvetuomEwT3dav",
  "key3": "5XVuxewBjcimFmArpT6bGev8BRBn86rAqDQRmRne2iH3XXsT74s78YPMkBUogQkSRFnsKQXZDEDWr7uUo3A671vW",
  "key4": "2tWJc3yPkrv1CFKyu9nB65raHc14tT76es9HLLVGmXZnxWP44j92jLYDJnNyATtbFG7sKBp7sPwb4SMFxfKaRQj",
  "key5": "5oB4f7maWpnSP7CZCngwTc1Wp7snsZi97KBCaWWFdPYFcivPvdHtdu7AFQVzQ8yM3nsTZbmBZL8e22BWMEqn7mKV",
  "key6": "28cv6MBjXoLMXhQ7AkE8rhR1BdDUUb1uefnhqADfKECQRcVkB2RTVgucZRdo7DNmaw2pcRL65EPoBpna7M2K9Xm5",
  "key7": "2e3mH5HNdaYeTzH7UnFygFGmBpEhfikcqievsjBP98vUuuTXDe9utqwsY8EnTwcSthPZMW1kFvTieV1qm6YBtQUm",
  "key8": "3FPYqUUz83Po7jNf1ZwK2CgqBipZixDDq7sF9g2fDe3ctepqtfVaiMzeLapon1BeqzME7DHbLVpGG7ourDEWys1W",
  "key9": "3RfJfLGsFchCn2ZZbw8jXYypiaKpgSTJWKhPcSjymNK8GMpTpMMas3AeuTkacjFZRbnCudp1ipWULEMEB8ZW5ijZ",
  "key10": "4eUdhgPHKG4QG4SGFq3MhZ1gxzenX4bJxxYfEnHKBnYpkaytVwr4Rh4wDKwpCohU61755sTB4azkQV6th6745tHn",
  "key11": "4K868tYAW8uUM3Eouv1N92iixt5tbEVMjQFkq15XJxPwW7wtHULAEHpJcSLhtWc1Sk6hv2c7rAhob7y9T5CxzbUU",
  "key12": "5UUsAkMMyiBgTeMu63bvNq1s6e2rVz51CTS5Lw9N4MsGkvhoxBj8JyE5fS7uAyWVei6ZPM576ojKZkyJByCbYaMk",
  "key13": "2NkXeKuuX5BtCt2vFLmFeAnykEVWn29RPj9KGqxG2Q4r1Qs9b2VEsV7xLGTM3JVuuiPuGjDxqzJ4wnfQQXikdewT",
  "key14": "3wjRwbXURKiyjQYMsnbm3EpEq59ejyzXNHc9KxaCGF8SMtE7i4rUBM8rF41hu75wk4npTqs7GNCZVKGidhsgMiae",
  "key15": "3KkeJgUYe2LwUyyQgxjtJrsRwY4afmBFaen33zDAErStn7BoB7f1HC7rEYJunVy91x3Nq8tYgg37MqECn6UyK4wp",
  "key16": "25wct3By7uAiUnUomfTMSSWKtqQZGLYmntmtziWgQ9GfJKjRvwWCSsMsoPr4Y7DXAAnHNtZairW2hYbC873Qcqf4",
  "key17": "5L3o8qcJRUp5v5FDoH9Gh4bCBEmcRS61osuKvnEPbRq6wHXvSFimPfrSasprvSLDL8vi9WEyfS6KqiNmM5FvJbuE",
  "key18": "5tW2Z4Y1aWtaK3WoGDWfb3k97EJxzgZv8u6tWvKL8GTRGTySQGvFfgYBo33PuqAJe3DXrT3yxyJGnyHDXBTBSAaj",
  "key19": "3mT6yWmPDJUCtgv8oX7MKqfZTd8q9P5ndGpn5hhPXsutd5GmfthRaQGdm1f5mh4oKQQaJLfQR89Jqkb9o6YmCn82",
  "key20": "5PGsq81GKeMkDGpUSTxD4qwD8PL9iASwxEQJG2jamugYQR2CyXMLo3spAMgrxnnz8V3WMYASPmCKarTWKKgNbVXt",
  "key21": "67SDWudQWAtKw2nY6mEBBTnvxbJkJiTJtHJcDXiba6Mv2YoP63TJzG2sZ8Brnw5dzEDHMqMYQup24upVaaZCJf9F",
  "key22": "4gPXJV8GG8EuBu49sba1H3pzsyi8xTEAam4eSDyksnjG8ab9xVFCNmp3mBD5HLtnYuxBjZX7NP91fcjcoBveFRLc",
  "key23": "222moeFcaNGUGipPfSftkgF2WSfo1vdSxL2SqcBX9nWjY7yjwm9hkzfGFDGHRM5a7Nm8dHAT9SWZwuMmJxzxq7hH",
  "key24": "m2rJXmn5X2PU9CgAupecTLKuTSN95TGDknck1WVwLBftokGarxdYjXt6ij5e4jjtrGm9JQ1FEyo45BmdbBYtWFW",
  "key25": "3KM9P46e5FTzZXmQ586eWoku64mZLdjLZJVVmUSpSZSLWCb9Wdq3Wo76mvfJPTZmFqzsh7dYBEkdVTLJ8mnhAvUT",
  "key26": "4e5B2oWjFiR5zHJ1ofNNPh7LGYAzo1bdcoceMa5BHsD96ccctPSHmNEnaYLszaLu9dwygcbkoAiu7jbL5hs3UiqV",
  "key27": "3p2gK1MxCYtsrf5mqGJ2KQULfweWQoJmrxrK7gfveBtzLSQoSHxF2qWRSa57o9oQMWgow3KgjTUXfFCcs1Tws5RW",
  "key28": "5952GbzMsr5QtZjcxeCpFKM2bKwx6HVaDbD3fmir8anKZDbQNDD73QaVZV7oU28FWYurBCd5BkN8Xxv3A1eLVbJZ",
  "key29": "43oqF1RvZB1p4Z3Bm16BaZAScf51NnqrK4JXJHyEBw4wwzUWwMVJjgtf5ojd4ibTeUDyHczv5YxU8ybMiQMHYQX3",
  "key30": "3kawFksNTwfK1qWsi4k4jcPi5o4hDGSWcYCNGUhv86YY74witCRUkA5ea1JgxKFmxZcXYJzNwdpSrNxuR1SL7Hth",
  "key31": "2JzNiyepZPYg9XxpxE3Zehrs41j8Pr983idWp3DWiWdBomS6Xck8JL5puFhQkrCja6UfmTyvqzctQEZDh7m4sLGF",
  "key32": "2gGSt5DBBCewaXnUDJiEmVufQzC1EUfKjY2AW2s1cr2KGf8avGNkrSCDi2X2nkioQWbSVmZY6Zb2UZXM8FQgpq2d",
  "key33": "AT1VF51fNUg5UwDVD4TBdXERgbSzdyjeyzz4KMijS6DgbNcCpE5N6QyEUEW4dTNfUs6n6pG9Ux9GUNu6ejnrscD",
  "key34": "2BUvvUAWRA5D1i1Z5MjXcfmHHzxJrD1125KMSYknZV86YajpY2gzo6KcnZYSDTzCfkyMgBsmsVRYBtCqVFrRz6NJ",
  "key35": "3FQzHkLbFXstAUCiwHHGVx91FrFVsfXPzKbob4QSKR2qcawqBDd7RTCCo5AvDoKen8u536QqWd1CRPyqQRqponb5",
  "key36": "523EbSCByL8no7kEckijcRd45sEbbGQEENZM1sajoQPnRFH8KebusXvmD2UW4s5Q9dyvtwbkirvV2HWzUf3ypZGA",
  "key37": "3zKWCfN55EBAng4oABosUKupfJLw2Dt6U4Q3kVKx9UY3b1gA6VHPyhPCPcLnZLfTVwDodw9PdscbiLaBAf525z11",
  "key38": "5ysiaeWxG1KMebpdh6PeDXwYMu18RN7ZGQwRxJvxzDcbXV4zVU5pPjj9HgxgkpJMgYUJgjfnvQb8DQHvTGXxqBew",
  "key39": "iJtFVRXRn4gtfGN93ZE22TTQhQe1evjBBwUYuLaSnKKhztBRoGVUR9YQCUtsYQpZjd5i9uVMzmb2iaWh3og2cd7",
  "key40": "UXWEdgCWeNjySFNuxYjHNK7BS3mppQjZoHpAbFbPi2hhw5eaaWQhSsTQvmfHgJAyQra7SjEpAnmZgJ3pTfjbkxG",
  "key41": "L5pDPCG8zuyb7R1cwu381xtJN12bMxpTgXzqMfcyzjz1NpXBqzeHroQgDTm74dYPRVV7njVPVKdvrpSMgKu7r7g",
  "key42": "4xpaM9vHupS9y4rX5gH5WTYXaJ8655hrEn5UZqnVoY13746VsZdbtwcCxmSH3TWMHY3o1vFru6ViCNpmZKMtFyxR",
  "key43": "3PqNLvgS39vX1kNjCawE4WFjPg64Mjbpy9DdcrcPxwJuNzCo4U9LHpPTBYWMn4dAZaQ1codUMbPCnkng1J1mgcJ7",
  "key44": "2sxnK6QqVApFWgMsgVzJ5QXRq9iaBbWXYc8YCNRJmVwY8XST2A3eVZvbKHvGXtFSuSmb4CELgs3HVu4tVUfkgVNG"
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
