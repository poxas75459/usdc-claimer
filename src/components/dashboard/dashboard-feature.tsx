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
    "5rH9W9bReqcwYSyUohaarN1pBoQvKRgZBLsts8ppxfLM3s3kPKLTfdQVy7kqt6skoWBrxRctRuVv21RPo3ubY4gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYq7C9ttdETwwgpdeFYPNs88K3VCQ7Y5k7uwfSXbuaDV7Jn8z5xtj1bCfN8Eh72FvmKdM5uuemnyjnW4jeYrweA",
  "key1": "qyzkZ52jWNbipC1FQNbzwKzsoEyciCap5GA2tcfuezoGsEqFogrENLCVbkPeUh46d33UMkVVZ6e9EHFQGngxYp2",
  "key2": "5FejBsbXyrS78yFkqnRG4T5pHqXCk9XQH62YySNW1TqYucKTFY8UMMQU7rJMyEGbKAhzGjnbhxYzay81zXRKHTQu",
  "key3": "53derZFx7kSQNaL64dn9c2fwBvYc5vZTweYopZzTj3pV72v4f6GtbPeEHFe9Aur7pJS8CfvjyCBTKJRdat6N5dfh",
  "key4": "FvGYmq3pPZMGmE93cwNne7yxt3r47AZvASaC2EhW4QePTPTjox1AWHtSZjJ6ooKoifhwBsJjwGdbvTXV8uRGjE7",
  "key5": "pM2hiMafhj7zJVCXmYfAWWBZqCdLGpnsv7vFyumT328u2NP768HWjkBHS6VM6HxQCuEbuxaWJQq29kA7dK7fvXe",
  "key6": "4E45oYqUdEspuzviyW1wG5YiQvZnpf8wTsAJNuA94uAcrHpkfJKRVNzpsU4iZ8JyDEfdKF8g1tmEVLHm5Y4TjhwT",
  "key7": "xgpGYFvSEqkCJ8AfFarH1DMkciBZR2kz7KyriRqinr34e7UD2zLEvqL6TZFfZ2RqytnQkUwkGgXFDLV6CpW9Qtn",
  "key8": "d43sv4jrMkZPgJf4e9n3KFJPYo6FMH8YoW8J1jcFTrVjpvwaF551Qydzn5SQ1qCpr2KqgQmCxX3daa9sCtm136F",
  "key9": "5WDBZzeC4GgmYv5fat5h8wbTPST8HXTxvaGa4ZQwxqVTkW9cDytwMagoRQB9cz5oZHN85QxpyZuEJVBLek73F2t4",
  "key10": "3j3dmksv1H4z9DYaHFbyHFZULyzSHL4S31YpnYAqxKGQozFLXGa7xnDhDfHGiZcwcoNxvEQEb9YE6N2yogWysj6v",
  "key11": "3jD4bkRZFim94nBUcQUfvZhSsfSvk3SA91rNaWyTSNPp4ZLALKqjAB1pu5LmestUcAFKWsSHEQkyBbTCLiN3SG6i",
  "key12": "3aVQmtw48edx4u88ZZ1dCFx2eMKZwJ3CjF5umRctaaZ1JFG8us739utNgwDScjYvPJUQvppsyonkxnNSa6D8cK2G",
  "key13": "66eR8omDJmdEqtBZsRUeWLHzKn5tdVNNceuBnCervjj4PmfH1f3iuFB1kmj1ybLf2xNmQz2huAmYsAFVZj8Ape3j",
  "key14": "5wvvrAvFNNC9a556PfcYmqWdqm1Y6RBqb1sopLsLgzNuHhSWGphVvVMjqGs2a1Usk5qhduhP9HnN6sMz6mak6tfc",
  "key15": "rqBbHgVrTGooyDTLBKgd3KE4Wd5ifxNzmj8oHrYh4hVHq4Z8b1FHRMwuyeUSXLQX82odVvmmBsm1GUCadqeu4V7",
  "key16": "2krbuakMDMgKab9jn1vNoRUgd2WkDCSDBrugKgvdEgDKCWkVvA7zcXbBCweFqbYE6HiNNVsacesz8UTb5tiVmcd1",
  "key17": "58xYzxbEbkRCZcacscmppEqR3LuENLzKpoK2zD6P3813sHAXwV9PVGj8vU2oVWUkYMSaQpsWuna4hizd9qmhZ1xc",
  "key18": "51c7a9LYGhVFHCdo5qbjfBuX6vTKS7sVwu11nsGUgenBST86gVnYNDm1MvFwUra4x2m6nKAigLhm2wasoTLUAho7",
  "key19": "2vNFF8wVWJDX6osiNu1G7ZchVe5DRE4qdYMGNhKfy2AvfYFTSrYaoG89DzddezQYHYoynudu7FK5WF436AVS3srU",
  "key20": "5yENiUsz11NGJ2jCY2k2S15KikCYB5LroVJBHNzvESCQsf7MFuhiLs3WYDGVXvLFZMVeJQo1PZe7wP79FAkkBZrX",
  "key21": "jUg5DmahZaKFAgmmTxwSAJbSJetVYLJfewfH21CkzCS9Q9kMCEqgLQkZ7XK8Fyk94AXseeZFmnfWrnSh58NRXih",
  "key22": "3GQb4scb4EWUskyVHErvaWRsuHHNsH62A2v99u8th8PoW1UiZeyNyAvTGgdPPfuvMH9JYP4sF4PtjtP4nK3HpE6a",
  "key23": "3ty98p3M7XUN9weoKiHiPE6EPTZXV1Q1Y8cSvqWycZNkDnyndx8hzrHv8dNYV6FcN1PEDDu7QRzSJs7vv4EQmP1s",
  "key24": "n2exAxiZmZJzNwntzyQykYZnTGWXksrweLJaeDmAaaGnMaepA9PUfZmRQVDYemwb6FBWB2CUR98iQEE6VkhqZG1",
  "key25": "j5u3gEyRFT7Ntkrh39dV46mm3RMHgsgoieYVTfgvQpZqk1DRJ17NmM28dRDbw1KrKWmQ7KAFo4yoCY4TzaQhn95",
  "key26": "eLRXYCWRveZK9v9F5jugst1G5Aiz5yFqTWS7Hf1WRBXdthv5kErDfpVxxxQT16VhAzxqzBKidkAytxV4yxq3CFW",
  "key27": "Ryut4hgzntbkPM76N7iPxYd9cy2fzAtxEiEDzcbueCmDEcPRRQq9SxwZbWVc39TkRCmyN9TfJnYLn8aVWQ7zMKm",
  "key28": "3syqVZm8FhiyueTsR29KMeUKvi14H14stLgWe7wtJDXd7oJrhFCedDRKkjYn3kDVVpfKf342jQ9dD6yTAouWKAuG",
  "key29": "4xtnxaL7mWt83nVt5uNkHtaCHPf7LW67dBCfkpNUCCKXCWhWaabTvPXFrtrXEjmdsix9KoH9u5jj2y8rnsHBBM1m",
  "key30": "4qj7ksHAkMy9wvvMmm9uKTF8TxvemuX3KW1a752in61A3pASjDG78LmSwFiwD4suo37HEujo4MFqQHvgdseYtQPf"
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
