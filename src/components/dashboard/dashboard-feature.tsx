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
    "34MvJNpNR3zZtXNbS3s1zpeRuKAr17abtftXt4abZH6Fv6NrXBwkqoRPdD7mv8MSXHAWupTGgW6Bf3YUe5CjpDiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQrAGeCfSke9NnBXRtfThXVUwsgHyjYxF89Lzda4h8REv4r3jjTkQvMfb91pP7TQgYQgNM7e4SV3yVtc7KyVuT6",
  "key1": "2MbAj3TmK3yitucMLvQKzujGiDv6bhzXxkjRGAYr9hGcTmB8HAXQmR1Esz3uFVdcrpZyzHjbNuXKF6t8bLCx2rWb",
  "key2": "JMkwVKpPSwhWbjdk6DD8BbSCTRwQ1oU19QZnuPozmVGtSRTYzFaEYtkKuNMZNzgdUyUEnExGxcX57bzWXXHtUr1",
  "key3": "4Hmp4uKptso6SBWGsVNsK6Ryq3EQr7ME3xKtgwinmTKuhp5TdMM5AntmaNYvDPkJx3W6RV96EFQFR1hW9orssu54",
  "key4": "QrRLg7XakUhGQsY9B2xq5YjUUNNnCTuWyLWa6o7Gtjs2ivVK3cRphf7Fvf6WbjSPQs1TFoJGjLcnFsRi7bwGpYy",
  "key5": "2znNSQZBN6ohBrQS95a6VMgmJwiRXkTZjvPzG9J7Dr9WPUsiKsXRix2QRcSzjxSYi6P42gUcQHudAifChwj9MXiQ",
  "key6": "4TeQ25ndpPrGRZCLkxWKBK3QEhtV8cAZhR28BALcgV3nrLoSdQ1eLYQen6BijZPubeJnF9NZJos8DPzCfpmgnL8",
  "key7": "5VyDQet6xAzAF7JNidiRQk8ro36fN3ZPXESGaTKaH2zhWhTok73zpuAoe6RWixv24XThQdsdLGsL1sPUe9184koH",
  "key8": "2YP6iL3xLy3GRBwXPnBpA73zQV9ekTsYgpRNq8Da3WBkRithpvj987tK3RYaNmmdAxhySzrcQTFRwDwH6SENRDFC",
  "key9": "2dYu93Y1TLrghFkDQA96AXWEX2Toohj2ajqvSNocwrgqbtZeJZfT5rEq1XKrWVxMaF2DXAcuDJ9kgyP7zvA8dktL",
  "key10": "2mmn5gNKV1Q8vZEJYVoMe5vSL4VYNupSTPGx4K91d5SzXaC1s7aWp1xMvWT1tsm8UdcD7yP7LdPf1mgCUgyv7tvm",
  "key11": "4D2SahdhDe94BSBiJtbDN4AuK5rmrZZoTkcb2pTurMPoSo84R3dcrFvQAWKK5CVh5aCUZEzeFvxTRw4G4WSGsCcL",
  "key12": "4ae6LHuypyufCa3sPg3aF1fZVjsmUNwwKuFWfk5j2rMNvuTRqwvrHRkyQSQGxoMfvtuTEqL4joM52Fxuwk9RjXH1",
  "key13": "5ePjMB2Zvz1vXTxyL43awQsrnNhSyXXPsbJWPHWj7WHrKU8SSLqexxepEPHEvRdfTovBWdhKNmLt1cPLbfVboWgy",
  "key14": "2x1TxAF4fQpq55YmVkZoqrHBxYbVt1DSkjPkdjmpKbGmBxWKGN31D4xjgBVT1ebwPfptUZFgn3vsEjiPS2aehF23",
  "key15": "41KDpzjCRkJoH1CNJJtedBHGMyKoX5EHQFZH4cpm36CrD37tDAiLvt9LcstwzLZodQkSCFwGb4QhKUkEaqKCuQYY",
  "key16": "4gA1s7BkX4Wv1MdpvXBUDZUqp8CSEEkg8SQLcVudKXySDZZCKp3viEK8kHs4VyJH7FFpWUiFB6fTm5gE1iUmiEos",
  "key17": "2c8B7j2qqwJBu7z5opq1bU19sWbBC2zDL31o868Fagioi8Uw3jqhjRFKxjAZ4Z8NreUDPWaojf6MWJUZdTQUqAnv",
  "key18": "2Ei6WFuSFvj3k3KxY4JJt3nTs79WmwaU7ymD4Wt6933xAvczTpiobyW81BLXj4xnndE6LvXyHREkh2TaJWgFdVjr",
  "key19": "2a8D9PpNtzZwwxpykr1KRxbVSumS35dhiKTbRwASU7xZFUFscbhyChDdxok2WV3rPcJH9HBwtJAAPvyJpoGKusvG",
  "key20": "56yN6g7ghcekeADkt6EzdYukwXkDU3TYPFjZkoo59zBAmNVXb4aaenVXF9ujftevRkHxzX2cfcPgUxTb51XLV41K",
  "key21": "26wzvx9e8ewcPKNrSvx22PQq2Dvy2wKxLpLkWR5o8pBaieDtysESUmoaf5RdvxMxkPqGRkBLAazaE6zxz8Hoc9fc",
  "key22": "3QxCKViY3gef8kZAyhgsXusvfhc9NVNywMB7B3Je6DDADhHjj5Kauw3VttKDHGBQ9s94sYqXf7EjnCZixEPH25cG",
  "key23": "5ymMmjbkQZuqqmih7Y77VXHY828oRMbbGSv1La9t63TeJygBpYF5X98hFuXyvnYdjLtmcTib7TtxQ9YX7onNgM2N",
  "key24": "34Ey2rTSJvEbxjU3BLUMxojjUnfbQrXVi5HXSG8MHALm5UqoskDmQ3PPF5dVoxSw65gpibpdWpsV7JdFUK5Pbeb9",
  "key25": "2kUapm8NPFP9p9K2MYqe568FiYYPbYQWnAVAqM1nLRT5T2o1tkL3jP1ZpX3Q5FHr3JM1qFb5dGWessnLGTXdda81",
  "key26": "62ohWAedfNPwNQwpaWdggFMtTdg8dhWVqvDHKhTSHUYBh7TokB1xcAkMXEKWF67K5wMqNnQ4S9rW5K6EKomxs8EW",
  "key27": "BeqyW8mdo8YRnPX19MeprWcD7h7WRkVMQDicvaNvFk2xhxBzuQvSedR5hhr23kKuTEp6KHXPdrXiM7RUzqMoF1Y",
  "key28": "5GSHhzvtpn21ackkEe2Wfb6RZt38RzmGZ76vJ8tW7hQzp7HJWp6iJbjmTyTv96ZgPKRMCRXjW2shvnk7CxWyA3tn",
  "key29": "KGdeUmedqu73nkgbG3AMsowSeSGraNxWYFxYM2tUuDsBVEBkpiQr433LC6e3fFz43tUCvimFxc5QCbhYb5ZKtW6",
  "key30": "2D6qodymcFzSZb1tiJF2PJgkEZPPhz29oCp1TwVgpPwVEuLb9D94nXRAbwkTMaizNkhVnsjtY42ahfan6TpJsGia",
  "key31": "5pyWPsATh9nm1SVfrj71FkamkvWSeabxsH6NKt9eJHrYo9MUGNrg8hT3Sc5xMw8yxLpJXY1b8uWHpVMMzDyxnahP",
  "key32": "3ccMn2pHCa4qkR82PnQjsxcWbugsovqcqLTy7W4qN2aZkVpDZP5CoaseU2L7q8nN3iZ2TUwrSVf9f1kPh79E1wM4",
  "key33": "4DWWHh33qxqB7kfBGhs8w5dq6vZQ4FK78FM3oAVx6X9Emyj8gjPAvdzAahD54ZWBk7SVeB8GEQsZDv7i9MiNAfHt",
  "key34": "2BZY1rSfJykU2aBXHnryDWUVQXnLumMoYe3KBK3ne7bxgvjzGwCqHMJfPB47S1dqDrJQRMwZXU3Ha6KL8enhwzBV",
  "key35": "2CfSkf7ns46PTzWnGUPXfKV1zNjDnSBL7sqbbHt12g8ocGx9mWTU746EHqVfrdn1unm4H7D2oexysDVMCHmMSnhE",
  "key36": "4cKBQja8x36nBrsnFGEJsMb7qLSdvCeJc7Yj1nbD5jKXFnbjisGhrJtnqF1bGsxtbn3sX4hXHBnrsHiJBWk8yJK5",
  "key37": "3UZdxTQtjG53y32fqNhd9jUq39XS1TMszdtNKGdke3J9E73JNzXgVv47nUHzkPqC5vPWFX7n3i9Nz6JeafPQkf17",
  "key38": "5ZiLPnGNUnVazkTu4KD1pN3CyXpbeVBT97Zq5EpCaNJ18zwu9FFkAU24zA2ZwANMopK6LDyfADQrYTZxqZKFeLKY",
  "key39": "4FeANdemH3mXMFRdptH1W2jKZ1UZ2TeZmb2bX26hRLRPBduMuoT6WfVTzANrY85hfwx6FcGmJ1vJtuUSEwUG5mg6",
  "key40": "4ytdzarPJje591GqZDYxmr7PJjzMh9yZqaNHZRB79wfAYoZfD6ZZKBjRyiQoi6enKs572iaGwa5skwnqPVcVN2u8",
  "key41": "5biHvkmrDWWeRRKSqrZrtPL1MrKdEYg4TSCjk2nP7da7EqXLT6wSrWJ6fsRv3dsZ68hEKsBTeiKWEhMYNiSpjQ7q",
  "key42": "4Hp6ZGXybwGi3G6cqZEAYvG11PMJWb2JjqGxNjBUUh2TKdKMbvaE5bpvwzX3woX6M5VE59bdBEQf7RJQrEtBMFyK",
  "key43": "4bGsPtEvGTomn1bpwYnLBPWHnAuDiUV48h2bVcqqUBjFPJMHpTo5qwziM91Xv9imMojqNTcHUW2TJP9asmyeA1Bc",
  "key44": "DGFLRJJLrJRBtvG6szPABGXvqk6v3bcaGB1nU2Dd9PfJYqjjSFBy6WdnBN1ZBDEGkPW3ezfXh3m2nWsMgfRQvbL",
  "key45": "2ScjcftGaoDRoGxPt2Wsy16n9GkZmv5954ci5oG1iGpQin6vPRc9SW4yxEBtTGV44c6bFyvtXfkU3mjuTJeYVhuP",
  "key46": "3WCZJc8SVojGQzDMagcmF89ApCq1XACnZ1DPLvFZnzaWgfgxxeCUA2DtS7xYJ4HuXZd8BL8JLAZz5uuyBALYdcEu",
  "key47": "5YxWPjHXHQm33fW1vd5xMMMZGep5BBDdurR7hnPE1ipYK1S263GJKkLKwDU89u6RnmHf7U6ZyKnkozMFydAZK6yz",
  "key48": "4v6pnaTAsBKHwejz4oom6ZVE4Ckxp4wH8ziYYLLbFT8LEdAs3KgyvpYGVaJrwLoGpf3VLBJvQRoETU1VN7BAVpDZ",
  "key49": "5zhp7pEbhCCaKperSpptka2UURHEYrM4gh4nK5mi3iY5QoT3v68qxUkBck7946u1vjmubrkA3A7PRrfs2gamLXvq"
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
