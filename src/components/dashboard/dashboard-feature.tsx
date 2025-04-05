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
    "5WLeedzb1Bbv2v7mrTWueuH2LVAVsA86XvBoTAxx4uW2ePB5nuDdR3z2no5aa1mBtbjsiR2cv2Qej2Ja2BTQZg4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCtwUyTCuLzNVFWtZAGoVWbpeFsiQNLcjwZLkm8ofhdmzoMqc1Q9gDjf1aE4y86uJRe8JXSh8unK5UG3myGeKPg",
  "key1": "2pNNC9edG6Z2bkKVjpo9q8P8jzwms5hNzckSoxmWzJVWmA8GoeKiGYYZswDm2tna1Ni7hTJ8Qu3y8ab5jxLJSFUw",
  "key2": "4uf3M2xuGxw7TiorAnNiRCG48k3X2RSbFijy6yBHcrb3BhijDrCsL6Y877NEykkZyHnZUUE1Udq2VVWix7G8CqLZ",
  "key3": "3EBfY4BJyzwNLqbFeByStwynSLPAJppkaef3safZu67q56pmxBcbQsWaCG3EZjsXuR1ySC919JkJkUWH4nRes17t",
  "key4": "5cNppv6Lp66zyCySg3zRuw4HWyeUv926PJNsGcP83yBZYJbb6cJh2aNTpYEMtHCmnUYKJXJVkC4hzH1XmW191bBE",
  "key5": "2MmaerUMNZRMyvq2SpPVMoVVhbRe6yoSty7gjMWZShWSpsQxiSPnejVasLgWf2dHeBNBWzP63QZkCSicRjBimUMd",
  "key6": "knAm9keaEdA2JCnQgm3256ieXH3bN2LjKdiiwiEpNXZncFSRvSGnbZCF8gMExkN4Z9f1cM6C9qvQHpbsNEd51zt",
  "key7": "4aLdvCUwrJgfmfnJidRAMV8E6pkaQcyk7EszNcP5v2j63RLTcG4Dh9mpsaosCPmDgck6VaQ8zobHGBeKmvdtfwJj",
  "key8": "2YoajjKnvFZWKsW4FxgXavFFmuYM1HktbkEevkAYRGphQcHxLmvaLXQb6gDfof1Dh3ZmeiBUN4jbu66oVFYAzUZ1",
  "key9": "5afgVFPFaxCK53pKPeKP6VRzhuAb2hkLXEE1LHECYnprhx1vc5RfkS4g5oqxpuFPQw9txKup4HKUYP9tL5ffMKSC",
  "key10": "63G9JXrj67gr7rPWgy16aBNSN7T8FR9UZcWEFKGeV4nQKWYp8hLowScfH2px5d3dCLQoBCBVWHyn5JLyCm2RrZDP",
  "key11": "4njxdXiVwdDuXweUGKfGM6uvBTqzyqjVgasQVUNXqXaWYHWygmFQ2exSRb4AFUwsLRRLCHEYeu1S9ahbcXGn775a",
  "key12": "33DEtn5mnWTZuU6CSLxbZLcuoNzsXQ4A5Qg8dzMwWg3BCWPJfVzj5aaujmitZ71Ph1RK1r1ckkgcC8rfnGm9npKX",
  "key13": "2MC4sGm3e6nnG5RXXHCqVggCiUME7U2FmuVTNpeee5Gh54AUipS73Pn2rV1AVzGPRTEXqVXT3SN5ZF9uMsaomF2W",
  "key14": "64EZdZkpcaS1diY3b5csZRfLBdtvR7S7eew8vjWaPWntEzqVmbQvwHYvmWmoR2if7xHSbvvFHd45ScKxBvTX7PK3",
  "key15": "4mAHxAbazaNc25W64eTZYoer3LHuhV6WZP744SaFkb8oVDxHgij55BcMNj9Cy4mgWo8YxtAsEXtRPGyPH7kXWmMj",
  "key16": "37s1NK4MQsmRL9SbbtaKAS2UBgG82MQ6qpNTLy4LzrYU5BZrtoxZBCaVBH9d2og5o8HpqsDKc1YGwyarY5P3ZCvD",
  "key17": "5PULwNKxWQpuGMD9YaTcrCre6LAqgWd3h68xaC67sq3U2GjfKQeXu9X8Csy9x6Qpqyg1Cys6YAXHzzYBcyzYW69p",
  "key18": "3y488fhZJzfCKTRLcpnZ27tE1t5nuD32mnVCVLehvxJ14F7xi6zxSiFsHF2mg4qWf2n5AKkEhAamvP25fE6rWN7R",
  "key19": "3dt2ftE75fKjpZAXQaYPC6sejv5NPs5crA9V1i1ePj5AAufMawfnnHWQHdfnGgCRUux8dUsFssoCeRq79ACjdHJu",
  "key20": "5CCsJssDBkiaXp3KALupieXXihEWb5gjovgERhKYmXgKfzv8QaBAYzcbgXy9TNyG6CKnxncCBVNuWbeH9PwF4jQd",
  "key21": "4hFtvLgzP8TDRSTxr2cpwj1qsQihVn3r2vdbrAyBtvZsrSBmkd3bWywWW6xcVMPWdecGcaQWvmaeAKTadabhFBQc",
  "key22": "5KpJBXetcMMg8pWPiQRB22HHN7mLQygyCuLXE8gH5X58jVnhxqn9AGFLqJYgCG77VKJTQEcSVqsWiqkwLrewgair",
  "key23": "2GLkA1F5gmvXp2KuFXZ7LS493Dni9W3ryViJNAbtLrQcNSc8wE3MC8JSCER96UotSf4Vmp4S4zx8hk79AvKkHhe7",
  "key24": "24fRpKvQ2BYyJz1ea88zLQ1tGBPSfQrSZVpNX4rcEUuGoc4ucbrS5JmUDR9oUNqKNx1MGLPyfxZWGJrsV8DHwAMX",
  "key25": "mq2yyZAmZo3mRVSBYkiiT7zXUTDCUdcTnLEj2AtDwTzk7JFNtNZuVruDSyx9hqJRbrvmgPbJ8yamBt2UdjPm5UE",
  "key26": "5rnjkdjzbrpXUwszmcwU2tLZ1QAU5LyR12441P5dHpTcCD4ty9U9Uvvapmgq4NCZo8H2QgwchuTyCjUtxssg6aPB",
  "key27": "4V8jDACHsY1xGq9VxRh2Z7jQaCPEPsb19gtbAavpYmAffUhTp1xirDdwykBFTexaw6KgfWWgb15mHc77EBF4CnnJ",
  "key28": "5nxs41iehoLikzGLo4P8b8FaxiSpRr4U8DHmENjGTEYB9UQJ6CC7dZke528w6TStTuRHBwgNMz9ygeVyY6WBw3Pc",
  "key29": "5SpLXwRzmZVBd9MT8TYmryfCPr24jCg1NdqhN5zUtF8Mogh1eCpMqqnvevEo67HoJKe89rXh7w2Zb7HFuKB8nCnv",
  "key30": "5Jar3qk5TZwrBk5gGRxA7yQ1d64rm2ygg9NyhU66oue6yh77r24ehJEUBtq6RFAicVqZMrJQvZNujG8NzQwYLSWa",
  "key31": "yL4ATKf117FoqNErrW6kukezz8o211kRVYPtdQPqegHZGvQEiSAsJdWnjC3oGfXWMMXcmMLBhbREXBwBNLd89Ph",
  "key32": "Q1rz1VNK5efCrA9GinsLKMedzhp9zhsUpypED9WFNx9LLDPXWthAtGvRKtCx7Bx8DpCZ37v5gorTKXux9suqjnL",
  "key33": "nVBm7TTx826H6oVUNFkeDFM8BriRqmKF1KJYaa8rPbHuBnRdCTGPme8EQvw5BVUCKTYd2udNz7C45SNgd9yPWa3",
  "key34": "4x417ReP7MuWTQG7LuRYvsNAjoXWYQbTh3CzgMVSDAh8isqRccAUCTtbSDFM3z2tJi6YEzeDfjLLSsKDHDPpXrd7",
  "key35": "34Zuk48tzoFBXFVs5pvcPWrQudh6fM2R5mhfrLwXaAKBMS1HtBEVLX3zxZqkFKTw2hRJFAuiXqHExFEWe7XVDs2y",
  "key36": "4EYe2AWRGymmChLGg2shhjH54eAMXB8vRzBzP9KESEnk5sg1JBMNQ8f5MNTx28pMPBM9GRKN8trNGYqm9Nupp9FK",
  "key37": "4fZ7fX191hHeAA6yhDvicarueyv9jaTYdVvWhBbA7Gr7X6c69MQTFrrrMx2fjrPB4pArLR2SZGjEWj6kssHKoZD4"
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
