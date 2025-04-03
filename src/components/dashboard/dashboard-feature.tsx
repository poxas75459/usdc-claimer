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
    "3UYvc3zjnirtCxxp5RXfPJREUFTtUvjF26zfaCq1LZtoKPfvTmo9Ns9gBGi9n7iLrBewCmYyv4ubZSzkdwUPeegz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8u2wSnJF5zPkhK1cT3q5D4u2Q31MxiMqxkaxe2q3sjgn5A1D3N2csLRiwV6nC6MigwdkRYdsLQwDsWPP7A2jYt",
  "key1": "2uW2AKoL7k2hYKzcNsxrf3xdqumz7sLHnCaTAKTT7NzzAKAVrG2V6cDo2NFPfc4kHZbHwwo3TrpoVG2KoxLxhp8o",
  "key2": "41wU9a7ADHHwHVGdztQ8fAVX1jvmzjHBDwCyVovC5h2iSeM2d4oep4c36dA58jxbcaC748ReMC3m34dt7yjqmhdC",
  "key3": "2Fr8BVM46JhY8HE5Ts1Q1YM6M2uhv1X2QiB5NNKUDzFAaXJSkUbAEQ2USZU5jqo2PBPyboMs2V5pLDACmc8cMFba",
  "key4": "3vKuuXqGzu2Tuoh6Lcg9cZ1LyttYhpeuAn467phQWibYe3kU9dL6oUUwKUTSTg6JwvsSZ7JkBMhhb1JgTb7skvq4",
  "key5": "4jyhpFGchbdeeuYD1Hp1AGRE5D9yKXvswjpSvjKmvjjqCtUPvmdeueFKeAwcUgKzz8k2TWcMEB7AetMw7631Q2nz",
  "key6": "46ANcTnKFX8fZy3NencLrh4fcbdcKqj3DcnbGbxJTddUq7UET15xPGxoFcoUFpbpkC8F7yCJkzxeAERzWL3n7eN7",
  "key7": "4b6pZPNJndQsQE8k4M4JwWWLSuAdPrTXcvgjvAckcE8QEjrVbdwyRvQfTiJGNsvHDbr35DDY2RVNLsfb2KKwfEG8",
  "key8": "thnkhCgVwuZ8KcoyXgp2novow6VdCRhEaZ15yZtPi5JDXg3RYeMYnvTXr4BnSDVpTrWS2ZjpWkS2JaEveHp7jpy",
  "key9": "bz1f9QFiDkuJtoegJTBuhKX3gdJNvJqSajzDLbtQ476VQe2npaBuj2Vre1XyHcejnDzh8hZMpW6RHfUy7yZvhsz",
  "key10": "5LCQAKmjXfgwPHEa5fKhRjDXdrptoRxm62EytHV6sKhQ21M92aPFi3GWBbZLx7ApQWiAca7LUGudVj8i627MkNAR",
  "key11": "5AExkYEabWeG5gFnBNYxwEpL9pcWEFc39F3QZdPbUBMFvqjTHxana8HATpnsLAoEX9kxirsXgbj177L6SRtkvMzm",
  "key12": "3VNpi2mZbvWLKdNfdRRqVKMybWKfHx29vEWTUoqBT8Q5vGEpuecf655YZP6BnpESyHkk2qyR2ZMo4u9SdRRLSaN7",
  "key13": "3ryDLzK1fKXyLRQFnKLbD7bfJH6bBTRWoAQn1rfzrXN1tyxukbuToXUd2x99579NV1E891XZKWnDvTYYjxS4ywXB",
  "key14": "2G65V9bUdkwZrQLAHNPCB94hhfuPJCeuQmGmRXFbQXkAqT4kZM7DAb8Zxt8jznrjBLx5GjvvGv8SopnD2JXgy4ED",
  "key15": "SuAhtXcPMgSUjzonQ6KoXu9b1hoNUhoU47WJ4f4ZRn2f4p8HoDKFDTSP3a2NGMKV6S7gB3wpgfmqUWiPi5XZZHF",
  "key16": "XBzqDLNDC2Wi1W6rCPPaELRwmPRpDxYYYhFPrGio4Lnun65phvK8RkhwkESohMTi7m57CtvtdXKkAuJtxB2e7vy",
  "key17": "4naS2pvboFbCGE6QHF1gaTg8RVixg4Jr4pkkeYqe6nU3JKEb8WiryjBFDmqwevnGhdB1dN3DJJ4AvmduJoDaky5W",
  "key18": "3mQVWFTtYvXp9CyVsz3NDpKSkeN3r4nNA6ic71ceNKQe6rqX71QPhkB9ukkQnnGhUDz3azKD1ZRdrUadydetpic9",
  "key19": "3wGh7WLQtH1LpoVcj7sY1yxEuCNdgiki3suLK5fJ5hyLhawiZFiYb5kZcQSjgXEefNqXC1aF1BiK6PN3Fb1BRi2A",
  "key20": "48pB8grUeHrWKCyZuX1YPkQ2gPRuTpBN2xdB7zjAgcRK3XSenwv5ucE9MEYounarV7TRCN8YwQgma3gtGUoNC7yQ",
  "key21": "63We975xHC7n5ifJMySt36uYsV16TEgSsxDPAiAu34PUBNW4vWxPY9j3zAbSyJVxfQHNVtwVkJtuBEgB3wNtcrW7",
  "key22": "4mMWFDyvLXoyKqgFoS8DiyFK3pRDNvZykaGzDQt973mmLHkAVrsJjPsqDGuLJzNCNxh3T7TgXYmDhafHEihY1KFR",
  "key23": "4get5ywcXrmQmcbZ7p2V1Uuvk43Y1f4PSkB5ttiXoPpNfH22VRZBU91UtTCm33EeZrfRbxn7CWLRWvpqzzXvK5ns",
  "key24": "3TBaTYp28ZVDvK5VUexfv8TX69sjPkSuZUPcRYqWiKUTEExjwN14rN8DFjXXR1MEpgXXMoSutkoWHEbJvAhXtQ7q",
  "key25": "4Dm5cqXtemTnSUaBnszkHowJ1868VFhLTsPx9hWtU8nhok1TnvLPgCSaDfLEnxpf4TA8sJn1dome9FC99UZ85Fxk",
  "key26": "4KXRQmoDnBB9djYXhmawyNKPL6bUoAraR2SDbmBaigFzZLkAnxvnjFPXZ7uiKBbK6jvJjqQbXVk1aDR1wPS7X3xs",
  "key27": "SQeEzYfCvk4XHt8pWmuUXhSowYBoe7LkMvJERVkw1j7BgoikDMavd9EgFTWjAn571uxH6kKSGm9FXtrjHGVAcqU",
  "key28": "5U2DygaqyM4t3U6DWkH6KNkB7aATQogJm7sYdvfhQZm3DhmNFKX3VYRvP4UJH1MybAvCFyfpsW4c7hvVrceEWXty",
  "key29": "2GizZhcxD4WSdUSgZLdUk1YyKE6wVoEMc4g9RR6PYPfCT8oQaYws885b99PqmboFia3ajL1LsS591XwVPN4VFeWS",
  "key30": "Fra6bKHq9e3NE11R5P6bNUDa6FZzWaqJe7SPUz4ksvLwQWcNZZ9kYKQeSKJN9BxSCuhCxve9Yw3SQiBsPJxYcTK",
  "key31": "2kciWFj4kPKU2hTMFNZBiMAY4akXdFby2kpu4dSCB1KB9TXiAvcMsUVTSQyPuJb6Z3x9jXcXQzJoVBkEmyTEPXnw",
  "key32": "HYYvx46pFZ9TeLYX9iAKwJjADf3roscYAqf9bFG7Y6bY8VAA9yaJtJVKJmC7LMVtBmVEwWaKVy3VSiezMpVMaH6",
  "key33": "pWMrHdMdgySxMKtvpcNtXUgFDCJGXnGi14Ho89tJiCLLC9vaRZzb1kGAcvpUUqKzMZocb2uvpmu2kRYUZ1BZ1Pj",
  "key34": "4tzJJbNiapZnfzxbFGUwdGtiCzTWTq99dc5hNxJpq89zJnM7QBmnKvZxE4zoKWJ5PJKXJz8pCkoaxNwzSG2LvS4h",
  "key35": "4qK6YkmKwMgU9kwMEd9bsbxrsXtpgS7qQG1fUWaJB2YvFtMdP4BqquvVc5eyXKPEb11ZEWmzsEpdU2pH3pTcL1E4",
  "key36": "24f3TSs4Uy3Rsmhi8dSEqHKXWexMZdRuJgtGdd9rWNudd7hNibLqAob6hHP9kjEPb67m5z29c5EDnrRMuo2KTXC4",
  "key37": "4gqz6SVbSTkULJWPU5hw5xSPVM2u3c52RR7aGk3LvN364qxFewka7ns6yVAwduvBYzTFoGbXLiza7ujaxRhvWns1",
  "key38": "2jTtNZEjP8a8bQ1d8npR4PxKtAL2wMHQowQAYQhuBMp5NJ15ndPabxb8Lzws5yn3x1vnyZ658BPxgx9sPGYCnW1Y"
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
