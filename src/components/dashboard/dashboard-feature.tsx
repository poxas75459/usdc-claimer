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
    "5MFBKyQ3JgavJP7UhENvXQUiuhy8gC4bU1WgWELgHZR4qDNhuHFwr4GCZPEF3VDWvFdzZSgaRyfhuXL4Cat6JBDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZD3BD9ZZToXYuySpQSyMQmXtKVHcLhU2Mk1cpnaqV2uqwbjKPGRmMWZ4XWu7VNpoCDLMUztJzD9jcU4GEy2Cg3",
  "key1": "5r6jzsfnKR4qezNXC438Ljup7wjmcS7Y4r3cTBPm37JNyEna5bvXPUttPWqfGFoGu4SprC1pcq8mD6bZLpLE9GUY",
  "key2": "QbQoE4amZmhg74qNbvEzFmUpMyM3dRMvfvgFxkMh1xhXaYHQHaGtf2PCmUq2EypzCuJM4ivxUx3gxk2iwA7918i",
  "key3": "5dvJv7ekyZgYiFw7k4VHpKKS7w9Vj6Zgzoy8wfCjAA7ptKv5MqAJY2hf2bFMmhUyzVwPQ1xMSoR4vAkXhCkxZNGN",
  "key4": "4V3mjEpVtiAHo3gBCxqNNWB2XG2oa6vRuiYwj7Mq2rLUdhh5po4jP5UbMuKtbb4sCw7VRmMxeVYvxo3sHHyg9SCa",
  "key5": "exw194kX4QR3UQCJNrPEkL5WFyes1Q2Av9g6WHHEoKL3tiEymdigZwVf8Su3Ki9RUQcLkhNkLeMMvmonGurdvcN",
  "key6": "KH2UnGLHq9HvwUeJj4J7jk41UgngLK7MqgmxayHM33oav1YiC1oecXtFW5pdeKLSF2Lsq7RJGCcYxtMymbc4R9r",
  "key7": "3A7BxhnuZVURN41VDafSKFXXUpTnA9LDsxstY7CWkXo1d42dRYxN8yiFxXMNwSyJvxbVCBJVMZmfvsEyWU8NwhJV",
  "key8": "3KaAWVe5wiZV1v3qXs3eoeRhCS77AfBVbPTft2MJsVs1nNPe9hd8n4p5NK9vWXBuq8R37iPPqBkiqmgiyCHQAMRZ",
  "key9": "2EY6wT45Ltwun71UqxLLwiugNcsix3YeHgwyeAU1uMNVbuosT226hJDWc5Kx32Z4JgoMsvERbRcWy54A5D8givtn",
  "key10": "2BbaCnNqqsuxWuie6MF1cJyfNcgmuyQHQwLF4cSueQhEVQsSm9FaUPEqxLPLuFiva7T6vjU1FgmMytZ7ihmfyyoy",
  "key11": "4AuoJ9Z3n7uUpUEKz2RMYgr9FCW8yAtCAdrhLMKGCrbXUgHMjQDo9k7pt8swfRd95WoGLAVZ4t6iki8hZiEFe3ji",
  "key12": "4zkZeNpK8zFf95ornZkdPqG5NEN3qURD1vJX4524uQ1pa1w3u77SmcMHS4iSskgpbxX8K4Paj9KcECqMDxvRPZVc",
  "key13": "Q15RbsYWLvHeEMweXHcFyGkZPzsiKMYTQJn82iSyLbaWMcjMegQtYcVKcjyHnCHDjuGhQgUspSrregocxkv6zHn",
  "key14": "2kesPx8EEdCdSUFxCLtfsm16wRRmtPeit7bzkKjQe68bnf7foDaLLXizvyRjr6WRSKhWoDLLw9FBxW6XpVXbjGFg",
  "key15": "4AgL8kFjnQVacz3JbvNptPJFUbqtjJoW6f3wrfBgmYVD5MpjWDDFjkFp26z48GVX8NRYMNUfJBbh7v9GWyX6xc7G",
  "key16": "2E1XoobUu5vvS62EGMTLa3Fdg9qyjscLpCcy2Ah1eRYW4ncA3A9AQpQrtCYx4pBYixFF9zc6Qn8PYufzz1xTvamo",
  "key17": "5G8Xu9vAi93NGy7wApfjTrvCh755oCvoRrj52GuXyRBCa52qXEnP2dGBcDeHEfi3V6ufmbPz3MMeTRKMka9HHCG1",
  "key18": "65ZmnzXhcSt8oeuNtXp3BowSzFGkZGHsVhvTgGyWbEFdxL2gaWj1e6xAAuH9RMCt2f6jT1p1iUofyMb8PfweXvjN",
  "key19": "5YedT6AiKYrgMgi3bk8cQEEDr8UQvKSNzneJhXJPVhppCen59LN2JmMPXCAKeVFDe7im9zvVvcnQJ8T2F7SKR8SJ",
  "key20": "2eQjnV7Wh6wRhtnYb7byb3mkfgUB67E61QRCjPjAqsxPRYjUpaVZZ9cGFSfPvdfxjhuyWm4sYyXTiNP2isoG1Ntv",
  "key21": "LSVpc6WQrHAcBUFmTBS3akdWU5K8sm4nS94FM3tRq8c7M2DCkyQwJdTTL5QT5qNx11LjYVC4ff6aQXzHMMmYCZJ",
  "key22": "5si5NTzY8X3tphTqvV16gHe7A3KcziZk69zHtATwTeYWWZGkugx5E54uXmNNogBuL1JVNqM5njcxr3pVHykE873d",
  "key23": "3DjEpomXQXfSbzqvBGCkX9HU5ZVTZcMs7C8EtiN2E5JUZno226E1Gt8cMYtfUopaYvofS2gorpmdmasKj3TSg8qb",
  "key24": "29JWuNLBRAGTpy7kMsSwwcWgFQrRC5wr7F5jaHWrAWG4V5LCAvZtFSrEzJ9VwnG3bB2W7926HpRP2DkxCZwSmX3y"
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
