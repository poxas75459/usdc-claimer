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
    "5mGT6DuZczMEuaSkGdgrtBQgaSLukdS5RATJDxjws7dTZD1xiuMMKa5LXfuR3BhfAjE5gFXbHpMjoZHmBsxJUHRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zfJ2AxedNSZnA5Te7h91LvTZVQTEwMa97xB1UsTnqzCQFGFGzyqscijSdtjsfcFrfZH9FWq17BTqW1nRaqXN4ft",
  "key1": "4qXiEzyra3bvsYsYa2rgsFzHxtQibpQQS1hroCbXKK5STDQfHBhLDcj3nULwF6Aso1TGr7653Hk39w9GDQ8ToDgW",
  "key2": "97cEo5kiTHDAWvr9CC56xHGKRKfCuSzJu8XB9hWtsBMZiaKNeJekEbVbyVaC6Pk4rMhyGWPnvegrm1E49jQpWbt",
  "key3": "5B8kgzfMpLsRqEnfosijhUCKDWZcehidutAJbfzbSK8b5apCjfMHwzyjHQ4bxMpUyKYukegmfaCeXq31tCgvwggC",
  "key4": "pGjFmmKmjVoFRurZbP9LKeTwubcPZdJKz3vgJwP9iqrk7E676RQSpxeUqQaB37HZYdLufsoi3sbXvBojgVjvqzj",
  "key5": "3LCsJ6oFUgFpYB3gJVSW36r2hh5Bq1arTtQzLudrwiZzdwHq8io2WixRsSWL3tGWfDDPhskSEu4eYSeKu9Yq4KCM",
  "key6": "2E8xQsQ8qqGUWcDxeCBoCZkMUmjWnzLm2uiUSZDTyMza8XgjXh1KtL2dskqAsNg5aRv8j6yGvAtcACuJCC1bxEZX",
  "key7": "32rdMoZXxL7iTsWuMnBu5EZman9H5C9azUr19htZ7J6XF6tExZs8r1sXwSiAA1rFXwLv4bvojWPy3A98VGTChQCt",
  "key8": "Dxy8rMZEMzHw37xLPVbYXCjRda9V1PENMwnwjk73nhs4EUYWweStg8KuoeP2V3t1CAH23hBqizLEa2gN9kRXNsV",
  "key9": "2KkhwCzixQbXxsSPWDg2XRootJUKRFqXprKGHLZUDDCXeMJE39SiWXK6ZzmnX2ZWr64z1oiCrM8jRXhuGrxhZm2y",
  "key10": "63zp1GWm9m41VoB6ENxkuFYouuS9yJJ6mDU6akMyqvNuTn3q3BCPLraMW5iwCbTesYvqeHfdJEoRGY1E2CUSZhfV",
  "key11": "3S7jigh4gsuVYi3hU218n1ztFnuLCwWz7c4GvQQBfUTHceKRHV4HCDvFeubDKK8Rh6F16gvbVRoifUKjxdCDwQvj",
  "key12": "yRcWH6oxnad3VgA7GVRRfaw9jv3EwCQtagpewoGWDw116PDG1ih9yz1bzeXv6Qm9CVXiXvrox85eX6d4JibPNf5",
  "key13": "zsMpgRZimGJ7oKGWyzNoBSuYevF8idneuxLGaJRJrkxJtG94rTnVSK2xTncpjH1A2QJ5aK7HtLYGy9VsJvBE8Gt",
  "key14": "5Rp4TLoo1Xza4ZkLbZafcLeYpJkkRrrPyPQ34ykDFpex3GUcdMTWAHtHu5fByLDSiL3v8PVh6PubFhURWTotPgac",
  "key15": "3aGsnzLk85ovMUAZjJ1D7ChWy5bcYmdTcsL8YCFTuo1XK8V1fRgY96Mu2maY9ZFAY9p7UJgAoL7U9wSd771ZSk6r",
  "key16": "uu4n8CSHRf5Z4rMt2G4iQF5i83DaRaykhMES4AztcaPQ8B7dUiH1SZyfqDtbvWugADHunxzobieF3azZrB6MKGo",
  "key17": "4Pamzz9nSscBur2ip9ojYdnijnp76oM18juSs8FmRdsyNeGt4we48hkTBiD9t6c15sCvcmfXLd35k2ECXcSivV2Z",
  "key18": "35A2b5e6ix6UdjW8ULcDcEDy9yREqe3WgEeKM81SSHYSEGbJqRVH46soeayTQwXXKZqttiSPGezvchkrznzirgdk",
  "key19": "U5JkLV2entC1LAWNsA5DQXKQsz28WndJNxvAw7fSc471tFHd5c6rXLZzFNo4nm3QEXLZARa9Rihv49FS3D35i1H",
  "key20": "zgk6F9SNJGh8TJ7eRiSwkJUZA5c53ymEkdywUMpEQMDYkup5nTvjCk2M8r5ixdgHSu1yD9U4A8KeQGh6W2dPCHz",
  "key21": "46mCNeMxDsyocwYUtaaZSgnz4gnhVCuDjAuuN7chwj4i2YwyrtcCgpewocWqNiEV68MUFkr4Zvnv7aPecjxBiz1e",
  "key22": "54bfYSMKbaQro867WJLWvWpgkokcFx655b28rndzt4y7iijPwuiREDRjopWSS1wJGjUw9bedhbQDB5b4JwoRXBxw",
  "key23": "4ofeHPf3fsoSkoUNh1DqRzYd3iP4xGf2ZucWNG9kEFERMnM3Kn9rj1QY6bMixHUTcrXaVsnSgaawoW96L7GToCFd",
  "key24": "3Djj8estPg1ujbxoLD9J5c3LRrGA1AHLvkGJqMyfJh2tiGujLcvFGKeUnegh2g8KATf4KzDBHcmyin7CJHco2ddF",
  "key25": "FHPg11ubcn7tHKLhVbLhEDXHaSbhCKgEQa7KiZUuzzuLrmPH8J3crLTG1wnaPHyR6VZ35GEEpEFZAMgo8XiVBZz",
  "key26": "5y9daaw19SnDCGBts2MwMakd5cJuhAaCyjtDJ836fmvuKUARBYJVWVucXFovioSP17BDnEXHjZLr2Gsw2Ps8u5Ey",
  "key27": "4zynPhaSHGpYgfgGLNyPk8iGDdAaxkotdk1wtPPrs3naMSHFGagwCxGTC71wR5ojnw5y3ZexmeWYLXdTTci1YPwo",
  "key28": "2HDfNpqeSY1ZYrpd2YWZ8p9r1tasMVFVzgn4DGTiPR6Vt4k22npJyxPnsi6gegwzKDz1QFu6yfnMSsmSwKeRthLB",
  "key29": "4gBuPbGV81Vrd8V6fZy8APvxXNC4Ni5S5L9KPkQhM7LPZy9NfxpytfNnJ4U5YUYZAnLtnpsAoQk4r1ZsBfGsbxQA",
  "key30": "4XT6a1kFVMGtoWSWS1Wu7H1GJeM5oNNQXbHMRLQGUz8EbigTeeQJbAZAwwxBtA16UhzpBPHvMLjBL53tZyagsv1A",
  "key31": "3Nt2ziy51ySSARuBx5U8Psipe6kZZfgPRRQxem2Jca6DNWLnWurLouCVboEgRKFFw6SgvhnV318dHQ5RfCRDoEUt",
  "key32": "5gqdZ1iyMtYUxvJvtr8Zg2oEYMeByYP1f5Nkv54yBC5w8KzwqvLKDtAygSC6MS7Ly6C78Uxettv69XF1Zv26P1tH",
  "key33": "3neYduHS4TKxecf35Us9WWNBs6hDuBEv7cLdVNNe4gEQjpp2xiApx7iDyZT4ZZYXVhBJoRnoiRD4MiJDki1ruKiH",
  "key34": "R7XwkNNTmBDScMXTGt8SadJ4zVEJ2gFty6NdB12yo2ayFp1spPQSK81cpHCwyq1pSVR5payTG7pSpB2rtqBY6fb",
  "key35": "4EsgtaZAV53TQUSTHdAheauPKs4yU1k3YTpeiwTvjmYDqDrLnXqgpYDhkRQC9Ljx7f5aoM2mw67BtzofgKH4BdWn",
  "key36": "35RpLWZzj5LZw5x2p3Kv3CDLdpSK2zpSYSVvNr66HuuUG5w19yne9DiwvkcnxxtiKZZhHMtnraw8NvaTo5oYQMCg",
  "key37": "2oRrVhW49x5ices4L5cH6D2hzSVcw66CXMt2qLM3hPw3MUp23mSrLHK778hmyMGo1cvmCkWRPDTRbhief1TThYTT",
  "key38": "2dZg7bp2Km9nBh2vDqr2UUAJ1ogkWdKKwoqrCkoJ9Z8DoN2qqpMaHrPMe47752GKARx4PbTSQKDCXXBkj9gRFqh5",
  "key39": "4c4fUSMWLgnSup5BFYP4dbnyFGoWn3z7nShjEPnDDeSdVjXGmCfQ7TenR17q5xtgoD4HREnFuz2NXTcxkQ4hcrBM"
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
