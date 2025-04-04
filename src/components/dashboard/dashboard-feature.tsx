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
    "3fpM7obhTRrJBtJnbqXuMsNVmaZX4b8y9TBH66z6Fc3B5DpUCdYhfXhRBQEE4fgDyEDKqxjaizYpFzpQUxDyAb6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5we1K2wCeF5btC7omWm3T2EQgtFdsskMHbPgFw4cEZCt1rC3MpcXW2jQ5h8Ras9S2giTaUXcsc3HqzJj3GnyTRfR",
  "key1": "2onyohW4XnpRid5Sfhk8eAys2USaLW4uHxj1mWX1e9Ywo99DnDNtz7skRoMNmDQe3hCdFTX1JYu2cozu7qaajXpE",
  "key2": "px7tcN1tsBsoG1j9uCbDumXdWfAm5MpNVH2sXNHJodTF57Q5KX3jaQZjnC77zxvyJW9oKpHyhtWiw7hxZtrs5xM",
  "key3": "a4WRKzynPMBFuK7g6zPxKGc9YUgdkPkW68MTnNrCkKr96zPxLSi5JF8vfYDkyCTk7L3KE4pchWdkx4no9fBQsHu",
  "key4": "UjESMSwCYr2RpKXGZcPiUjZeb3e1MfhM5KprK9kghcCA9m7r31RH5LMjTmLdQtYdGTLAVemG9V37NiPsQWejfLQ",
  "key5": "3RDqidSJQaVxBPxg2hTu6HvTGm7t4VC68kNhnzaCqKatctbqrpMocQd61nngCGT2VU3pYxrQ4yK4W8Yy9fzVGQrz",
  "key6": "4HtMv3vX6N2NPoUYz6hHfenSDht3gtirLcfAafCaGBCWiTFRs1sj7xsXSqux2qF3REr1sGDt66zqi1NoFrZUpkjE",
  "key7": "64za6RQLDoxDFL47888iypHyTTPNiAvx5NeCPJSeDqD4xqYUR9KT92ArdKZbWeh9KZx3dmYTsQuAzL5sbbeFNN6Q",
  "key8": "5q5pf1BnPJot4mzTChTWLdr8tyUiusSrChJRMN63wjr4FCErSAKbscE6r9n9iQrpfuprv6WB8Y6NJ9MDnjGwhi1L",
  "key9": "2keaiqYASJbWccQBrVqXV5U1bFszTPCHsbFzHRhVyPHupEU3VgdRLWDL2HVFew66yA8KZdoUDYhoBRcmPL2bpEKj",
  "key10": "5kVg2zstH1Sxq51UVf2fPShtgR5fjqugnAHDYV8Ygw8gGeHKjbbnh4YtxS6GYdqpVgr6vKWLJs4YWFw6M3hJF2oK",
  "key11": "bZHcBomryV9e8j1ckZFDiyM8JVCMoC6AWVL5LFAEZw6bW8PPoTAKwx2k6sF9JMvdVpuPjsmQq3sUiLrE2EpJLpp",
  "key12": "4vEATaqv4Ubdk81bmarXKVz3Aq9TNdQa8TNwvtU7e8f4nHYBswUvXB2R2ppS3cb7LkgivKV8nvmAjXkNC3sTepCb",
  "key13": "5W47uhV3eTv2HdUJz1wuwGBV1wA52t1fB8sJ4QS5Ee16P9XEZMRiZYXuZv41jQoGAE48vvBxMhZy9sWGkWvXfuRH",
  "key14": "N3B1uBF8b5fVZ2msxovSTsPWKKCmmndn5Yx5WRMAuNWwELAg2JgvTxocWYdJbKWVrxXYwfuUQYJLL1NpaBCtW7t",
  "key15": "5eu1DZvYtT9ZFiWUdRcrpzAHtFD3iPBf4nspkDuzP9stNfKPwkLN2KWAZ9CRjyVNUgdVe145AEiYqdG5TT8NwLbF",
  "key16": "4SLgiyt5Rz6Gu3PNCX4YXyJvhqoSvU6Hojcdp6rBXAwx6KBRg2wadQsAHorLpkbqNxht5fGCq21DJCB1FaRwTtLF",
  "key17": "49EgCdarpsjrtNC6QQtgNLtNVeQQDcp92rUu7JkwVVwSLdn438FWKMbF3KASYyxWxnLK5YCbYh2xAfYdhVnF4uLN",
  "key18": "2CJwaY9hfVrJoB1erENu35bQz2wFBxWasRqoN8r2oEZzALEdsL9bd9nb8tD3XxpVWHr9Ru9fTjmCiUcbBrpozw6v",
  "key19": "3CKzRQYQ7ER9kMs5t6xAEHorxXjquh37R72avk62xX1qkiwUcUib22C736GbY9YFVgWncbpQUFK5vcvXVsyV4Mxc",
  "key20": "6392hB8HZdcNK5SCTFgtrwc6bGDWkyzdHFcy8HnB1pHAJFkXKU4kbXaMfDvWdTWTzyomWTEPi1SKHmucasQQpczd",
  "key21": "4azF6zyHShBhqRarjiZLSa87c4cR8Dkm8AuPfk4HVh8CvQjfCfn6z2CWn4jDjrXQexAUmkPDiVrpJgcV8F1fdz36",
  "key22": "31xUbicmqdgyFkA8VKsfwEFNsioHNfghYW15NzT5qVyasd3ZYNGFanrQuaA66dJqsR1fPCJ3eY7eQSDLq2c4R4f",
  "key23": "2Am4QhQUsnPbT97T5SmnKmtP9Ffm6U9pVcnQhSWkkaSJNcDafdb8BXBNdUipw3SKmbrTzyZMDw1Qp7ELoEtepsMM",
  "key24": "4K1NzCRdZ5KPfrNrMg9GTCGEveBEsKQQRFBkMo4Gy6YtqSpSJ1xKG9newT8VetEUeGnQFpZfRwV6Re9tzMDEUtu9",
  "key25": "46swJbzk4jgCHev3dXSCsMm9GYWKR82fhM5nuzgqLchSY1VrQ713tfQRvKLeEnW7CyGuBGYx6VLkayxNRcuw6qCx",
  "key26": "5fUJF6eoeQFZDwtWR1hXtXzoSvbubdZoN9jWpQo6RVURLopePRatRa6hABKBWErbYQ63xFRihsSMPx45AehL7G6f",
  "key27": "3HoMnVJGV7gG5L8uCPL16B8EYqpthL2FfYT9aGHJGuqrrJkLip1SDa7586XEm4WY6UUs17siXrsY4fVyUjc8KjZs",
  "key28": "2Sh85cAM7PgR6nqQN7ez5TG9uBEP1hcsEZZLNuMvmVeY4DtpwLhLn4ceqHxRepvDhNykyZggs344XEVuJGKcyKjB",
  "key29": "4z77oqT8zATRo1Mykbx2zL4kS4YHJW46xM5r25eoYUnpNRhMvTnZLSL2yUEndewxksp7xuSrYXtvznHf7F6PZXsi",
  "key30": "4DLCrRDPNufyVYQtqaKZMC8JHfE9kTxW8p8tCmEDF8JHM6RJ93DBFontZ3txHTHc2JWcsXMzECE4ZaEDieCvNzah",
  "key31": "24ZMkyaUWTbndUigVU9bn8fhxy4bNyaRGNS7PYefZ9wN1UzGnEGQar89UhmyTWf6kV6fiPRgp4zgGpip5JJCtrJ8",
  "key32": "2rgxtHSjVfaAXeh7P7Qm6CaNBbvZdqmYjznHgi2BXpi59Z3LLQnBNGzQpgTuCqut7drGnEEziEeCcoWEm1kZ6s9E",
  "key33": "1kUkaQ9kdYU6yzync11fy9ArqqbhBNsfumNRukvRGFN1ePy2DmFBwvG1ooRaeP7EJW6KsXdFcseVS9U94F9LhLF",
  "key34": "4jDkArRtgSGkYSxQM9YT8dWkf3c3J9uXgWbUF1msiEkmSFvPS4DtrSMpRwW7znnVmPvR6hGfknNyekphqp33TdLa",
  "key35": "2oA7c2hLn15nxV9XXrGthgAwW8YAdc4eLUTTjTccKGprGSzJpGHx7WPp4UKrWjy8osLJKDTXofvAKQ51DiXLQPkg",
  "key36": "2ozN3BSQZ3GZneFsGHKo4Fr2f19wxHKpzxKA5NwZuiVnE9tyaCCVb48Xkhpvd4jX9zgrKWT8enoa1FZXpxxBsfQX",
  "key37": "39vz9nWPRtNCY5R3nxzUt9pfRfqwikSCEomgh45mrLWtyXtj1aowCnTQz7VTPV6XEfEXJXv8gGtEdSCut6my6tSn"
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
