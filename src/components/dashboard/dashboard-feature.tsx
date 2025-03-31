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
    "ViJVQYki1y4e5U3Bk7foX719nWrDuUHFyVzdrSu5WCB9xB8c1LtDiSWgR9NTVXpPVByLodLs6boaiLSw7pTBxHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nZNscZjvbwVydnjNzKqC1dGBq6zupAaGTgAGae3XJUDhuSp63M4Tq7sQdVcxmXgNVBaiZFBMuGnY2S4ZQwBDKCr",
  "key1": "a2XARER2qXGTm3MSLWpJeKn7hfb2dfEikEkxtsHdfZwTyc81exU96FNHosx9GLZAWWYbwCrMeRduyJb36ZHiAEx",
  "key2": "5YLAQc871cZcT4mgs7hXngwbanY7WxQ3HAjiUVw3secpzjyhkzYgewrZS3RrGvFXrnyNDzLbiwHhCRH5K2yiiVhN",
  "key3": "zjtnknK3Po1zbASwYYyPetLCjyYXQ223yjbTiVDWhA9jcaCdp6NgYP16ysY2euq7SdwRFLMU5mHcSzcKc8NUCXv",
  "key4": "HY2KFtq14qkp7nrGGgpWhS2iPgdrKDzC8dtYtnHjCfE893me7f54rbw1SEELj8PwscvA5nFypf3VrL4q91DETjn",
  "key5": "47BmsBQUm3uH5oTzWTjMy6XpCdXSiWubcujBm3zZiaGYckFfw4M3tUPipWF1sQAAp4dxGDrh6WuUsw6Gg9yzeEuk",
  "key6": "SGVreQdc4yVe6TEDM8PtcCZb9nMwoH5EUA8jH75VQoRwMmZnHGcnKtCxQuGriCdH44r4rSueuWtaXeU5G3iyfNq",
  "key7": "fHfp4GTxevfspYEQ87hw2h1L3wcnimH8juQPzLaPDj7KuJU6iLwqJWucFKe4UNiL2LfS5ek8H64ehUMeEXFfcxB",
  "key8": "55WfJ6raab18YhvdeMsu5mF5G5LUNoiQa6GDBogiP2mZ1FNX1kwQEVhpLxvLkkCQfBRFeLDkBrfzFjP5jTG3MZV8",
  "key9": "hmzLFcNvhGc2rADpJZgnvef74JMtiLRKxSqvgao3eWjEooNayfRZTv68KEEC3H1pTa4MRu7HPmusCZLT9eqwU5A",
  "key10": "2jaNgL7ojuMT54cQuQa4TU6k2gZQqRk7voMuY7htksswSHqTmm48TDuphuyJDJiPkpmF6uyRUsoWPMRbH1pHf32u",
  "key11": "4B5Yw2w8zFiuaLKYRm4Bod7RhUC6H1t6fBVVnyf47Au5AtRmgnHTsk6thnUXoZjtCYUrC4qX2rUJN8icJS9cfDYk",
  "key12": "4oLS3fQ65uzoQvvmZgCFq8VwCWA2Hsuh7s6yUTqmHKkLXZxsCt4MDeo121TN8a42HFnHDvQzFHp2NnSRGrWPCPwd",
  "key13": "5qbdyhdZYzy7ymXaYYgAEzpyYt8DDWdZSX9UJQ6Qi9Gy5GLqrTBzXbxSzn8PVitDwazjoih6VBXrALAg7886ScBg",
  "key14": "j66iTLfymkGihhFbMhafwrdsNcMmhXL32xmDhWsoGp9ENFhhraJ4ogMk4w26Cx3hqmgKxvt6NKQMP3amXngPRih",
  "key15": "2TAe1itFc4Ffawa6nnm39aRYJSXpdNXEWAtUESw9MuVStgKEqvtZMq8Z4PNoCMr4LXviZQWT7pjLA1q6UyTz6VMT",
  "key16": "U61wZFS62Ton918UiG8kmhXKDHdWQPnTmv7ZTzKM3adbDbMpaRMR4bfCd9jucpY3YxTeKF8BkNKdEr3X5QUwbzp",
  "key17": "5Qxe5vSWXg68erJ7aesf7pV4Wmc4G9E19KHYHkkPmy8iAPtBEZNApufoXySwSpzV1sGQcnhLS87caeWmFgrvE9po",
  "key18": "5xa3Yc7XvU4NSFrFXqAyyf8pUFcdAJVE1NAeThudReZB5VitvPvgXm93eD6sRZKUthm7dJ6dgmQ1WPMyXEf58YDG",
  "key19": "3CZSyE2u22YVaucyNjWHgbpaETTMcwHKFC4tSegxGYQpAYqSaquVm9Q4XAaMEKeSiic5BcZydKJq7V1XHkPqNuXe",
  "key20": "4BzAaTgmbh28ntUjkt93RVyUHqYBj7TstHk5CHNEkXo7fYaqsbSwVfe9DPMqoSZsLmHxnfZHBExo61qiBd5M2xuw",
  "key21": "2FngQoJ9LjYKrxJrk39WTEmuRBaqTPzhTRtjL5c2yosLnQc29rVW3SZ8N2PS3Kb2CKVHZpaFdcKKYcNG36yQ5dCq",
  "key22": "2gN2B8CWLXyYLW8ja2wVphEN9ezGPMW3oFt1oGFhkVDjat8qfTHp8LyeJkCpxMYgh9RDoMgD1nCYHhZ53NWwJoDL",
  "key23": "dLqMRX4aurMtZ3rfCePEjGHczFCELUQ9m4FaRbYDC59SRYtXFmENwpZtV9K7wDAGyQaNFUsYtdPXobbeFgYqVHL",
  "key24": "2AJQG1vrVEPvsTTkgP4cSY8SSfJE5JSHNX2XNfELeS87SahAGA12XvbMiSX9CTuaBk9oZ5VhEvqQC7doDzjnvcDZ",
  "key25": "66Bem4GFcMtVMnAFhWfMyTFAR2vbY8KTcNab7xxiTzSYrLmfkqoqkavHAPPg2uPuGTdtgyRdfaToy11xoUGMFsKc",
  "key26": "3VVxbntdx75odkqtvG1Uai4Kjszc44M3hG3oTDJHMwLTgV8M2wTcWusgCAdoeob1tnauCjg3ipMWtXbKuAmzz1zR",
  "key27": "4AGwiZc9EBjG1WyFZxVyENQfSVWq1DQfPQo6UV1bWsHxT7NEU6Yi1c2dHM1yoVmFryYCNeNfCr74Pzm6RcYGrQyT",
  "key28": "3PVutywmHK8MHzzSTyN8m4dMXPP51aHsVavdFywSk8rGZaithF2FFtyEFz9K7Jfzgsig79iVe7TysSg1GzAWur9C",
  "key29": "5a2nfr8sATMtEjBWQRGRSAuisMcafvvY6bcHEvhAtptJzQDusW1o4Ro7Vny2cn7YboYQ1eWHgUUfbZQCyEZ7Aj9A",
  "key30": "2yPRueJP3Ptbdq7WfSu59LmG13zt5UDH5q97d1rzjTXMapFAuJE9PoubgUtixZHCXnmmEmdoK6Mp3MMbmvPdCkk3",
  "key31": "5qvCCUjJTE2eALsXDcp2uHBUu4njnUrHHJDEhELJ9Lbw6TERTYvz2DWb3FvEyypziG6ojE3UWtgmHPUr5jsF1SdQ",
  "key32": "2wpvToBh6Cp4TMLvAbyUCYUT2Cyyhi3GXzHz3qum4PZHXhQMhW61i96FMGSYzhKGs2q9DK849UPSxqa5dFgSpMiT",
  "key33": "NBihvPBZsEngnNnu1A41ZjyLRh7Zn7aS9sMd4NhxALbsEpGTBTvNQNtb9ikFfrnNdnHnK1npA3C5whMTBiQ2FZd",
  "key34": "2bz4Ad31PrHy7T4tsd2b3gncVFoCTWZCmDhgZzcPPLrFm7HW5j3aBhL7jTZcaKxzzwUF3X6PuyV1AFWu6XriFZHY",
  "key35": "1c2ZmTRbwTSZ5F9wvTE22PENtU7HxTM2UXwEAiYF7qeTiZfkqjSUpZNMFLNRcaJ2oTTEWHJdeYbHjtpneVzduhk",
  "key36": "4xgMxn5sSBbkE2yXxLcJB9MyrTWZmsFoVmmPMk6kA57cN1WSaN6vBTUpLGih96bgfi3vir7s9VD4L9xCuvtPhHHY",
  "key37": "oFmT9ZiysFezfsMxyznA1PXMYfcYVbC9PcECWhQim6uqXhnfmRLaGME45RmscMByRtMKAJ6rHZkmL3FziDH8v6F",
  "key38": "4ihpgnpEC8Nep3ByZ1L3uhntNKahPCa9cjw6D9tTDDFYNVqec8F7XV5Eq3UDeu5y1zxKGGnRPfGQj1Ze3kwKUUnB",
  "key39": "2D4SgFeMxSd3TJf9y9VCNSpX1bCq3dufGZj9eukH39nPEcFKKGZnMdHCTocmxXY672ZWAo2EDagUV3Yzx7dPsg2C",
  "key40": "3wNve2K4oa7mNV7TyP62ZnAiNWgYsur5CLc26aasDS2CJrz67yt5KyVcmR6kcL5kL7eV3D93AL2jzjYB1ePUg6Lf",
  "key41": "2dth3A8EdPZESiqXvBAPj9rFDYMXLHcfiahGZXyqP4otek857w6EFHewsE5ZEWWuJ3BrBnoyc2SFXMeYgAWApnxE",
  "key42": "2PonbaSMQesSc3urCtgVZ8bf4mma1oqHVeUwFq9bLE5MKS3oHpFuppNN2T5HxYSb4JTtHtUS91odqKxvk6ZjR1wn",
  "key43": "4XwmeZxBeu2J36mzywxKNhk5FkemQAwu4xDNSDQSnVwxDuqoEApM7oPDt1BVdrLtA1Vnrc764tb1wXwfEqXbU6RS",
  "key44": "h2ryKkCSFKLJX9J9qPH7L7LVp6CvgKx72YAwwjmLkidjZTqSksAPrYV2i4hMKpecwcML2deq1juPMomxqFgRCQF",
  "key45": "5FH41Q6vae6dkwvi6r7GXcRpuAP4gv21agtcv9zJGmUitaaKC4nuATW17t4f7Tydj3BS4joZqVw2cDuPMsVdgTv3",
  "key46": "3sTjN8cZZSCcqNB7iFpf44oE8ieVApDrEMi8ahsQZAZMmxKUpGHkjaGEjTiFg6V142zUHwDA9tcbzkTnYSXAnZFf",
  "key47": "2qZ4berYeGYmasyDoNbQ7FQq8LMWhj2hGY1EsHSwHJgWMmDt1aYgLjSx1V9MB8J7N2AkNCexcgkvSpLAWLv5L9EU"
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
