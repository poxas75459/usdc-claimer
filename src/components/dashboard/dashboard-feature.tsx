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
    "59BdaxPNdPLmjp1ahV5y8HAAD35mLD2aZKcUD1eMfYEZEMGxtaMKAbZpGus5M2ewaBzhe5zWXq46bCNnDsPcyWpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E28CEdeTRyLuaqrvJQmHsqdFNk3YSUVKZVvoMWLYQok616J52WckcY2fFaVBf3pQYDEwYSLJf5uBXH31JirL373",
  "key1": "4g6rZJx7xfMnUD7PGZ4FXo6dXDq1kkJ5PBt96vYYbNyz36eCxLu1jkQpzBKtCwoNpBMEDZ43mZrTHfrFvR3XaJhd",
  "key2": "3yk6VA9S5pTpkChrqzuk7TDU3AVbtNvSWXWLCBwx3FXcyw4D7atpRig7JqzzUufgpnx7iQkwV4r8GgiENei7V3KX",
  "key3": "2ZBWYAsGj1mMwU9Yhn9yFNBJAkDS7ZEFMm4HWfQFizbQ1Tn26YCJ89PRf1i3N48mheNAo7Q9BrqnGVHTvesdTYAq",
  "key4": "5hYoG86KVDcUdYMoWGx7nvDj1h1dCLCM1oppzFuuNXkkPJ12pbLABroohskvqUSRoSwYjiawuhNnu2F8isxFkPpr",
  "key5": "4UMy6sLr1LAvSUkjZcJCmn24gjjjekRyJcK4TQ6Rc7aGweg1y86a8EomEWfCZCTCWHRisg6PZkDYSMJatea4NuPz",
  "key6": "48DA5ucqP9MtjTUqDXX2zyV8SWNCummEVkhbS1EwCCqzQeQz97qdGennG7p3wdJXMyx6nhDmsF6wn3tzoKzQwxWW",
  "key7": "QhriTJd7qkppQeyTMDwuSFfrPVqXiD176Ts8yeLdGas3cz84pYfGMw71wkykkMb3yUfYWNbPZbAWY5cGa8XUbEd",
  "key8": "3VK8uynPpJv64JcGQb4RPJhrkucTnbT4j3hLLaLuPqUyz9UGhCsfZEmRbKUFMBViVA3ycYW4f8aXkzbevieWyyEG",
  "key9": "5a2hcewMNLASCDe8iEZMx9xN7BxTo6wS9FkAtCGQsgKR9eHBiuGPQHSPF2eqV1v294G4AELpYBdtq5SW9yq71h7f",
  "key10": "2QvnJEUG1zYBnZcNeCtqeiVKfYgm8dvMU5KQxuW8daDb43X8qe7dpWmzuGB8hhgmZsxQLRwMKfjPFqaZF1iP2XrQ",
  "key11": "4qFE77Bquz2bMG86UfoXF8rKgkzomTisUgAivqYTqD2uy8RzDota1eEV9F4HZ1GVxuanQ37pTYhJmXN3D8tMBd9d",
  "key12": "5Vx21CQggvGf8DKgrh6qFQafhXYZDCotTTJPdYzBbgDNwi6VQ2cH7D1bf6ReLvXF79SYs3DL6xqVUBDu2EXQr9vc",
  "key13": "AywjtxbTLta7HfXg2GkqGjLExiMgC6cVuNuxKYUAfbc4RvsupRadUsK3ja4UdQecNjMLdYKQzHsHviJ3818yUUi",
  "key14": "4opAs9X12rJFSPshKogw39crZKnq8Vyej7HfQgGuGJgLfH1bFtYJHDeN8hDLY2SRKeCwhxU2G2ktndXfz5b6cABV",
  "key15": "2zu3sE6oyGgwVqarFypuHrHxCYH8e93gEa5m6Wi8n43RbRtHkqWPRRV3tVze9ZKHAoFYXGBzUqz1VzDFsSdZg7u7",
  "key16": "JZdj7mBnKzNvAZTjo8BWSeUS6815KCkCgcdhSJK3LSmDFFFBVEn9brfqDeZnCfy7am68x28uztXrsKsBQPZtMcK",
  "key17": "4urF66Fo96TAm7trmmeeC9aXRDV4d7r5RBCV5srM5za3pK4zmv5vgr1NPwwq1ixWdc7y8nnLgZCGK2kDqee9xz3j",
  "key18": "5uwVXaCBjen5uD9fSWSAT7ZU12daTYYZc4R14GUab7JL2WCPMK9oErfWDrBvXWJc9y9xV41Noj5mWU9CrSb38XRr",
  "key19": "5DepCbBsHqmyy8g5LLEDTnsCZgakcQFXyiSyyCtBoHEYff41juWw1xP3aVmZmMPfW44CBBn5MStia5evCSh1sy9U",
  "key20": "2fffGoXBm4NZN8t9GaTPtY6Kau9iptVAjaByTNawwse83dL9kmno3QyRCPyY3U7aGz3voZa4YK4jH68PVJdpDodX",
  "key21": "UwLVFDd8D397rgxcNwQyrCtyPArVCUBFVWxAygThE3eaQofEDguFNUEc4SBZ4afwyzwpNj9tWPFDSf9oDgJDp47",
  "key22": "5p6kj26fRCN5sYn7e4UqsurvLmDNET4Zi1ypGN47u2uygxUtQKZLjnJiK2Ys5rej2TzgaAxpeWjoCj2E7ZtGpEis",
  "key23": "5A4q7eYbqgNibTz6mAX7um5EVcCwPZ5uKnHb6C9bgaSWmFeJZNECW37tGetfQh4zU6ehdneSgqHJLaFEBUaDnm7Z",
  "key24": "3y6D6JLEpf3hc7Df9cpZn6iNZ6JfmeMvkciMzWprJFb2hGpXbHsk7MzDLTrGdk4N91YeDcW3CWTdjPGjhDsfAeaY",
  "key25": "3s1yj8cXDdTapuxr2JecXXWxn48KFezAbwqa2UuufiwMQAhpVEoKTLArvfoYSuD68k48Xz7uVoi2Mfcajx3YhQP9",
  "key26": "4ZvqVA6BagVba6n8k9PkmYgTtaGwx2pXJxPt3r9m8Kh3cCzAeCr7f3JnFBooumDka9CN4iYy9vCxCtR2nnJk5qVX",
  "key27": "48NCRvRHnD3cANcfiqchAP2PWiprH3PwBSr5n16RwLeDsm5phdwCFZrWUuhCgmg13zFi1xFzktmA3TMgoSdT6855",
  "key28": "4QihQESR3n4XiD8RAuwJP7bhm4U2384BK77719fsnfp6ep19necXp8XVNWsFGGGh74eQpmWnTMunWbkGy1VYzpuu",
  "key29": "4jyFbiBgN1cVDmAcD9JnsFVMDuc8epokfF83gG14nHsYazCdVWexqqbtuZdqNKw5qdR3X7zRgtjEuaHsVM52vhUD",
  "key30": "2gsAjwtqozKiURWGtz2vcPhPf1euSQi4WDXSk7se79eFJeJgTP3hiH6WgpzrBsy1WWx4St4XMDGP3Ciw7t5aDSAn",
  "key31": "1icN2xmTzBYpggmPqdHZjHjnwmWC6TxPxN5iDVJQ1jnQZzzzELxyt2Sxo53oNpypNfUx6wHN7e2DNxNG6zrtWb6",
  "key32": "36cwJRcecJ4psiX4WbCj48yAw5SVgBqwgCPjf9hmHw3JRBE2xnfMny1T88Y6iNgKgsiSwMoBeZv7gxWAdAwzhe9g",
  "key33": "2MQfiLrGyqivFQardtvBRnJMLZV3K6U4UcwZgbdCYAuucTeWyYhDHWbxQCerHS1ArWrM532wqL43EGgDgzBtb1pZ",
  "key34": "26UMd8zDWioTQXj4gxj5d8of5CbmUdHofbhFTCXvijmjzkdy7kG3aXSkebKHR7eM2KJnWxidkqHSS5DC9ypkN1Ne",
  "key35": "YHp3kpUry1CWL6di4goxNELNi4UNy3VrAngGTsfysGA3Px8AGVHXFdXBBrz9utmFzfKgx7sFZdW1DsseBpgzvPs",
  "key36": "2q5ZpWDeGLzjEKBtP1W8f4LPr3UkRGd2HA8UXJGety1cBXgVgQhRQZVu1kzxhj5fnKP7kvxraXBhgBRnLDMFEUN8",
  "key37": "5qXUgi9Fo3gSoZXUiJrLhrtoB8DhpuHdg4arDmug8fB35Y6Z5nkaQDTt9Uw1WjMtcs3CfcfMW5njBgWt32hhEooJ",
  "key38": "4cQEZaXco6Jv4dvmEqTW3AY31KbdZXzEo1Sf9g1LyZLHvhQoPzhqpfmx92ZENvnjVhisYwkWfs3DFo658jbJecLk",
  "key39": "2Z1k8kG7UggYkskw2XF6pSppsPfETnSL9VYn9zqrJHvquNYbHx4rWs84SziKkQGGhyYGuv2g9azbFgMywni1Dbkb",
  "key40": "2TtsJq5Z61T1vMs7wrjAyBWDtZTaZU27Sqw9rFJ2wr8z2a7CB8beZG6nTxD1Ao8rEmU8FXp1GNzKJEg1mPBeAhpb",
  "key41": "4FLqBsqvQL9FwQ18fvd7nfGd1bx1FqUEHUvs25NxZ2oLyBxxMz9kGxctUB4tBHiW94JuZjAszA4vc1E2wKWDSvPT",
  "key42": "Q8V2CH2gw4q7wPZ2UiS16XhcYiZeTxB1cAAjDXudKXnLRq96NU2QcT94pNVxWb5idqqxBRSyXJGM5mPiwa29ywB",
  "key43": "3HSyZUbbSGsXJsWQaQ4gWUFNVaU1defs6d84kWwkZJj9Svg4FJjTEuE6TRiqHnvHGK9ug62RhYjYQb4TtFiNR9My",
  "key44": "38w6wvazdmmVKWmMzAEhw4rGL83c97NqSiuf3bj3GJNagG7EaTo3qRjLm1hVyX2XTzVw9s1JQtNdKFxqcXxxEjE1",
  "key45": "5rSGowzNfWYx3Q9qZYQ4eCRdbNsUX2bwyLQuz7zzurQ9c1d6LovtQE5LtS8s2QsHHnxa9u7Vi5Ghe9UHHneWdzQJ",
  "key46": "4LfyvoyeDLcT22UcXwG5THzH2sMF3qCvmwqsamaydEKmR6mruw23seQgQnsReXwSYPS3b5AaWmeQeLtVMucvm7mX"
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
