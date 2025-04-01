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
    "3asEiJyVKcSZ8meZZbGcXSmdimcjsdVzJV2hGeCbnqbVxQmDjFavmXZEg4v5WKTAjgSe56pDZPzQVZc5uKzMSwAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDTbyewLXUYN3aTwPcaEYHpyyuwEWeQwpYDhjx63md4UUzDcGLNWU3Cm9LNzUx9oYaf2DbxeBZsxyqKav6tEwh6",
  "key1": "2bxWCyauzScDFQRxi8uro4Yd5g7fYQN6VQSXXzMMkJRRhqz9ChwYp3YUJUc5T9tNweaMHpUG7we31f8iaV7VFsYg",
  "key2": "HPZKHsviZZi31u9sdfEJNrZ2oHGDnzULoGo66GPmpuqudm1BLMy5F2eLoJ4m3tRxWVT2L26cRP84pitUHTc3Gdn",
  "key3": "3Aco7fePXcLEBasoXitFVFdLmtk569qC9By153NdWU3gyVkpsGXerxnrhqvGAUtPdQac77Bi2CTVPwfMtzjYSja3",
  "key4": "4TeKn7vonXW9Js5XfLs4Pw7msZchRrWM8kmMSMnDogcVCTVTxFqKbpqzBmYKxCF6kbLyhLaM4iDYhfD6uew3EzwX",
  "key5": "GMAMmod8G4GXsqx2NV68t4hbRmQFPdgcdRYGTuSPYXA1S1iRUjsUdY4ncMvgWD1QQXW4XiAf34nmfNADQmHpVv9",
  "key6": "4YdiqqjHvyBGnH9h461iHbbjbqA2ijmNsSr3fXkbSEHyHJHur91HYvMcaTWc9e43Eq8sY5sd7Z4y7wepqHBTVA66",
  "key7": "4fVu59qVouVjsDYeDXLpwFqFPLWH9WCZLaiqZhGQQkvy5488dxaL3Sing4Usf3qgsoZd4uiSHkST4rLQSyupTkrx",
  "key8": "3TW8hWpmLZYySv4esZPqn35srkAVDpA2KVzHSqPKfwFFQveHo3vwKY5ZexksP9coK9QPqh3EWdTGDZQvQN5vAda2",
  "key9": "HuSWhWNE5MUztMT9L6UhMYT2LKvFZamAb2oW9k75ZrnUHPktyxJAyEuo6xU93Q1y8WLqYuyCpP56yb7maYsvViF",
  "key10": "2DcMhkuzovdjoLoo55K1RiMxjKo1nvBDSXVQHN9rLnf2FdA9skR3V9Di2joDgszRK3zAXBLpqo8xejRsjrmfmoW1",
  "key11": "4vStdC3GuqjpyzjTesMnFyw916DqystZgKyaN9jB1vKG4hwi6dX4uX5QMFdFVBKzJ3MhrsyiLc48qULudNPC7wom",
  "key12": "Fyxmu1b5NmFEZSfobLh485HoUA315d6GQgoutV5UFTAr4QWtNfs4JFkZNeUBrfKyu2Hqi4XtiY2MLaFuNamXWmu",
  "key13": "3vFJvdmwf441mwXX7UbGjuLei6nVvFz3skGrw95g8snKC8CWSjZwVVGMJXmm4vuTu4ho3C97WSh87gqwy1nnsxjt",
  "key14": "kCrDGwKfuhrRHCzG8GiANE725rzpcwajaREWxiHNqXKtH2dfYbcwy5xDkVbKyMCGJcZ1r4bXc6Shn4sFMLNzZjE",
  "key15": "59SCUxCkjKr3xyRxjA212Jy1Jv7d7jRN7tuiFZ3MDfwqXHw5mxTSEuVZvhw9m6jfgFUEDU3DCSR2eEynzFRmyWb8",
  "key16": "3aUf1ooYmpG2YNvUdauoV1guS6H3jh8BW6M5nYzskXTtN44Hpk8zaAMJJ4vBAB9984dsT7jy66ZjQUr3XGWiKW8d",
  "key17": "2fZHPui4TMraHo98eQHrd68ec5N1KXqqvUsTgJex1iUcVFuQzh7zRP8UvhDnim1QdTZkHeaRB4hgmee3LruHV3bX",
  "key18": "5AxgCxLQ9GjytMMSts3RxmAmC7tFTb3N9wntn5e6fMAC7fU5Bs6254G9vmWiwu1EeHYdMNQX6H1t7nZnVPwbjfTc",
  "key19": "ceU6LDqRQLuPCrHgfUeT6ScfHgYALMyMH4cVKqcFE6vXKSP6znLEGkyt7kswz6xyPBnbNK5knFfnRcy4Ky9yNY3",
  "key20": "2N4v6WRiqUVFioqVCvEXf8DKSXAzDYEcEr8ozDMezNbFe7xz8WbWogZPQskmfeJtQQVVu5camPt3KX21skYzZ7Ks",
  "key21": "5bJCkh3JmPxah96PHE8v4KViMG87z8XHQu5Pr6qsLSqKXVx33p2Wv71vWiYSMiPwCn4aiThedex3DjLqsehhLqxC",
  "key22": "9AGaPmjBxyj2PqrHhGbxhVUe2GeQjo1rqahe2A5et8AM5ejujTGSoSuG8y2goCi8ygKWMqhzseiH1RjX8SvPBUG",
  "key23": "5qrGjBChDjSg5sqKdYRBj8BELTcpzqJFcmAKqhEGVY6W8tKZLmrHrnVnH2pehZVSGkNUGweF91Wi1Ujy1i2AhM6H",
  "key24": "5jBYv7La8dLh3mPUN17SKsZCFs1FYFqWbwm2aPLtXfzQMRSHbjoGcZqtezBSd84gmnxYwZg6fdMxPB3oKbMiDk69",
  "key25": "5SRCUyTsGLdb1qP9QtW9eGALdqCQHQmxnkTQ8V3ZLotbLs9w4W73YpTpWToZLSGEbCw3nBEF8FfpUaUqLUrtY13J",
  "key26": "3GQpw2AVpqm98FSA989GsdtYHCdMKa7oVf6nMC2f1VvgKqYvxyQc2RugAe8tUW22EfHdjcDzPpPXSkDBZfEgD2f",
  "key27": "jzfkzawa9fDFH18KkL7731rLfbKueexuFJ4sbTzvBVf8QBnRkhjgMLpXCWpUTTVkqBnFR4pGUEPS1oV8YTHfcDn",
  "key28": "3kggB6zDKf7B5KpYYDAyR4yRRgbVLpSaN4JhSaqQ5bUMxTKQUxdciNEv9jGPARrv9G97dvW6KYcf1uYzibbz6mBt",
  "key29": "4BobzGHin8MTdyz4f7GQwhJMUZQ4DqBEsLm68eqxyAu2Hg448dJoT41UTVVRHWHrjNE313K7q6nqb83PEyu67w3R",
  "key30": "58TS8nk1FzC7iA6VSQAtR53BLEjdgdrhFxxpRfgYn3rZGRJ7q8ZG1bpsFR3osFLLipfEiuXeHumBFyZ8bkKqnWag",
  "key31": "5kCYRBK48wVYBhGAzek4pwsRNxHYaai7FWZSJRgBDHLrJWVYnRmSmA5a8GWijofpPPEAPfTkrtk3TQrkDxw4d4s9",
  "key32": "3yDxekH32KCgLTryYpLwKZPvCNBQuWg4idDWjm94gVCbwKeX3EDi3vKtkjB8SxFpG1W1PM5AWMYAHrmrPEeCu456",
  "key33": "4mfMcoTSgYShGGtgAfDwSQBaTTRPQKAackHhzZu5vquChKej9f7txtVK5KrjvWHcUhGERtFkZM4uJvS45eQjotbz",
  "key34": "4XSy4TLKewpfHK5sTmTHi2mMEybNc7skyKb4k1WmgmUVYaQVYDjC6Aa1QmFnKDVH3cX7xp4P1vHWutCCQB3LzkDm",
  "key35": "3rC9izAdmEZKThzo7pRpsiWjTCa9q2Tub7qGhjDKwiSBjWPAagdLaQcpAm3wkDESWxvPspYGRP2YJAzpktxVtFwg",
  "key36": "62gFxsB7aSnCxmTFq9LshyPVad8757dANZaz7H5wdU1ZZ1uRQ2aBGZNx7SiWoP4epEN3t8c7buAFZAeTZAPfrD4E",
  "key37": "5vakZFLzP2ji4vBhUoLqELEwAcE8K9FQLq2U9QnH8z8UBksybVGcmnY9CR7VUkmNqHf8GvGURV5Uof9WcuBdgCq7",
  "key38": "2zCYtQXkvH23YJENYMcjMMSkk6L3M83RN4vfKBN3FVvnxe5hRXFAexvKzoV93LegQUhdz9Kf7LYCtLAEnYvuTt8p",
  "key39": "2a3xuKamgGbiNNqBQisXTAkB4w2P9s1SGN23mTEht7VngNZyuDexeRxyQbecR9dxE2GeMMu5DqHuBPDr5Zv7Nj4A"
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
