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
    "272NaEeCvwaeRoh7dAaCo7Ke22ZqTr37cYBtnwHFURef7SoA4UsQga2bsVBDF8J5Jexw3HiANEdh9xdknQMFL96B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBp6ZG7xKanAPjVsyuKRjYa4mVmhyesXcdRtGCJ9xvYpS7D18WmHNK591TZVq29jhnwR4i5f7JuyaSHk3mJ38dz",
  "key1": "5Rw1AKnHpM6TgtNBpeRj7it64QqT9FPnpy6a4tjsviYsWU1UeYuC8Zpr92Wda7C9BuXeYYnZmZV81TVCoaUmcFEr",
  "key2": "5F6cgGMaXxZBM5ihECoLUQ3TaAqk3xLJbRSj1kWUhkJfh7AG2o8bva5E8KtBTF2NbDP2CGTn2S1CJndr4xvqwEDd",
  "key3": "4umrrnp9ALHLHpHR7JJnNKKsPcF3GrBSjo5goNtDCFT1qgvUAmCu1QezXTLMMcU8Kskqi2YysRFgr5sNCGVZ6fXQ",
  "key4": "5DK4dTLqoFVtFYt8uazKHvSdj3fB3yPMxQbD8UY3UPyouUVqotyjrUukpfhUz1wT2rvbR5isYDc786fGwFsLwcHR",
  "key5": "Nu7bQLQPnGYHNiCe2sNwERvxd4s7R17JkgDTyobrYFyXp6wiTijDzuPWW6gFNANY1nN5bGFoe6L2bjSAVci3pft",
  "key6": "4ejmo8McJ6SPFvWUMt5vCS7umcLAP5bbg9kVaJ1H5Qdm2E5a7grmpLhLEpzQQ7oZ4sFRi1CZr355J1y3jkf6zgzF",
  "key7": "2dCX761NuFG9X1sebZhLJQ1thYTkbEanX8LvrtsSEJYJ4ifaiEK5Go8KWBAg2GLKDw6Rt8EALfbRWxoAaWyarFbg",
  "key8": "3b6zqHEk2k7q8J483wcVNM7E3mpV8pJZbX2RN3s9EW9SQTipkpzs9BQxnFJrbc7csS1ExrjMsaR198TUXDMWstoa",
  "key9": "5XAYqA9uxk9SC8YSCCcWgCpnKDqRybrNBgyS3DHubdPjVWG7QotSsvLrVpbtWt2FSgVuYKGQ7dSWSCikYw79uxSD",
  "key10": "65tLLJ1ynVRoTjQ4RJSNiC9LxMF8XukmrxR7MvovTycenHC1g6rGo79vsYoVf9rCbUGRSquo18YLieqNrq3sBMSA",
  "key11": "4P6mnpSchMKJJ7DYeubp5BzvaUurdRfXnmJJ6HMRiaTvJkfa9C8BiRErNR3n2CPzpdW5WCTc6Z9JMVocmbE37R1Z",
  "key12": "gA7oTLM3bUNRqxTWQFZRdghim1qa6mfGGGzQJYR4vyPd48ARpk1mKEdHEWpq2RTXhHbRVdrWpi3wVfvY6DcK1Lt",
  "key13": "67Jz8vJhYMQVT1byju9cFQSXErkMB6H7uKDN3BowHkLs5JGwPUCNWfYi6fDusRT3ceYtJjfJ7mL8o3s4iLTderze",
  "key14": "ysag21gvzCRCCY8DvrgMis4nQH8fQTfJnh77WkPLrnTfKcvhBmo3wRwJcM6Sn6Yws6DC8JhZ6dDJaG2RrFQm8hL",
  "key15": "4eU5NAS81SU9qeraBtwbkBKZy5SWUe8X5AnjsoXKTrYyQ9H6at9cXFbgEsaT9YNjGgf5HthLPEoz9xoP57mFtKXA",
  "key16": "214D667VhBAdaMLCYHke8KMKfyQ1QnbCYEPNtckhocLtRkQZfHfbfTfqB2PUADpzdSX6cpgCATYupf1JfT6Y66Xo",
  "key17": "3ZL5RZqR232LCYLvY3CFB5E9mmeLnmAWFoSGcLbEavzQN7W2hD7oDzC1PPxveqSy9Vgwuvjd3uNukovt1YNzcBa8",
  "key18": "3jEADcWHMDKzTXU412a25tS57mhWQnoFvsAeKDi61yKERckQx7mx5dPNYgqoecsAD31qMmfXpzoD1EVVB2qbZFYj",
  "key19": "2rofAMi4H27eac5ef7CPskjbRDoYZh4zXM1c9f6EXifBqbGaogCNP3nEQsHaKjXfoKqkanFCAeqhR1sTStp4XfJ5",
  "key20": "49VoC4979co1K7vz2sF8ZM5udbnVxefMBui5BL6WKim1zSARvfpV6jpB6E6FAyVF29TkY5NcCtsAuFrTFp8ZFevJ",
  "key21": "5SRAhuHFMmu6jupQzDR2pqnTWErgXJoiJgwuSF65icZLQPD24W27ds6V1iKAxRyYrYfkeCdjXBLqtE6xAEYXbJ6n",
  "key22": "3JGRnztzKDgddNcuLpekxPChtuY4AZoBrsE7om2tHbDTY9BUoosvmy3z4YKnhqau5jKwN7iVcwDoaiQU8hxvU97P",
  "key23": "22KsZpfZ6hd1AJPFCVV251UerYQ7UyXJmMzamWdnZqaMc8sxo8LGCpRtA28GVnhqweLf4uDwMGrnMLqNaxqcK3mF",
  "key24": "2M4YKxaSReWPBV8xEUtuSWgNs4ktXnUGacoFoKJyWbXoz1d7AS9JpCJMwWDMhFc1kwJXcnZEwfdjyLK9hsV7XTi5",
  "key25": "2LT5N2wpf82qYoXqqzxYqexiE4fpyyuADP6vjKEcS1ketafZsM63s9SQeQiDkYyPiD3E1emQP2e2W751RzFhjbSb",
  "key26": "2zqmY45S4XNNrTsu7taV8Q7EUHx4U7XPtosUack4eXW1biRT7R8ZiqGzpgXDhryjWuiya2nt7PvxU24ZxGMwmEmn",
  "key27": "2Hza7pbDiws8equSDhdCdJ3Gik9H3ZTfTmzsrUvyCCd18oiY55mZHWuuCyhioqA8vJcHyQ1587DauJ52vYX62n9H",
  "key28": "2ViRgduoKEUiDXgFHYEb49b7AQyP2UQf9j43krdv2LntGFsUWMdNWpjpjaAnxcQi3bBSPfgUtqQBDp23DWWAQwci",
  "key29": "64xygndZSeJue5u4my1YJXw39sGfDzacHG79V9gwzxHCnhTuTMf6jJ7V8CcLG15CqQ6uQz4tn6BoPbnJnazLd9Uh",
  "key30": "5Z1VM3iVbHidU2xZDk6bu46ucfC3aCPBcQRMYpzd9NVDiWDKqLcHE1C2sAoQMbSmksvSGauNyHuH53GLzG5n7B1M",
  "key31": "5B2XY7Z4j5Z35K9ucuRjw6WUgXtzCeXABv6iUWN5B12oGf2aJ1H95stAqmfSRASQKSB6Q7KG2bSEKAVZyPbiWCoc",
  "key32": "EZwbpQvihepVwPE2gBYS1phyS1DyXSMTQvMndEXX2gCsMi9ZXAKfQ9iBdkxWMuEPJqRQZkEUvNdBc74Kz7FZFCG",
  "key33": "53HKiFMjicEakiTN1pNngkXhTAymJNUSjMZEgShr8Rh4NvVfojRJbeDeX8FZdxCyYR5SUGA2aXs975DpK3qefmvf",
  "key34": "3q3Dsveh54tPjx2X3s3u7b85zihCKcuEsdLc5LJ5AzTgk7Jx6yd164VLUvLg68n3jo42UrGYrWWo7GAVZtg8HFfq",
  "key35": "3mhDc5YFJUFGzgnfefhvkftSRSX5Un3ZBnGKjaKxJYNxkxDLjhXNRXr3aa7wiw5PWaD65nELECAytktHjU1cNUSw"
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
