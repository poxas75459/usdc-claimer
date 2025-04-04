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
    "5nQYz8e9rR3T1Bz8XT9YkT11EeEX4PFJtW1NNnnfNpenWxj4PiPQPgVzhEKGxURK5jnH1zSkWW11u4waAojUAU4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ojyXF16SjTCb9nNxgwUkK5CqWi6oB95BXtM7Y1sFcVAb8jfgG8eRffdvzgX77d7U6Jyrdf7N95ebFaNdLdPGaZk",
  "key1": "4H1uYjGXEdP6Uv93XVW26CJnh13iAfRasnM5XvVNaYHWau9koLoD4KeAedTqEr99bAAF8DmAQcMybKkLjUHz5at1",
  "key2": "3jhjbZQSJzEBxfqnEFFExTLAvdpT2AsGTc959Zs7pdH43JXYFVUMbQxwEp1LSnsC1fyvg62hi5Cf81b9fUmhi94C",
  "key3": "2H5NQ6xc9mzaVSVhRDxVPyWZtvQbZk6VAqjSn3mkeo2TRrGoQuB3BbJF99hc7bp4cwttedMNTkD7xYqxuWZh25k4",
  "key4": "2PkwEaGiJajiTesqGp5zYeMnrrH2Qkjr7gHpVSDG3dz6BuLsoWuEZyqggk8YYr4zj5JqQfYWZqWTpdBhcXQj2Wmy",
  "key5": "5nDtbV8RHDBfitY69vqDYPu6QPeyVwUsKJv1Azs4rqfCALpbS6XWSZWJTYGpyrfAnKNgjThjxJgJgypwW7HkhYFE",
  "key6": "3KNiPujMPmP8raAHe9rkR7pCY1xo9n7n5bRNMagUqQ6h21a2jUCq93d3QTU8B4TvWtzwzbHU7m6qg9k31siDFdYW",
  "key7": "2BWVXT4WR4x3cDLRTWb45KMMJ55k1VAxkm8x42ccqT7s7xrrobzrZenFnDmV1kghWBeD4Wj8DJ6V6EjEAG3nmnK2",
  "key8": "zpeQmucqHCGuet89AbM3F18T3rQcoQLnNwZDLXq5sXhRcpwTBwe2o7R3HDxGWmwEeBRvoBh2yowYDZnU41tPv7k",
  "key9": "2WEvQ3MP14jWEkTLTjvdvxGAeYw2BgG91A84fL4BKstfTKLpGVguFCUDkfm8vDEefRgCXA7kkV7doLY9SXHqHbhs",
  "key10": "2JFsQipATrmzE5X94gcTPkGoGccaQ3jSaY7mUfVtnnCngSKEFuQ7CUteyj32KzFEBw36qZZU1GXzLGZHACaBdjUp",
  "key11": "4kR4wFHzMFNSiQaCAqAny76ZLdKKLkE62oCxmkgjNBcDQUXmXc67NrxZwoDZt4WD1KybNUjJyiYhFa2AiPjMDDqK",
  "key12": "38Z4Uh8Q6iQa44tjLb26VcmS1KErhpnzevvTYrmRq7xyCmAtzthuYredkHEJduWncAiydtMjtUseymZWufZKWyPe",
  "key13": "5ymTXYu17fchz8R8423U5QQ8HXKehgLNicoEakMiofkAcfk2dgfeR317CgobfAu8Ux6pfjVVR1Q1BEMX1FVj7eGv",
  "key14": "XoNp6Ff1fK8uYiRViMcvQJSL8WQY9uRkamuryQUJkwoZ8mHUJ9hCXRWpmxBGUSAkoM8kiLR4tnJKeXS7PDAMAG9",
  "key15": "5LJz29vR8hhpqeCzGumSqdsMtY39WEuKFXUN9A3EzedG4vtYozogbG3SoCDa6PaC5epeFs4HkCCfZxmGoSxf8MZj",
  "key16": "5eJJGGR5Bq5ij3MbraqvviPRdMHQaawqwBbhwNdoZQj4bnFrzq4T2QiBMQ3J9Uw6o7uEP47tzGGoiYMGpprnjCJD",
  "key17": "U4hqVc2pTxwysz3phZWxyNdtB9QPTrgWauB9Fg3DGNf1DCFvPvjQBxcFA15PWP7WWzgsQv1th7sF7bMRF8zpbme",
  "key18": "yHUdqHM5nhJai7r8a7p9dJaMchXrYdsG9LbH6eVS6c8x25pT8EAobj8ssp1vCcPPBmok68MQVSXMSfHTPyco6mw",
  "key19": "3tTq66dj2GyMegtvQFETpHoBjTBiz3GepSPevZ2XVjxMstqbWgSGTADZCej9uw95HMkVJFBNNZpKLMtiW27ZyKDD",
  "key20": "5RgmV3g2hKBSbLwBGiJYExHnhzk3pWuGcuvdkqhAGYo27AyLUnHiggdQXKCg8hyr44PsnX2KBntjTP51rkvRzcAf",
  "key21": "4XJKXci7M3vq4odFtbveRN3CLNAoj1QJUp6ceVRk6PkzHTqdsE6yi7koQ5rSpitkKXRusvovLNHngpX1nGuV5rtW",
  "key22": "SaUXUfWKvcXEwi5TWJxxXzNPJ1pujvoPMkn5uHNwGfePRrjp7AdE9WPN9EGGrdd4f7pDYsKfazxGHv4nVTjMke1",
  "key23": "4aTL1NkJEoaiALPpmhsZT6urFKdxS4Gig5Tk8zHUxnS6o8kVvXEm6SBNiJVoF2husjaNE2CgbR8v2Kj9x3861MMa",
  "key24": "3t75UAfr6NAwTbwe4cgvfd7vbdc8AygM61dd7xJaav8cqKG4jjr56E4kmxfeiJhtUNCcmmnbXN3C9XZjXxNPG871",
  "key25": "4mpFTFhMjVKsoGsWuxHXYJBtEH8eZ6RxTefTJHv4crYU5MUG3GLeSmn192cPSmx3supS6oTgjWxCWqh8GoZiz86u",
  "key26": "66XeNLEncKv5je214NtWwnKugKhLqma9s7oQMUUvrRUo5dZ3bydGaxZkbgs86khMEx2ezdkokfFyZyr5orCot7rh",
  "key27": "4826napeZjv6Nv7AdgrMpvBaCT2t2hRAfdpVPdNpCTTRWYh7KWkUp56qHjdD3g4AzfqWRCbASLwQdG9RnYqrAzZS",
  "key28": "5GzaZXjQs2Z3eb5wo5nodMJrfXBmJ6Eh9HgYx2KMvrbGcpid352CzcHSm6ZSMnscsq476ut2e8h4Gy4auJQNG7it",
  "key29": "5GmxfPUANEYpKxSY4PpSMJYrBtBcwr4GgnwwJA7rdRk2bYxwWGXhAoyki5NvLzk4YCpwuB8y3NQds9xDe5RbW5zk",
  "key30": "CiqFxHvFNtMes9p4QpYJmRcT2RG91hPt9X4wrTSVctW9PFX2S8GLHH5r9zh6oNrDHPY41JyX2CufCjryMw5pVnx",
  "key31": "Qg5Sq1xwUyXpaGeTTrMJNaaFdbnTZeNrd8QF4yWAjoggp1ui6bCQEmVQ3cG7GZxoNTtkubyWb6qPL5F3D2CfxiU",
  "key32": "2jVozttLCWujYjsqKa92cSLmJDFtdp6ktUpkn4q3CquMHQ5rX7boMrjgZnbG3xF9Qjr1M5Jf3ER7pFGKtKqteJmJ",
  "key33": "2DteKBhpc8mD1H6J21xyk5QsY86BiqdF6z1jHpUXHjEcHUAsZAk57L5cuQxWDuFRZxYPoGH7N6hQrs88mc3GJyB5",
  "key34": "2wpZ5eEz8j9gZmXoDC8FwqXVFB9UjvaetB4VyPf7DCUH5UXftDSQwqziWPb4DrfgcHcMNkAoyj1a2ZdrXgrpMw5k",
  "key35": "3Mpoazk68XHd17fL68VynVhDDPmsDG3KJtWUFqykguzc8FDHrMvUqdL13J1dLYX76p4dqN9UK9GcpVbV5n2n6htg"
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
