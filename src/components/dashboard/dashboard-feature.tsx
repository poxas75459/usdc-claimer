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
    "5SPPaMNjTk7uBXWszjyaRFGxHuYSdVYyHLy4DgWkzFohG5oNHcdq82sr3jVg6vgWYxkD2Uz1TtVW1qHAwSNpK3cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z7ve4ccwFxs5quMQfnihVBNqon4xTVVBS27W6dcUo9JXR7A5efoK6f2v9BbJoAib9f4eXXxzQsDHf7hY4k9aMML",
  "key1": "3FVNwQxskcBDKZRbDSMGFbTpJoWbcqLFJbj4RAAkWLFJ5bp2Y1jqi7n334w6PKvux3ngBqHZykf5pb7xtBD8Y3U1",
  "key2": "4pT5Bwv4xB3XiXxoqEWa4wFFyFEnEL38AqmqsAoHxdfgmNwXNqLV88aBSRZHY4Yj84wnTcmdqziDVbDL4QYzSLt4",
  "key3": "5vQdwXHZYC9CMUdL5sgH9FiEhnsdkc5j21TXPpEUwbdwRr9sJGEwJLFHBuYWkjX5DPUnPjG8HYY1iFnywEysT4gh",
  "key4": "5eUcgmfJnLHynkzCBKAEZBNasZBua3iMPuZPX3zBKjCo4EFHeSQh45wRW2NhQBhpNFa2ts5JgwisrTMhTBzotSRN",
  "key5": "5qR1hpRsar86qafjYCLwPApTs8rrc2af5saSrGQSSKjdAZ53GGhmYC67EqMu1cJ3eGiE7sykThokFJzVbiuR9X7r",
  "key6": "uiNxQcFimHgCANp6sU5QiK4N1rQ52nJj6cRRBWCSyDMXGKN31voayJbpDasVi6AZTqRem14KfFCbitWYhfZSnvn",
  "key7": "3HuLtWobNDe7ZSKCaM8GWED2keDLh3fLPpUPnU2TdKRcVvsz5MrbtL4mgU1vusL9phvxucwu4WZs8F7d2ZG8WtTe",
  "key8": "4tq14Ru7hfjvo38ijpTQkCF5vCYkupQcyybEks8mkfPojZWMRwxedWTxBuXFyonsfbC1S1t7CWnRVLkJqCLeVHuk",
  "key9": "5xagFG6p7YykZVJBxoqXfxaGBan81HZQjmoUjYhgKARBBWBbLgGpFRFhdZNmoPh1Fk1iwJg2HU46sdePuQdN1aQ9",
  "key10": "2huVzCAbTokQxH2M3tRQPoXFZUFJPic81dfUAB5LXdZjjrEruXGipuQUQQWMB6v35moxGnFncZFT5gLDr4dVUbSC",
  "key11": "xrn3epwXAZ1YsDVRRAdsDbGk464VyjRazmoBQZjwxcKeFp4kNoUrazqydxWY8vwMaNEHKBsBiTEvRD5wRGLZscD",
  "key12": "4duk3Xp6un556aDmt9bANbBujUAYt8sRk1LTfC9qwRB5HaPrv5Qah1nkBvvCQrwHWgBYD6wiVA65WAezCCnizMP7",
  "key13": "4H2udKJRT9vFUteUq3bCVVczGVkBZXVqetfsshFaFicbqXwXjSveWxjZ3Hy6jbH1Nqfbjr65EJSCZdV1j68PPqCU",
  "key14": "3c76UaadkbjzskGQSwepQC4uhnhVeC49QUesP5h8WTnF5Lr4wcJGALCAjqwGQRMXz9G58cRdW1w334WgrbfQkziJ",
  "key15": "4fsm8i7nBVPdb1WqpQWfkHEvNChZumH7QrwcKJuh8pK1iiJYit6E1AwJr1QwGPDayrmVaQPeidMEHR5fYW7rEZ3g",
  "key16": "4QDUYHbXR2ySwimTuSCUPYtCe4YhDppGqn5etbCztXepvaTFH18HpxzRVaQqgkYAruqMaur8oummun3hNfdf6ZFU",
  "key17": "2rdjAbXda6yuL7Lw886VL1y2xPDyxTsTh8aWnutqtnsSyU2f3Vwbm98TGHjoXaj4Tkn7JyGw8VxPicjYDr6QyCiJ",
  "key18": "61XYhLjVGAxGZofHCgNd4gX6vuPKaQj2XANW3kHedgk5T1NoxNt6c9aQxnczr2rGFJST5okF2ejW6PUtL8B4pr7T",
  "key19": "4s8N6Ur7Ar2wrA5vTVPukm8MBV85aYHJoVkEuoLDreZkpveFTMCSCEK9zdviF5Jvje1CPgZ8hrHiwcoU7YAY1ZEY",
  "key20": "4RQJoisvoZ6RXEsurVNJ9tjSmnq1APUzUzgiSGmuSC5WiV4WFYvvtCEcsLLUz9AVjHU94FUGBBkGBs4fzrn1eP2P",
  "key21": "5MF4oXoh8RojwTW6V2fsaDqc6iB2qZNeJ86sZs7kzE7QqpmMhT5rmBEhCocSDMNU7GrAPV4jfZtaX13o8SFVLFYm",
  "key22": "5UMcQZvxVvW8r5GwhwHEEPAmEpACrgToKL6YnyARKBrPjPy1wbjonAJ2iNZMSX4wn6vNMh3pb45aun4EGGSc6ZYL",
  "key23": "283UJgfrgsKwbgakUueKDrSC9uB6rsL3Zqji7wRAVwS5G4g9nKXRm6UcvQzGLn93QChwZdHj8koqbgkaRNVQj8BK",
  "key24": "5A7B5BSTSAbCtJPpDoK3RwsBpJYa1aaqia5iCfWjVEoPP8SoqLpqxqsuR4f2zJvVQeTSr8b82qD9YEa3aMjLHRdE",
  "key25": "4weCXBc4kU1hReLY7HwmfDCCJk1yLxQka5dZCshWpgaHLEUbiDCdyVZ21Z3fHisG42PaM199ARe7vek63eec7Ge8",
  "key26": "41pcidKQY8a53u6ukKBVgQPWYEBGCwZTgMB1wp6po6v1qgv82W8r6Ch1VNZ83z2YkD2XXbyxMShy7imtQAdS6REj",
  "key27": "4vGCx1Rz15pJTEk93CrKoBHsAZXrFXFoPEEfMBAGbKvakXYsxMmviQw2wCeM21dqC6adLT6mVQXSaLJNZLF8RqYX",
  "key28": "SAVQ62s8X8P2RZiM3s8UV5dsxfgmes5Q51dUxn8BcaEdqmMRPPsSqhrjCMEsBRviYN9W2mi7peFMZdRtLQP4zpk",
  "key29": "3dJbNvDyzhk2pJUnJtFgPcduG1c8g2qanpBTwRou6xvqusqBE44Vcs7gPj9hSsJKhcS2z3JFLucUZgZPHUTBXDGG",
  "key30": "28Pea4qxg6pZmvTh8bPeEcZKhQeVPW7UqWLpqHCX4rMfkJ9Z6gdkazbApnCMR1KFiyNxrnWWyUNxMq6VooHoc72y",
  "key31": "5YP2Mc8iFsNJHzLEUvdysuQxWL7PR69wv6RvSpGsLJMR7kf2vEKTakd1XqRiEKJ7r4qimL2dBpYb1bCBAeJDDspD",
  "key32": "4bVxvk67BrtAH4VrnWyCvdxVNyAc36XfZABLZXtCpiSpx2Z19kkFzCayyjBQWcTrksEh8WqKPDzRn7zUoeRngqgg",
  "key33": "3p3zUHXBBMrZER6PfEfFpWzavs3LFHjhTfqx2x72G9W1cqmMmn115doVD6vWERpYEG1TrzNShhpRaqrWwRyj3Aiz",
  "key34": "2CgvTiLEbdicrqSACZtgV1Ux2sENNuCUwHn3EeSRsHf9jU3xDtUKJvW2G2guzcQy3mvDJiaA9614HfYc2wAedspq",
  "key35": "5iVYXnmAQ8i1J3NGxvWxfGSZ3PFKmp2EoHhP9SyLr6jH2Ep7vF8VoLAgoHjkmkwq2gBmnLNAs3TPw2WyvPhp7Uxf",
  "key36": "35e5kM6m59pEeo2ZNt4AH5ZQpy6aAGmbMm7eXEUgrGpnjHAV5CvshGgViAjzZWqtDu2QRURKV33pywPDMU7Rf3k7"
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
