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
    "4uaDPTHxZHH1795vATDpiGRUARyJ36hqcTriVCaRktxyTziCHHhKNn3ZqsZs7wb9fkbTdzvfgqedquSsLSe4rGRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wsDqBAk3UBuHx1ygjUXHS24Ry6Mxuma3sLZDNnMGhHJ6bUTZsqWoMNUsZ7B18uhca2Xqv4TPVr1NE8jYnhnrus6",
  "key1": "4evaahWuYa9DHVrnScrEZN1ECnSHLDS7Mft6bufi3MYsjQx4yy9uXVxBD1szWB2SVH7nTgyGqz9vQzfzw2WCifEx",
  "key2": "2BXQQARfQDZ9kb7wQRyhzrG13ijwqLx2gnP4qRn3xfrJJxWUHtCzh665GSt5cExVfYrzJa4pK6FGUMJvA61CqCYv",
  "key3": "5KaxSF2siHETPud6xg9TR88n1MGbVG7JA2J2qxnNpTH9LDW8U3pqJbBCKdLwg38AhCPS7Ub7S5P9DCp3xJkbZfEp",
  "key4": "5f2zJheHiuQknXJpX8jViQShFhyazGCCaLei1aPjgn3L6R9ycW1EE4YocUBSdRDHbAL65G7rL31mBvdu1tG9nZsR",
  "key5": "3QeF81RXGpDxv3T14gKvPnjTYnK5e9ytKCxasJZpVhnFrff6kPJShneBcfCBErQVtxydpxxQr79utQLwdmwgGkFY",
  "key6": "W6PaPLmMhqGDU4aBHcj1CAgTWMScfE6RoDyvSEp7JmWYSfPN5mvmZ6yyVfJaj6niirF9FDQAoC4zPRUm54HWFrx",
  "key7": "43VZW8LSA23RComq8vA4M1EkoPT13b9WrwEnKHLbDBptzWWnxA5u32m4746zf2zx566jtexsubsHX2CBvdQw5T7b",
  "key8": "417Ke6htNjbJUA8YhKzWa77JAUUuYSM2QJD2kofgZg7BNaU1cnkQMX9foFVA8zsTZuYkHDnHwUrsx9DKxwAkp6pz",
  "key9": "LQtCkD9KvjANifynY8YtPbyknc8qKa98zNo78LE4TU1ZqTkTjNFfAGHzq33mHAPcWexL2qmbqbD9UkdHm3yvJKd",
  "key10": "5xYQ3Qk9cUcuAaaCasAbzcMEtnmJoCntTEyzmBHYdM7vuSqaTfX5AyumhfY3JwB5nKoVkVxM7DFEicVDqqgdW9tU",
  "key11": "54NF6uQTrG1yFf2ASuVmPDRLEHWZYCFMw1dvH411oj4bBDTnDz7TR4ncqx2zzMR1mjBixZ3oS3o5duTWExDg8wAX",
  "key12": "4LFN1RWuShBX9NK3rgrzFP8CLE1fHYpuJhYmfnkhfnwe5vc7nxRcsHxeXTque4b91PLKcXaA7UDLtGNQDiantiXV",
  "key13": "25m18a33C4AUvm4Bi7jgdpxwZmdgmGAe1oz4tSxgzvwHawm3PZAzFQJJYEpSF9Dihn9U2zwEbzN3rVNJZrF47jUU",
  "key14": "cfn7JZPTwZcKS75avP5xppVm1mANJxPo1fTjbWQjL7B4zjNdxkfUbENf3Rk48piqPyivX7mg6H9mwZYzvjfRcHy",
  "key15": "3XfuEtHwpmFS3oiqoN5WDCfY6SLkSAxFYoLYRQ9CNCdHQiXnJiRSGXHSEahPfsDWc7JyCb72SAKfJ8VeRGg5vhWn",
  "key16": "324G1vsfiT7XCn7UHgwBL4ar5eSKKGVGVFNtuiCVsjuh5Zn6PKz7YMJrNQqtp94jbVDNYpcf1eFRfTvbB56tWn7x",
  "key17": "a57vXTqAwwSSk4FnVEKp59n8r3SaM3xfbd4TGxWf42WmAQMkZH3JP99JcAUfMshoGLj2EZc2KLRjYq9ZYUhjCC1",
  "key18": "3w8ciPhNyCdUPguHwwQvhzSg1tVv2HmCgGy6Nach9TBGJSJ2XJrH8FUFWMjbtfGMtiy5MpFpEv8GEyA81hxVe2Hs",
  "key19": "4sMDzUW8TJG4U5wCwGBpeptLW9NdGbuSwNZDCKyn2YXUZJ7ZfjGxxvMKZWbu65W5NXWNZX3TtReJNzpLHb4Zexg3",
  "key20": "5rdPAX5fGSt4VtswApjSSrz5YjnsK7ChJnwn5YSQQLA8sb6xAN3Ya8EHwJBEx5rpptJmQCzQwDetLRyfkJfmDCCz",
  "key21": "KTh9h6QAujCy4zktZPCkTcNp5s3PoM8bM2BCz8xTMBiSfpDobyAKsyVCVgxLdLnSdXwNqoCi8oSQ955rB9xTaQW",
  "key22": "4rXbNCbtx3BboZkbc42ucgeSiAvyN9UfexzZsQHG7z2cb1XtY82P7QWZGVcUefFgaoSiCDc8xskcgTmMcPi8js79",
  "key23": "2xnmtiyc1XXCCc6haMXg6WrAqbwNXYHPQyxRUur8n9DiH4xsaAvB294xwLafBBx2jv2oiFjr3PcP7zonZFWSJxpx",
  "key24": "5szDt8eGH9kb6UAFWYjrheqxzSxcGj8jrm8tkgTZz5bQF7TbLF9FhGexT94ptWK9EQd98duSX1EBAzgyZNzzPyKF",
  "key25": "2bo5QoPzpP7mZwmcwcpS3TqSpQZsh9QNLHzdDruFPR5Up53WCJiwXYM3EGnvAoGqVMuYxw6XodHqFF9TMVbkZnG"
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
