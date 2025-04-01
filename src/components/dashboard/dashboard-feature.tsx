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
    "5yiCDLufCbHpRd2rWFRU4CfMxwsZQcRiYbqevQZ8UbMiQQXwhs9aFSy92GEzQxQBNpak9Ahkpmp3MqktTEbeLHCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8mbVX2driAKcGA5RGM9UtZr3dy4H5CtXYbiugfYrfLRBxuBKHY2t1LQYwbzw26rEkNjhJrjQ3GYiLDSy2BkwtU",
  "key1": "5e8oAY3Di7aGkej2UeVAHeVuThRAv4DWtgLc2zsVR8LNhXCGzDs3CxiL5nwjZKXHs11LjBbkveAx8N13sYjHFEP5",
  "key2": "5UafxnFCuEqCnKZSLLF2mGTgE2eruM4aHtucfdurxmLwsfS8s3fhoWYAAVsvJyWNq9Mtaijj2HphHzAkKitf4KyR",
  "key3": "4CGugQcCZLAyqTB1YLnbwNkWKspmYsAjBpzbuefeXWQJpKLmMGeegE6MsCK6kCPaR99K9STics9P3uuAwpACz8qg",
  "key4": "h7CfRYqWC9aqRuTAzpLWpy7MrAU4FnAXkEgqPc5WdJCNLb88AtSw93PfbRwpMsgNAnPKFF8z7jFHbuKfX6EsknQ",
  "key5": "3mKtwEerE5RD4xJp7MuwBwLUyB913mTtYrWgxQMdBDUHibNqrCqaWdS6pVE2g5ZkBwY4gyUQgiWsjTkgNhV4QBsa",
  "key6": "4vytcwncS8AVypxDybBPjq5VeY2j59MKzdiTeA7iZ7PJMHpXDxavH9EwwZbDDevcmQBFjDe23Xf6V7RwFPBaTiKJ",
  "key7": "5kTMkLm8RR26pTUiVCwbpkHT9LMMB9xPPiL8uDmYcC89wUUzp22t95vbo3n2QA9eKYvRubEnvjLjwz8BMKCZ5f2X",
  "key8": "32z8HRF9ogPwniQx59q3UGJq2kNmoh2pfqP66gdU5uxHi3B9jk6opQ3mmqmcJAoq4sohnTgNkgP22UDRnZUpLncA",
  "key9": "5uwNeBW9AuruUtAN4QiQVoaMmc4foKj8R6KeS1PKRb9yuCaHG5LSDJ8YmYmHKSiFyfMaiRSyQ6Rnc8VrxCJNcf98",
  "key10": "5bfVYce78JEYipmx6ruuJLKScKf2fi8EPPkPfC2rVcMUakPhH9YHK4WLrnB6WPs5sJjs9uuoJjtie5JjoguwE5TN",
  "key11": "3ZKpcrr2oi3XfV6QNJMJk97yETQTNzavQLaqJ9wxjiaBDaZy8n7E7q4yFgGBHLwWydbvRho78Amt71aD7JF8z8uD",
  "key12": "4RUQgxv8Qc2RKXNEv7YbD2NSBwj9aYxaCPDJP81WdJPDAquBBRei9bMw2QSnS4nahza8nwy8Rzk8sVyAbHamxt2U",
  "key13": "yXb3Zsx7aRb3BKbuVAA3euNi9716KvDHvBJ3JF8eapJTrPAU6D5tJMeLPtiuERAwebNvquj4VrSahqHUxrpUh5U",
  "key14": "5fQi6rwCMXXuWsTHtVZrjrWMLhQohhycr8enQp7UahSHfesWXrUprATzJWzgTBhzoLvYVTASuCyfwaR3Kp6zRfvA",
  "key15": "5YVNd85rCeMiNTC3vfZVjjyC7RfyLi2R8Xo4V2iBqJ3EZHchtfRf6txy3dwGvPvr7sY1uGbisuVzj1Z9vG2XXA6y",
  "key16": "41vQTGxQZLRjPGUfHT5YSrovXho1LfP6td1Rn6XWk6wCJTdmW9o7xzvPpU3Pxe7tK4ZWYnn5xNbc4e596V8rtni3",
  "key17": "2Cj62rWBepFfXed4NRW2CprhERPSDwPHsbeS2emBM3UUJKkZvzgdicHdHyJzG62uruCeKMfpMNoGmVzKqR1d5Vap",
  "key18": "2M8dFz6ZnFSrW5YpqpHM3vQBSBxSfLWVQRmxVvWeufgq9giyBMH73LK1QB5rmdoxypdo4AxmxMq2hu9GDvRo3Yya",
  "key19": "4kwmZGYaM2iAcxboxSVSgCpK5DeXSPAJ2TYYxz12m7fG4ViWZU6bFyVtYfyTPrRJ92yvfgEqCjNPov2TjzyHQ2T9",
  "key20": "2N6ANNHfZbs3giNiveLzZZnUtPsccMWdLYnM1xbp3LBXbVEc7eSkrcEpiQRBactHxJ47d19cuPP89zjv2TW58R3C",
  "key21": "2VfeegSwsQwu6hTjyvz2igbgdvW7Ybb4hbWFQZwjS7XyntBLmPVYUVvTm3RDEngd7hMxm7mWNn5FXuEx8STNDhCu",
  "key22": "46HKqVQvhGNKRa542pKEwdJ9FYz5LDgvV8Vp1CPiYoHYrzcqGLn6AkAapBVCYikPYToHKSdKtFUAHfP5VcX24kNq",
  "key23": "3Peac2tWhGDc6Hi6cvPhdPM8cLB5MeqvbrtK15rPQVQ9ie3MqPWENDysnX3NdsPuQGSVJR5ZasV82NKT6Picz9Qy",
  "key24": "2YMmVLaXJ34rAi1TK6ijnEpUDpAHEBLHwaToN3YLhpyDknQSiVigytiVKZZZtCPV7vHun9LucWikTxjDxMYjPey6",
  "key25": "27vmiieEYHuX1bbUjSZidmEAibyxm6K7LgP7ELCfjNM3an3TwJF2psT8o19JBBvbiDJFT4v6e4zGZW8z2xAiYHhp",
  "key26": "5hiNLuUYMparShKVvtBT6aqkEgqcdBWHGKedeS4mDj1FNPbnUYF7QWpbzA9sFKUMW9EC2Z8dWvqBS8bAxzGmvBos",
  "key27": "5zxq6uaNs7oGU5P19LHUvZPdMhJraRz6Cqhx3xa4HnVT5yJWqwHhmsjg5yo7219vGJ1b9QgMgxQN5pp1aC1qkuxH",
  "key28": "5UsHDaa6j3hGVgYx5GETfYmWFdaVEraVKtPazrwGT4KPhxMgRxs6kYGpAkkowS21UrhJh2mFt3rFBSxaW1MGSKeQ",
  "key29": "3gNa3hk1eNHSFJQaxLb3DJmXng3wDiu8D9SawrFCLsQf1fWAfDVGVbJWachTcJcujSQiJtLGB3rtr64FkuVfuB2D",
  "key30": "5WkuLu7y742TNfuDG2a7jKnuYCBAoAUbjpiArWvZWgkVnbq14jTmUjY4UXKscd5WsZi79i9eAAP34Rd84eFVxrgg",
  "key31": "4vZDxpS7PfgVLhWRsHyrDVx3uSbJUXwKuvbKuZZYz13zhSkpmjqCfs9UmXFiqtY9vFXB3eqVqHZ42LEVkKQWySi7",
  "key32": "44LfiF5v7SNMPzNFULTXtqmzPj9iFKpQVri4FNx2S1zSpKf4XjZaKzgUvTjo2rnWmfVooKeTL5FL66GamuZ885H",
  "key33": "4GUGtYMYqiVVrMkcDxjFqBvzZ7iZxXbF1PNGWf9EedrQZ3aEG1R3KY95uPX5VvZtZB2ebJaUEep84A2FfQ2Rc7TN",
  "key34": "5oAWTYWct9GdSip3LJp4AiBk4Dh2EHeCQSDKFJx5nCPVokMaTSWoEAXVTRRJ4wB63vdJMkLR2e8xiETFJdEt9yfL",
  "key35": "23NdfCf94v5zE96fLmgc3LzNp58HMsmeW8dk7Z5ZtnjmVoxpx6Jn39a7c4AYwbuKuEt69XbZjdbgwunrDQxvQHtj",
  "key36": "qCARKcHntFdCa6JfPTjDfHUk2WDwSzB3zSos2AwDn6ERhgpYN3VjTaeJhRro6fWZfBmrGt87UcMdhBw996iU8m1",
  "key37": "7zun2b9ds9CVp6A4ZuJ6DQAGGTqDrhgqia8NDLXC1JQJ88gqUJHXmcXsyBfSEouW7KsDYXS46SdVASvA2KZtMd7",
  "key38": "5q75p4QQCVgfo5gV8aPhnr12qDzWYwEn1CRFpaMc5mpfJs5aCvYZPRSAeEtPnmx483mA47NMd4JuCBrg4BVmpG1m"
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
