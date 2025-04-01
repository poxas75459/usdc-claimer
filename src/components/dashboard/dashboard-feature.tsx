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
    "5cv5PB2yrSHoLy8hivAbAYSZ2bh2ssQ4WcDZAFaa95VKD49TyPPE5BGCqnrbYXejFhmrDaNQc7HBCP5RcNjzsZ1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEDTh7WG4eHuVj6253vgHciD2rhjhg2X8MkpT2PMo5hgVJxDzmAgupdjAWmaUqaJYS3wBLqA8PonK6c2TpQT2H",
  "key1": "3E3ioKyG9XaXaaPMx5cKG2dfqtwyadKkp2PJWRvhs9euGvw3hC563hn526vGyPd8U5MZJZ7YiUsFKrqyg249VM42",
  "key2": "5iufyi4nBJQ9CgoR8dgr2Cj6CwVJhbATyt82rbb8xh6x8nzFXqZ3NdRRWHCdCQMMEJ469juyeTsSfkpBryZgM8XK",
  "key3": "2UFMEut2sN1zrR766cc3eJCHFp14xDbUFTomhKBgc5JuTWWajU51jVaUrCB7KTr2sexbScVn45KRp3ZWZ16iw9rd",
  "key4": "5AARgsN3eoEPMdWiy3UdZnBwNGFzA31gTT58PLJCgKR7LtU9SjEHw14cmtmdFppbrayBJDJmE4UMbyNL2kaEUJRm",
  "key5": "GnKbyV5P6wk2akZKLQozYjssGgkaCwZCXGNYMQd2ydXseRFgWgKLd8isXuZAHZKLKfNJyjiCk7S7RBpfeUb1DVB",
  "key6": "2FqeYZAHwy3DBdznFNQLkV69DHKpbBe6Cjo3XdfRQGfEMfRF8id34dvodCEB7Afvdnne2VeHFfYJa7CdYpKEGTeW",
  "key7": "59n6CqVqXRg8jCiVCvxyycLN5Ybcz12t96JVbpxbSjiujyXxewsHNrE84SgNyjgAQawtYKjP1NqGUZ11f85YBULu",
  "key8": "3bySjNvD5GUhVVdkpsWc9po6Xvbscp9xgL8yWQV2fWtSCBQNU2QiutjZtrSwyskuVVrNawn8fzEdZ5W4368NEy2M",
  "key9": "3jzxqmLDfFLQyz5LrFzxRsE1Jn9LWEPH74R78RzVS54r8mPEwzcZkLsR6mA6c3nCAQwteA6zvdNx3TK2upnZ6T6Z",
  "key10": "4QHAjHGE96VmVPbVuwLeJ8cJjPB97kycgipfXfqZACvB3DdCff4UxdLtQ8UkGJkjri7kXzQfzvESDkT7dsxFH4iB",
  "key11": "4CmgsqpaKuP3jjY8M5vsG9tAGTWwoXfZSPHvbys6S6mFw9R2b8Lf7Mpxx4QmeDRtZAEw93H1D1EUaDrwGuFaq5yS",
  "key12": "5HS1cr9bkF4MtxciAm5wZquD4DN7ViqEw2Nde2RPaKw8pt7g6eef2fGZM2utxSczq4JqJTs3QUDAQho9hEaBLmGM",
  "key13": "2XfvmXe1NPTL7x9ipxGnv1bZ7J4AgMp29ttreC54ZCKBUhBpMWZrzDfuNqoaj2rAkDVAWBNwD7xPjSzFrUn5UAUM",
  "key14": "2gKMaMZW73PTFuvs9zo9G8nKMxt4egxkVhZxYPSkZEcvdqzKFY1EACQcTQRBfMFdEo35PD14urbFQi4JiY9Koe6q",
  "key15": "qMzWyrJQf88VAHJ2CLr9C2a1DMQnS65FtTDTRNTq7GWZp98wwSar22KvUdHEAeDJZd8ZbrzqJ1GAwkx2H25cxMp",
  "key16": "VDojASVCiXVzUTekdjzkEK3ZiUPWqi5fWNvYb7gNJeHd7H3KpQJ3KsENVnBAXJS18akWPzYgD5FKkR4pwZERBFB",
  "key17": "L4adgaMPYup6hSTKsFtTyB7nqhNZAiNEQXe4eJrdaroH7i93t3FHWrMWyWV8Bj7ihWCnc6cfEMfCawugvZUGXa2",
  "key18": "24wuHieavP3GpnT6p1U64BGpGTi8QrovkRTExLF6xJm2fzgjnDXp12HsZeTS1JYGzZhmDmRmYYnDs5xm1wsxH3HM",
  "key19": "4mEZL8vt86YX2TCfRG719iv8U4a2SSrZbVnzpb5eBTxbb3EquByWKWrrJ8V3Bc6GLeTby96JcFWgUYf5DBgFeX7D",
  "key20": "2D3B1oEJvS37uvfduogY8o5xMPaLoD44ERb45aLA8naRNRst7zAMcbwV8AgAhH4fHuKo1dTRMFuhX2YbuvYWhMcj",
  "key21": "5idcrzWPSqmzcneK5nfY1sZ9BBt8XCR8L3ycouFhiTSnTLbLbtvjeJ6dFywNHdJsa191H3bBTgenEtgUEWUdiifQ",
  "key22": "2yjgy3npqvWpifJb8RZvDfcCBLEGK9hFHPRdYRm2WG13e9RHyfBnrFjBt1w2RXViJ4JtThUojg1YZw4DssxJz4ej",
  "key23": "3Vdi9uLXoep1RmBKnWPZVJbc73Z1N5bXV3qMYV4PMZpFYrUMRzoQqnxzxmcji9tsUJpfSmDG3tw7s5jkPp1eDRxS",
  "key24": "K4X6QTxzvU9QEcpn7fpV2P9ac24fFpiVoj8mtkWfgtBwKkqYApfid6KxbtC6hgXGMFfx5DTJcD9UXjRQgZyTHRq",
  "key25": "4FSVYuvtSZp76xosdLYZXfe7n1YY1vfBbnnYVrQdo3GRT92CLPxJybxFB431uHCDW5vQjyKM2EW5acDmNvF89Sy",
  "key26": "4d6AQyV5RNGL8oF9SkBMZDZYEFrxy9nJjXXAZK8EUs1rjYVQKWtxC4255yBhjb15B94meYj3CBQxFBic5RF98g7X",
  "key27": "W48Jyj41Vf3Cmcanu9bNuJKP4xF68TBxsRaGkG22BL6h3bMm2tS3dDUZbidaYYeuYGkLx7E5qZZLeGSp5zRdqVY",
  "key28": "3rjS8K1vPpX9qdmn2S36VquRehzCJnJUYpA2G4Tgu3CeonPQRv9mz58xdnaLxHYA6xburSAPGjys3Zvg999epHxA",
  "key29": "WhSyruiDo5shatDtZ6B2JEzfwfHRCzSUZsqSL8TYbiJr5dZiQoJusjqv5wsUFPq29hd6n7JRQtKZSR1aE41NnGQ",
  "key30": "3dyhHmw6Yb6mMC7ovn34VpcAbyZ1gBikZ8G3u8FXfvvrB9aS6isg8BBpYJqmrJFwHxe8p9Fjyr3NWHbJC3iVQyzQ",
  "key31": "2xMAbrgtoJJvEQqB9aNFxYbRweKsZeE8qwFTdg25k3deh5zg4hMoADdmnppdCdt5d5ZdNehUPCsBJ3FtQV6jbyRE",
  "key32": "AddSYcX6g5Lfb6ctaGq7xvUVLGu34vJ28PWxxRFPGbfeehc7Q3M6u6wNhe39HSEduUQVE2uRaqjt1nAe2MWrdmt",
  "key33": "2yuwtkGT7MQ7SEugiC8jaGpJYuh1F4MUaryHxh9LziwrrWhP1wFuX7E4Lo28Dn7pCADqqVYrEcwYwC7fQtSXsqBh"
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
