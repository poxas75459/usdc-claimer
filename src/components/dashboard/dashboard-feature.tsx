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
    "5cXdGoPsUtcx3BoMzn3tWjtN1q7GXTRFqeqA8zaNUUFiprHXwi6vVfFfg5GVHHtKz2un8e55Quttn4BGpzU9uiWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CWYBGWznCbUarnfxePE9LJhyDLcQ2UjEJNvcGPAiohKcgDBzXhK8eCnTDXHKcWHqksrFAg6App4sYvkNq4yDpSZ",
  "key1": "4jgDyjYFnqWvgVdUHwbsuVcA4gYSUsCDZ5fGNPvUjP1X16BwbFyFMKGupni9Eww2CYDcVDqGbNgPx25o54zjYJqi",
  "key2": "4mmrWPfqcwoHhevLK2BHKRxjJpoXSYnyWi2SjgariYYXXL86maPACesBfbnbBwVMhr7PJivLW76LsyUYWsu7zJTN",
  "key3": "365fnzsiKXmyGiXdUybUQ9vBQJffhxD3qBMhyTo2Wxb5tLbRDbYhYDZ56jJhUNbKwFYo7MsJZGBga6S3LMvKiVBz",
  "key4": "4P6WpiGvHwa66La9VE7n3m4pCzkuiAHPL5pBSnjyxbdZTt6XMgmrbVUhTWhx6YTxQXZBUGSfLim1dtZfkywRPxLB",
  "key5": "5eLvdr9dkLTNv3z2MAs9kqCAM1krH4k1RrKmmYfiXDMCDfx9PdJhwVZaaZMPBfjeo4nsiwoEzNsoHVuFqnSmy7ki",
  "key6": "3JSiSSUMmyUrwD4FV781TWskKswbXE5oHeKVJ16qpewLXk2dpiwYfMsjWPHfp14MfSL8AkRvbQZ7ZKKTrxzTZu7C",
  "key7": "2WFj2nXUHgzx3yhCNTDNyMtxFdFCAdNTfAzTnPy3Cnek4P7G4JhBRCvUbQWkx8zV9RXEKFTWhEsZptJBLti8Jgac",
  "key8": "MuHBBCSNVgkQwWVe5xsvEJkmWDeABEXawDs168x5NKurDHioySjhEC4g8xkKVLvNP1W21K6FfeRb2qEFhaPzfpF",
  "key9": "5u4spujBjtddEEbXT6spZLEB3tqo76b8BocJeqGinbomA8krdW4YDwb921Pw9Ku2t8ykMyEjQtA8XL8xY6JDEtdR",
  "key10": "BL6E9ZxXxDNMiC27qWvnckcAT4mbrTDdZ4rS4BjbMPspfikqY8tRR6TcrtNq59GEdyKCjnv9MPeWQvrzCnWwCGV",
  "key11": "3zwtnG1i78eHGPF4CRaTPJZYKmGEaxQKjqre5zbUK8ybqXAf2KbCLKxa55qx2iujA1CXxEz2ia9KudoDEFCVNFLs",
  "key12": "4R3TUVxwbKrLsqWUsGu97wCL8SshFbZw5HdGSsESYJ1q68hcwv7bFDHT3xGK78ZLsj9usY5u5vuLj39QJrHGXBM7",
  "key13": "2H67nUHCeP9Ja8sdTDNuMCFAhcwjaVxjmpMnGPaWKgQEQjyg7XQf1C87xSRgMxnFKAspWUJwj81dobY3EH8fVBV2",
  "key14": "4Q7j5LXggE2CGjFCiCWaHs81BETsBFT6KZvmnPhdK7i7mfZTUtg89jiYLdncqkfRfSPe1B8PseEXBNEv6K6JSDsu",
  "key15": "4tADSrrm58f8pCyLmM9SwCv55NuEVsU5WdmL55wwDHUcL6eF3EezBU3G7kYLXzJx1uDdijeXzD2ZvhnheLHFFXJH",
  "key16": "2SizN5181ezJX1ieMM7wewQv1Q8UgVxRSufUiKdYi3o4u7AaBFJgGUzUMopvVsi2cxKu7FHHNcbCg7K5NuwhtyKf",
  "key17": "2vNntu2LLV2p2dP1587t1vA6NVvaTY1fowPqhUbnppRn4aim8qSqUTjbF3hYNsj3XTi6B6mfosSXid4L8sripCwU",
  "key18": "3ewM62fPfvNEjGyBG6QMd1fqyzTVx7UXev6NwDDrrxnEax3Ci2YUaQ7Jkb42k3pWkGAW5E6KLhiBzLKyRavoVmdK",
  "key19": "38fSqyfa5X11z1MnXvPoMG67XunH2cJHvEXDq8DZSp42gdaR7eqKccxPM1zJDwCiPbnvjhPACk7n1K52Fnhodi6R",
  "key20": "2C1pFshEDxaijrBrvKUJmS48iCGfhmYBtL8oJaiQfoDXRS5SVPLxYjgtfZALP6D3ivPMmzrC3KUg4jEdHdXfpRyx",
  "key21": "4hp8Yn89fPDUANM8f9MUoLUuFnhmPwFBJd49LoG7b5VAVHy1hdfjEX6dLu5h32edACkW7t8YkUnnfbGRMU7nszY6",
  "key22": "3FxpRdBQUnsUmvH1BWPkfq7RhoyzQHq6zYcnvJ4FwpjX9tW4BXMpBA35TU99kPsVnyRgQnK1dkyTkCCxeviQoDcK",
  "key23": "PgxvPWASimRF1bmfgbwamwC4xxve25giXBHcU5RRHpjcby32booxgzp3a1zD9ATJeAKqeMJ1uN3rGCnFYhxZgr6",
  "key24": "1jhPFj8V48ScrUT2KCEm6AjeAVwJyNNxkoSfhDPeTPTMWYUXJwbj5Dc6nK7b8juSYfyZwHZtmXx7BEcU2kFX72N",
  "key25": "5oFCf5edMcp3WEygPjkvTwmCZ21epSfPKo3T2KeLV8Z4ozU9rbf26GePSdsCiyFi8EeTo9WukoAwr25mdZ4jsEFX",
  "key26": "2aUCCyVHfHng9oDTh9Yi9ULjyimjnaPGGixTpQFewQYi459mQUipQ1tvNZgpRLoH7jSiGuMjWieQNXpbN8ZCMkz9",
  "key27": "3Saf79S3nH34ptq5SANL37hK8KdUsM3R5XMzYJW9VzGhx5LowAvX53zRdoNwvVvnHM2Ci3YRu318Mtr76ziSBSue",
  "key28": "1DyJcWJeEkGTdve4tq1b1AkZ3DxHXTgyrJXvR7qWp5Q3APUUbxBQBUV76WesNaVM48zQTHRey8zku91RKJSJ3q8",
  "key29": "5Uzi7i12CPvgTwBBZDVmZGXp7Ec7GUzoU7eh5tR6SUEudc4FxpMbVuXWk6SRr7Nqvfz9KorGiUeCpSFg3q5LHz6M",
  "key30": "5YsX9twRPtcRGEER28cQQR1CuhwbtTmYbGFUVFkmMVpunLbAJacn54Lt3rwjFeceNqaErGeSFx2WxdMorv9jiVzh",
  "key31": "4FBGQR6q14nRgsLUsV8SRPj9VxGLfUgfnZvXA5ysG5KoFAy8rhXtEZ5SwSCkPwv6J4ZK9JwoHYLGrcUpQzVmXeU9",
  "key32": "59EPKPsAZ86NhiwCu7NTpDpG73ypaq3wh9ih11iA9x3F2ge7hqPFV7xNSHSN16UeCvx6rMQgze9DkgCvUdX6v4ki",
  "key33": "3RCy9zBZRXBSgkwVbLHMuggiAaPdTGWhnVbREQm1eWfKMxnic4FfQijuarQ7iN7hn2aEqHyenwY7iYkZhvre7C7h",
  "key34": "4DkaNgHZ7mNg3otaicobVonaXmKKav9Q7eCFUXixRFUV41XPcvwPZjrsuUagtgTGA4GbT4infcAb9MMazztV4aj2",
  "key35": "ckzUBHBxdqppcQyWsEnm3MGEb5wJ6Jfmk7Yh61AScBbsmZsw65iUJahhuYAoQxqvL1ob2hqYmbgUkDp6Ko4Xx9G",
  "key36": "4TfMouHWwyhHZP8bjZQEdhpNdbA1bD7kH1djJTiS4zXQNLib7ZGsG9h6pd6RYfCwiZU6YwDgdYvDYeHRtY7iRJs5",
  "key37": "5Z9ZADhYw3LxAKmadQwAB5x5NGj2KvkWpPdmcbQvaSBogfj96anjG6LCJn9HjTHwDhLPSXTZj2Cuus4cZgc6EVjT"
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
