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
    "5nxQLoCK2fZokoeb86CvhwfWoB1hCLtbF7gmf3bBVuyhEwkY4zfTP7ukHT33rbxVEmxeh1bZaSpafv5fgFzTe4me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHCspinnjZwffEYRXEQoRq8V5BC1qw3MrSynkNZrE6kTDd55rbVktGrLprgGgyrViEVjWeqbkBpRPBkGKVBZSgC",
  "key1": "2pjy17Qg3duQZKusUeFj35zWdvoYAzMeF9YKAczfAd5teZekm5zEcBYgigDqrHYF5KN28KCjc1RMoxqbbVzQqAJy",
  "key2": "4YTomX3FFpWstyu7D5LWaKwa7fM2rvAVu3hnd3KSPLQgE4BQdZudJ6Twwo7erk8iW1sFRLopJPYfM7JmsBwih3Z9",
  "key3": "4uA5c4Je6Hgz9u8r2GKtkAkReuhrf9JQRPvZwHEiY7okrY2J8XUGzVrC6zUVYh74t5jmyRdrytXFaAoH1ApnZYtd",
  "key4": "5tPwP37hdPRknzEgzPvpLhaXKUM9fmH28WQa2NaVhRGPoYbXAwexWaD971RjvehMxV5qzQtbxA2Dx2o5GTobqQJa",
  "key5": "3yLPpJgpvudHnNKqHDxRMpB3pNdkpEEdXymxUxeCLxveuoGyQcpa9ymX1F15pEi6pwhEH8UjjZmoBLmSwSmHyHaH",
  "key6": "5unTZ2rzzfEoYccHbMmKyNsFfj2DyLdZRdkttdU6ETDBSca3F7wk6Rd4yNzc9EUtzoGRwjbZyRWveR8bsmqQDMHU",
  "key7": "3Nokgk6JBXTsCS8usnekKuzav1MDsyCAygtZa3VeYLs7GziJiUcscKGZ4Y6TDrxXXCsy5H1DuoNErS5pNX99pS2T",
  "key8": "3SUNqrvS9g9MRCmEbmEimytS8hpzagRQEeYbDkYUgKcCuJrPRxn6f9iyyCVjViVPW29t6HtVYZeCV6rz4yXZcTGc",
  "key9": "5iwRtMuWmkaqYUYv6iGE3pAaJrJ5Kgh4vx45PzGnYFBfVjZtt3nmkh4CUY8sy1EgNvFYeCoJSEHuuBcoH2AZvd52",
  "key10": "2vkYLY9kEhPttKqaWn1LWbUTePZ3gJ1EQueuuRV1keBERcRs8VKz7ijJLFuFsqHvW282J48KZeBLKYWuScGFyAMY",
  "key11": "5KkF9MM28LuSaprqGgixs1SCweQ7o82HneysxSCd5xAqNiYj1cEaDXtRAruWZ7MqS46WJqmPenV9gSdc4UdNbPe2",
  "key12": "3HPATk9PHbdBz911ppUFVhSWWSLTC2htBsRsDUttaTNSFxXC7DxccKx3XK5P14j7MCP5YCLV937oD11qk7NuestW",
  "key13": "2Jci4Ex15vySAc5hkr4MnATZxG8rbMomz4pbRx1mmo9VgZaQzWhoDi1nAxdzprEKTqKRWC1TTwZNQkvmSvaBR4a1",
  "key14": "3pL4vB75UjeXsDuL9AGS6gxRB1mMrkmyQbsAKiwAXqX9gaMvFvce3K6dmVCpBjDxdK9Dpddrvftei79PCiXhqZHx",
  "key15": "35r3fDvD4PmMKCMjNVStPXggEoBfp7hk78odL7s3YkFeXL3QTWroFrmfdHtKmGDTDaPmjNW1XcjpRNpfXcCCzsC3",
  "key16": "2XKRAYW5f8E2xRZQVh8nBdvr6RERskP2U8cP8yHyMTNpcCwHuirkHYVyzFmntEvmLC8DHBKrGkVwrWufaVjrqGQ5",
  "key17": "4GGB8MSqXogxjD8Mq6w8sJJsA5ra8WgdVv7zj7qguSJXShV8mwVVV6vAN9ypFpWtc7jViCc8e6z78RZeT8aD8YZT",
  "key18": "2Bm83yjUjR6XggqajvtypnWzSg22gxAoGs92rCVnd6jG4PZbs7Tt2JALNLjoknRWxP4fVmryxwqtXaJhgJ7JPApx",
  "key19": "46PS1hfAWWwLjRpaSbNHCdgp8YGJuV7wYKeVX7dGvRGomH2MMVPkRMTnTk4T12DKiJeefPD1b1PRrEvkiFbfT4bX",
  "key20": "3JzmcKCG7kFLDDbG54yesaFxqZtQKarm4Xd1i6CuffvZH19BrLxXjZbjLomGv77Gyd6rnYbD2aYkqwCCnqpvqMFp",
  "key21": "5iKFK5vy7LYvUgX7f9ezRWQzWt8qRfBgX86RNEDarpVhxpB278AtK8N9LGdH21kcyxu2bBMgC8hx5GZ46Ku9AZ6i",
  "key22": "3gwuMH5dwDYbAjQnZx1EMDCeCYykkZ4MCSfsmN2X3CkqY4jqEvfcytsC8RSg6Kir7N93aE2A26QQvehngrncjHeQ",
  "key23": "5pbuzgtb64EkpEktAWEibUk1Rsn9tSLxsrnjBoBuKP7xDDjgjM5nsTDttKckrbC29vj9vxtJFdSUcH7GiDHonP1m",
  "key24": "386GqQRcchibH3oiPwcwosmc7TBU8uCHSsvEBGwuKYk8Sao9ULgQ6yfiiLfX3x871op7TVMiQNov7RBoZW7Nz61t",
  "key25": "uUdbeaByaKZofNC7hcXEKm2ATTFr6fzjNqBaUTTYEmELedssTcT1rZpBkbrCpHrnUUeTpVxTXA4uH5usUsSNpp9",
  "key26": "64gv8s9CByaTjKYEvVB3KfPYst4wq2TzG4DnpbuA9t6jhvQQHTrzwyPrhAaCKsnHF6ZMCKzspZhtvV86xX5XACGD",
  "key27": "3d8NXFv6apv8CPfj7m8DVY5d7ed19oeWYvSQ4SUmaiZHQSCdBVhH6Zo3nnxgU8VBJvx3tvzuxV7JWMYXHVNn5FTK",
  "key28": "2PHtgFe2Rz84YxAdWgC5bgcgzDrV822DHdV5wqbeZmqL8vmQL94pmDAGXFeYseTedeGU4zVxaczHn9WmweiQDEp9",
  "key29": "2KN2cnEv897EAmiymV5m3DTxJURvi6yqzrzgFABLdQL5iGwd9JPRvAMS1GTkTxC6DTtjoS7jNMiWycUqcakNwCAe",
  "key30": "5qqz6HtSG9cRN1XZJcXqCSEJtKHFnoKmx8z7pazHzgUh7CsJFRxFTQwfgSGXFeT75hv1AMpVBn8H2ir1rhVRSMxf",
  "key31": "2HZWRDEaTrm4zw368CudEjxr6P8MaAAt7hHainFWDJTPaVA47bPJQ3cjmLD1WwsfXHCVGy3QvPmfvwPa2XkJrFZR",
  "key32": "2RXBycb1HtBqNVtZEz2W76mddHzgm5aFMhyMSBjuMtujU5tkNTAxkzhWRy5SR7S9DkZ3F9ZW59WVt3sYYmwFfajy",
  "key33": "4xgQDF8RvBDD4BnCEAYKtrcY8ukE38Xy7X8kwHJG3PCCAvXHV4xj6d4ehKVKrNGLM46Cqq4AevzGSUN41dMp3gkj",
  "key34": "2y6KrKYYAV2PmZC5VxLuGHw8rPgEB2xUTFoFQU6TZQsQN7XLodcngec2pgbigVFQvCXFQPMQZ2SsBsMas9STaWHy",
  "key35": "4he6A8JtLpG2J28xgJWd9PSQnMfRiiac656ZS31dLgCikvNDqmeSCzoJX3JJoeRNdHABpwynpm9A6rdqpTatuHpn",
  "key36": "5zAPZHckuPLr63EnwuoQWZjCDieDRp4e49BmTg3bf5berXGgPjDmtxokcKgCyYAX19kdTzkruaGNutRz9mGwEJse"
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
