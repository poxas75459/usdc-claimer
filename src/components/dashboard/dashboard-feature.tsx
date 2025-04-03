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
    "4dHxtzTYd6o3uuGDdbQekvpNLYXtaGYYnT9CgNonzZ7bHj1LmPz1kGWq341FSewwoNnKoKKCfDKDH6Y5dUNRqzt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouCZYfnM9SqHK75JUyYEzwAhbuRSTPGzXBRbZebTBqapP2GApTNH8jLvpzKiJC66Cdm1bqukC9HJZE9KMDR61Uj",
  "key1": "5G32DmFSqRVQEL2PwgwyKmfs8pAaeYQykWqzxgqrJAD6wJ2F4HqrGjyf6z4hk17yzyFdB93jfok76csyYMGXGJUT",
  "key2": "2WYq1UUF9bcgfdAbJCtcH8wB2B3tFuUiHLokmb9s7yzUP46x8QVf7hpNpwdy3BLyER22pwUyoRaaprAjyrH8LnYZ",
  "key3": "5smQsXam5bXAH7VcQumSJRVqcBBpSPmTCoWWboQZofgY5U2CF62uZsjk3WhWtxakz6tDdgLLTDDm3fLqi9W5E4ZC",
  "key4": "5WMf7axTzJNxEPwjn3tHvPfXkhwZmCLBAMeS9PnponD5RQRCAvyXTzNpThCPQ5R2dLnrDZpF2rhCnNUsAXn9me4A",
  "key5": "5sEYiDivwKKqPrLKus1a8tqYzPqf1h8BZdTn1s3bEmeyVBfGAMdqgT676dudu7Bnqfeng9zGStNeh3qMF8hk5m9q",
  "key6": "5gTHvtqzbjfFPT5J9QXBXsH4snADHcovTGXUKZv4KnX1vnFLsBv1JpJCQzsKT6d7JFxtYzQ9rPVdeEcqjysRpMCy",
  "key7": "3e5U2oRkp1LfEYM2PPT969rVSLFw854evnrg3J771v7W8tFpVoXT8cBHJkRYJrRnamHL4beQF5mZPsqbMT4K4x36",
  "key8": "4SrRsRnGqatTg41J8SQHVWPDKsUxsyi36TT2vijkJM2shENzWiuh9ZJPNWErvdmxFdkQHJD9wNmsMWJ61gqRtNQ2",
  "key9": "67DnHnYvC7M7cJpoU8Kx3AXW8JdofFaU1hEVDYmVS2E1JWs74PqusccBrerq3d3RCFNJgWpBSqWay27oS9G1xZPU",
  "key10": "46Xb7yvKJyaKb5QStuQ4rcKqdttwgWeKM49AVLYVvDrqkgA3ph7bEUiAFsGQqD3coCYWSuXT2cpk6cjJMsoDB4Bd",
  "key11": "2GZcnzSZbaAAJ6rNiYaiYL8BatYT2b4pxu21PmkAuXCojNfcthX2EPTTt8hc1Wvd25Zaau8mj24dNMUEasgxaXhV",
  "key12": "5PKnNqoD2dzwvddSiE4UUxheHmh2Cs1X5zc9ctukhRrgE7kyXcMGkkXmUtzqMN72m1NC34VTs4bC1Ctv2zNV3oJZ",
  "key13": "2QpsjuD8k18riPa2jTpjREKqni2L1aYx9aDL2oMp8LmYGCJbmJkccv9rHkfcp58ASAE3c1EoMgZD5BjZatHMhVvh",
  "key14": "5cVyz7Uy1pHVLRdz8PcguTJAHhi1i4UfQcZAUFVB79pMva81FvPSGFGhzFLzbhp7FUrd4dUcAU5hrjh559xVHvw8",
  "key15": "2rPVNHu9VLDGxBayPe6ci8C5fzkJj6gu1zUTH6fak9FivY7HW8VgxLPnPYZcBYZWyceC2pHyzbkQsQuuzjMovEhT",
  "key16": "2WiLLQrGSesUaJPbucrsZVgTdAuRQPMQATWQhcrQtoKikQ9JkTAvCxvyVuZQGMUWMBdHoY61bDr1QgC67qjRAnYv",
  "key17": "3dkp4fLnbskuG4FDrfHrBtAk5Y2DhddySmVTMRAG6r8LFeLv8rCHritC7qGBN6QM4DTmpCodo1SjYiQcpQG5SDnc",
  "key18": "4tf5TXZVkkFes11b6XcUyAznCzMtLXhcY2Yyf8fGo25RsMm1WNNhvdgpeJ9e95ZxmjbWnqnLEZaqNCTY2BLzLpwJ",
  "key19": "AiPUmiAGsxNG4wv4riJzJJZFYNMAkeS3NtrSn7WwvQG6CybCrrfQ71Jy3LWZLAEWxFi8Zt5ZMnxXy6dNDbeY8M9",
  "key20": "4gsTEUrv8BfHkyQmxt394c8NuMFcpwTrdv9gXqpZ9yQCnw1KCXrYfdqjbnCdHZJfDu7uTjd2iiif7ptRa2HgiBcL",
  "key21": "38VC4dc7QDRkh1dw576RpuhXYFqLeP8FmmnFN9JQe84yeatw8FRR9Nev2uYRDW7Q2z6Fkbe4Ana8LABuAikUTH4e",
  "key22": "4mLJpvPmj3JREiEvFzJNR4fgQpDCHoxhv8dxiJjjp6AjcmZax7pNjVYRodhCv24paBueHCJ65b5t5uBWMWb1PyFz",
  "key23": "3fy4r51ohJXKTzRXcM7ad6yZXm9d5LaKdC2kCD4gm5U6daT9nv9vwJRa62G4evW2ndBTTmZSJP6WdTKXXoFBJ7xf",
  "key24": "3zXZZyijNnahNZ8QRUkckSjqm645cQvL6CJCA4THWHkh82ueNdNto5vCtXLFiiiYyQu6TmFa19HReCuDqAaaNqZQ",
  "key25": "WZWeZqMHL3DkjgKo5aDpDMpDVBYHDkx4DHyUCJENruFNFzhvefXvADVP4TqzvmB6TawkitYXhxNcPQfGVLVbBKh",
  "key26": "5XJzrAGf4xGgZLpAa9bgzZbngAkUyJDZkshemfoNC4u7X7m54dyarMGWUWa23HLDu69TrocwGZi196TEcDpR15yD",
  "key27": "54umJpMcFTGWgRXT8rnJ7paRVRATeau5GQUf4QzQdpzJtSX6675fZSdcGfqUBjvXG1XeUAFaGLAEPayY8tZhy5MK",
  "key28": "3bmvKV7wN6jh6ofSMbS1g6i7DXxXmSA6FZUT6KAaQQ7CXFZnSCKpc9HGUghx9fRB9w2bVF8riLt4cWGuFekybBW2",
  "key29": "4Kp5xZ6vi45WdsdXhJGoo28djmNcGJSDMeP1wgx4Ep25nvmX7SnhS7NP4n4kHd4CeqW4GKQsH9993MfwozZ21r2c",
  "key30": "3zDZSpFPoK7Z2dmvA884sST8FpNE798pWoLVfVvPSTodZKxgBZWj55aHVKqWHKpLMvEDLibc4PF5ekQUgtYAVBfD",
  "key31": "3FA5ihESmXW6dGYca5XSXNmFo78wkk8XoxA7UXuRCqdDvV6zySz7R7HCQ4FrD6seze8gRZqGhNmZaCfaF88XVRsY",
  "key32": "5WqEkSUiv2Ykhrom7m36uJqk1kuLTsc8jix46FPrk7e8dKmT5HBKx2sfffxa894pH7Xh3Vxm8Q4LJHkoa2KbrZYP",
  "key33": "3yZfwn9eZocREDKsoFQG2AzqiWzrLihgiDHbmq7jSTSRt6NeSt5dcDT1foLaaGPP9AG4cQpTvHHGtxyhNizjn7TZ",
  "key34": "mxEMDUvLfTQPptkmy8mr3M5xfoZudMkCoCDY8spbcaNzWtEJTuXVpZSEL3a1i2PbqscBnqCBXxAbmFAR6fRdBjY"
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
