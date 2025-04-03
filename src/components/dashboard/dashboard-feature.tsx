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
    "4o5tnkM9pU7obCR5ZyJTHaZn5SeKbDebvqPG3YZwczofexaATgdjPThr25wfno4Cs6BvHCW7ZSD88PRAWT6VzQcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GcQPAGz9SLvEntw5ptMcazU9WAUUmHdWodVUrPVrtuY1VMoxto8L8REaVTi6DXJYKmJkbrR9fmB1w3FKLzoS5Pw",
  "key1": "21ydqdr8NdKs8g5eTUE8E1yUMKaKVy4BU1RG29te273rH9ETgcTvjqCGBt4p1gnjYiqkptxawkmaWoQdj9asJCQN",
  "key2": "5uLsiRdG7kk2yuB8GV49mCoaY3BtoCj8UDcZEtkgUMALd8iVd3ci9CtuNxHcT5LbuLkJtGak7Ggz52ssufndBway",
  "key3": "5yqe2emXKTFoY7YDLEhVVpuKXuZfo4pwUioVLHNPMY3yf3dn8TtRE6sUBFYWqozM6j5Fwh1SqDWLASZ8FNEaZrno",
  "key4": "4XkZSyaihQmi4x1igW7ARKKvwW27sHe5NZ3e5WmhKP53RJ61VFCAZTbxi5d7JY6Ce8uY4vCgrJKdVkiymqEoARYa",
  "key5": "znJcstuKjFnjun4q1TPNwscXUzJ7kH3HGUcNg4ZyTUHvMUvvPKRjATZ7WTsrSd2xTHUuzoKHVj11rGxAFaw9bdp",
  "key6": "bR1uHwzB6T1DgVaCeGU7rBnEjMviEdfvQtuvogb6cpsuehbpsN93fyy5rurQoVkGtJ2JRT659EByyTzmG5NMCAb",
  "key7": "3WYH2PZ5Aw35LMh17JJiABNrMJdfad27Y5cZMsWzxanYSUK2iZHUFLgM81n4r2irpGgPgUPmDQb683sbEXpLxmY9",
  "key8": "4pSTTFeZ6WnvnoxAoTfpN9oYwtooNbx3kXpUXR4bJDF7QjYuQcFsWsm9kUkKk4ZgtGvQYswHtdiQ8tQTq3rfGicp",
  "key9": "3WvjBWLa6LuByj1TLYwtAcrjERHbBCKdxyPm4wcMAQBnfDrYavbx9tQ5DaCvywjSuT7CiWG2WuSF1jXZPmsPuLq7",
  "key10": "3CiqZgmDftuD17qnPDaE3CoDeP2dEL2Ze8mkcKa9KrQufrUPogqaSYjzbhj4sGZezDKYvnDLKT3vAnKij6U6Kni8",
  "key11": "5BKjp458gwBn8XrchMot8AgmbyUD4xTjd599djbYLEpCtvJv5k6UBRtFvyQ9nqBs4dNHwSdPyv3zk1gGi7gKJPSb",
  "key12": "4zFbih1qqshgNgnzEqB7EwfXPD35nRd46YC6cTBZvU787xsFbB5mtR6cWXJ16gG2LKJQ1trvfaVKih2F1B911Jcj",
  "key13": "3a7BTSW5HWfcr2VpzNAB3AXmHbv4D7FBXnvuSeVUnAWZtd3nLLjUZ2x8MUcLkDnbTMamRcF22AhKaR3uAGJjsJwb",
  "key14": "5paAUL2qTn3JQDNJsGNBQamqWojikpvTuA5zoHgzwgr1nMAGgr6VqH8GRekZ8LdNG3mUwFgS9Qu2PZZaAKNYaDjY",
  "key15": "3m66NLvztnhZhxUSHbGpwNND1DHGBecN2YoCMjtDHVZzjq2jWn4vAZYxurevsU9ctrVtK2UFZBNiN79z6rcmdw9C",
  "key16": "4WQLDTh1cQq7CVR9bj2En5UhrM6oTj3YWz1GCK7eUipXKXy9CGKT7uQcdcwUNXiLPTbexoFJpAfNFvKG1aEjhp7k",
  "key17": "3b8aizmfJwC7S7WwvWMWKz8SfgeMeh2E3sdXsntRnPNKhN9N4dZ6EasyvGDBsaajfgEj3xTrhANYYfN4LQUAYubC",
  "key18": "64bcsem8BPN3179UrSB1WwLz3h93MJeTaS7QF4e4ggLhvpwAMYJKVxZCMtgMTW2aeqLhWFZWy8tgCJN5dvprYvr9",
  "key19": "4i9HRA9wmUcoXdnEAu9xpgQX9qPdY2ZhinDU58G2CqidNTVaGzuyTCg5DfoinAzAepBzaJ3a3rvgRu4heDcCNLxg",
  "key20": "39jr6Kp9UJnk7ntvEKoRfoGdQdAyEhejiqkhFrg2XEc7qEsL1oX7Mg7jSrZF3PVUbxiMXXZSeega1wpi5vyiXLu",
  "key21": "2ZaSyZRKYYREfBSDdo88bpu8TAPr5psZqchbevUtfYJRCayvayTjcCsJKjEsbCAVfyP2GvzCb62EogXMNkvNwD4p",
  "key22": "5Hdmsc89ZAXbwF9zSieJ8sHETNBdKzRSrZJVUKQpHQsZ5q6cVUiW9oi7P3pEEsugNcdYtqfYbEynWk4Vsj8X9XpE",
  "key23": "4tJuTcYrAq5ngSpEnTaLcmRg9LH8v9vX87pLtfTYt85yNcfqko9DKSgxLMMNCv7bUmoWnwwPkypFEhaZR89CuGEM",
  "key24": "4TxwbRjwxKvTvXZeqYFbSS62jGnqoHak1GqSuFKmX21e6d8grngq2kRuKeRrU6syZZHSH3FoEapnpNgPaCXBU5V7",
  "key25": "w9HZSAJNKvjhPmVyE3rXs3H2uYHXkrWvjjLbf9zEnBvFmqiVDGGHzFoaYECHVXpQdHJESFA3Df3GfE9TrBwzxSN",
  "key26": "vmPmitFAvUjCxytR76yM13ZestVsgpspiiqChuWWsfY5YUPCC44AyoPXrvbe9EKvdBkMGmBXvLcdKqjy5U6fkf3",
  "key27": "3jMH5eEP6QC6YKZN2r3XZVcRheKMYp7SD3NwYz25xECDAbkxUadENcwcriZQfxuTUs4sjV2d2cWdxE3i7V8DsDmT",
  "key28": "5o73WrcDpoxim9WmjJmU8LQZPEdXym1AnL9vnJbJ1GruvVbMecvamGAFZw2xzQkPYW9PrBnzgjAM3SfQJxaBo8e8",
  "key29": "4phtCzRJDHi35mGX92oFMHU4wD3t8DnUrYJ8Dqn9LUGSrU5MWyZeE9gdpGR5PQbzMyBaV1nDHYrzukP4KAmVXEjK",
  "key30": "61GJXoZP8sUKeaTxknrcYEPQuAaGSkwK4qiM6wPg94K2pWH9ocnDtBih9EM2Pg8rK6mdw759UhrPPpqH1kSghk7S",
  "key31": "5UAmNPLae8ty92j6Cc8XJpTX6J3rTLoF9nywzoc69kL6UTjF19NmPxjyRtxEL5iePu8HgQ7cSQa47ehmVdzQvYTJ",
  "key32": "dnwk2SPG5X4PVwK5B5W1YSjUCUbcgHEGmZzZHobfkndY9CJbryW8fxQr9RRhFExfN19HCuhWZjfcqftifxh1Dfa",
  "key33": "N2Mp4rnVnkxGV1x2UwsokCvEFw3pFeQU346AqdEgXjQAVtevtMkQ95g5TLTNEw3e8bSZQyx4c9MZpaipkxGqQC2",
  "key34": "24x5tuLSj1cfpwVh2GWX8TgjXMJyFE6FEDgA5op2vu9YGC1xm1YrWSrRR7F4YTQfM1TBibAVP1rH4hHnmxtWteqn",
  "key35": "3rJeewmLBNV6wBHBqHAzZ6DQrmzE5v9TzkgrN4yZTCgUBhwEX17WYa3zg6ruuaGs4pjzE11oQVMDZZQ7A65B2pBQ",
  "key36": "xyEtMsA9EktLCx85eRfdUREuhh9mbkqYb9L7SMEn9kzf5qScCLbAXPo2WHkRzdux5XLD6NEKZ1f1SvEyaDRbA15",
  "key37": "22T2SM3oQVTxwZLwU1zXpXJiTvn3gjZaF5NPuPhRAeeGgU7dgY9MsFh1RbNPy7PE4GCUGD6Nqxmbfmk3BiadqATK",
  "key38": "D4xXNnbgT2PqYPPHWoF2TkLeKR59xPG5wSbyCEtvmhydykmEbVDridYQgQ26xAFhToyYerQUdLJGWCiwyao3Q7T",
  "key39": "NqMv2dup2eAzjBSUSmmcr6n9hM2jGiNTbe8PVcY1goVPxiUoVyL4onJG3AydJBxbuBL5C4CzRtajUV5DuwQXTJq",
  "key40": "5Ath9VJ7g1QjHnPaNZJzVayUwM7eVx8ekTTkTFFZcrRQC9QNrXP9pAGV8wJY2hXfEtV7heo55wAuLMPNysoqb6YX",
  "key41": "3MCh9Qwx8FMNUHt7ECgbfdU8TL5vCjjeFsQykBp8MxRg8HGyuR9rus1EJXYgGbj9n1qkYPdD3UqKwL4rdADpcdoF"
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
