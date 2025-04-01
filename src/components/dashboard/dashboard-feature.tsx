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
    "63gqf3QcovZAKJBsZbDAynDJY6bim3LRcRC8oRr6U9Kvn15EdLEvofiKjrvqKY6RLFVEfRmb4UqHgwsD9mZLvns1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueTkRpjMHLtDfpn1SuZnQcoTDL5ZBkwG9tWA6C67cciHf6FTkrYibc1xuxqX6VNf2ao1aidykDGeTE6EeeinMxX",
  "key1": "49VB7EyKVYu38DQwBFnNza5ZmDc1Aa4XMedfktzqcqf3tGFZhAsWzXib9awiDDYjAdQqvhP2JZcfzoVXC8CcSUZ7",
  "key2": "4eLnogaQ5PBVAAZv8y3B2pa7e49xay9TadkmbHSy2QUGKL8DKGN1JHG5vsbbiMvAC89wi4ZMUpdgZB2g4MLaiwyS",
  "key3": "5ojRBtSZvmjZiMoo5CBLB2brFAUHSEy3sjFKA6XPwQnGDu6Dwhwio2WY1QgvdzCQTQ9Fre96rBtzPeRpPNE5A316",
  "key4": "4MSur7fajqrQz6MkFnDqghzu1VqupvGhs3vtPa78qWybiLixv6nqr8Ny7t69wAoVf4yVjVdrfBUhra3uRTmBqDD2",
  "key5": "2w6LYxTyySsN9v5MJLRiuyGRjLXRo8adLjktkrvBwkxYpSd3im1W9dqazTBsUxULNXuCJRWgP5qdqd1NyTpetcLG",
  "key6": "4CPezpFMfHd2WZ6wRtDgr8rqJdAimTrJRWtBDDaFhGyhgcvaira7qAVtXgk1fL9SoYRgp6wNSmutyt3NKWJ9vvSW",
  "key7": "4TsKGkDFXm5JJuCyF4ToRvUdsQQWfntFXF91LmpLesW36WAXKJxMgwHWBMbCS5PGfqzDmBUvFPsahjEmijKF54ZM",
  "key8": "5nGHfW4dthGYuvNTervGusQo8RRbSRen47NbeSqar1UmNBPauqQWnYYiayUysz3YuWnSEoLye9sNErEdKPfH998N",
  "key9": "4P4ZfrvN1xuFKjxftmKWc8tbEtg2j521edhHr5v3tDh61U4zvohNyDFMXsRBKP8dHDeSrsKcCEXBWzbWbS4aeBzn",
  "key10": "JZUbFaUZZD9Zo82qUAiBQARxMXozxnmEzTH566Xn19ow6V9NNpKc4rPNC8LDKEpDrWX5bTWuhCebSsJEGaW97YP",
  "key11": "2By6fh55mYkkcH3RzhtiMo5CBVPW2pjiwjbDCuuzfnw7rL3Qt6wv3XcGcDb5xPsDeu1HPiPCAZkdcCxMiBCu2Ymv",
  "key12": "26pWgpQgL1vPK8Qr3bTmnHvTvztJ7Jmea2NPjdQ2nxZ3vYJcZSvuRht7Sw4oPssUP1eyEipHh2RmKQDzrpV7gFqD",
  "key13": "48CQwg84wNAenvV5EYPfVDNtJ3zYF63zeDGha59yXmUKaGyrvWXHqUhaGXNGzXU62HnD3TNN6tTJTwnnd25syC4A",
  "key14": "2AMqZxiRdwocRixqat8JoZMR99AKUA6Wj5LcyLXTQ8wVfURA9no5BeTKiL3fhjQ3FAhtsGE1zPSEwtueypGWbPnQ",
  "key15": "4tMQxSM5aawJfufQsDvujNwJENW22FmK6QVwoyDEeRdCZpgtMYFm6mGxdVfN5thikVLVpMDUeX91TxFH9b99LnCC",
  "key16": "4iSJv3xbgFNqBjNuGGfxr3knjBqjTZq9SEka1ggF38fixBSefjt6V55rjxeN9KGs4RR4i9iyVaMkSCip1r45NFRW",
  "key17": "5c2ZmirqnJKhhoRg4MdVsdsY6oG69apPRacLqHA7W6xD64G5NPompHmb4sC2KgY8GedgSM1SKtwHDUx1o5YRU8go",
  "key18": "32XSPLfmwhn7dBc68x76ot9bUhUzpHTfQ1nk4H5k5RUGf72CFZBRhpf2XP2pJgypbyon3KLXrVLurUTPneqwTiWt",
  "key19": "5PcQYZzEew2JEzH5f4e6SZsWvf6oYDNcPWUiBC39o3PLvgaCy4NRoat2g1PdMf2PyZbCDXtKQQCPwW2bjSQ4DXrW",
  "key20": "4HiLQL8jLvzRBDxuidSYHimLF3wLZLztvj4iRJLYYXtL7G3TXARpsquFbsgSFMhgqDfuNnCaRPMN8VFpSU6CjtBJ",
  "key21": "RToaDtu8nVfr6yJAZrQL7hhGEe5FnjFhunTkyNvx6r5tn5LWuL8o3pT274DFtoTjGrBv7kpT1RVSRryBPgZbhMh",
  "key22": "U6jMp5vGA2ZWHtLctqvsrR4NMkMWfdtjKJpKdGLNpEp1nXTE8fytegJrTCabqANrbsir5Dm6Jrj9QajzuDB2jy7",
  "key23": "4rzGKv3XRCJ75wW6EE4FBw98rsTmVaPmBGNdGdA7i9BLDLss7xQE75ifi6F7AoTp6wxpce8wGGxMuGvy2Kh6i9yk",
  "key24": "8Sy3gciSDTrfBQesoDuSXvLsVe634ANcFU8xv2tQ7VL5s4MiM5HPTt5eACUH7MWfSLKyMHwzg7X7yffpY73m3ao",
  "key25": "3zTpwZNaGmDaiHNDdupFzqKADYm5EfxLLm4hkAX2owhcPkxmhCogWGFfCbCdi3NtvNJJy22jq1d29CapN1GTuc2q",
  "key26": "4m6BP2HYi6FKQ7BaPSW2TpEVbFqeWUj8aJKwAosoFm9pAHGUoeCYVk1PsRyH7gaCymskUdVUG1CTAhWcwFJLKmPk",
  "key27": "3Gy6HHgTw1D2dFF9gE3CGRioqxTrt5jBaYsmDiLKYNLBguATMvWdzHtE6ipPZWUoipHSjfFupSv45r4FWz7hdHWy",
  "key28": "5QYpTdGFG4iJsz4AkUmyj4HKf5tmD4F8RjNUQL8ou76VcrpEMMvPBk15rC5zR57YaHpgWydeNCEYfA9yKZZFweUi",
  "key29": "451tYEJVQKpeYF3uS3YQ3Ry2ovDmE9fnw5u13rsb3nFgrdYtVweRyWyUSoHbWztpkVPtrMwU5NmFUvg432jrG6jj",
  "key30": "d9N2zKWHNrsm5wRVBoU5JEG99G6v2BzP4z8Z3aqZXCvfXtEVZepiDuPDv8cJHMrujBTf2t8RaeYfoHXAPDvAruD",
  "key31": "4bjC78wZPFwbpo48cgWFUGh62vacEK1PMbtpASut1863tw29HacibjQ5UvgEqQGAqNLVBmJWWgQsEyitH9nDTeyp",
  "key32": "3FMSRp7844AKW4sd8ZNEEhKkNBbzsnHaWouHqNapeXdk3PE9QNjAdTctsfCdJgXvrNUVKBh2zBmWBaNBZkYGYwpA",
  "key33": "3WvuN38dWK8mJAxu75nz839ey6QzCauQCiHLKaUStRgNpkaKcB5dj4igZTPjum16p1xcbBuHYGXQGLX5H8pctRmP",
  "key34": "4pMgTAba3eFBYdKFy4odh1pxEThVgmybNi4LfYkGgeErTeouEjX3cGApRru2yDqRcFB6dSANgym5edvosUz5W2Zm"
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
