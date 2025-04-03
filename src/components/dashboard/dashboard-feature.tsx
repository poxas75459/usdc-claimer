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
    "3gRFq4nKxvUhUM4xqFSPNSKL5CENVYdv6Taz2UZW9VK4mbnZrhPJoViZZz5vrFUReSSp8fWXBHXBhQVKtuBgyWtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kv6FAoUtwVcGaGDFhe6KzfdhSukKCn4aJwE4SxVGRyXjmKtDjpEgoLgQ5UunEZQyXgyMY2xwYRmz4SWLhLpfYfG",
  "key1": "58rSPmQ6PKpPYFy1aXimPSAV6jNsSwX9sWFX7D6NN9Te9f56xNbctvzg7H4aNHfjko5QwbPdfBSJNjFfrkGSxxHH",
  "key2": "3QE1UTuhg51wfqxS7mTswwYwPtT7bBtFnaMRaLLsZoX1udxNmUpERCRY8aXFgN1mZRs2Ak6MpKzTgwH8mNVo5gBq",
  "key3": "3k7tjQXLSJyhC4aaUNKcQaUR3K7Mi4aMXTd5SYgbUWVVfdYQkdY1Z1qt52Bb5TweTjD2g884d9mLFVWJoGZBPQ66",
  "key4": "5z9L98P1XPTR6t3ruBkYe91PFQ4kSLir7fcDg2SFVyteXUQpuNa3KztNHCGtfxLwHQdUga3NGhitee4r1BTjojpb",
  "key5": "2ECkbYkB3EHDWHk4UvpuwMFrcWWGx2XdVrWT96TBpahSk8EGEM6eQEJyAUZwuNg3pDy9bsvwk8sqnvfieBYicXVW",
  "key6": "39ah6D324ofwNwmENahK8iWaEfCJVA7TykLo4znhNua7jn92XKUpRWLB4xU9gZFaNQQhq8k2Rd14hwdsxszk1cQs",
  "key7": "5USuDijXHyfjpGKP7ZQNmts6HrwA5GgjKamJQtwAC4mTB3gkQXq1eERhsrEL4ob9A7E36x9x46a1uvFRnR7LLT2c",
  "key8": "bMizZ3LbDDEeAQV9fAEt2oVbzvpQ4weiWVHPVP3ziAQBaoCkScJo6jHn4kk6oEn7Ttv9dArMi1XfTpNppuLugXH",
  "key9": "3AvfXLfAL4QkyzsTc4unx4PkXWfhaziaNBrjCvm763RceDi1sJ8Rc1VfCkMAM4SdyCXBdBwGzvp9pYgur8FaCKb7",
  "key10": "5VW5c8pxw6Lwi4UnG4wzoGbYUkTGhgTLqGFxCkByAXWC9FkqXtJxtHhznqvyj7TBjeYwhFeoEybpXHSBzwmQ8d8J",
  "key11": "31WiZ6XZeaUGiE1xqwrGKfBV8YZqKhcY6r534DZZC4uE2tyCYpvJBy4TC3afjZgdKZnhoKrZc6RBJHpntcx3vAmQ",
  "key12": "5HcvByQoa2uN2uoa31B4ratMhQH4PeRApc1HnczqPrywy412sxKAzyHCGt3LWjZoHV2kJW1UL583gFDXgcjrorQ",
  "key13": "21sRdN2Dv8K4sHxHd5MJYJS4C93b9UFHQMSUvxz2E57nhUEDXrPNvTA9dF3xmPz99HykYuLzRmisC7tjhvp9vYy1",
  "key14": "5t4wyLMijL5AMkh99PXEaTGkzy4GKDqHNWeonfxWgoDfUz2XcHVh2EynUcaMinDma3cNmDMjxnNvqaZCzbqY527r",
  "key15": "4DcAttaFQpMPRENmicNVdxbDGEbDtSASHzDVUpU5b5hrY816oBqBFnth2ABWAEdW9hocReQezrj6Xp8Jwz7XpUhk",
  "key16": "4ssWcZwLionAa6CmfshjmC6puR27fsSD3xgLz9pe9jSwh7uoPx1GTemgjCVxct9LiFMeW9Ewh8CYzRDGVTQGLxTU",
  "key17": "3AcUhUbqkngVfjcXF7avifQmkcKawVJdjVK1qWenhmEURAWKo2xUSMRmboRDTAi825eSsxW4SmD9FE38NRy9RTDB",
  "key18": "5UxjLsfwJKschD9RomkgbT7cNyuRGAuvPL5dVRe6C1ziWwTXB4k9e6DUQvJijnNswrbQp4CZrKQYnSEnazbfAiCC",
  "key19": "2mKos1vw6XS4qUCYRV6MABtUbXdqP22DBX13qgwKVMxUq9CGrFJEwET4QSU9NES2X7tNkxZs5VmY1DhR8RLnLC7L",
  "key20": "3thHtuhZUthW4qfLxL58Qc6cTgZvz8beAR9EcwAvoGG94zeDTUptyJh4PkkjYnoMBj6TwXFodpg7sd2UcGf7wV4r",
  "key21": "32NqdvtXyPoH4htmSqN4SM2FVzHPri3bjxUQNKsAPGzJqxZB13oRy4iyLj27a3vv2g25yoLdxtTeTjbLn7DR7DBk",
  "key22": "pSo2iiefRNhJdwB9dqvvob1mbK96yJci3dP9JeEQ5X7aTqVafLyjmsRsftSPF7yVVQZofudwQVvoHaXfUC3D2iW",
  "key23": "5cGtNaHZRQCiiB6bAvtBLc3jiRHpB3kpYC35TK8uMWxJZ5nC8DfHmVb5KPgnN3k7D68TCDLpYXapNkc138HyKATR",
  "key24": "4Fy4QMLQWNLsCrMwQoksjUuYaKiRBUjHTfqk6Ym5JBSnoQ3ZW2xBnoUb6RDqxamRoYAeVDBC1n1pTAZfRyYfWjfP",
  "key25": "2tTYDcXX3c71Qk8qxgbnXgpkh75mGiZwJUMVFuobMrn4CV7LApzSNxkbM9muF6iewWNHPV5BPyqzwv5HXFT4n8qY",
  "key26": "Ai5Q7ZA85D2xikJC7RV7kRaRbeuM2kvTpu39p5rXJ2mhFQHPAcuZ8Q7a5aMjVh6vSnEmMKoWKkvYqyqa272YPEP",
  "key27": "4hHHxAJR87GF9EbGNUHTwHi3FjoRPP28Kjbm9Ksg5181DeeDxKJ4XC4NF346ZzWHKaLYtSrbMXfxf2vEtGWNorpD"
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
