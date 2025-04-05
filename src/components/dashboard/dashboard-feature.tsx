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
    "8iEUays1PAdMQBUCh39xFGGuQRYCpWdGK91CQ4ujhZZMt1TkyUQxXR95a6afHAZYCRdATPiYhwvGF3iZKxGW19o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUyefi5pDLn37foLMmQKnDsoSpSRCXhBjov5V25VDH844gWPqiiYNTA7aMPEkVWEobdp3NazjCafn7j71jcQPvw",
  "key1": "4qNJP5MUfhUKeSPKAH8ScQwi2qfTWp2offsaETUM8XpFx2HwD4BSCUcewkhogwwrBagWs9YkkMuhXfNqFEDcM6G8",
  "key2": "gQatHgEiq43Suhi3N8sGBt3ApnPrD2wfBuioPe8ix14XNtpvN3a53zXCDPKCibkyHMZExGxNf3dt33FmCAeadhK",
  "key3": "5WTZhJLgZ7cNK1YHDVfH9k6ZiH64iwTNBSwKrvyGpe9Vi4sXFucYQkZbk5BynE3bPJvzLr3TzpTSdXtue1rmjCPs",
  "key4": "5jARS6TUL61abpqYR4Tjbvw9MC5X1gB2jyx9CJzda998mUb1eZJy9j9jo1Lj4vZwyMwo2vRanva7Y6zqGLR3FLQL",
  "key5": "L17cejRZML2iyTw9Xjs1jmrsXoJEYmBWRWdwGaFPEkME5ncxav9QfUoqSnKYx8qv44ckokLGGoT2qLdKynCNxmp",
  "key6": "W8VvbuwRJ61kWWCKk4yJCUga5U3atLoqLyfNMaC3vyGBcg66XiH2nE5gePBNt3uFUhEjWiiT2xUKLQJ72BySMCN",
  "key7": "sdFatfvgfahtfQgqmS6PiaBh1KSSpW59Su2QB9phfxuwjQyvRTrciw5F7hkDzHeHrFJBaobBMsS8D39tJVPdqs6",
  "key8": "XzettxTto2NRXN2fwxXtcZox3WumZHAhqcNNasfC2Lifqo4zohLfA8EKEat39gMBhVntPxidEhv5QM8R2y2sknB",
  "key9": "46A1RmWVzA8UiqjcmG1vAjzsauQsd1VQUzuueV7dehTNV2CxgYmUiAZ7izu1nnWcbcqtjDNQA3Xq43GBVGhJ5jmw",
  "key10": "Sy8CiwooWJ7VweTDwpBrTWrrAYhnSqupmBBdDjqAqAV6T7Je5UK6XzwS4gusFVosSLMmjXnnMo3wBL16eVgQWTi",
  "key11": "4HwYUHZ3Qo4DpXV3DKCMZ9LdW5Js3Cwt2NTFu3NjV57hwnWtfho7KS411aBA2k2UdgCdEnWUQoVfmWJvp2rzWKXW",
  "key12": "2dbBeaxgx7Rj3djxbqukkXKGffyJVxe1zVwhrfkUvELVwSXMDEcvjT95vHyth5keNxwgK6H3DxEC4E8DB7KY9DtG",
  "key13": "2AaLFgPcna7c4Tkb7FMg5MbKEQtokmPjHqMQsHYMDjBEqJWZVyFhcwZFkB763j7EDUocs6DmMuh5RipWugwnvpLz",
  "key14": "22sDVNq5hFf24sxa3PSrxiYG4vJM4qCeeCnCGeHhXmrLCic2S8Y4yKoEsWytK9hM18bXiQgvFFpPYv74wpJ8sSzL",
  "key15": "5K7vq3ksqet2XrZBQGSBgtnGzTRWEPeBKWGRyGuY7grATk2jWZqYRJWkZtDrJ2KUoq7BVEqha5ypEFgQsbA5FgDC",
  "key16": "5fRK6R84vkGc7bsUd7MHHQPVAutNweAmpZuLL7eVZWXGsYzUHHgqFUovazsDhW9riTdLAwqrhMuSRJLELnxACWDb",
  "key17": "4nqAwNhVZA5bTuLQAm5zvcQ3GqCp5NpKexdpXkBPwGuvuUySk6HpBawWEJzZWdPV5hQcGhLHxCxmFMvefWGysuAk",
  "key18": "4C9K8AzUaP1jsWuZUqeR7RzfiGrbFncMtM3nmTy8KKpZVG8QJg2uX3wXA1g7o6XVZr1Sx9ST9yzVwjAQbkKT4x3m",
  "key19": "u6qUfLxxPAmDy5Fwz7ySxgLPhVcKEPLGp8DUFyjvSgM1VvNgvaNdrdqKZbUWRaJ7Xomt3K192jF9jMyheSRs6RZ",
  "key20": "2zHASg5CUTopUdNG9ny57zj4MWHSWZ2zRX7eSjCst6RJuwoPiP9ghKAcfQc7KwnoRVensGtXv7cPZo5LJeC3rJqR",
  "key21": "CSBUPn9TqaGafy5oX5qxGaU8QTucFgMwHezPGcouA8AhHVzy37sovX7wEogUrRHxkJkbdHdasZi3NiPzcN1Hzj8",
  "key22": "3tMgBtaAhYkMMNUZWNLNrDhBbQW9hb3NUu3KD2a5J4AtadyiZfeS5ASw9wwB1JEJnbZAJZrcxtSennNQNkXnx5G6",
  "key23": "5wsmi7itHpRyTMVYWRMYpcPmE5w46ifbdXoCnSfyyurYVeBw1ascQedb4raqa4j74xjYjB5KtYBNK4mZzKMATxZj",
  "key24": "5vSksbLyaWbf7QErQdtK1d44KcG4GVzrQGE5TBxXkYLG6uCvJvPPxk3jnmqX5pLsDs4fdtCFju3EmAznJjSbHpd6",
  "key25": "nxAJEM7JHHDX12TjnzpQ2afWahgTj9dbH8b5maxanPAWPAayp6xGiCcTUcWucP8hB3m1wWfcwp4jirtw5xBPSYd",
  "key26": "5SbDqHdN68ibUqa9taZNDSdbc7phRTtyHdyqdMcso7L2piDEJ5xGY3wFsBz5KK7ZVpqtyUui7swsZhYbJXqJ8jiP",
  "key27": "ESveeeRRLo5uHuCqHiAX6mxDzg4zBVMNnA5GDJ91pjrV3eKb94VqETdLAi5f9mmbpvbpbdoZiHdLBgqo6z2vguv",
  "key28": "2sQSHf5EtyzqsAtrcHNndCvrUBhqqHMfubk8BEhu3ufDMHKcava43YzGKPcHwWQa7XE54a55zGE8rVLK3KCCqezH",
  "key29": "2rzB8dWcesQvkxz8F7TdCpJysXr1im1EjdvwHvWUQiGLz3UJJP73a6VPv4Jw9mF5c7tSs1re2k8Pc1eroJ46nPJ7",
  "key30": "bNHRn1ZXZbMPd5xFj4b9eqGQ5WXd5GbX1qvWVrJZ5TUdBuGnYsEK8KtFMvQPea24BjmyWGrxU8CPMmDH2AoL1BT",
  "key31": "5YjZZ7wxGLM2PJ6wbaDDfqZijUJPpRbze7zuoVHGwXR7J7R2TLc1xsxi5KQCXfeqVtQBfGd2xVBGkW6jzYLES3oJ",
  "key32": "L34YNzavPJsdi81tYhBMqEqrfNf37NdcdG397BUNj3coYrSPfsgcBmxs6t9q1Vzcrej5DPPoW6NAdEuX2Svb6ab"
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
