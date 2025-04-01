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
    "7TsdZ8oBCcax7xsic1xsk2orL1psY2x1YqkU2B18rcoVA8pqZLyjmLLqcYvqxhRSBBmyRjCkWKqF7EUS4BS1D1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqShpobPvb1j4hBrbxZmdFLhAwxuDaMzxmZeBio9FMvsNJ2zc3JCoywfJynAVX4ATxjXKiUVcbzWc7kETrNR53E",
  "key1": "3gtKaggxL78gJiVKmej3JBrxyc1cQBprdKXt5ArZJYhxf5a9trbLJsyotKTU34CeGwjgaUYah4fQreKprUnwpasB",
  "key2": "3mv6xHXnRDUDXzjrzgpRA2eCZ1DDaJrxRr49cLRCZtz71bViLzEeoMyxyRVuNp4gxquB3K85eBreuunRGL5AprAk",
  "key3": "2SBEfb2nT76hXP2rFTqTBF3XVrmEpQRXW19VjBjP6CfcXwNVnKueq42ZMwS4pyjhTw5JXJbFuXWX76aQcLVg5zGb",
  "key4": "4ivHnny81jhxUZ8PNt5HHFVeSRqY5m8MbW6wqTS6Y2xVo5c9GNxuMcqaXF963mzzQnLzw9knZoZ9a8u7qqUpCy4t",
  "key5": "28vFFkpeP4X8feTB1FcmjVXA95q1oHHLyhyBJMGTXcDs4rj1a3McSosajK9C2eUYi82Z2DTDpcQjzYUnX8a6dcaJ",
  "key6": "5gNqAvZLQMr1rKh9JKXUTtJnTVEhbGyhGshhQNGx7yhhERvTqpjfbbMDSu8EdjmqSkwu6zGHatnjH3c2VFHtuXxt",
  "key7": "3FUfn6NnM8TmQ2hnNxCt5wQnBLJTnAVfA9zcRyDYQ7vzmRj1zuN3ZNF4rigyAaUimPpqc4GKEVnt5U4uKS8A6w4M",
  "key8": "4zJ13kXiKMM54ZabJmZ5FzVsJMs2gNSivvz8SFDXx9UJASv6LfSS3SH5V7t2G5kuPXYMpU2hdAvMM8BC8KsqqgaJ",
  "key9": "2KPzZ4QKvezMNrT5XJLZL1yRzLvob9xH8BynBHS8n3Qps4JSvg6Hy3ANeoPhjjNS1UsD1nVN99Gjm233WxTPYufo",
  "key10": "5rBodqoNTKDrfgbS2v8enZnhxF2ACtdkZNDHcEP3JvTzoMHvPovPzvwT5nmKwW8X4SJ2B2qRUeDNsurC9tZs2R3Y",
  "key11": "xokQfxPuF7h65vALQjZBY3ck1YMEiPV1moscWGNV9eCB2DBF4JsA3jhG4bsAknmWBiQcEhrm7BjQ1vHUjkWRHCW",
  "key12": "3FYYpKAVEmuhJhyKVDzsZZMa8wzQ2m6gtzJ8NYnzVUCKD3vtQAVxCZMtBjrFs4sE437AdE5jK5ufbw6qFtN3NrWX",
  "key13": "2c1Wr8XjQnopUgQpEyHgJTnsWNN9UzAMeJnDkdZYXxBx7GHjr2rdt8AYXsx1KX8tvi3YE6ZWRB9Qemu6nwNVPALq",
  "key14": "4WuzxYGkD1KqNE5qWwDto8ggG6fPjrst2ZBbvjFgmp1NnBiV2xn3iqeiZoGZftwiDL2PnTDHASBj6UKPxVRLui2Q",
  "key15": "kQwcFYNn5dcyRQ6uGvFGneRUY7qUhCPvarce3tdaZ4dzNbCvagrVmJunZPbqmPLaqt1AXYe1UD9ZAiwPGT6q6o9",
  "key16": "2Qt8f2gXFn2xX6D9UqSoAacteYTkQsw2X9GVS6JyC1DCKMxArM9VHHu87h9bdAnGggJcz6hJTJkwaYbW2j9he1oY",
  "key17": "2wJpY5EzjHrGzzcRpsBU9twoHQdLdDLLpygGKA9ysckDLMYNdTbpg8Nkb2nj67FF2XfA1L9fpGpePtyZuZxs4EpU",
  "key18": "56hhMKSTDjrQsZ2mXYfW3C3eMNUZmC2YCZgWTCkqQGHvBQ9NFyp49D53R38qLkd2j9RbJ4H9jpBfvbGMR2EuX533",
  "key19": "2bDQgWxK7sDy7bugUcJMLdxEkfxpqqFWDGpqE5BEjRUaELRo7FBECrPU54TpgChiSQAfCkvG2tQtGbDxwB5KTGA3",
  "key20": "5d9aQvNzshsY1P7YRpdSzaxTJsxfpg3yNth3TDAy3okcTrPgVf5icKCKeU28UZkdPAyVjsgBBJ457iW1QuGJsqTu",
  "key21": "aKDrYXdgcRfjsP2bpRMoLQ4zJ8C927dD4Gwk1HxYnUYVB9DA9eeBoCeQcR9gVLd5azyABGTSUiBG1D2RVeegvCF",
  "key22": "2kY22bkU3x7jMUCUvy2pmhrWdzV7fwThqVPqvNFoUDPS1oxcaBFW7QiFz9DgRUyaXJosoCEyBZgBN5X66jpLK3L2",
  "key23": "2P8dt4Qv4FJmhKnkpriffZt2rpimDHRh4TH91ZeoD16YJg6YDZcqStsr6CK4YifqN1Anp1zLHPiMbhUJmi4GXMG6",
  "key24": "orjBebrgp1PuyD54EHg5FE4y3eaYaZJ18fBi55rAEwZ7s8mpB8wLFt91gmsUuYF3N2inV3FRbV6M25WpR2jTKor"
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
