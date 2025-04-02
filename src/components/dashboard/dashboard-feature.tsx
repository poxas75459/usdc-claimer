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
    "5GXjvLnDFUNdM548ecKuBtpUmfeEQS9e2ryURu8gktYtD2SByjmEidDZaUpr5VNSnty2nf61mw8fCXU6mBcWy8to"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N93fUDXXYssV8sYH53rsEVRbLEpHPVfbW8Y289zBfjp4xw5A3TGa9rjoerGHcgEP7gFxmks8HV9owGEEh5eAVYz",
  "key1": "63zvs1An55QBXiX39Sy2q24xHPv9tGsP48h56T595H2fWcBzUhmxWg8nqDR9gSdzHPBFTeokeJikupe3eocxHbG5",
  "key2": "4XhcvfWXLh56km6QaZvbeChBmhW2wbeA5fjois8ebK7RzS6fw3oPJviEepcHUrnLthQUwrcJsmwGsdT8K4Vja2o8",
  "key3": "2wbVdZQ9w3JRUAQgh6jg3ctNp4Rk9ACmL1F2sV86nqyUWGRVxBr9vcu2sTF29pcogH6tPWzPm1mpdnjjPw4pbCA2",
  "key4": "CgHTV1uii1uLFQpesJqY8SP3D6zJ9vkyezUf89Zq3mEYkxaTFiikJVNVSWnihMJ7WcwNCJ38KHe4B91eKwuzZu4",
  "key5": "Vq9LTgNUTbvtVRqp1RdNu6VzUJbXZJcWR6eeF9Hw9LEtBNPtAGsVPdLVWGhYijpsAHcuWZvFZkpu6XDR9eycT42",
  "key6": "5MeVh8WEgbZmMbQGChpHj1G7hHhhkuuBmDVrvbzHxGanPeao8pZ2TgXFezhy2mLyLPLJCkMjvdsPjqoYSCHwhLez",
  "key7": "4gMqUk9BAovEmF7fPwbsp8AbQhTVyRaucDbvNwL9mGPjREp6n5RgyL5PxM4wis9kosxdawBkYps5hUo76okm9cud",
  "key8": "372CtKu2mxAwW3pzmNPSV1pbHpumEh4Gyaj6c8wsqHnPK5hhkhYEvVnZTbFejhHQ8Gj7xgD6BZ8djJQfZyUxxEGF",
  "key9": "2bSeyP2etpSVFbdHR6XU6HRSpEbDxL2vXfUzgbuKLBZ92Kz6gatWR2iJ8JUuKuaHCLUEEyXhDWQYLFSYBeeNZvF2",
  "key10": "3mGYWxeBJHuKjzPxvBURgmuMNxsTiSbobkAj1FAhaMnX6pxG3FKh6JGPo7sbVLWLSidho6BDz41uDLkayFw66LF4",
  "key11": "2HG3TCQwp22L3iiztjR9qz6D2AkKgVVLhfqLrHmrBbuM3ok8C7QUG49VJqFzHxTRFK1m9gJ7XfzxSJMMs5oR4RbP",
  "key12": "2wPmRnkXTpWBpQsaASaEsZYZNGdXdT7xswhswHsmzS3n9ZtHf8sjQy3QZ5so9bWoEiXU5ypNV7fWmPU1CctJCk3f",
  "key13": "3cjnEtqDASSDkiiu6EtQKwrT3TiuCqz2B2n8Grnc7z1kfJc99ysjhYRcRBUyDpyKUpPh1JqufsHsXqM6BbdMcvhM",
  "key14": "5k2t1mkKzrpgzLQwF2Zukzn2K3rPgShh3Uzq2h8wah7AgJXvSqbbH6HqHuKXkAiFizSbpaG58smTskKtgTKAFvY3",
  "key15": "2AE9QJQQktfY5QWv1Sy2LM7Xbu5hubtJwbDCAEsuvXSmwi1pvA34EoUSzhfjk2Pnv9SPoyTejqaVPy9HJJvXJc9Q",
  "key16": "55Mjd5MrU2qo2y7hcNmg44r35j2TLQCxoZbgRDcvi5GXwEwe9VV8NVNbrFwyd1ATrrajPdJiJK2XvotQsBKGSH5T",
  "key17": "kUBx2CLAuQbaV2BCziJRiv2pTkGz2c4HQ5Yfgkv4utTQPE9ATv66VwZZZAeqDfGjY9JkQoTr3Grjr4Rc9EBrwWW",
  "key18": "21XGfkQU27eg1N1PLVWX5uiyesX4KeNcJ8V9oroJab5fr8YPhgAfhfoTuQBbddk4LPaSikZFRV4BMrQD7ZWLh5Ka",
  "key19": "wWjoWQmsxm1ZzGcNEbRtqHwb2ym8TogBXXvhWH2ZAEo65upVLkqUWuFpNFmUNZa18aL5UDxfzigbTYR9v4MMHop",
  "key20": "4r5UHRtStZD943ApJLAyASU7jJsioBNNowoQWY362p34uFMAJ19k5c34begJmByx7pg8xnhxy2piL1pUKF1jKVia",
  "key21": "5RsRZd3ZL2XqV8qsnVYCdbKz1yanW9P2PmSTMzcrpny83E99SymQ9idEzRLPn4C1e5gMP76PdCgtJoHy8TwqQCPE",
  "key22": "3fZWURrmSJDAxcYdPihRPjAJkzZ8spLs7bStsDXMLF7vfeaxRUNtx55ANggBb6h3peECH3gFaVmE6v8XMVRQo1rY",
  "key23": "61aRnxuyu7iMn6QRuUi5B23xCNnsezWMAexuasV9MMAg7pASTBma4iKimL2qduFHpzvswRT88D1Jmhn9xG2dsfF9",
  "key24": "2aV1VEiS9opFS8ygCRpPpEZEhACuvJGJP1FYqWSf3a6EJumQrMt8Yq6TYNJDJnkoV1JbrpmSRZ1V4hVVqrNFC8xT",
  "key25": "3BmWpbCELueAPgymb64vaQ7kvEhtQQbo1PzQf3drjqJPdDdCKLGXGdvoQQZ5nGmyRWqGUZp4NJfHckh6xoMiJrdp",
  "key26": "2ThFXd3FWNLdx73WPsi4ig8FmBAZnxrj7yPfzSAZXm85BopYLXmgAcExFxEbm4VnQDQuo7kRishaEShHz2bBNRY2",
  "key27": "5AdNp1Zw7dCbrYvDGrsazCQgpD1m47EQQJfGjS3Xhgmy73sB1pAFtw78HczMDb7CReEmXaWjV9RRZUbFzVM1XjFf",
  "key28": "4oj2yapQc1BBuKXtTXaJ2eyP3HZLh244CuAiTGHEpZQkdHv8JpWXvQ1Fvea4EbdmokkbCcFLqHykWxhr9SEy1Sup",
  "key29": "4NoM3GykaykiHzLSLM8J6McPMRussHeq1XpUTvJ7T6SNDCuUeiDsgHsntSy4wdqjqmMvY1ZHsCJ6U55NrWwzRN83",
  "key30": "2X9agb6yK5BrfuPMospufQmNcYtZCvSifw3rC1QpreSnRLyTGvdPrC9jENBk9VSuGVRX8jhqYxsHZ7GYop9caSbt",
  "key31": "4ZpQ3H9kakDusJwEqRDPENdoJPTjH1zPwMHbR4JtbVgufiQydjyJ4bapaFjRzHs4KdCKdLwCu8V6abR27vusWBMS",
  "key32": "5DXV9SZtgeqjomzX57po8vwfRa7NpzfwRFA3xpz1bsRtc1iBcCaxzcU1D2cGHrdCTEiGA8tsoCd5kf7TSXkWJxek",
  "key33": "PDBeoUG2QzeabgBbiSwWQyyjBYLD2XdxhNy6cM31yasKgX1mD927DniDcVLaYXRjA6XH9aaZEw3ygYpjzsRSgCx",
  "key34": "48ppBusBDRDvj1rhc2Ko8UG5kMWGeMmzPRbbCRsfPREN1PfD1q18u9jiQs3uDn7o2iwu3R6TdPovhD8vykTeXXy4",
  "key35": "Lo1ZtApaUa4GB6uxENhWr5YJtqRLp2752znWnp9Zw1qk22yTXHHvQGss17ciPgwFZhejMYNmi83uJeyNM1u14hv",
  "key36": "5PpfKtcAVsBvNsgEXhXvjnf3AsBGqUCrYWapPXjLp7KxMai83pzmdNy5rnvdrG6bfY1iEQHNhrThwyJTfGHMSGgE"
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
