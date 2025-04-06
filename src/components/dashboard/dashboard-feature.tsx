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
    "EF4jkNHMso2fkRQB6vaGiTXbdRQ1YWrxdhyqRwU6DdfXgxZnc3Bp7A9Vp9Ab4iT51c5svC2XxezNmnMe7AapX75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzquY3WPm5WZG8QvwXkcxwrXNGjgy5xVHxqsRuWMsAMqC9Uxof7jiedCWySPF6MkqNRPFhBMXmmz5TEjZYSVnMi",
  "key1": "2bKDjuefVp4idQpQ6VSnKTi5NeBzDBhh1NPGT53DnznYzrChvSP27QZndK28XPLPxHYWY3zbnZKauUbgEiN7fPXs",
  "key2": "4fNbYtcva4FpM5XqbLpd4LSGFhhu4mKmyNSLeuyncuvXR8ijd75rWrd8PbDEeZwFjwNXuM9s7nE7g4CrW77jjdUo",
  "key3": "pMM9ag6XTDMSfb7qFnGfm9iFbSdbcQMdYTKx28pHx7HCVSq3Shb7AfowHKqFP8hUdY7B3aoPZQzhYF8VCdfe9ee",
  "key4": "2KR4FmFPi695wJ6KpDNvR1eupwNTjW63UFJ63BSjdsJNvwQ6QPweyjVD1qhiUhmMk7ujBqZGw4mGgibpkXn7zjy5",
  "key5": "2gXqPDApEsoou44SjXEweKiTPURJyGa2zJmgDjrJu27CpQpyXJ98Vj83hTZgqPrDvNobgkLUN5x2i2Aov8HMEFeA",
  "key6": "2gf44txGd5tL98ajeseah3gs7zpZvNUDkeCrBrNLmkAgwghZepDnZNoWmaxdKnEN1j7VWe4RWtFutzF37XSLrvxr",
  "key7": "2L2LSeGxA4caP8Ltpn6ZuPdDfENX1nZXdYHgG5MeeUogBWt8vqqioph9NaxFEGaJKzwjxWJGCFhcoNjbe3ifwTc8",
  "key8": "5SE2SH3fA14wzsunyyDpNcP6pkuShoEECwdhrp7EMUXsE4nChJEuP3vfLLojCe4PNeD5XwYHe7ngV4pJorva8uxn",
  "key9": "3LEDPPSYDb4A4LGZWdL8N7prFdB6wQJ38CmFhSty2crpQT37MbN8RGqzPHXSSArus7b8y7aYfoJZoMTTP7PrGHXp",
  "key10": "2ezFmwjgkCkdtYk3YPgAFE81y5tEbnJ2PfEp6YhQVqA7Q42ygDg6kKWottGSnMmTiSneapGKFsQwnu86sheeH2TE",
  "key11": "5gHbbEFPcrMuSHArrRgvE6Ve5pLEwFrT2nPoFruqrE8CDYRERcdbQHvdCazD8nBuwrXWBaRCk9QWQA5QK1hjiYsW",
  "key12": "XjCvT1sVMQi947xvdfTmLMfu41oW316HmHDbQHSPEeaJsMFbcp9sAE5Jo4ATtpjTZeECt6HDR6waXYnHF5gNsS8",
  "key13": "4nmHQ3VETHP9TVsrP7nZR8nSMLdMAGipggkjwm6XWq8ov4qDXHmc4PwgipWJBZim3htrnVhYrxnF4tqqWB9gd9mk",
  "key14": "tJafczuQ11PgEAWriqBXi1YAjz6e9BKKq2sFK81FEC3DF3qE5QiKKUiXviETALTzpQ3gnvgVJsCm5tqKNTuVL3X",
  "key15": "2g9nYJDDtdbUqXchaEkGKwZ1akR7afLdpGSsyTQVKmtxTYrjdoex7yBwaDkKrL5cbzwNGEkST94pCx3yuNhHjTua",
  "key16": "5ofgXwBeX7wPZ3jmWL5otybTX2PZzgnnwtHH3wRmA8nccByFwrRUTHgnhJsAzpNqo461jHxpszgrTqenqRYjdqyR",
  "key17": "4sktqiRvaMpFYKEzrPFs33ajTjUJHz5fTzjBuKS1qDpMqNmz39X6UGYxMEdvZQycrr49LUV2wCVkdJpujGW3mmeY",
  "key18": "67q4YVk9pqHyUEPtCqmxyHAcZ3FR24tx8EzLrLhbUMtZj582jkFh7L3ftpMaCX5Sor7hoEUNQNLnDrKiFZ1qMMSv",
  "key19": "5MukfjQgDeRiWAWo36FSb4v78b1dRFPQKBddhPMivZDzYFnVsyRs4dPGvB8qJYzvKna6MdzsCqVsgZ4i9sDFeAwW",
  "key20": "5rQurAWqGgu7CG6JdHdnuhVLYbpSQqsfb4PesWcqBTRapqqK8dmLeuDm9XDRjrf6uqycfcXppwFL23MXWtbk97Da",
  "key21": "3CnLRHFgtCqsMkR2exAKZoERwpAHfKkf8few7X5nc2f1yhpX84QsufXBP3PvRtBBLnm1whqyg3CPUfv4ADyfkpUa",
  "key22": "67U9ZpXJoKtN9D9tssp2NP6dxSMN2xkouYXXjcCeSG18VX7KZMxzjw6myZZtc9PUzYH6tvwndseAtGdNkFJj5rez",
  "key23": "2t9gGRboyYhGzPseMYvyeUiHonN76eudbEDMQzyx16rBUT6F1vZguwT79yMaHFNs8SnUv2BJ2dSUgeLaZodaMPsM",
  "key24": "2Jq6SPWaJu4CWLXP2mHPa8qTkvgW1mo4Y1RStz6Bw7pBvozzGbt3u2wAMH9rk19BMfqEmfMzS9VdAuXPGUi8eU4j",
  "key25": "4kGDT3YK7tsqUt8W4ad79WpMTyioykgWWJLQRSf44VfeJFvtccCDcUDhSgoBadH4pkvxjjb5XCGtMrtv1fqkCE71",
  "key26": "2vCSEccJgZsmPYkF3acjbkpPnSavHpThhDWrREp4TgvFQ6Atkui84aYoy4yG6ui5xRaY7j69LR6455uuYSAEd5Zo",
  "key27": "iq9gTykDFfMGkjjRwwkqpPXAJ4swb9H53sDkgYrZTcb51pR9mznCJABaW419wxHgU4fKARJ9t8xcGuzZJ7FGTyc",
  "key28": "S2EwWDawaeRuRbY2BPTXb5sWnzcQJ3CvvqmjboHrR5WC9rn6r9AW4sfRzowUGMjojVQHfDkoBx5FGBF47GdbCXr",
  "key29": "4aS5vc1N2frpZmghTKKrnptCJ3o9WTzdmK44kcBffiX2ydm3MUCTCXmhbGmBFn93Abbrwfmn3tTqugT3oQeyzBLV",
  "key30": "3ax27s5sumijFnKEMm7fKBNV77buiXvZFVAKHhGWXwFXzGbyTgc1n6UEQGZzMT1FMvehZaJQLUvVjQbrnVyKPbV1",
  "key31": "5xjCNE5MzomU8wePEvPLu932Rdso3ss8cFKN5sd1noVSWiaisKxqP8NbU89zNqedXjv5j9t8fCE5Vw5x9A11dYYo",
  "key32": "vjqZACemCKojz5rvwSJyAjjpqCfTYEkwxDqFx2KExtPf8B4XWoM344utZSnhdKWkxTeUh8wTUQ5N6EQGzGkxhro",
  "key33": "3rw88BvrE7mLiHyMTm9WnWFStNUhX2dvwMt3nAuQ3EgMLFEeSyNWowUN8KFPFXnx5mCAipWpovdy5cVe9m5tWUhD",
  "key34": "9hTFpikCcGN5nDJnHGQTVVnRHDup6iHNCpR2D4HwTA9XsPiYmg8zHK7kzcphJagSFKhU4ScMMm22yTnt5EyDWuo",
  "key35": "nStWK4wAzc5Xq3RrsVUwwdeNuwPYaUggNoUoFZ8sz14vRFqqB9ZpJo8UdmjY3jygYHr7WnGe3UWDpfWPa3tAnRv",
  "key36": "qiftf8WcnzGanaw88YM96mNs4NtvkvSTz4t3dsTqC1tfWpJgYrc7GR8QLpEjzjVXBRn21pBJuWj5ebwHPoYiC2c",
  "key37": "5Eg8j7gR5H8D4t6ASc1uUTjS4JYqBKwp87c2jtc1QxTpPpvMmeXFY8Ymp6wzhS1H8iZfRX5FKgsV4UxwXsxk4VnG",
  "key38": "3aBZrawF82P8newNiArS5NrJNPz9MWGEQpbhbpt1WHq1iQPusGD2LaxudBU3QYojkdR4jLxXY9LyrgW3CKJzpiBm",
  "key39": "5fL7dhDGc3jU4VpsTrL2xiamtZG3wauF9isgKrJLr7aitwhZSVQ7aV2Lu5FYJFVm3xLc3mfavBv57wBNoiCPMr1X",
  "key40": "qbLgBz3wJ1rkrktqMZDsc7P4t58C2zJPhQwNT9xpfpUBd3RXzjnwqGJQdywEHL81GnPYLVQm9CjBSFnTsnSgbKw",
  "key41": "4EKyE2paVyEG9D2dDVLt9mR4qxJtcxyL1CS4YB1tFLFAghddXmmQh6kJ6Bj8iXpvCxx4CFK4ubh7yA6dFQSaWyfm",
  "key42": "38ShCf168yMpNkk9rLLShQTNYfkdcmtWrb2AnCciFssBNsdspMZHGQSYhib3nGoE5KCzW6JDqTqd3YR8zsQHu2Rv"
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
