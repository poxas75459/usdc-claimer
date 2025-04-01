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
    "EaSrpDuYHp8GAzD78bzk97keuFvxCbC2QMNrkoZgGXxuT5RU1cYviZSHTsfnhpHciSK2n84KUBew6imVpuxxR5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGNWkjsHq37MPabeFpJn5vDcWD1ggLeQ9DQcwqVt9ewzBx9ewvZecSj9q1js5FMSmcFhtMR67zTj177ZLFX5vyT",
  "key1": "66n1VSyizLR9ykxzAsahrSav6BxTixzAjXwAkB4vpctzQ5VvTcVURLHQ8SMJg5Y2GZWUjDcU95E3gp3whqGTm6os",
  "key2": "2zbcvttSqY6GpePxH1jxNpjXBQHWgmRPkLsMVr6Pj4fc9fhXtVpwfrmDj3sPgW327UvD9MaYQPP8dm4j1RdJGfHE",
  "key3": "3FyVVgGTEHA382UfckQeBnNWYuMCHEu5T9nuuNaVWThnj76dJkgub8TCXXEGVE1fKCQ2mzwFfopZewa4vo1kcWow",
  "key4": "5Zd9V2rYhyZs6Qfz25nFy99Nx8JYv2wBa1DfXtEbWsLU5txzidzvciEaCbhCaJpA2dLWEEpFtw9tXWj3f2jnNozs",
  "key5": "2UKGcZQoXmNX63HgvdELBMvwJgwP8GqdS6kUaEiH17QBjqymU9hsmfiYTHwtBsYW2JgsvDY4N9sD5eWs4ne3smzj",
  "key6": "5DGYFUmer8MjLebhPm1ExXAT3jaGMyxN5CGz22p4hsQjcFMBhadwDgg5rVYeGVUEkiYYKiudh3dusjbB8bQxKg6B",
  "key7": "5PUve4UVWJHZWPpendyqDtpsmLUBeD73dMEoggVezKAAoXrSt6pPPrJFCcLPuvEki8hN9ALWqxM6TpspSiWRDEcF",
  "key8": "2QrTFKyUXtGq243u3cYYYoAzijKpicwmSNeLyjUjirE2rCaewqf14gYfVmDdrRhqxGrLuMLBKTx4WJZM6NsjArtW",
  "key9": "4WR22dXoLUbpKiAu3qwDaCE64ThQ95nfBY9Gb3iCQSrDWNVtRS2Da4Nb9P535SwLBt87mQLN2fRz9MTK4nw25HE1",
  "key10": "HSWH7Jt6Fbg6yrsNzF9AQwDhQhjQW9PykPqzykS5dsVK7Diizfb4Vnu8Nx6Z1nmL8t32BeMKxrCu3MKkstskdGd",
  "key11": "4bagmDLKMGHDe4GkmW15oE98ifME2AuoQV1wkSuHYk8XCCymHkv2XFSJUNBz4LaeajcRHUdEF6QwjJi6KZ2sCxJd",
  "key12": "p3HgXwEYwCqJBWavTJZEXSFxhPbmsqeLEjW24e1fWLxhazPXX1PdiwoaNjFVQqdsMa9wAFfUx2jcfD9opisEgvr",
  "key13": "4kFpboCf5dVSF2q3t5KtTDp1P9ckDjtei9m6iRHsv2E4izESNse4B48A8xjeZGviAY9K4VjddkXUD6eufQusgsT1",
  "key14": "5PjB4VFw5vEBYo3qoTPM6FiuKsUHyaCkbGJjErGEynwi5j9fkDeW1qsDY13nS1qTpY89qPVqaxThZ2nb7NM5wphc",
  "key15": "59JTseD5DWHK35QxeuEgTxEVjhTL3VXgCnWsN7kqX6fx1vg1CLVQmdWSC5uxEi5N4EyZRJtxSwih3EPfN9MSpbux",
  "key16": "2HyW5mQsCEDfhEnCTEf8FEyHyq3GKaDvrv7oMUhH1qNF12mcewoqjEaGMaUvk8WRBn5pGERHpzGbnDVLYLzd6TtX",
  "key17": "4wcTnptdEczWhz8AJbeezEo4wJoTCeKkyEu6EZVUbbewSPFe8DXCsKGgzmp7WbL99KFUWR8q35G4Kd7QKLJXoPvy",
  "key18": "y6fVezAn7CEA7TJvvtJrdgSGZFhjdHftXhKgQeqxm8jmpEt5vBUfXw2ebEqyMSwYTFpScTZQJrtaPhziKMru9wU",
  "key19": "33WBzzxw56TABc7VxnQ8RFrVyuJq6NSqN3xHgRtKBjDYavjUVQCxemFti7e1A4GsjoffUBhburaGA7qfLpAie9RQ",
  "key20": "5rCJyUDhvhzGQ4SYS8UU7Ag5KexvM7wpM6BRp6JVz3354ygPhdBHhMPupQF8gbKne6VhLGmvfofCGYpUyiVpVwjU",
  "key21": "WFTAjSXcgZToHV6rAqLyLEwjYWB57bS8EVfxP8due74wUvRLcJZXa8UZPsATZFHr9ghe9T6tYAtEM4iUFmtjFfW",
  "key22": "NtWrVn4WrwK1xoCkQA4krWZ7p8azxVR4vcm9YKfwieVEaBsyYGoVn9C5NQGg4QChzinw1fVwTBaqSLoasSXxhCP",
  "key23": "znGQvLVyjQGUw81DvXc3Cp9CMVwBwZyGNywy4T6gKygMr8EZJjHnTkVrcBMaupKYRXpzdYn79Zdk34jZQRY7VMQ",
  "key24": "5x69tbezUKxMAVrFemUMY3Bjg54CxpjxPkio55GnCHMTBbSnNUA1VTt82cLSPFGunrD2u1SHKpATMUPB86rjQ8Pz",
  "key25": "3gtQ3BPTFW1jUqpNShwiU5Ue2ZAPMrHdorDGsciDmxyqayw2UtWNqRNhhCnkpByDEstQNap4Yjze6LdtFARtnwiT",
  "key26": "5kzLet7k7XVM2gDAjVLM4Tdt8rJQTCLcbx5hViSK4TD2qFGK54ZYJtHfLDzqau9eo9duP55wTenLatD3ZRLjtdP6",
  "key27": "5RLTnfVhnaz1Tgmwz2hjanq1wd1hUFGXTUoZXJ2UCb6rwW8Huu1FFodyWP7Q9MqUXQtyP5KHRrqpPBHZdfPRaxB1",
  "key28": "4vmPmXrTFEHa7icRApwm4DSKmPAtPcLoeHzeSmTvyCxaG3KNGFafyKyjpTMvfZo2bx9wjGiPZsjgesUoH5PjQYWf",
  "key29": "5JhGXfn29EK2VDffmEGhW9UytCvdFCpUAqudgxjkWc7xzkUUKWNzBq5QJe1EFPvRjjAzuu1VkZb9HLMk4G2pCNXF",
  "key30": "2vCsskAnLhfBFYsVLy6fPY9xW5eaQ6iyUvH5zkS7M3okhjzHT8eDzpDgrW1kpbjiqT4aGQWWWZHGgGTcoKsiVcDy",
  "key31": "5U1MchTxZ7XXs3bpPbMULyFCwmS7g9fahYUEh7WZgQT1hPBUph1fYjPCqgdiqxQ64hAVERcWUjH7uSerCBg6UcVg",
  "key32": "2Umo5FeTWXf8uykV85WtzbDYJj9BVDJtk7HehuyS7R5aPkVa3rGCP3W3LnRY8KwXHEYtxpnXUTyUe5FEHAg7NLuS",
  "key33": "sBYDPzcL2PpyperXdunukWt3Xh3DsSugQyxC2GRPdEdVjmTc2fFoE6fDiT2iF3NU57nHBsy8PHUVLwTzKTFtpv9",
  "key34": "2G2dhvnPXdHYgsDqU2AheHRBZ2V7McsfET28N16ueJQehTfzE2YnPY3kYVdRuJ4LxZfa3sjYjzkGqCfeKLLnNLmn",
  "key35": "Dqy2uZXE3aR9bNZbVPY4nPQsTcJnXgQ3avBTNzL8kW9xUrfLzNbiRLdr4zQteFRHopb9scxk22Nt65uBoPRpi71",
  "key36": "4KZJn56fKxWnjcyFqm4q4kxPM9Gek92wFbofgxBd7AMCnZ3Vo6kDAQDpvWRonH7KMTqKy4f6aBMcTiQeVPq5Rqrt",
  "key37": "4k6WDMiFSHjeqkhWsW5NtYeZUnHwxuiSiW6wuJ1iRfh8Qr7j19v43r32VgnVacH7hs1dokEtW85VYxKSwG3Dumo5"
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
