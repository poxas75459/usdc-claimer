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
    "3NaYoaaEwmEN828GiHLG5b7nvF86fStMinGtchBeDoNHd9b8QwmLKoLFRta4bp2XCafT74wA7iMD1jH1yNuwPEgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRMPkGdhF9qEctV1vNpdQhq988cyCM269VE3YtL1Ptw7eqUqRP7LdFrbnkSpd2Lcj5KzsrZ7dcSYYJ3CPJppuhN",
  "key1": "2tCaBbmsea9iA3bqMmC2hRJkDBBWa6Ty67CrABQWshyDUTRsvPsfhu9s5djPF7EUxzkmZdqkDCZyocM8HdcLyJT7",
  "key2": "2efjuuBJvTFnU27erWs1qCxjebZU292DJLvyn6GLSLvhMoSVery5KQuZJQNYcE3oJ7TY6tz42E18GzyDSU6VyQBf",
  "key3": "6781JiyvDWQcuSaquPUJQm9Vw67dLNMNCqEqzxWS38bJRDFrFtdxNx1e4Hawx2dqBbY7QTFaMvav8CSvXM4vLFii",
  "key4": "YRSR9iNmFQt1JwntiPoDqP3UYoq7XNvCMGmh83brXppY4dqhz6VMkN9DBSvm1YRSNHv8PLGvHA8M4CotEVWnuWx",
  "key5": "39dTgn8xB5Z28n4uNFg2xTPpeEHeTjTTpDtYm7X1ASZG9rq6MyardyuN9GBQKLBfP6K7JWKb6zKwJpY8tY1GavqA",
  "key6": "41Nt6RCE4A5ThihQeNMFA9mqYRyJ3ebaLKGEnzydfjj1BudcCmSj46QWgCe6Z8fJGkVm5KS4BedwWbEckJhyA7sJ",
  "key7": "2sU8eqnmohKCzgHsXEhywzaP6a6EjgmiYFcKX74fD5nZnUqTsdjHetcUJCX3qisqB5oF3NjUQUB5Po6wCgzMfnCY",
  "key8": "2d3WDTqVX5RvoveFXCDs3Hxu133EeWtojX4zTxeKkkssVXQ96YvzFvFaMcUzzwgsQS6365YJAXsfFFhSQjaft7Ut",
  "key9": "2TtGVf92oKuVhWWEZboMW12jp2mDnLL1znJs8bDREJJd7i7qbnN3KrroKgcyK8wYFndYmeNr2zKDuFUkK6u2XPgJ",
  "key10": "3LPJpMMQaQLvzaYvaxbV52RiqV4rX6NK6xNxbkssK55gvdbmpNLGkTqXvXqirY1ALAVyYhXvLcC7u8hhYkF52spE",
  "key11": "2uSAmG3HgNcVz1Bt3SbokCMekvMkPyhNBZveQdropHjm1TpKnxd2BvvqcFzHgJZg6DZErSZ4JrEiyLqALKeuMwNa",
  "key12": "32iZPECPNkFUhsQQmgDRpxPmKC28aFya4Wt6uWsD76kx6SQfodYV4DHTPggQScwvsud4a367L9EVq6iaZh1kBPJS",
  "key13": "3EB7goWDPmUYLNV2ZJwGA5tuup5Zqcwm87BBgTjgPXboV9nC71MXWjUQ6qZ7dHHY3njq3PDPQ2sd4PviUjMcwnku",
  "key14": "3s2XQi8XPo6o598MPHYoZrdhtoFLaFu1KsfkEw924Qk886KqrBXgtyneaJizZVDVmUFy9c8LavRLLiBJDLH8Z73E",
  "key15": "5CKHvdXuSGGdcsvyRhcYuJUq4igVoSAKBauAN5LFeiWLShQB6MmVNm9xCAHRBzCxSTDME9ANVBei86hjqvMByJHS",
  "key16": "pu8UpBX1oYgskYBnSTA5R7mdwzzqGRvcqWBNz3C9DfQtdnSRrPjXS2Vp1Ks5u4W92txZ4SBeS2VtCfgovaLM3yA",
  "key17": "5RR4MpreGR2roT4f4f8zKPWtaP9hf7y68TXN7Sn1FrD443UqNFDaGQVvgxGfpThPyNJJgUdjy9LWxpb8jf4ZTM95",
  "key18": "5QLQ5fQHm4n4GvMngyN8uNi395bFyQ1zqQjfDoNW81zhFLMLKTvnfBJt8nwpYcsEpdhmpUz7D23rts39DYTZqKt8",
  "key19": "3qD1ugxdYdm9bPFBeuCbgrxtbDEMxsrS8bxGXCXH92vYusZ5QKAhtmTecXb3ZDznh5dH1qdMYRYPN2ipqjYzMeXW",
  "key20": "62F7twnsUm4QooRFts82AG2SzMsx3AS3n1w1oKz73Mec7qDbkMaJMxtexdeYV5hLD5aW6VyxKXTUDK1yNHS43wuw",
  "key21": "4hTLrfStdwTs44cxmpRhnJqN7ohfTUmfviQ5noZnG94HY9bZGCkYX37ts9jWjzX1cdVvkS3tnV5NQJ4fAYSk6cdx",
  "key22": "4vwfTMZjGixXxR3F8UBTyhZdfrdFvghUTa6pcyUmanugNaupHudU3rjyPaB6hdDFCFo2dVz9VrDieBNKoKt8w2vv",
  "key23": "4FhQzZJz5JVTRmeu8FKsbCKxw1X8SHpSE6qWndDhHkZeiCfGkLND6R8v84xiiCzuQ7r3Gmqy94vJrq7uaHMZjT5u",
  "key24": "4Q5BAmce41mvgjZphUbJtzn7Kagght4QRhkpXcaFi2GgMFV7kacsqnd2p8TxagAyC1oY1rJzQrqYk4sMWvHq4tEt",
  "key25": "V38g4R3KxgXLWtX3evoZ6BeaLZkQukmEf8QC4z8UpD27hDLM6nS1qQ8cx9jw8aQPV5RaQERKPb9SUMcSoLFar4T",
  "key26": "Y644KHAsGwxkygPUFHj7ArrSangumRmLzv2HumS6B6XnMKYQiVW4AoK3eihAF386gU2E5dupX2u7UmfTewWyxaq",
  "key27": "862VxmxzgHYi2rbYseWCKVFnFzyR87YN1mYzoMs3Rk5ABf6Bn5Nt9hqSDitN5mxLwAjV15ywCjH2FzuHEMQ6kp1",
  "key28": "4QS9UwcqzWhz6NGLngVfhoquo29raNCJehougrJZPxkUEojpM87hzBFtRSP8o7z9dA8oL1zAM2hQAN2HoV4iMcFX",
  "key29": "5sQ2hkwFisyY1XbDrdv3r5QMLq8ta5u94Xwkn5ADiokYuvUrFagLS3eDvhKVjKusS2pmkU5BZYJZ2LHWyWk18KGs",
  "key30": "dXZ2uwVnAfRgitAdQeNWE2cyugWGw52Uh1hSRCWr4FgvGyZwwFyiqmdsqhx1CqiTqZyHwJZTqRhTKZdgx3TrGTe",
  "key31": "Ma67U7afSKgz3seZVRKqwApNUKQiGCfPssrufrTRoHfm2ceUtqcSZVH44jgjZXvvfsD8DCUQmWZpC2HMJ9M6ZWc",
  "key32": "5hhqNSGA64mMVRjesydimrgqA5h4H1N69ysDuiqMkjrdkCMfWHTTKthrq7s14faqBAU4azjXKEMfvmVtvPknDvwg"
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
