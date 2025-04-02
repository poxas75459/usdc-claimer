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
    "3UZ4XxqRKMtm229njp9o2qbtUP9fqtSBR2nNetr4phm5fkhntQ18gjtg5n6biWgLEdoFKB5pYzAt4CB135hwETf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PUg8yVmbTmGHPdXgFEDQzYVEtVF5Rf5b4wchpdCAAvhJZ55pk2preoU5RnRiGKpTXassEyjjMSEHDtNfgmJbrW",
  "key1": "4LhPzDLbHdsJHZEmTwrZraWX7vrSFwYB7jX91g8Q3RSjYLD4W6sExyJ5gjBkyUyMhqG4eWjDCWWdG5nf324DrJWZ",
  "key2": "4FSB6xaaStMhkg8quk9JMnjxw4ztJpdpJDX3b15h9Z2WVgvitZvjDXftPNWPxJRHzedkirQTGddNoHGxPRbxrKBa",
  "key3": "5FV4BmBzBErheuzDajGwpAowMgyA5PuwGzVdEpMshwAvxKhS8DSFTn6A1DzgFiA9zVfu9i5P4DZR13VbZgwAtFNN",
  "key4": "2qWyfzLa4uP6ytB2f8NZ26Hg6c3YGCJY8ahG8q3WQJTqovVhM5DhTJJ155CwnARiHjrgdZNBZFWgLFPMbUnyVAk2",
  "key5": "3M5nacSv8oqLWMgzRrf3u6DisBmJBhYqUDJmPfoxsXbnUt97cHUFUT244GW36UR7KPPFjwSQEKks7SJK6UGHNWi2",
  "key6": "3iMMhe3rvLoWFzaoeBRCCYfSxCVGyNc8uFNCvPM8KxGVviTNDKycGQELztqK6TNAfaebKA2Mb3VE1WkVVPNg3Qkn",
  "key7": "2xmyxi7ejhWJm61Np8cncHmkv8no5Qx45a5hsZZ8UPUM26idptYDtXdXUiUfBTMYnm9tydpNiLD9G8W5hWUj7jpn",
  "key8": "4DE7kPmX1jJUc9axHohna8cRaLtZMwiDXy8hZ2gtmgjBVARbYmgsWVVhXzbmJGiWV5zAKLLbG64kgMEfYvhMoxTj",
  "key9": "3Lh9XKogd8onLvkKw25QUmcsp3YYa89Tu4hWKg7JRK5svhN987RksWErGywrAfpCmrLCkat93TQZJ46EuhwHzXME",
  "key10": "48DJTv19MxuV1XAADKwpZCiNNLEPXBeGrs3gfJ3GPYVNKt5im2EEKDmkLBEsgdzpuv7eFUFqMr9nnKKJrrrqjvQf",
  "key11": "3SaeyvTGPehUM2J4m9gXHXmHk6g7PDXDoC4EpL6Th4UE9M2HHABr8VbSGD2ozjxCcTkBFBbaDwpoc4YKtEHNXkAc",
  "key12": "52Mu9Tu7yXCTKxTL6dLUQfg26vH53iuYkxP4xQwfcqSYvBokN2CSRA33TQLCVnXkQs4VJVCpKzLnGxCT3g7XgmYG",
  "key13": "27X63A3Yk9WjwMf3ZAkkMCw8R8bSWFise2wAfidN7kkDALtgF2BLGaAvszVQ7ZKYxBar1WU4KPvAG2j251t3fd5r",
  "key14": "5HWmFG1aWKhHhAWnGxM6t1pwzYf75TM1beWzMSCQJwbSQMbdFvC3GcYX45zhe6W3L89UubQCNWQMQJG5tLhd383v",
  "key15": "4w3N5L2EcDzto5Ui9cFtpM61K7cM8u9RtrVAHXEJnRGZxMceQyxXGP2fP1dW7YRxzyD9AMgKti3wu8Ma4VWu4aAU",
  "key16": "HzhFvARCgZVAVgwGUjFZQwkwGzcduqVxhWM98MwedvGZCtjv8WgrM6z5CVxMATGnqmHrjhptfHVyxUvynmw7K1A",
  "key17": "2xZnDCrCbWwxXwqYQk57psEMPKxfxeB83bqpZSc6qZFa4p2QWpG6SrEygiAujE54iipME11L2XvfAQKCsjaUenpn",
  "key18": "2cUCTHMAt2EY1tjEjLd3hLU1zgMLGz5AW2HE7AeBFPRqZfXqrDkMeTaiYVHKqLew4JgCvCjcMEWTGg8cydfDxEuK",
  "key19": "ABAGn6CB1bXK8SsNQ5o3J9drQJm7KUbDEPo8VQFF6QxkYew5cPKUSeXw5N8G6f7eD1NFg2XhGybvTKrfUkfVChG",
  "key20": "2c8Wm7WGHucwrrCASPsVM7CbPyQj7Y8i9wrKYJT9AoKuDghpMpYKkprCrXN22i7mgYHFVwYPgbsB1tWHeijC7tBS",
  "key21": "2JJn9AZNHbobF7BewQR1RBZzbTqeJiqRpbFL9KLwCGyBp2KFwJTkLyAfpvcFrSM5x631ca2eRbfDMKotJeKDcaPq",
  "key22": "4LCtesTLSmouHtdr7RXGXJq6cKv4FbAZj5SUxesWj62FxpYniVH9F51e273nFGmouXVqme5PaLn1osuAFkzMC1Nd",
  "key23": "3r5AzCMCSA18G1j2JSzsp8oGEKrwFT9bpQ9vELsoBhMjx7QXfoHDid6wcxxckUhLEmh3GaBczAtzX4SHH77Jvb33",
  "key24": "59h15g4NkqXQNu77tjKaVRdSNbTofzgNdh5Rrbwb5WzDvTfdQpcmWmB94EDWPQLMmHb8VpdCna8fjvM8quFyDxsr",
  "key25": "MhYrT1oUp94eE9nLpa2FCgXfqjfrmnnxgmA4BcqogTgWqDtdnVXePtMmKGKWGeMxUp2cm6YktUYaXEy1u4hvHmV",
  "key26": "V2L34NUuFKaBDMLujb46RM6JYKrVv3A4Ha9LCCnCZdi3d2bqZkFnbQtiw6zwpqCcW8y79JFkxvEiGWnQui6YUw3",
  "key27": "8BZnqirMNc6Jsuv5b3GbkXaafsQXjVZXEAYmXzVb7vst2HssDu4ay4MyUSyrgBGufEYkHmB4ua6qHqJHhxqMDFp",
  "key28": "3S8E4wwLNmC1sAEQ4UFsu6fYCeUb7TPeE683MZ6SuFMoKSiCX6EQGXpHY1mS2pP33UJ2HVZDXfrwtyojSQAQt2bp",
  "key29": "2XivzGR8A3ThgJJ1FGPmDat3FvaGYfU7iDDuK7Pnkrb5Z1cMC214Y1PKxVNXwR4nHoBdjJStKjJV7vTceyNcmjtD"
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
