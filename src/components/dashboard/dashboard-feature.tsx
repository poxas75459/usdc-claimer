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
    "E5oRDfvbwiGojYZDsuRmhiM1RtfmhN74AQVozVHsz59gn36VyYE8ev9eGbWibMTszdhfA7V9fNhAgeEHy91abpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rwvU2CrYvwi2m18Gu7uAgNN4TWjj3NY1vDAG59EGLaYkTtWXjS2XP3Q6uZ1EPvnqgyJq16EhZdRZSpoxjGRyRx",
  "key1": "2scyrB7qes6vt2rU46w8utQDPSuKzSYRaUmG2a6tWxAebN22VxfAZsccpoveZw6pBr24zqJ2J2diR9YamXHfUhwW",
  "key2": "4FC8GnP2UvDsqXQ6zBid6jWGYPyDuEub7syTdN8yzvyHoUoxKJCuSjwhKLqLVjgeb4vNam6FFXzJAQ8kuDLFLZpV",
  "key3": "58MoXn1Q9nFLSmmxkHiT8zsQCQ3MgVpn8y467fBrcqpURZ6mUSwkCmcCidiCn8oVHKqRnaKoUsYB1mEDYq13ipFN",
  "key4": "3ULex6dBBiVMDMAHPw5Lnp2dbHtM3TEkaorpnG5bfAoZcYhTeSuyJzM3KQF65YKqm5o7jcU6rv9M46wNzKGLZZFk",
  "key5": "fCQE4yGiceMfwui8BcZNi319cNjwtxzppLYH1kDn27PuepVEkBfgKEfwhhssYsDWtMstLz4n3Ddyt3tKSYu3Pyb",
  "key6": "5GujPKR9NbnrjEdro1tpZujXEkdMUo1BZNYJ971dmWJMatHgo1PkrZ7sMnChGxaFAvPcxWFTxwmdgCVFeBe2eMRt",
  "key7": "cQQhT55hDYqTi4UGToUZEHstpfpDhx2tkFarJKf3KDrdzLKFueNDgehvYvEFUtgww3HFFPdKJo6f8BgueYaoGxt",
  "key8": "3K8ixyhZsW9vzKCxXgRKcDZXu9i1tvNPBW8szrE12HBt43PcW4tL61CjmmsAZu1BwbA5NBuSJqXJ3tVCBhAMZT4G",
  "key9": "dzZTy7cxeYNmLVRXhU3g4HPtGxuSBQMW8uWmbPrfF9pRXaiWtGeCZQmknMX11YBq9nAcvNQzG2QzuwBCaS6szZh",
  "key10": "3dzCikYyyTzdx66WwXfp6h1pxVoge6fRUBhag5UFWtecsWBFdcyiDA9Xz7oFgYr92UT93vDYAYQPZUnUAvTGzrWA",
  "key11": "2jpAUEsaZCJ79MsWBajod1QtQUxw8RrymVk7i8PfbVjXP5RnMR4kEXepCAtR3fTXdishoRnnYYbHRxyMvAMaRxxK",
  "key12": "3yDqok1cJ7zK4eGigaBugT77568Dw3niJbVMj9pSHEbyVPaDQVdrTJoGeTvFzdThf1VAtXix7vGtJmiig8GJC1uS",
  "key13": "29ewMgGd6XhXiDacxCBo39mUocKFAXsFr68tb8Bpd3FKZUCVSnYpeRLURMp8wvjX7pa69h5iesx2Qk5EQMPvpgyG",
  "key14": "63eagVizosVPAsTAwFvQQRwgqDAN3CtLQf8g1GBeea4BoY3ArZLiFQQWAToQXSoxBYpTqncAZgAsnZe1ZZPJgawY",
  "key15": "3EEMkuBEb8MjxVtvPXkyHSnqkUgyCXkbW1Xias9aJtJMzreKxJEUT46f84ELPWxQwaJd38sS42YhQwN6P51nCawn",
  "key16": "4YaksgvyrURn8MTtUeGDyFyhB4733RoyuKB3HyZFBorhc8MsKk6CuQaSWUgxXg1B76fuphbgKkf4RgSJbqRqDmLN",
  "key17": "5unYeBGnwbQdZHz1Zg5NZgj9mrhY2nK3m2Ni377V2Ya1DN8Dw19izPJA66t5DAYaR18Xxp2MkBjaKiLDNuQcWskp",
  "key18": "4xjpNBMv8oFaTP27KLR28w1v6Xvp4u4va8DG745GKrr32vzNLA1QDTwPs9pD2YbXkLKpR2Bfpxr5JyzgcgVMScVP",
  "key19": "4YgwDp3hhRenMz7Xw7pr3c27RqjvhNgec48oSsQZXSZGw1Gyo1hU68hxN7MXt1KQLfkzQuFeKJcVzbS88WNh2rGb",
  "key20": "3KUHzNeszALj4gq6qGfjCuGceWTms1Kps7ZLoDqbKgEHaJywBa52nw48Egfyr1gHxVpanRSJYFdvJN6Ek8MJgAY6",
  "key21": "XaRZiDrrq9Crm4uCg5gcfqbejSKQHXvacqKXqyHF1UcAhnhrYhQJxGrMpcHW1iF35Bu7yhe6yyPnwP1UzBZzpoe",
  "key22": "5677zvRDr5v6MCHy286zX2P28U7ht3sipaDwvQwHgtrgGHuVnGioukwZwsJaWdvQiiyZk229aJwDDon3yhd9yEUz",
  "key23": "cLqchtX6LCaMyjxxzCTaGKWhHuxfPJqkRK492QuXSSE48j85T8MNwHhhE6JjaoBir6Wj8Qpv68H8V6Qfcws6HQT",
  "key24": "2XWtKuyXiRFugECvBuf3GbXW2HyGji9Pk2yVBKxecL66HXvJXB7BxW6UQg6QxpJnW8HVnURHWUC1cLEGdi4H4PCS",
  "key25": "3Bk933dG3QhJjmG6hjQJ8o7SZBT4sqsnkTjVcbx6g41LKDWwXNrznAyGuJgMVfVM1RPTZ9v54ebT8ihPbeKADwxc",
  "key26": "3zx9wpxF7Pq84bULMERFoEE3ZtoVZByvTNxNc19jT7Wy2NBNtpQX9JoLfngCx83VrD2JPvWuTsQUffJUB4HhWR45",
  "key27": "DFGCEgT3ukiQwDtPQKTBaYzAS4MYsbWARBbLtZRtpLkifsNXRd9G8wALkqYjaDo6WSLMmVXFqKvqjDMe5REzL92",
  "key28": "3HoWhcxrQmX6zpLX8UxSCNNvFTSGXP6735AKPcG7yQUWaSieqdHBHKnJXKL4BU5d4js3sBCGcHsQPWNyHVVswigv",
  "key29": "5burUsbhFXoSGFa16bFrHoWKCuyC4Gg9GAqqLnqpiPbWcZ1XHbzzYJHxFBxSdgHM9vKkFpswSowTLVuCg2bitAsM",
  "key30": "4jBzWW1rFj8miV4UQAQGjqSoHPCUGRMWAY33wkLW1hQ8THtHzQ8PyL3pzabDJiDzypQyntWbbCDVPHH5fkJWbTM6",
  "key31": "4xgeV4Jnyn4NLUwFsqkqRBtaP43HMF1WwDb8Gt5FwumFTAmeh61rq7Umu3A3jLxGAnDe1WEY8h954iMj3LAYKYir",
  "key32": "3D2UrFqDSxYKCJHKqcJCqw6tDwBUEMcYyfTTbBbbTErG9ziPX1Un1qNnyP1n93ottU3wnYq4zmUsQXTZtZvfEbWc",
  "key33": "4wSe4WxfncgKkyhp7sxUVsYR4hpvEd3RSKcVczqFJ2pGJs9TqrEHTrX3Hxpw8JLDwUPvpiPnJRY4FDgVnC471NBF",
  "key34": "4RjDmGy4mPwSMU7Q4ghLB323mQKXx9SzaPUngQmtPk4R4Vkajis4rQHfSCmKh8HwX9evLLrBuV7qDS2ZMypmEv4U",
  "key35": "2naixdbvbryR4GJD2nqwLiNFFKz3DZtVE6UYfANSWgf4uWQkr7U2cPZLzAjDDbtKQdhM1TgYarpyrRvq3wXHonM5",
  "key36": "5QjaNjZu3bPN1bcaUq4hby5KUNMPLxjkbJDrpffdQ2fBtMKsZMKDhM1Bn2ZbYD3doVQZTSGJd1eWQcVS1EziVQY5",
  "key37": "u7BCG8YpTpbtdTcvpohSx5FksmEHXUJj2GLvGzhthXxpL4y9chJsrr4k52c8pK7Wqi42bX18Tt4v2rBq1W6pQ4a",
  "key38": "4h2iajWbhxGM23mwkYKFf17AEu2RPsyvkAw1SeKRjmDaRMcmJKvwNrrtXa3Q1eTEBqQ5CUR7ddy2VRgyD1hNJ6mf",
  "key39": "311SytERNB2jR7jBXxBQDD6qbu9f9KaskWHQSa9d6zvSWSnrzTeAgwFdWdxpV2WS1fXEVhDkoL3szwh7WQmYt3iu",
  "key40": "B3KjP1UZiqFwHhYBfv6W7zL9N82JYkgXoqPZt7vFbguj1iB2h8T42ZrojqSiGYQodgN5RD4kcFRhAeNSZV7sZzU",
  "key41": "4QnyVCmTdBiu29KSDHnioJ4twQ8EdGCx8vzMyjCv7KkY6CyrYkE3wxmd8VeA3497JeGjnVP1RP6ibxitj4QkcCUS",
  "key42": "44Mxw4uKm4Uo15u2nEkAmoy49HeZovfP4eDfC7W7TWN9qCfHRNbFARwVWhxZyH2EPa4nJq1g6EByjsBaVjRbnbxk"
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
