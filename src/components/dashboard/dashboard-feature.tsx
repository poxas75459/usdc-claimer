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
    "3rcY58CFPWdMTyk1PaUaJaUi35KQVUFPrLiTMfKWktP8hx77d1xHs859ukgMCe2p4ReZyv9YHCxRiuPZ25ErsMfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MnaoiGTb6hEoP1GofH4P3maioPYvWiw6kWh2VcenhECZcQEkSok6UceGF4rbQ1zPx4JFg7FcgqZLeSpcDoj4bZQ",
  "key1": "5FHTzH7jfh4kRfdwAzYNSgkLMqzYsdMQU543SZ4jBT96cnVjUqiCKjTh4GXeyR8Y2sjuVqE9QRrtgMdW7WRzpbhM",
  "key2": "4Z7bs8PM7RjugBYdmj2URtgwTvbGF4gspEdb9NoBM4wCSAEDKC9m9szyDgyjsYcMoHFHsXGZQ2Rp3YpfVMuJCqxv",
  "key3": "2oBtbd94jq2i57QaKYZBm7wptV3V7fRZKUHiUQEkmjcz4ZyM9QeqhU418DuLDSNti85s4yGuY37kxYJxMudPeDUv",
  "key4": "44yrkM3Ch7ZQdfxBnCbTB7PMmUyqcNuNi1x7P4dHjq4jBSuKMuXzfPSjqgG8skuV4h1gNFBoWfFb1MwMcEdnAbdd",
  "key5": "Z5SLwH3CmxWv9Y5D2jbAXX27LyWiVDZA84EpsEop9Z1E9wtoCtmvDQLQDXYLLFCyJb27pL8xBKTazpnW26KpacG",
  "key6": "48BWBDu73TepjZ7vMafB5BkYSXKz4EcCjKy57hvrxAmNY9MNik6K3rC874jUyooU59icmh4JDw5x5WGHqxvQSMqa",
  "key7": "4MG74WZrxBijP6QxhUtJL3LYX2F71X5d8SzmkURBt7Cf7dbZgtEhGPa8jvPtcELF37Eo8RZXUiuXXGUCFtvwMQHA",
  "key8": "2ub1MnEZMoXzLvRjdfLiNviT6GbevJyGomY65XEknrYSC2nDxBASTww3o9Nf2HFfdz6CUBb8WXrD1uF5qaQzKdBQ",
  "key9": "3BEH2nLUnd17PEfvMqi8HnVo9eDfLMfy2LcpYpqc1jTsZE6pZBYgN8cq2KfMyHG3Z1gyhUWufcioCu24ZKQWK1UK",
  "key10": "5wS1jSNVihMpbDaxnKD6eM2LGUQwStkHvQ3zUhn5WuxEVFk2Ja5MkYZ3gS9PE4uAhys7Q1euBhQacXYpjoHWGZ6Z",
  "key11": "4UR19iToysMnyGzdPHGEfxrgLSsHZaCysbPyMuRvPyRtv1oNiwXrT2WEmZ1P7R97iFErJdfgRuFBxBuT4J6xQZvh",
  "key12": "4f3Xmy4DAv1fVgjpPggeL4hNd4aA9ppNoQUgNAowyRs1ESdz1MjWZAB1NJg9Ts3c2oVP757P9tTN7aSHzByi4Yzm",
  "key13": "3T3RXKvDHTuahpkAHx8YpC7qoYRfZwAYieuZ8aFEL7eb3XixG4LPKbUjB1SXDgcoAfC7GxtS7f8J1fZkK8yTBbhg",
  "key14": "21HCS25vF317KCV9LHZogVr96XpfAMMYogsRR7Wrspi1AVNrXmLd8RKNM8eiKxZXaJb8ivkpqH9qyDk7e434EWuM",
  "key15": "i3mNU3pnBWnbn7svQtqroJdTuH6beKzc68L2RRVp1xgdzpuho69jWx7cTNTvNADEcQz39dFBuTwpr3uTXEqqbK3",
  "key16": "2KDxSobws6cEs6LZpXL4Jsd49qGR3oNycDhHjcpu3a78DBADRz8roRBdMUVS1N3hbG1GYo852p1yTxqnBQSGpVkf",
  "key17": "37oanzbjD3VhSNVogxPbhJ1Li9trWqt7F8V1zceyo8siBLGf91PVjFk5oLFRbqGDbMaFqPmYzxTfwSXB4vZvgrqE",
  "key18": "25CeQraFzrsr9Fo8crto5BPpVzisjwZSWpqT4buo4bpwzYMV63DSVdABn1ghXrDVDAP3YF2iPxxCrKh7dH3SEpc7",
  "key19": "Ccg2AckB4MbxsPnb54YUhnMN9a5NDR834nzoKypRLY7yz4H5ZTNYxzJbngPYaNqrpZJm3kbdp4v7Hq4iMV9de4T",
  "key20": "5r47aYiR85DU3EadpocJY8G1UXNopQpdbp3T3rgsQmJLJyNFuzGP14XbxRQ4nY8RT7LpruGnkwBFFiE7xsSQ55Wi",
  "key21": "VjKRti7L3FC6cShhJBwCA474pZP2voLdciebjx9aC7wfXSjdMk98v76m4VG7XTbhJ7uZ44GNkKhHrf8YivdTTZc",
  "key22": "2TxC6KU8uXX8oi4Kt2JJSFdJu7bMsDzktiAu5RkNQ9CuZbg7HfFCeLqPxEvPqef2U7tWzxKDPDk8ZSE8LcpRxUqq",
  "key23": "666BhujftbBcPLiW846CVhd9J7yuzdta1VhffodQi19SDbudEcxksrG4FtocsWt1rxF3Ad7Sgj8B68MwySQV9EEx",
  "key24": "2z4bb9gSFjpvLLaG1tvGYkm1xukLSQcuvf9SHu9FRnbUaCSTyTSKrv8gNY9ZH46zHNMVaVEFNJYNh8R3BLTewBDW",
  "key25": "Tpg97T6KVb95MeBFnKnv7EbqXaAdNjaAHX1AqpH2BUYX29SrYHpS2auALEfJWf2eiRXxwNTWYeZLjLwQjxgHpGV",
  "key26": "4Fk6BYXYzth1dRB4MCAMsaX5EuSjGb9JhUAmmwof2kqDoK1eX8FHr7fCCqJkaxZrcrMMK8m633M8w5pi9ppc7AY8",
  "key27": "jAL2qxuekLF6tSNX9FbRBzVz68b1cwNtFkP8dHbAcQpm2WwB5rmfGeWnnzcj65wjszjbYoKq4oTmqnXJAdyLH4Q",
  "key28": "5kSU5KPH1EYmYWavLWKjVtm7GMs6rGEihAKGoybBHHAZ79q7XrCi8KpLaHK7ANZ3SoSQohLVNK4gX1eJhWBwdMt8",
  "key29": "3iCNDuAUycrX8nDdWo1B2rrXJWk2E2jTMdp8EGkCp5zAfgdFpSD4oVhUZekouCsVKL2FKKpQ6QnLAkK1Yo4qAXjp",
  "key30": "7LSvEnhmEBaKi8mPJ5sq5sCRUFnqrdYGL3YqwdojjhfWvWFGyxqMx4EmhTSvCFHRNFfopukLwLgadXJ76jwBzzC",
  "key31": "3NVRJYpv7BETqSUAv8t7iz87dwh8Ut48Hg1C16HAqyWJbrq277tQrrzkDFXoDj4xFBwHReLqWFzgBGd41ozGotfa",
  "key32": "4TnC5BJMGf6XT3kidWuYdBB5ZjfwGzdfZA2y8Vz9Ta8ayajeGhWAZB32ubYmJicCAT3iXdhQZcdSLxM5N3Jbnre6",
  "key33": "3EGvsErdPJjVC8rEiR3tbxhvSySJPoVKAycnre4a9JoTJempbqhEbMB6S9ZWtcZLZHV2rsbtPXB9K5e5GX2FbMoS",
  "key34": "2jmenHEEJzE8HvGF6n3HdGN3Cnke7LFJ2NBG9Eqwio7DkkwMgXtMDa6ARDuka36g2LmgTezm5zFBFD4Na4MgD5ke",
  "key35": "4j13myFbqzKdbvdNXhNtAqkKhpzADUbTDZnm4UuYYYaBixbx9vi7RFmWoEeTEW89b2Was4wvP2ikmooBvLuqyqdE",
  "key36": "2xNZmd5BMqKXaNrTbyjJ7kw3rs7RyEiUfHSGVFAGkH7h5zYLtQEDZB6jYGwmgy6AGjVorHs1LiMaM7wvQsQnHqiZ",
  "key37": "3XTRVLpTEhJERyXF7uWkjXsgVZLR3MbT1SUzZbt1vLBpGFQi9C6CWiSXMwNoxVfTvdmiNHLAb1xPHBXZaYfiJ94j",
  "key38": "5kKVxFj28mojT4MWoiBHfQuzpUGy6eRK3KbnjA2txMnvkHzjD7vYbXhmsrKLxKNDzkV8Bk3f8qyjH6CJvRHARWoG",
  "key39": "4BJTgWLDYFQHAqGky7di9zeVX6SrEaoXfXt6s4ZujpWCwfgLHocr9nuWDzop6xfn3szQpVDSsog592usSDECVVBt",
  "key40": "5sWJrS9j467m9Fmos1gFVpCAurQsonZ75k11p8WjsbmbSgtiWxEj6sJkTWL6EoM4sJdaVwtMwLzGnYAvxFUEct7P",
  "key41": "5rqZyrxh8TuD4k7QczBBZuiWDT5bXw23Lhs5f8p4YnmTu74eJzgi1nDyuercfkcbnNRcF9a5b3vZi2dNNYEHMT4r",
  "key42": "4dz8fQcQ64oLAUw1XJSsMFhRwTfu7524P8x5GNLEWAg2rxnYmsFfgtfz8NqDXP15auzeDPEeLqsAvGBczzeAya5f",
  "key43": "NJ6DydcX8xvVaKE1zmyKtQfkGmfzrM3vZ5NgkANpnDyhMZxsGzfm41yVxAudBh2LZP1hiPf5apTH8FTigBvWTXc",
  "key44": "3ZTN5ACoy4hA2WRwehPbaSecgM1NuSY73FgGiVwtSf7kcgMPZyAnsCbuV2TJgpeWwxDp8XaeroQGrreJEC8kWgyX"
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
