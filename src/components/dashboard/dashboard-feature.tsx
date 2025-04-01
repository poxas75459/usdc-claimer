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
    "PKjBDrB7xvJp658LnNkgyKqxaUvYySgb2BX7CSD2bUGgdz5CFpT5TfGdumX93nGhaxgoCFXyLhG5Gv93HxCdL99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHHVme8VosJDTtDLvHb247kw1Zb1H59LQuFpPuF5kiAAoMgouonC8TtsqjaqF8HswrKoBchidA89W5tQPFrVbQb",
  "key1": "4CjB5qGRednh7SfaKxtXQXW8KdyNN6wbFLWHmJabixh9YwR394ccHEHm76Qg3BKigDmVnQW1cx9m49hLrpyeDsGJ",
  "key2": "35VYxYorTD7E7qxuE2xt3joiiU8oY83HMNMZXAw1vYPMxFPJj9QDCAFgGH1SWboQqnhy8nwwoZSLhCGyBCPoGecB",
  "key3": "2uCpDzsVrEG3KWhaYAX8aCMVxYFuyp7w5ZGrVaNJkNYCtPjycfCwBV9s1AdTbx5chLhWYKjok6ve1iT69JgEEhkh",
  "key4": "LS4HTEEDjrN7AzMF49AEVuvw4Zd29M9NdSzJPvjmBNvCrzHTkLvatdZeiDMnx5tiksVtEMjHivzgKt5cWHDS2CN",
  "key5": "4UCaxsAVUmJ4VGrd2y9H4ZeDkAZkgW39dMMsgr2MZeECowPNVhpf8d6qrXJkBRTmMhLawezcAAsAgQYQrMHksoXC",
  "key6": "628kChHfEUJHw52uunNd5FPyPYjd2QWBxFpLVYCZJYzWugTxBosXmEjd8d77a3nqSsuhXBS5gqGA8u1eApjzmsrs",
  "key7": "2onHyUPXCmc77EuVER2KSo9ELMAdttNnsGdG8ceqou8KqegKsmeQLKEtcqiLS9oaYNswKECrgSeK68LsU6okTehw",
  "key8": "5d4ms4AZvF1SHHCuR7vXTgESK4SVvt8VzkSqWR3y8JTX4AP6jhcvoaGmngySybhpBSJJ58pYA47cbg7hz4KEYAtB",
  "key9": "4BAbiLdy1LDZBP97ri82W6sf88yFZGHDh5kVA7YR52tE6xrQESfLktYsPwPxSAvmmSdU7Kk8rbLZgmMsRDHhkz2w",
  "key10": "5YWUZaotwKHs64y22kKvMGsfP4RKRt4birGxsJPQZ37BAAmsAffCeqmw6KXDRB5RyzH87ci1HjtPsY5iLTgBnZMX",
  "key11": "YBHB28EP6eXKPMDs7pBN1W1jh2CgFshZLohnXnTmvjZ3GhezSbGjgWCohJqLUq2Pnh2CNGyL9co9p7F6fqd1MG3",
  "key12": "5dGaytA5mbJJB8vEb21e6U84xrGn3yBfn8cB2tLSf3s6onwykPVZmt59jFtYgHGXjFZ8npPR1aqfnCdWREk6uV5b",
  "key13": "2mL8kBbsTWZfJHyQapvjwxkpR9NnQmLwv3BRRyd6Ug9xHXFhfvSwU6DEPg4dvLD3A3J3W2xtco7tXyM3PChAtAjh",
  "key14": "4bTS61bHBBgk3c65E95iApRxMD9yTD5p2ou8EPWD4YC3VnhXzrztdGmugTvYu9BbQJ5iigHpRBMLPZapXsvWXNbo",
  "key15": "4UzAhE7q5ye3J4SnC72efpVZ4qkefXoa6BiWAfTpgsMqNyvhVPiDFWtR9C2ZVG3o8ZQSfSAYnkJk3UT46vpVtniW",
  "key16": "5kULRz47bTpgMHNoyKdZ1z5nqp6ttc5HmVyvLHntR2uRgMWvLMeQuRdjjmPTkXvuGWVZ48TY3YLdWgWMvHobheep",
  "key17": "5n6FWUigFMYuswoukidsXyQkhM2RFrX7za8tb9fEdZJWhfc7ZTeihUPEz2bvZgtdici21wdLUGxCTxMZWj49tXfy",
  "key18": "5FYqWb1y1vsCseomo9VXW4rnzidGRMLLXgcXgArkz6ZVXTRLBvKFFCdiWuusqYBq4gGsSm5C68QS1CrQYjmazc8g",
  "key19": "7V5DprvoLHEssaevU8NSTRtutEs7vtJjYm1DT1bqJXaTseNR6R9Dp84rDycS4T7QffcRDbD6Zc7exgrWb6gZDvh",
  "key20": "4P9hgVKyNA89Cvnjrk6Xy8keq5b1Qi1Npzgry8tDjieZrvW1Y6YKE5C5wTLF391rsPuX2DaUikLCRzQ4sckk4Pg2",
  "key21": "4QteDiK4ST8gFunjjkGdBxVNCcqoVcKpyGDnduFnErGM7nKaayDwbkjKvLvmmb7YpRUNVntwQwAtBB7eX2wZBajP",
  "key22": "2HpD4nPFZssFqePeN8D17WfzpMWR7635JNHdGVqdhvjHVfi5e9gEErxN4hTdba6MfoSZbrdEU5gtYdv2uJwiTAnu",
  "key23": "24B45eUB7oJBBkowjW61PxFk5yqmXy2Pz1Aymx7JQdq3ZWtWSss2zDogzJbXFibH97FFU1VSuZntBRNNKp1oLrff",
  "key24": "3NYWHWQmz8BEtszv6gwtuwv9s3wSDhGauDdC3FYtgo5sK57kq7v7UiKaKC3PFQGd9m6s8qc5ieNv4Kz8yGQvevFz",
  "key25": "3ffzRWuScZHZMgNCfNQWNoxHCBrkEAFRpJKLuMX3JqkKPakNktXuMaiBtETLZbtkxHE1565sz3STzRXVJiVFAf6Q",
  "key26": "5nxDXziJMHxtpJENRqU5UTEB4jLfd43qMtkjk3SSonLVc3nANTRep8NkLkUz1rqidVn513ZpPW7zCUfgotMcqaiL",
  "key27": "3Ymf9bQ194jten1LW2gWRoXfxvQbLSWtzGaPA2sWu7a6tkFwK1kZmWeRZ7tTbNQF5TmDSfqRneUPhoabVBmfM9h9",
  "key28": "5qmP7fMEJk5CucxYQqNw9kNPfWcy6yufuEDZvYJLXWFZ1DAGfoDmjiE5QuQVGg8riaSBaUDtd8ju3Xw9nbw2W9xL",
  "key29": "ik9p9SfP5PSZSsMqX9EqZF3SMRmk5ACqSv8ueFKayhM3xjx6VofXfq88wqYumDiEiEa3h8m65uVmLPmuADyN8ne"
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
