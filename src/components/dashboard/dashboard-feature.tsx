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
    "4zSxqyWDgsnaCpLRszugkZzHebHEESx1q3zyAcRUF6WV1y48HWHtTeXh3rK9Zn26WPQJDz8Q4roW5RRJQNwg3sBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ffUDZSvHQeXHWcKxKCuigoGEFcxeusRhskqEA8MCGq8EfVGdFuQacNDQHoaJeUkwpye4KRRETpokAPUB7K627WZ",
  "key1": "52KmykUxPp9SQZQzEAK3NtD63WuKKetynQdLohvPYqffxh8amDJ7EYPrMzxqk4mVBYUEwpGwPFgYSavGiK2hNShg",
  "key2": "5Gipny5UvDdWFsDjQHQHTpP9RJ5FF7yAknFAvSGYa5BnwcZs2LuQ1SbASx3SqwHcHjNKzRncyRR65eTDtwSGseEF",
  "key3": "51FAum5UQQeDu2KnySGyWZLNz8T6t6s7mKc26smYvFt3PMoe3nngLEp8weUmJ6PQ7GzPpoVSA3LeAMdvoZu7xsty",
  "key4": "cp4xD7tQ4yGGwPEm1vKUwvhGNemdbCKtdPFA5SH9tzFWqm63CV7dBWwxMGBiF2XFWCDVLBFpzV3e2Zqjb4FMiFm",
  "key5": "2Lhg9gbsU8DPw3mXMJ7GzVQDh3zjmCdLNQpMkvJKqjYJpgRR48QcSJCzfr6Jsckic5u6afUfPx4cBApNR99wt4XW",
  "key6": "VFPsBiqZXxpH7prZqGneQHxjZGkV6vRiKitGBpS8EFPPCnbLvTvnroyrdLocVjUgftn58mrRvpVdyD9JuKAMPge",
  "key7": "2ZaukDmMTfTk24Utj5JUqwUjJbVJ8mW35Y1d5rg38tpvZSbSqzWpq8zd6Hw9eworxRAfBrRaGzxkW7koED4Rvgcv",
  "key8": "2VpLL9odKUrjggw7NfTSRUVdwqYb7AA4oT73s9SbPPW879tae2msNorwYVBYfY1vBdrBkiDhoiC4PuoTDpSzxYtj",
  "key9": "29fL2P8fXnqcEtdtHy2yk9zBmHt4LZBpETcAxF3FWFyGpvy6ZeqYECjUu3Uf3cjNJiEQqo3GRnxmNebNMKFw2NWt",
  "key10": "3HoxUnDsr1g3MWT2GPE9BVw4XicNxrnvFY5rDfGTGKNeY3mBGP6Xrgp4FwcnZ2pULhaRwvWoAaoC5qQNiZUmLisn",
  "key11": "4jhMKEFugmn9c9kVt33VqUoejdDhn5x1ksigtTFWodpVBwHZHAewLkgcg54tb119FgauASpemrcduzrDBg6BARhe",
  "key12": "5ffX1sc1WWf3MF3E6LEtAuBCKHM7rQ1TTAJG1uYRrNQQAUa6ZSiwujkzr9bJVSorqPiC4ieSKZSEBiFV6sf5f1nG",
  "key13": "qi5dxdpHrFQuWw6RVehxbyqptmrs5ZEwMkqj7Ew9qiGRCowrqqh3myXEyUPMBX7BivaXn8FfZUTLJ4kfgwWSM1o",
  "key14": "4suqaXb6jkpvmHXDxxkbVQsosptRsBtbCNkPnrW79DhR143LZPafD1YwTynoeaH2xszkQAbiY84TygL6qr1hxwfn",
  "key15": "2CNuGsiKJN1HscST6YiSxyA3pf5H3mYH2LPZ4LUoPoTL46s53UR4j1NAoxJxZby3k17eV66oS84ATfvguu4VEqXm",
  "key16": "3oyvJcko3BQSzXNbU36z3eWw9MEXH9RyVX6i4aTEW9WjDdcGBxyQTQSj3vX65dW29D3huXqEoejDWqAfmkv2cGRx",
  "key17": "a7nupExXkSTRAU7gEHRPMFhCJyPUNVZbnWQVCzMrapG2zRrb7UthPmP8XeZN2NcFRtVcSppzSUwUSSgSsg4yeLp",
  "key18": "4n6vMKJc497JAzDrzpy18zwe6EXsw31NjCzk9sHTCEkMdDcQCQuXxcKm5TFHNX6DbCCAqPyDkUACKXMgpuZwV3vV",
  "key19": "F4QVggLgHzDzRW8teozQjN4v4WnmCLw6LzfNd6mXdhVFMPEPF5hhux774AujtfFB5TwD9hFzxs68xovjj3odPZy",
  "key20": "2gAUAknmWJwB2Jjkjan88KEyRtvAeM4CdhByRp8gYy9V8nRyQ7X6sXYr4X2EFsztjcgqJ1aX3BjdjsFCUpnhZauH",
  "key21": "58v3vyRTAbhX6kNeAzFLmMgivFTtnGxj29cPNTb984VWKcrmUStBQJymaBTqJgupTwW2hazRaWYbcFcE1z1KnYB7",
  "key22": "5RMVh2aYRWSiaf8yZUEGrPw5DV88hWR7os5BNtTELyQFA24ZJ9ctAhpLj1YJWiQBxYF9VwYA2xtksrvqteJ2ejy8",
  "key23": "2XZUGDjwdaDMhKKsBKKzbBQ6QzhJ1CU2yLSxq3ugZjh173PXBWzeVFuj4PfTiJuNaxrBYAZxG6sKDrvmGe8GwKNk",
  "key24": "3XeX2Fob121TyascmgKg827T3KwYG3hyS5sTL7nPia7DduyoBz6mKM1Zsk1z3yi56LetgYECZshG9yQpggf5FUT3",
  "key25": "31AqXqKsWzPAuU27gUx6RTrfjNRv2Dej9mHiVXP3yajK5YH6oWmUDGewASEyW99NMEzX5bpWSf5aUnKRzhnaMGcw",
  "key26": "5ptsHUFw2JhSZZeGiVBr6cg99Rf6kmYAzYaiprzWRg8f7TLBx3npwjrW1bBPTyo7qZfovcoRD8yKWs3zupfgmk4m",
  "key27": "2TZTPVwTt58SAwJVfqz8zK2S3chnC4kMcf6TDfkRzRCU4fkQFe8WtP3g6hvhnDdrrU6cJJqE1TsVGwYPXPUECU5v",
  "key28": "3ZaBK7TE7dojfFCKoTrYFtpyhUDYSTxKMsLLr2HojJhySY9pDsQauxyXzPvidh9MdB9B8hT6iqij9WLe6eyXDw3Z",
  "key29": "4RAN2nAwtvHcxqJgtHtdVMwpyRf5ZgbH1DwhaJ443YSXZJXAoEEJpPhxwR5QVUEKygSTJsKELR2E44me7o37FHct",
  "key30": "3RKGi3XYRAzqdbKaSDntYhReW7ArYHQfnrHqko2UdvAMszFxkP3mkMnwZeYsEbfEnevM9EvXh6z3GQc3WgNjpCUQ",
  "key31": "3yFdYVtsqkZt9bqf39BJmozCXHQKQJFjFefQ7u3GELEY1vUGhXvGLX4aNwuURA8xXbbfhpZMKWKnQHbWeWHVRaZs",
  "key32": "wTMpeP4aAegFBJ33Rohc8xXxrxUc18PKjwhgAoFktwezsMTHUswwhyJw1i2qp12u1GNLVwzcGzK4JFDSEYQLPF6",
  "key33": "Qpkzq5FGVtFNpHF9231qoqRB65Z8b4h4nnRRQyRxUwcm441Xowjf4PE1wu8aSnRsES5b4uGu6aGExbN9pNUR3sg",
  "key34": "jgjLfcPaA54HdvgTYsxRvQt3x6CC45QNevh8PG8kTJ1zv9oQsZRpLHCMNxMUoVp2pqRmXPkoff1RhcQCmrGARXV",
  "key35": "2D5qB2xyXF4VzzX5abMYmfw9pcd5CVpdsmV4E3yTF7q23uLzURgiWwvU68j9tzWdhmqxgSSankpXrBS2SArDe2Kp",
  "key36": "41ncuYyd2yyXLQBMpJ9sEeLwtENC9XZbeocH19TwgtNFweJ1z5M94g5bFpBaG3Eq9xXSEnEWFH3QhWAf3mbfaTMc",
  "key37": "LswDeWV7BtLggHoNcC4eVuSvhmAieKTc2M5MUSXYcvRqi9zrT1oW7au2i2XA8z4XdGiDEGP2KhwUrSJDnAGYxtM",
  "key38": "d3fZWYMi5DeJHdphbzV429UryQ9d7Zeu9oHUpSRW6Dw8VbHwpMtEzaP52cKMYUES2CdCiq7hhr3ZmCiwH57jFrN",
  "key39": "3GXzZSCPyix5ZuqhiGnfvGnjptdBV6TicCVJW3UmwUPWoKbxyBusv7uq6npfsvfRXL2WS8tP75rYX64kfZHCTvw7",
  "key40": "2DCtmAsj3aCRBgLx4KG8bzpjhJwdfA5Mwi8abgW6tbSETK9GHC1ZDTzNt4wFW7uoSBnrc5XbWr8YA596U63eqmLn",
  "key41": "o3gw4JVKmcAm95WGnbLfCDpXgCs9SL6f7QU6asRSpFSdMB9PsTJH9abBGQ4bWu9wY91qpT3Jt5XaRo9xtQGRU8z",
  "key42": "2Uq6qRsqwLypywAFXNQT8o9FapDxVvV1z5VWzt5UprimbdSXi2aPxxPA5W9Mjqj7Nc5oqm37zxZMSRbvSYvpPrmm",
  "key43": "QtvJ792TSbEjUjMQEN6ecawhP2tgtasRvRW95rzNT7E5iTeHg55YkwpvcSDZW17V2XhQgmCzSdd88dUJN5obesQ",
  "key44": "2DcPTkB21aAmMu2WQaeFCnkL55XuveLv6PpqqadpTL5tofgzNYJNHj2mGF9wMs9Ch9bW8SUDsam4h1yDbUcf8Z2d",
  "key45": "2QBRBnofJpjCXFbHSM1jrPuG2Rf9U2oXXBiwdw91UdpnKUsHVCJMWHMU6rMtsbNsED7rsEM6zQcLfM69yzF6oLew",
  "key46": "336EmqsEAaeF85P7p3W3SwJWyWd4Pvf61e1QcVQrcrGJm4kKvrceDBcxPqccU81FvNLEepzaVc8vBdsB4KtFwNQY"
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
