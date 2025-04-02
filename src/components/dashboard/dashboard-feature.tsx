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
    "3ZUFK5WnLpHepqhobJzQN3oVsHL7PBswvQjFrxNC48pNjh6maLbLYfk6vcLcT6Q3t4gwXZnmsYt4uUz8DAHk2uHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wafS35JPJo6cJCfty2DVgRAZL6GxCqXafVCcSHrRscg7GNjJotZUk7CRkion8fvGbfPU4ijKChXekdem4N93GNE",
  "key1": "3Ep3Zqceg5gZragAwx4phaK97xpm2h26dACHfNgxhTXpgscb8QRgRpY7o1rd13ymiLmT5XDpbbKGx2biMgDEeDGj",
  "key2": "2JngYhW2CwWbnCJSUVRMVSjUWnR6qnY9Jwn7tJC3mXzgmrSHW66J5bLtaBjaqTjzCDDFZQQct8jxxpsXTitkwMBh",
  "key3": "2pR3GBdrc3gf7pEhYoSEibF7AJtuNgMkyMrMsouLmuBFsjokDUSFcpE2iWXsmtxYs7s915voE16xYQNE9WsgLhgJ",
  "key4": "3M7S2nKQN2os1EM2YQ9M5R3Z7m9NzQHx1XqQNbmVWhSxKRn6Waud19MTYu8nq2eze49ABUj9H2m4GfSjytUFcL3d",
  "key5": "2Wq45CWuL3QFCeJqmNfgSu4gjxryHPfxJ8qw5awbxeoFXsJ61VSzdPKhqfKJ64PQPtytm7S6RyX4PwZAEKgDUFTb",
  "key6": "3x3fvqaQkeN3PQeKfTxN7uhcn5h43Cx3zpGMBzAMtS4Rr2FMCoRZdbg9axrZWyDg2J8LFYXuYpDGHCWg66SFhpVH",
  "key7": "5qj4JuR1bszPdxkjaZ3Dzv4zay1qJfgwDZt19aiNig8vX8UhFNm6owJ7ACLfbqiBkPL38MPFcxcdS7jzqXndwYgx",
  "key8": "4dcoyE4aWsu4mLBzy6KgP876Q5mhBD5TvGAegnXdCervSxvuGrzjnm26hkf89ZG1odwzY27ByuQNGnzrYLgMhhWU",
  "key9": "4ZCZ6VBYgu2dsHcUxexUxm6m8vgGLpUBMtWuongFi9tVm5igTn2tGGfwAXEutdCLVetrz2de2niFwsszVu2Jzf1R",
  "key10": "2zhbFceSEgNCXL21PqQQdzDMAtM7aGxjZ1k8fHUpo7qE6e1qEMJJeT1rdWjA5c9WT9dzc56nGabLBLswGVZHg4y6",
  "key11": "4g1uyRjzLny2mf2XeHTM2xMxVizxodCiBYvDTD4PnWy1aquHXan2wHcUmJuFv8vGbPAcNdf5eDt4rJCy5CRXFDrh",
  "key12": "4GCjBU9MZguhyq1doejEc7rFtPrt3cEgmKCnTyCXt9NgKwHZ4sHjDsCLk81jt2iVnfac2C5tCFW8SXC54civEtAe",
  "key13": "42XXZ1KzdYXxtbsdRPP4KjTU6NnJ4RrZgdSaA99Ej87cSNvzxYGCenkZA1gAV8dC28bcnpqvVgC3FPGfvjdy3cKd",
  "key14": "Em5ke39MLB3HrvDhnk9sgg56PAjcGYK5uq6WYcgMdVLRwsEZirvsi3AcocwTmDpUoim3sR5hLmyBT9hzp1dw1XM",
  "key15": "5SZ3iSaWUrGh2ipuPxVN6gLCTBM2anvrAvSEmDD1yRXtdeswkXvVTEsbmoC3XtPYFXUfd2L8hykW9uP2YeasKnEm",
  "key16": "2eUq4y2YL1ZcFx9cCpAZu9ZQz1qcFE46dwQ3mUGp6Nw4zw3P3Aa5zuDc5FMJWhGEXhBRYxaU26fivWuADw1yA6Dw",
  "key17": "2g4sZgETA5aVKx4bHPc3YUGEeP97w4CfPdU8pbk6sxNjTSeATR8KXwVH2g8hcby9hEjQ7EHRJvtcSDT5MfKLCTCu",
  "key18": "5mm9YQcxLCosT286FU5v9b4rPGMnLv98axx5mZpzk4ZsxzZj2TrQ4aMFHyrzuxWYcdfkqn7VV4R7iYWSvQr6bUWJ",
  "key19": "3NVbVqpuPfh4JrXbDbFtT3oqoCbyF71Ht56REdrkYKZJKEo5MYFBy8oKNDUkBhfJGQ4nvrigo7PfmQhNiHRxn7gg",
  "key20": "58VfUhYccUK3tiYMzbkSy9JFHCYVQgNHxx9C2EiGSQ96S2RtHhdmBJWbBqqHo4gg3G7UPgPBNSywqnHtX9mRdsaa",
  "key21": "59aoSLS4HKo5jFXqRn9janavBZboVE7kkpfyK2ufHGovpyPqbiwyMcZ2VqkRjjqE2N2LAHC12ySeHzm4w6fW5LaP",
  "key22": "4fNPXRkBU2yhh2Ws1sLa5eNTSsR4YdQUwkHYnBXLBzARHhAZacgKjL6YzxRGYRD1XMyp9JjZGsCguB7AfWTJP3Jf",
  "key23": "3LpUnvEapUMEsNkxZ6EpYZRR5PjJnSBRCKz9V7ADQr7oYxxEsBwrGD2ezoWmuvqkkm4aapSDt8Yj6Pc7vT63ajKj",
  "key24": "3nqXqu8MtF8ym5Ru1fn3wphttyvoRKPXREAKyXAkBZvdoNdFpby1QFiXVxebQyVhHU8jBAGuQt97qidM4M8efEdm",
  "key25": "QZCQUg3sxWoY4jZz7QbWahqzqB4ZagCX9uHDo6N3CCBQLbpBgweXCqeyXLzgoiJB77XVrrdQ8aJxsVZKtmpAm7Z",
  "key26": "37W1esGXmyX1rNNHB5C51hcXnDPoMAMmEU2Dq8YqyRn7H4Q8WM2rJoyGSbESSJecB34qvh2josFVCUs7pV9DKead",
  "key27": "4ahVbPwjYW7Snwn7xwFmNktmTLJZ213uaSNoQAn4bEBFEmnBjsHasoHDRUukgb9gLdBHrh96eJVbiTbBwWZ2Mkpk",
  "key28": "2pjDF24gdKbrKxoSmNsC9ffzBqXp62ZWiMVDnZzmLhv2dZEwiU75jVYfXDE9GGJnDDutJnYxWsXE9dDAZp16SDQG",
  "key29": "4SdPGHtPVUru1gdLUhnkpvCjgzk283STdgsAa6vmTkv3hPxvt4ZdB8fS4YJQ4Cf3DX6UC2EQcXgbQNKmtf2T7WDu",
  "key30": "3DBxfdAhXR2HaBeCt1sv5EQsNp5jfNkudSN4VGxyw8ZCDZRjGvbEDwEwnoYXuGhqRXL81uX9ZnQ2VpREvgmJuwAs",
  "key31": "2P3WrDDYxLgXX15YSZmr2SAdByBxaoTALZagsU2dsrzHRa2H8Cwi5USPMwbnMU75dkd8GJfgLQEhc7HXoAW6J2K8",
  "key32": "4xmkhdHwSjWCWFU1ZuBxCGnkhju3w7J732tAWji6b7voUJFJ8k9BKqTmoFApjSrq8idxRRVXbfkFReTHHD5aPgpp"
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
