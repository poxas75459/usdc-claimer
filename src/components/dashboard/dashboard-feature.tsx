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
    "5256KGTtosUS6qZQyRJgWTnVAf93hh2TUB3daXjsJTgxxWaKQatgc2FjVLFkqAP35iDMqZB8LSJCQbBkowDDdJeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pS9uqzKxqfa2YLXqJ6DRQuwXZAJV1WQT9zcEwWswEZnR4exXbhSb94SLJnVQo2W3ABV53E7VALmrFgpMuPh3i1",
  "key1": "inFXvuf6bEPCkfpy81dVTPF4c6a9ZERDtrnizCWDCVW9UJ2oeF42SemD2qCA3ftW5cTkKuoARwC8eFj8b7vngns",
  "key2": "3q66TyzUgQ1KN3amv2LGATdLX6FSQVaiyS5V9qhrSFDtVLoufT6BH9AJU3pL2YKqruo8ab34yPkcBYMPbwFHQmgH",
  "key3": "3fiUa67sR13B3ezhbA8Z3Cy4jWGfqfrFb5zBWRt8UT9KgwqdTcsceipC2NwjyMng6mAB3UopcMEVjuwg5dficaYx",
  "key4": "4D4U8ok4sMmyEWPi6gyiLFz2MrA4jQpUbVvUZ73DvRb6zfF45nTiFhscMXs3cYyGP8i7kvuJ7MmnyDWHiBhcuMUG",
  "key5": "qdacMMpsQ8yeKYz2WbF8HiiSnXnDngTK5JUrCCoyVHDzvc372dL2KM721ZLAPhoe34pMYRqr751CE1SiokowjWd",
  "key6": "2evWD6XVZHqpmC2ZpGcT53VMgsvcmPuoZxXA8geV39CxMcU2WRQa6kErMkduRixAU3kBgMburu3JceJSafRnureL",
  "key7": "3eRBVYeFibR8VWAg7iVCDfAyogLweJZQN3dnudAKeEp2JCEpQcTJUWCuvXrfT6KkiTLRAED24w7V1hyFwg2z4FMs",
  "key8": "3RqBvw9sW1Sfnf36BuYdK222EqHot9hNmeWdi9VfqG1mkxuiwFxAxmPzNA39UucMnCwksyyo2VT6FdGGZk9DwgFn",
  "key9": "2rXR6pD8Cz9jcow7uhPBvWs4qN8xoCDjJ8wufdtXkHEVrtimH5AnviPSSkfRcaWymBknnzzB8hoc6DxjFfRVmBHE",
  "key10": "2aTV96GSL5SF2cZs5e2MCgkP81azSdAc22gebsCHek79VZrCqT92WZ44CQumoWKpwcZn5UcQT1tckmsuyF1h5x9Q",
  "key11": "2BAGpoab99t91L1A5HcdESeA5TZ5Br53uvtZ9FUoLNMDN6dDt7GAvby2iWRAk656BbUFshSNn4tAauVouoArMWLN",
  "key12": "4Nv2PQUTQgKKai9eCCAHZo56mso8xAxR3D4MXPB6cs99KvjmLtoSavzBG5VEFFQV53xi66gFboeKa8Ez3TqAFHC3",
  "key13": "51Qu4jgjU6Qh1mPifUg1ue6UY4uN8zuZ2SGiWDGTjTjPg6HRnq2UtX1JD5LfTn76YN1pJEsPcDAyw7hpPYhKFa3Z",
  "key14": "5zwtk4pXBXdjNLdYeS5s8Q6G5wneWgPC7n1xAfnAy1X5HMeDuWvJeGQCejMeJuU2yCQAsoBQoHTKTM72SeqccPmo",
  "key15": "4uvEhQt4cWKBvqkggpnK1JW1EaHjraG9NTURXZJTmbDVHmHZcDbnjLibDxaEn9ToFYqV9vSdtBuZEnfwfTAmiXML",
  "key16": "2Vrj9HFSxe6NLy9XzXHAwjjAYWUvRnHFwvxUfDe5rtChW4y7JeAFgzUUnfCW6zqN9MWJHRtCoYj78atrBx9BiKWC",
  "key17": "3PASYrN9sNDWEBZQyd8fjQRnghEdeTznQ1hniSZDgUJ4teKZLTjcJChpZy7nzpXKqQv3hmcwNJntYPkUt1XDeDEp",
  "key18": "24fqcqmUz4cmcXTmk9BrCiw81DXwibrEGtfiUiMtREJC44NAswz3RK1ZUS6EAT7x2uWn5EhjXLeUX1o1iENFchHv",
  "key19": "z5ejdf5SQrPkvbG8j2DAcKE61fdazkBpm6dp1Kewww6KLxJpRrKhpBKcQPNz227DzztYguojzhyzKJ3nPN73iQS",
  "key20": "25NccUYnXheoDUPL67CXFxNuwaaa8eS6Hv712bXZjCwyiykWLcnfVZ7wdCMdwDFEVCJqmmbTogFKzqgjRLk2sBea",
  "key21": "2CucuBdtA4Wxhbe6WDDuL4J6Nw8f65NpLJ2KxPSjcxFGSspNHoCci8SWw7dof9wJLCVRAmxbjVTGvNoNUjTZRkR2",
  "key22": "4EuzPB393umMaa8oNWRMTqXhCXoMK2bjipiEfudcHzBt6ujhQFimDp9iPvRWW6TbXSNZCfHX1TQPuv3k1ixeJ5nr",
  "key23": "5HRPry8oS9rRt6VH464PpJJk6X4AwHekXTd2KiuX8192tXqCgKibiyWvPFUZmLtti2uvCYdc53SWD514FSYueTiq",
  "key24": "61XixE9UvMXmK745dyR8DonoEC2fJ6mDgabvRuw6HR8Jup8RjARPmnN7HHSfvDaPt9SSn3bntVSYTu2hZLezD311",
  "key25": "3dJLuX9T2SpCMDp6kpvmxWZUKWWtiLfqXyTg991F4XtrexZeBVvZi6VwZpa2UKNsexhQabSvEKurS9z28szntouj",
  "key26": "3UbxdRsznGBF52kMtBt62kLkze3iqpzVFMhfnsVSjcxvnnWoJd8m6A7p3FeQFiiavHXedTteg3aN5QuDehVARwiT",
  "key27": "4d92CZFqLf15A9WrXbUotJq4RREg2v1YmodyT6zkNXhAuQjAq9kKaJpKg2QwdMANtU6mJ91kYLgVWYqBPXPsLw16",
  "key28": "kw8oGUQdgoPJwPpuZFg2rVrM98X2cZXmhXZsMUfbh3PnxTynBdQkE1rg8syDf5QNHa4GojVZfrmwyfAGf6WGHis",
  "key29": "3gnETVHS31SY27P8XHsPNxf9nkcxnAM2FS6GdGdESddPJWQfMDzTJc1vNh7uZgtTmbUfDcvbTz6XsU6FzDWSTAEe",
  "key30": "4rivjFottQnjiYuLb17y27Xgv3hALNiKjeBp1nvc89URzQHBjytaE3qEBTVxYkLYowY1vysa9rEh4suwgN2pAiB2",
  "key31": "7QKDsbvDhqMnP5cY87McryhdwYfrUrDfqfU8viny1CTTD4MofjXvT5JRNENvARf5sEkwttcfxyptFxP6zkuQEe1",
  "key32": "uaBsfWS5CU1vF5BntdJ81qZ2KJEffzPaL6oPkE3jDAokngkxNqfPcTjw1BsjRGZfvXYMruYp8NhYrX4biKAsjMX",
  "key33": "5qb8oEAn3PbWC8A8iVTcS8e2RwZq6v5xcigrte9LK2RhnuFviKdQciuCNLoG1K5X1GPqscZAJmGtXrThmRWHpnfW"
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
