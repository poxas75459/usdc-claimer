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
    "5tjPA9pynaymMQSkG5qUcHAufetw4YMnDMesBAj4ESUg9VKBhmXnijv8bu3SJ5WHmF4zz9kVrp4FwZGd8JrEnEjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nTfNcFm1B5cLX17ziR9Y4PwN2AZLFG9prX6BmnZLM4hsxoXyetr318xZJockovW1Rr6zX2iHD8tJByVP3wKuN19",
  "key1": "4QqWwZMRA3tSMwsVeKYMJeUSGZCUy8EDDj7FZBEjC5TFazQJcRcMsZfvqFokTjwuBET4eiLBRxpMsiRbHF4g78Ck",
  "key2": "2VH2R3sS6wNRZ1YpcAsRHi9fZomr5MeoAQnz4eoi5ekn2GzycRMUfT4xNAJw48NjSmSNHYP5tvUjfVCAzWHeJUNA",
  "key3": "37rKDhvbbU5kQTFm494Wgxj4sMiaepZrMnQ1vwBszQmipzpdoZxcFB2cUxmjnV7F4PpnqpZij893e5CK8kns4sSg",
  "key4": "28HwZe9nHP5V22Pqn3pXGaaiYW1yw8Qbwa7LE1LEWcBqyyuRTDMZjBqDnkLrvb2pgeWSuMH6sidxRjzd96vB8pQ4",
  "key5": "4Vd1bNhDqYMxHrFNSx5j9TAqBqxh1nCCQnvwKKudYnVbnCSjrTXEuUm2f4H27GEccnuks1hZB55s5f7qdKXAt6MA",
  "key6": "EBGyXZ6srmHBETJngopj3phM6eJs35SXRVTPY2YyPdQ14iRNFEF2Ut5TMtNrTYtLsy2fiGiz7L2cCi58D3SynyE",
  "key7": "2EicJPRQr8zhEuLSihnXK3wPyDERpV35nBLEJsm8GY5aNhJSkTidub3yJCCSJwiW2K9k22xq56wa91ahXWVhXUWn",
  "key8": "aCggDnWo52ysqhPXR5nuAf77tEPbUPf6gezFyNXsQG99aavEHdhGxMj1ca6MV2r7BeMJseBAmmrLsH8LU9BZG2G",
  "key9": "xDSt4Zatc1XdWRAXghmW2uZZ8nxu63z1FVFpmQxNWkC4HkDUnjacPTPN6JdpnvcXHsSxCMK9ZQTMf3UDNDC6kFs",
  "key10": "57P7jpcQm1R8uJGJjvee765pn3xTDPUevt1k1hQVqBzJik663wpw1bG7y8KuXnGs3SmXuiveVYz1ck3zzpspfFCz",
  "key11": "5s843xdhiWvg43ntwCuXUJTYVi8rCYp7T9PsQHy8gtiTdqB1Pb2B6MdrTNjq3PmMReLkEk8dyxpQt3ai4MhBjZGu",
  "key12": "UQS5NaTGSghKxwBiKL7fdK9j78wKea1vGvSJPERZwwTBgieLQpZndMeAMuK55DE4wQFrGJVmi7vVVuzZK8btLED",
  "key13": "3rMxbyZjw4gVTuzGGzFmstvL5ej8H3L8pkRCFj3aPfP8dpmVJusnfQoEpp5z9SPMYA91n2ajqMZ8xnhXcjnSCoDa",
  "key14": "2Dtw9fJwwDG8XUavi3oCjGMt6WHa9QqPCa9XNp4oQ4nyhjvVSKuJkmGd1t6sJ5sC9ktMwcPpbyuVB8vDfxc7XisY",
  "key15": "4HMjFKLMi8ZGdXy8Q2bMBThDhX4BNqWcheh1QhxZ8p73aF38xMQvTbjEmTyd2E3aXj8Gj231A4fpWSEL7Zr2iVT4",
  "key16": "5p8p7kwQAfxqZgqeFB79xyNVnHLLCKNsPNLRJ65CvAmEgtP1Rc3ppj2Te1jpkRH5JEQt8afGLG8dA2jRJZF8webw",
  "key17": "3TiScJiHYjnN8XU8x1AXWSP4XKtUjqLfEVaMemc4ANvTJs5tjzX7EnroVMzfXd6wL1Uh3hmiXENgC9hM7qkQUEeH",
  "key18": "2aD3MLCdJmDBG1Kb44QwGZHevsZYnCCvycdZrdcfvdJZHS38c3YGYCE6edQwZcdxvrEhnUUYgEgeT3cMbbB5iknv",
  "key19": "5sKHhH6w75YfkNHgrifbH9r4bNyokJyjLk78KWRSC4KJkmkTqXsKjpd6bknojebSLeEQAKbcw4Byfmyxvtjgrbh2",
  "key20": "58jY5jpttXQ9u4pPAkVgaaLGxY9a5Fk6oRANfkHY9cK3R7apE3cn7ab4RCQNqoGAtsSd5AAM3A1JzDw9CbQAfG9U",
  "key21": "5FPtcbxtSdffsq2LvPveZpXgvEsLD2B5ikikx9hpRzW8ogVUhtjQGkFGyhEM2h5UaeeV6BxXh9uSFBSBEy9faaCh",
  "key22": "5Cvz2HDGZ6WJ96iujcmkBE2MH8D1FeLf4rGJdWqMTFRLyuNHgf4G6TLKHC95gNXMQjaDHdrrYY25kZayXsEeBmMY",
  "key23": "3k5jcHQbLN9QGsuHZUVsaU8x9W8fiNKAGZXuGPx2BqL3YJ2FjDkCPosnWo67jZa3LdTAML2CfXdXFMJwRJ6ijLeo",
  "key24": "55kPYcLXnWdkyzAYbUP5VhNo9qQNfco8Hij3x6ZQEo4d9xeuJjTrxGDm7BEoDwv3jhNVpWHaCh4DVC6FMGWE6Y1S",
  "key25": "fS4zh158Qq3P1nBbXdrHRf1wxJpphDm5gc9URXt9D8TDhj3r8mC9quJJUCsuovJB1ATebai3aEvzd6P9rAZkyiv",
  "key26": "qj61ucrEnRfX4dsLfYCxpWLrZyxjGhUreKUU4HcFTG2rHcBzY5dbTsEWXdrWLRnyG5FSkSibaQYXPZ92mv1jt7q",
  "key27": "WyWeDJqixBfm15ERVLFmysZnRaJkuLJ48UoE2uZtHD8fn1sEr2UEjuohj2F7dnQmDN4hxbNmAUx6b5eAmcZH8Rp",
  "key28": "2DDfcoU2rW7eEmN4hMVmpL46d1VRAhCSBqoJ2gaa3z1pGchVp73vqCbMEua2633nZp4ZhDB13Hp9xq4MsxjEXgBx"
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
