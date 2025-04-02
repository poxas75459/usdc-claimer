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
    "65XKh3nLFxVvamG2wChGUL3ZVHqqeqwUiXFGYJHtUFrB2Kh75nfZzW6ci9DA82fKwmNFByLV9t3tK3B6dN4fAM5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBadsqFcL7NfmxeH54oTiwPi4TocSywpuBWW3aqWe5iYNG4w2mjCvJmLC3rxFoQ3vbs64Phf3XH8cf99MtdcDVk",
  "key1": "nn4QMr8ZFxWCAaawN1ynR78NPEKc3mMyTvfTSxC86FPRLdvPURLoTFhh4HoJ5Pe7uzPMy667JK4cGDUJC2zk3hq",
  "key2": "21BXkeCMM8gNEpdc1Vs5pNVkRGngDe3bUKxU66w35gngJoGgwosV6VqfQn7H6CTmn2LmeHa9MBevp7jhV5gN2Nem",
  "key3": "6LnNFA4nDuk6Fj1KaRwddsugSq9CdKPJ9LK5geuEkUTiRibG8uTKBPwrHF8WDjKyiXdfdUMC9ZVH4FGRwafHeeR",
  "key4": "2X7MnRo53gXKZmHNkxDndg9d5tLoW2349JJx45xc3Ynk4W5TbeLsynboyXoYMvpdZ2835NxVmAAFgpkVxEuftxsY",
  "key5": "3QrcY9QNXR7ho1zrCBq7LXjRuphw28YEU6Br2fQZ21E3UTx23fDEhvPHhWh5zZZQVE3gDSeQtpc2oybE82KKxmvc",
  "key6": "2UE6mu2mjL2R6Bjip13XHe7TtotetnSMu1g9zsy4K14Cbqta7Un5po71mbEVnUGZDVfZ2oUJQiLJVLeMEA7ByWTb",
  "key7": "2NY8f3RiBgcH8gsuPw2Gm7fTf4DU3fqsFEQcBEcVVkFKS74rMNpxbf7HMDXDk2uBPZe6gR7iDjkKrjCT2KMd9xPo",
  "key8": "5uCKTLvW95QgJ3PgAzHQLURkdgvTBRbWWprnhZBh9XqDVbXHeLv6B8hg5rffRhmWF8rT1Nfzyue8r9WfYiKWGuYm",
  "key9": "2KLHbgDFmBt8XobJP2uqcBejK281QrUy891s1BGmUBqxHLdMncvMJjwUnSP2bFrGVgw8autnPyG2P2Lj7nkvdw2i",
  "key10": "5DSxsBUrsGobHjecL8WDfsX4eueg8fZL9qiQTSPChPcQ9NoSP8MCmmmWzaUJ3ojDnio8ghQDHd8Ti5YxDCZ9wXYj",
  "key11": "2n2xfo7aaYQT1FFkkoT1NF74TgsUxcarShGvXJStxCWTLZcCzva24JXCjoRU4m158m4pFBpVEsjjGZZY3v3sdmMd",
  "key12": "2CCzQRFexToNmGMD7NDcJMQWpQ2Xt2GxCKCyJ3fbp45S5phaj9qb8C8axzpr3eXgjexC6VHrFbFyFTCSXJKGaFgb",
  "key13": "2oTaihiteHttpUTBbHtmfQHe1AEFwde3yxPAAq7x2f6TmutwwWYoQsUuTaYU8LwpkuFTo7zVjJZ5yd1Xf9wtCJhD",
  "key14": "PT5FA4FWM9UPWmX75zhKdxuJzLa9gFLS8QkVgaKCtGCrWGacRuhHwe1rDbDHXUpb8FC91rb4C6XAdW3YGgzhwX3",
  "key15": "56CBDsnLQN9eWUZjLy5NYKApM2tdpqfbxvVvx5WKrZPo2pM74mrvrEqmeqfu2R5b4R9tHXb2uyKkBd6rRix4ejFS",
  "key16": "2DgTbZTi5NfrXQWsdgjqVKkh3jCg5Hn6kHfCieTrpWJwtv42Rr6CUwSyRFq6V6tNMdRBZeXMpPaWcPEm235bPJFm",
  "key17": "4qi6rGqCLxNJaSAfFak3H31qvDHG2FKECkevjCPxomN8mLXmSgdHuGpD3ajPm2A8tYfpqT36cinYQnRTHcrGQ5Hp",
  "key18": "4xrj9pKNwbNakzsD3PPBf8qvJqY1Qmf4STocVxg3BvKEYVgwwW16ADPaQVxMpT53Hn4rxh2LHtdp4EXzLciBEHxe",
  "key19": "5D726v3hRDgDGBG6q3EV4gQadsxgXkVuLH2UNsxFoQ2VagsacCENWCk9EUobGUkzB6hf5ojotwTueQEzLLa2AYgB",
  "key20": "5KHbz9NUhHEPcA653EHHfp3zcZmXDDp4SsFUcpn3D8Fve3pDcPvEatVLszJMC1yU2gV5iHM5aZJZYob24bCRzovB",
  "key21": "33ZWULmaZNVnC81rE6zhBGHK5FiJJnhKzszkpCKDUycsHaf11J4xDZhHqHyqnLvqbj6DBm6A8pr1qGuZu8iyzkCP",
  "key22": "5o4Jyz6nhS9xdTM2t7c4pvFZWTCmPAbe6SCUPrR7CfSEdfCFpLyWrpdEJFUSm6w8rCfU4AmAS6tSNKF4SSejHzp8",
  "key23": "4rD6vbWGWRbqM4o3NhkLF4LKqYQcECwUaf9bNspWti3ofq6Fq9xVGWtgaNYXqdZESE2szjrSLNugj8ftWcozF1R1",
  "key24": "3ZSER4F5Wxs9cdNaUB9D9FDexGrCjgKu5YneuDvGjwgcAxSjLytuvUdiujYqtSoaNFkrZV7aZG7UcDhhmJXupHDo",
  "key25": "45BuwA9KA6QGsn2PKQKhy9bNDttr6TwLiSsFEp1PBr798jFuBVTCekZaYCuYza7nkC88YvfnZfouJ3tz5r8JTb49",
  "key26": "45g2AUjvQa9eTNFXyvPLrDnbR7pAStJyZi1mLwxtpZsGnYG5RGGBaP7JqBKQMSd9LYM8onxQUVkgAbj6JFJ8ZALp",
  "key27": "5rZ9TjPeZzqevytVK5WokXaxoBHGbysqgsMbZRSJmw1djWjysQ9NvPJeSmanpCm4LARDvFiThG8pddieLVychB7t",
  "key28": "2qYaC2pW7MuriTFgd7VpANFinnZh5PCEXYSRjU4q2eAHTxmkjBTQdtTXiYbFC4qZ2zwKcsW6fgASmCxtgx9nPcrL",
  "key29": "2Px4XuoBmNSRChzEWCwY7bz5e9nKNaGLTA5ZJts5ZiUZAWD41WmXy5bVeBT4ufGSnKok3WFQeknhfZ7NKcsgcmJ7",
  "key30": "4axREVFX23dTjny1MmntYSbpQUXu95B8yEuVfuauwRgQmbcfrcq1bqpGVhFmdrrSkMyvGSZEBhQ57eRyofrHqgJv",
  "key31": "2SiWLzuQuCbQee6anhtpQ25Z1yspmthaDDLEX99XgX3PRXVwmhb4vUVwqtLq4uqZVevYTLuP4E3TFtSTd4YAX4Aj",
  "key32": "2iAWZcLrc6nUcFAknuKDypfbts2CYERhAPCnTQjcYSoizMSFfgkkbtmicbybw26kWt9MLVuiXx1gN1MK8U3JYJZC",
  "key33": "2T5Y1Y4LfQgjkZEnMEdhyUjDkvAbaeyMfYXRMTmYJRE4uq32TJaMV5P7BjRkZ24XaJM1Fzb43vhoocf45pDTDtX9",
  "key34": "3prrhfYqv72DFBuDFrX6AethLekWSeegFhfNexCPMvLmSZ3tid34VXPHcJRch8zciVCAWBQPfhPXxe4YrwCrtS4R",
  "key35": "32RaXNsSapxeKp39KBAETa9GhCdaN61v9YBy4UJ3g1uGVZjx4wgCxxgCPnWBCz381exTBX6R2ndBKqcypnDPySZW",
  "key36": "5tpqAaPkH6au5szwLwaNR886b2nKJG9M4wVLeSSY19tFkjAW27b3ZE1vGMmQAHnVroUP22TtL6tALY8z2vcz7Epd",
  "key37": "5N1yNraTLx9GkMn8XJBFTCBi9N9i3TFGSPDvhEr5f4MuusY8xh8bZkA6FmkxH3kajbTpcs3LmzNZTRdhGRpFJ5CB",
  "key38": "5ze7G3hKTJ17rJD3WoPgmpZeNjCB6V4AG518hRx6BxhjPxVFRKvZZTRw37BnLVkPBaDCp3MtLKw1dveE19jhhAVy",
  "key39": "3sh2VyR2HxCQNTcJBvfYwXvycygZnbtRK5961GoKWhTCnH3HW4aPQhzRAVrve1jRNPKNK2gXhvMExztTbEnnEjiT",
  "key40": "3JnMWMDcVNkJWGVaGabNHTrZEV1LRk6PsoNRa32ny8zeG4Vf157r5NmtXfyZKhp7nCi2kaYrmcgYqZQ1RsMVdRMp",
  "key41": "3XoP7xuyQycgxYEDNn38fALDaU7dYJpqX2986XJ8hL7d1wyc6sSyj4jH3PbgRFzYJUPvUf9u8wWGbcrHh7zLUn1r"
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
