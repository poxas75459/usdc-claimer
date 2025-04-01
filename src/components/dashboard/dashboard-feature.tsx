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
    "3gLauQ44h1DXht1WWbbvzim9cgcwdFdNH3ZsUT1R3q9X5URQfDg4cERm4gGjPmWSh5nCx9JMGh3CFAYuMNVtnWr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6qMNbqsxovDmC6sq4r5fcc7hRX6nrUGCcKzahLPGCr2offbv1ZrmrefkZqTqG9EWeWqGq1nhpCTcQWkFCPAQwh",
  "key1": "CQTzk92dx36j8UeK5siLdtYket5YMyFQoMgdhJCVtwEwuJ1kv5sNv41yj41rBxCkzBCw2XCWNxZrCLeqKTKFmsa",
  "key2": "3E9BXoKbnk1jrH6xAq3w2LaxC3PJeuDdqEvwJaV3WvkxXabq8LS29LU4jG246ustph1XajaRvKcBHVidwVFadNGs",
  "key3": "2EdimFCV6N3RTCZ7ryQgYiA8jzsbvfDzsUqkkuLLhrcTmEr6QeLaPZyd6baGuuxqrFmWDCSbRTFQsyeV8TmbFGJL",
  "key4": "3F9KWMjQPZpnPzpjZt2uQFv8BqpZt7PUgaLkN14sW63wXnqHAW5BJALPqdpBQaP7wrHGHCDwqJ2uMSm7exKz8cBj",
  "key5": "2cgKCFxFP4tQdaLM2eNxexuekrio2C9CDnkPEL1diFKRsXUcpdgfXfzC2sdkTAGmvXTzNgn9ApBJjtduC3FGAgbS",
  "key6": "5A3HVN3SVPyE9YefYCBFyxD6VFU3FWaRtnDFm3bPtjVGrxuspwGKG6nb8s3yhreRMAzF8drtbqb2b3jcLf4EUEDp",
  "key7": "4wjRpPzRfgQgh1nt817ug2UJEy8ZMdMvMZz6FtVaGdM6KM9jJDkvzuRYXG4SxDsDbqSx8Y1R67o3k1tpJA4CLb2X",
  "key8": "5ftvLZBaTpP5xvUxjxyzB66AuBBsCGKxDspc43tjfQejRNSXV5V4THMxdCDKJnTQFNWPe98s27TbU7uLDGSameWX",
  "key9": "5Lu59GkHzJLePWBynPaqTfDPoyh1U4wJdPhaMWsBnqLDdmqYhhEZRhpG7BZyahXw5g64aQEZx6xHN2y9jQMqezS1",
  "key10": "2B6v7L8TjuvqzjgSbjaZ9MCjhRgxYgHEsQZZKy87KbbDS58DVKxEMR5xHaXn3p2sH7oC6KoH7WBG4DQsva17xcRi",
  "key11": "3aVYGs7f8Gt4kZrrNcRuwkxkqX51gFRNHTQP96FUZwxYM4cHeKtort8aSz6PwwwYA5Jj34F3RBs7afcagyhMpz9i",
  "key12": "R5Qncee427AR5JdgTK6XHKvBjCTBuXZ8rHCnv81FhsKJrmsx2Cx352ugvrNzf8tFdhQZfTxB3VrN5SJx8BZX1ff",
  "key13": "4PbhS6vsYXiW86gqx1YjhbEpts5Sn6GXmQ4Zq3y2EFgzLaBwGs8qRe3QkkHiebo1vz8QVcAi1NPJAhvs5w26qgxY",
  "key14": "NaoPw5rf9X3LM9dvqonKce9RakoK3Nmsz1WctArJNJkuXr4GxmBcicwQcJJBJWj5aBca7d5yMf8YV5kKvRQLhfM",
  "key15": "2TGNQurroVdBEfWHPq4J4oBTP3UY2cMji5uxCVyiWTvq5L9xJSxE17umt7baQ7ukg1ogKb7Srj5neU6mqRgw2SrR",
  "key16": "2ATHB6iN4ERpKZJznJFpsfMhDFkjdz9t1xaeUG6YHhjV9uYmDkAZU5AYfm8JiYfHT3Zqt8cMmZGzJYaLtgMQusRj",
  "key17": "2Zi26ojWfTYyVPTpCXo5WrCKBEqqiYYVmWXQmfW6XFPhhoMGVTMT9sspToyMBZBZ6btc51ZWPyDKzqUR1oSVb2GB",
  "key18": "5MpiNTV3kM2xfZSetjugsJJruqnpZQY2D1tcB1yEkFio1hQDhGCdRd6Z22cqyfDNcnLH9iu4oB3hbRebWk8ioBSq",
  "key19": "2c364Ze6EyfePexxBnH7Wp67pFvXU6a6PM4vDdM3u3fqrQhtSiK1ZcejoBtJkFzxuM7wdXCKuUuCyGwA2eCNxHcS",
  "key20": "2At68karbyJsvgPRV6LTYbq5Q8GSxHV9BBEo5LegNufAU5psbPntEViPSXJTbGCXrtZ7Ad8njsPQhiMfCCHsKCM1",
  "key21": "R2f7ZCFCH76d8vcFj8vkDRSvaW5JTJYriYPQQ8pCzgwWALbnmsMADHMryCwwQvrWaRcEV6vBzMtHch7u4b52V6V",
  "key22": "2wmVx9FYNSnfAA42Ee7Q6LyWywsmZgoihnKA2sKbEfEhRzssDTyAx3wjmpLNLYeyRFAyHg5oP2D7YSDkHsBPs5AX",
  "key23": "5rdysWivrmaDPXcuMvKLkiRAQ1sb6cG1EXr4UKwhQSgAYRMuaGA552ZtZReHB4oWqjMgo3mS3GRaZZXzXigo36CR",
  "key24": "44cLb5nkTw9GBSXBd2uwHf3nVjb6cyNeZbQsR8ZSCHCy3b67b22QGsXC7UwqcbCEhxzZFdKKyCoKjo1k4wvpjC8V",
  "key25": "2D1sbk8ySTvBTS56oMQ9G5rVdLB1Jp59wutUTun4VVnFjcQd6V76JwFwp6b67jgY2LVSDEFfPNLTD8HM34bC3Aig",
  "key26": "5kU5mYaaEykWo6851P2Ee3qEKGTrpsYmWLDc7EMkQaKTB6tZioa1x5uEgWJpcrKLQziFXVMG4jWNvKUXjMRAdhUh",
  "key27": "Dvad5Qw75sA8UfPwBoDkJ2BUzjggE1uZrXxb6rLpg72TKJUadetZj8xckfWXrEGLrf53ym6Ck6mXf6kBRH64C5i",
  "key28": "4QLb2PhoC3PRpMisyRr2TPSKb5isEzb161PMRVkBKhMzPoMVH5wtrh6CtshTRt8XQUiVoZ8oGfR5vSTHmEyZjrfc",
  "key29": "5aWf6c2vv5NJZjuWuqDQxcbdo71M5ELqJhKp9A4gdqie85axFt6RgY2BUG5GZTop8dXiwKL5HfJNArptnEbQhDSC",
  "key30": "jS6bYL9cQoXpEgMRQcTv271dGrmpRrXoxV5hSvj3jZTiEmckyM5ujp3hnaRQ1ZrCwRqQ1yq2hVT2D4HxAcn7ukk",
  "key31": "rXC1EJo5hBFnBb1AmgfRzBjxL5eaT7smhDbqF5rBFbppuJJsdUge2h7QQj6Bi6N89yqCK6yiczwN7gM2WC1nBbN",
  "key32": "2d9SKw8Y1LuSR2SHGERtMFiXQ1AKPxFNnuRaKH9xWqrEcVnaGPwaMpYioGHFPQishQ1DMwfiwF6vcapWjF14zKvR",
  "key33": "w2ArurANPEsJkBKSq6mhP5gVpWmkWjwT3ANPpKWMQsE5Q9KBmMWmrLGyoWf4Z8ZrJAGkyCgLjYBMVyfWbfyhghU",
  "key34": "3LMhmy6z2PbanS4sfUbVE2XCv3uBfxmFoEPNE8nP1Kvxg47a69N8ts7s18EnywKGih9sCP6eVwWpi8MGcnVAjVph",
  "key35": "2HTJZvhEXwEzKJNDY27PBsnA8fmhvRyuhZAcUQ2E1Uv297VxMAmrsJ47VEXviwmLdhWdSNq2UeKpePypFZWhZJUJ",
  "key36": "4SEDhjqXY59u9A19iSNeodCFpAkvbTKnSKH75CEb7P1wVPaMDx2fT5s6sdqdYwwDUdmARkFaiHxjYywt8AeVezeT",
  "key37": "49BzWLHSa4wdSDnbeuETD4XN9ZxcNHoCKP1ZHWgRZATBhrqDQWDkgB5N3CzAcaapF8CvTVpceRHvmfoBrxYg22np",
  "key38": "4Zi6hbK48B4umqnKXdoFiKxaPPt2pWEdXKJxhW7SBDQNREXAQpiSRsB2Epfic1WtQASkQKRXtUi3JFw9Zh3bVtMs",
  "key39": "2Fu15vi1Pe6eJhuLDmvWrRy3cfmjaggYUDwfVcB1naKph4jNaNnAR6x4f7mWQty6pdDQgCDUA4GKYS13Sv1THv4R",
  "key40": "4dTqwugNPX4Tk9baSTXQvUnQBeiEF8r6NNYXiZ4GcXXeL3YxDVWZhgrjdcEWJpMGsp9P1M3A4tL5vbZ4pqTxM65S",
  "key41": "2MaZxYVXsBspBPwpaK5KhX12kS5FUVBF1eaqrjUpHYf4FAE6sat4aDVqAU41F595p9td7yTBHZ1rmAf2wiVtyEZf",
  "key42": "3fFjRrLr9Ef543Cq88thPKXutB3aiDHMtyRkpqm9roaEoFXXSPEQnE2RzYBC9XzoUW7DHzD35LszEVY9y9ro8wK2"
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
