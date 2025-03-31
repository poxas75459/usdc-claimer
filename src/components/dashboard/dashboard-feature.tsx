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
    "4e4KDivfEb97Cohc7Z2f1rbNANUBjXDRLZoMd2DtZstNoAvJsUun6a2QvtAPCuut7fxQDo5Co4ACdHU62DxW3VJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLJfKniYU7wDiP8DB1u3X8M2HmoLccUoy5MGKPkx65mfVxjKr1QnuTQWUwoRCEQv4mz1JbH8jgnjo5KfhYFzVkt",
  "key1": "2AG4WDVa7QiVwygqGWPWsgF2BnUndWDfAeV4ynxRdi89qTNezgTta25g3T7WD9axgERsJsqmoApN6jedc86KKCXp",
  "key2": "47bvvHArvjAQbUJNAdzi8ARk1nmU3RcudRfVr2spAMBuEeqHmSv8ELtJLY3AtcpeX3AcWHnrTD2wV66gXkRXpH3k",
  "key3": "3L4oNTjkGP17gbnBkxUnpzeJrVrdzU91R1fzQazoYsJkeVrsd6WFveY8EajBZKxhEJQGrChgPvQRyWkjMZoBs2Xx",
  "key4": "4KN3Pxmux6Jbdnqw6NfpqW33giSKQ2AduVLhDYYyNkm9zRjYVy316xMStEHR277f6ueE3aXKqp1aCffPt7HTu6pH",
  "key5": "dA8CoTv8ZBPEpWnXcxLtbpy9DZMgaPBAuXWrbbzi6GNkjVFLSBkZwk8SzXeEKspY8yurrmGniMEWv3twscUjh1m",
  "key6": "2hxcN8VqKruJuLnDxrwsHSg7qDCzbGYa2vBQUUxXqu7Q6Epv9nB6BRpAchPdjsuKqALsn5zHRHCxxMemnpyw8MXn",
  "key7": "3mczGUKbRm32BhnxCTbAG24tYEiZip9bv8BLGXpj2g8x9xZbyvk3EUp4KF9TLG1KZWhM4kqKx6ogE5m57EHuzDwV",
  "key8": "4msK6TeHiH3TnVKsCF79FfXB64VoBfvnNZvnzSiActzbULc694duvgmZ5Gmp8J1n5t8b4xKooRnhGmUnsqGnyszK",
  "key9": "5xorxk4Sj9vPZsV6rBDC7hMJFg43d4omf7sYHm8JdV3veFnpRoFUYDpd1hipsiAwAdKxBRDj6jtCxdLG1AwwdwrY",
  "key10": "PBJwjo65i8kqrdMwdByPScGoPNqVsjZRJALcc55S95JVESW4FR6t4zCNpvqW2Vnv96rBpm6iYmfgz675L4cDdjh",
  "key11": "5sxV5BJ5dwLmxkdmxxt1Y5qytRbS8ZvCrtmJhQcZVMRXF22G2B3SNsbrtqUrRHBuGe4Ta9DF7Y73FeEH4v9zCu4Q",
  "key12": "2nW1Pk9NNr1bknX4e5keb7Ey45TiroEkMWWZ7quSGfZGUvkYveTBFdqaRoYqrEJCPMEvvXiVFeRmXc9ys6ASSwJD",
  "key13": "2LpbuHFt3999Fvhmk3GSrmohwbkH1wFAVPVT9NHtM9ekjYMMjLTSdP3YXDzNFpjYyqEUWjKtpYPTyHczEbr8WJt9",
  "key14": "24KXSme5rpnREiriQrTHKuqKZs5TbKkx6eXUeLX1t6vXDjsaHiKiNzsWDYrohf8PUHUHFQSngr9UFmRD3UKWMmZo",
  "key15": "2LZYsPTQSkhbknz4r6ZHpF3WgYZJNaG8VTA8iXa8ea99GUq2CCqq1xXAsBpVJeKVaqSL9vQdK9LRdwdeEFGdLgrJ",
  "key16": "3xo5XDxCMiFYC7cubzqFkVQD6wSzMnvy4ewF659mcmiqXPTfcuMaPaJfPo2NBtCcUaqFLFrzkHWevtro6yzmVWA8",
  "key17": "4Zi1fkJrBrkaJnfpcdwAQe9hYkSPQwwpGzZqV4dRQ3ZVec8ZYsp5CRpM6JQ6CZsYGpJSaHhiKaTDCLLfyoX8rKsx",
  "key18": "ysqzkzvBYUw8WXeTxQwDiGoHi6mMWz86nGpEMMmF9aZtXju3E5uZ9wv59eCJvqqAJrYwMh2i4LTJiQREaMURNwc",
  "key19": "3dVtHLPUrUoshnyz9nEzwoR2RTDxrxQax7UCDSzVSCAQSE6rDrKxyCyekexrpbZiaqqCbGrauN29NnuzF4n22VtZ",
  "key20": "5z5qeLPZA77D4uUetV4BHxsKv4pjXYpX2uhvDLXvEQPiitnLvu1dpDvVTddpSA43brLMvmFmd2EWPSdYfTSLRSZq",
  "key21": "4NJCu7Q4JinDYr3AJ3nCAhwiH9A8KhqdLFLcMnoaUzxKMhLoCHhoHXVmNrYAZ6QVWW5d9L535S4jq9BqDaZLuazk",
  "key22": "rRFuJHQVDmaLRPGYKuce8cusPvP8ThY5L8JRyMzyLgoJUKpFbAWnokFPbrgz3JZiV352EbGumgcJu2nWTRWZxD8",
  "key23": "63ZCvCHHomnTQ1wRtvkyzRn9S5ncCXuRHSAYecmJuHX5kQijjhvnGcEhWqwoZ4LJrECbezqYT5UXbo1zi95SJfNu",
  "key24": "3rNq1xLUMSu34XH6KwMuEpScU5wUnEuRZUQyW2gZPKPL9EnYAQJyKJBZwPy4dJQCvcFXFG5DafHUSyPffhQavapg",
  "key25": "hqkR9y7Svku6Jp8kraTqzTzpPKnYBUmZiv4oWcbF12Fcz7h3w5qUR6ZXDvSJzmkfXyU2npWtQFPeyHX4CQNZp5t",
  "key26": "4nutjRNb1DqienWLJNHTFStacGQzqDt23xnYaCeZNhYr69pkLqpTUnMsdHmwahRfWkdAjNw6caU6myU2ZV47mWaR",
  "key27": "3x9PH77t6Y1DeyzvXp9YmGzy9YvMMg8fTvLARFMxi26hdKzi96NpUF1H4PJyDADaiHTdLMb7tj1rG8WyF4tcoww1",
  "key28": "4MMzSd9qPTL41Bv8UennsARnjYw5vt1iUb53TfmTCt8WcQLwv5WtH6nEPjrbMwvsXrfTboP6FcxxsqZbnmCjaYW9",
  "key29": "3RSsSoe6kCyJWMb1KpYeQ5FNUCMPgDuHiFDZkq8uLXzbntQM8QW8xX6Hi4rYUvdAvQRzMMwikNJfbLBMQdzp9Wt9",
  "key30": "3gZ9Y3r7wfsuUaWj7hDtzEkhDr7G1EFmPPJKLirmpUbken5Y1MsCeRksEm8cpgSQ8JZbtxv8Vj871PuuixisBr6j",
  "key31": "4kCTQm1ZpB7RMQkBctmF71fFrRqr2CTew6MeczXwjwoZYH71sBrPfLCkwWiPUJiyTFq3xfPcNPHPnQBhYVtbNJ56",
  "key32": "21HhQXEVrstVeJ7PsH5qByAAmq9MX1iVjgnZ2bjb6XdwLkWWgtkVCr7Zh2pA5kay93zCS8d23bHqJCJbnHgBScVJ",
  "key33": "33fPHVGAdkJriMKavLkggQaoSH1zbwgYZWwD3z141ioKF8qn7dfDpWVvGG6adb9gHWYJUoFRgXKiS3hgFUh6ZmZ8",
  "key34": "2BUPfPyboUubUDoPW2poqso63r82Cf9QCwbMUeiqMBiKJLL2CPxdir1L7kK2gQfZ9BX67GvATqAjLuasWgs6YM8p",
  "key35": "3LAEb6MFiF4GsaVG5ejVU9qAjaA3gM35eu1FqZrETPiaEesGTNexK64CdmDG4DbgqF3FjFbJPb8Ar3t52bi2oTze",
  "key36": "7Dj16zPgqSYbwYgy9sKW94UQUYbu1ceDGNTPpn74BvyyjXKfjB9FQsCYc4xwBHfruDgz7o71U2WbSaMFuVzPazd",
  "key37": "2u6PwDhUg74AYoZmgrkNBBWyQ7rmmaGQwAj4KTd6eGHPFAxfwLUENcEWZMh9cXfVZbpt6FvDhR1k6CDYwU7tHsGy",
  "key38": "2TWPejiLicG8seTEiFzR4Ck665fg9NjboinMQrbUckppjN4GaL5d8DusSujJhLqs9o6J5vG6PXeoLYECDsbKHmey",
  "key39": "nmpXkUWfhV1gbZqVGcevegJSbYF6toHe2X8djGSthbyT7wxTiwTarfYyDHX2aT85u4xUMuL28UFENmFC6qDG7K5",
  "key40": "3EBQFWVmXwBo9pnLuJx8MDcs49Ft9Ewzc4L5qcNFKTkkErKJt9KJ6qbqHu7dX1uUYM4jJEyzK4NKypyNHf7wzZt4",
  "key41": "PAy9ZmvrsBgtXe7vvSJFffjHKpwUtsRE4BsHP7wSt7q1XXN5Lg4HWXd5vwrLUGDUz9pg6UNnsEze6Y3tVtyA64c",
  "key42": "3kpTxYhxP7crVDzMPJURuaqupye2UdGeyRjQesBfjr8ogTtrwsUSkxYA3MjDMifU8zCZrBHvShv727JFg3C8EQpr",
  "key43": "ovnTK6CcN9GA5tjdTs6R9CsB3qdxFGN4r9jEk3w9enpoNezwLi4tQk11uEcgVSwaKfNjXSQWQ91Rng2wQGMT2NJ",
  "key44": "NVdTrpWC2wqyL3S1FmJQ4q2dxJnouqVxQKUSg8tNGsbEfvETyfHdSpm2sdwkBSGYZb5vn8pZugsgoyYK5ixrnQW",
  "key45": "3KqnbkixMQN61kXxkA7oCLbWiEMxkEMoMCKdvuUaswaFonZSC6h6tvpu3Bm1fCLj9XdD65tvhHNV7VaN1Qxh4KYA",
  "key46": "4NcdT6agBtXeCz75qJBuUnokKgatuXEg3xJdMHAwrRis47uAsyAVRs9A2abYEwe7UAkMEpn9MV73eXE2spNozMYr",
  "key47": "3MoT9kTsz7HF8AkyBufapdwSFaoYbB1wbGq4H5bnKPaeza3fHx6c4HhYo2nFxveUkLbmBrGaBmTJQ29bTwibkaE4",
  "key48": "3xVdMFPzKkBruLJdU8Uq6oHXEkPDaWzHdfzbGRzyvu6sCkWwxnXhKoXGwSwT7GYgd18iS4c49oK7Nt7vSGT3autN"
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
