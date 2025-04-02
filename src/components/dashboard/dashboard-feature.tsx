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
    "5mxSMtvsnWJ73pSkpakxQJnsKS7Sms54bn2MAJzxGqEn8gvoPVhasvbkyTxBNcJX3MXEfBoVbANLhv6AtCt6fSQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9aNqk96GqTCEYFxyBTHQDkoXEQmyQgsBmDwWJqMmgWyU8SepwBExHSkU4cpQhzfCvgmiZq3G5kc38xBapzrcuh",
  "key1": "3CqPZSykoaMNFcB9Dp3BCrWQHtbDMGziRS9LULFMpgep8JSsHPw9dPhVxnepVGAzZUGVjBSAPRgRpUv3uVzHuZRr",
  "key2": "5g6KWrop5TBSnnCCB8UxpYREkmPLeQzEAKHS4gke8zF5UKcPYo499WEp83NXAsyezcGPw1uxBDXuc2CtEixVqfdq",
  "key3": "rF6xo4ssZ9JxpSbMYDQyrgKoFqdxxE4gBuhWg94NdHtFirhJ4EmzZt1YD91dZJriXdTzDUD6vE3qkDwcmZs53dr",
  "key4": "YZP44Z2Nd5eEJkhnTMVDJ6ciPyzEdtqmKbFwFipFsknFAtLWBuBw9tzZCteSspYNVtv7kzuCayn9NpPPJ6Ruhmk",
  "key5": "4wVq8maT1pR2cvSQsgUUmbwEc67WqaFYUHJp6VqgCHXYxGo5USRNTW3RWaLiRSadrVNTZzXwEjoAj5msUPwcPg3T",
  "key6": "2J2HjoJPWjvzBBxiK4cushDeu3LDnQ5WGbPXGHynubpLD7FQfEQ5fLB6HrsFoi6APhCGbyeRPtMmeg7inmN2zhSt",
  "key7": "4SWLSxPDg8rqMWSFSi5yeZDRxuYTbVLV7BwocAE4JkdBqGyVMnYFoiRiVheWSRg5DaAaBWvAvj318yAUqpLbp4R9",
  "key8": "LE35NitWs72DnSq31NNUpMiwpJpMSH9XEDnuVx8FthaeW8VE2ncMN7qr12ow8KA8o4iPr8Z61vg3nVXoqXaSDwm",
  "key9": "2DvcXsP7NPXxZCMxXFuJv6iuoRM2r37dEQmJrFsLxwBnsq79bgYTLXGTYpKrzpkjJH1oX47M4ZihWBcPhgAi3oiv",
  "key10": "cj3bj4PuEHGeRBQteXnaMz9ozcEX2HgwARfJsH8p77WmstRKiWNkVo2DqZU9UKhZav4rT6jfk5CwGdv4GoJqtkx",
  "key11": "hcjL5rSAsY9HdjYyqWrG7HaqHESz4SZb9hFjjihEMQUSdT6hwLetaCgY9cGHGq22d3uEFHTzSiuABLjNjRUezq5",
  "key12": "5qhuCnAHdVrdaA8FMr4W3wfbXd2NzyTko5LB57pXHqP9UDsZB7bjTMjdpXrizC16irDhPN88dQtEBR7GLG3m1xAF",
  "key13": "8s3K38qXKqtnughxKJpGdbUnCbXmzMk6o35maHB5yyVvULUb9nrQFtEPiAksuE4EmWzjcNG7Q9Vmnvh2NhAAFFm",
  "key14": "3AQz6FRVTmbBUFheQVum2zfUuZaJR89MaNtyErQnfWQYs94MjqK51o9RKVDhbZYHGjepfzwNJmgzKmJ4NYdirH17",
  "key15": "2UEwADBYYhrHfZXBaoM4rYdgj9kZUHowFG68e3V9wrGyybf9LLn1UFGyacUH9yqYZpebvq4qPtDRS7Jaa8gN3j2H",
  "key16": "3t23J7WV2SpqneVPsppbfVGj8JfWefBPPE2VH1CovKeBKNLrpd9MHtaowp1QgWpZLfPTYk8D8gSLyhc9Kwms115L",
  "key17": "3Gg3edHeHJGvu9mx3sSQVPb5P4avLJEJrSJJcpYZMoFFkMD55ZEASUe4FD6cuugHSRrAEV3rGB9rnqnkSCvAWb7v",
  "key18": "4b22H1krZzYDALotenvS5ngsXpg6DjiUsDMaoyzBXViKBbG9zxiBypzxqjUhF2NEHXkWwc97Kt3JMp5ciHTQ8M7T",
  "key19": "5dP5EfTzoRqE7T438rBwxoCNV7LxEC8EJYqAGKhzBBksb4xbJRgQ3o3R6XuNhEJGLb9sjtWsdJgLv1uQXqSHBcX1",
  "key20": "2Uq1WyCDdah6VxbuVy6FsJ6DRfECZLCb1Tr3UiYLT1muvBrVLwtmUjtrZpnBP8pJZPHARpb5M8eZz1cLETqt4uJw",
  "key21": "2k4r9jQdyRVzswSHHFxLB5dmGQhzJfHjBocW2ApDjNUAuURuXScgHLxjR23PcMogiN6JV4nNxwPTTnuDbTpkRoZX",
  "key22": "3sips3EikkK1JmNZXPpeCkaDUgbZSozZDUA8VxcUCwTm1XS6rnBc4cMyP8G7DNCmdrbe4xqHEhMxFNrDhHtbwrgf",
  "key23": "6553t5Ugesf4zyCMezgENuB4kjbccjJKeQXFVAtAq1hENW7Z1vA3fAHeyvoKcvgH1n1bKeQTkSob36zvTRgUxEmQ",
  "key24": "3895bg9sFjxRQvDWgWF9RFfYsZYBDLQHA66g8bDxGF2u48keEAYfkrx2LmMRum4haPZURL9BMM1XX3qB4dAaMEX3",
  "key25": "4BRQ4rjvkUhNjyUDdCNG1Hxpfa4MnBpnQBChUV3RqfY9gYCznh2FKYHEzpdYrw8KR1ghS4gFP3hKUbuymurhu8qw",
  "key26": "4PC3amu7ukAASP8VEfpjdPQqV4mG9ZEoLLGG3Bcj43BtKEytsVkHFKhB7FMgRvWzNbF2NPP6rDRdDkFPfJPq7vio",
  "key27": "cQo1k3ypm6zejMmoaopFYkhXTtdLPq6RwmqaUY8LKsDvZsqfX4v1TqNsymEF5nvZvV6ybi1RPYQXjMkvc2EANZn",
  "key28": "5zcnhaNDnda8v69pHtwhGzA25oSFprtk46Y2XwmMQDBnUF4KTsqQfRtQAZ1wMjZ786rLaKKfrfBCpogjteWqvj2H",
  "key29": "3x8oTMRAwH5K4BShmXfy1wP833xPgKJUDAZT13hrjPzgZrhrb2MAhavhvFa5rEJh1LsAP5FLZMJy9ezBsC5djRZB",
  "key30": "4cLbAWn2A6YRXf96eXp4uYtutYeY74TPGowiERh8FUuD1mbwwqt5SzqxtDJfmbqnYaFg15rPMbN6bM2urkT7NWQT"
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
