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
    "4vzYB6226BNBz33fNTiFMYZnj8YPtFcExTRbZHgiafKuVDttYzbia7EB7Qi1J7bgkH72Z4yQShFqQyaEqKnGyspa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21asJeZNruR1hzTsrJXsZpt8Th4Jfui34xKdmhJfSe6JkXvmn4kcp66994r8ydaXZwhqDycfVaYVnMirzVZwow4v",
  "key1": "4u8ydmd2cuEyNT2tQvYa84QnSF5S9SfQbhTWPV9kdYPvkGaXeBpgDRyKGWZQNAvG7z9Gk58tXtvAVhVd1tNs4bnE",
  "key2": "3oU6uN3irNehJKxMUSC3erTyvTPLHi92ziNbqVG3r7iaxrs8gvLQEXiQy4ucu5cUJWE3KS64CzKUXgdTC8ddiivt",
  "key3": "ViDdT8NvvCDNPzY9Y9o53gwGbxhTbeR3kV3VAbiv4Ajj27As4sD4NrcXPyevy2vyi7UGidYJu2E6Jpm21hkoQSk",
  "key4": "4hgES9Udsch6nAajosZYAEdQtrWTsk8PGvL5ukKzHg24rAMqHWEM3GvZa1bTbwrqak9ci7RbdDhroSeFvHzSHkRs",
  "key5": "5i4htGcsmEYtnya4BA72yiQwxkiFnMqVaqTgaAqaJFTnLPBTnRLRkvLD53gNiWrF7ZuYa6SqdPxvu3tmAY2TaJA8",
  "key6": "BXyq6wyPaEt7rbbAWNGmPNqU9bkNb4mdW7rwx2cBW9GUG61Sb3ZHB2Au4swo3MbsgjNFfZ7vh9MoYixvbZwN5z1",
  "key7": "4uessajeaQwe3BTkjZicMba72Me2ehb1aBJxFEobBrAbNq26ZmhbQeM4ZCqARr4j75HsRkc7tTtchNujHWFsRJBj",
  "key8": "5PMBon2C8rcFuoLVxnPEEoMo6Ph7VFQbPgVK4P6yo5SStNFx6LYwfFMuzqXype6hYSzXHWwnZ8bRMFYsSC5V2Ndw",
  "key9": "3LNBfik8P6e42qoRJdbyB7uFrQrN6B7wamcYuT4HWv9NHJbRGoG33ABk5cYoqQkQPCqNyu2pcw5a9H9RniLBuZKK",
  "key10": "3vuMqVCDzyySAdSWp3RJspwJdDqxF2mUAYN7f9X8MXU4834nkNKbQbvEnmqQ4DJgmwX5KfWZ8ioRyNrjMG7U4BVo",
  "key11": "gnkjPvuA2Xa1aigoVra2xf3bZSNtHhzsEtyFDqRA15U492HuFWskwAGcZZEVSKG3gmPbFTocD4awq4bZdDuA7Bj",
  "key12": "2CLEDL4LCNNbhkRyZZwd62WKsRaN3oeNq92F7iXTXrmbq6bm7NhSKn9fuZCD7RfQqzq8P6c5QrkoZuAinPqR19uy",
  "key13": "33hg3K7MhU9DR75bQQcFzksm86vNi9nGHFuM7LLDB3KqqGBjyDjkHcdTspBRNemLf1S1W2rs3uizf1RycpkThtpS",
  "key14": "4gGqtBoT45uF7GYs1Hix1kCfDN3SEoYDfHDEu4aA3wrqL3Lc25kxLhUdzpekMXEEF1xACCnm25RbUUTsLhBjcCUy",
  "key15": "3PW8NMp5kBH1vsB5mdpMTgrLKT411fn4bvtdM2HUzNEeAacRehRMQRAQdWoBcbXmiKDZdfW7wnLgWFDy6aftyigv",
  "key16": "wVss4MYbAGpFqsWP3Q8eLmBfgfm3viXYUghZhwGc5Mfk1GGFHQphqtLVAuckgRNHMN4R7tKCLmM9HyveU5GM1SU",
  "key17": "28FGu1PMEN1TK4jFREHpu9JEJHRZet6fjBPjpCbgpZZNAHcoBNg7dA8dZ1wjksp83hFPwkxdrFDAovXTfB9y8WbX",
  "key18": "3a5a5BRQJFgqUHLLkM2pd9nRPhxKRQdzt6kpyViQ5vvSvMC4DWQsvKEXEumwtFxsh5pijNWpYhxS7TxcjYD4BTty",
  "key19": "61RhJiSz51m1LnrGjH3y8JMMsS2CnRph8j2b8XbWGv6ch8VkobwHgJD2PaPH7Mv1Z9Yt2WBLBXCdw7whRj9aqh5W",
  "key20": "MRgTNFecGvT5gRxCgQmUkrdXB1pJAJrFRqQqy29dwgf26CAGzySJJZR9jhGJJz1fuq6hzWE8fxznK7HjebkWXCT",
  "key21": "adzSjo3RakikNSjPNNnr5QX44UYYceQdSiQi1FVfKtYR8ZhghjcAYVgqdfribFys1DEbw8qdmL82cn5o4mwqTTw",
  "key22": "LY92EmUe47wFHX68MNAN4VoBVRbYCepoLk5ESe9ddksY43CXVSrhu2Y3FXQMAuXBpcp1yW7QeveJtAKFAmiJGxz",
  "key23": "2b5asYsWKtmAQmJr4HDZyUKG1EfrxyXCbzn85Q87RdJU5DENJVjpoUsdJ53W16cNJ7jAHrRgbnPTKHSecxT3BQtr",
  "key24": "BegcDtW3YcThxdEKQwqMT1k4KgUG9bWnaLtdsnNYn95zHQFPunpH19EcfoVu3y4cze6UuQZ3aFdYjHV3KGEUTmy",
  "key25": "2QNfFBWsqHCS1q8kLPjP3r8zcHL2Xc4gVXWzsKqfcLSY81zYKvFZkRim4t1mFz8rJhiW6CeEzQAC1gdtrmiYUNLj",
  "key26": "2qJsJv3TrVFgxsJZvRYHKcd8ssdiKJThdUjLBwMQQk4QKzTNPGJVrSmkku4X33THd1vvYqQYqcfKH7CA1C4Sqza3",
  "key27": "4GsFBfhuoHCTinLLrRBZJUCgeUuBZRY3RfAoiTFuKdK67SiQQXcuUMuLNgSEZE1m9mpAzGfj32awxs4jFXEjvWqS",
  "key28": "42ERERwrTnPACDb1u3UQCiirAVGqX9XSq6TdKbjkjwMUMjeRfTZ6LBjzxGf4E1XVzNpVmSUCfmuKizDcMfnN5Hdr",
  "key29": "4o5fVQd92rfj82BofQmQztrFn5BDdvnkkGkoY7k9Qxc5RvExTxckiBw3V45CERy5Vy3ZcEro18gZiCKLwahgL99W",
  "key30": "5xgyyrwSjBUKBBE9BM4WFh7KQ6Eu6s1KsTsSbZ8TbB4WzochkZzBRYQaoMEX63Jq682MWrk8wV75gZdLdiXYecx9",
  "key31": "5TVLQFdVoy7g1EaS5AYZLcUgE9LuVSjS16HNB12RwGyTi5sfFuo5ETGfK12XcHR53NVUARD5XKG2Zo1fYchZAjo",
  "key32": "pXJ3TdT8VnhapWCiinU6BUKpNnQPnmtz783hosYFqNrut4eKSSh6NNh1cGojAxTfv7TyjtvBDcp1HckvfKsKc2V",
  "key33": "2ujTWCWVefkMGN8hsFnUMQeYkJ8d1fN9Nom7Ruqex2Fa28QnHDyNejeNnqfwpkCaUAWVWSnFWnxfNZW5XxYYpyHT",
  "key34": "51z4foESKopvWHspoqcvinXgAeCVyZBbKPABNuZi4fq2preVRVB9AkvEwCHj6u1ZrBQoyfZ7As6uP7aDqLuhgK21",
  "key35": "4x5pMnSvYmeT7E8gVQfSPcrZiF93idJP2D5vzVeLZbf3TEpKAoG7n74znGYXd9rfJBUUPaA61Ud8eTHBL8uwj9xj",
  "key36": "3ZtQemsVLSq5pDfqrEdr5xxWCtFZ1gaf2iFcNNNDXVB6njrYqMCiiNWmu3dTecm7xGGMQ4AtLXJ8rwY1VtDJWWQc"
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
