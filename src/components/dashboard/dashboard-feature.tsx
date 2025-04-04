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
    "27c5cnkFdvpoHy1h89cc5yUvzU9T3AhH9cFx7SZSPT5kZTSdipcbByiunMnwnnttj7b2GWJC8HfDB8V5gLxHHrp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoSNfJvznQCsopb4SjGdn1ygZsLtAis5e9WNzWRtBeSxqyZ1PhDE3PVqkU1wSVXKeaDXL43wMFNaLUcaTZb1X7t",
  "key1": "5zFdx8zwGuvkancNTnpa521fo9gyqufTh4kXfLyypc52pKvjLK6rE4zJcWCLoeBkwRsdRb8vBiYoyExk8Y2P9WCP",
  "key2": "2vutSasrCDZo1a8HPMP93bffdBUczZTasPC8VEgW24kapixom6WRg6gj6cDpPj5WtAJTkoLB1BMVaS9Ji814vari",
  "key3": "5jnfQTy1uf2L76onR3XC9hTqQuUDQvEKwkxzWwrgBRHE1VzhpoWAs59iwc6zpeo7HS1nQPtxTkorueTPfob1LhcF",
  "key4": "LShxNAuwQ2E69yR68f7RxrGw5CkjRbov2D1krrHdVX76VUA4DBjgNSBueRbQBkJwMMpb3pf1aNQV5McLjC7WWUC",
  "key5": "3thzvDazy8Nj4V4rEQpr2LTopdor34LoaVUx53LUUZkoZ62sKqzNmNfp5VTVdQQLt85xhmPPVUwik8bqdAFQCz5u",
  "key6": "5etAHqvuR5K7NkCXECxzjkNPYvVu2FPApG3dZGVCYoyrJQXEATmAsXDfHHVnD4wEbW4iCa5mFy5fDuRtrnbk4YuR",
  "key7": "2ZK5kVYVyCboDdDAcT46Zd2RnivSZ5axwd5Xvk8B5qQ83aBDNLb6Gmv1W4JKvzNqu6UhdwKoVszWXaMyzXhGbPFN",
  "key8": "3wg8sxTBJvCib3Ao8UZDqCu6T6QorRwZ9RMVgfLEgCYCB3gEMwCZKyJe6PWaYPE8upMziLRjmPugV5bGdoQYzq6T",
  "key9": "4VE9BEGZMuXbkDNX1aBcNajxmUV7npMhvaNtDycq9izDpnBni3zgfSyZFW14ar3Q82PrTkpnhEyXFFfqbApjC84h",
  "key10": "3gdDRaPjFTraGa3YcxpiHFv4exbihDiAuZg4jWAV8KX9snxpJseR3zKgGF5VCnJqzePYdkAp8sLkhTJqhijYcBh6",
  "key11": "3BjK7S9sXXNoKWTKW6w5iZibAwwZfH7keELaNcmENvcNpCm3ZhpMTMej5eLpwr5jHcXXTmcu4mYaUuXZTf3Bxnjw",
  "key12": "4KAxidw2kaoTmRebNB5LHDpUb3EyVfR985hpAE7uNxonboaG5SWXsReU4iN9j92f9ZZJ3zDxjLnmD6ktDJ88XSa2",
  "key13": "2AjwN2nBvAo27CaWUKhHrbCf8BbnGXjTwunihQdimoANBHsPWQ8mvFtGCBXgBbjsedhC5vdnU8pgAZ8LkW2ArFt1",
  "key14": "65S56iPm78KUQmQWaoUwvav3EpwDp3NB95b8K9wpd7omeD5ctG7AbhMNgS5417eXi7WYw5JGHqBj4HTD2W35vEwS",
  "key15": "4TXiyRkhpnBa4aRBHqc7MSuCqTxVMGDYT9UNxEdmWTA7ApRuHH4xpT7bSHzQmXtSY6KrnSuqXauxMELCCxVVfQHj",
  "key16": "5weegKqEh4QkBFZCkUyjDbRuMibZv35Za2p67EpwJ8ro7zzcJSZd2BSr1FcWnY9qXbMyEayynupY2hQwRfRoSpWg",
  "key17": "4RBFW68qAUzBrHSdH4egiKz74snvDEEpU57wBjhUhMtEe7x2edzKVUywHR2UFGotYWyDKKT5UM1aLvpzXEtCvscu",
  "key18": "3dUNqXZr69ufVHdszHMomGx8unKXJBCSivZpBPiW36T255LPuXuBuh6iymDdATkyeXxoPVk7mJguydXcP7aZfysw",
  "key19": "57mcg9S5BteCX9UZbKPZtySvAVhUXXWcVeVtXMQi1kfgJRReEnjHWsz1EuTwgSRw5VpyT6waLbkmWhuDuaZxqJmc",
  "key20": "25BuMgVaTBMUgnZHngEXgiweNXPHn5RFbJs1geYoMf94Lbic5YtxzV39V1kMY3JfHQVRCUgbySz5CWwUqWPVmB8C",
  "key21": "3BN63Y6SwNWCuogzvaXMyRR1pdx1qGntnbjEGahA38ZJj2dZSM6DRzvLrL7MiQgoVQ8SKwDFQSwbSGvqxAhgKnue",
  "key22": "545YVL5HqiPfHJ7TTN7i5ikUbV4EcYsGUHidGPHLtL9MvFvwGcJPnYkxngXyTHntxdk6AAcGNSfCeFvTLjHTxPWP",
  "key23": "43EyNNPaPwpHpFovLUdATEog38NvRUYi6ybVmfscxvxhuo4kMrDBzDWJ4jz9ZEnzZ27DJQsuveoWWCEwdR3Y7Mte",
  "key24": "2dsiMSiHEaLx2xeP5TsmbdnChJGtjb7BRHBLxuCyrPLVAbonksfbPbL17VDzxLR3iqL37NYY5VW1Canxj2N7vfJL",
  "key25": "3YKY6EYQp6yBgPFfyhyfCqa6C1CQXbfQM3DwTpGBko8CREyCRVWFW9hUS4EJhVTAFda5WvVskifc6bNoBq3tevvv",
  "key26": "5vwo4PqqefSnYsmvsqdWKfcJDGVJQGMC8ReW1TSnR2ixwGBYhDejmdkncYj2sBWsctYwWdtnRuT5Verytmq858LP",
  "key27": "4Bcx8zT69TRc59oov6S817675tpXTBbYKpYiTQAs2SrPxgA6NtSbzV89VYHy1ZYL1VaMx5STxSVz4f53t2qVB2Bk"
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
