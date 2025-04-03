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
    "5ZUMt1edM11W3417umiVMrNZnfXCVtxQ8BedUR5UD7DcpSZ8LPJBu7nWggFPqpHb8MQ8BrM8C7NCwrnp1dumQnWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5q8EfVSTFDP9XqtBSYuGu1wS6WoyJaorcS5R5pCz6YJXfRRggEEiY4ZDs3FqPWwAKC4q7nRVCY6FKbTNJ7ViiY",
  "key1": "56L27CLTQPbGAnEAcf4rcnZ9FdFCSuQoMTDspxipuPA7mZcNQeqBgFHJgThCJUHdkZYHvUkkXzw2pAy1EF6QpzG4",
  "key2": "2Yz5ukkvARsueSnxrwSdpx8kx4EWxTKGoYQqisDUcUNrWaa9VBokuC1Knjs1Raksh7yrU2kmjnuTwKzBzH1vn1PQ",
  "key3": "5rPyvWv9FecHmqhyp6uBjfbMuuF8Mm9p6CzTeLFpzdtCuiqKSr2VJsRstXKwc52rBVow8L5U8DDTf43zc9gu2yYu",
  "key4": "2ioa4cKiF9eYQezBzDScLAGKnaqamEYYyP2RSLaBH448Yw6H9yWGN9SgBsRYC5BdLDZ4ZmA6wp3bxJdNNFxjp1MX",
  "key5": "4wMkXdGECGdnLqNFtYupqrRamvDYtQww7yNwa48MAvw847J2dAUiDoqZRYNPSieMQmiBeWMeasuJAv8q8SZfSKMU",
  "key6": "3zcf669t6SmFbgkD4zLu9nE8XbdMomfmiuzcVfzTKD3VsSk6MEnCXeqYpHeESdVU6yMPTbo16NQvtfNimy6N9sn3",
  "key7": "4E4VKYgdzNS2bfz9STJJ64mCXSHbocvETdM4hSPFhxP7tTXcezcHZc3jLyQ73ooaJj633wqBAFwGoYPuYecUdm8Y",
  "key8": "3rcYhaQeiFoX1nV8tWMfcggMyd3AqEvLXUmSqdxYuaZTiVsMwL9XWnXZrHbWS5zPo6YN8AmhHuC4Ku3c5FXkDEpL",
  "key9": "3ZbuEp4dF4i3Ab8ZyZtB5hDYvdcMQb1mfKs8oae9SAqXg5emHf1eVjLXDfMcKEWDGk25MfhQRsQ4supjDmQm81RT",
  "key10": "2cebLZ3GbkQCZ1dxMwpnK3oc5bPvtSpVmb7dUVFtmHXuKePDRwpsucuNqSz8LvABT9LZ2H4sdowkE79TgLkT1tjf",
  "key11": "4fFTs5GmZT45gFva6LQt9n5hMGAd4ZzFTe3QSDmL6VbyJfHuUZ2Cv2nAsUEpn6gcTutFDkVeN2JvUp8Bf8Qojd1M",
  "key12": "2CaMgFFKupxWNGPGdRZcNnw6RQBy5x7nAV7VFWpdtC7nCnct5KhrVdr8BksLAYGufTBrYRM9nqrYCmSMu4iAiDZL",
  "key13": "5PFgStQSP4FKCdff5aEUPAGDjuEwTsWP5UdzZpSCdGjKx3K6QM9Rm6iwRxqBvQkpWFwPAPnZHudn2oPeP9FF9Vtu",
  "key14": "PbYkJru2g8oFg35j29W7BgrgUSSB5Bbzf6WLvGJKr1vk5tzLVDBUpoH4KC17hvuM6fBK5gkdtEXkYqaCaBajGQb",
  "key15": "VJU6xaEuRY1oS5gnpPsqx9syTyRga4x1VjWdsqBh6jSHCmBNrFqY5X1E8D6s5PGtaFMsJitcygCevQxL9ZPWhgK",
  "key16": "2Rh1qCJY1RyaFUzM194A3rKJ5PPWRvJD7B6SUAZ9YxXB67c31wzYcjaor9gXBLggSVrYK6yA5jaSUNc5vFhoF8WY",
  "key17": "4Ypk9rC9zq1NPvXag5Vi73Q28FvMwnaYQR4pxFmLmgdsTmbjBgJ4aRPCnu8iGYrUWeCXFEWZGaCuSgeMhtvY363M",
  "key18": "2QEUby8w6Ny5cnhPUbbWxxaRQGYAivusTTrg9wdkUt4Ej7jZULkdyP4i7GCiYiw1VkH6DA6kvs84SjbVgpeGoQGv",
  "key19": "2XnDNrygVaqbvVwWnmb8Qr2F5mG2reLsG5hKVWPQSzGcPdLGaa7UevxgoGuQen58yoPFVgKFUPZnbvfTzouqvDm8",
  "key20": "43quUU5mxkDRpYxWMhBVGksDtbftpFUkVezqjSxRrynvQUUvBkurF4EBQt35jmn6Du5RUZrYn5UnzTLmJvnQ8QhH",
  "key21": "4YtVthERk6VhKPywvruz1nyuDX4CrmjSBPyFNA1B8CD2gsFUF1fMwTHoPfBXHUYxd79ohZRTvspji3ptZY763JDz",
  "key22": "4Zc7CHXQsXdxMYds2iuHKJda34mvzUrc9Cvyv2bNf9XYGt3hZYgqzoBLsf5VEdh249gPBmVPGrddU8AJQFtWsku6",
  "key23": "41nuVdEJkecitTYFS7oWEorAXRe59guUgV2PcHkaFKrhjhpX8DC2FA7EvKSHzz4cHNiozFk5Q7uSaHiEnznHY262",
  "key24": "nF6gB93cifcSV14xBvy3Mzbyx7be3pqkjLzboEguzR6RKPiYcS1EUhAMScranYZ3HBgqoajUf1fjKrU2g8jF2VA",
  "key25": "2ShngAdFWWnDxNWzqGdq3DAjroUVUH1rKrKFbpaqUaBwdb7hZ5MapvKDZGUeN3UrPMkB8VwzBhL7a5mdcB6F6n24",
  "key26": "bs1dXANtMsPtEJ7j22qebXBn8X72nwKVYrYjMMDev3Sx9bk8LLEF77cJzrDKw5pevkKwS9AfHX2w3PSEiBb9e2Z",
  "key27": "4Lebw9dXyLDeDxUURdH54tQxBszsrKXoC7zjBS4827eBAJWF3Swtbv3MSKnd5fB5FbtiUhcFNEBZ3ZC4iPr3Jy2U",
  "key28": "oopSBdFzBXVaGgB5uC4e4fsRM114ukSyyFyGxCxcVMxCtTsndLYvV3wUcZeSq9hvSigaM1UtVpD65phR4dbCkJy",
  "key29": "3VUnSWdRRL7ZCkCfSnSfdXP8F3w8bp5R6yTnnzzhBmnKMVdMvKqcUJDp6FieSv7qfLtGtwm9dx3EB6z7XJDZ4Dyz",
  "key30": "3x3MW1fVpkD17qTX8uuio8EdEERkN2ySaZyiXgCv4sojSoeLKnG8bHXhfkE9S9NNY58tsatyLBZcv7xmL5HmA5Sk",
  "key31": "268hBHJXAWB8MLFtwh8i9c6MUML1TBosCE58gL3rkUJECorqnAgW81vsA4gNJ3QVeQcwGXGPshyoeY8r24YfeRRu",
  "key32": "qJBDEScvJHwAvPvtPLjgTGhhcnPyHgfUhZ2bTinALkoPmhTNyxsae65C6sA14iPyp7cZ7SESpsabsk2aKPHndv5",
  "key33": "2BRT6B4281qdVGH5LXueN3PHSLdWffiwGWb7w87WvFanWBguFkHsEJtgRPjLtAcV6D7Qjd3BKpxFp9ZLqb8FdZ6r",
  "key34": "Tczv4C3XAoZfrZqEYRv4KNxcSZAxodZ2KPuKAHnjhLnX97na5DKBbDKc1EXjoxX18kwC495gzANLbMxWZM7BN6g",
  "key35": "59USmzd4YrsDB6VWmUa7tex4oQsWAwtqYCD7M66VF1FRseMdaRXpWok5PShCNPvLEwSNtgXX5uc5am5J2XdwzBcj",
  "key36": "4BPQZyBZ7dn62Qtx6KPSEWyMX3NDXNLGNZPhdues9txNwmjkQawZ3oCd5N91U3Tn6oNGGgFzx5gib2id21uaDBKd",
  "key37": "3cpvFUmYa9DRCrXZe513aGMyAeZSiwNy6r5FoEoSfQTB1v4FqvQL6En91UFGExKnci86qyXoCS2ABNhqTMZY3PH6"
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
