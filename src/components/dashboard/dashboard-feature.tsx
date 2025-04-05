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
    "4KnQDR74hwrpnbM9fviYZVLcp7cbL1wABAfvpDuAfzV5e4PbbG6UbxYoURUzLxG8VE7WfrtRufbN8m6nNwRCr4kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4RpQadFdejfwt1nvDKPxAU3VgbRuw65sSYiJisRz75KKjYUjvJCA76P5adQd81KfosP6A4XvcbqK3YLnf2Xqgr",
  "key1": "bWa9uCSZNtCXEnWnscADxj9LFL2XdwSYZF8GDmtBPYB7Mq1EMnAxz8ChxVVKZYEM4wP8mHUE94LeoYB9s4RubWF",
  "key2": "5KASSEFcyCYVECPHadWckJtn9oLdfv1MYubfrRu6SbNMKwb9WEkyQ71Zc8aPgwhHKfB1xxCAgawrNnJNPc9jZ383",
  "key3": "2VkdiVEeHiuFBSxbyBpg9HBN52VhMhopLk8dG5UMwDyLf53ojEMjNYn5FTdR4WngdbwumPb9GDZgHqQwx75FUgoJ",
  "key4": "5QV4FY7Bvd23r5hWKcbDTX2AC243NA2hyTFt3MjFMNLEuC3zXT5RizYSsqY1zrbg1fhJ5UnVcvsVUGiXuTRh12Zi",
  "key5": "3qfnpwCC9tH9iAjSebZTDD79AweDh97R4oVLmSPDgVzVkYVfaojPsXRk71ZYmAA2ovSDhDb6gUjMz388XEuFkBDY",
  "key6": "46TcbJNxd21aLutLLiuz2t2SoUxJLZXEdHbvFdFAiBdxztG9gNWocYWcmHHC2NyoXEPf7Rt31ymJ2eH7ixHRczkQ",
  "key7": "3stxBPhtaS6XtyGxAfPwXTuJroZgzrt9G1XCM2srwPNGnDPjZbffqHA1Cq8USrkM8XJGaydJh1RTrQp1MjAHqWVf",
  "key8": "5qD86fUjjaqSsiLp9YG7AF4mxrBCpikcWPN6NBHqKnRkkWpiK8Kztv23joie62z1eksuHhQCBJCio63FqDDHD9Uj",
  "key9": "2hczoQqaYF1JmVG3sjZimQjrwSB1VB1zgDvwH2mHMzvYxZRuNrGThSgWsa6fpvdFFh5fLoUjbLt7VTeUSKUV6JPD",
  "key10": "2d3yz8w2DCCAkzhThj8WJXrBbGixMBnU7T5ScYejbeEfgyh35Pi6Bk2fXzBmQF8fgSMuYsaLhRB6qop9bhdwHS1w",
  "key11": "2Yyr5n6LLTaRweviM7WHbyEhiQ738BAjRgp43VnE94jHMoPNAr5Mz5XhGUvNeuXMErrAVe9piwzKeRzQhKG6DjJa",
  "key12": "4XExjcj97yphahGoBWfxBzeqhdQiJHeYN7UEYE1bzSbLT6zB7QfhvFxiQNZCSaxv2oRAP6tVEmYrc3wGj6L5GRQV",
  "key13": "GZgWuN6zVeZ74idMRDeUtpsyUeNGLPxf9aBcFAfkcm5Hq2urJC7XGM5SXLEq1b3aV3Tp6XWfpQueZwEyaPGYDo2",
  "key14": "4xCsb9FcyKR24qWFTSoNMg9rmPXU5KyvqzbJBF9u3ynCCXpTR5W17E9xHk1jHGAbupTgBhp4kt3Tp9gK5iz83Dp",
  "key15": "5P1fTRSizPeL4dNFQ7i5GLx65nFC1yApMyKK31eKhpFnbn98kuSWytYT5v7yAuhWk6Qc5wy1Rm6cfFnQUUEBnUEa",
  "key16": "4LEE4WMAp6yjY3ZrDmULBuN8VTat9Jmka4EourgtPvJiC5Gu2AWyg13sM7KKsweSWqZjtjsRZfhfyQngk1epx1BF",
  "key17": "4PXn8hKZBxXayz8V29WNZW34D6waVS95A73gRfr5GxxJtiH4NFqReN9vu7dn5FN6PLc7QBzkTKwU5PH8KLzxoRMV",
  "key18": "pPH7bC6DqTN966DnGoZx5DZcW8sMzTiNsxPNJ4nkk6UCmyFkuyEDnJWPo6o4gZDsbdSFTwFDpju9AKtdPndgzbV",
  "key19": "5uXhNrVndaENmxFaJs6DmnckT3h1tAgMgdQ1S7aB7v7R8EQwEa69Yxq8mRf5xMCj2RhvH5aXa9pg8esHUYXvrX3g",
  "key20": "4z9nqoMkgvD1NdC5uRG54Ck8zrCU5AqHSNvFtCfa1o5L2U2tYu7hMMxyiniUi3JvoKHqF6RbPg8LjFejBXTh58GT",
  "key21": "4GYwUxRz2TdGrgJxS55KhYWGXQa4rP4guaWFEAFHFEujptepJ3Q7P8hXcu3WMMY8idMxSR2TZ5hXiA7JZ5jXDrMS",
  "key22": "4KhmZzzXkit73fxkqaQGTccokvrGsANmqSyEFrFmYADPMMZ79dNeQndLcVodhE6THzx5HKLEjAWesJXbM6gBx9ut",
  "key23": "474QWhXGGuBnCKeEXc1fzr9YW5epgXYgtyMG5gTJGXui9ZtHRcoajnHRBFeVgUrNj57gAXnBU1jDwoAidvagyxeJ",
  "key24": "2ytQzekayR7fUH4TfvdtPntE4bcgTQQoXNufHLdwtRW8KzG6yvbB2yxFbmyAwS2BthS7dE7cHRYUzhQVwD5qEb9r",
  "key25": "66kYSEKhLxQFjZn2UdCAdYgqDw6yDX9pBScYCdKwbxt9yA5pGngyFhJpHZ21pn3YiDAFUXTCEzn7YJ7bPoGu5H2p",
  "key26": "PkHjtqo2V29xm7BYSAvsDEzoWn5Kq3VxUTsg9rj8NCyzqqRKCRkHHST29xBE7b2yxH4Ti382aE1sQMmSgFPVNDz",
  "key27": "2cJmGuZRp1P2jR7JjRWW7Zn7jdLmnctZuQt69gJGN8fKjK5D3YTS4ijHPMGzxCfTfWPwrj3Zp82vSXRo32TGELyf"
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
