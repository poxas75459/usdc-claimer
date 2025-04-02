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
    "3ixr4XdTr8tQhipZPrpRLbaUyVpdSe3wn288gdskmZfPVy2n9cavvbNhgy12CdkqSSeK1D1VoEK31j9FApjGExbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuc9xhcAd7471Lx19HaUENyYAqXBJBPpdE1qx3FTx1LePMgP8YN33fkp5zYPn9s4aVWfDTEHdcxx5faCcbDzLhj",
  "key1": "s353FfPE6BQyE85NhwkpFqMeV1WFFrJ5D8oMy5PqXavEG92EoLo9dDKS8jjF2DF8CSYqBkY1QVwMx3mu6BuqNxU",
  "key2": "YZ3YXKea2RyPPvNGDQFjhdnvqv4TpadK3uZX44grpg7Kunz4UMDfJmdeN61fxeW6m27KxNbhaCD7RaEaNbruJBF",
  "key3": "5eDCk7imuhPXCULvJxdEVWdaSnSVeDUXp1XsFsQgTd49zCCn5ooUm83We5DXAWw1e1XaUfgtC5DPizexMshyZUWf",
  "key4": "2dbkJ4M1uiag1EwFsxmVgscNYoj1eNfiM7ZwRGRHJzCDZ8S2Az2zjzuev2yvWSED8ZkuuhS5QcAKyoCkNcDZ7giS",
  "key5": "ZUpnhaZk8ptxJ1Qoj2Wsa5DfTN5vVNVnVTEXGc1bgtQxcyAp24G6bQW5ehWjR61W7qmr1jWNBxs6xYhRVpKL291",
  "key6": "3fnTr7oqxZQUjkK7nANxKCpBVuQ3BPyhtcuU5CjdjDJ4CKPaVFSsY4TiLANBehxrSa7QEKKT1pL7DW72aBAEzaSj",
  "key7": "2QFLHnQesREAZeeTh7gPpCMrdKkRWHvKPhXSXcQEMfZxHSqySocbDBPSjHJvuak3EiprZNTMnskv1K37H3th9MQA",
  "key8": "4eDwzG6vnDzSEcM5NA9tbhanQRKgDswhPe13PtVHtvpdEn9Zd2hpxBELEwyFQwgN7BqbX1tdMLcUoHnCoT4UTcPF",
  "key9": "4rPPhU812JAtHDavPNdcJh8AQWTDtbWw5PUMAkL7m3FrCPDZgRpyenrRRuM9nuBsG7oC3ERS5L4neZgEeSNZYC6a",
  "key10": "2hg5EjGvDQDM9K1v9S8EkZgsmXUDtMz7zqYPKF1zHRj7AquvthZXE6PUe8oY2oHkFM8LVXHcJZpAt6itfognE1Ny",
  "key11": "4uJYGjw7HG38zdmmu1MioP6xhfQA2m9T9e6Yk4AdoAS4gWqcEiB28BEisUaNL3BSqqdaejoA5aVunP5XTZ73DbkS",
  "key12": "2qGnYcD7pWLPgoqAAgDYtBDzgJ77zGyDq1da8KfjwoTkNMoT43sn6UhQXyfVgBi7vYFyQN4bnkdEFzUdqfCAGPYx",
  "key13": "5PyvE2LBDmf8Bi786fBazksKBFS4X8qA8W92FmtBg5vpLhrRRT8hxAU9Kj3LvqyhcT1Yci8NtDTAEUwkrbfpMZQd",
  "key14": "4APcuFceVMcYdczUDJKdzzqdvtEUodanogHy558FAHLAb5cvQUq1AAqyf9AZgo76ZeDFkyAzhkjcZguphVKdLSrr",
  "key15": "5vY41RJwysgdcqgec2bgc8WnBm6GUHa9QF5fJqrh11B58DSr7wuRjrhnydP1XiHkgU5WrFki51bdE7h3dzyCKfqR",
  "key16": "5ArFmBqZkJTqTPP49SByZ3qU6emAfLJk1cobdd3wB9M3XdZy5Qm6SR5P3YsNUW267yZNWRD1iiKxLL7Mtd3yCnQ6",
  "key17": "4TFJzpd3EVVX8j9YiW8bJYZBcKCZMf12Grh3x4UodK8G98r4NQXucNx61hEinewyLwFwRv8sobeVForbo14KLQMk",
  "key18": "5Ng6ogFi3L4xwnibp6LvaaeyB7T3QN3j3ErvozL4te2Mrm7Eo5h1x4A3haDZMf6n9v8ZmnQwX1KzaTFbBGnZmoWZ",
  "key19": "4N6mk7K8cZzGhWNjZwTTN2LwNvVd2QB1s3BCta7YBux9vGed2mMxbnqUYPeMj1ZKiqWLCyvbZRvXsYQcvzvDibcL",
  "key20": "iTR2QpDhUL37MUADrV99ofYYiS4imbTELbkB6MEM2qY9mG74BwuVXNfq6yqhvd6XeVMW4Qh2PMxANimYcTfKSZ3",
  "key21": "2RmtRd6YvztK6iFLqvBPHHCu934g6qJ2mq2u158VNxfSmKBKpcmoqWNc8RjiNqfhdDLMFy8XQGuk2y5YMGN1DEMh",
  "key22": "4uQCVNG15L7XzSaQMpdh1ZqfSEMejVcxtnQjxoDpo6fntZLm5bAE5KpUziQSKpKVotwF3qYUmPhi8o5S9RdDxaN2",
  "key23": "3SQHdfQ5itonwa8QE14QSWMTD7LmqjqhvRcXPCyjMhYPNY3i8PMcuA1DQibVVpEwUpmQhsxohJyy1Q684TWt8rMB",
  "key24": "3dVMqFu2XDjZZygwAnsEMWanGso4pydurHjXNTExziqqFQaa71XmgWUrfqpkWbSHtW6uHTJ9oDb14yftA5RTjosC",
  "key25": "otjCSXnx8F2HtLnu4wYN7JzwQKAkYdKGqqrJqvsKJVWMst759ceyk4mDVfL5YzVho1D3ocMs5fzQzPcuERVDX2L",
  "key26": "5iN35GZuJesBiTjXSQb7GLEvitiefAupofRHCA7kGHDFNSHcX3E58bB5cVgKjgEvtXwGwnv1FAJL94gE1noYeEFV",
  "key27": "2eTgriyKZWxwhnaFXw5Lnsh3cVFFK3k94UhDS1g5r2AoboVE8QuJwe9mKcRMuhfCzz9EDJBUR7pBePMumk4sYe4g",
  "key28": "45eFG3PM8zSxABZw2DWYzsCc81tDeroQzDbmkuZ9UMUceV1RaA4yaVcsV3N1SJnu7r5rMLTziKFonw4JUozz59uA",
  "key29": "26SzwAhLtpRw4FQxfoJUqnVUD7rTGUxhV4py9wrac43G8ShhZxXsq1CjFQk65K5jBa9sA6jQZHfgtYsytQZP8CWK",
  "key30": "4C4YKL9jHrTq2BULfMEkt5ivs7VT36dKUQwxbiuCCkiRs4W2cWVRkPvHREs6yLMfST298XRUJTVRnQrwSG5aa5sa",
  "key31": "2MXt1iNdT8izw4DDdeMxBsUYvGBEM7PfErZV8ihpFBdhL3u1kdB7vx3hz4espvAL3Bu1szTTgNZXp93hqk4xEKwV",
  "key32": "5rFMVazEhdJcH6mw6FEXX6Cn7VdDm8cC9trf1MuSAtBAR3wfmR1Rynydtag61wATZRaEKCw8KXpSxTJEz3tsC3ST",
  "key33": "4QPCTD6ysPAMTMK9yM37rBSi6gYYgfv3HALJvMcAiAHt95bARKVvzEg9ZuLvhhkFSisribnYpowhZUrW77XLu2QM",
  "key34": "2mRB9wF72HWLddoB8J7CxGV5gBmEB7iVVmUxK7gHYBCDy59thWFnezEriSh9hAp3fB4VGjPs7wvQFtucehghJ8JQ",
  "key35": "3wcU9uebGvmQHfDNANmCAHGbUNAoBKNHyPikT8vdt9aUzd9R7aFAeXFTdscekZ4owtouEL2zth6fWQqKxMpauPFP",
  "key36": "2h2QNsxSxxdaD8Vg7GHofHUdBeQpYj1ywUfSsKqCup9khnx15ZRky9uy6Hyc2uLZb85bKkdPjnJWZfgvModRUDKj",
  "key37": "2Mq7ou6Ug5J5n4W1kzHiCwZrYqso1aEF9QoBWUUeq9V5NXzzo8KD2kurdVehdAyUYjJULxFV5UirTbWgGLcvciVx",
  "key38": "JV7m9VV4mL6hZwjUuskcAZ1r1516gqmdTf398tfpks5XMsRZ4FXF6zxPBAxyvbWhjjLfMLRB23VRoeeFmrZoUfs",
  "key39": "3FB5oCvTMVWADcvKD5dwHzuhiDu3N3KkSjVxXXzorQwGEmZwAZeci4ULLX4xnSuSyrXCRS5XC4cCAgSKA6RLCFfy",
  "key40": "RmfeFS71ACZQEbr7Axk9LLK5K9FEPC3jcUtcmsBhBwKyd9GqF9Ra3oyLBUEFHJTbzRRby9gAhTGrKDo21riAFeR",
  "key41": "2zfyrAfciq9SAUrTWrS9uXwBSx73yaYB8hPRKfadCCiQPNvQjaYvJ56AiTwrysXELvMpBMhuACmY5ksms9yAAyo5"
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
