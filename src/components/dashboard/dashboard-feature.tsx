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
    "HtUrdVxMR7dCJoFctoHVFFUdMMiJVycpRegHTVihEB3i3MFTx6Ey9QwwyT8RoJKrMpeWyHJbYwu3z4UoPzbxTXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJ5nFEy69rmyPo3vomyXZBrUCpgW93wQaqHbdybcECfqZyxHazQJRgS4A6cDd5jm3wuoRrmLnmXQ6odf6ts3bDW",
  "key1": "UHk9t5N1uBvbRaPn87o5MjetYiSX4nC91M4SZEZAEmCSPoh1HS7x2tGtprNze21mZpFHerUtu7hsAv8cH2B8w3e",
  "key2": "5QzKfJbsxtqJm2mcuXHkSKrHGiVtD9dwk4UTwYNmfuw8prz1AeRK8gtRtgkZhk5u733T5cfRFMRXc8u62bhBCnqc",
  "key3": "2cb597V9sVeVtfHPX5fKn91re6T9MXhT7Tid1Bs7rjHt3Ci9Ydr9S9VQn9SXrPW1qX9WFEr3eVv8qyK4BdstFNrk",
  "key4": "rK2v6JAa1r7raew2Hcnw7yXvF11AaZzBRySxS4TrgTvDtHYiQu7sBJFpXxSdWFtZfQEaHLX2YFtQN2zHNdmGWtv",
  "key5": "4zt9zZbScfVmt6U4FBvvqBC2DyUazddYpuq7cmMdi6j5SEAY9gVTzg2XApbuSvQTC9iXtveMdtNyEizjcrCRbMVv",
  "key6": "4icwuf8fBd4VFstJ6AtU53ccpvreFvs5yXLJsKTaFA55xAhbRZna13MG9e4FfUuPtmdKuL2BTiTLKSQ7MaEtLy2t",
  "key7": "SMtQSBoUkS19YWPet72v3dG782EagTQudFZdKTcG8LVPFFmsFvbagXAE9x5kEvSeTQgywk5hd5HNEb6uLCENdqs",
  "key8": "4LaoNXJUGE1yNTah4sBJjmnpbSDDRyuJ3sx8GhEvVXrhmJcpZrw2VauYAfgXEtDMXDPQJzamQMXnTa2CGsdgtokB",
  "key9": "62uSnaQNcxxyo2uvd7A9Rc2VCeoAXbXrUNBPfTQfVGvVLH9a7BmJr1D5CZBBt4GRrUioRbPxjahczkHMUjhWwmPY",
  "key10": "r1kbTdSmxk42Ttz18M42n5dvqoheoNctLDgo7CDytPHHiWLwstV12WXCKkqBiDkwLLX1tria3UKH58QKPCrW3rZ",
  "key11": "3n8Kyuw43nnhVa4NoLS4aC4cUfGZYqdLQ1VEwgNJNtfkUyLLh78hbRpejRtHYf1varS6gjoTXVU9n8jiwES5Avwj",
  "key12": "9sa9uPVkVSvnuq6P9B9xCZMAiXe1LGaL2C2U9S2yjaR982Ep63bUcW1AXf8Ygr8Ekvz12k4LeYDc9gKXYt58brE",
  "key13": "5tnBTPrNvtkERLj2dFxyw9RKEnEt2CbRrfqxtTHKijmNzPm6nMHpMdrdB8QCN2EtG8R1vSeMFpuZUdwgX366Ba2J",
  "key14": "4iXyjoqci4eZzkX2QEPfnsbhizTNmC6vNQKLpsJkFtWj4KYTZHc5oWAMeqneRtsyMDgXpPBRtzPfzNwDCfLjRpnV",
  "key15": "3u9jwpVSYS9PZ6DM2kzfxLxUxb3WJQhZxXcAH8svF1vEDB4thMwe593FTXqasKPuRCH6oRKxqZ4coBSRc1yfoakk",
  "key16": "4bjFuLWWUFDNzGu7oamzzKGEdF4MbatN3QaPdbkPYP4XsRNfmkjD4qSFLTNSd3mXNHgmSG137NuC6dCtm3qQrfei",
  "key17": "614zDG1K4VQMMumWf3dhFdS5rtgAtxnr6LDgdZvj7r187NhYZWFjd2N5MnbPe5kp9ZqDYdFr321XeGcVGx1zzqpS",
  "key18": "5CwXaVoNvyayxgDX2Fao8ksxnYQjqbQoesrFhgiwM7ZGQRd5B1XZQ6V9Y2dDLZx38gzxa8WFg5Fa1YG3SmnqBZSt",
  "key19": "5f2g2135LN4mwFRfzfJjYjLGPzgnRwiP8KczUmVB5EwYTV9xsGD99PZh24dT1P4ETpDh1ugWNG9zJdm5DawfqJGh",
  "key20": "4WkprtZeQBvQXimTueNZudmK4TcGymJMVDoBwkUuAs1FHMUquBZPSAo5LDQwSSSPsZz37A23UcmgcshbVVnhotAH",
  "key21": "RpnhHR9fipQoPS4SmCi8VQY1XxYTT5GQe2B3L52H7WGKoEYC7tpjXiwdDh14fMH1MdUi9QFGf4Z4Zhez7nMJ13T",
  "key22": "3tUcduU53SM9CepXrx8Q4CoXbPRAyZEQY6oEu4w9FMBQdR3mv5rXGuxYhwaPf62mkpa8Rug8uNPVxndniCrhm2pp",
  "key23": "2qqZu1URFtRXBHzga6BP5yBSTZxbyj7zHRRTQBK8aDUv5aKq4BGX43mrj4b64LfQh5M71djLX5Z7H7LuxZ66U5J",
  "key24": "2pJcquDF4Meqm7y9wBK4yngWNS75jbQSCLNEFCzPYoH7Hdfz7AfuRi7ms7UvJ5iJwjWfKuUQcQxxfYQMcvUdNX49",
  "key25": "4tk3XkXq15A4JxR7bvPXDxPhjkZBRyrofe2Wkwf3TsRRhLMRW47fjxoHEj9Cv6Q43Ys6G9gQwa5MpS8z32aB7yJ5",
  "key26": "gAzYjUj52ecXncTintpdtLK37h3B7G469E7gSz5vo5eBHJ6jrQGTPuCq6trXCdzirXmvdK56UtrUz9DSxnGgJ2c"
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
