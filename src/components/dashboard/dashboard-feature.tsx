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
    "8qh9PKuCkw8Efg8CqAScbxYis4dUkX2KgLqgghbvfDom1VUsabNgDz221Jn7CHRkKvj6io8obnwid5jhWcqciuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xvZkh5CejAf8HagBRrnr9Bc9wVWKyVo8r6gqNFhee8KPVs8FZGXt3hYzah12TYWmTkYfNeH2EFYBtNcs5bfgW2",
  "key1": "7mDJbAfcQC4Djb4F9Rh25thUMNormqyKVyEiQeweVSD4sMAkWo9KZkvH1Jt2S8LLrmy9aRHMviYpGviQ8nVVAVg",
  "key2": "2i9B82SG8Bve4Puh29Xe7tiuAXakxBtFSGYDp6CVo94WSZsqdKFhWyonqdFmRm9ZWoMq2Aknd5gFjBD9ssXwS2km",
  "key3": "aDLCrjQYjsSGPtdJXWKnAGMaUECryBNC7Qx4NvCU6bMqPBBK56mwdg7LcnpM1GmCfC8QgAncsEpyZM9jCb4QEdo",
  "key4": "5nZBvY3yTADbKE4R5HMTammjxXMu9T7MyGPwC55EiCJhKGMMDwziyhNkd7KCab4dGR38eVXLcheFh2XW2mPLWNyZ",
  "key5": "5gABDoKkUsDT47Vrh771tWHzPhx8RhJ8EHuLdYrjxd3mSb5UdU5uQymqF6jaEs5Bw7X6cbmN6x2Kmog4vsCFe2fS",
  "key6": "4VQ5hEP6ZzPfGUk9JEmWAZnxJyZLHkDyNREmZjtzyFCpYnTkfD2zYuroV76Eg61xrc8xDcExdeMdxFJcJTnM1TKN",
  "key7": "5EzDqyd5wyNsRzvtcWjiLP43FeT9WZ86r2bPi7qWUp7djk7xDAuvtp9PkJZowA6aGEivXTx1dN4P7crgEXYPgZ56",
  "key8": "5hRKddHA6H2vEznZV1LoSHGbuymmX9zwDuiKB1v6RCYesJFNC1LdggLfkYetDPs3Cwfi8saHyA8d7vP1CA5ZC3X4",
  "key9": "krwBAFH53hWs3HAsed7ocPAJMbohMZCNw7yU4D6dJgUQHrrkEEqfuea5h5Mgt3farZB3gt2tKBDSNziUoAXSqoa",
  "key10": "4gTzMi7rWp1FFimSvxGp7vbR4oPkzcebMJ8BjAGp1yMsVNsrDn3FETkWpoBE1oTd1475N3RgmTCLHxvRpb9qoUWe",
  "key11": "5AY24qLNoaAKtV8uu1sVtpkRwziDyQ1jckM7Ld1XhUgwh5SrTaWanhSHeoUqtkppi4ytFyF3RUXHzQq7nEKby3hj",
  "key12": "3PbVUwfWNzcg8U4f8PUEmjaWz4LMe7tY1m6yG3sh28fbNpeB8JVtJVwePMnnruyNrCsNBtNafhdcVjQZ6buGX9ND",
  "key13": "2YXPAjMNSnBvS1V2LvgmZ9Tna4fAoAjud67R2E7CypsUL39TJwerfN7Z9gNDSv4hXXKwyTU3MPF7pkjHXRWVhvQF",
  "key14": "5636oJaj77589jGafcmhHpXwuRmL4NYMYQFrtMGBzRw7RCwjrfu6eDYU5RJZ2DrkX1DeKw96dJrpCWYhBrswSRhv",
  "key15": "219mQNwEyCAnMFTRzP4bvZgGdJ4kUdGBwruJ9goKWEVvtTMyH6A1QuCK2uZhhqoZNc19Hzq53SsGUan8CDToBJin",
  "key16": "4zTnNmDLxzATjmBY2TJ7y1J6db1nG2dSsJ6sBXPkX1Ks6pYae4b5b4WkzH1fR1TWynTAJ9XLZcFZQFENyWWUcZRq",
  "key17": "3Z62jAyhttYKVnZAPYVc6JsmBPLL4U1d7t32EHs83RAduSrTnX6bJB8NTbTVcPpshMDZsMugo4oFPz71dUadfbYi",
  "key18": "2r1mRyDh2Q6HZQzryYdqLaVbNPzg64PhwasrEooWhVEfEttrnQNRUyL18cjUiCw6FmV7kEKwLAf7P4s2fCgECGok",
  "key19": "4stVXms1w5waUVsqL1gi9nyYHBGd29JNDZyQeWLjENvatN7DgC2zXdHnWHKqa6tr7ZUyqrmevmxfJiwyPQpWPMiP",
  "key20": "2ofMcNAhjtEk6CvGLE5Fk8qkb8b3Juq4Ghhgyd8zVSuAh14hhUUt5s6Yq7JrpSaKLoAR8w1T7wbcrkn6BLS69QQS",
  "key21": "ULseJv9bLkZzFbiyeKszKLYZhMFwdExtWDp8uwCcwWGUc7PR24UH1MUfMPXh9JMD4VfMZrirsZctPJ3eG15sJqy",
  "key22": "t4td2qisgDmG5rc4PCMjWiPRvPDgJgjFnUy6bWitrwWMh99P2BB1zix5mNZUNrWt2GG5NWdxM2qgcasPExG87sk",
  "key23": "q3G4GWpzc5eusrg3LgbkFwJZGgbojdC6Q5PUrRXs96XHjmbUi4y3A1hfAemZiXA7vr7XM6bZvxLVrxTDx1mmLYn",
  "key24": "3tiezEA9uDVGHbnYEHp9jtjuV7hh4qxThcjz88E9ipJTE94ZZURWT7QgadQnUQjmDNisntgaA2i4DySQSA7M3nCB",
  "key25": "55L2QJmSoACKqmf4YYpz4ywj8win4hg2XSSnGHRjxBuuqpEFShUXjMsJc9ctUv1qJUTUZYXZkX1pmQbgV7fAR1nd",
  "key26": "Qf4SPdcXmUUoF16521gvpkqC4P2WWwxmVaQFWgXWpGYzbsS3WPJuodZfLoYLZUe21z5T7aw9vWM3nCzohFMReJ6",
  "key27": "2c1xRBy999RVPzT7XziL5KdEMfUuXUNXx8M3gFpJ4EESsUfwxvtvoF6GcEmD8rzSvkyamCESTyfqQmG7Lxo8XSZV",
  "key28": "3jC3rGw2Gfpogok6KSMFS5QNHUAMAnrMpPtjrSwcC1ZJJCMjUDHnKesBaMQ1tkMF5xxNw6C4WkeYk3Vghjb5aLTH",
  "key29": "fomUXmRKcA6nByJfxHJmLvebM6RFFKLP2GAXqtxCcc1qYYQHmZc1aHHwGSSngQ5LqxVpnqxDVvQopSfUt6zByUw",
  "key30": "2ZAUcrS5u2SsZZo3PyBpqVf89HVgSyhXeuACvCHfiQnKc51sd6L9uoWhrAHrVa3HzXStaUBoWjPJCSNtVyn573HM",
  "key31": "41LvFy3Q2zKRicgaczVShTUwyyEfJTpsuxfy7DvZMWopdtHhD7BD1zNKQPYfdJi3X4cgSEZFDXC8xsTdAwCqm8dh",
  "key32": "5TkcjoC5Z6Q8i11CGyC1QozjGxVJQ2UKJtTYEyFJKc3MNFoavYJ8vsKE2bHVEYtsCanB694WTRtHsaiea6h6BF4N",
  "key33": "2VEDiyvts9z7XXgeGCxFnJZnV6QituNwDsbw8VQSgBjCRMgyfWML4dcG6jgrJTbarwRDbgrJ5zP1dpSivh9Eb8eU",
  "key34": "xboAwVXX7aZByKqntWtegTVPJhhoRfocZ9mFAzn3LutYMNdjjg2BFNm2EJwfYzvokf9UBY8Q73zjZRiSEFr3LWb",
  "key35": "wp5KQvptRZLwwxGAepGCHmzCv5MepMBJjUj7nm5X8EQEdTKtEitTpW3rxH6pN9uH214y3hE5YWNZY949p4BFiph",
  "key36": "5emvRQMbUbR31FKWV421JXF5gPE3vLYCBPD9zPeFYimEZFh3Tf3xVrDS5kaU1EcJN3NEiytVdrqwZDTxoTzsuiD3",
  "key37": "NxSxKG7YV1VG683wCzPYZaF5g2qdUCB6GJrRv3FfSMNLk7GeHUnwJnq9jWh2KAqQZvFgVGPjMok78GvD2WwTFt7",
  "key38": "3ZNR2bnp6f3bJfS1gtnveJAXLE59fSi7vn9WbyCPAzjEThVX2TDPG2PTttEvqfyet2SSMDk6zUmZSfJM7Ak2v31n",
  "key39": "2ZhXKeJoHGULKtbG67dgWgCPyjFyRUQzVHKoWJZjswHrbfzWX5x4eR3nVyAmiN38zwgy7dMP26EowQbdn2ETtvPV",
  "key40": "5Wey4dPwpVep7YBjwaFSn33PLgvqoe4CNZmt962dbA8K1KdL7cUpdR2Nxp3m6sanEPJDGPPFTCxLrz4KMsBmm93N",
  "key41": "34aymDh4wWgwdj3pt1Y6L3o9FLK4wXfp7mn6aMkdrNNMKhmHbu14NqAFoxzeVtrnt6xJdVcVPbAeVsbaWggR4qvw",
  "key42": "4yRUpLCX15dTy17RWLMyoVRgBcjPR6HKAjQeAZdDcK5FY973VhpHBUKjtfta4jfM24RjMTmM4WyjGwsfntzbrKwr",
  "key43": "5bf6W7bx9vTC7iYEUvBQwbJRQ5xvDa5Cg1DpDDw9QBvpcwPjHB3vwxXmmenngJHfTxz3RocTQMybbh27aLFYSjGn",
  "key44": "4WSmJnLgpgqLKvKNht9pEwYu7E9hX4hhWaPchQYR176CSCFNzPFrinDtPpMDtZKRVN3Dy5V8arHfqJY5N9eWuN4E",
  "key45": "4eDyXYFG1n1ENT6JVLnp35DJGkdcTrrMALdmMX6q2Bh6pp4mdiWxrPqgeE4exXGFNcyJQXXeTtaSYPr5nojiWy1M",
  "key46": "2TzQZf9H7vMUt7Eq499kJJUAUVNFrvFcRLkGaj158UcfGWaDdtVxPeRdMoQnHbBLZk6tmv5FJxK78ouFaztULhza"
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
