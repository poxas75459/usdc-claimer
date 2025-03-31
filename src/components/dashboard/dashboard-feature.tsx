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
    "41ueWyE19GWqsusQB3VNhe7tMiXGxRVBTeE6SXjDuZghchLTmJJeqjTq1zffrJZzGWgneCrjyRzgMkYRsVmPsg9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vLMschSkAymx7JSpV5SeboTsxuDJnPhgxMDRfzpsVp76VM4rvQhgM63fQUrbYuMQ2aw46rKHUxgXwis36EQF28",
  "key1": "4o4YWn4BY3vRDpnHzvZQxj3KKPUzTzwig6Vf1mJs36qeGCv5Hn24cQEsGXjfJdBKb9ZvNPpomy1T5D1QGPxnccTj",
  "key2": "2gKTAL55P7oecgMVVdw8yRsfCCCyHnxFDFwZeSzRCy89KoDe5cFzBNJonz8ryfvMR2i6maxsYrBkK8kJLD7ZU2NR",
  "key3": "2N7sAC3AjCcsQVZDMfDXJuYT2ipVjwNtDrvxx5J6hMcqj8jWNFAoQSDLqPCnBnFYqXmBx4JihHky68WwR6jd6dR3",
  "key4": "2MrsZpjVHAg8F85r9ary4u2xtNrFFwob31rUJPwL9HJQGCYDPVvEXefTo4VWEtVQ6SNaGh3h3Z44pwLZWv8AZpjk",
  "key5": "5EHHkQSpJTC9A2VeLeqim33Dq9tPBZkV5HSTHNz4Ed7RGh4fv9nsdSUQgFbWuGah96Z35PDSB8e738U4hSmiBjgL",
  "key6": "2W4Dvv27sDKjvP86awQXctpFpkKkCXcRNwqX2VfdAz8S4FxzfnfCJYMDeEMZwv7nCTTm8Xu4ezoywjCjKT48oHDF",
  "key7": "3Dh9TUs4EdQhXoPvCJwapRV8rY7eoX8mhKzqgrLfvnLo5BWKn6cRLeoAULCXmTHvGE7jaB9o5iFctuns8QfowDYv",
  "key8": "2sDeDyqdMFRaF7kUGo7VNcyYqZEENJJcsudunJx9Zh6DoEWGDbQv2Lbc126A9Jepo555a1A4KQrsYz6fPofcsMwZ",
  "key9": "rTrB5emTevCbXqKNWxYzsSrUbGesXi7qonSUdGjU6zKn4iXLsbjMsFNDfn3ia1dCah6fJWxKkbzr2J2wxwywzeN",
  "key10": "31HHdSm9gyTxnGcvcsLstc6vQrfKDckFxGbNyMAbmZxnE9TnvavnUwvcdzgAL8EfdeHGkCqGyBhBL2k29GnePZum",
  "key11": "5o1uNssVB84NRLic4WBTvVwRnjfF9yimoE3VuPZwrV4NThBwNmPwd9Lmf3agQ1c4r7mmPzBuMousxrnGGRpXTq6H",
  "key12": "566h2xJUMbiDkg1KeW7oQtb1Mw174RWo3rq59TyESB5zfoCHKcRv2dnyULMeDeNZotsK88mQPEA2xrM2u3YHiAei",
  "key13": "4n4iUNtTB3sY2BdskSuBHoNUaB7Dknr6LRTJGFXpUEJx7ajEoZ3vbqYBHN3igbNpweFUuSdEQFUDp3yj9PBohknp",
  "key14": "3e5EWHKwBU5cQwXwHkkqMmT17dcxEZdZ3pwcms6VqLGdoyyjXrcaA76pygg95jx5Ye3zUQZ9tBW36huP4tYaUkw5",
  "key15": "eQnWRph7zXur7xxmKAirwf98AZkWdykbGKDhjKeJ3D79B7dv7ez6euHtKKdaZibac2Tsi7KDrX1ztVymRprmphX",
  "key16": "2ZZZpywgGChg7phwGDH28W9XuJ8FJqJjGJg7u7tPz4HgcXXQ8Bet2bbUKRnuF5MhoZ4iMYTz6ADm5JZUncF28hLR",
  "key17": "4JpZcfXv6un6KBoc7Pgqnpkj6LRhdRYA7suZwUXRikiLYoa8ox49dg9meg8cSR2GxnzDiwVUBU4Yshch9DF4fqpN",
  "key18": "2A2JJWrXcX3job75d71pvBzFxsBomZrpLk1MPoD1PUsyvoWgUcW3fnokmWETHZtbzd4EqzVDVZ5diQS8gNK4rev7",
  "key19": "2UV2X2e7te5av15UrmLD9kqQW7QaYyQ5dpEshqzKTPYuz9qpLTi2wPoE85ubizXDdguchYaY995Kjw51wZ1zg5AE",
  "key20": "2nBTZySzt3aW9k13AGrAnHNcF3m1xTMgAdg8GbdnxQo8j8H66Lswm8LNzoqxtKNUjtkgd2NVQsVpojL48Nva1LUd",
  "key21": "Nt9WFBmirJ7La1dXTkJayNUWCDzNAvgbJUzhsyExiTr99AXSMeH8oKhVHRfE3hbsfBLsK9RX4hvnvkqyfeBtCQN",
  "key22": "2SYLCd63J58fmrCZxZrHTNdrHLVJCEpcugaiA1DgefEMMbzUeGXUbZz8aJwoJqndwkW2kSVgZPSCxajZimWgcXYY",
  "key23": "5AwDfRtdcKSh5PJ2SuyhZjUsWn9oJ1fxAAQz2bcZC5czBoHBQ6NcWGhFkGKbGSqej68wgUidNYUUUvmhxc16KDuz",
  "key24": "2fNBVjm4huMeiS3NKbJdfMieu8GdCvWJmrzd65q2trjWqt5q7M2JtTv4fqgcpNNDUtRDDsUYpHuXhjQAjiTaBTrG",
  "key25": "5n8vqArAngFgSSAppGgAXtgL9bPFEB8Z2AsWmVK1Zz3N58uVsF5yDDhWXJGL4x4uqcxJeqbqbUCUd2ATmSgVeKxS",
  "key26": "5C4SwVyNC6mWfsBVByM4hq8nxLJ1hMv9D2Bf9KwsERkZpbEbDApoEHzARzz7K57835HEVnzu1RADSVubH4GxqnKo",
  "key27": "37WfRDcGiHk6BaQnqDQ7xFsAJ7FwQGSsnuqq4MweUbLyfin156LWkDdkXWWqhEEc5ap3virGAt8zpgW7PE2aGdXy",
  "key28": "3e8WFa9CbnNUPTYtPwMqxWmTRYPaYkyDSSX5Qk1ha7ZENtGRG7Y3UME56UxboNnxwXQ2cV8C7vaEoPeTkAsecdF4",
  "key29": "4LJxyAdU4qqQUmhTdakpY5NsthRdiUndJYv3kse5tLHdbJC2zrFzYv22RrStgMwE1gdp99pLP6pvJeh5mmaGncUr",
  "key30": "4ynTk84NZeHcHjTLEtcqZ8YNWYkiSP4Mb2zKD36UM4K8snvSj8rbzhbLws9BcP2VVwN87M9iez5t5ovHgNPXP4gP",
  "key31": "2o58DgzPDMN3BpFsHDG7p3HuoPtc3Wyg6UH3PCauvAmv57RqoZeqnwZgVqd67JFM2vmpH7GebXmwAgZngYf1ov2L",
  "key32": "3jMCFZy93bfFnruhGL3SCE3GvoMPrc3RydsXa1QBi7AfSN6krpCyHtT2XpDqSizYSAg3NuhgaPPP9Ez9CWdyfJTC",
  "key33": "5CzC72vMqq1ZUQ5qZzMcHX88NUWKrnpk1kAyHPfzuhsvBcTXCsLhpLh7Ut3oNfD6EEqJ4WdTZbY4Ra4FB3xdYVEy",
  "key34": "uZ6oECmJwrTx2FhMsYTu2xN7rbxhitFRKV1zVaH8qGmE3gQZZ79i11LjEFoWnaJB2tCwpPNaVZeYfWzuPshVVLV",
  "key35": "5tkvdiNGfXMngoEsTqW4qDB7oQBexNJjYuvAiDaW389o4CGwcK1XbnaMsa45WKejQtDmrH9Hx7eG681PhNH4k1Ah",
  "key36": "2JrVDyqrmy5S1tm2TPkZTbfR745PcxvkwBuDdcTAmy9hvcQn28GGhn66kg4VkeVrBEeyAmS2Gc9SwpEim8jDYfjJ",
  "key37": "3nVcCXAvJh9JXhPzMmBd4GXedtiPH5QvM8juK5ar2qhj59vkYHBcJmppjHLeQrbRJcUyeMF39dM7A4hmEQ4Sac2s",
  "key38": "ai9HkVw47szegBFuhCaryPW1spSAgMciWd56Jj2YU2Uw8mcKDW1gTGm6K3vS4NmPNHYeFZLWKomHRQ6BYwpnuEE",
  "key39": "39pCTp9q2B3wFHdFbiEbiXMTMgqEUBxiT1dRkfpgvcLMHvwxwoVHScT3BFypWE66xJ2J81eyuy2VnhTSTqayuTUN",
  "key40": "4BHJV28BHKpm6wyQnEqd8R4Bw9e9aHfC38RxPcyDZDGUveWA4o6nByx87dX92qyhx6EFYwiHL6GwxZ92kR8MsYAA"
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
