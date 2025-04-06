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
    "3kMpCT2h5QpzVPaQzj3xoHVVkNVPqTMWgASwyAouRpuQSGZdCfgqxxa5y6hiVpH82Jiv26AqQ5PiJbjFYgAnZHGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3EmJKKLizf4F6dGVy4n63yK9e4m3LnkGiH2bV4ZprYfxneVCfvJq53DKawtbVwZy9qTfLUraHjjkSy6ujtFyHN",
  "key1": "AUYyfJoro7mnEzjbAwa6dp7bcQahV9JDyNqQLwJzVZCw41ZotEdYw3jvRzh7CpWKy3vmDk24orM1u47EicpDLfh",
  "key2": "2Re3eNu3T3ZSaqAEdqhGqWKXFuGcoDnoPjYcpgaudr5RbEwHvYCgvfL3VhH8NMxBTx77pmg1wGjMHynks2zzUvoE",
  "key3": "5TPsqbpxFudyGgk6oyXMvWm3qhGVqvDJedRP7xV8Rm3HGrjBFVDaV2c5Fkz2N8yRAkz2mUMtBN3vM68bkrEXmN7o",
  "key4": "5csnAMPGwWsguvM3CAX9K11aJjjM79EiakDfSVbokFWap4Tokmz7mJ7WgFDCpivbDL28k8uUJNZVykP5oE2jyh4P",
  "key5": "crKqV1YDtBg1njzhmw6gPYSCYkRVv69dVA16Ri5nr9w8kkAdRB4d5FMvcSokumn5sDnVQpa8uH5siziFt6JXZ8C",
  "key6": "SdN9q3L2H43DnEkNKW1Bzj2J9PWigmCPnzMhDDEVWxAyaqaYabzWT1G1K71nMDcHPPAm6aYbAeCRvot6fBfXQQh",
  "key7": "33ZGbY9wxRN5xHT1ZSwRnRYTZDoT1D7qC2m8g2jKjrkubY3HrHf27LrWa3XLdNZ8kdg9z3Bizqe6NQkQNX7BbJrJ",
  "key8": "49zVH91Diz2ubfJsbBebDshEbgAUpSu2PbTpvP2K7cknSMF77cDkra546DaSJJxQsygPqRq1B1YYscZk1o9iP42d",
  "key9": "5TAvfxMPdxRwzaJF6KqAbXHwyVDASS1WTn52Nm1ZseRBVEv8RS6x4NBnSSTFcfCYMesFaLrjCD42ke2B4uKiHkQm",
  "key10": "5uouxGitgW8UKRRYUAV77pn5oApsFapj1tn8UcLXfgbs8bGwPp9fA8HDXKv56StmXNvCKsnss12udRGwxVGWpRUN",
  "key11": "5eseq9PUtp8wpDxNcEU8QGKryZ6LER8DWTqXhEFXQhz1d9mfybmwRe14LdoNokysfKCdN53P3o8fvTSymrmc71WG",
  "key12": "5vfPPJweRiMedUjQ6G6M9mLo77iHw7asNjaDid5yL3E81rATVfqjpViPo6atKbueiKN53twCt1gF1DKyMVvyMKay",
  "key13": "3YnEU2F9jJvxgj4YyRP6yVac5LGEjT5o52mQ25uxibTRjAWkjgrZ2kByAvs9QPemuJFdivMuF6Ffc51sc8QDXpTb",
  "key14": "4jwTfB8pxJmmqn9TwPjGUyTiecouyD8G8cLyW4FFs8YBKrXGPXQQW5pPiR3P8RvnPwCH8z7GGTqbvr4tmz5PkWT2",
  "key15": "4xiuuzMHfq2KGJqcRNgJCr6uLarRy8TEpovDZbTc4dAb1pmAdVETozb2jooA8KWtFg4X19Mqv3XuBm9acdBPBfbL",
  "key16": "4kMRBULBk9EGHoLxfAhQCC2ENL78FWvoUUWLnarQaSA5sURuHtNHJW4akjTcMM2ZNgW4yqPJKv3kFnnospEBwPMb",
  "key17": "MWrUY17zvmn8AappA8vvpUHtP9yCihzWJRMkQoT18sdSxmQqhPjukx1vDkJngxAxAST8HtRpnh2CJEv8UUUZM85",
  "key18": "2XLQvz47bXPDnuLC5iDNLtMiz5sQS2adDVj5KdophxkHEwru9XVjhc1Y9MwNnxyNjZSuWJDkuHuAackCSiGdsvNM",
  "key19": "5RX7ZTApy2dyAtGjSfSH7XmQ6ABHVLsbhwoyctSfAoxZLAtT3S9DhsSW5jBhpdB3GAfc4SZUn3VmegRYNv2kVsht",
  "key20": "54tPaE2ZP2mjUa5HB9Svnm6JYCo8ZGa2wvtV9wYFrd1fNVTNpLLYTL5A56b7G9fGcR3U2gxnpjQNYxDYiaxq5qQz",
  "key21": "3sauuFxgCkeG17UGyPu4WhifUvQEZMcuZNPECEQScSaHRQCVAXTZxVw52XVghxSw47TFnUZmA3qtSoaombjqKNa7",
  "key22": "4E4rk5d21xNP3nEo93RMCdjoJ1chEyAmQsxh6vsVWp3ntafeVBi2LDisoXeu8YoZ8sKyGviie6whUtqDTuT16XMR",
  "key23": "5s5sNbTC9WVUovHw84EMbd2btF9uC7KAuQ2EGjp1bUdSm5JNAbb8MEpE7kfi9dTWC9i34BzvRGJH7jzyTWguCCRt",
  "key24": "HnkphQAJ8QZLhhs4euTjoxJczXzA91St12KEQsvNJDRee4HKaSm8Wv8trvqGUPgyzXtiwbsfQuHFksRSwCDCadf"
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
