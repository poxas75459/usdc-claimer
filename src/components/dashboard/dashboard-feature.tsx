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
    "5vaS68XwD8SuDi3wvC6L97rYL5zeRtqwQffyBNQ4SiUVsKoCtPsr6TjxvGxqNzkJBBUbvGE1QEDCTHxEnCHN4w92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "464WKHt75YsfFZSMueHBSRgRSsAxz58PYRV5UkwT6F765VRFWFqMdXRvTatY4rTcUuAbAiML9FDFfSYjNXCyaYrr",
  "key1": "L9vAA6W6xTodRd2Vgw6466MqABeBMnn8K4Wykq7d2ax8aGm11DLPWssNXvmz89A7mGyG9ofLXQ1ECpbfjSbHDPv",
  "key2": "4PEuA5JoGss7vnzrPoQkmbqxbGqW9nZog339VPm7ftSiWZyj292GYPJ1qGPKjAx7NcmaNsHD9piPZZm4T4ndfmUn",
  "key3": "3HgkFRfVJP3jJKf6YQXvEsVi6r8nJfxqWWHdU6pzESzaNQPepoB8zuw97xNrs5eKhW3HYC6JNbM9se57N4iZVXmV",
  "key4": "2gg66ZCTdpktvjLRq95vegL8ZRAY7W4ciAtw3ypDKgPb6J7cLEcEN2B3hkNRG6Nbcxo9TWqmPLc1RTAYMfLGJTup",
  "key5": "38b72MLhixZLxqUenxRBn1G31RPuHEwSZvuGYUAdm8yyfeqoDogamQosm5AoSUTLEm8vVmTmTcXT4fqWPdaJ4Q3i",
  "key6": "5zbzERUXfwKr575YJ61xrX2XattLB8tKohBLFNapCaGnPNd6625ph4o7jQvvpHxdSTnAZ41wqihY8dmDXS8LVesC",
  "key7": "4EHSCZG5QEEgsiBHPvvtzqUhRcuNFKgBWweCsmcn9UctGfULhKC9YzpdfrTod3CAEwjXGJcakH5ouTMy3FLjCUeK",
  "key8": "5gvopHq22fCxN4m672DV9hcSXqStdPUxZhLMvpAbxRTU8sEqj66wnSeZC873MpKJsWWv5Dmcw3T9bxeUeG1w7b9p",
  "key9": "4vaiEUhtkTbbUasdCNPVkfgqoK74VAwUscDvHPAMPvWn8NYGXYxqUVErCpgVwDZYvHkhkk3EMNucWuWyj53dAkz3",
  "key10": "58qosdmnBHo6tfnoVm2rgvybk9Btsmvc1hrfRWCQud89A6qe2XayXHZe5oh3gtNz2ekBuiEiZZy3SfUbxjWqw8wG",
  "key11": "5U8MQfNGaHUVqDLYSGS6uevWoMFMnsS983HLniorBpv8YoNzTmetBuE9KtyAyMydh35zmQciL4XJdqxuvp7qGXHC",
  "key12": "4qAUSbvXCXCrxXzsQQ6STauKpA54E95gRc4ESJVWFoPJYKDctcQsM7TVFG9L6jDccds6jGF4fXX7HGRjUdKaWap5",
  "key13": "5E9CYtSCATDLVNtKzayceCe8ScNdxw423ytBpJ1DYQeQzG62NxCBL9gUAK2L2JTMo7gvsqVt3GXHxaHkJwJKSg2e",
  "key14": "49x5vezDxYM18zLscy8LE65FAFVSmQRjY7nSW7etHbSCTf3LAejzYJazJ4PRU8iRVVKZrUUX81dX1tfYeXqRQDis",
  "key15": "3uzCdQvbC1JjEfvSH6yUjP1DRY2q9sT7RHfXJovdHc64UwgnhJ6jEcMsfRwi1acsvGuZVPxa8CacowN9mjRqhFuh",
  "key16": "hehykVxFrvycrrnUtxkWX2imstvi84DE2HMGpAvaoiahLoJaFemVVwUFRvwswCfo2WvmfXBkksnmGAeLPzRgnVt",
  "key17": "3zUYNj6dztxXmsGtGwDDTXoPBYJBRg8ypqWozR9WtJ1GbaZxCGyLd3LYjNymwo53RoKmnm6qS4gSfY3N8bRs5PA1",
  "key18": "3whzNUk1WGgaFRf6PEd6Q2PsENyEBv5SNt6N45omngwAX7wSoFkNkhKcAxmnn22K3Bsf1GUqXq5UFr26JDPntoae",
  "key19": "39tBePRUNyAno9aXKZJErQU7JAN7bGgGCWnRP3zWTSrtqyGjp4FZxboakrvYJd3Ai222a5uqiSNBQ86dSSXC4Uxq",
  "key20": "34w1WtyZRh28dDNn3bpQnPyWD5Tqp1hWy7ocQqFrAG8CZBtB5ziKwC7tSTExAad1oUJgArFTU6Zgn66tKzBuRcHy",
  "key21": "2uEo9bkKE6SiXrHavzUaGwHbk1fNu3g2NWpLtXMRBd5vCoJreojSQktGcfcNH4Yy4Y9hmkuUxgGSxmcBPWRrJ4Qq",
  "key22": "5WZS2N2szWXxUs4VkP2DpyLUXG4rd7yTrKgeUuN6VGctyFBghT3tTWn8bKzeWaHB5NZRvtfbphgBo67zQuKRyBWD",
  "key23": "4xfxnkZrYJjLHDevJwcpaBu7bw2P35QycUYf8xB9SwL3TKwqtpiVnCnj1cJEddaL6wiE6VsMNL2WYtiAnkVJFxDB",
  "key24": "3amCajXAG1aA7akjESv1ij9HCnBXbk9jB8cLHZYZjcPDovFsENuYF5Jjk7m8z2ePawVEEuJ6Refx9C5PDGfdU4LB",
  "key25": "NuMkG3ZXXPC3b19RLoz4tgYBPgWzj6oc99GZmgi5tFPdBaz4P6rmZ1pAEAzDLi4Wh7kMAMcsUagRCECtyoAdtKe",
  "key26": "3cebabWeGqq1U6Enu2h88mgWfb4aiZjgkqJ9Pm14zAiK1fqDjc4MD2Nnk2hvDvPLb8CLAWw948HeGZs1uSoSXsxP",
  "key27": "5NtB79gEj9BhvE5DqqeqTffYaREKL9ZMQvpdSPaLjhmbm3mC32w7scbXHQGCaeEzBv6orRXCuzuFudK7sdj4ib5z",
  "key28": "3v37EhwwxPEwwq2fzcaF1Wo3Y2KH9AyLG6Vsxq1kBHiJ5PMRmCrWA9Eg1AZM8uq831qYsnBM3q219VSnfhfZE1yp",
  "key29": "3J5Z7TMAtCwoDKW5YYZegWpMtm3XWv98PPFr3Ef3imQVCDBErLqNp8BJX7ksKXATc4KxLSexgwipp3KRCdx3n3UW",
  "key30": "4myEptXWRMUPFTtpzF3KaG65GrT7fcnpePLLiYDENqxfokJtLL7yywrDR7ASMw8LhqTFZ9MTqS7gy4yhFxvEPyj4",
  "key31": "4rg6pGkt2fMKxYiUhFfWGcqmo6MiVFWutSwMmhXGb6YC4D7L88yRuze2VaNoi793t2684LgYULhqoAb5ojPBYPJ3",
  "key32": "22qzRvSoyCeTP2iRGL9Ny94iHm7MMLWv7nfcsywVmEFFU5jWHDHuBtbXmWVs2jDzWLMU6fFjRU7mNdDViRgRSzo2",
  "key33": "3jrC9QtZW2XmyVPtT2e1S7KvxifkqeDZSTyF51uDgY4wFh3goVHxcM3id3VaeC9bFdF3CAy7Mc7o7JXsCuSAecaa"
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
