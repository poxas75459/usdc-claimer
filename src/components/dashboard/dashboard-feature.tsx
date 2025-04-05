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
    "5McgbaVMTPLT7ZGP8EecMH87MCJiLopVWj1AoxcyAVEqtHtERJJ44G6ADxBn5GepB57DLkHbA5EZRKYqzFCDnV1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zx5eDvQLEXkkakUKukwBXpNMovLAhW9vqbCUhoqYV19P4EDMiwwqMhuEVxwAi8eNsNSwxDU1pHkbzVbHqjvvWqa",
  "key1": "2uetdeYHWyRYpF5fs92JAELLE1rPEs3K1qMERz5ssxTAg544Qx7eQ5DCFSkbeaztoJyV2u6HDjbZauHovsE6EiT1",
  "key2": "2nUeWebfN27vv1jL9dFG7Go5rtBJDCRViqSYPLxjrcEBU2dRwRxxv6Jfiui7ocAJzRyKqRLd2mHAbNJrgjifQ9zA",
  "key3": "2dUJH5VbJ8oz4f7dUkGdi2XtspAfqVb7eTV9NscSnxsCG32LM9khSh1DR55YXCQRpBMgCbdqFbo6pabWjgDyDccL",
  "key4": "3Tc1nkt5HAMrFG3G8doXJdzUrcTFp5PV4Z4vMJHtCrEBgBdmCPqA5URBQYE2jNu6EWL5SfTp3LNjG2nfVP6aK577",
  "key5": "4gdAPM47pNfwzCdkTVpea3Hv5XGTwrgLTtMmtJHRGYty1N69b6S4XN4q1wyU4mPUfQzgVrqvUgqmUtgAYyBaJZSu",
  "key6": "22T8NAyezoybm5vKhKT6qpLizmCYiSN4eZpmjFgPzhBZitjPVgGtqhhLDed5QmrRx8we7oyPbhBv9pGQTm1GQfov",
  "key7": "58qZMRSmcuVC3FhnsbgvJ99mHB65xbDReTvERFBm6fBFjd4NbTJhzu7z2SWDVpUccTM7x6zb1YuyKLhsW6rQHVJD",
  "key8": "3eQyjKHuMD37TGtbXNDYihMjDfTjqW12F1rzMhAHYuJNj3LUEHvBDeyRNANdK3myZaNGhcaoY1EewqKM1TYb4add",
  "key9": "2NSgJuyuuapEitVLY37UjBtJYoFbP95EVBm1NeyWkzeHGsQnju21gge5upqg93m3o5r5NKWEZAoQUdZ49mwhmz2H",
  "key10": "4wQnhRcAJeiuZ7J3cdj2pHC21DjfGu52MBczvW5NA9Cgo6FxLPdWGyDAPhnLRpty4ZcYkp78m1FBC2GqhRZ77pRU",
  "key11": "3v9kZLJ45s6omAWXbH7J4uUX4wmXSciHFgs9Yw1HyqxET3aYJMNNiFm3ai8BXYfB8ebGPRzfca9dMPUuxu7H5wM9",
  "key12": "2GJYQJKEQTX6fM7aAz4ju6ZhsMFDivmfqUv6HcDg1H6iAVaYFCSZxo5PkXU7bZFoHxnQjgqFn76jbszBfjZVR2Lf",
  "key13": "4vf5cyYBgAPDDiV7hLtNGF9n8FACz3THwAJQC5NWNGPs4P2hyUyRidpF7q5dSC41vL7d1GqQMuztaW7bz4ej8yZ2",
  "key14": "3gZri87ZwdtdjG9QwUD3S2N4XsjfMD4mafNdVVTsfEC7jJJ7dArF1YEdZexpsQ6bz9DQARWkroezc6VVyNq3KTtN",
  "key15": "3QE2dUNqLfEW7xeFnxBbbFsuYmuf594R8J6Ztv7wiYxqFSpqbf2aGtPz1hP35VS8pyY3i2QiE8uZVuxHk562Xttq",
  "key16": "5cmijzMZUhrcf5UfSkGiqpR3KueLdKAmfnBLu5JmaR5gum7Kvpc1gkaKwbihfBRW6UffMHKQ89bgt2PEPs7VafNi",
  "key17": "3iWSBFtktRHBhaHhLTpqcPoVS5bmT1UqiF2bSxFqX8UcbmP1MCTbmzAirjCbLvJZhHKEcBQSd2vizW2edWdNvgZ7",
  "key18": "2v8b4ux2N3PtBJg361EuxVAESn6uKg5NMB5c9bYBdtosqeHxAC3QjoZUxPVGgAhPcjUFYjkgWDZB9oTX3b1KTEPB",
  "key19": "SPzCzXiVgSx5yDuryACoX6QirNdTLpx1FE911HHrba5v6ueSMjWMdouvgffUd6pLg2VaYfeBWyB2xhReWPsUunM",
  "key20": "4YjPVxAA7pSj9NDDi3wFKVMh9SkSMZKqqUV4hs6F82dWbrTH4ku2DR61nWeVzTQPgqwtJ2yaptaeaUt85zEtocg6",
  "key21": "384jgHdrokjJnZrLuZAuAosLmeiyd5WeyCe9A9WMaJD6ne7e7KPQ1z4w5JrhcDf1ZDVQgAEipNZhGWk8tQCYdCdF",
  "key22": "4EDCCqGGBZyWwaUfD4E7VYmv97sGV3GA4ABt8vaU3Fm1mHWJA7RP2Qigwut6Zz1yepz2prxBmEtqvLqXQqNRyspo",
  "key23": "4zkcDUmFv7cHoYgbBVu1b27kRaFVgaQiu4sdSc3sQ4XAkYgqdzxLdopBC5T7dedVriy59XJqhdnNp7DWQTZs2gBx",
  "key24": "5vgYRo9TexP4ahB6jc4k9TqjwhYhWXbYdPUCWWxEfAHEkmAk2JrywE16wTiwUm41A3deNkysKDF25263fyUiGCnG",
  "key25": "2xuJcao1cZMirsQTmUx8SQEYs7gJqmXvo4j9nNsTPmEYEKtfG3g2guvnHd1yzJ5iGG329DYHPz8aXUhSHgAP9cyi",
  "key26": "3C5hrTfAdCBwfaW7vJDnCnMtHcsanDES2qM9c9dfPX6bDWq7rd4Y7oTRoc57xFss3qncuTd74eLa44FQyXcZt6Aj"
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
