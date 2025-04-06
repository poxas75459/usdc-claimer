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
    "3MA4Rz1iGXxLiwN1n8xHYvFGwbUE3b5xMeYsVmgZkgSjGJJ84fttZ87pRRZWJr2zN8iLPtB1oYSsGUvP13eS6u7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xuD69vjLUPt3DiBHht9QQTTETjukf3mFAhyWiK7UiYhTeCnrjbHb2SP4NuL2i6M693AvgciJo2fCjhEEgaWxydq",
  "key1": "26Wn4fHTbPRpB5dxdEvhNvAr96uutjapCeSpqqF6jdAcvtHj7Smy2Yf6sZSVpDWiRM1K1MzWsoy3VusNrS3T87dU",
  "key2": "2VmWnSpJYjoDUV6g9eePCMknByB6Xbn2NoANVdKxG2YwBLUejDUxMsmuS3TzH3ctPdmc8gmFiJcXh5tmqrfnc5iz",
  "key3": "gCxrC5GKUuzJwmUaJ77gRJvGc8CR2yMH1JC7XTARk2jnWFNgDrdbVr7Ga2PBzHNZEr9UqyERowA3z6GhgKsp2Lg",
  "key4": "NLmjLD6t4o1VK8CRNyM65SjUPcsWXStdrhv7gtGZk5aWpCVp86RPc2wcA2MfinkFxpxzBoSzgXJxcijWyBXhTqf",
  "key5": "MtCJks9vdrbzXU5KGAS9rWBXE8nZcXefaz9RK9BWCYzyHVxxuuEBQh2cWYfU8G1zHdhAFWgkePboWJLqt5Ct5zZ",
  "key6": "Spb7zTpGoyYaZWX24UP9eSvku2bnXpXNgTEBAiRWLvgz3egbRPD87ZtB7CAciyY1LBVzKUVCdhHjYsbieotemyu",
  "key7": "3rG5D7hdAZ1kjWbPLG2rWM4mR8RHUSaMfzsBwgaEvqUaFaA5Nz65rrZjvGBu1FEC9ZLE3yVjPuf5M9HkqaHGAw3y",
  "key8": "3Ca9kSi93XL2UR71dS6RWbc5BnzXAsFasweghubU5fmuMRm5fsV8C2SzRjtVoZny2a9AFjUU17YJG3p72c64UT2Q",
  "key9": "3714KxYKmfYgnpGXD9oXCtEMfK4jiiZ1Lt3FvqYCckQgushNbau3DeACZd6L34RDR9QUTStFmdwJnziunt3mmqmK",
  "key10": "2tJSnbye7HLYxooarE4GQjvFer9coTEcAtpg7dcXCCfzNjo9ZRsxafFk6C3kmtF2tjR97EZXyEXLYsvWDJsRw1Fh",
  "key11": "4f1EyvmZTsTcYcNDkRf8xqAyQPsXM5j6K7e4NdzHJJcuAhW7kqoDttZCQF6sRvV94DPr7wTCgCRGdf4m7k1r78Lb",
  "key12": "4nKKgRY2P3Kco8WQe11ny6Xow4JxpXJmzYwqxYxRiXxy1fL7Q73KBtegzTTbUSGBLR64HvN7zAPHFHXj4n9bUNAL",
  "key13": "2dCzqgfgo1NVrW2pqGcB7rqNRghztnqHJPW99qHQhYj3kaGaeo5XKTgxsgFNtZ4b1V8bu9myuY2Ni18Cd7NYomZP",
  "key14": "31xAa8iWcucBSWqL45oq6MvYKY4S1aaHpo9RgjLeagLsxxdBvpFqJssqFMb5Ua5icZQd8ipjtPw6Ta6ESojPMAqz",
  "key15": "5Qw1Znp3x3e3Cju8rFjUQ4aBUtZzRV9aZsRP7SiwfxVrunKNJUKH7mF5qLeN31X3D6xSbGkoMJXJxFk17pDggVBY",
  "key16": "4DHogGuizSZsXvN1UcUtZD3peyKYn1v2F38cJ5Y2JzWD45V6RaEYZDvWSgRJFjKavekxbtZCDLjru9SLH5T1rHyR",
  "key17": "4otBaCw6NzyRTGjaYa8FEKauSiujVCG2uUiiwigVAVpokYTgcC8yP1JmXicVVzPXamkGinxmvpDA5hV3E4UnKiu3",
  "key18": "87qoGb7CRx9ZDZMDvxRvTA6JpGyQ5pBaSJ9DCweWiZ4V4zQnzuAS1ayVc4izWW8yNJh8jmZ3WtyVAQ95PiUzSWC",
  "key19": "5vi5RJG4WfJbY9MFL2GHETzRSiLEJ9komLSfAos1qAraCZcxk2qEnmDrNWcHT19Trxv5vNvBpyNW4GpZVtniYRtT",
  "key20": "3mRbv9QySE9SMADNm7Gmd9rPp9nuGVUTYgWDjK6CuCKBqiF1dXq46dNPXHRD2HtRQvc6T2CfDQ2V6LR6seWNsmXN",
  "key21": "4VUYScKPdARRH7cmsABDRbMEFHKB9wSXdvoNfcfGRo3nXQ6eZmvxLKFCnn2bbCFW7HbFKRTYEc2aLn6N5kGfL5qP",
  "key22": "3ozkYha4CC9oB1b5EBm6XLU4RqbbFEh6i6W8SfiuyfFuNQDL8f8BBzx7RQiVihRgogUsKvJA8hmdudT2Vj4vCRGC",
  "key23": "2ByqMf6KYkSBXeENyCw3Bu9PNgniRi7AHJLSnBur5vJNHf9EctNuTNmJVsk5DDsJscqaRq42eArYNf3yLPEek36w",
  "key24": "37QZY78edpadbMPqvf59NB92ZFVjdr8qEx7zB778zLa9Ds9Q1LowrXFoGnhfCHeXFphBrJNaiYZk7GqxJzdoa2Lh",
  "key25": "3Fg2mGK82amNMQfesVv9GP3iTeh4AdTd8RTCJDXZBtvufxa4NT4KwmTgcwEpESWaVxDjTUWUrn2hHTkGD3TdD4mw",
  "key26": "4PLQNHBLXN6hBZsD9J9eGJgSgrN3BscwwVpav3GPeSiqvEARMaMFgYm2BoAvvCQtw99JrgAwo8f4s1sPsfmfnai6",
  "key27": "5N1GpufyQLkkk5xSRMaN2oq4QkRE7uHrA3ekdtaS7x2AyQkoyQdoyB9Rjo3Y1Fk7vqqxELWogqnMm2qJDxZ7s2ie",
  "key28": "wUSVB7NkkiXQjYAwQtXnJ7e6VQwJxyfkTLBw8HZoarfSppH2KWshSvbtmRG9RGzquCuUEdedGR314tVqcupbVYV",
  "key29": "43FSCEdLNwFS8NLfaNY66rj7YVZgg3YeAGziQyuWs2wTm4ouKnRCxz954WUtLWniuZYs1MpE9KyYxuMiXrDQaj5f"
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
