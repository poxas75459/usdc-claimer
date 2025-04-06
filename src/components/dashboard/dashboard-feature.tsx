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
    "5aiaYoeGrGhupuDpDinxJR2KyVQk2EfkGFubqm54ouxj2twk4eMkKbaDfRCtfV6zAeP8nicH2vFF2nWdpR3PBem8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wf8fCoKMf5moroqynnQqSugKw4GEwk6H5uW7ixSf3tHTdaMBDfq8R95DGrvdjsiJrSeHmiJpQ9dGahpge6LgdQv",
  "key1": "FoEV1QPFqaKuq6E4PPiUstik8xFPKYCsNZaNrudBVbgRKNVgUHaJU1LHx8fg7U4UU8mYtt18wEFVoma5izikGrT",
  "key2": "58Wns4NDBe6pRrScs7GoD91zpqCyyeEGUebVtn1MbrU1vSfPNm8gF2MFL6kYfUdXrcZNngZjZ6uEWD74sYrCNwnM",
  "key3": "urV7B8FV9baps3HMUpFTXHibYdT7AkumzJGVSXuegZVShjCmpFpCZUEHLsDk2UvcoALjcudu1qMbMM4sbULQi2N",
  "key4": "5RPqaTpiCRJWCQZ2Q18t5BoGGbogr6ceTyUJr27xg4hykofkJkQVhYTwp4Ynnm26t6mnYEgyTbfzU2EmGvB3gGAi",
  "key5": "3hRYowPqZfWhPU28dRn1xeMYnQQXzuRenqhjrVCAMpJ3rsxReHFcNHvjBERRg7eY9hFRyQ3PoKtDpR3ZFkJszzxt",
  "key6": "423aFP4aayGoVU2MBWFEWo4jpyLFrfoaDeep1EKGYJNz8Fupix7iEzNoBBUXaCZhuPAjFkrgMSEuTyB2LNCEWRfS",
  "key7": "545X6B5Q1TJ9W5GMyGWcjcjutmgDuio9yti1jLwdTL4QeLGSg7aVmCU24EbXPSsjQ7exxGn1o7uHYA6ygdmx956f",
  "key8": "67RpGPYGKsH3KJYsS9pLFWrgGv25RWBQpCqomu1qii1KVbQTcBG4x4XvZXHUExbcj6zPCojna2tLtN3j4khthEcJ",
  "key9": "ESEWeLi3DqXhQHJnwzWBRadRcqisRAw4u3Dto1UqXorWxC3Q9bwUXhgMZwAozuNtpmp58ayJHYLarD54BbBupCh",
  "key10": "4k8r2JareS27RiRhUsFwQchm4ux6GKQevHYX13Exa8LHQLwHLX549z6wWmu4NceGLBu5Vjum3r1wa2z4oF9kGdGo",
  "key11": "2SL5o1nC1GGToxVhkis3KFjUAaHjTLsbn2PSJzvdpTa9faBg8LSNkAJXh3Z383kUMkG1vxy1qhpC4RkcjDFUFCRA",
  "key12": "EGWxEHFqW4UL6wxVnHUPErDnyZUvhCzn9u8ikVYQh6BeQZ7b3PbvzHe48FnosF68extgLjpERv4WhDNXHjNwCjS",
  "key13": "4UnwkxobqRBvLoLxjNccZsRNbNVJq78EfFNu5EZZAQmNvUSyKmaiJ3q3eJvExRsAfXm6UfNsAPtQ1Td7zSGqTEXn",
  "key14": "43mNmxSzZdHHzMCkxxKJ2G5oauwTcbmD98TW4yVPMrU6un5WHd9eyrPW2LFFzBT2fmAy6HPHpLTVBDJrdkCRAPbq",
  "key15": "2QsBNBwsrEirCjJwgpyvcrkjeerZCF8LVNzmTb8viaATd4rGXsQkTduGPS4wEVGjfqhmVDd66nSYFdXpVzCDXWCW",
  "key16": "mMshb9oFnu6CoXKyguErrs6r7HLcKnLf6VRJPki49hcodSaYJzuXXTmRGo5dviDtnAwSCMejX5zMyLmd2pSb7vi",
  "key17": "Ejt6cT926pfMCKBXJRpvVbabpxUop8W4pTbFa6VNcxWdBTBQVsgZvguSTQWv8JAKkZgqcUmC6RufRkKR7ywL4mm",
  "key18": "3NC2mT1CdcE3eaB57gSa4UcsfS46NmuzaBRYPrN1Wc2FBw31UA8fz1uhcfPRp7wU3xGNwzfvSG57r9QkNbJTZorH",
  "key19": "3HHuKrnjvfnnyJYb492kbXX26XdxRRmEgbs9o5FhsuuT22jV8uAhYRt8Pi77nUqUpV6y9dVTpLqNJfP3oZdT9q5N",
  "key20": "3N9APsRoibKS4ayDUz4wWGznVzzTkVzFBP39MovY3Rr9skaDbnNAwdvbdgvByF6reAqVMGPQ9ALkoveVXgqhpefm",
  "key21": "5M1k5qkFtxR8qqgRHHsigGD21g5PZPSmkkJbvLUkLHjQo92x5jmbTH5HsNUKqHnZrusK7RftvDrTbyjVmVqvterN",
  "key22": "3hC2MjNeoHCfJmJfnZs6Gxw2sgzm7GBpv9rtkTxurEcyykaUknNB3mTfFyVSEHNRnSd6bwE5aDYjRdZZzvxFpCL",
  "key23": "tMZAcyrx4aZqZZJ3vFx7yqrrVi7YEve6Q1qVCJde9Us5tUPfBFE3CQtJpYqeXa4uyf3rUKMfxx8uq1PL9EarmV2",
  "key24": "2YBJQ3sURSWbP4yC6paPFuMCA8kBWu6edw9JRX9keFdqXMCuFy1otMZGijTZec8tRs2Y1xhFBqfsP3Muk9zTLw1s"
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
