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
    "34yhKSNykY3BU6mvyy9znJA4wZrsHXFJPyHHWbarWyQp7WPbgC2k6tHsWEVfamcsxTzeecv4ifmsinFfppyX7jF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGM3a8LX8AksdsVoxJncUXeqUtLt7c3tvH2o55DSBba9wCCo46o25xjTJwBUBqReUHUYfpQeB5fwAZ6jzkpEQwF",
  "key1": "3uggc8aDJWmTeMkzr65CaJXRjxCmWKWGd6Xdn3g1U9jzHdrxdviQfzk6baMfqGmSyYZfhCYAN3ueLhRi2eRbAgB",
  "key2": "JsdxebLQNUJLPmgE8Q4HJJodaQ3ZbM22AAaDugwSCLC4E8Yqi5oTHKHYBWXqdUhriVYNzoXQrQQfxUA4tiQhujF",
  "key3": "3QJwGFKy6eHH8kGDGjrzovnTBHdqv1rqBeNvgs2VUFD8tRF7FTacsrpo9wYN3goTrgGRPaE193A4fYd36KxoMQpu",
  "key4": "3ccGBV9ms7RTxm8skqLeyRmGemDoP2Wa9Aijs53Lb5vM2ALreHpEac6P8p1bqHnCtfGSKXmUk1ADnjUqeCuTcqEX",
  "key5": "67EtcM7xE8Knqw53eYXNVXSWHn1aGcvS3HBhtLn1uVtVqTXBTKKzzjHhyxQEk1b7hkXuGHHhgwemT5bqToST7Wwb",
  "key6": "4cNDkHFrRTv4RMdQLQagh7jR13K2BdvdRhefEkE1Lr8zKxKeDt646i6gupJ4JRRVFkaepjuGvPz1T1j58yBWZwGv",
  "key7": "5sfMSm7Zij4PPqmLiubpP38UomSx5q6poYYpuhsC7y7VCAHgbBKuUkZa8BPC2UVMKY1ReMk4UWbfJXP2iogyowbL",
  "key8": "4JNVHvMk3H25ZmKw8gPKocn1oU24g15SY17Zaf6An5UqQFoU6NL7DY7GeeTUXjnPHs7oVFLER6xi8NCSctkxogcC",
  "key9": "5mWw6Wd63v525j1JPWfF8qufv3j12vRBg1HX3yiuuUkueXQF3eFQhDPKJLkRfQsjNwNfNMnr96oabMKHEt5ko3Z3",
  "key10": "5H7HsXzEUuXSPSUGKNrbuJDM6SReMqrkBs79vYhknv3r53GUD7XxvEhN4YDV4FKybdMsCSf37nucr6PqsjoS5U6q",
  "key11": "27H7Aqjf5UKF7pz3v1y3T9f5ao9w3qHPnjttXzd8fnhxnB2M1uRbc2GaXuYgmH1dkFPMWmATA1PgUKsUfXLMPCmS",
  "key12": "3pg9ApcVxvRy2pxPcTA7zXTsUSbZxjBc3i4R7brAoEd1PnkThSubopvwxFAy7j88m5JL53yfVYxoTxXGs2UW6U3P",
  "key13": "2SnK6dUSJj8gfx1TGduDsY2iEux8hoYL1mawwrEPJRQJjASfNv49MvnYaVUMdpsyEPdGc5x69Trm5P8MYumz1ofz",
  "key14": "2u1Vfz4ZWXCu1XgG1hb4DMQAmkijbKNNYAPk6e9owwSi9apCqmahJGA3e5BDHN1mrST2ao2NyFLSx9dtRtXjM3mC",
  "key15": "3cFYhKHSKGdjzY2N7JhLsr67bF8MUfkqsSmnrAqFmNzF9aLbwLdErchQRvQSMdH1L4qmqMWxoDzBeTPrMTwjxsyQ",
  "key16": "3teYUxoh1J1fTp1iCxAeNDa56FUVJERDo4bP4TLRzKB7pPTDWtX3jsG8QFtu9CkQ59jbQZwosoQtwMwZuQLn7ivo",
  "key17": "582cHge5K4Q2k39r3U2kFJsZKaKTWaxhbLC4jGMao7FpU72ZQw3VN96EnWCvS9FaqT5u6hRajpQBpoajTQfTQDtG",
  "key18": "3A1YqXrQ9hSF5s6qAuPMk2ZBD2ds9eSFLkM29qUQJ5cXU2s3q1Kc3RYN1VYcFvjbqVhQP1yYALAh5ozWrmh2EFwM",
  "key19": "3mQfchPsmzLzzT5mG1B5e3NWCDg2uG1AGxy47V89kAPda4ucR2RBy9Q8mfEHSrc5KKAQVMFYRXRHad2MEnuMtEqJ",
  "key20": "MNL7QGBmepioWjw42mEvMdiNj8RBXM2GDFX4qpJvgMTgdR4myCkgsHUV6Asm2jmUR452MRpCd8ya6FPjNZttocn",
  "key21": "u6f5Gq7kguKzaYF7xDhNzVqx9aqCpj4cbCjfArouPh8wzyu4i2BFWpMbEdLY5Me2G9U4RUryhKyPxeT2XWSy7C9",
  "key22": "EJDo6KWyYFGjqKXqaDZddP22x1yYLFzZYsti8a8amcPxeSiipohb9Cz95Dy5yPt4JPLS5Q3sCXwBUYziZTaPGPZ",
  "key23": "E6y3GJrbKJodwYXioskt3jftWmxMSENweh3gMv1zj4eEH1BVA8YXY498Dh4xNbx27wZ3V28Nz4CABGAUkqKM7eW",
  "key24": "oTWXHgtHSq23jsWuB3mptWCiH8XfGTsyzqSKS5Yykbo4bAqMw69AL2weWEM2VWdny8AmoyGNmEvnE7FLWY72jG2",
  "key25": "67SEh9xp4T2s3sZMfPoYS67xCXXVG7uGWNuzPHeGPkfSKDbiQfTqKybjcVXi9hHsnaETGpaSP1oDu7WgjbteAvPj",
  "key26": "sdzXaWRMYHGncKS5JTi883GvFPEiUHF6RGitHCfqgLi5yhx2JSSqtbjwrQWayzDTADF1vmeKYHkRvPTaJmUhH2D",
  "key27": "4jsLWoQCqeJej7cqRRjfDD59KgwRWJnpW9sQkFotJLgjT3Sm2KcwYtJkLqttSMq4ixhvFmYPiTryZUXpzbevXGtC",
  "key28": "3TP4uPgoutAeD4kAKAemPGbK2AtvgMYCDHM2pwDDNBBPa5FMLNqLTy49anZMRVsWfgj2apEiQjPvS18G2sijRM9F",
  "key29": "5ZDNbc8aYgj7uVkuZEBFifzizgi3L3LSbu8gH1Piw3LtfqvDBk3tq1EmLiVHsKyUemgkrys73SN5eAUGRAUq8nCP",
  "key30": "4VwezpJLgM6zGi23Arapdbmzf2vjwL5Fd8F4rbGnd3WEkMmpRvCqKA3wuGPuj6nJqs3kVBDkzhE9cYaWqYHFXKGR",
  "key31": "sT8b5LiW9m8tZye4RMTAmZpsiSQDQ1SkBfQY9Ko8wGrdYMZrCk27s5ff6wYy87FqCT6sT3csiTfJRC5xcPcSHF4",
  "key32": "Xd9TKocw91X7ELVtAJLa3whwCZ83PCG3nRbAXm7pMZJj1SrEF8EMLwCArFrc2w5ojJcj4XFmgJHNyTGcx1nrgqB",
  "key33": "39CmS3xEzVLGYLqnVBmTGuKyeDj3bp4cUwnfDyNb8joAaMaaTQiAyCq5jGKCpqNfDEbVuF5VHdbVgwvZPLxca5pw",
  "key34": "9Wfd2PL5CPBdicQRDgub6zWkzugCdtHVmKnw1hHFqyoquLWZNP6izi1NPcyDmafQaREi8sbjey4bBJJHFmTgS1u",
  "key35": "2e4VRp91mtrXCHqTR7BPG2Goqp7of1E8eN2K7vtF1krD4nL3RLqiWTAW4cEm4LudjXkcNAfENuAgdwftWGCHMXUm",
  "key36": "kuvuqNGPNzCNvTHfBTzZGbtR8b77t782beTW2t39gBMYYJxu7tQcwzsXnSrm4LzzvzbEoqRGH7RXGk1g38wnPDK",
  "key37": "2ATk7HtE9vYJRM1rrhx4dPNixSPjGtJ7CsGgeSeip2x5PdS4XeUfEqJQ6k545MapAFSPBcACyEBhpRq3p5Awy9i5",
  "key38": "3T4tRXJxRf6pAUgBnbjVc9A2HtCgoohwbUaB3Vo5vEDNyzy4DMQAcQuGxqLVkTqpJkxNdfj2ksvczk88Px416GZT",
  "key39": "pNGpd6PZd3EYp5iezkVkMh6umZiKw5XRviEVi77UwnFi62A1tnhLFuMwrXxFw4Qj7Jd1jft5xHWG83REBnkJauL",
  "key40": "cJqAo161Uq1AnikCoV67nxvt9VxaEmRA213dkV9G9TjepgSMYbsdweYZtgdpRTTQsbKFcECGtPvgWLBEyCDPydf",
  "key41": "1PDxVkwnxvEELwhAip7BUC5NwnPh23T2mr8xP8wWvGq8XvKhyYGNzaDJRiPx2FsatTrWkhLiCJup5Q6n8nRHFzf"
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
