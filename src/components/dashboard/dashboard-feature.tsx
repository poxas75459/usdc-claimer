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
    "2jyNdvWDt4yrr5vDUJuWEm4ZMoWyECgCXrFBdsGCLt4zzaxmHd8zdxQSvha7GJstEz6shqhHsjD2GG63v1ePAenT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwUTBD7YZ1n81CAS8Xe3a6RzGhuDeurZ2S5PdwCpNBXS1AgfhpEBDjNSenjvoJwZrghQahf2p9tudjna4kJAjhU",
  "key1": "3fpoJ4pytHcPkQprr2NzkGiEXgKQijbweGdArHhbj8z2K6XQutfQL6zay9EAqWTkH4hQydyNzAJbtJzFNS4WfAWf",
  "key2": "BNeCvkp6FvpxfCTYK5mbNiYwcefqzURGnDQu4yddrAsXm2Xci22G8XZKGySoJwhmQdGFFvA2GVK4tS1yAVRicLp",
  "key3": "5tYueLQQLLat3ZfsrCkrajxQzQcd1jFCuYzMXn4k2zvGVUkH4qKiRCKzaHfm5FZr14NBbhUahH4kGXdYGidJ1C6K",
  "key4": "gBeEAJRXJLhRCZP453zydeA6t2sRmMEnDHMcbiQyFyUPoD1rR5nyxDeUcqC4evCdDuMh2Lz6MFC9FTwp53zHjJF",
  "key5": "NyLWQU52GGtY1GfwBX1UjFqFjttF4zHuDs47aDx4h8L7DNdk9DcVVMe6ZFsaLaaLgmqPYchT3Ar1tBf2U164FcR",
  "key6": "47CUGE2HfEQTV17eJnz2b3Gqm3teMn3jtPj87jxrnKcLzWzJ7Q92HKzfwxLqvSbF5hzWNYisQAiFSMPyxknhi4jR",
  "key7": "4RXoskz2KBXZaaztzfTQ2DwNiwTBW2LWFHBiFA88g1FHuoJad9EsEtTYqHfjrTXRgUXz29toqsDmEsksLK5SWjX5",
  "key8": "4xjcQJiDvHedgi1uZssVFuSiF6nZ4TPmKLvPmiJjppYy6MdaJyXrfWXCmxSp7zUymqPWqTw1jogwbibsveYNCT2H",
  "key9": "3eCvuYmX11WRw4PFoVkZTTLQtTD4jBFVh2joMcrcA6sTGjgEEKkbWio3r1mPB7XwBUiNeuEa61z4poYJ7KkgioSi",
  "key10": "3gPCvLxhqLLEJG8vYNH289fLcirpYTZAsLjkNrupgFS53Hs5tNYfkNG48pyzhiCLSMvu6mDTuHumHxavRfUCiXb2",
  "key11": "gX9zdM68UYaMB8p3hw1Ug2zMFTNMTEuPRfCMKUEk9U3wzA397DcBVsUWBuBsyLH28EzM6nAWAC5j5QPkpXzNkJo",
  "key12": "2uuZMz6fbp3i59cd8CPFBKukgiuTa3naf1FGchzVVmMrpSpT7jpBM29Z7ZTVX2hijch6VnWmAbzNt16SpPWTnJPP",
  "key13": "5NQuDrJAmWicu8SvyGXasAUozsS2b3ofAuMZaRrK7Waf3HZYRP57HAvSmibwuDXEKMf6yBdNxuARYgxCd38KkKpT",
  "key14": "LtfENX3W7n6ACM5C57HN4W9LuDKfVNHgHPj1gNLbigJqChqkb6qoz6235aPWjGnhHa8zBERd4359BdmCeyCKnqK",
  "key15": "5p34dZfz2XthcCeTpeoDfKd4TKAZDEEYr9P3UoSrhCePzetRYKdBC67Hh2t1yC8CBVxuf1Q9AUyKy6sx9Dien1to",
  "key16": "4C26S2wYxhfHnpmrtjkw5UqifeLE58SXK9fJ4S3GHZUHzUi36MSMyfrM6stUoE6XTrJXQEYnPNunPsvUvRGpcqqM",
  "key17": "3CWsGMwiDqUYn76HzAN7R6MfGqRqJbwGQhaiK7FosDPa1c5N4daw5UfVXqiNvSAFkZ2Z3BncDj77hormmkAMEsxY",
  "key18": "2ryyCMzE5x41DJWHBbqZrWKWGsDxrRcLUhGxNDgSA2MLKdWWVdCFG2sm7C5b98Tqir7JgE9BQkoeQ8SmznHea7vy",
  "key19": "33KQXZyWQvp2EscwahSrXKTvMcLCaDqr1Z6PD337we4HEQikUvamQRiMCsLPv7QUA1b6PwnsjSGAx88RwoacydmW",
  "key20": "knonLVj9BDbeuR5RiaxofyGEwrTXB4jMtKzboLekh89ZR81FAgsDSqBc4BkNQW5Q67CwVz6TpEsDfgn3oVdtShz",
  "key21": "31Tnqp8v1wA8gjPST8iTkpcGsw6gpYAzswZ99KSSSxM6QbnLnMo1H8KNTHqd7kj2CxyjJmVMxvxQaE45wVNPhRir",
  "key22": "5PXKaFMHUEdY4LP7NXHRAK2WZSd8R1mmAfqM5bDYMykFsePGGU2TxCzFnW4b5tAc1EjjgFwQPPMC2UwHuUvay1hp",
  "key23": "4Fp8ksKLuFd5pCvxhS5ckbMTuos5RqZEw1YwSA4bumdqYstWDkiYE4wum4Qvo57PEEqCxdsvKVpSce6fa1gyoE6z",
  "key24": "3Dx2v7Fxt1z7UEyVJFvhH8iTFqdVkovXtNm5ES4XWcw5ix7YTh2xER3Zwb45hfBJkLzWwhSeNdoTLkEUequ6xFvk",
  "key25": "3Cu9EMzsf5UhgM4GY7UzyfTcvS8qNgo6GeeKCKGsbdUAky8jx3FhtteSG6GsYrDXqZzVXDoyCJoV2vuFyZJfYfWG",
  "key26": "123NDpwjJQtWWAznvx8XQSjLE4xtQn1P5UmyqwRPiCjKNzU3S6bttPRo33zawmo3aM2fs9Yfpo89G7tjg7RDEqPw",
  "key27": "5YFJ8iTSmvUFyi7L5HpMMbqGqnu88DQ317JFe3GDcEoDWTrvjuJM2gcN7uQ8y7ZKVbiMvwBh4BDt6LQVp9hYpDfs",
  "key28": "5vD7nW1pAXah3igPyGKwnK944oVjoDpNKBfHZwcbhXkoAGgjaPLxttR5YzogcNpYtAsA6MWHnMSPYE5x77E2nTUD",
  "key29": "5g6LcdQgdHCgDs21soaHkfopdkZRtBroJCVKTSx78xkzYAipKS1SAA8iSvWqjo2soq86AMiw6uSvgb4o5g445pfR",
  "key30": "3t7joFiG1GupNfcKDmMyphC1Sn8c6meVcVJGchGjhRCLVd5DNQ1UsbS1f1ZV7eANiAbqHKgpYKjj2uLtYBSptuyy",
  "key31": "3hK9AeQRczQRbsF99EZuBouM3R1BPswXiA6Wer7AokHcEoAwdh5D21B2DUxW36SFjbBnhKuDpfbzGRqjJzS3RG7o",
  "key32": "4JFfGYCfgJ6b82QtLdHiA6sLMUVV9CSKArLHssQoWF7aohmgagkZ42AoSUfVnZy67zzSbPg2E6EzhsxKe8sjyhEy",
  "key33": "3ByrnUjjGbRLq7jMmAxDMCjZFPDAhzoT4F4XmnSWd9wGmnWwAyjyQP3rzVaSUYRUpBsv1tLhDwb8foeE98nG2JsL",
  "key34": "2pACQeuzjNdM1vxb7SazdVB7pFM9iaqyvsvtgqvonkGop7GMwiDd5EBu5CtFrfoYdW26CgYwqrqUN2VhcumMsTsg",
  "key35": "5TGK1D2QrWz6Cf43VedXcVnCRJzdjH5GrjfoPoU99F59BSUhmoBqX83jaCKmPnAvxSp2kSH3Yix2iLBV9Q52vHji",
  "key36": "op8sYPz3Zp2eVbKq7Kwv3WxTfZBEQ6xitSNpwSXUsD4SAo18Y2yp8d5jiakUhYvXeNsXpZbkRzbcnvPFQ6nsGyw",
  "key37": "5yuDfpGr2Mf7rWJvA31f1UTX1PExuPSsmRPFUDENEb6G35QNeceLooMkpaSwGzk3UZuEvtWFWBw6WXesJJLYbN44",
  "key38": "PMf3b79qHxyzP6pfaDMSrGZGmLfeMHv8h5QMpNC7tH1MYCCkyfE2G1o3iBcrkmWPJvRr1gXSUFjz6LaPaQpE5aR",
  "key39": "2aM6ycgfT3wQeWnNompvf6gF9zM5W87gTe3fzqJ2rJP6e67XH6yT4R1WmM6am5rgQHuFrpfciEfkgku5Ddu8UTZB",
  "key40": "5KpCTsexRjFNov2Y14eZcDRbU3QZ2ZoqedsUoYpkCafGE9CPiVxAio4opZZYHeYDjyBYYLRYVPSmb8jLtkVPy4EU",
  "key41": "4qdEnj7QT3JqGu1RjguuQUoZ1mWuTeVKtZUgFnc4JebNsv5Fo8ADqJL3cNtqCYC7kVU1PhpmtaFfozTCzJCvJ91L",
  "key42": "4djRaAGfSB5tWBPCLZc33enXBvvxyyDY4owc8j7i7axYW1uvPnpdjLLhSjq3LSkjhtFYCMhmEe4ihzcqq17r7BQu",
  "key43": "5PZxN1RWqjzp5gUf7BuGbA4YQqzTBJeWbKJW3HZpAYyRZyqPuZyDNSESbPtKKiNKZ7PyGUksEvttunkZbjfDxk9A",
  "key44": "2Ki83tPzPqz3dtkSoZ6gzTMB1rMakjRH4DR11oHG8dVX61PcTAZaqH1QDrcg5mo3as2Fh8c64H16jPFVYQZMxndz",
  "key45": "3Fwg9acZP2yQpBc9mky9NAbaH6DXgnCXXREsBxwzVbfHpuxadRKdAjWj4eSGLqx7JztB6YPpZxqeeP7C93LNqUJ9",
  "key46": "3ExrZTFsR8VuLTTcWmHn7GyY9jR5e6ALXVSd9MnDNRXjeW2CPjqYD47722KLBLKD49zu51rf361xTCA8jTwKD5cy"
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
