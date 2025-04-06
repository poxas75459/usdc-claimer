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
    "5PpDDd3j2D9rYfM67UwtuS7t1PzQNwcXGuQk5m38v574MtdJyQiCbdtT6cc7GrrVbsEGB3PnV18wBn6BqkBpAMuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfWFgyHtf5TkDaBLCuzLtW76vubfxDocTxHhRKtwLTKGn5Gk4Fow2YMZ9UdreZT4CkFSLepcNB6heSnBnCPz1FF",
  "key1": "2Bt55uYpdFY4Uq9HDu7qmBP5MPfAGviFNwNu4RzXbivVF5txg72cV1pSNMQdyST8WmrrrN4oSdccqbqFMLBfYRdC",
  "key2": "3WaozUKuitTc6idRNbii8mAxDUG61DyZJFjJMAdaXfPtmcAbpyU5LAWZrRKgsTG4n7WRabGvUeMrmoCTmijRWyiR",
  "key3": "3WtAimvcW25SwL8SQf1irki41X59BrZCRaKBQsAX25vGVKMtmqK3Mh8JquPQB9oq2K3ULrjif5GYpmgxazCDc1Ag",
  "key4": "46EkJ5S7jjxEeLANH3KDoTDycfwWoZoEE6YLFoeULJNCttQU7pjR6eP9URb7eanU4VR6Ht8yUSQFMzHnJ4GGkouM",
  "key5": "3y1HdUgot18s9EauQGQ8kBaRyT8uqGxYchBPDEnyu6auoXayqRwZ3oVYkvqFxEQHyLUMnN4MTVx7HQi1CjYqX2Gi",
  "key6": "29CubsYNDRbqHk1Ke6vhu5T8KYbGyJ1sALdvYntvgeK4gN639qqt3X7mot6ax4C28vAz8MpZgNynWx1PpKXVc7PF",
  "key7": "4htYgpNWmKDwKTqHD8nFUVBA2p1rvQY294JuT9Hy8XFHxE6jr8voNw5FLNfCc9FfL2isQK9hsgQHhiT3G7rDskpJ",
  "key8": "3C5CDhy4wyFJjcMVijSWFbarAEQvskCYWnFiKWnG31PrX9fj387hXowQWN3hVE8aidLDfJ84ngTGteAdS6UxjANZ",
  "key9": "2UjUPH8h5gonDbT7cDLRvZdKT1mFmFeZAQqqmCpCeREDsoXoWdaWPiMKJMRS6oSgDCeUMZNgJZ7KMwZgTTF53b8D",
  "key10": "Vv7JTvh4v66BX5c2jESoRvFfpHj5NN1vYodjQ7YhVWYaxUR27SsBy1xhea8d7G5bU2VmaEJfXM4Stybe3PhVs3w",
  "key11": "4Er4KMVpbNuFmSH9Dwz2nN1tEMZGRNQKfa9uiqsXAdwCwdcb5SMRzSHhS97ZsyR7UcRaAyMGQXeyWB3XJLwUmvGu",
  "key12": "4iGaRmoC6furUj1U9cJVeLXGoeQ6FPUUXCpiPfHUU1Nht46eqGpQwAGHLcjFymEUfK7aD3HqsFZcfSRE32mDADnR",
  "key13": "3iJR5G7TXrTCqWBhKS47cr5jsiZaSsikN2iq9NcpmS2pNQyM3Getx3J2NQdFhkfR733vqJ6sBgei39ASGNz1pN61",
  "key14": "5sHVYyH7NDQcVcQWctiwHHTBenmsJoVPayaYUGdWtzE4CCXKLnjHBZZ9xck2EENeE3TQCoz4ZpKhTsyvkE1ZjkCB",
  "key15": "3yFdXxeR3DNKgSWZYzpK67JJkPgEzADhBHiQ3K5Jwpv2SF9w9DiwMYJKjLWmBbLKW453bgfgSMFK6FgaJ7ycMg94",
  "key16": "241n5ymhAokyACfR9Q4LeT95oJJSPeqHrir5KP7Kp3KPUYfnkHpSbHycyS7uJqaSGQF82YVbeTBnVXYBBCcDv7BJ",
  "key17": "3fBNLKbmmKhcLN3s6aPypvCKotTFqLeGY5vgQE7iGiqx1XzZwAMCijhW5NA8XwAKLqp5VQPwDM4pMSvYW99jnQVm",
  "key18": "YgpewmpuSAqxRgCC8VZUQSqJGWbwKU3BQTzRRBS9hKoQzRRV35gV6ofv4ktAJQhoKMUmC2UFZfSarJLAUqCKpB2",
  "key19": "5BdyRzFwTZn65VYLo4TPRvu3X7jLKxeDTomZ9xckRomHgAFnUg8x2XUDYeLfGVpGnteXaAQwBdLsKzhk8c18xGcV",
  "key20": "4yKPc6cV3Y33kphgwapGukRUujjm5xrbS8dm1sBU6LJEPKXKdori5vfFqqh4rYhHfsXE3mqigdkbTKzh89Hyx7zu",
  "key21": "2R35vRpyMWCmHTaPpc556sqsSXnV6h9Q7a6Vsn5uv6cMpQBq7vL4P1bWXxwqmXv5kDYz2JHW8MevV7mrAAt7jYVU",
  "key22": "5pZdvVD4zRkQzfsHb1RWTooDitun9ndZtLWNTaxEmu6YFqVacE9L25ciFengPYzHwYUfW42LecwcHqmbTbhZvSRF",
  "key23": "3TUSDU8ktfvt3MYMo59BYchs8WGSpFG7HhLeMoNRCANG2rPBGeQ5FymA9Hm8vMGugapUw12CRTx5ruZRptsUMBQ2",
  "key24": "4YiqyErL7pAr2xnUWv66PhN8iou9FGpUZDuXfpLuha4CGRRCWZed9Qum7ke1qDYb7QLKL7zJZAcgrwjvjnJQafSm",
  "key25": "3V75SU1w5Gw4SMpHMMtLVTRK8tSHrgoQMXtXcZPu6ew2MvtWwTAXBS8G6H2VCw8A9E3JCTNMR8iLMRhmvD4qbVjy",
  "key26": "5etfSmt2FisNc7zgdTPGqcQ9DuBZkjPNvLBr2NAEitmxH2VuJqRo8yKqh31bbUe3wKQbHo4ekx8GKucnSYrhuMdg",
  "key27": "62cN4KuK7YcqMipXY1yXWNMfkN3qzhP9zMrtFypMnRsyZZbrCk1cJsfsB2SXoPdeTgrBdfq6D4GVddWQYuXCDkym",
  "key28": "4jkkW6BGHSKFTiny9QdzPSfk85Gez8DwhNitaUi73kDWpNxPi3uEgp81YEustMM1vdjAbx656rTEEMizV5LYnpdk",
  "key29": "XsGgxMRnvjMgT4ykeNPvGrRFcrS2DX5Xyvt3KKzAFZMfKLjtYbFVhkQrjdRhiQsV4hf6ZSW2ka5xXxEfo68wPk5",
  "key30": "4ozf7VpvwyrH9XXJFJhPAdThKsA5qBC6XDNHMeUYmsRfNAqiwCT6yJjvftbcvFGQLv1AxQR2z2GY4fibBvzixhj5",
  "key31": "4tMtPRv7HZWBeERQD7owaB4Xr3pRu6GMKwiVFqMzjm7CD88q6cWsZuFTiNiANM1URBYXQDP6dk3UMkVYRfsnEJty",
  "key32": "4nrpbgbsg7TyZ3zg8DbmVzQ9CK1vuoUcs2hBEAhTrtvNtMCcTxuhEaa7JZFVj4x5nDGqQTnai98QY2SDbZD2c5EN",
  "key33": "23GMVL7petmVgo5EfQJDPJDirVosu8f6Evs74VF1NaRbUciMBzo3BAGVESz47nXHT3AB1K7Fc3hmFkS9d5pXaZuP",
  "key34": "2rpFRY4GU1aFVUUTphrpcmEdJJST19EWSZkksrRyibJysxRrFcEyXpYGJjcKrF5XgKnjce9DFmV1a82vL6g39fqD",
  "key35": "3szMTvktViaoasH4SgtULurXrVDqmyxtigXPMYyXCnunMW1JzJAMW6D1gK4poBc7sA5aGVmxVsXBb8jxYQsV5pQd",
  "key36": "3hu7Z2sXSPVXhesvEX6Yt53d6pT7AofnQyNqNE9Z44ohLxwxuiJ2SXLoevT1sednLAGmizchwoNUQYXS75VT15Q4",
  "key37": "29RB9gZggfgYPpke7enrSDNSmADgN28kdiMzwp5iRPCMyKAqTrzL8sfUXaZw1Vb4yfL7J32ErhenmcMEUvPL2FRi",
  "key38": "5E6VnERi9qbkAxowEWKXiLeG17CSacB29jJCrFCk7hWGNndevyjsKc1Pz98m7gxXnUQwb4ErPYXTD1Yc1L6shxMy",
  "key39": "5iLzgwBeUXQnpziQRrg6gdLbzGVF1FNX5VVAWDKKnwoPid3qEFhguDswmvvh1YqpT9XAsB4YPZcrRAcJyWZKoQhJ",
  "key40": "5jxYWc45MDbvA7xqTkKF8ZwDCWoLHwKqjzdxnvhSQvEFHp515yBfjFjwHvUGdDdFyidX5fSssKSYvaDAiNn3GrJa",
  "key41": "5FDoxbracc5yTb4Mgyri6vHf5MTeuAwhPmXz1r4tQufy6d9k5CmBQSiXdQemnmQ6rHbvhhkCrmeJ8yCsaBeNQc5w",
  "key42": "4WLayrsDFtqXbMGF2Kh5tRsCJmweSyatFBDVdmh5phAt7ZkMZhx2sphxPSmaRtVHCHMEuizcRf6hMrXLKtGrPtmZ",
  "key43": "2GJksr4GfnfDrenYd4z46YsyQraSG9oJGDB1vrUCekHcecmjYf8hmx3ZRmxxfLDz18Ne1s7sboSFPn1HdDEDbPtu",
  "key44": "5pjNrxUAL5NfJLRitNdUTghq7RSDMAdU6bs384Cm2dDSRxsxBAu2yPHR6nm9psvcaW3JeneJjbeoeHRkuxJWHfsg",
  "key45": "66y8dAvwgUXK2YRJTpoFVUNMkRqexaXNc6j5Rb1bdSfKynzDtiYH4NnSDu3T3rNP2RYM1MM91a4hYx9rDuxk9HWj",
  "key46": "YJDc6uKkAsGAGQBoiVFLRJh3dtkE3ogF8EpLyU5bBHg3o9rvSsurA8ePFHZRE4dUnkWU5pWG6aQ5TKZewZ7xYwx",
  "key47": "4Q3Wk5GvAH1UgFAT7W1vFNUzGZ3sovKphU9ZTRsujtXw599ZLG4SfNDxEUoZRkcZDdxvxwM6wBfTtu4zxU6C5FjR",
  "key48": "2HvcKoQbXJWJ4kP9snt9Kvz1zFP4p3KJzUpGGK54XZvy1t9kazLMbYxNt633fKknbhAzz4S4CHqZa6f45AaAWC71",
  "key49": "5XUEfND4qQ1fna32hCAB5nLX6cPoSPV6Aoe4vJxMwQH8CM7MQJJefghrEgtNKFJsxFVyx81EAFXE3v3xUK8Q7P7Y"
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
