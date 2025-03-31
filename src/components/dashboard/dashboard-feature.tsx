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
    "67WveFtuivwcc3TRffgWExwcB6AxtmCpWK8dZpSbvK4LFEThT3FP4EbCX95Pip8xdHnm3fmKhJseeMhmAT4HnPXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRk8kZrEjTboqKQPpCwVaLqHoLGMVAtWoibHF8JTYzZdcvniAV44a15LB1gCDLcy2WNexJuHFJtk81i2hYbnW1z",
  "key1": "3TqbJjhuBPu3uiKEBmcsGnznPMHCuFPpQiv8UfEvhvfr8GLhahY9M9m9q2Jm2DATdAbxQeqATWxBuecHpAzFjjmj",
  "key2": "3ews9UCJhYN41as6Q17Qs55vzTxUUaC37wdCefsuqrkJRUs5RvKgkBp8vFXZcgveFNa5ozGpFoVStJ9vcFGmxvmx",
  "key3": "5p1o5CTTPdosYDFXffxCZbsHdMVTgk4VLj3sBHehGBXDDQo1y9guqFsFCxz2AK7rhLcS7tdiZG5Reh3dxbcNaoxz",
  "key4": "5AwngWNvnPK9n9WeVofh7p3L1GSe6q3MHMBqMe7Y9qiXTvGhwBLPxG1madqLepuxNLzUWwzHnENgwzeiMG2rYRtv",
  "key5": "4wDWJssZ95RbXTK5i4xmXwZzUb3MiQpBoxM7Wf6efbJozfGees9sXQfWcFo1DGcZD2DFqT39mrWkVPFkRhzW15Q7",
  "key6": "2V9cNNMyHNTHaJZSdefk2XG6GdgmoH3913oNwUcsuRcANccfYiqHLFHK7C2RmTkU8LV5D9WE3QxdQx4WdYG2uCGR",
  "key7": "c8yUhYWxsJcLMC3VHAfbKnLhJomW1ZYA36YRoLfnMSRdc5sVGsosc5noST6NPwSkVjadBsRj9Y3pc5Ww8qPLaNQ",
  "key8": "3NXkv7YyYxkXv4D6EhSnEJD6EKozTiW81KvxLqA5bzsRc8Mc8DymhnpX9vxKPQA5SBaKxpH8YDbsaAtLwF3GkCu2",
  "key9": "MPAV5GYA2MoLi2DaNvrjCfaVxcErX1qcuccufqsbuguNJEeh8RKDyqdwNNjwMQ1KvHVs9UWjz2559fze4FWcA6c",
  "key10": "z8rjhB7nwXRXs953Myz1fPgbi6KGHgswnRgXiuMRqrmdMuE1AunhJiTtiGhmKt5XzgeaVbRCRSd4n5gYjS88Pg5",
  "key11": "sYDvpjfBsqnAv3pb9hJyo7iHbmkERvHxDWCNrho6xqZQDjbAXunZEbizsNLYeQhJ7U1t9tyje95B9uZeHXRz77W",
  "key12": "1dT65o1TTe4MwqXFsqLwmDVsWC9YDV1ETS3NbDqe2kFRaivJXuLdU9r577sXscCkGUQZKQ8HPbq73oSkRZDzxrg",
  "key13": "3SgkntGQjUan3A9a4GrCisHLGFF1vPrHjYpMQ7VE7AFiw6j932fRqK5HoFjn8VvQZfNi4Lk7DLQ3QwRtY6v399Km",
  "key14": "PvovQsmBiUKRjPxJ9LwQ9MTnFSJQwgvTF2tfbeYTFGTgfSrGec5N4rKLaYqmYLQVTgWm6VQRuHpRdowSEWahr7g",
  "key15": "3D9ck5z11RmtE49RPitfL4EBGwGgTmg3T2y4idpp3D7cc6yT4LDvR28FQrri37Kx6XAUewj4gPwRVyC3kd344Y45",
  "key16": "2PhJCoiYMg8TymB8NQEXBEvyEchYK6WtLd5TTMbEberrr3zCjmeVmoiL42SXbQwPK1ZHRxisotW1MmybVfoXR7N4",
  "key17": "4n4wbzE4VqFeyuhTaz95uWsok3ZPirZ52ZmMj1tfySPCKrAaHgKn65mMqqcHhjUjNn4EnyGGHXLUbdrgcGRZtvfG",
  "key18": "2h9PKDPo9zfYurEWUGUBCaGPKHX7WeECs1fJtNWfhUbtVNaRtzfGeM5KjndB2YnWdh9rUaMNdJS8zxx2wBtf45eZ",
  "key19": "5737wDtgFSTzNzXYKxiw99rBS58sFg7jRW7FAyTaD6ZBcod8ygCWDbS1vprM7jHpxAiiobNyYFu1STQ2wE7eoqJ9",
  "key20": "4mJvbjrRBjggj3CzExDwXy55CunLPkCjkwGPoAPWXkT3H1wm9iq2Co2dMYXsgKqo5sgQGwwtgQDRRGCPhUJ743qg",
  "key21": "3HprFHBCNMaBR47Bh6AzUxz6RK5FGYbPBNqWSp3MPnUZi2ujb78CAj9BT1NPiXozu1DFcK52PHBHjoy3Tms1JrRY",
  "key22": "57g93cBu9oC2LXfZbzNvYZy4juWpbz61USGeHPhDW8ewJBep2U9ieMQEuCpgTpaNFeVwtqs1FSmBHzmbuw6kRQfF",
  "key23": "4CMKDD8Ewm97Ug8rQvEbchsfnEGmixi9Da53qetk11imGvvHq9yGAdJt5BUTYKCkr2QQ8JZKE1N2ZDJfN4cDigx2",
  "key24": "3CTRw9kBbeQ91LHj9uNscvUrt7fBskj5KaYnRXeDLCJeQb4pjHCpgeorMapPVNeZ2uvZXr9GzGc4sb8YHD9hpUyh",
  "key25": "4v8fd5PXJvMAtmZP5bNhzSM6Yvbzv1moUSDE8mY1mhbTvC3sdBM42UHvr4b7w6BaSSyKddKXQ6RWYcaaeUnKCzNH",
  "key26": "BdEBf3RUesCNc9xsAjS6fqtZWD8zXAJpmB64ZetU2Hdzcofv75tuHQbtBmLttzJYAW5mzF3oMtmeaWSSpMch5Ab",
  "key27": "2K4hbMyi3oaahfcC3gpC8EqGMrxfH33oBsardFZwtccfXVMmndzphUMVpMWir3PbhJB2b1xb2xVRDyMU5zLLSXWZ",
  "key28": "4WZfW2BpyPfPkBsqoBfPFdRgFPt7U13VuDpixRKtELrAYAqSh8CM1d2kERD9H19As3Q7FQntiJFsgeYAeMrB85yT",
  "key29": "o25ohdCDcFjh8kCSzQV1CRApaU4BFVcChoyN2rodaiSfR1qRSnEnrfZY7o4Ua4NVLy9Z1u7F9sPbRbfkoTniGuz"
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
