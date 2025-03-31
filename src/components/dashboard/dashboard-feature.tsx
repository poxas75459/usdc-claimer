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
    "5ZEw76N93u4YU1T2NBWBvRM1hwpJ6PAC5T2hvjyHMw7WveFZAW3LrHk96Zw8BZxUtJWDmDMcP1B1beuWsTaLHs9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vj9TLJR6Z9nunqYpvQbxv6hWGYg2eAggoSm2gue25aEMxNsC6cMyjqqR8rQ5DuZ2w2vX69xP9QsSVhMxfCEzShs",
  "key1": "5Jn6VJafSNP7cBfzLF21zjJtbckSo9ztwjTWPgshoZHR1yjMURLHuoxHWz414TMzCdyG4AnWTsGPn2wyFQzDeRib",
  "key2": "4cU6J4PgdAgpNvCwRgst4Jo2tkeQXDSD9LxiqAG7hDhjRZbvYiThEift4esnXPRfAHsVHqveTqsiRkaP4eXzwrto",
  "key3": "4U3LLbWHmXTZeu4u3aQeZemhteWNZu8cZ8CrixP1To2wRbv7NtCJdVBpoib7BxsCuPcw52nvEMXR1DQbx8XWQRii",
  "key4": "2zcEHz66sqCChZ39zkwynX19dGpezAVSmuenA7W8mXVugubTdnQ129wgaJQZDiCvXRKre5rF4PYyENkXsdVv3XbE",
  "key5": "5Hd4C2gC4v67A4D2q6DthEsL8CCDm72wML5amV2FNXgHso1SNRbQqjzFS9eWEeVEHFdEoAazwU5opTb7sKfRd8CN",
  "key6": "ZWy82PoJ15XvUNmibm58kSv3d7Nfe4zSmnYhWRVgbBaH3UJuUj6imYcpb9oDVuYyfdkLojRfcaJvLr4NKuSCHYT",
  "key7": "4LbiJS2gM5zNXQoLv55oWFGgYm1hGz34SkS8nVnU2vRyeR3qzjkyUQsUJnoZWyeQug9Ltp4ELfeqC53DHegDVgyT",
  "key8": "51fu69ccPeaKqi2q5uSYW2obWcwygDXnAhn2QxK19vrejQpkQAy2i3hCMc1apqSCsPPBgWdvsG2KZoava6RJjwE7",
  "key9": "496tPrf6MUKNQQjmo5WeGpewiTkHEqMB2zyLQFhFxKSLsVeHPHa8bxMpPun5mzBvG5HqZfQaeDDtcZ7bxfFNuYwG",
  "key10": "2hX2dSVF8GN5muRQrLCGbqgPMW8BbXUM5Ug644Uc9itD3U5CKRsjWH8SENvHQhgzPgE7U4uVAnDdeDBNpDYEuTx8",
  "key11": "5tiKTAdkFe63K1oRPWwZvoeerEFR8BjKDjExh1yyyAAmqhdHa7yaEevyxAVFAw5LzAFivGAGn4ZK9UDTt6UDNnXN",
  "key12": "5gULYP3n3bB4nNeFw9Pvy4TiNkesDAhWNSQw1AfZstMwDxHz7rNZEGdaJPDAMf1u6cZJog7Wf4GfB4nrDZaQvs56",
  "key13": "4syVfAkt4FbCJ55bQhagWQf7f36c4H8zTgxARRdXPaGqdoV6cFPGQnZPtwaxERhMXg1yKayHk7tic9uHPKk5bsF9",
  "key14": "2SmBvJYQpTfzT6oSC8tNtJb6LCqgsmA6Mi8mKZgLoqerFDmXtWbo8LxhadMN3j6wxNK8FXB6eSpHqWoAcbsFr8nL",
  "key15": "4XZkV9dJHVgq2sgUdUNb5pmcRCCzzEV9y9iqQSo9o7ihAEadSpi5icAo3byQEeJX5vWEXRnFeSxn7Q5em4WfeTvq",
  "key16": "2Zv7XBpwuGKLrK2hY9WU4yxgB8XPzeWM4ddPw5Xa1nrsF4ovfHwx58ri5HZVRVfFbyhQuAUF78VeYXmRNMF8x7QR",
  "key17": "2o6NpdtCBrVmKrU7agA1sutuTpme19QEuiSRnH6M7jyHuNf9we8iwh88y2Jxk6X5Vf1hFiqEdENnq1x4CJyBimdi",
  "key18": "21DwfK7boguUNtg3zT6jXDmxoY4xPjED7Bg3ZngbFBUfszvwEMse2KK7uxtoTkTHEit9XkVzXkXRHsmyrDKUDB4r",
  "key19": "2vNDXFpD6Jo9zaX6L3UeQsAVMs6YQequX1AZ4jC1uH2gWr59fc6eFH1rSTimo2hfV4ZkssXTAUf6vabTnPsMYtUx",
  "key20": "3UenxLUNCoggTZrWsErSuAhRSdCv4zBG8g2WvJwJYJM3B4Zx8x7aXHPNhb4BAL9uurPNScvHWgH7R5zU1bBXsvMU",
  "key21": "2ckquPEhf5zy7eqhsFwsr29KyJGbzzSeDu625MnhowXujWbxyuum9rp1gQZckyAf18hVrMhGWJGe3i9KF7oCwRGr",
  "key22": "2jy1tNtXjFSDzFd95ZyyCEMU3DH9q4PpN6sxnoNY4az72KDNw1USgRJ5r5cQ5SMRWJevWPU9cchFZKyjkwPnZfP9",
  "key23": "6253Bson8YcqYtd6VQroN9NrHxKA9kJ76ZPtQBWgKyose1jkqhGeVS2Cfi9MZRWk4D1njaSi2FGWkn51mq5J1epc",
  "key24": "4x8brHxKQHPs1TMasUSsP8ruN1Ygsa4CpuZTxzLBGw6V6EGkvB5qrbKtg2QBiqvGkebWKCpp3mxK5hnLcGC6qv2T",
  "key25": "4AfHa5XZDTaAsQHwmztk5eMjkSqdmBR9aYbxu4se8vfGZv1RFWyoXLADCVD6G5Vh62shKGFfz4Ka5ttqz3dVa132",
  "key26": "5pUThSEtdyk9g5ai8JHEXQuehZuWG7SvfUEtGJkFWM6TFfduJguu9DqXB1JGv6dKMUnAue6k14QpbiUzASJUkjja",
  "key27": "4koQAgEKmQm4jK1Afz12t79DoS6spzpMjK5h1F4uHZoC8sf6oBSVJdE1qbLnGDYqL1CAzv8y7vqVpvM6u6L3XEa2",
  "key28": "4c8Y4R8vREoEdsXbj32sjx7qNomhuaummvBhxAdGW4xkRT8TwDv5TtPogDAcVyvLRfLYw3Hq3thW1aD1Pq13TXak",
  "key29": "46KqeMh8U4gqxxXcQZdQr9GKCKET9s8taR8YAhehNdof3RXPkByuzWBeDi1SrHpP1SHPS6JZjWhmgWbXb7ti9sUn",
  "key30": "4URHvpYVnZ7nHnvtEbdzVvWz2oEo4GN7iFpkA6xh54zQ4GiUX7z5PM5v3WpbffwDpt62L9NY5jxEJ7F8RuiCAt2D",
  "key31": "yjyxupZhnPnjt8PLpQkvden5Hxg9LcM5sRJyhiUpdDn5zs2WGfvuNu2muW4z5wt4vVNBfg3tvJkWzBAqBBy49pH",
  "key32": "4mNWJnTzEDNRw2AfEkjg32sWxXJGVVRT51jC8iXjcN6Bp2hPAjXNANVBm23m9DLr1Wg8S7pXj96xykFW2PXjVnzv",
  "key33": "4kTU9pT5MfsrbZbnLkJnqShPMe1VKiUkbn1ei43pBa1ZocnjvpcTmbjqdgvqCqmpedu75gKUmCy2YaVcvYGx82nx",
  "key34": "3zcj4VJCxmsXpqQXZNCX84pFSB5Yy6AhSuXkNKYhybC7BLY2sKQkith4WjQ6o35fBPWMU39nQosJcQmNB7wuxMC5",
  "key35": "AiDAPjaJZczqHBATc1zZmTbuqtnrAH1cWdmfecAfMT1RtVccGahDhdjQZCEkNNuvaWiU8YK7FE8R3b1sMmBcsoE",
  "key36": "3ycTkJ8Uiub45VgtL66iAwdCYxkMcQDz5ZmcDgtN3mpdodERaxFwejqaKBNqNki7jDJwuSeVVoC1Ss17VD4tzneb",
  "key37": "3rH2dvrudHSosy6i3q86XB1BYMtqv5KK9JGLmJ4f8uBFLNvxHUTuEEULehzJtMxDSJQn3XygUzfdHQRouZrsuCsE",
  "key38": "5wzSi55z8jyaLteWP2BHwBE8ya1aP2unXCXXQFWbyoZEjTZdcPRiMXXCA3uKXjC8SF4PW5Zy5nFFQrhRVN4TRg1f",
  "key39": "67Nct4kFqekkMqaJu2q2hEtDpT18JhRXcLCVaHibstxQ9RdahEFiszDDcUvCGwVe9Q28TmdncFp3AVMnsaBAV7WQ",
  "key40": "3hS82MLBbX1X8wgY2J5FWBqXRvVes39pE5hRpLtRtrf4x9B3dPKepoNEr3eBK7cFjgnPdS7vvaQCURuQBxUCfiub",
  "key41": "4z6VARDEbJqhagND7mZVreZvgq8iBVk5HA3rTjfGRYdfhCCYdttVLDHnvUgCkNnKCtpJn7cU5RZvDhhinuw3HxrA",
  "key42": "5dH4ynpQc9mmN6urYAFDBaYLcLYKgW38WWH6vC4CoiV55etMCd23wTs3eRkfJZTyt3ZUEDK4XmohPhYH6KKQGhMr",
  "key43": "2C7pEFdKTa5ipRJscsT2jMRtJAKnqwF3d2cBnbLiLP6wHyQHJeXP9h1cZHhbmp49YsumthNpc2CAxa3fbQ3v2KEj"
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
