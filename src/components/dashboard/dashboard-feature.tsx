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
    "2VroYpgK5ff46CMefLGr2Locz6KvxoKpADZvVCgC8BeD9Yh6yjX777Y7gxoMjawmP4ePf4UhTiNDkYkiqEUWQGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKuL9Zr2qCSS7dgQLEp3riWLykBQewv4gvHrbLjowBY66q1t1kmeoqXV4cXJvPwLqzfXQNzXcdUYSuSGQHYH5UM",
  "key1": "2sdYoGiuzJLx1JjnbkcNvypPvQJprxY57yu3S4LEqBsiG4L9ruxEfbSt6JNU89aQkbidZszRtG7dPZQjq4cCJ2pd",
  "key2": "5LTeCWU8Vc7aco2VgVbWwMRvfNhPPCUvuXnLEjMmeEM4dXod4heZs1H55beNqD4EonFpV69WkJq6AqoQYECpYCCv",
  "key3": "5PD8FJnsgAkbobjz2HEaYLwuYFKfjEt9U1kUcNpVwEnHLa3entnCaL5p8LXAmg2hHTxkRv9TQzfWW9Qo3dJgakA5",
  "key4": "3x8gQFnnSUBWDb7brWqG8hoAyMGV8VWZX7dEJsxB85MG8Bd7xs5ekayjcgD4YgxoocjHWTTLnDRfRET8gPLWSGhA",
  "key5": "4w2VzewQk6f3o9sHW11fqioyybEyp6yXxM2BBUw29WdKZmniYTDEW4M4CgEP18ZK66XCBfNQk7yiaEJk7FkThNTA",
  "key6": "3acGGqbAR6X6xyCkd2LYBTvb4xHRpaoCUtNV58hQVKydUDdTDQSEGqcW3FidePffVLhpy7fEEZAKJVdR6sfYfsqd",
  "key7": "2eohh1uKUJRQKWYeeu2QQQBNPekf7cxHTovLVwG6MXLwzAUtyA8mdRNP8Y49hmJ4EM5Po3qC6pSdp47U4R9aES7b",
  "key8": "5ytJtMCru9SBfVeyBef98gb9QJag4TWvoefHVj5KmbTaW1jo9q3orJL1xuWLCihYdFwo3tptrxzwJrdTcUJ6qmhH",
  "key9": "4ML9gX3E9cN9NMEoNbDkNXwREBDwcz8xkXmgSn3YgANfiDPF6bq2jhBSgv3NJJamRMeKo2bKFkWVdbcitQY7B5rw",
  "key10": "5uxz2gDJW7EQVKbRShwYbwHwRHxePikzyQUjoWkHdZkd98nCSinNqZzt1CdHGUty3XhDdYq8frQMojJghJXNRKNL",
  "key11": "WpksCwurD3oxGsCLe7QZRyKop1joy5xJ8pRao3t9xZYjwFotvUBB2q5GDkBV4gZdKx582KSCKRJpCoYC3VAaxk9",
  "key12": "5yx9pfUfzQ76x4Sy7HuzyjhxS3iydAHmyUKbXkMYRi2cV6uNT1HFpBGquXGjYjkJ8TW3u3L3XSobxK3uWTsNyAsy",
  "key13": "62a5RrVG2iBKFR76bUjGmp8Z2LSQ8QCwng4docQAjWE7otpoZBCjccghmyWhDznLmtxW2vivb82LmHBcRZ2bNmDN",
  "key14": "5JPnGBDoogxcer1YuCRcssGsXHEDZPyba46vdhYMvrNStDyMz6zVDET7eBfu3L3hgycBo9VqvzgwWThEeQXYQhS7",
  "key15": "61uAaWCxgTknXftUWCfseRkeWKyPxjDdXvUaM4Xm7T2kw9ydQ5uWiEAJpNmUwUE6pmBsAezs7oEuDvdiFf3Qhpuo",
  "key16": "232Z4sMaG43FtbdwoYXaVnogbQqr1ZiqShNDYeu3BN7fi4BU7GdXWhCGtz5yqxP3oeeT2Se6nNqNgBWUYmi1pGeV",
  "key17": "25frh1ncTwbn69AUke4pTE96HAaeSHyzePCLtDDuhhpnL9SABFJyEae3BxDaCzGK6YPNuknynMM2fhY1fThRhMEB",
  "key18": "2Mq3LHegGxmyA2FRDVnnM9NYknTLzXB2eck1xAG4FDK9noeCp8ytUzKRQFsRex5uh8u5tos5KCDwzKSzAwHDEzx2",
  "key19": "5b1uQezUPoVAyWYuvYNsGBbPSTjQW4oRJo5juvL4Qkvhk6JmLAfjort94bujVv2DmFN5xAdKBr8z3GfJ8qB1Fb6x",
  "key20": "Wx4rKJYVyzgtQL3vtaaH5xZG9haSmhn81zELNbTKBbXhfcmG1TThPvwMZ54jhfxsX8yVQuv28NRgvxxEXs1AVe8",
  "key21": "2wotTe6nshy3SufYE1c7pRSoSQfwnM7MXWZE7UeUxpuW2dCUMqdkaDaopjtpAXxD8TDY9yhz5KyJWFW4qopZfSNY",
  "key22": "4oBRs8298UXNPtTyG76mMJ3aqzrAtEdHeUAx7hpGAeLnxcQp9QBeDTYUVh5RtCnMzYjWsenhRARqteWDShjSiX2r",
  "key23": "cEkE1sQ8dxWvKLEevoX7KvfCKMf6pyFVEPrE2n4mxSZzEg9Ku5b9h459h51FANR71u23RcZW3qViAoLzQg2UrBk",
  "key24": "UTPC76ZdrxW9jw3crbhczABvd9nBGkuTNGt2bbrXufDCjSu2pd9imPCHdjiZy2K3imyXXuc12phZXUC7MbcEyWc",
  "key25": "3Z1KQKze46qoLuEuS6cHGRJ2QEhHwzxK1iJKiKMZVFiwB3GYv4yzwb8pLXjLGH5NdVa1KoiSuvgRrbCmYqXCdmyW",
  "key26": "63GtfDLd916rJQa4h89TW7MfemQWupioTfa2mS7PKrqJkMsvAhftB5bk7AZcTmTDc4nvmxkFMGRqF2Z8VjRSqAUB",
  "key27": "22UHB8yP8qhGAAsvxH5TPAUyJnHELaSAoRqVP5GFWbYhtbET6Jptaa5TbizQRceNpXP7EkaMsEoLgg61DcqKMo5m",
  "key28": "Du57hvv5DZYSgG6zaK8utNw8C1aaHrCtKxxSozskKvV8ir3odWBBRdyiGEyHYmFXTcvxjHjREXTDWWS78Gka8Ls",
  "key29": "3DPbibgkE2fpXmeMPQjgiuPUYyRb4x4QFCmtWqY6zaSXrghsz1YHt5FnSH65whFioN3H9yUaRdi2a4Fb6z6buuAE",
  "key30": "4qYRqjQEhkDqJ3rUemBbDQP1Dfd6nMSAPDNRzEcjBHeK5o1irGzJWTeJ5AgoBtUDGge1iQdaUSPktrN3HojnJLbw",
  "key31": "3W6QjTEKR9A2Ry7ZR4Y3tpdKsZYAXL5cC2dLngbf7YjsnYdon1pceqSUoauLgusjEgZtsrkwf2jjwMYu83aXk5Hn",
  "key32": "3MpFtFWsQwWkBv6qeCnUQGThiv7rGRMDGBZWb4gCdqpkeXzKd4r3DwJ4G3WnCGeNSarLPcsLUs6wGJ6kPdg4bndB",
  "key33": "cdbvVWuBQZYXdPRWgxGRYgCVLicz3KqAVwbgwCSqyPgFNxtdPsbnbbtCiSBqX7Zsd1ivbSPr2FW9M9DLMrXJvfA",
  "key34": "34X3ahAAz1eSqbjrPxr7p5DeKxpP6Un8Cg3G9H2ydyjZ1r2qR9xnRAciaZi9PSUk1Dr8soQtFfVc5PHdfL5rcYQR",
  "key35": "65N1PvQLNfPQ94S1vh5RMkQbhZBh8GQqxNMk4TeQ7kfgQTMrU8cv9BUPEzZERVXwkm17QjedfBSBYvSyNpEgLX5u",
  "key36": "3KWkpfPW27t3RAuy8nAC4k8qMrTxdSLxVaCFR8yZAVFVhdQTdbfahYXusvFZs5qYr9KRh38rFqJqxNDfa3wEqgnQ",
  "key37": "5s9ceenByu7iAAKQFuCfU4X5bzCc3nQvwUuW41eXDYpuU8vfvnFy8A1uShcHDPb9axhL2E7Rjah72gXUjjbRuhf4",
  "key38": "4PErbWv1xa99xUGVSSYZQE8VVEFZMcXEYV6bigW8pFnWW1iEYokQaQbspKhKuemfFdxA3i6aJWJPpkNk9C6kuVq3",
  "key39": "2x5R1kV3BDbZ7XdKpK3sULvrazCvw3ombDx6BWNuupvCMX2LsfEKnJUCtMcxCMLw4ftJCaRNKRcd7WgqNhW5QZzX",
  "key40": "2HxbN5JzMFs5GPpdGHdvKKCHVKcDsWyG3jZfcqtLQouXGhtoG7wAgzm9WKR425gKvGoXvTQL1Z4TpzCRCyxJ9t8h",
  "key41": "3P2p6CFJX9nPkaX8iP4UUPWUwcVQKncVmSfKB4dRTAjMfxGUDyduJ8Gi4xy9F22tWqWCXHaavNMstHen8wysBWpg"
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
