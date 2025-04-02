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
    "3ZmoUSjFX5qhU84CE1UNQbB85kwaYfis5yLxXAMoiC1ENrXfeDppyXZixi8eEJMLQS4RTyNcUmUN19o8tvKwicSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSjm8LJkix4BeUg6u6ZV3cfKnpbNz1CHTUUZ8mF3yJ2HzEZtz6QZLH5fvsEf4K9PmJ3ighfxWYoaEeCQfEcmjhg",
  "key1": "2ZuuKFBpSBVTQVSnj7ew9meGMe5c3UFyGbtkkKGXC1CD4FF3cToyDb4vuaEJDrwM3h3oLUWFM31cdzjjH1izbKYs",
  "key2": "5zHehHyvYgf5zn4uK75nzs3eLcT1ruQX2k9DqYo9TTEw33qZV6MmFvPBE3YKmDNrncy4H1cfjiM3SxjrFy6vVGwi",
  "key3": "Hs2VXEvxZWGFvqiQazJvDsbfaJnoJh93E1e2UBHwL7nKSfbDZ7DcN9i7tTVD35Q1iqHaA3794u9F2ZZ5GNWYjTA",
  "key4": "3AoHETRiKeVjwpeyP7RR4KSbSRTJiGedC4MZWH1w86B152R9gtbErK8B2zsF3kowCMZeCNJdN5z4pWSK4qjYvMqY",
  "key5": "594VVjrqS5HVYSrzCe1h5A96F7Vy7STRmPvyA2jExsz9BYbca6MbKd8dvtNiuL5zYNDFFe7zdaQ3V1vxeSfJDPRp",
  "key6": "963JWyzqYNsdbaRN3EHqin4t6Ef1kkFdU1FpEZaegeoJTQT4M97NTC572hQkZvsdMw7mxthnWaHgb7PSADwhWUc",
  "key7": "2rEG8cMi9LViQt8wVC4r6XJbW9qW5SUw3zHiaEuEaCVS3oV6UAJaFhtUReMmbuhdbZF31Na9GixgsQ46UsmNgKxW",
  "key8": "5hzbK92PoPqzYjUZxp6NwxVGkiWjeh2ABUGMFC8FkNrAtsGxZZTcGCBc5hAw5ydwF6L8AMZpY7xSNCg5xdNWM6ch",
  "key9": "32kUc2TyCqE9cVMcHjCzwqiX5vSbBvK6E97tBLDMonQqxZ8vuTQoESMj1474irHkZ31CsWsiJEngmSvQoqhync4H",
  "key10": "5GrUa7xgvS2xDxQVkGknEzxBDvgwSh1j8F1Xp6LdkFQELCCf7byyfzWhsNMPT6wgLCmP7NhYKRjA2Z929WeED8m6",
  "key11": "4BW14hAP461PiJcuAouAocUB4dvNvMbefL5rSbHrZxuvbGLipcHGPgS3YSaprTYLD9kx89Ww4CLCJ62ssSVKnQwW",
  "key12": "4wu8DGLb1epZR2mFzqSVivgmxvcfHApwyxgnniecc6f9WGXUHP7MF6y41neuPs8NZ2CkJDcttL3Xe6FJ9KsnZdwM",
  "key13": "5ghECMvfeK32ZKqEnZzeEQpenKcFmWTGqMUGVHi8hpEgUpw7aKWYp4iQsWgK3c9zF6EmgYCWMmANcHrZWYkAzR9e",
  "key14": "2Q2aXYYQbweJn4LYncdeSpBVLCEsnenhLbZJz1kXZYKpHRLBsgLhdFWzvbfJVto6YNQ1CXjpStjmdwebbXkyZHyu",
  "key15": "LSVz28Gse5m9g5viAYf6mG3MzLutsdELbqw2g1NYeUNVpfyhWydnACQmi2hdb2RyfZmpaSzcXrvduLcGFfvkbfG",
  "key16": "QzrvrZitLTyEZHhxfFVjAsyXe2dTPVVHmymN3WKuLZJtfpPJPzyyWinoVqP4PNvk5dMswnVEcoX3Q621mHHh9r3",
  "key17": "cBU1r5FJYVF5VMYc2fknNFRiNRi65YL4pzwLVoyqLMFTRc6gA85VoerTTKDbyPspLYN35WCWNWV84pMrJ7eGs2V",
  "key18": "CLgNcByhKUP933A6zCPXdz5yQ4Jg3LpacwL7bRBeFPy2g91MEv9ooEsjwRR5x8qM8Rs739e7aMV68gkk5XF4hAZ",
  "key19": "3S3YtET7z18DcFWGikmjoSCdkQVG8Ei2Yo5AxWaSsyJ7dNTg29bXZ1kTxihrd7rLEZnF3vS6AgHp2xaNT9XKSCxd",
  "key20": "5fBErMGTXSExaDwK6SCLtSPkKPvmkwuDwPcMcU9rSNoopDj7M87xiMGTbcTQJKQrJ5HEqAqwp55uziXGz9KZn7kb",
  "key21": "JX2LSHskNsL8uEHmBgkA71SpQQoYVuWNHs8oKAn7JdXp8GHrTC3khDHDyoZTBdfyXPvJxNzT1w4q1DKThVqhZVg",
  "key22": "2ct5GmT6p8FGd3YRq9hFFUy88Una3JY29nxfpKqmN9dxcTNccpATgR9A9dbyAt8iJGQULF7KqUzkxh81KGD2fP4C",
  "key23": "YYPzDY9SxHAX7Cv4fKMeyp366abb82PeS9PuaAP8WzjLNAwL7PrJVeZpWPHebM77fGm3sjmXYGXEaxTaEC6oWZF",
  "key24": "5xL2uPjawkZRpVXxcGFZ2Y6SnZKaStpWKcjK86CbA5MUBeGCj3NwhiWk8pHv3SNUBhzdZ8u6t9BnSDsXWhb5fhDu",
  "key25": "3ysff1onbrrsC1ke8HSNWmVRJVraNvsaiBjH8aRqrvk7Ug38wKwdSfcNxBi5rQtjpQWmetNc9YwgLoFsBhHxNhGC",
  "key26": "3uRYqKKSUHjMZ9ZcGdQDYnv387v9bDAjoo15AurHytuUfWpZT72tbDSkRgfBJ1ZaA92CLy2AjuWsxqbr3p4CENhY",
  "key27": "5DfKwZuwQw1njPxVUzS9SWkdVXyEN2UnM524vnBugxuyBcs2xTLyHoUDtq7FzpN4ruf9677x64bvFTUgQRqsvbAf",
  "key28": "4et8EhLtEukCQGiKgPz95bo4AhTbc7jHMMsbsh14ZWFX7KWAnR1gftDMj7GiXLspgLawZ8k2hfJZzGFWXFgELaZz",
  "key29": "3dajrk5yJgVpMY4Lb3Wz4RNCCMLC2kzwuDEsLi9w8YyixodmmmdKPSBwzsHEYmUdK9u1z1Lh7EJAYqQ79AF9Q9CR",
  "key30": "28iJfvgE2TTJ5Yuxsc9DPiWgFy8r69rhXBU8emyzwAahnRJ3ZHTXs6nc3uRQXXs1hwz7VV3CggF1AX5tbdR7J66V",
  "key31": "zxy3jLyejhvMYzVbQR3AVYLYR6ihpsXyhcjHWzZCDyFK4sWXzyjeewMjufSpQiQKmeCqJ54FenC53hX2C6G93e5",
  "key32": "3cFj7tvrj1P9g9kxzgo7Ft8Ys2UK9XuNu69JcaCTYPDrwmfzi5jHhb7e99C9yZ7Qe1uMyGcdRaib9SvKfhr5JNyp",
  "key33": "23zUD3W6KQ7TTSfkmU11YSuFP371ostY5D8w2KN8V9NC1zYZ9GvmEBd5xg3swdSAMFMTyJy7ie47S2e9dRAbkDSK",
  "key34": "Nb5LPra4BwhEe6dv2Dy8LnLvzPYGG9xPAyPiom1QfSavLUBVTpAienHZhwZ9PS8HapDYhmKScmpjvU7HEiP7au1",
  "key35": "Bm54Jxe6Tjoh4UchSuge1dQu5T7dHrFz2deDw9CzHrWWu7AdA6cdLMoywdLQzEUufFPPRksQoVoieSQ5UsjANg6",
  "key36": "28SHrjfEpr3FopC2uEaPB4uhwcGGzxGyC1VaMBX7iVzKX4tivHAdS8BxhkX7p4Z1SV9wLTFz7EB4ssfyt7r1v6i2",
  "key37": "5hj4KwcYcCZME5ighR8h7v5VMy2s1YoXNDVD1HyPKbvg7CRcNwvRbAgXDd9US5a61KpYqS2i6h5k1V4jj9ssk5fF",
  "key38": "5YLHVLnQoTSghLViAEcSu5wk4Yf2AU36Lf8y44Gt8aRQmjevSvQjBo2a7nWSbXgtLsmTRacZzcibqqTEWQPRGb3o",
  "key39": "56UtKATYHCehrpxJa3mb5HNDCpVue9V6XEFSVZPmWXKqwVo8LPDmsxwnjU9ChqzN2F2iEFidRVFqaUv7FNR6nMgX",
  "key40": "5cy3fRrJr59qirCH8shfiHpLFyEzhh3sErjJc5VGd6aDeKV1JFWhjnycLiwKGcFTsRqfNSe4EHq1euGdvnsWH7Sy",
  "key41": "CPZ2ahL1LBxiZGwbr7W8gGvJaZ9Jgz3mDxiT3gWoVoJNAu4TYCcVCTafa2kneigpusVonQq4DamdBgaMeGQ6frd",
  "key42": "2kxWW88p1yf3UUNuTZSvVUm2ZqkSEWXciUWNrtHcvKnJmE6EfqJShSwswxn7cJr7cahyELzyzCHh96AMKtBxNYkt",
  "key43": "4bSfKXsYtdgu9kDVEnYJJtees2ukVBdJfoLx73nSjyZ231fg3b4FGUcaXDUEGgBtapr2QMV3sWVgJLeGqGcD7kit"
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
