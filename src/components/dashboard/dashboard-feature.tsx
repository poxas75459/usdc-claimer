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
    "63x7PjxXZa6gYxQU8x6wSioUBjvRnNoUvWB1HXBzozUt54kaZBHo5PBiJmB8jEUZR26mjhtqattVHV9MMxbs68fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fj1EBXfmzbSUqYjmVtKLnoV1XdPwFEZJE8fvBw1AU6CwyWDeu6APFVKyMrUapRzihdjd1CjiyXeFsvjF2QsXJH3",
  "key1": "46qVjPfEc2PvrYCS87a7MpGw67BzvvTwUucCkLoAx9PVPFsP3ddXCjLEgBvACVrjinsWMet7QYX9FqvFqnmcUQYX",
  "key2": "5UM3ycx5f3KyRE3PN7YxMsStrGL6YFsHNEEBGWjX5pyAJUd52nERtEukQEZLNyXrNN6qfTc56HWwEP3WNr53Pzit",
  "key3": "3zAtMkeBKcwo2u9q59Sv7Bmbr3AN1ML9dtyzNUwmLr1W6AtUqpzm8RwLtNpWHGQQngR9uFTkLmAq84KwLBVvAixN",
  "key4": "41t9RwCkZzmXUtU8oLHKYYx55KoPNdDK4sDeWfVZBX5GBhTj6RxMncruBQMrG19S69uzmFJ7wriN3uBt9jLZoFLT",
  "key5": "3C2EnTGt8PxxVj67duBhbZ29HmencXkoUaZkhw69g57chxr6bThj62qwsPrfrSH7CAeKW58SbpSdhTZmbUPY1zxS",
  "key6": "3WSHe2L75DjFCtsCet3bWaGsc4wpuNnQBdaYo8T4AU9UgPHzXsvNtQwE7zWBfHwQ6M8YzgsynSKKWqwwYQ69CDw3",
  "key7": "228zSyndSzTumM4MV6Y5mnCL4jvduvDXhzTn48WA4QVH1A1WJZW3Y1rfc4PVhtZNHvM3L9UUGQnTdRTa1caeYYjR",
  "key8": "2JuqCUQg3beT2RDikX5FCwRfeHjoZ2KqSrX3CXarBa5YFQKpEgMnQqWhuftbmim2r7UFSvvFnH8wQT53wZB9VMX8",
  "key9": "46rTYScrtorrynDY7JQ8KBVBw77TsAW436Qfe2zKnWNjaAGwAahg2rqnZiXQbj5r4zbv9MUN28gKKR6XYz2x5Qf8",
  "key10": "3a8ggcxt8XRjSum9NDTRaBpoipHG4AJsGBkJRtrzmkpLduvHR9dVMR4DBkJGxeUzeCGpzryPyt5v2eDYGtj7R8DX",
  "key11": "WkPpnnsZ7umS4cFN9dqKDSxbKkAyoXNV5xRyGHJbJnDhipzMTyLa56iou1dPsLVsDFfsKBWEbjB22Wysn31Xj8P",
  "key12": "4xdsNTDPWhzemUbevmJWVtMq6w9WxxLGzT5BcCTUZaAu6ahsornujPqWGkoRTJpgr82pqYpw7rXQopyXc8CssMcM",
  "key13": "47QjUbBT8dBtnjDw14xZfs6k7CXr2ygunosTkyAauyMMKPzzQzqmnibkrW6KheXSxk9GfNR7Gu1k8B6obgM1Hjp3",
  "key14": "2NacaiZeqvdKaUGxpCGFuR7SQx29CmgQfecQzJbWThC3md1uo8zXLawGZW7yFsWTPLeF4geJb4TUrBwowKRB2MKm",
  "key15": "3Zfc1z7S7zqjbaHVKrn1BQJtKM6qskozCFks4ktStejDRqBQgm9TxVqfKGRfpE4TZRLE4Kzv2Mia9VXfUzJXAGEk",
  "key16": "5rnemceN7fM3sD5N6FTnWS2KAEvsbxQ4WMYjXJhsMZLbcwAnGyvqxLubQbwWuVSZq8iS9P7KzzGWaHDprtyphugk",
  "key17": "4dxmU8oSGzvPD9nR5ENuTegMXp2k7byExxYmQaMTT2rP91jpLKbZpT5FooyFUsp2eUvUPXSrmkKgEJQPksiYeiFe",
  "key18": "4CjkeZNoxHJLeAaFBmYbmXx9UkveCCvcRxCCzryyWp8WXdfW3E8tm4mCTLmZmBx66cVbfHB5ej8TRcDv63NT3oJ3",
  "key19": "1zTMLDXNyMgZ9rE5yseME2AeVLxm1g9X9FEQNHYpwA5xZvzPLY4rRNsLCPL3PDzUwHnjKHL6XC3ve4G9ubEsra7",
  "key20": "3YzMJXbBpVDYNvsF85M7z1hBZ65zEnomhwcpiMuKC1BBAcvMzvtYHZrjjFyBBCiLpALmB9fEbSdNGDF9Eo5AL7uW",
  "key21": "3asUvza3wZRjXzomVyEgmsPmCJzUcKebNRBM3aYb9AH6xbktG6BNdaZzRDDs8ZCqvh5FSPauSEjnDA6Q5ohzdALp",
  "key22": "63xPz5Y7EyXpR62Y9PKeay7suj8LjBfZTeR8wwKRox2tPiNJSHixV5GiFC1xxTAA6mR94fK3L1X6yNoVLBfBy8fJ",
  "key23": "4xZAghxwuTFej7iQD4aJHcvJ3Ju2swRdpYpjLDSwLZmAs8csZMZEtLPj5rzUkAzrKuykhxWERCwDKg7HU7husfgs",
  "key24": "46qq2JrGxUMuai8rNToHYJkPFyFbfXPKp623KiZX9MK2sJbzUP6nhLbYx51HDZQAAsvyv1GG2DGkRzhVmBEQ4vBC",
  "key25": "43JUaVmMmBHJBwM5RQMffTRNzytG4AaaodcW8NQKwWhzBUqnsAkENQ49k6CmyRgGFLhA73tVkZHhoPVvcF81i96B",
  "key26": "28cRMwAhDtDw4yUHGeutxvXC3iShqf9wxKgTAHRoHX9TvzyVQ62TRbwo8NLop8fdnkLz7wxAK9QAWGZMgB4o1yBx",
  "key27": "26svpjdsEe8SFgRjTBv3Qw4FHviTYhfx1P6gjdfBtjTq9cVXGmXNFFqYK5A5NwADcAs1YsFowty5YL9SbC838GnK",
  "key28": "5HuLUXMqgVHgGHgWogHtot3QCE2TegS3opCZct75deQBDCeAJPH8TRK1U6zbrPqoJ6HZXAzgiBnspLhdYmx5gSK2",
  "key29": "3zPCANVFAXgKxzyejiTkrFrchztpyvNapJf37hpWG3os1BgB4C9XazJ6RUd8H98Z9hazgssiJfC64JbnAtkVyH18",
  "key30": "3F7NFrcBHd8Gu8LqkSbmnoi5nRvop5xQgzYmNvL2hDnDEE2jdJ3oCpv3j6v1CGfVEoGFURuwQ46yhZjnZ5tmVG79"
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
