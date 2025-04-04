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
    "4pdzM9aDc55z5W2YQds2LgzCfwZtfppVD8VKgYbS3Wsyc9nUEwkPimHWYLLGTd8RNUxT94MB4tJQy3fxV4gB8ivz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1RoUVKHnPjgpFgZoD46TjmHn6cpRQ49Ms8Wg7QXgxHehZB2BufTiUiAmQtRfE3sAPrsgSAp9GUZj5Q86AgCR2b",
  "key1": "5ehvP1am4kWNeGRAVR6sqnrvKrMasZ4vW4z5e5eoLCYyrUgZL4PMN7uXwbjhBr7GHjnudZ9tVBZSR8o121TjNowi",
  "key2": "5dx5guhNaXgRXZmeRJfCuDkEMir1y282iL1kS1Rrsq6n2MKvLqVmb3WsvWuWa6e1P6yDNMEoaFVA2BSYHLyHR8UL",
  "key3": "r3Ao41vMQQqX5CzSsJr1fruhu8KBe7hFwwQaPzT2zDVUvJk4szWR9JW3CoGqngMU4xQQu7uKuXZLGGB15V4fnJv",
  "key4": "3gXkRCw5dbp1znCZPLkTsffDkp46QHWo7aktqqSHGK8689pcHCTnKc5bTdS1vGyCzXJvBhG3N8iCVFXY6wFjVcRF",
  "key5": "Ytvav2gjSqGssLXZQhhuyemGQe2eu7f1721E7j53kq6xRHCu6gfd55NbSYy7UsgcpuGMBiD1hwWFn6aVrR3pq1J",
  "key6": "3p3HWaRfTBxZciFYMc5ucQZ7UfCKeLuN7r3VXuYgjtGdnz6h8kpXz1GG2igNHKa52HgE4xYYJuSnq3ps58sc61R8",
  "key7": "4KAmY6L69BcJLGuayeHCj5AuDqvDgXAi4gVZvHEUXUeUwaBeTSZfnr6R4kmS36DeyYJ4Xj3hsnPs3JoBRCAegeXq",
  "key8": "3qckoHLqxr9Am1Dewmo4zpE5ecpMsTf5e4CgR6Xgu7QpziPAdrCcrRr6JNtAisymGWXuLh1UpPZwf54GNTEnrLCQ",
  "key9": "2gxZKsbHSsMHq3d2nSk2mzc7UPrQicM6fpcDM8rdbxebpSPmcETbUTF7ZWJ77iMbpYhNs686mhW7vdkSczktbSTp",
  "key10": "5TfkXykNYzm7tWndKaJETQLLyfJWdugGiWf7bnPnpnbMpaPx66zjpKTwogbvHiFVVTiPfbSqfzYFteLuLJmL2xf3",
  "key11": "5v1Gj4uc4MSnpGoEhvccbJTrynyRw5EtiJg2CMJ3uT2gz45yxXLAV4ggk3ugtfK99zJ4YxAnrCJTCZbYYaFAF2pL",
  "key12": "3JNjiWtqGcGrEu3QKEESCWe3pwWrS83JG5wRNPgpE6BHSoT6oTAE4DyB8cKzJQ1MQniPmBy326CSnMQiLcqnSSAM",
  "key13": "57EDJSs19CKFoGxa86DoayN65L3XLQEmYeRsmUo1m9mpFNaZwA3ZBW9DggKgAA8Q3tJA8WMJnzhRBFQytCqzzn62",
  "key14": "3MpFASLxut2HpVofkxJjMsBJTq2fYa5eqfF7ysyD6gkDDX1ST6CEXkwK7mtJSQpGkCUPfntRGtR5zSN2WTJ8fH7C",
  "key15": "4Xt75J5uUbbGTv4nBK35yVDS69cvoEMfKytf6rSjCCKYiPrQ7vQh8hADH2McmvDxXZrCDrr6xPPqpsFidnMb5Tof",
  "key16": "7Ney1x8VropuzTWNxVC1PPaB4TQYoA8mc3Gg89snEwymAseMTw1pfWQepfiECprtxxepD31fna3TBdHPaknbv7m",
  "key17": "4EXyKo1zJtri3agAaL3nuro6ExorsJytAsQfe5L7vrEn69F9kjV3yuzxzCs9xz3sHXnRLhojFiZaYW8Uv9SCoyQh",
  "key18": "352KMQCR3Jmpdarm4sGoruGKQqKYHAMnAxg8otNa4xqTVhLUHUkTmfJTtBZvpPwRoXqjNs95EnfSFahzu9nnGVA3",
  "key19": "25WjWLiuXSzGr49utfeGhAotKtJmefQ7w6YPZsGYADXAfZvPteEsNS452zawFqNBNsrtc58AURotxMi9ptW9jQDh",
  "key20": "5etFBnNMixpqeKJxunq2mA2B2ZW2yTCzxSLAY5ruR219kgK4pEx15cTurKSXXjSZDHrfta6x8Pt1jQrqdZSTEHvJ",
  "key21": "5ypdBorZ4pSENnr7TZuwajgPHgUz1QEwh1AvbnoN67z4CAC9Mod4Vp6F3JZGm5EXNCULEX7JTT5sM1a2oLNrN5tD",
  "key22": "64XMXNwoej3Q5JHgyBkWK2jKViLSMcgBFs9pKB1AzXETNSa6uQBwfLmqgTdbRK2bRmbpFcBSsch8FCfsS2xFnGSG",
  "key23": "2v4AvUfcV1t42ryjbL9834azopiWpxzK9dDJjvBtoFQFYv8YkT1dTUmsJmFaN5Vd1phgeALG69oF4zxim3WveqUY",
  "key24": "yRJqaC1PFeWb1GdL7P85Fi6Wmv6Tyg1i3zfBjE2YKcxYu4rjbP7PFJ1pUs6N3YWyjap6akWiJ3H9VRzWGbCV4gC",
  "key25": "323UJDtsBQtJQcjaZX5piUHCS9kwEkPwA63MFjtKXpYk7dLkcPkmq9pSfSSaRBE6piToQeM2AzSZBkVtT9HkDj64",
  "key26": "2CKyt59bbKaWj5M2CHbzjZejMaAB3o2N9LZqymC78Dg5R8acGxSnE4xjfaeD9G5VfhDPNDTefZaY65n2fEpEFyns",
  "key27": "2MLsR2yr8m86GSSrCzdBrf8AKPwmFG7HS24xSrW7mQwygZp5adTBVHwVz6CC4bpnp8929zYX9PF5ZRTWn4UtRGFA",
  "key28": "iSBHmutiHcZYgTayCnoTJF7PepqHonNAWsZWCe6QxGmG3wkwEGmZRf3eBixuaGYL59sjRGAkPpvSxGbuW6XktjN",
  "key29": "4BQEYpmyzaAPbH5nqJWjUYLZSC7E9EMdv6P5Vhis15opjFKjqNBoUo2t8BrFhqxhjQ8Er46ei5bfWtSy99R6gGzs",
  "key30": "iqDHwLXAhkeN8vnwJJtXoR1S72veHwcYmC2uDgBq13QHoYniVpcN7aaJ8K9BRBCjKoJmDygDHyPFtgEzJ8ZKuoR",
  "key31": "2GCXQ5sPVnK3Ptfd9ckyYvZSNe9wssoPyaVw6MJBeQQGJLR5aYg9aY72WkzE7H6vdexCRpweG1JqB28Mfq3v1c4u",
  "key32": "3jyFtNnXsLB1fTbWL17QUJ8TSKCeErWr2D15gVYgwP7X8mx3bARcqLeYMnF4MjoHfb6F3ZBb4o55VoiVZdMFundc",
  "key33": "2gt2QpALxUvZCAsCaDr7kgREzZZQ5YdDWb8H9pVMzi99koyc2XjB2f8uNsq5FBHeFXyQjzyBLJ7DHDvmPVWy5aFh",
  "key34": "4X4VxEojGfMuDo15CpfazzgQPAuX5xYu4ZjzxXp6LmhVXDJ2EoAtPncuyXF57BUTAgJjVKpchigfcPoj4nGNJSRT"
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
