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
    "4p4afZ66XvfsXiVgnoSYcT9mhtyS3kgreAvb3M9aasumoJmU7Dhn2FeQ66FTmQb2GyeSsWbQiNGSDoFMJ7mJgiyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBkRxV8yPpwu5UeceyVhFyPZAFziKW889pCKic7YNdhZMYA814YpXssYN29ME9rnMyWrKC3D2PwQ55fLa1wVinL",
  "key1": "5g7AJUJHtBcJWiV9hq8dxoApwJJsh6ephQWZHohEfikDfibExV56j8EZhMoWn3Whsg2bhArSg9g1HiCPskYn6iNE",
  "key2": "5ZsLsS4evxck4xDhhLuki2tTDd2PyLHisxTp2CZmdzocbkNeZQtf4cp4TdRzdWHWmwQvcDtcFxAZ5Y29g2bPYWyM",
  "key3": "4JWRAwaZ3ex8psn6B17GBZGW63dZbCueNNgKZBhNE8qYJomemhDjizJW5tM9FnUS5nPibES8Jsq2yGpYJsS5cf19",
  "key4": "2EahYaBMUp5VybTYQpeG6u2KjxZZNNED63WdAUTq2jMXEABhRAeFYnyjm1ZaUk6nGo6xzXvaCromBFCqanC4iM7u",
  "key5": "5D6r89rYHsxDxDgAjK5zDhPsAt3xuxEPoFxggRJTptGib52VfXN7dU8JuFfaJ7u6Hr6ohDKv1QPSYrJoL9ru8kP1",
  "key6": "2zF2BFajgVBwZArMUcjhSnSpEF4RfG6oEgsvjGwcJt9nnifE73pYfs4hgjPDA1y5hNkxWXeFHVW6tbMyPUQEvtLi",
  "key7": "fTQvQGH4rxm2JhFUPhnzfB9vq54FGvEeSRQjggp8Eej2bUkNJa5ppNNc7vb9gremBFNXUnwiSiM7eme3nJum1Yr",
  "key8": "3sd3nkUrKFCGRmeqpNYrbaBoao6Exy4vhNgpuRgSZkYmDiGsaudiWFdTfJuzt7pw5aLckeX3n86er1nVGaZgMVdf",
  "key9": "4imQR1wgtP9RYmtZ6YmFe8TSNFnSvvYeydRnjaUcn1z2Qy7Z1wWSPWZcXqBKdnyehzSURzAmKaeQ2mRn1JCKxcPs",
  "key10": "46Y857m1BZFnkCQiYRmX4uPAeNVpFAxDgSULBiNCyszPL1jm2YD9AcXsJwMiRcrqfsFMZ5eafXSQ4s5NF37abN8z",
  "key11": "4ZKrDWNcnnJay6qBT4TLs37VpUnCfAzZDEFfSaiiKgGCBtp5i6yRVWZtacMpfMnpuLZrut6XuQHeEwudJi7hbXaY",
  "key12": "2wAxetShgn23v9WF8diEtN1CcjUZkNbWoDKa4oMgDgcgcogM5htRCFgjgf4RUvg9W75fDoQhFudz9zA1vfo1Fg7B",
  "key13": "3JXR8usyssx1kkZnKyWHW4JSTQZ9bBK4wXqxnAMxRkRoTBfrjurrEw5ngLdw7G5zyP5LChLaANX2x5xiR2jHeeUv",
  "key14": "2rFNxXbHr2nd76eRKgFtWqw3J5rSGpaDPfyKkLtyzXnPchg4EmkAQCXgx7RSPgbZQettjCa2YC49XqD8VK6yjbHP",
  "key15": "4k8ubNDGbfrUdxEukk7zt3qvNtQMAPWrscD3XJanHSz5ViJYz413Aanq7FSiVqjeRmjX7cr33KM2zCb4S49T8Roa",
  "key16": "2t2EuSB31EnyFA86nr7zDotTp8JjXe9TWGEPMftvJTLB1jb83XkmNfxkdLuowQbuWCj8mq9CTuLc5aUzcK3h2ZuQ",
  "key17": "5KnRjY6Kpdq698NRVdAG44TZpiJomLmjE1m9bMarQFMGs9KDdJYgSDxUdkZHKRdemh52Q8oE37KgCszGy4rnDpyp",
  "key18": "2r86egXNUuU6wfdAGsjdHaLyC6f69WXPasL8Exfx52V4kxEriv6cMicXxyuzVSsPX1SReubMzLgG5oJgE2X2ihwW",
  "key19": "T2iQh6LD18RdiMP542ooyyFys5mF7jSjNYFC71QB3xp4CsmgKRpFZmMLU5FwiHPf9iCtLi7HCrLJntypBCPErtB",
  "key20": "MHwpbBBrStUTQW77qnGUUjWxrEQ48XoUrbjAjGiEVriQ9ipd5bD37X6VTwugti6NwEmWBPkpL7s6TztbahQSRWS",
  "key21": "3hUcqoFj6zwZtUBbFEt7AQs1VbSpJCPpKY2Jhb31PM3S5Mn8jqThucv5951oFpgqdruRN28ABwKN68rw77jfbmzp",
  "key22": "2E98XydwsriEzJC89Knxa6x7XVwhpKtaCgjoE2ZjqVTLPNRZBWh5p4RL3hE6TWcTzyfGsR2SKwyazz4Sqf44JGPB",
  "key23": "5HCfR8LQRwb2PhPydteDiMimL5meo9SYmuba197aATmjf6B1PCmzpe8GyxP83RUfKhikyZ1a1eCCW12XiJdCq755",
  "key24": "2p5WntQ6BP9yc2x1WHKVWuFuA9sWCAacPTPK8qfVPkt1RnvqpaXGPKH9XVLjFxRWaRXj8iGMFAhJsBsK4ZxzGb3V",
  "key25": "J7BqMq79h8n3Wzx4B6YfMJdwMhZ87AxbyEKxvKH3fzDuBxF9pAguXSMWQtp74MfKYF35xe7w6EirU4FsvjUPMPC",
  "key26": "5kg2odgdKzsscGJmxjXBvUWe7WP2REcUW9LxTsGFaWtiExYXd292TcPsCVAGcaH1hYKowGQZZzFQF6PZxT1GwehE",
  "key27": "3vfgWLhPspA6ejVEnPGZinprB3TREszj9LCSzXnFfVfRWNFF9fm2TDXqNPe7NYbcKawBj1jG7vUZM94ChtMECZqL",
  "key28": "W1WSoWaCt7eyVLr7NGyAAdHw7cwJxXDTFUtWGoT1uSYnpSF2tyrkjLBxyh3nneSPpH7FUgNnrZStrbPxomAo7un",
  "key29": "56VsNjv1JfZvFex9Df7PEUjc2PYLFF9TmyUiC2GgigLDxfxdicDYAxNw9cPvvZ7NUzqdURJ8LqpjmHEBJQYB9osJ",
  "key30": "61RBKEiKgZx6dLrZH6NsBmfjsy9Do7KzDA59dLGs2wujXf7cEXAcbDxZBAc3jW5k97JEeGjUd1kxGB2eAXtS7umS"
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
