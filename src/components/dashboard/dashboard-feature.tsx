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
    "4T3ycfMbSwZrhmVoLSMEHN2X9gpZSNS66iNLb3twD4So9jL4CwTjATSenAQrLv9Ni3uvQzrr1WCoz9iYrXcUywFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g981tFWG3dsYcBYrvTKaRsVzvE7sevkU9TzNqWtPwVphZnpkT1xw2tWA2JhtgWNY3iptwd2gZVESvQZaGyYi48L",
  "key1": "KnuyFusC4tVy9jLXBFqMv4Efr4Kjr6qy6fVQAkbp5YaU6LFDDg128mCeeGfS9mMLPmcVuMnWthdBmeGUsZ3jDRk",
  "key2": "3C4na28EjT4CXSdFsMHGhH34YqmYu9agrFYAXYjKtsHvH6c3JXmMWcXAPE263ibMGfW9LhkkxfDrfhoZ1dHtGFNx",
  "key3": "3gB16mhLc7XBFCeyUS8BZUxwBZU1vDYQpb8wD64mgskSYRBpG1XuyoRPYrc5VpWhY9gjXW7n4ERg2YYfLUBrKcMs",
  "key4": "2qbadSW7q8fS22rq2sS5hG9n2RuR1LfYafRS9VXeCYhskcA89dQwtATVN3BXBDAsEM2zim87RvoJ97xvoKbP9PmL",
  "key5": "RPo7UvMKGFAVmhXTRGmY75wMZ2HPHW8GX8pKyNWudBerTPMG9tLfEgGFDTWuSHSH7ce9pcYm7enZo5EaaPcWudp",
  "key6": "59heLSMTS4WFYC1oGpW2qF8eT6j8BjWJkVzh6wc29GXQTX61hXesHjvmm6nHYr5eFXXWY1muSVqdvnKAWHxrhEkN",
  "key7": "5pCM9TG7HUiBBMC7awCjJj78GUm2igujJuX9pCJtVzp91jnob3NSwU3i4ApbRCLj8zqaYczDoJCxExEQhH4UPXxS",
  "key8": "5HsGmzm3QV1JZYpqnArawsu1D1vxLu8NXLnn9F1iBjPG4cqKVj4J1T9uPqPqha4qAxUrA4iFUioKUctBpVTMHDf8",
  "key9": "5BygSojZNSCEA87SqxXSiFthvXGfDnpuqDwnVke2eRU3a3Sx26GWcM71Vx2WmmhA7TXokUsRDmViUSWjTomGa8fV",
  "key10": "5smS3m5d6V5ujMSUcu8hQ3A81Zq4hZ9DaQbb3TCi5TbTeCjzNUajnHwkk7ARxpnsDueXMYanrE35ms3jt2UM2hW3",
  "key11": "3P5ESMkEXJVgVoMteEPo4LNk6Q48HE4HuPaUVZPPgj8X4K8b9rwRfLCSeVaiNqxUGTKPptfxreChTFg2o7GWPay6",
  "key12": "28jvxwZ4G9bR6592zN6o41MF8x7n4pHBzfKm2ys3b7gjb9dAPEgTqQWCkHgsRLRvPQR22Qr14xYaethtDLajC4tr",
  "key13": "2yqNbb6bbV7tLMz6FxEEE6jxZgT9FHLq8vq7s4Ai4kCWU6wXokMPSbtoY9rX1aEwDDYsvmkLkQkDFhMUYuQDrdpP",
  "key14": "3RuJC2GEMyDKLBgRU3UVemRA7UejFnfz44CSTz7rWCv35LMY33c3yFjEvss4vDsgGNpwFL8ert6c26Td7fNBWXaH",
  "key15": "SDiQVrr3jaxNLAHLKtkM8Xh2BHjnDRWHWe4p31rNSbRSfawptqWoXCnt9u5JVe8KtvQhynfbnJQrxzCSHNbAGgi",
  "key16": "48emhcuisrgoqbpacsSa1xGhpRCt2nRDE3GGFNabnnw53D93KUjSwpMYtkFrHttzrpet2DcNgK111xTp2LLHtJbS",
  "key17": "49kYwwrSWR2e1y1CkfMod3co2zSZRBArUgsKQppmkY7o8ciFKXGeBq2qooFGQiwzqvFu5zoGhvkpgBEmtGpe19PS",
  "key18": "fejaJj63uTrsvgKH5mWNyGwMVATBWu9Un1qiA35LCC7pRjYavVMV95Mzc73XDLVWfD5unUwQqbBg3tEeXJ3jrrc",
  "key19": "2fdF9FGewWPqJSNuLwBQJjH7dDn9QndygqAhqjmSiBCTerrj6DiTDjBWGy7ZTeCVZXVW92hhHWY2EcSXWvjFPUMM",
  "key20": "5g9TVYAcXQhUhDZLEr6u8D2igYRHfGU1ZpPWhva8LUnQu5HnChqD66nUYU4syccevgk7W74j3zMG3f6T8bMYnote",
  "key21": "632nxi2o8N6yQpsFBWge6nZ5rYpv6pQ5Gkrnvsq1mZwmV2XowBeeQkZw23ZfzDw3fZ16o5ajUniWMAyYus4XxJJV",
  "key22": "2oektMXiydUeFBunzD7pbnWqRLUAW6q1jQ9p7pddNQ5Uj9B3zKm4EbqGChDJ6UtgtpZUU2rjQZUEpTtB3tdDua7o",
  "key23": "5acC5LSHWn9BWf77VoFxS4VgneeqWrNtPWoGctjvjhcCFGwT3rwj5eGDaJRzn1xPh76rYLYGhAHLxVmah3zsK3uS",
  "key24": "4byihALLQjVdNYhoKqsxKsGHRc6sFbb9xonriiYaFMj7dLNzvmwWum3cob4dqBJ6K8mUycGMjz8Ux1asgqgaMuNF",
  "key25": "2xqu1VaZ9dYwnXyvkvzrhXMfHLtPher7kSeVomoAJe4KCeaqujgptHdQEufUA89gZjUjcs41u611p5KVVXPWH5Ah",
  "key26": "4WR5g97Z6i22af9WRgNTfQk2PXtmTpWu3HQb2BF4xZXfqtFsjBg34dirWMFhwxybN7kegHKLzVhPfesJhXsYm6d7",
  "key27": "2c3ATkKGaMEVs9gCcp9z2xxn5mxPKt2CpDSsWxtrCobzHdtyvwCinwEn3Gnr38zxz1Kmxemu81pEzPp5CRjuFWz7"
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
