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
    "3DEpaetkXWREq422wfb16THXjFpfsVAnhnMGcGDDLACSf8oRxYKzmiNn5b5SF94DPw9webT3rWCWYjpCGeRmwF5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjhMNKE7bezx4Fzcdeua9rDxkzimG5YZNYPkY2vxNQy95TczbLFvBzyaLpBaxz8KCnE5kQHCgPXy5NbJsB8VTqk",
  "key1": "2xC46rCjYQNAFoZ9TQxRxVECrjxBok3ZsdGaTMH7yKyBHVgPX1PARMrUvpejpHS2pJGSuWrTBoVQQPHgzmgqsset",
  "key2": "4riNSzRvfWenqjRVUzgnJ43oHUwaNsAfZ5ajL8eYhCVYNiteW4i8ZVPapSnuU5mNnTSeihfxPRhqEWPVwhuwxLzG",
  "key3": "3p69DYQ4RV3xpxHdp1Nzn3myRgKVckLnAgvYXLwCiYYG2Q7BdM8x7ToEqQrAACFQeBM1fA8fbfqhkAHkD4zFGpZc",
  "key4": "qYUyED6esaZ1zxqYNF4cSAXn9o3Y468T31Zfr6xt97vFYM4phGAtb5PwMRdoRLXNaKtMuD2dpf735Nh145GW36P",
  "key5": "4x14hjwzpbGG81NWvAKiS86eQTYef9gmMcqEq15X2RUky9Uj8Uc2sjrUESrH38wdK4v1YnQEZ7WieRc3eLQtAv94",
  "key6": "44gJtkp938taC9PvHs7wfCurChV8jvJbqdGVVht1vT3L7ReMFvfFJDX1yxjdVZjZzF6ZhxRdPjnMw3DWRVKZkXai",
  "key7": "2GeNaBxVV3kx7g8Lg6FRQgBVfMxtbfv1kTwJhpQNuYZ1KRERgigxGn2x6cWzezKNsQS8ik4UCawHwGp1nCcxE4sX",
  "key8": "pooFdu37KH4PWm7twxy4HFZyvmLpBMFG4fq4sDAxvdagCwvBg8um1fRpRk8Q2D98AWdrBvwkjahs5tHWZhy88gs",
  "key9": "xgFNBWf5w6EnvFjVmnK6NaRfAn2rh8XTBK3FyybAPjj9x27LqunDTWAHopxQoCvkJGA7qyGyYVL2XbifCQjX1CG",
  "key10": "3JY4A78FmyLF6sDnLB8T6VBNPpTfsdJnepFUAZPWSHQqC2U3TuBuuBHRL7BKABAdBUWRLrgoM2FSUTD1DXzUmLfN",
  "key11": "MyxepWd31JcNdW5ucRZYzFGgcVndasQB86V85oMa7ceAeNLy8uS3GgEZ2RGgt5dbrm4TiCuhiKucd6aqSkCJPGk",
  "key12": "4hj9gy1iAS5gFbpJvvLVYPTAA1ViJhEpBHLoMLhsYmjuxFB2KX7qrujMxgqwYe1WR2eRsGPu1Q5tqBai86J7Dq4S",
  "key13": "5sUXjqinTUzT5kvfnKvk931ZLnCKv6jBLQFMXoEFJLQfKpXmFd91R8V1tJauB5qi2Rhrcp9Y75HR7J6DaHHGEMwB",
  "key14": "3AsBBfRRvrZP3QZHoQKLfZ3JFH2a9RT7w8atBN2WBUw4gmYKe3M7WNWxnMnsa8hggYVCUhDoWp7M1hjA7oPyHcBb",
  "key15": "2xkQuJXoGewYtgJFNiRN65V6Bo5aNbd9g8hzEAKkt8wGtKThZLK8mSxP86a2C4AKtrhepNo51ph14ATsrdKUvs6h",
  "key16": "STA1Wja4M36CbW99RQMKGkCk6psTuki8EojBwZddhwqM8bK1qMcTzbN14ZrbEBgMSVTDdysfr63bxaF6vmmSMaM",
  "key17": "2X4oxqtQcVZk6YFFdfu7VMrAbw1FzwQnvDvUns4sfBCeHMETKDySkSzJFxv2Tun8MdBwb7VRfvHHEtYuLEVMUcHG",
  "key18": "51YPS31UtUtC7zGLn3WXpguu1bb5oksdisXaZmkyoT81gwtBJQGNHzHLYrEXQN6GSKchu5pf967QUocqyy92jkz2",
  "key19": "65rx42weQ7uLp4jgUNr6s5bUbKoXcKUAXTAhi17oKaSA3tGxyWq3Mm2YFFkeykJTmTtxwpPSD5t8g1Bx3KmM8s5n",
  "key20": "34tEKjRMZtbHfjuq7qRLV9K3ahEJ7xSmdsydtunaw26dM8s8k1kf9ER65PDUtHVrRkDBiB4FVGNH5yeeoAAzfWgq",
  "key21": "fT9r5bqCY6hLpJ4eFXzFdbsXKS9fAyK4EAuhXCfeq8RRFa1CYgsCRTMgzsGkCJCNCKupHSD24JVtYfi1hXBnD23",
  "key22": "Lx1qJqbqQ4yjXNjDmZeyFKuXDhQfYJR7EcDVN4dWpkSXkhgdmQDpQrRVq5iUPHhm2urZZ4jNHgRj4SCguEYJXUP",
  "key23": "5a1LHyfaCRxkBtUWc16BsmbxqBRbbbj6x7ZVLcSbYtsuqrXaoMUbdcHZPUNZz6wE9xxQEmvmEbup8MKqK8k7vdtP",
  "key24": "YNHwTzgLrojXDWpgkSKxcc6TREAucR9AY5b1aXszEW8vdSzkFzZgmJ6XP8hc8mxHagojs7Sz44ntaXCCCrgHGw9",
  "key25": "2SwtrkXiVCyi5p5FctzvUz4wMHcjV2CzopuCLAmiYboPB3PemdQLQTFkc3NtCsULWwubWwh6ELTa1VNvwAaPDYNH",
  "key26": "8ne613JeqGSNxF2fyqVQTt4ES2Lu4CJL1dFCsoVmzMzsjPkMwfkDbB2iTSRDyvhGqqXQqvFdTYvKiwgybqkUKz3",
  "key27": "4amHNUrtPCsfdnXZGrrZYcmEmRq5wbaKcyFnCnKxpp5Aiztov7QpacVDVnxNE1gQxf3HYRCSMg2kzCxAoyghPLuz",
  "key28": "5FvtHzuu9Zx532vFUdjH6BgEyzUDFm6aucghLcHvVpLezUimv7HDGd4poE8apCqV1eAvgG2WHyS7bJ9KBF9RL5XD",
  "key29": "2PqHUEDR9SsqDNoYqq5uhnXV76FffXjkxKEqLH9aKfrfhiaPKxGnRtqhdwVgA55uC5gbeYZibKNv7UEjkUiMDtPU",
  "key30": "23zR83Xak964emFfVoXqw7wzeY7EXFKhCW7E3ApBQ2Dvb1k8rKLbFxhkqLsrLv3uBx88vH2HAjAVW9hHK2N7ayTZ",
  "key31": "KvNoVcvrDFxxHnXSHo9e9xwo3zBBMRSX5vDFwjeZ1yemtyGQkrzMzazx9qMUTRpCh9hV4RJ3s8QuVmERfPpzSfK",
  "key32": "2VxTdPxGrKMfhr8YEpoesB8G48kLbCoKtF5BZBTETAQdxCDAhXpqoXsf4JcMbANcXUT8itYANQh9Z6aoxh6RVZFp",
  "key33": "5pAbjHSwDtF1FxsWvMSnLRbEMTFH7WEwZZwVZmnSDKqBeug3WvbRDXLkeeq1UB8gvpo25ERSZAtda2S9GQG2yhsV",
  "key34": "4G6PwVXqW5EuQ3nEgYLFCbZh1V7fx2ypoXJ3skeDHKr3tqghSAR2DBGis1j6BdVJS8vtEB3zkjdrwkZBVF8EbSVH",
  "key35": "2A8jtoLz9QYTQHTBwowUJYEc5YYqBAPjdk2Cee8beeAeD26MdebXk11PcVb8cBzivWbdGwVi5FoVEjkwP97rogWr",
  "key36": "4DQwHxMFPD3PmY4EPspkW6sUJMv38ERwHvETmwjtGpVLJWwwWBh6oZbfdYXHYZHyyiLLxdWM1QnyfPXqiyBX56bA",
  "key37": "2cDW5D7nfVuZ1Y5QE4B1qg4SLmfsSaR5y3fRo6pgEnejd4Doa4cA4L5HV326rSWHzhnY5g6gMMmArN34NeYV1Ryu",
  "key38": "3pP4B5mDpcoePqG2T4RDpRYCR87r8oWKdcqKdsbqBkkWxdhUC4cfb54tfQsmpAcA794yvzM9aUX7SvaJjuPcpLys"
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
