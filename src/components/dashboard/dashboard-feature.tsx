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
    "3eQXFiTGnr7uiNVGme1vrro5xKYKYYSaz67Qtw3MSoxWNVmmqSsouQSdeV3gnz15eouCUqTNH3MvSrVJSuFWEsft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7f9uA6Rx5HizBpM69k9fpDDLRfzamyp1LDjWtrdCSyrEtdueZWNUpAcxLmn5STAvVtZXgbCJKvKZ74uSsnyE8Y",
  "key1": "BabJKwLHwAxhJQSZHcDkHhs1gUXyc3zvvmHMBG1sBFnrSr4LciAFvYc8vQuwfzjZkbKMxepYoaTvYK1JGyJ5MfN",
  "key2": "3XgCiGqKT8B7W5hvqKYAGTTMGKKe1aQ8ALWK6f9P9HCemsyw3ke6tN9GgKvYTEtdgaHpXVeJz8HVRA3d86WLTojd",
  "key3": "3u3ec3DUEZgzK6tL6dQnNdHdcAfr8Gfe3LtzfHt8KFqfzjP8jFrEYxDELMyg1YgQ6yk9vxKjJkuN2SWjMELChzuk",
  "key4": "dc6qvP1ubdsKr1b3VrKngGyeUb2xAoqvM3bsKxMYyUfBayj44ABijrg5kuxgiNNffEbDuojx79hhqJMmw6x7DPM",
  "key5": "4cGRuS6682LF3GdCCbvxqJJx5baPr5crduESgXp1JEqeeAHw199MtUqr5WXFG49GhkVT92bxhYaxEiaYVKUGdmHz",
  "key6": "4my9jbsopaieNXwQf8PjMBFcEekEjM7aGCCzk6MN1SKknEsodAQuaWkWZyxH3ahg7MjpreXwTqRsYHBurG9YSqPT",
  "key7": "5uamoUe1p88bHUV5m2KvGuqMWcKWcaQHk4tKLfXSm6YdDK3bJmMgMMncgyugTpAVzwPTbUZd3xQ6L7r68mZ69WFe",
  "key8": "3jbGKRmgzwRVrvYJrbBxAvvwxSrXQ6aWFLVpMMLAF2xmgLaZhoTVSwb6d12oRNHVRA64pfhTgkEF5pJ4TxMDF2wi",
  "key9": "5dZW7KeBiQ3fQ8pvoh88XPaWLq7oqgN3e29b7ApdgkRc2cmwrN8wFA2cffenQ6kLFVcoSdXCbFrSsLqNkVriQUGE",
  "key10": "61UppLY5TuAe2wSRQ1M9DFW1aTcJ4CFH3HcrxkBKtuwagNXzFUyjPsBNW1Y2yEgjNyoo8RGPkfTFDwFcQYmCxt8m",
  "key11": "4uEDEdLF4JPWayThCfvjPuMNCAQRq9i1mEzojcrLZMMTx3mf2sJBS4ARmjjsPaVSYU6bQjwmrskUoaGddwoELTLh",
  "key12": "4kF5UubGHJ8KD7aPZWQnfZ2cKittTdWnDcrm4RM3cqn3vQpeYcKKUsfeGXCHvT8vpvbqv8DLGQeHKYaaBpDGc69f",
  "key13": "5GJMfFQMqqXnbXuRUruyEZzUkvoR1oK5ur6FsuqWJZeYEcVmKGBzqrjD5NbYGqJ1Ug7FZeMTB25XHCfaGbg3jhio",
  "key14": "5xc1Uk9ru37A4fxxbWt49BDt4xX9Z9LPyGJFsAtWtp19mJWZzd1FGtaLqMfjah6sFahxVTE2EtUs5bZdWMNTJU8G",
  "key15": "2gytk5azHRKW5NKRpJn9BShfaa5nHS6QLAVhYHjJXg7FQXEY9hQLw43aeop8GqpASxbH5VcBFGJrFJqP3gKxXhgy",
  "key16": "5fKe8mZnH4sevA2534KXyuhbu1KfzUPbTiEbdRxEqxAJ8DktXypaQLYGDt5v7tZ4Fj29V3Zg2c9JWt8ZsexRmwJm",
  "key17": "2Bf3bQjQfdxoQKfUqtHDDhfrWCrn9uFuaPFGpCotzXAjMELPWVjyvVkBZ9LEVWdTrqLzdVTCbDjN7JEeKwuJqo8t",
  "key18": "5nmRH5eWZfJ6BmCY4GK2VDNksrLT1RVNSGEV9XYJNjhi5ngcfki9jUeePXyYoZKVprsuzCmzL1rvvaNrzKwtnELZ",
  "key19": "Ea4fEgtYwN8yy2K8ax1GV6vgLBuhcfD5htKBdv5ExSCmZrKyUaN2K5iJiH1eqqRFP3pFRpCMcjJ9d8AvqGsD9ob",
  "key20": "2nmJuHjinhhiVbHZoWooaKuSbywurKzZJG6Hnit3P8f7b9z2tWYhUb2etxHGJ4zDzXtBB5QhZquiAYJLJ8wtSpj5",
  "key21": "4NGkR8MGYSpZRBzwueWEEY4wDCva28q4VNvkXiYFsKVduDK4wMBkYxKxKdohBsdgskNGFfkgxZnqbRpA4CfrTbRB",
  "key22": "2KSat1SJrhXLW59nTFPVTASY7VTdHj5BwJd8bbcYWqScy1bA26g4MhnhcnZZsHzoPNQFr9W1msRdUuTiqXDhfDBg",
  "key23": "4GGxX4JDDgcmLJ5TFAJMtc3RnLB1BjvqWKHe4yiELSWDV2jehjWAp5TxffGqStkhA7Gp9jh1xHSBMeL3tmhSwrU7",
  "key24": "2uQkE9SjgSrCpPbJGCDbfZQHVVSYdenJH6fdPdopVsWgrFDF7N9K6ZUUYbC3g5cF8WYsoUwmw251KtvBKhBYubDC",
  "key25": "3bZDKXr5Sd2xSBwFnkRZrYTE8C7ofZiFZ37VQTiPfaoHeZeEzB9NGQ7doKgaH4qWpmD9SrN5Ho8JPPDJB6n9vmTF",
  "key26": "5BUWwvRMUYLx4Ba78JhT766Np4C9Hwzh4WaN4KpQZ8JU6EtUoMxuXqCQEW74kDxUVUdkYGtcNzprAYrAYUyyay1V",
  "key27": "XHXowsoBovTFhWbgVjn4xicZmLZYtxFzyiNNNvnX31S4YKSs6X3dwHUzapU5SvboRokXVGPQtWrdv3baAYVzHn9",
  "key28": "3VKB57DUohfLQrRvGL7KiDC8gSaBoTt4LynhXVyfuMSKxdiqjHeLrANXVFdp4izgj4BVm1US95vuRemYhZNDtDDP",
  "key29": "4NJm2baFAFoGmhp1HpFg5YNrLvphg1qw2nxwASDHExmcPk3wCNqFuYqMQ9QiqhGz6eUw52C24nSvhzLnyXtXuj7X",
  "key30": "2vRbHXCuBWe2AxSWp44ey3UBLmMMrnXynBipXhBRZ5SP3BmUnYMEe3x1SKGyYotwFWATb51fXHUfakqs7XaFdwDE",
  "key31": "3RtzUyntjTm9kLeciPyGtXjnM4uPeiGwB8qDSisVyfno12H4My19NzsKRYv1g3ZNH6AzBUSqfZj5uYk7o6h9rzCb",
  "key32": "4Yt1XUxt3nCiboCccdjP2F6Pc4tiNFTvWriMVUNyCKRY5P2KuNxpcCb1FBRQ77BSV1fgyRG3KwhJ1mhQizLComHv",
  "key33": "JAYjsT6aZYnQUs6hN8ARhBs8ByLgzaX73LFX2fZHJZZErU7aX6Z7qhxHN6ZR7LE4JkTaM8ChT5tU3FQXmrBwZpn",
  "key34": "4rUWtgonjnGVWLFU7p7ugpmn79GSrfSfW9Sk6qAV5sJ8cvRKUwmDFxUiJ4vYEGGYShma9xdf7G1JsTmxPgf9H1U2",
  "key35": "62xEoqVczYjJF7VVTqph3MyxdBgQbYnizxUMdsJPaY9TXLTisfYgKQBwaeTNxJRpVgPLbmj4LVMh3UbYho6jUdAw",
  "key36": "X3zKZRghU48f7P8oxVhk9SSfmDNxVwENfu55xSC3quSQVBM8pJuLqMaiDrJTN5r5dAu3931URpU37wX95QSuuoq",
  "key37": "2TntHVGZm1eqCbqPNdsiVQHgm6fAeNJCKA2ecxswD2LkURRSvR99bNoRk5TyR518zL6VqJcE3pW39kpjQhPZvDEQ",
  "key38": "2nNNfj7W41QaMcp666FXBfuu1xTNVpJYF7QUmu9wrLJfT6YG8MiuL8RAhbBSNqU8RDcmM3rQU11NZAYtAi1UnjfR",
  "key39": "2iW3wxGSPzcfNnnfEQJCknWrit34QSnMLuDKiKdtRdgQNL2oJM39VvyXxHXiezdK4c8xsF1hKYnWMKrSfyGr2EEF",
  "key40": "2BR61jJjcbRWM6Xf6YuPTYPyk36uwgvSB2ctyokX7ucDYLT3Coe8tSNqjCcqa3bnWPdL6unftrHGuRfMHSG3JZmr",
  "key41": "Zc264BAhbPLvAoixDm6egKPiQ44DFTG3gkCqsiFLa5hJ8UsmvwpDBfdfvc1fmzHz7WwJRvQksSvXoRPMgEGgVaq",
  "key42": "63dxueumNXY9P8xTeEj1RBAc7She7Npxb8CgSLGVW5iir9HTKcePe3e3EXnp6GBZ3hJHtAAv8PdgrCqmUfZrNDZ1",
  "key43": "zFovFVsPPrUwS4NdZrsZ6cmiWBJzCRaorsJJxzvTCMuzQLA8BYaTAasXHF6ELBsEhW4vrQYDCfPAP2c2sx2Z7g9",
  "key44": "4feoMayoDJ7nucdezPsZzD5CFioah1ATMjfz6ysVBvqkFufR1G4aikLb7DY55J2wdznLgJ3FRWEQ3CPgpzHjYyBp",
  "key45": "5EZSjm7EDP2M9AaZE2Ejp4XsG2BaSSQUHG5CK2iowuNJYDbFGSRf9gZkmU7TAbaz9hURMrsSEKwoVKGzv4tkQWmU",
  "key46": "RK1cVGg2n9RT3r45uYAE366dgjy8SrjVU4AovUtwMho8MyrHuf89ZeBCQ3Xc7yNWUr8TzdGdmNj16VBBLWbjQiG",
  "key47": "543RUcMfx8GpQYaExqa99RLtPSuZWQRDWoRYW4f8YR6xAYxKzTKkW5U7a1EPzWTT9gTdpebA9uecCz4P7F6BQmk2",
  "key48": "64nL9esrVEJpFWyQFZKadWrYvUDoUyWJYSpZfJPKf3jXXJfj9Y6SXgZR6ot5K2DgNkmsVGveTST8z8hHcLYumkow"
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
