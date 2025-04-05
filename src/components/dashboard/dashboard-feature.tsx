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
    "4ovCaMYmo5yvW8f9DsZEoeyWrNadraQu9scWv3CpsvSj3fngtyVUsgwguNwueCUYhjVdQSoAcaGL3GKTLCNFmyhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qj3otFDa9KYFqqLSUD7HfBzAciQS1UGqa9x8QDDu7J3s9vogEwvoE7bdWSLV9ochiTghAkQX77WE2dxGCy1X2zy",
  "key1": "3F4FgxhTFN52kx3LvimxmN4FP9hXEpx7BGaKCBkYjHbNoxdSTbctP6KQbdDg8yFKwxwn24hc1F4r5J44Gj1qfr5P",
  "key2": "J2DLit7AeScqzang1YS2mGydvToPuReTSytvWeL4t95Fj7weL9YZPJBbTsrrj41cb9MH6FftPWfNTdoS6JXNrWK",
  "key3": "3F6dKEjn9KNCVQJQAqPnJEkhXBYkbDzb3quwiACy5B6gCrjXaxzwF3JLGndVP4z5E5QK6fCng1DVtCCmwsXjqnSr",
  "key4": "5NB4n9dJYA2Li2n7PhHjtinHTrsdTnVaGAvbiozHcDegQitqBy7WAwZDLPfyTQpsfQq92P6RA6z8TowssBRk81VH",
  "key5": "2k46sk1y5bYZEKywD3QwsbKASzjUjb5Uw1r7juQ88wLwXCbi7cthWEa1YqPrKDpmijU2GuVPcDsR4gqhmU7tvC2P",
  "key6": "4nimsmQh7NSK37Us16migMhufjymno8MbxUdAn7SRoV2HE8EUmLQA526rRGZMFmDcoHeY3osMDC7HDmEWsiGXu5k",
  "key7": "3DWjeQzbnnKmPNSaftHA2eKYMgxv9AkcfVkA342TgMSdpZQEmbWUhYmWvBVS2uK4WBQ8uuHkiCKUAmLE7HAQypG1",
  "key8": "4T8QZ1Yp6soqjAahYCGwE1ru1btQ2de4moGbatekRw457qdhNayAvRN2hgMGGcS7zaJYPwkKYnfEA7kmMExJgunJ",
  "key9": "4HcDz95w4cd4EqtesDhEuGTKuXL2m7gy4QiMHf2DRqs1HUdHrZfy88tsuCTKvHaKdDZtJq9ivNgBMMwcbWnuV4c3",
  "key10": "3xUsKsH1WcDZUbbidwD8ZWhEiEyXNmdy7Tf6gy7whAkKemrwrCNMr9Ebh9XJnCHcDDnDHFnWrNnPu2HzLy9BQkTj",
  "key11": "2RBteZmMaeeYvmbZFpksaVnjXCtYfk58nu5PS1V6C3ZavpoBtxEQSKjkhBsVPsCGKZdQg3xVCSrEsAnhZv61WWfw",
  "key12": "2JD1BSAg3m32nigchQwptEiXWZrFFGrwXZHYNoYxrwkFUA38a3Wkz5xnS7Gzm1tgtyKH6g39wAu5Yi75K2zf6yRR",
  "key13": "5HWxt3TrmXxd2CqtBwxHZkRZcPDGDLXABLU6pim2KuJwm3p7zhPjsfXTgih1Bb2r379ow8SwdZvYUDXcsyrchtbS",
  "key14": "yMVn2Aw3FoQpQ21rvNbXt4YYX74aorYU3dJFJs7AEEBwJwYc7tNhDqaftzRhYr37kXZMyAKGZrRBrhybHujZvsH",
  "key15": "62WWuezcLp3RxLK8DtMRaK9AQpv7oSqiGMaP3cohSkLx3X789o1y4UfSeczruYiAgGUuxg45HHNwKYpGbiNmZKpA",
  "key16": "5gg3SsS5Jeao5SN94o5fGZXPLnAghuGudEiWCd1zJheAGG8naQWL1A91mp2A4uLcr2mwhkrM1Z5WUfufDG2QDK4i",
  "key17": "63FyrR3QM8CPAmfVSZGt4tB2GCQoCnFYgvXqbrPMGqWuCFum1rcXk4MpqJgSrbMz2VfCX1qPzuoms27DabmoHUu5",
  "key18": "egT6Qg7JvN1f2iXgDLK5jBryXr4sCWgremusCdcqkiaNgTThCs141H1QdabrULMzN6zYGHpxT29e4djRfm7aat1",
  "key19": "4GtUYAc3v4FhWXyjxSXWTYAgJxXcaie5a9q93dkbWan23A7o4Cq2V1aSdn84hcoRJZTmVYQFMhSUDoKyCNwSQsT1",
  "key20": "4DxZpLgFBjEs52CqMJ72s4oYgQgnTfFqbNkfodTbXtwmqg9CcPMnhrPGj1wxUruiAXzAo3o4fJ9vE8zzAAXykiEn",
  "key21": "4WrC4RUDorhe1NLyokPK8bhnKtbPRRiH4tAGzraRiBi6pDRrTkT881iTEss9qLWvDxeMm9NAtvazfLXGzugL5MuW",
  "key22": "4MKm6iXjTwDxQ57BjQyuRCozQqgdDHwY5jyfissDpuRYdU5pKxx1RvhmX7qqPBc3vBHRfefzbXfyRQCZHo9ntdUF",
  "key23": "4SzS7A3uW6fWcWPNtj23CYdXMyqMX62pcwuBTHAzmcuH6ooHJzCjDaGRH27pDzRbHRYPbVi8dLT7NyJBu1uksYzY",
  "key24": "H9kNs4w9H4L2mdzs3xm9B14wcyqx5sNdKfPwBPpJ64pFDXxVUnyffmCdnzBYxffTtLzyDcwZBoZ3rWkmY1Afp5G",
  "key25": "65QUmzwm9LfGJEu6Vjhc4okxBcc6usvkEXu4uJfFFhV9oz5W68dxzU9CRax1inhiav2dyXHBKkzqvncgSjfccrpe",
  "key26": "4jEXBTehTGxjRr5EnmA426bMRZDcndsL83kT9BomQK12RDgKRKVyWjupDYoYUJBRpTNG2AYJFzRuthsgskw8xKQQ",
  "key27": "r7iSpQSPGVAosfk2VeVT51p8mrvvZYb6fCeJJXRwdjWz6jmvRK3TbckpdDLjaWQWqMCDzjGHxcRZVsheftU9uW5",
  "key28": "3aL95DSx1ZDUoeqARQR68M2Ua1VykoPXdJ9SciCq55QQKLtUzMLWGWqE4R5kRFwPdPmUoB1XWaF2Y7bhaWug9B6C",
  "key29": "5hjd9FZNimCUhghnM26EjgKqKhfyAbz1e35YeEyKCLSAq4skEYBm45CxiAqH37UFJhjQmY3dn9ZYL7tSVNXKSTVB",
  "key30": "2AxbPo4AWAgvxYbcH4hKrWs5VjvpLf9HC7w6d9jop9i525gG9xHibbg7JX7zWvCtQpwGdAGquAdbj6HkWgYmy1Y9",
  "key31": "NSNMkQubsbxAVL84qxo7p5TPVeUXRnxLjE9uM3jVGPabjLM2JD9qx4xLRwxdREGQurvps1b4MjcYUvomLqvhz9a",
  "key32": "21wRVzp9xqoKVrM7dJpi8mXZYCwTUNJB4m9U7Jveos4ryAuMs3KionNDeLg11jWGFz86CAWLWsZRgKizRyWpHaW1",
  "key33": "4mJDnFdp6PbaqFd3h8hwCkXNZYCEfRxSZ4iayEMtmTUnWgNaPgDxoJc4u8c1hEgYjDL9o2rYJgrfgzHLgmsnrbik",
  "key34": "4nXEaRn2mt431nzeQn6KmTVpnxn49fMrBKbWmH9oMQfXCn2uGutcjHB4SCwYho6VnXu3beKgieHKbyzbrmtCfPjb",
  "key35": "2xQHoWMxMHdinj6qNHb7S1r4myHVJqFpfALjyYDke6MSUbo5qRnxdBTVeUXvUVjwmkHoSBp3yUEg1Dwf7LZcXS9X"
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
