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
    "di4JNMWt5TWmReMo35jMc3uTGNN1wzoVhAASJFoZR29271vb3XFEY2kKbfG8gpPoq3RRmUiWZNmxuKxYdwuJtAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZHVQtd4XtNGdDe3fhs2xjVbgf5JDo656PHmirbv4pjnazTA4wmuRtkJ4qaW8mDEdwZT1MnmBkuMUvuSzrfiERDJ",
  "key1": "4WNch3NdBiqqHvD6z5dBk5UXrG7eS6mjMamP6rynkuHjzXazVuBCd8pVqXQ1XSkzM6VG1TGZaibBXNirtPzKjar2",
  "key2": "3qMHKmtpV4zvuhSQkkji4ghG4K8ntFQemJhLeUC7oRb4N6ksVbDZpjSEAkgDokt7kSSBZbV4E2K2FVnPovaDq1zb",
  "key3": "4cPLdGBJWZam9kkha6BpDWznyY8kQyAeSfutZUyTjoVBeG1D6zjRemFkHfrZNBCWChC5H3xCmLCYCvNxZ811sSYB",
  "key4": "3587rZwK2e9Kh21z7BZG3azmiT1ShkBW7uPhKKMra1yMVKRvgWtLGhwkaFsnGLihLxuSV3A5pVVxZiTKqBk26ezC",
  "key5": "3i678vUmqUHUFuPSAP644vSYBcp9N93tXkDBusE4L8JQU82opKjZ9TqzANbXauQry4WL6RkWaaqzX4zH9ZuPY9m7",
  "key6": "3KVQ6e3ZYnFEK5oDXKtqbYqcJ4BAU6u4KyYpu3Cp396bTetNMZTh8gy8UGpfvzNakyEshGka3Ecu8mViDhCAGjuh",
  "key7": "RhQr8HjHFR8mvH14RAbhc5HneBkMvFfRibya1P4kcDjiAhExkd9FezkrdAD8Mvn6No9VWp9PwPc9XuWnV7BDF8L",
  "key8": "5V8cjefuukncqAwe2MKi8wFZ8LjuynDih1KxfGDLG6BCF2YXdHj7PVYEhNA7RkqacKPpqED5tTNJ66ECEHrPDkvb",
  "key9": "5d6sE3WRzvF7XC3dq5FxcL5Jyi3SrHjxYbdSoKS73pDrC6P8pSvav4zsUbD7z73iJJ3qNaccu5dWyXtvTjqMZJAv",
  "key10": "5XGQhRPU7wGT78q8o75b9WggB2dv8cAbtAiiY7kts3eKMszC7yjaFw6f98cReRLP2WMUWaKeo2Btqmi4ev7EugVC",
  "key11": "5yNPMWrEAwCThtibmaYSuxz9i4cVTLLGu37MNMEP9ktKC7y9fJRVoEuc3uNVqAZ9wRNkd6fTZzG3AuX1iAQWCkcq",
  "key12": "2EAYAJEjWAi3vpx664o6APvzFnEGBbZtji3bUJT5BYXhZG2YJVE4vNFA1zp7Cq1TVq9QMJ91FkH8sBTRntGQTYCF",
  "key13": "4DXSFafxfM2QLNCx7BewYUigLkfvYwKNbbs6xbxH95h33GY3RGSLtuKc57bAnHFSN71C1JY5nDLsATb7nLKUrNMZ",
  "key14": "5DwpCCEyFhHemUVuWDRyaxQVqNmK9g4r4CfxTJn8LMVGs1N9s18NBdxWTcsq7yDGjjJd9tdAJQUfLfBtX2fJ8bwT",
  "key15": "44EJMHp1Dc5GAQCNq3UnrdztncSg9VrbTyiy7EhSns3fLxUMbWQVTtbkSUhxpDiWTi4nSJLGi6zubzYS3tuxSPyC",
  "key16": "2jtJ7Egv1kU3kEY8k5ae2hmc1ujx1xdz8PoEc4idMJ3vAwcmdcfw74Hve8mAJf2wUcMpWe5kJF1HhCXqcmBCAiVv",
  "key17": "3hp5QTaHuZpX4gkg3YzyPuTUftzVDywvvJak1HrMdvd2Dkbec3gEXtd3p3ybC2dc6FpPXGnnh23RrvbXBtpspzh9",
  "key18": "4Ds2F5tiAKFpTqnMQUmXKvaUewxUAkpe1yoy9LbTYLEhwPuCJ9ByRFY6BZrLUi6SZXURcVLyd2R5Wa4rWw35AeEV",
  "key19": "5HSQLuZwUebrBoZqAf6WAX9ZdCANdx1EYpn6XZQ2x6ck3kjeEUcEknsn8JCrQkRZDdJkRZkLy7M7BtK5nds9594q",
  "key20": "53UQSnFqEENK3VDbnoy16Vw4EDVotfxBapD61LGJyJGA6CHUjd2BCQxZpijseQ4tZUPLKSTB378uQ6T54S9f7bcJ",
  "key21": "5n8Xm3CUggvQ5XNT56zJaVDiaVh5EgKW1PDWQLMegDekbJZG7NU6VqQsvwjp2QdJgNA7eDgXTMBfxBQNYZ3kuZJc",
  "key22": "2gCjqPkTmqr8tGH66PRNeurfomNw4xH1cCvTbtiN83TuwNQijw8Hc5QWtPmtwZ3Hf89xKksFdDg2VScQu18j6arp",
  "key23": "nkjGuayP6D38zbnFBZnPdchpEE3dzVtXZU2c3mnscyc4paYiNhHYu93fY77d23aS9q3NSEKKaMhy9VJAfF2Jp88",
  "key24": "48VzLWkWqyVFHHdxNFGeMhH3xiVryvR8EfnmdqFiGGt1jzbmHQkWLxPiXzMwMUNpFmW89AcTLerqG3y2k5UML9iG",
  "key25": "dKux7HWnX2G8EEbsX139geT1RYoana1drCWAWZSYFbe4Wf8hSuBbUTRCPVzvnPkx6he6ft1SJDdoezpsHxvoriG",
  "key26": "5gCpQRovpoU6EgKxHt95ZvPPPfmQtKDJckmkMLB6W5iA5kUgBFe5PN5sEYwSj17F7xwgQ77EWtR6Mc4qch4tr7i",
  "key27": "5MHqikHfNCGN7DRgEq4GJbqnQ6htgM6XYaScVDSTTD4DSM3oCPhLhwtyD2iVQiKy5wEzuCfoiK6xkEhEMhVVb8h3",
  "key28": "2Y9zH8cpEtCbzNBqWws34KxBz1SUmxuXAPFSkNacaYBJ5879ByqDJrK4pLYXTSPSghXH9kg7n37YBQZeVx1ayrwh",
  "key29": "4iqq4peEEFqckSoSkr6ygva2mqzpR2gEosVWafznvpLzxfXdWAx3xiNh5hyairWzHyPK3fqzXgtCrtEngzGNE8bz",
  "key30": "4XGnUwwEzCTFf9XTJBtF9tLb4sTJTpmExPesWGE14p2ZJx32jYoqzb6U23ZqXR2B6VB1HtNVoVU6szeRLP4FrcPp",
  "key31": "TVW5aHD188kVR9kHt3NDqK9F671B26EwLHaujm2yzNA6cCSrENCbwNgeZDVhVwZRnuE6sTcWDnaep56HFxe2X77",
  "key32": "4ARGobRvE7H9LvSRtXPZXz5g3reYEnGuvF1uRHFCmbF2A6bnLjFbPkSJxwm4Jp8JzdEdDBFXFmg4qJvGgaQRUmwU",
  "key33": "4exJmUWC6hjAMJiPkEUWGNKKLxAinZrJF6BFaDkbMS9ahYF7CarBsNjjYUMqPM1ca74PKVwTj1WJPVS2CN9vys8N",
  "key34": "3GMzCVwYaaxW3fvDtcpGHLhQoCt4akw6q8dKRYwiKgYeWG8YDJvpTDC924PL9Pp7Dwi79SjZBKvboXCESwSpw7LK",
  "key35": "4S2zZzbo8hfJKTKJ22h5GYmwoKQGBVRe3FYht19gN6WDJZ2sdX8is8DTZnfc565VEnBJZtKYTcvopmjDuTqd3KzU",
  "key36": "3Zf6La1aVMxkmz7qU9ZUNMi2Vw7wDVTxmUwMq9xrzTDLg9MMcb49MKafb35UTAuDLTs9WRURihND5vUMJh97DCef",
  "key37": "DySM1TJLYfRoPCDYaVVdzYWJ3Le5F28UhcnCpMwsbBagdmm4kLptinHS7xiu45rtPF22boS78v2PPydYmt5TA7M",
  "key38": "2BEg1NE2krfGCErChB1J7Rn8deriMRRab8qK93A8iAwRGEsCjDtczkYLfqzbZ3M7hzh5NXHr1pWc2NbhStrX1szf",
  "key39": "572ziKyGSwT6ckh1u7yB8rrRtPxqE5XPE4tivbZMVjBLrZfeZXgpJ7f7NHXfxd7Q6syNFrojqYZ74GaS2DWENPQ",
  "key40": "36hWRVcU1TDZvhRy6Lgowm4ZBRUGbLCFmpKAqc82nViQBhFta7foSCKomruVcvg6pytGQid9XSAXrcjaFWMUNDhJ",
  "key41": "5fdUsbgMDGe1AagWcnpUiTvigbF7TekHMhTSsWUaFTrem6mjohCikV2yrBj4wgbKYaKf7XHoAJFV6gPhDicpvzGR",
  "key42": "3ggzZgWfg7ucfR3UgbdDysRgGAXJtnC4eeZdCvAwvvgSKyR2Q9P2QLCmDJe6idAzzxN1LVqeN4teZ6KuZPHy8LRs"
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
