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
    "5fXjT6drZNET3FQemhX5W1KKpBSNe64EYaC44KipUDzsEXSMXvhQTYAMU4wLRgu4K196tVx7BDZ3fL8MzGbSTcKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSWE7LZNCE618dFqK5hMg2G8cm2S2Hj5jWhfgKENU81NzRZUJck8C2rR6Wh2Yg2g8jdnNXGm8excuA28xP4fJ6V",
  "key1": "DJaQtDBB3kaH68hiH9EG7vnh2QV3v16nKtXunHqmR8V6oheG3wdqL3UoeZVapH8x9hKkLFBXks6U8xRQfuDNsHq",
  "key2": "urSE3UgD5VDv3jEmBM6sB4bLcZ3nN673s88zu2cf4G4toS66GAzgzcg2E78ovtE8CVTD1UQrpewZTyRLrmtr1ck",
  "key3": "2itzzMEPFvvWX5bYpjd2ygeDq9Cdcwagjp25XCBNFvGPXpmDjtJKz3N5d4Fcc8tCVJSaZt2MiFTipoqD87aNUtbz",
  "key4": "Vyzn4qRSJ4pQZnFtHQGNj2kDGhKftofQNXr2CyezwY67RHhztTsie712v3ag7nvHVqMzU5VAn2JHDWda6wq2g4W",
  "key5": "4gYGTYxU5b6ywH58sZVqoKHR3zhHGcuEDRiHWP1CDtrV3sKJ8Np92kh5dc6EnhhZsJ3CLZere9UqFnTnLM3wUZdg",
  "key6": "54hgsQB36PpyqAFjmXqXTFVRdsVmaxsJ7gsh7Jk8Jh94n1PWqP9FdzmjuP3WWNGPTpzVwddV2PHepacab7yS534c",
  "key7": "2BzajgumZDxxebw6oKrPZMKHwNMcHxxNvXXTaCvQ4AcoDPFisAgEasNi3ARUQFtffzRPE16xSdsC6Jr6CfXexEPr",
  "key8": "3PENyVERjvVdbHQTbXMJrUd2FsysZ4gE2uj2xoffLkpw9X8DGtCpg6ZJNfrYnUYjCiDnYgC68BGYWTQnPWbWi9Ma",
  "key9": "5EzziUZMcQ6WczaepRhgHV9WAQhVKCTbnfECa2ZSdKndb3fYTRK4Qzotzsux8idGWj9sZXgnymd8jETJULoRmy3C",
  "key10": "A9oJcXNMvXT26YZ53jvEg7XrZngJB3G1P3pCrjkL7LSNprKuvyz59Bo91zCPENDw4qbMfuL9mgXPSwr3t63YCay",
  "key11": "4m86kwswwZBGupKy4WQdajRtpjWUyDysBCAeA9nzexijZT8PepHuqUeHAv5aLJ5B1YY7EfJnvuaoLySbpH5uio7E",
  "key12": "5wWB2gQXtgBBBMZAUkqVFUr6cksc8CCdTsUarSRDFhSv9gn21B4icefj9pFFxAqnHGyGugiKGLy5jGuxSMCC27Sr",
  "key13": "2GKiQrjbEpPY7dgjaACnt6skhUNeLKsPxUxUBS1UxxFxx94qHK8XgQzftEMyV59fy9qb2h9QrmJYcPbKkbdkAAdE",
  "key14": "v3qT2TGHdMMZCeCdRaZmjr7it51dvRxUyfVwfM2CjVjTZkwUDp8h9FnzX7C5iCk1Pdjw2zbNf3sm9nymG1DAuG1",
  "key15": "3myjCb5mQCsZouvmCJPrgCso3rrgirTjp26SfaenYDoeFyMdS4cyoEHs2ZfgnPWd48cZX4bBGFjqmHxWBWiS36QP",
  "key16": "2FqDXw5zWHspoCdX63brZaEisoaq1wHNYv8YMmy33psid67Z3uJ3bMDB9NoNJwSQvq66oXmuDKCYt5Zzd1z85yEu",
  "key17": "3d6R8EUNBMcwGxMwsPyPz8NjXndwMAZWrgTSSLMB8owJxH5XSVYtmTGmMjxbxYMYudvVi7vhakdkzvDfiZHn4FDC",
  "key18": "4x78Xtqq2vrn8ACrAvZEMsFWDqkKRk5dwyVxPvD2VAXxdo5RaNvc8BHFgT8GNBqQRYMG4KjSsikYsvC7dqEz9uxy",
  "key19": "2MQTp14ZtCcx8WGgPJCAhQfCtjKk8kMJ4nNSFEDuQ9V97DJXEg6G6jhcnqG4trKPEgi11KBSE28NzShUmePRC2kr",
  "key20": "kgPnS8aHCjFGbvXdgwcfBG3xbuSt267G5xx8cNNiH7AjeJgCWbLDpvXaTohSEU8RLH1C9MG6S7z8o9bxijHrLSe",
  "key21": "3hNK7E7eUMUgK7t5QqtPTpdpw78RSgKt9i9qnbjcxxQ1tcb6F38KuSai5tcutPQE7ma17GWCoNSNQmf7h1Vrw3ew",
  "key22": "7QR5PLpg8PoHTe5iFmjF7K9g6qYbm35Q3VSiKrLS8VKAAXBg2FS2PZHmLrt3VyLsbugRq3y5dzEiVeWYqedHcVE",
  "key23": "Pmv2EdYWKLW3wkAmHvZmfACfJ29eDNRWqYs8chqhNCWj6GXKPXTQUBf66MVeGFtxT7Z7XauXoPPi1zCa2KyCwdE",
  "key24": "dDEowDEfkuFaMSdDKpaziqtVswjCUTcuYseRtzggTSMFZckUpbLodRBuUooo2jboPwdbfSgVZ2JRMo4Gs5vzrZ3",
  "key25": "5gTue8fjMSzMkeFdP5yVVnamiEvBjSYVZ2reU1oyiPBuV8ufwR9Y9D3XrfM2EM81kzXmnSpii3Jp7iMbvgjnTfro",
  "key26": "WFk8ngg5EWet84fRdY31YzMmb98ydbK8cKGF3rd5UucNhfSjgZrx3ixBuoDCCz8HAi5poFqMVmGGmfjc1Z7ycZR",
  "key27": "5MMdquW5eyE4QV98icEsrQY7XvVFij26TJP6yFuf4zprCzTkd4FHaZmGUW1noNrJpCHy5rHTvM5GZc9N1txP8jqE",
  "key28": "3NcSGhRGUUtBSopetqoZALooRw3SyjqgEnrkmtNjEkgfwgN9k6zojwkaNXE11eMXuTM1b5VMeabGkpiSGWffHLSv",
  "key29": "jQxu8CUogRLpvDibG5w1iLxHv8BipfiRpZGiJGN1wtmQjLb2KLJaEziqnTqvABGhSTDRXVdHfUVLPU985LmE9GN",
  "key30": "2mfs1e1W8H1QVhq9ZkQhJ7wBvZKdUxZQkbcXcDP15KDJhZKGRRD3Qyn7mcqD5fJgpmxCZuvCBzBoSdMJ1cPgAsFt",
  "key31": "4nJvbjXsErCCPNWfBvjvkwUQUAvxcRNyQUGRdawo3H2nn16Fb4bgKVyJKfeZnvHi52dmMSUAGCEpAjNTA6CpyrQF",
  "key32": "2e51jdWby7KvFA25wVgk8FFw8ipKSTzdiXYmHRAqL4NfxNHCVgsgAGt68wPVZbJjsc3ii9CxtQkFJk44mcbU2Ycp"
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
