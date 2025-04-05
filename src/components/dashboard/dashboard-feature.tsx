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
    "28KPtJJ91azcftBMzWPvFEfcgodtB28KKhzd3TLRHRJEfKB8ndQhsVPPJQqbTf5opVwhzks48g4CH7dBr8tEWjtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLKDstwuUfrrFtLjrAjFZ8QmrSTGzVg1fhoJy83L3bRirQUKNyL3s7QedwJd4ZwisojZV1fPgTgVpHJJrYvNGrx",
  "key1": "34QehGPoTkzyAeTZQm5fJq2RDUby9cSBniP4KHsYoAajgTPwq7UocWHUT5xxW3vYSHupu2vgZrwfYze2NcYHLHLM",
  "key2": "5afJpRggsmLEkGi4MgaNLbhocYmSBfZrfoGT3TjMw43b8oBbEn2ieN2sWMjmYJf2wAEXQeFaYhtbCmjyTxdP6TCu",
  "key3": "32uRrGHtyN2yPxrKDbqHna4NP472Tnw8t51RtUzaN3pXFqTz4S3EX3EUvJrGCyNBZXzBrBjpEUmeodN7hQ5u3k4F",
  "key4": "2wqcYFijxNBdDsvWonJePuKgQuBmZHGexSpDxXB2w5SwhUM4bua37FdQCo534sXRBZYsN11jCPnd3xVGvUumHLWZ",
  "key5": "5o5dqfgtDpN7FS9TNSJVdBSvG2VMjgLLBNoNU2MWEwAf7P5LSm7pu3kWR3hhgMNsuxJK8JoNg5n9DPLkas68tEWT",
  "key6": "4XG6MXt31r53AEFzfchtQaPETnwWVPb7C8RtEY8XhM8kV71iUs3yqqbQtehsw1BLfTNaDLWDdUGdQFEaw1ophAN6",
  "key7": "2NHw8qnvv5j4b5bdybCPEpMBqaZNxpP3wWt71VFvxUYfxaKVsSsnuVu4V5xBugPRWnB4esMw36BhRinucbBcq2MH",
  "key8": "45tuwB8BzE47e8EnkVuxifrDURDhXG8p2jwzvVKgufLEpR2531J4g33ja6ty5ZdxzyM9W453n6x6uZXefe447kt4",
  "key9": "bgTYwvNqwatG3JioUPczfBpLMbq4f1FMzpgYE71pK4hMfrWFz8BkmhnmwYrotAv6YgreGPbGcm9m3jUpDgAjSz2",
  "key10": "4nDzJDQiFm6v326unFt6sshfUCkxQY1RraQMsWFnVdmBv23N1s5eFMkqvtzF4TMF5NXhYBGpC78WrCojLRpgtvzt",
  "key11": "49Z4pc4mnRXyxs6RK77xkbkHsWqW1EaFtAxjM81m1DfZAKffJncKsnhSVGj2hGjM4B2CMvS5cVjrzLFvNQ54FXBz",
  "key12": "2NrhQQsPHc32NH7LgRbh9Ef3Pxtrsu22r7TULP4mCBFjhCjXS9GK5v7fcRKZSeXdoz3mvvF7GmgLpMcfiQKPEuEp",
  "key13": "3BJucSpNzPARmLLerftHAS3VFNWBayTbFVxamrvpsEzGcnmQb4gtGk264E2dM1Lb1s4i9SfYN7vv9KTt3nnSA9h4",
  "key14": "4MWQZpLSos7iH9rK3R3v5B1uNLSuZVdzQ8egEDTLRfAYA2go8iPU9svCLcjK2hBNWDNaBFdsDADhNpvLbcmkpg7k",
  "key15": "5B3NiF3GnME7iT3B1mK4HznAxTJ4ivknzU3HuBDUFW9zePMDAULQ5BQoJtJNJUZ7EVGaFVX3ocoqtbhXwmgwsEym",
  "key16": "4PoWX9YsxYjecTbutfLgSWztXop6GRNsq7S9CoourU3BMPdcVT9E4cuPg4yDY4hnBxLGBqNRC7LcBiMRdQkWAEdr",
  "key17": "4cSbc6nCq2XGfw42WMpsuT1KdN4WvLvZMrc9epqi88JmrrmEGSMqMprUKaCWiWrdsZPfp6zxJCptVoSBpqrLkzu6",
  "key18": "4kccWUW7w7s27KWjem91jW8VHV7EGVhhRrP7B82cSk7Gn2KFmUTZrunm4cqdittzKtc48VTERkTJSrm8S4HrhTRo",
  "key19": "456ef39oCAa2NXWbuSMHw6ETRiqHEM9rSssg3Bnnx6WPjTifcL9dAfeVRgNYUFao1obwq8ZyuKi4LpJc33h4m8z9",
  "key20": "4PFuwcfnd7aFjAwjznotuZSvvaeYkCaWjnYJqByH9JGV5v5c8uEfMhrmpSPxS93ew5yyMktGJRF7Vc8CgSZUASsN",
  "key21": "55JWrj3fygLqjZmU1XDDL9Co7o3kHJJ3PkkS59ALDcJygKWfKnXvt2b7LaH9EvNCvtBhJULaKYdgUaAuhjjJNMSL",
  "key22": "2EMXEUKmjoW5QDiBM7T7YyJs7eU2ATmbxRKDQx5VEpzxpRcKpRG8Vq4dWGSG4ZsApfTeXMTziBWReBsy6VrZaTsU",
  "key23": "5cBb7nuR3mdqzwkRnSsbueeqBLAyMzM67RotrPHstGs2xkaeaQA1DZsn6SU18gQ3nMgYtKzW77Z6Vu1aFb8mVm2S",
  "key24": "3TqWbFjNEiZ1VeEUL5fymFXpqoYbDDwk4sxii8a9bouKk8tNbALkBYVL328ZDEL2ygkXqdLW3axZHTWTb8YmoTPr",
  "key25": "Nfhqvw2AHFzft6trD4PY11PWtjxMES6yQCaX5WFdtjkimzd8CEFukspmujpfRDjCc9U5e8byvwBsRi71j4dzB9Y",
  "key26": "G1AgGPX3jSBVWyuSc6Po5SXtirHpRktWYbJa6FGivoqQQwH7QMTPwSgPvjrmkLMb5NBTGDmo4Cf7MQyCgZnfJLa",
  "key27": "4jUmAkjG6NT95JHYDYCMEfiF2ApF8T5XKRXMG9BsLG3ozV6ePxKJbrwSe4KBDN1gz2PaT2E3dJjXiJmn4mKddcAq",
  "key28": "3iJAMi4RDWAkE3TkvzFrbhGHxSMz6pEU7iCRsvscFBztbyTUNWmMKcPgZ2PFzfsDVgWHnRyuLkW1dbb4wKfPmk4C",
  "key29": "M1b7Nk1pkiRvxpTQFfsfe6D66cQB7SwKobbwwwLofqyNEdcocDMqkLFrX74xU1pddR1GMbjSXRH9UaJwG85fB4M",
  "key30": "2RSgdBh72uF9QLw25ECMawRtahqnEf6MWN8wWyd1dGyZxkA2DcbR84kUERFMNpuYqTkDw9ssrG89ZR6PjKaRstbM",
  "key31": "1oPwtXSg1brBRvQH69K9CLd65rsQAVgenfscMNgwg5KjW6X4iXXbxE56Z4sNrCcagCxiTojJesih4ZGovZRv6fP",
  "key32": "2eYf6ePwejdmV75fbb6CnKAuyhRsM62fF1DLMjXnxJq6CRqiooqvPkXm4rJBTmdYRTBVMz5hkY5NZRvRGeRt1bYk",
  "key33": "2d7NYmJZPQbJk8ki38qnfix2Kv4CDqMXvMjbFmL6CRM512TViCu8rgfytzHGY1ZbWc3FieMWVKv5ZhmBfjtpFynL",
  "key34": "296mPe2YZwJLsPW78bbtKaYTA9rY7qeEiLYtHrfwPuMfxFV6WUt4F5UPQfbX1XzMzk5Hv4YuhXWyRZKdUTSeejKG"
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
