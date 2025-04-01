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
    "2ACbs1ukAYfPRcWmhZMonuKz1GzFis1w8xFJLRKD86aNEk7mr5pQ7B4MqcsYPuZ2wY3Vnxk28nufXijMYwAKN8JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niZWTaGRdisytG8F2TpvbLh1PxT4qAKccjALNofqG2qrgsR6hzyftGX2wXrPEpXGdC21mgJ2LY3MKAh2c9z52FQ",
  "key1": "ijtKB7hgFT6sTJGPLyER8A4HVYENLwGk8yaTDrgUdbeFb4CsmvAni2WGSCqxKvC9fwhzMJFfP4cGAPozJcywNSW",
  "key2": "4gvsYKS3S8fhH2WRdTgs5i3t4ujdqajvvt7xc6BgkreKrCShv8PLKqPBpfpboeUKw5DSg1K7CxTmJBzzSP61C3uP",
  "key3": "5GbTXv7uLqzmYtxd9dsRhGmWej9ux6HdHUGnDVPTUyrdWfLsXGN4jBpTymRzgRFkhC89LVGBrq6yHpFXjzc5yRWq",
  "key4": "6s6FWrxEWvS9WYSZXHDJCxZkY3oCvwyBgXRQ2JoKEGc9m8Zwd3xsmnAbVPxwaMEYb6oEHeZkPKr2d1cEiFASqTk",
  "key5": "4DoLdiK8GLyjXFkG4Wh1D2HZ7xiu71tddupCnaN4AaZcf8H23kj7rS2ZPrzjSZwUGrupAiRRFx41fknwTnjeXdgo",
  "key6": "56GwZaS1c2dyrsdPxWxBVVX8jELw6hNrwJafrwMQLro2HZ7RKzQx398Yk6oVNwAgFJmcTKREGYoZq2pDwStCuse4",
  "key7": "2scFDZDY3Eanw2zSmGrfYqQbVKcdujEdvcsfqG65FUbdJdtrSkW9DCW5Sqmd6FobVUqbE2Fvy3cLsEitEs92zeRa",
  "key8": "WR5vSuTD743cah6oWAq2SBoDXyAxAuS3MxejKJDq29kAK98rarmdPSyPRfFD3qgQPd5c8GRU325ffkCLDNkZLWx",
  "key9": "34qvRiAhNeX9Q54sT88zKtkaPXE7EzLZehcYn8DdkEt79gaQZPJXtdck9qAC8MczKijLoXb3Cwx6Su6CYnnEYjFC",
  "key10": "66YAjiVUTFGqUaJznSeD9QF1aW9f6YYmjZywiuacH3vNiD2WnhXm9vuufe1QcC5hLCP6XQ3pdbJm4gDb8KWALr7x",
  "key11": "53Xq7mpPrCrToyD7waVTv9GBCMTAGXb1cf2o9V6Bs4N6ugN64MKEpD1Zb1gApyDPJm8G4mK94iGpsAouxVw2BYK6",
  "key12": "2zCCg9kgGz9VBbEs6Rk7dWrv7fgAVfBbgTmPjXYW2UNmqCoDf4SdsPw9bbUuEeZ9LQswHetEJCS7xpRGNPEMkux7",
  "key13": "2n9Hc3uUt1nruZX4NNAapSF9eAzyd5hkG1yywMckmuL4iBXJYeZzs7VzfsmTJdXBmZBmjhGVdUas3Qhh7AxN4Xfh",
  "key14": "4NXtgZRNdD9MPYoGvEwGzidWvWc2v2NGmxVTgKcrK1vFmtQz3J4YVwZQNNCddH5d8gDHJkT1VgVK8jGdc4LcCvQ4",
  "key15": "mfUt6W1bbvu7RtKUBBr5g4pytukBMQED667hAMyR9bDTApZx2j6p3n99uYPKA4x2H3anro5CNowk5tHBZ6Cf6wN",
  "key16": "NUH5E1ns2kVUP3ZLp5PAXrfmPQs8Mp1NJWW7hRpoa2BkagqokKhoyhs7eXdRicHFyMnHFsPJd5uuYDEuhietHHs",
  "key17": "DsKiVBqxwJ5HhssCnRdWiz1EumEFKFFyER1KH5YJe51i5kSomQog2FjrcUDk3GPdMFSm3HXmyjPJjANWan4sC7B",
  "key18": "3vKZBm8Emxi8LTbrtAB3j2Vo41FqRjkebMnKApwvGyT8ZTqZfk7xxApXsbnWns8VyUVQzmwYc1BDQ9KQhV9DGqhz",
  "key19": "PqVmSRRuLAdejCtMVocg4coSAGjHiyh4Fzc6GSmMincbhutN6bVzjbz5HXVzGJJDLKdqKsdVJQHHBTNTQrfCG1J",
  "key20": "2WaFqXcA4XESPNrXwgHUYgnoa7En7VfosD1EkpekKLbXoTXuxWko9oh7DC5bikRVTHhtjZPWmQQDG638mrfBmih3",
  "key21": "46pYr6jNeiGWcuGXQUiPDzcdjUVR6xo2ruXe63topPVoK82caXer96J3ztM5dNtdwkbC9SnGADNSwTvqkyL5eN6Z",
  "key22": "2gAvzZAbhLCjFgJ9ukNamoBzmzCQRxT7gh99tbF9iWaLPk9RAREzKLDrC3Eeu3HsN1mZ9hwhdMaag2CZ5SRrzYGW",
  "key23": "5z4suP1JPrGTTGyBr1f6DqKmNEYH31jDK6Uv6G2UA5G7z2J1Z6YGQP5GcssRmAXv7Lg9EBSZuDRLKuMkfKhRthF8",
  "key24": "bj6zcTNcrkVYrJzXMtGcgTpWWr9MQSpWEwhVBmUK9vZLGqWqwLaahejAcExmk2siaySHBeyysNtJQmvaaQtGwB8",
  "key25": "3Y5k7mNJb75z1WofsV8LQ1iex573EDWUi46pFwakgX4xWyddc6VpuBh7Hpw5VRda9kJkcwUNEr8k5kfC67Jx2vxQ",
  "key26": "4nFvy19bpz2ktngYBNa9Ls3yqbPcShuLkMz3Fz2QUmi4EVsh26JaophStmSoT2b6q5K2ZSUhxbvE7iAJ7Q9vCmFs",
  "key27": "4urfxwEvqAavv76UGh7dgny9QmjHJNg65LHrTsohXbGShJEV7HYgo22KYAvwJ6u93wSogjjQBnUStsD4J8itbXmD",
  "key28": "5k7zH7armyi2F4xYoXTLBe1Z8oHmuZiBdXgDJNRp4LJfXjkixgtcBrThma3fkiuJTKMzrVRAQd3iJh68FoGUGdWp",
  "key29": "5N4ja1YVLiYT6oBAZ4P24umarZVV6LsQXrEytdr54iMRnn7WvsMgow19LbH17wveeL7HHovzF6gNDYrPTNxa4Vhn",
  "key30": "2Lcmy6squcZ1ZYsfX9Vc58pUnSUUbFcq7vWEjkXEXx1RwmVTsnFuJRzJEqhFBhVn7Bvw3VwFQXWcgh7VvGM8a6Py",
  "key31": "cMUps8WSKNapZ9yNvxLPFoAyoHL2JrsFKKAXG7wZZVis5KUyg7asMvCpP3qoihiEt8aQYgNqu9AxFFVCn9P5Gnp",
  "key32": "3RH9i6MAso29BTdwgpqkuQNgmMrWbFmqAWzVsq2b4VGsxv2ort3ypgwQt4NWeWwY1VnHvJVNaTBsGMNbHmmd2ASu",
  "key33": "emFzNdguanf9snSg6UZsggPozDLJyvT75S1gWRBFUtPckYwoUZnY12AvwcudafWLpVmDbkDQgzH76VcKpN6JXEY",
  "key34": "2Da7HAmgJMrut8q2xA7FuBukPBetfrcgiU7hofVMd9mRLS1x8WFvuiEEReBry9Nzq7eUHiZmc2bNp9PZNfHgpQoQ",
  "key35": "2bRkKRrEkoQHf6HamRzs4Ecp2Qt2NsExwyySJvnNT8xZpupLfifnXTQoLSWWpUM7NarmjgBmufC1tYJnGiHrFPns"
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
