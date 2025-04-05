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
    "4Hv5JJRtXuPxmV1Jn6f3JMTDrqGjuoEws9Ga5Nd3tBdgf6igBAw2rnhTphCmispje6HEE2aoqMVWdz74qLaTkFQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6eRc5zuvzjsYGagsDgDJdc7EBMVNYXHxskEpv6j2YCXbjkJV97qwAThuiXJfEN1pGPmPygSKzDLXeAnjR5vqFq",
  "key1": "ViE3WyHye6mrgcjC1GnwRAApJWE8H9Rcah5Y1RmCMyK2bD3vkrv4AjbNiVEESSekKndVm7RMo1X1ZUvpfJZ56Yx",
  "key2": "4dogoj9YDorCzntRhydN42TcTibXYyFp9JRoiRKaRdfE27bVp91RPy7yaL19RMA76on2awB1i4hqCuZi8jqVDLMc",
  "key3": "43UuH5cjtZvS4DBYBginGptHa6ULn8XEsL7Cks2G59CtLmqKtUbacJ2axHZ6rLZEeZQSg6wpzAcE84BJbWmfig3K",
  "key4": "NMmVaCea64sVKk5Vc8vEPRVzHpBfxcRcJGw6BFmLmmuy1aVJFnRCvhmrx9aXPoaLK2MzvE9PyFt2iHoRm7fr5Nn",
  "key5": "3B8XaXfGaPRREEqv2kpiLUG1Uimsski5YWEVDMgFwJ8PAh4Gv8mpt2YqirFNaKgXW1mcSnMRZhNCCdrHvqaZYAJY",
  "key6": "3qEEHq8ubNzvcebNLvCSzShLZ1gX2zQUUk1eUzQgMYR2dQiYyzWRoWdB5r2xVd5wJwjxg6x7byRxjyRVvYoE6Fa2",
  "key7": "2wppXiqgoaAAuruN5HEWQBZ448bHs46DVcj8BZxk1mtTmb9dD2QA1mAPnd6MYpRTyh4oXgJUEPcuggLPMZZE2mQ2",
  "key8": "42GBbWQ6pG3f3A5oaWQgAKRxs5VEja6c2nZzfoKZdHTd4q11QTqaghkBixhrWqCvPniefs6uEsbzJfrB8XsZUdkD",
  "key9": "2xDRpFEnxfiXmGhdps3h64VTewjbxLbH7ixk6JHyrn3aNQ83TDr12HhGyWQDi44WVCGjGKrDceXhmnygreoHbkiL",
  "key10": "kuTcgB7qWbXmE9ZygLM8AGpeWF877wBV8R89iudJfGScYotN6jFA9tkdT8bzm92Nia6oLV5N7mDR9wTWWZ2SH8k",
  "key11": "5h4GrifLHNGgidUunmy1BKoeK7sHDDoghaRxEib5hW4ncewd6e9KwLhR7wqrJWA81naRc65nDcHQfaWBdheh7sL7",
  "key12": "2GiCH3BvL28vN5q3LvG12DSV24NLZ8fUpKEahvwsSrg6HhHRL99vSAEeFRnM5tKdP7N4fgEnoGQ4TthwT6y3yza6",
  "key13": "4Td3kvB5evGxM43Z1KYEBqoJzxW4tkTnvEue9b3CmmrWgPNySkmXKcd3pWWkfsbiJ2GrgexRZJA1ULm3Nb9U6Mry",
  "key14": "ypoVkFyyBiSTaTMcTGsW36zC8if4ihcV5yNh23kgpF6WfSaLG4Vz8r1uNtdN3Q26ZGHnequBWsqZkEqg6sGrsw6",
  "key15": "Azk6nGm3foUTGAyEo2GPKoc2eH46JcSedkNQHo515b9UW6LaXE59znHg45Y77FDEAc3QeL2tXsw58jhKTgZJtJg",
  "key16": "3dKi2bBK24a3pGzADEac1PbGvP1cTPS4pdw6tqYSjyNDtDzYrYENmhsGh3bQKvaHWETE7twkkTJfVqpCK8FF7JzZ",
  "key17": "21UyYhwMNVL4ahnSCSbhic7z8pGKcWmiiUzNbNrP8arvzeiwTy5TCcf3gDLH8zd895yp4dwk7Xo8dJEnZ3KRZaq9",
  "key18": "2u8Y6zWMxMwd9e1xTGugAwmNmVDF5ZUAEsxJhrDHhwdXnz5yaWAXDMMCdBKggTHF47RomL7GejZM24REt6269CGa",
  "key19": "3hn4hWsyJW46CvHqxZanp2z81Pk9HXJYgJ7LnFhX6jmcM4S3EP2TYx8TsuoufQ4gmqjy61VTs2rGeNHTMW2g2bB5",
  "key20": "2GCkzr6uuf5LiALUSwk7Yj6xoMnTmNijxmDpewCwuzs5Vmv7bHyrGYgP7nn7gPCrNYvR6zieh33RgVsDWZN1GbeD",
  "key21": "2vRjZuCyhVsLDz259CMSfAuE59eRNTv2uK5eBDhCPTMfTaAh8aW1pc4hgfVQTJjzEg9TCFJdZDEJRLde6SpUwDpm",
  "key22": "49Qu2d5XGJs1X9Msiom6aSxFM9f2wtkg91Lnbyi6JrWxXtt6da7YCwmw6awa3XWifM9iMSnZMC9jHy4amAoUKNCr",
  "key23": "3F7xn1T4GoEwjfDdPQBnbZpnw9KXoXGmea226EbUptmD1d8MjCjHjZZwMHsPKiXkzX6y5fq5zifnBBCVNMxAs6tN",
  "key24": "54WYAJhmGyjyUPmj5dwEBJhs9cqLfynLFUFMimtJVWWPgzxNFn1uqn1KkX1e6fKAdVopEnEHnQkCChgpMetynE8S"
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
