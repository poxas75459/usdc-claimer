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
    "G1hHZvmpT6AWbneQBpPehunqHF97GWC1jaWPx5dFyKmLZ8aGHdTEFEZapeHAgZrWG6W8rCgdcuzCiHk5Fi62vDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51mZpmHRJAVBqBc5Mu8kEKJv3mkE9L4PkkcaUeZt9Aj4gjAYH9YUP1E7A5E7HSZ8EfvQTGJtg3pECyLnS7SRBM88",
  "key1": "3vJPY9zDmgVj7UiQoD7LrmVoVKxndfgypqT1jTNPPGK7ab7htv32wi9HGJvAsRQEgDxsURe9xA968Eh6SADse3jJ",
  "key2": "gpofKP74mX28GDkb6nes4hYcBYQKvntgFCzjfuAZmb2186SNTP97Zoz2cVbnm5FgJEKQQLvjRaBB43yAHyK3NqT",
  "key3": "3aHcYc9m3oifY7NsBSoK8m6nSCbxwrJSHcPqtxawuKvtMB1WrJvWZxB8Pzgz1cSNyMxCh5GCGsMef9fo3NPjbeQo",
  "key4": "5WLtNvqKGtXnG2iHRMSVGpjXwmNtqJ3Udf2Hj6pamdf95EjGPvStG4gVmqgMiLucy4nrU2ty9DM4w8DJcGgaqAit",
  "key5": "4T93rpW6gvrVtVRrcw7oT24KZU6owT8kSRPXusUqjTkbuWqwVCTkV6t6tQWbPuBF33fk4ynkaHKcQYCes4FEULJ1",
  "key6": "sS1zfoNBebUvLpP4Y4rmadZc8sxaLydowsCjMR4fuDuy25CiLgs3kZA98uAza1883KxnWyEaySZiqQPdTAdFJay",
  "key7": "2VvbSYwer6xRsgqXvFzQDF9VEqU7fNZCjJYKzsZ234BmynM89uCJyJpgpoKxMEBDwxiwrTF5ejVrRpjG6TBET1WF",
  "key8": "4Qs9onT8y1hPqRcY6RfatFz2u3NXUiLpPT7NHdoNNpqjiTntgNjyxP4GKPEWEbSbJY9FvpzWo9EWtuSQ29YptqVJ",
  "key9": "39HGH3uEf226Ej2fQvMsSSTZRGL3CMmPaxFAvPDrNnR6oenCs7J7FHjgoSmAy4EVBLZbpwL38mqo1Gz9ii6WxH8o",
  "key10": "2rWwMw3tCpZUnosdeZurAet33rMt2Vi2kqbmusWLwYJVGE6cYb6CjNjobnDgKprBrzYYjjL7WEAZiS2PcXHrwncv",
  "key11": "RZTR6nxGuLsEmRA4z14DUJbid2w1qipDyk726hUWT2CdsTxDnaa5mQtCZpaMcRToGpispD2GLCEq4CoKzWidDTX",
  "key12": "3VjZVGVcZXUZYbRHuRbLWfgYLbg2y5eQeUDRF5tT4zKwTwNAEbjn8ATAFowBzvC368joVH5G8EexZEzXsZEVaEXL",
  "key13": "66pdxZ6NAheRWAviDEYBE2RTbQ6TPNzj1yPsCt3a6ioC88ML4ZxMkRMR91Ttt3eUnVAs2imW6WLRtjsANrdMAKYs",
  "key14": "4QqNPhCqjz7qLCiMLotGU1jSHzRqs9Wngm348tzJyywQssoeeAWFym2BE6qxkoKtnMeYKGqi3hGhUrPzNKm48CzJ",
  "key15": "2XVvxCU7vDT5cL5Emth18J2dWeddPbw2zYit22Yga9sUMc3BQyHkfoBwpJRsy2UgmqagkzvwHwqVJmK6ECWFpp9Q",
  "key16": "4v7WLdddQoHHMSwKynf56mvePRbvRY7jQNok7HR6zfXvLwoZvtGrbXj8WpdTq3XCdPUkyboSdWXB8kUhXDVUayhA",
  "key17": "4aBa3dwu5BcdHRexGHumrJbTuz7dkc4BoHVK1xyG52SMavz14H34Vnr47nULTmun1SfGxs5ncb8iD8NBHVyfjPaV",
  "key18": "2pe27rb9KkwoMq4FQiG8xDjjaPo69hgYhNXMt4Npgr9axwTMiGxnRQfDKJJbWTQAZErH9nJL9oCb7A6YtUUHqrCx",
  "key19": "4eKBqhXnd4BhCZ4dXYdxoo8axGVV9aYwt8rvWfZ1QZVMyPvuDJd2oYqawuou23tDAKyZsoexwzVTKBUikedjCSMr",
  "key20": "5WXqeu9Q5WuafUSM2JssBSUgrCLMTGbqcpw1Bbg56G597EpHGyptM723rUFrXWA6Hcy1L2TGjPsnQ5PbG42G68dK",
  "key21": "5UJyPenAG1UhXVG5HgUz6tSfdKXE9o3cxVimBMN5ZBkRaPGqyhWa9wzwyvc65kbZhY1NT16sg9TP8qwaEJX2fvrc",
  "key22": "2dkpBBJ1wzjXpUk4aiiUmMaZej7sY3cY7njF16pbLmQAyyMWZ45YCnc4HEcYLdwWn7m9yKo2HZ6X9FzFPW9Jhk2q",
  "key23": "SZny59Nk37idrXRYSN3V59rsva1M9Va1HdbbZDuKncLMAozfeEY5uuwSR4Q5tzVFJkbFndkHswNL7EYxmFL2XeT",
  "key24": "5GmFkxjUPmnEwsErwEz1bH7n1t2H98v2M2cxn8KjTCKf8Lzf2QZQZLMSrF55cdTtUesDLSqngVvrrjmUck3Qvwa2",
  "key25": "51J92nGPSBaQg5TyU7tcW4wNQsKy3symctgwV35Jr1f3j4VxdkLvdpQbomk3rM6Vzou9WC6K9wurdRcefwVE22DU"
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
