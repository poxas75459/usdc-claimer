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
    "3ktnmmLnJUdWEDBpGMno1ktm7BWNJFddHuwDr9cD7ow5jwEgfP1N1meUkkpBKadygi1L4bkxah9ut9YK3ZtQghEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeiXSLVUjFGsnbMusqH1veJwDs6kRu3qNZjprasHmVv7iyzVTEFM9iw1tN7efgA5YfLyU6KFYDavpjSBeaW9dbc",
  "key1": "4e1HPLqDaVoUGYoFE32FosVBj7XDQF55gPdFEeByBycDxut2hS93GSpUt8k3J2PYTbnCNfVSNqTbERnbRVtjnJy",
  "key2": "5LpzFTqwwywoiggVjDuwigDVnHhgr6RStz3RTkigpk8NpFPaHSmh3WWHLT6Ydni6GCmkkZ98dfb9G9GhS47THMK9",
  "key3": "2UXm5ywx3CGTH1XWJaFi6Xb4KdSbvsytsPzSu4hR6n2ZuQChGnjv2dFSPFWGnX7NgUathcvy7DUkvdckW91V7pAt",
  "key4": "4fwb9jb4MejSQWY5biaMdozf7oRxDjriuCmc4twb7Q1TC1yuys2XAvXW4ycKF3hVzre5CGxNNxNo465b1BdkJ3xJ",
  "key5": "Uk3sHCt5t6K9nUVvTtjcRwaZwRyxFW5AxTQK5aEgwcDaCJkVEjhd9bkrq3DEHHAxVydRP39cK4btshhfqug9EjA",
  "key6": "3jL7fFcMXhPYxzV2H6whNGm5M3myrFwiZbZtxxBpSusDM18oKKpw7UsEdWoBsdRMLJCYsqV15q6cirKnET2mzchz",
  "key7": "2LqfzLb1misAEVpYWP2JfczgsmKxbxmwMaMkGjrAaSuSVgfYRzvSaPnK8N2FZ1Lxt29yK2Qquj99xfs2j37prqcJ",
  "key8": "45ox3PkSJ8abjh5GcA5epoUtQm5xcsuCtRsGp9dET8pbQaYsFVGjSJ3NYb94mAsCHXYrrXcqjvoW7GNt98SgDZbH",
  "key9": "3wLZif9Q7CwjMxQaudCj1JM9ytqZeuh1ptsNFFDdpZn7RJoZ8DmBSa9eQFi9dRZBwNF1JkPDhxcwPwrrvv8Ff9xu",
  "key10": "doHAUcoDFPVtTjNpS2YKak8tfTw9tKcQzHrtuqNrv8SozyYd7x3hdADi4rE16i6A2Qy2pffZ9erFodLD6JuSbhP",
  "key11": "5TvvdaiHqUZJSGXpyEPdTW57ShaRVxjeqURDJeAZpo9bjUG1MnZpgB6Ud1yyZoQr9fJuiWFsTBiiydsjDNWMmvVB",
  "key12": "5nGgiC8BNecx4ZJmLFTrHk3nmAJ3av3mDo5R46hjv1scPDzhsPEfAmLrLcs461BDYv3ZQWxXKTeok4V4pxJsZBLb",
  "key13": "4GBx7jwk4FfxU6u3LR2gNPZBtsjzyuKyzbEWFUXuWGFa1czCh4Jxnf2xaqcJtyDDv52Cv84KJoMd2L9sQpj9vUYj",
  "key14": "2bNpy2tQwxBenHJGg9DSBVS9MuaAC8TEMasq56iAXstYJxQWNg2gHGBnpRZe1g9MkovTjwvgfMqqFRw87TeXoezi",
  "key15": "oTYdKZ6bNsuKmSN9ff91coiAsBNsZiBWbXBC1pf6Zu5Bt1x4ugvcatecoWCAACq1ahPnpp37cDNGMpFvRWh5BTw",
  "key16": "3jPkLvgmqyTG5Xns9aJ1zGzkqRMpJF5FC1o4pVjXM3YaA8JGfBPGLQVUP1wARh3eLfVmgfRco6hxnpShN2VKj6dG",
  "key17": "45pkerqv4QVUhN4eLXDm8jLcn4Dn1D2jmL84x19ZF6DrWpmgENAZMFfr6Yett2pWX4jMmeWzzcHXEMAoBYR62vJr",
  "key18": "iZzNaak6qaN6gS2d5w8ZhWQGT7BY7RHf4b5vrzqw2eBJwDBuicfsn12K8zSJUtz5vVQFC2MyQEU7iRKmPHoa64U",
  "key19": "5pJS7hUVfhNPPjmwVB5LG2rtkpdTA1TEyeCuF6rAVSaRNVKANBXv6Yb63QsBy9QCTni4bPG4aBVrKgUaGYvwHaN9",
  "key20": "8b33zchW1bDdnfM8Df5YMusnAhPCLQcUzF6y5JcHL8j2bU2w8Vv6zmW3NbGVBNCPvp77ZrWKvC2EHJQYoibnnEV",
  "key21": "2YjDUUcGxPxqPcNXYn7EgmvnG87mg5jtGAAu8UpbR27awuDcZJRKCD4soSUB1JkzHfx1VyubfhQErtScQCH42eYs",
  "key22": "5NEiKTYEPJs1nu4S5SoEhN1KbQdmxvTmF1hdTNUVGA5mNo5g91AkuQw5xQCcwqzLG96XSNiW77D74CjbnV52Q94N",
  "key23": "3vFKBiBtZTvHV3hQK3JPoMJCS7skPtZ1oBPNs24fys2wTdQscW33HFFZWPyqjWVg4ZquY2ne6nSmqXDf8VcBhCpx",
  "key24": "5pAN74PnrTdz7BqiS59oy5hxcCD2TXrmxth2VDPbwQWFXoKyJBi4p4CQ4ocjBAkEaFzrjn4u5cAuEuvPskF3k1kf",
  "key25": "5EYXjRq59u1gGCg3ofhgkadQyxy3jK9x5uNdJbyzz2A9V68SR9uDj8Pdq72xoEztWT652HDbTU2Zcuv1wyF4YMMC",
  "key26": "cQHjcio6v5P1kMisZY6WMSVdXfmCJS6ZAj2Js4nrjUauFf7Nm2Gk3cdaf9TDEvArXbjAp3qYk8NjLgC3ZCCA4gs",
  "key27": "maS34mAKCQgAomhWQBGRa2yCe5ng1iadFpMDp4VMtvCXC4zBN5JvVirJqgw5Fb6Rmni7hGAUbCam28fMZgMAmz1",
  "key28": "Xs1wHufTPcT4dctY5dUW1qFBMBxYSWNKTSWV1ivk79HEEcS3BFk49vvXDAqnf7ofMrAYTPy8FVwfxmpUTRHxJXs",
  "key29": "5Pivh6Wz8fKjzTwWUhw45KmXwKsiVcRRPRG9vNo1KyGQMi7iQSxYtHiCDrWqGdcnUDwEkbkh72NransXRiEgQJtj",
  "key30": "2CgdfkRGxkaytoQAWZYWmxMwm8nabFa3WkAemTodugaN78Q7nLuMmxPGVMdBGSHxPGdM65zTPdrFym5h7DjfYQ6S",
  "key31": "26nXm26cMTWGCywPvPkWxFnikazRa14PEy9WM24LE6FMtXFWtWhtpV1BsitFzdWm87Vwbmiv3GPsSQ3E2689sTWe"
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
