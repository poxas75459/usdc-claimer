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
    "5Uf2o3reW4Hru5VEM2rSXJQAxRJCuypAQXJMo4wELDz7Rcy75DQRSEgwodNTsvNcp15CRx6X4LosoZ1n3LMgJysy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EAcb6ai3hgdYEPURXqMueczpc9ggCkwSzCtXKHGwfXwbxWAy5dxRTY5J649niFSCcfjjitgmSycdgCe69uD23Kq",
  "key1": "D2G2FRtCC2Q2Z3X5mbfiu1WUA6m8y7UHnSEyiFHMQxBpDsm48K7QnjHjnKy1CUiiWpB1ucWPU52esRHKUbkpgQR",
  "key2": "3yNJjuXg4RB1TGLRpctr64LEtnHaUJLL4LGvzpgykercJc8aqweVVqoZGSXw1AX8TDZmvA96kC8rpT8uVc9otdo8",
  "key3": "74syipzHosWQbjfTtgrkn635o272TzHSGWpfE6XGJHP51z7iraKSgDu7ncjbLvB4S9jiapDDsYQVFsHfXeFQMYw",
  "key4": "HkviRCcy7oZcMug282b66wXX7nyG4CrDi5J6SDXJqZXNLbexof5QyT4kDHswrH1R6JUeKjBpukdW2F785rSEEJH",
  "key5": "3iCrK16i9zRd8rDCwDjqb2YraHLehDDsTDvJWjyLKA3ybHwFn8Zuoemhhjk1YvV9r1FeJJY75UDLtBMGhk8TMude",
  "key6": "3NWKctKzu3LSy813WUoT5Cmm4pGXAEdXAU8Z9EDYdiTKvwYft8WFzemtqPJ1ZFGpDy3jRpJbJuZBJcz9wKK1sKPh",
  "key7": "2LU4G3zJ4M6ScKcS2B2pP8c9j56o3WCq1y1US5cBM4Uu2F3SX1TPRwE7jr7DY6mrz38Zd9wEhFu1c3PqPQ8pzWb8",
  "key8": "5csuAEv8NypQGghC6QTwpiMbkGeptKxbvsDvP69G9KYD6FzA14nvdpdMRjazyJDBjUYH6xNZHwZvquFJzf3EJkm6",
  "key9": "p3uz65AjnFUZegrHTzth1LRx5xr4gJFNZ8oKifrnanV2VcvAXgcnJ1twn8i3xDq3uZWNdaWAf65RKn4Z8KFXLYg",
  "key10": "2nNnPNTGxEfwuxMJHk4GsgCccKWz6RxRGKSctKxqGV8NbJTZACY1k3jmFxvFrZRwkTHo8DMygubYJPHmG9LaskgF",
  "key11": "2uDwwxq9BUbCtmRUYfBA7u1MtVJuE8UfQduq9K7bHYd8ok1TdJotV35BmrzP4u9QyC5mufxPW5d1xNGEvtCfkE82",
  "key12": "5B582pUpBGyQzxmYECeiEiJDLHXFfx2h6pdb7FovFdMb1US3KQwBQ6wcZ9NJ5aMVUe3pEk2uuSr6nh9snWwmtroy",
  "key13": "644fXr6hozj9j2JP3DFnXF8c6zbZFGjw7DhbcaYiiARKMJWXgUeYE5parkUCsnoiYKzmKWGfAwP71HCdgQEzScAC",
  "key14": "3GJeTMzXFSXAfsZ1S6G1TKrzS4GTmNnzoRm1iZK5rspc23kRrfa2KzgTeUwBxRXUcuGSuHGce2Et2XSfGWhvkx3p",
  "key15": "2ruNcZGWPpGJqmQR4j42gBUNSGWGc4jcZ8ZWvn1jNkZpQYJJM437tLMQR2rm9PwN7y2rVtcB26eJV8XMqR24ME3p",
  "key16": "2vZJfKPj7xpsn9BhKcyXtaWWqRHFEc7YBkf5MELLfeEyVEfhke2btsuLaN78R3sdqqCPXLXZToz79iCnLTGAMckj",
  "key17": "4WdwPYPthoLyQp4PRLNbB97X3Un5ebyCoy55m2DtTgKr1xNFdB8t4AXUttC9kf2x5gsXrTuPX6NA1kEzE5UfyUwv",
  "key18": "5kds9rwhE9nMdmxyFCv4pNm4jLbQ9zWvyoUxryEhzpaniCAn4g4q6Y57J8SwPodeTeoedcNGz22i515wox2eKsLm",
  "key19": "5HExDs2GKse9dUmS4gVmyeMXTRBgAbDARedecia57BkNjnt3V8ofxcoLji5kkVGVdWyWF9S6gHtKywPhHpHjun9p",
  "key20": "HyzVBhhKnhAhDd71YknEGCvzWwZKKYJ4gXwhrmmdE2NfS44q9JiPeUaqJwxvAU4NUVdfRba1UVpfZwW5JKCQoUU",
  "key21": "oByHsj52NKXFEQtMdFTWRedCHk5KfuFtDiiNK53wDVynaadLmj4HUQ2WkosEBVQJwR5tqcBcPfHffsLAcaTLyAY",
  "key22": "HvruyH2XKGyctErmb6xDFQUiMsLqkV7vn3JMt9y1RHyNc1u8WoeYp2CZvWKz9Vf4QmtGb5AMe9keE8shHnAUA53",
  "key23": "5vbUtKfDkL8zXKtvgiEfS7JEXFFtupqANxtFiMK4BMia3eDH2Hw47HadMwHCcxBcpBf4ncKa9dCLcmQYwtwBiKn3",
  "key24": "GkhXBtdpNNvyC33CY2tCuxPXPSGhp8ZPt7Lui4n2YKMsnL5soSPmxUWLHBUD7HrkYn7PzS9q1N3vSX375ea7HEa",
  "key25": "3d4qKtE6uVPdMH2X5p72gsnXeCvdJpt2nwoPmbRhu4FkUDhjeykwjbeJKNpVoUgZ9SEYQpCd4owM65RUec2jB1A9",
  "key26": "4jPSSAkR1AXDiyb3QBr8nK9LqW7ZVpcUCSiDeZpBLnQdy4UEa1aGB9cPaHLjRHYqVp7xXkQVUy3UcbVSmNat6gi7",
  "key27": "2V2fztDmpDRp52GWKXqKeUySWv1cPgwZaRy4nUG6UfpycsSWiWn9hWHx1Qsf97kjE7qipBrCUr27XJZzEN2AH4U6",
  "key28": "pGR6s7LmemoT2fq1j72qikoaGHjL1CDDyMAbr93A7NMU139hDVG43jusqCXpe7jga8K4XzLBeE8tDMZ6Toke3UM",
  "key29": "3po6iMwSdddLF5ARRVExus5BifP6p6gZ8aQcizep1f5zWguJPXyADZjxwwFLgc6GMM5fbhNwQJ4nsgxnznQT8uz1",
  "key30": "p1jbVRsq3nNirYpXcyn1LWvtEEjCDNkQBGWmS1YMRdE1yKTooaLhwYbTRiJUdE7h6cBGRrLKSBizWYYJTBpUyxw",
  "key31": "SFhUAixY6iaB3M4sqSDXk2uw62FGkHfwLSteX9ifTL2ZaDX1QaRKwgG5bpthdj5n9PMCRsJJzRF7JQVpFPfHwHs",
  "key32": "2vgjv75W3Pc9ZsHFWu7JAQ2VZSqL7GzNkMWMPLBPtg9Pt3TQnBj7nEkrYwLZdFkqdMXk2uEktyD5Nk29M4nbdbLz",
  "key33": "43fag9UhKLJMgT37LuMUyC3XFxnm1cPgorSUDX1u36QJnxiyf7FN3PN3hZvvaFPSNBXQEi8Vpy19Dx2pvXnF9YQy",
  "key34": "e9ytrwcdgChnhVLbFas8JqRSDJXzwYg74Tya42jiy2VAFro1mWPPdCVcUu3DXVqosjZbkMZBxmpt6F6dq6YSUq1",
  "key35": "3z7tJayHXgGHrY3zzdzxchvDCVKjDaNMySQGMkk3tZPctiu6KsQf6GWNA2XwomuW3Qy6PR66HVVGNypEJ1AP7Hyv",
  "key36": "54ns8vKxeKXanaDw2uh8gAreCU7pZRFWZvJ8LFb96PBNYHVNCeG6YkUinzEqLQJX7HUuFa9sroQbBgEroPQViZYC",
  "key37": "4kFdt67L9aY8caGQrTgEujUW6Q74RfdQPsxxjroLivxhaJrq5q98qJe5fWJjw7T3URjfdReMDBfGgwmZ2G5ybGkM"
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
