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
    "2L14Px8Fvm6XJLfockshVVCvi2jNMrcW6ZqNTmNwVxBdUaXwAjsUMnD6iyTjD8jgKLo3E3uFfnVUP57vM4CQYQ9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "deC5xQastpNZMZPAQtgDGgsC68hCx3LPvYGBGjs1JzS5erfsck3TFYeja8mK2bKAuGPsPFnQpsk7Rzh5VYZpK2E",
  "key1": "2d3CAYgteopWXFb3Dnmc5ZCeJu5VKVC4m8iFxYYMiAsyHKTwWM64TrMDpwiykNeqm18ABwzs1kEG2M2HYY7gVfjN",
  "key2": "4QHBdsyL5E3tdPpby1F6LukuCc6m6DCUA1kg8SkmUTjVX13AGqMrTq7DesFKsT37bhYRgywyYhMEoiE5GEuUU3ad",
  "key3": "Qio9gRByFqiZdgPP8PntYaKpdrsWhCeV9haMK2efhf9XpPoQtHm4RAiTbFBB8wnkDuideX1iTv8VvCGabWrD1fR",
  "key4": "61PHj51Us6kybAasrU2L5YKravWBfWHN5Hzi2PzYmXmTvJZtQsDBRq9nFFsEjPLG5GNryaJoYRkVAM8rsFgLvj7b",
  "key5": "41PXoNb4tWQju4UprqgCqm5cHdG1ZFLYqUbXZayu7VnDDzQLKMhu1fUxKDnt95QRdxoY2ncfnF9MjM7BTmCxcdpK",
  "key6": "2aZMrHvw3yoBST8eXGGxwrF3VAbJU7pzaQfhA9Sfby62MECpi7Q3ix8Ai5DrSmbiAx8nTeg9J4fZRMXBbc6dn2tL",
  "key7": "5rhKpB5rKcNSJJH2ZjrLBoy7A7CKi1mdVbRkhieN8foNMdLKrAn54b2tXhTvtsfs9xtkoHP5vTajdXdCv13mDnBK",
  "key8": "2dneuCixiGRubvQHi6YQbE8ajm8Txzzvn8eapUuS8YnJ86V7v9yCPkyRX7QH2GbEhcye4sido2PQE4t2WaxFrkqW",
  "key9": "3XiSPc46GnvPrKxL3bhwBUb9EztMzxL9Vm8wGFEeJJQgJwHMTzwrLFN7TgL7Ytm4xJ8c1TBcWz9Ls7Az29FMfLVM",
  "key10": "24Mfeae6agyRXQGdjb4MDC4eoV4mQCbLKmdXJS7ckGHWg4dNri2WcD8Mq9xND9a25WVNadmfSsFjNqfy7Pv5rb6R",
  "key11": "43s2KmQNouQoWsvfhrwXNmaJ6LxhFZJC5cr4GJxstBZTnos2K7qHeXUAbXUuC8gepWjYXMh4Wnw3yyjSEFhb64rd",
  "key12": "5eMs3VfH7UKCNWLDhiPYpPLoLfL4J7BgFyQrPTnYAqGQKCr2RJgmFiKCu3XSTZFMsf9ToBvQF32BZTdLyGQEctPK",
  "key13": "2JxjymZ2FoN7q6PVKFuLPgjyNmxrkrFDQDjPfSrM2QUEVENNgm6eQYgiraDh1PDuWx9tYYNgFd61af8E6exosoip",
  "key14": "3HoYq5QhzrBprS2iq8dwpdgM7G3fE6CiqrsSD2RwLs5XUC2jy2pZJhaRNRTvxSnzf3se1dMeXdY6WxyTBH32umaH",
  "key15": "57XFa1gQxUaNAsFgLDbUs5r4NHnwuWS3SnnMFL3CouUjiRTKbjYWuzBphji6JDU5UP1ZCsYQ3z6sjfKSQSTSwcX1",
  "key16": "4M1sULq668p3DCEmF95gS7s12dxMoFxy9cD5sRnctL8cxeY6eamji1eWoNLRtyUZxV6ivT4YaabAgbKMF3rSzC7L",
  "key17": "W3NpahhgUwtxcRX15QZnXL9XozSs3R7kiFkiZMs2UHQSK6faoDhjoKQKCYgwzeBoGUDCpCSL8bry3jCijtZnA2J",
  "key18": "3B7tKfPXuNN8q1WUxnakRhfchsF4GfYPQ9Yw4KDnyNTKtAXZK7FAw1STDbDjaYT4hw2th3RBTHgCp1kNecff9LLG",
  "key19": "U8TyiB61TPZ4mtL6AnmPWzHqskEpEx7ggTHuKdi8hTFTGqvHYU9jM8MZG733Z5jU7gqPbx7T2PXrecKb54ys1cq",
  "key20": "tvh5wVRE138ekU6T9eLh3QrRPFs7D88SrMiEseFhhWLeM36L3V9uY8AebFhp7hzw7gcMRHRNWrznRN2yLfiEj5t",
  "key21": "2jUJkbUipyh2zJrp7ayGQr32tV6miFfLnQHuz1RfJkb9g1a76XXwZ23GpXP91AY1qeiQdvHnwocTCXTVAQBn7JbR",
  "key22": "2KfStr4WnAmBkns3GbkzAs9RnJt1H3X4Zc1HETwKHeke1Ud9Xaqv6hocNKWCjtkxLAJtanoAxFyHF7u4jnitPUN4",
  "key23": "2xf9Zp8yL7HjFGgo1fAUfmR4SxKtNivAoHQFWsJPN28E8CRAFjovYvfxM7F9tYyuEGDcBX8r6qoXgt3NHgktdwp6",
  "key24": "5ChvMXfwp32dx6fynoWGTX3iJP4fS6CjEwoCBDrWzC1mcLciKPu6fXZoXHPwcuhhWzPD1tsiLqUrZkTKqAPiB1Lf",
  "key25": "5P6DGUdyxTCnfcb1sX6ZECLaFSKcKhpsZbRipZ84jMrU9MixhqFBEfYMVABfmxRXJmqEuwpCDHpo6Pg313vTm7Nm",
  "key26": "3vDi3JVkht45E8XgAD7xdHzB7WMRkUo9DGAtgfou2GEnpUrqQGSPDwfBktW3bVtUbpdtG3jWUyKsbPGscNHBCmLt",
  "key27": "4JHvASVsjLcytutmDWxoniwXK2xhKCjZEprBUg5amgvyoc1wEHaBgEvHqVKJv9EBykcu4Ukm1Q3CVTPHz6LsWmA6",
  "key28": "2V9JTPnr8WLghwuc2NcXyTufLeUqv3bULgXocjeG6LSZxg4ZtuLQfYpR6i4BG3bYt4SV5Fo4BHhijydufRjHcz5R",
  "key29": "5CkyD9hcZWvocGX6LEj3MXpui5mwx6zBJw3pq9HAShabuvECXzgLSozu7e2imTy6dUHaa1nm5jkvi6xtuANHacxF",
  "key30": "4NcKRtpU99VA5PyoGSVY1MYoxXn9PXUQmZ4WLde5qys8SrggTxDBktrmp9rZbS6UeB1sWT9ztfjcswSdxY5bCekv",
  "key31": "6vvbbr5rVmDuyoXS8twv3tntdp3rHS2TnXW8eVa5VFYuqvcPW573oCsReEYSMLbWgaUKLnCRBVrPCn9JhJUeH8A",
  "key32": "2XSsqsybodvYvfS7REfBq2c8DgGBBLdqcsR8zkLvnvJyJg29q1ofRvXhQ4SJtc8zS5w4ZbFA7ChUnJromy8YHD8J",
  "key33": "27Ex73PVtwCn4ZSSwAQASvJANoRELfQFK4yvphHa9FfktVEuHBUfME5csMwgbFArNc1ggTD5wXhKJYSGxR4pqeFm"
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
