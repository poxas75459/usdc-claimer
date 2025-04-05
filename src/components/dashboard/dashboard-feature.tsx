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
    "2QkbqiCB7LKGp4MazZGk8cdRYhKx9eGabqSwH813qeAAcaxzrFkED1akHR7mQs9hcPeicaRx8wX4piuRRmm5zZgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hEua9sm642KJVTykec2Dt2PMgf9NTFFkvWrAxLXe6tArjTtSXJyaFqh9wT4HqRL6TX3GPGccpmXihwtLqxmjdpR",
  "key1": "DFPVWr7p4siTPNfmuAvCfrXmazfr1jpnt8XMBwVayTrjMnRjJUd88G8P12YdB78WwGtUy1bSKupvQVrF2vzKxRb",
  "key2": "2o81EtKuogXh9YaLSNo8bbkoH3q5HRx6aAnuq2ACVgfzopvd4y412FfbY7HCmhTCHoh8UEnHR83a6BoHbqQ8a7U3",
  "key3": "3qEoYSw4TLHLo22U3TeSQgMbAgP1y8mwYi8EdLE79fskJPvwj7qiPXfBRH9fCj5saBxEaHjvXe4HoNGmD6btuVbz",
  "key4": "3vR2Y79wgVxkyAVjUW1Dh7W6UYuyJSsVZo6jFuwDxwRpWhvm8wBVYzZBBXLJYXJrchxJwBJKjsJ9ZYhGL2AVQCKM",
  "key5": "5DL8n67SqC2KPVBzVDDxj4xMrZBEWbLAhu43c6NwV6ePuNuX5BiRd1fokqbXW3zJ3TKpQT8GVqy5ieJQ3DVN5SHV",
  "key6": "4e5E4rJFoHoQTdpRC2nC1oJt39zWLo8xK77UwKhqadVYyo3L7TGHCnihDjEJmYqg9LVbTucH4sNBBXm1J64MP3WY",
  "key7": "38dThQ6C9rFbs99zh3qtsgU3kXP27xb28mjzEkcBXixAMm6A8VF9GYrK4AZdxAHjBkGVsPQymLY7eEiUUx12qrGp",
  "key8": "4dQDq9kfWmTUTd7F7a1S7bq2n9YDCv7XsH7VB41oV15qRTEejQxyeE8G55ceUtyzhn6E6PzPxxhtGsqQDFs8Fzjp",
  "key9": "3SNGkRXtJTnL1mnXRh6vUoch5wobEd4qiRVZ84puxD1Vzk92iVASyumDcwLKkG85TBVJjNq52938NgFVU7BhJyst",
  "key10": "3J98P7j8SQefqWD6Pwe8RJitwtTH9q1mQ7YPZSU43rzZkzxWjUpJ36LS412CjDUfTV3b64SFpM3KDgHb8txHPdEU",
  "key11": "54Ckw4dZy9kEFyH1feoo49N5PQXFLbJfmNuFxvKFZ4sahm54tNeTQDtABgVT1GqvoVPgWwcPHLUgZqc9gjHSTuMy",
  "key12": "3RhzhD1Q32KM5oX9qGRQwRxT9a18XhC1u89igaNa5zNv5bw5M12uaAgACDSgYWRXb5GhEaYjRY82gKWKfvdP11yd",
  "key13": "56WKRvtj4kwJjGhDaSJebZbymByPYbM5Xz91rxwKFye1cTVcv9TGgccXob7rRV26mdxR8H3dW6vwnRQTdMWj1sUd",
  "key14": "1U38MUmiWZpbfYad1EoN2P4MbET1TcU21Pecaq1nqd9BpTmRA5Mnvj9VAHqBFNSDdxubYNEwkMXgnGcgAggVpTN",
  "key15": "5YU4GGT8ZSb1jHU8zwVcET4bghwHY5FTQgPjPxH8qbrUpZbubpBQi7A2wAxfHwHQiAoJRT5wacGaBWDHZGMSzsTQ",
  "key16": "3pJs63WDiTmcNSHpj5zLmzXttxiykmQ3fT1QsXot9Fnz8WL3eFtmr6ndLVarsPnyhoiX5JeXhTbE6tyQ5ZP8NjN3",
  "key17": "4V7atixK5eVbfwEzkHK6H1QuVkohDVchTMzr7cC7oh5MKEjo6sFLPWka1cuFxbxpzH8KGCejxRAnyW3wVPKrehsQ",
  "key18": "4LGidz6Z5rcRYoyaHgAijrypNPBQGmrdwCT8wv1V4CxDPpUS39T7rJKxb8oPGDUd9xAn3HGqvrCvb915AExS2QP1",
  "key19": "2hMdW4FXTFghRLutvdZP6KmQ6HBNDhYXf5QFeWeCPdx3jcC7AjJzL74tTfbhueP9F9ymwNCEYRyWvcYYRKZEjXQT",
  "key20": "vB2QkMG9yUkWxmYAgGvymUfcnQTGGMSEEY6wpbBNvAfFCfPU2HuQ2ApGSJbhAUK4ytmefi8A9PsnwknE1U97J1P",
  "key21": "qdwzZKGMXXMe7kkvALnzJ4DrSF21ZhxxCfdXXq1NLkAB2PtcucsteD62HeTELtWEmR8uWZGoEHqDAH16uzo36gS",
  "key22": "4MYy6BKWRqJmxJY2BdEHmfkm8TNJ6C6G4wNgcbrtsK2Gk78yd7MyiuXUF9LjULuXYm4CAJabKnufhuxGWW3VTrWq",
  "key23": "2HdV1JhfB953hWcMKYtJsJQoyqDn8ofU8fL1QFfGP9WrSTYEBD8QWHUkNZc9GXiAHd27SFrNdmb18JJP2GrC53VC",
  "key24": "4iKN8gcxbgmp2HDdLqXWZWnVT8Mu5FKDmG99YvwXgd1a4tj6s3YymbMaeRaWUo8A9dxsjgK46XMsbAegPAc1XFjd",
  "key25": "4XwkDG9sSiqgBBjz4r43XadKUE9mSndzbxU7WYq3xxwQiAgkJRCp6quDTzycooiu3ReAUUbLUWuccqmqdsnQWqvn",
  "key26": "3qzpkajcYYgmcCPYcB5MpKrBei33S7PTKqxHEPKv6Djr1B8cFhJVsmWbqrhyffo6mG1rofDGy4tLrozDDaD4jsvt",
  "key27": "2e77eN6ywF4KS4SDQrMRyRDCrG1GCZtgnPzCtoUoyMFBtvHXJ4pxBD4dkR3yg3wsibojobPRACSRTAxMGxhcNtrR"
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
