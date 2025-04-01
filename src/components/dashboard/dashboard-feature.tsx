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
    "48h3tg8KS3B7SDjZde2uX4uatzTkw6VWbqZegbibsp8tv8fTXgqJhSrUTWMcWiqUjBCWGyQDA4Sy5gJJ5u2tupA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DaKi6kXypW2RPfk8Spd762n5JD2Zd3e5jKWE7gjjF89bN71t66JaZsu9UTXiSv9nN6GUQTvX1sVbWfk5J5RQJp",
  "key1": "2dZPMwMn76N6YyeomSByDNy48aCiTsY1d98oL5Thp6dLzb5JcNtovSVCUF63sPXE8sPFFw3vH2VGDmLJgKNPEZcH",
  "key2": "4CNRnvsXWjTQNF2AXPKR1PB3Ma5Rf3SnDt9WvjV8GweQq8d8k1JSU2G7wEM7wBExjoWLMN35FeRzLZFQC2z5d9Bi",
  "key3": "gjzfUD1aF8PcPww4ruTDS6twEZS9CxQXfrVhPZQvZEvQ89WBgZNPNTY1kjGm5UY1txDNDvM1Wy7SEeQgNvJpxn7",
  "key4": "2XNL5RGkJmp3wDrUpvc7MiD4HMxexznnXgine7RSrsHMmiv3rDmMxLiCAfAuqUvRyNSLsPMTzC3bH1rcwhLd1HyS",
  "key5": "3vCstx5RPNKsTJkb112AokG3dtcnKjyfdGe9NZuGV7CjCTwSMwdrDoEBGpbKZ7NtTaWS5jTvRnkxacmGCoDVnDd6",
  "key6": "4tvDf6TY1fw2dgHjUfhuj2sRqNkwCKYtPpyygfMbGHkmitsSHrGUnDKVvD3b1ScB6NPX5k2ieWWbR9uDiVaeAEQU",
  "key7": "4mMJ8ucQvkvvKGjCFamowPtv7uyzqMiCpo6cTGZUFQHSzgbewMAfvoUwZBfT2Q7uYiLzJ3F6yKq3b6gS1qpqAouQ",
  "key8": "4ZadQancNX7EqPzeHBtqBucK7GNdML5zbe4r1zYJEfg4LggBDujESTTMWi9tp2zn73P4Sa4iWFpwV37jVaJko3r3",
  "key9": "2ZikkSmLthdsdWnDyqGo7379s4CR1PuszqAeXzZn5231gvN87dTopbWaEsaobHaYe34KRyDqFk1KjgxMQxM963Li",
  "key10": "4XyWNbui5B4rhvbTkTzdPcr2mCuypvBbMA33XUfcLGXgTvTpkpZ1dswWgCTLaQSGEHB4WimkT1jAj55FvpysPLQS",
  "key11": "3jVfRsXj6QqcEVEVru1TS9EzYp6cBSwixKMwZRC3jE1rr4ZvT5qRVpoQyu3ZTNJ3t1L1ETkMsT9Jk6FYXHfUUd2u",
  "key12": "4kHm4g7jgpu1YQCe4yDW68gvwvsYpReqrpadLB4XijxbjJjKMXUf9TTzaaqpcmcxA8RNaegKUM3KBjejwjqtsPY7",
  "key13": "Do5upcwyL2jaDJTRCjS9Z6rFKpStrMbgt2UuNc4pNuWsndixhTnsNPd9ge4TnTsfsEKng6DATioftbamSeuCqGb",
  "key14": "4mzvHhK3JqeJeUuKocEMWtVaLrgSYqotoHgdeXxjWLNVmCkTSKkB4taLeNMPN75JoRCyUpup48LQRjAW7zBq8YNK",
  "key15": "3QfrE74ZbberNS8vHY6PpbyzdhcXGmqtsQtzoFNPZT7ZFGvSxC7Pqqzz87RMVfqLDs65BTvXMfScXVEjR2xQw5nC",
  "key16": "53ygRGbsK3VCcFQkWQGXcUXnZ62q7VeqRMtTfwePF86etKMRpgV8HgNvX2kmFuZML7rhoedaFM7HjMc15mstkXyt",
  "key17": "54keLpB37T8Sx7VrXsGbeoBUQDfzKSoZNpqDbdskqnLhoYbGUay5dnnNxe92mN86SRh7bD7KNRjERfjHyzZct7W2",
  "key18": "4rwCGZVfHu65hECdDqjWjAVHxUqV58EwZhzGU5UCEN6dcqce6L6p8CYA1gc5oYwYSYkgL6u36p6Hv7DxhqJiNzCy",
  "key19": "izZxNACmRUVJykz1swxfDCfq8jdteGdCLG3sapJYhCpGJQGTT9n3TbscbSyLYBfjrgDRBTPqfSVYXyPLXFBTyv7",
  "key20": "477RjdhDY9ANbWNfTFAQByvyzVXo7xBb9DnDvYHLkhJjXBxpr5MkBnLEvPRAHB5ZmLjno3BBEPMkAB7qLKXLbJb6",
  "key21": "4ovRdisLiQakYYPfeQdzW5WP9SgyL58U5AK1p5RPiLgaYVCPQheXeCgfaTLidBWCet4LVS3z3nvuZoiuu8i3bAaA",
  "key22": "4XzvFKaV7XbcHMJy5jtzBXbnEkktxJYvc4c97p77uY6DEHtmumTojMJU8ozLhZsPFRi99WbzCdtCt7UCeaUz36oU",
  "key23": "2tY4CU6rNXjw7iAqgcr4Ymi13UVqVAeiQ4jq8V44v3Uo7CJh197TtaLHWp5cNZgmQhDX1Jxy9wHD5taky6MXZvFp",
  "key24": "2KEPN841fSmXRWkpfx2GdPsqMPyeSkQLU4Ys3YfhLvPJsicUVWSfCSFWvBBo2L6aoy876LTTSGiXQBSyrsLF3xCY",
  "key25": "APKSoSeXumZo4827B4zYo1WpnwU74MVcNeY5DLLXZkskUzCjgVCnYURZ7v28CbvYgCMqArRWgiSbi2QpGuhhnvF",
  "key26": "2beijoCc9KUGarFbznM3yYFvbQ4BoGzRfzTYo1TwCiU92iSNz8bkd9sBq3bZZiRm2WzZyqzLAFtoQ6Ge1rNZ8zHf",
  "key27": "4rR13TbtkvujqzCVc1eDRavxWTQn2sHPhrcEREjLhYY5WtytZjrAEvqWickyoQYvpq9qjdvzyW7Pkw1Pj8aPUhbs",
  "key28": "12A3eCNqdQfJ3KsmfaGonEFkM7EXgbn4QsyhSnunQTZe7XMcFAuV4DUFKtvwePkYL6Kqhiw1JcaKeeVKSohbUi4J",
  "key29": "44WpNT9BQXt19hD5iXGZz9mkcMHjsJi7dhHM5pEi4QVt3XnuZvRwrFMZiQXP5NcVUoSBoWZorkZB57BhXPESxENR",
  "key30": "2jRBWmAosdscCLfk5F5K2beRZqnK9y2eaeWiBtpWDTHDrWgEz4kZURt3nAxWC7YEiVhHeWNLvk5HDz4pHt9MyDMa",
  "key31": "65moEzygT8BhBndjC1rCdjGJXECWF6sWVmfoyzLWvWHyDsqBRYrgXvhdFTkPyNas1Dn6TiQV8E2sHvW2n62NawVL",
  "key32": "1awphEZt14fp23TewKutE4BBmok53GzhRT9q6twWdYJ5Hy8t5H4qJvNHBmBCDxAuhUd6UUytbYFpoTnVhoKahQ1",
  "key33": "48Vdo9HtD3fr56NdfrtSsm5oJk8fuGf5joytnuSgcFRk4wD3DqSB6uRRUR1mRDhcMBUBWE3Du2bWXTJXNbxSmY6g"
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
