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
    "3SkPdykJCBZvhE67g2e4TD4QWTGrEi8gnhyKJbbex7tFWEZzvkSvf3EA7U2d6TALX2o6FAZPcvKTRTLzWzYRoAz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvVHyQuYY22oso85hvbZer8PxRwbvpiGovU8XftGue77KUqPy3m5DakUQ5nbFj2k9TrN8NrRjhMcJrXtiVMkQhk",
  "key1": "3aidEeDdGxoGvgRaADyzGetJ5xCsjjsACRjR3p9CVjhseNc4R9K1h3CHJm1CsCFtus5bcuFuaDe4ZRPUzf4dRS5S",
  "key2": "VESSoQeB1MABUuWEBbaNyhdMgAr8Y63kS6SFmSzGvZHj7LtmWjZHNzVTYgnws4RJKukwzsH4j7rzDTmamVXsr1S",
  "key3": "5j6zX3ZjbWm4Gss26mhxm32H5YxHXmhiqjvVY66gYVgviGUnhQ4APayYp2mQn45WHL8ytFhEwzULcDWbWTMunUQw",
  "key4": "4y33n2artEXWXVV85YgiX7sL7E8wsGCVLLuHZjPRGn6abBAhXbgsU4zAiNmsHn2D9HdZ1QL35W5yqAn5kGqdrhJ7",
  "key5": "2QrzhudnrFZE8YqKUGKTqzkL9dFPzeFGFKHhgdY3qPD2KZ2bMZDNkBKBD7RvfzeXKai14FdGuNtZAHwnMZ4vTVat",
  "key6": "2NsFqewqZ8c7L64CZraysQQ7Zd3bPgh8Z6FaPiuqWs7DD2DWHuD8nN2Gc4Pkb1GX7T4DDHuetMCXfFqxkAMmNiLa",
  "key7": "2atffHZGdWJANPfra4NcCTvLc6WBLhEnqUBiTtM8Pj5ecTqdVvm7YWDHFjwotQHnBHjAcxQXRKc264Eu7JFTjFxJ",
  "key8": "3RV7UZ2x2d2hRoEc6bTaL5mM75YXceEp9r1YqB6vnXPkgoZJiXcvuaz7XFgJYGx1jdpxo6cpGvPQw9TNaKB9MYrh",
  "key9": "47Krt1ZEt8NbuPF9ZpxoyjYJUUPdkYpfhFgXydLaJUx3AL2zRKbjHPB77LJewfFoSabnZXZ1ZLWr2QUxzgVjfuW8",
  "key10": "3QTmr2YLctNAVPBxsUGaLN1c1r5hiM5Js2W2L2WxRAZXaGw5RTX1rLT9C9ixZXbgV2WKqraTceVJA6jYmJ5p9eLa",
  "key11": "3q63ab3eSucwFvFVVC9o8HpRLdtAbYdHeXVbtLmY7LaeiVwcNn8djFNNakLJpntoeQcTuAbZPfJK8aMVDZANU83k",
  "key12": "voBrsNS2AcNZgfAoUbkZHF4gWWtDZfxspsXFpZebqhWSFrFXUooxYpJ4Rqc5tXmscV7vbaAaAshZKJE3gDEP1SV",
  "key13": "5JoAoApYFs6776MSJqH2sFgh6kwgpnLMSMuvaK7xCSgXJWgv5YSo6nbi8GuS6Rj47Rn2UzugCEF2ujyBcZ6PPGGq",
  "key14": "ciFAtmcufC7SCZJXvDmJvBm5Tui8vBCbeVH6rVpHXMbRsypAAc1FjV48PHQMZR9YvCFJMAf7uTuvn9Z6dBzyH5B",
  "key15": "22hQtmVkAofQ4uow1qYswPajbcbSyAojoGaKUogyPs5Z2RwiPyBfHZh9s1hUo1yhX6NyyaYjGpPEQWgomvP3xgpU",
  "key16": "44LRzZ47HWLmd7JdBuWy9AzYRMGUCXfTXWpwZ6a8xJEAPTH81NxxoHJ5cR9SJrkbfWNnPKVjcgAVRudFxqv1QPxr",
  "key17": "2Hj7hhJo1BuqFa54F43BSgV5fQ6mjxXbFkTNDe3e1jvPebw4NkRNUJEoKjT5bNqynehesmqut5hxRAqtq5syyQ5p",
  "key18": "Nij3QKBfN9J964yQJoGYfzwcoSiSCQo5wBUCoknSBQwYJK58BHv2MH3CqHaDmJAvozQ48PMgXbNRKhtBuo87y47",
  "key19": "5JtEQh24koY2u9FKPTdED9jn8ecgMRtwxxATBb1J9yyeUWrPPANERbH5kRNDBDiLMCR9xEvfCjJVTE9pi5wGRaD6",
  "key20": "4y9EQQaPayDcfzpYXisYjVCxB45k2iE14naS7ZrH9oLeKsxJaqBexaBt7CVmpvLCPDkmsbXEU8NUVoAfjcxb7jFr",
  "key21": "2KLaPWQKRQtM4y9j7JvCWbZA7L9G4o9HhonwGxosDDtnHrbsLsom5gwGv6uCA6hyRnuyZmVXNEFRPRbPqoBorRsp",
  "key22": "3jAUiBu1z43Z6prEezxADhAC7XqTmPjHuYAAokzWssiSq3mD1UWnWQ3GuYJLBfcg2PLkfDtwVprCftpoLioPEyDZ",
  "key23": "2iEFPL9mx9iFR8wswAY26pnC9Q15uTiJgkNspZXbX4wwLSfNuSGGju9XNQmRrzRRujVz8KXZDGKUJ83dututZrfG",
  "key24": "2JifAAzvkM1wZ4CyjDburtt3W3Nu4fXDTHyS6a8fN1U5ewiEGuNHhgTVdf7N1JTDpAUKxosDAu6EyHfhGEhFxLhs",
  "key25": "5gSZv9himJWsFvH22L91BxZG3E9aeXGcbcdcsP7LHqfWXMVSWfq8nQ6y7UzsEWTGsxUcE4WZKAhnLYbXdzT2YKWc",
  "key26": "2V82njGPrYzyBJhCCXxPgz7hiU12N7b28hjPmab2gpuSvMXDzEyc2L6whXKA3TbYbWLUTKkCgT3jrLtwNWpNDtjV",
  "key27": "4NrKNhBSzT25i1g2q4qHUKHhFMCLNPASgweD7zK9WHDtmrR2ikVm1LPNbJKYfirQNAudLaazox7KCkU9CyxvPAFw",
  "key28": "txLAecHTvRDtbrBRdxxf19RdodpiG5gUix7z4DeCM8ttiNNyqYz13BFtLDtnJD1TeoyBQHgYMNAoHULeAjDpi1G",
  "key29": "3JpXY6mLYx4j8aFhYv2D8CbJs2NdA14F6nWnDQqYSQcYXm31qhyYK8uDsyEof9nDjaRGBLWH24ZRPvgNw6xXGhpg"
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
