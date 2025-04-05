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
    "3zErCLuREGVRuDfmWjoDbvP56zPNWDERPk39A3ugiaLMh7JsMm4oDP8qKHZbz8CLeTJUMdoVukB7JA7j6gx1uwbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeQN6iYeS5VZ8YGZvaTnQrWnJrV1yCznxGjcoidgbxve57Wnk8YX5eravfa4UygAJPwoESAcu32xi6m66GjSHkJ",
  "key1": "4udYHGgPrxmBsMQ191xWfevAyGBNZBzeHd2tyF72xVVTf1ojNPfka4M4wnr8MBS6sUsKuYhD6hr7Y61eidM4RBdE",
  "key2": "5w3oT8e2xzD9eZqTxJYsS13yqjHwd9fdeUoK7rKhpxvuk3nj2bspviwKSYGqSbMTz4e3kXyxaCawJjkuFVvCqVUD",
  "key3": "22wXFT9zqFAL6pCnwgtFiVgPrUhkKQAeYj3wxg8RfGL8cHCPw4GkXPfRuv96ACiGaj98MPST49D9bjGyFG1p8WsH",
  "key4": "2PUZpZDCcEhLDYLn6Py3GNDrPRxCJGGj3EgAiGwC4z5eLCzmsFVwK3k7WrXW3xPttVe7gpMXbRZw5WdhLnGwfvhK",
  "key5": "5Q2JyUrYCDoyqGMpKbzHkxctm46qxYDmPGcU79HSYVtS2twjR1RjKA5kptTCtzn2CfwDiZ8DoVR2o8JsiewmgNL6",
  "key6": "5D81419JRdUEFZQZr15MziXWVeuoixUE9FTD3vE469DCkVQ3JUnauNSt9nCDJ9JnBYSm1YkR1cKUzzwr9PCLkAmF",
  "key7": "37ootKV9weMUznoVVLHG22jBNLywddGnycCqeZif8cM3h2L5C82EodFg5B4TfBbgz885vY1DgFyp4BYu7RZEU7Rm",
  "key8": "w3SjwgLoXtBp6X62E9nxPr5caCDtX7yS779GRkUPcwVPhBt3B9RZ87fgXPMcoXnr3N8kfBsddpshdMwFwvogrta",
  "key9": "YqMZd5BQEx5KZ3jTK4Kfg6PEM76xh6E8x23LX7DErM6J3yj35GsCMCSE23yPXupkiwKTsH8kRsAWdWxw7gukNpe",
  "key10": "3Pt6rb56hcyt1hMQZRd1tG1zRYoVXPbpPQLUXt3cwQfuNM6TRsAyMKhz7foajpe4cGVBUWkzsjSiaPTR1BeFCd5",
  "key11": "5KD3Qf83oQJmPD7UuQsf4W6Y5BLatNku72cnuQ9cL6467bX1sBdhxcP9tCL5PAdZ5V78SbhPH1C8mXxjwpTGStPp",
  "key12": "JeiFNA92Wau8cvXxaJzzNsdBW76aMKu56g3TQ35axAbq1nqKMo3MSzk2P1rXkTZBTaYbBGmx4ek4b9UYoh7XzZR",
  "key13": "5ep6rd4aRsvqLMoqoiVsUq9gmFDmad2wTivcHaHmNsWcpFiGx7MHaqKj5BVdQWArHKH7JFLJHCAdcWMDmjhQeEUS",
  "key14": "2vR4pbazJ5csgu5Sdy6BuTd7sF214AjyHBS5oMUQeAk39PBroDXzpWy5huuyTc8RrkKznfGkhaSHqeQZxvY4guUT",
  "key15": "5JjeeCskHsuGdmPpp23RdcHhir6j1zKPnXosdP5wSvLkfYuCq1v7mdES5ZhAr28ush2BgS2aNxPgtGiTPW854Et7",
  "key16": "2VoHAw4T1d685iqBU4hb4m2mwQMTSJjtpRocR3GVMM84QJcMGe19aWrVB3hEquEQv45rPiB8uEbj9dxGAsh3GfRb",
  "key17": "musYU9gYtRGwfniPU6xdiE5R8Hjr8TSfNJxA8vAv68kVhWJuuhDjN1hZoj7QgKZ3eaj1zdukLi2DDsvp9nwqYfJ",
  "key18": "NAT883ZveaZYLGBc3TDsg1rqGAkoVM5aUR8TPCAQLE1CFkER1qr8jXzkeSEo1qqnAhNVALkUtrCT2aYMijywvKF",
  "key19": "4jVpxKGty96Zg7FkBc3PnJBan4UX2ZkGfqT1WhEfxsmVGb52zJ4DUD2Dao4E3p8CM2PY8XLjCEB2gkFv6inPNJY1",
  "key20": "5VEdPpDrHEFDqpg6vRpxi5HRKLBeFkRpuqWtzLpb3vxzo14wgJT2NEiBo28tqac6yo7WPconSx5FPg6QYKENJASx",
  "key21": "4uaQz88VFNKuYEf5BkM9LScHWADASG7deETsNtdspytSbB7pV5mx762TAEG9b5gpn51zw2PhxCTeEBUcf7cX5Huq",
  "key22": "4nQpwvzUEaFstXLUnmo8iQhkUP1BG4vrRayVfofhWbC5pzEdjJMh8nsKo5DA6GVg7EehrCFtdiN589uAr98bCo2U",
  "key23": "55CduYVXkeJ6GXsRsEzdhj1K2R1ZY9J2SPAA1niiCcSLAgsRYEbxt7qmVKqEwn9TSaSbATzJZR6ohXyFrTTPfzf9",
  "key24": "4G9V4ngucj7vWJNAiwYcgzJjdSf52Cv1ZFTUBGY688mxX1AA13qNBAj9ydKsNhufe5DmxxHozNZtrEFwpEEa8kXX",
  "key25": "3Z6mWC4JcAUgMQrzZQjJcQDmUuQ1343gHqAFj3kqjcK6vJiXGLdAHhwDUX7NAr4KAW5hnwFuWsW1oapTjmMGcYWS"
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
