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
    "4ncvPfSXRQKwAf2tueYfzAffbxJbHzM1EDbWGsQVhX15gtcYWUWELvfN1vaPmR8kuPNFNF73goVwQHBruAAP86AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PGgvpQabnAz4Km3QqHkDjKYYE3uMFUGS6EhzcvrQnkVuA7FDotHP5BZAZjR3UeUXkvsZT6kTg7pvxigG7tLAJC",
  "key1": "PzZ3z9DBLHTGHzcCdWbTFyZYorVS6csXMxZ7fjGcJ3HYEeMXph9LuYWcXynX47xjx5oDrdkvXmzZsavFig2pJ8g",
  "key2": "jXXDcQSS1fRdtxLFPesbMLUWrns8oiaj4kRwgabFVoAyDNrqm4tXZxn8QUFK5Y79qAhyE8CUJrcs3sCZZYz9p6N",
  "key3": "4dSKYNFqEiKpVxmEe47Y4bPqpz4oeQSUe36pKpXSbHswefx2ybghiTXVsBtCiFwjkTRjijWriXd9YoCxRZhvMXyU",
  "key4": "5DfwozoYKn4mykM7VCgM9KXL4qqQ5tUp367ayddnYLMm7AQoT3BhVDNDXSDhAQEgC1WSRRhn6cRxqmw4fVJHfCbu",
  "key5": "31y94RLXFmasVaoTF8qst4magYevrRXAwAtLVjeTjn7mxB3ycmzwb1WD6AduUnqdrbwNhGhMZesQHCCyxSkcaUCp",
  "key6": "3xikVFDzbTFc1neq9U8d5q4U5iqVVbwmdmHtXCMuTk93c7xeSD4r8177owX6iR87hbZrb2xLVirRtX2sjNUZziU2",
  "key7": "4mLH1TgNmkeuiif37hQdZcTH3spytvVorqRykzt7gKQECunNyPERe6awB4pykxzV1znJdZLKYfT7VUtBD26iU4D3",
  "key8": "5GN6FmZVj8WDTVki8zx2zzECk6zFUf3dcYikWyDmaqLATXMadpPmkBnJV1sLDSdjBaYwtubFCx1ob9w3chQqfBjZ",
  "key9": "2VezyJXDbep5BuWt6FfhUCYiaMLdoxUDoc629d1JzeAN91yCXyY5QwkeMhGG5fLByaVbuK17Q3rb5XdwdyovFy5D",
  "key10": "4yWkfhgKmBZSmUzfPbmswxFib28WEgHtuQFB4rWREyUFT1SE9VRGLMysJzG1PYxka9UGqDfFLkMbT4GCpZqqDSbT",
  "key11": "5CMyf5hPzy5kkizCJB344GpY1tBEHndPpdwjq5YvzLsF96nUHsb5VFfvrHdoFnynQ6Ebmz8Sdzs2KAodSqyCWygT",
  "key12": "iqGy8ghWARJZZzxJdCTrgjFYZvuTbb544sTgtwdti1T59kgM8XXCgHjEMmwxeFGgLjkMcKkMpjMWCppbZTXmY4C",
  "key13": "p2jbAh78vRfJQhiihSFamRJKTy2oKBkw8KbmAWfvPJZz3JnSZgLZucFfD9RLW9JFd3UnXsCyDhxpU2PgCGY1DKL",
  "key14": "5pM2jSNQ1nRXtq9sgq3Gph5NdQ77zMjG47CePtxpysXVV7r2xP2d3d8vASUTmEMp7JbquELPjMqSyMTLsu3eB9BL",
  "key15": "3VPoogCNbgaJeSLnFz58DKm9HBxhoNf7WURQD3kwXRf85nuzgMHzSh9CKaYWphicSsGMaBg2YEF5aEHZHtkJHXms",
  "key16": "2iJcBuHoR1eKdzdz1RVHie3c75jKWxFAzy94eU75jBahQFLb5cRXDPgQVrqRMVqXCRAJn4fm34YuB4KJLnnVSs1B",
  "key17": "2fmTr2rXYAbsSuwewBdMM7tUyqMC1zRDcKXLM8E18KSLGaBN8hcFmBvcmM9GN2DwSYAmzm5fTrvhmaP2MFxao1UA",
  "key18": "YQNSVpqB97CaqqtyaTHhKvLWBeZvBhB4xDhoEusQ59bQSzk3XyqGW1jKBcUhrvKmw4pJgsBoYWgpKnvnkWVhkRk",
  "key19": "2kjvjxjLAnrF1ZcMv7iJMpoQmTmQFiTAGfGQE74rnRX1J7QjXGrYARez2Yszk6rzCwVLhy48E8yFUuSRL8PVLgmA",
  "key20": "27jGyJ6USC8sf4X3XG7Ga46sYzEdM4nwPUxcryLiD6vZRc2iTKPpduZaAHVHkccBRJ8wd3tDLGdzxXSwxHDpM92L",
  "key21": "4ka7or9fLQU9eqyPAVZmKfs32dC2K4DJTnhCc2ggX85jMB3RiyDiWNt19DK7imP8XsfYgSdEQC5d3HU9y5uxzv5u",
  "key22": "5aLxWhGtekYqR1tcXH9etD212Ev9NprLTtjwWrBW8CCazpZSa8Vdtd4SbdThfGUECd4SDUJaizaYp4SDPGDt47qz",
  "key23": "5DnFrZhzzBCcKiFKWuHCDp5Y4uGmMV796t7nKmoJ43a6BLJhjFoUVzW9LYKqudpfsKjhEQyXsDWEDhvUDavEKTtw",
  "key24": "4mMbMkcMKFtpqFaxpTgu3yEDFURPwV4Hwfh2wRvPoA1XjFPwggNAfAAXbGKFtEYV2w1fFmcs1pjDHrzjaxLCaZNh",
  "key25": "2h2HbZMUJ1PgkzVRw2uULekPUngbKEPGGLt2tfkjcb61vVpx1FyBGRYYu7MZ5oyxrJuaJPraX86dsgeRqMr3npHt",
  "key26": "JrvudwLw3RCwLpUbuwyzj82sn4Q9BPPq9YKpypFQEUAdMK97aWDybngJei7of1qWQgu8qPcQdZJBrVZAUyvytYu",
  "key27": "5bZ9499Jckvvbqf7yLPCbnnzWB8YzmxBAWagdNBHzxWw7R9namd37eaRgPa4bRL12EFcPoz7U7KcY5TjoCQ73adQ",
  "key28": "5rRnb8B6nqm6SGusvbDXn7jwRsJ17B2umRvuCxcYSaAbYYyfpSUqYDeG1Rp7HRppj4ouPCGyunUMXehnPJ3qQoM9",
  "key29": "5DNMf2QjbhiWVJgo4N32XqWhUmDV6gYsKvFz6MTHzhQ88QNrH7uuhRn9tFvdJeKxi3vWpYeKSJgJoWmKaifGn6Cf",
  "key30": "3yoQrqkz87YKDmo8aGSahiNgTQ5qBDuCo6BUMKWe959gsHFWwXUjgzAqaMTh2UtW4vryfP8xCGPzTNf8VakYWZcf",
  "key31": "uhrfg4KXDXHofN795S1j3aSnFYCwy3aMEJhyaGe3eNxPrV8zY6KjyPs6wkKo9q2DJ9VYdEcetsUFKWgix8axjUa"
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
