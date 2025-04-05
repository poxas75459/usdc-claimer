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
    "2Lf4AmSAsCfAossmwSgC6dmCfAZnwpTrGWKycT54LhvAj5jNsWoMo6Mz6Kd2EwamkfA3KmpNgx67wAzva8SPouW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wiDHMjCbBPqBhjEnHgQMvhdFV5GaTKNd8rb5Q6fFk4xZfJHUveTRrcUqo5nwkqt1PKHEddvdWgkwLkEn1fCLvHo",
  "key1": "31LYrdqKMK41aY1qzydCZr1UtdJnLSYZSPALBtgU6FEFgEiXubbTvXnsQsFQW9sjsV3PvVFWN4eSJBHivo2Rn8Rb",
  "key2": "52fx5ZVPkMZuE25MktPYgPfv8jusfaytzMuHNTFz78UvPxy5DybUPBbCbxK4aUQYHQvE227Kxb3zvNg8kydL28Cd",
  "key3": "2oYQn7DaGhgBdJgDvfrhYDJVuSonfweashyD5RoeXWbWiLgHfofGGFMrT2uXz7VFP6R2eEtusmtEk3HB4z3tcooq",
  "key4": "sRqkJVeFkvKWaZKbw17Z94RGkDKmLyzgYFji9mua8EG9T82A4StotEXoQQAgboemuGCaR1Ja8ZA4AERGgqNQbac",
  "key5": "3AkncqKPWgkq1wUih6zpoq5orEDcQQLqgchoDmsgRhhw377UDjpRosKJ3Se3QP6rvy5MPUYgkWkTwZHXKSkxLezT",
  "key6": "27o6rSJYRMS7KDhHLCGwQgFCm6jzRCYSejDWPNyxn1Hx1jfg73RM8tzEmvZRWzNeRGZ1cyKmLbioJVhK5x3dqGkY",
  "key7": "58E1z94wu2sCrYe46JjRmPh3HJAyzdVpV53rWx3CEJKoeHnd8Yyqv7QXx3TXZVgpRxUvhipMcdPqgcT6XctpzUPP",
  "key8": "4Gv9L1zLAPfJQ963HC8wja1HczbJgHQcQzzh9n1YE24GHEHyAfWhtqhuuRfnmprWfiEAga7vqQTxHT5ohs4ncstu",
  "key9": "3hAFHXrVfNHdV66uh8L2giyqnLcuxAkVieTxNRo48rtTPnW97G9x9sDbZzAHpJTr2tVwnEuWvy6SdgYdBinYsvDn",
  "key10": "3XdiZpFBbWBBxWDWCpXNFiQiLB1z3dUhBebkfBo1EupEwCDefGMaMUgHAw6Drcieq84CEErEvXf5gvYq2GzdaHzf",
  "key11": "5hMcRb3hAqZ5vNsk2vBHjNbkZJSvkGDo4xSP2azasyJ3oMT6QkGdXhGZqjLxpVG2in7BswVKNXYzNF4WvBXEkejj",
  "key12": "4tQ1fZVkrhgzn4RkZxyd6mtJXUyiyYiQur8hndEudtTqtqJCBE1fHeRXJAM9Wq5fZNTHDks8MAJhyfahTgX6tawU",
  "key13": "43muwTyv5DP9gHVSbp89a5DdW9LoHJ8Y4EuM2ZP4B4WwcFEVZR6HhJvvDLcpx6kBUCfXcxomd6cBDXYz3MrwjxNj",
  "key14": "5zqDJf1Dbrm9X94Pk31pKiSknPGp3Y5vRx5VoMujpAv151pnLsre8n16UpCTvf1Q2NjMRVF9345ur4he7by7mATn",
  "key15": "yTbkdQiwM36XHsSX3PNXkBZP4H4yfcsXkdcoCzswg8ZfLt8a5tXxLunFeRPQxwbRuueQeYD5dXkk1W6RZq89ew6",
  "key16": "5ahwdc4TrFobqKoJtbXgmQB5NPQy7BqFQXdFfYZPV6ovXY1d4XyWoLGn1n4WNpsyJseMZB685ZbBtmLNdEK1D2hL",
  "key17": "3zBG67MmFQL9mof1fpaaxknfgpgpXMsRrPNY31ywmRHh4Vtt6i6RD3H63ZcNo3v6r2AxnYgjTP9nZup4PuNDAQiU",
  "key18": "d4ABSbcxkGMhrngrXemjSfi45ymnKxY9WyKpdtmoR4U6vNNo9uf72nd3ViCb3SxNECwDMHhgf7wtX47RQfkGQCG",
  "key19": "3DBZSv5BpBWErNKcSPSVJZ4gShnQzNwX4416x7QQRoXicEAhFnpmxbjSRWELY65PsmK8U15QsPJ1E8f5L2FUZfbs",
  "key20": "YUkvwEhy216exxMXLWB38KF1CHBHWaGjWRaVpu5PNoaWzqxW14uDYWw4RusvJgZ749PghRbtoSMJiUHq5ByKdhV",
  "key21": "57edneEkqMUzD2XXKicLtZDzk6Dk9BJDopReDFiEbAStsEVGqgVfYmjwcWd8hto1U4yrNV5ejZt4RJL4aMxRxa9J",
  "key22": "Rqfp5nsu31ysi26u74iHGa82y376fHGhymPt8fT7afAVkNeSc9dZgvXFgYHTBZfAGV6UeuwmTGv1tw6fNBMV49D",
  "key23": "9TQMDB8RwEgmRgm2RquTXUsKXyi77CGMfR6moym3vLtW8W3KG1jis1mxFNdrzrhbNAsDnP3eegfrZrprSsb1y74",
  "key24": "3nAXNNe61K9dfBLJzFhnUxFMfPTC7GCGRPzWoFVDC6XdThRLWvy9Yxj6QL6fET2U2FZoT7HQgkA6p3Fwpb38xEvh",
  "key25": "2Db2Us3e6HfWr1kkYo6KK34kwgrbwR7RDUD9KbsudRRK5xTnnAqNNkHRekCyHSGkRUVsqWc8ckvdpNGA9yXYn9wG",
  "key26": "2iFFPD2ew6ErbUZRpSASwgBpXF7UVejNHpWXgVVSkaVQjcBreTz1SHbC2Qb5mKtQVzscAmse6Mo6AfGiGPX4r8eQ",
  "key27": "3jwecnTG3VztzBp4gTrYBioCJpbeW43fDj1CPCbLFhAcCuT7dq1JGFYHvN41D7gDVYeZjUJWqXHry7YVkPCdb1nF",
  "key28": "4dzdhnEBVNixHVZ25E6dXNQQnDog5onuEr8BHfSmaKgwz12wCnYkDsbTjie4VHkk7iBvVbtoiF8ybt5su6tVFU1W",
  "key29": "2jVh1duapiVt1Ekj2uNFh1yWnv2BupK6diKFLeYHQmS6rtYWtBURNb9FuSxXGdiNHZvkrzodNW8vQ7m3qpWBgynR",
  "key30": "5YYdHghYZVcQEPS6JQWgE9EnMRtZWe1zqgZBBKAcMac5jBZugn2yPSK3zEX5hitdHeWwdSfuit7nfH4UpVtiiG6X",
  "key31": "5W18VHcqK6x4hRWxRZopWsTEJLjzMsX1BaLUBDTteah6PdVJMePuMRxEHPdxtBJ3YxsxyDPEbA1NbmLuynjU3kff"
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
