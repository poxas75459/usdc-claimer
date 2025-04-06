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
    "biGRcYCTgi7kDjrKaMtJo2ztepkjKgj7Fpe2xRraPFeNjXMBB8U9od8Hct6jJXcWWwHaJjfPN1kWGJYy36KtPwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CQCoD5zyuzzfFZftnbsy2s57gguw8GzGEQ6zUXUCwNi8EoCCfQJXZbEQLELys75y4LLUV1C17dZnXdma92nMMx",
  "key1": "3v9ZmpE5qfrdtQT3rkb2edMh2y4BTws159xJamWXAcN5ksrKZfR6ivWZDatRHEm5Z8bGawPbDJze1noVwmiMHv9W",
  "key2": "33Ka7TqRANwS8GMaDC8odFzZy4F7XMKkpWipCoBQ1eoBzB9UCYjyqwEffxRgcLG8JH3sV45BobwYT8c9pNx9BD56",
  "key3": "2XZ3x7desHwpTop1KNnEZWguJNbHwXPM2kfZCVa3yF1jhqxDUbmYDk8zCnS9aQ9tuCrhFe6VndGyFoABGXPQ5Ud9",
  "key4": "k4jXfrAngcF2mB5CngtFkyVuMcU2tWQtBsitrrZbiZrRJsv4WLK8nsgGZdfkRAGjyuAzWFxUijGgzaJUFaZZgrp",
  "key5": "5MgwLAht1835rnnMUgZFKZKKtM3AmNq88pUkt8Kbr8xLvAJMWAwqGp7EEGihBDzPkjHsxtZ2zRoEdkMTWg1ehG1N",
  "key6": "46oTZ76oEav57Nup72g69X5LdqMYuaqGtadpBphjnned9g361XaEBmnde1yr7THFmM46jHAegJPrnvfRSCRnnGvF",
  "key7": "5h5XkZqg4Fz7nc6jSNvfTUcCQLV6FhAuVuYrU6DtfaqackokYBC5ZVVjKVvFqKdJFMXBe5secwuCGMg9rX8AoBPG",
  "key8": "5ycH89SPjtV8oF3VyE2mzkDEwwzn69jg4svs1KnPKMcxYp1hvKhX6UK9o24PgN6opcBSrAYFQcrC5Zp1kVh127rx",
  "key9": "4cbA4eiC73EG4NnbKHCi7Mw4QTWtkjnZwbcAhcvW3NWACzn8Kz5J3gR34njknQnJAm4SuRgGx2upxC5yjvWYBxux",
  "key10": "5JcpAS38HFdgxhXGokK26BHgc236ppzK4RqjWoF4pc15TDS77P6KdqBnCM5WwKMrYL9Kv3DkfgvR1LadTLS2Scno",
  "key11": "5Aa4pxkKLHtqZHn6WYwwTzm1PnDpnhAiWa5qHWKTfWoxftSGtEweK7myYSKWCQ5wXEUm5XEHdbH1YY5p16JT43U5",
  "key12": "VftdHuXyX8iK6qaZvY9vJwzwiWzkgfBKEpcCbomaixxUy2J6UX5i3P8AkebYv4tFSnnHGP3JUJ11qpB4U8Nwdmx",
  "key13": "LGDSiD5Ty35LLD4d6a6zKWWhgYtTnn42gFzkjcDFvaK2GDXDZARmQAjpcVav1Lmx3DFzpEg2j512o1et6LFFoTw",
  "key14": "2vizvyR7opg2jBGYkS21RoWWD4xkBfjA4eu97SCwQJvWpHFL1JmcffpTaVEqoYCTEar9u7MuX3D9fUsJo3bxqTzT",
  "key15": "3yk91Vk1z1VrfKLng5qupAoE6vRL7prSxKJxsJPMCaxLQCe56h8q2pskS3L2n5ZY5eFySrxKyP4APXxRJtAzn7rd",
  "key16": "4oeP77ToJfqm9doAtP8HSwjQQ5xybNv6zNM2eANF7c4gdQXBotg93gdhWE4dWGfbLUSv5hoYDDV1DsHDFYE2qNVt",
  "key17": "3nayxn9XmNdz5xiFsHNMaawNF6qZL7Ft6c3764gxQ48HTP9fMTGMjcKZewtvgp3XtECWM4t98QusFa59TdUX3xca",
  "key18": "5Li5JtCFC96wM5JoXiMFTTzhFyE6sAbR2aXu9i26oXnc2k9Mtf3Vy3ajMQoUDxrGtwYyNrVwgsfskmcTrYTpTiWm",
  "key19": "MhsgSjHsTAA5xt5SWqipyPTe23X3EATZ37WMD5GnTccmBoyPs8LE1q7YwoqCs3EnEhwqmLKvnWStYiLU9oPEnA6",
  "key20": "2J7QNhvUcZWtzKcuNdDoNrcRpAPs8aTen3dpjCMRNW4DkFaw2t8YcSFcf3FGABG2UDHjKSU5Dp5xAaDTxSi1hgun",
  "key21": "UxaRTrbh94VCqw7GFe9FBPZXQYyFAMGxq3xiVCsBdVPBR6tdLxxaJwe5sQZchLE26ob3Gfc8fswurRvbLBc4wf4",
  "key22": "jn1grEQX3GQXwpr5FZnEmhQHu4631ngPGdXi7HXR8Dbo1fFnjjnYq667SFQ7BAKAyFN6TcUbAizgqM9P9rMq2Rn",
  "key23": "5gxWQVsNeL497TT73Yb75pCuPXQhDFTvpjUyduCAytgFiUAyy6Xywh3DE2egYFmZaQqAueoNgV91MsyxkFvGXk4D",
  "key24": "5HjBv2v3Pn4kqCW9cyxfMXjAqviLZBMdciZu2SRsU9kFWyrXCvZLbxcZuHaUozrrac3vRSx2uSddgVjHpof5wGHs",
  "key25": "jCK97hBPiR3gbkDqMumA2u6TENETY1MkSwLaRoH9fvGoikM31ruwFK7nDfFwVCtytLgeKyextEWtwtMVNGdc4et",
  "key26": "5oJsAM3ta4ECxHGH3WcQxzy4nm41MzWHmJDL4Voz62ZLvKwFGZNyMd3s1E4yKoGmyz7oPZfvBtbqVRobHiXbtjsY",
  "key27": "okuVMpP5mVv9RM6omgm6Scjp7s5UFNNt2VYiwMKiEQxT7Nf9R5HuhMQrMz7AKtuJXsL3MvdRdRd5pZw7wDSNthH",
  "key28": "2hp8t5t643noUCRMEdmtTuDUzz875wXRadugSFjfugNyQ9A74p4Yk5mWKSD3qpHZh87XZj1fg4qLnxRPwirRLotZ",
  "key29": "3DEdJtWeoEG8xKZ4oJaL9prqXavHWuwgVAi79gV8wBbkRY7oBsZ6144b8bAMVhDJEwoQrvH6msmi5uWFeREKJuZD",
  "key30": "2ANYr9TQ5LXEG1nrdt8dKXGFj7eBemwLLvEK7YVg5Li1NYGjEs6ey68SojMcAZLeMbLugXzXbxVx9XYVzx8hcVqk",
  "key31": "26nzryCvnUumM1GWw2AH3WC1kPgJr2UiSgfsbZStPLYv8rhf1Zt7mYiLaaGABeM63E4rNrz77MZXHBdKpdwHL1wd"
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
