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
    "5vnuY1XxxPGJZhmR4Z4i6uwARwTjCaQvVPDQXiZGRc3tSPyLFHaKr4vfWkcYWsSFPwpBMZbepq3kFnKYN46LxNDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tqJ7Q3zo3p85gUhZHcYYF1GAqz3apEfsuvugEad4W4kX63qhRPtfqANTSYPyHnQq9wovkMPqCn4kftM8FpThFp",
  "key1": "42jaeL33XjK5zFqYRfeHRmx8AawqjGfJ1L2Z5E7Zi4A5FfXxZNhpKf4QshaNRWBKm7m9vsRpwEKwX9SKP3dqRRvm",
  "key2": "27d4nf9Dp51FxVkAm2EZpxZ5CbjewnyRebBHcAmANVbjjRdJTBsa8ogqDGtgYtCRRt9sZgVptEGeM7HZ2poTrTcY",
  "key3": "43bMrRuSYiVAQCPRMjhmZNXqGShHw2Lc8XPKYJ4CDEdaLBpPJb6vrr5GGkJ5eTAJZqDPogxw97ZiyHnyTu6XNRAC",
  "key4": "4EhJHB7HjWNcbzunjjRAkK5Aiu29HALtM4uuewVsL22yLin9vFMSivZ2pj3D33SfL8sNi8j8S7EQTLVQC4WSyRBo",
  "key5": "wB4hy3AWeRufqBn7huEdt9TiBZZdUQXSwPWaENHon69jGPb9SgHaoDBpENqzLfkEytYjruAwoPHnTK3rc9Gy5u3",
  "key6": "mjLScXxodoPmWz7s8juP93ptJGSYDQLHfBknW4b2RQnvqt8hJmMZCLUT61ipJyU1v3fLiqPp5frPmQAsWYboz9u",
  "key7": "3W81wxYpXEQzgYWmUDXYZJVGif9EEm8txPkze7SZefHo7UrHbC278rfyxto32oB24HxALtaR9ZTRnuMkBHh6JpxJ",
  "key8": "2bcL7yFgRy1vHMBapQT3LNvqZPFNM63EVRQJZ9UskEKozvAi9i6NNokfpPqrf3Rfj7JxLwZpT6Ji8WWeVsquAnhj",
  "key9": "7JDUuxwjX7d5i4j7Y9ScqWaxKWaYGvtNDiJ5SawUjYpKS96G9PoRZNkyei9w9FppLJx2pwo5VDWVNzvY2ZK31ZC",
  "key10": "2JK3mhAFfjaHHcKkVmQ2a3nmNsUwDTQXHDhoRfpWi6RR8pB7AFjTaP9fDMq5hmXLm5RPYyk8wTMJ7sHCgv69bp7P",
  "key11": "3m13EF3q9NrcjMz6QJaf7owonPWbpRt5ERU544M4oYycgNZsa2k1i1MQA8MPDdTwFZ1s7GYPvpgdG9n2cn8po1NC",
  "key12": "3kZ8HM8JwGmGUTtaZSjBqqoygp5eCB4msnb5WRGGjWTreJH92k8LutAy2wkUZdhcdYynuJzNcu9h3etXAVDWXD5z",
  "key13": "63t3QhXAMY5MCH9HmxdfUfbqaW9TS9V7UsA9s6q2ZnBg8ed1QmQT7eLC63c4JHkuecW3EStPHxqRTzoBAwwmqVm9",
  "key14": "34cRcy7gaHCMxMTtdDbrqrn9GaMLCDzqcio7JgJJobAsSwqVwisyLox28HU3DAwfhHuQzFwgzy1jmf5Xf7h77ZoW",
  "key15": "26SQFofsEJg3MSzfgCPasRGSp2KXs59aeLs8MNdCF6S5BAP7NL88ZhnPiMV6H63SZAfnyuafynGJzWTJ7pREEoTH",
  "key16": "3sCLEyidEg76MXQ5LkNDgx369hKvxPb2Jt1LbUrusgju9TrUZNffgfWTX7EmeagG7kePtd6sYTCPc4GgAJjcourm",
  "key17": "vXAJ8SgAqAKFfsMpTBkTmvNDoJTcRy4duSxFFQBbCHDdpgrq4NuRwqbvhyz4PKSpvJcuGY3vdVHaiMFNgu3FvMJ",
  "key18": "4JDVNoAF3hC3pHg8cxwDzdLrVNreqsMBbfSjchBjd5fp5vNX2jCjEV4hAGnY3T6TD4Vz1bxCJnAA4sW4aZGMfNvF",
  "key19": "4zkfSpqFpnNByiEnBfejV3JMUtPhvPVsgrcCzsZ9pn1AfSJ2KbcXkm6LynHs7rcYsfwbLe6eNpP3MAwBGTG8WVMp",
  "key20": "4RTr1ZfDZ7GW3tL7waqVids54Ur9nd3RGtnfeCVAq3cCeDr4ZMnYysEtYMKe8DfrCq3Zt6saNzguf3xs8Ch5viso",
  "key21": "3CppDuV7edHCTmtzFisM8TusJyn6AbETzxf3hDgkYECAAtFXKHewpVuJAV7NekHA4ekqPFMrzpVXNQLEbUJN9LHN",
  "key22": "58w2gh9SGF69HQTHF9DQrsMtynZzV5pQJBWsuQoiN6pF3hkffpRnxMQG3KrFmnZApj2186G49yJDxMXDcoT1H7RU",
  "key23": "56Gn2x97s5zCMSeR69ZpPkExMpf4EeCQKQ17HqBfwBsHC94pZ4oqAyDWZmMkjS2trXc8b6t9rTvkv28TzT4ceity",
  "key24": "41gw4nVv636UFbaArWZ8Z5cAiwyfP6mKtiHntLLk4Zkk9cgEQxyP4B5A6ppErnqtsZNLzjL4SCEnvm1KwXSR5CFY",
  "key25": "7wQVKBAswUJBNRZLZ54EJTTgfL369h8UZXu9rgswx9kXm758TASVjgQ9uGTAHMBRKvddJN6BEicaJgvD6jtDgAd",
  "key26": "62q5uccAGVE3AxroKMFMcvd9zk6KmfWeixTU2XjZYHUTXQeXJGvUKaBuYxsZN2HrSE9jnFvMzaH1ziYWUuxBgCso",
  "key27": "4PWzbP2r3NpozxQPhf549SyRhsEHiVqyj9smKG7wBGL7yYqSdVu3FZJcMc1J9PrRSqrJZwFkc3QhGGwKUufSv6Zh",
  "key28": "2KdvQ4HUGwtSsQpWkqAnpnfk5VtALCYAuZ6tYppELdo91D47P2NTWSBDg49RjNi7eD7ebJujZUyzQfookHYMUTJ2",
  "key29": "48u8s2GqBkg2GW6eYNXGF3LusWZXpBg6jARBVDh8pwYowCBeHYCfa3HvHpf3wNJ48uzubSCQ9D7PM7MBX5it3DYw",
  "key30": "6bZsE5nc6tf2bhfBCgw5MRCasRUxLe3mqMM69fTST6PeSgffYuCGNhCVJVfFHWt9KMDMsGGiL9ZhouyJpxgANsE",
  "key31": "4pgXLjGAtZmzbaAFNJ5NARKQdp7jK8JrFqp4d3W6zSG9ydbgMuvLru2ya3kwWuPv832qTbXtn2qmkYDYGUpNAZAi",
  "key32": "32bNf4Q8r65WEaRPftu3XnkEimnnDJxVP8u9biHgrYHUCZnw48gsTJv6LYFiCNqZpjVXpyXbZ8TzzsFiDpzmDvWm",
  "key33": "5Nzeg1nGrj4apeYBdfAYDtRwJFUP42RZEoXRj4UmBnjwrWsKESay2s9Pq93Wnmu5FadRt2izMQL27xc5hmdJtFNz",
  "key34": "3YJ4Coa6AqzjDtpgDKyeA74ZgY5ihvDzQr7w5WCnD6VQnu5g4N91V8q22BitkcWAE1WSM9Qukex2rhXRZHnPJ91a",
  "key35": "29cEFNbN8nAj7UV5JZqXzBok9JQCn7XbugLKR4Qiim2tz41TH6Sps2P7Ty1dinQfiWaNbg5P1Dp7erQsUqrxx1jt",
  "key36": "5GWdCtXRqLGw6cUYPZxiaUKmzh5xDwQX5eQ9fSo57CFxgELZAk9KfPndDDscNkgnx5a9DSBFzu5J7ZzGGy6PaTB",
  "key37": "5y8tZ7ez37dUNN2LT383JKaDk3n26gFtFJ9g6RaLkgSp7f3kt4NEtK2tEJjWM1ZG8XGGJtURzVJsTuYjbzSEYnY6",
  "key38": "2PepxKzsasgx56UymKJyJJFCDam9GcHVEh8waForWeUTV8Jh6Dc2kr6bwavKTmyCLHdvCPtUKP8P7LZc9rFsb9pa",
  "key39": "5XSArMrgWi47Fg32qANqNZbSRMrXdQTjoang2STiS5UL8sC17hBDcDyUnoVtQEQtacfKxiZojY8BFQwPeHRPbZBM",
  "key40": "3LAitf9haXYggPWUHksQGZ2erJSemXAi8oMqwDKtMATAwbQdNfciDCohf6sCmQ8WwnMMUwjTA2KHAVuDKCGhvJeE",
  "key41": "4Xt8MTLNtWKKw612CZWt3wm4NqMPAL4nG6VCFoTWLXYPE16xqqokkyTF9mKV4jvckCDKEH6uEUQwL9xw6po3b4Wm"
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
