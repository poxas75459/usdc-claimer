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
    "5hXhHSbysZkG5TG3BG9LJzRrBsnwTgvgCdMxJWTsj8zX7hz29EK2xLmX8aZZrw83E16pwunNBTm8Ezo7iBrB4bZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NRf7hz8MUYSuYVUFa8tepRu8n2mFDZSq4zaDim3465gsznAsLYeXshH7CiVQ2zLNgaEPLCaE7owGcFHaqSXUeB",
  "key1": "3M918KL9JpbghjppSBBoGfUXuGXgTmFPMEgpdWH45UqfAEhrvrq9HCTGnFV1dRguQG9bxyUPaobJV4kYWt2hqfvm",
  "key2": "5yDyBNaBNqvJf3gDLKnaMv25YLPvNSYHiVNjsGzwagYG2KX2d3hG5wDFax9HLd64u1A1kaCBEy4CsMSchiC7YeyJ",
  "key3": "3SFTXwfJgsuafiNdk6Zsing6S9rMrdBgiBFnKabYGzx7MPzTerBruGbmpC2gVuHxYAbccsByAvgaR3HctEYFuQHg",
  "key4": "RMQnVzFdNMzyLa9QtQvCeNXomgAXQrVCd8SSEwjXgAVGx4sZRkZjf6AefbDPNMVqNfgJNjA98ME2WKuspkMdvAy",
  "key5": "38e9YJqfCpCc3sHcBq9dFe4Ffjwrbp7vZJLiNVhxRCu2XRQtfXqURJSLD9B1WY1pCjeiQ7so3MxzcYBpU5y4iX94",
  "key6": "4Hj5PgpicP1KNBBXfLMWKFN3ZSqu4zC88aC67qUYCYB9fVczf1KsF59ymrT67gGFT1iMTm3HFdqdogCh4uoA4nM2",
  "key7": "5Q2JtRPJSn9pFqxS47i9vHCxZ12fQFZHyECsycQx1BxwVGsNAgnXEesixKL5bMtrEy1sE1Uph9Vf3LvNuLQayFLg",
  "key8": "39Jn5jBrfVTyfFWxt4WN5V4pnQRGfw2nwxQVXGFhZt2h3PKNDmD7f4LuaK9vmAq5jN7zKJSFS41gt2UXY4Y2feF3",
  "key9": "4yStEMdp9eSQzteXzdmbsDeF3brgEWvofaDS12NMGcmajYKFQ3WyDhLm3wm2J1QQe5euudLidhSZy2BRqYSLWPiz",
  "key10": "4YoJxFoBcTFUdTmKk7rGX35timxgmG8c4GXKtHAtUBGrujaKVPaJiyUZP1d65ybpyGp6hw8qA63j6sAD6gPJnoBv",
  "key11": "oZjB4yg71riwtbTyHbkcxJ4NXxiSpUtRVzNQ8qCxmPFqH46XN5hfy3uLEmRZJgcPGraR7qDspRPvLbsw6tn2Wda",
  "key12": "5szFkfropcx6tLSufkPWUhqtTuPDPbzbSKJyZrcQ2WmZmpRWNBztRck9BnohFz8bnhER2UjgMX7DQbi44J62pfWq",
  "key13": "4TJXn2G26482sopmAhB46E3P2M9wxW9mRVJAtae5xcKktSYKxY5A83JSgvFB8XmVtp8ZhXRDrBwC73JGEAa4NmYM",
  "key14": "5qUE83on3dxyxaojG2VAJrBVtze7maoekXkMopg82DeguPUmUjPVDWWHyQ5oZJvJg66BehTawThX1LrSCBn4gHUW",
  "key15": "qi6RDLSv6Fr9V4NpgaWrQtG1SP2gPxSuS2bB2Xu8aC1z2rspRZfqDrWAnpWtJzqy8eqm3dNBz9jSQqhDq4ZFSEX",
  "key16": "5yZ4dyuMzztFEtnZfZyaRT31i7zbPqXkhLgisUyqRdFWz5hheMq7FiawX8G6u7VfNfVimCn1Jfb4PaSasjKmC3nH",
  "key17": "38hyHUvkMVMWhZnXT6i6JJyDAhGpbHZWFnjazMaeN1ZTDaoT9guT17A7t51UK5b3rAYjKe1GNwMxetZctkziwyYn",
  "key18": "5jKSrkvaUD9NAJarfxVmKiWZN1WTMokoGjcMDRqfkyU4fza6iDgZe4KbGvszeGqEAFNswx7wdW92ZVPh3XCxHbBc",
  "key19": "8nKbGHBmWnmuNMVjsDRoSJtwqAeQ7qofTMfK9NAKTdf4fnm5QVEht4dvBxKwuakNVmuLT8CFSxy2UtCW4FLC82E",
  "key20": "34X4U9rrTPrWggAiNd2izoHNeDJXFKAnz5LHVfH4c6odYXYzQp39kcrL4n78hhddi5JPKUXh3rQidXaiKidU5QSY",
  "key21": "5fNBUJDjfNZeWYopZvvCKxMVfgYfwQ4i7qQV54NeCkMF7FKcNbsPadCSZqKKEzte1FLhppenQ74LRZW3wzCAbW4D",
  "key22": "2SfgoT4bD9Bx8T32zcwUXpkvAR4J1VQNQuxTXBZHKfjgSdeF4veRqeuCiNcawwgVTCRvG2PnkLRiym59ZYm1pTiM",
  "key23": "4BLTjdc1hb7Mm5R6X9KSyiTgxe6Zip8zM4z5bKzkSnY1Wx5qMKKwZ21eMtsKbySFkNbMuZ7Wab8J2rho8unM74fb",
  "key24": "3vforc2NhyecYQ6QGbZ2oQ1akVpfKqM1LxqHdfHVswe5stjY5HyrWr3juVaxUuvcGEeFCiVSGaNKcd5JhhYYkfco",
  "key25": "HeBsW7BraurTTPjbf2UPqpiRzc5fdxjF4htDeXxYzaHU19AXNDJjufCC3Uyz1Y581ktSddp2FPdHiXtYhYTe8vw",
  "key26": "32bfokk2F5jZ52oDUFdtj3YCajUZ8YUBw1yNTaF66X3QE1UAMid4B2vXpbHWH1ibPkBnGww7zSE3gaZP8SZLjD4s",
  "key27": "3HXmdxH9U9NtnixMeTvej8xGVNhQx6o6NUSqVBja3UZMHFy8xFc16tL8RedUk7SWjLDVioKBcMM7VMYvSeSoHU7y",
  "key28": "2XrP112mCftNuVkgUXxrhaD8hQgo17ByGHwNG3KjwCU9GeufZFeL6yeJQsCzS9WGEaSXUvjteoVT5j4nqBnCVRin",
  "key29": "3GAU72z4jk6jKqh5bKcxXosF97dqKwmvNQRf7gn2nK2yfzzdGi47eo3J7phV4gkJSDt4VE1De8beeferDsD6VhWC",
  "key30": "qyez8uQyNqyFVUMBjMgGgiJAXQPCturZ9ZJq3kdqpTK5nCnCBUAWmYGzy2Li1xHoN9jUQRjE16HKg4TEks2Pe9B",
  "key31": "5H6nKMotfVqm8h5L7D3oYSsnequFAQDhGLC9bbWTgEkhzLppgEMoJprj8iBBiLdqYayunAbtVdgB3FmbFt76ZajX",
  "key32": "5c2QjX23CtwZgHKBZcGfraR1sHJLSADPLNFmRy4JHbP7cYif6mSJvJdRnZhhEGc8dx93oz6tmiYSRpEVtcFrvZLR",
  "key33": "5dtJjQVjuAr7MoAaMFKNXFV3q34RC56rjJYNwA5d81qAmLFHQ4ziSgnz8xTUWWKVBKSX7W1k34zh25mpKCHP1mkk",
  "key34": "4kF5fg3fwMC55h7frQnon1JYeF3ZPZWRXTtNe3i6DsUBuofpaU5NBsRpjLZb2W5D7XTFXyJfcaWi75afHqgM6Yi1",
  "key35": "2YoVznrZDqZebgM6Ywywn1XbRYJ8HzbN3Za6XCmde9edJ2Rg4Q2iXH9o3V5SyZfxRuMB76ELK7LC9XJD65881T5H",
  "key36": "F9EnyDftE5zVnJyaYbUAVZJe3KJjYMrxCsry44Ta6u9k7pQXAgcM4T4Pe2ftND9pNXNqDuScM5J8sNPnxgRrVJ1",
  "key37": "YYG3f7vmaAKRpSb97xZFBa6fHRQSZv2sXVEhAcgvix859iaNPhVrHd92NxVBaRHyzBPFJjwW7m3DMozFu3dEh47",
  "key38": "2hu78YVxiQwK47TK7VmE7NMiCUJp3NaxDTZe1eiq3ugp45uq5Y8Jp64hk4bCcoPxXuhawLRFcXnguJEXyqCygXS",
  "key39": "2H47XjMivfwMupyMni2uawH2Dqa2JyL3xgWfhc4Ph9ydeRw9sMKsT4sx6RywLQHihLaB2iYdi5GsioYNPoakEh5d",
  "key40": "4ni8TQ1EQfLmSxTY4qSa6pP1Kw73jHbrbGPv5WpjpjjfnLy6SysS3nVy6MKoCSdDAPP21D12QNHLF3wFK5CDg1Ze",
  "key41": "QWzHFjfg1eHR1WDxcXSBYNjMTSsGwadXCgnTwK6wBXvo68MgLmaNo12t3vXZrvfZPxdikR5F4uJ84f5a8NGdqGF"
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
