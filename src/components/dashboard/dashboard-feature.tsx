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
    "2b99gNd3gRAC7hPSPJHcFxqNGPxdtJwdoP2AGUSwVKc8gemmw2ZbLJ8c3rA46oceUib8aEgKGC2WAZqXroAyyK9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48W4HL14Q1c2PLEB1D8HCj4vgxJ7MsEXLvhYy5tCae8Xj9AW4BpPDJR3HFEcBjVmpyGvgchAUGKWJFs3abQtzYVV",
  "key1": "3gqXtzzvfBCbBA4PFuthCvCWdcVNGfrwUB8voXCFXeMHdaS42sAEpucdxDjeNSniC7L2NHVFSj4rpUi63fn4GkSC",
  "key2": "3q8XmkbWFxgn2Hgt7XdDVYUYhVe35BFyT31RTQqoY76378S3TjxeX24uVHJEEhNiUv4PSzjpqusNy2MvGrn6Zr3T",
  "key3": "2WrvHyTFeMSWYs31EnWcJVXgEki5vCyPduMXZnQF65tWaucmMqjzjbHkgH4bukdzws7pJFrM4w82nyLTCLjihHMS",
  "key4": "4QqsYTp9agVEzsw6ouNaTu26EauqBLNso3hsFeUWjBv2bhS6mzfUynqJPKiVCuaGUsntpa9Jk318Qjw9Vfgr1sMb",
  "key5": "pLtcaRCsFot69MxeW3yviDtkqjqK3iXcERowY5UkYKE2DAJQJrBLjiHhhjuuTHcAHXKqssH9CN37xwW5dNoowtF",
  "key6": "38tbU3tmfSeGUx8fVVd8G4CkBUXpfdi4AyrpR1pa8uKe6xWVJrB17v9wfPSTXZXuBULCrQ6CL8zQPszDATAW5TAh",
  "key7": "2L2ShWEfqVXnMkNSQh6zqcSHSNbuTwXMteWvafuYzzHjXnz1W7UY6SMYFu2uGJv3KJPwjj5VPsGajtuEUtqoYb8M",
  "key8": "4n8zDpJsKAnp9orpHQoJKwcm4utyP5cuhw9MTZGrXRcFKQDE7iVVaEgCN4toupLZdWaAYZKAcVeWnNzdYNPmQVdk",
  "key9": "KkDS9GUNEbUahWJdjbfnBya8PneuhFz6SB7xinxjYkBurBHtZHdJSGUWdJDUr1Y3oCDhFNnJoJA8t8yThNNnMST",
  "key10": "2Mzyf6i1S4cPEvK5tdJKcTj5tGWGyss8n71cKuYbAuUUbbTuCoiBP2TYABSCLx8woGakCArtEa2jdA7z2yVdeMzL",
  "key11": "4xYGuwYcuejE83wiTJzyU2cxfmTUJmc7MHsm3WFuKU5nMGyg8uQmmtYTqtygF4d63QdAopst3YkfBpeN9QSEsbX4",
  "key12": "N122BXc8RL6oaYkeaxRZBTNxtTYyn3FJoHVWp4PFNHzyLFWkBBaeAdqzAKPkgCRbnX9xVjmF3ABhqkvLssUHJbh",
  "key13": "2uQzQa8jHvvECzdBDwdkyDrHom5etA1jXFg7MqBHCE9sX7pQEb6sigtJsqv25kZFhw6jW1LRFBqNn761zXKhVgRt",
  "key14": "2kAhcB196yFFMZsDUZkNAdBmxwPuFLJs1UWToDyWPzE2Q6a7AnhnDZYbJqZ87puwVKnSTezagLzGAjXqw1c9z5xC",
  "key15": "5owzmc3LQ1kf1fu8fsCb1vaGqz8g56tNPbgvPU6HvNsJfCAHpgGEVfqCBrJSuy7GQ1mxeqmbUYTjJq4gtjTqWxkb",
  "key16": "2yRKGkUpexZQF6wzUGAw6iyRHgseVBJQ2U4anwDoiep6N3Tq9oNUAsm25HyTfYGu64XyWwcr3kFVYkeC7n27iqzy",
  "key17": "5cMxmdh8fhGRtdPwe996ADacJVvXAQZbTHZ8EUUmZZdLkqAALBsrZDd65PQjR9FrdvaRrQgqhrGdrd6QVHPEPfND",
  "key18": "5q39BAiGQ1MBubUPtZ6KxzXsoTfQBmhEaMeTco5SkUAvkMRaBW8q42pYf1x7NZM4THnJt7qZYwetCTw4SdkHo8aS",
  "key19": "2MobBHsjEt7nHBqZ4KKuiav7i8coqPeqqWPmBSTb8VuCCLV4mNV4eVECEyVPzsgSRcsw4MdSGu4YBJ2Na5uew7tT",
  "key20": "J65HGcbjtu2dJdrDLcfaXFqrj8z8zEsnZGpzevaBTV2hY2ToBxH9u865QQCzNaSVHtzTozHpUQPd6iEoJ9b86vk",
  "key21": "PL74V8SkDg2Jr8nh63aVeu8GgKGxNUVVqwvPWfxnoiNXguHnciH2Jk7qYTbtrGH6YtdkuMk1vYBdJD6sy41BUam",
  "key22": "Hszr1sbUaeVPCSsCGD2cQU7ySY9y9uGNESXgpEmscbs7A6rPrLBMiHCPDom8w7p3Z8ezVH6AG5kyDmQczhcFuTc",
  "key23": "Xb5gTqNyigQ9zrFjRySZzXLFwU4kGpA7mhPBEEDsvWU4tHiUTffmoqcbRpL4bAGsWR3m1eMrRz3KyKtY6TSBvMt",
  "key24": "5c9dqPqP6dMWrrjtMLbjHzN6RWW7Tgv6ekTTZm6fzzBNyS1kNESxk5ezyHA3sQHCV72muMWrwo2ZdaiprMv3eba2",
  "key25": "3zckzpRnkdogQWdfe3VLtMgddViEUdTcxGfgo8QwujQ3pxm4WFf2HwVhXcQ9UaSqfMZeqEamdHVzswopQpf7K4uy",
  "key26": "2CrT7mvFYYSKBx8jDFae3JLYPmgTjRSWQZTpaUPQtFMhZcxxL92anL8Z7WzYVGkzXLAoQQW8DYxHmEHYmTC8PU6t",
  "key27": "5cFCqFTn2pVU4soCaKxjVCfhJnc59FpiJPejwqfzjLjxZDZyeyBVhybdkVBgvKw8jqkewvxNzFRJSbaFjTVhe5LV",
  "key28": "62Rg47AhJSk8Jv7jYG1SxQufrptWvrHYaWa6vQUcnHN9KcjKyfCXR9RzgwZqny7BDeyFPAsgXLXHVQ7ae3Dvq6Pb",
  "key29": "4BfH7JRekQydXBUG192VG2f3dWZEMj7v68E5TpwYu1czLDxEZ6C2RG3mcXQmavBo1hLMqhWUPyubC2MaQa2uCZYL",
  "key30": "2Bcne1DjKCwAc6tCxM9cVh7PEuLsfigUVea55yz1R3DNdMLTvKCJq5FztGLroeKRpsXAjYokHPNQx8tTrEU1ms7U",
  "key31": "5x6Awn285b3EujCqCUAP18XP88QJNBCrjY5rVSGHdmPfPbG2xVvCacFWRSrpQ1psPyQLVUT38YqZcma6729rSgpi",
  "key32": "2EXR6wyuNmRwqwQKrdjxpQZ1W7iMfpAWuK4tqkak5jKgccTuexhAjc2LDSwwpbufF1QQiFEbf4A1y4dKHHjMTA2k",
  "key33": "3KeA3xpxeo86j2vqgBpXbi4hy87tkwyaNvqqzR53eBWgCnD2Fp3URWxB1oVmgUSQBsHuZEesXfmVe2GA3L5PDEid"
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
