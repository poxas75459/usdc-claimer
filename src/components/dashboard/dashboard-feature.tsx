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
    "5eEHqj3NBBUXj1NBS7bWJyhRC6n3ZSRNgtedij7KUGWTyLi7D1sp4VzghpCJasztcNUubWGtewSeTMEJPEv5Gkgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ki64ojTGHQ6aakWxLGh4aXn6GBLDW2q7sshpgwz65gr9D6wtAHMNNaELmjYoety7oSRTdbbSZU4gvh2oxzfLDyB",
  "key1": "3SBszYV4wiNW5BC82uiqFm7AaTsr8hF2UiAQdQ7ALQz9NN1rUTLmpu8RRpHJAKphwFgRx1AoY6hV4TcWdh3U9Foz",
  "key2": "3J8pcRSC2DBK1R2J145miepjmFrQz2grYgguvpiAipFB99A4wJ3kXwRXoSu81aQpSzjmtDRn92gNqhyDh97zX7RF",
  "key3": "56jqtSoeud6o3G9R2hf1XVuqk5P5RpdrLYCxMBLCDAmYsGhm7Tey6YyFcN8eGAEwjAM1JRwYiZ8QvEjdRvZT1iSY",
  "key4": "5GoE9TZtRLXczWGzpMtxtCTeB8oGBhM49WaK5Mavi2B4cTRMSVBFKeqtsFHMhUMf8xLA6Evv9GkT8qXCyqEsQmzy",
  "key5": "3uGeS3UXT8KiSKa6uCMXmGBiiULDfXx19NYq9Jh9Gnanvt58dA64TXHBbZEEdZxRrkMRNRy9Ecm5CoWm9c2WbvQ5",
  "key6": "3nULZHtTYKwHEtHD7feYNSgkHBDNK8eeSXdRVw4WDrwL89zCLH6R4yySQUR7zuKyy8Ldo8Rdu2AZgUB3FpMmjJuQ",
  "key7": "RvrHGZdzHkrmAnHXnxJZf88fCG77JvbhEtncksEGVsxhh7BrcVcxEeMyhw1juXKEGwJqD9ZA82xaMjYa6R7Bhgi",
  "key8": "2tD5d5vPKmLttejxiAismwrMWDPP8ibb2qBw2t3a1e8nBKQjjMNJEGXvBhtSimgXDyut5TV7ogoLzaTMW1WkAZ8M",
  "key9": "4m3rgyunzZ4D21ogERswoXKvXHpg4Sax9JpAj7FZQBcJ8QoiVyHSdxfHkw2oQdkLdDCPDb1YLh41gHfScpQTeMix",
  "key10": "2ETRrx1ifUKTkJ1LNoJ7QqWSqYd9dNf9Z49YpG42ymRCergagg3pThRz3j3rKBsyJUQ3RSRna7kbmDs6Gwt1tJpM",
  "key11": "2YG7iY6kmutTjrDtDQc7pXbwgV4nNH3TkCgTyorP8MmdrN1XjZoJiHP4799U5UzXUDw6DsQKML8F13mYJjUYSuUE",
  "key12": "3n24NyqHQirS2FGkBLpug4Dn4dJcocQwuZ4piyYaR9Xg8voPoxGuFHWR5Ge3PKxnbRqhB7GeSmDACaw6UUcPeram",
  "key13": "5xvzCYaYBhTiUbWBc7jDr2KNxxxw6yuZniyv1nexP1cRG7sYic8NED24c7Nhf9nT5NXV3gWQ4qwQZ2GYvWhVpt47",
  "key14": "4PrysyeT23dXp6xoh7X7Vw8NoK2GRB8zTVrxy7PAF1pNFe8RV2KApFjnpftwueYVeEWDJJf1fJMLQe4QRrm1oJsR",
  "key15": "4i1hQKVfgje2zWpx9D8sAR6Lbx4Y7PApzfmb6iqxSV6ipyrnYXvP9eR1of4xeu95aBHnKFispBpKUhDppbPnEhrA",
  "key16": "58SGDKxStDQkBxgfqS4zhtWdrzJtHCugTpXscTUFkcByGpoDnovL3TzQJQSSL7mT6BD4AuyjkUJN4DE3QempmEKe",
  "key17": "66RFety2jQGF7k4iCWdiK355hVNE5hG62f3xuecRy5cnXubHPVZ9pmJeSajejdYNxBtjfFkEcU93BWAXvd2fXKjP",
  "key18": "5L9g5pH9JKzC9PJD3zSoECmCyvYLJXHsMt359iXrEyL9FWQxVtaWdAzVwrYfLpZvSyCUGNvRV2dUVhdGCqZkVjKr",
  "key19": "MWY6cSA6fGTMetgTwaMatFBPk9BrYcKizCY3ZMo4w4anZqtRSE6rYWnca6VjoVCwbEzYzhNAMnzvZFTfoKeW9Nn",
  "key20": "3u6HzJBBnnKS1UNXwbCrjWstP4RPoVTPGVy1saQb6oynTJQk51Yyk4uFiJkfsbGjDLecQ8gcbEXJv64VFG5c3dhV",
  "key21": "4dxcg6jxoiHMzASjU6KPaSA1gnEvpRPmCpjhxQ7jayDRS661zUX2N6UMPkEoCyFJcvv6oMv1WnS2Jze312She7xN",
  "key22": "4zbn3d4Xfc1Jg3B2wzpmJCQ6zQ1S1v9jMMbiXya7m55R2pY9RUqT7jyUYvKvHSnU31uhpbXpiZXrHiJhrJw7f9Aj",
  "key23": "2bk8U71yUsG3Gaozcq1CU23c5DdXuPwctsxh2PTeetULiDKBW72BusG6PN7pUd2ULZzWjCffNK1ekc4jYuuXX1vG",
  "key24": "5ECFW6CCvQgXqKeEH1cvYNRDpRceGTLZ9htgE9aQHub1zmWXdU6NTeFaACfVYZskXock2G5G1LNJeZP3bTZXLP5J",
  "key25": "26xSK4dvEj56qEjy4QGsJDaLMTCgroiy9cYowHBbrbW9o3o97AuctmwKcAnEMLVKY58up7kY68q3y8QUqRvowsRr",
  "key26": "2ZpXryFnc1yW6su8RVJV3RqtVFjFuDgTs7NuusnTeAjygaAC39nxWNdHKmDRVo9hmE1NbnZ9d37rx57QyQPMP9vK",
  "key27": "5CQXpHxki9h2bS43spvVQvGkpdmravWJhVie1nUaPfGMTZtoir8vNsn3UN6BrRBK3H46vrmtQwJQRgrvUGmFL1GW",
  "key28": "2uwSHcqYVooQhHjdMNVQeYMcUwd3t7ZGcLFmZm56RpBSZtX4FEKscm7VaDWs8eKe5sSfdnBrKBwwQWtLbXqKU7zv",
  "key29": "3GSKR1nmP7DSy36eXKAoJCUybkJPixRQvopUJ7U4QxwZZ3siEyUnQMATQ8UrnBbX9k9fTz5YQMGpfWwkVCpGbWvU",
  "key30": "4GaJdN42aYkKrEqA1MiCc7Z8GMHAZhpHrwnjr87kDwsgX2eScacPH4syzdmG8br44QLjb2PnJUzyNGLJ5u5mkhR2",
  "key31": "3JmBvsuEJP2EYVtinsWFCZbDta78jSdsuuZwPcvd1GfksdeMf5kyznRzWegRf4d63sFNKF5kpESXTnfWgX6zdmFX",
  "key32": "4rRvKEkfdVzVC1We8jXe96E7XXZ5usZqzLPHeBWcYydAiTFQcwbUCrk9ugzoMgakpphpg8HT2pw1UM4qM3A9o8n5",
  "key33": "m1Un1ZuJ74pM6B9NuQUjkFb529HVrsTT2sicr19AgZJSNXdWUB9hygm7bU7S33ou3at6NzeG25QWKYxi3yRnexS",
  "key34": "S58AePWtrqBTJCudeHVQn2UKcEDncRZrjY47718HKyFEGgsVsSe2KS4TfQZEMrXcym1nnDffS55DE4yaukEfqAj",
  "key35": "3isQYKcKkYnPip6WmEQhWUniV9y8uidCFj4HCc4mtzXEYDYq1PnYvE5sq7LnyEyaSskdrFfnUgkVNTzJetuFNK1y",
  "key36": "43gjjFTGkYWGw2KFzxWvVKNLpoF3DiGCRrKjVDgymLmHWbCoTbLiPxC64rQdSDRNfJ5gjMRpyfWT7X4wDhiPQJCo",
  "key37": "2kbruRPmcfi5qavWespvtFDSxs2TMDXRypqDNeqjnYHvivxfd9bXYTkThtu1ucFFQRBdsKnWxXwUUywhwYsZF7m3",
  "key38": "5sJZiv63BoHq6a86pZ2um6DpKGHGhdBDpXdMXhb8KZtBRodAWmKBCYyQkw1nDdMLfiMjunqgmyp5tLSCRy9M2zAj",
  "key39": "3AifnANLB1B65Rf2etsVrDcM448A3BZ5uNRVXxCn1MCUfSei69bseQQGckdveZeNQfFMZdvhEyegN43Ls35hoDLA",
  "key40": "34un5JDm8S4KZCvUseNuS99v2h665SPhbfgKVfdvDmiGNYEc55nNpxAsmvynaEMSfck1hkBkDZDiAw7m96hJLSR3",
  "key41": "3Tt1dhsPakehodojKk6GKg3DNLLUeWbw9SPu6H2wsKCZBvDSeotCqG5Xj9jd2pcP9zsnUp2LXHoX5sy5t3WMryN4"
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
