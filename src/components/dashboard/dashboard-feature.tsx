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
    "4QGR73zxfbrecUWsUgQSx9yf7KKp5awtGhTrvpEFL2TVwoTFFbhBJuqnAn56Sg3MGcsNNomH27oXewTXEeUs1hQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4qezox4RQJ9e1q8ci54RXP94CESNMoW25En9inW9eYFdFVcPH9eMMntcyvgyMaBKXQEmneDbpfbCkpLiVK3X4v",
  "key1": "3MJ9qJNhLvSUJ8vExhsgX6cvmyiqxDy9Vf84Z3bwtYGk7fZei4pHDBQ2THfh65HpYRqFSdd6a97Z4WeM5HsVnChe",
  "key2": "38iXpKf1QvaFHjkm3e79HUiD5cyRDTUkacpuZCeb1PfZYKACh2mpUhcQTB9K4dBeVnmM5ScD7W31ELp37vgiLXZ3",
  "key3": "48XYuxyJwH2wPfZzLfBoTw5JwnFhssbgonaEQ83JtgFEUsosm2vQXkQ8VZ53aPhvQEx6qQT2ZvNzs1W1w5j8zEG",
  "key4": "4pU1sbjzzp8zpYw14zPsfWmq5hJzotRG6P1E6ozxuuf1uNkurCVVKjJ6gkFAQmpuzTLY1TB8kjZa36RxYa4vq8ef",
  "key5": "5ncQ1pdHAeuDALuSU3AFLNBPuLC8HWkyNx1xQn3SD9kQr7qmFpkgt43aZXxPuidbAxZ4ngNoPnq14oDFyRLudzRX",
  "key6": "3pditdrmMyJHFTr2RaVWcrebXTEw1n1RQa3xTCAiM8mKth9JVX6Yra8xtGe781ntB9EMxdxastGcZBJZz6xTg8dq",
  "key7": "4hB2VtmjUTVzuyp5wniz2oD2yeksKiXt1f3BRXNAx5ARJxqsWSa6qX4uvwTD5uqKdg3Wmw5aL654Sr8ZHx8dxTP4",
  "key8": "4AVEQJFfernkyvq2Nw56Z2oXhaGNL2vLZUnz15nUYyQAgZRjVJvT6rypYiYTUoGGhVCucZvLrJCfG46YkXohJUET",
  "key9": "3XE7KJsSfD5yr6PwmjMWB4FtzoySJvnjix9sqPd35omaadNqHMKGJRMJd5t8An9sMpFbSsvQGZ6U6pYMbXfSvK28",
  "key10": "WMobTBqdtr5z8sh36Ga7buTA3YEv5W1Bg3YzH2bb3CaXg4RSjHDEDy8xgRtmRH8Y5sSoKSu1XbNPszwtv4kRHGg",
  "key11": "42useLdKAKRGDkGhifkV7BS5CUfgaMmGLShbU1XPMVDrBbs4vh5XzX1faS7uVAJsQySBiMSNNbgo8MG8wyxGszGV",
  "key12": "5w5nQQC3PkDys9vS3ixeiWvv3K1ifk4q1FyGRFs1zAHNYAPht7j2mefHV5PpTF9jZMuFVyPj7YaVyJtZXCwt1uzv",
  "key13": "2ercnPbx4borqJjtG2Vj9b2xrAsBrPRQP2RxWqT5BijrXubP1EcSn5SxnwybesHnRFHfZFizNMHpy6gnjezDykxJ",
  "key14": "Za6ypatfwHf7diRb2vDUSw7QYpgbxuJPE9NENtRVgqZoAsCAutPjsK1G93BRjbUqiHHsXasosyqhh3JPWLWHq1D",
  "key15": "2RpPwihGALTA4QsojytDZ4TJh5ehs8u2eRfDm2skRsQjCr347WdgvnXTJAkpWgPsqtLUccJgvfcCsiE9ZKZhqDUg",
  "key16": "Eu5f5KdFx2aCU8vbwVgdXXNBCdoqovdRbwyQYgf1HWf2CvQArfnTJsYyfU8Va6KrT43zbkqAYcFA5XxDFeehr2V",
  "key17": "4b1vS5iHFteeQivbZTx9xDXSBeiiiCwAbWLYUHqKaHyVNn6D1yTjqfNrjhGA714eXJwCDTURwtV8ErWFvoJHRRAS",
  "key18": "iF8nJzdwrN6iJi8Arcc7ae8HtvMh2dQM71tkbVbLboofvzp9Y6Rv35XD6PGiVj24dbC6yyLH4GGV9x1QnjUicwH",
  "key19": "5nmQjWhksDghzKJwbmCmXkg8p13ptFsyaavwQjp8Rw6wmukFqxtUR6NKbbFGQ2kaFBhmwTqtk5qrp9UHTgz5xdT7",
  "key20": "4yPzN1ex9xnfcVozZd73NKefSYDkDeshz1FxwDtQa5d5sLGvMdSevwxAeKmu6xYg5eApD3UaBViHX1ugJDB2gjS2",
  "key21": "27qURVSsEjbjejvhKJsdHmPJ1JMEpXLtsagiiaL2GmWm3cHC8uxYpi4vnoQY19qno6PtbWo2yExV3UcowG4t3eHo",
  "key22": "ELRomoPj467Xaiwx1LpjU9U2zQoSHXcK3h84MQSCgqkADUKE73wSNpaG9w93WUsjqQkBD3jepYh8ZYCBGp3qwA9",
  "key23": "4kKEXFGYohKemoVCMyR3HXZWZzSmCN22DmGLuZfia3HGdG7qDcfo3zYSFk3yozir7fakiQXJszM232zoFVcvHdUq",
  "key24": "3RbZg7X8RXVqrnkhq98aZasRAQBs3bBovorB2fWmYfr82fzzTuYJJBr4G3v6Vy6xJSb2JJPUEFnvZM9KVaM9rMLx",
  "key25": "X6yXpbEeWVSct59VHDpt9qx514ZjE93ECNxdgoLa18Aoz4rBKEGwLQX9kMgw4zKGLdALfahVsR8irpar2QYiCwo",
  "key26": "mhSHmhrzyBuGAMKbNBFG5adHCtDaYhKHzTCt93AudWqFu1LbNsrLBgHKELmCNiefbDVwut7ChPzGobegkiB7r91",
  "key27": "574bUz3jphKv8UvNkSuN1cYZcHTpF8WPAkSkqGjznRCKfYMzJG2LUDijdUMNoopa7qYBJB6KDxge5err77ee3JCU",
  "key28": "4NEQfBzmRcB9MBXhf3PkXoTgHfSX7ZwpV625puMWqbdmE1kda7FKKJKWNDhA1rwNwZA67uQa7psu4myvemJngmfX"
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
