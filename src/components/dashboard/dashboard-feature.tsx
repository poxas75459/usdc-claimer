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
    "2vFmiyv5C9KfooSTJMnx2hFXJwGY3nVEkBDdBn6iQ2BjYbK8VCxambXobR1BzMbZqkGiYVdbfa9zhPJ2uTiWCVKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwXMX74FQeoDnqZ4Yt3zJZRfZ2TvR4yTzeP4d5v2K66rP8V4SCNmXFgEBzb1EqEaQ4DMyzxnARe8TQmQMibJ3Zo",
  "key1": "5V3hssyR4NK7bmfebEeTVbYwvGSueog7AZrZTVeHhzCv8BifSaFxoxdisE3mqAgrC3kUaRM45G4fRQwsWa8aDGgH",
  "key2": "4kD7DbraUZ2dgUj4SLr3QfpVr433Bc6xyVbVZJuK1wn1yVDELAM5dxdzLfVFgzYAXLDn58m3Epb7zew6jCQYkjji",
  "key3": "QdQgEK3Uv7QMLmJnosr1j3xA5kVoXnpkuoVrvQPEwYYpWTRx4g3nEuNLGLPo4Hs3XB4DqTnATnnLNKyMvtyS5LH",
  "key4": "3fcR34yCGmr3kFjbsxPxr44bbkB8Tryvj6VQ85YuLhW5i5UuweVHLnbMktvQ6NFzBchvRX8oKLsMa7y8gsjzFAWE",
  "key5": "2zao4dcj7q2rBHq1ogPim8XvdEhVhriHwnGK79NiecEy9cmKL8BV66HQM211fqwoWSzz4DggEeN7NYJb5nxvMWkW",
  "key6": "2LtrzhoewxeHWVD6W3abmPWVKDXuL7QJntxyyigqQ6F2BLCLPVJkvY9p5kEBWqufKghURVnYd5iR2j8aGQ4k5Xc6",
  "key7": "3rNeNZ9K8zzNkKu8vBieZFR9VNXCqf6MAPuyQyCRnkuxyYzrRdWMsyUduMiTaLsfPfMS5xAjznxzynsFcbj1hPJh",
  "key8": "yHUuassiRS5PSpYW6RsZ6vA1XJwEUfUSuAB171ZE5jWNdtwCqRytpMDSiQEjSDPhn4NfyDECcnTjJoWsHSvPwsa",
  "key9": "Xi6QFiSjqT7Gci6BupfHfMNMbPFhDcort3hMcWXrYem6cmf5oStw7hSYBY9GnxTxmNa5RgpDdbpNw49sgev13cg",
  "key10": "148YVFiVN6rGRtXWfxVG896iayfFosQw9JqARsuEM1Dy54XbQ62aQbNfbk9vQm6QcUU5PR1cR92BnPMe55YufT6",
  "key11": "2zMLdSZ3LiyvAoBXbhNrD3XJXgBZ9f7dq1Y6o9WDTmuinCZbKbnLwMGgyErrMG335am7LFoHMokvofni67DqEFWa",
  "key12": "3YUs9bV3VpiAh4GK6bJg84NZKwEcvLoBJWJTZYyH8PaCqZ4wt72BdfYyJPijV8zmeeMwFhoyBUsZ1PyXbbCMNWE2",
  "key13": "59xJBdFgVs1PNCUVtJvm3qfooJDJYtUvMySJtXNxwnTdT8cgjJ7kPy1C3XhmHjx7kiUcyDNKiBezx54BZcRAvkw3",
  "key14": "261pCbofdCEfmXoFhJhmCK3PzXqBSNrFieoaDxA8Jh9TVgRfrkM9pTQ73RVLb81E588j7Bmf16TWNLULTsL3Z7Aa",
  "key15": "4Ywpn5RCzvR6stcui8pFkcBA7oFCtNECTScJB76AT3hxJLGq6xgRSERrC3qVUG8cNYEJxHgSy5tctqNh2YkuGKsV",
  "key16": "3G3cP13jdyKvtD2pj7LQsUvLdbax9zXBYTp2mptCWfw2C7zc1JDsW4DSGqKMR1mEM6w5iWgHvgHjhqG7GTmzyzid",
  "key17": "5AxRmsvCsbmYe4yRUpc1SxyU9AMVarLJSBX8vToJsmfStF5jaH8wjzunkr83eMhtg3uYbA21JBVAaUQ8jTvhJgKW",
  "key18": "5etv5yrsfmXgsCU5HE1k64WtzuQpnVn5TzkkavUo4u5WYk3zKwxByMRkRsR7fuEvc8jGBTZqSHNCoxqL2RDeA194",
  "key19": "bi8qSQZ5Zc1aMuMS1vQoYwUvysx1bJvGak9BqU5syppwuSQx76DoMaMUVkpdZi7i5uD5d7bm6QNJZ5ozDJuN9fo",
  "key20": "5C9ofd2KUhnqb9jbdwaHWifNZ98J7BriE1qbKCnSiwahae2rKnsHhpTtNZc7tQsDhzDes9MkDSxWeDmcbB6hbhLJ",
  "key21": "3A81pXiCEUyVeUu4Nb5NFMwKHdV8rX3rEJ2KkifFAYJto9M57v1tbDmRQm6HhgKt5MKgj2pfvqjd39fVG8mikkjE",
  "key22": "6nqF1e2JjbcBajTgmuhhcVVrfrS9gmaF2fy3C54PrSLepebUknn2BzshDrWSv7JZ1HCRyeM8vzypx5UuxZrFosy",
  "key23": "488T9TXxD7vQoQBFEKKUXVBSRjqBeqHt3KW1VqRuVa6dkFTYPXiYWfMGkqkjZ6wBuj7jNCUqayq4mPoEztotEwbm",
  "key24": "53sW2E8fgaanZoNWZudh7r73nHca2JfvwPPnxXkcpPRYwKFFAeom7TQ2HiZwQN2N4DAL1x3PHXPEBco4m1nMbcxW",
  "key25": "4oQ5VF3wMzYjrRmTJKRAxdaGS5BaugZyFeHiqTWtvfLN7bVePu2kNMhq9w1NSG4A2dZYee2atYzPCFXT5ygycouk",
  "key26": "65cA6bsTw8LM9DicGYMkHHMreM1RaEKD5wXM6s2bf8RaypLTH1cAv4bbwVbQkuTi4LwdSx4uLAubgxqQqRxyJYh3",
  "key27": "GS6dNRH9VdEzoxNswd1PGh7MDYjrzti3347imaokEmVgwHmjoSgR82iW9qS7frZFxithzCqCZw6F9urAP1Md1BF",
  "key28": "4xkHwE5L7R3P28Y6x8NGSFYSKoPy8UcdXHtNTPzspUmAxQoJk7GkhZVKrtgDfqdo8KLhwLF51YYNrHVm7oouVCUU",
  "key29": "3DxMufvJEc2WbqCuppdMwTouSEh4b3GVSZLBRgyLUZ8fWbGCsz4gPYtVYGstYuE8Vkrzj3N7pgGLJXVyJt3ktbXU",
  "key30": "596e7c2JKhH4aE62GdBHbfWuoggEp2V2QUSBmotWBSsEknarp9nmwUczgn5Bn98Jj8txaHLgRgyP5eqvY6fWgE5X",
  "key31": "qYpUy4xnsmrxjLkxgMVx62tMuXt7NSTjkNnjUmftNTZhrsXrLtenoNswke6f5ndVY5XfSWtN2QHtjavSgrouXgm",
  "key32": "5Hxb4V5bCQnzz8fU6dt7x3iAhMYVFEHALHaCoHX1oc5AKY8Jf15CyVDr6zz7WM3Grj1KCiCZ1omqK1rrSD3LxLCC",
  "key33": "5NP7zZv9Txckcb4ihU4RVMNw92EQc6MK95EbKEtCU9i95ksoANBP8vRbQ4MVaLw29XUjKFF7tDbTtaZmnzkTRx7C",
  "key34": "3KRxWTyD6aikwet9H8YGWrYJYGnmCp5G6kMvNMCGAwqhZxrKvWMHhXZimJE5zT5cXTqfrSqsZqXJeLXWs1jF56Lu",
  "key35": "5S5E8rMgvbCb3A7hLFVyQJDh2Q2MStcFrcqCCpfTrDTTQ8CRtNWCZ3LpAMj72gAwEbxtsBYtp1MUutqes7pfCbd",
  "key36": "QSHbidKbRg6LYQXCUWG5rZyzGfN9qX4gh5aLoA9yJDAfEGdvgnVFWHvovgaW1AqtiktsYi8pCSR66kpUENHa4Bv",
  "key37": "4VPEa6DgFeeaS6nR9XQDnx59R7foGaPF2Rd71UrG97jPxo8rjZQ2GLgCBtPb3cMSH4GXnECgcSaVXyYNjBc4XdnW"
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
