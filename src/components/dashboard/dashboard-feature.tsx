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
    "3DbUxJyhGBzhQug1kjvH7e8BZWJt5Dg2j3PM2dWuBo5HCBLBqt66WNzBodwjkLDnHGpeGsirgyTh7mrsF66Ukj2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61w5Cf6Rxri2YibJQe6cj89JGYDnJ75dGCo8Uis9f2tHpb71tCeXDBa93GNPDcgjgpPFDr9GEsXzLoBhADNUGrqT",
  "key1": "H5ee2wMmMTePoCJiKfNiZCBd2YEdqarH1NN2dKh6uKeZtjBaguHTowBXyCGuyRfzgCps6CR6cWwKfdSTjzcdTg7",
  "key2": "5uD6AbLwNaCJZjatJj2dPbXWMManjaYLVfh3KSV392z535ZZrDiFd3NdymxTFLjCfAq2BHo64bmZ3amsWVkHhmxo",
  "key3": "5BtY9zEQ6Fbr96FCfc5kjxYvVk7G54jLkVZeR7RPmWbudtstBPuyGKnWgBwhFyknJNixkJuf87Ts5bia22GSuPcq",
  "key4": "AwM74M2Vv83v46tcDoqJkXqaJqVFnwAmNve7Q2bzvExTTwsh87APoG1Bm9RF2j6oiGypL66fMfA15PhLGptpZW9",
  "key5": "5wQXowtMRbArmPGQ7QeeofSm1BV7Xr9BAhkLJhSsEWC7G6YUrray8a68jPeWa5zCWT5RfuBPMS5v5LVnMXpwcyVw",
  "key6": "3x48WoFVDZAYSqBxMS9PUP7R9sx7f3dvmzouZ5ULgN3diVjvSVsrsoiCsP8fbJRkq1xufB7y3RAhEzMq56tj85ke",
  "key7": "56mTA251PYCRZnN1wMc5UHMvD8f6ozXgToG6efPB2sJBRaT9ucKiuaWHYyBSH98h5g5feb44taQxuLdgGFL6GyA1",
  "key8": "3ADyijuqGei3U1hMpuWFC5kEeAU8EZeiJJgbtedwkT3oKtjcgx34uTTVSXv7uBYQYaaYNnEW4N7msLfBmsgJTKEr",
  "key9": "28Ni1hZQhP2WqXV67uUJVV3Sct2nhE1PkkCvDxPBQpgqeuhykGz9SkaJqxDTyyKrdv8LwxVkf2QqHvQrJPTFhgKM",
  "key10": "4PrfBRL2uN66frUAAb3TQNo6J5vsm8vxZrXCcNF4mCaSsm6h2WKMoo4Q4f8Koxx6ZA6wthcyGvgagcgRCYSNEgeq",
  "key11": "2C3ZqHzDaQodXTa9ve3V4sK5VSzjsCK7fR6gGYUPdWVgTUWBAXSXLBwj6YbSdVrhrxspFTGv6RRefJP8MaFyVK3V",
  "key12": "2x3t8ZXRnmXYzw1eA8SVJnQVTPv93nGskSidZH9PLHfHnHEkUV42CuDPsFFgrvzzy4WdZaUVq2EZEfgZWtcWA71d",
  "key13": "tb5M2qkxvwpGZYkPmW1kuGqpcgzwNsuadcJRvJ9LW7zYq7xnUASsUrQtaEJosTKyX11KnYQuieCQoDkUKbqc6th",
  "key14": "vvtexRLRTmzL5Q12MVFYza1NLpPEH8EDwiz1kdXe7xofRxLMD9NJztK3DvF4z5SjEGzpWEtjRRreY8gBWZ7DvfM",
  "key15": "4mR8pj43W5Q4uBWd5EKWoshfQNkd4ndqkZdzjwhTziq23f8KNjrP9kSAe1mVLDKPv8ReNeurYZunxfge826JWAzw",
  "key16": "5VHEzfJx1EtQVWVhNvKu55n2QUpdcgSBJuHEdRCajsDpE9nJ2KeVmvRZ4tiJBAEjheLGpkWFCsjmJRzhAtxSB5jS",
  "key17": "42Gu85bnKPeRnYN6jE3EEesrQdFMp76fvSESSXn5tHVcWE7K7MmtszndtjsgV5HwsdfwyPxqL4rTiJiZCVAA9EPq",
  "key18": "5fx2jAT3za6fTHWSycvRg3jooatAA8nePw55AYYLy27RWxdX6huJnQ1cUxFEPoHDyKJmScFb56m5xsdbezy3c4fp",
  "key19": "4yTKVQdgPYL4KxccMwt5HxaJvfx6VSQ4hZaU8kaqxpDwB5LJBJEWX4ri1KvcRsXsrDeUz6pgM69sG84yajrKc4mY",
  "key20": "2GwxVALFz6cZWQAFSn8SfZCK5PGGZCmx93YjYmoczQkPkhWnkq9gDa5Wr6ox4jMvkrnXFB1WkSZBPJFZ7wjsZYWH",
  "key21": "3VnHgfMDzLakbXeAXaDcx38NkQZxVzc7dW8ziN69XnAxj67EvSbqJxKQ2aU3XMJenQcxyVjmmZED3bLzVPPqaWU4",
  "key22": "4QwJtLSUfd3nhsb3ZHAtLfaW3ye8jQBQmFnANNz1HpsyAzgiEc9RdaMByidc1mqJheeD762LevDB8kGYpYK9C8nn",
  "key23": "4KxCTTocwVK1Jdamj77UUkPPcCXQxreTxUed3kW6aANxd4DW2qbUxegopryNmRYgpNGn3NUg8TSbpiWWFRDhwJAX",
  "key24": "2NPc8XzcRzFqkRwzNuk45ThSuzec7NvvcXX3fmujNzz3eKfUuuynRjB7x3kjvDHsZTnpSjFKz6oGGBYCKzKHnuei",
  "key25": "5kurbvPwy1D1dxcj5sgCG53U7Fomgr7pftDNfWumYkFbThYX1Ra1GdefZf1Vvs6GTForKNovA1urzByrDMWMsarh"
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
