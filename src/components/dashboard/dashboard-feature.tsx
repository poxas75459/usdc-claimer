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
    "4Arb8nHtPR67xc2JzGEUzVRYuFFy7B2L3kFP8B7a8s5N6B6WdSRtydVCW9PkFg1Wj646wU7YXWTBXdPSDPxMDcJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4193W8XE2BEuoHuvMrEGs5Px9ugxx8opEk9qkskZDPZ6hUdH6ELWkWmXqxZ88tPD92iiGg12E5YVXKQ7jsUmfJ",
  "key1": "3JjNaGAWcSXXG2NcDpGmgu2T51HxJ2LZqj9kL2ZxsLS428B7Km2Mq1RXMC9dUgSFp2uAcPgPaZgmjtmtiFNzHLdV",
  "key2": "BrLAwhrAEjifNmCTcTbGLoeFsCu525MrnA6UE39MR4srtw74DkqZdEWc1xFcEfzAT461MYm3WTP5RvS5uDaS9EB",
  "key3": "3KCoeBh6QvKJELvYVPYq1pveQXRSX6yNcfzNBiczSNUDPenPtubc33uidmwRkpWLY2h4cQRnWUUHQDppjfRqndFQ",
  "key4": "MMoZAVhynKKfqLB6hrRcQE1jT5GcWU6y3JE3GyQmMPCRkqBnRiHnMsYKULYuw4ucQFBr8jdCJWyW9BMqMQFZWjH",
  "key5": "3kXNFW7MgHVGTzeG6UNjoP65D7DaCGV9G75sRFW8pwFXTEc9tQ2gT57aZKBvAiW67Tz2ThWsneGqi1V6ot7noMQ4",
  "key6": "4Fk468sSbWEG3NEX43gJXpWdwff37rjygYUuyCXb2gFNRJZUryC4P7GGvrXJ1nZx2NCnkkXw8mm32vSz4S1RpkEi",
  "key7": "NH7HPJsPx4DogQBg2DBd6EmQVHTy7zaSp8t3FA7HoeceHKiHtRPVE8Ff1q9HV9XDM7e3c9fdn8wCP1uZLK8RyuD",
  "key8": "4FEesjt5LXumxBTMQnxHwB9XfRjzD1KiEhi336TcD6RtjkzsL9BLTeDeyU8JxdJMxb7XJf2MG6hqcd8wiAD4ZyY6",
  "key9": "5WPy32in2a55vrnbNgj9DbtgcETa7TqK8eWJAriUMixPS2aVjKeLsC79gXmXSfxuPLoQcUA6wziAWibG4myvrZgL",
  "key10": "pQzybhxuSQy7YyGbJa4P9ixX9i9Gkf1qxtPz5YZNhKtpczr6N1TwcWd11ZJ4sFtuZ32aXzBKWWxYrvhWfqo2Yta",
  "key11": "5E4bBEBm5WMuXeiPcKvEbmGb1Kyz466ty4VmSh2M92XzSpVsuSA3qqD6UzRcXbsijG1wEiyGsPSHCXg3NCJRyeMK",
  "key12": "32PPukG22cNDg2wcuFrk6z4V8wJAfNwgqoNtns4CzGDnK1AmVnkxxhTSsdpMNd2z4Q5shcCMoVY66R3AyrXToXT5",
  "key13": "5wVnYAsFFrSJwXncKkKto2cKUk8B7d252dVugWD9U7NfwcfmkE63YMaindQHUBJohwPL3ZZxdy8sWfwaVuELDzep",
  "key14": "4cavt8UeZrLUscsZFqtgcj55strydUbdatLWqvXjtLBx8ny7bEUBgecoeiox6mE2H3zXJVaSMFX3RShXkpV8d9sc",
  "key15": "5zeniv7UjSVqH3DW8kcM2opWhjzZ3nxsa97s38UE8RrUfXiGYtLxMcaa1ZyhXXSgDGZdFueic6sDy18vGhQxJBZi",
  "key16": "2CpBwAjsjqsru22wvX5XCS5pEUCetkXgG8ikPgEKNdiQoxx6YU5PBsTYB22MXXa9NJ5aTb5ajn8vwyjpG4abe4qY",
  "key17": "4eiV3NyBj2bFQMehsdTVyeyZ3NBWTkMdPDM7QW2K98dqEGuAH8JnQvzZ6i2ifBXfgJZ4Lp1GazvbQWqbDLMASEdY",
  "key18": "xyRJH3F62PJ8QFaQ4bB8DvyNFGtmSpkkDx5JJzX65VRJcP4fgDztqv41zWYVPupv24NGddQfN2gBmbPDpcAcbGt",
  "key19": "5Td6XYmmcXnZzUTG2FrZ9JEmFTtG3GWAFSvdvJuT49cECLMZQNC41XKsMTiraommx9gg9mGZia56SmbuKePPiFRU",
  "key20": "3kssEaCNMq7FQ9RbGEEtDpTMMtCPCk8W8dVyAvXkMPPeGayZGTonrkngwKFp7rLuGLaixqWUYg9Hhkt6kxdFL8bj",
  "key21": "ZrQkW4rYPje2bNC8B1KHxemGq7yfw2Uv1HSYRXENnCut1BkQjM5bcoGpgnrfp5dyyyJdeEDzGDCYAkoMR2XSkyo",
  "key22": "5DM7DrTepoFnmGTQxgpsKsBzwmXNih1MCrkBkPnJrCTWogXDNfkHd46wFDxunrq9gAykA4rZf6A8adxKXUm7iWHG",
  "key23": "54mzdJBWXW1TttwzvMPRtMhynhDtxrKnBXMuyu4HWue1KXuKjiyaKHKuH84uYGST2sQQc2c3P1NbTAwtmWSHugMm",
  "key24": "2R3vg5SLpRkky8kRwDyGdHUFABNJSSTLf7aTG57N3ZeNEzJzhGJPoeoS1bwMVjufjwJBEX1Ljj7eUrSms3RNSTSd",
  "key25": "5kM7pmaVFMNhQ7fba7DQjUv4JbNtYb5mVK9ztAu9ksneEFMV31myTw2Jab5SNAcQuMGhHampoPRZyyJ55shtpgFp",
  "key26": "5a2arV5a3UDKVy9uv55MWL1crP89LsfvdKS9yw84T2WRauYkarLk3i8v5CQmRk6SMep721rGMoFKy99jZgpQ54fC",
  "key27": "3PTHa6vwG49mc7cedvaHNWjv58qZAnHQr4FARtx1SrMnDHGjpFLjuHu38F6wiMrGrGDa4Mettay3yRYPadw7fmcT",
  "key28": "4qwju2ApMvNTtFsnvX2nLD5ancMhMjNYiB2QUZHRJ5rHsNMk1uVEXKtzi7VhyKrDELLW5wM98sNUMRnaM8B9WFT4",
  "key29": "3ptYnRZ36bb8RGPREC6LGhEZkzTNvvSsJq2UPGehZt76hutQ55pKTTHDdK43XXnezqMVddsjkJhg1vvCbs23ozUH",
  "key30": "HGCcmmr6YPHaTHYZKWHbSCHNBXz7VxfhnJPnDbKVqexMKLetxKLpTm8kBEfde1RRAn5M8YsQNqG7ALaDAeovRHe",
  "key31": "4EcAk2nRLtqVuakDFowbnTKYRqvXuqFvaCDpGu6r1JzpUhHKq2XZrGnny3mpXBdo5fDhpQnfco3ySwrfUakQDVAu"
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
