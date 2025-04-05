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
    "2f7U5ux46QSNyZKEoSLCqp8SLjSXUxLQwuLK4twhoHSwocXZka2pAgwR2dH3123agEzD5TicuMYHgxKdKJPcmbq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kQV8yAv1eFSUJnsWg4VSHZVvtt6aPXY7VW7gVExL1k83fCUp2U98wt216a6FJBHJ4cCQCbboo4hNCucARjrEWBR",
  "key1": "2j3o9krpgHNvGkeBnb19r8qVvUXdavPy13Y8WYni97CkMT4rZ56fTCMo542zzAsheqLXU6aSemoNiXF3xUizqLXB",
  "key2": "5MB4myZpFaWCyHnKrCPhYzerFwoNVcc23gLvUgKqT8GqGi5Z6jV8sk29b4fz9zG4TnoM98BET9M56eDZntxaixED",
  "key3": "3Yfm7x3HauH7qNEqY8SJ2xpbkudP6N8AsV3yCpfEJ32r6hj1gCNtCwRGuZnvhAbgLPrcXSiwCUhJcuA7yKGr1Xmb",
  "key4": "2tsGWfLSE1YUVJTPTDB7mwcTqweuVnNUu6MgpfptHAFjDLbw7wSnJMCeZuYrTyRorccfdDMKbQqCWHW2ccwqgWV6",
  "key5": "4x6nWnMoE2v5ZVXR6MQ72hesBdb2k4CK9Dv4KPpTRGNajqW7v9ZKr2ZhT5NpjREvxuxNix9yfpUnUU7uRvjg6wHa",
  "key6": "5YUS4JbLnLXbsPWFMyJ8rTUKJwkDEVGfSHkg3QPQFZ5aV24v344nz37ny1h6VfdEMGMUTLL8BzrjXWvCxjtukLme",
  "key7": "VNVktBynH7EBqP96yu3bsxG4A9BFz1fihtWuN8ZnjfBznb9bWZfNjUbZg5cgZJ2F94QgiQGhDNhGEgbdFxytyBT",
  "key8": "99upcBJjzXF6pUbaMUZHk3RnzxAuaWfDL3wJ7yWbFnpJ82wyrCA8XDjSVnGFpZheYBnzyAvAe5z6WWWGhXA9LDf",
  "key9": "3h66VEgzuu8mdnKL9uetM3FGXqsHK216s64GfrGE9ua2TXWkgGaEvYxBudApgbDMM3rnMyEgBqcsRCFGS5caC34t",
  "key10": "2X5nNXufaV2WTogYSn7uW5o4YhY6HeC63PwuY58HEGxdSxr1WVCPMGnN2KJf6uSVi3t1khFmveLex96FetpB8Pyz",
  "key11": "4xeFNNHkk8QELHMLFWutXMysd3cU7Q5oZCDb8LYLD6RfEisASBjGJzE3APvCz94WnezSrbisGKP2YFip3LKH44qL",
  "key12": "4CcrKJ7Wv5E38Zva7bDq65CdG2deQnFWjCT3tie9dkRDBtHpBfWTsGTWQUivbM6czUe3bYdK6j5SmdA535ZrmJxX",
  "key13": "4fNmMuFiDerJoLdMhrpEZLsMLxhd9sxQ3mTfRLVxb7oV4uyFMBTxR23jFEKn5MJ5WRGL18uVjeyaKrPqAey45bbu",
  "key14": "Gj7EJ7bHptXQtNfWRhkym5SZZwcGhcFRrffxcBxvfoXUu2CDCe8qTnfnz5RpxBE14SYQNZYquok7chHtf5Cntmq",
  "key15": "588FKciknEQB5hvydtLupa5fjB4UxooMYVLG1BLE8uaRKpHcrJ2UyJGeN9Bpu6JL6U6KL6mMs729rStf2Fq6huAh",
  "key16": "YVtsCxdg3Cwr8GCVxLkSMqohNLxTkocWfv39cx57aDQZSMoM1b8A3Ln7onf59pVPHsmRurzJu3VuNm9tf2q94xm",
  "key17": "39iBfnrpswTkEsc7Yw9AzCJFYjqHkgx2jUSsvCmYLYStifMykTmgjNLcoRzkBHgL9gcMhC5hSvWgD9beamUUfg3E",
  "key18": "3gSabYde63ruchh14eGSvdkzTqgskAFsKF832J1hj2i1KDuEQTEqeDFhu5zCcYEWj8AXgDp7Es6DzELD1mx91fYo",
  "key19": "2wYurJRN7hmb3YRcBSNyugoSgJbHWPWnzyApvdT8BLaTnSxBqmEV3E6wgwqqthbhFoVtqdQBAph2Du989ZiPYKzY",
  "key20": "24rZAhNJReJqTCYbha1sawVh66WxJebcp6TXnD5rh7MtJMSwgnRXRg4A55JphoWZWZ7WxaTMYU4jgUY4721bkNbF",
  "key21": "4asEchrYTswdKPzyLC43so7mCWm96LvhrHQ86nLgjrzXUEf2fMtVPPGDsLG6JV7qbtJ9j2gP34hGNZcAVtmdhG1E",
  "key22": "3pS16wBQTjTa5yPZiQfqoAqVtpkD1yP4W8GAaZWVoiZiBmprJ86MhetjPXu6JAF6BcUNhPBmRGwFxtFSKV79JRBC",
  "key23": "TZrHfubcj1UJoTWjsBpGi4Bpgr3JTJhqxTeRzTxdtjKS3b7ZpipDFusHKNsVMAng31xtECDsuKAemP934xYQRSQ",
  "key24": "3nGuUjyfbWBMsyWhmRGvFRRuK9aw99CUogEExx3ekp64wd8hRXSydDyjpbSrTEsagnxkw8P3ym59Hht29fFYGDeJ",
  "key25": "5z7EjHPT2d1b3tpyP2SQeSJbTBu2wbDY1tCdA8Rv4dphi3Q8MBfw4hgF59SdZdPuTWfVnxQjwbM8FMAbuERp7Sez",
  "key26": "3jVtsHkoPebKokg6CsZ9msU3E3JB8mmw5iUEsbWhwPrb88f9Pg5eVQXSgAoKGaD6A9y68pCEfLmQ6TqF9tKmQhcE",
  "key27": "Dv5gqR34LYSLyhEGLSBB31StvYFcn7F3pB31VJzNkJSbKyKHCXX2Y3pWkVSdhoG51e1hnVSLLBHDgDiPUjChg18",
  "key28": "4N86KZr81Fq8m5N7gvDsYu54kcG7jSMiwMmUuGuthfRGj2wH9rvM8R5savF37kt6zW9FyPjTM7iJHwEDMg2jCwiY",
  "key29": "2cdymVXR3V9uv7bJnAyTjJWa2bjnnHg1BQh4JnhbLU8r2f5tR9cLBBdPT5ckL8iBzxje9vyn98hceJmfnBjri4SL",
  "key30": "2LrfZJaeHa5oWX9EtLguGfUQaFH1bkEmSiJMjJqc61Bj3nCm3nNx79wVL26QsUDwvJTpvcSNEWzh5saTc1hxxKNT",
  "key31": "3PQdvBpfJk8f1tFx4GRG64UerbUVeDbicTacD7VFtf2cAyZVJtKhzEYKTDLbMzmjhHJKQsfcJorJexisAHg4depx",
  "key32": "3fgrTw2ezCDqNA8pWSAnV9fhvFi2yQKTua3gTfuKutw2F1xsXzLzHjziNyrRwiJDfFrsJPB6jPVBYCzkK9iuNdLx",
  "key33": "5reQHwUNTmyG89aqTpHFMakbPon1A1xX9srdsaqTfQwwkEZ5gZoMPyCigjiJxQFfnjQxvy2dW7nSae2TZtyYvM2Y",
  "key34": "rg7w8JVCGp7sdAVwoEFiKeCjHsbxhRYQu7rXGpecQoHDT4EmMZQ3e5LSV2fsmYNBGPNYAyS9CHJvQCfLtVy3HSf",
  "key35": "5Zeno6pWso9CDD5WoQDqE9wx3aWeXaZVvt17xyegJoQM4XTfGUMZpWoVNu8JVUm7wskLMgBgMUCGrjfXLMaggAhd",
  "key36": "4TZ5pAcfbv5jhHAqhwAg7ur8NsaMueL9VWRnbXvPxxoP29LSSdWdjHa3Aa8tn252XSymb2pTKh9PtEU7W1T2282S",
  "key37": "R9Q6PegEMveMjb83A8xyDgUwoyjPcpBAFTugS2qrsiMsjrRFvozP9HvzQc3vGcdjE935N3Eyhrpwhg4u8gcAUa6",
  "key38": "2skm2VjscE9qaP8DWD9mAUW1Y2EpZkY9V4gPe7nBUASr1JxhRdbEt9SiWK7uQuVZx3FAozMUSuLcBiCEVNBA7xhp",
  "key39": "2isbsTHYrpMfZNxhSsXX97vKy2H1ZPprNoZFWB7UChZfua4kgfYsRs9zsN51kQtQRJCAq2t3Fks3grgF7dMYm554",
  "key40": "5Q8HqagoPhfe6yRJPxuk2aFx3pM4FxbusWtPL4QNrBUgtZm94GxvvugaHNeFJEnL6VxuohgurvZJFU2ovoTGAb7h",
  "key41": "dQhJpFLZGkruoCMPULTtV88qT2Cedtc7nhGRNYBeEfzhmysfGAHYJ2xjaAFBXXTiQyTR25JXUKQVsvAvJ4weZhC",
  "key42": "4be4MkEYyqkaCTFsTyFh1iaigGjttS3csf9hNiazU1PdgL1UFhbbyP74QEa1hASSqrF1YUe4bobigKrnKkBozL9j",
  "key43": "39mW9CFdpFjwZ8brp643L1HSmQ6ri7tTQ4s5tTDLfYfK5C11WY4jiS7F23v6RWXfiFXWhyEDXQgB9drpZ1PpXLQY",
  "key44": "4myivu35Y4iC8tg6GkeUzTkHBZNpSczGgoQa1uUCg9X2No29HbXrxA4311bbm7zRJLeAnwfM2U6Fkti3aWfCr5Je"
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
