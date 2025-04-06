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
    "5jGngqa5GCqhGjPhff5oY1B3jtqeqsZCCTqxuvqeknfAYULU4JDARmPHJuf3Q838Pb1N1QgavXLSk278sp1oKWec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtpsPbnBvoStTSfaTsiABrFvxh4pDFkfmXq1hLc1KvBihDRDjtUSYScsPCX5ijyaBpsWLNpPSXeG1bNgjgDGmYg",
  "key1": "3SGNwxuY3NGgkHWUV4T9bgNSoiSZvR1JS65cUYJbSQ3H54EL8NmHrEDk9iXkJjGLGSmndaFruiFLyLQYWaUt7oBr",
  "key2": "2Nqb9UVGF1nazD9Mpu2K86mq2p5KdJBcwDvQ4RArFSsahopUNyCaBYmz1n5ko7Jo1QarNnPTjxTSmhMpbARdYA6j",
  "key3": "5X7vZzs4e4Bwdjkdbh6Wocx4QSu1WtoN7pNmU1NscGpQ9nYi8N8NYJCZRJRAjKdabLXgJUA2Aa1FcB9REFJvenWF",
  "key4": "1264HBECY9YnkNUWsAzSELigfV74j4C7Do8M96c6ptj241kCzHZ8LZjKWbvdjThBh1huMEX5ENh63deQcYYbt3A2",
  "key5": "2cfXQvkmrFfscDGqCv47m6rHHUYo72NRZxa2gGQf2HFuNdcneVGS8nRzdasg7aC8BZrSSvVf54eGyApYs33M7jMo",
  "key6": "4uMc7GnJkzpz6JE4egP8KZwfZQTjBQPvtk9UeHBBcfucsZw29FAxhpwc67HMrdbnGYuqsRrpHsWzeMA4EgqpS7NW",
  "key7": "5ZAGUXPJGnnvgehGAXGp4xZ5fUmDYkYsh1ErSSNTgNx5qbAq6jRCUQrBihNVM3fhJda8z3N2BEc3rTcP9QXXfPKD",
  "key8": "FgAqfn7NGG8m9keG2Sj76ffYjiY53hVH3p46f9nhY6GruyKeLCMthArpHr9GbWjheV9wtuDPUrp7kroedhHmiMn",
  "key9": "43okivg36fkhjg7vXUgkwDSf2pwqMFyBLU1Wb9gj9J2swqiVPoFBzmLVR4VqJUGfvA63gwGeZthHKZqS86rZxj6",
  "key10": "4izVTCMB5Lahqgc23HqY2y7ahHCZax4oxstRsoAvtMnwFA31sbzMQKwF4nBjLZbDNqgDWuKoTSjTH5QVAWBNMTLe",
  "key11": "5u5c5PLG8iSh7C4FBfhNovrzU1A5LBDMBr3ND7EYRsVPwXR8VUSHd3AwThLoZZFPYV8hoLkLMG1CoUPHL2DZhrGD",
  "key12": "4ujM2tG2xyftPf55FNuBJjs5bduqVSLX6znWWPmQ6XeUJxoXGup1qrxbPT23NBk4ptnBZiMBEP9cUb84GzCftbQq",
  "key13": "2P1eNrNoxJkuJzwjXRgBRUH9opeLh86neb6iLaNJwwRbTojAF7cMX97icxCQnpWJUYKf4iFh5pdgdJj38g3wvG8f",
  "key14": "3LUQ3Z8GCJ2bqzChmzYn64HJSyaKfCjxDJxRWEYybRdpUyakGS2rgTsj294enLX7jgfAqENcpRyNPAMCvHGk5gcx",
  "key15": "3YRXzo8aR9SkAgViYWvzfoBhLXv7o74viF2XeC9gVAq3BeZSziaj4Jo6pcgiRY7vWHPY3PVimW2e4SrUAcHCyVc1",
  "key16": "5jLP5KpnJRCXmeJwCFo9R3t8a97xLSPr3XEp1YCbKMcCURMzpPvKoCWxT1e7zjLnfQu69rtfSJwoKuBtmsjpQ5hr",
  "key17": "3LmUcwoeRpDkudmCeCKxdLnUSvXnDYNXmoB4FzFHaoyu1fcfba5EnzSLdbrZaBfGkiaQJXa6QNLrG4RLbQPoZpMu",
  "key18": "2V2JpeDn3VMcEn86YojxYrXk4AkecjtyTTk9oXdjonKdsqjX9mThWMMGDsBTSNbkqU32qQCpwuHxjghGqp9yEWBi",
  "key19": "549wwcm65xqQqmVaN5uohMoYn2FzW8L9c978ho7x3n1SwMgR9MMuiwvbbowAQEgLSNW3zA3mHa6PrJj9otj66CAc",
  "key20": "4h8FEFs1oSgGnMDGoUpij1KfuJebXjAwueddoFgoURgSvCEdn4h67ATGwSB9nng3YdAMkVRX8FuRnF6q1xYbqxke",
  "key21": "rRubRcsLHCXkG3kpJtiHLnxHsbGRWTceamJoQDZVzW4CURA4dsG87yVu5TvZ7yDFeD5EFjjPfbQMxpbUA3Qd7i1",
  "key22": "4RjCHhdJSP9ZZrRw8TQQTdoTYZHM1Cj6rssAqgphMRmNrTfjXdpDD6LYdYAii6udY5brBiVLH6bncE9UP9RZVnrh",
  "key23": "MCBjMRhenUgueau5xoQDqPigiaz2GbRJfGbJQsY9oiqxMdGEwXvcwgd8xogphm4NkfDw29LM7EMXBSZTEy2GakA",
  "key24": "232fR49hqqXYUte5EVs48a1jSdE4DJhgcQt7tSabk2XfyXmSPTP4pFqzvCZqjuGCFnTMvNuAW2yDsAcaRGQr8kDZ",
  "key25": "aDvbZwW9ryGKy11k2rXfWMDYmaLFoDJjav2sW95d7DWwGbwPRtgSoQMDBRth9ydPeKKQ32kF5SiqmN5tCDZ8yaf",
  "key26": "5MXKLFNX84xKKBG7KnqkiSWhbrHTD5rV6DjTB6KNLeD5W2h8uP6Qm55tYujKNWCDzHW15m46hyWoa3qthN1SDE4k",
  "key27": "WgQ83kAFH1BWJ73gTDnDBkr3Jk2CwMaC3V3KZTMxbH7CZub5XYf8V6C6JKd1dq5WBAkSwRvBXnuJgJvLxu9ayFZ",
  "key28": "2xZM37qDwG2cx3EETg9eQ9xDu51jVxoNhFYLpTzwKnQtAhcoz3ryhnS5egQa5boybyc3R5FinK8kw3qF2DCzjf8s",
  "key29": "3SCN6GSAU5nFzs6A5nWbKbCCwjgjCfu8vAWi2toBhSHHNvjJjupfSTYHkpXPGkNW33r9eFqvau2QoMxcBf43B6ab"
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
