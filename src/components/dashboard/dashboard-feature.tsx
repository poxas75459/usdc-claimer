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
    "2iGfwBdJreBn26aQ91fq21QUGG5i3r5vGdizGx28F74WLNcCWJ8Qr8SS63wRv7SRfi2pHrcxWgLAqrQwSMmbkdod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mpc3uvWrmF2mYpTypJeSYybgDX3fAgjtxnA2XgHbwQMkpknbRn1QmdBXP2BRnCWW3us5vZzxyuHJsJNHq787iRf",
  "key1": "2BkeUMFcgpJLDCukkviDn86bFoekjASjg7UTP51QXNqxkgqhyJ5ctj6aWsQ6tv5iDYE7NxeT1jDtYB2uTpf1DKd6",
  "key2": "4t2yBFio3Rj6S7mqWbcuRJCveLivFVEyfnKgAmKpCTQJb4UhpQzGbNzdXGrnixWFJMRrEervUQGKbLK8Q7nusbZ",
  "key3": "4ZmTpntVFwvQAHk5SBCCWQoiBD2urtaUQ8zRvEUt1tG3ewY2gPmjf1UQWti4JKHsbYg5DWx3iHAt5EDoixEDF44z",
  "key4": "5MRwSpFn9fnQTx5dWENMXpgLqPaMoMrtVwsE3tkFUCYVbu5jcUGduY5t4awfr8vssHHpvTNj8c5JWd6wfoMd2Y3U",
  "key5": "5Y2Sau4uqRmGLKXPK5PksmHtQuMpudicxHRvwusLvvoPvoV1kMJJdVnELWH3QXvG42cthWV3XNcKxDxHGGowZYqT",
  "key6": "49RJnd4fu2su7nUqMZDirDPrdhzHR21369GsyLGUFuh3UqEMWjmenGjbb31iFtNLHciRd9gRAMUsdQM17SYDjNDd",
  "key7": "3cCp9BK4rhQsuREzGKpTgLfjiEPPkgoeiz2E8NezsgrCeeLVur2hKuhKfdnfVennfXs9NLzFv8T81fRtXZj2Zys8",
  "key8": "3qGkNrUg7yseXWUgpdTiGwCZ3fUx8ubMFEKvCYLvjDUdYkmhJhQSSWnLUeFbstJssPdEc74EMSJFX2RHREnAjfBZ",
  "key9": "5aFxiYASeXd8phqYjLMwJVZZJJbYp6SjiVi9Lgqs9GtSC6sHdHowwo2G2Rh5AHCSVjnvfqafBG8Yr2y33RLeWk2U",
  "key10": "5m8xarU58WXM52Uo7kPovWAUCaABVAHBbLq75hkp7c7EpEW8h9CmXLcZyJ2ox5Nb4oC2smtRowstgBYBke17cLdn",
  "key11": "3c1zk9Pe9YXEbLu64X9rKRNo7R8Kj3fuGE9nDx4Dyh4WNSimpvic4DBWhAFVH9babnyj3M7meCGyPstztXKNqafB",
  "key12": "5sjoLwMUtm9uvXVLXsg7kfc2dJea4h7JT4QzyJpoPqjEjCtj9DPjHRGLvDCVepuC9H8rbnHJjywS3yU9DGRbzTR7",
  "key13": "5GCSXgDvwzW1qkzwfNVHS3tK4AFqfUTDgaJAemefDCQb3x1UVd5eT2oPqcwjBbE9kiR1t5CoBFYuob8vy3S7wGA4",
  "key14": "4BaL6JV4496VR7d3jkGP6749sRdCKYAwUMRrML4nfa26jr7LmVSkgPqPvoaP2aNSP8cXY6iM39uuSFZ9saMqC4SS",
  "key15": "2Wv1BNeeRhYRucgPF6rhYQMDL9dXB1fw7ctCn3A9y4eLs2GcVCa8oJVVWY1q6xKSP4f9PPuz4xvEFUyHejiEKuzd",
  "key16": "5yNQ6hVQKYermA1zdPc4LyCTd2EtEETDPMjYAHKVaM5qJZg5UTkASsvXAowGEchybYREFQQHjkeSPkzP1hkwF4C5",
  "key17": "639aq9xqMr3QGMP48SnHt3enfiibsy9NZb1FJpbaXsqGuv1r3cNWsM8EgMJxfvHvwBamCEKs4ZNyfzuRrj3t7m6z",
  "key18": "Se5qLf5dryV2Rysqx7S3LFaHiRR13BKwk6h4tTrecWvZvGmKyJW4z54kJVm8MSdqDvg2Gms7Li49Nhz65we6T4R",
  "key19": "312bh4gVUE5ALKfDfD9dWR2rPZ3ctTarmKPZzpY5DVLE3Ux3haCFheFqyLLZ2aeqSjusawKqDWHskJwJreY89dHQ",
  "key20": "ALYEHQzDnjLCeXgz2mjo7jVT7rCnVeLkhYRYMxqGDbgiNVV16RZXfExQpcHE8CCnPe5SQuK7UDWAvQyJ9iUSetx",
  "key21": "4iqce1LMsEtaMud9WxxiR4xoEHwtZkJUwHRjJuZLYoHox1quNzxvgHsTbixz8xRw5hLmpCmLSt6Fgn2B8ZXy7MkX",
  "key22": "vRv97FipeyKdLm4KXCAZemqVkCvGGYFDN6gzSQCtm17PbwTmyZhcfGoBgtTbD8eQ9jMt5VZngD1fnfhaWs7wxyK",
  "key23": "36e5nuhtUyozoXtfM8NZ6yuLhNNw13vQha2XspghYRMDccdTAk3oDrvWpYGmXpBT5m9z8YCNr9qSRYdZoshnbPft",
  "key24": "B4M4c6BGxTCApL46PJWmNqMAbCWFniwtVhdecPRJi7tZuQkaKtZwdKU6gkKbR3pQeh66Srv9x2QR46xN6GkpD6u",
  "key25": "3873hmAi6nQCEQk7Jp2zAjjBcvtABpeGJ55Vxz2hSqGdLnsbde9CbtQ3Ych3QpH7nSLc1VbJumyZAAHhyfTXDsBe",
  "key26": "3g3Pr6nLzq9qshXm3DRRidgCn3WaqrfQ6ZNseytcFsJbSDThukRNoypqykcKXLyjEt9cM2ZJaPsttMZjadeCb2KZ",
  "key27": "uk6QVC5KdB7h2aRexw9H4p5hQaXxJMJxWBYgvF7qLqg1xqd8tPCJ24FNG3BwanTeLqjWsQ7sjHGYVsikW56uabv",
  "key28": "4oxxoMceyNRT27s11kVfyd7YnUPjZYF6Rz2zXshVNWyK7wMe8ZtQbjMwCyNKG8eX9mbkrmPPrsVApsq3YRNxd4JC",
  "key29": "JnueGjmHbHmyLgRwmqFbU73N6tngYLgBEnCBsoRgjn315uAXoJT7M4YurPMGCYHeJqDUdJp7NY9mefoykwZZ2xR",
  "key30": "4LwkXb5qUp9wzZsNYTMAXG1m5siPWB3aoQ723WefWBrkiPqYBFx1CkN8SMs3jusrfhs1gHth4wyaxnz5QhzXTeKd",
  "key31": "4gPtyb6iJubb98AzVp4RP3bjk3ATJZVvrY82SjC3SKkWR2sUckuQC536qwZ272wyFFknRMhY6zaPPqrsmz6fbcFM"
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
