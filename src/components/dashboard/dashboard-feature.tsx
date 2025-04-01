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
    "4hwoF6jVVcPCCn84sNxs69Fmoo9rXEUZRVGCeuWjiFAg7j9zSM8c2ExxRmMVvsPE15jafYviept72EH6YH5URPg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfzDv476f3jKEuuohjkFQPSF1JTtdirZempB49XqCD4QwUJ7N8SUGxzJQRtSUeZqm29SpszRtV1y6GUGNgtDVqp",
  "key1": "5JJgzcMxPasJ2Lgt95bbRFC4u7vc6khp9yuEPhtt6x24TC3VT8EmG4eVvbuiNawYDWMiQ4ZAVmmhyQ64J8ErnkkB",
  "key2": "4Lyi7QUPpEFpWAShxPG6c3THUVQLt5fdTwuXPGE5mBdAnxPSCfrHDpHGP16etyCHA8uUDrDdccdb33HVqxAP6RGg",
  "key3": "4R7X5HV3djtenZNhyXt3dqAPQDyYuvfW9oFXCrb4jzTNvEx8UCtnXTKCqVEzHGBgfHTiwzXi7S7FFbdMhMWnZpcV",
  "key4": "4Ftv8dSSPdW4mv8u1voeqZoY2Z8vneHVtkdU1aycVMDKXJ4WBkyKbEnkajREZaf7ner6Z7xbNvUgLMx5FaYYEgcK",
  "key5": "3WaLyU6fBYoGvBVcnjnJttSHVNREuTZXe4hEn7xReCKwBQHn4FrpwMYUb1uHE8x11doPUL32o84LSKnrEAeag9hi",
  "key6": "Z6GawGxpmiES3FM2tNefx35EMJXmseh1SUVjDzXQuBPReq8K3cS24BStmf7kcjay7E3cAspx4Sc6JAhZAoGtH5U",
  "key7": "5n7vbZJVEinV45KGmLdQntQMcZY2sLZ5y3t4ipiLadn4t1HfxgFPqNPWaFXLcwTCes3TvMAc9bKf2y4T66xAWo9E",
  "key8": "4a34BCGdC6xpUP85pxa1c5iqaGahDempt6Bpwu5Hdjo9VFiEM2PYaNjWPof4eUM6yxaYy3aj572fakGfnuonz4ZC",
  "key9": "3RS9LRkouugptL9LyAezAsaZiXz4qisNVagSZFy5g5FwLt38BuWPjoZuCUqiqvFhvbeY3PRu5sjr4CCsxLyvfpcg",
  "key10": "3JvDe4idfC4goKBqb4UcjkR9PeryJoSnXRzqZaRcJr1oMRmMiDBmSBWhJFEQnkZ1ZkHhAKvaskfvNPcWaxmSBiiJ",
  "key11": "2Xr7eAargBeqENaSBSmEtCmdLuaFVzR1WXdCm5wLKUbT9Qy7MePTZbfXwv5wQKSvQfjuQJoht2KhpLvn5iVssUgm",
  "key12": "3QCEe9vt8s5AaZ18UhHa2uWWqbg9mNRGLCfEet2svspXK6JFTFvaDVWsVk83JMuCVn3SH8MF8DAWikSaswbVJU5o",
  "key13": "2gEp5KbvgEdJy4ubM7AmUmoocDZjE1goTfzB2vphnUbYxeJfUQJ8GKmSrQj12s4zQKraQrMDDC6cQqgv7FmuPS8i",
  "key14": "39Nep95GKTszvZXyCMo7LikdBLH63M5HvHWveM8kNb1n4nhqEiWxGX7Ne2Wmtsnm6sU2rNAYv4uwL46nwt3ESpUz",
  "key15": "EbbwmyyKRGqJQwWhGprvFFPVfovE4SjiUPFTLvUGL7U8ZLD5PX2AoozeFmiuzXfFUhNC9WsFigmLPeuLD34jpiU",
  "key16": "2GZHkxUyjzVkK7R8gx8Ddt82Rt3DuAaf79WdwcKzCCxCC2baFkqYn3cguCKzhStEn2Q5WjNNWJaqG73TSQUPBG6f",
  "key17": "bLRe1DeJSbj5YMQHZWgqkx2dHZ98DhkMu7PLk2bEhZejd3JTzrJb3tn7NBRUt4UaFVihUrb5EUJodhoR9Zf4FHJ",
  "key18": "2iuDTWSRmvDXASx9XnCb2iBSok73tvatnpcntMT69BMTHpyu971Td6bhv36P3q5wKCQqMzdQZkvnG23chGJZStk5",
  "key19": "4HNasjehQSWJmdcVth43dR3gfBpHoSuvCEzG5TP7u3S5FL75E4wChRGLc51fpy7R2NQe4dsCHPv2iPLyyhGztgQw",
  "key20": "3HjgXfptJYY7UNFCgvLGpeA5a8pyTLopJZVQKNMaRz7WaxmsfvyFWreFGr8c7tPPJASz2QtwvfgG7JNHVz4u9gQa",
  "key21": "3zDnEKE15HFX6NTjPinu15o9RzPzPcTL6qyPMs7myUW1aag6uK52FDnBnXY9Ma9xiKUUe5vtFCR9yFdxLEJrmcPG",
  "key22": "42oQ2Q2tR84k5RrTREr5XMzdpq9aC6EK8fAzTfiwFjxo2KmnA5J4d998bxS7yNpVr2sVLfyLDPPEsUkdbRp34AER",
  "key23": "3PUyXsBCh8xugzt1jpvydaEC6g3kcSfLrSuD1xBGouJ96uccMYrB4E2PMjRVFCEZYtcQKbx3vRh7zPQrWTsmTVJA",
  "key24": "4zGwFK57UNrV2uzTmFvkWdttQUKjqNzFyLLuSCqBY9gGMoU7VAfEKgfufrvd9iyJ6oNzMrrNMdEFvK1cpFhXXYn4",
  "key25": "4hQWUJVWKcUBstEE2CJ3aWLUYJ3koTGCXm1qEkiqbjcsUeNvvcQinUDEEpNVM8GrG3rUZQgGcPcZkaC6zVJsEYAR",
  "key26": "cjVtV4fVpRGqMpnxydE2rxsANxaf1WRcsHn9MKsPu1euujyZMv3XRK2qsmLLET2AK9q8N251vsnJeA8Rpv1ABqE"
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
