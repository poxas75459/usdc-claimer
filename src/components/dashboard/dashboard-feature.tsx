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
    "3kgCQFe3D5AKCfte7yLcLMFY8oJRAG2upoNjdYP5JJkaPkUiwtdSULvXUNfq24QFpRKg8y8WNFgoyhqkfM9pJrYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vAoqsX9aFMSizM4QRsviCkMAZAqxawPbqTbdrR5LZQpGzncqPyEUey9fuFjBFcsgugiRXckPFPLGoFu4d1qyDa2",
  "key1": "5zHFqb7caFM2oQDvtXtykuD8UUgZKaLWHSFYCkt2ncZSuqTCNQ3xboVapcwmvLvgHE9wkmNthdV73YoB5WgNYH44",
  "key2": "4aLHYoLo4mAxN42tJBpvKyZA7LyH3E6gqFjQ11ZcU93G63aNcUUHbM4SVSXNSSJpGZinjTyT8ydNHfifoWRTmkHE",
  "key3": "5Tiom1NWMW8eRdmPntnUyAH8X8b8UWLBeu9anL5zYYNtn58o2yB3TAuCisQWDJ9pbzGRseX4wrMdkpQWmW9tf3c9",
  "key4": "2GUb33Lti5BC3vJitFnQyZEnznaeg3b943w3Gn9ZQRoSPWtEgzEmAdnTmc5C5zKXCeguhXw4dVRoc2oxNW4sJ54s",
  "key5": "3NgFhjatAV6SP7TbmuAMUceqQkeLdH87Du6zSts8bhGWcTc2AGyjS5z147YP52dtWYJHdXeFX5LRamKYag1AEMza",
  "key6": "2Wiu6R2sxbSBEHqQQvfsmXBgcehj18aooFxi6PWw8XMqKMaXK7GUg6kTC4mThZiWEEdZoi56JnHL817yfvhcgPsz",
  "key7": "5c54D6y99FLoUPBn16weQRouVy3B1HDRhAu6Mr1ba5Fyi7Kq8aipQhdhUFEwk7ehmLprghwWKLQWhnezexnbR5SZ",
  "key8": "2gJTNtJNAUCQNgnLriMvFX2LqTRTjzj1XCDFu4xtxbp7CPHKYCQyxzuH32vrewZHJefg2JptCD4r3EHAg4xVu6G",
  "key9": "4TUy9FNqruqAb5s3EdzAgbzfVi8uyWV1iRnqG9GRiDMPjinKz6HeK9s9qmabFtuurq9KhACvb9b3uf34QrBKLAz7",
  "key10": "AYP7e2qaPT22KCRwYYd36eQN89AEGL1kNubdPPHEdj2hw384wghTLto7BnrFtKigfYyGAA6J1BeX4FPAPT6MUbi",
  "key11": "3rcDR1gAKeJanrRR1odUDJYXc9kN2RpnrbynyweZYg7mz1YasRqzTixPK9c3JR8mFyDxwdBJoxSii5kLzm4CYVEF",
  "key12": "4Djeyax1Z3VaFJhDeexm9Yd3h8wM5ygZKoMPxtCC6n8oHNuj1wAGswL3uFV7x1jAtSpcCfqVYhdHXziGoz1hoLQh",
  "key13": "JY7gHwLgck3Goz3P2aenrApxMspSS6e7a7xUiVjTxfZJcMCLckPssXRkLTG1oDss8qe2fkNU6qS8jRH5gGvTaJU",
  "key14": "4U5nzobtW3YjZFB6oYAG3jZe9pGFwioBWDYPGFkE9E8KLaz7g5hq2FArZur9nc5PePtYmAvGQh7qtjRM1TWnudME",
  "key15": "5LUXMtCgPtj838y7tDanQcS22b2aA1XSeQi1mrhvEuYVdSwxfQE6U5iPPcHHzTwiYjB2vPG4aM3ynaQAvJ3ioFad",
  "key16": "WdtPYLYP5rfyPwGUrJ4gpDehsjjYpdpAxBV7Y1BauYorfgwmNzBLG4WmN4ZB61QCwEqJQeGwL1V92MrLaVHe55M",
  "key17": "9iwDPRZCfnHS3JCDppbr9Ruqi8ksq2yJTfH2vUAL9XVwwN5jpe2fkY5MmBTA6BQswDfVPMGHZdwFfcWkUQydz3a",
  "key18": "3RuxdfmDyZFCfDUm4QYytx8nT2BcDyZtjhF6p1VARqYKvW3XxoxENNoN5q6Rga66NSvSLvAnS43fjXswKKGPYPdX",
  "key19": "3XuWiT12rMAS4RKpKNED5v8YkmHyaUUpi5yGKcVh9oTfuadguznspYwZiVTU5zBhSgNDtGhhniaaMqLXZqk5DcBL",
  "key20": "4pRtVe5TkjK6cQc2Ai6KLungYmi6qLjB14zKEbnHuC7xXZgPAA2q83JobuGddR2EbbuKBsQJYKFfaTMSeHZ1LbAE",
  "key21": "5dcXBgHiDuGqYL32UitRyiAMi2R1i1FBG4zRitxVYjVt3tFmkKLrAhoNi2pzyUfA5a5aGgz5of7S8fRakqsMXav3",
  "key22": "5nj5gCKDLocfjaudtrYxvGZa5yqSxD4MVWWADHMzSFeXWDC68qeKWwhoHPN4wHjMmm9mTcJXzfEf3RF2d1sjVQFP",
  "key23": "4b2n4p8Ziw6SPgQcPADRap51jDNJPSyXXToW9McVBzUwrWqQcVFanpWXivk5DvsbpzDqVJNggEp6JE3iZXW7iqrL",
  "key24": "5XUDpPj6w6a1UhimMkWZoGRup1bYLbMGLjm5eSZLrQ1P6eQrjzzAKJYsj3bAiHWkMtMciJcRWndmmkPb88cQiS9V",
  "key25": "3Dq7yFpZtzetARqTN7SxLR2ZdshXmdCxr9ANJRcuJYWsjjYWW4rmRdzKtr3LsCowJ7GWxQQxLBnuCPcLDjVWdHWL",
  "key26": "2TLCbjtau8ccHy2mX1zUNDBRG6RUJXVxL2LYBuyGGeaQSYptjpxee8EEk55hkzDSAvn8tjBmfxVrgEEmf6mps1uE",
  "key27": "9QgdG8dVZWmR7i3oGgbRwprD8942SfDvUD4WiqPpqFzPV2rmvjTDAehhtdaHNFodrzFHAtK8ti3Ey3jf2dT4Vqc",
  "key28": "2eMLa6Z9XBDCxB9WNGjRxrdpwDed8oiUysH1LRiLx7zY9HhYKQUKhC6LaZSFLTc9mwt12YrMmoqgeBmfz7s3GmXa",
  "key29": "48g41HgVSseAVBhh2eEcPrVE1nPdbfcTXG4Jsx6NaJSdn2fhUaoXaTyZKAonRSgqcNnErmgtpz3CnZCj3xTeh68g",
  "key30": "PW9tg6PW9JmihNZjEn8LpLtpXdHBza937C6wTNk3tHypvvBwn45REtCMgZznEftVbgJgQha6GhTdBKpyPcDU9yg",
  "key31": "34qDBZ5xLHjbdvnpWsPw34fuNuUxuUQhfEdh7nzscp66fhuET7u2gFCpvgNAQMLxhn1car4jDQtGHqQ7YxWdwy1F",
  "key32": "55EDVwNLjrMpMndUgQHVVhzc2tf6eGiH92gz47Kb49r7X86MfYjYnsv1MtKpFev957ZShKquGhn2oo8sRHUABJY4",
  "key33": "daEPaKGnnvB3XUsoKqUytNL7HkWNNNuC32reHmS43UNxvhi76Rv9nVHH4K1zeyvLvuw7bYtcM3Bxsc3fqHHqPVz",
  "key34": "44t4mDYXLKByZF75o2eb1tMn5eGz7mLkwopNXHE2pacGB1KAndBPjD3d8Ljuycashkc8tWvHBfvzoVfHYBuUVtgM"
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
