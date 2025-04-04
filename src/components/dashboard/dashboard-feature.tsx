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
    "3iaHG16GaVh9TyjncqWXpXP3sTXfpNi4LaxHzMdifqSjQ59GUot8n86EvJRZ6qkuBXAUzeYZvnRc6J3nqrX7f9qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VSRnkpND7XVEbvXPsCFrLawgRPRvZZgm4MT8SgEEoz4kjnB5tPtbjezpMALLFJieFC1TL6Z5SPYsk8Qpoutpg4k",
  "key1": "5CH5sw5wayB1s3hqmCEsTC27jV3BZVmVcdYtrMsZm5bwdAvRt9JXeaJzcPJouhuTT9zW3dj6FeGG8chxnnj7aZ1w",
  "key2": "3SBJ6cP7qUuwmdQ6dBrjvL3pJjw6yBQdCa8SW23qmKcgjt1J94XWtSPGJaCVR6FQD7Y2pPoRL4PG3LBwZFF1BjiZ",
  "key3": "4R6WSio53d7njZBdQ4ogKTEARp5k6gEyqZgxmAxrKfGhBqtycf8RY2bqfwdonwqUwoTAWMCQpLBfoVnVAs6voVGb",
  "key4": "4L6pNueHEwGCv49ACpHoBRVHMYQ72KhcSFnyE4gaGhq9WYkB1wxyuWHEodMTuG2d5g6vrB6yCnvZCaqAmyzdAq81",
  "key5": "4LBomncbnhK9JwosTb183S1RDEANTpBXBQEGiMoGybEEpBTGuA9NFTD88f7aZMfy3gp8NPNH8qMF2Bzp2YRbHiDY",
  "key6": "zvwZm3kPpgqrfkVgoPpgPyRqvM1jGxMYy9xnYsLNzum5HxRkAMPVxecwMGr6fXKMV9SRVzXwbqoqAbcfeYcmrcW",
  "key7": "FK6hvUuezRbjqVgcHeTeerA5yTrLKYDSUYiWyb49N3WYdxjCAtJxkzEqFoYU2nnxp8ea6Z49PSiKUr9BWxMF4Rg",
  "key8": "5UVeNpYkWpzhJV3VhaPwu15dA8w4pcyBdy7ecCVMtZwvrGTUmWaM1xYsxDBEqFpq7XKRqxGCWrcVb9sZ3GG1vzEF",
  "key9": "4jYcXFtoA3DcK49p7zM1tUkYXECqzng3ArzicW7HRhFzVGXywUSid9zfNyhfT2ebxgrWYinRpSZ2B9Z1R1b8EUNn",
  "key10": "3SoJn9SZeXfVkq5uRCyzaHDVwuvG6RkCMfiKb4ARWXbowCQ91yHsmdryF8n1tMPR6cA7Yw3jiyKupQkFPTGq8n3m",
  "key11": "3Jbi9Q5x3xih1U4sNKpbbxcp3bmgv4TRyAgfrsXEvZdYCMaD8htSE7UCAQbv27yUXXwJxrv456jYyUSHDjfjiHip",
  "key12": "4SxPYSzrQ3yRKR5gkr1mgaFqzHbJobBByniZwN62RWwQbP6431n8V28TBL9zWuxkYXzheMQy918Cp4CDxUXogz6v",
  "key13": "5QiC5DeGDu9dSZBWiBmEnjMfvwv4RwPq1b8EUyfeQG8CQuMCE818QDcinNx1QR8zq7vUc9wEeP9Q7EGNiaUsB9sQ",
  "key14": "1JMp3GRZxrR3BMEvY9NoxiFDoqRPXHoEdkTMWXKt6MLkZWJou9b86aXZcEDJMbatauccmLmJKgnZBNpr4cVEtZH",
  "key15": "1KFxZbyq9MYqQX6eK8g5QGzD1BrDE9rd4FYJUniMN46dZUGWbcHLqhohnAQjzf947oLKwkCaHfjRgBoVFynkFSN",
  "key16": "3cHNDCasHGaGfU8Lntfn3hEWq5S3bPxvDNu4q8F5eqNse4bpuqvZoj9S49dmuzxMi7iAQXjSkzDykvkA4nbTA5QY",
  "key17": "58Udid45wS6xgWa3tkcAZXMq7qazeMaiJmKhAt7GnXGoS6LpfSnC9mpfLFmCrGhLMxagXv8yjvMeMq22ytHX6hor",
  "key18": "4yVUG2gL7ipKCGDoB38siGFwj2V828pybtU8VKGpNyzjPa6AqWgRdhPNrsEYbeWZNGfd9tq5BB4UJ3A2XMnPemEm",
  "key19": "5EZLc9q3qB53NwFG4oM1XdRSANsuhXYzy7p6fidXAKGwQvNu3UAPMXu4nrZFPVe1YjXAyHoLx5yUV5RP8j9dDyaV",
  "key20": "4dzjMWdzyer8qJ7DRuS9cCu2TfhaiYKjR1cPuJr3FSWvuoAu71pjyZEnS6cYgbud1DV14HWNHzD6fyxj6TcyZfRf",
  "key21": "2TZx9Hu8HKuWgqzFuwmvzKwWtd3hZsSRaUrkzsR9oy3yyuKFA7YfDvQKTNbxNBbef1Lieb5H45bpvUz99nsUAVKr",
  "key22": "4FRVY6sUN5YhF2N8w5VSjSfHRSmMRnid3WS2AzcwKwdfedCmqzbP4UwxdmDDQp1DnV7xS1gBBFJgQ95VVKLCqJCr",
  "key23": "22ox4QYjmviHe6MZPQLKxFohoHy6hMsMpyN7v9bB8FBmLBKhKCxLjQKBAvhDpUaMLooaqsg5Quk64iVLZSq7jHR8",
  "key24": "4RNi2egZoXFhaMKT2zyYDb87csKd4ToqM5ADQ3Qq9ZAAVx8q5eoSJzZbLgWF5DbSiemTfU6hTVszMGB22f2w2ez3",
  "key25": "5quMXQEy4U8y7qRNWwwKvGVrQk2McgfajVkps3T2z97JToEgkJFpFoVwJSzVYPXQSNCrWs4JomPPaNEPUnWzqr6B",
  "key26": "K8nusNTnQQ8WeX64h91msrRzfrUdRwjwHTsv6HXdwMRSsJ3LpNsobMuiH2jW7ou7xf1uDaBchhcJJgk1fC7xGXJ",
  "key27": "2bB4PtaQJ3wewCZYApWFJnLSRCtECtCe1hcaxeuZDkcK5a8z3hY95RHeLKmfbVk72t1pDr5o8AbsWxSDayRa2qE7",
  "key28": "2vvASGtYXRu5ntEqtv2ZhikzWrdLsxPruK5eMFHLJWZXCghTCqXUEApYiwrpPhuWVKPRRWbzFgdxvwswgLPqQwdL",
  "key29": "5wMuqJecnYEWwEeidjeUxHzAvaZaedo3wNttE6YGuDej51UvA8eqKJuFhxcNMTnRL9h88GtzR5gPpggmmhNFTueC",
  "key30": "3aE4L2yGez33Vm83Lc61MWJEUG28NzVqGw62zPtoucFAfzAfwaGChBLG6VjaQiE6euyHUP9xQdFRB1jK1qZw4kwD",
  "key31": "wmPu1ri641SLhdiqyMrxQmKmBup9oyiN26btpenZPmvEZ7CH7tF8ETaoJ9beC9FKNTvZJ8bgHw4CsZZ8BfSQTFs",
  "key32": "oBePfo6nr4jjmsg6BCaG9kbcZaPjeTk4hvJsvzckdw55NzTHSmnmwvTm5HNmfhpzJyjHSYKRenZ3X1z5zTGjenp",
  "key33": "5CWBaVyMwgKVmCYbXmcwS94S2Evv1oPUtFTYK3BAroqeLaYzetojWXeiBJnxnpYNo9uThsaJXPbzWDFPUWtbZwu6",
  "key34": "vmhHpgYFP4JdQCEE5Efsfp9117uHkReitRhL5PxqgN7mLEzQXgYjbo2kFdhjjupCwNmqrjxJDBeNn1PBop5pNoh",
  "key35": "5iCaAXYBDi5off4GmH5zxvsnfN1S3us8YE4w3Awvbm6gwZvtgJHuTar7uCxo4aomKU4tMTJfwSjrc4VfukFc3Qbb"
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
