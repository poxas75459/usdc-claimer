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
    "5bH5tXB68CLME6nbKbtMNR7B3EYsaQQoYYQP8NSbrtpjjzLD5mQfz1UHEX7R1roUxmDzxY3df3crYjY5aaD5xd4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNjXG48BGS2zaRdoKLue681ZqVSksnk2a1GuMyC7PMY34WPxjMr5EzJLcKEu3Td14btpCG4ZGqQhCsHomPSLJYR",
  "key1": "3wrsjS4HEaJuXqRCrraWgm6HLEmehMsRYD89qJvifrzAzPhzfbD2iNkEWcdFinatoL9JfGgoRaXuADYSJ9YcEUe9",
  "key2": "2jKo8ZM1MNVDLQyxTinJ87HWpPh8QvLRVcqiaHA3XNGVUjZVzjh3yugzkFX5vyjunVQkU7xwKYtwgTCZxikFwCrF",
  "key3": "5WxGqibYRx72SsyaNSnXhNyB31k9x7pjHf89kZvE5SmUWRai1YFQAnLq6CpMAA65JhMfLwweh2Yv9WW8JomvznTN",
  "key4": "3mynTVhay1ceLVBF4uB5jy6j2Lc6pLiT4PUzRkwnAPGSorsZjCJLabqEX1QerYsMymXGgBoMLguVfmD4paGKK2Ps",
  "key5": "3C2p4r7tTBh8G6VXuvpRKS91ji5wPbF6CLWTWjeSvw2ZTDM3iCRSt8VFViPRnBYd4sEN2nwPvGNtGScf6vtZe7oL",
  "key6": "2WXYJvHTMF9Yf9mh31exJRJQh3Zk29RfxLQbfuyqEpiMNDxHtFJAwxystJB3CtRNj39ZicfWD5hyJz25uBnRvuKw",
  "key7": "4aimSee7roZdLjEBjPBJ445n3B3477ZvR9pVbGcf22nvBRrdX9wcUS9ZapJS7fJdTH8R39Q4aRPAaDDPmtoedhNc",
  "key8": "2sJo6donh1GgYf7sEGv4yjrfj3Zu8R3rBKcWQ7UDFDZfyGX3EZt4zCETy681G5MhYRFWEt9GtQZn6v2VHBUyLYmU",
  "key9": "4WwD1zXDzBavbxZddrpaGGbmXuHSaJrkgeuPpiEoZWTaGgSJXJuwWx2PhhLyczjWUJtoV7k8NyFWaPjBtDxYAKcr",
  "key10": "5j1SqcmFERhLnF5S5uHAxH5yuFNoKWTS7KgYKUaMaBgFAQFGDSzBQPH1P2aQfeYeTX3WiMqWiqAYKLLM2no5um6Z",
  "key11": "3iZpWiCSP1NRv9SSCv1vUht7nqdeottmmtDFEUbci1xqZNK7FCZtbbNRbBRrCvJAtDQetFPyPKYnuUspo6wGbusE",
  "key12": "Qrog3kpeh3M5BsdSNoWydWViw4Yi4oyVmoKZg4X2Yvq9wXuxQNBUyKxwXwMLHJ3ZgRnmPsDKEeWdNzu6Q1j41sU",
  "key13": "5yS4CujcJHpwMTCyym5C3CaZMvx2ZCttuBZAzgtbkz2qAJBQoAn74qQBWWZtMoDFamNh34UagZ7GpApR3GdQfFsD",
  "key14": "3NDXmzGUE8U6P8dkf3ffSqNqUspHshcnJbw3C3eVcEMab3YKmxUrX87p54vsrEjRBzWertAUDEQNRoeb6uz5XmMb",
  "key15": "3Q5ivJo4nghFcQjMhEneYbeCjmSK4AiDe164Lrc24kw3zGFQCgamQpC9JthS6LCTCW5t9sVgSpGYecBnyRMV5FuH",
  "key16": "2h8bY7TEbvgfGEb8Z8qVoaSEUqXgarPpDvXXeaJMFDag9MBALQ2syuWm6HPHPF5EiQr28ypw2WHR1r73KdiSwbqm",
  "key17": "4UVxgkGSBCwShEP8abDNhuskZmSSSkBkX2x5gzPY1HqcFBHzH5THNUPAfHxATfueNYv6EZpjm6dyXnTe3fbd3j6R",
  "key18": "3A8jCcKedDRagEoWQkNS4qGdG5e1NqBeAGppD7oBeBUuEbqgeD4jkvxqwBs7JoqUWaPnCTacDkPnca32xToYw9Xf",
  "key19": "5vPAwP1S1rFjCvyJNy1T5PZs85kQJe8BdtrE9dtvnrLVEQ8JqMVNRFnium3ykDr8zYichMkYX4F73G5rkZMFBeex",
  "key20": "61r48coPrnh4NdJBHyno78dgNhJYBcSjaRZqFK411HHRQs4N1bL2wXF4JkSoZZNgi3vnbsKuBuB7kxsc5CZBRSic",
  "key21": "4NQ4jyZVuyPcwSzDvpYJgBcgxE9L3YEbkHyx9fDT3WSiBYvLnQEiNS4ygcWAn94DRSoDxGN9Swu4pL8MNpaWsC9U",
  "key22": "togDsgp4MuD2YwjKxiVMUqSGLhuLjPybGAUVdL3AQkthg5AaswPasQ4C5QtPXyGUKkQzzeGvcsULHgNNe3XQFQM",
  "key23": "5MXTFESjZDvyY2BAJLXqZ7Wg4obpevHpp4q4MAbWbVLM4Zq98Lv4sS36cMeUErxdFebFisjJ9YdxtojWCDSmziXJ",
  "key24": "34msgTtvTXV3bADEojtyLKvbZUUXzNKPtc8ULS9BXr3KThEUBFaM3nhiCKoACGPWW6iQr7aTwFVz6FRc8GWX5vX8",
  "key25": "4UPSn2JDo3fKNscRrZtUtEmhhQJma6beCn7nbNKDfLnUzGLfVPAMcMc5mqmzx9ELsKAxuHqzFCkoGACjwiweaay4",
  "key26": "46jh3jmH8NKtzxRSVj41xfVm4ttqR2Yxm1q2Mc9Cubz1G7WW1ejjjczuU5jEL2oEAFQnhxXes246bduRpNotYe55",
  "key27": "26SEMgbUALw5bjf6mtN23gYjdTvErtmSV6iqqB6YQAUkLuMtdreXndNL2EkS4dtt68xfKRsTQZ4zpdntxc1Uw4LG",
  "key28": "5c4NzobdvE4ZX8Q2cbDXfmCrA5RNAzH6BbbC61GhGjJKV3rfLmUquXyQkirfSffT7qw1wiFG6NLVj2pkMMnnc1fM",
  "key29": "5NCBEqK8KyiG9WfGfbax7VxphksbUnHeKzGGhWSvYauPZf7gSGAc9fCvSP6uFffWAG4u7adyhoT7PSiUqN7tCPpi",
  "key30": "5QFZvUj5NRV8gjGsUgL6Qt5YuzCgsFXFHKqdBEbw8DfM8VanSYRhJerMSc6ofWGPQcH7Ueq68Sq2b8mqefnELsTR",
  "key31": "2svQ75Sh4yScHfCKusn8VWGBr9gKR2wVjxJFH5LKUokydDv436Ss7BmitjdGXicNrg5MhULo7Qf6p4emeeFBiJCg",
  "key32": "32UgXc6Bv966kt3UnDvXiNNgqcDNtBv1crWUacJpUY2xqEd2rTsn79VB1vYqtd87TpFL7dytu3oN8UfiXGhY7bQ",
  "key33": "5WrokUjaJw6En7jjhxwgshPzFFTp1yTrre79kkVjaJAcd1wqY9zDuWAHkuZYaAQoniVzThF6DvcoxybVYkErrpjC"
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
