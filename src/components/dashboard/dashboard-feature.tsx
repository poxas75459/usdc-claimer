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
    "67rTgF3Lufq1WEmiLbzrcGyYPVt1V2fjA1qohdosoC4B5eXHoa19JJnVTPqG9Ns6V8DffdHqbUcfrVaxXBbEs9Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yTT5igSYdVwMMbtFLyntpbXeaPDkziyDXoU2z3X48FnFJMdcLeDHVGa8Uth3BzZX265JKFCD8iBuG5PdREAUr3",
  "key1": "4SVRR1j6AwVx5fGh9jtawz7kfhhVYVRQ75wsqPzFvdVwNgCiASc6VxBXpgz6K7HmADAaFT6XUZcEN9SnuNWPdAqE",
  "key2": "T9fStdGGmvxQBiF1bjzYGdXHVcs3PHX9qZzdDHpKhbhXpnhEc4tek9jywNdR9cgTiQNhZwE81cUtuuQwVaujfBF",
  "key3": "5SzrahnPDAVFNeLu5agbSSHCAP3arBRN1vRa2ftADQrP8AGz16Ke3QcXEikBgaq2ZziwbftBeiJGdkXD782H5aK9",
  "key4": "4MsamDAhUXGFp7XFf4LDCpMwQuqifDyFUC79Xuh3xgqAUhJoEdscNmv7ug3Y6kqkq8zKu92ECwrqiiAGHoJyzJMC",
  "key5": "5GPrw94jJv8HN1d7YyLtwjSy8Sspv4Njvs71fHcZB4wzAqM5NCnorH6FJWo4pDrSGh8UbbeHAPVYQ1wuMog6J3He",
  "key6": "va1xt2cNSR6Q53bM5pVYgKqxjL5dBsxNwfcUJUFGrz1szTTYuQs9XXeFwtsk3nxLYiYB3YcngwB6e4EYnHLgmJj",
  "key7": "3n5GarGh7qFNfhrv9e2NpYdpcCXL4MWDGS9xeBjd5K2Q6ufznMg3u2dT7DW4qNgLurRMQ5xsmNwSME2rNbqf7Ne6",
  "key8": "NSSg283nNZvY9hZ27J6eNj9bRWo1LU4oABHL5BRcKE4J9vPq3wnTspmx422qkaWqRnyNht88sML4mSsnq9bYBr4",
  "key9": "4xyg1B6UbdMMxV7H1iGdNqVa8ZSERKWRjroWWQpHmERe1jLJtHfBjieV7EMf5xYARG4RVKCxjjLJRZNF1icSWdbw",
  "key10": "NZGZzosydBNby1rDB37Mj4ZufgKw8hJuAc26FhKwRSm6rtXgC3hVhnyQ28HcPBHuxZymDzU1ENhrrJFKd11WaPx",
  "key11": "4ig66LM4FxEKpg3JxyJvT86Usc4rcoTvTUz49AHyQuqc4VAnzvXyU2Y8QmxG52ajRMsdhTn724JfFjh3mQ8MWQkK",
  "key12": "4s7GmNJeuqqycikdJxSVw7FV2ijREM4S5A1zB3MHWkvh8p1zXGWdox8AeM6Xm76CXLDPA9c8JKYEpJpZ6YfcxZiC",
  "key13": "574gYBoCqN6AvAN8Xme7g7nCe7wy76mBLqo5w21gvACzMMosL9Qafui1LgXXaxyYwNxthVsrvADSvxVu2vBumvWv",
  "key14": "4Mkz5ECAgQegHDTMm7QyYBT9ec1b8ETUXENB12L7ksMfbY5EMUE64SvhsZyG7h9ufsW9TofUyV3Fx22uKY7j1zdL",
  "key15": "3D3kZMqVmEqdrbfwtDGbaceUyuWXHBF65YdWUSQ9JZeEHJxuMHQhbTVGM41qSQM3XieHXQfrG11bRLbj5crN9y21",
  "key16": "3oBuFmBcwaJskwFbHpfn45Ww1EZAV5g6X2JhZ5taCZtwxM9n2FaBATdwrT2TNb4WZPwEYxnnZycFjeqV8iv2Shid",
  "key17": "23uZN1Zsaz7iKi215DqnbnCDLKWRCY1vZEgA5GKNqoGhAYS9G5SSEurRWXdAdFu9NdQM5gMt7mNdb5ugXrnVsHqx",
  "key18": "5Dk1JU2VbnLkVdpX8PDg9wpmFiSC489LdMEwZP8QhR8A9qvFyKdgb3Lz3HwNzvQCJ55vBtZjVma5M65Htsvsozi1",
  "key19": "2xN7fEH5TumJn2QfM9QBpp3w941g1Fmy5pQ5xe9m3WGZKnrL99PQgwUH9CUZncaSadj2bWMN5ZS4EW155B2vX64T",
  "key20": "3CWZmwZuoY8pFHR797eGvieQRgb3CRbVsN2XNaXE36tLVjBDhUbntfTaU9gzDccxMm9AyCVpnKKK6C39SvSduCJB",
  "key21": "2bKNFtPpB3wCazz4fGAxvY5XEbCi6ieQqxwyVUSKfX21wN7NfbGiowrwvtZRvzMSKVUt9GHhsizT27JQfyVSP2Mc",
  "key22": "si2vYz2qUQztTJopcc1F3ncJXybKYVvZUQ251PYBAXSRgwJXQqwS2fYvaQzXRnW194GHkyvCzUuMw9M2yZ1domD",
  "key23": "4gh6VZRq9ttgAXZ2TYAnM6dEyW33nJ5bxnkhaWYG3bKkBJi6V6PgYcWGTjThtSBXgSV5rAQECTFEjWMsAfghyMKq",
  "key24": "4YNnKVsSMGDsodqKx744zL1T7G2G7zVjzddGGmkG4UZKxFkFtmnFEYTkgNWeS4UJ7L7C7KSvHy72QUuytLi6KGeE",
  "key25": "3tQGp6PjwwHPDyiy5ntrKdwVnXZbq3Gz25JUCe1Myxu6Zd8BPcvoAnEyHAaDRD1XMShA6PBCC1WT1xAtAbmWc57t",
  "key26": "QevnnBzrmXwQwAahYFGndvsaZ1CxJR7xGcXWwS2ak4i6siLNaZtDxjPcSztVyfxsb624k9ziMP66zDzNgyPcL5g",
  "key27": "54p4nogZVD7WbEQNmLtq3E3uJgEkBBaSZtQvwUcaYKJb1JtdMthQDdn1szuctz95bScxUn1MHM4Lp88aqFfyfCy7",
  "key28": "5Cp8fmGzftYB9MCjSCxDrSNQoz39ZyKk3av8RGp1UzcqChzGuVyHiVEULiSfrpRBWH7pZW6kLgP59iENNG4nVgJm"
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
