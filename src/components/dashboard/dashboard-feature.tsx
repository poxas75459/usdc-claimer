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
    "38wNTxjamNAYNr3komGpNUwkkm6qLa2WSt2s7UbLoxyEKofdTnvDErP1p6LR7UHbthwVk2ZQCGY4zbqq9wKFfB25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXgT1jmRudoqnD17Birfu8P3dNTSoWiLCShmDvmyA8gw5sVQGGq4e6uXEXBn7WrxgQ4q4AsZyupJNEjcxad6svW",
  "key1": "ehRLN9hVS5q3sCRaamoVx8x4z6byTqq1UesiTuEcrjvtM3dEeRDffn1oGk9Xf1SSKrnVwPfH98X7fB1oaE6BSne",
  "key2": "4rEqW7pFKJxNwCLsx1H824FQDFvUbTaHC6pQ6dvu53JnHmrSZsNsUS31SLFXsXj1YPfwBVCfia4PxmoEHQ2LTuC1",
  "key3": "4keXZpnGMz6pbU4agWA3KcKgDZSqnjEbwmQ3CDEbesDz4mn4EGKBfeg6RxrToFFUgXjf5rrQ59caqdZtV3t7eQyB",
  "key4": "2u8NkhyGpXv3g2r98cWXrQhPCeMuUit39FBehk5MbRoLNdfh4X7szQvF2vPqR21QC3recytGmfyEgnf3q6iGAjkf",
  "key5": "5saAk89cENZ1cYcmfRe9QASVi12fZBHJUFSvqBT23kSN6qLf9Zzp2jdoNTBRMnCVJmLbLq9fco9Q8Qw4nHUAvYWD",
  "key6": "5VbP1Aw5gPrJc3XdcX9iigzRB1fXUGJgPMWXhx5HKkwrVYQRehP4c9K12MdHQfAzuEVb36WaBxPGg7Qnc9QNg67R",
  "key7": "S6ygzEuFU4VbJ83paRnjv2e1LPqjPJNfaHGSaFmKG5mW63HTFAkWMVstZdcm4LH5GuuHBXSTgtMRkMDrbVPMzNm",
  "key8": "XFsHbbvEKHiRgS1qHWHRdudUoP2z1gHwA2ykdnryKKCwQJba98D46Qvc8sgjwswZuupFXYrpA4QrzJvCBDNnRDi",
  "key9": "MzbzuKZfqbxKHc7fDiqkE3CkJP16w4RRgbL7CHAY9Jf7RGvKHoQoBFS4LBcrSktFvBvCbXv12RWbBWqTsfavHpB",
  "key10": "jWr1jiQyFFajuTKaSVATRHnpPRtJFeNTAPPK9HShEXiUzRB1c1Kvob9S4GnqHTa827vm8XCHEAysBZ34hpoTDLf",
  "key11": "2W71no7t6mV7B16HVCE6bmzdCNmEqtHijHyaaMQiBNDfPDrrFknjSkvRuJDRrgNGopxzuYQYBep7QN5ZPgcF96rd",
  "key12": "345bBo8JabM8SwFN2S4jdvMxZkXAwqRSimcCNWZzLiQ3U8MLCsG67owqqqTAe2jY7AwUmZ4VwuTAaapSmnXexVZK",
  "key13": "33ptsCKeYPqJKDaPSTVdZeHxw8YMsTHEevBGmSTz9xAqTcThpQYGWmonJqUzw3DcueE8qXnoddoLNUHRMoSNfaPD",
  "key14": "2kMbjJ1sWTGvtpXSPdFoh6pmuHzaqju7jGrfN9WXyTo4v88rDZew4nxmzZH7fCcLcredFzEYK6VocirmU8bVuxJ6",
  "key15": "2rFJzePr86X8wT9Z7xHoztcf769tiTKDHCsgpahkRPkKPqk4Qh4sGzFehLzBch7RtcvkMzPrtZamV65FcknsmwrU",
  "key16": "pgHtDd7aN9k8bSvkMhE6xNs91agzjG1zZ589vRnQWu7NYoHHKnk2Am3G7dysrEynzpeqV1VJbHxu7ygs99RC3cc",
  "key17": "3AFCdH2qnansxi96fTZ5fr6jhmn492wfreSrqECvkhSruunCMQnu1DidpDwGV6nPj3TgXgbEC7GLwvq92TDjDahV",
  "key18": "pDMvSgwod8VGWfA7KGG6FjXw6kcnTPxYGCjqHMu2zrtsZyPmCk5eDpgJRpGCDasCejEw1wUSWuQ61RW2W2FDMZd",
  "key19": "2rezNiSmBKpGp2UjjmqKqepzjt7N8L5yZTtFP5HSXTcjCD7zpoH392vFBRR2PKSPvUxTDaQHPiWY8dcKTENTwamv",
  "key20": "44ubsZ3epptqVCQJ7ndY5wPnjug72tZgMVU8eh4qKfTUmqmytukgKd5LkXV92yqfiLNsYXMLmtuk6dSRzbpvUwxn",
  "key21": "4zPaxFMRBFbzAt7pzYwE3ZmgfsBkCo2UtdtasVF5zBYJAcKxZCdGjp7GMQUfp9JH77hkdjEVAcXzTQmag9t5BY29",
  "key22": "2CWrwVFMVgx92iHDR8cySTZPqrZ3dZW18NcPhbK4M4WNf1R7aktnX3BpN5PvFKzi2AyXog7crn6aidUP8LkUyMD2",
  "key23": "3NPHr82m6q4rj9oCYGzaEzoLYYQtmY4m3kxn6XW7BVgctajF2yGmczRq8puB34tapunQmhmXXtZSWtn4dE5NjEeu",
  "key24": "4xbnKjfim6wnLFGzwKRT9JtyqKgdr9wvP3AxLdWPV4aCFvy1s7iTxbTY4EiVmDpaEyDdgs1NRUHcAUiJQpL5ca6c",
  "key25": "3u3SdJnCHsVyZVnc4EQreo16RnfvA5UgviBbfWHTURvvjxxz7gy2MUzgmVQ4QBZdq76nYZqnYFRuBWEJC8zZGJvc",
  "key26": "4GQFowT8KReboHv2yNSDb7K5bYePx8nGySUyPrmSM9C86N6WT8RbnsnLZewQ8o2ocxioFWShmu7z4rBc7QLMZ2P2",
  "key27": "66M7YcYizMCkfedWYjwf91P12ikX5WQuGq1tGvxVRE3XGqQZEXcuwTML7z8PAHguJR6GWHTH3SJS912TSYknUPEP",
  "key28": "3JWk35oUbDvwSuHvFMS6j48KAt9wKMp6PoKdMT9QKEMYqESsEXgE7q3poonibEAvWMPXCceYx2LeiAT9vDeEA8tq",
  "key29": "33XWj57upGUkFt5GfPZAw4mhMsFNGU5x8iFpM5XHA3KxHrr5hBbYwgUyHxWDzquUhjwFkCJGT6DLvEJgvJxcvojK",
  "key30": "22kpjfb2RV2ZNRpSNb6sp18xwmJYcEA3NFoyGMDKnFVNhfNxPbTJpsHN2sUC7YowyUE655dyarQ5tDg2wsaKtXLJ",
  "key31": "5rGP5PtJR69aiyMPSJQURAQ3X1nse1PXi4cvGkxpXrdUUqy4AKtzgGDYMXisozHyBdvtgZwyYj1xxvQqrjtxghhr",
  "key32": "C1KvXP1j5AjcTTDk7uuvu5XMuWYWBmqwTtxpZ4RPx48V7vm4FAMdCftR4kyo1aUF7uW88K4rLeZuvG6ez7zN1r7",
  "key33": "5GxR6syp3LtyJguUBeMmSh9gz7nya2ZWeMXn4QkdupM8HyyTNP9ZQitP9zbNSrFgGkoVpqtiGRmyXxJCruZZpmUB"
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
