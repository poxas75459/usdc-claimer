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
    "2wj8h3Tu5QyTd2yf4odsXmToAqCcTSj1WM43eHkEJVFaatvf3uoGyfefJY67vvCmz5exWDpCxFYn9schwzBjNTyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctFCwn1Sa1TXo7krx4XSQ3nqUhhcuy3xAJRg54Z2ZnaQ4FKEvSH6wUnt4GRpRdFwGh9vB6zYQ5jfjLmBuixQtLi",
  "key1": "51KQsTRdrfi7YfnD4v9azR6Ni5irGRu53WAdpfvERy56RFWuKEdXxxC3yzopvAS2pxU5BJ1kSQS3gZu738Eh9UR7",
  "key2": "3B26p1jno6CfNixcdt2UUofzhz22mvysujUH6J342JoYVcYNyyrjgAmu7hKZfUgXacdwHaFj22NtWZJvHHwmAfLo",
  "key3": "2QFVMuyv2QLWochQeNk5ejj34JAxVaxjtM1246ZNtckc4FWp5qMSXS8Si1DJ2uzPoiXTcZZuXki7brkqX2aPhY8q",
  "key4": "3DaenpBdbQJRg2Mt9uPqgikjQW6Td5WbnZ2piZSZuiDkX2RWiEGEUxZamJyVsEoGY2gUiR432PbaQKbxEL5NxwxY",
  "key5": "3ip6fpkahUpJJVjpjckDe6ND9wQBFNUeuhkiu7MfuPvTHH7SVbEvoq5mLjY1ZYuorL3gkAh3pZpkoqRXRmrWsR8c",
  "key6": "4QPkNdfQS5fNX5FDxWaHTCwx4HRduzC6RPD5w56TemZbmehKTzqzSZP8BBVnEUA4nd9tjgMrPGxbp1nbBqTd116d",
  "key7": "3jPwcQStc94Eb2wSztxsvwoSxvUBagLAvYndad7Z4oZJry5rLuSUDbjt4dX4o3zkVZmn4XWfVLnSGyxmRP3qpeiY",
  "key8": "3Zr23rMtCkLzWuoRQqn3QsjLP5sKHBDLsPPPqEzmUAaNfsJRNUoo59P9d7QZELLPwLtzLm36RYtfyaPNBvX346uv",
  "key9": "5vLP8icPH187Gx98Px7xuvLFAw1PqcEDjn35fPXnc6YYLJDratLsGnJkMX2fcHesi4wzbkUgUqmLvqFebrTR8ToE",
  "key10": "37gReGVbUVMvcS5S91KmP8oXBYnFYX6snSuM9W1nBWJEhwVs2SSGyP2n9i967PU2LeHJKGbpKWZcj62Js83DHBQg",
  "key11": "3ecB3Nx9sBgsgXQFyb5YoN7RZVPmqseSnanaEHrE1dTkCg3QDJFLKFoL2LCARQnpwSYHNKGrjKGBpSdAi7G37ZU5",
  "key12": "2qmoJFgfWmondEBoyCd3yexhzH71TvgaUDpVV24rkWBHiGHgSZ73xh1mQ8hwyFcVkVMXSUq9ABuvjZyUR1mztPKj",
  "key13": "wsTLipECksMg4ex2nM5BhFNW4YrQGbnuzhhKDAUXUyyx9kBJs3CoAQJ1iNQCS3vHNkyBdZgVzSXskrHb3AygBQZ",
  "key14": "2aTpmfq7ATrbwUAqH6qD6h7jpvkPo4oSiKcvz6jjy5npW2duxpBjuWSkTP7tkwBXbXNeMmwRJf6HApiNF3Jhrmvp",
  "key15": "5NEJFhAn2t48SF8hf4xWU3BXXqb6daMAx5XX2BxBkC7gTrE25zVDC6tCH1jsyGChf4rjLuj68pm37ZoPGrveS4yH",
  "key16": "647H8fdqGxEs93dY8t4mfntjmCkLYDLdqYK58uNFMLQzfAexyBXPogMTMSGS43FkfrQcnYj1YREw9PMQ6nyVscBY",
  "key17": "4qpkfPih7nyVXUvTHe5EuHMtyUACNhmcQu7wNTib4i5fQGqBHkWuyCsnKRL2Tb3bV469fmzbWHBDXXTe4wxY4Rp4",
  "key18": "3LQ1pWK95yViJ2dopgeF1xRF5BhEwzVYhXbYX78M17YLbzpTuAAXrY1XZWni46PkrhgsrBr7FEJGFyncjkhfDQgo",
  "key19": "4CAnb3UVx41ZT6jM3K7kBJcuKh49oQzy9w72G7Rz9epcZT1sLCPZGudjHh84Fzgxen8qodUhbhFz76jHT9GZ8ba6",
  "key20": "5xuVEWDywo6fYWUQ6pLtpXy8j1nfLKeDuLeCPU7e7nj6doLJFLrMaccMstEDSdmdHiRAWPpfVNcKPzBn4HsFJRKA",
  "key21": "3oC3hK9AfEv5jwicmbWU14BapeGLUD6fekQXRUrQj9x2oHnfmbvF9KYVDQr5pF3wYDSw69FifMGtSfx7cLJwqVhi",
  "key22": "3Nf1uNwDWBU3NqiX3ATLUKu3eYUgakdrPJgjkXpi5NrRDSQmVBKA9EwZe2VvCLTziHW2AP5tUkcbbnzi14J21bZu",
  "key23": "F7cfD9omaa9FJhwW1hDxResth4gWiyQrXRB4fUYqQBDg8nVe9oSoghFaePqRZcEYtKxXsVMT3AEJgKV2DpuRSbV",
  "key24": "2b44TRg7pFBC5jvVAGVMTnS4Jv1zdsMsjve2LacZKXUnyCxPgFF38Ckn5sXESF8qwGwjRqHPXiAsYTDxmLWU2jQw",
  "key25": "3oPCscT8b2iVY4ynvskupUCceixxv8giUH6RNzARBuyPtNEW1zxiY4iFufYZa2NbBvc2tEcke6LaSzGiop8VaF4P",
  "key26": "29wfhZUvmFQ2XeHwnqExPECs9uobW3pShZ8LwKN6jRnoQQEdatvs1phvBsg1T8xow9D7AZahNtUBhiYUVt3p4UqR",
  "key27": "4pbwinzei2HqHTDDeiBBhNYt851HuoeieACpLvaVWymtZHppM6zHRaNZ5x1iFjETQ3TVzhqKepv3vnqQCC1S4Jkz",
  "key28": "9ZA7K1X9q49QcWtch1ja4DrjeGhJoEnRNg11gbotFJG2Zts8K884oY2bYZgDkERm4ykDRKKvqFRbAxsWX9DCKwp",
  "key29": "eJoGCG3c634un21roZJxzt376nABqA353MNBxFAgQDvfFNoJJ8cn56saYh3nsKpm3u66rhn8B1BCXhtdHcUK95v",
  "key30": "4oXJCxVWeAidoUBjVniVAkd4urWkkQTNxsd2WcM2D6NCyqX7eLTMHfb8mtFaQ77AMMMDvHiX2dHxsuTvpZrpeFvo",
  "key31": "5AbqXcUP5McPtZ1n2ozqpwKCnMyfPvKDQajLCdAM4XrViQFJUVyK5TxCiQEBaFRxLtQUEcbkKr4ZGXTFzpAJdZUq",
  "key32": "gS5AteMtZSZRD6zeJbkk3DjvSNuELdCAtsvtPjp2pBRexRaqxo6Q7Mx3L7QHxLJ9Y8zoNzaVNr5pESFSCJQHtsx",
  "key33": "3RSLGrvPSZhWA1hx9SN1unU6WGGRed7iC6Te17kVft7nDMmXxnwfbSEiTAKDYwhMLRp6s3NGsnPsG8aLoSkf8pop",
  "key34": "2up6oJ2CrX4MKdciPb2ZeJRzsh9WQFYpg3Ygt5FZvgT86oaX6pvpwapXR6uK77pNoq2eneeP2SNEkgLBqvwYxYyK",
  "key35": "2S8AMC66YTJnVGUttAPQxuK5voeQ7WGrTJGMm5WHAVwoJffKXj9afgojVnUhJbUPeUjSvv4bVxi6avRKBGHZFABw",
  "key36": "2dGWg8tqXAVqtTCryUcdP4v6HJE6GV1sFVmkCZNasWdd8m8wC2gnX7yi8EFawvyntHhfWw1VrToTyDKUqidqVAH4",
  "key37": "5TmoFWRneF8RKFAMhW3NDUP8SLzZUftyTX21HsgPzSaJwcZ1BK86KvaTfNqv1sWox6aMED7resiQaFj3Nw1cnwbS"
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
