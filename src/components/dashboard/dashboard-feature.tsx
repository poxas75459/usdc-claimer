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
    "2SVQDSNVvSAkQkeeTPF6vbEa64mWX8J7tKxULWUTs9s38XA27xGmmVJkZzZTWzqTGGfP86a4MvT4HWVTaY5EqNML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUCGyvhCaXnt699fyR5texbSJrRY8U1EC5xy3JU6Cu93b4pnxYn1G8ptCVMbrPUnGcVJjA6BTf86WeG62C5bdtX",
  "key1": "57R9FH1VoT6Rq2UzNquFQvZNUBqBrv8oCZS2QVvpSdtkB8JP18bFkbEVYvJZeBnEfTvcEP1tJxnaoxqfcPiqdw3t",
  "key2": "kTedqXutUPjWQx2bBjA9uugzHYLLpqv9ZHELFCns2acjAUuymCZBe2pFLT114deBfkU7VeMoATU6ZBwV3rR6mu9",
  "key3": "5kjcTCWw3bjNxHtVdxE46E6coXEiuqxRNswrtnPvo9h6A4d9KLn5RcyUgyHsJPB1nut3p1M1RnoBuch352h27DUF",
  "key4": "56mEp85haiSvMvzPBY4ijSeHt8HRcceZLd28AmY7DaZP2WMWfTGV1t9De51U3xiCkjYkipd86iLLeGw1neTi74n8",
  "key5": "5pJ2CZZg9REpttTLVhajhjSggwjUVAdmoi643y5BJrXmZRQoniSVBWXJSf8en3fHuWzioYkdY7epGjnx7Y2sjVhR",
  "key6": "4ubApeeduX73mo2FyNtVd9Uc7v9zaQE8xP184uH8EergJbe7Pkqarvax2JU44peTFaQPRxdpAiucqegiD4szi3Ec",
  "key7": "37VN4GTBKNUxyr1rbfLHdfCQgv6J3ivz2S4ZD71hEJSaFCNZ56A4y7cm9AvYERwq2GMxDHsG79ttPdkpL36KJirP",
  "key8": "2XxecBzAy7jJLY8QZPkNRAMCjh5FwRk7vrRJs2M3kfJ2vNQy4iL4pB71b5gc7LYj6ri6qeX2Td7WjA8omfEnN861",
  "key9": "31FzVSnSJaqpschJYunoLqsZ1PQciKvDQrAUeSterXZyCBbDB8iJrwUfPTAz7usB6L36NAybQ6DHbnNSUeci4rkq",
  "key10": "5bk1Uv2NcCdRmSZXoDt4KzHaw8g1eW7Av7MHGob3J2HXZbQTpU9bjn1Yxk7soNekzXL9BJM1WG2K6GpK3Kt5VMKn",
  "key11": "rLKbW9uEWEWvggqxasdterbG3hUCHhzciDtkknXK5uNPg5uGuFcDaRa3NV6pFeDZ1s9WHiGaoCurewhC1bJpFig",
  "key12": "2edkSGP2mAtrHJZuSCAZX9NQqKVYgHEhMZ9p1FyEzeg8zdaP5P5pvCVZDHJJtqs9m2rPwLGGsTNDiEkjW25mzXmU",
  "key13": "Nv23rjC985TuEuGJpaUBCQVipVX8NZDfgXbFLoGvUEx1Ct9rjH2MZxXY7wmEud7ooHj2AgoV43K9ZvHC9nXWKtP",
  "key14": "AM3TMKaBMbmGzX8CVi7mWKsUASSoCRjHtHSQKv9d7hiVGEukpvXNStdQB1rPjRr4SZmKGpXkoSJPCE4f4SoFWmu",
  "key15": "61LyeShbrXEbZ7ajVnj6AJTcktzTsRMkAmppsNCZGBuuep8ZLxxQzdijPWSWxneiRSqT2KgFK6TyG3X1L9a2az2H",
  "key16": "4nRxjCykEh8G7XpJgDfLU29auZo12CrK7R6k2Wdazv4LUa6tUputJ4PX7G9ovZRK2PMh6eiqtie1JXk6zFn8zzig",
  "key17": "5MLxEvyufYFjHhnHEapJEmcjwdvL8EFyVz8DiiwxMHSv3jFip2vepiHSmZr6esFcJciSHEUXVN8i5mxC1wA56oro",
  "key18": "3ShXVHX9S9zuWFd2Az27HFNDrh9kNe77NunxurVN8ayrXCpE1VRA5rAetYa81SqZiRrELZWGGKZaUMAoCi8KJTBZ",
  "key19": "5LxG9RhTvyJaqPrwmomLjRkDdwxZWgdZYciEZKq2J9t6vQYHrYBFJPTBALxW8S5Bm1AWPtXpHWq841uHNcgi1qJw",
  "key20": "2Gc5koGTnph39u67kVSFi5YtcAGWdQd6EscE83sv4SQ9CQvTq37odppccggckrRtQaFp95ckmqQDh2ovmVgf8HRc",
  "key21": "3ZWhbCQrU6XkynCQm5mzkumvwQC22WMh3bCpmyh3JHLQq44PrQzyPz2t4Jd7fnxbHVCzssZzmcd6x85TQ4JoR5iZ",
  "key22": "3GPptNkfHrU9b5Ayst1EjDafhiQGJSzvLTeam1cFm4t2d4XJmHe4E7TibYqhrZYNoHC6366LxFK8jtTJgxnzk9yf",
  "key23": "59i88PzoMTE8YC5FLUwPRLnVG8K6MfbMZbWZxX9ePauYKmUa46Q5skp87t7GDmLnb7pvuBn93aMAoG9v1PWtvoqc",
  "key24": "5AF28Yjj5Q8H6CzcBpdA8UbByGFmJAMGBPibPWEiouPVcfNsQ5igfg5NeUimv5cWxjQgRjNb7HkYqSSVDaRkWf1A",
  "key25": "4wd6Jk61Ekiif2sEn5iEaNb6tw6cUwfihPGhV47iGXDDBvciRvD8MK1JyixrT5nf5rbQC2m3QnhTTJazSioMncrK",
  "key26": "LVMyyZzAyDkQMdh9iXdMm4dG9XmNbgNk9AMG6AUJ2mizCPWRhm1cbL6ZanguNqWeqQiVXHsY6bkNFKjqS2sbeAQ",
  "key27": "53UCYZxefeVrdHDEhGsDBnuy1UeexhjWNTWNAVftaKZYCtEnXjJcz4anZAXJoSYCa2WqusZm1GE7MiLshjw3SqPq",
  "key28": "5BpvLVFMcq6L528uw72AnjRUt9SQ3PwtQxz3T7WyeJdL7uFP5vWN2jRSu973RpLH3FGKnmMvyHdH1MvybG6AdKzL"
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
