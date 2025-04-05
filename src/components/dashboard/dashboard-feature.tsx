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
    "4DxHLgx8kXh59kJQEqn6EbTxkr7FMr9PzThHWWypfkFEvs77zVxvr5D5PRHYNurTeZQfzMXa9kK4Ld1cbh1UbniG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSdwsbmjxainKJYX6M1gRKRzzRHg2QmVTFTiHt4GAnSyTah1dM7mRfZxUCc2rurYzxtihx9etTJKo8FqbudTHrU",
  "key1": "po1oHMFtRtSUGaZuFCc8ZM65GyihRuYh7KFef1rsrLiENNR5TYsgKJ5R2HL3A9wzBy9gjG3CWRopHPbwkJDbdKd",
  "key2": "4LYUZffb2QVBELX99AAShtAntAg4DxD8SqHRQFqMoDePjYCHgCdAAp7AVd4tjuvieQ3Uweo1wj1AjuHAfg5kRThB",
  "key3": "2Sx9R74c9ZN85qdYC9AmeTd22UMMguEUVNexyMxVDa32FaYvUGCnyZyeoPxv7QYNdCzzgWypPGHUZDjY42iyE7XC",
  "key4": "7j8K3bzoZB6XiEwa8GqkT5K6mXNDrqrKrpdJmffidZWNjcafqnQ1JA7GX8cEPHR2ZjWU5pXhGZY4r8mjPrbuAS8",
  "key5": "4NKHFjbPZg75qNdhoQpJURhrQwBeS3LzdsUQwq4awoGb41eaZsDYw7wZz22aQUY5YUK8hDPTai1it2eTHKipxUND",
  "key6": "4TbkAg6BwwF5D4wqiiaNKBvJKCnBMG5VacCAbPiNKQNJHVzrjzabBfkzxS7SnC9PPHteb1gmHaupwUpC5HHm7Mqr",
  "key7": "5pM1ncEtP4FAdNUxjLKiCnccAVcq4SSJXS5zEEmLcronGTguRjxsqQMJWFhVjSkptNira2vMu6PXRhFgGTYrk5rC",
  "key8": "2k1DZuVpQnKi7CXHZjpKCzwyUBJksYKLtzy5JUQgt89DwFV6B3VoUhd5a1xNT1TP8cqv6yoPXkZBfEvWpUtWjH7g",
  "key9": "5jMfTwqGPJPcKDMzfxUXfgw1dxvQ3WhgPhUfJrfoeS9NNTtwGYVjC5fcGGiG8pt4Lygvpz7HjhTCitSryvSYgcwh",
  "key10": "5jqu7y13n5XY2DGffLbnCsZwTPbnxTMpB4ppG14YNkRriiP6HQYTKLEsfPA6Xoap3zVa4jphmPWvPZMNQSG7Gx3U",
  "key11": "5g33FfCxuPrWFZGq9HHyrgisWR24wtUVFUk9cWjj3jaF4wL5sKjShpN34KPm8kKgJzDxDqgHYL1Ug8hp2eJxGsM5",
  "key12": "3vninvYchXMUNvi8D2nSt7Y4y3xaZccDE7HQioQbLA9khDwLDtZ82JeozmwTbQmFBnR2B3apUAgYpcur1ArVEBHB",
  "key13": "65UQw9pznxc94mK2vYaTiD74mse253u1qc8ckfrjiTPMJJahA7NQomJCnDZbHLLJYrGPkgqvuhRALGNZZJHSrV1e",
  "key14": "5AfCdqdrkGW1GNX3q8AG2NaaWXHvUzAaEXsxiYkWDHqEkn5spzQJvzKrHKpq3gPH9j9Uj6rc4esFBdvVKo5g2WWn",
  "key15": "3H3BqBZdew1Ssc9KaGKK3uEp2gNCcS5NgxpZwyHdFQZDqiveM6iypJ6AuKmHdHtFq18LV3s7gXGu1gWAnbM33AxZ",
  "key16": "251GJHcoavMacwutKz5pNdy6u8x31NBkaxxhoSJKTZ9tFakGMYWj2xPVZg9BzJ3mzUKtBoJ7fbbmRK2Ms4NmPXkR",
  "key17": "4gyePjjUSLEx6EEfMAsSgUxGBxcGidZfxgtew4i3KZ81xLeTLstyrunevLuEGuYTJXLbb9gHXwiWD7iJhjJWHdPd",
  "key18": "3KLAgS2heejB84rBrXaDzzFy6okX7VWZYYSwtbr4bhQ2fdHM4GFeYkmoJoGkfHmLyYe2Zgt4ZmpVgiMQfySEuzuN",
  "key19": "41WHoxe4Nbeth4TVBhc4iZNiHEP8pcVz8Dw4a55hUb12fnQAKsowwsjatvMFCvPJHCYX1A1Qf37HmjyZqDXKrFuw",
  "key20": "2v7MdyXVVJmSYNRjbLi9AB6F9BBXnbz75y8vXXuZoW1Uq5dmtwdcnCQ4xKAKzAN8pF5JDaVPijUaWBoVGHN5WUMd",
  "key21": "5kg3C9KALkVPTJkYPscmk5CNUo6LvGPX48chAudBfdsQLidNJQ3Ro1T9vnUcgh93dGC6PDdpdaoDUFf9rGyNBtEZ",
  "key22": "3Z4XdKa6CaqDqtx1L64vZBkGuVbbatCC68Cjo7v8gLag8GRDEGmpzJjbaVjinUmvWj4fjxT4wVNSmuhcHr2EeRvX",
  "key23": "2TRf7S3kgRc4c5xxqMMgiWidDbtBqxK5P1HUizuKWvtkkeegTo7Ppbcrxo82U5MrfMP328eaZj1tRckR1tKE684z",
  "key24": "5yehynzVinb9HKHLkkgpnXH4tEN2do2qUJkccc2AraMMZzAPYKH2tHdoqDkuKyyKQiGXCfoqER1x7fZF4LBcZVnE",
  "key25": "2YvvznJLQAcHepdP2aaWurM8nAgDYYkUMDevsbL473mYuc73MQWAo9BJxA1zbz6ZTgfidcdhK1SA27ZK71Cf3bYr",
  "key26": "29uwyPFqVwZhLrnyPS5jf2q2xsCNThz3j27uSmpEWLLswAQSnyCc7BA8s35G4cCxR66Je6CN1c4otU7wpam38ECp",
  "key27": "G1XfpQ7KsyVA6WYWSp6LogwmxuRzCqDGwZxMjvRkvP31NYPapAuUdm7ywodTFKXzaPSkTh7u6cPgrLiPriAbuoc",
  "key28": "4WQfVnhEBVT93bRrhq3Fpvvr915QVDLMJ9TJjpdRKqEmbCNhAxiAzGufdbZ6tQ3qepqhbupiz6VEZuT58tAVTJpK",
  "key29": "M7LHYPueHPPurmxAPos3nNx63SDQxmKFiZ4sGqXztqwKXZ71ziLVDK8A9w4c4vH9sDvFSLf9Po7cy21U1Zb3AXp",
  "key30": "5TQXZcyAnDb2BAMfAQBFSYGTCGu6aFVySo2n7wRacUBQzwp187vvnzmZXZqSpg955muU8AcbSuF9P17ZqXNZ7HhB",
  "key31": "4LSqgmfQ1kkPmAC8TRi9gDcrBNtapRRqMGPHEAUoAPDRgjWfEj23yNqwh8rfVSDRNciS3KxwPuCv8YATqVMFsEG5",
  "key32": "65iaWjsLpHE96dnrj18cXq2b4nXr3AdKwejdXrcdPZxzw2xopYZYNYqzBrNMx3R6DRPGEbzjedBbBZy3985go3ev",
  "key33": "4Nje6s2kAqDDmmZW37qywBUUKK7jhiXNoDG955imyqYL5utNgrLuApzrzUofysA4TzGjPYpNwDSZezXec9JYp9oC",
  "key34": "3DBL9ZiBfZwTZd7YyT9wwoVoB4xVvzCRYMPwk3PFrbVuNHQcqJbYvffH7TdaBjW2H7VmBzXMT2dFqXeVCYWTZDWE",
  "key35": "2Z44XuuaLsc5yWsKBfqK9HwA41kWgWKqMEqgFYJjkKijXd6myomFNnqzYKLhGYMvDBT5BRe2S5C7jn4aNowxQmXB",
  "key36": "5k9kjPpRtKkcZcWmBDkdfmooR8TXPSRPSNRfUT2qXfDfM2CHyasUSMc68MyoJtb9ASyDEsWMkbWfRHmaP4PaaaBY",
  "key37": "5Vo6BoUiFmsjFWypuPFogMgMi7TJZsk12fzZgSeZSf4FTYdvcwaFUrbBqzgXLcMiXkxcvMizrVcWt3xfi9TzwJpG",
  "key38": "2zxmp2pDnYvTkiv5cnz6j1PKitCvEs3LNzuHq2jiawJguY3CCFv3rWi2Wk8EtjGmUwMH8b3oi3ctNfhzn5yyjwEa",
  "key39": "2mzF95nmuoESt52kaXAWn5SgGdd4LjBiTMWx2yJKQb8QaADmKR43H423G7yQU5ANJbDQYD5SvV79w4LYVEuuB4Jo",
  "key40": "4V5vbiTYy9yeaMcWnaxBV82oQKcdkswwULMXowes1orUodTKppbiHQj3xm3jMBsueWz4UN9tT2boT9Puz8BYPK6b",
  "key41": "4LqSij2Wxuuhk9xHd166GaC1nE84xp1bfHHYNgyqz7VokphoCr2EJQDg1ozT6jkJYLsHHLiZxkTzKNAwSqzvsCHe",
  "key42": "2kYyeY6jJadhJSy7g4fyrweRTEE1HQgsHcezfgayskzMGn64u3BjxHwukJsHj5KhjHWwEDL9KYZLmKdp1VR17XW2",
  "key43": "A1JWDTyMbN4CopAVKk8opYw3tz6UpTuuxQarSkx3pXCZvNxY1ERX6Q68jrMvQroaSBMKvRCkDevVRr2YtKW8xm2",
  "key44": "5HyJsr7BtJuC2AmiEMiw726kAi7p8ynGrQyvU6LREBkZzEv7wWACMkJcwdTuU9guyWurT39m5ECxpKHYGQ2mYP4C",
  "key45": "23tFyN39ZpHFR898gYK5jX4CFBSrGd8VJfVVtnvWp3DthrRxid8GESofzYhdWiFJwum9J6RBRKdsUjm1kRhwWRq2",
  "key46": "4ADCVwp2Q8cyzs7RewQBtBFf5nYqY98ppX4MSPJuULx2zQmZGFRQVscRJsYVDG7VaGLigRWXwQkTYyLadtmLrCym"
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
