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
    "3GAnQZRoe7SfSSsibJ8KrmXrmm2Uqk6PZT5H7c5reKZjrgMDWtaMtMnF4oxf5GZaNHmnPTAeTWPQpbWeBekY9d1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqN7pPUk7yLpEjAcPT39tghscGJTAVoKk1X4SqqhhajfYhExKJqsFi7z4KkMYnhqNXZdjX5kabzmQtj6W6WwJCj",
  "key1": "2ZmwGLuzv8uhqHfjq5aSU9ZHcFux1jyjkX1iVwNYSVLd7xeQb2sVb3s3wvTnAuHoaQietxLvTKifJBDmKDUCH1jZ",
  "key2": "7fsVC5jsHSaFnWiHgKn58wEvxGebGVcwt4EsqCh1HQPNME2e9LMdc8PBeJ4iYCUz8Y17TQQvouKNkngffu4s8pf",
  "key3": "4V5wfouukdSXF2WHZYQXZ4U5geEdbrEpkKUphbkqJPENnKMQmipPY5knk3BE7s32uxNsyB14irAJrWyKcRCcscTZ",
  "key4": "31XUha1TMe1GiX7VM3kWvd3xV4rdYsbjWgSk5mmDDHE8rgqsWBaPanYbqNjqvXji9EznECjjCaFzt6a1nEjFPVkA",
  "key5": "5JEz5veTV2cfCaehuvA1pvmxKoxtCmeTT2uy6s2uXToGfXcA9dUQ5K8GFCKDsXGfUqgNdRFbeYPUGQtg1UoEVe8Z",
  "key6": "4NhVzypHQCQd1HYsZLTZFVu7hx7muDhBrtqbB9QpaoXyyxobqsGza7ssfmrGr5MZeY9C2KN2dF4MWpyxWNfTriW8",
  "key7": "3YboCjjCaB7y9p8WgyUbuG4oCrvRzWHvkxYcoERPv2avtg93XcgqytW1AcibF3pHFj6rXgmftPY5nmrtEoe5FY1N",
  "key8": "5Q5yfGWqzXBkqdpgnXdmRb2Qyc6QUyA7mvbQc3qGhvoEP1roP5LvRRnmJnNGK8VZGiDs2rZoFJkR6NhhujLrhrYu",
  "key9": "447zTtNL4Q19gSrsZDhwuemUXKKs4vydZP4JemkQaoJwrvqCzMLCmfLHdCZXpkQyki3ixky1td8gXZM9DN16U1y7",
  "key10": "3LAFgowBQG36nYHYbGmt7HsAbnMmrTS2EC8MKLGuSpwNckp4x9GNFXFm2DwoWjPQTcHEAEz7acChDEqkYrSLtbaK",
  "key11": "5HrCqvrUn1VgtLr15peH7ApW1JyCzNZe4F5KUwNHihDYXy5rp3eFgvb92aGkxnEB9knZeotAq9yXdwud2qy3rBar",
  "key12": "3Uz99fAEuRAtcsukgQLUKBeAD4cWQZsa8YTu63dcMRng1SA9XkzFtHLzmLrGb86H2CPJ5cLmfr7io4mjppTB5buK",
  "key13": "2VRFeK9bu2uhvxUtqrfJZNNDiHnSedsB25ksT57fPRt3xVgCc3UpobXCzLPgUvYBgNkwAvvNMLDfujW6g47Lct1w",
  "key14": "bZLsp6BR8HHMSSn73pxCdu6u9GhojABwATkn3UY4yKayQD2KLZqLBUp4cEqgV2PJmYr5ghz8hBj6YGFQUoJoggY",
  "key15": "3vtB72gpkS2o6GYAbS6CGmKtwULmX7PWXqz1TL6gzYE5siav7aJfZbeWCVJPGMSP6r4rqY3V8U1s3JVbnd4TVkeK",
  "key16": "3GShhE2QYwseU5gLzvhJ4Z2DRzJDnz8sw3cGvDMDCn2TXK9VXshxYwxqmnYKFmifj4kertkSbxixh7PcKk4uMyY7",
  "key17": "5u1iheqzKTsg8QP8FgSaPNLzF2e77s2ZRpRNm4eqSXKbHbYhcC8ipftFesUe52rKeBtreMsAdEggak8hrLSP8Lex",
  "key18": "5eCypXZPR69echzv6y9qXjD1Cy4cGbNhUwHngTMS2eFz9ReASafT3KSdoS3uMigRKkLufvSK6N52xaXT1TnyZD4p",
  "key19": "3K48g3YDVDxzioSCNiGXiRv4qaztaVToHfDHaATRR3EJPrFpQSRJeBy5kxPWjTLyj5y63wHm9vAeVEBDudFABtGA",
  "key20": "259mX9tnvYto15Xtv86FoZWEJm9iGYFScsWqWbFpPZXhpQhBP4wctoASEdW3b1tVSFSa3PXFYGwGGFR7boLDfQqg",
  "key21": "2JHEzuPsCmjzu6ueBBJayniyjvoERaapF2wrq6iFWxCHTnAMBk1A4Q9xoSaEqSPcwLH3XqozggZJzPYkJEGJdurq",
  "key22": "3HdiaWxPY9JsS41co1AKFCt3U45AcbH9dbrpsZZhCgTU1ZaSNoGU8j7GNEtizzztj2gASV65geTf2UiYqwBEu2Et",
  "key23": "3rYJqPodGxKNCC1F2Av3RPCrJuCKxK9EMMyP2pjjDPeyEAXN2ZeURa4jTHjZJ6NTVzcbd5xaqGLTGGaHoXfCeZNY",
  "key24": "BoMfcxN5UBdwPitjSNb52RC2hiNxCZSBwMYRcN5F5eReAvPeDe1K64ADMMzvf5935AHh2ow2wwe7nbFD2DVaD7t",
  "key25": "5PmUMaEq7nafv9LCoFUsnDbcfhC8J8KwgF8jCbHkThgTJwsD31P5P6qVkgT2kFg1bbWfYiG8tQFiX7W2zzFZ1Ybs",
  "key26": "3HuscjHHQChM4Pc4idUgpF6WH8oRjdSipt76oCYoX7fbiNJw5hf9Np87PuUn4oVvudWcTPsr42wmH96JNrjyt5s7",
  "key27": "99ijPHSVSvAREjZUfYc3MTDFJvyy5E9xwhwSRUB5Z32X23ah4cvcgXBHcrD9f9CxjSL2PDpRbJ6hmRT6wFoJxnp",
  "key28": "4FUq9pW1CLtrXY8DcXGi9rMRizMGy2J6FKA2VHxkijQnxxhiUT5fGKPpCTehjEjJCs5pHMtdRdP5fGwFZn9AvSrT",
  "key29": "3FRSXZnquNXS8n1Zi3hMsXrNvUoLvMQEDRnoW36tjca3NQub2mVAE4fUjyWJprB9GxArSe6cpG1R19PcAVkBpmqx",
  "key30": "EL8s28ty7SVZvKqtwHpe8EPna1UpEnaPTKSs4GauXp2sCEmQQTjnFTz63ScbuysbLLDjhmKx81ewA5fwVaZgPLf",
  "key31": "64vcET4CbToUaDf5QwJBHtC9JWrEeu2j2C8xaHR3yboG3RyNANdzdVt2CWvQ4ddztP5NcJD5nKmEAJLnvabA9Pfm",
  "key32": "2uU1KVDCeRyQvAibqKfZZyxUCyk1tcsKwWHsjFefEVCVpqjmsMqYkBytrjfe2KCtV6CLrF86wL6jV9sqRz1a5PoE",
  "key33": "64756oyeAMX9un8dqXGvFir5WWqnBGsaxyCMudG3XJA9mE8t9HfyUKoqVW17sL8d4AaSDpauMv92XLAZdcqfzPZD",
  "key34": "3wYm51yVbQ5PB3X3EPAMkP2sLuvPvrqLUuVpJZoTxfbkJXXFtV6vhHXgga6SJS8TxDUf4pqY2KnSwNWwD641CRUk",
  "key35": "aYbpGUJvs8RLZznAP58aoZtagzbiCHZkm8YGZ1g3VrJsiz1E4ZqRJn1m4V3fEgtDgUy9ptvsZ7GUNKQBVFW3Q9U",
  "key36": "SGc8NA2U4ovdLQwt4gy5UjYJqEedMUjUtUNx9whweKQHC7kx1yswj2ADtP98qBAeyw95szBZmSaJgAaRshJTYLN",
  "key37": "5n8ZSGE2eT4pbWNCSjd1uT69YPcyBzQsXViRSebmnB9ceaw6puLucHx4zabsnrpi8nVYewk5HYQYiULUSHpCGM8j",
  "key38": "54BftPgPTGugE372zqARHfvUymsLWuQ57ze35Sooqe8ig63fjZtnbAB6pePZRydvoT5aiKvw4durQmhCLXzV4mge",
  "key39": "3V3UbSc7dxpv9qezfN8kg3BRUzuKwvnZpgjtu8yH3negt8MK2aQxfhBUN3iQBx5DdgoMFKCUWM3BWDFQn218eSUY",
  "key40": "4twEDvGbp6dfgMAAm17xao8aDohjRDjovpBuKFST9FCRC9q2BCqTEBmhXT9PwwGSrYobustrkRaGdyr3EnBXWeXK",
  "key41": "51BTYHr8kjFP99mdEkamEe8Az2nWjwDVdtNnLGxwHmiuKzmVd38LpK44c3uQyMtdBhKPehPTPnFae2KrVZs8yLGd",
  "key42": "4i3iKduaLCwagvYYLLPtWkSmai5RD1KxqBqY6p8tvTJhj6bzu4FjUjHhPqqkK7JCg4eMP5XsvhU2ZHKHsBsJT6oT",
  "key43": "4pRGScYRew7d5PbiMPtEN7hAJc82Eg4nR5aqhacPm7SdgsGJABqYKYBeFHZyQ2rzLuGMBQKnGtQgyfSL9332USHM"
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
