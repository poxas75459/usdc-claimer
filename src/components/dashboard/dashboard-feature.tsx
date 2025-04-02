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
    "3wATdUp3WjKtq5sihHqvKgnR7RkoBUJKCiDLgm1hMtrFFkfdwjymo3N7KRnB9vD4fYqdz9skq3C4b3gtESERfK9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HcKPDJa5MrWQw692k4NKao851qnDZhMnPxC1wYyNtwCEx435DzRNjyN7mDR2RrSNBMX2r6zjmhh4CQQXuxfaUwN",
  "key1": "51cEJAxoGinFbDRJ1WGsEdrxU1Kp3WtWv6PWqQd8s6LFT7iiAuQpU1DiL8gPqapLgBaBkmwFBVjvFtgCSNECStAM",
  "key2": "3isgjWMPWduwq2QcpPdYNqTTgxwUXq2XHoPpZwwBn1Jy7M2CAzzerbkJh4D2euqvgHDcTWGob79RTshRjVscMws8",
  "key3": "52z4ibN1EhtaZjYpTnZrosKFLtWXVgVP3zpBJo6FCr4XcS8kPyKmiktNG9Lw7napieLUE46LZWjkHDpsvMtgjoK9",
  "key4": "5ndkehhE6HpHLDap3n2DToH1ZnhqwoBD3zxJ5zEnzmFdGVauoUPaC1mVZbsPYoouU4BrNhcFB7CRCkz6q1vtRikB",
  "key5": "dQsHgM9zDRLqdpxT7ixUko2bMDZA8CCSRrtk3HAHai3cHrFaFBn9x5v5oQ3r5aCzMuKZLxhBmgu6DMHuu9ffUni",
  "key6": "2kgAGEFzosT5FmpnLL783yJft28pDX644xMfGirujQYEsb1CSGHBSmtaFNtwxQuhVNbkHqCWhopSiKBMPmNrSxBo",
  "key7": "55Wm2YMCYua9UY2wXGj1iRQfB4HTEY4reFqubvX9K2Sdkgh3jyw5cvq4yGrQ7hZPKUiSV4cPP9SDYLtjiDUM7QVj",
  "key8": "2SCR2jGq2Qo4weT5tBCwCjA8Vua984CGZqi4rfVzPXH4MSChyyesTiG2agoRmqPHJMmCUBXz2QuQZG1enVKnv8bg",
  "key9": "5qvdSzdeiBTvy11jZP4dp4sXjaTr8MPPh1zaeGnSSUczfiZJE9g2EtWBv7HehRDTXauZw88xqiKbQecgLi7Yts4Y",
  "key10": "G1bL1hcQsNzagSbuLdEM8LBy8Dv2MiQJoUYNKuPzEzwadbCBs34BN8QTqqpbGJtCm3fgbtpkXd5gjaLeix5KnGV",
  "key11": "62WKEJhUFPfJacSHU4ae51AiJ3dRExQM63rcJ4AYiLpwk6FgnasCqsWQuCfVwF6iyKqJ2DGGxzG3E2mG9zJPkP4V",
  "key12": "5VacjymDMsre24QbjJrBk98UQ3P8CSSfQJbbJv5GB2ch1MCjqxAYjBNMaowyyZStV9evTW3Q77Pg74NNkmpfxhzw",
  "key13": "4aEqeXFVBvkxqkFrk3y9qi5eoWP6DXyDcD8iJGcEWrR1cKn5Zf3iTnbWBp8Kq19SJ3PqAaHFxgNJfwVofKTHKJjv",
  "key14": "5s1BrKXxgVzQH4YNQRibu4jDqTzw9YeUyo7frsZ9D2WtCyDKB7F5eAsizV8jjXLGHZ8SDj2GFHQThJZaT5T6UPHn",
  "key15": "4kLSYfFFL2YUDiuGEjVvcdxZKqY6guzwP4RVt6ey8oXCjTbhp2PESsxJNxriosdAkzegaaZSmBczfqS3vFnuw5k5",
  "key16": "3UmgrEKURAnCfeHziDrDXC5eGUVcN73WMmMauZv5TLNdczzr1U4VvuUyJTehvAqVASTvXgY5i55EnRZPdmTMHegf",
  "key17": "2s3g3RG4t27QDHFKx6HkyAcTzqXB9qYBmZsuLdoPrB51eVvfKhhgWpJtWwSPLFcc72g3vjRhMBYQjw2RqFZrvjw7",
  "key18": "5VUXgYu6HWe3JxTmc86ZQWim4zZFUY9zZtVZzuAma1iRaTTvNDNxAdvAZK9g24fUykTicLoPd1EtrF8iKVbF7mrE",
  "key19": "cyUnPB5dapTDAaxM6Nho4Pdg6h3dKVWDGHMSqnUB58P2SLinzPEWDsaCMPjXVPyMXHvErjHsd9ZxD4eXQsMCwi3",
  "key20": "46Cz52HZw9eMdCPDt8JioLm5TGRSYvZArFWDgJAMXB8GEp8ms4ERBAXvb9TQAqN3M4utmG7LwNP4GXPZ9rgiVG9m",
  "key21": "5TREUzpnedtgrJwysFonmY9SbwzLJmfHHF2RVKCooNuFLW8igVqqZBMZsWc1TKW1Aybw1SRAKvt7wvfsqYS8Dg9i",
  "key22": "2GgVkWcBZ3AhYP3VFKmYFAL7kRHnc7t8JDWce6PmUQMgMw56W1MdcvHFhwu9kcLhjfktDtYFHTDgxGDZp7AXBBSt",
  "key23": "27hLSLrrXCBBYqeso7rkTPf7SbKmdZUrUkDbc5DtbuGxW5fuNMugggksLivb6i1dqmNKcLRZFJAuMAhAWLEXzqkz",
  "key24": "3QvuKqVph934f9V8Cv3DgmQcBPXyxyebESwHvLmqiTBnd1eXpaC4Ba66kTFHUxwA2TfYfPvBVs12Y3eSm9xPqZzz",
  "key25": "4zEbpPZL9AWcqVbeJpANGM1KjeyGAMaYbVBBydbSKPTQAiRCyEqb4TrBKz4YsbPTx2JLtWJ9ShtcaLKU9x2C6EYd",
  "key26": "4JKYWLGD7bPr6bTo61Wk1jkixrmJeRdXVoT5WTukhMjzvenjUN8pPzUKxLvuUezw5Pgup3vavVda6NX52Pt3arGX",
  "key27": "3sokxj6EhMkJRxrk7UiGoeQwzZabNVgwFsPY4zGFApgeM6QffyC5AFJAWyXv6cwenZ1wcdPFkmcde6T4fBjcY3po",
  "key28": "5vUpr5V2kZjmk2J941Y7JmEtPthULd3ZumP7NtXsgLTYmcoi2t9unC5vRsAaAL3U5r7jBYmGosmUn2ej64B3u7uc",
  "key29": "5QkLYaxpfAH4VzsGJWsXm8pf89ryGVvN4fcjRKHrZUHinK8UFtnohaocK1uyv2ziRyYZnaBkWPbjELHSoKnV9bDd",
  "key30": "3zPUMwh5H3x2Pt82EptVPAZyb8bWbZJmWS4vEAB8kg9E1xmqGadyMz75XW4RjWwNBni5seiN7uvVKnfT855u8AtY",
  "key31": "5ZEHFuyF5afCA87yUaiq3JcGQhqpUXkFSUPmhFrHpeB8vWzPYUnbWmAXCHqLb3SFht6eEYUopHR9ubiVL9MnARBE",
  "key32": "2xtbBR6p7w9BXrQiUrZ3nqrpcb7jAVTzsGDbGif7fCvcNXuDHeGKK8zHunaMN2cgDaDSADjuL2UudHVx2mYkMmYB",
  "key33": "2QVYdSkFd7TtuvsnLAcZYNtbZuduy5UtrbcjAkt6xJUaLfQFQtVQcYv41rSCQbqzUJYU8NkgbiXno6qDZybDrbcH",
  "key34": "5dFCx9csudpBtXRgVzR57y8VStnnbDNiQcaVkGS8d5LH31Y1ma7TVNQ1ocAz2xKJsaDyKmLs9PDYP6FuogaegzhN",
  "key35": "3JtZbJevc8yHbJZrQoXAiN1adCDvNbjurvMf2MpwhjwPm5oUYicJ66Ct9P3RmA5fG6dWe1zoMvJu2h83Rh1XpCif",
  "key36": "zqA5GobRctautShSaRxgc1mJe2fYNCaAQiaDgMqqAfNaDdjDuq4EqT236VuMKMFaCGMVg6UPkKGnedzAkndHUCv"
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
