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
    "KD3c2VmUibaQbebiasZ6bhajySTioW3xSiqY2aibD8QSJiwdvdn7yazKUVp5oQQwjk5XTmS7PbpPgaSVQPH1VVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fj7bEetZ238u5p2wxgQcvwLnT5B8x1KTZvsULc47fWqosuzi8KXG2P56HqMB1aQ1evzLCfK2dPjhy6T6sfiFXa",
  "key1": "3NLDsLGoiEZiwtGeEf4FgYHJELkMSrFj6AuWrFr39y1fPdp7LGsgLCWP5FhR3gigEwG5QDfV5bo25cGJjEJr9hZh",
  "key2": "2WGVEqmbUAPaB4H83CryEmtWLoJHwHxiEdZB3VG7KVPW4McavCqr1yxc7P13Whx1zN2M9QeDacRKhvtUfghgHiDw",
  "key3": "2neBX5pwUDTLzwhc3jPsd8Ju6Zq6v3TNjvDQGYtTGvUxEbsr5gDezVDx14jVotKdHzzvUVpK2R74FFaqQz3MPWV2",
  "key4": "2BXtKKAt6HTXeLx4zFLkNtzrP4474zxFodiouasbGf76RsH1LvfYQE2tdD695Ut7xAcgan1NzFPGKta12voa8KRm",
  "key5": "5d6C1TLRRJLT26kq2GybYybSnyyaKkgapNPvYTpNsQju2AGcE7sor95GWpu63kmsk48sd18anfdBCxjDHMzVeQqL",
  "key6": "2ZqnYPVn9fDyUvFUHkoTV4Wr5JarHY9zi4hv3bnM5J3V7zhZjwrZq8h4fAQ232GFpg9UZAPxVnwp6E11GMqBn3sn",
  "key7": "2qpDXziKuU9bUyyKABydgUAbjceZEhucf4L83ZKwJg5DMA8KNAFJeDQVEwfzDHMuByh1fRpcBEUtvyp4wAmZjxgA",
  "key8": "2v1kms67y2qyKh6MUtDfsXCyC2ee4RmQrqJCtF8x1AoBpHEmQ2zKfxHE8kzXFxrUE8BnQbeKNekLddPfT5Prs5VA",
  "key9": "4NfTGL4gedXiU8UL5cTbU3JBj8Spe4rrHbpfA8n3sQghgHwAAEuS73qEpPjcM7ynWnjBdAbmXqsXJ7ia4hyEQC1w",
  "key10": "5ZQFn9z6eNyqwDDZtGMPYTpMkNACteXAANtDRW7p7vHui2iYmRgA5CrnqJakUttd5fvstY7SVavSWPL275MtjfRk",
  "key11": "4x9QsUExrg9efXsMi9zSVcas45EETqRA7dfJwTEGyLgcNevM6muc8835T9bx2zJXSH3yCPvrgtW4BuRFME2ZgJ6K",
  "key12": "3qUsyX3y9W47Ccpqyqb6zgnVbaDHGkv1p1mTwQLCpwxghksRKsortYNs3U1Xc4rvRbiJbGDwH1jRi7E1HGMU24Jy",
  "key13": "KmPdoivNmWymeVfWJoGBpLB3JFDtQupMHLEj28jm4N9v2pGVwQgPzTEWVtgw8vgUvPDKPyYygPvRDq6XLyE9S2Q",
  "key14": "3aNFpazEt3WymURysFjJLrN4bomwJtnoPJgFZ7okMBDPyKYFhxXtw8bCeAu7bC1CWcFFJcVxJ3YJvyzsZfS54Le2",
  "key15": "5QKbj5tYyQ2Ts9bYy8rL5LMnGXpZwabuiKEjsEkZ7cj2NKXjWo3ioViaYTR5dVb9kuSimCQbiYAGUF7FusZR162v",
  "key16": "2JZVEYiDSLnyJXVKMrQXhStrptsyk1YgTpPP8XP6oDXmkFDXNh59Da45ynKjDrU3qCJerV92yRF9ENBrccN2Kc3N",
  "key17": "3cfLDt5vbJ8gRUQQisDzJ2AXw9N5xSd1RaMy3UumwNnC1dNkcp6EBGbmtcqWEayTQsxowkgKzW5mySFbTfw2Gwsm",
  "key18": "4MgRucw9okTNxneuCJH1aA3t9UEDo4eKkcmXUKoi4PfnBYhkQk5vE5BLAdSiYXkuYZZC18CYDzLwq53ePqCfgcf3",
  "key19": "2XwsmHvksh6Bpe8GYTp1dUsSLFy9XSAotJMGwmwhVik3MpgsX2b3MMQd5maS6vgXnuffs9sEWFjoi8feaVEKFwUw",
  "key20": "3iGndMTnYEGTP7tAivJQqKfctEa3nSFweUcEZCiSiFfv5VNTHT81ftfwWBTHj7PV1mdZPh8Mdf11jYZC13Bqog9J",
  "key21": "3dJpP7g4vQJA55TjRggLec8woiEgcNVkysPUmZkYsnPUiWDQaRvY9GhPHuWh3HRzLiUAWzhsd9wAYxCHm1NhAKJe",
  "key22": "226XNnpxzMcnvMqxGAebge26QnjGHb6C55YJ5x5SfQhUQ1Wdu8LSfkcida4ADfLcgfTb83xjpepRJGvo3VNSXeDD",
  "key23": "fPs4vq9dvuQz2ZkggbKvnLcuVQYncDunnfMVsic7iQwTZaUbMTeANKpkUtLSsjQZfLckrNRpQTaU3fQPCuwmcmq",
  "key24": "5DreFvmQ5GC1Ctqq9LxWa7wHSqMKe8K15BS4ctcEjqLFiQNLB2vhWzhCFP9QKcrsEdg1ijA1uNg6BHsPVg49j3yH",
  "key25": "4v5vtpvTRDwXgR9G8jEFWGhtTKP5posqHqVyM38Z1TmW7NhR1zAwrpzHkEziRenfZgjnFSscPbrowmm6KHs2ZYYw",
  "key26": "3oQVYR6AVNxV85jzdCLn3efzmsa7EziraPizCS2WqPY4fSVVcN24gA6AeFCWF7Zs4mFK1QNhPCRGVnaVhKFFcyX3",
  "key27": "4GWBWC3YLUAdz5Serp2A8ptSRysxuHzj2AuxkoqKTULxCj8mRY85KUFL5AjBv3aygGynRYc6z8vPsgubC6J2zDDf",
  "key28": "5wic4JghEGNHCCr5eEkWXJckhbGmgRgDpBC3gixBCUde2DTCeLBmoAi9e5MD9MQL3aRmbuNPm643nVdCiQTcdKjd",
  "key29": "bYUwZjuA1Hoih14mbwetVNcNVuC4dsTCwdHCnBce73gHZZdcvibYbBMULsXAiabQva9jKaqU4Vd1JbcRa9kuqJQ",
  "key30": "26KbCu6mHPgEtUdtqy2o7aHbwUCygSepFciTji4UGSu5CbAB2XkHhz5EKA1Pq5FxMLcMP5aaK1GVPER1V2TfWZ2E",
  "key31": "4YXMVgrb2N58kZryqzeitSLCR8vb4rAD9AYBQ8bqQCShvsjdvk7eoKUmJC9DQcmN6mfBosop6XnjR5bx81D9ALFX",
  "key32": "3jyGwCN3QVBwc1ifNsvXKD23m8XXudWKJBrvkGWtgBC7ZT1fJXqzgo2J1UQ2N677phY8AmM2saY1mn9MB5jUi3ea",
  "key33": "4hz1wSDCpUJy9YpuVuaRJBfy7nda7xBvrAkxEA9zEqFZSnSMAT1jhhBVMYUVxfBC4ypLuVrR7t6N9P8xsDhnmoTe",
  "key34": "4LUyemsqEebuUxAf9nLC71o2vZYLDtwdSdVkp7SGnBdGnFQkALxGXQyA8S2v6vZ4GZVFeYYUoMdULUjJSGDRgJ6z",
  "key35": "36LpFTHngGaprhZPwF6SriE6wdU5TVpvEmsYKbgYbYAWFNZzUQdJcGeQrS8WVozk852iFXUuh9DxK4NkSQaqEYV7",
  "key36": "2Razm7dtZLjSHWhouvZ4EJWhVxpE11ry88zvN6QPWYrn7ZyW7EnyYFS3TTuJ8dpp6eZWr5j33aSGjoUxmF1nXfYe",
  "key37": "2686x1b7nhLhyRBDwwC57iarJo4LZDnFBUGZi7L5eULRniFw26xUFxGwprRsKpqq6dvGQbCvRUzZpr76DFzUdtRn",
  "key38": "H9Ezhxd8qrR6MLhY627iVZnNDohNrViZjpTyqYCpvJ35LpWKf7L9SRZPhfwWNgYP3bBgeyK3KsQ43wzB1hSKbpr",
  "key39": "DFvx7Lh1aHaAmjo6Vs1unLJuHgM4LAW8uXbSfQQy9hwj8mgv3b2LSKm8CeKorT6YGeWszXfBxSTLWEmvSmuzVT1"
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
