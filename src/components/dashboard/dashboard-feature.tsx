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
    "2cjJ6VtaphVD65V5c3x85GRydQ2H9N9ibj5sXTow1ouL8xU8xzvcqGeY9ZUx639oAJRKnrRXiyEwwz8US5kYUCbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eDAriR336AXNMahrc7L6dFrTtkygvXtVaibVNL8fWC9Q2aH3EQQdxEfkS3HCuFpU9qjpok5Gz9RFQbVmfy9RNnr",
  "key1": "37CHrhqBQqQ5Azc41nQZnPQKWAvTHQPPihxkibSNjVkGrvQFAnGiNyeawZk5sH8iEe8CtiDxWnFU88nFb3cKNWBp",
  "key2": "31fNxnBCuk8P5WAkq9gyxpMF7xR5yuLDdMgJRFrshZGDd9KHnUcuKMyRXaQ2Mi1ve7cLd9RPFFoU5edh8qTLUGgR",
  "key3": "2bw5UAzQecc6syGwyfBFpJ2zqgsb1PeSVs5jC5hTgUQf5bpdZhJVtFaJb9U2mvgUsXTJt3JdAKRCacGhLRTbBZGf",
  "key4": "2g7x8hkGJwmp5Qsdjc3aA1AzHKsiNLGFrnhJUC2d7qMktc9jvrwbFtCh7BcX4bcGDc7ghFiDBgHnjGftd7hsxANc",
  "key5": "2eY85mJGr41JW2ZcZVRGYwpouzxtRnjtq6gAqYuwms6gSy4d7j7r341XJ67it3krpfatasBAQ2yKP58aHd5qPTjS",
  "key6": "WBE5cxYN7CpFD2WFE5AYbu6sE218zNi5zU3gofx39DdTK9qm6yog59U4N3DP9h1L15SdYyD6b4yCtK6GYC8ReFM",
  "key7": "2FA2obkP9aDmzZzh2p5Qpioov4SUQGX1PnZ3j888hCy2J3cT4UKsL2nQceyW9Ms8sbxLyyPFABR22i9QnA2FcgUE",
  "key8": "5ZmSdiuapVhHimFgihKtPmphDUEGCVwkTwAtKwhA39LJmqbB99U13qJsAknMVjVuQE8j3CiFrraXNuUr9RYdHJNp",
  "key9": "fYKKgos4p6ryf6grQkBNZVeePHYmGTVN8i7jio6neCFiVRXkLM3sNS9H7Ty81jx2gjv94T5ThBNR5vnZkzDKyp7",
  "key10": "323n9imDcQKYVRakbYRZHu3MEW27N7wsmqnpe8JwavNRreiG4WtqwXtipogztLpQeGKvxEiufjYqQPxhp5q67JAs",
  "key11": "4yCbUrTsq3Ye3LRBAY2tjJ5qSiKAVSKwh9tuD7VYHKo6hP8NWwHC5wg71VLUvcFX7xf2jvbn3jfg5CyiBdYCQv77",
  "key12": "5aZtfq6uJDJpRDX2RfHfuvgpGgn2xfKSZTAmiyuic8N9qcz6vyNWebh8yoYEGxTCKcL45H37kfA5Smt4oGJVPgoG",
  "key13": "FDpXMETwjrxrQizBN64RontAhF4UKnPTb9ufupAQGsY9CkjCXx9PiRazBfGaNGWoMvpDFdcm4HV46kgiJMyToud",
  "key14": "3kgvYK4YCHXwaEKqqCCXqBzpEj8QAjKP8N4jGWDYdVezayNPjS6YBBF52Pk9EueHmkfuUtpsc8QXaZKmteVFYU5v",
  "key15": "4dk7kFC1fjNVz1bxSgwASTdPRbgi2K2c6NHSSzmYH51xZ58TJPwMp3fakMxqWtfL6if25MVdagsHKQcfYDdteky7",
  "key16": "2nPwZxr8bW8DJ7APbDPXAWwTwcXSYaH9xZVcDHw7g9XoA2buM2peLHEzBmYfHZaetT5uSdUURHwMR4DcCLikQG9z",
  "key17": "3avywu8ecDWx2B9vQLUiwPXBgEkudiibgSMMyrnxsuoHFcfKcLTcpoXfVkGWpUEeSZDi7QX79QQU7nqc6aYggEM6",
  "key18": "5f6oFateCzTK6FgEHe7MeDHgx1EzoWmDiJ7LeV9Z4zxdRJ4QVshHDx9HFs8fNtWirjbdUbSu5xg2RFWRpj1fAYkJ",
  "key19": "58YFBvExuJNwZYA1B5Yf11a3d7XRiTC77pJswrnvchyuNaAymYrkCReAu8zRzEAgTg44eFg8LTHtcEThret4ciPq",
  "key20": "37NQr6o2o2Tm3MMBJwmuWwsCcvycL3o3CFj4rtmERvWhPKByGZZ2t2cx5otKM7EUBQT5wwJvNKgZpuPhpWqZV57X",
  "key21": "2QZiZagGxBkggukf6h9w4X9ue2cEB3AVojZy5DPMtToNb3Xd5uGRhH1swr25jb3LHUsk1JCAXsam49QLf3n2zshJ",
  "key22": "3kjBHnDwpM5DPw99U18QMXbKSz5pUMhqnn5Q9WtPs3BERHkDg2JBS4dRUycN7PYzQHwCTFu1W6tAEwwatbGEhBUN",
  "key23": "3vGCyPVEAzLJQPWsUTjEWEomN5AoNzajot9v65UsYFaGvLZuz8AbA7oipaVwNxBFUPrtWUiJuoQjazE1UMgpY7ZP",
  "key24": "5hwdueJLTFMUqKvgsZYTH3pUABNxS9BoiTNrkyJnxpyXXMvvYkSEndRFYcX9EW8y4y1QWUKtfFerJb57PvU5L2vq",
  "key25": "4WPnDfsrrtnVYKazuwesxehdgaifqfWBWhgZWznL3UahPdN4fzwVKhMCL1bQMuGDh9YjPMv2Caef8XCo9s1ucAeQ",
  "key26": "5nhhA48xBSgkj3iFQDTCXi6HZ1HAZn8hYvt2f2TWYXJrcfh4bTBvs1aK4t7HLRNZRj52161bei1MUyorLS4bsusk",
  "key27": "5StgtcEKv2a3vZCMG2D97HVoJKhVFcUjLx4jkuPdtLijVQaVpaNubruoR2DshCjitwVujD23SBWHTjWZVZ1uxEc2",
  "key28": "2Yi49o7odPwzsDXmudFwHkj9rzsv5qS8stwyU9NNC7c44EbaGBcmPmo8hsscMVwfVTusS8tpJf294RpVgUkLiCpu",
  "key29": "9NUHwPMPEQyfjK2jGRx26k6ENfT11Gv5uuT7hPWfr8fF5BttAZxrGcLCPXtD5KGxDtcXSFS8TTfh3vj5f3e8Hbp",
  "key30": "ogVqb3f9aNaNPeyvDVj3psi5rswtca4HHLYVLF2iUdJ2TGDf4NF3PmGyLeWKZs7rhKjdNF2mNaF77nrDp4nxzSX"
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
