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
    "2w3TRdZUdvXTpf3vPnfRMX54qZfxbU5QoeLrPTM8jCBtLNNwS5WGRq4mFpgAY71s61FPahow8Lr21sE6ax4WUXwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38diGN5mLwXY9aQMxZiigiUE95opdcUConA2nsugWYhoksmHKJhbwkKd2sZspUTW2E6MsrCXSwogF27GwF99TcXf",
  "key1": "4bA2CYyaWYoySDMMwr4Cujv7EHF2nP2Fsc22cS27Z5mq4sKkPmsBkHm7GRQYhhJAtqjcxcfYtabNC4ve27ibnmzo",
  "key2": "4rdmGwRLhRDqLZarPzKgWu7C2zGRyDSauXUjNyqS8a9vwudpZtp4QjQMqohcrWdg5NEZQsr3fGUYHbbcppy1xmbd",
  "key3": "2CRL5opPyEvPG9QnhnRZ9LXAFdaBGqPh4wdRNjYmR9jQnpy2hih9ot95tviPSnGUrCMDuHpaUat5kapAuv3a6916",
  "key4": "4WsxTtGcygp6cWsBRfDswbDWAenv5hvmJPNy5peDW3LBN2wPqhECF5qLo9HqUstRaNk66vpR1yPk6eRMcrWHZnSZ",
  "key5": "2EbZEiw61wobBWb5jUEynBALnzFNL8Qc8xfJMcPM9mYqkPEQbpWSnzQhEZX3ifQVnRHjXGVqeH2eiVLNCinn7JTu",
  "key6": "2t9Lw6g71BgrffP8JJmJ21QskA4r8puAMQNrquLCCUYXNPLA7r1Zy5CTi2GXfqRvM3uwUQYoHLwNr9pyHRfGorMo",
  "key7": "5VYamtPBZEFMgY5hmAM6mPh67PyJHz3c7QxKWfcNDqm1S1CvDfbjST3wP6S5PkZWvXGoVMpL6s6A8Q3GWFi6HQ9X",
  "key8": "59Sm8DmvtPAYFQJe1RAVKnhL4ZrgHxTdhWgQ2McADbKEAnYGXKVdxgabbBwN91WNmRdg5fYBJE8qLDa6mmYSp6Q7",
  "key9": "53sSQJJVmMEtDaoDGuD71i6eSgTUHHndStBv6wuggxiAfocnSgkaTb9yxb8cU9xYdi4mTAgaVSUrT4qeCv1xXf4b",
  "key10": "3sSrGmkZF9tBmbDz5Uu67wQu2PQx2y5XFe7HmSun1w9QNaR6hYRWHnsiWTucVmvbUv5kAYA242hMpkN3znx91SZh",
  "key11": "5tkxrSUafXvdpdm6dSxxyhZdX2ScNwmSiAU5jD2kFm8T983SvYdhHJ96KE4sW2rRuZ3dBC6JfAhjDzQaokfjuHa8",
  "key12": "3mCna9LEUuh6dgyGTMouxhgHiPY6Mf7ccnhjAK5oze6Xx8fw3Rtqr5zRfrUHpkoW2cYN7KvzGiZAKrkLSe84BWDe",
  "key13": "w1s4uUZ9Az1AKgW7J8ZhiUnvFFyXMgd2e9KMcgvJxfLHVygcEPoSVYHmMkB2EDBBnoeYjrQVd5KmFQ9hEq6RGrC",
  "key14": "5EN3zjbteBZckh7yDJWPECV8bbQ1XwsLLkUb24h4uXuSmYvAexQuJ5SajhSy1vKqRoMs3sAhG2V3ZXQRVrMJX7GB",
  "key15": "5fxoGiQP3XKezorLYwaTs3eRCfEsRrGDLzqQCRtRySe9uN1H5fzHLfVjBkr1pirSaucc2W2DwCwD3kZvhrCpLR5g",
  "key16": "4PnUz1gYJoUGFkBHyfH7i268EiwJEDzaWrbmrwT6CWhnRFWFWn7CECC4SGbw5T1nNg2pACdB8pQrZixvsGs5xByr",
  "key17": "z7dbQwZSRALA39ta7ptPgb4chZu8jYAnzKQwJZJoF88zGKxiNCfVh9v5JZi3qKrbTNcHx4C7LoenXboWKC7C4XR",
  "key18": "5iBLNws6DhkZkZjKQGNffVMJAfaYRy5Yh9XAisuTCbQThWziBUBFMqLeGb2gQ2EHjtwk2aY7sQpuhKsMcqGsEe86",
  "key19": "4mUUyScW2NNwRewdbk5Kn4TX2hggTU9Up29DHoBud6eBpRtnFrSVodEkrSR8uRfqykXKqV6CBTKqMYWU59EonbHq",
  "key20": "3uGXgoJs8Yt8FZZWh7QLVFuwyFmALdZohmCeeXSeEViumzGPUXY9tHsJrmhymi6uJXrjmc41XQqsg2BBFpHrCan2",
  "key21": "2UTyfWTBEtLTiftt67wpsmNG1BMsuNB1ELPVursNUErNoEKunaT2uXjzvYiGx6K52hN9xr7v48M3sRpLugK3a2i9",
  "key22": "2fBE72HBCgWc24ykVDRwfejoxBVRkZj9TUKFew2Coqa8Kn6Qym3WnWuCMYPMWBDGmaCmBtHiag1VcMwn4hVWxFMa",
  "key23": "622oATujpxHkLb7mySFMwhrjHdKeVDxBozYbC7u5DbmPwsb4bN32BTpkUJr2tXDNg5hw3Awj9aK7xdzJcStJBPhc",
  "key24": "2hC98Q6KD5izyvMJiLMXRvrZxB8eY9WQDFWKGQxFpW31GzLwiRq9M6rHNRErw8DGoUPHTsjtfgBw2zyjajccmW5N",
  "key25": "4Es6DesLMEkTQetC38LKsz1CT8YPzSst83ry4SxrMPokVsXDGKXiTNphQeqXa1bcUCvpzHyAps4vaVkfbtiC1F5t",
  "key26": "3DKd6sGSxEgWRKsGE15sCgkzRWfGR9FZSmemyBRhqUk1VkqxApXiAg9g2sQxq4Dcj94BFjEvrmWPGjpwUtTmYZsu",
  "key27": "3PTuQ1bs7ZnixhYuDC35AwNS9m7njHQ4iBB1qxf8EiNy2r1ckbUcn52FSVx4SNK4LByt3hceAxmUwrMzmYZRidmL",
  "key28": "2BQWfxK1cYG4jdpTcSUR3EXuKHcnu7zDZiQzKZjAnYAikcLrFQmR2W6m5SPqcGsnzf27tZfKwfXUNo76X7Tkt181",
  "key29": "2NM7cF9iPCtjDqZ9murDvyKcCbJaW8xrwFH8rdiWQNgNzDweMsBkB8TEsyaDFxBMCGnBZMki6R2Kc5P3iENZRsW5",
  "key30": "P8WhWeeN5tGbKDXyqbb1LGJzJw9UrDb3kEjHun7zSEL2QWSFrxiLH3qethhVsVRCeXeV6cW9AxohNAJ9Df4MbRh",
  "key31": "5eT9FzfJfrMsArBmhbQrUiwYJtynuCuYnwnpKbNRYqJoEUN1PuGsymtYRdAwLCoeqii8Ffz45pi4fJoBSLCZi2ke",
  "key32": "5GVXBuXkngNmNtyJVrP8zPwzcwpGvZEz1m9bzvgqAFTBYV4CAx1b3uc2pKvdkisBd7yg8nekHjj4K5LhmYLHMFed"
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
