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
    "3pGW8MKbunsqH781CLPerNnL1C8cgSLre4AtSKSGnSARsYXryBr6q2hys5UrEb2wJwWL813wMWqKgiVkXNSD885V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S1vR2Jxe3Aa6vfXRuYBM17movmx3SDjRwAqpD7kSJSuuEDEfeGtzMnbbZu7w2evRqkTPMoDgZ2QuPbkTt895ksx",
  "key1": "3NsGcGiVY6KUkpLsXsCaoqNH8Hz2i9DFcRYuknZMPArrpYqqsS3vikcceEN5wFj1CcrFL3Au7jVRyB2YH238bMqn",
  "key2": "YqVJSrC6H6JWCafabZvrYR8JxWLLfBWn3PZssoC1efmVKDx2G1bzGafiNNSLbFb4SC6MvSZZBR82nmMYEUnDaf4",
  "key3": "35LiZnAgMULdm1egF25biYN9rfjBFsJJVaSHDEdkvY5LPsGpA1sLM644FS9DSEJM4d2kFoxTNASo7v2m1qxcM6mi",
  "key4": "xDbaYtjRe8W4L9pt5ZzeWaXcW4wq8TinPxpKSyp4dyHyr3WmX7xtYve3NdsfVK53XXyjxtJVoiKYgEpuUjRhGzu",
  "key5": "3AZzS7ABL3JXDTQVHFWMLpK5FvMrNhF6JMJoY82TnfKXCa5JpnHUWsKmrKWsLxFdGDRUBS7qbwLQviNVQ4eJKdvA",
  "key6": "579Ci7AtAfg9Nre3iFwi3BJpmegKYBs5nWvSdg8MVMyxCkRQH5Jiegwg2eecUu8Y16Y4ZkL1Tfm5yLGvfeRh1TgN",
  "key7": "34FV9TmrDpTKCagxNYRUSmn4zr8b4D5cGXUqp2J5PVCPQam5sy6vuVTWLiaVKfYUw6nzXevo1WEuL4S5Y7eRewJN",
  "key8": "4umV8AXG35o3pB2AXgAc4Gi5E7rxAGEHDR68SDoeZiTcB3YtWvnqTiptjctKWwfQFihQsbhr1FwS1QPBpBV61DRp",
  "key9": "2rcbGY5gZFYKHaufraMScZ5rGWVJpXgbTyePdggtNGB4hNonZiYQG5Vi2YXNP9VHFhxEXGcaYNf2hszrku7zapRu",
  "key10": "vSnc2kZTtoBCmURn6D87jg1opmvHSKCUPRmidaeMgv3A8TYvALBzMZFD16vULSwoU5KgLx9MyQkbQmrg7fYRBD2",
  "key11": "33Ho28qYYkfDEenVHGuKJrGLvJP3eAeGo4pfWafzU5uSL55dRQVZ2Ei87KNWdUrTswVPCrfJ7tMPFzTUowfbqKyo",
  "key12": "2r1s3vDYZQKmuHMAg3DX9HrKz6SCiSKkRSMcYy7XJ7VHQMnobGZm7njRi8sZK14hvnW6UCrUM8vd5Ey53pWEuo6X",
  "key13": "3xubYH8dXzWNng2MgsUq3V48FduJ495gx5pTsBuDM6UACPrmxQGtCNoq4W9idByC5MyHJWCHooQ1X1BfRDPyCU47",
  "key14": "3EkFwbeMfmtG2Ty1WXyWkUHSSiNoBhGSy1mbvrEkXjvgL1sEjBR6q1cFFWvGoB1hvKW2TBp83AWs9c7114F1pLNv",
  "key15": "2HJ5yxrVtscq9rCEW7NhspdxGpfCMtQrA4hEf5kcVFLTNdgWG8PQBfyBzjWhmgnCkT8szb6TSjgWUBRwRE1KqiS5",
  "key16": "ZtjvrGqgiGyg49N4EFneCjbeM5TpAc7ZxohuqXizFvToLQDwdRKcwjHAPdbTKZHZ9vH3pKbawH1caATHrUrP6bK",
  "key17": "2RocoUzSgCMX17fU2KEQSy5EfcsWbNzCXoew38fjdxK6s65MctsUiw7G6Zd5Pv88g4WpHHTCzPsrANTBC9LfAZN5",
  "key18": "oZ65LkzZrnE7pJMmCGyjnMyzFxyTGhuPct7Vd25fSthBkZ45N75Q1pYAZb7yxu3knscoSuPMJ1Qpk81ar7oyd9B",
  "key19": "McmvbYvtNfhpWvY6SLHvQeSfQCCMhcxRH47rbvb89aNZDf9sonNHtDHzCf81JJYTp9ou3z8zkqAMMmuSEZmKGdm",
  "key20": "629sWykyqc24D3t58USeDNvPnVsyDG7sqz3WPT2AfyREzLY11QNctcdy8BqqEN5LKv2jULexQR15qksJfzA2Hhhb",
  "key21": "2Dbyd51YaAWfUMfrJCDtfn9M94no399XR2DnFGLaoJZ23gC9MKx2jQXHMcg3DyvEX3NsTNphCV4TREqUAgTkKS2G",
  "key22": "4ovBUDYsB784YKBYDfjUjeTFaUqVx3zNSymzgAosWJz4akcHpfZx2RdC2Jvd3jGaziEYnLBNLAvnqiroRoGc3Zr1",
  "key23": "4XSnHXfSRXqd2PQW3MWqaFEeya5m6QBvW4Eo3TuEWk2pT8V6ZpeikV724qBTekSW4tCuFMVD8HvyS1NakTL3vNWb",
  "key24": "NyK9bhEh2Hxw9eLY39wH5DucY5qDH5FPGmXrLFVKaKMuoBYxhLsbsT2VSxqZLxNRWcnRWRgqH1a6Vqy9aedQmGy",
  "key25": "3VAebEYBskjKBRie2wmRsCxH8r5QbN67gdK1szgFYLxkW2coiZnopK4MwDmqEnDbzZcWzefStaJYwbm4iZw1npqU",
  "key26": "SdSxHQpAF8mTUz6ULsnXph1g6k3vc4m4Mh1ww1GzZ6NW4VUiyCDEMBRapRz3Suer8bCJ1chK1a6d6AQnHt7kRgD",
  "key27": "34htj1J8tq1CpXja98zSk9SysKr9dW7dWxzmmV2U3C1MNLvjWpWDruYJZkaycrXtd3ZM7aesyrTF2tJfobUKD8qD",
  "key28": "3Y5VT1Ck7hB1w86Mg9LMX2jEvaj3e7tXYMjEveZihp3qTzi38WEUfkqbXYpXEeoCqWH63YkxQDiGhopwp6X3V2HG",
  "key29": "2g3LWLxd71TaWvhDWVaR6zsbzUHgXZDCU9vpwaktUEwAqwtbfi4Kc2UzTBDKw7SYzwcP6J2eugfZgY4j7ZK9K6fx",
  "key30": "94kGGzQTCnPry8HhKYuypAKy7F92LhLRQJveziQ97j1KG3oJHgU3ZcY7p75bY9DwUGBeEvTQC96iJTqNy3wtizP",
  "key31": "2eFweiCreWswoTeQrDiuc4qjhaj6mCJgFW4tnwB69Ty3gASXyAUG2kjtS1f7bZ6LyBuxja2JexcS7TL1kiYDANqb",
  "key32": "4Uk6PNoxDsM2AiPvoED4c8SSpeQKn5VX4nT7P9N8rbd88pKLt5wvL39u3wVM2CEtzYAeKtmWHHDW9QdpeNfSQ9za"
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
