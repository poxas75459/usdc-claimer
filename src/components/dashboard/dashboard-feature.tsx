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
    "5BSmrSXQBYprRHrK6ox5NVDmxXCKgqU5SMWwnBst6iwL2KM5hjuTanXGd5LZ7oBhBqQwMpbGCbu6ZrxcFsQ72woL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632csZu1CxNg9Rkmo5JHnLmPubG1AeGMf8DR3rLEEFvL6pzfeebH1hmv8pV8PikBW2akmStppnBXF2WHMnnsoWaj",
  "key1": "8rriHjH88pF8gSD9ApdJjEAhuNUbTZJnAc8WAQZWArjz3FqVMMeXiu494j6ifoiH5A4WTyprfAX6VMhqCUnNWUP",
  "key2": "PcWDXTWnQSuwPLk4Mkd7sbqTAbxTunGXjZq1xRdrGUc21KdWtziBimGAgxwfqnLNASFQ184AHcCAuTcPaCxhTDa",
  "key3": "GxoQcZNhQFAfm42Ebp1rzmRyZsxdv4GfScDCotkW9Qo3tRzKXhwg9bzwzi9ae1Uh9bJKYrZ3TsMXgJzk9CaBdRU",
  "key4": "2cX4xKNYHpQbRNZ1cyv7Uq1LapuFW8sSwNh3moKCBWw5qe6ZecbPS37g719wxWbnDzFK3pYXAmjizRZUwQZwk4tM",
  "key5": "3zh2sxw4464MgK2fnhUfjASfrHdFtgVE1Dn5YBsRhDt48PitiXYcuF9xdNxvN3o9F68f7NqL3PnbdCRmZEuByRNr",
  "key6": "wEGEATXrTa3hPMk7xNEisHRzW9ZhFrRKpwK5zKhj5Sg2HWB92oiUaD6rBMsADxJKDMwcCvmzSxB8QeD1Zzo5J2Y",
  "key7": "5Gutia4EoXTbqcJed2NsTudsoV1q2hvWu4yr6HivCNkHsgRPWELNuHqp2t3R8kUf5YfsC3LKiQuH3uPoX8Z84ScT",
  "key8": "4RQsjB1MURPc1nLQcX4XG5ux3Jii8sGYJnA4VWCu2fqcobpA9Mawgty8yYxzehqUDJPC5S989fP15NhC4CfpHiRm",
  "key9": "62FrXdetRZfiE5qYruFJgKPDZZZG47VhQxxTaWfeydqosGdQgstXxHA72mN2niWa8okBHByYZDkiG8aA1coU3UYX",
  "key10": "5TAWTSfhoKpFXPMFvLoYpbjetn4Fme2gJNC4tjsMkb2QizdgnyF2U9H24Y6A6wt2PEBU7xbX6cNneJZP35SDazgK",
  "key11": "3AXMJEdCna7wYBdNreRPanoBVL1x7cULt1chug74p14bw69YyhsYjqhAZegUdPnh49TofKyp3owNwr4jJFJU6Lss",
  "key12": "4qzU8pJyzShpAe1YY1Ufcq3GtFeBxyGPjbvF8qVV9HK7b3fsW8g2b9w9xakoxUBpaszHLBqzMa7tYzfZfKXeVnZk",
  "key13": "4PE9wgcdKuV6zAfrCP56pVBPAKp57GEhxcyyZgtUnuuyqMGQEdxZy5BHiDczRTLuRYCybpshjoTeeRyamH9gicnY",
  "key14": "32DvPsvAGiu71zqLkUm2rUx7M5SSggM8VfhE9cDzAsB9W1nMKL6xC229E4oCEkuzLjJ2gYmN5kM4AQU3XgAcsMp5",
  "key15": "3iMkr8iQryrhYzq9CRB4qUY6aLewxoAkSeLt3XEAFpmGCVdvL8k9XL5yFZRwoz18yKviG6fcH4Zp46ts6wYHEqC5",
  "key16": "2o4ShhbwLzPnZdiEzatv8mGnV8RzwcXENgu52YgkSfhSZ1TNTjvbfsRoTGgQm7aPEBTYZUJUiU3iq3Dpx14gm2a2",
  "key17": "3nm2yDQCB8GTUyR7WGAk6biqbMbQFcdTmE5ZmWqerVbwCJoH5gjzFZqXGWFbGpsCNKBitfbMgBVdTCENf5ccTABK",
  "key18": "sGV6HZ2En12rEBJaJ5bmM1S9hDD9RhZQ9QNFbuVtac4BoZLtz9hXgnCUEDXWbFW7jzdKT3KEsY5af4Cd1Um5kzP",
  "key19": "2WiyJ5gi8sZHQ8BbgsJgp5CAKEq8NFMvViR5ojrZaRHaVQsWziSg2BJ3aKBoxjLaTeDSMRnQFX9DwLvzceu3eRXZ",
  "key20": "3Y6g9UwQLcU2MqjiZzMrPFemMpEv5CcsFMN8WPwUMBhDv72VoJSxUALTBCDnV6YsV3p3ohXM7z8swTHuwoacmBcS",
  "key21": "4vpJECBkjreH3JfRj4aVZoZfs7twGA39gRmbMMScBJqHS5vHLeyaBbtDHsdycam1DqdJNzB8R2eeobkgUVWMVgku",
  "key22": "3YnNEb4Ap86cVjtLRzSkQgsufR3FLFLqmcPSFYfDJALGpTiEBt8uHREqDiV2sTakLnYFFgPg5YPMj79saKs7kMgR",
  "key23": "4gbqXRm8GJdoTcxCW1s4igahiPQH3C27CspK3XzKDxJc8tcqGnJw84X4X4hDjkoLGqZRPBb7xNLdgg36c3QUjpHA",
  "key24": "3YnMR6qXGNe4478kqa2Uy8u8G6r1NH6FArFkUcacECbsUsKE62iWF9x229BzMCR28K7NFacNraccpcWTzKZRczmv",
  "key25": "5RGm8A5ZZjGzTZVyyE8u8ovzkzB2Y58DD6hRRfaURC4ER4TYWGZSjc3UeYNyEa7sfRWzd7V49hsfqok6HLdTZHhG",
  "key26": "4fj67msDsKXcFunqXBP1oYkRr4mQCwPHL7VazE9NjivpjbMCAXGx9BxTza6zsQf6daaJZoYBmejWUfJu4Jg94HZa",
  "key27": "4RShULAj6AiqcVCx9Vpv7W8a5kFR9TWxuHRrBuDnSUmg1DDZNGnwmsMLpahXL7mLFiZbqMbLufF6iPXkkJ7LEY8a",
  "key28": "3QeCLGAj5ggEgwZhHcMv2QXtoocNTjzYYVgQge9cw9DzaLhe6KXEC7VmW3Xsn5uTAKY5Uuyns7Sq2yqoiBC6g2j8",
  "key29": "2zxWZjC24ysNpftUUxXR9becKRKXXNndctYfFhJmmBeKhC6sdjv6izCFT2fepkapnE2G6CkBaKJVnwZWDDi7o5ef",
  "key30": "2B4oLqN2Tyg6nBG8YRcfg4GzALdB4Uk4TWv4rkQtDG5PM2Fj4RBj4aGghjsY3c1NnXUWyGhzbZdw89zkAiiHB5RE",
  "key31": "637vNbJSGZZg5LWH5qbJFHMd8FGusTAxYrQYRPnNigTm8JzsMf2Bekx4fkR6R2ggCKQuRGT1zfCgfUKTr8nzhzMB",
  "key32": "3aAE2h19icd1sFRncnBb3D6FkSUozRv3z5NAxzYG8uJ3G8vu14oWRpSQRjWtmtEWYhrRa1L63iHaMudxdz6GgSby",
  "key33": "5Y83EFtpE9DBocnRqCZ1AYrBS1EHYeFkQwA8BLkhHgFuYxAWm91QGhm3BL14A5Fy1KoFqo1T3CtbRbx3jtPDB9uc",
  "key34": "5wnjNFYC8aquGoy91FUAPpzTVdhjiQT6dyE28xnPeSGcQHWN4qnsiRKYcWQtsYpGLYz755HVHjeoLb2KWxKsuLog",
  "key35": "5tpBHHpTanKqz29Krkfp2kNvfy2vuLFcxXhbAJugCktkhDr8EnHy4jdJism2U1tD1qtvRUcYpPhHdfK2kM5yBeDF",
  "key36": "5UCzRX9WPZj4ZcLRg2qGKPvuZ4YH7FoVytx6zePxuYgxsoLqKtMxy7V2yN1gu2TGF3odXzP84ZKzuZhSL7zwmgsS",
  "key37": "3qxDNu2PTNxauvC6G17vKvb981HS3fybR3qZJE9wE68EKo6paMJgLG1pxNZpibKZNm7sEG6bgsSQCy8Hip9S6v8K",
  "key38": "4c3pCB523UAMeVfCsMUCaxcAoG2XgbWbscg7yh8n7fHX4jhmT7LZSiW38nUvsvGVt4rhNZkjyhufdkrmoEXtsv9M"
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
