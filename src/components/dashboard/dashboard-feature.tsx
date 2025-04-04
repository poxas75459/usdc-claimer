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
    "5qhRg9miikPXZfNvg8j1se5xK5gFYfGGgCYqoUVtx8zruGo6UNLdSzjAFCx9c7ZmRfbRHjtGjKincpToo2PfwJU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q45Xs1CEGPFGCtWNdkV8uPsSK3U3M52NqkS6wLLrj3iWZMa9uMX6zzrYD4UgFbepVqYQJ3fy8zbaHMGDZVXy3tk",
  "key1": "33nTDcaNtMNGiLq1rqRLZjGx7CJtrXHsktNqVnzxtNCFDdPcjENFr8N3ycHFZ9qG8tYayeX3gmXth76bgwjt8vYw",
  "key2": "4ZXkgsm5RFKMHyb1Bd7Xb6KrhDhn3xg4Q4YqurMdQYdaiMHhfixtJAeaoL2YNgRHwjJHLSAnkJzHVij3cxWNXcHx",
  "key3": "5fV9hASmH68iCmbcQdBWN7z6jNFJ7NnctgWjaaPHzWNwde78J2KBt3UqnUjaLpMU81QESdzjZufEMYKkrbE6wyeM",
  "key4": "3Uhvfmok7pYSwp6c5Js1iv4VaNhnJG3Ct3Cd2wjU9zsE4JrCa1Bag7nvbaUHqCpPpPehbpnNvd1T1ceNXpi2Cqys",
  "key5": "2xsT1AQtLVGJqBwxp4xhA2N76jXsDtwoYYM39Wd5NBKtArHMLr8vTXFkVMeVAUevbdnkUSeycVVb1o81bsZRfZGG",
  "key6": "4DHMSVF5RBvH4Duo2Tq3BxMC5JZczmtee5g4GeTaueg4U36rYpFjQesHxRRL6qQsXdYfhBEQ69CuTYMk34Y4sPBM",
  "key7": "2UDK9ZGraVs1y34iH6m2r8yvvjBBMLQY8fpaBhdQBWokxRunWdi3PxiysHeWZrLB3n5X2Zx1eGAh9fHo6Mmd92Cy",
  "key8": "5Z4iBEwWVZxyb9MYNpQnEfDfgDvrhxptdRGM5NNGw3N2R8CUR4caTERN2XkzmLgkFyPRHJzi83D3peT7MXcQVBP8",
  "key9": "4kEA84uFzJinHACCYhNahnS4vy49LneXwRecAXyhCXeaqBDFMGWZSbNaXqkcYf2vgyxBmWMm3gGQyhZwV1VkdLWv",
  "key10": "3w7nzE2g3oy2sJLr5h7gKq24WXJTKbUPxDbKXDTLvmMnoaSQybUn7Vsz49HfrakjYYTmPrSnVNLTGJMWH6TKyEV",
  "key11": "3nourgm3PqcxTefGZ6eKP6qJvb1EB7eJXKA6i7J5B9uuuwhKGS7jhd1EHkJXWCMibJ1sT5U64ZjipbCGNiSqbFsL",
  "key12": "5JDLWYHpPxNULjumpqvjNzBhATRVj41brAwG79XakfDXt3WoaysvtNsneivgNfVyXBYDgFU2jVG7jwFksuHih1ZF",
  "key13": "4GRooDf4t6is3hZswUwcCJ6C2uLgTeFLX78ReNw79qkcAzQyiimTpBA8iR6HeMRk6y6fjKCXFBZnLRiPwAW9qMLs",
  "key14": "5TR6Su75xDCcZGE8xeUjrHex5scAGueZbnusfYvkHjaM3eMBETAtG9HDHsR1JbbKiK49oCgAZFhZwfc67cY2kbME",
  "key15": "2eLhP2Ps8UsB4xXyBZW9s7KQesViCZHA6NLtKu2Q7jKadYioKzy1BgZHmFw8LtniruBTGxaxXBZqVym9Ty6KZANH",
  "key16": "4uvLg47E7YKt21Yv5oqNLLmH6QekcSRuFEhqvEKhcWCqqkF77Zim5bRKUD9KViCSJ83FQuaBzwsCj7EDL387aziG",
  "key17": "33e2xMsbUnbyuVTGPZgevmH8gXGSeVSTZs9JqgsxK8RBhomP3pRXCB6f7h9a9KCHxLpwDqatwLuy7LwZbrfw2459",
  "key18": "2rNhViTFXi55NshJqFvgQy3zD9SrWqrXXhpHJYr28qGVfhhVzkqe84tAEMZFnedyF7AoH22FMfgmxvU91ypJxsmr",
  "key19": "2NiAUgjdWauM7DbjkK4jxQFmSZYDvPwE5PSUNv6Tg3DyFP8rAfNiUnoLyskcka5UyqnToUSCjCQkeAPBDyWgsYx7",
  "key20": "3UYojSwQyVDMHGsKECtUGybjaDxXHe3sS1oUgA6ePeh4cPEdBBTZFmeM4fBkKXUeRjEeL9Lsx8aymZd2qxaJ631G",
  "key21": "5XZYq4TmUECAdKrTLR2gzYVeJdQCAQktueeGPfLiyrjRRYt5ovSv6GxzHjH3UCyQ5Q8eC3rqDhiohhiKbK4fp8cg",
  "key22": "noSscnBL1Z3t2Dwt8MkYAs7aMyRabXFWRnBBf3uQtyh2QMupLfKUtuJo5ygvgE6YywQch7z1giY5nRe6WijRZKw",
  "key23": "2Yg71fU7yCJHhMBkz36EbnBjpLCskSGvi8rHLE8erGSGjWdd9tzrGw7DWzqo7KUZWFg5V2kxiaEJFFEP37QPbfMm",
  "key24": "28b3ihtfAiTToi9B92yuDTvyXaBqQrcmAf6DoMRwbgf9Xdon4iFaupKP9woxXsSkNS8ifqk6xpAkZCuWBefHrrht",
  "key25": "dmfsc3ErJPYrFWmxyVAfQbXK3hjj5TciAXfm1UzcdHmEL98SjwaJdabQvY8W1j64umgPe1cSbRMs7mBS1wobKCP",
  "key26": "2VAVeGhZADyqaSLRKonYPE2AtZrxq4X4T3THQs3kNPGwBmpMSfVCkgFaVFb6pgyrP7e4PiwipHhoFzqFBcGnvXEj",
  "key27": "2dGtX8hiM91BztpSEm6wkNanXXfdRmk9ytGyvBtMuhsBhyBdr9R6EvRD29zux55qcc32omcLVib5NosWpUMXTBEN",
  "key28": "66pJYpZEsBseA6QFnfB8PM5X8LPePGCF3kdKY18PJKQADA6kYKwaG9ohuiNtdiFK44Q55vywpmjaKdPs2JABq8ko",
  "key29": "5pML6z9U3mP1g9eAp95zjcBmpFemK33BtuszQbVnxbMtLsa6ZvhDvHdAT3ezYzGYcHkcxvMVVajduNnDpFdChYNi"
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
