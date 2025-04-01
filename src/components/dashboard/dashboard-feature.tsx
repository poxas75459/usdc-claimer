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
    "33nmhRRLqSeoaa9Ub7vi9h2BZctd5DWLgua2bKyGWXQJw9bFKWyB7UbaaVDiDXnkXpmDocMJW87dBZWGg2fvAgTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCJPPQZTbFi5iTSyD8edaRqvKYQAYNcpsKmxCw5ybiFznFFgoKyDzWVPTLfCN68yWtrmwEMM63szerJVgj2RShR",
  "key1": "5AX5urJJ1uPKXp9863eWxaLmwmP8QsT7mjte8w877781idjXUzn62CGZpqLryXRQN3BjibWG9fomWHPn6WLpVGK7",
  "key2": "3WtfEYsacha6nFdLT1HND2xzhGhXfPTWqyRhgPNws6KLiiEvbhanbemogmJi7fx3W5FgKW5uRUCQFJTzjQT7jGwp",
  "key3": "2jEuNrESGo5fvtbrdVmB7qXNR8Waog4vhRy4BEWUDCExs24MmkCvSVZpSpDgyeqmvccMjFtTotq99m8kcpDX7yFS",
  "key4": "4L2JRJw3LnLkrH6TdcLY6GPSXsDy2X7tgVSqqLp4wwCxFqTB7xjEULdzQi92gZp9dy35dYww7MDgtzFxxsRH7uH2",
  "key5": "5jxEHGq2sooKh5H2nVGovE26Km7RkAQmkB1JFRtJr82QqPNBoKrzNDyiqBoxKvund5UrqajKq9y5Dpy9upfuMjDg",
  "key6": "2vDrVfuLv3bRRhN1P5gp21kMK16yT6u1bRfA689nPBCURaFE9StPbjFeHxVcDXWNKNCXM6Y9aNAAD5kT4u74Q3G2",
  "key7": "4gad886LfjFsg7AKqbQ5p4owZXcDCdU2jaQzeegT7tSvZq995Az4CZDMztjTUDobrQHPKuCq1CMaSdex2p3JLzhu",
  "key8": "3B2MdXPuVDTZUiA8MQbPBQKHEjCNnEL6DdvgdBrcb9unGp8eviPSfcAGDUvBPLtq7enGCMtBJM42cuuXr1ABy1UQ",
  "key9": "5qy2wTANodKa898Np9zhe8FhPrYZJN7MRcEqs7pvdEi4a3kcY3jc7h8YY7WZD8m9vsnHUJkcYFFcKBfSgfxHXxrV",
  "key10": "4mhpudgcN79DX1mSuJvR1PpZaMyksomQP1kpuAT9RBSihuuoY2t3GfjmJfgvv3LWVZSU2caCh23FTcDgfLLgjt84",
  "key11": "LN2u8vPdp8q11ZQJgXDRKkFDMEDpEwHPrgAXSTYpDojVxiAhZTy27ifLKX1VP6yBx7kLGDRfRoLX8AGKjrnZ823",
  "key12": "45cpnizReY9qRkoGu6RhrMhDVe2dwEUaoraLFHhgMcQ9ckwA5Vpb32dKQZYUnwMz7WijFZzKuR4mHw2Njjo2pupw",
  "key13": "4dem84u4io4DutEtuRYmZXwUFDwNHiVnZByNo1kLC38RwVr7WnwdakZwCw5B2mjZ9jpQirSFQZqzZruY5urgUtQy",
  "key14": "5BgimTUzGuH9JKwqtnvrpqJqcLkgH65cZJAQLzWDByMSBZh47wpzUZYCdchXi4xGUqtUe4vX6PfmHDMY1WGDRTm4",
  "key15": "yiRXApN8rEAbkQC3sK2KdrAACqYxKYS4TyqXqLEUdUTn7Ep6rKAaosqW3Aj1XiF2QZK7V91ECq3aimL6GPDeEyF",
  "key16": "CbGc5aVRV3sYaxYXuHNiBFpX114AUXR22WVR6Y5VdM58WcqkzofWrHRgpvbP5N7hRxihgAg5BYng4w3CbWagtfe",
  "key17": "4DAqQUCiiEM5wephnm3qCwLbLNkMydaP675HTtMQPdtKubD7eSeoYCjb8rGh5U3qJ2cLF4aasphoHa7KVjBvr7ad",
  "key18": "3pMbZ6YaMM6RWCiAH7pKy8geLmuojfy45wzUjGNgbnVzcHe9s9AuhhSv1uZCfRs5qhKbbmT7bABDYndgP2pnEEkt",
  "key19": "2fFyHtsWjCT88rmFvpxRWJfj9Ncyx8zKuijzZvH6ZKpCTX9zitvZTgVsFdBauhRBqLRx4eNZ3cjDvJEHWg4pUX5e",
  "key20": "2LV7btRpFJQwMHuMB8hC9Gfs1peakXRJHkEnkHJTs7XMR8yQL74T8kScahLXFboJDxwBBXZqKMLQ6gGiCJef2Hv6",
  "key21": "4VYpNhr6T5hGGHjETM8D3yZMfaGnYbeYjhH8CHGfbtfvc82Cuq1w7ZScZ6kFtKhW9aNHgY7vbqzTcyifAovijPh8",
  "key22": "3YpZQSJLtGCd6gDQFGEvyLPXVVbdty15QHjBbp84jcZwXgQ6swMQTAgufnsva8omxZa9b1DWVQcpMVavGsUJ5Lic",
  "key23": "3JK9amVTW9zX18W6kQuhcphFpMV3eidLMB5XWYcf8x9zZz8ChjS3BZ8XeHPkEZFYQ4HMSDxm7vw7MEMtCvUogXCk",
  "key24": "3wGxzxQN5a3opwKVmeYCYSmHLW3c9YRV9C63CYsydYe7WMoZ87w8gkxwdk89DVXrW5ZNv1WepbXB6DbZPVutDRFB",
  "key25": "2MuDsy4TULPSzWPPLXXNpCUXWfcgMuRc6RgQvBq1edfgsCjQjMaJms43rfhPXAmSUCNoKvgZGbiQcnVh4mTXYRbh",
  "key26": "2BiwQMMEteZqLMuH2fCZGjJVqUYW6uWx7JfteGPPCnEyPWozbLQpBUEGAhEBjMy644c68kKN1eGD9DRg3zQnts6e",
  "key27": "3Jetx2ogiCJUB9KiQdFKeTTaWbzZafFCLH7W2L3HNecRweXyLWvtXw9t4gFp7RQ4AUDgT1DDU9h2ff99wtJ78D7Q",
  "key28": "4G4jT5cx31ireRkDsq1LyiHisbXJUBaSy5uzivFUcG4c1RLuiE2bTsNGQHCpcbTZPMtFzBDfpaBP8BDQZW1hnpD5",
  "key29": "NT63rJ347whMEuyf1SdebvN52NzSyV7mT61VpDM18Tix5Ru3b31y4DxtnfGR2B95LaVKStpFg6MDiNM4ecBHDX3",
  "key30": "54FqFsi3E6JAiz2DXpa6vH26aEu9yJ6B554m7fyWdG3rMD4d5GGSfDZjvvmMBZRRgBLyLcoKScTFvHb5EEJuzjYG",
  "key31": "FN3Gfv5DqkAqYqPPSSNvyUSQEejnCrBwXxjg5y79fcDtN3bqAVHV5HaXWNQxvhYzBiUAghW4C6Ryfa5DhRqwvFg",
  "key32": "2YHkAgN8HX3LUM6S56kCiCh4eiiVGjBCLJJRRoUYTm6EY4vaWoGH9WWFahXxRVEqNmCcnqsfQVux7uTEwW9JwtBC",
  "key33": "4uAm7nQ1PPydSaBFYgy3AGw7YGahu7fsUhgysPkmdBoeZy4XmT3PqeGyyNYBj5DxfkxpXRER3tt8M1K7KeSpvVbL",
  "key34": "3L8WLS56DrJsMhZe8HpAPFHH14BnLGY9SSr8uu69kxsxS6S6WYm1PWaehRGX5HuWSiEeQnj1cUraQjMnqaAb1yGA",
  "key35": "3ccWjXKk4t33Qno6mquLVWfr2rdv1MvtuCtkAzh9XMxNnQChaoHvzdC7xmxEDfT7Kx2HRpvVqgpGnchmYVu3Jjg3",
  "key36": "2zia7bL2nrs3i2bbpfryrvXNs5HT3f7z1qmxaXLbYoYLFBBZYLq5T775dv9FgATo95x4AUoD1cJTRSLvC3RhHUXx",
  "key37": "4DStwaXNyiCpHgE6SEYnjfEXaKqabnmxWgQTw1Atc96gkKpHhrvZnuEZiwywPhpPmkCqsnSoHtGADfMYLGzAVWXw",
  "key38": "H4AfQUDfSizFbie7Bo21Sm3rjZR4mMhaTEqokSuGhQLG2Witw6tfTViFd3kQY1AcVk2MBV5JURkJ3psZhpqwhYn",
  "key39": "5CvhgRMwWcs2f77gbcg61cAik8yTk9VdELWrzjWTHrFgwB2uGjofjdQjMMHEFT4gM2taJoPfpLQjdJhKG15zVqCz",
  "key40": "3n75Wvd7RuCJpYyMeAM4dmVPT4PsEWCVf1YhJbCXsQX5iwugdN7TbjyudWTmnAq1EtHRCQqbjiqBz7nLYegZ9MBZ",
  "key41": "5N7jmtU23jw7i6MxjMfbqh42WGfj3mgDCMNZQ5VT5xqC9cZoNXRuZRSUDQ7za8ppFpqMNptWmS4AQPMHj1XenGeB",
  "key42": "4nkXYh3u9SJhQ5tpSRjhveHyhwQX1difM5hjAopDqHEMhCHd8sTN8pSGiPsuswSgLy5zASsY7tFAQ6kiFFMyqBQB",
  "key43": "2gJ3Ub6UsKHhqucY51B2VxC8Y8aXsDNU2NHANMHqX5oUvgdh99z8Yu7wBps5k6wfugVAHM1JRoZf2Hs6cmnvCCjx",
  "key44": "56bxizNCWpWMrLv7X7kordCrY9QRDt8kze8yyqeJJMAmNpJHa1AjtzeTMrJTxVc37LibEaRNcUZME4jeJxKMoVRr",
  "key45": "aYVXzNxaoYJ5TvSpkqM4ydPYQaJ9Hs2su3KdLAx6uRM2oE5vzVPcSasxEemxfTcCUmfAKuSFgSoDqvVxRtZjMGv",
  "key46": "5ghqzPfLgeNHvnWKLxiH1LMGLHK51J5UtXAcmcYRFZEWNMgaWkM9SvqcwdGV2xFiY5b3PFotWQJcfmBXxZYVhW6G",
  "key47": "3JvAuWcieBtZTj6GPGUSSPDLnvkrPvU4Wnt8Ciazrxu5fBwUJwcNd9r4jniX2Ynx8RrFjdQfS9VRNREfVrJZnvtn"
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
