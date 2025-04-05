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
    "PZeYjDKKD97r8cVrCaon4jNULFGYDfHXyQKvevsuoTmAmYirKv51SBxKYhVbzoT9SkP5DmVENmpwqWSgU8ucHD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5acReeUZcMWVc6KzYF48QYe6WgvgaaMLkZ7HCddtSJsLHssTCo7wpyMTAHnikvba6b2jxgrKQ5PnbuxoeW4zuiYP",
  "key1": "21GzWjJo75Dwmt1UxGLyfTearj9oQNoYX3Z7jcshxyJkJdFDHBRHsrkbfjUYNYRwLnuesZQ7x6oEDEjpyCyU4NzY",
  "key2": "5Ss7Umvfw8SAZcMvqVRNp8J1qxkNPSYWFi7r7JKpCmY2mW1iXhZpe2TWmy9XguE48qZPy7PGq7xzU56yYyjsY5r8",
  "key3": "5iVfgYSiD9djSyDB4fFAGcXQKY4SigUPsofdfRa35ber6bmwmk9fct5WoKYuMxkJ7dVTJYQxcnVTSkNbkxjGK4TR",
  "key4": "3uZP7i8KUhwRT3ZgbAZrPpbxynXDzmcsrrZDLSMFgjvv6pdKzygm4c8wV5giNyzuaZz8WdyoBJC5kF5CHS9QyqDa",
  "key5": "47o7yzLpETpDcKwZ1TBWNX7mVb49MKYzhnukxV7Q9RnWPZxuwYcq9MgT1XEPPQ6FTDWvjPpfRP1C49vNqkppAgq3",
  "key6": "67MgfxVZFMoLyfAf9DLwHM1c9Rs1v2LS5p2vhKy5T91ofgiEPDrzwThb5gkE8MxqSrvixeddQyKGnoPXm1sGwJPe",
  "key7": "3bVhp1EXbUotxkq1xvowBRosAFtCt87SxTbbK4rUsernMoh9tCXwnh1QAtskEbmgfhbyxPw1unk8YbxcK9kzxhDm",
  "key8": "44WSWqs5tCuXywy3AMRTSxTiujDana3yb6s69qe54DoopeHgteGSdhotSRJ1663jid7Qt2v18i6saERq2zwj8Uk1",
  "key9": "4C3MJ5xSrd8cpUrbcTrx4Amg7Y3UuQGpwFV2hQqXdAeWwhg52ENAf4EnF8MLu1FA9ZbusHAxvcVSMd2Cfs64awra",
  "key10": "3NrTRdV3aBSUcHhRe1mXQ2PQGhNxG11qDtio162ekRhSP2jvsKd7gwBGR49WigM1mCCf3xm8fc78MWnFAhPmm19b",
  "key11": "65GrZbNR3dE1pUn5irLYGvT5pKkqRLZeroqu9EMv76B2uA6zyurWL2VMu8AuWZ7fyQwc4wqM8LDpYMx1n9gCLWk6",
  "key12": "5YY8KaB3xVNzXG8Xrc8M7SrHxG41nVAX9K8SLM6LjBLZzNyWi4SPi8A3aCPrZCLTYjY9Qg2AJpNj8xD1UEUo31wh",
  "key13": "2dyeXZi36NRUJzTwB8y4uGBQrcuVgWU4hC1ckwS66CLjFXo39aLnLTYvyRG7xtjqRSYsQhzLsPC2a1PjtPyQhQMm",
  "key14": "56dqL99LkqPjt9FmJFFoNXbuY2N29nP3vju5K6Fk3qRBmgPEs7PwavZEZ9tMd2uZCCHMb192e8hzCzhHawZCtRE2",
  "key15": "55iuvHtm64LNNXmwxNsNo22uUdU7FMGVvmobo7hGYw7i6NCg5VpLcfj5Kru2gAbnNnesPiVYpgeUcKTNiPvHH9E2",
  "key16": "22SPW7SHn5CEcuYXKSS7GrBz7TK7rxEMaY4pSwhWRMkiwUoTwaLWZqwiLMx8oGZTZgSec6PAnu91uvpRqkpK7Cjd",
  "key17": "2q3SJgmeULj41pYskWNtSmdzLDABQnELFzLJRkyTswcFr2boNQJRmxJ8b3SVdJwzM8rFVuFEUARyzUxLkggr5Yc7",
  "key18": "4hLfX6cqQaHGs5XTbRVgkkA3ucrGRbjxFAWJxSznj156XjQNipAxDP2E77yk5yVbCmfRLxMGVNTRBjwC99pPBfwi",
  "key19": "5pLgp9GQPbquEZpskTn668gHMMB6Dg8iPFBX42FyA3khjZiQBKcZEvQGeuymEjshXUYJisNwLxQTESgL1EBNpWGC",
  "key20": "3ecaqtAaWcWo1VpfvgfTkdUxgier3hGJq9WrwysDHVnrAsvoeEJ1LPVf7UnQWgNGiyLt9VmDC9RsebauRQmvH3SU",
  "key21": "4HQkQANnpLcWWXqtAmSBuSwwNj6SP8gMHVzibp3JbnyjVagL73oQxPHCbAddcWVcRpf8VNEv5GJCctfq25fjG1Gd",
  "key22": "5z5188zAP4TjhHNQEDXU1aXFDSXEVCVAXKyMxKLWagwjUt6zRMA4JzUAFuSg9jgA4niaSZmnHyeUC2gStqeBi54D",
  "key23": "33SNQKKuD9e47vbL1q54aSUugKc8jP8dCezow6U3eDLv5vWa3bREyt5uyjoJ1zuQJbbvuoVfQzQ1HqEZ1Hmbhgvq",
  "key24": "5D5Df8qFQPL8xXetzKbmnqQ4UzpM3TP14aQJAM4usRFxeW89FiZBmmhhiXs5yt2RaLC517sMRqH1AkgZo9vqZyci",
  "key25": "WbqKPZJSLcwxu4Y98eKfUxZU18pzzyY8rbVfYLSMPj56dYwMG1QyBb3qLgwFpiecv2AkGxvSLvbxKWiZvEkaffb"
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
