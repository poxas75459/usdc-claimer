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
    "3RfXSGm795M83pGzkfnaVFzeQkiz58XiD82wZpATrTsYYpBdZzg6xDa2CdTX22qE2kFhWQBceDsWUC5ud5CdUBNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sM6cVWqpPCrjREtTCy3vFiv5mXWPqxfWdBuBSHeGS9gR4UUTekgKUfnKkFEfBpsmvMAiL5gcShrxiM79nn1Yfej",
  "key1": "SeBZav5K9Ji1jQqquXEsw8rCezcuHB4SUjMw2TF3wyVRACRcHoAMrmatkmMANLrhqzV1hCMF8iPMayJWbJYbpow",
  "key2": "4MT4kyV7L8UNXoJMBAEe2u5bCYjGL9pWLe9BiZx3uHuVE2J2tM37Q3MZiKTupRevcxcPU5JPxtuMdeWShHYRdngn",
  "key3": "4JS81p1tR2QjA511qZDToXqXjnWP4cw94d7H8NQVLhYsQukTucDcRSzk9Hez2CAPHTzD5vUAcZDkhDTCpPGniK6m",
  "key4": "5zJcNZGfFGHbPd9VJVC9bsJJDKB1wkqNf11D9NWvUxrduSQVGXpDtHz1f4gExe7LQ8ivdk551ryDPsqtDVrSSZFQ",
  "key5": "UR1fZnD8xDPxzDjHYm1WqMK6dkhwxETgtr3iSaspYADPbvmSWi2Xu2DgWbgMcyhrFj4XhB38dPNJtpXE8Zqu2gd",
  "key6": "62iU2KbLFUR2Q8ALxVHUsZFeoqSLNE4bbq9rMTfLUB7kh2zeNP11EdQ7fNgQ8W2DU93GhZZMZurSqyF7StTpSMSM",
  "key7": "4thfkQxaG73tbVhV8YVUsGsCVm1kYT9nDsDKsh1SVvGfQUQnLBFihHn7odi7tcWcG5twrX8UXyo2nvybWbsLfJZP",
  "key8": "3ZRgQC6QbuY21GxsHtrVzdjtPVoxADNBD6EVTScxDmGVowxFqeWQVSruPeaFgRQ6pQL51XgtFxmHL9ZgU7MDNNUt",
  "key9": "3fWNA8UedYxRnQEyL35TvnZJpXQX1Cx8JjHcEGXFPGxRsQ1jDgvpwspAmcRvGgez8ucoAWe6T9uEHdp23zC68geW",
  "key10": "5bXpjSbUBHkURJvux4RsEqKSXigoPbmvXM33G7MzrFraE8DKT7PDuBckcVzPZdvmKh9jMMC3uGd6cum51mJs9oQG",
  "key11": "55QUcnqo3DsUa6P8gThgA44ppJ7GZMsVoq8hAppbcaN4RTPYBbzLEykbas4iLPBA3v6mGnsF6kx3TZn6s74dLNvC",
  "key12": "3Gv9KGGQwKzAvJaD1BkkmDn2eJxubVqH8NQWiFgjkPTzyTuQ2EXLxVXbHFqd51KkQ9jExz7XidAXTt5MqTJ6QZxi",
  "key13": "4hAXGrnXnPqBRWrCPhW6UyjcHBQN2mDr2r3x5A3S8RuTkrxr3RiL3f3MHiFmfedCVqQhSPNjg6YqwQRZD7sSo6G",
  "key14": "5x4ar37qR2RrYrgNXwyoUSwy5xXq15135tnrCgCDUwPaSZDys4KCMHziU4VdoNZQjbamsmuQtJpZpxqCLr5HcfRS",
  "key15": "2QYHPqqajMu39nZVs3AdGg3x3BpeG2AJ8XNCrkNGDB4CcqDP8yjdppt75ZLV7PJZ31acbzYMF4YVYstfGACyvk4j",
  "key16": "4Axfr1MUiMiPkTQZgELjaH8xGvi9Saw1grEjLzstv9tuK3qjeq5qRPXavRtVwLLvrvSgsJ3so8iXSqgfvrYeUvyu",
  "key17": "2oXkBVbkDRLqyryu5byvsmmbBrmzmNPVaXLowxSSz2Cf8PAvVrLFUtzHtNJMJzWh62WQoBfPo6rbGemRge5bp3T6",
  "key18": "5cWamgignZrZxDXbvZY6iheHJ9CJQMHm3csryKNVAAsk8tTDozHMCc4ojbxZ8Gn5QmK8UVy3ekciAka1LZEJ38EH",
  "key19": "5KxddemfvhgnBhTFEBGuKriY2TQzN1bJhJCnWn6KnrZ6FcyMCggGzxLY5D3Enmbz76p1yUoPUnkV5TvSJz4EU4FN",
  "key20": "3U5sr1xQynjgeQoi7NkRvyi5UKXeSdRF7433BTupPQRqK7SuTgNwfepXJkc1W1bNMaaQXCecU2MNmUJyCH41dJVH",
  "key21": "61XH9KooB1n4FBu3u55ovtHhsbcdUR33fmCCyYwX3FxY9b5eYW9hfk3yAvsJ4zidY2yovqvS7yos75QrqTzxrvBA",
  "key22": "3LfBW9B5x69b7w9jAF1ED9Et4pAZUq48Qwp89YqkxCyYT9ZFBgP5dgkcMJaQzW2TJ5TZ5YAfaXxorXed1jJ1sRBU",
  "key23": "5UFMqcXYKkFgCxYmdizt9VmH1P3TUkT2R7Kjm43ctoe5ESocuKMw624v991uwHbXh87TShRFsW4pXPsuuLvds6aP",
  "key24": "26j25C8JyqLVpvTFVuFC8HDvGgsKNbtba8K2aj6KLzZLjsxdJLAojZctWV3odK2g7TUpGnC58RpG4LipP9Psbvg9",
  "key25": "3kx35cUB6qpkbVgJTnScxgBaDsCtRGVxZsD1ooVK24iNSwskWsUvmwyhqSnTThsWxL5hjBSyZYK6qSyMXUshjymo",
  "key26": "56vQpXNZoePXCWq7Fq38PkYqRYP7RnnbtmS5H1j4vuWwTcRcqca1cBRYm9KtbaYTn7aQ6jZRKTX9A7t8LjC3HvL3",
  "key27": "4FuHRCpbVTDHEzRijqJq2ARr1Y3F3rBtLogJKaGFMkBTaRiXRjLeUvMVtFXQJQijiPjMQXgLoiPKEpa89S8AnNZW",
  "key28": "XCLZy7dNVGXCjadMJC74TS2j2Em6XZE5YbwQVjAWteqB3MaQVnVGu66XU4fykF43VgRtDW2LqVNv5QXnrnXPZRB",
  "key29": "5o4J5AmqRvvPt73RLdA8iKwCQFfTGGtWsX4P3KPShTvx7R8X9pzGqL9W2W5gG7CyppNWYbHLpHpBfn2FMQX4sD49",
  "key30": "2Y6eKQq4PYwLt49df6J6c5oZa8uzXjdepQRxDHjxfmerU62gcBduSUgg25s81VhfJnYfDq2SEVFJwxGfYPD7JZtv",
  "key31": "51SB5KhUZr2iCYF9avp3QcbVcsa3svPGzdzA96CDEnkm5gYuUxvekGTsLBKzAPVJEb7QHSGFkcbKuDexewgfCVqD",
  "key32": "3tSymFPNJm5SJNon4qM7XhQ5QvFjib5ahp2CRbnMaym84MUYTcyck7wz9gcXMy93X3BB2HPeKyvPtKavhECU9qMV",
  "key33": "FwgiswNEoFsc3JQ4e7z8ghntRehDcfv38macE2NvUBA9YhSxTpeNeWquoMHU9owLdzfUzCYH1n8j9f999qMQWHC",
  "key34": "3fK4cn3atJa5cEZGX87pPvT84qw46zVguSXqUMspoge44RJq9obZi2eHUEX9LCR7Zjp8mE6ExixMk22izsfpBSHL",
  "key35": "2m6jQ9ZqW8bZP5yJS5coMKQmuqEjmjH4rTUr6mnjmyBRBe8ZyDo1vQUcPPhZNaNnoZtyZX3Z6KBDcDMDpbWeyZGq",
  "key36": "25Xc3TDhg6zhNreWLRwvSA1XeTeWr8whCpymb16s9qUaYqTHBqGVptUKRjHJwzVBu8ULkBQhNrh2249HvZGSzA21",
  "key37": "4L1CN6MYvVCJVpMSLKNGiFcsgfqXJeH2uNRbj2SjgWh9wwGBk3sVvMqukYA5PTQowLRC2DCAcbuf5Cs3HR13yuRx",
  "key38": "wVAjLHkU8dhYjj4LmcBcCxaTo6jf5qegcT3JhYTuJE9SJrU5btN5mjzdHtGXpx3gSvSvCXoRRXh4z3bAn7FEk5B",
  "key39": "4Ckn7Vz7FRzNa6dCBiBmGSsYYnWZ6mE3JfAMkKbyb8vR3tDL3ezt9HhVbuAbe1FxemrUY9kANWTaFWFmRrEWKa6Q",
  "key40": "64KmDwKFXhrow8fRxRgeVXQeZhjhC7dWvP7ygoaygvWLJab75W4Ancs7PSaPXPW1pJE6P3MUCCVe83hmHKZJEAYy",
  "key41": "5n54KNatMmhGRD5HueR67rsv8twSZqCx33YuaRdwuMthVEkfonewADRftwsgbDmHt3JFD8hokDvKWSPsiH1EGQyD"
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
