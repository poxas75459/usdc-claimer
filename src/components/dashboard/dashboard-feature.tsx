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
    "4NfGATpViLH2gwgre7yB89rgVv39LF3iAXKQsxLfBFeFsQzUMTmZo1qdsnRBTxL1sA6hmaS1dZnphfLD3gsog78Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43dmMtRFceMMUqVPEAug7Pg4hqT4bCe3K73TnEpywQ6wLjCEa7ewf4U19xsszzFd2y6Q9uZFgtyMRVApMa8U7NnL",
  "key1": "24pYtBdhNEvu9LNonws9NzpaDc44BJtfLgNabM6RJvFSxd6wJUTTiggVo19ffTVxTTU2AfLZntsk3JxN5Du86g2A",
  "key2": "2RrCBTB1GZ2E5haci9DqY13VZzPVhME9zppYL8imyPCxesLW3m51wzvfcWXwZ3aft45EqMmGDxFjoRgmG9n8ftHU",
  "key3": "2xYHL8Bar3S3Hg14k3m2qsPmZ3EguvpxvuQhMiGBPsbwApZbevAaaXshbpHu1HXgsgpAQkFTqt26Ah1SFG7HBMA3",
  "key4": "5U14DjJFSijwprWG7bQ4HERyMxUUmKgRKYda4u45LvRgwz5Ke3iE6d2N5SYKzofhAktY5ZPXUt7zHbzvyW6RxjQ5",
  "key5": "55aHqYYarAwQRPea9UhcF7SRPe7h5kqow3WpVXCwUEbpSsSQwmT2pfwNip5D4RX99RXXMPz5wMK8wrG3N45KdZxy",
  "key6": "49WwGGkMCRvzDGRz2XXdcoPvsHN469exgB1RbvtKD7xLqwzjhCeNDw9htErxoeXAPwKyy6fEf1spLLrs5c2ZC2Gs",
  "key7": "2XKff9nxC9wC1ctQBDxXDRFcHSNKBTTXypbFQB5msRVtWBvGdjmYNpnCrjfSSPCyvD78stWQi3chq7UPhvd8gjMb",
  "key8": "Np6QRgddDXCPYrWVRqXcmFiqbdJDRXe4rNVdGG956EfnAU1t4DqF2jpxKcUcMmVgZAM7bqZAzwdYueCr875Uw7y",
  "key9": "5p9tpn38ubaYCUNzTNpDXKbdXBL9tjbxtHYLTqPr8NxoWouxFznjjGgj93JvrpYCukVFRiyU4PDnDdPFztdz3fNp",
  "key10": "4swwgAXtkmfVY9SS7rXNpzwpxuMmQ2gAA9C5e2k1kUaBHii6YXmMS8CFLVkDXZzL2Z9mRMh439QNpKG1pAQcyhDV",
  "key11": "4KL1za8d1HzrLGxoAe8zSpiyBx9eGZMpr8n4VGYKZZ2NH52kKCLfyYrY482QBnqvLX9AWePUS4F7ThRzpox3cjtQ",
  "key12": "25g3N5gsbpUbKvKB6GLkxdJMAd81ivaJqbvMJq6o3XPMb8to39x78argST29x3meDZAwgSm6tC4uFcJW5g8uf6m6",
  "key13": "3uLs2eVXm3mJh8fFmduhLzEhQ6tr9N1ddYUwwX48o8iWsmgz4qPico7danLFPwDiVYwsBjmsrpSzJ7iShXB21H9K",
  "key14": "34u1PfvshH1wsBLJzUzWoBv8Deffr7xGh859ZC95xxSwk1h5xptEKZ3iwixT1ZVntkHKpsnmCkVP9dMTAH9GA4sy",
  "key15": "4EiJd6kPeSZUy2vCi5mtk7DrHb7ZwNmunHfmtjNH2rCyseZSWosv5JPgXhzq2feSXQmansiHnBWQmvShzeZ41mwm",
  "key16": "2KhsHoSv1uFHzyFLsmskMJb8cB6R5BxmuA6vdRCysTFPFFLic1A8qmDgDypiWNhQmPVzf7THS4Crgrs36iJXZrm4",
  "key17": "45DraYQF9rnmFrydhTirVCwgpyn4YqzVK8yTVw3MNdRvT6w13Uw4gKKFPPCSEHGdqxyThGZp88qjM5FFYhc9YkUd",
  "key18": "4xrnDiJSkf9GkLBtazohnbgLzWK91xZaKNrK3RKzsnHXmVRsCrdfQo3h2ihVNe8Z5aqhsjJPxFEWrAYtkewFNexu",
  "key19": "4rcCHoCikVKgJUD8YDvRAuc1oDzkkB95RtaX3gvXBWp4UMgMFq5cfAJoQYL3mVNrj5RTNVkasN3RmRZcjFYSh3LX",
  "key20": "62maicXyvpWJo6erP5dXXwEqhH8Sgh2pUgGfioRw95GormYrkXoSPaxuafPmJSToLYLqKzu58y4JbkzKmKSxHvx9",
  "key21": "gpWjJz1ZmEWiUSNseEiNq357kJXfjgJkG3VbFx2MqHtKKF5iMXdYcYRf3TYtiocBJQi1quxVRKoj9Xye6Rxssxu",
  "key22": "5XUChLLB547B4FSfYx6Fm4hGrQmPgbeLEQogYX5GaeKhe415Rs8AmWiBXgu6aY7P6Lwk6ewRY9A1gd6t3qNWwXJR",
  "key23": "581fCm9oNqN8B7PYrDTZCcvCLCtRr3oHGEow6MQmUC7QLTsybWiaXbPND2Pg9mNgFm6BP4YEASbkxwKHw2grJR4C",
  "key24": "38irqTABZi4P2jPBozG8p7JDW8rdaacYNZBU2dEgCoLmcR3r6kmmyHzbvLV7MofdzkaQPKj6Aa1pV8WT5iTXhQXn",
  "key25": "5C2P2BJQ23xzJLJ23B1Ye52dyGxARyDL5HPvRr7wNtVd4inB4tnKEsg9w7XgnF22jzE7vh55eXFtZxwFMrgvHf6c",
  "key26": "4LTnWhG5Akmpbz1pnssDAD8mApBXFhrPVdojSWkhvcWNKjofM6uvC9urv7dMmxYjrFtHYTrnAYmySujVJaPE8dtL",
  "key27": "5wwnud99rCoiQvfuW4F9Ub1T2JsuELwaaQzb5Z9LttCqKLoXgbx4StKKvWsgcwV58txGAQUBb2PuJDknu2aSfY2j",
  "key28": "3zA99c1hcEw11cJEaJgLQ7zJrERkYD8q433shh3qogn7NyRYC99uyHH4fqrgmmBweFoswGyVkJ2J9rPSbKxJNxge",
  "key29": "2Me73h4zEdEgcXCzPtLM2w1fGHYvoKsnDT7nS3BJvjiC9e1LeW1vioem2phKxEmVS1DrhqCAEK8ywmAuguXKjDAw",
  "key30": "2LSTadPQfjHhDgQGzrLD4GRSeonWVm8Uc5phMmdvW5taWnFedoxyGUkLDGLf9wjQwchHGCgjLokZr2ctAj9D7V12",
  "key31": "56b8qQk5Q8uwUEfUfuAhMts78JJWjPRgF18AWi1Z4ja9LvBsfg4YWVGBhYM1bzHndpZ9FmTAFW7wrydsfubiRmEP",
  "key32": "2Kb5Z68mGodGsnuEoyNcpfibzQsETP1jzN4GsrhKX8PkjudBuyCn2VV27gt51DWknoAEMMFDvABGE9B7xLPkT7gF",
  "key33": "rZVXi97u9JCAUfr4SsY59q2SobbTgN8EDPnjGjwmVJ5dp3iK9x5MMgJ9zwMEZAoxmVzvfh6LkZnWEZfkbPQZBjW",
  "key34": "3Wm4TDrPu9r47NoAy8NRi7HGSXPZ2fULEeZUDWeF4st87fJnhYixr2y2XLgYGN63XBSa9KbdL9ZanVgXNm2W7BQm",
  "key35": "3sawBGCda2Na3meka38a9oxWXGoVthea9VnnMbDjKRBoe73fgR73HRr3NXPnkuuL86zV4kB7bDDtvNpz2iPCCJgS",
  "key36": "5dNaNBVR4YMYZQ9XuAmdvYAJfidDnVm22f4aeUJawxpUcDVMxo9EbN2dTNdvW5aP599tWq5xUNrRbqTo2qJs5vb1",
  "key37": "34J5yok2BamJDXJjkinNy2tPFPT4VdkNfMzXeZGeVU1Fj4ZCXxZCv2z31ez7RF5D1thn33dETh1J6uWaYx9DfdCs",
  "key38": "3rX23GETZZAq2CjRgRqvKmyDrMJ8LqPJL3NajTuqVAifWTc6YMW9quu3C8W6ZEQy14RPEty6pXde7JWSVHsg7yAJ",
  "key39": "2TbZxQeAWV8HmJF6jM4qa38dLtWcKQL936VzBVNV39cBLbcheCZsx92WfDRagwy8JxVEUGSVX3MRxqEPnuQ3d59a"
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
