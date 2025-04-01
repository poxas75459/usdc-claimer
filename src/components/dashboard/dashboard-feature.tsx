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
    "4HS6MHho16tkXfNuhPhiy8vWW6TyS5nYUN3R46d8dvgamca1M4K4vdzeWjHUA4Nykr4k7QMMm4YdboNfYrpggxZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNnKoQSZ41huA4ghSbq25w4nYNjdGGsj8Tx25s4FPNVCNdoQjAz9sHLQqqbSSeG8MrdqJGRxKnwbg4NQcvCCamX",
  "key1": "2jz2MG9ceG6WiZ8tgv7mpe9usiNE615S7Q88j9iNnvQMazjMLhRC8UFjWc7D23Vi8swUsQbTxSXusw3Rybh66o86",
  "key2": "T69Uo38vA9Z74SFrtfaohTTT49PtCbfDcNanHfrPtYtiT5nKb5p4SBiRV3Q6FtSbctu5JUuDJGNz8SjXGL1HyUE",
  "key3": "8f7rf2YTr6RwxVXzED8ByrT3H7zJVZEry387dfcXPrPhVX4uZZJVx237YG2Hy4D79FHKyZ4kihzAaEUzz8TGhiU",
  "key4": "4dYH5ufWfTr9QpEDUmDkzdQGAdpcZTyhU21DG5aA8pwAvLQimcyCFCnmD7TZtb386pqyPDzkJLyH4ZDcythQSdhN",
  "key5": "2CYLzXsiAWjH5wPwC7tVXTp6uc3vFMkCmE51MszeESYjdguQPRhjsyJQkE8EEPpAWZVMiRWZhiKHb4PxmsUqDrFv",
  "key6": "5yBi5FyvhnfkSxUtLhaVCPkk1P5rQHvvLrWCHHM7nkxYx86M58JLvNQjbFitswsi9Pm7nwWJmWHB5wmEciMzL2Z1",
  "key7": "4asvKqWDox5no82QAHEyLSQdxr15jvdesNxzjRH4mRR4i7AMadPDWus3c9SyyKsPpkqFsF7uUxXaGLyHTvi9PuHw",
  "key8": "5MuxFF52CVSQbZ33ySNe97HvkWkDVm7evt1GCpSA4YqqgxVs5JAVH7igbEesMTzX9iMgcP5cqGWfdQYktCNvbySU",
  "key9": "3NT4JWk8ZaejPyCyp5ZW3aHTcQTXRZCqsS1Djb3uBd7KtmYnn7Y88oq3Xb2pev6kdc7xDq2VK4s3rq7dG4socEUM",
  "key10": "4BJsms12APCV8ntPqrnwfDuLRXVUJdbzZZixDvMv9FvBpeY8t4hbrz1h2QsNsRb2aJU6vjSRNNo4ETNZg4zK6FH1",
  "key11": "DEoxSd3wyRx3JWnRc8znPrRgwdZ8a56URayvaiEsRYKYt3kUP3CXHbmmDvML28f9W2fHpndowCB3HCDtCjjAnuH",
  "key12": "4CTzsXdPiDcEQbr1EGczNrta7tucsr4yPgtTUypwZksXYcebFWwS2LWv4yYMqpHgYBoUhbfVMnmJrgFQCbvw6GwB",
  "key13": "2FewuAmRU77urGSfkjpeN2X4B9emUP3Vz5w5zjNuACix4pbszRxRTiVHMsrdjboaZcdhUQuSDd1haZy29mpupEzb",
  "key14": "2qZKXPE2w3gLUbmBg3xMWoCJKWNnxhsDhhMRptN1NEC5ZF38FQppsjwpgzKHKQrgMYeQ869dQcPZJE8FEM8rKTtf",
  "key15": "MxorATrrtu3jEkACm8vMUTPULyydEZZg3vpZHVeiDrVjuFZK7Dhz4VAUV6vWm1hJG2Hnab95hnTkVSgXchXueb6",
  "key16": "3MUnV7Cs5dpFFQunEAtMmPjj5bRQYz6Cx5TQ5Bb5kXbCbxk9hGSJRJRiq2LrFMvp3mJoYRPpzL88qJeFoz3oPY2v",
  "key17": "53VTYpYCYfaSL44G3fVvRUXT6SDCYrS2SDtJEUQx18nVpGMDPChq6XjBTx8fDwz2rS2DLvC9PBkvW2WbjgjWNRif",
  "key18": "4ahziSGMqLMXRiaLCPAzXwduqynGBoitYjAVR373CuGy6DpKjwuqQRwnveE3CZiFkMeDugqH1BDBPQnBSHA12G8",
  "key19": "AVp6MNt4A4SZ4byynp9JgL6oXTyRhiuvc2mW1XpWgDtU7kkHhPNMBvJwEDF7MXYfLgUCRn5MMwVUM3HeEXX7cPj",
  "key20": "2VWVEcLD2XLYpsHBS8AminjHPdebTtNvUWV2tSt9bYMAQnRcXhPuqZuD4d4Yo7au4KrMtyq9SMKQs1R9a5C7HNUQ",
  "key21": "3xhTjAyAh81SgxrGuhfo2iBFuXT5h6HToWzbisSiU6brductGizUaAC6BvgopV6cz9XxSPHwkfthKHMpNz3D4j8H",
  "key22": "4iAPTFYKq9RcKeFFqLRLEubbFqXw58GqYE21eAXsLk36SHTTs8zSKXDEkXk6HvMVHZPE1TEVTprd9ctetAJJkLpe",
  "key23": "33L54D5DutcJp8MBfn588u8MTLNCr52Uafhck7Kvuouoy8yJyXR432noWH4st4p4MNgVB4vgC3YJ7fC1DwyPwQvN",
  "key24": "4yxVje3DHAkgtqVqxnS4GHHwJQpMYDqUKNsoMJsVE3QpJaXkaHwKhZsdXsZKQpVvrAuoZxsCAZY9hubpmz7DCYNu",
  "key25": "oPupDsw61kDRrxqVJNb2ibL7uZZBBkkYBu5R77EocivFLv1CFa9wpbLW4XnyfAtMWHAJFXZGDi3npABaBigQ4hL",
  "key26": "5hQvgzApQ8RMMoiQwGJPE12DBRFPtuHMGmCtjAberiEjrVnCZT7T6hAFYttFUXFLCin6uuTw1KaQNyuGe6t4arkZ"
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
