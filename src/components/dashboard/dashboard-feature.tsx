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
    "4pbeWHMYcDPFinmWKmcghuiMoKb2oNiwScREZWbu7aEhNGRwUaFLrLgUvEktzVxMU41Rd5SV4fZUGRr6RsEXbtL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AJQ13D9B9no3LKdHc3h7EjRd9fo8dqtvoMHNA7poWrj7ngHEXMkDfKA4LeLBNfqrVmhKSvVKj6Aah78PVWfk1D",
  "key1": "2uQEW3YyCKyQHipoTKiGaMrq8MdJyPcWBKVPMexJPGW7Lzmvxyzs8xKA8HUBFnTUw7qVUP7qaC3hsMh4qFV8pDg4",
  "key2": "4sUTp69JXtek8wq1WpYuZYw5QcXGNRzueERP9LaJbD26bra6JTTwNDdZVypAprM44pcoEDrMsmZ7CdQXYxNtaWGu",
  "key3": "4fe3wt4eSXod8yg12ZqjVvBWgdKehpn3Re3b8L95hhbVHxrAFNEEPYRbQbHxSBUrDE6ms3Y8ioTQ3du5mKrh1ynS",
  "key4": "46NiycPAjgkcw6byYGvjXCC3hAz1X4ajhMi2nRQ3qXC7ns8iYpVvwajMbQwfR5gqadkiLJBAPR2bomTssnyD8Xwu",
  "key5": "21bccwQHZNjAZk6detWSPRLgQjiRx5kfswmWZ6kjhmYJT4S5LubDGgJ7cN2zUsJ2xGgTgsX8JirmhGzGDLgHsitK",
  "key6": "3VUru4akFSHYEm6sYvzD2Zh2xDR8grJNTEgwvd7VZ9YBg4cbWvKZaeSNgaN9knmdXywejNGvQK45kSHaqoS5vxNF",
  "key7": "4EU94dTJaV6isSQ2ztPa5TQY3qAKS1it8dsvhhvfiBRtzHuGXzYrSSHZGvSVVCgirGASxMHhozXCYkQvaX2qsDhC",
  "key8": "HM3JeRbTdEUwMfNAguZM4nbGjirZtZnZeGEkNLE2hzyyP3jwqNN7WTuA3RvuJreT2RhZtqQ4yiZfa1nmsD8M6bJ",
  "key9": "2XMWHwsB2waLuV9rs1DfHHA9azNVVTo7ioe8qsP2Zm1CUypsKXn4CJyuEQNQraaaJ3TNeCBVSEPFzwSCbBp3Zz4w",
  "key10": "5JiTFSMqYHDgGUCySdEmckv81quGJ4xVMhNPVDNPJXue73wUQBrGZ6yZ68v9v2BzWRjcSthm3AdGbe6MCAtEDbzk",
  "key11": "3emwaHexeavHgPKD12Dg4SzZNCAvPnheRmPcXE1zzKWG648rBtNTsQeRDfCPcAsGADiaRnbSdVM6foFBhCTia1f5",
  "key12": "5duwt7tgKDSsmSHWgwAUdGuUmT1SKLq29rorkJMGEENHK37GtHtRxUZvNVF64yGLMBPdAFLWaDkt3APjLoj7NcWt",
  "key13": "3GEjD8J9AwEjDmtLpd2Wxkq8y634pqHcEpdK2nWW5KbRatYGmY4EQZZ76FqvR4A5mRnwqR8yH5gMUCySudP4Q11D",
  "key14": "39b3ydD323Cia55xHD6Qzp5HECoJZZpxzU8KrEajMtxABwev273rUvC3NhkD5g9Js9gTWrd7L7EicmiCt3ZJqu3c",
  "key15": "3QoJXcV4KioFisSgMDLY5x3sphP9o42SYKsQhYd5SGZWb5YR7m6o5sh4ipD3bc5sf6RuXHeuhvHgh5CNCM8cnzKn",
  "key16": "4ePBbHkzBHGWzWLCUYdQSRse2hkoEzojcdtDbymcNyyBQNd7ovF5UwufH2nJFGoWdeXKQ2ccNSEdykgTbm3tnzdr",
  "key17": "39zJcDUT2KKaKGr7gvHsjn27YaKkv6F32zNTxTx1m8iMsPoQmvrt2mdSxYCXtCDxdqobwDdbsKgCFxbcLLzqWyYy",
  "key18": "5PRjtXk6K4GsuozG9g3BPwL1j4Ux4eje3wLLtEbZTGWMV9NWK2Nwr8ibPHH1icQDCQNiNEZRYVFpPn2t2n61srjw",
  "key19": "3vFyLoh5wKJ1iZbXWMjeiS622KJVg742nEQMrc5h2ymGrUwRQSzzhANJvhYXekXTa9tUi3RmiY5kNyAEDY5yFo7H",
  "key20": "5dHyEbZyx57SG4mTSZG7woiYsyoVnUgGwaSuxpGpQRAfQdg4DoyFaTKnQCz9zLZAQnuBRt81sztzPPVUMjNUzjBo",
  "key21": "3q8kDJsTp66cw8pJ7QRsbdj4gXAMXeNaWrr6Z3Fj9wvvePYFXE8rC9YSLoMP6DTQsm8Bk6AABreTVDfWHERVAgEr",
  "key22": "m2LuF3MzGkpVtWU2fHr1LYDE6QwFJvPkDx4vnFawKxrxJUYdHo1VPqk48swvXZK4MUbcpi2QMuXZZLdUkSc4YVe",
  "key23": "4GQSQT3dZ71PnkmmHukjRd93fCuk8pmGiu4UEr4ssNBTooJxuNY6rzqoUmPWeeidFsP3PiQUVg3AUeWaTKb5qe1H",
  "key24": "2t8iChKCATZvMirX2V5V3mgUtkVtSniNQ1Ay1VMdwattwFjnR3znYHY7BcBpGaXyjNq7vHKM9XY9zpv53D7aTtJS",
  "key25": "3AEYcb9X4Tn5RJ6WRzjtxKFgKuM14jhAB6rhYXitfnG4N98QNvumsw5jWa9HktyNVCZqQEmCGpxQwZtBMh2tSPHd",
  "key26": "pk8Rc3wnVrq8KHL2Tv2sPbU2t8H9uSK7Evj1rW5ypeVg3bEbY6YRPCAN3oBsesQMbZHtS4dTvJFsn4JADdZS87L",
  "key27": "5S5Dyuu7zvkGomzp4USJShbVbeBM7TKAw1cNZoUN8iqPCL3itKxDyDiYZt7WQQGjvSHZ9ud6y2zdqAjkEs6v4sYc",
  "key28": "3ipgJ9DaZPjPo8P5qdciGGWwfFPmZHe1Mh8SVWYC2bTuugyp2u9MT5GHoedsxCfTg26AciGBLLqPtAMjWS26P6gp",
  "key29": "2CtFu6bbQi6iML1CP3MnRKpQZ14hUPCuxcdQFAXbTaui24YpxFZqfdUwykt377WKEjUSoEKF9GVeN3kNL7EMEqPX",
  "key30": "3i2PaVNfhpen7NV75jFVW78eWCjmrEk5FAJi73LiVi4QQgMKZZ9FXCiqeK3d3813Rdqcfhqj5ZJMoRBUurj2uexy",
  "key31": "3kkDLeZtcPqiBZo3zK1afohYix97ArtZ5gfUYsJrUgnda976VCjyyd9jx9aaxXJSX1AmmTBdJsr22BDA67Unuv4V",
  "key32": "5LkN1LmTSWy6nP4KwYmQAJMhUxpMbrw4X9N5nac2P6AHE1rnK5jx5CZo5oJqRVDCpnvo7huYDBQPeksfDut8pUqh",
  "key33": "4wg4jPFrV16wPLjqER8E4krN6KwmoyyMkh2BmYP2kRzgxGbVeGS23hbSBNZVMuKucVzBaBeBBgt8EaPsXyfWi2Bc"
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
