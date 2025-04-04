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
    "3HFoAtmrHdye7raTi6ytrwkWdcpA4T6k5ZYPxvd7i9opVgQorcXmRdQSFKoxSif9bMwWokcVvGEefRypJS67zPhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQXvRWAfzbGUfFQcCReZAmQC6c4ST6RRkqWKj3N4VvoWkA5FUosSSCfJhVEDxpZsMGkV4ne3QeAa8n4pFuCgziU",
  "key1": "fdxpef1oUnV6NtoszSr571xgDFU4eT4p8rMvb2NNzxjw1sX469bWoEeHUuTx7VsB9QvLp6pxzJabDuJEHHqPjgX",
  "key2": "3PcXE2b26gLna5pE5B3LTmJnQRreBPdpt6fyTwQcqoX7fghpfLadcXV7FYcWnwa8JsTZdUj3LXu8K6rcxMuWUpjB",
  "key3": "3va223qQu72dgQUyp9tbouTVHrmQ533JBxJED6Ney3W7KPQVzrkWEwPQPw7vCMHL9Evp6iP386e6eAbXjUDKWTsi",
  "key4": "wy3vA3v6KuT7GDfux6VX12ACHx9iAPA8SgkZa3aHSdgpoGar69Ncdj8dNiWSW1fXtbvCzoZzbmtcAxhmj7PWt72",
  "key5": "L2uM1yP5oP8sU9ADgNAiw3PLcm6fuFo3dU4dcqfVse8pc9vzdsjTb5xwyNgZWRMVo9XD4ykhiTUxBaMEDrGykRk",
  "key6": "4BYF9RJBGsssVMvN621hsaXqpCLZLSMzXA9tQNHdD7EsXiaq8FpG6U47kXs2Nwhckuq8FWa1Npj9tKDZVdbY41mL",
  "key7": "ofVXkUYs7hEfAZZWrGf9JkpPMCWy1eg6XounzqRaTu4vBaprcgHCw6DeMMeQxirAoQHcJB2UEh7W6bNmQgSVSxK",
  "key8": "4a97SZJts6RgG8Fj6zChJVAgP8yQpJSYjB6WzuRyWm3pNdLUkBKmQFbHGiQzRJdWF2fTsHGQiDyemE6QBc2PerWu",
  "key9": "5KG1kNi94E6qryWkawf2TGMEGreZSnGc4Ect5xUgE9gnbYPwAQKH5SUH8CHuxGABaVexo4SCCtbmVEhZa7mEXFhi",
  "key10": "28ioF9rSTSxbNC9Gg21NenucXE3vQ8TcbQdaES48HvtUBwUoK1czDWb8wZtqJDeAZ71YBTHAVhWgse4UasdX1pTs",
  "key11": "ZngyozQp9KPY9oAepNeXVX7Rh8m7aXGLZLhruyaozV3zjkwNkne3KwrwvNKUm6RRaFZsHCdKc4VepXshs53QJVP",
  "key12": "4gWKeDiDeUz6Rt3AuJFCqmGizpyFGLBt4snR4MhX4DaCqY6ocB6nxrUs8EuMxDuBi6dQXnEhq5dea9Yjg23eJHpT",
  "key13": "2E4SNaQV7mc4dG67DTEB5VKTz1QgMMkey315KcD8MSBHASWC1jNRNXjzaTMXiRLXxKzVo6FnebLaC344hisUe35P",
  "key14": "4vYemdagjyW1j7ukNa3A7He34qTBPtGSSPZGoiJXXrwY7Kz3CmYAnmToUdWEpFWaeSM2Zos7TFfj9e44vaBpP2Kr",
  "key15": "ojf6XfBGZD7rAEiY9mmn68Cpk7CoQYZgXbtvYM79AG13DANRX1U3GzcCG1P6pAaqUovvZSxRcFwifNxdfiGVP3G",
  "key16": "5ARPHep6v5Zmyqa19EBJ4tvNCoD8L7e1QdtvjobQmT3pexM6KkrhkmbAXUcgr3cM8qkP2vcc8NujKzCrNJSAd9Jd",
  "key17": "2cSwEtXDy8gHPzV5JQBjJNcP2BNTTAkiWUztJNVBjTN4k3RyNUCeZ34pRejzAX2ocrUoDn8oc7ZSCv5hMe3MZKtr",
  "key18": "2kXhFTvPQaZhkWgCMkVRMY5zNxrSwUH9EaATmAiY5v17sARURcCc2F8f3MgZ8S3euLwsmcHCDA2teWudxLboBfED",
  "key19": "5AY35XLAtUkFxwvEBi1SKwQL8su2Z4oZThmgoYc8dLkGAGZS8NjMa16ofaStNep6qVD6FWKDNF4LRQ5gV6b9X6ok",
  "key20": "3DS5XsmA7PYYAMxVDauWzfBYMYY2gfX8A8nbBT2qaZk1gcx4HCyxnz9agH5KVQ8SJzo7ZV2rJrKBMbke8DuqHY28",
  "key21": "5uuEbsyVoAgN8wnXjJ135jbKjHnBR4k7UXumjkKM3wzautAVuD3bbxG2HDJmUSbULwWq6BFeE3PH9oToSdcbpvHf",
  "key22": "3BguNRyxqV4MrFp1au9KCNCAi7E9yoTjJGH9uDA5koHSdcX3zmTVRJToHJaavsqxwtEaBGUFVF7vyVPZvtr8VR2g",
  "key23": "44CfA9XiZvPkhEscE6aHPQAwRUALYFje2d93uDcGxktvGVUGsZMiQPdJQ2VvUBmYtMuavCWmMf4ztoG2PtwNphfX",
  "key24": "hHpkiF5Lub8onbQicvbKnKPxo3qS2QEFpwuP1hNpWbezRe36Ust4Fsy2BM6kVzat74dTk8XNCixMuZbwGWutNoH",
  "key25": "4cYWt7rae5Y6MDTWhYB4miuVpXfoyr9DrzP3eosbHe1qqH193LjYuT8c1NtA6d1C6YKKDXwPbjLpaRWiguF44kgH",
  "key26": "CnaBR5bqX5dBUkrs2wqt89sx864ozoaxQpfqQNr2M9UFEA6BVzZEaKjmF7UZAUMmGRy3iwrUyVms6BXr5BbJVq3",
  "key27": "64TkcLn99RozxLo5fEE2risbYNr5BxP3tHTX9mHTbteDy85RAL5nomq8bc9L5CnsMKt8s1feD8zk6sjJNmxr7Sbe",
  "key28": "4ig9Yv2kznbczX4MF4vm4XdbgELvbu6Hp1sva17iksG5bKYPdiiJkDWFqjnYMhgDHRi2AN8Zfy5TtiZA2GBPqARx",
  "key29": "2uf6woozRDZ8ZcgMvwQYEPjoSRh7hiR5YARhnSZRckCfmn3knM4GVbADdfXKqXWsJ1ioPxwQgtSNLzPVDVvc6fUf",
  "key30": "2BBXFqMxuV5xmKwLNxESBpAMV4QHmbVpmZVga4FkXspTZouNPXHXywx3pxr4usJ3MUz5vw1vFv3WsXFJ9epe4aEi",
  "key31": "5BTfJ4aq9wgemC5LxnZ6Ci8hVrDEj7zRfzkYDYtJWTBPLP7XLKpiiVVFvn6DLdktDmVd1wEfn2YfoapSPLcgTqS5",
  "key32": "39CGDc4C8iSdtngNdU2xtcL57s376PFPovYNjuc2Vfm9NWgourk2H6ncUkBTPvAUFHHFE1WJTgyjJoMDgyE3Yz9G",
  "key33": "2riZWZe2w8aR1f5DL7StzqA87KUDLDMVjuhniXNcux4VWv8r2mM6aJxzxR5ShWSxGBAkgkqUGYuAtKiqhT5pfQZW",
  "key34": "LiQTADi5ipWo87tr4h7CvVLq3KwpzdPk5Ua7momVErBDryHL9mhz8Fvc1cbCLGiQP2Kt2aPJsS5wv1u5QHZdMmz",
  "key35": "67q99MMFPJGySKxA2uHR2qpFh5yejQG4wsJDHpRYanXV3GGdrUr778Zg6dMiGAEDShC5aa8J4U1vukpTZNGDjYQs",
  "key36": "64wY7L5T5aqGfk5cpFLPoJ6c4oDpJqcPxUBzPwwWradg5GKsKkPPTqRLFGJtjFF3ViRxsFm5zK5hPBsaambYnUR3",
  "key37": "5mV2YFWdentuZHxcwTxmpRcJyJoW8SU7ePDVjeE2GkeUxVXS7g437ztcAEwj7Jb1VuviJ73cHXVQDBcTUFjSvisH",
  "key38": "2Y3BUhmzbMn68v3eHdBaFJn7PHw1TSmmvdYSJHja3cwMPCMfer3tZBQBLYCWkfHQy9dRZgb9X2FxRaUbFDxryBqc",
  "key39": "55GFKSiEf62w9cKruQ5gMK37dUCsyF9RkbebiEg8zRthzPoBjWUpfL7NHbeH21ecfsCJCiH1xHYh1XcGqmWVLyNG",
  "key40": "41ViR7cVAjfDxZE97uieXckDPvabbCf6QrCBaZqjmsKjCecUP39W1Pj5Dfo5aiE951SGpfArf3fBJEoNpysQDdRs"
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
