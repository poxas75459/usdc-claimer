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
    "4j47CCWp5XXdTKYt5mW32SXv7MW7fhnZKM2AEJ45ENKSZ7939YWfeTjqQpYBBo2Ax1nmKeH54boUJbqhVGMKrmsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcKWyNBLdD6KM9njJpoHVLz5z4FLWVf796Jsz2ExSP7FibSTmgHs2JChGQDeTQtAQ9aBM7UV937qKw6e5hbYmkF",
  "key1": "51HSGF7QaJKQzV7QiSFkRTaQWhXhKBJgWQ7PXCrDMVLFrft3iteqLbtgoMKwojnTE5L5vLgL8q4z2JZrMStz9DSn",
  "key2": "dvgffrbXPH2DvEc94gh6efGv8UWSW93e2dsH3t9Nx8DJUyNs3ZztqQmVJz8nM5m2owFZj6kS6Th2KfWwhjCXQqo",
  "key3": "5ydSb6cUxXoY3Lp7Puj7nTbcq6qXr4xK4qsFS7FVSveV2EfbyPiXvNNXiYTFY5U95pP9Aj1nnQRdJV6RHg2RBgTL",
  "key4": "221iiF7vJc2e5SN4WHuJa1Kncf9miQdisf5tQH3G6McYHtjQec5yXvZmpkxR74e1LH3p9FTKgatcwvdfXtvE7Rzh",
  "key5": "2fuVdpnYWYM879pofrZemxJ7kYqexuVF8mgcpwhgLLmiRxdctSzwGdcZGfsVvPhjzL53bis58uJjQHMwRvhQ7r1x",
  "key6": "55cAuMyVt29sDyg5YKxxYkh3iZQuV7KiJL6SipgbRjvCqDCb7YQizVoUFU1fvfeQXSdGUEFD9sQR17HFVYiZFm5k",
  "key7": "3tB6CcT9XqybYtLCdpC5GKma1J41qrDD62eVZh73qhrVRZfUxxgQ5r1X8migjaCCWUbLVdW1rGF7ye9dmYH5UbUW",
  "key8": "4LZxEJacUYAZVH8i2drSFSdZmmpDbCcgJMHYcbLNtgvT8FXH8ymRQawcBdUJk7v8ExoimWxPR8YqXaKu2thCPtLb",
  "key9": "52tJUPZAqbKMJTWwrKrXg73U7B2ix1r2rQVrKseVavJwS6bKkhHqj9pJJUa6i6Tw5b2TCFCRFGUhXZF8tDPJwNGr",
  "key10": "QfKcM6rbdWJe7xZckaBrtTLrtxNcUmJnLJVt7TQ6KzAQ8jDpZTqe59EZ3mikeM5EtPn2GUomDghXVMD26ntQPYy",
  "key11": "4gUo54UNHhxzUG92W2SkKWPYvrTaSMBetb8sXUUyPrcgMPEGonxjTYhJReTVjugsP1c3LYZy7VWFFv5hmYDZv7nw",
  "key12": "4v97N9k2yDAVciy6YQxJscPbaw82zPvvnjkaYRA6xhPcFG2n4taZKyUW5N7x88CNxiTfpFeQdfDVL2bzymjjGM3h",
  "key13": "5JF9QPnqDPkbSDaBCdKDRpak5iFGzyGntKSb69sGyWh4kW7BbqqF2dnVkJcd4Ko33TsWZq67uoVvMTsDQtmrVjp1",
  "key14": "3baRAHaVPZQjnVWYSHWf66LdapT8mnYQppF8YZEwGhmnMvefDWHnxfzg8ghQU8zZ6JtEuKSspkyb442g7HLV7ySp",
  "key15": "43FPMvFFduzEkHf2hqZeNTZ7o16nb2uny2ku2UcUdU2D9YtXiVM27KBKRBt8uNpe5GFuk4YjC9TLoxAFUqznpvxo",
  "key16": "28t7LgaB5XD1HciJktHJEkz1qm4GwJGzJ3n6GWoKxNtBaG9AFVEXsEfJ9GbQhrehFUSPa7GvTrrGEt4ofcf13M5k",
  "key17": "5yuTrsmfZhVKcYiFpW2cyvkta5Fhxfs3f5x4cXMDSMrNfiHq9Z2Tm49m5XturAfAqBp8Lxfekt2pGs6QNxp8eT6y",
  "key18": "3AQbRHoRfCQqTvEe51oNmu8fKumkfcossgZkXktVkGCDHnrZaVrAr26szYDHqHacQSnfF7tzJSUd79xF4mrLrz79",
  "key19": "5PkMivjnJHXmJepPie3N1pMMTWWW6AWVyfCr6W8gJsypHnhT4JXEfrgMeRYQZzKTMyyWFo3jBYPvAh6MFbB1UCq1",
  "key20": "xPNXYxcN21HpCKmjT93EFospPn29j33vU1mfSJvpSuWX8xSpuwtzMZ9DUSMU88BR9CfQAEvVxAKuXpXUxdsmzoT",
  "key21": "ymAumpqoJ9FH3w6YfXWhd7Lr4fx8P1ULK6B1QmtvLaeJnrnYzwu5wWhiVU8EzycVrBvipWonUdeEfYmriGjtccT",
  "key22": "4xxSBGCWWgPJS7Eg8se49FKtmWhHdqe1Md5UTQcZKNxva3TCYum2Cogvm3yZ8tW7nzn6xMfFFiWDhfGzYTxDpGA9",
  "key23": "3FUiPRL7GmBAaQFQixHsPBvSuRsSX29zMmNcVfZMscf3g2qXWbcTMZfPc16dB1JwZU5D6HJGCj19Jw9eQpXGUKSU",
  "key24": "3M4jELUfAZ1HfrrewaJuLoT71LbcKkvjtoZmnYWPBSocpzCP8Whx2SUvz6uacvntnZb1uwxQEu28EAJgYbvz467Z",
  "key25": "2DR3uzbTz5qBi3aF1FWBGwN4DC3v64v5kThFRwL3c5oe7MFRCmG83CCYXspyyzMvjGFRxZfyDuoMy4Rwt7v2yoVx"
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
