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
    "JKoFgHa3tJLDt3reXVSoMc8BT1EM6ij1Cg9jjMtXtuVDhZ68neTj7exw8kNvX8F7qUYELmXMb7MFhnKfxqQv6P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUrWc8vTvDBfkSCdqpzVrHCnDUoWidpYRkAiSGLw9PoYQHYPPm4qg3BDZ1jTQTcBbRNU5itdqh7DhBpCfMVcKPJ",
  "key1": "54M8LQ5YNj39VkTNsPFGY5m9CRv6JbM7ZWrapgpr4QZGHWdaRhwc58ssvBLdqGf18aS4Xp4tfAzHnprErsX8j9hk",
  "key2": "UBLBwGrpkaRhimq7JYT7mWEVDPUuC8rjEM4Xj3mZoks3ZtRYfZnD4xxZxdbAnMeKG9cbHssrBvPQTntk2BoUdTi",
  "key3": "DXpcdzB4kMprZd3Tzw3aM6wy2EWXq6PtAucUxhVyuY8QX4dDPLiJYL6GnPD6Hv12Up3aQgnRpMJ41sDiTcUXiJt",
  "key4": "Ba6kZHUYBy7fHSJp4jxevUbU4GkCpxBQQs9sVTyxHHuk27ne46JqHqfZ52UxzdhqQLcTGa3eBsCyN33WQYY8H1b",
  "key5": "RjaMUt6G3XvaC3BZh6WfNA82aTNf5X4b9FSd2Fk9JdTvBF3mAzBMcEMjRMXY2RzSvnE7q3mPZRNfAaUQnCjvVz7",
  "key6": "Yt6y4yoQRzsfjbbgofSWuGyJtUhVgtZ2zhbs5iyeMjSSM1mATLAWddMCKb4qJYeGVWZZzGbXApCQMYAtvdxKZSJ",
  "key7": "5r1i2PLPPbivqu37xTq3BRjfcMySqjvcA5kcRJLifZFkK5jGZLixZJtRVsoMRfD1gspjzaocvKRwsRhz9wAFyiYi",
  "key8": "yrD5nn5CZX66fix4MGPF68yzyBgCxK9a4h842i2APbEhWHNniX83z6zxkEoXhmVN8HrbvHTfHTzN1wcPxX8KxaU",
  "key9": "3qoDK4qUS9MijXqsfDRA2yChsoipiZLKD5e89i5PtU8wKZkqtio4qw2oNJXYSi18ZorygS5ZTdfmGGP2e4Biwa3G",
  "key10": "4ps7svYnsbSJdKCRKCY11pXZfyMwPrJDjwuqt8kGDzCN1fZftNfAXeaX3ap8pRErcsc1dCYeUooMxTdmBikDqM11",
  "key11": "65WND2FeUWgTxzRMbotAHiRyGcXYW18rfqMSc1AUW6teHEKKeoyhNq1CBkjSFCW6k9PMztAppietx1WwiRCHzzpS",
  "key12": "2TXHVdxasuE7vXrxUcGMKh9TEKuDU88dxTHpoPHRAtiDFrKD9cyMHNjSep322AdxUhizCKfcCkNGFWPa21He2edm",
  "key13": "2jHT4ZzaCQiWG3XGL4r1nyX9dr6xsNi2SVjoPnzVSyGt5cTiTYkPY5EKH1poAYJNurmABoWWjVktZ2qJYMtGf2zd",
  "key14": "3zf49tHrRTqB3hy4rN4LyT5TKFq1ZeQXARvad8WENNPEoJUT2e4XLpF82fuNp7AiZL4ZWtv5VcXPfKyQT84qSpFL",
  "key15": "6359T7NfXB46L3gpzfVoSGCCHuPpEhrQraAQpWvQDovP4AmBpqN1VovWZVpwCscmgSif6q5MyE23PNXUuPuEQsU4",
  "key16": "48qhfvbEWQ2mhj3wqeqXBEhApnn3LRrvFS7cZZw2uoZJwFBt3AGTVGxy2KhKuqF11nEsWGRjvmBzxKfCGiGGCc4J",
  "key17": "3JEdirFh4mo3vH9mjwD2xHpvJHqRNm12taJr3e6fgmVM2anXL7ZWEWXibrzpgQfUxX2DmVEoxn616h7YYiVYx3xq",
  "key18": "47e1fPurnNtzXpjranHfw8MDasD3ipmiYqRygtsKNNDuKHpZD5VcmJfmZst24aNgouzZeYWw2HKdJzjKZ52RrrYn",
  "key19": "5BCnstX2KSwfYC71FzzA5SBCwLDC1zMaSBP8Ue2JwaRB4Dt2m3mVyepfQG8NJKRtzHu8yiJtVon1LoYWh7exCiAh",
  "key20": "F2sUgEYvUFxXYUH5PunDiZ1vEccxLc8UzrAgnR7MT4njPbcRpStztqVYpgnMSy1o3bQ4ztgvCeHvSL27bS5mz8q",
  "key21": "45akgtKHcu2DvWjvoiCz1izQNXRPg4f9KGzPaC1rRJXoNtG3ngyJn5rKqB9RWxus9bokzbWpXAAx6iMJxLqjnU77",
  "key22": "2UqkRREcc4kSez9ju3Uj99CAF6yq3MYd4b8ANDpzkPTZgsfboq2hgb96AwGm7DpoQrtHeSt6EXA6TzfD4k4k749Z",
  "key23": "APPAHF6rix6nDLMonTvMSEgcy42vKKR6esnmbicxFmKEBReF3z9DScapusfhHtz9QGn4vYakudWLG21j9WCCcjr",
  "key24": "56WTNFfAb7R1hr2c9PtsjzCvHxnkuo7DirUnacEKdZat4R2c8WmCaqWhqknEyQrywfLC27u3gJU17dBZsPw12ubS",
  "key25": "3T67VFNPM6nuohsDQZWQP1MYEhuVUeP9HcfmqfuGLJ6ksiGmkSFBWso5cAeAGip8R4yJPa6fRhMPjapu7dMY6uM4",
  "key26": "4npPKAGMobryyLuAVSxpNAwJJAsowfF3J4Tqrcg8c51DSrYtsvVZroTqJDgEydmw7oiY9LRLyvD4bmAhs3igNC6D",
  "key27": "2z8h5ypKesGeopw4MAou8BLNYZ86xXN7CanwjQqFp8n668eWuoKPR3WGb1Rh2ozEeY3Dfyc18oYKEPJMszMJAg7h",
  "key28": "4Fct7NgB2pyCox9EGgCvZCMXsTjzrj4sXv2zaaCVtAQdAg3PwgkkgiE14b2kf22BE8uinErCEfmUsGEVX2qui21A",
  "key29": "4WtGrS34q48JVFwHcc5xYoGLykPxyWEoLCbGNdJkfH9AHRM1xpY1s5vhH4WFcC2PVSN5DCUf65mHBCba63bGM8p",
  "key30": "j5YBDKgJz9M4V6gwcn34biUrrDDF4rBB4ScAVnDmnTCKdHkGebBKFRSbboMuJqacfNPAz6WGEvH1PVZjXyVZ1BD",
  "key31": "3SQewRodFw2MF5zrrcXFVe1uuhRyCBMgQvkrcjpF2pzSkdq3Aw9iFofPbBJGZsxnJu3Wiu6R5wLHoxoqGUhpaNg5",
  "key32": "4uQVEQF3jLGgPzkVB6quWxL6UAsLDe9LR1cNAbS6vAB2k1xT3QroG3WwVfcEMXAND6QWw2TnP14VJwaJYxM7g7xC",
  "key33": "3J5e4hSrEJvdQbcWf7GQQpWV9TyZsAvJEaijFrBz76iDfWGi17fY5gJ44vqTmRkc8mK7vYRzBsFrvpsodRueGzKP",
  "key34": "5bp2XCUa1csCic8hEZxf3Ttdf9VZkpG4PK7vU61qt1jBwVna4FEMmxKEXma7g3ei6NZqJHC4EUXrFJQvm3XV4wTJ",
  "key35": "31YX2KJ3Z8mJ97BmBCAEdmirtoggqDHVYPR1kLnWNJKC3Sbsz3JkYz9VHutN8vekQ8pTJn9A4tWiubyzWmXugF4E",
  "key36": "3WeQqRU56uDjQ8EvCHJGBgd81BVMmrU2FkF5zYG8mrGb8qabxLeEDMBZjc7numtBFjoFZkArh6iov865raEtwWZt",
  "key37": "4fEUog9eKhUoca6hJ2KdstVLWoz2Z8qapcbgRpg6RzzMDT2vGyAtj6bTw7ttyZKE1kmzSj1JStV1RfdKNZcNHQRc",
  "key38": "26jtjz7U356ZSpHdCy6FoPp6wFShcyytmCvmhe3QspSBofARXBJ21ee6RggzH9cUH3bZjubBppU52FonxvCNgVG8",
  "key39": "4F8aHfVpUUmScSdsSekbBismoDc2R3W2nLw1e9KFBmDjU8JtJ6yoGK2CjYUE39KX8enc4kvTmf5AFheSjz1WdXvf",
  "key40": "2CQjcXaJrfAmxBHobB9PE4uMCC6ZX5XqCVQh8ryPEN4PgxCQacPMcBvEZJ4A4u3aC9eUaUvAZSN2QVqBCYX8HYDF",
  "key41": "3oYWn3vvdWQDjXB7JcJBanmDJDQcu2xSy146abFDDCEdoL5yq8JRDaWnnB9JQNtFYuYS39KHrUd7WTvn2dx9waNx",
  "key42": "3ULYob5dnhzt2DMiWbgNkNGf84oumtzXUzXvabriv8K9FkxMJJqq9MAwB6Roe1EJS3DsCx24w1xykg5eVQVfW1fq",
  "key43": "2sHSFLXBs4tmVhVRuFfKk6cKeQFg2Mv8ju66a65VNSi8ktK334Lw8QPGseLr3vt3j5Zyc7rcPtBMdTr4sZdHCmgU",
  "key44": "4PSSkNo45xdaUVSxSLvqKLj6iLhvd7HwAxdhruHM6ZX9v9XT8viT23JqdaGyiNLDKnuQ3VMrQeZHkPrgkupgPvcJ",
  "key45": "3BrQJuVu8521R12P8xdf7RSedUAtYnn7etBUka7mYmpHxjGBTNqB7QsXBBZtKWBg2BgZspz4L7T2zHcja7bRY6iF",
  "key46": "46Lv2NWe4heWFMVtZ1sDu9MabK3JLN14gGfbJS7jHTAVhXFBFz4htTcNgZJBnf26Z1FdB6cSiQxrc1iE26tTQtRu",
  "key47": "DngeRirszSwdoDJUac6FzSj4sUtCfGhv8H8G78snzweLioaZRZ79KhZj9omLmWBFchs3d6g69Q42SP9eLybopEy",
  "key48": "3No7S8DRfsv6YXur4qSyrpw4o8owNCLxkmjwVK3vHijQr61T4ZA7coYdESrztUV6G4F9qR8GjBcKoTYEcpyXB11W",
  "key49": "2KzGteAoV4zxPrqwCfZTayau49HFkPz7UnZut4vNPeTio761WWewSr36itYvycuweYC9ux7sd3xhCf5vXNf77jnE"
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
