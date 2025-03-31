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
    "2Nh51H2v6i2HznLDuvcG5dejzkJ7WcAZssWYHm8GKKQpm9bEd7eVSanyy4R45wN21H2hJtAuFRupMTV2ADVpGRLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aq6nioE52FfDT2KTbHRHSeAtpSZ7y2D1hH8XPAuNqMKVnpb979iExupZZdBQEnHV3ZFYTssSwLgbeZMoZ7NQAE1",
  "key1": "4oC11T12MmyrrAy2AdMFHFFEwNwfn8EFQCECg6AnSfzQFZxQYT3mXj42B1kJBQbKsPzDJhCqSfNdsfZ8wTcDpzxv",
  "key2": "3kpRWg7dravi1sewxw5JE8NNYmBA8XgheCFzcwpqoemHmUibkFFgDt7DndaGkmzjAJtmY1aXSG4LW3x2E5TiCZYH",
  "key3": "Ky3LUKheuBVbFbfogq36hucenk8o1ypdty9tjqBqsdCgxj9WDrGcV8HDEuvNKxYKEmtexUk85TZMgRuf66scoYC",
  "key4": "2wFSzPH7zmxXd6yjZCPqrHph71g9K1Rrb4YjHSYGBbGY5SHmo7A3rGaSJmtc6mYEC78WDKnKqpWbAhv1RVnHHBJV",
  "key5": "5fG9FQCBaRNKNYWLgdxbZ4moy1E54Lbk7STmSbjBgYc5VG5TfBSyL4gk9iaXCKEEYbRcLTTF2891Jocn3uBrf5Dd",
  "key6": "46uueW72bs7SvkGWVqEaHF7SbuqFr6odd1dswBMgVJNkbcsmdcjwKpdLuxZzB55HPYknyGayDrjPhxjopvTj8Sfb",
  "key7": "BbWQNMwYbh7c8Zi3ebsMcSeYDSxX5tG9A68iQ1P9RQAJ5mc4ufoe4eHe24BW7CaqndnoDCMx7SZnVMf9PDJc8HC",
  "key8": "hbERZes4uTXHkhFgSBzqjo96giqD7yWyMVxq5XUJVdaUwZjpMezvyN2fYwG79HBQ84qS9fo55BuJiYKFco7dxJz",
  "key9": "5qfYL6RFUw17DRH5JSenyYYN1BDyAKWrbBGaYmN81YWCnHUv13aWSbEiSevkksUENZ4NbV3SVVT4aTKzULMyZ3yG",
  "key10": "SLx6rRCRhDqPdLCN2uCk63cKsPb8RAP7FuGmBEdLHCyAvx5PaLM1fywHFHYysbpZtpwJN5MXA9L4DooFqFTXh5t",
  "key11": "5fEqwbPhmYAui4LAqD49sbMCCUamNRVxaydXuyza6HrGjqdn2dEdxgwPMn4XE56vYrRZ3nrGyyyJgJu8Rz7EvvVg",
  "key12": "EtH6QFpD9xkcjtFmJoWMLcC3CgysSmhcuMXTYEqrW1DbT6LAcVTEqEgCR2QQNTiZcXr2gcaDgesh1hPbyKeMzBa",
  "key13": "5Asn9bpvVFrBSgsXQGDLxNzbKo8wWpQqzPLWcH4t9BYeAaCbjUBiyeP5TrDycWgBbo1hCaQBksBwNWmdJnQee5og",
  "key14": "3pRULgMKgcWwVZqYKfJcHcdC6VU3D3BjrZn4Qq2gda1HA1BVtsobGjxjnTyiMH7stxZsLtK2nvDvKa5bowCsXwAm",
  "key15": "5eGp1chhNJZEk9CoqoQdYnHRCDLeKAS8W5UBPQq46La74ox3imW6bnT9kjnoP1C95cLn82xZT1imo29KqtYzQN4y",
  "key16": "wp23W7ooCnGoh2Mjo2NQjZFNoGySedRuL1Q7dVgtU7U2muEqrHjQqYiM7uMjY7opaK1W3UJNJVAQxd5UF3ifpEP",
  "key17": "52pJW5GW4KNZ1KJfyV33vhqZRpTxRRWEBLJtuoKE7LA9Ga33qKPUshyXZyNMbTo5m5xMht81jW4pKWrLZWD6mh5T",
  "key18": "2HeRaaetZFpWMLEaRdNnNuWUcpYBCHPonVrRULPQziUygySWCfzBNUCXXzEwt1q9FYc62kXqzdirzkJ8TE8t372N",
  "key19": "2PcuyzW3bUDMMuocARwduLD3o3QKbcALcediiK2ySeMZnLwYW3X18hDSHrUhHjqwWrPeUCS6215rxQxra4nHsJYB",
  "key20": "5Kz9u3a9T2cg7BTD72GwCqKLtHoRjgBZpxvvwBET8SMkBaTQ2yhwJTFdxXcvdc2BKitAfBaM1XBh9K7ADtk4nLyN",
  "key21": "4nBrkyfZex1mgawxAkTkooA8kWycaLYEgFeN11FUdUVnbzakXYFsADmdRM9nesRgPYjrchevFrtZK3z2rQFkHo41",
  "key22": "2vY6cSo86hZW3tbJuHXEqa2v8ur8LxQRBM6NTuPXHH7ku4PQAnnKroVQJ9P66wu2yk9PQnaun4jtfC7K4ZXeNEEc",
  "key23": "2BtJkmgXProSU2JnzZhZ4ydokq9EUiJ42Mf6BJPuk8D8Dqy4irTdptigArba3AgSFKRDgMpQEZ2p6EePHN7gQe9N",
  "key24": "Roh3vNPtEdrUA4c3tbyzxTADt9xfn8nDZbLxsK2UnBRjFYHEgsTP49w8jBNqxBEjwyS1zLNmKcExw7rn1ysSyPh",
  "key25": "5aump8N3YwF3c7K5eXoqBDJwcxCnXynmnM7Zk8646z1rpArJbuRkej3dDnwUDCDU1XAzj2Mpoys4hDNoi3VPCeSQ",
  "key26": "3GcupDkVALqVDerzWTaCT8xK7RJMF6wWHS6Wferv2F5toy53p8tjMUMANmyEYvwUgpBXUCrnFAZ2edyvTx7zpjhs",
  "key27": "2spG4xj8ygVzJUoTk9UFrfSpbFj9XQHa6sUefzdV5cUitvrc7rsxXoAWHUrpuACJ4rhjKY4p4qE3K8X5B2WBQpH1",
  "key28": "4yVnZMJrKzihbhnk9Jodj9yBrvTrz6j7aULYYbVGhctajC3GFixpEA2UAeDBk5QEaq5HH5H7Xz9Hxe6dnFtGyvQ2",
  "key29": "2JFCrp2Ed2zsqu4rthaVEq6UnYimtijHcf83tnZtX5cQJ7UzEvYMCGCgQkE2UiaAEso4deKbeSEPaJ3oMdpkPd1E",
  "key30": "3hY7d3QBcGhTdS4EBifcKB2Rb8b9YHip8W4mngqEiWNwgi8YcV34ULGakJt3ttJJynAEx2jhw1378iaudBtmyAcZ",
  "key31": "3UKw9U2foYeNysJ5tmrPUkJn3y7asV1KytiC9TyXkcvtLmbfrR2gTWZihkwox9Bq8y4KcE4aghpAAHgdMHHD5D8u",
  "key32": "3DbjF19on6FdFeD8BBq9YYk2urggJdvtzyb2QVwxQ5LSQWQkX5f4z7x6sSFsmeAg5RoBDdKyVmor51qZw3o8zLLh",
  "key33": "rrbtLEym2PCdxF54qWRXSDcyDoBexrXJDoJs6c7nE4gVuK8ACzEmHwec4NsEx9jsavMXDKGymWcmTY9CNpJZHFJ",
  "key34": "2b2TveNa1fScuFG8SaRPrcJvdYdusYwR7vfU4wqB4vxuyWsinghCeF4G8FLw8d7tG9Q3LZ2jAtQAbi6p32v6ht5J",
  "key35": "4Xz54EvKb3CaTRsoRBwQ7vttbd8DVUEAVYu2AZcaoQae5dePPuQxxnmWQpMZyk6Gyync6wt7QgxurPsShPotPD7M",
  "key36": "WJMX5HdUc7x2kbuEpoYXEuvBPDTo6wee86F5YfMHLzkTKL2mkF8Q6NfJpVgjmPx3qeKCJLmBD9iuQBam5ZR6mnb",
  "key37": "2rk59i5RLxBrPe4hqBgY4cvKGUR67NxGvB21dMK3FG6k4HTAJyHyPvL57fThDoEyfynmexWRtnSEriyyocdmCgdf"
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
