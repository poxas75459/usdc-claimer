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
    "22fBNXsmzcWnY6HkTA3w9jpTv8vSbXsxwug3sRrkYkspzmd5PHbW6zbbKCtdqzq1VzUf4hDsug7XHiHBSzgg6GmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61e1nFuGjgqfVq4ESAxWmsekaMAoj1Ni15RtvdAfi7DEYLbdA472TDUUT17FXDaDuDt5YzUSjMucV1KzStCUw5ED",
  "key1": "5rx4TeBmjr7CSG28o1qCSVBwsotJDWK2Ksvw2dwtizWmKfcGPoiU5SQUcL9VXd7j9RtGBjCTfDELA9QsrX4suBni",
  "key2": "4a2SYQbCGS5WdNDa3AzpJaiTUMBEwLXP3Gh8bDbRLkA6AMaHLfj1nLDr71gFYmz97QPat7kZgdhmNF62nRuGjqd9",
  "key3": "39ak4erL8zMokvaXnHZGeTzMTEvz8M1RdYaiTv9NibyMxmw5xd5BeesJLePy4VxWgyDqMcYvuwg1cBVe1iPox5z9",
  "key4": "5FKZvNisUUdKgXDYFxTJuR2VyCvr5RQZWhZRpwiZsidUzAuEDpd3f7fGUeHXDvNKhJatEx1yhybajeFoQJg2Evei",
  "key5": "YS5rNKrbysxvfptEL5N155RewQox66oa5wHvgVfGWWjtGs2oZRANrMDtPiYNRw4VPi6Uvw7XaHy2muXPzajhbFp",
  "key6": "4wgTJD9auE3ELjnafwVtbbCucgxoAm3Vxydv6H9KNWJkLpfnKogDdbBbHx1CGME9vfuU9xbQcW9XzphHN2wjssuQ",
  "key7": "3FHn6Nopr1uz1PdPjLmSXfEz5FS1fUJ3q8J98xjyRiMGx1ceYPMkoUeGn9ftjwsyKSSkmv8mshjvzbQfASbNffYm",
  "key8": "2mgjDme2nWPvUT6DSaCBBuxBbgaHQFL6eiW4WmaTP7kNkur9HHWb5pzhFAJX23v2jeDfQmgoarAC5SLHuhY48sJn",
  "key9": "5qfjJEpn1XNYEHVfdGLjkE1LhyKjDBcX5CwmMisn83pesweXqUAmCPPwWREDjxABvvSUxaUSAQMpqUqVBNePoNmy",
  "key10": "A3pZQrdLFXEnpfcNMCk8EYchQejiJzQq4SYQCsEpuFG3sJTK1PNf7ZcmttSdduzD1nchF233Nh1GjBEd6h3F31h",
  "key11": "5hSfQXhBKozyfYJiQkAC1vJQbvn921vsv7UZH4JRpjhhZMpgWa5UosUSkhTbtU3Kj22wkPv6DXHo6r8V3MdGM7u5",
  "key12": "3FRv7FML7nncc4H9M2UvyVHHwpjAoNH1Rt9X3etpteLhXuaSMDabxWdA5rmyEZiCw4SJv3NHPu472duKPJ8Dr5sG",
  "key13": "3ivSdcKxwsHjkFLZPqsR2HmY55a8Cq7znTmzAkvECjvSDMnB4W8Pccjsawbhm4Nhe1UH65PnuzyfLoUsPMU2iZYN",
  "key14": "28F3Nx3cRqsqx84qa8Ltnfkm9W3vCcMmAKCoKgpUragMsNdwi1Lk1GbLf247Zskadmze96P22Hzrb47X2LEwV9Lx",
  "key15": "3iz3k5JQAxyWGUAePuCq9eTzJNokLx4LNPXcbAGkC6yS4p4bv6M495iWFoqm2daJTr91pAW9M5RKnkM2NCgWa37H",
  "key16": "4RgiY5HA8HpEafXqX9mSMStAzXfJgSss3JaJqPG7FgpcWH9hdAjWp3pTiR9RRLdg5mi1kdjk5aCG1DXvECftZzix",
  "key17": "3U6mpxLyYPzKbxyUsUFsujh7dTFyWt147d9NMuD7cSVJVfX4Fexgb4A4sFSMm8g7iEMFEs8phzFzXzf264Zq2TDs",
  "key18": "3rLAedNK3oyYdSeHL8AfJvn9vVVWob59UzBUc7jkodPMrfy1mJvkTekUkGeG2jz5U2DBPNwuUasgCxLDK8zAZDiN",
  "key19": "2M89KB6ZcqDyhzEcWy7ktgHPzJHdgkoHoDa2YWbSp7hdCoBqbt3AB18rfqDH7aLhwkv9AYpBqxJN9ne1jb3pWHzq",
  "key20": "5LiSAxj3T3MYU5828J4cKyu79Pi23qVPXd4nzCDyZMTs11v8oEZXfGr5DPpoR6rreB6gUHCERViuVECLTkx4EmHR",
  "key21": "4s2S6xs9AZx1D9NexJATKdGLLHWJ1zGZHja93DH5XDhumq7RByBUnEYpQ5XTwUDjPrDfZDrQ1eQASmD1G1kiZA9T",
  "key22": "2YhMfThzuiyvkAZTAz9BddVVbJZk3gePDi2ZzgfYPKkGNyBp1bBUGpqgye3H1TFdKj8i2HB97HhuyAoc4WxgEHik",
  "key23": "MGV1QiykGrePsgNnsUY1Hgt1Md3LwNcpoMPt7kK78Bs8KyBn1y43sduSWh1tPUFb621R7p6dhuA7sgEN6wZJX6n",
  "key24": "2vjKCB2oWs1eUSBWVBEWhNsPsXnybvy4KEKKUhB2uZLBUShSbUp35rC1v2uNJjdX4NvFJAKX6ChwQTLNwJggcNpb",
  "key25": "27JftyVbM35NEBfy7Sc53pFa9FuxaGnmYuu6ThwMKeA53YitoyiQQRdP8S3NJLzoBFeB18eSsKdfAiJPBai57uF4",
  "key26": "D5MvBbWfmeZVYpAJdokUU5H8ekAmC4pCsubnfJ4GwF2NBgb3Fp167ykAQavyDigbk49YSVYJ16HgpGJoKuwuj6C",
  "key27": "5XScaxwcQtu6HUnHUKuHd7xEv99VY3UEYezTaDp6MUnnqW3S1DUizLwKBYm1kmUunLiVx65XYkWV7BDE67A6TJAS",
  "key28": "5nvSv9tpvovaHNUKtxY58uFVgstJsUD9CAixZn7wpjZBifFSDMmF7SeMbTGHBQi1jbcqmztm7iYGT5iELMEWfA9v",
  "key29": "QgLhnBznuwWAPhebiZNbNthiaNajaQYXup7HusAxJSF7BC59zBBonKReqyusBGKqyJ3kY7HFJYGHQR1SHU6tUkr",
  "key30": "67JfiHr57KPmH2JZfQeVD2rv42TcthB4HntzirEJruZKaQ2JnNkQfN8cMWkTuPKVhw69Eycp7bX2PfSr96jASWrN",
  "key31": "2hBN5Vx6Jv98qyMJkFnSkRjsq2QJmxM7jv5JNXr6WaHJcwcbGJ3ScuUV794GTaYHnFyvYrhcooiHEsi6JfhWBdkZ",
  "key32": "48GBGAcJrFVturUM3cWNnD41W6qyTAsqrPkoWBt1gm6uX4tK9H49MhGUmM1ZgmoteSji1XQmTaChsjM8RLWUW8tr",
  "key33": "keUS5PWj2Qzk3H7ofKD9wa9rvR95aaTfaSacuVuuSxanHjS4Ukyw4cwSgydJ7g23z9Pqi7WnoUqTvEv65RkdWnZ",
  "key34": "4MWmJuBzEVpoE5eVvuCqKco77ySF164UB1Px1j1rfRixcbwMerjTaZ8w11vzrBFGpuyE45mLJb23BnZEUGb7omJH",
  "key35": "5dT1qve2KC6RRFec7GLGQ7yxNtVyrkkWkhqsA8WtABiKb6eprxT46YTbtaYYuHgCLtqYtarrtXPWu5YGEUNeADZj",
  "key36": "CzuX24qH24tPcMEbmEk5z2VXDhmaHvNT2GtWQdzTgAJVt1ZU8bdDUfpbhFPwpm142CbtZkou3rKme4fvqdLZP2w",
  "key37": "4AXQRRGkbv47qbU3DGPyNS471M1yLgvqfTH4WHtKBZgNrFUb5CHmprSLxEGsMcJva9Y7yDhR41yffFwooiUgK7vU",
  "key38": "3LgZeu9w4QsCqCp3Ss7a3XtGcxr2zer1yJhZRY5b9bF7fgeThjB7GUbfZDb1vdx2JRajtdHDm9YwkmPhQZSvTXmA",
  "key39": "5cu1iU13iawUNBYjZj22bjEcaRSfNKA1UikXs9rFp67S5zGESUVxxSn13vLSKYMyincEG6wUW2yXHVYzrhPWYFEB"
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
