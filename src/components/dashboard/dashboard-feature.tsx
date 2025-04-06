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
    "2tRa2Rpa3X6skWr1ybu8hyNUGoef1xML9SM8zFm5J8X22oTSZUnnzbzhGFNHegRyCEgWXFyXwVQkBQAKK13aWWdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jiap6a7fijsNcbNRTTYhPkanDhjZPTnHhSuCTYKv2aUFysS8EXrh9CUHfgXvtJWQJHqAgE14c3Q14yySyNLmf57",
  "key1": "pEaZPNFHpHBtv4BHvcNJ5Gk2XikCR4vQLnvYFfcuKT6dahCJvqPwPj7rmGfv91P7nGnDmgn3uPsYLGyojXmZcjy",
  "key2": "4MKGZkxN81YJg3EUmrKrnTGCickW8ds2wqzsaivb47N2Q1cYLmsGngUWiHUmgdEoNioQfmSvRzSPDPYyttU6Cjci",
  "key3": "59jG7so4w8qXbLGypjKa6DWmYxQhr61qfMBtCtPnphbnppH1WzRz8ZTCEa3grrVphnnqrQ62VQEjxShXqPTBGfjK",
  "key4": "283B3wLuczS9pqDPBv1X2DYz2npYY14iRXkyuXS8NcUTCF7756cJevbgWuhcCZjVsUGwkRGdf73LPvsu4Pvw4KbV",
  "key5": "Eip8Lwhi9dHwxeWkPfB5qenbYjWQRrB12Uz8L2aVkqYZ8NgKYZn9RHoHsHgtu5BedPEqE6uH7C68bqrGdeBXNoX",
  "key6": "4tvCLtTGCLSNEfjojJzZCTead5MSQururi21svd6s4988o9JzUx3ozvUtTe57TyBSBSDTnzevtDu99Yt5XEmMesr",
  "key7": "5jCJTyi1f3Rpf5N7ztLkLDZkjRmsCK5Vv9F7MRE5ULuwDkqMG8CvUhofCCmjji6xpE93pkQVmjU6C6bCuoQJw4kz",
  "key8": "2RQgLeZSWdfW7HQnZaw2cSNMQhE4E2GXCrYMBUGaoXu1ztzsPsZg4vTDWCH2d2yzS6sYVhjwKVMRsXhFm7RQmztq",
  "key9": "YdKKNQNbupsDVemnuaMf1vKZGgtdHFsbYuRsYXVv4vTnBJE7q5hHhmM99nfXzQ9C7xKratjPqojGCzT1huwx3qi",
  "key10": "2YdTyvYNt7wFumSoskGktvf62vm37uFeVrDTLBLkdynbQYznT43PkmYWkNRcxBArRhL3m67AVVL2ZjD35dy5vKAw",
  "key11": "4hQD35MDErduyqbDP5u7M2mJstbB6sFGo7WDPCbQxBFgjhtFrhtropKeXE37PPRvDbPqNZfFHYbShu7dKCbGybvb",
  "key12": "52yJe518UBRYYjanHP9ZwKsrbAVR4iQZqhtwujR7EyykaaEm6ib1BmSdyYBEQxtUTeG6oCz5pe7YiQXz17f4JAm6",
  "key13": "2tMbRuuDzyPW8ji6fQwQgidUcUxNZ2ZuwSUaH8UqdFSqHaBtnxmA7imoyJgzEGsvGpzXJtgSrRbrKZYyHQtyWmDv",
  "key14": "3VFwCKrYjtqQutsevQWAgiAyrcAV3KsvrQiA3HssqqcRP5CVaZgzZ5DJrpAm83okqMbMkbMBSGxAcjq4VHh6xuU1",
  "key15": "2Uvq1TGoZtXXkfVgpaCR1KCPB11urMeLn4RuCk6zJrT2h48PLr24cAqYfbWnJqQEq7u4iZqShgBQ1rtcPmC1G4KE",
  "key16": "2cbwpa2EJBLEQGoa5soLTRvQLr8PRtvdJZbrZ9v7JjDFLYD3vhHN8EaJ6HUoA7nEpbau6D3UN44Ha4hq6wE1jq6j",
  "key17": "iDBt3EGMCafVCu7Nm2ZgGoE4utAq4wB3wJriNDhZ39QyDUYPwiGLKmDRvBQzTZo4kwJSpTiYER5GRyCfCM3SUSs",
  "key18": "4TfuHRXTz5wgGoeVEVE3Nf9MtHXiLQknw1aGhmQ1GwBz8czMVWTmsw8DHuus4mnTp62XDLfJMeKmnVsGyVgxU6yR",
  "key19": "2GVogTZAt8ByXHuyn431FtHwKk1qSVPpjT8QyGfVjmBB5K42DcL5cbYPxD5BP8jWLejQxQ6xv8CN2XbFUL6xp4hB",
  "key20": "43K2JoPxBbEg1hcQQ9ioTraxY9k3CSvUHKEFy5SH9KhE6Tj6nxP142Lek5nTyBzdp7pe3QfuGoxGCX94FUrmoCkq",
  "key21": "4654RfDADpZEUa5oBJMkMmGGPWncip9HniyGJF3uJpu2XJFtbGstrDMMM4dQUk4pRKR67RPzumdW9BVpkW7MzYTL",
  "key22": "4QoygPLwQBK3pfM6y17atvVypBtibiduhbX928MwYKzQxRHfkkzKwrTDnDKZtgxMD5RJxG22Xg4DGRn1USANBf1S",
  "key23": "5H59HnU8T35xPYt4XqfN4BMxeHywN1A4kGyQXpV9HcXVfFYvT1RmvuBRGeBLbdhf3FBRWrqaeWnVcU3bNLMzLbfR",
  "key24": "5rtX4B3dm15PqXvUXypCTYLw71HqRK3a23xv5sQvq4WkkPffLFF3P1gofoqK3G8QJesErBtNZhYW3GtZCTCmBvmc",
  "key25": "3mQiV7rYGyAkkyywxcJXV14zYEA5irXeCtVN8RuL6tBiwb8jnQU7sfqccEHBvhmGa5ggUyEQX1SeqBqrLSYDBWng",
  "key26": "4AuEns3MmYtAdxno8edHM6p7z7gPUgUSn3MZotipvSdASRayuRPQKp9tUReYoGy9ixPCk8bhQPdS1ExhyKWmreVW",
  "key27": "4DgoHxgNgazt7dbPrTNmUHFvwbjG1YagmWSydJSMdVa2V8idGN6kWHcT5PLRra5yXu4FceUJAE7hMHVuYRcrSdgg",
  "key28": "4GH6YFqcTanF4rQ1U4P4ZqkoJ8JRTDV5deZs8Ra9Vyy25SUQXLu1aYLLSvjzBFD7f2KBh9oEBRjt38xjaJeqkmQj",
  "key29": "2SM2Li9n8LsYuE9yEazZ5ijoT5J21SpDRbcZCZTCDQ166DGbNX4aFGM8aiBQ8QdzQA9vyaxHjsz5Hc7ixKdZWKTV"
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
