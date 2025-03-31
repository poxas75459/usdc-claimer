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
    "38VaH9ZiCZRM6LasuDLi5Y2pa3K8yyzK42XQxnFd7qYYudUK4Z6dRwgWgxg6PvUuDAHTVaU38H6Y4evSVUoo5J67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KZLLLS8uVFkrM3cazVx9TosyfskYVo1W3gs53AeyUEStiKTEihk5z3aNXYm3JErNBw6Mbrvdd1ifu6iqMx4HQ9e",
  "key1": "311rWZ5fJgGHS489THs5LN3oEYWinC8pKET8hakbtLj8qE8bAWoxk3hVkyCKXfvv4S7BdtLh29QYT1Lg41XBrNFw",
  "key2": "5xTQ4fyoUbPkAsaz6x3bhjh1jUCgq5wW8NAobyYLMjBz9AsSm32QJTAniCGe8pJMwMZHaL4F2gyweDCuzyFcPfNs",
  "key3": "3mspVMgjCxfK9sV9fXNdVTTYxV4g2HVp3HYzKpHopTswSx9XNUDzmdRP4V8ULhqEDSvMUDXQGy1Mji1jokwAa7kv",
  "key4": "4QzuE7gBQToZU4DogDiciA3obDYjD2qdTr2jrmrGYghWBzCcR5v5PsXto7kpBBsPz7sLZATscDVqeWkFh7xbxvzR",
  "key5": "5d3U33T8yBT9wpX9bx8f3huod7E9ytTRkfoXW2kQAXzesmgZN4uLoV9u9XdtMavXkd5KjgRZa4N3PC3DsWGBFFUD",
  "key6": "2JLpRJFPzcFc6dpCV7A2LkegZ9efy1rcHeDgsvssSVZxaEC4P1smxsgX8TcekPQYHxQVH7pC89myxnL8qYSZ5vMe",
  "key7": "2ycPTVt7X4wAXz8sd7pBYkjNAYG3afzrNBDseDWGSTDKsiALHGk6gGP8HhszxFugnwRpDs2URVaqYmQGWwxBxyse",
  "key8": "4afHGk6ddoSuuYv4QT3xeseX1QXuaoXjbgJwfVTLrgwWftrEr9VkcokZqwfbASWWHaZVGArLBsoXJycMWCdKFGq",
  "key9": "5pfhKUQ1wGr3ywKJRpeCoa67gFhMVMpJ3jPVBHsHRovKJrz2zt8Hk8vQUQBNNPKmCQkHyHVgSXfKB1Sg7Su7oGeF",
  "key10": "5FZC1NtG5GEgpbrjde3vpHGH3DZxsRnn2ZUSjXrF8f4WKdxSUzPLiYiqrVQufK9KJNJbnwD7mvZDRrJM7ahBy6RH",
  "key11": "2a9adx8xXHz2L73fB3rqskqXcD2QcQpmFbJgbTBW6PanLqqxqiixaygUsBsajkKrjV5iFEXYHyR6ZSrM8GDyJHs2",
  "key12": "5vCB3CBfCFa7GXSAWNZ4hk2yRjxpgZ5VAZFDgJchx6dz7CqB6HdG1P3QjspXqcuoVoxBdznfgpbvQNasVcqUiNsn",
  "key13": "3BwzQ6hSLbCPs5R2PfdkPCBRsADfGQEjD4dUhaiQdfxmRqYoYW4v1LaV5sEcmSHxaV3RmnAFihETCFdkv4H1DxdF",
  "key14": "3CfFf4a5Xsa1cCWDgPCkL8PTQ3odXmjNwYtr1o6wXFv9AKrNJjrqqPv6BJhGSs8KjkSBCNJoetXBvBSTT5u7tDev",
  "key15": "2wy64FH1BQL6qYEyGmjmcBZUbeNpto3mGGdMJayEqHhHwzAKx4Q4y1s1dHfV93wmd4cwJpH1ixq1qHJbgxpnr9D9",
  "key16": "ZgpuUxoB6LYeHbui6KQpQMBzaRPbUFCgokjBeVrPVwdX3bs5LBYshjBewL4iDtDiWHZN9eCVVs5dr6EzAximsZe",
  "key17": "5H24ohqN9Z3HxU6hHXXJQ4JekB7rR1DA5wmRvnCSs82DWKrXGCVYRWrccE3MkeBYHqeu3W4VtazWWYSAY7ehV8VM",
  "key18": "3aXuKtdXDpPM4cppwWurFhS8qraPriNjeJnMPo8uQYfe3douq9PeXbeCoWoqg4rmjDDe3PVATiESHH7vvL2UV7JZ",
  "key19": "7wKmuevJZkDMAbvGUjnwJzby21m3jZRKoU4wxXT8xXfBzhkumQRXdZ82dUtfMfugiztUgFYt3ZiaptJipggDmem",
  "key20": "3Muw1Kc884q2vi5u3RUAf9jRxd4UPVqoX9qk1moiHpTY7tHPCSpPeCZRj2D5wNXCmbsieW6wQ35duR6uURHXYeu1",
  "key21": "4iNBni9hYpMJvXnKLRGRdRNWaDPXgvNNrpXV3YN671TtvWYRmesvYYyXL2HaQdPd3itdG3tD8BDPtrg3EJRDfNQX",
  "key22": "BK9JbZwMAMaT9e3XMDXLAUBzxhcNKciT1YjHej7QKZyCookJcU4q448XVcAKMtsuKTxNyf41upKicFSj4y6wzdi",
  "key23": "3E9DSWmkaqmaQgRmhtZF5dyj1BPvn1hPkCRpTrVfXCVmvvahVGk75DN2n2TEnef7zKP1U9yab45hcXJUUgDV9MSJ",
  "key24": "4nDjNvnbaNk88eHi43eCpvLE5aa5Me2oPSmWvBg4uAdXd7mmaSX7XQSX2p6PD1VHaTGbnD51CzR44cUz4wqZSAqS",
  "key25": "37xpM82thKk89WGoxo4fSSni2paq6opixNo5Fpbbq7LTFM1tkJd38doZ65mjwvJRLmPrx4n5ZzLfqJRWFw1xvd9T",
  "key26": "5UAnGrddPZLyXpXUz74k5fQeuECmJhMt3DSFV1exTJyert8S31ZHeABbpmugnFg2VRfwWGi37xBpW4YAEG4UAjdH",
  "key27": "235N2L4Bv5mRoMNafHr2RBbhwY4kPiePN8f9kPQMBoMQXfR2m2EGLGMXQ6EzDg82D9pqZ32cVhcnWZc1DtYG1B8v",
  "key28": "5F33UDMu75TQgFPQuvxwf2emzaUhUj9XtU8BPjGKHXC1U5db33aWthmQvzPKZot2SQZjU5YVLa1qEUrbZEHphYZx",
  "key29": "V1AUQPFeoTT776MN6bfbYfw2Z4jAGmzpFjUKiETSMJ7DFxQnkMYvY5nYSznq4gYmaq4kRh8yB5rJgiGSzzA31Do"
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
