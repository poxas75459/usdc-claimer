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
    "3AJvQ1pp4GgCvLGVwzUjyT6wF8toWqQp72cGQ466X9F2W6c1WM4CkzerXfDkfv1ajM2mLVgk3GSYZZj2VZdNbdS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pfb653mN7LhmvzBrJvNeM3wTVyPPG5pmWKP4zc1p1xjFg1BDNPAeFWoRvt9hQhag5UU2XzCpjFq1KqetV5jWJ3a",
  "key1": "2Xmpn7X9scxxjoZ3KhrwZkPnKmDe7VJKk5sDThXj96YvbgemPrSgWxKKCEc26C8coauZVZm1mARLv6VTPejFj1F5",
  "key2": "2MCnPznMo3MWB56aXaKa6ApxMBoNs7H5NbS8ejTv3maXi7kdCDexvrWpUnZAsPtAL2PYbxA6osU9khVMx1BgAWcL",
  "key3": "26CCAoJ1ResyxLG3KQUP25ZMPzdRVmmhjcA2m41VCkgMjCirHoDSQ1YWK3cGahjwZ3AaVaddUS2tdsRJxamP8XiJ",
  "key4": "5N7BXownQ1vjpGXkNrUdwR2pqSxdC2Tw3tP9UGg1rrob3383iRp62y4KMLmT8J2QhfHZdzdYAawdaNr4wghtKNdt",
  "key5": "5DJZ4S6f2afuDo23NKSPsb3SVEJ6zZFHA53e2EV9YsgeJBPhGvYewVuw1ZweRjLeV1EhzV5BUxNSqj3Ss3yuJnvg",
  "key6": "5poJKyKhmLCfnu3DVfVQTaVsataaSVWSrpGtnn32B8zVJwTi9qEqsvCxRisGtJafRSmaKXnKNtf7KEadh2wZ93QB",
  "key7": "vk4rYKz9XeiT6jdkSppTNSNP2msR2pubk6QqZo5qEb7HDMp9jWDJH3T1KJ39Dgro1MmEGi1ht6Kp8rqVpEVUt31",
  "key8": "3c51prexVjRb6BGkXg3bTLCP93LyiT97sMAc8LnUeY6vVu1Ri75z62y6MkHg5aHcVAPo2Tuwdrub9wXwTga6LrRo",
  "key9": "4ErnTFW4k5HRiPURNbWrWpSfVQzp9zHdvMoUMxqCcB6nviNK3oHu6HooqFLfAuteiAT8V85vupBfTejPdbiV2oTN",
  "key10": "5tPco2c32jRUegFBkYMJFTBKwNuaJuhX9HSayPYfxsMaU5gRUiQouWtKaQWkCyBcdQidbeisCMHfLhUGMzAEEbGX",
  "key11": "xBwAQNAhvgTJzedp1AiZZNKDPSm6dtW6Wa9EDxx48M1Eh4EbMKAZ5H4CCizs6AFJth7iyeaE3Ks1KtdrL9JnbRu",
  "key12": "3WhHpxCKjX3zFRo3bAkDxVWdcHAF1GM4UHCMzPZ94hLsiuxs2T3ffABhfZCUx8G3rQq88rQJt7r8NaRrDxk3LjFH",
  "key13": "KhekzDLYw96W2t5YWznAFNagmsP1XRipPJxVsvtUBB2PurZ2vLYHNDco6mRQRaJ72YvePiexVDDvkzCg1AFd8ZU",
  "key14": "2UnLAnGg8SdZejVinowSuMFv1PGiGV8mn8hytHVkrqbGgKm2uc9uRAjbErxonSzRv2fDVYFhMxYsDoebwVphiEeS",
  "key15": "2tUQu4iM8F1DcHTWiFSgRGetnAVhpctAGiHbd5khSAjTBLYKbN6F5WVRBBTqG92MhsVW2v9efQJy9di8c6tdRNFq",
  "key16": "2SvNtvEhrJJk9VrjdMKGd4t6uqnJJj376Ef7kXp5KouYUjkw86VdkV9h57W4zVLWDMXk5mPCL1EudL17XhnNXRZ3",
  "key17": "4Wd1dNAkt64QzVfhLK5umRUfbee9UDX3kn9aTcxW2Hs6RK9MNorhFdDSUKzH9wEah6zLMJAVJbBY42UuxsRETFS7",
  "key18": "5M5aARUrxa2p7crSyG7qr8M1hmAucm9wraurk6o8vAmmcaQTA23oqLPAe6ebPxfC3bSiLJVBtqB9s51tmp7Nt8ja",
  "key19": "523xpnundnpUxjwmR83624CzbbS6wYDUsDJBUvM67GqKySwJtHrPxSj6uKqM5TcKAhCj9nZ6GhU15AZnY23Ur7wm",
  "key20": "kYMWV6pLdaAH3Su8igUrM8VUDmoc2tbMuCnBmcX4gfRQAZLi3C1XHGJvVVM78rnVLp4y9wuJsrDPaZoaKpqJXjP",
  "key21": "4LxqKR5eBbCqWegsbcu3ABSWH1THVPZyhS6CVU4qPLMP91zwBhVhcXLJMsSJikrvY7y9o7yPfKrAejZE9iU5c2wU",
  "key22": "2jsNRVPj1ewcgDBfzGwPTtyzB6yUkN7abLLNMJamPHnRJF4ZQTuYmmo8yiSSgX15T9N4Sb62psmoUpusxeb3KK2A",
  "key23": "2oXA3EthnDaArpr7jxSuyNfSarEsZaH8QNRKaKv2tCiKfShL2q4WDhxb34Vurkiqe14RmQJBK5LqRrVNJUYy9atw",
  "key24": "jXuVGidD1gczKJZx2oTrgFqR3phVspjECvxC4nr7ksmCjzuor61at4ZJXDpR7HAXwqHxsAxL1uNW2uJXHQbJEqG",
  "key25": "4oztPC7Nr21ZiwVvRJnohE1RqFn78ZMJDU3ZedUw4xvdxMvHJ7ztfaiBaoahTxYU1gjfpjo54ZvBbQeckFi68ZMS",
  "key26": "4aneWypQKyXCJjfzdoSxKGwDBzij14W1Jgj5rLxWkqQvz8hk2TinSD3sAWAodPn9p289U28RMDmpJRXLDSo42pES",
  "key27": "5mdsX81jZcaXWnNCnSw6g2GmP9cT3QmaXcyQhQVc1YLKXZHitL4cJNecD9Hi2RZqoM2RRLwWxSPF1uQ21DUPWWCE",
  "key28": "5keYCK25aYW7R55LKEgWv7uYZ9LPV4dfAEuDn6QkihWgAo8HHNyaX8UWX4yuSi122timzcJFW7pHvUQCK1qAnM2s",
  "key29": "635jM7S664aE53TBzcRLLsF9SaUQTnV8TcWJEF5HgYhNbDkARFJabuQViVHQAXRuYFQMgJLpr6LNYndhQDX8iRfP",
  "key30": "2QTLbVkRbLKHNkChnB7t4um1RtMDwUyEt89BYAnRi4f2HTPkaKMVhrwZQCNtDLk8XvjPVBobj1ABcRLRcebUPfrM",
  "key31": "6DrctKUcv1S2Ad7vL9a9jhmMs99G1FEm1xobYHFGAEfb9z7RXrbU4vvcnJj3KwTyJVxG86EXiWM3pCmu28wbzFp",
  "key32": "2dcguuk7DPM67yQxU7kmdcwAuSi9ew2kEhMh54YrTRzQujWZeukhCG9cAsDWZG3oSR5RLumQuhcSG76CNzXyKCPj",
  "key33": "46fxSzCFfPH3gWGqBvqJ6YXq1csNFogBBA2GJRBW4baRzeQXCqHXCv1LjoPhNfW7529n2gFAESUtHHJxGJRwTG2c",
  "key34": "529GWiopHB7ni6LLjS8M1qtULCB3ZyojKHqxhf3vJtwtFuZ3y6kfbZSWheiEY1PYQFFqM5ePuY6UoEBZnskhRfCh",
  "key35": "VqBc5TMJ5uZY9jY4uPEaPuG2fBrzEFZFRNrd9JVx7HzTp9K8BywnvjTbi6rN2g2MghfMN5BDQcNXonZZBzDXT2j",
  "key36": "4wbZCebGoVt2G9He5zFFZ1Kti1fHnEfqAwXfdUYHpFHowCP9GXU8onvu8Q1QPPhbEnqxKpQcdAsZ6E1EVHrKd47u",
  "key37": "KjLBBv9SQpJHsqsswZUqt8UavFTUfJG5uSQr9vmDKDbkgLPTbBSfTncJ3GoCLSQqxik4ktfk1bFiQAEvDeh38wr",
  "key38": "2CYL4urVzRGg2vgemzAGjs76Tjz78aQd29opYJURgBCQTaHGZweMW7FUMyvak1hHTYWbtGLizMVsfFMHAigayjUz"
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
