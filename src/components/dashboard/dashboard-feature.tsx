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
    "5sKT2TgbKxKnKf8jpom38RTJfHVDJghNEZVcK1FfWV5sTT8xQXkuXFhzCFfMC4jznAhvvAJm1xDgWzi34SbEBpD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zj4jGSCzBQ9T3PLoGodZt2XRS1pLg1r1pgWx8dnPgVjQFWg1qifSTzu7XP4StR9NQuHgvykrkmhcCeDu6aojFHs",
  "key1": "3bFiajfKK3ADQ492Qbc3BzUTxyxE9bsy34ke5yZvEW8kws12LUqKtNLsAUN2YJgnvXchphThBssP3Dr2XPtd2SPe",
  "key2": "3DN5ahsPTFd3WU9sMurWPXumQ4CDVYsFt4hgqFD2Bb9e4DhS3sEA5GH6tjqK7kfj4y2a71Y2KQyHL5RPxoipEH9S",
  "key3": "ouJDphwyJnSE8G4GdRT17XkUgFrrEF8ZKA5D2g4D5myi3YJdEwBQwQ9xx81yfXmts4pnJVeve2DRdvCDn1Kog6j",
  "key4": "5SQmnbKvE4mjkJTMUdCr7nE44beT8NkpkqcZcHguXUpa4R1EVC2pvoSrMCP74CjwQSvwoMx5icjpzMNAKLPa7P2L",
  "key5": "3ugE6SRuVDx7bx1nRV7io1Lzbap8Ka9sWGMsaB8HyGnfWtAXCUc7Pfgg3K5S4vRQSWZPnzv3YwzkPQ6ZsMDXmXU2",
  "key6": "2ZqUmJEDv1GgVMvPmw357x7hUvMVFbTN5tmeC8AkBUTaFWbYgGs2FbUY54RxunZ8XrFfcfAjPHeiDg8EbJCa7JtA",
  "key7": "4HCUz4cmodx5Uck3GLrDGQ2rS2qpt3wYbLengS8DeU2wXzefeCuo52HeXXxmMCDTYnv1ykb9rMURm4uEGLu84BMH",
  "key8": "4MqZsUKaYKUvmCKRRbxFT4E5mVRzEDGMKPmLficiK86gjAPGTLKABayamDPXVf6gLF4BAStMm3Y9ea8wpX3Y16L7",
  "key9": "RuzDXgyP5MoCRvaWCNhQFsNoZZQqKxUgbzLvztPUeGJBoDMnSm4qPrqfKs3Wcv3G9gvXS88E4UYFc6iUVoJRivq",
  "key10": "3N9NJTsYisTEtujMFtX2edqvE7vRE554cKaNj3JyJMvXt77NALc3CZzWDj4vPtCujoJE9DvxbBc8dT5SbrtcYDMH",
  "key11": "2uT5ohRcHdPNYR324UHT1cimZ52G1QcfbRMhWV3X1iYxjJkvMafNuFcyvJtGDx3xcfYrXqLaJhyUQby597Qksmnj",
  "key12": "47dVyzjvHAgWVDQvCMP7sn47wfLxWB1BiFwReXxSPC5AyxUEQ25bggJd6F97buEZ2rNs6JCiBghgSqKs7F2SPZoC",
  "key13": "3RrDmS14kAedxeJGWt3onz36xansayy2uJN5rVpQpCJuwyArRHST3Gso68eQPGBGWuGRhBc9AoU9zwzUoqoh8YCU",
  "key14": "5qsHja4jN77RDLRHh4xrFwSLQuPPZRXPESH7TRDZro7ArdtjQR5DG7ukVqcxGaZu6SHZJAg8Ktmc83stU8ybFDC1",
  "key15": "5E24aN7GYDc628N1xG6uP7KCeiNU84D4W6V2zxnYcpCKayz5SanGzVbZqs15pbqAozqTk57srcLk18qiginyWfRj",
  "key16": "2cGzH3mZ6J6WBLuXEq1qx4YY3Lm6KhFUr3gCMChdj72KEBt1xCqFCYDv8u1RNr9w1w2kkgihpqEPXNiQRfH3oQC1",
  "key17": "5mZit7m2xw2ufmgGV8rsBCsi3SNRbRgtEnU2oLajLWxKNbfcN7myHYRb3hetr3CCNgJxL5XjZ2Sx497a9uCH5uYv",
  "key18": "Tamjvu4ToTanDGPpfwXq8rKGwN5eQTc9C5tk6RsS5GuDGUrCpgu4ccLyLS2QnrRtjbYobHQTLN9TQLWunWTfdgL",
  "key19": "2fZLX5rxAJRwTvspHMfqCgsMSkWDyMU21v8cSKjn14NdEHnkxCbVA8M2qdBvoChvoGbDG177huHX1m2MSgnU1SQK",
  "key20": "31Rw3mxb4eyZpmzLkpyF8veUHeDxo4PU1GAWrNxifoVaqspFYEcTqQ1ZWaTbkr4mA9GCcZFinB2hgaCs4hYMAQuP",
  "key21": "5KforjwcoVC2L2ha1rEaY9sstp9xPozVjk1gmqBH9WdiVT4XcxQwWU49H8CzxCPW78exQq6fm24SSAM2xmf83FvW",
  "key22": "2b8hYpEvZ3BfbfFhrRAbaiS9XTHRxDgzGX5md225BYxj8sjq6f8kTKYrYDd1jGi9muDkeHAjqkXRFkHif8SpFHq1",
  "key23": "2ySLCBQ6JbKWo5K1dvjTw2mxBKZ2EmVyH7LqqMFJ7xnyH1TVwn8tBccXjRhJtmHsjPceCbmgHD9fJxkykAi7UtD2",
  "key24": "4bLj3h63SG81D7XnRSACLdmEVaQbge274jG6CAgVVFsRjC6JrWQm6ahqrJAuzWvXBXLpcJ7aUUwm6gxS5m2M2TCL",
  "key25": "26atiZu7WLS7qT8Pv96fcjAdMoEyh6voxPuBq1AjHEbLbmvrPWdfWoWoTpcWBwhXQvX5XayPVJkiD4J5YsLzanjQ",
  "key26": "4VD6zTzQ7QtFc4RCWUiJYa8LMgbgyh99btBeLF1UkT2CmgXwcCdZi7n2gcYrVtYwED1e8sWPT54ekYSQtcVPcJ9r",
  "key27": "29sU7Z3pXbERW2QYzDNwTMo3ZaKFHrsvK1ihuS3du6wH1ZsGnygS5ofHiJcKgbTBDk3hRYXmVizTP6qXMcYsq6j1",
  "key28": "Nccq2Cr66unVUAJxAVBuN8FbBcrc66tvaKR4uwt1LsKcPmv6GHhh93LFc363s6SbbKv2mwx5mEgjQWj9dWpqCf5",
  "key29": "35dFt8PNEwz6HUXnBF3QQreUEf3oyXd25LQQxWQ2LUTjdgK6K3NP2i94fCJHrSft4ausrsNQTadBDWht2pSgZqVD",
  "key30": "2tPFQbdkM5MRmYTSDfmnwVmtokDvNcBe6wxUjCuGw6PfRTPkpBtj7ADiFdCGxS5124Bev8ytJht6ULFZAq15EFfC",
  "key31": "4prrDjDX51TsuzSQReeLHQwr5MXnZvCTqnjYZLogAtU4uezGFmN9ZGAaqhmXDcCgyPEPFwnW7BUYAKSuZMyerEce",
  "key32": "3jD3GbpReHv8Z9kn95BW9RQrVXhTry4cRM8sYC42jVuuGHBA4njDTFHF7TebL1nCNT4uDaMBNn2rhjr3B9KaH8Nd",
  "key33": "3rLhwWYgRqsMyzhA3esmnYg5VcxJPVTyZmqeJwE38zM9FakifqwkMgv6Hj4yf2KuGsudac3ndRPxAAU2qXsgtNVr",
  "key34": "wgSsh7KWAdVhWsiUBWMHvr7ARZAs1NYezbrKjn3DcTR9XDQui41QnrXB9AcZUNeMWvY2zC7aHZs4TjC5m9pff98",
  "key35": "2MGw3ALvQjEhSnHwKhH6rvSsHA4r5QKpLG1bPfs7wp2kPywh7Wd8gjoe4z8kzvxBz8GP1Yhx98cdKhhyes8BDtmk",
  "key36": "42ALfGqrdynMy9QqnnP3TMaapHAU2NNnBRxXCYbPZo8d56DQ3seENRua3pfKd7oDzt8iXrCXXtDPaSHDrnM3SDh",
  "key37": "5KTVH4uYr99hjHFqL8zwXjvh2KfFknQQzDhxsiCswwQUmvDydDhHv1R6rxGrvuH1RLSadkuqEBvVFviKtYdrHEn9",
  "key38": "4Pccm9LHjrC1HVriqftupH2f925hndNQJqcgAKx3y8CfJiop44Z2K9zYdzeAw7p52AF4aRP56gNjQR6JF9X49CkG",
  "key39": "2Qpezc2ZHriqRApqFKGK9LgG7uNsg6uWoqfpyboywmrXaKqLNgEM1dtbzXqtNgxmHUgfTqwrXdYWet6s6MjRWScv",
  "key40": "224KQdGdTAe3n3zcW8eg7Nry5XuPWRLeuYY89Wk2b7RkRfUm93MFr8yiNuaJhGNKLessQR9byrbWvAbasZCegHiZ",
  "key41": "2NnUgHKt4w2C2RVHtLaMZnAVtbNhkh3wz2ABPXGwzEkMkehyR2GCydua2nf9ZxSpuMrYuGXepZeX2aYiR5odXeha",
  "key42": "oTfVEZjKMzaGnaJ8R8L8tAVifQyrNE8xHvQg1QNMqbd6d8546pDawshgtu2ctVC55pNDotyTYKhiXFtEuNqHcem",
  "key43": "3a2n8zhL6pYnYeaYjw1vcMA426bCHwrVmu2nRFKRf9wozCfzfmpxTZJxRo7i6TmiBkNpkrWU8FR7Aju5319FDmRa",
  "key44": "3UFRsVph9xDeinBFv6LcfoiiWkrmpKbSrjx84EXHXEwQ5PsMPQEsjGW57uT8CKetuugFZ4mmfuCMhZRq9unL1Loy"
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
