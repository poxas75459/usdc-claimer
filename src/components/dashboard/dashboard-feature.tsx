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
    "4mFczTpDoUmRTaf1ephyYcWyUDrrdiA616DsVea9cdZRn5RpqULTNYRMTZGT1AeevRsQ6YtX2jRJksAzVcSYESH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fzobEoVyPU1yuqb7vuSbRiEyr8MXxD5RqBMAjJS8D8gahHXqnsGozdmbVZrTEdnAn5bUSArVx1gv3LajKwAZ7PQ",
  "key1": "GBgk2LaMCBnWrHPkKTN7KRkRDND8wYVCy8u89JUc4PqZyMsXSpGjNaGxSoJTT45nojy9ftN3c6cQcvpFyJJTbUr",
  "key2": "2QJeiTcpiKKqsgvmj37U2YbR5JquQQfEiR19g7VYGn1kf5HZjyP5sFdT45hyYZYAj4aNMLieJEYB5Ga3dkGcMdkY",
  "key3": "521hkjezqoWGgq3cfuJ2ksQXkoy1aGEHTp5MVSqJPPuqPDbGB11ZbDkYYpVYwf9sPHG9nubmR5fjRqmU8c5EjaL9",
  "key4": "3x9G6L34n3MUCuWRG1rWNnkNKUKHzxo9KspiGuJcBeso3g7SqNbVgAxVFegNRbtsZxr4gta45oi7rhSY9YVdvSeb",
  "key5": "4JsL7zgoMH37iAM3E12bikGDzLhvaMzeMADiKdTYHuwHMLTTRnfwn75cenhrAbnkrmYFWerwPeAStQNzaYTAu8N3",
  "key6": "3vMbvSpNrSqF7ofZo38Mmc11aD7Kjdws2XrnkdZcm5b8wPGoxZJChYyhx9oYs4DfCcusKh1r6SBYXTD4ArGbE1oA",
  "key7": "5EA1mwrThYoQcfY29MeDm86wA1m4MzHgvqafGv3brCmay1JQo9G8v25aLJtUfCx3X98NagA9P15UPkTW32EgnUvw",
  "key8": "5WDwkY6iyNsSHZgRF3kwxez7uDURkm6pA7YgLhKBpyT2AdGFVohng6uCJz1Mpeb9wJ1zq6xQhe6PLnFgsJ2DD94s",
  "key9": "5CVtMPRjxxquu7iQ9VtSpsAbvHauBq66x4PhX1zPf4VfxJ3dynKpr4Pod62hk6iBX11o1sWuq9E9EhtDSyumAiUB",
  "key10": "JQBzcJ8W4t1zXp5oznMNmJyzHnaHZveg3G7NPmhs3f6EEqPrMFvbvMa1cxBUuyMgs6M3CxNpLc2GngsKF2eW7he",
  "key11": "5ZT7Cx5jr278dmXsVx5tckhwshhLpBgMMKQ3hyycfow7Q3zhanm9WVhBAeMPphKPs9mDBW68EXsdKR7prXumDFZa",
  "key12": "cuZST6kaaa9n92LH1B2pEyePdsvHUsMohQHuDeQCfFYXR3s514LkszPwu1uBECjY2eCGkX6MffHP4ukPnDPfGLF",
  "key13": "3fBU4CBMG4xcn2BaNLJabvc1yAGRvPiP5mSEECfumAWEFJxT6hrVqmWVxMWrizek84i26MdXRrXshgoH7SDDrVD7",
  "key14": "3XZdcpsRVo7ZrB9Yn5Vg1pDErhHRNkjCLfaRqq7gKVi1sCk3ZLSjjMArE1edNCz2hS51fof1z1EdhNAnrhcwJN8V",
  "key15": "5HAQR56w8YWJtGH8pfK6oVWRpeApSzKgw9b3d35v8DQWmcCGQkVRv8Gkgt4F2oyPLAYHLfVdkex881P3Psp1qFYe",
  "key16": "uaPXm9GDYfb66NV4wcJeu9im6PksuoDSBoWSTa6LPgZ5dPbw1E9d8PJ6PZp8Gi7wZeEKtN4ttY82Q7FUbbFNMSL",
  "key17": "21LJtZFWxRLvE1QPhn3cPBN9neb1YQJUzVHE18tE8jaFa6FGLFyyDhiiWKg2E3xRKZ5TkhzrEkpSTLmFb2sHaQ97",
  "key18": "2xXynAy6aoJcN83R3MP8ANSQzKJcgfpwJRJyfEhwZYyXE4ZrNDVo36ckDvfHWJKKHzSuYhPJckizvL9JUzFErLMC",
  "key19": "4vWgMtHdmLUCiE8MPxuXaXT4nPmgSCNv3CKH9msvJ9AP9BZ1X57aJYm81YbyCLQAHmYaB79xrRUjLqRL4s3pxyHx",
  "key20": "p6LhyoD14X5k8q2Vk1xDMUrs7R9hkFR9MwHTkp8NVtcEt16q4RiFbXVbRA6Rk2ygykkWdXwXrDsCB3FbSinttRG",
  "key21": "328pNPCFYYT9V61mANS9T71BtGA4FSyZrsT1jN8ocPSvC6u86gjqWhhN46VcKEKKJG6ZehhJy3vdPj1Q18zfmvRh",
  "key22": "66w94RzPgQWicKw5N2NTxZZ8Tgt5zChKZE8sXGzximTMNzHTNtoWVsfvKDo1Af9qAHUaUKDiTRj43cZpCg33Sg3G",
  "key23": "2KARHTLtXWtcfWd2DNT3AwMttVpw66fvZB92CBNUR3s2YbdKq4Ahau4sTf9mAWpgKvRzbr9SrztA954TzYs8rmWQ",
  "key24": "3mwsrkdpJCD4GzaQz1ni8qxYdyrqH9xdKYuSQwfvD1douiD3pW9Y7EFzkdwcBEk2HTv71b9CrTsCDMJTZATGGiHm",
  "key25": "45dVf79NbRD1CPiBNKYE42ibaJnCFJ8HToyXXejsLyuFEsp9HpsRgjpLTJ4nGatED1f5nDUAWMG3kusvAndswRvL",
  "key26": "3AFo5WNDNnZLfZjur98ZRH1BENzkcGdPheiWsSY9tZKzFPQDpkAcC1cb1gtmxa9V7HNGZjCtyHqWZQjpdDZQWMz5",
  "key27": "5ynC4sjyqcbSj38oRAzEcxamgmLns87ipXTq8J6ynvJ5m9Ngww6bsZKzZRLWe7518f7HJ8XrtqoQfDbqpEw3S5Eu",
  "key28": "4mE6verP9U64fSzSJEJspjka7iskzp2ynGWELQtd1CPw17Yj1c93i2EgHnS3MVvxqEFVP7FBSxJXSgpFgkR7Xbyq",
  "key29": "3cZC46k6jew9dS8DofX5N8u7PC5Bc86Sc27TY2g5hm1Kvtq5pAuXv2eAPSQowoZQNtAUVJrK8d4cGHaEbZUztER5",
  "key30": "2Y4wfntHXrRk8Hik2ZNHkDPB3ZtUDQHTMegPkFXzHvyAGhbuJH675cdH8EEr3u4VMPp59uHh2BfUWpXyQW1KrShH",
  "key31": "hvTc1eFeFkEPUf9XW57t3zPSv2KTbcq6xwsK8ws8zUkxVpaQuziKMGjVwP4BqXokS42Mhde6Uabh9umYP9cvQDw"
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
