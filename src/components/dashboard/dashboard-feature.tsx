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
    "4h5YYokhzHsRDoc3eQsy9tvHmAUmYEL6c9smatCH7kLPcz3tfY3prsG7KCufbfnQuiUsHQzcdB75FmHxjRciU7S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MK52PMeY7GubA2H6GfJ9yLLFyxR72sh44cjgJFK3zfaz5kaZbKxCC1X7rEVK14sfUdCwMHzzD4Mgc4hA52JLamh",
  "key1": "3qXC3vemacXFouN9FhcbFC4yURxWcjVC3FoyERc9Feenj7K5xcEMTiFord2BCL1s12xrH35KGiabjTrsQR2d7Ne8",
  "key2": "SV7k5YPs4A1acxZoopPwmuA76QuLZWRNAfJk81WGqUq2ih5AvnSaQvDBzsrs9m7XegtRE8PhLkNS64uP1718EDu",
  "key3": "4bCiiJ3fRhvJZsohUEpSKxA6H7Zy7H1ES5PFMd2ZfAD23PyP8rdbaPcUEQHQs6a7hvvMoTB6H3khqtF9jS3WgM6o",
  "key4": "56g687Jy7CQG6ZRuWg6sDCZfsARVHGXZv5Mcp5v6NPRy5PNfm87ndWm94hconmmc2bnMmnvEVka7VcbNqeRNM3P8",
  "key5": "2AEDrmMzzFM2t7h6poAL1nkYwfJfijJveJvdQqXTseEY3wMWuYz4JYxCaMmF1wPEAGNMG5qU45QGtwmH2VtcxfZk",
  "key6": "3mjyapDomBVwSak1abgYpkHbjuXgTm2hudtaH3yZfQ9ArhgxPy7G1jVaUNMDZTMTqXC8gs1j4eUoP3ECx7QLoSb5",
  "key7": "3HvUpKXjXNXhWGbHAUi2BD342uGYQnf1Qa9AXvvWPeu6iyUrXZMZg4m41vNegT3sTfQThy7FwqrDm8gWUaYxFi2Z",
  "key8": "yEd73ZD4ry96W7Z7HMALnpVr64DsZY1cBYdwTmX4NTmqhKzonnDngddcWndu2X6pwFhkePgSkqJSz7p9XczwDt1",
  "key9": "5osdRDUDFEVAjftVyfaf89EUx7egWGBiat1muxnQA5LSfekDzKfcQcoLGK4heQ7rC4Jho7ZWQbACJ6PyXwdPYH1R",
  "key10": "gzErtdPtbmdd2qYiSpvBw4DN7NvfS3jxDJL5LXthLG2neJsDaV4aGX3cqnfzZdRnrgiSkAxfb9aYTYHgLgurSCu",
  "key11": "4UtKGMMhnXGkqX8uHK9NcA3LcpgwsKX6Wdj4ovV1ysdqo1Wwc52VtmR6D42Vou7sHy2Xdv4WhoTy3MM26BX3pvaf",
  "key12": "2dq28N2bgHgcJxscHecvF1BaUTKXx9yEFn1D2Hyuyb2wErd9En5PdBYUocm2dRKBHHyxL6GDVDjcTyVbSmdcHGGw",
  "key13": "2TkRSqdLoJg96jfFiLrnzZXHh6xbUzCPqKWeVTQGug1kG9XkLteCNdaGEoehWqmycZdGqnxmYgKDjnQ3DtDq38UB",
  "key14": "CADYs5dZfDXABtFNb59QoNWe83Pj6zsvG6fHzFFyTWnRfBmJqJEn3ew2ZESNoLRiJyQGE5uJqd5D3r1E7dyKjv5",
  "key15": "5YQ3FkuDGsCtdSCSpXbsHXzCFDn4rmFQ7f3rEuvjqpmPhvs78VFUxBDBpNVjB6iaiqKpVgiF9PHaLz1Pwsx9s4BX",
  "key16": "2a1ASUf9Lfzhnwr6FWtzKCP4Rt26vdMh3vDw8M5C4qtaP2GTaVwWTny5ryrEbTmiSMuWVGgKsRCB4vZa4QznPfva",
  "key17": "3s99nweG2wsEHyvxvkLKLbf4veSQpfj3EugKShHqJkmHzxe8SfwEzM1bKop4M436kNvHWQT1FEkKq3E41eSv6xyR",
  "key18": "4eJvmWHUjiWbLTo8nywHFQZTzNncaUAH8rjbkgFjQkUBRfEfwoXevjqB7gJtHcUTZcgJCvGau5YiGko6bLukCLBo",
  "key19": "3KiJMG274KBTAU623HorBpBh8YLzt9zg5ekJnV8KoBmBCS8oYjFYCjMHszZYVqX2QrJwstnEFXdJ3SWErFN8uWjW",
  "key20": "2ovziyzu7psD8exNuRF3sPYr9QrmUbV1HtwpcC2THwuVxfZhX2ciag9J654N91oAwooF97X336geC7ucYFFuAdXa",
  "key21": "5sGQ642wT2rnMzu5JSuvM9Zp5e1i1DEaGCcDgWKywc754GvGaDtY2nNHMvTAcNmPTS2oP9wyTNQ8cXMEXvmupusZ",
  "key22": "4CCfYwFTdhrkSrR54N5dkrgksmnY4pniLYUe7Gk6A12xk5xxfN4fvxBfEjYcEghxNccfs24CKstVsx1TsgWD8w5T",
  "key23": "5kPFCxbYdDMJEq3o1M3g4FVhQFeujcb2MtLHVoz3teDn19G3t4p1BLw85v6bAzaVRNSxUbrGEsertCNQU8Y3J1Qt",
  "key24": "4E76a8NTtRisnfMF7LtHYyYriNzkeUj5zfWRNYkMrZo19GRKkpWy3pPkPFJBnYtvKG5jxP9azhZbsPNgPPdQcW1P",
  "key25": "5wG3sRFksj9VC9oYHDX3TzShBo5SNdg2BwA3D7rF5tKr5quhCiLpLPSzfPkhurmzB9idSpDDBQR2eVsuggwpeoKU",
  "key26": "5VwL5Yt7A3g4PjJGR8ZDZfmVNcfScQikucSWMFsHLBnpQFFUyKWU1rwz73ynBqdJEasW6XTz5pfuKDJjA3FNN4U4"
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
