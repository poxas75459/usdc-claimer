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
    "2V6LnZDGCrcXTv7z3LgjNHnY7NvnWkgTP3HGVGSsg9RtBHA23vtKhnmRQnAD6Ckr1HySJgPkUeNcrA57e4q2AFT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zisxk4LUnwyfH4ZffWHSrVY7D7C42q2e8NeLUrjYhtU3eZr6dc1gX44KQnBnn6xhRmemV7KXjyZnT7WuaVQ3JQm",
  "key1": "2jXSLZUb1mvZc525PQJa6JqR518tcrg854ZFqSfidmXuvznbQJ6G9eeXTGHmuD3ab6HWLK12wsF9Kg9HisEtSpG7",
  "key2": "2aUa2aF8rgwfXrATskxDQGRUL94HAJEGizMpFLmt7MGaDHqkcvuBrWM6MLCtzY67QG5Y7fuomNLoFdz5mss8QgzX",
  "key3": "5SPfMaavHF7xrAhZNZXWMjn2u1jUKwZw2ezj5SqaP4dnT1KvuV3zMKbjCKjPDFjxEb8nrHh6N1tPwPowCPJnUih8",
  "key4": "4uSmzFrH6U5vEmkEwG7FkxGoAP6iSoUZRdZNAVtsaYGZ7snqzuc1miQwDnwxNPK19mC7MmyaFiGJQLGcvdvTLzAY",
  "key5": "5QHjPQNFxWN6ELMCquRqrhnJJKKbU6LmRb5mYnEDqWTNiGDLszTu6tcY2xWQwLFbEkGeqXGxGbZRrZ6vtb4ss8cP",
  "key6": "6jsDMbEdNDRMacuNmhwz4xcnWaFyoQLFy9U181j2uaovfJJfaGjb9RCerQkFMaQakDv2SbHgZmZzyyezvvvE6td",
  "key7": "SrNVbWEph3EKoKz3ttXzbwXt76XU6mVBawQy5KbGmBqdXcyzi8ju26pj76SuKrhwKdiFMnSQmpT9jSCyu9d6akF",
  "key8": "532x76asqCurSCaMyfkwTscGAYCgwdBWv5c7UktokFbjyw33BMDPKmLBrJNw5LkkiL1SNVrcHsDViTpTtR9GCN6h",
  "key9": "5YGm6Yih5wsWeULX2d6DAcTjujKHMWqY9nBkmUMV7VcnG5Y2S5KjC8xfYTAwopPwJhPmesmjirgm3RKCMggN3M2u",
  "key10": "5V6JZSdmmWLU8vTwiEF1uaqiD6gQw86wWgGMF8Ggat1XRvZSz74Q2xLRZnftrwhrBRRz4Lt68rJsdaM3mKYJEpUB",
  "key11": "VHEt6DHpQGciUqCjP1wi47rUHBU1jEA8LrTpyUgGW2iuWfgSpxDtN8JFkJu4JF6hXzDw7Ro5uv82B1Cs55n3uja",
  "key12": "2pH9ogFBz4yTrCbMkg9rXqs2NbRkBSTjSXqjpTBEX3AxLMgmya3Vt6EUNyeC7EM1KWVvQXpUUZuLojJJU8GdrH62",
  "key13": "4SgW3DwxmRxpNSw1mppYcjS4d8kzFa9U9ky9uPsPn7KNnNJTxqWxJsFGw6sjQaknVGGk22F8BfPuN5pXCeC5dDDN",
  "key14": "64k8Nk6BU6xMPcdPSc4fiiURZXcF8PUMUTmUXMZEz8sz1XhNv6gof6rhLDg3vZftuKs9vKnHkcpnqgHz7HArkaqV",
  "key15": "4h8Cgk8eFomHQmSSejPnb4NPz7YPbtVYdrFS8vHU3TQNTHJ71rrV1btE7xB34wMMFboog836ScpAp3fDXJ3pmfLn",
  "key16": "4EiTFKEwCAarKeGJy2p8BtaSfrwMsCnV4WxVdPiUxgNdwFtKsufruTKkCvvxecEurU1x9icWefApcQXBiCUaD942",
  "key17": "F6zFi3uULfA916MbdEV25nDWMTpAxSNpo2kNiZqz1FEbSJQPFzAJkaaFsWPnK5fsEDypgeaxMQUsViqU6ENkRNW",
  "key18": "4GdvxwfA43c3t3KHcEMawsqw87zCSbjBzxvToWpBgwrArBYumPueJRUnEx8uoYSru8Pspf6x4V3D1pJRZTsSCa5M",
  "key19": "4sZD5hiz7Dafuf9Mon1K3uVyrS9jT97KboW7PnsVyjdYYBsK9RGNq3Lc8JMiskZXvATEhC9zgZD3YuRawzYvrxU8",
  "key20": "ZrL5RggcAEmU2yd1aPXi3pCpJ5b61UXDe9WsmEUkndsdTJsYHCSTvfa5ihy6UpKCjKwCKP8F6PNRV1AAdw8er3h",
  "key21": "2nJcFHnruVgwecgd5VCYmxStoHqsz2BRR2LN71NfQMbAj2UpxDVefoqLoRSG8LrufKWvLv2VumHHgfGiNHntLB5D",
  "key22": "5ufs9EzQighoptnq6pRn4t4tb4uoPuU4RvPNFideUQMyQWH9VJ7LKzBg7Zm5LJKhS2jeNLebcseKYZE8bA8JruZV",
  "key23": "5PfWGyB3vmfB5oGPafNaft1VGkcpnCZemfgk2UWiGJkBGKSiAM14iaSSRSteRWWps47Ba2sykK3XGueLYW8j82qx",
  "key24": "2pdfzS1GkJcMgukyCDnDzL57bXiKfBRYVJhyvyHZoCZSYG9PiWovNCsXEuV9qHZfCen6gfLfk1Nc53yN1V7HmRJE",
  "key25": "4GWra2cfiPyzrEkHVyH9BozQF25JTXQsv6sm3K4GpPrLEnvzJVhLUKnSYXqp7yU37q1UmhPSrLDgjEWHxQ2RZECo",
  "key26": "BpeqYUwZXX2DnaMTxD2KX48aCPJKNvNxLmkxRCVQdbEo4tTY2GNyPTDRcfFjBqjBZHuXVf8dLWnQLZyB8V6NecM",
  "key27": "2vdNdRrENrKPkv3LpHfP2iGSBjPwA7KfPEeUj2DLXMEamVu6WEUdBYAG9EWVGtNsBmJKPnsMRNGe5aZSLpRRUDBj",
  "key28": "4TSuzJnCJnPMKX1wSa4dEVcQrGnMyAgccRKvAtxY8tYBQUHvtaXbWiBXhBRexXTz5JhFSobPEFV8xFfcC2zaETXK",
  "key29": "4mjUxWfKHaKLCDBxTebiFkvAVBQDe2zeyMh65BnS95ofwEMMjbtzr9rrNoiizQRP9vUZ7yJPSwzYUZdUZqzMYCio",
  "key30": "2yGieHys4krZ7Zs3LoD5zEyf5fCfqsX6Fwvwrg53jLfiCcxMudz2H5LB1H84CPehqh95jUVdaTmajJdMth5sqFGV",
  "key31": "5vaY3x78WVNS6q43tcKwVGd2vEJRGJ9vyH2XrpiJ5TG1Aku1PUe9JEnL4ShVAJM6DmHRFvYzKxCHYEuPZTFaZFnT",
  "key32": "FDf72uNEJAubg9hLeExJQFzmj8UB5WHzRZUdhHcA7hmd4a5cQ9gU7AnauNpDsa5uBEzsYxL3TE1jpoFfGwk6CvW",
  "key33": "66S6pSbuuzib7KpXpW8NwxTwbchC1QHvNfZWQ8JRwmiqTtM9GhCKkYJB6boJ5unZtyCELfqKpa7f2YaRLgTvJxrA",
  "key34": "5zAihhRsKiMUwrnxhj9YoCNBKrwKtnEkFDnvJHDCJmr5dDGHb5GtoHkQ1soVBSFUpUDCCqCAZbBEx9gaRyrzehZV"
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
