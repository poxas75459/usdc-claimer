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
    "3yNA5GV9qq2uDYQJR6vuW5MSfPgnd9F4Q8dmP9vJWNYNvaRdnCVc3PAnGcbux99JtDuyrxK5QyBjd4vizUAdqKnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCtXZ9nc6LoZFkh5axnDQn2mzTudv3jQyBuCyjRxXSjHQuFY9Y9Zqz3Akz4ThQ4h9a8kovHoUQtHQpHAMEPCJjK",
  "key1": "2Cc3uPWv647LwSSkvZEB2XRS77fEzTrCg4u2pfHLuZH73jsK8PwoqeLUexX2hxjCQbF7SRFXdpgr7qyg7AchXTWd",
  "key2": "3fz4av88boMcemCqw4ntfd7T9x4bHJEofMoCh2GqYUS8zM4nyXPUxjCnksojVbLnPKv3BQBLNdT7cVrHXtWjbtgF",
  "key3": "3vsgL7ATTku9KuF9ZiUt1n95oYwsgepMAGdFGNfAovopr4dX57hTZiJE8dMoRwkPMAQ4jPCyubZKN97NSnBAe54X",
  "key4": "4Zt7L2uPxZJrkiEDnpYsBBiPX2esLAia3jcCSSfve6FgMRdUSptaXoAdbtzVWiRFtJoPmKWTEPHfW6XxdeGmG1ia",
  "key5": "2CDrCEAe5oQzYPYATB28nXgHaBxMNojyZex9wk13MyrAW2dQk3Aj9zrDzQVCwYjicc8xMNSrSnqEnwSvqCrM1zWT",
  "key6": "4qz3oyxrNUDVRbK1ghRwEnFpMLf3LvkezVEVU6JxEstvQrFoEvSn9Vq3Bf1mdmdXqJtbYrgF9AdefRWuT4WGPEun",
  "key7": "wXeSXcmxrvc84ejE4ywzVLFGDAdUGZHFzmBWGGDoPttwq9oNpFgUWB2xuhHoUaMhA1nFyTTPcDGwTct6dpMChwV",
  "key8": "4UkCFMJshD4JsxtEQGX63UkfLbhEwtTN6Rko2rPdsoxMkfw7JKCgXdJcpBv1yQaPUtoCqELFqkZ5XemiSi1pg6Fu",
  "key9": "2xnqdsosSntZV3mNXa83xVmaeVthqtdrXMisMrad2HBQ8iyKb9PQdSSiVapSN2WqF5LfnfgaUvXubTS1t2Cd6J7K",
  "key10": "4iN7MCzE9E62X3NDBwGMJwHXVNsJAxo6vJXsgZ2C3okrX2cM4MPeZTQb39SgJtJPxiXrC7mG1upfd7ncNxqcFipK",
  "key11": "2oBveGvjW9FjnNokowFmwR4iXCoqbRyjkFvNHPiFcL1nXJ9od61BmvgZ2ysN9vxDuUyS1RgsWBxCRbJ3GGcCqxeM",
  "key12": "21LSnSdRYPGg2WZPkYNFqsgCoMLfMEbSb9jCu1Cn1GqDpmDW8iauWivFtgp92Rm3jct6GVmhKiE8MG71ouiNZDFy",
  "key13": "3Yh7XEXFGMtZKCdRC3tEDP1jJ6G1b936gAzDmALkh9hUzC1EQ8Z1dLcYnkjEmQZkbqP3jJHJrxECT9TzPAkXkUtE",
  "key14": "5PpTMNM49XHnGF6VP8JCTsbfw4xmxS2KJ8QQbia1k1mAmPXEv4pFJG7NZT7icTE6p7kMUxqdDN6i4DaY7TqZcJcT",
  "key15": "31QTUAjkACRmZscdfRt1x9C9i1RB7F2mBDHF4V6vpKXJobcmCWW8yLLvALCcNEWGpaXdbdajaw1m8nz5dpbXXkuD",
  "key16": "4GVoEuPTcTbjD9GUK1j8qk92nWCuaQ6Wm9dBgubnPNpTxUfWajuCcuHthEpdQUU2kEwNucU4RDmFzY1rSneSYb4L",
  "key17": "2vVZDjVrRuyFNiMUmSEdusGgopkWbLBKtNBVJmttXEad3uGczDjRVGDdfYh8JQDeBYngAdohgYpUgCoxjKSY6eU9",
  "key18": "rotnqVp9wowuRnzAesgYodWTLLaYNfy5GtwKvVE3mLrLXcoTKVz4sriAy3dcwCN3199axYyq6qaqeQgsLkyHkfg",
  "key19": "3mEkxjemGMzFJQXfHF9cKsoseppVnDCmCjL1NzDSUhPJdgLQ31b4LxNypwS35fG9JMyLMTRgqqCV8TBMCgbfT1Qx",
  "key20": "5x6X9cdqXZ8KjD263sUcAiPx4NmcvwkkfR57fE5uQa1CTtCNRt3sUyHxNfjWJaXpFXtikfrjR4Rgr3E9YzXQoLhy",
  "key21": "3DCsqEwnTfyjhTwymgFVfQLHJN2Cm7KWQydNFsoTfVAQufY8687GwXPXFNUVcCrT8bcs9bWnQNwcfKoht6rikhLH",
  "key22": "5hBmdZYwpMzwCiYeXoshEdTnoagsepzUDMHnVPBEMTcGygypbvipfyGLgT5E2i88EQkZC7t1cpfg6Wfy3ZJNGjUj",
  "key23": "5MMWoLCWjTAUEs68z4w9hT1gqQVPiG6BpgfhgTftnQCtQkHzXQtw71DmCHyTutKMub5p5Q2ji5QbXNgos6vZ9n1z",
  "key24": "2EJpKDf3wr31Nvn9jrWe75YFXZbicRXLckQn4rTbuokAqgpSKqAMTB65SUAzxvf5yzx1CVo3imcJaxM4bD6mK9SB",
  "key25": "padnhGZQjTxLVGGmtSCLR5Kcg2oiJ9kVbTp4mi1aZsMNdJJgvoBaCBxu2z5wTDs9QzTqJQMvKgmTnixYZZDqxmf",
  "key26": "4yWm5Asd9PqCsgDKC67QGxdfrXupG2zMdeX67JUHVrhFT8SvEaJypv6gyFApL8MStKwMJ7QYacyDj27X3vvQYmFH",
  "key27": "4ZoiBuBBUXVm6Sx9n4a98P9HgTEu63PpVqK4C5Y2x9dkySd7iVX99m53nx14K72vWSQGoX2rUCHVVMswbVza1FUi",
  "key28": "5oeC6iqoKVVDjowxDQNzfsEVBrmq72LSN9tM2BXMRgA7jMze259PqDn9U1auphEZasgqDVKFgYHFyRv1LT8wRhZM",
  "key29": "59AXhMpGiNhcixEzkxVJKaT2uWkxJkH2cuXme6bbmLe56c1u7D9d8GvSbmr2GGnEKSsLW5Nd1tpQDzkLTdfLM1ok",
  "key30": "4hq5hN9YdEm8RXdV9xAWTDa59wioRzvMQwbeoT6PsrJgR6tX41gCQnnhypYu65MyfMUVMNhZauVo5X77NQs8zy24",
  "key31": "5N6JY2MnHGjuVgXa5q2fkaD7edET5CC2STBSDRaTXHwQVj4QKtWRgAModifFwoPm4VtY62PWLpaVbSuocNxZDyy7",
  "key32": "23Nf4Uj6oYRC8ZdiZvnUVYjURi7sMPBRsv1eaDNADveW51MHVSiaEJ5M6zYFDpXeeT8sotnG51VE9BKo2cegj4L5",
  "key33": "2Gq2dJ5tHcMMz1KqBNaP4Uzcp39xRbbs8mzCWDQwQ763BxkbnDns7jzx5UmvG9y4RQZAQaE46C4uEx2pKYa31j5E",
  "key34": "5LXBF9zmHiNEbPfuX5jVXA46dqoBcRRK1XLU7GxBUU3oQCoeWyW6BxWT3PSB8fyNHUpuXQG67nMsMyPYNSj7SD7o"
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
