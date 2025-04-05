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
    "4QLSnhighW6rh2oD4kGK5ojUnj7PMQnuW7KqYCsZAP6FU3W5xKPi2axAsTbj6vnWMDXDAwGhUk6zbuBSt3DUK5xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKJVukLKxBNSNXBnYFd3PDGV6P9fQbkZpSLLRudjSYedwwcmKVQYSDm9phjuyGbCktHRqrD83LsSFfgZMbsfdum",
  "key1": "39XEEjeJjmzP2URcJdQXRbyxLUXGNRnKugsG8eyGvyHRgqDHM2AwvBwZKzxTJPuFxgauMHyNzXgxRibYbjbizm3k",
  "key2": "3EKZCZvRs2xnixNk6tE1EhCSKTXfW65Mmgf3fzjytisAuWiyz48hgKp5dNAMTAvmD6s2b6i2om4UGfgparn5tfrW",
  "key3": "3sFyqtJPMJTeoUoRm8UWEX3fknLifc6XN41NZiTk8AZEnm2qLw3zFSK7oSgqmTybwbgEP4JJqqaUiZsFDMkpfL6Q",
  "key4": "2nNki7Sv1SBJ3eXgvCcNUMMQkpxCBB4Bp7tWyUsSw5ScK2Mr9grFj67a1qGRGQRw8j4Z2gcJmSkABBy2E7NqKbkr",
  "key5": "2tmFYYDCJHgcCBsm41Rij7X7g7RL6vv17wQD1XEVUGjuq7zk1nVavWstSxFRwYQrwJN6JTARKn7K3uBCy95G9F9Y",
  "key6": "5SR6EZjvCCo5ajYXGmG75CReY1YYWBFwXQpFpjX8su6g94bGvvWqpSsQLmu5d24hpM6RVw22cfxCXX1RRTq2AVjr",
  "key7": "24XqygaRk578VHTnBCY5MMqUMUKXFExTRGsoA4YJFhMzvU2xUd5MkKRBZhGeQHvZYw6LNQp1ZeEXqVqUM2fHV69w",
  "key8": "3rb8MH4fV2vAdCZ5mAmcTRB7duimGn4ZCxDgyfWah16jczXNLuYFdVZd7dHUkNdUGkNom1FYqNK6YJS3tkKDhoJV",
  "key9": "2bi9pY9e7YjFDLASsqEXeMYQfDiXESr5sgsX7JDMNo4PvRzVLvbtgm2acbuLLm2sAwV9eYGVGtTmHAg9dYsS267b",
  "key10": "422vorHT6GsxsKu4ucSTua5pGrRB8VS9XdKKxu1G5c2DeQgBi6HUu1phSQLChPaNG22GCJDdk3NEEAJ5pRB7hL3s",
  "key11": "3hQwoGnsLQxZLxd1bR9sqG2fb1tyvXjdpF9hEjvcwo1raoquXULHkMiTzpe4oWFR7BsJTBXeox9oVKGRt29te3z6",
  "key12": "2ep6QFdZ29Z5xPDtbAHXEPLLHAZ9cye1RyxPi6vWGyPrK7J2YxRErNyfbexmNnRJTGjRb9J7Kus1h5FNigLTFcKp",
  "key13": "51BSiQTxAHpXD4KkotAaFwLLo88CYAvNtACH5uweBySdG8nh7KfcgGJPccxndwRzWkvB2gri6gtsp4X75d9NdqGm",
  "key14": "4bqnfFwsJDYuxq8p5cVZbtfjaBPu1mYhvSdLybhwCBSEAWHbUAFe2aiLNy7VaGSQob3zNRDaaKBKFwbgzZfX3Mmb",
  "key15": "5MDDoHJdE1V2zDaFjm7DfHXwrU3eZUbizvn5GnwMWv22upPDh3ctjY65mFXnyns2EwTEB8J7RfKxGbSd24mTeRXF",
  "key16": "3WpX7y8J4ms6WgrM77cVSXUCsHL1CSAXByhBxvQs36rokc1oSUmBsmgxn4eAgyow4gPpV3JsMDtc7BG2KWRuY6FT",
  "key17": "3zK9x3XNMbNFdWoXu9ZXevBh7kJeVrhwBezZtsme9tocLKWtBppKJiwio3BKtoTbX2xyaqfYVadVgSu2WTk7r1Lb",
  "key18": "3jLWCKfBsxf5iitRVbZ1yAjoX74UQBxbVn2Nnyq1ae4SkL4aNMLA5Lo9q6jR2sVMr5V9HUVcadHEocgi9W84CfAE",
  "key19": "2KxQSB18ntxGqff6AfaBSHZHwPYJGagRFXY58fayEsCDG9f5S1pbquE3Npp6T882b2SyV1TQBAxEpXW6k8HPQVVH",
  "key20": "2TjKjPkzW9mrp73ZtzJnUSZB6rXiCTp7u9Yt3oVJ1gesPRKGJjtzT3ktLtkvzzFb5QzomA6YdRfC24ZQroWuUq8C",
  "key21": "2XzYnB9k275j7Tp4oebDr437AsMXwCbaZ61DZG7DqaFvPpGcnFMRbrBG29WeLJ6svkMaihPFU7me2X9bMjzxPXbE",
  "key22": "61UL1PwXH9pM7FG1tFP64GK1yoiAE5FrNcmvQMEvD9pCZgzt1QymgRPs1xwwjanYAFVhhNpwJL9Lgw9BjLKwexMe",
  "key23": "3d1u16smioyNXZsLELpNtB2tDkiUxKqTZshMA13CnS6bUYsxvu6xXqbikR5noUVGop9p7u5gBikGmMq6nYgbUxAr",
  "key24": "m53Pms4igULtXR5Dhnqg2Zv2gUCLM444w25eHuna3LpCD1FjfYqNLpDRvwtDXKaF6oEQNffuQfgA5XL6NqY2eKn",
  "key25": "5n16DiSMvEKqjEFVCGNC7kFoRv6Zaxb2cEcPRUFqXqvTBtTXFfcQirRE1ThPft9dGkNUNKUko8hnRowYrtiiu8Jg",
  "key26": "2LcAcYWrSZDcqxAKCfb2Bzdjwd479cwbhJzZyPGmRtTiuzZqWvzDQ1bAisaofRpRYvxH9dTLSFH9rWRTtciZWvk9",
  "key27": "odcVAC5dxnsLbq44gsQ4eHw4iikMoBmHbWDaeng58RNHyW5c9h8NYNC3xJ3bh1u8RnVtsr7PfaDntXPtB3RcaoF"
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
