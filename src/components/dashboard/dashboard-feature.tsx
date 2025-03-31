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
    "P2Z34GqfkHpE8sZ33HYu6QeoaumiWUAEviErKWX2o1JQDUCpFb5fVyMjpgSw9qxUKvmuYusn1mVrE37GRCS5TCi"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "zozufoMcWX5CMNuNX8kHegu3qsbLzorP5Pwp2g7sQEP2YUCSecKkTzNA9nc1YKWYBdLS9ZmT98H72DCe1XDwDA2",
  "decoyKey1": "3gHmQc78NPypffj7kDVvqbU5jUQxZY7przbBZmkXEpdFdQiPDTgQXersdo9ApcVkAuAr3pm6FaYCJ6UnCf8TxhbG",
  "decoyKey2": "sTJUvNRH3UnMvAw6Tg9dA3996sxVCg6S6bL8ygj82VA7JxQ6uBMUMr6GAFcBVs8NNKyoAqQzRyVCSyprtBHVc9o",
  "decoyKey3": "gZs9FfSWGU4vuVywkmjAPFhiZZg9B3VzEF2GmJwL5aNpPAqNCQsoUHNqMW1tmQhq85rTYfWsfwATg1B8dnY2Utj",
  "decoyKey4": "4YvZnHF1osYCyij8MSdFm78obdf3Fos2FJpv8RCr6hX6SYUiA6yBkCL6JkUeLAwF8hcoM5tqbmDWFTM67CFTK4FW",
  "decoyKey5": "3bwtpAXGQu7fLPJ85mitFuMhQWf9zdCXVEu9twHGe5ZTgphnV5oWYNeuxrY3h1VUw7iaJVfuYuVMBTMpSu66wfgx",
  "decoyKey6": "5pQr4qcd7SsKtaSVWCGi9vrK4FNfnupyTNRWnXsbQys71Lk6JJV9tMWrBcM8QAocEQiyHKeAzpxjBfRds95bx9mv",
  "decoyKey7": "2UtzwdfkxXimtqtiUH2ns3npneJ8sehNvpa8mPTSNzkdX96h33hkjywyBJhE6xj7Tj7TSR8gpzZsg7qXELaJgiBU",
  "decoyKey8": "4WxbCxSGdicFvNFtzUnjH3zdUxQuYPHnrR3ZFzB1DjT6VVaRvVtzQt7GMd7qv31nXCa32FNXiRNiZ6BJ3qEeMort",
  "decoyKey9": "3PzNt44ifECZ4GqEVqXgJGiSLdDqv49i2PmRiehYe4T83Whn3VkHdMvpFu2JbXMgympH9Juq8n9DZwrNST7Yc5bX",
  "decoyKey10": "5wAJ8QLgkSGS3hwPNkdFKTDQnjYh3qH72bUBg7n812LoBYDfNd2m3Dc93h7csiRk4c3v6k64DjMYNzzSj6qz2YQB",
  "decoyKey11": "3mum7uMxuoU8Qt5Nk2rKmDccf21bGVp58tu2DosnZcuEeZkBGCWrw98VvcQXp6ntUZpVix1rnC4B8jQyezYsmVq2",
  "decoyKey12": "2fnVMetUMEHPwYhqnTS5SmkEJVJEVRXJ8PawDKBMrPmDeDYxM5MWrpEdfsLGcxL11Ee6V5raHcsSDjeL5iVo3vSC",
  "decoyKey13": "3bTU8jXN84wMSNBCLBeb2pTE5ugD8r8BkG9DQZR39VUhYvqNvYqWW6dDydf6of252g1N9TSAoMhppq8qtvnp2iU3",
  "decoyKey14": "5JDGibYtWvcAEGfoJBQrQNdhhvHva17g5M7FcbHmKrk5Gi7Q5jSrwm5rvtv6SDoV9FcyoCKDt12c6PRfbaJ9cuoj",
  "decoyKey15": "3iK9uFNLPbVqQS4uBt4exWUvYRWLYgFfnfyQdNyzgpMKV7GybyjYtvBmDES61CKV7AHAabLtzyeeAgodgLHHHVkV",
  "decoyKey16": "334Rk2Rf8QwAR4XQzj2qFxwnBjGQVwt41YjuaZgduwZPiEajCrQXLeW9L62TBc4RVE1FSoPp26qg5piJNB9Ahpy",
  "decoyKey17": "2dQT11cTwAjSpNitPqod7kmJTR4mL2R2u1on8Kv8xqwvxs8hocPq3vXVMHaMzJPc1wTo1EBFJPLh2EbDp2e5ZDJx",
  "decoyKey18": "5iTKdrmTAsUMvdftytfAhvjoAFi98cgEnex1cUMbeoCD4xGp2NEFZUzpHerDRrApic6vZcooGWSue1AddPqZT1tR",
  "decoyKey19": "4wfQW5qoaoTWR1cPkkG3jZUkCj3G8XjLrXf77ybakeMwCejSmF1PdZQdY1mn8bM8VftKyVyo52AW8DBwif13XJiN",
  "decoyKey20": "4nPaWCh7BoBkGq6SjQUYm853mAHfVX7xADkbiEpG4ba6ycvzwt6MNrEQ6HN3sZxDgeJG8y2kRoXSsrs5FHfCEuxZ",
  "decoyKey21": "65iCrS2wQsjN9KoeEaFHMkewrBpAwFaQJTocG47rAkBcpNiehH99XqU8h16LtWxDGFY9zSj2V8NRKQ5TGPxZDxbg",
  "decoyKey22": "52UtBH7RygqadkWscChKZ9Qa9x43WBBwTfdzhHJX9yfUM3E2A9f64LpbkFTicUDu4BbGE1BvmrLvVhZvkLnbz4T",
  "decoyKey23": "2QVBmGFaiVw25JvU687TAJjh4mxL2yzLQ2tv6SPUBXfvuosp9AQ1xX9ZWEnvxah5RpTEVf1pAcCNnYFaX2Q6xfWD",
  "decoyKey24": "4JjZ9K7JgXJCzMDXnEqQdcrtTVS6ujpT2M3UCxmW9TbU3E2QgjQJkDj5Y6tcqsLinGcuHoomNtyiPTQhyof3vVVE"
};
// DECOY_KEYS_END
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