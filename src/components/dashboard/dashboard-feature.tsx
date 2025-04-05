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
    "3L4nYB6mkidpp1uRa6mFvNjWm2e9r6DjrmEerBWkYYFxmkGa1Gp4EpXBcNeL2AS1cAeaCcSebMjm5jALeKBZ1a94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bshawQrntRV3yeoCM2B2ZvefByGXeUhUU5bXpGn5vTq7X8fcxwVkcVEdUPzjWGA5TqWFJkoJSKKBqUzBvrFyp3",
  "key1": "k6V1kjHDnZrtYc9V4DKjQDhEz8ws1sg6zhoRnpb4HjfdMU16z5PYG44XQMnj2JfemCeZUVosaNaSzKSwoHerLVA",
  "key2": "4T79o8WavGgofnxFrHvSHsjRmS9q4yVK7ew3AdApYej7vAv7XEub4ebZsAdbgEzVNFkxtSPTuE6i2XMrSnfu6zrm",
  "key3": "2efZMU43DqeceRAMvywzv4htJATVuK9HojJrEyGcVFTwNetY2Jxq2wDudQpa1UUkwD2qpetFW6z8odVYFX4FW3EY",
  "key4": "2WZmw2T5LHwTttbXqcuyG6ZjADA13ADWYa4umWneigLMSJ3LXRRP6ryQKnPhHFDZpWMVxjSqGMsTEmRJ9gmZSQwb",
  "key5": "zy2dMoFMmkFn7mTpUY2JJJtATS1h76rzAHpyiDwhHz8rRfe6nGaf8ED2dTV55zdVLZi3C1gq2ZDUeespxzoiD7K",
  "key6": "2pv9e1733M78DAfLnqCoxNhNzke9VHTdcGHNMS42gNpFrSMTXgyK3UokND13Jeo2gTDvEGyyVjyDXVyPhUVzJFCt",
  "key7": "45VUbvPWFP6zVnmaZzCLMubCuwLfnhY8iJ8xwQJNMyrDsuPBRC3bsN4EXdXBJdmhSs6RDXfdFi1kjUrtjjxxjZSt",
  "key8": "61wF8N4DZ68cfaN2XrkpGMMFCsMEKRKfBTVBJDhpyJj2jqyMP9xUwuHH5HWu4q7CxGJisA9Qguigbu5AL4ZHUqQM",
  "key9": "2S4gAK25sLsEENrfgh6nT7ESzZ8wZdkHQVtWSNccpCg8d6GqS2jNYtG7GYLCHbHwH943MpnUEVD3h27VhP2CMUDC",
  "key10": "4dxF1qiSKrPCY4jdANfxPrHrbAFLKo2wj6z4bXwdj9SSfhmtYfqFCmGekD5CbJTDFSqKNeoLA4cdpd87vW7YuXhR",
  "key11": "58Sa8rvd9X1F6HP5pFQtWGVtPSyB3SXK4R8gqs8hVSYKqpPnEvxv2p7hHXBypQMisWZLFtgdBm6JJXdhpoWLD7FR",
  "key12": "8ozZSEueMkxD2bSu61T4pwpxbGacbTZwRqYZvj6QG39qasPhoUWiEufqhBMKHF7GLscPgikxAd55zWhEMyGdz14",
  "key13": "2iuG4rJ61rH6TxfM4KdsG46tep2N7nmLzsij1kY2HYuiDMdj2118pL2DtzRSpS48fnPe794V8dS363qv9ij59o74",
  "key14": "2sSw4HkxvYj8oFUaB1Rg4gF4q39s4bkV9p9oAsNBK4Ka1ikKB7WPZihNLepcub6xxBdsL5kKRpHgZee5e7G9NomC",
  "key15": "5Z4f7EHxE7zJx7U1ynpEJebC3TmMcYzvF7fmG1oZAhFbg8wWawtnz7mP7pdq5vHdZmmVzJDh3bhVyhRtYXWJgeVU",
  "key16": "2JGvouNBssgB9mAojor5JVuryaLQCpQFNpLsmTCB4xH7uRg6NQKatv4tWAwEPq9EFZLD9K4Jj3yNttaovDcf1BHH",
  "key17": "2qDXXyXdFoHMg3LQPzftpDDsbYVergNJ6SyYAM8bkMjCr4c7nw6x9gndScUvGg68qLoi5kM7puMnJvRJ7jotdHTN",
  "key18": "6muf1qtEosCzqouVNAqPwPxGHPPMtA42LAiHfw5Rk3wXYDbLv39Btt2UoSDArUiW1YhmtUGVfdCVEXpbto1e6Lb",
  "key19": "4emXUh4BWXZjoZsUHc1b9XxiMBdb8FXLJoU5aVydeeDEnPhdzkAUrp1pBGz3zqyaktkKBroJo6Wf6GanztLinBLa",
  "key20": "3aaJia5T9nT1SCJpMgf4e4baaRjoBYCny14sLSjUm9Njh2a8DK6JBLRyC2p3sfwmQhgPzJD7n9szWsNFshBVbPoL",
  "key21": "5fvmz3DWhbg32jakQVuy8hQxg6jN6C4jiG5xaDfpELPLNa7PFsm81DuHxxMufAFs21nHkmne7F9gp5JNthaHx7GQ",
  "key22": "EXUWdq4MA5fcrRceByuBR7ZT5SpD8REUX4PV8cVTHhDjAKXAs8uYaPBqkDnkdvt8VzhJoRaDtuPUjmqBPPSrRjF",
  "key23": "4Siz4gvbivDRqKQEPd6vMNMikh1coZMrjFW6sifcdy5BKG6oY31DcuyYpPjQ92xB2fLSaYMxTXkuqhXL3rTxRwnA",
  "key24": "559TMhS2v9Nb2yYZVg6chS1Z657CprJSnrfaaeYbxY5ikT4RrCqtKc2VryAxf8CN9Ei4d1aVVD3WSr14mdYxguYw",
  "key25": "4EbtdEcYJS3QVWwanCczCy57poqqU7qDjw8uXTobeTzKpFDy2Wb7B8PAphUn2UKNuy4otMVgrC7zSFTTNjj65Hh4",
  "key26": "2BY71ZnbN9EkWFxsUdUX5xYs6QKkGj5m6DiNutZxPRGhiVWQcZWmdkJWjq1udYgo24AE1fdXpKmScts6aLVBbJgn",
  "key27": "3giggx8iHYTZpkqM571vYKDLjzBJr9zH6vfKHQhbi2LmZvhCh5t7JWx8BzLhVLeETZdfPpAsNV2othm3xdoq4qCi",
  "key28": "2k1BNUjJxGfnanEK2r19J7kAoQ5b7F3XVyzCwRfKBzfipKDGRUrgQeWginnjEV4eZNAWmNPBuNWiVsfGX5qMVrWc",
  "key29": "663Qy8bsAFiEgrAPdduZv4W51Uc6U1jeSrv4BmVCjFsUxWK78BuiUycJxirEfUwTYd3xeix5W7ex8JYs6N5wHPFG",
  "key30": "2GpPKAcHeCiio8LxAfisiKaeiLtytWRzQh3D32nLo5n7st5NG2mmDFgKoYoMKzdorL6c5dvXfbohyyvCfgsdVPMH",
  "key31": "3of5J4UDCiwPhwE7ULE5wkPUceEp1vDQUnxwh1GjRk16LyEN3raYYGQsBLUpjJdTK5SNZgiVMKFrxtSpZKpshyP3",
  "key32": "2VWQbZk1MBvfjWyreXE8iXKSxa8ZxcnRe51rnCSR5TA9hzD62eLa193cEGHUBa4zwx5YuQGiBRwqr5CXPc5R46w1",
  "key33": "2zizVsJAVdR7KmMiaQgSZ4eNmLAJ8ncrH8Strm1rjwTtknxQkv8LvdWs4CqdwFPCF4oN7HhuRqv2fP7jKXfR1Wuh",
  "key34": "3A2BovkoYS4nY22UXWiECxvkwBwee5iyii3Uc7C8DV3hmoWX7byWaiYHsxePAFQiXYEXRJx8uvwdeX4LdpaWA8gi",
  "key35": "4KUarR29GKVRM1jwY1vqSaohdmso2vyCMzRiD1QiC2q5gHus9Z3XCMqriS3WuXQvg9c4oti9me9TZqMCc4eA7fE9",
  "key36": "jkyjtFEgAyNE9TLN3bFUsy4ZsJTMjawHTb9Dnzw3LzYHRUymqdjTsnJHw2kViRN4aFJRjaMXLSWHSU2c5o6b2bN",
  "key37": "79b25zDqmaDbCyzMwr1s8YmtYnC6swYjN2yq45ubfC8sTXaifBzjh46VvC5swFmMuwaXHrPNY7gyJpS4PuyoX7E"
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
