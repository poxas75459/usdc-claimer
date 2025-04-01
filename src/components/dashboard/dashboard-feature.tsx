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
    "b24Qb7JAwWeTP2QWBpG5PJubo1xfNHBaM1PFeUDdeQg17Ud9eZRPrS2RhpqgMVX8Mh1erTt13LJDLY4tBCjxNpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNzAmzu3pqgxjmyn1qhTAkWezbPu46BazjutauDxg57EMMHxmK3FnhNPPTUbV1grjCt4J4PaGKWHahNDf7xGj55",
  "key1": "35CDHRKpeCU9f7ChiNJBqqUXRmyZs6Kf7bMcyCCgV5mkY7hbyeeAmzdy2ngoyxsPFNE4H7EJ6BKgwLf1ZhHGf5Sb",
  "key2": "4fzMU79AKeHzquKERT3mjVRH5itxRhJyiJ1RrX8sqKVrSzpN643DFCN3LmMJixuD66TewXeEtqFiKBqGYsNFtxkQ",
  "key3": "3oYJggPGi6PZG7rrUMfrKoA8yQ4aiYjZG7XBwrGW3xnR6AxJTg3PXJJT7pYUXSKtLyPGFQkfkea4qXsiG1tz5DTm",
  "key4": "3eThtLDrxuCrUjg7b4rb6r41aycfKN3BmA65Et47xMEyJnZmAPQ5cHFpc57tZ9udFo483eaogt1vBojGGiY9LSF2",
  "key5": "3bWGugbxpvbgtDrAxzw16npZGKvJkVouUVQWgY6mECnhZbUJt6FeJPQeJ65h56DnYMed9F2GAvmzJzRAroSdN1Qr",
  "key6": "2vp8EQu5mvUTMcApFe5aKwcS5ojizmmEYCKk4icMP1hYUX9A8XZUrVVnuNX6GqLw91cXuaoVbByFwukCvJxsr5wK",
  "key7": "42uCVW3R4rcoyJbVBeu1kwkjtcFgTcep7CY2XD3FucwWGX3gooZFRs3fJPDU5cKXmuj6dnGZ6g4LNJBUS5NP3LAd",
  "key8": "3kHsc9m34Wmmxzkf6SdKB32YSKuSF6WZporkdCAcsYfq4XHadVSxLhuiuW7LZ3Pp4PyK54PK4Hvris6BZCfe4voM",
  "key9": "2y61maaZmkEFwCDiYdHhNaU69KG3tr4oCUcHQwToRkpbTZjJwzaVexkEjUtL1sV8Yxe9457bFE7kpP4V8CGqrK8L",
  "key10": "3jC2FCtGeMkQKiNCEXJocZnE13D8LsKF5TSkDRxCupHBdkTLS61hFHms6qXuzLNTf1ifDDPKx7kkPFNPB5E1R3z4",
  "key11": "4eUBDKCmr2CkaeBk6L2Jq4xfUGrcrXkmqxS33Bm7tCJmbw5CR9axTD6iffmPvuMmqbtiyGftfPnEu776h6xERcZx",
  "key12": "3Gqk2u3sPtHttcMNqkZ4kdHhRbR3Dj86fR7DMkKCQoynhuksPqpun2UhWuKZhmtLto17yEd1QsZZ54NUeQ4btxHo",
  "key13": "5iPfBfThVgoTLX1PuNJaJgp5G1YoRxLMmqKnPkSuszAAjz4uHe342nUdoVEBuzKfti5ihTxNjMnCeWK66RVuDZ8Z",
  "key14": "2LZqyjDm636xJeUo9WQEnUFp6RCQ9JwMGRYvhLBnQED3S35LRKc4cfKSoNG3ATYGiyyxBLhNyKy6C7sfZ7QjPL4",
  "key15": "57z2BKNp9VnAqkbsyFuZkR5kudmgW5Lo8VAmiVU1M2sjRzRQKYrCkVqQ1hUpp173jL3ekqZwxtBfivbRQkdi6tTD",
  "key16": "3MVNHfXieNTrQeF8i1XivcWK62tcCV7k88dBdxgze4mnZ1Ay6MXaw6erkPkKmNdTUekVnmsyHiznmv5SNdEWEJex",
  "key17": "2UjmwbrGR4vAtrkVEeNrzEJKiBZWqSqz7bMqz9WiH5w4Pde9jWbCjd1QhLfsS5mjj8xk9uMZxKKHDa4TrGAkmT5j",
  "key18": "J2vCuckvVCA2ELeWAmy7WGJpewfybPeFsSknXP8CevWazAAkUCQrqoiZgJQoiqcQ38sbwBKTgH4H8q3hPqpAuZB",
  "key19": "2rukkPq3AxAKNiywunwyzzv71cMHPek7EJZjgVhxAD2iyGdg6MZFvS9FYENuTakpCz3iRFCtc7vDtEfYkhVz4qka",
  "key20": "4ZfBYvL7sdkkKAsbGCqNoQYMh4i91Lw45G45AA4txHhow7D11KUcPxuzMBxATVzhYWS33qpW1dDP557dh98969pZ",
  "key21": "xf7X4LtHG9irFXFtwHeNALmHsieNxLQU9EfQypQGpjvLQCZ2J4KpA1MAvpKSdKMT5ZTEb3KuKHProtqEjSefcMQ",
  "key22": "58JEMENsbTP5V4ZUsJpTDBPetZigjCvYpuKwfnSq1m622upa1qWi8kEtZXszWNCnSYpR1PZdmhnJgtYZuj3BS1Ph",
  "key23": "33SmkSWFo3v9sY6YKgr2B7ACcqVxbaJhYjYrH3n2pJSLFznFsCdVJ6gQbhBt79MqZjhEh3qJEbBxCB8LbqEqzbG",
  "key24": "3SJGvhp9d1doNsh7mSu8adg3zhstaTK57qpNQCFrFQWRT7kTj1uPKWDHCNXsbay51k9EJ9GjwR6T19PrRFdGe97j",
  "key25": "2546WKtr3do1EQxRKyKLZH7oS5NNdTYBiJoWsYnYdEkwaRtgT5Zonn6Ewuqi3zFj7LBoxD3aHf2sevVPgV1d78Uv",
  "key26": "2CcrjhrPHxrDcgbRfcw1mj7QrP39Aew2LJzULv7TTNBGvxZRmjdBb8qoTMTd25EaojbQ9JxNr4ZNjDpzto5rQ3w6",
  "key27": "2oUbf1tsW4pNbkuPw9cRuvac8P5f96u518ZDqsy3Wu5umgarTzD5ggfth2r4FQt5GGfmkmz8xwtTs1pELTumwZJu",
  "key28": "5kUAZuZjX3Lrqp9mVb3F75197HxnmcGFJ4Cm9FjozxabfYX3sh7oVgD9gvbUHZd6gB14koosRVQPYfqdTtrDARtN",
  "key29": "5zHzFPtr1xNW36VFmkbxjMpx5zq7bnTyBsXR2RDpY9z38G5ZntM5aBUs3QQpq3Fnm7SoCbwxfg6jYuFVJHWx35Uw",
  "key30": "5QD9Kcq8epx5weNkSSZ7v7c2mjYb9aedey3BxV71kdgVEWTrVHFAFi7KXmvjUx7znuMTDLPSLWSKUzfRWrZ2D2Nf",
  "key31": "33oeLmJAUBrQP1srEiyouhP2amcG1MamGsui2RjhpZuE57iwn5zRJJg34eRietyKY1UMgDGvSJrU9zpTavKdbiKk",
  "key32": "NLgQGpJYjGQ32HXoizjFy37GoRSA2bM6JHruxXXv6GpgMjUxsn9kzEpP3ZnjN68Z8sxoiYPLVJqpqpyJYZcRqB9",
  "key33": "2MLy9T5xCC6vex1wJaEc5sX1YbAwxxSKMyeMwEcSUnJn4oawiMB2hN7TQk4AJDraMjPXAcXAJZfiPHn3c7VV4PuG",
  "key34": "3qVSygPvhEurhbFfuS8KHX4EfsjTcMYvZGKneViZC1cc5bzRJrFokFe4pz2WqHQ5fNr7gGejkXERBscgZx8qaTVy",
  "key35": "2kveGjjSP5Hyn7jdKg9JiUJtHcrKQbZCxSXn8JWgHGJXyVnDKFagWuFZafyKcRWUdn2FQvhBC3SpAsbKL7vHdjVk"
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
