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
    "2Rm7peqQ35gCqSeGX4y948Famb6Ee1S3exfGdbb8gJ43uVzzKQM68foHGHMmBFk7KrhdP19Jed7dsf74JbxP3oEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Utf69U8YNAZj8mj8afUmeV41QXc5hdviWXF5WKoSrpnTNUqTYt75XMGEyo6wb97Yq9beotqjjqQ9SbGSEa3ptth",
  "key1": "62EykbxE6k48eVKUeh3Zmn1eZ2azxZysobtfFgHgtZcFaKTUCkj9kLMPdHhTH3goA7f6vDtM3EzqwdDgoe5VivhC",
  "key2": "3D4pAU5eGpeTCHqVzrX4oJcgEMuQ3acq3LLgjpab7JgdDCu5p3EbSiFDPV3wiTSX1C7UnSRPNcpciXikE6b86uWd",
  "key3": "RpDEwtWL34dzBrxekoTrULYTBtrZ8PRkLfkM9e4SZEYKAWPokACux116NwYAbRWtfBgeY7xh6djMziEwej9c3xN",
  "key4": "3jeCcUGdRFggFUvQakGxohNArRhGZVuucVZHbsUqmkxFtyr82AjGQsLEqcQCyUZ9MBnL2PWcAyj8xanSCXFLDEyo",
  "key5": "f3bqPrAPejKhuoNYfN8SwfWudbNbuumAPUmyXvFj16fkzTBf91FA8Huq6Qw4RZVjaVetbe9wJUioWoQ2GtXxgYx",
  "key6": "691xT1ojdcE5iRrPtmo1dAGnbKdEeTNr9jNfSkxmTcRVBFQozQJ8JgQmS2uCxgSbgvcqzMK8i5jacz5rQxzaLap",
  "key7": "2JzngzvBDChLnJLQQf64zD96U4uPrFd24DDajmJAgmBaTXxgpp5HnNTxihinCAH6vRjuNmWJJgR4KQQFuruNRv2H",
  "key8": "3Mxi37zAbvg5tHsMrzr1fnBbP99XC3sLT1YumsKMmdeJV5GTiKxSKJrA9SM34dGHMJNjWN6Bo4YDpDJ1btqJYFRD",
  "key9": "31A9cwMcZhpiTwuuXDkTyx24RZ7kmFYhFjGiNjz2DhfQZDRtPAzubw2vQCkTMD5i1ug5ckqX1caVyGX1SFNKSzbD",
  "key10": "oUcDWyndviVFgRn6GEYmsDgXS1RoxBqcZvZTDtx2gzX24RpCj4m5ahYcKCLezMW4QeCCvqifgDHJis3WXi9QLwS",
  "key11": "5V1VeuC1JkWXcD3umuuPsgjRCRw6HES7x12f6EA5LDUd1UxF4rAPRkgkYZvrXdQMTPPveL4HJYYkdSrvA9srcewo",
  "key12": "3EDvZ8wZskFdrAAtqYsDKxvyCDBuS3MqZyx3DqCoXN2r263WC6Urr97EaBCHbZadFVRoHAv8XZrKQwrpcJQQgdQH",
  "key13": "2ZNLpasqQPZqP4xuwrj3MUWDNysajFDACuirz6JCuWzEMxwy2WL5zuGi4DteeigNGSiT15drcyMaBdxtKV1ycz55",
  "key14": "dtrmBr7B4afBJfA5xtjnKK5V32CNkfqDX3Tw4yuWGnF8HQZYniJrYzchfojfQFGVJjyavbxyctMadtEoHYnDSmk",
  "key15": "28q79bMAUyZ2P4EAmdphHgG5uyHL75KTnbPVWs4QnJE8mhxWLRVXnHWHmeJDDrk3zqkMbCEZMJ1EssZQuEhjeDeP",
  "key16": "5wTJqb9uJCjkSguDqPeGPJ5Q12RJCZkTgZQ6a5KLDbojUKrfGY8bzf5PQkxy5Wrd1GpjPd5EWxhmuY7yzCRMqCtH",
  "key17": "56oydG5shDbXHeyaFziUUwHE2yW2DeJK99mBweuHCX1WuRzSEg6LHNY9ufVE2yhtoeQNS8TaWNnUcpQBqjiq7nXM",
  "key18": "eZs9oRSdmQ1E3fGHACSgVZhrXsHFRARFP45cDWnFr43wSKV54FfLRJZZpCNzojJs9yq78NyesMPMdeGkjw5EGT4",
  "key19": "2eCMsHEy4CbBnbameFNhJNpcaZHy9MreVP64pQqr5SkNALZPGeXApincthykNjVg4kjftzFdhbypamdrzxArbHGp",
  "key20": "2rYqP8ngc2myo6TJWYjgmJGjwtkavFLWdVtaEUAAKmjuSZtwAnroLYL1vijzGq8QFXDayd3dEDJKQNqMLmsRCfAD",
  "key21": "39r3WisjF21QayadRymHAy5rP9VPwgBu9TVNkhhc4eKSXihwRwWRmNrQ59u6Rk3QovTCn4C4X2jNBcaG97imPbUc",
  "key22": "4aEnjXRoVHHiMEjkbNWZtC6nAjvSFF2Dr66D5bbzScJGWkJBNU77Bf32ZnJp1yefKzHgtxzSx5QPeXy3a3VsugSW",
  "key23": "556cjmHQA2V8qbG4BT8jFjgrMqKam1BrMCh9jWEadEkfDnyd5QyPsr49ECWj2XUFvPDwwCvNfRarRhna3f34fPu5",
  "key24": "5imr23sdtKyrn42yKzEnLJygGmDsEb43hNN1YnFCQy5T4e6t7hA3G3YNpje725WeTmLvVGCEQHcuFEwhHbf948r9",
  "key25": "3ZRRDN74eubus6XxxJghTorZ5pTkreVweBFp6iqjeE5Aq2Tot2YcUasjbSZ4Vy8fuaWCEgzTpMNadDK7qxWrSoFo",
  "key26": "3yRfVNS83dN47HpRzcNeQfdcy9czjDLaeKuqatEpWd2PH73fBrjyBdB1jQYwrqcV8dUvxZDTBTuwvf5sY5WbeCcB",
  "key27": "V8BmRJFFiA91SERtH3MeWMHw57rvhAyhG52P4SR7hewhKZ2JrecLg2gVqYBCDNKZYKPsQ9qLUgxxPcAtFPDiyVk",
  "key28": "4TNQasSC66wHMjj74mPqpbrCEPf5MHH7a8aMLEc3gihFz9iuXXf5Gw1j2H6tMuBeE45FZnG6RPadTC7vvD2P8wcN",
  "key29": "31RrdTgBA9tLP61xWg76vr1wdCwSEqwUFeV8pTfHoZUVdCVZZX5BLP7k6bCHyLvDmTCngtaR6QqaZ9vX2s46AVZB",
  "key30": "254tcdkKvkP6Hmqtvb1FMLi1xVfqqLgfXWgDwS6x9gaJUY2avbnTYLdy7mxX2U6Qz2rgB4giLLq8fv1KQFtBmEcu",
  "key31": "28pqyrFdRVHGzSy3CQcvu92FihRRoC8Xzd7oWTFs2rBiwatbmUsFVRkTejHDB5UXgBwATkBn7Fdxo71fzqvSmKYV",
  "key32": "3C7CW7VfmFzRkhTp1tFbfEAmi3gteLEb11YeZdqKgSRhXfH8TdUNYjfu1ECY58hThjiZwZ6PdhZPkXaMoKJgRRWu"
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
