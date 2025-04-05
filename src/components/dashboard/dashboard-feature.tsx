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
    "2tpUwwjy421KRc71p5uAmGanjYWLdghvYJrBv2FAd7YYicqa38MwteRDyZwRA8xEuvejeuKM5fCZLG2MTsfkayEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44vNtQvzcCkD7sU5wHjCKWZmJXG8adPK7a8wkqPB1BzR6aJQQHrLmb541uawEWCYgvGXG3eNMAWdJVuKG6eqX3GF",
  "key1": "3DQpSUxeLit4yjxuii4D9rSxcZLk1y6p4nAJSJbKn4HTv9vJnNtmTRKowkm9V1Fh6crHgan9sBV28imiN3B4Ni2W",
  "key2": "3Ff4qYnkoufrjg5HWeuAZjNCXvHth9LjyiJTnkFEk7kmuMm5LpKFD7vHEwE7hiQEH6qivvpBKSTarzedmErFoNPX",
  "key3": "4gRUiN3Qn1kNqaaL4vcC9VjuchvQivPDrJb1TmvJVabwu9reCN2d4DDfLPWVboje3XQdiqcUpK4Ptx3euQMFPNwQ",
  "key4": "3QJ3jFS1qqj9eZvZtBNqzvPQQrqkB74fXYMFcSDu3Co39A4r5563yfWrf7rbgBWT9UncM344fhEFFkabEgMP7zDu",
  "key5": "4mP8NbmvNZ9XaxwXZQx2PCHeq1Tc1PVBeQnFqJk7GN5SAFHbzrtrWwfPeYKqakbUqXhjTvhzRZj2ToVFkU4CBS5s",
  "key6": "4ttf6xzbv2aokjYUjDFgjdtw1Zjd2aEcsCDqb8WWe3DU2vsXK2HS9xDtFSdtQefHac3LBEKrDkkGUhfssigTsBY1",
  "key7": "4pqPTVnnKyiVRJpem2yd5rneKyW1THRAFhyu71rbq97sK3xX5TZCeF2tzw6cUR2VEhXE7jsQFEeBCvaQCqYNNZHA",
  "key8": "4ZbWkBxiy1R5tzQVqkJzbVR3J3h4fC4ZL1HYqdcQkpjWzEyCiCXDfRATDrwXaoxSrKvNjSekWdZyfjwUsLSZMDF2",
  "key9": "5G1KWuRXcBYiv1rXThwL2vQRz1SfTwS7o8EbtjVMTrMBXjfitZNkuEvEjCUAfS3s4SWCLtPkci7BiCus8k5T5ort",
  "key10": "5JE92uqcGB8RxQLqcvWYZmmutpX2wzN8apEg4p1VMpsCvY6CbRtowPygrHSwu2R3XBxsWMuMKXTBzt7Dc8xdSwws",
  "key11": "4zi5coSCJoJotyuGjEJdN5qk9ajXUbegvRDwf4JkBaqnKHVadXXqUsn1to38S8UvSM426Nfz56WqP1DDTRFPQ7iX",
  "key12": "57SzRdwp5kfA3n37cxAVZSuzQzj4jsn7K9MUJdEKXCr5g6uAbQqwWga4zXd78BFi5TRdq8F1jrWDAzPJy9nN6BZM",
  "key13": "2GHBaaA3wVZUDAjUiqhYVcubiVP36zkwQSJp9XjA98urUge4e772RvnW8DwbXMMSKGDA8SRzqqWHNmp9PSGxktE6",
  "key14": "5xeuqvArnD3okxCaC41bS1mdoeyz5yERqsUFHA7jDS7PrsNFa3nuSL8mMmHUW81jzY4hM8GaaLxm4mSXP8AxnCYA",
  "key15": "R5wgHFok3c2GPekeMhS2L1NsJAAgmdRUYJqd3x9UHwXLRuUU4BF653pkJ1LLQd9CRVXU68WtjyN2ZBMjk2tm8D4",
  "key16": "4baJoS7PsAmHB4D28TFqB5i5A8s4j2uZa4r8rFafdyHXjzUE4Hi8TqNyASXy7rTgWAiTXS1zhK3eEybrUbnozki2",
  "key17": "2nZt7fGVYp267bjMRgWR13GwsLB8bDS3HxTVPqAZvLA1988yhxePZapyr9eb2fvV77ufSFuTpsDTNSTHEoKQhMkp",
  "key18": "44y7KcrZSxnvEnzBHgRsmGApCUbwUvUKwQRRYZJhWQC6uJxJrxpeRdsLxZ56FtMvX85YqvznFajSFCXibvdiNM32",
  "key19": "7QU6zS9EeUVuaK1y6LvSHaThuFy2JfBqrgEPE8kPF88yLMC4SocdcNNteZWmi12Tmj2GWDVro1rseFSsKATYvEV",
  "key20": "X63BbaH478aYNLcsXGoXtYMdovXRHVM6jppYb3JrBsHfrXzNxA4hj1bKxAZtxDNNrhRJpbSvBbRGNbVzEyLxop9",
  "key21": "33sAEqQf4JgC4bMBGPf6mCXTJ57gyiEeTNKyt3Mzxi1UeZjhCsLyg3tZxh2Q8yTyDVSCbcys7SQ4DY1HpksJoqQq",
  "key22": "65F1D8c4BW9w2AHMGtpgDtTP78Be79VP2rMEh6xnsnQunjstNrEDwyXLfjQsnwb6ZPSEayo2vCk38bnEoQ8XHuPP",
  "key23": "267JUAyDNAYH5fucqXASUCFJAWC54Nbm8bPk93gi418yeDsXnfw7EfWZbGWxW18ioFBR9AtwHvXB3iQvioAZgdwB",
  "key24": "667XdTYsPykmrSTPPvta2NpU9bg7jLvU99LEWsqS5h5TsoWkPSE3cMswmDe4QVkeWhMuC9HrzzQVbcn7QF2X4DyC",
  "key25": "26uc3asf1wvdqBfzcVUu55qoDTzoW1HQEWPj2wx1bHz6GtQUHfdnpmruQismeQpBT9HyAASKgtZqT1neXcGWxenu",
  "key26": "5Hy9ERKZ6BXxMdM82F3tBZrofHsmNT1AG4bcwQionDhnJ47puMFRM8xogucaGp2oRNS5tJAAnwJoSLc5hMSqdjbh",
  "key27": "518FHQcAHkZw8ah8RWumpeUztq1PKJajfx8ZkKVDESQA8NPbwfhnzGkwzNcihQU94r8b47H4LmiLqqS2ZTpZHgVp",
  "key28": "VoT6QbXzZczfFn51FigVuaeTqddZHgNdTGLpSDRLHzM7Z6ov6gR8h2JFiVSTwXvUHDfTUPxaSkgmqJxWazhezt6",
  "key29": "3QurCfDvMvsQ73bix2JBBEtSXNsHF8515M7cWCsHZp1G7FVjpLPtfUa6bnxejvBfGJsXRZSp63MR7GLvzH9gNb15",
  "key30": "4gCtfugYoGRF6Gd7qGtgBZF2rTM41q1GfTejtBJ1vnUTwNadjKquEgMFxvYm3PKyZqRxsH64cVKrqB4Dqpo3MxEr",
  "key31": "3KnR1UTRR6QKejtedXFMANnhVFSX2FCCWZ3vzjjxt73UJAhnNv5DDCRPAqTTdEgsphmCjRCWYfjCBDJQr814nfXg",
  "key32": "5BhhHcyPWKKs4qoRy87se4V7wh3EcBsPTCyoevt3a3XuBpZHpR2DEbR4EDBC3cVeNMBj3c9MRgwxQEbxiXsWkFsm",
  "key33": "55xfKMx7HW4vFfKLsgXrKSM8bE3HMEigE8FfYoMCPZtPfDZH4xbM1NU2StDPb2yFj3tAPWdkc9nc69tdFoA2Mw1N"
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
