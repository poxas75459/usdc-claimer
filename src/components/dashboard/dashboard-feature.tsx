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
    "3fcevoEAmNEDBoy8me37eGCwWgGDzHTzcHeLhp4AxWFE8cfWWpSQkAfW28Q81JjoXaM7ZtDufrSUzjuBe6TcV4vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UwzebyaPmxZX9RMP3Urq36gEytcepfREWeLpp6A5KkZcutUoX9BTUcYEpkAHEqT8QdxNyN5Q7nQsuzT3jx9QUXL",
  "key1": "K3GdnthJtAwLDuMcf3Njd13jVDLZspijiAmRkxC6BwBhne8jvfvMww57yNZ6pSYZSUj5gfqZvoBrR7Vj83GHPwA",
  "key2": "2MmaP3pCy5BErnDGVwrsr5PmtWKV4ZR8ZP6uzaohRbUf2AWrxTMpNEuv9FACzKBqi8NePukNQVSrru9SfeotoQ3k",
  "key3": "5Hp2erXPhRE6X4ro3iY7DJmyFzjnZGESmuwd7ocMNFxh8X1nRjsiePdY6kp3dHodGBkVR1nsKwr3p71cZVdajpKv",
  "key4": "oAQYNuTnZvCnf6dVgrNx4pK5ikx9F9EuN1qac16RU97PQNbBbGQKYb1TKC29ToSz25EQuhfdTo1swLLXU4s4RxJ",
  "key5": "pAMFZFqrqAm7C16EkhXQQZ2xkRfdTSUYzU2EJLQhbMXY3tZ6uDU1MezSDt7kfdenJD8Xy78iybyhLLondoyRQKB",
  "key6": "5aiGC8GQPy3drHzSqU74euYyntJLSKJmKNb3PMzNfGg1RkdUAPnWcuwBhAMJUkoj4GyWUp2t8i2ZgNp5pmXRgSyZ",
  "key7": "uNWBJS29cmsmRiaDnvRC6KJXgK8ZSbhBV3LEXVeyzRzC8ouyvo7WQgu94HV1FzNGz9G8c3MU6EN2hv8fJo9FaJF",
  "key8": "4idQYcpobSR5RzULcvudvgkFU8HtNtyhawwhEKTS5Ex4zSNPAagYzRXrzyDwaXiJjXZw8KoSz1VWCcXzw8jEeX8L",
  "key9": "22Ah6RuDRbVD8t3dLgXfGDtp3A4bn7QAn9BgifrxSb8XKH2vojVtTExFAjkeX3YRksALRjCdNb5HQziZcwW545yG",
  "key10": "yMvb3Gf7ssXv1NhkNKdeevsagsoxaP1oLR2tSgbPbYL3wrnZXir6biSy796TxRE13tB6fbtATJjBTHcpQMXk3iS",
  "key11": "52u6YG2iy6RX7NGMUF9RJei6GE4481wyBNopLAt3angF2AP61pMK1f8JcovM6AMpwAu8sMjKhQgWXSSsFQGtCW9Q",
  "key12": "F3Cy7Li61yvrjb8rT6iRkCUoph4jUmu92n6RbmYtPpjBy473Nh8TjJwZV3ptsvpgERkBcRBKfMZAxkDyYt9rFrr",
  "key13": "3nqhcUHSzasBjKbBqmgG1coAJQKou7XxHbkjvK2E58YW34RXwik7XfSa58Dbtm8McKnVhWYvWnWGCDNS3Pc36iDA",
  "key14": "ddjyZGEUnx7UKEGTc5qmjpDjfgyNUHvu9R1NZknTuGBwY95DGwbqbcVLniS4DA9eMNVdDDH256BGAfT2C3r4MbK",
  "key15": "25H2ix1w6HV1VgVQaP8KR5Y4hJ21TZcECPzXpDKpTkTQvmXff9wmmxkrmTAEjZ3hC8bqciAWA9k1c4xQNWXogCwV",
  "key16": "2k2cpXVjsKW5Mq9jWunM4LhdhQg4HpAiL5fm2B1k3FPyncWeXrC2gmFUeXcU6sbrsTi2PjENxWzB8y6TF4ndw93A",
  "key17": "2thRq3iuZnzgkCiosTYmxkAAS3J2iaxDa5DbXTA8mmSryxLk4L1nftsbDDBEWf6yTfKyvoVh4eGYPR6isRAZ3HTM",
  "key18": "3YXujKegEkPkMev8AuohrKYe4UjmrXmzzbZtH3iMxiN7pKJHT3guYMrrcFRAjUDBY5iKjS9nC3gWwVcDqs3EL7N3",
  "key19": "29eMiSADQv8TURJppoQgYLkVhLELEzHxx3cKXqvGbUpRKkU5n3bVyLbva9Z2o8ec55pQFj5z3tNDgAAUEcCoQHGb",
  "key20": "5N1yMpdc3wyxKNpV5GQ188o8nT1jsQAQ2pcJvEAFkbubaZofmxnTN2UywrD6HyP2nTywPFxf5ycdQrwg13cHMUfx",
  "key21": "3jQf2Q2DHNpiqw8iQJ9iTEE9ozXFMMacAmSF7RQMmNZDJGJeYeGvZSHhRH3ySpUYDErRbmDbWBYeDLKBkcKZRvyo",
  "key22": "3Vd2XLkZQPYjak4LzDBqrmp7v97uHHaASxpjDBRYamaJb3xMMWSk46a4DS1Vxo9s7k6t6rPcixY6FFP3dH66KG2F",
  "key23": "2DnMPFdEpacLP38T8xdyEAa9s4jonJSNvUTrB7BeQkW5rhf9WBL8CCskQWgCFANxm6zNek3kdmtMvotvLRYobtmb",
  "key24": "3Cyf7TP36GieHFEv7Ba6pwPxtutKx84y8JzJFkFZr9zQjEz2VgGNevuBrEhwSh25xt7ehn69J9rsjZLYdbgJRpaw",
  "key25": "51HAeSuNDshDeEPBPCtjftQ4xAGik9R4rXtdyn4tDQxsgAYRe6jrQ1F8N5dMzohK9Kq8XkqWtGoJVSsmxz8HHysM",
  "key26": "Jy7Cq9wraAay9ypg5wRmNmKMgjeRzPy533Gyf3q6LEYRtY9G68jH7F1du6kjsmNLM9EdNJfTkL8PcLuFjuSY278",
  "key27": "4xK6fMhPqEcHvfhQ8Evv3E8iov6rqiK6JuwVu8w4EYWkfgESSFCRsCHyyyLyHzpcxXL9xQKVvr9nhSSMEpdwSYzu",
  "key28": "2tw9KwdPHuU76gSotFJ7z8EgRU4Wi8Soq7BfLCzBKckhZR58QjD1nhUoXoHHmkGCnXg37mJ5x92ozzApBTJ83C4C",
  "key29": "3a6PKdp7dpnWsDgQTSRotWjje51obGGNuyWjrzN1kLgjDa2WYbzXLBk6Ko88Axxz5FEGHw7wWubtNE5g93C1ezqq",
  "key30": "5Coi3HpKYpTn72Z7RJUhhGw3Q1MgScSFV4QsCEUBNpovw6ZHoGBGMiRRvDTTaw1zuLLCCMs6zpCYBFnwtZGBsmHB",
  "key31": "49GtinzPJhs6s7mC2BEcSZ1RJowGanqLG3SfP7WmJ9M35Q4NwWDp4ZTihhVnfeD439WcbmfZmhBsZXjngX8hcwau",
  "key32": "5vyRj5qcrhedaZQHPZ9daQBjv2VBgpErfaGD8QEasm2uJhyiwJNkmvpnciE6oJkaznRzDZ7e3wbiWQgqwAnj1DLL"
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
