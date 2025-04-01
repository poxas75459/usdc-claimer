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
    "2wPpPpNQHV43pW8ajrccJZvvkEfKcEKZbBSazMC5YR4GNu1QozqAMeVMuGsSmVCVofrmyKpGFhzshSW7q6FMcBHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxp4Z963CRTRAyQH34u1JmDkKr66CZsvGaYwq2CexJ6Y4gmuVTFF2V8GwE1QQVKCb3BadSabJdpfZga7wfALcs2",
  "key1": "2539TzeKk4NopyidxE7x78ZYgzUmVpjUS9AY6XcGBMZsmQw4bvZKDVLRaK92fuUusXUeSJwhHwar1TQ33Hfh8GMQ",
  "key2": "2kFxiko694PbCF74rqMzjnPdPvmYFSGjL3QTus3SmE856erfxg6JerNSTWecpLJp3VzKT5QZ8hcufNtvYGLnS76o",
  "key3": "3GnSv3FrzqjRpdDhBMgefqx7HSx7aR4kEDJZFUbinFMuLVioCdFbK9YKonfggUA5AgwepsLHqrfks7EeLMpb8bNy",
  "key4": "2T6qfRc37pHtcJdYHk7JPYkiVThNBiiyeVSjiHSemE9xzFh4WTHTpVFEKfhFeNVvQLqp93xHHufPyH9RTmfEUVnf",
  "key5": "49aNGoyZwrgPmUre1hkcQq7W14teuLcm9a3ufqisweQWoHmtoA44A7ZpxGEXJaxsMQkCY3CAZqv8FcCqotCgnDCQ",
  "key6": "9cETHUzWLRfhhWbwfhCNYEzqoysv1nE1VQXDVLnvePGHQM8vG7dAWrzZ2te7SgAUiFaFF95J2bDfgTp7RpzmSTG",
  "key7": "frg4yuqaqdejFW1VbQhd8i12d95KDF36k3nKCxScAtNw84h9NTD9yLhn6gVW5wQE8LHfbVAwvncHjS2SrFuJEHV",
  "key8": "38vRKBn6S5t2VCzyPeCNbo2Rc8YmTK4EmUqhsLM92THzwt4rKUYngTS3dLfdW9i3eN27YU5t6fWScyZHAMNv9WMZ",
  "key9": "2wwg2ocfs6txj25mfKCFo8JbhPAHvQX7BZtUJFqtferCivcKaT63ub1kUPtzpU1HcDk5WVwnFpk6Ynf4pA9yh4iX",
  "key10": "SefXVkRqwDrSVHc2gKVinrZFmyKeQtwT83FrhoDtjQ1Rf4RMVsdBnJvB7zUGLXV9D62eqsfpZhUrEZei69U6RfW",
  "key11": "5JgxbzoEZBrNTU8TCdfhxbuxwfwV87tE8HMdJDT8CBxtV4Vkhz5k1vMdM2ydYivyC1vVax5x9Eau6hyi99cTtcVa",
  "key12": "66mYHJhKzrPQ2ukqQBecxUrSgBjfTnip7Pgwe8mYzPqFVokPUwudUq78vRxGiUAhvJ2H5AWtLNioBqvJFWkrp7Qq",
  "key13": "4s6ep8THA4uhKj5uoyzJXv1qWFdAuhNTshNzdzE7vU19t3TikT4b3smGcuei1RkMG2duAAnASxPc4jQWh4hSKMjo",
  "key14": "2U5njawQm1XzUxn9QHZtHSdUYP8jL6JQdr35LiBLBqRTBz1gZySmtC6aYu9QuhH8vW66irtVBw5tZP5jAZ5riEGs",
  "key15": "4TuwLSmzTeKDu4PK7RfqASM8A93PYXqVAGvoTeZS3YfEU9EkAqNpBqsUamvwPFU15kSpG9AWh4KdDnFWUA9kt9cG",
  "key16": "5o7WVff3tyvzH6p1C5CZm8bZoST2PV4VgYv3npCd6s1Xf7mrUDqLM2bThPk3ysWVpVD4FWvMXaRQ4XkBMAiUQGxT",
  "key17": "5DE7K2DYFfE53TV2Fe7cS14XZtPgeBeB1MVqzDhwhDHeoHCnVUwFP1uBnNkHgDuCcqDcUqxSr2tY3EmAxB88pDJG",
  "key18": "3Av11FMwpAkdGW4CcsgTon3xzKVDNGJUKwwV7oXid3Aw7yGbctU4Hr2Jn8E6dKrw6B7qqxgdZRe91ybipQPBHwRi",
  "key19": "yQMDugQ6pBzt2PkkJuiAowxM8CXfvpWZJgz4jbatKdBSMAbwtiWgzNaqdY6njXtqb6uYS1a7qHUvp7R5zJtShA2",
  "key20": "4FCed3YBKd12drThpyS5pjj48nRzWAJvzu4ckmm4HnCNXTAFzedVdgrbi9n3bBYzMStaZmkZp5o7ynjU4Jdwcetj",
  "key21": "3rjqdLEcCcg9wZMMQ4XRmYidap7PxmAZAzVdJKKjuCaJZ1BUxigrx9kpmnickgHyv2CaKcR51K1UeRU8Ui362Mpp",
  "key22": "4EypSagm6o7ZGZUb2g7Ki7Y1Cdm85Nrs2FXd1MR36UVd77bWz2RXXK9cydxd1GYTruoJPXqM7iuyLQrHzidUBPNR",
  "key23": "2hgvGqeyp99LyirqXxd8KcnstZmKz3QFnToBoUpUqzThZzbR8NM14V2MVEV9XCytjHjYapS6BDMDA6wyF9EcwpDN",
  "key24": "53nKCUkEMDdJ8ZdidMR97Etyj7imzArNHaZwh6DW5LWW3zQWd5S564ba9G8EXBGjCfNvY3iJbBzruzv1TbUhfbdr",
  "key25": "2hhBmvxhhSWWsbbTCmDcXzPvL3eGMb9Niog5bxmmztofHpzTnTUNNfr3CLwrAGWrGaExqWRLM8QgoTTz29yE9eq2",
  "key26": "25WJCZwyCMMgY51tBq3fVTFxhcEymdn5nQzKqw4jn8Ca8Q1dSHRcB7wJ4CbPzw8V8VuTND7SJJHVSV7YjxAdWDK8"
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
