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
    "3FtgEdZ2MzDPRBaAMJNPS3bWtu7ywhVyqReEY7pwTJ1LUxr8JGtdLPFjDHxGq4xst8L8cRGYRMRz9hDJ2kZLEgdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSC77ARhmUrcCGyKs6RrYEB7Xnw9pVDo1pomsubrExqD7CjSmC2jA8uR16P4GaxHikobNWMsLRF6hSvkyUqZzwk",
  "key1": "jYb3u1sSrFAvV8rYUtLmGAxjWkcGkTnqN94CWgp9Lcwr4eSZTEjgq5jo22DuPqJ2Zs7YTxzUkR853eFRF3AW7VH",
  "key2": "3gjEKpLF1uXBL8KmEdyWfuXdB5my5vmhk2dc2CypHAXL48MftjUDC2FnqkfGMNbmeuWZDaWPfgtcD3Qa7ZnxWJhv",
  "key3": "2dgCNJHDCZQC1nBukKuWjq3W9zBqZAUN7SAMdyuWF2sVhyewawEUD7WbXq8BKyLnL8UT8mMi5DBYnwHAMHWeYi5G",
  "key4": "3NV9iNgNBKVAj5QCafguNvpqrqqChuVfCayYARSoR3xFqGqh6bJ7oygR7Mccd2wXeNatC6ALyohNoaFmuUNhrUx1",
  "key5": "6ANRraZFZQjEvCNq87GSvqaoqFiqo5ZMQSa1DyVWSdXpRd3qHqyCMQoqX9ZhiAyRmWDigJCYCMmV8BZKajAy5io",
  "key6": "4oNhBaLMNZsE3Nmgg49wpTMTsLb4QXnviLF6Hex1ozj2bN3u4eHWaQS7gpUD18vf2vNeHKFsFJkQbwDDYXsjo8oC",
  "key7": "2VWLxcerxrRSQS8G5DHPyBvk4LJCFB4vvGBHhb8NSHXpLubccd6rNUc6AFe3Fo528DRd5Q61mK1TTJAdBg87SBw1",
  "key8": "5p32b92rbbmn3ammrmaATexBgQypprLS64Ec4Vjynb1WMwYXcSC3WeT3rijDDPSuhsaRMbEQk5vgfP8heXvcbWQ5",
  "key9": "3DCMmv66tY7VjLBqMh5zdTJLu5dsSEnQZSha6XmgiikQySspA9JptDdq1EqQzXGAmho7hajiXbYoPrqfC7agLjas",
  "key10": "4g6uhGyfGtg9qLfpLgpTsam4Ge1LinrjnpXZMmwfFoPXYTg6WpnQusUR8tM3L6YWPBwghap5TNyYvBXw1HfWQbzV",
  "key11": "26V7WuSpMMgYiceRnyoQNEbowX1REg87tvZmJxjfk6iGM8jh5SLJHcXGgxnvSoz6uh1S5k9r5TZ2DQkiAMV26Zex",
  "key12": "5RDe4RXjAKxQu9S8S1UzNAJMEjEw6ptRfNhoLDQKkZAvYkeEutCmn8GFDVSvsw5wKruxUiggsLzUWFJATRJZvgdP",
  "key13": "4ZzZ2oh2CVLm6UXiqpk5oqtwcQTHDXC3z9dRkd1k1vJPtUk5rZoEJfywywt1gnv4ohCJXa5GbdMhWVoi2xXvNMHa",
  "key14": "5EnVV47kR73euCQg8AjndxZdUNMyhyxD728o1wbzKGjUDPEMnp8T7NW5k3n7t8KEn6G18KwQqLHPCN7T55H4x1YY",
  "key15": "4cgEi5BKE3GRuq68RD883xVeha7bNUWrJyj8aFASCyyjppbs9oMSb1vF6fgQ9xa5yvsjMwMRvazTUgUe5bTvSWyz",
  "key16": "4SUxWbL1nDWCBUMAWEtcGoADF7bZE5iCi3CKsAsuC39MXpCoa5u2TyuKHmxPqg45juo9ng6FVXJt2g7q32JEu6UY",
  "key17": "3tiB5Vc4cXxECmosaeTth7BMwdTMTWmqSsQratcydzrRZJtV6Kowf75557CrwTVYN8favmAwik4Qqp7BpFAuHFVo",
  "key18": "4nRb7RVeo5XFesEYT9a9n48rPNWqbwduN1CYiWiGfyAvU9x2utXxJUGm983aNQbyKXT9i4rVVN9D6cr8LkMQpbMy",
  "key19": "3gw9s4XX3bHXAR3g8jCZTzLT17BJ7Mmp9nRiNEZYhbDpgwAKcqPxi2xnmGvEZRvNjFTeSSCiDAAUHKQvBUpB5cKN",
  "key20": "611ojqHw9m1swhX4z4s7aX9qWmATHLH66bWLUTfYgPLqR2GqZT6tHWSQYVxRKEQ7tEuQtWtcwUzFrEcv1FUaxuSK",
  "key21": "4qgpfWJgS4TSHir14KFPbeRysM2MdtU3HU4WZv7pUvwh11NAMMn5cYnsnR2W52nUYoMduqHM57PoDoBmtGUTbqeu",
  "key22": "67k8mAwYvcam5AWoLo7wfoPnYym8yHEZ8mKftGRVgEADWSLHPSxrQCxwVo6yMmgcJAxVpzJAbLznuxKkXgMEK9RG",
  "key23": "2CMsr54zTEaCCDsjy3mVEXW17bDrtwvXgv1t6qeVm52JUAt5ztsf3pVo1MU6ihmgty2uP6a5n4WPG3UmTRuZJdCS",
  "key24": "67nvvi2W3PtSf15QWhfkSSj9EtTeHSfeoeVG5WRZW8snDbCmpnceRDCbGdFDYdZ6jC7EFbLxVhtp4q4ijhj7icfu",
  "key25": "uzfJcXN8Kf58MtDrdJJQLFoEiixow2k2MQQGtjNoM3AYkQ7tW9t2QajyZhSeB795B9brVHbFE8FQZAZA7gqqLfn",
  "key26": "e3G5ac3ApVRT87xVf4U3VmPhP83G4BiWE6P5nkUCJvxwJUaQRWdEXTfQ9W2uY7RC8MV4d5riHdPs9svRu8afAat",
  "key27": "55LFhQ1xBvq1CYb8dNqMzqK83CCFAfWwjHjyPUUEQb9VoBU3EPkBfThEQHko3b6bsjPGrbjPHXvWq5n1HmZZ9xRu",
  "key28": "JtyTaVnh943YU1n5KCooqL3ihb1ofL7Fkira2TSAdqm3zS98bLggZetU5Cr9sBAc4mTwqRPN3jPtpAZP2wjmsVv",
  "key29": "2K6nDcjHnRkYaUH1JtxroCRVBaiddh68GW66rWJQs3fAJijvqVk5pdFxgqu2hrzyBDFUej1D2sPiZJrmoTfX6aRa",
  "key30": "4cCjUr3QJaZ9MtMpggYeGRcL4rrtFMEhnHjNm6f1Fb1tm9fpGC2EvfDjm5Hxwb3WQkCHTnW2Ge74dsCyWQnjuy1m",
  "key31": "57ps7J6M2eiGgDeiGXN1SxEqQgn7YCarhcBZSGMW6pKVuLhFhqChW3Q3FUfr15h6A56NZwuVwkma9pyzq2tLDese"
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
