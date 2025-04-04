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
    "2gpTaB7A5G9ox2gPNQQ6KU9spqpNotdB7h4XkSztQW5XmiszUNkiCN7DtougviV7KVpbTufVKJ77DtFjp8iq7dAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Le8EsGZpyXbffRYq4zKLSJxtvwyEYTVo4SZBqPJuv2bLsW5uhfsrkdTp8VBcYouMbzvYuZJQdRM8NdWCCdrdZxA",
  "key1": "5xNeEeoYP1uarWpvNd7xQ75Jb81ELktFkP1hSRVHrRroFgZsyfw18KpxWDacTfk8fsjmb6svNCbQFZYQE7etSgbc",
  "key2": "4ABrtT1RmqjRdHXdCTDhHumznxcGUeiTMheL4P3TmFBHLDfXt2zo34uxTiXL3biC1tuUmJAHd2rT6V3vFs9QeT1Z",
  "key3": "2T8bYeKF6ADY7mVdh6CUabZfRZbTVvKkmCYZZACH1V5wSXLwapxczMi5TWryx2qRrw7F29qrnHyPxpoTThJdccj7",
  "key4": "2EkMwf3xu9PDH6WFA4HqkWXT57TDUkubo3Jw3L3m7pyvFt1o1WiQRW4vPF8vW41yiJrkJjjy3mbQLYUGfW4n998Z",
  "key5": "3ckiUcAJsngWbQnCuP449ijVBN7cFzk8PtAhhJoEgM6oQwA5iHzjgw7nxwYXS3EWyZTPbwYDSwgPkm3iCe18xsrj",
  "key6": "5Q2stajPAtbv7CJPRyiBj8U7eYhZKNYSoagbk1AMs7s9Xm4Fe83nGCq4WFcrgiXtW7eqfhvuWhurVPTPbhuH4Cau",
  "key7": "sYcSM2STANgxLmxJAYSmLw5ab5UYgduBCuSUDkX7tpgUHv3w4T6oJwUHGBPqUVf9su9qfdC6o1QB4igg6HoVcp8",
  "key8": "Ueod19AtW114uygJBtdmHHvoQK8iLv28Rim9CqUiu1E7LwRQy1hzqC9pMe4mJgPvgjmv1E3M2q7BfCt1PTdUViK",
  "key9": "5ZyLC8kMpoWWuqEPXG8YNazw6tusVrH4tu9EGYwPMyFL6B256dB68MJeN3jjSMKCiHii9mcKVSXwcLkm7FbKevsy",
  "key10": "2LRRruzUxXan2HuzQQJrcURwwQdSwnqUP5nTa7vz4nRKgFNzC3RZViDDGEqP4kThYh8Na8JzJRZSvGb5VNnADnsa",
  "key11": "394mPUH5SJxzGd7J19cUSucqPJsZRdmGn1dqQbnPVj5rT3ZhH6emL52VcKnjPHs7JK2mJDuLV1Q47WZTgbaDpUow",
  "key12": "27dmUSemJxgiaNJ4nzdzhPt4Cw7MBdYXY2sSZBYgsG9h18JN9JdijmVysJM9QxXx6HkkWrMbadCvf5pRi5yzUpAZ",
  "key13": "5axEoQB2U7zGAMX6SNp7AekP9NGsVpoundUvwwxSKhJmSzmv6RtY6Us7BQTpb61VVZshRgncWTYeziSfANVYsGr2",
  "key14": "4zUog7ypJgYJFQdumBsVqfYiPo67qR5aR3TW43b2W3PXmTMQjaLMBWgM9SaRVvb3Mxg43rUuAtDxhm9tf8BwhEbp",
  "key15": "4yQCyFUft6yB2jC5dseqx5131ZQbfW65DgLxKt85cqoTSdRQhPSHiNiEuSuDL5Fyr7MrTkvdSz9KmQYXkg3n8CUz",
  "key16": "arNvfYMR9tVGoEKVR9ZJxEQ8SverJNf2uUChYMGv3tN3ZbV8c9qiMyfPdATQjU8FJak8b99eemjmgnsgfo89XBA",
  "key17": "5cE3SbZdsc2zFkHUGX7g3VKDPPutfqjReMZqcrYScpAVww2hLjDg5ySyQdFyBvM8os5LsnhKw9AhG1nztJ55qRPv",
  "key18": "3scLzefTMqvKqjXFBS6SeWKF5Bm3ArYAFZxZfMvv8BCEVGCvXufJbGV7LSdRYcbewdmWV7nX3v99rL5JHns9VaAY",
  "key19": "5HkNcZMRVhMu718Bjhw2Kyvp4Rkyhk8QPmTiKD8E3iPuDEBhKjLBxPbBK5PCkb6zY5rvUhEh4n8pMVq1rnYXRhu3",
  "key20": "47SEcXdED8iiTuWrgvHedGUcar1ReuZ7sDnpPgmRwM4uwLTJZxZZoX7a3PXV8aQhwXwQAnrRaNF4UpUA4yT8WZi",
  "key21": "4pM5K7QagK6dHTMTohv4duBkjhAkTZvxuTcaM5by2MqsnPVsRfgUdowDY2shwsD4Em9uNFCWE18y2eDEzUMP8Lvs",
  "key22": "5FXXyuvSeZHgtQbXQgfeifTbe87pAubgV4uKQ9ezXdEnqfy5jMmwpYPH3EyJ5QkFFr23qULDsw2p2k3Ad1j7iX4u",
  "key23": "hpTmBfmi4tktjHK2aLQytxPfr3u4F5nygrQWP4X2iMX38CDfNx4UmCQkRzN54rVCMvbP7qavCWXG8DurszRTrPC",
  "key24": "DhDnhVSEWQ2bKpyVzetYqEtSKz54BR1yKVccuQmC8B5MSTYs5sdbUr2sKxteB5wXqY2B1nSgdjX84e6jMM6r2BM"
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
