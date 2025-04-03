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
    "5tt5KHJHX9vGtSyWqDaiurThNWCpRKk3C8ymUaPCgbyyjGKTHD3z7Piz3BTXeiVeMC6126R92CXJstJvt3v5gmGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8rJrS4XDjuwq2YxfDHSKxhQN3gGP6YMJJzkTsGXiG6KnDfuPaRP8U6P7xPMr2THdQe4CzZeKxQh3VvdAHSAHM7",
  "key1": "2q1h5JiYoVSMHgktW9JjyNJ9GwtHW9BMWQt6C39eCrrHnyCtLWpXehpXeBsNFoEgsZPiMgjJjh1Mes1kRv3x8B9F",
  "key2": "sXpzCtjL2EDkRGic5daExVJZM47e9zSbga4dt9QDXTbUrW6ozvWy78wZ7vNts7gvg5VFxHXcgxP2XtBT6gHByxn",
  "key3": "DoJ9WJfGo1iSw3C6ywRwVT6ZDgHjWJ4WL8SMhezsAwLzEWMqQ6rT4PS18a9pLg3c3B9tRwhCvWA8FCaWvez5dzp",
  "key4": "4Z7WqjU3XmAHshbnDV5eTijuUPmA7hXMCJRbJ2iFqH3qaGyHQjZyFhyD3AJeWWsVjiFoXqp3xxCq7rArpYgiT7sp",
  "key5": "3nr3RsxucnmaXtEBD53q5MkubeJksqRtNvBq2DKEn1FuAn8JZBnvRRDtGFVLGQPgR4KvtER2dCpkC59CvQzzNqBj",
  "key6": "3oEmjtXZ26dQE6AwF6UfV9jZxfJu5QJG4aF165FjPTgW2fF2fEn1kUE63i1tkBbsz8QRtNSyLLZ7JbrfbiQXEaEJ",
  "key7": "57G1SrY9SykZMa8eZR6SPZKFbbij6wJicaJ4EE7VZobhZTDHxNY2UmAE2wm6h894skyenBiWe4PC1SUxTRGGknoX",
  "key8": "4Cqmd6tZ9hKQb4WCWS1yHXLijuA8tWwvj9bkZXYWBLrJPCnt4gBCfAmgod7iDJTqAThLKqRcPCFVySiamfFbKnJf",
  "key9": "4T1cvUFUaoHLCA61EXYAsCkfx3jUYDEgSqooV6rmTqMpdwKivx1WGXMDizXSmQ1gQiAEMMzB9xGxQNa8p4CFhDPW",
  "key10": "47DJxQmugtUCsZXe1sj4MLzt3q4qozpo16x1uHtNCstz1ZWFgA5LUQFcnAANBT74NQ6oyDosz8A51epYCmqLQkDG",
  "key11": "22tsLfxhhpa8P1vKaj84hhug3wLyv8zpgfqvRKv1nBFgduzatrAYATXAavcAMeFjEMK9vz6nCQ2syqTxTScwCtY9",
  "key12": "3pV8uXTwRb1C9UP6Z9auVnYb9p3Q8iN5ziZMsTQAjQqU7bQgVHSi3TQuukdwbcbveNhfrSck68SinKEMZ9P5QSYV",
  "key13": "5i5pAc8qBoB5LqtVetX3qhkNAQL6U779vTYHhPhP2Sq7LhD2qdrvbnF3HRz2EFT53XYaxEgYQpwRzgmkCpLU9MGH",
  "key14": "2wKNmtned7s2BaVdZNQzaLcz2PTY5htg3JpNsZXx3DfUXrw5o9bSacHiWh6dRDrjPpPetuxLJxbzPnQCMWDSj3uM",
  "key15": "4jUBrYdwTN3yDHEYfjXfcGCjMuRhMGEtYpb5u6KQMCzGsR4p8yxXhxPVRhqn8Euwh6GYwR3UroN2PpbVndP82Kup",
  "key16": "4xCs2SoA6hVTQe7G3x14L8hWBxuBAuSjiQjXXKLiRAHeVSqTzioHyHYVkJ2Ev66g5Hv5s2DqDaamhCQh3FE7jFZT",
  "key17": "2Ap2RHLG6tmmN9mDWE3i42QXFgsEee6iqDqUneh5FmbxTc7o6EKTfs3Yae6f5YLpebyHQqcQEjL16rmt2YgZhbor",
  "key18": "32Es2kZ719cqMJEuxXcSJzwdENdw8BQJgjPfRx9Nz31YQzFLkms4AD19ZXgfcbL1wcSwQ8nyg5LJqpUPgQsJJCcK",
  "key19": "4jpeFCTXf3M93pagS3oeqVsUNsPpSe7wQQHde2LsTQnJoyzXfVRuV18ZGEjkoZw4o7A8Uq9pdANmMhnHXGfhQxb7",
  "key20": "25MC67tW2N3CiecFpApcMSB4PamgZaebXfKRbcPUFsaQhzUwSCHDTMzDsTDXSxRxF8xEvSiVfwYsNvBqoB6yWXqR",
  "key21": "5zDUSsMvRFkfCkKuaEVVYwVSFWRajPmzr6ZP9iHXRCC61hxSkeVRJfECdJ5iEQUGgMS71QcVFmWnESdi3JTh4Nui",
  "key22": "4HC83mho12vcjebi7aRdeDrMx8XZEkegTtEEtpaGfuMmWe1rC5eBCe8RjBZv8jLm6GMcAcXnX9bb8LdhYw8WKdFs",
  "key23": "2MhapXQfWQxmWAqsr89rhTSRKVAkgRe9c6eL4c2HWb4ZYRwt8cb7c4b1NHRBqVbaXRVQWx7o5g8MMFdNzYrzSwj5",
  "key24": "4UEqoCsEzNUGQZfs4EkDWHyk3qrpgCnow63a5Z9FYUqPFMsbquaAqaB3ueESNYysCSZ989ue2CPrQrorVBMRcBek",
  "key25": "4UULoM5YNwPnLys97PQFG5VGiMq35KUwKHsdWshdnUmY67RYaUWFanEZU6WmE5cgWscuVhUvQ2KbZGutkU9K8yaF",
  "key26": "2DqPt7raXCJ1fw4wuyiPgCP3F1tpADMTiVWeTfrnv4DqNAthyV58Ab7UCr9UqMMWebpfmCk8PGnsrmBvAdPm8Zta",
  "key27": "2ux7HFWyckjgAkknbS99LFTeV8EysAFKmkfxzX66bNhsxNqiyDozxFSkQ4hGeytbBo8yYUshmcWre4FjjFq6mUSs",
  "key28": "3vb6KrwXA3ExxK4AJ7gvqoi1NEX7kjcVdMoYaH5Gzh86KbsFV7akw2MrHjt1kBUkHqn1jyEWTozvnXCHKVgKaYPC",
  "key29": "3Pw6xt5ewuVSCv9rEE9Md52PQwXMz3SRhF8WWAkTKoQjZ3zKs4JogeZBAVX6yK62aS2jhe1CRPmgPVS5DSSkfBMB",
  "key30": "62KYVCLQBpx5rfPaS1nV8LBsoFkemxWp26o19t8XfDo8dbZkuLWkGtQWcAgUSLijiVxWQS2c2Tmt5d1yow16xhTX",
  "key31": "4bEudCemM2zFjSMJYUpWqyV2tmSUJJnrBnkM8cjebiPm5onVvKcpm3L7LRsDmn4Szo7baYwKn99UK1xy28ePhv5T",
  "key32": "Q8QCxv3W5dvvz7Uo9V3GDSzeLRPGKhRbRfCBdjHa2afnfVDvWDrkXPgFfRnmZUSHi5TGFM6MXuKvnzQeosYH2NW",
  "key33": "vuB9q9E3qDf2mZoDVS5Pd48yNB83t4NXMueYuKYvqJsV5khM9nnqwmjM5raNtxmZmFEdm53YyDaU3vL12CvGGRj",
  "key34": "2RMPh9SBy3sxv6YFK4gBwSxU2U3PTrT7wrGtDqwfJERcypEucbEywAsZBvaBJxMvUXBqdJMuhbptiwCMFzSW7NzU",
  "key35": "5RNbSUR1bCpeZsQtrNsBPxZxwV2aeM7AF1VSZoB9FPorqDCzno5fVufy6zCy9SUT9XF6FngpMpu8yceVNcjK2Xuu",
  "key36": "4jChzF12q5VqBpHpAMFWG1LZBLeCbgpaxWwPSUuVJAsQmRRtXhLdb7hPomviQNgY3MDWBGe1WDnZ3P1e64Tixhfh",
  "key37": "jHZjtBifNs8cSeeDke6EzVieMnQF3Lf2xqoy8JtuMgq66RYrtZ2mVyiCe6FEf6uk4rrqZYNvBXnntqLFjq9fR5a",
  "key38": "25fqqVaZbSPu7TNBWAgGQ3nG47MWNw4S1x4faHyhZVdXMcVKejajAAj9WHxmo2nRirQR5SGHTyiLpvYqPQuaXtbW"
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
