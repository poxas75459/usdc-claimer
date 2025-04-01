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
    "2K5koB1i3AHmwJfmsmTtFse5R8w4uhTDLRhv9D7ojDJLT9Hh5mP6cLf1B3ufSmXECmtkuPwaLNC3dSUv8iUf2zfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29an7dU5WwqcgBH8Th9iPPm6x12wiz3smv1XHS8cTieX3Zo5U5o7nciLQCB8DovXKhHhdQeUtBAGKyagccELmgiY",
  "key1": "3RQ7dUnQW17ANq96hii8eFqV1tQU3ubjYh6DxucY9Yuwca9uJ195tQ7g1kTbpNrvBGhYfW1hvi5SPfqojLaa2yUV",
  "key2": "3BcMhV8Y73g5XMkcVYvzH2FzoEPMXNbR2tjPGAojbYKymNvnLsNpJYaK4749TUneTZVwqX8dHMPy82KAP85H9EJ",
  "key3": "5CXPxb6NnGXemJPwQtXM3nbVkvfGtQUrYCLRBnm9RmsiS2RqoNuSuDtxetJ6VTsyqZoHRL3VDKUQRK9VoGLvy4ze",
  "key4": "3sCZyhiob738QfZCWxzouLuWsQCRodjKYEHmyY1s347xoq7RSgFBnukTjam464Z1uue6uzAZHCfmCVNAZdwJKHsF",
  "key5": "xmFsHoZB5eJTbQx6wnamZStRwJJEbTXEVnnhM5tFS8HCtDUeibkk3zk9gTeK2gjayypAWirdkmT7nNSUQ7qqARh",
  "key6": "25TajBy63yW8GXhe9Ld1PcFpP4XSmoxmsgWxFQubE8rvv1J6Tsijz55yNVYLwdeX4XWDiA8qqeQvuCNDPjXdYYWf",
  "key7": "2UVGkKQMyZ6tLMAuPgHd3SSJCinKN6sZMAhhafT2nQv8qfdUPMz5y25iniMuVRkwniB5J2KepLTRnFV9UEX9Zdt9",
  "key8": "3FgDbupxg8f77MunqgN7tGyYSLRJzuDTjLYMNiqVfSvJ1CwaVhDQskrCgLjJ8kzi5UCpCP1KnRMgoBBNpnsrfdgB",
  "key9": "aM6cwx8TqPq6sRDFmtRANgwjXnZjxPDTT3SAmjM59FbWaoiRn2VqsvthbSjswe9oDFmZDjN6jccebCSmwnRKDoL",
  "key10": "23YA7BUj2TeENB2UXYUQ7nqTpHrBg5Z45D6Fycc4LCvTMaKvahbAhDYxdJQkvq1rtmCL3ag9pGGZD7C7BFz3aC9b",
  "key11": "5zPcUGvJhyJ7GJTu4CFEfp5jJVvNf7pYrmMyEo58ufJ5bivGf2FjzdheyzYv3FUEUXFqwvaz7vnG4yxzjUTBJAA5",
  "key12": "28A3G2ks8vQZ8vLZEqkik6miqyzfyYRCtW8XZ8Y6zic8bunU84EWeN8VMhbrrgpKrpGpwqhNPkMXHV7u8myR8WE5",
  "key13": "2dwgKq7NnAhEaRsQARLUxjA2tE4rDFYaA84MvCdBWtS3je87UJq9rsL8z2gkpF3ubuvXTb8PPffUTG3ZLqebqrXg",
  "key14": "5rZHEVxJ5E1yuZX8EnbF8CM69BoiNmFNtoq6GiZVTV9coYPGdM4P8nE6HxdUPihsFp6mkJ2ZbcPP6XKbtzcmufx2",
  "key15": "Lyc5N16xntyRfz2k5S8x55nJQxKQbrg1y3WNtxk9JceYoFsXS9TTADKxQ2sYWFQoAbgUfEBN9oTHQRZBMVCs6X5",
  "key16": "2sit3Tz8u2gdXi7nGB6mB7ibuknsDT7p9XdEB5463L7r61R2M97hhLdwAv15gcSw4GuBsF7C1hS2rtEhg1nH3ae9",
  "key17": "3mQb48R1xBQ8Pnq5kYJWNrCV75FCmJupv7Uic522HqdCKUcnSKmJBacw1h745rdbUWjd1WCc5B1BMK8YgXmi1vmk",
  "key18": "2WzEGNpbJL9gk1KfrTfYdjEkU91wvPouMRBPGdqdYZtoUTU2gFwbSwSebEFKjeU3zrAmFxWv9H8W2A3n2xHZ21ZK",
  "key19": "3VxLe94SA7tqGvnJFWEFce4eL9qGS3baYWZy5Uf161prZr4V1RG3SsCT5t22dPjZHq54d3itBn5pQgx6bX8nuc4F",
  "key20": "4SiTWG51xEtZSqs9VLX9ZQayxvMEXNRNeHNhQf1qfgpPDSDp58kgk5mSQ1sckxCCgLNJAZ37257nzwV2uvQs2xxb",
  "key21": "4aK5z7nRaeEvP7gD51QAiMZrYXYvDXF959vExDuDQ3H4ePB7MdR4Zuuj3m6ohucofnR9xaRL3QDAFp2CgHtCZroN",
  "key22": "4KcPzjDntv1pGSvbFW26BWzjNm6HU5ndC78KyDdQKa3SSG7QX56t5PFagAPyKZNNpd5JZxmEuiwc4hndULEv4BEg",
  "key23": "67VDmpjhmQA5TJTH5ccN5rP2PdurNETjFCpZgarqBkub1fBGyqxtTFGAZkNyXMkeg7P8EcCGqhsJcwpNsAPuwqLv",
  "key24": "2Ba5sigVv9oecA41iNqLLz7jamvfh5amfbCQLRjhdraMwBQm1Fgg2Yi2DRQjo3mjKPcg2ip6fW9jKq5e7myQJaWF",
  "key25": "5W6v3m4x7SUNKVe937793j7Pex1zVArTHEvhJGm2kAzmLU7j6wCgiVENHCa2wTP1ivZGvH9xYp4U3kbsfg7Ar4gd",
  "key26": "3ypBKqeZpSZJ3ddBqh8kQi4yJqr7XgV53PZg4QjWFSdmXavS1Dj1SzjQuP6LPnndZBBj6apUjMy18f7xGw6TQS1V",
  "key27": "3ydntjRY1NkGvTkPhtoVQ9F9BS5sNrad3AkQVz7m2zeJ1YBoQdKMewkyWyNevPgk8jHz3rQiB6YwqT3a451r1d8Y",
  "key28": "5q5s2ny8EpiRMKntx6Hzm6D14S9fMam2dg2qAB6DWAVqcumyK7FErN3cu3KAQr6vSkiZXo354BJxkK4CsUbm43so",
  "key29": "42Rs4z6QNFt2BK3pTWSeYwfdxecbmP97ACSd2Xm35Gy3QDWcpEWfipgPviTUG22dE2GxDJjELQq6ZKVBJAvFTXNq",
  "key30": "49jd47adUPpV5ek5ph8UMxu2xVsTp1uKayxeFf62HVVk5oRc2SCy1im2G49jeNuzviCm1SkC7G2MqnjHjhvL5cwN",
  "key31": "2Ub9DRCyqSJkGr3M8QqdUySLsB2VLUCrX195ktXjChLRVCKVd6LLrCvEMEMUxpjoakr87Wn7Vhyttw1SZ8jBU6fW",
  "key32": "2Xa3c7eaYzbMZUNJnXeBuXH1aDy6695Su4WzTdSoJccg4Fg7foafM9CGjEhqcf75fpLGg2UsKhXCDnpxjW15YeWi",
  "key33": "2GaLxEGkANhf621CyajQCfxntBDEskD51VWAfPgHemCNGa9QQ4ouuiXbhi6PsniPtWiMj9eYy6hwaZdUan1JbejN",
  "key34": "4d5C91h7PuhoK7wAbMtbAp1b16Lh6bU3Mc2x121XZapx5yvTeAE6EXbdTs3go9Wv4ePbVyjYJ8rrofR726pEEhYf",
  "key35": "4q8JF4mRumoCRhmh9zzKQ6cpQ9EKbsYY6cXDQacBximvcsynC1qFYoVP1n2oLtjqWcxMb1ZU1tMcgrS9Lp3oq4od",
  "key36": "joZ7Et53KvGk5VSLBqbzGBYXSoiPQVAwSmwKSatMxTtC1sMsc9oBVSggQkzeGYzacoFEhpwLz5Lpux8Hms5Tyyc",
  "key37": "3Q85bqJS4HFDqEaALqorMXRPUCqT9CfWXqtF4fH3Ew3ce2PfWipKfV1hPCbse9aEjFL74efccixgiiavyF7btrCf",
  "key38": "25Mhy9huKpHL4emZNK9CW1EVZcrVEomttqSaHAvqxuu38J1uQoWN28AKv2LdAk2F9hBFiW1StbWPbAHxksiPBazD",
  "key39": "3RBacfyMt5d6KDyYk8yHbWrfQwhmhU3gykznpBKyK6ZJdMumQLzkQCRrnA49yJ9fM5kN3qnsWDxTi2n5Ct4DRFVi",
  "key40": "63Le8hKfG28vX6k9sQdKrR3sY3xozSgRUNZzvg8UzQGbRMCbYMrmjxra1CzocSc9kKWLTa3mHghkF9NPdd7c7rjd",
  "key41": "4rxyHPh27ap9AiNcFZiDBYfaUFwBnhDXUTLcAiRyXCuNucaCMaYdcQ9XigDA9P9jdzoD7ht3PtuyUWm77cWTKhgp",
  "key42": "2khTS4b3zfAKKs66YfEotroiJjGP9BmiREGSJb1b2AZjhWEKij8P7f8P1nUwyqyr2WnExEXXwhvPB3E8KiXwjjWf",
  "key43": "3Ve28ozsHzsLSX9FU6dAoSW4HKN4CiuXyerg8wbaWjgDATom9ycskgFTeRN8FPWDB7qfsaDUbHfAeZ3VFhXeCcUu"
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
