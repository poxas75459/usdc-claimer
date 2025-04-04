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
    "3yG1bwr9t3bnSXW8hmTHkfFNVMzc9guy4iYqJM99zefmi5cLXQcAjRJxWjsR4NKPVNkj4HwYpPU8v8ff9eRosgG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFZQ99RbRiGtmHU9r2X39uMpZqzXia9oBnw7iWSG36iN2aSu8obeh5PBWhhdwzib27R5TxJemHxMeej3XHGZxhd",
  "key1": "3QwMks4uPPX8vGFvYpcDwV8pCWs8i8SfhCzh1j9u3g6wL7JWHfwXgXirLUisxoxXovgXg8budpVocvFzdUPsbJV4",
  "key2": "5Ksdsakd9DLSUvMoSrXabgqUUWs8uX3vfZnvXND9Aq4Q4o8LYxTNgRXBfgGENVkpnNhjbFUruj3ogEeQqsxvmh9x",
  "key3": "3FXpkPrQSANLzfph3d3UsQ8qdMeLP7kN3bEqKuXcKBBu3F6FyFwDuNJ2LTTesTLzqs6aQsCHKH8mT7M1nuZG3tC9",
  "key4": "XeHgtUGvCTRWRm9jD2Y1iBtVjFa8n8BPULkYun15A1rpW2AFd2G7uBBk6Lzfefo6Qop8dwjNS8wHVD8T8nKT5pV",
  "key5": "8vPRUu6GyyVeHBxDSdJGbxqrRSAcSPec1PacS8sPnDhTapudZkSg4MYkpRoPuphEKMpAtqZ2B46mbR3Hy6vqbaG",
  "key6": "2mUEp16Zi52rFFXojHBNfCS8gBtLV7wdHaBJ8gpWJR1imkidvtXc5knJ9HUS4TdRUY2Aw4wJenqmypchR8SfGVCq",
  "key7": "2hE6jqei7UKzdsET9g5mr93V3oQ4WU1MJnZ6ZkqZVNxcCvNtRXerEozEasVnCbMfQQBTFp5MLRSWYSVsVQN6wVU",
  "key8": "4nWUA4M4H73VRmzJmBWKPNa8TZ1WnGiAepq2etiUAegKgfa1p9DFSsezRgGBmLfuB9MjbAYoCVDXwLjH555Myfbz",
  "key9": "317vXKKGTbpcwWfQkJW4fKaNrYDhpp5HiCgxiZyZCpxpUm9XK7nu4fQBJbq87xhGW6Gj59rwh8vNuMdLnrAnN6VS",
  "key10": "5azpwmKh1kZzcW28y6URa4eypWnytrDdtqe8gbeN6zKUhaUqhqoSWzDzBkJV2mtuERKZ1rFiKNjZc4H8a7T7hokR",
  "key11": "67beWtccX9JeihPYcZKuh7CLiD426jDXFq68URLfnSjUvraLcE44bMPCxo7kFYXn95wF2VEdjf1y9jMeTPoQpxiN",
  "key12": "3PgcV5yxTht9YjyiXXpLqcudi5aiDJzDZ376PFMpY3oLzLw4WjfoJiiwNFBRbsPMutLAiEY43rFdNyi8vBo5Cxrj",
  "key13": "3LHJE5CzJMMaY4t6wwWqoQKTGmdyHYrcLAoGVyXJxNeTpkPXkUVFdPRfYhiPL927ZiuHmCvPDpR1MpUuxQ71vw2d",
  "key14": "qvfMAEyY5ZkvJBxV56yrv1Mhi93MjfZ6qfYqsQTbn5dytRaVJ4MmwaX9GcE3wBD2AjCFaSBzNGqG2ZQCChcGPet",
  "key15": "3J9eBZ9JWE9vLBFAoJcRzbKakuNqEixcyayBkR7aFMHzSmcqWJNSDLvT5sD8UZGw6nSz1rjbjoK8C94qx6sYL6At",
  "key16": "4UbSg1pUYBB6i2Lyi5HLnnZFfQ1vrijKCqak7iTgrmhVfdxBKvfmuMhwRbdmjTXrDnu7xNiRFGBj53NayAsF9TRQ",
  "key17": "3ot1eqno7QBHn2c1SyGeRvVJQcNMwCVv24doEc8aW4HnHkFqxLeYnVHMytmc7mqLSdxZqTs5TL5tA2atuq7HDXKU",
  "key18": "3i1Sd8uUkaSviJBj2kXwqdboyn97iPrVhCXxiMQEZr1HF1f54dsZQqfE6jvGASWaTeaaHgbty1j3spZuQh7iZxjS",
  "key19": "4cNo9Rhdp8dAksquH1xNqF9nyaveghqQDMwYQzNkz9GXfFSd9C4KdezvZHXDyDEhbugzNMZ8WuovmMq1qnfNBk8V",
  "key20": "5edV2sZikreyAVBBiHMYRWVQgPD3TKiHUToaXcCBneyGRUu16zKa12tJDLv5VdKNWJzFz1X3dPx7p9GCuHDkyjmP",
  "key21": "7dHXu3Ecaqnrj9SGSnuYafbBbGLzRuYk51YeE3ALmrczzY6QnDr4X43RBfkkgarUVTLzdEHrJ3ZfkaC6KNvp1hY",
  "key22": "2UsZXeUMK3TbMVL43AMNPFAUuHctYS5HdZqJiwNv15LL9A5JsmHLznQVxqk7npXc5NPocn3AamLfDyMgU9bhKPr9",
  "key23": "GmEG7eQNdTpnHbuckcRnj68Erk5t7UgSDLX2CcXsmLBVLVxBNHAC1rLV2FmJsHDt6f1bct5ABrjHYkawfofBz7J",
  "key24": "3YNzyAfg1hwsHLkHJq5aj5Gc7LAifgKzFGpUqepEHFDcsUDbFotLVxH6x5swM1BNLu4wHwnDH2e4n3hvMiYiJBXq",
  "key25": "3P3nY11jKUnJyrienoAqBzb2KryFt7PfMBF84meKWXb3qQZgYU7KNnpVedUMtAT3sjUJs4HUBekgkpkuEZejUQJY",
  "key26": "2FhiA8AtLV5GtnYScwNZN85Xk7cF85ueymcbPiN1BDVJQmhPreoCEXxBCiRf66S2q2vUemwKMdFGQdiwZFv9ZWuL",
  "key27": "4mZwca47f3zp82tq7oTw2EwQ1pnFs3HKK5DcvmvKQ2C4yhRAc5ibSzq1YQgPYqjSgH7fgMVKMBUA9hdkRhF3fHRg",
  "key28": "5Mi7tMcRwfhfyWQWXLS5ffaSkDvn5QuDdmoU3b3bbFHtgUms9BH75z13TirDo9aW6VGhfgE678DyxYvqQv2J1mrS",
  "key29": "5PDhhm3f32sp7nHWUA9ScrpBa1SNssq21LyNKa4Gx2XThE3QntYYnMuSG3QXPwVpSH3HrH24TjWZV8CqaDf3ichM",
  "key30": "4NDrGRahAsP4rbif72ENV8nLC7H13GXSqPtph3Q429brdq5oz4FPJqyAs6CriyrtUSoq68tiycMQH79ddM91X7WM",
  "key31": "2nPwLWb4jjb5ATxCNzcgpNCzNmeiHdL75eSEyJGYrKLpUqUMicmhzBRkx2NV88aHhEwNnrXjLqt5jTeudp3kPfgN",
  "key32": "2N2GpHWpFJXsFw6MrUR68PMuNFwaZJG2MbZwfjPtmwuU2cuQGa91g4Kfqw2MbaU2AzUnZCprjnGv8hLZ8Kc3dCjD",
  "key33": "2MWw8fSLpEtwAsgtQvq8sdFQEN9uB8wczJDysYTPmineVacLM6EQqP7V8zek7paeU8hknFQ9poC7JaSu7muVibg1",
  "key34": "61kSkFua9BqoroTkHqxC2kdwzMzzZYmf1Etd8ibVWtordLFBXaLFUZqutuWXyt3rQ16xu93zXYwjSThKcGSkxZrf",
  "key35": "3ZVf66UrBZ6dkxBSoX2r16YWmKzEbHUHebz8HuH5rYTLw5zWnPYuJYyhvtfeePSofsqQRgJkUv2ivbWFLAUxdJcR",
  "key36": "48pcdzTHpwnpi8jdJ4yS997EE3KB66SpWLNn6yyvGLKnJM9PZ71pwnuTJQ4MJ666XqaDzLEq5iwLsAursizDuoC3",
  "key37": "3MKYNzZ1mUpK1NAcZtGXaoWcbK4qV5mid1uCtG44K9MqDuhwpoP6xmzzcULKJWzyTNtFH2iZtKFbTesM598fFocu",
  "key38": "5TCDNRoaWTFSryJkpFk3hYb9pCoM9nwpf2KQPg52nPe5RXx52GvSfZXzJve7Pm1y3gMQnnRG3BBGWVqaGPD2bnnj",
  "key39": "5hkzfH13znFcvGxRSck8AGtGnMBJ7oqYFe9h6KaZFFqnKgZQNw8uA91cRnJqQv8WPmGi3E3FjGiaUy1V1NTjxLBs",
  "key40": "3wbDENCU9qXHpHAP73CNSN7k2HX1hV9xArj9TppbxUGCoshh8tKZqcfJLL4jk6kP4Bf35kbUpe4b8B2RU4JHsweb",
  "key41": "5Mknxj3U27ydTdU2kzUdCtR2XMtSgJ5dTmpymqxZdP7iQCNZ4p3XTTYnMyqRCNdjw6FhbTVJFGUpWKdZ8iDfrHQ7",
  "key42": "2PpWdSWDHHu35S9evMxLudbrvic9an91Ee47MvpGtJ9Hn6LpNFU8UZ57jvUbRn97xiuXURnwkUWhZm1X4vYNszJH",
  "key43": "3YLAZe6tP6ByNh9JHdF1bK85SysxAVQCJUoYoAAAZZUz79dbRT6L7aLZD2kaNpFsWJdH64XrxDoFREaZuPuURBW3",
  "key44": "2pYtrspHfASLM2VupPUH6U9PuMqM6aTiegPNV5F5zAJcdTv4KrUFyLUvBrakY3x8u8dZRJ3NJBmvadwT7Ap8oiqj",
  "key45": "3WCzQ9nPHwLjLQcizdxtq4mwWR3MjGasxNNHnpQ7wcrdg5XE6y6gKZ6sfMbKB2rDwrgBW7cWmfQZd96GnU5fX8MA"
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
