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
    "3fMihAqEfzXd9HoVmorzbKXkK3ie8mYpk2RvARxVDjFdLh1QPequRpjkZEwUo9capRFpAfG2co1kBnYBihiAmFR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkX4KDmkSuqqJ3mqMTUxEKF4RtUup8K5PktfDVVFZinnD6ZTjJSqCC63zsdVWSJwrtnSW1v3wKxR7NRpkYgdHoz",
  "key1": "4ARWPuDbMcGSLYxY9nRAjMiHwqGvNuqNY4Hma3ySaSGHKDgjrcY1QboTEzs2xceKM2XH5Ropxh1D4q8QbAszRMHX",
  "key2": "2jcGD55nvfomzibJScMsPNBfbEc8Ua3F295xit48oV9DkdbPNVUVS53eH93DbTCMXghfSWPPjYZogZTW2Fa21QMQ",
  "key3": "5J1HZwWYpnXThaUxRvkDeqvvYB8XEQRtCF55ui9Uw15XKv9rfUBHSXdvSjeERiqxX4c8U2DxAkQwSnx3iUw8q3wQ",
  "key4": "63VbwTJorqmAgoL3btLm2wgvptkM6M2tNExV8L88aJQyjTDHUawxTjhmArKCa2snwza7GFAq9fG7M6ipk8Vf1YvG",
  "key5": "5vPL4qg4gh4dEkyXapdLKD36mDSfHQj26GA4VUCuTXRg6LjujYLSUvc7bHzZ51QpuxpBVHvzAv1dACU41HrknoJz",
  "key6": "23uJzodcoUa9fXoADZS7AoV2X2JGX3markZPFxZ8pQLjKJNi2qfhqViVia4FzUwnjDhJzKQHaeB54HdNCB5C4bQU",
  "key7": "2iRkBq4NzVJkBbbPgwt3M15zaVZo9xpdESpWidjSX9hybSawCY9kEQ4LAq2kAmAt4DgyWoYeuioiMRjcifEtx2bM",
  "key8": "XkeBaheJ4mQcwYPiQKu4T4ABESFFnVzELxnmX19yzjLsjsCXqYSex1wqdJcUYTEfSW71v2SrsxyZiosHuJt3BWd",
  "key9": "cSsNG8Aoi4dR4ZeD94jNwZ4zPxyWe1ro3Xt1tUHSDLjHiQYNsJdZk7G562FSt9bjx9BszttPXH6uyR5qN5mhvh5",
  "key10": "5SB7PPnAXqdzbXHXTNHP8S7u9aQDvvbP3J6eTpWbcU9hzsGqmG2ksWVYbDrKzBVXbpaU6J5Z7jPEexjQ99pb51UU",
  "key11": "4RKgGmD27Hc3FeXbrjT8UjDkdRsrwfY1ouf58RJWDd2fMN3xoo5iwJjfrp2hqFS48r7v4NC2kGA5TKJtqvpzPvpG",
  "key12": "3DP2nBRCpRgVyPUAxHqHB7WKBPuvQHq6M1TS47UW21wZ1KQesnKA3EqSSmDxdeVjiosyJ5uAF4YNzCvgqSq3eTjc",
  "key13": "ZbsyXhpyc71HXMiZ5ys7vteqiBqAz3TSUYYkz5g1kUsctikSWmvtQSPopxsNv4dciUQaJknBVdDrznogsud2ZU7",
  "key14": "CHhPtQxCAQnKFCX9Q2cyxGEbrVun3397c4cciiSExMZE2a6FCQAoSRuL4dWFMA6WCw71rttxbrPv18yv6bcWDCY",
  "key15": "4htwH89Waf4EN9GWK4LJLGdk5CXU2jUEd3iT4r91yUqYvL4aBrmUohe9HwgKWq4xWyPhKbF5ND7roaktNHsvpDGk",
  "key16": "21peaiRMp5imT2CuJWUFhHPepLXf3s35Ddra8Ut762yHGjnnP8HLYgAUKY7XrdHrmAQGRPKm5n8vwATGXM72MPtN",
  "key17": "57TmHAdcMYJPudoD7Y797h3JJ5LoUDadeGWPDsjRn8ANr6eEeaiJbCeUL1ZaD14EQKCnpv9WG7TDb6ga4DDd5HUT",
  "key18": "V7syrx4q5DduNLzQqh3HNesjLkm5kARNBgweX7z7CprgL7zDazHChN832XGhAVSz1B1ZSBM8EHsqtstERa6zXWt",
  "key19": "48Qk4JPXfsWVutk3rzwmmqms7YNnkrB2WEovqZc6PE2N2VyXojPqwGsZenSWTPhUfEZ74eHRMVaav9ZxML1jakTg",
  "key20": "3UHqgiMycE7s8hktzENPrbQxvykPwyajhgd3a8J5ribPBrRuN4HsQL16aMpvGsizH1fpwnNfMj4hXiUqjC4o8fU7",
  "key21": "4uWmGM815E7VcQdDE2BoKMwAoRJP1CyXC77jym6Uq2b2gigyNmm6aQqNackeztJkvDLY1iaVCm3FBkJ4Ndyi2xK2",
  "key22": "vgQyzHuHKZoZ499gDoAo7GzE2T8dAJxRpDAC3BnTZR8G3hn3RGgmXrJ6EGHqMa68prnxQikTCkqRcvdrVBF9afY",
  "key23": "39o2GVVpsa53artRSTFnH1D9zTLdbwC9yLyWY5xBqY2UnVC2yqRNNGPnKiAgvmF912Q2eCaFXosrv1Xia87mVHYm",
  "key24": "5qkpR9baoj8GBFNj2xtJfdSKopyDahhEBKj8ZQxyREhqbKVBJLULsDSh1yyDpT8XdMSYKdHLHi7Twm2jSYecNuAs",
  "key25": "2VTavJx8TKrHuDTA1jnnXdsHCZ3e2j4qwTQE8jGNWXUHtY8RgBsKgnzKQBaGqSpU74LRzMB9AXxPvxZ5HiwvEQLb",
  "key26": "Q8by4CsSfSq5gphdjtYNXCGALVvYocYjWNMrzpNmE9kMuBwE5TSk97unoZz5H5U5Ky5imFP7fS8F5CA2LV6kTZX",
  "key27": "5JTepZka8MdcMSGkv7JxUce9GWQGXY8wi6odNJwTdwimioWVcrJw2ADitM3axWvbop99WywGehPrgSxe8pp2nfzt",
  "key28": "61wX3QUzB2XiMQBztDFsw8eAPk9gG1chzgsnfkjWQHZAXqWFrm2sRdzH35JphuCUD4vXbUW6EJAKUaUCscPbFspZ",
  "key29": "3jtfvQq9oXe1WmpdNna3vFKcs5w5Ens51UHPhmLCLRudRoAUs7gSaDpbtyKWFm6T3LJNAa4eYyorVvqVU8B3J97d",
  "key30": "3h3FdNUycR8MhikWahd4BSqHPaDKrGmKkGdk53gYfJc3ADqJKqjPnrU18xgVHCtwip1M2LYtZV9GqQFC33bSdn53",
  "key31": "ErBoDpxxymmr7DyKAp52KVbDALF3YZ4aPCbPKSPUcwNdk2DZMVa4QAriqiiGJrkj4NA17ishWrJSMqWhHzUCvQG",
  "key32": "3vNiYQGkhECWmpEYFCXUyGAUubx856ve9s6d5UCWf6Nx6t9bwZkFAVQxcBtTjTys2gSba6h5ZEXHW8U9ckSzGdCX",
  "key33": "57tdzNePkCmeYKBFKevRQY3nzDDZWvLwJX33TJ22nqDvAXHi1JFpxEjGSN7WCQ741yqKAiPPs5ELaDwKiUB7W4gm",
  "key34": "3RNhQU7HxZREG6zbBtkbdPdvmjznHBP1Hg5iGu76Dgnqb1vVFcdawmGYPxiSWzLTC551nyAPeSB5xoKCoBTnWiGG",
  "key35": "44jYZuge8cXb1bZtdnteseMGiHEZxjzMAn5XUZTC5beGgJjx5fcXiTUuVmJaDAWK3wovLazGL9pcD3sD8RBbRLia",
  "key36": "43UrfBBv6eWEnNMPJvpRn5EbEPoxqau3ZJcvd2dmmDCkcKUgX9SZzAU4Brp1KPcTMYKppgk23wRQGM141svavbwA",
  "key37": "5qE76LEoU9wDrrn1nfAcoE7NkydhAqfcAc5qHf1niAZwtgtpheRH8ytnX59ru7958158pUwzJHnqHbZFnePWqWXk",
  "key38": "3iz2DFdTjcEBLokjW7tXo38wrxLQSBrhEFfRYmKHcNP8gUpZMzC3MGV2r5zU1ibWDMQ6miLdvuQofLSWkJtu2QZa"
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
