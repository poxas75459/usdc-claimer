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
    "2uSUZjzAgczGxCStDNrHxJPDwggadtzfwYh8APQ16JmUCpmVAUvKzwwZ4forUkeMRrv3iksgiWwNopTuWtjQVGtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qTHuMLkLy83yAZFqyuXJzxMM1vkiz9AJcoybFXyFFf4TBFMSxDMCwJ6i232GPG9qdDvzJoNw2aDPmXtcnVhybx",
  "key1": "2sPKLhhiZVt5auqAKco2QpbZ7ksjwXNYyLyg1bDgyTJpyciFNndLXfdwNoUoptCeg2aL9GxsWz3fnL2vyCwzztw3",
  "key2": "5jdMT1ZCW5xWNKgvdX5ien3qWUvKtocUYm4PthNy9qfkh7PwGNprXnxbpy8y6MfUx6UjqTjMQJMnMEixkUueEx2H",
  "key3": "4f1JRQ8dKwAVjqpyZeDHskKAM9EY7BSH5o5PyNoDhUNhLsuxseexdFfhoL69qn9m7gyWVd1PHkDsPopGJbTPFrKP",
  "key4": "5EGmTeGFk6RSQEZJpQMZNFioG2XiZyMwQwiRpigENchZyBz811V9ey55aWPUbCbyXEWwZWyYucYqpTgW4VktXSaF",
  "key5": "5sewTEWFu66SYsgpqg9tzfknRebiVnsciy4mMUcATRjh2A1FMFaMm6edrtYWpr9K7Ln7X5s4hJMsC7Vd3BMaDVRp",
  "key6": "4zZVumkSzfw7AbbdwSVB5XJf92PNzC1MuiKaonFALgx7EwLpGEjH9MVBRfiygRDh2EDStjUeLGi2NUchHmuCvHEk",
  "key7": "5ncGW95ssKq9ijTsbEuiC7MUFPBTLwHC3PirPwsm18FQ6bw5tANP7HL5KN9F89o5jCMceD78v5CVKwGtVc6Nztwh",
  "key8": "4DQMaSAVE6u2ERYciydFn3jrfTL8Ei5A2q9Mp8v9fDtNpGbCMtzZPCPMGySQFmZc9TmvkzCrLAy6Wr3aLzYvwnW9",
  "key9": "4KGgdMR8zh8uc6Tfrshtk8i9HgH67SxGTpg45yhX86rfSjQJCnXZUN28An19FiYgpFjMwFXjBdHSV9G9WyYBrAWT",
  "key10": "2hrmpDLVVRA9Bg8iyHwXLwRgzDBdeBjpNey6WBtre2dKdiBteVbqTSZp2Bg5jf7VwXTq6Umittj26LdLirBEamZm",
  "key11": "3vgU9DmMWgdFuzyoGzANjAjDVempXrSZzjQEf7aber2drj6CzFe9myKzGmjgG2kjeJBfabGEHbgCASXFVzoJ4Dha",
  "key12": "5rRdcz63KK7L6smzwWB33p4JxuvTbd8AHWCADezDzyhTTyp8XyFpGvmDQdwXq3G3aG2cypXWeQz7bTPUAAkhyHaS",
  "key13": "3CxNSWv1DNo3SQfz4DaRdWQC9ftsgaGBh5VrJ9mQ6QwdWE6CktUn17CiE3yGyxh5gwxRngtg11ZeM2DRuA9KLdSp",
  "key14": "AgGakrWAq1MN2DetrPDZA2STotwLMTiBpiZofeKLuqV1eytaedaadikjckxNq7Cv5ontrq1FScUGKYFyjY2vuet",
  "key15": "3v3rokoHRmZqCsnHGMaUVnbE4jgHieZBei7tyL2kJ421FN2N1xpAvPMGBnGPWWysQAfpxnJzcDaEJpeTLxRdzS2K",
  "key16": "52qVej5gAJEHhmiU66rxWe9TcaMEp3EinGicSNbNJndAxckktM9fsRSe42DCH1anJsmnz9aspiUtzPXbuTfuJrRn",
  "key17": "5X1phXTVwZyb5xs1gqVgZ52i6jXdQUtNuLw6FppTMXhLnstRpFoiezxXQA2xLVdgmbFHVHqKmn796LS42WsD1xJZ",
  "key18": "3uRdWQ8r1QEiHZrbCkQRymsDN15trbt2id52NzVKadMFertLxUFveUGhG1PudcDFYTvVk45D5rpxJFRwyoaJanTq",
  "key19": "2CHpE4pYrek2Xk5WDahutfVZadD3SdfVTtkGqN1TfjPoLJRHCwEHJda1kB1zARqFYpd4MrTffEEGKQA2XfNHJc5h",
  "key20": "5esemN4pSgnZV2KKqs4w8ty4dZQbvJZL1Xy9fPg1ws7qqWZ16tbEn2YEauV9BNrTLg7bTnLeeNY1UYc2gokFJWQx",
  "key21": "55wEYXCdjuH5j6n6F3Wr31ospbjtJ6gzBtFkZWJjNhaq3zFXB2H4aXWgphS6BkgHxNfYPZje9V36xNqNBP2P1ryU",
  "key22": "aKZWENjzKvdgPKpWBEZQY9vqCN4Hth6vuQVNJYpBk5nRDGn3kUXGNKn8czd7qeS84MxdfgytAq4271iC9WrERNx",
  "key23": "5LqvWTr9GxqNgQ1fEKXJPHey9ydF9X7YSiJUrJnQag2ozvT6UUBj9aScaZP2TAqmAuS1u6kM3KJCg4nWq5nJhyLc",
  "key24": "iFH5R5pM3zZTXPz9WmAtMSJa2TiyjEgojJ6ka7j5bnjhpKnqtrFosYd37Ka5H6d2Dn3edZN1fGFcJRwSR1vMmu8",
  "key25": "3PQXVPRvtcJHeRtfKVNiMS4BgjqN5G3KGNpd3iMDSixMjkuQGVWG3rfSNZknmrXpKuZh99ZhkjBHQckYTRYh2k75",
  "key26": "49sncqX1VVz7g6U9Ukjf8j3XE38LvWVeQJ7wE3gfH5pigb92KWBMushrE4FuEwVByAXC23zBirNFweV37WdZudXh",
  "key27": "QW1bzbc52bPEde8HqV7gASyPFSTnbVcedTTc7edtUXC1k92E1FZdrtLpJtkVSAX85N1aJuLR2iB4CcbRAavTjq8",
  "key28": "3vJsFR9uPeTR7rRyuV3EbpLUCW1avoWCoQdmLSpooKc1nQEGPi97SUEQ8nbfp1XrWAPrkyNu7eXdRtzqz2dkZFtE",
  "key29": "2zXodLk7Cw9T7PrwvnnCHC2BnyVWLDgbw3Zi2KuLRd1WSKuQweZW9wh9L5nwFy4oncWUZCweMfUPterMQpkqDRfs",
  "key30": "3hVMhzmxbyN2uinFgzUSa8qNmBkdqgQ7bGAgrBbcVJP7HpicMK4SQCtjddnovvedgvdDJQ8EKyQ3ZmhdphVcvrbc",
  "key31": "5xxLbLyzogBYZhnMfLbU31TgCtySgmMgsg6nV85h7gGbUaDYWyxqCsTofue6BchUtHPZ5t5LqXJrXMC3GdW3aFj3",
  "key32": "3r3zpZShLSgzVdNjVuomJ73A65LBzz4WVhsDHdqCnYg9puhe2GBFj5LiGHBm59CgaWFTQ2edXdo7bdijY6aW6Yk7",
  "key33": "DCUvru3WWZHLu6XioiRtEAiyQH8Dn4Qweagi4aqu6NMyhZPQx6HGmQ8R51nwQVW9TnRx6xNRqpe9CCea6vpRojj",
  "key34": "2FAeXTDetQFNteCG4fofBsRMPtvhXFPxDaLntUNPBcjPfrpKMQNxPq2KP5qDLU44NBmMyaTVyY2vx43Rzi2XE8pL",
  "key35": "j1JRkQLKtkKZNhK47M2i7pqEhckqqc6nwMgWM4dZwHTpo5uLTZMNMGUiocnvW8TYHF58h4SyRQvBN3cb5hkYehP",
  "key36": "34ZPaAvkW15Xy941fs6rGmRR7GeXR5cfHvEzfWARSHrXWnswQtcvxDntMB1tzA1nqoGY4axnS1j73CS5jMWxTEbe",
  "key37": "5kt647c1UWQVPk4GjVYk26oE4GQ31wiYjMa4rdZ8jii3E2RUtE5uNdrGmK3oJ4Dub5Ez3vrxC2xWj19uEdb2WUP9",
  "key38": "3B3EtrV8dYYKbsP6mf5apYdkoreKVhmLVCE7WJp3JDcwP5qJP3cTn6bnkYHbGkQRXwyd8wpwBt7T1jDv6pAERUS1",
  "key39": "4au3dXkw8NhwL79P3JMARHsu8ebFfbHPgMNyc1WXGpS4ybPLrmrdGtMxDu7yekPNJwCoS7xs2XoLg2RncPSwBhck",
  "key40": "3SZL1oeVLRfC4hCc697u5APiCm5b8DuH7BhxsZEJeD6c3MwUhacR2QnM6AK8KenTkCd9So43buhkEHARd7RXciic",
  "key41": "E4YvxUPDnjmZUMEAGSBSKuFTMCs2QnecfWnCLvVfGiJRCEo8gWMxWFpD5RbS58rtEWW5VyUuewjwBWFqxqiJNic",
  "key42": "617zisbrU87eEjHWYdCFkRFrjvScyHfSv5Xmxxv1XzXy4zryteunEmTYGkNa2CuWzTeQi4UR9ikysja2ThbkRLn9",
  "key43": "4myrvLsBcBQBhEe2otxrARrxWRRbixxfhtotUSLEeNqey9mZUutQ3j3AyVn3rKZFb5USMzbrtBaqxEmuiCYdp68k"
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
