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
    "5J1AvUKKv5Sbqh7dsXb6LAH3QpUh2x515GYQnr6iCNi2Vy1hEm8s2hTFwRiRJzsf9H9WTCoKRjD9RiKJft93CsoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k27XKhdjKMVT2hur1C5kfWHtqwbgTmMCwxQ5Xd5sQeP6Mn8Z6R83L4Raw2rQEHbFp7TM2DxrZDe8vgHpmqH4tWA",
  "key1": "5G73TtmMQrAr5ZmDU5NYi8SBvW6NS289tLYb2A37cFMbTrDwFQ6XNmbE6o6fVhisgKG52aqGVR31KLyYPFfm4w2p",
  "key2": "szTbXKPxFPf4whytDKPChhGHcYzggULfifiGBcvWdGvVXnwB9FnCWzftiUz25QpZGnnYYmtgwgrW8QL9YLM4ipL",
  "key3": "5RKcPCVfQn5CoySj5SXthgeaGk3nBQKV1HNgGca7VNE7qDiBDkka72w65rDmB7YzQ4eDdqYRFzcQ7u5GtYVamAJN",
  "key4": "2oyhsaAkumjpmZfG4n5ksSxhoNjknVNNJS4HtENoJ3QNwCu93NuNHBjMyYtZfrETN2c67pSS9rpQLU19rMaVj26v",
  "key5": "5BCRGY5i4RfRpsVc3kTq2y53492LefKVdwXfvm4r2tjke1zBNfLtdpmUuweGMuH3NK8E1QhnMmFSH1NZn7UGGzNv",
  "key6": "5kJ7jQeG1cwmxCUv7ikBgpD1PP45RYkoPVAUMJHUnH6KVBaup5zRc18L9zQsw584itynFcicRMXUaFkkt1mpXZ5D",
  "key7": "5Grexk2eAGd8NjZg44qr5b6PuFb5sZ1QAv85cFDV9aRxAJXdHpCk168vdRfr5wLBBNW9wZuzYRW67Jb9VRaUQpm9",
  "key8": "3hJxqhta535dXLzjjHnjDiQz8EbzqAvJeQ8iYEX7N7gXHtVFuGQWLi7hDV2bktaZSNF9b7dkurpC86RA33hGRs97",
  "key9": "5yKzkY4piwLpo8uzgZxeZx8yM4oyyvgZyYTekwwVPzwXwzN7wcfWgpmbCMr1AkwRNz1zeuYB2Gt8U9zkZYkzGXEu",
  "key10": "3LTNpkEaEiRawj9CqUvGbuJstGJZaXTsHnJGE9D6ghH2YD131XgdPhEcEBvXDPCqLt27LEiudRWT15mCDrTdaczo",
  "key11": "5yRwbzBvhSbwPLLtonjvtPNqMkgeR9xrpkMQ7GWJv1wtfG7invANif6543UDhcE49UycLumHxSy7uEqvJ8r1FU1q",
  "key12": "nw3EqGhpXKCKzFLyCiFzwAGytfdPDLbMFfUHTX5f98hTHNW7EaoEPeEJfFGkvn25qaVcZSsqeLrx6p8eed17TBX",
  "key13": "2BPR8eYZx6mYkjv5a5auZsVKzTkxd83UuGty1qXYkAAgTZDPwQrxW1hJ4G1FkmeTFToHTGJ5ibJmh5QAqEgPjKjJ",
  "key14": "4QkdcQajAZB22GRmeChMBH26XqoUM5nwNXfUhgbZQEcKjvPRU2dMgL7GVPKXitm2BZb24CwLeWo4YYpowUysHc5f",
  "key15": "UiZpi5rzvG47LuSYiTtJop7w4kghQ7e8igddrMx3rTqcdAVNEbBqk3TW6YzyLiEqWeKRBrwxzLpwoDRqZ5u7xQZ",
  "key16": "66sqr7L7VSR9CVihsbYKpaWna3HMbSFgtLihH7DK58JKXF1VBJtbDKMTi2VaLMp5i8vKbYvxGBGETyuVNatW6y6C",
  "key17": "4p2aNXZMdA2kv8CVRyhNoAcpcFhsimXc1rrLH3ScBgwdpyGbzR4QZk7WndAusTeaCmWZdUz6n2YLXMwAJgrqprLU",
  "key18": "UdWdYDwRM3V4YDWxTxAcsYoWPUd5qD46xZ9QDDSx2QXtbninNMJ7XRvTQaEB3HS4V7FangyDpin74HyViPDx12B",
  "key19": "5Cp7oX6ejuqXdaQ72WT2aXJzBVGD85n2FLfuAuvyKYmPxVbB1g2oLmCGx7PW6rKMWNDYqe8oSGFztATJZyvBGvFg",
  "key20": "3vXo27mqHeJi11X1W9LaNnkbxHTqv7yanCrGPapEXP9of3u98yiAydsUfo5mC3MU9BGojkKSn7sG1rZJYFvUD5Cm",
  "key21": "35zMc8HxJnKTGC1KWRip4ranhPF4bnucXT2Vda1jmAGnD2R1bBBRzfXuTUQuibxbt5qwNLEsoqJTdApzFRqM8tZH",
  "key22": "5YSEUsJqDYbx2dywqWrfHWQPY7sTzQP9z1Xs2RxxKNbpP4LPET76puCK2WNgSjMp2RhRZHLzMSLsP39feVairLu5",
  "key23": "3v3co4oy8ueLXKJ2jY6TzDySBKyR3VpxLzK6k1HwJ69HLXeU4ddrWpkicuWK1xeqR5UfkEDc9VNdPHXZ4qjMrjA4",
  "key24": "TzFZqfZ2hiWic9PDapt1Rx5NkjQSZGcyNavxrgSpGkn7xQ5UaMBmskkquAyTyjVtpU9gfvDAXFX1WAfQELSVGq1",
  "key25": "4eh1dh78UZQKVCZHG2NMSiNByDMj54738nWH5YAHxmn4GTMDr3LQiJ2FGW8c7NgqQutuR2LceX3msbUahQt6GFiT",
  "key26": "4XX1SKSqXJwHMyjfkpAgFb4u3xmDDQqQWyH43DT6qPoKc7cm6ptH4EjarPQooivncgNk3aZHYXSLdv11Rdj5LHHs",
  "key27": "3Tq7gvHVV1zPszxGGJ62jYkzQxTB9Cp5FZMeD92zfBFyNPGka7oWjf83htJgpZBg4ayAz35ds5RnymkmVDkQiGg3",
  "key28": "3tsPkVTPUEFVzTUkKbqD7JU1NCtr5hR6dSooxKRTP1rcVq2g56NMLKZ29t1ypVtJQANahtEJreRNMB3W22CQdtmW",
  "key29": "5RHfTCg6LkhY1uQed3pJHVcJtMF1krFkB4x37jTFvHFLsqPAt9TZ85dXczWsuksPfWYhnJZGMTrjfPcbPu8Hy7Wk",
  "key30": "3D13kvz5F4HqrR8Y8deb1NfWa3JDe7QEGqBzdrP93Nd5WW1JdkQmtJgLdNGdxn2BcAKkFJtMtQG1YkpNj7g8i95Q"
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
