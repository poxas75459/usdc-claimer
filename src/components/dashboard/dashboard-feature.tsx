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
    "kRNhqcSoF3aodhuuA8t3QJg5cFp6TQ8Wv784ZkJPz1SQveqeZXja3jP2XvX7us6f2iNCNPtx49NmUMuwM7ydwxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rW5UqM9TZckMGZ9p8rWCFZPZzABvH9nWZZhautaRqK8tTkSLvyNfBKdvv8RRhquhHj5CBMGhP2c9dJFwWHkrCee",
  "key1": "FwaaLSyTvoksTUvyTSnDHXmH9isu3EEPtCgCZ7fPVXhzFLVG7Fv95nwRu1HNk3JYnP5Z3x5YbDABwyNk32EwzPx",
  "key2": "3CuRqjpN55fyQ5JwFH177tKQMCH54neZcCiobPFvyCPXN5DTPhW5KSMjfEvdQUappsBxRvnxw92n7R53nJC8ioac",
  "key3": "5Nx6VU2M5twUodKuLRZg9TUxnZeqvRYLS3gbQkSzFpSAmnbxsfcgtL6Xkuyz7zdenVNFTHjepc81dVNynYmj6KeG",
  "key4": "5uKsdAgri4Hy1kqAKxxsRhZHSATPBvm1YbRDRsGHnjZEefxQAbyqpEM6Pikguzxhu89RTYnsGmS3yNpVbqp957y9",
  "key5": "4JbccaiHCJsuoBqhcrHVGCxbTMfyqTkni3dfCB7KKbwwP1oY8SFLuoueydyW6xLrEzqs4uYCEby9e4CWSemHPuYw",
  "key6": "2CQwTBis44xdDJDcbYqAsKcfx6nUi93cXmsq5Qw2duLLiMXY9N9qJMzSaU9RyHx8PwgMVHBXDDYqonchzbV4xTpV",
  "key7": "5xmbS2YsQT5XMJxxpAe7LGV4AWgX3Ca7eqmNu4yVk9VfFb2Map1bj27EW2SCys18LPMJcpQ29n8rbuBk1SBcsU9Q",
  "key8": "4njEkkNNcpFxt3DtkqBhzv9Z3LfvQzPzTUejSEBkKjEvRbz4hFBrPWFZpt7V6nzDjJ7EeUPC8ZKZb2NUL7GsPw1N",
  "key9": "5DwTAacX3SxPEcpBC6K151n6XvZYAUDedDWkzp71SyVas9TrVBiqwbdgaVUVCia6oYJpXjH9sm14uszX8GcibaDp",
  "key10": "2YG1h16G5Mj6HZzF8HAfLXN6eDywgkapsERKHPshyBGjsnujFZDLDznQXUB5h12yDQDJzrZ3Mo1sxdRbxa6HeFFj",
  "key11": "3CcXWWtA55inRGscxgsAGQ2q6AFXYaa5Jj4KWUqciiUDEkDzg8kEtNeCyqR98Et85CE4CFPmE2a5HQNVioTGQMa4",
  "key12": "3H3bcMQidpBRdY5FSL45et9N2ZfApgT72J2NCbi5B38tPZ9zPzoZLncjesUP2xjYyrAwUntnDvm5BApFmTTwLzTp",
  "key13": "4aRVuMdqBZSQieZkdDdNvC2hXSExSeazW5SbN681dQZt43Y83tEQq8tPAvz3BPWG41Ro8qtyNXkGnMqMFpLJFX2G",
  "key14": "2WM2mDhbBw8xVh93YQRoWo7fipzKZeXankp6o5vNFUWKnVGo5NVP29sRxB8zLTJd49Y433KGsk6a7n6sZU9ur2ak",
  "key15": "DkTcaDSL5h622tfj7Wn8gvNXjKc8h2nkeDf3sYLgbEudohpxYBNGtPP7fuMJvdB4u2GXU3CQtcAsvNbrJRHxfnC",
  "key16": "3StivEmTMypLpnsxTTRfVRASaYYtiXMGerpfmkihVGchK73bqSsQRX4LURkvQQ26xX2nUpjQeXuq3EamZr2myN6G",
  "key17": "3RGKVmFEWg1uQvQGdWerQdaJYKjkrLkoDjtYbBJEYGkZK1krTMCNA2N3SP8PAKUQW5EMKJWjFwypUKpcX59rh4rx",
  "key18": "sq5aaWGQhqaZ7kkzo6PccBojRDoexnTjT4BNDcnxSUGTqZf9uoRYMiDGXLqeeWPjTSQHSoS96u1f3MNPm6ukmtA",
  "key19": "qf6ofakhwCy358yEmvufFiRshT9r92CXzQ8bgD2cazHTwL8KRcxNBsauUZcbdYxhawuC3uBgWieRcVRmn4Sv8WH",
  "key20": "41qx7EMDTYuTLVGRgtTySRVL26ByyPWakxhK2DwWAcNpbXkkgJFAC39Kd7iDUF6MvpYjRBRjat9R3T1okkyUzxf3",
  "key21": "5Z7hF8VsFat2w5QHsSCMuSDPyVF3WYZFdpSYZMNwx7psRyEtdhk5JPhhSs62i5tB3RpZzwpw6aueGZYTcqZUNATc",
  "key22": "bgUKTmZerhFZ4Hh4miY8YpwnWbVnhbYvH8QpwWcBsh2yia9iJYBhtaxRr1ngq88ZdjTigP9Qa4uLKM3E1LLE4g7",
  "key23": "5wxpJcJLxoT5dNiDG8x1NFLKUrFpo6Buvy8rG5T47nvLXTxvJSkJ2Aef3vZWAJnxkk5mQeqDQJE6k8QbKNw5WzfK",
  "key24": "3Sc93Svz1Vd49nmjEg6CX6DvyHJBHJVU7BEUcuMAsitibGnXJgXhBsR7PNuKn2i7XdDYKBzyJawuCeTYYEGYasxZ",
  "key25": "iT3vDtCkfKpUn6sirER6gtQqsPmSA2eXvn3SdycBEXwnkVN5aK3zvDrXw8Monut322xqetMxdKjATPnAXjKTSDM",
  "key26": "3u97o1GWDbpXhzJXAs1QWddQTJGccjzYJjPsiRuTy9fyeL91rBKeAQcQ7kxg2Ue4aFKQ4psMrpqpSMmPyqYdbrh7",
  "key27": "51yeF9oV3yUXKDXqy3ZS1tu996B4aemwfHmfHxuY4jg5cLT7xaoXLiPgwx93UHYRHhJ1JwG4Bpt2okBeZP7GgdYB",
  "key28": "58rktdmF1zyoV4d11kfAPMWYSfdzDLTGrFGkxDa2ZdBx335wXGTGfo1sfB7qHS2K1NWp45is2GwZ9ASxBLTZQtAZ",
  "key29": "5DRSQsU8yn4CEQeFacCgpzBXnydAL7AKBAGFWkuTmyGLnZak44wWm3Fgdj1mZCBoUbFFA85J7B8TGDzfrskdiPcX",
  "key30": "2eYp7d4XSDanBhTqrwEmLtJeTKCwyqcNpxUeji1ABoDbyuPR1vYTPrVsfGD23JwS5YwuMFfbKKG4KwB2qjytwvez",
  "key31": "215kAsRUxt5TuqHxpPghNSjAHtTCzqvdHTKaUgMenSMey98WkehoEdLSG7fmjfHqQ9Y22icfTCNbM9k9Mo9LQqu6",
  "key32": "5QUmPkEjz8bf8AtFzNFVywmXtwzviTLdz2nQu5t7RoSGzRx5TDQVXFY69MYYAweTmVPbiVoYVb5PcnMf52ehaVdM"
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
