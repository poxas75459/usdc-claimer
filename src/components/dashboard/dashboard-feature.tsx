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
    "4YFXj2xPaduyVsVookuTnMPWKqNCALXrCVZBNEZ7s9vBijshZyqGrcfzYRtn8UeRSasFSGq9gKimpFrvNyJZCRaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZKEqu9xGWxbDzSVipFYtGTmHtDSnqyuRBHS6NreXrBsAdhRsgF6izmWTxVofjhNJoSqdisVLNyA3wftU9xUTZZ",
  "key1": "yv9sUhcF5XASH6wVG9DzDpAZ9etAzLDBmDn8P1jpnzQXo3Neu1nTK5fk8nkZA19JQo3mVvabEfDSTB2BR6FzN7W",
  "key2": "4JJfjrkcZyEBtsiMnDayeu2VpW9Qn67HizS3arR5vmqpd1xbfaamDMgY7okM1WVg7dgBS18n36wWD2Qv8rEHK9L2",
  "key3": "zeDvDdNJeCwbYumspxK1VCovCCjfZ6u9u38hN5hstfamWxNQ5E3ec2NKeQdWrwv2nNLxJdLUCwyJUa5146DruAB",
  "key4": "bmgjN4nnEqnCCSZYLsZfjLwgdCJdBNbFZDSMmp5oVWMNTsK87DxVjvihYVdmg8MTfFtoFAHAwwQNZ99PQQKd5gT",
  "key5": "49MqF9yFa5X5bGaULMf1N3fhcUzuzrFqiW6wN7NE2hPQ6h71VSuwYGAYW1YrY9EUUdkzHRtXC8xmPheFRTFv3ghm",
  "key6": "29rTcUa1z8uBsYYiVMNvqQKrjQHoLqjCJXV9tY1bA6iLL1UbQSzACGAK2Z9vBHoHNni6NHjnWxW292b9mwHmWosi",
  "key7": "36D1CWG4GUan98PFan1FjxSoevsQJuH2xLBZCqDdB9vcL49s8ndm3UsuuHS4EVrJd26sPNSdTdzMcREB4LNJh7UC",
  "key8": "56WbCGRSMCg9AGDn5NMfPd2DTuxfLakhGxkBKKTEqoF5kV9BUYyejmF4SfjkMKF6mmke3R3YCzKj33m8nWU8yYyK",
  "key9": "2PiR3RSHBXYdYdSNMk6u91MK9vDer2Hd8sfgdTpVJcUvq5e6RZuCBAKkDhAi7eoZvW2iUe1GGm6MdJPrnKkdP5ph",
  "key10": "4vRL8G6NSqkv5tdocjJ6tULGnsChQAhZHtREHJi5QEWg1mpqbYuhSvDDREaTFf4TanyS4EkG1ZEu2FUKUsX5W7Ug",
  "key11": "3XimsqTScNRiMpLZ27vm3EGHwmTkN6wGbvPT6w9NCBX1rP5w2X9ykahBDzieNaLYHY3aFQbj6Q7q3qZ3uMauc1Gt",
  "key12": "2ZkGCbXaVCg1G1QT3WyMfZArENtkanMB993m27KET67BVRrYRSBWXY11SXrTncfTM5GBL4bPCe28dPzj3oyWam4Z",
  "key13": "5XK5wJTdeZzFesHShGdDSq2LTzTpiKwCWQyUrDbR7MPhMdA3snyLmF7tAmScDQ6VtsoLUZCASyk3758WBAfhikB8",
  "key14": "4VSTULq2MSiptbAwyfRnqe7C4mApB7o5fFpZBTumvJxNZsWVf32ADqKtCWCibc5y4pjD7MiwYrR9uwLcqiBprudi",
  "key15": "4tELRfR3MVHQHjDk6wAXfGCh2PQQM9vviVyAErA2yv5ioCdvMukYMkfF2SoN6gF8sJ1j23dAouZGdStm6ud8GX2j",
  "key16": "5EDy8R7DrGbbfo1Y4wDjmkcd7dFKr9EmAMvsfb7ah8YxLbmp6DNoeBNxBvdQhGGR77vmCxp3BcfwJU3LgdyP6u5B",
  "key17": "2pwrJiYWkh4fm8fqRq43u3HByYyQW8irk4opA6hRivfkYaquEjfvrsdEUxxFWmWCcwAwKfTNq1xT3wMWYEaQQyyM",
  "key18": "QMWdYzKzWLxEwAb4Z2c4Tm8RC4YsYCEdWQg3BmRKFGh12S2xVjKn6zjxBKeUT9SJWkN8u6DEhffwMMK6ukyPfAq",
  "key19": "3FQP4gwAXKhtpcZgFMtnPFqjntBDUuPPwHpZophsL7wjfLZ2JKLQTjFtkTP4AHBbN7LuryiFJEXdhpvEF4n9tnj9",
  "key20": "33yft7qYibnYTKbRTXxx7f57XKQaQEBKGv12oPB1jLjFbFE3ngMwPE1bS7CmMWK9Nau82ufXXbKGqycge7zxmZ3M",
  "key21": "4TeAPaBfMCKLrqLiPDvxnkYayFnif5cLA2BrRzkAABSgnjTKHPqzuHGQF2YNXEfMDoeLGgay3ZyL5H5qoqqs6nyW",
  "key22": "nu4Kqmbb1Hm5Dh9AcefL4Z11ZExuMMqTCmHLMudEUCLqrprqVigG2L5oNVaQVz1C7gJvPsxbfxrW4uKkyQLgeTk",
  "key23": "2z87zeZfHZ5AqTzgGP5VeopCo9VGNbqubvu17KnYRPTx5f9WQ1f4FeAqcEme33HSd4hTPZJrGGCAEooJ3Ro2dzp6",
  "key24": "32iAqFbhkWrkuJZVkzLTzMkEexdsoJ8XmhwwXQnAAog95beayfDBgviChv91Nyf1ETetJUtcbLmWL5XRsEAE6bQx",
  "key25": "Rs4L1TAVygvar8osM8BX5U6VKmcsPdZ7z3ZMmmggxXbMsCUiVmyPfKAM2SV9dizSanABGZKckvLJXqJk1aj3drU",
  "key26": "4hV836t8wbrENUEVnFkDTweaRp9XcHUUfZq9hqTZjqcgot1QiJXjQMUU6ay4KV4Rebn4hceSjtV6haCoUZhG5Jqu",
  "key27": "3VKCwcRrD6adH9n2ygnLrYkC3j6aewmvmcaGa2HY92MZg44rTyuZpMShaAva2vcViLGLV8Y9pmJfTboAhV8zhaS7",
  "key28": "4FvMkuSivVBjDGDcRs6GjBRYrBpeZ5UJpsUjxFrPho3TBPHDWoSMgefwfvvX6x5wqJ8WKXnW4ynEYjBZJZLLUqP2",
  "key29": "9QA5Woq9vig3VbVcpAaLgE8yw55uecstkXTYma4zHDG8ccDJ4XuGZG49VA1R8m1BUB5hgxF4RF2D62aaARMcGem",
  "key30": "uJbxUPsJsYFBg6q4twhCkriK2oZUm94CoJqKZ8MZsUiDgK9zm9PwbrwvMrovYdNc3f1X5DbNFE2RtXNiVcQWAxy",
  "key31": "5FFZpNwUYXZ5zoW8upBvvbGtnxb8PYVL2cu64hRxyUL78qPe74ZhC1n8TNg81ageCcouQTRJoi6qjbUXuNXyvD9",
  "key32": "KEiYrYNcy4T1tsJzQ57P7xAyHpMeonokxTqnrAURLe7JKBi59YajPo66bQEzr58RerBmj3B3zdPFkDBX67MVV2Z",
  "key33": "jpbNo1x9XyNPWbRyKXbWah1yf8NtkckiQH39cPF4Dwj6wQQyUqzSLRvcvVcxVRsct5u1v4Ko8ZJYgVVd4VZJRY8",
  "key34": "5UxM43M1XqByjnVFCAW4zxPfp6bqahQzaLyNyYVPtu1ChaLHVLSJFgmJBYVCnHzX2MxErD7hyz17EnCwB8y5iHZV",
  "key35": "BhcDDa2nf5jQL2nT6hhX8rRtsXkJGyVvsbBsBDSQhEmTuFYaFAHtdet5ZprxWEvgXQECXijtWuJPwPgjtEnxS9e",
  "key36": "37XgTnSt1TKWtitmPFipTMALJif7W8o7D1YiuM7RB6DWwXrW2i2BCEsSRtPL6oB4LfphGvWG3hyY5ncMB9zNVPC8",
  "key37": "4pTLH5R57y2HEbveS2w4P4fiQ7W4JtRk9x9zQyDwHrvPVUe2arNzwGBks1Ws3pSJZMXsTuGpm2tVBeX39aiqqmzX",
  "key38": "2rvYEsDsz6wsSfBtoVBsRKFaSUFgpH95YFzJzQdBWAX1KxPojA658C77jMxGNNtrKpwYHcnPVFL9ZCQK2iLtiDqQ",
  "key39": "2Dw3iQjsKGdxzDKFfy5ziBM9AXvFNfCeJ5pTRd6ovpEWRYDvTAUjW1NFhU5iFwYT11T8Mvis4SyMxdahhGGPaLt3",
  "key40": "42bhxRATtxw98VhEZP7DnhpSyNRYQ1zzZKy8bdLD6LA89yBibmQG3Tfai4YK5fW7GgXZsM72qvv8pzSrYtrz7rg8",
  "key41": "nDeyr1hkir5hQHfNjKQX54RkyRQ5VPugGfjU1v4HYBfsmv4vL3XsA8zEAPZprqeeEVukwZZbQ3W3379YbxL5dN6"
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
