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
    "2MURMvBYgsmSNnv11RFHpt29kpniHtUSxw8oLdFH8gT9gECvZXpx89BLsBokKMywPiMhJtwYxW7WUTL55KMat7kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47UVik4SPhiW58dRhMAycaHiE1uCXW1xuuB3F4BrW7poi7dZ1dmQVtazf3FQvTG3D7Mp1Lf2c9h8NaC1FyEPq5RV",
  "key1": "d4SWnPUg88bRH1MJ3pyqkMjCFRtSozym8QrVoUCPBEUW7zmpTRvLCarrh6f7NUqidEDW66Ab7QPLtA8vjCCfuiA",
  "key2": "3VBTKqdUghLFrnVvbj2EnJWJBeiAFFGKrhPWDtHe6x7kVvKxAg8KSao4fGk6cPwyT2PJGnHWcQBBh82H7cQTf8Zu",
  "key3": "3ft4SnxHZEezv56edxiPv21xtmXNfsDjpyKpyJJDoTiKLvDgnJZk55SdWDNrtAu8o1CZY3CDU5dce55Rbdo7AR42",
  "key4": "2t24iXCRNxafFzg4XTDBYvYzviKphJqa8GUbLkCWk6M5wJ69wDLYDQErKGx4q33q57Jy9k7rn29VsPgPvURxrNBn",
  "key5": "4AmrUrw7HQazd5XGQ5s38b1NCfdgyhWcCUy3xSqjkA9537rsttdp69bFajMQWqPJ4jiBR3yShVeMG2fe8GtgfDAE",
  "key6": "2QNZACT7e1rCBz9eRLzAi94ruNFdZQMmra8sKdAdpC8rZJqmEFKQuYz8mQpFT915JEWjHcK84dvFS7LD6j9Utcv7",
  "key7": "8e9dfs8J8U65WyGqoVedE7ydHvZiAzgb3zYiWbVo6LFJ5TGKN54LyG55yL2JAAu1bKje7HSrzL1VUXuAsLopgki",
  "key8": "5GhUiQdWnnALWTTmEAJLDNzLdRDA2ssKAuNgTNYM4DHh26RfqVg1V2Ez2pDdtB26Ntr2JiC9X7EA8idKR1szi1XH",
  "key9": "LBfVagqe5YPpSP2fDYZSA1GS2hm1Ei8MCSnuaE6ui4Xpgc942wVzJbwt5G4oU5WerZ5ULJ3SgBy1EfAyjzJcPhx",
  "key10": "RTx1XFEoPFr2bD27Cfkn6UiJy9KZnqo6oopfAZNGQ2Y4KknKUnfPaF2pP66WsbEb9BEy9hTU3C1nRhYWG4dx292",
  "key11": "fM7JnKZRLpC7vsv5NnbGQ55fHCL8FNhW4PAqN9hZQHee8rVcJFd83ZFUQEPGyJPeoVod9roy1fRt2Y3Q8cbLq7V",
  "key12": "4krDfdh63CyRL8LorMPuBnovNcqKfQRXQrYfYRugAgnTXqfDFwKeKQ4wGZAro9fq1VTB86hUYbDoFVR57dxB7LJQ",
  "key13": "3M6g273xx1PG2c5cr3qU8HZqyBfLJXPSuygHTXmoxQmQ6nT6zqG6Z125QpwJMfvzD1qXHQrrby63FHBB17MZ6hk9",
  "key14": "5PXGkfJMWThcGsSDLuVABB2uNQqD1ruewVX5x3ALHzzpbqjMpNckD5ogYaqx9iAAEdmSLLeyKrdh9rHJU1z2yHur",
  "key15": "4FTQAiBWUVm2JLpvwNFFHr3EGopze5XmPvc17zLQfv3Zx2CESy4jvXZixHFa7J6cVzSJgYoQZ98d7PJuidBrAFC3",
  "key16": "26oqYFf2T3wMS2wDQNUDErknDf4jhWmeKSx7cHb6RM5wxrDBp6JdYLzjJ4Hm73x3RmhJoA3gpF8s4PfY4rbqQgfK",
  "key17": "5r2Lm44YYFDuVXdJLY7ic5dMZnK88bTwwKy3mnWKMNjmz8i1ehqmSNaTpigQCGWWLLvuZKXnuaZp5xhi7rTEbCQw",
  "key18": "4QXn7D4vZCJrbu8N3rFpGthqhhf9fFpaZkb2UNaWg2Wi745v9wVqQnAN8b5bMLaSWJeEDPckDPSjCGEjFkRwks8t",
  "key19": "46MCTpAAGVBQd8GUG3cXXTiit2AwGVAhfBJxfVMviE5aJ9syZpzZuUTQ3kHnsQnHQqvCKkPrEw3KTetbDjRopRkV",
  "key20": "3AnQDrC4ZcCvqoUu8cwUnjXq4wZ8hLoYC1xDT392E8XzF4di5KvEyFf5kGLCeXo1zd9biP4ZqYFzfgNgHQMn3w8C",
  "key21": "27xxKtkXiPd1A536XSuDRjnNwePWEHW5tpWmX41Lbubtmt684eu6aYFJfYVdkgiUKx9Zot3Cfp9NmYTVKu88KW6j",
  "key22": "3YQ3eLCUVko1cnHQKwr5KQFMCddsmWXEAXPa5EZazP6DNeavdaaKqTkbTzugUBgdhki9nNWwsVs4M1EdQRe581gd",
  "key23": "5Bvrg3nZqK8C9pPcAPTWsQL5Wf51hodLALNrVZXjWgbbttU6NzbMmVBAzSyXgey7xrby29HSAqv1oGAeBnStzcwD",
  "key24": "2CwT7cPh2dAehZozhPkW8vQ3f1pqdQPrNqAsYRujfgCsDXiV83C2rVNoMbraKLf1GR8XCHxwohNrTvUPCsuXkJT7"
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
