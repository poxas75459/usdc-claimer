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
    "5wkkDx6ffBQfoKwjFXoRwM1bNnJFkQepQnBNwiXqfiQab5TRHbDxV5C5WLqQBfXxKh6dnSDBAsCJH9t6Ydkvfq5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXyKUJ7AuFWG7FXJwPWau82zfiXX2bNsHeAZ2eXberWG3Ci1eeQnxi2WCjmcT5WkPsVRZUbzzQZeJBxvr4yt9KP",
  "key1": "399soE89j8pJDW2h3xMKjNDijxSZNJgaBDoDcXBU9jPTVyFmsiSsdw25gmq8QxGcp6iZS1QsjALV37ccx6fYBwYe",
  "key2": "4NgnnXizzGAQSk2G5XbyvCkPumXbW595oHkC4nqM6HHaSMfWHkkub2SNLQJWcjhak87YKtmamgR7LdpsjBnUm8bq",
  "key3": "5xgywYGfbosuN3y7cHyw1SqgrZso6NWHbjG5KmSxMksv1vefhJr9SiW8CLLLHiRvW7ebBdevKPiXWvGd2PdXZvDG",
  "key4": "4PPBmTxZKvKyk4AJbuubdCBrYbDX6prncaP4c8iY2dnChFsiMsTyU8MuRkFdEdXXSsdC4MnbaDQ6Vdavwmr7sXcm",
  "key5": "Zb3ntu7Y3oscL2Se7BRE8ijsRDkcv6j4CSiDwVuz5XpYGrBzeqErUL5btcwNKCD4vBGwXRH4HdmYHUYCaezHnUt",
  "key6": "5kqzxU69rqaX2XujfEEgvbogHHEChYoxoCuavAjyXoGGTDLjCpx5ARksRbgHFMuaUxkTFRpr4i4gd5htqSyniStH",
  "key7": "3WHR4zVrtwxe8wt79JU6CjbMSWjeKBCD52DYgLJgTmbr8BYWxE1fCaMhzCBrWY6LA9pKodMUaE6ohD3wfmBsCr7h",
  "key8": "3jN35YEcseZpTvmi7LbHZ7SSDSuVSqcySVh4ExRVyUGdL5fcMvG9urBBVSHRAE6UyikXSkMha8iaPRAQvFSgNBEg",
  "key9": "3oXRj4G9bVpfVz42qXUMM6FunAYH5XJWQkchNkgCgzmjb7hHgqfvDqteJKyDD7HkaDn16AG8124Rm9Z77516ZDep",
  "key10": "22RQp4sN3c8bf5D13fbSyo77wtdqkMcaQ1HRNXg9QDqogB8i7rykr2do7xSG68awJishTp1BbXSkAAqcaZTfxShT",
  "key11": "31tLZQ8HTT7QmYNbgzAf5vUSprhcy6hC3RFRQuYC1jTTFnfjAwtJQMGsiAgrqs99dS4Km5ChJPfetejBgWqyUYCH",
  "key12": "QiPBGJpeNAZvrAnKg9XGgQGwDtJ44SWaiKnAygoxY3xszTLwDo32KrWUqtjqWUHZuTjF119rBQY8ULLVtWCxTjG",
  "key13": "4dg93t4bgAREs9knrZFBHKrHAhUGykdCeyJ383FYVeqrfZK2ZmAncWqwLim1MhgiJC5z8YoQarzESj9DSQN4Mjxy",
  "key14": "3Pyit7v6AAPJBYAbTxHkX8pagqRv6b3FXWfExm4WRWKZ59D6bnLHL2iNuZ4mKSB4TRtR6jAjxkXTNoBpTg4fN1uZ",
  "key15": "22rEP8oCkZtQ9LPfXnofCRWBh9uBaTCyAwUGqXuzC1bKTXeevW4GX4XQwhmfDDaoGx59feYuqswzCEtnpdkYNoPd",
  "key16": "5KkKnUiFGV4T5dRw9mm14kjmrSpusfWwYnqWrTdx5y2cgcLT16CnFuR81Td1TiMGXGwnYD5YqPzTtXbkJbxhhHJh",
  "key17": "5qC2BSEYEkjAJHLj2jvLY3ecszsUvRFk2ZguHVxDeNDAZKZdudbxCJWyo4podbqqP7SoZVahN9NS2E6249RPC8qE",
  "key18": "3qSpVjqTRY5cdXPo93gzSEPL6pUNf53Cf4iN9Dg5D6ckAe5vxksikPNY9GUNX6ERkoMuRsZTwqG7PkkicszWjDF3",
  "key19": "5zswEFJzeK1Pnmt7RuGXHzq6VyGuGnvLFecwFiBqcp2W4Dg2fHk9Nw4ytsNhaS4DdfndQiTkx21MQYtsZPAF9T7E",
  "key20": "4Evk1V6H1iWKpDivWyn6rKDY25WjjRsoco8aFiaSQgt8iVz9eQ6jPs53J5wdWWpGNpq4C3szUnuu2LHsVUgwcmrS",
  "key21": "Q5Qf8mv3sTWfDn32syU9atkjdYCqCzbqmT7e4eST6hZTdY73uHfQFpczUaseHbtAKG37tTiTPUELC5pf52aMEXF",
  "key22": "4796AofWQNJUfPF28DUSLSjdu7tVeoua8wcsA5fZCCKz1eBkLeVBzfH6gqr9WbTdY3hafkDfQSJaHnXe8FaN46U",
  "key23": "2Xk4wFc3yzqS6aebNqKAiiPK98qKqUW9Si5veUwRSZokkdYrnnZCckNgdJnARRi8iyVpgiyD2TSmV2myaTaaV69m",
  "key24": "52XawsL1zK79S2ACV7HjgbvCPN97oFtB9bQcmGoxAbk2hkHwTioNNBGPLfDHkUEWEaF1QtbkcZzALsP9KKHxUN58",
  "key25": "2tuYWQ2HqKdnKTJfkijKg5BZGBnc8sWCzLRRB6PVNw3RfrRJvpwA2VYcryddmWuU6Fdroqh8syfe3uo2kRPy8KN"
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
