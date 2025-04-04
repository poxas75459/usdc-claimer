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
    "58kcEH6r63naS1khtVWLqwKVYW3Hn8La6Nnj42oP9xmdWEZYrRxgqr1LDqjNuJ1FtBPyxKXsRBDJncMGFABZs5tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gA9Cp621nCvzpS1z83PFYxCp81GcGT5DEubBARiauEdVbgNi7DZLSwU2mCuZKpTuMegAN9iTEmxAn4tr3m4e6Xb",
  "key1": "4TXiP8V6i9jWW9s5vapCGf5k7tXskLnK1WZNz1zb9pApGFs7Bkk9ZFggfL5qE7gHcRYSBFerdVEP6igY91fVjcEd",
  "key2": "4U1eMTqZCE9DZV5JJnu4WyFFWp9RWud4t86rHAD2apRwCAefn4ojYNZYddTi1opDvjLVFKjUeCeY5NS7Ury1xxoK",
  "key3": "neo8GySRjovxLz9YwQGJNESmuWG5Gew5siiWub2daP2791rMsczewvKMDZ9ZYhVjg2fQqXPGNhxkeoDQet5sLm2",
  "key4": "2owruZaeEm2Fpx2ydweuXwRX6fsHJLKQgDyVz2m8kRmKmXnN75okmoxsuuynVgsdYMQXmbJKnWcPq4RGxU9GPgXw",
  "key5": "66ntiPKBinhL35f7zpbjctYXmUNk6c166JnxKUL9mS2Tdh6sFPWL3zhfXnimWidShJUHmcRLmJVWkGU7Uj36paXP",
  "key6": "4WLxYMnPr8TUruXnjdooxS3GVn35Z2y4Xu5Wnb13ASXYoxBrLiEJLP3y4i6AWPi8YX2pYdQuxbLiBTYU7AB23RKg",
  "key7": "5XoxhXBCXHb1dYfHE35eZ6osomsWZP4ZhG5sbxNFn7fsN3HPQiQWAzrzNVfjserEJhPsysgMApheT4qPnrJ899yU",
  "key8": "4ocE8tCAhAyVBge6FcAK2ox3Z3gWpc6K6d5moRhVQUDcZ4g5R2irE8QmJQHodmHyox7f696r5ef3AzNcFFxgdNc3",
  "key9": "TzYPTeXYsiWALvcCmHZhKfuyJ6V8dF1RKYXNjqjica5UvmBsjnzeLT56xzKuTbhbKDQcsa7AEZ4B5WndUeQwvec",
  "key10": "3y629ZNase5jAxVN7m1QiVxvMeMf4mjZDTffCQxV1NiZ1ELqpKLH3s4ZaCZhvr7qBocBTzJed3eHZmyz92pCE8Yw",
  "key11": "4QQ9x2LpUjVaKhGp1Njz5LvfrWvV4Doob4CzzGhuBSSRMy5B9THZi4jLA2Rj355XJpLcR6XHSzJm1sF1qBbmJNCD",
  "key12": "4fiQsEcEWGxJ8ZEHtciKgTTH3txqn5Vre8P8TQMteoHmghhuJVZDMZ3EEW75jTSnEMJpu8EviCUxPgAXGuT4dkt8",
  "key13": "qs5R1U2ZCZZv5gkgx5Mh9HTcBfUaXSCgLGK7aUHGg4HZgYe9uSWtABfrnqC55RQFqzVhtf3eZwe82eK5EiAgnQV",
  "key14": "643uRbnKvE7WDzHPXHQNpgGmE1jQ4xRyVkY9QVUDfiZZEyr9cweBK2kWZbPrZuCB6hEEeNejqWbFYTkJf4wNWm9C",
  "key15": "4z2JkYbEMjxW9gTx5iCaqCNDiKNKzcJYYYQn4MLonAeGSTuJYsfDd3HnE1jPesdL47enYcefzFFgM3TjeyLqwNL5",
  "key16": "394K66gdibpVzCNAv1w3U5RM5KNuUo24wfsyn3tqBDP1Rq7M4jnT9ymdUNL5opQn5bpmSRMrSQNV9DcZXdDJeS33",
  "key17": "56qFon5AwASaZXvUBuw5U8wLZTXeMw8aJYgQWPAyNRdVt84SqjyPF2Pa3ne3GFG8Qx2sapWkJtBWii3qWjtWvan6",
  "key18": "faorUc68djkSvZcJwTpHW35toPmtd949ndi4ayU9DENYjt3RbbbfC8YVvVSqS4qyaMaEwUstpLgVqcuwZTC7F8F",
  "key19": "4HUXGdascQrz1SwA72XkGdXAozR1hYM3MKpHGeCFwALPsRNADcsXTu7job4Zpjh9WYBmVSqtKcajDRW1DY8FMhNR",
  "key20": "2iMM8NjKJQfTEaQdXP7f2m9AyyEPRr54pnQS3EZtFUoktfathmvbtqNTvPHxvS3Pmo2HbMD81cs6xDJm9ygiLCw6",
  "key21": "2HEuDCxZ78jGe9ALBqPfb25nh2FZ2ihBJAV3Np56QjDNNfFxzjnDvPo5jiJ9Zsq1rh9McZVXLRM9Apv6dwYJuPNN",
  "key22": "RuFAF3Y724GS2FaVjGpXASgrptUC5p1HVDY7hKMu6Emn9CzrzMqtvX4oWKgNn5vWHDZa1FvxvSBaHkR1FrbNRpR",
  "key23": "5CPpbs9zTf5UPnq4ndmZNZz6Ft4QKaDgBYoj7cisDVGt5URddz8Dhndt3CwXHLJwkjvy7o534weBSoqDJrZwNDdn",
  "key24": "Fi1fTbuLzcaYXo8h4e8m5AZ6n6d34shWECWEyPokVEyvdUjh4J11PwtRyQmeSCqU2MUAusNbYrrbTVm6SogZxMQ",
  "key25": "51DfH1qEMZqkWSgHFeFwvPtpHtTXKeogJwZHCj18AkJfqnoWzkgbgWRGckp2scJcMTiTkxnyzp4R7dmhFNFzKGMV",
  "key26": "2iBDtGqC1bLpTf5cFkGE9GnML2yY1QnH23WJtFWpjkDCNeRcaz5pf5oWAwK5KoT9bKLBYFZyWvmFFvtTY9SnVwWb",
  "key27": "Szx5ZKmcPjweG7kw7CNYypmUPwqMCajRscVot4e9JkBF9VVYbxpopSqeEoSDwdkty4Brg82Hkedcj67xyQcEban",
  "key28": "5ZWU37CfNfHwgtAgVvk5uM3DqQ29sKkABB7Y3mTJripqbMwA3fuJdtQeGdAfAxoveosi5JkcDfGRyVeb8z2chEQP",
  "key29": "5iKh9HD6uLE9aF6tcqFhvSrDTr2cTXQXhBpdbhWMakkfVb4SehCwX1RsdimDYNs5NBvnrghRZzs7bRY8Rth8jvj3",
  "key30": "3XQXatkqfsr1g2HnKBT3rtWbcKLfUKqoNtUEKhpwTivrqr7dELhkaP9BgXdxLajCAtA11Z6k2iibu4SDpN4P34dL",
  "key31": "4Jk9jQXaWTWa2SfrrfvXckXw5HMveRBrEGxv9dttrFnbNp4FTvztVBW1oHNXddfebvBSAvNRuKYNXByHSESek87B",
  "key32": "1QpNXJnzr624AD5dtDQHEpzexTxRF68XRp9KjDKgdV6xqjZFDQVpccgpe94mMAWKDQawiq6MjAK8qdLjEAxGZ1P",
  "key33": "5vvt48wzQpx5QsACRpYY7dhYbKLAiPsExFtnEQ9J5yvg5Pmf7RpKG7JS1fekRGg9TNUk9NaFwjKVvPzCA5VxHqj7",
  "key34": "2RttCxmqyuhRTxZ5jijENRGRrS96J7DqqRQJDDUBUvaf6CMEG8pSSWrS1HPYTMaQH3EMg4soRok9RRLx4YXiK5cw",
  "key35": "61UKknsEqVptdJ4FhZBt6zSDLUksFd3eGk86YYovxRjfJmZW9uxJfB1zTseb7Ts1kRgrX9fY2ojd6HwENdK1LCNP",
  "key36": "qZQ3ycceK4axKTvemqCAMVQze223hfV45198UuCYot6nSMbgF2Be5fCrAJYiC1GN4Ab9eTkth2BNPhXtSeFjgnM",
  "key37": "5THBVXj83kk15MDWJa4Zf3gvFb641CoPpNNCiCvjAHjkRGNJhvqf7WQZqP6hXshieokMyqASNqBE5rGPs6CE6f47",
  "key38": "4feXk6ChD6tLfKkeTkTrXsFUWG3e91aNb5cM8KKtpWXVdznt557jLWhaTPMeXtiSVK3GPXxaRdtCgJAp2V5ngdvp",
  "key39": "2WU5HA5rExeYMFrtv7rqohaAcFFyNCC2ir4PswPNBo8cgi4oMeLouPtTwir9wKDhQGxMbVMUg5WWrUBW9HWo4yme"
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
