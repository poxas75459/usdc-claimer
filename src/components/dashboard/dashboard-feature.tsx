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
    "34yarGom9vmuEdpggiX5wWDPtfYrXZQEPj2SqKSDDcmyu1FN5Avzvisr2WW9u4Q5xYacKGaVb54bLYrxt2KsgjBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3peytLvQ8Lzp7R4yYMeNuKdp2oK9GxahjmFCGrUBCc83VcUrq4YzqtmNXyAHB45xLefDwDDqc2c4TnyLKiT7S1mh",
  "key1": "3MvhrMrx73mHeeY2Km2FwLPx1HCnKzHyg9KcW5tK9tzf8tpegMSwMyBzPDry8jc9bSLisw7Vo1msrD5GmnZ1LeV6",
  "key2": "5FzVnsqxrPy2KAwiQFzzTnbmL6LP8Uh8rGWeQojrfXLtM4JsGGc6gQtq1FqF5DMq9w3oWDrRN7mfC43uTxuvEqsW",
  "key3": "3MviTNpcsRZQvFiJPJDe6G8Ljbt9rSZe38JyEd3c9wMVXPG9G1tdGNkMrDn8EwGEZYUsWm2Wn2SMLm3mi8m2CbEz",
  "key4": "3KmnYDL47YS6SgXetDwHGfFrSzB7YNRsG4PnCu7jZR67zCRLSQiaLDiL5Rsca7aKqN6WJoaJeW2yeCocChDpAnk9",
  "key5": "Yoc2ix9c7HVKDyXG71tXS6nDtPMwUH8Kwqt29Q4eJFog3Ch97aKUpHMJuyxnwuxmxg45RMyy2DSmnWLCU3MsiQi",
  "key6": "2C23Ez2cU3B3U2xwNZAmGrkX1kHv68JYrLB4DhHW93Mg19pNSH2dGcF6dexVP1z6Mt6XrPoMVJ3RxBEDQMsp9qae",
  "key7": "29dTAJW1fZgyd5nmfTs5JesHXWfoRMS1yKfgUQ4t9q5HzUcWCHmAxvcHo4qXsYw3dLJUV6ruZxzBvcJcCcPo3WsU",
  "key8": "3XXNFPpp4J8qYmdbQ3mMLrLbj7PD1fpV1BrzxVyzFHdsJcYH8NzTvz62AqgiuQ9nYTxz2Kk3gtx7hPaD3bJ7wLc9",
  "key9": "bRTejuHCKKDsiW2pLnv6eKbkfuwtsVGx5SCHxyzvjatR4F5ejx8Lmykou76r49E8PzirkwBbMB2PeTPM8fYXWYp",
  "key10": "2jNWTZjoCuxYTsBm7nRobD4E4xHQ5r4Gnffmc2FZWivn1XQprfK5ss5H6b6pawyTZzUnhTGDTYJXbprBVDizCZpk",
  "key11": "673fMNLqmsKLu5Dp7c8r8iy8iAyvG9iaf8Fb1GPZu9sRaK4ppGgBhEJ3brkdi7c66udQPFC7mDA4BARzfW4ggQh3",
  "key12": "2M9k16mRVkYCeWBCeVm7Nv1Dwc9F4veLTf23oWtkharHgb5qtDwboB1ayrmHkjDXJGxFMoB6mBWkhMiLeNrwPgQn",
  "key13": "8Kp3PZEMzdaUYkxPFpHrRhMT2dseQweAbLn3UWKCMmyHveJ7kvScHFGh4dCmdMjehe2uXJKVVPmFGjkjTR1d8t3",
  "key14": "5khKQWp76rTMmvDEhjsk8qgVrTHppH1V12triFiDQJKkp2VtjwB3PGA1xWWpn4cxba3xekvyPMMcf7MXHKMqJ4xb",
  "key15": "2jrkzUELiqaMX1WZtQf5U52nxGk3FVX6exZdK2o8Sac64u15puh9bzbv1HNXjjccLyGXF291f8jZbAYQQWhKXnSr",
  "key16": "54w9EfGztZiNmspMBLwMdDh4fdgup7XCCNj7uqYddKfVENVqz3v98Pg9TQcDXPtf2nfQT8SnKjRHEGgZSXzkAHz",
  "key17": "rrRDcYHdSdCu9fkEF3VRNSgojaP8BTusQko5HTJLtAWc4qkdaWG8Pb6tRc1A3pescRU6Ym57WgzcuoPknp4CsYs",
  "key18": "aiHVQT83g4HS8bu5jbCzhDFaqbtJosqxXaQP5PMFcwadGEq3vxQo4YWt2fUzCXjyUkgTh4Triv3Vo7exqDm7bdA",
  "key19": "4hPcj5hDXndFz8gsbj3CekEp2UpgnrzXj5vytofkTp1WLcU84mF36okkwTkfpBf27fyLhuMZV4zrjRjaiWtZh72k",
  "key20": "3yxD7NTPSdH2KJuruBfbws6NHiJC6jDQX9m44GUJ3aukb3jnbm456MEBj5PRYdFsNUUtb2XF95JKgVFuYup5nYAw",
  "key21": "2nUn4py53XGQMAdKiMpE3pUzz975VqrudEWpZFX2fD1cyfHHyExDHa8Gb45UGBKBTSn1sq3VFAHnjwAuzkCjy779",
  "key22": "rhMMFrb4sSj9CN8cKBaVmZCDRcaBs81EZAzEC65Rg5P8CTewM2TxTnooQXTZmXhZ9WfDwXV3s2nNL3TmhLTYCh6",
  "key23": "3VjQMWhRmS1Ed6YFo3Y7HE8FmWwhm152b5uvEojHdcPSpX3GUvkD8gF491AMUoHiTNp8dFhG4BzjU4URdcugvrxd",
  "key24": "5XEfEQyRvSg6bRzM7t88j7MSnzrZX41dZJuBdccUpAcshn2dw7GdowrY1goyFPgp7z434WfX8kw6PVpzuqNpSh9h",
  "key25": "5j2St3mcXdRHjgFKoU7RBXrkLkgbbPRwKe7P9qekJmjZp5K9L7hNfDE6YSxMVWj5PJukmuUDVUdVCb36Rpwb4j2P",
  "key26": "3HA13nGscdojSRwtBEDZcwojVG2Q2EP9bHXE4Ug1P2ippw6BVxyVqE8F1RwgSovU6F1VEKjLLKaeeysEzkzroTic",
  "key27": "5XdSAbU7LPxouU6uVKE8gz5G4wvdAmeNjbYoo9yFSpcEeKeFuwdED3opWziXV7GrG81dUsCjyC1KDwQgS5rgYRSJ",
  "key28": "3vYusHKjDUUu9T3KPfaUwF78hricjY6H4XqBFxgWis4krDX7N71xmT2UGGV4q6p1L6ogV3tXH7P4erhU9Jc5tzDD",
  "key29": "425wL8aDquvVyfVzesrLc9y7tTQBUWkjPVnKX33wNZMbfbsQ5ng6xWZXeMvQCpJD5Qt2qZasgWY53AvNwaiRBS8c",
  "key30": "3Ty5jDv1dgCbQPTqNZ3i77xbf5ZyS4cBD7WHzbYCEBL4Q7F7g5CpGr9EnKUiVS8bH4cWAjSB68J4m38xrWEQcZ3G",
  "key31": "5sUWaDvRMYHYUPYgiHecQBADv8yQLbMK3NRFhoXQEHpoDZJbNUbaMUXcUH5tjnhMBTTSjH8ZPhjJk7VgzXDGCenM",
  "key32": "2B4mugg87hcC8Tae5vnvm28hvz3ExcAtEEVBRh8F6J28Nknf8kZi5MLYo2snZZMcEQm2XwTxeXxWcEhaFFpfsQ4K"
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
