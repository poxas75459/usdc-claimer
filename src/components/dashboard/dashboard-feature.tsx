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
    "3mQGeZSWQNuhJiWrbPTiAN8yaYFcWNvw9JH41CmwADEDGtJeaQwQH3GGgc2LgoFeV53RYg1YPXvL81tMn4WZWecH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eqZ3ii8hhKrcKPdSNyDW84K5kAzjQ5DX8hEijumPEGyFnaeqccmgn32AhCkPc7c6Gqbk9ZL9T8N2FZtFey1UrJc",
  "key1": "5GMFCRALzhK8922W91vtf8FZrYx3gvTrqvQkJ27pATdinyd7NbANTwZHb4pn97KsjENVgDjvQ3HtH2jqJK2JKn7S",
  "key2": "dbWzD3Hp1LrwwRLtriwBgiJcuKcdQ3gFAFHC5pqYtiSCS4jsmmuqcAJLQKYBoaCngVVn6ikUDhwgmf4XMJmx6JY",
  "key3": "3JPjXni3PiEVmJ73JJD1eMgTnFtUhG46J2Q2ZNke2uG5SC56utWbXP1xTby7oqy6UFx8vnMz2jUwzKp5rQjHHdJ4",
  "key4": "2um2XYd63bfjXrcNcL7yVjfc45RSgT3sDQoznNeCupn32hJAPbbm185UDvhnaA1TpJAWQoR4VYRtmADHa1aHdcUp",
  "key5": "HLY5izwjxiKmYtRBZqEJb6ccdmgSpvZ8fxk362U8n2NWLi8c4A1mx31PJLbw9wq7ZezhoZqxs1QXWquoYNr3HyP",
  "key6": "4KTKBmgJW6aNxnx5pk1hB5we7reYZCmdkpPB7vhA3jJ8c2srncye4HbbszCqZoXv6gKTVg3idyrGDMup7yKV6CP1",
  "key7": "TYfWVN9MBE4Et1hX3Lj9JhRwS47yohhVvQWgd4amfJSGiMCe5Wk9u9rWaTr6zh47VrAsSKEbT31cB8WUhNBFoDZ",
  "key8": "5qkNnVww8AD4Z6a597QUNwdDEsdzFa3Yxis7ECUpCBjqFLGSRJM2wcYQiUfQMw5PTgmRnt2JtHtoMNdT4et2PKx4",
  "key9": "bN7cCYWdGvrbsYDzVBL38usBJPHt59fSGUzHAsmoFRYy4UnPzVbknvr2rjJgL5ALS3jmaRU6eL4DUBH23AAPENL",
  "key10": "3Cn12XRybn3HdPbHMBHAXRpJ9wSAq53v4YbuX3veiRXfhDAMC6XuKrgQVC2AggLU2tGSt1oShQe7tF3g6kKiuWp",
  "key11": "2Wfej7kP6bSxMXNJnXieu1r5SD8bdQTcMJYUDoaRbMvGL6QEyHDRtw9o2jU1dadb7bspeTfTpwWBDiNiiwDwuvKM",
  "key12": "27y6RYBJWywSQexqWHvYL91Z6NSNhyjvyYZc19fWxM8mMJCZc7z395fEpXjmYujVc87UnVe5S8hF8siX2dSabzYN",
  "key13": "3ZGoHhp2ymnRGAAi67vsKNHWKfaKZ5LJ2bGtGngXGbKkRfAaWPA71G6FTRngJgQsHT9WExohXjLDEwQBvqqAdcRo",
  "key14": "Lnfqa8jSo8HyCRraeRuRS9PJUK9ySJ2tWuYuYhKWuvHfqVMUUqEqJx99M54SCJfRgEb6Uz8atQvBKDimq3MdwR4",
  "key15": "5irdqqVun1yJPX8ho9UCQ9CiFszg8Xmnp4AkgG6QbXhUjCJQmbMZHsiK2Yotz2Ug42Y66RhhCmXPz1x5Tm2EXoKw",
  "key16": "21ekLwkzypdUSNjpjYMz5DeitXLrhv7Lc7iUPsyyMuGbvE4FoofYeSArTibuGv8SkpVCjrmvbQHGiSJkSkEKBBup",
  "key17": "rGjD5GvcSzZTnUSdEkUgzVHQVvB5EeRvp6NZuizq94A17dqZGfs98WSKtZhuJjs5SkT8JXW55HWtGfbbvE27SZe",
  "key18": "2HgUqEmqmFQLbCcB6ZdWAqNo3Ap4m2UyXhxWm98WwZSznKNeT4QP8ZLojQM87UWkmM6Jr6B73XAViZmWEnJ2wQpd",
  "key19": "2DurYPxrdkpT4ShUjY7xuZ5RZ1MW4VFqEahz27V7btasqEF45toJ7TV1sdrjypLPuoPL9iirWoh4wK5CBmD6A1s5",
  "key20": "4gYzKTSG1XmgzZjzjW6kKaRjk4oc4ptbVFoQhLnxMjM7D6Nz7FnR5v2Tqyi1EQHTydf6auCSxyy1bNYKXbQjQmqj",
  "key21": "Wa6UjVxj8r93yYMS1wesQYse3Fs4NpuoZHFwhzpm8yy9jmbk6HsoxAfqSbXN5cFqAPzQmx54ekDVFENYeNSBwCU",
  "key22": "4Jtn5jCBWMaD2j928s2TGBbNAVpyw11Tppc5aMBFos26QztcwEa4AE8WwiTghghBzJkiZRCFErywyxno4MDPd2i",
  "key23": "2CtNw3a3C3frLU6VPTYA4RF1XtWDEv2JBtt3XXEcF3NFZXCZBVHAiWUz4hU2CauntGjxr565nC2g7UgPrxWvVpfN",
  "key24": "4MoZeKeBPSVsHepGSSyEY1qCD2CqUQp6ycymR15pMaTAhdvjDCXYg8LMNfogh3RtbWs8WUqFDXfcLzVUAsreJe9b",
  "key25": "4FmNXvF1aCuTQGDXnQ7T11xszqncNkUTyDaZXsVAGAEAmkGo5N5wq3Ci567D4V9wbSbBRyDcwcaSkCJnf9MDMkLc",
  "key26": "5WLDb2GdKeRheKic3grBpu8ezGqmaiYzhhCP69epGxJEWwwBSuyekaU71GSbebKAKfZT9ZsxW13jNaCs6sJN3mWm",
  "key27": "64KJ9yN3pHvRXS2udWzxkZHEh8XJFb7upz97gfZhMGCjvL4Xpvrtcq5Jp8oTDxjT1whv2DHwC9ZAo7mQhTA8yqeL",
  "key28": "3yqhWZt7qJqyxwQJWcRnc6UJF4qcru6HUJZdsYttRFgZa5qN7T38GNQkHEMeUR8WVE34Db6YkivCWfGPpGf52PFu",
  "key29": "jqGGr5VJ9zhUwz24fcsM5TkxQ7ggS3sKbVy8y2W3d5EREoYY6ocbKdommLrBR3JBfHua5TAhNdTucwhPpWj7z6B",
  "key30": "2a5na2ut2H5k9FeQx4xrfnsLrwGq8RLRuLJJkboC7FrabY3dvD2fhdQ3FtPPMvMAPNGXsUUViB9nPvPHwRx8rtgu",
  "key31": "bTEikC62YdPLF8BvxkD3cxZxKgYBnHVc6DXRDafAiH31Gv8cZ85g3VCAMm1cvVrz8CKKkU1hHQTCJAuruCCfXuc",
  "key32": "1b6thrniWGsnWVCeUMTUCC88qPxNWtxcXDj2beAu48kBtJHiZ8cfVBNTya27PFCtnkc9Q9hDNVEySjtfQu7Vgzc",
  "key33": "27Kehff5MfUhs8iPfGWBBQLGC6yAKebD646ak8r4xr9MRAz55Gxwfnow5ArxnfcgkZE5CJ7e2JStUi65tJwrQwdy",
  "key34": "3Y7CpfWdYv1PJtg2xnXYLRLrMzCrQ7yhypAyL4r7kxm7XGTHcoomDodU4NdzwRb6e8F5E7pdh2LZtbfSuhxHLNeo",
  "key35": "2ZhRxatPEoaVUrJduCC8XMdEvy8zSeMmdKxyGuMsdwQ9bsU4AQSLMgDSBXqsD9tzHsJrFD49gnAE9FMLrRJp9V3q",
  "key36": "3b2vzQtieSg5k5P6YNbgTGynHUXPFhoJ7YsZP9VyWQctaQSdTtPAp7UB5fjf7hVZpXEbfY3kx38GdE697B8cmS2k",
  "key37": "oeLkJPkMpXGybtSXD9eWQpupX2Ej18vpE7y1z4eVXi1YmJ5k4VsgyybCDcVddsmaxniMQWyZ1GdjTSfozGDGERd",
  "key38": "Z5CcAXbjXirCVt7BzG4vbfGwtdR6vAmKaG3p1hVjPEs7yXiPjRQbcWtbD7ex1nhp3jUhYBpYJUASY5fcwQgKHkY",
  "key39": "5CBi2gEfgBuD1PNKAoafPv4xsbEQ3bRLJTokh2eWAeNUyu83KCZqxhnV1WhPegxnEYjUbdtnmZHBt7VyYnLEFpUR",
  "key40": "3ggsDJJYxLRrBHoc1dU9jDqXphpseokrHjxkGYz5MkzyLjwCgD36dW2FZCs28hcAthWHrQ5CwjU1dXigK2PzrxnU",
  "key41": "5mGYLorAEpM9G4qxGcnmnRxkqjNtMtQ2nfhhMQDLjvw53XK3DqgWoMp6CXaF9PuaB4gzD54tmBbkXmXtgGkRK6hP",
  "key42": "2PqKcv9ytbczjFyPX8rz7AWUeAzLZgcxUWfMw1ud7L4F89MmP8XteCiMcj2DUbGcx9kcviPDpRsxH7X5bYhEUjew",
  "key43": "2DWsqXGNmSkTTLdnaHYgfLUjUSoxEfh92PhW76pUWMWCbbwoGb6zrcrf5EmcUWCotBjDFk8PDzyeb37dQW8wrHAZ",
  "key44": "2SHYCfKCSCUc6NQVNU48jJ28YYdsDxHC9SDJ2NxJG4GmhmywgX7ALgXQ9tqQViDGmq29dBsPwjvKjpDzu7LzDKVY"
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
