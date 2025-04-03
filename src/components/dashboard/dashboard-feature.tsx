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
    "SWeVU9ef3BPUKF7Yu9BccdKZo6La3rC39Mr42iTbuFWHa7Wpxz38ti674Km2cYg8sH73CMiz3LEjyFirXsqUch6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VV5nopeTVSzNZcYTuNpEKGrxqtWShpD7oHDuypWvz2V6JqEqKkCorrb2ckLPTRaXeNhSR7ssFf9zHP4Zt2DEY7",
  "key1": "3GLgFpXU6sChPdC6JrfVs5eLuycTQ3vZSUhPb5mXzWjJfhz2YSejeCqHEfVCuNUrbnqaL1t4cYtndwJGsiheq8Am",
  "key2": "4j9Tf5PdHiVJCg83rKp57r3bmUDEqwL2GknwopNc3LPcyEM1sSmHiT4eZ6gPeSEwkwVG6KKHMDwrv8qYyuU9UMk",
  "key3": "32mGYZC7s3huPLRJQnQpYbhZXnkZrVr9GPK7CMLQ1YJ4mP1qUAVdkqrQ9RA7335vSFDTXWM2j3ku5v7HU3eTqmka",
  "key4": "35w69ZviXy7rE166MTCCgB3VPsWKwFVBQEYQLXWUx7rUK4jqcrfY5ReyTj4hhenkJAEpTWN7bi7nGgUcH3gz15v4",
  "key5": "4FNHoMGAui4QryJs6ZvXNt4nHNXFdPNqhWAJrt1UCFf8RzYqUSQTuqkJqFF9ZTStuBTCTkspH63vkH48QBbY2gBz",
  "key6": "5KFwmbKUXRRGHtpMkBFTbvEy1NcktQqqubkATta8ZpGxWMeFAwwyWEkWNLhWA5fmUUvs9MH67DehdYor4CkACbsm",
  "key7": "SrQHayWjPi3nfR3UdN4dJgefATRuVe7C487VaSbB8S5ap1kH9JpPXJMh1aQaU7Eij4XqHjjWBpkf4gRGkbPXHWH",
  "key8": "3ucsrnChndBwoaPmrQTf4MwyeJP4AKznNSdKkaeAkwhpZ4n7fKSHVZa9SMhtenpChgxpQzoGpBjGwLuSsoFHVU6h",
  "key9": "3VEDrzBwMLUybDA5WYgdLHbwD3qggJgpzb4YqTjB8SqvmmUMbvVNkpiZSuKQoPmAjvucLFcGTe9tJLQENRrMRBLy",
  "key10": "2VWJCKC4x6ioco4dw1mp6dMyNucaGLwsADvwLX2joz1fM35pMaLTsGurhqxi5MFU7JuD1kaK8bXyvzjsJGTwvMTo",
  "key11": "3oiCKdHFNJDnEHkeHE1yCs6K4JkbrAgLfNCuT4N9SmfNLjz3suFdARkvBDEdwQbKp35mjaC4SQBC2hcehN9xtoWV",
  "key12": "5BJXvG6SpWBniujfRaVmEabUJuSguN6hDncEbK5kw4AjJZGiiwev8qTh7VXNtis6ERSHdG768HRJ57DxEPrdhuvJ",
  "key13": "5GuQ3y89zpV1raG4Xa5LiqtDydZBrfwXbb8HLXwPH6Yn7gCh165pRyhBpoPHSscB92MfzajVChg1Zqao9WibbseB",
  "key14": "3zVPKBj5e9RQM8MXSvGpbGPGPe6GNZ8JtmjY7n7KN6fUjykkseAQEDA6HZqSdgQKrQGL5fWyjdd1oBBfMhwxYfw6",
  "key15": "58owZuCmTEmpcyxwFFhUGQbaqhhjwRppniZU59WTxvhcJTRE4Kk5z598CzN6n6uVNkwewevMg9Afah9ggYLthpy4",
  "key16": "2BJqFXzAikQmD19PL36yFPW4PzcvtJJDiudex7ccSw5LD1aVazY65c6ZFQQLkxqjmtYYmJhV35Yx2WkMFbXEjrUN",
  "key17": "4svDsuKzo3FHEpwdYMAkHP6R19hFiMiqqT4eiGhuXBjipWhheHem5Jz3qgEzKATj4UdkZgMUmCntmVpsKCX4F6YA",
  "key18": "5Akjksc8oVS6LMeQBjLUyAsXCaFt2Rr5Cmb5MCAjVTyQpR97wBs4tgrcvS9qZamEfBvsPHk85Pt6sVUwZV2HDPoe",
  "key19": "FuyBaJqWbWSSkcEZRhf3yijpctfJBSvGyerc2DK2PeaDcWtSHJJKZmLWvBAq1v6XKQBoqiDh4LAneGjFnNmhbb8",
  "key20": "5ycc1Atu7WSzubvGp7byfUeWA2fzmSitXyo1ra8MJoB2gLHemMmxhN2ikx1A4hcDVopNdwW18HxhpE224vJPBRn3",
  "key21": "4DmDH57oR2jxtvhYNAseD9VuNaDDKXczTah91h2mfWmUmZ8TrKw7hj697w8PtW2qPzqyBiQknhnBRy5XU3pQdXxx",
  "key22": "2MwcFJBcisuXqvFfJx52rJSYyshdF5zCSMqsewMcGwV3JFBvv8cvUYkRKY1bNDjhV79YQYzkgZ69bfHJmZQab9Aq",
  "key23": "5Q8frVZVRBnYR9uPntRCPta9eoXn7iZ2hDVB4KEppNgwt9oosjGyMxCJNVKjz98oqo66q5HFEUpotaLP9SLDX75K",
  "key24": "2R2rGi2D91WyytQTAxZicHw16eGhUbhjYs5hJFmcutPzk1TsyXBaryFSjRqJajhLdMpAq1AeDGaX249BDWsDjPL1",
  "key25": "2PnCQUdV3cCFWxCTJJ2kdBckKXXvgJWp9dx95zBXAutTpt7g5Lnofx8GWuLcrxBbgC1jwtCC9dVTBAhUN6mDr2zq",
  "key26": "ZHPHYqsSiiPYEFVAP1VyhttL8TYYLD2CbTojDvkYDvQNVkAWWhJz7XqFuRpvKzAnKVZJfawbVTFnQBxj4BKBxD7",
  "key27": "2b3L84Qd8Dejk9s6gYFhbEBn6BSn3z1TkY7zvxZyq4wfJHmVeriUKZTiDbRQ6awnvA6AvNuEiyPbyQ1NPLtDpMaa",
  "key28": "415vpBY5FNfSunVo6er1sv3J5vc9aFsYSfXwNEJABoC1eM6nZxfQmp9QAw9Jck97fh5xEZNfBCkgArUg6v3NfEoD",
  "key29": "2d7hh8iTbmbKKqkaioJphyHbyHxtbMJ4wrLjVpwjERbW1hPgvBCauMoUbP9jHyyhHWFwddT3CzCgUDary5jAFJkS",
  "key30": "2GeXty2sMx4cbbdVKcqEgrbCZ3SbUsd61CjcgpsuCEmqpHGAYowz44jF5727bRDcuk7SQYoSxVEzmZ3R17GaEovR",
  "key31": "5X8ypg1KZYHwRh7kWDWjBYc7NT2wXpT53G7XjjSHG3HAjeThNpmrKXGUd27Xf8EoFgoTHBmo2yQja7rtXZjjqjsH",
  "key32": "3EiqhwPV5h33F8cpKjspeEzrkhvTBugbh26bKNrZNhixsGX6uDN2xAdkP9CD6TzRkjTj1Xqx9fYpB1qJ81WNWMtB",
  "key33": "38dn9pSqq1Ko8ZG4V8yCdVKoSDPUGuKMsy4dX1VtdYL99YHwAEVjbCoiP2uy2GWoLdxZUFsAMvAzFhiT56AdjGDn",
  "key34": "4p8P9UPuA7ZHXubpiY5FGqtYbnkMaSsmpz2KBHpPd6bfA1mQrrmQRLKN5q6qHAjDBuSgQHEdkNFiNyBijKbdSXdg"
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
