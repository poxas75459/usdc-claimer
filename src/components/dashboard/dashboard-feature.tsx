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
    "5sRSkFtHrdRWLjpTGmpYfWuX6cquL9JQBgJCdUgKWMWecsdrzeq26zG6t9nmPL1r5rKjPPyTjqTXnyUdrnzMML7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KWriNQbwvJ2cBwq6ZU9tEQMwJ4ch1Vrh5HNLLkcnNZm35BVwULadkDURb53JwbELuqcNN5T2azHGERXBDbG9u1",
  "key1": "4JTKC5YzTjwfKHqbQCYhR1P9E1Sc6AgFRp1xwaBA5nsCL78DUanab4AmfYJCXFt18SVZQPxFMHFAtbivrQTMUq5U",
  "key2": "u3DPJ9ZcwYjFpjToR1qJuwhgTjJSrEJtKJ5tPShWMWUhmpt6PtgzYp2u9gmVGQNYS53Zp4ZTdmoaqzcFv8HJ3GN",
  "key3": "5YGMSq7uFtmM9zJmZiC1sKgodjaqXTfJW7mewi926gE5ruu7cBCHwTLpVWHExQadFBYx8TZUUx4nYQvZfUYTMSJv",
  "key4": "pMkXHn5GGWGrdqjdBWsYdGzKapVjzBn9ZsuKKt6TgLbuZQkogTcpzKBfW4UvRAJ111d941WEKppzpA4r453wnhE",
  "key5": "BJFitkFnhw2aEvGQBiX5SYnc63enxYQ6mdNunZVWHHNUBfyaMoYTnNT7E5oMH1bnebnDXfStPJCFhjJeSJY95jT",
  "key6": "61EHPyWsw5kNB8HwMpnGscjaow8RE9WFLuhqfDWHMznSWhPNaH7ZKL4HvBzoLzL7g6TiNqMKirRKuq5qmkHQ1WxP",
  "key7": "4kFK3vnpqh7DUidQK2gAnHAqSWNqCXC9NedX8zxQPBRP3LfqdG9iAWEwH2WmkxsiuX6p9jXxTcGDFZSm9W2BtUeT",
  "key8": "ceKKZM2e8KHJbzpzfzVL4FW3ZzkJfdtUewrBZ5zUARCBadXb3i9ragKa2eHaFkWfFuEPbdFU56fB1vVQoVvwwD9",
  "key9": "3GeGrA2WrNEf8y3atAfdywTzaUimcE5rw1kQ5HPSjhHDAbBLdtKh7DQw8scjgzbaWAEdHhswMKhTDoCA6X7Vn7ut",
  "key10": "5UmRGUYMFpCTztqLtdCVRbDcAnnoWYZQRidTwdPRrfMMYh877xmQ5yPzftfULZ3Q7WTaBF45jqWzG9jQ5cDoQiNC",
  "key11": "48mtmTGjHLWwPqbf5PgwZypjv44C37dK6MhsbHRote5j4Syqz3cMrJybkWbDUC2vRTsit47fRdmmt29uJvC7UbCM",
  "key12": "3bVDS7dFGzciGf74PKtYA1bbPUYMzp5pjmwGGCqojscjPtLw4PgTQjACiE1BUNv3B9DTDrB64jJsxoRsJmuwQEnb",
  "key13": "3m1hEEyfu6P4Qy9xYyHcze1cJA8oxi2Zjyve1RHnozFSe67dZXtVBxBfmB98FV9VjPzZEdLLktEomEryo7FLtbwj",
  "key14": "4JsaWn3DT8dECnLAXonnALtM3w1eq3oe1JScLDSf8CNsP2EU93XZHstTYjhGHXcUD32nwLth4dC1qSZFkwGnW3uk",
  "key15": "4L5Pv79zcgju2MLaWGVQkNTYRvsKT8KYZqaRbS6MBPFqC2trsPf5BYJGrikULpbnZmQwcMK18bSKPP4nifon1gEs",
  "key16": "3w3vphL9Yts3ri8XiLkxKQmCuTLe1cW8q14akNhy8PheJYsAkcnFz29DLDcJfBtEd9L8qKZNEYAYVoDyBfR63cZL",
  "key17": "2TCmHJUFaF7ZNHp7fBruKCLfwhz5vZNGNLMKJowsr7WnXy7ebrggWUoZYxjZ7zhoQR2fg9Pyp2YDsqfCP3GVtsxt",
  "key18": "4EW2nhoVW1kqSRBC5dAKBWpqeFEnvQTQ9TGGTKu9VbfsUo1U2eCJ9ZXS8sqzMSKdeFDfU12EA5i9hyBfrBAK4zLF",
  "key19": "3qMbs8i8dPzEmprzb84VYL7FrzDcpkqXzUgB57nmJovRfxQPVQuTPm2e8kFcpqfEZqLLTCjEsSbrJmowKmsjNvjN",
  "key20": "3dzPJ7mRjimWXRkcN5PEcstxEWSRnbWV6wp9NAdbpQ31YkmJrB5aNeEAADf7LPAqKyY8ycEzkU15TLsAW3gXziFL",
  "key21": "2GNerjKrE9BjCMFbtukzY9rs4XKbMVqxzsBTAz96PcRTAQ7hsovg8h7NFhB5LbG5NGm1nsKv8AUBRC42os4z4XET",
  "key22": "5bixpt9ARutK85hgsFa7tMLGktz8Toy3szaF4VHyV2C9cwXeCKvZYmJ2tS8pMfMW2DYnystXCozhmRXb28UmAJND",
  "key23": "48btP31fdoeWoCMivcjw8GostDJnmLJMuyKCpBupBWhRcUrECYnXpqVqQfrJ8WcvDH5iW7PtfMxv3AXrFi18whbH",
  "key24": "5dghnN36Xfcb14in9q1sF9ZVuUaYDNH9aqqw3pR7CubGT97UJB7jrk6yAn33XhRA27wkH8aQkebxLRDzDZ6Bw1on",
  "key25": "3gZ7NXSuvNhSEwbvXSbZWa8N51uqBBnSZgLqgPJyj7ayGiLxcKPqubt42UmghEA4R54oRK9rQNQWTvY95FFFBdAF",
  "key26": "mEqc2hdYi1eBbZUEWDv1aUj47cfzG6UvV8Lj8kAVbi1n6em9KUhwPgvWjxgVAG218khxF6WJq8aYM7KPxS8wbtw",
  "key27": "5kHnBoKXbZDwySrW9gvYunMupHtEZyYaJTRoskjMFH6VEE3ATBsVSuqoJnPXwkQYXBMRWhgHvTiRHmUDP1n8NrQ3",
  "key28": "2KXimwgvcEz6zB8VZbr1UCcw2Z6fYAfqP32FwcVh4m4heYxmMrNeZGx5ibU9qFzixA9qS4m4ARaffgvU9XnWyjWX",
  "key29": "2xdSTVAJJ7XTH2CfpCGz8hvM7U9Wdv52EFyg4ww6zft2k46CjRBvwW3VjyQr2nrxBttX5rF2noch1Mn9Ssvr7K4a",
  "key30": "3pv2B84rETBoUpjJDuDC2NR2WPoHLJwXXetr4rbeWZBzzB1i2x4269rgJNMbtKEoow4qMtmkeVubJmKSZVBpUrva",
  "key31": "3qLCrW2jhf6gmXXX3bnsQVhfJXDejk8reE9i6efFJQJE5hYdQgPf2CAzQBkhFMQ6xAqjS6Myn6AGDjEtSRczRrvd",
  "key32": "5bsxsiQAurRTQLdei7E266Et6CYWQBP3jSjbcYboDKT22CPVxJ5hzT5TV4HtLg8tQa7BnPcwPxB9DG5en4WoYQtC",
  "key33": "4xNfyqWyU4Ar5XtYP8dQtA9sPeKPNkDzYgiwvurdQMPqNAcMCpCBMftAMCyvDbDqTn3gL6SCGgcwHeEnqpedB7dt",
  "key34": "41X9WQibbHFLrkfTCB1J9ykhRnTy6pnu92Dpvufyg2R9QyaiodcMV8rfXxxcho4Dvhmm5ZxBEMRaMy4csndtSoaR",
  "key35": "4FrZJfaKAkykDUmHL3n4U6X1QrAd6gfHKAnsBb4mmqcxszkNixBcBmwmEwxrC4ezdHhiEUTtHSzGgeNDGMWTBfR9",
  "key36": "4Q2UVGrM6ohvbYLVPGEBpyL62eXfZsCP9A7PUHSXPVbKthRxEU57UT5Q3dhft6MTj5qpCP8BgctmcDfdDXPF4t8X",
  "key37": "4ZYjcPUU9uTPsNaM4UoaUt8H1h2HuGMMgVhyCUkGyT9xVGFDhCLUqr119Nkh9DeEufJbxrYxToMbXyVsEkRZdKGL",
  "key38": "3k3ExGu8p8tkBufXjYj8gVcpLhKaazJpmFecbRtapKukLPeDy1RLeGvd65T1AE2YXEFaBvhnDEmoCPGCRtua8H5z",
  "key39": "4NMNNsm6CAmX9N8rUopTSPP5xPbGmHMFEcvxvfFD738pCSJYRvSUfciQ34FmBAsautoN2aTnkhDhufpewgquhxFd",
  "key40": "5D3LjHqLsTJ7dTww67iYhwkGp1YqHYfD2CBiZDnQV6F49zvnnLxFDnEAaFmBmPkUrJLJ8zjEPyWvrS5ppBAECur8",
  "key41": "42txbFSWmVbgKyLeqU4aHHPwS4VfgvcZ6AaLhb2ic2b7zwcvFHWDm8xDuPWhkfr3Q5vk6u34VRqwxYr7jz7po8Nw",
  "key42": "utjuRMRURKkw9tBGQ18YPBVvWoRNt4i267QYPDTfGc2A4ZV165sxW4yenMWBDvSGoMV3pomk14Pqgwm6kZ2hU9V"
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
