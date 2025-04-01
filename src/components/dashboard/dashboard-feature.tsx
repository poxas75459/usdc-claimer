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
    "4ZfAoEp1F916uTwvFTVqsC2PsoD239vHGqhioeJ4hujVifKSg2YcHaaB3xZesEBjig2dxUSYUCS9y5zSmxPg97P7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqoHxwgNdjEqh7EYS3V7nRcTrShPCvuLWHkwED1ERchfqJYm8f5quGyqh3EUW7kZgmJmSshLPxfuDGvyZDPCSzV",
  "key1": "2hCVuxE8HgSWmnfYJpU83JJ4LeFDEzv6kL4QzDAjgmkfBLvkbEShNk6gb7h2JVMZciHZEq2s7Vxz3TdSpTbB5h6r",
  "key2": "649LpVPMuhDZCpuo6AdSFyL92avxFFbFEwvfHsouYmxJs1whrB5PZDZJybx4brqQdKi77otrkQqDxDcxWzbMiqk9",
  "key3": "4bL76FnjBQzcsHn34JZdXPZXCd2Bz9HCdEQdkY6qND44jneDF17yyt28rae3smmoxX6ZikxEcmJfTRVvz565bmSi",
  "key4": "4yQK94q6PyyuikvsWfMWmoUvEisdmps8rtjoVySnMPyW9ztMQ6yhcYeLfsShwaxwyJMhH5hLoqToCsuj3c4YxYJE",
  "key5": "2TCWNVnbP2BNhkL6saoR8pR4761nyRvCDKve44a8KnoJ2XhGZdvTUzte8QrbUxx3eehPjyEBzeChX3yErbNsKFoY",
  "key6": "5G51RuV8dwMRv4D6HKt9nTHoiy8X9f2x8iAqS7oL9g2GV6JGDXD3ke9ubrfmK5CGa5F5VVoh3mtYzAzPU98axxB4",
  "key7": "4QFQSjcXFxcE1EoACY7QbPrgnVJ3MNp7hDGgKeq4qHAJhZByARj51Bv2r5QPcgEfTji5zf3SnNeLRkhhRkRXazU",
  "key8": "FAkAsmrN4wwhoD2xbnGBzn4UxsFg3PdMQSyDhUqraruCatj6RmVNghAMVBmeagF47UNJuNcdUs6qYZuqwNCSTkd",
  "key9": "4qLiVWpUgbi1DUtQk7yCpx5gtyukcDGMEXpbQpUJbya8rykV2PGsmFD2fQWPsRN8puukDdvGZK8XG8yLjAGTLPKx",
  "key10": "4H6KjYmVeU2xAGbkaBGP4yFRgc4mm9WJoRDeAspL8ieVY8WcigKAsd8X5v6WsXpgCzBPP2KjiHgYjyNXLj1218Mt",
  "key11": "2EQZQPbcvWtVoG3hcuRdeqWCKCi1HcuTw572Z8s9PiBfrVcUDmboHaJVkxm3xemK1wF9iii3NNumBB7BzEkFFfN4",
  "key12": "554uFhHTa2MGoziHB83pB5VyJrp59Lm1b75MpnByD9gfcy4zarpbom8RUoUJpPqjwcYMKX6cV4Nem4cQd3ukfF48",
  "key13": "2JPTibbtwqUbCumzRTyC34J6KJCEraBS3URAvX42F97bdmP77cpE5nPqqjVj9tv81L5ajeriu6QxmhETAANenKnd",
  "key14": "4sfPXVYwbYkNeSphZeLs6TwAwJjZo8wycKhGx7hNUaWp4VPwKVBFAZ1eC4ypwfzGhbre8tPHUCe9uCxTwExvt43F",
  "key15": "51B2UDdknvcJFjiCRQDn6aNiZoEvjDwt7xviJdcSV2dVNwbWrhSnRd2AZqF9pntW3Lu7kUDddvFRyHHimLnYwgQ9",
  "key16": "Z5X2xa8isofSJYDtT9ZBps6vJpAZokRwdqojgA2qRijdYs4Gt8MyBuacw3Xkxrz8T4ivKiWpfWrQr95ZM8MnzUg",
  "key17": "44c7vyLCyaYBrEiwHbGR7tYBL93vsa5twEADHUtNAVPNDyG1N5UgmSxZheHj8UDDB4sJ1UZRYwWVoBYsAs9FhbcD",
  "key18": "FCPK53BB1iAmNhVYND5FT9ZvKrXHZHFxWj5uoVWW8RREtMshYM9LtZva4Jgxcsm2yMN7q25M12Tdwov2cTzXRve",
  "key19": "nFrEeYy6x1HeM45QTpFEujAH4mpcqAzEJ4HWYJtYYNfQw9gH2bJSizccbGQqkDxiZ69Dx4obYsW44LRWMdcg8Hq",
  "key20": "2Lrkz2CDoi5MWVFwsuEtDcpGtG8SM8y5aqoSxtto5rBMK1LprHUc9hkJUYpJCezyNnPsusrLnnkcCq2tY5pJRi5o",
  "key21": "4EhHJo9fUCUScn91o4fSq3NRtaFfHPVdJiZ2wxnaiRtvzNpDzjtzGrcWnXBj9BPAZhwu4huGn82wEBz2zs2doMz3",
  "key22": "2WaG953FEsVrhdPVGvBGWTto1CjpujLA2BFtyBfoR8nrJBfEEF7NtsKUZ17YdELQPi6gxPm7VwmGkEFKbCb3XUfy",
  "key23": "6bqX26AwC6VPNio8YU26su9VpeWwcYHo173SngEmaMqeYdxsfZhjae5xLiN2EnAoSrjDfMwvRNE9QdmHnbaxPdD",
  "key24": "27rdGE1fwxno657CP11ubMWUrt7yDnuvbpwpUYg2xP3ne3s14XP33dDzHmS43YNd17Szt5VpGJSPLMeR3QCW9RWa",
  "key25": "3R2pae742g5xSYYz5LUdoLyA7nSkpkVLmdBgn5Bu713ZR4PFVEKziK9Tu1JxE9eWm8WDS2udWUMQPUQkpgF6TEzG",
  "key26": "4RgVY4wMJskkM7gF7y7F54nsHHgyL9ttvppjBRqWdkiV9AqN9vJW8TsTJiqN64sUxTi88ZRtEK9vPN28ftQF2x1P",
  "key27": "5pV2e5uC4qWdr41SvKVsQ6kd2t8Nr9zYziUDCA6QMHU1Ap5BHH4EiuRNd8fbfzx2Wci4sDbZmAygnifiysVQ4vpC",
  "key28": "2EgkJTJh3SeVt6axWEhACcUKhbUn4P5QQLvwhdHeVWwnQTeN5QmTvuXbME6Zujx9VGCS9gG9Rivy2qPw1AaQu9rJ",
  "key29": "4VDhrzTiG4q1FkFYRibAB2PXtVPH38dvjTTwxCg3FnG2jDtrnHc6BJTGUPo81b8XoH7pAPkrPJbzsxRLaDE6jj75",
  "key30": "fBFRj3ThXiDJDDhBmVEYRzWMGp6P6F3KZKgPtAMh66SZwSpBp3ohWrPJoJwBdiEwJahtZkDzqP3QXnc99KttihF",
  "key31": "3QTsobCTYUxKucutEP5A9TZA8k7eDHkc6QeJJx25Vuy2kFwuyZ7PoYjpKNeqC7xVQ5LcQ2AqmwCc2gdfWFawLExA",
  "key32": "2Q5t1dTDWWngFV67zCrDQ4WTRKVX1wZAPykKpdobeoL23vjzd7oY4pNjiabQtxhcwcoe5DQ3b7jrKoWLynVpMwzB",
  "key33": "2icqdHCHABGap3mHiAMt3BWfy756HUnSLxpw4GJTMc6wx1EDX1NaDoam4NCCo7KNsk4ob1Bw2nbtKfoMWvUxvcao",
  "key34": "2q6WVWM5ob1fnki73z5P97oGVDeoEJo19vpJbyRJ1WNzw5gUcKkctA4Aek5cassND4Af5ZZcm28pJKPszCSsbSQy",
  "key35": "cJEH8kXTnsH8dWHKzShiX6xGvkFjTQUDvwGoXbhTsx8oqy87k96rkXS8SpSX9B9AF17BkZ7P44hUv7stb9coBVZ",
  "key36": "2jNYf3gpLAMfLdYdEetudaWmJVf6SZPo1EWnrXXoxqBYzFDZ5CeuYFFaKnoxuL2h5FZoFqC9HSTa3firkYQ8p4H2",
  "key37": "2un5fpSs3n7ktxFjJVfeq4QZrnbdd6keXs3KjKXA2G3ZSm2q4BAArCwWzgW8CTznyhzyAFfaEB26q1khBGrzYoQC",
  "key38": "5ux5tHJQS8greBX5KPAgb6EKkW7YvMimRoXafehoShgi5aNGjUECB72nHxbxRuVT5RyUZLBCx84CQc6deo5Mg52P",
  "key39": "5yfndRDWh2QokdeTv7kVPBbMW7dYVFrmL3BDYgwsM8iXKoQJCqpe2U2bNj53KS77dLa6owkeu6bae4HAPNe3eu7n",
  "key40": "PgjRU6U3TAEZp4GTtiFxwFmpDcUUvy8tjCSX13BE9ZroNLoS9YHVVDxv5ufMsZ9iytWB1LPFdkDEBFxK8DKqYyi",
  "key41": "3qr9Q8NutWnNJaPLLkiisNEZa6Mb7yTtbeZSQq16ev7pQ5H7S58yJFzSSLedj6MfZAvi6QUU3HJmyhpjcjDqJDG8",
  "key42": "47WEoHNxzASNtnaEcaqKGATC77rrLvBKyKhPMEHZUCJNYpMNSV4M3vKLvWRL2LERAunxa8Trc8pdC5EFVc3htNrR",
  "key43": "4NDxquhmv2kx7HfNuTmbQofJLRYH1EPorN3yXvPaCDwKKm77py7XgJnHPN8kvGTyY1Py4mFn17JVyPN8BPidEict"
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
