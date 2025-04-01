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
    "43KFpwxDzmHwkiAmKXE9BsEWZSEnhaEs2QMGURqammQAayuq2VyccbWfCxMhAE8dFvWtruEFEPcPHdUKa8nQMvnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bi2v4HpkKJee3gT1PysAD9AMWDNY3EU7x591CWi9RG5SwVc534HMM8Ps3FYc9P3yWmtqDrT6wH3btLt6pJ8mRqY",
  "key1": "VDtjLdRvAkFTdNVeryitSZVuuRRhADRBpsTcS3XP1c62RVinSJrsRdgA81meDBEEQkumXfRRyAvBzyetsmypAjv",
  "key2": "2YNa3BZ8whKnfgVXMjf9S5JEkWGitNBRXniaqaZHSe3m8rHbfsBzyirfpTdFR3KnnY58c7hQ3FTd4aY1jxMu3Zg8",
  "key3": "4uDQnSUBzqcjxi4KfzW2qCqU8zKZeJSAvbEL1UoxHewALwZ4YeaSz26cWv35MqHNBMNkcjQq3CyAKw5P7ut6AbJA",
  "key4": "2kR4qq68ah113uYyme3nRU3DECikfEvtdMb3nd5tafoxeacr9ARaDexbX2ntHX9A8vM3MNM5R4TRsRZDBj5WJoPn",
  "key5": "2Cr9mPbnWT81E3wkAnDzv5vS64wyyoxDaLajwmd5xymBDM9dUkBbhGeFwsMzgEs5baCEFZbQXAcgcnGarbTjonUJ",
  "key6": "31HBgFwY9c1AfQZDzznfimiD1QcDMjCxEk8TijNEEFiNPyGqwAH1nbahLzyzYJ2Dwb66dwTtvM2fg9sq3JdyVGAX",
  "key7": "5n3rxbGrveib1vo5AvP92dXQRWGRPN7FcdKUSCWESsrWnUctckB5qKiF5ifEX2uVkby6kCPydazBN35qvgGAGGgR",
  "key8": "4jwdGLXPgXoNH5jhAGMEc1aACukW3qFJWtYqCWR6y2rMKPoeTr57HrPi7yoLYZfH5kTTtDnXaqkK58JJWpBoG5y",
  "key9": "5Ep1uWeKaUdXHX9aN3Y8EgUWcZGJNYvHydtUS4v2Q7bZt2RLMPbLJYNgtxdFCWnfZ4r5tXZWpxHX7BzTRP5TwnrS",
  "key10": "551tzceay7x4qDTYgfig5ZVQXBKqz7N8WDo6XCmkGqY6xFk1ryvU6HHi3dyXi8qmc4fA2o1KyYtBQo1AWka5AWni",
  "key11": "4mL91oneCvQV8QAkT93LziX6ZtoVwKspqFQ9MYbg9o1nmFseP58Rv4ZuCBxePzaBWJKBRUdYuArcrLkLcTNayyEd",
  "key12": "3snNMk5vBsaWmZF4e6cfbmG5i7PKXrV1S5xDCU82t6YjvQeenidNfxttVsp6JDYSCfFGJBFoALF6HeJKQCKhCtuv",
  "key13": "3eXSH1ReRz6vAK3WZGUTGH32GZkbBzw5aTBxNLLAWgFSoFSv8atSp9zC1bHHfPtTyZwxujwEqVqwd82FKcEHFmsz",
  "key14": "5KkyLd5icNFrkDnxdKAyjAUxWm2aMFjjw5s9S6vAcGkZmisPMzAgwrRYL14MnqknfSr3Qq4h7ySZoMNJpX5mEFDa",
  "key15": "5w7naD3M1xfNk4piTjYS6gs4KFhJmGnZF5YroXDgWhX6ZG3UvpSPNRnuVNCK8tbQFJKjNvuAXWJ3AjXyNEkbP4Wu",
  "key16": "4rD5xms5yvPvodXuYAyEk4VfUSsocMyk2dNiXHL3YSh6CW4ji1zgyviAnP1KiiXXhMqGAcmUqUJ4wiraiBPKqqCY",
  "key17": "5GieY5qjxJpu42d9Mvwrxrq8J1GeySQTkfDKYAmQMeieWf1SyzXJApRR9F9uQCasM3h4iPXpNGRH9Fap9SGemSK7",
  "key18": "destWT7QYda2DB4Ehscqu3XcWYJ8cGubRg9m19AE3HHLycmfxBKoLz4QphLAXDYMZhuhLy9j9B4t7Fx8vpTw61U",
  "key19": "5Hofe6WGj9kn7F7r6fiZ5MpDx9EK7Q9QCWViUG7VdagxJQ5FoLebR45oDFpqVFk6YX5SoyKJhQ1mb5yVzjwEDTGA",
  "key20": "2iM3PyC2v3nqYsN3Lg4vrmLkW3JmAHCxmPeDvYpgCHeaDRnuyYoTYXHT3c1fTZwkPQ16VcZsuBjnwTBy47sJEdbK",
  "key21": "32kJ1oCpSKrYRTKPTtmyV3rKRb2t8TnMaRLSxkEwVHCFcLiojH5uuAr8AmG1u7XFLSSzoAgPxEjBtqXFhGemdrt8",
  "key22": "4zrgAG6fpouvBUcezEd58WitKp1FWtmDzSmsTumFpExVuRv3jxAbktn3TiHwcqiqgZd5FJdJ4rPhQL38REoag7Rz",
  "key23": "3Y3nt99jjSK8p9kWFMboGEc2aNreYuBSzq3e7u6oo6tAqTDkFYHHdYsAggpHvXNk433m7FHUGVNJCPSUHVELZfYV",
  "key24": "2UbgPpPWTYh4a2ig2BBoCtChPbX4a9yGXxNWQMY8XELwD6g5J8gWwbqoy92J4gPzX5TTp8FBGJfoKSbBi23LtFn4",
  "key25": "32oZEk6bKMo6PX7rYQ7pYFWZ66hJ7tEhsn782ybZVoz9auCuWWgceeGYnMZaoUdTYwEAH9MXDJeYDUf6isQ8QHLz",
  "key26": "5gA85uATbxShJW6sbnL84xRuygs4qFWGPgVkBFeqJiGFf2DScQbxpLFn4NFtZqXip2RLH8ujptMEAHqM8W9mTqYn",
  "key27": "5qkNuaHrkMUQr1tyU7KYVGaLfaSSv5AE8okPEfJT1iEDuabKf4St3sqjkFLPcrboT68MLigqLbCbafCiCsVCKgQp",
  "key28": "2HadPTzP4G7LTGXyG1gyRj4zqdRNZJD6Zq6zSJ53n4pfsRBGNwMfTQDZVt3LnCJRivtce2BUaoy479NoTmanJ8yS",
  "key29": "3dCuu9ibZKfUWLV7H98h3gRBVS8hTVqmafrEMwiifgFgHgLvnoRCqAk4NyHuXHvQe3sfAVgKdMsbCEii2VAMTuRT",
  "key30": "2rGYJdWHU71CWrN9LuJHxGzyHf64gQnstYAc9FgcWYAZwMzNNyuJMEEuWbUitjSK2FCL3TuDPVwNB5jTnFfSfbx8",
  "key31": "59L9hyNUFGh8UEo4X4UTatA6u8m11eukWo5x8HeyCJLR8JRytpT4a1myKFX2Ntu9T4WXKh6aPKbdn7EBgBYrj4Zb",
  "key32": "4X7J9JmZu4gwFwFLqxsfJjZiicsdn3CcbFWot89gCPT8YG1GDFzWGn4aGVW1vFNiL9WW6KBCh6pMPZt1sLY7JDRP",
  "key33": "54gxpn2CRvLEQ3y7AysWNYPNSzw9aNUNHKyQguhxEajGDWs6gXuCZcGUbUjDFszbejfJNx9guBnMaAqcugKPKAuL",
  "key34": "dMoAhgq9XKcofngNx8ujkNiWSAdGb2BdmVUZP1uQNrNb1GsZcSCE5mUhQCHaA8TszEJYtMGmZ9XSm3ZdgGxzMWa",
  "key35": "5CvEX8MY3HGUrFyAby2ZWCM8H3sGP2cZvUwoPbT2HtTgTDMwzauvWTCoGdofkzWb7ED59rW5a7MEmAnRZRBZbzKA",
  "key36": "2ckDfcLbPDM8mKRXrpLdDQjskxgkphGN9jzyteP1tuBigo4QAwcdXmWpWqy2vPzUBojQ6tbXSUWTedXGdxMa6hso",
  "key37": "5XzKEDavg2M1ZyPkMAdV8q4ZvaPVKEDvex6xCTXGr7PJsSN3UEvJ85v9wiJuzbG4zoauBKVHjvgoxMugjx3uGwzZ",
  "key38": "4XUfQ1BEggq5Pm8EYfyzjimJHpqTKoZVJ1zEZXkrYBPuP5P19QtctJVgg77N4LDfEhQVAQVyzEVUutqWo5dYZnRH",
  "key39": "22r6gm4b6NbMoffWXqueMxjx94qoasL1xMP6QYquKTUsB3iDCMdosXreg3eLSGnjcRLxHV8UMY2Bhx9nozFQxVwB",
  "key40": "2CoHQ4w9LgNX9XLEp81o7EFoHTSLMF8FxbbG47rcUi3TrixKNvmwSJpZvqDCjWZPAxbK2pLLYBpmwCfc7pTW4k6f",
  "key41": "43QmbsQCVLVzu5oa1ZNCU7WwbYRn9v9RNtvGdewXaZ3cn6k3BVbWR4Tjsubx4maKXRcFVp7ByUETEspeCv4yfn1G",
  "key42": "5UfD1cFbhZK55yyFGnAWYUTdCj659FHMvwYn223iSrrxdmWFpGvo9S6S9tdwzkGe4ZCWF86DYJWG26RNtGEiDhPG",
  "key43": "3rXBa4o1GE7E1bMVP2TWVbUfvhXyjmz6pGFLZqNbdbvgArXGrGQ9ZN5ngJDJ5zwe2hZwFyEmoo2Gr3JTNVBpeAQP",
  "key44": "BrKTg5KbfbdToQFfjYJtE3U8en4CMHmsT7mx898tJvCEDmK6MeHzUfd98W9wsUiQk3x7p1nraVw5CCrEXqgffu3",
  "key45": "4Kn652MTv7gSL4E3jwbSdfQUqMT9Jz1QpmTswj4AK1yuuTLtRzg5ECrUgVN7Wd4H2BCYbvSm4jjUBEBkdtNBUqbz",
  "key46": "3D8NjUn8PZS3BuF2V2g2dNK6y3AUE7vRKD1GnR6DQ9ectxzSb76ini1n57FF2qZK2dv3sYoQMq6UmkTJZL5NehDz",
  "key47": "9g5giv8dhnZAKFwozgkf4USb8bV8QZVCEk6ADaYMVaTuBu7Gz2QLjRzBeBYGHS1FXD8SXvW9o5WcmJbhMnzHYjy",
  "key48": "2ju3yg8dKfhn7zbFr5Gfnj9AzTLPGeqRp2sqzagUpy224J5qVWcX3cQXg1DodvGz9Rm89yrkdvFXakSNNj7uJ7iA",
  "key49": "4UU9oEebourJP7L84qwhh5wSq66xyVbrv84TBqn6Vz67uGvkLNCZZ6zfhVX2hApZwNTaFukXFA1X4pUWAWejDzEW"
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
