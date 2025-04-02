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
    "5qrG3hoiFUhfE7RXzwnwAQddQszT69Rewc1JxAoh8h517yL1KQxEM1QZkpssHu5BckNz6V9WeGL9oyLZSZira5ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFw2AQsBRWtBuHPPsEWGetXuRyUXgsYaXeTLwiT2TX9kVJKave6V3oQzZMuP7y8K17MD2rFjN8tLZ7BG6BuSW6s",
  "key1": "5o3kzkugHWcmkz1rxf81vvKnv9AGU3ByYAu3cdBALkjYpDBGeWgfvdKDuND9UhwBQMYGttUoj71vk1BYuRTEDuqP",
  "key2": "iRnrUNBFRzG1ECzXJjGEpydAsZykBKWcHT8uwJd1Dqdzo6XKNXRrvd7v6TK296oRMVGu12rtcx7GPdCMWGfmAYu",
  "key3": "KNWDk4nmxCax2WRg3h3ePVFrpQQYZiUtq7ec2S5aBQRocHwAMFAnk26y68fb2ae8LZoXD7k85aqz4ipvUhCyhjh",
  "key4": "HSc1Aa1q1XuobUng5iZ1XeX5qPXsWntpLnBwmMrFaYvp3Vjtn9Bivusci6i4K7tUA8DUWp5CKRFbnbAuhvGpFSP",
  "key5": "Ggkj2aGDKpSpdDzkc6dJzz9FCbUSkH4xbZK2kAibrxfSfknhaCd85yvNabLphfv9QeCuGCZJfia6Wu78XxXYTaH",
  "key6": "2L6MHc2WdqWBzw9HxutSvQyeoSkJX5wuF39wYoSzJesSEc2PRqrqS3pfD6qMhQciAzNX2WKs4yuuwCrnHn22F7E2",
  "key7": "3Lmwda3oLCh6y9GgiLsN5AhNVMR38YyGUFPX2xmzyasuPW9x87EmEQ8274aGydm6ScBYH4Dos3ZYkKhQCqevjWqo",
  "key8": "56W4c2kUGZvfUguLqy2U6aTCc4hptZQjq14NxbtUVQWJ7SEPQzLSJs6sztWgvs23HRCxpPqAXXixdWGaH3HwAfMM",
  "key9": "AnRktwrfPQ2i1DD5JKSvMnMM688dvPGcKJqyKvywQN6PJVQMw4UhuTcJMiNyqwawBuA8LcakpPwVZyxmDozGv7J",
  "key10": "5m5nvErY8govDwXALAonp4adXsnb6LXqsezWV5akA3TCkLvzJ4JSBhWfoZggfEqjF46qkAVLcQsJ2TRN5fPuY2Ur",
  "key11": "5NZFeFkmiFsma5w2iiEZaKpJBXLHj1eoQaq8d1GyH52AFMAPq4wSPFRAhkuVxSKivKGR31txPddNZZrwAzkLjNwN",
  "key12": "2cMKQE3qdz35bepDyxe43Ji7uZWLvuxhH7VY1xA4YftMNFUaNBV48GwTJLBc8YswuTVvGFX9eNHC2rvZgiUntMye",
  "key13": "5nnrDYaECqLTYcgsinzytW49f43UjFzxkdmtv6sHcDk7XHHLxKsjKuKPpotstA97XGcrY9iwujVjgub4Wh6HESBt",
  "key14": "5pKpjFvgBwYgiu1idxNqJ3wyxMHq3o9B5EGVAHKQakXyEaKt7oLoPJzDHVuhKpgGPvE3u8qwQWMrnq8FAmMQEX9L",
  "key15": "2kmVgSKiE3Kn2PYS2jSWeDZbcQukPdLFqR3ZdFgini3ADzE4ECX6Tf1JVUzWRjuuG8HZeEgmt4EGanfa5grPYHYM",
  "key16": "5kJQp8d2jtgpZydxmQEyJc9Aih7yXbo8YFZJQ8Wf9YWtT2zdFXLmeDAMtvtjfqMLxqensDcCzSgmMyytP7c5spBo",
  "key17": "3HfeRQxZy1c9m7rvHPnNZJK1QJ9r3fjdkHtPrxp4ksPjqaTTCwsTi29cvhmS5hbvvUgTjeXCfUXaFgMPTPpR4t9y",
  "key18": "2xG1DpNodCUcAAcpZsjVHngdK7L6j9PxVP49kq5djMDKt3okH5iMzpVB6KMMhYv2gw5uB2oG4UjbaH26frhJaqbB",
  "key19": "3Nej9GaXN6ogENsRcUdJfMGysQaC7SExEghJTVWRQtWXbTBFcWgHEWBMGuBBcEWBGigmn949rYMj9mrNsWj8ZPPB",
  "key20": "datbxGha6qq7Sis3Ej4jE5pL6h48UBSnFU664EySoeAxcEM3tAEW6KW6bJJgHqsP8bv4BopfkgqhhdD7nM5yyBr",
  "key21": "51nAUiXdzuVMq2nXREsuXa2Gm8HJKqh81x5UZpFGdG5TnHiXQZfEw56AZRRpxUuJF1bJSViHbxkxBQMZ5d4gVMwi",
  "key22": "5d7C41AnjFTH9igz5TKaEm55d1wx6iqvHHqAHes7gj9RT7wLSLmG4Z28dyExzyPdDpH5TigErjNA5iRtCVz78CzW",
  "key23": "2akj2yNYiYiCNrsgFgS4qdSi2qs5RPNSZoNJ8zmgcCwEhmAjefcBuTcDQu1EkJU9XGGFZidGfc4ke4UBNFetZ7rv",
  "key24": "Z9arDpowCySF4XFKCYJyqn5MsgRSTNizLjHqX9jb3fPzYpQve5BwNH6L1tGp9Q1JXnoLktn8QM6VXjUcc9KQ1Jg",
  "key25": "5pSPqGASmkxVADh4ept5TExcVt2jShsfVTx4hUtTx5xbnL5XHqdeb1WHb7R6GkLpfmXVfw9K58H1ZccUPnShh9ax",
  "key26": "9uownvVeyw6dtEV5aEmuHe6DHSvM2ut4eED4txakN6hsosnWsT7T42FTyn6Vhy3oehjeuDuCUmi68pFaHHWZS7Z",
  "key27": "4jQU6pMzbGJrgQYhRfXAjzxew1g6vTpYbcN48X3hTW2rW7QDa5zwqMmzuuqDV4SfRuWvzwZAbJWzNb6YCjtVNDRj",
  "key28": "55RMBbSuk69TMrcDH2FMbjcSFuw38W8KZtK9x7JpGsVriYKrwwE3KZ8qBhZarazqRiX8mRcUf7vqTe8djkB7ppf1",
  "key29": "28d5s1Yr6DpYDiKECjHhnG7ooBnm6uFV6scuYmtLpwkmWvZSJVF9Rck8LHCmroFFy5LJ95vB3m2XxSjGLr66FzV1",
  "key30": "5g2ekDJr3t3CagxKkyfMTpFsFrJurpgtMFVr1J1cfExuU9sEKXqh11x1yc4KgaQitSuv7BS1MKA6qpkj79CbcN9d",
  "key31": "4LwDcU151ZzsdnexgwG9tcA3LUNXcvnrgzEoa3BCFFzf3vnTnqhC4fq2BkWiuZ7wYMR93cGssov2omVA3idWPpok",
  "key32": "2k6fyovv57tBLyJ4u61SiR3zkMVjNKPiyDaF5cNhdaa5xrU3cKYrRM3DJqVhr1niQS2ic8HPeZwLBzekAgAjy8Mu",
  "key33": "554vZtvP9JXaQiavHsswgCYvCoQoe4CB1o8JjhquB5yxSiWqRijd6CtSmaZBPz54aswMy7SohDXV3N6j2hTNhFTC",
  "key34": "ZHjxZ997xzX3dHsnJeGvGNrDtZ7Azjmg1PBZEWdTDtPKJr9G2WgLECmaujvQrNaywWKpEa3QbCWC3iPQSrVREEd",
  "key35": "4UpesH8SuVexPNtRE9hVgnbpR8MzAsCbfj33arUeGwq2g1uKoh9kbT8wE8abipYaSxWadUQZPhxSbFQkGuf3MzKf",
  "key36": "2sQ2Xth7ebBXmUrZ2PAZiA6imnyCYjzipVdrp23p8gD7cyR6zcqxnekpjXDnJiagFvjga8Rj85gYKZdaXc5aWqF4",
  "key37": "nWchbFNRSk959JRWAXwXLzAfbwmUPUq7cXFTMyvu1nxYig57nP38knu59tJgDwCRQY68KCwTuwTGMpSPP81E6EJ",
  "key38": "33dsQC68BvU8H1QsURFVPnG5NyHjrD4qKZRUU57c7jvQTASbWjsQ16MKmdeG8dHoKREPzQ5owvXkMB8MPeu2URij",
  "key39": "4RgxVY4iWSUMAnsctsMeQKDyoQ3AnuPHs6e2Qs7Zusxz29r7C682fpYngNe3CQE4SDcnumnb8GaitXaBtdAbymtt",
  "key40": "5Vd2uRydTjfrT5wAq6wbnQVbU5FJ88rBNBfvnRZf4QmGEGkSUXrPEjeK93Ftgz2Bn6MqXFQE5TTmMurPUmQdVJtV",
  "key41": "37tbzEHn7g7mpTmVRdbk9QNxWJPMRtmdEumPrsXvuaVTNHob7CaDJ48bFFPhpE63fGW1RiCFWnymaxgYSR21P76y"
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
