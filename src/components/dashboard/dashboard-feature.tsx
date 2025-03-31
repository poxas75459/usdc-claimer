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
    "U7aJxbMResrS1kqQHLkdkVBF1JdmGJspfpgNeX8WRbnsFNzyRqo4iaLhdXtKPAHLz88t5vVAZ7yKqJVoSP3UpPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjcXRLK8bpfpJychYpcFvZKzMe2Nbibpwn2tRDpGmFcq8EhGyy9RinwV3WFDJvh3dpoMHvyZbhKfTA7xB44b6LT",
  "key1": "46NHRA4AMsyvZnzYXCGfESaBsba6JsqMPwLcQogqf3VyzURVFBa7ZCQeR24k4F22NBsacMJ4wgFzj1q1Bf17fKe3",
  "key2": "4JiEHYru2MHRq7YLR9KM9ogvi2XdpyJ3CSorgRtkB82D6T9pFoa2n5jQHGnxzVXM8kAw4PiQoZ8EipsCU1tMRsUx",
  "key3": "47FCSKmUZeHGCyerDsp6NaJCQkBxTXhx8uJftWdaMyPnXqpURZLPyVz9ZcM7ncgrCz47D3Wvw1nSqxZiqXwSxSDx",
  "key4": "62FwuNUntawsJqpGEgSLVbXgYrc14jdxgFATYNTruGrwKkSVh8Urit7jEFCNXfNvSwhrunJNjueSBjwuu5qif4Ea",
  "key5": "4G3eB6gV2jGbVJmZTuPTdaBFtVDnVLvj1s7sDTpjxc7ZY8cU4K4iVNRgSjVxSxQcLXf6UcZzQh3rsgmmMzdZ1wRJ",
  "key6": "3yRpdtV5hhAKm7vuunn2U7dcp3vNisijY1dRkAAi8PpfnAR3ryeh7fSBaFQSjpnTSkqwEF3ytru1bLHXe5HKdGuT",
  "key7": "2Bfj8dyczGwo1CsrXmuqHgHwnN3v4kBn2MqkWXyompo3gV6G4p14dj59M3Bzoduyo8B147Z15HWvTDbadXNghVBq",
  "key8": "YSxLyr41i1cv5bQfjw7eZWAKMF2xjgdqPDUNBr4PYVLqsLHHBsaL2mhGRQmtxAcKovsSm6ootaGtP5Ctfn3DqmT",
  "key9": "4S91Q8YRmRHxxvdUihw3ijpBy5uZnDwzFPcqMDZxQWAteU5WkC7K6QPcnt8YAfVoHai8Fjkg4UoypCyLtxd6HJWk",
  "key10": "5AsHet744htwZVu3giCRzpdokP93CJBXMx81Eqwi3LCVZPU9xS3HvyFueox8U6G1s7jEqqW2ZVP3L73z66VZ3Nq",
  "key11": "4c18T7KTdEEEuqyGZeHphvLTjm15G33EYVudjU5qDW5DT3erccAaJZN4J2GcvFZuUzQPCsx6Ns77oGvV16iYSK6t",
  "key12": "2jAYN7Jwn8c1WgzGecLhjBbhXMdnDNqeparu7i9NKdbPf8p7QC9vQh8CbXxRXdnDQsGaUnhUz62sRMPH8zeKEvzq",
  "key13": "3cgjgsdxHfesVsJqyKBMj7NmU6H11dXM84tYKfegf4juwSSwE3arwdN5L7gEBEMwQrDXmSQELVrP74disLyBS5mx",
  "key14": "2e1v1F2JtT5QShP2pDpbrWvJPAPDRYJPb9iyWNYy7DnjxohtDm1mARXwC4ycahwyZjnbievhYWQt629wYSNZB6A4",
  "key15": "4tRYmeZDCbDn6Asf5hPLXkVk9ZaG7QAQo3nK1rXLjsv3w7fxdXQNcYXgxdvC8H2ujL3Kq2agB9sZn9LutxChDgHD",
  "key16": "6x7azEG864GNukcZkKPqhBoFMq8neuCuDpyNvYZuMzkUcrcV65GREWY71zbESsfimwQFAUSTCrReJpK7yRhGcbv",
  "key17": "4GaijbVdSAE6HXjXJzfdcBYXw3FWs75J1XHwES5jGdvWoQhEoEFSwYTzvrKssshiKfypGuQTZXPqHCFyKAdVCNCG",
  "key18": "55Qs1eCKDfjo3QiemTtTL66jGxcWXoBDtMXaWTZvAYMG7kyfCafd9XP6EfgYCMnNbh8QPhYzzkMznpcqKGsNFxwn",
  "key19": "5FJ36pw2JHEudzuEW1fs2UWfzgwfuYacrANnumQD4X7mhUCwt7SFQaBGBszspNgDb14Ped1dbCd6p6A5Cv5n3Jam",
  "key20": "3vNZPzj15m4kXqAQnvQUutxXfsaVXx6TvrHB2hpwWkhr81dpg8qaovu6x62fEhYBw1BLH1Aeni2ybQ4dAmhHc6GJ",
  "key21": "5BpP6TpeFDTpoYLbc386rWXsDwBwUF7jmd1hTKVLCCo2uSakP1Q5QsREXp58h64WncrkW6wCnxeiJ1L6YHAYFoCo",
  "key22": "258pHPQtFs1rw5cUmFUZyP1W929PcfdKxkaBwf2XkHuzE9fomoQgLRxVC4Zay4XMPLaiXkybwzgSYZZYSib41fhf",
  "key23": "4Qpw8nzZjHa7KRe3MWhS5tGpHgRzeErZ7RAPcQs5DLxeDZofk9gBz66Muh7USjE98r2BsuwUnvtckm6rhfS1DA3J",
  "key24": "3Cyb9Zi36fRapTmDxxUjE4e69Y1Akm3r634Gh3zok6Z4FAckrj62VNT6JXphrkQKcJaXpVUpwu1QUVjbjxZznonT",
  "key25": "2nZkBkw6a8MbfWf2Ln9TEoTjjxePggVBQHP8sV7nmwTJRy7Ba6eu7DezkZxXmGEyYHqcdL9BHRhQAGc3PE6ixcUg",
  "key26": "5j6PUhiPBsfY8s3v772oXHjVUvE7HUs4HxYiteYqiFfpxH2Ro9T3NNkrPJ9xRLCMgjHQj2RnDgSq9oTjbjGi1e7x",
  "key27": "5H8Vphi3n1yXJewpMkEBhdx3ySmoMhM2NzAGFn3BAAk6JSB3zmTM2U15GTCwwQsvMFDhG91Xh52mktFumgHhb7KG",
  "key28": "4woFJqyW9wqEJJPTstoyyQujvUNQ1rvCaV77wv1RmWGifY3nYmqk5jdm9twB8XxhjtBKg2sqeaKtRBjv5hCNTpAX",
  "key29": "4KBRT43XKpD6z99dbzd4BiFfbW6MH67nLXDJ1zM4zrTscJ7FKDkSC1KMntwJC1ZwMNZunEiiDZZSnLtiysgFMvjv",
  "key30": "3t4FMKwuV5ZdTs2VtXRsmMgMpioZmS8xy2NfA9NDNW8Jp8FHx4JuubHzeyPLouXEy7J54457w3DeXkjvhEAGBMXu",
  "key31": "5VoEvGxjtiiAugN9kdr86XJAcFLekmSDHqMffbvBN5LCrTZGCgwnaRzLtsgfDQhwXWAfXpG9m6MDmhyQu1r5yP5g",
  "key32": "5QmefkxVCRBzPxzhje1KdmC9bUYbhtzX8gMnTHFvXfboNzjezqK4SpTdwkv9SF2N4UHcbCqbHR7AsTiFob9RKu9J",
  "key33": "3n9BAmPCkj1TK8XZgATny6PNx5Fss6FSKGCQv23xv7m2bk3cC6jTJtqPZNzsSpKUU5yC28NdoDF7oG592FaR82VU",
  "key34": "5o3itQhP89GAwyuTi5Fe2PisKrRT4JRiSAgoR49bJZuHzMpQqTo6W1qodgwq1FtUVZkmTbhfmjLG6pfWXjRWg9cQ",
  "key35": "2edrM2bHNgav8z7MCrF4nNCuef1hr8FmJX1pjSbjVUhRCL2tGYqxi9UStY2NHkiQCfHKZje3GWCDTMV7uHZvS85C",
  "key36": "9EZWPnLs8b8SGdsFYvYAMMZBG819zyE6HGzGAuMZxmdxQsiaxjNrtNhB9N2hoEssRSa37FJXznKyig1Bx5Emfyq"
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
