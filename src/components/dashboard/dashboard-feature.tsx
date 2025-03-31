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
    "3JK4Uv6fYKgnWWZTkez43qE1d72DSc4vmM62N2kJ2yXbDYcVjSAazyiY179xH7CNUdt7roMbVtSg9zqNEEAf9uf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfuxePELMz3NFeXQqUkv296db1VuvDDWCnXhEBTvSYtFAPE2jobJ5MtT25kC86TpsPhQTeP66NQ1Pkf3tcDfStz",
  "key1": "33qyQzFUVdCxhdVQfnYd9dDaE2rVPDerkDcoqJGtbQS52WmFnYq5i4gwWzzeN2gMFECMfj8FMDiaJTkx1by6cJDG",
  "key2": "3Ne1FhRi7pQH2qMQCoh92mTPTxwduJXPGN5EAJgencSwWARBSeFpEhNuU7KUuJ7rQML3iRUvo8L8oriSBY9Zjfo4",
  "key3": "RE8TooyphX3SKv9aYrvb9gv3Hf3Mmvvizb4frGwFXWGT7w44Pf25zTXLAFufCNUDyNHtq3vKAXA7mJmxWJEnr3n",
  "key4": "53GEatoNhoYUQRM9pVRziBiur3kqeSbZ71nBKsp8VntYvkaG2WhqQM5pWY8pGFGCHxQxikyN736rgY9r3xMN8v2L",
  "key5": "PtSWfZYKghz3nVUV5SQoujFXnbkz1FYGRjYMUcM6uMtif8YMvTFBp9ZbfM5bRQKADbev7Vzqewq3EAAD4cz45uh",
  "key6": "2RAED1SmDHTd612md1p8MjYht5YaGRaChws1WaNa3BMV54TnhsL54ipopFbcNAsmmoxsnECp5nXuJQWwc7yeHEcc",
  "key7": "5VdzeRNaHuYFu2vMfupP4rxa4NFirvQKW7M1uBP48FkCdEJUJ1dNfy9zRAyyuGpzE1sHWwAEYqN5KiV45qRq1rE2",
  "key8": "437qjvoJgZgZionpxXCqxcPmARD44uawHEQdPZiznPLVB8cooSo488wRf8RnPTuRdSVcdpELgCqdiewipHsQbS7A",
  "key9": "4wbgj4RyCoo41HxVYU8tL9WMJC23sWMW73pa5x3YZcM4tPUkvhDo32DswEcdefeJmgYG3GZUAkxK7ubp7JugvT5d",
  "key10": "2zV5rcrCtXHsHovSgKdLFRZhiZAB8dmESZAJkU3QQsmjdj48h7QDLRHNaEPN15UVUgqqYXPiizbkrWFPgdTvNCZD",
  "key11": "MC9J8rASqed1zHK49wme2t2mqmm9gYNHSeGCJVqP8oR9FP18qGo4ueVq9wC2pu8HMtmh1xGz24XVFrsBu8FghVW",
  "key12": "238qSeSyAAi7YzytPJyvT6Rp6JMTSPKpXRpPcJAFdpkDrchcZNpSQu9UvzehN2dy3SMjvidmfVtE5xrNR4PvfpyR",
  "key13": "5KRMumEJs9vFuRUW1jcw55VUEUCfqGhrn16AsbvRf4NTihXKCxc4XxApJxLeArDNLn7KtbK4Z3knDz547DH2Krxz",
  "key14": "4ZAxh6d11b8dJygsnKEEf2ihK13n7fqjcYJrHTKvTvNxm7No5bxap68GDxXcwvWGuk7yD55EuqEFYSGmMhrvnM3K",
  "key15": "pbwqySeHmvz3wegM3vtk8v3BgVmgtk9GjTjfmPxn1wye5s3vAm9bUn7yptAqB6gCncPdXuv2M74Jew3SwiXS314",
  "key16": "zb3ZMvi1g9h8SSkfNTzTLWCT43ujBdSy6DU7283czvdq51M5CnjRyhWt8w483cARJFY4zdjGRoB6kbVumpg3yW8",
  "key17": "269jhbuxQaKZUwNAn6zg5b76dyD4mowmnk9ypJpDwJgDn3Y5cwh4ict916UQuNTCoPLsxPGC6USL2B7h6PBowAPh",
  "key18": "4idAKBPKqPYqxwkzji3dnxzJxg5kX6jKZBKkfYT725154HLfPE4PUn97zZKTHLn4jypxkefNxjm4VvYMtYS2iJE4",
  "key19": "3iZEvwmo5EoRhBxcGXnsFuHH6ZfQD73EqvS5qdac2pjBQ49xrgzWtMTD8bZLdo3TCYaBV2ypQP3fFdCZgGW5FuKc",
  "key20": "2zJHHZCRBpz8emTsbKMBgAMbAhDadWj12VPGeRmfuUWjEv9zVkFhGjdrK4xbFJFuDDZHN3Pt3QKobEQBzSNBxSuq",
  "key21": "JJF4eGCsWtkYH5rNbJ4qLGbuEZupKxU8esmJxXSeWN7evB86BoAi6UnVG5feQhhmU6yKbdgpLcRkjwvkTLPHLvX",
  "key22": "2QuzaKRupXLfjoSz4Ki38jsMwFXJFw2WZ9Gj22pDagi7XCCg2RaVnuynPeiyJLqSwMZmw6UmenNdybhCKWxCv2Ks",
  "key23": "4sC2np4MCKKeo73UrfpZFcersV8m6PQxF6E1vwVbmStTmLeZfLj81VmtHXpB2CoJhreKVci4gJ1txoLZnCa9puFP",
  "key24": "SUai7GuAJc5k8dJxjyDHUg2NKFw1JATTexx2B1xDhirkzb5HySJW6AYmmWUpWT3JV8zdyTikvfit9gJJde8tUdV",
  "key25": "42wDqtCUGrMaQWEVArzfjcHyWwCrdyqDQWCnzQkcXAGj287vNyWSM5R6wTXbc9eG7ASA5JGSkmZCbw99wd8ujxVf",
  "key26": "2kNPJnXDytaos6u5R7xiQQ64wx2VhKe6BdWBzX1NzXy9cZ57S91an6LrtjAe7SQjwsyfdZZpSHdQDbD6DTLoo4v1",
  "key27": "2wR84VR8QVEJfyxPX8z1cCcY6DF1xyJPeYH8APeGskGh4i23qcpUneSfukweCRqHr3aMm4orvTNGm5G4nXLmM1DX",
  "key28": "5jr8RTuX8nvAbWrqoUeYdoopitcxKaw5Z8BrYtJnN4uhvhs6kpap2X3dbpC7YbmUDgYnLUZdZ23ZxQmw6ResU1yN",
  "key29": "3SeHn8EzHT4yyUcta6xd7XDao27onabX4vFoJPkBK7HEkRnfwEeFYTZrTVc6W9WWSmyMFBPdo666EJoehs1xFf1p",
  "key30": "nYpqjzPLKNdLdTU2HmxrUeANi9dWJuSXCXg1kKr7Zsqqi78NYXBAXwiW2JZTDT7Q6FgpsAUBAULPUhPZET4FnJu",
  "key31": "37meePGffcPhpECYehjNNXeEhxiqAcdAsgFJEZKWAPEQMoa7KbNQuXQEdqLW9aekxkrXunSKkxwDDGYejJSCU4cj",
  "key32": "5Dh1Ao76Ci17EUbWu2k52oTmgmQNRxZNJ8X58t44bLAduxgy6jr2QJ2A4GNni4XeqySP5gSpHHT73psZM3Yu3Qgn",
  "key33": "4WSpjpPUbudQv2nH4jpf8udoPooNNGLriDHSKEbTGP1S33389Rfz56tHtuAmEo1kkMgGBsgqaDMdtc5dL1HJoy7p",
  "key34": "21H7oQFo9dRiWUqeLmKwEGg7ASRnvRXugoLkwfs3xFHVttrXh66pmAYHTayD6vYphYS1SpR997gDHSNAUsFcCCkB",
  "key35": "qsRDo2hGjkDdMZRcKufhgTBAkaoCRXnR9nToergux6dhQvaMsbF9k7cE8wUXQtsnVGab6vRYTwThRWj3czM91mK"
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
