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
    "2F85F3mcEBnatQ5WevWhnpcuFnt9DhiXDMiK2yRxfz4dcyzKyYDJi76JrvpoN346NMM28JjxCoxYGUf5YH5Xri1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5nwwskabV68yhtDjdAuwjrFA8tGD9qRet69QNN4ZF2AUzYZGgWvKeKa3SgiXBDNMHi5jufqLsstzwaqzTUUvpW",
  "key1": "3pNHPAjekyuvoW2CYH6phF7vLmEdxiBWqJPYKMexQ6mBQTiU9wCA9bfTZSa6e9UHXuguR88Eg3NoR6KoshkNfrbi",
  "key2": "51mue1mbLHwYdkxbuyPvd7ndwm92Fo2CQMtPJ6hQjZs3uDJGpc5rEh8KbEbNRh8Nupz44zAkR8QeD5NyzzDYu72a",
  "key3": "5wxzoLikkzzm7KE52TLX3B1AqAmhYLHmEpSfuEtcjFc7BxKwDoHj7Rspyn9V3Myp7aQoHyXHLqsUP5cNy3fWDv1Q",
  "key4": "5nc9cxjDjdqTSBrh3JRh1y7nca8qKQQPSVsc1p77f4RR1jQ9mxfChkPcjiLxk721JLpCQo4Gz7qQzDtr26vuQHUt",
  "key5": "5ymjErYSofUnBKydpcYr7HTKhHPZhGhpCBc8TQ8dwih3BabVhFZ1mMTj3YrdYr9JD3DmFwaUKkrgCiRQEiijT8KQ",
  "key6": "33eGBdQeBcY61JTahaDE1uFF9qkdUj4kEjDbMDXPPxNvLVbvAzfZpLcAnphJAKRz9mK9KFP7H38mosMgJWMzcCSn",
  "key7": "3zo9YfaFE4Ru9BppcBjBA4i3FgPScvqXqyA6xNi3nxkg2S36pA26n1bSq4cDFMVGFJW636W76hVg1DhiMvzBuHyb",
  "key8": "mFaDDd76VZqeALCGyBg5vbpeH1pGrfK3NzLUNBp5UqXTFMDCFzFHPXGKcYnVA9mFPDNXarZPnQ12HDrxxoy1Z5M",
  "key9": "61gmyybarihdo1eDSQ4jGGRrtRVpW2xUP8oT2xXH9ZtxyY7hhPMacjaVZbXUHkKggeGvzD7wduwzq39D4QuTzX6K",
  "key10": "4Fa2M6FEyKeuM2VpjFyEvYxSiNLGqjiyC8KLfeQKwXMcZCtVzazUCBXUDTiwMpfBHVZJcGPiXszhmESNSoRAb2Q9",
  "key11": "3hRKjpHNKRbXJKyFzPh3NZs3QW2TLX3yMdnF8p3tgM5HJkmP7BsxYwAjcWzSw72QSc3H2RvnLtobphPwFuf65yv",
  "key12": "2YUHgmSaHLzUS5com6GEcL7UnS1w8e5htQ6XM1GYbv2TDz8jPFvbpPycnTAGiYfKdweeAGoCXEwjSeFYxU1sAcYF",
  "key13": "FKJ2J33S7WKHTA7Q21CctvLm53R9JyWQMj4NggrcBSBwban1ePa9WYp6JTmdUb3XRK9CjjNDHEAaZb62TgJwgVn",
  "key14": "5SyzHVKExDiFZUTs4z83JEXyLHQcs4gmizXCdt8QgckVg966QGRaHQczPdrdhaGWfhGDsuMDb1xNA1xYYhom5n61",
  "key15": "5VzprcWewZ4gJrMvU8Dv4nFHn6swFF5pa9twdPe1qxUztQCHVSk8dp6p3BkcaAVJa8mqU1PrzRrwL2cbwZsbQ5Ri",
  "key16": "4M1vCkV4gAHq1CwG2tKsEi6iqgG4iNqTzgWZH7B65dHPCMsaNDmB4vn3kCMnHeJgZBpgaeZeM3LQuTgZs27gKkNZ",
  "key17": "4qAta7bha1c6MuhtnpbQd42Nmvph9a7FJcAnAU7kHQmqKP3DsAJahs7Z6hvHNyuKCYHrSfikMzq4zf6qieCxXPHV",
  "key18": "2GC5CHD47SGZ96CtaJSxzG4bzEhgaCUrPMJeegqDrTmyT8tNJZBnoVs7Tjsiz1epRmjiCD3M3x4isrg6hcvT9miy",
  "key19": "KjTaZD8RDpsLjCJ9p2owEFSwi7JWiv4wtLCZCN58BEVxP6YP2YndMWzfoahrKZnX7wiFSmMzWU2e6VL284ERH7A",
  "key20": "R5uWoaanxydg7ZTn3JZrTmyMCAVxPBPeWjzJfdsui8GskKPJbLXKNz7dgBMwD1s41NVbKai9bSCjdkUJMMwHimU",
  "key21": "5uQMtWT7a8ppkPBGS6ziaR1NKSouGPUSRHZuVjBEL7vp5uYXS4KcvwfmD5WToyKG5o1Q6SUzFbSosKcbEPBBEADM",
  "key22": "33mLi96wGDN1jgxAc6bt8X7npSjaAUnYJpHG6VRAdDMQe5WKfJiv1fQhHHpujZR4D8aa2gPK8g2w2BoGAnzJ2ztx",
  "key23": "4itfjTL4ZrYRPCQZoKrBRTRZ4anY9NjyzwWAZqwG4CmsXp51MoZa15WokP8tbQKatVEkegVRkoMn2MNbYwjfx8Ph",
  "key24": "3F7rKEXzefZc9ss5KFSzboKqAd8B85VP9gWW4u8r86jydWeySCojokuppAB6WLarXdiFMF1mqDN7xFW7DPdQFUpa",
  "key25": "4jMMZpBmVzrVrvHNwsuqkHx5a4qRZAEJc2VWPkT7KFRwcDK1xa78VvP1fYb2A8FUp1gDFqVWTXdCwKzQ1BgF4MYe",
  "key26": "3ZMMMTSLC1KTqQYkxA5f8dezQB4crEcKZ3e22f9UyCfN2DP1PGgbiCjnn2pETMSkxwwQrxeD1tm5NPEXU2vq6Fms",
  "key27": "5NdtX5Zpq9CndsbFByiiBuUcWN21m9HPVsY7GmsHRsKcHGw1KR2mEZfYjbj6HRA29gv319mL57vG1KwKYrxaFDXj",
  "key28": "rAGUMCXXSHKUdxUioLaGes4c8k2g2VboPkctKERYhJo61hUtp6APm5R1qz5jBT9tCsbLwhVBPctAZ51Xs2ZCjzE",
  "key29": "4WLRBj1ddCW613fjm5S25nSeY4uxmcJdRWJSAh8qYRxMEFQorxSZJZbKjJXrAcyUShseFAd9sbzD7CWaKYXKvX4T",
  "key30": "4ab8nwzWobheSRGJJEi29qMs9KWttwKaeWGUMH5CNZdhgFeb9AUDYNipUfqukZ1SDEEMfh6VPvc71G18w7w29RyZ",
  "key31": "2KLqvHoMcwJvydGHnH3i78a5JnyR7QCSi7YT8edFDuDYH2YQuuefeMNYQJCHhNyn4uKm8XwCV43B82Now57ceLR6",
  "key32": "3PP78hxmUuym2Na28VGH6MqmkBMj4fLoF1v6FsSpojSVrEEsop3bTqCF6HAe7s6zzLhAZZbs8fHX7WQ4uiU1yRiG",
  "key33": "62yDdqf9J8JdRxi1phSWSW7P8JLrGAtizetqHLFViHHCkMeBcm7cz28Ji8ZfdWJG7meSkRVTKsVB5D3kfVCCYqiV",
  "key34": "5va9keh4BCrJagfryhoMxY6oHziaCuJ9gwKCLxdgpCvwztbiMayieTC57XmLWUKgEdN158DyJ2W7GCNZwTX4Tpxs",
  "key35": "3p89TdBmsqQhu8buCVDGVx1J5F4DRunscSxtiUjGUKdW9yDjJEo2Ps7DV32Ub5FJdyCoNtZJzQXDUukWzM3X2K4j",
  "key36": "HfXPyNKA1dkPqmZ2w9EsNXs93NtszfrVctMt2GkC6tKD7A616wHSkk8LEGhYXyVct2PykQNLRNzB1hXcunPdAmF"
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
