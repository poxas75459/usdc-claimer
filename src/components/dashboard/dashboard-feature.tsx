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
    "dA1W1K68tWYxsfgbaD7bCUY7MRQEFUDo7StjGFHd93KagvoeaPDk9ygX1syzNK1rM9dgty2gz8RN5PFM2aa1oKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25dSeMnwGGMDxTquMPN7PfppzSEHqStmTKjMgxFzu4FLQm9U3F5JNuR7FcLMacxo8JeZ8cU314exmuQQiDfeTXCR",
  "key1": "2XwppNVaP49YV5BytoH4dGwi8wdMRkjC9qXLrDx8qmHagak3r59Mmikok9T26aMSW9jM4jh6gQ8BELXHx9i9FH7n",
  "key2": "NMCgdtRQbLyoBoi1SiT6gotTA8LdbGTUKSeSZ9XyvKkUzUK2RtN3mTpQyNRbwNxYNoJ8w7SHME5QbzpmhcBGoLq",
  "key3": "ak4kA8ocPTbmV6UR8D42fVEn3N3J2cZHs1PZTcWFXGnTPwHKMv6gzZ6LKi8AL9Z2pPRNJTcTixssggvgmRJbCaP",
  "key4": "hgJVARPX7rsHs4jhcLAMz9TkBrWU8k6e5T1tmBMkJGxvCzCEZxBxBwWYqbhnUVf7X37ySYtQ3Y4FZbywSFyskwj",
  "key5": "5a8crTZwFAA7f1J8rewWfvPiJsDousNaSR5LjihMZEFv8b6sTWGDDa9ZkVMx9kj1LCf11TpDmjVw5tPfPicRDoqZ",
  "key6": "3WakqKrsijhK1wfQNXXB57WAfMYrL6Z2aXfqmEepfrAgfdDqYMp6CGUharkxncFUREmjHtNiaJ5qf4Tzz28X4Vzc",
  "key7": "3TCuMN1f8b78aVXvEQAjiqGkB1pML3fsmBVNjhVf9sxJtRkZGtAUsRqPcedE8ZQGoZRqVAzoiKag7hxpDHPoxH2H",
  "key8": "2jJJvxb2gs6MgEzM9NLLuGXGD9C2UGdFsQ6ruXVnVvxdmiCkx1322sGxdi5tZkfXNAEAN9ECSLyPnQpxzVKcM3nZ",
  "key9": "29pxeK2PcMfc5RA4XVuSz7N7weABM72XHpqRWkDpMHUCZbQx7aSgd8njDS8ZDAxFjdZ1RRCKGZREvP1yGN4jdq49",
  "key10": "4zMKeWxEzU3SNgbiCpUyz6QihCdjVrLP6QgLC7kA9YFrQpt8fM6867gTzphK1S84MMLJzmzGsuMimXhdmVi7bvUk",
  "key11": "3Dxrj4ny4vYvf2GBFdAjJCcP4LBLQhop33RTXXZAQeYW4SrXTcc1LBrMQbuQ2ucDCgYvy4gUo7cV4a8pQmES4uwi",
  "key12": "4HSpQqUJMz8Q7HPSw6evx2DPSdUCMiuEZhA6PBth7SuN8VkC9MwWCrCwMHkvCmDNworchwXqpwWpb5WwGzcfqdkG",
  "key13": "4iQ2ZBe9KAPpnsjWhvfxN3NBxSHhJa18x15aLab8nrvyXxbFy982Xvc61fyTmxKCsWbwQPup7y1ta5eayT9VJwin",
  "key14": "Ea9bSif8P6w8AZUonCY3h7fwHQJYU4YvjpmRqDRBSaFaqhNxrSymF899s6S5186yeXDevi86QiNQEws5EfVhcct",
  "key15": "WEmxs6E5LXyYx678cmxii11oqGQcRrWimcoVDYftbzVDHW2KE1d1XQFdB1WEgJEnTzSBErLdYswW6KZ81qUfptW",
  "key16": "5ismtNpDJpoaB8SVQRdif9VRrbS1mvob1t7v5FvemCUVYoj2yHwsD98QRpsrzNRZfjjuF9Dr9q12MpPCiNCQTDQf",
  "key17": "5rAANYSryEPRx3vnLJKyp9Lst9LDh9HoKpt2KRS1mvp4NKbDXcz9PtAj7w2JjGEW7HXH3425APAs3zyNg6UezihK",
  "key18": "QvjAkdJHqLv3jDSro8YqWaAAjTtkvL39rz289RctH8xCKdFLbuLz18tyxHm5V5adoXPvQqb5fNWVyo2rvthnqHj",
  "key19": "56F5zmtNXbmepbfQD4UXTnRSm8zVcB7mYXDjo3iCPfMgm6CW5Hr6zeRQFxAtNLcFEWgz8wpRoyihzbFwBXVdWzn2",
  "key20": "3yDjQ5UubYPmAQoRG39PtK3e9x2UmysHneTCWu6PPeZUDPCFJ9DiwLxaXJtFcp4wz7U51YCMfa4UbAY9LxePKnji",
  "key21": "uC5rrnt8zJDYguptsCZBWKaAFb1Hm1p5UMHEWRAopGDAAy9kuR5F5c9JKasLth69h1YgDkKtuvnd3AxJoyakBLz",
  "key22": "2fxxCtTEDspircqksHxEGkyBHQxEkcJds26ZGQdYbGoeGdLsMsKy6U8Fhoz1NSY1jdMRSFejVYzVT9cpKY9fuFhh",
  "key23": "3zKqBdgyCebvSH7MZ96kZe8pVNke9NTPfrV5Bg1RE2MUF7VhMqjh2jko9ERNFN3P9XKM1hv5co6LdMzyacovpTEM",
  "key24": "t9LZnxPcCnfNC2Wewgbr12mUxsHDN49iHeRcRo5n91E4CBsvXCwUiYg6csBfHzAya8iAZir9FaMCyozAdFpZRF8",
  "key25": "XsJNTDACS99fJ8GGF7zhyFcL39XfaQEGMeGkhTYmKLB4KsxJuH9QtAPNgLPX9mVwpdFQpdcpgtZr9jjmCfnnzz4",
  "key26": "2fdodmUrnQcV63b5UVb5TW5VtEYPZ7bEBSsc4Q1siGjGk7EVMnycECvYtrWdgLtfjUKjr613VYBxeFcTue5e1bk4",
  "key27": "56GZm89dgLAJ2MohsjDUwJkLG7k4vaoN2GuZuf3TEMYWaqQFPM1YFY3KnVWkX8KJBg7c3JrepDLpXKLFJmyyg8qm",
  "key28": "4aq61UNBPN52SmZAKWu9dLhUaeyKW8ikFR4LyB2siffDqEeXosDjQPkk55UT7dHBf42gtay2i98uW9KWJQ4DBBS7",
  "key29": "3QDB43fKkd52Y8699ALLyNMC8KEQteSmXN4SNpQb2AYDEWSivPA99UMuDiit7y3nxREP5EmP4uk9q7b2JfpwSMe",
  "key30": "4QX6k72cCAin8ZEXwyDfrjUnM5EbCNfZrs935goFw1xeyRixws66SmWjQ3vWE4VfRhfwnH2JjuzhrsYoH6wPKRzz",
  "key31": "HJLZ97ZMKakQeWGKcvHAuxKowGnemQCqWgV1sd1Mg5wASg8gnwQRhy7R6cBwz44ScxQYRXehBWYrgoSYtNjaK6G",
  "key32": "44ghTc8YXo4mqhZQ9vrLb3W4gV8RfLVJd6yDvS5XfLDXiEcoRv2d6ZborpXPuh1siTwsnj8M62vPQYPG3z4zfaWk",
  "key33": "2HuJZSBGcG4wpns81nWzzsBCWJ96knUi1URbbcUhnqGM2KzeM3wWDJMMKGExLsyfJPd4ZLKG6ZBDkUiuQyV2LP2j",
  "key34": "2eSGVDLCPjFHnJ2ngxkfW4RZfnE9qL72TbyDTiMHof3SqEW55ZW5XLP4JFqzs3HS1woBTTMDkckHn9gVTTJ8URH8",
  "key35": "ZffjffXhnADRc5kK1yZmXQh1n9Tv6F6kRrbwjjMmXXgqSWzZwKCosVbgz8VDsH4cEbLxuLQ125XVAWnDxZar4Ze",
  "key36": "PFo8g381oQgZRwQToAWfxoDbruh83hyE1o376N3uzupau6r6zqLALFCkNjEh1TqR1ytAT2rgWa8P7aSzzSakM54",
  "key37": "2GVLUXGBWCrnWvSoT8rB5Zp9KeHHfZJzusuJWPnrB6jFqSoN5dHVhd315V9L1PhccC1prqfSkDGiriWqCTBDEeto",
  "key38": "n1Za8hpB3uwquzvgneL4xDXRUeSgwXntSDnk17gc4mgSy1GLYo3ZVBjbtu2rTSNQsZ6xTvG3RdcVum5uPNnc7V1",
  "key39": "28jAjvwz8BumHKvtMTvaHXXwcK7TDEVfLNRSMcWmJjPN54MMcjTBHwU2d3t4SYzC6Cv7nqMbgSqBiXkTV1WVq4wX",
  "key40": "5cWe6ZTyLxoQrQ8TmnySAS9jAtFfvawBxkXBSAgbxMNmnLbAwxrTgHKWdhwBiy42USmJz2n8WcxBia8MHCsr3qP6",
  "key41": "3pJm4N7EMAa8KRxmopD8VkYR7LayZPvCAJHj9askdc1jqASD7TYLWku48iEA2HCNe1PJP2Bsyz1kFsVVzsCzUsYN",
  "key42": "3hsgJpbhtrqccPFx1Axp5ihvLkHVgZJaQnV45MnT2q55LozpNKq2qyscygxcJ4uQuCVfi1UMpyc6BvcsWfth9xg7",
  "key43": "44id8T7CY93A66bEjddDZQYkTfcJRbSC1KBbiVKNaowD17WL1C7zq3A2xMPTzkhrrjdvvTWXHWPMGV9kVgM2NZkk",
  "key44": "5Edjgh4ysr7Ggpknbk5T5yUanjBT9PicCoFZdSJ7hhwBYUKVMoe34a9u6qkiRKPDkXFQN6VfvkH93xxo3GvErPyE",
  "key45": "8xr6vFEgqXVoBAJ9rYXmHnyRf4y52fEehTZCqY6hAY21wL8AjiQ95wuUK7MjbGQYQtLp7ovoYbCKmgCTJSqBigb",
  "key46": "29UeqzoJTQSoYdmnZuTiYa4fYGzoSAtH9rmTUcCdSgmGyXcKbNWKfC1ws3mfYUfVURAHCqAsgFseHipNqvDh4zSx",
  "key47": "2C8Ah2JPUHmTDUx71ttLvN73R3cTN3eGqwpizEudUuCunFsfRtTRNhzcH8Ke79sMhDMH5fYapFgEhZVCUkN7D5rE",
  "key48": "5EdgZDG8KypURuZFL6UXAFHefrmYU2WnxfkbHutjawPd9fcb976tqZzoiegvZRmfugzdpuJS6japqmv8DygdTs3W"
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
