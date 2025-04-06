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
    "2oM37Y4rLeLaL5AVCRrM76kKUam1H3Lob5SntK3TfUUsQE7MGcyteJPAPEdRXqGCh43TEaLwscXypUH4syzrfW2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dH1b76XF14tSAm5x72qh8QFhus8P6RjoTQTSBXQuiXAEo3cZeNJAwBu2e5szt8EG79hNDJgKbxg9DX4PoMwV5b",
  "key1": "akxoFMrV6BXSqMoHFfjSn52sjb3cnY4uiMzLSrEmpYgDSzT1HPuu8tjzs1Miwt1FGGqYpYhtEVTVkEBpJ9ao3Nk",
  "key2": "3NFaDgWEDsMsfB1Y2wHAUTNTxb4VSNfYw9CSKrjEF7MNEy7R3BdwmvSGtxice1xhSS3oxAihpyjGNLuVu6qLENUp",
  "key3": "5d4jx189VF5TfSjfdXsyGsED5HtWEFcrPgjYQFiBNXg2T59JdwFiLkLQNKeniYxW1Tt59nYyZwWqFNDnaf34hp7r",
  "key4": "65yqCoBGevzMZKTgfPTMr4wSXGDcmLZMUdKFFqZn6i2cywgvkUT6ZQG3H7hfvPh38AuKsAqJUDXwLoHm4wHW3NjB",
  "key5": "2zP16b8V3ZPjntF12sL1wBqyuyMZvdEDXq791XPGwTsn3A93xkxEWhP52QPjoDW7FVZwmQyAiJC7VbsxmPu1gBT4",
  "key6": "4eyeasRFktBsrtF7a1JotNg5trWQbPE1FNssvrAQkt1ZNDmPKkbj8WVoJN8WEJcSBW152kqbbetw69V594rtSrnK",
  "key7": "2fmcmte1LUasv9n4WvvRhdW85VY51CLbC7F4FuobcShBf3ywv13XrCzExrHuBtGZkAWnvSXLfPaxURp4z2zCrenV",
  "key8": "5dRvsBP1rSYnNah2w8ajWL9ZwZrWhqSrqTuHXDa95gLe3VA6cWNDw9Ee1kVPhFqvbgaNQJbWnyhkNYjn6UuCbqUF",
  "key9": "49YzE9AzxzF8KpprNoZPA4HhnGbfzUd9QmdxDRgGzj5iR9r76q8Y7LnMzqoUJxtfYNyWgKaY9Y7PofXf7VfQ6HgS",
  "key10": "5PZaBNpafDXNHBSJASXnKfxsqM7s2CuMsm4ZJqqWZcaUtCPt1Q7em8EWDU8SVFugH37LNvdWVcz6uEcXw7JN5eEj",
  "key11": "5dxD8N95vFRVLF3sz3CysejSAZG1HyscALmoQN6ssYzScveDyLJoXnzAcSx67kKjcyLvrPiepstwr3qH7EzwihTk",
  "key12": "4JjAqYHnbJXruXbrH1n7jTKg7ATerFH7Ap6r6CUJQgiwbDPR5DhAWMyge4nmfnGYkFGqb7qcCun8VnLvexHbca16",
  "key13": "g3wyFCPd9CqmB7HChg6FUzE1E66wPL7kDE2SYRo1ogzSJzuxTehksKH1kwvp8MCsJUH2fta5awmZL16SPXYoQqz",
  "key14": "3P9jeS6LaGBnGRZDLEooZf6NBHMZ83wzkfFEqU3mXeMHEBLtw7RqgozZvGFoxhy6JyUKhwMoETnj7rGzqC32W8US",
  "key15": "43iwZqd1LMMEwiDfdB1zBSi8e5ZjpT1nFBwTkFgS7HgHwqydiiuXkDyXxXKHmsxA5Tp8TW7s9gr7ySur38SBvhAn",
  "key16": "3tN4jedwTuH185dvVVZyghXYojxsx85NqCqF1pGoES957ij8kJjtgbQ39RqyRwHKMSYQj1noZak27Z6EC7Hrg6z8",
  "key17": "2Y1Wm9uWC3LPS6Z5PPBtbBrUr4i68ejtPENG2dVUBXSfx71S9NrBY8EWLcuW2u16wiMLY7G4bVrbfNm5TAUnqToL",
  "key18": "2jBAn6y9L8cHfX18Y3S2Qv1JMMpGKGbG5qBz89H5T32e4v1XSGFGUM8KYVyASYYeXxix2ruqceiJwq7E3EhnDiBb",
  "key19": "3fJ4j3dEZ7FxtSkotrwYCgtGM6AcWip72hz3jQ4XoLq4XYsYXC1b27NXs2WfYLemmpZUB1ZUrSoXvTWYvYH7sxLj",
  "key20": "413D9juaVA6e7iR1vFTZje5Ze7yPoZeDcALxmD4xLTDvhn5NYqFztcQpfa92WrfduQ4uJP5pymFP7soaqumjeBp6",
  "key21": "HuCPSdgFcpbDTjRvMbeKrV4XuJ8C6T1GKaSoiwUpQTVWgGcLVAz3JMjc5zAs5Mh4cEjEQxWRatqhfFk1WaFihiH",
  "key22": "3ssywbSHdTbzJkd85pXAGSsD8Hg6DnsnuafF1yTB3ssu7JhkbEMAvR8ReWn1WAeeTtmpthRyfCbyYtnmEdxks6oN",
  "key23": "5jxET38WWLkSXGsh3fbZKJbnAdj7gpvyg42JHzrBCHQrThR8qC7kBKsbER18471shEvu2DLHJff3yB6hFsjyarCq",
  "key24": "3iLhqo7xuEAFcrkJbYqRrj5GBD2Q63Q1LvuzZ5mU1VL7wyg6aqbVJk7TEPhaaRECpqHmpZNbUhVWEHqNmWesigi",
  "key25": "4pDBZ6gicfBizMJTYN8zssEfjWjnh9iuDWQaDqsNYZr64JALf25xpGobDQqiA8YXrMzsJAWJYwecKyUMNNaY2yz9"
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
