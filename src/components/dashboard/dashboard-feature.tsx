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
    "RWnkA7HX2k2NL2qaQdwQHkrT4pQXoUsdK9gq7QZhSbey5yd4UCBnG8z4RYaDbkfQ3E44sMxBckxy7kdVmfctwtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpFKNKK8idh7maFfDYNWYfbQYSyLMC2FBi53VqnbBSuqP5BSg6N9meqVGwGJhnytxahqvdW3VXRrD7gGRNTFz2A",
  "key1": "4cf15cJW3Q5T3mw42op1s6CEhvRxrm2wycgTggGtymtxfP5Zhj7FDLr6FP8SCufJkSy93ZJLh64XjognCjuk7Wpd",
  "key2": "5rTeLav62GwV21RGaYqvz8Sh7PzoAPLBVvLT8sB4Mnx5JqWVy2VDfcEPUZoWgeLWnyGnquhen9nu2J39Fbe59fU7",
  "key3": "XSGAHL6mXaNMvr5YG7RpGbYzmUvtoLinxfuZEdM224bKuXb7iMQLGxQXV8SBbPfKUadVxYMsh5boadDHqiMC5EK",
  "key4": "FtiPLSHKoijs7ZgmGKVwyj3drR2shB5tjsmK8dt77JqY2abavcM4Y3dyCxvrLgXMuwB8tJboJNfg6vsTvhqvr8k",
  "key5": "5LnzSDWSaJLxDGQPt48zPa3zK13QWQvRBRjLSnWPVTp3987YsF7FudngnLZm77ouD5x6TNrCzN3gE2x4KJ59CGYg",
  "key6": "3u6mEapsGnG5YgjFakeVtNtEZb73YYSi1hVrBDtRz3NPNNM7oSdHMzq3yeXsK5hZfC4jVNnCctSqjec3bENzNZ8N",
  "key7": "2H3LTxo5zoPo3e6dtKqd2o8oETuuQ66rBsMkGS2Gp7TGxHHozbE5BefrZNboNeFWWQzULz7ci4yAjh1cBsAXTPrF",
  "key8": "26iJNsdTxcsFm5jzhNVxMA4jujjimRsjGQndfB3T8jEWw7UZotAX2yQMBuh83dr7MZwyrJcpuyv41Now6UAGZw1n",
  "key9": "5jToCoRdeEdrg9QcnJZE3CzsD3Ym244EhcQnrUusdp3cFxhyLX6SBfyw1bUGyMtg4QQ9S5Bw6FFBwudvF72Qqsvq",
  "key10": "5suxhS4RGRAyKM639H4u3V2QMszkn2Es1tikXRBnBmkhYmdbsJsTHs1mRCCsdvui65ZcUp88pAHVp9Z73ppukPNi",
  "key11": "5xET2hPDzsRnp5aWzcpecFvGG5mCuiLisqkg4P9acVk8NQW6FQ4sgiUGCbEngieKPgLsL6La9eHKKAnbpDwoLuwh",
  "key12": "vEZiUZFjw8qJ9QEdo2c1w2pm8aUHH8XfQq6r2T2MwDiVxJDUhjNaa6s6z3azs24P1vEmABHWYYnfCh45NYrdizq",
  "key13": "353zt66EgM6tHBqX3KApcG56HNiFVsmRDqTVJxKDuiZ9MyN6FNJhyYrqAuAaChrY6QAnkQnWtZZHfJXwxSD3FqYW",
  "key14": "E6kK6FHp6EJe74nfuQuoRisWUL11WcmrB44d3KgHnx3CgbYjqUmVTLKAj9RD1mVUaTHTWQsvokiWynpWtMV87HL",
  "key15": "kH6RixebQM2UbL6LzxNK6QZLpiavpuBnwpzmPqR4nd76kgFMLWud24B9mHMroYhJHRkZmBwcBgsw7dxXGPVUWku",
  "key16": "48KUshZ51cs5VvWwLQMGKUWQtTy9r3uGt3fNnF3FacxRPDzpZDc6NMEenTn3F5BCVx5GFZjVAJHyX3avfbDY16bB",
  "key17": "3kaQMvBjqFqbK7njQvPDny3ooNZ7A7CgA3rzh4sH5cDuusyRepLLaSZL4XN6UDveLzWiAdvW3cvVunGE2LKp2LNV",
  "key18": "3qo98nsWTenVv5biRKgbmFzDcjLRtvzsnLktYswdcucp4S1FnLeebeMoeSrLwGJShMX6fiGa91r1ZtxcoHv4UAtv",
  "key19": "5VaPtyf4LU4Gbf1i8EqPBiE5EGN92GSut8VmntDVmnFY5VTQHQG9juGwBjD2neoLWmv79LW5KDuhTA2gLWoZ73xb",
  "key20": "4aHCTrjGxz8A91rDY7f4HnfzcVUgPLrz3rHxKibaHrtbfsg5h8gWYJ3bZ2Td4itWrDFcp6KdPW46UwDczQvoUGck",
  "key21": "1TWrNaDb1egu2VUhwn3cRPEx3mGFtKUJDNH3um8ssbGfq6cBeCMgGQt7HvvRTpDtdm9c2AYNGDr7Am8PzXmomvt",
  "key22": "5R8U1EaVShoH5qocpaxBLDcoh8ZQEofmT88rZM7mDSAi3ZtDGT4qt9ZMe6W5KRcQnBzC4Kvjk47DhASZgwfLmEXw",
  "key23": "2K4ZoYB6KCRt1EYM9ANs3vDQNE3WeDsjkg4GCpkVh2VxFaAn3p7nmdipSstDAXQtbUd5xV4doabQXNV5bXpPJD94",
  "key24": "28UeFqy1nSKzY3GmQfHSqZFeeXVdMfwUpVK3LCuy7kW63dXzmjzxKVygE8fUG6eKaUZC8ot9BYCK2QV2iGzQccrb",
  "key25": "4KQXwivPTN4XWzHqTy1onX1GjH7vi3TD9ekRvq8tGFmaULjfYe7gTnCSroMefgM27kgsxZ9MqKwV3sBeTSwq88A5",
  "key26": "2XHqHUNLomGntvLNFWqwzwRurLnwBc5kaTHfGugHSWEeRtCXksEyBimHp7KNCeXQxrWF4qyt43Vxe6mwRZkuxpi7",
  "key27": "2W6ty9YEiu4zHistvTZRjfjZJtsrzcwDA6Na8TtMkfFMiFdqS8XET9nm7urraPu64DzCcQXcrJBfuLydPrPT5mM8",
  "key28": "2t8Vtjf1Qs3FJkGUfz5k3ASaEzUTWjUdiquM28BT3su5swG7gKJcXSPwgftsMipa4hx5RcWN9wi5Jrkrq7gUCXSh",
  "key29": "5GxfCiG34ZeTcf49VZDzhAvQQ8rJTD5BK5AKtU5swuJz8N8x8HECh9wYyq2rDju3fkfDbBVuP7xPZKLyhemkV8os",
  "key30": "2cGWLbEoPkqJjsBwSfy65bAdmq1LTxf2cYx7ZnbwELuSDjrfWDxjsSDqDHEGCELCzTwk6kQPV22RYtqdsYFk6HCs",
  "key31": "4tKBJ2Ef7Q3Wtys8DLe2ug2f5HG9atassjRDoZaMSmt7qBeahthbBGeYtdHJfu84BtzkW4gV7AL4WbeutFWzz8u1",
  "key32": "4fouEYkmwDEm4Lxqu8oGyk6K8VX5tM48Xoxv3KSAe54CfvuDLEiiNGBCeJzrhCrKJPfGssuAAdM7ySmxX2xFKgMC",
  "key33": "UNxPYUGzXodW1s7V5hgBqFXHiFdr2ScSBQy46akNc8EBxnAUoktgWyn9Nz9ztf19etXjYmPQ1wn93L7BLzPLrZ6",
  "key34": "3psQioET1yqhFnHxv4v7WPBVRyHiWbH1sg1R12vrLr1KEXcAXdbXDj5T69LxggVYyzgNYU5PoH3ZsY1PP6jXJD4P",
  "key35": "5SNt4HwmiHY2BsUc2f888pWgMhKXND4DXDzgmc4Kbzx5zky1UtPQKTtPX2UUcLCEV4R6wumBjDZ8ThhVLKqwBH9t",
  "key36": "3TymCaPSJW9dHgk96pXHF2FEsaa5m6u7F3Vwad6wM4uicco5j8nkyT5QS5rvu2wsaUP7ZiLpNigs9H2ybPYzcxCt",
  "key37": "5faAVbGRRJRWspUpghABUCw82Tj8gvCV3upHJFTBG76e3ZXGrVTE4SbkvMXe135vg8gdhGkHBgLrGYzC6XwN1LZF"
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
