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
    "5j37eyGfNq5GV2e4gRReA3YuEgcdpxnugwspVgkwcCapgGcBVsbeTFf3ZYkz1bVA5KX7x1boZac3JUv2i3xasftr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Rw1y6eQfmVucTjtDhpoc8WtMfBnZyunvxCTWVNg8Wsx1J24T1b4TWBa1zkYq5PinZCw7TRRR883LmSYw2Brg8L",
  "key1": "3KNurbAxz8ZCpG9AmpmCfjRPM4TgXazaybCZAQYLL2sc1MZb3cEfNb5zo2woxzzCqzvWsAGcKCFRNo4d6KjNeGpE",
  "key2": "31vEr2vniUeNe9tuhJPJbBp7uD8gU8uFPvKhAJBtHHXEpahbAVdjFgVoLiauSvZ3psWMNmQAs3iCSKaafgfBsWKL",
  "key3": "3XREFDcuuSWVvHPfjSMz7LrjvSARYggMrN3xpsNHbdXUti7hZpfCvtVxyWcJB1uB9D7N23DUTdfZXU9vjpxJvK2c",
  "key4": "4P57odHBTE4H17tuuqHzpPEwXLuPEMWqscpuPsBRK5cAwJU5nNw165AAfPRWGvaUb8cKGPHbsAVmeaqHaC6T1mL7",
  "key5": "FBatkr2Jok6AzD8xPksqBJkK9wsCiiStt1JHmnP1Vd6QQkmEGwQg3ZMChX78CeP2RfJeoKd2jP77p6kBTFLopPT",
  "key6": "65nhuTBDRH7qFQ4UtuHaEwGEtyHkhXQfBfJQdt9EQUqxxkuConKw26raM2QvdxvkAjBF68PHG5frxph6c5jWLTjw",
  "key7": "48SXBt29zAhQkG9nCzQ5ejemfSBu9Gov9uMPQMtiuNs9dMmHxUoWMSatS9rYY6DgzCvuDc9DZzEJ2pvgPR5sghR2",
  "key8": "4XS7ZAPzDp9MSs1CKaGGw3FrjEJv2Hed63mHeqf5AAW5SAaCuY84BBEtkvaMjCq5uifr2JNn4XkJ2qd4r6AqbqsF",
  "key9": "3Wz4RtFj9YVBEW6cNmiqgi4jzUT1WguwCjazx1Sg7QYgpcj7yZeeDQ6QRsbzq1a9uznjWBhyajegX39visLrxFk3",
  "key10": "4hbqL1KAT9t7sc51znbQ8wgVuBBUVsc7fyUMvLPS5PNoxDZRN4sX3ZZtonXQ31uDWU8jFJHd1h2mWwBaY8mv7M3r",
  "key11": "5HfMysLz2wzv1ZKRiDxKXPzyjxse9PzFyxDeEAZXvTsprfLr6M4LwdcrDZdTdG6wVXLzsPtZJ6QRXjfSJ8a6zS8",
  "key12": "3fnYAf6yrUzecxCJTiJTK5YvRzUoh252Xcgm96diTRiXQm83w7rruoSxznD1RjPGNfSSPJ7CmDq5HDb6zP2GbX6Y",
  "key13": "3MUaZ9EgPfghyzvc4Hceh23rWN4ySysGyptdLZXRjnj3pZhLaU65XxfkFnd4o21AiJPowS4dWXhVoAJy3eAzHs4h",
  "key14": "2xEDGNNuALc8vakWwdF53mSi9ziEcTKpQMAmm5oBKHheUrSMsez1cme7EjvjvsnSVyfcXhy9ZXDswJBukS5Ab3cH",
  "key15": "61KsTYvvuziTQNevLhMT3vJap8ZM8uGEWpifr1mZoaio5TK4vHSsoBEWE9zTmWkxhAbzGUdV4Vp3tbw5L8skGDnM",
  "key16": "3bs3XUMycsQ6sBfLKcXG9ViWSwDFYjhixD2wkgMfLmsAC2xL4FKovaimd89zdq3xURTbYCWaVVz2xj7MtDonMA5v",
  "key17": "5ZJ4pcCcz8Zs7tGgCUPgNSdGb7yKxm9ZHY9xBE6951Vkdj8G2JXQc9hgfVebnAx9HwpaWQpNpecTr7CyAFR1vhm9",
  "key18": "2qecq56kBqpCRju4v7iheiSN4tgwMnXB2BRxP9zyz2eQEYaWPBV4RWHjtjzc4jeCDBLbXMP9ZmwyHhpwnpo9nphD",
  "key19": "5u9CFKVbEjbWc9hq7Yzp6CEdrj6CrjBd8MjbbAAcLYqTknhttC3UpNFqckbgY5kryJoBSo4Y4ju5SPNfFc12MXUV",
  "key20": "5VRAxdEF3hJGom4wsbKpec1kjJfSaJY6F628CCKzPpN7SJGkYepxtVeQbVaKpmTXLDiRX311fP6vG6YJh9xbXepx",
  "key21": "4xETk1KMAGMcconMYZveC48ji7U2JTvQyXxGNSdC6otXrR9vRgWXxP1kVkToWHLBrNYd673mr4hebGogrRWr3ypE",
  "key22": "2UTFJcZAkHMChQKuqWn4Luxhzw3gdCVkb4TkX4Ng6MWqiTFqbpWJAUynzFL96CTudHZ61YUNDKeA1TyX5gPf4LBA",
  "key23": "2gg32dpA36bzdY8mGSMcuBab99t15vvtcgUk7MzfR7BtGsfULLXC3ogKVH9VNPtRAMxZDbYzEGZkPd1CvR9TtGy3",
  "key24": "zVDcCuzMgLPDDSzuBVPZvggiP8tiL3t7g1zmQYRKtudDWQyTWs4wVnUdQTpFGu1aMTXG9SjB575UhNz2weH8pLP",
  "key25": "5WZdt2S6yaGC3PsDQioYnejQ4QryiMtNqymVFUxbBfPV6uHUk8kFS4HDGwLKz2cHd2WPjD5HNWbyB7Vrm1JTnFL6",
  "key26": "5rXxgSSpvzHECizZSFSTjTSFxRdZZaXuEQRoQ6A9qp5vELXYo1zXoehq52ZdQVCRQUkRyoEroYoCNjV56Vrn8zYK",
  "key27": "3VtMCUGMRnHvFprdGR9hUHZrSkDrhoYiTHHaQGgW21gsDXxbkKKwyCxYkxtwDWvbPXDd2fkUvFk8zJPnafhzoZUY",
  "key28": "3JJbgyNXQ5YW1mHhATtm1UcJiMkxeyn6DL9gKvHC6VyLJwGua7ckxJX1djgnnmcoEHwvd4jbFYyLeFBYpyFJUwMm",
  "key29": "2NzHxksCNoRFaKCCbAdhtNvtP2xizDnt3BVZrCRZ9s2rHyKNBzirzCzyfcrQgBn8AkLVWvDjECMa4ntAZ5dVomjy",
  "key30": "5ioW4ZU4hz9AeLVcgUtbAMMxx25E2r6eCZmeLBNWcc8Pe8ATCs8burXsdaKKGnno3VypAqLYiqyHEDmdyvLdeyNe",
  "key31": "4mjh7j6DSttTSfzNpDMfeEfkPKT1jFhEdmevSGQHDujFSMYrazoD7G3Ncks4TAyP3wG2s5HvN496Yc328kXjv23u",
  "key32": "8R2R6BM7FEcHm98GJayDFX2rtki5zRa69f3Zua7mYP78sNwKV4iouqGbMhJA1jgtPSqv949h34rbqjFrQHdgytz",
  "key33": "4Uhb3AvBBBeod2rTad5N7WVxSXck5etCLBk2wnskkByk3JXgPQvEPomAWoaxVkpfW2tJHYJSf5U5zqhY2GEhRZQV",
  "key34": "5TXS1aGxMhY3hd58oQPZXRbWo9FdhnH6fPPh5aCwMqhGbH7G2k2DrJbWSwtcNtgkRwZ1QWaHjarDjTxo1nLLPrTP",
  "key35": "2mxHX9jvXXtb8bmS34x1tbouyB64DuXB7TtkwV2wwFu4fV8MfCg4cW1hyQZ2YwW31zQ6Ltw3DVXDdM9dLZTLZjVE",
  "key36": "2Yrg7dbdjRCSsxC7siuBwhvFihb81iWtb28GwbUVrzYQfPDPBGm7HppthhEQRHwcttBSTt1dfsdeGggxU5upYsit",
  "key37": "4LCXbRiJbppPtzSYZnoesjiMrdeJw5ZG8PqS2bdkTb3CprwFR6HkEkdS6K8vJ7vRFXagm9YVWyLA3MfwCKMpfJXV",
  "key38": "4p1C2cvafkF7SgkFJutgRJRhqqNe7LA2rLDSsJeMotog5GoB32dduko1RbvVEYAwATynhH8c9KSKSWPh8yUhT6Jb",
  "key39": "3jRcWPTJu9gnsKsxuy3j5zjkCWBpS4Qpw2xnzMzTura1KAorAFUd3E2n3djAQgvQeTNAibdiSm4t7fbXv37hKPRr",
  "key40": "GY4QkAEJnWc1dCpnXHV2uxNgK5fGL8jFiSD18yYKah6xu52uoH42eRdDBJJm9WXMabAnF2VbeeX9DoA9TTWKXTo",
  "key41": "4r9VJ1aXW5wesGoEK6TTxPyx7Sepv8wtW9r1RUjpq2fpmfeXxUtjTY3m6k6C6d4FNNR7uNGwX97cAMid8QTVute2",
  "key42": "4f4RxH46TayY1SwL2SwMsbqWtuMFHNmvJxuFTyJjR6rG3UPstpdRCh174zdEGf8isrRzPoJau8tNESmBu1LVsrAz",
  "key43": "4BLoUt9155o9HJwGpRujSihA4So3sLoEBsM12jqenoi9K7i4bTiXyZSFzTKYhPKxjs3f42xNZNK4S9CDR7vNZr2q",
  "key44": "44Sf3UApB9ZaM46PKB9MfpdghdBVToMB8aJeePXg2ChzU9nrxYAZNGb4Q5vDN4STHntr1XkcF5mgMgReaZ8f5WoE",
  "key45": "55k8AHXC2jKL9wmJHhBsMyQ7eopq82uCqhwhqC32HjJKFRy9vJ2hkHfpSkgT4or7tigxtNcRFi7bFJeLHFw883VE"
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
