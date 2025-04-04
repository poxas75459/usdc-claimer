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
    "3pA4aR96M7rpTdXLjp8BbLEgQdQT7AixiCLAq3rESAa3U5JK3YtPaP8uHrp4TbGfyoFXHEJaETBCKZfyYKJpcaev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZbiaxTwvhrQAqUbzeqrmxPr1ehzKR69eYTkHa9ScRGmatwmLvpbkimhxyPJCYTq8VJRA533dfSyXuHaJLfpEHk",
  "key1": "55yV1ZjESwJn9JKFacXCQUFKBKs2siuCTbTZzXJu91pVqj2iNf1xuYxryFH7jerSc7PXBeCPbyttm4UAV7zLs5Jb",
  "key2": "3enehf1dguWN4PGCKUELJJ1fpa4ZiWsJt1W5NJU7njJGRSkJ58ufo7xjW8eRnL5Pnt6FWNep6o9stoYWNU8xYC8m",
  "key3": "4ZrNfzEruAd6N5FVnU4K7d88EFwaUpHgNeedeU4xRWJDNRfkBjmyor76C3feoaHnhKVQqwdWn2gVJXBqc11ZxZoP",
  "key4": "4H2oQz5uPqEwXJUorQASCtFjjdjxcUupXR2z4xNZrA3wewNixGze4pfUgz2cqLDduFeLdXfddZNHXv8zB6sC4N8D",
  "key5": "5Ke4rvP47TUxX7cFsdkFYHu32oK9J8fLTyiNEkibugP3xayQFnE8Vq1pB3ugUCcb6iPFtkN1pbXH1QhYR1NeqRTK",
  "key6": "5eNDSUqwGmeAxMjjKoBFk1CY31GFz4EE6D1YneyY5gzZXBauwFURkSZVxwPSxmxvxU7PsTMrzY5EKZawBNMw92tJ",
  "key7": "5WUuW5RL3fbMKie6pfkPBYJrNCoVojCEExRCGSqg57VAHimqKUDyYEjz3TwjkBmfqP8LkMcB169hpxPftr32XDDp",
  "key8": "62Qho99x3oF91HDL599FfXwZdfpysYFjjUor2gh83YYqrxaACfFg5WkYZiGk3xwvfpKYWAKsvHZWYkrERzq5fkKs",
  "key9": "5yGUKXMy1o6WfKVEpyK3cRpkaEpCUVRvCAUnrkodRuwW53o4GUPDC5mqBYZ8Frs56JYnKFygEAxPPB8oW3oJ9S2w",
  "key10": "4EEEscgMYxR7ptbdi7JVER229uFRyD2rVZrCwEtzuf1nhWoQRQ6WV9QEGzBbsMxeQicLWthUhiQJdLvttrAahNsW",
  "key11": "XcpENrzEqVeT96m7NKbnce1RsUkDaL3fMFGBEzR6tWUwBxVEfYKfPfXKtSNeTdpnYLApqraajhC99MtbB1BTNAe",
  "key12": "5GNDrVQnsMBrBfo7ra5bKxzb8amLQST2ahtNftpbK2migd1pCFrfBKTf4x7rsoSqNtGUscHy3tPbYhrvKWkzzKrN",
  "key13": "31KwmyENZPcQQkuaWJx3QgGtN3KXfvT8k8g8M4thv5H4KZrb3higGDxAgvHQTPAZMikKjeJm49jxomS4sdQMRzpB",
  "key14": "3DKyKrAkRdqFzHaWNTDqezg13Hub4w6vQbcDPYP81iRHPDNGJZ5HvbVmChoyrmZeVg1hDzd4JfmxX937eXhtScZh",
  "key15": "3YiYJFaR8phDDZECKXP4wgDNB74kwQUkCyirfAD3SnYSP2bfLM1SWd2MeeX9g4txzYpCXP44WD2dpZdZJVNxTKf7",
  "key16": "3B9CcLHhQAMQMXrF9Mz5PLFeAU5NAu2rL8g24mMWCJEv56Lr5tnvb6RN4HUewH3nhCWraYcbyskmT2KT8QHocTj6",
  "key17": "271ntpftJE2UTEFCHdARZa2PS3je2xAwkNtk96FQ1hmdaSXtfFNtL2Ymd1rTJKbJcuDZAk5vLXunMUTM6oPe3nU5",
  "key18": "3JJAF9K3txfVzVTNFEnCNuT7UpFgjYbm9K2ePy3UaAN4Msh2q6fxWhxmQNzWdrZLTNWEMUdXGowVdMxUNqrCLYQW",
  "key19": "4seJadP4PJVvkbuLwydP14KYBAUXGcQEvHYMD8W9ZNV8kQQELbyJifcfrmfLksYpsxZdjsoeCyipd8uTiNdbNNt4",
  "key20": "3uzBJnVb3S2Nq5Amr8ADcJk5hRLvN2GqqRnqggsW6Aip5QwbWuZ5mod53UTAAzm3yJfZ6z4FeMRgjb1QaDs5XF7U",
  "key21": "3foUfKgHpQ7i3V4iVyjF5oxGsyzqJ4y1gshT7Uw9Dt7p9ChTNEBt3jcgjzrw2m2pTd7ihj9a7H5hkmCHoBETNHwp",
  "key22": "32i95kj8WLQmN8YjJAVvK4VuvQeFmZYUhMuEzVPz98bjFhDLPcUv2hFCxArqqie9JnEvW4yHFLFu6bFs7PC4MLWC",
  "key23": "4rZ5ToDV6ZmdW8b1BzRABJw7miLE1xBEQkAXWGe2Rji2AJKFQvXmf341pFGNauaumRmVZwWctaunbh3w7qTWqs5K",
  "key24": "2UX9d6YAF7LHLz4tBKJgAXj7bMVxj5fES5sVAQZwjQoz5dtL5io7kEV2vp1MrxQiHc9um2jJi5hok1VDahnfTsNV",
  "key25": "22C2VNQ7YzB6xWLrq1AY3PWNem6dozdfQpixraMWbPnwiQSsacwEvFqsQDpPBPA6d83pVnPA8SHiZNEPbPbcp9Sq",
  "key26": "65sDomxXNh2GgNQSsCLn9ZTFSRvWuVkggCSyM9ZjnqHWv547V17XuzAp2BvvS1gBFGnxTFxJPF1ZSpurj2CruyNw"
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
