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
    "3oC1wxEAMf9x7RNkiKBqgBqB25nsW814Y2j6XvmVFymiVZiAVgKE4Zudw1TyXYFj9uThAgG2g6v3MFcXoLg5WFo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KWqRtn16tanCyeXzmA7LTpi2sDCxAw2CgUzZZuHcrivCjyEj3DSZbJqcEvXksQCW3qKsmPCFq356XbGuc2rJL7",
  "key1": "3VFZe855FnPHLwdimBV8rqZNLxqR6bz56JTWw43XfiVPrUfNATSTEBsgmxJKck5tn1FiVmUp6zV5343VMJhPQAxf",
  "key2": "47U6XvsCPPyeN3zeJHxZboXd2VKQwGdot8nFxbsdgGUMCLJZtiFgsLGQPvXyEFPc4GUEVH9EAxeViXzsX6NafiQP",
  "key3": "8QguhtvDgooe6efvLqz7Lk7cEWLQkPa8fgrVj6fY8KwhEEL6JH2Gw35ZMsCv23W3S2giEPwnuaSc7qDWuwUjhXN",
  "key4": "4e3yPthJ1oQW8B9Ef8Xb2KWEReTd6x15RVZw1uX7qCtbCr65TCBSZX5KsZ4PqwKAeYEcgJxGG3f1587Pj1LUSPa1",
  "key5": "DoCDpAySDyEA5uzUDgoYyYSTuiVu3MDw5unjkv9sAhBX9peaXpRPHoJNZ6NTXVLMqwCu5zFYFix6zezyiEDuSSt",
  "key6": "3tZ3m8GbZqnrFdpw8j2kk2HGDa8pzhy1eXYuZ5Rk7G4RP5y74ogPetDJKgiscRLosVptoJ9nMc7fYg3LVtjB5N9L",
  "key7": "3Ej3RN93sZob7XHZJKN47VrKYRBhapiHqS2YyjWyhASUgdF8pcEF4iYhSowiKd9vFqAroLghBgxwtRNXbx8yXpjP",
  "key8": "5gMh879zjkXeKtSFt5pe1S91bt7j8oP5SR4poEVXuHsfrvdtufh53XSy1AaeFRGsFa6tekpFmuT6Wo8Jkyx63MBf",
  "key9": "KoNaVA4cY4ko5vm3umEJaGWYX2YobkW1Vk9zidXesTSQJ25L3gTPGtCeMxKggXrfgfTXfTZwgwVciXuWTceTVke",
  "key10": "3Mdkmi3bXEdLKazGjgkR2E4vGcKTPJsxLJgU43hftS6xuPVtoHbUkugb28Lv5dTvYJxJxnWWKC4WU85oxBmXs7nv",
  "key11": "2Ww4FysuJyhHruaVXKxQDCEghWBycePjhwS2G5KSkpANrMHagZvEK1t1jH8Xo9sG1efSZYR2aegNjRUNFPcveWBU",
  "key12": "3bnCcGtZaDWXYiVuwk3enHhEg5oQFUWjN3DLqgknGqNoFbEvcwZJFop2MaDKoaUKqAnsjhbyNbAGE2QLRAbgkbwH",
  "key13": "5awkScsgXa1YxzP9v1JV2A86PkdkquLz6wENaP7W9jmqkMPPWa9QrDTzyt2j4F9vPQ57DNTsDxbDRYYanASACjbg",
  "key14": "4CYuhjJTQP5ruggXsFq3uth2ULG4uF6wYsCVtNRAQmQ7sF2x2DXxVK1gRq3KTT6DkW3PdJgQTZnxxKwPR1pXyjJ1",
  "key15": "5DgWwVJ1Qk4Bdx9NBZ3sPARC8V9uKZQQHWmhUiHvQ9RLBdcdWWSXgsyS91EYo8Pbb9nT2bnbPY9hcBQ3YKFuhyEk",
  "key16": "xbADu1BV747DqZMzVZJpW1JnGa4LbmkBi5R16irQser4PEEJAdw7jq3MdXPk14s2uKJ34MYSfifwwXD9mcdBdsD",
  "key17": "2bWk8MHTAgVEJhiXD6c3nPbTySvTMqx9aXCWqTrGNK4rtMz7dxwDrSLEdmdfSMP21BEaxE5xQSV82pSNySD41gRX",
  "key18": "3MokPxzMiYzgtq9XpGmZNvV37FFAhAihvTvU1GvJhDmur7oBEJkK53Pmim8uJuvj5EiPgWfDVty99ggG2WWq3PDj",
  "key19": "34BeMcnmhkADaULojWZ32ixy2Nbn9juxgWmKkLPWgvUGEMSjUadg36Z4wrLskPAjA9EMA4FsTGnzB1NdhZX3Yg3h",
  "key20": "qspPHuL5Skj4EbstTLkmcTgH1RSCKitE24JrPtmxWTgCTAGpCRFWb4HW4zhZ5uJxfuYN8VBExay8666cZRU2uNG",
  "key21": "5DWqETj7D8nqWGV4nTfgXdGGvL3Fzc3njtXC3FZ6VZ2AhMjbkYRhz8rTHMwtg2hD4qmzNJEoPqz34AZ49vtnjktU",
  "key22": "5uwBgRWH6ABww1GqLQhvNNeu7uD3Bb6oXqDii4E2YhwpNdKb2nwmtFy4umfyf5yxkj2CWDkVnkuTkVUmJN7m5DgD",
  "key23": "57bQvY4cFNKdzrF2vSJ3nbcNLkGrkayVnwNqRCEDpvpJ1PS2eZSMyGyoaG5P6AMsASDmpU3qjwaezabmF4ih72rW",
  "key24": "4UTYSpDSEPkekBYviNvMkhvCChDBsDXnsFryzmHJXgMGJVPLgbc1UW8LDgJGTNyrzVHcjxkUSwWRSzcA9M5KFgKY",
  "key25": "34i5NikWuYYLaXnDHSSkXFwY5etCgExV6WZAQ26oiYxpJp7h16LqATTd7cnHh955ji8LyNdttkokEiWttfkbwAYH",
  "key26": "4USpDKVVSPisW2ZjrzzE9UjG9HVx5oLEuaRfSk3NnnDCph9KZXyN1sCRLq6yaJSwKWMHxtdVCfy44wiSAncfETqo",
  "key27": "4tzJDQT7LwQM975seJibTPPiiZRkjteZpEacTdKRM5GrDeaqhzkVTS46boZ9EyiUxrGETZAfQqZqsrfRL7rzCipc",
  "key28": "3ALknR6Rc5wyGQpZuMZhSsBakQN18MWQErsydvFdtAfU9bdY9vmRbjUVi31aQriMjph6nGt8PQHQAniKSRKKnJej",
  "key29": "4UZnd9uZFPj9K3A2zjWPEZ1GvymTfD39giQBv8g29NF4MBfzzRibF8cdQS1XB5SbbxSvNrQxqsYcogNjfstmwVSv",
  "key30": "5QNVNjNv6oDCWWsFaREeLNnPEig71DPzgdgxeAtKXp2iJP9VXB9mvTM2GALciQDaeMhsy3HmoynebNEEBv74eH5S",
  "key31": "2NoJAji3DXXsCZDbguGK7JH31qK4bji9SUeirwYyrV1WqyVoos4emcPiJoP3YVw52QRF7gbgJgyKXduY4DKSLKfm",
  "key32": "5YfGVw7htUoXAYmXi4uqPLmxodepjJnBEJkDR6g9N6PwArib1DHXtnpY1ZX8k5s85YyEGXiK45nfLwoH24z4g9vi",
  "key33": "3QXE4vFYUEWoS3UKsuQuZtxwse3GzvedAbYaWR1onB3BMnnysFajPE4a2SKDyBTY18QpLmWsVrg8Reb1K31w1nNE",
  "key34": "3Jn2VPRdbwyg4142QQErqbmjdAzqNRohEn5oa9RWLCUYiAtLdeYbUeHAtM9AbtbNk9TboZenfzY8nj1mQ4GS44LB",
  "key35": "Qdb6L9uME2u6FnHHw6aVJNNUzGsAKQCvAPwpqoUQY3Jjt9paBStLErmjeeWNGiLkNUEUz39owoN3Arv1TQtsqd6",
  "key36": "5Cs1upQDzfF7UnXs7biaRS8SyP4GnpSCKLBBkhgNxhtw6f1XSErkhjMDV1eM3BRuMHqR9mvDgZ32KRdWrYX7y4Yh",
  "key37": "Rmu4Qkcs3KA1pAbeiiTqoox41nrujGj56q9ArqoVEEsvY9xD1UZmCFfVjWeWjjhfMSbkYMrGXDGjimomuuzATiK"
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
