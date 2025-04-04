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
    "4ZD9QF1f8p4UMy9qSEbBAa36yWGf6doV5AuswmBkK3AhBSPWGuAAoEen88iUg4DKBYAtVTNe1K4XcPN2oMMPpxHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjQV6oMthW7t36TJV2Ldzc6RYgtsgbjnrjuE23SJp6DVT36SJSdATjiuJ35CTTpU3JUXb1aJ1T4VNXFYD1ZSCkH",
  "key1": "e1ZYjYjBs6yjLUD4LnpsJW1fkTNmRm59zJX29BuzdWzWuiKEX1rFCz9N4M24ksaQ81ctxLEmnY8nC7RboGFJPUr",
  "key2": "5HuXXUewqLqifrUHq7GbwyBDUJMUnAfiFypTDuerCKTQL4BH5HLfQR993X1zfmCRXPzeus8ezswZPw7Eu8poEjKs",
  "key3": "N9ttJp4P3n4uCX7k2QJGNp2BeNu5LcUJvy7rZf626yyq1NGHfcgwQV8faZWSB2RKUQbMpoYuDBPQTSXVPeHWThp",
  "key4": "3D61ZwXAh3FvWdYDggaM9yqhza7awACXUkjfGmjsAJL77uZvatbswMPhNNtqpP11GZ1PHrHHCxfVvKR59P7eWQJm",
  "key5": "42X3L7UouShyxFhybakaBqRdgHYQmQT2wthXn1NJaVBHv5GuGmrx11v7TpLiusS1DHgWECRCeYaj7PXrK9gvN8t5",
  "key6": "4muxdRwpbkzkoZCetfb7NWMThLX43P3H7vT4T2y39p4gZTtxv3FrGJry48q8FbpLMdgChBRvWLYXnyrXoPXsgv2A",
  "key7": "4NZPP9YHCr3eCKbsMvTNE8AUfWLcVDPxtuMrJdSPC1TkGihgSYRnC5shTa8CUCP1zRteXHwmG6orh5YiGbUHDTvs",
  "key8": "RNqFVEEcKcwJVQT6C6sCfGk8KvQwm7BwcSn7vAaqb6Ja6FftwHN1V7rLgAuFGPF45a4oxZnW3wY5ckW2X3bjpVP",
  "key9": "3ywtZdbp194cBTQa5B543fYCKQCjQZ4RkFL9mt6XFWH4ntKz8zVxxeZZ3LvbG2wLvu4nd3RA17MaJ5g6yZNqdYxV",
  "key10": "5bzqy828R1uuuLv7JGZqvWNn7BDoHZujjtwwnUDX4yKP2BSzb21CyPpHB7rSgeMAQQSs9QwPbxoqwZusxLdvtDH2",
  "key11": "2agCZB8wYLGU4d6aiyzJwSkdJoTnj8CeqkWAYU3t1zEKtsehF2Zkk7MBu6BvjhoxbFfphZGafZ273oXzNwdZtv2w",
  "key12": "23vuaYG1MPMziutdg2EyTA4AkNC2PxxwFHwgzcRXVizL1gw6Xp6ah25behyW4rA6KdDUxc2ztk8mym1HuPZj2HJ9",
  "key13": "xpGkv34rCQEtSvATHPtsueHYJKABpuz5Vz8KXdNbnwjnYFYw5d91por2M88efsquoCw2GBf4MYswsqRwMLCvFE2",
  "key14": "dPXzkcJAPPeJeZtQmacuBnHKcqMEdCe7c6HqPxXRD4PdjCDkPiN6nz75rozTjApBAQv47z1r6y8Yf2hoXgogD4j",
  "key15": "5p39tBZURCiFmo8fd9Dq8c9C2fEwYX7DPAH5NSHfSYxSamxixHj3WJppTWU21BNB4XVcqTmEbyvFCKpydhWN75r8",
  "key16": "2gTr1ySaat1WCakuFvaZToXAGFBNui4Z5pTXDiD4JKB4jHEufJRoKy4TeX67TieUstuq11ty1NtvA7koSWSLrZSq",
  "key17": "Ngse29QabcVEbp3wofMKQDjX7G39454bXTpbSX3QV9ahHgdDT3boiCchwiYJBMHLqUEqLno6mppteEsSXCSeoLA",
  "key18": "3xGhXTA7KPpjogxhbdMMR5VMQSEGZBFJKG9nRd8pL3H8ZWQPupip4gcynTRdfN2zeto2YYzXi4C3GgJkwRiND2Rv",
  "key19": "5cdapvmSw8KNEY5g1eGPYiha49vPx79Nxf6tJsVA3jRq69NBuQHJKY92XdK4bJU8jjnXVk34LAPKgvz5t5jqGsXe",
  "key20": "3YQVrm7Fu8KkDsDnqqzYWNSAx1QeQYuAvZsjQGPnHZFyTgfMtn1qN4CFww7Ff3pfaakwwH94ByWq98pGwAUHS3W5",
  "key21": "2Dk87sAJmtpmTnkVWeqKGPTheQEVzpBiGRtspZ3Ms9HK586HkBZ8Dd2hFsa2ofDQww3SNBe7WkLaFrPsa71g3XJ9",
  "key22": "Lz27cbj1ygkUvXj9ustFCgfeW5hWqjNcfHyFj35W58gmboAyi52dn1QDJ5pE7332UHxpvtDUEK5dwGfbJdAj8sn",
  "key23": "ZddRrSJQqnatM4J77iCji17TnJCFr9yCfMF4NBtHgS3U1heEixACZznzMa5QRZsLrPMYCMPSUP9GJcAHYCKw86H",
  "key24": "2MXxD8gJxSDcEZEw1q2BFTtVCVReFotr5gMX1pM17isFtC4KpZbPL7RXibcYas6M2BXXyfXng8GiABmaj33YmSrR",
  "key25": "2HTNjnLTaAEX7CEKS2F9yB1Yzrsqq1iE47xzoEsFHq7cmqxfvZA1adMdkKrG8ohXA6JHCw6qzRaNKD9FXkERNT7C",
  "key26": "5nc1otonWCKrpZCFrPhs4nFVwHALXnPBm6AX3fmoxH1jhTkQzYjto1B58nSHLCQ169nT434LAeW1bwxdohXGGin3",
  "key27": "2PtrJ7WD46n8rfmzEt7xpREeCWzcSiwQUSs4DyHwWnr6NSwSmRNvE62oJJxZQW2aJc8sBBotk1ZmoASQzmYgZhSQ",
  "key28": "43AE6erBRe7r7qCE6Aca6Yef1emN4rnjcMNHaphD74G7xStVLbzgwUzDnorSy4uve5to9PsqsXszU6KdTmRUPQBo",
  "key29": "4yWpqCm8W3VSV1mMR4aBt5wHi9pBJTKnP27Yt3tusFTMe7jwJ61bCzbHNgbJ3dVyUVYrEnMsQcQncPbxmECQi1sT",
  "key30": "2sbmRMjpAsUVqyvz6heEdZAsqSLoUZKhAU3eVKCA7DUUxqS3tp4UkCKeh1V1t4bida2ALSuo9vCVbP2shw1HwEre",
  "key31": "21xyNpDzp3bWtVVXAEmHjkriA93RaWQEmLwFPG2juAV14YY6UArjU3o2LLdeXajXnAFTEySemhdMZMa57k6D72sp",
  "key32": "2P27wdUFzhvZqcWyKGmfJcx2kvhNt9MtNeyPPkxZ2vQ49wtXJB2fN46az5p1abV6VKu8UMd4dkpoz6aAK7wCRoQH",
  "key33": "HT3yc5cCwgrFP7YVS61Kn1ErgoE41son3cbdgx1NnwkHUrDtheDMRpaoXHYK1DhwoNDXSb41kQK8ppWNWdcAWjc",
  "key34": "9MnxkJmxq9vaBNMbSScia32Fv1DqHG59TFdfVMcLVTZ5RTM949SeTUfaEkd4sZkjeRasGKC4diTVBFHpU9RQ96v",
  "key35": "28GH9yRq3uuQL8h2AvhHkSr5wFitkdzEydyCwpXXmByzm1sg5S6AMBcwwuF8amEoA1P5872CRnd5LCC3W3W4jQDW",
  "key36": "259LZMLiPdidkGgNVjaV9Rpg2u6DyR5jQG6nYvMKBWGcB8y86GH5d6VNrCckK4Srv2KhdpzM6wVimwqPVzDrzgaP",
  "key37": "2xjnT9Aup7vMs6MJ4Ys71i6SKPkmNinojrErMvTwUQjMVRgWcfGXr6wwao2DzaivhAWAHEDUAnq6CmPZdEfqgpPC",
  "key38": "3wSDKW8UN6zGj9xcuWR2uJH1PFg6GNSx9dfXHfxihkRqFuebc3YkVQuDk6m27vcXUQ63k8YaVyBeEJPwQkdXRUhe",
  "key39": "2qHoahv3JAfUs1JWnuBtWWiVRQPnLyyJ5WgUmhXWZgEbxW7EeZTQ1T3XdyWekcBY1VAzVevEKvHeC97tVwb2rrW5",
  "key40": "3dRutdvHk5aCjVWZmCssftCkVrCSeziPP8N1C9opRY1UwkNuJsqCcAGR5ZsVd5fKTKFvuAf1LmJwEaRPu91tZQ8p",
  "key41": "4AyzouHPToPQcq85fpCrAnE22wJr3yumeTKDwoEGC5qsqnGKk6LQpXFX4YiTsi6DTY7AcokzgisaLWj3aRLa6xgX",
  "key42": "56JQDnMjt4uM79UmsJxeqUafEWc87hCv6d5r95UtPsY22gefxpJMUKqKPKFfLaudM5A9MnuR4WtmSQfNAhvGKmAW",
  "key43": "44N49Z8W4Dn1hBVe5d5NFLdac3A1Bz5P3hRd4ZfKQww5qZUsfP6NoyLTniDZwHrJNh4zTLtjHQEUX4w9jRffSUtJ",
  "key44": "2oa2Qw9mmntK7kw5GT27tZ8XWq928dU979mL6CG4cQC2Y3DJyg8xCM4veyXDnki4ez6K6tGh5NvHRojsotWJA9tR",
  "key45": "2aQFa3Ff3DcBpjZ1hDzfdfyAL1F34G5DYZEhS2xL7D8HrqLew4Md4pnHzMuBtoPj24k9GZLBxRXQDmWaneZvu5p8",
  "key46": "4KavQU2wyTnDxV3WsXoaKTqGLVDfaSTLur8etKYZUtNJfBszobA9aPdTHjiaxcKLH2JyJSatk7EqvaYCGUZkaTxD"
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
