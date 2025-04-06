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
    "5PzuoYXyQ3bEV5NVSbFyF6djUEyjdV6YKEvJNNhDQHY2mJnVuYvE83kozzdT2985crYWScGGW4hrHjgasoUUzGeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qi2enzJA8cRDdRu2wnGfKcvAGkTLLLDhMzFZ7Rq3H2jb1jScvk27HmjkpNxqucoVAzxsjRrxE7yApfh7rgZ5e3E",
  "key1": "3csqzn4FfrjYGGvDyFTF3yZZUaD5NbfcvzmVbPvdcz7tZg4wtPWdEcyjGNESk4zhcb69UntYpkUnrvSyao7b3Bq1",
  "key2": "DwQ9VoGGptBExW5mPzhLtnpd8tUiwtTFX1SFcwcBiXjHuVTyodRTjX2RHqupg4rjU54ukZpHHqwaKhKHRAtXYsm",
  "key3": "4MqMwdw7rYaWqp2zwuAxAQvoJ41MPxFJDe1xh22xRWe13qu2Xa7kzkr7UzD6JRVujJJ9SbCfWCJfRL5m9bF5TtHJ",
  "key4": "2T5UBadS5XxPZWMTr4ofEaaeGRonNCwvzum3GCe1hD9RUXABn3sSqQKipVnfUta3zmVNNDqx1HXnMLgbrrGQ4EPt",
  "key5": "5Xbj9BvMmm5PZfRi9oPcu3ZhnjbGuYdU9yP9mpizbS3y6kQ7Th46RsGhVScreZ5gFeUs33HiRnAe9ht2tQC93SQQ",
  "key6": "2obCgf81D3ixKxKkW6StEA6GzNpRn5tYdwTWA7FQ2MEsmAdZghnHQQfdG8oLckwkhrA2ooxKeg2PaZSsWCuwpskm",
  "key7": "FrxudXe28PCKrnQfh3BSXqUFi4qW8oMz5YRgzp6Y7V4JUCXy2YWo5JUmv1TYkDptD5wegTpB8pGfczX39u94Wk3",
  "key8": "5KsETX2xphxycibHBfUW8FZA69iCxGUGn6K1LqTNDe9iWGpYMSSuBz7TbgSbKfaQU2Hph9ia7SG8p6sbShm1cX2y",
  "key9": "5d8yv1rkH6vq27MQfaQ31RyL1VDm3yCJFU49BRGj6gciLCvzCabEiqKYSRw99ytiQRxfKRCSj2LXZEMiLVcoWBhd",
  "key10": "G7KWq8ppPBYyEUeFWC6DtigYzXwJB7jJx7PEzvv4zz1XrFQZpe4U9cZUf8kP4Wkhs4U2GhbZJYKVsyop1qdmq1d",
  "key11": "HsHs1K6soupb333Lt4zwpwtxKhuZ7AfUVErrtxQEWtWEhiLNwxyraDhAVL3mtw3WigpbkwrP93QWau1cTYytbm6",
  "key12": "2i2cdAy5vUbeTrRRksVi3aofukHhfdd97vEVyXMqJS6YjNspjQtBaaydf8qeHKTSs4Jd5R4xu1ydx3DbkXqhPAZ",
  "key13": "4sB8AZEkDGTEbWBvVUx5PHGCdHgmVJfbQ1R5HrYfrj2yukjvhNoyDgQnkdHF7FEP9qDo37cYEbuWmXV6PxZGJGcy",
  "key14": "4U79uVbMuqLbb9zkFverhtExWZ8DjD8kT3haB72B4mpHgfQhfTcccmv2rXRUaSmqzaXxE3bxxYLXgdypPskknASA",
  "key15": "ouZ57FGxFPA6hG1G4SmFEFhd3VMCWP9WBFSvP3MkJHTUgqWJsdRqesPaQronFSfYmxhX3WHP9TZJe8Pxgr6bRZE",
  "key16": "4ofMNrRu9jWsLmnfS4V9w1HntKYK2J1QckvHdNDTaswQ8cxYNBEVuSBAqL1nVxYxd8S2y4WPhcFBqotaJ1h3FFGZ",
  "key17": "4wFXZThynypiXsApGumLXRqYudMfohQEw3jppzpMMf7eNe4DzVYxu96bgtddCVUQfkfDugsyteMxMUHxx92gLgLF",
  "key18": "3JkJXTmhTH5exLXw48KPosrcrNsVYdEGm6JXWWciQkHnJKrUUQanfmRm33SKsuLeysDLK6QYGvTWvVdrYTYcgugg",
  "key19": "2vzNFG3SwTWYkH1ouaaBmt6hvVceNcDdZzEg7jM4aBwG9FDMJGhXPbUFjCXd9SbbevarvLnDj181H3CTWfod9b7y",
  "key20": "589k6HitkUcnPX6JxP7Uh4GJJCaPt1S7p5vqbSJUjNj1px1inSACrCpKqG4wRicPurHz1D1v9owvSaQrEKSdo1j7",
  "key21": "CFpztgFRomV2jv3n4fX96DUJVrDvecjHxkQMqcZ9zHsycCFWavCtJjJ1BD28AtQaTMT5bKC5C9xaC3Xycm8WTsr",
  "key22": "4Lh4SmAjPbK6Ky5Asr8TqdCGhewqBKVAksLqszAKQTsQU7WRzeZy1NGMw9hz6usVr1sG9NUGS1AP7PWuTbgcYBQp",
  "key23": "43N5p7MZ2AaJYnwAgyjGg63VJfYKufFJAoZHfgTVduFcTzKbk4KTCKATaL2QTgBLwtWhMyxuMVndXdN7Gqkzh525",
  "key24": "xvgCPdiuVBq2iMcFPHf5v9XDREyi5XnuBMtZ2ZEqN4iFP6A9MVpTc7MhnpDuoChN55gy8aESfWG7J7CRx8Ri5WA",
  "key25": "UqPdvAEsZPetRRS9LyExeVEeCLFzcFkPc6Xfcubd3YyLAz1YviJuuYBmGgupCSAfx2QW3JJjDkrcaXT9uMU3Q3V",
  "key26": "65ooTfyHsxViFKFxGEVraBN4g4JtnEAJDU71TKtxrSgz68nM7VeG7SV9QJ5egqZvJBe28bakkMxtiKodQhTLNV2",
  "key27": "48ZukwvULCmksHuZpfez9zpz1g6HDJ8HVnshkvPx5dtcW9NTrxunWM4vTsL7tapX7v2jjZcE3M3c2PPC3Pr9861k",
  "key28": "5nRJ36yFUv2Z8vPxrQYBi62mEF3AfkiYst7mkbn2ik2TgJ6jMMc3oWDWNLaRLBAPzTGRnx6TKdrXrKLjydHu4XEw",
  "key29": "39iKvAm5TrACBhEMb9fFdkXbJbn34iYTqh3S7Mcfdzihd532snEH5vMLbwcPEuqDCEPkRe9pnXzpxdfC5FLgnFUX",
  "key30": "3NnN7hGvHpTa86KAjWPMWD1hoTCXoxpVA4gc2JW5HfQJvoHRhCj8ikyH3Jsv6k6YpdufXyLVsLRvU5a4AxXp53mv",
  "key31": "4Wam8G9ZMoZmSJwBNLZm5nToCFBnKVr1UQPBjaikqgiJ6fYagbfymDpWE8wYokkVWTPkatx7wtVAbpyLNXqfaUfD",
  "key32": "xoNvwLbGYb6W63bf62kD9pJWoS2uDhQ3hYT9Qa2bfDUAzTnanzvCtMy5SJLDg9AsZMgvjQg3QLfdTf6D6NV1yFR",
  "key33": "28mSUh2Tb8DyVqotvKry7raNHWxU63gNd4LxgYAQ4ee3jWZsSFTpW8hd74Tmha2pjh5M291FYybjWNjidS686viZ",
  "key34": "4yDUVyas1EPqXtGki5CRF9G5K4YW1RJhcSEgigT96fEsCr5YD51tfmL9t8NaDTHWcymkvv1DBYoBsKLXWLxmFe1H",
  "key35": "5xJVrx3aV5NX1iDxsgC7Y92ZwgUxJTApakXCPM96h3S6ZWZzyewcM1FrrZQoPhUpEpwLrsAzzhGmoWMBMZTFMamu",
  "key36": "42GRN7hjTK27LDRHyAZMqxK3WwkbMKiJWevavpwykSh9QMQ5D2FuRN5HaG16rgpSB6pdkxpiavVyiZxygv1ARLQv",
  "key37": "3LbDoFiP6KizUEfqZfefHT3A7eCpNx2fbg8jn4vq8keKrTGMjAEGcYULmCBDRXShME1uEDMrkQ674zD1F8QTeScy",
  "key38": "5PmPAyKf3GAu7112zW4Dt3etyp1ug4hNMcDGpsuQ6PsfctD5nennEQt6y7X76o9N5f1A9rH4XQCgsenqniMDDJvi",
  "key39": "2WQGqoJ2uUg5RWmvFTuFzJb3Ust3pY9hpYSbgzDJJ6PcG38VLcuSfKPbaPCFtqQsubSYwBDJBFvsaqyiUkviwCrR"
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
