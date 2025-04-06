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
    "258TPWuyf8b4AY2oGG4jgy92yW2qxjy6PESwBwp9pPRYpFFSRSW5QmiC2THzP9U2V5EeGGDzTY6Z653e2UyLiKBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hTVjti1RKSJncMjyLk1ori54WNgwtUDDELq2gMiRwhV2U1ZN1MTaYW6krvCkSYy4daU67a142gH7VznfnjWcKTh",
  "key1": "2BYeiwuVReUx5JwyJKRe5SPPsZMjRG8Q1q57dywVzES9bdqPodRkCWT6dwULbi73KJ7cydrk8pLoX2q1gDhrdgJh",
  "key2": "26feUz5pghcge7xu27pRTzFsXxb8A6zGfvXLvTA7VyhTSBcoF6SwKGFuHXupYuDL6aSNqbfjscey5i4ANtWiymzo",
  "key3": "2o7wvxAVET67KcaY5DoVu6gnNP6r3mQatwQqRA2K7ckMBxWihFp6CHFv48bWy9wZdaUfver7r2goDA1qwbYhrQtd",
  "key4": "3TBTqi78GfFsjf4gDRhqWUYS5e2sL3G8D7G7zZ9M97iAkznjzNwipLq8HqntWDiuCun8aKhpowqDogi3KVr8iJtx",
  "key5": "2s3qHrJCn5iRvQvEjr4Vp7VW5kbmrrprefF2CJcwrq9JhLZ3Mo8Tuc4wcL6jok9StfDULHEmau8iV9i9ASRTWSF2",
  "key6": "4nXfR88acyTyyj464Fd1ToTzPvfDdT53z8MAcvbyxH148cZh5Ku5D26D1XWJxac1bj1HxbyRwDJFT2R5VSxqh8df",
  "key7": "462CG98ynyqGXxfkjLSUiorszaTHbkMtxun67f9po5HvawxpKymgpJHccNwCndjFrYZ8YJRLcE1KabjRkar9kvC9",
  "key8": "5ptxQBSLQijBXxch4WRg5mPaZQqfftbp4iJXsY6YmVhWrFn9KRHtT1M8sWnhvYpCU2KBd1T6Ki2t6YVM3go6V62y",
  "key9": "41NqvmCxyxuHXnNYahicBuhNPBC6YmakPLwEtb8JC42pWqeg355kCdAfjrkuLZWxffd5FMj9Qo1W4gS3VrqDmYi1",
  "key10": "P3zPjgp3KRdnzePJkRPDks5fRv8TazxDnDpHPccQWyCF2sfaM9yGiSg8RVriaJjqQvwLMs91m6BjhEuPA6WeXoQ",
  "key11": "5DPAKaqUCBxjU6LxR3bktYKzZ2pih3pNFzR1SVj1VbbTdbazkQpBWTx3PdEoz2YTBbxSw6urMmBAZd3ZTQqJ7CzW",
  "key12": "57ie1RiVfmyLuo9s3RXNUnVwkCN232scWqXht8ntjBFLzuZQi9yUnnX6ySruUpunAL6JkvzKPHhe64PneD9cM7iZ",
  "key13": "32DhfQgbcqj6aFD6mMX3VjUZA4YKQ2KQ1GUG8dPNi4CTVkCp6eGJs8nKf9493PrcDs9DN26gNC1HjcP6h4oQgeMu",
  "key14": "3guv6aXYrykg6SUHoAxrnmvYRGGqkq2juuCvSsmZJWsSC9Dze92TPw5vqwokMh3J78yDArf9wdTX9bhpvke5Vg8C",
  "key15": "5hhoNiT6Pjep7VF32JhZTPhernzFGT78oiNR6PdzUF9xGkxFs2vHpGqVLYaffHrxY21J1wXPy8ef4RU2WCR4reNH",
  "key16": "49AnSc8f2tBonMNteMAw48rAhwJ83MrceiBBoA6BaifEnDHao4bUqFSfJCr3Xh32DsU2AytymeyRDXE5hmSb7HKH",
  "key17": "WbrTcextWJ79rvtcyax3jEddUWUAbw9e9DKbaRAcdm4g9B3s3yi6ySE8A5r5aSBzY7n75XUesvfzgpH2GHWhU3f",
  "key18": "2ZZXvRHmMxGLZFg1HD2AGsWaQ5h1FYrBWqfBTKU9CL5SF3kdW7smKU1datJeQ8dqzWW1tswEAV83cTrnpM6dCZKT",
  "key19": "3rdW5sRoS6TEZUjfMzyMmHj3z5UVqcqRqKk38s5cdawt4raTPJ9WLUBQe1KbBEkoqtqKn14mBzK1noV3e2F7kxTF",
  "key20": "3WFoMePBNPWcs4euJq4aGk4xBxfj719oMgu1yxwz1WKTsgK7QDYhaqTJRPusBmmozMrhRdxNxTcu3PxXCVP59iqx",
  "key21": "4X9G4wu9ZUGjipw1CqngnX8Nm8xkCMSut5ubqUpKpcCkY3THL6aLeCsc5kXEQRQyiHi5YHTRhSis84BmZS5jmUgd",
  "key22": "5pwX1DesnCoxcWHxwVfSsxZquP7zLcWwisUhmQqoDAd49NBeZgccrrNFTM8PGRwGcTrS4mPsy55j2zWnP56SFeiY",
  "key23": "4EftUY5Gb72iCZtRV38ezguCPi6wt2ArdZfP5ogYmCoucjFtpFuswXrj5TpGokmxqdRxNXkJTWoZPqRJZR8sEUCM",
  "key24": "2T9XZVwjNytg6KzJYAsmRVEutFd6PhESJ5WfNVgqqXc1wf5hJyfRyX3fUXqVXEeG4qZtiiyDJVinQF15f7oewCv",
  "key25": "iomKNcj9Bu5WD3v8fpQiL5iaozoXH9T8Y1RxqCq2yx8dQrHBd6frBvEQb2w5yngRFDfJ8ZU9o48Gxcja9DiJDyv",
  "key26": "22z2QiFzAxmdj3XurXSoE3GDFeC5vnJwAD3C7HRpeBizzpECeXpynkqZNMLco2S2VRHU9NEu2uHt3ZFpnz1xHRNh",
  "key27": "qUcqesFE5cSshS8DVV9xErnpoZfci6Pbf2a7Ex33AWADniUgDCqhuhrDN6kWXiC5NpuojPen4fFrEm8aeShru1t"
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
