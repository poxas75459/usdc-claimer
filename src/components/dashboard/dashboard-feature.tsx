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
    "4zW2kwLbFbPpE3E3PsUwGLEtTciNKRNZDiMK5QxyyRJZh8onx6WqSQQ8Zxx5MK2xwacKn39cA1tsCVemRjxZMe4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25V62SmEjf5MxGRcvE9Tb75RgpZVShFtx8sSiB2KzVEeff8Qcrtp1DdaLnzPpHApxv6DMrzDCmDB3g8rj5cnitMf",
  "key1": "5ULkFWpwFoYbpCKZnstRBfBBodhFVrdrLKVVijWKrw46WKBESS9EapJnt4NDQ3E1H6kwUGFH3QThjAk9CnQm7AvW",
  "key2": "277jjJPf3qCWs5YPVqPzXHoyZBJ3Mw9v7Zw61bkhtM86zMECnu3uFGwXpvQZAtxF3zym5uUhVqdLBs67T59DiPcZ",
  "key3": "55sR2TFs6GwYL4NciaqfiC91nHPPFDfnd8GpwS8KcuDYyEAPjPVimvefeugQnRhvXv9VvK9S5bUP3hcQVdzkr7Ca",
  "key4": "ppvo7Cc9hJBw7P3RsrE44bJJ41uRagCwkiaKRvrt12APuPhKk8edq77F5B3nG5EUYYz5sX6txRH13CdSqx3LDsM",
  "key5": "46cKf4zaoHopEvZY5K3uecKQPN3zfJv5jq6WCY63Zpy1VhB9zdzz5HYexk592pgmMcK2jnoMMm3KGi6MwAkzEdBe",
  "key6": "5EejjgjGcspfdz7inWeyT5MjsVUkgER2YSNQRDijSxsENBYGYrmscbUyk16nc3NpPSTs9sSjFMRLzTEAaYTM7htB",
  "key7": "TsyHL8cSSFYmHn3WX4kDFviuw4f7CW6CFSpTSZczBSf2dn3UFFfYgfbt7CmMHw8f21RTSGtvxwT5vcAvWNf14P2",
  "key8": "2vGDNLwEhMLWDQF6iZoxmNatNEQCuNpYMYETn2hxQJAYAiYrJr8VgSD8o9vtDUYy4Rh5hxtuF2f8uyqPmcXx3G8d",
  "key9": "8wLik4QN2deUBCQPUNk7hcvPHqA3YGu8sN5jr1RS9Sstzb6mZfjKdDjcAom21qzZFQvYQB8F6AT28BY7YmWQ12L",
  "key10": "XbCoNDrSWNXrvWte4s2bGymon875aNoq7wra4iwibNTs1P3QJs5DhPUE5vQh6FjhwZbqkvxVLmotrEcTY73q9M3",
  "key11": "5vDq69wrAF9gCiZdB4eUuajeU7LVZ4mLpDCPqsQoF4SERJa5U8b17Pn9cNP4131Qat3eALqGSvJ86UDv5G6Pv5qA",
  "key12": "4HA2sY8vdtDpFXZBP5ruGK2YwYBAu6UgZyhWz6Udjk9WciXbQFGV5Y3EYbZRbkEB567ufiKH8qoh6xj3rRL2pq5k",
  "key13": "2SrkpjWw53Z8YJHoKYNReq4GJupGwHenfudzTyin5CUoEu9364fR1mCupqGZDdVYiehuJVxab23jqQL3F5aNEw8Q",
  "key14": "4z7pzHnsP1WpuxjuaJhbhCvdHwUWzsBALmkaEWeL7knBPDC3SR65EhzduhVSB43cTpgt9kwQJdaCq6U43cHknijE",
  "key15": "4HcFwsZxdDB9Hy3xnehfu6jRmQcLCBx2szZs7D2tRFF2toarXkNnekryAYeEno4tghh9sYaYngNyHqaMx2egB3eC",
  "key16": "gpcV6CX9KKt7FJfej9d1U6G8bqu2GvjkYpL5mrAnQvtVz7zD9ocvqdeUKsKXKwtqCvLGA7wk2Y7yiXsZzCARLKd",
  "key17": "2ajYemQLcas2BCindki8UcuD1tiQRKQEhkpXi3eyEaqmaVTvdV93r5KBmB1x6aDdq4FThja6VFgRuaG5jmCm62YN",
  "key18": "QYaDW1woaKp8hddQFDAxexVmzLGzL5Phdaf13EH1EWZtHLiq58pwumVHBZtxW6KfmJqb8zScKS2oeHgmt8LHiEP",
  "key19": "kYT1FyhAYJf3hJ2xep5uqTYfG5utf1mSG3kuf2mJJ4ot1u4KaiZNsHPyt1VBSmpyoCY4GmP6YiLesEgRFDK7ibE",
  "key20": "5Rkx7B193FPUG7QCGKhbDg66Jy8qG8hC8DCo1h4uedW5jFT4tmWWCpV6LQdG4sDvgQBHxKm4sS4QF6UQA73tTHs2",
  "key21": "53UiZMt5tx1Z68SB1fwLhpqQvnrv1KHx6U2nLyihtB1cWynLa22tRKr9szG1nAX818Av2mmHBbHAivgxTK5ehDym",
  "key22": "5kPK8nLjQQ2Ho3nkuYxzHkAJiQhD98qYLbCPevTpMQN2UWony7of3P15evYfQkNJxqyjP1WW1tbaHc6AvW93CT38",
  "key23": "s53uWkhtMwEazjMQt75N4jfvvnK7a2V7NgDwVKqRa5i4FXcD5XRkRKWQUmti9AVyxXcaWE5EBomUeH5D639dGA8",
  "key24": "3ojgFVUgCmtV9AKPN6a54Ys8JUkzH24ikXet4AnWcLqe2GGx7uqssmTrg5K3ubfh2ZoXpnXy41XvKi8bqjvuHEDz",
  "key25": "4QktkACCHnDsRFL75Q3LqSuvFRHNeVVQaSWEtKeNBMGKTWrWTYunJgAUUSmvRGmpx5eKSFWUHs3rqvaYbwekFZBS",
  "key26": "2mRCcJY3bAnsDk1mfYFMC8r6b475JsDywMYcMmBo4FZZT43QCbAsUiw9KoxgymUvDbn5SvZEkyS8gpjQysCixKGd",
  "key27": "4Wk99npfwWmDhmiAtk7cWhzFFNshX4Z155EFTDicvBjiEjnpmz7Av8JPiK8aucdodd1SoJZ2Rk4k7eeqkP4eeVk3",
  "key28": "4qXFGmCXeFVf7eG8h2ERESqJLY2nfQ33etmWY4w51aD6DWJ4wCq9ZZya4N5wBdRUs4wFHHpbYmkJTDeb3MohKKsA",
  "key29": "5MWS5BdWT1aGgA1aZy8bcKMENY5YjHg6pJq2yxSacxabNxy2uha15UASFaKcepT3LD68n7SsEffpqjJH87LdBA4i",
  "key30": "2jD5h3zFsQfgiwb5qvb95LrLJsG7aLL8PbbK2mc5Gfh2f8gdr7sSTjtJ3W1gSQWL931DrZ2XZNgz6swXWQ9yAnoi",
  "key31": "2hzCe4aaEDzSHjdit2ZXjjT6ECGaPFYMF4b4TJePbmWAYuxjLHG5EKQyvSmbYcpkuAQgLF2CKh1xVPEQkopinwPb",
  "key32": "3z9PMiuQrznzuQuLFXD3aedndYETG1w6U5rNuh9EyHSvgJ9anW3xhajJJ2YouaNBzN7AxCr2CqL7EUW4YoZR8YVv",
  "key33": "5Xb27bLCKBFYmjdpgRfTUYwqUWHZQboRymu7ssFxo43LPVq4xFGjHq2gwgdmQkazsz1YnHYFkK9hQWD5EmMP2fvg",
  "key34": "46VTM2EcvpsRtQEkDzdvn429AFA3gpDnQQ3Sfhh5G2m3A8mNThhJKJwPzdrS2QL6nbdYCVddiX7pPkyJC3GZZ6rv",
  "key35": "rErvTdNrDWFpozJHjk9E4Buo9Q87SUT2AacLPgPoRRs9E2vAjpM5S6U4eJpy8HpGmrH8us587X2YRuQX8Wwr45a",
  "key36": "4K82Z2e9pWXwcBRWgEq2r6ZzSAV9YQACVKS6p872GfBsbub2dMFBb12M6hmzdW18V7LGAT9uYavLDiEB4TkYQ3Uo"
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
