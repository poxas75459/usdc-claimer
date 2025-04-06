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
    "55XbBd8HAL3Q6Vrj6CqSt9btzXDyh6CXoaxvKdW8JtgduPTyvErmj7m1wLF1rnGDqUjKixbpCSAmAhUZoXprf6oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTcyMso7w726BDHjZ3jvaekGxCrmCi5vLQaVG89F3VydkFAHAamuADA3BuQLeSFcA5r3Gn7BpAhrpRnoY3gBWP8",
  "key1": "3QpWWLgje4zQrwbe3SThugy1cFTXsGsPjCE5Lut6ozoTsVsdSaEyHyrNJW4KsqSrf6rciEmRRSswBQcEd4ftGvUH",
  "key2": "2RJzvvPtTbX72RP5RJCu1YyHwjQUQmbbgkZwsTF9pThM4FjLm3yaKoeYWcBJEfnPvyCCKhBwsPnQG9RVsCTfp4ii",
  "key3": "53tqq1QTJobijXCSXJqRaCHJWpYcH1NAnazU3sNSxEemTpcGRxLBBQBfhcGnthbENXJj9ReEYgc4gP99wy5W58hJ",
  "key4": "5Z2WjmEyhywEK1kndsqXVLpSbWis4UEJq9YY1uQZNPRdAHzsyLC2MSJaMtsop2guNFU4Wfmko27ZsscfaLHNnGjE",
  "key5": "q1WJDTmxV9JmjHBCsXo2EUpvgXBC21NM91ULGthsBmTiAPg8dCUqpK5DEbHpj8bve3HxgaHjLbNQxzc1RpNw1ST",
  "key6": "31PPeWAs81nbGdTiFYonb5QBmoRK3J2epTqLXA2mVZ4F8G7jdpY6j7yQwtv99MneSRH5GitCewwcdFSib1yuMyKD",
  "key7": "25tk6Pj9igJKbe3jpy2ZbB9ekrEi3BhBcT7q2d1syd7QxmsKe27Dbh6mMKC2ZTSxuJnnyhWbRkij1anzPSUEFvdB",
  "key8": "57Jxd2nmPe3RZnd8rkWUdwfNjojD1cyJ9N2R2iaZPeDuVTkA5sBazgq7XB2xxKh99XY6KHj4ZrqyiZcBmppswtGq",
  "key9": "5WTetRqTePb7KDpciGVNEK6QxMKQrM5trDvMhF4sWSEbrECwBXGVTaxwbr4ESPVnS3cdQ2p65L4FduVGdve3cYVh",
  "key10": "9rNxoGMjD2AnTMhsBmsfDdJZZQ4F5pA2LiqYMwTATs8VTWtx3dUGVHuzYpB2QvG7VdMxEZG75LVZL9xLXH2FPoR",
  "key11": "2gYxqkGogDLRKYZZbzbAMtYJTsgUsXXDkaGBFHpvrK1LG15FN4hr899vn1fokifL5ZiattR7KkRN6WezeMKjAwbh",
  "key12": "29Kv9z5jrygQPPdai2JGFdrJBLdJGKWhm2SnQPQ3hVPACuGfJgV5f2fhEw6VsLVwVVNrmyxxenDsvY1v8srbtJ5c",
  "key13": "2pNw5jZCM6Waxdcu54DKba3RG8YRZASDsCeFEsLqwXXQPeYFoKxpGRY3LaSrjC6bfHc8YypJoa28cbtKWYSiHJQR",
  "key14": "5nfAcmVVgmHwGSXRq5YLV4UJgWTYWHTt3jh7YdKCnxmzhujeL76xALSiJZvCYNm6srwUo8fVQUoQpw4jH3Fw5MmP",
  "key15": "3px1h6SqZ8rWvrSyXg9ZfyMLada72LGZicXVgAMzsfSAwQDWt1Xo7VBLXiD4zp1sa7HZtPiGkvaEtV8aPBNvDSkw",
  "key16": "5tWriGB2pKsRMzvMtUJEAUeNXmAUBTNMHx1UqvvP5Bu648tpsW4hgWzcRSKC4mC44NtuiDiY3i4WT9sW6ZZ7SNJ3",
  "key17": "23r4SahzccVGMkD4kHdjuCcyZyiW8NrApJTRLPDM6eeb8XCdwPR5J8AxLwXSKTCj7c1BC7woy31WvGWdb467VENb",
  "key18": "5NXPkrvCJuUaTXgLx1txHw1txvy1htZLLtjjrxgYNNGryu5T4Hqz95CofA5ct23SZRovTDQynCBua9TkLqPiyjSW",
  "key19": "5ij6KAKjJD6TtcrcbYnxsf6jntfDMXfw9JWHHX6gPXSYmFz1pURDcW7bZFrw6MeFtU6QaYrncMB9pzeaGRYnMPcX",
  "key20": "39NELs9hhw7My1o8qM4SskGKVayTd7MQHNHYw1CQigNjxsCeoHfWyqqftQiAdUTKJ666tcPUShfc2tNbdALvRs1R",
  "key21": "3zn3FBCy9ZSzuvNvwXHEUaG52B1rd6z614bLoo3zTQ3pTNfWSYkp9Uop8x4Qvf97qrZyvwcLfJGzafApfZegKuzZ",
  "key22": "34rTdLKzXPEj3NRCU7fA89YihzmV4hZECqTDQnDpnQ34VrbdS7zmw93DwyeZbo3EcmqXmar3uAvR7eAHGoJU1gRo",
  "key23": "5WR2EupeWq8u6Ek9gBpM3vWFB6CepxqrBjqbyjkfmnUe334EHcHovztK8UzkYHU93aKaNdHKcpMRGr6rSWRLjW2K",
  "key24": "Gf3KRa5bhp6CeWAACUM4VGmFJsJZUpQqcovjqHDZLCcjRjKH6M7thwvjsaQZb6hU458Mt1hcAv7ri6Yb4wfXBG6",
  "key25": "3PP7o7WTEoHXRRo4a6Jn38R7W88WYcjrHL8YK7VG73ZgmKo1QoUe8xUtVJ5nCxz37YLkEy8oDxxhdjpUHL8ecpFy",
  "key26": "4AAf1rBrrHhEwsdztMqdQip7buFSLV3Zb8mhteGJChrFFMtBqP2aQQz1utdRehZ9TBPoTgX9EJRqd5oncZ4mmeJv",
  "key27": "VVqo8ezEZ8HH9vHZWCfmmqopMknhEoELSiyy6k3aCPMfcBAPdmMC3ym7j5q2zY5pAgMAYMDnJsx1o3BnR9jx5Fc",
  "key28": "4bCndXLXsyDoun3N2E9fsKCSmFSS57ERMZ8qBR8qJsehmzCCjcZoKDayhs7juFMzJiCPYhNpxhf4yhoDM8PvaJPn",
  "key29": "3qRXuu87yCy48QD5nahrVyvFNhVGws69t9ecJwFUscLTrCBFGR72tKGKepRqxr2DMmVJpAvBHzo4ZKSREPt5itKH",
  "key30": "56dFUF2Lb3rsnYzKog9G5BgGunUqSPZZEY2eSXdB3seZVF23NrVZ7CTUU29eFNV68ZjkcgdwNeWic69YjpqaKW1S",
  "key31": "67Dz1araE8wNptS6yRpJRbMu3HdbbJiqm9h8iFfxtYtbYVUmdpyCfM5K1VTC1FFdoHntFB6mnADP75HhYKfhdeh3",
  "key32": "4VBqeeFhjw2UhrCUYiHnL7KahD6mCHq8nfmnFU8hTN4jST3wwsTQL1XpsmU4KTpAz12Bi3QTFBETj4ntxbsVt4Ak"
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
