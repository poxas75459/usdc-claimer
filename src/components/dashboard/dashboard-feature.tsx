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
    "4Viphfncx7kotyzD2XztWoCLsiAuKJ4QrRWTWBZ836ZN8GNJiJcaBfvakoPbtyidAmoou5SWscs6RZ3yhvi9NWpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wk3gTCsjLato5tRag36mxP5vcWzTh7FcrzAuXrgoAf9RTCYFKuVdicnHPYz538o4ATo9Rt7APFEZSe9Dppw9idZ",
  "key1": "3oa9GUqC5hbr5woJcdJDDRw1M1X8jSLUb9LDf9SPuJaehx24DEQUkGHpYzHAjURfhwZ8PcYfPdAXQNg8FfDovi8W",
  "key2": "vsxhU9M5W7UXd9hmZw8VHDVeY7iyd9qksynGuCEva7JzGBsr2pPAGcUQ2vjx8bkA5Q5uSXm7tT2jzQEMxGu78Pn",
  "key3": "3WunY5uDmzCwjbJHMdCcB8BsR4hNfgKb1gxGCujJoMSCid9yBZ5ubPKHpB9s8e4fsn6kjmpbg1yBpDWVhmXVudKg",
  "key4": "2BGctEyAKQaSx8U5tponWX4uoYgVDFPjoQE2EcV5nm5rnUuyassTngtzGRSQhM4KurUVKsLPeZ6o2PTMyRUtxqRp",
  "key5": "2nKgtsRqDhxaa5sXDY31xtVEwZUk2x9dWjyQN5drZjmax3Rfwyhf87EKr1PRBgtWBRS6GDVHpumLYktEAtsc6CTA",
  "key6": "55xPnvo6zTgm2GN6rb6xcsgeQTwWkyZ2Js52X6yC3RmirfPEKLRCjT5WWevaL19o52T7kmx4ALLSHmVSGJ6THoUk",
  "key7": "5Hd7MfidDaCj6A5h7Z9LTYNE9aBVCiNUsErEfjNWDiWr3aoGMsfpcZquQV9kzgi6UoH1i8pDZEpCDjwZCWacc6zU",
  "key8": "RhtHJ9Z7jGVqmVSJMhpsefE2iVGzBVdADXoPxiUfVWJdAFK2CPvDCiE9ydBRVwhbEiaSuWNqTeDew7zn6GyzuEq",
  "key9": "2N8C26DN63e7WuVBvSP8c9GMbeekqsBU3XyGuKcqdw6fq8xK9QKec1qiPhTbeyZEmPuobR6vKtMPYS2JNvu2VgxB",
  "key10": "5Lbeo3ofj7Dm9n4vhKsgTDoJNks78gVpKSnNAdCj2o34nkD45t57DxP6B16LcazEKL8YfFELybdc6LQqmEedjDBm",
  "key11": "4ZH8kazNhBthU1tvGzyAowEbo6csArzSsNfkBfSa9gSM2214ZumCZ5eTzkrm4f9TA6iU1T4ctP8SDFBcA29tYcG8",
  "key12": "4wHT5pbjnfn9vq54CpbaDhJ9xRPwCcS4iVmdgDGec18ZxgPhy1WXuBB1CQ96sx168urzKKEXDpMiPa3LtLGt2wKp",
  "key13": "3ugQEpnTpqRbt5pRcwrZErzS8q8YMv2tCCFdbCknGzeVGZvMqeeLs5Tg6MLi769dGY5Lh3y2LgMEDTzx43LY4DBY",
  "key14": "615iy9v3i4eqEF5PjQ9TssbVzEABCq7T3qX6mnbugNMDofVDUbpE9Xi1A8E3CHZycKRGE51NzTmnUZgJ2hLtumac",
  "key15": "zcrAFNoB1UCawJ2CbQSfrdEhbg7YbvPQeaksV3Wr2hchSV8b4KM3U8PRRc38Yrcn5xySE9m3KKFQjzXZTfj8Kgy",
  "key16": "2HAqoD1ja24gQcGRmMBBn5wkiiFHVQ1A8i5neUYTXsnH6retzS5uJU4wGGoQ3qUcLfNq38KfzeAUV3EdME7UiJtC",
  "key17": "2K5WFN2MtRhwcwiga36hZQHCD8Wobc6BJq2HRU5tRSsJmA3cVHobyRDmbMnSv7bbqrNEMnsV113CGMg3SoYq1d3F",
  "key18": "4ECo6EA1HNr7ao4TRUX2bxRokgWEDjQrdEVBHtEsuqGnCT43GxPZkF4rWLQHvafmhJi6TFWKdpAZ8Swyf3fKbVps",
  "key19": "4Lh5A6EB4ZCdw85Xu2SHs8DUk6wtHeH6F7XXuKAjSShpM35T6FVfTDRASfcn2ZRz3dKJEMUszGGvmMERFnLWkbvj",
  "key20": "2BbsrEyn6q6oPNYoTjzJyxWNpgH7LoAYJbhrRgrEepdWsPfPM6drToqfmMVT2UZGPZ48HPyZRQ8uK3WK5xA2Txmu",
  "key21": "56TU1sDPtrnupEDxbwU9wDpqF7KNNYmWkjS1z5iEcPdc5nsBEqbLkZ4vqBgYz1z91EG1SrGwYG4XmrmWACdUZWVD",
  "key22": "iNffu19u7YuiDVJ4QscUaku2sEjDhs3C6YHhheTqDzCLYYC4H1645PPr8t9jVd8znYct8o1xaNpTNVnFbjT1eXt",
  "key23": "2YndmFhXf6XxAQBzkPraP1UUkyJ7Mr6sHSEhtBU134EpjScZMJ73N3xREzW4v7rUTdZLC52jsLbSMwXFz22S3z1S",
  "key24": "65NPN1hM8nuqj7Fz9nJBQC4mFw8Qn3EVvSDzxg6MrxrUPimKfe2N4M3baAr5mU1KuC6BoMejKqo6tn3R7ijLyK7m",
  "key25": "3aQYXw3hL5zt9TwSkncfBNofazZPt17CLqbHtuACBtasDwUdU6CWCYc3m6nUWQt6E2czNAPKSjwyegLi1nGBPJ5H",
  "key26": "5Rx5rTvmftqdRFLBdRKzhjKuQTvLEx1Fgxg142XhyRYLk7xdXJdXn1QDctsJNzYdubMJMZ7xrxZg1kJ1VvqHNYiu",
  "key27": "4j9T6UuaPEBwpsHcK84fyp4yDb49AUFcF4jfcfCdP9ehrej4boEt7avZCUsrz9gHqc4D8ZEzsm7QgEiMhrYtbRx",
  "key28": "wahcTY3M483ytKt9he5Wed7gXgCXtPpmHZWKNydsWc4wvr9cmb56w96skxYDZUCp86iE8sSAgnvqjZ9CLWXNAJj"
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
