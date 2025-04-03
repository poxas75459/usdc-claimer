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
    "3tDBnh9YXUk5zRoB8tDrutfXCRGxvDs3NHqp5vQkf17TSsYtTt9VfWZj7BMjPtJrRMyRcYuRXrG2j6uW3v4gvg1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KkJb3nBggyi8oJDbfFfnjDW1vayrfQ4nc6uTsxSZrsdQnjRJ7eYMk4GENQjjMtwcFQRQ7CkisNkGcxx3KZTZxPd",
  "key1": "5hQ1Bbh9VRDhaMUHbgWUT4FBQTPH4s912p3FEqv7fNch5M9rx98FwkcRwJ5afrbEeqrKK8VQE4kXCmcjkQxd1cSf",
  "key2": "5JQ2mUgtM4z8RgqyJ4EsT1L1bBNu9J8K3KCwHhkT9hTJbesdpjvEWmt9Uxyn3aVwuLkbEQeFEm3ftBwVkFwJFEw",
  "key3": "4Qo1LpcQVmuz6kgCCzDaSpdsuE1yynTW5ZSd3QP7Je2ck2uTxWCjz2hodeM28ZGtiGMpDZJNbNRpAkuoHPf8BEWQ",
  "key4": "N3ZAxvDHd9Qumj8sBGDYKouJ71v65wT2NPQdRxo4Bf7n3x7JhfkpkwGoHjvA5PcKZBVRHbV9FQAKJXA9FTG3rZm",
  "key5": "63kAXhkvbrzmzMKYzjRbCW9ub2Z3f5d2qMF5UsA3pW9etLNZoNJxD3YkNtp2QTCBVnkSNky3kPeYuxvCLtpdqA9v",
  "key6": "4UavsYkMArYQ5rYYCRY2KU8SuTjVQUELXyGMhxUV1rvfJn6JaSAdasmAnrH6vTTySyeZNfC2aMGkYpfdd63k3nnh",
  "key7": "51eKsvqZdKzEgb14uQJw99mUay2Y95yr5tkoJZVP6b3aoesYdC8QFraHaFaUfu2MefLQ32TSH1M9os3v1EuRgtSF",
  "key8": "GttMN8EaQh6Yz8FT6DjPdW7v9TNPLLyfjifCRSPhJgR4DRoo7uzi4FoHiL92gAsY9raAwa31erL6j2hUg41GCRp",
  "key9": "4S8FKqLYwvmiMRxTn5UKPcvooDNvSHuSMNS6DvXQEf2aXocn9ZzjpqZdCXLdjFb6u98w4x4uhsZf918hT72WrXcf",
  "key10": "3LUo292CrC72E1C5VWXvsS5ibQMyy59kzJtGQQ5Q39Q1YHjD1RxaKU53zTtKdsPshdrUFaEMA9LA7kohg76W9Un7",
  "key11": "3GLrthbMJS6yiHCAMCM9jMoegnasYpsW8fk6rEqNi48Eewjj5RZN32ZeqCPvGRqn3ryXmZAteXz1awvQMpVPFqgW",
  "key12": "amdfuhYDB2SEeB85L8qwd7ix83fBMvhycf2ZR6qiuwatsCTgaF1nK7998StwgKbtPGkyEPaJ3d5v7TtzTiPsG1F",
  "key13": "4DoKLetgErd2XDArJ1pFp85N8TV8SSknsoySvgRYh1TJZkN8iWrxNCctNPsJm2DbnFraoPZYdaAv8hqRBV1Ai2dD",
  "key14": "35rw5h8g8PuCckZ6VkYq6vXvVPfLJyxekJKiTZJGdxGcxYFJkg29Ci4W8ri6yhNv1tE9zPAiz8etZNzshKDLmM3w",
  "key15": "tb87kLQw5W4pweqn7DvXHbirkaJfLCQHGQzT5v9gyx7C65ua91uf4etuQKU1VUSYKPDqSxa97YpcdZX2rM7orX7",
  "key16": "3kfpvcmgc7uCfxyjjZw3xGXXEccXEu9jZqeMTZoD741kfGWo5ovwoUhJe4XxpJEob8LZsD4rtZJFQC9EhRM8TCkF",
  "key17": "2c3JDth9qbpjcn2FZTv9HsUCnUpZoenFnf821ktePitiqpZagwMx4rZcADHnG1LVVdFVkwhz3kmq35F1c616GWTH",
  "key18": "2z2bkyipMScLfpScqnZ67gni4HJAc55FqTxA9mfsDtrAWxiuF2BUXm24XPCfLTBhEkQVaLt8VEpDhsijtpC6SKfb",
  "key19": "RNVpBF2kQDJiVSV3EUf17wLHRHMYNtVGLD3ZvdvMcgmSUEjrcRya8A2PvgWrXggoGjtVoJyNdPVPFAXS443DLYx",
  "key20": "3ApCoEMfTuoiXp7nJSa7fw4tcCyvXkN7AzxCA6q3BkdLRfooAyoBH62gZwGM4VANaZveXoKAvbVcp2D751LjnC7G",
  "key21": "2sr2nvuak5vAURf62HqKyhMq6JRcJLbXbeLkL9UZEuScxMXzv7scHU2RSvHJQyS9A54eKJNnryXXqvy9FjUzres8",
  "key22": "3625D5wjAM6kYqkNJpk1921bwhjuturCKpqP9UMcoQ9fGoe7ePTywnAVYyHw3xRDhovcCwKAE5SfxoKpoC2xe6F1",
  "key23": "25CThcWvPtb737fP3kYD54Kr8cShDcxgPZ4V1CBzJnFk2PqH1ZKa73kE5tNp6phfL2DDge2m1Bc97o3ByRRD9KZQ",
  "key24": "5vcMvtrZ4CNv6UHXYnjc7BvvetWkDSmwrFqoexdY4BfzatPfbVfvwEkpLAk4cnjy3WfuuPdW8BV9vU3zGQtueQfJ",
  "key25": "3aknXJJT5NaWKsNS11kTaqCCEjdmuPWuENEcCR2XCU7e4nUy3BYjoT3Dj2TdrH5e3sP7kqxqowTgSQFA3QoeEMeR",
  "key26": "1VyHZFsdgtYCLvPgWsKc1FA7gdC6McGwJCaRT3pWVrUdTAEuTing4RSJF8U4NA3D58JBp7jFfFCdFoMTXH2Pwg3",
  "key27": "2DTeaXBcQDgAeV3xq5X8agxN5cMVSfhPzQGRhzdBuMdamrsCqNmmYLQH3AH7rqCgEUMNvZUGpUifNAW2wtsme6z7",
  "key28": "3a31zz6PgVTYiuWje7VMjFFhv7ZQzWAgnQh7Uqqm8rEvGwnd3hYAJXt8b7442ymAQijJGAisCY5fhNVcUbQMFQMh",
  "key29": "CApLZSsxF7DNZqfsAm52wwHEnDPbiN3b3wPT14gTy8gk5a234qWXeuqnfhhvcwBCecTbHXEfdV2u8Lg3EFqCeGh",
  "key30": "3BN7p7amWntYSQoyG31aJ8V1zEprzpiAXKMEju6y4BVxfjczTscb4UPLs5ZhpPjm1qhWLdrVtLyL1SGRzNEa1kM9",
  "key31": "2gKWHTAc4mFNUngwcwfBuB6kVNtsjDb1Q4nBAteQQfouWBaxvNtc8dVQHgtQaMwQ2XNuvPSFPwWiL8xu2YMno5oD",
  "key32": "5FWejqpbECKtQwkZrfCbMYwZa3EUf2puxTSzm4qCpmDCqo4GhGwmwTbhTdMyvQ4qJCYSdEMQRZu7ridtnyDeqA9Q",
  "key33": "5GzLQEvTVUQ7mdhkfsnTK3ujyTTTiyaNRV1sTPCPGwwVSWPz8TeXCFCZn11camgDEx9Br8zgoViDtTUnLAhPcgx1",
  "key34": "3qLnHypU6WJ8K2U6Tqi6ZZc8o7esFomYstwHtAWCMP5htVfphm4noTLwgeK4Ubo2ucUiLsqDG4G1GWg5przmaKMM",
  "key35": "66LcNbzqRPemgDVRJfkXSAjx16qqk84KV87gvTwNmtj5iMmdnaq1aQ2pDrBCWibStYgKRxKbFSp9CLhrQ8K4vZnG",
  "key36": "Fm2fhBdtEC7F7EUyYiC66SfF4QhWAjqLLNgUjdZihyRpTgzGxfiWHLrtDUjCUvThRYFcpFkfTruHnGK2o26ym4a",
  "key37": "kM7XgZgfFnPYB4ChSibPn1sxcSaQaa7rAVJiBLd4rBJJeVxBWDoc957J5YwUrXTDUQyfRAZKwvinftYiFasyPmD",
  "key38": "2WtS8uWwQwRYsh4Jb72hJbEyT2sHi9YQci7bFxR8tdNNTPE8mWmTzEB2j6Bh2Qobr2SLtzhvHMQGRWTp9Cmbo5XG",
  "key39": "5Ne4WwK4YiSkX1AdEPNv8yoQeRifsFJik2u2ruq7VYFkP8W7wvJ2dESc7NneqNp4rWhwyPvHJjndpq67ULjz8eJo",
  "key40": "55gpRfSXqBsSoeXJ1LAEhuKF88RSpGz6o3wVMkQAQu4bkC9kDTwoMRnx6xk3hJD6pP3MniGs5zKJsK5JC6KGWZzP"
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
