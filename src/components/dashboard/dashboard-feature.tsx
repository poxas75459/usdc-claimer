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
    "3V9tYNDZU8UXxZwZVEERqBzYzRshsBEyoaQD4Hj8P1jhtZ1N3cijrT248HHYF2DFQ9xWR1Qfrw2icP7Y5qvbfNvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "foec6UURXS5aptnBBtsVbB9xqESxtPTGSssF78qvg5zrezERSDYoEPqSzREkxfh2Ad1xmrZruUVhUHZXGyJYept",
  "key1": "3Xih8DvjRcczJymxyK1L1atUi2u9dCkm1YZFn7BLe2tYef8mwnuMyQZcchGBsXbaCdXPzA28hkDnZ1ESVzaKwMJd",
  "key2": "k6nZRmDRyi9t5EC7ZmJN4EDa6f57paSHzeKzR9Zk4YYDnQA1bp83QbWAMxv17BsNDN4rwmFbjGoBQtdJ2fM51ka",
  "key3": "43ohNf5qFV2wnm3X67m3yGen4c1erPErwdGm7E9EniLnpa3x5ghXCZfX96suJ6BLV9a37q9zivQJ7YZG5TgWe431",
  "key4": "5NGhvW2eUPWCLaZ6LiDrSwC2aNHbHYZzoo4dftKvVk2xutUzEANVKCQq7uqjuSqKM9V26EmE8LxKTAek8bNT39H5",
  "key5": "3PNttWUdwUdF1dZVqEhF8JwaTuFRJR53mq74VB13BSAUWHsNSZ98kkUfWJLosXtitCDh9x6ipdYVeGLi939Joxzd",
  "key6": "PU8RspFyn1eHsAmY3ZyNTUM5dSq5qTG44Ay9csCeVN9WYXv4mY9eTwBtXwqLeTRqzuJArxAnjYYw3a9Z9cWqoDL",
  "key7": "3U5piDE2iHMn3HidVRCGwSNwaqGFZebMBcmUZZSVaVoaixPm4jmqbnMkrpRVRzYdVBoTWZvFB2T8EavBwhHj2iTQ",
  "key8": "4Ntg7VYG6Xauw6MaKTmUMmHpkXbpGbsE8wVHPgiwqghMVAxqA1i7XFkUXbKxJPvDncKsEaEkBbhTwWfbKzCC72FY",
  "key9": "453ZadRSjTztXN4HxXJNwpgQ4763GS7PJNMaBqZPL8Sn66H2PwrsPzDCLhJG4WHSr88s2UiEFsr5TSKDZUm3GHr1",
  "key10": "58bfRjp4giPBiPRRYdvScXq9Eu7A8UNGgFEoKRiJL7RHUCzBdw3FXFaAp5NhS1odWfzLSPpMMEMys67ZFdrbKtkp",
  "key11": "2Qry5Kd7evfxVa65CGc1QquftNRZkLL578Necg667jBK87LHMmajMTffDEeWJoryHPpD3d7QzQfVyhmXhi4Ug8TF",
  "key12": "5RZBQZiWZmjC8MsrF1rL6egxtB1knXbK4kMNojcWUZY7ATwvZHoFa1M75rKLGsHL3Tmb1Kb2dpqAnrpmNk9YEuJx",
  "key13": "2fDHZjJQduLE5NS3thae3qWq36dd5Xj5kPeqeDJuuy7i3RMaNtZTUyRQfbBYTbdzBa41KGsrNDAiUumXTzwR5f6J",
  "key14": "XABE6GmukYumLwDQ9aYYHbqNdbk6MBf1zuD232sWrS3jBtfyirdKShHz7kKepN6mmVfxvtFeWEXmrnxsgpjDMAj",
  "key15": "2hS1kcrE89U5phRcT9ua69o5yYLjPAwDqhcDSehecPNLMyphLWFB7PTp1nVQ1yBtDwpU6janQWomCM1uUkR9dbTG",
  "key16": "3dp7ciMGPUxdDAzm45worQnNA2HxQ9dizUzqXeb5hntMTrFACY7hGgz7bio8p8YcUo2TDrVnxb8EqeixYbuLprjc",
  "key17": "3obcssamykC1v5stQsCwZ9RwF2VBvggBUq2yHpAGjrDMhj35UjDcRkPqU5RQnGGivvec6NHrEm4ce28iKHJEhLkS",
  "key18": "5iQzFea99WCA9RxqPqZWgFJgCvdik18CHeuMr1cyJMdr9gpLPbD7RaFkog1LWeTAAuMvyTrmVdNBPDtvBzEuqJE2",
  "key19": "5jBf3YdYmx5mZAf1mBon31YJ7vUCc4MoqzH9mxRvzJXndUkUSB5N8jSknAHeCMqfHCA5yEwfcsQVDrgZ5St4d3Y5",
  "key20": "5bvqoYy1WQNfid1VehcWLQmB625fG5svKh47Cjj9LG2ib1dyXAkTY13CFJrXRYbrHse5pTQtaTABaty8HagiKXw1",
  "key21": "5auBpDBTV61purs6RY8TnoVj3ArbuBBymPyToM39yfndj3FxM1P6LNEBDkTsFpaCQcvvxAi7mmPuZvoBiStBukaS",
  "key22": "w23xZPRE7rMgwGjV4koCngFKtBLcU7xptQr9HVMHH2qiLR64Tx1D4QWgy38wJVa48yHFyskRKWokY6CRGEZncs2",
  "key23": "57p3VKSaKGUCtUJMcJyVjRX11cov2zosKj3hJPEypxUfsoeviH91gFkjHwPQ74NgC1smWZhrzaCvqJ1LXHmGvDUA",
  "key24": "5ZvFH1UATwi4KiNshPc1AmqHtfDd3QUDjRQumZAW3UjQ59S71rE776jzEUPvED1xQMqrvMFQVvmbt1HEN4bzvg7R",
  "key25": "41z5onzmfrNkf8UGt1XixqBVa1qmqahoCaPHqJoZZAohtsqgHUizeUKMJkouXq5AKCuMkJq9PjD5iToSa4TpaTai",
  "key26": "FoUokbpwyCUZ4HL1Mu57DrQTZjUBjNtVmJ83hwyJ9pyKDnckS4cvJWMJFA8p18Cx9MEiSTNU9MXHn4HjHxGScRe",
  "key27": "54uCX3cDRWbDGhYZLeRgoSpvC2e63V4SSDLF3hQwzDQzQF2UbL66V1ozjfDLdMt3YUcpyQKybPeimLBxBYGoZJrD",
  "key28": "5XESm9pJZ8hF6y6x1LnckixLxgfFgJcUmZiBrDNQP2P89VMCbcTc4FYYekAoDvdqRYbLAQtJb13KSG8gNkmR7kpx",
  "key29": "66Jcmt9eECZQZutgXtyBh78p4gteBy4xHD2FCmKbo8FpUN4yNjtgybjHb8bEPPgZ2vobnafkPX8weBHYJucARzQa",
  "key30": "2SW6UFeHH6rCNoJVF3cfNYDv3Nq4mKZvBwmeh3TdxrjDnCZ1ip2H6xRyKDnEWnXvfTJwPUrSsaxn3vkZxrmYu3BL",
  "key31": "2AkqMqic5pEuaJqRdgnUtv5V3z8juTdP145edT2omShPa2uye2yXVfvgrLqbFbXwxbAX89ywyDB5CYVuqcJSLsYT",
  "key32": "3sERP7qcoetgw2UM37cibxivLiszDwvpztQY6XbHLzyf7HXoCBxGCFby8RgvwoChZPf8FJKRXot7gFduQEXM228J",
  "key33": "28EFo8yyUzUp2RZy9QMaGcpY5kZp1XAFb8dCj6vgDKaoiy43x9BwydBpN8xMaR7NhpMFPGZA4eCkPkNS7hcZezj7",
  "key34": "38Ro8nCXyTKVZzzEUMXzD5ZY9Up4hurqsmebW2kshvGmoBx4zjx4PhrQqEoMkfi6imwF9pmkTczn52mPWnsD7dz",
  "key35": "5jMbDB5Zkpe5CvW6ZdrE8wxqiJmMYd3ujKp6htvLiNUPNAEm6VdAhb3Fs5WriLq1AiwPQ5199Y3TKmuYssbXEDax",
  "key36": "2jCfU4smrG6vaEEdhPo7W2hp3hxwrHHsNZbhkYnESfbZGuJsSMgjzFufxmAaFVDzrH5xAj4NDjXvkBvyzREqt8En",
  "key37": "5Q84phLn2HaJvGm3vQNWUzrxeionHhDZxp62tThzYMcMF4x3J9wnyJxpZu6V9XR6kud7qKgVQ2i65bMpA6Csa67D",
  "key38": "39v8TYn5xfsmZb6kucn8oT78MmKZFV7dG8BXqPuQCi6edWHMoEJTu4jpG9ktLQ1kjg6AdWqfbJfxDr1rin7NjnF1"
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
