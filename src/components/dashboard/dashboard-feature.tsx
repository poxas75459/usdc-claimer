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
    "3m72w6HVjRC1KZ3watad1D65PnUWnrXB5u84na3sopiy4Z4rdK9CSSAqhWqpSSrzWvZzbhqiSYceg8fyHES7ZMta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bwQKtQBXzSDS9a1qWGqSLosKrYCeNGuacHcsdnYuDwmS4ippK62VqB3iT9F9dNVV8U56BbWXK9j6siKRQFZf6Y7",
  "key1": "9D62h8cWxmL2ZoZBp31nSVHs9NdYJUJjZzxdYzLManEGX59xgw3uz51YdGTjJVhCpykcnFGi2js5VRSBk1ZmiV4",
  "key2": "TjtkjeNM8ckCsyszXqizBF4nvStjwL68QpFYb92V96UpohfsN8n7TDeLhhwf7qoKzq2hjVZmosphwMDVM4wZaTt",
  "key3": "3jAqj15oVUNAKSwjmkWb3F3hSQ9P2nks7xMdjCGvNjYf69HFiWgxGn6k4zdzciSTG9fbHJAFzRWcN5JgGYafa5LN",
  "key4": "35RDUaDrgzg1kMQUWtEE7uJiitnbNXSKdJxnNFQfnjg6r9DDAdhThYgtHGsihZ8mW2UE2yZ2nFCP56QbbZiDYBqN",
  "key5": "2mfCgmNTQCpsxpimXmDyk7SJz3s1ncRbjRW5hbnxQ2Q14Vt2kpbPmbqxe7z43GR3PUTFzyNYSqD621ifp5tVGSMc",
  "key6": "W6zxgFbT1cAH1beGCCNZXuXy8tG1wiz66JWuc9VVwnBPJ5NWfFfLdiWZqf8cXvwHJPMew3onxpgkG9FaiBwykFb",
  "key7": "LQQqcizcsWyTSp9YakkczCE5PKyNY44XczaGoFTHtVQxibESkBR4UuYiroU2KbAoCoexw4vFtp5rmJRvGqsa8Cp",
  "key8": "4ygUPhVPV5qv4NHwMcH5mT61D4d3LDjptahE1HcUVB1XRF76jJ4vQ5VctohFM68n3f1NaHi3YTFNBgLk35wuQtaB",
  "key9": "33kTwbaKF4u2zfaAHE3hZKHcXAwfvLVJm2rVRsDk5zjd5qzBxTGa1fSX9nS2kXCUZL8UqHHdRnKMStX6ZR7wn22v",
  "key10": "4wQWReykjX44spyzL986PTx5ypdRzDYigYw8Td63TEqBhp2NGtY27RbKWYLdCtGh1czLJEJabQVdvMEExsBEgFwk",
  "key11": "3uFPKWkCsRkQXbfCWSbYeJoiFZMGu1QcbtHPer2gB9FoDTb7N79VQ7pHoZ1eEtVEw4batUpQi48SMhcHCCLiWqZm",
  "key12": "4h68WJpaQ1mJdb4PX6uqVY3ok8JhGXcJQTVqRsiXuxMBsBWFK8RLtnPeyES7pycnaCwXFYEc1Bw2sAz1SqdnYbak",
  "key13": "5FMN6y6vK3tV7oTCB8MYgX1iPPWVDoxjtM9B5oJEeGTQg5vLHebFfZG4Mb6jKZPLCt825K78pUr1by1M3gMGTecM",
  "key14": "3jKhbpUYSGDBFj1Ym6Cqq4tD7JY47nmgAKcHLzZ6UkzEGjTNVwur333KnFn3wurqm1J82uc7ZxLXjDEKXkycnuhh",
  "key15": "4fpHMWw9aWxVZ4CVQyuiKdRgbZ2JJ6Me6GX4ZXXHpTERk7vdxZdRzwGLwJCJ636wLy77hN6qM3RvkPxKw8tdbviA",
  "key16": "5u8bZnHUrCMjNUfuM83FwyT8ijtKNJwVkzzqWVEqpMVazmWPjrhA7he8D15fzHiFb5QzCh4aSX9sXWZAJjihpQdE",
  "key17": "5q3M4TczysMWzbyN7zGeny1JbU7H91d6AyQ6gXLXH3n3bFFb9NYH3rvSf3A8eaC3wkoyTVDuqeh3KiHjNCWJKVbH",
  "key18": "4KgvoDsFqnpZyh4j3VwVXv9Q1NtprA5ZfYYuF8gLYow4qsEzjm8WTX1kmNBddR8ACgry4TA2XHN8xfG6Zjv7SY42",
  "key19": "3s78PjmqaUnTJpTm4YS1vf6hLNfjG3RFmoKjNWEnBviNXhfxPVYzBd1P2mRtQASduDX8Yptx1qA2thN9tWU7uVQT",
  "key20": "3mXqWDP3HTYHyHfkErxV7dRYoRwCc8ycBbEN24uxB16P6ohh835fAtnkseTyNwVvsQKL3FR6yksEQZgbR8ijdjg1",
  "key21": "5APbLVGLWttEBg32gamxkDF2GGoKB8QZuVEg56J7cFPMa3TZ6RuU75tzF1q1CuThv6SELHgEJJWcCwSkckAxp1HP",
  "key22": "2JtBnJdqUch4XA9cTi6H7KZ8otWJPJfC3CqXXjKaVDkkUgcBesRuQrXjzDJCdd6BgFHKNStXEbPrpXqmGNpGUgkS",
  "key23": "65CYqZ7cwJnsARf6MjpwvMpro7XVmryF2z32oHQCpfDS7YoFAmRw5kY7GLCAb9gcsuceYeznvoJvHDz72y4tPvdx",
  "key24": "4ksiAapSmMenuSM9xfSpNvbRqxjkqjCMp6S3tXkmpeEntDmHxyN2nR1eunNC33qnm2ng2qaEDUzjFgccBwnaUQpp",
  "key25": "5rAfsgYQvHy9wj7j5MHdSaKuQU3Fm1QScTJn8ae9zpQxqBcmtusHpcxcnfUrBBTsfLvyqmcg9BRETX3Dv3uSBdsA",
  "key26": "3A13H8Ax5pxnAVUjNVH23QGNHAZmxMqmRouoaoJAPoxqc3BVTRmkVB93NBBeFg1cbzdFiqZ63aHvL9XXm2Ndd2cZ",
  "key27": "34D6BsAG69qBSqtcMSNTZ5s7oQutSLTjDVzZGku3qXFehdVX2p5Su7JLbYfz4QkTHwRGyWRzCKvw4mPyQybcGUQd",
  "key28": "C65E8Y4EL3X1FgkK4pCJfq6VBx85kBsNw9UMb6AQ6VbvB4igbkU2MaymFyC8skKGYepbd4w79xmPsFzVpq3mcaG",
  "key29": "3STTHYvzUMDq3JKuKRbKvJ1pZhtbfhvBDiiVfYY1kgBXQXEvdBEDHfy2Wq6nWtnnX9na4nbStsg2e2rG1ZZrFEPp",
  "key30": "5ADyUm11z4ZaZVLsZtuaA8kRGs7XRoL1u77B2o7UHqv9buUspd9CJJ62wefCYURWgbHQk9PeKDF7SHeStge9WXiE",
  "key31": "5vMAkr9CzRiMGAfh7hxHGrSbcR4GFLaNLt7fAFFsywh7LtoSenUdvbmWpLa3y8q7mmmgNLX9AxJHWm2w639kArx1",
  "key32": "5r425y5SWGJ4Cf8VcNot8NShUZtswKyvVNyAxz1khPRbqMNAHjNKsphffuiLGhVihyw8graj5qsaccC1A3ft8KaS",
  "key33": "2vnYigWsH73W8ftbDcTtjPMccRkDYrMwYasJ5DstmuCttWKR3YDJ4x7LJ5Lgst2wFAZHY1gWC54kSDJeLkvTj4ow",
  "key34": "2TGpVy3fDaknH8eWAzFkRWGRH9jXYSebLYJEAnax1PGXcZ5HZnVXctoP3dXDVHyJRbDo9NqbXywguiQnxzpuf6pv",
  "key35": "M4iRHpMrqA4UpQj13d9v9CYa8aph8nrxRsf8XnZvHdpCa2WnoQKbQVPH37bqWAF3ow3Rtao83KxPvM2ZK7Fer2d",
  "key36": "E6BBiAjiZXGaEWQLUBq483g6nNMtMCMmkQinfXPZ1Z41rdR9475rnN2CvFLjJpsmPkCXrJHUFf9tx6DxaA5oPmh",
  "key37": "eiRwNWTuNKkGXJYSveAxA4g8LAEpruTEFDqFgraq8Mp5UoS2JhUYGsBAyhbKsvJvbCmH275v9vrbbJ5BcBPDSfn",
  "key38": "35pekVszizXo8Rb29mkSL6p49DiXeCMQv2BkgT3JZucs1fC38rZzoi6gfmsqmrK42HfeY6UijHKNp2CCwrQpr24x",
  "key39": "3XxTLA8eaa4YsfiMT7Njm5EW27EATbzkzcAk7DAcPV6AEHEfMo4ndeX3zMG5Mbv36w79ounjseA2b7JFHRy9HLcF",
  "key40": "4y3m5FD4v1ggvrvMDCkXHTz4qSJMkP2tghPpCyJZYd5yxBMq5W78471awZsCnEC6gifPdQ8f5uAFBUqtH75SWynp",
  "key41": "4JbB78jAhjWf6KTsELDheGwxNtVNWC4PYAUsNr3YkCLkrfuJRztzHKNNF9iEcgPFfufKTZkQy9ksC8cfubkBRGkp"
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
