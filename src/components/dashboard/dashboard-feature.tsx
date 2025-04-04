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
    "ir165gxkmCAtixazreLnJBwALa1J7M5A2nnc76EcTAdHUYFeCaa6Eys8oTpinD5oiR6N2cgcVoX2hqGrDFzwrW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTYU1BrTsrNy2firkVLniie1Q8nt7c9UtgUMZsFyAUeCvrLhhGAhizu7FJPKxQCyfShp9LSstENTVpu7TZv4wbQ",
  "key1": "2DdUPhEoM35g4mWSMK7sQRy9zs4mvPuKniHFrt2ZfDBBHfdN2dpuv4Z49LRCtrjaW6ER6u74UwzxVzbQZebhXHr3",
  "key2": "1GsYW8aMg5kKpYCpxFrbqDGwZcR6chUTdayrSmNhUWUxRA3C4RAdougwWKquZ5CQbbZjVEnUnWgpyQG4iP87c29",
  "key3": "5idSxoJ9r6rSwoHAiUSQAh6PbMfV415Pi5XdYhmFNa1VCB1JFv5fHzAC7RzFdYPT6YP4kr1Z5FXPLJ8r9h7ie9bE",
  "key4": "2Q3Kc8Q9jvsiwqekW84FNMtWqAjwb34X3R2wdCDLk43SsLJXXbd7ateyRK42dzMPB1nHyDUkw7UKiaVJKoCxw8iY",
  "key5": "3KCHWdLoCNkKzcV7kgHy52rvbAZzn95yvcNnVLkp25X9S1577Y6X6DBJa5h76ka6r7XCpEbVNuDnui7xCKCDXvrL",
  "key6": "2cfTLGx65jrxbPCye2ZYoQPqH25zCZKfYASKoEQwzPYgcJMcoXyuSjQSHmkNJapvXKz53ppNGgUAp6XKHc6CHzE3",
  "key7": "4cmsDPykFCLYnm5ZyXc6Efsn4mv5z4gL8uoCkhrLXFejFi1oaZNUCg8RvzvMBzc5tvaNNiKoDUMzNfzgdjkAJr3y",
  "key8": "33dkDyBDqE8fJqSkt9P4PtonP4a9ZLs6o4BFD7baWHtpTSg8hMK7hZbCgvm9TUYZwzRqxx7RXXp6uoREDhE1iKHM",
  "key9": "xYSWZWAPDhFNYQk8Wkz3Mt4rvR7kxgZaN8LC6hnDzw9rUfjZaecbPzeZGFBYfFmojBbvD94aq3eQivrMyjnyntV",
  "key10": "5sLowN17DF3Gof5ttzjR99HY4oJ62oKAoqYPc2zauPRDDSaskdVWP1JmGhBjNpxxSkm7GDLrrsX3ZZUco4E78Zgq",
  "key11": "2T2QvxZEULyL42sfxwJgxLZgd2BBck2LswAPHXHHpAW9YsUtU7a2Codt8XPoweHYFWoxD7a3Rs74tQBc4iA1NZWr",
  "key12": "3Dv2fduTkRADWfFEKVGbrCPwtwudUoHdEQUGh3nbPEV6j5p4o4RLT9XsaTQFHgXipTwKwQ8N7ucy5rRvHJfEA4FF",
  "key13": "4gQpjNBgEyrimhSd2jRg9B1hmy7BreHGxjpsK9MJTxTMBcZwzjbXgPTBUQJ74hpiTGGMcht8nLgLyXJvZNBYnk1w",
  "key14": "2jpage4U7Ds7ixNUV3x5UdjLz3rvC5kEsGcTxTH3D3XYvvd5qpwXnypukHn8eyTpP1Sv5wgbz5MaEqx8arw5tcEA",
  "key15": "5qjhwGFj2J2uvKYGiwT6Eobk3eLNHHPLTga52KKfUMDxBAg2mcZ57WYx2SUX97wVyU6Y33gEQ6CvdjuApdDu8jpf",
  "key16": "3cKMc8chEhdfVUYxyxowxfxov4PDnSwo3v2empRyfYbzVvHLgDvfqZ2bSQrYFei4mn41Y5MDrgTpq7233dWMTuvY",
  "key17": "5csRnX45xGEd8EU8hypGSXnsjmFNWyagBWnEKfAq9vnkNiT27nQuyZBW6EQYh8dfWuKTDLey3enXn8JCtcDw3amv",
  "key18": "xf7R7oHdGZ22TYoQVajLC3KHqvkaLpiUrZmbzBaSYCu6vkpgHMSjCLGdrDqpFv1pG3ji5JjZTSwgWPnahbPrEGS",
  "key19": "3fK6E5ZV4oiLyy5WMVmgt1c68d9DYrDAJGMQ3r6taS2AL3rRdswheyVbUB8Vbr27jtKbss4RhAniJUvo59ui5vUi",
  "key20": "5FaXBpRV1CVuWE7DNFMfaLXpVqcXaJZaYyuzShxzeo2cPnDbwxuTGLUJNtqMaFeQccAPiFtyaSGeMYvn32oPN9av",
  "key21": "5mCHVnE4W4Q5Brqv1ekWhRGTieE7Cm34hA9JtwLKgGvpCACAsbAYCuhLs91sPY1U7z48nC4asgrXCD7KgYZ9nv9R",
  "key22": "3HjZF6oUma1cLutQia3DzEuXdXXDDUr6Xsw2VbRqBf4ALodiGybRXBCjQqoJ7n2jz8C5tmuLo2oa1aAcKAWhZi7N",
  "key23": "2jdcXT1GGddv73m2RxgVHMXtJFJXkUg7MdFffGfrRCz5MR4ZGQPFXmicwAaBcrDJ5oxShamY51C2pm9RVr5YC3Zg",
  "key24": "3BbKj5niLurzp1493dsYzgR2gFjKQDH5AvpkHTHiWGRDFzGmVBFifAXUeo5WqzdReCmyAwYKnT3ZLydvrCaF2eHV"
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
