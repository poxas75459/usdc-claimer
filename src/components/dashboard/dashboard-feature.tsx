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
    "x2FFkjaGjpqb2286MLHP82zo61hYK3dYfwkjiJ11yg9KeonpZpnBqaCZiA7AsiKZ5eX6rzkFZi21yeAVdqjA8oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCZ95Fmiu1un6boHhRegVuziKSn7JeBuWRjf7f2fSJixFij3mkntAUGEzPgbZLx2SC7exf2mPgiv45Zei1D2d3u",
  "key1": "57T5urtzaJWaUPgDfbU86keYEUh7ryzZK4H2BERSdtgGditHWhgmeAjepHT8auCzBFsV1WudruSDDkrNS1i5E8aU",
  "key2": "4YaGbEhmNkAMrnk58TYD7H64VCZWaYUMj2Fg3u94x8p9vFdxbihfHuCnTS2KGYWV1p23F3dePoFfcH3cPWvERUju",
  "key3": "4KRmmaPRFJomwE43uAz4H9kMvPyEfF9Johh5PcfncoSWZCdHmH8uezi89krj14DzCK4o42A8ZVEfrUeAYfSbdydu",
  "key4": "3fCWkNokRRbcvYuwHNXT2vcbktP571Vi1HuyG8x4gkEPzsepmvG9JkH2tgo4ZhVby9PmVDi4WerkQGrERiGayBSY",
  "key5": "5AejwR1UcmnY1PrDpZbK84JPTSTGbFHor1HGWnTxKk2SFq4uRbgKEvBfmb6JF8eJS713MPmrGoAE7AMGV1AzmSej",
  "key6": "4ohKGJ6Lu9BVLeNRLJVJC8b6eqBChn5RRVn44jhuuEdwRfyNDY7rcSXmTCxe9qoxN4APWdPmsqHeBtvRQx42DsXA",
  "key7": "z8yYzTaAZGB6thLkhwsQ2qnE1CESdF8NrM13ppVej7jiRoWfKJYJBEKnJoECJ1DaCN9adWeLfMBUmc1zhBAyq4f",
  "key8": "3TLCifHKJL2e5Bv63UisSs2mKwH4LH4S1a5i1hMjfG5vmubv24qC9gBaLpZfRBpmDaUWiyBP916gFEuTSRj1eMEP",
  "key9": "3dCBKtdgh6eHS2ATSt3ko4FuzQYferb3FKTZtYkvZ2e28XjjegQQomnZntjCUt9N8sR8apQQoQC3nsXpKpWQhY8S",
  "key10": "4MMAr4wmQdn591rXRAXvTzCMVmoPQPtQzob6oaY2VVVt3f9GnaQKVo42BeqEefzD51SvGYz2QPGAoi98rD3ZakeS",
  "key11": "3CrvNkhaTU13rVsti8EGLATzY5WpngKFUZp8q2jh59Uf6We9eKAiuQkJKyFFB5FSahUE5aiNnLZZ5Hk23q5VUsz9",
  "key12": "4qUAHwRTGtt82WM3U5wik8B3wE4vyfYoJN3mWDKWmjHdfUFY71rLJnCDPgZPvTZdyQnnSUj43zy1TMWQmCC1AiFM",
  "key13": "4NbyU1ZrbxFpZYeN3K4mHqUcrJhFBwWGFvkSBMS5x7qCZ66674hBaRKXj8nk1CNpzxVfVJf9wD3KSHi8jX3guYz9",
  "key14": "2JYMDF5hR3gYbzE7bb1TuruYWsCWj8LNf2T3fzU1TAq28q3yQV5Lw9dJPRg9xGmreotvMkkdCXjoMsuNiJrmE9Nt",
  "key15": "4L1i4PZwiCUzvUYT4RZ2LuLTPFmySunk7m61vBB6NydpMrRkFS4KNjR7935fDkJjYrWJCoxhj8J841qCqcvdkPd4",
  "key16": "46BmDaT9no8bxsesYXwjGw82Yphcux1TVqh9zzBWNV4kjyZ13JNvJxXM6ZK21R8RPG3UZdZVpzfZuxRpZbChDdLo",
  "key17": "26QMs3VbnkNg9jK76PtuQconW6sGmUkxav6YgbMEWf3usnjzHQUMLDPZQoMsxXfm6PDWqaVyLZ1inG47CdZjAXmY",
  "key18": "4gJs68DyET3XzMdsbd9xXS8JjseWFQhfepxkizdHboHvph3S9UiAW4EAof6cKqxoPnnUPymNhigopV3JR2Ja2rZf",
  "key19": "3iPA9XidkbmNajKYKk7aPB6FV5gmGtZAwFxwet8GuAWFdgWKJtrdLHc5rAUZk5qe18kE9uNzusgvBLTAdRmETXZp",
  "key20": "NnTosVrhUVBpifxtpRGf57A8scxHziAEVkV1h4F2eaMguh66shT6wMxBh9iRFUA8DY1tmB4sHja3ADK4NAHNzCd",
  "key21": "52YoBu79ESoDawpWPJcW3sGu5WSiTDtedHY1PH8hr4XKyYdHMPG6EUz99ZyvvfbpBR1qEEWGqXihQugRa2x9T9xb",
  "key22": "5xPugpMJXZUPYwEJsrE6TyMiy9or4CU5anas9VmxuhkTxF9SZ2SB3NJDpdp2bgNw8YSy7uyXfDLkSqu9tuuS8WPM",
  "key23": "hgZvAYMaQnF29PMMT3xHnG7KwB8xar3CretrnmdpZRpJCobWYenevtf2EGeba5iPaSduRD7g7LHv8i9gDzTnHQE",
  "key24": "2pnqg3yCxfKunDdjk9d8RQt4iouMvaqPjr8cNjBDUyxqq8abCJDbqMCCuUfsb8bZXwaLNQSu5VqhfqLRPP347B3",
  "key25": "KwjBPU8DYWmvERtgmVw7QAVFCcnMNy6TSRS11pzzM6JWWGB71CJMVKqh1a4ZC1v3M6WEjxwsizuGaiYkgRSkgAh",
  "key26": "4XeG7cp3sE8NMrNZwgPHs884qR8x9cQ2cMwGoc59iMvpAwLyffKZH91mvm8C4S2sDRM1aRJPLuPUKJaAqEqPTaBv",
  "key27": "4aLhjGTg3q7W5T8JSQEfrkNcUD58KHozyGz34nr8qDw76NkS6PdAA94Wg4emwXf9MxTv6C1fuUda4cQbQb7Gry7H",
  "key28": "5HC2FY44BVT3qDjgckwRg9JM2ayUDVx87XdB3atW7YZif4a8Q9aXcCmBCyLExchBjVjryNfYjgPycYSP4TwrvvRZ",
  "key29": "5E6SfNM35cjqox9xtHq4BJRzdM42C4RCbVyKd4jsR88Wjz64zfXNw3jxfkF5HD7nwC54y3pHkQ9hGQwDtRZnzesP",
  "key30": "5qpczxFPNuDsUpFZVqD4fNN5cd4H6VEnZCKyCCuC4wrW3ZxKeHhEvJAhTPhDhgVzXfSVNJDavWshZq79reN1Fzb",
  "key31": "rSV1rkELgStJPo19gQeJKZCLHx7ZmxrncwDFWjzwPzDuPJhxUC3TJ5MkJ18wWMsky2x6HF5WZ18Lidmqt2pSuEy",
  "key32": "3cfPuKhaLLo1hHCWLkWNZku43WimnD28JG29tCQd2XmnBM1cCNiRay6dw47xBTBgKTJ8ekia8nUQEppRJdvWq8Lg",
  "key33": "31NtYMoVR9haLdXrcNyB58pJgwDTE82zhUisFfqy6AuuBtL73YQPamYg6F1XSfksCpytQC9KtFQagNFv7GXk53W6",
  "key34": "5E72Z2TZc64ytUkxDcZULugXcSENfhUPbTgqqiobAiD312Wp7gwVFoGHSq2JvHNGXhZSZ738366XCfKqCGHLBxTS",
  "key35": "3NKuPLesNc1Um8SWbS1FdC7f9LC9c8eCBT1aNPiWeC36jZ3qQitCcjx917rCj84KBiyg1Neoibyyp6UkgfSHjXLz",
  "key36": "SYnJtdBLk4spGeKRobCQxJUB4e2kJad8FYw6thqmRNei1zX7BWGCpTrdhBM4xPSkbiUhMJ4c4iXxoWNsMfXXaa2",
  "key37": "46kX1U3MKSFjcukAeQ6JZgCDAKy4MjXchebH7fXgi72ZSgXwX1Qo9zHJ8Srwqc7R2hx1qviPRRTX3K17RiiF9mji",
  "key38": "5AicbUYCx99wBUXDcNX4mXBMNCsPYvSahbwgJ1Qp2b2riVot3hWCZa2SDoSM8YB8WGDfZgUyjiSPpYii45kU6nf5",
  "key39": "3ZsLw4t8MPBu29suw3v7AKnvMQtjgzbmie1Nr1e5VreNEVdbyTmLZBe9SwnGPPWQDsJ9gaHvBxTpxkERs1dS5iUy",
  "key40": "2snbYjMAuvXNygTdm2PjWK4YYFGQeuuFPuq9UQKiH6AgTvdQ9Cyzv9eatSD11AR84JPKw8K4sRVx1UZtaufTR7KB",
  "key41": "61nwCf6Zie1Jd6aUeehNECr9maYXGNMNdcLDi9acyxFed9yxjomppMpKWP4QmF1BY9wLT4jMAMj5mDA48p7Tuaa8",
  "key42": "2uH9diRaxcXRJsPXomhbunAcbCwyy52fXKVZYz2gveSUMpqYCSLCySAdSVh1fAiWQwjrigfDQMQrHR9m4MYH3GB",
  "key43": "2M1yEoVp7tN4QitzKfgYwRKHSL37abv5zJ8oJwkJrvBXLHqDBW41vTu7BReLuFUcNBDsRBjtiz3RzwjEycPL7fRS",
  "key44": "2fFDtH3gv5nTeqo5s93A9pwYPYkYeYjLiQC8sR2wupAVxmnBcTV4Ms7FsfvTMvMJj41huCy8a9Rfv1maDEhj66yV",
  "key45": "2C34G351C8aMMciJofvXUTvGhu8tmxG88APwJDAntLvTabMpQcWV6qtz7QNH5y7QbW5sCwpCRDN7Waev5CPTKepS",
  "key46": "we6bsCKgeoCBJiCKMDqNPaWijx7d8oe9YwWQHcuyGfFP4C8JJty2mGoBtN5HVWkwQUYUNH15gbxYUKyAdZ5ndMX",
  "key47": "3pvmaMWnDQyQJ3mM78mQWoiDaFwiaTcQF3BExMuJwMdKz9KUSRzSKRh8ctQSQneGkc66Pq6HoWWhXZwxUGanLfcp",
  "key48": "62YzzeE2FC37hBdZBPgQf8inP6qfTDP5E2PRBBDJkLRzBiemrEyhYDrxYy7JogjDyCTAY1hz9i7U6bhikk6U45AZ"
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
