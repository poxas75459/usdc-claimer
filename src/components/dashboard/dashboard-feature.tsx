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
    "k4WttVMJnzG71kuwfkH1kRGjwXi9T6zuiWjnpHn8xtb1NwzyKQ8k9jKX2KG6Xcw278YZxaorFa8f6vJPczyVzEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nc7PxJvYgWc9QcRrJTSwhC3MA859KMKsZz62J1gKqaASpZ7vhHHCD1knu13LpSaB3QbmkF7dfN8XfRyhsjSkEpg",
  "key1": "Qu14M575fmoQyWbv2oLv1DSx4Sj8wi5w4APVGrTodamRq8Fh7hJUbFF7SzQyNGzQC2jj6NctZ4ProVaEEdk3b3c",
  "key2": "4GmUmektqAxub8YHWNdS9mCvP7UVCwwgbWr93sR74YRiuS746Co77hEScWMnTVYLNPSryMEeYY5yc3a6F9Yrj2DG",
  "key3": "P6tF1D9PYKznrkAwJDTsQRrknZ55wSoRt2NtUE8TYUbinoTiTGAiPdX1JDVeC3J1NqK2agv3bP7Jyfi7ghyECEo",
  "key4": "7VkHXQwDmxNXbJ96uz2vNDCjzKEEKhWPPJrW2zZnN2RWYcEPZazmSohUfMRufGgEE1vMRX1tGzYuZnBiiFLjTuc",
  "key5": "44vdnpsZq5ZS7mU4NAcspLhY6kq4gq3Jb4HDvLyJNytQF8zvBgCC5tscDxhfp8kCLdk3kyJqGvuYm6S9BXBkgkbf",
  "key6": "osde9BoKyUntpuMWYWfwWuSSmGyKfkEVfwZdsVtzuee5K6JdB8g8CaSbZb8yCCT2o73PJfReG4pRLX91UT9ZzJp",
  "key7": "3cza1GHuTKETeBdHpeUEz7743kcnW8y9HWNP72E4A1YRgWCxLwgxaragWN9sZ8auoVeCP3bJqqdehFgVFT9J1Mhx",
  "key8": "XH1Kz9SfHWWJkrWrj8tpC15rzFmQm37JXLA11Br3eSEowbEHfRm7rjeEguf2vXTiggkRz5em3fGBkvaatY9rNiy",
  "key9": "3oAGtZ2AThqy4Ee5iPYVj9eX31TmmHZgdKv9sTNWDs9UYxDZvAm7qEGmZS3CUudYt667bZMgUnRzXqSgab7A9tmA",
  "key10": "5uUjqE64TPaHoH8SVAEXswXhpN18g6HrDbHezDfxPdwPsCuVQt2FEseJKnR6hSNa36onW1gQmdSVzr7yJLtzn8fi",
  "key11": "mAQWAgJhHWyv9L4XyqS5VeSgye5KGHYMynzjkUo7nAuPwtxPcPrPkFLGLU4NePwj6ekTVV6YtyP2vXD2T9ojv7m",
  "key12": "4ABX52zQ74TfwnRtcHfAfmyy6Fen33q1cn5BBMm975yvbtqu3SifYGsXczTK4eBwqCvg2La7qEmJFSpiCTgGbUrY",
  "key13": "3qPpkMCBuB6b9fWr8arZz9CdxkB5yAhv6pCm9UszbE2QCjRMcW6Kq4BFH2uMC2i5BxZgGdxrc8HesARvda8WCH8T",
  "key14": "5oTobXKWVvcdP4Yvzt5yc9imxnyyxcxw1ZTMrVvgRvH5fWpjTzeH5nuFu2n6hr4Zpb1AZ5C7DCpGDZnYUyjc9FU8",
  "key15": "A8pqBosSc1p7aUNaqkNBUSht4n9zN6rTs9QriYxbUvHdp5XxYiy18hQYRFpa1BMeWh1WtoCMiuBDF7oTWtjXYQA",
  "key16": "45Tm8tveyK1hCLi8oAn2rGpEw8VmdX7DADUMSBdXNGGkkx3HEz8U7M25LMAZDdkHtbZ5j9A7ybUJG8CcsgfDHxa7",
  "key17": "38TNAZuqsQdvRMK9MqzgeXVaeLryJkuqaTMgZzXhfxU7CUoUVMzRNYGodwiLuCCkuqXNsHVqEcCDw6yyCHxovyPk",
  "key18": "4efD4CWHZkmYiNA3h4aLq44Hj497DP8aYWsWGha2z8VxQha3Mz4YKqJogrxxzch3TAX46v21Zutqai31pJCSuMyT",
  "key19": "5sssYXyF4ycVjGU4Haa5K47xxRy2xAk7zPJpoiuqyPrNbdEwQ1q1mbM6y3Urjj9Y4kqPZYCv2hfnSi3uvGfwxWM",
  "key20": "2DsNhJ8PrnE4UNmSnv6pzihSPDT8Kq813c2u244u82hxR2jt2YnyUaSpKeFYaNbtz9JixrJgq9pkURBFbv1gsmsu",
  "key21": "2BtfesacbEqoa6Cn8Zcyxpj7Tht5bUjAvQHTUS7NZvyhptQfhS3PYjhXXwhFb6yUKcyT2xdo8NrBdvzMuFZtVC1k",
  "key22": "2e1biwEX3wVjcah6JhYjgyyFGbuntxNJhjPxZ3F9qZir4d6oM8KEKe2hcRPWbJCYhryK4q2EKSpGGr6jLodeLuyn",
  "key23": "574i8oGQtP6MzPXa6GonKJLQqCQcfiqeRF5dEbTvbPXy5eodSsuYtL13TRMxsQRTPg25L5NVqbXa2fSBa3mF4St",
  "key24": "4m7u7e9utLsU8F5wyb6cjqTy9DK99enQdXNUNmRBPKMSgi6s3XSeLT6KAux9fviY5asUSxQPdqzhCGKecvtd9GrB",
  "key25": "64FS1ovp7CubdGS8xAGP9ijFtibeLyEnKdMHZLxeEEECcjFqgCyxEt4F4QMGa3EKvSKZ6iGyK5FnFDZTn4u7Qsqo",
  "key26": "3fcJA5nFV1uLnkYyg4ktWbynp82cNTnhkeZrXG6FV5Ady5Shw7ceiAQM7T2KjfAm8yuhj22PAoW2zrxi9gXE8wof",
  "key27": "53UEBC2XZjf6joED1ktyEoAf4Jztsic2qeQ9ksjUY3X9MJfeMCqEyQSLQfz3cp2p4gsJEd9XYiifioMJrnTzUaqG",
  "key28": "5SxFU4ivKM811iWnMKtVHZieUDWdbjTCoFJZ5LK9kjGmkoffRLHNqr4Xfzkp3UQvd3WWpS6zchpfqLNMmALTgzYM",
  "key29": "3abt3kmRNMjmAvJNp55R7CJAvQzzJJku45maS88rg8fZBdh4tPkbZBGKaC7WMGhE1G25AGeGCHD1G9A9598khZ4F",
  "key30": "5DRyPtuT1a8i1xBhsQ7hcb7ktphWuM6NBjghWPJ5tLqZ97pet9pk7JncBvr3W8F9XAuksrdTrgprHr4gMcPGeoXd",
  "key31": "4sNSBf6BiXGGuLg2VyDi6YgJgvXo5qjg1Ra7h7SvpEVZQfVEi6KvPoroqFeoS11Jo2L9epAzwzViKk4HETDFqPUX",
  "key32": "4A9j9DC9T73KdQv3m3RLRqvePmk4DtCek78obF5E18h2bbwe8xEWfEVVHpe5Dt43RCefRf2bEDpQzoJnnUT8Rk6m",
  "key33": "3FodoSnAqXCnKeAJtNnn12fpuRuChVEj2AKytZUwShpxKaHCwD6QvVrpprpevQK16PvBTXWetDvaQbLo2Ztq1MY2",
  "key34": "2oNfyvCDz54xfbAoUwCrQKFAKRDj8qvoCKRVe1VMirkrMvKv7x5NBEDvgrj42bsPnjP2S4e9h2Ar9AAAvt84XitS",
  "key35": "5JWNt9a6TPdUGMomjePzjMNis1c9BaGs4NaLTDUDep69AHad1WPBfddzroRgANuQ9WNapgDCytg9ZcSrvPwvuyhR",
  "key36": "2QJ2nrfqQ25Va1H5qGMn3a4hS1D8YV9RPHfT5317M4HBMcPWwLLBG2QdnzkQ6MMRhAwywf8m3rMm1u5SeCBbeqD",
  "key37": "hbmc5Ngzmo61idgTVqGt2eXWScJ9exZyyP5iMAs9zap56F2rHsrTGxNFtdn79cJw25QhkDuR48BpqA4Eo2cVKkv",
  "key38": "3m3y8ZQgHGbdXUPyVGfyiTAYKSWHyrjUiPE7GhFPG3aabUsQUousFtPPqARPpx8rLXhyUiK4C4gChLiMQb5BPv5M",
  "key39": "5yBieBrzhAPebn7pp3mPwtsAypiAJp83XsBEayQ9xCvX52o2Jm3j6ho9eNowjG5hk92yCZ788Asbt5hDzRCcfnVV",
  "key40": "3iPUWUa3r9SHxN3BPEhxvV8XZXaVSpJuk9BXb8EKE8HwKYdXuXbyq7HMSrgm6NPV2G6Md6DLzjcZpmurmsMCPsBZ",
  "key41": "2n2n6GuidXtj4HSjog8ZhqdJa3WvLgyTLmKk7aKhkkFBH3Ak6HrUk9yMu6tiKro5W2zVqu4iykHSz6J6429QLgMp",
  "key42": "2s7sFyt1TLcDa6Nh1AfJthLj18RhfadxmdxoEKRaRzex8gcKf6zAGgWmPHuvAY7fMUrntR1fNcsGb32xki9CXWmB",
  "key43": "5jrWxh9TT5xPAaG6jxDCs4gAdjLSjzEpgwFh32oAcYT16dcVMme5NYL6PZtC9YKnjx5JeahZX7seMfxr3FEdtaKd"
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
