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
    "ArX2LT1RarrP3sMycLXnrxxVwLTj9nzdjYubUyNWxZQKUrSAA3qDximSrrup8TmYFWT3T5BvMQTW1fiABznuM1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brHHSqKEf4eWsrQy8j6nP6UiRXTuLVGQZ3SqBD276HP9Az32inetrWdoHmxSfSL6gmMrtuBDWFYt4QbGecKjV2u",
  "key1": "WECq6CkGv34tCazUjhVyWX2asBdwnCQFgPeBV6p4dQ2zdXXigcrnntBSsCnT15RqKSdLroJNeipudTL6xmFmvNn",
  "key2": "4399yN4R3yFY39aC76ZqnJtnviqPtFriXoGs5gmpMMK22dQk3f6TVuM8oGQthWueUsyRigf47xaKBxAHrWQEF4eJ",
  "key3": "2BNwn81NAiJbmTufv7MnFvdDSkB3h66DDWv4efdBG8HhJraKArwtz6N4cqY3NJHQ5z1wytp8ktb1jsJvqy3CoMUd",
  "key4": "4viy2yBG7JBZw2p6ZDHrfYeA2egW2ymsxy1Ymt5opsqEeuFnu9soHNcrSnRkve4jj4bcdzKiMv9xYhigo1Duzkwj",
  "key5": "RRamgpUp6CPCtuY8DFnDVyYa8MVdQZxer9pkqAxgYMSr4ocx7yfYEgAgb86HVre29E1m2nNAuRfpchkXDwY3AGv",
  "key6": "4zYMnqUKx11LKG9w8GVbPNXuAvZynzXcJgW4NMLdq7ybdnSFq3vVBig9TZKiMXwS9G8oJKwcPAAC2ox8Bofs6Xjx",
  "key7": "CWfcQBKKTEYtWWSq3qn2V9U3ooBF6QNMshC6cTmoBh9w1LA76SagjYnjHXCWtkGyetHdq9V7fno8puDfuoFNJfU",
  "key8": "4kepHhW4AMpUdWeVCKUrAXYGHmR6qB2YA9CxKJMCiW3xmU9t8mosgEBhu7XDFVVBTo8GadttQmrQh6KgL2ows67Q",
  "key9": "ELUM4mgv9brkCyGKuGrsopZGRALBSbTsevuEs7gdnewMGbD28Xvc9LCJpdj4kUTqzmcKu192W8hgNP9Pc55ddpE",
  "key10": "5GfyJkFgiPiD9TTVtuBgmfBY4Ciwhc3Dt2hLHWFzsFEfKwQeshV8toTxL1avn7KPmgTsEB6zhnh9Z1GugnJ136pF",
  "key11": "2rAWN8wWKCGPpAVPp792Av6nZnx8TR1y97Crci87xqvxga8sjQFhXUh7YFov6NuNXbM3bNPTEpPMYbBbtF5tL9hY",
  "key12": "4Kspeo2yzgeoCbrxVzm5Yq8LcC3xq9sz8BoE1brP8qAXqkXDBgoz14WhkQbGgm6RNbGfxq8t3WPgWCGhHJDQrHMo",
  "key13": "3J1GdjchhMgnDHYGsHx74SuoPmAY61JnJZZg4hLEBtk497Ft5pqZHGh3u61FFNtKR3zvgZHSmzfc3cCKeeZWC9dc",
  "key14": "2GhzduPRWoS5d3ZWTmvM3DFw1R8Pz46TQdbSzrNEG1YjpwngJUdA4Lz7iT47xWzTevTMsjvG8xtS84DVpRyEuscx",
  "key15": "PBqEugKM4H3s4s6nHQ8bt76bqawQqGJRmKCjzEyCFuT6Du61Uop74AaLcggj7gNKnC1XQ6xQ8MAjSz3KMLf4mpX",
  "key16": "4kRGgLju6nhqyUWm7tj8vwtjS6k4G5RRnX6HRCDDmdM3kBHAwQ5EyP1jejUwACvA2NUtT2sG8z2hESqZhdhnwg93",
  "key17": "t5SCorqgX6WVe5f9eSNgSZdGEpJbX7HwwowGiQwcG1FRGkP9HQksoy63Yh35Ug6tCunFLTN9LF7YiU9fAAWWwTB",
  "key18": "aze7VcDz8pWrNYoXbsrtHXiNgTkcTzBjzPnbnYbU2biBMMEGP2sv9pcPLF4zGQownYYJ1mjjbpyf7fSyeVX5MQg",
  "key19": "4UoVquRGMRcbh2MncXZxSZ1g2poutMjhBWwdB17tTRnVQNdaXuRb9mx9tjotR5fDBo8ZGVHfi7sjPXpnHCDsydt5",
  "key20": "27ELeS9stXtKbgSak3BX1Qu3Bhae6GhgEtPLyBbvKki3LvYnkfR3rUpHg9DYycp7weTCz3M6Pn1iXBuYKd7TDsxT",
  "key21": "5tMiUqacLaNrc3RDZejiiwjjoYfWj23tMQBR3Ec7y9d6zZoCGAY9THcsyr5xKN54VpuJ512vnv7mqzqaWwNq7Z6T",
  "key22": "5yyDi3Ym2w9ivmLDeQEEH6rosbwKZoRw6aMZonZykhLC58BB9o92TFWv8jFqzi83MCNSGDLL2s6Md4xdyBsQAa19",
  "key23": "5uaFd72BdG9JY5kbqCxsWrYrFa9ivMs5Dyp6AtzrcFU7v1sCG3B1dKPG7V4iBhm5Mbrj8UUC3R39e1nWKNnk5xp4",
  "key24": "4QN8Z3Nzx8PTmN4YJqmPW7YF4UzaydGCMcrRzBnKu5MkB2gEdD79kqkVqeeWset6P21TfEa2vWy6XG8CNpKF4gDw",
  "key25": "3LtU8UJeR7dQrM9TGN6kBewPdSB2Cw5mToxRPZ3JkvQXC3SRCiSmTkdiiYyE9CRgic7kiSScCpFnEr7L5nkHCrwf",
  "key26": "5hM8r4ibo8tA91fyxnEMDATM2ewuXz9wbPh2cj7XBg6biS6uofujPiKTqqzsucsLRZT3Mbotz6xNZotffNLwDs5A",
  "key27": "3rRjXMCKzGoZjCvDkW6NyCJ2wYWiHcUxxndxamy5hFT5v8xyBWYr1VpF7fF5VQ6KtXWgXF1n5FXDhv5hEG5NjT1x",
  "key28": "J3MU1fKLF2XoVRMrErcJQKZdYfBkZ3KGd2nvFuRCWAVjXD2Ru4ohmUj1NzqeEUd9ktyQpsGN3PeXZMvJjf75ssm",
  "key29": "4heXdobdWJc1eZNFjkZQHgTzSCQ5DtPkJYur1wE7hK3VicoJY8anT6SR2uefVD7tksHDYRquCWMEDU1i5mp96ctU"
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
