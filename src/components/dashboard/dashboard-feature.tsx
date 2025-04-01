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
    "65tZV9Ag6y6dJdk6rZwD5JJQXFaSw4s37FMJGva3s1G8saWKcMbEc8nCy7t7zjDTniDK8Jhvbpnx8ZCxEU1UNDi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QKziZfkWaubgVqqLXQPeWTDMEumpwYc44dFtQ8mh9HkcvZQiPMSAib9aHxDjrdgdJHHRj9Gp5FLDKFod6JSbwWq",
  "key1": "2bCpp4DwysG4pD6Tq3U1TumyBazo5vYrMC9i59FVojFix4Lc7jWK3vCMh7cjbeWKdidduNZnXJX6CJqTCCx2cHjC",
  "key2": "2f6HDeZzdUaQMDgGvb54XBZkgEUwdrHJ9vqfnZDMM1N4mzvWX2E1gHVbbcTrm9i3nnxySD2mGjSzQAp1GwvZVByJ",
  "key3": "4BtPWHPtvbF7HST4WjW1TNwFgxkRgR5yKeDcsAnRdZEEAgWmGhwXyyFSt9Z7D3RVrnF7D1UPiGw62D2D4bwSyQLP",
  "key4": "3QxVmSchaT9jB6WF69Q8qdQCC22kcstqxMhmsQ3Zo2jjbXzWtHbphd6kVNrgx54Yp2Uet4k7hjYH7kBRK7sksD9o",
  "key5": "gpAfaHByea4fLF7wv5nhenxhBsapduTa8SinspmN7nQknHRyf8uHfQnjmEgWdG6GdDLbvPwPhcWT6joEnfL8prL",
  "key6": "3VAhcpPQdFk87SXHUuufZ4eNiMCesEWAQEQ7vXKJNpmDAe1pvMMmptS9gFXiUShJRBDepKs4Xh2qqvvHGrsEqrAf",
  "key7": "4VKkKe6iHas2Be8tZbFTpgyN3cBcjYi1Ba1xshCPvFqytKxVh6PoFS56ZmwDuKBxeVicugpgQJGYXxfks49tKVYH",
  "key8": "2bSiDhNoxHj2rcESBkEgevqU3AuSwbW7mgc5MSpLUjpLT9HJYzXv6JxzcuUZWi487k8DrYLV5S1GEPjHFw2Qr9ah",
  "key9": "4xbisxpQD967Aqe1oNV1QJpeM5ENWWjmpdc6r9xoxka8KesiuDn7FhZ8gj8UdX9FpRbCMcPWefT4YJrtkEpNr3FH",
  "key10": "57ByXSF8S2upr7o1ziLBLCaZRfErYq2Kza9rRhyfMfhsyNEsrntARS1QY1ipo9cYsSNj8AEgduZTAWGSqtyornMF",
  "key11": "457ttRFw2V2Eowf8deKAzK6W6psW4SnFF9Tvyjc3X2xp3X32r944GgXGzppjAvD869VmkPdHSjEA67o24i5GtXdo",
  "key12": "2twBxKhmanfaTwpXQeTZQ9AnopaPKP9LRDmzkYDW89MTzUV9K485SRRevoAaVPGTkuFEMa5TzMR83JYJwaNUVUiW",
  "key13": "63KJsLiiKnGbsniE8ARg6Yo7ccFXHN2XM8uUGM3ihyJUJoqAxKY5ctwMqP9yFfctyXChAuTz3bg4BcHn3igrn4yk",
  "key14": "5E6Tbcgrcj82gxx7Uj1drJwj4BnKaJ2KVbpk3iPaMzJQ636mt24wD8Y51HnEpyfsB2DPwKkXX26RpoNv6u3pjzh2",
  "key15": "4aTaoQ31S7mGyzLAPqhMVCLdzPR9bkCjmy9eeSMVFEKtrtpk9T4Pc5oSSstzBkxnEfHWhdaP4SjQ9w5hy4eVdKnu",
  "key16": "QjQbjTGbTShjfkJ2tuWb6GvgCi8mPxtQ7XbB2Gsou6vBHkLG5whvUaHfZb2ikJb3ZUhEFRw9bnKdQYMXFhZfs2j",
  "key17": "4a2tvGNAbtbqpqRc36X83DVjNxEwRKcha7oqgEAPdQjdCuBR1DGxFhfFNsQvCA71Nm6TrgFrt6XgbuWY5uabeA91",
  "key18": "5Y6gLC68c7PMDGx47YRKxsVGdZ8RyPkQx4p2L3qMQhfkHrX8T5UwAK56CPmHSqDNXUAdtiADctv5GvXu4MkyoMgv",
  "key19": "3GEcWXdQ3tuqXqEvYtYRhDbCo3T13tgykZxU2MHUxJZjAgJRPcuexFAkMigryq8TN3Vxg9juLH3fwGGZBdxUUb8z",
  "key20": "5iGYnm9JgPDT7n9NoreEoMuakvYRawet1KdcSEWkpvBJVSATjMfGgd4YtjS9J3QkcCks72uJ98hM5yMFQ75b8CiB",
  "key21": "4FUmfmLrEZUHGGBbnmJh5u4tgiAcFKap28byUpsowLkSCPUT1TebEMjQFskJKwPghgxpfWgLJfuMTro1BxeKZV5T",
  "key22": "4cYyusW7snApV3sgefUMe1c4zjSNYaqxxXPNLLGeRw9mnWXwvT5ha5RFnDLFAD4qh7Wsq64EA7nbZfon4R5dgcRy",
  "key23": "2ta18pZe2GaeMVpBnqUxwUifSid4UqP91SnjXnCMZUtdPjAtAa273aHDhjxKYemkCcdbdR6R3Vqh5T8xxWWGgdTo",
  "key24": "3iU7STbzqGo8M9zXECoJScob3wFYmbthW4LouraCaqVTCwcRTwqSJhqDYm2K9w3VcrFVgfcv4ZWKFBfs16ixmZwk",
  "key25": "4Z4igzYGTEMf48LNtTmfSidd5Zpv6ewXNggGe88yyL23ceSumgeC2kJZD6Gr7H9237bcXZQwQgixf7rVtubaWkrC",
  "key26": "2J9EuVUTrWEyAam7uESxPqiqQ4cF8gmth53Ln1WfgKQt5Ej25ur3ZPzfdbFgjra7M4aP4bLjE1hD9xCBEV9EJcf9",
  "key27": "6knfmWVjMfhobcxQeUi2H3QCL1g6MGjDJxd79TW7tnKKbrVnHtRCYMtREZNsSsxCdBqWZgECa716czWoL1zqtxH",
  "key28": "mRg4XHmWzRAEonkFhz6hyVYF82bK1QADNKrKfmcyfXiZFPsERgAoTAC8je92Heu6e7Jw9k34xkpA3vb86oZxuqf",
  "key29": "4Lb7tLyQ7YioVcFcEaZjgUqR6wXTsD5PX31SSssThJ3pkRiHofPEJyvR8FDNoLRLvhF48i6oPWCJ4vXhb54FHJvf",
  "key30": "2JfiPbDBNDh78HbSvawAqpimcEAsLugdSiZoPfqFXQLnrXLqrwvuM6nSxp1m3vK8XNqNaUvnnJ6rGuGuB4hmaKkq",
  "key31": "2pMVV8ofHZbkMR1sXoWGratGPj4HZVLMyA1nYZjfXuAxqru8PC2xEvL5zn8b8R7f63899torgxrmHPuTmXCF6ePX",
  "key32": "KDcMspfSyc5c5gbNTDkNdCZbdCHQP3A3Mk1XUXbGspc7wUTWzKBeBQyFuGMtV7GTzv1KW94iFLEwHjkFFvVBzMr",
  "key33": "2JfExw8ZuA9wwTMXnvWZm9JLozxnJ1xzXk666MUbar4ULUWHYo4FLqAfnpeMrCZG4fyJPaPFMVzhkQuNqgzpzd4f",
  "key34": "5EeymvpdCCAgRRDZyJdGGEDcU929sBhzrNt5K1mDezug5sW4RReRg4Rt2YEAYLHiu9UFhKYUH7J8saJXZgTJqFB1",
  "key35": "4TJy9iFXHeZu7PSn5P4d8WkiLrgWcTeNTQC1xXFV8FpwGL299k92xNFZpQ8TerEP4jesNeRJwCKCb8pypkMBg3uo",
  "key36": "4uCEK47CqP7ZtAJckVfATYhVzyXTYQwpQ6UD73oc4QyQHpREuEGWRfzXJcPeXkCTpSctmZ6ZaGRVkfuZkZn6JRU5",
  "key37": "3buCJKauvVAy9XWN7bADCXm92G7kvcko9WdQ3k8oEujhKc3T219YSYh8YxwAq3xs3k5GKJHGJWR7XTWbTwE5ychN",
  "key38": "2n2ucJbckwNc5PwUfvVWUqzGXttDJmTpfgBTaESkHUHPuUzfH2Yt1HRxbVtSeubHxPVjYJe2weGAK7CQo9qasRo4",
  "key39": "3sn6ue3D6usubYLsWVvY7pXTBqvcRiNH261XKbutvYgdhSmYEM3bGK9Ed3XjPTchkEPa5B7eANptdm73QGvNRYS6"
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
