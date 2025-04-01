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
    "3YiqW8D8W2N3iHAR31zjZP9qAA3yHFFJVnpq2V7o2zPRFj5TbFdEwUVQYCH99Xjmgboa5MSso9oho1kYXN1JBM44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXdeHLAsBQGATn9ZiCuXjg43ELbiwb1JTHd2xxNtCEwFJa9HzeSpt6SSXhJ7JXPV9sZmmJiWaPQqz3f2Kma2rZj",
  "key1": "5Dx6AQz2WUDwrmXNhTWQxAFx3KyuAetJw4HpjeduoBuvhM9287c6rkH1Zfp3WkW6A5DNj3jK61rSLYyAw6pxGbh6",
  "key2": "3MXsso2dfvJ7nx4FMfJJg9gHsRxp9VZ9kUzDt3mLXHuDJqJjm9oBk7mnbtTmmUhe9NC3Ry5PwX8W6obmkZKj3twU",
  "key3": "5iSxfgG3xmFTTUAYQMgSLs8wM8BhNEDj1ABxfV5fNQBqendKwYmKEArqTNUG29wcXTmakP3vaiwraKdcbeP8AXVw",
  "key4": "5U4f25cBj6GnUf5t3pYKuaSpt6H8KqoWzr2Aoo2nB2S54ZcteB95fdLSF6pG2UV7SsRrLLxUuHLXfu2PqPCL5kGZ",
  "key5": "AVxayMnwJAfmMVNq7nkmPLhyb9AjjeM923n1nBvvJrza9zfNSmByNshYtE8jygBrB4fnC2MULAnfB4S9S2hhmyN",
  "key6": "3ekP82M2STEhdwCZJKuJPMRruDW1y6dWxpEGGJT65Ez76Rn3Ut1gwbxsfCQwKV8JZAXuYBzV6sewmxHCc523nBup",
  "key7": "2MY76dkV3saNuyfz7HA3qmF3qHRnTg7EDsqaEJbKfECBaeV27fTVSAPDGZw53FJavJvyQztUaJi26DysRq5zpLhB",
  "key8": "2h4J3N1cYbMqd8Ps5nDSb1kdy2gGDAYCTTjsyx3enyuvEZ1YB3ZJsxZqvTzbCtb8g7riXqrhVykSCecoRSK1D4So",
  "key9": "5Vgs1NWgSnzo9rL63ZR9nzcDJ4QWAXVbrBdveDzvxfVwhFnq4y6LkQxgGurJVQ2HVRJEmELySCLNWAvB3bMVP5ZM",
  "key10": "4yUZ5AA4BRoAshoT5oENH87iTa57HsJ3kEw2CxAVRjxRtGLjrEbuQRRUyiDYpeDfPfcBUtGs7g7pSfaDEYzybDxr",
  "key11": "4XSYpK8ravzUzceVqoAnRQut7RKs9XGGVGMPzFTF7Z2dT582hrem3uZC1SgfnJrBn5kXaHwx68kTJwYRFAhzWxYX",
  "key12": "5sWbtykA2WKTjHk314VEYkhB9MahTtsJDzjvp5TpCcmUsHxNrZ95NHTs3cBn3jwkHiFe3WZMSyqgxNJVixw7Et7U",
  "key13": "52YmDVuBJ5498p4Q9eGmqwzkVCRJGwAjwTgx45vHunteHFyx8PZExD9bng97QHhiBiSunXEkXMZL7cQ4AZRmBRWm",
  "key14": "4e358vYwGe24o9T5CpjpKDH9gJc1JxVbBXZ4sDL7AgxmATPLurWaDdamSstuekzmPJwgH5bmi9tAFJ1nKjFsrA6g",
  "key15": "5Ak3JdgCcU6tF1zbaVhsDxQeaFMqGZfjQ5yqopm6cgECQsnwohtf8L5YBe5v8NMufmiFSccou8fofVuM4hmuZno3",
  "key16": "36RaZgAMRDVf29RZ7Pa4BSYf8dqkwsukpBiZyJCJHsr1yv6UaXgoEQahGv8bZser3XDiLTWc8AQBbaWNj15R5LWP",
  "key17": "46zdX3UmNrdL9fKJkVCtoubG1jvdxKips61mtdUBFEZpyF33xfT8yrRAxeKLSG2gfGcqbx9pnxQGgxF2aHvhvKYz",
  "key18": "2JCPeRR5xXtANEx2Jeca8NiLURAowXKVicvqmnaZU6vNysY2g7ydNEqZrmWq3dujbUjtyVFuwDku3DDsingU3Z5X",
  "key19": "2gS8npecZCrPeCzc1imfs391YJVkSm7zycppWYPuXm2BgaTMdStHkCYSf5moCA9BRDxpPkbr9qEBNP8FrNY1RVtA",
  "key20": "cED8V7Lya9qD722AuE6vZ4aiqjUE1aF6WVyjwBqfkk64VRh14ABgDaS6rr4SnjqczA4aKRpMkRzcDr7pUdv9ApZ",
  "key21": "247FUN8h54qepZx6jLD2mBVEK7eEsj1XST1oNtsiebPPrccDNArVgsaLtJ6JQSiSAQHZ1ivbwkT9PhYKbMqbjggP",
  "key22": "7dtr2Hfk7j8BRZeWT1oPeD3LhSRTTZgkY7iLP4UeSPf4H7Lsy1VkxzZuWDx6QNoD62UwCZeQ3sEMThMv5rahx9t",
  "key23": "3k6s3eJQNedCTgPBCMq97kAE35wvCJ9nBCCk9EG6xtLiFCGdJPpys8D1Fv24ksz19hMD31QSBssB29zZ7RSoJv1J",
  "key24": "2MZNqoHDciya6PkLLh76F5RWrcmcDEUGZFKNUN81pwAMuufQ3VJf2vxd9cYkwpgx6r7Fkjkoy4vqtPxYiMWNH6Yr",
  "key25": "2nBqS9GGYg2QjjdGAyTYVGcPcSFSumdVYtQgqac7dyCCF5RFeRPeUjqFLxHRZM5biiXhkh2dt1QoM3S6XFbq382U",
  "key26": "3E63cmJd1FcJcvwQcNnVev2aRWro48hBcXtdhJBo5LQTEVF5iAEKnhZH57CuVZYrq6rKiy34WVRZ7P5HQqdNft9",
  "key27": "672C32EUkKCpaJ9f8ZAKWSrqDmu1BquYt7HALBNmKnDEeWAG8SLEg2d572sGPfHHYMNAzPGnQmeoSCXxivD71kiM",
  "key28": "5ZhopumZaXGo2XSAeesSTUcM3A3a2vmzBbsPunsMdjYmEGjcScKHYorGS7rJUBHRNXjmwJzq14eLP9v4yuqArarj",
  "key29": "2ezMngoHas2K9qRnGkbuTXGwdyF9yGaPqcXJXXQsJhwyfXVHRAdAijqJPBPhPpZVjHhRVi7QqMjeAzyMLa2wHzhH",
  "key30": "2CisvF6jFXVaiUsBXLrux89EMFgjbjdN32BeouEA3cozeHfPhqVXpeZ6L9TvguLnBt5K1aXrmStooqBbp3oBjKpN"
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
