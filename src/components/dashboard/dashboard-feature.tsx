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
    "4Y8RB1XoAf4U8PGABExSpTngk3m7sn1yMB2iKu3xmApH3MTxGWeuweHZn4ZPetUa2tAXKtdKMtzsh1Wzbm2nJ8fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4yh9enjs1MmS8HDnY4dFqGBTamkT6YjCL16DqyHAGoPDtqPbTWquyGGMcwS4TBVGG4enNPGkgiVSjVdpsDxik3",
  "key1": "3erTNJqCox3cHyKy3KGAszMXcxHrf6JBYXejnt43fCQdpkMfuH4cSFdJMgEPZCnZHuZMpV91oauWoFLqxUibPZdo",
  "key2": "3vBnAmkKtwEXTL7Vnd9X4pK4BZLhQivvCDrno3cQiGTj3J7YDNcJKVBYHLmxV86zx5fhVtXZPLSJZchbBRARuaJM",
  "key3": "29Z1UPmwxFud38EaCesUibUsL8vXhJa1zuX7dRJmnJ98yx4Wu58bVMMr5yZ4vqipRhfUZ7kuDkTfoaw1o3gka3Ur",
  "key4": "3MLjzxi6DSiHc6LDtt3EfQh6r944GesWvNWdY5im5exeP4Pk1KHtxBi1ammB8JJU91ZBBkReRQdsLJ41i6VsuiD9",
  "key5": "3mqzbR6ycDCmKBxVnYkDCexqAw5gohF28Qru32BGGTEJkjYtTJacSPSFGJoY3wvdsRnecQFr6GhgbnVQdMyH2rjV",
  "key6": "31LhVtshcngvKDF9dRAMsbfabQ3xv4FwFPqGYotY6E1inuqgonYat4QGYP3wvLJZBAfxNTCccV51eTyzc29SDkPB",
  "key7": "5YJSzfBsj19LLVm97CmyxSvX3fUBqdKFd4suZ8aCkkFwvAtXMWcjF2L3DFFQt4jHEWku4svyyq3aGR2Ti5EwNKDu",
  "key8": "3NZyWkpW3bkXiEFMMLnZ3TERjLHhaSj6bx9xAJq9xxiHDLoPCZVzPy7RVJiagFx6LkV9HhEySnKg1AuLvQ8m8tGC",
  "key9": "3MknTW7mnv8NNrELdy9UjyqudUYTHPvRNLKibrEqN937Q5F7JiK66pyiFRprd9ajC4hYLgWS1bZxz34fcAbHQSch",
  "key10": "4ZJoEAMG3wYStpbjoKpNyRsJVUBPqFVhZX22mnKWVFUnrn9cNPiF5TxRuH4PtMNzj8L9CwUtDJQsWKAPMrWEgwvu",
  "key11": "5QdFRSyTaFcaHrvf3mU3JUaSX5rShpDWdCXT6aAJWGa1WdFFsgH24j5EPh8SdyhtPwDYWamiLPd8fLrdLHw3pgCz",
  "key12": "snomraRz24Zcprr1A7zghUZMJU9qdejCDMcHqr5UaNKAgFVLx3LjwfxWRv2hNSnPhVd2Mxj4eSKiEhG817N4ZiD",
  "key13": "vocgRJrzSxG9BkgiUJwMtpL2HfuUtXa8FZv7LYG8NAT4uhwenywjEUfCDSFrhGMFJqbxWHE6kA3M5ugkwj62cgK",
  "key14": "4fhYUtwZau5H78fYtWbs5noVQUBd5DNWbbEKaMAbH8NgXZMYJELKJoJHiQ3TJ3BNiKsrtFnRE5P8h7CTyGeyPdX8",
  "key15": "kpy9oVrHkLL4UWwBJAJVTHpx7mPsMSB866Grwwc7xTYW8jbrVWVoJGPWLTdiLGtLsSaEUECmEKv6Bssmr6n7fm9",
  "key16": "4NeaDn6zEyPuaghnvAkjw6J7VXvK1oYEs8dDKUJDjQ7GDcsfHiR6jcQvd74vJ71MxNHRsVChYvTXXnk4MMCHHjfY",
  "key17": "1v9qgNSBBuxUoNWdtz3LcA8P1GvxH5hwoLmuerp2tLVmtRYnpKX75qxEJFp6bmjq7MUcNVUFWMAUnh25iftBLAy",
  "key18": "4DSRZgqFpGveML91qxEdPDfP4ZPTD7P6pMeZ6HdFA4joDgsXJoqLVtcCFZpDQhPT8g14rte2R65z2PpziSRoPt6A",
  "key19": "5A8tLA2ZQeMX7z6KQZUrQBEbdePUp9Groou5wkyWLFCsTSVYL9DqG9wUuKYtQSM5t3Zbhu5bN9Ect53SGsDs5AXt",
  "key20": "5qMrFAp1QR9yLhhkPHmKKujdsz9CWzwb4Z33yPqemPtJvTcaaKBZZBr8JuoisDiSio83TCoaGHoTJ2oNcmrAVmrD",
  "key21": "3GJtjSTZCJUd9uJQDAwzbTuLDWjUjzQjpZY1pBkyYXXY8Gi6ztSMEVpXmPAz9ZMN4YKVGSdWdJ7Wgvy1VMyHx64p",
  "key22": "mhXehTTyvGetRxjhmh6HemkjgDfjBCaphvf33KVtbTDKnu1S6gzwjXQEfyayXuqby7Edr1e9WjMedDeuPn1QCsw",
  "key23": "5D7d22RVydd5UXhjBpqxNdKa3hUGBzvXwoA6Wvk12yaKs3VmEWEt6zUVpCnyLy3CjgXbWPChZXRZzMjXHFKrDzKT",
  "key24": "4nRKArt4tj3Hfsc5qKMaF1tJHeXRrpAgSBryStWycKVCep4W7F1Vrui2skxpZs7kmBSwdx21WLfDNH4V98vozMrJ",
  "key25": "3HrSSvW3qfvQBUF8XDhfeZu8PM94Yskh4Tts6TatehGpaABFfiRr6muH2QKnhgienURpwo785XGaZD86K2pcdpwm",
  "key26": "5iAeeGm9ycHgQWv2Aq9XXLNL6DBGVPc6buP6G2vTMiFLhTwYnLfDUGJjNsP6r7nKJRUMvPUDsRTxx4DL92Na9pHd",
  "key27": "sZJtisWNbQbELUZpA8MVzfFShThEMKQ9tK8DjLEPRaN5ETwo49Mr6aKHWTnUWj5LbymKEr5ZVs7ZFuC8uhPV6EP",
  "key28": "KfXvEjYdiMJab2iYmimWzJ7uu1whmhfapQNqiRrxDp4awdjXeiDfTbnuG8MT2T1ZFXTJDz9UppF2Qd51EhCP6J9",
  "key29": "WAzLtAzyfVNi8QmZLNDu29tx68ZZ86mpocBNayEzCjcyVcQaVfUidBavMaN6ivvrFJezJNUMba1obJyCDRgQood",
  "key30": "2DjsA5ALi91ePhAwU6mDH9gZNGQvtqnDtqFJGsfA56kyfetPvL88m5PR4pnigzcsJ4E2o461k5TQvJhPSNzeFkek",
  "key31": "4rmqiuNpkBnLUi6ZKLNMxixe54H2opjEd2JPQXko12rwh7K3dBkjjqYXa4fkqt8256gnCmKzxVNxTyvi1MhaZEd",
  "key32": "4VConysru434xiVQiJoWV5ZAViKAc8XbrgoQVt9vaW15SdBdmwZ6edAApbfMKTHH6PfVGZndxUtJ2tQyCmXjjXqV",
  "key33": "5Mgbxi1p9JZPHnVhAGLjbysq2gM2PrAiyQxUa4oXpXTzyN8bdVn1Kk5Lsb35X21BauqWgNj3a753WWvBMh9fxaS4",
  "key34": "5Y17TmAozoPtwFWK8Pu9mY9S2Hhc1oWQWfrWKhHRuPRho9u5eTV9bMedQUbrrN8EzYQCBN9WTwG66dj7vcFwf5cB",
  "key35": "2FKntUwu1ZdSeo6i81L6Y6nns61FUkmCt99JtwtzfqGEAMenkFe149gv3CRWp8ZiigqeQ37yGhqc15sQxsNiRWpo",
  "key36": "2cbh9n58WB1yPT7HhMPW4b9SjqcNMKhVkVpV1Jh6R9Uw72LNFe6QXxBTVUXTySwuFZVh76WEDoHCSDhXYXR2fX5T",
  "key37": "4njPaUn9FWe7V2mV1uQEEc5kLKSEZh1LPZQqm7nkrLECMJd6nPDipPPeVLYY1LcJ5eAHi8QbZqB3sxjSw1s6KbCH"
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
