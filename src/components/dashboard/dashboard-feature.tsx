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
    "RDq1Cfkb3a3WUNtGvPbWQeVCdUTSmKjTjUEffyzWCEaFA5ue2euMsV7HxztUppCovuvKxv64ZjskJSFD1wVboMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erPqoQ8FY2CmZKH4bnd4QWfFhPqkq2TPjuTcoMKj4NVkobZ471sdXVCcFWsthk3n5q7sSKfDZdAoZW3C82io4Zb",
  "key1": "4AqfpCBnN3FR1hM188QfGMycFDhzBmpbYxvKuWcxrbjfFjZqAakNYJqDmbsqom7bt3VY2JJbDvSQ6GfDi6KzxETQ",
  "key2": "3mYcUtsAiqmqoT62ELjjBzzpye7F2bvit8Ri5cEbKPp2MZ4Z4xpJCzme1WCafDpiHJfgSEH483CisehQLxvrNtbf",
  "key3": "5xUGKXgSg4qBDiQ4GvuwkncX6W9Dxy8nVvzwQ1mpwtCHFpmDhYtF7efNtSGQ5eVhLXPgf2zivRisk9g9eFL1WJq5",
  "key4": "5L5U9PboPcZSuSYimwtnrnB4saPXoGqBrEgy3yhW7WdkpjCjCra42uwjwPyAHXQjDtHpWuJLErQaoZToRi7qdzZb",
  "key5": "2mdTo9PapSLAwx6yYpswaugLtFmP9HLAQGGZwDeMgdMG46hwg6Jhj3QscZcXfmEySebihpFVPG1AHddcoQ1gV4Ah",
  "key6": "2J6fFqsHwffb7QCRPFZaroGuedwLZ4DK3hDKLNHhNdzJGreQYMdcyBiFCpcmWKruQEQQnYMhvGFfBfrkCvvivpAf",
  "key7": "4rbUkHnzPNoHeHVN48RuubXaue2h93BTdLdqkoxucVPaCfCcQNFW5zsFgdEMPvGx9zHPoZhEN1ixebyeibhtgrUd",
  "key8": "2CJ14TkS1X4KifU45Vs5qbJ54CV81QiHsq6VP2xnPA535ENkatqKWP8oVHsQvRjM9DtmZrM8Xt4nkmH6fxcffGXy",
  "key9": "22p4WiLHxSWEQpq6nwnQfqP9Ch969DjPmPhAycbtqd1DLndHMYfpxNdEjsrsRrQGi3WMPMQRcEfqTR3xsJKNFfNp",
  "key10": "4oXKy7TeTXRahacRu1XpWxqx4L2SWiPEC9UmPzw4urWb63LDzAxApNaFT26Wr4iM98X554XcdWiWKnGNb3mjUe8K",
  "key11": "2M6K5X1MkYCDZGXZMR79WTsnUKpFDwf172d2Go1ZfbNJoneXDYwUAmUSfCEMvCdJVCKqDBfundwzXKbPjBsrtG3b",
  "key12": "4bt6FAnvHumGBTiWM2rBm6yMUN662uoYPEeMCHhfd65hEdpo8vBpSbUYsGxVEyyPsXhKa4QQ9ox9xbRDFqeXGaz6",
  "key13": "3k8QQYPFSkyHmCBL9cJie1RpZqCGJrMd1uKVSwrrHMUv43vjL2sRyBkbt2cbgDtBG1QnSNEUSJyp8kd5FimvTY1s",
  "key14": "5HDmUDaQmejzkSWDspmvVFEht6g3rZGeshYTqHJ5gnqJGAXHCCjvFuWeZctbzqKXA4fvqPKxTwcH9sxRobyya45n",
  "key15": "4gjPbvrzanB3iXv1SfavZPV5zArAMAuHgkVsWv2EKyBz3ZfaVaiw7zG6ZXV5sQNvnhs1GGuofCbgU1rF9zrx3LWa",
  "key16": "2qSQjMxAbeuuCwk548wFcjSAqm6UCokvTPhVpK7jkRYMmKJidRWTkeQevSmACmuP64FHAB4DLEjzvUsC3c5dpHxU",
  "key17": "3kbW21Msi72ekSkBdBFvgFFQxhzLD8sveCsURCZTkjPQ39gjHNXohFkSiSazKMN5Sq8ReDXnZEjBgNTbw7v3aBXS",
  "key18": "5uZ46aBpFNSdZb2hwMcfetscdo8JQ5zEMwfKG3A1A9pAjQPeiMikB9pnMqGx2LPM3JoK3ggTZXJRkeRT8BR1dMii",
  "key19": "3xW5XzS87tHUHf9VjJ3nR2zwWNgLkTiJ7KeaozDrw9UGfsnCPTTWDVmAAdGaJrwFmnR6e7T3NMRFoGWo8hMReUd1",
  "key20": "2HQSk5pUpjsqRrGbhf6wytHDoNQbCs8btQ3ARGPrtqbdjDotpkPFdgev9YB59VVKUJ8UjV9JacoM9Mr3zNvLd5nL",
  "key21": "5hG9MpmWWbBGFvt3uzkRnx5MdqD3HnewcbWhXEY2DUvUepWm58hnoPv4iRCNvcksJ6BMYDiVCGxavURy1WTcJJRy",
  "key22": "5mqj5ueHBck3bmifBMxpTYu5sYSyuFeEgfhNigduab3BDXa7rNVSnumpmqac1VWZArVDzDM3GLJfrR3nWb1fyR5V",
  "key23": "4KXkSBfn8zobFkKMmdgLRrWnG1YDxQXBNbFtQVddxcrXDTKcVK9BABJiJNEUq4PeCshEsk6Tef4P7tq7EQuHkupp",
  "key24": "4gei5kz7g2v4quhrZ8pTtmgPdguE3Skj1TU2p1oueWVBPTc8Ardr4Fd4d9PjB6JrAbDJpnb2qSu9Gvcx7HgerZiX",
  "key25": "ffgHLRuY81t7cmZyPPKnF8A3mw3rUwkhec8cyAN9ewMcqWd5K3XowvqY9zi7c5QHvSTGhi3NqVHnESgbJD1mg5u",
  "key26": "569ftbjU69EeTqKuDdg52vp1wK5gFb7m1rstuFeTPQFHjRucfGnyA8cvQUnKf5fqGRczoaWXACx3FqnFfiZqkyeE"
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
