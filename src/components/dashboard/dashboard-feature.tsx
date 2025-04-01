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
    "5dQvvsr8C6enRRAz4S8Y6eJVpRiVQe6NQkgPWrVqs92CoMS5iNzZYYmXvs5LxKDwKGvTewFSZNtVm7smgmxLzAnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ToEWdukNGw9Q2hSQKGjfwbveDhfJUcmT6LNP471a2iYnbeTH2ZJNBj4fSrtxrHCHyh9WgP23Geii6RXJkZiXfEG",
  "key1": "YvDUGxdLBq8WT22ZcjA7DreTDyQLzuY32uD6X5Fb1CJouBgXXniU8othcAZCttykZsW3MW9ZyxaDwZXkmz7seW6",
  "key2": "2rfsAceKhoHcDL2rc1ekM4ioz3GPKcCRqo3e6un1xS7wGFqrNUG6rSVX9wcfdkN94bUCUTzQ2AaFnzwuwLaLvUc8",
  "key3": "29oj46NsZvAcVMe36QzDXQqMPYuyfc79aJXV33GXnJas4hMrFH1JtVv1LxmBn6421rtBCRCBtEkXowpQ8FQcmbKE",
  "key4": "5VVygUptVi6NAtPbJ1ro8cCamrqjKPMJEwZq3b8fVy8mNCVXCiRukdYD4wfLYJpZxBvbVpCSmNVmfywjpLwDuev4",
  "key5": "2QP8ha6tub6UBWuCr5JqwVDtF4iMhpSvqRdFNibAaNFdJrf9TJztge79nUCW7tLTrWDyATriEoPsJ2AmvgYUFVED",
  "key6": "2JMmGxeaBtreVHeYjk84gS4FJ9nbAoFYdYhEKdZt5oX1jsTS9ufyNCqHiKiinziCMKuvNc7ZG4TL1wF2sTFuVufg",
  "key7": "7ixjuow3gmH4yzk2xptzEwcRYxv9VxWomB34yCND1esPk4RnjjGaYvE2YuZEQhTiVxE7paumF1ZKpAvvG3YoA42",
  "key8": "5mDsfQKwnCisPuLb8dvafzcuNCvbsLZTarkaLCXqkApdH6cZFA4o1mhcbRLREY83JXMy8eLujd3AVohH1NhRPUgS",
  "key9": "5TD361BuPjM3Cz9GW6GFed9HpLTMjM5nAn6xBLsCnDaTFp5J3AGEqmNq2ikHpGd3Wio5PWDHyVtawd7JWcee53Hw",
  "key10": "4j4RW7mBku969n2GSrNK8WrTSVu9wBVaAnsDmFMWDkvfzcxq8szMuAs2XH1ScRTufKS1VpoVEXSXYvczJxiZyZEu",
  "key11": "267Xn9HeyCtWSdBaKnh53YUrPnUXC6thqoEMXjReBMgotto6cgLkRfxHrru1gKLS3yK1oz8wsKSLBY16ka2LMtsv",
  "key12": "3JaqnrBGxoxrw11obm2zBogJ9M3mULA1LNdPuTnSwgKv9VmaJWsSPx4nqceaE84jktV6CWAuQ9Dpbx1efQi7g8ay",
  "key13": "4wjYTzuBGk9WHecdt1sEc8jfXZsGS8Fisc2Trg9SjZ1HSKiQbFGgz1acUSJQCJeECkWZ3iFZ959p2qDgzgQgkUA4",
  "key14": "4GuzojswVgbqd3FHf2zkHrjqzETCNQaVnBruswKfZDcBs3bQBAdVTehCi8JvDhymNeHapcaChqJz3LkZbks1AuCg",
  "key15": "2eSX4t8UFA2LohYqFM8E45QHBdvSFdwDffRW4C8tP8Yr8kiswpuRopsyX1YzHganRyN2wSH7ptWLRX8ovF5WNv9x",
  "key16": "4dDx8Nmy7cidAP66UDyD4fu2EvahZATbTo2PH4A2EH4b3dt14dspmwdRrkA9jHD81zgTmKnZvMqDXcDEgtUsJYB3",
  "key17": "rSSaB7VVnVQgSxYunu3CnJ84ZnUN4FYvF1oXePXu1kNNGM37SKynAQosZbXPTKnzwBttqHrZL9Cx812GWMB5Ym7",
  "key18": "4yRYyQTXxM5dwwouv3ATGpmNq9gWVgC8HhMDw5ER1TetnMSj8jTD18DPgyYzuvNAq8srMzJBc5AanFC1yqVUuBzY",
  "key19": "2cHYgSmxmLcjSXF2QPmv7mnhFCdKAzM1LHnFJ9epCTsmhkVUTzreC8zsNSrs76F6gqx6WbvWMsQL4tsyh9z7PH3J",
  "key20": "2GZdVvTS2G7AztACR6jCd9iD9mrqZ8uor52xXRz4WBSCEE9KuHJeCzDv4aD9LhQUBoYHxgvBQyCS6RAnsqepXm5u",
  "key21": "3QsjAXKZLxwqVNFeA9aogGQAPXDCoQYG1WZDMEqZWhSZSh9JiVm1WCZatevzK6AHKwWRXzhF73hyrtZ5MdXvqAb2",
  "key22": "w1FERtuqQ9AWnbiHhy84k6TUm6PKXom9UPVVDZTesRUXsELki5htN2jb7pZHTK4P9YxbWQA3MzcrsKgsEU8YaRL",
  "key23": "2FHwiJkiNtFJNvCwrWR1Fby3mLqz3mFN8ZEyabZgMZvCEV73zAfzg71j42fo21qb9uipXNxpXPG3oMK4dCmcKwdp",
  "key24": "3nWsx2kAJAEhFx5b5Ugf8Y9PLLPbY5tmbSFYJnvsC916jYV1FKpSmEhpdZ66Dk4xjnKyUjaRLYR4AZoZ8Ge8KTVP",
  "key25": "3YxXxBCDbr2ncBYg9zkRLg97zwG3BmYEXpwu1vvtgePJGcREnMK6MoDtjf1ghq1hn6mPA6o2ufChWdkwr9Sp9KPw",
  "key26": "2ummxZv4sK8Zi5kEKti1x7XWnsvhfdt81ZJjBGxKQbe7nHVVWe4uV3X8XKdTHdSsFMhuayTTp5QeQ1ntkigpv9oJ",
  "key27": "2ry9CqzxZsaZWeLEVVNksQfiZ3Kop9cmBYE4QABwuErL69ComcwXtHno37B5A9DXvmx8ZUYzNXCzM3BBW2MZtGWQ",
  "key28": "5uWc96qieMxuWXmgsJBWR3Ff9gM9vDdzpEqGHPspFKJpLTqz7196iv2SpBrMLsSfu3yiKSapbnVUB3ywTj6VqzsQ",
  "key29": "2bdBthQozCKRz25fGRTdAiWKG66ZDEZtRSdzu1awbmJ3NoytSLQcmxAM5KLUkUH3riYgX9UdWGqnbfH1BakgkF1K",
  "key30": "391UXFXpUdgq3Fig5Zrnmt2PVbTMiM3Wh7ezAPCLefD5kPVHKB9pGJ3Mf9eQpm4Yi5tTs4REwKFqXbUgDU1Q9wdN",
  "key31": "2H12i5UEATa1Bu6jja8vkvfwuZ7JiBogCiQhijCgWjZpCNRGg8jJei46pzFCa27TpuaxZBE1upTZqTvh3EFE6v5j",
  "key32": "2b74AztjKdXmYGkK1Fn36Xjt1cUeyNGLAVuSpios6W6inwA6oGK5qVJPqHVeAvQGJYkrvRsn5sg8Vekn3Jnu8x6V",
  "key33": "3xDmofcGoYvWHeyX188J3itEU5GzXjosVLQXQr4H3tFC8miWebfLKyzyQ7qX3JERgQtiamuJQy7uahZg6P8zh2kh",
  "key34": "tf16Amb3zTBuH3fpdp179ie3E8LZxgJSLAP3ccn53UWWTpuJPtoVhRNy12NThZSgPhdfBg1qSb6Ebeb83JcFpcp",
  "key35": "4x14AuivnWyk3Vt43fpmLGTA6bQ1ciTB6Zo2K7Gy2mhogdQLVvLxLCYPFAw8Zwe4KWVgxv1g39XnUdbfbPHSJcpT",
  "key36": "56dTUdCxBT18EuEK6YCmUJZY8wYbMkFybntsJCnBQx16BzHVaSKnh1dftVHcG6LRKvmE4RT4PYvjWcnnYNofRwF7",
  "key37": "2bCLr8nQrdCgARRAmBe5B8S6KZR4Nkw4MA3X1Tqch34QWPzBqFv3Nr7h7VAvj1nWjyhjddmrVDT5VNc4ko4LHn5i",
  "key38": "27CYJhsg3nr7FFnr189yphxm8j1eG65gWKvNsF5AGer3iY22rskF1xRYrKS9BqQVgs55wSHD4Pdjr7UB2r8niaNr",
  "key39": "3vpwQGMMsU6PcHnAsMo8b1GT3DCB8fzpFfU9XQyLfGikY3p6we9VuGb97cSkezgBJtzEXg4qrzPrc7Z2Y5LG5oEw",
  "key40": "YM9BHsh4gevcTHUX8v3XEorii7AqsGe8XuGknC4HzVxLiGyr5EYwm4ZkY1QzwMdnFFcW6iKToTXUyRCR4FAysXD",
  "key41": "5Dt9JtAQMF4S9rXQXLfC2K2Z4jgj9bWTLkpsnW6Cj6f1Jxni9GjEJxhDPVS6UAfyPUwcBiGQzXie6s9zGqSD2CaK",
  "key42": "QJYvaC2vCj9TYVwKGy9WdT7vSWaJdxJ95eAXY4qUc3UhZksNUUSi6sfF9dzr4RYH93rKc7nW8GXc58gVrQD3AK5",
  "key43": "5SJCNk66EMLpy5sPtUqA5czLBYNT68k9L6vAx7snC553qG8zEBr7S8ZsVCHDroQVSLhP92Gfh4Mh1w3ffsfic4BC"
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
