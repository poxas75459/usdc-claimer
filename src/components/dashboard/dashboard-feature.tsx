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
    "rZCgdsSSHcqRpmeJLgnkJEUDvFpfACgZqnXS8RvEGFYZS5pawZPZ4weh5sV3qhzPbf5d3bSwcnjFpPV21c66pp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKvLFkF4RJAqnf2mxpEtm6NiNAJS43YpDam9XQDE1eEnZvsG41wWGFvYZUKEsckCRRxVX7g96uSQhPLxLQv4fGQ",
  "key1": "4NrzsieFukphNtR3BNj9RFajN6qFwVtczsEEkWxWQB5CFHwWPBCFzDXQPcSZ1xPAXjYYh8f7x67oDNXLksCPXAZH",
  "key2": "5fkkPN6nVCe1vHnCiJXb9uyzrSJWpBybFaEzR8TzLQ8gwi2kVoF1Lvfi9FUNsPH2wNRYyESotWmVk5XfPyFcQAQg",
  "key3": "3ca7HqPuYT9Mr2StKjqimLerFKQJX4bWdb6EChFDWbF6gB242iRThH3o8Wb6jEwGufscU5qyGkXahfARjK7QQbgx",
  "key4": "oVLoej3zQyZMBVZ8Me9tCqDHtsrB5XR3MUYFqr5BZKBvmGDs7mcvMHDZpWVT1xumQAf6JRGj2HqcyZuNJCJKyne",
  "key5": "3zrr3FmP4x5Z16UdQFad5b9tBtWgUeCyo6Z4nvU5aBCXec1Kj5M5vv8ftskyCeux8sjRaz9bppLG71eNowQHA8gn",
  "key6": "AjaY5y6xcHaA3xxrqbjPd2vQbn2iThRfZWfZTEceWbdSV2hpc7ifHV7yWCxuzvxtP5JcMDyun4Jii13fKJYGRRj",
  "key7": "CoDiktj55DzLW4CNnt1uzPtxV13gBGQjXyxT3c7GqsUgev4C66jmw6GU5xNkmuPwtu6VzJwtjT8DCenMagaYKQ2",
  "key8": "6UyeYRdjUi5EwdRoqF7DViJaDSvLWWbB4Vux1Cu794zcb4ZZqpz69tEkyihSXtiBvHZxPVoK5H8SgNeya69bXQL",
  "key9": "38PFcVBze6iyg2p5JghUnNsFYr63LXjBME4f4YpbbWKbzz2awcwtYX9zqrKK5cHRwY1AGYbSVuSXjroPTZEJFrSZ",
  "key10": "4J6FP58AxS84J7cw7R4t9oLqvbDP39sC3KCQ1cAtrMukdhGG278k9EtvU7QMXxemxTZfxdH3bEqmD2v8FzLpEjJU",
  "key11": "5PT6Vckj9WBdwWNzPe3m13F4LmZquHrRbhCvqP2Z5TVeQ4ehmA5wu6WAhHohAayxvHtLv4wGgvKrEV4gSLXY6vWR",
  "key12": "1298aoiSYQqn1sosA2BxqJiKp2q5HzQ165hxpWkKBHhsg3J1jS8y3AXCgD6TndfK7eLdJkFxLgiiU4LmBBhuhXJ3",
  "key13": "4Mbj8wJY15gXvtreYQHnfMCHPtN73Cy36NYDQdrJDADm3SDSVqvzSUGkZpXWUUpZ2sRYVwWupN2ZsbkLufwxGR2M",
  "key14": "2k8xptCffusWMBYrPDGM1MdqYTjxFft68UoaHLfbwWf9R5XUQDrGmuQxC9mzRHc1xYprPvoFyy2KNNmWcGuMmCSR",
  "key15": "3DGCmPLbVwxVJtYWr4fAQUKdPZerfKHXZ5tTGEGGn6R1twm27Uj6jFZXvATuKs3k7C9AZ6U1PhU8GHBNoUFhMxRb",
  "key16": "3scAzWfG8PgBSw37y1QSW3ceK3Hcfc8ExKVZDeS7yt6iZtLyGncNR2H8PYGvNEN6MZgRrWPNL11etnDbV7xotHP",
  "key17": "JdSnWLfz9mRdTi7MvB4dYft9ScgyW4tkrbfQp3YgckhVtEq6BdWwzuX5iCtysiEsdjyXyPr8SxWETZqLAmN31kQ",
  "key18": "21XuaDwLeBW5N69SGimMfhpoPaSCgomFW1hhyBsYx6fx5J8jimcyxLGKkTjg8h4C85Z12QGfeUS5iufkToKXJA9K",
  "key19": "3qcqSfVtySXqfpus3QAedLc1ZAoiw7CPVKqQvGPefSpmVFjF2Xr9adiyX4aGpMoTR8QrJgFnXJoWB54jV6zd5SMA",
  "key20": "GydRiHYWJN3jFw56xiyt7YkeTbza7KPzAspNVA1sv66h14kVGYfg8ZsdnWdQ5KwSCCG4Rna1VUW68ZL7zSoTZby",
  "key21": "4yEatM6RxK5ULq2PwPorQgtX7bndsw9g1SdxhohZLsBAojCngGRvpsMSGeGC1vTifXFY2qWMeEn7EpZxj7BikJgh",
  "key22": "4gMM2Swc6Ldb8tYp49ZoBDaW7ueQuZxTETPrh3VpoxEa2uN3fs4jzSxPXg8NP1Lztm9wHfPM3RXAuD3rSLfJLRPw",
  "key23": "5fAMJcrajpibWV4ban4wEMpdvwBPp84QoCoqNnekuLVYxNYMmc6G3HxGzMbK4eevtGTvtt613m7k91grfuU4DnWS",
  "key24": "2LD2PhA979HJG428dxZfE5QgCr2DJvCEfkGgk43q7CfNV3d3dqjmMoA7pWBY5FWsTRCFfPbFxRavmgP8kqnbXbXk",
  "key25": "5AiJKe6pTtQzuPHpp21gwwSTnYSKf5ghfDteypUPSGQpiGxPx9a2J8iynWUTJVMaKMKn9ajDzDDcx9ehosRgTgcM",
  "key26": "3kr6Msy1aFvhr5a4wFnJMM32Fg1HM6QGssP9MPL43daVTtupBz6EkV4HZXhJQDCmvbkq8yTtBo36PCSBaBB1XjYB",
  "key27": "5VgiiT98wfQ4hbkvX2SRU9n4BrXua21nYjxdhkmhqYeEbPo5AvFBGPdvvJrwW9GaoAjunrspHnivyUVFszzS46Z3",
  "key28": "mXDbK1V2zQUxCX9mctbDE7QNaFBpRCWo2YCJS9Q1J4GUjGdW1GTkcHVfd58Q9jMynQ9aa6JTHegiX9g1pAN19yb",
  "key29": "54QcVfMnNEV1Du5jMxsbEi5e9Rczq328uYxqukHcPoi8Y5Cd3EitiP8zHVXgiJDX9ryzvZJEkMaE1yxcxhYbiMq5",
  "key30": "5oZhBxx88y6jF3F2EJd6irPqDqZhD52yq2wCU5C1Sv6ePELLa7iTpuphs2Gattf7kPUTsNfzygVu5NKHoDEgxmyy",
  "key31": "3o8oNoJCwyjoFVRtreCNHCDcutzcUyDcDh67tSWnSBWkrihRFRBgxe2oZQmt3PPPxgyoFKAxA9NFRAqixaY5dYsj",
  "key32": "2kUbRZbXZ3S1kYPN6cTpedxk4gE6vkLhn7GrAEhj97fbDWW3JVonzQFRNBSB9PYdSirJcqdA1fDwYnGr45woFFn7",
  "key33": "4SutdKQDNZ6Wi2eWTGiCN2FmNeCL6grhfYXrcKmiNuCS9stE8cXumaqxZCK3NSRGCX4shwnNjLSvixqb4ai2gEyk"
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
