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
    "3HeYg3FGuPq6t3bb1tn1y9CefeZo7bcoVb2urEbMD9ZZ3RyfYDMn6Cw9m4nD7Cr1e3VquGMTh1YncEsWzBgS55k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFBdcsVZtnxwngqjRoX48s4KdXCSdKYjyxVmo2SPmekRLkWANpT9EX728qtRdwgKJUAymJu7AYNPeA3jTEEv8we",
  "key1": "4i67YB4JCxEXa1iQvNY562p18GgToiSs8Lu6XHqKpFUxd8oP34MUsmr9AuyQfq7GZHtjmHheadrov6hy5wJSaezz",
  "key2": "576RAkHCfJt3UkvHJdvv1JVkrZAzGnQvbh21BfibWkwLjnHCB3xJM7TdeLdaBateFRdeiwFJ6GhR98E1D8Jrzs6r",
  "key3": "58NzFUjJnHDdJUySLRf9dHg4nLedANPja72i4LM5f35aso29ghDw3QtiYde24aeLptamZHDZg3PoXkquqnHABPPE",
  "key4": "4dX9i1mkSZnKfdQ94fiXULXSDFtFfYD7wNHTBXjrWb2WnGc6iUaPoCm4bt9KoEzh5dEGxmqSiKLivGnJqCtiP2ex",
  "key5": "41Wh1rD1KiTzpF2Q7Yi176ik6bMxtGS7w6FD1yCD4y9oqFR6MfisjGWsNKBGVqdxibJGmdwzpZf2GswLLUvjs85o",
  "key6": "2eAQy4v3RTZxCLpF5VavaTXELFrcSesy2mnufk8ktfM4NGYvLRxFJ4hjyDfLzRJakRH5yrpUBaoFq1VgGYCb3JtX",
  "key7": "22pbiQZACq3E6XSnSZobwQH5zeYJdu3u1H21srnrPGfdbSq1AHmx1aKXXu5hoQ97QEZx3MSe4e9oupvHHUMzaHGD",
  "key8": "2WZxn64gZGpxy53QnW4rbgLodkTP8bc7pQJ1Y2GoKdg94qbacL7KRwdKQak8r3fJeJVALrV9fXMjNb5ECHoY46xE",
  "key9": "22PhsvvLNz1NnkWDa6RTSLnqoThU1u3JC77gVQ4NE9faJLL8SJBuZhvppRuBfiY7gsRQ7Cche9cDAH2qai6zUuP8",
  "key10": "3Yi2bjpMeAJNnbdPCcgNiqGe3iQt2zo93rDpNMV3W9mg9BsE7W8qubMc9RAQyPKpHsRMFHbueRLdXb2mibguBKME",
  "key11": "2WL1ocsn7tvS8HJkPJPjhc7sYx8tatibVopFpDVVrfpZhKN62zJU5DnrUNrN7812urcvntuMXapfgu1pXEDDcabm",
  "key12": "2XQoxf3iaJtraE8YwMRbzuufcYFKzWuGMh7EYCnC1tPwi69sZtKGbRnpE1BK9p9X28ftdNXwiPW6LL6JM3Dx64Zj",
  "key13": "3htbNy8ExyjZNkcsuAncgbeefKYgT5v3cbieyKGAqqVpYHvAYKtDZvq1t9g8vq83CuRMTuuatKntmEC23tANkE63",
  "key14": "EFqWSzy8aFTgVYwcjYRSkbVPJR3jiCRXqUwSAa7vqPTAAK83fUWYcZfnEeEUS7X9YfXLUAsmg34kpKzwswVSFhG",
  "key15": "4Yz7jRrBnsYqH98aCuvN5ntmvdMZEr4duHinXQLDZ7qhqojsZUyWaiXPbrJfyw1gakAxaEGRyA3iy8FUHXGbKuH8",
  "key16": "3vspLWZZBKXvkUGN51RpmKuxwshLtegoccVADHEsJTsDtV72h8dahPvkLcBaxHEzpM8e8JrkQQokTmwVVMnPE3LL",
  "key17": "5ULVDR21DUEyMovhFRm8ZYUpShyfcwtR9d6hFqHSYHrWca7RrxbhVRTPHhjwWcjrTvM9S6akDn3erCCHvNv6uwxw",
  "key18": "3sfoNWRAGejQYZaXCh8fB5KqfGY321Die7RJmabRBR5GoS9Pcdt3ESN3Sb119uTaN4PTHCDpeedvnmdAatS8x5DX",
  "key19": "4aZcTGJwNeVRAJrFKuaS7PjH19i9sqtk3iH6H8sLd4JHwkwHxj4L11HzrAxHH9zU55P7hGcVe7CuSrVZxW57hQGP",
  "key20": "4bzFwriBbC38BPvjR1Apz4RN53wKpTDvwNVAmFGRcL8gqRJ3Ln78EyHTeAMDM6mVBEM83D3RD9T6953cd4o67Ek8",
  "key21": "5NzJEMny14U2jfHE3tFqxAVgQpHRLZfFNiJXvLz5ycNgeNQWLGJwiFsTMCtgyK9z1kNSC2e3QAzFt1oeU6GFehbv",
  "key22": "2rzEVYvMepitHJvnYpyLs1ZCx82691RaedrmwVDF9czDfZJ6YmmLSDAVYxfJEVUq9U8hD61RhR5H4sceMHSTsNQF",
  "key23": "5MiiJvKrnfJvDWoD5ayWVZXkV5ggx4JgzyUN22fFuxeYmJq598LUA2jC7AXaVvB7WWAaWvXUFe5CXtnY1CxCmXAJ",
  "key24": "xAVhadK2KibizN9kpsJVxyekn2xAjU5oM3jN6ajgtsi3zKTcEbJsG5VhHAFaExEqgUvms3QaqYjbusGLxxcwis9",
  "key25": "gTUCo34UQxjs4VWf6tuB9BFYoQd2K6vKRjZCZ9zfbZgobDYMhBAo4He4HDnZq8hncz99y9nAeaaZmCAfJGnPvDM",
  "key26": "245WJtRJhuCZze1AzeJxhht6d6Pddr4FFFezzVLembzsTYGLqySG5e9QTuHSqTfsqPxECDhpenxhr964kKru2Xoa",
  "key27": "AecDR9mKEqDoxTnRiZASJBDWRaPxeSrs1h3J4bDTtDUqsU1JUXf4aKwAwxbZdRuy3bsdN77LFjJo6E1JCBrg4GR",
  "key28": "5SPkSTMpYumSwCHfrTugsYdLUfwN1LF77WJ3MirWrKQxdV4YkMgfwJWwFgsfDPrx16Y4xsuDYMX2FakwvCecVKBx",
  "key29": "kK21DLnH51X1qNVxgVzhH9HbBbGDRJVhjj5Yu8Vj31DG63sk6n8UUpxksoYr2kGLzv5rsko2WgLNgMj6ZjCdnGq"
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
