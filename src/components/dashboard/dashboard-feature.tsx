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
    "2X1SrW91EcTcVzikFPgKXzDP1wD6Nqcib3Zukg3KfguoxPnbirt2uV3V853F1C4z7w69ML5ikP1uQC29pGb1VC84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UBfpBYvejrFBNH62rALWqae1FGesZNUkn9jhBem2PJdfEdoG9JnXYoNqGXPW5uJh32dnS9JKFsWDL7GnupJSPB",
  "key1": "61puG8sheb5LQrLGcqrqV56Dzys6AvwMj4FouSipdNb4mYwC7fbAUuTaHSWxmNg5tWG6Sk1VnScfyYY34PW23F4f",
  "key2": "4Me6YmNd21vbkuxA6majfnPuNktVRK6tNfhQyJAue8pHjD7rNCRc11FcAsKYeUjZGB5BTmGUMea5ardxrzZTosR3",
  "key3": "37FcvQfk54GSuH6CdU6QCbrNfxx2EGUfyRALxtF6wXxRaH2oFgN2Katm7fGwQrGcR6Diir8kifaHrZpco5CDRqdX",
  "key4": "4rJ1KrMD6t9gE7mBZDKyuQKLhrgiMMBofrJfS6PCB95KQcHjhyQxEMyT2eJd3PYQbVQs72cZqfCenzizs3Au7X28",
  "key5": "2eFUVxCQRzrQbUAJaMC3AGLbc2j4RN8f8BCaXsi8K6WFDo3hbPW37nRozqbHPiV5d1CyZADgDdjejYJatGeTk4bM",
  "key6": "3sHAmVbGX6ziE1725yHkFRcLZiUmShZdRSKazWwxvx9SHw8gRhnKrqvbFjcJEueju5SMVbaQgYJZpXvE6u9hFqiu",
  "key7": "2sGpWCJUTLk1hdkAw3TnUKLjqcdPKfS6Vsseb9NzN13bPjUq4MSDbyTUBZx3CtRrQnJvXMnnKhz3khzFiLeLAHWm",
  "key8": "31zKDGduPgBFB7RTxG529xDuhNPDWyQbmcPe3H22aM1DFBmzZrVrmcVnqXEkeNdojSLz6hw1s1hS4rmnqazSRQSf",
  "key9": "2KtnjfJqoJ4VR67S4Nw1TQNnaeHPLkAJqcHpfvDriKzSgS4aDzQ7FUE5ZWUF81iKannhNHcgXD4FoAPcnhjvRQhh",
  "key10": "3L86GNGLMfsW1VzSZhxYMG3PXYZa2vUTdvqHGHgE7iDM9zdBZWeiah2pXCAtcWWD6Lb7qrCRwZxjbfmyHKD2NYrb",
  "key11": "5JjK3x4CvNXy8z9BEWm8gSQ1xmCN4pETf2opebPAktULg4usV7GKAoLcVWEvncR3nBeDHUSCJRtAx2712HpH3ccb",
  "key12": "3Zfpy5DBqEh7MAM7fxFX6AYDTtQCJkyxUfLMU4XxY7GcFvoKbku4aJpkjU9NLLFiUJNdjuN2abvuhDL7eVbQudfD",
  "key13": "5aL96mAUpo12FcK2ve2ieorH7qPnJN9omgfKfDqMTqbNDMqtQy1hk95uzjGL18TviRoEo9voyb9nYxzVnaEu2CY5",
  "key14": "DTtpEX5Nh7PGw5cdUdeLNoKD4vsFd7MSinhSS6Aoy7iGHTJvHak7dkX6cZ7KhwBR3hthoEsXtxq4qBxd9Xea6Z3",
  "key15": "5yuwTJynoWkKamc478ufKGV8MHr2qWyuPhYofxmimNSpoSuZsTEx5vcX21gnE7Cwf8xTgD3yRFKctWn5dMfvng4s",
  "key16": "5DX3frc4KrzeEUESwAz2fn3uJEKeuNumj3xpUmUt5XPVxEDnbxpF9D72FcmU4BKSZnuSSKZ94XicMf1XfBdZcCWJ",
  "key17": "4RjojVansUmT9EjhShbHW3xyMVnayZr9C9d1bByGdtMy4zFJDAVaAxj3fAQuxHkKjDzMDypkRPNUjsR8k7t7m1x",
  "key18": "3tNvAmYu195aUu8r8aC56i97DNRtBngfR2SbA54sxjMLURsSx94dQ5BBZYEV88HMGHpApaTqz7mu78y9KS4Sr8Kz",
  "key19": "4saQskmQTB1FXkcgzb4baWFGpcnS45Ng29Z2bgRgmYbFPjbi8AvqzE7JXKEjUdemn2AZ3E2aNnoQSfAfBQeMibbz",
  "key20": "AmjXcwxLo7dRvTgSS8UGHQjZvoXhr9CSyfa5vckLLSTygaBE6wChuE8fzUGgF8mKpkcJqh8xDu3QfRjjeAXuWJb",
  "key21": "2iPewake862YaLSfpsHnQy9GFgk38nka4Z2yddSFz1LVAnvAUjJDha1QfEw4A6d1xm666RCP9gFxNgP8UGH8Z9D2",
  "key22": "23izhY128W1JHhvNQbNHpW1MnNrhz4uMHrsUUM5gbJjAw9SJR34Np5vB45D5Qnvjf3RmLkqi5JntGkGv47XyxvWy",
  "key23": "3DLTps4tjwsgaPuPG4mmtT3CNwtgTv14UeKvp2tmPyGKVPKQzxExBueiGqwsxvYdv8WYkxR8kJK7mXkmGhQ33TMW",
  "key24": "3ovTXwRMWNLYjRHoPWfrK7YkTiebJPihAXE7SDGgsjUVFMiV5f2RJZyPuhfF5xUy5ktEVfSMHg5k2kW6Pxra4MGW",
  "key25": "4kdnupSsLd6xe8VaHNSPxqbz54kyvkbftCKBwx54sM4xEfjNod9cEq6QhAnq9z1JS4NahDgic3s63dvgZJNURFaZ",
  "key26": "2JGi12dufLv23eQnPnnUtciJxVDqjL242cCPk56EAQ8dTixsRANHZ3zAdmm8gLxcWbePQAf3FjA2tvUcKRAQKgJU",
  "key27": "4pein52gDuyn3fGcQvnwb45bnxbQckZQpY9NmSSDvKt1Lm8P94bHEghNQyYsWJpMKncaTyVeb2Gqk6YJWHL3TpYn",
  "key28": "2GC4woqsmuzZcLg5Q4nkuBdorDSgtAM8MqJsNscYYgEVxTxKto3UL5as6hwvoHoYR2be14vCFWjhYXUGqrGACpHy",
  "key29": "JNnJ9Fo83NgEtM8t8gaNx5kmVoENWdUsQXybrbpn2XQDfCyiC7YsA1r5jgrGzYGJau4TsN69wYQesf8ttmrKYWc",
  "key30": "SPE4pNTZVD3f8uossxvkLbExuU5TQDgKcRUhQw2ADPzGLVPRb9JRMGf9ftCMbTPvNMpypB2iDAA2fG7yyrXWNuD",
  "key31": "61YweYHC5SGgT5AWRh2J13gaqcWzEWop847CwM9KWEmA6DXzva4oaMkUtdqNZXFk78BcUWFpyJsG2kfn5NoegAax",
  "key32": "5z5p2W8ZfA2phMepJsvtLQdhMM9j2sJGixii9SgyEG1F9vaCwscMLTubpDF9oQfG4DjJSaYq8Tfm3D8wJT85F23k"
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
