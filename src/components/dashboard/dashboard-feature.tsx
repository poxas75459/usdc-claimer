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
    "2fgzRybgmMctWEZVFgP4JhfNdqkzr8m1Dy6PkCjgGbhH3uADgPsCuquWLUr3UwLepZkLGcBMnwHpePRm3pcptW36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BAngh4tEzycyTzz9TZN8nf6Unbrudm9HqngwtdxAgGuMHobDFRLw1Zb3km53fHfobf4BPJHKBMQj5M4gJW9konT",
  "key1": "5eTc6HntJCgvHxvD1B7WvDkPYJgnqqCGxPchkf6xxyF84QyWZ2J3BX3Zhhu93qJrStTgAaSHdZGQfe2CD8acYurW",
  "key2": "5AncdiYG5i5DxrKqKVQGzTPPdn5KCPBcAac2L69Sow7DnydFpALcs391iQhMGiGDPYcnpnFZzcHTQoyvrEWLFXHb",
  "key3": "3t6rZNAepEYS2CH3kyzsnHQtSHV5JyVKTJDfqiNPNtjyARQ5Z6JDD5AX12xBPFUjgCQhRJC8Wi1f3Ut6mJqdpZZU",
  "key4": "4DCRS5f3MCi8dmrcKMjWH5o4i5r3ZdgvubA4iA4Z8sqPCCrhWAXbfGcUrUUswzHzJLTHdvADiMLCYoQYPBAggCAT",
  "key5": "4kEaTZEYWuYp6bDLkXdkgKspuVdqV6TeeKZ4QVwRsTWrfg5xGPiPVofmvymvkRNZjuTSRDkAXaZ52WhcS8i3LfZP",
  "key6": "4NyQvnu7aJ8EEiDttJSGzdyVZr7hGbRo51VWbnEAqnfSMruRgH2nkTyZkRn5dVrWisGoDMrGaxrhFnxzZU8CZxW3",
  "key7": "5Z86KDyGmNF8pPng73fN8EMHKYqbhSk6Hr2auyLsRoJxXX5udJvAQWH5HgHFAVVo6hCqAMRrJp5NsBBFn9wLXK3G",
  "key8": "yK97msEBgN6VW3trjFrtg589gehV5bAyzwhJjxGJvZtB5DCczqX9JJddN1TpasFtb8eGDPtQ8UvBqT28yh4TFDz",
  "key9": "4SDPAhyoFAhDEQu526PGUkGVyvZX6iTT44tKoLLWLNkz7PKZhwjnq2uZYrfa4C7KpVay9LEnveDFb9FrRnZMrrSX",
  "key10": "4rGyuKGrPETb9JvgoGkcwpiXdwHR3PbJxxGE1LKgdXJ4YtXHEcgskC5VhJJdXVp9quFqYXnT1Mpi7zyGqtmRxdQz",
  "key11": "3a2asetCSJxAJMnfxCKcZPKUoyxVFsPxfKUeKvJu8FkNL6iJxruVEsV4ctvziYSpNgAhKQZ3mefjZ3584zxatsyr",
  "key12": "5N2CW7e9jsFNAqKDTuVaBXXgX7LHM7FinXsUP8XUfREZZHHQqWKq7wziBCS9c3CqxGYKMXdvzQ5UtNQE7j31cE8x",
  "key13": "4oXN2Fb72eWXDnYetZVfRA9TvZmbSztwqeMFyNUEQQ3WnjQENnoJf3uTudss9WyFeWthtjcvtx2aDMnqPReafWSk",
  "key14": "VDM6aYuTtBBvDcot5dkTHv1LnWBH2pA9j1aqq6tcC1NH33V6rtJRP3z7rwzvQEx7T1EkLuqPD1SiR2XcV2oDR7L",
  "key15": "5RmcKVYy5No5ZXunpWDVxaMqpuSAD1C73SUJtLGFFQWBgJBz9XH5kkAkwycckTv2KHDv5Bitj8tEE4256cUHFEot",
  "key16": "5J7Gkk4mZPwRfAwfAdsoQMWxJ5C4i97G4i4zWn33kt2VQpsFEkgiThaYSc4kjNgkKyRe8P4oqbS1YNsBHRvFD7CM",
  "key17": "4EPAx82Thyw12GsqMJqY4kArxdHPfbRv3wTYviJz3ye7EoWT8U2ZppXcCYoadbSfd1U3utKPXj3VqJNL5x4hiAwB",
  "key18": "2dvJgpCT1GDDUGxL5TEX4WdKLaM5GicCkqX7FdKfBksR875SmVEhvf8soNvJ6jArsF2HWBmEf9CGJ6mGDbFFUknv",
  "key19": "3NPH2mjai2VdNS7V5RnrUTrvX3dLGo9UZJX1aUHQ4SKi3nHWCJQasH2krEzMCfNh7rvMaT6jfGisofspdiT7V2k1",
  "key20": "5aYsUUDnQqVJYTndqUUzF3HCapsjRiFP5aiPfP7dFhoA8zX6kXnfqQN6hvi7tcXYPJtMpSTweomXhDqFboechyJX",
  "key21": "5Bq4HDz98D6hoLQrj3vQUSyxAxcpjmyteTHrYS7FcYkVde7ytfj6r5KJTXMS24eepMz98RTx65i6zwncyz4jL4Cz",
  "key22": "3c8w5C5KSt5AREf8UZBLSksWXJguCYwc8xS7Qi3mb5sVk7muiUpd17CGqGaW8LJ6Uh2iQdeg5JosV8NmNmbw3QDZ",
  "key23": "31WDAyiPTBkacBMfoeNQeHTmAMXar8xs7FMC2xfD8rvwtZA6MiyV2SjTHDjfzoSGePnSFBVmxo6JjyUqMHD9Zn7J",
  "key24": "31mRtdefKZ6VeUBoywW417uMDtEEZXAbGPLTAXQD2JzKKbN1woSAZoQ2G78Qna858UrdvoCKcCUuhhMNBoE8N6Qb",
  "key25": "2Vho3iQM7Qx4X7C8VfVxf1mx7RnbJMaYvfxLjXTYMXT4f8FZkZUDsfPv52n2V4KKfAK9TBZbk49gNeMLhtPFXPQo",
  "key26": "4exvXug7CQeUzXGAuxezpaA44J7qt5GvcPXMojRgcbSbHzGbhBzhxyVLB8W3zjca9mU1s86wmPhHzby8EMQWJeVB",
  "key27": "85CtMLW77XGx3LHwMfyNjm5j5TgWcm69rQpcAXcwzB7K3u2vo1bhiAfCwywvcvbD8qPnRyP65uzYuo8kEM1oAzV",
  "key28": "2AQzSCupHXSQhUK9qPrByb6FgjNKwqreDzdHeGXbNhHNAC3JKXxQiTBVtWkyWWKp6NfqotdsVxT92sH8n9sEntuh",
  "key29": "3PP1GfcMow6sjrdBkGEytCPcFCva9dsfYtx9dbqyFajcwsMw9jC5n8DyV3PPUDsChyh9LFLXBJgUddinoxQPVBtA",
  "key30": "3AwT86mTnXKznUPMKaq5t9czNo6K2Sbph1mMBwycxfA912r8PBrqvjX7jJtD7vm1NtodiJVTHcgjvdC5t9Tr6Ruw",
  "key31": "2bM8QpiMUChwYoQ77vXeectaN6SRB61oV2eR8dMCAUyL3LJBdG2LjfnhnX4e4AN51WTBfVVRP8qGuUNVe6Vf1ZQB",
  "key32": "48R4YMe7epCABNuyav1zqrNUfdt3tjbZVUChccop2LCasbaa44S9iSPt4feCetfYvyU6PBBKLfsWXypmwkn2f4dK",
  "key33": "3Xf3SJooM9dKX3LXuTbhL1Z273GSeS3d3WqppYmNUg6BbraC7MycMrW2V29GN4xABiJth54VgxLMHpaMhtD2Sbai",
  "key34": "4yfLFhKAhXURLFpzRAqsJMou7RPBCxsFfp7CTMh1cW2JVvCuCNydWUYZDdH7dLf1fncZYsnMbfdY8nny4wTbtfWo",
  "key35": "4dQ4ypyYDncqSJg3RWj2YfHgfuuYFmugbcwMYBcae3uSAseQbVmpH6vwYGUvoXLcojaxd48gCyzze3Ao3rM8mPHw",
  "key36": "5GUof9eEzQ9iKKMW2gYdUneCHMEhx96P4FyNn4WjYvLQGEBg929gbCGWNijdvhitp5hBNHRbqSjhG1DESGrvdkbU",
  "key37": "43XUHNhMTLGcKNJkmUjbxVN2138U8ek4C6sqM2VJGun2sGo4rJvqMzigjh1Za7B6umxmjZq1tTToFmWMRHCPepAs",
  "key38": "5s4bYg5VNXKsvSJW33MwB8FF6hiD7JHMm1cPdPPJ2jwy3J9WuyyAuMpC4GxTtf3JR9b1AGkmCpXwtt1DrYVM1S4M",
  "key39": "5QizCx5PWWYttQPYu1bzBm3n9TZEf4RbeYMTPYkHEkrPTZtjbeKcuAbHaWxkL5H78D4F8BpDpWjgFBuiWs5CkdVb",
  "key40": "huffUC4YgFqKMBmN45jGMzsh3B6Aw6KHnqkxMZU2FqAA5Tz93MVxqSQc3c7Sbe7bnW7SvLsqWTUcsWhoZHaHYNQ",
  "key41": "JNWkGXJFm5qmcDZKW99NAAntUacjzXrAydHpfMbcwcsnzCJgoj38uzcibmaKZVtQU1g3MuVCbdWeW6q4N4vCeAW",
  "key42": "66KMzgfzQrTxH9LRXtn1ZrZpENinSJoyyE3NKLMGZBE3w14QBEcNwjmuzbzPaEsjSWabWLVnQPr1mwThLT9C6VVY",
  "key43": "4stwzRsbsmwtE9h2CDkPmE2cG7GgQrngdhsckSciUj4pVvthwaKhySUcH6D2rZbcCu1nrTfbmLYAtggrRbp4ka2U"
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
