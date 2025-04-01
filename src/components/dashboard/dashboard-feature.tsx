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
    "5tsx7LKwUxLLKo4FobfZ82Cfx57GHeFaBYTEmehVMHvWJMrXrX5c41Xx67s14MhDMS6akwceA8JtPLxaYELC4Es1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GDVM7375TBFMxXrVQ5Ars2Hk3shKGWPvtJLCUEjDUDUxyYLmarmKdQkdKiGGnz3u28b6DsvJmoSb1jut5qz2M3e",
  "key1": "2QQkayhYEWks4pDwYCSQcSx6AKig8THpKH3txyw9cbeXLM4vQhsBxzp24gfUCcymDXKgvZYPk79fkZ7TBUDyitZZ",
  "key2": "ZPaRoVfMxaDcL7HqbmRJWeZFyuX1yr96WYEqMPtQcriY71B9BbtByxXTAk6FZMR7DJCiHsN9gVr4Zy3vdizaHpF",
  "key3": "2MpfRPXYPN3HzA4uC7oGTx7VzGULPG7ysBv77EiC7sbk5Vcr89FtDrrQZ3uBSj577wZvCwR3b3nYG6MXnY4zydST",
  "key4": "5NdJPZEjuwpov5sXybbSEjE8tH5cC44DmCPGzdhE3Hek3JQ15HHJEJgpXiqKYSoZJqFHjf3QqwAxN65775U3xaHP",
  "key5": "3tcbPjkZG4sP6kZN8qjdjThCGHoX5ncoxmu8aUS6TZVApvEuBTp9ictby6FVYzhH3oEQdtKXAFseTNb48o35BVxr",
  "key6": "2YyYecuBHGMEPQLJBEEwGCFPhMdCJawfdva5sPvCn3bCtBB2otMAPATUpfmWnCkAaVUGfzZ8zS8D6EqcjNJxTVL6",
  "key7": "3HjkTK19zAQsbWz5cJyw6ti3iJfHA31yLDdydVs2kA9GLEDDKXq5Y3TC66UrNnssASc3qTrCqCufGQNY4JbLEiKY",
  "key8": "sKLya5F1AMYq4aGKZstyuFkey4msGheo3QEkzPEQ9MYH6rXVXztiF9KFoquScYh8GfwRbKykRSU17a8PmvJ8ffu",
  "key9": "2xj9VuZBHsYSCjRXmTHLAqzXLFYtCSiYVCgmJMNhFbDKHWK3ep1P6gSx7nUXjfTEvt5R8dcKY8nLLZibUgocNj8T",
  "key10": "KwCsKCMYbC5qgnMPYBxbDxnij4MdjReFiX3Exs1mWbbUa2sHs8wAieSYjtuEHyT3bpz3BVzzLd2cg23RdEzBKXA",
  "key11": "Y8TQyPw8vgQHsswhNGioEiENg5NtREgx9mhLd6JQakYzt7a315Zdh6aQM9gky8tRESi6HS66YagKSDQXYCti7LC",
  "key12": "37YtRc6x8rUqhLgati7SWjyTGKGpWJHApY1iEqGppNdKpt1prXjCSVZt5vup4zrVJ7mKnLpgd6zCgDRqsmcD6mGZ",
  "key13": "2b55LpLBHtp5sXgQvsrfGaiC5LGX3nXPpXuyyPzwFEVFWTKAtFxesNUeWRnyutaWokP6UJ8saJZnWdaWHnozmzpS",
  "key14": "32AntvMLVcu88vL5BtLEkUu9ptVTagHu7GNNotDidAQBit161yUnu7LeeP4f12ZpXDo65MBDpmArmfniPpcQDcgA",
  "key15": "5XeMKW9gZRqnqHKXw3m5TU6q4rGmL6cNKBFo3cygQwMTyq1HLRjovU54AdgSLfCaB3yDvEbqEgFFjtG135miQGwB",
  "key16": "2hEhM8BzGyXfXNfs9UhpxWBRLEzUkQNRp936vS7uYjYcYqBuoNRA2D33ZL7kZxZDQErEezrKAFCXGUT5Aq4ykG91",
  "key17": "5VJMsiTeTDaJsizFrpWXsd3vxkywfPZCJXEi52uNPtKhf3GTw2AR5n7s3JKzCaLk9XazVbVDvpAUyN4PZvtmxxC9",
  "key18": "gg4jfMpaUBd7BBLjv3ZKdz752vdiJxtNtHqULfi2KQ7bQkqYuzGBuFCzWd6MyjpjT8Cpnd1ZLub9LHuamfMejp2",
  "key19": "4h5gLc9nqYZZoAExKm66aQdbYcFBaLcFGwP7HkNncAfBh3tgEUeoRe9vw3BGfW63gKHVipmmDt1sS4v3KQufdhTt",
  "key20": "25fkce1y3PCNxp2Q9emJmZVum4oa9AoZfrz8ucbN9fWxRgv4EuaFMnpkZ1ni3w1xaHtVLWzdMvDeo6Tzx6R5MEYA",
  "key21": "5LHZoczKBLYwaeAvZeUcMJ2GgpiDzkrQYoQ3y7RS9CxQ7v1ZkH8AoUAoCBQUFd8vEritsNdtd6NFtL5WqJwfiYAa",
  "key22": "5HZUgYY2dxkzm27gKvB4jkCdXBTdegBHvBS8wdBymNsZzRJR87ttjAb8mZvjHiF9guvBe4cai7CJg3DnN9inmUAS",
  "key23": "2hMsRxa9WpWUwR6Up1gBFL1vKVtr7nu5pfcS6Zqoxdb9RJgsRetKAgEvnsviPFH3VHq6BK5wFrpVJRePZcyxpXGj",
  "key24": "4GXLzw4bcRox2fFqEJ7mF4owR6cBroEHTjpMxUNXPLdbCs1MRS2GEvksoWMzi5QUiCSVbMKxQQ8XcT3N5qkJrmYj",
  "key25": "633Vqg8yRkVsekz93S9bzSd1k2GoLLkQ5keaLtgjGudUusetyk8NkRK1F14FcqTRdpahuZLvM49ArLdLSDTADRwh",
  "key26": "2wEzqHXM2jomqVtJkukyjkjg2aUcPQxtFdPQZuLdZNdCmarrtdT8UiVFgQHo8yh4wfKaXbLhtCveXjwWwHZvTSms",
  "key27": "5JRAKtfALfvnd5We61CCM8vJ9iS87DHBE1AFWERFZHAoy4er5gA1B1rJyGwZeRffBEgXT6sZkd2SPU7GaABHvLJR",
  "key28": "5j3VAhZ9yGUBNC4XJtzL2XhBjA5h5h7ZWa78rSVU6bu5wWihCqAmWzWvADZLauxgnnpGAhqmW2DVquWuwEE7CZt7",
  "key29": "yecA8QL2qVRgAU6E2tA9Tb9Mif2WqmVFiAJtC363vgdsQrGknsVMGaYdWYd8KYrTMXtxk1jHhgaYBgfzi1RnJi6",
  "key30": "51ZuW7CLKgjM595BFHbfbxLGSGqWyDc691GvczedUia4yy2JXTWi3SWFutowgfVfQxBJoWMeD6WSq2Wk53KCADop",
  "key31": "5H5Yt1gupF7ADMUm8pGepFCD4ausfydGWSDfC4zsHSY2vGozuBuwPB739UK1Qi2iPbFLSE6VazgEQsdHjLKkDatM",
  "key32": "2DhopV9HiV4q2dTDN6zrmCxqXwwNuxEcXh3zX8LKcTwW2QHe9Ms9fofJ5h5r2cGY6QtVYkB2XxBpx7SxMZLrZceC",
  "key33": "2RanyBVDTE9MbY7ay6f5XeVXdqggqCX7RMoXL3ZKJbg4i4dVjpgdr4cFBbToWWm7RjNsPkL2u2YWooLWsd2yL1UD",
  "key34": "2KS6x4Sgha9bX2E5pKHLWBmUqsFDu7zpHtUegRt1ffhAbVurY2yXc8zmBhedn3et46RNAv4VFbyCapELqGSjehLH",
  "key35": "4HXpc6BHqTt4WoB6NAMmkdgR5er5sYTcyXnd2GiuWz3gLfE29BRfX25bk7CXu2FTYFecboa7FkNFMU91FRHcCEe7",
  "key36": "zCurzckqoNst6FsgMkBHTsZrgufLTDMJGXqKW8UCBPBNLzV26sm6Cqeb2whZkgZTUiLQmwL9Nne1E1FeVw2MWek",
  "key37": "219wHvQy4pM96tM9xAAgopvzAJAGDJ8Xo9NAQuE4yockBmm8kPZg4P4VfNGUREBHMtawWD9xQgBxy8BXcbVAab8k",
  "key38": "412XG4xeDZHwyES7VQtC9wAkwYmz2P4mpox5CQ2HGKNWuC4JSTRmPSM4MzdWVPrCkc37tQ8HaNP4ZwHqtMC9pE8A",
  "key39": "2pGGW9RFQvTHLuD3UXmNQ5E4viwsRBx1MEbPmJDd6KFz1s8AX4jh4BojK41DZdoMi3n2bkzNin4PpFoy1Wqi7Mh9",
  "key40": "21Fwm6CTFjHqBtQeg1245VYFnzGPe6B4rSggDxiArUP2scniFQcGBzDrEb3ARTHjSH5Ti24GKmR12fBLGsQEu3FC",
  "key41": "oWYShoeM5GLAxDSxddjv5eDBQf7tdnGeCVfLhWNJooyaAFkCBcnLHmBeHY9QwuAXFGHo6zBjV1KePULXmwQ8MMp",
  "key42": "4oaPjBmzQgbt8no891bcnXAKk7fhGg8AdC5fXxChXK5cRq9L3juiwbEqr4Xsra2d4ySaAKiE1LKn8bkjhx8R3pp1"
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
