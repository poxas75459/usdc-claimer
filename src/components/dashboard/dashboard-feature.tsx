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
    "3C3C62mcbppYKbV3JccjvZGdR7wzm3eX8YLNLXZo8EeShpiyebkwTd8DxxWf22y41kj9mHARbcnvipiHBCDEc2rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6D8svQdhSW8trbhUBk9JopNAEibDagL2YxxtYMmhZh97dqYCb522BYBQJQeaKvn8W2tK627WNBUnbF9TCRXCYb",
  "key1": "4TVr9NMfFPh1s5bWvKJrFmJPWe5dFzhuc8v1aXRmH6za4XojTeqU1Sa2rEes3sffBGJJcaVEeA5JsrKWrLtQuiWP",
  "key2": "5LucfT214fFwkfneUGkBW4LwPxdsPwpx4oWnPrAxVeye4iZpsfrGCn5df79BHp5dvHym3zKPYnMqUUNJk9gYtz3G",
  "key3": "5z8QDTxUUpEL95NwcqRmKZ2heUf1Fnx8hkbzrkK6ifokB66Mxsy2Q6NXd8GuTHmDBYaVpxmzaN1qCao8SevdiYUX",
  "key4": "CY88HX5JFknBUMHg36XS3LuvQVyBPqJy62kk96BaVDUDYXPzetWD7x6qnDDXjg8rUxR1P7UFBFRsm2ChxLa6w2u",
  "key5": "yHCzMS9A4iWAEuoYWW3j1ZXD3Q4V2rZcg59kroxeh9WnGaT5dGoq3EXnoTk4ePRKSK1x9gD4fKNdKkqRHHszg94",
  "key6": "3gtRXaBdPZefjtznziwHk8pCyLNsqM1rqCQkDMSw4g1am3mh6B3GbmpTAkZYJziv2EaboVe918VptHxao7Vjo2VL",
  "key7": "42Za8qcWvC5BRCfJokn3Mmx6LpwwkngH7FR9o9n2RvEMTHk5i4Cx1NiFFgnWBEurdh8A8NB4JuPiBisaEu8Mb3Z3",
  "key8": "4Px4ngHLsCLUmdktWtMchABhnXKcCFdrAVZX9b8rZndUpxteVD8VGQcqxJNUvhTbtKPfQq93gVzxerJ2BRHsUxg9",
  "key9": "4sQNh4R4QxZ64NXYYjeqd8pTBeoEn1DpFYN1eGq1DPCGS6wAVGt8K3pCSMwfzMZvPHgdaw1UGQDGXTvtkrR52N5q",
  "key10": "3zKeAaWkMMPqDntgNiqTt8Rd84sCdg1h44o395Q2k3Ujvq4VUfA3SZqze5YRJYRLEPefwMTYcgqc5HL7PE6YMTNx",
  "key11": "2mwym7UdUKxsN2vjxD2zeQSMf2itaT7prrMYPpw4vWerBVpVKtBVFUPJCoFyq46kfQrf3nupEv1YWUkKtaZAerWa",
  "key12": "4nWWJkKuCjQVMrS69v9qThZWeUHjyH9J3RpWadAmgCgiMRNXHAgfkwzNipUgpDbVvZPRvYUiCDsj8rpbcafsAyHj",
  "key13": "5gSzoKXaccg1aL5iK621WAGn4mJkANKRAgQ3uNUKhou4zVZWqCSfftLGaceKhuL3JNJq4W221uAXNa6Nramj2CSN",
  "key14": "4B3MQCm3tWg3MXZ1eRh3XCVxhrF7RWoRNdjRsAWi2Lp9Xi495JRRq42WiSufeswWB69j4HsgXiC4VyUsSoV2prvC",
  "key15": "58MaEDfiCg4cxnXW1DHsYMSPNJmsSJQpvfFHMA3ah2WYmg3HbXDaxmAaksWVbMdCcPGu3mC5BPRNRbj3RZD7pzxV",
  "key16": "5JSKjHB13cTyb4KMuyEs3Gf5aKf3TKf9qZcQHPCuCnA4GmMsk9vQBjXbSqh5i6vromoHSXEwFb3DJSRhRXsbGeG5",
  "key17": "3zkQQs72e3BXpi42WpUUnzssP5EpC7L1bvioHjmhdY3LuzZETGVTndjL87KRfHC8hNb76Y8BAs2nJLjSootbeKwz",
  "key18": "5Wte1L56m9Qs5cPWDCx37YwxWRzYbJb9RrAMW5pXo292LcQSvGU2h5hh13cxZ95cMXs7PFkWeJ6JHxVVvRZJaqiA",
  "key19": "3pMWJ8LPBTEfc3X4frQD5226vEEpBxZEdDx3QRAwNTePn88YVzMC9eMyhbBb89ieKRKZYBKB3umEQUcVwTQtWEt8",
  "key20": "8gbE7kwmAEjz8sUWroVJjHHGk5vrT531eZUVPkSe6TVnfgBGQ9uCFrkLX9GTUEqE6zuBfZsZ8ehrehFvugwiZsH",
  "key21": "3YAFcDUAsw2NPuhCFTTQADFRUhs8fzjjsN9tx8ijZZrwQQY5bh7WbPY73WMYue3JdmzA3M8mDUx3yuxKf3hkaDkV",
  "key22": "3MqTnRpMdLv2z6ekWmnHBEPEzram48qWq1V7Y7iSc8aFES32CmHdCH3uNJaeghguVotFtvZPsmE1Ptn2RsVxqLK4",
  "key23": "wLC4HdeDHr4PXskhMd73BbuKzBwaM87cEbvP21dBVBhMevDEKWyxMejkngSHZkKh2ereGgtg73iLBSohWgNH5hF",
  "key24": "5XQEjefwxVycDcaSVBZJPMdiTmf9ueFDXN2kmUCfACumMec7xX8b3b9pdQTFyeVx9Rj8jfNztJUVMnJDhSap6Qeq",
  "key25": "2fM2qKSADQJM1YwuTbR2RBvyu27Sg4ucRYhDGRemWwAnKeYtHqvZ3h5PJkpuM7iXrefDJMFPFPPoSjfZbVoF9ahm",
  "key26": "3F12cVW7YXLqfvw9rqbfNRkCYcaMQLQqAnKcxnhAmXW8u4iXXuJdrASS1aWdZx5fobyKukErNH7BPcrWpz1Y7qX8",
  "key27": "67GcgmxVayAuSndsJifuxEUzPKS6eqrJqnrq6Mz5yFVhqRX7oSh8SwMrPZKpUGBnxhUq4pvXFVKTCDfJfMVnsQRp",
  "key28": "3NPDgVLovvGyWsMu5Ez34DWtEyCrzS18tZZSYuLSvcSHTBT1A44R56uZNfb2HpkSEiQFK5BFGcTKyxY1zFyAcjmR",
  "key29": "5MdQtYjcjn43mjqv5v8ZBvXCbDsTze3VgTcYnbjDdQJByQHukTyfVspAEsWQ7pVdPdYBaN4TkMi1F26aAkBnRhro",
  "key30": "5MpNYqRXdt7k8UvaCcxnp8XSh2TZf5BwqtkhM4LgsmBLLBFTz9qUzmM5fHhvLZceVnnrmkraMfWQ8S2xg4FR7nrw",
  "key31": "bYLDfihPtA3otMmxLCVDuL6ivCCtxayUS5QhWJ9rmtBFVj1LWcWi2EvXx7QdBYyYrTH5vtkadniNTKsbJWskwca",
  "key32": "uThPMK4g8Mm83YWUe6g1erxctRtkoe5A85YXknLy4MzDvm6iPya51ZefEAzRFzJcHmrkxuGnJXcVekbVCAE3FRq",
  "key33": "21hSckKp98NuWfi1Mzk4sHJkF87WgsFRUeViRoPsAyv1DPDWqhryM1uVAgVi5yQTdttJu4CpeeCKKApjRftA5BSU"
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
