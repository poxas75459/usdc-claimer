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
    "39MCBo1Eh1cZczRq5pdpyjFyDLSv7ULCprdadWdDVtgTp3swu9dwLL59EEkj7PQVYiEV6GCbfJs4ZBvwMefusANU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doQQMN31rMhdXhwuME92kkWEWrQdk2i1QJNWWm1pCi6sMm3SsyCxpLNWQQzD9WB8xBQ1rypNnXW29458W7P8ZFy",
  "key1": "2RZKsXB5JV9ouHJMEE7Qc8BVjHZAa36mYZzodDY2hUfWqqDBr91W59PHo8hMHn64qo9ifmctdYzBr7Xhwe7NeR4h",
  "key2": "3TfWMGhuQPEXizFVpBX1bwx7hv8St13PLbXkbLVfHGQpkJZzScy79fiCWwgivg8cfR7FZK5rLo7Xwf6ShePKucKA",
  "key3": "23pp5y1GrUxoBbrYNNHdUpqJnR5N97azUVv4KZDTvzaWFQ6NpWmrpzfhyN4yTnihnPzsvrvjsNByWuPD5A1Nhd8x",
  "key4": "49bBNKwAUERatmYpoiBrkCgpWVv56SXhoTFvCXpqnH1qvisaAWrq5NZZbbfoZLFBKrcWhXoheazocJbQLN7tCNKV",
  "key5": "49CuK5AcmK2pjW2FAVVjZxt4VRUfrp4uXUWsr2Eu3ZbfBvFMy3t6d1eQn4jasg7UKXkYCUEPcpdd6SooqPempt7q",
  "key6": "3TD5QShmNCdF3ZszS4G3mttAZ5fmh1qo5YYVWgYBjGQ1xSRh21bYLkb4C5GUNUGJSCxrv4QDpQs8d29R4qL1FrH3",
  "key7": "4v2tXgy8ULDqzGey9Ga7Yn2j5ETJAU6iT64JhM52TL1J2HGPLsfEwrwY2n1B8GCGwhNxf3stGDY1FH2z4fyDXq4k",
  "key8": "2BrGQriMvfcg3tLeWSrgRrnQ6vr1DGyiu4KYexTwFxHyXGha4qiM9cHatUj512Ruxpan3mZjDjiGC8sgYFWXiqdz",
  "key9": "67mrj1jg2djumPNMaBJCPdVuegbU8rtzwQfGRw1SdihVYK9dQT827FXjkwf3WEhxaooq3qbocS1m9LzdkAYrZnNK",
  "key10": "5rnBgJvRTZRL7UXncEDEFy88AGK4GwtuHHEer8nPJGom8EU11sumn2KX3G5rfRF6bmc9EHP9eS3ScuUDFNMWbPgK",
  "key11": "4BnHdkZ1daq9Vk2T8ibkbyTNEbgMhgenBMib4MQw1FhW3X4jap9DsZVEcCY6XaP1mDy4z3pvBt3tgMvLfy3ek3HC",
  "key12": "58yPVh5ScRpkPyNn8owg3oEW1hyHJBr1F9WXHWdzKGFeB41q74krbdXTLSvCofLSPL94Su2E96GwTvtwjLY4TELm",
  "key13": "4VUHm1CbNJWwB1gQgdHwn3kQpCrJ7z6PhfnH3PMF7T2pJYeheiT9BVmjXEK5WA7RSeQz961t3tiyQq6fqiT2YCJ3",
  "key14": "5D2NfVHLctA9pTkWRGsyCtJau7G185srBZwUrZjNqXdv63p3PX5vJcfYswVQ3ep8o8MtfaGYV442Cb9981TMS6tc",
  "key15": "95Y29WrVANyrtjBnVE5Db47nkBdkdrTXWU32cpotoont2X13Q3yfDa7FPzwU26YkeHhGm8r4oYErTNQ3LAaVfjj",
  "key16": "25hZ3brVqkBZXKL3p3PWogZi5x549fXPoDsq4SGSD8XXXD5wWYyYcSAd2NrNDNSBdYjceAqVvvbzKkybeGx14eMN",
  "key17": "2z5YZwd1t8zdN18VDDTFbFVUBKbFzun7X3YhLJt5GFxqzhqQ8QVkz6PyTLzYeikXcFGaXNF6gQTczwZkXTQU5gK2",
  "key18": "32zjTuL3L4HmMj8rXfbHBbM8JRV4sZHWixQmvkrsgLV2msqCtctdGKg3D2yENyRpcXiCgqsed2MWpjjFAjQykmT1",
  "key19": "3FcgmW5fPZc85d63uWCb5oMk3es3VWbBTpH4FHcp6LSMh8JgRLVpMQXPW9SVxPLiY18GJzqyGwjnpaC1QeYRDcN6",
  "key20": "3DDvtpbSpdzKipsdhDth2F6ggdQAnPmWdSqeJJY2WF7U79VPZd7MXfbS9QbBgQZHgBD983WLtE8yBAEhSDRzq3wf",
  "key21": "3qFPWnT63sTqP41s15q17G4xDhe6A7grgHYoEPafX8GA9Y2jrFqQK5Ug2D5KrBTutcQE8bKc7iK6hWT7uWHNCtzh",
  "key22": "5PbuAvtHsCjVzUTM4U4gR2NXqkE49UQbNc866fcKYTZvTvQQRRejRpAyZ3F1k9YPNq9NcaFZa9tKD95nTtJPn4B1",
  "key23": "JGWDReSdX5i8cb2FVyaPhgJzmu7nYwMKMcDSHf1cU29MALzbkBxNEFdBJdPwvzR6UGavUdNo7SVEKMCTymbahtY",
  "key24": "4xBMEVLSTNbYom7V2PXqnMRWPrePkZmPFvXdtmyFVVN4ffrWGdLjH587DRRppWB3Nui1iWVE8f6vfNAbF4C1y171",
  "key25": "bayMeVWwxZCjt9NfQ3b2Vsp7qxCTfMN1f2gvw7PmjfoizGKnaotMXdoWAQmfhGswv9KrXCcyckj2bfxF6VtgRPg",
  "key26": "2kLGaBZNfr5UAePiNibTCpUQ3FU6D7UP7DysjxM7dqM9ZMWnKU7oKYkmYaw8u4jXtY64Z4NNur1kx4uBqN3fM1s4",
  "key27": "66D6Qk3kSoSfNrAxTHNy2yygkprnzf8YDtvJBrLoqTxABVHj5Vk6okQqiNCPj95Rtyd9dpRRqZF51htNobypiUuN",
  "key28": "2ue31eU6qK1QjiBywu154XexFeTy1Xj9ef4Tgm65C4Us5iSVpqVvxD6eZWjLFFuowitGpqPWpnRudoAcTCnXLqHg",
  "key29": "3CGf9DNy78pxABxseo7rFv4dfJ22XMXNUyqY2DaHwog2VyVxjYws8sNK6npMhkkm8yZdqM64ajsgjXWCSFg4YkS1",
  "key30": "4buk5JNczShUMjYPkz1MsdPWJsmw9EfBxfpA3XWifhNxht3vXBs6agcmn4tNvy5G2kEoE6Ut68ErmdZWvEeaaLBB",
  "key31": "2VbqjfFnYs92H3WkbQv8MXWbynZyCwByDHeX4VxegkjRrCaULsQeK9uojSwZCtVn51SCL7Y6JqhKoyRiKv3JaN74",
  "key32": "2qPHD5uBUR98D5Xhragub9yrSEAqHsjdujwcaBZkbmdXqm5QunfqxfN5tpjuTrQnfFLKUXs5hBmA3E6hya4D4hFf",
  "key33": "2odBAdx6ymm3tpZJQr18ip4SCdMQP3pmy7h5hEcRgkSFXtkd7TMECPV5oGvHtQBF15TVusZ1LjwfaD18Dp2QGsKZ"
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
