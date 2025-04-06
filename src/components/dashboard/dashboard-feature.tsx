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
    "2Z1HC6ZA8CLKSKi2DuJuywYLpygsJ4pkWewCCzqUQbexdET2UWwEEzvr9WayaBHw5mdJ2fmmjyRC8pEb6e56kp3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQe7BK21G1WVRGfmSpLVA1Wpaqi66Ki1wzjh8QQMjAwJA3QKhnRYtd3YoemrvPW9pgrFyFDcdnd179a7Wwm6FYL",
  "key1": "35mqbZs4xNHHqPtrSUQgTB3cYegkDTPQtbpiXP76TKk6kFBRsQC6dQiRz3dkFLgSWmDnyTQPxSrYCUxgmdJpHx2k",
  "key2": "J2zwk8bgtZcVv6eLsHyus6oB8Sy1pLjWCd2kE5tCDSmUvzWjx68UcxtAKTSPuLXZVAtkbQx4q8THzYwnQ79F2hi",
  "key3": "4TBRXhymYgHCATcZzU5z9Zq3t66gtyHJBWfsWq8wjdA5wt6A6jBedMDy1nZRf9YbWgeVywiLUkDNs1Vg9Df6GvcS",
  "key4": "2U48MJWMNXTSVR7Mde3DKhNUKq1prgvzMiRJ8dwzzXxk6iy684Afvrd5A3RDNnedGcdwzX5dYo3fpzgqQHs7YqZx",
  "key5": "5837DcSA8WuMQ74QB5FY64dCKTnj3o6RzRbTKDRLKyDyF9Np6n52SnPXjbT5QfW6U9vw99wYD8WQWzq6fSUyLD4w",
  "key6": "5CSSdB6cd6Jo89MmMoQW88gaKputtdszhtPxDem31CbTrvYVLucgF8xN3Nn5aJmKc8zBcgyimxZDRvCyzvJgZmnA",
  "key7": "4LNtbxqLd4xfnotKMETemwWhMB1jPdMobMffemTUKeeWT2iQnDMHUnA4BNjDwBTcthLDmm2Se8Vx7YfWmsUwXtPW",
  "key8": "2HX9Dd5aof4ch2MwfyNXjD478rNkxMnmf9xK67FGmjzb5fU35RZodpkh6dCxm2vx1UuVDSmTNNTReNgwai2HmwJf",
  "key9": "3fW5uP5ZEtZzV6waWemv4dLRXDrqbPWVY14kzqaAv45AqEvnhBWxCFWvF5dv9VzEC1uQ6NQzzrs81zjBayqT8zfs",
  "key10": "3wTBzURTud2geBoY5M1ikPQ8tkfo8M6KCfD9ZjbLYBbJXs6JT1J7oXXfqEydA2gcZfbukVjo6M1PkhTjf1oh7jXw",
  "key11": "485q5VxzZYXwYeMedBz4kP4FtZvqxdW19iLJe71Mz7SfZUuTbn3vfAED8pzxNVTzZFRzUxWu4Rj1iAju8SaesKSs",
  "key12": "2NxMZis1mpKxrEiEUt8My56V9QXTzdPxFcJeA4g5eFqHv3YssF35XohRRUtPyZ7gnM1nH7GjNJ3yXNRwffigHdv8",
  "key13": "52RWfuuHf5QiKzFA83WxmxPjuwmzAT2oL8nEVAiJCXUYG9y1JcpLCDE3WDJsUzSFQrJU8sDZRz7cPcvkA5aaStKW",
  "key14": "2NCM2mbUtDvxAAXLUxJEwePrHAqf3Xq8xmFREmqrSVwkG32iCWFr8L8fgttWAedHdKvTSybR9vDxDZ4XrZeRgtF2",
  "key15": "Rn6KNi4uckLN4f6Q7MAK6DFoTddo26UGARkJYGMB3RaNJfDozvacVaqAhn9QtSbqM5NpKuKEGmCDW48hpqPzpRa",
  "key16": "cjDbGj47k2fCup1J1cqisfWgBbbEge4HaGorD1p6TR9EP9GYWYPWPDJ9ugs9d2H1rowm1dLHRQoRELT8dCqFQKg",
  "key17": "3FpSoE4UcL3c4QD1DEicDYZQD763NQ8uTUCanApMrC39dXUNxrDF6ZLCNQWcPpxjvRBUEgmAZTVaqv7sZ93CLPYF",
  "key18": "4JrH6r4UjvcZgFVSMNSFemhzSw2pSKoCS3bH6paDddLVhXsMchu65RYZvv3L6F3Mx5ZfD7Nq91bLXuMmbhAgJQ46",
  "key19": "5DstGMiVaWcR9nNYqeYWuWCZXVm85eXziAfWc3MS8jQQiiEEWurDEUEWPLkK4Qp1qXH7bEL3gmWp1rtP7G4tDT5y",
  "key20": "2rtPKUaFdbTUe86gmT8gowQ2jXwMRSfDnzRyiS9fxYWuL8zEKeDnP2EAYsR9UeYQxHen7EBnai2FCKa8BU7kyEMu",
  "key21": "5NTMNAYCudzKEiPqy4rRHhdnhLNfd1V41xtoWxNbpuQjmAKBwQsTHiJjZUTxd1ytAEfhM1fnF1ABBdEzgc1jcK3D",
  "key22": "29Fg3EZFD9xFan37Cirk3x3Tmpa3Bh837f8Nu4m2uFdpongBjaA61qXsDkzmrWXeaSyGqVNgQpkTdmFkoEsuWmWK",
  "key23": "3rtgjnwVx9e4uuK7mnzztCe7pSdsPezwGEcvpHRrm6o9QUQhRao9pd2a2BXBVaeEMDQU5CHTHzJ3gAxr7f1TffiU",
  "key24": "2U8PxKhqMhmRwXg4gG4GXpzg4aTg9NuvVxrgScP7mEELegnz11NXDwyvqWLs1bCfZ6rcuzntEV2Eqskp56vaeiWR",
  "key25": "f5W7QqgQUmkuNHtbjVBPZyg7mdqJFGLHBFdiL87dVZtFVEf8dU8fGq5ktkhPaT5JmBvq3pJnKMsxmh5dWAZYJpv",
  "key26": "jTuUV86mjMBxB1CWNLN3z6CRPKv1JLrtxYU4Z6XdvGb1n6SHWYBb9vcwpKGNuGQzmL2E2DAoLhm8NYq8znLNcb4",
  "key27": "62JaggoquvobabMVDzgvEJTCL4NAyTJP6apM52bUnhwEALEcK5mgTMSqPWbongQSNE7dtZRJiD6vQGr4QrGKowEY",
  "key28": "2ZHNFyTXX5fX7XqJemnSTdc8dTG6BfV3A8hJWBMUk1L1yHUMrUJJw4yDgEhMAekM98Lu5YEqCwvBm36KPauimYWN",
  "key29": "59urWJbux7JUn58LyF5SRBSFgETTZe7aLfTPUYFGoXMYUBSYK25qe2odQuFLubF71b3s2j9uCN4Z9rHj4ECZj6QU",
  "key30": "5SgfWrcpsyH2ZyrjQsUNMrRjygNF2yT2L11KzHstzrhF7jKCzvHv6AKvB5ZVKcWGB1ADCLM34nDhyBpE34auUJjr",
  "key31": "FiVrBV4EAbxJHMX3ErssXoZ2uiHtdwqQavCbVfDWDXxdwmnUZcy3rJtVrsh8sDfyyVmaxb38iSSJGiikiJo3we8"
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
