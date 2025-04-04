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
    "5ST2wbCYf3ALdruTjcpjeYKbVe1eYMqFxK5PQw4c4NkZrgA7sjCHHzujqpqbd9FepTFFaWda629hjfRZM9bU1cAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27R9d8UZb5YnCoRtD7m2kgLm9XMbU2XtDJoE9Qn87x1KbHPhxsdGfthr1KqmBojNHcoNLzaq6u1Dh4vUA6HcFdot",
  "key1": "24yKTYcv3gYayj4VdWEVwrS7GjtMRC6d7Nr59hTrG7CiY8nnnvA6VY9oHThC9etAyBTV2Em53EoVmxN79kbSEFfN",
  "key2": "4B8Lauk8c84deh82ortX9AH1SLjc6srxtpHuZ9Gim1rMf5ftk1LAqY3A7Egoj55tw4QvUvri14AQYQGY3a1eCvkQ",
  "key3": "3NvJs5k8b7qMNq9MFoJmV5K5Pj1e2gnN83yoeLqyrXUy8B5VSSRT8ijmbAddPYmSKgqDcHStkk8hknSYgzrp9Lzv",
  "key4": "3fJTSAExLuuc2YsxiHN9Tsmj3LKcVggPXCQsgA3h4buBL9sg3NhHaBxKoRGpqLRL1dZ82xKwZnEMoMuufmgezy6a",
  "key5": "5cB97R1YXzMpK6ysnSVQP1SGZ9uyQQsEYB6TreVU4VFFNy48qdQzMTsp5mpc9Hv9Ueswx5mBUViD7bgLZEAjfHqn",
  "key6": "28M7MYTrJbLSDkYva4136tVnpfHpohBxP6UVNCGn4DMkHxdp2u4YmSxKUi8Er68fSWHUoeR35oa51sWvAdAN83T9",
  "key7": "5D9VWBXzGXxfRQRGF9pRr7i89taTUEyzKHZpeRM8HXFz1pzwiLwc8h956vQSrJJZKabonQV7BV7Aa5ZSGjaEWuWQ",
  "key8": "3HFNjvSdkU6fn8nbCYv97SC6i7N4MFFHbvuBUh1JckExscC2Puvrz2b1SMFWgwEC6oRWuEfgyXTuiwyQxJia9gPE",
  "key9": "3TBXa1CoFgbvfTeRAjqRPjcRekoLQdAj3nTcWeWcwZBJY53Ez9JR85r5RrjRJncC1Bva7mKZ77UGbvc1baHwjZzu",
  "key10": "3hmdeU41P7AweaKogvNfUATUiYQ6jBKKFSBmGgMWRKFjKzqkea23jvfDDcFyw4gTpmRK6jNhpFfXbWc2KZpf9xVH",
  "key11": "4SAWcLXDBZYQjWN1ktjACB2QZomvswuMrgUbdwVKqywuqTC65QfCQHMLFXVje7Q6VdmEkD6kHjDXAC56MB3hRRbn",
  "key12": "5Ctzj6dF9qBmN6dP95foeV2JFEr8bYbD7xoxpRkfDXjHn1vAyUjv4UtWQkTiZRzjkGyoBViJJmUE9axsXBoKDz6A",
  "key13": "VvuzGFjbZm6Sv4FVDS7cXpafAbVptC2Ahn3cfSkfNyEoFKyX78iEsk73fKnwxzGs9bnUWi7kaCnSNUi1uFF2QTG",
  "key14": "46Rsa6PWui7D6kLm1Qgm8fv5pXiUroo1tyCxD729YZ2FjU2s7EZbVUaKpagqp4EQVzFMrsmUPGkZmyMrk6AQ4Lds",
  "key15": "3NpBpPGAbCxM1EnKcNCNsQ1q4C1FJsjSJg328s5WeuMttHFnir2YDBQXMEMSEincnqRcQ5KXRbF85dxeo6Go4vdr",
  "key16": "y5Ve7GpZSNjUVeDnsR459sJ3WdmWu2Myc3gk2uYBcH6AE1mhaHmuNg4LN9vTcFfrX5ZQZ47zCG1CvQzpfacdCKW",
  "key17": "5GtEe1PX7mtXxNBVY8G8Diva7Kxz4fFpu4M4xv67JVmBfFBeXBKEeQHW1DXUfUkTgeMG4eHvH5iMnhAGap54dZe4",
  "key18": "2ShEDsTxZgLGyoLK2RCGhJgKiGTmVTUoR1eSyU6RWoiZR6f47GG8BmYnTUVuXTxWShDtnCEdHXsZoNYZLVxNHhWE",
  "key19": "ZiTXriDDQXd1HZ9LeyusAgr1ZG4hTGDmvYsRVMBMNbqzcsyAm6LBt2eUwGvuUxb7Qj59ah8bea7X37FkXXVTuXk",
  "key20": "5sE9Aa5weewPdQoTDkzWtQsLG331YTkdCHj3nGSsuNHZoyCAJjat3rZKyJth9cCxZ9x3JaLqZdfQvNrjHyAZexmu",
  "key21": "3nfTqEs5oWHg3CHgAwWrf4EPqJEC3qG9bJbkugYwpCbSZTGxJruYmT98Kp6djV196Zcne3SddZWjpdK2g41gStDx",
  "key22": "5HzZ612tTudridiiDDA8vvjExtamqFWgyTCugBLVhTrLhqhhXTRnBcLosdsDmsjzf54r6JWSyWwWjVBU6tT6hAhC",
  "key23": "56FsSZL1fwsvzgNG6XmcvDcdrFCDSEjPw9NE1KMyKBhkFTCyDHCuAMCMV7F1aa1pQMh8P3m39C4iSNaKEnF9K8Vs",
  "key24": "4nyBKxCNKhP2i9txV8MLf5Ec4utxqNKYgskXkCW1tiJPtaCP8bwJWHerUhL7VpRsy3Nn2J4NLDxcAgbrN8ZNPYub",
  "key25": "2qjXpRbSFpCmKHmbr9k6sCPgvby7axH3MN4derFE37HH9ykRQZVjrEYxxBLTe7JPSMyLoNB7HdU8yga2qVVXV3Zt",
  "key26": "uJMoQt3eaQUxVLGiiDBE3j51LT1ZK63ke6TJcrWKfb9vhk7a2FHckoLCmvR2RX5da2DJygDKtWvQEH3D1i2iTdU",
  "key27": "54XeXyK6ks8soP9iS4iTV7NEjxUcqVTCTveC6GP4Xsp56FRupw3kJ8BkswrYDsMPe7L88uH8QJHF8wtX4Wnz6QJW",
  "key28": "4J6RmBLZKzWJYN7ZpuoBuFkdQuWYThc7f8H5UDJtNZqiCLr2ypSw5nWwudKW7jz6cSfpifNycczir1BvhkGCRxGK",
  "key29": "4pTYQaequ6EEjxNXGKpSh3n9QuoLDVYqzzJLXKNu3zqVTs2bTKREq236xYoYrwABnuFjJmdX9XbazrLqJCzPWnKZ",
  "key30": "HNg34zf9s5e4CfwMLQNbLouAFQo2xVP6askMK9XEAUEQHREy2VBQ5p7CTXfRu1t8mbeFGsYymdvAB9eTRPBp9hC",
  "key31": "3GjnJn4UrF9sGQfcUagF2UGBGhKNoBMouppz8cQHxRpzes84fhGKJYEzB5RYGDt2HSgCshWXMFJ1w2tkukPiJNq",
  "key32": "55KrWNivV6reUVAsYA3B66vwmk8FzrBPEY9BSbec5RDe5KUb7Bxh1FYKZRP63u6gS39t6s1DQeXWr4jyYtk1PdPc",
  "key33": "3s5GaXBPZxgHvmPKHoiTuRgj8Xx7pSnW4WJPH5tVbiQy8ESwc66TKwSiGdiAR6EE5exXPUhqtWMwytZ1u9Kbvj3b",
  "key34": "3AdfZmeLn45NTeGoP6Qp6rox6jfbA3gTYNo7qeLmDJXzarygtPz67d2XtNVQXTNxCMQSxWfUGe7xfXSubXgFdapy"
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
