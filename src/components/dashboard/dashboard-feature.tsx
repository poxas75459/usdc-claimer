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
    "4NvdDQ8YRhTkE3APtjdLtejU3LsuwEVm5fReSTat1DcLEeYuos3ZZPtvHuHdZbtfhLUYPyEV5azQFFqNNZ2i5B9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hi4gZSUS9ekPs3oyaqHU9sERCbnfG516gsj9w2sAcnN7P2zk4jMkw7VrZMWzFBuTHsRt4khLmM5KP6YaFfUEJhB",
  "key1": "3Y9wA3YqbZZ4hDXc5aPTC4KQigrJTsYVP5tWCscRh6faQR6Skvfrs8nZBrSLruuPfPv5etEKQBkeatFH5aYMGgoW",
  "key2": "4JkUNYAYY9ftXXw8ksmz8DHvozFXWbX476kS58fDkRPRw9Xebu2BopmkxNyXaJvqHt6U6CA2g5BvF7jPu5Sa9ANK",
  "key3": "47LRtDBAXc84LC8SdJJhRkZhjiqda2RkbRBGEZPANxArdV8UCZditj4ivYrbKbHinaUFuabiusWgTnADL9Cwndh3",
  "key4": "5mxjTXaogErgaFdrAXou7cigrzmAAzNHsvU8NzqpUZCanWdn1S1fByHDGDpnVAsrtVv6SuN6X7ujr9rUxavYEgwN",
  "key5": "5uARjswiCif7ayhPgtwg8sFUh6EvznbUbmq2tHpD8SrDAVbmzwbfajmpmtyAdi1eNnVyY9fCBJMwJTPbTANgKmF1",
  "key6": "2enPLgNisxLE5tGhqeQtfbZCwGnoVvGcxxnJmHyGaXcvtFf17rtJSAiW46s4jE3qAYqtJcYvmBNXASBBuCbRErpv",
  "key7": "65NKGcoCP21cLq9ZudRwVLSdxDUqMHGiWYmmzTX3axwdaCBDKMiJBdKVngGdo5agHX6SwtWsWajna3vyLT31Z23S",
  "key8": "2mAowKFwjrKyNAfVDL9FD9bDffmDCrxf3aMxESxU2En83JJRcW9DFeeBozSSxV5W6yjYSqTXXGHiLJ8GPwRvHpC8",
  "key9": "3pJraR9BzJmvKtX2qDJvidVaZd1moRRvfkMJyqaGmum1kohHfMoSCMXWStFzLGrguESdWwm82QePiDs9Qw3M1DUZ",
  "key10": "5bmp32HpaXPwXonHbcET34DjnVDgV412ANd19jTbhsEbqSGYyHznEEmdR3uWbaJyC2mfZTeafzw3iVn4kjdTXP1W",
  "key11": "663WaFP8PLyVzNemwGEuWwJLcsPiTWbL3WTb6V9gJ68hQPsoLgki8nqqdWnUC9HC8FNaLZ5ARsx6UetF8XeU3rxk",
  "key12": "5m6VAt43QpDLAyGyukHY83u6ZExuywpKQs9cPWKwDpZYjMTugPE8qztSSa2WCHP2vh2Uy4ZZBQ27mDxz8ADARap9",
  "key13": "44b4KkpV7dEYBmkQxcZfvFvz5KdEpQh3QTTyTV4en3K33iABdEM3PPHCztKqji7Em91f8p1aW72GHvmn3UFxArn5",
  "key14": "19G6vtWiqeeku4865vkvPCrvC3zPVy6KmpES1J19V5P3kpXXNujMn4uGE1dJYb2baeKn4ZzSkZENGW7dGxBAFoX",
  "key15": "2fNiTqQoKtSiAyLkSVbqH5RhUSgTdTLBrUjPWnjESfKjbycdRErc15iM7mce3LbjMpmhPVkmXvBe4hyvxV1HouLu",
  "key16": "4WQDoPVU5P2omZtCP2CRVpyCRHboSbBZzsnr3ab2zD7kuUGdEZ1AxaYRVj5BmezXA5j4xQwqJSWQVqdrPtsbVXc9",
  "key17": "66iRjbFCCnKv9CTFXkgd4A9DFMyDJxYtWeEJoCcZhfKbjS6whn5ZDH98yY6XAKjnZ1RfXwt7ucNByoAgyEoNvpPY",
  "key18": "63FWwoX17Tnhj2RgnJeTH3LKiUQD8UkpWPe8oKfnEdpS8GWNqSuRpj3bbzdizrymBnrLqrFDHSQXnZu9vhkbwAks",
  "key19": "SKCAhpg1juNmNSd1nttsaeyxwHV6rL3nVBMgTFNBrSHiAjiNgxY3dtJiCGzqapMYy8tt6vX1Dn5Pu4pwYeqw7F3",
  "key20": "5cQfeh5XkgYwCL6VRCe56agMboemuKTD1SRzUtFEDHzhc2i5g49C588NzfNb6JJHV3Ad2fE8YtZaHB347Tc88asL",
  "key21": "4qRM4ysQqPUrxwjq2jmrQq86drEHo53BTUaBvFtG9Xh6vKnJW45JZbR6qkmXADwUUmsr41Br3bhQhu89YHhMZxCT",
  "key22": "wVgr3AWPcZZBpJkRMjJMjaakdtaYjEKv3CNc3XNccNpNKw9tDnQw6jZseD6V7LjRYhUY1hrtLgWsbsHGNSbi7sF",
  "key23": "XF1F7UebD22cK5omG9rpzVtvGKSUM2ZB9XMoscWfHkAbe4r5DYTUYti1SY2GHVcvXCSoKiQdpDSZt6GdQozWEFC",
  "key24": "DuDqyzn9Wx2rkJEHxEwoF61qBEW3VLpYBHLsSMSWb4sxfKvDPMemD3prBqvhoLwJEh6EJANvtBXAJ8hpGry9aYN",
  "key25": "2iCCdBLk7AFUhdmZCWPpt5KSLRZiQjz7gtg8DnztwmsSTzetnCKEjPv28RTah7MxMp86BUVBLJAtfqsqmRohsoVQ",
  "key26": "2SFTaWTSWn3FFAtYWRT56Wn4SbMQ6WcQ9wRddJVAXUpK1WsHAHt8mwyQTKoxRcF6MNnih2VHMzaR4vuvVHvNZKhK"
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
