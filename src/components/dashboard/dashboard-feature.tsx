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
    "5TDXmzvg5UD4bWp7Ei3vgUyAG9gNEU5H2X1xYAuUWeMx9nbUKiMDi9wDmvPoxRk3Xy94Fftxk63NmhKQaCEWiNTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Uhk2UhEgc8pFnKcSvKBTebKCdw9GVycM9bw61YLgtTkPhHF8eiDBGfJ9sLPf6aNypiveK77KK4ejH61sJseDci",
  "key1": "4CZut2UWL8s38aHoA1HHeSAkUwUvLtR4rb8VK3LF8S5C92ciKzsLugnDZof8rQo8SpBzE3w7mYKLaZJqYVDLppZZ",
  "key2": "3Km3JzFV9zUG1pNa2bL7yFk6omC2o2tgmG3MFDLvxXabYeEjKx7v58GxfkTWf4U4ZwvvP9E6DcynwvrGriexoRxi",
  "key3": "4ri3TGXkmyAwcXg9iggtSJP4gpDtL2Sfx6j4gTS9gAFRNzAmDd5urkUMxZwh2Apm4AYFtztRtPWWk1oHofRAHp2V",
  "key4": "64T8snJfqeUWRGoSZ3mNYMqTampDUrKGzZE6KUWZpZxZb6hvML5otR22kuvH3FtqKXY7cb3JMdbDB7JjBJPMcLBm",
  "key5": "5swsm8n6BNwcwAPHFoFojPWrPt4LXHZVoG35AkWMkGVwQSL69HpFTSKvDvZKBsqHoUM7pWZQfcMYbVGQNeXnTrM7",
  "key6": "5ruMxJpHSH1uZrxLdB9bJMWXVrz243g3JHAWoV3FsvPVyLyMGsyiY5Mu5Usowx4j577TTzAWHX1GXan29xH3rWsG",
  "key7": "3XqpHSWddEFtgFfUxVcj7u77mTbpKMURSxSEaxQEBjHvgEgckdsudLkgpKPcvSNssuBfvYyMZS4AZFrDWRukQR13",
  "key8": "3b9zWbP1ju3sFjr4AGUK7qsozhDgRH51ezeyTV7cNAGcUSgVooSyqm2opKfxHZZV7rypg8hX8zPYsTCpZWipUvBJ",
  "key9": "2TTRvsQmBsPH4ja3C5iBUP85chezvE5b9QAFdgEpQCRKtejK8VJJFACmAJCh7vUJrMmsSeeiCXstNqfXiDhwMZMQ",
  "key10": "3BP9H3RiErsA4F1GoiqS7psg8b53iMWN9c1KmgTuNCYJzMySSSAQxKcLanyw6SgePfyeTmWBBzM2RbPAcZaVvywg",
  "key11": "3KBV9cPUDePUQeGYBS3kG51Yts7tb3UykSUiveYLKrr3rTriZqLy8ZgSBeqhGdTQiCvub6z4P4VBkLXuQkVf5vTV",
  "key12": "2sv8NjqGt9cNGVnj4w7RPppKZddkjPErgtPD7vfvXzkbkA5vzpFQ54rNT7XkdgSiyuH3ft773XiULJkW24dj9f9Z",
  "key13": "3gjkfbKGesZBGrEuws7Z2E7zCWbGZ8DdnJyjx9hC5thVeJR5Nn8t7JaZiLnvw8HYDyPYfPiDz1xaYdMYV9imi7vs",
  "key14": "4CuuZ47fmE5mwyq1oB5MUS7gjESUADbvJsvoQAPbmMEowTRk6J64oSA91b4xR36FjkQ7RRZ37gW1E8c56F3k2ya1",
  "key15": "2Xt88K2tLhgdC9QZ41XfVjUSShGMwH5DStbHtSeyiqZH4JaJX2JrMH2zQqzyxMJzynrN3uM2zXC5GYPh9maQtLST",
  "key16": "2siWYWAE1WkUYRfUFihiHE5bggASfCE2ZHnuf5VNvfgvhV3TjLGQhgsAGwnkSRD8cWoxUgJrbbkPZP4qXvRqRzVP",
  "key17": "5exNk3gd4PR5Lih6XKA1h2mH48d6tCdtFKmoeAX8HqzVMxnrBZXrzpsrAmMQdkq6ivpEEWjNTjU5wRZwFWu34pJK",
  "key18": "51KPouqWHfegX1oU2vco16KsNMrw9w7AuNff6KiY5xe7tVzws5ToG6uUymsmd33Sbe1En9GUKqRLmUyqNNmJVyQL",
  "key19": "wSwYhNoJ7PQY8V8wF9VgyLT6pwmiUpMH6sWdtEEUq1JaTrLuU2cQF4J6mf2UrmaoJWSASeDyRXBvHMwpova5Lh2",
  "key20": "2dHcp9iqBw8H9Ka92sRhFSExbmLP7npNiEtiMw2U9UhodVtUBYsiHf7JT25RkFjwKFNbBw1gaoCYQwEhufGnH4pL",
  "key21": "4VNdPkuaH41DQvsnpTk6H3ewjy56JV9wginmAtYRH32F5GgGnkU4ghDUpkEkMpRF6AzZwhooSBdTLBrV3oSYXSHw",
  "key22": "35jVUEkQaTzPqKHCWUVxHPEtr6KQyRWEPLw5uUg7vZs3yx7a9ehB37xg1kDYdqtT6xxHrH8nU73sU3653tMfPbwZ",
  "key23": "312PHoy6QwhLbbGUDXTYatc6cA4PPV9iRx2cjLRUt4ESWZysMpJYpW7uzBHtiW4fbTmHfcJo1HWFcnguin8ZJ3fg",
  "key24": "551gvA9YJLsatx7rGuNmsRknoyBQ1GrToFAhRhZxGwTANEY435iMztQQGwTHrV8gdQChDG5LRGBee35XvitAfZL5",
  "key25": "4oAQdeQLW6NrnFnZGhzuMAWGUvguJyLF2DJ5Nzsh1wsq19awKuY1tdn7JdYC5LppnSB5XnVurkFUYo2A5KLTFjrS",
  "key26": "2P9K3tZstFUge4eWcZCAZ1dmg7UKkWZ4y8qmgZ9BYAV73WbUT2HMV8Laa93pc8VfLiz9S2fB8BQxDW1QDp7iixNt",
  "key27": "2ReF31mnnP8tTkgUUrrxWByqVCzh8datJVqv1oE578i42p6uDpyQTmPqFdJQgpiPEqfimRj1uXHpkptq5pvciKsx",
  "key28": "4GFpFpEsDkUE7bubi1NDpoLm9dVei6s6YBu5pD5iAPbprAXzYMZhYTvRjaaP8abnHpft8oq3Jj7pECUjYujKoEUL",
  "key29": "RhrQt6oYrPCmTAjEG7ZHagJz4c2wXkAqmA5BUgc72vphys12JzJrWR2GAJcPaP4PdoHZqwTBgsy27PHpF6sXkAi",
  "key30": "3JAJrkqkJjX5nFZswc2jrvPhCQArYtnT5JJep75HQQbVzQ4EpquudwPiB7vkgBCQGz16qGFEeKz9xurW541FV8DT",
  "key31": "26rmLyyL1j51UoLcMLahU4bdEPEr8G4NspRRJYrhXS3GbvcTMBo4uxsmynaPKPzuokKQFxKRMwHL1beL9TVTYsTe",
  "key32": "5xwYcRTccodncBNfsb1dz79sQsuWupiDpe3i7spWJF7Mu2qEK875VY19aXgMsrzrtoTVTgEXjzPShhD8YVgoDcBa",
  "key33": "ynp53YMPM8yi16N2DSCsTBtoiR3AYmwrrQSv6jxzZVuqos16gBUKrAshXB2rTDAKHpXbnYfzsGZVEUJmQkNL962",
  "key34": "2m2t3puvV4TB3u8AqqcnB1pngLR2K7kGwc5HbDYJWgvHnCHo2zyaLtqMh6TWoaKuUyP7wuQ9D4V6tU7fDHpe4dbC",
  "key35": "28dQ1oCG7rcN6zTUL96wYXuHRgZ3s3vPZyeSsQx4RJs3RZYsFB6SK31zM2Ne21E4i5TGRVn75JnubjAFTyTGC8dJ",
  "key36": "5De6Pdx42fTevNM9JuTG1CXg6DivnpkCaVMRNedgDhrEF7s4QNAgn7xNg3hdu1ZyJ3FaVPhwBZ1sccX9c3d7R5gb"
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
