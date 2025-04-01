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
    "3mxtNP9fCNEVd4Grv8KTD1a9N8LsU7PE45uuMfRot1WUyBvxwPQGCAn8AcAGwxHNHkcx21bvpszjP4Dj4m3wZiaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLiZuUFLXNgpjZ7rTt7GD7vsMZsBdtySaZvbmFjLm3TgZip7YUxYPaKnyNwdddiwnhJAD9uHUb13VdY9uM8mPQm",
  "key1": "L6JLnfj1F7pVnRX6i1vw6cb8N1vSsxqXe3MCrJEaWB29yzbwSjkDu76EHsY4goxRDHqKQTGe1kbzW7WkT2uwiik",
  "key2": "3bGTmeSSKRkY86SD5YiXs1QsbHCaWjCn6Qc6L5LjBygLwWiv8Tzn4nQL5MD7Ndd8ogUxJwUic5gbP8nBfE86MdAS",
  "key3": "3LJ4nWV1disW9vyB1Lhh2dKM6a95t9vTJ7Qr5ugttRLj1xuXjRvq646EZZpymfwMTCmvbUmQnxXPLbcyQK4GWVJV",
  "key4": "takQHrsH5WV2zpaVfpuQLfZfVFNG8KoXN8hXXjtQvi8LXW6WXBWssdGueXKSdb7QZMjU93UMxPuRz6eADYDzHsQ",
  "key5": "3vNk47hdH5jDHL13PbCcDYhYkLRdarSdUbWjNX5wfsCRpWbN9sCEveTV5aQJkKoeMr7vLnMJnv6jdPKNAqHDuQBs",
  "key6": "FNGYhAMomeFQNxDC99K1aD7VkUJ3C95EPPFwxyRjPBecB9M1ooa6rrAWYYrJUrBJeM1y5mjTLm9oom62DBGMjvM",
  "key7": "2oYJdSx119bxAPGMwa9TDnuAvFwW5QeiMnPCKvYRQHqDgd3mknJvpMYzxwPLUDeh86VqVWKwMpSADgr392P5QLnv",
  "key8": "37hAwymWAttpPBEw9W9CB8nkGfr5fW4RJ9ZN2jaLaxxNAG38LSAGiQ9VzaXqZspEWarELULxf4bNaa2FpYjWSw5P",
  "key9": "qJWdA7NPdujfG93QLHAcS43Ah1NhtvYRGhbr1uFpY8JLVGrrk7JkWzCH4D3RkJeQXjKdWUjyuceyC97jCkHqdsV",
  "key10": "oNhmyfapiUSfi2Ms1nnwfjb1HW6pCpGyqWQ75ipUR21ECr6ZgwMVEYVnQ9scSnnQrb3PRTroLCJo7yDjAqcdxLB",
  "key11": "3dQ3Mx3amMLffiwVSAu3b7AEVpjMCKb2GK42nuof953FzAUiYWoMmyYzTu1977EpCpu1fdLsGjr487Yh4YaKpe3e",
  "key12": "bmYdmEzsFYhRNv8sxrxrxtiXpm1NXFsgQjggbVK39yxffjzB8ixZi9wY4wSyqRtrGiPURaJcjoHyyfPKHC3tAP3",
  "key13": "5BgXaKmXhctauKufRQCBzxuxosfppWACudD1FDPnLd2Q54Kk9cJzqX38XUQPb9t6pWuANUaCHpxdtMUrjX6jTeif",
  "key14": "WtcsZfkTESbJCAHtTmrJ6jj4uAA7SS2XXZNt88p9sCccgLehHNRyyFmpLKGg7QivGQyU8uMqRfuLmweviLaAvu3",
  "key15": "2ZRTKhNAaAsdS7NqXMiSzPhEQV6c8vobF1sPAoCwm2fXT1pCp1JBouDDR1ozroeZSdG44cyvzFC2Gg86AXD6TWPo",
  "key16": "5dozkgPURkhgd6iUL6RRipWG5XHdFUCAjAixKvgDnp9hk1xa3H89tisaDBrbyKLTAssjhvBfBB61XSXaGjR4gV3u",
  "key17": "2vaLCi8pv5LgP3MZCDRWwp1zzhEwkgTSSPigvTDcAsv2yYyRvXP4D1Tbw8KBjpDe8cqK9G6As1j6QJPFgJpDmMdq",
  "key18": "2z3mQv4g2wpX22uLhzsv1sQgmStM5CHBVPiqxTu5ALCAJdVo34iNgvWrTqEMoDKgKKf5vwfz4JV3B3Nv3Mi9McGP",
  "key19": "2qcfEQj39vJvoKLuEmbLxSRyCB5ffuUmT5DNusxUYnRnziWn7cNhJPEfRvdq5Rk97jZugBaFLwyW66QiqRDHSLy9",
  "key20": "2HHXU9iDYPgSio123jH94TggzxoDUQhGvs8dEHQZ5cWmR7deNwHz3u7vbZemKdyJgmFXRiA5pDZXhX2WcY7rQSLB",
  "key21": "5mTX3xa5i9mo7wx7Grdm2jN7PVzMC6R9iuufzHCreq2Qv2utEhQwUuHmyvhXM9hSiSCtM5dJsxu7ds97PvcbaREU",
  "key22": "4L91qpPVUMKDch4SXRP3Bnb9XVsg5432kEGF8tihZSSRR5rbMJuSNyEnt7ehhwgRiUL1B7jyWkrjzEyUbfPUNkD1",
  "key23": "41AxMkjQ5Egk68PBQPRug4FjZPDUq4d6tJJeSqTN3y7QwcHAqr1tM6uv6GYWGV2SiJAoZxXeC3t2Qj2timQRR99F",
  "key24": "2WYqJuWLxzyPnyqtx7Y1gU3KVt7YHtQGd2A4rT2MDnNHNiKfw8oMrfYEXd15QYvgjT4mTVrfQUaPbRWzfjWB2gni",
  "key25": "4AAHGAoVGKzbRUDvomNg9Ktr6yQ8rUncqvgtxNnebKo69ghuKxC5ipdctT6NN4wYMNGREyYdv2uwZ79GUCc1CYm5",
  "key26": "5kSkizzssC3yRCrEJJHGposvwCYvfhyeDLstngAVktDNbpZC7nixhpUvv3aXXbKEkMfXXTpCuQeLuYqza4AhfpkG",
  "key27": "5SxowEZctB8M6EiT5PRhyxeYXEhQhL9Z2ng4hhgzk9oXT5uS9PA6hRKaJiG7WxU3iRDArMnnVZdKjEFdKQsSvzXG",
  "key28": "J5i6Sjfy4JG49NJFNNkqRVKHbXRvQAjHXfvkynzbTa3FgxNM7aRr8UsHys6is9BUyRnhW2Zc2hnQgm9enB4QMhy",
  "key29": "5cgeYMu6hkFJetRzom2BCNoyeKo9shikR2f7QThoiGK5mzaiSYAJx5TJoS5ykhkbYNkHBWr4Jw31uRSpbWbkDBFC",
  "key30": "3mkXhQMyLi4YndZimyHdcsjb7anf6kHSCB2UAbQa3MrnUxwudabzsGJvPKs4SR9Bsbnw8xEN2b2PhpvuVbPwvJqH",
  "key31": "3b4uh1nvm1crzue8TXS975z8qG4xmHfGZ96uoWbnRoR5TowY7Q1HHde4hrXPvqBcUPEbbQeq6AwbchmZaVPjsmmG",
  "key32": "4bb43sgSKZtixk1VHJwSpjbQZLixfT4e9vgaXNDS13Th7QaZamk42NXKhWVR9DfAyanXm8hLai3mJcUMTkwdoUZ6",
  "key33": "65yZ2RbDtYztoKtFMChHmcTNEucsde1fL5FCe51dGq7tVD9wNNXWecJFARqLTJrnrmBnNLh2rhdELuoMrf6nV27C",
  "key34": "9Ch5BFQgNvutKhrszdsvTm9gspgszJYjq7akQyFEuMJUf5scBRcdXZvuouZBF7kQjq15xmwDbBb9priw88hJ2P2",
  "key35": "5W32pixYMn9BCRDKTexiTk2SrXVv3JCrsGEuGj8AAG37YWBpsx3B2bngdjXCfSLQXNhxqNwqyZepUamxwyjHspEH",
  "key36": "265bSaFSCvamNXupcd5mnHnYvt74ZAsDZsEqoauWR1yuUy9ddhA3EYuAWsmTABUxbNfH3tHRNFKf5v13s195Figf",
  "key37": "3aW9X4H1a6DoWaShQNqwh67HjF6QJoLa8MpY8SC7ZnenQSCXjnndGAmsCGFBP6Mh83N3vV7TNKpr28iEqCRYQUDZ",
  "key38": "3pv2qwf9TwRZW7dXiyosaAQqsxLFweLcApTMEZbrMz4q1MXAYT1wz3FEoZnXaWc5N2SzdPzqXy4JKgFVX1S5vD5t",
  "key39": "613q3hhQmNrqEajjurpiGesMp9WqFeEC247iY3sWuRzev1vHJpdvjkg4agd9743Q9grsBDVAk3uAgMZ6xnLvybMz",
  "key40": "24bbYiWd5qwzjvMjsytPThL1u6W5Ri4idEwQHRu2Z7psCedGLavtutsvHZ6amMSddABhwnEH15obsEW5tj3Dx1ao",
  "key41": "MghJa6hzgpwqDYKgVD6ZbDqAa6JpHJyiuFNSx38zJ7KFGju8srAFxLKtK3q5iQb83LibQG1BtriMUdXQ2KXRBh1",
  "key42": "523QxPmMR8h5pMYQx6akFBGjhKjRHB5qN84AtQAMHYFjH2PjNuEujVcTYEkKREQ8HVJ8RWpFRkzd9va6PpDcSkWr"
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
