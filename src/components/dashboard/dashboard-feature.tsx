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
    "4cxxmzC5SKMLJEJeazVb5WTDBsoCPcqBzL8cwcUQ31JhR3gSCfMJvDLXPgencaCW5Q3ZBJw439TjZYA7ahgpSAVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9MikMg8W9qdtoUzYL8wrDRXxByepAkJCdcwJVkAvtnrTeyaZy6q239p3qvmChfp9AL1yjmq5NMEjTXLcU4hzUe",
  "key1": "5XEjCXErkkKYFDHEAi1r4EHqChxMUhpTBwTm9H6Garh7ffvanfG3cToPSW635XbDF2E1Ey87q47gZPRdccTdVnzC",
  "key2": "PAsgXZEWjhReRxrUZXNhBGY3875PeT7omz78sy2BriJ6FD1KA4JvhFnKSbAEqeLtRC2z4WB7djTM1Y7fbjNPoYm",
  "key3": "5gvTfgRM9oPrcsuT8VqmzHNb3wjfSDjEQ1b3E21VPA74tj2xqveB4KK61QqmTBiMXP61ZSUmidF5AgynXv1aE13u",
  "key4": "3R3HYH2YrEtZakgbZxDKbPQatSbG8oXGfjQ6YJCBrx6RX2RDSW6NAzhxWygeTSgPf8qi5stVQN7JZxNYfZ3uj8ae",
  "key5": "282qiQS1hZHD9iD1kbBSnVwQfx6Sb7Jm6hCX3Hi7KDtvCo5EiViomBjxwPKjBpN2KqpThHAhGXYXaB6UST1xAn7x",
  "key6": "4fLPgeuKFzgDUgW4FcQsVGG57k4vxJiCVvdQqenXjZmk656ZgPRE1Z272v8iCHXcWGoBk8pSkvG3ebqHsGPE5iqn",
  "key7": "iXAVaMVUwj7ZuQcjxqHvkRR7rPNZXMd48Lm9ufS7n8zdDTkWRTnS5TRePBcy7vQx4AcRF9Sv59njLxjcgxoXGmk",
  "key8": "Lbq5jPGPV65FdNDeWLUrGj63GLAUnXQLWZKmtZ2HpvdsRgNjHhV3upJrnxB7VMVbKf7mAvSR62m4eRuSuP7fX9s",
  "key9": "e8VMCA1p2tB3doEkUnudjFgTcQ31EK1tJV8JVctirTB7AXu4LnrFRS39rsxbSLFuesfkkaCqVn2NfSaTAg5DJWf",
  "key10": "2nXv5EcuXk1gXTS4W4yvKSzSBWiRYA1ur3J16YMcBdsrfC14yW4zNBnX6fRYuy5Y3btKc2oYDmECrWvR1jLmD3GL",
  "key11": "5VKbwr8kaodNgRAJLyq3UbwUQV4jc43BUVoUNXFvtfANhaTok8FwAPpH9ae8o5dchZCzQqVRjEc3VJ4ceTKtLkMp",
  "key12": "Fu4wWCn4WptEBEWgaz6L2gffDpgDhfvnyVLY8RqwCUHfVpe3c437EHPBKwVMMXVtrVa4YZMJXQkYF2NfCh6UP2C",
  "key13": "ZLBToK5sh8tX4WijdaRkbuo5sbw2NzeYhUQiC3TbfCmWK3TbV252w6weEnaWWA8Z7z8hC5mBB1e3LSHbkRLCzpb",
  "key14": "GsKBHFrbFgPoyxLqebNs2LeHP4S1uDKFM1NGc4BwDLLV9Gi6q5f4eio3yVuFDARFvKVqNWNmmE6qrSZHS1SZ7af",
  "key15": "3dsDhvE6r2EPSN7hKLbUj5A8LAmv5gtQ6RzRxrcBvH2Kx8Qg1jDYkZn4VyTuxRhRXRzPM3PZySkcNtT2DWG1puuH",
  "key16": "3ovei8vAAF9HFo5Cc9qUBx7yCqg7vzzRW6LrT3NwArtAzDJxxCb6Cm8b9SrTaFuWQ9Rkpt88neKfq2ffMQzK9i9X",
  "key17": "58b94XKUNRrUvhy49L77su75hz7V23m2jRZJSnSyZ2xa7v1ZPCJ6Vy7YdmCkAw4VTsTE5Typde2U6xErUeRQ1d8o",
  "key18": "94e3XXj1BS7s538qQoABg3X6EEadqmv16RGT9XdKYfbhzbJNugCKqMUTzK9yyBqCJ5Teeg4gx6zgc4gx1L5w1Ng",
  "key19": "oeU7HufmPhhh5EDZByPU8gocZqr9B3pXKrRkowWgMpb3RgDsUfb3bDHaWrDfSFSLa8PfPMqExRUa4ESzSyxj3Wb",
  "key20": "5jfDq2EZoqLfs5Gfaw3NNu7tHvUi37tb5eHERz9Gdwfo2CGeniNoUwfdhKgu2G6yfy6EYrujVnyobnD1EtB8eDDu",
  "key21": "rrPgzL4Sufy2izDbAK7xGegE8Xy3hNaFq3ZvT32Z36AWYi4H9sHyrREf3133J5vB2KrQj6UMXqLm3rZEyz1joAT",
  "key22": "5kZVZa95eSyE41ifPVvMPyZcYvfZAbDpvyCvsNqivVX3FHQJ3XYK1CPcHHHoF65rdF7aKkqQcneB5g49dut8Js4u",
  "key23": "4Snstb5vsMk23foU3ypir24Sejps56QX6TvRhbB3wfyXUUjGV4YqSaNyRUVgsLMBXZfKicGmeTUzfwXwKFVDiaiJ",
  "key24": "4XUzWDJPDRoCZmVNUhDaLLadmENT75zVaEqQXtC9LobKNQ8rVzoGSVtR9wo2dTgK88wwjDXHeYHBj4WdogmFD9YM",
  "key25": "4caere49SgAy8wdtmizrS1T8isNPbPWFiuaa8wkZ13cvs4pqWe4q97VA5Lfxg48J9oV1EnwAwaYUtWn16cyeHYAL",
  "key26": "2VLkCkZnBXAM2nBVakZcwj81257CAjzjbbQk4rdxBUtLnjvqcSaNM89ixypcoqqvEyhvAusfTShAGTxrFBkbs7o",
  "key27": "4HbZ5LPxazgBgrGB2ATmw4xW9eiFoiN5JPDYvB26XTjhZdvd7es4qxBhVXmDjNKyuNyq7mEJkXzMuj2VzVxAPgX3",
  "key28": "HShTacqcUuWtiJL55S1AvZFdTy23tsNb4JKTUDLXiNCvMaJykd3Rr2yP2wmxHPXwKYLjPCRcRm17cR2TYsxoArQ",
  "key29": "2HXg8ux1gdr8KqqanHo2UFwpwBEULCXiTdoLn3JFFK1Cy2T3LnGCy3itMmsnfvsuLTZmqYzCn9RrMyTPkD8Qb4Y9",
  "key30": "4VjjmXXNJ6vzbzjMG3JS7MLCPzpmUEnx4Ewm3ECEYiN7ixgcbPgDzHp8sgYKuyj65TSPVdAoHF3t3ZugKMqsoYoC",
  "key31": "PtBtd9qwNme3dBmrMsya2j1FzkavKR6dzNtJKpGq5St1qcKP19rNNaiSnxZhPBovCDFmahPWCPWieyTQ3C5LmWC",
  "key32": "3pXztgnczdNkV8x5i2v9kpyQoSoXk3navcsFAmrgPEzJUW1othgGjUKg7S6wgQNW3YSccv78uycUQJPdzzq5R96V",
  "key33": "2mHupcbB15gpVbqrVutXuYTfgZhRE2MhiBo3ktxdZUvrQdGrxjKEobtgMv8NUm1bG4mbSt5EEnVTNpSqv3eyWsUa",
  "key34": "59VG8kyDUFP6oCeMqx7mdGCgBK92jM9VV6WJePoQCH8wd9qP6HJhSM4tuUhrVDa3vQriP5GjepnfyLcNrbBjwUYt",
  "key35": "2AeZsxRqBYSuKyos9C1SqXRcEP3hD9naRPeMKz4rQHRCUfCRRHvEoSXGWUsbgaUXhC5QPPgj6QQyB9bi8kJgwDLX"
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
