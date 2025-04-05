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
    "4u2NbGT8Nk5oUNrHrNDgQCTN4bpaeLfHAgy38HS9CtaY1dGdJd4icN8LdAF7EqcejA11FFiJtqXbxJThWkTqKYSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mD2R6vF1ksj8pM7rjztDXNUunApBn6kbG3yLzdSKohRuCp8HKbuuKSvH5HJZBiqRwgEmc7ZG9WudiRXc4Geo3QD",
  "key1": "4FbaSSZkV5w2zY7iHuBn9soWxCW2Vy6crAgMxZhtoJCmFqQHyzq4tnuEAyy3FWTLD3renR8WNMhwteC38ajBfwis",
  "key2": "37eYdQFtxdc721C7DZvn6mR7wGKDpKKBRBFDeuRDkRvZ8u25JQLWYTwyko4bh6vTBgdRur2yd5o5pFyrassoKFFA",
  "key3": "6DSysY4YGWu4k64E3QsAC9kLEb5cXXk91F94WGpZoSZEx3jd5PLSGB5CsqujDme9qFrfR8SYjjWg3PzUA8EUNaz",
  "key4": "4WGy3aMP3RQ5yr8rY8PDH7Xmuck2ALUneq9Nhrb2kFnyPXDoVWNkQ4ptjiPnvEuzdsn1zbkU7DYXweAcePk8kQUb",
  "key5": "aQLvGxvVUZziopALUtcJXRzPUjBrSJJaMRvifbb9LkDa4RmfdUUtP9ffEePiGU8vuDePhhf7NxhbXdLsCG6Rdw8",
  "key6": "3t1x1A5a86sFErLQn2d6JDxwczeNLpj5gTiaG5EVq5koUiajRQu2i9HcZ5xMDctwJRibKddst9ix6uhQwJ5BAeHs",
  "key7": "Ph9Lyg7scir62LNyJUv9CvwJ9gsfBH2tiY13NDKMoieRiKkCoyqYyAdwjxp1mYBJJUZG7An6JGc2bs5NTGPbobz",
  "key8": "BLxykxkjyhkbhdtqHjZQDrnx5dPufxwrj2Tv8cFMfB77tiZM4RzYc2kwTERabxeqtd6vudqqm3W4XCUzxFek4gs",
  "key9": "46WDGrYEVAeCgdtNsWeh7AKHCUmrifpV1WcX6RT8TWNHKP9GAnw9KktJ7RiGn198LEbB7VJG5HmADNX2qyxm6EeZ",
  "key10": "2uf5cscaDCYogD5QvTPVe4971xx5D7kJs3cp5dcfHgZYQmMjrbGntruTfC5DJ4GcYwcmBgKQeB4D8y5ieBoiJhkb",
  "key11": "5i8ktBP8Ety7WwhwRZFdj9G7kSd6YLu7UP5QibhVJtZpw1TAm6gPT76rztgXdAW6ANvpEHrZq7LVAobF6M7tsbtx",
  "key12": "24RvL5ra1kM5zYm1FWzaPLpL5xyvdhhCthx1KkDaDMPyw2jk6X99X3sjMrYGp6KTVsVhpBvEMb63ortZWs6VwvxX",
  "key13": "4WKbTSYuwgvSAhKCwo5zR8dDbpmyeLZRmLTNUpQHGFuxZaBCNfKGF5X88YrcocL7eLmykMz4zQVWymgpghtrMJFH",
  "key14": "3ixu6iNPJtB4tPUq5Ny5kx78gsGAhnW5eyb4sMZpjgjdxuwx2zdGGh3eQmSkJoLgSUdEdL3eGG1XFn4RJgMzQwSx",
  "key15": "3uay4S6zPky4n4Q8VbRj4kDao95GDnp3nEZjxsTZcFZoXjDPwRe4dk4P1qBYvtBr5H1US6JnNUuRUmiFGCscyoXp",
  "key16": "5Wgw32z8sZ4aJn8VwtMWpHVUnXb6HTnw2KUk7qGD2nF7HoxgS9MkzABPr5XUQz2reJfWsM2GhkeGD7aZADcs6Svp",
  "key17": "3SH7Ui9tiCfYEcRZyo37vwoyzhjevqpuWroowkg4CPHgDpMjq9TDjvCK7YK2U2FbSwDMJzeib8deFeRn2CTba4Cx",
  "key18": "4RtDDc8hpLbQyFUvtTKN8kSRnYaVAnmChCWf3ftsXCzu8HRZnHrudbfKxUprTHh6E4kTQ1SkLB8wKWW6dNSrthvS",
  "key19": "5yZTB1K9pJsWfkUq3NE7HCGmutZrwvkMrGkhnX2Jm4TejLdEnBtZikeTHYZCEYtUrFmiEEqGbR2VUYGooxyVtdTN",
  "key20": "3nwUUhrfonV39kdsrWexuQdLzPP9bo2zThdWtNf9pSqXdsuSMKYWGukipcrg8g3wqkwYaaFTmWjuDHSgt4uJCwQD",
  "key21": "3p71qQwgUHaEoP2JMruSY8T8ARGsamVU4gRhTKJk2EYoxzjQWTcX6aipUcr8ULeNwiZcKdeXyLaZYCCDACscn2oA",
  "key22": "45tZhsJLLb4sX9u8pSgWkZUPAkYT1eJ1k5T6Qtk6sRykUkmGPmbkt1iKEmtAjjwZrNH1pyYWyF4TiWJvr3Xdt9Y4",
  "key23": "3kiUms7jMPaMofetR3Rq4WCfsrxkj1nArgqfAYzkB7XcCkhBE4w9WM1J9gnqSKn98o3EXTv6mSadH6VDJKTJKZP3",
  "key24": "2J5WwJ6vHUcdqyWoYL7RpoDCRb3UJvL8kE5L6FVy7YpwtBFsUXciTLeDQNmcrudjvbBZc71pgLTc1tQ1ywnqPuEY",
  "key25": "4m2iiydN4ipMGWyALRkwXpdWx1JhooUtw7bpr9qKXo5EQoDomXA8yy4WdTHJiSmfVPNYMecMTAZHEY3R2s27CwdN",
  "key26": "5W66hwgGJWCYCRSyVeQJrd1UyghMMBjPMxasA5EweXbifGAppNQTYyaSLTHYMM9T3Au7bFcWj3PeGuCx6ZZKvnnw",
  "key27": "4humAwRU6JjGxsKjQUXNg3KEuj4QqSyk5FDLVEVwDoWCwxspAAbHw2v3zdUXCMhsks53CaNu9VLd73zbuSMd2E7T",
  "key28": "sgDUvD8qKBWtW4jek4Wf8NXH9uHLU8pUZ6Hvi38RoeqEGhquuhWgAVxbFHmVqLXNKK3T621vXqnxekAcfRersC5"
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
