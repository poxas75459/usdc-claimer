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
    "23KNWgCEdxxZUZNs2ZFQ8G1ytRkpSFPsvbb7zd1Abe8jJNFLBrbdxAxGcw1PmwT9pEqP9Er6X5aHFnBCSmtP9X6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLACWausPYoTkvj16QQV7EDmymkHhE1GKL3aK2CAmhXAAH4GVqu8TM1KkYZDygJMw69JWS4pBMeu3sfzQyoxpFj",
  "key1": "2d8mwu741f6rPt8LwBVPxP9MvGbCSLDgefG1RfZPHBBhCqeZMNXyYUyTEzPzNF2WxAzjajjtoAqihBnfdcmhVAbB",
  "key2": "4JMGepTWorQS7EgFzM9fdsP82HFUxnQwdW2etyJE2q9dWxmit1xrvFCryaNVYpw84g6N9QcFmmiGk9LAC9V4Rwji",
  "key3": "2CJY3oTDkEzGXB8fee3R78zDNheEQ5rcZHB1BoDDszDAsznBYYJD8eT4oTe3S6rQVRdCWgUCHCkHs5BMkWNKnrJL",
  "key4": "3JwLCMmQhKUJSYKchmYvWVhDLrxYUp9VYsbjGcZhzoetXuyVgJgMA9V85EhpdD1i91puurAZK3EZQbNnGaKgcLLK",
  "key5": "2iKgTweto31VWUJELvn9KiBJzEZP6cVEggJkFSwnry6RU1qUWaaqbXTxthvsDx9UBo3EgSbw8uzngi3Xw5Z6kFQ5",
  "key6": "665Ds6mB1USPVHbzmSpmWCKWX6RbFTqhp4JNf82c1jvEsgwfMMbCe2rSG5G6o35nYVzJ8SbSkYin8Dd4UtSuxbcq",
  "key7": "5ATxgTRhGnaT8E5se95YXaFvvfeKkr3UeJMYuTHFkXMyKCQ5pwhjsdeXwcUc1yFoSeHSWpRhnWAjLjx8phkqAss",
  "key8": "2yJRRbkBS4MNATVzqHgDGVPGMD2EmYuxnnD8VA4FFFKYAkQXeYEi9z6hMD8X66snzCfzpH1pX7LCEiWeoy8e8QWp",
  "key9": "2No1VW2CpWYRodNCR38bFPfcfGvL2dSUnsc5XqtrZHQMHNVXz1mk9fNUJ8EDCPBfZQeRZREzYkXpQZ7qyFF6ChaZ",
  "key10": "4as8qCtcU53jCy9A6qa3ejd6NkExdShob7bAutkNhV4oGCLWetQ2cE8get4iHoiEcck45WnnNsAq5cFoKCib6zaV",
  "key11": "gzZmowaHBAzbhwGbkDK5XTFwBEeGFYnLDAMGQ9LoARQA39C1Lmd9gzrrnJCjPZQVfDSGgWfG6aSKRoGfHTAHkPk",
  "key12": "rpQvT9NZ35HGdQDGo4enreexFoaApcbVdbjcbhsvBdpYYAez7CHyrrenGgxbvJqK6xsgfMg1Hja5JUyWfzHL5m6",
  "key13": "4Aqb8uzRX82HqJpwoscZAkg2WS3agRaaH2hDhj5EK5LDRtAy6oPpE81vev8ptRK6Fv5zMVZ7qpn3uEZB3nbF7xtY",
  "key14": "2seAnAoENX3WXdnfbuXz5B83CLVdrVVvVRVNiHL9j25mTJEsCXzVueGAT3w6XA7G2yTd2aQsxqcmxd5N7rwnD376",
  "key15": "3gNvuyjzR1BEoTFBvdpA3Pb39ZDKuqAvWebaz99cApVzGjtz3VpGMC6qCCM4d6wZcnYXzbwFYCRRTF2XfDuDESEc",
  "key16": "5Acz7z7sE6zGdgD5YCqKQ1HC7BB6uVscsSohb38GautaKKQfuPv3tB2awU3VuZwThiittR6iJtwLqWM3E8bit4Pz",
  "key17": "wz8p7oGPYY33Dafjt6oyCc4CvpDg1ySW8AxAMAeYqrGGehCWiwdsZczEjtRRGADA5zPDitS8Mn7v8reZNRaNtwJ",
  "key18": "4Sa7Gw234Zpy2jWgfCJY2wCzR6WzkqUkPHZCbQ1mJWQx5qRibAS1j87EUP1oi63B7AM6KRJgP2aDhZEh3h2RwWto",
  "key19": "3s44N71jYjk2E9DMSdok3kLt5tJQapjtfZbzmbMj7fcmdUH423bxHMUpyRuz5WeR3ifM63Gam8TNwtBAth3kje4d",
  "key20": "SVHrjC1jopmkvNuEUmv5pkHn4W9G5ns3dQBmcChZTkohHZyobY6PrKXSv7Q2vYqNfqrK69WftqFNYJ7h7LDGzMC",
  "key21": "6753XsnWVV9HBhPwt4roy9JRLonqUq5r51w6o8nVst3NSww1dTJdHX5Rhakscciz6SSd6ymmhuFvNcxzWSTmGrf2",
  "key22": "4mqDeqS2Cw5VtDwXFGmpodCKr1fhpE3dXDaqjWNHq1hSRDsPjfRtHxSfCdH7xWGaUtcQvVeSurHUXbPPqDHD7jDg",
  "key23": "RmKR7AH4ajKZ3aH26yv3ZAx5mAwctq4kkBs6ZiDkCPo8WPE2VN2nobn16SVrPDm3gfNLdp1qnK4CWtm4SZMgmr4",
  "key24": "4hKsFBeoyakEtsookRFyX54jZbAuz6YZBqio1rJrAemLfaKMa3PbD5NrZaNYCZGmAv9CfRvUfxBzsnvifqAeSEhD",
  "key25": "m9gcLd7ycJEbsR82qSJphUrseyrMRxdGScgswDY16e7YBZdtg6DUDHxaD1UW6jZMKFbG8x1rh5qPtX86YN8cXTP",
  "key26": "jSd3VPyivikDJUqLkDAFyfwzpaNd72BqZNDZmd3M3zkuGW1iU6mPvMPoG8u3qpq3ZBENaXQqS6k4BpPcZQmjqcC"
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
