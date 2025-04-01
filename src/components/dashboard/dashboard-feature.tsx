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
    "5DwKdqgurYKwdf3iuUCCim4bHhYszMFNoDJXXB5vtz2nfW4kgJEM1nr523Hbv7EpPF2YMHDKknva2ZvDcWfudSXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMryhLXD5zwYiqji5qV2GnouDStpaYnT1xybpAVNhoixZdefo1YKvz7G2FUX3K6Kvmh9qHrUigGuiny2Ykm7Bd4",
  "key1": "5j7rpSeVpwwfoThbpkTAG9Ue6RaGnxeYJfAbkHqhRuHcVPR1pnAJvpesL22HpeaJJV1v7U4HMo84zpMcGaVnJAzC",
  "key2": "2VtpWFoMzA3bpgaCAUpt1L7u5xciJkYENAAbHQkECrZq5z9aEB7egt8LTmBb1bFvAG5J6t9wfKXd76ufJhMTt18Q",
  "key3": "3coBuGvwrEDutQbAao15XdwwqJD1fEVQaBAABde3Kz4KULx8Sr6YZMw4JWbyZzJ2BhCcsvEUbRjpFUSEFyRQB1xs",
  "key4": "3RuvWVDZABVguuH9sFPLiNqWCgMsf171UEs4D7GzXkQoZzfNnz9X84QU5agYxfzcSH6EE5sbBdCYM43StzUTdTjQ",
  "key5": "2vw4PpAjypFn4f93uGr5VahGBe61MXawbHtyccaMhodrw5GkBRirsYTKyL7HnAEgyEMZByJHaeBrGQ9DxPqLCR8G",
  "key6": "482tfpog3vSUY1HEDuPsHNxyt3CJNXY3LwtjDTAEcQ7U73L4ECmYTutDnc1YmjCUbmCcPTPSVDgcRMMkHmjXncoD",
  "key7": "Bm3MZ9NEhoTtJKBoS1yPdH9e8BVfRmgosK3nUDo5nucqSWS2GGPoGkG4fqfsNi7H5uosySD7hagFXjxa42ieKrY",
  "key8": "VwTeGrTvY3AfFDH9RD5MAmSyEkH1LBGAwUsagvwxPRBDCCaTETiYxx2RyxS3MPb4vP7Y48FNGGQcvtgRcT2Luwh",
  "key9": "5YDU3q2cC69EQwZoBRHVaFVQFgBe7eNNYiuM8Naz4BWkYopVW9GT6hvpvCrCwArRC39rNMbaZjxETkNzvEYWWMAz",
  "key10": "2EqKK4ozz6wXy9VYU7DFPyccrQyieeb5NaHqDorN3EoFx1uBc9VN1o21ux3tLWuLS8g1ZY1vmhqG2uLEvfyPLaGc",
  "key11": "2Ui2uDrGaXbUu1XdRYaAqDWTR9JNeiXWjMHQkMHbpCMbbvyQjUbxxL9akmKcLhzikv41aJdiygJ97ahU9MRkUgUW",
  "key12": "5c8r8ZRvHiyg9Hzf9GRXfVSJESYoGFUxCKnehDiRUigu1yHnZDgCH5mbc6x8pD9fqZ8mGoT2rdw6duEHhWV4pdbw",
  "key13": "4pVYPmz3WVPsB7NPFEAY6S5ni7pRn4bqXDGeUVHnEBCAPjh6s41i9gm4X7kgW4tgyrsTvRyV5yCbkagTFpSBkxjM",
  "key14": "2wETyKZF39GdBgSz25o5s8UEoB7wuQKQn4vbc1Sy3XWUKqiFsdcEPkrSgDjkPabXJnBtgRZjFMYdAULG2BQx2Wfo",
  "key15": "NjGRGSLkc13cVPoxWMEmE9Eah7UYf9XGLmggpY8sxrgNQcBiPwA7iNtcQkeToT7aYanFPKED2HrKyZaaLXuLXr3",
  "key16": "4wCQu65nUELFHQSkSCBq4RHmoL2yW3msLDwdBUDKwAQUbyjM8XDvaWi24duwaW75p9a2LenJvbqWMZbCpxDMmWwL",
  "key17": "3AB2H1QRiNQrnVyDAxcTrfccFTSbyYvqrD2TAynQnpvB9DBKRSoijiMiNAyRpjBuveiVZW4Yw9jRCjisCDtWor6A",
  "key18": "2Ys3RSDSPWhKjjBTK8mUY1RFCQAWbS4qN3vtnCoDdGmGQze8HPbsCdDD1s26t4sRpNYfKvQbbJsCaXH3oy9u2Tb4",
  "key19": "2DdpUt5gFKGcbyNxBXzLVZdE4HBrfRduCaVbytoQywLgEDJ75XtuYnyJ7CHh35ica3BLzeCVi3CdXcRb5sCVpWiY",
  "key20": "4kr4p5L3eeWGyVKDv2gD3BtCnh8uPMk9PNYkiSfVw8EiDAMPMNdZfjm8tKUtVyBh8eca3B5LGqGBVTddtnD23qDE",
  "key21": "4YNYZEWgefwqPBJB9afbRmFQjWjzwgMZm7gFs9BDSXUGrdD22Lq1ukt1VaXYwy99kmKww8qxLvgNf63536DgJhwq",
  "key22": "3BFsDzeAgFC9VF99JsjSvpipbNN5ZLF4HVTXuGRFhfHkJKA88a9JTfA5NTCH4uGJAMTnmgFUd26fuQEQtVNEoHbE",
  "key23": "5ssMm1mMiVkwWBMtRjfMs4gJuzfvMBi6T6rHjUsKTttw1DMPSFxxFrS6Jvx6rKdyYBofKjwfSYYPSubYRwjXtTA3",
  "key24": "2SwQc5at2fde8UzfaBe52D2xAk6N5LmesnKSC9XGdDCbgiygiczDqJvvhv5XxF8LaMViWNHzwRTNKdVhb9Tw9q8",
  "key25": "3TmMeZiCc4NdcVi8cSHj6TQqRbuPVFV98VpP1FtT7Lpy3a4wa7bYmQ8HCo7oANruwbUjgXF87C4uG9jjViDPDE6R",
  "key26": "UwQJkT4nrxwRjrDiA5NFggVY9SdinhbLLxuGnmTWw7gMCqXxXETs5iv4qP9DXvwmv4RwqutsdAbThS7TbeQyqv3",
  "key27": "37nJo7EjwChvfYzR3Lh1yJXcUbPRxaVN4vbEGJ2WHh9HUkiheKe7BRcviUTwFF1gHNHiS3FHyN7kUn1dU5gmxc2C",
  "key28": "5yniV21FTeXYnyaEJF42EXJGSb2fXf5dgBWFoBBEpqKQ6XkgXncrr4niqB75gvGr13QSiPMqLuv6mYMcfWskKAJo",
  "key29": "5jSSGyKE54E2NTTjty9rT24DhjiqjggVubqR2RJu9CyfRyQijJLegkz4wJFgi2qTZfdVuNUHtwfD2p4uvAAAvCnw"
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
