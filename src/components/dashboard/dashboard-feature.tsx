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
    "28kzp5xyLrepqnULw7TeGeumj11EJxcFGUk4bzXiHRSqB5vPDmfd7W5twbPfsjVoUpZ4RmPygiNnvqYxEieBum7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZmo2rhoEAjWtfqNiQcwfWxYCDLJQvTAx5kmefMDwJKwqykuYzHAWdXJnoGBUBdNvrLTYhFJiadVyAtMLvCVYvJ",
  "key1": "h3QA6hCaD4W2LkPQ46CA9HYjfUSGU7Vz9WwfuAh56JejZwM5zbdEfeBrsVnfwZMZwGUMX7yqA1UArkZubGbeVRp",
  "key2": "57sKtiLyMoQYy1AJYAmcZKRKjo9rssKwN8dFAMfbHzx3za3xey9KPHFrkWYUAawQubVkq8EdXeGsmgu4yaQL3wND",
  "key3": "5nKoZDhEshJzzeqrYGcpDVWmgT6vHvXhPR4tP2M9CWmPcorgamVDtWZHoeGGM9LQbZnZdMVnj2F3d9ZH8641kscN",
  "key4": "bV6TE9xHQ5jtdC2GLELniqggUWrtdoYFrN3Uu1G11VNnPd1KemJNa89djnK4m3era6vzrmuCNq8pyk4zHUfTEL1",
  "key5": "4PW2eo2NYA48AVN4iMBT5bgJizMFx3zUVP66Ecy2YqEb8GbQ8YRWyqEusNrdqcZdXih8s1cVXNaqLnppyR6fKPiM",
  "key6": "42y9iNUtneaih6eHsuTGx7hQbrP8B78ccF6EVrsadnu5fRoP1D5Bqiy38KiaxfEnhuWHHxPo7jNMiBrfa3G4PJjw",
  "key7": "4GRoZVNJKnXmXWw2RHCv4jBh4ohtvrSyyVU5Tv9vbm5YJ8BvjsJ5YLbTK7GVdshkR3MU1iae3tP69hjkf7qf69ka",
  "key8": "3GBgo86L2hpewMWQXzt5Fa1SJhs2hXz41aRRSXjRnNAuuvJDA3HuYsAY8JDrkcSth4NfqaZ2Qh6GX3hkkkfNbcWn",
  "key9": "48h7NgAjwfj4JJh3CxsUrr13EupsLiBwL4HhoLwWXea2NoqeDSsh8Tpaow4Gjd5fF6YSoHbEhi2qeunembKKhZb4",
  "key10": "491dMcszuUqiKz2Qc2MZBRn81B3bstw9p2aJDPgaiBUkyNz9rTWpAdKCENBnimMPfwK8v1Gdb7oPrxFVuibdZq4w",
  "key11": "31YxHCfDLxb36jgmPHjpwbRHQXuZt1PfJAeZN3vADqSdQVHWLi7qCwxu5roFz9rxeo2NHJc71CPtfvN2VdjPZLcg",
  "key12": "PSqbd3bW6MfoBgGmAEjZH1WhvHyZAhvW79kGwT8ZdHWN8Zc6nK8SoowdRek4VkRmd8JZ2asrtZv1A2LXsuxXfuB",
  "key13": "vgw4sNeFzH2hvVJDWsYsBQUPPPNMSJ8R9KjJkoFjaZB2braz2LsZZwkmVL4tzEBzEteyTPv3c5bzosUmkWiVY3y",
  "key14": "K1h75V65QTGNt3CeQ5Bcnz1m8PudsSpxC2rtxSYP5Fdx8bWoRkNEAUENxURDx2vaYZk4KvSuCDsRpYczD5MasvD",
  "key15": "4GPV4hwuBXFzmh3q3mnxJBSYu84Fx4kgGGzUwarsLGMqCYAqfGghyv5arf8AAKPiqGLHbsAAU9274jo7FTu2Kjz1",
  "key16": "57gWZiYzNsye1QEQ9izm1FMzx3buZTy9uJWjidy4Gn9BgfVKgNLs2LYpbe74G8dZrs19jH7bUUWZPV8ZEwQkuqAJ",
  "key17": "67GwesGSswDA6emkSJhkpJb5Yb1e86CfBakF7DK4RTQvvpqCNbX4Wj4zgDmoGhFyRTYjQmJoQRyCQfYYgp2pGAPr",
  "key18": "5gyMYh7W7CJjJurm5BcmRisMdovP1oSoHtdxhDYgBGwife1V6jfNQxs2Lwiog9W5Hv5a2tt5fqzC41TQeccZQm1e",
  "key19": "EXrzJEAReeCm5gtnfWU79aUtLRnkXHQmjz9YCdShxpM9WqMLE9M7LGCzuBUYqbapdgB5izvqpgmtGGbkcHajowj",
  "key20": "4JUaFDQn6SQjsTLKq1tEQr4pnNozcVvGsE3f1ts27g1TZbYAHL8mT4TvdqUEgzH6cht1PoskTMUJR1nw78c5Z8Zd",
  "key21": "2yBjmksLyUE6mUSZcJQ3SdT7RvyBphPjgud3y9ifxiCTBw6RX9nR2d5H2CTr3Ge1tbPHmGZankEDHGYdcQBHnMKY",
  "key22": "RueFLmApcBL56Q5Kq4333PkF429W941WSihQVEpvoiUryqay6JmPZBZQPkgF413reeYwhwwS7rF7RrpdTdA4hHC",
  "key23": "3p4WSAnUj6kxyqhNF3X3uY5VXzxZ6LNbs517PRbYcFPGJzdF9uSPkUD9K1YJH3jXFhMRBAPtELUUaf4zxcRrkDBE",
  "key24": "4VCoLLfrUGJrMfDZ6oR6wGWKV85MjEjzPkTTpUdTKBPFE1xUGmnLFPvfBDKp81VLfrQPUmgzUFdLsfxJ68tM9jrn",
  "key25": "4aU6xt2Q5ucDHz3D7hBJ54Rhw3SPFCMe7Wd3ujXADegQMNprEjrmt3z2dc8LFTyRTMZ4bbMFSF5X7496Z6kMnoxx",
  "key26": "3fpWWAeBmW3DqPRViL5zodpCoxtr37czGCkT575oi1ah74dvmyvo4qcUHyfAz7f7Ln38cWsRUnsqCSrFppA9rgdM",
  "key27": "2JTk2SEVytAsKU7573cKj9oVsrtf3GsuVUWzoyko1r6FGuG6s6dNU9qUTCHFfjU751rYscQCwmkiFZjpqW16nxc",
  "key28": "5KHN1b8Zg9Uk6v7RPtegE1zApjdJFTAmvjgRLzKn28yBnvbpRD2t1AUo8HKtQazxX6UTxvSPGa6i1zfsgNFvjLMR",
  "key29": "34dRuaNK2ZQrvMc2UAhoGrB995wNi3op1E2Pu2AsVweU13ErAMbfTBJPEMXTmVM6MgPei3K8ELorn3qkzmRgArQ",
  "key30": "3ZEjBBVz1f3pdR3dKC9Xe5HzqK4GGKX1daUhsqBzoVL6t42Q6b5pSQWjGrZzsAbghJuZnxRPY9Qdd9YkhWGQnUjA",
  "key31": "2eoxdevvyHsHuLKYXgEkPAUSNTpscxNaxqG9rhRnLWBfDwwFSQdoPmYEkBi8avbXJuBE6V5h3DgwHTmLzCJPTfFT",
  "key32": "3UH7iAt44jUm84TYtNzRnTRyC478GDRJ87fqhkwsr6jgvMiCcZxta9JqEwY13meDTB1K83BH36cZBKrNyaGkz7qf",
  "key33": "4D8Q1r5EvR3dXxtQxMdebBNEoi5i82ytjkkHSREoCQ5feLcv5tppLsixTXymCDLeN4UFzWT81ZGLjEHWXPHUJKJh"
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
