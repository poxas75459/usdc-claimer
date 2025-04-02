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
    "APvkjtaCxgtsDJNKQWCKf2VuN3zZpkBas6c2JNE6cHs7Kzh5m687RtrsXYJpQ2u68GMQ3TohMdbPnSJrLBARWdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBWoVPfj7oPTUqXVx2YndrkdRiFxuBSwDWpC5T9X5U9zbXpUow9nH5HTwSe3FPTRzgoBT2EqgtT9SW4ZFPHUtEd",
  "key1": "m3XVkMz4jdpJRTRrE16CXUc379tJFp2rkgpp2NptQoprx3RBsxnjPnEVYvq2wS4T9fwaC2cqZt5nn5QKS3Vj9jD",
  "key2": "3RnWcoyye45a7LfCLqCpaKTJp6utoWVDjAzY4YUY1H3VrK3Z96hrQBPE6qngei7mtouFhjqwZgCWP8Ay9iohPEs3",
  "key3": "3deMdZJnHamRqt37xxqS4wkctAv5XeyjpmisbSir7HT3PBTy4j34piXpKaK4nUSEq7CAiDntZ5vSEChzkHcessVh",
  "key4": "27ztKtB5jz7CfHBTeJ3frAuvauzCRWkHLJVDFKWTVRz4TUZ1iu1crLiFzSbaYZYAkf4S7YBSLRSMChdBjiBZ6PZQ",
  "key5": "3foLi4mgmEY8W4HbSbdqt5CQoDZ34uFPdj4R4rc9kH3Xjz94hqn1oTryhDArTSu4qmoBRUEJ2WcMRBBXLCySpcVE",
  "key6": "2sS4dGEpQgnGPGwFZH54u4vQenMyw6AcELK2iSfrqd55agGXDqAxPjMEV68tjLRpfbACH4RhVwHbmaeFohBaNrZA",
  "key7": "547hz79G5REjTg3t9FGdovLQf1uL1Lwb9FrCAtJWk48JbGGqHoe9FWK2HWJCjuaofyV7bPritNYAGBCKwgBdb8y1",
  "key8": "4RYxRsqfpA5A7a7rjdCNRbpDx3jHY8ASoFtLdpBQexVwwQiAsQEEuqBFuu1zehSynJF32yaaaPL6Tbr8pB7UgkqN",
  "key9": "5Qpe9DsfEkhUitnbxhLHu8sb7Yi2bqfpj4TiKiavHg2u5buGcPkS7tJU2AJMHyrCBUQfv9isEFSf3yEx64Yyf3Gz",
  "key10": "CmahMntj3gSHckUUS1iacmcUfEDN3L2UiNaQ1QeNDSahhLMVA6DKutvswthytV5ckPGa4daYAYmQtiyED9B2djM",
  "key11": "28W1nYmZmrdztKYNpWoQDKSyrxZER5fwuBcuLE53RLYsHbABrHoXa5DxNwTTCF9FmRsfGcz7tChfvuumJNELg11B",
  "key12": "2cEGwzmbzQF84176FiddoHC8WE1ir8XKUFu5RCLbConCDZPeGg3nD9KugYu1orQrQ8x82GwJUzMtumAUWXNge7gD",
  "key13": "A6hJzFnq6pF4qug3GhAHKvQvVaZgarTkKNp9wFFQUJRihh3Mw8gFQ8gParpMhkSekGAfLrKxNjfHVX3c1tJkBdh",
  "key14": "AnYxMTxC4UgQLt3sowgyQBjto1GW3wzLxvCi9GfA9Ua3vNSBoncQoM9AB4H35t9L7MmdcdUWMarZZnRmMvaHiiP",
  "key15": "5eQh3Y7jEzu8xSkESWLCyku4iGgHLubZp6TdJ3qvzsW8Jffoc8WfoMarrN71i27ifNSm9c1MBqytiYXc3e5CoBXA",
  "key16": "uQKVbPhNmVhaXwqjD3i16DJ6mdVmqgs2FH2vyDoRr8f7PwzbfoCGPGNNSx6gPaReiKpLT1ZHnYniNkfNiHnofFj",
  "key17": "3k8tS8ktVyHy7nV9df47kXQBPqLqP53T53fvr8vEhx2odUuKjHsb8NZDBJJsVxoqqRSbCoRRjS1JqVuRtPapxREo",
  "key18": "4TmP2wN7SZsinUzsdZJSkiU9egaYeXPM6rBPTXA5aYTR3u8B8dAGRqanuCuJHCyiKeexcijDDtYKhTpv8kmNSkyu",
  "key19": "2oRhT5QpZvic58vAM7bUJsLvfdFYPZM4DZ6iV6EpsBMrXtmnHA7bFbxk3HhAXj6knPYDS5NQBak5U9vu5YKPvpJT",
  "key20": "Uj8ABxDriYtvXmYo9hNpqhLJ3jfY7o9ai4VZg1R9dcJ8eEkHnidti94Cb1ScbTtTv6wHopv83hkv21vJYqSNRqv",
  "key21": "4tG3mijB9WV9qJqJtJRetvPsKEYxK1i5wG7Peje298Cwid7iN53caPABn2Zhtf9parQfqnZ71z7fh8U9wDgyCDED",
  "key22": "4LtBSGfvaMN7AAaxoPbZNHxExC8ZQnaMbAfEdQgWmGqwZbox2XeuQ9eZTLwRN9fXwtKmTicinwQNtRvv7VNM42uf",
  "key23": "4JspThYtYZn4eM7A9oQDDHtjK8BMWpSmG7FgxQv6PgtfuQjrGfcPD772z7sdnseczmVr7UAkv7zTZhWw325Ep2tT",
  "key24": "D2F2hZzWmFpSnFNBxKMCupf988vikcC114D9J5QAuk3jyEK6WcqnK6aGHKtLXbJgVvPeQKkvQEEWqEkhmKXFZPE",
  "key25": "2fmJ7WKiBm7PFDsmzC9bz2ZEUgFdYFPQjbJQJEkbk3ymggeSkzC93J8QaprV1JFtFnwB4xqeKaUkpGfZjLKr22qu",
  "key26": "3bwQFeeyjZdQu9ZUcszpEwxtqoPfdKu32uri5f4PWzAmam34jpAHUxEtKbcRQGndWAPMQgJnRwe2Fmtpf2XuYvVL",
  "key27": "2zr5v7MJVuSBgtmgTukW5F38eH3UxyFhwG9xZKSmuwnCcK7gM9khr6iSNUPW8A1UFeYVER31tX1U3SV5ED2C99Bc",
  "key28": "3EQAZaSwBrdPWqc6C6tR8e7DpNbX7Xg4s6dgoTkyaKZ4Eso8BgGRMdeVXkARQCcKQRMQuMjrutry2hA4z1tdU6bp",
  "key29": "2rTjNJchU33NEXyvJHfMCAXGvkGFqHmcVSCc8cVsdLrNj7c2YXrtYRinQVvSRDdULEFWLGgtiWpDCuR5vPqeJJDd",
  "key30": "32Vspv9W54aHi9KWK6PeAcuReBt9PTXUVxgLnQDdwwppug2xG4vBdz43E2aHnCU5Tta6d9kzLyDhFXka3YLqsJpU",
  "key31": "2kdXt9KEhHCPH326mbH28bh5ciomes9EgqZ1VfaxATpxPVJdUvQJLPLd9HGa3FZbt36ymKkPakkXHaxLhnyPpip1",
  "key32": "QcaeYwQEUSFBNeEMJQ71ELcQwpnTtBB5AQgVC4fHmX55u4XY4nsa4qSa2AMwcfMxNn94pefpsQVLcoMqEpCkr7h",
  "key33": "5RP6akZ6rcJjr3EgupJqrLKZtpyAjZLuwhLPPeMArri4tL2mNi6zrob75sVYZ4V1YFcxoNk41p9tJq4ZAhLTjiJm",
  "key34": "29uioaep18U5vAxiowhvcQg5zJ49s7iW2LmpqmTfVTnPEcajGG9EbRX6cTTZTho2oExq3bpShQ2iXUs7dfBuNL3c",
  "key35": "UY1hQBJDeyn7tkkJbm5YGr8HyTYuW9QN6GVF8xSBPmqUWWNSZMpYKCLjGo5LwsZUSh497NdrkkNMtivJ2HynLHK",
  "key36": "49zwRNX1tshtRsLFgEesur1tR7EAUZLzbFJjZhft5AMmCvPuMaNAaByLJgSzPiV2gzfwCee1HcKwSMReuEYhtu4N",
  "key37": "3GHX6B44jYtFbEaAG2FEbDHe8WZ6p6y5876QZ29WGWCASF251UoLmTPEKcHpFScfiZKpN8fYPKQqBGRz9JEHnNxx",
  "key38": "HE9kAbjgpAAkdhXUKzSBmYhLTHo7eTaP5GCZY6HkLja6ZPDXTW8A4RJCNje4gH7Uhy5ShQt7Nu44SzE3Pzsd8gQ",
  "key39": "wEwMvoKKQVME6ymHK1CX3MZrno8Nb6i26MRw6bBZ4nYqi91KYXjTph6b1rZzoBmME2yL5aoifqF7gGDwGARH9e4",
  "key40": "2EraWrtokwA824wzGjzgCrXZKsdagdoRMwjkNdVy7Rf15tiCPxzFw6urwCSiuvU42pgUYE9bufgoH1fsbQcUxnv4"
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
