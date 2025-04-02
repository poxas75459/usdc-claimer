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
    "EwT9caDGrMWS1f9TaNh4STTcSpSnjupomB3iCQ7mZxS28mivBn2orLNfuFsR9MR75E7ZJjFPNB2Xced85iTivks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWMecbdXASW9Q5xpoy5VawyrzPzgUC67ZxfnzZ933Me6YsPTWmjZJdxt4BE7JWHRGBu2PufQtQ4Ptdmm4ra2wKj",
  "key1": "5g26cB4ZiskBq5bsE9vQEzbff8YSo1ZBZ1eLRTnc3ArLXTsMLnCN5UKLW8xKALc17fagEh6Tc8HcRMhgLozUM9Qk",
  "key2": "ioQQ3AdW5k4ssg9tdqLNioHHzDr9YSPn12dtw8GjUmMJbbT4ziRnbp2JjzwhRDVz7GychDqt9m6tzv4v8gT4KLt",
  "key3": "NF4eAJaBRMtgJbDhfEA8NFesCY6eaTZPtDQXmaD7yHTtbviQBqC8Q7f8TSw3qJduRTJDFdzgWXfNfKZbKCYM8nR",
  "key4": "3q1f1abAJY2Dq5axK6wB2ePCFjVyWM51n7sHejVwzrfGiuwPLQwqxt7NycqvdSA2PdSaeWstngrFRYUUNrrZ6jGw",
  "key5": "2xMmtmEJUnCQ58ENUZvrMEMftVcHPNkQpTRp5UHyidDdsTUPfNFVBU23Wj2Dwz2bnZhp9E4nMvcHkXyd68W8MwSo",
  "key6": "2nvXvnoQTQMXmv4gigbi4yGeb76pvnu46cBpQmNNdzyLauNcKn1wPeEMitYyRUaGz3gbGUiSPNPYpXGVvM7fSYfL",
  "key7": "3q7w8z1hUa4CKinVNmkw8MbaWwYJa9d8ubBqYQrByDRKPBb6fYd82TwYka4nErBCrXVUmFgdjb4FXosbHnDxpkVU",
  "key8": "gJjTmkAQ6nhXL2Ea99i2t6QGoS2tCENdz6GCd7FWVo1B624TKnTb6J4efjSNnSpMppjZUYzgH96akRXq49HDZRo",
  "key9": "51ccrjLEQn5qT2sot4Ts8WYpgS7QgtMVRxkiH331hqikcxn9vDdSEz9qSYBFw3UABDzAmxPb2gi2KKZoV37KjVe9",
  "key10": "32TV8nZp4gTxN5RXZD8xtgxTsqqB3nKbJ42oGZanakkRXSqHToree5jmnCRfhnY46H7kz1oUJqkauvzHsadjyLvj",
  "key11": "3WNGYTTXr57RvMzEvEc7Xnsruk9jZ9iuLR2VwJ2AnTfAo5pxUKghsGBdmQxX9Bg4pWZvNyHWbyGH5N1eJDzmfLWr",
  "key12": "4dsqNYdaHirtpmjoozMmSGSEDPvuxNPhq8AswPeSuwhFBDrsya8m41CVPL6hL9DV9EJk5ewnCGqG56qApy4TAhja",
  "key13": "28EzezJMcMyUmmAm3PAqjk7sQoDbQbrXEcWhbD35yfhuovWYpMuGjQz6FdgvvQjf976iU91S77uDUipCTGozFL4G",
  "key14": "2TMUuSBvh2QEA3PUZFdZczqkWpW8YNWox2VauZVXpfbqeuVSvQX5WT2CKkanZ3x934JczTZLuuybAEyuuN6yy84h",
  "key15": "4JBQnYh7evxdq48oj9Lp9djeYUTc4oEM2D1KFZ96o9bBK3KPqNZaYadqxyzn3VsZcaRiswSUteLgh8HcidkmJK5F",
  "key16": "4HeDHhML83HosLoW8h8v1XLX596RSDmd3twcxKuAsHcQcehGHPZqXNyhYhCMqcy5gCuuTJoRux99XwW2NfbuPxMt",
  "key17": "2W59EvqdDygqz6oTyr1pDMoZj6oiPemXPGBWPezdAk8FxWDKFMrgDrPaZVymJSCyRwDUcJVK3avtNSV8T2A2fH7k",
  "key18": "5oZ39QNY5sYdV2tRpUJibFNPYF7uPrqHjoPjJq4AzxdgZ8SjVZ6EBMF7BbFn8LvUpujJkseGCa6okzrp1ZAM5qtg",
  "key19": "5HZrPqZbbAaPp1eefBfkjCPYTifKCcFSALM33eWLRmQ9NQGeEbgyTU27ogosPQ4zLuU5Rgz5LMhPvPk8DWfSKnto",
  "key20": "HjqE8tYLEbrP9mWFrexCUvynBatKw8MNfGnF1DfVAHgUf6KuMKHJT39xkaDYCkguMUe8PPCh9Hw9vXVBA1tZY5c",
  "key21": "5vh3kWWPqDkw6TW7t5Q4cB5ZFEz41hxVD3TPuLoB7AiEfB9GrMkiny5vzuUF3NA7W25LU3f7WZqRJpJjuB7j4pHh",
  "key22": "2pKGX1WN1ig7ZApXZdB87LXSjwZVcnYmJxpoJujqsoKbRFnVR6nBYk64Jsv9X5EwceqUSG5cfDCTu2ozwSuNjrqD",
  "key23": "54m67kMNrzaRFfcsy2pc3rLHK6GzLF8fT2bM7t3EgwdRqjWnGdbNjQcAb9vs8Tf7vv4PJUvot43Gbo4aooFuZ3W5",
  "key24": "bzorJdfUt9dr12TkHZQ3196kdm8oS1LP5u7ZN63YB6oA6CqMUJQUuhCDErz9FVDZWCFM4kUTYFyAXQoQzWTM5ot",
  "key25": "4pBd1ipmq7dEdKYTY3FiLK2PKVKR7AMWVYxRvAhepuMMwiDUJJYHnCZ64fYerntkSn7wKAYjf2jXb6KyeGZYBX2A",
  "key26": "67rN4MMuAVzBuxTaCKbJRCLNLMuujscPdMN3T7fMok1yYwxRQzDggLhdvVbKYFT4HwXXiuDZDRoFjew46qpvZz6c",
  "key27": "yAershpgdNtyTxzwcJMXKi3FY4iD1Gx7yR2SnThazaqDPQErwRrRsUyvrCxBByxrqFwBGHj6NAjKkQjToKggK3M",
  "key28": "5PjRsg5LfK4LDFaY11Hc4xrY4pYXN8YswzZYgUvFRWfJj38yAoWpQtZXRMHopSbGsMnc1TbAW1LaVufvS9QadqTd",
  "key29": "2apYfb3MhvtKRNdQ7297Z1MV17qYtwb28yuMdnV1gDKzKbxgwhU44UzyamiW7X6fzpWWjqcWMcXMMz3qtd98PBmf"
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
