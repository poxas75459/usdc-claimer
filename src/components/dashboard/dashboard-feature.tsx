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
    "311JeQKSK8gLEycvjdkK9n1UaHDCccTVoJtwkfEz334v2NDhTnghahuaTEL5WjCZ1YqaUVHFvSuW2bKnb5aFZPvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "te4jfwveNYDDkPkrhNER5nvy9VidBEPvCeeYwJHmN1eNy8m8fZ8tNNTMRDUBqzSX2bgKoNfadhdPiNu7EmuSiwR",
  "key1": "t5EFGhib1pGySuYYJefWZmVuQYGtMoT6MHJogxEnMWf28rjZ8zE3bAHmFd3AKDSxgyxRHnfwCzHTshZHQLeQH2m",
  "key2": "4YgkCMgkVeMQVtCnytdB3NPjfsnhmZahiPTsoqqqvLiXyjB2DipRwv1XypXbNRrwzVNFFXTrrcqittag477v8Atw",
  "key3": "2XzmzWJAYqaQYSezVBvBmj6FJpLCiD4xS4tcT33ks66hrJoPdFpkTdHQcMoGxENLq7WuyMUvaoYNxXakJDbtEjHW",
  "key4": "4ZAotZPVXnV2TH32t3TrTzCnFiEoiuN4XGkBsaTRH178poeW6Hwox6jtgEFuNpPtKHTJnSfR8XSVv5MLEZBzJHxu",
  "key5": "FetgkTwPefc4dT9P7CsEmFoGxnZKuWp8RufLojje2GNeu7mNV1JYBZ4CwkFTnh6BkH2mwLYUbKvYwacKJwQ4dGf",
  "key6": "2LBouQqaAyFCcE44hvkDox2hbHUqyJBDDAbPXUHQVoHxjsFeTN1WyMRa32XJUAsEdphwacvYrLTVJxtr18zb2Le4",
  "key7": "4trwsScxJzaQWgNXymhfsDVnvooXanbNCPXeqFve5GNSxP28pxBRiZmt3F2zuSkxBUerh2V95rcfd833FKroUBwv",
  "key8": "5pTBBkDtPJNTQPvNiCL6kekohvcex26UB8gCJXkLFJWAfG71i7wedetx8vSBrSobi8tCw16y3NcUzdNEz2WKrSnw",
  "key9": "5jy65g9MmoB4iTSm9CQAe4DxkCcjypiWqpPKonjjUQuXRJ1ryJdEUYqDFfxsSExucoSNxfeE6mg7E8pEXpMKt63x",
  "key10": "6ZfzxPFeYvxfXPXF1JMzvEsdasTdHfGHb5uqFrvWqnSVGjchTXfhgLFeaVeeRGodGn3wHHtpuNhU8JW6j1jC87n",
  "key11": "T5m3kodLBcfjZkvxrAXQBj7bvebtjjx4kgxhrtMMGyguFLYSysxbrPiuW3f4Vr1B5Bvxa2riv9TX2wbNiq3Um14",
  "key12": "22eFQ4pYLUKT5BjdHCVc9TFteYsiqkPUGbDnojtZxGepot6EpCcSXdM9ETGPTvBo2CbfbRa9DXKX7SPrGhzY82pQ",
  "key13": "CxxSsYo747ySJoh5sLifph9pcutXhJ2cxi7J72HsiBKGoSNMTPEm7Jj7RuK4LFGcnbaq56aGLtCE6QQrDdUSzKR",
  "key14": "2i9k3BqZ9XJH3Vk3H9y7nC4fDUr2HKPa5884MgYut1EFSZXQjcaMHLAnksYc5SBVBxaqjex4w6ygoKPgn3W16amS",
  "key15": "43hbxsHURWXz8NhtY1JHHnsMY2LjoXiw4Bo3z4rz1R7D4eRT7RwFE6T8FwewcrSDzgqLd3v8XLnYnmTrcSH6BBXW",
  "key16": "aEzV8um3KoeoSgjAyUAwL7XLBiLvgvSarKfGzm8yynxzmvyr3ACkbMBFAoxxGpRCBvpAKzkLVGnFnw6JHHzWn5e",
  "key17": "5vEygqgUhKosXzKx6jy4rsmoyspTFav3NC2snx9xVY3v6z5heqBiEaGatwU8ukgHYeNzLK4Q7ax6LSXLD8QmWb5Y",
  "key18": "2VhTzcp9HGpo6Gvwqo2BcnpBguTv6wHFCv8QCCc3TLg64dQxNpHwBgBTQy5QnqJGV5Uc3PeE358e5rQPxuajy2sn",
  "key19": "4r2xsi7RDV7p7g2MiE2Sv8Bku2tUzyscu8jwN9c8aJRWnaeKLCW1rHzeNp75gasBe3fdxw9JbSLa4afnMZfQ1DAC",
  "key20": "wYbFDcXrWzsUPFowJ9ZC5GLu8CupJjdCRzKVqDfVfM9jaK4mJAYVzJyV52JgvhP4Ff4wky9KyMD5x4CnNcApZCd",
  "key21": "48zdvHbmfzTwkurKnEB3b4Kcu1DBw1jzGb8fHNChk5xEBJQWyDUtKyVKDucrZcWRcWHwwXJ8fjxhCg3wuGwS2Y6z",
  "key22": "4AWnF2kPg4tL8tcGDftFGQMajZN7HXvoQ1uevrAwoACY1GgdtezWYmFaxb4F98Fmetyt7kztAN3mqZHXAjQoVKGR",
  "key23": "3ySjJvhAS3BCe8fJvs1p8yd4tRdC31fhAdnH255QCpRXMR32729HYP9PbeddiYVfs7k6w4GUq7L2PMjMRv98Bzct",
  "key24": "4P81Ma9FbK2iq7Tvv8eP8Ds2uuJKaToQshoH7t9nVQwvumX8jrYXG7efYZUbALKR7nmM4CB91nzZXDr1A5gAa7SJ",
  "key25": "9UffwPoV3s9A687457LjnVTAo8yqNAebL4MxpR1UzZUtyAESynXorv1qiZZAneuu12cqXBtaYAJgD8V7NzKMWpX",
  "key26": "5pf8GGcQjmNrQBsuche1yFz5ah7b9EaapbXXuC7M6TNbgbhnCaMwcvNPZ27zNbgpQKRwnnMsdGDkzhjPppwuRBx1",
  "key27": "2YzeEaXBrJPcn8zPNHW2KBKZqfGH9t3APstEXh1GzmyoCGXamxEZSqhCQxCnzwimAsyGHBsb8aWrKE5A2pD5NTWS",
  "key28": "Z77pCm2YiuXRNrrH19j5mp8eqEUsJW71s7tKmDohUDveQgYoigfHu6rzjBjgJfJFJ8AVjHARqij7oTesSNcjUTL",
  "key29": "5aYvfFHxvqgycGDbDsVkwWUEZWSRLeuLKDvsQ2cf9ApP9hVVPUMQNdRArZGyey1aa854LQkC4paQzVaWGVHjC7Dt",
  "key30": "4wcKjW5NgHUAhZnjR4dAj7Jy6WEKf2HhwYYPEpFeaKfmDeoTcoeBf1Z9zCnhXNDsJ1fhfi3sMbp6yk6omoiSqBfa",
  "key31": "5PEkFZkkTFhQqwWwv9YWUuYyqwVr7kWYp3G9AYhLDrBS6Uh2iWz1QBTaW4Zp3nXEWVorF8twssiassKRydXgog3o",
  "key32": "2wY9GbC8R9NvhdZNpy5U6SN58CudgQzdE6AubzSsXfzv6LDUneTwgvXF7PSroJZ8mv3r9haP1yCegdzHvdmjWbd6",
  "key33": "3X9fBMw14KKtTBNthbNVeQd5pCMGaPeoPu2Zs5Ebax2fjaZgCSogd5D8EdETx1iNMwTdorGUQh963iJRMKQfs3xU",
  "key34": "29VcfVJdPXb5UKqNtmy3ZfU8omXgozGhrAXTThKEboRbAykjg9qY4Rpg2sNFX8QCX1GsACpRfwDqPur9BAKFdXtz",
  "key35": "4ZXyweW31Wbzg1e1o5Lwho78aRLanMizhJ4TtDM5QaYtkX2rhpD9Y9cwxrkGgaMnSJdMGWKHG7j8iTHerFvh6PWA",
  "key36": "hrmpG1PUyyXeyaFQV3oRfhFco4k52XcStvwpUvSUCwQyXBxoYWBK3xQBzygtPFCXuwCu8Aa8Juop33MpjFJQYHQ",
  "key37": "3jtGAew9iYVrNGoCuudDP8m8fEdgvRpxmvifjFatW4icPih8oVjfyZEVuzCUT1zzkmwqQCaizfLUhBx5xaPQioHn",
  "key38": "ga4qzubT76W4g1F1sv6acD9x2iDA2mb1fktCQAJabuhNSduFQhPubLHLqHrsSsQyeUwo1Fc3nZwiQYYewRbNJ6b",
  "key39": "1cSHN5TEdgfSzLCzHbEYNtfMniwiKnoJRUKjh7PopXQ8rx1HMhpHGu5sRK7eqaZYtE2CR1qtryvMAfwc9ACNQ57",
  "key40": "2zVTdwaFjiENFPSycc2A1u1BML9FnPRns4bANzVkDPZU3b3oTxFLCQA4Kr37eAqcsKhmLeuMPnLzQSUoJPaoqpkk",
  "key41": "46NjGL4caQpMq5JgpFhm3rkhBZabMDdHLcF2cAAXeYJgoTjGCEyWgrWh9TAZ1ekqyRVnSwW7uxsUTN14UVTxYEt9",
  "key42": "24FPdofZehrgPmVj5VJzR5ppztYy92fkVQbDUnky3FpF9DuAiemER5rgafbBT6XU5sQmuMpewj3DWYJQv2ezr5ZB"
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
