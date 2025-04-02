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
    "4hJsm5bUq8xbDXiN8zHwEe3XQtt8KJFJZJEHdK9iUkWoSWyvrGhBg1zvDPBZBXHBzpFQtQndr1okFmzuge556yQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28kNJKmuP5TzKEEsebABjaKbp3UQEVVijpN2acZYesoBKcq9DgTeis1KKkSaDidkkrnwiFaqhiwBYGEUsWNepVVm",
  "key1": "4neaCjP1RJN9D9saJzovWXbL7c1xh21r3Jaqoqf4EJnE5crcjJ2Kh4D8uepTLSB3M7hRrxyE899qrTcxkKB8T4Nj",
  "key2": "4G2tb4WJ3Q3mCbzPcsvMFrGCuiTBrjhYct5rWqXjbCk8BA57PrGDkikgRmh2zQRsx8B8Fq1gFauEhffM7MjEkBge",
  "key3": "2kSMoMQv6QqaMfXVMLydzQSKcDUvAWvWVVp77VECvUuwWiVdPbhgwae8dQoumWay2oWWSxCVamfKN6SidqzT2dtA",
  "key4": "2yvXHgHqtQfxraf33jcQgaD1TrgLWNi5nrk6nRcB5PYGBzUZ8w4UFJvaPBGjaDEyoWYd5sLyrEriRmxCiLxPGNmW",
  "key5": "3xytSn2BF8qgAf3izo5kfQMJr1DsYHebKgfbyKf2jsWgZDQcorUWAwBsftaLQrdJVYDCCRJNShRHFdMkXHVLGTS3",
  "key6": "4kNywcvcepGTtTN8GgCuqmXiQKCVobjgTNMwPYpUdjosLC6JZyoh9K6KMkZBrcpGYfZfS6U2uvXNNFJS5eGS6Env",
  "key7": "4jMa9pFxBCPKbPMCJddCyvpGmhxYGwzud47per5D2Mxx5nUsW7UUNQmGnQzFPWBNJDApXefu8DuiscR1E4jwZKVZ",
  "key8": "66RPTXSmdupdWLpUsoHxDtQiqrpURJ1zkV1x4ZazQHhSFwug9Q1KRHD4yXkHSRadqDPgDWSMAZAc2FoeNseQU922",
  "key9": "2YfCiboA6pN1TUGMjuoh6i1RmJH34ehhun4rkx217pjyGCEiLWT5k3sVLfnv5TnxMgdxpunchYdfxamtAcPRLiBW",
  "key10": "3CMTfxca36Rv2N5Rf1qioFdFKMifBd78zeLGBFQETQFMpzQy2xqCqp4gYYZoTf7AsRLFvAdPue9ccYDL29yJa7eV",
  "key11": "ZZTRVEAmjfPz3EKNp2JYkTvk5uWSRxr2Dpc3r8zCeFUBsoMcywhaz6i7fpxE8diE7ATYNAk94hA3PJhgFPYowXd",
  "key12": "5kLMrRFscT9AkGJvYbavuDorSNxVBjZyGwad7ND7Q4xF4QQidrSj4owM5SbwvGunDREopBywUe8bRMwUfc3i9TBr",
  "key13": "oZ95kBm8rcYBScjUeeuyJqDmswW7cgAgabRbn8P65Cuq3CpxfaiVxeot1LFmccYMHnxVZHSoWUr8jSSJ6RmwATy",
  "key14": "22irgMhs2TC66nhBuGDgpiatEQYiAcTwdqerKy6o9LRYi9h8yE1nQkGWYpcYMxZZnFpyVyU8ca5u7GxHwzHnmkoH",
  "key15": "2621akyPiaNokmdtRT1kQQKsPyXq8RtD3ohqbfWbLQgy5HAL4NuMRPkwjnTN2z7HbQ9mao59J456bCcYzZFmPf71",
  "key16": "iBoBB8sDmFdPiLptqEqYrS5wXw3k4Ph8aKmrKX7ViQkR1fjTZCpiEEcKDtFrxLPwbvE1QT6qW7JFhnTghhGx7Mj",
  "key17": "kRatoGyW1pbhC9xomggSfX9JE8yxfbLrWnk2PHHkDFGintaZHUgzzXkdbSit5NhqDw4snV3FaUpYpPpeWucSR8y",
  "key18": "C1v92Vhj2MezQYyEExS5kEBLDMsEAP1yCEu6M2XE2pvqkEa57JKSoeMGj7q59qhSgxHk9gLwnSE9dZCcWDiy6gE",
  "key19": "4GKN6YDXLNsnaXkyGuvGh5aRUQpvskvb7Mgq6ssWAdkACibt6W7t8CZRQKLbfcSkNaq9hrEpZrY95Fp1xgAR5z8X",
  "key20": "5SqYSKvZWS7WYMqEqYGjT9DrsHoem2yjtiScXBrzh6B7f1xAcrLxiwao5xvm1GqZxKpXjEB35b5hjGMQxCpRChsx",
  "key21": "337srNopLEL6gSdt49u3PVqLTGH6ZVf4Fdft9cK56Z3PUrQog7kE3JPn6hbYRNWvTG21mt1LqmpMoAXSnKbJCURU",
  "key22": "8HN6XU1TKt6uPAUqZshw1zRu2bJU9AeVVbybskDTxcmw36nfvTM6MJfoqGKZe4BkHjPTurjP9DZwN3w31p386LC",
  "key23": "3LDdq4TvZ2pm2P4GJtabAKTHSEGRXDmnGVefXC1bGXFK3GVswvyKT2A7oYf51z2fYTEnVRM5YvtVkaaQShfU8GPm",
  "key24": "4VtNJ1ZXgckv2XEqGSdV5bWVvoBZsaSjKcgrAicHr4RwYQtDs3s6sEhtgqSqvh6tmgBdAhgZhSNpACwmbAZBDtPF",
  "key25": "P5hNmUeVvDdLRdQ55A483xbyFPB1V2X1SqMQpXcvwPFiFPXXnTAKcFDkYm1ahL1QCNhvW7bkZzEmqYqhmpiEsUh",
  "key26": "5JXtrRYrTWxxTKCBbVXdPbNQiG4NERK4kdRzwscnnZStERC9X8VWHib9znKiDR3WBt3ioiNyh41mVrcyixP1k8pf",
  "key27": "37JTifjKe44uzLXvpcnxjDxuwXnSxPwYAra7o5u2asbszn6LgaSatQdRWVdBC9rs6PVVpZsmcAVFE8pkiyGc2mk7",
  "key28": "43meVUBS7H6RiTDq8uJ5QNTuK5ois1uXw3wyrxHPe9hiyGyCu1cFvzz53AeWGtFhqCys1UhJdUn4vMLYUf942avW",
  "key29": "hj1VQqHUzmfUH85u8JZqmx5WSTzjceJpGQmf82oQcTg3XB3QJvUZjnBixFfAa4YvRuYrB5CsycAk5acHrXzxC7q",
  "key30": "48SD3FV8NR7jGdJctR7DMkAUicrfbBh9pQwMoFZcSyY5XoyFYdS57GbSbjNrs7iCCYj9SpkbDSrwoqHpQb8q5N3L",
  "key31": "Sf3ZQtgkzXa9grDPZpxopFVMUWnzetKLvM9YusTnu1t3CmyG3nLFmw28GBHRqYR5rEYS1DUYbB4XTPYvRCdMezv",
  "key32": "5KAefnHsNfMrrQpp4ubFvDZb3EM34PtJTg2CGoC9fgUXteqmdbjDisboJ6WrXHbW9gMXE8JDp58ZVdvG8xRMw2Me",
  "key33": "5btuBSxLsoAtRDKAsYwBy8XMTUaTCY1ov4uHyK5qZd36cWoDj3Rp77pWXUFMdMcP9fXpHJ7XULwAkYcKvWgfQDmE",
  "key34": "58SnDnebXf2SDZD3hgF4Q8fzCpsKY3VfF9C4NhcLrSncGSMEwaZ3nuShEwpjJLL27dHyHNxPqf7Ff4TSQF7ckPvg",
  "key35": "4nFfNa7it9k8FrSDhz9BXKumuXj7fQxDPsrbwGLw2HurJH4y3Lo5hhZnWVgyzRGgWsjZzSoVeb2SDoT5K3mKEeds",
  "key36": "3ofCHEyYDZbVD31YWtq7uJiecnA5BQPTf9upmFrHmmRKeoFTLwMX5NTia8npsGeM1mZV7Md9qrQtwiy7w915EdDa",
  "key37": "49zsgnKbw1N1TW2pH7vdQSX4wZEpAN6nx3kQGzJuF3UyRtSY8WGe31BvLeGRB82JGyxox3b8tQ9w8FShNtqAdHt",
  "key38": "37wmU51WCHrNEqj6U3rJXTo3447fvaH5QmJQNupwqhoHJn2QK45DN7PWWsohuhWd2rs1uVAeAnk5asVHBHw8TAno",
  "key39": "2YWv5W5ZQZBwp3u6B3Hjrwb3dXiAmSxoeGeaf6i6h5wRHFJcQoiufQn8cs15fH8JwyP6t9gkHqTrPmTZhec9L3P9",
  "key40": "3WfnLH8qECHtXNCnmTe5tURWy1vguewLksGEMWgvzLXzAMn93w6DQRkiJUWykkcxmwpwsAkWaohEpXhvKbrSRNWk",
  "key41": "4gX29btJKgyENCmjDjgtkW8mf27P5D96GgWTTjgkKCbqmdBFiZwLh3bpdLJVXDWnYcErHtZ4X7HVGQCAF6cnvsKG",
  "key42": "ttH9TAmCWEc13TvDMXggantfLMo8CLpNydcaCvvbK1kxFLgj8r2VU42r23fXrTUYwe4fsr9Yh6tk1mmQMDWEFHQ",
  "key43": "raSiPKtJW7AUWULu84W4CGRY8wb4zemL8X9EjwdttXxKMA7hcUUjhRc38aKgHPE38pYXxUWqcw2CTMfAGXxDaLv",
  "key44": "4Vk8ZKMfrdeo2L18zZ422FRmDuHpJEP6sQtoit2LMYBDhDNUrWnBdcea2WLGiyZ1mUkoxCpeUSop7dEh6rnFAjL",
  "key45": "AApjx2BkN3PoDgerKvLTxyyFPPx7F2jo8DhwSQCyMKMd3DNdf7ci74C2BFUoZW9kZvr9RAudMyDNWt1w2jbBM9E",
  "key46": "58DFRxpqwPrgcEeg9wCTyhNhJLPbnXVPyz3mTtdzgq2GG7ChibtkoCzPaHPfVJiq1VxHd7bRzNBpoQnfN3ydhPgq",
  "key47": "2vCCdoPVD11T6TF2N2URQn13uh8kUA21UTDRTXMKx3rNj4yPLHnS4vp8u7K298MiBzxjoxF8v1VdLFjzDGBXUkDT"
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
