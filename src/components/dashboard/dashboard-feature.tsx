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
    "2yTWT6oGzv9tnxq3sL9SSAz6rFGzs5A6PzpMe68rdAk8NftUx53Ek88RKuYC79XBgVDMhYurrYbyTffUR65q25c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wn6R5BC5kM4jLFr2DokHKZVw5EpsQT1A1WxS7fM4s9U2DV8QsZ2ysgjHFk171mQ1bwGXzEfuMbYUsCY1RCrAk6M",
  "key1": "53JxsHZc7Y4B3eZucMJWuBtVA5rDLAqsVPnjvrjLpPAXoGkKPNSzEtxy3WUDzXJkvi6Xon31SW4jNE3HuWT7UrUi",
  "key2": "Mc7xk9xu6UwFz4VEsqouv5MotvhM3kdUJyVVyT8uogAKxye9gX6x8ViFBvekTuzyV8iCmi1c5CJeCCnekBB8eEh",
  "key3": "1Av5ED2kpNnz9UPjg6KF2zNVvC3vkHFVhpd3iHhNYAoeCerBXawyndaZWaaGWmk93hyJX4Ms2fDgNXeJWjEYYkt",
  "key4": "4QuYUHnZbpUzPFmV5nrVRBmL7kR6rGkPhFejyyAK6zEFXP8AgA9TNr9vyrNvCYKaUYhdxuPpJtziQmt5ze23fzZA",
  "key5": "3gNrBGWdQdWsqQcHnGeEmzWQdve7LDc82t8tBFHEmn5vP3YsuP2igTJtP36LWdqDTQyqDvMNe8ijB3HAYuFmwoaJ",
  "key6": "pYYPhAqcE2e6YSWjUne4zzAJKxA73SXKWxQeHmjAdSFgUoST6pn847gwa7GPeLVQDgWcWeVfpbRZKAmsa6gcRYk",
  "key7": "51GGDHp3HKr4fYSfFTwVqj99y7YUTCMugHHnTGfhX77HQqwvxN7oU7zWr8GSr9XDYghGkKsrXbRCHHwnfdTnwqqt",
  "key8": "5maQ2QdmAhkCYoq4X3pKtT5UJqgweeSx3DzZghDBmSLWDFFfMW5WzPc2nqvanuxBN727kgFanQTFLMHu1xNXjTSK",
  "key9": "5znJS5Q8PvzA7Lk2DcRgckeQRkWJCZBanaQizYJoDDzb2oNGB1p9fERHgyru8GMs7g28n6GswKSQmZwWZzm6jCvA",
  "key10": "2Ti1bsJCBVp6XieyiwzZffEARTLx9FqmUG5oJcaYz2r7bCJk14LBFNNfN1ND1dNbqdv3f4RWWgrj9aNVvE5krcfU",
  "key11": "352oJt3PDfWammECsZFSY5y9GwsLmDF8g6t2gPoaTamQaSse1hpnRMQoNxt9FjCR9LTM1ZvtJwhqtmPQvzRveDre",
  "key12": "5XuP4y9erbsbUFZgbCF1ty4qN3CUz9yMbdTJio9oT6BR3YnnQwzYm2WXCQaxe4EYSCKeyPEY7yrcn2kMRgwd9FyL",
  "key13": "56aWFnaeSBKqg6HsfssuwQ7FWCqv1bukgCHm7Nzd8BWsD4zH2bFdcGBBgEFK3Vhm8sWgjQn8Uu2MLvq3KadndcmV",
  "key14": "4RG38V1sveXLABVAFUT7vRZoTobtGNRuJaHwcVyMqFzBdXiXrWV16pPcErd1GvxoA26kQWbDzGgHs5mZ8aHx75Wx",
  "key15": "4NP6677gxV6MVZDeFcCdewvkUqJXnAhCxusrm9c4yWFD4PWPo7HBNyipBqNerSxstFVrWdzAERUkkzdyiKnPZWrX",
  "key16": "2NZzcQN4bf6rHBJFrr3x8oXTMR1j5KGPioZxcj9H7rL2rs18SQZ16fn6Jzgxa6akQ1k9FkDhKtVedDQRdFo988QP",
  "key17": "4te25HgWbshtBAbBatB1ub8LR9RTBbpPhgLKayhJF2X8stveRFxuQ5jLTNvsiJE8HJ3MD27LgbTAtFUUvidLes5s",
  "key18": "47kRvdNzrGRbskxQwY9i1fjUBt61wLjKzGzV14U9yBLLhjE5QUY1osn8umKsLcVZX1CQJwi3VosqyhSgMLEFdj27",
  "key19": "3z1GnwBG7SCnvstkX8JzhEMAPF43NDAXa9cE4GEom4LnptDh2JpEXwBp3xCRWmAnvqeaVSkMKdPpmbzdnxeZ5Hr1",
  "key20": "EVeuKJHrwYWjHP8NWXs7bkYd7CHS9nyKw3GbGvQboeBEHjbovqPp3TqsLENYTZZGXvidru23SgM5WsnxHurLxRA",
  "key21": "3BjBgnFgPT6KngJHsK9t4fFiDonxsiUAUwZx6t1MVUmjKegLcgaGTWBiqwdPgrXA2xkspd2UTMW7wEMNXeN2cqSi",
  "key22": "3cbYNK6YgkrTBfQPKwzBkznrfNUtcr7MVESTBbCKP1pCwqwGFZgXiPZoktAZwtgy4Ji36yVHop41V4NdT8Dx4QTs",
  "key23": "2cybUvUAyb9JFKspJxiBcaqqJGWnrGt8w7cmDxwxD49cYGBUFadiazM6GGoSTcVAvuvGn2ibWj4SvmuqnRRPNtkr",
  "key24": "2RAD42ykCojMyRqTeFc7Pn4LwvA1kVGp6PprgxxEKFwFfV9wf7WydKNaYXdeS7vHKhT4tsnj7qPbj8o56X6mSAAJ",
  "key25": "dhUXQpzxfArKfwuAEqvZbGRK78oMFLzT5NctP8TfHaTEp87p4z6tQDLacD4wQc8k1UfmfAJn4WZpqdLyMXYerAa",
  "key26": "2aQSJLPtMN8NABCP9DHLMqKCj8KaXoag6SCQUgDdHzedD8KrD2xP4SGofFkUT8Mn8oh9rrZeth3pvAXQQBZmWxRn",
  "key27": "2341bCVPLKt6czDRDvPbVZVMpEYyUhBrUqYsik9JxKGrYR9SaYSNRYgxetsDu2HENCrdYkRr9aFPWAdmWjWE3r2e",
  "key28": "5FCuNJc9MyCX2KgMaEL6xnQBZTnAmwwN4f4hrtdzda3ef4XXzGYr8zD8dP8759DHHBdNr9ku4SSESqgjo29LTsr4",
  "key29": "37o5oTSX2RECuncfxacugC943cGyNQBAftiDn85asar1JcFaYYy3uxyenqXS4uQ7viMCJUWu2nGFZusVFiaJkNkG",
  "key30": "2ftFpLdwo4PHj4V5PMe8m1c6sJcwWgRLiQz64MMpkQdwESyLA43uwzqLWCT7DM6zate7wBfpodArtWAHAUXUZ8rs",
  "key31": "2SzUJYiYTktYSqHTHPsryqWzfERqbRXusAAfJBA2dmCSLiSAbBoAR2own5MvtZ9HB2DycWCXB2RbE4QgCeALU7ez",
  "key32": "4ZvYjEk16p4m1Jm5ziSha7GNuYyBz9TzeSSZXzKJzoGiuwYEvXZ6i2JD1qCy2PNwGDUSVSzAVFX8nJpgg7pfmT8e",
  "key33": "3gX8yD4ZtDcaYGtHKy3mzkEZdyzf8LSF8JeCCZT3vkCnidjYVeZPeY7gdCFCMtv1FUMLwf5aQ3pkCKynyCdRSpDC",
  "key34": "3W2NSW69M3SzTEAQ6SHUoscmszLv1gZzPBvfUAHXxTbV3het8QN16ubqBQ9559dCoHjTmZ28SFLKxmmQgbqB8sRd",
  "key35": "3CSH71qk23G5YFj6Qb8cUotstAVfhtQCxkHYoEhgF1tB3nx37c1LLZxdzJU6pcYPNCAGR2HJ6NFvLwQZMPm4U4a7",
  "key36": "4AhX1E6HGmZQ4dzKyugEMDpfrMtncowZGYCXtmtR1bxxqCFfcZuciPNt3xET7mS9v5xHpN87PKRNR52oHezfJzGQ",
  "key37": "45jacMuzNdks68RPHiTd9dM8bDPJc9EmLKqKtab7P4SmM9jB7HgMC4q7fEVeX24qcCdstrsW8WfUFQNmQb9iL4GE",
  "key38": "2TU5GYQ22HU5k3FzhbvfTrRV8H2beVr88hw2bvph6qjK2wQ367Ej2wQ6xuNnoymUFw5wiy9BxuredMwAMEnGBrbU",
  "key39": "5W1o8rdPpqzCCME4AdQSa8JoeNCRLaA3ZyLecvbVXkU6bMn89P5D3wVaNDTSzSS6M1v883tD6aCNXz2CZ22k8DgS",
  "key40": "3d6BdEcU9h9NgcdtcEmtrNx5gfGZzuLnjfbuRLXtrM2cFL6puCj1rhD1WjWrGAN7MzQLappnnPUipT2nPP9tnK6a",
  "key41": "38Wnpucg7Tn9DKghdQ3YMiUYRadfNF5BMkkNR5MN13t6BSVE4R59gVfSzoDRvx71fRxvQeWX88nPzUJxGn14pfFD",
  "key42": "HA9t5GGrV83zjMdQKwKRymDsNBFw4FYYDK5NpoQQGR3ciaPvEyazJQRKEKViYYdJmNJsD4Q1z7gSHzeDNrkDAEw",
  "key43": "5D43tt6GUUE4qUWz6P8ueeRgrQG4dR51jtt4M4eE3PSnQKQ9VTn1FMCTQJs4SMebCPMvYBTSWkDSwo7YYVoKSv3j",
  "key44": "4NuwDytq2SpaBxVPFxVXbu9Gtu9jLSQ83zBsXL3Y39iotaz9YRtYAVtwJzjVBAArWc4QrdcXr2N5WKA4qYPfBKbx",
  "key45": "nR7C4Pw9LpxKFtcgTNmVEckCrnWR7sedyzku9cf2bCq1H2Hdp6M7cJfGcJqUWqhWM1oZacCVp3QG4YFaf2B5VVh",
  "key46": "3RHHb8uu2hBAQa3LKvkj9hwG416GLqsSYvXs1KiHooLnXRuhNRazUm4tEJXEDdrYvct9pKB76Sbnbtk7Cg8jDc7Z"
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
