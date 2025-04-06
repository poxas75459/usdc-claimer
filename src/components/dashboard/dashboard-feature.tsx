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
    "2YdatYFGQyuYNAcfeYTzqQwc974HyL3WsWoKCo4JCoxd3qCBNMiS62LXioyqXsPE6rZgM4bfgxvAfBR6khA196XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxsK7etwwUXF5yWpanxidgmhe1MmGhGS2F23vAabcxZwgk7XNf6vGLdyznXQ8GeJ4bSgBs6N18jgRn9xxEQt3CK",
  "key1": "2cDFw7rk7Z7ymBoHFX8uEvUV3TJs85WCnP3v5DaeQYXT9aSMUrAUtjoFjiZFNByLBAzypaQrdqJLzTD8hkfjSMBn",
  "key2": "5dTwGRGmi8W9ksBajVcg667VXfE2bXKSqLvfLPuQ9xDq3SGweJzqXyLUmf4saHqKhmrzNZomYHDQbkUmAhrxLa3d",
  "key3": "5q1pg2tBHCftyw4dy57oU9sXho1ps42NDG8ks1YBQn3kZyanh68LxCQ2i5WriavNfsRCxMaQvDryjASE6CiFBJ3B",
  "key4": "44adFFcnbZdReQy9D2kHivpvNjWibPDRpUApPF8wsSPsJKE4ZtPn7TcpqZrjncP4nV3fxueEienLLwdZJQu5Wx21",
  "key5": "4suokvvBEBhYikeGKXkxmtvX1VpDABE2sZKznnZnzbRbxRDxxn5pR5vyJCZEN8oMbFW2ALayjMAoLxzKe9fYK3tG",
  "key6": "5uqwysUMvgVHyKrkZyxFrJiW1HFojKZxaADPMsWDk83hP2LUbPwKu9ig58rCTQ8ALAfg7RpnSKyq6h9mwwtgvSRW",
  "key7": "kh61QjeXgawxotaQnQNrkFpskiKopGBwWmXk8smB7j398tqEnSHk362ntSnqwLZ6d1HbyGFBWEoLz2F6JXCRQ7k",
  "key8": "2WtCzqfBH8HTdGVMXiZg3uiZyWQwonHsjE1MaU6bvvvo8CQSTwhPWZEm2FEGMxkeaDU4pgc9dBxMLed6BZxw2VfH",
  "key9": "2yBkC94MEL4sBhiMDszTBgVUTwqDdAonT3V5KmHNiKRnpKXK9vC8oBaU9cZv9y5QS8fRxgcv6LphgFu6DbHTt8zV",
  "key10": "3fHYrb5GTqQbnLxdTjSLkjbg1KdRGyMyAiRBa3AqfMx83N9mYiRRe392cLjq2tSyz1iEzuXsjTPWxgz5dgYCN7Fz",
  "key11": "3uMzYAM84Ex6kbAPdeomJZtjP2i62Gt6F8ZUJXdgVHYBEyJGK99cbf25nTm2v6jUG4EEBTrc9AA54GgLY93tYVP2",
  "key12": "4T97ys5x2A2D3FCnjT8wi2bzjSM3zDd7FNnefDN6vswBiuLtj544ArqpWc5RfQYq7qohVALNeA5sz8Unjt11h7RL",
  "key13": "HgDzjUkPPoThAcHqGuVABNzHjMpBhfTC7R9bUnAmmfno6H8jJdLNs4nci2RFkAthT3Vw2PP51EstxhZeG6a9Phh",
  "key14": "2ELoEwd6DZ2Py1rfYo2uMFXz6ZPSSGsuh5A5UQXXsgPuGVLZu2GrEXQhJeG2YzZTWvYFVvG1oec7W4L18s1rhLXc",
  "key15": "2nZ3ybTo7vLoVSGL5Be7AzSyw39278Xju6Zfks53sUKSQREowWqHva4JjqhoJdhM59Q2gE9UKWUzpLSCUNNekXXx",
  "key16": "5jXHmipdyas71SLCiYvVZ4gtz76arCabBXtdhBTzxEoFFT6yCF7Bs29zWGtfqppjM9NPup4g2thVzHVzN6BNyEX5",
  "key17": "24Aki7g2ZDJcPZQesYALVxWTqFihkyQUpvyXvMWqH4F1MdNCSb12uZemuWTx1iL2y9rZyq2mkg21pHhLGtbYRGSx",
  "key18": "4zAWfsWLM7hWCTtUJsqimunfeKiDcNML6DDfbJZXqqaV5SsmJpFGHRK71TP1KRJpWGw2MLLDwk8WZwo1c8Bcu1eS",
  "key19": "5Fp5jYJy6d4RR8nxBCFTtYtb26fWFphZHE1SXyZ2NBVpdLPz1YFLku4mFHhobge3sCXCgAHwsSnKNVRgfVPuyQCy",
  "key20": "2Zr7JR1rQ2dQFGfs7h9F4DFQpR38DjG4tcfHTCcsLugxNKQr9NGy9HXfVBGT7tL5FbeHiw8cz54UPNVR4Z1YDPx",
  "key21": "54BqueNW5L38beUJLeKcy6TC2JYnckWXxbanDFn3ic6Y5JZ1osMvagpE4ba2M5SLChwmaU6avmqL2SVC6fsnoeYS",
  "key22": "n6Sy8PSZDvTwMmkhiAJeahXWVBdNLLqrKTeRKtLeGLZcrAN4gbrtkNtua8nK16CrNneyT14aYrksk7YnKa1XS12",
  "key23": "4KaVPye4z8Qw7hWLcCv6XYhUJrpmLz8ZuTEjdK7chC9XNyeLQnoM48dvjtPnYLbujz16AZJcXPWq1zDxBb4XNZg2",
  "key24": "3nnpxLpDnKZWdSQ1Mzz4S3uPHr4mySVo8fFxQ1zFsFqHG5tDgVhpAmqQZSCnj65qjMXYciNxZRD1GrKPHGs6nUvm",
  "key25": "2cEauPrHQFGS9jNxTbuGF466QEuUE2hWo73XThKNoRrw1D26o2hPXiLYSwWEbMDT1f8zobqw48szcGudMmDBE6ds",
  "key26": "3s2jS9a8k6dSJUirhDiVLLLJ9r2R7kQtwP9CHqzpVt1CaSMsCWi4wS8rB452zK1YseB2UiJKZqaKUV9WyigjQAX",
  "key27": "6DqMuH8Bto19iqt4k4V57q5hkwJpDavWKCnoUWQoUnFVHFpmfHvTrucZyKAK8imn8y4sFb9NyDKqDZDPBBhHPuc",
  "key28": "6UTZFtoVbm4W57G3YHXTAYiy61qbAzvD1zk75a7hduzPTojRWUiSNfs2dSXK3essJLSnKg4UxvjQdsBr3b283vi",
  "key29": "55W8pE2qjrN1J7M7Kt6idpHT33R3CDuzZEKN1UxQCjQQANuqmvN5jZ3dL8BMZX6x2vDGwRwMWFocevLWiye7cG48",
  "key30": "3ZEHLis2sU5kX6LYzyk6i62XXaVZY4rWhpzr7twtYYUpEd7CsnjLTedgis3ivX94HJUMF137Mg2sS9WdSSMu9rBW",
  "key31": "5JEMWsyWWkKbkst7PCKSf8nc7t7JZb7TPBEaUXyBELK8oApk7b8w2XoF7sSNAKdLzi3KfFEVP9bXm6CP4wP3FYAr",
  "key32": "4VqiLsqmiZyGFRKJJAqf953jApPb19WMJuu39ckHsqXWBCTmJvKjZ3KQc1Jx9H9NFcPdhXWR2nFjXkrKjpNrkXHB",
  "key33": "52EHQj6MsyfRhkvLY7AA6p3T7wbxNUP9NRxJGJ3eRzfhiNvHLF3QNRD2vtXZ8Knwa8eaetoqtPKN2eDUTw53dR36",
  "key34": "4Pxpt4LTaxXqMQSijKVHp7A1ttS6KRVhJnUN7kTMnhBt27upSr1tzFL6cgc3jxTr4VaVhMLAYiqyjEQEY5V1faRq",
  "key35": "39vq5QD3Z6368EWhRvg1sXVaRRd5vqLhiy5a89HWKeY4DoyP2ejUfwuM1Jg15QHUTu4R11XKkQeMJAB8sRVmQQvV",
  "key36": "4Sbq73bP37ZmFq95brZCBANbsd5s2qHvRZZnN4kz7QTBFWDJk15ZBm9NNpz66TYByPxXFX89t8a6bbYyQ2me148Q",
  "key37": "5H1BhV1qqKC6nP8KRpdhaY1wogW44E41M32wSwDLqto2VtMvduMJ9fAx8XdRhBcF18B5yfZWxndwTuj7uR7PusaX",
  "key38": "3JievzrrMG1JPQ74yPW56hHWmchDGxxnTswPWsWzfyAhozNdRDNvhB3vhV18BZyMszXtKxKYyWUuMoKna7qW864J",
  "key39": "1u3JPNL8HYhvTgEpHDVVC2Zq6ajiRNwbXdwjYxBYcWqJKdpthYtPBBEvzuiHyKCY5RbKqErBq2RXAvBGHZu8cvx",
  "key40": "LjX23METDbyx2u1NbHSNjHwcVwpecFNsYtvsW1aJU1s2np1Kh3RjREqBNzyCjdaR875YZniNsP1DUytvHR9zKvk",
  "key41": "52Nu9v39NAZ4cPfkWNc6FkyDHNB9mwoZp3qWfSAjHoA69oxpUaMG1opR2SR3aHvG1Azd2UkPpSfYtjkVTaKqpSJJ"
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
