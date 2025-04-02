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
    "5wCefDzcDLSw3UED899ZR5pHGjJ1ouVssSBcDrLsPh1KEX5hehNqHuoABqPyLxVefQvMbkd9XpHyeFBGLD11GJQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sYVCAEjUqjRhsrJLqcifjwuRt76GkNdrXpceKesccARAxTgSnCHniADBTbknY48GgLBBU43NHDZdskg8gmMbTUx",
  "key1": "5WQWYcomFq9jdxd6fzmSBj9WzDA4vkJxkSF6EVfyB4qus63Lwt83WR4aZPKNBaRAPuFHd6mpGxpH1G7mLyumoGY4",
  "key2": "62dzSAHtiVzxe4Sh4hUmCS4GYmcGfhNBLpnYJEdA5avxXKQUYCY3Mx2MW5ri2qbdRqkDg1qYq7yiLmEPtxp3Aa3Z",
  "key3": "y4r9B78fcxi64iuiPJw53ttPCdwzdd8yoQ5ywca8icfGupD3VtqW1axwKshdtC155ZSdERiDbNd8KN72oMJK5q3",
  "key4": "5kkz1bm5RDkTZf9CgvQDxFYCW3NHf9DwszJrFmLvR9dHWB736zcWqiGmmsbANxWPFm2kDag8DU4RSv4HcRTibo4w",
  "key5": "2kAcJEVzxKAHqvWkvcPVDEGemika3XxXcSmXGkv4gtbEm9zhwThW5J7e5x1iafMfrkihBwWyWMXXrQqdk4j3dWQg",
  "key6": "2diQNEDpL3qTTPQoNmZk13xgcQaQNuWCJWxUA962VuY1R7K7UDMTkxnktG9czFRx4uoioAgWCj32keHYGzXdnfwU",
  "key7": "4akww6U4FxuLeDQQVB7ec6vmTBKPsgDW7uMsWUHRBkrJKmWWwbmpMaW8nUSmmbdpVp5jutcSyE1utwuk2WBW1EJ5",
  "key8": "3YKrcWUV3Ziy6nZ7igaYGoCgqYWtCPeTjS86zv52A8W5y8pEFPWtL1ih3V2B5czMjFju1BWYxhKtoZ2yGcaAsQxc",
  "key9": "Qm5MaqYdQJhCPvfdLZJ8tyZGaLAQk52pfsRkgiY4wzEYwU4aXGXQpEdrKGRjV8j4oZfHCfJMrCLeHC1raNwwjLD",
  "key10": "2Rx2XqKCN1RWzVepHxq9YiBWjTHyWRuN9SDcq6mjHoZAeXUSegiJuKjvw8oXx6ua8htg9iKGw79q9jCHZXUnneB4",
  "key11": "5VcRMC3juEgywVptDC2eoL81EcfDamZLSeDdtRTKK95pcciG9ajnuKoUkdXQ86NPSu3vwBNsANWRaFRU6VW3J34x",
  "key12": "2FfMLX33eSTARJHqsEz7SKjSMf3b9CYtdhX24WKHzXdUhTjEknyhhnaEM4DAGucEvG5kV7LiSWJZS6mgmjf6Njac",
  "key13": "PAGrPg6iGrUSyHYjFb3U8FHXssKiRNnue1e4h8sYxpR3Rjk8A9e1xBAYALUvbsRyzoRdrnDGGovYQYU8wqf5onY",
  "key14": "4XiDFnhFUrSx3BEErFYspH4nfb6MS74Go3Ms7F6ebB9knwd5F9QKXYGYF2nULVvUmdpTS7aump2kCuPVw2oMLLAy",
  "key15": "3SJVrvYxKigPDRT64xM3yZ5q7L49Sat18UQkUfQQQBmMQd6DkYteSYbMu6WvBG3ckDFp3PLJy8XgBjSPpbipnUDu",
  "key16": "5nz6zLvPohhSF23D4t4HyA2eAs3NppFU56mvzeTLUAeP4b6T81sirSAUqknEJpm58TtJ4ZxpG37s25KTXibnkggQ",
  "key17": "VEVPMjVMCZEtQwMe6xVNGub8Qq2h3V2i37keN5uUTDcAsHos9nPTrhTFusuvikJfkwy8sdFgsqBDUU25G2RT532",
  "key18": "5U5MZPwu2wM2MqrFsV8vZefg5CVJN1pdj5xvRuLKvuFeJhNDwvXVypUPHhjrHirzLp7pwrtB93nntMp17TzJLTud",
  "key19": "2a5Eqd5YfhqhC433zfANX7Ge8RvMf3VsVXWKmuLsuAgfN6RswYu3rDb8gCyNADZmBPxN1xnXdpq2g7BmDob81hX6",
  "key20": "3mkwYdZvpzDYok6UyTVX3PW2zrmfAypJt5kqUuM4FyhiLcoHCbWe9SiE7kDfhL3TjT1hA79RqyZN2oALxYdcmC31",
  "key21": "3j1ahwGEiQ1JtBU4qPEgJBrVfW2GsYE8G8SvZLu8sjpZ9ZcJSd9h2czS5NaB2zx9hJ1gKRJ2t1TMTYqTgqVmbQvj",
  "key22": "3X5eFkk6uT59se1w4P96uQ2A13zYRkm4qDg8Kbeiotmvqz3PugU5qX1dP4f7piU9GRPs26mSj1YaafZqC2ZoGwV3",
  "key23": "2s4w2rXxUBjC6t5S1dcCXsmjHLcfdcX6yk4kKBxzyoeeHH3shZcxNZ3pb1CZsddVXKVNosb7c62MpkvH5uPNDd3h",
  "key24": "46BEBBvqAzWzh34AaRAgD2wtahGHrXHdq3ox3Kseuib7JriVFucsnpTyP5rEY1HCZ3MDmScFpS9WSrSv71yz24WQ",
  "key25": "4LeiguZzMqMWFtCbUFSa6gc6hUSEfXoWJgLJCNwDrQFH3v3iy3noBjeoyXcsUgsRvHBoWSCzi2u1aiZF27DHGzJh",
  "key26": "3ZA71DifyFkuSFmtC2XbxTKz3fBCahtVKpduzGzvjFmX1i5pNuBrVd1WiiA8dJMmzRDJTjBoPptBeb1SNwd3u94q",
  "key27": "Y7fpZeAJCR3e2mouDj4zcRP3tJQ6AS54AEAsk9FBJQwv37MCPMwTdjaHM3WNVwWX9ebicM2Mko3aZd2wtppkGQ1",
  "key28": "5FfgxQmHYHvnbkrJ9SrosFAeG2HzJr6UftLUoSUuwLWmQCMXdRiq9T4fggaxSC3Gg6zyGLKy4LaLq6fHyZuyah2h",
  "key29": "UsmbmNujeB5CP11GxtvsYZmatER4axHSv5wCDueZUmUgcJAM68vQLmGEdXSuRgAZQdHSfsif9RFDrfn8rSh6PMH",
  "key30": "35F2EUKAs12Jr8h9GGRkFmJEYQbQs3G9Dx28UqycU4mR3yy1pNyDkCjggwhVr7AV8zoPtQCdAYQ8JSp8n15KmT7G",
  "key31": "s7swzK9JxcMcRpDHUgqCYQ59RqwyHrvEmTr1uJ2Y1gVpVeU9ECWcqtfdTSbbt1yWh9YsNmqaMXRDpssEYt9qmcg",
  "key32": "663YrtWcSMhXc3qNjENJaq3yk92N9VqJdTAkjAhuoab66DDZ1ocQq2gRKuoCxX6CZbsM44ZcbtJeu5ZjVPhXxbyy",
  "key33": "5BXgQzF8TgGYu5WGU8gBRJpTZTJYRPh4PyYH8eRUY9iPQ5Lqne2NLfxfhSKvp39aLs2jBQz71osBK3HRhMw8jE7S",
  "key34": "4E2yGzaX9jaBuBfr8UmHUsCm54koex212MeGKeNXRDGSR5vXCHoQjk8LQj2n5dKzcUmqzakAsjrwhebmVHxxwstS",
  "key35": "62Tpsg1JD8QDe789tGWjL1yBd6nkBan5rSRqvmMC2VSqMbpLDJaBX76mbvs9AsKH2bgFQZQxuHqkgooUcAiWnUrX"
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
