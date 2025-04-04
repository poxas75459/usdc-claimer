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
    "59vbU3mfwLWiU1oh82hNT3sKWcRta6FqZBPu6mgC7bYuPQJQ7CewrTZMAJ5sDsXZFHP2nZUupiVJN3LoT8azMdBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJPkkjQFBhovw3pXSJ3h2b8X3EwpiZnBKtK4otp5m3gLCYpJbV6u32218bMi3PUxkprerkWie4dcoF7xXa1bM94",
  "key1": "7TuRRT2rpXCDTR6Ngm2uUTiVE1j8KfiTrT5zUKYxrEi2zFi7LTwidpZivFx5ejs2ur1EvApnSAut6ikBGEaU4Kh",
  "key2": "9yVvNUXmK3UpBa54b3aBrAKakuikMyb9rAD1pZWf87fy8dZ9yjWodYRKHwVknye6qwy5nrGF4amunoWcrKPWzZj",
  "key3": "4ym2yCdxzGHW7nNZ9uKWQL9dXR5A6RMoXf7fRS69dDQS3KdDm8zabswDSQh5kVVUijJxnMGroDM9XXqtn3TZNvUA",
  "key4": "3axtqCU5XWEhNoxqnqYV2rLiWAPM4fiPkLQkyBnqVip48p2E6CgccMhAsUk56M956dtPHBtjFmnEDUBTWJKvmSRR",
  "key5": "LeqMUgg8pQommcWaxjuEjW46mYuAsXicCXndwLZ6QLpjw3SnTEtU1zSnAV5arZ2hYL6xfcRqU1qT5TveUctik3E",
  "key6": "btmF2Ece4NiixbvYbPU7d6Ag7CkembQWM1EV1VzUjsXjr931kw91crX8Nksn8k3KnRRoLHR27htQ3nDek6Ef1eG",
  "key7": "2ASX95jVUVMDNK43LD5jHo61842nTHorES5SHuRfiG8Zujhky4wf4ga9c5aFJDC2MzZBSxo3LDDxS1J91DvCCdTV",
  "key8": "te3XEaLZwWxYqDFPgfTgTB2cLMSqozZdtK53qieCG4LPAEPmXXNecLkcwRwDdr4coYWL7FXfjQYH2VknZoqo5tT",
  "key9": "5ueDcfjjEHY4qdqpUzVFm2oGdvejf2GGoQrRbptYsesDpyMii5NYrc4gAff2LY5tsMTLwJFCVqbVjbU5vLXbcEcV",
  "key10": "59X8Jb8J8cjdsNqHtgK4LWaNsijacsxwnaxcczgQpD9M7hbHgtGbXLcrFweSW3GfzU5fD2nrvyW5dv2ETqtf8cpa",
  "key11": "4RCpjQuRTGjDbdmTrC4a8H6LGSx1AxXD3r3Aw4CqKViAKp6FaP9kVd9ZEMYQrPv1s5RzqR3VN2bMdoivQQdBnz9t",
  "key12": "48nLC1H4UoqjbHAUMazM5Sz2v3dFQFJb1huZFb6ju7EgZYh3csKVeNeJpz3MFsff51Rv6D7rmNQHsh2aFGEkZw1a",
  "key13": "4eJ8F65PitBA2Z9Y3nwaS4hje2wHYyCmvtfaBVJPHEn1YJQFnSCCpccu1PMHuhUbfxSwog4CSESiRYs8pgc5BU5Y",
  "key14": "5DjhQ3tp9qDWFXpcNQyFavdcwfJVTQq748Gu6EsHtpF29t4HbxXnKK9LTHmv55iYtE3MT7DXBknZygWMdr8aNhEU",
  "key15": "m7ucNnXAjzp3XNwUn1paaJHfWu9V61owcJ2B5qvy1FC5AaWWjqnKJS6XCmkzVRcVJ5tAgRMuvzQhGecamt9HU64",
  "key16": "3i9eLjmWwQJ2dZjvL8ADJkheqDtqreZMCi2KUL6wLms221pxXoYkzc1nHrqWSnNB4PHZYN3DLDq3o7jnJkCbUGRT",
  "key17": "4vg1S1e9MztAmxvpNiYkaeEH6o7vJajuhBoDKsGYz76NEt91fBAvV7Z8st27iHN8ZS2ucregEjSVN8YrmMUyx2fP",
  "key18": "4gw15YQf3CRCVskYHzJYXwA2ZbK7msTDe8fmZrMkabXufzfGFv1uuQQCEYHq7gE746w5kVCMijzEKzCffiQoZJ8A",
  "key19": "2b7AHAxsTvPGexowp5TouysT7VzXW9WXX94THCZjPHFg4nxh9xMH3W9h24b86AZsNJmgVYxrqqohUQBE6qVcsQv3",
  "key20": "2wFE8YAAccH8HqcHdpVPxdBb3gw5tzbTXh3yxva7UaKneGURRwkv5hw2JHDE14UTB4mFiaLFkmtFCZMqUHi5MSRD",
  "key21": "3Rj258Hvd97pFi5fwLfPztw3dBx1MkfLr891L7UmK2bQosrgEAzYzkE5hzPkxscubsELSAhtmJeKiovGAQE6ZufG",
  "key22": "64h93a42BX9puBFDXR8knZvNJwihnU85BUjwFLRZihXhVRsa92MXKAmDkJecX5a7ycwNBuRJMQPbtxqaD783yjho",
  "key23": "3SSreN3LPUmiMnVDc6HivcSzQnbCSCgCRKRibTpkhKgYzHPLAcPDmkpNRseCgTMxdxhpckBaMsivXZz7fMMqmHYd",
  "key24": "3vRn8A9vwuWnmY3QS4PkNRaYDqtUKPbqf7E1NxxrwT7EWUsZsUFN6mwNkuVeRaHw69d5CMbP8n35z3U8PCmAqBoZ",
  "key25": "49sKk4vHf5RT2DXCwN9zA9UQ8aMWXEFyGck8ZpSCU8SGjhcqWmTdu9jGZti9KTeAFJw5hUxxuUEs4CahKFDkYvRP",
  "key26": "3oppWF8sUNnD6kucVCWJv5naKJzbbbEb1vwKCm9YrwjqJNjKARNr8mxWSJDheYSRmhcYvguY9jJBrCaYfL75bGgt",
  "key27": "3UUbJC2YKgQ4EUWXrc9R3DnuDXa1fZR4Z1nvn1WcSe693vxBdAnJVqyMsEJPUJTna9FTEBgz5RBpExGYNBJ8pgTb",
  "key28": "nAVzmgEBMkka3AguvTDKas5JTLqWtUKMA8qkF6wjNUBVvp65QYRt4J84JdBQ28kXSGqRQRW37JaxaXPxXZ9DVzy",
  "key29": "5EKiYn5pQtttmu87htHfXo6p5B7tp4xvGFuzBceviN648jyNAAjEkVargMmjMCyfAxbgAPHpAbxQfQa8DYcCQwcq",
  "key30": "2m3pk9dLxRYaWn89MFeP8CcYhvw5sZvWm9Msa1iXgoGhAwKD45GwVapTGcNoKswHrG3vLYRrayKCbThVbqDAGH3q",
  "key31": "fGjAAAFWpAzJCRMKej7J7HtnsXLkKYKHJnX4wNiRJyV87x8hikEyd7RPAjN84iGKaLrz9WTiUiq8b6AiPhfXHNY",
  "key32": "3MYTpbX9JmbsH52PEjcAysgNfEqh2zopeivZZjpHD8eoJQMsPmAwYSZWvkLCrnbpg81e7HNL7f8tvR1qd1Zo4jSZ",
  "key33": "33MynnMtpiSWE4i5T4G2GshmttMjz3oacjye3Qa3TmPej3J2QvZvn2rG6XQepFwh3DxCJB7GA4tRvEcMXn48efko",
  "key34": "5iPQSXtPioppjPfcNPoBerVxQTszjKSrhtrAfEnHzZVxzJveq87DtcVAhEptFXeJfcV9VGRqt16e8phNrw6ecPaK"
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
