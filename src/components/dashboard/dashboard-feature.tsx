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
    "4s7MUVv7KaoFBJLFqJLueUHDDPfCKRNZkfJaVEiLpWySesMQLXKERzc7UKHWfToVpnhAcxGbv11m8ZSMBEFuFxMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bbjH1NU5CZjbL2LDNQxMaaKypdtKLWn8ff52QrHVWfxd3KQz4oKbZ1EFEw2ZJYvqoRorxGD6zFB1JkLhqBh7bS",
  "key1": "VruGzAn4hT3VrUZvF45krFbko5stdQhyH3VHq6WhmdKainF3kPjtCfX5M3MGQzQnsGGVC3MdToCJmNhvUgSiJu8",
  "key2": "23VLeoRKEmV1wgDG7PWUS5q9y66ZEBgDwuxMpDKmqXEUePgwUq4zf4bP1PELJ7CGFkRgodss4kJEKiVkBSXuC7UG",
  "key3": "4qzXhpG4FjeV7qEy8sE4tqFJv7mpmYcNJhXYeJh2pXPsfvsQZJGqEabsBZ9XhsdtFhbYmu4Cv8gr899uoL4vHQtR",
  "key4": "3E2w1UBbuSazAto5f5zPBJZKTHhbiMK4DTShmrhBomuYuJsjthLFc1fn6F1zv6rpWNhajZuU4FjKeSv2wCCDHQ1n",
  "key5": "HnRFSosfKzd24MaSp2X22sZLiHs6AUqUgmJLSH4pHbQ2ww7otV6rJipgYyEAukeUyjGGgBmALYw4eFPRGWqxQMo",
  "key6": "5HoerPosQoRmj5vcuLgHc13YDYZJUiuJa9bX1Lzd5zVsCoD4xVRaPz5THHvjLJATp18NaNzLV1qJFFe1vFpEZ4aY",
  "key7": "2tqdwxuLpcdqpX9aUpkmYjQiHVTUEyMhHCfpy927ZGrK7aRbBeUSGouyYoH35nsdiUaTF2K87AioEdtT2JNsdFgf",
  "key8": "9HirKtusZVZXTU38yFATfaUYjhaurtQUgZ2nJpruyGddemKQ7Fvc4HMT31ci9HWwHnekgj5FsLaVArtMQ3ZtejF",
  "key9": "4zKTKNWsz9do6GeFSwnoUq7iCpQXxM2YoQ432Jvbc32vbP2nqZv7QR3ncDxK2m2Lijr4947oSjsTxpAzaiLv6QHW",
  "key10": "maruFwvxXoxMaPzU3RbGLdJULVomxoRTsb7urxgmBvmnLNRdak9stQ7CH8itUQGKAHt3Aix7RsHavbHythFbtoN",
  "key11": "EvGq92MXoQT2Cskvtmq62w17eS1QAfRJStnf3W6u4FKgddJT2jPvyPErQXA2UrhaTZecbpP57VARMYvXq29et5P",
  "key12": "2Ug2VwLDZBxsaAJ4p1fxsQiSWVedQBXAEzg6pAjQ7pGYLgUTouHnFodr54pGup2TAr9KqU7xyhSWTyA9pK52SioB",
  "key13": "2J1TUVnmS8W7hF3MoYDZciPbBHbrS8QHHEMAzbhRzd3yPtfjViRZTiW9hi5HT2gorEUqAvYT4jRm58DkxQdECdH4",
  "key14": "ja5DX4AshwMoBAsaJS4tCT89Q6o6hAgeMD8Eg8rANtkphCPMgx4Cy8kUZjSkj4WgJn1C8xmY4fd4hCZHFBJwM6b",
  "key15": "5WooU1HeWKsLrYAgsoQNH8nQnGYQkXVZ2ExXE6notdmpLAERtQBi8nHGjpF8h7yzyTknY86mhWqvMBj4kbG1Qd7t",
  "key16": "3CjjVdtAwxsWqam1C1W1HiZiCSCvHUM7vsb12TznkMAasHGiETa7jUbah5Xkd6z3GafiVzCDshqHvFEnGreMwa6Q",
  "key17": "4MoB5hsQdmXd6YQBqmcRhjZoCQB9bqNgaXVgMRbh7at73KRTYvC9tHhBrBf8ZGU2LK8CjCFr9SehfaSntfdPqoLX",
  "key18": "uHAFRem8nS56zzcSbeWnUo47XzGBG7uKT7xQaSwYkYtLToMPq8neVfFY2P4ExH4FkE6EXbYzqzKhp6dSL52xJHi",
  "key19": "38SDb6mRRd75WYeqYVfU5ewofBWTw6WLgcYsDXeKGcptrFEdAX5TN3VVMdHuPS87jsZCtS2Kx52aBWhpbg8FL6pS",
  "key20": "4Js9p1Zo8JHb42QDbraUT1rspZoZPGX3zZQF8ChXsyLq3XWAAEdpHkhBUWULTxu5qvVSV93rmHQ7tNSwYLQe6xF2",
  "key21": "319xdGgLFg4zdQPdiEZYrym9JMC3eco5z1M2akfJiZyeCyujgFTfdvZFPr6BTx11n84ejSghfdFHomncR2BLszvu",
  "key22": "4c4hBPcioj3Z7vxqBCHSFC9etKW8nRiYggohxuEyC4pV2RN8qpHmmfYXLStL3x93PRBsDHuSTdeL8RWYmm1QNWE",
  "key23": "63UvYqHKqx9rxS9UTEcKS84ZzMwfUWqNZxZvoGEwHHFLu4bphSaUS94PuPAaEu878gEPp154Zr2EmY3toezyfKR3",
  "key24": "4V2W8i2EBL88ugEXdC46nD3jRoGJgwvg46NFDt6cwTE6YdeKE9M36LwhNTCQKcer1te1SkNhSMo3cwxBoNVkKt1",
  "key25": "5Gb9nAYvA18EBfSVSaQaKqrhZYLf9jy5WBuKnqgrEMqVsTxY5AYpBcornjcyqptSaNC6pP3rmUjpTrw9AmgrKPpa",
  "key26": "qyw1AD4ucUjSwjk397rhEt2t7ex2yTVz1Tia3QsADQcTrQsmKQRkVN2eUE56XHFJSxwKc64ZtibtHYpbRrq4TJ5",
  "key27": "3xWbW1RcpZW77T9zkgJnuVZAmcbHQN4ywwVPMaqiACpFfSx1aUigpShfZ4zDqHWTNmawZ6DLn1SkFnfW43ZThqPt",
  "key28": "263oxUovxsg35u2W4DTuYx6GqbSabi1pcdkuSNBAAJ3YHKeLEtsHXuAUB4xHRLfD6zGMd3RiQqUoQqkLb38bjhvA",
  "key29": "2Z5gX9PiBoVAuMGsc7PAwdRC3i6hhQ4MbDQ81JBTvFNbLvdXNysYPpty3qHfQPWqG5qXcmipdFnQ6xLF95n4LGoB",
  "key30": "5irquKuGwnAF6F3yifZmrhrzasogmFXV8tXEAqSB9d1qkx4RDCZQsHb3PsicijWkwVv2N3AomqXt4zur1NSo5wZL",
  "key31": "2kYPiQAR72aV5uio1Z7j6oRXGFM2LHDAnGb5vYZQ7GSKWtnYqzKgepVNYTFSrBjsHpSANgWXAoiWdwWnrXJ253tE",
  "key32": "3p4wBijUcqh9yeQmpK9DYVLmiPR8G1XM4wCHP5k9tytvUtcfvZrYxfp6ozTvBPhHT1oLDopXhwgttVnaUiToKQs7",
  "key33": "4AFrYMwnGftjwn8aHQLuAEYWRx9z4G6J4oshrDsNKMjqfzaGYGpbAKrvZc4j5mAdCpwNwmzmDqdgVVQBiMqiwaEd",
  "key34": "3eyHKgjavce7RXzsCUzbzhXFgorRDQydK3ix2cvhee8R82o5mWYYhS2DPdhbUVs4joKcscHXunYo6akVsYGvmb1e",
  "key35": "3bY2ukr1yZnpVnGmhFGBAHKgpTyHAkVnLP4fckPMcKH1dJ7Mg7zqUeXCm1vDUQBXcbm2wsfv75RK8ippc2jLE5YJ",
  "key36": "27t5WTWfmip1sURYpi4CVpvGsB5W3VWrxNrZd6VgVYJCbkFDLJnL3ZFwbowoMACtU6GVPJQvrsQs1viDhfFo8J1t",
  "key37": "aP3whVuJAhbfm7KjmrU1u6up69xpeh7NMqjYgdiYHpU3j5KgQofQCnezECK4m4zsGLe7D5Ur6pfN1UkVKiCN6Vn"
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
