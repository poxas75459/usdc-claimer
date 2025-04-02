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
    "2HeZMJfG4aEfDw8paek9pMgAmv79CTFmQHRAPnFwt49xN2bWUzKu3H1KrtD2pqaSDAa3V1hyiKpuRA2i6TD4GJ44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFdGaUAmBaQ3NW42ko3SwhXGvAT87nNnk2dzQ9AFXWd4mUBzgH4wHfSKnHtds9vQgk3xMyUppjnB6jisvNWCwi9",
  "key1": "f89c7tELns75Maj1QyY2BTCSo31jim2eKzzPNDerPtGPYHN6QxbN53P3jeUNrd4ZeR1KE9iBrwWL5tZE3oM7rer",
  "key2": "3zyKUPyEUU6XWoNh9JJ6CNgqfpJSMs5tHCvZTej6nheJdoBzrRKdkpUj2QvEgngAeuJtVeLXRmzsYa3JHmpbUShT",
  "key3": "3VkCEL9Buy66Aok7eGyfHTWo18YbiViMRj3Jm8L6EXi5w6XwWXyv8XjnCZZAqBUmjQ2WMw2YwaL6EX5Pw8KSqCeK",
  "key4": "3UY5q1hgbCJYfKnT7jefimDisqGMY6Bjp9xdxFrPhdt8D6rdbxv2UUobSSe7g9NhxKgkMUp96pz8GfSa8DF427WG",
  "key5": "4ajnLVnxntDZPXVPdGZurQQGaKyWJuGAbRkHGYypDZSzJ6tCiQGneWhPqhMSN3hZ3z8FNwsvG9F3yQHUJasuuJar",
  "key6": "2MLKhutXKAHpRCv2SqaaSHz2BydjTLC8Mcb1fgMGXd2MX3B5N2rpyqGsxFV2YC7CnNr3rhWavT1Nxq1dH24GuJMV",
  "key7": "53trWvJVktCSt9K95gdzXtbgXwDDfT32FvpvVfhzdTj3mPy5unSMGksJXUs9toKpAr8vkb8yzJxmiwcsPFrmgfs1",
  "key8": "12A8uQr9kYhuGikumd1xmBUS1tWmqK6mm3xE1KeeojuiuD1j7fLar6r1orSZQvJQ8v84n9PvSAA3NxchNGAj7g2J",
  "key9": "Upg1McahMTsx9ZJ67wUexiK3HwH95SKsxeY5oHgdxzqySrbMQxqxdi4j34dvZyqNg9quC69MgaGNtMGuNtpezxp",
  "key10": "24MHoyx5TSs7o6RZo3duuNRyvWrXNxA6uuuZozRQmzzLWTL3GGXLL9kLqrTVPVJYAR4QZ14236ovtr12Qgp6tYjB",
  "key11": "32xzCaMm6uLLb9sDfw7i6fkauMtGbGt3mvLicPdSKvYBBE7J37QbNpwZokztHnDbaVfeYxV1EWPbwdaj3Sa4aqRP",
  "key12": "33N3KZxrkoFz2b583DvptdxYWTC7yT52kN3G2zRBAkuRknLmKBRGBUN7PJgHseLSpWpczw14XqpzsWTCXyc8V6fx",
  "key13": "3o5Pq7RAyRmMqdWXGR761wzRmZHeNWMVLimjvifP4vgRCQ5gtqjGkQ459BdMoh59KQWKnvYQUjsPvQQAJQdBGSiu",
  "key14": "5BuQcEve724NqUFNABSunmsPjAkECv1jyjd5orQp7Luq438aXTfj4VTwC71GW4hNpn6q8HwjWPFwEoghegEGz85U",
  "key15": "krrULMX26vc8rsco4ANr3G4jCxSwbd8CHz7LVMrQpRyHo5Pq6f7TKZK4wwaoq5kV3p1RumwgqSpUorq8ugs6S8p",
  "key16": "3BVCaAaCrG5BuTFzyYTLzdGkXTzB4WmFDEzEBuFa6ETMxTd5ALCbkKtpeSis6cUiKxdXcn3F6F6rnUFLtd9fdXos",
  "key17": "5jYkmy6w5JKK8vfkrt5gSw593oL57quSpKMgF7knmfELBoo3KhCEZVC5pqKZadyPijLN7TW5WKkwHGNCDtuG8Vf9",
  "key18": "Yr9dXQRZadMgH2Ld1KALmTM5eNEA4BDgEJg4gXtarB2PyGZ44P3zFbhDt14bRqozj2M7UYZcZXfEuNkbVfYRDSc",
  "key19": "3QVJhExTLaqd59DwxK2utwVSmEGsoeiW7DFN92UaexRRHVRtQz7oNv8jYvWykiQSntHPCt21ejPWpWxbUgLQusCp",
  "key20": "RAunFcmiVSkUXheGwPHonV1iQqjPGQBKx9KemrqDvFqYFahLV9aujKa5bRcNMRAnMP8VqH38GfKKDPuBKj96Pd4",
  "key21": "hgab1tsPwcRKPEWQuHkf8q6e4qSLDXK3shPa1e6BGXamX2tRPaKNPEkZv86sKCaoreY5ezT7eYDSjQJukt66Aor",
  "key22": "5C675ePHQ2JPnGn2dRZz5x8Gdgt8deLUQNLSdFdiip7tL4RjFUUdoiXGN9viPBDTSxNZ44CPmaUXAE3JEir736Aa",
  "key23": "4wKjTKpvepFwdhgca4JLq5ijvuhZwGACTAwaCi68swFDsuMhobEW2SQ5K1azFL9vgaFCLmcSbrtVV2LF6hkC7vg4",
  "key24": "3trSYoSszjQDzxe76UbQR3firveKoW6j5bmWT52HP2KFEocik3jAJfx6mMGATF3iPyKFozGYZ52Y1wRMjuywfhfa",
  "key25": "122co4CDJaAozPzsAQG9XSPQBVLgm6RvieVK3VixKoxe1CJoqN1czm13M2UGZttxW6Z8JfMZW9vAf3zQfmVrvNhB",
  "key26": "dcu2gdtKgHjcDrAAjyyXWbsU4bzvA4qcCJvpoXCrQguhoSRByPnJPiBePH67tMPa4yvrwfAbvBw143xXfcYsRS9",
  "key27": "3LwxT7hNDYL8cJpJN8yCzGSBrAHM2GbdcpnLK7Cf4b9ZHkH397Kg7FYExR5VCcrPXbsf6b3C8aXT9UTa3qgjbdRK",
  "key28": "25G5jAHYzovBVzDJWNSbdJEFBj4XE5okgLJ8D471K1cQejmy4X9SHrqRxHraUbqjixHE1K1r69CmGQVvBQmmxGga",
  "key29": "49pcjTW1tTUWtQpY6JUVjc3m75ThkgzPh9PAfBT1ApsE8BiL1sQjThkmFCDcimb4wFESWLcsZSymYc7QwH1V3Hjy",
  "key30": "4MR3CrtEVxKGhk3VqjFkNdTiXWJVMwNejsRFwTBdPentd2dFY3H5NxcrqXFHNuKXi9AJE9vzV28aJf4Mf6P4yrYA",
  "key31": "87V6gLyXj5nxCrb5tE7JsMjfRBX9TRSc7scCjG1EoLSkhUhd7quJYfVtSnJNzhEXWwC3Yatbg3Qs6jtTzibus1u",
  "key32": "4g3Mw483ZjD41zyoKih8KviQxeVmybYWxknd1id9C7QUTvSRa9pDR6Prytkcrc4Gjeeyye9SyMpEZRyDnAaegCJb",
  "key33": "2hE9vRGdRba9DiPEiUmg5wxn273uaG7et8xW8JCHATSFrQspRBdyGwd6BEH2nmS1rZ8f5gPb9rKtS8obaZ1Pdijf",
  "key34": "28MXCQrJ4uhhkyRgCcmyZiJGTCbFY1yMDyD9XSsYmd6tsi5LXu9gWhoy1WzUep9zcdjFic6sAMMosoLwRCsfsJMn",
  "key35": "52T6sZ2fKVLZtJ2TAs9iyuoeQ8Si7auB2vPeanWAmdrpJvV2DfKRkRud68TKU5ZEhSEfHnuzebWKNegjWn8eLJWZ",
  "key36": "3Pr8h8Mq6M6t99U8YuqY7LRJwM5ed9q84iWVe58gLRWCVYDhA7g1AquEuKsb6NkmhFoJgi5TiqTLpKpTfWJv9ZKb",
  "key37": "3CKMJnAXtweBD6wrSsKh9hEsmUkR6EnELowNe1hwpkBWxnADFPXn189QxvM5NpvheusmEjhKCfeN3hNJYzpP8UQU",
  "key38": "5J2NDjyqeP2ZRbCDpPDqeTGPGvizEvqytkghNK7iEgKTniaBZa5sc68kuQ55NzgdJuwuAUWhqG533hC5ajveRmbD"
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
