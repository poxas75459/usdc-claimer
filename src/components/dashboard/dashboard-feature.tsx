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
    "GHBarDgA4F1XJRzYPrD1yC7mu9M2Vdpqhw9QxG1DLsJjrcmCVtL2pdoahb3dkQR5tG8639SvbzU6n9xyDUp8F4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTPKwdDTpxnGWgBauJL4Qjh6Zd45C8GT3zcd2ggQqFq7UCFLs8Jh7xMMATVD6HGa56WwCCGZ2bk5GoSttnoZeGg",
  "key1": "3YciSqGXULG1z7ohN8ZvXNQZp6KBWqvULQdENPCj6e8dQkNbFxg7TkBd1eQjeeB6DwAsaEmkDAjNhr6oyP2FjoGn",
  "key2": "fXZ1rapAps4jy4ZcQ3NoQ8A7XFc6QGv2baiv9RLBQZCsmjhxzLA7Gv4meE1yh9tHXL4LrCs1tB7f1EzGiGdEatL",
  "key3": "3xwJEtKsLK7o6qaUEfXigskgYrW1Ca9BxMR4jfTUiFyYHQfHiEhibKZjtctVRA4Cf2bCU2dZse2es9vTuSQFoT7t",
  "key4": "235h1qp3kfSmDRDJbPMAHjyWNWvTKwv3tAQKHW76Bh8tfrfJx8Ro5tbtutEBLjVarpfmg8yNevkhXQJ3fuB62L8h",
  "key5": "3nApFN3X6kdD4DUR1oLFUNXNkZYb3BWQJJSdnpREZepRsg6RmHVF3uiHXPopZ3ipn1x9xXCHP3VLxBd48zJn2Vo7",
  "key6": "3ytabEnwsEb8wbqH92DvWkzYzGpPV9qq6ZA5B2VbavqEmQHJ4tJaSyU2rEC1F6NJY7esjawKHV9gxBqCebpAZLgL",
  "key7": "3ey2cCq92NxzHn1R5BbkWtjmdFRMdrNH74J5rYUuL8vYkuzZtKooF6Esbx8HJzhVN2NXCKmNWXyXniDuE7HBjLe9",
  "key8": "yfyfbNF8v2KA72TwMMinvbtas3EHLAuxVeG67TV9aeoiTkvAq4K4XaBxsnmLDjCnFDSgjPLeA63x8cEwt1mbLfL",
  "key9": "2AjVsPxg9BeNRrE5L3Rovg8AYzTWsb4cTkoxmK4yHBfwkFMfFBcZt6gCT8SGFgiThpKGuYhx4PBxxy1HRjeuxyeq",
  "key10": "ntQ6FEFcJab4HVgd3dzBUBY5uZiRqAk5Gapr3uRnJqaEkJFG2MoJNUxjCxCNL9WrWdBMWya5jPJppui9zkfkmeg",
  "key11": "2bqyYZBxJRtGt4xmNxRoXfbkJMHruLDrqgNW42516dJXS3GZL8B1AgF7KLjeuc1uMx3QHtdtsXcMCex8PM1oRYPy",
  "key12": "4rDadmfPeNcb91xcZtokHxV2e7VapHYnp5GRBWYb2HRXoE5uhKqYHxAiVXXyKtEFqdpHUCPSScPKx3o2xf18m2z5",
  "key13": "4meyZDM2WRJTFX5ZdDxJUgenuBsQx525GjK1jJACLKSGTWQjpryaCRzpYjbH3ZMYA9iuRaAxzi3sj8k1Tede1sFV",
  "key14": "3u2yWJsXE8v2yM9wLZ6PrnbPaDseScprDxvyTri1UVod1fmbXMjZerP6nX5xwKPzQmJFeZCEsVTgVA6baUVC6Tes",
  "key15": "MPBb4BYyTeVLnvKGt9r6j6tSMfxJwbEsbWvD9DFhvqabosV86Wh8XvRUNNWUSuzZp2MF5jWXh5MX71WftesieHx",
  "key16": "5gHvgJrPteMFSPWdUUWGc3WoPCF2aeL8AHREmqxcLvYfEZXBk53ZCFafUhVQZqX4gvT1242kYPoGXzwT4pmeaYjY",
  "key17": "4rxC3mNU8H2mhfnrYhnGaAfNiZFAWJ8ztAafja9SP7dcweaTJoEFG9AoBApLvVe55u6ZuuB71djhfzEfrUDfmkgi",
  "key18": "49vMuwuao7LzvSNpH24RHfnc6d647przMgYCkeF5XpH5iRsHEcXSf4qfVjFQnFeXCVTBTqF1A6eQAUCpXNA49zr1",
  "key19": "4HVDWrXyCSdP6sKEYTLy1me9ZJEdynoQHeH1ebUriNDgRYtyYjot7SEAooFSL9QsCFqMuaS1mHPqsuaR57Ddz3Yx",
  "key20": "5pyhkfYETtF4TdHKjyhKK64orzqnWEi9on3wSXpM2QoRyK4eVYEYJyUrbw34F3Y1ZmByZPAQBf2ouRdh7kJ5wM2z",
  "key21": "3MoDGtAbwQjL5hs6garqRMAmrBEG74pfGnA3RnLdN8xbipBBvfgiwZvX8ZZVnZ11PMnZ6kFPmMZW9mRng7MrPcys",
  "key22": "3UZDYUEMB425cWAJKRbWKyqu7aW2Bz7WqTpuvJRX6h5543yK7B1vUdDq6zRUHKyurvFQEVbUes7oUubqgjEiqwLf",
  "key23": "37fYTXZ4Hetox3wEj2pGnkxghW5mmaJCCWRhe6F8RNJSkVDc3HRrTErLrwHrx3FnWHpqCvoWEyw4PDtnw2ScBcU2",
  "key24": "iBs6GQedZLoeDufpkHvh9dhb8JA87XbNCMi9fxBPSM9Z2dUQQNvWRQZdSEBzKHGyTWrj8D2q7RB956y9oAG1Mt7",
  "key25": "56ysYK2tzetrQrdEnYXWVsb3xsq6eBDMbtDzabtmpJJ6mga8J3DzL6RG9P4aLKcf4KJBrCYCTJYijmMGYZG9qgWq",
  "key26": "BM5MUNfzZP4aNbMqurKkvoAvBaUr5d2tfMcgFk3f44knpZ7vDt3iUx6ijijr95xS6AcP8F6SuYCpnTTrU8zhQZ1",
  "key27": "5gQ9LEkFRYC6U55Y86WaJ7rqurptwM62WC3UxGT8Foq1dHTChjNfvxY5sENMFhnXM1vuXGvapBb2aanycMK1VcFk",
  "key28": "54Y7GUtYhUFxkJmqSSDGkyxoMxqTk5Pi72YzLFHpUFNyHK4XDPKkE9MHgPZfJnabPUxTdSeUbWCf3J1TFfM39FEW",
  "key29": "2QcPKbSNhW7d69bJyVmTB9eH1sFqr5Dm1eTPZZyC1Ns5U2j6AhBvjCvD9W8UwKudxNpZFhU2RB8bTuj5LnNCJsTC",
  "key30": "5dsBiHHSRPysLrZEDyZ4nLcbq8iAynBe81W3tPKBWKzb5CFfwKBJWdQGgCJqK49BTDxkSrGGTfewBoyM1Y6nfyhQ",
  "key31": "2hwtvS4tKfUSHaburQ9h7wdcfw4jAm3xmxSEGw9LDXZKRQBMbeFuYJ1c9jeK4R7PS193xVrgJobKgUUGpB3Ckheh",
  "key32": "28YY8ZDUNjy65U5Rf5TdnEtomdSEAAQjeMVHeBmtvQw78JEs3XFRVLWjb5VngGuF8Twuq6hEsY2AXivFT5dWTw8L",
  "key33": "2Et7DEF7ArETBLxNNDybaQFpPmevWWJDWkj9MZgHqeZmfcXt4vUKcMLe8JrMNibHzaGw8uwumEtw4CRe17TZU9uh",
  "key34": "48253MsMS5ZTRkb4DbVubHt2vGUBxmmYrhz9XMMmgwU13FDH6XrUXqfs2seALzBkRT3BXDRjQNdzSC1pe8saxE8o",
  "key35": "3fRm6ZZnzKaZ9YQ7B8vyW2cAb1Zf9FMLwHU9Ni5qTVzZEZ3Rn3X4VQ8Wkw45JM9mXfh8SrbVeYGoVi74Xq74h4Di",
  "key36": "KVGF5p7V7WVqPBNChi6UXfAwyD1QQfWBRY9dpC2uUvraiqzMYXUupAEttPmGXDBod7pNB4iXP6axb1vJWMmfHZP",
  "key37": "2xExXjgkNvDjPcKbsMeZq27aN1bz6pSkXioH3VysGRNpKM9RNn8mKFWmaoHQKkbJA18CrA42fzReGH6YwFFAXeij",
  "key38": "3VdRWpRDXaXcTXS4pUFS1vLR2eGnUNvYmey2g398WQjvokegeTt4iJwTNu6au726LNmDAivAT2VCZajoW15o3xFa",
  "key39": "QvMRPJQqj2RLhbczCaU6iUN8efwvJvL5TwbPGESEVycEz6ZKn9SYgLXP3xGABXWCK2GXFNxh6nP3buwbra4GtsV",
  "key40": "54DpZ6GFpQJ1CNkLNr2dvtCDmVDvJ7JsdeMg14PJq62MvMVeQLcJTCjkUn36oRdb8NASZbZq2F6waEYgtBQJUzpz",
  "key41": "2JZjn8RKLd6JEhQcGji2YjNmFWUp24Tk7JyqCeAyg4AChCGsrJSTiBe3Mm8b2XSxL3vFpHrXg56gYQT2h5HV5UfH",
  "key42": "5y847LVHTn4ZsJYRoX3Uo36f69c8yDgfkUezFcwWepabc9pyNtsCLT58ta5anLo2DEH6VKmgMsjUp9pviAHHdubo"
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
