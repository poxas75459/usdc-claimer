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
    "28q6hh2YBqrpeo4zNbacLuq42NW2yQe8TDtujrJE3C9LYaNaH8LKZGhJfzZcJbKu9oQYtUzszAJ1arjy9fNd9qXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzM6jYVbJ5pfnB3rdR4VnYFwjmJMUqsTr9Fw3sq5my9frUQckBA7LpbEqX4ja2K1U4EUxxMwv3hCvhSf5hQrUGQ",
  "key1": "4HQ8ZALRfzqPrXqG7eMqdPAS6mdZS16SdPqXW2wJtEYE3McCAivzRnjzkbDUw1RoqCGFVVBjbqSsEQ8SpjdRfVjZ",
  "key2": "4HQCC4g6VinHeKLzxJDrfN7pgqSRxkUfPdNm8guLVfLhv5HWfdv91k473hhwGCX6pt2frjqZCL5Rj55Qd6U97gFW",
  "key3": "3fcCC1wEXi5WMyJRNzCaT6M2m7Eiqh3iCZ15BBa31a8LR511u6iCzPqmh8shjyMfHjyjXgNN9wybHyR7fHWwZtLz",
  "key4": "3ZgyFpmp3JyhWzDr6p4o3QZxNuaKmw7aH4BnSRc97kHLsasX2BgkW8bk6QTC79591zXBk1aWE7gSdLfd9qw1Pdgw",
  "key5": "r3ixte5McWnUNPxYB8sWgk3D5fMsbd7aRj7hKrb2Q75xfxGpU2Rq9uyXpttc6XNRNqX544mnN1QzuXoubiohbjX",
  "key6": "xJGCNMz8bXeWjsf1NC8hLcqPxzoX2KguPN5MFoakdyLs4Z1dZiievuSdvBXcpKJqj8ANFRs47S1c7aRyRUQvff1",
  "key7": "1j9d16dZV4KPSEYAUhy823xe6BConDE3RuVRFCxirHxtHbHKxjXuRCeZGUR4w1LAJBnuSTCaVmy7CRTviVXS8Vo",
  "key8": "54pW6cXHG6imhMqoR5gbSR3mYmrGnNz2uDsTo7fencSZ266nfEmpPxksLdUvwJZj9Dxq49C2HDwtuigKGJ9Nc8zc",
  "key9": "52aBVJ8DBWFnU9Egf3TgpiC7zChjdRQFvEoSezNczjRzhfWLAouYtVi144Adck7HovCrTDk5r2FNe2jBM5jbGotF",
  "key10": "4UoGo6uSBMTVtBhQrh9t4vZBZ2MttdCxX1thktVHGpHabzPiwUVgqpn7x7bvVW59CEWGx6JXeDqtVscRapUxjmMC",
  "key11": "2mauL2ddLV52RTP7Vgwrwrjt1R8QobergzR1456AHUjrejZQ9g29oZTr1bWDEsi5g5pfL1xHu2nrUt2qX8mbcW5e",
  "key12": "3xFsgELT7S4SnrwtYtXVSoEqXSeeYUi5hKnqHPsZcTd1dVKfc1BgXZfKS1WHyiT8xCKFTkZ9j5k6H7uCmf77adFz",
  "key13": "4jBHiisTGnE7BezNrHGcTsapbg2yvTcUpjkYQVRWhppYjz7hC2J1r5xHZzaS4xdTj4Gy2CD2KHX9nZW6mdgzi9RQ",
  "key14": "25PGebQau5rYqy6F6KaZYZHawXwHzYJsaytg4NnEhDNv6PFGyvjC9FQqQB7HdhkpVwv4wYFS3Eqax9RxzKvrK6ib",
  "key15": "LtFa8isLKxufquEUFL4KNX1seexAm78xhsWjyqk8qyTE4BS83wEddQB2kA5M8AEQ6be8aJqd3KY442XojG1CvKw",
  "key16": "3cfDWVvm4yaJDnFLmDTqD9U73BPDaeQfZUcE8gbPFJTnwPnqvrNmJg6CLc75mJbfzUCDYMSFcaXxcnfzPH4mtH5B",
  "key17": "LShVL7WXtwT1KsXtWovehA1YQA6EzUrAGzSELLZWEiHkWF5jkENxuXFRHJq1scpt1HX1368v2kKE5V7KNsi9Ua3",
  "key18": "65CLrmuxhBdt4eQTEwwYyVvQLXC2cwhyfC976fCfHYWyndDtBd6Z6LrGescLYTbDsqFyJR5sgSL4BPHpXzXGaUtF",
  "key19": "4qLrBzoy22mZ1PEStmCSDvF1zrV8Mg8rHwLZ18b66STAoms4jQjRU9tp6UaCmqi8bWjcENpDZ8oYi3XrXYiU1Wcj",
  "key20": "3DyxB7qHPtUubrLNKH1ek8RgGkMrCwVrCq1iAV53V8SDjDMhzVheZHpNtP6TrvZ5pdEXTELEaE5MiHpdWjZapfcF",
  "key21": "GiihBbKQMx4a3KWWzGUi5CrrbjywMgyZqxjmbjefiwdrHrVfmuyTKUoUjg2ohKB9iCwvHV5dF9hND7HUxLCtswL",
  "key22": "2UemjZwRGQFvutP8XyZfLMtcuuSwdCw4b8oiZUYhdzebPWz6EHs3BXeof5QWoWEQs9FtSPYokewzycL2odeDeKRV",
  "key23": "EBiVcfoq7CEC8f9Q18e7cQTN2y78B6A3xbGXAJMbeNzU2muNo2ADLU3ip6CsLbnh4M3HA66r3sbpv8kG7G6eeku",
  "key24": "3KQp21fGGUKLzXXxC9cXagBkPvw9EKDifGUf5zJLbLkZojx4V1z1ZoHXkmFup2p4nXkqfiZjZFip1m3LfxFDadym",
  "key25": "yyhhCZoxKjAyjWtHWp53f6TH7SQDYtbXLMfUtmDTHBotXLzdvZhZuwnETDMhrkw5YVGnzBmTLHZP1dMKjQDdgEt",
  "key26": "555rjM69g88EewzSrYJNfbRcmLogtWvMixe7nFhNTumEE1sX6TU3mqPC5UXR1wvjZX4euUD5zJhoh3W3LKQDnDTz",
  "key27": "5ic1LryoTbdST6mgZm3kfWZ2masreTDHnyirJsvGiM6cfd6uMj9x8SqikoFRSUW98QoMiyb4vxjfuD987Jb17j73",
  "key28": "2QyZWc43RZG1s7untmXDRPfHoUWsYSjvS29ddZJUuefRhdjGzFYj4eLRNN2Y66FfW4QterbQAbSSEsWczRJG6dDb",
  "key29": "QsGkrfdGk6BENv3s3MrHdoAAm35ovdxXHrUshPZ7bQuzFv2iZLdczvih3ZHCTHiocjVNLLmR3GbtTjH1krVetkt",
  "key30": "3YSF2sk1Y3oTd5QTm23ADLM11CpU3VeAWo9R4BKsWteBEs9yQgp31uLRKRxthsTtoCrFct6XJ7pWpTz3PFnfp2zY",
  "key31": "4DDGefekDyAtd61G2uTpykY1NZ1Vo2ce2yMXTcWvK4VdGJGdCKAaRhUF8FavfEUjxNVGzhtQXk8UENNn1qtGRKN7",
  "key32": "2tKkm1AaybKnufmSknMZx8rzhWF1R92f2vpVSso2C6MWNXuYtGP4RKKji39Yk7Wb3bmfgGUwBudJvbDQvg2CbUir",
  "key33": "4An2Epyycqw7Z6V1a7D65xhDRLbU16ueyjjXt3364jAUx2LKnKVvybs4w9NwC6W6aJ65FVzMDNE8cimY3bZVdw2k",
  "key34": "CyHmCJmDSDbZ27G35ZKSJ7airMdK31dtr9zc1Z96QMjs2LZzCudVoVMDoZWDJm2rGezua64K7wosm9Boq1aLB1d",
  "key35": "BvKB2SZ6qdw8KF3WsPQw5Greo94GtvCUUTyXnE6V16nkTzSR9Sopzv5dZwbnf7FqGj9JpLonou5WAj1xgVby9E5",
  "key36": "K4HWkN8xExdkiJRWAZ3umWhsVBXHnPZG9SbhjBxbn7Y6JTNqLcP818M3E4MVQPaPFywD9BLg2tuPzyDT5YYaR9E",
  "key37": "5SLhrou6NW4mFrUAX8jWi5mu56rJuqnXXH5emWktjnQaf9da2A9yCnAuHpT2TJtmhGEggYjbtyA9Qs4E1SNp5m3p",
  "key38": "369qsRFEjd7bSGVD33G4jYnR2V9Es4Er1zaJGZSbC4cyWE9k5JSuv6hJc4bJPsXQzSy5hR2a7kAdewRsTWcWTiQv",
  "key39": "2C6X6LhccLiSn4z3paPo2pkyzC8TiiHHGVj7u8F5g9RV32nNeJr5mD8uGry2hMX73kiXjXPcM7FkW89nSbQcNAAD",
  "key40": "3ZZkR3fF16dkkLz1Sjxk6Pec1FasgnCBunj91yxAnQaijLFGV9QRJBvzpb51Txqrr9JXYfDRJpd7RuFb2AWf7Ms4",
  "key41": "iyRv3ABBUjKKcbP4eU5LHetLykGuTeeHJ5cAmgmdEMzPpy2nq2vxPkrp5KZdThrP9GnCSJBWe3ULinvL5P9YSjF",
  "key42": "3raotdqbAndutWqRdoVVX6wvqsN2sBduzCEq8CNE34P21k5GwYjwSVGTJ1eQSiSK1iZKa7LnneCqEeYg3Ta6mwn7",
  "key43": "BtqwcGdNnbLLPKLjxR5DMoLLP7jiwMBTSvLqVCwPqwDEHi7qSTqTtstzxVq9rmiSSH7ezb5qQthN5uLtx1BELp3",
  "key44": "iicvipeatJDrNkqkDz2zT4a3NmxhFe7V5oFRU91s3Ud3yFGWLGTdDarSZih2HhMNUHorByk1DDWzohA4SeFgxgE",
  "key45": "5dJP21WMHERN6YnMYygJ5SWf1G8gjT6eWT8KseeEkrE4gp4mDQwGyLdKxJLffc3x3fANUe2QYepGDHbqmxgacATL",
  "key46": "4azX1DVVgTBiSHDxuvHPzjM9JBfK5eKehT1FSW6fvz1CQThXdgP3WKSPj3mok52cct9tUopfPBeh7AcGLtuamkop",
  "key47": "4QsquSNjjjkgKeMVdLaTA9Mb74jFGBGKpQwTnQKKrkHKNP87u7LjA2ViFkyF9d7AZciSAuzJ98iepM8BZdXknxLV",
  "key48": "42XDsjT1mG7ASyKtK93JBwzVTojBMW2Croibq6ZhgtWTVRmeu4rhUiQmY8CrakX44s2UQYmgASm9TWxWuKzKBniK"
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
