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
    "2QWsLLBqsHJsywCnxPTnPXpPBACsTXcLDJm2ChZaH5u9WccwZbbLWggEQT3piLtmjF7ocCSxAEwo1uWN9HxNKoN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZumjLiyRsBxXRVwSsPai5G2TtMMk4d7o8Kbuz7CQqzVT5a9nhHHJRsgbKP3Uo5DUwkNvBZVptUTe5hRCT4hvqF3",
  "key1": "3YbQUaLuEnVSbhRcceQWRTfwmTdzmqSBiUtDEJk72b98yB8ZGfgdDBL687B6sbBx8bMKBCU1amxisz7LsxLJvNpV",
  "key2": "3AdYnhuqYf1W34LGc94BCqVSoVarTbBF2EMETCsk3NcihREjj6LVQHmDD6XThGvGjYXE9486YPuBWxY7oppZN2Jr",
  "key3": "45SisTzZefdhtTuvGHdUi8TfJKQC91ZoqfnN94TtNt83tDLGhgwjdxzuwtafxKQoX3LwYAL1VdHjcEmwj8pmYM6w",
  "key4": "2DJt2z4ANYqnvrASqK3bR6cckr16CdcQADkBASfQA72gnYcfdbkDBgnysLhU9TpLnZ5nJVhoP7ZypS6ndtstPW6H",
  "key5": "58bMPZdnxXsoFmexjysHTVBzUhRAhjA5WT5D6RGhLt7NuWzcNPsirGrtnJeQnoveQmRtwNK2YssWCYDERTu4pUsa",
  "key6": "3CMSpkmwPeWtf3WqbFNECdaJmxyt7LvFFfKB4PShmLx77N4jWmbPVaBtvR8VNfQWe4YGR3tijzwV5LRyDD4TJPzH",
  "key7": "46gW3J27L4F1DNovXg97u2ywuVu3rFomfRuWREA7Nfp8ZRaHSJjn9FBqMr6E4irJfpHXCZPPRJo5acAYA6BixxEF",
  "key8": "3VfxCxanAh27fV1BqMy5Env3mvJG84ZrQjnBkamxLC3MvZQmqz68QrzvAdkA9SZBCpFowvDLXqSh6x7yEHra13Z",
  "key9": "5qyPmR5dwVcjnzvDT9V8CmSSSv37YGqWuentsWq8amTCYW7vc4eL4cUJ3CdiTRg6RJxbotxmv8HHcc9VtQtnrkSH",
  "key10": "5Xhi7Pe2w25G1eawFC9Dy9FDaQ47ktX4Nh1Keh2tWMRdnbNGoo5TG927KQhTaEkMeEx8Xa4UxDRTxfDyB38i7Yea",
  "key11": "2Zyp28VG3ncJdjJRjSbDD5ZFMPts9iyJdCtUz8L1va4wXZkFXgymWwmWZZ3rzR9kNs8sSkRcNYwzPoiv4etSvCGh",
  "key12": "4zxiDam9vTXMXkJaJFomPAzGg6mye3Fzu83Ah99wu4udza2zSfhG1T54oymrhzqyC4xCqUa9B8HcQkemmYVeu1sS",
  "key13": "46wCZi7VRJ9epiEREhH3K1sji7xz1s8RpsKWqAJco6e6x9zXRGUbZY8djty3qKcg3DTQhvGRPErxE84geT9DfyUP",
  "key14": "3NftqWfBctwuCeVWfkUh2ooEf5JFw3u68nujr6fQcFgCMPFyP3cvg6mTjnGEywfJMoAiQ8j2gjyWuViNHDMn5XZB",
  "key15": "4WTKMyY2DNmhRxAFUJsQSpetrWPrjCdiBsC8omNypxSrcFBtVmBYLtcFrv41UFvHngHiE1RvZMGbC9Sm11RQCL7b",
  "key16": "3psGyhV7FNNQYDTpUjc5KmwMYiTT3pTWcpuitHLhDnaer4VXtSAE1UREbj8QhHYNFYTst1tBguRkXYqqjshy8qWr",
  "key17": "4P9VogMD94RFbfsWdw6UG2U3xDGBecxmJGYRuiKV5Q9sJcnCQCzJwd6VrUx2tzJGLio9mHGn54WimK7s1t7ajDar",
  "key18": "3GTAFRcUiF14hrnXgfNpBeqcnFQV7sTCvstPWxGFswA5xj9hBkz5cdB12jNBNuJnpmpC1QLZ2p547MkpSicXBzoV",
  "key19": "jmeah4C7HiHRQpNuqchWjWDEt4rHd5z1Gj7spLqhYkMA2ZP4xevGLDF51KZ6hEHRq1dhcCMPw5yD3tufqqmoovi",
  "key20": "3rGfkEoNAyQAY3eThPqGHX9mdvdd9tw7qe9YuCwTzd81BqpWuaBkgft1Vg2vckcVfy1zL6ZH6K3azY1N1VyBP84S",
  "key21": "5v4WeySSd3gNTERpYF7X1ZS6xG6aC2urkeEq9gmMgxG5EWFsJVStJUCwxMhof9wK9avxbgvFMisoCHiUs5hcAC5k",
  "key22": "4KkJ5hyFSvHxRmYijnjJ7JHGSD4ewfgqoPFHmqakm5XnTjfcgHLaAfCtEPNxXYi27fXQRcnMtqPNFHmvZ35aAZof",
  "key23": "3igFZmrRudERiLw9jVZ8Dz1fiDavMYV1r1jXVEts8MpeLWuk25CtTRTbYEP2iNFEKH3bSdSwoLxncroF4PnhrJbd",
  "key24": "5oJctCBc3yTsb6CMV8SkQH9x5JXwrZ5M9mww7wVFWYTULp9HeCj4yqKUit4QtBDQDZek2zANf6iZSHfcQx1oxowB",
  "key25": "3Dxw839UGrCJZZzTEBXt9shqKpTjKGxnETTtXDx3EusbjFpS1bmHjQBTM8sNqZc88M5GcWnvJFkUbLAZHyNvsVL",
  "key26": "5UZNMMY1pVjakcGGWiP7CJhW3YvzKd6236AVZTpKKEmKMJWp31P8inKS1wXNKSXq4SdKGSJW9GqKoKKbSV4K5ayq",
  "key27": "3x6g41kbGxkRjJrFHNsNiNWt241smvgErU5yky8iVCxt9HEQAYF18L88PuvBtHymVD3QCpCH5QEZuq86w9skz4do",
  "key28": "4XhPZ3PeuXjnwKXReXPeCUDwS2TF68xK1ir4EuNrwAnsYWp67js9sKaPEFBmvERkskxDpKf2kmYV8J9PB377qCTA",
  "key29": "2ukouFmR4CT1kTFGzQMJPwQh2YabdR3sfdAA2fiCUBZseY5AYEqBFKjWtRQiDkgupkVDt8Ur9V89zmHic4qHUVsN",
  "key30": "4EtqB1LrVH3oLZqVQuKCri3vchZcDdLto8YC484cLw17KhA2EcM29PzqPRts9MPhTBjqxKvJgdcgTXceFNcgf9rm",
  "key31": "5mJ1CPrp3wGu1WHM9KZPjCHKTPaVpST93w9vCjAGvkK53V7di26oi8cPh1PVsduzDiuhuTVvUoyXvtktegxKx3Qw",
  "key32": "44oeKyXrC2LfifPU5zmXoZcNHX6y6RrZJ49AUSB4cWHXyfW2nnMF3Cdht8JXYetQXD77X3KnWmct7NiWQGWrQNLQ",
  "key33": "3XFr3qZcbdASzD9abXbc4QTKtRypzcfXvNgpJRtyUkUTCSrAtdNy4c4BHxZBYz4mFQ3M2nHKetMxd8Er928b4PKW",
  "key34": "25eu7UnSR47GrTTp1BTspd6a2uG2qXP3PaiqBYD9nrZ9QXFCtZ9Uzb5W3oUTVUcM8hofNCdaUkAmhHKocmG4nRjh"
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
