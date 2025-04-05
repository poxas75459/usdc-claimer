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
    "436am4qu554dtV12kCzUhaB2yQAxnWixrAVMwHFqyWvupVmFvf7MdTntNwPCn9CZYhBSJWPrzJbwNd9bBjAKmc8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6BwdcKSUbcL2QEUnG4oj62dmLHGWtT6eXnU8N1SrPFt614jfHZkC7UnSrcG3XzCoJEeyqpNfA5V9ZUbFZDrgeN",
  "key1": "4PRr3f6FW8djuSuEsWZ7rdxhgtDeCEcTd3gqaHaaxZuPpvdRQu1WPZ2daCj6FJN1YG6DsET9zgYBNDGU2hu18CF3",
  "key2": "3vg7jpVVARTPoSceHSgu3TXJF39vbm7J3kJPsRKhCGp4feY5dMwvYLdja599xT7cSEAZAeCpawSRWGpMrqtNaS5E",
  "key3": "43GHoEze3A5eqCmrRD4TZ7SH1R5hx5GWjL3wduThiKesqj4gKoaMwfK7CWU2j1AftZfWBFg4oZHgPhpLJLLGnia3",
  "key4": "RrNko8zaGKVPeMcR2gCVS21ZafHG3szKrxB73izEcbTb3Bvf7FCTU7oLYxdFFYooTLvJxX4WpMs4ErUrjqE3DqN",
  "key5": "NtM9dLvRCKo8wufMNnrQUorgAupvdHDzuWyf761Nr1AqL5GLKQYuiakdogmrkp24uEpQJt5chwCYLwh4oA4GgMT",
  "key6": "59y86bRpVNyo9FKfbqDJHYA7dK6zgcXsw3yWWgkd1eQYCCQUrSd2cP5gYBim7SkGKzx1GgSLLAQDSsodmfZD7FAV",
  "key7": "5vCAsFgMYhq7XjiGTUYNMKoFmmyXrUMzWCTaasrJqKUG5bRbX3oZaK6WtEEjWDbLBqPmEX186eVASnWEc7B15sA9",
  "key8": "42Wmj84idTbBjvw5voYqc8UnVwjGyB8VwFQbanhTFJ8PRYQ44BYvJqxGjhmJEyqn2wwboAP9oLXomr2Zio76WSkG",
  "key9": "3NB2kqohr7dWe7GiP2wtPx5Cd9gZrnui3b46Ecs1fCVoTddv9MrYJe7UTkqsk4gwrpdvEuC6gV4MrhRm1fL76Gze",
  "key10": "zR4yAysVaaAnGMXLZB9GtyN6urufwxJHGumomcffUHakVKf2kcMEPCS1ym5cETHAXhgdK3PeLFLuisz8eRZxMBS",
  "key11": "5qUeLHuwNND5ywLChMj3qtizicK5T42GAn5sxgU4RAHeuxQ5QE2rdkHnAcFvPeWYk2y2Kp323rGfXb4hhXFmwGEr",
  "key12": "PjvB9Wq32ZANY2L5UpgAV6kWtHEpNEGiwBqc9ksmXqFBJtTSDPNf3EYuKrEZZsd3F52uSbpFo9nZ9yM81armCSR",
  "key13": "2Miwc6arNEsc2TjLpHa6PVwD5w9Bp3Eq3qqwWZgjL2PuuD2KGRxPdFDKkz3a1BeAuZ3jgnTdUtbAhpVW1gfFSczP",
  "key14": "5Lc7CQRXLH8e3SymXJWB4pzac5cm5ysb7vh35Tb2iHJUisDGdEVQrJBUX1qboPvZP35PBsMSfif2gF9b547ZWX2w",
  "key15": "4WSx7vNQCjW9zWePjW9mhKN9pCu6vzS5sedNKvUfSh4aGmmE2dmWR2PyS4E1btUWuJY968TgpU2qYzNuM92qRLjs",
  "key16": "WeyoMdH3ABAioKzsuXqBg5VTiH6YNRZZM3owGU7DBdL2wTycUQvgowuSCkNxPzR7qgHkmCXXyXKPpf75wWGJKTQ",
  "key17": "3ZYtUL5u43VNtLqarautRZSmeAMmHz4aSXj47Yo4crLgjRcBfgogHfAiYYi9ky6SgPYUnFvGwgbxcxw8XAMLk4Hx",
  "key18": "2wa5ggMpTCuna59dEYbTrx1qekKxFbKgaDVUqPyZHZ7ubkLeafZHUk9PQWpxhHhNQbrfD9wzgA7PpvrDkRvwcnhn",
  "key19": "3YqSiZG72yi6qvvCtAha3UZfXuqVo63bSmmcBQV4kmwUVPyfHc9zJh7jL7oYXaGpuogYKm4GmoLrQpEyKLCcSRNu",
  "key20": "2RDwi6dkdESkaHz9ioJsS2fMCMUsfB5wRUA8gk2XJXw3tXQ1xAfMj7X1gDfz2Dkt3nHL5NzgxNiF5UZdFPrVwf1A",
  "key21": "eT4W1e55ETD7Pboeex5JAP4cA13PkWzXB9WkrqEFCBPPHvd8ggKsNFjfe468SJ8hGbcpSK4KyavcnLB7vNfx5wt",
  "key22": "3BSXEEL8ErgfXQZGd1M2epQ3gRUU9G8T9Bkz9kNeKAEKKNYPsd5EnXhDnWHcD1qiUZrye6wAtTEyjHCx3M5PJhV3",
  "key23": "4kzM7cS5235fPpU4UN1UPdJHY4YQj1QhdHUvb9i31Gb8RDAcAcU9gBA6HWK3QLMoGrjtSv8B8h6v9F9JaQhMLNnf",
  "key24": "3GTurdcnyLnwkHTx2QiozSwJ4HDE1Q8jBJXrmrMJNAfwkkZZXFtbpt6sHH6D6M8jyjorYhnLym7GQrHgAo1vCWE7",
  "key25": "5QAPRxwfzJ8MqZze1S1FgrtgSDKJNUiTVL83rCht1UBM3CL4sgAmHo1Bd3g5WA1RjSvSti5N3ym35gB2jvpSNBgG",
  "key26": "4wvttNcN542aPXVCTYQEobbnPZ2tS8HYScykPCdFcijcoM5Pjry1o9jTKAchdVihewDFCS3LJS6vd1P3TvEzH3oB",
  "key27": "46VgEeYR2fd7hZYgAXj2TPyGA2FE19LjYAfZtHoBYFrxELFZTixQWaQdegRk9FsprKxg5BhL8FiFjux2wtSSJkAK",
  "key28": "4epp7xAz71WkK2JnZWA3Uwd3q8oYPh1QiseqqDKcvDMZdwXe55Nh8QbuzJD3TQpGkecQT2Dtcq5dkaWAoYFe9Cy6"
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
