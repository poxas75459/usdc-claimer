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
    "5wgN37ACjw6Qmf6QPedpLeKAdHRFu5ftB7VWoGswnvkLhNBeoeUNF9wLtgf19on3nAHQ8RayV1NpHkh44TgZRJ7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBVLizr1uNLKkfUmLYxXjNCYKnKjFEKa33KvPv6EuL8m6AfD5rKbTmX8KQPqGuWxLpfjksNVxDiQHQe9MaSZFrY",
  "key1": "21zA7XDj22zCVHv31sYZcYUB8e1kPhov7exQPcy6ozr4h6tzyCV4VUKCaQ92tC1XaD8f2bW6U2i33oVnozrj1iaJ",
  "key2": "213cqopaNtJbE5EbxeFhjFHDuhfkJLn6YjSfarfkBYWiE7H6RsJXK7CoaW3Uy7fjzibpeHq7vXcSeKFDZs7vEg6e",
  "key3": "4PbR9rCAbJzJUTGZEvWzAmk4hu99eX4paFgtDncNtidZvuCoYzrCuw5HAyK4tF9g6PEiB53j4NMYJoGS7iJoKMhg",
  "key4": "3UaS5Vj98GeRMGgfgmRArT6dnys3HBU4P5aDY9eAkpoeHvipGWqctXvHsZnJEtT2FfSV2k6dBCUWBVSdm56GB613",
  "key5": "h5BevdCAf6U4Tc76YeT98LhMRScdvGK87zZVCFo3rmvMVo4YUnTCmV6r6L9fTVVwpsp3DJ9ciFzd2whccVvzAUX",
  "key6": "ZQobhpkrHZ4cVh9iRXN89MDt4Z3g7diHKJaQVR4qKT16t2gBhZ7itQpC9U97HTK8STg456EmdXHA7DnzYPC93Tp",
  "key7": "5oToH1CwjfhSzyNhjmb8bAeAPvQ6jvP9tqeRwxpZ9un3eMAAyZkfVpw5uTnAHUa5dBMyfCqx4N66wBjFrbsF6XTK",
  "key8": "5Ja7aLKGDxYdRRecYqVv53HqhDPaVbTz11rkwDmKVyd2R2zbxTD5CskYcrfff1hX9hFfWYxX6sBnv4EyyftyrgFq",
  "key9": "xHd4VdEprYkHLDv19Gw6RhroApU2yrQQ7qbiwXUnwYFrk4RbPTaxfxNJekgXearLaDy4NVuVsSdYTzkQiqAgr47",
  "key10": "4YMM1mPtfQntmXLgt1QU8oSsLNvtm5Muy3LrUkcZZkDt5rDNGoyTLJGn2zi9X8MznkJfSBnjq6HyF3KzgYBd56nb",
  "key11": "4yMbq76HebVXrJ74v6G3XkWiyjC1Jug1EoYByREDfy8pZ2eKpfySg3nVuecprNPV3PmrfRHFJLs8TVhdCWr5GV8P",
  "key12": "LS6ZqRfYLQ1K2Y1fkSM73NyJSvMJ5JNhwu5hfS5RQcKxspLuri9szG8M1oBTRqVDQR4AAMto44h29bryN1jzFTh",
  "key13": "22WTKGyydWjJnV47iYkPG6Fg2NB4UZPYskDUVvMFUpFTo8r85AvgzW2tLEr3yzkYebzPh6yTwPdRyGVswSkoma3v",
  "key14": "axNkhw89yq8cvH3sbdCKG3BMd5Sei21gD8qYxiUkK8UjCdYKLhabdQqE3UQHSXs9evbFqxVY9jQu2trMVbd86Jv",
  "key15": "ous39PWziaCbE8kstBsuYkpQWQ6oRAQKpABxAGxTX3DEgnZEC877kDB24JWvcBMAvG5JU2MBgxVgCVaTRrBrV4S",
  "key16": "4GbFJeajfEpv2veQCarpDfsBnzvXGdoVV7ThUx69WeWdxLcn7u2EWE6omXBS8gUWCDrDy6hEZc5wvHG7qUGHzt7n",
  "key17": "611QxHC9jt6JUCkid2F4KtrUxBnDSBxLE5rwMqibD5vwZydtTN3joT4PE27i5Cd913MWSoW3FBF1KzRnrLPeQDuN",
  "key18": "ogypT7XvQBmsFBeUvDEdXNKwyWJWWyoe3f3HiPnEtasGU5z9LHboLX88sP1bRGiunR3CWzXf4tN8M1w3sEGC2k1",
  "key19": "5Suv62WQLScD1Gw5kJMM7ij4F3RMQggKdNbCVB3oxcNuNUf6PRip1tBTY1nazZV52YWtvEx8ccvAjLFhuL2RPaHS",
  "key20": "5p6s3QMWCrtBXEGhPSKW6PBch1eY9nto2a26mZJTfG5JmVi5KjLwVxZsGi84ce2cAhdPLoUXveX2EHAhaMZXFroW",
  "key21": "3apsjN4WNiPCroDk2yUUTNHicuZjE8iXJ5RkMNtahvdKg1o9m7a785ib8nzEFe7PY468NmbdpDga2MJSRsyj2Pxr",
  "key22": "2ZXb5g5Lr9fZqPhNQRJDnHHeiTW2UsSDR61wTsUihBVV1M2d4dPf7gKwGDEt63wbBqHZTMVRFRpTPvBBaniXisCx",
  "key23": "4VaB7R7aGneppEjifxr7DexRmLs535gJTT3KkfVXe59S8YryzFkZzdFqCuDtdYg5VKUBzriGV5MF7VxrvPXSaGnM",
  "key24": "3JCEH9FtDaP8fYEdVHW71gyuVXgYzRvqdG6Nb97CquRJEA1e5DXgpG6k51qCyVC9LQxxSM6A99JdqytjJ9NknK93",
  "key25": "5iZYETNB1BFQkbc6stscEz2rAzkHSSEUzoRdCkqVX45FvsdNRpFxTaXwBCCjD5qRn1h6kWLaD8CyPXE2ZVwpCN7p",
  "key26": "w1QjTxjQDUjAE28jS8EjMv2mLEHSRhDpownE4khfZwVeAyct58W4HtFjGoi73nKuHCgnEbGmUZVuYrji4gYezTb",
  "key27": "56kzfFFwTh5HTYqLoWSFhtgL6gvMK5CJzXjhnuZ6GiyjCiv2sU3Qbz1ED7iaQHezYLfLeyasS4xG9ETPNGQ9g1J5",
  "key28": "3G92V4Cp9kcu9fruRZAwALisTXa1G9f7K7omPUPEMRrg8xkGk8V6W9diToKDBpo4PPGrGWEi6aTiyP94XhRu6pBP",
  "key29": "2U7W8dNWsrBeuUxdXvbb8uzQyJD9NMyXPqMux5QXbR4FY1UPmpi49u1BfKBpeUyAzu1YJ6exhqsZtA9YncALKP4X",
  "key30": "ekWFCU9qi3uxFbocPy4yM53yQMMGXDujBgdL4ksFWnwr3hEpJnpzMNtewPzSkMSXCk8yXH5QAsBNbBz9yzEGN2Q",
  "key31": "W9aA5PdqVfotXcQ18QSoRo16XBpm3P1eMwSKNYwqbdLq4hJXmWnfoEjzmRzBtsjrJDAqvEARwttzR2ZBJaTmFWn"
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
