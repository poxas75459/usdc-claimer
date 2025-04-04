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
    "8HnCNip2KT4Fw22qtY4REzPWiRTx9PTWNxkySMqRU54gE2EXyUpGde1hJxhHAQhtjATo475AdAf51YAJJWrqqBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqhtgHyidJm7Rsr3WerZYy8wutWF3N7Lou9YZeVFheD8jBaESc1GAoWJgR2JCVjLEmcJbeA4Z9VYVLQshxJun3Q",
  "key1": "4z1SRfEuMeWx7DPGsbcj5Sc3t1aHKi3RURqU3VVRfmtC5SdZtnZSgFtgcucto2seXPLSPntVbX1Ci8GVAysAzC78",
  "key2": "5eCiq1bA3xB4RAkm6nTiSA5pbpZV1iovCQSmYffFCWe6Wbm5yiJougqtvybhYgvAoRPCFe4ERVibu2fNa44awhSJ",
  "key3": "4f5aA1pBgf9TuqhFoywkMBmQGJQin3iV9rekcngBRSUZT8Pr63XjjFLSBSZ3Tkg8XtyP1i8gRtJA34uHYKsNGRf8",
  "key4": "5vzkqdTipouNYqJZRSreEkxZEEdC9kQuWxcwT1kNg6RuNzso3cTLeesZxSM51eiUHzSQ4KEH9mWxQYMM8M8VZb7G",
  "key5": "3i4C75986LLegquVSoAjp7SaWMaV4iF6adtH6PG3NULtMiBPEF8kdVNNEuUq28A96N6Keu4AjeWPKuiAB8s1NSCW",
  "key6": "4zCqfZM5Pn8YmeGrHfheCt73Xdk3Tsf9E8SMwER3dLwpc8hLibMTzh3ypQUypi7UPE8NaShkMx3zFHMW8QhPM2Ra",
  "key7": "2mZJ9QHhyCcsFRo1bt3Th1CKCHZFsMEF3GKgUpkmhyxw5cWrXpiwVFmAyQABsemnxtBA7ZeU5CEvXwJxre7L6C3q",
  "key8": "2qK8WGvVU1LXZXpe2ZfkHV5wyidgGDxjjtJUctHBG3Uied2zV2X6GQELZwgPSq4fTV4LKEQRWhc6Dq1KxhGmncz1",
  "key9": "3YWLMUmpQ9wAN159j8wfC3mAajTaEASWUWdHWEkxrzmfyUucLqKaM6iv5mPNRwMoyf2zijZbBDxgTDVum5Ripr8E",
  "key10": "uCrySEMhG198w6XjAsuMakm6EYh1eNqWqPQbUzoF6xjyQZWLcwbq3G2BSdJc7pxjjXhcbtdL8HNywutLqQ7eND5",
  "key11": "5y1ppPrNiSMpXaa6xpbDoo5jRtK2aJFzvRvsthdDGxgfDqStZCKQrbEUciVdJE3th9Y8xRuYgmicReGMyg9sTVBE",
  "key12": "3BoECNqwRm4QtRrBN2zzwsQMVNaEcrvzhFRXrhAzZBDAZKYs5cwBTu12eimKqVDumoPSHyGHVkWC3qGdkiK8BHJ5",
  "key13": "5DNvpnNcTBxMDxtb3V5msGVnEHGaNF5GkZuQgDt8CofdX62YYn2LCFM9QXrwzhxk3hDsNnMyUx8B1kqGbkzb2AzN",
  "key14": "5cE2LpqdZPBLcsJXEwru6XiAhbTYuifLU4iTFfYbiwYVKNnoHZmYhpQqfo38kKDXF24NZTKYfANLRudcCCTAybvD",
  "key15": "3P2u4bzyXMsXphWfHVbuUjzSSZV3K3AG6hdWe6p2aiW47mqJPXwZXcQAu6Xb86yhZkhvies7ESaz9Hi9oQywZqAa",
  "key16": "2ULkpuGEii4NZaqoruAa2BoMcp3PmJUajvy7rgzHqg4HAf6Kc6Zs4gmCw7CauLgMeiVYHeVPH1aHek3sjypjRCut",
  "key17": "2F4fo3KtaMKBju9RdvoLxF2TnDCVp5uDK2cvA4LyhymLPeFoxEXG7q3GELGnUggHh4S5pntYqdgn7atdD4XSBs2u",
  "key18": "2XrJ83EpXzG7sXCmTh73hTmK8puXxT4dLQ5J1pKKkbZ2pQwSEZEUuU3mGXcs75L5XgCzh7neRu51iRwmYsDZ8FRt",
  "key19": "2SXYiJVSdGN1ZniZX3PFhixyYsb5P93LM3WbEzSuBtcx7mRCJjK3nMxpiYMHEUsK7rP1zE7AJMRP53JJt9sEmHPU",
  "key20": "2HUDXh1PYXmG1jySRE4rAeSA6p2xrsrE6QAacjqNzvrNYyiGu7PNunUvXoYXe9jhwC2gLC24tqu2gVtBeCUtTA6s",
  "key21": "5UUL2TwFHEt9rsnVmXifo5pCtHjHGuMzBrfHvpnTjD1wxFQZreLBZJ5RU1ccsDsQMDUKaJwsDCP2ZAN5fnraMhnB",
  "key22": "5dmmygajcPdHAfPbfncTGsEVGonfh4JzL6QJtNJxWoHZJY36VtJyJzC2nKYBTLJgcQeMcwsgfsv8c5bGZZU4bTHq",
  "key23": "5PkHaypQhMELBDr3ZWwfh9JrjVgDbV1j2KbT2zvLBCWJtxxYZ4aTVVU5RuLSB3wd5x3shMV6Dbns1aWyGvpgyR13",
  "key24": "5XhVgSMDTFNAvuqhdKhDsiTdS4aZFc5Mzf2xJNArpp7YcJ6PZXNhGVQj9GJB3TEuNGS1pk9xD2WnR4yPhFjN2oFZ",
  "key25": "3h9xSF1oLvU7QTqAC8B4KX7Bbx4qx6hWEuteJM2cprHkVq2EtbLWRKvqGW2XBUSh4oSEfVZsuS7Qrqw3K2xoCYDh",
  "key26": "3qcDDwibX8k3vfscKK93hmTsHQ56wzc2AAu1YPCx1Vtw1Dp7fhpyfJVhiKxx2E1oKy9x9rE3wK3DKanDrTMi8s9j",
  "key27": "5bwvdabASn16JLnEWhaRrXosHPGbJAgFYQwE1d5Q1pWDSRyJJgsxXAE4fkTghFMyAjF7vqbsggWqJ8e6xGGrKWKS",
  "key28": "21An23p73A7rPqisbvGFQvXzx2LmAYMfyZxrRwqhFx2FDL4y8sufekohb3tu5xtiPDC8Jyc127VdCL6iVrhuzaF6",
  "key29": "4jgh3RJH3mbyxQ2x25ZyKZVDSvSzr1jZiaEcdnWK8tNdSUNCkguxAnU8M4trX6vUx4Toomcsfaih2PHN2tM6zm5T",
  "key30": "27wjp2fuw2cgh2NKDJjxnMpzrQy2PZaRSGUiMnaNue4JDxwKkUiCEjdjn9e28C4U3756UijnTkMeFBRxjAHpgY1W",
  "key31": "2Azzh6CzvzKZ5H9sqKCcd15Kst2EsSJd2kpKYvZa2fFjdYf9vcv7o3xJTXftuEhMADzKLNCPGyST5ZfaGNPANeGx",
  "key32": "2u9vRkH57UCcVvG7v9qQtFhnxMfPXwVSX6E53PQ51EkpgoHrvvheEuTJAjtUwM7UR2Y7i5WMoymWN4PFa81SnfJt",
  "key33": "8mtXiPkAFJhMbb4WbyKFvaHUy4rkePGUuwovqRTDVhj6zZMo87AegxeEj52eVpbqxWvcRdfwghuHLtHuKWAp5mM",
  "key34": "R5UenVtm8mrEp1BnyU3YFHMbrez94nffsKVRuEhXzRFxm9AUCCyQw8bmaQT11VBHufcR4zDHbo9QvBaZ53ZEoiT",
  "key35": "4LN5nqG8NiC4Vv3dxKeuddJXp65DfQw1wvGop4amgokLWM5bmnrT5q2SrjxBj4E11kHDTgwhp42cQ6xh3mPAzLQm",
  "key36": "vzFBAcvsuqjMeJtmxWnsodrFcpscyrynj2KETNZtQ7LCTP8cEE9cZ5Tk5QSyfK9hCCmG686CJmqUrwRYxER2Th8",
  "key37": "32oU7bDZ2tuAXSpzh5YE9dbH3rL69xnXEDEaz3yDqRVMH4hZD6LvS6CxUkZRimgUuHP4Su3iueR6X2GfSd9bA1Nd",
  "key38": "yKVMxKaiQTgN7sSu5DeJr8DYTiPEwsquBLsoCLrXXENu8ru2iTk2hNHX6aeYRCmGWQz5hGHJhxzHkAdevoxGxqg",
  "key39": "25zXhmXVquRXC7thiFmBa5Bn4JdU7tSSJPEZKhVr9pnxH4W1HG4dAphAhKkcTcpXTXUAkMJdtDAQfo9wwS71qJhf",
  "key40": "59S2HoVpi9r85zNyvmZMNPeED1R29wQZkgg7HYC5EtBbfu4SkXtwY5MdfGNt76Xiphbrsm1EpFtKGtJ2efXUcw3g",
  "key41": "2bfAXF6XwdTYteNJxYTe9ELKzW1XEPJPD6hyuDTadyow9qsJ1tZDCg5kS9xsGSPVvzeC1x3NEA5m7i4JCvgqoMMs",
  "key42": "2cHRqZyKhAJfByQoukrfkyX3v1HRGA4CsocTHyWP16AchNVcZcKunSsd3VLQJ1FM7QYWzwrBGWhJieLNyKuiZT1c",
  "key43": "32Q6b3pS91BJR9jgC8fziKn51cHfi8EEtfp737J7mVkH2PwdEU3mguzoXonzWJKEKwYKbHbXQptcDdWE3T2o5Vmr",
  "key44": "GwAaNWarbVTiypSZumeFsud3KuCeebgcDK5S6f2XyjPtvkLpyDuXNSPhkSBD5cEgriFn97as6xgoPSt4oBm8EMb",
  "key45": "65SUHAzNn6SFsdj8WgG6EMM4seFzNHDpPz5W1uFJBA7FjMeAxRntUbk2hrHAFn9vZr5KQKPyxCaDjVdKG5wyKkdt",
  "key46": "5vTQ1PydfrAKePB3KjnGEEopG8gAmQiGiRtpBe21nfHnWTARuyMVJ6EeW7vx2ZhJWUGUn5ofow3a1XJBaDdunMns",
  "key47": "4VVNcVfVucycSDNdVQWWayPXqg9Cfdmq6KzsoqrYKLT13VPJi1SE9YZmYBtpUJs5KfpX7tuXhutmRvQQqDiXFCVs",
  "key48": "ZtJDia3LgxXxT8kdR1KTpX37BQhjEgXz8L7TBqNnZWUCdsSSiNCY6gTQ9mNp8JK3D2VpP9gGMqy2mRfyjXo9uhZ",
  "key49": "3ZfNS4dXHN6BakoPGUT9GjWjWgNR43Z4KHnMuapnqxh4ebDBQGMrDMgqaq1mKMZaxfFt9WD8vXpF6ig7Q1oYZpKv"
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
