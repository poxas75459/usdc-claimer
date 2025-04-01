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
    "3vE855JWuNEqsaxKPBASCy123CzSzbAG652NpaWRRwfme5UrjDGrb2X6AgUbU4yzhPqnKJdMgAmhsaRZNkNLubkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzKMSaMW86Xrd2tFj2LyajGuWAS2LMWLcurAEzdatBVMXpA8wqbC7aNCjery3gUzoYvJeuHRU6EQY32bYZ2hzyS",
  "key1": "2z8sw1YF5oWjausPbw6sYX97jkHnm9ZrDK1sTUmiNxdUD3tjHjNwRxcxd8bBHvkqBTG24p7zHQoz1G6nGrgDvLA7",
  "key2": "2TwThmkwEu8ehcLKf4dVktpiyhCznfc6JeMuM3LU6eAQXnj2pcoBKjV8SEmY1q9gba5SU3gPYukn7U21VTuNnFgz",
  "key3": "7vMGQjTjZy6ev5pTWmcyfb5YWeZyBbmTRHxDnzCU116fyXa1LL3xYktFqGGKFM1xujteg8XTi84CKZA3bUQJdco",
  "key4": "4Ybx1CUtgA2yyGSkp9UScHu18a84ohWWxcTsYschj3f8p9oLWsuk8fDXythtcKYzdKoazDuRidvN9EKbuqsuqEqE",
  "key5": "64bwj2HyAvR7i8dne9t1EbWcGadafdhf8xedewy9HREt89ASfRa95XoTfhyijytFxLavLJipUJLAsu53UFHMfFP6",
  "key6": "2LJchUABZXgeoQoz28DzfKVUFwsAwgVsWbrJefa7KXBScPXwxU9Ahn2tCCufUAQztB7JZKUXvymMwTzKBMPpYBts",
  "key7": "43ekH2snGbg8LXD2oA29LCPmR7yxSssvD6MGY2qTtw6pVaduABHWkDPHga9Rg1GHTPPpESuLzSop6bEVSHJXXDAc",
  "key8": "29zWrGWuTDt1Wko7BpNUsH428tNpJYEauwSyHLnNXV75MoXU7xTUdyVazJaVuBzL2nQqFjL8LXWWyZUDdU8Q4xDA",
  "key9": "5yjgfMU8mUFMGAu4kJbhHmdWXMFAAQZMMW6qGVGoqHFz157bf6q5HftUP4FGgwu2aRQ6dcrhEhv4wdKKuQQDGATQ",
  "key10": "2r1of54qddaXXB7ReG2Xc6nsNJ3psdKtZCdi1XAfoP3WeLbqxw9Y5WDJzoQFP3WjhdtJEV6gGGbxrCvxGVHM2H96",
  "key11": "NF72GZ9eDyUJmyk5GbTAAbMxpyRENkwYtbvDDqENUrtqT8aLW3L4RGtvoXRfUyy9zccC4vRZYXFUMQDnCjxzNT4",
  "key12": "2qFXFzjZoR6MuDp3VQN3E3n6NGSb1w3qrrL775hWJi35pH7VQFCUj5RGjGBof8m4sfw9wwf8LkpX3SeafGLcDWqt",
  "key13": "4YrH1kzBdoqMn8BMiJnxewGfrMKN7UrTEzETzcrZJtKFFXBYoMkCj388pGXvNjoctXxgQLHiDyXwFMDor7f3VC4b",
  "key14": "2Du5qF3WvBMpX4Gmo3t2jLC9Ynxyu1BspR76V1Svzixq13CDbDPEwUzavZjc69tDqzKK7G4Jzo5wS1nm8EtL7DRv",
  "key15": "NxMNGTd5xNaF5StRLEyQtsM3ASp2Wb77sX5Tf6vy4PBWBgvGhmxTBi9joJGFJQRkYCFGKhG5QsJjZ83XSoK6NyE",
  "key16": "3ZupuwL6UwzV4SvsajSWN9wgrd5769Q1yU8UrpHbgwbWGzG3cSL6LKhFW234sfeQdV8churc6USJpT9Hz5fLSiZi",
  "key17": "D9jpaVfHmn2Xmji6dA6onfaXKDaADmgut3WiApsBtofSC1VBJwrAFaE4MbbkoLnJGjYkYDGTsAwvs7w8TujyNFc",
  "key18": "47hPhnUUAtrwYmPLvhvX7G7vDyL4qL2FT74d29rtJ7XYMSiUK3WLDmo69iR2Eah4AFE4KX1AJ3uoY9HvytJozKGw",
  "key19": "24EkZRKRFHzo9hNV1bCpzcGCNCTyFs7HJs9HgT57PtNxXAbAHw1NDGyfgX5Qzzz7MnudAzkRHc3euV1aBEhoYL4Z",
  "key20": "3MhTqbHdHTwPPW1Ej9MMgXreXqpWxEAntzVSm6UVK8wp31ysgPB5m3MP4TVMG5mQdtA9mWGsASm2AbNdNEM8gGFx",
  "key21": "3MF51LRGjecQ2bX96CUXCm4bdGsRr5Ws4eV5twmRw4qS6aYuXeu5NuhE17WTyDxT6zgooMKxxZapYV3576worFvD",
  "key22": "4KduTdmm4MM4ahGH7uUWf9sKnMjisdjQvvaQpTCjHsAVEuWXefYkjL4CFkw1n5ZLQ2WtA9e9NKctp8ZzxQKnah5D",
  "key23": "3BKqQXfQVRfCLW5zofff7qt8CJLPCGa4kDBGaw9WZWWmRBLG5X7TpN6Hffwgk1NGfJCdXSK271dkg8iijSCKwwyY",
  "key24": "d9fF44zBcRmR9yywgyXqGL3n6egULr1fi5dAaY9EkrjXbF9YQdiKB3Jvb31yfruMSpwWZ7wRHDE3KmR75NHtb5f",
  "key25": "5td6JBph766kxAekw7QAFJ7SfhFrWF7CLbN84qxraKc4EBKCwRNdR3Uq2WLLFjqeQXUbT4zY7o9RvWM7ZFu6VU57",
  "key26": "2VvtoJkdRGU1JVFycaTm2TCKDnudKG7eXs8hJjHEfHEHYHqmRv9T4Li5zFV1SNPZbbC5PRu2qiMB1YxuT1btSinM",
  "key27": "Ch1pGug2po9JaVPkcy7gT2Qfw6iKRCkPjkHu1ipb96TrjfTtsHvN46TanWr6HFUM1H2uJbodbAcvvQEfwnDUMA3"
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
