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
    "66JzvUir3be6hAp4J33M5woZnJLu7RQ7muXpqusLpWCJxXwDjWRRMUEDCfduurLRmvsUZiphzN3Ug8iJRUDFiER9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDaX9KAxhsc2mqp99XTjHrvpyYXWNESW9GU3YGnJu5xiD2GPMRn6bJQpLeMUnPrYvTJNiv7YDh7au5pUbjkG4zZ",
  "key1": "4BdGk2UUaysuwgMJWqzdFyDAcZNGBciQj82rPprnMyLCsSzmeW4X2GaepUPp2LY9TxVf3t6A1tNYrtBkyhxitTyf",
  "key2": "5a3gpGKTWV2LTtNSCX353f4sMncFrEHczhofhEQG66Eb2SmyB9JvKgdPgCJoT3WnXMMYhteskmBgkRCoHU4FcFDD",
  "key3": "4wy1L9g3SHMPNQFij8DVSoivCXsN2RkuA8LUNBgEyEwQ2ZRWrGXofHQ7wAXjdG9rsmcwYFyomN8G7XkSqjWchdqp",
  "key4": "2ozCCkqiR6g6c9BoipqNmEZjuLTpZocqTJdhYkt7f4odaJdbkKn2f42WMqk2UeDZPRiPq6zpXr6LmX8y4RZ7HBkV",
  "key5": "67WqJ3GvyjrKHeGNHxtDYhAnniVYir9D6SnTMBbWunnEzxYKASuqHSRLTud3NB8fCaRMVWFXkXWTsyQUacSswqdC",
  "key6": "4vmWDN3ewC4NNVrBJKrTawm9i2CazY5wu25xjrgndjK1ybmo26ssTTgfKjwFkFwX1cyBZ3uWQifUP8PpVR4CPmR2",
  "key7": "i4kyY94vTTajDNoqLZ5STqN6fEMX2xVALtRn36N2ySA9dbbgmvGvg9LxQsm3cFRUPMVBoQxJYrVuEj8GbvkYkUp",
  "key8": "4inCc5Rkah77D8ndNHCCRe5M9GLf993SBMJqYedxzTQL5sZ4oUsWnNvbNVpjq1rrpCDKM4UmiTbDMp4ko8MeaW9x",
  "key9": "5rECZ8NHbPTqD1ivETKuxXPQwuMiSqkkmQAgMVpVo2tzfzMdiRnvSxktfNYfhzsvTb4ap1Mbkf5e7eYwUeMGZPmD",
  "key10": "371ETo4EgpeMnCLp9dXrVE16Rg9uN3CH9cr6wJ6gmazXUvPYStNdC1YaUXK2FLHFgGVPqAZD2HieAmfGNvoyv3kS",
  "key11": "5VeDJJ9xw6feiA3k28Hd7c13ZneJrqZEz6dc5yyY82PQ85i3D3NwiASevoHuwq5XcrHWqixQrsKhxN4TcXKahDaX",
  "key12": "7JujeqRrwpCVfiT48rEY1wyV1ywyntz3oV1hBnRjn38jBghsqy3eg3QPEEsV87QoukDvSeLX5BEGJsVMCf5voqr",
  "key13": "2TEErfZBLgPHchjcyuXZ9upzDrTsog8gjMmyHhuJ1BxUZJXq6ez5BVcfZbag9goRUfN2DLipQCy1mPyQJDQ9GTpu",
  "key14": "3b7qWGy36CkBWyb4sAoSqwpAtJ3H5fQiAYnfcb9jxm9nUY24WqYQLJ6zc4kFDorG9dTb647LRdGSA2vgsJyqQkiB",
  "key15": "3rSBRwowEa7xNFrudLfi2RsNAfYkCX2v2Z1L2dpTBTkMPb7URqCtv1zSJXXkgPxf8iPGg2nGP5FqNAUdLMZ3jcRv",
  "key16": "HvSpNzoxs5Q5oNZ3cJXN7LCRQj1rd2H4ieBtmByGj9yaeW8etVJQ9q6vbyb52KCjPtnqckMq6CJ5bbU16yVQ264",
  "key17": "Sur7X1YcmVGVyKFthEdkkVNVHdydqsm7eVurCuQUzo2KW2SFr5PY6RvXUMu7V4BDyqM3KTFCnGcEpw7RP1fEDVv",
  "key18": "4Qz7cfyokY18sLAz6ZadzpyUpbXdBuc2ze6UXGdxwzxj1u96KFYNPASLyRNckfuZsqYXJgayZKUZgHv3oW2QYkbq",
  "key19": "3aUh2puoMJsCVEb6nfYGsJyxucziPx4YN6rZsszPCMf7ESQ58dNiVStHWBAUs1igK7HoSmyxuak2YYNGhxWRPJ7z",
  "key20": "2EUp5tiKKZooz4RAjLkWsgmJipWAc4HmnSQnFU1LTW98UnfQ7jowZGQav1PsjezMAms1bs9LjqCQ83fHwwLdfXM5",
  "key21": "2itJbrw8CCdXdtGSxLQRu8gGssDAWvbmfJZ6fW1pRjtaUsa86nwH6ZGZZRbiND9iam55RZEfoow6CRTpvHRGzuVg",
  "key22": "4kKhopixANL7vgpon1in5PQpQeTkLtN8bNT3X2ewLLFh9NrwicPPTK7qAvZC7BkqeQrpGTdeQ173j2ifQuXs3mM2",
  "key23": "4ehpaRtqejWr8Gdmrb22t5Tt5SdZUSH9jGvnTG7VDusySMYVvdcpVPp3LRcA2CrZXQXkz5e2r97HUMkExjU44N1i",
  "key24": "4oU9Dijk5M9QtkMwt2XZiPe4GSoHzYzEfeFWrKcoiqRGFzYGH793LMxanj9NbquaEqDtPPq7Pi9Mb8dd5yQagPS2",
  "key25": "4cWzyDGwek2S9EmxNjrEFWytsD2QtzVCv3kLQqvDVmKyFKSVkMzBe48JVKnRQ2mAJBKr2A1a44k6JY6PE2BPTUGK",
  "key26": "QAVQUmpEPwwjuKtivwCUSa2AE3cKnTJga34EVtaKV98XEUdMA5dKqoCriswhPc8ia95oWYx2J5EkaamoHnVFzjB",
  "key27": "2xXjvjGqSkhixNirkjiT1bewo67NmQhWye2ZQX1aCHriFRBLn9TAht3Fa98buWzoSWFhcHFbDWmHmHtjnYtx1VV6",
  "key28": "5j3tFsgpcNTjPCL3ATrPTukfGGqNvJqieF3SbmxezNDtyJPTZRXqCUjzmm6p1aX4FTfUQGmyzqLAtXFofAVyf726",
  "key29": "xRmZ6SH1gYMYzbY1KR8ZE7xdeTM4jtBBKLc5JeJSXyS3MERgV7vjKYayBs9b2S6YdphVmgqpV9GeNbfjkvnRTbJ",
  "key30": "5pnj6C9q9VfzMft2vpzHsdPZixdFWSNf4ttQDXWSL7vpAwTY3Top4uoQCjBj83Abq7JfUH7C9q6UyoTLSUctEbiU",
  "key31": "mUyasXkVM1Kb8sYemDFCuYHD7Ra6kUh7dxi1HG7oBvqw7wQ3e1xNpWrM65Pc7r77sgDfG4LfUFBq2DfyCUCpEgr",
  "key32": "5FnxjCbNcFNGT3GAqEMXhF8B46NdnQqnFFQwvNrRnwoTDzxMQvFiHB56bnzJWZsvs8zVeQqTy1FwZQsAMsMsgkfs",
  "key33": "58vzUFF5K3yWt2c7G921etshi6j144ayYrNc428FvEePWo19Xu3CvrksKQajNmvG9Ddgx1peW1N8U5mAvC84xbiF",
  "key34": "5ZBFKTdgwCMhxbaoeCNauDNN8pY43YNjeXYz4QXXAhKEbQRnytnbpe3K4TEhqZ7eXkE5mZCfL3KCHrf76yg1M4hM",
  "key35": "3dnZfGvWA7UPXfQhAkFxG2SdsB1K51GpbBmggwqbdAs3r9kuUgDv2AoExaGJqPpBnZX2GrX5gKJ216eQdshU4uzB",
  "key36": "2Jdp3MQsFbvR8wYT6E2ZXusGKChnie2L99NKzSAkAujgXat9LzPNsKjUJdpVB3uPrDMRH9wtd3jFt5S8hZp1hZr1",
  "key37": "45iticR5ambeYSC2QaYsCDqPHgDxVxu4iypWP1Epe2RP3oa7UPCYfEMP2WX2cP3KXvBbxWtcpPRmkhMxg8Hyy6BU",
  "key38": "2q3Hp8pryA3ztsQgPmgG45m89hZkmoGbr3JLTdPfdeYQn6AxjoHLAJsSacEEZY9mGkJKAY3KFd3wDyujBWDWobjA",
  "key39": "4QpAPVBBRRh46wtYYM1a4ehisQwpctTP3MPm78WguEoWe4He4qh1xQLMzuesnjHrp7swoMaqqcH5gGGrpeqMUDv2"
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
