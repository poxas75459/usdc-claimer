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
    "43r2jFuqTU2ZGgNGYp8h7YPKrViqWq32XRNkw6LRQYrsj1LQbMg1kTn4JPFRtA2SouXZJL3fAs4cAaN4bAoKbedD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4CwNZ7ZYFjS2KjuouDEf9dXzoQU5iPTi98hE9XHW9USfWD1L8BSM5xT4jMBTDBFkA9FB2mXKGAp35YzJPWrzbG",
  "key1": "39DFHcZ4334G9mPtcm3a3zV6w9xtU8hbfU6S8C2U2jMrUU9xmfqq6a6rfQDYgyxFQvw92RUDUfqYmMNqqeUjb7U1",
  "key2": "52hrwvcho999VE2FvAjr4MuFgjkKJApBhU6KSxSe6KCuBGoBtxohL6uzhfYLYhAzjSvPcCesweSNwJZQU3JdQKLd",
  "key3": "5Ff4bu5BADwKdQKbLNPTssevZ4EunAswNpwkQYWwnngWZX6ojeEfAud2ybjfZYZz9sLMyQuVASCZVyf82urn6NDD",
  "key4": "3iiXY9c2Fbso6MioSaQFA1Uh6PJ7aaB87C1xnntg3hsJZYjTvnVURfDbrSHhM71PYhYQP4FdeCuGMa6AQmgfpMP7",
  "key5": "5RX4SToCPQCpiPHBe4QxoGHo6B5eWKMQvftk8uiJoqkgpwAymadG2BknwexQenwpr9SKAU4YEkVTRWL9i5nDuArx",
  "key6": "2ndn8ktKEzzeY8toDcSJA5oQwAdWpwqDRcCYwHTCKrVW9pcvRCy8ANicB6zcHe7z6bA4xN6trKhcvv5hzcr76kPe",
  "key7": "42X2jR5Cue64XFndXYUhh9YdegHMwGFuuV7HH4UEnvETv9yh2vjhpceUcsuYYt2Y7ayZfqE1pvi8a22xvmZFrD66",
  "key8": "4DfkCARJBSZof5X1bEL4b1VnWPas7wFxh7yN7TL33CEp6FchaaZ974iS464TjbTKdBNSCq7kKF3oarqHZPSFPVvE",
  "key9": "25FNvg2xxDTsHD9K18Evr83sCF98XZhoKRrBJ6JNwNzWgPb9yiXKgxDVdPzbsH9fJ7ufzgRMFEFXXBBaKk9J87Uh",
  "key10": "4Tt6fmQgUjZvrJwybEYr2Dq6NUHusMVyRynSGAVxxRLVazFUKBHqyX3Q8FrgpWp8HjtFhxB8HqxSCAH7ETHtBEq3",
  "key11": "58oDKAdHpgXwcg7GWrjYQA9nhcpjDEPJNx6JKvA7ow4UBJJyJL2KXccxMkebdLS2nNm5Jn4HSsUFd8nqriDHiU3u",
  "key12": "2tRxctp45YwUnKs9PL3yFpQfHGhTbr7TywR6XEgQtfsZPTbqAviFrzdnz2K7Crzd7yS2QiuR8CgEXjf8nPnomN1N",
  "key13": "sXanmmsyjsRen24eHC3rQHYmChr38CKCvpX3ckdwDWa5yJw53i1eCaw6aWDh8YsFafpd3Kgc3dvyfLWMhaREGJP",
  "key14": "34kJDqeXNRzLQRkUep4uzTNZaUBVhkhP56XXhNFreWHmnoHaUtNAu6C5E46JAjy9LTGFZPLpLVNh9YYgwreko5bg",
  "key15": "3e1qvSapTu1LkiBzmctBXHffPdnhuKJKmA916LZqKcww6homZWKZRZj1gKbw2EszzM7JMtjxygEah2r7JgrDQVVH",
  "key16": "5W5PJ9qpMwHB23LFHDhK2JfWQB8s2vQNGLRLFNqmTEPCP79wUaeJJg4H5n59cLV7Fs8hGsRnHy2LAccz6XRGUYHN",
  "key17": "58i8m83R21chUhuiu5X38K4qNFE8yyvYfbSgYZVk8pMiRKW4uNqN7rtXpPXmX1YSaqGymsq1pMzfCznHKm2j4jBU",
  "key18": "5BMncgLia1jW8mYRLqPbgM8LUb6fwkjYAcz5RMmCUHuEGQMiDKepJd7uby9KuTehhRCitnxwAQvvREHwkQTLPxE2",
  "key19": "59rCnc1ggpGQ253Vgryk3wTuzMEvhdxeLAk5KUurcSCnfTcwsDqQRurobLZUbMdRV4p9TtgDBs1Ub4dZvFZF9Lhq",
  "key20": "4ntCBUninw9fLHBnK5pKQyGnSgz32vbw9QQwe24KkEZtvwqgX1YeBa1ZoCseBwiUC1yo5UvKQDijmcLHVqbshwVY",
  "key21": "2yqRnGTF8Z8ub1ybBUtFh3avRvDQFsPZDPHmNLvh1jcWKcNWnVAjUYxCbkJSrvhM2hGMXmiyZrXjvmKWbUcEojVE",
  "key22": "26wYRn3Bg7MFgREmuRss5zXVkwG4yDj5gxzuejnAoQHvRpPXousdvb4kqVWmXPBgfEEteSDFpTBSaqAUCza75bNG",
  "key23": "iKKbiYnKC9nnEpNxS2u7r4CNiBVPXxooEcG4r7iwQBgw9rV498A2XQuZDqtjMS2nhteJxbJCazHVfwomCGeoANr",
  "key24": "5nM2U3z6JHG1rQk9JXMCFebpFSuCcdQwtHdmhA8fjeTfMwLCoyFzHkCeD4YssEo1NqorwXQVxcPPxQsHECx8MBBs",
  "key25": "5YmajJFL7bpJ4UbYnWTb2vJs9tmSKSwFVv7oZ2M9etGR1jCBcXiSqa2MFg2xw2LougTPTECnxUWpPWaky8FK6g98",
  "key26": "4bM8iKL33HVHXsDMW5a4Z43bZK97MvW46eBL8ketpWxxiP3Ng8fkHdDnndrj3Hb3UiwcnNyq1XW9tLbdX3Mw1WVe",
  "key27": "52nJHU8ubxEmuApZeBSnoJ1vcseoCyusiVPjiWSq2MtnZk3XeFcC2CgAQsqaTLTNnKf4YBuM7dtZu7NCycr2uKbH",
  "key28": "2nBZQ4DbYNRUojSUeBEGHrYwJY9SpHyx7sWeDTqdYTETfPUdC3zKXNuvqQ6YSTDn9aUWMJvnYr8iqH38ZkLzMybu",
  "key29": "b9gzeP2kqASLsj5aAG9xvX6qgzg8GBsik9LUyASs1gS2cZrvjy29vp3cJv3XdedfbaScVGvN8btYP2AYcL4xE6n"
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
